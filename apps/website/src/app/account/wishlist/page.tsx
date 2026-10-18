
// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import {
//   Heart,
//   ShoppingBag,
//   Trash2,
//   Loader2,
// } from "lucide-react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import {
//   getWishlist,
//   removeFromWishlist,
//   type WishlistItem,
// } from "@/services/wishlistService";
// import {
//   addToCart,
//   removeFromCart,
//   getCart,
// } from "@/services/cartService";

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// export default function AccountWishlistPage() {
//   const router = useRouter();

//   const [authUid, setAuthUid] = useState<string | null>(null);
//   const [authReady, setAuthReady] = useState(false);
//   const [items, setItems] = useState<WishlistItem[]>([]);
//   const [cartIds, setCartIds] = useState<Set<string>>(new Set());
//   const [loading, setLoading] = useState(true);
//   const [busyId, setBusyId] = useState<string | null>(null);

//   // Monitor Firebase authentication.
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//       setAuthReady(true);
//     });

//     return () => unsubscribe();
//   }, []);

//   // Load wishlist items.
//   useEffect(() => {
//     if (!authReady) return;

//     if (!authUid) {
//       router.replace(
//         "/sign-in?redirect=%2Faccount%2Fwishlist"
//       );
//       setLoading(false);
//       return;
//     }

//     let cancelled = false;

//     async function loadWishlist() {
//       try {
//         const wishlist = await getWishlist(authUid);

//         if (!cancelled) {
//           setItems(wishlist?.items || []);
//         }
//       } catch (error) {
//         console.error("Failed to load wishlist:", error);

//         if (!cancelled) {
//           setItems([]);
//         }
//       } finally {
//         if (!cancelled) {
//           setLoading(false);
//         }
//       }
//     }

//     setLoading(true);
//     loadWishlist();

//     const handleWishlistUpdated = () => {
//       loadWishlist();
//     };

//     window.addEventListener(
//       "wishlistUpdated",
//       handleWishlistUpdated
//     );

//     return () => {
//       cancelled = true;
//       window.removeEventListener(
//         "wishlistUpdated",
//         handleWishlistUpdated
//       );
//     };
//   }, [authUid, authReady, router]);

//   // Synchronize the cart.
//   useEffect(() => {
//     if (!authUid) {
//       setCartIds(new Set());
//       return;
//     }

//     let cancelled = false;

//     async function syncCart() {
//       try {
//         const cart = await getCart(authUid);
//         const ids = new Set(
//           (cart?.items || []).map((item) => item.productId)
//         );

//         if (!cancelled) {
//           setCartIds(ids);
//         }
//       } catch (error) {
//         console.error("Failed to synchronize cart:", error);

//         if (!cancelled) {
//           setCartIds(new Set());
//         }
//       }
//     }

//     syncCart();

//     const handleCartUpdated = () => {
//       syncCart();
//     };

//     window.addEventListener("cartUpdated", handleCartUpdated);

//     return () => {
//       cancelled = true;
//       window.removeEventListener(
//         "cartUpdated",
//         handleCartUpdated
//       );
//     };
//   }, [authUid]);

//   // Remove an item from the wishlist.
//   async function handleRemoveFromWishlist(productId: string) {
//     if (!authUid) {
//       router.push(
//         "/sign-in?redirect=%2Faccount%2Fwishlist"
//       );
//       return;
//     }

//     setBusyId(productId);

//     try {
//       const next = await removeFromWishlist(
//         authUid,
//         productId
//       );

//       setItems(next.items || []);

//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (error) {
//       console.error(
//         "Failed to remove item from wishlist:",
//         error
//       );
//     } finally {
//       setBusyId(null);
//     }
//   }

//   // Add an item to the cart or remove it if already present.
//   async function handleToggleCart(item: WishlistItem) {
//     if (!authUid) {
//       router.push(
//         "/sign-in?redirect=%2Faccount%2Fwishlist"
//       );
//       return;
//     }

//     const inCart = cartIds.has(item.productId);

//     setBusyId(item.productId);

//     try {
//       if (inCart) {
//         await removeFromCart(authUid, item.productId);

//         setCartIds((previous) => {
//           const next = new Set(previous);
//           next.delete(item.productId);
//           return next;
//         });
//       } else {
//         const cart = await getCart(authUid);

//         const alreadyExists = cart?.items?.some(
//           (cartItem) =>
//             cartItem.productId === item.productId
//         );

//         if (!alreadyExists) {
//           await addToCart(authUid, {
//             productId: item.productId,
//             name: item.name,
//             price: item.price,
//             quantity: 1,
//             image: item.image || "",
//             category: item.category || "",
//           });
//         }

//         setCartIds((previous) =>
//           new Set(previous).add(item.productId)
//         );
//       }

//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (error) {
//       console.error("Failed to update cart:", error);
//     } finally {
//       setBusyId(null);
//     }
//   }

//   // Loading state.
//   if (!authReady || (authUid && loading)) {
//     return (
//       <div className="flex min-h-[280px] items-center justify-center">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </div>
//     );
//   }

//   // The account layout supplies the shared sidebar and panel.
//   return (
//     <div className="w-full min-w-0">
//       <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
//         <div>
//           <h1 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
//             My Wishlist
//           </h1>

//           <p className="mt-1 text-sm text-slate-500">
//             Items you have saved for later.
//           </p>
//         </div>

//         <Link
//           href="/products"
//           className="mt-3 inline-flex min-h-[40px] w-fit items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#176b5b] hover:text-[#176b5b] sm:mt-0"
//         >
//           <ShoppingBag size={16} />
//           Continue shopping
//         </Link>
//       </div>

//       {items.length === 0 ? (
//         <div className="mt-6 rounded-xl border border-dashed border-slate-200 bg-[#fafcfb] px-4 py-12 text-center sm:mt-8 sm:py-16">
//           <Heart
//             size={36}
//             className="mx-auto text-slate-300"
//             strokeWidth={1.5}
//           />

//           <h2 className="mt-4 text-base font-semibold text-slate-900">
//             Your wishlist is empty
//           </h2>

//           <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
//             Browse our collection and save the furniture
//             pieces you love.
//           </p>

//           <Link
//             href="/products"
//             className="mt-5 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#125849]"
//           >
//             <ShoppingBag size={16} />
//             Explore Furniture
//           </Link>
//         </div>
//       ) : (
//         <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
//           {items.map((item) => {
//             const busy = busyId === item.productId;
//             const inCart = cartIds.has(item.productId);

//             return (
//               <article
//                 key={item.productId}
//                 className="min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:shadow-sm"
//               >
//                 <Link
//                   href={`/products/${item.productId}`}
//                   className="relative flex aspect-square items-center justify-center bg-slate-50"
//                 >
//                   {item.image ? (
//                     // eslint-disable-next-line @next/next/no-img-element
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="h-full w-full object-cover"
//                     />
//                   ) : (
//                     <ShoppingBag
//                       size={36}
//                       className="text-slate-300"
//                       strokeWidth={1.2}
//                     />
//                   )}
//                 </Link>

//                 <div className="p-3 sm:p-4">
//                   <p className="truncate text-[10px] font-semibold uppercase tracking-wider text-slate-400">
//                     {item.category || "Furniture"}
//                   </p>

//                   <Link href={`/products/${item.productId}`}>
//                     <h2 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-slate-900 hover:text-[#176b5b] sm:text-base">
//                       {item.name}
//                     </h2>
//                   </Link>

//                   <p className="mt-2 text-base font-bold text-slate-900">
//                     {formatCurrency(item.price)}
//                   </p>

//                   <div className="mt-4 flex gap-2">
//                     <button
//                       type="button"
//                       disabled={busy}
//                       onClick={() => handleToggleCart(item)}
//                       className={`flex min-h-[40px] min-w-0 flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-60 ${
//                         inCart
//                           ? "bg-red-600 hover:bg-red-700"
//                           : "bg-[#176b5b] hover:bg-[#125849]"
//                       }`}
//                     >
//                       {busy ? (
//                         <Loader2
//                           size={15}
//                           className="animate-spin"
//                         />
//                       ) : inCart ? (
//                         <>
//                           <Trash2 size={15} />
//                           Remove from cart
//                         </>
//                       ) : (
//                         <>
//                           <ShoppingBag size={15} />
//                           Add to cart
//                         </>
//                       )}
//                     </button>

//                     <button
//                       type="button"
//                       disabled={busy}
//                       onClick={() =>
//                         handleRemoveFromWishlist(item.productId)
//                       }
//                       className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-60"
//                       aria-label={`Remove ${item.name} from wishlist`}
//                       title="Remove from wishlist"
//                     >
//                       {busy ? (
//                         <Loader2
//                           size={16}
//                           className="animate-spin"
//                         />
//                       ) : (
//                         <Trash2 size={16} />
//                       )}
//                     </button>
//                   </div>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }



// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import {
//   Heart,
//   ShoppingBag,
//   Trash2,
//   Loader2,
// } from "lucide-react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import {
//   getWishlist,
//   removeFromWishlist,
//   type WishlistItem,
// } from "@/services/wishlistService";
// import {
//   addToCart,
//   removeFromCart,
//   getCart,
// } from "@/services/cartService";

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// export default function AccountWishlistPage() {
//   const router = useRouter();

//   const [authUid, setAuthUid] = useState<string | null>(null);
//   const [authReady, setAuthReady] = useState(false);
//   const [items, setItems] = useState<WishlistItem[]>([]);
//   const [cartIds, setCartIds] = useState<Set<string>>(new Set());
//   const [loading, setLoading] = useState(true);
//   const [busyId, setBusyId] = useState<string | null>(null);

//   // Monitor authentication.
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//       setAuthReady(true);
//     });

//     return () => unsubscribe();
//   }, []);

//   // Load wishlist after authentication is resolved.
//   useEffect(() => {
//     if (!authReady) return;

//     if (!authUid) {
//       setItems([]);
//       setLoading(false);
//       router.replace("/sign-in?redirect=%2Faccount%2Fwishlist");
//       return;
//     }

//     let cancelled = false;

//     async function loadWishlist() {
//       // Capture a guaranteed string before calling the service.
//       const uid = authUid;
//       if (!uid) return;

//       try {
//         const wishlist = await getWishlist(uid);

//         if (!cancelled) {
//           setItems(wishlist?.items ?? []);
//         }
//       } catch (error) {
//         console.error("Failed to load wishlist:", error);

//         if (!cancelled) {
//           setItems([]);
//         }
//       } finally {
//         if (!cancelled) {
//           setLoading(false);
//         }
//       }
//     }

//     setLoading(true);
//     void loadWishlist();

//     const handleWishlistUpdated = () => {
//       void loadWishlist();
//     };

//     window.addEventListener("wishlistUpdated", handleWishlistUpdated);

//     return () => {
//       cancelled = true;
//       window.removeEventListener(
//         "wishlistUpdated",
//         handleWishlistUpdated
//       );
//     };
//   }, [authUid, authReady, router]);

//   // Synchronize cart items.
//   useEffect(() => {
//     if (!authReady) return;

//     if (!authUid) {
//       setCartIds(new Set());
//       return;
//     }

//     let cancelled = false;

//     async function syncCart() {
//       // Capture and narrow the UID before calling getCart().
//       const uid = authUid;
//       if (!uid) return;

//       try {
//         const cart = await getCart(uid);

//         const ids = new Set<string>(
//           (cart?.items ?? []).map((item) => item.productId)
//         );

//         if (!cancelled) {
//           setCartIds(ids);
//         }
//       } catch (error) {
//         console.error("Failed to synchronize cart:", error);

//         if (!cancelled) {
//           setCartIds(new Set());
//         }
//       }
//     }

//     void syncCart();

//     const handleCartUpdated = () => {
//       void syncCart();
//     };

//     window.addEventListener("cartUpdated", handleCartUpdated);

//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", handleCartUpdated);
//     };
//   }, [authUid, authReady]);

//   // Remove a wishlist item.
//   async function handleRemoveFromWishlist(productId: string) {
//     const uid = authUid;

//     if (!uid) {
//       router.push("/sign-in?redirect=%2Faccount%2Fwishlist");
//       return;
//     }

//     setBusyId(productId);

//     try {
//       const next = await removeFromWishlist(uid, productId);

//       setItems(next.items ?? []);
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (error) {
//       console.error("Failed to remove wishlist item:", error);
//     } finally {
//       setBusyId(null);
//     }
//   }

//   // Add an item to cart or remove it if already present.
//   async function handleToggleCart(item: WishlistItem) {
//     const uid = authUid;

//     if (!uid) {
//       router.push("/sign-in?redirect=%2Faccount%2Fwishlist");
//       return;
//     }

//     const inCart = cartIds.has(item.productId);

//     setBusyId(item.productId);

//     try {
//       if (inCart) {
//         await removeFromCart(uid, item.productId);

//         setCartIds((previous) => {
//           const next = new Set(previous);
//           next.delete(item.productId);
//           return next;
//         });
//       } else {
//         const cart = await getCart(uid);

//         const alreadyExists = (cart?.items ?? []).some(
//           (cartItem) => cartItem.productId === item.productId
//         );

//         if (!alreadyExists) {
//           await addToCart(uid, {
//             productId: item.productId,
//             name: item.name,
//             price: item.price,
//             quantity: 1,
//             image: item.image || "",
//             category: item.category || "",
//           });
//         }

//         setCartIds((previous) => {
//           const next = new Set(previous);
//           next.add(item.productId);
//           return next;
//         });
//       }

//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (error) {
//       console.error("Failed to update cart:", error);
//     } finally {
//       setBusyId(null);
//     }
//   }

//   // Loading state.
//   if (!authReady || (authUid !== null && loading)) {
//     return (
//       <div className="flex min-h-[280px] items-center justify-center">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </div>
//     );
//   }

//   return (
//     <div className="w-full min-w-0">
//       <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
//         <div>
//           <h1 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
//             My Wishlist
//           </h1>

//           <p className="mt-1 text-sm text-slate-500">
//             Items you have saved for later.
//           </p>
//         </div>

//         <Link
//           href="/products"
//           className="mt-3 inline-flex min-h-[40px] w-fit items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#176b5b] hover:text-[#176b5b] sm:mt-0"
//         >
//           <ShoppingBag size={16} />
//           Continue shopping
//         </Link>
//       </div>

//       {items.length === 0 ? (
//         <div className="mt-6 rounded-xl border border-dashed border-slate-200 bg-[#fafcfb] px-4 py-12 text-center sm:mt-8 sm:py-16">
//           <Heart
//             size={36}
//             className="mx-auto text-slate-300"
//             strokeWidth={1.5}
//           />

//           <h2 className="mt-4 text-base font-semibold text-slate-900">
//             Your wishlist is empty
//           </h2>

//           <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
//             Browse our collection and save the furniture pieces you love.
//           </p>

//           <Link
//             href="/products"
//             className="mt-5 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#125849]"
//           >
//             <ShoppingBag size={16} />
//             Explore Furniture
//           </Link>
//         </div>
//       ) : (
//         <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
//           {items.map((item) => {
//             const busy = busyId === item.productId;
//             const inCart = cartIds.has(item.productId);

//             return (
//               <article
//                 key={item.productId}
//                 className="min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:shadow-sm"
//               >
//                 <Link
//                   href={`/products/${item.productId}`}
//                   className="relative flex aspect-square items-center justify-center bg-slate-50"
//                 >
//                   {item.image ? (
//                     // eslint-disable-next-line @next/next/no-img-element
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="h-full w-full object-cover"
//                     />
//                   ) : (
//                     <ShoppingBag
//                       size={36}
//                       className="text-slate-300"
//                       strokeWidth={1.2}
//                     />
//                   )}
//                 </Link>

//                 <div className="p-3 sm:p-4">
//                   <p className="truncate text-[10px] font-semibold uppercase tracking-wider text-slate-400">
//                     {item.category || "Furniture"}
//                   </p>

//                   <Link href={`/products/${item.productId}`}>
//                     <h2 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-slate-900 hover:text-[#176b5b] sm:text-base">
//                       {item.name}
//                     </h2>
//                   </Link>

//                   <p className="mt-2 text-base font-bold text-slate-900">
//                     {formatCurrency(item.price)}
//                   </p>

//                   <div className="mt-4 flex gap-2">
//                     <button
//                       type="button"
//                       disabled={busy}
//                       onClick={() => handleToggleCart(item)}
//                       className={`flex min-h-[40px] min-w-0 flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-60 ${
//                         inCart
//                           ? "bg-red-600 hover:bg-red-700"
//                           : "bg-[#176b5b] hover:bg-[#125849]"
//                       }`}
//                     >
//                       {busy ? (
//                         <Loader2 size={15} className="animate-spin" />
//                       ) : inCart ? (
//                         <>
//                           <Trash2 size={15} />
//                           Remove from cart
//                         </>
//                       ) : (
//                         <>
//                           <ShoppingBag size={15} />
//                           Add to cart
//                         </>
//                       )}
//                     </button>

//                     <button
//                       type="button"
//                       disabled={busy}
//                       onClick={() =>
//                         handleRemoveFromWishlist(item.productId)
//                       }
//                       className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-60"
//                       aria-label={`Remove ${item.name} from wishlist`}
//                       title="Remove from wishlist"
//                     >
//                       {busy ? (
//                         <Loader2 size={16} className="animate-spin" />
//                       ) : (
//                         <Trash2 size={16} />
//                       )}
//                     </button>
//                   </div>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import {
//   Heart,
//   ShoppingBag,
//   Trash2,
//   Loader2,
// } from "lucide-react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import {
//   getWishlist,
//   removeFromWishlist,
//   type WishlistItem,
// } from "@/services/wishlistService";
// import {
//   addToCart,
//   removeFromCart,
//   getCart,
// } from "@/services/cartService";

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// export default function AccountWishlistPage() {
//   const router = useRouter();

//   const [authUid, setAuthUid] = useState<string | null>(null);
//   const [authReady, setAuthReady] = useState(false);
//   const [items, setItems] = useState<WishlistItem[]>([]);
//   const [cartIds, setCartIds] = useState<Set<string>>(new Set());
//   const [loading, setLoading] = useState(true);
//   const [busyId, setBusyId] = useState<string | null>(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//       setAuthReady(true);
//     });
//     return () => unsubscribe();
//   }, []);

//   useEffect(() => {
//     if (!authReady) return;

//     if (!authUid) {
//       setItems([]);
//       setLoading(false);
//       router.replace("/sign-in?redirect=%2Faccount%2Fwishlist");
//       return;
//     }

//     let cancelled = false;
//     const uid = authUid;

//     async function loadWishlist() {
//       try {
//         const wishlist = await getWishlist(uid);
//         if (!cancelled) setItems(wishlist?.items ?? []);
//       } catch (error) {
//         console.error("Failed to load wishlist:", error);
//         if (!cancelled) setItems([]);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     setLoading(true);
//     void loadWishlist();

//     const onWishlistUpdated = () => {
//       void loadWishlist();
//     };
//     window.addEventListener("wishlistUpdated", onWishlistUpdated);

//     return () => {
//       cancelled = true;
//       window.removeEventListener("wishlistUpdated", onWishlistUpdated);
//     };
//   }, [authUid, authReady, router]);

//   useEffect(() => {
//     if (!authReady) return;

//     if (!authUid) {
//       setCartIds(new Set());
//       return;
//     }

//     let cancelled = false;
//     const uid = authUid;

//     async function syncCart() {
//       try {
//         const cart = await getCart(uid);
//         const ids = new Set(
//           (cart?.items ?? []).map((item) => item.productId)
//         );
//         if (!cancelled) setCartIds(ids);
//       } catch (error) {
//         console.error("Failed to synchronize cart:", error);
//         if (!cancelled) setCartIds(new Set());
//       }
//     }

//     void syncCart();

//     const onCartUpdated = () => {
//       void syncCart();
//     };
//     window.addEventListener("cartUpdated", onCartUpdated);

//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", onCartUpdated);
//     };
//   }, [authUid, authReady]);

//   async function handleRemoveFromWishlist(productId: string) {
//     if (!authUid) {
//       router.push("/sign-in?redirect=%2Faccount%2Fwishlist");
//       return;
//     }

//     setBusyId(productId);
//     try {
//       const next = await removeFromWishlist(authUid, productId);
//       setItems(next.items ?? []);
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (error) {
//       console.error("Failed to remove wishlist item:", error);
//     } finally {
//       setBusyId(null);
//     }
//   }

//   async function handleToggleCart(item: WishlistItem) {
//     if (!authUid) {
//       router.push("/sign-in?redirect=%2Faccount%2Fwishlist");
//       return;
//     }

//     const inCart = cartIds.has(item.productId);
//     setBusyId(item.productId);

//     try {
//       if (inCart) {
//         await removeFromCart(authUid, item.productId);
//         setCartIds((prev) => {
//           const next = new Set(prev);
//           next.delete(item.productId);
//           return next;
//         });
//       } else {
//         const cart = await getCart(authUid);
//         const alreadyExists = (cart?.items ?? []).some(
//           (cartItem) => cartItem.productId === item.productId
//         );

//         if (!alreadyExists) {
//           await addToCart(authUid, {
//             productId: item.productId,
//             name: item.name,
//             price: item.price,
//             quantity: 1,
//             image: item.image || "",
//             category: item.category || "",
//           });
//         }

//         setCartIds((prev) => new Set(prev).add(item.productId));
//       }

//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (error) {
//       console.error("Failed to update cart:", error);
//     } finally {
//       setBusyId(null);
//     }
//   }

//   if (!authReady || (authUid !== null && loading)) {
//     return (
//       <div className="flex min-h-[280px] items-center justify-center">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </div>
//     );
//   }

//   return (
//     <div className="w-full min-w-0">
//       <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
//         <div>
//           <h1 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
//             My Wishlist
//           </h1>
//           <p className="mt-1 text-sm text-slate-500">
//             Items you have saved for later.
//           </p>
//         </div>

//         <Link
//           href="/products"
//           className="mt-3 inline-flex min-h-[40px] w-fit items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#176b5b] hover:text-[#176b5b] sm:mt-0"
//         >
//           <ShoppingBag size={16} />
//           Continue shopping
//         </Link>
//       </div>

//       {items.length === 0 ? (
//         <div className="mt-6 rounded-xl border border-dashed border-slate-200 bg-[#fafcfb] px-4 py-12 text-center sm:mt-8 sm:py-16">
//           <Heart
//             size={36}
//             className="mx-auto text-slate-300"
//             strokeWidth={1.5}
//           />
//           <h2 className="mt-4 text-base font-semibold text-slate-900">
//             Your wishlist is empty
//           </h2>
//           <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
//             Browse our collection and save the furniture pieces you love.
//           </p>
//           <Link
//             href="/products"
//             className="mt-5 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#125849]"
//           >
//             <ShoppingBag size={16} />
//             Explore Furniture
//           </Link>
//         </div>
//       ) : (
//         /* 2 per row on mobile */
//         <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-3">
//           {items.map((item) => {
//             const busy = busyId === item.productId;
//             const inCart = cartIds.has(item.productId);

//             return (
//               <article
//                 key={item.productId}
//                 className="min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:shadow-sm"
//               >
//                 <Link
//                   href={`/products/${item.productId}`}
//                   className="relative flex aspect-square items-center justify-center bg-slate-50"
//                 >
//                   {item.image ? (
//                     // eslint-disable-next-line @next/next/no-img-element
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="h-full w-full object-cover"
//                     />
//                   ) : (
//                     <ShoppingBag
//                       size={32}
//                       className="text-slate-300"
//                       strokeWidth={1.2}
//                     />
//                   )}
//                 </Link>

//                 <div className="p-2.5 sm:p-4">
//                   <p className="truncate text-[9px] font-semibold uppercase tracking-wider text-slate-400 sm:text-[10px]">
//                     {item.category || "Furniture"}
//                   </p>

//                   <Link href={`/products/${item.productId}`}>
//                     <h2 className="mt-1 line-clamp-2 text-xs font-semibold leading-snug text-slate-900 hover:text-[#176b5b] sm:text-base">
//                       {item.name}
//                     </h2>
//                   </Link>

//                   <p className="mt-1.5 text-sm font-bold text-slate-900 sm:mt-2 sm:text-base">
//                     {formatCurrency(item.price)}
//                   </p>

//                   <div className="mt-3 flex gap-1.5 sm:mt-4 sm:gap-2">
//                     <button
//                       type="button"
//                       disabled={busy}
//                       onClick={() => handleToggleCart(item)}
//                       className={`flex h-9 min-w-0 flex-1 items-center justify-center gap-1 rounded-lg px-2 text-[11px] font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-60 sm:h-10 sm:gap-1.5 sm:px-3 sm:text-xs ${
//                         inCart
//                           ? "bg-red-600 hover:bg-red-700"
//                           : "bg-[#176b5b] hover:bg-[#125849]"
//                       }`}
//                     >
//                       {busy ? (
//                         <Loader2 size={14} className="animate-spin" />
//                       ) : inCart ? (
//                         <>
//                           <Trash2 size={13} className="shrink-0" />
//                           <span className="truncate">Remove</span>
//                         </>
//                       ) : (
//                         <>
//                           <ShoppingBag size={13} className="shrink-0" />
//                           <span className="truncate">Add to cart</span>
//                         </>
//                       )}
//                     </button>

//                     <button
//                       type="button"
//                       disabled={busy}
//                       onClick={() =>
//                         handleRemoveFromWishlist(item.productId)
//                       }
//                       className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-60 sm:h-10 sm:w-10"
//                       aria-label={`Remove ${item.name} from wishlist`}
//                       title="Remove from wishlist"
//                     >
//                       {busy ? (
//                         <Loader2 size={15} className="animate-spin" />
//                       ) : (
//                         <Trash2 size={15} />
//                       )}
//                     </button>
//                   </div>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Heart,
  ShoppingBag,
  Trash2,
  Loader2,
} from "lucide-react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import {
  getWishlist,
  removeFromWishlist,
  type WishlistItem,
} from "@/services/wishlistService";
import {
  addToCart,
  removeFromCart,
  getCart,
} from "@/services/cartService";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function WishlistPage() {
  const router = useRouter();
  const [authUid, setAuthUid] = useState<string | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [cartIds, setCartIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<string | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setAuthUid(user?.uid ?? null);
      setAuthReady(true);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!authReady) return;

    if (!authUid) {
      setItems([]);
      setLoading(false);
      router.replace("/sign-in?redirect=%2Fwishlist");
      return;
    }

    let cancelled = false;
    const uid = authUid;

    async function loadWishlist() {
      try {
        const list = await getWishlist(uid);
        if (!cancelled) setItems(list?.items ?? []);
      } catch (err) {
        console.error(err);
        if (!cancelled) setItems([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    setLoading(true);
    void loadWishlist();

    const onWishlistUpdated = () => {
      void loadWishlist();
    };
    window.addEventListener("wishlistUpdated", onWishlistUpdated);

    return () => {
      cancelled = true;
      window.removeEventListener("wishlistUpdated", onWishlistUpdated);
    };
  }, [authUid, authReady, router]);

  useEffect(() => {
    if (!authUid) {
      setCartIds(new Set());
      return;
    }

    let cancelled = false;
    const uid = authUid;

    async function syncCart() {
      try {
        const cart = await getCart(uid);
        const ids = new Set((cart?.items ?? []).map((i) => i.productId));
        if (!cancelled) setCartIds(ids);
      } catch {
        if (!cancelled) setCartIds(new Set());
      }
    }

    void syncCart();

    const onCartUpdated = () => {
      void syncCart();
    };
    window.addEventListener("cartUpdated", onCartUpdated);

    return () => {
      cancelled = true;
      window.removeEventListener("cartUpdated", onCartUpdated);
    };
  }, [authUid]);

  async function handleRemoveFromWishlist(productId: string) {
    if (!authUid) {
      router.push("/sign-in?redirect=%2Fwishlist");
      return;
    }

    setBusyId(productId);
    try {
      const next = await removeFromWishlist(authUid, productId);
      setItems(next.items ?? []);
      window.dispatchEvent(new Event("wishlistUpdated"));
    } catch (err) {
      console.error(err);
    } finally {
      setBusyId(null);
    }
  }

  async function handleToggleCart(item: WishlistItem) {
    if (!authUid) {
      router.push("/sign-in?redirect=%2Fwishlist");
      return;
    }

    const inCart = cartIds.has(item.productId);
    setBusyId(item.productId);

    try {
      if (inCart) {
        await removeFromCart(authUid, item.productId);
        setCartIds((prev) => {
          const next = new Set(prev);
          next.delete(item.productId);
          return next;
        });
      } else {
        const cart = await getCart(authUid);
        const already = (cart?.items ?? []).some(
          (i) => i.productId === item.productId
        );
        if (!already) {
          await addToCart(authUid, {
            productId: item.productId,
            name: item.name,
            price: item.price,
            quantity: 1,
            image: item.image || "",
            category: item.category || "",
          });
        }
        setCartIds((prev) => new Set(prev).add(item.productId));
      }
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (err) {
      console.error(err);
    } finally {
      setBusyId(null);
    }
  }

  if (!authReady || (authUid !== null && loading)) {
    return (
      <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
        <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f9f8]">
      <div className="mx-auto max-w-6xl px-3 py-8 sm:px-6 sm:py-14 lg:px-8">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Your Wishlist
            </h1>
            <p className="mt-1.5 text-sm text-slate-500">
              Items you have saved for later.
            </p>
          </div>
          <Link
            href="/products"
            className="mt-3 inline-flex min-h-[40px] w-fit items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#176b5b] hover:text-[#176b5b] sm:mt-0"
          >
            <ShoppingBag size={16} />
            Continue shopping
          </Link>
        </div>

        {items.length === 0 ? (
          <div className="mt-10 rounded-xl border border-dashed border-slate-300 bg-white py-14 text-center sm:mt-12 sm:rounded-2xl sm:py-20">
            <Heart
              size={36}
              className="mx-auto text-slate-300 sm:h-10 sm:w-10"
            />
            <h2 className="mt-4 text-base font-semibold text-slate-900 sm:text-lg">
              Your wishlist is empty
            </h2>
            <p className="mt-2 px-4 text-sm text-slate-500">
              Browse our collection and save the pieces you love.
            </p>
            <Link
              href="/products"
              className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white"
            >
              <ShoppingBag size={16} />
              Explore Furniture
            </Link>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-5 lg:grid-cols-3">
            {items.map((item) => {
              const busy = busyId === item.productId;
              const inCart = cartIds.has(item.productId);

              return (
                <article
                  key={item.productId}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white sm:rounded-2xl"
                >
                  <Link
                    href={`/products/${item.productId}`}
                    className="relative flex aspect-square items-center justify-center bg-slate-100"
                  >
                    {item.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <ShoppingBag
                        size={32}
                        className="text-slate-300 sm:h-10 sm:w-10"
                        strokeWidth={1.2}
                      />
                    )}
                  </Link>

                  <div className="p-2.5 sm:p-4">
                    <p className="truncate text-[9px] font-semibold uppercase tracking-wider text-slate-400 sm:text-[10px]">
                      {item.category || "Furniture"}
                    </p>
                    <Link href={`/products/${item.productId}`}>
                      <h2 className="mt-1 line-clamp-2 text-xs font-bold leading-snug text-slate-900 sm:line-clamp-1 sm:text-base">
                        {item.name}
                      </h2>
                    </Link>
                    <p className="mt-1.5 text-sm font-bold text-slate-900 sm:mt-2 sm:text-lg">
                      {formatCurrency(item.price)}
                    </p>

                    <div className="mt-2.5 flex gap-1.5 sm:mt-4 sm:gap-2">
                      <button
                        type="button"
                        disabled={busy}
                        onClick={() => handleToggleCart(item)}
                        className={`flex h-9 min-w-0 flex-1 items-center justify-center gap-1 rounded-lg px-2 text-[11px] font-semibold text-white disabled:opacity-60 sm:gap-1.5 sm:px-3 sm:text-xs ${
                          inCart
                            ? "bg-red-600 hover:bg-red-700"
                            : "bg-[#176b5b] hover:bg-[#125849]"
                        }`}
                      >
                        {busy ? (
                          <Loader2 size={13} className="animate-spin" />
                        ) : inCart ? (
                          <>
                            <Trash2 size={13} className="shrink-0" />
                            <span className="truncate">Remove</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag size={13} className="shrink-0" />
                            <span className="truncate">Add to cart</span>
                          </>
                        )}
                      </button>
                      <button
                        type="button"
                        disabled={busy}
                        onClick={() =>
                          handleRemoveFromWishlist(item.productId)
                        }
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:border-red-200 hover:bg-red-50 hover:text-red-600 disabled:opacity-60 sm:w-10"
                        aria-label="Remove from wishlist"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
