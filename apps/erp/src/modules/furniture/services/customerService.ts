// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   doc,
//   query,
//   orderBy,
//   serverTimestamp,
//   Timestamp,
// } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";

// export type FurnitureCustomer = {
//   id: string;
//   name: string;
//   phone?: string;
//   email?: string;
//   area?: string;
//   address?: string;
//   source?: string;
//   enquiries?: number;
//   orders?: number;
//   totalPurchase?: number;
//   pendingAmount?: number;
//   status?: "Active" | "Inactive";
//   lastInteraction?: string;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// const COLLECTION = "furniture_customers";

// export async function getAllCustomers(): Promise<FurnitureCustomer[]> {
//   const snap = await getDocs(
//     query(collection(db, COLLECTION), orderBy("createdAt", "desc"))
//   );
//   return snap.docs.map((d) => ({ id: d.id, ...d.data() } as FurnitureCustomer));
// }

// export async function createCustomer(
//   data: Omit<FurnitureCustomer, "id" | "createdAt" | "updatedAt">
// ): Promise<string> {
//   const ref = await addDoc(collection(db, COLLECTION), {
//     ...data,
//     enquiries: data.enquiries ?? 0,
//     orders: data.orders ?? 0,
//     totalPurchase: data.totalPurchase ?? 0,
//     pendingAmount: data.pendingAmount ?? 0,
//     status: data.status ?? "Active",
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   });
//   return ref.id;
// }

// export async function updateCustomer(
//   id: string,
//   data: Partial<FurnitureCustomer>
// ): Promise<void> {
//   await updateDoc(doc(db, COLLECTION, id), {
//     ...data,
//     updatedAt: serverTimestamp(),
//   });
// }

// export async function deleteCustomer(id: string): Promise<void> {
//   await deleteDoc(doc(db, COLLECTION, id));
// }

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  where,
  limit,
  serverTimestamp,
  Timestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "@/core/config/firebaseClient";

export type FurnitureCustomer = {
  id: string;
  /** Firebase Auth UID when user signed up on website */
  uid?: string;
  name: string;
  phone?: string;
  email?: string;
  area?: string;
  address?: string;
  source?: string;
  enquiries?: number;
  orders?: number;
  totalPurchase?: number;
  pendingAmount?: number;
  status?: "Active" | "Inactive";
  lastInteraction?: string;
  photoURL?: string;
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
};

const COLLECTION = "furniture_customers";

export async function getAllCustomers(): Promise<FurnitureCustomer[]> {
  try {
    const snap = await getDocs(
      query(collection(db, COLLECTION), orderBy("createdAt", "desc"))
    );
    return snap.docs.map(
      (d) => ({ id: d.id, ...d.data() }) as FurnitureCustomer
    );
  } catch {
    const snap = await getDocs(collection(db, COLLECTION));
    return snap.docs.map(
      (d) => ({ id: d.id, ...d.data() }) as FurnitureCustomer
    );
  }
}

export async function createCustomer(
  data: Omit<FurnitureCustomer, "id" | "createdAt" | "updatedAt">
): Promise<string> {
  const ref = await addDoc(collection(db, COLLECTION), {
    ...data,
    enquiries: data.enquiries ?? 0,
    orders: data.orders ?? 0,
    totalPurchase: data.totalPurchase ?? 0,
    pendingAmount: data.pendingAmount ?? 0,
    status: data.status ?? "Active",
    source: data.source ?? "Other",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}

/**
 * Upsert customer from website Auth (same uid = same doc).
 * Call this after sign-up / first login on the website.
 */
export async function upsertCustomerFromAuth(data: {
  uid: string;
  name?: string;
  email?: string;
  phone?: string;
  photoURL?: string;
  area?: string;
}): Promise<string> {
  const uid = data.uid.trim();
  if (!uid) throw new Error("uid is required");

  // Prefer doc id = uid for stable link to Auth
  const ref = doc(db, COLLECTION, uid);
  const existingSnap = await getDocs(
    query(collection(db, COLLECTION), where("uid", "==", uid), limit(1))
  );

  const payload = {
    uid,
    name: (data.name || data.email || "Customer").trim(),
    email: (data.email || "").trim(),
    phone: (data.phone || "").trim(),
    photoURL: data.photoURL || "",
    area: (data.area || "").trim(),
    source: "Website",
    status: "Active" as const,
    updatedAt: serverTimestamp(),
  };

  if (!existingSnap.empty) {
    const id = existingSnap.docs[0].id;
    await updateDoc(doc(db, COLLECTION, id), payload);
    return id;
  }

  await setDoc(
    ref,
    {
      ...payload,
      enquiries: 0,
      orders: 0,
      totalPurchase: 0,
      pendingAmount: 0,
      lastInteraction: "Signed up",
      createdAt: serverTimestamp(),
    },
    { merge: true }
  );

  return uid;
}

export async function updateCustomer(
  id: string,
  data: Partial<FurnitureCustomer>
): Promise<void> {
  await updateDoc(doc(db, COLLECTION, id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteCustomer(id: string): Promise<void> {
  await deleteDoc(doc(db, COLLECTION, id));
}