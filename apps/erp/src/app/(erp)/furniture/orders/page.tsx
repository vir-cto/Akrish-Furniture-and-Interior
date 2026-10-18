// "use client";

// import { useMemo, useState } from "react";

// type OrderStatus =
//   | "New"
//   | "Confirmed"
//   | "In Production"
//   | "Ready"
//   | "Delivered"
//   | "Cancelled";

// type PaymentStatus = "Paid" | "Partial" | "Pending";

// type Order = {
//   id: number;
//   orderNo: string;
//   orderDate: string;
//   customer: string;
//   phone: string;
//   product: string;
//   category: string;
//   quantity: number;
//   total: number;
//   paid: number;
//   status: OrderStatus;
//   paymentStatus: PaymentStatus;
//   deliveryDate: string;
//   source: string;
//   notes: string;
// };

// const initialOrders: Order[] = [
//   {
//     id: 1,
//     orderNo: "ORD-001",
//     orderDate: "2026-10-06",
//     customer: "Rahul Kumar",
//     phone: "9876543210",
//     product: "Modern 3 Seater Sofa",
//     category: "Sofas",
//     quantity: 1,
//     total: 42000,
//     paid: 42000,
//     status: "Confirmed",
//     paymentStatus: "Paid",
//     deliveryDate: "2026-10-12",
//     source: "Website",
//     notes: "Customer requested evening delivery.",
//   },
//   {
//     id: 2,
//     orderNo: "ORD-002",
//     orderDate: "2026-10-05",
//     customer: "Priya Reddy",
//     phone: "9988776655",
//     product: "Modular Kitchen Unit",
//     category: "Kitchen",
//     quantity: 1,
//     total: 95000,
//     paid: 50000,
//     status: "In Production",
//     paymentStatus: "Partial",
//     deliveryDate: "2026-10-20",
//     source: "Instagram",
//     notes: "Final laminate selection approved.",
//   },
//   {
//     id: 3,
//     orderNo: "ORD-003",
//     orderDate: "2026-10-04",
//     customer: "Suresh Rao",
//     phone: "9123456780",
//     product: "King Size Wooden Bed",
//     category: "Beds",
//     quantity: 1,
//     total: 58000,
//     paid: 58000,
//     status: "Ready",
//     paymentStatus: "Paid",
//     deliveryDate: "2026-10-08",
//     source: "Walk-in",
//     notes: "Ready for dispatch.",
//   },
//   {
//     id: 4,
//     orderNo: "ORD-004",
//     orderDate: "2026-10-03",
//     customer: "Ananya Sharma",
//     phone: "9012345678",
//     product: "Sliding Door Wardrobe",
//     category: "Wardrobes",
//     quantity: 2,
//     total: 92000,
//     paid: 30000,
//     status: "In Production",
//     paymentStatus: "Partial",
//     deliveryDate: "2026-10-18",
//     source: "Referral",
//     notes: "Two units for master bedroom.",
//   },
//   {
//     id: 5,
//     orderNo: "ORD-005",
//     orderDate: "2026-10-02",
//     customer: "Vikram Singh",
//     phone: "9345678901",
//     product: "6 Seater Dining Table",
//     category: "Dining",
//     quantity: 1,
//     total: 35000,
//     paid: 35000,
//     status: "Delivered",
//     paymentStatus: "Paid",
//     deliveryDate: "2026-10-05",
//     source: "Google",
//     notes: "Delivered successfully.",
//   },
//   {
//     id: 6,
//     orderNo: "ORD-006",
//     orderDate: "2026-10-01",
//     customer: "Meghana Rao",
//     phone: "9567890123",
//     product: "L Shape Corner Sofa",
//     category: "Sofas",
//     quantity: 1,
//     total: 62000,
//     paid: 0,
//     status: "New",
//     paymentStatus: "Pending",
//     deliveryDate: "2026-10-15",
//     source: "Product Page",
//     notes: "Awaiting advance payment.",
//   },
//   {
//     id: 7,
//     orderNo: "ORD-007",
//     orderDate: "2026-09-30",
//     customer: "Arjun Patel",
//     phone: "9898989898",
//     product: "Executive Office Table",
//     category: "Tables",
//     quantity: 3,
//     total: 84000,
//     paid: 84000,
//     status: "Confirmed",
//     paymentStatus: "Paid",
//     deliveryDate: "2026-10-10",
//     source: "Website",
//     notes: "",
//   },
//   {
//     id: 8,
//     orderNo: "ORD-008",
//     orderDate: "2026-09-28",
//     customer: "Kavya Reddy",
//     phone: "9000011111",
//     product: "Ergonomic Office Chair",
//     category: "Office Furniture",
//     quantity: 5,
//     total: 82500,
//     paid: 40000,
//     status: "In Production",
//     paymentStatus: "Partial",
//     deliveryDate: "2026-10-14",
//     source: "WhatsApp",
//     notes: "Five chairs for new office.",
//   },
// ];

// const orderStatuses: OrderStatus[] = [
//   "New",
//   "Confirmed",
//   "In Production",
//   "Ready",
//   "Delivered",
//   "Cancelled",
// ];

// const categories = [
//   "All Categories",
//   "Sofas",
//   "Beds",
//   "Dining",
//   "Wardrobes",
//   "Kitchen",
//   "Tables",
//   "Office Furniture",
//   "Chairs",
// ];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function formatDate(date: string) {
//   return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });
// }

// function getStatusClasses(status: OrderStatus) {
//   if (status === "Delivered") {
//     return "bg-emerald-50 text-emerald-700 border-emerald-200";
//   }

//   if (status === "In Production") {
//     return "bg-blue-50 text-blue-700 border-blue-200";
//   }

//   if (status === "Ready") {
//     return "bg-purple-50 text-purple-700 border-purple-200";
//   }

//   if (status === "Confirmed") {
//     return "bg-[#eef7f4] text-[#176b5b] border-[#cfe4dd]";
//   }

//   if (status === "Cancelled") {
//     return "bg-red-50 text-red-700 border-red-200";
//   }

//   return "bg-amber-50 text-amber-700 border-amber-200";
// }

// function getPaymentClasses(status: PaymentStatus) {
//   if (status === "Paid") {
//     return "bg-emerald-50 text-emerald-700";
//   }

//   if (status === "Partial") {
//     return "bg-amber-50 text-amber-700";
//   }

//   return "bg-red-50 text-red-700";
// }

// function SummaryCard({
//   title,
//   value,
//   subtitle,
//   icon,
//   iconClass,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   icon: string;
//   iconClass: string;
// }) {
//   return (
//     <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//       <div className="flex items-start justify-between gap-4">
//         <div>
//           <p className="text-sm font-medium text-gray-500">{title}</p>

//           <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>

//           <p className="mt-1 text-xs text-gray-500">{subtitle}</p>
//         </div>

//         <div
//           className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg font-bold ${iconClass}`}
//         >
//           {icon}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function OrdersPage() {
//   const [orders, setOrders] = useState<Order[]>(initialOrders);

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [categoryFilter, setCategoryFilter] =
//     useState("All Categories");
//   const [paymentFilter, setPaymentFilter] = useState("All");

//   const [showAddModal, setShowAddModal] = useState(false);
//   const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

//   const [newOrder, setNewOrder] = useState({
//     customer: "",
//     phone: "",
//     product: "",
//     category: "Sofas",
//     quantity: "1",
//     total: "",
//     paid: "",
//     status: "New" as OrderStatus,
//     deliveryDate: "2026-10-15",
//     source: "Website",
//     notes: "",
//   });

//   const totalOrders = orders.length;

//   const totalOrderValue = orders.reduce(
//     (sum, order) => sum + order.total,
//     0
//   );

//   const totalReceived = orders.reduce(
//     (sum, order) => sum + order.paid,
//     0
//   );

//   const totalPending = totalOrderValue - totalReceived;

//   const activeOrders = orders.filter(
//     (order) =>
//       order.status !== "Delivered" && order.status !== "Cancelled"
//   ).length;

//   const deliveredOrders = orders.filter(
//     (order) => order.status === "Delivered"
//   ).length;

//   const pendingPayments = orders.filter(
//     (order) => order.paymentStatus !== "Paid"
//   ).length;

//   const filteredOrders = useMemo(() => {
//     const searchValue = search.toLowerCase().trim();

//     return orders.filter((order) => {
//       const matchesSearch =
//         !searchValue ||
//         order.orderNo.toLowerCase().includes(searchValue) ||
//         order.customer.toLowerCase().includes(searchValue) ||
//         order.phone.includes(searchValue) ||
//         order.product.toLowerCase().includes(searchValue);

//       const matchesStatus =
//         statusFilter === "All" || order.status === statusFilter;

//       const matchesCategory =
//         categoryFilter === "All Categories" ||
//         order.category === categoryFilter;

//       const matchesPayment =
//         paymentFilter === "All" ||
//         order.paymentStatus === paymentFilter;

//       return (
//         matchesSearch &&
//         matchesStatus &&
//         matchesCategory &&
//         matchesPayment
//       );
//     });
//   }, [
//     orders,
//     search,
//     statusFilter,
//     categoryFilter,
//     paymentFilter,
//   ]);

//   const productionOrders = orders.filter(
//     (order) => order.status === "In Production"
//   );

//   const upcomingDeliveries = orders
//     .filter(
//       (order) =>
//         order.status !== "Delivered" &&
//         order.status !== "Cancelled"
//     )
//     .sort((a, b) =>
//       a.deliveryDate.localeCompare(b.deliveryDate)
//     )
//     .slice(0, 5);

//   function calculatePaymentStatus(
//     total: number,
//     paid: number
//   ): PaymentStatus {
//     if (paid <= 0) return "Pending";
//     if (paid >= total) return "Paid";
//     return "Partial";
//   }

//   function handleAddOrder() {
//     const quantity = Number(newOrder.quantity);
//     const total = Number(newOrder.total);
//     const paid = Number(newOrder.paid || 0);

//     if (
//       !newOrder.customer.trim() ||
//       !newOrder.phone.trim() ||
//       !newOrder.product.trim() ||
//       !total ||
//       total <= 0
//     ) {
//       alert(
//         "Please enter customer, phone, product and a valid total amount."
//       );
//       return;
//     }

//     if (quantity <= 0) {
//       alert("Quantity must be greater than zero.");
//       return;
//     }

//     if (paid < 0 || paid > total) {
//       alert("Paid amount cannot be greater than the order total.");
//       return;
//     }

//     const nextId =
//       orders.length > 0
//         ? Math.max(...orders.map((order) => order.id)) + 1
//         : 1;

//     const order: Order = {
//       id: nextId,
//       orderNo: `ORD-${String(nextId).padStart(3, "0")}`,
//       orderDate: "2026-10-06",
//       customer: newOrder.customer.trim(),
//       phone: newOrder.phone.trim(),
//       product: newOrder.product.trim(),
//       category: newOrder.category,
//       quantity,
//       total,
//       paid,
//       status: newOrder.status,
//       paymentStatus: calculatePaymentStatus(total, paid),
//       deliveryDate: newOrder.deliveryDate,
//       source: newOrder.source,
//       notes: newOrder.notes.trim(),
//     };

//     setOrders((current) => [order, ...current]);

//     setNewOrder({
//       customer: "",
//       phone: "",
//       product: "",
//       category: "Sofas",
//       quantity: "1",
//       total: "",
//       paid: "",
//       status: "New",
//       deliveryDate: "2026-10-15",
//       source: "Website",
//       notes: "",
//     });

//     setShowAddModal(false);
//   }

//   function updateOrderStatus(
//     orderId: number,
//     status: OrderStatus
//   ) {
//     setOrders((current) =>
//       current.map((order) =>
//         order.id === orderId
//           ? {
//               ...order,
//               status,
//             }
//           : order
//       )
//     );

//     setSelectedOrder((current) =>
//       current && current.id === orderId
//         ? {
//             ...current,
//             status,
//           }
//         : current
//     );
//   }

//   function markPaymentReceived(orderId: number) {
//     setOrders((current) =>
//       current.map((order) =>
//         order.id === orderId
//           ? {
//               ...order,
//               paid: order.total,
//               paymentStatus: "Paid",
//             }
//           : order
//       )
//     );

//     setSelectedOrder((current) =>
//       current && current.id === orderId
//         ? {
//             ...current,
//             paid: current.total,
//             paymentStatus: "Paid",
//           }
//         : current
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-gray-900">
//       {/* Header */}
//       <header className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 lg:px-8">
//           <div className="flex items-center gap-3">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#9a5b18] text-lg font-bold text-white">
//               A
//             </div>

//             <div>
//               <p className="text-sm font-semibold text-gray-900">
//                 Akrish
//               </p>

//               <p className="text-xs text-gray-500">
//                 Furniture and Interior
//               </p>
//             </div>
//           </div>

//           <div className="hidden items-center gap-2 rounded-xl bg-[#f7f7f4] px-4 py-2 text-sm text-gray-600 sm:flex">
//             <span>▤</span>
//             <span>Sales</span>
//             <span className="text-gray-400">/</span>
//             <span className="font-medium text-gray-900">
//               Orders
//             </span>
//           </div>
//         </div>
//       </header>

//       <main className="mx-auto max-w-[1600px] px-5 py-7 lg:px-8">
//         {/* Page heading */}
//         <div className="mb-7 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
//           <div>
//             <p className="mb-1 text-sm font-medium text-[#176b5b]">
//               Sales Management
//             </p>

//             <h1 className="text-3xl font-bold tracking-tight text-gray-900">
//               Orders
//             </h1>

//             <p className="mt-1 text-sm text-gray-500">
//               Manage furniture orders, production status, delivery and
//               payments.
//             </p>
//           </div>

//           <button
//             onClick={() => setShowAddModal(true)}
//             className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#125748]"
//           >
//             <span className="text-lg">+</span>
//             New Order
//           </button>
//         </div>

//         {/* Summary */}
//         <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
//           <SummaryCard
//             title="Total Orders"
//             value={String(totalOrders)}
//             subtitle="All order records"
//             icon="▤"
//             iconClass="bg-[#eef7f4] text-[#176b5b]"
//           />

//           <SummaryCard
//             title="Order Value"
//             value={formatCurrency(totalOrderValue)}
//             subtitle="Total sales value"
//             icon="₹"
//             iconClass="bg-blue-50 text-blue-700"
//           />

//           <SummaryCard
//             title="Received"
//             value={formatCurrency(totalReceived)}
//             subtitle="Payments received"
//             icon="✓"
//             iconClass="bg-emerald-50 text-emerald-700"
//           />

//           <SummaryCard
//             title="Pending"
//             value={formatCurrency(totalPending)}
//             subtitle={`${pendingPayments} payment${
//               pendingPayments !== 1 ? "s" : ""
//             } pending`}
//             icon="!"
//             iconClass="bg-amber-50 text-amber-700"
//           />

//           <SummaryCard
//             title="Active Orders"
//             value={String(activeOrders)}
//             subtitle={`${deliveredOrders} delivered`}
//             icon="◷"
//             iconClass="bg-purple-50 text-purple-700"
//           />
//         </div>

//         {/* Main */}
//         <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
//           <section className="min-w-0 rounded-2xl border border-[#e4e2da] bg-white shadow-sm">
//             {/* Filters */}
//             <div className="border-b border-[#e4e2da] p-5">
//               <div className="flex flex-col gap-4">
//                 <div className="relative">
//                   <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
//                     ⌕
//                   </span>

//                   <input
//                     value={search}
//                     onChange={(event) =>
//                       setSearch(event.target.value)
//                     }
//                     placeholder="Search order, customer, phone or product..."
//                     className="w-full rounded-xl border border-gray-200 bg-[#fafaf8] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                   />
//                 </div>

//                 <div className="grid gap-3 sm:grid-cols-3">
//                   <select
//                     value={statusFilter}
//                     onChange={(event) =>
//                       setStatusFilter(event.target.value)
//                     }
//                     className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="All">All Order Status</option>

//                     {orderStatuses.map((status) => (
//                       <option key={status}>{status}</option>
//                     ))}
//                   </select>

//                   <select
//                     value={categoryFilter}
//                     onChange={(event) =>
//                       setCategoryFilter(event.target.value)
//                     }
//                     className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     {categories.map((category) => (
//                       <option key={category}>{category}</option>
//                     ))}
//                   </select>

//                   <select
//                     value={paymentFilter}
//                     onChange={(event) =>
//                       setPaymentFilter(event.target.value)
//                     }
//                     className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="All">All Payment Status</option>
//                     <option value="Paid">Paid</option>
//                     <option value="Partial">Partial</option>
//                     <option value="Pending">Pending</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Orders table */}
//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[1150px]">
//                 <thead>
//                   <tr className="border-b border-[#e4e2da] bg-[#fafaf8] text-left">
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Order
//                     </th>

//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Customer
//                     </th>

//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Product
//                     </th>

//                     <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Qty
//                     </th>

//                     <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Total
//                     </th>

//                     <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Payment
//                     </th>

//                     <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Status
//                     </th>

//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Delivery
//                     </th>

//                     <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Action
//                     </th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {filteredOrders.map((order) => (
//                     <tr
//                       key={order.id}
//                       className="border-b border-[#efeee9] transition hover:bg-[#fafaf8]"
//                     >
//                       <td className="px-5 py-4">
//                         <div>
//                           <p className="text-xs font-semibold text-[#176b5b]">
//                             {order.orderNo}
//                           </p>

//                           <p className="mt-1 text-xs text-gray-500">
//                             {formatDate(order.orderDate)}
//                           </p>
//                         </div>
//                       </td>

//                       <td className="px-5 py-4">
//                         <p className="font-medium text-gray-900">
//                           {order.customer}
//                         </p>

//                         <p className="mt-1 text-xs text-gray-500">
//                           {order.phone}
//                         </p>
//                       </td>

//                       <td className="px-5 py-4">
//                         <p className="font-medium text-gray-900">
//                           {order.product}
//                         </p>

//                         <p className="mt-1 text-xs text-gray-500">
//                           {order.category}
//                         </p>
//                       </td>

//                       <td className="px-5 py-4 text-center text-sm font-medium text-gray-700">
//                         {order.quantity}
//                       </td>

//                       <td className="px-5 py-4 text-right">
//                         <p className="text-sm font-semibold text-gray-900">
//                           {formatCurrency(order.total)}
//                         </p>

//                         <p className="mt-1 text-xs text-gray-500">
//                           Paid {formatCurrency(order.paid)}
//                         </p>
//                       </td>

//                       <td className="px-5 py-4 text-center">
//                         <span
//                           className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${getPaymentClasses(
//                             order.paymentStatus
//                           )}`}
//                         >
//                           {order.paymentStatus}
//                         </span>
//                       </td>

//                       <td className="px-5 py-4 text-center">
//                         <span
//                           className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusClasses(
//                             order.status
//                           )}`}
//                         >
//                           {order.status}
//                         </span>
//                       </td>

//                       <td className="px-5 py-4 text-sm text-gray-600">
//                         {formatDate(order.deliveryDate)}
//                       </td>

//                       <td className="px-5 py-4 text-right">
//                         <button
//                           onClick={() =>
//                             setSelectedOrder(order)
//                           }
//                           className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:border-[#176b5b] hover:text-[#176b5b]"
//                         >
//                           View
//                         </button>
//                       </td>
//                     </tr>
//                   ))}

//                   {filteredOrders.length === 0 && (
//                     <tr>
//                       <td colSpan={9} className="px-5 py-14 text-center">
//                         <div className="text-3xl">⌕</div>

//                         <p className="mt-3 font-semibold text-gray-900">
//                           No orders found
//                         </p>

//                         <p className="mt-1 text-sm text-gray-500">
//                           Try changing your search or filters.
//                         </p>
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>

//             <div className="flex items-center justify-between border-t border-[#e4e2da] px-5 py-4">
//               <p className="text-sm text-gray-500">
//                 Showing{" "}
//                 <span className="font-semibold text-gray-900">
//                   {filteredOrders.length}
//                 </span>{" "}
//                 of{" "}
//                 <span className="font-semibold text-gray-900">
//                   {orders.length}
//                 </span>{" "}
//                 orders
//               </p>

//               <p className="hidden text-sm text-gray-500 sm:block">
//                 Filtered value:{" "}
//                 <span className="font-semibold text-gray-900">
//                   {formatCurrency(
//                     filteredOrders.reduce(
//                       (sum, order) => sum + order.total,
//                       0
//                     )
//                   )}
//                 </span>
//               </p>
//             </div>
//           </section>

//           {/* Right sidebar */}
//           <aside className="space-y-6">
//             {/* Production */}
//             <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//               <div className="mb-5 flex items-center justify-between">
//                 <div>
//                   <h2 className="font-semibold text-gray-900">
//                     In Production
//                   </h2>

//                   <p className="mt-1 text-xs text-gray-500">
//                     Orders currently being manufactured
//                   </p>
//                 </div>

//                 <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
//                   {productionOrders.length}
//                 </span>
//               </div>

//               <div className="space-y-3">
//                 {productionOrders.map((order) => (
//                   <button
//                     key={order.id}
//                     onClick={() =>
//                       setSelectedOrder(order)
//                     }
//                     className="w-full rounded-xl border border-gray-100 bg-[#fafaf8] p-3 text-left transition hover:border-[#d7ddd9] hover:bg-white"
//                   >
//                     <div className="flex items-start justify-between gap-3">
//                       <div className="min-w-0">
//                         <p className="text-xs font-semibold text-[#176b5b]">
//                           {order.orderNo}
//                         </p>

//                         <p className="mt-1 truncate text-sm font-medium text-gray-900">
//                           {order.product}
//                         </p>

//                         <p className="mt-1 text-xs text-gray-500">
//                           {order.customer}
//                         </p>
//                       </div>

//                       <span className="shrink-0 text-xs font-medium text-blue-700">
//                         {order.quantity} qty
//                       </span>
//                     </div>

//                     <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-100">
//                       <div className="h-full w-2/3 rounded-full bg-blue-500" />
//                     </div>

//                     <div className="mt-2 flex justify-between text-[11px] text-gray-500">
//                       <span>Production</span>
//                       <span>
//                         Due {formatDate(order.deliveryDate)}
//                       </span>
//                     </div>
//                   </button>
//                 ))}

//                 {productionOrders.length === 0 && (
//                   <div className="rounded-xl bg-emerald-50 p-4 text-center">
//                     <p className="text-sm font-medium text-emerald-700">
//                       No orders in production.
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Upcoming deliveries */}
//             <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//               <div className="mb-5">
//                 <h2 className="font-semibold text-gray-900">
//                   Upcoming Deliveries
//                 </h2>

//                 <p className="mt-1 text-xs text-gray-500">
//                   Next scheduled deliveries
//                 </p>
//               </div>

//               <div className="space-y-3">
//                 {upcomingDeliveries.map((order) => (
//                   <button
//                     key={order.id}
//                     onClick={() =>
//                       setSelectedOrder(order)
//                     }
//                     className="w-full rounded-xl border border-gray-100 p-3 text-left transition hover:border-[#d7ddd9] hover:bg-[#fafaf8]"
//                   >
//                     <div className="flex items-center justify-between gap-3">
//                       <div>
//                         <p className="text-sm font-medium text-gray-900">
//                           {order.customer}
//                         </p>

//                         <p className="mt-1 text-xs text-gray-500">
//                           {order.product}
//                         </p>
//                       </div>

//                       <div className="text-right">
//                         <p className="text-xs font-semibold text-[#176b5b]">
//                           {formatDate(order.deliveryDate)}
//                         </p>

//                         <p className="mt-1 text-[11px] text-gray-400">
//                           {order.orderNo}
//                         </p>
//                       </div>
//                     </div>
//                   </button>
//                 ))}

//                 {upcomingDeliveries.length === 0 && (
//                   <p className="text-sm text-gray-500">
//                     No upcoming deliveries.
//                   </p>
//                 )}
//               </div>
//             </div>

//             {/* Order status */}
//             <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//               <h2 className="font-semibold text-gray-900">
//                 Order Status
//               </h2>

//               <div className="mt-5 space-y-4">
//                 {orderStatuses.map((status) => {
//                   const count = orders.filter(
//                     (order) => order.status === status
//                   ).length;

//                   return (
//                     <div
//                       key={status}
//                       className="flex items-center justify-between"
//                     >
//                       <div className="flex items-center gap-2">
//                         <span
//                           className={`h-2.5 w-2.5 rounded-full ${
//                             status === "Delivered"
//                               ? "bg-emerald-500"
//                               : status === "In Production"
//                               ? "bg-blue-500"
//                               : status === "Ready"
//                               ? "bg-purple-500"
//                               : status === "Cancelled"
//                               ? "bg-red-500"
//                               : status === "Confirmed"
//                               ? "bg-[#176b5b]"
//                               : "bg-amber-500"
//                           }`}
//                         />

//                         <span className="text-sm text-gray-600">
//                           {status}
//                         </span>
//                       </div>

//                       <span className="font-semibold text-gray-900">
//                         {count}
//                       </span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </aside>
//         </div>
//       </main>

//       {/* New Order Modal */}
//       {showAddModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-5">
//               <div>
//                 <h2 className="text-xl font-bold text-gray-900">
//                   New Order
//                 </h2>

//                 <p className="mt-1 text-sm text-gray-500">
//                   Create a new furniture customer order.
//                 </p>
//               </div>

//               <button
//                 onClick={() => setShowAddModal(false)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="grid gap-4 p-6 sm:grid-cols-2">
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Customer Name
//                 </label>

//                 <input
//                   value={newOrder.customer}
//                   onChange={(event) =>
//                     setNewOrder({
//                       ...newOrder,
//                       customer: event.target.value,
//                     })
//                   }
//                   placeholder="Customer name"
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Phone / WhatsApp
//                 </label>

//                 <input
//                   value={newOrder.phone}
//                   onChange={(event) =>
//                     setNewOrder({
//                       ...newOrder,
//                       phone: event.target.value,
//                     })
//                   }
//                   placeholder="Phone number"
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>

//               <div className="sm:col-span-2">
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Product
//                 </label>

//                 <input
//                   value={newOrder.product}
//                   onChange={(event) =>
//                     setNewOrder({
//                       ...newOrder,
//                       product: event.target.value,
//                     })
//                   }
//                   placeholder="e.g. Modern 3 Seater Sofa"
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Category
//                 </label>

//                 <select
//                   value={newOrder.category}
//                   onChange={(event) =>
//                     setNewOrder({
//                       ...newOrder,
//                       category: event.target.value,
//                     })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {categories
//                     .filter(
//                       (category) => category !== "All Categories"
//                     )
//                     .map((category) => (
//                       <option key={category}>{category}</option>
//                     ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Quantity
//                 </label>

//                 <input
//                   type="number"
//                   min="1"
//                   value={newOrder.quantity}
//                   onChange={(event) =>
//                     setNewOrder({
//                       ...newOrder,
//                       quantity: event.target.value,
//                     })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Total Amount
//                 </label>

//                 <div className="relative">
//                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
//                     ₹
//                   </span>

//                   <input
//                     type="number"
//                     min="0"
//                     value={newOrder.total}
//                     onChange={(event) =>
//                       setNewOrder({
//                         ...newOrder,
//                         total: event.target.value,
//                       })
//                     }
//                     placeholder="0"
//                     className="w-full rounded-xl border border-gray-200 py-2.5 pl-8 pr-3 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Paid Amount
//                 </label>

//                 <div className="relative">
//                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
//                     ₹
//                   </span>

//                   <input
//                     type="number"
//                     min="0"
//                     value={newOrder.paid}
//                     onChange={(event) =>
//                       setNewOrder({
//                         ...newOrder,
//                         paid: event.target.value,
//                       })
//                     }
//                     placeholder="0"
//                     className="w-full rounded-xl border border-gray-200 py-2.5 pl-8 pr-3 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Order Status
//                 </label>

//                 <select
//                   value={newOrder.status}
//                   onChange={(event) =>
//                     setNewOrder({
//                       ...newOrder,
//                       status: event.target.value as OrderStatus,
//                     })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {orderStatuses.map((status) => (
//                     <option key={status}>{status}</option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Delivery Date
//                 </label>

//                 <input
//                   type="date"
//                   value={newOrder.deliveryDate}
//                   onChange={(event) =>
//                     setNewOrder({
//                       ...newOrder,
//                       deliveryDate: event.target.value,
//                     })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Source
//                 </label>

//                 <select
//                   value={newOrder.source}
//                   onChange={(event) =>
//                     setNewOrder({
//                       ...newOrder,
//                       source: event.target.value,
//                     })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   <option>Website</option>
//                   <option>Product Page</option>
//                   <option>Instagram</option>
//                   <option>Facebook</option>
//                   <option>Google</option>
//                   <option>WhatsApp</option>
//                   <option>Walk-in</option>
//                   <option>Referral</option>
//                   <option>Other</option>
//                 </select>
//               </div>

//               <div className="sm:col-span-2">
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Notes
//                 </label>

//                 <textarea
//                   rows={3}
//                   value={newOrder.notes}
//                   onChange={(event) =>
//                     setNewOrder({
//                       ...newOrder,
//                       notes: event.target.value,
//                     })
//                   }
//                   placeholder="Optional order notes..."
//                   className="w-full resize-none rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//             </div>

//             <div className="flex justify-end gap-3 border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
//               <button
//                 onClick={() => setShowAddModal(false)}
//                 className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={handleAddOrder}
//                 className="rounded-xl bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125748]"
//               >
//                 Create Order
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Order Details Modal */}
//       {selectedOrder && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-5">
//               <div>
//                 <p className="text-xs font-semibold text-[#176b5b]">
//                   {selectedOrder.orderNo}
//                 </p>

//                 <h2 className="mt-1 text-xl font-bold text-gray-900">
//                   Order Details
//                 </h2>
//               </div>

//               <button
//                 onClick={() => setSelectedOrder(null)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="space-y-5 p-6">
//               {/* Customer */}
//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
//                   Customer
//                 </p>

//                 <div className="mt-3 flex flex-col justify-between gap-3 sm:flex-row">
//                   <div>
//                     <p className="font-semibold text-gray-900">
//                       {selectedOrder.customer}
//                     </p>

//                     <p className="mt-1 text-sm text-gray-500">
//                       {selectedOrder.phone}
//                     </p>
//                   </div>

//                   <div className="text-left sm:text-right">
//                     <p className="text-xs text-gray-500">
//                       Order Date
//                     </p>

//                     <p className="mt-1 text-sm font-medium text-gray-900">
//                       {formatDate(selectedOrder.orderDate)}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Product */}
//               <div className="grid gap-4 sm:grid-cols-2">
//                 <div className="rounded-xl border border-gray-100 p-4">
//                   <p className="text-xs text-gray-500">Product</p>

//                   <p className="mt-1 font-semibold text-gray-900">
//                     {selectedOrder.product}
//                   </p>

//                   <p className="mt-1 text-xs text-gray-500">
//                     {selectedOrder.category}
//                   </p>
//                 </div>

//                 <div className="rounded-xl border border-gray-100 p-4">
//                   <p className="text-xs text-gray-500">Quantity</p>

//                   <p className="mt-1 text-lg font-bold text-gray-900">
//                     {selectedOrder.quantity}
//                   </p>
//                 </div>
//               </div>

//               {/* Amount */}
//               <div className="grid gap-4 sm:grid-cols-3">
//                 <div className="rounded-xl bg-[#fafaf8] p-4">
//                   <p className="text-xs text-gray-500">Order Total</p>

//                   <p className="mt-1 text-lg font-bold text-gray-900">
//                     {formatCurrency(selectedOrder.total)}
//                   </p>
//                 </div>

//                 <div className="rounded-xl bg-emerald-50 p-4">
//                   <p className="text-xs text-emerald-600">
//                     Paid
//                   </p>

//                   <p className="mt-1 text-lg font-bold text-emerald-700">
//                     {formatCurrency(selectedOrder.paid)}
//                   </p>
//                 </div>

//                 <div className="rounded-xl bg-red-50 p-4">
//                   <p className="text-xs text-red-600">
//                     Pending
//                   </p>

//                   <p className="mt-1 text-lg font-bold text-red-700">
//                     {formatCurrency(
//                       selectedOrder.total - selectedOrder.paid
//                     )}
//                   </p>
//                 </div>
//               </div>

//               {/* Status */}
//               <div className="rounded-xl border border-gray-100 p-4">
//                 <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
//                   <div>
//                     <p className="text-xs text-gray-500">
//                       Order Status
//                     </p>

//                     <span
//                       className={`mt-2 inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusClasses(
//                         selectedOrder.status
//                       )}`}
//                     >
//                       {selectedOrder.status}
//                     </span>
//                   </div>

//                   <div>
//                     <p className="text-xs text-gray-500">
//                       Payment Status
//                     </p>

//                     <span
//                       className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${getPaymentClasses(
//                         selectedOrder.paymentStatus
//                       )}`}
//                     >
//                       {selectedOrder.paymentStatus}
//                     </span>
//                   </div>

//                   <div>
//                     <p className="text-xs text-gray-500">
//                       Delivery Date
//                     </p>

//                     <p className="mt-2 text-sm font-semibold text-gray-900">
//                       {formatDate(selectedOrder.deliveryDate)}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Update status */}
//               <div>
//                 <p className="mb-3 text-sm font-semibold text-gray-900">
//                   Update Order Status
//                 </p>

//                 <div className="flex flex-wrap gap-2">
//                   {orderStatuses.map((status) => (
//                     <button
//                       key={status}
//                       onClick={() =>
//                         updateOrderStatus(
//                           selectedOrder.id,
//                           status
//                         )
//                       }
//                       className={`rounded-lg border px-3 py-2 text-xs font-medium transition ${
//                         selectedOrder.status === status
//                           ? "border-[#176b5b] bg-[#eef7f4] text-[#176b5b]"
//                           : "border-gray-200 bg-white text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                       }`}
//                     >
//                       {status}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Payment */}
//               {selectedOrder.paymentStatus !== "Paid" && (
//                 <div className="flex flex-col justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 sm:flex-row sm:items-center">
//                   <div>
//                     <p className="text-sm font-semibold text-amber-800">
//                       Payment Pending
//                     </p>

//                     <p className="mt-1 text-xs text-amber-700">
//                       Outstanding amount:{" "}
//                       {formatCurrency(
//                         selectedOrder.total -
//                           selectedOrder.paid
//                       )}
//                     </p>
//                   </div>

//                   <button
//                     onClick={() =>
//                       markPaymentReceived(selectedOrder.id)
//                     }
//                     className="rounded-xl bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125748]"
//                   >
//                     Mark Payment Received
//                   </button>
//                 </div>
//               )}

//               {/* Extra information */}
//               <div className="grid gap-4 sm:grid-cols-2">
//                 <div>
//                   <p className="text-xs text-gray-500">
//                     Order Source
//                   </p>

//                   <p className="mt-1 text-sm font-medium text-gray-900">
//                     {selectedOrder.source}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-xs text-gray-500">
//                     Customer Phone
//                   </p>

//                   <p className="mt-1 text-sm font-medium text-gray-900">
//                     {selectedOrder.phone}
//                   </p>
//                 </div>
//               </div>

//               {selectedOrder.notes && (
//                 <div className="rounded-xl border border-gray-100 p-4">
//                   <p className="text-xs text-gray-500">Notes</p>

//                   <p className="mt-1 text-sm text-gray-700">
//                     {selectedOrder.notes}
//                   </p>
//                 </div>
//               )}
//             </div>

//             <div className="flex justify-end border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
//               <button
//                 onClick={() => setSelectedOrder(null)}
//                 className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAllOrders,
//   createOrder,
//   updateOrder,
//   type FurnitureOrder,
// } from "@/modules/furniture/services/orderService";

// type OrderStatus =
//   | "New"
//   | "Confirmed"
//   | "In Production"
//   | "Ready"
//   | "Delivered"
//   | "Cancelled";

// type PaymentStatus = "Paid" | "Partial" | "Pending";

// type Order = {
//   id: string;
//   orderNo: string;
//   orderDate: string;
//   customer: string;
//   phone: string;
//   product: string;
//   category: string;
//   quantity: number;
//   total: number;
//   paid: number;
//   status: OrderStatus;
//   paymentStatus: PaymentStatus;
//   deliveryDate: string;
//   source: string;
//   notes: string;
// };

// const orderStatuses: OrderStatus[] = [
//   "New",
//   "Confirmed",
//   "In Production",
//   "Ready",
//   "Delivered",
//   "Cancelled",
// ];

// const categories = [
//   "All Categories",
//   "Sofas",
//   "Beds",
//   "Dining",
//   "Wardrobes",
//   "Kitchen",
//   "Tables",
//   "Office Furniture",
//   "Chairs",
// ];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function formatDate(date: string) {
//   if (!date || date === "—") return "—";
//   try {
//     const d = date.includes("T")
//       ? new Date(date)
//       : new Date(`${date}T00:00:00`);
//     if (Number.isNaN(d.getTime())) return date;
//     return d.toLocaleDateString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   } catch {
//     return date;
//   }
// }

// function formatCreatedAt(value: FurnitureOrder["createdAt"]): string {
//   if (!value) return new Date().toISOString().slice(0, 10);
//   try {
//     const date =
//       typeof value.toDate === "function"
//         ? value.toDate()
//         : new Date(value as unknown as string);
//     return date.toISOString().slice(0, 10);
//   } catch {
//     return new Date().toISOString().slice(0, 10);
//   }
// }

// function normalizeStatus(raw?: string): OrderStatus {
//   const s = (raw || "New").trim();
//   const map: Record<string, OrderStatus> = {
//     New: "New",
//     Pending: "New",
//     Confirmed: "Confirmed",
//     Processing: "In Production",
//     "In Production": "In Production",
//     Shipped: "Ready",
//     Ready: "Ready",
//     Delivered: "Delivered",
//     Paid: "Confirmed",
//     Cancelled: "Cancelled",
//   };
//   return map[s] || "New";
// }

// function normalizePayment(
//   raw?: string,
//   total = 0,
//   paid = 0
// ): PaymentStatus {
//   const s = (raw || "").trim();
//   if (s === "Paid" || s === "Partial" || s === "Pending") {
//     return s as PaymentStatus;
//   }
//   if (paid <= 0) return "Pending";
//   if (paid >= total) return "Paid";
//   return "Partial";
// }

// // function mapToUi(o: FurnitureOrder): Order {
// //   const total = Number(o.total ?? o.amount ?? 0) || 0;
// //   const paid = Number(o.paid ?? 0) || 0;
// //   const items = o.items || [];
// //   const firstItem = items[0];
// //   const product =
// //     o.product ||
// //     o.productName ||
// //     firstItem?.name ||
// //     "Furniture Item";
// //   const quantity =
// //     Number(o.quantity) ||
// //     items.reduce((s, i) => s + (i.qty || 0), 0) ||
// //     1;

// //   return {
// //     id: o.id,
// //     orderNo: o.orderNo || o.id,
// //     orderDate: formatCreatedAt(o.createdAt),
// //     customer: o.customerName || o.customer || "Unknown",
// //     phone: o.phone || "—",
// //     product,
// //     category: o.category || "Other",
// //     quantity,
// //     total,
// //     paid,
// //     status: normalizeStatus(o.status),
// //     paymentStatus: normalizePayment(o.paymentStatus, total, paid),
// //     deliveryDate: o.deliveryDate || "",
// //     source: o.source || "Website",
// //     notes: o.notes || "",
// //   };
// // }

// function mapToUi(o: FurnitureOrder): Order {
//   const total = Number(o.total ?? o.amount ?? o.totalAmount ?? 0) || 0;
//   const paid = Number(o.paid ?? 0) || 0;
//   const items = o.items || [];
//   const firstItem = items[0];
//   const product =
//     o.product ||
//     o.productName ||
//     items.map((i) => i.name).filter(Boolean).join(", ") ||
//     firstItem?.name ||
//     "Furniture Item";
//   const quantity =
//     Number(o.quantity) ||
//     items.reduce((s, i) => s + Number(i.qty ?? 0), 0) ||
//     1;

//   return {
//     id: o.id,
//     orderNo: o.orderNo || o.orderNumber || o.id,
//     orderDate: formatCreatedAt(o.createdAt),
//     customer: o.customerName || o.customer || "Unknown",
//     phone: o.phone || "—",
//     product,
//     category: o.category || "Other",
//     quantity,
//     total,
//     paid,
//     status: normalizeStatus(o.status || o.orderStatus),
//     paymentStatus: normalizePayment(o.paymentStatus, total, paid),
//     deliveryDate: o.deliveryDate || "",
//     source: o.source || "Website",
//     notes: o.notes || "",
//   };
// }

// function getStatusClasses(status: OrderStatus) {
//   if (status === "Delivered") {
//     return "bg-emerald-50 text-emerald-700 border-emerald-200";
//   }
//   if (status === "In Production") {
//     return "bg-blue-50 text-blue-700 border-blue-200";
//   }
//   if (status === "Ready") {
//     return "bg-purple-50 text-purple-700 border-purple-200";
//   }
//   if (status === "Confirmed") {
//     return "bg-[#eef7f4] text-[#176b5b] border-[#cfe4dd]";
//   }
//   if (status === "Cancelled") {
//     return "bg-red-50 text-red-700 border-red-200";
//   }
//   return "bg-amber-50 text-amber-700 border-amber-200";
// }

// function getPaymentClasses(status: PaymentStatus) {
//   if (status === "Paid") {
//     return "bg-emerald-50 text-emerald-700";
//   }
//   if (status === "Partial") {
//     return "bg-amber-50 text-amber-700";
//   }
//   return "bg-red-50 text-red-700";
// }

// function SummaryCard({
//   title,
//   value,
//   subtitle,
//   icon,
//   iconClass,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   icon: string;
//   iconClass: string;
// }) {
//   return (
//     <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//       <div className="flex items-start justify-between gap-4">
//         <div>
//           <p className="text-sm font-medium text-gray-500">{title}</p>
//           <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
//           <p className="mt-1 text-xs text-gray-500">{subtitle}</p>
//         </div>
//         <div
//           className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg font-bold ${iconClass}`}
//         >
//           {icon}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function OrdersPage() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [categoryFilter, setCategoryFilter] =
//     useState("All Categories");
//   const [paymentFilter, setPaymentFilter] = useState("All");

//   const [showAddModal, setShowAddModal] = useState(false);
//   const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

//   const [newOrder, setNewOrder] = useState({
//     customer: "",
//     phone: "",
//     product: "",
//     category: "Sofas",
//     quantity: "1",
//     total: "",
//     paid: "",
//     status: "New" as OrderStatus,
//     deliveryDate: "",
//     source: "Website",
//     notes: "",
//   });

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllOrders();
//         if (cancelled) return;
//         setOrders(data.map(mapToUi));
//       } catch (err) {
//         console.error("Failed to load orders:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const totalOrders = orders.length;

//   const totalOrderValue = orders.reduce(
//     (sum, order) => sum + order.total,
//     0
//   );

//   const totalReceived = orders.reduce(
//     (sum, order) => sum + order.paid,
//     0
//   );

//   const totalPending = totalOrderValue - totalReceived;

//   const activeOrders = orders.filter(
//     (order) =>
//       order.status !== "Delivered" && order.status !== "Cancelled"
//   ).length;

//   const deliveredOrders = orders.filter(
//     (order) => order.status === "Delivered"
//   ).length;

//   const pendingPayments = orders.filter(
//     (order) => order.paymentStatus !== "Paid"
//   ).length;

//   const filteredOrders = useMemo(() => {
//     const searchValue = search.toLowerCase().trim();

//     return orders.filter((order) => {
//       const matchesSearch =
//         !searchValue ||
//         order.orderNo.toLowerCase().includes(searchValue) ||
//         order.customer.toLowerCase().includes(searchValue) ||
//         order.phone.includes(searchValue) ||
//         order.product.toLowerCase().includes(searchValue);

//       const matchesStatus =
//         statusFilter === "All" || order.status === statusFilter;

//       const matchesCategory =
//         categoryFilter === "All Categories" ||
//         order.category === categoryFilter;

//       const matchesPayment =
//         paymentFilter === "All" ||
//         order.paymentStatus === paymentFilter;

//       return (
//         matchesSearch &&
//         matchesStatus &&
//         matchesCategory &&
//         matchesPayment
//       );
//     });
//   }, [
//     orders,
//     search,
//     statusFilter,
//     categoryFilter,
//     paymentFilter,
//   ]);

//   const upcomingDeliveries = orders
//     .filter(
//       (order) =>
//         order.status !== "Delivered" &&
//         order.status !== "Cancelled"
//     )
//     .sort((a, b) =>
//       (a.deliveryDate || "").localeCompare(b.deliveryDate || "")
//     )
//     .slice(0, 5);

//   function calculatePaymentStatus(
//     total: number,
//     paid: number
//   ): PaymentStatus {
//     if (paid <= 0) return "Pending";
//     if (paid >= total) return "Paid";
//     return "Partial";
//   }

//   async function handleAddOrder() {
//     const quantity = Number(newOrder.quantity);
//     const total = Number(newOrder.total);
//     const paid = Number(newOrder.paid || 0);

//     if (
//       !newOrder.customer.trim() ||
//       !newOrder.phone.trim() ||
//       !newOrder.product.trim() ||
//       !total ||
//       total <= 0
//     ) {
//       alert(
//         "Please enter customer, phone, product and a valid total amount."
//       );
//       return;
//     }

//     if (quantity <= 0) {
//       alert("Quantity must be greater than zero.");
//       return;
//     }

//     if (paid < 0 || paid > total) {
//       alert("Paid amount cannot be greater than the order total.");
//       return;
//     }

//     setSaving(true);
//     try {
//       const paymentStatus = calculatePaymentStatus(total, paid);
//       const orderNo = `ORD-${Date.now().toString().slice(-6)}`;

//       const payload = {
//         orderNo,
//         customerName: newOrder.customer.trim(),
//         customer: newOrder.customer.trim(),
//         phone: newOrder.phone.trim(),
//         product: newOrder.product.trim(),
//         productName: newOrder.product.trim(),
//         category: newOrder.category,
//         quantity,
//         amount: total,
//         total,
//         paid,
//         status: newOrder.status,
//         paymentStatus,
//         deliveryDate: newOrder.deliveryDate,
//         source: newOrder.source,
//         notes: newOrder.notes.trim(),
//         items: [
//           {
//             productId: "",
//             name: newOrder.product.trim(),
//             qty: quantity,
//             price: total / quantity,
//           },
//         ],
//       };

//       const id = await createOrder(payload);

//       const order: Order = {
//         id,
//         orderNo,
//         orderDate: new Date().toISOString().slice(0, 10),
//         customer: payload.customerName,
//         phone: payload.phone,
//         product: payload.product,
//         category: payload.category,
//         quantity,
//         total,
//         paid,
//         status: newOrder.status,
//         paymentStatus,
//         deliveryDate: payload.deliveryDate,
//         source: payload.source,
//         notes: payload.notes,
//       };

//       setOrders((current) => [order, ...current]);

//       setNewOrder({
//         customer: "",
//         phone: "",
//         product: "",
//         category: "Sofas",
//         quantity: "1",
//         total: "",
//         paid: "",
//         status: "New",
//         deliveryDate: "",
//         source: "Website",
//         notes: "",
//       });

//       setShowAddModal(false);
//     } catch (err) {
//       console.error("Failed to create order:", err);
//       alert("Unable to create order. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function updateOrderStatus(
//     orderId: string,
//     status: OrderStatus
//   ) {
//     setOrders((current) =>
//       current.map((order) =>
//         order.id === orderId ? { ...order, status } : order
//       )
//     );

//     setSelectedOrder((current) =>
//       current && current.id === orderId
//         ? { ...current, status }
//         : current
//     );

//     try {
//       await updateOrder(orderId, { status });
//     } catch (err) {
//       console.error("Failed to update order status:", err);
//       try {
//         const data = await getAllOrders();
//         setOrders(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   async function markPaymentReceived(orderId: string) {
//     const target = orders.find((o) => o.id === orderId);
//     if (!target) return;

//     setOrders((current) =>
//       current.map((order) =>
//         order.id === orderId
//           ? {
//               ...order,
//               paid: order.total,
//               paymentStatus: "Paid" as PaymentStatus,
//             }
//           : order
//       )
//     );

//     setSelectedOrder((current) =>
//       current && current.id === orderId
//         ? {
//             ...current,
//             paid: current.total,
//             paymentStatus: "Paid",
//           }
//         : current
//     );

//     try {
//       await updateOrder(orderId, {
//         paid: target.total,
//         paymentStatus: "Paid",
//       });
//     } catch (err) {
//       console.error("Failed to mark payment:", err);
//       try {
//         const data = await getAllOrders();
//         setOrders(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-gray-900">
//       <header className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 lg:px-8">
//           <div className="flex items-center gap-3">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#9a5b18] text-lg font-bold text-white">
//               A
//             </div>
//             <div>
//               <p className="text-sm font-semibold text-gray-900">Akrish</p>
//               <p className="text-xs text-gray-500">Furniture and Interior</p>
//             </div>
//           </div>
//           <div className="hidden items-center gap-2 rounded-xl bg-[#f7f7f4] px-4 py-2 text-sm text-gray-600 sm:flex">
//             <span>▤</span>
//             <span>Sales</span>
//             <span className="text-gray-400">/</span>
//             <span className="font-medium text-gray-900">Orders</span>
//           </div>
//         </div>
//       </header>

//       <main className="mx-auto max-w-[1600px] px-5 py-7 lg:px-8">
//         <div className="mb-7 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
//           <div>
//             <p className="mb-1 text-sm font-medium text-[#176b5b]">
//               Sales Management
//             </p>
//             <h1 className="text-3xl font-bold tracking-tight text-gray-900">
//               Orders
//             </h1>
//             <p className="mt-1 text-sm text-gray-500">
//               Manage furniture orders, production status, delivery and
//               payments.
//             </p>
//           </div>
//           <button
//             onClick={() => setShowAddModal(true)}
//             className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#125748]"
//           >
//             <span className="text-lg">+</span>
//             New Order
//           </button>
//         </div>

//         <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
//           <SummaryCard
//             title="Total Orders"
//             value={loading ? "…" : String(totalOrders)}
//             subtitle="All order records"
//             icon="▤"
//             iconClass="bg-[#eef7f4] text-[#176b5b]"
//           />
//           <SummaryCard
//             title="Order Value"
//             value={loading ? "…" : formatCurrency(totalOrderValue)}
//             subtitle="Total sales value"
//             icon="₹"
//             iconClass="bg-blue-50 text-blue-700"
//           />
//           <SummaryCard
//             title="Received"
//             value={loading ? "…" : formatCurrency(totalReceived)}
//             subtitle="Payments received"
//             icon="✓"
//             iconClass="bg-emerald-50 text-emerald-700"
//           />
//           <SummaryCard
//             title="Pending"
//             value={loading ? "…" : formatCurrency(totalPending)}
//             subtitle={`${pendingPayments} payment${
//               pendingPayments !== 1 ? "s" : ""
//             } pending`}
//             icon="!"
//             iconClass="bg-amber-50 text-amber-700"
//           />
//           <SummaryCard
//             title="Active Orders"
//             value={loading ? "…" : String(activeOrders)}
//             subtitle={`${deliveredOrders} delivered`}
//             icon="◷"
//             iconClass="bg-purple-50 text-purple-700"
//           />
//         </div>

//         <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
//           <section className="min-w-0 rounded-2xl border border-[#e4e2da] bg-white shadow-sm">
//             <div className="border-b border-[#e4e2da] p-5">
//               <div className="flex flex-col gap-4">
//                 <div className="relative">
//                   <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
//                     ⌕
//                   </span>
//                   <input
//                     value={search}
//                     onChange={(event) => setSearch(event.target.value)}
//                     placeholder="Search order, customer, phone or product..."
//                     className="w-full rounded-xl border border-gray-200 bg-[#fafaf8] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                   />
//                 </div>
//                 <div className="grid gap-3 sm:grid-cols-3">
//                   <select
//                     value={statusFilter}
//                     onChange={(event) => setStatusFilter(event.target.value)}
//                     className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="All">All Order Status</option>
//                     {orderStatuses.map((status) => (
//                       <option key={status}>{status}</option>
//                     ))}
//                   </select>
//                   <select
//                     value={categoryFilter}
//                     onChange={(event) => setCategoryFilter(event.target.value)}
//                     className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     {categories.map((category) => (
//                       <option key={category}>{category}</option>
//                     ))}
//                   </select>
//                   <select
//                     value={paymentFilter}
//                     onChange={(event) => setPaymentFilter(event.target.value)}
//                     className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="All">All Payment Status</option>
//                     <option value="Paid">Paid</option>
//                     <option value="Partial">Partial</option>
//                     <option value="Pending">Pending</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[1150px]">
//                 <thead>
//                   <tr className="border-b border-[#e4e2da] bg-[#fafaf8] text-left">
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">Order</th>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">Customer</th>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">Product</th>
//                     <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">Qty</th>
//                     <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">Total</th>
//                     <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">Payment</th>
//                     <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">Status</th>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">Delivery</th>
//                     <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {loading ? (
//                     <tr>
//                       <td colSpan={9} className="px-5 py-16 text-center text-sm text-gray-500">
//                         Loading orders…
//                       </td>
//                     </tr>
//                   ) : (
//                     <>
//                       {filteredOrders.map((order) => (
//                         <tr
//                           key={order.id}
//                           className="border-b border-[#efeee9] transition hover:bg-[#fafaf8]"
//                         >
//                           <td className="px-5 py-4">
//                             <div>
//                               <p className="text-xs font-semibold text-[#176b5b]">{order.orderNo}</p>
//                               <p className="mt-1 text-xs text-gray-500">{formatDate(order.orderDate)}</p>
//                             </div>
//                           </td>
//                           <td className="px-5 py-4">
//                             <p className="font-medium text-gray-900">{order.customer}</p>
//                             <p className="mt-1 text-xs text-gray-500">{order.phone}</p>
//                           </td>
//                           <td className="px-5 py-4">
//                             <p className="font-medium text-gray-900">{order.product}</p>
//                             <p className="mt-1 text-xs text-gray-500">{order.category}</p>
//                           </td>
//                           <td className="px-5 py-4 text-center text-sm font-medium text-gray-700">
//                             {order.quantity}
//                           </td>
//                           <td className="px-5 py-4 text-right">
//                             <p className="text-sm font-semibold text-gray-900">{formatCurrency(order.total)}</p>
//                             <p className="mt-1 text-xs text-gray-500">Paid {formatCurrency(order.paid)}</p>
//                           </td>
//                           <td className="px-5 py-4 text-center">
//                             <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${getPaymentClasses(order.paymentStatus)}`}>
//                               {order.paymentStatus}
//                             </span>
//                           </td>
//                           <td className="px-5 py-4 text-center">
//                             <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusClasses(order.status)}`}>
//                               {order.status}
//                             </span>
//                           </td>
//                           <td className="px-5 py-4 text-sm text-gray-600">
//                             {order.deliveryDate ? formatDate(order.deliveryDate) : "—"}
//                           </td>
//                           <td className="px-5 py-4 text-right">
//                             <button
//                               onClick={() => setSelectedOrder(order)}
//                               className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:border-[#176b5b] hover:text-[#176b5b]"
//                             >
//                               View
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                       {filteredOrders.length === 0 && (
//                         <tr>
//                           <td colSpan={9} className="px-5 py-16 text-center">
//                             <p className="text-sm font-semibold text-gray-700">No orders found</p>
//                             <p className="mt-1 text-xs text-gray-500">
//                               Try another search or change the selected filters.
//                             </p>
//                           </td>
//                         </tr>
//                       )}
//                     </>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </section>

//           <aside className="space-y-5">
//             <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//               <div className="mb-5">
//                 <h2 className="font-semibold text-gray-900">Upcoming Deliveries</h2>
//                 <p className="mt-1 text-xs text-gray-500">Next scheduled deliveries</p>
//               </div>
//               <div className="space-y-3">
//                 {upcomingDeliveries.map((order) => (
//                   <button
//                     key={order.id}
//                     onClick={() => setSelectedOrder(order)}
//                     className="w-full rounded-xl border border-gray-100 p-3 text-left transition hover:border-[#d7ddd9] hover:bg-[#fafaf8]"
//                   >
//                     <div className="flex items-center justify-between gap-3">
//                       <div>
//                         <p className="text-sm font-medium text-gray-900">{order.customer}</p>
//                         <p className="mt-1 text-xs text-gray-500">{order.product}</p>
//                       </div>
//                       <div className="text-right">
//                         <p className="text-xs font-semibold text-[#176b5b]">
//                           {order.deliveryDate ? formatDate(order.deliveryDate) : "—"}
//                         </p>
//                         <p className="mt-1 text-[11px] text-gray-400">{order.orderNo}</p>
//                       </div>
//                     </div>
//                   </button>
//                 ))}
//                 {upcomingDeliveries.length === 0 && (
//                   <p className="text-sm text-gray-500">No upcoming deliveries.</p>
//                 )}
//               </div>
//             </div>

//             <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//               <h2 className="font-semibold text-gray-900">Order Status</h2>
//               <div className="mt-5 space-y-4">
//                 {orderStatuses.map((status) => {
//                   const count = orders.filter((order) => order.status === status).length;
//                   return (
//                     <div key={status} className="flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <span
//                           className={`h-2.5 w-2.5 rounded-full ${
//                             status === "Delivered"
//                               ? "bg-emerald-500"
//                               : status === "In Production"
//                               ? "bg-blue-500"
//                               : status === "Ready"
//                               ? "bg-purple-500"
//                               : status === "Cancelled"
//                               ? "bg-red-500"
//                               : status === "Confirmed"
//                               ? "bg-[#176b5b]"
//                               : "bg-amber-500"
//                           }`}
//                         />
//                         <span className="text-sm text-gray-600">{status}</span>
//                       </div>
//                       <span className="font-semibold text-gray-900">{count}</span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </aside>
//         </div>
//       </main>

//       {showAddModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-5">
//               <div>
//                 <h2 className="text-xl font-bold text-gray-900">New Order</h2>
//                 <p className="mt-1 text-sm text-gray-500">Create a new furniture customer order.</p>
//               </div>
//               <button
//                 onClick={() => setShowAddModal(false)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700"
//               >
//                 ×
//               </button>
//             </div>
//             <div className="grid gap-4 p-6 sm:grid-cols-2">
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">Customer Name</label>
//                 <input
//                   value={newOrder.customer}
//                   onChange={(e) => setNewOrder({ ...newOrder, customer: e.target.value })}
//                   placeholder="Customer name"
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">Phone / WhatsApp</label>
//                 <input
//                   value={newOrder.phone}
//                   onChange={(e) => setNewOrder({ ...newOrder, phone: e.target.value })}
//                   placeholder="Phone number"
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div className="sm:col-span-2">
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">Product</label>
//                 <input
//                   value={newOrder.product}
//                   onChange={(e) => setNewOrder({ ...newOrder, product: e.target.value })}
//                   placeholder="e.g. Modern 3 Seater Sofa"
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">Category</label>
//                 <select
//                   value={newOrder.category}
//                   onChange={(e) => setNewOrder({ ...newOrder, category: e.target.value })}
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {categories.filter((c) => c !== "All Categories").map((c) => (
//                     <option key={c}>{c}</option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">Quantity</label>
//                 <input
//                   type="number"
//                   min="1"
//                   value={newOrder.quantity}
//                   onChange={(e) => setNewOrder({ ...newOrder, quantity: e.target.value })}
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">Total Amount</label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">₹</span>
//                   <input
//                     type="number"
//                     min="0"
//                     value={newOrder.total}
//                     onChange={(e) => setNewOrder({ ...newOrder, total: e.target.value })}
//                     placeholder="0"
//                     className="w-full rounded-xl border border-gray-200 py-2.5 pl-8 pr-3 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">Paid Amount</label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">₹</span>
//                   <input
//                     type="number"
//                     min="0"
//                     value={newOrder.paid}
//                     onChange={(e) => setNewOrder({ ...newOrder, paid: e.target.value })}
//                     placeholder="0"
//                     className="w-full rounded-xl border border-gray-200 py-2.5 pl-8 pr-3 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">Order Status</label>
//                 <select
//                   value={newOrder.status}
//                   onChange={(e) => setNewOrder({ ...newOrder, status: e.target.value as OrderStatus })}
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {orderStatuses.map((s) => (
//                     <option key={s}>{s}</option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">Delivery Date</label>
//                 <input
//                   type="date"
//                   value={newOrder.deliveryDate}
//                   onChange={(e) => setNewOrder({ ...newOrder, deliveryDate: e.target.value })}
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">Source</label>
//                 <select
//                   value={newOrder.source}
//                   onChange={(e) => setNewOrder({ ...newOrder, source: e.target.value })}
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   <option>Website</option>
//                   <option>Product Page</option>
//                   <option>Instagram</option>
//                   <option>Facebook</option>
//                   <option>Google</option>
//                   <option>WhatsApp</option>
//                   <option>Walk-in</option>
//                   <option>Referral</option>
//                   <option>Other</option>
//                 </select>
//               </div>
//               <div className="sm:col-span-2">
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">Notes</label>
//                 <textarea
//                   rows={3}
//                   value={newOrder.notes}
//                   onChange={(e) => setNewOrder({ ...newOrder, notes: e.target.value })}
//                   placeholder="Optional order notes..."
//                   className="w-full resize-none rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//             </div>
//             <div className="flex justify-end gap-3 border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
//               <button
//                 onClick={() => setShowAddModal(false)}
//                 className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleAddOrder}
//                 disabled={saving}
//                 className="rounded-xl bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125748] disabled:opacity-60"
//               >
//                 {saving ? "Creating…" : "Create Order"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {selectedOrder && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-5">
//               <div>
//                 <p className="text-xs font-semibold text-[#176b5b]">{selectedOrder.orderNo}</p>
//                 <h2 className="mt-1 text-xl font-bold text-gray-900">Order Details</h2>
//               </div>
//               <button
//                 onClick={() => setSelectedOrder(null)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700"
//               >
//                 ×
//               </button>
//             </div>
//             <div className="space-y-5 p-6">
//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Customer</p>
//                 <div className="mt-3 flex flex-col justify-between gap-3 sm:flex-row">
//                   <div>
//                     <p className="font-semibold text-gray-900">{selectedOrder.customer}</p>
//                     <p className="mt-1 text-sm text-gray-500">{selectedOrder.phone}</p>
//                   </div>
//                   <div className="text-left sm:text-right">
//                     <p className="text-xs text-gray-500">Order Date</p>
//                     <p className="mt-1 text-sm font-medium text-gray-900">{formatDate(selectedOrder.orderDate)}</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="grid gap-4 sm:grid-cols-2">
//                 <div className="rounded-xl border border-gray-100 p-4">
//                   <p className="text-xs text-gray-500">Product</p>
//                   <p className="mt-1 font-semibold text-gray-900">{selectedOrder.product}</p>
//                   <p className="mt-1 text-xs text-gray-500">{selectedOrder.category}</p>
//                 </div>
//                 <div className="rounded-xl border border-gray-100 p-4">
//                   <p className="text-xs text-gray-500">Quantity</p>
//                   <p className="mt-1 text-lg font-bold text-gray-900">{selectedOrder.quantity}</p>
//                 </div>
//               </div>
//               <div className="grid gap-4 sm:grid-cols-3">
//                 <div className="rounded-xl bg-[#fafaf8] p-4">
//                   <p className="text-xs text-gray-500">Order Total</p>
//                   <p className="mt-1 text-lg font-bold text-gray-900">{formatCurrency(selectedOrder.total)}</p>
//                 </div>
//                 <div className="rounded-xl bg-emerald-50 p-4">
//                   <p className="text-xs text-emerald-600">Paid</p>
//                   <p className="mt-1 text-lg font-bold text-emerald-700">{formatCurrency(selectedOrder.paid)}</p>
//                 </div>
//                 <div className="rounded-xl bg-red-50 p-4">
//                   <p className="text-xs text-red-600">Pending</p>
//                   <p className="mt-1 text-lg font-bold text-red-700">
//                     {formatCurrency(selectedOrder.total - selectedOrder.paid)}
//                   </p>
//                 </div>
//               </div>
//               <div className="rounded-xl border border-gray-100 p-4">
//                 <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
//                   <div>
//                     <p className="text-xs text-gray-500">Order Status</p>
//                     <span className={`mt-2 inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusClasses(selectedOrder.status)}`}>
//                       {selectedOrder.status}
//                     </span>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">Payment Status</p>
//                     <span className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${getPaymentClasses(selectedOrder.paymentStatus)}`}>
//                       {selectedOrder.paymentStatus}
//                     </span>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">Delivery Date</p>
//                     <p className="mt-2 text-sm font-semibold text-gray-900">
//                       {selectedOrder.deliveryDate ? formatDate(selectedOrder.deliveryDate) : "Not scheduled"}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <p className="mb-3 text-sm font-semibold text-gray-900">Update Order Status</p>
//                 <div className="flex flex-wrap gap-2">
//                   {orderStatuses.map((status) => (
//                     <button
//                       key={status}
//                       onClick={() => updateOrderStatus(selectedOrder.id, status)}
//                       className={`rounded-lg border px-3 py-2 text-xs font-medium transition ${
//                         selectedOrder.status === status
//                           ? "border-[#176b5b] bg-[#eef7f4] text-[#176b5b]"
//                           : "border-gray-200 bg-white text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                       }`}
//                     >
//                       {status}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//               {selectedOrder.paymentStatus !== "Paid" && (
//                 <div className="flex flex-col justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 sm:flex-row sm:items-center">
//                   <div>
//                     <p className="text-sm font-semibold text-amber-800">Payment Pending</p>
//                     <p className="mt-1 text-xs text-amber-700">
//                       Outstanding amount: {formatCurrency(selectedOrder.total - selectedOrder.paid)}
//                     </p>
//                   </div>
//                   <button
//                     onClick={() => markPaymentReceived(selectedOrder.id)}
//                     className="rounded-xl bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125748]"
//                   >
//                     Mark Payment Received
//                   </button>
//                 </div>
//               )}
//               <div className="grid gap-4 sm:grid-cols-2">
//                 <div>
//                   <p className="text-xs text-gray-500">Order Source</p>
//                   <p className="mt-1 text-sm font-medium text-gray-900">{selectedOrder.source}</p>
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500">Customer Phone</p>
//                   <p className="mt-1 text-sm font-medium text-gray-900">{selectedOrder.phone}</p>
//                 </div>
//               </div>
//               {selectedOrder.notes && (
//                 <div className="rounded-xl border border-gray-100 p-4">
//                   <p className="text-xs text-gray-500">Notes</p>
//                   <p className="mt-1 text-sm text-gray-700">{selectedOrder.notes}</p>
//                 </div>
//               )}
//             </div>
//             <div className="flex justify-end border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
//               <button
//                 onClick={() => setSelectedOrder(null)}
//                 className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAllOrders,
//   createOrder,
//   updateOrder,
//   type FurnitureOrder,
// } from "@/modules/furniture/services/orderService";

// type OrderStatus =
//   | "New"
//   | "Confirmed"
//   | "In Production"
//   | "Ready"
//   | "Delivered"
//   | "Cancelled";

// type PaymentStatus = "Paid" | "Partial" | "Pending";

// type Order = {
//   id: string;
//   orderNo: string;
//   orderDate: string;
//   customer: string;
//   phone: string;
//   product: string;
//   category: string;
//   quantity: number;
//   total: number;
//   paid: number;
//   status: OrderStatus;
//   paymentStatus: PaymentStatus;
//   deliveryDate: string;
//   source: string;
//   notes: string;
// };

// const orderStatuses: OrderStatus[] = [
//   "New",
//   "Confirmed",
//   "In Production",
//   "Ready",
//   "Delivered",
//   "Cancelled",
// ];

// const categories = [
//   "All Categories",
//   "Sofas",
//   "Beds",
//   "Dining",
//   "Wardrobes",
//   "Kitchen",
//   "Tables",
//   "Office Furniture",
//   "Chairs",
// ];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function formatDate(date: string) {
//   if (!date || date === "—") return "—";
//   try {
//     const d = date.includes("T")
//       ? new Date(date)
//       : new Date(`${date}T00:00:00`);
//     if (Number.isNaN(d.getTime())) return date;
//     return d.toLocaleDateString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   } catch {
//     return date;
//   }
// }

// function formatCreatedAt(value: FurnitureOrder["createdAt"]): string {
//   if (!value) return new Date().toISOString().slice(0, 10);
//   try {
//     const date =
//       typeof value.toDate === "function"
//         ? value.toDate()
//         : new Date(value as unknown as string);
//     return date.toISOString().slice(0, 10);
//   } catch {
//     return new Date().toISOString().slice(0, 10);
//   }
// }

// function normalizeStatus(raw?: string): OrderStatus {
//   const s = (raw || "New").trim();
//   const map: Record<string, OrderStatus> = {
//     New: "New",
//     Pending: "New",
//     Confirmed: "Confirmed",
//     Processing: "In Production",
//     "In Production": "In Production",
//     Shipped: "Ready",
//     Ready: "Ready",
//     Delivered: "Delivered",
//     Paid: "Confirmed",
//     Cancelled: "Cancelled",
//   };
//   return map[s] || "New";
// }

// function normalizePayment(
//   raw?: string,
//   total = 0,
//   paid = 0
// ): PaymentStatus {
//   const s = (raw || "").trim();
//   if (s === "Paid" || s === "Partial" || s === "Pending") {
//     return s as PaymentStatus;
//   }
//   if (paid <= 0) return "Pending";
//   if (paid >= total) return "Paid";
//   return "Partial";
// }

// function mapToUi(o: FurnitureOrder): Order {
//   const total = Number(o.total ?? o.amount ?? o.totalAmount ?? 0) || 0;
//   const paid = Number(o.paid ?? 0) || 0;
//   const items = o.items || [];
//   const firstItem = items[0];
//   const product =
//     o.product ||
//     o.productName ||
//     items.map((i) => i.name).filter(Boolean).join(", ") ||
//     firstItem?.name ||
//     "Furniture Item";
//   const quantity =
//     Number(o.quantity) ||
//     items.reduce((s, i) => s + Number(i.qty ?? 0), 0) ||
//     1;

//   return {
//     id: o.id,
//     orderNo: o.orderNo || o.orderNumber || o.id,
//     orderDate: formatCreatedAt(o.createdAt),
//     customer: o.customerName || o.customer || "Unknown",
//     phone: o.phone || "—",
//     product,
//     category: o.category || "Other",
//     quantity,
//     total,
//     paid,
//     status: normalizeStatus(o.status || o.orderStatus),
//     paymentStatus: normalizePayment(o.paymentStatus, total, paid),
//     deliveryDate: o.deliveryDate || "",
//     source: o.source || "Website",
//     notes: o.notes || "",
//   };
// }

// function getStatusClasses(status: OrderStatus) {
//   if (status === "Delivered") {
//     return "bg-emerald-50 text-emerald-700 border-emerald-200";
//   }
//   if (status === "In Production") {
//     return "bg-blue-50 text-blue-700 border-blue-200";
//   }
//   if (status === "Ready") {
//     return "bg-purple-50 text-purple-700 border-purple-200";
//   }
//   if (status === "Confirmed") {
//     return "bg-[#eef7f4] text-[#176b5b] border-[#cfe4dd]";
//   }
//   if (status === "Cancelled") {
//     return "bg-red-50 text-red-700 border-red-200";
//   }
//   return "bg-amber-50 text-amber-700 border-amber-200";
// }

// function getPaymentClasses(status: PaymentStatus) {
//   if (status === "Paid") {
//     return "bg-emerald-50 text-emerald-700";
//   }
//   if (status === "Partial") {
//     return "bg-amber-50 text-amber-700";
//   }
//   return "bg-red-50 text-red-700";
// }

// function SummaryCard({
//   title,
//   value,
//   subtitle,
//   icon,
//   iconClass,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   icon: string;
//   iconClass: string;
// }) {
//   return (
//     <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//       <div className="flex items-start justify-between gap-4">
//         <div>
//           <p className="text-sm font-medium text-gray-500">{title}</p>
//           <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
//           <p className="mt-1 text-xs text-gray-500">{subtitle}</p>
//         </div>
//         <div
//           className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg font-bold ${iconClass}`}
//         >
//           {icon}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function OrdersPage() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [categoryFilter, setCategoryFilter] = useState("All Categories");
//   const [paymentFilter, setPaymentFilter] = useState("All");

//   const [showAddModal, setShowAddModal] = useState(false);
//   const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

//   const [newOrder, setNewOrder] = useState({
//     customer: "",
//     phone: "",
//     product: "",
//     category: "Sofas",
//     quantity: "1",
//     total: "",
//     paid: "",
//     status: "New" as OrderStatus,
//     deliveryDate: "",
//     source: "Website",
//     notes: "",
//   });

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllOrders();
//         if (cancelled) return;
//         setOrders(data.map(mapToUi));
//       } catch (err) {
//         console.error("Failed to load orders:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const totalOrders = orders.length;
//   const totalOrderValue = orders.reduce((sum, order) => sum + order.total, 0);
//   const totalReceived = orders.reduce((sum, order) => sum + order.paid, 0);
//   const totalPending = totalOrderValue - totalReceived;
//   const activeOrders = orders.filter(
//     (order) => order.status !== "Delivered" && order.status !== "Cancelled"
//   ).length;
//   const deliveredOrders = orders.filter(
//     (order) => order.status === "Delivered"
//   ).length;
//   const pendingPayments = orders.filter(
//     (order) => order.paymentStatus !== "Paid" && order.status !== "Cancelled"
//   ).length;

//   const filteredOrders = useMemo(() => {
//     const searchValue = search.toLowerCase().trim();

//     return orders.filter((order) => {
//       const matchesSearch =
//         !searchValue ||
//         order.orderNo.toLowerCase().includes(searchValue) ||
//         order.customer.toLowerCase().includes(searchValue) ||
//         order.phone.includes(searchValue) ||
//         order.product.toLowerCase().includes(searchValue);

//       const matchesStatus =
//         statusFilter === "All" || order.status === statusFilter;

//       const matchesCategory =
//         categoryFilter === "All Categories" ||
//         order.category === categoryFilter;

//       const matchesPayment =
//         paymentFilter === "All" || order.paymentStatus === paymentFilter;

//       return (
//         matchesSearch && matchesStatus && matchesCategory && matchesPayment
//       );
//     });
//   }, [orders, search, statusFilter, categoryFilter, paymentFilter]);

//   const upcomingDeliveries = orders
//     .filter(
//       (order) => order.status !== "Delivered" && order.status !== "Cancelled"
//     )
//     .sort((a, b) =>
//       (a.deliveryDate || "").localeCompare(b.deliveryDate || "")
//     )
//     .slice(0, 5);

//   function calculatePaymentStatus(total: number, paid: number): PaymentStatus {
//     if (paid <= 0) return "Pending";
//     if (paid >= total) return "Paid";
//     return "Partial";
//   }

//   async function handleAddOrder() {
//     const quantity = Number(newOrder.quantity);
//     const total = Number(newOrder.total);
//     const paid = Number(newOrder.paid || 0);

//     if (
//       !newOrder.customer.trim() ||
//       !newOrder.phone.trim() ||
//       !newOrder.product.trim() ||
//       !total ||
//       total <= 0
//     ) {
//       alert(
//         "Please enter customer, phone, product and a valid total amount."
//       );
//       return;
//     }

//     if (quantity <= 0) {
//       alert("Quantity must be greater than zero.");
//       return;
//     }

//     if (paid < 0 || paid > total) {
//       alert("Paid amount cannot be greater than the order total.");
//       return;
//     }

//     setSaving(true);
//     try {
//       const paymentStatus = calculatePaymentStatus(total, paid);
//       const orderNo = `ORD-${Date.now().toString().slice(-6)}`;

//       const payload = {
//         orderNo,
//         customerName: newOrder.customer.trim(),
//         customer: newOrder.customer.trim(),
//         phone: newOrder.phone.trim(),
//         product: newOrder.product.trim(),
//         productName: newOrder.product.trim(),
//         category: newOrder.category,
//         quantity,
//         amount: total,
//         total,
//         paid,
//         status: newOrder.status,
//         paymentStatus,
//         deliveryDate: newOrder.deliveryDate,
//         source: newOrder.source,
//         notes: newOrder.notes.trim(),
//         items: [
//           {
//             productId: "",
//             name: newOrder.product.trim(),
//             qty: quantity,
//             price: total / quantity,
//           },
//         ],
//       };

//       const id = await createOrder(payload);

//       const order: Order = {
//         id,
//         orderNo,
//         orderDate: new Date().toISOString().slice(0, 10),
//         customer: payload.customerName,
//         phone: payload.phone,
//         product: payload.product,
//         category: payload.category,
//         quantity,
//         total,
//         paid,
//         status: newOrder.status,
//         paymentStatus,
//         deliveryDate: payload.deliveryDate,
//         source: payload.source,
//         notes: payload.notes,
//       };

//       setOrders((current) => [order, ...current]);

//       setNewOrder({
//         customer: "",
//         phone: "",
//         product: "",
//         category: "Sofas",
//         quantity: "1",
//         total: "",
//         paid: "",
//         status: "New",
//         deliveryDate: "",
//         source: "Website",
//         notes: "",
//       });

//       setShowAddModal(false);
//     } catch (err) {
//       console.error("Failed to create order:", err);
//       alert("Unable to create order. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function updateOrderStatus(orderId: string, status: OrderStatus) {
//     const current = orders.find((o) => o.id === orderId);
//     // Lock: cannot change status once Cancelled
//     if (current?.status === "Cancelled") return;

//     setOrders((prev) =>
//       prev.map((order) =>
//         order.id === orderId ? { ...order, status } : order
//       )
//     );

//     setSelectedOrder((prev) =>
//       prev && prev.id === orderId ? { ...prev, status } : prev
//     );

//     try {
//       await updateOrder(orderId, { status });
//     } catch (err) {
//       console.error("Failed to update order status:", err);
//       try {
//         const data = await getAllOrders();
//         setOrders(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   async function markPaymentReceived(orderId: string) {
//     const target = orders.find((o) => o.id === orderId);
//     if (!target) return;
//     // Do not collect payment actions on cancelled orders
//     if (target.status === "Cancelled") return;

//     setOrders((prev) =>
//       prev.map((order) =>
//         order.id === orderId
//           ? {
//               ...order,
//               paid: order.total,
//               paymentStatus: "Paid" as PaymentStatus,
//             }
//           : order
//       )
//     );

//     setSelectedOrder((prev) =>
//       prev && prev.id === orderId
//         ? { ...prev, paid: prev.total, paymentStatus: "Paid" }
//         : prev
//     );

//     try {
//       await updateOrder(orderId, {
//         paid: target.total,
//         paymentStatus: "Paid",
//       });
//     } catch (err) {
//       console.error("Failed to mark payment:", err);
//       try {
//         const data = await getAllOrders();
//         setOrders(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-gray-900">
//       <header className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 lg:px-8">
//           <div className="flex items-center gap-3">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#9a5b18] text-lg font-bold text-white">
//               A
//             </div>
//             <div>
//               <p className="text-sm font-semibold text-gray-900">Akrish</p>
//               <p className="text-xs text-gray-500">Furniture and Interior</p>
//             </div>
//           </div>
//           <div className="hidden items-center gap-2 rounded-xl bg-[#f7f7f4] px-4 py-2 text-sm text-gray-600 sm:flex">
//             <span>▤</span>
//             <span>Sales</span>
//             <span className="text-gray-400">/</span>
//             <span className="font-medium text-gray-900">Orders</span>
//           </div>
//         </div>
//       </header>

//       <main className="mx-auto max-w-[1600px] px-5 py-7 lg:px-8">
//         <div className="mb-7 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
//           <div>
//             <p className="mb-1 text-sm font-medium text-[#176b5b]">
//               Sales Management
//             </p>
//             <h1 className="text-3xl font-bold tracking-tight text-gray-900">
//               Orders
//             </h1>
//             <p className="mt-1 text-sm text-gray-500">
//               Manage furniture orders, production status, delivery and
//               payments.
//             </p>
//           </div>
//           <button
//             type="button"
//             onClick={() => setShowAddModal(true)}
//             className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#125748]"
//           >
//             <span className="text-lg">+</span>
//             New Order
//           </button>
//         </div>

//         <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
//           <SummaryCard
//             title="Total Orders"
//             value={loading ? "…" : String(totalOrders)}
//             subtitle="All order records"
//             icon="▤"
//             iconClass="bg-[#eef7f4] text-[#176b5b]"
//           />
//           <SummaryCard
//             title="Order Value"
//             value={loading ? "…" : formatCurrency(totalOrderValue)}
//             subtitle="Total sales value"
//             icon="₹"
//             iconClass="bg-blue-50 text-blue-700"
//           />
//           <SummaryCard
//             title="Received"
//             value={loading ? "…" : formatCurrency(totalReceived)}
//             subtitle="Payments received"
//             icon="✓"
//             iconClass="bg-emerald-50 text-emerald-700"
//           />
//           <SummaryCard
//             title="Pending"
//             value={loading ? "…" : formatCurrency(totalPending)}
//             subtitle={`${pendingPayments} payment${
//               pendingPayments !== 1 ? "s" : ""
//             } pending`}
//             icon="!"
//             iconClass="bg-amber-50 text-amber-700"
//           />
//           <SummaryCard
//             title="Active Orders"
//             value={loading ? "…" : String(activeOrders)}
//             subtitle={`${deliveredOrders} delivered`}
//             icon="◷"
//             iconClass="bg-purple-50 text-purple-700"
//           />
//         </div>

//         <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
//           <section className="min-w-0 rounded-2xl border border-[#e4e2da] bg-white shadow-sm">
//             <div className="border-b border-[#e4e2da] p-5">
//               <div className="flex flex-col gap-4">
//                 <div className="relative">
//                   <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
//                     ⌕
//                   </span>
//                   <input
//                     value={search}
//                     onChange={(event) => setSearch(event.target.value)}
//                     placeholder="Search order, customer, phone or product..."
//                     className="w-full rounded-xl border border-gray-200 bg-[#fafaf8] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                   />
//                 </div>
//                 <div className="grid gap-3 sm:grid-cols-3">
//                   <select
//                     value={statusFilter}
//                     onChange={(event) => setStatusFilter(event.target.value)}
//                     className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="All">All Order Status</option>
//                     {orderStatuses.map((status) => (
//                       <option key={status}>{status}</option>
//                     ))}
//                   </select>
//                   <select
//                     value={categoryFilter}
//                     onChange={(event) => setCategoryFilter(event.target.value)}
//                     className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     {categories.map((category) => (
//                       <option key={category}>{category}</option>
//                     ))}
//                   </select>
//                   <select
//                     value={paymentFilter}
//                     onChange={(event) => setPaymentFilter(event.target.value)}
//                     className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="All">All Payment Status</option>
//                     <option value="Paid">Paid</option>
//                     <option value="Partial">Partial</option>
//                     <option value="Pending">Pending</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[1150px]">
//                 <thead>
//                   <tr className="border-b border-[#e4e2da] bg-[#fafaf8] text-left">
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Order
//                     </th>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Customer
//                     </th>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Product
//                     </th>
//                     <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Qty
//                     </th>
//                     <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Total
//                     </th>
//                     <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Payment
//                     </th>
//                     <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Status
//                     </th>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Delivery
//                     </th>
//                     <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Action
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {loading ? (
//                     <tr>
//                       <td
//                         colSpan={9}
//                         className="px-5 py-16 text-center text-sm text-gray-500"
//                       >
//                         Loading orders…
//                       </td>
//                     </tr>
//                   ) : (
//                     <>
//                       {filteredOrders.map((order) => (
//                         <tr
//                           key={order.id}
//                           className="border-b border-[#efeee9] transition hover:bg-[#fafaf8]"
//                         >
//                           <td className="px-5 py-4">
//                             <div>
//                               <p className="text-xs font-semibold text-[#176b5b]">
//                                 {order.orderNo}
//                               </p>
//                               <p className="mt-1 text-xs text-gray-500">
//                                 {formatDate(order.orderDate)}
//                               </p>
//                             </div>
//                           </td>
//                           <td className="px-5 py-4">
//                             <p className="font-medium text-gray-900">
//                               {order.customer}
//                             </p>
//                             <p className="mt-1 text-xs text-gray-500">
//                               {order.phone}
//                             </p>
//                           </td>
//                           <td className="px-5 py-4">
//                             <p className="font-medium text-gray-900">
//                               {order.product}
//                             </p>
//                             <p className="mt-1 text-xs text-gray-500">
//                               {order.category}
//                             </p>
//                           </td>
//                           <td className="px-5 py-4 text-center text-sm font-medium text-gray-700">
//                             {order.quantity}
//                           </td>
//                           <td className="px-5 py-4 text-right">
//                             <p className="text-sm font-semibold text-gray-900">
//                               {formatCurrency(order.total)}
//                             </p>
//                             <p className="mt-1 text-xs text-gray-500">
//                               Paid {formatCurrency(order.paid)}
//                             </p>
//                           </td>
//                           <td className="px-5 py-4 text-center">
//                             <span
//                               className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${getPaymentClasses(
//                                 order.paymentStatus
//                               )}`}
//                             >
//                               {order.paymentStatus}
//                             </span>
//                           </td>
//                           <td className="px-5 py-4 text-center">
//                             <span
//                               className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusClasses(
//                                 order.status
//                               )}`}
//                             >
//                               {order.status}
//                             </span>
//                           </td>
//                           <td className="px-5 py-4 text-sm text-gray-600">
//                             {order.deliveryDate
//                               ? formatDate(order.deliveryDate)
//                               : "—"}
//                           </td>
//                           <td className="px-5 py-4 text-right">
//                             <button
//                               type="button"
//                               onClick={() => setSelectedOrder(order)}
//                               className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:border-[#176b5b] hover:text-[#176b5b]"
//                             >
//                               View
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                       {filteredOrders.length === 0 && (
//                         <tr>
//                           <td colSpan={9} className="px-5 py-16 text-center">
//                             <p className="text-sm font-semibold text-gray-700">
//                               No orders found
//                             </p>
//                             <p className="mt-1 text-xs text-gray-500">
//                               Try another search or change the selected
//                               filters.
//                             </p>
//                           </td>
//                         </tr>
//                       )}
//                     </>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </section>

//           <aside className="space-y-5">
//             <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//               <div className="mb-5">
//                 <h2 className="font-semibold text-gray-900">
//                   Upcoming Deliveries
//                 </h2>
//                 <p className="mt-1 text-xs text-gray-500">
//                   Next scheduled deliveries
//                 </p>
//               </div>
//               <div className="space-y-3">
//                 {upcomingDeliveries.map((order) => (
//                   <button
//                     key={order.id}
//                     type="button"
//                     onClick={() => setSelectedOrder(order)}
//                     className="w-full rounded-xl border border-gray-100 p-3 text-left transition hover:border-[#d7ddd9] hover:bg-[#fafaf8]"
//                   >
//                     <div className="flex items-center justify-between gap-3">
//                       <div>
//                         <p className="text-sm font-medium text-gray-900">
//                           {order.customer}
//                         </p>
//                         <p className="mt-1 text-xs text-gray-500">
//                           {order.product}
//                         </p>
//                       </div>
//                       <div className="text-right">
//                         <p className="text-xs font-semibold text-[#176b5b]">
//                           {order.deliveryDate
//                             ? formatDate(order.deliveryDate)
//                             : "—"}
//                         </p>
//                         <p className="mt-1 text-[11px] text-gray-400">
//                           {order.orderNo}
//                         </p>
//                       </div>
//                     </div>
//                   </button>
//                 ))}
//                 {upcomingDeliveries.length === 0 && (
//                   <p className="text-sm text-gray-500">
//                     No upcoming deliveries.
//                   </p>
//                 )}
//               </div>
//             </div>

//             <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//               <h2 className="font-semibold text-gray-900">Order Status</h2>
//               <div className="mt-5 space-y-4">
//                 {orderStatuses.map((status) => {
//                   const count = orders.filter(
//                     (order) => order.status === status
//                   ).length;
//                   return (
//                     <div
//                       key={status}
//                       className="flex items-center justify-between"
//                     >
//                       <div className="flex items-center gap-2">
//                         <span
//                           className={`h-2.5 w-2.5 rounded-full ${
//                             status === "Delivered"
//                               ? "bg-emerald-500"
//                               : status === "In Production"
//                                 ? "bg-blue-500"
//                                 : status === "Ready"
//                                   ? "bg-purple-500"
//                                   : status === "Cancelled"
//                                     ? "bg-red-500"
//                                     : status === "Confirmed"
//                                       ? "bg-[#176b5b]"
//                                       : "bg-amber-500"
//                           }`}
//                         />
//                         <span className="text-sm text-gray-600">{status}</span>
//                       </div>
//                       <span className="font-semibold text-gray-900">
//                         {count}
//                       </span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </aside>
//         </div>
//       </main>

//       {/* New Order modal — unchanged */}
//       {showAddModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-5">
//               <div>
//                 <h2 className="text-xl font-bold text-gray-900">New Order</h2>
//                 <p className="mt-1 text-sm text-gray-500">
//                   Create a new furniture customer order.
//                 </p>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setShowAddModal(false)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700"
//               >
//                 ×
//               </button>
//             </div>
//             <div className="grid gap-4 p-6 sm:grid-cols-2">
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Customer Name
//                 </label>
//                 <input
//                   value={newOrder.customer}
//                   onChange={(e) =>
//                     setNewOrder({ ...newOrder, customer: e.target.value })
//                   }
//                   placeholder="Customer name"
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Phone / WhatsApp
//                 </label>
//                 <input
//                   value={newOrder.phone}
//                   onChange={(e) =>
//                     setNewOrder({ ...newOrder, phone: e.target.value })
//                   }
//                   placeholder="Phone number"
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div className="sm:col-span-2">
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Product
//                 </label>
//                 <input
//                   value={newOrder.product}
//                   onChange={(e) =>
//                     setNewOrder({ ...newOrder, product: e.target.value })
//                   }
//                   placeholder="e.g. Modern 3 Seater Sofa"
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Category
//                 </label>
//                 <select
//                   value={newOrder.category}
//                   onChange={(e) =>
//                     setNewOrder({ ...newOrder, category: e.target.value })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {categories
//                     .filter((c) => c !== "All Categories")
//                     .map((c) => (
//                       <option key={c}>{c}</option>
//                     ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Quantity
//                 </label>
//                 <input
//                   type="number"
//                   min="1"
//                   value={newOrder.quantity}
//                   onChange={(e) =>
//                     setNewOrder({ ...newOrder, quantity: e.target.value })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Total Amount
//                 </label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
//                     ₹
//                   </span>
//                   <input
//                     type="number"
//                     min="0"
//                     value={newOrder.total}
//                     onChange={(e) =>
//                       setNewOrder({ ...newOrder, total: e.target.value })
//                     }
//                     placeholder="0"
//                     className="w-full rounded-xl border border-gray-200 py-2.5 pl-8 pr-3 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Paid Amount
//                 </label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
//                     ₹
//                   </span>
//                   <input
//                     type="number"
//                     min="0"
//                     value={newOrder.paid}
//                     onChange={(e) =>
//                       setNewOrder({ ...newOrder, paid: e.target.value })
//                     }
//                     placeholder="0"
//                     className="w-full rounded-xl border border-gray-200 py-2.5 pl-8 pr-3 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Order Status
//                 </label>
//                 <select
//                   value={newOrder.status}
//                   onChange={(e) =>
//                     setNewOrder({
//                       ...newOrder,
//                       status: e.target.value as OrderStatus,
//                     })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {orderStatuses.map((s) => (
//                     <option key={s}>{s}</option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Delivery Date
//                 </label>
//                 <input
//                   type="date"
//                   value={newOrder.deliveryDate}
//                   onChange={(e) =>
//                     setNewOrder({ ...newOrder, deliveryDate: e.target.value })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Source
//                 </label>
//                 <select
//                   value={newOrder.source}
//                   onChange={(e) =>
//                     setNewOrder({ ...newOrder, source: e.target.value })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   <option>Website</option>
//                   <option>Product Page</option>
//                   <option>Instagram</option>
//                   <option>Facebook</option>
//                   <option>Google</option>
//                   <option>WhatsApp</option>
//                   <option>Walk-in</option>
//                   <option>Referral</option>
//                   <option>Other</option>
//                 </select>
//               </div>
//               <div className="sm:col-span-2">
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Notes
//                 </label>
//                 <textarea
//                   rows={3}
//                   value={newOrder.notes}
//                   onChange={(e) =>
//                     setNewOrder({ ...newOrder, notes: e.target.value })
//                   }
//                   placeholder="Optional order notes..."
//                   className="w-full resize-none rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//             </div>
//             <div className="flex justify-end gap-3 border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
//               <button
//                 type="button"
//                 onClick={() => setShowAddModal(false)}
//                 className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 onClick={handleAddOrder}
//                 disabled={saving}
//                 className="rounded-xl bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125748] disabled:opacity-60"
//               >
//                 {saving ? "Creating…" : "Create Order"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Order Details modal */}
//       {selectedOrder && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-5">
//               <div>
//                 <p className="text-xs font-semibold text-[#176b5b]">
//                   {selectedOrder.orderNo}
//                 </p>
//                 <h2 className="mt-1 text-xl font-bold text-gray-900">
//                   Order Details
//                 </h2>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setSelectedOrder(null)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="space-y-5 p-6">
//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
//                   Customer
//                 </p>
//                 <div className="mt-3 flex flex-col justify-between gap-3 sm:flex-row">
//                   <div>
//                     <p className="font-semibold text-gray-900">
//                       {selectedOrder.customer}
//                     </p>
//                     <p className="mt-1 text-sm text-gray-500">
//                       {selectedOrder.phone}
//                     </p>
//                   </div>
//                   <div className="text-left sm:text-right">
//                     <p className="text-xs text-gray-500">Order Date</p>
//                     <p className="mt-1 text-sm font-medium text-gray-900">
//                       {formatDate(selectedOrder.orderDate)}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="grid gap-4 sm:grid-cols-2">
//                 <div className="rounded-xl border border-gray-100 p-4">
//                   <p className="text-xs text-gray-500">Product</p>
//                   <p className="mt-1 font-semibold text-gray-900">
//                     {selectedOrder.product}
//                   </p>
//                   <p className="mt-1 text-xs text-gray-500">
//                     {selectedOrder.category}
//                   </p>
//                 </div>
//                 <div className="rounded-xl border border-gray-100 p-4">
//                   <p className="text-xs text-gray-500">Quantity</p>
//                   <p className="mt-1 text-lg font-bold text-gray-900">
//                     {selectedOrder.quantity}
//                   </p>
//                 </div>
//               </div>

//               <div className="grid gap-4 sm:grid-cols-3">
//                 <div className="rounded-xl bg-[#fafaf8] p-4">
//                   <p className="text-xs text-gray-500">Order Total</p>
//                   <p className="mt-1 text-lg font-bold text-gray-900">
//                     {formatCurrency(selectedOrder.total)}
//                   </p>
//                 </div>
//                 <div className="rounded-xl bg-emerald-50 p-4">
//                   <p className="text-xs text-emerald-600">Paid</p>
//                   <p className="mt-1 text-lg font-bold text-emerald-700">
//                     {formatCurrency(selectedOrder.paid)}
//                   </p>
//                 </div>
//                 <div className="rounded-xl bg-red-50 p-4">
//                   <p className="text-xs text-red-600">Pending</p>
//                   <p className="mt-1 text-lg font-bold text-red-700">
//                     {formatCurrency(
//                       Math.max(0, selectedOrder.total - selectedOrder.paid)
//                     )}
//                   </p>
//                 </div>
//               </div>

//               <div className="rounded-xl border border-gray-100 p-4">
//                 <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
//                   <div>
//                     <p className="text-xs text-gray-500">Order Status</p>
//                     <span
//                       className={`mt-2 inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusClasses(
//                         selectedOrder.status
//                       )}`}
//                     >
//                       {selectedOrder.status}
//                     </span>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">Payment Status</p>
//                     <span
//                       className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${getPaymentClasses(
//                         selectedOrder.paymentStatus
//                       )}`}
//                     >
//                       {selectedOrder.paymentStatus}
//                     </span>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">Delivery Date</p>
//                     <p className="mt-2 text-sm font-semibold text-gray-900">
//                       {selectedOrder.deliveryDate
//                         ? formatDate(selectedOrder.deliveryDate)
//                         : "Not scheduled"}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Status controls — locked when Cancelled */}
//               <div>
//                 <p className="mb-3 text-sm font-semibold text-gray-900">
//                   Update Order Status
//                 </p>

//                 {selectedOrder.status === "Cancelled" ? (
//                   <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3">
//                     <p className="text-sm font-semibold text-red-800">
//                       Order cancelled
//                     </p>
//                     <p className="mt-1 text-xs leading-5 text-red-700">
//                       Status is locked. Other workflow steps cannot be applied
//                       to a cancelled order.
//                     </p>
//                   </div>
//                 ) : (
//                   <div className="flex flex-wrap gap-2">
//                     {orderStatuses.map((status) => (
//                       <button
//                         key={status}
//                         type="button"
//                         onClick={() =>
//                           updateOrderStatus(selectedOrder.id, status)
//                         }
//                         className={`rounded-lg border px-3 py-2 text-xs font-medium transition ${
//                           selectedOrder.status === status
//                             ? "border-[#176b5b] bg-[#eef7f4] text-[#176b5b]"
//                             : "border-gray-200 bg-white text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                         }`}
//                       >
//                         {status}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Payment panel */}
//               {selectedOrder.status === "Cancelled" ? (
//                 <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
//                   <p className="text-sm font-semibold text-slate-800">
//                     Payment on cancelled order
//                   </p>
//                   {selectedOrder.paid > 0 ||
//                   selectedOrder.paymentStatus === "Paid" ? (
//                     <p className="mt-1 text-xs leading-5 text-slate-600">
//                       Recorded as paid:{" "}
//                       <span className="font-semibold text-slate-900">
//                         {formatCurrency(
//                           selectedOrder.paid || selectedOrder.total
//                         )}
//                       </span>
//                       . Process any refund offline if required. Do not resume
//                       production on this order.
//                     </p>
//                   ) : (
//                     <p className="mt-1 text-xs leading-5 text-slate-600">
//                       No payment was received. Nothing further is required for
//                       this order.
//                     </p>
//                   )}
//                 </div>
//               ) : selectedOrder.paymentStatus !== "Paid" ? (
//                 <div className="flex flex-col justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 sm:flex-row sm:items-center">
//                   <div>
//                     <p className="text-sm font-semibold text-amber-800">
//                       Payment Pending
//                     </p>
//                     <p className="mt-1 text-xs text-amber-700">
//                       Outstanding amount:{" "}
//                       {formatCurrency(
//                         selectedOrder.total - selectedOrder.paid
//                       )}
//                     </p>
//                   </div>
//                   <button
//                     type="button"
//                     onClick={() => markPaymentReceived(selectedOrder.id)}
//                     className="rounded-xl bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125748]"
//                   >
//                     Mark Payment Received
//                   </button>
//                 </div>
//               ) : (
//                 <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
//                   <p className="text-sm font-semibold text-emerald-800">
//                     Payment received in full
//                   </p>
//                   <p className="mt-1 text-xs text-emerald-700">
//                     {formatCurrency(selectedOrder.paid)} recorded against this
//                     order.
//                   </p>
//                 </div>
//               )}

//               <div className="grid gap-4 sm:grid-cols-2">
//                 <div>
//                   <p className="text-xs text-gray-500">Order Source</p>
//                   <p className="mt-1 text-sm font-medium text-gray-900">
//                     {selectedOrder.source}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500">Customer Phone</p>
//                   <p className="mt-1 text-sm font-medium text-gray-900">
//                     {selectedOrder.phone}
//                   </p>
//                 </div>
//               </div>

//               {selectedOrder.notes && (
//                 <div className="rounded-xl border border-gray-100 p-4">
//                   <p className="text-xs text-gray-500">Notes</p>
//                   <p className="mt-1 text-sm text-gray-700">
//                     {selectedOrder.notes}
//                   </p>
//                 </div>
//               )}
//             </div>

//             <div className="flex justify-end border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
//               <button
//                 type="button"
//                 onClick={() => setSelectedOrder(null)}
//                 className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAllOrders,
//   createOrder,
//   updateOrder,
//   type FurnitureOrder,
// } from "@/modules/furniture/services/orderService";

// type OrderStatus =
//   | "New"
//   | "Confirmed"
//   | "In Production"
//   | "Ready"
//   | "Delivered"
//   | "Cancelled";

// type PaymentStatus = "Paid" | "Partial" | "Pending";

// type Order = {
//   id: string;
//   orderNo: string;
//   orderDate: string;
//   customer: string;
//   phone: string;
//   product: string;
//   category: string;
//   quantity: number;
//   total: number;
//   paid: number;
//   status: OrderStatus;
//   paymentStatus: PaymentStatus;
//   paymentMethod: string;
//   deliveryDate: string;
//   source: string;
//   notes: string;
// };

// const orderStatuses: OrderStatus[] = [
//   "New",
//   "Confirmed",
//   "In Production",
//   "Ready",
//   "Delivered",
//   "Cancelled",
// ];

// const categories = [
//   "All Categories",
//   "Sofas",
//   "Beds",
//   "Dining",
//   "Wardrobes",
//   "Kitchen",
//   "Tables",
//   "Office Furniture",
//   "Chairs",
// ];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function formatDate(date: string) {
//   if (!date || date === "—") return "—";
//   try {
//     const d = date.includes("T")
//       ? new Date(date)
//       : new Date(`${date}T00:00:00`);
//     if (Number.isNaN(d.getTime())) return date;
//     return d.toLocaleDateString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   } catch {
//     return date;
//   }
// }

// function formatCreatedAt(value: FurnitureOrder["createdAt"]): string {
//   if (!value) return new Date().toISOString().slice(0, 10);
//   try {
//     const date =
//       typeof value.toDate === "function"
//         ? value.toDate()
//         : new Date(value as unknown as string);
//     return date.toISOString().slice(0, 10);
//   } catch {
//     return new Date().toISOString().slice(0, 10);
//   }
// }

// function normalizeStatus(raw?: string): OrderStatus {
//   const s = (raw || "New").trim();
//   const map: Record<string, OrderStatus> = {
//     New: "New",
//     Pending: "New",
//     Confirmed: "Confirmed",
//     Processing: "In Production",
//     "In Production": "In Production",
//     Shipped: "Ready",
//     Ready: "Ready",
//     Delivered: "Delivered",
//     Paid: "Confirmed",
//     Cancelled: "Cancelled",
//   };
//   return map[s] || "New";
// }

// function normalizePayment(
//   raw?: string,
//   total = 0,
//   paid = 0
// ): PaymentStatus {
//   const s = (raw || "").trim();
//   if (s === "Paid" || s === "Partial" || s === "Pending") {
//     return s as PaymentStatus;
//   }
//   if (paid <= 0) return "Pending";
//   if (paid >= total) return "Paid";
//   return "Partial";
// }

// function isCodOrder(order: { paymentMethod?: string }) {
//   const m = String(order.paymentMethod || "COD").toUpperCase().trim();
//   return m === "COD" || m === "";
// }

// function paymentMethodLabel(method?: string) {
//   const m = String(method || "").toUpperCase();
//   if (m === "COD" || !m) return "Cash on delivery";
//   if (m === "CARD") return "Card / Online";
//   if (m === "UPI") return "UPI";
//   if (m === "BANK TRANSFER") return "Bank transfer";
//   return method || "—";
// }

// function mapToUi(o: FurnitureOrder): Order {
//   const total = Number(o.total ?? o.amount ?? o.totalAmount ?? 0) || 0;
//   const paid = Number(o.paid ?? 0) || 0;
//   const items = o.items || [];
//   const firstItem = items[0];
//   const product =
//     o.product ||
//     o.productName ||
//     items.map((i) => i.name).filter(Boolean).join(", ") ||
//     firstItem?.name ||
//     "Furniture Item";
//   const quantity =
//     Number(o.quantity) ||
//     items.reduce((s, i) => s + Number(i.qty ?? 0), 0) ||
//     1;

//   return {
//     id: o.id,
//     orderNo: o.orderNo || o.orderNumber || o.id,
//     orderDate: formatCreatedAt(o.createdAt),
//     customer: o.customerName || o.customer || "Unknown",
//     phone: o.phone || "—",
//     product,
//     category: o.category || "Other",
//     quantity,
//     total,
//     paid,
//     status: normalizeStatus(o.status || o.orderStatus),
//     paymentStatus: normalizePayment(o.paymentStatus, total, paid),
//     paymentMethod: String(o.paymentMethod || "COD"),
//     deliveryDate: o.deliveryDate || "",
//     source: o.source || "Website",
//     notes: o.notes || "",
//   };
// }

// function getStatusClasses(status: OrderStatus) {
//   if (status === "Delivered") {
//     return "bg-emerald-50 text-emerald-700 border-emerald-200";
//   }
//   if (status === "In Production") {
//     return "bg-blue-50 text-blue-700 border-blue-200";
//   }
//   if (status === "Ready") {
//     return "bg-purple-50 text-purple-700 border-purple-200";
//   }
//   if (status === "Confirmed") {
//     return "bg-[#eef7f4] text-[#176b5b] border-[#cfe4dd]";
//   }
//   if (status === "Cancelled") {
//     return "bg-red-50 text-red-700 border-red-200";
//   }
//   return "bg-amber-50 text-amber-700 border-amber-200";
// }

// function getPaymentClasses(status: PaymentStatus) {
//   if (status === "Paid") {
//     return "bg-emerald-50 text-emerald-700";
//   }
//   if (status === "Partial") {
//     return "bg-amber-50 text-amber-700";
//   }
//   return "bg-red-50 text-red-700";
// }

// function SummaryCard({
//   title,
//   value,
//   subtitle,
//   icon,
//   iconClass,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   icon: string;
//   iconClass: string;
// }) {
//   return (
//     <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//       <div className="flex items-start justify-between gap-4">
//         <div>
//           <p className="text-sm font-medium text-gray-500">{title}</p>
//           <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
//           <p className="mt-1 text-xs text-gray-500">{subtitle}</p>
//         </div>
//         <div
//           className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg font-bold ${iconClass}`}
//         >
//           {icon}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function OrdersPage() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [categoryFilter, setCategoryFilter] = useState("All Categories");
//   const [paymentFilter, setPaymentFilter] = useState("All");

//   const [showAddModal, setShowAddModal] = useState(false);
//   const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

//   const [newOrder, setNewOrder] = useState({
//     customer: "",
//     phone: "",
//     product: "",
//     category: "Sofas",
//     quantity: "1",
//     total: "",
//     paid: "",
//     status: "New" as OrderStatus,
//     deliveryDate: "",
//     source: "Website",
//     notes: "",
//   });

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllOrders();
//         if (cancelled) return;
//         setOrders(data.map(mapToUi));
//       } catch (err) {
//         console.error("Failed to load orders:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const totalOrders = orders.length;
//   const totalOrderValue = orders.reduce((sum, order) => sum + order.total, 0);
//   const totalReceived = orders.reduce((sum, order) => sum + order.paid, 0);
//   const totalPending = totalOrderValue - totalReceived;
//   const activeOrders = orders.filter(
//     (order) => order.status !== "Delivered" && order.status !== "Cancelled"
//   ).length;
//   const deliveredOrders = orders.filter(
//     (order) => order.status === "Delivered"
//   ).length;
//   const pendingPayments = orders.filter(
//     (order) => order.paymentStatus !== "Paid" && order.status !== "Cancelled"
//   ).length;

//   const filteredOrders = useMemo(() => {
//     const searchValue = search.toLowerCase().trim();

//     return orders.filter((order) => {
//       const matchesSearch =
//         !searchValue ||
//         order.orderNo.toLowerCase().includes(searchValue) ||
//         order.customer.toLowerCase().includes(searchValue) ||
//         order.phone.includes(searchValue) ||
//         order.product.toLowerCase().includes(searchValue);

//       const matchesStatus =
//         statusFilter === "All" || order.status === statusFilter;

//       const matchesCategory =
//         categoryFilter === "All Categories" ||
//         order.category === categoryFilter;

//       const matchesPayment =
//         paymentFilter === "All" || order.paymentStatus === paymentFilter;

//       return (
//         matchesSearch && matchesStatus && matchesCategory && matchesPayment
//       );
//     });
//   }, [orders, search, statusFilter, categoryFilter, paymentFilter]);

//   const upcomingDeliveries = orders
//     .filter(
//       (order) => order.status !== "Delivered" && order.status !== "Cancelled"
//     )
//     .sort((a, b) =>
//       (a.deliveryDate || "").localeCompare(b.deliveryDate || "")
//     )
//     .slice(0, 5);

//   function calculatePaymentStatus(total: number, paid: number): PaymentStatus {
//     if (paid <= 0) return "Pending";
//     if (paid >= total) return "Paid";
//     return "Partial";
//   }

//   async function handleAddOrder() {
//     const quantity = Number(newOrder.quantity);
//     const total = Number(newOrder.total);
//     const paid = Number(newOrder.paid || 0);

//     if (
//       !newOrder.customer.trim() ||
//       !newOrder.phone.trim() ||
//       !newOrder.product.trim() ||
//       !total ||
//       total <= 0
//     ) {
//       alert(
//         "Please enter customer, phone, product and a valid total amount."
//       );
//       return;
//     }

//     if (quantity <= 0) {
//       alert("Quantity must be greater than zero.");
//       return;
//     }

//     if (paid < 0 || paid > total) {
//       alert("Paid amount cannot be greater than the order total.");
//       return;
//     }

//     setSaving(true);
//     try {
//       const paymentStatus = calculatePaymentStatus(total, paid);
//       const orderNo = `ORD-${Date.now().toString().slice(-6)}`;

//       const payload = {
//         orderNo,
//         customerName: newOrder.customer.trim(),
//         customer: newOrder.customer.trim(),
//         phone: newOrder.phone.trim(),
//         product: newOrder.product.trim(),
//         productName: newOrder.product.trim(),
//         category: newOrder.category,
//         quantity,
//         amount: total,
//         total,
//         paid,
//         status: newOrder.status,
//         paymentStatus,
//         paymentMethod: "COD",
//         deliveryDate: newOrder.deliveryDate,
//         source: newOrder.source,
//         notes: newOrder.notes.trim(),
//         items: [
//           {
//             productId: "",
//             name: newOrder.product.trim(),
//             qty: quantity,
//             price: total / quantity,
//           },
//         ],
//       };

//       const id = await createOrder(payload);

//       const order: Order = {
//         id,
//         orderNo,
//         orderDate: new Date().toISOString().slice(0, 10),
//         customer: payload.customerName,
//         phone: payload.phone,
//         product: payload.product,
//         category: payload.category,
//         quantity,
//         total,
//         paid,
//         status: newOrder.status,
//         paymentStatus,
//         paymentMethod: "COD",
//         deliveryDate: payload.deliveryDate,
//         source: payload.source,
//         notes: payload.notes,
//       };

//       setOrders((current) => [order, ...current]);

//       setNewOrder({
//         customer: "",
//         phone: "",
//         product: "",
//         category: "Sofas",
//         quantity: "1",
//         total: "",
//         paid: "",
//         status: "New",
//         deliveryDate: "",
//         source: "Website",
//         notes: "",
//       });

//       setShowAddModal(false);
//     } catch (err) {
//       console.error("Failed to create order:", err);
//       alert("Unable to create order. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function updateOrderStatus(orderId: string, status: OrderStatus) {
//     const current = orders.find((o) => o.id === orderId);
//     if (current?.status === "Cancelled") return;

//     setOrders((prev) =>
//       prev.map((order) =>
//         order.id === orderId ? { ...order, status } : order
//       )
//     );

//     setSelectedOrder((prev) =>
//       prev && prev.id === orderId ? { ...prev, status } : prev
//     );

//     try {
//       await updateOrder(orderId, { status });
//     } catch (err) {
//       console.error("Failed to update order status:", err);
//       try {
//         const data = await getAllOrders();
//         setOrders(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   async function markPaymentReceived(orderId: string) {
//     const target = orders.find((o) => o.id === orderId);
//     if (!target) return;
//     if (target.status === "Cancelled") return;

//     setOrders((prev) =>
//       prev.map((order) =>
//         order.id === orderId
//           ? {
//               ...order,
//               paid: order.total,
//               paymentStatus: "Paid" as PaymentStatus,
//             }
//           : order
//       )
//     );

//     setSelectedOrder((prev) =>
//       prev && prev.id === orderId
//         ? { ...prev, paid: prev.total, paymentStatus: "Paid" }
//         : prev
//     );

//     try {
//       await updateOrder(orderId, {
//         paid: target.total,
//         paymentStatus: "Paid",
//       });
//     } catch (err) {
//       console.error("Failed to mark payment:", err);
//       try {
//         const data = await getAllOrders();
//         setOrders(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-gray-900">
//       <header className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 lg:px-8">
//           <div className="flex items-center gap-3">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#9a5b18] text-lg font-bold text-white">
//               A
//             </div>
//             <div>
//               <p className="text-sm font-semibold text-gray-900">Akrish</p>
//               <p className="text-xs text-gray-500">Furniture and Interior</p>
//             </div>
//           </div>
//           <div className="hidden items-center gap-2 rounded-xl bg-[#f7f7f4] px-4 py-2 text-sm text-gray-600 sm:flex">
//             <span>▤</span>
//             <span>Sales</span>
//             <span className="text-gray-400">/</span>
//             <span className="font-medium text-gray-900">Orders</span>
//           </div>
//         </div>
//       </header>

//       <main className="mx-auto max-w-[1600px] px-5 py-7 lg:px-8">
//         <div className="mb-7 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
//           <div>
//             <p className="mb-1 text-sm font-medium text-[#176b5b]">
//               Sales Management
//             </p>
//             <h1 className="text-3xl font-bold tracking-tight text-gray-900">
//               Orders
//             </h1>
//             <p className="mt-1 text-sm text-gray-500">
//               Manage furniture orders, production status, delivery and
//               payments.
//             </p>
//           </div>
//           <button
//             type="button"
//             onClick={() => setShowAddModal(true)}
//             className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#125748]"
//           >
//             <span className="text-lg">+</span>
//             New Order
//           </button>
//         </div>

//         <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
//           <SummaryCard
//             title="Total Orders"
//             value={loading ? "…" : String(totalOrders)}
//             subtitle="All order records"
//             icon="▤"
//             iconClass="bg-[#eef7f4] text-[#176b5b]"
//           />
//           <SummaryCard
//             title="Order Value"
//             value={loading ? "…" : formatCurrency(totalOrderValue)}
//             subtitle="Total sales value"
//             icon="₹"
//             iconClass="bg-blue-50 text-blue-700"
//           />
//           <SummaryCard
//             title="Received"
//             value={loading ? "…" : formatCurrency(totalReceived)}
//             subtitle="Payments received"
//             icon="✓"
//             iconClass="bg-emerald-50 text-emerald-700"
//           />
//           <SummaryCard
//             title="Pending"
//             value={loading ? "…" : formatCurrency(totalPending)}
//             subtitle={`${pendingPayments} payment${
//               pendingPayments !== 1 ? "s" : ""
//             } pending`}
//             icon="!"
//             iconClass="bg-amber-50 text-amber-700"
//           />
//           <SummaryCard
//             title="Active Orders"
//             value={loading ? "…" : String(activeOrders)}
//             subtitle={`${deliveredOrders} delivered`}
//             icon="◷"
//             iconClass="bg-purple-50 text-purple-700"
//           />
//         </div>

//         <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
//           <section className="min-w-0 rounded-2xl border border-[#e4e2da] bg-white shadow-sm">
//             <div className="border-b border-[#e4e2da] p-5">
//               <div className="flex flex-col gap-4">
//                 <div className="relative">
//                   <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
//                     ⌕
//                   </span>
//                   <input
//                     value={search}
//                     onChange={(event) => setSearch(event.target.value)}
//                     placeholder="Search order, customer, phone or product..."
//                     className="w-full rounded-xl border border-gray-200 bg-[#fafaf8] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                   />
//                 </div>
//                 <div className="grid gap-3 sm:grid-cols-3">
//                   <select
//                     value={statusFilter}
//                     onChange={(event) => setStatusFilter(event.target.value)}
//                     className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="All">All Order Status</option>
//                     {orderStatuses.map((status) => (
//                       <option key={status}>{status}</option>
//                     ))}
//                   </select>
//                   <select
//                     value={categoryFilter}
//                     onChange={(event) => setCategoryFilter(event.target.value)}
//                     className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     {categories.map((category) => (
//                       <option key={category}>{category}</option>
//                     ))}
//                   </select>
//                   <select
//                     value={paymentFilter}
//                     onChange={(event) => setPaymentFilter(event.target.value)}
//                     className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="All">All Payment Status</option>
//                     <option value="Paid">Paid</option>
//                     <option value="Partial">Partial</option>
//                     <option value="Pending">Pending</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[1150px]">
//                 <thead>
//                   <tr className="border-b border-[#e4e2da] bg-[#fafaf8] text-left">
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Order
//                     </th>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Customer
//                     </th>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Product
//                     </th>
//                     <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Qty
//                     </th>
//                     <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Total
//                     </th>
//                     <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Payment
//                     </th>
//                     <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Status
//                     </th>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Delivery
//                     </th>
//                     <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Action
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {loading ? (
//                     <tr>
//                       <td
//                         colSpan={9}
//                         className="px-5 py-16 text-center text-sm text-gray-500"
//                       >
//                         Loading orders…
//                       </td>
//                     </tr>
//                   ) : (
//                     <>
//                       {filteredOrders.map((order) => (
//                         <tr
//                           key={order.id}
//                           className="border-b border-[#efeee9] transition hover:bg-[#fafaf8]"
//                         >
//                           <td className="px-5 py-4">
//                             <div>
//                               <p className="text-xs font-semibold text-[#176b5b]">
//                                 {order.orderNo}
//                               </p>
//                               <p className="mt-1 text-xs text-gray-500">
//                                 {formatDate(order.orderDate)}
//                               </p>
//                             </div>
//                           </td>
//                           <td className="px-5 py-4">
//                             <p className="font-medium text-gray-900">
//                               {order.customer}
//                             </p>
//                             <p className="mt-1 text-xs text-gray-500">
//                               {order.phone}
//                             </p>
//                           </td>
//                           <td className="px-5 py-4">
//                             <p className="font-medium text-gray-900">
//                               {order.product}
//                             </p>
//                             <p className="mt-1 text-xs text-gray-500">
//                               {order.category}
//                             </p>
//                           </td>
//                           <td className="px-5 py-4 text-center text-sm font-medium text-gray-700">
//                             {order.quantity}
//                           </td>
//                           <td className="px-5 py-4 text-right">
//                             <p className="text-sm font-semibold text-gray-900">
//                               {formatCurrency(order.total)}
//                             </p>
//                             <p className="mt-1 text-xs text-gray-500">
//                               Paid {formatCurrency(order.paid)}
//                             </p>
//                           </td>
//                           <td className="px-5 py-4 text-center">
//                             <span
//                               className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${getPaymentClasses(
//                                 order.paymentStatus
//                               )}`}
//                             >
//                               {order.paymentStatus}
//                             </span>
//                             <p className="mt-1 text-[10px] text-gray-400">
//                               {paymentMethodLabel(order.paymentMethod)}
//                             </p>
//                           </td>
//                           <td className="px-5 py-4 text-center">
//                             <span
//                               className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusClasses(
//                                 order.status
//                               )}`}
//                             >
//                               {order.status}
//                             </span>
//                           </td>
//                           <td className="px-5 py-4 text-sm text-gray-600">
//                             {order.deliveryDate
//                               ? formatDate(order.deliveryDate)
//                               : "—"}
//                           </td>
//                           <td className="px-5 py-4 text-right">
//                             <button
//                               type="button"
//                               onClick={() => setSelectedOrder(order)}
//                               className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:border-[#176b5b] hover:text-[#176b5b]"
//                             >
//                               View
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                       {filteredOrders.length === 0 && (
//                         <tr>
//                           <td colSpan={9} className="px-5 py-16 text-center">
//                             <p className="text-sm font-semibold text-gray-700">
//                               No orders found
//                             </p>
//                             <p className="mt-1 text-xs text-gray-500">
//                               Try another search or change the selected
//                               filters.
//                             </p>
//                           </td>
//                         </tr>
//                       )}
//                     </>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </section>

//           <aside className="space-y-5">
//             <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//               <div className="mb-5">
//                 <h2 className="font-semibold text-gray-900">
//                   Upcoming Deliveries
//                 </h2>
//                 <p className="mt-1 text-xs text-gray-500">
//                   Next scheduled deliveries
//                 </p>
//               </div>
//               <div className="space-y-3">
//                 {upcomingDeliveries.map((order) => (
//                   <button
//                     key={order.id}
//                     type="button"
//                     onClick={() => setSelectedOrder(order)}
//                     className="w-full rounded-xl border border-gray-100 p-3 text-left transition hover:border-[#d7ddd9] hover:bg-[#fafaf8]"
//                   >
//                     <div className="flex items-center justify-between gap-3">
//                       <div>
//                         <p className="text-sm font-medium text-gray-900">
//                           {order.customer}
//                         </p>
//                         <p className="mt-1 text-xs text-gray-500">
//                           {order.product}
//                         </p>
//                       </div>
//                       <div className="text-right">
//                         <p className="text-xs font-semibold text-[#176b5b]">
//                           {order.deliveryDate
//                             ? formatDate(order.deliveryDate)
//                             : "—"}
//                         </p>
//                         <p className="mt-1 text-[11px] text-gray-400">
//                           {order.orderNo}
//                         </p>
//                       </div>
//                     </div>
//                   </button>
//                 ))}
//                 {upcomingDeliveries.length === 0 && (
//                   <p className="text-sm text-gray-500">
//                     No upcoming deliveries.
//                   </p>
//                 )}
//               </div>
//             </div>

//             <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//               <h2 className="font-semibold text-gray-900">Order Status</h2>
//               <div className="mt-5 space-y-4">
//                 {orderStatuses.map((status) => {
//                   const count = orders.filter(
//                     (order) => order.status === status
//                   ).length;
//                   return (
//                     <div
//                       key={status}
//                       className="flex items-center justify-between"
//                     >
//                       <div className="flex items-center gap-2">
//                         <span
//                           className={`h-2.5 w-2.5 rounded-full ${
//                             status === "Delivered"
//                               ? "bg-emerald-500"
//                               : status === "In Production"
//                                 ? "bg-blue-500"
//                                 : status === "Ready"
//                                   ? "bg-purple-500"
//                                   : status === "Cancelled"
//                                     ? "bg-red-500"
//                                     : status === "Confirmed"
//                                       ? "bg-[#176b5b]"
//                                       : "bg-amber-500"
//                           }`}
//                         />
//                         <span className="text-sm text-gray-600">{status}</span>
//                       </div>
//                       <span className="font-semibold text-gray-900">
//                         {count}
//                       </span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </aside>
//         </div>
//       </main>

//       {showAddModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-5">
//               <div>
//                 <h2 className="text-xl font-bold text-gray-900">New Order</h2>
//                 <p className="mt-1 text-sm text-gray-500">
//                   Create a new furniture customer order.
//                 </p>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setShowAddModal(false)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700"
//               >
//                 ×
//               </button>
//             </div>
//             <div className="grid gap-4 p-6 sm:grid-cols-2">
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Customer Name
//                 </label>
//                 <input
//                   value={newOrder.customer}
//                   onChange={(e) =>
//                     setNewOrder({ ...newOrder, customer: e.target.value })
//                   }
//                   placeholder="Customer name"
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Phone / WhatsApp
//                 </label>
//                 <input
//                   value={newOrder.phone}
//                   onChange={(e) =>
//                     setNewOrder({ ...newOrder, phone: e.target.value })
//                   }
//                   placeholder="Phone number"
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div className="sm:col-span-2">
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Product
//                 </label>
//                 <input
//                   value={newOrder.product}
//                   onChange={(e) =>
//                     setNewOrder({ ...newOrder, product: e.target.value })
//                   }
//                   placeholder="e.g. Modern 3 Seater Sofa"
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Category
//                 </label>
//                 <select
//                   value={newOrder.category}
//                   onChange={(e) =>
//                     setNewOrder({ ...newOrder, category: e.target.value })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {categories
//                     .filter((c) => c !== "All Categories")
//                     .map((c) => (
//                       <option key={c}>{c}</option>
//                     ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Quantity
//                 </label>
//                 <input
//                   type="number"
//                   min="1"
//                   value={newOrder.quantity}
//                   onChange={(e) =>
//                     setNewOrder({ ...newOrder, quantity: e.target.value })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Total Amount
//                 </label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
//                     ₹
//                   </span>
//                   <input
//                     type="number"
//                     min="0"
//                     value={newOrder.total}
//                     onChange={(e) =>
//                       setNewOrder({ ...newOrder, total: e.target.value })
//                     }
//                     placeholder="0"
//                     className="w-full rounded-xl border border-gray-200 py-2.5 pl-8 pr-3 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Paid Amount
//                 </label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
//                     ₹
//                   </span>
//                   <input
//                     type="number"
//                     min="0"
//                     value={newOrder.paid}
//                     onChange={(e) =>
//                       setNewOrder({ ...newOrder, paid: e.target.value })
//                     }
//                     placeholder="0"
//                     className="w-full rounded-xl border border-gray-200 py-2.5 pl-8 pr-3 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Order Status
//                 </label>
//                 <select
//                   value={newOrder.status}
//                   onChange={(e) =>
//                     setNewOrder({
//                       ...newOrder,
//                       status: e.target.value as OrderStatus,
//                     })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {orderStatuses.map((s) => (
//                     <option key={s}>{s}</option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Delivery Date
//                 </label>
//                 <input
//                   type="date"
//                   value={newOrder.deliveryDate}
//                   onChange={(e) =>
//                     setNewOrder({ ...newOrder, deliveryDate: e.target.value })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Source
//                 </label>
//                 <select
//                   value={newOrder.source}
//                   onChange={(e) =>
//                     setNewOrder({ ...newOrder, source: e.target.value })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   <option>Website</option>
//                   <option>Product Page</option>
//                   <option>Instagram</option>
//                   <option>Facebook</option>
//                   <option>Google</option>
//                   <option>WhatsApp</option>
//                   <option>Walk-in</option>
//                   <option>Referral</option>
//                   <option>Other</option>
//                 </select>
//               </div>
//               <div className="sm:col-span-2">
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Notes
//                 </label>
//                 <textarea
//                   rows={3}
//                   value={newOrder.notes}
//                   onChange={(e) =>
//                     setNewOrder({ ...newOrder, notes: e.target.value })
//                   }
//                   placeholder="Optional order notes..."
//                   className="w-full resize-none rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//             </div>
//             <div className="flex justify-end gap-3 border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
//               <button
//                 type="button"
//                 onClick={() => setShowAddModal(false)}
//                 className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 onClick={handleAddOrder}
//                 disabled={saving}
//                 className="rounded-xl bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125748] disabled:opacity-60"
//               >
//                 {saving ? "Creating…" : "Create Order"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {selectedOrder && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-5">
//               <div>
//                 <p className="text-xs font-semibold text-[#176b5b]">
//                   {selectedOrder.orderNo}
//                 </p>
//                 <h2 className="mt-1 text-xl font-bold text-gray-900">
//                   Order Details
//                 </h2>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setSelectedOrder(null)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="space-y-5 p-6">
//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
//                   Customer
//                 </p>
//                 <div className="mt-3 flex flex-col justify-between gap-3 sm:flex-row">
//                   <div>
//                     <p className="font-semibold text-gray-900">
//                       {selectedOrder.customer}
//                     </p>
//                     <p className="mt-1 text-sm text-gray-500">
//                       {selectedOrder.phone}
//                     </p>
//                   </div>
//                   <div className="text-left sm:text-right">
//                     <p className="text-xs text-gray-500">Order Date</p>
//                     <p className="mt-1 text-sm font-medium text-gray-900">
//                       {formatDate(selectedOrder.orderDate)}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="grid gap-4 sm:grid-cols-2">
//                 <div className="rounded-xl border border-gray-100 p-4">
//                   <p className="text-xs text-gray-500">Product</p>
//                   <p className="mt-1 font-semibold text-gray-900">
//                     {selectedOrder.product}
//                   </p>
//                   <p className="mt-1 text-xs text-gray-500">
//                     {selectedOrder.category}
//                   </p>
//                 </div>
//                 <div className="rounded-xl border border-gray-100 p-4">
//                   <p className="text-xs text-gray-500">Quantity</p>
//                   <p className="mt-1 text-lg font-bold text-gray-900">
//                     {selectedOrder.quantity}
//                   </p>
//                 </div>
//               </div>

//               <div className="grid gap-4 sm:grid-cols-3">
//                 <div className="rounded-xl bg-[#fafaf8] p-4">
//                   <p className="text-xs text-gray-500">Order Total</p>
//                   <p className="mt-1 text-lg font-bold text-gray-900">
//                     {formatCurrency(selectedOrder.total)}
//                   </p>
//                 </div>
//                 <div className="rounded-xl bg-emerald-50 p-4">
//                   <p className="text-xs text-emerald-600">Paid</p>
//                   <p className="mt-1 text-lg font-bold text-emerald-700">
//                     {formatCurrency(selectedOrder.paid)}
//                   </p>
//                 </div>
//                 <div className="rounded-xl bg-red-50 p-4">
//                   <p className="text-xs text-red-600">Pending</p>
//                   <p className="mt-1 text-lg font-bold text-red-700">
//                     {formatCurrency(
//                       Math.max(0, selectedOrder.total - selectedOrder.paid)
//                     )}
//                   </p>
//                 </div>
//               </div>

//               <div className="rounded-xl border border-gray-100 p-4">
//                 <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
//                   <div>
//                     <p className="text-xs text-gray-500">Order Status</p>
//                     <span
//                       className={`mt-2 inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusClasses(
//                         selectedOrder.status
//                       )}`}
//                     >
//                       {selectedOrder.status}
//                     </span>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">Payment Status</p>
//                     <span
//                       className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${getPaymentClasses(
//                         selectedOrder.paymentStatus
//                       )}`}
//                     >
//                       {selectedOrder.paymentStatus}
//                     </span>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">Delivery Date</p>
//                     <p className="mt-2 text-sm font-semibold text-gray-900">
//                       {selectedOrder.deliveryDate
//                         ? formatDate(selectedOrder.deliveryDate)
//                         : "Not scheduled"}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <p className="mb-3 text-sm font-semibold text-gray-900">
//                   Update Order Status
//                 </p>

//                 {selectedOrder.status === "Cancelled" ? (
//                   <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3">
//                     <p className="text-sm font-semibold text-red-800">
//                       Order cancelled
//                     </p>
//                     <p className="mt-1 text-xs leading-5 text-red-700">
//                       Status is locked. Other workflow steps cannot be applied
//                       to a cancelled order.
//                     </p>
//                   </div>
//                 ) : (
//                   <div className="flex flex-wrap gap-2">
//                     {orderStatuses.map((status) => (
//                       <button
//                         key={status}
//                         type="button"
//                         onClick={() =>
//                           updateOrderStatus(selectedOrder.id, status)
//                         }
//                         className={`rounded-lg border px-3 py-2 text-xs font-medium transition ${
//                           selectedOrder.status === status
//                             ? "border-[#176b5b] bg-[#eef7f4] text-[#176b5b]"
//                             : "border-gray-200 bg-white text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                         }`}
//                       >
//                         {status}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Payment panel: COD → Mark paid; Online → auto / manual */}
//               {selectedOrder.status === "Cancelled" ? (
//                 <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
//                   <p className="text-sm font-semibold text-slate-800">
//                     Payment on cancelled order
//                   </p>
//                   {selectedOrder.paid > 0 ||
//                   selectedOrder.paymentStatus === "Paid" ? (
//                     <p className="mt-1 text-xs leading-5 text-slate-600">
//                       Recorded as paid:{" "}
//                       <span className="font-semibold text-slate-900">
//                         {formatCurrency(
//                           selectedOrder.paid || selectedOrder.total
//                         )}
//                       </span>
//                       . Process any refund offline if required.
//                     </p>
//                   ) : (
//                     <p className="mt-1 text-xs leading-5 text-slate-600">
//                       No payment was received.
//                     </p>
//                   )}
//                 </div>
//               ) : selectedOrder.paymentStatus === "Paid" ? (
//                 <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
//                   <p className="text-sm font-semibold text-emerald-800">
//                     Payment received in full
//                   </p>
//                   <p className="mt-1 text-xs text-emerald-700">
//                     {formatCurrency(selectedOrder.paid || selectedOrder.total)}{" "}
//                     · {paymentMethodLabel(selectedOrder.paymentMethod)}
//                   </p>
//                 </div>
//               ) : isCodOrder(selectedOrder) ? (
//                 <div className="flex flex-col justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 sm:flex-row sm:items-center">
//                   <div>
//                     <p className="text-sm font-semibold text-amber-800">
//                       Cash on delivery — payment pending
//                     </p>
//                     <p className="mt-1 text-xs text-amber-700">
//                       Outstanding:{" "}
//                       {formatCurrency(
//                         selectedOrder.total - selectedOrder.paid
//                       )}
//                     </p>
//                   </div>
//                   <button
//                     type="button"
//                     onClick={() => markPaymentReceived(selectedOrder.id)}
//                     className="rounded-xl bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125748]"
//                   >
//                     Mark Payment Received
//                   </button>
//                 </div>
//               ) : (
//                 <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
//                   <p className="text-sm font-semibold text-blue-800">
//                     Online payment pending
//                   </p>
//                   <p className="mt-1 text-xs leading-5 text-blue-700">
//                     Method: {paymentMethodLabel(selectedOrder.paymentMethod)}.
//                     Updates automatically when Cashfree confirms. You can mark
//                     paid manually if needed.
//                   </p>
//                   <button
//                     type="button"
//                     onClick={() => markPaymentReceived(selectedOrder.id)}
//                     className="mt-3 rounded-lg border border-blue-200 bg-white px-3 py-2 text-xs font-semibold text-blue-800 hover:bg-blue-50"
//                   >
//                     Mark as paid manually
//                   </button>
//                 </div>
//               )}

//               <div className="grid gap-4 sm:grid-cols-2">
//                 <div>
//                   <p className="text-xs text-gray-500">Order Source</p>
//                   <p className="mt-1 text-sm font-medium text-gray-900">
//                     {selectedOrder.source}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500">Payment method</p>
//                   <p className="mt-1 text-sm font-medium text-gray-900">
//                     {paymentMethodLabel(selectedOrder.paymentMethod)}
//                   </p>
//                 </div>
//               </div>

//               {selectedOrder.notes && (
//                 <div className="rounded-xl border border-gray-100 p-4">
//                   <p className="text-xs text-gray-500">Notes</p>
//                   <p className="mt-1 text-sm text-gray-700">
//                     {selectedOrder.notes}
//                   </p>
//                 </div>
//               )}
//             </div>

//             <div className="flex justify-end border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
//               <button
//                 type="button"
//                 onClick={() => setSelectedOrder(null)}
//                 className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAllOrders,
//   createOrder,
//   updateOrder,
//   cancelOrder,
//   markRefundComplete,
//   type FurnitureOrder,
// } from "@/modules/furniture/services/orderService";
// import { recordRefund } from "@/modules/furniture/services/paymentService";

// type OrderStatus =
//   | "New"
//   | "Confirmed"
//   | "In Production"
//   | "Ready"
//   | "Delivered"
//   | "Cancelled";

// type PaymentStatus = "Paid" | "Partial" | "Pending";

// type Order = {
//   id: string;
//   orderNo: string;
//   orderDate: string;
//   customer: string;
//   phone: string;
//   product: string;
//   category: string;
//   quantity: number;
//   total: number;
//   paid: number;
//   status: OrderStatus;
//   paymentStatus: PaymentStatus;
//   paymentMethod: string;
//   deliveryDate: string;
//   source: string;
//   notes: string;
//   refundStatus?: string;
//   refundAmount?: number;
// };

// const orderStatuses: OrderStatus[] = [
//   "New",
//   "Confirmed",
//   "In Production",
//   "Ready",
//   "Delivered",
//   "Cancelled",
// ];

// const categories = [
//   "All Categories",
//   "Sofas",
//   "Beds",
//   "Dining",
//   "Wardrobes",
//   "Kitchen",
//   "Tables",
//   "Office Furniture",
//   "Chairs",
// ];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function formatDate(date: string) {
//   if (!date || date === "—") return "—";
//   try {
//     const d = date.includes("T")
//       ? new Date(date)
//       : new Date(`${date}T00:00:00`);
//     if (Number.isNaN(d.getTime())) return date;
//     return d.toLocaleDateString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   } catch {
//     return date;
//   }
// }

// function formatCreatedAt(value: FurnitureOrder["createdAt"]): string {
//   if (!value) return new Date().toISOString().slice(0, 10);
//   try {
//     const date =
//       typeof value.toDate === "function"
//         ? value.toDate()
//         : new Date(value as unknown as string);
//     return date.toISOString().slice(0, 10);
//   } catch {
//     return new Date().toISOString().slice(0, 10);
//   }
// }

// function normalizeStatus(raw?: string): OrderStatus {
//   const s = (raw || "New").trim();
//   const map: Record<string, OrderStatus> = {
//     New: "New",
//     Pending: "New",
//     Confirmed: "Confirmed",
//     Processing: "In Production",
//     "In Production": "In Production",
//     Shipped: "Ready",
//     Ready: "Ready",
//     Delivered: "Delivered",
//     Paid: "Confirmed",
//     Cancelled: "Cancelled",
//   };
//   return map[s] || "New";
// }

// function normalizePayment(
//   raw?: string,
//   total = 0,
//   paid = 0
// ): PaymentStatus {
//   const s = (raw || "").trim();
//   if (s === "Refunded") return "Pending";
//   if (s === "Paid" || s === "Partial" || s === "Pending") {
//     return s as PaymentStatus;
//   }
//   if (paid <= 0) return "Pending";
//   if (paid >= total) return "Paid";
//   return "Partial";
// }

// function isCodOrder(order: { paymentMethod?: string }) {
//   const m = String(order.paymentMethod || "COD").toUpperCase().trim();
//   return m === "COD" || m === "";
// }

// function paymentMethodLabel(method?: string) {
//   const m = String(method || "").toUpperCase();
//   if (m === "COD" || !m) return "Cash on delivery";
//   if (m === "CARD") return "Card / Online";
//   if (m === "UPI") return "UPI";
//   if (m === "BANK TRANSFER") return "Bank transfer";
//   return method || "—";
// }

// function mapToUi(o: FurnitureOrder): Order {
//   const total = Number(o.total ?? o.amount ?? o.totalAmount ?? 0) || 0;
//   const paid = Number(o.paid ?? 0) || 0;
//   const items = o.items || [];
//   const firstItem = items[0];
//   const product =
//     o.product ||
//     o.productName ||
//     items.map((i) => i.name).filter(Boolean).join(", ") ||
//     firstItem?.name ||
//     "Furniture Item";
//   const quantity =
//     Number(o.quantity) ||
//     items.reduce((s, i) => s + Number(i.qty ?? 0), 0) ||
//     1;

//   return {
//     id: o.id,
//     orderNo: o.orderNo || o.orderNumber || o.id,
//     orderDate: formatCreatedAt(o.createdAt),
//     customer: o.customerName || o.customer || "Unknown",
//     phone: o.phone || "—",
//     product,
//     category: o.category || "Other",
//     quantity,
//     total,
//     paid,
//     status: normalizeStatus(o.status || o.orderStatus),
//     paymentStatus: normalizePayment(o.paymentStatus, total, paid),
//     paymentMethod: String(o.paymentMethod || "COD"),
//     deliveryDate: o.deliveryDate || "",
//     source: o.source || "Website",
//     notes: o.notes || "",
//     refundStatus: o.refundStatus || "",
//     refundAmount: Number(o.refundAmount ?? 0) || 0,
//   };
// }

// function getStatusClasses(status: OrderStatus) {
//   if (status === "Delivered") {
//     return "bg-emerald-50 text-emerald-700 border-emerald-200";
//   }
//   if (status === "In Production") {
//     return "bg-blue-50 text-blue-700 border-blue-200";
//   }
//   if (status === "Ready") {
//     return "bg-purple-50 text-purple-700 border-purple-200";
//   }
//   if (status === "Confirmed") {
//     return "bg-[#eef7f4] text-[#176b5b] border-[#cfe4dd]";
//   }
//   if (status === "Cancelled") {
//     return "bg-red-50 text-red-700 border-red-200";
//   }
//   return "bg-amber-50 text-amber-700 border-amber-200";
// }

// function getPaymentClasses(status: PaymentStatus) {
//   if (status === "Paid") {
//     return "bg-emerald-50 text-emerald-700";
//   }
//   if (status === "Partial") {
//     return "bg-amber-50 text-amber-700";
//   }
//   return "bg-red-50 text-red-700";
// }

// function SummaryCard({
//   title,
//   value,
//   subtitle,
//   icon,
//   iconClass,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   icon: string;
//   iconClass: string;
// }) {
//   return (
//     <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//       <div className="flex items-start justify-between gap-4">
//         <div>
//           <p className="text-sm font-medium text-gray-500">{title}</p>
//           <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
//           <p className="mt-1 text-xs text-gray-500">{subtitle}</p>
//         </div>
//         <div
//           className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg font-bold ${iconClass}`}
//         >
//           {icon}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function OrdersPage() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [categoryFilter, setCategoryFilter] = useState("All Categories");
//   const [paymentFilter, setPaymentFilter] = useState("All");

//   const [showAddModal, setShowAddModal] = useState(false);
//   const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

//   const [newOrder, setNewOrder] = useState({
//     customer: "",
//     phone: "",
//     product: "",
//     category: "Sofas",
//     quantity: "1",
//     total: "",
//     paid: "",
//     status: "New" as OrderStatus,
//     deliveryDate: "",
//     source: "Website",
//     notes: "",
//   });

//   // useEffect(() => {
//   //   let cancelled = false;

//   //   async function load() {
//   //     setLoading(true);
//   //     try {
//   //       const data = await getAllOrders();
//   //       if (cancelled) return;
//   //       setOrders(data.map(mapToUi));
//   //     } catch (err) {
//   //       console.error("Failed to load orders:", err);
//   //     } finally {
//   //       if (!cancelled) setLoading(false);
//   //     }
//   //   }

//   //   load();
//   //   return () => {
//   //     cancelled = true;
//   //   };
//   // }, []);

//     useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllOrders();
//         if (cancelled) return;

//         // Hide failed / unpaid online (also filter in orderService if you added isVisibleOrderInErp)
//         const visible = data.filter((o) => {
//           const pay = String(o.paymentStatus || "").toLowerCase();
//           const method = String(o.paymentMethod || "").toUpperCase();
//           const paid = Number(o.paid ?? 0) || 0;
//           if (pay === "failed" || pay === "user_dropped") return false;
//           const isCod = method === "COD" || method === "";
//           const isOnline =
//             !isCod &&
//             (method.includes("CARD") ||
//               method.includes("UPI") ||
//               method.includes("CASHFREE") ||
//               method.includes("ONLINE") ||
//               method.includes("BANK"));
//           if (isOnline && paid <= 0 && (pay === "pending" || pay === "")) {
//             return false;
//           }
//           return true;
//         });

//         setOrders(visible.map(mapToUi));
//       } catch (err) {
//         console.error("Failed to load orders:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const totalOrders = orders.length;
//   const totalOrderValue = orders
//     .filter((o) => o.status !== "Cancelled")
//     .reduce((sum, order) => sum + order.total, 0);

//   const totalReceived = orders.reduce((sum, order) => {
//     if (order.status === "Cancelled" && order.refundStatus === "completed") {
//       return sum;
//     }
//     return sum + order.paid;
//   }, 0);

//   const totalPending = orders
//     .filter((o) => o.status !== "Cancelled")
//     .reduce((sum, order) => sum + Math.max(0, order.total - order.paid), 0);

//   const activeOrders = orders.filter(
//     (order) => order.status !== "Delivered" && order.status !== "Cancelled"
//   ).length;

//   const deliveredOrders = orders.filter(
//     (order) => order.status === "Delivered"
//   ).length;

//   const pendingPayments = orders.filter(
//     (order) =>
//       order.status !== "Cancelled" && order.paymentStatus !== "Paid"
//   ).length;

//   const refundPendingCount = orders.filter(
//     (o) => o.status === "Cancelled" && o.refundStatus === "pending"
//   ).length;

//   const filteredOrders = useMemo(() => {
//     const searchValue = search.toLowerCase().trim();

//     return orders.filter((order) => {
//       const matchesSearch =
//         !searchValue ||
//         order.orderNo.toLowerCase().includes(searchValue) ||
//         order.customer.toLowerCase().includes(searchValue) ||
//         order.phone.includes(searchValue) ||
//         order.product.toLowerCase().includes(searchValue);

//       const matchesStatus =
//         statusFilter === "All" || order.status === statusFilter;

//       const matchesCategory =
//         categoryFilter === "All Categories" ||
//         order.category === categoryFilter;

//       const matchesPayment =
//         paymentFilter === "All" || order.paymentStatus === paymentFilter;

//       return (
//         matchesSearch && matchesStatus && matchesCategory && matchesPayment
//       );
//     });
//   }, [orders, search, statusFilter, categoryFilter, paymentFilter]);

//   const upcomingDeliveries = orders
//     .filter(
//       (order) => order.status !== "Delivered" && order.status !== "Cancelled"
//     )
//     .sort((a, b) =>
//       (a.deliveryDate || "").localeCompare(b.deliveryDate || "")
//     )
//     .slice(0, 5);

//   function calculatePaymentStatus(total: number, paid: number): PaymentStatus {
//     if (paid <= 0) return "Pending";
//     if (paid >= total) return "Paid";
//     return "Partial";
//   }

//   async function handleAddOrder() {
//     const quantity = Number(newOrder.quantity);
//     const total = Number(newOrder.total);
//     const paid = Number(newOrder.paid || 0);

//     if (
//       !newOrder.customer.trim() ||
//       !newOrder.phone.trim() ||
//       !newOrder.product.trim() ||
//       !total ||
//       total <= 0
//     ) {
//       alert(
//         "Please enter customer, phone, product and a valid total amount."
//       );
//       return;
//     }

//     if (quantity <= 0) {
//       alert("Quantity must be greater than zero.");
//       return;
//     }

//     if (paid < 0 || paid > total) {
//       alert("Paid amount cannot be greater than the order total.");
//       return;
//     }

//     setSaving(true);
//     try {
//       const paymentStatus = calculatePaymentStatus(total, paid);
//       const orderNo = `ORD-${Date.now().toString().slice(-6)}`;

//       const payload = {
//         orderNo,
//         customerName: newOrder.customer.trim(),
//         customer: newOrder.customer.trim(),
//         phone: newOrder.phone.trim(),
//         product: newOrder.product.trim(),
//         productName: newOrder.product.trim(),
//         category: newOrder.category,
//         quantity,
//         amount: total,
//         total,
//         paid,
//         status: newOrder.status,
//         paymentStatus,
//         paymentMethod: "COD",
//         deliveryDate: newOrder.deliveryDate,
//         source: newOrder.source,
//         notes: newOrder.notes.trim(),
//         items: [
//           {
//             productId: "",
//             name: newOrder.product.trim(),
//             qty: quantity,
//             price: total / quantity,
//           },
//         ],
//       };

//       const id = await createOrder(payload);

//       const order: Order = {
//         id,
//         orderNo,
//         orderDate: new Date().toISOString().slice(0, 10),
//         customer: payload.customerName,
//         phone: payload.phone,
//         product: payload.product,
//         category: payload.category,
//         quantity,
//         total,
//         paid,
//         status: newOrder.status,
//         paymentStatus,
//         paymentMethod: "COD",
//         deliveryDate: payload.deliveryDate,
//         source: payload.source,
//         notes: payload.notes,
//         refundStatus: "",
//         refundAmount: 0,
//       };

//       setOrders((current) => [order, ...current]);

//       setNewOrder({
//         customer: "",
//         phone: "",
//         product: "",
//         category: "Sofas",
//         quantity: "1",
//         total: "",
//         paid: "",
//         status: "New",
//         deliveryDate: "",
//         source: "Website",
//         notes: "",
//       });

//       setShowAddModal(false);
//     } catch (err) {
//       console.error("Failed to create order:", err);
//       alert("Unable to create order. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function handleCancelOrder(orderId: string) {
//     const current = orders.find((o) => o.id === orderId);
//     if (!current || current.status === "Cancelled") return;

//     const paid = current.paid || 0;
//     const msg =
//       paid > 0
//         ? `This order has ${formatCurrency(paid)} paid.\n\nCancel and mark refund as PENDING?\n(Complete the refund, then click “Mark refund completed” to clear balances.)`
//         : "Cancel this order? No payment was received — pending will be cleared.";

//     if (!window.confirm(msg)) return;

//     setSaving(true);
//     try {
//       const result = await cancelOrder(orderId);

//       setOrders((prev) =>
//         prev.map((o) => {
//           if (o.id !== orderId) return o;
//           if (result.needsRefund) {
//             return {
//               ...o,
//               status: "Cancelled" as OrderStatus,
//               refundStatus: "pending",
//               refundAmount: result.refundAmount,
//             };
//           }
//           return {
//             ...o,
//             status: "Cancelled" as OrderStatus,
//             paid: 0,
//             paymentStatus: "Pending" as PaymentStatus,
//             refundStatus: "not_required",
//             refundAmount: 0,
//           };
//         })
//       );

//       setSelectedOrder((prev) => {
//         if (!prev || prev.id !== orderId) return prev;
//         if (result.needsRefund) {
//           return {
//             ...prev,
//             status: "Cancelled",
//             refundStatus: "pending",
//             refundAmount: result.refundAmount,
//           };
//         }
//         return {
//           ...prev,
//           status: "Cancelled",
//           paid: 0,
//           paymentStatus: "Pending",
//           refundStatus: "not_required",
//           refundAmount: 0,
//         };
//       });

//       alert(result.message);
//     } catch (err) {
//       console.error(err);
//       alert("Unable to cancel order.");
//       try {
//         const data = await getAllOrders();
//         setOrders(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function handleMarkRefunded(orderId: string) {
//     const current = orders.find((o) => o.id === orderId);
//     if (!current) return;

//     const amount = current.refundAmount || current.paid || 0;
//     if (
//       !window.confirm(
//         `Confirm refund of ${formatCurrency(amount)} is completed?\nThis will clear paid balance on the order.`
//       )
//     ) {
//       return;
//     }

//     setSaving(true);
//     try {
//       await markRefundComplete(orderId, {
//         refundAmount: amount,
//         note: "Refund marked complete by admin",
//       });

//       try {
//         await recordRefund({
//           orderId: current.id.startsWith("web-")
//             ? current.id.slice(4)
//             : current.id,
//           orderNo: current.orderNo,
//           customer: current.customer,
//           phone: current.phone,
//           amount,
//           paymentMethod: current.paymentMethod || "Refund",
//           notes: `Refund for cancelled order ${current.orderNo}`,
//         });
//       } catch (e) {
//         console.warn("Refund payment record failed:", e);
//       }

//       setOrders((prev) =>
//         prev.map((o) =>
//           o.id === orderId
//             ? {
//                 ...o,
//                 status: "Cancelled" as OrderStatus,
//                 paid: 0,
//                 paymentStatus: "Pending" as PaymentStatus,
//                 refundStatus: "completed",
//                 refundAmount: amount,
//               }
//             : o
//         )
//       );
//       setSelectedOrder((prev) =>
//         prev && prev.id === orderId
//           ? {
//               ...prev,
//               paid: 0,
//               paymentStatus: "Pending",
//               refundStatus: "completed",
//               refundAmount: amount,
//             }
//           : prev
//       );

//       alert("Refund recorded. Order balances cleared.");
//     } catch (err) {
//       console.error(err);
//       alert("Unable to mark refund complete.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function updateOrderStatus(orderId: string, status: OrderStatus) {
//     const current = orders.find((o) => o.id === orderId);
//     if (!current) return;
//     if (current.status === "Cancelled") return;

//     if (status === "Cancelled") {
//       await handleCancelOrder(orderId);
//       return;
//     }

//     setOrders((prev) =>
//       prev.map((order) =>
//         order.id === orderId ? { ...order, status } : order
//       )
//     );

//     setSelectedOrder((prev) =>
//       prev && prev.id === orderId ? { ...prev, status } : prev
//     );

//     try {
//       await updateOrder(orderId, { status });
//     } catch (err) {
//       console.error("Failed to update order status:", err);
//       try {
//         const data = await getAllOrders();
//         setOrders(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   async function markPaymentReceived(orderId: string) {
//     const target = orders.find((o) => o.id === orderId);
//     if (!target) return;
//     if (target.status === "Cancelled") return;

//     setOrders((prev) =>
//       prev.map((order) =>
//         order.id === orderId
//           ? {
//               ...order,
//               paid: order.total,
//               paymentStatus: "Paid" as PaymentStatus,
//             }
//           : order
//       )
//     );

//     setSelectedOrder((prev) =>
//       prev && prev.id === orderId
//         ? { ...prev, paid: prev.total, paymentStatus: "Paid" }
//         : prev
//     );

//     try {
//       await updateOrder(orderId, {
//         paid: target.total,
//         paymentStatus: "Paid",
//       });
//     } catch (err) {
//       console.error("Failed to mark payment:", err);
//       try {
//         const data = await getAllOrders();
//         setOrders(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-gray-900">
//       <main className="mx-auto max-w-[1600px] px-5 py-7 lg:px-8">
//         <div className="mb-7 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
//           <div>
//             <p className="mb-1 text-sm font-medium text-[#176b5b]">
//               Sales Management
//             </p>
//             <h1 className="text-3xl font-bold tracking-tight text-gray-900">
//               Orders
//             </h1>
//             <p className="mt-1 text-sm text-gray-500">
//               Manage furniture orders, production status, delivery, payments and
//               refunds.
//             </p>
//           </div>
//           <button
//             type="button"
//             onClick={() => setShowAddModal(true)}
//             className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#125748]"
//           >
//             <span className="text-lg">+</span>
//             New Order
//           </button>
//         </div>

//         <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
//           <SummaryCard
//             title="Total Orders"
//             value={loading ? "…" : String(totalOrders)}
//             subtitle="All order records"
//             icon="▤"
//             iconClass="bg-[#eef7f4] text-[#176b5b]"
//           />
//           <SummaryCard
//             title="Order Value"
//             value={loading ? "…" : formatCurrency(totalOrderValue)}
//             subtitle="Active sales value"
//             icon="₹"
//             iconClass="bg-blue-50 text-blue-700"
//           />
//           <SummaryCard
//             title="Received"
//             value={loading ? "…" : formatCurrency(totalReceived)}
//             subtitle="Payments held / received"
//             icon="✓"
//             iconClass="bg-emerald-50 text-emerald-700"
//           />
//           <SummaryCard
//             title="Pending"
//             value={loading ? "…" : formatCurrency(totalPending)}
//             subtitle={`${pendingPayments} payment${
//               pendingPayments !== 1 ? "s" : ""
//             } pending`}
//             icon="!"
//             iconClass="bg-amber-50 text-amber-700"
//           />
//           <SummaryCard
//             title="Active Orders"
//             value={loading ? "…" : String(activeOrders)}
//             subtitle={
//               refundPendingCount > 0
//                 ? `${deliveredOrders} delivered · ${refundPendingCount} refund pending`
//                 : `${deliveredOrders} delivered`
//             }
//             icon="◷"
//             iconClass="bg-purple-50 text-purple-700"
//           />
//         </div>

//         <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
//           <section className="min-w-0 rounded-2xl border border-[#e4e2da] bg-white shadow-sm">
//             <div className="border-b border-[#e4e2da] p-5">
//               <div className="flex flex-col gap-4">
//                 <div className="relative">
//                   <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
//                     ⌕
//                   </span>
//                   <input
//                     value={search}
//                     onChange={(event) => setSearch(event.target.value)}
//                     placeholder="Search order, customer, phone or product..."
//                     className="w-full rounded-xl border border-gray-200 bg-[#fafaf8] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                   />
//                 </div>
//                 <div className="grid gap-3 sm:grid-cols-3">
//                   <select
//                     value={statusFilter}
//                     onChange={(event) => setStatusFilter(event.target.value)}
//                     className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="All">All Order Status</option>
//                     {orderStatuses.map((status) => (
//                       <option key={status}>{status}</option>
//                     ))}
//                   </select>
//                   <select
//                     value={categoryFilter}
//                     onChange={(event) => setCategoryFilter(event.target.value)}
//                     className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     {categories.map((category) => (
//                       <option key={category}>{category}</option>
//                     ))}
//                   </select>
//                   <select
//                     value={paymentFilter}
//                     onChange={(event) => setPaymentFilter(event.target.value)}
//                     className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="All">All Payment Status</option>
//                     <option value="Paid">Paid</option>
//                     <option value="Partial">Partial</option>
//                     <option value="Pending">Pending</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[1150px]">
//                 <thead>
//                   <tr className="border-b border-[#e4e2da] bg-[#fafaf8] text-left">
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Order
//                     </th>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Customer
//                     </th>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Product
//                     </th>
//                     <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Qty
//                     </th>
//                     <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Total
//                     </th>
//                     <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Payment
//                     </th>
//                     <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Status
//                     </th>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Delivery
//                     </th>
//                     <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Action
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {loading ? (
//                     <tr>
//                       <td
//                         colSpan={9}
//                         className="px-5 py-16 text-center text-sm text-gray-500"
//                       >
//                         Loading orders…
//                       </td>
//                     </tr>
//                   ) : (
//                     <>
//                       {filteredOrders.map((order) => (
//                         <tr
//                           key={order.id}
//                           className="border-b border-[#efeee9] transition hover:bg-[#fafaf8]"
//                         >
//                           <td className="px-5 py-4">
//                             <div>
//                               <p className="text-xs font-semibold text-[#176b5b]">
//                                 {order.orderNo}
//                               </p>
//                               <p className="mt-1 text-xs text-gray-500">
//                                 {formatDate(order.orderDate)}
//                               </p>
//                             </div>
//                           </td>
//                           <td className="px-5 py-4">
//                             <p className="font-medium text-gray-900">
//                               {order.customer}
//                             </p>
//                             <p className="mt-1 text-xs text-gray-500">
//                               {order.phone}
//                             </p>
//                           </td>
//                           <td className="px-5 py-4">
//                             <p className="font-medium text-gray-900">
//                               {order.product}
//                             </p>
//                             <p className="mt-1 text-xs text-gray-500">
//                               {order.category}
//                             </p>
//                           </td>
//                           <td className="px-5 py-4 text-center text-sm font-medium text-gray-700">
//                             {order.quantity}
//                           </td>
//                           <td className="px-5 py-4 text-right">
//                             <p className="text-sm font-semibold text-gray-900">
//                               {formatCurrency(order.total)}
//                             </p>
//                             <p className="mt-0.5 text-xs text-gray-500">
//                               Paid {formatCurrency(order.paid)}
//                             </p>
//                           </td>
//                           <td className="px-5 py-4 text-center">
//                             <span
//                               className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${getPaymentClasses(
//                                 order.paymentStatus
//                               )}`}
//                             >
//                               {order.paymentStatus}
//                             </span>
//                             <p className="mt-1 text-[10px] text-gray-400">
//                               {paymentMethodLabel(order.paymentMethod)}
//                             </p>
//                           </td>
//                           <td className="px-5 py-4 text-center">
//                             <span
//                               className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusClasses(
//                                 order.status
//                               )}`}
//                             >
//                               {order.status}
//                             </span>
//                             {order.status === "Cancelled" &&
//                               order.refundStatus === "pending" && (
//                                 <p className="mt-1 text-[10px] font-medium text-amber-700">
//                                   Refund pending
//                                 </p>
//                               )}
//                             {order.status === "Cancelled" &&
//                               order.refundStatus === "completed" && (
//                                 <p className="mt-1 text-[10px] font-medium text-emerald-700">
//                                   Refunded
//                                 </p>
//                               )}
//                           </td>
//                           <td className="px-5 py-4 text-sm text-gray-600">
//                             {order.deliveryDate
//                               ? formatDate(order.deliveryDate)
//                               : "—"}
//                           </td>
//                           <td className="px-5 py-4 text-right">
//                             <button
//                               type="button"
//                               onClick={() => setSelectedOrder(order)}
//                               className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-700 hover:border-[#176b5b] hover:text-[#176b5b]"
//                             >
//                               View
//                             </button>
//                           </td>
//                         </tr>
//                       ))}

//                       {filteredOrders.length === 0 && (
//                         <tr>
//                           <td
//                             colSpan={9}
//                             className="px-5 py-16 text-center text-sm text-gray-500"
//                           >
//                             No orders match your filters.
//                           </td>
//                         </tr>
//                       )}
//                     </>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </section>

//           <aside className="space-y-5">
//             <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//               <h2 className="font-semibold text-gray-900">Upcoming deliveries</h2>
//               <div className="mt-4 space-y-3">
//                 {upcomingDeliveries.length === 0 ? (
//                   <p className="text-sm text-gray-500">No upcoming deliveries.</p>
//                 ) : (
//                   upcomingDeliveries.map((order) => (
//                     <button
//                       key={order.id}
//                       type="button"
//                       onClick={() => setSelectedOrder(order)}
//                       className="flex w-full items-start justify-between gap-3 rounded-xl border border-transparent px-2 py-2 text-left hover:border-[#e4e2da] hover:bg-[#fafaf8]"
//                     >
//                       <div>
//                         <p className="text-sm font-medium text-gray-900">
//                           {order.customer}
//                         </p>
//                         <p className="text-xs text-gray-500">{order.product}</p>
//                       </div>
//                       <p className="shrink-0 text-xs text-gray-500">
//                         {order.deliveryDate
//                           ? formatDate(order.deliveryDate)
//                           : "—"}
//                       </p>
//                     </button>
//                   ))
//                 )}
//               </div>
//             </div>

//             <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//               <h2 className="font-semibold text-gray-900">Order Status</h2>
//               <div className="mt-5 space-y-4">
//                 {orderStatuses.map((status) => {
//                   const count = orders.filter(
//                     (order) => order.status === status
//                   ).length;
//                   return (
//                     <div
//                       key={status}
//                       className="flex items-center justify-between"
//                     >
//                       <div className="flex items-center gap-2">
//                         <span
//                           className={`h-2.5 w-2.5 rounded-full ${
//                             status === "Delivered"
//                               ? "bg-emerald-500"
//                               : status === "In Production"
//                                 ? "bg-blue-500"
//                                 : status === "Ready"
//                                   ? "bg-purple-500"
//                                   : status === "Cancelled"
//                                     ? "bg-red-500"
//                                     : status === "Confirmed"
//                                       ? "bg-[#176b5b]"
//                                       : "bg-amber-500"
//                           }`}
//                         />
//                         <span className="text-sm text-gray-600">{status}</span>
//                       </div>
//                       <span className="font-semibold text-gray-900">{count}</span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </aside>
//         </div>
//       </main>

//       {/* ADD ORDER MODAL */}
//       {showAddModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-5">
//               <div>
//                 <h2 className="text-xl font-bold text-gray-900">New Order</h2>
//                 <p className="mt-1 text-sm text-gray-500">
//                   Create a new furniture customer order.
//                 </p>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setShowAddModal(false)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700"
//               >
//                 ×
//               </button>
//             </div>
//             <div className="grid gap-4 p-6 sm:grid-cols-2">
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Customer Name
//                 </label>
//                 <input
//                   value={newOrder.customer}
//                   onChange={(e) =>
//                     setNewOrder({ ...newOrder, customer: e.target.value })
//                   }
//                   placeholder="Customer name"
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Phone / WhatsApp
//                 </label>
//                 <input
//                   value={newOrder.phone}
//                   onChange={(e) =>
//                     setNewOrder({ ...newOrder, phone: e.target.value })
//                   }
//                   placeholder="Phone number"
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div className="sm:col-span-2">
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Product
//                 </label>
//                 <input
//                   value={newOrder.product}
//                   onChange={(e) =>
//                     setNewOrder({ ...newOrder, product: e.target.value })
//                   }
//                   placeholder="e.g. Modern 3 Seater Sofa"
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Category
//                 </label>
//                 <select
//                   value={newOrder.category}
//                   onChange={(e) =>
//                     setNewOrder({ ...newOrder, category: e.target.value })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {categories
//                     .filter((c) => c !== "All Categories")
//                     .map((c) => (
//                       <option key={c}>{c}</option>
//                     ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Quantity
//                 </label>
//                 <input
//                   type="number"
//                   min="1"
//                   value={newOrder.quantity}
//                   onChange={(e) =>
//                     setNewOrder({ ...newOrder, quantity: e.target.value })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Total Amount
//                 </label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
//                     ₹
//                   </span>
//                   <input
//                     type="number"
//                     min="0"
//                     value={newOrder.total}
//                     onChange={(e) =>
//                       setNewOrder({ ...newOrder, total: e.target.value })
//                     }
//                     placeholder="0"
//                     className="w-full rounded-xl border border-gray-200 py-2.5 pl-8 pr-3 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Paid Amount
//                 </label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
//                     ₹
//                   </span>
//                   <input
//                     type="number"
//                     min="0"
//                     value={newOrder.paid}
//                     onChange={(e) =>
//                       setNewOrder({ ...newOrder, paid: e.target.value })
//                     }
//                     placeholder="0"
//                     className="w-full rounded-xl border border-gray-200 py-2.5 pl-8 pr-3 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Order Status
//                 </label>
//                 <select
//                   value={newOrder.status}
//                   onChange={(e) =>
//                     setNewOrder({
//                       ...newOrder,
//                       status: e.target.value as OrderStatus,
//                     })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {orderStatuses
//                     .filter((s) => s !== "Cancelled")
//                     .map((s) => (
//                       <option key={s}>{s}</option>
//                     ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Delivery Date
//                 </label>
//                 <input
//                   type="date"
//                   value={newOrder.deliveryDate}
//                   onChange={(e) =>
//                     setNewOrder({ ...newOrder, deliveryDate: e.target.value })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Source
//                 </label>
//                 <select
//                   value={newOrder.source}
//                   onChange={(e) =>
//                     setNewOrder({ ...newOrder, source: e.target.value })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   <option>Website</option>
//                   <option>Product Page</option>
//                   <option>Instagram</option>
//                   <option>Facebook</option>
//                   <option>Google</option>
//                   <option>WhatsApp</option>
//                   <option>Walk-in</option>
//                   <option>Referral</option>
//                   <option>Other</option>
//                 </select>
//               </div>
//               <div className="sm:col-span-2">
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Notes
//                 </label>
//                 <textarea
//                   rows={3}
//                   value={newOrder.notes}
//                   onChange={(e) =>
//                     setNewOrder({ ...newOrder, notes: e.target.value })
//                   }
//                   placeholder="Optional order notes..."
//                   className="w-full resize-none rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//             </div>
//             <div className="flex justify-end gap-3 border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
//               <button
//                 type="button"
//                 onClick={() => setShowAddModal(false)}
//                 className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 onClick={handleAddOrder}
//                 disabled={saving}
//                 className="rounded-xl bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125748] disabled:opacity-60"
//               >
//                 {saving ? "Creating…" : "Create Order"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ORDER DETAIL MODAL */}
//       {selectedOrder && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-5">
//               <div>
//                 <p className="text-xs font-semibold text-[#176b5b]">
//                   {selectedOrder.orderNo}
//                 </p>
//                 <h2 className="mt-1 text-xl font-bold text-gray-900">
//                   Order Details
//                 </h2>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setSelectedOrder(null)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="space-y-5 p-6">
//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
//                   Customer
//                 </p>
//                 <div className="mt-3 flex flex-col justify-between gap-3 sm:flex-row">
//                   <div>
//                     <p className="font-semibold text-gray-900">
//                       {selectedOrder.customer}
//                     </p>
//                     <p className="mt-1 text-sm text-gray-500">
//                       {selectedOrder.phone}
//                     </p>
//                   </div>
//                   <div className="text-left sm:text-right">
//                     <p className="text-xs text-gray-500">Order Date</p>
//                     <p className="mt-1 text-sm font-medium text-gray-900">
//                       {formatDate(selectedOrder.orderDate)}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="grid gap-4 sm:grid-cols-2">
//                 <div className="rounded-xl border border-gray-100 p-4">
//                   <p className="text-xs text-gray-500">Product</p>
//                   <p className="mt-1 font-semibold text-gray-900">
//                     {selectedOrder.product}
//                   </p>
//                   <p className="mt-1 text-xs text-gray-500">
//                     {selectedOrder.category}
//                   </p>
//                 </div>
//                 <div className="rounded-xl border border-gray-100 p-4">
//                   <p className="text-xs text-gray-500">Quantity</p>
//                   <p className="mt-1 text-lg font-bold text-gray-900">
//                     {selectedOrder.quantity}
//                   </p>
//                 </div>
//               </div>

//               <div className="grid gap-4 sm:grid-cols-3">
//                 <div className="rounded-xl bg-[#fafaf8] p-4">
//                   <p className="text-xs text-gray-500">Order Total</p>
//                   <p className="mt-1 text-lg font-bold text-gray-900">
//                     {formatCurrency(selectedOrder.total)}
//                   </p>
//                 </div>
//                 <div className="rounded-xl bg-emerald-50 p-4">
//                   <p className="text-xs text-emerald-600">Paid</p>
//                   <p className="mt-1 text-lg font-bold text-emerald-700">
//                     {formatCurrency(selectedOrder.paid)}
//                   </p>
//                 </div>
//                 <div className="rounded-xl bg-red-50 p-4">
//                   <p className="text-xs text-red-600">Pending</p>
//                   <p className="mt-1 text-lg font-bold text-red-700">
//                     {formatCurrency(
//                       Math.max(0, selectedOrder.total - selectedOrder.paid)
//                     )}
//                   </p>
//                 </div>
//               </div>

//               <div className="rounded-xl border border-gray-100 p-4">
//                 <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
//                   <div>
//                     <p className="text-xs text-gray-500">Order Status</p>
//                     <span
//                       className={`mt-2 inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusClasses(
//                         selectedOrder.status
//                       )}`}
//                     >
//                       {selectedOrder.status}
//                     </span>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">Payment Status</p>
//                     <span
//                       className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${getPaymentClasses(
//                         selectedOrder.paymentStatus
//                       )}`}
//                     >
//                       {selectedOrder.paymentStatus}
//                     </span>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">Delivery Date</p>
//                     <p className="mt-2 text-sm font-semibold text-gray-900">
//                       {selectedOrder.deliveryDate
//                         ? formatDate(selectedOrder.deliveryDate)
//                         : "Not scheduled"}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <p className="mb-3 text-sm font-semibold text-gray-900">
//                   Update Order Status
//                 </p>

//                 {selectedOrder.status === "Cancelled" ? (
//                   <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3">
//                     <p className="text-sm font-semibold text-red-800">
//                       Order cancelled
//                     </p>
//                     <p className="mt-1 text-xs leading-5 text-red-700">
//                       Status is locked. Other workflow steps cannot be applied
//                       to a cancelled order.
//                     </p>
//                   </div>
//                 ) : (
//                   <div className="flex flex-wrap gap-2">
//                     {orderStatuses.map((status) => (
//                       <button
//                         key={status}
//                         type="button"
//                         disabled={saving}
//                         onClick={() =>
//                           updateOrderStatus(selectedOrder.id, status)
//                         }
//                         className={`rounded-lg border px-3 py-2 text-xs font-medium transition disabled:opacity-60 ${
//                           selectedOrder.status === status
//                             ? "border-[#176b5b] bg-[#eef7f4] text-[#176b5b]"
//                             : status === "Cancelled"
//                               ? "border-red-200 bg-white text-red-600 hover:border-red-400 hover:bg-red-50"
//                               : "border-gray-200 bg-white text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                         }`}
//                       >
//                         {status}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Payment / refund panel */}
//               {selectedOrder.status === "Cancelled" ? (
//                 <div className="rounded-xl border border-red-100 bg-red-50 p-4">
//                   <p className="text-sm font-semibold text-red-800">
//                     Payment on cancelled order
//                   </p>

//                   {selectedOrder.refundStatus === "pending" &&
//                   (selectedOrder.paid > 0 ||
//                     (selectedOrder.refundAmount || 0) > 0) ? (
//                     <div className="mt-3 space-y-3">
//                       <p className="text-xs leading-5 text-red-700">
//                         Refund pending:{" "}
//                         <span className="font-semibold">
//                           {formatCurrency(
//                             selectedOrder.refundAmount || selectedOrder.paid
//                           )}
//                         </span>
//                         . Complete the refund (Cashfree / bank / cash), then
//                         mark it done so balances clear.
//                       </p>
//                       <button
//                         type="button"
//                         disabled={saving}
//                         onClick={() => handleMarkRefunded(selectedOrder.id)}
//                         className="rounded-xl bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125748] disabled:opacity-60"
//                       >
//                         {saving ? "Saving…" : "Mark refund completed"}
//                       </button>
//                     </div>
//                   ) : selectedOrder.refundStatus === "completed" ? (
//                     <p className="mt-1 text-xs leading-5 text-red-700">
//                       Refund of{" "}
//                       {formatCurrency(selectedOrder.refundAmount || 0)}{" "}
//                       recorded. Balances cleared.
//                     </p>
//                   ) : (
//                     <p className="mt-1 text-xs leading-5 text-red-700">
//                       No payment was received. Pending balance cleared.
//                     </p>
//                   )}
//                 </div>
//               ) : selectedOrder.paymentStatus === "Paid" ? (
//                 <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
//                   <p className="text-sm font-semibold text-emerald-800">
//                     Payment received in full
//                   </p>
//                   <p className="mt-1 text-xs text-emerald-700">
//                     {formatCurrency(selectedOrder.paid || selectedOrder.total)}{" "}
//                     · {paymentMethodLabel(selectedOrder.paymentMethod)}
//                   </p>
//                 </div>
//               ) : isCodOrder(selectedOrder) ? (
//                 <div className="flex flex-col justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 sm:flex-row sm:items-center">
//                   <div>
//                     <p className="text-sm font-semibold text-amber-800">
//                       Cash on delivery — payment pending
//                     </p>
//                     <p className="mt-1 text-xs text-amber-700">
//                       Outstanding:{" "}
//                       {formatCurrency(
//                         selectedOrder.total - selectedOrder.paid
//                       )}
//                     </p>
//                   </div>
//                   <button
//                     type="button"
//                     onClick={() => markPaymentReceived(selectedOrder.id)}
//                     className="rounded-xl bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125748]"
//                   >
//                     Mark Payment Received
//                   </button>
//                 </div>
//               ) : (
//                 <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
//                   <p className="text-sm font-semibold text-blue-800">
//                     Online payment pending
//                   </p>
//                   <p className="mt-1 text-xs leading-5 text-blue-700">
//                     Method: {paymentMethodLabel(selectedOrder.paymentMethod)}.
//                     Updates automatically when Cashfree confirms. You can mark
//                     paid manually if needed.
//                   </p>
//                   <button
//                     type="button"
//                     onClick={() => markPaymentReceived(selectedOrder.id)}
//                     className="mt-3 rounded-lg border border-blue-200 bg-white px-3 py-2 text-xs font-semibold text-blue-800 hover:bg-blue-50"
//                   >
//                     Mark as paid manually
//                   </button>
//                 </div>
//               )}

//               <div className="grid gap-4 sm:grid-cols-2">
//                 <div>
//                   <p className="text-xs text-gray-500">Order Source</p>
//                   <p className="mt-1 text-sm font-medium text-gray-900">
//                     {selectedOrder.source}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500">Payment method</p>
//                   <p className="mt-1 text-sm font-medium text-gray-900">
//                     {paymentMethodLabel(selectedOrder.paymentMethod)}
//                   </p>
//                 </div>
//               </div>

//               {selectedOrder.notes && (
//                 <div className="rounded-xl border border-gray-100 p-4">
//                   <p className="text-xs text-gray-500">Notes</p>
//                   <p className="mt-1 text-sm text-gray-700">
//                     {selectedOrder.notes}
//                   </p>
//                 </div>
//               )}
//             </div>

//             <div className="flex justify-end border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
//               <button
//                 type="button"
//                 onClick={() => setSelectedOrder(null)}
//                 className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useEffect, useMemo, useState } from "react";
import {
  getAllOrders,
  createOrder,
  updateOrder,
  cancelOrder,
  markRefundComplete,
  type FurnitureOrder,
} from "@/modules/furniture/services/orderService";
import { recordRefund } from "@/modules/furniture/services/paymentService";

type OrderStatus =
  | "New"
  | "Confirmed"
  | "In Production"
  | "Ready"
  | "Delivered"
  | "Cancelled";

type PaymentStatus = "Paid" | "Partial" | "Pending";

type Order = {
  id: string;
  orderNo: string;
  orderDate: string;
  customer: string;
  phone: string;
  product: string;
  category: string;
  quantity: number;
  total: number;
  paid: number;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  paymentMethod: string;
  deliveryDate: string;
  source: string;
  notes: string;
  refundStatus?: string;
  refundAmount?: number;
};

const orderStatuses: OrderStatus[] = [
  "New",
  "Confirmed",
  "In Production",
  "Ready",
  "Delivered",
  "Cancelled",
];

const categories = [
  "All Categories",
  "Sofas",
  "Beds",
  "Dining",
  "Wardrobes",
  "Kitchen",
  "Tables",
  "Office Furniture",
  "Chairs",
];

function formatCurrency(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function formatDate(date: string) {
  if (!date || date === "—") return "—";
  try {
    const d = date.includes("T")
      ? new Date(date)
      : new Date(`${date}T00:00:00`);
    if (Number.isNaN(d.getTime())) return date;
    return d.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return date;
  }
}

function formatCreatedAt(value: FurnitureOrder["createdAt"]): string {
  if (!value) return new Date().toISOString().slice(0, 10);
  try {
    const date =
      typeof value.toDate === "function"
        ? value.toDate()
        : new Date(value as unknown as string);
    return date.toISOString().slice(0, 10);
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
}

function normalizeStatus(raw?: string): OrderStatus {
  const s = (raw || "New").trim();
  const map: Record<string, OrderStatus> = {
    New: "New",
    Pending: "New",
    Confirmed: "Confirmed",
    Processing: "In Production",
    "In Production": "In Production",
    Shipped: "Ready",
    Ready: "Ready",
    Delivered: "Delivered",
    Paid: "Confirmed",
    Cancelled: "Cancelled",
  };
  return map[s] || "New";
}

function normalizePayment(
  raw?: string,
  total = 0,
  paid = 0
): PaymentStatus {
  const s = (raw || "").trim();
  if (s === "Refunded") return "Pending";
  if (s === "Paid" || s === "Partial" || s === "Pending") {
    return s as PaymentStatus;
  }
  if (paid <= 0) return "Pending";
  if (paid >= total) return "Paid";
  return "Partial";
}

function isCodOrder(order: { paymentMethod?: string }) {
  const m = String(order.paymentMethod || "COD").toUpperCase().trim();
  return m === "COD" || m === "";
}

function paymentMethodLabel(method?: string) {
  const m = String(method || "").toUpperCase();
  if (m === "COD" || !m) return "Cash on delivery";
  if (m === "CARD") return "Card / Online";
  if (m === "UPI") return "UPI";
  if (m === "BANK TRANSFER") return "Bank transfer";
  return method || "—";
}

function mapToUi(o: FurnitureOrder): Order {
  const total = Number(o.total ?? o.amount ?? o.totalAmount ?? 0) || 0;
  const paid = Number(o.paid ?? 0) || 0;
  const items = o.items || [];
  const firstItem = items[0];
  const product =
    o.product ||
    o.productName ||
    items.map((i) => i.name).filter(Boolean).join(", ") ||
    firstItem?.name ||
    "Furniture Item";
  const quantity =
    Number(o.quantity) ||
    items.reduce((s, i) => s + Number(i.qty ?? 0), 0) ||
    1;

  return {
    id: o.id,
    orderNo: o.orderNo || o.orderNumber || o.id,
    orderDate: formatCreatedAt(o.createdAt),
    customer: o.customerName || o.customer || "Unknown",
    phone: o.phone || "—",
    product,
    category: o.category || "Other",
    quantity,
    total,
    paid,
    status: normalizeStatus(o.status || o.orderStatus),
    paymentStatus: normalizePayment(o.paymentStatus, total, paid),
    paymentMethod: String(o.paymentMethod || "COD"),
    deliveryDate: o.deliveryDate || "",
    source: o.source || "Website",
    notes: o.notes || "",
    refundStatus: o.refundStatus || "",
    refundAmount: Number(o.refundAmount ?? 0) || 0,
  };
}

function getStatusClasses(status: OrderStatus) {
  if (status === "Delivered") {
    return "bg-emerald-50 text-emerald-700 border-emerald-200";
  }
  if (status === "In Production") {
    return "bg-blue-50 text-blue-700 border-blue-200";
  }
  if (status === "Ready") {
    return "bg-purple-50 text-purple-700 border-purple-200";
  }
  if (status === "Confirmed") {
    return "bg-[#eef7f4] text-[#176b5b] border-[#cfe4dd]";
  }
  if (status === "Cancelled") {
    return "bg-red-50 text-red-700 border-red-200";
  }
  return "bg-amber-50 text-amber-700 border-amber-200";
}

function getPaymentClasses(status: PaymentStatus) {
  if (status === "Paid") return "bg-emerald-50 text-emerald-700";
  if (status === "Partial") return "bg-amber-50 text-amber-700";
  return "bg-red-50 text-red-700";
}

function SummaryCard({
  title,
  value,
  subtitle,
  icon,
  iconClass,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
  iconClass: string;
}) {
  return (
    <div className="rounded-2xl border border-[#e4e2da] bg-white p-3 shadow-sm sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-medium text-gray-500 sm:text-sm">
            {title}
          </p>
          <p className="mt-1.5 truncate text-lg font-bold text-gray-900 sm:mt-2 sm:text-2xl">
            {value}
          </p>
          <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
            {subtitle}
          </p>
        </div>
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-base font-bold sm:h-11 sm:w-11 sm:text-lg ${iconClass}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [paymentFilter, setPaymentFilter] = useState("All");

  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const [newOrder, setNewOrder] = useState({
    customer: "",
    phone: "",
    product: "",
    category: "Sofas",
    quantity: "1",
    total: "",
    paid: "",
    status: "New" as OrderStatus,
    deliveryDate: "",
    source: "Website",
    notes: "",
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const data = await getAllOrders();
        if (cancelled) return;

        const visible = data.filter((o) => {
          const pay = String(o.paymentStatus || "").toLowerCase();
          const method = String(o.paymentMethod || "").toUpperCase();
          const paid = Number(o.paid ?? 0) || 0;
          if (pay === "failed" || pay === "user_dropped") return false;
          const isCod = method === "COD" || method === "";
          const isOnline =
            !isCod &&
            (method.includes("CARD") ||
              method.includes("UPI") ||
              method.includes("CASHFREE") ||
              method.includes("ONLINE") ||
              method.includes("BANK"));
          if (isOnline && paid <= 0 && (pay === "pending" || pay === "")) {
            return false;
          }
          return true;
        });

        setOrders(visible.map(mapToUi));
      } catch (err) {
        console.error("Failed to load orders:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const totalOrders = orders.length;
  const totalOrderValue = orders
    .filter((o) => o.status !== "Cancelled")
    .reduce((sum, order) => sum + order.total, 0);

  const totalReceived = orders.reduce((sum, order) => {
    if (order.status === "Cancelled" && order.refundStatus === "completed") {
      return sum;
    }
    return sum + order.paid;
  }, 0);

  const totalPending = orders
    .filter((o) => o.status !== "Cancelled")
    .reduce((sum, order) => sum + Math.max(0, order.total - order.paid), 0);

  const activeOrders = orders.filter(
    (order) => order.status !== "Delivered" && order.status !== "Cancelled"
  ).length;

  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered"
  ).length;

  const pendingPayments = orders.filter(
    (order) =>
      order.status !== "Cancelled" && order.paymentStatus !== "Paid"
  ).length;

  const refundPendingCount = orders.filter(
    (o) => o.status === "Cancelled" && o.refundStatus === "pending"
  ).length;

  const filteredOrders = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    return orders.filter((order) => {
      const matchesSearch =
        !searchValue ||
        order.orderNo.toLowerCase().includes(searchValue) ||
        order.customer.toLowerCase().includes(searchValue) ||
        order.phone.includes(searchValue) ||
        order.product.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "All" || order.status === statusFilter;

      const matchesCategory =
        categoryFilter === "All Categories" ||
        order.category === categoryFilter;

      const matchesPayment =
        paymentFilter === "All" || order.paymentStatus === paymentFilter;

      return (
        matchesSearch && matchesStatus && matchesCategory && matchesPayment
      );
    });
  }, [orders, search, statusFilter, categoryFilter, paymentFilter]);

  const upcomingDeliveries = orders
    .filter(
      (order) => order.status !== "Delivered" && order.status !== "Cancelled"
    )
    .sort((a, b) =>
      (a.deliveryDate || "").localeCompare(b.deliveryDate || "")
    )
    .slice(0, 5);

  function calculatePaymentStatus(total: number, paid: number): PaymentStatus {
    if (paid <= 0) return "Pending";
    if (paid >= total) return "Paid";
    return "Partial";
  }

  async function handleAddOrder() {
    const quantity = Number(newOrder.quantity);
    const total = Number(newOrder.total);
    const paid = Number(newOrder.paid || 0);

    if (
      !newOrder.customer.trim() ||
      !newOrder.phone.trim() ||
      !newOrder.product.trim() ||
      !total ||
      total <= 0
    ) {
      alert(
        "Please enter customer, phone, product and a valid total amount."
      );
      return;
    }

    if (quantity <= 0) {
      alert("Quantity must be greater than zero.");
      return;
    }

    if (paid < 0 || paid > total) {
      alert("Paid amount cannot be greater than the order total.");
      return;
    }

    setSaving(true);
    try {
      const paymentStatus = calculatePaymentStatus(total, paid);
      const orderNo = `ORD-${Date.now().toString().slice(-6)}`;

      const payload = {
        orderNo,
        customerName: newOrder.customer.trim(),
        customer: newOrder.customer.trim(),
        phone: newOrder.phone.trim(),
        product: newOrder.product.trim(),
        productName: newOrder.product.trim(),
        category: newOrder.category,
        quantity,
        amount: total,
        total,
        paid,
        status: newOrder.status,
        paymentStatus,
        paymentMethod: "COD",
        deliveryDate: newOrder.deliveryDate,
        source: newOrder.source,
        notes: newOrder.notes.trim(),
        items: [
          {
            productId: "",
            name: newOrder.product.trim(),
            qty: quantity,
            price: total / quantity,
          },
        ],
      };

      const id = await createOrder(payload);

      const order: Order = {
        id,
        orderNo,
        orderDate: new Date().toISOString().slice(0, 10),
        customer: payload.customerName,
        phone: payload.phone,
        product: payload.product,
        category: payload.category,
        quantity,
        total,
        paid,
        status: newOrder.status,
        paymentStatus,
        paymentMethod: "COD",
        deliveryDate: payload.deliveryDate,
        source: payload.source,
        notes: payload.notes,
        refundStatus: "",
        refundAmount: 0,
      };

      setOrders((current) => [order, ...current]);
      setNewOrder({
        customer: "",
        phone: "",
        product: "",
        category: "Sofas",
        quantity: "1",
        total: "",
        paid: "",
        status: "New",
        deliveryDate: "",
        source: "Website",
        notes: "",
      });
      setShowAddModal(false);
    } catch (err) {
      console.error("Failed to create order:", err);
      alert("Unable to create order. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  async function handleCancelOrder(orderId: string) {
    const current = orders.find((o) => o.id === orderId);
    if (!current || current.status === "Cancelled") return;

    const paid = current.paid || 0;
    const msg =
      paid > 0
        ? `This order has ${formatCurrency(paid)} paid.\n\nCancel and mark refund as PENDING?\n(Complete the refund, then click “Mark refund completed” to clear balances.)`
        : "Cancel this order? No payment was received — pending will be cleared.";

    if (!window.confirm(msg)) return;

    setSaving(true);
    try {
      const result = await cancelOrder(orderId);

      setOrders((prev) =>
        prev.map((o) => {
          if (o.id !== orderId) return o;
          if (result.needsRefund) {
            return {
              ...o,
              status: "Cancelled" as OrderStatus,
              refundStatus: "pending",
              refundAmount: result.refundAmount,
            };
          }
          return {
            ...o,
            status: "Cancelled" as OrderStatus,
            paid: 0,
            paymentStatus: "Pending" as PaymentStatus,
            refundStatus: "not_required",
            refundAmount: 0,
          };
        })
      );

      setSelectedOrder((prev) => {
        if (!prev || prev.id !== orderId) return prev;
        if (result.needsRefund) {
          return {
            ...prev,
            status: "Cancelled",
            refundStatus: "pending",
            refundAmount: result.refundAmount,
          };
        }
        return {
          ...prev,
          status: "Cancelled",
          paid: 0,
          paymentStatus: "Pending",
          refundStatus: "not_required",
          refundAmount: 0,
        };
      });

      alert(result.message);
    } catch (err) {
      console.error(err);
      alert("Unable to cancel order.");
      try {
        const data = await getAllOrders();
        setOrders(data.map(mapToUi));
      } catch {
        /* ignore */
      }
    } finally {
      setSaving(false);
    }
  }

  async function handleMarkRefunded(orderId: string) {
    const current = orders.find((o) => o.id === orderId);
    if (!current) return;

    const amount = current.refundAmount || current.paid || 0;
    if (
      !window.confirm(
        `Confirm refund of ${formatCurrency(amount)} is completed?\nThis will clear paid balance on the order.`
      )
    ) {
      return;
    }

    setSaving(true);
    try {
      await markRefundComplete(orderId, {
        refundAmount: amount,
        note: "Refund marked complete by admin",
      });

      try {
        await recordRefund({
          orderId: current.id.startsWith("web-")
            ? current.id.slice(4)
            : current.id,
          orderNo: current.orderNo,
          customer: current.customer,
          phone: current.phone,
          amount,
          paymentMethod: current.paymentMethod || "Refund",
          notes: `Refund for cancelled order ${current.orderNo}`,
        });
      } catch (e) {
        console.warn("Refund payment record failed:", e);
      }

      setOrders((prev) =>
        prev.map((o) =>
          o.id === orderId
            ? {
                ...o,
                status: "Cancelled" as OrderStatus,
                paid: 0,
                paymentStatus: "Pending" as PaymentStatus,
                refundStatus: "completed",
                refundAmount: amount,
              }
            : o
        )
      );
      setSelectedOrder((prev) =>
        prev && prev.id === orderId
          ? {
              ...prev,
              paid: 0,
              paymentStatus: "Pending",
              refundStatus: "completed",
              refundAmount: amount,
            }
          : prev
      );

      alert("Refund recorded. Order balances cleared.");
    } catch (err) {
      console.error(err);
      alert("Unable to mark refund complete.");
    } finally {
      setSaving(false);
    }
  }

  async function updateOrderStatus(orderId: string, status: OrderStatus) {
    const current = orders.find((o) => o.id === orderId);
    if (!current) return;
    if (current.status === "Cancelled") return;

    if (status === "Cancelled") {
      await handleCancelOrder(orderId);
      return;
    }

    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status } : order
      )
    );

    setSelectedOrder((prev) =>
      prev && prev.id === orderId ? { ...prev, status } : prev
    );

    try {
      await updateOrder(orderId, { status });
    } catch (err) {
      console.error("Failed to update order status:", err);
      try {
        const data = await getAllOrders();
        setOrders(data.map(mapToUi));
      } catch {
        /* ignore */
      }
    }
  }

  async function markPaymentReceived(orderId: string) {
    const target = orders.find((o) => o.id === orderId);
    if (!target) return;
    if (target.status === "Cancelled") return;

    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId
          ? {
              ...order,
              paid: order.total,
              paymentStatus: "Paid" as PaymentStatus,
            }
          : order
      )
    );

    setSelectedOrder((prev) =>
      prev && prev.id === orderId
        ? { ...prev, paid: prev.total, paymentStatus: "Paid" }
        : prev
    );

    try {
      await updateOrder(orderId, {
        paid: target.total,
        paymentStatus: "Paid",
      });
    } catch (err) {
      console.error("Failed to mark payment:", err);
      try {
        const data = await getAllOrders();
        setOrders(data.map(mapToUi));
      } catch {
        /* ignore */
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-gray-900">
      <main className="mx-auto max-w-[1600px] px-3 py-5 sm:px-5 sm:py-7 lg:px-8">
        {/* Title + New Order beside heading */}
        <div className="mb-5 flex items-start justify-between gap-3 sm:mb-7">
          <div className="min-w-0 flex-1">
            <p className="mb-1 text-xs font-medium text-[#176b5b] sm:text-sm">
              Sales Management
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Orders
            </h1>
            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              Manage furniture orders, production, delivery, payments and
              refunds.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowAddModal(true)}
            className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125748] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
          >
            <span className="text-base sm:text-lg">+</span>
            New Order
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-5">
          <SummaryCard
            title="Total Orders"
            value={loading ? "…" : String(totalOrders)}
            subtitle="All order records"
            icon="▤"
            iconClass="bg-[#eef7f4] text-[#176b5b]"
          />
          <SummaryCard
            title="Order Value"
            value={loading ? "…" : formatCurrency(totalOrderValue)}
            subtitle="Active sales value"
            icon="₹"
            iconClass="bg-blue-50 text-blue-700"
          />
          <SummaryCard
            title="Received"
            value={loading ? "…" : formatCurrency(totalReceived)}
            subtitle="Payments held / received"
            icon="✓"
            iconClass="bg-emerald-50 text-emerald-700"
          />
          <SummaryCard
            title="Pending"
            value={loading ? "…" : formatCurrency(totalPending)}
            subtitle={`${pendingPayments} payment${
              pendingPayments !== 1 ? "s" : ""
            } pending`}
            icon="!"
            iconClass="bg-amber-50 text-amber-700"
          />
          <SummaryCard
            title="Active Orders"
            value={loading ? "…" : String(activeOrders)}
            subtitle={
              refundPendingCount > 0
                ? `${deliveredOrders} delivered · ${refundPendingCount} refund pending`
                : `${deliveredOrders} delivered`
            }
            icon="◷"
            iconClass="bg-purple-50 text-purple-700"
          />
        </div>

        <div className="mt-5 grid gap-5 sm:mt-6 sm:gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
          <section className="min-w-0 rounded-2xl border border-[#e4e2da] bg-white shadow-sm">
            <div className="border-b border-[#e4e2da] p-3 sm:p-5">
              <div className="flex flex-col gap-3">
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 sm:left-4">
                    ⌕
                  </span>
                  <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search order, customer, phone or product..."
                    className="w-full rounded-xl border border-gray-200 bg-[#fafaf8] py-2.5 pl-9 pr-3 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10 sm:py-3 sm:pl-11 sm:pr-4"
                  />
                </div>

                {/* 3 filters — one line */}
                <div className="flex w-full gap-2 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:px-3 sm:text-sm"
                  >
                    <option value="All">All Order Status</option>
                    {orderStatuses.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>

                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:px-3 sm:text-sm"
                  >
                    {categories.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>

                  <select
                    value={paymentFilter}
                    onChange={(e) => setPaymentFilter(e.target.value)}
                    className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:px-3 sm:text-sm"
                  >
                    <option value="All">All Payment Status</option>
                    <option value="Paid">Paid</option>
                    <option value="Partial">Partial</option>
                    <option value="Pending">Pending</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Desktop table */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[900px]">
                <thead>
                  <tr className="border-b border-[#e4e2da] bg-[#fafaf8] text-left">
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5">
                      Customer
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5">
                      Product
                    </th>
                    <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5">
                      Qty
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5">
                      Total
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5">
                      Payment
                    </th>
                    <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5">
                      Status
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td
                        colSpan={7}
                        className="px-5 py-14 text-center text-sm text-gray-500"
                      >
                        Loading orders…
                      </td>
                    </tr>
                  ) : filteredOrders.length === 0 ? (
                    <tr>
                      <td
                        colSpan={7}
                        className="px-5 py-14 text-center text-sm text-gray-500"
                      >
                        No orders found
                      </td>
                    </tr>
                  ) : (
                    filteredOrders.map((order) => (
                      <tr
                        key={order.id}
                        className="border-b border-[#efeee9] transition hover:bg-[#fafaf8]"
                      >
                        <td className="px-4 py-3 sm:px-5 sm:py-4">
                          <p className="font-medium text-gray-900">
                            {order.customer}
                          </p>
                          <p className="mt-0.5 text-xs text-gray-500">
                            {order.phone}
                          </p>
                          <p className="mt-0.5 text-[10px] text-gray-400">
                            {order.orderNo}
                          </p>
                        </td>
                        <td className="px-4 py-3 sm:px-5 sm:py-4">
                          <p className="text-sm font-medium text-gray-900">
                            {order.product}
                          </p>
                          <p className="mt-0.5 text-xs text-gray-500">
                            {order.category}
                          </p>
                        </td>
                        <td className="px-4 py-3 text-center text-sm sm:px-5 sm:py-4">
                          {order.quantity}
                        </td>
                        <td className="px-4 py-3 text-right sm:px-5 sm:py-4">
                          <p className="text-sm font-semibold text-gray-900">
                            {formatCurrency(order.total)}
                          </p>
                          <p className="mt-0.5 text-xs text-gray-500">
                            Paid {formatCurrency(order.paid)}
                          </p>
                        </td>
                        <td className="px-4 py-3 sm:px-5 sm:py-4">
                          <span
                            className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${getPaymentClasses(
                              order.paymentStatus
                            )}`}
                          >
                            {order.paymentStatus}
                          </span>
                          <p className="mt-1 text-[10px] text-gray-400">
                            {paymentMethodLabel(order.paymentMethod)}
                          </p>
                        </td>
                        <td className="px-4 py-3 text-center sm:px-5 sm:py-4">
                          <span
                            className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusClasses(
                              order.status
                            )}`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right sm:px-5 sm:py-4">
                          <button
                            type="button"
                            onClick={() => setSelectedOrder(order)}
                            className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:border-[#176b5b] hover:text-[#176b5b]"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="space-y-3 p-3 md:hidden">
              {loading ? (
                <p className="py-10 text-center text-sm text-gray-500">
                  Loading orders…
                </p>
              ) : filteredOrders.length === 0 ? (
                <p className="py-10 text-center text-sm text-gray-500">
                  No orders found
                </p>
              ) : (
                filteredOrders.map((order) => (
                  <button
                    key={order.id}
                    type="button"
                    onClick={() => setSelectedOrder(order)}
                    className="w-full rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3 text-left"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="truncate font-semibold text-gray-900">
                          {order.customer}
                        </p>
                        <p className="mt-0.5 text-xs text-gray-500">
                          {order.phone}
                        </p>
                      </div>
                      <span
                        className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium ${getStatusClasses(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <p className="mt-2 truncate text-sm text-gray-800">
                      {order.product}
                    </p>
                    <div className="mt-2 flex items-center justify-between gap-2 text-xs">
                      <span className="font-semibold text-gray-900">
                        {formatCurrency(order.total)}
                      </span>
                      <span
                        className={`rounded-full px-2 py-0.5 font-medium ${getPaymentClasses(
                          order.paymentStatus
                        )}`}
                      >
                        {order.paymentStatus}
                      </span>
                    </div>
                  </button>
                ))
              )}
            </div>

            <div className="flex items-center justify-between border-t border-[#e4e2da] px-3 py-3 sm:px-5 sm:py-4">
              <p className="text-xs text-gray-500 sm:text-sm">
                Showing{" "}
                <span className="font-semibold text-gray-900">
                  {filteredOrders.length}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900">
                  {orders.length}
                </span>{" "}
                orders
              </p>
            </div>
          </section>

          <aside className="space-y-5 sm:space-y-6">
            <div className="rounded-2xl border border-[#e4e2da] bg-white p-4 shadow-sm sm:p-5">
              <h2 className="font-semibold text-gray-900">
                Upcoming deliveries
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Active orders by delivery date
              </p>
              <div className="mt-4 space-y-3">
                {upcomingDeliveries.length === 0 ? (
                  <p className="text-sm text-gray-500">No active deliveries.</p>
                ) : (
                  upcomingDeliveries.map((order) => (
                    <button
                      key={order.id}
                      type="button"
                      onClick={() => setSelectedOrder(order)}
                      className="w-full rounded-xl border border-gray-100 bg-[#fafaf8] p-3 text-left hover:bg-white"
                    >
                      <p className="truncate text-sm font-medium text-gray-900">
                        {order.customer}
                      </p>
                      <p className="mt-0.5 truncate text-xs text-gray-500">
                        {order.product}
                      </p>
                      <p className="mt-1 text-xs text-[#176b5b]">
                        {order.deliveryDate
                          ? formatDate(order.deliveryDate)
                          : "Date TBD"}
                      </p>
                    </button>
                  ))
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-[#e4e2da] bg-white p-4 shadow-sm sm:p-5">
              <h2 className="font-semibold text-gray-900">Status overview</h2>
              <div className="mt-4 space-y-3">
                {orderStatuses.map((status) => {
                  const count = orders.filter((o) => o.status === status)
                    .length;
                  return (
                    <div
                      key={status}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${
                            status === "Delivered"
                              ? "bg-emerald-500"
                              : status === "Cancelled"
                              ? "bg-red-500"
                              : status === "Ready"
                              ? "bg-purple-500"
                              : status === "In Production"
                              ? "bg-blue-500"
                              : status === "Confirmed"
                              ? "bg-[#176b5b]"
                              : "bg-amber-500"
                          }`}
                        />
                        <span className="text-sm text-gray-600">{status}</span>
                      </div>
                      <span className="font-semibold text-gray-900">
                        {count}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* ADD ORDER MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#e4e2da] px-4 py-4 sm:px-6 sm:py-5">
              <div>
                <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                  New Order
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Create a new furniture customer order.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-6">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Customer Name
                </label>
                <input
                  value={newOrder.customer}
                  onChange={(e) =>
                    setNewOrder({ ...newOrder, customer: e.target.value })
                  }
                  placeholder="Customer name"
                  className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Phone / WhatsApp
                </label>
                <input
                  value={newOrder.phone}
                  onChange={(e) =>
                    setNewOrder({ ...newOrder, phone: e.target.value })
                  }
                  placeholder="Phone number"
                  className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Product
                </label>
                <input
                  value={newOrder.product}
                  onChange={(e) =>
                    setNewOrder({ ...newOrder, product: e.target.value })
                  }
                  placeholder="e.g. Modern 3 Seater Sofa"
                  className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  value={newOrder.category}
                  onChange={(e) =>
                    setNewOrder({ ...newOrder, category: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                >
                  {categories
                    .filter((c) => c !== "All Categories")
                    .map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Quantity
                </label>
                <input
                  type="number"
                  min="1"
                  value={newOrder.quantity}
                  onChange={(e) =>
                    setNewOrder({ ...newOrder, quantity: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Total Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                    ₹
                  </span>
                  <input
                    type="number"
                    min="0"
                    value={newOrder.total}
                    onChange={(e) =>
                      setNewOrder({ ...newOrder, total: e.target.value })
                    }
                    placeholder="0"
                    className="w-full rounded-xl border border-gray-200 py-2.5 pl-8 pr-3 text-sm outline-none focus:border-[#176b5b]"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Paid Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                    ₹
                  </span>
                  <input
                    type="number"
                    min="0"
                    value={newOrder.paid}
                    onChange={(e) =>
                      setNewOrder({ ...newOrder, paid: e.target.value })
                    }
                    placeholder="0"
                    className="w-full rounded-xl border border-gray-200 py-2.5 pl-8 pr-3 text-sm outline-none focus:border-[#176b5b]"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Order Status
                </label>
                <select
                  value={newOrder.status}
                  onChange={(e) =>
                    setNewOrder({
                      ...newOrder,
                      status: e.target.value as OrderStatus,
                    })
                  }
                  className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                >
                  {orderStatuses
                    .filter((s) => s !== "Cancelled")
                    .map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Delivery Date
                </label>
                <input
                  type="date"
                  value={newOrder.deliveryDate}
                  onChange={(e) =>
                    setNewOrder({ ...newOrder, deliveryDate: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Source
                </label>
                <select
                  value={newOrder.source}
                  onChange={(e) =>
                    setNewOrder({ ...newOrder, source: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                >
                  <option>Website</option>
                  <option>Product Page</option>
                  <option>Instagram</option>
                  <option>Facebook</option>
                  <option>Google</option>
                  <option>WhatsApp</option>
                  <option>Walk-in</option>
                  <option>Referral</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Notes
                </label>
                <textarea
                  rows={3}
                  value={newOrder.notes}
                  onChange={(e) =>
                    setNewOrder({ ...newOrder, notes: e.target.value })
                  }
                  placeholder="Optional order notes..."
                  className="w-full resize-none rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                />
              </div>
            </div>
            <div className="flex justify-end gap-3 border-t border-[#e4e2da] bg-[#fafaf8] px-4 py-4 sm:px-6">
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleAddOrder}
                disabled={saving}
                className="rounded-xl bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125748] disabled:opacity-60"
              >
                {saving ? "Creating…" : "Create Order"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ORDER DETAIL MODAL */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#e4e2da] px-4 py-4 sm:px-6 sm:py-5">
              <div>
                <p className="text-xs font-semibold text-[#176b5b]">
                  {selectedOrder.orderNo}
                </p>
                <h2 className="mt-1 text-lg font-bold text-gray-900 sm:text-xl">
                  Order Details
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedOrder(null)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              >
                ×
              </button>
            </div>

            <div className="space-y-5 p-4 sm:p-6">
              <div className="rounded-xl bg-[#fafaf8] p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Customer
                </p>
                <div className="mt-3 flex flex-col justify-between gap-3 sm:flex-row">
                  <div>
                    <p className="font-semibold text-gray-900">
                      {selectedOrder.customer}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {selectedOrder.phone}
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-xs text-gray-500">Order Date</p>
                    <p className="mt-1 text-sm font-medium text-gray-900">
                      {formatDate(selectedOrder.orderDate)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-100 p-4">
                  <p className="text-xs text-gray-500">Product</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {selectedOrder.product}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    {selectedOrder.category}
                  </p>
                </div>
                <div className="rounded-xl border border-gray-100 p-4">
                  <p className="text-xs text-gray-500">Quantity</p>
                  <p className="mt-1 text-lg font-bold text-gray-900">
                    {selectedOrder.quantity}
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
                <div className="rounded-xl bg-[#fafaf8] p-4">
                  <p className="text-xs text-gray-500">Order Total</p>
                  <p className="mt-1 text-lg font-bold text-gray-900">
                    {formatCurrency(selectedOrder.total)}
                  </p>
                </div>
                <div className="rounded-xl bg-emerald-50 p-4">
                  <p className="text-xs text-emerald-600">Paid</p>
                  <p className="mt-1 text-lg font-bold text-emerald-700">
                    {formatCurrency(selectedOrder.paid)}
                  </p>
                </div>
                <div className="rounded-xl bg-red-50 p-4">
                  <p className="text-xs text-red-600">Pending</p>
                  <p className="mt-1 text-lg font-bold text-red-700">
                    {formatCurrency(
                      Math.max(0, selectedOrder.total - selectedOrder.paid)
                    )}
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 p-4">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-xs text-gray-500">Order Status</p>
                    <span
                      className={`mt-2 inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusClasses(
                        selectedOrder.status
                      )}`}
                    >
                      {selectedOrder.status}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Payment Status</p>
                    <span
                      className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${getPaymentClasses(
                        selectedOrder.paymentStatus
                      )}`}
                    >
                      {selectedOrder.paymentStatus}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Delivery Date</p>
                    <p className="mt-2 text-sm font-semibold text-gray-900">
                      {selectedOrder.deliveryDate
                        ? formatDate(selectedOrder.deliveryDate)
                        : "Not scheduled"}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-semibold text-gray-900">
                  Update Order Status
                </p>

                {selectedOrder.status === "Cancelled" ? (
                  <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3">
                    <p className="text-sm font-semibold text-red-800">
                      Order cancelled
                    </p>
                    <p className="mt-1 text-xs leading-5 text-red-700">
                      Status is locked. Other workflow steps cannot be applied
                      to a cancelled order.
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {orderStatuses.map((status) => (
                      <button
                        key={status}
                        type="button"
                        disabled={saving}
                        onClick={() =>
                          updateOrderStatus(selectedOrder.id, status)
                        }
                        className={`rounded-lg border px-3 py-2 text-xs font-medium transition disabled:opacity-60 ${
                          selectedOrder.status === status
                            ? "border-[#176b5b] bg-[#eef7f4] text-[#176b5b]"
                            : status === "Cancelled"
                            ? "border-red-200 bg-white text-red-600 hover:border-red-400 hover:bg-red-50"
                            : "border-gray-200 bg-white text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {selectedOrder.status === "Cancelled" ? (
                <div className="rounded-xl border border-red-100 bg-red-50 p-4">
                  <p className="text-sm font-semibold text-red-800">
                    Payment on cancelled order
                  </p>

                  {selectedOrder.refundStatus === "pending" &&
                  (selectedOrder.paid > 0 ||
                    (selectedOrder.refundAmount || 0) > 0) ? (
                    <div className="mt-3 space-y-3">
                      <p className="text-xs leading-5 text-red-700">
                        Refund pending:{" "}
                        <span className="font-semibold">
                          {formatCurrency(
                            selectedOrder.refundAmount || selectedOrder.paid
                          )}
                        </span>
                        . Complete the refund, then mark it done.
                      </p>
                      <button
                        type="button"
                        disabled={saving}
                        onClick={() => handleMarkRefunded(selectedOrder.id)}
                        className="rounded-xl bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125748] disabled:opacity-60"
                      >
                        {saving ? "Saving…" : "Mark refund completed"}
                      </button>
                    </div>
                  ) : selectedOrder.refundStatus === "completed" ? (
                    <p className="mt-1 text-xs leading-5 text-red-700">
                      Refund of{" "}
                      {formatCurrency(selectedOrder.refundAmount || 0)}{" "}
                      recorded. Balances cleared.
                    </p>
                  ) : (
                    <p className="mt-1 text-xs leading-5 text-red-700">
                      No payment was received. Pending balance cleared.
                    </p>
                  )}
                </div>
              ) : selectedOrder.paymentStatus === "Paid" ? (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                  <p className="text-sm font-semibold text-emerald-800">
                    Payment received in full
                  </p>
                  <p className="mt-1 text-xs text-emerald-700">
                    {formatCurrency(selectedOrder.paid || selectedOrder.total)}{" "}
                    · {paymentMethodLabel(selectedOrder.paymentMethod)}
                  </p>
                </div>
              ) : isCodOrder(selectedOrder) ? (
                <div className="flex flex-col justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-sm font-semibold text-amber-800">
                      Cash on delivery — payment pending
                    </p>
                    <p className="mt-1 text-xs text-amber-700">
                      Outstanding:{" "}
                      {formatCurrency(
                        selectedOrder.total - selectedOrder.paid
                      )}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => markPaymentReceived(selectedOrder.id)}
                    className="rounded-xl bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125748]"
                  >
                    Mark Payment Received
                  </button>
                </div>
              ) : (
                <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                  <p className="text-sm font-semibold text-blue-800">
                    Online payment pending
                  </p>
                  <p className="mt-1 text-xs leading-5 text-blue-700">
                    Method: {paymentMethodLabel(selectedOrder.paymentMethod)}.
                    Updates when Cashfree confirms, or mark paid manually.
                  </p>
                  <button
                    type="button"
                    onClick={() => markPaymentReceived(selectedOrder.id)}
                    className="mt-3 rounded-lg border border-blue-200 bg-white px-3 py-2 text-xs font-semibold text-blue-800 hover:bg-blue-50"
                  >
                    Mark as paid manually
                  </button>
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs text-gray-500">Order Source</p>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {selectedOrder.source}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Payment method</p>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {paymentMethodLabel(selectedOrder.paymentMethod)}
                  </p>
                </div>
              </div>

              {selectedOrder.notes && (
                <div className="rounded-xl border border-gray-100 p-4">
                  <p className="text-xs text-gray-500">Notes</p>
                  <p className="mt-1 text-sm text-gray-700">
                    {selectedOrder.notes}
                  </p>
                </div>
              )}
            </div>

            <div className="flex justify-end border-t border-[#e4e2da] bg-[#fafaf8] px-4 py-4 sm:px-6">
              <button
                type="button"
                onClick={() => setSelectedOrder(null)}
                className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
