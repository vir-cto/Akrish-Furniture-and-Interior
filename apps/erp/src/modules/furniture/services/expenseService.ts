// import {
//   collection,
//   getDocs,
//   query,
//   where,
//   orderBy,
//   Timestamp,
// } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";

// export type FurnitureExpense = {
//   id: string;
//   category?: string;
//   description?: string;
//   amount?: number;
//   date?: Timestamp | null;
//   createdAt?: Timestamp | null;
// };

// const COLLECTION = "furniture_expenses";

// export async function getAllExpenses(): Promise<FurnitureExpense[]> {
//   const snap = await getDocs(
//     query(collection(db, COLLECTION), orderBy("date", "desc"))
//   );
//   return snap.docs.map((d) => ({ id: d.id, ...d.data() } as FurnitureExpense));
// }

// export async function getExpensesInRange(
//   start: Date,
//   end: Date
// ): Promise<FurnitureExpense[]> {
//   const snap = await getDocs(
//     query(
//       collection(db, COLLECTION),
//       where("date", ">=", Timestamp.fromDate(start)),
//       where("date", "<=", Timestamp.fromDate(end)),
//       orderBy("date", "desc")
//     )
//   );
//   return snap.docs.map((d) => ({ id: d.id, ...d.data() } as FurnitureExpense));
// }

// export async function getTodayExpenses(): Promise<FurnitureExpense[]> {
//   const start = new Date();
//   start.setHours(0, 0, 0, 0);
//   const end = new Date();
//   end.setHours(23, 59, 59, 999);
//   return getExpensesInRange(start, end);
// }

// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   doc,
//   query,
//   where,
//   orderBy,
//   serverTimestamp,
//   Timestamp,
// } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";

// export type FurnitureExpense = {
//   id: string;
//   expenseNo?: string;
//   category?: string;
//   description?: string;
//   vendor?: string;
//   amount?: number;
//   paidAmount?: number;
//   paymentMode?: string;
//   status?: string;
//   notes?: string;
//   date?: Timestamp | string | null;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// const COLLECTION = "furniture_expenses";

// export async function getAllExpenses(): Promise<FurnitureExpense[]> {
//   try {
//     const snap = await getDocs(
//       query(collection(db, COLLECTION), orderBy("date", "desc"))
//     );
//     return snap.docs.map((d) => ({ id: d.id, ...d.data() } as FurnitureExpense));
//   } catch {
//     const snap = await getDocs(collection(db, COLLECTION));
//     return snap.docs.map((d) => ({ id: d.id, ...d.data() } as FurnitureExpense));
//   }
// }

// export async function getExpensesInRange(
//   start: Date,
//   end: Date
// ): Promise<FurnitureExpense[]> {
//   const snap = await getDocs(
//     query(
//       collection(db, COLLECTION),
//       where("date", ">=", Timestamp.fromDate(start)),
//       where("date", "<=", Timestamp.fromDate(end)),
//       orderBy("date", "desc")
//     )
//   );
//   return snap.docs.map((d) => ({ id: d.id, ...d.data() } as FurnitureExpense));
// }

// export async function getTodayExpenses(): Promise<FurnitureExpense[]> {
//   const start = new Date();
//   start.setHours(0, 0, 0, 0);
//   const end = new Date();
//   end.setHours(23, 59, 59, 999);
//   return getExpensesInRange(start, end);
// }

// export async function createExpense(
//   data: Omit<FurnitureExpense, "id" | "createdAt" | "updatedAt">
// ): Promise<string> {
//   const ref = await addDoc(collection(db, COLLECTION), {
//     ...data,
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   });
//   return ref.id;
// }

// export async function updateExpense(
//   id: string,
//   data: Partial<FurnitureExpense>
// ): Promise<void> {
//   await updateDoc(doc(db, COLLECTION, id), {
//     ...data,
//     updatedAt: serverTimestamp(),
//   });
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

export type FurnitureExpense = {
  id: string;
  expenseNo?: string;
  category?: string;
  description?: string;
  vendor?: string;
  amount?: number;
  paidAmount?: number;
  paymentMode?: string;
  status?: string;
  notes?: string;
  /** Stored as Timestamp going forward; older docs may be string YYYY-MM-DD */
  date?: Timestamp | string | null;
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
};

const COLLECTION = "furniture_expenses";

/** Normalize any stored date → milliseconds (local calendar day safe). */
export function expenseDateMs(
  value: FurnitureExpense["date"] | undefined | null
): number {
  if (!value) return 0;

  if (typeof value === "string") {
    const raw = value.trim();
    const d = new Date(raw.includes("T") ? raw : `${raw.slice(0, 10)}T12:00:00`);
    return Number.isNaN(d.getTime()) ? 0 : d.getTime();
  }

  try {
    if (typeof (value as Timestamp).toDate === "function") {
      return (value as Timestamp).toDate().getTime();
    }
  } catch {
    /* ignore */
  }

  if (typeof value === "object" && value !== null && "seconds" in value) {
    const sec = Number((value as { seconds: number }).seconds);
    if (Number.isFinite(sec)) return sec * 1000;
  }

  return 0;
}

/** Convert form date string / Date / Timestamp → Firestore Timestamp */
export function toExpenseTimestamp(
  value: string | Date | Timestamp | null | undefined
): Timestamp {
  if (value instanceof Timestamp) return value;

  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return Timestamp.fromDate(value);
  }

  if (typeof value === "string" && value.trim()) {
    const raw = value.trim();
    const d = new Date(raw.includes("T") ? raw : `${raw.slice(0, 10)}T12:00:00`);
    if (!Number.isNaN(d.getTime())) return Timestamp.fromDate(d);
  }

  return Timestamp.now();
}

export async function getAllExpenses(): Promise<FurnitureExpense[]> {
  try {
    const snap = await getDocs(
      query(collection(db, COLLECTION), orderBy("date", "desc"))
    );
    return snap.docs.map((d) => ({ id: d.id, ...d.data() } as FurnitureExpense));
  } catch {
    const snap = await getDocs(collection(db, COLLECTION));
    const list = snap.docs.map(
      (d) => ({ id: d.id, ...d.data() } as FurnitureExpense)
    );
    return list.sort((a, b) => expenseDateMs(b.date) - expenseDateMs(a.date));
  }
}

/**
 * Client-side range filter so both string dates and Timestamps work.
 * Avoids Firestore type mismatch (string vs Timestamp) and missing indexes.
 */
export async function getExpensesInRange(
  start: Date,
  end: Date
): Promise<FurnitureExpense[]> {
  const startMs = start.getTime();
  const endMs = end.getTime();
  const all = await getAllExpenses();

  return all.filter((e) => {
    const ms = expenseDateMs(e.date);
    if (!ms) {
      // Fallback: createdAt if date missing
      const created = expenseDateMs(
        (e.createdAt as FurnitureExpense["date"]) || null
      );
      if (!created) return false;
      return created >= startMs && created <= endMs;
    }
    return ms >= startMs && ms <= endMs;
  });
}

export async function getTodayExpenses(): Promise<FurnitureExpense[]> {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  return getExpensesInRange(start, end);
}

export async function createExpense(
  data: Omit<FurnitureExpense, "id" | "createdAt" | "updatedAt">
): Promise<string> {
  const payload = {
    ...data,
    amount: Number(data.amount) || 0,
    paidAmount: Number(data.paidAmount) || 0,
    date: toExpenseTimestamp(data.date as string | Date | Timestamp | null),
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  const ref = await addDoc(collection(db, COLLECTION), payload);
  return ref.id;
}

export async function updateExpense(
  id: string,
  data: Partial<FurnitureExpense>
): Promise<void> {
  const patch: Record<string, unknown> = {
    ...data,
    updatedAt: serverTimestamp(),
  };

  if (data.date !== undefined) {
    patch.date = toExpenseTimestamp(
      data.date as string | Date | Timestamp | null
    );
  }
  if (data.amount !== undefined) patch.amount = Number(data.amount) || 0;
  if (data.paidAmount !== undefined) {
    patch.paidAmount = Number(data.paidAmount) || 0;
  }

  await updateDoc(doc(db, COLLECTION, id), patch);
}
