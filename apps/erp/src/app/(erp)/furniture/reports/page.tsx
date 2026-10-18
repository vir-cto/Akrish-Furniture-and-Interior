// "use client";

// import { useMemo, useState } from "react";

// type ReportType =
//   | "Sales"
//   | "Orders"
//   | "Payments"
//   | "Products"
//   | "Enquiries";

// type Sale = {
//   month: string;
//   sales: number;
//   orders: number;
//   profit: number;
// };

// type Order = {
//   id: string;
//   customer: string;
//   product: string;
//   category: string;
//   amount: number;
//   status: string;
//   payment: string;
//   date: string;
// };

// type Payment = {
//   id: string;
//   customer: string;
//   order: string;
//   amount: number;
//   received: number;
//   pending: number;
//   status: string;
//   method: string;
//   date: string;
// };

// type Product = {
//   name: string;
//   category: string;
//   sales: number;
//   revenue: number;
//   stock: number;
// };

// type Enquiry = {
//   source: string;
//   enquiries: number;
//   converted: number;
// };

// const salesData: Sale[] = [
//   {
//     month: "May",
//     sales: 520000,
//     orders: 32,
//     profit: 142000,
//   },
//   {
//     month: "Jun",
//     sales: 610000,
//     orders: 38,
//     profit: 171000,
//   },
//   {
//     month: "Jul",
//     sales: 685000,
//     orders: 42,
//     profit: 194000,
//   },
//   {
//     month: "Aug",
//     sales: 742000,
//     orders: 47,
//     profit: 218000,
//   },
//   {
//     month: "Sep",
//     sales: 810000,
//     orders: 51,
//     profit: 239000,
//   },
//   {
//     month: "Oct",
//     sales: 925000,
//     orders: 58,
//     profit: 278000,
//   },
// ];

// const orders: Order[] = [
//   {
//     id: "ORD-1001",
//     customer: "Rahul Kumar",
//     product: "Modern L-Shape Sofa",
//     category: "Sofa",
//     amount: 85000,
//     status: "Delivered",
//     payment: "Paid",
//     date: "2026-10-05",
//   },
//   {
//     id: "ORD-1002",
//     customer: "Priya Sharma",
//     product: "Premium King Size Bed",
//     category: "Bed",
//     amount: 72000,
//     status: "Production",
//     payment: "Partial",
//     date: "2026-10-04",
//   },
//   {
//     id: "ORD-1003",
//     customer: "Suresh Reddy",
//     product: "6 Seater Dining Table",
//     category: "Dining Table",
//     amount: 58000,
//     status: "Confirmed",
//     payment: "Paid",
//     date: "2026-10-03",
//   },
//   {
//     id: "ORD-1004",
//     customer: "Anjali Rao",
//     product: "Luxury Accent Chair",
//     category: "Chair",
//     amount: 18500,
//     status: "Delivered",
//     payment: "Paid",
//     date: "2026-10-02",
//   },
//   {
//     id: "ORD-1005",
//     customer: "Kiran Kumar",
//     product: "3 Door Sliding Wardrobe",
//     category: "Wardrobe",
//     amount: 65000,
//     status: "Production",
//     payment: "Partial",
//     date: "2026-10-01",
//   },
//   {
//     id: "ORD-1006",
//     customer: "Meghana Devi",
//     product: "Modern Floating TV Unit",
//     category: "TV Unit",
//     amount: 32000,
//     status: "Delivered",
//     payment: "Paid",
//     date: "2026-09-30",
//   },
//   {
//     id: "ORD-1007",
//     customer: "Vamsi Krishna",
//     product: "Executive Study Table",
//     category: "Study Table",
//     amount: 27500,
//     status: "Confirmed",
//     payment: "Pending",
//     date: "2026-09-29",
//   },
//   {
//     id: "ORD-1008",
//     customer: "Sneha Reddy",
//     product: "Premium Office Workstation",
//     category: "Office Furniture",
//     amount: 42000,
//     status: "Production",
//     payment: "Paid",
//     date: "2026-09-28",
//   },
// ];

// const payments: Payment[] = [
//   {
//     id: "PAY-001",
//     customer: "Rahul Kumar",
//     order: "ORD-1001",
//     amount: 85000,
//     received: 85000,
//     pending: 0,
//     status: "Received",
//     method: "UPI",
//     date: "2026-10-05",
//   },
//   {
//     id: "PAY-002",
//     customer: "Priya Sharma",
//     order: "ORD-1002",
//     amount: 72000,
//     received: 36000,
//     pending: 36000,
//     status: "Partial",
//     method: "Bank Transfer",
//     date: "2026-10-04",
//   },
//   {
//     id: "PAY-003",
//     customer: "Suresh Reddy",
//     order: "ORD-1003",
//     amount: 58000,
//     received: 58000,
//     pending: 0,
//     status: "Received",
//     method: "UPI",
//     date: "2026-10-03",
//   },
//   {
//     id: "PAY-004",
//     customer: "Anjali Rao",
//     order: "ORD-1004",
//     amount: 18500,
//     received: 18500,
//     pending: 0,
//     status: "Received",
//     method: "Cash",
//     date: "2026-10-02",
//   },
//   {
//     id: "PAY-005",
//     customer: "Kiran Kumar",
//     order: "ORD-1005",
//     amount: 65000,
//     received: 30000,
//     pending: 35000,
//     status: "Partial",
//     method: "Bank Transfer",
//     date: "2026-10-01",
//   },
//   {
//     id: "PAY-006",
//     customer: "Vamsi Krishna",
//     order: "ORD-1007",
//     amount: 27500,
//     received: 0,
//     pending: 27500,
//     status: "Pending",
//     method: "UPI",
//     date: "2026-09-29",
//   },
// ];

// const products: Product[] = [
//   {
//     name: "Modern L-Shape Sofa",
//     category: "Sofa",
//     sales: 18,
//     revenue: 1530000,
//     stock: 8,
//   },
//   {
//     name: "Premium King Size Bed",
//     category: "Bed",
//     sales: 12,
//     revenue: 864000,
//     stock: 5,
//   },
//   {
//     name: "6 Seater Dining Table",
//     category: "Dining Table",
//     sales: 10,
//     revenue: 580000,
//     stock: 2,
//   },
//   {
//     name: "Luxury Accent Chair",
//     category: "Chair",
//     sales: 26,
//     revenue: 481000,
//     stock: 14,
//   },
//   {
//     name: "Modern Floating TV Unit",
//     category: "TV Unit",
//     sales: 15,
//     revenue: 480000,
//     stock: 7,
//   },
//   {
//     name: "Executive Study Table",
//     category: "Study Table",
//     sales: 9,
//     revenue: 247500,
//     stock: 3,
//   },
// ];

// const enquiries: Enquiry[] = [
//   {
//     source: "Website",
//     enquiries: 48,
//     converted: 16,
//   },
//   {
//     source: "Product Page",
//     enquiries: 42,
//     converted: 14,
//   },
//   {
//     source: "Instagram",
//     enquiries: 36,
//     converted: 9,
//   },
//   {
//     source: "WhatsApp",
//     enquiries: 31,
//     converted: 12,
//   },
//   {
//     source: "Google",
//     enquiries: 25,
//     converted: 7,
//   },
//   {
//     source: "Referral",
//     enquiries: 18,
//     converted: 8,
//   },
//   {
//     source: "Walk-in",
//     enquiries: 22,
//     converted: 11,
//   },
// ];

// const reportTypes: ReportType[] = [
//   "Sales",
//   "Orders",
//   "Payments",
//   "Products",
//   "Enquiries",
// ];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function formatCompactCurrency(value: number) {
//   if (value >= 10000000) {
//     return `₹${(value / 10000000).toFixed(1)}Cr`;
//   }

//   if (value >= 100000) {
//     return `₹${(value / 100000).toFixed(1)}L`;
//   }

//   if (value >= 1000) {
//     return `₹${(value / 1000).toFixed(0)}K`;
//   }

//   return formatCurrency(value);
// }

// function getStatusClass(status: string) {
//   switch (status) {
//     case "Delivered":
//     case "Received":
//     case "Paid":
//       return "bg-[#eaf5f1] text-[#176b5b]";

//     case "Production":
//     case "Partial":
//       return "bg-[#fff5df] text-[#a36a00]";

//     case "Confirmed":
//       return "bg-[#eef2ff] text-[#4f46a5]";

//     case "Pending":
//       return "bg-[#fdecec] text-[#b42318]";

//     default:
//       return "bg-gray-100 text-gray-600";
//   }
// }

// export default function FurnitureReportsPage() {
//   const [activeReport, setActiveReport] = useState<ReportType>("Sales");
//   const [dateRange, setDateRange] = useState("Last 6 Months");
//   const [categoryFilter, setCategoryFilter] = useState("All Categories");
//   const [search, setSearch] = useState("");

//   const totalSales = salesData.reduce((sum, item) => sum + item.sales, 0);
//   const totalProfit = salesData.reduce((sum, item) => sum + item.profit, 0);
//   const totalOrders = salesData.reduce((sum, item) => sum + item.orders, 0);

//   const receivedPayments = payments.reduce(
//     (sum, payment) => sum + payment.received,
//     0
//   );

//   const pendingPayments = payments.reduce(
//     (sum, payment) => sum + payment.pending,
//     0
//   );

//   const averageOrderValue =
//     totalOrders > 0 ? totalSales / totalOrders : 0;

//   const conversionRate = useMemo(() => {
//     const totalEnquiries = enquiries.reduce(
//       (sum, item) => sum + item.enquiries,
//       0
//     );

//     const totalConverted = enquiries.reduce(
//       (sum, item) => sum + item.converted,
//       0
//     );

//     return totalEnquiries
//       ? (totalConverted / totalEnquiries) * 100
//       : 0;
//   }, []);

//   const maxSales = Math.max(...salesData.map((item) => item.sales));

//   const filteredOrders = orders.filter((order) => {
//     const searchText = search.toLowerCase().trim();

//     const matchesSearch =
//       !searchText ||
//       order.id.toLowerCase().includes(searchText) ||
//       order.customer.toLowerCase().includes(searchText) ||
//       order.product.toLowerCase().includes(searchText);

//     const matchesCategory =
//       categoryFilter === "All Categories" ||
//       order.category === categoryFilter;

//     return matchesSearch && matchesCategory;
//   });

//   const filteredProducts = products.filter((product) => {
//     const searchText = search.toLowerCase().trim();

//     const matchesSearch =
//       !searchText ||
//       product.name.toLowerCase().includes(searchText) ||
//       product.category.toLowerCase().includes(searchText);

//     const matchesCategory =
//       categoryFilter === "All Categories" ||
//       product.category === categoryFilter;

//     return matchesSearch && matchesCategory;
//   });

//   const filteredPayments = payments.filter((payment) => {
//     const searchText = search.toLowerCase().trim();

//     return (
//       !searchText ||
//       payment.id.toLowerCase().includes(searchText) ||
//       payment.customer.toLowerCase().includes(searchText) ||
//       payment.order.toLowerCase().includes(searchText)
//     );
//   });

//   const handlePrint = () => {
//     window.print();
//   };

//   const renderSalesReport = () => {
//     return (
//       <div className="space-y-6">
//         {/* Sales Summary */}
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Total Sales</p>
//             <p className="mt-2 text-2xl font-bold text-[#222]">
//               {formatCompactCurrency(totalSales)}
//             </p>
//             <p className="mt-1 text-xs text-[#176b5b]">
//               +14.8% compared with previous period
//             </p>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Total Profit</p>
//             <p className="mt-2 text-2xl font-bold text-[#176b5b]">
//               {formatCompactCurrency(totalProfit)}
//             </p>
//             <p className="mt-1 text-xs text-[#176b5b]">
//               {((totalProfit / totalSales) * 100).toFixed(1)}% margin
//             </p>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Total Orders</p>
//             <p className="mt-2 text-2xl font-bold text-[#222]">
//               {totalOrders}
//             </p>
//             <p className="mt-1 text-xs text-[#176b5b]">
//               +12.3% order growth
//             </p>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Average Order Value</p>
//             <p className="mt-2 text-2xl font-bold text-[#222]">
//               {formatCompactCurrency(averageOrderValue)}
//             </p>
//             <p className="mt-1 text-xs text-gray-500">
//               Per completed order
//             </p>
//           </div>
//         </div>

//         {/* Sales Chart */}
//         <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
//             <div>
//               <h2 className="text-base font-bold text-[#222]">
//                 Sales Performance
//               </h2>
//               <p className="mt-1 text-xs text-gray-500">
//                 Monthly sales and profit performance.
//               </p>
//             </div>

//             <div className="flex gap-4 text-xs text-gray-500">
//               <span className="flex items-center gap-2">
//                 <span className="h-2.5 w-2.5 rounded-full bg-[#176b5b]" />
//                 Sales
//               </span>

//               <span className="flex items-center gap-2">
//                 <span className="h-2.5 w-2.5 rounded-full bg-[#c89b62]" />
//                 Profit
//               </span>
//             </div>
//           </div>

//           <div className="mt-8">
//             <div className="flex h-[280px] items-end gap-3 border-b border-l border-[#e4e2da] px-3 pb-0 sm:gap-5">
//               {salesData.map((item) => {
//                 const salesHeight = (item.sales / maxSales) * 230;
//                 const profitHeight = (item.profit / maxSales) * 230;

//                 return (
//                   <div
//                     key={item.month}
//                     className="flex h-full flex-1 items-end justify-center gap-1"
//                   >
//                     <div className="flex h-full items-end">
//                       <div
//                         title={`${item.month} Sales: ${formatCurrency(
//                           item.sales
//                         )}`}
//                         className="w-5 rounded-t-md bg-[#176b5b] transition hover:opacity-80 sm:w-8"
//                         style={{
//                           height: `${salesHeight}px`,
//                         }}
//                       />
//                     </div>

//                     <div className="flex h-full items-end">
//                       <div
//                         title={`${item.month} Profit: ${formatCurrency(
//                           item.profit
//                         )}`}
//                         className="w-5 rounded-t-md bg-[#c89b62] transition hover:opacity-80 sm:w-8"
//                         style={{
//                           height: `${profitHeight}px`,
//                         }}
//                       />
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             <div className="mt-3 flex gap-3 pl-3 sm:gap-5">
//               {salesData.map((item) => (
//                 <div
//                   key={item.month}
//                   className="flex-1 text-center text-xs text-gray-500"
//                 >
//                   {item.month}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Monthly Table */}
//         <div className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="border-b border-[#e4e2da] px-5 py-4">
//             <h2 className="text-base font-bold text-[#222]">
//               Monthly Sales Breakdown
//             </h2>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[700px] text-left">
//               <thead className="bg-[#fafaf8]">
//                 <tr>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Month
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Orders
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Sales
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Profit
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Margin
//                   </th>
//                 </tr>
//               </thead>

//               <tbody className="divide-y divide-[#eeece5]">
//                 {salesData.map((item) => (
//                   <tr key={item.month}>
//                     <td className="px-5 py-4 text-sm font-medium text-gray-800">
//                       {item.month}
//                     </td>
//                     <td className="px-5 py-4 text-sm text-gray-600">
//                       {item.orders}
//                     </td>
//                     <td className="px-5 py-4 text-sm font-semibold text-gray-800">
//                       {formatCurrency(item.sales)}
//                     </td>
//                     <td className="px-5 py-4 text-sm font-semibold text-[#176b5b]">
//                       {formatCurrency(item.profit)}
//                     </td>
//                     <td className="px-5 py-4 text-sm text-gray-600">
//                       {((item.profit / item.sales) * 100).toFixed(1)}%
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderOrdersReport = () => {
//     const delivered = orders.filter(
//       (order) => order.status === "Delivered"
//     ).length;

//     const production = orders.filter(
//       (order) => order.status === "Production"
//     ).length;

//     const confirmed = orders.filter(
//       (order) => order.status === "Confirmed"
//     ).length;

//     const orderValue = orders.reduce(
//       (sum, order) => sum + order.amount,
//       0
//     );

//     return (
//       <div className="space-y-6">
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Total Orders</p>
//             <p className="mt-2 text-2xl font-bold text-[#222]">
//               {orders.length}
//             </p>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Order Value</p>
//             <p className="mt-2 text-2xl font-bold text-[#176b5b]">
//               {formatCompactCurrency(orderValue)}
//             </p>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Delivered</p>
//             <p className="mt-2 text-2xl font-bold text-[#176b5b]">
//               {delivered}
//             </p>
//             <p className="mt-1 text-xs text-gray-400">
//               {((delivered / orders.length) * 100).toFixed(0)}% of orders
//             </p>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">In Progress</p>
//             <p className="mt-2 text-2xl font-bold text-[#a36a00]">
//               {production + confirmed}
//             </p>
//             <p className="mt-1 text-xs text-gray-400">
//               {production} production • {confirmed} confirmed
//             </p>
//           </div>
//         </div>

//         <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <h2 className="text-base font-bold text-[#222]">
//             Order Status Overview
//           </h2>

//           <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
//             {[
//               {
//                 label: "Delivered",
//                 value: delivered,
//                 className: "bg-[#176b5b]",
//               },
//               {
//                 label: "Production",
//                 value: production,
//                 className: "bg-[#c89b62]",
//               },
//               {
//                 label: "Confirmed",
//                 value: confirmed,
//                 className: "bg-[#777]",
//               },
//             ].map((item) => (
//               <div
//                 key={item.label}
//                 className="rounded-lg border border-[#e4e2da] p-4"
//               >
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm text-gray-500">
//                     {item.label}
//                   </span>

//                   <span className="text-lg font-bold text-gray-800">
//                     {item.value}
//                   </span>
//                 </div>

//                 <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
//                   <div
//                     className={`h-full rounded-full ${item.className}`}
//                     style={{
//                       width: `${(item.value / orders.length) * 100}%`,
//                     }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="border-b border-[#e4e2da] px-5 py-4">
//             <h2 className="text-base font-bold text-[#222]">
//               Order Report
//             </h2>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[900px] text-left">
//               <thead className="bg-[#fafaf8]">
//                 <tr>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Order
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Customer
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Product
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Amount
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Status
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Payment
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Date
//                   </th>
//                 </tr>
//               </thead>

//               <tbody className="divide-y divide-[#eeece5]">
//                 {filteredOrders.map((order) => (
//                   <tr key={order.id}>
//                     <td className="px-5 py-4 text-sm font-semibold text-[#176b5b]">
//                       {order.id}
//                     </td>

//                     <td className="px-5 py-4 text-sm text-gray-700">
//                       {order.customer}
//                     </td>

//                     <td className="px-5 py-4">
//                       <p className="text-sm font-medium text-gray-800">
//                         {order.product}
//                       </p>
//                       <p className="text-xs text-gray-400">
//                         {order.category}
//                       </p>
//                     </td>

//                     <td className="px-5 py-4 text-sm font-semibold text-gray-800">
//                       {formatCurrency(order.amount)}
//                     </td>

//                     <td className="px-5 py-4">
//                       <span
//                         className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusClass(
//                           order.status
//                         )}`}
//                       >
//                         {order.status}
//                       </span>
//                     </td>

//                     <td className="px-5 py-4">
//                       <span
//                         className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusClass(
//                           order.payment
//                         )}`}
//                       >
//                         {order.payment}
//                       </span>
//                     </td>

//                     <td className="px-5 py-4 text-sm text-gray-500">
//                       {order.date}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderPaymentsReport = () => {
//     const totalPaymentValue = payments.reduce(
//       (sum, payment) => sum + payment.amount,
//       0
//     );

//     return (
//       <div className="space-y-6">
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Payment Value</p>
//             <p className="mt-2 text-2xl font-bold text-[#222]">
//               {formatCompactCurrency(totalPaymentValue)}
//             </p>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Received</p>
//             <p className="mt-2 text-2xl font-bold text-[#176b5b]">
//               {formatCompactCurrency(receivedPayments)}
//             </p>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Pending</p>
//             <p className="mt-2 text-2xl font-bold text-[#a36a00]">
//               {formatCompactCurrency(pendingPayments)}
//             </p>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Collection Rate</p>
//             <p className="mt-2 text-2xl font-bold text-[#176b5b]">
//               {(
//                 (receivedPayments / totalPaymentValue) *
//                 100
//               ).toFixed(1)}
//               %
//             </p>
//           </div>
//         </div>

//         <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <div className="flex items-center justify-between">
//             <div>
//               <h2 className="text-base font-bold text-[#222]">
//                 Collection Overview
//               </h2>

//               <p className="mt-1 text-xs text-gray-500">
//                 Received versus pending customer payments.
//               </p>
//             </div>

//             <span className="text-sm font-semibold text-[#176b5b]">
//               {(
//                 (receivedPayments / totalPaymentValue) *
//                 100
//               ).toFixed(1)}
//               %
//             </span>
//           </div>

//           <div className="mt-5 h-4 overflow-hidden rounded-full bg-[#f0eee7]">
//             <div
//               className="h-full rounded-full bg-[#176b5b]"
//               style={{
//                 width: `${(receivedPayments / totalPaymentValue) * 100}%`,
//               }}
//             />
//           </div>

//           <div className="mt-3 flex justify-between text-xs text-gray-500">
//             <span>Received {formatCurrency(receivedPayments)}</span>
//             <span>Pending {formatCurrency(pendingPayments)}</span>
//           </div>
//         </div>

//         <div className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="border-b border-[#e4e2da] px-5 py-4">
//             <h2 className="text-base font-bold text-[#222]">
//               Payment Report
//             </h2>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[900px] text-left">
//               <thead className="bg-[#fafaf8]">
//                 <tr>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Payment
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Customer
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Order
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Amount
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Received
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Pending
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Status
//                   </th>
//                 </tr>
//               </thead>

//               <tbody className="divide-y divide-[#eeece5]">
//                 {filteredPayments.map((payment) => (
//                   <tr key={payment.id}>
//                     <td className="px-5 py-4 text-sm font-semibold text-[#176b5b]">
//                       {payment.id}
//                     </td>

//                     <td className="px-5 py-4 text-sm text-gray-700">
//                       {payment.customer}
//                     </td>

//                     <td className="px-5 py-4 text-sm text-gray-600">
//                       {payment.order}
//                     </td>

//                     <td className="px-5 py-4 text-sm font-semibold text-gray-800">
//                       {formatCurrency(payment.amount)}
//                     </td>

//                     <td className="px-5 py-4 text-sm font-semibold text-[#176b5b]">
//                       {formatCurrency(payment.received)}
//                     </td>

//                     <td className="px-5 py-4 text-sm font-semibold text-[#a36a00]">
//                       {formatCurrency(payment.pending)}
//                     </td>

//                     <td className="px-5 py-4">
//                       <span
//                         className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusClass(
//                           payment.status
//                         )}`}
//                       >
//                         {payment.status}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderProductsReport = () => {
//     const totalRevenue = products.reduce(
//       (sum, product) => sum + product.revenue,
//       0
//     );

//     const totalUnits = products.reduce(
//       (sum, product) => sum + product.sales,
//       0
//     );

//     return (
//       <div className="space-y-6">
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Products Tracked</p>
//             <p className="mt-2 text-2xl font-bold text-[#222]">
//               {products.length}
//             </p>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Units Sold</p>
//             <p className="mt-2 text-2xl font-bold text-[#222]">
//               {totalUnits}
//             </p>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Product Revenue</p>
//             <p className="mt-2 text-2xl font-bold text-[#176b5b]">
//               {formatCompactCurrency(totalRevenue)}
//             </p>
//           </div>
//         </div>

//         <div className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="border-b border-[#e4e2da] px-5 py-4">
//             <h2 className="text-base font-bold text-[#222]">
//               Product Performance
//             </h2>
//             <p className="mt-1 text-xs text-gray-500">
//               Products ranked by units sold and revenue.
//             </p>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[850px] text-left">
//               <thead className="bg-[#fafaf8]">
//                 <tr>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Product
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Category
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Units Sold
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Revenue
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Current Stock
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Revenue Share
//                   </th>
//                 </tr>
//               </thead>

//               <tbody className="divide-y divide-[#eeece5]">
//                 {filteredProducts.map((product) => (
//                   <tr key={product.name}>
//                     <td className="px-5 py-4 text-sm font-semibold text-gray-800">
//                       {product.name}
//                     </td>

//                     <td className="px-5 py-4 text-sm text-gray-600">
//                       {product.category}
//                     </td>

//                     <td className="px-5 py-4 text-sm font-semibold text-gray-800">
//                       {product.sales}
//                     </td>

//                     <td className="px-5 py-4 text-sm font-semibold text-[#176b5b]">
//                       {formatCurrency(product.revenue)}
//                     </td>

//                     <td className="px-5 py-4">
//                       <span
//                         className={`text-sm font-semibold ${
//                           product.stock <= 3
//                             ? "text-[#a36a00]"
//                             : "text-gray-800"
//                         }`}
//                       >
//                         {product.stock}
//                       </span>
//                     </td>

//                     <td className="px-5 py-4">
//                       <div className="flex items-center gap-3">
//                         <div className="h-2 w-20 overflow-hidden rounded-full bg-gray-100">
//                           <div
//                             className="h-full rounded-full bg-[#176b5b]"
//                             style={{
//                               width: `${Math.min(
//                                 100,
//                                 (product.revenue / totalRevenue) * 100 * 4
//                               )}%`,
//                             }}
//                           />
//                         </div>

//                         <span className="text-xs text-gray-500">
//                           {(
//                             (product.revenue / totalRevenue) *
//                             100
//                           ).toFixed(1)}
//                           %
//                         </span>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <h2 className="text-base font-bold text-[#222]">
//               Best Selling Product
//             </h2>

//             <div className="mt-5 rounded-lg bg-[#fafaf8] p-4">
//               <p className="text-xs text-gray-400">Top by units sold</p>
//               <p className="mt-1 text-lg font-bold text-[#222]">
//                 {products.sort((a, b) => b.sales - a.sales)[0].name}
//               </p>
//               <p className="mt-1 text-sm text-[#176b5b]">
//                 {products.sort((a, b) => b.sales - a.sales)[0].sales} units
//                 sold
//               </p>
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <h2 className="text-base font-bold text-[#222]">
//               Highest Revenue Product
//             </h2>

//             <div className="mt-5 rounded-lg bg-[#fafaf8] p-4">
//               <p className="text-xs text-gray-400">Top by revenue</p>
//               <p className="mt-1 text-lg font-bold text-[#222]">
//                 {products.sort((a, b) => b.revenue - a.revenue)[0].name}
//               </p>
//               <p className="mt-1 text-sm text-[#176b5b]">
//                 {formatCurrency(
//                   products.sort((a, b) => b.revenue - a.revenue)[0].revenue
//                 )}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderEnquiriesReport = () => {
//     const totalEnquiries = enquiries.reduce(
//       (sum, item) => sum + item.enquiries,
//       0
//     );

//     const totalConverted = enquiries.reduce(
//       (sum, item) => sum + item.converted,
//       0
//     );

//     return (
//       <div className="space-y-6">
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Total Enquiries</p>
//             <p className="mt-2 text-2xl font-bold text-[#222]">
//               {totalEnquiries}
//             </p>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Converted</p>
//             <p className="mt-2 text-2xl font-bold text-[#176b5b]">
//               {totalConverted}
//             </p>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Conversion Rate</p>
//             <p className="mt-2 text-2xl font-bold text-[#176b5b]">
//               {conversionRate.toFixed(1)}%
//             </p>
//           </div>
//         </div>

//         <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <h2 className="text-base font-bold text-[#222]">
//             Enquiries by Source
//           </h2>

//           <p className="mt-1 text-xs text-gray-500">
//             Understand which channels are generating customers.
//           </p>

//           <div className="mt-6 space-y-5">
//             {enquiries.map((item) => {
//               const rate =
//                 item.enquiries > 0
//                   ? (item.converted / item.enquiries) * 100
//                   : 0;

//               return (
//                 <div key={item.source}>
//                   <div className="flex items-center justify-between gap-4">
//                     <div>
//                       <p className="text-sm font-semibold text-gray-800">
//                         {item.source}
//                       </p>

//                       <p className="mt-1 text-xs text-gray-400">
//                         {item.enquiries} enquiries • {item.converted}{" "}
//                         converted
//                       </p>
//                     </div>

//                     <span className="text-sm font-bold text-[#176b5b]">
//                       {rate.toFixed(0)}%
//                     </span>
//                   </div>

//                   <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
//                     <div
//                       className="h-full rounded-full bg-[#176b5b]"
//                       style={{
//                         width: `${rate}%`,
//                       }}
//                     />
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderReport = () => {
//     switch (activeReport) {
//       case "Sales":
//         return renderSalesReport();

//       case "Orders":
//         return renderOrdersReport();

//       case "Payments":
//         return renderPaymentsReport();

//       case "Products":
//         return renderProductsReport();

//       case "Enquiries":
//         return renderEnquiriesReport();

//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       <div className="border-b border-[#e4e2da] bg-white print:hidden">
//         <div className="mx-auto max-w-[1550px] px-4 py-5 sm:px-6 lg:px-8">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
//                 <span>Furniture</span>
//                 <span>/</span>
//                 <span className="text-gray-700">Reports</span>
//               </div>

//               <h1 className="text-2xl font-bold text-[#222]">
//                 Reports & Analytics
//               </h1>

//               <p className="mt-1 text-sm text-gray-500">
//                 Analyze sales, orders, payments, products and enquiries.
//               </p>
//             </div>

//             <button
//               onClick={handlePrint}
//               className="flex items-center justify-center gap-2 rounded-lg border border-[#d9d7cf] bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
//             >
//               <svg
//                 width="17"
//                 height="17"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//               >
//                 <path d="M6 9V3h12v6" />
//                 <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
//                 <path d="M6 14h12v7H6z" />
//               </svg>
//               Print Report
//             </button>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1550px] px-4 py-6 sm:px-6 lg:px-8">
//         {/* Report Navigation */}
//         <div className="rounded-xl border border-[#e4e2da] bg-white p-2 print:hidden">
//           <div className="flex gap-1 overflow-x-auto">
//             {reportTypes.map((report) => (
//               <button
//                 key={report}
//                 onClick={() => {
//                   setActiveReport(report);
//                   setSearch("");
//                 }}
//                 className={`whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
//                   activeReport === report
//                     ? "bg-[#176b5b] text-white"
//                     : "text-gray-600 hover:bg-[#f7f7f4]"
//                 }`}
//               >
//                 {report} Report
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="mt-5 rounded-xl border border-[#e4e2da] bg-white p-4 print:hidden">
//           <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
//             <div className="flex flex-col gap-3 md:flex-row">
//               <select
//                 value={dateRange}
//                 onChange={(e) => setDateRange(e.target.value)}
//                 className="rounded-lg border border-[#d9d7cf] bg-white px-4 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//               >
//                 <option>Today</option>
//                 <option>This Week</option>
//                 <option>This Month</option>
//                 <option>Last 3 Months</option>
//                 <option>Last 6 Months</option>
//                 <option>This Year</option>
//               </select>

//               {(activeReport === "Orders" ||
//                 activeReport === "Products") && (
//                 <select
//                   value={categoryFilter}
//                   onChange={(e) => setCategoryFilter(e.target.value)}
//                   className="rounded-lg border border-[#d9d7cf] bg-white px-4 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   <option>All Categories</option>
//                   <option>Sofa</option>
//                   <option>Bed</option>
//                   <option>Dining Table</option>
//                   <option>Chair</option>
//                   <option>Wardrobe</option>
//                   <option>TV Unit</option>
//                   <option>Study Table</option>
//                   <option>Office Furniture</option>
//                 </select>
//               )}

//               {(activeReport === "Orders" ||
//                 activeReport === "Payments" ||
//                 activeReport === "Products") && (
//                 <div className="relative">
//                   <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                     <svg
//                       width="17"
//                       height="17"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="1.8"
//                     >
//                       <circle cx="11" cy="11" r="7" />
//                       <path d="m20 20-4-4" />
//                     </svg>
//                   </span>

//                   <input
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                     placeholder={`Search ${activeReport.toLowerCase()}...`}
//                     className="w-full rounded-lg border border-[#d9d7cf] py-2.5 pl-9 pr-4 text-sm outline-none focus:border-[#176b5b] md:w-72"
//                   />
//                 </div>
//               )}
//             </div>

//             <p className="text-xs text-gray-500">
//               Report period:{" "}
//               <span className="font-semibold text-gray-700">
//                 {dateRange}
//               </span>
//             </p>
//           </div>
//         </div>

//         {/* Report Heading for Print */}
//         <div className="mt-6 hidden print:block">
//           <h1 className="text-2xl font-bold">Akrish Furniture Reports</h1>
//           <p className="mt-1 text-sm text-gray-500">
//             {activeReport} Report • {dateRange}
//           </p>
//         </div>

//         {/* Main Report */}
//         <div className="mt-6">{renderReport()}</div>
//       </main>

//       <style jsx global>{`
//         @media print {
//           body {
//             background: white !important;
//           }

//           .print\\:hidden {
//             display: none !important;
//           }

//           .print\\:block {
//             display: block !important;
//           }

//           @page {
//             size: A4;
//             margin: 15mm;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import { getAllOrders, type FurnitureOrder } from "@/modules/furniture/services/orderService";
// import { getAllPayments, type FurniturePayment } from "@/modules/furniture/services/paymentService";
// import { getAllProducts, type FurnitureProduct } from "@/modules/furniture/services/productService";
// import { getAllEnquiries, type FurnitureEnquiry } from "@/modules/furniture/services/enquiryService";
// import { Timestamp } from "firebase/firestore";

// type ReportType =
//   | "Sales"
//   | "Orders"
//   | "Payments"
//   | "Products"
//   | "Enquiries";

// type Sale = {
//   month: string;
//   sales: number;
//   orders: number;
//   profit: number;
// };

// type Order = {
//   id: string;
//   customer: string;
//   product: string;
//   category: string;
//   amount: number;
//   status: string;
//   payment: string;
//   date: string;
// };

// type Payment = {
//   id: string;
//   customer: string;
//   order: string;
//   amount: number;
//   received: number;
//   pending: number;
//   status: string;
//   method: string;
//   date: string;
// };

// type Product = {
//   name: string;
//   category: string;
//   sales: number;
//   revenue: number;
//   stock: number;
// };

// type Enquiry = {
//   source: string;
//   enquiries: number;
//   converted: number;
// };

// const reportTypes: ReportType[] = [
//   "Sales",
//   "Orders",
//   "Payments",
//   "Products",
//   "Enquiries",
// ];

// const MONTHS = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function formatCompactCurrency(value: number) {
//   if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
//   if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
//   if (value >= 1000) return `₹${(value / 1000).toFixed(0)}K`;
//   return formatCurrency(value);
// }

// function getStatusClass(status: string) {
//   switch (status) {
//     case "Delivered":
//     case "Received":
//     case "Paid":
//       return "bg-[#eaf5f1] text-[#176b5b]";
//     case "Production":
//     case "Processing":
//     case "Partial":
//       return "bg-[#fff5df] text-[#a36a00]";
//     case "Confirmed":
//     case "Shipped":
//       return "bg-[#eef2ff] text-[#4f46a5]";
//     case "Pending":
//       return "bg-[#fdecec] text-[#b42318]";
//     default:
//       return "bg-gray-100 text-gray-600";
//   }
// }

// function toDate(value: unknown): Date | null {
//   if (!value) return null;
//   try {
//     if (typeof (value as Timestamp).toDate === "function") {
//       return (value as Timestamp).toDate();
//     }
//     if (typeof value === "string") {
//       const d = new Date(value);
//       return Number.isNaN(d.getTime()) ? null : d;
//     }
//   } catch {
//     /* ignore */
//   }
//   return null;
// }

// function formatDateStr(d: Date | null): string {
//   if (!d) return "—";
//   return d.toISOString().slice(0, 10);
// }

// function mapOrderStatus(raw?: string): string {
//   const s = (raw || "Pending").trim();
//   if (s === "Delivered") return "Delivered";
//   if (s === "Processing" || s === "Production" || s === "Shipped")
//     return s === "Shipped" ? "Production" : "Production";
//   if (s === "Paid" || s === "Confirmed") return "Confirmed";
//   return s || "Confirmed";
// }

// function mapPaymentStatus(raw?: string, paid = 0, total = 0): string {
//   const s = (raw || "").trim();
//   if (s === "Received" || s === "Paid") return "Received";
//   if (s === "Partial") return "Partial";
//   if (paid >= total && total > 0) return "Received";
//   if (paid > 0) return "Partial";
//   return "Pending";
// }

// export default function FurnitureReportsPage() {
//   const [activeReport, setActiveReport] = useState<ReportType>("Sales");
//   const [dateRange, setDateRange] = useState("Last 6 Months");
//   const [categoryFilter, setCategoryFilter] = useState("All Categories");
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(true);

//   const [salesData, setSalesData] = useState<Sale[]>([]);
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [payments, setPayments] = useState<Payment[]>([]);
//   const [products, setProducts] = useState<Product[]>([]);
//   const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const [rawOrders, rawPayments, rawProducts, rawEnquiries] =
//           await Promise.all([
//             getAllOrders().catch(() => [] as FurnitureOrder[]),
//             getAllPayments().catch(() => [] as FurniturePayment[]),
//             getAllProducts().catch(() => [] as FurnitureProduct[]),
//             getAllEnquiries().catch(() => [] as FurnitureEnquiry[]),
//           ]);

//         if (cancelled) return;

//         // --- Orders ---
//         const mappedOrders: Order[] = rawOrders.map((o) => {
//           const d = toDate(o.createdAt);
//           const items = o.items || [];
//           const first = items[0];
//           const amount =
//             Number(o.amount ?? 0) ||
//             items.reduce(
//               (s, i) => s + (Number(i.price) || 0) * (Number(i.qty) || 1),
//               0
//             );

//           return {
//             id: o.orderNo || o.id,
//             customer: o.customerName || "Unknown",
//             product: first?.name || "—",
//             category: (first as { category?: string })?.category || "—",
//             amount,
//             status: mapOrderStatus(o.status),
//             payment: mapPaymentStatus(
//               o.paymentStatus,
//               Number((o as { paid?: number }).paid ?? 0),
//               amount
//             ),
//             date: formatDateStr(d),
//           };
//         });
//         setOrders(mappedOrders);

//         // --- Sales by month (from orders) ---
//         const monthMap = new Map<
//           string,
//           { sales: number; orders: number; key: string }
//         >();
//         const now = new Date();
//         for (let i = 5; i >= 0; i--) {
//           const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
//           const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
//           const label = MONTHS[d.getMonth()];
//           monthMap.set(key, { sales: 0, orders: 0, key: label });
//         }

//         rawOrders.forEach((o) => {
//           const d = toDate(o.createdAt);
//           if (!d) return;
//           const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
//           const entry = monthMap.get(key);
//           if (!entry) return;
//           const amount =
//             Number(o.amount ?? 0) ||
//             (o.items || []).reduce(
//               (s, i) => s + (Number(i.price) || 0) * (Number(i.qty) || 1),
//               0
//             );
//           entry.sales += amount;
//           entry.orders += 1;
//         });

//         const sales: Sale[] = Array.from(monthMap.values()).map((m) => ({
//           month: m.key,
//           sales: m.sales,
//           orders: m.orders,
//           profit: Math.round(m.sales * 0.3),
//         }));
//         setSalesData(sales);

//         // --- Payments ---
//         const mappedPayments: Payment[] = rawPayments.map((p) => {
//           const amount = Number(p.amount ?? 0) || 0;
//           const received = Number(p.paidAmount ?? 0) || 0;
//           const pending =
//             p.dueAmount !== undefined && p.dueAmount !== null
//               ? Number(p.dueAmount) || 0
//               : Math.max(amount - received, 0);

//           return {
//             id: p.paymentNo || p.id,
//             customer: p.customer || p.customerName || "Unknown",
//             order: p.orderNo || "—",
//             amount,
//             received,
//             pending,
//             status: mapPaymentStatus(p.status, received, amount),
//             method: p.paymentMethod || "UPI",
//             date: p.paymentDate || p.dueDate || "—",
//           };
//         });

//         // Fallback: derive payments from orders if no payment docs
//         if (mappedPayments.length === 0 && rawOrders.length > 0) {
//           setPayments(
//             rawOrders.map((o) => {
//               const amount = Number(o.amount ?? 0) || 0;
//               const paid = Number((o as { paid?: number }).paid ?? 0) || 0;
//               return {
//                 id: `PAY-${(o.orderNo || o.id).slice(-6)}`,
//                 customer: o.customerName || "Unknown",
//                 order: o.orderNo || o.id,
//                 amount,
//                 received: paid,
//                 pending: Math.max(amount - paid, 0),
//                 status: mapPaymentStatus(o.paymentStatus, paid, amount),
//                 method: "UPI",
//                 date: formatDateStr(toDate(o.createdAt)),
//               };
//             })
//           );
//         } else {
//           setPayments(mappedPayments);
//         }

//         // --- Products ---
//         // Aggregate sales/revenue from order items
//         const productAgg = new Map<
//           string,
//           { sales: number; revenue: number; category: string; stock: number }
//         >();

//         rawProducts.forEach((p) => {
//           productAgg.set(p.name || p.id, {
//             sales: Number(p.salesCount ?? 0) || 0,
//             revenue: Number(p.revenue ?? 0) || 0,
//             category: p.category || "—",
//             stock: Number(p.stock ?? 0) || 0,
//           });
//         });

//         rawOrders.forEach((o) => {
//           (o.items || []).forEach((item) => {
//             const name = item.name || "Unknown";
//             const existing = productAgg.get(name) || {
//               sales: 0,
//               revenue: 0,
//               category: "—",
//               stock: 0,
//             };
//             const qty = Number(item.qty) || 1;
//             const price = Number(item.price) || 0;
//             existing.sales += qty;
//             existing.revenue += price * qty;
//             productAgg.set(name, existing);
//           });
//         });

//         const mappedProducts: Product[] = Array.from(productAgg.entries())
//           .map(([name, v]) => ({
//             name,
//             category: v.category,
//             sales: v.sales,
//             revenue: v.revenue,
//             stock: v.stock,
//           }))
//           .sort((a, b) => b.revenue - a.revenue);

//         setProducts(mappedProducts);

//         // --- Enquiries by source ---
//         const sourceMap = new Map<
//           string,
//           { enquiries: number; converted: number }
//         >();
//         rawEnquiries.forEach((e) => {
//           const source = e.source || "Other";
//           const entry = sourceMap.get(source) || {
//             enquiries: 0,
//             converted: 0,
//           };
//           entry.enquiries += 1;
//           if (e.status === "Converted") entry.converted += 1;
//           sourceMap.set(source, entry);
//         });

//         setEnquiries(
//           Array.from(sourceMap.entries())
//             .map(([source, v]) => ({
//               source,
//               enquiries: v.enquiries,
//               converted: v.converted,
//             }))
//             .sort((a, b) => b.enquiries - a.enquiries)
//         );
//       } catch (err) {
//         console.error("Failed to load report data:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const totalSales = salesData.reduce((sum, item) => sum + item.sales, 0);
//   const totalProfit = salesData.reduce((sum, item) => sum + item.profit, 0);
//   const totalOrders = salesData.reduce((sum, item) => sum + item.orders, 0);

//   const receivedPayments = payments.reduce(
//     (sum, payment) => sum + payment.received,
//     0
//   );
//   const pendingPayments = payments.reduce(
//     (sum, payment) => sum + payment.pending,
//     0
//   );

//   const averageOrderValue = totalOrders > 0 ? totalSales / totalOrders : 0;

//   const conversionRate = useMemo(() => {
//     const totalEnquiries = enquiries.reduce(
//       (sum, item) => sum + item.enquiries,
//       0
//     );
//     const totalConverted = enquiries.reduce(
//       (sum, item) => sum + item.converted,
//       0
//     );
//     return totalEnquiries ? (totalConverted / totalEnquiries) * 100 : 0;
//   }, [enquiries]);

//   const maxSales = Math.max(...salesData.map((item) => item.sales), 1);

//   const filteredOrders = orders.filter((order) => {
//     const searchText = search.toLowerCase().trim();
//     const matchesSearch =
//       !searchText ||
//       order.id.toLowerCase().includes(searchText) ||
//       order.customer.toLowerCase().includes(searchText) ||
//       order.product.toLowerCase().includes(searchText);
//     const matchesCategory =
//       categoryFilter === "All Categories" ||
//       order.category === categoryFilter;
//     return matchesSearch && matchesCategory;
//   });

//   const filteredProducts = products.filter((product) => {
//     const searchText = search.toLowerCase().trim();
//     const matchesSearch =
//       !searchText ||
//       product.name.toLowerCase().includes(searchText) ||
//       product.category.toLowerCase().includes(searchText);
//     const matchesCategory =
//       categoryFilter === "All Categories" ||
//       product.category === categoryFilter;
//     return matchesSearch && matchesCategory;
//   });

//   const filteredPayments = payments.filter((payment) => {
//     const searchText = search.toLowerCase().trim();
//     return (
//       !searchText ||
//       payment.id.toLowerCase().includes(searchText) ||
//       payment.customer.toLowerCase().includes(searchText) ||
//       payment.order.toLowerCase().includes(searchText)
//     );
//   });

//   const handlePrint = () => {
//     window.print();
//   };

//   const renderSalesReport = () => (
//     <div className="space-y-6">
//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//         <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <p className="text-sm text-gray-500">Total Sales</p>
//           <p className="mt-2 text-2xl font-bold text-[#222]">
//             {loading ? "…" : formatCompactCurrency(totalSales)}
//           </p>
//         </div>
//         <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <p className="text-sm text-gray-500">Total Profit</p>
//           <p className="mt-2 text-2xl font-bold text-[#176b5b]">
//             {loading ? "…" : formatCompactCurrency(totalProfit)}
//           </p>
//           <p className="mt-1 text-xs text-[#176b5b]">
//             {totalSales > 0
//               ? ((totalProfit / totalSales) * 100).toFixed(1)
//               : "0"}
//             % margin
//           </p>
//         </div>
//         <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <p className="text-sm text-gray-500">Total Orders</p>
//           <p className="mt-2 text-2xl font-bold text-[#222]">
//             {loading ? "…" : totalOrders}
//           </p>
//         </div>
//         <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <p className="text-sm text-gray-500">Average Order Value</p>
//           <p className="mt-2 text-2xl font-bold text-[#222]">
//             {loading ? "…" : formatCompactCurrency(averageOrderValue)}
//           </p>
//           <p className="mt-1 text-xs text-gray-500">Per completed order</p>
//         </div>
//       </div>

//       <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//         <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             <h2 className="text-base font-bold text-[#222]">
//               Sales Performance
//             </h2>
//             <p className="mt-1 text-xs text-gray-500">
//               Monthly sales and profit performance.
//             </p>
//           </div>
//           <div className="flex gap-4 text-xs text-gray-500">
//             <span className="flex items-center gap-2">
//               <span className="h-2.5 w-2.5 rounded-full bg-[#176b5b]" />
//               Sales
//             </span>
//             <span className="flex items-center gap-2">
//               <span className="h-2.5 w-2.5 rounded-full bg-[#c89b62]" />
//               Profit
//             </span>
//           </div>
//         </div>
//         <div className="mt-8">
//           <div className="flex h-[280px] items-end gap-3 border-b border-l border-[#e4e2da] px-3 pb-0 sm:gap-5">
//             {salesData.map((item) => {
//               const salesHeight = (item.sales / maxSales) * 230;
//               const profitHeight = (item.profit / maxSales) * 230;
//               return (
//                 <div
//                   key={item.month}
//                   className="flex h-full flex-1 items-end justify-center gap-1"
//                 >
//                   <div className="flex h-full items-end">
//                     <div
//                       title={`${item.month} Sales: ${formatCurrency(item.sales)}`}
//                       className="w-5 rounded-t-md bg-[#176b5b] transition hover:opacity-80 sm:w-8"
//                       style={{ height: `${Math.max(salesHeight, 2)}px` }}
//                     />
//                   </div>
//                   <div className="flex h-full items-end">
//                     <div
//                       title={`${item.month} Profit: ${formatCurrency(item.profit)}`}
//                       className="w-5 rounded-t-md bg-[#c89b62] transition hover:opacity-80 sm:w-8"
//                       style={{ height: `${Math.max(profitHeight, 2)}px` }}
//                     />
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//           <div className="mt-3 flex gap-3 pl-3 sm:gap-5">
//             {salesData.map((item) => (
//               <div
//                 key={item.month}
//                 className="flex-1 text-center text-xs text-gray-500"
//               >
//                 {item.month}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//         <div className="border-b border-[#e4e2da] px-5 py-4">
//           <h2 className="text-base font-bold text-[#222]">
//             Monthly Sales Breakdown
//           </h2>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="w-full min-w-[700px] text-left">
//             <thead className="bg-[#fafaf8]">
//               <tr>
//                 <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                   Month
//                 </th>
//                 <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                   Orders
//                 </th>
//                 <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                   Sales
//                 </th>
//                 <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                   Profit
//                 </th>
//                 <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                   Margin
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-[#eeece5]">
//               {salesData.map((item) => (
//                 <tr key={item.month}>
//                   <td className="px-5 py-4 text-sm font-medium text-gray-800">
//                     {item.month}
//                   </td>
//                   <td className="px-5 py-4 text-sm text-gray-600">
//                     {item.orders}
//                   </td>
//                   <td className="px-5 py-4 text-sm font-semibold text-gray-800">
//                     {formatCurrency(item.sales)}
//                   </td>
//                   <td className="px-5 py-4 text-sm font-semibold text-[#176b5b]">
//                     {formatCurrency(item.profit)}
//                   </td>
//                   <td className="px-5 py-4 text-sm text-gray-600">
//                     {item.sales > 0
//                       ? ((item.profit / item.sales) * 100).toFixed(1)
//                       : "0"}
//                     %
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );

//   const renderOrdersReport = () => {
//     const delivered = orders.filter((o) => o.status === "Delivered").length;
//     const production = orders.filter((o) => o.status === "Production").length;
//     const confirmed = orders.filter((o) => o.status === "Confirmed").length;
//     const orderValue = orders.reduce((sum, o) => sum + o.amount, 0);
//     const total = orders.length || 1;

//     return (
//       <div className="space-y-6">
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Total Orders</p>
//             <p className="mt-2 text-2xl font-bold text-[#222]">
//               {loading ? "…" : orders.length}
//             </p>
//           </div>
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Order Value</p>
//             <p className="mt-2 text-2xl font-bold text-[#176b5b]">
//               {loading ? "…" : formatCompactCurrency(orderValue)}
//             </p>
//           </div>
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Delivered</p>
//             <p className="mt-2 text-2xl font-bold text-[#176b5b]">{delivered}</p>
//             <p className="mt-1 text-xs text-gray-400">
//               {((delivered / total) * 100).toFixed(0)}% of orders
//             </p>
//           </div>
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">In Progress</p>
//             <p className="mt-2 text-2xl font-bold text-[#a36a00]">
//               {production + confirmed}
//             </p>
//             <p className="mt-1 text-xs text-gray-400">
//               {production} production • {confirmed} confirmed
//             </p>
//           </div>
//         </div>

//         <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <h2 className="text-base font-bold text-[#222]">
//             Order Status Overview
//           </h2>
//           <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
//             {[
//               { label: "Delivered", value: delivered, className: "bg-[#176b5b]" },
//               { label: "Production", value: production, className: "bg-[#c89b62]" },
//               { label: "Confirmed", value: confirmed, className: "bg-[#777]" },
//             ].map((item) => (
//               <div
//                 key={item.label}
//                 className="rounded-lg border border-[#e4e2da] p-4"
//               >
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm text-gray-500">{item.label}</span>
//                   <span className="text-lg font-bold text-gray-800">
//                     {item.value}
//                   </span>
//                 </div>
//                 <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
//                   <div
//                     className={`h-full rounded-full ${item.className}`}
//                     style={{ width: `${(item.value / total) * 100}%` }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="border-b border-[#e4e2da] px-5 py-4">
//             <h2 className="text-base font-bold text-[#222]">Order Report</h2>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[900px] text-left">
//               <thead className="bg-[#fafaf8]">
//                 <tr>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Order
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Customer
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Product
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Amount
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Status
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Payment
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Date
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece5]">
//                 {filteredOrders.map((order) => (
//                   <tr key={order.id}>
//                     <td className="px-5 py-4 text-sm font-semibold text-[#176b5b]">
//                       {order.id}
//                     </td>
//                     <td className="px-5 py-4 text-sm text-gray-700">
//                       {order.customer}
//                     </td>
//                     <td className="px-5 py-4">
//                       <p className="text-sm font-medium text-gray-800">
//                         {order.product}
//                       </p>
//                       <p className="text-xs text-gray-400">{order.category}</p>
//                     </td>
//                     <td className="px-5 py-4 text-sm font-semibold text-gray-800">
//                       {formatCurrency(order.amount)}
//                     </td>
//                     <td className="px-5 py-4">
//                       <span
//                         className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusClass(
//                           order.status
//                         )}`}
//                       >
//                         {order.status}
//                       </span>
//                     </td>
//                     <td className="px-5 py-4">
//                       <span
//                         className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusClass(
//                           order.payment
//                         )}`}
//                       >
//                         {order.payment}
//                       </span>
//                     </td>
//                     <td className="px-5 py-4 text-sm text-gray-500">
//                       {order.date}
//                     </td>
//                   </tr>
//                 ))}
//                 {!loading && filteredOrders.length === 0 && (
//                   <tr>
//                     <td
//                       colSpan={7}
//                       className="px-5 py-10 text-center text-sm text-gray-500"
//                     >
//                       No orders found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderPaymentsReport = () => {
//     const totalPaymentValue = payments.reduce((sum, p) => sum + p.amount, 0);
//     const rate =
//       totalPaymentValue > 0
//         ? (receivedPayments / totalPaymentValue) * 100
//         : 0;

//     return (
//       <div className="space-y-6">
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Payment Value</p>
//             <p className="mt-2 text-2xl font-bold text-[#222]">
//               {loading ? "…" : formatCompactCurrency(totalPaymentValue)}
//             </p>
//           </div>
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Received</p>
//             <p className="mt-2 text-2xl font-bold text-[#176b5b]">
//               {loading ? "…" : formatCompactCurrency(receivedPayments)}
//             </p>
//           </div>
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Pending</p>
//             <p className="mt-2 text-2xl font-bold text-[#a36a00]">
//               {loading ? "…" : formatCompactCurrency(pendingPayments)}
//             </p>
//           </div>
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Collection Rate</p>
//             <p className="mt-2 text-2xl font-bold text-[#176b5b]">
//               {loading ? "…" : `${rate.toFixed(1)}%`}
//             </p>
//           </div>
//         </div>

//         <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <div className="flex items-center justify-between">
//             <div>
//               <h2 className="text-base font-bold text-[#222]">
//                 Collection Overview
//               </h2>
//               <p className="mt-1 text-xs text-gray-500">
//                 Received versus pending customer payments.
//               </p>
//             </div>
//             <span className="text-sm font-semibold text-[#176b5b]">
//               {rate.toFixed(1)}%
//             </span>
//           </div>
//           <div className="mt-5 h-4 overflow-hidden rounded-full bg-[#f0eee7]">
//             <div
//               className="h-full rounded-full bg-[#176b5b]"
//               style={{ width: `${Math.min(rate, 100)}%` }}
//             />
//           </div>
//           <div className="mt-3 flex justify-between text-xs text-gray-500">
//             <span>Received {formatCurrency(receivedPayments)}</span>
//             <span>Pending {formatCurrency(pendingPayments)}</span>
//           </div>
//         </div>

//         <div className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="border-b border-[#e4e2da] px-5 py-4">
//             <h2 className="text-base font-bold text-[#222]">Payment Report</h2>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[900px] text-left">
//               <thead className="bg-[#fafaf8]">
//                 <tr>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Payment
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Customer
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Order
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Amount
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Received
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Pending
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Status
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece5]">
//                 {filteredPayments.map((payment) => (
//                   <tr key={payment.id}>
//                     <td className="px-5 py-4 text-sm font-semibold text-[#176b5b]">
//                       {payment.id}
//                     </td>
//                     <td className="px-5 py-4 text-sm text-gray-700">
//                       {payment.customer}
//                     </td>
//                     <td className="px-5 py-4 text-sm text-gray-600">
//                       {payment.order}
//                     </td>
//                     <td className="px-5 py-4 text-sm font-semibold text-gray-800">
//                       {formatCurrency(payment.amount)}
//                     </td>
//                     <td className="px-5 py-4 text-sm font-semibold text-[#176b5b]">
//                       {formatCurrency(payment.received)}
//                     </td>
//                     <td className="px-5 py-4 text-sm font-semibold text-[#a36a00]">
//                       {formatCurrency(payment.pending)}
//                     </td>
//                     <td className="px-5 py-4">
//                       <span
//                         className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusClass(
//                           payment.status
//                         )}`}
//                       >
//                         {payment.status}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//                 {!loading && filteredPayments.length === 0 && (
//                   <tr>
//                     <td
//                       colSpan={7}
//                       className="px-5 py-10 text-center text-sm text-gray-500"
//                     >
//                       No payments found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderProductsReport = () => {
//     const totalRevenue = products.reduce((sum, p) => sum + p.revenue, 0) || 1;
//     const totalUnits = products.reduce((sum, p) => sum + p.sales, 0);
//     const sortedBySales = [...products].sort((a, b) => b.sales - a.sales);
//     const sortedByRevenue = [...products].sort((a, b) => b.revenue - a.revenue);

//     return (
//       <div className="space-y-6">
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Products Tracked</p>
//             <p className="mt-2 text-2xl font-bold text-[#222]">
//               {loading ? "…" : products.length}
//             </p>
//           </div>
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Units Sold</p>
//             <p className="mt-2 text-2xl font-bold text-[#222]">
//               {loading ? "…" : totalUnits}
//             </p>
//           </div>
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Product Revenue</p>
//             <p className="mt-2 text-2xl font-bold text-[#176b5b]">
//               {loading ? "…" : formatCompactCurrency(totalRevenue === 1 ? 0 : totalRevenue)}
//             </p>
//           </div>
//         </div>

//         <div className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="border-b border-[#e4e2da] px-5 py-4">
//             <h2 className="text-base font-bold text-[#222]">
//               Product Performance
//             </h2>
//             <p className="mt-1 text-xs text-gray-500">
//               Products ranked by units sold and revenue.
//             </p>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[850px] text-left">
//               <thead className="bg-[#fafaf8]">
//                 <tr>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Product
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Category
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Units Sold
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Revenue
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Current Stock
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Revenue Share
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece5]">
//                 {filteredProducts.map((product) => (
//                   <tr key={product.name}>
//                     <td className="px-5 py-4 text-sm font-semibold text-gray-800">
//                       {product.name}
//                     </td>
//                     <td className="px-5 py-4 text-sm text-gray-600">
//                       {product.category}
//                     </td>
//                     <td className="px-5 py-4 text-sm font-semibold text-gray-800">
//                       {product.sales}
//                     </td>
//                     <td className="px-5 py-4 text-sm font-semibold text-[#176b5b]">
//                       {formatCurrency(product.revenue)}
//                     </td>
//                     <td className="px-5 py-4">
//                       <span
//                         className={`text-sm font-semibold ${
//                           product.stock <= 3
//                             ? "text-[#a36a00]"
//                             : "text-gray-800"
//                         }`}
//                       >
//                         {product.stock}
//                       </span>
//                     </td>
//                     <td className="px-5 py-4">
//                       <div className="flex items-center gap-3">
//                         <div className="h-2 w-20 overflow-hidden rounded-full bg-gray-100">
//                           <div
//                             className="h-full rounded-full bg-[#176b5b]"
//                             style={{
//                               width: `${Math.min(
//                                 100,
//                                 (product.revenue / totalRevenue) * 100 * 4
//                               )}%`,
//                             }}
//                           />
//                         </div>
//                         <span className="text-xs text-gray-500">
//                           {((product.revenue / totalRevenue) * 100).toFixed(1)}%
//                         </span>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//                 {!loading && filteredProducts.length === 0 && (
//                   <tr>
//                     <td
//                       colSpan={6}
//                       className="px-5 py-10 text-center text-sm text-gray-500"
//                     >
//                       No products found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <h2 className="text-base font-bold text-[#222]">
//               Best Selling Product
//             </h2>
//             <div className="mt-5 rounded-lg bg-[#fafaf8] p-4">
//               <p className="text-xs text-gray-400">Top by units sold</p>
//               <p className="mt-1 text-lg font-bold text-[#222]">
//                 {sortedBySales[0]?.name || "—"}
//               </p>
//               <p className="mt-1 text-sm text-[#176b5b]">
//                 {sortedBySales[0]
//                   ? `${sortedBySales[0].sales} units sold`
//                   : "No data"}
//               </p>
//             </div>
//           </div>
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <h2 className="text-base font-bold text-[#222]">
//               Highest Revenue Product
//             </h2>
//             <div className="mt-5 rounded-lg bg-[#fafaf8] p-4">
//               <p className="text-xs text-gray-400">Top by revenue</p>
//               <p className="mt-1 text-lg font-bold text-[#222]">
//                 {sortedByRevenue[0]?.name || "—"}
//               </p>
//               <p className="mt-1 text-sm text-[#176b5b]">
//                 {sortedByRevenue[0]
//                   ? formatCurrency(sortedByRevenue[0].revenue)
//                   : "No data"}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderEnquiriesReport = () => {
//     const totalEnquiries = enquiries.reduce(
//       (sum, item) => sum + item.enquiries,
//       0
//     );
//     const totalConverted = enquiries.reduce(
//       (sum, item) => sum + item.converted,
//       0
//     );

//     return (
//       <div className="space-y-6">
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Total Enquiries</p>
//             <p className="mt-2 text-2xl font-bold text-[#222]">
//               {loading ? "…" : totalEnquiries}
//             </p>
//           </div>
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Converted</p>
//             <p className="mt-2 text-2xl font-bold text-[#176b5b]">
//               {loading ? "…" : totalConverted}
//             </p>
//           </div>
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Conversion Rate</p>
//             <p className="mt-2 text-2xl font-bold text-[#176b5b]">
//               {loading ? "…" : `${conversionRate.toFixed(1)}%`}
//             </p>
//           </div>
//         </div>

//         <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <h2 className="text-base font-bold text-[#222]">
//             Enquiries by Source
//           </h2>
//           <p className="mt-1 text-xs text-gray-500">
//             Understand which channels are generating customers.
//           </p>
//           <div className="mt-6 space-y-5">
//             {enquiries.map((item) => {
//               const rate =
//                 item.enquiries > 0
//                   ? (item.converted / item.enquiries) * 100
//                   : 0;
//               return (
//                 <div key={item.source}>
//                   <div className="flex items-center justify-between gap-4">
//                     <div>
//                       <p className="text-sm font-semibold text-gray-800">
//                         {item.source}
//                       </p>
//                       <p className="mt-1 text-xs text-gray-400">
//                         {item.enquiries} enquiries • {item.converted} converted
//                       </p>
//                     </div>
//                     <span className="text-sm font-bold text-[#176b5b]">
//                       {rate.toFixed(0)}%
//                     </span>
//                   </div>
//                   <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
//                     <div
//                       className="h-full rounded-full bg-[#176b5b]"
//                       style={{ width: `${rate}%` }}
//                     />
//                   </div>
//                 </div>
//               );
//             })}
//             {!loading && enquiries.length === 0 && (
//               <p className="text-sm text-gray-500">No enquiry data available.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderReport = () => {
//     switch (activeReport) {
//       case "Sales":
//         return renderSalesReport();
//       case "Orders":
//         return renderOrdersReport();
//       case "Payments":
//         return renderPaymentsReport();
//       case "Products":
//         return renderProductsReport();
//       case "Enquiries":
//         return renderEnquiriesReport();
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       <div className="border-b border-[#e4e2da] bg-white print:hidden">
//         <div className="mx-auto max-w-[1550px] px-4 py-5 sm:px-6 lg:px-8">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
//                 <span>Furniture</span>
//                 <span>/</span>
//                 <span className="text-gray-700">Reports</span>
//               </div>
//               <h1 className="text-2xl font-bold text-[#222]">
//                 Reports & Analytics
//               </h1>
//               <p className="mt-1 text-sm text-gray-500">
//                 Analyze sales, orders, payments, products and enquiries.
//               </p>
//             </div>
//             <button
//               onClick={handlePrint}
//               className="flex items-center justify-center gap-2 rounded-lg border border-[#d9d7cf] bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
//             >
//               <svg
//                 width="17"
//                 height="17"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//               >
//                 <path d="M6 9V3h12v6" />
//                 <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
//                 <path d="M6 14h12v7H6z" />
//               </svg>
//               Print Report
//             </button>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1550px] px-4 py-6 sm:px-6 lg:px-8">
//         <div className="rounded-xl border border-[#e4e2da] bg-white p-2 print:hidden">
//           <div className="flex gap-1 overflow-x-auto">
//             {reportTypes.map((report) => (
//               <button
//                 key={report}
//                 onClick={() => {
//                   setActiveReport(report);
//                   setSearch("");
//                 }}
//                 className={`whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
//                   activeReport === report
//                     ? "bg-[#176b5b] text-white"
//                     : "text-gray-600 hover:bg-[#f7f7f4]"
//                 }`}
//               >
//                 {report} Report
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="mt-5 rounded-xl border border-[#e4e2da] bg-white p-4 print:hidden">
//           <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
//             <div className="flex flex-col gap-3 md:flex-row">
//               <select
//                 value={dateRange}
//                 onChange={(e) => setDateRange(e.target.value)}
//                 className="rounded-lg border border-[#d9d7cf] bg-white px-4 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//               >
//                 <option>Today</option>
//                 <option>This Week</option>
//                 <option>This Month</option>
//                 <option>Last 3 Months</option>
//                 <option>Last 6 Months</option>
//                 <option>This Year</option>
//               </select>

//               {(activeReport === "Orders" || activeReport === "Products") && (
//                 <select
//                   value={categoryFilter}
//                   onChange={(e) => setCategoryFilter(e.target.value)}
//                   className="rounded-lg border border-[#d9d7cf] bg-white px-4 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   <option>All Categories</option>
//                   <option>Sofa</option>
//                   <option>Bed</option>
//                   <option>Dining Table</option>
//                   <option>Chair</option>
//                   <option>Wardrobe</option>
//                   <option>TV Unit</option>
//                   <option>Study Table</option>
//                   <option>Office Furniture</option>
//                 </select>
//               )}

//               {(activeReport === "Orders" ||
//                 activeReport === "Payments" ||
//                 activeReport === "Products") && (
//                 <div className="relative">
//                   <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                     <svg
//                       width="17"
//                       height="17"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="1.8"
//                     >
//                       <circle cx="11" cy="11" r="7" />
//                       <path d="m20 20-4-4" />
//                     </svg>
//                   </span>
//                   <input
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                     placeholder={`Search ${activeReport.toLowerCase()}...`}
//                     className="w-full rounded-lg border border-[#d9d7cf] py-2.5 pl-9 pr-4 text-sm outline-none focus:border-[#176b5b] md:w-72"
//                   />
//                 </div>
//               )}
//             </div>
//             <p className="text-xs text-gray-500">
//               Report period:{" "}
//               <span className="font-semibold text-gray-700">{dateRange}</span>
//               {loading && (
//                 <span className="ml-2 text-[#176b5b]">Loading…</span>
//               )}
//             </p>
//           </div>
//         </div>

//         <div className="mt-6 hidden print:block">
//           <h1 className="text-2xl font-bold">Akrish Furniture Reports</h1>
//           <p className="mt-1 text-sm text-gray-500">
//             {activeReport} Report • {dateRange}
//           </p>
//         </div>

//         <div className="mt-6">{renderReport()}</div>
//       </main>

//       <style jsx global>{`
//         @media print {
//           body {
//             background: white !important;
//           }
//           .print\\:hidden {
//             display: none !important;
//           }
//           .print\\:block {
//             display: block !important;
//           }
//           @page {
//             size: A4;
//             margin: 15mm;
//           }
//         }
//       `}</style>
//     </div>
//   );
// // }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAllOrders,
//   type FurnitureOrder,
// } from "@/modules/furniture/services/orderService";
// import {
//   getAllPayments,
//   type FurniturePayment,
// } from "@/modules/furniture/services/paymentService";
// import {
//   getAllProducts,
//   type FurnitureProduct,
// } from "@/modules/furniture/services/productService";
// import {
//   getAllEnquiries,
//   type FurnitureEnquiry,
// } from "@/modules/furniture/services/enquiryService";
// import { Timestamp } from "firebase/firestore";

// type ReportType =
//   | "Sales"
//   | "Orders"
//   | "Payments"
//   | "Products"
//   | "Enquiries";

// type Sale = {
//   month: string;
//   sales: number;
//   orders: number;
//   profit: number;
// };

// type Order = {
//   id: string;
//   customer: string;
//   product: string;
//   category: string;
//   amount: number;
//   status: string;
//   payment: string;
//   date: string;
//   createdAt: Date | null;
// };

// type Payment = {
//   id: string;
//   customer: string;
//   order: string;
//   amount: number;
//   received: number;
//   pending: number;
//   status: string;
//   method: string;
//   date: string;
// };

// type Product = {
//   name: string;
//   category: string;
//   sales: number;
//   revenue: number;
//   stock: number;
// };

// type Enquiry = {
//   source: string;
//   enquiries: number;
//   converted: number;
// };

// const reportTypes: ReportType[] = [
//   "Sales",
//   "Orders",
//   "Payments",
//   "Products",
//   "Enquiries",
// ];

// const MONTHS = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];

// const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function formatCompactCurrency(value: number) {
//   if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
//   if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
//   if (value >= 1000) return `₹${(value / 1000).toFixed(0)}K`;
//   return formatCurrency(value);
// }

// function getStatusClass(status: string) {
//   switch (status) {
//     case "Delivered":
//     case "Received":
//     case "Paid":
//       return "bg-[#eaf5f1] text-[#176b5b]";
//     case "Production":
//     case "Processing":
//     case "Partial":
//       return "bg-[#fff5df] text-[#a36a00]";
//     case "Confirmed":
//     case "Shipped":
//       return "bg-[#eef2ff] text-[#4f46a5]";
//     case "Pending":
//       return "bg-[#fdecec] text-[#b42318]";
//     default:
//       return "bg-gray-100 text-gray-600";
//   }
// }

// function toDate(value: unknown): Date | null {
//   if (!value) return null;
//   try {
//     if (typeof (value as Timestamp).toDate === "function") {
//       return (value as Timestamp).toDate();
//     }
//     if (typeof value === "string") {
//       const d = new Date(value);
//       return Number.isNaN(d.getTime()) ? null : d;
//     }
//   } catch {
//     /* ignore */
//   }
//   return null;
// }

// function formatDateStr(d: Date | null): string {
//   if (!d) return "—";
//   return d.toISOString().slice(0, 10);
// }

// function mapOrderStatus(raw?: string): string {
//   const s = (raw || "Pending").trim();
//   if (s === "Delivered") return "Delivered";
//   if (s === "Processing" || s === "Production" || s === "Shipped")
//     return s === "Shipped" ? "Production" : "Production";
//   if (s === "Paid" || s === "Confirmed") return "Confirmed";
//   return s || "Confirmed";
// }

// function mapPaymentStatus(raw?: string, paid = 0, total = 0): string {
//   const s = (raw || "").trim();
//   if (s === "Received" || s === "Paid") return "Received";
//   if (s === "Partial") return "Partial";
//   if (paid >= total && total > 0) return "Received";
//   if (paid > 0) return "Partial";
//   return "Pending";
// }

// function orderAmount(o: FurnitureOrder): number {
//   return (
//     Number(o.amount ?? 0) ||
//     (o.items || []).reduce(
//       (s, i) => s + (Number(i.price) || 0) * (Number(i.qty) || 1),
//       0
//     )
//   );
// }

// /** Inclusive range for the selected filter */
// function getDateRangeBounds(dateRange: string): { start: Date; end: Date } {
//   const end = new Date();
//   end.setHours(23, 59, 59, 999);
//   const start = new Date();

//   switch (dateRange) {
//     case "Today": {
//       start.setHours(0, 0, 0, 0);
//       break;
//     }
//     case "This Week": {
//       const day = start.getDay(); // 0 Sun
//       const diff = day === 0 ? 6 : day - 1; // Monday start
//       start.setDate(start.getDate() - diff);
//       start.setHours(0, 0, 0, 0);
//       break;
//     }
//     case "This Month": {
//       start.setDate(1);
//       start.setHours(0, 0, 0, 0);
//       break;
//     }
//     case "Last 3 Months": {
//       start.setMonth(start.getMonth() - 2, 1);
//       start.setHours(0, 0, 0, 0);
//       break;
//     }
//     case "Last 6 Months": {
//       start.setMonth(start.getMonth() - 5, 1);
//       start.setHours(0, 0, 0, 0);
//       break;
//     }
//     case "This Year": {
//       start.setMonth(0, 1);
//       start.setHours(0, 0, 0, 0);
//       break;
//     }
//     default: {
//       start.setMonth(start.getMonth() - 5, 1);
//       start.setHours(0, 0, 0, 0);
//     }
//   }

//   return { start, end };
// }

// /**
//  * Build chart buckets from orders for the active dateRange.
//  * - Today: single bar
//  * - This Week: days Mon–Sun
//  * - This Month / 3 / 6 / Year: months
//  */
// function buildSalesSeries(
//   rawOrders: FurnitureOrder[],
//   dateRange: string
// ): Sale[] {
//   const { start, end } = getDateRangeBounds(dateRange);

//   const inRange = rawOrders.filter((o) => {
//     const d = toDate(o.createdAt);
//     if (!d) return false;
//     return d >= start && d <= end;
//   });

//   if (dateRange === "Today") {
//     let sales = 0;
//     let orders = 0;
//     inRange.forEach((o) => {
//       sales += orderAmount(o);
//       orders += 1;
//     });
//     const label = start.toLocaleDateString("en-IN", {
//       day: "numeric",
//       month: "short",
//     });
//     return [
//       {
//         month: label,
//         sales,
//         orders,
//         profit: Math.round(sales * 0.3),
//       },
//     ];
//   }

//   if (dateRange === "This Week") {
//     // 7 days starting Monday of this week
//     const buckets: Sale[] = [];
//     for (let i = 0; i < 7; i++) {
//       const d = new Date(start);
//       d.setDate(start.getDate() + i);
//       const key = formatDateStr(d);
//       buckets.push({
//         month: WEEKDAYS[d.getDay()],
//         sales: 0,
//         orders: 0,
//         profit: 0,
//       });
//       // attach by index via parallel keys
//       (buckets[i] as Sale & { _key?: string })._key = key;
//     }

//     const byKey = new Map(
//       buckets.map((b, i) => {
//         const d = new Date(start);
//         d.setDate(start.getDate() + i);
//         return [formatDateStr(d), b];
//       })
//     );

//     inRange.forEach((o) => {
//       const d = toDate(o.createdAt);
//       if (!d) return;
//       const key = formatDateStr(d);
//       const entry = byKey.get(key);
//       if (!entry) return;
//       entry.sales += orderAmount(o);
//       entry.orders += 1;
//       entry.profit = Math.round(entry.sales * 0.3);
//     });

//     return buckets.map(({ month, sales, orders, profit }) => ({
//       month,
//       sales,
//       orders,
//       profit,
//     }));
//   }

//   // Monthly buckets for This Month, Last 3/6 Months, This Year
//   let monthCount = 6;
//   if (dateRange === "This Month") monthCount = 1;
//   else if (dateRange === "Last 3 Months") monthCount = 3;
//   else if (dateRange === "Last 6 Months") monthCount = 6;
//   else if (dateRange === "This Year") {
//     monthCount = new Date().getMonth() + 1; // Jan → current month
//   }

//   const monthMap = new Map<
//     string,
//     { sales: number; orders: number; label: string }
//   >();

//   const now = new Date();
//   for (let i = monthCount - 1; i >= 0; i--) {
//     const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
//     const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
//     const label =
//       dateRange === "This Year"
//         ? MONTHS[d.getMonth()]
//         : monthCount === 1
//           ? MONTHS[d.getMonth()]
//           : MONTHS[d.getMonth()];
//     monthMap.set(key, { sales: 0, orders: 0, label });
//   }

//   inRange.forEach((o) => {
//     const d = toDate(o.createdAt);
//     if (!d) return;
//     const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
//     const entry = monthMap.get(key);
//     if (!entry) return;
//     entry.sales += orderAmount(o);
//     entry.orders += 1;
//   });

//   return Array.from(monthMap.values()).map((m) => ({
//     month: m.label,
//     sales: m.sales,
//     orders: m.orders,
//     profit: Math.round(m.sales * 0.3),
//   }));
// }

// export default function FurnitureReportsPage() {
//   const [activeReport, setActiveReport] = useState<ReportType>("Sales");
//   const [dateRange, setDateRange] = useState("Last 6 Months");
//   const [categoryFilter, setCategoryFilter] = useState("All Categories");
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(true);

//   const [rawOrders, setRawOrders] = useState<FurnitureOrder[]>([]);
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [payments, setPayments] = useState<Payment[]>([]);
//   const [products, setProducts] = useState<Product[]>([]);
//   const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const [rawOrdersData, rawPayments, rawProducts, rawEnquiries] =
//           await Promise.all([
//             getAllOrders().catch(() => [] as FurnitureOrder[]),
//             getAllPayments().catch(() => [] as FurniturePayment[]),
//             getAllProducts().catch(() => [] as FurnitureProduct[]),
//             getAllEnquiries().catch(() => [] as FurnitureEnquiry[]),
//           ]);

//         if (cancelled) return;

//         setRawOrders(rawOrdersData);

//         const mappedOrders: Order[] = rawOrdersData.map((o) => {
//           const d = toDate(o.createdAt);
//           const items = o.items || [];
//           const first = items[0];
//           const amount = orderAmount(o);

//           return {
//             id: o.orderNo || o.id,
//             customer: o.customerName || "Unknown",
//             product: first?.name || "—",
//             category: (first as { category?: string })?.category || "—",
//             amount,
//             status: mapOrderStatus(o.status),
//             payment: mapPaymentStatus(
//               o.paymentStatus,
//               Number((o as { paid?: number }).paid ?? 0),
//               amount
//             ),
//             date: formatDateStr(d),
//             createdAt: d,
//           };
//         });
//         setOrders(mappedOrders);

//         const mappedPayments: Payment[] = rawPayments.map((p) => {
//           const amount = Number(p.amount ?? 0) || 0;
//           const received = Number(p.paidAmount ?? 0) || 0;
//           const pending =
//             p.dueAmount !== undefined && p.dueAmount !== null
//               ? Number(p.dueAmount) || 0
//               : Math.max(amount - received, 0);

//           return {
//             id: p.paymentNo || p.id,
//             customer: p.customer || p.customerName || "Unknown",
//             order: p.orderNo || "—",
//             amount,
//             received,
//             pending,
//             status: mapPaymentStatus(p.status, received, amount),
//             method: p.paymentMethod || "UPI",
//             date: p.paymentDate || p.dueDate || "—",
//           };
//         });

//         if (mappedPayments.length === 0 && rawOrdersData.length > 0) {
//           setPayments(
//             rawOrdersData.map((o) => {
//               const amount = orderAmount(o);
//               const paid = Number((o as { paid?: number }).paid ?? 0) || 0;
//               return {
//                 id: `PAY-${(o.orderNo || o.id).slice(-6)}`,
//                 customer: o.customerName || "Unknown",
//                 order: o.orderNo || o.id,
//                 amount,
//                 received: paid,
//                 pending: Math.max(amount - paid, 0),
//                 status: mapPaymentStatus(o.paymentStatus, paid, amount),
//                 method: "UPI",
//                 date: formatDateStr(toDate(o.createdAt)),
//               };
//             })
//           );
//         } else {
//           setPayments(mappedPayments);
//         }

//         const productAgg = new Map<
//           string,
//           { sales: number; revenue: number; category: string; stock: number }
//         >();

//         rawProducts.forEach((p) => {
//           productAgg.set(p.name || p.id, {
//             sales: Number(p.salesCount ?? 0) || 0,
//             revenue: Number(p.revenue ?? 0) || 0,
//             category: p.category || "—",
//             stock: Number(p.stock ?? 0) || 0,
//           });
//         });

//         rawOrdersData.forEach((o) => {
//           (o.items || []).forEach((item) => {
//             const name = item.name || "Unknown";
//             const existing = productAgg.get(name) || {
//               sales: 0,
//               revenue: 0,
//               category: "—",
//               stock: 0,
//             };
//             const qty = Number(item.qty) || 1;
//             const price = Number(item.price) || 0;
//             existing.sales += qty;
//             existing.revenue += price * qty;
//             productAgg.set(name, existing);
//           });
//         });

//         setProducts(
//           Array.from(productAgg.entries())
//             .map(([name, v]) => ({
//               name,
//               category: v.category,
//               sales: v.sales,
//               revenue: v.revenue,
//               stock: v.stock,
//             }))
//             .sort((a, b) => b.revenue - a.revenue)
//         );

//         const sourceMap = new Map<
//           string,
//           { enquiries: number; converted: number }
//         >();
//         rawEnquiries.forEach((e) => {
//           const source = e.source || "Other";
//           const entry = sourceMap.get(source) || {
//             enquiries: 0,
//             converted: 0,
//           };
//           entry.enquiries += 1;
//           if (e.status === "Converted") entry.converted += 1;
//           sourceMap.set(source, entry);
//         });

//         setEnquiries(
//           Array.from(sourceMap.entries())
//             .map(([source, v]) => ({
//               source,
//               enquiries: v.enquiries,
//               converted: v.converted,
//             }))
//             .sort((a, b) => b.enquiries - a.enquiries)
//         );
//       } catch (err) {
//         console.error("Failed to load report data:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   // Rebuild sales chart + KPIs whenever dateRange or orders change
//   const salesData = useMemo(
//     () => buildSalesSeries(rawOrders, dateRange),
//     [rawOrders, dateRange]
//   );

//   const totalSales = salesData.reduce((sum, item) => sum + item.sales, 0);
//   const totalProfit = salesData.reduce((sum, item) => sum + item.profit, 0);
//   const totalOrders = salesData.reduce((sum, item) => sum + item.orders, 0);

//   const receivedPayments = payments.reduce(
//     (sum, payment) => sum + payment.received,
//     0
//   );
//   const pendingPayments = payments.reduce(
//     (sum, payment) => sum + payment.pending,
//     0
//   );

//   const averageOrderValue = totalOrders > 0 ? totalSales / totalOrders : 0;

//   const conversionRate = useMemo(() => {
//     const totalEnquiries = enquiries.reduce(
//       (sum, item) => sum + item.enquiries,
//       0
//     );
//     const totalConverted = enquiries.reduce(
//       (sum, item) => sum + item.converted,
//       0
//     );
//     return totalEnquiries ? (totalConverted / totalEnquiries) * 100 : 0;
//   }, [enquiries]);

//   const maxSales = Math.max(...salesData.map((item) => item.sales), 1);

//   const chartSubtitle = useMemo(() => {
//     switch (dateRange) {
//       case "Today":
//         return "Sales for today.";
//       case "This Week":
//         return "Daily sales this week (Mon–Sun).";
//       case "This Month":
//         return "Sales for the current month.";
//       case "Last 3 Months":
//         return "Monthly sales — last 3 months.";
//       case "Last 6 Months":
//         return "Monthly sales — last 6 months.";
//       case "This Year":
//         return "Monthly sales — year to date.";
//       default:
//         return "Sales performance for selected period.";
//     }
//   }, [dateRange]);

//   const filteredOrders = orders.filter((order) => {
//     const searchText = search.toLowerCase().trim();
//     const matchesSearch =
//       !searchText ||
//       order.id.toLowerCase().includes(searchText) ||
//       order.customer.toLowerCase().includes(searchText) ||
//       order.product.toLowerCase().includes(searchText);
//     const matchesCategory =
//       categoryFilter === "All Categories" ||
//       order.category === categoryFilter;
//     return matchesSearch && matchesCategory;
//   });

//   const filteredProducts = products.filter((product) => {
//     const searchText = search.toLowerCase().trim();
//     const matchesSearch =
//       !searchText ||
//       product.name.toLowerCase().includes(searchText) ||
//       product.category.toLowerCase().includes(searchText);
//     const matchesCategory =
//       categoryFilter === "All Categories" ||
//       product.category === categoryFilter;
//     return matchesSearch && matchesCategory;
//   });

//   const filteredPayments = payments.filter((payment) => {
//     const searchText = search.toLowerCase().trim();
//     return (
//       !searchText ||
//       payment.id.toLowerCase().includes(searchText) ||
//       payment.customer.toLowerCase().includes(searchText) ||
//       payment.order.toLowerCase().includes(searchText)
//     );
//   });

//   const handlePrint = () => {
//     window.print();
//   };

//   const renderSalesReport = () => (
//     <div className="space-y-6">
//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//         <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <p className="text-sm text-gray-500">Total Sales</p>
//           <p className="mt-2 text-2xl font-bold text-[#222]">
//             {loading ? "…" : formatCompactCurrency(totalSales)}
//           </p>
//           <p className="mt-1 text-xs text-gray-400">{dateRange}</p>
//         </div>
//         <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <p className="text-sm text-gray-500">Total Profit</p>
//           <p className="mt-2 text-2xl font-bold text-[#176b5b]">
//             {loading ? "…" : formatCompactCurrency(totalProfit)}
//           </p>
//           <p className="mt-1 text-xs text-[#176b5b]">
//             {totalSales > 0
//               ? ((totalProfit / totalSales) * 100).toFixed(1)
//               : "0"}
//             % margin
//           </p>
//         </div>
//         <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <p className="text-sm text-gray-500">Total Orders</p>
//           <p className="mt-2 text-2xl font-bold text-[#222]">
//             {loading ? "…" : totalOrders}
//           </p>
//         </div>
//         <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <p className="text-sm text-gray-500">Average Order Value</p>
//           <p className="mt-2 text-2xl font-bold text-[#222]">
//             {loading ? "…" : formatCompactCurrency(averageOrderValue)}
//           </p>
//           <p className="mt-1 text-xs text-gray-500">Per order in period</p>
//         </div>
//       </div>

//       <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//         <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             <h2 className="text-base font-bold text-[#222]">
//               Sales Performance
//             </h2>
//             <p className="mt-1 text-xs text-gray-500">{chartSubtitle}</p>
//           </div>
//           <div className="flex gap-4 text-xs text-gray-500">
//             <span className="flex items-center gap-2">
//               <span className="h-2.5 w-2.5 rounded-full bg-[#176b5b]" />
//               Sales
//             </span>
//             <span className="flex items-center gap-2">
//               <span className="h-2.5 w-2.5 rounded-full bg-[#c89b62]" />
//               Profit
//             </span>
//           </div>
//         </div>
//         <div className="mt-8">
//           <div className="flex h-[280px] items-end gap-3 border-b border-l border-[#e4e2da] px-3 pb-0 sm:gap-5">
//             {salesData.map((item) => {
//               const salesHeight = (item.sales / maxSales) * 230;
//               const profitHeight = (item.profit / maxSales) * 230;
//               return (
//                 <div
//                   key={item.month}
//                   className="flex h-full flex-1 items-end justify-center gap-1"
//                 >
//                   <div className="flex h-full items-end">
//                     <div
//                       title={`${item.month} Sales: ${formatCurrency(item.sales)}`}
//                       className="w-5 rounded-t-md bg-[#176b5b] transition hover:opacity-80 sm:w-8"
//                       style={{ height: `${Math.max(salesHeight, 2)}px` }}
//                     />
//                   </div>
//                   <div className="flex h-full items-end">
//                     <div
//                       title={`${item.month} Profit: ${formatCurrency(item.profit)}`}
//                       className="w-5 rounded-t-md bg-[#c89b62] transition hover:opacity-80 sm:w-8"
//                       style={{ height: `${Math.max(profitHeight, 2)}px` }}
//                     />
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//           <div className="mt-3 flex gap-3 pl-3 sm:gap-5">
//             {salesData.map((item) => (
//               <div
//                 key={item.month}
//                 className="flex-1 text-center text-xs text-gray-500"
//               >
//                 {item.month}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//         <div className="border-b border-[#e4e2da] px-5 py-4">
//           <h2 className="text-base font-bold text-[#222]">
//             {dateRange === "This Week" || dateRange === "Today"
//               ? "Period Breakdown"
//               : "Monthly Sales Breakdown"}
//           </h2>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="w-full min-w-[700px] text-left">
//             <thead className="bg-[#fafaf8]">
//               <tr>
//                 <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                   {dateRange === "This Week" ? "Day" : "Period"}
//                 </th>
//                 <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                   Orders
//                 </th>
//                 <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                   Sales
//                 </th>
//                 <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                   Profit
//                 </th>
//                 <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                   Margin
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-[#eeece5]">
//               {salesData.map((item) => (
//                 <tr key={item.month}>
//                   <td className="px-5 py-4 text-sm font-medium text-gray-800">
//                     {item.month}
//                   </td>
//                   <td className="px-5 py-4 text-sm text-gray-600">
//                     {item.orders}
//                   </td>
//                   <td className="px-5 py-4 text-sm font-semibold text-gray-800">
//                     {formatCurrency(item.sales)}
//                   </td>
//                   <td className="px-5 py-4 text-sm font-semibold text-[#176b5b]">
//                     {formatCurrency(item.profit)}
//                   </td>
//                   <td className="px-5 py-4 text-sm text-gray-600">
//                     {item.sales > 0
//                       ? ((item.profit / item.sales) * 100).toFixed(1)
//                       : "0"}
//                     %
//                   </td>
//                 </tr>
//               ))}
//               {!loading && salesData.every((s) => s.sales === 0) && (
//                 <tr>
//                   <td
//                     colSpan={5}
//                     className="px-5 py-10 text-center text-sm text-gray-500"
//                   >
//                     No sales in this period.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );

//   const renderOrdersReport = () => {
//     const delivered = orders.filter((o) => o.status === "Delivered").length;
//     const production = orders.filter((o) => o.status === "Production").length;
//     const confirmed = orders.filter((o) => o.status === "Confirmed").length;
//     const orderValue = orders.reduce((sum, o) => sum + o.amount, 0);
//     const total = orders.length || 1;

//     return (
//       <div className="space-y-6">
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Total Orders</p>
//             <p className="mt-2 text-2xl font-bold text-[#222]">
//               {loading ? "…" : orders.length}
//             </p>
//           </div>
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Order Value</p>
//             <p className="mt-2 text-2xl font-bold text-[#176b5b]">
//               {loading ? "…" : formatCompactCurrency(orderValue)}
//             </p>
//           </div>
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Delivered</p>
//             <p className="mt-2 text-2xl font-bold text-[#222]">
//               {loading ? "…" : delivered}
//             </p>
//             <p className="mt-1 text-xs text-gray-400">
//               {((delivered / total) * 100).toFixed(0)}% of orders
//             </p>
//           </div>
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">In Production</p>
//             <p className="mt-2 text-2xl font-bold text-[#222]">
//               {loading ? "…" : production}
//             </p>
//             <p className="mt-1 text-xs text-gray-400">
//               Confirmed: {confirmed}
//             </p>
//           </div>
//         </div>

//         <div className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="border-b border-[#e4e2da] px-5 py-4">
//             <h2 className="text-base font-bold text-[#222]">Orders Report</h2>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[900px] text-left">
//               <thead className="bg-[#fafaf8]">
//                 <tr>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Order
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Customer
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Product
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Category
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Amount
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Status
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Payment
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Date
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece5]">
//                 {filteredOrders.map((order) => (
//                   <tr key={order.id}>
//                     <td className="px-5 py-4 text-sm font-semibold text-[#176b5b]">
//                       {order.id}
//                     </td>
//                     <td className="px-5 py-4 text-sm text-gray-700">
//                       {order.customer}
//                     </td>
//                     <td className="px-5 py-4 text-sm text-gray-600">
//                       {order.product}
//                     </td>
//                     <td className="px-5 py-4 text-sm text-gray-600">
//                       {order.category}
//                     </td>
//                     <td className="px-5 py-4 text-sm font-semibold text-gray-800">
//                       {formatCurrency(order.amount)}
//                     </td>
//                     <td className="px-5 py-4">
//                       <span
//                         className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusClass(
//                           order.status
//                         )}`}
//                       >
//                         {order.status}
//                       </span>
//                     </td>
//                     <td className="px-5 py-4">
//                       <span
//                         className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusClass(
//                           order.payment
//                         )}`}
//                       >
//                         {order.payment}
//                       </span>
//                     </td>
//                     <td className="px-5 py-4 text-sm text-gray-600">
//                       {order.date}
//                     </td>
//                   </tr>
//                 ))}
//                 {!loading && filteredOrders.length === 0 && (
//                   <tr>
//                     <td
//                       colSpan={8}
//                       className="px-5 py-10 text-center text-sm text-gray-500"
//                     >
//                       No orders found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderPaymentsReport = () => {
//     const rate =
//       receivedPayments + pendingPayments > 0
//         ? (receivedPayments / (receivedPayments + pendingPayments)) * 100
//         : 0;

//     return (
//       <div className="space-y-6">
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Received</p>
//             <p className="mt-2 text-2xl font-bold text-[#176b5b]">
//               {loading ? "…" : formatCompactCurrency(receivedPayments)}
//             </p>
//           </div>
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Pending</p>
//             <p className="mt-2 text-2xl font-bold text-[#a36a00]">
//               {loading ? "…" : formatCompactCurrency(pendingPayments)}
//             </p>
//           </div>
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Records</p>
//             <p className="mt-2 text-2xl font-bold text-[#222]">
//               {loading ? "…" : payments.length}
//             </p>
//           </div>
//         </div>

//         <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <div className="flex items-center justify-between gap-4">
//             <div>
//               <h2 className="text-base font-bold text-[#222]">
//                 Collection Rate
//               </h2>
//               <p className="mt-1 text-xs text-gray-500">
//                 Received versus pending customer payments.
//               </p>
//             </div>
//             <span className="text-sm font-semibold text-[#176b5b]">
//               {rate.toFixed(1)}%
//             </span>
//           </div>
//           <div className="mt-5 h-4 overflow-hidden rounded-full bg-[#f0eee7]">
//             <div
//               className="h-full rounded-full bg-[#176b5b]"
//               style={{ width: `${Math.min(rate, 100)}%` }}
//             />
//           </div>
//           <div className="mt-3 flex justify-between text-xs text-gray-500">
//             <span>Received {formatCurrency(receivedPayments)}</span>
//             <span>Pending {formatCurrency(pendingPayments)}</span>
//           </div>
//         </div>

//         <div className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="border-b border-[#e4e2da] px-5 py-4">
//             <h2 className="text-base font-bold text-[#222]">Payment Report</h2>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[900px] text-left">
//               <thead className="bg-[#fafaf8]">
//                 <tr>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Payment
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Customer
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Order
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Amount
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Received
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Pending
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Status
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece5]">
//                 {filteredPayments.map((payment) => (
//                   <tr key={payment.id}>
//                     <td className="px-5 py-4 text-sm font-semibold text-[#176b5b]">
//                       {payment.id}
//                     </td>
//                     <td className="px-5 py-4 text-sm text-gray-700">
//                       {payment.customer}
//                     </td>
//                     <td className="px-5 py-4 text-sm text-gray-600">
//                       {payment.order}
//                     </td>
//                     <td className="px-5 py-4 text-sm font-semibold text-gray-800">
//                       {formatCurrency(payment.amount)}
//                     </td>
//                     <td className="px-5 py-4 text-sm font-semibold text-[#176b5b]">
//                       {formatCurrency(payment.received)}
//                     </td>
//                     <td className="px-5 py-4 text-sm font-semibold text-[#a36a00]">
//                       {formatCurrency(payment.pending)}
//                     </td>
//                     <td className="px-5 py-4">
//                       <span
//                         className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusClass(
//                           payment.status
//                         )}`}
//                       >
//                         {payment.status}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//                 {!loading && filteredPayments.length === 0 && (
//                   <tr>
//                     <td
//                       colSpan={7}
//                       className="px-5 py-10 text-center text-sm text-gray-500"
//                     >
//                       No payments found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderProductsReport = () => {
//     const totalRevenue = products.reduce((sum, p) => sum + p.revenue, 0) || 1;
//     const totalUnits = products.reduce((sum, p) => sum + p.sales, 0);
//     const sortedBySales = [...products].sort((a, b) => b.sales - a.sales);
//     const sortedByRevenue = [...products].sort((a, b) => b.revenue - a.revenue);

//     return (
//       <div className="space-y-6">
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Products Tracked</p>
//             <p className="mt-2 text-2xl font-bold text-[#222]">
//               {loading ? "…" : products.length}
//             </p>
//           </div>
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Units Sold</p>
//             <p className="mt-2 text-2xl font-bold text-[#222]">
//               {loading ? "…" : totalUnits}
//             </p>
//           </div>
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Product Revenue</p>
//             <p className="mt-2 text-2xl font-bold text-[#176b5b]">
//               {loading
//                 ? "…"
//                 : formatCompactCurrency(totalRevenue === 1 ? 0 : totalRevenue)}
//             </p>
//           </div>
//         </div>

//         <div className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="border-b border-[#e4e2da] px-5 py-4">
//             <h2 className="text-base font-bold text-[#222]">
//               Product Performance
//             </h2>
//             <p className="mt-1 text-xs text-gray-500">
//               Products ranked by units sold and revenue.
//             </p>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[850px] text-left">
//               <thead className="bg-[#fafaf8]">
//                 <tr>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Product
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Category
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Units Sold
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Revenue
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Current Stock
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     Revenue Share
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece5]">
//                 {filteredProducts.map((product) => (
//                   <tr key={product.name}>
//                     <td className="px-5 py-4 text-sm font-semibold text-gray-800">
//                       {product.name}
//                     </td>
//                     <td className="px-5 py-4 text-sm text-gray-600">
//                       {product.category}
//                     </td>
//                     <td className="px-5 py-4 text-sm font-semibold text-gray-800">
//                       {product.sales}
//                     </td>
//                     <td className="px-5 py-4 text-sm font-semibold text-[#176b5b]">
//                       {formatCurrency(product.revenue)}
//                     </td>
//                     <td className="px-5 py-4">
//                       <span
//                         className={`text-sm font-semibold ${
//                           product.stock <= 3
//                             ? "text-[#a36a00]"
//                             : "text-gray-800"
//                         }`}
//                       >
//                         {product.stock}
//                       </span>
//                     </td>
//                     <td className="px-5 py-4">
//                       <div className="flex items-center gap-3">
//                         <div className="h-2 w-20 overflow-hidden rounded-full bg-gray-100">
//                           <div
//                             className="h-full rounded-full bg-[#176b5b]"
//                             style={{
//                               width: `${Math.min(
//                                 100,
//                                 (product.revenue / totalRevenue) * 100 * 4
//                               )}%`,
//                             }}
//                           />
//                         </div>
//                         <span className="text-xs text-gray-500">
//                           {((product.revenue / totalRevenue) * 100).toFixed(1)}%
//                         </span>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//                 {!loading && filteredProducts.length === 0 && (
//                   <tr>
//                     <td
//                       colSpan={6}
//                       className="px-5 py-10 text-center text-sm text-gray-500"
//                     >
//                       No products found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <h2 className="text-base font-bold text-[#222]">
//               Best Selling Product
//             </h2>
//             <div className="mt-5 rounded-lg bg-[#fafaf8] p-4">
//               <p className="text-xs text-gray-400">Top by units sold</p>
//               <p className="mt-1 text-lg font-bold text-[#222]">
//                 {sortedBySales[0]?.name || "—"}
//               </p>
//               <p className="mt-1 text-sm text-[#176b5b]">
//                 {sortedBySales[0]
//                   ? `${sortedBySales[0].sales} units sold`
//                   : "No data"}
//               </p>
//             </div>
//           </div>
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <h2 className="text-base font-bold text-[#222]">
//               Highest Revenue Product
//             </h2>
//             <div className="mt-5 rounded-lg bg-[#fafaf8] p-4">
//               <p className="text-xs text-gray-400">Top by revenue</p>
//               <p className="mt-1 text-lg font-bold text-[#222]">
//                 {sortedByRevenue[0]?.name || "—"}
//               </p>
//               <p className="mt-1 text-sm text-[#176b5b]">
//                 {sortedByRevenue[0]
//                   ? formatCurrency(sortedByRevenue[0].revenue)
//                   : "No data"}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderEnquiriesReport = () => {
//     const totalEnquiries = enquiries.reduce(
//       (sum, item) => sum + item.enquiries,
//       0
//     );
//     const totalConverted = enquiries.reduce(
//       (sum, item) => sum + item.converted,
//       0
//     );

//     return (
//       <div className="space-y-6">
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Total Enquiries</p>
//             <p className="mt-2 text-2xl font-bold text-[#222]">
//               {loading ? "…" : totalEnquiries}
//             </p>
//           </div>
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Converted</p>
//             <p className="mt-2 text-2xl font-bold text-[#176b5b]">
//               {loading ? "…" : totalConverted}
//             </p>
//           </div>
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <p className="text-sm text-gray-500">Conversion Rate</p>
//             <p className="mt-2 text-2xl font-bold text-[#176b5b]">
//               {loading ? "…" : `${conversionRate.toFixed(1)}%`}
//             </p>
//           </div>
//         </div>

//         <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <h2 className="text-base font-bold text-[#222]">
//             Enquiries by Source
//           </h2>
//           <p className="mt-1 text-xs text-gray-500">
//             Understand which channels are generating customers.
//           </p>
//           <div className="mt-6 space-y-5">
//             {enquiries.map((item) => {
//               const rate =
//                 item.enquiries > 0
//                   ? (item.converted / item.enquiries) * 100
//                   : 0;
//               return (
//                 <div key={item.source}>
//                   <div className="flex items-center justify-between gap-4">
//                     <div>
//                       <p className="text-sm font-semibold text-gray-800">
//                         {item.source}
//                       </p>
//                       <p className="mt-1 text-xs text-gray-400">
//                         {item.enquiries} enquiries • {item.converted} converted
//                       </p>
//                     </div>
//                     <span className="text-sm font-bold text-[#176b5b]">
//                       {rate.toFixed(0)}%
//                     </span>
//                   </div>
//                   <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
//                     <div
//                       className="h-full rounded-full bg-[#176b5b]"
//                       style={{ width: `${rate}%` }}
//                     />
//                   </div>
//                 </div>
//               );
//             })}
//             {!loading && enquiries.length === 0 && (
//               <p className="text-sm text-gray-500">No enquiry data available.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderReport = () => {
//     switch (activeReport) {
//       case "Sales":
//         return renderSalesReport();
//       case "Orders":
//         return renderOrdersReport();
//       case "Payments":
//         return renderPaymentsReport();
//       case "Products":
//         return renderProductsReport();
//       case "Enquiries":
//         return renderEnquiriesReport();
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       <div className="border-b border-[#e4e2da] bg-white print:hidden">
//         <div className="mx-auto max-w-[1550px] px-4 py-5 sm:px-6 lg:px-8">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
//                 <span>Furniture</span>
//                 <span>/</span>
//                 <span className="text-gray-700">Reports</span>
//               </div>
//               <h1 className="text-2xl font-bold text-[#222]">
//                 Reports & Analytics
//               </h1>
//               <p className="mt-1 text-sm text-gray-500">
//                 Analyze sales, orders, payments, products and enquiries.
//               </p>
//             </div>
//             <button
//               onClick={handlePrint}
//               className="flex items-center justify-center gap-2 rounded-lg border border-[#d9d7cf] bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
//             >
//               <svg
//                 width="17"
//                 height="17"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//               >
//                 <path d="M6 9V3h12v6" />
//                 <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
//                 <path d="M6 14h12v7H6z" />
//               </svg>
//               Print Report
//             </button>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1550px] px-4 py-6 sm:px-6 lg:px-8">
//         <div className="rounded-xl border border-[#e4e2da] bg-white p-2 print:hidden">
//           <div className="flex gap-1 overflow-x-auto">
//             {reportTypes.map((report) => (
//               <button
//                 key={report}
//                 onClick={() => {
//                   setActiveReport(report);
//                   setSearch("");
//                 }}
//                 className={`whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
//                   activeReport === report
//                     ? "bg-[#176b5b] text-white"
//                     : "text-gray-600 hover:bg-[#f7f7f4]"
//                 }`}
//               >
//                 {report} Report
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="mt-5 rounded-xl border border-[#e4e2da] bg-white p-4 print:hidden">
//           <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
//             <div className="flex flex-col gap-3 md:flex-row">
//               <select
//                 value={dateRange}
//                 onChange={(e) => setDateRange(e.target.value)}
//                 className="rounded-lg border border-[#d9d7cf] bg-white px-4 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//               >
//                 <option>Today</option>
//                 <option>This Week</option>
//                 <option>This Month</option>
//                 <option>Last 3 Months</option>
//                 <option>Last 6 Months</option>
//                 <option>This Year</option>
//               </select>

//               {(activeReport === "Orders" || activeReport === "Products") && (
//                 <select
//                   value={categoryFilter}
//                   onChange={(e) => setCategoryFilter(e.target.value)}
//                   className="rounded-lg border border-[#d9d7cf] bg-white px-4 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   <option>All Categories</option>
//                   <option>Sofa</option>
//                   <option>Bed</option>
//                   <option>Dining Table</option>
//                   <option>Chair</option>
//                   <option>Wardrobe</option>
//                   <option>TV Unit</option>
//                   <option>Study Table</option>
//                   <option>Office Furniture</option>
//                 </select>
//               )}

//               {(activeReport === "Orders" ||
//                 activeReport === "Payments" ||
//                 activeReport === "Products") && (
//                 <div className="relative">
//                   <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                     <svg
//                       width="17"
//                       height="17"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="1.8"
//                     >
//                       <circle cx="11" cy="11" r="7" />
//                       <path d="m20 20-4-4" />
//                     </svg>
//                   </span>
//                   <input
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                     placeholder={`Search ${activeReport.toLowerCase()}...`}
//                     className="w-full rounded-lg border border-[#d9d7cf] py-2.5 pl-9 pr-4 text-sm outline-none focus:border-[#176b5b] md:w-72"
//                   />
//                 </div>
//               )}
//             </div>
//             <p className="text-xs text-gray-500">
//               Report period:{" "}
//               <span className="font-semibold text-gray-700">{dateRange}</span>
//               {loading && (
//                 <span className="ml-2 text-[#176b5b]">Loading…</span>
//               )}
//             </p>
//           </div>
//         </div>

//         <div className="mt-6 hidden print:block">
//           <h1 className="text-2xl font-bold">Akrish Furniture Reports</h1>
//           <p className="mt-1 text-sm text-gray-500">
//             {activeReport} Report • {dateRange}
//           </p>
//         </div>

//         <div className="mt-6">{renderReport()}</div>
//       </main>

//       <style jsx global>{`
//         @media print {
//           body {
//             background: white !important;
//           }
//           .print\\:hidden {
//             display: none !important;
//           }
//           .print\\:block {
//             display: block !important;
//           }
//           @page {
//             size: A4;
//             margin: 15mm;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAllOrders,
//   type FurnitureOrder,
// } from "@/modules/furniture/services/orderService";
// import {
//   getAllPayments,
//   type FurniturePayment,
// } from "@/modules/furniture/services/paymentService";
// import {
//   getAllProducts,
//   type FurnitureProduct,
// } from "@/modules/furniture/services/productService";
// import {
//   getAllEnquiries,
//   type FurnitureEnquiry,
// } from "@/modules/furniture/services/enquiryService";
// import { Timestamp } from "firebase/firestore";

// type ReportType =
//   | "Sales"
//   | "Orders"
//   | "Payments"
//   | "Products"
//   | "Enquiries";

// type Sale = {
//   month: string;
//   sales: number;
//   orders: number;
//   profit: number;
// };

// type Order = {
//   id: string;
//   customer: string;
//   product: string;
//   category: string;
//   amount: number;
//   status: string;
//   payment: string;
//   date: string;
//   createdAt: Date | null;
// };

// type Payment = {
//   id: string;
//   customer: string;
//   order: string;
//   amount: number;
//   received: number;
//   pending: number;
//   status: string;
//   method: string;
//   date: string;
// };

// type Product = {
//   name: string;
//   category: string;
//   sales: number;
//   revenue: number;
//   stock: number;
// };

// type Enquiry = {
//   source: string;
//   enquiries: number;
//   converted: number;
// };

// const reportTypes: ReportType[] = [
//   "Sales",
//   "Orders",
//   "Payments",
//   "Products",
//   "Enquiries",
// ];

// const MONTHS = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];

// const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function formatCompactCurrency(value: number) {
//   if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
//   if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
//   if (value >= 1000) return `₹${(value / 1000).toFixed(0)}K`;
//   return formatCurrency(value);
// }

// function getStatusClass(status: string) {
//   switch (status) {
//     case "Delivered":
//     case "Received":
//     case "Paid":
//       return "bg-[#eaf5f1] text-[#176b5b]";
//     case "Production":
//     case "Processing":
//     case "Partial":
//       return "bg-[#fff5df] text-[#a36a00]";
//     case "Confirmed":
//     case "Shipped":
//       return "bg-[#eef2ff] text-[#4f46a5]";
//     case "Pending":
//       return "bg-[#fdecec] text-[#b42318]";
//     default:
//       return "bg-gray-100 text-gray-600";
//   }
// }

// function toDate(value: unknown): Date | null {
//   if (!value) return null;
//   try {
//     if (typeof (value as Timestamp).toDate === "function") {
//       return (value as Timestamp).toDate();
//     }
//     if (typeof value === "string") {
//       const d = new Date(value);
//       return Number.isNaN(d.getTime()) ? null : d;
//     }
//   } catch {
//     /* ignore */
//   }
//   return null;
// }

// function formatDateStr(d: Date | null): string {
//   if (!d) return "—";
//   return d.toISOString().slice(0, 10);
// }

// function mapOrderStatus(raw?: string): string {
//   const s = (raw || "Pending").trim();
//   if (s === "Delivered") return "Delivered";
//   if (s === "Processing" || s === "Production" || s === "Shipped")
//     return s === "Shipped" ? "Production" : "Production";
//   if (s === "Paid" || s === "Confirmed") return "Confirmed";
//   return s || "Confirmed";
// }

// function mapPaymentStatus(raw?: string, paid = 0, total = 0): string {
//   const s = (raw || "").trim();
//   if (s === "Received" || s === "Paid") return "Received";
//   if (s === "Partial") return "Partial";
//   if (paid >= total && total > 0) return "Received";
//   if (paid > 0) return "Partial";
//   return "Pending";
// }

// function orderAmount(o: FurnitureOrder): number {
//   return (
//     Number(o.amount ?? o.total ?? o.totalAmount ?? 0) ||
//     (o.items || []).reduce(
//       (s, i) => s + (Number(i.price) || 0) * (Number(i.qty) || 1),
//       0
//     )
//   );
// }

// function getDateRangeBounds(dateRange: string): { start: Date; end: Date } {
//   const end = new Date();
//   end.setHours(23, 59, 59, 999);
//   const start = new Date();

//   switch (dateRange) {
//     case "Today":
//       start.setHours(0, 0, 0, 0);
//       break;
//     case "This Week": {
//       const day = start.getDay();
//       const diff = day === 0 ? 6 : day - 1;
//       start.setDate(start.getDate() - diff);
//       start.setHours(0, 0, 0, 0);
//       break;
//     }
//     case "This Month":
//       start.setDate(1);
//       start.setHours(0, 0, 0, 0);
//       break;
//     case "Last 3 Months":
//       start.setMonth(start.getMonth() - 2, 1);
//       start.setHours(0, 0, 0, 0);
//       break;
//     case "Last 6 Months":
//       start.setMonth(start.getMonth() - 5, 1);
//       start.setHours(0, 0, 0, 0);
//       break;
//     case "This Year":
//       start.setMonth(0, 1);
//       start.setHours(0, 0, 0, 0);
//       break;
//     default:
//       start.setMonth(start.getMonth() - 5, 1);
//       start.setHours(0, 0, 0, 0);
//   }

//   return { start, end };
// }

// function buildSalesSeries(
//   rawOrders: FurnitureOrder[],
//   dateRange: string
// ): Sale[] {
//   const { start, end } = getDateRangeBounds(dateRange);

//   const inRange = rawOrders.filter((o) => {
//     const d = toDate(o.createdAt);
//     if (!d) return false;
//     return d >= start && d <= end;
//   });

//   if (dateRange === "Today") {
//     let sales = 0;
//     let orders = 0;
//     inRange.forEach((o) => {
//       sales += orderAmount(o);
//       orders += 1;
//     });
//     const label = start.toLocaleDateString("en-IN", {
//       day: "numeric",
//       month: "short",
//     });
//     return [{ month: label, sales, orders, profit: Math.round(sales * 0.3) }];
//   }

//   if (dateRange === "This Week") {
//     const buckets: Sale[] = [];
//     for (let i = 0; i < 7; i++) {
//       const d = new Date(start);
//       d.setDate(start.getDate() + i);
//       buckets.push({
//         month: WEEKDAYS[d.getDay()],
//         sales: 0,
//         orders: 0,
//         profit: 0,
//       });
//     }

//     const byKey = new Map(
//       buckets.map((b, i) => {
//         const d = new Date(start);
//         d.setDate(start.getDate() + i);
//         return [formatDateStr(d), b];
//       })
//     );

//     inRange.forEach((o) => {
//       const d = toDate(o.createdAt);
//       if (!d) return;
//       const entry = byKey.get(formatDateStr(d));
//       if (!entry) return;
//       entry.sales += orderAmount(o);
//       entry.orders += 1;
//       entry.profit = Math.round(entry.sales * 0.3);
//     });

//     return buckets.map(({ month, sales, orders, profit }) => ({
//       month,
//       sales,
//       orders,
//       profit,
//     }));
//   }

//   let monthCount = 6;
//   if (dateRange === "This Month") monthCount = 1;
//   else if (dateRange === "Last 3 Months") monthCount = 3;
//   else if (dateRange === "Last 6 Months") monthCount = 6;
//   else if (dateRange === "This Year") monthCount = new Date().getMonth() + 1;

//   const monthMap = new Map<
//     string,
//     { sales: number; orders: number; label: string }
//   >();

//   const now = new Date();
//   for (let i = monthCount - 1; i >= 0; i--) {
//     const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
//     const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
//     monthMap.set(key, { sales: 0, orders: 0, label: MONTHS[d.getMonth()] });
//   }

//   inRange.forEach((o) => {
//     const d = toDate(o.createdAt);
//     if (!d) return;
//     const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
//     const entry = monthMap.get(key);
//     if (!entry) return;
//     entry.sales += orderAmount(o);
//     entry.orders += 1;
//   });

//   return Array.from(monthMap.values()).map((m) => ({
//     month: m.label,
//     sales: m.sales,
//     orders: m.orders,
//     profit: Math.round(m.sales * 0.3),
//   }));
// }

// export default function FurnitureReportsPage() {
//   const [activeReport, setActiveReport] = useState<ReportType>("Sales");
//   const [dateRange, setDateRange] = useState("Last 6 Months");
//   const [categoryFilter, setCategoryFilter] = useState("All Categories");
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(true);

//   const [rawOrders, setRawOrders] = useState<FurnitureOrder[]>([]);
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [payments, setPayments] = useState<Payment[]>([]);
//   const [products, setProducts] = useState<Product[]>([]);
//   const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const [rawOrdersData, rawPayments, rawProducts, rawEnquiries] =
//           await Promise.all([
//             getAllOrders().catch(() => [] as FurnitureOrder[]),
//             getAllPayments().catch(() => [] as FurniturePayment[]),
//             getAllProducts().catch(() => [] as FurnitureProduct[]),
//             getAllEnquiries().catch(() => [] as FurnitureEnquiry[]),
//           ]);

//         if (cancelled) return;

//         setRawOrders(rawOrdersData);

//         setOrders(
//           rawOrdersData.map((o) => {
//             const d = toDate(o.createdAt);
//             const items = o.items || [];
//             const first = items[0];
//             const amount = orderAmount(o);

//             return {
//               id: o.orderNo || o.id,
//               customer: o.customerName || "Unknown",
//               product: first?.name || "—",
//               category: (first as { category?: string })?.category || "—",
//               amount,
//               status: mapOrderStatus(o.status),
//               payment: mapPaymentStatus(
//                 o.paymentStatus,
//                 Number((o as { paid?: number }).paid ?? 0),
//                 amount
//               ),
//               date: formatDateStr(d),
//               createdAt: d,
//             };
//           })
//         );

//         const mappedPayments: Payment[] = rawPayments.map((p) => {
//           const amount = Number(p.amount ?? 0) || 0;
//           const received = Number(p.paidAmount ?? 0) || 0;
//           const pending =
//             p.dueAmount !== undefined && p.dueAmount !== null
//               ? Number(p.dueAmount) || 0
//               : Math.max(amount - received, 0);

//           return {
//             id: p.paymentNo || p.id,
//             customer: p.customer || p.customerName || "Unknown",
//             order: p.orderNo || "—",
//             amount,
//             received,
//             pending,
//             status: mapPaymentStatus(p.status, received, amount),
//             method: p.paymentMethod || "UPI",
//             date: p.paymentDate || p.dueDate || "—",
//           };
//         });

//         if (mappedPayments.length === 0 && rawOrdersData.length > 0) {
//           setPayments(
//             rawOrdersData.map((o) => {
//               const amount = orderAmount(o);
//               const paid = Number((o as { paid?: number }).paid ?? 0) || 0;
//               return {
//                 id: `PAY-${(o.orderNo || o.id).slice(-6)}`,
//                 customer: o.customerName || "Unknown",
//                 order: o.orderNo || o.id,
//                 amount,
//                 received: paid,
//                 pending: Math.max(amount - paid, 0),
//                 status: mapPaymentStatus(o.paymentStatus, paid, amount),
//                 method: "UPI",
//                 date: formatDateStr(toDate(o.createdAt)),
//               };
//             })
//           );
//         } else {
//           setPayments(mappedPayments);
//         }

//         const productAgg = new Map<
//           string,
//           { sales: number; revenue: number; category: string; stock: number }
//         >();

//         rawProducts.forEach((p) => {
//           productAgg.set(p.name || p.id, {
//             sales: Number(p.salesCount ?? 0) || 0,
//             revenue: Number(p.revenue ?? 0) || 0,
//             category: p.category || "—",
//             stock: Number(p.stock ?? 0) || 0,
//           });
//         });

//         rawOrdersData.forEach((o) => {
//           (o.items || []).forEach((item) => {
//             const name = item.name || "Unknown";
//             const existing = productAgg.get(name) || {
//               sales: 0,
//               revenue: 0,
//               category: "—",
//               stock: 0,
//             };
//             const qty = Number(item.qty) || 1;
//             const price = Number(item.price) || 0;
//             existing.sales += qty;
//             existing.revenue += price * qty;
//             productAgg.set(name, existing);
//           });
//         });

//         setProducts(
//           Array.from(productAgg.entries())
//             .map(([name, v]) => ({
//               name,
//               category: v.category,
//               sales: v.sales,
//               revenue: v.revenue,
//               stock: v.stock,
//             }))
//             .sort((a, b) => b.revenue - a.revenue)
//         );

//         const sourceMap = new Map<
//           string,
//           { enquiries: number; converted: number }
//         >();
//         rawEnquiries.forEach((e) => {
//           const source = e.source || "Other";
//           const entry = sourceMap.get(source) || {
//             enquiries: 0,
//             converted: 0,
//           };
//           entry.enquiries += 1;
//           if (e.status === "Converted") entry.converted += 1;
//           sourceMap.set(source, entry);
//         });

//         setEnquiries(
//           Array.from(sourceMap.entries())
//             .map(([source, v]) => ({
//               source,
//               enquiries: v.enquiries,
//               converted: v.converted,
//             }))
//             .sort((a, b) => b.enquiries - a.enquiries)
//         );
//       } catch (err) {
//         console.error("Failed to load report data:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const salesData = useMemo(
//     () => buildSalesSeries(rawOrders, dateRange),
//     [rawOrders, dateRange]
//   );

//   const totalSales = salesData.reduce((sum, item) => sum + item.sales, 0);
//   const totalProfit = salesData.reduce((sum, item) => sum + item.profit, 0);
//   const totalOrders = salesData.reduce((sum, item) => sum + item.orders, 0);

//   const receivedPayments = payments.reduce((s, p) => s + p.received, 0);
//   const pendingPayments = payments.reduce((s, p) => s + p.pending, 0);
//   const averageOrderValue = totalOrders > 0 ? totalSales / totalOrders : 0;

//   const conversionRate = useMemo(() => {
//     const totalE = enquiries.reduce((s, i) => s + i.enquiries, 0);
//     const totalC = enquiries.reduce((s, i) => s + i.converted, 0);
//     return totalE ? (totalC / totalE) * 100 : 0;
//   }, [enquiries]);

//   const maxSales = Math.max(...salesData.map((i) => i.sales), 1);

//   const chartSubtitle = useMemo(() => {
//     switch (dateRange) {
//       case "Today":
//         return "Sales for today.";
//       case "This Week":
//         return "Daily sales this week (Mon–Sun).";
//       case "This Month":
//         return "Sales for the current month.";
//       case "Last 3 Months":
//         return "Monthly sales — last 3 months.";
//       case "Last 6 Months":
//         return "Monthly sales — last 6 months.";
//       case "This Year":
//         return "Monthly sales — year to date.";
//       default:
//         return "Sales performance for selected period.";
//     }
//   }, [dateRange]);

//   const filteredOrders = orders.filter((order) => {
//     const q = search.toLowerCase().trim();
//     const matchesSearch =
//       !q ||
//       order.id.toLowerCase().includes(q) ||
//       order.customer.toLowerCase().includes(q) ||
//       order.product.toLowerCase().includes(q);
//     const matchesCategory =
//       categoryFilter === "All Categories" ||
//       order.category === categoryFilter;
//     return matchesSearch && matchesCategory;
//   });

//   const filteredProducts = products.filter((product) => {
//     const q = search.toLowerCase().trim();
//     const matchesSearch =
//       !q ||
//       product.name.toLowerCase().includes(q) ||
//       product.category.toLowerCase().includes(q);
//     const matchesCategory =
//       categoryFilter === "All Categories" ||
//       product.category === categoryFilter;
//     return matchesSearch && matchesCategory;
//   });

//   const filteredPayments = payments.filter((payment) => {
//     const q = search.toLowerCase().trim();
//     return (
//       !q ||
//       payment.id.toLowerCase().includes(q) ||
//       payment.customer.toLowerCase().includes(q) ||
//       payment.order.toLowerCase().includes(q)
//     );
//   });

//   const handlePrint = () => window.print();

//   const Kpi = ({
//     title,
//     value,
//     hint,
//     valueClass = "text-[#222]",
//   }: {
//     title: string;
//     value: string | number;
//     hint?: string;
//     valueClass?: string;
//   }) => (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-5">
//       <p className="text-xs text-gray-500 sm:text-sm">{title}</p>
//       <p className={`mt-1.5 text-lg font-bold sm:mt-2 sm:text-2xl ${valueClass}`}>
//         {value}
//       </p>
//       {hint && <p className="mt-1 text-[10px] text-gray-400 sm:text-xs">{hint}</p>}
//     </div>
//   );

//   const renderSalesReport = () => (
//     <div className="space-y-5 sm:space-y-6">
//       <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
//         <Kpi
//           title="Total Sales"
//           value={loading ? "…" : formatCompactCurrency(totalSales)}
//           hint={dateRange}
//         />
//         <Kpi
//           title="Total Profit"
//           value={loading ? "…" : formatCompactCurrency(totalProfit)}
//           hint={
//             totalSales > 0
//               ? `${((totalProfit / totalSales) * 100).toFixed(1)}% margin`
//               : "0% margin"
//           }
//           valueClass="text-[#176b5b]"
//         />
//         <Kpi title="Total Orders" value={loading ? "…" : totalOrders} />
//         <Kpi
//           title="Avg Order Value"
//           value={loading ? "…" : formatCompactCurrency(averageOrderValue)}
//           hint="Per order in period"
//         />
//       </div>

//       <div className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-5">
//         <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             <h2 className="text-sm font-bold text-[#222] sm:text-base">
//               Sales Performance
//             </h2>
//             <p className="mt-1 text-xs text-gray-500">{chartSubtitle}</p>
//           </div>
//           <div className="flex gap-4 text-xs text-gray-500">
//             <span className="flex items-center gap-2">
//               <span className="h-2.5 w-2.5 rounded-full bg-[#176b5b]" />
//               Sales
//             </span>
//             <span className="flex items-center gap-2">
//               <span className="h-2.5 w-2.5 rounded-full bg-[#c89b62]" />
//               Profit
//             </span>
//           </div>
//         </div>
//         <div className="mt-6 overflow-x-auto">
//           <div className="flex h-[220px] min-w-[280px] items-end gap-2 border-b border-l border-[#e4e2da] px-2 pb-0 sm:h-[280px] sm:gap-5 sm:px-3">
//             {salesData.map((item) => {
//               const salesHeight = (item.sales / maxSales) * (typeof window !== "undefined" && window.innerWidth < 640 ? 170 : 230);
//               const profitHeight = (item.profit / maxSales) * (typeof window !== "undefined" && window.innerWidth < 640 ? 170 : 230);
//               return (
//                 <div
//                   key={item.month}
//                   className="flex h-full flex-1 items-end justify-center gap-0.5 sm:gap-1"
//                 >
//                   <div
//                     title={`${item.month} Sales: ${formatCurrency(item.sales)}`}
//                     className="w-2 rounded-t bg-[#176b5b] sm:w-4"
//                     style={{ height: `${Math.max(salesHeight, 4)}px` }}
//                   />
//                   <div
//                     title={`${item.month} Profit: ${formatCurrency(item.profit)}`}
//                     className="w-2 rounded-t bg-[#c89b62] sm:w-4"
//                     style={{ height: `${Math.max(profitHeight, 2)}px` }}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//           <div className="mt-2 flex min-w-[280px] gap-2 px-2 sm:gap-5 sm:px-3">
//             {salesData.map((item) => (
//               <div
//                 key={item.month}
//                 className="flex-1 text-center text-[10px] text-gray-500 sm:text-xs"
//               >
//                 {item.month}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderOrdersReport = () => (
//     <div className="space-y-5 sm:space-y-6">
//       <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3">
//         <Kpi title="Orders" value={loading ? "…" : filteredOrders.length} />
//         <Kpi
//           title="Order Value"
//           value={
//             loading
//               ? "…"
//               : formatCompactCurrency(
//                   filteredOrders.reduce((s, o) => s + o.amount, 0)
//                 )
//           }
//           valueClass="text-[#176b5b]"
//         />
//         <Kpi
//           title="Delivered"
//           value={
//             loading
//               ? "…"
//               : filteredOrders.filter((o) => o.status === "Delivered").length
//           }
//         />
//       </div>

//       <div className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//         <div className="border-b border-[#e4e2da] px-3 py-3 sm:px-5 sm:py-4">
//           <h2 className="text-sm font-bold text-[#222] sm:text-base">
//             Orders Report
//           </h2>
//         </div>

//         <div className="hidden overflow-x-auto md:block">
//           <table className="w-full min-w-[800px] text-left">
//             <thead className="bg-[#fafaf8]">
//               <tr>
//                 {[
//                   "Order",
//                   "Customer",
//                   "Product",
//                   "Category",
//                   "Amount",
//                   "Status",
//                   "Payment",
//                   "Date",
//                 ].map((h) => (
//                   <th
//                     key={h}
//                     className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5"
//                   >
//                     {h}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-[#eeece5]">
//               {filteredOrders.map((order) => (
//                 <tr key={order.id}>
//                   <td className="px-4 py-3 text-sm font-semibold text-[#176b5b] sm:px-5 sm:py-4">
//                     {order.id}
//                   </td>
//                   <td className="px-4 py-3 text-sm text-gray-700 sm:px-5 sm:py-4">
//                     {order.customer}
//                   </td>
//                   <td className="px-4 py-3 text-sm text-gray-600 sm:px-5 sm:py-4">
//                     {order.product}
//                   </td>
//                   <td className="px-4 py-3 text-sm text-gray-600 sm:px-5 sm:py-4">
//                     {order.category}
//                   </td>
//                   <td className="px-4 py-3 text-sm font-semibold text-gray-800 sm:px-5 sm:py-4">
//                     {formatCurrency(order.amount)}
//                   </td>
//                   <td className="px-4 py-3 sm:px-5 sm:py-4">
//                     <span
//                       className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusClass(
//                         order.status
//                       )}`}
//                     >
//                       {order.status}
//                     </span>
//                   </td>
//                   <td className="px-4 py-3 sm:px-5 sm:py-4">
//                     <span
//                       className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusClass(
//                         order.payment
//                       )}`}
//                     >
//                       {order.payment}
//                     </span>
//                   </td>
//                   <td className="px-4 py-3 text-sm text-gray-600 sm:px-5 sm:py-4">
//                     {order.date}
//                   </td>
//                 </tr>
//               ))}
//               {!loading && filteredOrders.length === 0 && (
//                 <tr>
//                   <td
//                     colSpan={8}
//                     className="px-5 py-10 text-center text-sm text-gray-500"
//                   >
//                     No orders found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         <div className="space-y-3 p-3 md:hidden">
//           {filteredOrders.map((order) => (
//             <div
//               key={order.id}
//               className="rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3"
//             >
//               <div className="flex items-start justify-between gap-2">
//                 <div className="min-w-0">
//                   <p className="text-xs font-semibold text-[#176b5b]">
//                     {order.id}
//                   </p>
//                   <p className="mt-0.5 truncate font-medium text-gray-900">
//                     {order.customer}
//                   </p>
//                   <p className="mt-0.5 text-xs text-gray-500">{order.product}</p>
//                 </div>
//                 <span
//                   className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${getStatusClass(
//                     order.status
//                   )}`}
//                 >
//                   {order.status}
//                 </span>
//               </div>
//               <div className="mt-2 flex justify-between text-xs">
//                 <span className="text-gray-500">{order.date}</span>
//                 <span className="font-semibold text-gray-900">
//                   {formatCurrency(order.amount)}
//                 </span>
//               </div>
//             </div>
//           ))}
//           {!loading && filteredOrders.length === 0 && (
//             <p className="py-8 text-center text-sm text-gray-500">
//               No orders found.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );

//   const renderPaymentsReport = () => {
//     const rate =
//       receivedPayments + pendingPayments > 0
//         ? (receivedPayments / (receivedPayments + pendingPayments)) * 100
//         : 0;

//     return (
//       <div className="space-y-5 sm:space-y-6">
//         <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3">
//           <Kpi
//             title="Received"
//             value={loading ? "…" : formatCompactCurrency(receivedPayments)}
//             valueClass="text-[#176b5b]"
//           />
//           <Kpi
//             title="Pending"
//             value={loading ? "…" : formatCompactCurrency(pendingPayments)}
//             valueClass="text-[#a36a00]"
//           />
//           <Kpi
//             title="Collection %"
//             value={loading ? "…" : `${rate.toFixed(0)}%`}
//           />
//         </div>

//         <div className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-5">
//           <div className="mb-2 flex justify-between text-sm">
//             <span className="text-gray-500">Collection progress</span>
//             <span className="font-semibold text-[#176b5b]">
//               {rate.toFixed(0)}%
//             </span>
//           </div>
//           <div className="h-2 overflow-hidden rounded-full bg-gray-100">
//             <div
//               className="h-full rounded-full bg-[#176b5b]"
//               style={{ width: `${Math.min(rate, 100)}%` }}
//             />
//           </div>
//           <div className="mt-3 flex justify-between text-xs text-gray-500">
//             <span>Received {formatCurrency(receivedPayments)}</span>
//             <span>Pending {formatCurrency(pendingPayments)}</span>
//           </div>
//         </div>

//         <div className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="border-b border-[#e4e2da] px-3 py-3 sm:px-5 sm:py-4">
//             <h2 className="text-sm font-bold text-[#222] sm:text-base">
//               Payment Report
//             </h2>
//           </div>

//           <div className="hidden overflow-x-auto md:block">
//             <table className="w-full min-w-[800px] text-left">
//               <thead className="bg-[#fafaf8]">
//                 <tr>
//                   {[
//                     "Payment",
//                     "Customer",
//                     "Order",
//                     "Amount",
//                     "Received",
//                     "Pending",
//                     "Status",
//                   ].map((h) => (
//                     <th
//                       key={h}
//                       className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5"
//                     >
//                       {h}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece5]">
//                 {filteredPayments.map((payment) => (
//                   <tr key={payment.id}>
//                     <td className="px-4 py-3 text-sm font-semibold text-[#176b5b] sm:px-5 sm:py-4">
//                       {payment.id}
//                     </td>
//                     <td className="px-4 py-3 text-sm text-gray-700 sm:px-5 sm:py-4">
//                       {payment.customer}
//                     </td>
//                     <td className="px-4 py-3 text-sm text-gray-600 sm:px-5 sm:py-4">
//                       {payment.order}
//                     </td>
//                     <td className="px-4 py-3 text-sm font-semibold sm:px-5 sm:py-4">
//                       {formatCurrency(payment.amount)}
//                     </td>
//                     <td className="px-4 py-3 text-sm font-semibold text-[#176b5b] sm:px-5 sm:py-4">
//                       {formatCurrency(payment.received)}
//                     </td>
//                     <td className="px-4 py-3 text-sm font-semibold text-[#a36a00] sm:px-5 sm:py-4">
//                       {formatCurrency(payment.pending)}
//                     </td>
//                     <td className="px-4 py-3 sm:px-5 sm:py-4">
//                       <span
//                         className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusClass(
//                           payment.status
//                         )}`}
//                       >
//                         {payment.status}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//                 {!loading && filteredPayments.length === 0 && (
//                   <tr>
//                     <td
//                       colSpan={7}
//                       className="px-5 py-10 text-center text-sm text-gray-500"
//                     >
//                       No payments found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>

//           <div className="space-y-3 p-3 md:hidden">
//             {filteredPayments.map((p) => (
//               <div
//                 key={p.id}
//                 className="rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3"
//               >
//                 <div className="flex justify-between gap-2">
//                   <div className="min-w-0">
//                     <p className="text-xs font-semibold text-[#176b5b]">
//                       {p.id}
//                     </p>
//                     <p className="truncate text-sm font-medium text-gray-900">
//                       {p.customer}
//                     </p>
//                   </div>
//                   <span
//                     className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${getStatusClass(
//                       p.status
//                     )}`}
//                   >
//                     {p.status}
//                   </span>
//                 </div>
//                 <div className="mt-2 flex justify-between text-xs">
//                   <span className="text-gray-500">{p.order}</span>
//                   <span className="font-semibold">
//                     {formatCurrency(p.amount)}
//                   </span>
//                 </div>
//               </div>
//             ))}
//             {!loading && filteredPayments.length === 0 && (
//               <p className="py-8 text-center text-sm text-gray-500">
//                 No payments found.
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderProductsReport = () => {
//     const totalRevenue = products.reduce((s, p) => s + p.revenue, 0) || 1;
//     const totalUnits = products.reduce((s, p) => s + p.sales, 0);
//     const sortedBySales = [...products].sort((a, b) => b.sales - a.sales);
//     const sortedByRevenue = [...products].sort((a, b) => b.revenue - a.revenue);

//     return (
//       <div className="space-y-5 sm:space-y-6">
//         <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
//           <Kpi title="Products" value={loading ? "…" : products.length} />
//           <Kpi title="Units Sold" value={loading ? "…" : totalUnits} />
//           <Kpi
//             title="Revenue"
//             value={
//               loading
//                 ? "…"
//                 : formatCompactCurrency(totalRevenue === 1 ? 0 : totalRevenue)
//             }
//             valueClass="text-[#176b5b]"
//           />
//         </div>

//         <div className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="border-b border-[#e4e2da] px-3 py-3 sm:px-5 sm:py-4">
//             <h2 className="text-sm font-bold text-[#222] sm:text-base">
//               Product Performance
//             </h2>
//           </div>

//           <div className="hidden overflow-x-auto md:block">
//             <table className="w-full min-w-[700px] text-left">
//               <thead className="bg-[#fafaf8]">
//                 <tr>
//                   {[
//                     "Product",
//                     "Category",
//                     "Units",
//                     "Revenue",
//                     "Stock",
//                     "Share",
//                   ].map((h) => (
//                     <th
//                       key={h}
//                       className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5"
//                     >
//                       {h}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece5]">
//                 {filteredProducts.map((product) => (
//                   <tr key={product.name}>
//                     <td className="px-4 py-3 text-sm font-semibold text-gray-800 sm:px-5 sm:py-4">
//                       {product.name}
//                     </td>
//                     <td className="px-4 py-3 text-sm text-gray-600 sm:px-5 sm:py-4">
//                       {product.category}
//                     </td>
//                     <td className="px-4 py-3 text-sm font-semibold sm:px-5 sm:py-4">
//                       {product.sales}
//                     </td>
//                     <td className="px-4 py-3 text-sm font-semibold text-[#176b5b] sm:px-5 sm:py-4">
//                       {formatCurrency(product.revenue)}
//                     </td>
//                     <td className="px-4 py-3 text-sm font-semibold sm:px-5 sm:py-4">
//                       {product.stock}
//                     </td>
//                     <td className="px-4 py-3 text-xs text-gray-500 sm:px-5 sm:py-4">
//                       {((product.revenue / totalRevenue) * 100).toFixed(1)}%
//                     </td>
//                   </tr>
//                 ))}
//                 {!loading && filteredProducts.length === 0 && (
//                   <tr>
//                     <td
//                       colSpan={6}
//                       className="px-5 py-10 text-center text-sm text-gray-500"
//                     >
//                       No products found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>

//           <div className="space-y-3 p-3 md:hidden">
//             {filteredProducts.map((p) => (
//               <div
//                 key={p.name}
//                 className="rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3"
//               >
//                 <p className="font-semibold text-gray-900">{p.name}</p>
//                 <p className="mt-0.5 text-xs text-gray-500">{p.category}</p>
//                 <div className="mt-2 flex justify-between text-xs">
//                   <span>{p.sales} units</span>
//                   <span className="font-semibold text-[#176b5b]">
//                     {formatCurrency(p.revenue)}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-4 sm:p-5">
//             <h2 className="text-sm font-bold text-[#222] sm:text-base">
//               Best Selling
//             </h2>
//             <div className="mt-3 rounded-lg bg-[#fafaf8] p-3 sm:mt-5 sm:p-4">
//               <p className="text-xs text-gray-400">Top by units</p>
//               <p className="mt-1 text-base font-bold text-[#222] sm:text-lg">
//                 {sortedBySales[0]?.name || "—"}
//               </p>
//               <p className="mt-1 text-sm text-[#176b5b]">
//                 {sortedBySales[0]
//                   ? `${sortedBySales[0].sales} units`
//                   : "No data"}
//               </p>
//             </div>
//           </div>
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-4 sm:p-5">
//             <h2 className="text-sm font-bold text-[#222] sm:text-base">
//               Highest Revenue
//             </h2>
//             <div className="mt-3 rounded-lg bg-[#fafaf8] p-3 sm:mt-5 sm:p-4">
//               <p className="text-xs text-gray-400">Top by revenue</p>
//               <p className="mt-1 text-base font-bold text-[#222] sm:text-lg">
//                 {sortedByRevenue[0]?.name || "—"}
//               </p>
//               <p className="mt-1 text-sm text-[#176b5b]">
//                 {sortedByRevenue[0]
//                   ? formatCurrency(sortedByRevenue[0].revenue)
//                   : "No data"}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderEnquiriesReport = () => {
//     const totalEnquiries = enquiries.reduce((s, i) => s + i.enquiries, 0);
//     const totalConverted = enquiries.reduce((s, i) => s + i.converted, 0);

//     return (
//       <div className="space-y-5 sm:space-y-6">
//         <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
//           <Kpi title="Enquiries" value={loading ? "…" : totalEnquiries} />
//           <Kpi
//             title="Converted"
//             value={loading ? "…" : totalConverted}
//             valueClass="text-[#176b5b]"
//           />
//           <Kpi
//             title="Conversion"
//             value={loading ? "…" : `${conversionRate.toFixed(1)}%`}
//             valueClass="text-[#176b5b]"
//           />
//         </div>

//         <div className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-5">
//           <h2 className="text-sm font-bold text-[#222] sm:text-base">
//             Enquiries by Source
//           </h2>
//           <p className="mt-1 text-xs text-gray-500">
//             Channels generating customers
//           </p>
//           <div className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
//             {enquiries.map((item) => {
//               const rate =
//                 item.enquiries > 0
//                   ? (item.converted / item.enquiries) * 100
//                   : 0;
//               return (
//                 <div key={item.source}>
//                   <div className="flex items-center justify-between gap-3">
//                     <div className="min-w-0">
//                       <p className="truncate text-sm font-semibold text-gray-800">
//                         {item.source}
//                       </p>
//                       <p className="mt-0.5 text-xs text-gray-400">
//                         {item.enquiries} · {item.converted} converted
//                       </p>
//                     </div>
//                     <span className="shrink-0 text-sm font-bold text-[#176b5b]">
//                       {rate.toFixed(0)}%
//                     </span>
//                   </div>
//                   <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
//                     <div
//                       className="h-full rounded-full bg-[#176b5b]"
//                       style={{ width: `${rate}%` }}
//                     />
//                   </div>
//                 </div>
//               );
//             })}
//             {!loading && enquiries.length === 0 && (
//               <p className="text-sm text-gray-500">No enquiry data.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderReport = () => {
//     switch (activeReport) {
//       case "Sales":
//         return renderSalesReport();
//       case "Orders":
//         return renderOrdersReport();
//       case "Payments":
//         return renderPaymentsReport();
//       case "Products":
//         return renderProductsReport();
//       case "Enquiries":
//         return renderEnquiriesReport();
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       <div className="border-b border-[#e4e2da] bg-white print:hidden">
//         <div className="mx-auto max-w-[1550px] px-3 py-4 sm:px-6 sm:py-5 lg:px-8">
//           {/* Title + Print same row */}
//           <div className="flex items-start justify-between gap-3">
//             <div className="min-w-0 flex-1">
//               <div className="mb-1 hidden items-center gap-2 text-sm text-gray-500 sm:flex">
//                 <span>Furniture</span>
//                 <span>/</span>
//                 <span className="text-gray-700">Reports</span>
//               </div>
//               <h1 className="text-xl font-bold text-[#222] sm:text-2xl">
//                 Reports & Analytics
//               </h1>
//               <p className="mt-1 text-xs text-gray-500 sm:text-sm">
//                 Sales, orders, payments, products and enquiries.
//               </p>
//             </div>
//             <button
//               onClick={handlePrint}
//               className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg border border-[#d9d7cf] bg-white px-3 py-2.5 text-xs font-semibold text-gray-700 transition hover:bg-gray-50 sm:gap-2 sm:px-5 sm:text-sm"
//             >
//               <svg
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 className="shrink-0"
//               >
//                 <path d="M6 9V3h12v6" />
//                 <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
//                 <path d="M6 14h12v7H6z" />
//               </svg>
//               Print
//             </button>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1550px] px-3 py-5 sm:px-6 sm:py-6 lg:px-8">
//         <div className="rounded-xl border border-[#e4e2da] bg-white p-1.5 print:hidden sm:p-2">
//           <div className="flex gap-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//             {reportTypes.map((report) => (
//               <button
//                 key={report}
//                 onClick={() => {
//                   setActiveReport(report);
//                   setSearch("");
//                 }}
//                 className={`shrink-0 whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold transition sm:px-4 sm:py-2.5 sm:text-sm ${
//                   activeReport === report
//                     ? "bg-[#176b5b] text-white"
//                     : "text-gray-600 hover:bg-[#f7f7f4]"
//                 }`}
//               >
//                 {report}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="mt-4 rounded-xl border border-[#e4e2da] bg-white p-3 print:hidden sm:mt-5 sm:p-4">
//           <div className="flex flex-col gap-3">
//             <div className="flex w-full flex-wrap gap-2 sm:flex-nowrap">
//               <select
//                 value={dateRange}
//                 onChange={(e) => setDateRange(e.target.value)}
//                 className="min-w-0 flex-1 rounded-lg border border-[#d9d7cf] bg-white px-3 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:text-sm"
//               >
//                 <option>Today</option>
//                 <option>This Week</option>
//                 <option>This Month</option>
//                 <option>Last 3 Months</option>
//                 <option>Last 6 Months</option>
//                 <option>This Year</option>
//               </select>

//               {(activeReport === "Orders" || activeReport === "Products") && (
//                 <select
//                   value={categoryFilter}
//                   onChange={(e) => setCategoryFilter(e.target.value)}
//                   className="min-w-0 flex-1 rounded-lg border border-[#d9d7cf] bg-white px-3 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:text-sm"
//                 >
//                   <option>All Categories</option>
//                   <option>Sofa</option>
//                   <option>Bed</option>
//                   <option>Dining Table</option>
//                   <option>Chair</option>
//                   <option>Wardrobe</option>
//                   <option>TV Unit</option>
//                   <option>Study Table</option>
//                   <option>Office Furniture</option>
//                 </select>
//               )}
//             </div>

//             {(activeReport === "Orders" ||
//               activeReport === "Payments" ||
//               activeReport === "Products") && (
//               <div className="relative w-full">
//                 <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                   ⌕
//                 </span>
//                 <input
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   placeholder={`Search ${activeReport.toLowerCase()}...`}
//                   className="w-full rounded-lg border border-[#d9d7cf] py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//             )}

//             <p className="text-xs text-gray-500">
//               Period:{" "}
//               <span className="font-semibold text-gray-700">{dateRange}</span>
//               {loading && (
//                 <span className="ml-2 text-[#176b5b]">Loading…</span>
//               )}
//             </p>
//           </div>
//         </div>

//         <div className="mt-5 hidden print:block sm:mt-6">
//           <h1 className="text-2xl font-bold">Akrish Furniture Reports</h1>
//           <p className="mt-1 text-sm text-gray-500">
//             {activeReport} Report • {dateRange}
//           </p>
//         </div>

//         <div className="mt-5 sm:mt-6">{renderReport()}</div>
//       </main>

//       <style jsx global>{`
//         @media print {
//           body {
//             background: white !important;
//           }
//           .print\\:hidden {
//             display: none !important;
//           }
//           .print\\:block {
//             display: block !important;
//           }
//           @page {
//             size: A4;
//             margin: 15mm;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }


// function isVisibleOrder(o: FurnitureOrder): boolean {
//   const pay = String(o.paymentStatus || "").toLowerCase().trim();
//   const method = String(o.paymentMethod || "").toUpperCase().trim();
//   const paid = Number((o as { paid?: number }).paid ?? 0) || 0;

//   if (pay === "failed" || pay === "user_dropped") return false;

//   const isCod = method === "COD" || method === "";
//   const isOnline =
//     !isCod &&
//     (method.includes("CARD") ||
//       method.includes("UPI") ||
//       method.includes("CASHFREE") ||
//       method.includes("ONLINE") ||
//       method.includes("BANK"));

//   if (
//     isOnline &&
//     paid <= 0 &&
//     (pay === "pending" || pay === "" || pay === "failed")
//   ) {
//     return false;
//   }

//   return true;
// }

// function isSuccessfulPaymentRecord(p: FurniturePayment): boolean {
//   const status = String(p.status || "").toLowerCase().trim();
//   const method = String(p.paymentMethod || "").toUpperCase();
//   const paid = Number(p.paidAmount ?? 0) || 0;
//   const source = String(p.source || "").toLowerCase();

//   if (
//     status === "failed" ||
//     status === "user_dropped" ||
//     status === "dropped" ||
//     status === "cancelled"
//   ) {
//     return false;
//   }

//   if (status === "refunded" || source === "refund") return false;

//   const isOnline =
//     source === "online" ||
//     method.includes("CASHFREE") ||
//     method.includes("ONLINE") ||
//     !!(p as { cfPaymentId?: string }).cfPaymentId ||
//     !!(p as { cfOrderId?: string }).cfOrderId;

//   // Abandoned online checkout (your ₹50,000 Pending rows)
//   if (isOnline && paid <= 0 && (status === "pending" || status === "")) {
//     return false;
//   }

//   return true;
// }

// function buildVisibleOrderKeys(orders: FurnitureOrder[]): Set<string> {
//   const keys = new Set<string>();
//   for (const o of orders) {
//     keys.add(o.id);
//     if (o.id.startsWith("web-")) keys.add(o.id.slice(4));
//     const no = (o.orderNo || o.orderNumber || "").trim();
//     if (no) keys.add(no);
//     if (o.websiteOrderId) keys.add(String(o.websiteOrderId));
//   }
//   return keys;
// }

// function paymentBelongsToVisibleOrder(
//   p: FurniturePayment,
//   visibleKeys: Set<string>
// ): boolean {
//   const orderId = (p.orderId || "").trim();
//   const orderNo = (p.orderNo || "").trim();

//   if (!orderId && (!orderNo || orderNo === "—")) return true;
//   if (orderId && visibleKeys.has(orderId)) return true;
//   if (orderNo && visibleKeys.has(orderNo)) return true;
//   if (orderId.startsWith("web-") && visibleKeys.has(orderId.slice(4))) {
//     return true;
//   }
//   return false;
// }

"use client";

import { useEffect, useMemo, useState } from "react";
import {
  getAllOrders,
  type FurnitureOrder,
} from "@/modules/furniture/services/orderService";
import {
  getAllPayments,
  type FurniturePayment,
} from "@/modules/furniture/services/paymentService";
import {
  getAllProducts,
  type FurnitureProduct,
} from "@/modules/furniture/services/productService";
import {
  getAllEnquiries,
  type FurnitureEnquiry,
} from "@/modules/furniture/services/enquiryService";
import { Timestamp } from "firebase/firestore";

type ReportType =
  | "Sales"
  | "Orders"
  | "Payments"
  | "Products"
  | "Enquiries";

type Sale = {
  month: string;
  sales: number;
  orders: number;
  profit: number;
};

type Order = {
  id: string;
  customer: string;
  product: string;
  category: string;
  amount: number;
  status: string;
  payment: string;
  date: string;
  createdAt: Date | null;
};

type Payment = {
  id: string;
  customer: string;
  order: string;
  amount: number;
  received: number;
  pending: number;
  status: string;
  method: string;
  date: string;
};

type Product = {
  name: string;
  category: string;
  sales: number;
  revenue: number;
  stock: number;
};

type Enquiry = {
  source: string;
  enquiries: number;
  converted: number;
};

const reportTypes: ReportType[] = [
  "Sales",
  "Orders",
  "Payments",
  "Products",
  "Enquiries",
];

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function formatCurrency(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function formatCompactCurrency(value: number) {
  if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
  if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
  if (value >= 1000) return `₹${(value / 1000).toFixed(0)}K`;
  return formatCurrency(value);
}

function getStatusClass(status: string) {
  switch (status) {
    case "Delivered":
    case "Received":
    case "Paid":
      return "bg-[#eaf5f1] text-[#176b5b]";
    case "Production":
    case "Processing":
    case "Partial":
      return "bg-[#fff5df] text-[#a36a00]";
    case "Confirmed":
    case "Shipped":
      return "bg-[#eef2ff] text-[#4f46a5]";
    case "Pending":
      return "bg-[#fdecec] text-[#b42318]";
    case "Cancelled":
      return "bg-gray-100 text-gray-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
}

function toDate(value: unknown): Date | null {
  if (!value) return null;
  try {
    if (typeof (value as Timestamp).toDate === "function") {
      return (value as Timestamp).toDate();
    }
    if (typeof value === "string") {
      const d = new Date(value);
      return Number.isNaN(d.getTime()) ? null : d;
    }
  } catch {
    /* ignore */
  }
  return null;
}

function formatDateStr(d: Date | null): string {
  if (!d) return "—";
  return d.toISOString().slice(0, 10);
}

function mapOrderStatus(raw?: string): string {
  const s = (raw || "Pending").trim();
  if (s === "Delivered") return "Delivered";
  if (s === "Cancelled") return "Cancelled";
  if (s === "Processing" || s === "Production" || s === "Shipped")
    return s === "Shipped" ? "Production" : "Production";
  if (s === "Paid" || s === "Confirmed") return "Confirmed";
  return s || "Confirmed";
}

function mapPaymentStatus(raw?: string, paid = 0, total = 0): string {
  const s = (raw || "").trim();
  if (s === "Received" || s === "Paid") return "Received";
  if (s === "Partial") return "Partial";
  if (paid >= total && total > 0) return "Received";
  if (paid > 0) return "Partial";
  return "Pending";
}

function orderAmount(o: FurnitureOrder): number {
  return (
    Number(o.amount ?? o.total ?? o.totalAmount ?? 0) ||
    (o.items || []).reduce(
      (s, i) => s + (Number(i.price) || 0) * (Number(i.qty) || 1),
      0
    )
  );
}

function isVisibleOrder(o: FurnitureOrder): boolean {
  const pay = String(o.paymentStatus || "").toLowerCase().trim();
  const method = String(o.paymentMethod || "").toUpperCase().trim();
  const paid = Number((o as { paid?: number }).paid ?? 0) || 0;

  if (pay === "failed" || pay === "user_dropped") return false;

  const isCod = method === "COD" || method === "";
  const isOnline =
    !isCod &&
    (method.includes("CARD") ||
      method.includes("UPI") ||
      method.includes("CASHFREE") ||
      method.includes("ONLINE") ||
      method.includes("BANK"));

  if (
    isOnline &&
    paid <= 0 &&
    (pay === "pending" || pay === "" || pay === "failed")
  ) {
    return false;
  }

  return true;
}

function isSuccessfulPaymentRecord(p: FurniturePayment): boolean {
  const status = String(p.status || "").toLowerCase().trim();
  const method = String(p.paymentMethod || "").toUpperCase();
  const paid = Number(p.paidAmount ?? 0) || 0;
  const source = String(p.source || "").toLowerCase();

  if (
    status === "failed" ||
    status === "user_dropped" ||
    status === "dropped" ||
    status === "cancelled"
  ) {
    return false;
  }

  if (status === "refunded" || source === "refund") return false;

  const isOnline =
    source === "online" ||
    method.includes("CASHFREE") ||
    method.includes("ONLINE") ||
    !!(p as { cfPaymentId?: string }).cfPaymentId ||
    !!(p as { cfOrderId?: string }).cfOrderId;

  if (isOnline && paid <= 0 && (status === "pending" || status === "")) {
    return false;
  }

  return true;
}

function buildVisibleOrderKeys(orders: FurnitureOrder[]): Set<string> {
  const keys = new Set<string>();
  for (const o of orders) {
    keys.add(o.id);
    if (o.id.startsWith("web-")) keys.add(o.id.slice(4));
    const no = (o.orderNo || o.orderNumber || "").trim();
    if (no) keys.add(no);
    if (o.websiteOrderId) keys.add(String(o.websiteOrderId));
  }
  return keys;
}

function paymentBelongsToVisibleOrder(
  p: FurniturePayment,
  visibleKeys: Set<string>
): boolean {
  const orderId = (p.orderId || "").trim();
  const orderNo = (p.orderNo || "").trim();

  if (!orderId && (!orderNo || orderNo === "—")) return true;
  if (orderId && visibleKeys.has(orderId)) return true;
  if (orderNo && visibleKeys.has(orderNo)) return true;
  if (orderId.startsWith("web-") && visibleKeys.has(orderId.slice(4))) {
    return true;
  }
  return false;
}

function isCancelledOrder(o: FurnitureOrder): boolean {
  return (
    String(o.status || (o as { orderStatus?: string }).orderStatus || "")
      .toLowerCase()
      .trim() === "cancelled"
  );
}

function getDateRangeBounds(dateRange: string): { start: Date; end: Date } {
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  const start = new Date();

  switch (dateRange) {
    case "Today":
      start.setHours(0, 0, 0, 0);
      break;
    case "This Week": {
      const day = start.getDay();
      const diff = day === 0 ? 6 : day - 1;
      start.setDate(start.getDate() - diff);
      start.setHours(0, 0, 0, 0);
      break;
    }
    case "This Month":
      start.setDate(1);
      start.setHours(0, 0, 0, 0);
      break;
    case "Last 3 Months":
      start.setMonth(start.getMonth() - 2, 1);
      start.setHours(0, 0, 0, 0);
      break;
    case "Last 6 Months":
      start.setMonth(start.getMonth() - 5, 1);
      start.setHours(0, 0, 0, 0);
      break;
    case "This Year":
      start.setMonth(0, 1);
      start.setHours(0, 0, 0, 0);
      break;
    default:
      start.setMonth(start.getMonth() - 5, 1);
      start.setHours(0, 0, 0, 0);
  }

  return { start, end };
}

function buildSalesSeries(
  rawOrders: FurnitureOrder[],
  dateRange: string
): Sale[] {
  const { start, end } = getDateRangeBounds(dateRange);

  // Cancelled + failed online never count toward sales
  const inRange = rawOrders.filter((o) => {
    if (isCancelledOrder(o)) return false;
    if (!isVisibleOrder(o)) return false;
    const d = toDate(o.createdAt);
    if (!d) return false;
    return d >= start && d <= end;
  });

  if (dateRange === "Today") {
    let sales = 0;
    let orders = 0;
    inRange.forEach((o) => {
      sales += orderAmount(o);
      orders += 1;
    });
    const label = start.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
    });
    return [{ month: label, sales, orders, profit: Math.round(sales * 0.3) }];
  }

  if (dateRange === "This Week") {
    const buckets: Sale[] = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      buckets.push({
        month: WEEKDAYS[d.getDay()],
        sales: 0,
        orders: 0,
        profit: 0,
      });
    }

    const byKey = new Map(
      buckets.map((b, i) => {
        const d = new Date(start);
        d.setDate(start.getDate() + i);
        return [formatDateStr(d), b];
      })
    );

    inRange.forEach((o) => {
      const d = toDate(o.createdAt);
      if (!d) return;
      const entry = byKey.get(formatDateStr(d));
      if (!entry) return;
      entry.sales += orderAmount(o);
      entry.orders += 1;
      entry.profit = Math.round(entry.sales * 0.3);
    });

    return buckets.map(({ month, sales, orders, profit }) => ({
      month,
      sales,
      orders,
      profit,
    }));
  }

  let monthCount = 6;
  if (dateRange === "This Month") monthCount = 1;
  else if (dateRange === "Last 3 Months") monthCount = 3;
  else if (dateRange === "Last 6 Months") monthCount = 6;
  else if (dateRange === "This Year") monthCount = new Date().getMonth() + 1;

  const monthMap = new Map<
    string,
    { sales: number; orders: number; label: string }
  >();

  const now = new Date();
  for (let i = monthCount - 1; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    monthMap.set(key, { sales: 0, orders: 0, label: MONTHS[d.getMonth()] });
  }

  inRange.forEach((o) => {
    const d = toDate(o.createdAt);
    if (!d) return;
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    const entry = monthMap.get(key);
    if (!entry) return;
    entry.sales += orderAmount(o);
    entry.orders += 1;
  });

  return Array.from(monthMap.values()).map((m) => ({
    month: m.label,
    sales: m.sales,
    orders: m.orders,
    profit: Math.round(m.sales * 0.3),
  }));
}

export default function FurnitureReportsPage() {
  const [activeReport, setActiveReport] = useState<ReportType>("Sales");
  const [dateRange, setDateRange] = useState("Last 6 Months");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [rawOrders, setRawOrders] = useState<FurnitureOrder[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const [rawOrdersData, rawPayments, rawProducts, rawEnquiries] =
          await Promise.all([
            getAllOrders().catch(() => [] as FurnitureOrder[]),
            getAllPayments().catch(() => [] as FurniturePayment[]),
            getAllProducts().catch(() => [] as FurnitureProduct[]),
            getAllEnquiries().catch(() => [] as FurnitureEnquiry[]),
          ]);

        if (cancelled) return;

        setRawOrders(rawOrdersData);

        setOrders(
          rawOrdersData.map((o) => {
            const d = toDate(o.createdAt);
            const items = o.items || [];
            const first = items[0];
            const amount = orderAmount(o);

            return {
              id: o.orderNo || o.id,
              customer: o.customerName || "Unknown",
              product: first?.name || "—",
              category: (first as { category?: string })?.category || "—",
              amount,
              status: mapOrderStatus(o.status),
              payment: mapPaymentStatus(
                o.paymentStatus,
                Number((o as { paid?: number }).paid ?? 0),
                amount
              ),
              date: formatDateStr(d),
              createdAt: d,
            };
          })
        );

        const visibleOrders = rawOrdersData.filter(isVisibleOrder);
        const visibleKeys = buildVisibleOrderKeys(visibleOrders);

        const mappedPayments: Payment[] = rawPayments
          .filter(isSuccessfulPaymentRecord)
          .filter((p) => paymentBelongsToVisibleOrder(p, visibleKeys))
          .map((p) => {
            const amount = Number(p.amount ?? 0) || 0;
            const received = Number(p.paidAmount ?? 0) || 0;
            let pending =
              p.dueAmount !== undefined && p.dueAmount !== null
                ? Number(p.dueAmount) || 0
                : Math.max(amount - received, 0);

            const linked = rawOrdersData.find(
              (o) =>
                o.id === p.orderId ||
                o.orderNo === p.orderNo ||
                o.orderNumber === p.orderNo
            );
            const isCancelled = linked ? isCancelledOrder(linked) : false;
            const refundStatus = String(
              (linked as { refundStatus?: string } | undefined)?.refundStatus ||
                ""
            ).toLowerCase();
            const isRefunded =
              isCancelled &&
              (refundStatus === "completed" ||
                String(linked?.paymentStatus || "").toLowerCase() ===
                  "refunded");

            let finalReceived = received;
            let finalAmount = amount;
            if (isCancelled) pending = 0;
            if (isRefunded) {
              finalReceived = 0;
              finalAmount = 0;
              pending = 0;
            }

            return {
              id: p.paymentNo || p.id,
              customer: p.customer || p.customerName || "Unknown",
              order: p.orderNo || "—",
              amount: finalAmount,
              received: finalReceived,
              pending,
              status: mapPaymentStatus(p.status, finalReceived, finalAmount),
              method: p.paymentMethod || "UPI",
              date: p.paymentDate || p.dueDate || "—",
            };
          });

        if (mappedPayments.length === 0 && visibleOrders.length > 0) {
          setPayments(
            visibleOrders.map((o) => {
              const amount = orderAmount(o);
              const paid = Number((o as { paid?: number }).paid ?? 0) || 0;
              const cancelled = isCancelledOrder(o);
              const refundStatus = String(
                (o as { refundStatus?: string }).refundStatus || ""
              ).toLowerCase();
              const isRefunded =
                cancelled &&
                (refundStatus === "completed" ||
                  String(o.paymentStatus || "").toLowerCase() === "refunded");

              return {
                id: `PAY-${(o.orderNo || o.id).slice(-6)}`,
                customer: o.customerName || "Unknown",
                order: o.orderNo || o.id,
                amount: isRefunded ? 0 : amount,
                received: isRefunded ? 0 : paid,
                pending: cancelled ? 0 : Math.max(amount - paid, 0),
                status: mapPaymentStatus(o.paymentStatus, paid, amount),
                method: o.paymentMethod || "UPI",
                date: formatDateStr(toDate(o.createdAt)),
              };
            })
          );
        } else {
          setPayments(mappedPayments);
        }

        const productAgg = new Map<
          string,
          { sales: number; revenue: number; category: string; stock: number }
        >();

        rawProducts.forEach((p) => {
          const st = String(p.status || "").toLowerCase();
          if (
            st === "draft" ||
            st === "archived" ||
            st === "deleted" ||
            st === "inactive"
          ) {
            return;
          }
          productAgg.set(p.name || p.id, {
            sales: 0,
            revenue: 0,
            category: p.category || "—",
            stock: Number(p.stock ?? 0) || 0,
          });
        });

        // Units / revenue: skip cancelled + failed online orders
        rawOrdersData.forEach((o) => {
          if (isCancelledOrder(o)) return;
          if (!isVisibleOrder(o)) return;

          (o.items || []).forEach((item) => {
            const name = item.name || "Unknown";
            const existing = productAgg.get(name) || {
              sales: 0,
              revenue: 0,
              category: "—",
              stock: 0,
            };
            const qty = Number(item.qty) || 1;
            const price = Number(item.price) || 0;
            existing.sales += qty;
            existing.revenue += price * qty;
            if (!existing.category || existing.category === "—") {
              existing.category =
                (item as { category?: string }).category || existing.category;
            }
            productAgg.set(name, existing);
          });
        });

        setProducts(
          Array.from(productAgg.entries())
            .map(([name, v]) => ({
              name,
              category: v.category,
              sales: v.sales,
              revenue: v.revenue,
              stock: v.stock,
            }))
            .sort((a, b) => b.revenue - a.revenue)
        );

        const sourceMap = new Map<
          string,
          { enquiries: number; converted: number }
        >();
        rawEnquiries.forEach((e) => {
          const source = e.source || "Other";
          const entry = sourceMap.get(source) || {
            enquiries: 0,
            converted: 0,
          };
          entry.enquiries += 1;
          if (e.status === "Converted") entry.converted += 1;
          sourceMap.set(source, entry);
        });

        setEnquiries(
          Array.from(sourceMap.entries())
            .map(([source, v]) => ({
              source,
              enquiries: v.enquiries,
              converted: v.converted,
            }))
            .sort((a, b) => b.enquiries - a.enquiries)
        );
      } catch (err) {
        console.error("Failed to load report data:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const salesData = useMemo(
    () => buildSalesSeries(rawOrders, dateRange),
    [rawOrders, dateRange]
  );

  const totalSales = salesData.reduce((sum, item) => sum + item.sales, 0);
  const totalProfit = salesData.reduce((sum, item) => sum + item.profit, 0);
  const totalOrders = salesData.reduce((sum, item) => sum + item.orders, 0);

  const receivedPayments = payments.reduce((s, p) => s + p.received, 0);
  const pendingPayments = payments.reduce((s, p) => s + p.pending, 0);
  const averageOrderValue = totalOrders > 0 ? totalSales / totalOrders : 0;

  const conversionRate = useMemo(() => {
    const totalE = enquiries.reduce((s, i) => s + i.enquiries, 0);
    const totalC = enquiries.reduce((s, i) => s + i.converted, 0);
    return totalE ? (totalC / totalE) * 100 : 0;
  }, [enquiries]);

  const maxSales = Math.max(...salesData.map((i) => i.sales), 1);

  const chartSubtitle = useMemo(() => {
    switch (dateRange) {
      case "Today":
        return "Sales for today (excludes cancelled).";
      case "This Week":
        return "Daily sales this week (Mon–Sun).";
      case "This Month":
        return "Sales for the current month.";
      case "Last 3 Months":
        return "Monthly sales — last 3 months.";
      case "Last 6 Months":
        return "Monthly sales — last 6 months.";
      case "This Year":
        return "Monthly sales — year to date.";
      default:
        return "Sales performance for selected period.";
    }
  }, [dateRange]);

  const filteredOrders = orders.filter((order) => {
    const q = search.toLowerCase().trim();
    const matchesSearch =
      !q ||
      order.id.toLowerCase().includes(q) ||
      order.customer.toLowerCase().includes(q) ||
      order.product.toLowerCase().includes(q);
    const matchesCategory =
      categoryFilter === "All Categories" ||
      order.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const filteredProducts = products.filter((product) => {
    const q = search.toLowerCase().trim();
    const matchesSearch =
      !q ||
      product.name.toLowerCase().includes(q) ||
      product.category.toLowerCase().includes(q);
    const matchesCategory =
      categoryFilter === "All Categories" ||
      product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const filteredPayments = payments.filter((payment) => {
    const q = search.toLowerCase().trim();
    return (
      !q ||
      payment.id.toLowerCase().includes(q) ||
      payment.customer.toLowerCase().includes(q) ||
      payment.order.toLowerCase().includes(q)
    );
  });

  const handlePrint = () => window.print();

  const Kpi = ({
    title,
    value,
    hint,
    valueClass = "text-[#222]",
  }: {
    title: string;
    value: string | number;
    hint?: string;
    valueClass?: string;
  }) => (
    <div className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-5">
      <p className="text-xs text-gray-500 sm:text-sm">{title}</p>
      <p className={`mt-1.5 text-lg font-bold sm:mt-2 sm:text-2xl ${valueClass}`}>
        {value}
      </p>
      {hint && (
        <p className="mt-1 text-[10px] text-gray-400 sm:text-xs">{hint}</p>
      )}
    </div>
  );

  const renderSalesReport = () => (
    <div className="space-y-5 sm:space-y-6">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
        <Kpi
          title="Total Sales"
          value={loading ? "…" : formatCompactCurrency(totalSales)}
          hint={dateRange}
        />
        <Kpi
          title="Total Profit"
          value={loading ? "…" : formatCompactCurrency(totalProfit)}
          hint={
            totalSales > 0
              ? `${((totalProfit / totalSales) * 100).toFixed(1)}% margin`
              : "0% margin"
          }
          valueClass="text-[#176b5b]"
        />
        <Kpi title="Total Orders" value={loading ? "…" : totalOrders} />
        <Kpi
          title="Avg Order Value"
          value={loading ? "…" : formatCompactCurrency(averageOrderValue)}
          hint="Per order in period"
        />
      </div>

      <div className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-sm font-bold text-[#222] sm:text-base">
              Sales Performance
            </h2>
            <p className="mt-1 text-xs text-gray-500">{chartSubtitle}</p>
          </div>
          <div className="flex gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#176b5b]" />
              Sales
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#c89b62]" />
              Profit
            </span>
          </div>
        </div>
        <div className="mt-6 overflow-x-auto">
          <div className="flex h-[220px] min-w-[280px] items-end gap-2 border-b border-l border-[#e4e2da] px-2 pb-0 sm:h-[280px] sm:gap-5 sm:px-3">
            {salesData.map((item) => {
              const salesHeight = (item.sales / maxSales) * 200;
              const profitHeight = (item.profit / maxSales) * 200;
              return (
                <div
                  key={item.month}
                  className="flex h-full flex-1 items-end justify-center gap-0.5 sm:gap-1"
                >
                  <div
                    title={`${item.month} Sales: ${formatCurrency(item.sales)}`}
                    className="w-2 rounded-t bg-[#176b5b] sm:w-4"
                    style={{ height: `${Math.max(salesHeight, 4)}px` }}
                  />
                  <div
                    title={`${item.month} Profit: ${formatCurrency(item.profit)}`}
                    className="w-2 rounded-t bg-[#c89b62] sm:w-4"
                    style={{ height: `${Math.max(profitHeight, 2)}px` }}
                  />
                </div>
              );
            })}
          </div>
          <div className="mt-2 flex min-w-[280px] gap-2 px-2 sm:gap-5 sm:px-3">
            {salesData.map((item) => (
              <div
                key={item.month}
                className="flex-1 text-center text-[10px] text-gray-500 sm:text-xs"
              >
                {item.month}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderOrdersReport = () => (
    <div className="space-y-5 sm:space-y-6">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        <Kpi title="Orders" value={loading ? "…" : filteredOrders.length} />
        <Kpi
          title="Order Value"
          value={
            loading
              ? "…"
              : formatCompactCurrency(
                  filteredOrders
                    .filter((o) => o.status !== "Cancelled")
                    .reduce((s, o) => s + o.amount, 0)
                )
          }
          valueClass="text-[#176b5b]"
        />
        <Kpi
          title="Delivered"
          value={
            loading
              ? "…"
              : filteredOrders.filter((o) => o.status === "Delivered").length
          }
        />
      </div>

      <div className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
        <div className="border-b border-[#e4e2da] px-3 py-3 sm:px-5 sm:py-4">
          <h2 className="text-sm font-bold text-[#222] sm:text-base">
            Orders Report
          </h2>
        </div>

        <div className="hidden overflow-x-auto md:block">
          <table className="w-full min-w-[800px] text-left">
            <thead className="bg-[#fafaf8]">
              <tr>
                {[
                  "Order",
                  "Customer",
                  "Product",
                  "Category",
                  "Amount",
                  "Status",
                  "Payment",
                  "Date",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eeece5]">
              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-4 py-3 text-sm font-semibold text-[#176b5b] sm:px-5 sm:py-4">
                    {order.id}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 sm:px-5 sm:py-4">
                    {order.customer}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 sm:px-5 sm:py-4">
                    {order.product}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 sm:px-5 sm:py-4">
                    {order.category}
                  </td>
                  <td className="px-4 py-3 text-sm font-semibold text-gray-800 sm:px-5 sm:py-4">
                    {formatCurrency(order.amount)}
                  </td>
                  <td className="px-4 py-3 sm:px-5 sm:py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusClass(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 sm:px-5 sm:py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusClass(
                        order.payment
                      )}`}
                    >
                      {order.payment}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 sm:px-5 sm:py-4">
                    {order.date}
                  </td>
                </tr>
              ))}
              {!loading && filteredOrders.length === 0 && (
                <tr>
                  <td
                    colSpan={8}
                    className="px-5 py-10 text-center text-sm text-gray-500"
                  >
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="space-y-3 p-3 md:hidden">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-[#176b5b]">
                    {order.id}
                  </p>
                  <p className="mt-0.5 truncate font-medium text-gray-900">
                    {order.customer}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500">{order.product}</p>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${getStatusClass(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </div>
              <div className="mt-2 flex justify-between text-xs">
                <span className="text-gray-500">{order.date}</span>
                <span className="font-semibold text-gray-900">
                  {formatCurrency(order.amount)}
                </span>
              </div>
            </div>
          ))}
          {!loading && filteredOrders.length === 0 && (
            <p className="py-8 text-center text-sm text-gray-500">
              No orders found.
            </p>
          )}
        </div>
      </div>
    </div>
  );

  const renderPaymentsReport = () => {
    const rate =
      receivedPayments + pendingPayments > 0
        ? (receivedPayments / (receivedPayments + pendingPayments)) * 100
        : 0;

    return (
      <div className="space-y-5 sm:space-y-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          <Kpi
            title="Received"
            value={loading ? "…" : formatCompactCurrency(receivedPayments)}
            valueClass="text-[#176b5b]"
          />
          <Kpi
            title="Pending"
            value={loading ? "…" : formatCompactCurrency(pendingPayments)}
            valueClass="text-[#a36a00]"
            hint="Excludes cancelled & failed"
          />
          <Kpi
            title="Collection %"
            value={loading ? "…" : `${rate.toFixed(0)}%`}
          />
        </div>

        <div className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-5">
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-gray-500">Collection progress</span>
            <span className="font-semibold text-[#176b5b]">
              {rate.toFixed(0)}%
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-[#176b5b]"
              style={{ width: `${Math.min(rate, 100)}%` }}
            />
          </div>
          <div className="mt-3 flex justify-between text-xs text-gray-500">
            <span>Received {formatCurrency(receivedPayments)}</span>
            <span>Pending {formatCurrency(pendingPayments)}</span>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
          <div className="border-b border-[#e4e2da] px-3 py-3 sm:px-5 sm:py-4">
            <h2 className="text-sm font-bold text-[#222] sm:text-base">
              Payment Report
            </h2>
            <p className="mt-1 text-xs text-gray-500">
              Failed online attempts and cancelled outstanding are excluded.
            </p>
          </div>

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[800px] text-left">
              <thead className="bg-[#fafaf8]">
                <tr>
                  {[
                    "Payment",
                    "Customer",
                    "Order",
                    "Amount",
                    "Received",
                    "Pending",
                    "Status",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eeece5]">
                {filteredPayments.map((payment) => (
                  <tr key={payment.id}>
                    <td className="px-4 py-3 text-sm font-semibold text-[#176b5b] sm:px-5 sm:py-4">
                      {payment.id}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 sm:px-5 sm:py-4">
                      {payment.customer}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 sm:px-5 sm:py-4">
                      {payment.order}
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold sm:px-5 sm:py-4">
                      {formatCurrency(payment.amount)}
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-[#176b5b] sm:px-5 sm:py-4">
                      {formatCurrency(payment.received)}
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-[#a36a00] sm:px-5 sm:py-4">
                      {formatCurrency(payment.pending)}
                    </td>
                    <td className="px-4 py-3 sm:px-5 sm:py-4">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusClass(
                          payment.status
                        )}`}
                      >
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))}
                {!loading && filteredPayments.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-5 py-10 text-center text-sm text-gray-500"
                    >
                      No payments found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="space-y-3 p-3 md:hidden">
            {filteredPayments.map((p) => (
              <div
                key={p.id}
                className="rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3"
              >
                <div className="flex justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[#176b5b]">
                      {p.id}
                    </p>
                    <p className="truncate text-sm font-medium text-gray-900">
                      {p.customer}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${getStatusClass(
                      p.status
                    )}`}
                  >
                    {p.status}
                  </span>
                </div>
                <div className="mt-2 flex justify-between text-xs">
                  <span className="text-gray-500">{p.order}</span>
                  <span className="font-semibold">
                    {formatCurrency(p.amount)}
                  </span>
                </div>
              </div>
            ))}
            {!loading && filteredPayments.length === 0 && (
              <p className="py-8 text-center text-sm text-gray-500">
                No payments found.
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderProductsReport = () => {
    const totalRevenue = products.reduce((s, p) => s + p.revenue, 0) || 1;
    const totalUnits = products.reduce((s, p) => s + p.sales, 0);
    const sortedBySales = [...products].sort((a, b) => b.sales - a.sales);
    const sortedByRevenue = [...products].sort((a, b) => b.revenue - a.revenue);

    return (
      <div className="space-y-5 sm:space-y-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          <Kpi title="Products" value={loading ? "…" : products.length} />
          <Kpi
            title="Units Sold"
            value={loading ? "…" : totalUnits}
            hint="Excludes cancelled orders"
          />
          <Kpi
            title="Revenue"
            value={
              loading
                ? "…"
                : formatCompactCurrency(totalRevenue === 1 ? 0 : totalRevenue)
            }
            valueClass="text-[#176b5b]"
          />
        </div>

        <div className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
          <div className="border-b border-[#e4e2da] px-3 py-3 sm:px-5 sm:py-4">
            <h2 className="text-sm font-bold text-[#222] sm:text-base">
              Product Performance
            </h2>
            <p className="mt-1 text-xs text-gray-500">
              Units and revenue from non-cancelled successful orders only.
            </p>
          </div>

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[700px] text-left">
              <thead className="bg-[#fafaf8]">
                <tr>
                  {[
                    "Product",
                    "Category",
                    "Units",
                    "Revenue",
                    "Stock",
                    "Share",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eeece5]">
                {filteredProducts.map((product) => (
                  <tr key={product.name}>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-800 sm:px-5 sm:py-4">
                      {product.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 sm:px-5 sm:py-4">
                      {product.category}
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold sm:px-5 sm:py-4">
                      {product.sales}
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-[#176b5b] sm:px-5 sm:py-4">
                      {formatCurrency(product.revenue)}
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold sm:px-5 sm:py-4">
                      {product.stock}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-500 sm:px-5 sm:py-4">
                      {((product.revenue / totalRevenue) * 100).toFixed(1)}%
                    </td>
                  </tr>
                ))}
                {!loading && filteredProducts.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-5 py-10 text-center text-sm text-gray-500"
                    >
                      No products found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="space-y-3 p-3 md:hidden">
            {filteredProducts.map((p) => (
              <div
                key={p.name}
                className="rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3"
              >
                <p className="font-semibold text-gray-900">{p.name}</p>
                <p className="mt-0.5 text-xs text-gray-500">{p.category}</p>
                <div className="mt-2 flex justify-between text-xs">
                  <span>{p.sales} units</span>
                  <span className="font-semibold text-[#176b5b]">
                    {formatCurrency(p.revenue)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          <div className="rounded-xl border border-[#e4e2da] bg-white p-4 sm:p-5">
            <h2 className="text-sm font-bold text-[#222] sm:text-base">
              Best Selling
            </h2>
            <div className="mt-3 rounded-lg bg-[#fafaf8] p-3 sm:mt-5 sm:p-4">
              <p className="text-xs text-gray-400">Top by units</p>
              <p className="mt-1 text-base font-bold text-[#222] sm:text-lg">
                {sortedBySales[0]?.name || "—"}
              </p>
              <p className="mt-1 text-sm text-[#176b5b]">
                {sortedBySales[0]
                  ? `${sortedBySales[0].sales} units`
                  : "No data"}
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-[#e4e2da] bg-white p-4 sm:p-5">
            <h2 className="text-sm font-bold text-[#222] sm:text-base">
              Highest Revenue
            </h2>
            <div className="mt-3 rounded-lg bg-[#fafaf8] p-3 sm:mt-5 sm:p-4">
              <p className="text-xs text-gray-400">Top by revenue</p>
              <p className="mt-1 text-base font-bold text-[#222] sm:text-lg">
                {sortedByRevenue[0]?.name || "—"}
              </p>
              <p className="mt-1 text-sm text-[#176b5b]">
                {sortedByRevenue[0]
                  ? formatCurrency(sortedByRevenue[0].revenue)
                  : "No data"}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderEnquiriesReport = () => {
    const totalEnquiries = enquiries.reduce((s, i) => s + i.enquiries, 0);
    const totalConverted = enquiries.reduce((s, i) => s + i.converted, 0);

    return (
      <div className="space-y-5 sm:space-y-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          <Kpi title="Enquiries" value={loading ? "…" : totalEnquiries} />
          <Kpi
            title="Converted"
            value={loading ? "…" : totalConverted}
            valueClass="text-[#176b5b]"
          />
          <Kpi
            title="Conversion"
            value={loading ? "…" : `${conversionRate.toFixed(1)}%`}
            valueClass="text-[#176b5b]"
          />
        </div>

        <div className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-5">
          <h2 className="text-sm font-bold text-[#222] sm:text-base">
            Enquiries by Source
          </h2>
          <p className="mt-1 text-xs text-gray-500">
            Channels generating customers
          </p>
          <div className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
            {enquiries.map((item) => {
              const rate =
                item.enquiries > 0
                  ? (item.converted / item.enquiries) * 100
                  : 0;
              return (
                <div key={item.source}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-gray-800">
                        {item.source}
                      </p>
                      <p className="mt-0.5 text-xs text-gray-400">
                        {item.enquiries} · {item.converted} converted
                      </p>
                    </div>
                    <span className="shrink-0 text-sm font-bold text-[#176b5b]">
                      {rate.toFixed(0)}%
                    </span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-[#176b5b]"
                      style={{ width: `${rate}%` }}
                    />
                  </div>
                </div>
              );
            })}
            {!loading && enquiries.length === 0 && (
              <p className="text-sm text-gray-500">No enquiry data.</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderReport = () => {
    switch (activeReport) {
      case "Sales":
        return renderSalesReport();
      case "Orders":
        return renderOrdersReport();
      case "Payments":
        return renderPaymentsReport();
      case "Products":
        return renderProductsReport();
      case "Enquiries":
        return renderEnquiriesReport();
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
      <div className="border-b border-[#e4e2da] bg-white print:hidden">
        <div className="mx-auto max-w-[1550px] px-3 py-4 sm:px-6 sm:py-5 lg:px-8">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="mb-1 hidden items-center gap-2 text-sm text-gray-500 sm:flex">
                <span>Furniture</span>
                <span>/</span>
                <span className="text-gray-700">Reports</span>
              </div>
              <h1 className="text-xl font-bold text-[#222] sm:text-2xl">
                Reports & Analytics
              </h1>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Sales exclude cancelled orders. Payments exclude failed online
                attempts.
              </p>
            </div>
            <button
              onClick={handlePrint}
              className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg border border-[#d9d7cf] bg-white px-3 py-2.5 text-xs font-semibold text-gray-700 transition hover:bg-gray-50 sm:gap-2 sm:px-5 sm:text-sm"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="shrink-0"
              >
                <path d="M6 9V3h12v6" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <path d="M6 14h12v7H6z" />
              </svg>
              Print
            </button>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[1550px] px-3 py-5 sm:px-6 sm:py-6 lg:px-8">
        <div className="rounded-xl border border-[#e4e2da] bg-white p-1.5 print:hidden sm:p-2">
          <div className="flex gap-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {reportTypes.map((report) => (
              <button
                key={report}
                onClick={() => {
                  setActiveReport(report);
                  setSearch("");
                }}
                className={`shrink-0 whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold transition sm:px-4 sm:py-2.5 sm:text-sm ${
                  activeReport === report
                    ? "bg-[#176b5b] text-white"
                    : "text-gray-600 hover:bg-[#f7f7f4]"
                }`}
              >
                {report}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-[#e4e2da] bg-white p-3 print:hidden sm:mt-5 sm:p-4">
          <div className="flex flex-col gap-3">
            <div className="flex w-full flex-wrap gap-2 sm:flex-nowrap">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="min-w-0 flex-1 rounded-lg border border-[#d9d7cf] bg-white px-3 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:text-sm"
              >
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
                <option>Last 3 Months</option>
                <option>Last 6 Months</option>
                <option>This Year</option>
              </select>

              {(activeReport === "Orders" || activeReport === "Products") && (
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="min-w-0 flex-1 rounded-lg border border-[#d9d7cf] bg-white px-3 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:text-sm"
                >
                  <option>All Categories</option>
                  <option>Sofa</option>
                  <option>Bed</option>
                  <option>Dining Table</option>
                  <option>Chair</option>
                  <option>Wardrobe</option>
                  <option>TV Unit</option>
                  <option>Study Table</option>
                  <option>Office Furniture</option>
                </select>
              )}
            </div>

            {(activeReport === "Orders" ||
              activeReport === "Payments" ||
              activeReport === "Products") && (
              <div className="relative w-full">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  ⌕
                </span>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={`Search ${activeReport.toLowerCase()}...`}
                  className="w-full rounded-lg border border-[#d9d7cf] py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[#176b5b]"
                />
              </div>
            )}

            <p className="text-xs text-gray-500">
              Period:{" "}
              <span className="font-semibold text-gray-700">{dateRange}</span>
              {loading && (
                <span className="ml-2 text-[#176b5b]">Loading…</span>
              )}
            </p>
          </div>
        </div>

        <div className="mt-5 hidden print:block sm:mt-6">
          <h1 className="text-2xl font-bold">Akrish Furniture Reports</h1>
          <p className="mt-1 text-sm text-gray-500">
            {activeReport} Report • {dateRange}
          </p>
        </div>

        <div className="mt-5 sm:mt-6">{renderReport()}</div>
      </main>

      <style jsx global>{`
        @media print {
          body {
            background: white !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:block {
            display: block !important;
          }
          @page {
            size: A4;
            margin: 15mm;
          }
        }
      `}</style>
    </div>
  );
}
