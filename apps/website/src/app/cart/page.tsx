// "use client";

// import Link from "next/link";
// import { useMemo, useState } from "react";
// import {
//   ArrowRight,
//   Minus,
//   Plus,
//   ShoppingBag,
//   Trash2,
// } from "lucide-react";

// interface CartItem {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   quantity: number;
//   image?: string;
// }

// const INITIAL_CART: CartItem[] = [
//   {
//     id: "product-001",
//     name: "Premium Modular Sofa",
//     category: "Living Room",
//     price: 54900,
//     quantity: 1,
//   },
//   {
//     id: "product-002",
//     name: "Designer Coffee Table",
//     category: "Living Room",
//     price: 30000,
//     quantity: 1,
//   },
// ];

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// export default function CartPage() {
//   const [items, setItems] = useState<CartItem[]>(INITIAL_CART);

//   const updateQuantity = (
//     id: string,
//     change: number
//   ) => {
//     setItems((current) =>
//       current
//         .map((item) => {
//           if (item.id !== id) return item;

//           return {
//             ...item,
//             quantity: Math.max(1, item.quantity + change),
//           };
//         })
//     );
//   };

//   const removeItem = (id: string) => {
//     setItems((current) =>
//       current.filter((item) => item.id !== id)
//     );
//   };

//   const subtotal = useMemo(
//     () =>
//       items.reduce(
//         (total, item) => total + item.price * item.quantity,
//         0
//       ),
//     [items]
//   );

//   const delivery = subtotal > 0 ? 0 : 0;
//   const total = subtotal + delivery;

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         {/* Breadcrumb */}
//         <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
//           <Link
//             href="/"
//             className="transition hover:text-slate-900"
//           >
//             Home
//           </Link>

//           <span>/</span>

//           <span className="font-medium text-slate-800">
//             Cart
//           </span>
//         </div>

//         {/* Header */}
//         <div className="mb-8">
//           <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//             Shopping cart
//           </p>

//           <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
//             Your Cart
//           </h1>

//           <p className="mt-2 text-sm text-slate-500">
//             Review your selected furniture before checkout.
//           </p>
//         </div>

//         {items.length > 0 ? (
//           <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
//             {/* Cart items */}
//             <section className="rounded-xl border border-slate-200 bg-white">
//               <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
//                 <div>
//                   <h2 className="text-sm font-bold text-slate-900">
//                     Cart items
//                   </h2>

//                   <p className="mt-1 text-xs text-slate-500">
//                     {items.reduce(
//                       (count, item) =>
//                         count + item.quantity,
//                       0
//                     )}{" "}
//                     item
//                     {items.reduce(
//                       (count, item) =>
//                         count + item.quantity,
//                       0
//                     ) !== 1
//                       ? "s"
//                       : ""}
//                   </p>
//                 </div>

//                 <ShoppingBag
//                   size={19}
//                   className="text-slate-400"
//                 />
//               </div>

//               <div className="divide-y divide-slate-100">
//                 {items.map((item) => (
//                   <div
//                     key={item.id}
//                     className="p-5 sm:p-6"
//                   >
//                     <div className="flex gap-4">
//                       {/* Product image placeholder */}
//                       <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-400 sm:h-28 sm:w-28">
//                         <ShoppingBag size={27} />
//                       </div>

//                       <div className="min-w-0 flex-1">
//                         <div className="flex flex-col justify-between gap-3 sm:flex-row">
//                           <div>
//                             <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
//                               {item.category}
//                             </p>

//                             <h3 className="mt-1 text-sm font-bold text-slate-900 sm:text-base">
//                               {item.name}
//                             </h3>

//                             <p className="mt-1 text-sm font-semibold text-slate-700">
//                               {formatCurrency(item.price)}
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             onClick={() =>
//                               removeItem(item.id)
//                             }
//                             className="flex h-8 w-8 shrink-0 items-center justify-center self-start rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-600"
//                             aria-label={`Remove ${item.name}`}
//                           >
//                             <Trash2 size={16} />
//                           </button>
//                         </div>

//                         <div className="mt-4 flex items-center justify-between">
//                           <div className="flex items-center rounded-lg border border-slate-200">
//                             <button
//                               type="button"
//                               onClick={() =>
//                                 updateQuantity(
//                                   item.id,
//                                   -1
//                                 )
//                               }
//                               disabled={item.quantity <= 1}
//                               className="flex h-9 w-9 items-center justify-center text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
//                               aria-label="Decrease quantity"
//                             >
//                               <Minus size={14} />
//                             </button>

//                             <span className="flex h-9 min-w-10 items-center justify-center border-x border-slate-200 px-2 text-sm font-semibold text-slate-800">
//                               {item.quantity}
//                             </span>

//                             <button
//                               type="button"
//                               onClick={() =>
//                                 updateQuantity(
//                                   item.id,
//                                   1
//                                 )
//                               }
//                               className="flex h-9 w-9 items-center justify-center text-slate-600 transition hover:bg-slate-50"
//                               aria-label="Increase quantity"
//                             >
//                               <Plus size={14} />
//                             </button>
//                           </div>

//                           <p className="text-sm font-bold text-slate-900">
//                             {formatCurrency(
//                               item.price * item.quantity
//                             )}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="border-t border-slate-100 px-5 py-4 sm:px-6">
//                 <Link
//                   href="/products"
//                   className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900"
//                 >
//                   Continue shopping
//                   <ArrowRight size={15} />
//                 </Link>
//               </div>
//             </section>

//             {/* Summary */}
//             <aside className="h-fit rounded-xl border border-slate-200 bg-white lg:sticky lg:top-6">
//               <div className="border-b border-slate-100 px-5 py-5">
//                 <h2 className="text-base font-bold text-slate-900">
//                   Order summary
//                 </h2>
//               </div>

//               <div className="space-y-4 px-5 py-5">
//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-slate-500">
//                     Subtotal
//                   </span>

//                   <span className="font-semibold text-slate-900">
//                     {formatCurrency(subtotal)}
//                   </span>
//                 </div>

//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-slate-500">
//                     Delivery
//                   </span>

//                   <span className="font-semibold text-emerald-600">
//                     Free
//                   </span>
//                 </div>

//                 <div className="border-t border-slate-100 pt-4">
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm font-semibold text-slate-900">
//                       Total
//                     </span>

//                     <span className="text-xl font-bold text-slate-900">
//                       {formatCurrency(total)}
//                     </span>
//                   </div>
//                 </div>

//                 <Link
//                   href="/checkout"
//                   className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
//                 >
//                   Proceed to checkout
//                   <ArrowRight size={16} />
//                 </Link>

//                 <p className="text-center text-[11px] leading-5 text-slate-400">
//                   Taxes and final delivery charges, if
//                   applicable, will be shown at checkout.
//                 </p>
//               </div>
//             </aside>
//           </div>
//         ) : (
//           /* Empty cart */
//           <section className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
//               <ShoppingBag size={28} />
//             </div>

//             <h2 className="mt-5 text-xl font-bold text-slate-900">
//               Your cart is empty
//             </h2>

//             <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
//               You have no items in your cart yet. Explore
//               our furniture collection and find something
//               that fits your space.
//             </p>

//             <Link
//               href="/products"
//               className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
//             >
//               Browse products
//               <ArrowRight size={16} />
//             </Link>
//           </section>
//         )}
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowRight,
//   Minus,
//   Plus,
//   ShoppingBag,
//   Trash2,
//   Loader2,
// } from "lucide-react";
// import {
//   getCart,
//   updateCartItem,
//   removeFromCart,
//   type CartItem,
// } from "@/services/cartService";

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function getLoggedInUser(): { name: string; email: string } | null {
//   if (typeof window === "undefined") return null;
//   try {
//     const raw = localStorage.getItem("user");
//     if (!raw) return null;
//     const user = JSON.parse(raw);
//     if (!user?.email) return null;
//     return { name: user.name || "", email: String(user.email).toLowerCase() };
//   } catch {
//     return null;
//   }
// }

// export default function CartPage() {
//   const [user, setUser] = useState<{ name: string; email: string } | null>(null);
//   const [items, setItems] = useState<CartItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);

//   // Resolve logged-in user + load cart
//   useEffect(() => {
//     const current = getLoggedInUser();
//     setUser(current);

//     if (!current) {
//       setItems([]);
//       setLoading(false);
//       return;
//     }

//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const cart = await getCart(current!.email);
//         if (!cancelled) {
//           setItems(cart?.items || []);
//         }
//       } catch (err) {
//         console.error("Failed to load cart:", err);
//         if (!cancelled) setItems([]);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const updateQuantity = async (item: CartItem, change: number) => {
//     if (!user) return;
//     const nextQty = Math.max(1, item.quantity + change);
//     setUpdating(true);

//     // Optimistic UI
//     setItems((current) =>
//       current.map((i) =>
//         i.productId === item.productId && i.variant === item.variant
//           ? { ...i, quantity: nextQty }
//           : i
//       )
//     );

//     try {
//       const cart = await updateCartItem(
//         user.email,
//         item.productId,
//         nextQty,
//         item.variant
//       );
//       setItems(cart.items);
//     } catch (err) {
//       console.error(err);
//       // Reload on failure
//       const cart = await getCart(user.email);
//       setItems(cart?.items || []);
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const removeItem = async (item: CartItem) => {
//     if (!user) return;
//     setUpdating(true);

//     setItems((current) =>
//       current.filter(
//         (i) =>
//           !(i.productId === item.productId && i.variant === item.variant)
//       )
//     );

//     try {
//       const cart = await removeFromCart(
//         user.email,
//         item.productId,
//         item.variant
//       );
//       setItems(cart.items);
//     } catch (err) {
//       console.error(err);
//       const cart = await getCart(user.email);
//       setItems(cart?.items || []);
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const subtotal = useMemo(
//     () => items.reduce((total, item) => total + item.price * item.quantity, 0),
//     [items]
//   );
//   const total = subtotal;

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </main>
//     );
//   }

//   // Not logged in
//   if (!user) {
//     return (
//       <main className="min-h-screen bg-[#f7f9f8]">
//         <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//           <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
//             <Link href="/" className="transition hover:text-slate-900">
//               Home
//             </Link>
//             <span>/</span>
//             <span className="font-medium text-slate-800">Cart</span>
//           </div>

//           <section className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
//               <ShoppingBag size={28} />
//             </div>
//             <h2 className="mt-5 text-xl font-bold text-slate-900">
//               Sign in to view your cart
//             </h2>
//             <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
//               Your cart is saved per account. Sign in to see items you added
//               earlier, or continue shopping after logging in.
//             </p>
//             <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
//               <Link
//                 href="/sign-in"
//                 className="inline-flex items-center gap-2 rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#125849]"
//               >
//                 Sign in
//                 <ArrowRight size={16} />
//               </Link>
//               <Link
//                 href="/products"
//                 className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
//               >
//                 Browse products
//               </Link>
//             </div>
//           </section>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         {/* Breadcrumb */}
//         <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
//           <Link href="/" className="transition hover:text-slate-900">
//             Home
//           </Link>
//           <span>/</span>
//           <span className="font-medium text-slate-800">Cart</span>
//         </div>

//         {/* Header */}
//         <div className="mb-8">
//           <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//             Shopping cart
//           </p>
//           <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
//             Your Cart
//           </h1>
//           <p className="mt-2 text-sm text-slate-500">
//             Signed in as <span className="font-medium text-slate-700">{user.email}</span>
//           </p>
//         </div>

//         {items.length > 0 ? (
//           <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
//             {/* Cart items */}
//             <section className="rounded-xl border border-slate-200 bg-white">
//               <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
//                 <div>
//                   <h2 className="text-sm font-bold text-slate-900">Cart items</h2>
//                   <p className="mt-1 text-xs text-slate-500">
//                     {items.reduce((c, i) => c + i.quantity, 0)} item
//                     {items.reduce((c, i) => c + i.quantity, 0) !== 1 ? "s" : ""}
//                   </p>
//                 </div>
//                 <ShoppingBag size={19} className="text-slate-400" />
//               </div>

//               <div className="divide-y divide-slate-100">
//                 {items.map((item) => (
//                   <div
//                     key={`${item.productId}-${item.variant || "default"}`}
//                     className="p-5 sm:p-6"
//                   >
//                     <div className="flex gap-4">
//                       <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-100 text-slate-400 sm:h-28 sm:w-28">
//                         {item.image ? (
//                           <img
//                             src={item.image}
//                             alt={item.name}
//                             className="h-full w-full object-cover"
//                           />
//                         ) : (
//                           <ShoppingBag size={27} />
//                         )}
//                       </div>

//                       <div className="min-w-0 flex-1">
//                         <div className="flex flex-col justify-between gap-3 sm:flex-row">
//                           <div>
//                             <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
//                               {item.category || "Furniture"}
//                             </p>
//                             <h3 className="mt-1 text-sm font-bold text-slate-900 sm:text-base">
//                               {item.name}
//                             </h3>
//                             <p className="mt-1 text-sm font-semibold text-slate-700">
//                               {formatCurrency(item.price)}
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             onClick={() => removeItem(item)}
//                             disabled={updating}
//                             className="flex h-8 w-8 shrink-0 items-center justify-center self-start rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
//                             aria-label={`Remove ${item.name}`}
//                           >
//                             <Trash2 size={16} />
//                           </button>
//                         </div>

//                         <div className="mt-4 flex items-center justify-between">
//                           <div className="flex items-center rounded-lg border border-slate-200">
//                             <button
//                               type="button"
//                               onClick={() => updateQuantity(item, -1)}
//                               disabled={item.quantity <= 1 || updating}
//                               className="flex h-9 w-9 items-center justify-center text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
//                               aria-label="Decrease quantity"
//                             >
//                               <Minus size={14} />
//                             </button>
//                             <span className="flex h-9 min-w-10 items-center justify-center border-x border-slate-200 px-2 text-sm font-semibold text-slate-800">
//                               {item.quantity}
//                             </span>
//                             <button
//                               type="button"
//                               onClick={() => updateQuantity(item, 1)}
//                               disabled={updating}
//                               className="flex h-9 w-9 items-center justify-center text-slate-600 transition hover:bg-slate-50 disabled:opacity-50"
//                               aria-label="Increase quantity"
//                             >
//                               <Plus size={14} />
//                             </button>
//                           </div>

//                           <p className="text-sm font-bold text-slate-900">
//                             {formatCurrency(item.price * item.quantity)}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="border-t border-slate-100 px-5 py-4 sm:px-6">
//                 <Link
//                   href="/products"
//                   className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900"
//                 >
//                   Continue shopping
//                   <ArrowRight size={15} />
//                 </Link>
//               </div>
//             </section>

//             {/* Summary */}
//             <aside className="h-fit rounded-xl border border-slate-200 bg-white lg:sticky lg:top-6">
//               <div className="border-b border-slate-100 px-5 py-5">
//                 <h2 className="text-base font-bold text-slate-900">Order summary</h2>
//               </div>

//               <div className="space-y-4 px-5 py-5">
//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-slate-500">Subtotal</span>
//                   <span className="font-semibold text-slate-900">
//                     {formatCurrency(subtotal)}
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-slate-500">Delivery</span>
//                   <span className="font-semibold text-emerald-600">Free</span>
//                 </div>
//                 <div className="border-t border-slate-100 pt-4">
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm font-semibold text-slate-900">Total</span>
//                     <span className="text-xl font-bold text-slate-900">
//                       {formatCurrency(total)}
//                     </span>
//                   </div>
//                 </div>

//                 <Link
//                   href="/checkout"
//                   className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
//                 >
//                   Proceed to checkout
//                   <ArrowRight size={16} />
//                 </Link>

//                 <p className="text-center text-[11px] leading-5 text-slate-400">
//                   Taxes and final delivery charges, if applicable, will be shown
//                   at checkout.
//                 </p>
//               </div>
//             </aside>
//           </div>
//         ) : (
//           <section className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
//               <ShoppingBag size={28} />
//             </div>
//             <h2 className="mt-5 text-xl font-bold text-slate-900">
//               Your cart is empty
//             </h2>
//             <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
//               You have no items in your cart yet. Explore our furniture
//               collection and find something that fits your space.
//             </p>
//             <Link
//               href="/products"
//               className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
//             >
//               Browse products
//               <ArrowRight size={16} />
//             </Link>
//           </section>
//         )}
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowRight,
//   Minus,
//   Plus,
//   ShoppingBag,
//   Trash2,
//   Loader2,
// } from "lucide-react";
// import {
//   getCart,
//   addToCart,
//   updateCartItem,
//   removeFromCart,
//   type CartItem as FirebaseCartItem,
// } from "@/services/cartService";

// interface CartItem {
//   id: string;
//   productId: string;
//   name: string;
//   category?: string;
//   price: number;
//   quantity: number;
//   image?: string;
//   variant?: string;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function getLoggedInUser(): { name: string; email: string } | null {
//   if (typeof window === "undefined") return null;
//   try {
//     const raw = localStorage.getItem("user");
//     if (!raw) return null;
//     const user = JSON.parse(raw);
//     if (!user?.email) return null;
//     return { name: user.name || "", email: String(user.email).toLowerCase() };
//   } catch {
//     return null;
//   }
// }

// function loadLocalCart(): CartItem[] {
//   try {
//     const raw = localStorage.getItem("cart");
//     if (!raw) return [];
//     const parsed = JSON.parse(raw);
//     if (!Array.isArray(parsed)) return [];
//     return parsed.map((item: Record<string, unknown>) => ({
//       id: String(item.id || item.productId || ""),
//       productId: String(item.productId || item.id || ""),
//       name: String(item.name || "Product"),
//       category: item.category ? String(item.category) : "",
//       price: Number(item.price || 0),
//       quantity: Math.max(1, Number(item.quantity || 1)),
//       image: item.image ? String(item.image) : "",
//       variant: item.variant ? String(item.variant) : undefined,
//     }));
//   } catch {
//     return [];
//   }
// }

// function saveLocalCart(items: CartItem[]) {
//   const payload = items.map((item) => ({
//     id: item.productId || item.id,
//     productId: item.productId || item.id,
//     name: item.name,
//     category: item.category || "",
//     price: item.price,
//     quantity: item.quantity,
//     image: item.image || "",
//     variant: item.variant,
//   }));
//   localStorage.setItem("cart", JSON.stringify(payload));
//   window.dispatchEvent(new Event("cartUpdated"));
// }

// function mapFirebaseItems(items: FirebaseCartItem[]): CartItem[] {
//   return (items || []).map((item) => ({
//     id: item.productId,
//     productId: item.productId,
//     name: item.name,
//     category: item.category || "",
//     price: Number(item.price || 0),
//     quantity: Math.max(1, Number(item.quantity || 1)),
//     image: item.image || "",
//     variant: item.variant,
//   }));
// }

// export default function CartPage() {
//   const [user, setUser] = useState<{ name: string; email: string } | null>(null);
//   const [items, setItems] = useState<CartItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);

//   useEffect(() => {
//     const current = getLoggedInUser();
//     setUser(current);

//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const localItems = loadLocalCart();

//         if (!current) {
//           // Guest: localStorage only
//           if (!cancelled) {
//             setItems(localItems);
//           }
//           return;
//         }

//         // Logged in: Firebase cart
//         let cart = await getCart(current.email);
//         let firebaseItems = mapFirebaseItems(cart?.items || []);

//         // Merge guest localStorage into Firebase (once)
//         if (localItems.length > 0) {
//           for (const item of localItems) {
//             await addToCart(current.email, {
//               productId: item.productId || item.id,
//               name: item.name,
//               price: item.price,
//               quantity: item.quantity,
//               image: item.image,
//               category: item.category,
//               variant: item.variant,
//             });
//           }
//           localStorage.removeItem("cart");
//           cart = await getCart(current.email);
//           firebaseItems = mapFirebaseItems(cart?.items || []);
//         }

//         if (!cancelled) {
//           setItems(firebaseItems);
//           // Keep header badge in sync
//           saveLocalCart(firebaseItems);
//         }
//       } catch (err) {
//         console.error("Failed to load cart:", err);
//         if (!cancelled) {
//           setItems(loadLocalCart());
//         }
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const updateQuantity = async (item: CartItem, change: number) => {
//     const nextQty = Math.max(1, item.quantity + change);
//     setUpdating(true);

//     const optimistic = items.map((i) =>
//       i.productId === item.productId && i.variant === item.variant
//         ? { ...i, quantity: nextQty }
//         : i
//     );
//     setItems(optimistic);
//     saveLocalCart(optimistic);

//     try {
//       if (user) {
//         const cart = await updateCartItem(
//           user.email,
//           item.productId,
//           nextQty,
//           item.variant
//         );
//         const mapped = mapFirebaseItems(cart.items);
//         setItems(mapped);
//         saveLocalCart(mapped);
//       }
//     } catch (err) {
//       console.error(err);
//       if (user) {
//         const cart = await getCart(user.email);
//         const mapped = mapFirebaseItems(cart?.items || []);
//         setItems(mapped);
//         saveLocalCart(mapped);
//       }
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const removeItem = async (item: CartItem) => {
//     setUpdating(true);

//     const optimistic = items.filter(
//       (i) => !(i.productId === item.productId && i.variant === item.variant)
//     );
//     setItems(optimistic);
//     saveLocalCart(optimistic);

//     try {
//       if (user) {
//         const cart = await removeFromCart(
//           user.email,
//           item.productId,
//           item.variant
//         );
//         const mapped = mapFirebaseItems(cart.items);
//         setItems(mapped);
//         saveLocalCart(mapped);
//       }
//     } catch (err) {
//       console.error(err);
//       if (user) {
//         const cart = await getCart(user.email);
//         const mapped = mapFirebaseItems(cart?.items || []);
//         setItems(mapped);
//         saveLocalCart(mapped);
//       }
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const subtotal = useMemo(
//     () => items.reduce((total, item) => total + item.price * item.quantity, 0),
//     [items]
//   );
//   const total = subtotal;

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
//           <Link href="/" className="transition hover:text-slate-900">
//             Home
//           </Link>
//           <span>/</span>
//           <span className="font-medium text-slate-800">Cart</span>
//         </div>

//         <div className="mb-8">
//           <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//             Shopping cart
//           </p>
//           <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
//             Your Cart
//           </h1>
//           {user ? (
//             <p className="mt-2 text-sm text-slate-500">
//               Signed in as{" "}
//               <span className="font-medium text-slate-700">{user.email}</span>
//             </p>
//           ) : (
//             <p className="mt-2 text-sm text-slate-500">
//               Guest cart ·{" "}
//               <Link href="/sign-in" className="font-semibold text-[#176b5b] hover:underline">
//                 Sign in
//               </Link>{" "}
//               to save your cart across devices
//             </p>
//           )}
//         </div>

//         {items.length > 0 ? (
//           <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
//             <section className="rounded-xl border border-slate-200 bg-white">
//               <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
//                 <div>
//                   <h2 className="text-sm font-bold text-slate-900">Cart items</h2>
//                   <p className="mt-1 text-xs text-slate-500">
//                     {items.reduce((c, i) => c + i.quantity, 0)} item
//                     {items.reduce((c, i) => c + i.quantity, 0) !== 1 ? "s" : ""}
//                   </p>
//                 </div>
//                 <ShoppingBag size={19} className="text-slate-400" />
//               </div>

//               <div className="divide-y divide-slate-100">
//                 {items.map((item) => (
//                   <div
//                     key={`${item.productId}-${item.variant || "default"}`}
//                     className="p-5 sm:p-6"
//                   >
//                     <div className="flex gap-4">
//                       <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-100 text-slate-400 sm:h-28 sm:w-28">
//                         {item.image ? (
//                           <img
//                             src={item.image}
//                             alt={item.name}
//                             className="h-full w-full object-cover"
//                           />
//                         ) : (
//                           <ShoppingBag size={27} />
//                         )}
//                       </div>

//                       <div className="min-w-0 flex-1">
//                         <div className="flex flex-col justify-between gap-3 sm:flex-row">
//                           <div>
//                             <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
//                               {item.category || "Furniture"}
//                             </p>
//                             <h3 className="mt-1 text-sm font-bold text-slate-900 sm:text-base">
//                               {item.name}
//                             </h3>
//                             <p className="mt-1 text-sm font-semibold text-slate-700">
//                               {formatCurrency(item.price)}
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             onClick={() => removeItem(item)}
//                             disabled={updating}
//                             className="flex h-8 w-8 shrink-0 items-center justify-center self-start rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
//                             aria-label={`Remove ${item.name}`}
//                           >
//                             <Trash2 size={16} />
//                           </button>
//                         </div>

//                         <div className="mt-4 flex items-center justify-between">
//                           <div className="flex items-center rounded-lg border border-slate-200">
//                             <button
//                               type="button"
//                               onClick={() => updateQuantity(item, -1)}
//                               disabled={item.quantity <= 1 || updating}
//                               className="flex h-9 w-9 items-center justify-center text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
//                               aria-label="Decrease quantity"
//                             >
//                               <Minus size={14} />
//                             </button>
//                             <span className="flex h-9 min-w-10 items-center justify-center border-x border-slate-200 px-2 text-sm font-semibold text-slate-800">
//                               {item.quantity}
//                             </span>
//                             <button
//                               type="button"
//                               onClick={() => updateQuantity(item, 1)}
//                               disabled={updating}
//                               className="flex h-9 w-9 items-center justify-center text-slate-600 transition hover:bg-slate-50 disabled:opacity-50"
//                               aria-label="Increase quantity"
//                             >
//                               <Plus size={14} />
//                             </button>
//                           </div>

//                           <p className="text-sm font-bold text-slate-900">
//                             {formatCurrency(item.price * item.quantity)}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="border-t border-slate-100 px-5 py-4 sm:px-6">
//                 <Link
//                   href="/products"
//                   className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900"
//                 >
//                   Continue shopping
//                   <ArrowRight size={15} />
//                 </Link>
//               </div>
//             </section>

//             <aside className="h-fit rounded-xl border border-slate-200 bg-white lg:sticky lg:top-6">
//               <div className="border-b border-slate-100 px-5 py-5">
//                 <h2 className="text-base font-bold text-slate-900">Order summary</h2>
//               </div>

//               <div className="space-y-4 px-5 py-5">
//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-slate-500">Subtotal</span>
//                   <span className="font-semibold text-slate-900">
//                     {formatCurrency(subtotal)}
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-slate-500">Delivery</span>
//                   <span className="font-semibold text-emerald-600">Free</span>
//                 </div>
//                 <div className="border-t border-slate-100 pt-4">
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm font-semibold text-slate-900">Total</span>
//                     <span className="text-xl font-bold text-slate-900">
//                       {formatCurrency(total)}
//                     </span>
//                   </div>
//                 </div>

//                 <Link
//                   href="/checkout"
//                   className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
//                 >
//                   Proceed to checkout
//                   <ArrowRight size={16} />
//                 </Link>

//                 <p className="text-center text-[11px] leading-5 text-slate-400">
//                   Taxes and final delivery charges, if applicable, will be shown
//                   at checkout.
//                 </p>
//               </div>
//             </aside>
//           </div>
//         ) : (
//           <section className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
//               <ShoppingBag size={28} />
//             </div>
//             <h2 className="mt-5 text-xl font-bold text-slate-900">
//               Your cart is empty
//             </h2>
//             <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
//               You have no items in your cart yet. Explore our furniture
//               collection and find something that fits your space.
//             </p>
//             <Link
//               href="/products"
//               className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
//             >
//               Browse products
//               <ArrowRight size={16} />
//             </Link>
//           </section>
//         )}
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowRight,
//   Minus,
//   Plus,
//   ShoppingBag,
//   Trash2,
//   Loader2,
// } from "lucide-react";
// import {
//   getCart,
//   updateCartItem,
//   removeFromCart,
//   type CartItem as FirebaseCartItem,
// } from "@/services/cartService";

// interface CartItem {
//   id: string;
//   productId: string;
//   name: string;
//   category?: string;
//   price: number;
//   quantity: number;
//   image?: string;
//   variant?: string;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function getLoggedInUser(): { name: string; email: string } | null {
//   if (typeof window === "undefined") return null;
//   try {
//     const raw = localStorage.getItem("user");
//     if (!raw) return null;
//     const user = JSON.parse(raw);
//     if (!user?.email) return null;
//     return { name: user.name || "", email: String(user.email).toLowerCase() };
//   } catch {
//     return null;
//   }
// }

// function mapFirebaseItems(items: FirebaseCartItem[]): CartItem[] {
//   return (items || []).map((item) => ({
//     id: item.productId,
//     productId: item.productId,
//     name: item.name,
//     category: item.category || "",
//     price: Number(item.price || 0),
//     quantity: Math.max(1, Number(item.quantity || 1)),
//     image: item.image || "",
//     variant: item.variant,
//   }));
// }

// export default function CartPage() {
//   const [user, setUser] = useState<{ name: string; email: string } | null>(null);
//   const [items, setItems] = useState<CartItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);

//   useEffect(() => {
//     // Clear old localStorage cart once
//     try {
//       localStorage.removeItem("cart");
//     } catch {
//       /* ignore */
//     }

//     const current = getLoggedInUser();
//     setUser(current);

//     if (!current) {
//       setItems([]);
//       setLoading(false);
//       return;
//     }

//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const cart = await getCart(current!.email);
//         if (!cancelled) {
//           setItems(mapFirebaseItems(cart?.items || []));
//         }
//       } catch (err) {
//         console.error("Failed to load cart:", err);
//         if (!cancelled) setItems([]);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const updateQuantity = async (item: CartItem, change: number) => {
//     if (!user) return;
//     const nextQty = Math.max(1, item.quantity + change);
//     setUpdating(true);

//     setItems((current) =>
//       current.map((i) =>
//         i.productId === item.productId && i.variant === item.variant
//           ? { ...i, quantity: nextQty }
//           : i
//       )
//     );

//     try {
//       const cart = await updateCartItem(
//         user.email,
//         item.productId,
//         nextQty,
//         item.variant
//       );
//       setItems(mapFirebaseItems(cart.items));
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error(err);
//       const cart = await getCart(user.email);
//       setItems(mapFirebaseItems(cart?.items || []));
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const removeItem = async (item: CartItem) => {
//     if (!user) return;
//     setUpdating(true);

//     setItems((current) =>
//       current.filter(
//         (i) =>
//           !(i.productId === item.productId && i.variant === item.variant)
//       )
//     );

//     try {
//       const cart = await removeFromCart(
//         user.email,
//         item.productId,
//         item.variant
//       );
//       setItems(mapFirebaseItems(cart.items));
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error(err);
//       const cart = await getCart(user.email);
//       setItems(mapFirebaseItems(cart?.items || []));
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const subtotal = useMemo(
//     () => items.reduce((total, item) => total + item.price * item.quantity, 0),
//     [items]
//   );
//   const total = subtotal;

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </main>
//     );
//   }

//   if (!user) {
//     return (
//       <main className="min-h-screen bg-[#f7f9f8]">
//         <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//           <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
//             <Link href="/" className="hover:text-slate-900">
//               Home
//             </Link>
//             <span>/</span>
//             <span className="font-medium text-slate-800">Cart</span>
//           </div>

//           <section className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
//               <ShoppingBag size={28} />
//             </div>
//             <h2 className="mt-5 text-xl font-bold text-slate-900">
//               Sign in to view your cart
//             </h2>
//             <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
//               Your cart is saved in your account. Sign in to add products and
//               checkout.
//             </p>
//             <div className="mt-6 flex flex-wrap justify-center gap-3">
//               <Link
//                 href="/sign-in"
//                 className="inline-flex items-center gap-2 rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white hover:bg-[#125849]"
//               >
//                 Sign in
//                 <ArrowRight size={16} />
//               </Link>
//               <Link
//                 href="/products"
//                 className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
//               >
//                 Browse products
//               </Link>
//             </div>
//           </section>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
//           <Link href="/" className="hover:text-slate-900">
//             Home
//           </Link>
//           <span>/</span>
//           <span className="font-medium text-slate-800">Cart</span>
//         </div>

//         <div className="mb-8">
//           <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//             Shopping cart
//           </p>
//           <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
//             Your Cart
//           </h1>
//           {/* <p className="mt-2 text-sm text-slate-500">
//             Signed in as{" "}
//             <span className="font-medium text-slate-700">{user.email}</span>
//           </p> */}
//         </div>

//         {items.length > 0 ? (
//           <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
//             <section className="rounded-xl border border-slate-200 bg-white">
//               <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
//                 <div>
//                   <h2 className="text-sm font-bold text-slate-900">Cart items</h2>
//                   <p className="mt-1 text-xs text-slate-500">
//                     {items.reduce((c, i) => c + i.quantity, 0)} item
//                     {items.reduce((c, i) => c + i.quantity, 0) !== 1 ? "s" : ""}
//                   </p>
//                 </div>
//                 <ShoppingBag size={19} className="text-slate-400" />
//               </div>

//               <div className="divide-y divide-slate-100">
//                 {items.map((item) => (
//                   <div
//                     key={`${item.productId}-${item.variant || "default"}`}
//                     className="p-5 sm:p-6"
//                   >
//                     <div className="flex gap-4">
//                       <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-100 text-slate-400 sm:h-28 sm:w-28">
//                         {item.image ? (
//                           <img
//                             src={item.image}
//                             alt={item.name}
//                             className="h-full w-full object-cover"
//                           />
//                         ) : (
//                           <ShoppingBag size={27} />
//                         )}
//                       </div>

//                       <div className="min-w-0 flex-1">
//                         <div className="flex flex-col justify-between gap-3 sm:flex-row">
//                           <div>
//                             <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
//                               {item.category || "Furniture"}
//                             </p>
//                             <h3 className="mt-1 text-sm font-bold text-slate-900 sm:text-base">
//                               {item.name}
//                             </h3>
//                             <p className="mt-1 text-sm font-semibold text-slate-700">
//                               {formatCurrency(item.price)}
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             onClick={() => removeItem(item)}
//                             disabled={updating}
//                             className="flex h-8 w-8 shrink-0 items-center justify-center self-start rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
//                           >
//                             <Trash2 size={16} />
//                           </button>
//                         </div>

//                         <div className="mt-4 flex items-center justify-between">
//                           <div className="flex items-center rounded-lg border border-slate-200">
//                             <button
//                               type="button"
//                               onClick={() => updateQuantity(item, -1)}
//                               disabled={item.quantity <= 1 || updating}
//                               className="flex h-9 w-9 items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-40"
//                             >
//                               <Minus size={14} />
//                             </button>
//                             <span className="flex h-9 min-w-10 items-center justify-center border-x border-slate-200 px-2 text-sm font-semibold text-slate-800">
//                               {item.quantity}
//                             </span>
//                             <button
//                               type="button"
//                               onClick={() => updateQuantity(item, 1)}
//                               disabled={updating}
//                               className="flex h-9 w-9 items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-50"
//                             >
//                               <Plus size={14} />
//                             </button>
//                           </div>

//                           <p className="text-sm font-bold text-slate-900">
//                             {formatCurrency(item.price * item.quantity)}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="border-t border-slate-100 px-5 py-4 sm:px-6">
//                 <Link
//                   href="/products"
//                   className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900"
//                 >
//                   Continue shopping
//                   <ArrowRight size={15} />
//                 </Link>
//               </div>
//             </section>

//             <aside className="h-fit rounded-xl border border-slate-200 bg-white lg:sticky lg:top-6">
//               <div className="border-b border-slate-100 px-5 py-5">
//                 <h2 className="text-base font-bold text-slate-900">Order summary</h2>
//               </div>
//               <div className="space-y-4 px-5 py-5">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-slate-500">Subtotal</span>
//                   <span className="font-semibold text-slate-900">
//                     {formatCurrency(subtotal)}
//                   </span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-slate-500">Delivery</span>
//                   <span className="font-semibold text-emerald-600">Free</span>
//                 </div>
//                 <div className="border-t border-slate-100 pt-4 flex justify-between">
//                   <span className="text-sm font-semibold text-slate-900">Total</span>
//                   <span className="text-xl font-bold text-slate-900">
//                     {formatCurrency(total)}
//                   </span>
//                 </div>
//                 <Link
//                   href="/checkout"
//                   className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
//                 >
//                   Proceed to checkout
//                   <ArrowRight size={16} />
//                 </Link>
//               </div>
//             </aside>
//           </div>
//         ) : (
//           <section className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
//             <ShoppingBag size={28} className="mx-auto text-slate-300" />
//             <h2 className="mt-5 text-xl font-bold text-slate-900">
//               Your cart is empty
//             </h2>
//             <p className="mt-2 text-sm text-slate-500">
//               Add products from the collection. Quantity is managed here.
//             </p>
//             <Link
//               href="/products"
//               className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
//             >
//               Browse products
//               <ArrowRight size={16} />
//             </Link>
//           </section>
//         )}
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowRight,
//   Minus,
//   Plus,
//   ShoppingBag,
//   Trash2,
//   Loader2,
// } from "lucide-react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import {
//   getCart,
//   updateCartItem,
//   removeFromCart,
//   type CartItem as FirebaseCartItem,
// } from "@/services/cartService";

// interface CartItem {
//   id: string;
//   productId: string;
//   name: string;
//   category?: string;
//   price: number;
//   quantity: number;
//   image?: string;
//   variant?: string;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function mapFirebaseItems(items: FirebaseCartItem[]): CartItem[] {
//   return (items || []).map((item) => ({
//     id: item.productId || item.id,
//     productId: item.productId || item.id,
//     name: item.name,
//     category: item.category || "",
//     price: Number(item.price || 0),
//     quantity: Math.max(1, Number(item.quantity || 1)),
//     image: item.image || "",
//     variant: item.variant,
//   }));
// }

// export default function CartPage() {
//   const [userId, setUserId] = useState<string>("");
//   const [userEmail, setUserEmail] = useState<string>("");
//   const [items, setItems] = useState<CartItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);

//   useEffect(() => {
//     let cancelled = false;

//     const unsub = onAuthStateChanged(auth, async (user) => {
//       if (cancelled) return;

//       if (!user) {
//         setUserId("");
//         setUserEmail("");
//         setItems([]);
//         setLoading(false);
//         return;
//       }

//       setUserId(user.uid);
//       setUserEmail(user.email || "");
//       setLoading(true);

//       try {
//         // IMPORTANT: same key as checkout — Auth UID
//         const cart = await getCart(user.uid);
//         if (!cancelled) {
//           setItems(mapFirebaseItems(cart?.items || []));
//         }
//       } catch (err) {
//         console.error("Failed to load cart:", err);
//         if (!cancelled) setItems([]);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     });

//     return () => {
//       cancelled = true;
//       unsub();
//     };
//   }, []);

//   const updateQuantity = async (item: CartItem, change: number) => {
//     if (!userId) return;
//     const nextQty = Math.max(1, item.quantity + change);
//     setUpdating(true);

//     setItems((current) =>
//       current.map((i) =>
//         i.productId === item.productId && i.variant === item.variant
//           ? { ...i, quantity: nextQty }
//           : i
//       )
//     );

//     try {
//       const cart = await updateCartItem(
//         userId,
//         item.productId,
//         nextQty,
//         item.variant
//       );
//       setItems(mapFirebaseItems(cart.items));
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error(err);
//       const cart = await getCart(userId);
//       setItems(mapFirebaseItems(cart?.items || []));
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const removeItem = async (item: CartItem) => {
//     if (!userId) return;
//     setUpdating(true);

//     setItems((current) =>
//       current.filter(
//         (i) =>
//           !(i.productId === item.productId && i.variant === item.variant)
//       )
//     );

//     try {
//       const cart = await removeFromCart(
//         userId,
//         item.productId,
//         item.variant
//       );
//       setItems(mapFirebaseItems(cart.items));
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error(err);
//       const cart = await getCart(userId);
//       setItems(mapFirebaseItems(cart?.items || []));
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const subtotal = useMemo(
//     () => items.reduce((total, item) => total + item.price * item.quantity, 0),
//     [items]
//   );
//   const total = subtotal;

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </main>
//     );
//   }

//   if (!userId) {
//     return (
//       <main className="min-h-screen bg-[#f7f9f8]">
//         <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//           <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
//             <Link href="/" className="hover:text-slate-900">
//               Home
//             </Link>
//             <span>/</span>
//             <span className="font-medium text-slate-800">Cart</span>
//           </div>

//           <section className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
//               <ShoppingBag size={28} />
//             </div>
//             <h2 className="mt-5 text-xl font-bold text-slate-900">
//               Sign in to view your cart
//             </h2>
//             <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
//               Your cart is saved in your account. Sign in to add products and
//               checkout.
//             </p>
//             <div className="mt-6 flex flex-wrap justify-center gap-3">
//               <Link
//                 href="/sign-in"
//                 className="inline-flex items-center gap-2 rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white hover:bg-[#125849]"
//               >
//                 Sign in
//                 <ArrowRight size={16} />
//               </Link>
//               <Link
//                 href="/products"
//                 className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
//               >
//                 Browse products
//               </Link>
//             </div>
//           </section>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
//           <Link href="/" className="hover:text-slate-900">
//             Home
//           </Link>
//           <span>/</span>
//           <span className="font-medium text-slate-800">Cart</span>
//         </div>

//         <div className="mb-8">
//           <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//             Shopping cart
//           </p>
//           <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
//             Your Cart
//           </h1>
//         </div>

//         {items.length > 0 ? (
//           <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
//             <section className="rounded-xl border border-slate-200 bg-white">
//               <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
//                 <div>
//                   <h2 className="text-sm font-bold text-slate-900">Cart items</h2>
//                   <p className="mt-1 text-xs text-slate-500">
//                     {items.reduce((c, i) => c + i.quantity, 0)} item
//                     {items.reduce((c, i) => c + i.quantity, 0) !== 1 ? "s" : ""}
//                   </p>
//                 </div>
//                 <ShoppingBag size={19} className="text-slate-400" />
//               </div>

//               <div className="divide-y divide-slate-100">
//                 {items.map((item) => (
//                   <div
//                     key={`${item.productId}-${item.variant || "default"}`}
//                     className="p-5 sm:p-6"
//                   >
//                     <div className="flex gap-4">
//                       <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-100 text-slate-400 sm:h-28 sm:w-28">
//                         {item.image ? (
//                           // eslint-disable-next-line @next/next/no-img-element
//                           <img
//                             src={item.image}
//                             alt={item.name}
//                             className="h-full w-full object-cover"
//                           />
//                         ) : (
//                           <ShoppingBag size={27} />
//                         )}
//                       </div>

//                       <div className="min-w-0 flex-1">
//                         <div className="flex flex-col justify-between gap-3 sm:flex-row">
//                           <div>
//                             <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
//                               {item.category || "Furniture"}
//                             </p>
//                             <h3 className="mt-1 text-sm font-bold text-slate-900 sm:text-base">
//                               {item.name}
//                             </h3>
//                             <p className="mt-1 text-sm font-semibold text-slate-700">
//                               {formatCurrency(item.price)}
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             onClick={() => removeItem(item)}
//                             disabled={updating}
//                             className="flex h-8 w-8 shrink-0 items-center justify-center self-start rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
//                           >
//                             <Trash2 size={16} />
//                           </button>
//                         </div>

//                         <div className="mt-4 flex items-center justify-between">
//                           <div className="flex items-center rounded-lg border border-slate-200">
//                             <button
//                               type="button"
//                               onClick={() => updateQuantity(item, -1)}
//                               disabled={item.quantity <= 1 || updating}
//                               className="flex h-9 w-9 items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-40"
//                             >
//                               <Minus size={14} />
//                             </button>
//                             <span className="flex h-9 min-w-10 items-center justify-center border-x border-slate-200 px-2 text-sm font-semibold text-slate-800">
//                               {item.quantity}
//                             </span>
//                             <button
//                               type="button"
//                               onClick={() => updateQuantity(item, 1)}
//                               disabled={updating}
//                               className="flex h-9 w-9 items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-50"
//                             >
//                               <Plus size={14} />
//                             </button>
//                           </div>

//                           <p className="text-sm font-bold text-slate-900">
//                             {formatCurrency(item.price * item.quantity)}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="border-t border-slate-100 px-5 py-4 sm:px-6">
//                 <Link
//                   href="/products"
//                   className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900"
//                 >
//                   Continue shopping
//                   <ArrowRight size={15} />
//                 </Link>
//               </div>
//             </section>

//             <aside className="h-fit rounded-xl border border-slate-200 bg-white lg:sticky lg:top-6">
//               <div className="border-b border-slate-100 px-5 py-5">
//                 <h2 className="text-base font-bold text-slate-900">
//                   Order summary
//                 </h2>
//               </div>
//               <div className="space-y-4 px-5 py-5">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-slate-500">Subtotal</span>
//                   <span className="font-semibold text-slate-900">
//                     {formatCurrency(subtotal)}
//                   </span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-slate-500">Delivery</span>
//                   <span className="font-semibold text-emerald-600">Free</span>
//                 </div>
//                 <div className="flex justify-between border-t border-slate-100 pt-4">
//                   <span className="text-sm font-semibold text-slate-900">
//                     Total
//                   </span>
//                   <span className="text-xl font-bold text-slate-900">
//                     {formatCurrency(total)}
//                   </span>
//                 </div>
//                 <Link
//                   href="/checkout"
//                   className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
//                 >
//                   Proceed to checkout
//                   <ArrowRight size={16} />
//                 </Link>
//               </div>
//             </aside>
//           </div>
//         ) : (
//           <section className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
//             <ShoppingBag size={28} className="mx-auto text-slate-300" />
//             <h2 className="mt-5 text-xl font-bold text-slate-900">
//               Your cart is empty
//             </h2>
//             <p className="mt-2 text-sm text-slate-500">
//               Add products from the collection. Quantity is managed here.
//             </p>
//             <Link
//               href="/products"
//               className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
//             >
//               Browse products
//               <ArrowRight size={16} />
//             </Link>
//           </section>
//         )}
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowRight,
//   Minus,
//   Plus,
//   ShoppingBag,
//   Trash2,
//   Loader2,
// } from "lucide-react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import {
//   getCart,
//   updateCartItem,
//   removeFromCart,
//   type CartItem as FirebaseCartItem,
// } from "@/services/cartService";

// interface CartItem {
//   id: string;
//   productId: string;
//   name: string;
//   category?: string;
//   price: number;
//   quantity: number;
//   image?: string;
//   variant?: string;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function mapFirebaseItems(items: FirebaseCartItem[]): CartItem[] {
//   return (items || []).map((item) => ({
//     id: item.productId || item.id,
//     productId: item.productId || item.id,
//     name: item.name,
//     category: item.category || "",
//     price: Number(item.price || 0),
//     quantity: Math.max(1, Number(item.quantity || 1)),
//     image: item.image || "",
//     variant: item.variant,
//   }));
// }

// export default function CartPage() {
//   const [userId, setUserId] = useState<string>("");
//   const [userEmail, setUserEmail] = useState<string>("");
//   const [items, setItems] = useState<CartItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);

//   useEffect(() => {
//     let cancelled = false;

//     const unsub = onAuthStateChanged(auth, async (user) => {
//       if (cancelled) return;

//       if (!user) {
//         setUserId("");
//         setUserEmail("");
//         setItems([]);
//         setLoading(false);
//         return;
//       }

//       setUserId(user.uid);
//       setUserEmail(user.email || "");
//       setLoading(true);

//       try {
//         const cart = await getCart(user.uid);
//         if (!cancelled) {
//           setItems(mapFirebaseItems(cart?.items || []));
//         }
//       } catch (err) {
//         console.error("Failed to load cart:", err);
//         if (!cancelled) setItems([]);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     });

//     return () => {
//       cancelled = true;
//       unsub();
//     };
//   }, []);

//   const updateQuantity = async (item: CartItem, change: number) => {
//     if (!userId) return;
//     const nextQty = Math.max(1, item.quantity + change);
//     setUpdating(true);

//     setItems((current) =>
//       current.map((i) =>
//         i.productId === item.productId && i.variant === item.variant
//           ? { ...i, quantity: nextQty }
//           : i
//       )
//     );

//     try {
//       const cart = await updateCartItem(
//         userId,
//         item.productId,
//         nextQty,
//         item.variant
//       );
//       setItems(mapFirebaseItems(cart.items));
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error(err);
//       const cart = await getCart(userId);
//       setItems(mapFirebaseItems(cart?.items || []));
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const removeItem = async (item: CartItem) => {
//     if (!userId) return;
//     setUpdating(true);

//     setItems((current) =>
//       current.filter(
//         (i) =>
//           !(i.productId === item.productId && i.variant === item.variant)
//       )
//     );

//     try {
//       const cart = await removeFromCart(userId, item.productId, item.variant);
//       setItems(mapFirebaseItems(cart.items));
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error(err);
//       const cart = await getCart(userId);
//       setItems(mapFirebaseItems(cart?.items || []));
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const subtotal = useMemo(
//     () => items.reduce((total, item) => total + item.price * item.quantity, 0),
//     [items]
//   );
//   const total = subtotal;

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </main>
//     );
//   }

//   if (!userId) {
//     return (
//       <main className="min-h-screen bg-[#f7f9f8]">
//         <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//           <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
//             <Link href="/" className="hover:text-slate-900">
//               Home
//             </Link>
//             <span>/</span>
//             <span className="font-medium text-slate-800">Cart</span>
//           </div>

//           <section className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
//               <ShoppingBag size={28} />
//             </div>
//             <h2 className="mt-5 text-xl font-bold text-slate-900">
//               Sign in to view your cart
//             </h2>
//             <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
//               Your cart is saved in your account. Sign in to add products and
//               checkout.
//             </p>
//             <div className="mt-6 flex flex-wrap justify-center gap-3">
//               <Link
//                 href="/sign-in"
//                 className="inline-flex items-center gap-2 rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white hover:bg-[#125849]"
//               >
//                 Sign in
//                 <ArrowRight size={16} />
//               </Link>
//               <Link
//                 href="/products"
//                 className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
//               >
//                 Browse products
//               </Link>
//             </div>
//           </section>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
//           <Link href="/" className="hover:text-slate-900">
//             Home
//           </Link>
//           <span>/</span>
//           <span className="font-medium text-slate-800">Cart</span>
//         </div>

//         <div className="mb-8">
//           <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//             Shopping cart
//           </p>
//           <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
//             Your Cart
//           </h1>
//           {/* {userEmail && (
//             <p className="mt-2 text-sm text-slate-500">
//               Signed in as{" "}
//               <span className="font-medium text-slate-700">{userEmail}</span>
//             </p>
//           )} */}
//         </div>

//         {items.length > 0 ? (
//           <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
//             <section className="rounded-xl border border-slate-200 bg-white">
//               <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
//                 <div>
//                   <h2 className="text-sm font-bold text-slate-900">Cart items</h2>
//                   <p className="mt-1 text-xs text-slate-500">
//                     {items.reduce((c, i) => c + i.quantity, 0)} item
//                     {items.reduce((c, i) => c + i.quantity, 0) !== 1 ? "s" : ""}
//                   </p>
//                 </div>
//                 <ShoppingBag size={19} className="text-slate-400" />
//               </div>

//               <div className="divide-y divide-slate-100">
//                 {items.map((item) => (
//                   <div
//                     key={`${item.productId}-${item.variant || "default"}`}
//                     className="p-5 sm:p-6"
//                   >
//                     <div className="flex gap-4">
//                       <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-100 text-slate-400 sm:h-28 sm:w-28">
//                         {item.image ? (
//                           // eslint-disable-next-line @next/next/no-img-element
//                           <img
//                             src={item.image}
//                             alt={item.name}
//                             className="h-full w-full object-cover"
//                           />
//                         ) : (
//                           <ShoppingBag size={27} />
//                         )}
//                       </div>

//                       <div className="min-w-0 flex-1">
//                         <div className="flex flex-col justify-between gap-3 sm:flex-row">
//                           <div>
//                             <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
//                               {item.category || "Furniture"}
//                             </p>
//                             <h3 className="mt-1 text-sm font-bold text-slate-900 sm:text-base">
//                               {item.name}
//                             </h3>
//                             <p className="mt-1 text-sm font-semibold text-slate-700">
//                               {formatCurrency(item.price)}
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             onClick={() => removeItem(item)}
//                             disabled={updating}
//                             className="flex h-8 w-8 shrink-0 items-center justify-center self-start rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
//                           >
//                             <Trash2 size={16} />
//                           </button>
//                         </div>

//                         <div className="mt-4 flex items-center justify-between">
//                           <div className="flex items-center rounded-lg border border-slate-200">
//                             <button
//                               type="button"
//                               onClick={() => updateQuantity(item, -1)}
//                               disabled={item.quantity <= 1 || updating}
//                               className="flex h-9 w-9 items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-40"
//                             >
//                               <Minus size={14} />
//                             </button>
//                             <span className="flex h-9 min-w-10 items-center justify-center border-x border-slate-200 px-2 text-sm font-semibold text-slate-800">
//                               {item.quantity}
//                             </span>
//                             <button
//                               type="button"
//                               onClick={() => updateQuantity(item, 1)}
//                               disabled={updating}
//                               className="flex h-9 w-9 items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-50"
//                             >
//                               <Plus size={14} />
//                             </button>
//                           </div>

//                           <p className="text-sm font-bold text-slate-900">
//                             {formatCurrency(item.price * item.quantity)}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="border-t border-slate-100 px-5 py-4 sm:px-6">
//                 <Link
//                   href="/products"
//                   className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900"
//                 >
//                   Continue shopping
//                   <ArrowRight size={15} />
//                 </Link>
//               </div>
//             </section>

//             <aside className="h-fit rounded-xl border border-slate-200 bg-white lg:sticky lg:top-6">
//               <div className="border-b border-slate-100 px-5 py-5">
//                 <h2 className="text-base font-bold text-slate-900">
//                   Order summary
//                 </h2>
//               </div>
//               <div className="space-y-4 px-5 py-5">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-slate-500">Subtotal</span>
//                   <span className="font-semibold text-slate-900">
//                     {formatCurrency(subtotal)}
//                   </span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-slate-500">Delivery</span>
//                   <span className="font-semibold text-emerald-600">Free</span>
//                 </div>
//                 <div className="flex justify-between border-t border-slate-100 pt-4">
//                   <span className="text-sm font-semibold text-slate-900">
//                     Total
//                   </span>
//                   <span className="text-xl font-bold text-slate-900">
//                     {formatCurrency(total)}
//                   </span>
//                 </div>
//                 <Link
//                   href="/checkout"
//                   className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
//                 >
//                   Proceed to checkout
//                   <ArrowRight size={16} />
//                 </Link>
//               </div>
//             </aside>
//           </div>
//         ) : (
//           <section className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
//             <ShoppingBag size={28} className="mx-auto text-slate-300" />
//             <h2 className="mt-5 text-xl font-bold text-slate-900">
//               Your cart is empty
//             </h2>
//             <p className="mt-2 text-sm text-slate-500">
//               Add products from the collection. Quantity is managed here.
//             </p>
//             <Link
//               href="/products"
//               className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
//             >
//               Browse products
//               <ArrowRight size={16} />
//             </Link>
//           </section>
//         )}
//       </div>
//     </main>
//   );
// }

"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  Loader2,
} from "lucide-react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import {
  getCart,
  updateCartItem,
  removeFromCart,
  type CartItem as FirebaseCartItem,
} from "@/services/cartService";

interface CartItem {
  id: string;
  productId: string;
  name: string;
  category?: string;
  price: number;
  quantity: number;
  image?: string;
  variant?: string;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function mapFirebaseItems(items: FirebaseCartItem[]): CartItem[] {
  return (items || []).map((item) => ({
    id: item.productId || item.id,
    productId: item.productId || item.id,
    name: item.name,
    category: item.category || "",
    price: Number(item.price || 0),
    quantity: Math.max(1, Number(item.quantity || 1)),
    image: item.image || "",
    variant: item.variant,
  }));
}

export default function CartPage() {
  const [userId, setUserId] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const unsub = onAuthStateChanged(auth, async (user) => {
      if (cancelled) return;

      if (!user) {
        setUserId("");
        setUserEmail("");
        setItems([]);
        setLoading(false);
        return;
      }

      setUserId(user.uid);
      setUserEmail(user.email || "");
      setLoading(true);

      try {
        const cart = await getCart(user.uid);
        if (!cancelled) {
          setItems(mapFirebaseItems(cart?.items || []));
        }
      } catch (err) {
        console.error("Failed to load cart:", err);
        if (!cancelled) setItems([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    });

    return () => {
      cancelled = true;
      unsub();
    };
  }, []);

  const updateQuantity = async (item: CartItem, change: number) => {
    if (!userId) return;
    const nextQty = Math.max(1, item.quantity + change);
    setUpdating(true);

    setItems((current) =>
      current.map((i) =>
        i.productId === item.productId && i.variant === item.variant
          ? { ...i, quantity: nextQty }
          : i
      )
    );

    try {
      const cart = await updateCartItem(
        userId,
        item.productId,
        nextQty,
        item.variant
      );
      setItems(mapFirebaseItems(cart.items));
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (err) {
      console.error(err);
      const cart = await getCart(userId);
      setItems(mapFirebaseItems(cart?.items || []));
    } finally {
      setUpdating(false);
    }
  };

  const removeItem = async (item: CartItem) => {
    if (!userId) return;
    setUpdating(true);

    setItems((current) =>
      current.filter(
        (i) =>
          !(i.productId === item.productId && i.variant === item.variant)
      )
    );

    try {
      const cart = await removeFromCart(userId, item.productId, item.variant);
      setItems(mapFirebaseItems(cart.items));
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (err) {
      console.error(err);
      const cart = await getCart(userId);
      setItems(mapFirebaseItems(cart?.items || []));
    } finally {
      setUpdating(false);
    }
  };

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items]
  );
  const total = subtotal;
  const itemCount = items.reduce((c, i) => c + i.quantity, 0);

  if (loading) {
    return (
      <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
        <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
      </main>
    );
  }

  if (!userId) {
    return (
      <main className="min-h-screen bg-[#f7f9f8]">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mb-4 flex items-center gap-2 text-xs text-slate-500 sm:mb-5 sm:text-sm">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
            <span>/</span>
            <span className="font-medium text-slate-800">Cart</span>
          </div>

          <section className="rounded-xl border border-slate-200 bg-white px-4 py-12 text-center sm:px-6 sm:py-16">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400 sm:h-16 sm:w-16">
              <ShoppingBag size={26} />
            </div>
            <h2 className="mt-4 text-lg font-bold text-slate-900 sm:mt-5 sm:text-xl">
              Sign in to view your cart
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
              Your cart is saved in your account. Sign in to add products and
              checkout.
            </p>
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3">
              <Link
                href="/sign-in"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white hover:bg-[#125849]"
              >
                Sign in
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/products"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Browse products
              </Link>
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f9f8] pb-28 lg:pb-0">
      <div className="mx-auto w-full max-w-6xl px-3 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-4 flex items-center gap-2 text-xs text-slate-500 sm:mb-5 sm:text-sm">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>
          <span>/</span>
          <span className="font-medium text-slate-800">Cart</span>
        </div>

        <div className="mb-5 sm:mb-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:text-xs">
            Shopping cart
          </p>
          <h1 className="mt-1.5 text-2xl font-bold tracking-tight text-slate-900 sm:mt-2 sm:text-3xl">
            Your Cart
          </h1>
        </div>

        {items.length > 0 ? (
          <div className="grid gap-4 lg:grid-cols-[1fr_320px] lg:gap-6">
            <section className="rounded-xl border border-slate-200 bg-white">
              <div className="flex items-center justify-between border-b border-slate-100 px-3 py-3 sm:px-6 sm:py-4">
                <div>
                  <h2 className="text-sm font-bold text-slate-900">
                    Cart items
                  </h2>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {itemCount} item{itemCount !== 1 ? "s" : ""}
                  </p>
                </div>
                <ShoppingBag size={18} className="text-slate-400" />
              </div>

              <div className="divide-y divide-slate-100">
                {items.map((item) => (
                  <div
                    key={`${item.productId}-${item.variant || "default"}`}
                    className="p-3 sm:p-6"
                  >
                    <div className="flex gap-3 sm:gap-4">
                      <Link
                        href={`/products/${item.productId}`}
                        className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-100 text-slate-400 sm:h-28 sm:w-28"
                      >
                        {item.image ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <ShoppingBag size={24} className="sm:h-7 sm:w-7" />
                        )}
                      </Link>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <p className="truncate text-[10px] font-semibold uppercase tracking-wide text-slate-400 sm:text-[11px]">
                              {item.category || "Furniture"}
                            </p>
                            <Link href={`/products/${item.productId}`}>
                              <h3 className="mt-0.5 line-clamp-2 text-sm font-bold leading-snug text-slate-900 sm:mt-1 sm:text-base">
                                {item.name}
                              </h3>
                            </Link>
                            <p className="mt-1 text-sm font-semibold text-slate-700">
                              {formatCurrency(item.price)}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeItem(item)}
                            disabled={updating}
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
                            aria-label="Remove item"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>

                        <div className="mt-3 flex items-center justify-between gap-2 sm:mt-4">
                          <div className="flex items-center rounded-lg border border-slate-200">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item, -1)}
                              disabled={item.quantity <= 1 || updating}
                              className="flex h-9 w-9 items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-40"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="flex h-9 min-w-9 items-center justify-center border-x border-slate-200 px-1.5 text-sm font-semibold text-slate-800 sm:min-w-10 sm:px-2">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item, 1)}
                              disabled={updating}
                              className="flex h-9 w-9 items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-50"
                              aria-label="Increase quantity"
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          <p className="text-sm font-bold text-slate-900">
                            {formatCurrency(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-100 px-3 py-3 sm:px-6 sm:py-4">
                <Link
                  href="/products"
                  className="inline-flex min-h-[40px] items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900"
                >
                  Continue shopping
                  <ArrowRight size={15} />
                </Link>
              </div>
            </section>

            {/* Order summary — desktop sidebar */}
            <aside className="hidden h-fit rounded-xl border border-slate-200 bg-white lg:sticky lg:top-6 lg:block">
              <div className="border-b border-slate-100 px-5 py-5">
                <h2 className="text-base font-bold text-slate-900">
                  Order summary
                </h2>
              </div>
              <div className="space-y-4 px-5 py-5">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Subtotal</span>
                  <span className="font-semibold text-slate-900">
                    {formatCurrency(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Delivery</span>
                  <span className="font-semibold text-emerald-600">Free</span>
                </div>
                <div className="flex justify-between border-t border-slate-100 pt-4">
                  <span className="text-sm font-semibold text-slate-900">
                    Total
                  </span>
                  <span className="text-xl font-bold text-slate-900">
                    {formatCurrency(total)}
                  </span>
                </div>
                <Link
                  href="/checkout"
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Proceed to checkout
                  <ArrowRight size={16} />
                </Link>
              </div>
            </aside>

            {/* Mobile order summary card */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 lg:hidden">
              <h2 className="text-sm font-bold text-slate-900">
                Order summary
              </h2>
              <div className="mt-3 space-y-2.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Subtotal</span>
                  <span className="font-semibold text-slate-900">
                    {formatCurrency(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Delivery</span>
                  <span className="font-semibold text-emerald-600">Free</span>
                </div>
                <div className="flex justify-between border-t border-slate-100 pt-2.5">
                  <span className="font-semibold text-slate-900">Total</span>
                  <span className="text-lg font-bold text-slate-900">
                    {formatCurrency(total)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <section className="rounded-xl border border-slate-200 bg-white px-4 py-12 text-center sm:px-6 sm:py-16">
            <ShoppingBag size={28} className="mx-auto text-slate-300" />
            <h2 className="mt-4 text-lg font-bold text-slate-900 sm:mt-5 sm:text-xl">
              Your cart is empty
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Add products from the collection. Quantity is managed here.
            </p>
            <Link
              href="/products"
              className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
            >
              Browse products
              <ArrowRight size={16} />
            </Link>
          </section>
        )}
      </div>

      {/* Sticky checkout bar — mobile only */}
      {items.length > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white px-3 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.06)] lg:hidden">
          <div className="mx-auto flex max-w-6xl items-center gap-3">
            <div className="min-w-0 flex-1">
              <p className="text-[10px] text-slate-500">Total</p>
              <p className="truncate text-base font-bold text-slate-900">
                {formatCurrency(total)}
              </p>
            </div>
            <Link
              href="/checkout"
              className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 text-sm font-semibold text-white"
            >
              Checkout
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
