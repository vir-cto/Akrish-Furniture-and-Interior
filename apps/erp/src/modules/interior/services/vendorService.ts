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

export type InteriorVendor = {
  id: string;
  name?: string;
  type?: string;
  phone?: string;
  email?: string;
  project?: string;
  projectId?: string;
  work?: string;
  agreedAmount?: number;
  paidAmount?: number;
  status?: string;
  active?: boolean;
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
};

const PRIMARY = "interior_vendors";
const FALLBACK = "vendors";

async function fetchCollection(name: string): Promise<InteriorVendor[]> {
  try {
    const snap = await getDocs(
      query(collection(db, name), orderBy("createdAt", "desc"))
    );
    return snap.docs.map(
      (d) => ({ id: d.id, ...d.data() } as InteriorVendor)
    );
  } catch {
    const snap = await getDocs(collection(db, name));
    return snap.docs.map(
      (d) => ({ id: d.id, ...d.data() } as InteriorVendor)
    );
  }
}

export async function getAllVendors(): Promise<InteriorVendor[]> {
  const primary = await fetchCollection(PRIMARY);
  if (primary.length > 0) return primary;
  return fetchCollection(FALLBACK);
}

export async function createVendor(
  data: Omit<InteriorVendor, "id" | "createdAt" | "updatedAt">
): Promise<string> {
  const ref = await addDoc(collection(db, PRIMARY), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}

export async function updateVendor(
  id: string,
  data: Partial<InteriorVendor>
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

export async function deleteVendor(id: string): Promise<void> {
  try {
    await deleteDoc(doc(db, PRIMARY, id));
  } catch {
    await deleteDoc(doc(db, FALLBACK, id));
  }
}