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

// export type InteriorQuotation = {
//   id: string;
//   quotationNo?: string;
//   client?: string;
//   clientName?: string;
//   phone?: string;
//   email?: string;
//   projectName?: string;
//   projectType?: string;
//   location?: string;
//   designer?: string;
//   quotationDate?: string;
//   validUntil?: string;
//   amount?: number;
//   tax?: number;
//   total?: number;
//   status?: string;
//   paymentTerms?: string;
//   notes?: string;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// const PRIMARY = "interior_quotations";
// const FALLBACK = "quotations";

// async function fetchCollection(name: string): Promise<InteriorQuotation[]> {
//   try {
//     const snap = await getDocs(
//       query(collection(db, name), orderBy("createdAt", "desc"))
//     );
//     return snap.docs.map(
//       (d) => ({ id: d.id, ...d.data() } as InteriorQuotation)
//     );
//   } catch {
//     const snap = await getDocs(collection(db, name));
//     return snap.docs.map(
//       (d) => ({ id: d.id, ...d.data() } as InteriorQuotation)
//     );
//   }
// }

// export async function getAllQuotations(): Promise<InteriorQuotation[]> {
//   const primary = await fetchCollection(PRIMARY);
//   if (primary.length > 0) return primary;
//   return fetchCollection(FALLBACK);
// }

// export async function createQuotation(
//   data: Omit<InteriorQuotation, "id" | "createdAt" | "updatedAt">
// ): Promise<string> {
//   const ref = await addDoc(collection(db, PRIMARY), {
//     ...data,
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   });
//   return ref.id;
// }

// export async function updateQuotation(
//   id: string,
//   data: Partial<InteriorQuotation>
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

// export async function deleteQuotation(id: string): Promise<void> {
//   try {
//     await deleteDoc(doc(db, PRIMARY, id));
//   } catch {
//     await deleteDoc(doc(db, FALLBACK, id));
//   }
// }

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

// export type InteriorQuotation = {
//   id: string;
//   quotationNo?: string;
//   client?: string;
//   clientName?: string;
//   phone?: string;
//   email?: string;
//   projectName?: string;
//   projectType?: string;
//   location?: string;
//   designer?: string;
//   quotationDate?: string;
//   validUntil?: string;
//   amount?: number;
//   tax?: number;
//   total?: number;
//   status?: string;
//   paymentTerms?: string;
//   notes?: string;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// const PRIMARY = "interior_quotations";
// const FALLBACK = "quotations";

// async function fetchCollection(name: string): Promise<InteriorQuotation[]> {
//   try {
//     const snap = await getDocs(
//       query(collection(db, name), orderBy("createdAt", "desc"))
//     );
//     return snap.docs.map(
//       (d) => ({ id: d.id, ...d.data() } as InteriorQuotation)
//     );
//   } catch {
//     const snap = await getDocs(collection(db, name));
//     return snap.docs.map(
//       (d) => ({ id: d.id, ...d.data() } as InteriorQuotation)
//     );
//   }
// }

// export async function getAllQuotations(): Promise<InteriorQuotation[]> {
//   const primary = await fetchCollection(PRIMARY);
//   if (primary.length > 0) return primary;
//   return fetchCollection(FALLBACK);
// }

// export async function createQuotation(
//   data: Omit<InteriorQuotation, "id" | "createdAt" | "updatedAt">
// ): Promise<string> {
//   const ref = await addDoc(collection(db, PRIMARY), {
//     ...data,
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   });
//   return ref.id;
// }

// export async function updateQuotation(
//   id: string,
//   data: Partial<InteriorQuotation>
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

// export async function deleteQuotation(id: string): Promise<void> {
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

export type QuotationItem = {
  id?: number | string;
  category?: string;
  description?: string;
  quantity?: number;
  unit?: string;
  rate?: number;
  discount?: number;
};

export type InteriorQuotation = {
  id: string;
  quotationNo?: string;
  clientId?: string;
  client?: string;
  clientName?: string;
  phone?: string;
  email?: string;
  address?: string;
  projectName?: string;
  projectType?: string;
  location?: string;
  designer?: string;
  quotationDate?: string;
  validUntil?: string;
  amount?: number;
  subtotal?: number;
  itemDiscount?: number;
  additionalDiscount?: number;
  tax?: number;
  taxRate?: number;
  total?: number;
  status?: string;
  paymentTerms?: string;
  notes?: string;
  terms?: string;
  items?: QuotationItem[];
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
};

const PRIMARY = "interior_quotations";
const FALLBACK = "quotations";

async function fetchCollection(name: string): Promise<InteriorQuotation[]> {
  try {
    const snap = await getDocs(
      query(collection(db, name), orderBy("createdAt", "desc"))
    );
    return snap.docs.map(
      (d) => ({ id: d.id, ...d.data() } as InteriorQuotation)
    );
  } catch {
    const snap = await getDocs(collection(db, name));
    return snap.docs.map(
      (d) => ({ id: d.id, ...d.data() } as InteriorQuotation)
    );
  }
}

export async function getAllQuotations(): Promise<InteriorQuotation[]> {
  const primary = await fetchCollection(PRIMARY);
  if (primary.length > 0) return primary;
  return fetchCollection(FALLBACK);
}

export async function createQuotation(
  data: Omit<InteriorQuotation, "id" | "createdAt" | "updatedAt">
): Promise<string> {
  const ref = await addDoc(collection(db, PRIMARY), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}

export async function updateQuotation(
  id: string,
  data: Partial<InteriorQuotation>
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

export async function deleteQuotation(id: string): Promise<void> {
  try {
    await deleteDoc(doc(db, PRIMARY, id));
  } catch {
    await deleteDoc(doc(db, FALLBACK, id));
  }
}
