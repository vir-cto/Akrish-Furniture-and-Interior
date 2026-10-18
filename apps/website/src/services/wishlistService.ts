// import { db } from "@/lib/firebase";
// import {
//   doc,
//   getDoc,
//   setDoc,
//   updateDoc,
//   serverTimestamp,
// } from "firebase/firestore";

// export interface WishlistItem {
//   productId: string;
//   name: string;
//   price: number;
//   image?: string;
//   category?: string;
// }

// export interface Wishlist {
//   id: string;
//   userId: string;
//   items: WishlistItem[];
//   updatedAt?: unknown;
// }

// const WISHLIST_COLLECTION = "wishlists";

// function cleanItems(items: WishlistItem[]): WishlistItem[] {
//   return (items || [])
//     .filter((i) => i && i.productId)
//     .map((i) => ({
//       productId: String(i.productId),
//       name: String(i.name || "Product"),
//       price: Number(i.price) || 0,
//       image: i.image ? String(i.image) : "",
//       category: i.category ? String(i.category) : "",
//     }));
// }

// export function getWishlistItemCount(items: WishlistItem[]): number {
//   return (items || []).length;
// }

// export async function getWishlist(userId: string): Promise<Wishlist | null> {
//   if (!userId) throw new Error("User ID is required");

//   const ref = doc(db, WISHLIST_COLLECTION, userId);
//   const snap = await getDoc(ref);

//   if (!snap.exists()) return null;

//   const data = snap.data();
//   return {
//     id: snap.id,
//     userId,
//     items: cleanItems((data.items || []) as WishlistItem[]),
//     updatedAt: data.updatedAt,
//   };
// }

// export async function addToWishlist(
//   userId: string,
//   item: WishlistItem
// ): Promise<Wishlist> {
//   if (!userId) throw new Error("User ID is required");

//   const ref = doc(db, WISHLIST_COLLECTION, userId);
//   const snap = await getDoc(ref);

//   let items: WishlistItem[] = snap.exists()
//     ? cleanItems((snap.data().items || []) as WishlistItem[])
//     : [];

//   const exists = items.some((i) => i.productId === item.productId);
//   if (!exists) {
//     items = [
//       ...items,
//       {
//         productId: item.productId,
//         name: item.name,
//         price: Number(item.price) || 0,
//         image: item.image || "",
//         category: item.category || "",
//       },
//     ];
//   }

//   await setDoc(
//     ref,
//     {
//       userId,
//       items,
//       updatedAt: serverTimestamp(),
//     },
//     { merge: true }
//   );

//   return { id: userId, userId, items };
// }

// export async function removeFromWishlist(
//   userId: string,
//   productId: string
// ): Promise<Wishlist> {
//   if (!userId) throw new Error("User ID is required");

//   const ref = doc(db, WISHLIST_COLLECTION, userId);
//   const snap = await getDoc(ref);

//   if (!snap.exists()) {
//     return { id: userId, userId, items: [] };
//   }

//   const items = cleanItems(
//     ((snap.data().items || []) as WishlistItem[]).filter(
//       (i) => i.productId !== productId
//     )
//   );

//   await updateDoc(ref, {
//     items,
//     updatedAt: serverTimestamp(),
//   });

//   return { id: userId, userId, items };
// }

// export async function isInWishlist(
//   userId: string,
//   productId: string
// ): Promise<boolean> {
//   const list = await getWishlist(userId);
//   return Boolean(list?.items?.some((i) => i.productId === productId));
// }

// export async function clearWishlist(userId: string): Promise<void> {
//   if (!userId) throw new Error("User ID is required");

//   const ref = doc(db, WISHLIST_COLLECTION, userId);
//   await setDoc(
//     ref,
//     {
//       userId,
//       items: [],
//       updatedAt: serverTimestamp(),
//     },
//     { merge: true }
//   );
// }

import { db } from "@/lib/firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

export interface WishlistItem {
  productId: string;
  name: string;
  price: number;
  image?: string;
  category?: string;
}

export interface Wishlist {
  id: string;
  userId: string;
  items: WishlistItem[];
  updatedAt?: unknown;
}

const COLLECTION = "wishlists";

function cleanItem(
  item: Partial<WishlistItem> & { productId: string; name: string; price: number }
): WishlistItem {
  const cleaned: WishlistItem = {
    productId: String(item.productId),
    name: String(item.name || "Product"),
    price: Number(item.price || 0),
  };
  if (item.image) cleaned.image = String(item.image);
  if (item.category) cleaned.category = String(item.category);
  return cleaned;
}

export async function getWishlist(userId: string): Promise<Wishlist | null> {
  if (!userId) throw new Error("User ID is required");
  const ref = doc(db, COLLECTION, userId);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  const data = snap.data();
  return {
    id: snap.id,
    userId,
    items: ((data.items || []) as WishlistItem[]).map((i) =>
      cleanItem({ ...i, productId: i.productId, name: i.name, price: i.price })
    ),
    updatedAt: data.updatedAt,
  };
}

export async function addToWishlist(
  userId: string,
  item: Partial<WishlistItem> & {
    productId: string;
    name: string;
    price: number;
  }
): Promise<Wishlist> {
  if (!userId) throw new Error("User ID is required");
  const newItem = cleanItem(item);
  const ref = doc(db, COLLECTION, userId);
  const snap = await getDoc(ref);
  let items: WishlistItem[] = [];
  if (snap.exists()) {
    items = (snap.data().items || []) as WishlistItem[];
  }
  if (!items.some((i) => i.productId === newItem.productId)) {
    items.push(newItem);
  }
  await setDoc(ref, {
    userId,
    items,
    updatedAt: serverTimestamp(),
  });
  return { id: userId, userId, items };
}

export async function removeFromWishlist(
  userId: string,
  productId: string
): Promise<Wishlist> {
  if (!userId) throw new Error("User ID is required");
  const ref = doc(db, COLLECTION, userId);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    return { id: userId, userId, items: [] };
  }
  const items = ((snap.data().items || []) as WishlistItem[]).filter(
    (i) => i.productId !== productId
  );
  await updateDoc(ref, {
    items,
    updatedAt: serverTimestamp(),
  });
  return { id: userId, userId, items };
}
