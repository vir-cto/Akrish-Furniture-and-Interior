// import {
//   collection,
//   getDocs,
//   query,
//   orderBy,
//   Timestamp,
// } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";

// export type InteriorProject = {
//   id: string;
//   projectId?: string;
//   projectName?: string;
//   name?: string;
//   client?: string;
//   clientName?: string;
//   customerName?: string;
//   projectType?: string;
//   type?: string;
//   location?: string;
//   value?: number;
//   projectValue?: number;
//   totalValue?: number;
//   paid?: number;
//   amountPaid?: number;
//   status?: string;
//   designer?: string;
//   startDate?: string;
//   endDate?: string;
//   deadline?: string;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// async function fetchFrom(collectionName: string): Promise<InteriorProject[]> {
//   try {
//     const snap = await getDocs(
//       query(collection(db, collectionName), orderBy("createdAt", "desc"))
//     );
//     return snap.docs.map(
//       (d) => ({ id: d.id, ...d.data() } as InteriorProject)
//     );
//   } catch {
//     const snap = await getDocs(collection(db, collectionName));
//     return snap.docs.map(
//       (d) => ({ id: d.id, ...d.data() } as InteriorProject)
//     );
//   }
// }

// export async function getAllInteriorProjects(): Promise<InteriorProject[]> {
//   const primary = await fetchFrom("interior_projects");
//   if (primary.length > 0) return primary;

//   // Fallback used by some older rules/docs
//   return fetchFrom("projects");
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

export type InteriorProject = {
  id: string;
  projectId?: string;
  projectNo?: string;
  projectName?: string;
  name?: string;
  client?: string;
  clientName?: string;
  customerName?: string;
  projectType?: string;
  type?: string;
  location?: string;
  designer?: string;
  manager?: string;
  value?: number;
  projectValue?: number;
  totalValue?: number;
  paid?: number;
  amountPaid?: number;
  progress?: number;
  status?: string;
  rooms?: number;
  startDate?: string;
  endDate?: string;
  expectedDate?: string;
  deadline?: string;
  createdDate?: string;
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
};

const PRIMARY = "interior_projects";
const FALLBACK = "projects";

async function fetchCollection(name: string): Promise<InteriorProject[]> {
  try {
    const snap = await getDocs(
      query(collection(db, name), orderBy("createdAt", "desc"))
    );
    return snap.docs.map(
      (d) => ({ id: d.id, ...d.data() } as InteriorProject)
    );
  } catch {
    const snap = await getDocs(collection(db, name));
    return snap.docs.map(
      (d) => ({ id: d.id, ...d.data() } as InteriorProject)
    );
  }
}

export async function getAllInteriorProjects(): Promise<InteriorProject[]> {
  const primary = await fetchCollection(PRIMARY);
  if (primary.length > 0) return primary;
  return fetchCollection(FALLBACK);
}

export async function createProject(
  data: Omit<InteriorProject, "id" | "createdAt" | "updatedAt">
): Promise<string> {
  const ref = await addDoc(collection(db, PRIMARY), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}

export async function updateProject(
  id: string,
  data: Partial<InteriorProject>
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

export async function deleteProject(id: string): Promise<void> {
  try {
    await deleteDoc(doc(db, PRIMARY, id));
  } catch {
    await deleteDoc(doc(db, FALLBACK, id));
  }
}