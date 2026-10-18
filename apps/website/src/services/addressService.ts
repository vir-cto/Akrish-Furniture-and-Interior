import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface SavedAddress {
  id: string;
  name: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
  type: "Home" | "Work" | "Other";
  isDefault: boolean;
  userEmail: string;
}

const COLLECTION = "customer_addresses";

/**
 * Load all addresses for a customer email
 * (same collection / field as Manage Addresses page).
 */
export async function getAddressesByEmail(
  email: string
): Promise<SavedAddress[]> {
  if (!email) return [];

  const normalized = email.toLowerCase().trim();
  const q = query(
    collection(db, COLLECTION),
    where("userEmail", "==", normalized)
  );
  const snapshot = await getDocs(q);

  return snapshot.docs.map((d) => {
    const data = d.data();
    return {
      id: d.id,
      name: String(data.name || ""),
      phone: String(data.phone || ""),
      addressLine1: String(data.addressLine1 || ""),
      addressLine2: String(data.addressLine2 || ""),
      city: String(data.city || ""),
      state: String(data.state || ""),
      pincode: String(data.pincode || ""),
      type: (data.type as SavedAddress["type"]) || "Home",
      isDefault: data.isDefault === true,
      userEmail: String(data.userEmail || normalized),
    };
  });
}
