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

export type InteriorContract = {
  id: string;
  contractNo?: string;
  client?: string;
  clientName?: string;
  project?: string;
  projectName?: string;
  projectType?: string;
  startDate?: string;
  endDate?: string;
  value?: number;
  paid?: number;
  pending?: number;
  status?: string;
  paymentTerms?: string;
  designer?: string;
  createdDate?: string;
  notes?: string;
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
};

const PRIMARY = "interior_contracts";
const FALLBACK = "contracts";

async function fetchCollection(name: string): Promise<InteriorContract[]> {
  try {
    const snap = await getDocs(
      query(collection(db, name), orderBy("createdAt", "desc"))
    );
    return snap.docs.map(
      (d) => ({ id: d.id, ...d.data() } as InteriorContract)
    );
  } catch {
    const snap = await getDocs(collection(db, name));
    return snap.docs.map(
      (d) => ({ id: d.id, ...d.data() } as InteriorContract)
    );
  }
}

export async function getAllContracts(): Promise<InteriorContract[]> {
  const primary = await fetchCollection(PRIMARY);
  if (primary.length > 0) return primary;
  return fetchCollection(FALLBACK);
}

export async function createContract(
  data: Omit<InteriorContract, "id" | "createdAt" | "updatedAt">
): Promise<string> {
  const ref = await addDoc(collection(db, PRIMARY), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}

export async function updateContract(
  id: string,
  data: Partial<InteriorContract>
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

export async function deleteContract(id: string): Promise<void> {
  try {
    await deleteDoc(doc(db, PRIMARY, id));
  } catch {
    await deleteDoc(doc(db, FALLBACK, id));
  }
}