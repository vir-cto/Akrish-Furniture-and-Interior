// "use client";

// import Link from "next/link";
// import { Heart, ShoppingBag } from "lucide-react";

// export default function WishlistPage() {
//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
//         <h1 className="text-3xl font-bold text-slate-900">Your Wishlist</h1>
//         <p className="mt-2 text-sm text-slate-500">
//           Items you have saved for later.
//         </p>

//         <div className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-white py-20 text-center">
//           <Heart size={40} className="mx-auto text-slate-300" />
//           <h2 className="mt-4 text-lg font-semibold text-slate-900">
//             Your wishlist is empty
//           </h2>
//           <p className="mt-2 text-sm text-slate-500">
//             Browse our collection and save the pieces you love.
//           </p>
//           <Link
//             href="/products"
//             className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white"
//           >
//             <ShoppingBag size={16} />
//             Explore Furniture
//           </Link>
//         </div>
//       </div>
//     </main>
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
// import {
//   getWishlist,
//   removeFromWishlist,
//   type WishlistItem,
// } from "@/services/wishlistService";
// import { addToCart } from "@/services/cartService";

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function getLoggedInEmail(): string | null {
//   try {
//     const raw = localStorage.getItem("user");
//     if (!raw) return null;
//     const user = JSON.parse(raw);
//     return user?.email ? String(user.email).toLowerCase() : null;
//   } catch {
//     return null;
//   }
// }

// export default function WishlistPage() {
//   const router = useRouter();
//   const [items, setItems] = useState<WishlistItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [busyId, setBusyId] = useState<string | null>(null);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       const email = getLoggedInEmail();
//       if (!email) {
//         router.push("/sign-in?redirect=/wishlist");
//         return;
//       }

//       setLoading(true);
//       try {
//         const list = await getWishlist(email);
//         if (!cancelled) setItems(list?.items || []);
//       } catch (err) {
//         console.error(err);
//         if (!cancelled) setItems([]);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     window.addEventListener("wishlistUpdated", load);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("wishlistUpdated", load);
//     };
//   }, [router]);

//   async function handleRemove(productId: string) {
//     const email = getLoggedInEmail();
//     if (!email) {
//       router.push("/sign-in");
//       return;
//     }

//     setBusyId(productId);
//     try {
//       const next = await removeFromWishlist(email, productId);
//       setItems(next.items);
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setBusyId(null);
//     }
//   }

//   async function handleAddToCart(item: WishlistItem) {
//     const email = getLoggedInEmail();
//     if (!email) {
//       router.push("/sign-in");
//       return;
//     }

//     setBusyId(item.productId);
//     try {
//       await addToCart(email, {
//         productId: item.productId,
//         name: item.name,
//         price: item.price,
//         quantity: 1,
//         image: item.image || "",
//         category: item.category || "",
//       });
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setBusyId(null);
//     }
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
//         <h1 className="text-3xl font-bold text-slate-900">Your Wishlist</h1>
//         <p className="mt-2 text-sm text-slate-500">
//           Items you have saved for later.
//         </p>

//         {loading ? (
//           <div className="mt-16 flex justify-center text-slate-500">
//             <Loader2 className="h-6 w-6 animate-spin" />
//           </div>
//         ) : items.length === 0 ? (
//           <div className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-white py-20 text-center">
//             <Heart size={40} className="mx-auto text-slate-300" />
//             <h2 className="mt-4 text-lg font-semibold text-slate-900">
//               Your wishlist is empty
//             </h2>
//             <p className="mt-2 text-sm text-slate-500">
//               Browse our collection and save the pieces you love.
//             </p>
//             <Link
//               href="/products"
//               className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white"
//             >
//               <ShoppingBag size={16} />
//               Explore Furniture
//             </Link>
//           </div>
//         ) : (
//           <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {items.map((item) => {
//               const busy = busyId === item.productId;
//               return (
//                 <article
//                   key={item.productId}
//                   className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
//                 >
//                   <Link
//                     href={`/products/${item.productId}`}
//                     className="relative flex aspect-square items-center justify-center bg-slate-100"
//                   >
//                     {item.image ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="h-full w-full object-cover"
//                       />
//                     ) : (
//                       <ShoppingBag
//                         size={40}
//                         className="text-slate-300"
//                         strokeWidth={1.2}
//                       />
//                     )}
//                   </Link>

//                   <div className="p-4">
//                     <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
//                       {item.category || "Furniture"}
//                     </p>
//                     <Link href={`/products/${item.productId}`}>
//                       <h2 className="mt-1 line-clamp-1 font-bold text-slate-900">
//                         {item.name}
//                       </h2>
//                     </Link>
//                     <p className="mt-2 text-lg font-bold text-slate-900">
//                       {formatCurrency(item.price)}
//                     </p>

//                     <div className="mt-4 flex gap-2">
//                       <button
//                         type="button"
//                         disabled={busy}
//                         onClick={() => handleAddToCart(item)}
//                         className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//                       >
//                         {busy ? (
//                           <Loader2 size={14} className="animate-spin" />
//                         ) : (
//                           <ShoppingBag size={14} />
//                         )}
//                         Add to cart
//                       </button>
//                       <button
//                         type="button"
//                         disabled={busy}
//                         onClick={() => handleRemove(item.productId)}
//                         className="rounded-lg border border-slate-200 px-3 py-2.5 text-slate-600 hover:border-red-200 hover:text-red-600 disabled:opacity-60"
//                         aria-label="Remove from wishlist"
//                       >
//                         <Trash2 size={16} />
//                       </button>
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Heart, ShoppingBag, Trash2, Loader2 } from "lucide-react";
// import {
//   getWishlist,
//   removeFromWishlist,
//   type WishlistItem,
// } from "@/services/wishlistService";
// import { addToCart } from "@/services/cartService";

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function getLoggedInEmail(): string | null {
//   try {
//     const raw = localStorage.getItem("user");
//     if (!raw) return null;
//     const user = JSON.parse(raw);
//     return user?.email ? String(user.email).toLowerCase() : null;
//   } catch {
//     return null;
//   }
// }

// export default function WishlistPage() {
//   const router = useRouter();
//   const [items, setItems] = useState<WishlistItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [busyId, setBusyId] = useState<string | null>(null);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       const email = getLoggedInEmail();
//       if (!email) {
//         router.push("/sign-in?redirect=/wishlist");
//         return;
//       }

//       setLoading(true);
//       try {
//         const list = await getWishlist(email);
//         if (!cancelled) setItems(list?.items || []);
//       } catch (err) {
//         console.error(err);
//         if (!cancelled) setItems([]);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     window.addEventListener("wishlistUpdated", load);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("wishlistUpdated", load);
//     };
//   }, [router]);

//   async function handleRemove(productId: string) {
//     const email = getLoggedInEmail();
//     if (!email) {
//       router.push("/sign-in");
//       return;
//     }

//     setBusyId(productId);
//     try {
//       const next = await removeFromWishlist(email, productId);
//       setItems(next.items);
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setBusyId(null);
//     }
//   }

//   async function handleAddToCart(item: WishlistItem) {
//     const email = getLoggedInEmail();
//     if (!email) {
//       router.push("/sign-in");
//       return;
//     }

//     setBusyId(item.productId);
//     try {
//       await addToCart(email, {
//         productId: item.productId,
//         name: item.name,
//         price: item.price,
//         quantity: 1,
//         image: item.image || "",
//         category: item.category || "",
//       });
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setBusyId(null);
//     }
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto max-w-6xl px-3 py-8 sm:px-6 sm:py-14 lg:px-8">
//         <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
//           Your Wishlist
//         </h1>
//         <p className="mt-1.5 text-sm text-slate-500">
//           Items you have saved for later.
//         </p>

//         {loading ? (
//           <div className="mt-16 flex justify-center text-slate-500">
//             <Loader2 className="h-6 w-6 animate-spin" />
//           </div>
//         ) : items.length === 0 ? (
//           <div className="mt-10 rounded-xl border border-dashed border-slate-300 bg-white py-14 text-center sm:mt-12 sm:rounded-2xl sm:py-20">
//             <Heart size={36} className="mx-auto text-slate-300 sm:h-10 sm:w-10" />
//             <h2 className="mt-4 text-base font-semibold text-slate-900 sm:text-lg">
//               Your wishlist is empty
//             </h2>
//             <p className="mt-2 px-4 text-sm text-slate-500">
//               Browse our collection and save the pieces you love.
//             </p>
//             <Link
//               href="/products"
//               className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white"
//             >
//               <ShoppingBag size={16} />
//               Explore Furniture
//             </Link>
//           </div>
//         ) : (
//           /* 2 per row on mobile */
//           <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-5 lg:grid-cols-3">
//             {items.map((item) => {
//               const busy = busyId === item.productId;
//               return (
//                 <article
//                   key={item.productId}
//                   className="overflow-hidden rounded-xl border border-slate-200 bg-white sm:rounded-2xl"
//                 >
//                   <Link
//                     href={`/products/${item.productId}`}
//                     className="relative flex aspect-square items-center justify-center bg-slate-100"
//                   >
//                     {item.image ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="h-full w-full object-cover"
//                       />
//                     ) : (
//                       <ShoppingBag
//                         size={32}
//                         className="text-slate-300 sm:h-10 sm:w-10"
//                         strokeWidth={1.2}
//                       />
//                     )}
//                   </Link>

//                   <div className="p-2.5 sm:p-4">
//                     <p className="truncate text-[9px] font-semibold uppercase tracking-wider text-slate-400 sm:text-[10px]">
//                       {item.category || "Furniture"}
//                     </p>
//                     <Link href={`/products/${item.productId}`}>
//                       <h2 className="mt-1 line-clamp-2 text-xs font-bold leading-snug text-slate-900 sm:line-clamp-1 sm:text-base">
//                         {item.name}
//                       </h2>
//                     </Link>
//                     <p className="mt-1.5 text-sm font-bold text-slate-900 sm:mt-2 sm:text-lg">
//                       {formatCurrency(item.price)}
//                     </p>

//                     <div className="mt-2.5 flex flex-col gap-1.5 sm:mt-4 sm:flex-row sm:gap-2">
//                       <button
//                         type="button"
//                         disabled={busy}
//                         onClick={() => handleAddToCart(item)}
//                         className="flex h-9 w-full items-center justify-center gap-1 rounded-lg bg-[#176b5b] px-2 text-[11px] font-semibold text-white hover:bg-[#125849] disabled:opacity-60 sm:h-auto sm:flex-1 sm:gap-1.5 sm:px-3 sm:py-2.5 sm:text-xs"
//                       >
//                         {busy ? (
//                           <Loader2 size={13} className="animate-spin" />
//                         ) : (
//                           <ShoppingBag size={13} />
//                         )}
//                         Add to cart
//                       </button>
//                       <button
//                         type="button"
//                         disabled={busy}
//                         onClick={() => handleRemove(item.productId)}
//                         className="flex h-9 w-full items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:border-red-200 hover:text-red-600 disabled:opacity-60 sm:w-auto sm:px-3 sm:py-2.5"
//                         aria-label="Remove from wishlist"
//                       >
//                         <Trash2 size={15} />
//                       </button>
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Heart, ShoppingBag, Trash2, Loader2 } from "lucide-react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import {
//   getWishlist,
//   removeFromWishlist,
//   type WishlistItem,
// } from "@/services/wishlistService";
// import { addToCart } from "@/services/cartService";

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// export default function WishlistPage() {
//   const router = useRouter();
//   const [authUid, setAuthUid] = useState<string | null>(null);
//   const [authReady, setAuthReady] = useState(false);
//   const [items, setItems] = useState<WishlistItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [busyId, setBusyId] = useState<string | null>(null);

//   // Match products/cart: Firebase Auth UID as document key
//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//       setAuthReady(true);
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     if (!authReady) return;

//     let cancelled = false;

//     async function load() {
//       if (!authUid) {
//         router.push("/sign-in?redirect=/wishlist");
//         return;
//       }

//       setLoading(true);
//       try {
//         const list = await getWishlist(authUid);
//         if (!cancelled) setItems(list?.items || []);
//       } catch (err) {
//         console.error(err);
//         if (!cancelled) setItems([]);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     window.addEventListener("wishlistUpdated", load);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("wishlistUpdated", load);
//     };
//   }, [authUid, authReady, router]);

//   async function handleRemove(productId: string) {
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }

//     setBusyId(productId);
//     try {
//       const next = await removeFromWishlist(authUid, productId);
//       setItems(next.items);
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setBusyId(null);
//     }
//   }

//   async function handleAddToCart(item: WishlistItem) {
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }

//     setBusyId(item.productId);
//     try {
//       await addToCart(authUid, {
//         productId: item.productId,
//         name: item.name,
//         price: item.price,
//         quantity: 1,
//         image: item.image || "",
//         category: item.category || "",
//       });
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setBusyId(null);
//     }
//   }

//   if (!authReady || (authUid && loading)) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto max-w-6xl px-3 py-8 sm:px-6 sm:py-14 lg:px-8">
//         <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
//           Your Wishlist
//         </h1>
//         <p className="mt-1.5 text-sm text-slate-500">
//           Items you have saved for later.
//         </p>

//         {items.length === 0 ? (
//           <div className="mt-10 rounded-xl border border-dashed border-slate-300 bg-white py-14 text-center sm:mt-12 sm:rounded-2xl sm:py-20">
//             <Heart
//               size={36}
//               className="mx-auto text-slate-300 sm:h-10 sm:w-10"
//             />
//             <h2 className="mt-4 text-base font-semibold text-slate-900 sm:text-lg">
//               Your wishlist is empty
//             </h2>
//             <p className="mt-2 px-4 text-sm text-slate-500">
//               Browse our collection and save the pieces you love.
//             </p>
//             <Link
//               href="/products"
//               className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white"
//             >
//               <ShoppingBag size={16} />
//               Explore Furniture
//             </Link>
//           </div>
//         ) : (
//           <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-5 lg:grid-cols-3">
//             {items.map((item) => {
//               const busy = busyId === item.productId;
//               return (
//                 <article
//                   key={item.productId}
//                   className="overflow-hidden rounded-xl border border-slate-200 bg-white sm:rounded-2xl"
//                 >
//                   <Link
//                     href={`/products/${item.productId}`}
//                     className="relative flex aspect-square items-center justify-center bg-slate-100"
//                   >
//                     {item.image ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="h-full w-full object-cover"
//                       />
//                     ) : (
//                       <ShoppingBag
//                         size={32}
//                         className="text-slate-300 sm:h-10 sm:w-10"
//                         strokeWidth={1.2}
//                       />
//                     )}
//                   </Link>

//                   <div className="p-2.5 sm:p-4">
//                     <p className="truncate text-[9px] font-semibold uppercase tracking-wider text-slate-400 sm:text-[10px]">
//                       {item.category || "Furniture"}
//                     </p>
//                     <Link href={`/products/${item.productId}`}>
//                       <h2 className="mt-1 line-clamp-2 text-xs font-bold leading-snug text-slate-900 sm:line-clamp-1 sm:text-base">
//                         {item.name}
//                       </h2>
//                     </Link>
//                     <p className="mt-1.5 text-sm font-bold text-slate-900 sm:mt-2 sm:text-lg">
//                       {formatCurrency(item.price)}
//                     </p>

//                     {/* <div className="mt-2.5 flex flex-col gap-1.5 sm:mt-4 sm:flex-row sm:gap-2">
//                       <button
//                         type="button"
//                         disabled={busy}
//                         onClick={() => handleAddToCart(item)}
//                         className="flex h-9 w-full items-center justify-center gap-1 rounded-lg bg-[#176b5b] px-2 text-[11px] font-semibold text-white hover:bg-[#125849] disabled:opacity-60 sm:h-auto sm:flex-1 sm:gap-1.5 sm:px-3 sm:py-2.5 sm:text-xs"
//                       >
//                         {busy ? (
//                           <Loader2 size={13} className="animate-spin" />
//                         ) : (
//                           <ShoppingBag size={13} />
//                         )}
//                         Add to cart
//                       </button>
//                       <button
//                         type="button"
//                         disabled={busy}
//                         onClick={() => handleRemove(item.productId)}
//                         className="flex h-9 w-full items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:border-red-200 hover:text-red-600 disabled:opacity-60 sm:w-auto sm:px-3 sm:py-2.5"
//                         aria-label="Remove from wishlist"
//                       >
//                         <Trash2 size={15} />
//                       </button>
//                     </div> */}

//                                         <div className="mt-2.5 flex gap-1.5 sm:mt-4 sm:gap-2">
//                       <button
//                         type="button"
//                         disabled={busy}
//                         onClick={() => handleAddToCart(item)}
//                         className="flex h-9 min-w-0 flex-1 items-center justify-center gap-1 rounded-lg bg-[#176b5b] px-2 text-[11px] font-semibold text-white hover:bg-[#125849] disabled:opacity-60 sm:gap-1.5 sm:px-3 sm:text-xs"
//                       >
//                         {busy ? (
//                           <Loader2 size={13} className="animate-spin" />
//                         ) : (
//                           <ShoppingBag size={13} />
//                         )}
//                         Add to cart
//                       </button>
//                       <button
//                         type="button"
//                         disabled={busy}
//                         onClick={() => handleRemove(item.productId)}
//                         className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:border-red-200 hover:bg-red-50 hover:text-red-600 disabled:opacity-60 sm:w-10"
//                         aria-label="Remove from wishlist"
//                       >
//                         <Trash2 size={15} />
//                       </button>
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </main>
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

  // Load wishlist
  useEffect(() => {
    if (!authReady) return;

    let cancelled = false;

    async function loadWishlist() {
      if (!authUid) {
        router.push("/sign-in?redirect=/wishlist");
        return;
      }

      setLoading(true);
      try {
        const list = await getWishlist(authUid);
        if (!cancelled) setItems(list?.items || []);
      } catch (err) {
        console.error(err);
        if (!cancelled) setItems([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadWishlist();
    window.addEventListener("wishlistUpdated", loadWishlist);
    return () => {
      cancelled = true;
      window.removeEventListener("wishlistUpdated", loadWishlist);
    };
  }, [authUid, authReady, router]);

  // Sync cart ids (same product can't be added twice)
  useEffect(() => {
    if (!authUid) {
      setCartIds(new Set());
      return;
    }

    let cancelled = false;

    async function syncCart() {
      try {
        const cart = await getCart(authUid!);
        const ids = new Set((cart?.items || []).map((i) => i.productId));
        if (!cancelled) setCartIds(ids);
      } catch {
        if (!cancelled) setCartIds(new Set());
      }
    }

    syncCart();
    window.addEventListener("cartUpdated", syncCart);
    return () => {
      cancelled = true;
      window.removeEventListener("cartUpdated", syncCart);
    };
  }, [authUid]);

  async function handleRemoveFromWishlist(productId: string) {
    if (!authUid) {
      router.push("/sign-in");
      return;
    }

    setBusyId(productId);
    try {
      const next = await removeFromWishlist(authUid, productId);
      setItems(next.items);
      window.dispatchEvent(new Event("wishlistUpdated"));
    } catch (err) {
      console.error(err);
    } finally {
      setBusyId(null);
    }
  }

  async function handleToggleCart(item: WishlistItem) {
    if (!authUid) {
      router.push("/sign-in");
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
        // Guard: do not add again if already present
        const cart = await getCart(authUid);
        const already = cart?.items?.some(
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

  if (!authReady || (authUid && loading)) {
    return (
      <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
        <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f9f8]">
      <div className="mx-auto max-w-6xl px-3 py-8 sm:px-6 sm:py-14 lg:px-8">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Your Wishlist
        </h1>
        <p className="mt-1.5 text-sm text-slate-500">
          Items you have saved for later.
        </p>

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
                            <Trash2 size={13} />
                            Remove from cart
                          </>
                        ) : (
                          <>
                            <ShoppingBag size={13} />
                            Add to cart
                          </>
                        )}
                      </button>
                      <button
                        type="button"
                        disabled={busy}
                        onClick={() => handleRemoveFromWishlist(item.productId)}
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
