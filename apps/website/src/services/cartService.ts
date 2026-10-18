// import { db } from "@/lib/firebase";
// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   setDoc,
//   deleteDoc,
//   updateDoc,
//   query,
//   where,
//   serverTimestamp,
// } from "firebase/firestore";

// export interface CartItem {
//   id: string;
//   productId: string;
//   name: string;
//   price: number;
//   quantity: number;
//   image?: string;
//   category?: string;
//   variant?: string;
// }

// export interface Cart {
//   id: string;
//   userId: string;
//   items: CartItem[];
//   totalItems: number;
//   totalAmount: number;
//   updatedAt?: unknown;
// }

// const CART_COLLECTION = "carts";

// /**
//  * Calculate total number of items in the cart.
//  */
// export function getCartItemCount(items: CartItem[]): number {
//   return items.reduce((total, item) => total + item.quantity, 0);
// }

// /**
//  * Calculate total cart amount.
//  */
// export function getCartTotal(items: CartItem[]): number {
//   return items.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );
// }

// /**
//  * Get the current user's cart.
//  */
// export async function getCart(userId: string): Promise<Cart | null> {
//   if (!userId) {
//     throw new Error("User ID is required");
//   }

//   const cartRef = doc(db, CART_COLLECTION, userId);
//   const cartSnapshot = await getDoc(cartRef);

//   if (!cartSnapshot.exists()) {
//     return null;
//   }

//   const data = cartSnapshot.data();

//   return {
//     id: cartSnapshot.id,
//     userId,
//     items: (data.items || []) as CartItem[],
//     totalItems: data.totalItems || 0,
//     totalAmount: data.totalAmount || 0,
//     updatedAt: data.updatedAt,
//   };
// }

// /**
//  * Add a product to the cart.
//  */
// export async function addToCart(
//   userId: string,
//   item: CartItem
// ): Promise<Cart> {
//   if (!userId) {
//     throw new Error("User ID is required");
//   }

//   const cartRef = doc(db, CART_COLLECTION, userId);
//   const cartSnapshot = await getDoc(cartRef);

//   let items: CartItem[] = [];

//   if (cartSnapshot.exists()) {
//     items = (cartSnapshot.data().items || []) as CartItem[];
//   }

//   const existingItemIndex = items.findIndex(
//     (cartItem) =>
//       cartItem.productId === item.productId &&
//       cartItem.variant === item.variant
//   );

//   if (existingItemIndex >= 0) {
//     items[existingItemIndex] = {
//       ...items[existingItemIndex],
//       quantity: items[existingItemIndex].quantity + item.quantity,
//     };
//   } else {
//     items.push(item);
//   }

//   const totalItems = getCartItemCount(items);
//   const totalAmount = getCartTotal(items);

//   await setDoc(cartRef, {
//     userId,
//     items,
//     totalItems,
//     totalAmount,
//     updatedAt: serverTimestamp(),
//   });

//   return {
//     id: userId,
//     userId,
//     items,
//     totalItems,
//     totalAmount,
//   };
// }

// /**
//  * Update the quantity of an existing cart item.
//  */
// export async function updateCartItem(
//   userId: string,
//   productId: string,
//   quantity: number,
//   variant?: string
// ): Promise<Cart> {
//   if (!userId) {
//     throw new Error("User ID is required");
//   }

//   if (quantity < 1) {
//     return removeFromCart(userId, productId, variant);
//   }

//   const cartRef = doc(db, CART_COLLECTION, userId);
//   const cartSnapshot = await getDoc(cartRef);

//   if (!cartSnapshot.exists()) {
//     throw new Error("Cart not found");
//   }

//   const data = cartSnapshot.data();
//   const items = [...((data.items || []) as CartItem[])];

//   const itemIndex = items.findIndex(
//     (item) =>
//       item.productId === productId && item.variant === variant
//   );

//   if (itemIndex === -1) {
//     throw new Error("Product not found in cart");
//   }

//   items[itemIndex] = {
//     ...items[itemIndex],
//     quantity,
//   };

//   const totalItems = getCartItemCount(items);
//   const totalAmount = getCartTotal(items);

//   await updateDoc(cartRef, {
//     items,
//     totalItems,
//     totalAmount,
//     updatedAt: serverTimestamp(),
//   });

//   return {
//     id: userId,
//     userId,
//     items,
//     totalItems,
//     totalAmount,
//   };
// }

// /**
//  * Remove a product from the cart.
//  */
// export async function removeFromCart(
//   userId: string,
//   productId: string,
//   variant?: string
// ): Promise<Cart> {
//   if (!userId) {
//     throw new Error("User ID is required");
//   }

//   const cartRef = doc(db, CART_COLLECTION, userId);
//   const cartSnapshot = await getDoc(cartRef);

//   if (!cartSnapshot.exists()) {
//     return {
//       id: userId,
//       userId,
//       items: [],
//       totalItems: 0,
//       totalAmount: 0,
//     };
//   }

//   const data = cartSnapshot.data();

//   const items = ((data.items || []) as CartItem[]).filter(
//     (item) =>
//       !(
//         item.productId === productId &&
//         item.variant === variant
//       )
//   );

//   const totalItems = getCartItemCount(items);
//   const totalAmount = getCartTotal(items);

//   await updateDoc(cartRef, {
//     items,
//     totalItems,
//     totalAmount,
//     updatedAt: serverTimestamp(),
//   });

//   return {
//     id: userId,
//     userId,
//     items,
//     totalItems,
//     totalAmount,
//   };
// }

// /**
//  * Clear all items from the cart.
//  */
// export async function clearCart(userId: string): Promise<void> {
//   if (!userId) {
//     throw new Error("User ID is required");
//   }

//   const cartRef = doc(db, CART_COLLECTION, userId);

//   await setDoc(cartRef, {
//     userId,
//     items: [],
//     totalItems: 0,
//     totalAmount: 0,
//     updatedAt: serverTimestamp(),
//   });
// }

// /**
//  * Get all carts.
//  * Useful for admin/order management pages.
//  */
// export async function getAllCarts(): Promise<Cart[]> {
//   const cartsRef = collection(db, CART_COLLECTION);
//   const snapshot = await getDocs(cartsRef);

//   return snapshot.docs.map((cartDoc) => {
//     const data = cartDoc.data();

//     return {
//       id: cartDoc.id,
//       userId: data.userId || cartDoc.id,
//       items: (data.items || []) as CartItem[],
//       totalItems: data.totalItems || 0,
//       totalAmount: data.totalAmount || 0,
//       updatedAt: data.updatedAt,
//     };
//   });
// }

// /**
//  * Get a cart by user ID.
//  */
// export async function getCartByUserId(
//   userId: string
// ): Promise<Cart | null> {
//   if (!userId) {
//     throw new Error("User ID is required");
//   }

//   const cartsRef = collection(db, CART_COLLECTION);

//   const cartQuery = query(
//     cartsRef,
//     where("userId", "==", userId)
//   );

//   const snapshot = await getDocs(cartQuery);

//   if (snapshot.empty) {
//     return null;
//   }

//   const cartDoc = snapshot.docs[0];
//   const data = cartDoc.data();

//   return {
//     id: cartDoc.id,
//     userId: data.userId || userId,
//     items: (data.items || []) as CartItem[],
//     totalItems: data.totalItems || 0,
//     totalAmount: data.totalAmount || 0,
//     updatedAt: data.updatedAt,
//   };
// }

// /**
//  * Delete the entire cart document.
//  */
// export async function deleteCart(userId: string): Promise<void> {
//   if (!userId) {
//     throw new Error("User ID is required");
//   }

//   const cartRef = doc(db, CART_COLLECTION, userId);
//   await deleteDoc(cartRef);
// }

// import { db } from "@/lib/firebase";
// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   setDoc,
//   updateDoc,
//   serverTimestamp,
// } from "firebase/firestore";

// export interface CartItem {
//   id: string;
//   productId: string;
//   name: string;
//   price: number;
//   quantity: number;
//   image?: string;
//   category?: string;
//   variant?: string;
//   leadTimeDays?: number; // ← add this
// }

// export interface Cart {
//   id: string;
//   userId: string;
//   items: CartItem[];
//   totalItems: number;
//   totalAmount: number;
//   updatedAt?: unknown;
// }

// const CART_COLLECTION = "carts";

// // /** Remove undefined fields — Firestore does not allow them */
// // function cleanItem(item: Partial<CartItem> & { productId: string; name: string; price: number; quantity: number }): CartItem {
// //   const productId = String(item.productId || item.id || "");
// //   const cleaned: CartItem = {
// //     id: String(item.id || productId),
// //     productId,
// //     name: String(item.name || "Product"),
// //     price: Number(item.price || 0),
// //     quantity: Math.max(1, Number(item.quantity || 1)),
// //   };

// //   if (item.image) cleaned.image = String(item.image);
// //   if (item.category) cleaned.category = String(item.category);
// //   if (item.variant) cleaned.variant = String(item.variant);

// //   return cleaned;
// // }

// function cleanItem(item: Partial<CartItem> & {
//   productId: string;
//   name: string;
//   price: number;
// }): CartItem {
//   const cleaned: CartItem = {
//     productId: String(item.productId),
//     name: String(item.name || "Product"),
//     price: Number(item.price || 0),
//     quantity: Math.max(1, Number(item.quantity) || 1),
//   };
//   if (item.image) cleaned.image = String(item.image);
//   if (item.category) cleaned.category = String(item.category);
//   if (item.variant) cleaned.variant = String(item.variant);
//   if (item.leadTimeDays && Number(item.leadTimeDays) > 0) {
//     cleaned.leadTimeDays = Math.floor(Number(item.leadTimeDays));
//   }
//   return cleaned;
// }

// function cleanItems(items: CartItem[]): CartItem[] {
//   return items.map((item) => cleanItem(item));
// }

// export function getCartItemCount(items: CartItem[]): number {
//   return items.reduce((total, item) => total + item.quantity, 0);
// }

// export function getCartTotal(items: CartItem[]): number {
//   return items.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );
// }

// export async function getCart(userId: string): Promise<Cart | null> {
//   if (!userId) {
//     throw new Error("User ID is required");
//   }

//   const cartRef = doc(db, CART_COLLECTION, userId);
//   const cartSnapshot = await getDoc(cartRef);

//   if (!cartSnapshot.exists()) {
//     return null;
//   }

//   const data = cartSnapshot.data();

//   return {
//     id: cartSnapshot.id,
//     userId,
//     items: cleanItems((data.items || []) as CartItem[]),
//     totalItems: data.totalItems || 0,
//     totalAmount: data.totalAmount || 0,
//     updatedAt: data.updatedAt,
//   };
// }

// export async function addToCart(
//   userId: string,
//   item: Partial<CartItem> & {
//     productId: string;
//     name: string;
//     price: number;
//     quantity: number;
//   }
// ): Promise<Cart> {
//   if (!userId) {
//     throw new Error("User ID is required");
//   }

//   const newItem = cleanItem(item);
//   const cartRef = doc(db, CART_COLLECTION, userId);
//   const cartSnapshot = await getDoc(cartRef);

//   let items: CartItem[] = [];

//   if (cartSnapshot.exists()) {
//     items = cleanItems((cartSnapshot.data().items || []) as CartItem[]);
//   }

//   const existingItemIndex = items.findIndex(
//     (cartItem) =>
//       cartItem.productId === newItem.productId &&
//       (cartItem.variant || "") === (newItem.variant || "")
//   );

//   if (existingItemIndex >= 0) {
//     items[existingItemIndex] = {
//       ...items[existingItemIndex],
//       quantity: items[existingItemIndex].quantity + newItem.quantity,
//     };
//   } else {
//     items.push(newItem);
//   }

//   const totalItems = getCartItemCount(items);
//   const totalAmount = getCartTotal(items);

//   await setDoc(cartRef, {
//     userId,
//     items,
//     totalItems,
//     totalAmount,
//     updatedAt: serverTimestamp(),
//   });

//   return {
//     id: userId,
//     userId,
//     items,
//     totalItems,
//     totalAmount,
//   };
// }

// export async function updateCartItem(
//   userId: string,
//   productId: string,
//   quantity: number,
//   variant?: string
// ): Promise<Cart> {
//   if (!userId) {
//     throw new Error("User ID is required");
//   }

//   if (quantity < 1) {
//     return removeFromCart(userId, productId, variant);
//   }

//   const cartRef = doc(db, CART_COLLECTION, userId);
//   const cartSnapshot = await getDoc(cartRef);

//   if (!cartSnapshot.exists()) {
//     throw new Error("Cart not found");
//   }

//   const items = cleanItems([
//     ...((cartSnapshot.data().items || []) as CartItem[]),
//   ]);

//   const itemIndex = items.findIndex(
//     (item) =>
//       item.productId === productId &&
//       (item.variant || "") === (variant || "")
//   );

//   if (itemIndex === -1) {
//     throw new Error("Product not found in cart");
//   }

//   items[itemIndex] = {
//     ...items[itemIndex],
//     quantity,
//   };

//   const totalItems = getCartItemCount(items);
//   const totalAmount = getCartTotal(items);

//   await updateDoc(cartRef, {
//     items,
//     totalItems,
//     totalAmount,
//     updatedAt: serverTimestamp(),
//   });

//   return {
//     id: userId,
//     userId,
//     items,
//     totalItems,
//     totalAmount,
//   };
// }

// export async function removeFromCart(
//   userId: string,
//   productId: string,
//   variant?: string
// ): Promise<Cart> {
//   if (!userId) {
//     throw new Error("User ID is required");
//   }

//   const cartRef = doc(db, CART_COLLECTION, userId);
//   const cartSnapshot = await getDoc(cartRef);

//   if (!cartSnapshot.exists()) {
//     return {
//       id: userId,
//       userId,
//       items: [],
//       totalItems: 0,
//       totalAmount: 0,
//     };
//   }

//   const items = cleanItems(
//     ((cartSnapshot.data().items || []) as CartItem[]).filter(
//       (item) =>
//         !(
//           item.productId === productId &&
//           (item.variant || "") === (variant || "")
//         )
//     )
//   );

//   const totalItems = getCartItemCount(items);
//   const totalAmount = getCartTotal(items);

//   await updateDoc(cartRef, {
//     items,
//     totalItems,
//     totalAmount,
//     updatedAt: serverTimestamp(),
//   });

//   return {
//     id: userId,
//     userId,
//     items,
//     totalItems,
//     totalAmount,
//   };
// }

// export async function clearCart(userId: string): Promise<void> {
//   if (!userId) {
//     throw new Error("User ID is required");
//   }

//   const cartRef = doc(db, CART_COLLECTION, userId);

//   await setDoc(cartRef, {
//     userId,
//     items: [],
//     totalItems: 0,
//     totalAmount: 0,
//     updatedAt: serverTimestamp(),
//   });
// }


import { db } from "@/lib/firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  category?: string;
  variant?: string;
  leadTimeDays?: number;
}

export interface Cart {
  id: string;
  userId: string;
  items: CartItem[];
  totalItems: number;
  totalAmount: number;
  updatedAt?: unknown;
}

const CART_COLLECTION = "carts";

function cleanItem(
  item: Partial<CartItem> & {
    productId: string;
    name: string;
    price: number;
  }
): CartItem {
  const productId = String(item.productId || item.id || "");
  const cleaned: CartItem = {
    id: String(item.id || productId),
    productId,
    name: String(item.name || "Product"),
    price: Number(item.price || 0),
    quantity: Math.max(1, Number(item.quantity) || 1),
  };

  if (item.image) cleaned.image = String(item.image);
  if (item.category) cleaned.category = String(item.category);
  if (item.variant) cleaned.variant = String(item.variant);
  if (item.leadTimeDays != null && Number(item.leadTimeDays) > 0) {
    cleaned.leadTimeDays = Math.floor(Number(item.leadTimeDays));
  }

  return cleaned;
}

function cleanItems(items: CartItem[]): CartItem[] {
  return items.map((item) => cleanItem(item));
}

export function getCartItemCount(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.quantity, 0);
}

export function getCartTotal(items: CartItem[]): number {
  return items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

export async function getCart(userId: string): Promise<Cart | null> {
  if (!userId) {
    throw new Error("User ID is required");
  }

  const cartRef = doc(db, CART_COLLECTION, userId);
  const cartSnapshot = await getDoc(cartRef);

  if (!cartSnapshot.exists()) {
    return null;
  }

  const data = cartSnapshot.data();

  return {
    id: cartSnapshot.id,
    userId,
    items: cleanItems((data.items || []) as CartItem[]),
    totalItems: data.totalItems || 0,
    totalAmount: data.totalAmount || 0,
    updatedAt: data.updatedAt,
  };
}

export async function addToCart(
  userId: string,
  item: Partial<CartItem> & {
    productId: string;
    name: string;
    price: number;
    quantity?: number;
  }
): Promise<Cart> {
  if (!userId) {
    throw new Error("User ID is required");
  }

  const newItem = cleanItem({
    ...item,
    quantity: item.quantity ?? 1,
  });

  const cartRef = doc(db, CART_COLLECTION, userId);
  const cartSnapshot = await getDoc(cartRef);

  let items: CartItem[] = [];

  if (cartSnapshot.exists()) {
    items = cleanItems((cartSnapshot.data().items || []) as CartItem[]);
  }

  const existingItemIndex = items.findIndex(
    (cartItem) =>
      cartItem.productId === newItem.productId &&
      (cartItem.variant || "") === (newItem.variant || "")
  );

  if (existingItemIndex >= 0) {
    const existing = items[existingItemIndex];
    items[existingItemIndex] = {
      ...existing,
      quantity: existing.quantity + newItem.quantity,
      // refresh lead time / image if provided on re-add
      leadTimeDays: newItem.leadTimeDays ?? existing.leadTimeDays,
      image: newItem.image || existing.image,
      category: newItem.category || existing.category,
    };
  } else {
    items.push(newItem);
  }

  const totalItems = getCartItemCount(items);
  const totalAmount = getCartTotal(items);

  await setDoc(cartRef, {
    userId,
    items,
    totalItems,
    totalAmount,
    updatedAt: serverTimestamp(),
  });

  return {
    id: userId,
    userId,
    items,
    totalItems,
    totalAmount,
  };
}

export async function updateCartItem(
  userId: string,
  productId: string,
  quantity: number,
  variant?: string
): Promise<Cart> {
  if (!userId) {
    throw new Error("User ID is required");
  }

  if (quantity < 1) {
    return removeFromCart(userId, productId, variant);
  }

  const cartRef = doc(db, CART_COLLECTION, userId);
  const cartSnapshot = await getDoc(cartRef);

  if (!cartSnapshot.exists()) {
    throw new Error("Cart not found");
  }

  const items = cleanItems([
    ...((cartSnapshot.data().items || []) as CartItem[]),
  ]);

  const itemIndex = items.findIndex(
    (item) =>
      item.productId === productId &&
      (item.variant || "") === (variant || "")
  );

  if (itemIndex === -1) {
    throw new Error("Product not found in cart");
  }

  items[itemIndex] = {
    ...items[itemIndex],
    quantity,
  };

  const totalItems = getCartItemCount(items);
  const totalAmount = getCartTotal(items);

  await updateDoc(cartRef, {
    items,
    totalItems,
    totalAmount,
    updatedAt: serverTimestamp(),
  });

  return {
    id: userId,
    userId,
    items,
    totalItems,
    totalAmount,
  };
}

export async function removeFromCart(
  userId: string,
  productId: string,
  variant?: string
): Promise<Cart> {
  if (!userId) {
    throw new Error("User ID is required");
  }

  const cartRef = doc(db, CART_COLLECTION, userId);
  const cartSnapshot = await getDoc(cartRef);

  if (!cartSnapshot.exists()) {
    return {
      id: userId,
      userId,
      items: [],
      totalItems: 0,
      totalAmount: 0,
    };
  }

  const items = cleanItems(
    ((cartSnapshot.data().items || []) as CartItem[]).filter(
      (item) =>
        !(
          item.productId === productId &&
          (item.variant || "") === (variant || "")
        )
    )
  );

  const totalItems = getCartItemCount(items);
  const totalAmount = getCartTotal(items);

  await updateDoc(cartRef, {
    items,
    totalItems,
    totalAmount,
    updatedAt: serverTimestamp(),
  });

  return {
    id: userId,
    userId,
    items,
    totalItems,
    totalAmount,
  };
}

export async function clearCart(userId: string): Promise<void> {
  if (!userId) {
    throw new Error("User ID is required");
  }

  const cartRef = doc(db, CART_COLLECTION, userId);

  await setDoc(cartRef, {
    userId,
    items: [],
    totalItems: 0,
    totalAmount: 0,
    updatedAt: serverTimestamp(),
  });
}
