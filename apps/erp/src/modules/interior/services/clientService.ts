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

export type InteriorClient = {
  id: string;
  clientId?: string;
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  location?: string;
  project?: string;
  projectName?: string;
  projectType?: string;
  projectValue?: number;
  value?: number;
  paid?: number;
  pending?: number;
  status?: string;
  source?: string;
  lastContact?: string;
  joinedDate?: string;
  notes?: string;
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
};

const CLIENTS = "interior_clients";
const PROJECTS = "interior_projects";

async function fetchCollection(name: string): Promise<InteriorClient[]> {
  try {
    const snap = await getDocs(
      query(collection(db, name), orderBy("createdAt", "desc"))
    );
    return snap.docs.map((d) => ({ id: d.id, ...d.data() } as InteriorClient));
  } catch {
    const snap = await getDocs(collection(db, name));
    return snap.docs.map((d) => ({ id: d.id, ...d.data() } as InteriorClient));
  }
}

export async function getAllClients(): Promise<InteriorClient[]> {
  const clients = await fetchCollection(CLIENTS);
  if (clients.length > 0) return clients;

  // Fallback: derive client rows from interior projects
  const projects = await fetchCollection(PROJECTS);
  return projects.map((p) => {
    const value = Number(p.projectValue ?? p.value ?? 0) || 0;
    const paid = Number(p.paid ?? 0) || 0;
    return {
      id: p.id,
      clientId: p.clientId || p.id,
      name: p.name || "Unknown",
      company: p.company || "",
      phone: p.phone || "",
      email: p.email || "",
      location: p.location || "",
      project: p.project || p.projectName || "",
      projectType: p.projectType || "Residential",
      projectValue: value,
      paid,
      pending: Math.max(value - paid, 0),
      status: p.status || "Active",
      source: p.source || "Website",
      lastContact: p.lastContact || "",
      joinedDate: p.joinedDate || "",
      notes: p.notes || "",
      createdAt: p.createdAt || null,
    } as InteriorClient;
  });
}

export async function createClient(
  data: Omit<InteriorClient, "id" | "createdAt" | "updatedAt">
): Promise<string> {
  const ref = await addDoc(collection(db, CLIENTS), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}

export async function updateClient(
  id: string,
  data: Partial<InteriorClient>
): Promise<void> {
  await updateDoc(doc(db, CLIENTS, id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteClient(id: string): Promise<void> {
  await deleteDoc(doc(db, CLIENTS, id));
}