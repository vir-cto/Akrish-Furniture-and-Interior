// import { onRequest } from "firebase-functions/v2/https";
// import { setGlobalOptions } from "firebase-functions/v2/options";
// import { seedSuperAdmin } from "./core/seedSuperAdmin";
// // ─────────────────────────────────────────────
// // Global Firebase Functions configuration
// // ─────────────────────────────────────────────

// setGlobalOptions({
//   region: "asia-south1",
//   maxInstances: 10,
// });

// // ─────────────────────────────────────────────
// // Furniture APIs
// // ─────────────────────────────────────────────

// import handleEnquiry from "./furniture/api/handleEnquiry";
// // import syncProduct from "./furniture/api/syncProduct";
// import syncProduct from "./furniture/api/syncProduct";
// import createOrder from "./furniture/api/createOrder";
// import syncProductHandler from "./furniture/api/syncProduct";
// import generatePaymentLinkHandler from "./interior/api/generatePaymentLink";
// import cashfreeWebhook from "./furniture/api/cashfreeWebhook";

// // ─────────────────────────────────────────────
// // Furniture scheduled triggers
// // ─────────────────────────────────────────────

// import {
//   checkAgeingCron,
// } from "./furniture/triggers/checkAgeingCron";

// // ─────────────────────────────────────────────
// // Interior APIs
// // ─────────────────────────────────────────────

// // import generatePaymentLink from "./interior/api/generatePaymentLink";
// import generatePaymentLink from "./interior/api/generatePaymentLink";

// // ─────────────────────────────────────────────
// // Interior integrations
// // ─────────────────────────────────────────────

// import {
//   bankPayoutHandler,
// } from "./interior/integrations/bankPayout";

// // ─────────────────────────────────────────────
// // Interior triggers
// // ─────────────────────────────────────────────

// import {
//   onProjectCreate,
// } from "./interior/triggers/onProjectCreate";

// // ─────────────────────────────────────────────
// // Furniture API exports
// // ─────────────────────────────────────────────

// /**
//  * Furniture enquiry API.
//  *
//  * POST   /handleEnquiry
//  * GET    /handleEnquiry?enquiryId=...
//  * PATCH  /handleEnquiry?enquiryId=...
//  * DELETE /handleEnquiry?enquiryId=...
//  */
// export const furnitureHandleEnquiry =
//   onRequest(
//     {
//       region: "asia-south1",
//       cors: true,
//     },
//     handleEnquiry
//   );

// /**
//  * Furniture product synchronization API.
//  *
//  * GET    /furnitureSyncProduct?id=...
//  * POST   /furnitureSyncProduct
//  * PUT    /furnitureSyncProduct?id=...
//  * PATCH  /furnitureSyncProduct?id=...
//  * DELETE /furnitureSyncProduct?id=...
//  */
// export const furnitureSyncProduct =
//   onRequest(
//     {
//       region: "asia-south1",
//       cors: true,
//     },
//     syncProduct
//   );

// /**
//  * Furniture order creation API.
//  *
//  * POST /furnitureCreateOrder
//  */
// export const furnitureCreateOrder =
//   onRequest(
//     {
//       region: "asia-south1",
//       cors: true,
//     },
//     createOrder
//   );

// /**
//  * Cashfree webhook for furniture payments.
//  *
//  * POST /furnitureCashfreeWebhook
//  */
// export const furnitureCashfreeWebhook =
//   onRequest(
//     {
//       region: "asia-south1",
//       cors: true,
//     },
//     cashfreeWebhook
//   );

// // ─────────────────────────────────────────────
// // Furniture scheduled exports
// // ─────────────────────────────────────────────

// /**
//  * Daily furniture payment ageing check.
//  *
//  * Runs according to the schedule defined in
//  * checkAgeingCron.ts.
//  */
// export {
//   checkAgeingCron,
// };

// // ─────────────────────────────────────────────
// // Interior API exports
// // ─────────────────────────────────────────────

// /**
//  * Generate Cashfree payment link/session
//  * for an Interior project.
//  *
//  * POST /interiorGeneratePaymentLink
//  */
// export const interiorGeneratePaymentLink =
//   onRequest(
//     {
//       region: "asia-south1",
//       cors: true,
//     },
//     generatePaymentLink
//   );

// /**
//  * Create an Interior bank payout request.
//  *
//  * POST /interiorBankPayout
//  */
// export const interiorBankPayout =
//   onRequest(
//     {
//       region: "asia-south1",
//       cors: true,
//     },
//     bankPayoutHandler
//   );

// // ─────────────────────────────────────────────
// // Interior trigger exports
// // ─────────────────────────────────────────────

// /**
//  * Runs automatically when a new document is
//  * created in:
//  *
//  * projects/{projectId}
//  */
// export {
//   onProjectCreate,
// };

// export { seedSuperAdmin };

// import { onRequest } from "firebase-functions/v2/https";
// import { setGlobalOptions } from "firebase-functions/v2/options";
// import { seedSuperAdmin } from "./core/seedSuperAdmin";
// import { onFurnitureAuthUserCreate } from "./furniture/triggers/onAuthUserCreate";
// setGlobalOptions({
//   region: "asia-south1",
//   maxInstances: 10,
// });

// // Furniture APIs
// import handleEnquiry from "./furniture/api/handleEnquiry";
// import syncProduct from "./furniture/api/syncProduct";
// import createOrder from "./furniture/api/createOrder";
// import cashfreeWebhook from "./furniture/api/cashfreeWebhook";

// // Furniture scheduled
// import { checkAgeingCron } from "./furniture/triggers/checkAgeingCron";

// // Interior APIs
// import generatePaymentLink from "./interior/api/generatePaymentLink";

// // Interior integrations
// import { bankPayoutHandler } from "./interior/integrations/bankPayout";

// // Interior triggers
// import { onProjectCreate } from "./interior/triggers/onProjectCreate";

// // ── Furniture API exports ──────────────────────────────

// export const furnitureHandleEnquiry = onRequest(
//   {
//     region: "asia-south1",
//     cors: true,
//   },
//   handleEnquiry
// );

// export const furnitureSyncProduct = onRequest(
//   {
//     region: "asia-south1",
//     cors: true,
//   },
//   syncProduct
// );

// // export { onFurnitureAuthUserCreate };

// export const furnitureCreateOrder = onRequest(
//   {
//     region: "asia-south1",
//     cors: true,
//   },
//   createOrder
// );

// export const furnitureCashfreeWebhook = onRequest(
//   {
//     region: "asia-south1",
//     cors: true,
//   },
//   cashfreeWebhook
// );

// // ── Furniture scheduled ────────────────────────────────

// export { checkAgeingCron };

// // ── Interior API exports ───────────────────────────────

// export const interiorGeneratePaymentLink = onRequest(
//   {
//     region: "asia-south1",
//     cors: true,
//   },
//   generatePaymentLink
// );

// export const interiorBankPayout = onRequest(
//   {
//     region: "asia-south1",
//     cors: true,
//   },
//   bankPayoutHandler
// );

// // ── Interior triggers ──────────────────────────────────

// export { onProjectCreate };

// export { seedSuperAdmin };

// export { onFurnitureAuthUserCreate } from "./furniture/triggers/onAuthUserCreate";

// import { onRequest } from "firebase-functions/v2/https";
// import { setGlobalOptions } from "firebase-functions/v2/options";

// // Global options
// setGlobalOptions({
//   region: "asia-south1",
//   maxInstances: 10,
// });

// // ── Core ───────────────────────────────────────────────
// export { seedSuperAdmin } from "./core/seedSuperAdmin";

// // ── Furniture Auth Trigger ─────────────────────────────
// export { onFurnitureAuthUserCreate } from "./furniture/triggers/onAuthUserCreate";

// // ── Furniture APIs ─────────────────────────────────────
// import handleEnquiry from "./furniture/api/handleEnquiry";
// import syncProduct from "./furniture/api/syncProduct";
// import createOrder from "./furniture/api/createOrder";
// import cashfreeWebhook from "./furniture/api/cashfreeWebhook";

// // ── Furniture Scheduled ────────────────────────────────
// export { checkAgeingCron } from "./furniture/triggers/checkAgeingCron";

// // ── Interior APIs ──────────────────────────────────────
// import generatePaymentLink from "./interior/api/generatePaymentLink";
// import { bankPayoutHandler } from "./interior/integrations/bankPayout";

// // ── Interior Triggers ──────────────────────────────────
// export { onProjectCreate } from "./interior/triggers/onProjectCreate";

// // ── Export HTTP Functions ──────────────────────────────

// export const furnitureHandleEnquiry = onRequest(
//   { region: "asia-south1", cors: true },
//   handleEnquiry
// );

// export const furnitureSyncProduct = onRequest(
//   { region: "asia-south1", cors: true },
//   syncProduct
// );

// export const furnitureCreateOrder = onRequest(
//   { region: "asia-south1", cors: true },
//   createOrder
// );

// export const furnitureCashfreeWebhook = onRequest(
//   { region: "asia-south1", cors: true },
//   cashfreeWebhook
// );

// export const interiorGeneratePaymentLink = onRequest(
//   { region: "asia-south1", cors: true },
//   generatePaymentLink
// );

// export const interiorBankPayout = onRequest(
//   { region: "asia-south1", cors: true },
//   bankPayoutHandler
// );


// import { onRequest } from "firebase-functions/v2/https";
// import { setGlobalOptions } from "firebase-functions/v2/options";

// // Global options
// setGlobalOptions({
//   region: "asia-south1",
//   maxInstances: 10,
// });

// // ── Core ───────────────────────────────────────────────
// export { seedSuperAdmin } from "./core/seedSuperAdmin";

// // ── Furniture Auth Trigger ─────────────────────────────
// export { onFurnitureAuthUserCreate } from "./furniture/triggers/onAuthUserCreate";

// // ── Furniture Scheduled ────────────────────────────────
// export { checkAgeingCron } from "./furniture/triggers/checkAgeingCron";

// // ── Interior Triggers ──────────────────────────────────
// export { onProjectCreate } from "./interior/triggers/onProjectCreate";

// // ── Furniture APIs (default exports) ───────────────────
// import handleEnquiry from "./furniture/api/handleEnquiry";
// import syncProduct from "./furniture/api/syncProduct";
// import createOrder from "./furniture/api/createOrder";
// import cashfreeWebhook from "./furniture/api/cashfreeWebhook";

// // ── Interior APIs ──────────────────────────────────────
// import generatePaymentLink from "./interior/api/generatePaymentLink";
// import { bankPayoutHandler } from "./interior/integrations/bankPayout";

// // ── Export HTTP Functions ──────────────────────────────

// export const furnitureHandleEnquiry = onRequest(
//   { region: "asia-south1", cors: true },
//   handleEnquiry
// );

// export const furnitureSyncProduct = onRequest(
//   { region: "asia-south1", cors: true },
//   syncProduct
// );

// export const furnitureCreateOrder = onRequest(
//   { region: "asia-south1", cors: true },
//   createOrder
// );

// export const furnitureCashfreeWebhook = onRequest(
//   { region: "asia-south1", cors: true },
//   cashfreeWebhook
// );

// export const interiorGeneratePaymentLink = onRequest(
//   { region: "asia-south1", cors: true },
//   generatePaymentLink
// );

// export const interiorBankPayout = onRequest(
//   { region: "asia-south1", cors: true },
//   bankPayoutHandler
// );


// import { onRequest } from "firebase-functions/v2/https";
// import { setGlobalOptions } from "firebase-functions/v2/options";

// // Global options
// setGlobalOptions({
//   region: "asia-south1",
//   maxInstances: 10,
// });

// // ── Core ───────────────────────────────────────────────
// export { seedSuperAdmin } from "./core/seedSuperAdmin";

// // ── Furniture Auth Trigger ─────────────────────────────
// export { onFurnitureAuthUserCreate } from "./furniture/triggers/onAuthUserCreate";

// // ── Furniture Scheduled ────────────────────────────────
// export { checkAgeingCron } from "./furniture/triggers/checkAgeingCron";

// // ── Interior Triggers ──────────────────────────────────
// export { onProjectCreate } from "./interior/triggers/onProjectCreate";

// // ── Furniture APIs ─────────────────────────────────────
// import handleEnquiry from "./furniture/api/handleEnquiry";
// import syncProduct from "./furniture/api/syncProduct";
// import createOrder from "./furniture/api/createOrder";
// import cashfreeWebhook from "./furniture/api/cashfreeWebhook";

// // ── Interior APIs ──────────────────────────────────────
// import generatePaymentLink from "./interior/api/generatePaymentLink";
// import { bankPayoutHandler } from "./interior/integrations/bankPayout";

// // ── Export HTTP Functions ──────────────────────────────
// // Using `as any` to avoid Express type conflict between
// // firebase-functions and the root @types/express

// export const furnitureHandleEnquiry = onRequest(
//   { region: "asia-south1", cors: true },
//   handleEnquiry as any
// );

// export const furnitureSyncProduct = onRequest(
//   { region: "asia-south1", cors: true },
//   syncProduct as any
// );

// export const furnitureCreateOrder = onRequest(
//   { region: "asia-south1", cors: true },
//   createOrder as any
// );

// export const furnitureCashfreeWebhook = onRequest(
//   { region: "asia-south1", cors: true },
//   cashfreeWebhook as any
// );

// export const interiorGeneratePaymentLink = onRequest(
//   { region: "asia-south1", cors: true },
//   generatePaymentLink as any
// );

// export const interiorBankPayout = onRequest(
//   { region: "asia-south1", cors: true },
//   bankPayoutHandler as any
// );

import { onRequest } from "firebase-functions/v2/https";
import { setGlobalOptions } from "firebase-functions/v2/options";

// Global options
setGlobalOptions({
  region: "asia-south1",
  maxInstances: 10,
});

// ── Core ───────────────────────────────────────────────
export { seedSuperAdmin } from "./core/seedSuperAdmin";

// ── Furniture Auth Trigger ─────────────────────────────
export { onFurnitureAuthUserCreate } from "./furniture/triggers/onAuthUserCreate";

// ── Furniture Scheduled ────────────────────────────────
export { checkAgeingCron } from "./furniture/triggers/checkAgeingCron";

// ── Interior Triggers ──────────────────────────────────
export { onProjectCreate } from "./interior/triggers/onProjectCreate";
export { autoMarkAbsentCron } from "./interior/triggers/autoMarkAbsentCron";

// ── Furniture APIs ─────────────────────────────────────
import handleEnquiry from "./furniture/api/handleEnquiry";
import syncProduct from "./furniture/api/syncProduct";
import createOrder from "./furniture/api/createOrder";
import cashfreeWebhook from "./furniture/api/cashfreeWebhook";

// ── Interior APIs ──────────────────────────────────────
import generatePaymentLink from "./interior/api/generatePaymentLink";
import { bankPayoutHandler } from "./interior/integrations/bankPayout";

// ── Export HTTP Functions ──────────────────────────────
export const furnitureHandleEnquiry = onRequest(
  { region: "asia-south1", cors: true },
  handleEnquiry as any
);

export const furnitureSyncProduct = onRequest(
  { region: "asia-south1", cors: true },
  syncProduct as any
);

export const furnitureCreateOrder = onRequest(
  { region: "asia-south1", cors: true },
  createOrder as any
);

export const furnitureCashfreeWebhook = onRequest(
  { region: "asia-south1", cors: true },
  cashfreeWebhook as any
);

export const interiorGeneratePaymentLink = onRequest(
  { region: "asia-south1", cors: true },
  generatePaymentLink as any
);

export const interiorBankPayout = onRequest(
  { region: "asia-south1", cors: true },
  bankPayoutHandler as any
);
