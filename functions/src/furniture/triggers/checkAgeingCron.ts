import { FieldValue } from "firebase-admin/firestore";
import { onSchedule } from "firebase-functions/v2/scheduler";

import { adminDb } from "../../core/firebaseAdmin";

type AgeingBucket =
  | "0-7 Days"
  | "8-15 Days"
  | "16-30 Days"
  | "31-60 Days"
  | "61+ Days";

interface AgeingRecord {
  id: string;
  orderId: string;
  customerName: string;
  customerPhone: string;
  totalAmount: number;
  amountReceived: number;
  pendingAmount: number;
  dueDate: string;
  daysOverdue: number;
  ageingBucket: AgeingBucket;
  status: string;
}

/**
 * Convert Firestore Timestamp / Date / string
 * into a JavaScript Date.
 */
function toDate(
  value: unknown
): Date | null {
  if (!value) {
    return null;
  }

  if (value instanceof Date) {
    return value;
  }

  if (
    typeof value === "object" &&
    value !== null &&
    "toDate" in value &&
    typeof (
      value as {
        toDate?: unknown;
      }
    ).toDate === "function"
  ) {
    return (
      value as {
        toDate: () => Date;
      }
    ).toDate();
  }

  if (
    typeof value === "string" ||
    typeof value === "number"
  ) {
    const date = new Date(value);

    if (!Number.isNaN(date.getTime())) {
      return date;
    }
  }

  return null;
}

/**
 * Calculate number of days between two dates.
 */
function getDaysDifference(
  from: Date,
  to: Date
): number {
  const fromDate = new Date(
    from.getFullYear(),
    from.getMonth(),
    from.getDate()
  );

  const toDateValue = new Date(
    to.getFullYear(),
    to.getMonth(),
    to.getDate()
  );

  const difference =
    toDateValue.getTime() -
    fromDate.getTime();

  return Math.floor(
    difference /
      (1000 * 60 * 60 * 24)
  );
}

/**
 * Get ageing bucket.
 */
function getAgeingBucket(
  days: number
): AgeingBucket {
  if (days <= 7) {
    return "0-7 Days";
  }

  if (days <= 15) {
    return "8-15 Days";
  }

  if (days <= 30) {
    return "16-30 Days";
  }

  if (days <= 60) {
    return "31-60 Days";
  }

  return "61+ Days";
}

/**
 * Determine whether an order has an outstanding amount.
 */
function hasPendingAmount(
  data: Record<string, unknown>
): boolean {
  const pendingAmount = Number(
    data.pendingAmount ??
      0
  );

  const totalAmount = Number(
    data.totalAmount ??
      data.orderAmount ??
      data.total ??
      0
  );

  const amountReceived = Number(
    data.amountReceived ??
      data.receivedAmount ??
      0
  );

  return (
    pendingAmount > 0 ||
    totalAmount >
      amountReceived
  );
}

/**
 * Get the pending amount from an order.
 */
function getPendingAmount(
  data: Record<string, unknown>
): number {
  const explicitPending =
    Number(
      data.pendingAmount ??
        0
    );

  if (
    Number.isFinite(
      explicitPending
    ) &&
    explicitPending > 0
  ) {
    return explicitPending;
  }

  const totalAmount =
    Number(
      data.totalAmount ??
        data.orderAmount ??
        data.total ??
        0
    );

  const amountReceived =
    Number(
      data.amountReceived ??
        data.receivedAmount ??
        0
    );

  return Math.max(
    totalAmount -
      amountReceived,
    0
  );
}

/**
 * Get the order due date.
 *
 * Priority:
 * 1. dueDate
 * 2. paymentDueDate
 * 3. expectedPaymentDate
 * 4. createdAt + paymentTerms
 */
function getDueDate(
  data: Record<string, unknown>
): Date | null {
  const directDueDate =
    toDate(
      data.dueDate
    );

  if (directDueDate) {
    return directDueDate;
  }

  const paymentDueDate =
    toDate(
      data.paymentDueDate
    );

  if (paymentDueDate) {
    return paymentDueDate;
  }

  const expectedPaymentDate =
    toDate(
      data.expectedPaymentDate
    );

  if (expectedPaymentDate) {
    return expectedPaymentDate;
  }

  const createdAt =
    toDate(
      data.createdAt
    );

  if (!createdAt) {
    return null;
  }

  const paymentTerms =
    Number(
      data.paymentTermsDays ??
        0
    );

  if (
    !Number.isFinite(
      paymentTerms
    ) ||
    paymentTerms <= 0
  ) {
    return createdAt;
  }

  const dueDate =
    new Date(createdAt);

  dueDate.setDate(
    dueDate.getDate() +
      paymentTerms
  );

  return dueDate;
}

/**
 * Get customer name.
 */
function getCustomerName(
  data: Record<string, unknown>
): string {
  const customer =
    data.customer;

  if (
    typeof customer ===
      "object" &&
    customer !== null
  ) {
    const customerObject =
      customer as Record<
        string,
        unknown
      >;

    if (
      typeof customerObject.name ===
      "string"
    ) {
      return customerObject.name;
    }
  }

  return (
    String(
      data.customerName ||
        data.clientName ||
        data.customer ||
        "Unknown Customer"
    )
  );
}

/**
 * Get customer phone.
 */
function getCustomerPhone(
  data: Record<string, unknown>
): string {
  const customer =
    data.customer;

  if (
    typeof customer ===
      "object" &&
    customer !== null
  ) {
    const customerObject =
      customer as Record<
        string,
        unknown
      >;

    if (
      typeof customerObject.phone ===
      "string"
    ) {
      return customerObject.phone;
    }
  }

  return String(
    data.customerPhone ||
      data.phone ||
      ""
  );
}

/**
 * Get a readable due date.
 */
function formatDate(
  date: Date
): string {
  return date
    .toISOString()
    .split("T")[0];
}

/**
 * Process one order and return its ageing data.
 */
function calculateOrderAgeing(
  orderId: string,
  data: Record<string, unknown>,
  today: Date
): AgeingRecord | null {
  if (
    !hasPendingAmount(data)
  ) {
    return null;
  }

  const dueDate =
    getDueDate(data);

  if (!dueDate) {
    return null;
  }

  const daysOverdue =
    Math.max(
      getDaysDifference(
        dueDate,
        today
      ),
      0
    );

  const pendingAmount =
    getPendingAmount(data);

  const totalAmount =
    Number(
      data.totalAmount ??
        data.orderAmount ??
        data.total ??
        0
    );

  const amountReceived =
    Number(
      data.amountReceived ??
        data.receivedAmount ??
        0
    );

  const status =
    daysOverdue > 0
      ? "Overdue"
      : "Pending";

  return {
    id:
      `AGE-${orderId}`,

    orderId,

    customerName:
      getCustomerName(data),

    customerPhone:
      getCustomerPhone(data),

    totalAmount,

    amountReceived,

    pendingAmount,

    dueDate:
      formatDate(dueDate),

    daysOverdue,

    ageingBucket:
      getAgeingBucket(
        daysOverdue
      ),

    status,
  };
}

/**
 * Update the ageing record for an order.
 */
async function saveAgeingRecord(
  record: AgeingRecord
): Promise<void> {
  const ageingRef =
    adminDb
      .collection("paymentAgeing")
      .doc(record.orderId);

  await ageingRef.set(
    {
      ...record,

      updatedAt:
        FieldValue.serverTimestamp(),
    },
    {
      merge: true,
    }
  );
}

/**
 * Remove ageing record when payment is completed.
 */
async function removeAgeingRecord(
  orderId: string
): Promise<void> {
  await adminDb
    .collection("paymentAgeing")
    .doc(orderId)
    .delete();
}

/**
 * Update the main order with ageing information.
 */
async function updateOrderAgeing(
  orderId: string,
  record: AgeingRecord
): Promise<void> {
  await adminDb
    .collection("orders")
    .doc(orderId)
    .update({
      ageingBucket:
        record.ageingBucket,

      daysOverdue:
        record.daysOverdue,

      ageingStatus:
        record.status,

      pendingAmount:
        record.pendingAmount,

      ageingUpdatedAt:
        FieldValue.serverTimestamp(),
    });
}

/**
 * Process all furniture orders.
 */
async function processFurnitureOrders(): Promise<{
  processed: number;
  pending: number;
  overdue: number;
  completed: number;
  ageingRecords: number;
}> {
  const ordersSnapshot =
    await adminDb
      .collection("orders")
      .where(
        "orderType",
        "==",
        "Furniture"
      )
      .get();

  /**
   * If your website creates orders with
   * source = "Furniture Website" but without
   * orderType, those are handled below too.
   */
  const websiteOrdersSnapshot =
    await adminDb
      .collection("orders")
      .where(
        "source",
        "==",
        "Furniture Website"
      )
      .get();

  const orders = new Map<
    string,
    FirebaseFirestore.DocumentSnapshot
  >();

  for (
    const document of
      ordersSnapshot.docs
  ) {
    orders.set(
      document.id,
      document
    );
  }

  for (
    const document of
      websiteOrdersSnapshot.docs
  ) {
    orders.set(
      document.id,
      document
    );
  }

  const today = new Date();

  let pending = 0;
  let overdue = 0;
  let completed = 0;
  let ageingRecords = 0;

  for (
    const document of
      orders.values()
  ) {
    const data =
      document.data() as Record<
        string,
        unknown
      >;

    const orderId =
      document.id;

    /**
     * Completed / cancelled orders with no
     * pending balance do not need ageing.
     */
    if (
      !hasPendingAmount(data)
    ) {
      await removeAgeingRecord(
        orderId
      );

      completed += 1;

      continue;
    }

    const record =
      calculateOrderAgeing(
        orderId,
        data,
        today
      );

    if (!record) {
      continue;
    }

    await saveAgeingRecord(
      record
    );

    await updateOrderAgeing(
      orderId,
      record
    );

    ageingRecords += 1;

    if (
      record.status ===
      "Overdue"
    ) {
      overdue += 1;
    } else {
      pending += 1;
    }
  }

  return {
    processed:
      orders.size,

    pending,

    overdue,

    completed,

    ageingRecords,
  };
}

/**
 * Scheduled Furniture payment-ageing job.
 *
 * Runs every day at 6:00 AM.
 *
 * Change the schedule if required.
 */
export const checkAgeingCron =
  onSchedule(
    {
      schedule:
        "0 6 * * *",

      timeZone:
        "Asia/Kolkata",

      region:
        "asia-south1",

      memory:
        "256MiB",

      timeoutSeconds:
        120,

      retryCount: 2,
    },
    async () => {
      try {
        console.log(
          "Starting Furniture payment ageing check..."
        );

        const result =
          await processFurnitureOrders();

        console.log(
          "Furniture payment ageing check completed.",
          result
        );
      } catch (error: unknown) {
        console.error(
          "Furniture payment ageing cron failed:",
          error
        );

        throw error;
      }
    }
  );

/**
 * Exported helper for manual testing.
 */
export {
  processFurnitureOrders,
  calculateOrderAgeing,
  getAgeingBucket,
};