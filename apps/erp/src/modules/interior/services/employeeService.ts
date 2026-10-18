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

// export type InteriorEmployee = {
//   id: string;
//   employeeId?: string;
//   name?: string;
//   email?: string;
//   phone?: string;
//   department?: string;
//   designation?: string;
//   joiningDate?: string;
//   status?: string;
//   salary?: number;
//   manager?: string;
//   location?: string;
//   experience?: string;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// const PRIMARY = "interior_employees";
// const FALLBACK = "employees";

// async function fetchCollection(name: string): Promise<InteriorEmployee[]> {
//   try {
//     const snap = await getDocs(
//       query(collection(db, name), orderBy("createdAt", "desc"))
//     );
//     return snap.docs.map(
//       (d) => ({ id: d.id, ...d.data() } as InteriorEmployee)
//     );
//   } catch {
//     const snap = await getDocs(collection(db, name));
//     return snap.docs.map(
//       (d) => ({ id: d.id, ...d.data() } as InteriorEmployee)
//     );
//   }
// }

// export async function getAllEmployees(): Promise<InteriorEmployee[]> {
//   const primary = await fetchCollection(PRIMARY);
//   if (primary.length > 0) return primary;
//   return fetchCollection(FALLBACK);
// }

// export async function createEmployee(
//   data: Omit<InteriorEmployee, "id" | "createdAt" | "updatedAt">
// ): Promise<string> {
//   const ref = await addDoc(collection(db, PRIMARY), {
//     ...data,
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   });
//   return ref.id;
// }

// export async function updateEmployee(
//   id: string,
//   data: Partial<InteriorEmployee>
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

// export async function deleteEmployee(id: string): Promise<void> {
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

export type InteriorEmployee = {
  id: string;
  employeeId?: string;
  name?: string;
  email?: string;
  phone?: string;
  department?: string;
  designation?: string;
  joiningDate?: string;
  status?: string;
  salary?: number;
  manager?: string;
  location?: string;
  experience?: string;
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
};

const PRIMARY = "interior_employees";
const FALLBACK = "employees";

async function fetchCollection(name: string): Promise<InteriorEmployee[]> {
  try {
    const snap = await getDocs(
      query(collection(db, name), orderBy("createdAt", "desc"))
    );
    return snap.docs.map(
      (d) => ({ id: d.id, ...d.data() } as InteriorEmployee)
    );
  } catch {
    const snap = await getDocs(collection(db, name));
    return snap.docs.map(
      (d) => ({ id: d.id, ...d.data() } as InteriorEmployee)
    );
  }
}

export async function getAllEmployees(): Promise<InteriorEmployee[]> {
  const primary = await fetchCollection(PRIMARY);
  if (primary.length > 0) return primary;
  return fetchCollection(FALLBACK);
}

/**
 * Next unique ID: EMP-2026-001, EMP-2026-002, …
 * Uses max numeric suffix among existing EMP-YYYY-* (or any *NNN) codes.
 */
export function generateNextEmployeeId(
  existing: { employeeId?: string }[]
): string {
  const year = new Date().getFullYear();
  const prefix = `EMP-${year}-`;

  let maxSeq = 0;

  for (const row of existing) {
    const code = (row.employeeId || "").trim().toUpperCase();
    if (!code) continue;

    // EMP-2026-012
    const withYear = code.match(/^EMP-(\d{4})-(\d+)$/i);
    if (withYear) {
      const seq = parseInt(withYear[2]!, 10);
      if (withYear[1] === String(year) && Number.isFinite(seq)) {
        maxSeq = Math.max(maxSeq, seq);
      }
      continue;
    }

    // EMP012 / AKR001 fallback patterns
    const trailing = code.match(/(\d+)$/);
    if (trailing) {
      const seq = parseInt(trailing[1]!, 10);
      if (Number.isFinite(seq)) maxSeq = Math.max(maxSeq, seq);
    }
  }

  const next = maxSeq + 1;
  return `${prefix}${String(next).padStart(3, "0")}`;
}

export async function createEmployee(
  data: Omit<InteriorEmployee, "id" | "createdAt" | "updatedAt">
): Promise<string> {
  const ref = await addDoc(collection(db, PRIMARY), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}

export async function updateEmployee(
  id: string,
  data: Partial<InteriorEmployee>
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

export async function deleteEmployee(id: string): Promise<void> {
  try {
    await deleteDoc(doc(db, PRIMARY, id));
  } catch {
    await deleteDoc(doc(db, FALLBACK, id));
  }
}
