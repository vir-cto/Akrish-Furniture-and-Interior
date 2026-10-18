import { Request, Response } from "express";
import { FieldValue } from "firebase-admin/firestore";

import { adminDb } from "../../core/firebaseAdmin";

type EnquiryStatus =
  | "New"
  | "Contacted"
  | "Follow-up"
  | "Quoted"
  | "Converted"
  | "Closed";

type EnquirySource =
  | "Website"
  | "Product Page"
  | "Custom Furniture Enquiry"
  | "Instagram"
  | "Facebook"
  | "Google"
  | "WhatsApp"
  | "Walk-in"
  | "Referral"
  | "Other";

interface EnquiryRequest {
  enquiryId?: string;

  customer: {
    name: string;
    phone: string;
    email?: string;
  };

  source?: EnquirySource;

  productId?: string;
  productName?: string;

  category?: string;

  message?: string;

  budget?: number;

  quantity?: number;

  preferredDate?: string;

  assignedTo?: string;

  status?: EnquiryStatus;

  notes?: string;
}

interface EnquiryDocument {
  id: string;
  enquiryId: string;

  customer: {
    name: string;
    phone: string;
    email: string;
  };

  source: EnquirySource;

  productId: string;
  productName: string;

  category: string;

  message: string;

  budget: number;

  quantity: number;

  preferredDate: string;

  assignedTo: string;

  status: EnquiryStatus;

  notes: string;

  createdAt: unknown;
  updatedAt: unknown;
}

/**
 * Generate a unique furniture enquiry number.
 */
function generateEnquiryId(): string {
  const timestamp = Date.now();

  const randomPart = Math.floor(
    1000 + Math.random() * 9000
  );

  return `ENQ-F-${timestamp}-${randomPart}`;
}

/**
 * Check whether an email address is valid.
 */
function isValidEmail(
  email: string
): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    email
  );
}

/**
 * Validate customer information.
 */
function validateCustomer(
  customer: EnquiryRequest["customer"]
): string | null {
  if (!customer) {
    return "Customer details are required.";
  }

  if (!customer.name?.trim()) {
    return "Customer name is required.";
  }

  if (!customer.phone?.trim()) {
    return "Customer phone is required.";
  }

  if (
    customer.email &&
    !isValidEmail(customer.email)
  ) {
    return "Invalid customer email.";
  }

  return null;
}

/**
 * Validate enquiry source.
 */
function isValidSource(
  source: string
): source is EnquirySource {
  return [
    "Website",
    "Product Page",
    "Custom Furniture Enquiry",
    "Instagram",
    "Facebook",
    "Google",
    "WhatsApp",
    "Walk-in",
    "Referral",
    "Other",
  ].includes(source);
}

/**
 * Validate enquiry status.
 */
function isValidStatus(
  status: string
): status is EnquiryStatus {
  return [
    "New",
    "Contacted",
    "Follow-up",
    "Quoted",
    "Converted",
    "Closed",
  ].includes(status);
}

/**
 * Create a new furniture enquiry.
 */
async function createEnquiry(
  data: EnquiryRequest
): Promise<EnquiryDocument> {
  const enquiryId =
    data.enquiryId?.trim() ||
    generateEnquiryId();

  const enquiryRef = adminDb
    .collection("enquiries")
    .doc(enquiryId);

  const existing =
    await enquiryRef.get();

  if (existing.exists) {
    throw new Error(
      "An enquiry with this ID already exists."
    );
  }

  const source =
    data.source || "Website";

  if (!isValidSource(source)) {
    throw new Error(
      "Invalid enquiry source."
    );
  }

  const status =
    data.status || "New";

  if (!isValidStatus(status)) {
    throw new Error(
      "Invalid enquiry status."
    );
  }

  const budget =
    Number(data.budget || 0);

  if (
    !Number.isFinite(budget) ||
    budget < 0
  ) {
    throw new Error(
      "Invalid enquiry budget."
    );
  }

  const quantity =
    Number(data.quantity || 1);

  if (
    !Number.isInteger(quantity) ||
    quantity <= 0
  ) {
    throw new Error(
      "Quantity must be a positive number."
    );
  }

  /**
   * If a product ID is provided, verify that
   * the product exists.
   */
  let productName =
    data.productName?.trim() || "";

  let category =
    data.category?.trim() || "";

  if (data.productId) {
    const productSnapshot =
      await adminDb
        .collection("products")
        .doc(data.productId)
        .get();

    if (!productSnapshot.exists) {
      throw new Error(
        "Selected product was not found."
      );
    }

    const product =
      productSnapshot.data() || {};

    productName =
      product.name ||
      productName;

    category =
      product.category ||
      category;
  }

  const enquiry: EnquiryDocument = {
    id: enquiryId,

    enquiryId,

    customer: {
      name:
        data.customer.name.trim(),

      phone:
        data.customer.phone.trim(),

      email:
        data.customer.email?.trim() ||
        "",
    },

    source,

    productId:
      data.productId?.trim() ||
      "",

    productName,

    category,

    message:
      data.message?.trim() ||
      "",

    budget,

    quantity,

    preferredDate:
      data.preferredDate?.trim() ||
      "",

    assignedTo:
      data.assignedTo?.trim() ||
      "",

    status,

    notes:
      data.notes?.trim() ||
      "",

    createdAt:
      FieldValue.serverTimestamp(),

    updatedAt:
      FieldValue.serverTimestamp(),
  };

  await enquiryRef.set(
    enquiry
  );

  return enquiry;
}

/**
 * Update an existing enquiry.
 */
async function updateEnquiry(
  enquiryId: string,
  data: Partial<EnquiryRequest>
): Promise<void> {
  if (!enquiryId) {
    throw new Error(
      "Enquiry ID is required."
    );
  }

  const enquiryRef = adminDb
    .collection("enquiries")
    .doc(enquiryId);

  const snapshot =
    await enquiryRef.get();

  if (!snapshot.exists) {
    throw new Error(
      "Enquiry was not found."
    );
  }

  const updates: Record<
    string,
    unknown
  > = {};

  if (data.status !== undefined) {
    if (
      !isValidStatus(data.status)
    ) {
      throw new Error(
        "Invalid enquiry status."
      );
    }

    updates.status =
      data.status;
  }

  if (data.source !== undefined) {
    if (
      !isValidSource(data.source)
    ) {
      throw new Error(
        "Invalid enquiry source."
      );
    }

    updates.source =
      data.source;
  }

  if (data.message !== undefined) {
    updates.message =
      data.message.trim();
  }

  if (data.notes !== undefined) {
    updates.notes =
      data.notes.trim();
  }

  if (data.assignedTo !== undefined) {
    updates.assignedTo =
      data.assignedTo.trim();
  }

  if (data.preferredDate !== undefined) {
    updates.preferredDate =
      data.preferredDate.trim();
  }

  if (data.productId !== undefined) {
    updates.productId =
      data.productId.trim();
  }

  if (data.productName !== undefined) {
    updates.productName =
      data.productName.trim();
  }

  if (data.category !== undefined) {
    updates.category =
      data.category.trim();
  }

  if (data.budget !== undefined) {
    const budget =
      Number(data.budget);

    if (
      !Number.isFinite(budget) ||
      budget < 0
    ) {
      throw new Error(
        "Invalid enquiry budget."
      );
    }

    updates.budget =
      budget;
  }

  if (data.quantity !== undefined) {
    const quantity =
      Number(data.quantity);

    if (
      !Number.isInteger(quantity) ||
      quantity <= 0
    ) {
      throw new Error(
        "Invalid enquiry quantity."
      );
    }

    updates.quantity =
      quantity;
  }

  if (
    data.customer !== undefined
  ) {
    const customerError =
      validateCustomer(
        data.customer
      );

    if (customerError) {
      throw new Error(
        customerError
      );
    }

    updates.customer = {
      name:
        data.customer.name.trim(),

      phone:
        data.customer.phone.trim(),

      email:
        data.customer.email?.trim() ||
        "",
    };
  }

  updates.updatedAt =
    FieldValue.serverTimestamp();

  await enquiryRef.update(
    updates
  );
}

/**
 * Get one enquiry.
 */
async function getEnquiry(
  enquiryId: string
) {
  const snapshot =
    await adminDb
      .collection("enquiries")
      .doc(enquiryId)
      .get();

  if (!snapshot.exists) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}

/**
 * Delete an enquiry.
 */
async function deleteEnquiry(
  enquiryId: string
): Promise<void> {
  if (!enquiryId) {
    throw new Error(
      "Enquiry ID is required."
    );
  }

  const enquiryRef =
    adminDb
      .collection("enquiries")
      .doc(enquiryId);

  const snapshot =
    await enquiryRef.get();

  if (!snapshot.exists) {
    throw new Error(
      "Enquiry was not found."
    );
  }

  await enquiryRef.delete();
}

/**
 * Main Furniture enquiry API.
 *
 * POST   /handleEnquiry
 * GET    /handleEnquiry?id=ENQ-F-...
 * PATCH  /handleEnquiry?id=ENQ-F-...
 * DELETE /handleEnquiry?id=ENQ-F-...
 */
export async function handleEnquiry(
  req: Request,
  res: Response
): Promise<void> {
  try {
    if (
      ![
        "GET",
        "POST",
        "PATCH",
        "DELETE",
      ].includes(req.method)
    ) {
      res.status(405).json({
        success: false,
        message:
          "Method not allowed.",
      });

      return;
    }

    /**
     * GET
     */
    if (req.method === "GET") {
      const enquiryId =
        String(
          req.query.id || ""
        ).trim();

      if (!enquiryId) {
        res.status(400).json({
          success: false,
          message:
            "Enquiry ID is required.",
        });

        return;
      }

      const enquiry =
        await getEnquiry(
          enquiryId
        );

      if (!enquiry) {
        res.status(404).json({
          success: false,
          message:
            "Enquiry was not found.",
        });

        return;
      }

      res.status(200).json({
        success: true,
        enquiry,
      });

      return;
    }

    /**
     * POST
     */
    if (req.method === "POST") {
      const body =
        req.body as EnquiryRequest;

      const customerError =
        validateCustomer(
          body.customer
        );

      if (customerError) {
        res.status(400).json({
          success: false,
          message:
            customerError,
        });

        return;
      }

      const enquiry =
        await createEnquiry(
          body
        );

      res.status(201).json({
        success: true,

        message:
          "Furniture enquiry created successfully.",

        enquiry,
      });

      return;
    }

    /**
     * PATCH
     */
    if (req.method === "PATCH") {
      const enquiryId =
        String(
          req.query.id ||
            req.body?.enquiryId ||
            ""
        ).trim();

      if (!enquiryId) {
        res.status(400).json({
          success: false,
          message:
            "Enquiry ID is required.",
        });

        return;
      }

      await updateEnquiry(
        enquiryId,
        req.body as Partial<EnquiryRequest>
      );

      const updated =
        await getEnquiry(
          enquiryId
        );

      res.status(200).json({
        success: true,

        message:
          "Enquiry updated successfully.",

        enquiry:
          updated,
      });

      return;
    }

    /**
     * DELETE
     */
    if (req.method === "DELETE") {
      const enquiryId =
        String(
          req.query.id ||
            req.body?.enquiryId ||
            ""
        ).trim();

      if (!enquiryId) {
        res.status(400).json({
          success: false,
          message:
            "Enquiry ID is required.",
        });

        return;
      }

      await deleteEnquiry(
        enquiryId
      );

      res.status(200).json({
        success: true,

        message:
          "Enquiry deleted successfully.",
      });

      return;
    }
  } catch (error: unknown) {
    console.error(
      "Furniture enquiry API error:",
      error
    );

    const message =
      error instanceof Error
        ? error.message
        : "Unable to process enquiry.";

    res.status(500).json({
      success: false,
      message,
    });
  }
}

export default handleEnquiry;