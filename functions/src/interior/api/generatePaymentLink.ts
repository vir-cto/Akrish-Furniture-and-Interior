import { Request, Response } from "express";
import { FieldValue } from "firebase-admin/firestore";

import { adminDb } from "../../core/firebaseAdmin";
import {
  createCashfreeOrder,
  isCashfreeConfigured,
} from "../../core/cashfreeClient";

type PaymentMethod =
  | "UPI"
  | "Card"
  | "Bank Transfer";

interface PaymentLinkRequest {
  projectId?: string;
  paymentId?: string;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  amount?: number;
  description?: string;
  expiryDate?: string;
  paymentMethod?: PaymentMethod;
}

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
  totalValue?: number;
  projectValue?: number;
  value?: number;
  pendingAmount?: number;
  amountPaid?: number;
  paid?: number;
  paymentTerms?: string;
  status?: string;
}

function cleanString(value: unknown): string {
  return typeof value === "string"
    ? value.trim()
    : "";
}

function toPositiveAmount(
  value: unknown
): number {
  const amount = Number(value ?? 0);

  if (!Number.isFinite(amount) || amount <= 0) {
    return 0;
  }

  return Math.round(amount * 100) / 100;
}

function generatePaymentId(): string {
  return `PAY-INT-${Date.now()}-${Math.floor(
    1000 + Math.random() * 9000
  )}`;
}

function generateCashfreeOrderId(
  projectId: string
): string {
  return `AKR-INT-${projectId}-${Date.now()}`;
}

function getProjectName(
  project: ProjectData
): string {
  return (
    cleanString(project.projectName) ||
    cleanString(project.name) ||
    "Interior Project"
  );
}

function getCustomerName(
  project: ProjectData
): string {
  return (
    cleanString(project.clientName) ||
    cleanString(project.client) ||
    cleanString(project.customerName) ||
    "Customer"
  );
}

function getCustomerEmail(
  project: ProjectData
): string {
  return (
    cleanString(project.customerEmail) ||
    cleanString(project.email)
  );
}

function getCustomerPhone(
  project: ProjectData
): string {
  return (
    cleanString(project.customerPhone) ||
    cleanString(project.phone)
  );
}

function getProjectValue(
  project: ProjectData
): number {
  return toPositiveAmount(
    project.totalValue ??
      project.projectValue ??
      project.value ??
      0
  );
}

function getAmountPaid(
  project: ProjectData
): number {
  return toPositiveAmount(
    project.amountPaid ??
      project.paid ??
      0
  );
}

function getPendingAmount(
  project: ProjectData
): number {
  const explicitPending =
    toPositiveAmount(
      project.pendingAmount
    );

  if (explicitPending > 0) {
    return explicitPending;
  }

  const total =
    getProjectValue(project);

  const paid =
    getAmountPaid(project);

  return Math.max(
    total - paid,
    0
  );
}

function validateEmail(
  email: string
): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    email
  );
}

function validatePhone(
  phone: string
): boolean {
  return /^[+]?[0-9\s-]{10,15}$/.test(
    phone
  );
}

function getReturnUrl(): string {
  return (
    process.env.CASHFREE_INTERIOR_RETURN_URL ||
    process.env.CASHFREE_RETURN_URL ||
    ""
  );
}

function getWebhookUrl(): string {
  return (
    process.env.CASHFREE_INTERIOR_WEBHOOK_URL ||
    process.env.CASHFREE_WEBHOOK_URL ||
    ""
  );
}

async function getProject(
  projectId: string
): Promise<ProjectData | null> {
  const projectRef =
    adminDb
      .collection("projects")
      .doc(projectId);

  const snapshot =
    await projectRef.get();

  if (!snapshot.exists) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  } as ProjectData;
}

async function generatePaymentLink(
  requestData: PaymentLinkRequest
) {
  const projectId =
    cleanString(
      requestData.projectId
    );

  if (!projectId) {
    throw new Error(
      "Project ID is required."
    );
  }

  if (!isCashfreeConfigured()) {
    throw new Error(
      "Cashfree payment gateway is not configured."
    );
  }

  const project =
    await getProject(projectId);

  if (!project) {
    throw new Error(
      "Interior project was not found."
    );
  }

  const projectName =
    getProjectName(project);

  const customerName =
    cleanString(
      requestData.customerName
    ) ||
    getCustomerName(project);

  const customerEmail =
    cleanString(
      requestData.customerEmail
    ) ||
    getCustomerEmail(project);

  const customerPhone =
    cleanString(
      requestData.customerPhone
    ) ||
    getCustomerPhone(project);

  if (!customerName) {
    throw new Error(
      "Customer name is required."
    );
  }

  if (!customerEmail) {
    throw new Error(
      "Customer email is required."
    );
  }

  if (!validateEmail(customerEmail)) {
    throw new Error(
      "Invalid customer email."
    );
  }

  if (!customerPhone) {
    throw new Error(
      "Customer phone number is required."
    );
  }

  if (!validatePhone(customerPhone)) {
    throw new Error(
      "Invalid customer phone number."
    );
  }

  const projectPending =
    getPendingAmount(project);

  const requestedAmount =
    toPositiveAmount(
      requestData.amount
    );

  const amount =
    requestedAmount > 0
      ? requestedAmount
      : projectPending;

  if (amount <= 0) {
    throw new Error(
      "There is no pending amount for this project."
    );
  }

  if (
    projectPending > 0 &&
    amount > projectPending
  ) {
    throw new Error(
      `Payment amount cannot exceed the pending amount of ₹${projectPending.toFixed(
        2
      )}.`
    );
  }

  const paymentId =
    cleanString(
      requestData.paymentId
    ) ||
    generatePaymentId();

  const cashfreeOrderId =
    generateCashfreeOrderId(
      projectId
    );

  const description =
    cleanString(
      requestData.description
    ) ||
    `Payment for ${projectName}`;

  const returnUrl =
    getReturnUrl();

  const webhookUrl =
    getWebhookUrl();

  if (!returnUrl) {
    throw new Error(
      "Cashfree return URL is not configured."
    );
  }

  if (!webhookUrl) {
    throw new Error(
      "Cashfree webhook URL is not configured."
    );
  }

  const cashfreeOrder =
    await createCashfreeOrder({
      order_id:
        cashfreeOrderId,

      order_amount:
        amount,

      order_currency:
        "INR",

      customer_details: {
        customer_id:
          `INT-${projectId}`,

        customer_name:
          customerName,

        customer_email:
          customerEmail,

        customer_phone:
          customerPhone,
      },

      order_meta: {
        return_url:
          returnUrl,

        notify_url:
          webhookUrl,
      },

      order_note:
        description,
    });

  const paymentData = {
    id: paymentId,

    paymentId,

    projectId,

    projectName,

    customerName,

    customerEmail,

    customerPhone,

    amount,

    receivedAmount: 0,

    pendingAmount:
      amount,

    status:
      "Pending",

    paymentMethod:
      requestData.paymentMethod ||
      "UPI",

    gateway:
      "Cashfree",

    cashfreeOrderId,

    paymentSessionId:
      cashfreeOrder.payment_session_id ||
      "",

    description,

    expiryDate:
      cleanString(
        requestData.expiryDate
      ),

    createdAt:
      FieldValue.serverTimestamp(),

    updatedAt:
      FieldValue.serverTimestamp(),
  };

  const paymentRef =
    adminDb
      .collection("payments")
      .doc(paymentId);

  const projectRef =
    adminDb
      .collection("projects")
      .doc(projectId);

  const batch =
    adminDb.batch();

  batch.set(
    paymentRef,
    paymentData,
    {
      merge: true,
    }
  );

  batch.set(
    projectRef,
    {
      lastPaymentLinkId:
        paymentId,

      lastPaymentLinkAmount:
        amount,

      lastPaymentLinkCreatedAt:
        FieldValue.serverTimestamp(),

      updatedAt:
        FieldValue.serverTimestamp(),
    },
    {
      merge: true,
    }
  );

  await batch.commit();

  return {
    paymentId,

    projectId,

    projectName,

    amount,

    customerName,

    customerEmail,

    customerPhone,

    cashfreeOrderId,

    paymentSessionId:
      cashfreeOrder.payment_session_id ||
      "",

    // paymentLink:
    //   cashfreeOrder.payment_link ||
    //   "",

    paymentLink:
      (cashfreeOrder as any).payment_link ||
      (cashfreeOrder as any).payment_session_id ||
      "",

    status:
      "Pending",

    createdAt:
      new Date().toISOString(),
  };
}

export async function generatePaymentLinkHandler(
  req: Request,
  res: Response
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
      (req.body ||
        {}) as PaymentLinkRequest;

    const result =
      await generatePaymentLink(
        body
      );

    res.status(201).json({
      success: true,

      message:
        "Interior project payment link generated successfully.",

      data: result,
    });
  } catch (error: unknown) {
    console.error(
      "Generate interior payment link error:",
      error
    );

    const message =
      error instanceof Error
        ? error.message
        : "Unable to generate payment link.";

    const statusCode =
      message.includes(
        "was not found"
      )
        ? 404
        : message.includes(
              "required"
            ) ||
            message.includes(
              "Invalid"
            ) ||
            message.includes(
              "cannot exceed"
            ) ||
            message.includes(
              "no pending"
            )
          ? 400
          : 500;

    res.status(statusCode).json({
      success: false,
      message,
    });
  }
}

export default generatePaymentLinkHandler;