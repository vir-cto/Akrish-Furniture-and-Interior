import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export type DeliverySettings = {
  shippingCharge: number;
  freeShippingMin: number;
  defaultLeadTimeDays: number;
};

const DOC = doc(db, "furniture_settings", "delivery");

export const DEFAULT_DELIVERY_SETTINGS: DeliverySettings = {
  shippingCharge: 250,
  freeShippingMin: 5000,
  defaultLeadTimeDays: 7,
};

export async function getDeliverySettings(): Promise<DeliverySettings> {
  try {
    const snap = await getDoc(DOC);
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
  } catch (err) {
    console.error("getDeliverySettings failed:", err);
    return { ...DEFAULT_DELIVERY_SETTINGS };
  }
}

export function calcShippingFromSettings(
  subtotal: number,
  settings: DeliverySettings
): number {
  if (settings.freeShippingMin > 0 && subtotal >= settings.freeShippingMin) {
    return 0;
  }
  return Math.max(0, Number(settings.shippingCharge) || 0);
}
