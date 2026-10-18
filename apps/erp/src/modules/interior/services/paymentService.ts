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

// // export type FurniturePayment = {
// //   id: string;
// //   paymentNo?: string;
// //   orderNo?: string;
// //   orderId?: string;
// //   customer?: string;
// //   customerName?: string;
// //   phone?: string;
// //   amount?: number;
// //   paidAmount?: number;
// //   dueAmount?: number;
// //   paymentMethod?: string;
// //   /** Online = website / Cashfree; Manual = ERP */
// //   source?: string;
// //   status?: string;
// //   paymentDate?: string;
// //   dueDate?: string;
// //   reference?: string;
// //   notes?: string;
// //   cfOrderId?: string;
// //   cfPaymentId?: string;
// //   createdAt?: Timestamp | null;
// //   updatedAt?: Timestamp | null;
// // };

// export type InteriorPayment = {
//   id: string;
//   paymentNo?: string;
//   projectId?: string;
//   project?: string;
//   projectName?: string;
//   client?: string;
//   clientName?: string;
//   projectType?: string;
//   invoiceNo?: string;
//   invoiceAmount?: number;
//   amountReceived?: number;
//   pendingAmount?: number;
//   paymentDate?: string;
//   dueDate?: string;
//   method?: string;
//   status?: string;
//   notes?: string;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
//   source?: string;
//     cfOrderId?: string;
//     cfPaymentId?: string;
// };

// const PRIMARY = "interior_payments";
// const FALLBACK = "payments";

// async function fetchCollection(name: string): Promise<InteriorPayment[]> {
//   try {
//     const snap = await getDocs(
//       query(collection(db, name), orderBy("createdAt", "desc"))
//     );
//     return snap.docs.map(
//       (d) => ({ id: d.id, ...d.data() } as InteriorPayment)
//     );
//   } catch {
//     const snap = await getDocs(collection(db, name));
//     return snap.docs.map(
//       (d) => ({ id: d.id, ...d.data() } as InteriorPayment)
//     );
//   }
// }

// export async function getAllPayments(): Promise<InteriorPayment[]> {
//   const primary = await fetchCollection(PRIMARY);
//   if (primary.length > 0) return primary;
//   return fetchCollection(FALLBACK);
// }

// export async function createPayment(
//   data: Omit<InteriorPayment, "id" | "createdAt" | "updatedAt">
// ): Promise<string> {
//   const ref = await addDoc(collection(db, PRIMARY), {
//     ...data,
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   });
//   return ref.id;
// }

// export async function updatePayment(
//   id: string,
//   data: Partial<InteriorPayment>
// ): Promise<void> {
//   try {
//     await updateDoc(doc(db, PRIMARY, id), {
//       ...data,
//       updatedAt: serverTimestamp(),
//     });
//   } catch {
//     await updateDoc(doc(db, FALLBACK, id), {
//       ...data,
//       updatedAt: serverTimestamp(),
//     });
//   }
// }

// export async function deletePayment(id: string): Promise<void> {
//   try {
//     await deleteDoc(doc(db, PRIMARY, id));
//   } catch {
//     await deleteDoc(doc(db, FALLBACK, id));
//   }
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
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/core/config/firebaseClient";

export type InteriorPayment = {
  id: string;
  paymentNo?: string;
  projectId?: string;
  project?: string;
  projectName?: string;
  client?: string;
  clientName?: string;
  clientId?: string;
  projectType?: string;
  invoiceNo?: string;
  invoiceAmount?: number;
  amountReceived?: number;
  pendingAmount?: number;
  paymentDate?: string;
  dueDate?: string;
  method?: string;
  status?: string;
  notes?: string;
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
  source?: string;
  cfOrderId?: string;
  cfPaymentId?: string;
};

const PRIMARY = "interior_payments";
const FALLBACK = "payments";

async function fetchCollection(name: string): Promise<InteriorPayment[]> {
  try {
    const snap = await getDocs(
      query(collection(db, name), orderBy("createdAt", "desc"))
    );
    return snap.docs.map(
      (d) => ({ id: d.id, ...d.data() } as InteriorPayment)
    );
  } catch {
    const snap = await getDocs(collection(db, name));
    return snap.docs.map(
      (d) => ({ id: d.id, ...d.data() } as InteriorPayment)
    );
  }
}

export async function getAllPayments(): Promise<InteriorPayment[]> {
  const primary = await fetchCollection(PRIMARY);
  if (primary.length > 0) return primary;
  return fetchCollection(FALLBACK);
}

/** Unique invoice numbers: INV-YYYY-001, INV-YYYY-002, … */
export function generateNextInvoiceNo(
  existing: { invoiceNo?: string }[]
): string {
  const year = new Date().getFullYear();
  const prefix = `INV-${year}-`;
  let maxSeq = 0;

  for (const p of existing) {
    const inv = (p.invoiceNo || "").trim().toUpperCase();
    if (inv.startsWith(prefix)) {
      const n = parseInt(inv.slice(prefix.length), 10);
      if (Number.isFinite(n) && n > maxSeq) maxSeq = n;
      continue;
    }
    const m = inv.match(/(\d+)\s*$/);
    if (m) {
      const n = parseInt(m[1]!, 10);
      if (Number.isFinite(n) && n > maxSeq) maxSeq = n;
    }
  }

  return `${prefix}${String(maxSeq + 1).padStart(3, "0")}`;
}

export async function createPayment(
  data: Omit<InteriorPayment, "id" | "createdAt" | "updatedAt">
): Promise<string> {
  const ref = await addDoc(collection(db, PRIMARY), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}

export async function updatePayment(
  id: string,
  data: Partial<InteriorPayment>
): Promise<void> {
  try {
    await updateDoc(doc(db, PRIMARY, id), {
      ...data,
      updatedAt: serverTimestamp(),
    });
  } catch {
    await updateDoc(doc(db, FALLBACK, id), {
      ...data,
      updatedAt: serverTimestamp(),
    });
  }
}

export async function deletePayment(id: string): Promise<void> {
  try {
    await deleteDoc(doc(db, PRIMARY, id));
  } catch {
    await deleteDoc(doc(db, FALLBACK, id));
  }
}
