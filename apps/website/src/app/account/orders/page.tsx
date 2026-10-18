// "use client";

// import Link from "next/link";
// import { useMemo, useState } from "react";
// import {
//   ArrowRight,
//   CalendarDays,
//   ChevronDown,
//   Package,
//   Search,
//   ShoppingBag,
//   Truck,
// } from "lucide-react";

// type OrderStatus =
//   | "Processing"
//   | "Shipped"
//   | "Delivered"
//   | "Cancelled";

// interface OrderItem {
//   name: string;
//   quantity: number;
//   price: number;
// }

// interface Order {
//   id: string;
//   date: string;
//   status: OrderStatus;
//   total: number;
//   items: OrderItem[];
//   delivery: string;
// }

// const SAMPLE_ORDERS: Order[] = [
//   {
//     id: "VIP-ORD-1004",
//     date: "Sep 12, 2026",
//     status: "Processing",
//     total: 84900,
//     delivery: "Estimated delivery: Sep 18, 2026",
//     items: [
//       {
//         name: "Premium Modular Sofa",
//         quantity: 1,
//         price: 54900,
//       },
//       {
//         name: "Designer Coffee Table",
//         quantity: 1,
//         price: 30000,
//       },
//     ],
//   },
//   {
//     id: "VIP-ORD-1003",
//     date: "Aug 28, 2026",
//     status: "Shipped",
//     total: 42600,
//     delivery: "Expected delivery: Sep 4, 2026",
//     items: [
//       {
//         name: "Modern Dining Chair",
//         quantity: 4,
//         price: 10650,
//       },
//     ],
//   },
//   {
//     id: "VIP-ORD-1002",
//     date: "Aug 11, 2026",
//     status: "Delivered",
//     total: 72500,
//     delivery: "Delivered on Aug 18, 2026",
//     items: [
//       {
//         name: "Solid Wood Dining Table",
//         quantity: 1,
//         price: 72500,
//       },
//     ],
//   },
//   {
//     id: "VIP-ORD-1001",
//     date: "Jul 22, 2026",
//     status: "Delivered",
//     total: 38900,
//     delivery: "Delivered on Jul 29, 2026",
//     items: [
//       {
//         name: "Accent Lounge Chair",
//         quantity: 2,
//         price: 19450,
//       },
//     ],
//   },
// ];

// const STATUS_STYLES: Record<OrderStatus, string> = {
//   Processing:
//     "bg-amber-50 text-amber-700 ring-amber-200",
//   Shipped:
//     "bg-blue-50 text-blue-700 ring-blue-200",
//   Delivered:
//     "bg-emerald-50 text-emerald-700 ring-emerald-200",
//   Cancelled:
//     "bg-red-50 text-red-700 ring-red-200",
// };

// const FILTERS = [
//   "All orders",
//   "Processing",
//   "Shipped",
//   "Delivered",
//   "Cancelled",
// ] as const;

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// export default function OrdersPage() {
//   const [filter, setFilter] = useState<string>("All orders");
//   const [search, setSearch] = useState("");

//   const filteredOrders = useMemo(() => {
//     const query = search.trim().toLowerCase();

//     return SAMPLE_ORDERS.filter((order) => {
//       const matchesFilter =
//         filter === "All orders" || order.status === filter;

//       const matchesSearch =
//         !query ||
//         order.id.toLowerCase().includes(query) ||
//         order.items.some((item) =>
//           item.name.toLowerCase().includes(query)
//         );

//       return matchesFilter && matchesSearch;
//     });
//   }, [filter, search]);

//   const totalOrders = SAMPLE_ORDERS.length;
//   const activeOrders = SAMPLE_ORDERS.filter(
//     (order) =>
//       order.status === "Processing" ||
//       order.status === "Shipped"
//   ).length;

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="mb-8">
//           <div className="mb-4 flex items-center gap-2 text-sm text-slate-500">
//             <Link
//               href="/account"
//               className="transition hover:text-slate-900"
//             >
//               My Account
//             </Link>

//             <span>/</span>

//             <span className="font-medium text-slate-800">
//               Orders
//             </span>
//           </div>

//           <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
//             <div>
//               <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//                 Account
//               </p>

//               <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
//                 My Orders
//               </h1>

//               <p className="mt-2 text-sm text-slate-500">
//                 View your orders, delivery status and purchase
//                 details.
//               </p>
//             </div>

//             <Link
//               href="/products"
//               className="inline-flex w-fit items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
//             >
//               Continue shopping
//               <ArrowRight size={16} />
//             </Link>
//           </div>
//         </div>

//         {/* Summary cards */}
//         <div className="mb-6 grid gap-4 sm:grid-cols-3">
//           <div className="rounded-xl border border-slate-200 bg-white p-5">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-xs font-medium text-slate-500">
//                   Total orders
//                 </p>

//                 <p className="mt-2 text-2xl font-bold text-slate-900">
//                   {totalOrders}
//                 </p>
//               </div>

//               <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
//                 <ShoppingBag size={19} />
//               </div>
//             </div>
//           </div>

//           <div className="rounded-xl border border-slate-200 bg-white p-5">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-xs font-medium text-slate-500">
//                   Active orders
//                 </p>

//                 <p className="mt-2 text-2xl font-bold text-slate-900">
//                   {activeOrders}
//                 </p>
//               </div>

//               <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
//                 <Truck size={19} />
//               </div>
//             </div>
//           </div>

//           <div className="rounded-xl border border-slate-200 bg-white p-5">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-xs font-medium text-slate-500">
//                   Delivered
//                 </p>

//                 <p className="mt-2 text-2xl font-bold text-slate-900">
//                   {
//                     SAMPLE_ORDERS.filter(
//                       (order) => order.status === "Delivered"
//                     ).length
//                   }
//                 </p>
//               </div>

//               <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
//                 <Package size={19} />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="mb-6 rounded-xl border border-slate-200 bg-white p-4">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div className="flex flex-wrap gap-2">
//               {FILTERS.map((item) => {
//                 const active = filter === item;

//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => setFilter(item)}
//                     className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition ${
//                       active
//                         ? "bg-slate-900 text-white"
//                         : "bg-slate-50 text-slate-600 hover:bg-slate-100"
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 );
//               })}
//             </div>

//             <div className="relative w-full lg:max-w-xs">
//               <Search
//                 size={16}
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//               />

//               <input
//                 type="search"
//                 value={search}
//                 onChange={(event) =>
//                   setSearch(event.target.value)
//                 }
//                 placeholder="Search orders..."
//                 className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Orders */}
//         <div className="space-y-4">
//           {filteredOrders.map((order) => (
//             <article
//               key={order.id}
//               className="overflow-hidden rounded-xl border border-slate-200 bg-white"
//             >
//               {/* Order header */}
//               <div className="border-b border-slate-100 bg-slate-50/70 px-5 py-4 sm:px-6">
//                 <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
//                   <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
//                     <div>
//                       <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
//                         Order
//                       </p>

//                       <p className="mt-0.5 text-sm font-bold text-slate-900">
//                         {order.id}
//                       </p>
//                     </div>

//                     <div className="flex items-center gap-2 text-xs text-slate-500">
//                       <CalendarDays size={14} />
//                       {order.date}
//                     </div>
//                   </div>

//                   <span
//                     className={`inline-flex w-fit rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${STATUS_STYLES[order.status]}`}
//                   >
//                     {order.status}
//                   </span>
//                 </div>
//               </div>

//               {/* Order content */}
//               <div className="p-5 sm:p-6">
//                 <div className="divide-y divide-slate-100">
//                   {order.items.map((item, index) => (
//                     <div
//                       key={`${order.id}-${index}`}
//                       className="flex gap-4 py-3 first:pt-0 last:pb-0"
//                     >
//                       <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-400">
//                         <Package size={22} />
//                       </div>

//                       <div className="min-w-0 flex-1">
//                         <h2 className="text-sm font-semibold text-slate-900">
//                           {item.name}
//                         </h2>

//                         <p className="mt-1 text-xs text-slate-500">
//                           Quantity: {item.quantity}
//                         </p>
//                       </div>

//                       <p className="text-sm font-semibold text-slate-900">
//                         {formatCurrency(item.price)}
//                       </p>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="mt-5 flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
//                   <div>
//                     <p className="text-xs text-slate-500">
//                       {order.delivery}
//                     </p>

//                     <p className="mt-1 text-sm font-bold text-slate-900">
//                       Total: {formatCurrency(order.total)}
//                     </p>
//                   </div>

//                   {/* <div className="flex flex-wrap gap-2">
//                     <button
//                       type="button"
//                       className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3.5 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
//                     >
//                       View details
//                       <ChevronDown size={14} />
//                     </button>

//                     {order.status !== "Cancelled" && (
//                       <button
//                         type="button"
//                         className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
//                       >
//                         Track order
//                         <ArrowRight size={14} />
//                       </button>
//                     )}
//                   </div> */}

//                   <div className="flex flex-wrap gap-2">
//                     <Link
//                       href={`/account/orders/${order.id}`}
//                       className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3.5 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
//                     >
//                       View details
//                       <ChevronDown size={14} />
//                     </Link>

//                     {order.status !== "Cancelled" && (
//                       <Link
//                         href={`/account/orders/${order.id}/track`}
//                         className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
//                       >
//                         Track order
//                         <ArrowRight size={14} />
//                       </Link>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* Empty state */}
//         {filteredOrders.length === 0 && (
//           <div className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
//             <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
//               <ShoppingBag size={22} />
//             </div>

//             <h2 className="mt-4 text-base font-bold text-slate-900">
//               No orders found
//             </h2>

//             <p className="mt-1 text-sm text-slate-500">
//               Try changing the filter or search term.
//             </p>
//           </div>
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
//   CalendarDays,
//   ChevronDown,
//   Loader2,
//   Package,
//   Search,
//   ShoppingBag,
//   Truck,
// } from "lucide-react";
// import {
//   getUserOrders,
//   type Order as FirebaseOrder,
//   type OrderStatus as FirebaseOrderStatus,
// } from "@/services/checkoutService";

// type UiOrderStatus =
//   | "Processing"
//   | "Shipped"
//   | "Delivered"
//   | "Cancelled"
//   | "Pending"
//   | "Confirmed";

// interface UiOrderItem {
//   name: string;
//   quantity: number;
//   price: number;
// }

// interface UiOrder {
//   id: string;
//   orderNumber: string;
//   date: string;
//   status: UiOrderStatus;
//   total: number;
//   items: UiOrderItem[];
//   delivery: string;
// }

// const STATUS_STYLES: Record<string, string> = {
//   Pending: "bg-slate-50 text-slate-700 ring-slate-200",
//   Confirmed: "bg-indigo-50 text-indigo-700 ring-indigo-200",
//   Processing: "bg-amber-50 text-amber-700 ring-amber-200",
//   Shipped: "bg-blue-50 text-blue-700 ring-blue-200",
//   Delivered: "bg-emerald-50 text-emerald-700 ring-emerald-200",
//   Cancelled: "bg-red-50 text-red-700 ring-red-200",
// };

// const FILTERS = [
//   "All orders",
//   "Processing",
//   "Shipped",
//   "Delivered",
//   "Cancelled",
// ] as const;

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
//     if (value instanceof Date) {
//       return value.toLocaleDateString("en-IN", {
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

// function mapStatus(status?: FirebaseOrderStatus | string): UiOrderStatus {
//   const s = (status || "Processing") as UiOrderStatus;
//   return s;
// }

// function deliveryText(status: UiOrderStatus, dateStr: string): string {
//   if (status === "Delivered") return `Delivered on ${dateStr}`;
//   if (status === "Shipped") return "Expected delivery in a few days";
//   if (status === "Cancelled") return "Order cancelled";
//   if (status === "Processing" || status === "Confirmed" || status === "Pending") {
//     return "Estimated delivery in 5–7 days";
//   }
//   return "";
// }

// function mapOrder(o: FirebaseOrder): UiOrder {
//   const dateStr = formatDate(o.createdAt);
//   const status = mapStatus(o.orderStatus);
//   return {
//     id: o.id,
//     orderNumber: o.orderNumber || o.id.slice(0, 10).toUpperCase(),
//     date: dateStr,
//     status,
//     total: o.totalAmount ?? 0,
//     items: (o.items || []).map((item) => ({
//       name: item.name,
//       quantity: item.quantity,
//       price: item.price,
//     })),
//     delivery: deliveryText(status, dateStr),
//   };
// }

// function getLoggedInEmail(): string | null {
//   if (typeof window === "undefined") return null;
//   try {
//     const raw = localStorage.getItem("user");
//     if (!raw) return null;
//     const user = JSON.parse(raw);
//     return user?.email ? String(user.email).toLowerCase() : null;
//   } catch {
//     return null;
//   }
// }

// export default function OrdersPage() {
//   const [orders, setOrders] = useState<UiOrder[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [filter, setFilter] = useState<string>("All orders");
//   const [search, setSearch] = useState("");
//   const [userEmail, setUserEmail] = useState<string | null>(null);

//   useEffect(() => {
//     const email = getLoggedInEmail();
//     setUserEmail(email);

//     if (!email) {
//       setOrders([]);
//       setLoading(false);
//       return;
//     }

//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getUserOrders(email!);
//         if (!cancelled) {
//           const mapped = data
//             .map(mapOrder)
//             .sort((a, b) => (a.date < b.date ? 1 : -1));
//           setOrders(mapped);
//         }
//       } catch (err) {
//         console.error("Failed to load orders:", err);
//         if (!cancelled) setOrders([]);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const filteredOrders = useMemo(() => {
//     const query = search.trim().toLowerCase();

//     return orders.filter((order) => {
//       const matchesFilter =
//         filter === "All orders" ||
//         order.status === filter ||
//         (filter === "Processing" &&
//           (order.status === "Processing" ||
//             order.status === "Pending" ||
//             order.status === "Confirmed"));

//       const matchesSearch =
//         !query ||
//         order.orderNumber.toLowerCase().includes(query) ||
//         order.id.toLowerCase().includes(query) ||
//         order.items.some((item) => item.name.toLowerCase().includes(query));

//       return matchesFilter && matchesSearch;
//     });
//   }, [orders, filter, search]);

//   const totalOrders = orders.length;
//   const activeOrders = orders.filter(
//     (o) =>
//       o.status === "Processing" ||
//       o.status === "Shipped" ||
//       o.status === "Pending" ||
//       o.status === "Confirmed"
//   ).length;
//   const deliveredCount = orders.filter((o) => o.status === "Delivered").length;

//   if (loading) {
//     return (
//       <div className="flex min-h-[40vh] items-center justify-center">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </div>
//     );
//   }

//   if (!userEmail) {
//     return (
//       <div className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
//         <ShoppingBag className="mx-auto text-slate-400" size={28} />
//         <h2 className="mt-4 text-lg font-bold text-slate-900">Sign in to view orders</h2>
//         <p className="mt-2 text-sm text-slate-500">
//           Your order history is saved to your account.
//         </p>
//         <Link
//           href="/sign-in"
//           className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125849]"
//         >
//           Sign in
//           <ArrowRight size={16} />
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full">
//       {/* Header */}
//       <div className="mb-8">
//         <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//               Account
//             </p>
//             <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
//               My Orders
//             </h1>
//             <p className="mt-2 text-sm text-slate-500">
//               View your orders, delivery status and purchase details.
//             </p>
//           </div>
//           <Link
//             href="/products"
//             className="inline-flex w-fit items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
//           >
//             Continue shopping
//             <ArrowRight size={16} />
//           </Link>
//         </div>
//       </div>

//       {/* Summary cards */}
//       <div className="mb-6 grid gap-4 sm:grid-cols-3">
//         <div className="rounded-xl border border-slate-200 bg-white p-5">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-xs font-medium text-slate-500">Total orders</p>
//               <p className="mt-2 text-2xl font-bold text-slate-900">{totalOrders}</p>
//             </div>
//             <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
//               <ShoppingBag size={19} />
//             </div>
//           </div>
//         </div>
//         <div className="rounded-xl border border-slate-200 bg-white p-5">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-xs font-medium text-slate-500">Active orders</p>
//               <p className="mt-2 text-2xl font-bold text-slate-900">{activeOrders}</p>
//             </div>
//             <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
//               <Truck size={19} />
//             </div>
//           </div>
//         </div>
//         <div className="rounded-xl border border-slate-200 bg-white p-5">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-xs font-medium text-slate-500">Delivered</p>
//               <p className="mt-2 text-2xl font-bold text-slate-900">{deliveredCount}</p>
//             </div>
//             <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
//               <Package size={19} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Filters */}
//       <div className="mb-6 rounded-xl border border-slate-200 bg-white p-4">
//         <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//           <div className="flex flex-wrap gap-2">
//             {FILTERS.map((item) => {
//               const active = filter === item;
//               return (
//                 <button
//                   key={item}
//                   type="button"
//                   onClick={() => setFilter(item)}
//                   className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition ${
//                     active
//                       ? "bg-slate-900 text-white"
//                       : "bg-slate-50 text-slate-600 hover:bg-slate-100"
//                   }`}
//                 >
//                   {item}
//                 </button>
//               );
//             })}
//           </div>
//           <div className="relative w-full lg:max-w-xs">
//             <Search
//               size={16}
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//             />
//             <input
//               type="search"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search orders..."
//               className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Orders list */}
//       <div className="space-y-4">
//         {filteredOrders.map((order) => (
//           <article
//             key={order.id}
//             className="overflow-hidden rounded-xl border border-slate-200 bg-white"
//           >
//             <div className="border-b border-slate-100 bg-slate-50/70 px-5 py-4 sm:px-6">
//               <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
//                 <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
//                   <div>
//                     <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
//                       Order
//                     </p>
//                     <p className="mt-0.5 text-sm font-bold text-slate-900">
//                       {order.orderNumber}
//                     </p>
//                   </div>
//                   <div className="flex items-center gap-2 text-xs text-slate-500">
//                     <CalendarDays size={14} />
//                     {order.date}
//                   </div>
//                 </div>
//                 <span
//                   className={`inline-flex w-fit rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${
//                     STATUS_STYLES[order.status] || STATUS_STYLES.Processing
//                   }`}
//                 >
//                   {order.status}
//                 </span>
//               </div>
//             </div>

//             <div className="p-5 sm:p-6">
//               <div className="divide-y divide-slate-100">
//                 {order.items.map((item, index) => (
//                   <div
//                     key={`${order.id}-${index}`}
//                     className="flex gap-4 py-3 first:pt-0 last:pb-0"
//                   >
//                     <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-400">
//                       <Package size={22} />
//                     </div>
//                     <div className="min-w-0 flex-1">
//                       <h2 className="text-sm font-semibold text-slate-900">
//                         {item.name}
//                       </h2>
//                       <p className="mt-1 text-xs text-slate-500">
//                         Quantity: {item.quantity}
//                       </p>
//                     </div>
//                     <p className="text-sm font-semibold text-slate-900">
//                       {formatCurrency(item.price * item.quantity)}
//                     </p>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-5 flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
//                 <div>
//                   <p className="text-xs text-slate-500">{order.delivery}</p>
//                   <p className="mt-1 text-sm font-bold text-slate-900">
//                     Total: {formatCurrency(order.total)}
//                   </p>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   <button
//                     type="button"
//                     className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3.5 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
//                   >
//                     View details
//                     <ChevronDown size={14} />
//                   </button>
//                   {order.status !== "Cancelled" && (
//                     <button
//                       type="button"
//                       className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
//                     >
//                       Track order
//                       <ArrowRight size={14} />
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </article>
//         ))}
//       </div>

//       {filteredOrders.length === 0 && (
//         <div className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
//           <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
//             <ShoppingBag size={22} />
//           </div>
//           <h2 className="mt-4 text-base font-bold text-slate-900">
//             {orders.length === 0 ? "No orders yet" : "No orders found"}
//           </h2>
//           <p className="mt-1 text-sm text-slate-500">
//             {orders.length === 0
//               ? "When you place an order, it will show up here."
//               : "Try changing the filter or search term."}
//           </p>
//           {orders.length === 0 && (
//             <Link
//               href="/products"
//               className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
//             >
//               Browse products
//               <ArrowRight size={16} />
//             </Link>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowRight,
//   CalendarDays,
//   ChevronDown,
//   Loader2,
//   Package,
//   Search,
//   ShoppingBag,
//   Truck,
// } from "lucide-react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import {
//   getUserOrders,
//   type Order as FirebaseOrder,
//   type OrderStatus as FirebaseOrderStatus,
// } from "@/services/checkoutService";

// type UiOrderStatus =
//   | "Processing"
//   | "Shipped"
//   | "Delivered"
//   | "Cancelled"
//   | "Pending"
//   | "Confirmed";

// interface UiOrderItem {
//   name: string;
//   quantity: number;
//   price: number;
// }

// interface UiOrder {
//   id: string;
//   orderNumber: string;
//   date: string;
//   status: UiOrderStatus;
//   total: number;
//   items: UiOrderItem[];
//   delivery: string;
// }

// const STATUS_STYLES: Record<string, string> = {
//   Pending: "bg-slate-50 text-slate-700 ring-slate-200",
//   Confirmed: "bg-indigo-50 text-indigo-700 ring-indigo-200",
//   Processing: "bg-amber-50 text-amber-700 ring-amber-200",
//   Shipped: "bg-blue-50 text-blue-700 ring-blue-200",
//   Delivered: "bg-emerald-50 text-emerald-700 ring-emerald-200",
//   Cancelled: "bg-red-50 text-red-700 ring-red-200",
// };

// const FILTERS = [
//   "All orders",
//   "Processing",
//   "Shipped",
//   "Delivered",
//   "Cancelled",
// ] as const;

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
//     if (value instanceof Date) {
//       return value.toLocaleDateString("en-IN", {
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

// function mapStatus(status?: FirebaseOrderStatus | string): UiOrderStatus {
//   return (status || "Pending") as UiOrderStatus;
// }

// function deliveryText(status: UiOrderStatus, dateStr: string): string {
//   if (status === "Delivered") return `Delivered on ${dateStr}`;
//   if (status === "Shipped") return "Expected delivery in a few days";
//   if (status === "Cancelled") return "Order cancelled";
//   if (
//     status === "Processing" ||
//     status === "Confirmed" ||
//     status === "Pending"
//   ) {
//     return "Estimated delivery in 5–7 days";
//   }
//   return "";
// }

// function mapOrder(o: FirebaseOrder): UiOrder {
//   const dateStr = formatDate(o.createdAt);
//   const status = mapStatus(o.orderStatus);
//   return {
//     id: o.id,
//     orderNumber: o.orderNumber || o.id.slice(0, 10).toUpperCase(),
//     date: dateStr,
//     status,
//     total: o.totalAmount ?? 0,
//     items: (o.items || []).map((item) => ({
//       name: item.name,
//       quantity: item.quantity,
//       price: item.price,
//     })),
//     delivery: deliveryText(status, dateStr),
//   };
// }

// export default function OrdersPage() {
//   const [orders, setOrders] = useState<UiOrder[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [filter, setFilter] = useState<string>("All orders");
//   const [search, setSearch] = useState("");
//   const [userId, setUserId] = useState<string | null>(null);

//   useEffect(() => {
//     let cancelled = false;

//     const unsub = onAuthStateChanged(auth, async (user) => {
//       if (cancelled) return;

//       if (!user) {
//         setUserId(null);
//         setOrders([]);
//         setLoading(false);
//         return;
//       }

//       setUserId(user.uid);
//       setLoading(true);

//       try {
//         // SAME KEY as createOrder: Auth UID
//         const data = await getUserOrders(user.uid);
//         if (cancelled) return;

//         const mapped = data
//           .map(mapOrder)
//           .sort((a, b) => {
//             // Prefer createdAt if available via original; date string fallback
//             return a.date < b.date ? 1 : -1;
//           });
//         setOrders(mapped);
//       } catch (err) {
//         console.error("Failed to load orders:", err);
//         if (!cancelled) setOrders([]);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     });

//     return () => {
//       cancelled = true;
//       unsub();
//     };
//   }, []);

//   const filteredOrders = useMemo(() => {
//     const query = search.trim().toLowerCase();

//     return orders.filter((order) => {
//       const matchesFilter =
//         filter === "All orders" ||
//         order.status === filter ||
//         (filter === "Processing" &&
//           (order.status === "Processing" ||
//             order.status === "Pending" ||
//             order.status === "Confirmed"));

//       const matchesSearch =
//         !query ||
//         order.orderNumber.toLowerCase().includes(query) ||
//         order.id.toLowerCase().includes(query) ||
//         order.items.some((item) => item.name.toLowerCase().includes(query));

//       return matchesFilter && matchesSearch;
//     });
//   }, [orders, filter, search]);

//   const totalOrders = orders.length;
//   const activeOrders = orders.filter(
//     (o) =>
//       o.status === "Processing" ||
//       o.status === "Shipped" ||
//       o.status === "Pending" ||
//       o.status === "Confirmed"
//   ).length;
//   const deliveredCount = orders.filter((o) => o.status === "Delivered").length;

//   if (loading) {
//     return (
//       <div className="flex min-h-[40vh] items-center justify-center">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </div>
//     );
//   }

//   if (!userId) {
//     return (
//       <div className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
//         <ShoppingBag className="mx-auto text-slate-400" size={28} />
//         <h2 className="mt-4 text-lg font-bold text-slate-900">
//           Sign in to view orders
//         </h2>
//         <p className="mt-2 text-sm text-slate-500">
//           Your order history is saved to your account.
//         </p>
//         <Link
//           href="/sign-in"
//           className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125849]"
//         >
//           Sign in
//           <ArrowRight size={16} />
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full">
//       <div className="mb-8">
//         <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//               Account
//             </p>
//             <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
//               My Orders
//             </h1>
//             <p className="mt-2 text-sm text-slate-500">
//               View your orders, delivery status and purchase details.
//             </p>
//           </div>
//           <Link
//             href="/products"
//             className="inline-flex w-fit items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
//           >
//             Continue shopping
//             <ArrowRight size={16} />
//           </Link>
//         </div>
//       </div>

//       <div className="mb-6 grid gap-4 sm:grid-cols-3">
//         <div className="rounded-xl border border-slate-200 bg-white p-5">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-xs font-medium text-slate-500">Total orders</p>
//               <p className="mt-2 text-2xl font-bold text-slate-900">
//                 {totalOrders}
//               </p>
//             </div>
//             <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
//               <ShoppingBag size={19} />
//             </div>
//           </div>
//         </div>
//         <div className="rounded-xl border border-slate-200 bg-white p-5">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-xs font-medium text-slate-500">Active orders</p>
//               <p className="mt-2 text-2xl font-bold text-slate-900">
//                 {activeOrders}
//               </p>
//             </div>
//             <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
//               <Truck size={19} />
//             </div>
//           </div>
//         </div>
//         <div className="rounded-xl border border-slate-200 bg-white p-5">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-xs font-medium text-slate-500">Delivered</p>
//               <p className="mt-2 text-2xl font-bold text-slate-900">
//                 {deliveredCount}
//               </p>
//             </div>
//             <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
//               <Package size={19} />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mb-6 rounded-xl border border-slate-200 bg-white p-4">
//         <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//           <div className="flex flex-wrap gap-2">
//             {FILTERS.map((item) => {
//               const active = filter === item;
//               return (
//                 <button
//                   key={item}
//                   type="button"
//                   onClick={() => setFilter(item)}
//                   className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition ${
//                     active
//                       ? "bg-slate-900 text-white"
//                       : "bg-slate-50 text-slate-600 hover:bg-slate-100"
//                   }`}
//                 >
//                   {item}
//                 </button>
//               );
//             })}
//           </div>
//           <div className="relative w-full lg:max-w-xs">
//             <Search
//               size={16}
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//             />
//             <input
//               type="search"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search orders..."
//               className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="space-y-4">
//         {filteredOrders.map((order) => (
//           <article
//             key={order.id}
//             className="overflow-hidden rounded-xl border border-slate-200 bg-white"
//           >
//             <div className="border-b border-slate-100 bg-slate-50/70 px-5 py-4 sm:px-6">
//               <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
//                 <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
//                   <div>
//                     <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
//                       Order
//                     </p>
//                     <p className="mt-0.5 text-sm font-bold text-slate-900">
//                       {order.orderNumber}
//                     </p>
//                   </div>
//                   <div className="flex items-center gap-2 text-xs text-slate-500">
//                     <CalendarDays size={14} />
//                     {order.date}
//                   </div>
//                 </div>
//                 <span
//                   className={`inline-flex w-fit rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${
//                     STATUS_STYLES[order.status] || STATUS_STYLES.Pending
//                   }`}
//                 >
//                   {order.status}
//                 </span>
//               </div>
//             </div>

//             <div className="p-5 sm:p-6">
//               <div className="divide-y divide-slate-100">
//                 {order.items.map((item, index) => (
//                   <div
//                     key={`${order.id}-${index}`}
//                     className="flex gap-4 py-3 first:pt-0 last:pb-0"
//                   >
//                     <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-400">
//                       <Package size={22} />
//                     </div>
//                     <div className="min-w-0 flex-1">
//                       <h2 className="text-sm font-semibold text-slate-900">
//                         {item.name}
//                       </h2>
//                       <p className="mt-1 text-xs text-slate-500">
//                         Quantity: {item.quantity}
//                       </p>
//                     </div>
//                     <p className="text-sm font-semibold text-slate-900">
//                       {formatCurrency(item.price * item.quantity)}
//                     </p>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-5 flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
//                 <div>
//                   <p className="text-xs text-slate-500">{order.delivery}</p>
//                   <p className="mt-1 text-sm font-bold text-slate-900">
//                     Total: {formatCurrency(order.total)}
//                   </p>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   <Link
//                     href={`/account/orders/${order.id}`}
//                     className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3.5 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
//                   >
//                     View details
//                     <ChevronDown size={14} />
//                   </Link>
//                   {order.status !== "Cancelled" && (
//                     <Link
//                       href={`/account/orders/${order.id}/track`}
//                       className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
//                     >
//                       Track order
//                       <ArrowRight size={14} />
//                     </Link>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </article>
//         ))}
//       </div>

//       {filteredOrders.length === 0 && (
//         <div className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
//           <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
//             <ShoppingBag size={22} />
//           </div>
//           <h2 className="mt-4 text-base font-bold text-slate-900">
//             {orders.length === 0 ? "No orders yet" : "No orders found"}
//           </h2>
//           <p className="mt-1 text-sm text-slate-500">
//             {orders.length === 0
//               ? "When you place an order, it will show up here."
//               : "Try changing the filter or search term."}
//           </p>
//           {orders.length === 0 && (
//             <Link
//               href="/products"
//               className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
//             >
//               Browse products
//               <ArrowRight size={16} />
//             </Link>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Loader2,
  Package,
  Search,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import {
  getUserOrders,
  type Order as FirebaseOrder,
  type OrderStatus as FirebaseOrderStatus,
} from "@/services/checkoutService";

type UiOrderStatus =
  | "Processing"
  | "Shipped"
  | "Delivered"
  | "Cancelled"
  | "Pending"
  | "Confirmed";

interface UiOrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface UiOrder {
  id: string;
  orderNumber: string;
  date: string;
  status: UiOrderStatus;
  total: number;
  items: UiOrderItem[];
  delivery: string;
}

const STATUS_STYLES: Record<string, string> = {
  Pending: "bg-slate-50 text-slate-700 ring-slate-200",
  Confirmed: "bg-indigo-50 text-indigo-700 ring-indigo-200",
  Processing: "bg-amber-50 text-amber-700 ring-amber-200",
  Shipped: "bg-blue-50 text-blue-700 ring-blue-200",
  Delivered: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Cancelled: "bg-red-50 text-red-700 ring-red-200",
};

const FILTERS = [
  "All orders",
  "Processing",
  "Shipped",
  "Delivered",
  "Cancelled",
] as const;

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
    if (value instanceof Date) {
      return value.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    }
  } catch {
    /* ignore */
  }
  return "—";
}

function mapStatus(status?: FirebaseOrderStatus | string): UiOrderStatus {
  return (status || "Pending") as UiOrderStatus;
}

function deliveryText(status: UiOrderStatus, dateStr: string): string {
  if (status === "Delivered") return `Delivered on ${dateStr}`;
  if (status === "Shipped") return "Expected delivery in a few days";
  if (status === "Cancelled") return "Order cancelled";
  if (
    status === "Processing" ||
    status === "Confirmed" ||
    status === "Pending"
  ) {
    return "Estimated delivery in 5–7 days";
  }
  return "";
}

function mapOrder(o: FirebaseOrder): UiOrder {
  const dateStr = formatDate(o.createdAt);
  const status = mapStatus(o.orderStatus);
  return {
    id: o.id,
    orderNumber: o.orderNumber || o.id.slice(0, 10).toUpperCase(),
    date: dateStr,
    status,
    total: o.totalAmount ?? 0,
    items: (o.items || []).map((item) => ({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    })),
    delivery: deliveryText(status, dateStr),
  };
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<UiOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("All orders");
  const [search, setSearch] = useState("");
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (cancelled) return;
      if (!user) {
        setUserId(null);
        setOrders([]);
        setLoading(false);
        return;
      }
      setUserId(user.uid);
      setLoading(true);
      try {
        const data = await getUserOrders(user.uid);
        if (cancelled) return;
        const mapped = data
          .map(mapOrder)
          .sort((a, b) => (a.date < b.date ? 1 : -1));
        setOrders(mapped);
      } catch (err) {
        console.error("Failed to load orders:", err);
        if (!cancelled) setOrders([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    });
    return () => {
      cancelled = true;
      unsub();
    };
  }, []);

  const filteredOrders = useMemo(() => {
    const query = search.trim().toLowerCase();
    return orders.filter((order) => {
      const matchesFilter =
        filter === "All orders" ||
        order.status === filter ||
        (filter === "Processing" &&
          (order.status === "Processing" ||
            order.status === "Pending" ||
            order.status === "Confirmed"));
      const matchesSearch =
        !query ||
        order.orderNumber.toLowerCase().includes(query) ||
        order.id.toLowerCase().includes(query) ||
        order.items.some((item) => item.name.toLowerCase().includes(query));
      return matchesFilter && matchesSearch;
    });
  }, [orders, filter, search]);

  const totalOrders = orders.length;
  const activeOrders = orders.filter(
    (o) =>
      o.status === "Processing" ||
      o.status === "Shipped" ||
      o.status === "Pending" ||
      o.status === "Confirmed"
  ).length;
  const deliveredCount = orders.filter((o) => o.status === "Delivered").length;

  if (loading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
      </div>
    );
  }

  if (!userId) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white px-4 py-12 text-center sm:px-6 sm:py-16">
        <ShoppingBag className="mx-auto text-slate-400" size={28} />
        <h2 className="mt-4 text-lg font-bold text-slate-900">
          Sign in to view orders
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Your order history is saved to your account.
        </p>
        <Link
          href="/sign-in"
          className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125849]"
        >
          Sign in
          <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-5 sm:mb-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:text-xs">
              Account
            </p>
            <h1 className="mt-1.5 text-2xl font-bold tracking-tight text-slate-900 sm:mt-2 sm:text-3xl">
              My Orders
            </h1>
            <p className="mt-1.5 text-sm text-slate-500 sm:mt-2">
              View orders, delivery status and details.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex min-h-[40px] w-fit items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Continue shopping
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Stats — 3 in one row on mobile */}
      <div className="mb-4 grid grid-cols-3 gap-2 sm:mb-6 sm:gap-4">
        <div className="rounded-xl border border-slate-200 bg-white p-3 sm:p-5">
          <div className="flex items-start justify-between gap-1">
            <div className="min-w-0">
              <p className="text-[10px] font-medium text-slate-500 sm:text-xs">
                Total
              </p>
              <p className="mt-1 text-xl font-bold text-slate-900 sm:mt-2 sm:text-2xl">
                {totalOrders}
              </p>
            </div>
            <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700 sm:flex sm:h-10 sm:w-10">
              <ShoppingBag size={18} />
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-3 sm:p-5">
          <div className="flex items-start justify-between gap-1">
            <div className="min-w-0">
              <p className="text-[10px] font-medium text-slate-500 sm:text-xs">
                Active
              </p>
              <p className="mt-1 text-xl font-bold text-slate-900 sm:mt-2 sm:text-2xl">
                {activeOrders}
              </p>
            </div>
            <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700 sm:flex sm:h-10 sm:w-10">
              <Truck size={18} />
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-3 sm:p-5">
          <div className="flex items-start justify-between gap-1">
            <div className="min-w-0">
              <p className="text-[10px] font-medium text-slate-500 sm:text-xs">
                Delivered
              </p>
              <p className="mt-1 text-xl font-bold text-slate-900 sm:mt-2 sm:text-2xl">
                {deliveredCount}
              </p>
            </div>
            <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 sm:flex sm:h-10 sm:w-10">
              <Package size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* Filters + search */}
      <div className="mb-4 rounded-xl border border-slate-200 bg-white p-3 sm:mb-6 sm:p-4">
        {/* Horizontal scroll chips on mobile */}
        <div className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1 scrollbar-none sm:flex-wrap sm:overflow-visible">
          {FILTERS.map((item) => {
            const active = filter === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`shrink-0 rounded-lg px-3 py-2 text-[11px] font-semibold transition sm:px-3.5 sm:text-xs ${
                  active
                    ? "bg-slate-900 text-white"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className="relative mt-3">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search orders..."
            className="h-10 w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
          />
        </div>
      </div>

      {/* Order cards */}
      <div className="space-y-3 sm:space-y-4">
        {filteredOrders.map((order) => (
          <article
            key={order.id}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white"
          >
            <div className="border-b border-slate-100 bg-slate-50/70 px-3 py-3 sm:px-6 sm:py-4">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                    Order
                  </p>
                  <p className="mt-0.5 truncate text-sm font-bold text-slate-900">
                    {order.orderNumber}
                  </p>
                  <div className="mt-1 flex items-center gap-1.5 text-[11px] text-slate-500 sm:text-xs">
                    <CalendarDays size={12} className="shrink-0" />
                    {order.date}
                  </div>
                </div>
                <span
                  className={`inline-flex shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1 ring-inset sm:px-2.5 sm:py-1 sm:text-xs ${
                    STATUS_STYLES[order.status] || STATUS_STYLES.Pending
                  }`}
                >
                  {order.status}
                </span>
              </div>
            </div>

            <div className="p-3 sm:p-6">
              <div className="divide-y divide-slate-100">
                {order.items.map((item, index) => (
                  <div
                    key={`${order.id}-${index}`}
                    className="flex gap-3 py-2.5 first:pt-0 last:pb-0 sm:gap-4 sm:py-3"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-400 sm:h-14 sm:w-14">
                      <Package size={18} className="sm:h-[22px] sm:w-[22px]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="line-clamp-2 text-xs font-semibold leading-snug text-slate-900 sm:text-sm">
                        {item.name}
                      </h2>
                      <p className="mt-0.5 text-[11px] text-slate-500 sm:mt-1 sm:text-xs">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="shrink-0 text-xs font-semibold text-slate-900 sm:text-sm">
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-3 border-t border-slate-100 pt-3 sm:mt-5 sm:pt-5">
                <p className="text-[11px] text-slate-500 sm:text-xs">
                  {order.delivery}
                </p>
                <p className="mt-1 text-sm font-bold text-slate-900">
                  Total: {formatCurrency(order.total)}
                </p>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  <Link
                    href={`/account/orders/${order.id}`}
                    className="inline-flex min-h-[40px] items-center justify-center gap-1 rounded-lg border border-slate-200 px-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    View details
                    <ChevronRight size={14} />
                  </Link>
                  {order.status !== "Cancelled" ? (
                    <Link
                      href={`/account/orders/${order.id}/track`}
                      className="inline-flex min-h-[40px] items-center justify-center gap-1 rounded-lg bg-slate-900 px-2 text-xs font-semibold text-white transition hover:bg-slate-800"
                    >
                      Track order
                      <ArrowRight size={14} />
                    </Link>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredOrders.length === 0 && (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white px-4 py-12 text-center sm:px-6 sm:py-14">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
            <ShoppingBag size={22} />
          </div>
          <h2 className="mt-4 text-base font-bold text-slate-900">
            {orders.length === 0 ? "No orders yet" : "No orders found"}
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            {orders.length === 0
              ? "When you place an order, it will show up here."
              : "Try changing the filter or search term."}
          </p>
          {orders.length === 0 && (
            <Link
              href="/products"
              className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Browse products
              <ArrowRight size={16} />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
