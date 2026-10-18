import { FieldValue } from "firebase-admin/firestore";

import { adminDb } from "../../core/firebaseAdmin";

export type PayoutStatus =
  | "Pending"
  | "Processing"
  | "Completed"
  | "Failed"
  | "Cancelled";

export type PayoutMethod =
  | "Bank Transfer"
  | "UPI";

export interface BankPayoutRequest {
  projectId?: string;
  paymentId?: string;
  payoutId?: string;

  beneficiaryName: string;
  accountNumber: string;
  ifsc: string;

  bankName?: string;
  branchName?: string;
  upiId?: string;

  amount: number;

  payoutMethod?: PayoutMethod;

  purpose?: string;
  remarks?: string;
}

export interface BankPayout {
  id: string;
  payoutId: string;

  projectId: string;
  paymentId?: string;

  beneficiaryName: string;

  accountNumber: string;
  maskedAccountNumber: string;

  ifsc: string;

  bankName: string;
  branchName: string;

  upiId?: string;

  amount: number;

  payoutMethod: PayoutMethod;

  purpose: string;
  remarks: string;

  status: PayoutStatus;

  transactionId?: string;

  failureReason?: string;

  createdAt?: unknown;
  updatedAt?: unknown;
  completedAt?: unknown;
}

interface ProjectData {
  id?: string;
  projectName?: string;
  name?: string;
  client?: string;
  clientName?: string;
  status?: string;
}

/**
 * Clean a string value.
 */
function cleanString(value: unknown): string {
  return typeof value === "string"
    ? value.trim()
    : "";
}

/**
 * Convert an amount to a safe INR number.
 */
function normalizeAmount(
  value: unknown
): number {
  const amount = Number(value);

  if (!Number.isFinite(amount)) {
    return 0;
  }

  return Math.round(amount * 100) / 100;
}

/**
 * Validate Indian IFSC format.
 *
 * Example:
 * SBIN0001234
 */
function isValidIFSC(
  ifsc: string
): boolean {
  return /^[A-Z]{4}0[A-Z0-9]{6}$/.test(
    ifsc.toUpperCase()
  );
}

/**
 * Validate bank account number.
 */
function isValidAccountNumber(
  accountNumber: string
): boolean {
  return /^[0-9]{9,18}$/.test(
    accountNumber
  );
}

/**
 * Validate UPI ID.
 */
function isValidUPI(
  upiId: string
): boolean {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/.test(
    upiId
  );
}

/**
 * Mask bank account number before storing/returning
 * sensitive information.
 */
function maskAccountNumber(
  accountNumber: string
): string {
  if (accountNumber.length <= 4) {
    return "****";
  }

  return (
    "*".repeat(
      accountNumber.length - 4
    ) +
    accountNumber.slice(-4)
  );
}

/**
 * Generate internal payout ID.
 */
function generatePayoutId(): string {
  return `PAYOUT-INT-${Date.now()}-${Math.floor(
    1000 + Math.random() * 9000
  )}`;
}

/**
 * Generate a transaction reference.
 */
function generateTransactionId(): string {
  return `TXN-INT-${Date.now()}-${Math.floor(
    100000 + Math.random() * 900000
  )}`;
}

/**
 * Get project from Firestore.
 */
async function getProject(
  projectId: string
): Promise<ProjectData | null> {
  const snapshot =
    await adminDb
      .collection("projects")
      .doc(projectId)
      .get();

  if (!snapshot.exists) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  } as ProjectData;
}

/**
 * Create a bank payout record.
 *
 * This function creates the payout record in Firestore.
 *
 * It does NOT directly transfer money through a bank.
 * A real bank/PG payout provider must be connected
 * before changing the status to Completed.
 */
export async function createBankPayout(
  request: BankPayoutRequest
): Promise<BankPayout> {
  const projectId =
    cleanString(
      request.projectId
    );

  if (!projectId) {
    throw new Error(
      "Project ID is required."
    );
  }

  const project =
    await getProject(projectId);

  if (!project) {
    throw new Error(
      "Interior project was not found."
    );
  }

  const beneficiaryName =
    cleanString(
      request.beneficiaryName
    );

  if (!beneficiaryName) {
    throw new Error(
      "Beneficiary name is required."
    );
  }

  const payoutMethod =
    request.payoutMethod ||
    "Bank Transfer";

  const amount =
    normalizeAmount(
      request.amount
    );

  if (amount <= 0) {
    throw new Error(
      "Payout amount must be greater than zero."
    );
  }

  const accountNumber =
    cleanString(
      request.accountNumber
    );

  const ifsc =
    cleanString(
      request.ifsc
    ).toUpperCase();

  const bankName =
    cleanString(
      request.bankName
    );

  const branchName =
    cleanString(
      request.branchName
    );

  const upiId =
    cleanString(
      request.upiId
    );

  /**
   * Bank Transfer validation.
   */
  if (
    payoutMethod ===
    "Bank Transfer"
  ) {
    if (
      !isValidAccountNumber(
        accountNumber
      )
    ) {
      throw new Error(
        "Invalid bank account number."
      );
    }

    if (!isValidIFSC(ifsc)) {
      throw new Error(
        "Invalid IFSC code."
      );
    }
  }

  /**
   * UPI validation.
   */
  if (
    payoutMethod === "UPI"
  ) {
    if (!isValidUPI(upiId)) {
      throw new Error(
        "Invalid UPI ID."
      );
    }
  }

  const payoutId =
    cleanString(
      request.payoutId
    ) ||
    generatePayoutId();

  const payoutRef =
    adminDb
      .collection("bankPayouts")
      .doc(payoutId);

  const payout: BankPayout = {
    id: payoutId,

    payoutId,

    projectId,

    paymentId:
      cleanString(
        request.paymentId
      ) || undefined,

    beneficiaryName,

    accountNumber,

    maskedAccountNumber:
      maskAccountNumber(
        accountNumber
      ),

    ifsc,

    bankName,

    branchName,

    upiId:
      upiId || undefined,

    amount,

    payoutMethod,

    purpose:
      cleanString(
        request.purpose
      ) ||
      "Interior project payment",

    remarks:
      cleanString(
        request.remarks
      ),

    status:
      "Pending",

    createdAt:
      FieldValue.serverTimestamp(),

    updatedAt:
      FieldValue.serverTimestamp(),
  };

  await payoutRef.set(
    payout,
    {
      merge: true,
    }
  );

  /**
   * Keep project payment/payout information
   * connected to the project.
   */
  await adminDb
    .collection("projects")
    .doc(projectId)
    .set(
      {
        lastPayoutId:
          payoutId,

        lastPayoutAmount:
          amount,

        lastPayoutStatus:
          "Pending",

        lastPayoutCreatedAt:
          FieldValue.serverTimestamp(),

        updatedAt:
          FieldValue.serverTimestamp(),
      },
      {
        merge: true,
      }
    );

  return payout;
}

/**
 * Get a payout by ID.
 */
export async function getBankPayout(
  payoutId: string
): Promise<BankPayout | null> {
  const id =
    cleanString(payoutId);

  if (!id) {
    throw new Error(
      "Payout ID is required."
    );
  }

  const snapshot =
    await adminDb
      .collection("bankPayouts")
      .doc(id)
      .get();

  if (!snapshot.exists) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  } as BankPayout;
}

/**
 * Get payouts belonging to a project.
 */
export async function getProjectPayouts(
  projectId: string
): Promise<BankPayout[]> {
  const id =
    cleanString(projectId);

  if (!id) {
    throw new Error(
      "Project ID is required."
    );
  }

  const snapshot =
    await adminDb
      .collection("bankPayouts")
      .where(
        "projectId",
        "==",
        id
      )
      .get();

  return snapshot.docs.map(
    (document) => ({
      id: document.id,
      ...document.data(),
    })) as BankPayout[];
}

/**
 * Update payout status.
 *
 * IMPORTANT:
 * This function should only be called after your actual
 * payout provider confirms the transaction.
 */
export async function updatePayoutStatus(
  payoutId: string,
  status: PayoutStatus,
  options?: {
    transactionId?: string;
    failureReason?: string;
  }
): Promise<BankPayout> {
  const id =
    cleanString(payoutId);

  if (!id) {
    throw new Error(
      "Payout ID is required."
    );
  }

  const payoutRef =
    adminDb
      .collection("bankPayouts")
      .doc(id);

  const snapshot =
    await payoutRef.get();

  if (!snapshot.exists) {
    throw new Error(
      "Payout was not found."
    );
  }

  const updateData: Record<
    string,
    unknown
  > = {
    status,

    updatedAt:
      FieldValue.serverTimestamp(),
  };

  if (
    options?.transactionId
  ) {
    updateData.transactionId =
      cleanString(
        options.transactionId
      );
  }

  if (
    options?.failureReason
  ) {
    updateData.failureReason =
      cleanString(
        options.failureReason
      );
  }

  if (
    status === "Completed"
  ) {
    updateData.completedAt =
      FieldValue.serverTimestamp();

    if (
      !options?.transactionId
    ) {
      updateData.transactionId =
        generateTransactionId();
    }
  }

  await payoutRef.update(
    updateData
  );

  const updated =
    await payoutRef.get();

  return {
    id: updated.id,
    ...updated.data(),
  } as BankPayout;
}

/**
 * Cancel a pending payout.
 */
export async function cancelBankPayout(
  payoutId: string
): Promise<BankPayout> {
  const payout =
    await getBankPayout(
      payoutId
    );

  if (!payout) {
    throw new Error(
      "Payout was not found."
    );
  }

  if (
    payout.status !==
    "Pending"
  ) {
    throw new Error(
      "Only pending payouts can be cancelled."
    );
  }

  return updatePayoutStatus(
    payoutId,
    "Cancelled"
  );
}

/**
 * API-style helper for creating a payout.
 *
 * Can be connected to your Express router:
 *
 * POST /interior/bank-payout
 */
export async function bankPayoutHandler(
  req: {
    method?: string;
    body?: BankPayoutRequest;
  },
  res: {
    status: (
      code: number
    ) => {
      json: (
        data: unknown
      ) => void;
    };
  }
): Promise<void> {
  try {
    if (
      req.method !== "POST"
    ) {
      res.status(405).json({
        success: false,
        message:
          "Method not allowed. Use POST.",
      });

      return;
    }

    const body =
      req.body;

    if (!body) {
      res.status(400).json({
        success: false,
        message:
          "Request body is required.",
      });

      return;
    }

    const payout =
      await createBankPayout(
        body
      );

    /**
     * Never return the full bank account number.
     */
    res.status(201).json({
      success: true,

      message:
        "Bank payout request created successfully.",

      data: {
        ...payout,

        accountNumber:
          undefined,
      },
    });
  } catch (error: unknown) {
    console.error(
      "Interior bank payout error:",
      error
    );

    const message =
      error instanceof Error
        ? error.message
        : "Unable to create bank payout.";

    const statusCode =
      message.includes(
        "required"
      ) ||
      message.includes(
        "Invalid"
      ) ||
      message.includes(
        "greater than zero"
      ) ||
      message.includes(
        "was not found"
      )
        ? 400
        : 500;

    res.status(statusCode).json({
      success: false,
      message,
    });
  }
}