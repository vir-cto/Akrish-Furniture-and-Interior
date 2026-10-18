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

export type InteriorLead = {
  id: string;
  name?: string;
  customerName?: string;
  phone?: string;
  email?: string;
  project?: string;
  projectName?: string;
  projectType?: string;
  location?: string;
  budget?: number;
  source?: string;
  status?: string;
  assignedTo?: string;
  nextFollowUp?: string;
  notes?: string;
  createdDate?: string;
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
};

const PRIMARY = "interior_enquiries";
const FALLBACK = "enquiries";

async function fetchCollection(name: string): Promise<InteriorLead[]> {
  try {
    const snap = await getDocs(
      query(collection(db, name), orderBy("createdAt", "desc"))
    );
    return snap.docs.map((d) => ({ id: d.id, ...d.data() } as InteriorLead));
  } catch {
    const snap = await getDocs(collection(db, name));
    return snap.docs.map((d) => ({ id: d.id, ...d.data() } as InteriorLead));
  }
}

export async function getAllLeads(): Promise<InteriorLead[]> {
  const primary = await fetchCollection(PRIMARY);
  if (primary.length > 0) return primary;
  return fetchCollection(FALLBACK);
}

export async function createLead(
  data: Omit<InteriorLead, "id" | "createdAt" | "updatedAt">
): Promise<string> {
  const ref = await addDoc(collection(db, PRIMARY), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}

export async function updateLead(
  id: string,
  data: Partial<InteriorLead>
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

export async function deleteLead(id: string): Promise<void> {
  try {
    await deleteDoc(doc(db, PRIMARY, id));
  } catch {
    await deleteDoc(doc(db, FALLBACK, id));
  }
}