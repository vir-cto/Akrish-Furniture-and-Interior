import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

const COLLECTION = "furniture_customers";

/**
 * Create or update a customer in Firestore when they sign up / sign in on the website.
 * Doc id = Firebase Auth uid (same project as ERP → appears on /furniture/customers).
 */
export async function upsertCustomerFromAuth(data: {
  uid: string;
  name?: string;
  email?: string;
  phone?: string;
  gender?: string;
  photoURL?: string;
}): Promise<void> {
  const uid = data.uid.trim();
  if (!uid) throw new Error("uid is required");

  const ref = doc(db, COLLECTION, uid);
  const snap = await getDoc(ref);

  const base = {
    uid,
    name: (data.name || data.email || "Customer").trim(),
    email: (data.email || "").trim().toLowerCase(),
    phone: (data.phone || "").trim(),
    gender: data.gender || "",
    photoURL: data.photoURL || "",
    source: "Website",
    status: "Active" as const,
    updatedAt: serverTimestamp(),
  };

  if (snap.exists()) {
    await updateDoc(ref, {
      ...base,
      lastInteraction: "Signed in",
    });
    return;
  }

  await setDoc(ref, {
    ...base,
    enquiries: 0,
    orders: 0,
    totalPurchase: 0,
    pendingAmount: 0,
    area: "",
    lastInteraction: "Signed up",
    createdAt: serverTimestamp(),
  });
}