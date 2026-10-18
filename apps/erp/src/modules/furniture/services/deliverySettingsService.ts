import { db } from "@/core/config/firebaseClient";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

export type DeliverySettings = {
  shippingCharge: number;
  freeShippingMin: number;
  defaultLeadTimeDays: number;
};

const REF = doc(db, "furniture_settings", "delivery");

export const DEFAULT_DELIVERY_SETTINGS: DeliverySettings = {
  shippingCharge: 250,
  freeShippingMin: 5000,
  defaultLeadTimeDays: 7,
};

export async function getDeliverySettings(): Promise<DeliverySettings> {
  try {
    const snap = await getDoc(REF);
    if (!snap.exists()) return { ...DEFAULT_DELIVERY_SETTINGS };
    const d = snap.data();
    return {
      shippingCharge: Math.max(0, Number(d.shippingCharge) || 0),
      freeShippingMin: Math.max(0, Number(d.freeShippingMin) || 0),
      defaultLeadTimeDays: Math.min(
        365,
        Math.max(1, Number(d.defaultLeadTimeDays) || 7)
      ),
    };
  } catch {
    return { ...DEFAULT_DELIVERY_SETTINGS };
  }
}

export async function saveDeliverySettings(
  data: DeliverySettings
): Promise<void> {
  await setDoc(
    REF,
    {
      shippingCharge: Math.max(0, Number(data.shippingCharge) || 0),
      freeShippingMin: Math.max(0, Number(data.freeShippingMin) || 0),
      defaultLeadTimeDays: Math.min(
        365,
        Math.max(1, Number(data.defaultLeadTimeDays) || 7)
      ),
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );
}
