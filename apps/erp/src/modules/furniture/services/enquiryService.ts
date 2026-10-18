// import {
//   collection,
//   getDocs,
//   query,
//   where,
//   orderBy,
//   Timestamp,
// } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";

// export type FurnitureEnquiry = {
//   id: string;
//   customerName?: string;
//   productName?: string;
//   productId?: string;
//   status?: "New" | "Contacted" | "In Discussion" | "Quoted" | "Converted" | "Lost";
//   source?: string;
//   createdAt?: Timestamp | null;
// };

// const COLLECTION = "furniture_enquiries";

// export async function getAllEnquiries(): Promise<FurnitureEnquiry[]> {
//   const snap = await getDocs(
//     query(collection(db, COLLECTION), orderBy("createdAt", "desc"))
//   );
//   return snap.docs.map((d) => ({ id: d.id, ...d.data() } as FurnitureEnquiry));
// }

// export async function getTodayEnquiries(): Promise<FurnitureEnquiry[]> {
//   const start = new Date();
//   start.setHours(0, 0, 0, 0);
//   const end = new Date();
//   end.setHours(23, 59, 59, 999);

//   const snap = await getDocs(
//     query(
//       collection(db, COLLECTION),
//       where("createdAt", ">=", Timestamp.fromDate(start)),
//       where("createdAt", "<=", Timestamp.fromDate(end)),
//       orderBy("createdAt", "desc")
//     )
//   );
//   return snap.docs.map((d) => ({ id: d.id, ...d.data() } as FurnitureEnquiry));
// }

// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   doc,
//   query,
//   orderBy,
//   where,
//   serverTimestamp,
//   Timestamp,
// } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";

// export type FurnitureEnquiry = {
//   id: string;
//   customerName: string;
//   phone?: string;
//   email?: string;
//   productCode?: string;
//   productName?: string;
//   message?: string;
//   source?: string;
//   status?: "New" | "Contacted" | "Follow-up" | "Quoted" | "Converted" | "Closed";
//   nextFollowUp?: string;
//   notes?: string;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// const COLLECTION = "furniture_enquiries";

// export async function getAllEnquiries(): Promise<FurnitureEnquiry[]> {
//   const snap = await getDocs(
//     query(collection(db, COLLECTION), orderBy("createdAt", "desc"))
//   );
//   return snap.docs.map((d) => ({ id: d.id, ...d.data() } as FurnitureEnquiry));
// }

// export async function getTodayEnquiries(): Promise<FurnitureEnquiry[]> {
//   const start = new Date();
//   start.setHours(0, 0, 0, 0);
//   const end = new Date();
//   end.setHours(23, 59, 59, 999);

//   const snap = await getDocs(
//     query(
//       collection(db, COLLECTION),
//       where("createdAt", ">=", Timestamp.fromDate(start)),
//       where("createdAt", "<=", Timestamp.fromDate(end)),
//       orderBy("createdAt", "desc")
//     )
//   );
//   return snap.docs.map((d) => ({ id: d.id, ...d.data() } as FurnitureEnquiry));
// }

// export async function createEnquiry(
//   data: Omit<FurnitureEnquiry, "id" | "createdAt" | "updatedAt">
// ): Promise<string> {
//   const ref = await addDoc(collection(db, COLLECTION), {
//     ...data,
//     status: data.status || "New",
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   });
//   return ref.id;
// }

// export async function updateEnquiry(
//   id: string,
//   data: Partial<FurnitureEnquiry>
// ): Promise<void> {
//   await updateDoc(doc(db, COLLECTION, id), {
//     ...data,
//     updatedAt: serverTimestamp(),
//   });
// }

// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   doc,
//   query,
//   orderBy,
//   where,
//   serverTimestamp,
//   Timestamp,
// } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";

// export type FurnitureEnquiry = {
//   id: string;
//   customerName: string;
//   phone?: string;
//   email?: string;
//   productCode?: string;
//   productName?: string;
//   message?: string;
//   source?: string;
//   status?:
//     | "New"
//     | "Contacted"
//     | "Follow-up"
//     | "Quoted"
//     | "Converted"
//     | "Closed";
//   nextFollowUp?: string;
//   notes?: string;
//   /** Cleared from header bell after staff opens the notification */
//   notificationSeen?: boolean;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// const COLLECTION = "furniture_enquiries";

// export async function getAllEnquiries(): Promise<FurnitureEnquiry[]> {
//   const snap = await getDocs(
//     query(collection(db, COLLECTION), orderBy("createdAt", "desc"))
//   );
//   return snap.docs.map(
//     (d) => ({ id: d.id, ...d.data() } as FurnitureEnquiry)
//   );
// }

// export async function getTodayEnquiries(): Promise<FurnitureEnquiry[]> {
//   const start = new Date();
//   start.setHours(0, 0, 0, 0);
//   const end = new Date();
//   end.setHours(23, 59, 59, 999);

//   const snap = await getDocs(
//     query(
//       collection(db, COLLECTION),
//       where("createdAt", ">=", Timestamp.fromDate(start)),
//       where("createdAt", "<=", Timestamp.fromDate(end)),
//       orderBy("createdAt", "desc")
//     )
//   );
//   return snap.docs.map(
//     (d) => ({ id: d.id, ...d.data() } as FurnitureEnquiry)
//   );
// }

// export async function createEnquiry(
//   data: Omit<FurnitureEnquiry, "id" | "createdAt" | "updatedAt">
// ): Promise<string> {
//   const ref = await addDoc(collection(db, COLLECTION), {
//     ...data,
//     status: data.status || "New",
//     notificationSeen: false,
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   });
//   return ref.id;
// }

// export async function updateEnquiry(
//   id: string,
//   data: Partial<FurnitureEnquiry>
// ): Promise<void> {
//   await updateDoc(doc(db, COLLECTION, id), {
//     ...data,
//     updatedAt: serverTimestamp(),
//   });
// }

// /** Mark enquiry as seen in the header bell (persists across sessions) */
// export async function markEnquiryNotificationSeen(
//   id: string
// ): Promise<void> {
//   await updateDoc(doc(db, COLLECTION, id), {
//     notificationSeen: true,
//     updatedAt: serverTimestamp(),
//   });
// }

// export async function markEnquiryNotificationsSeen(
//   ids: string[]
// ): Promise<void> {
//   await Promise.all(
//     ids.filter(Boolean).map((id) => markEnquiryNotificationSeen(id))
//   );
// }


import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  query,
  orderBy,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/core/config/firebaseClient";

export type FurnitureEnquiry = {
  id: string;
  customerName: string;
  phone?: string;
  email?: string;
  productCode?: string;
  productName?: string;
  message?: string;
  source?: string;
  status?:
    | "New"
    | "Contacted"
    | "Follow-up"
    | "Quoted"
    | "Converted"
    | "Closed";
  nextFollowUp?: string;
  notes?: string;
  notificationSeen?: boolean;
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
};

const COLLECTION = "furniture_enquiries";

/** Safe timestamp → ms (handles missing / partial server timestamps). */
export function enquiryTimeMs(
  value: Timestamp | { seconds?: number; toDate?: () => Date } | null | undefined
): number {
  if (!value) return 0;
  try {
    if (typeof (value as Timestamp).toMillis === "function") {
      const ms = (value as Timestamp).toMillis();
      if (ms > 0) return ms;
    }
  } catch {
    /* ignore */
  }
  try {
    if (typeof (value as Timestamp).toDate === "function") {
      const d = (value as Timestamp).toDate();
      if (d && !Number.isNaN(d.getTime())) return d.getTime();
    }
  } catch {
    /* ignore */
  }
  if (typeof value === "object" && value !== null && "seconds" in value) {
    const sec = Number((value as { seconds: number }).seconds);
    if (Number.isFinite(sec) && sec > 0) return sec * 1000;
  }
  return 0;
}

export async function getAllEnquiries(): Promise<FurnitureEnquiry[]> {
  try {
    const snap = await getDocs(
      query(collection(db, COLLECTION), orderBy("createdAt", "desc"))
    );
    return snap.docs.map(
      (d) => ({ id: d.id, ...d.data() } as FurnitureEnquiry)
    );
  } catch {
    const snap = await getDocs(collection(db, COLLECTION));
    return snap.docs
      .map((d) => ({ id: d.id, ...d.data() } as FurnitureEnquiry))
      .sort(
        (a, b) => enquiryTimeMs(b.createdAt) - enquiryTimeMs(a.createdAt)
      );
  }
}

/** Client-side range filter — avoids index / type issues with getTodayEnquiries. */
export async function getEnquiriesInRange(
  start: Date,
  end: Date
): Promise<FurnitureEnquiry[]> {
  const startMs = start.getTime();
  const endMs = end.getTime();
  const all = await getAllEnquiries();
  return all.filter((e) => {
    const ms = enquiryTimeMs(e.createdAt);
    if (!ms) return false;
    return ms >= startMs && ms <= endMs;
  });
}

export async function getTodayEnquiries(): Promise<FurnitureEnquiry[]> {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  return getEnquiriesInRange(start, end);
}

export async function createEnquiry(
  data: Omit<FurnitureEnquiry, "id" | "createdAt" | "updatedAt">
): Promise<string> {
  const ref = await addDoc(collection(db, COLLECTION), {
    ...data,
    status: data.status || "New",
    notificationSeen: false,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}

export async function updateEnquiry(
  id: string,
  data: Partial<FurnitureEnquiry>
): Promise<void> {
  await updateDoc(doc(db, COLLECTION, id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

export async function markEnquiryNotificationSeen(id: string): Promise<void> {
  await updateDoc(doc(db, COLLECTION, id), {
    notificationSeen: true,
    updatedAt: serverTimestamp(),
  });
}

export async function markEnquiryNotificationsSeen(
  ids: string[]
): Promise<void> {
  await Promise.all(
    ids.filter(Boolean).map((id) => markEnquiryNotificationSeen(id))
  );
}
