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

export type FurnitureFinish = {
  id: string;
  name: string;
  slug?: string;
  description?: string;
  status?: "Active" | "Inactive";
  sortOrder?: number;
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
};

const COLLECTION = "furniture_finishes";

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function getAllFinishes(): Promise<FurnitureFinish[]> {
  const snap = await getDocs(
    query(collection(db, COLLECTION), orderBy("sortOrder", "asc"))
  );
  return snap.docs.map(
    (d) => ({ id: d.id, ...d.data() }) as FurnitureFinish
  );
}

export async function createFinish(
  data: Omit<FurnitureFinish, "id" | "createdAt" | "updatedAt">
): Promise<string> {
  const name = data.name.trim();
  const ref = await addDoc(collection(db, COLLECTION), {
    name,
    slug: data.slug?.trim() || toSlug(name),
    description: data.description?.trim() || "",
    status: data.status || "Active",
    sortOrder: typeof data.sortOrder === "number" ? data.sortOrder : 0,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}

export async function updateFinish(
  id: string,
  data: Partial<FurnitureFinish>
): Promise<void> {
  const payload: Record<string, unknown> = {
    updatedAt: serverTimestamp(),
  };
  if (data.name !== undefined) {
    payload.name = data.name.trim();
    if (!data.slug) payload.slug = toSlug(data.name);
  }
  if (data.slug !== undefined) payload.slug = data.slug.trim();
  if (data.description !== undefined)
    payload.description = data.description.trim();
  if (data.status !== undefined) payload.status = data.status;
  if (data.sortOrder !== undefined) payload.sortOrder = data.sortOrder;

  await updateDoc(doc(db, COLLECTION, id), payload);
}

export async function deleteFinish(id: string): Promise<void> {
  await deleteDoc(doc(db, COLLECTION, id));
}