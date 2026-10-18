// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import {
//   ArrowLeft,
//   Check,
//   Loader2,
//   Package,
//   Truck,
// } from "lucide-react";
// import { getOrder, type Order, type OrderStatus } from "@/services/checkoutService";

// const STEPS: { key: OrderStatus | "Confirmed"; label: string; description: string }[] = [
//   {
//     key: "Pending",
//     label: "Order placed",
//     description: "We have received your order.",
//   },
//   {
//     key: "Confirmed",
//     label: "Confirmed",
//     description: "Your order has been confirmed.",
//   },
//   {
//     key: "Processing",
//     label: "Processing",
//     description: "We are preparing your furniture.",
//   },
//   {
//     key: "Shipped",
//     label: "Shipped",
//     description: "Your order is on the way.",
//   },
//   {
//     key: "Delivered",
//     label: "Delivered",
//     description: "Order delivered successfully.",
//   },
// ];

// const STATUS_ORDER: Record<string, number> = {
//   Pending: 0,
//   Confirmed: 1,
//   Processing: 2,
//   Shipped: 3,
//   Delivered: 4,
//   Cancelled: -1,
// };

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

// export default function TrackOrderPage() {
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

//   const currentIndex = useMemo(() => {
//     if (!order) return 0;
//     if (order.orderStatus === "Cancelled") return -1;
//     return STATUS_ORDER[order.orderStatus || "Pending"] ?? 0;
//   }, [order]);

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
//         <Truck className="mx-auto text-slate-400" size={28} />
//         <h2 className="mt-4 text-lg font-bold text-slate-900">Order not found</h2>
//         <Link
//           href="/account/orders"
//           className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#176b5b] hover:underline"
//         >
//           <ArrowLeft size={16} />
//           Back to orders
//         </Link>
//       </div>
//     );
//   }

//   const isCancelled = order.orderStatus === "Cancelled";

//   return (
//     <div className="w-full">
//       <button
//         type="button"
//         onClick={() => router.push(`/account/orders/${order.id}`)}
//         className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900"
//       >
//         <ArrowLeft size={16} />
//         Back to order details
//       </button>

//       <div className="mb-8">
//         <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//           Tracking
//         </p>
//         <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
//           Track order
//         </h1>
//         <p className="mt-2 text-sm text-slate-500">
//           {order.orderNumber || order.id.slice(0, 10).toUpperCase()} · Placed{" "}
//           {formatDate(order.createdAt)}
//         </p>
//       </div>

//       {isCancelled ? (
//         <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
//           <p className="text-sm font-semibold text-red-700">This order was cancelled</p>
//           <p className="mt-1 text-xs text-red-600">
//             Tracking is not available for cancelled orders.
//           </p>
//           <Link
//             href="/account/orders"
//             className="mt-4 inline-flex text-sm font-semibold text-red-700 hover:underline"
//           >
//             Back to orders
//           </Link>
//         </div>
//       ) : (
//         <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
//           <div className="relative">
//             {STEPS.map((step, index) => {
//               const done = currentIndex >= index;
//               const active = currentIndex === index;
//               const isLast = index === STEPS.length - 1;

//               return (
//                 <div key={step.key} className="relative flex gap-4 pb-10 last:pb-0">
//                   {/* Vertical line */}
//                   {!isLast && (
//                     <div
//                       className={`absolute left-[15px] top-8 h-[calc(100%-16px)] w-0.5 ${
//                         currentIndex > index ? "bg-[#176b5b]" : "bg-slate-200"
//                       }`}
//                     />
//                   )}

//                   {/* Dot */}
//                   <div
//                     className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
//                       done
//                         ? "bg-[#176b5b] text-white"
//                         : "bg-slate-100 text-slate-400 ring-1 ring-slate-200"
//                     }`}
//                   >
//                     {done ? <Check size={16} strokeWidth={2.5} /> : <span className="text-xs font-bold">{index + 1}</span>}
//                   </div>

//                   {/* Text */}
//                   <div className="pt-0.5">
//                     <p
//                       className={`text-sm font-semibold ${
//                         active ? "text-[#176b5b]" : done ? "text-slate-900" : "text-slate-400"
//                       }`}
//                     >
//                       {step.label}
//                     </p>
//                     <p className="mt-0.5 text-xs text-slate-500">{step.description}</p>
//                     {active && (
//                       <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[#eef7f4] px-2.5 py-1 text-[11px] font-semibold text-[#176b5b]">
//                         <Package size={12} />
//                         Current status
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}

//       <div className="mt-6 flex flex-wrap gap-3">
//         <Link
//           href={`/account/orders/${order.id}`}
//           className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
//         >
//           View full details
//         </Link>
//         <Link
//           href="/account/orders"
//           className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
//         >
//           All orders
//         </Link>
//       </div>
//     </div>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import {
//   ArrowLeft,
//   Check,
//   Loader2,
//   Package,
//   Truck,
// } from "lucide-react";
// import {
//   getOrder,
//   type Order,
//   type OrderStatus,
// } from "@/services/checkoutService";

// const STEPS: {
//   key: OrderStatus;
//   label: string;
//   description: string;
// }[] = [
//   {
//     key: "Pending",
//     label: "Order placed",
//     description: "We have received your order.",
//   },
//   {
//     key: "Confirmed",
//     label: "Confirmed",
//     description: "Your order has been confirmed.",
//   },
//   {
//     key: "Processing",
//     label: "Processing",
//     description: "We are preparing your furniture.",
//   },
//   {
//     key: "Shipped",
//     label: "Shipped",
//     description: "Your order is on the way.",
//   },
//   {
//     key: "Delivered",
//     label: "Delivered",
//     description: "Order delivered successfully.",
//   },
// ];

// const STATUS_ORDER: Record<string, number> = {
//   Pending: 0,
//   Confirmed: 1,
//   Processing: 2,
//   Shipped: 3,
//   Delivered: 4,
//   Cancelled: -1,
// };

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

// export default function TrackOrderPage() {
//   const params = useParams();
//   const router = useRouter();
//   const orderId = params.orderId as string;

//   const [order, setOrder] = useState<Order | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
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

//     if (!orderId) return;

//     setLoading(true);
//     load();

//     // Poll so ERP status changes appear without full page reload
//     const interval = setInterval(load, 8000);

//     return () => {
//       cancelled = true;
//       clearInterval(interval);
//     };
//   }, [orderId]);

//   const currentIndex = useMemo(() => {
//     if (!order) return 0;
//     if (order.orderStatus === "Cancelled") return -1;
//     return STATUS_ORDER[order.orderStatus || "Pending"] ?? 0;
//   }, [order]);

//   if (loading && !order) {
//     return (
//       <div className="flex min-h-[40vh] items-center justify-center">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </div>
//     );
//   }

//   if (!order) {
//     return (
//       <div className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
//         <Truck className="mx-auto text-slate-400" size={28} />
//         <h2 className="mt-4 text-lg font-bold text-slate-900">
//           Order not found
//         </h2>
//         <Link
//           href="/account/orders"
//           className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#176b5b]"
//         >
//           <ArrowLeft size={16} />
//           Back to orders
//         </Link>
//       </div>
//     );
//   }

//   const isCancelled = order.orderStatus === "Cancelled";

//   return (
//     <div className="w-full">
//       <button
//         type="button"
//         onClick={() => router.push(`/account/orders/${order.id}`)}
//         className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900"
//       >
//         <ArrowLeft size={16} />
//         Back to order details
//       </button>

//       <div className="mb-8">
//         <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//           Tracking
//         </p>
//         <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
//           Track order
//         </h1>
//         <p className="mt-2 text-sm text-slate-500">
//           {order.orderNumber || order.id.slice(0, 10).toUpperCase()} · Placed{" "}
//           {formatDate(order.createdAt)}
//         </p>
//         <p className="mt-1 text-xs text-slate-400">
//           Status updates automatically when the team advances your order.
//         </p>
//       </div>

//       {isCancelled ? (
//         <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
//           <p className="text-sm font-semibold text-red-700">
//             This order was cancelled
//           </p>
//           <Link
//             href="/account/orders"
//             className="mt-4 inline-flex text-sm font-semibold text-red-700 hover:underline"
//           >
//             Back to orders
//           </Link>
//         </div>
//       ) : (
//         <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
//           <div className="relative">
//             {STEPS.map((step, index) => {
//               const done = currentIndex >= index;
//               const active = currentIndex === index;
//               const isLast = index === STEPS.length - 1;

//               return (
//                 <div
//                   key={step.key}
//                   className="relative flex gap-4 pb-10 last:pb-0"
//                 >
//                   {!isLast && (
//                     <div
//                       className={`absolute left-[15px] top-8 h-[calc(100%-16px)] w-0.5 ${
//                         currentIndex > index
//                           ? "bg-[#176b5b]"
//                           : "bg-slate-200"
//                       }`}
//                     />
//                   )}
//                   <div
//                     className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
//                       done
//                         ? "bg-[#176b5b] text-white"
//                         : "bg-slate-100 text-slate-400 ring-1 ring-slate-200"
//                     }`}
//                   >
//                     {done ? (
//                       <Check size={16} strokeWidth={2.5} />
//                     ) : (
//                       <span className="text-xs font-bold">{index + 1}</span>
//                     )}
//                   </div>
//                   <div className="pt-0.5">
//                     <p
//                       className={`text-sm font-semibold ${
//                         active
//                           ? "text-[#176b5b]"
//                           : done
//                             ? "text-slate-900"
//                             : "text-slate-400"
//                       }`}
//                     >
//                       {step.label}
//                     </p>
//                     <p className="mt-0.5 text-xs text-slate-500">
//                       {step.description}
//                     </p>
//                     {active && (
//                       <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[#eef7f4] px-2.5 py-1 text-[11px] font-semibold text-[#176b5b]">
//                         <Package size={12} />
//                         Current status
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}

//       <div className="mt-6 flex flex-wrap gap-3">
//         <Link
//           href={`/account/orders/${order.id}`}
//           className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
//         >
//           View full details
//         </Link>
//         <Link
//           href="/account/orders"
//           className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
//         >
//           All orders
//         </Link>
//       </div>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Check,
  Loader2,
  Package,
  Truck,
} from "lucide-react";
import {
  getOrder,
  type Order,
  type OrderStatus,
} from "@/services/checkoutService";

const STEPS: {
  key: OrderStatus;
  label: string;
  description: string;
}[] = [
  {
    key: "Pending",
    label: "Order placed",
    description: "We have received your order.",
  },
  {
    key: "Confirmed",
    label: "Confirmed",
    description: "Your order has been confirmed.",
  },
  {
    key: "Processing",
    label: "Processing",
    description: "We are preparing your furniture.",
  },
  {
    key: "Shipped",
    label: "Shipped",
    description: "Your order is on the way.",
  },
  {
    key: "Delivered",
    label: "Delivered",
    description: "Order delivered successfully.",
  },
];

const STATUS_ORDER: Record<string, number> = {
  Pending: 0,
  Confirmed: 1,
  Processing: 2,
  Shipped: 3,
  Delivered: 4,
  Cancelled: -1,
};

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

export default function TrackOrderPage() {
  const params = useParams();
  const router = useRouter();
  const orderId = params.orderId as string;

  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const data = await getOrder(orderId);
        if (!cancelled) setOrder(data);
      } catch (err) {
        console.error(err);
        if (!cancelled) setOrder(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (!orderId) return;

    setLoading(true);
    load();

    const interval = setInterval(load, 8000);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [orderId]);

  const currentIndex = useMemo(() => {
    if (!order) return 0;
    if (order.orderStatus === "Cancelled") return -1;
    return STATUS_ORDER[order.orderStatus || "Pending"] ?? 0;
  }, [order]);

  if (loading && !order) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white px-4 py-12 text-center sm:px-6 sm:py-16">
        <Truck className="mx-auto text-slate-400" size={28} />
        <h2 className="mt-4 text-lg font-bold text-slate-900">
          Order not found
        </h2>
        <Link
          href="/account/orders"
          className="mt-6 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-[#176b5b]"
        >
          <ArrowLeft size={16} />
          Back to orders
        </Link>
      </div>
    );
  }

  const isCancelled = order.orderStatus === "Cancelled";

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => router.push(`/account/orders/${order.id}`)}
        className="mb-3 inline-flex min-h-[40px] items-center gap-1.5 rounded-lg px-2 py-1.5 -ml-2 text-xs font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 sm:mb-4 sm:text-sm"
      >
        <ArrowLeft size={14} className="shrink-0" />
        Back to order details
      </button>

      <div className="mb-5 sm:mb-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:text-xs">
          Tracking
        </p>
        <h1 className="mt-1.5 text-xl font-bold tracking-tight text-slate-900 sm:mt-2 sm:text-3xl">
          Track order
        </h1>
        <p className="mt-1.5 text-xs text-slate-500 sm:mt-2 sm:text-sm">
          {order.orderNumber || order.id.slice(0, 10).toUpperCase()} · Placed{" "}
          {formatDate(order.createdAt)}
        </p>
        <p className="mt-1 text-[11px] text-slate-400 sm:text-xs">
          Status updates automatically when the team advances your order.
        </p>
      </div>

      {isCancelled ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-center sm:p-6">
          <p className="text-sm font-semibold text-red-700">
            This order was cancelled
          </p>
          <Link
            href="/account/orders"
            className="mt-4 inline-flex min-h-[40px] text-sm font-semibold text-red-700 hover:underline"
          >
            Back to orders
          </Link>
        </div>
      ) : (
        <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6 lg:p-8">
          <div className="relative">
            {STEPS.map((step, index) => {
              const done = currentIndex >= index;
              const active = currentIndex === index;
              const isLast = index === STEPS.length - 1;

              return (
                <div
                  key={step.key}
                  className="relative flex gap-3 pb-8 last:pb-0 sm:gap-4 sm:pb-10"
                >
                  {!isLast && (
                    <div
                      className={`absolute left-[13px] top-7 h-[calc(100%-12px)] w-0.5 sm:left-[15px] sm:top-8 sm:h-[calc(100%-16px)] ${
                        currentIndex > index
                          ? "bg-[#176b5b]"
                          : "bg-slate-200"
                      }`}
                    />
                  )}
                  <div
                    className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full sm:h-8 sm:w-8 ${
                      done
                        ? "bg-[#176b5b] text-white"
                        : "bg-slate-100 text-slate-400 ring-1 ring-slate-200"
                    }`}
                  >
                    {done ? (
                      <Check size={14} strokeWidth={2.5} className="sm:h-4 sm:w-4" />
                    ) : (
                      <span className="text-[10px] font-bold sm:text-xs">
                        {index + 1}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <p
                      className={`text-sm font-semibold ${
                        active
                          ? "text-[#176b5b]"
                          : done
                            ? "text-slate-900"
                            : "text-slate-400"
                      }`}
                    >
                      {step.label}
                    </p>
                    <p className="mt-0.5 text-[11px] leading-4 text-slate-500 sm:text-xs">
                      {step.description}
                    </p>
                    {active && (
                      <p className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-[#eef7f4] px-2 py-0.5 text-[10px] font-semibold text-[#176b5b] sm:mt-2 sm:px-2.5 sm:py-1 sm:text-[11px]">
                        <Package size={11} />
                        Current status
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-6 sm:flex sm:flex-wrap sm:gap-3">
        <Link
          href={`/account/orders/${order.id}`}
          className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 hover:bg-slate-50 sm:px-4 sm:text-sm"
        >
          View details
        </Link>
        <Link
          href="/account/orders"
          className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-slate-900 px-3 text-xs font-semibold text-white hover:bg-slate-800 sm:px-4 sm:text-sm"
        >
          All orders
        </Link>
      </div>
    </div>
  );
}
