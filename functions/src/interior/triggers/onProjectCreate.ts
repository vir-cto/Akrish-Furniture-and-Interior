import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { FieldValue } from "firebase-admin/firestore";

import { adminDb } from "../../core/firebaseAdmin";

interface ProjectData {
  id?: string;
  projectId?: string;

  projectName?: string;
  name?: string;

  client?: string;
  clientName?: string;
  customerName?: string;

  email?: string;
  customerEmail?: string;

  phone?: string;
  customerPhone?: string;

  projectType?: string;
  location?: string;

  designer?: string;
  designerId?: string;

  value?: number;
  projectValue?: number;
  totalValue?: number;

  paid?: number;
  amountPaid?: number;

  status?: string;

  startDate?: string;
  endDate?: string;

  createdAt?: unknown;
  updatedAt?: unknown;
}

interface NotificationData {
  id: string;
  userId?: string;
  type: string;
  title: string;
  message: string;
  projectId: string;
  projectName: string;
  read: boolean;
}

/**
 * Safely convert a value to string.
 */
function cleanString(
  value: unknown
): string {
  return typeof value === "string"
    ? value.trim()
    : "";
}

/**
 * Safely convert a value to number.
 */
function toAmount(
  value: unknown
): number {
  const amount = Number(
    value ?? 0
  );

  if (
    !Number.isFinite(amount)
  ) {
    return 0;
  }

  return Math.round(
    amount * 100
  ) / 100;
}

/**
 * Generate a notification ID.
 */
function generateNotificationId(
  projectId: string
): string {
  return `NOTIFY-INT-${projectId}-${Date.now()}`;
}

/**
 * Get project name.
 */
function getProjectName(
  project: ProjectData
): string {
  return (
    cleanString(
      project.projectName
    ) ||
    cleanString(project.name) ||
    `Project ${project.id || ""}`
  );
}

/**
 * Get client/customer name.
 */
function getClientName(
  project: ProjectData
): string {
  return (
    cleanString(
      project.clientName
    ) ||
    cleanString(
      project.client
    ) ||
    cleanString(
      project.customerName
    ) ||
    "Customer"
  );
}

/**
 * Get project value.
 */
function getProjectValue(
  project: ProjectData
): number {
  return toAmount(
    project.totalValue ??
      project.projectValue ??
      project.value ??
      0
  );
}

/**
 * Get amount already paid.
 */
function getPaidAmount(
  project: ProjectData
): number {
  return toAmount(
    project.amountPaid ??
      project.paid ??
      0
  );
}

/**
 * Get pending project amount.
 */
function getPendingAmount(
  project: ProjectData
): number {
  const total =
    getProjectValue(project);

  const paid =
    getPaidAmount(project);

  return Math.max(
    total - paid,
    0
  );
}

/**
 * Create a notification for a user.
 */
async function createNotification(
  notification: NotificationData
): Promise<void> {
  await adminDb
    .collection("notifications")
    .doc(notification.id)
    .set({
      ...notification,

      createdAt:
        FieldValue.serverTimestamp(),

      updatedAt:
        FieldValue.serverTimestamp(),
    });
}

/**
 * Create a project activity record.
 */
async function createProjectActivity(
  projectId: string,
  projectName: string,
  clientName: string
): Promise<void> {
  await adminDb
    .collection("projects")
    .doc(projectId)
    .collection("activities")
    .add({
      type: "Project Created",

      title:
        "Interior project created",

      description:
        `${projectName} was created for ${clientName}.`,

      projectId,

      projectName,

      createdAt:
        FieldValue.serverTimestamp(),
    });
}

/**
 * Create an initial payment record if the project
 * already contains a paid amount.
 */
async function createInitialPaymentRecord(
  projectId: string,
  project: ProjectData
): Promise<void> {
  const paidAmount =
    getPaidAmount(project);

  if (paidAmount <= 0) {
    return;
  }

  const paymentId =
    `PAY-INT-${projectId}-INITIAL`;

  const paymentRef =
    adminDb
      .collection("payments")
      .doc(paymentId);

  const existing =
    await paymentRef.get();

  if (existing.exists) {
    return;
  }

  const projectName =
    getProjectName(project);

  const clientName =
    getClientName(project);

  const totalAmount =
    getProjectValue(project);

  const pendingAmount =
    Math.max(
      totalAmount -
        paidAmount,
      0
    );

  await paymentRef.set({
    id: paymentId,

    paymentId,

    projectId,

    projectName,

    customerName:
      clientName,

    amount:
      totalAmount,

    receivedAmount:
      paidAmount,

    pendingAmount,

    status:
      pendingAmount <= 0
        ? "Received"
        : "Partial",

    paymentMethod:
      "Other",

    source:
      "Project Creation",

    createdAt:
      FieldValue.serverTimestamp(),

    updatedAt:
      FieldValue.serverTimestamp(),
  });
}

/**
 * Create a project summary document.
 */
async function createProjectSummary(
  projectId: string,
  project: ProjectData
): Promise<void> {
  const projectName =
    getProjectName(project);

  const totalValue =
    getProjectValue(project);

  const paid =
    getPaidAmount(project);

  const pending =
    getPendingAmount(project);

  await adminDb
    .collection("projectSummaries")
    .doc(projectId)
    .set({
      projectId,

      projectName,

      clientName:
        getClientName(project),

      projectType:
        cleanString(
          project.projectType
        ) || "Residential",

      location:
        cleanString(
          project.location
        ),

      designer:
        cleanString(
          project.designer
        ),

      designerId:
        cleanString(
          project.designerId
        ),

      totalValue,

      amountPaid:
        paid,

      pendingAmount:
        pending,

      status:
        cleanString(
          project.status
        ) || "New",

      createdAt:
        FieldValue.serverTimestamp(),

      updatedAt:
        FieldValue.serverTimestamp(),
    });
}

/**
 * Create default project folders.
 *
 * These are used by the Project Vault.
 */
async function createProjectFolders(
  projectId: string
): Promise<void> {
  const folders = [
    {
      name: "Design",
      category: "Design",
    },
    {
      name: "Contracts",
      category: "Contracts",
    },
    {
      name: "Invoices",
      category: "Invoices",
    },
    {
      name: "Photos",
      category: "Photos",
    },
    {
      name: "Documents",
      category: "Documents",
    },
    {
      name: "Approvals",
      category: "Approvals",
    },
  ];

  const batch =
    adminDb.batch();

  for (const folder of folders) {
    const folderRef =
      adminDb
        .collection("projects")
        .doc(projectId)
        .collection("folders")
        .doc(
          folder.category.toLowerCase()
        );

    batch.set(
      folderRef,
      {
        name:
          folder.name,

        category:
          folder.category,

        projectId,

        createdAt:
          FieldValue.serverTimestamp(),

        updatedAt:
          FieldValue.serverTimestamp(),
      },
      {
        merge: true,
      }
    );
  }

  await batch.commit();
}

/**
 * Create default project milestones.
 */
async function createProjectMilestones(
  projectId: string
): Promise<void> {
  const milestones = [
    {
      id: "planning",
      name: "Planning",
      order: 1,
    },
    {
      id: "design",
      name: "Design",
      order: 2,
    },
    {
      id: "approval",
      name: "Client Approval",
      order: 3,
    },
    {
      id: "procurement",
      name: "Procurement",
      order: 4,
    },
    {
      id: "execution",
      name: "Execution",
      order: 5,
    },
    {
      id: "handover",
      name: "Handover",
      order: 6,
    },
  ];

  const batch =
    adminDb.batch();

  for (
    const milestone of
      milestones
  ) {
    const milestoneRef =
      adminDb
        .collection("projects")
        .doc(projectId)
        .collection("milestones")
        .doc(
          milestone.id
        );

    batch.set(
      milestoneRef,
      {
        ...milestone,

        projectId,

        status:
          milestone.order === 1
            ? "In Progress"
            : "Pending",

        createdAt:
          FieldValue.serverTimestamp(),

        updatedAt:
          FieldValue.serverTimestamp(),
      },
      {
        merge: true,
      }
    );
  }

  await batch.commit();
}

/**
 * Create a contract draft for a newly created project.
 *
 * The contract is only created if a contract does not
 * already exist for the project.
 */
async function createContractDraft(
  projectId: string,
  project: ProjectData
): Promise<void> {
  const existingContracts =
    await adminDb
      .collection("contracts")
      .where(
        "projectId",
        "==",
        projectId
      )
      .limit(1)
      .get();

  if (
    !existingContracts.empty
  ) {
    return;
  }

  const projectName =
    getProjectName(project);

  const clientName =
    getClientName(project);

  const projectValue =
    getProjectValue(project);

  const contractId =
    `CON-INT-${projectId}`;

  await adminDb
    .collection("contracts")
    .doc(contractId)
    .set({
      id: contractId,

      contractNo:
        contractId,

      projectId,

      client:
        clientName,

      project:
        projectName,

      projectType:
        cleanString(
          project.projectType
        ) || "Residential",

      value:
        projectValue,

      paid:
        getPaidAmount(project),

      pending:
        getPendingAmount(project),

      status:
        "Draft",

      paymentTerms:
        "As per project agreement",

      designer:
        cleanString(
          project.designer
        ),

      createdDate:
        new Date()
          .toISOString()
          .split("T")[0],

      notes:
        "Contract draft created automatically when the interior project was created.",

      createdAt:
        FieldValue.serverTimestamp(),

      updatedAt:
        FieldValue.serverTimestamp(),
    });
}

/**
 * Update project creation metadata.
 */
async function updateProjectMetadata(
  projectId: string,
  project: ProjectData
): Promise<void> {
  const projectRef =
    adminDb
      .collection("projects")
      .doc(projectId);

  await projectRef.set(
    {
      projectId,

      projectName:
        getProjectName(project),

      clientName:
        getClientName(project),

      totalValue:
        getProjectValue(project),

      amountPaid:
        getPaidAmount(project),

      pendingAmount:
        getPendingAmount(project),

      initialized:
        true,

      initializedAt:
        FieldValue.serverTimestamp(),

      updatedAt:
        FieldValue.serverTimestamp(),
    },
    {
      merge: true,
    }
  );
}

/**
 * Main Firestore trigger.
 *
 * Runs whenever a new document is created in:
 *
 * projects/{projectId}
 */
export const onProjectCreate =
  onDocumentCreated(
    {
      document:
        "projects/{projectId}",

      region:
        "asia-south1",

      memory:
        "256MiB",

      timeoutSeconds:
        120,

      retry: true,
    },

    async (event) => {
      const snapshot =
        event.data;

      if (!snapshot) {
        console.error(
          "Project creation event has no document data."
        );

        return;
      }

      const projectId =
        event.params
          .projectId;

      const project =
        snapshot.data() as ProjectData;

      const projectName =
        getProjectName(project);

      const clientName =
        getClientName(project);

      console.log(
        `New interior project created: ${projectId} - ${projectName}`
      );

      try {
        /**
         * 1. Add project ID and
         * calculated payment information.
         */
        await updateProjectMetadata(
          projectId,
          project
        );

        /**
         * 2. Create project summary.
         */
        await createProjectSummary(
          projectId,
          project
        );

        /**
         * 3. Create Project Vault folders.
         */
        await createProjectFolders(
          projectId
        );

        /**
         * 4. Create default milestones.
         */
        await createProjectMilestones(
          projectId
        );

        /**
         * 5. Create contract draft.
         */
        await createContractDraft(
          projectId,
          project
        );

        /**
         * 6. Create initial payment
         * record when a paid amount exists.
         */
        await createInitialPaymentRecord(
          projectId,
          project
        );

        /**
         * 7. Add project activity.
         */
        await createProjectActivity(
          projectId,
          projectName,
          clientName
        );

        /**
         * 8. Notify assigned designer.
         */
        const designerId =
          cleanString(
            project.designerId
          );

        if (designerId) {
          await createNotification({
            id:
              generateNotificationId(
                projectId
              ),

            userId:
              designerId,

            type:
              "PROJECT_CREATED",

            title:
              "New Interior Project",

            message:
              `${projectName} has been created and assigned to you.`,

            projectId,

            projectName,

            read:
              false,
          });
        }

        console.log(
          `Interior project initialization completed: ${projectId}`
        );
      } catch (error: unknown) {
        console.error(
          `Failed to initialize interior project ${projectId}:`,
          error
        );

        /**
         * Throwing the error allows Firebase Functions
         * to retry the trigger.
         */
        throw error;
      }
    }
  );

export default onProjectCreate;