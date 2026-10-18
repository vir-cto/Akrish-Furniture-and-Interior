// import {
//   collection,
//   getDocs,
//   query,
//   where,
//   orderBy,
//   limit,
//   Timestamp,
// } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";

// export type FurnitureProduct = {
//   id: string;
//   name: string;
//   sku?: string;
//   category?: string;
//   price?: number;
//   costPrice?: number;
//   stock?: number;
//   minStock?: number;
//   status?: "Published" | "Draft" | "Archived";
//   publishedAt?: Timestamp | null;
//   createdAt?: Timestamp | null;
//   imageUrl?: string;
// };

// const COLLECTION = "furniture_products";

// export async function getAllProducts(): Promise<FurnitureProduct[]> {
//   const snap = await getDocs(
//     query(collection(db, COLLECTION), orderBy("createdAt", "desc"))
//   );
//   return snap.docs.map((d) => ({ id: d.id, ...d.data() } as FurnitureProduct));
// }

// // export async function getPublishedProducts(): Promise<FurnitureProduct[]> {
// //   const snap = await getDocs(
// //     query(
// //       collection(db, COLLECTION),
// //       where("status", "==", "Published"),
// //       orderBy("createdAt", "desc")
// //     )
// //   );
// //   return snap.docs.map((d) => ({ id: d.id, ...d.data() } as FurnitureProduct));
// // }

// export async function getPublishedProducts(): Promise<FurnitureProduct[]> {
//   const all = await getAllProducts();
//   return all.filter((p) => p.status === "Published");
// }

// export async function getLowStockProducts(threshold = 5): Promise<FurnitureProduct[]> {
//   const all = await getAllProducts();
//   return all.filter((p) => (p.stock ?? 0) > 0 && (p.stock ?? 0) <= (p.minStock ?? threshold));
// }

// export async function getOutOfStockProducts(): Promise<FurnitureProduct[]> {
//   const all = await getAllProducts();
//   return all.filter((p) => (p.stock ?? 0) <= 0);
// }

// export async function getAgeingProducts(daysThreshold = 10): Promise<
//   (FurnitureProduct & { daysPublished: number })[]
// > {
//   const published = await getPublishedProducts();
//   const now = Date.now();

//   return published
//     .map((p) => {
//       const publishedAt = p.publishedAt?.toMillis?.() ?? p.createdAt?.toMillis?.() ?? now;
//       const days = Math.floor((now - publishedAt) / (1000 * 60 * 60 * 24));
//       return { ...p, daysPublished: days };
//     })
//     .filter((p) => p.daysPublished >= daysThreshold)
//     .sort((a, b) => b.daysPublished - a.daysPublished);
// }

// import {
//   collection,
//   getDocs,
//   getDoc,
//   doc,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   query,
//   orderBy,
//   serverTimestamp,
//   Timestamp,
// } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";

// export type FurnitureProduct = {
//   id: string;
//   name: string;
//   sku?: string;
//   code?: string;
//   category?: string;
//   subcategory?: string;
//   material?: string;
//   finish?: string;
//   color?: string;
//   dimensions?: string;
//   description?: string;
//   price?: number;
//   sellingPrice?: number;
//   costPrice?: number;
//   stock?: number;
//   unit?: string;
//   minStock?: number;
//   reorderLevel?: number;
//   status?: string;
//   supplier?: string;
//   location?: string;
//   warehouseLocation?: string;
//   imageUrl?: string;
//   image?: string;
//   leadTime?: string;
//   warranty?: string;
//   publishedAt?: Timestamp | null;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// const COLLECTION = "furniture_products";

// export async function getAllProducts(): Promise<FurnitureProduct[]> {
//   const snap = await getDocs(
//     query(collection(db, COLLECTION), orderBy("createdAt", "desc"))
//   );
//   return snap.docs.map((d) => ({ id: d.id, ...d.data() } as FurnitureProduct));
// }

// export async function getProductById(id: string): Promise<FurnitureProduct | null> {
//   const snap = await getDoc(doc(db, COLLECTION, id));
//   if (!snap.exists()) return null;
//   return { id: snap.id, ...snap.data() } as FurnitureProduct;
// }

// export async function createProduct(
//   data: Omit<FurnitureProduct, "id" | "createdAt" | "updatedAt">
// ): Promise<string> {
//   const ref = await addDoc(collection(db, COLLECTION), {
//     ...data,
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   });
//   return ref.id;
// }

// export async function updateProduct(
//   id: string,
//   data: Partial<FurnitureProduct>
// ): Promise<void> {
//   await updateDoc(doc(db, COLLECTION, id), {
//     ...data,
//     updatedAt: serverTimestamp(),
//   });
// }

// export async function deleteProduct(id: string): Promise<void> {
//   await deleteDoc(doc(db, COLLECTION, id));
// }

// export async function getPublishedProducts(): Promise<FurnitureProduct[]> {
//   const all = await getAllProducts();
//   return all.filter((p) => p.status === "Published" || p.status === "In Stock");
// }

// export async function getLowStockProducts(threshold = 5): Promise<FurnitureProduct[]> {
//   const all = await getAllProducts();
//   return all.filter(
//     (p) => (p.stock ?? 0) > 0 && (p.stock ?? 0) <= (p.minStock ?? p.reorderLevel ?? threshold)
//   );
// }

// export async function getOutOfStockProducts(): Promise<FurnitureProduct[]> {
//   const all = await getAllProducts();
//   return all.filter((p) => (p.stock ?? 0) <= 0);
// }

// export async function getAgeingProducts(daysThreshold = 10): Promise<
//   (FurnitureProduct & { daysPublished: number })[]
// > {
//   const published = await getPublishedProducts();
//   const now = Date.now();

//   return published
//     .map((p) => {
//       const publishedAt =
//         p.publishedAt?.toMillis?.() ?? p.createdAt?.toMillis?.() ?? now;
//       const days = Math.floor((now - publishedAt) / (1000 * 60 * 60 * 24));
//       return { ...p, daysPublished: days };
//     })
//     .filter((p) => p.daysPublished >= daysThreshold)
//     .sort((a, b) => b.daysPublished - a.daysPublished);
// }

// import {
//   collection,
//   getDocs,
//   getDoc,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   doc,
//   query,
//   orderBy,
//   serverTimestamp,
//   Timestamp,
// } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";

// export type FurnitureProduct = {
//   id: string;
//   name: string;
//   sku?: string;
//   code?: string;
//   category?: string;
//   subcategory?: string;
//   material?: string;
//   finish?: string;
//   color?: string;
//   dimensions?: string;
//   description?: string;
//   price?: number;
//   sellingPrice?: number;
//   costPrice?: number;
//   stock?: number;
//   unit?: string;
//   minStock?: number;
//   reorderLevel?: number;
//   status?: string;
//   supplier?: string;
//   location?: string;
//   warehouseLocation?: string;
//   imageUrl?: string;
//   image?: string;
//   leadTime?: string;
//   warranty?: string;
//   salesCount?: number;
//   revenue?: number;
//   publishedAt?: Timestamp | null;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// const COLLECTION = "furniture_products";

// export async function getAllProducts(): Promise<FurnitureProduct[]> {
//   try {
//     const snap = await getDocs(
//       query(collection(db, COLLECTION), orderBy("createdAt", "desc"))
//     );
//     return snap.docs.map(
//       (d) => ({ id: d.id, ...d.data() } as FurnitureProduct)
//     );
//   } catch {
//     const snap = await getDocs(collection(db, COLLECTION));
//     return snap.docs.map(
//       (d) => ({ id: d.id, ...d.data() } as FurnitureProduct)
//     );
//   }
// }

// export async function getProductById(
//   id: string
// ): Promise<FurnitureProduct | null> {
//   const snap = await getDoc(doc(db, COLLECTION, id));
//   if (!snap.exists()) return null;
//   return { id: snap.id, ...snap.data() } as FurnitureProduct;
// }

// export async function createProduct(
//   data: Omit<FurnitureProduct, "id" | "createdAt" | "updatedAt">
// ): Promise<string> {
//   const ref = await addDoc(collection(db, COLLECTION), {
//     ...data,
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   });
//   return ref.id;
// }

// export async function updateProduct(
//   id: string,
//   data: Partial<FurnitureProduct>
// ): Promise<void> {
//   await updateDoc(doc(db, COLLECTION, id), {
//     ...data,
//     updatedAt: serverTimestamp(),
//   });
// }

// export async function deleteProduct(id: string): Promise<void> {
//   await deleteDoc(doc(db, COLLECTION, id));
// }

// export async function getPublishedProducts(): Promise<FurnitureProduct[]> {
//   const all = await getAllProducts();
//   return all.filter(
//     (p) => p.status === "Published" || p.status === "In Stock" || !p.status
//   );
// }

// export async function getLowStockProducts(
//   threshold = 5
// ): Promise<FurnitureProduct[]> {
//   const all = await getAllProducts();
//   return all.filter(
//     (p) =>
//       (p.stock ?? 0) > 0 &&
//       (p.stock ?? 0) <= (p.minStock ?? p.reorderLevel ?? threshold)
//   );
// }

// export async function getOutOfStockProducts(): Promise<FurnitureProduct[]> {
//   const all = await getAllProducts();
//   return all.filter((p) => (p.stock ?? 0) <= 0);
// }

// export async function getAgeingProducts(
//   daysThreshold = 10
// ): Promise<(FurnitureProduct & { daysPublished: number })[]> {
//   const published = await getPublishedProducts();
//   const now = Date.now();

//   return published
//     .map((p) => {
//       const publishedAt =
//         p.publishedAt?.toMillis?.() ?? p.createdAt?.toMillis?.() ?? now;
//       const days = Math.floor((now - publishedAt) / (1000 * 60 * 60 * 24));
//       return { ...p, daysPublished: days };
//     })
//     .filter((p) => p.daysPublished >= daysThreshold)
//     .sort((a, b) => b.daysPublished - a.daysPublished);
// }

// import {
//   collection,
//   getDocs,
//   getDoc,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   doc,
//   query,
//   orderBy,
//   where,
//   serverTimestamp,
//   Timestamp,
// } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";

// export type FurnitureProduct = {
//   id: string;
//   name: string;
//   sku?: string;
//   code?: string;
//   category?: string;
//   subcategory?: string;
//   material?: string;
//   finish?: string;
//   color?: string;
//   dimensions?: string;
//   description?: string;
//   price?: number;
//   sellingPrice?: number;
//   costPrice?: number;
//   stock?: number;
//   unit?: string;
//   minStock?: number;
//   reorderLevel?: number;
//   status?: string;
//   supplier?: string;
//   location?: string;
//   warehouseLocation?: string;
//   imageUrl?: string;
//   image?: string;
//   leadTime?: string;
//   warranty?: string;
//   salesCount?: number;
//   revenue?: number;
//   publishedAt?: Timestamp | null;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// /** Stock in / out row */
// export type StockMovement = {
//   id: string;
//   productId: string;
//   type: "Add" | "Remove";
//   quantity: number;
//   previousStock: number;
//   newStock: number;
//   reason?: string;
//   createdAt?: Timestamp | null;
// };

// /** Product activity (edit / stock / create) */
// export type ProductActivity = {
//   id: string;
//   productId: string;
//   action: "created" | "updated" | "stock_add" | "stock_remove" | "deleted";
//   summary: string;
//   details?: string;
//   createdAt?: Timestamp | null;
// };

// const COLLECTION = "furniture_products";
// const MOVEMENTS = "furniture_stock_movements";
// const ACTIVITY = "furniture_product_activity";

// export async function getAllProducts(): Promise<FurnitureProduct[]> {
//   try {
//     const snap = await getDocs(
//       query(collection(db, COLLECTION), orderBy("createdAt", "desc"))
//     );
//     return snap.docs.map(
//       (d) => ({ id: d.id, ...d.data() } as FurnitureProduct)
//     );
//   } catch {
//     const snap = await getDocs(collection(db, COLLECTION));
//     return snap.docs.map(
//       (d) => ({ id: d.id, ...d.data() } as FurnitureProduct)
//     );
//   }
// }

// export async function getProductById(
//   id: string
// ): Promise<FurnitureProduct | null> {
//   const snap = await getDoc(doc(db, COLLECTION, id));
//   if (!snap.exists()) return null;
//   return { id: snap.id, ...snap.data() } as FurnitureProduct;
// }

// export async function createProduct(
//   data: Omit<FurnitureProduct, "id" | "createdAt" | "updatedAt">
// ): Promise<string> {
//   const ref = await addDoc(collection(db, COLLECTION), {
//     ...data,
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   });

//   await addDoc(collection(db, ACTIVITY), {
//     productId: ref.id,
//     action: "created",
//     summary: `Product created: ${data.name || "Untitled"}`,
//     details: data.sku || data.code || "",
//     createdAt: serverTimestamp(),
//   });

//   return ref.id;
// }

// export async function updateProduct(
//   id: string,
//   data: Partial<FurnitureProduct>
// ): Promise<void> {
//   await updateDoc(doc(db, COLLECTION, id), {
//     ...data,
//     updatedAt: serverTimestamp(),
//   });
// }

// export async function deleteProduct(id: string): Promise<void> {
//   await deleteDoc(doc(db, COLLECTION, id));
// }

// /** Record stock change + activity */
// export async function recordStockMovement(input: {
//   productId: string;
//   type: "Add" | "Remove";
//   quantity: number;
//   previousStock: number;
//   newStock: number;
//   reason?: string;
// }): Promise<void> {
//   await addDoc(collection(db, MOVEMENTS), {
//     productId: input.productId,
//     type: input.type,
//     quantity: input.quantity,
//     previousStock: input.previousStock,
//     newStock: input.newStock,
//     reason: input.reason || "",
//     createdAt: serverTimestamp(),
//   });

//   await addDoc(collection(db, ACTIVITY), {
//     productId: input.productId,
//     action: input.type === "Add" ? "stock_add" : "stock_remove",
//     summary:
//       input.type === "Add"
//         ? `Stock added: +${input.quantity}`
//         : `Stock removed: −${input.quantity}`,
//     details: input.reason || `Stock ${input.previousStock} → ${input.newStock}`,
//     createdAt: serverTimestamp(),
//   });
// }

// /** Record a product field edit in History */
// export async function recordProductUpdateActivity(
//   productId: string,
//   summary: string,
//   details?: string
// ): Promise<void> {
//   await addDoc(collection(db, ACTIVITY), {
//     productId,
//     action: "updated",
//     summary,
//     details: details || "",
//     createdAt: serverTimestamp(),
//   });
// }

// export async function getStockMovements(
//   productId: string
// ): Promise<StockMovement[]> {
//   try {
//     const snap = await getDocs(
//       query(
//         collection(db, MOVEMENTS),
//         where("productId", "==", productId),
//         orderBy("createdAt", "desc")
//       )
//     );
//     return snap.docs.map(
//       (d) => ({ id: d.id, ...d.data() } as StockMovement)
//     );
//   } catch {
//     // Fallback if composite index is missing
//     const snap = await getDocs(
//       query(collection(db, MOVEMENTS), where("productId", "==", productId))
//     );
//     const rows = snap.docs.map(
//       (d) => ({ id: d.id, ...d.data() } as StockMovement)
//     );
//     return rows.sort((a, b) => {
//       const ta = a.createdAt?.toMillis?.() ?? 0;
//       const tb = b.createdAt?.toMillis?.() ?? 0;
//       return tb - ta;
//     });
//   }
// }

// export async function getProductActivity(
//   productId: string
// ): Promise<ProductActivity[]> {
//   try {
//     const snap = await getDocs(
//       query(
//         collection(db, ACTIVITY),
//         where("productId", "==", productId),
//         orderBy("createdAt", "desc")
//       )
//     );
//     return snap.docs.map(
//       (d) => ({ id: d.id, ...d.data() } as ProductActivity)
//     );
//   } catch {
//     const snap = await getDocs(
//       query(collection(db, ACTIVITY), where("productId", "==", productId))
//     );
//     const rows = snap.docs.map(
//       (d) => ({ id: d.id, ...d.data() } as ProductActivity)
//     );
//     return rows.sort((a, b) => {
//       const ta = a.createdAt?.toMillis?.() ?? 0;
//       const tb = b.createdAt?.toMillis?.() ?? 0;
//       return tb - ta;
//     });
//   }
// }

// export async function getPublishedProducts(): Promise<FurnitureProduct[]> {
//   const all = await getAllProducts();
//   return all.filter(
//     (p) => p.status === "Published" || p.status === "In Stock" || !p.status
//   );
// }

// export async function getLowStockProducts(
//   threshold = 5
// ): Promise<FurnitureProduct[]> {
//   const all = await getAllProducts();
//   return all.filter(
//     (p) =>
//       (p.stock ?? 0) > 0 &&
//       (p.stock ?? 0) <= (p.minStock ?? p.reorderLevel ?? threshold)
//   );
// }

// export async function getOutOfStockProducts(): Promise<FurnitureProduct[]> {
//   const all = await getAllProducts();
//   return all.filter((p) => (p.stock ?? 0) <= 0);
// }

// export async function getAgeingProducts(
//   daysThreshold = 10
// ): Promise<(FurnitureProduct & { daysPublished: number })[]> {
//   const published = await getPublishedProducts();
//   const now = Date.now();

//   return published
//     .map((p) => {
//       const publishedAt =
//         p.publishedAt?.toMillis?.() ?? p.createdAt?.toMillis?.() ?? now;
//       const days = Math.floor((now - publishedAt) / (1000 * 60 * 60 * 24));
//       return { ...p, daysPublished: days };
//     })
//     .filter((p) => p.daysPublished >= daysThreshold)
//     .sort((a, b) => b.daysPublished - a.daysPublished);
// }

// /**
//  * Decrease stock on furniture_products + log movement.
//  * Safe if product missing (no throw).
//  */
// export async function decrementProductStock(input: {
//   productId?: string;
//   productName?: string;
//   quantity: number;
//   reason?: string;
// }): Promise<boolean> {
//   const qty = Math.max(0, Math.floor(Number(input.quantity) || 0));
//   if (qty <= 0) return false;

//   let product: FurnitureProduct | null = null;

//   if (input.productId) {
//     product = await getProductById(input.productId);
//   }

//   if (!product && input.productName) {
//     const all = await getAllProducts();
//     const name = input.productName.toLowerCase().trim();
//     product =
//       all.find((p) => p.name?.toLowerCase().trim() === name) ||
//       all.find((p) => (p.sku || p.code || "").toLowerCase() === name) ||
//       null;
//   }

//   if (!product) {
//     console.warn("decrementProductStock: product not found", input);
//     return false;
//   }

//   const previous = Number(product.stock ?? 0) || 0;
//   const next = Math.max(0, previous - qty);

//   await updateProduct(product.id, { stock: next });

//   try {
//     await recordStockMovement({
//       productId: product.id,
//       type: "Remove",
//       quantity: qty,
//       previousStock: previous,
//       newStock: next,
//       reason: input.reason || "Order delivery",
//     });
//   } catch (e) {
//     console.warn("recordStockMovement failed:", e);
//   }

//   return true;
// }

// /**
//  * Restore stock (e.g. cancel after delivery).
//  */
// export async function incrementProductStock(input: {
//   productId?: string;
//   productName?: string;
//   quantity: number;
//   reason?: string;
// }): Promise<boolean> {
//   const qty = Math.max(0, Math.floor(Number(input.quantity) || 0));
//   if (qty <= 0) return false;

//   let product: FurnitureProduct | null = null;
//   if (input.productId) product = await getProductById(input.productId);

//   if (!product && input.productName) {
//     const all = await getAllProducts();
//     const name = input.productName.toLowerCase().trim();
//     product =
//       all.find((p) => p.name?.toLowerCase().trim() === name) || null;
//   }

//   if (!product) return false;

//   const previous = Number(product.stock ?? 0) || 0;
//   const next = previous + qty;

//   await updateProduct(product.id, { stock: next });

//   try {
//     await recordStockMovement({
//       productId: product.id,
//       type: "Add",
//       quantity: qty,
//       previousStock: previous,
//       newStock: next,
//       reason: input.reason || "Stock restore",
//     });
//   } catch {
//     /* ignore */
//   }

//   return true;
// }

// /**
//  * Apply stock deduction for a delivered order (all line items).
//  */
// export async function applyDeliveryStockDeduction(order: {
//   orderNo?: string;
//   product?: string;
//   productName?: string;
//   quantity?: number;
//   items?: {
//     productId?: string;
//     name?: string;
//     qty?: number;
//     quantity?: number;
//   }[];
// }): Promise<void> {
//   const reason = `Delivered order ${order.orderNo || ""}`.trim();
//   const items = order.items || [];

//   if (items.length > 0) {
//     for (const item of items) {
//       await decrementProductStock({
//         productId: item.productId,
//         productName: item.name,
//         quantity: Number(item.qty ?? item.quantity ?? 1) || 1,
//         reason,
//       });
//     }
//     return;
//   }

//   await decrementProductStock({
//     productName: order.product || order.productName,
//     quantity: Number(order.quantity) || 1,
//     reason,
//   });
// }


import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  where,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/core/config/firebaseClient";

export type FurnitureProduct = {
  id: string;
  name: string;
  sku?: string;
  code?: string;
  category?: string;
  subcategory?: string;
  material?: string;
  finish?: string;
  color?: string;
  dimensions?: string;
  description?: string;
  price?: number;
  sellingPrice?: number;
  costPrice?: number;
  stock?: number;
  unit?: string;
  minStock?: number;
  reorderLevel?: number;
  status?: string;
  supplier?: string;
  location?: string;
  warehouseLocation?: string;
  imageUrl?: string;
  image?: string;
  leadTime?: string;
  warranty?: string;
  salesCount?: number;
  revenue?: number;
  publishedAt?: Timestamp | null;
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
};

/** Stock in / out row */
export type StockMovement = {
  id: string;
  productId: string;
  type: "Add" | "Remove";
  quantity: number;
  previousStock: number;
  newStock: number;
  reason?: string;
  createdAt?: Timestamp | null;
};

/** Product activity (edit / stock / create) */
export type ProductActivity = {
  id: string;
  productId: string;
  action: "created" | "updated" | "stock_add" | "stock_remove" | "deleted";
  summary: string;
  details?: string;
  createdAt?: Timestamp | null;
};

const COLLECTION = "furniture_products";
const MOVEMENTS = "furniture_stock_movements";
const ACTIVITY = "furniture_product_activity";

function matchProductByKey(
  products: FurnitureProduct[],
  key: string
): FurnitureProduct | null {
  const k = key.toLowerCase().trim();
  if (!k) return null;

  return (
    products.find((p) => p.name?.toLowerCase().trim() === k) ||
    products.find(
      (p) =>
        (p.sku || "").toLowerCase().trim() === k ||
        (p.code || "").toLowerCase().trim() === k
    ) ||
    products.find((p) => p.name?.toLowerCase().includes(k)) ||
    null
  );
}

export async function getAllProducts(): Promise<FurnitureProduct[]> {
  try {
    const snap = await getDocs(
      query(collection(db, COLLECTION), orderBy("createdAt", "desc"))
    );
    return snap.docs.map(
      (d) => ({ id: d.id, ...d.data() } as FurnitureProduct)
    );
  } catch {
    const snap = await getDocs(collection(db, COLLECTION));
    return snap.docs.map(
      (d) => ({ id: d.id, ...d.data() } as FurnitureProduct)
    );
  }
}

export async function getProductById(
  id: string
): Promise<FurnitureProduct | null> {
  const snap = await getDoc(doc(db, COLLECTION, id));
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() } as FurnitureProduct;
}

export async function createProduct(
  data: Omit<FurnitureProduct, "id" | "createdAt" | "updatedAt">
): Promise<string> {
  const ref = await addDoc(collection(db, COLLECTION), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  await addDoc(collection(db, ACTIVITY), {
    productId: ref.id,
    action: "created",
    summary: `Product created: ${data.name || "Untitled"}`,
    details: data.sku || data.code || "",
    createdAt: serverTimestamp(),
  });

  return ref.id;
}

export async function updateProduct(
  id: string,
  data: Partial<FurnitureProduct>
): Promise<void> {
  await updateDoc(doc(db, COLLECTION, id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteProduct(id: string): Promise<void> {
  await deleteDoc(doc(db, COLLECTION, id));
}

/** Record stock change + activity */
export async function recordStockMovement(input: {
  productId: string;
  type: "Add" | "Remove";
  quantity: number;
  previousStock: number;
  newStock: number;
  reason?: string;
}): Promise<void> {
  await addDoc(collection(db, MOVEMENTS), {
    productId: input.productId,
    type: input.type,
    quantity: input.quantity,
    previousStock: input.previousStock,
    newStock: input.newStock,
    reason: input.reason || "",
    createdAt: serverTimestamp(),
  });

  await addDoc(collection(db, ACTIVITY), {
    productId: input.productId,
    action: input.type === "Add" ? "stock_add" : "stock_remove",
    summary:
      input.type === "Add"
        ? `Stock added: +${input.quantity}`
        : `Stock removed: −${input.quantity}`,
    details: input.reason || `Stock ${input.previousStock} → ${input.newStock}`,
    createdAt: serverTimestamp(),
  });
}

/** Record a product field edit in History */
export async function recordProductUpdateActivity(
  productId: string,
  summary: string,
  details?: string
): Promise<void> {
  await addDoc(collection(db, ACTIVITY), {
    productId,
    action: "updated",
    summary,
    details: details || "",
    createdAt: serverTimestamp(),
  });
}

export async function getStockMovements(
  productId: string
): Promise<StockMovement[]> {
  try {
    const snap = await getDocs(
      query(
        collection(db, MOVEMENTS),
        where("productId", "==", productId),
        orderBy("createdAt", "desc")
      )
    );
    return snap.docs.map(
      (d) => ({ id: d.id, ...d.data() } as StockMovement)
    );
  } catch {
    const snap = await getDocs(
      query(collection(db, MOVEMENTS), where("productId", "==", productId))
    );
    const rows = snap.docs.map(
      (d) => ({ id: d.id, ...d.data() } as StockMovement)
    );
    return rows.sort((a, b) => {
      const ta = a.createdAt?.toMillis?.() ?? 0;
      const tb = b.createdAt?.toMillis?.() ?? 0;
      return tb - ta;
    });
  }
}

export async function getProductActivity(
  productId: string
): Promise<ProductActivity[]> {
  try {
    const snap = await getDocs(
      query(
        collection(db, ACTIVITY),
        where("productId", "==", productId),
        orderBy("createdAt", "desc")
      )
    );
    return snap.docs.map(
      (d) => ({ id: d.id, ...d.data() } as ProductActivity)
    );
  } catch {
    const snap = await getDocs(
      query(collection(db, ACTIVITY), where("productId", "==", productId))
    );
    const rows = snap.docs.map(
      (d) => ({ id: d.id, ...d.data() } as ProductActivity)
    );
    return rows.sort((a, b) => {
      const ta = a.createdAt?.toMillis?.() ?? 0;
      const tb = b.createdAt?.toMillis?.() ?? 0;
      return tb - ta;
    });
  }
}

export async function getPublishedProducts(): Promise<FurnitureProduct[]> {
  const all = await getAllProducts();
  return all.filter(
    (p) => p.status === "Published" || p.status === "In Stock" || !p.status
  );
}

export async function getLowStockProducts(
  threshold = 5
): Promise<FurnitureProduct[]> {
  const all = await getAllProducts();
  return all.filter(
    (p) =>
      (p.stock ?? 0) > 0 &&
      (p.stock ?? 0) <= (p.minStock ?? p.reorderLevel ?? threshold)
  );
}

export async function getOutOfStockProducts(): Promise<FurnitureProduct[]> {
  const all = await getAllProducts();
  return all.filter((p) => (p.stock ?? 0) <= 0);
}

export async function getAgeingProducts(
  daysThreshold = 10
): Promise<(FurnitureProduct & { daysPublished: number })[]> {
  const published = await getPublishedProducts();
  const now = Date.now();

  return published
    .map((p) => {
      const publishedAt =
        p.publishedAt?.toMillis?.() ?? p.createdAt?.toMillis?.() ?? now;
      const days = Math.floor((now - publishedAt) / (1000 * 60 * 60 * 24));
      return { ...p, daysPublished: days };
    })
    .filter((p) => p.daysPublished >= daysThreshold)
    .sort((a, b) => b.daysPublished - a.daysPublished);
}

/**
 * Decrease stock on furniture_products + log movement.
 * Matches by productId, then name / sku / code (e.g. SOFA-001).
 */
export async function decrementProductStock(input: {
  productId?: string;
  productName?: string;
  quantity: number;
  reason?: string;
}): Promise<boolean> {
  const qty = Math.max(0, Math.floor(Number(input.quantity) || 0));
  if (qty <= 0) return false;

  let product: FurnitureProduct | null = null;

  if (input.productId) {
    product = await getProductById(input.productId);
  }

  if (!product && input.productName) {
    const all = await getAllProducts();
    product = matchProductByKey(all, input.productName);
  }

  if (!product) {
    console.warn("decrementProductStock: product not found", input);
    return false;
  }

  const previous = Number(product.stock ?? 0) || 0;
  const next = Math.max(0, previous - qty);
  const reorder = Number(product.reorderLevel ?? product.minStock ?? 0) || 0;

  let status = product.status;
  if (next <= 0) status = "Out of Stock";
  else if (next <= reorder) status = "Low Stock";
  else if (status === "Out of Stock" || status === "Low Stock") {
    status = "In Stock";
  }

  await updateProduct(product.id, { stock: next, status });

  try {
    await recordStockMovement({
      productId: product.id,
      type: "Remove",
      quantity: qty,
      previousStock: previous,
      newStock: next,
      reason: input.reason || "Order delivery",
    });
  } catch (e) {
    console.warn("recordStockMovement failed:", e);
  }

  return true;
}

/**
 * Restore stock (e.g. cancel after delivery / refund).
 */
export async function incrementProductStock(input: {
  productId?: string;
  productName?: string;
  quantity: number;
  reason?: string;
}): Promise<boolean> {
  const qty = Math.max(0, Math.floor(Number(input.quantity) || 0));
  if (qty <= 0) return false;

  let product: FurnitureProduct | null = null;
  if (input.productId) product = await getProductById(input.productId);

  if (!product && input.productName) {
    const all = await getAllProducts();
    product = matchProductByKey(all, input.productName);
  }

  if (!product) {
    console.warn("incrementProductStock: product not found", input);
    return false;
  }

  const previous = Number(product.stock ?? 0) || 0;
  const next = previous + qty;
  const reorder = Number(product.reorderLevel ?? product.minStock ?? 0) || 0;

  let status = product.status;
  if (next <= 0) status = "Out of Stock";
  else if (next <= reorder) status = "Low Stock";
  else status = "In Stock";

  await updateProduct(product.id, { stock: next, status });

  try {
    await recordStockMovement({
      productId: product.id,
      type: "Add",
      quantity: qty,
      previousStock: previous,
      newStock: next,
      reason: input.reason || "Stock restore",
    });
  } catch {
    /* ignore */
  }

  return true;
}

/**
 * Apply stock deduction for a delivered order (all line items).
 * Used by orderService when status → Delivered and stockDeducted is false.
 */
export async function applyDeliveryStockDeduction(order: {
  orderNo?: string;
  product?: string;
  productName?: string;
  quantity?: number;
  items?: {
    productId?: string;
    name?: string;
    qty?: number;
    quantity?: number;
  }[];
}): Promise<void> {
  const reason = `Delivered order ${order.orderNo || ""}`.trim();
  const items = order.items || [];

  if (items.length > 0) {
    for (const item of items) {
      await decrementProductStock({
        productId: item.productId,
        productName: item.name,
        quantity: Number(item.qty ?? item.quantity ?? 1) || 1,
        reason,
      });
    }
    return;
  }

  await decrementProductStock({
    productName: order.product || order.productName,
    quantity: Number(order.quantity) || 1,
    reason,
  });
}
