// import {
//   collection,
//   getDocs,
//   query,
//   where,
//   orderBy,
//   Timestamp,
// } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";

// export type FurnitureOrder = {
//   id: string;
//   orderNo?: string;
//   customerName?: string;
//   customerId?: string;
//   amount?: number;
//   status?: "Pending" | "Paid" | "Processing" | "Shipped" | "Delivered" | "Cancelled";
//   paymentStatus?: "Pending" | "Paid" | "Partial" | "Failed";
//   source?: string;
//   createdAt?: Timestamp | null;
//   items?: { productId: string; name: string; qty: number; price: number }[];
// };

// const COLLECTION = "furniture_orders";

// export async function getAllOrders(): Promise<FurnitureOrder[]> {
//   const snap = await getDocs(
//     query(collection(db, COLLECTION), orderBy("createdAt", "desc"))
//   );
//   return snap.docs.map((d) => ({ id: d.id, ...d.data() } as FurnitureOrder));
// }

// export async function getOrdersInRange(
//   start: Date,
//   end: Date
// ): Promise<FurnitureOrder[]> {
//   const snap = await getDocs(
//     query(
//       collection(db, COLLECTION),
//       where("createdAt", ">=", Timestamp.fromDate(start)),
//       where("createdAt", "<=", Timestamp.fromDate(end)),
//       orderBy("createdAt", "desc")
//     )
//   );
//   return snap.docs.map((d) => ({ id: d.id, ...d.data() } as FurnitureOrder));
// }

// export async function getTodayOrders(): Promise<FurnitureOrder[]> {
//   const start = new Date();
//   start.setHours(0, 0, 0, 0);
//   const end = new Date();
//   end.setHours(23, 59, 59, 999);
//   return getOrdersInRange(start, end);
// }

// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   doc,
//   query,
//   where,
//   orderBy,
//   serverTimestamp,
//   Timestamp,
// } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";

// export type FurnitureOrder = {
//   id: string;
//   orderNo?: string;
//   customerName?: string;
//   customer?: string;
//   customerId?: string;
//   phone?: string;
//   product?: string;
//   productName?: string;
//   category?: string;
//   quantity?: number;
//   amount?: number;
//   total?: number;
//   paid?: number;
//   status?: string;
//   paymentStatus?: string;
//   source?: string;
//   deliveryDate?: string;
//   notes?: string;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
//   items?: { productId: string; name: string; qty: number; price: number }[];
// };

// const COLLECTION = "furniture_orders";

// export async function getAllOrders(): Promise<FurnitureOrder[]> {
//   const snap = await getDocs(
//     query(collection(db, COLLECTION), orderBy("createdAt", "desc"))
//   );
//   return snap.docs.map((d) => ({ id: d.id, ...d.data() } as FurnitureOrder));
// }

// export async function getOrdersInRange(
//   start: Date,
//   end: Date
// ): Promise<FurnitureOrder[]> {
//   const snap = await getDocs(
//     query(
//       collection(db, COLLECTION),
//       where("createdAt", ">=", Timestamp.fromDate(start)),
//       where("createdAt", "<=", Timestamp.fromDate(end)),
//       orderBy("createdAt", "desc")
//     )
//   );
//   return snap.docs.map((d) => ({ id: d.id, ...d.data() } as FurnitureOrder));
// }

// export async function getTodayOrders(): Promise<FurnitureOrder[]> {
//   const start = new Date();
//   start.setHours(0, 0, 0, 0);
//   const end = new Date();
//   end.setHours(23, 59, 59, 999);
//   return getOrdersInRange(start, end);
// }

// export async function createOrder(
//   data: Omit<FurnitureOrder, "id" | "createdAt" | "updatedAt">
// ): Promise<string> {
//   const ref = await addDoc(collection(db, COLLECTION), {
//     ...data,
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   });
//   return ref.id;
// }

// export async function updateOrder(
//   id: string,
//   data: Partial<FurnitureOrder>
// ): Promise<void> {
//   await updateDoc(doc(db, COLLECTION, id), {
//     ...data,
//     updatedAt: serverTimestamp(),
//   });
// }

// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   doc,
//   query,
//   where,
//   orderBy,
//   serverTimestamp,
//   Timestamp,
// } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";

// export type FurnitureOrder = {
//   id: string;
//   orderNo?: string;
//   customerName?: string;
//   customer?: string;
//   customerId?: string;
//   phone?: string;
//   product?: string;
//   productName?: string;
//   category?: string;
//   quantity?: number;
//   amount?: number;
//   total?: number;
//   paid?: number;
//   status?: string;
//   paymentStatus?: string;
//   source?: string;
//   deliveryDate?: string;
//   notes?: string;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
//   items?: { productId: string; name: string; qty: number; price: number }[];
// };

// const COLLECTION = "furniture_orders";

// export async function getAllOrders(): Promise<FurnitureOrder[]> {
//   const snap = await getDocs(
//     query(collection(db, COLLECTION), orderBy("createdAt", "desc"))
//   );
//   return snap.docs.map((d) => ({ id: d.id, ...d.data() } as FurnitureOrder));
// }

// export async function getOrdersInRange(
//   start: Date,
//   end: Date
// ): Promise<FurnitureOrder[]> {
//   const snap = await getDocs(
//     query(
//       collection(db, COLLECTION),
//       where("createdAt", ">=", Timestamp.fromDate(start)),
//       where("createdAt", "<=", Timestamp.fromDate(end)),
//       orderBy("createdAt", "desc")
//     )
//   );
//   return snap.docs.map((d) => ({ id: d.id, ...d.data() } as FurnitureOrder));
// }

// export async function getTodayOrders(): Promise<FurnitureOrder[]> {
//   const start = new Date();
//   start.setHours(0, 0, 0, 0);
//   const end = new Date();
//   end.setHours(23, 59, 59, 999);
//   return getOrdersInRange(start, end);
// }

// export async function createOrder(
//   data: Omit<FurnitureOrder, "id" | "createdAt" | "updatedAt">
// ): Promise<string> {
//   const ref = await addDoc(collection(db, COLLECTION), {
//     ...data,
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   });
//   return ref.id;
// }

// export async function updateOrder(
//   id: string,
//   data: Partial<FurnitureOrder>
// ): Promise<void> {
//   await updateDoc(doc(db, COLLECTION, id), {
//     ...data,
//     updatedAt: serverTimestamp(),
//   });
// }

// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   doc,
//   query,
//   where,
//   orderBy,
//   serverTimestamp,
//   Timestamp,
// } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";

// export type FurnitureOrder = {
//   id: string;
//   orderNo?: string;
//   orderNumber?: string;
//   customerName?: string;
//   customer?: string;
//   customerId?: string;
//   userId?: string;
//   phone?: string;
//   email?: string;
//   product?: string;
//   productName?: string;
//   category?: string;
//   quantity?: number;
//   amount?: number;
//   total?: number;
//   totalAmount?: number;
//   paid?: number;
//   status?: string;
//   orderStatus?: string;
//   paymentStatus?: string;
//   paymentMethod?: string;
//   source?: string;
//   deliveryDate?: string;
//   notes?: string;
//   shippingAddress?: {
//     fullName?: string;
//     phone?: string;
//     email?: string;
//     addressLine1?: string;
//     city?: string;
//     state?: string;
//     postalCode?: string;
//   };
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
//   items?: {
//     productId?: string;
//     name?: string;
//     qty?: number;
//     quantity?: number;
//     price?: number;
//   }[];
// };

// const COLLECTION = "furniture_orders";
// const WEBSITE_ORDERS = "orders";

// function normalizeDoc(
//   id: string,
//   data: Record<string, unknown>
// ): FurnitureOrder {
//   const addr = (data.shippingAddress || {}) as FurnitureOrder["shippingAddress"];
//   const items = (data.items as FurnitureOrder["items"]) || [];
//   const total = Number(
//     data.total ?? data.amount ?? data.totalAmount ?? 0
//   );
//   const paid = Number(data.paid ?? 0);
//   const status = String(
//     data.status ?? data.orderStatus ?? "Pending"
//   );
//   const customer =
//     String(
//       data.customerName ||
//         data.customer ||
//         addr?.fullName ||
//         "Unknown"
//     ).trim() || "Unknown";
//   const phone = String(data.phone || addr?.phone || "—");
//   const productFromItems = items
//     .map((i) => i.name)
//     .filter(Boolean)
//     .join(", ");

//   return {
//     id,
//     ...data,
//     orderNo: String(data.orderNo || data.orderNumber || id),
//     orderNumber: String(data.orderNumber || data.orderNo || id),
//     customerName: customer,
//     customer,
//     phone,
//     email: String(data.email || addr?.email || ""),
//     product: String(
//       data.product || data.productName || productFromItems || "Furniture Item"
//     ),
//     productName: String(
//       data.productName || data.product || productFromItems || "Furniture Item"
//     ),
//     category: String(data.category || items[0]?.name || "Other"),
//     quantity:
//       Number(data.quantity) ||
//       items.reduce(
//         (s, i) => s + Number(i.qty ?? i.quantity ?? 0),
//         0
//       ) ||
//       1,
//     amount: total,
//     total,
//     totalAmount: total,
//     paid,
//     status,
//     orderStatus: status,
//     paymentStatus: String(data.paymentStatus || "Pending"),
//     paymentMethod: String(data.paymentMethod || ""),
//     source: String(data.source || "Website"),
//     deliveryDate: String(data.deliveryDate || ""),
//     notes: String(data.notes || ""),
//     items: items.map((i) => ({
//       productId: i.productId || "",
//       name: i.name || "",
//       qty: Number(i.qty ?? i.quantity ?? 1),
//       price: Number(i.price ?? 0),
//     })),
//   } as FurnitureOrder;
// }

// export async function getAllOrders(): Promise<FurnitureOrder[]> {
//   const byId = new Map<string, FurnitureOrder>();

//   try {
//     const snap = await getDocs(
//       query(collection(db, COLLECTION), orderBy("createdAt", "desc"))
//     );
//     snap.docs.forEach((d) => {
//       byId.set(d.id, normalizeDoc(d.id, d.data() as Record<string, unknown>));
//     });
//   } catch {
//     const snap = await getDocs(collection(db, COLLECTION));
//     snap.docs.forEach((d) => {
//       byId.set(d.id, normalizeDoc(d.id, d.data() as Record<string, unknown>));
//     });
//   }

//   // Legacy / website-only docs still under `orders`
//   try {
//     const snap = await getDocs(collection(db, WEBSITE_ORDERS));
//     snap.docs.forEach((d) => {
//       const data = d.data() as Record<string, unknown>;
//       const key = String(data.orderNumber || d.id);
//       const already = [...byId.values()].some(
//         (o) => o.orderNo === key || o.orderNumber === key
//       );
//       if (!already) {
//         byId.set(
//           `web-${d.id}`,
//           normalizeDoc(d.id, { ...data, source: data.source || "Website" })
//         );
//       }
//     });
//   } catch {
//     /* ignore if rules block */
//   }

//   return [...byId.values()].sort((a, b) => {
//     const ta = a.createdAt?.toMillis?.() ?? 0;
//     const tb = b.createdAt?.toMillis?.() ?? 0;
//     return tb - ta;
//   });
// }

// export async function getOrdersInRange(
//   start: Date,
//   end: Date
// ): Promise<FurnitureOrder[]> {
//   try {
//     const snap = await getDocs(
//       query(
//         collection(db, COLLECTION),
//         where("createdAt", ">=", Timestamp.fromDate(start)),
//         where("createdAt", "<=", Timestamp.fromDate(end)),
//         orderBy("createdAt", "desc")
//       )
//     );
//     return snap.docs.map((d) =>
//       normalizeDoc(d.id, d.data() as Record<string, unknown>)
//     );
//   } catch {
//     const all = await getAllOrders();
//     return all.filter((o) => {
//       const t = o.createdAt?.toMillis?.() ?? 0;
//       return t >= start.getTime() && t <= end.getTime();
//     });
//   }
// }

// export async function getTodayOrders(): Promise<FurnitureOrder[]> {
//   const start = new Date();
//   start.setHours(0, 0, 0, 0);
//   const end = new Date();
//   end.setHours(23, 59, 59, 999);
//   return getOrdersInRange(start, end);
// }

// export async function createOrder(
//   data: Omit<FurnitureOrder, "id" | "createdAt" | "updatedAt">
// ): Promise<string> {
//   const ref = await addDoc(collection(db, COLLECTION), {
//     ...data,
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   });
//   return ref.id;
// }

// export async function updateOrder(
//   id: string,
//   data: Partial<FurnitureOrder>
// ): Promise<void> {
//   // Prefer furniture_orders; if id was prefixed from website merge, strip
//   const realId = id.startsWith("web-") ? id.slice(4) : id;
//   const col = id.startsWith("web-") ? WEBSITE_ORDERS : COLLECTION;
//   await updateDoc(doc(db, col, realId), {
//     ...data,
//     updatedAt: serverTimestamp(),
//   });
// }

// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   doc,
//   query,
//   where,
//   orderBy,
//   serverTimestamp,
//   Timestamp,
//   getDoc,
// } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";

// export type FurnitureOrder = {
//   id: string;
//   orderNo?: string;
//   orderNumber?: string;
//   websiteOrderId?: string;
//   customerName?: string;
//   customer?: string;
//   customerId?: string;
//   userId?: string;
//   phone?: string;
//   email?: string;
//   product?: string;
//   productName?: string;
//   category?: string;
//   quantity?: number;
//   amount?: number;
//   total?: number;
//   totalAmount?: number;
//   paid?: number;
//   status?: string;
//   orderStatus?: string;
//   paymentStatus?: string;
//   paymentMethod?: string;
//   source?: string;
//   deliveryDate?: string;
//   notes?: string;
//   shippingAddress?: {
//     fullName?: string;
//     phone?: string;
//     email?: string;
//     addressLine1?: string;
//     city?: string;
//     state?: string;
//     postalCode?: string;
//   };
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
//   items?: {
//     productId?: string;
//     name?: string;
//     qty?: number;
//     quantity?: number;
//     price?: number;
//   }[];
// };

// const COLLECTION = "furniture_orders";
// const WEBSITE_ORDERS = "orders";

// /** ERP UI status → website orderStatus */
// export function mapErpStatusToWebsite(
//   erpStatus: string
// ): string {
//   const s = (erpStatus || "").trim();
//   const map: Record<string, string> = {
//     New: "Pending",
//     Pending: "Pending",
//     Confirmed: "Confirmed",
//     "In Production": "Processing",
//     Processing: "Processing",
//     Ready: "Shipped",
//     Shipped: "Shipped",
//     Delivered: "Delivered",
//     Cancelled: "Cancelled",
//   };
//   return map[s] || "Pending";
// }

// function normalizeDoc(
//   id: string,
//   data: Record<string, unknown>
// ): FurnitureOrder {
//   const addr = (data.shippingAddress || {}) as FurnitureOrder["shippingAddress"];
//   const items = (data.items as FurnitureOrder["items"]) || [];
//   const total = Number(data.total ?? data.amount ?? data.totalAmount ?? 0);
//   const paid = Number(data.paid ?? 0);
//   const status = String(data.status ?? data.orderStatus ?? "Pending");
//   const customer =
//     String(
//       data.customerName || data.customer || addr?.fullName || "Unknown"
//     ).trim() || "Unknown";
//   const phone = String(data.phone || addr?.phone || "—");
//   const productFromItems = items
//     .map((i) => i.name)
//     .filter(Boolean)
//     .join(", ");

//   return {
//     id,
//     ...data,
//     websiteOrderId: data.websiteOrderId
//       ? String(data.websiteOrderId)
//       : undefined,
//     orderNo: String(data.orderNo || data.orderNumber || id),
//     orderNumber: String(data.orderNumber || data.orderNo || id),
//     customerName: customer,
//     customer,
//     phone,
//     email: String(data.email || addr?.email || ""),
//     product: String(
//       data.product || data.productName || productFromItems || "Furniture Item"
//     ),
//     productName: String(
//       data.productName || data.product || productFromItems || "Furniture Item"
//     ),
//     category: String(data.category || items[0]?.name || "Other"),
//     quantity:
//       Number(data.quantity) ||
//       items.reduce((s, i) => s + Number(i.qty ?? i.quantity ?? 0), 0) ||
//       1,
//     amount: total,
//     total,
//     totalAmount: total,
//     paid,
//     status,
//     orderStatus: status,
//     paymentStatus: String(data.paymentStatus || "Pending"),
//     paymentMethod: String(data.paymentMethod || ""),
//     source: String(data.source || "Website"),
//     deliveryDate: String(data.deliveryDate || ""),
//     notes: String(data.notes || ""),
//     items: items.map((i) => ({
//       productId: i.productId || "",
//       name: i.name || "",
//       qty: Number(i.qty ?? i.quantity ?? 1),
//       price: Number(i.price ?? 0),
//     })),
//   } as FurnitureOrder;
// }

// export async function getAllOrders(): Promise<FurnitureOrder[]> {
//   const byId = new Map<string, FurnitureOrder>();

//   try {
//     const snap = await getDocs(
//       query(collection(db, COLLECTION), orderBy("createdAt", "desc"))
//     );
//     snap.docs.forEach((d) => {
//       byId.set(d.id, normalizeDoc(d.id, d.data() as Record<string, unknown>));
//     });
//   } catch {
//     const snap = await getDocs(collection(db, COLLECTION));
//     snap.docs.forEach((d) => {
//       byId.set(d.id, normalizeDoc(d.id, d.data() as Record<string, unknown>));
//     });
//   }

//   try {
//     const snap = await getDocs(collection(db, WEBSITE_ORDERS));
//     snap.docs.forEach((d) => {
//       const data = d.data() as Record<string, unknown>;
//       const key = String(data.orderNumber || d.id);
//       const already = [...byId.values()].some(
//         (o) => o.orderNo === key || o.orderNumber === key || o.websiteOrderId === d.id
//       );
//       if (!already) {
//         byId.set(
//           `web-${d.id}`,
//           normalizeDoc(d.id, {
//             ...data,
//             websiteOrderId: d.id,
//             source: data.source || "Website",
//           })
//         );
//       }
//     });
//   } catch {
//     /* ignore */
//   }

//   return [...byId.values()].sort((a, b) => {
//     const ta = a.createdAt?.toMillis?.() ?? 0;
//     const tb = b.createdAt?.toMillis?.() ?? 0;
//     return tb - ta;
//   });
// }

// export async function getOrdersInRange(
//   start: Date,
//   end: Date
// ): Promise<FurnitureOrder[]> {
//   try {
//     const snap = await getDocs(
//       query(
//         collection(db, COLLECTION),
//         where("createdAt", ">=", Timestamp.fromDate(start)),
//         where("createdAt", "<=", Timestamp.fromDate(end)),
//         orderBy("createdAt", "desc")
//       )
//     );
//     return snap.docs.map((d) =>
//       normalizeDoc(d.id, d.data() as Record<string, unknown>)
//     );
//   } catch {
//     const all = await getAllOrders();
//     return all.filter((o) => {
//       const t = o.createdAt?.toMillis?.() ?? 0;
//       return t >= start.getTime() && t <= end.getTime();
//     });
//   }
// }

// export async function getTodayOrders(): Promise<FurnitureOrder[]> {
//   const start = new Date();
//   start.setHours(0, 0, 0, 0);
//   const end = new Date();
//   end.setHours(23, 59, 59, 999);
//   return getOrdersInRange(start, end);
// }

// export async function createOrder(
//   data: Omit<FurnitureOrder, "id" | "createdAt" | "updatedAt">
// ): Promise<string> {
//   const ref = await addDoc(collection(db, COLLECTION), {
//     ...data,
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   });
//   return ref.id;
// }

// /**
//  * Updates furniture_orders AND mirrors status/payment to website `orders`
//  * so customer track page stays in sync.
//  */
// export async function updateOrder(
//   id: string,
//   data: Partial<FurnitureOrder>
// ): Promise<void> {
//   const isWebPrefix = id.startsWith("web-");
//   const realId = isWebPrefix ? id.slice(4) : id;
//   const primaryCol = isWebPrefix ? WEBSITE_ORDERS : COLLECTION;

//   const payload: Record<string, unknown> = {
//     ...data,
//     updatedAt: serverTimestamp(),
//   };

//   // Keep both status fields in sync on ERP doc
//   if (data.status !== undefined) {
//     payload.status = data.status;
//     payload.orderStatus = mapErpStatusToWebsite(String(data.status));
//   }

//   await updateDoc(doc(db, primaryCol, realId), payload);

//   // Mirror to the other collection
//   if (isWebPrefix) {
//     // Updated website order — try find furniture_orders by websiteOrderId
//     try {
//       const q = query(
//         collection(db, COLLECTION),
//         where("websiteOrderId", "==", realId)
//       );
//       const snap = await getDocs(q);
//       for (const d of snap.docs) {
//         await updateDoc(doc(db, COLLECTION, d.id), payload);
//       }
//     } catch (err) {
//       console.error("Mirror to furniture_orders failed:", err);
//     }
//   } else {
//     // Updated furniture_orders — mirror to website orders via websiteOrderId
//     try {
//       const erpSnap = await getDoc(doc(db, COLLECTION, realId));
//       const websiteOrderId =
//         (data as { websiteOrderId?: string }).websiteOrderId ||
//         (erpSnap.exists()
//           ? String(erpSnap.data()?.websiteOrderId || "")
//           : "");

//       if (websiteOrderId) {
//         const webPayload: Record<string, unknown> = {
//           updatedAt: serverTimestamp(),
//         };
//         if (data.status !== undefined) {
//           webPayload.orderStatus = mapErpStatusToWebsite(String(data.status));
//           webPayload.status = mapErpStatusToWebsite(String(data.status));
//         }
//         if (data.paymentStatus !== undefined) {
//           webPayload.paymentStatus = data.paymentStatus;
//         }
//         if (data.paid !== undefined) {
//           webPayload.paid = data.paid;
//         }
//         if (data.deliveryDate !== undefined) {
//           webPayload.deliveryDate = data.deliveryDate;
//         }
//         await updateDoc(doc(db, WEBSITE_ORDERS, websiteOrderId), webPayload);
//       }
//     } catch (err) {
//       console.error("Mirror to website orders failed:", err);
//     }
//   }
// }

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
  Timestamp,
  getDoc,
} from "firebase/firestore";
import { applyDeliveryStockDeduction } from "@/modules/furniture/services/productService";
import { db } from "@/core/config/firebaseClient";

export type FurnitureOrder = {
  id: string;
  orderNo?: string;
  orderNumber?: string;
  websiteOrderId?: string;
  customerName?: string;
  customer?: string;
  customerId?: string;
  userId?: string;
  phone?: string;
  email?: string;
  product?: string;
  productName?: string;
  category?: string;
  quantity?: number;
  amount?: number;
  total?: number;
  totalAmount?: number;
  paid?: number;
  status?: string;
  orderStatus?: string;
  paymentStatus?: string;
  paymentMethod?: string;
  source?: string;
  deliveryDate?: string;
  notes?: string;
  stockDeducted?: boolean;
  /** none | pending | completed | not_required */
  refundStatus?: string;
  refundAmount?: number;
  refundedAt?: string;
  refundNote?: string;
  shippingAddress?: {
    fullName?: string;
    phone?: string;
    email?: string;
    addressLine1?: string;
    city?: string;
    state?: string;
    postalCode?: string;
  };
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
  items?: {
    productId?: string;
    name?: string;
    qty?: number;
    quantity?: number;
    price?: number;
  }[];
};

const COLLECTION = "furniture_orders";
const WEBSITE_ORDERS = "orders";

export function mapErpStatusToWebsite(erpStatus: string): string {
  const s = (erpStatus || "").trim();
  const map: Record<string, string> = {
    New: "Pending",
    Pending: "Pending",
    Confirmed: "Confirmed",
    "In Production": "Processing",
    Processing: "Processing",
    Ready: "Shipped",
    Shipped: "Shipped",
    Delivered: "Delivered",
    Cancelled: "Cancelled",
  };
  return map[s] || "Pending";
}

function normalizeDoc(
  id: string,
  data: Record<string, unknown>
): FurnitureOrder {
  const addr = (data.shippingAddress || {}) as FurnitureOrder["shippingAddress"];
  const items = (data.items as FurnitureOrder["items"]) || [];
  const total = Number(data.total ?? data.amount ?? data.totalAmount ?? 0);
  const paid = Number(data.paid ?? 0);
  const status = String(data.status ?? data.orderStatus ?? "Pending");
  const customer =
    String(
      data.customerName || data.customer || addr?.fullName || "Unknown"
    ).trim() || "Unknown";
  const phone = String(data.phone || addr?.phone || "—");
  const productFromItems = items
    .map((i) => i.name)
    .filter(Boolean)
    .join(", ");

  return {
    id,
    ...data,
    websiteOrderId: data.websiteOrderId
      ? String(data.websiteOrderId)
      : undefined,
    orderNo: String(data.orderNo || data.orderNumber || id),
    orderNumber: String(data.orderNumber || data.orderNo || id),
    customerName: customer,
    customer,
    phone,
    email: String(data.email || addr?.email || ""),
    product: String(
      data.product || data.productName || productFromItems || "Furniture Item"
    ),
    productName: String(
      data.productName || data.product || productFromItems || "Furniture Item"
    ),
    category: String(data.category || items[0]?.name || "Other"),
    quantity:
      Number(data.quantity) ||
      items.reduce((s, i) => s + Number(i.qty ?? i.quantity ?? 0), 0) ||
      1,
    amount: total,
    total,
    totalAmount: total,
    paid,
    status,
    orderStatus: status,
    paymentStatus: String(data.paymentStatus || "Pending"),
    paymentMethod: String(data.paymentMethod || ""),
    source: String(data.source || "Website"),
    deliveryDate: String(data.deliveryDate || ""),
    notes: String(data.notes || ""),
    refundStatus: String(data.refundStatus || ""),
    refundAmount: Number(data.refundAmount ?? 0) || 0,
    refundedAt: String(data.refundedAt || ""),
    refundNote: String(data.refundNote || ""),
    items: items.map((i) => ({
      productId: i.productId || "",
      name: i.name || "",
      qty: Number(i.qty ?? i.quantity ?? 1),
      price: Number(i.price ?? 0),
    })),
  } as FurnitureOrder;
}

export async function getAllOrders(): Promise<FurnitureOrder[]> {
  const byId = new Map<string, FurnitureOrder>();

  try {
    const snap = await getDocs(
      query(collection(db, COLLECTION), orderBy("createdAt", "desc"))
    );
    snap.docs.forEach((d) => {
      byId.set(d.id, normalizeDoc(d.id, d.data() as Record<string, unknown>));
    });
  } catch {
    const snap = await getDocs(collection(db, COLLECTION));
    snap.docs.forEach((d) => {
      byId.set(d.id, normalizeDoc(d.id, d.data() as Record<string, unknown>));
    });
  }

  try {
    const snap = await getDocs(collection(db, WEBSITE_ORDERS));
    snap.docs.forEach((d) => {
      const data = d.data() as Record<string, unknown>;
      const key = String(data.orderNumber || d.id);
      const already = [...byId.values()].some(
        (o) =>
          o.orderNo === key ||
          o.orderNumber === key ||
          o.websiteOrderId === d.id
      );
      if (!already) {
        byId.set(
          `web-${d.id}`,
          normalizeDoc(d.id, {
            ...data,
            websiteOrderId: d.id,
            source: data.source || "Website",
          })
        );
      }
    });
  } catch {
    /* ignore */
  }

  // return [...byId.values()].sort((a, b) => {
  //   const ta = a.createdAt?.toMillis?.() ?? 0;
  //   const tb = b.createdAt?.toMillis?.() ?? 0;
  //   return tb - ta;
  // });

  return [...byId.values()]
    .filter(isVisibleOrderInErp)
    .sort((a, b) => {
      const ta = a.createdAt?.toMillis?.() ?? 0;
      const tb = b.createdAt?.toMillis?.() ?? 0;
      return tb - ta;
  });
}

export async function getOrdersInRange(
  start: Date,
  end: Date
): Promise<FurnitureOrder[]> {
  try {
    const snap = await getDocs(
      query(
        collection(db, COLLECTION),
        where("createdAt", ">=", Timestamp.fromDate(start)),
        where("createdAt", "<=", Timestamp.fromDate(end)),
        orderBy("createdAt", "desc")
      )
    );
    return snap.docs.map((d) =>
      normalizeDoc(d.id, d.data() as Record<string, unknown>)
    );
  } catch {
    const all = await getAllOrders();
    return all.filter((o) => {
      const t = o.createdAt?.toMillis?.() ?? 0;
      return t >= start.getTime() && t <= end.getTime();
    });
  }
}

export async function getTodayOrders(): Promise<FurnitureOrder[]> {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  return getOrdersInRange(start, end);
}

export async function createOrder(
  data: Omit<FurnitureOrder, "id" | "createdAt" | "updatedAt">
): Promise<string> {
  const ref = await addDoc(collection(db, COLLECTION), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}

// export async function updateOrder(
//   id: string,
//   data: Partial<FurnitureOrder>
// ): Promise<void> {
//   const isWebPrefix = id.startsWith("web-");
//   const realId = isWebPrefix ? id.slice(4) : id;
//   const primaryCol = isWebPrefix ? WEBSITE_ORDERS : COLLECTION;

//   const payload: Record<string, unknown> = {
//     ...data,
//     updatedAt: serverTimestamp(),
//   };

//   if (data.status !== undefined) {
//     payload.status = data.status;
//     payload.orderStatus = mapErpStatusToWebsite(String(data.status));
//   }

//   await updateDoc(doc(db, primaryCol, realId), payload);

//   if (isWebPrefix) {
//     try {
//       const q = query(
//         collection(db, COLLECTION),
//         where("websiteOrderId", "==", realId)
//       );
//       const snap = await getDocs(q);
//       for (const d of snap.docs) {
//         await updateDoc(doc(db, COLLECTION, d.id), payload);
//       }
//     } catch (err) {
//       console.error("Mirror to furniture_orders failed:", err);
//     }
//   } else {
//     try {
//       const erpSnap = await getDoc(doc(db, COLLECTION, realId));
//       const websiteOrderId =
//         (data as { websiteOrderId?: string }).websiteOrderId ||
//         (erpSnap.exists()
//           ? String(erpSnap.data()?.websiteOrderId || "")
//           : "");

//       if (websiteOrderId) {
//         const webPayload: Record<string, unknown> = {
//           updatedAt: serverTimestamp(),
//         };
//         if (data.status !== undefined) {
//           webPayload.orderStatus = mapErpStatusToWebsite(String(data.status));
//           webPayload.status = mapErpStatusToWebsite(String(data.status));
//         }
//         if (data.paymentStatus !== undefined) {
//           webPayload.paymentStatus = data.paymentStatus;
//         }
//         if (data.paid !== undefined) {
//           webPayload.paid = data.paid;
//         }
//         if (data.refundStatus !== undefined) {
//           webPayload.refundStatus = data.refundStatus;
//         }
//         if (data.deliveryDate !== undefined) {
//           webPayload.deliveryDate = data.deliveryDate;
//         }
//         await updateDoc(doc(db, WEBSITE_ORDERS, websiteOrderId), webPayload);
//       }
//     } catch (err) {
//       console.error("Mirror to website orders failed:", err);
//     }
//   }
// }

export async function updateOrder(
  id: string,
  data: Partial<FurnitureOrder>
): Promise<void> {
  const isWebPrefix = id.startsWith("web-");
  const realId = isWebPrefix ? id.slice(4) : id;
  const primaryCol = isWebPrefix ? WEBSITE_ORDERS : COLLECTION;

  const payload: Record<string, unknown> = {
    ...data,
    updatedAt: serverTimestamp(),
  };

  if (data.status !== undefined) {
    payload.status = data.status;
    payload.orderStatus = mapErpStatusToWebsite(String(data.status));
  }

  // Load current doc for stock side-effects
  const currentSnap = await getDoc(doc(db, primaryCol, realId));
  const current = currentSnap.exists() ? currentSnap.data() || {} : {};
  const prevStatus = String(current.status || current.orderStatus || "");
  const alreadyDeducted = Boolean(current.stockDeducted);

  await updateDoc(doc(db, primaryCol, realId), payload);

  // Delivered → deduct stock once
  if (
    data.status === "Delivered" &&
    prevStatus !== "Delivered" &&
    !alreadyDeducted
  ) {
    try {
      const orderForStock = normalizeDoc(realId, {
        ...current,
        ...data,
      } as Record<string, unknown>);

      await applyDeliveryStockDeduction({
        orderNo: orderForStock.orderNo,
        product: orderForStock.product,
        productName: orderForStock.productName,
        quantity: orderForStock.quantity,
        items: orderForStock.items,
      });

      await updateDoc(doc(db, primaryCol, realId), {
        stockDeducted: true,
        stockDeductedAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    } catch (err) {
      console.error("Stock deduction on delivery failed:", err);
    }
  }

  // Mirror to other collection (unchanged logic)
  if (isWebPrefix) {
    try {
      const q = query(
        collection(db, COLLECTION),
        where("websiteOrderId", "==", realId)
      );
      const snap = await getDocs(q);
      for (const d of snap.docs) {
        await updateDoc(doc(db, COLLECTION, d.id), {
          ...payload,
          ...(data.status === "Delivered" && !alreadyDeducted
            ? { stockDeducted: true }
            : {}),
        });
      }
    } catch (err) {
      console.error("Mirror to furniture_orders failed:", err);
    }
  } else {
    try {
      const erpSnap = await getDoc(doc(db, COLLECTION, realId));
      const websiteOrderId =
        (data as { websiteOrderId?: string }).websiteOrderId ||
        (erpSnap.exists()
          ? String(erpSnap.data()?.websiteOrderId || "")
          : "");

      if (websiteOrderId) {
        const webPayload: Record<string, unknown> = {
          updatedAt: serverTimestamp(),
        };
        if (data.status !== undefined) {
          webPayload.orderStatus = mapErpStatusToWebsite(String(data.status));
          webPayload.status = mapErpStatusToWebsite(String(data.status));
        }
        if (data.paymentStatus !== undefined) {
          webPayload.paymentStatus = data.paymentStatus;
        }
        if (data.paid !== undefined) {
          webPayload.paid = data.paid;
        }
        if (data.refundStatus !== undefined) {
          webPayload.refundStatus = data.refundStatus;
        }
        if (data.deliveryDate !== undefined) {
          webPayload.deliveryDate = data.deliveryDate;
        }
        await updateDoc(doc(db, WEBSITE_ORDERS, websiteOrderId), webPayload);
      }
    } catch (err) {
      console.error("Mirror to website orders failed:", err);
    }
  }
}

export type CancelOrderResult = {
  needsRefund: boolean;
  refundAmount: number;
  message: string;
};

/**
 * Cancel order:
 * - unpaid → cancel + clear pending immediately
 * - paid/partial → cancel + refundStatus = pending (balances cleared after markRefundComplete)
 */
export async function cancelOrder(
  id: string,
  note?: string
): Promise<CancelOrderResult> {
  const isWebPrefix = id.startsWith("web-");
  const realId = isWebPrefix ? id.slice(4) : id;
  const primaryCol = isWebPrefix ? WEBSITE_ORDERS : COLLECTION;

  const snap = await getDoc(doc(db, primaryCol, realId));
  if (!snap.exists()) {
    throw new Error("Order not found.");
  }

  const data = snap.data() || {};
  const total = Number(data.total ?? data.amount ?? data.totalAmount ?? 0) || 0;
  const paid = Number(data.paid ?? 0) || 0;
  const currentStatus = String(data.status || data.orderStatus || "");

  if (currentStatus.toLowerCase() === "cancelled") {
    return {
      needsRefund: Number(data.refundStatus) === 0 && paid > 0,
      refundAmount: paid,
      message: "Order is already cancelled.",
    };
  }

  if (paid <= 0) {
    await updateOrder(id, {
      status: "Cancelled",
      paymentStatus: "Pending",
      paid: 0,
      refundStatus: "not_required",
      refundAmount: 0,
      refundNote: note || "Cancelled with no payment received.",
    });
    return {
      needsRefund: false,
      refundAmount: 0,
      message: "Order cancelled. No payment was received — pending cleared.",
    };
  }

  // Money was paid → cancel but hold refund pending
  await updateOrder(id, {
    status: "Cancelled",
    // keep paid + paymentStatus until refund is recorded
    refundStatus: "pending",
    refundAmount: paid,
    refundNote:
      note ||
      `Cancellation requires refund of ₹${paid.toLocaleString("en-IN")}.`,
  });

  return {
    needsRefund: true,
    refundAmount: paid,
    message: `Order cancelled. Refund of ₹${paid.toLocaleString("en-IN")} is pending.`,
  };
}

/**
 * After refund is done (Cashfree or offline), clear paid balances.
 */
export async function markRefundComplete(
  id: string,
  options?: { refundAmount?: number; note?: string }
): Promise<void> {
  const isWebPrefix = id.startsWith("web-");
  const realId = isWebPrefix ? id.slice(4) : id;
  const primaryCol = isWebPrefix ? WEBSITE_ORDERS : COLLECTION;

  const snap = await getDoc(doc(db, primaryCol, realId));
  if (!snap.exists()) {
    throw new Error("Order not found.");
  }

  const data = snap.data() || {};
  const paid = Number(data.paid ?? 0) || 0;
  const amount = options?.refundAmount ?? paid;

  await updateOrder(id, {
    status: "Cancelled",
    paid: 0,
    paymentStatus: "Refunded",
    refundStatus: "completed",
    refundAmount: amount,
    refundedAt: new Date().toISOString().slice(0, 10),
    refundNote:
      options?.note ||
      `Refund of ₹${amount.toLocaleString("en-IN")} completed.`,
  });
}

/** Hide failed / abandoned online checkouts from ERP lists */
export function isVisibleOrderInErp(o: FurnitureOrder): boolean {
  const pay = String(o.paymentStatus || "").toLowerCase().trim();
  const method = String(o.paymentMethod || "").toUpperCase().trim();
  const paid = Number(o.paid ?? 0) || 0;
  const status = String(o.status || o.orderStatus || "").toLowerCase();

  if (pay === "failed" || pay === "user_dropped") return false;

  const isCod = method === "COD" || method === "";
  const isOnline =
    !isCod &&
    (method.includes("CARD") ||
      method.includes("UPI") ||
      method.includes("CASHFREE") ||
      method.includes("ONLINE") ||
      method.includes("BANK"));

  // Unpaid online attempt — never paid
  if (isOnline && paid <= 0 && (pay === "pending" || pay === "" || pay === "failed")) {
    return false;
  }

  // Optional: hide cancelled with no money
  if (status === "cancelled" && paid <= 0 && pay !== "refunded") {
    // keep cancelled if staff cancelled after real order; unpaid online already filtered
  }

  return true;
}
