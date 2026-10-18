// import { Request, Response } from "express";
// import { FieldValue } from "firebase-admin/firestore";
// import crypto from "crypto";

// import { adminDb } from "../../core/firebaseAdmin";

// /**
//  * Cashfree webhook handler for Furniture orders.
//  *
//  * Expected webhook flow:
//  *
//  * Cashfree
//  *    ↓
//  * cashfreeWebhook
//  *    ↓
//  * Verify signature
//  *    ↓
//  * Find order
//  *    ↓
//  * Update Firestore
//  *
//  * IMPORTANT:
//  * CASHFREE_WEBHOOK_SECRET must be stored only on the
//  * Firebase Functions/backend environment.
//  */

// type CashfreeWebhookPayload = {
//   data?: {
//     order?: {
//       order_id?: string;
//       order_amount?: number;
//       order_currency?: string;
//       order_status?: string;
//       order_tags?: Record<string, string>;
//     };

//     payment?: {
//       cf_payment_id?: string;
//       payment_status?: string;
//       payment_amount?: number;
//       payment_currency?: string;
//       payment_message?: string;
//       payment_time?: string;
//       payment_group?: string;
//     };

//     customer_details?: {
//       customer_id?: string;
//       customer_name?: string;
//       customer_email?: string;
//       customer_phone?: string;
//     };

//     refund?: {
//       cf_refund_id?: string;
//       refund_id?: string;
//       refund_amount?: number;
//       refund_status?: string;
//       refund_time?: string;
//     };
//   };

//   event_time?: string;

//   type?: string;
// };

// type CashfreeWebhookEvent = {
//   eventType:
//     | "PAYMENT_SUCCESS"
//     | "PAYMENT_FAILED"
//     | "PAYMENT_USER_DROPPED"
//     | "ORDER_PAID"
//     | "ORDER_FAILED"
//     | "REFUND_STATUS"
//     | "UNKNOWN";

//   orderId?: string;

//   paymentId?: string;

//   paymentStatus?: string;

//   orderStatus?: string;

//   paymentAmount?: number;

//   currency?: string;

//   message?: string;

//   eventTime?: string;
// };

// const WEBHOOK_SECRET =
//   process.env.CASHFREE_WEBHOOK_SECRET || "";

// /**
//  * Convert webhook event to a normalized internal structure.
//  */
// function normalizeEvent(
//   payload: CashfreeWebhookPayload
// ): CashfreeWebhookEvent {
//   const type = payload.type || "";

//   const paymentStatus =
//     payload.data?.payment?.payment_status || "";

//   const orderStatus =
//     payload.data?.order?.order_status || "";

//   let eventType: CashfreeWebhookEvent["eventType"] =
//     "UNKNOWN";

//   if (
//     type.includes("PAYMENT_SUCCESS") ||
//     paymentStatus === "SUCCESS"
//   ) {
//     eventType = "PAYMENT_SUCCESS";
//   } else if (
//     type.includes("PAYMENT_FAILED") ||
//     paymentStatus === "FAILED"
//   ) {
//     eventType = "PAYMENT_FAILED";
//   } else if (
//     type.includes("PAYMENT_USER_DROPPED") ||
//     paymentStatus === "USER_DROPPED"
//   ) {
//     eventType = "PAYMENT_USER_DROPPED";
//   } else if (
//     type.includes("ORDER_PAID") ||
//     orderStatus === "PAID"
//   ) {
//     eventType = "ORDER_PAID";
//   } else if (
//     type.includes("ORDER_FAILED") ||
//     orderStatus === "FAILED"
//   ) {
//     eventType = "ORDER_FAILED";
//   } else if (
//     type.includes("REFUND")
//   ) {
//     eventType = "REFUND_STATUS";
//   }

//   return {
//     eventType,
//     orderId:
//       payload.data?.order?.order_id,

//     paymentId:
//       payload.data?.payment?.cf_payment_id,

//     paymentStatus:
//       payload.data?.payment?.payment_status,

//     orderStatus:
//       payload.data?.order?.order_status,

//     paymentAmount:
//       payload.data?.payment?.payment_amount,

//     currency:
//       payload.data?.payment?.payment_currency ||
//       payload.data?.order?.order_currency,

//     message:
//       payload.data?.payment?.payment_message,

//     eventTime:
//       payload.event_time,
//   };
// }

// /**
//  * Verify Cashfree webhook signature.
//  *
//  * Cashfree signs:
//  *
//  * x-webhook-timestamp + raw request body
//  *
//  * using HMAC SHA256.
//  */
// function verifyCashfreeSignature(
//   rawBody: string,
//   signature: string | undefined,
//   timestamp: string | undefined
// ): boolean {
//   if (
//     !WEBHOOK_SECRET ||
//     !signature ||
//     !timestamp
//   ) {
//     return false;
//   }

//   const signedPayload =
//     `${timestamp}${rawBody}`;

//   const expectedSignature =
//     crypto
//       .createHmac(
//         "sha256",
//         WEBHOOK_SECRET
//       )
//       .update(signedPayload)
//       .digest("base64");

//   try {
//     return crypto.timingSafeEqual(
//       Buffer.from(expectedSignature),
//       Buffer.from(signature)
//     );
//   } catch {
//     return false;
//   }
// }

// /**
//  * Update Furniture order after successful payment.
//  */
// // async function handlePaymentSuccess(
// //   event: CashfreeWebhookEvent,
// //   payload: CashfreeWebhookPayload
// // ): Promise<void> {
// //   if (!event.orderId) {
// //     throw new Error(
// //       "Cashfree order ID is missing."
// //     );
// //   }

// //   const orderRef = adminDb
// //     .collection("orders")
// //     .doc(event.orderId);

// //   const orderSnapshot =
// //     await orderRef.get();

// //   if (!orderSnapshot.exists) {
// //     console.warn(
// //       `Order ${event.orderId} was not found.`
// //     );

// //     return;
// //   }

// //   const orderData =
// //     orderSnapshot.data() || {};

// //   const paymentAmount =
// //     event.paymentAmount || 0;

// //   const currentReceived =
// //     Number(orderData.amountReceived || 0);

// //   const orderAmount =
// //     Number(
// //       orderData.totalAmount ||
// //         orderData.orderAmount ||
// //         orderData.total ||
// //         0
// //     );

// //   const newReceived =
// //     Math.min(
// //       currentReceived + paymentAmount,
// //       orderAmount || currentReceived + paymentAmount
// //     );

// //   const pendingAmount =
// //     Math.max(
// //       orderAmount - newReceived,
// //       0
// //     );

// //   const paymentStatus =
// //     orderAmount > 0 &&
// //     newReceived >= orderAmount
// //       ? "Paid"
// //       : "Partial";

// //   await orderRef.update({
// //     paymentStatus,

// //     paymentState: "Received",

// //     amountReceived:
// //       newReceived,

// //     pendingAmount,

// //     cashfreePaymentId:
// //       event.paymentId || null,

// //     cashfreePaymentStatus:
// //       event.paymentStatus || "SUCCESS",

// //     lastPaymentAmount:
// //       paymentAmount,

// //     lastPaymentAt:
// //       event.eventTime
// //         ? new Date(event.eventTime)
// //         : FieldValue.serverTimestamp(),

// //     updatedAt:
// //       FieldValue.serverTimestamp(),
// //   });

// //   /**
// //    * Store individual payment transaction.
// //    */
// //   if (event.paymentId) {
// //     await adminDb
// //       .collection("payments")
// //       .doc(event.paymentId)
// //       .set(
// //         {
// //           id: event.paymentId,

// //           orderId:
// //             event.orderId,

// //           amount:
// //             paymentAmount,

// //           currency:
// //             event.currency || "INR",

// //           status:
// //             "Received",

// //           method:
// //             "Cashfree",

// //           gateway:
// //             "Cashfree",

// //           gatewayPaymentId:
// //             event.paymentId,

// //           message:
// //             event.message || "",

// //           eventTime:
// //             event.eventTime || null,

// //           createdAt:
// //             FieldValue.serverTimestamp(),

// //           updatedAt:
// //             FieldValue.serverTimestamp(),
// //         },
// //         {
// //           merge: true,
// //         }
// //       );
// //   }
// // }


// async function handlePaymentSuccess(
//   event: CashfreeWebhookEvent,
//   payload: CashfreeWebhookPayload
// ): Promise<void> {
//   if (!event.orderId) {
//     throw new Error("Cashfree order ID is missing.");
//   }

//   // Prefer furniture_orders (ERP); fall back to orders (website)
//   let orderRef = adminDb.collection("furniture_orders").doc(event.orderId);
//   let orderSnapshot = await orderRef.get();

//   if (!orderSnapshot.exists) {
//     orderRef = adminDb.collection("orders").doc(event.orderId);
//     orderSnapshot = await orderRef.get();
//   }

//   if (!orderSnapshot.exists) {
//     console.warn(`Order ${event.orderId} was not found.`);
//     return;
//   }

//   const orderData = orderSnapshot.data() || {};
//   const paymentAmount = event.paymentAmount || 0;
//   const currentReceived = Number(
//     orderData.amountReceived ?? orderData.paid ?? 0
//   );
//   const orderAmount = Number(
//     orderData.totalAmount ??
//       orderData.orderAmount ??
//       orderData.total ??
//       orderData.amount ??
//       0
//   );

//   const newReceived = Math.min(
//     currentReceived + paymentAmount,
//     orderAmount || currentReceived + paymentAmount
//   );
//   const pendingAmount = Math.max(orderAmount - newReceived, 0);
//   const paymentStatus =
//     orderAmount > 0 && newReceived >= orderAmount ? "Paid" : "Partial";

//   const customerName =
//     payload.data?.customer_details?.customer_name ||
//     orderData.customer?.name ||
//     orderData.customerName ||
//     "Website Customer";

//   const phone =
//     payload.data?.customer_details?.customer_phone ||
//     orderData.customer?.phone ||
//     orderData.phone ||
//     "";

//   const today = new Date().toISOString().slice(0, 10);

//   await orderRef.update({
//     paymentStatus,
//     paymentState: "Received",
//     amountReceived: newReceived,
//     paid: newReceived,
//     pendingAmount,
//     cashfreePaymentId: event.paymentId || null,
//     cashfreePaymentStatus: event.paymentStatus || "SUCCESS",
//     lastPaymentAmount: paymentAmount,
//     lastPaymentAt: event.eventTime
//       ? new Date(event.eventTime)
//       : FieldValue.serverTimestamp(),
//     updatedAt: FieldValue.serverTimestamp(),
//   });

//   // Legacy payments collection (keep if website uses it)
//   if (event.paymentId) {
//     await adminDb
//       .collection("payments")
//       .doc(event.paymentId)
//       .set(
//         {
//           id: event.paymentId,
//           orderId: event.orderId,
//           amount: paymentAmount,
//           currency: event.currency || "INR",
//           status: "Received",
//           method: "Cashfree",
//           gateway: "Cashfree",
//           gatewayPaymentId: event.paymentId,
//           message: event.message || "",
//           eventTime: event.eventTime || null,
//           createdAt: FieldValue.serverTimestamp(),
//           updatedAt: FieldValue.serverTimestamp(),
//         },
//         { merge: true }
//       );
//   }

//   // ERP Online Payments page → furniture_payments
//   const erpPaymentId = event.paymentId || `CF-${event.orderId}-${Date.now()}`;

//   await adminDb
//     .collection("furniture_payments")
//     .doc(erpPaymentId)
//     .set(
//       {
//         paymentNo: `PAY-ONL-${String(erpPaymentId).slice(-8).toUpperCase()}`,
//         orderNo: event.orderId,
//         orderId: event.orderId,
//         customer: customerName,
//         customerName,
//         phone,
//         amount: orderAmount || paymentAmount,
//         paidAmount: paymentAmount,
//         dueAmount: pendingAmount,
//         paymentMethod: "Cashfree",
//         source: "Online",
//         status: paymentStatus === "Paid" ? "Received" : "Partial",
//         paymentDate: today,
//         dueDate: "-",
//         reference: event.paymentId || event.orderId || "-",
//         notes: "Paid online via website (Cashfree)",
//         cfOrderId: event.orderId,
//         cfPaymentId: event.paymentId || null,
//         createdAt: FieldValue.serverTimestamp(),
//         updatedAt: FieldValue.serverTimestamp(),
//       },
//       { merge: true }
//     );
// }


// /**
//  * Handle failed payment.
//  */
// async function handlePaymentFailure(
//   event: CashfreeWebhookEvent
// ): Promise<void> {
//   if (!event.orderId) {
//     throw new Error(
//       "Cashfree order ID is missing."
//     );
//   }

//   const orderRef = adminDb
//     .collection("orders")
//     .doc(event.orderId);

//   const orderSnapshot =
//     await orderRef.get();

//   if (!orderSnapshot.exists) {
//     console.warn(
//       `Order ${event.orderId} was not found.`
//     );

//     return;
//   }

//   await orderRef.update({
//     paymentStatus:
//       "Failed",

//     paymentState:
//       "Failed",

//     cashfreePaymentId:
//       event.paymentId || null,

//     cashfreePaymentStatus:
//       event.paymentStatus || "FAILED",

//     paymentFailureMessage:
//       event.message || "Payment failed.",

//     updatedAt:
//       FieldValue.serverTimestamp(),
//   });
// }

// /**
//  * Handle user dropping out of the payment flow.
//  */
// async function handlePaymentDropped(
//   event: CashfreeWebhookEvent
// ): Promise<void> {
//   if (!event.orderId) {
//     throw new Error(
//       "Cashfree order ID is missing."
//     );
//   }

//   const orderRef = adminDb
//     .collection("orders")
//     .doc(event.orderId);

//   const orderSnapshot =
//     await orderRef.get();

//   if (!orderSnapshot.exists) {
//     return;
//   }

//   await orderRef.update({
//     paymentStatus:
//       "Pending",

//     paymentState:
//       "User Dropped",

//     cashfreePaymentId:
//       event.paymentId || null,

//     cashfreePaymentStatus:
//       "USER_DROPPED",

//     updatedAt:
//       FieldValue.serverTimestamp(),
//   });
// }

// /**
//  * Handle paid order event.
//  */
// async function handleOrderPaid(
//   event: CashfreeWebhookEvent
// ): Promise<void> {
//   if (!event.orderId) {
//     throw new Error(
//       "Cashfree order ID is missing."
//     );
//   }

//   const orderRef = adminDb
//     .collection("orders")
//     .doc(event.orderId);

//   const orderSnapshot =
//     await orderRef.get();

//   if (!orderSnapshot.exists) {
//     return;
//   }

//   await orderRef.update({
//     status:
//       "Confirmed",

//     paymentStatus:
//       "Paid",

//     paymentState:
//       "Received",

//     updatedAt:
//       FieldValue.serverTimestamp(),
//   });
// }

// /**
//  * Handle failed order.
//  */
// async function handleOrderFailed(
//   event: CashfreeWebhookEvent
// ): Promise<void> {
//   if (!event.orderId) {
//     throw new Error(
//       "Cashfree order ID is missing."
//     );
//   }

//   const orderRef = adminDb
//     .collection("orders")
//     .doc(event.orderId);

//   const orderSnapshot =
//     await orderRef.get();

//   if (!orderSnapshot.exists) {
//     return;
//   }

//   await orderRef.update({
//     paymentStatus:
//       "Failed",

//     paymentState:
//       "Failed",

//     status:
//       "Pending",

//     updatedAt:
//       FieldValue.serverTimestamp(),
//   });
// }

// /**
//  * Handle refund events.
//  */
// async function handleRefund(
//   payload: CashfreeWebhookPayload
// ): Promise<void> {
//   const refund =
//     payload.data?.refund;

//   const orderId =
//     payload.data?.order?.order_id;

//   if (!orderId || !refund) {
//     return;
//   }

//   const refundId =
//     refund.cf_refund_id ||
//     refund.refund_id;

//   if (!refundId) {
//     return;
//   }

//   await adminDb
//     .collection("refunds")
//     .doc(refundId)
//     .set(
//       {
//         id: refundId,

//         orderId,

//         cashfreeRefundId:
//           refund.cf_refund_id || null,

//         refundId:
//           refund.refund_id || null,

//         amount:
//           refund.refund_amount || 0,

//         status:
//           refund.refund_status || "UNKNOWN",

//         refundTime:
//           refund.refund_time || null,

//         updatedAt:
//           FieldValue.serverTimestamp(),

//         createdAt:
//           FieldValue.serverTimestamp(),
//       },
//       {
//         merge: true,
//       }
//     );
// }

// /**
//  * Main Cashfree webhook handler.
//  */
// export async function cashfreeWebhook(
//   req: Request,
//   res: Response
// ): Promise<void> {
//   if (req.method !== "POST") {
//     res
//       .status(405)
//       .json({
//         success: false,
//         message: "Method not allowed.",
//       });

//     return;
//   }

//   try {
//     if (!WEBHOOK_SECRET) {
//       console.error(
//         "CASHFREE_WEBHOOK_SECRET is not configured."
//       );

//       res
//         .status(500)
//         .json({
//           success: false,
//           message:
//             "Webhook configuration error.",
//         });

//       return;
//     }

//     const signature =
//       req.header(
//         "x-webhook-signature"
//       );

//     const timestamp =
//       req.header(
//         "x-webhook-timestamp"
//       );

//     /**
//      * Express must expose the raw body for
//      * Cashfree signature verification.
//      */
//     const rawBody =
//       Buffer.isBuffer(req.body)
//         ? req.body.toString("utf8")
//         : typeof req.body === "string"
//         ? req.body
//         : JSON.stringify(req.body);

//     const isValid =
//       verifyCashfreeSignature(
//         rawBody,
//         signature,
//         timestamp
//       );

//     if (!isValid) {
//       console.warn(
//         "Invalid Cashfree webhook signature."
//       );

//       res
//         .status(401)
//         .json({
//           success: false,
//           message:
//             "Invalid webhook signature.",
//         });

//       return;
//     }

//     const payload =
//       JSON.parse(
//         rawBody
//       ) as CashfreeWebhookPayload;

//     const event =
//       normalizeEvent(payload);

//     console.log(
//       "Cashfree webhook received:",
//       {
//         eventType:
//           event.eventType,
//         orderId:
//           event.orderId,
//         paymentId:
//           event.paymentId,
//       }
//     );

//     switch (event.eventType) {
//       case "PAYMENT_SUCCESS":
//         await handlePaymentSuccess(
//           event,
//           payload
//         );
//         break;

//       case "PAYMENT_FAILED":
//         await handlePaymentFailure(
//           event
//         );
//         break;

//       case "PAYMENT_USER_DROPPED":
//         await handlePaymentDropped(
//           event
//         );
//         break;

//       case "ORDER_PAID":
//         await handleOrderPaid(
//           event
//         );
//         break;

//       case "ORDER_FAILED":
//         await handleOrderFailed(
//           event
//         );
//         break;

//       case "REFUND_STATUS":
//         await handleRefund(
//           payload
//         );
//         break;

//       case "UNKNOWN":
//       default:
//         console.log(
//           "Unhandled Cashfree webhook event.",
//           payload.type
//         );
//         break;
//     }

//     res
//       .status(200)
//       .json({
//         success: true,
//         received: true,
//       });
//   } catch (error: unknown) {
//     console.error(
//       "Cashfree webhook error:",
//       error
//     );

//     res
//       .status(500)
//       .json({
//         success: false,
//         message:
//           "Webhook processing failed.",
//       });
//   }
// }

// export default cashfreeWebhook;

import { Request, Response } from "express";
import { FieldValue } from "firebase-admin/firestore";
import crypto from "crypto";

import { adminDb } from "../../core/firebaseAdmin";

/**
 * Cashfree webhook for Furniture orders.
 * Writes successful payments to furniture_payments (ERP Online Payments).
 */

type CashfreeWebhookPayload = {
  data?: {
    order?: {
      order_id?: string;
      order_amount?: number;
      order_currency?: string;
      order_status?: string;
      order_tags?: Record<string, string>;
    };
    payment?: {
      cf_payment_id?: string;
      payment_status?: string;
      payment_amount?: number;
      payment_currency?: string;
      payment_message?: string;
      payment_time?: string;
      payment_group?: string;
    };
    customer_details?: {
      customer_id?: string;
      customer_name?: string;
      customer_email?: string;
      customer_phone?: string;
    };
    refund?: {
      cf_refund_id?: string;
      refund_id?: string;
      refund_amount?: number;
      refund_status?: string;
      refund_time?: string;
    };
  };
  event_time?: string;
  type?: string;
};

type CashfreeWebhookEvent = {
  eventType:
    | "PAYMENT_SUCCESS"
    | "PAYMENT_FAILED"
    | "PAYMENT_USER_DROPPED"
    | "ORDER_PAID"
    | "ORDER_FAILED"
    | "REFUND_STATUS"
    | "UNKNOWN";
  orderId?: string;
  paymentId?: string;
  paymentStatus?: string;
  orderStatus?: string;
  paymentAmount?: number;
  currency?: string;
  message?: string;
  eventTime?: string;
};

const WEBHOOK_SECRET = process.env.CASHFREE_WEBHOOK_SECRET || "";

function normalizeEvent(
  payload: CashfreeWebhookPayload
): CashfreeWebhookEvent {
  const type = payload.type || "";
  const paymentStatus = payload.data?.payment?.payment_status || "";
  const orderStatus = payload.data?.order?.order_status || "";

  let eventType: CashfreeWebhookEvent["eventType"] = "UNKNOWN";

  if (type.includes("PAYMENT_SUCCESS") || paymentStatus === "SUCCESS") {
    eventType = "PAYMENT_SUCCESS";
  } else if (type.includes("PAYMENT_FAILED") || paymentStatus === "FAILED") {
    eventType = "PAYMENT_FAILED";
  } else if (
    type.includes("PAYMENT_USER_DROPPED") ||
    paymentStatus === "USER_DROPPED"
  ) {
    eventType = "PAYMENT_USER_DROPPED";
  } else if (type.includes("ORDER_PAID") || orderStatus === "PAID") {
    eventType = "ORDER_PAID";
  } else if (type.includes("ORDER_FAILED") || orderStatus === "FAILED") {
    eventType = "ORDER_FAILED";
  } else if (type.includes("REFUND")) {
    eventType = "REFUND_STATUS";
  }

  return {
    eventType,
    orderId: payload.data?.order?.order_id,
    paymentId: payload.data?.payment?.cf_payment_id,
    paymentStatus: payload.data?.payment?.payment_status,
    orderStatus: payload.data?.order?.order_status,
    paymentAmount: payload.data?.payment?.payment_amount,
    currency:
      payload.data?.payment?.payment_currency ||
      payload.data?.order?.order_currency,
    message: payload.data?.payment?.payment_message,
    eventTime: payload.event_time,
  };
}

function verifyCashfreeSignature(
  rawBody: string,
  signature: string | undefined,
  timestamp: string | undefined
): boolean {
  if (!WEBHOOK_SECRET || !signature || !timestamp) {
    return false;
  }

  const signedPayload = `${timestamp}${rawBody}`;
  const expectedSignature = crypto
    .createHmac("sha256", WEBHOOK_SECRET)
    .update(signedPayload)
    .digest("base64");

  try {
    return crypto.timingSafeEqual(
      Buffer.from(expectedSignature),
      Buffer.from(signature)
    );
  } catch {
    return false;
  }
}

async function resolveOrderRef(orderId: string) {
  let orderRef = adminDb.collection("furniture_orders").doc(orderId);
  let snapshot = await orderRef.get();

  if (!snapshot.exists) {
    orderRef = adminDb.collection("orders").doc(orderId);
    snapshot = await orderRef.get();
  }

  return { orderRef, snapshot };
}

async function handlePaymentSuccess(
  event: CashfreeWebhookEvent,
  payload: CashfreeWebhookPayload
): Promise<void> {
  if (!event.orderId) {
    throw new Error("Cashfree order ID is missing.");
  }

  const { orderRef, snapshot: orderSnapshot } = await resolveOrderRef(
    event.orderId
  );

  if (!orderSnapshot.exists) {
    console.warn(`Order ${event.orderId} was not found.`);
    return;
  }

  const orderData = orderSnapshot.data() || {};
  const paymentAmount = event.paymentAmount || 0;
  const currentReceived = Number(
    orderData.amountReceived ?? orderData.paid ?? 0
  );
  const orderAmount = Number(
    orderData.totalAmount ??
      orderData.orderAmount ??
      orderData.total ??
      orderData.amount ??
      0
  );

  const newReceived = Math.min(
    currentReceived + paymentAmount,
    orderAmount || currentReceived + paymentAmount
  );
  const pendingAmount = Math.max(orderAmount - newReceived, 0);
  const paymentStatus =
    orderAmount > 0 && newReceived >= orderAmount ? "Paid" : "Partial";

  const customerName =
    payload.data?.customer_details?.customer_name ||
    orderData.customer?.name ||
    orderData.customerName ||
    "Website Customer";

  const phone =
    payload.data?.customer_details?.customer_phone ||
    orderData.customer?.phone ||
    orderData.phone ||
    "";

  const today = new Date().toISOString().slice(0, 10);

  await orderRef.update({
    paymentStatus,
    paymentState: "Received",
    amountReceived: newReceived,
    paid: newReceived,
    pendingAmount,
    cashfreePaymentId: event.paymentId || null,
    cashfreePaymentStatus: event.paymentStatus || "SUCCESS",
    lastPaymentAmount: paymentAmount,
    lastPaymentAt: event.eventTime
      ? new Date(event.eventTime)
      : FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  });

  // Legacy / website payments collection
  if (event.paymentId) {
    await adminDb
      .collection("payments")
      .doc(event.paymentId)
      .set(
        {
          id: event.paymentId,
          orderId: event.orderId,
          amount: paymentAmount,
          currency: event.currency || "INR",
          status: "Received",
          method: "Cashfree",
          gateway: "Cashfree",
          gatewayPaymentId: event.paymentId,
          message: event.message || "",
          eventTime: event.eventTime || null,
          createdAt: FieldValue.serverTimestamp(),
          updatedAt: FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
  }

  // ERP Online Payments → furniture_payments
  const erpPaymentId =
    event.paymentId || `CF-${event.orderId}-${Date.now()}`;

  await adminDb
    .collection("furniture_payments")
    .doc(String(erpPaymentId))
    .set(
      {
        paymentNo: `PAY-ONL-${String(erpPaymentId).slice(-8).toUpperCase()}`,
        orderNo: event.orderId,
        orderId: event.orderId,
        customer: customerName,
        customerName,
        phone,
        amount: orderAmount || paymentAmount,
        paidAmount: paymentAmount,
        dueAmount: pendingAmount,
        paymentMethod: "Cashfree",
        source: "Online",
        status: paymentStatus === "Paid" ? "Received" : "Partial",
        paymentDate: today,
        dueDate: "-",
        reference: event.paymentId || event.orderId || "-",
        notes: "Paid online via website (Cashfree)",
        cfOrderId: event.orderId,
        cfPaymentId: event.paymentId || null,
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
}

async function handlePaymentFailure(
  event: CashfreeWebhookEvent
): Promise<void> {
  if (!event.orderId) {
    throw new Error("Cashfree order ID is missing.");
  }

  const { orderRef, snapshot } = await resolveOrderRef(event.orderId);
  if (!snapshot.exists) {
    console.warn(`Order ${event.orderId} was not found.`);
    return;
  }

  await orderRef.update({
    paymentStatus: "Failed",
    paymentState: "Failed",
    cashfreePaymentId: event.paymentId || null,
    cashfreePaymentStatus: event.paymentStatus || "FAILED",
    paymentFailureMessage: event.message || "Payment failed.",
    updatedAt: FieldValue.serverTimestamp(),
  });
}

async function handlePaymentDropped(
  event: CashfreeWebhookEvent
): Promise<void> {
  if (!event.orderId) {
    throw new Error("Cashfree order ID is missing.");
  }

  const { orderRef, snapshot } = await resolveOrderRef(event.orderId);
  if (!snapshot.exists) return;

  await orderRef.update({
    paymentStatus: "Pending",
    paymentState: "User Dropped",
    cashfreePaymentId: event.paymentId || null,
    cashfreePaymentStatus: "USER_DROPPED",
    updatedAt: FieldValue.serverTimestamp(),
  });
}

async function handleOrderPaid(event: CashfreeWebhookEvent): Promise<void> {
  if (!event.orderId) {
    throw new Error("Cashfree order ID is missing.");
  }

  const { orderRef, snapshot } = await resolveOrderRef(event.orderId);
  if (!snapshot.exists) return;

  await orderRef.update({
    status: "Confirmed",
    paymentStatus: "Paid",
    paymentState: "Received",
    updatedAt: FieldValue.serverTimestamp(),
  });
}

async function handleOrderFailed(event: CashfreeWebhookEvent): Promise<void> {
  if (!event.orderId) {
    throw new Error("Cashfree order ID is missing.");
  }

  const { orderRef, snapshot } = await resolveOrderRef(event.orderId);
  if (!snapshot.exists) return;

  await orderRef.update({
    paymentStatus: "Failed",
    paymentState: "Failed",
    status: "Pending",
    updatedAt: FieldValue.serverTimestamp(),
  });
}

async function handleRefund(
  payload: CashfreeWebhookPayload
): Promise<void> {
  const refund = payload.data?.refund;
  const orderId = payload.data?.order?.order_id;

  if (!orderId || !refund) return;

  const refundId = refund.cf_refund_id || refund.refund_id;
  if (!refundId) return;

  await adminDb
    .collection("refunds")
    .doc(refundId)
    .set(
      {
        id: refundId,
        orderId,
        cashfreeRefundId: refund.cf_refund_id || null,
        refundId: refund.refund_id || null,
        amount: refund.refund_amount || 0,
        status: refund.refund_status || "UNKNOWN",
        refundTime: refund.refund_time || null,
        updatedAt: FieldValue.serverTimestamp(),
        createdAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
}

export async function cashfreeWebhook(
  req: Request,
  res: Response
): Promise<void> {
  if (req.method !== "POST") {
    res.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
    return;
  }

  try {
    if (!WEBHOOK_SECRET) {
      console.error("CASHFREE_WEBHOOK_SECRET is not configured.");
      res.status(500).json({
        success: false,
        message: "Webhook configuration error.",
      });
      return;
    }

    const signature = req.header("x-webhook-signature");
    const timestamp = req.header("x-webhook-timestamp");

    const rawBody = Buffer.isBuffer(req.body)
      ? req.body.toString("utf8")
      : typeof req.body === "string"
        ? req.body
        : JSON.stringify(req.body);

    const isValid = verifyCashfreeSignature(rawBody, signature, timestamp);

    if (!isValid) {
      console.warn("Invalid Cashfree webhook signature.");
      res.status(401).json({
        success: false,
        message: "Invalid webhook signature.",
      });
      return;
    }

    const payload = JSON.parse(rawBody) as CashfreeWebhookPayload;
    const event = normalizeEvent(payload);

    console.log("Cashfree webhook received:", {
      eventType: event.eventType,
      orderId: event.orderId,
      paymentId: event.paymentId,
    });

    switch (event.eventType) {
      case "PAYMENT_SUCCESS":
        await handlePaymentSuccess(event, payload);
        break;
      case "PAYMENT_FAILED":
        await handlePaymentFailure(event);
        break;
      case "PAYMENT_USER_DROPPED":
        await handlePaymentDropped(event);
        break;
      case "ORDER_PAID":
        await handleOrderPaid(event);
        break;
      case "ORDER_FAILED":
        await handleOrderFailed(event);
        break;
      case "REFUND_STATUS":
        await handleRefund(payload);
        break;
      default:
        console.log("Unhandled Cashfree webhook event.", payload.type);
        break;
    }

    res.status(200).json({
      success: true,
      received: true,
    });
  } catch (error: unknown) {
    console.error("Cashfree webhook error:", error);
    res.status(500).json({
      success: false,
      message: "Webhook processing failed.",
    });
  }
}

export default cashfreeWebhook;