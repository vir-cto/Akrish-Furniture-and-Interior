// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import {
//   ArrowLeft,
//   ArrowRight,
//   CalendarDays,
//   Loader2,
//   MapPin,
//   Package,
//   Phone,
//   Truck,
//   CreditCard,
// } from "lucide-react";
// import { getOrder, type Order } from "@/services/checkoutService";

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function formatDate(value: unknown): string {
//   try {
//     if (
//       value &&
//       typeof value === "object" &&
//       "toDate" in value &&
//       typeof (value as { toDate: () => Date }).toDate === "function"
//     ) {
//       return (value as { toDate: () => Date }).toDate().toLocaleDateString("en-IN", {
//         day: "numeric",
//         month: "short",
//         year: "numeric",
//       });
//     }
//   } catch {
//     /* ignore */
//   }
//   return "—";
// }

// const STATUS_STYLES: Record<string, string> = {
//   Pending: "bg-slate-50 text-slate-700 ring-slate-200",
//   Confirmed: "bg-indigo-50 text-indigo-700 ring-indigo-200",
//   Processing: "bg-amber-50 text-amber-700 ring-amber-200",
//   Shipped: "bg-blue-50 text-blue-700 ring-blue-200",
//   Delivered: "bg-emerald-50 text-emerald-700 ring-emerald-200",
//   Cancelled: "bg-red-50 text-red-700 ring-red-200",
// };

// export default function OrderDetailsPage() {
//   const params = useParams();
//   const router = useRouter();
//   const orderId = params.orderId as string;

//   const [order, setOrder] = useState<Order | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getOrder(orderId);
//         if (!cancelled) setOrder(data);
//       } catch (err) {
//         console.error(err);
//         if (!cancelled) setOrder(null);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     if (orderId) load();
//     return () => {
//       cancelled = true;
//     };
//   }, [orderId]);

//   if (loading) {
//     return (
//       <div className="flex min-h-[40vh] items-center justify-center">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </div>
//     );
//   }

//   if (!order) {
//     return (
//       <div className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
//         <Package className="mx-auto text-slate-400" size={28} />
//         <h2 className="mt-4 text-lg font-bold text-slate-900">Order not found</h2>
//         <p className="mt-2 text-sm text-slate-500">
//           This order does not exist or you do not have access to it.
//         </p>
//         <Link
//           href="/account/orders"
//           className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
//         >
//           <ArrowLeft size={16} />
//           Back to orders
//         </Link>
//       </div>
//     );
//   }

//   const status = order.orderStatus || "Processing";
//   const addr = order.shippingAddress;

//   return (
//     <div className="w-full">
//       {/* Header */}
//       <div className="mb-6">
//         <button
//           type="button"
//           onClick={() => router.push("/account/orders")}
//           className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900"
//         >
//           <ArrowLeft size={16} />
//           Back to orders
//         </button>

//         <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//               Order details
//             </p>
//             <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
//               {order.orderNumber || order.id.slice(0, 10).toUpperCase()}
//             </h1>
//             <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500">
//               <span className="inline-flex items-center gap-1.5">
//                 <CalendarDays size={14} />
//                 Placed on {formatDate(order.createdAt)}
//               </span>
//               <span
//                 className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${
//                   STATUS_STYLES[status] || STATUS_STYLES.Processing
//                 }`}
//               >
//                 {status}
//               </span>
//             </div>
//           </div>

//           {status !== "Cancelled" && status !== "Delivered" && (
//             <Link
//               href={`/account/orders/${order.id}/track`}
//               className="inline-flex w-fit items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
//             >
//               Track order
//               <ArrowRight size={16} />
//             </Link>
//           )}
//         </div>
//       </div>

//       <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
//         {/* Left: items + address */}
//         <div className="space-y-6">
//           {/* Items */}
//           <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
//             <div className="border-b border-slate-100 px-5 py-4">
//               <h2 className="text-sm font-bold text-slate-900">Items ordered</h2>
//             </div>
//             <div className="divide-y divide-slate-100">
//               {(order.items || []).map((item, index) => (
//                 <div key={`${item.productId}-${index}`} className="flex gap-4 p-5">
//                   <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-100 text-slate-400">
//                     {item.image ? (
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="h-full w-full object-cover"
//                       />
//                     ) : (
//                       <Package size={24} />
//                     )}
//                   </div>
//                   <div className="min-w-0 flex-1">
//                     <h3 className="text-sm font-semibold text-slate-900">{item.name}</h3>
//                     {item.category && (
//                       <p className="mt-0.5 text-xs text-slate-400">{item.category}</p>
//                     )}
//                     <p className="mt-1 text-xs text-slate-500">Qty: {item.quantity}</p>
//                   </div>
//                   <p className="text-sm font-bold text-slate-900">
//                     {formatCurrency(item.price * item.quantity)}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Shipping address */}
//           {addr && (
//             <section className="rounded-xl border border-slate-200 bg-white p-5">
//               <div className="mb-4 flex items-center gap-2">
//                 <MapPin size={18} className="text-[#176b5b]" />
//                 <h2 className="text-sm font-bold text-slate-900">Shipping address</h2>
//               </div>
//               <div className="text-sm leading-6 text-slate-600">
//                 <p className="font-semibold text-slate-900">{addr.fullName}</p>
//                 <p>{addr.addressLine1}</p>
//                 {addr.addressLine2 && <p>{addr.addressLine2}</p>}
//                 <p>
//                   {addr.city}, {addr.state} {addr.postalCode}
//                 </p>
//                 {addr.country && <p>{addr.country}</p>}
//                 {addr.phone && (
//                   <p className="mt-2 inline-flex items-center gap-1.5 text-slate-500">
//                     <Phone size={14} />
//                     {addr.phone}
//                   </p>
//                 )}
//               </div>
//             </section>
//           )}
//         </div>

//         {/* Right: summary */}
//         <aside className="h-fit space-y-4 lg:sticky lg:top-6">
//           <section className="rounded-xl border border-slate-200 bg-white p-5">
//             <h2 className="text-sm font-bold text-slate-900">Order summary</h2>
//             <div className="mt-4 space-y-3 text-sm">
//               <div className="flex justify-between text-slate-600">
//                 <span>Subtotal</span>
//                 <span className="font-medium text-slate-900">
//                   {formatCurrency(order.subtotal ?? 0)}
//                 </span>
//               </div>
//               <div className="flex justify-between text-slate-600">
//                 <span>Shipping</span>
//                 <span className="font-medium text-slate-900">
//                   {(order.shippingCharge ?? 0) === 0
//                     ? "Free"
//                     : formatCurrency(order.shippingCharge ?? 0)}
//                 </span>
//               </div>
//               {(order.discount ?? 0) > 0 && (
//                 <div className="flex justify-between text-slate-600">
//                   <span>Discount</span>
//                   <span className="font-medium text-emerald-600">
//                     −{formatCurrency(order.discount ?? 0)}
//                   </span>
//                 </div>
//               )}
//               {(order.tax ?? 0) > 0 && (
//                 <div className="flex justify-between text-slate-600">
//                   <span>Tax</span>
//                   <span className="font-medium text-slate-900">
//                     {formatCurrency(order.tax ?? 0)}
//                   </span>
//                 </div>
//               )}
//               <div className="border-t border-slate-100 pt-3">
//                 <div className="flex justify-between">
//                   <span className="font-semibold text-slate-900">Total</span>
//                   <span className="text-lg font-bold text-slate-900">
//                     {formatCurrency(order.totalAmount ?? 0)}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </section>

//           <section className="rounded-xl border border-slate-200 bg-white p-5">
//             <div className="mb-3 flex items-center gap-2">
//               <CreditCard size={18} className="text-[#176b5b]" />
//               <h2 className="text-sm font-bold text-slate-900">Payment</h2>
//             </div>
//             <p className="text-sm text-slate-600">
//               Method:{" "}
//               <span className="font-semibold text-slate-900">
//                 {order.paymentMethod || "—"}
//               </span>
//             </p>
//             <p className="mt-1 text-sm text-slate-600">
//               Status:{" "}
//               <span className="font-semibold text-slate-900">
//                 {order.paymentStatus || "Pending"}
//               </span>
//             </p>
//           </section>

//           {order.notes && (
//             <section className="rounded-xl border border-slate-200 bg-white p-5">
//               <h2 className="text-sm font-bold text-slate-900">Notes</h2>
//               <p className="mt-2 text-sm leading-6 text-slate-600">{order.notes}</p>
//             </section>
//           )}
//         </aside>
//       </div>
//     </div>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import {
//   ArrowLeft,
//   ArrowRight,
//   CalendarDays,
//   Loader2,
//   MapPin,
//   Package,
//   Phone,
//   CreditCard,
// } from "lucide-react";
// import {
//   getOrder,
//   cancelOrder,
//   type Order,
// } from "@/services/checkoutService";

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function formatDate(value: unknown): string {
//   try {
//     if (
//       value &&
//       typeof value === "object" &&
//       "toDate" in value &&
//       typeof (value as { toDate: () => Date }).toDate === "function"
//     ) {
//       return (value as { toDate: () => Date }).toDate().toLocaleDateString(
//         "en-IN",
//         {
//           day: "numeric",
//           month: "short",
//           year: "numeric",
//         }
//       );
//     }
//   } catch {
//     /* ignore */
//   }
//   return "—";
// }

// const STATUS_STYLES: Record<string, string> = {
//   Pending: "bg-slate-50 text-slate-700 ring-slate-200",
//   Confirmed: "bg-indigo-50 text-indigo-700 ring-indigo-200",
//   Processing: "bg-amber-50 text-amber-700 ring-amber-200",
//   Shipped: "bg-blue-50 text-blue-700 ring-blue-200",
//   Delivered: "bg-emerald-50 text-emerald-700 ring-emerald-200",
//   Cancelled: "bg-red-50 text-red-700 ring-red-200",
// };

// /** Cancel allowed only before Processing */
// function canCancelStatus(status: string) {
//   return status === "Pending" || status === "Confirmed";
// }

// export default function OrderDetailsPage() {
//   const params = useParams();
//   const router = useRouter();
//   const orderId = params.orderId as string;

//   const [order, setOrder] = useState<Order | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [cancelling, setCancelling] = useState(false);
//   const [cancelError, setCancelError] = useState("");

//   const load = async () => {
//     setLoading(true);
//     try {
//       const data = await getOrder(orderId);
//       setOrder(data);
//     } catch (err) {
//       console.error(err);
//       setOrder(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (orderId) load();
//   }, [orderId]);

//   const handleCancel = async () => {
//     if (!order) return;
//     if (!canCancelStatus(order.orderStatus || "")) return;
//     if (!window.confirm("Cancel this order? This cannot be undone.")) return;

//     setCancelling(true);
//     setCancelError("");
//     try {
//       await cancelOrder(order.id);
//       await load();
//     } catch (err) {
//       console.error(err);
//       setCancelError(
//         err instanceof Error ? err.message : "Could not cancel order."
//       );
//     } finally {
//       setCancelling(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex min-h-[40vh] items-center justify-center">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </div>
//     );
//   }

//   if (!order) {
//     return (
//       <div className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
//         <Package className="mx-auto text-slate-400" size={28} />
//         <h2 className="mt-4 text-lg font-bold text-slate-900">
//           Order not found
//         </h2>
//         <Link
//           href="/account/orders"
//           className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white"
//         >
//           <ArrowLeft size={16} />
//           Back to orders
//         </Link>
//       </div>
//     );
//   }

//   const status = order.orderStatus || "Pending";
//   const addr = order.shippingAddress;
//   const showCancel = canCancelStatus(status);

//   return (
//     <div className="w-full">
//       <div className="mb-6">
//         <button
//           type="button"
//           onClick={() => router.push("/account/orders")}
//           className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900"
//         >
//           <ArrowLeft size={16} />
//           Back to orders
//         </button>

//         <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//               Order details
//             </p>
//             <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
//               {order.orderNumber || order.id.slice(0, 10).toUpperCase()}
//             </h1>
//             <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500">
//               <span className="inline-flex items-center gap-1.5">
//                 <CalendarDays size={14} />
//                 Placed on {formatDate(order.createdAt)}
//               </span>
//               <span
//                 className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${
//                   STATUS_STYLES[status] || STATUS_STYLES.Pending
//                 }`}
//               >
//                 {status}
//               </span>
//             </div>
//           </div>

//           <div className="flex flex-wrap gap-2">
//             {status !== "Cancelled" && status !== "Delivered" && (
//               <Link
//                 href={`/account/orders/${order.id}/track`}
//                 className="inline-flex w-fit items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
//               >
//                 Track order
//                 <ArrowRight size={16} />
//               </Link>
//             )}
//             {showCancel && (
//               <button
//                 type="button"
//                 disabled={cancelling}
//                 onClick={handleCancel}
//                 className="inline-flex w-fit items-center gap-2 rounded-lg border border-red-200 bg-white px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50 disabled:opacity-60"
//               >
//                 {cancelling ? (
//                   <>
//                     <Loader2 size={16} className="animate-spin" />
//                     Cancelling…
//                   </>
//                 ) : (
//                   "Cancel order"
//                 )}
//               </button>
//             )}
//           </div>
//         </div>
//         {cancelError && (
//           <p className="mt-3 text-sm text-red-600">{cancelError}</p>
//         )}
//       </div>

//       <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
//         <div className="space-y-6">
//           <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
//             <div className="border-b border-slate-100 px-5 py-4">
//               <h2 className="text-sm font-bold text-slate-900">
//                 Items ordered
//               </h2>
//             </div>
//             <div className="divide-y divide-slate-100">
//               {(order.items || []).map((item, index) => (
//                 <div
//                   key={`${item.productId}-${index}`}
//                   className="flex gap-4 p-5"
//                 >
//                   <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-100 text-slate-400">
//                     {item.image ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="h-full w-full object-cover"
//                       />
//                     ) : (
//                       <Package size={24} />
//                     )}
//                   </div>
//                   <div className="min-w-0 flex-1">
//                     <h3 className="text-sm font-semibold text-slate-900">
//                       {item.name}
//                     </h3>
//                     {item.category && (
//                       <p className="mt-0.5 text-xs text-slate-400">
//                         {item.category}
//                       </p>
//                     )}
//                     <p className="mt-1 text-xs text-slate-500">
//                       Qty: {item.quantity}
//                     </p>
//                   </div>
//                   <p className="text-sm font-bold text-slate-900">
//                     {formatCurrency(item.price * item.quantity)}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {addr && (
//             <section className="rounded-xl border border-slate-200 bg-white p-5">
//               <div className="mb-4 flex items-center gap-2">
//                 <MapPin size={18} className="text-[#176b5b]" />
//                 <h2 className="text-sm font-bold text-slate-900">
//                   Shipping address
//                 </h2>
//               </div>
//               <div className="text-sm leading-6 text-slate-600">
//                 <p className="font-semibold text-slate-900">{addr.fullName}</p>
//                 <p>{addr.addressLine1}</p>
//                 {addr.addressLine2 && <p>{addr.addressLine2}</p>}
//                 <p>
//                   {addr.city}, {addr.state} {addr.postalCode}
//                 </p>
//                 {addr.country && <p>{addr.country}</p>}
//                 {addr.phone && (
//                   <p className="mt-2 inline-flex items-center gap-1.5 text-slate-500">
//                     <Phone size={14} />
//                     {addr.phone}
//                   </p>
//                 )}
//               </div>
//             </section>
//           )}
//         </div>

//         <aside className="h-fit space-y-4 lg:sticky lg:top-6">
//           <section className="rounded-xl border border-slate-200 bg-white p-5">
//             <h2 className="text-sm font-bold text-slate-900">Order summary</h2>
//             <div className="mt-4 space-y-3 text-sm">
//               <div className="flex justify-between text-slate-600">
//                 <span>Subtotal</span>
//                 <span className="font-medium text-slate-900">
//                   {formatCurrency(order.subtotal ?? 0)}
//                 </span>
//               </div>
//               <div className="flex justify-between text-slate-600">
//                 <span>Shipping</span>
//                 <span className="font-medium text-slate-900">
//                   {(order.shippingCharge ?? 0) === 0
//                     ? "Free"
//                     : formatCurrency(order.shippingCharge ?? 0)}
//                 </span>
//               </div>
//               <div className="border-t border-slate-100 pt-3">
//                 <div className="flex justify-between">
//                   <span className="font-semibold text-slate-900">Total</span>
//                   <span className="text-lg font-bold text-slate-900">
//                     {formatCurrency(order.totalAmount ?? 0)}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </section>

//           <section className="rounded-xl border border-slate-200 bg-white p-5">
//             <div className="mb-3 flex items-center gap-2">
//               <CreditCard size={18} className="text-[#176b5b]" />
//               <h2 className="text-sm font-bold text-slate-900">Payment</h2>
//             </div>
//             <p className="text-sm text-slate-600">
//               Method:{" "}
//               <span className="font-semibold text-slate-900">
//                 {order.paymentMethod || "—"}
//               </span>
//             </p>
//             <p className="mt-1 text-sm text-slate-600">
//               Status:{" "}
//               <span className="font-semibold text-slate-900">
//                 {order.paymentStatus || "Pending"}
//               </span>
//             </p>
//           </section>
//         </aside>
//       </div>
//     </div>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import {
//   ArrowLeft,
//   ArrowRight,
//   CalendarDays,
//   Loader2,
//   MapPin,
//   Package,
//   Phone,
//   CreditCard,
//   X,
//   AlertTriangle,
// } from "lucide-react";
// import {
//   getOrder,
//   cancelOrder,
//   type Order,
// } from "@/services/checkoutService";

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function formatDate(value: unknown): string {
//   try {
//     if (
//       value &&
//       typeof value === "object" &&
//       "toDate" in value &&
//       typeof (value as { toDate: () => Date }).toDate === "function"
//     ) {
//       return (value as { toDate: () => Date }).toDate().toLocaleDateString(
//         "en-IN",
//         {
//           day: "numeric",
//           month: "short",
//           year: "numeric",
//         }
//       );
//     }
//   } catch {
//     /* ignore */
//   }
//   return "—";
// }

// const STATUS_STYLES: Record<string, string> = {
//   Pending: "bg-slate-50 text-slate-700 ring-slate-200",
//   Confirmed: "bg-indigo-50 text-indigo-700 ring-indigo-200",
//   Processing: "bg-amber-50 text-amber-700 ring-amber-200",
//   Shipped: "bg-blue-50 text-blue-700 ring-blue-200",
//   Delivered: "bg-emerald-50 text-emerald-700 ring-emerald-200",
//   Cancelled: "bg-red-50 text-red-700 ring-red-200",
// };

// function canCancelStatus(status: string) {
//   return status === "Pending" || status === "Confirmed";
// }

// export default function OrderDetailsPage() {
//   const params = useParams();
//   const router = useRouter();
//   const orderId = params.orderId as string;

//   const [order, setOrder] = useState<Order | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [showCancelModal, setShowCancelModal] = useState(false);
//   const [cancelling, setCancelling] = useState(false);
//   const [cancelError, setCancelError] = useState("");

//   const load = async () => {
//     setLoading(true);
//     try {
//       const data = await getOrder(orderId);
//       setOrder(data);
//     } catch (err) {
//       console.error(err);
//       setOrder(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (orderId) load();
//   }, [orderId]);

//   // Lock body scroll while modal is open
//   useEffect(() => {
//     if (!showCancelModal) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, [showCancelModal]);

//   const handleConfirmCancel = async () => {
//     if (!order) return;
//     if (!canCancelStatus(order.orderStatus || "")) return;

//     setCancelling(true);
//     setCancelError("");
//     try {
//       await cancelOrder(order.id);
//       setShowCancelModal(false);
//       await load();
//     } catch (err) {
//       console.error(err);
//       setCancelError(
//         err instanceof Error ? err.message : "Could not cancel order."
//       );
//     } finally {
//       setCancelling(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex min-h-[40vh] items-center justify-center">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </div>
//     );
//   }

//   if (!order) {
//     return (
//       <div className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
//         <Package className="mx-auto text-slate-400" size={28} />
//         <h2 className="mt-4 text-lg font-bold text-slate-900">
//           Order not found
//         </h2>
//         <Link
//           href="/account/orders"
//           className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white"
//         >
//           <ArrowLeft size={16} />
//           Back to orders
//         </Link>
//       </div>
//     );
//   }

//   const status = order.orderStatus || "Pending";
//   const addr = order.shippingAddress;
//   const showCancel = canCancelStatus(status);
//   const orderLabel =
//     order.orderNumber || order.id.slice(0, 10).toUpperCase();

//   return (
//     <div className="w-full">
//       <div className="mb-6">
//         <button
//           type="button"
//           onClick={() => router.push("/account/orders")}
//           className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900"
//         >
//           <ArrowLeft size={16} />
//           Back to orders
//         </button>

//         <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//               Order details
//             </p>
//             <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
//               {orderLabel}
//             </h1>
//             <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500">
//               <span className="inline-flex items-center gap-1.5">
//                 <CalendarDays size={14} />
//                 Placed on {formatDate(order.createdAt)}
//               </span>
//               <span
//                 className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${
//                   STATUS_STYLES[status] || STATUS_STYLES.Pending
//                 }`}
//               >
//                 {status}
//               </span>
//             </div>
//           </div>

//           <div className="flex flex-wrap gap-2">
//             {status !== "Cancelled" && status !== "Delivered" && (
//               <Link
//                 href={`/account/orders/${order.id}/track`}
//                 className="inline-flex w-fit items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
//               >
//                 Track order
//                 <ArrowRight size={16} />
//               </Link>
//             )}
//             {showCancel && (
//               <button
//                 type="button"
//                 onClick={() => {
//                   setCancelError("");
//                   setShowCancelModal(true);
//                 }}
//                 className="inline-flex w-fit items-center gap-2 rounded-lg border border-red-200 bg-white px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
//               >
//                 Cancel order
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Cancelled banner */}
//       {status === "Cancelled" && (
//         <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-4">
//           <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
//             <X size={18} />
//           </div>
//           <div>
//             <p className="text-sm font-semibold text-red-800">
//               This order has been cancelled
//             </p>
//             <p className="mt-0.5 text-xs text-red-600">
//               If payment was collected, our team will contact you about a
//               refund.
//             </p>
//           </div>
//         </div>
//       )}

//       <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
//         <div className="space-y-6">
//           <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
//             <div className="border-b border-slate-100 px-5 py-4">
//               <h2 className="text-sm font-bold text-slate-900">
//                 Items ordered
//               </h2>
//             </div>
//             <div className="divide-y divide-slate-100">
//               {(order.items || []).map((item, index) => (
//                 <div
//                   key={`${item.productId}-${index}`}
//                   className="flex gap-4 p-5"
//                 >
//                   <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-100 text-slate-400">
//                     {item.image ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="h-full w-full object-cover"
//                       />
//                     ) : (
//                       <Package size={24} />
//                     )}
//                   </div>
//                   <div className="min-w-0 flex-1">
//                     <h3 className="text-sm font-semibold text-slate-900">
//                       {item.name}
//                     </h3>
//                     {item.category && (
//                       <p className="mt-0.5 text-xs text-slate-400">
//                         {item.category}
//                       </p>
//                     )}
//                     <p className="mt-1 text-xs text-slate-500">
//                       Qty: {item.quantity}
//                     </p>
//                   </div>
//                   <p className="text-sm font-bold text-slate-900">
//                     {formatCurrency(item.price * item.quantity)}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {addr && (
//             <section className="rounded-xl border border-slate-200 bg-white p-5">
//               <div className="mb-4 flex items-center gap-2">
//                 <MapPin size={18} className="text-[#176b5b]" />
//                 <h2 className="text-sm font-bold text-slate-900">
//                   Shipping address
//                 </h2>
//               </div>
//               <div className="text-sm leading-6 text-slate-600">
//                 <p className="font-semibold text-slate-900">{addr.fullName}</p>
//                 <p>{addr.addressLine1}</p>
//                 {addr.addressLine2 && <p>{addr.addressLine2}</p>}
//                 <p>
//                   {addr.city}, {addr.state} {addr.postalCode}
//                 </p>
//                 {addr.country && <p>{addr.country}</p>}
//                 {addr.phone && (
//                   <p className="mt-2 inline-flex items-center gap-1.5 text-slate-500">
//                     <Phone size={14} />
//                     {addr.phone}
//                   </p>
//                 )}
//               </div>
//             </section>
//           )}
//         </div>

//         <aside className="h-fit space-y-4 lg:sticky lg:top-6">
//           <section className="rounded-xl border border-slate-200 bg-white p-5">
//             <h2 className="text-sm font-bold text-slate-900">Order summary</h2>
//             <div className="mt-4 space-y-3 text-sm">
//               <div className="flex justify-between text-slate-600">
//                 <span>Subtotal</span>
//                 <span className="font-medium text-slate-900">
//                   {formatCurrency(order.subtotal ?? 0)}
//                 </span>
//               </div>
//               <div className="flex justify-between text-slate-600">
//                 <span>Shipping</span>
//                 <span className="font-medium text-slate-900">
//                   {(order.shippingCharge ?? 0) === 0
//                     ? "Free"
//                     : formatCurrency(order.shippingCharge ?? 0)}
//                 </span>
//               </div>
//               <div className="border-t border-slate-100 pt-3">
//                 <div className="flex justify-between">
//                   <span className="font-semibold text-slate-900">Total</span>
//                   <span className="text-lg font-bold text-slate-900">
//                     {formatCurrency(order.totalAmount ?? 0)}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </section>

//           <section className="rounded-xl border border-slate-200 bg-white p-5">
//             <div className="mb-3 flex items-center gap-2">
//               <CreditCard size={18} className="text-[#176b5b]" />
//               <h2 className="text-sm font-bold text-slate-900">Payment</h2>
//             </div>
//             <p className="text-sm text-slate-600">
//               Method:{" "}
//               <span className="font-semibold text-slate-900">
//                 {order.paymentMethod || "—"}
//               </span>
//             </p>
//             <p className="mt-1 text-sm text-slate-600">
//               Status:{" "}
//               <span className="font-semibold text-slate-900">
//                 {order.paymentStatus || "Pending"}
//               </span>
//             </p>
//           </section>
//         </aside>
//       </div>

//       {/* ========== Cancel confirmation modal ========== */}
//       {showCancelModal && (
//         <div
//           className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-[2px]"
//           onClick={() => !cancelling && setShowCancelModal(false)}
//           role="dialog"
//           aria-modal="true"
//           aria-labelledby="cancel-order-title"
//         >
//           <div
//             className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl shadow-slate-900/20"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Top accent */}
//             <div className="h-1.5 w-full bg-gradient-to-r from-red-500 to-orange-400" />

//             <div className="px-6 pb-6 pt-6 sm:px-8">
//               <div className="flex items-start gap-4">
//                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600 ring-1 ring-red-100">
//                   <AlertTriangle size={24} strokeWidth={2} />
//                 </div>
//                 <div className="min-w-0 flex-1">
//                   <h2
//                     id="cancel-order-title"
//                     className="text-lg font-bold tracking-tight text-slate-900"
//                   >
//                     Cancel this order?
//                   </h2>
//                   <p className="mt-1.5 text-sm leading-6 text-slate-500">
//                     You are about to cancel{" "}
//                     <span className="font-semibold text-slate-800">
//                       {orderLabel}
//                     </span>
//                     . This cannot be undone once confirmed.
//                   </p>
//                 </div>
//                 <button
//                   type="button"
//                   disabled={cancelling}
//                   onClick={() => setShowCancelModal(false)}
//                   className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 disabled:opacity-50"
//                   aria-label="Close"
//                 >
//                   <X size={18} />
//                 </button>
//               </div>

//               {/* Order snapshot */}
//               <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3">
//                 <div className="flex items-center justify-between gap-3">
//                   <div>
//                     <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
//                       Order total
//                     </p>
//                     <p className="mt-0.5 text-base font-bold text-slate-900">
//                       {formatCurrency(order.totalAmount ?? 0)}
//                     </p>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
//                       Current status
//                     </p>
//                     <p className="mt-0.5 text-sm font-semibold text-slate-700">
//                       {status}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <p className="mt-4 text-xs leading-5 text-slate-500">
//                 You can cancel only while the order is{" "}
//                 <span className="font-medium text-slate-700">Pending</span> or{" "}
//                 <span className="font-medium text-slate-700">Confirmed</span>.
//                 After processing starts, please contact support.
//               </p>

//               {cancelError && (
//                 <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-700">
//                   {cancelError}
//                 </div>
//               )}

//               <div className="mt-6 flex flex-col-reverse gap-2.5 sm:flex-row sm:justify-end">
//                 <button
//                   type="button"
//                   disabled={cancelling}
//                   onClick={() => setShowCancelModal(false)}
//                   className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
//                 >
//                   Keep order
//                 </button>
//                 <button
//                   type="button"
//                   disabled={cancelling}
//                   onClick={handleConfirmCancel}
//                   className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   {cancelling ? (
//                     <>
//                       <Loader2 size={16} className="animate-spin" />
//                       Cancelling…
//                     </>
//                   ) : (
//                     "Yes, cancel order"
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Loader2,
  MapPin,
  Package,
  Phone,
  CreditCard,
  X,
  AlertTriangle,
} from "lucide-react";
import {
  getOrder,
  cancelOrder,
  type Order,
} from "@/services/checkoutService";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatDate(value: unknown): string {
  try {
    if (
      value &&
      typeof value === "object" &&
      "toDate" in value &&
      typeof (value as { toDate: () => Date }).toDate === "function"
    ) {
      return (value as { toDate: () => Date }).toDate().toLocaleDateString(
        "en-IN",
        {
          day: "numeric",
          month: "short",
          year: "numeric",
        }
      );
    }
  } catch {
    /* ignore */
  }
  return "—";
}

const STATUS_STYLES: Record<string, string> = {
  Pending: "bg-slate-50 text-slate-700 ring-slate-200",
  Confirmed: "bg-indigo-50 text-indigo-700 ring-indigo-200",
  Processing: "bg-amber-50 text-amber-700 ring-amber-200",
  Shipped: "bg-blue-50 text-blue-700 ring-blue-200",
  Delivered: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Cancelled: "bg-red-50 text-red-700 ring-red-200",
};

function canCancelStatus(status: string) {
  return status === "Pending" || status === "Confirmed";
}

export default function OrderDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const orderId = params.orderId as string;

  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [cancelling, setCancelling] = useState(false);
  const [cancelError, setCancelError] = useState("");

  const load = async () => {
    setLoading(true);
    try {
      const data = await getOrder(orderId);
      setOrder(data);
    } catch (err) {
      console.error(err);
      setOrder(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (orderId) load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderId]);

  useEffect(() => {
    if (!showCancelModal) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showCancelModal]);

  const handleConfirmCancel = async () => {
    if (!order) return;
    if (!canCancelStatus(order.orderStatus || "")) return;

    setCancelling(true);
    setCancelError("");
    try {
      await cancelOrder(order.id);
      setShowCancelModal(false);
      await load();
    } catch (err) {
      console.error(err);
      setCancelError(
        err instanceof Error ? err.message : "Could not cancel order."
      );
    } finally {
      setCancelling(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white px-4 py-12 text-center sm:px-6 sm:py-16">
        <Package className="mx-auto text-slate-400" size={28} />
        <h2 className="mt-4 text-lg font-bold text-slate-900">
          Order not found
        </h2>
        <Link
          href="/account/orders"
          className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white"
        >
          <ArrowLeft size={16} />
          Back to orders
        </Link>
      </div>
    );
  }

  const status = order.orderStatus || "Pending";
  const addr = order.shippingAddress;
  const showCancel = canCancelStatus(status);
  const orderLabel =
    order.orderNumber || order.id.slice(0, 10).toUpperCase();

  return (
    <div className="w-full">
      <div className="mb-5 sm:mb-6">
        <button
          type="button"
          onClick={() => router.push("/account/orders")}
          className="mb-3 inline-flex min-h-[40px] items-center gap-1.5 rounded-lg px-2 py-1.5 -ml-2 text-xs font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 sm:mb-4 sm:text-sm"
        >
          <ArrowLeft size={14} className="shrink-0" />
          Back to orders
        </button>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:text-xs">
              Order details
            </p>
            <h1 className="mt-1.5 break-all text-xl font-bold tracking-tight text-slate-900 sm:mt-2 sm:text-3xl">
              {orderLabel}
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500 sm:gap-3 sm:text-sm">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={13} className="shrink-0" />
                {formatDate(order.createdAt)}
              </span>
              <span
                className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1 ring-inset sm:px-2.5 sm:py-1 sm:text-xs ${
                  STATUS_STYLES[status] || STATUS_STYLES.Pending
                }`}
              >
                {status}
              </span>
            </div>
          </div>

          {/* Actions — side by side on mobile */}
          <div className="grid grid-cols-2 gap-2 sm:flex sm:w-auto sm:flex-wrap">
            {status !== "Cancelled" && status !== "Delivered" && (
              <Link
                href={`/account/orders/${order.id}/track`}
                className={`inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg bg-slate-900 px-3 text-xs font-semibold text-white hover:bg-slate-800 sm:px-4 sm:text-sm ${
                  !showCancel ? "col-span-2" : ""
                }`}
              >
                Track
                <ArrowRight size={14} />
              </Link>
            )}
            {showCancel && (
              <button
                type="button"
                onClick={() => {
                  setCancelError("");
                  setShowCancelModal(true);
                }}
                className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg border border-red-200 bg-white px-3 text-xs font-semibold text-red-600 transition hover:bg-red-50 sm:px-4 sm:text-sm"
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>

      {status === "Cancelled" && (
        <div className="mb-4 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-3 py-3 sm:mb-6 sm:px-4 sm:py-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 sm:h-9 sm:w-9">
            <X size={16} />
          </div>
          <div>
            <p className="text-sm font-semibold text-red-800">
              This order has been cancelled
            </p>
            <p className="mt-0.5 text-xs text-red-600">
              If payment was collected, our team will contact you about a
              refund.
            </p>
          </div>
        </div>
      )}

      <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-4 sm:space-y-6">
          <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="border-b border-slate-100 px-3 py-3 sm:px-5 sm:py-4">
              <h2 className="text-sm font-bold text-slate-900">
                Items ordered
              </h2>
            </div>
            <div className="divide-y divide-slate-100">
              {(order.items || []).map((item, index) => (
                <div
                  key={`${item.productId}-${index}`}
                  className="flex gap-3 p-3 sm:gap-4 sm:p-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-100 text-slate-400 sm:h-16 sm:w-16">
                    {item.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Package size={20} className="sm:h-6 sm:w-6" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="line-clamp-2 text-xs font-semibold leading-snug text-slate-900 sm:text-sm">
                      {item.name}
                    </h3>
                    {item.category && (
                      <p className="mt-0.5 text-[10px] text-slate-400 sm:text-xs">
                        {item.category}
                      </p>
                    )}
                    <p className="mt-0.5 text-[11px] text-slate-500 sm:mt-1 sm:text-xs">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="shrink-0 text-xs font-bold text-slate-900 sm:text-sm">
                    {formatCurrency(item.price * item.quantity)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {addr && (
            <section className="rounded-xl border border-slate-200 bg-white p-3 sm:p-5">
              <div className="mb-3 flex items-center gap-2 sm:mb-4">
                <MapPin size={16} className="text-[#176b5b] sm:h-[18px] sm:w-[18px]" />
                <h2 className="text-sm font-bold text-slate-900">
                  Shipping address
                </h2>
              </div>
              <div className="text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                <p className="font-semibold text-slate-900">{addr.fullName}</p>
                <p>{addr.addressLine1}</p>
                {addr.addressLine2 && <p>{addr.addressLine2}</p>}
                <p>
                  {addr.city}, {addr.state} {addr.postalCode}
                </p>
                {addr.country && <p>{addr.country}</p>}
                {addr.phone && (
                  <p className="mt-2 inline-flex items-center gap-1.5 text-slate-500">
                    <Phone size={13} />
                    {addr.phone}
                  </p>
                )}
              </div>
            </section>
          )}
        </div>

        <aside className="h-fit space-y-3 sm:space-y-4 lg:sticky lg:top-6">
          <section className="rounded-xl border border-slate-200 bg-white p-3 sm:p-5">
            <h2 className="text-sm font-bold text-slate-900">Order summary</h2>
            <div className="mt-3 space-y-2.5 text-sm sm:mt-4 sm:space-y-3">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-medium text-slate-900">
                  {formatCurrency(order.subtotal ?? 0)}
                </span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Shipping</span>
                <span className="font-medium text-slate-900">
                  {(order.shippingCharge ?? 0) === 0
                    ? "Free"
                    : formatCurrency(order.shippingCharge ?? 0)}
                </span>
              </div>
              <div className="border-t border-slate-100 pt-2.5 sm:pt-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-900">Total</span>
                  <span className="text-base font-bold text-slate-900 sm:text-lg">
                    {formatCurrency(order.totalAmount ?? 0)}
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-3 sm:p-5">
            <div className="mb-2 flex items-center gap-2 sm:mb-3">
              <CreditCard size={16} className="text-[#176b5b] sm:h-[18px] sm:w-[18px]" />
              <h2 className="text-sm font-bold text-slate-900">Payment</h2>
            </div>
            <p className="text-xs text-slate-600 sm:text-sm">
              Method:{" "}
              <span className="font-semibold text-slate-900">
                {order.paymentMethod || "—"}
              </span>
            </p>
            <p className="mt-1 text-xs text-slate-600 sm:text-sm">
              Status:{" "}
              <span className="font-semibold text-slate-900">
                {order.paymentStatus || "Pending"}
              </span>
            </p>
          </section>
        </aside>
      </div>

      {showCancelModal && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-900/50 p-0 backdrop-blur-[2px] sm:items-center sm:p-4"
          onClick={() => !cancelling && setShowCancelModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cancel-order-title"
        >
          <div
            className="w-full max-w-md overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-1.5 w-full bg-gradient-to-r from-red-500 to-orange-400" />

            <div className="px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-5 sm:px-8 sm:pb-6 sm:pt-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 ring-1 ring-red-100 sm:h-12 sm:w-12 sm:rounded-2xl">
                  <AlertTriangle size={20} strokeWidth={2} className="sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2
                    id="cancel-order-title"
                    className="text-base font-bold tracking-tight text-slate-900 sm:text-lg"
                  >
                    Cancel this order?
                  </h2>
                  <p className="mt-1 text-xs leading-5 text-slate-500 sm:mt-1.5 sm:text-sm sm:leading-6">
                    You are about to cancel{" "}
                    <span className="font-semibold text-slate-800">
                      {orderLabel}
                    </span>
                    . This cannot be undone.
                  </p>
                </div>
                <button
                  type="button"
                  disabled={cancelling}
                  onClick={() => setShowCancelModal(false)}
                  className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 disabled:opacity-50"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50/80 px-3 py-3 sm:mt-5 sm:px-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                      Order total
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-slate-900 sm:text-base">
                      {formatCurrency(order.totalAmount ?? 0)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                      Status
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-slate-700">
                      {status}
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-3 text-[11px] leading-5 text-slate-500 sm:mt-4 sm:text-xs">
                You can cancel only while the order is{" "}
                <span className="font-medium text-slate-700">Pending</span> or{" "}
                <span className="font-medium text-slate-700">Confirmed</span>.
              </p>

              {cancelError && (
                <div className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 sm:mt-4">
                  {cancelError}
                </div>
              )}

              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-6 sm:flex sm:justify-end">
                <button
                  type="button"
                  disabled={cancelling}
                  onClick={() => setShowCancelModal(false)}
                  className="min-h-[44px] rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50 sm:px-5"
                >
                  Keep order
                </button>
                <button
                  type="button"
                  disabled={cancelling}
                  onClick={handleConfirmCancel}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-red-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60 sm:px-5"
                >
                  {cancelling ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      …
                    </>
                  ) : (
                    "Yes, cancel"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
