// import { beforeUserCreated, onUserCreated } from "firebase-functions/v2/identity";
// import { auth } from "firebase-functions/v1";
// import { FieldValue } from "firebase-admin/firestore";
// import { adminDb } from "../../core/firebaseAdmin";

// /**
//  * When a user signs up (website), create/update furniture_customers
//  * so they appear in ERP → Furniture → Customers.
//  *
//  * Uses Auth onCreate (v1) for broad compatibility.
//  */
// export const onFurnitureAuthUserCreate = auth.user().onCreate(async (user) => {
//   const uid = user.uid;
//   const name =
//     user.displayName?.trim() ||
//     user.email?.split("@")[0] ||
//     "Website Customer";
//   const email = user.email || "";
//   const phone = user.phoneNumber || "";
//   const photoURL = user.photoURL || "";

//   const ref = adminDb.collection("furniture_customers").doc(uid);

//   await ref.set(
//     {
//       uid,
//       name,
//       email,
//       phone,
//       photoURL,
//       area: "",
//       address: "",
//       source: "Website",
//       status: "Active",
//       enquiries: 0,
//       orders: 0,
//       totalPurchase: 0,
//       pendingAmount: 0,
//       lastInteraction: "Signed up",
//       createdAt: FieldValue.serverTimestamp(),
//       updatedAt: FieldValue.serverTimestamp(),
//     },
//     { merge: true }
//   );

//   console.log(`furniture_customers created for uid=${uid}`);
// });

import * as functions from "firebase-functions/v1";
import { FieldValue } from "firebase-admin/firestore";
import { adminDb } from "../../core/firebaseAdmin";

/**
 * When a user signs up (from the public website),
 * create/update a document in furniture_customers
 * so they appear in ERP → Furniture → Customers.
 */
export const onFurnitureAuthUserCreate = functions.auth
  .user()
  .onCreate(async (user) => {
    const uid = user.uid;

    const name =
      user.displayName?.trim() ||
      user.email?.split("@")[0] ||
      "Website Customer";

    const email = user.email || "";
    const phone = user.phoneNumber || "";
    const photoURL = user.photoURL || "";

    const ref = adminDb.collection("furniture_customers").doc(uid);

    await ref.set(
      {
        uid,
        name,
        email,
        phone,
        photoURL,
        area: "",
        address: "",
        source: "Website",
        status: "Active",
        enquiries: 0,
        orders: 0,
        totalPurchase: 0,
        pendingAmount: 0,
        lastInteraction: "Signed up",
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );

    console.log(`furniture_customers created for uid=${uid}`);
  });