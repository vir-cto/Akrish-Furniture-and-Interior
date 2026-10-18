// "use client";

// import { useMemo, useState } from "react";

// type Sale = {
//   month: string;
//   sales: number;
// };

// type AttentionItem = {
//   id: string;
//   title: string;
//   description: string;
//   type: "Ageing" | "Low Stock" | "Payment";
//   priority: "High" | "Medium";
// };

// const salesData: Sale[] = [
//   { month: "Apr", sales: 62000 },
//   { month: "May", sales: 78000 },
//   { month: "Jun", sales: 92000 },
//   { month: "Jul", sales: 85000 },
//   { month: "Aug", sales: 110000 },
//   { month: "Sep", sales: 128500 },
// ];

// const sourceData = [
//   { name: "Website", value: 32 },
//   { name: "Instagram", value: 24 },
//   { name: "WhatsApp", value: 18 },
//   { name: "Referral", value: 14 },
//   { name: "Walk-in", value: 8 },
//   { name: "Other", value: 4 },
// ];

// const topProducts = [
//   {
//     code: "FD-100",
//     name: "Modern Sofa",
//     category: "Sofa",
//     sales: 18,
//     revenue: 486000,
//   },
//   {
//     code: "FT-001",
//     name: "Dining Table",
//     category: "Dining",
//     sales: 14,
//     revenue: 322000,
//   },
//   {
//     code: "FB-002",
//     name: "Bed Frame",
//     category: "Bedroom",
//     sales: 11,
//     revenue: 264000,
//   },
//   {
//     code: "FC-001",
//     name: "Coffee Table",
//     category: "Table",
//     sales: 9,
//     revenue: 126000,
//   },
// ];

// const attentionItems: AttentionItem[] = [
//   {
//     id: "FD-100",
//     title: "Modern Sofa",
//     description: "Published for 12 days without a confirmed sale.",
//     type: "Ageing",
//     priority: "High",
//   },
//   {
//     id: "FT-004",
//     title: "Dining Chair",
//     description: "Only 2 units remaining. Minimum stock level is 5.",
//     type: "Low Stock",
//     priority: "Medium",
//   },
//   {
//     id: "CUST-002",
//     title: "Rahul Sharma",
//     description: "Customer payment of ₹12,500 is pending.",
//     type: "Payment",
//     priority: "High",
//   },
//   {
//     id: "FB-002",
//     title: "Bed Frame",
//     description: "Published for 11 days and needs review.",
//     type: "Ageing",
//     priority: "Medium",
//   },
// ];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// export default function FurnitureDashboardPage() {
//   const [period, setPeriod] = useState("This Month");
//   const [attentionFilter, setAttentionFilter] = useState("All");

//   const totalSales = 2480000;
//   const productCost = 1620000;
//   const expenses = 286000;
//   const estimatedProfit = totalSales - productCost - expenses;

//   const filteredAttention = useMemo(() => {
//     if (attentionFilter === "All") {
//       return attentionItems;
//     }

//     return attentionItems.filter(
//       (item) => item.type === attentionFilter
//     );
//   }, [attentionFilter]);

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#242424]">
//       {/* HEADER */}
//       <header className="border-b border-[#e5e3dc] bg-white">
//         <div className="flex min-h-[76px] items-center justify-between px-5 lg:px-8">
//           <div>
//             <div className="text-[25px] font-bold tracking-tight text-[#9a5b18]">
//               Akrish
//             </div>

//             <div className="text-[8px] uppercase tracking-[3px] text-[#777]">
//               Furniture and Interior
//             </div>
//           </div>

//           <div className="flex items-center gap-4">
//             <div className="hidden text-right sm:block">
//               <p className="text-sm font-semibold text-[#333]">
//                 Furniture ERP
//               </p>
//               <p className="text-xs text-[#999]">
//                 Management Dashboard
//               </p>
//             </div>

//             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f2ee] text-sm font-semibold text-[#176b5b]">
//               R
//             </div>
//           </div>
//         </div>
//       </header>

//       <main className="mx-auto max-w-[1500px] px-5 py-7 lg:px-8">
//         {/* TITLE */}
//         <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
//           <div>
//             <p className="mb-1 text-xs font-medium text-[#999]">
//               Furniture / Dashboard
//             </p>

//             <h1 className="text-2xl font-semibold tracking-tight">
//               Furniture ERP Dashboard
//             </h1>

//             <p className="mt-1 text-sm text-[#777]">
//               Compact overview of products, sales, customers,
//               payments and business performance.
//             </p>
//           </div>

//           <select
//             value={period}
//             onChange={(e) => setPeriod(e.target.value)}
//             className="h-10 rounded-lg border border-[#ddd] bg-white px-4 text-sm outline-none focus:border-[#176b5b]"
//           >
//             <option>This Month</option>
//             <option>Last Month</option>
//             <option>Last 3 Months</option>
//             <option>This Year</option>
//           </select>
//         </div>

//         {/* TODAY / KPI CARDS */}
//         <section className="mb-6">
//           <div className="mb-3">
//             <h2 className="text-sm font-semibold text-[#444]">
//               Today
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-6">
//             <MetricCard
//               title="Today's Sales"
//               value="₹48,500"
//               subtitle="8 orders"
//             />

//             <MetricCard
//               title="New Enquiries"
//               value="12"
//               subtitle="Today"
//             />

//             <MetricCard
//               title="New Orders"
//               value="8"
//               subtitle="Confirmed"
//             />

//             <MetricCard
//               title="Expenses"
//               value="₹12,800"
//               subtitle="Recorded today"
//             />

//             <MetricCard
//               title="Pending Payments"
//               value="₹48.5 L"
//               subtitle="Customer balances"
//               warning
//             />

//             <MetricCard
//               title="Profit"
//               value="₹16,200"
//               subtitle="Estimated today"
//             />
//           </div>
//         </section>

//         {/* MAIN KPI */}
//         <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <BigMetricCard
//             title="Total Products"
//             value="128"
//             subtitle="Furniture products"
//             icon="P"
//           />

//           <BigMetricCard
//             title="In Stock"
//             value="86"
//             subtitle="Available products"
//             icon="I"
//           />

//           <BigMetricCard
//             title="Low Stock"
//             value="12"
//             subtitle="Need attention"
//             icon="!"
//             warning
//           />

//           <BigMetricCard
//             title="Out of Stock"
//             value="5"
//             subtitle="Currently unavailable"
//             icon="O"
//           />
//         </section>

//         {/* SALES + PROFIT */}
//         <section className="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-[1.65fr_1fr]">
//           {/* SALES TREND */}
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="mb-5 flex items-start justify-between">
//               <div>
//                 <h2 className="text-base font-semibold">
//                   Sales Trend
//                 </h2>

//                 <p className="mt-1 text-xs text-[#999]">
//                   Monthly furniture sales
//                 </p>
//               </div>

//               <div className="text-right">
//                 <p className="text-lg font-semibold">
//                   {formatCurrency(totalSales)}
//                 </p>

//                 <p className="text-xs text-[#16804d]">
//                   +14.8% from previous period
//                 </p>
//               </div>
//             </div>

//             <SalesChart data={salesData} />
//           </div>

//           {/* PROFIT */}
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="mb-5">
//               <h2 className="text-base font-semibold">
//                 Business Performance
//               </h2>

//               <p className="mt-1 text-xs text-[#999]">
//                 {period} profit overview
//               </p>
//             </div>

//             <div className="space-y-4">
//               <FinancialRow
//                 label="Sales Revenue"
//                 value={formatCurrency(totalSales)}
//               />

//               <FinancialRow
//                 label="Product Cost"
//                 value={formatCurrency(productCost)}
//               />

//               <FinancialRow
//                 label="Other Expenses"
//                 value={formatCurrency(expenses)}
//               />

//               <div className="border-t border-[#eee] pt-4">
//                 <FinancialRow
//                   label="Estimated Net Profit"
//                   value={formatCurrency(estimatedProfit)}
//                   strong
//                 />
//               </div>
//             </div>

//             <div className="mt-6 rounded-lg bg-[#eef7f3] p-4">
//               <p className="text-xs text-[#688078]">
//                 Suggested calculation
//               </p>

//               <p className="mt-1 text-sm font-medium text-[#176b5b]">
//                 Sales − Product Cost − Other Expenses
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* SOURCE + TOP PRODUCTS */}
//         <section className="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-2">
//           {/* CUSTOMER SOURCES */}
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="mb-5">
//               <h2 className="text-base font-semibold">
//                 Customer / Lead Sources
//               </h2>

//               <p className="mt-1 text-xs text-[#999]">
//                 Source-wise enquiries and customers
//               </p>
//             </div>

//             <div className="space-y-4">
//               {sourceData.map((source) => (
//                 <div key={source.name}>
//                   <div className="mb-1.5 flex items-center justify-between">
//                     <span className="text-sm text-[#555]">
//                       {source.name}
//                     </span>

//                     <span className="text-xs font-semibold text-[#555]">
//                       {source.value}%
//                     </span>
//                   </div>

//                   <div className="h-2 overflow-hidden rounded-full bg-[#eeeeeb]">
//                     <div
//                       className="h-full rounded-full bg-[#176b5b]"
//                       style={{ width: `${source.value}%` }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* TOP PRODUCTS */}
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="mb-5 flex items-start justify-between">
//               <div>
//                 <h2 className="text-base font-semibold">
//                   Top Products
//                 </h2>

//                 <p className="mt-1 text-xs text-[#999]">
//                   Products with stronger sales
//                 </p>
//               </div>

//               <button className="text-xs font-semibold text-[#176b5b] hover:underline">
//                 View Products
//               </button>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[500px]">
//                 <thead>
//                   <tr className="border-b border-[#eee] text-left">
//                     <th className="pb-3 text-xs font-semibold text-[#999]">
//                       Product
//                     </th>

//                     <th className="pb-3 text-xs font-semibold text-[#999]">
//                       Category
//                     </th>

//                     <th className="pb-3 text-center text-xs font-semibold text-[#999]">
//                       Sales
//                     </th>

//                     <th className="pb-3 text-right text-xs font-semibold text-[#999]">
//                       Revenue
//                     </th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {topProducts.map((product, index) => (
//                     <tr
//                       key={product.code}
//                       className="border-b border-[#f0efeb] last:border-0"
//                     >
//                       <td className="py-3">
//                         <div className="flex items-center gap-3">
//                           <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#f2f3ef] text-xs font-semibold text-[#176b5b]">
//                             {index + 1}
//                           </div>

//                           <div>
//                             <p className="text-sm font-medium">
//                               {product.name}
//                             </p>

//                             <p className="text-[11px] text-[#aaa]">
//                               {product.code}
//                             </p>
//                           </div>
//                         </div>
//                       </td>

//                       <td className="py-3 text-sm text-[#666]">
//                         {product.category}
//                       </td>

//                       <td className="py-3 text-center text-sm font-medium">
//                         {product.sales}
//                       </td>

//                       <td className="py-3 text-right text-sm font-semibold">
//                         {formatCurrency(product.revenue)}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </section>

//         {/* ATTENTION NEEDED */}
//         <section className="mb-6 rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="flex flex-col gap-4 border-b border-[#eee] p-5 md:flex-row md:items-center md:justify-between">
//             <div>
//               <h2 className="text-base font-semibold">
//                 Attention Needed
//               </h2>

//               <p className="mt-1 text-xs text-[#999]">
//                 Items that may require an immediate business action.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               {["All", "Ageing", "Low Stock", "Payment"].map(
//                 (filter) => (
//                   <button
//                     key={filter}
//                     onClick={() => setAttentionFilter(filter)}
//                     className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
//                       attentionFilter === filter
//                         ? "bg-[#176b5b] text-white"
//                         : "bg-[#f3f3f0] text-[#666] hover:bg-[#e9e9e5]"
//                     }`}
//                   >
//                     {filter}
//                   </button>
//                 )
//               )}
//             </div>
//           </div>

//           <div className="divide-y divide-[#eee]">
//             {filteredAttention.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex flex-col gap-4 p-5 transition hover:bg-[#fafbf9] md:flex-row md:items-center md:justify-between"
//               >
//                 <div className="flex items-start gap-4">
//                   <AttentionIcon type={item.type} />

//                   <div>
//                     <div className="flex flex-wrap items-center gap-2">
//                       <h3 className="text-sm font-semibold">
//                         {item.title}
//                       </h3>

//                       <span
//                         className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
//                           item.priority === "High"
//                             ? "bg-red-50 text-red-600"
//                             : "bg-orange-50 text-orange-600"
//                         }`}
//                       >
//                         {item.priority}
//                       </span>
//                     </div>

//                     <p className="mt-1 text-xs text-[#777]">
//                       {item.description}
//                     </p>

//                     <p className="mt-1 text-[11px] text-[#aaa]">
//                       Reference: {item.id}
//                     </p>
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => {
//                     // Connect this action to the related ERP record.
//                     console.log("Open:", item.id);
//                   }}
//                   className="rounded-lg border border-[#ddd] px-4 py-2 text-xs font-semibold text-[#555] hover:border-[#176b5b] hover:text-[#176b5b]"
//                 >
//                   Open Record
//                 </button>
//               </div>
//             ))}

//             {filteredAttention.length === 0 && (
//               <div className="p-10 text-center">
//                 <p className="text-sm font-medium text-[#555]">
//                   No attention items
//                 </p>

//                 <p className="mt-1 text-xs text-[#999]">
//                   There are no items in this category.
//                 </p>
//               </div>
//             )}
//           </div>
//         </section>

//         {/* QUICK MODULES */}
//         <section>
//           <div className="mb-3">
//             <h2 className="text-sm font-semibold text-[#444]">
//               Quick Access
//             </h2>
//           </div>

//           <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
//             <QuickLink
//               title="Products"
//               href="/furniture/products"
//             />

//             <QuickLink
//               title="Customers"
//               href="/furniture/customers"
//             />

//             <QuickLink
//               title="Enquiries"
//               href="/furniture/enquiries"
//             />

//             <QuickLink
//               title="Orders"
//               href="/furniture/orders"
//             />

//             <QuickLink
//               title="Payments"
//               href="/furniture/payments"
//             />

//             <QuickLink
//               title="Reports"
//               href="/furniture/reports"
//             />
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// /* ---------------------------------------------------------
//    COMPONENTS
// --------------------------------------------------------- */

// function MetricCard({
//   title,
//   value,
//   subtitle,
//   warning = false,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   warning?: boolean;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-4 shadow-sm">
//       <p className="text-xs font-medium text-[#999]">{title}</p>

//       <p
//         className={`mt-2 text-xl font-semibold ${
//           warning ? "text-[#b46b17]" : "text-[#222]"
//         }`}
//       >
//         {value}
//       </p>

//       <p className="mt-1 text-[11px] text-[#aaa]">
//         {subtitle}
//       </p>
//     </div>
//   );
// }

// function BigMetricCard({
//   title,
//   value,
//   subtitle,
//   icon,
//   warning = false,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   icon: string;
//   warning?: boolean;
// }) {
//   return (
//     <div className="flex items-center justify-between rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//       <div>
//         <p className="text-xs font-medium text-[#999]">
//           {title}
//         </p>

//         <p
//           className={`mt-2 text-2xl font-semibold ${
//             warning ? "text-[#b46b17]" : "text-[#222]"
//           }`}
//         >
//           {value}
//         </p>

//         <p className="mt-1 text-xs text-[#aaa]">
//           {subtitle}
//         </p>
//       </div>

//       <div
//         className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold ${
//           warning
//             ? "bg-[#fff4df] text-[#b46b17]"
//             : "bg-[#e8f2ee] text-[#176b5b]"
//         }`}
//       >
//         {icon}
//       </div>
//     </div>
//   );
// }

// function SalesChart({ data }: { data: Sale[] }) {
//   const max = Math.max(...data.map((item) => item.sales));

//   return (
//     <div>
//       <div className="flex h-[250px] items-end gap-3 border-b border-l border-[#eee] px-4 pb-0 pt-5 sm:gap-6">
//         {data.map((item) => {
//           const height = Math.max(
//             10,
//             (item.sales / max) * 190
//           );

//           return (
//             <div
//               key={item.month}
//               className="flex h-full flex-1 flex-col items-center justify-end"
//             >
//               <div className="mb-2 text-[10px] text-[#888]">
//                 {formatCurrency(item.sales)}
//               </div>

//               <div
//                 className="w-full max-w-[45px] rounded-t-md bg-[#176b5b] transition hover:bg-[#125849]"
//                 style={{ height: `${height}px` }}
//                 title={`${item.month}: ${formatCurrency(
//                   item.sales
//                 )}`}
//               />

//               <div className="mt-3 text-xs text-[#888]">
//                 {item.month}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// function FinancialRow({
//   label,
//   value,
//   strong = false,
// }: {
//   label: string;
//   value: string;
//   strong?: boolean;
// }) {
//   return (
//     <div className="flex items-center justify-between gap-4">
//       <span
//         className={`text-sm ${
//           strong
//             ? "font-semibold text-[#333]"
//             : "text-[#777]"
//         }`}
//       >
//         {label}
//       </span>

//       <span
//         className={`text-sm ${
//           strong
//             ? "font-semibold text-[#176b5b]"
//             : "font-medium text-[#444]"
//         }`}
//       >
//         {value}
//       </span>
//     </div>
//   );
// }

// function AttentionIcon({
//   type,
// }: {
//   type: AttentionItem["type"];
// }) {
//   let content = "!";

//   if (type === "Payment") {
//     content = "₹";
//   }

//   if (type === "Ageing") {
//     content = "⏱";
//   }

//   return (
//     <div
//       className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
//         type === "Payment"
//           ? "bg-[#fff4df] text-[#b46b17]"
//           : type === "Low Stock"
//           ? "bg-red-50 text-red-600"
//           : "bg-[#eef1ff] text-[#5a65a8]"
//       }`}
//     >
//       {content}
//     </div>
//   );
// }

// function QuickLink({
//   title,
//   href,
// }: {
//   title: string;
//   href: string;
// }) {
//   return (
//     <a
//       href={href}
//       className="rounded-xl border border-[#e4e2da] bg-white px-4 py-4 text-center text-sm font-medium text-[#555] shadow-sm transition hover:-translate-y-0.5 hover:border-[#176b5b] hover:text-[#176b5b]"
//     >
//       {title}
//     </a>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import {
//   getAllProducts,
//   getLowStockProducts,
//   getOutOfStockProducts,
//   getAgeingProducts,
//   type FurnitureProduct,
// } from "@/modules/furniture/services/productService";
// import {
//   getAllOrders,
//   getTodayOrders,
//   type FurnitureOrder,
// } from "@/modules/furniture/services/orderService";
// import {
//   getAllEnquiries,
//   getTodayEnquiries,
// } from "@/modules/furniture/services/enquiryService";
// import {
//   getAllExpenses,
//   getTodayExpenses,
//   getExpensesInRange,
// } from "@/modules/furniture/services/expenseService";

// type Sale = { month: string; sales: number };

// type AttentionItem = {
//   id: string;
//   title: string;
//   description: string;
//   type: "Ageing" | "Low Stock" | "Payment";
//   priority: "High" | "Medium";
//   href?: string;
// };

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function getPeriodRange(period: string): { start: Date; end: Date } {
//   const now = new Date();
//   const end = new Date(now);
//   end.setHours(23, 59, 59, 999);

//   const start = new Date(now);

//   if (period === "This Month") {
//     start.setDate(1);
//     start.setHours(0, 0, 0, 0);
//   } else if (period === "Last Month") {
//     start.setMonth(start.getMonth() - 1, 1);
//     start.setHours(0, 0, 0, 0);
//     end.setDate(0); // last day of previous month
//     end.setHours(23, 59, 59, 999);
//   } else if (period === "Last 3 Months") {
//     start.setMonth(start.getMonth() - 2, 1);
//     start.setHours(0, 0, 0, 0);
//   } else {
//     // This Year
//     start.setMonth(0, 1);
//     start.setHours(0, 0, 0, 0);
//   }

//   return { start, end };
// }

// export default function FurnitureDashboardPage() {
//   const router = useRouter();
//   const [period, setPeriod] = useState("This Month");
//   const [attentionFilter, setAttentionFilter] = useState("All");
//   const [loading, setLoading] = useState(true);

//   // Live data
//   const [products, setProducts] = useState<FurnitureProduct[]>([]);
//   const [orders, setOrders] = useState<FurnitureOrder[]>([]);
//   const [todayOrders, setTodayOrders] = useState<FurnitureOrder[]>([]);
//   const [todayEnquiriesCount, setTodayEnquiriesCount] = useState(0);
//   const [todayExpensesTotal, setTodayExpensesTotal] = useState(0);
//   const [periodExpensesTotal, setPeriodExpensesTotal] = useState(0);
//   const [lowStock, setLowStock] = useState<FurnitureProduct[]>([]);
//   const [outOfStock, setOutOfStock] = useState<FurnitureProduct[]>([]);
//   const [ageing, setAgeing] = useState<(FurnitureProduct & { daysPublished: number })[]>([]);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const { start, end } = getPeriodRange(period);

//         const [
//           allProducts,
//           allOrders,
//           tOrders,
//           tEnquiries,
//           tExpenses,
//           pExpenses,
//           low,
//           out,
//           age,
//         ] = await Promise.all([
//           getAllProducts(),
//           getAllOrders(),
//           getTodayOrders(),
//           getTodayEnquiries(),
//           getTodayExpenses(),
//           getExpensesInRange(start, end),
//           getLowStockProducts(),
//           getOutOfStockProducts(),
//           getAgeingProducts(10),
//         ]);

//         if (cancelled) return;

//         setProducts(allProducts);
//         setOrders(allOrders);
//         setTodayOrders(tOrders);
//         setTodayEnquiriesCount(tEnquiries.length);
//         // setTodayExpensesTotal(
//         //   tExpenses.reduce((sum, e) => sum + (e.amount || 0), 0)
//         // );
//         // setPeriodExpensesTotal(
//         //   pExpenses.reduce((sum, e) => sum + (e.amount || 0), 0)
//         // );
//         setTodayExpensesTotal(
//           tExpenses.reduce((sum: number, e) => sum + (e.amount || 0), 0)
//         );
//         setPeriodExpensesTotal(
//           pExpenses.reduce((sum: number, e) => sum + (e.amount || 0), 0)
//         );
//         setLowStock(low);
//         setOutOfStock(out);
//         setAgeing(age);
//       } catch (err) {
//         console.error("Dashboard load error:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, [period]);

//   // Derived metrics
//   const totalProducts = products.length;
//   const inStock = products.filter((p) => (p.stock ?? 0) > 0).length;
//   const published = products.filter((p) => p.status === "Published").length;

//   const periodOrders = useMemo(() => {
//     const { start, end } = getPeriodRange(period);
//     return orders.filter((o) => {
//       const ts = o.createdAt?.toMillis?.() ?? 0;
//       return ts >= start.getTime() && ts <= end.getTime();
//     });
//   }, [orders, period]);

//   const totalSales = periodOrders.reduce((s, o) => s + (o.amount || 0), 0);
//   const todaySales = todayOrders.reduce((s, o) => s + (o.amount || 0), 0);

//   const pendingPayments = orders
//     .filter((o) => o.paymentStatus === "Pending" || o.paymentStatus === "Partial")
//     .reduce((s, o) => s + (o.amount || 0), 0);

//   // Rough product cost (if costPrice exists)
//   const productCost = periodOrders.reduce((sum, o) => {
//     // fallback: assume 60% of selling price if no cost data
//     return sum + (o.amount || 0) * 0.6;
//   }, 0);

//   const estimatedProfit = totalSales - productCost - periodExpensesTotal;

//   // Sales trend (last 6 months)
//   const salesData: Sale[] = useMemo(() => {
//     const months: Sale[] = [];
//     const now = new Date();
//     for (let i = 5; i >= 0; i--) {
//       const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
//       const label = d.toLocaleString("en-IN", { month: "short" });
//       const monthStart = new Date(d.getFullYear(), d.getMonth(), 1).getTime();
//       const monthEnd = new Date(d.getFullYear(), d.getMonth() + 1, 0, 23, 59, 59).getTime();

//       const sales = orders
//         .filter((o) => {
//           const ts = o.createdAt?.toMillis?.() ?? 0;
//           return ts >= monthStart && ts <= monthEnd;
//         })
//         .reduce((s, o) => s + (o.amount || 0), 0);

//       months.push({ month: label, sales });
//     }
//     return months;
//   }, [orders]);

//   // Top products by revenue (from order items if available)
//   const topProducts = useMemo(() => {
//     const map = new Map<string, { name: string; category: string; sales: number; revenue: number }>();

//     periodOrders.forEach((o) => {
//       (o.items || []).forEach((item) => {
//         const key = item.productId || item.name;
//         const existing = map.get(key) || {
//           name: item.name,
//           category: "",
//           sales: 0,
//           revenue: 0,
//         };
//         existing.sales += item.qty;
//         existing.revenue += item.qty * item.price;
//         map.set(key, existing);
//       });
//     });

//     // fallback if no items on orders
//     if (map.size === 0) {
//       return products
//         .slice(0, 4)
//         .map((p, i) => ({
//           code: p.sku || p.id,
//           name: p.name,
//           category: p.category || "—",
//           sales: 0,
//           revenue: 0,
//         }));
//     }

//     return Array.from(map.entries())
//       .map(([code, v]) => ({ code, ...v }))
//       .sort((a, b) => b.revenue - a.revenue)
//       .slice(0, 4);
//   }, [periodOrders, products]);

//   // Source breakdown from enquiries
//   const sourceData = useMemo(() => {
//     const sources = ["Website", "Instagram", "WhatsApp", "Referral", "Walk-in", "Other"];
//     // For now we only have current enquiries – extend later
//     return sources.map((name) => ({ name, value: Math.floor(Math.random() * 20) + 5 })); // placeholder until source field is fully populated
//   }, []);

//   // Attention items
//   const attentionItems: AttentionItem[] = useMemo(() => {
//     const items: AttentionItem[] = [];

//     ageing.slice(0, 5).forEach((p) => {
//       items.push({
//         id: p.id,
//         title: p.name,
//         description: `Published for ${p.daysPublished} days without a confirmed sale.`,
//         type: "Ageing",
//         priority: p.daysPublished >= 15 ? "High" : "Medium",
//         href: `/furniture/products/${p.id}`,
//       });
//     });

//     lowStock.slice(0, 3).forEach((p) => {
//       items.push({
//         id: p.id,
//         title: p.name,
//         description: `Only ${p.stock} units remaining. Minimum stock level is ${p.minStock ?? 5}.`,
//         type: "Low Stock",
//         priority: (p.stock ?? 0) <= 2 ? "High" : "Medium",
//         href: `/furniture/products/${p.id}`,
//       });
//     });

//     // Pending payments as attention
//     orders
//       .filter((o) => o.paymentStatus === "Pending" || o.paymentStatus === "Partial")
//       .slice(0, 3)
//       .forEach((o) => {
//         items.push({
//           id: o.id,
//           title: o.customerName || o.orderNo || "Customer",
//           description: `Payment of ${formatCurrency(o.amount || 0)} is pending.`,
//           type: "Payment",
//           priority: "High",
//           href: `/furniture/orders/${o.id}`,
//         });
//       });

//     return items;
//   }, [ageing, lowStock, orders]);

//   const filteredAttention = useMemo(() => {
//     if (attentionFilter === "All") return attentionItems;
//     return attentionItems.filter((item) => item.type === attentionFilter);
//   }, [attentionItems, attentionFilter]);

//   if (loading) {
//     return (
//       <div className="flex min-h-[60vh] items-center justify-center">
//         <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#242424]">
//       <main className="mx-auto max-w-[1500px] px-5 py-7 lg:px-8">
//         {/* TITLE + PERIOD */}
//         <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
//           <div>
//             <p className="mb-1 text-xs font-medium text-[#999]">
//               Furniture / Dashboard
//             </p>
//             <h1 className="text-2xl font-semibold tracking-tight">
//               Furniture ERP Dashboard
//             </h1>
//             <p className="mt-1 text-sm text-[#777]">
//               Live overview of products, sales, customers, payments and business performance.
//             </p>
//           </div>

//           <select
//             value={period}
//             onChange={(e) => setPeriod(e.target.value)}
//             className="h-10 rounded-lg border border-[#ddd] bg-white px-4 text-sm outline-none focus:border-[#176b5b]"
//           >
//             <option>This Month</option>
//             <option>Last Month</option>
//             <option>Last 3 Months</option>
//             <option>This Year</option>
//           </select>
//         </div>

//         {/* TODAY KPI */}
//         <section className="mb-6">
//           <div className="mb-3">
//             <h2 className="text-sm font-semibold text-[#444]">Today</h2>
//           </div>
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-6">
//             <MetricCard
//               title="Today's Sales"
//               value={formatCurrency(todaySales)}
//               subtitle={`${todayOrders.length} orders`}
//             />
//             <MetricCard
//               title="New Enquiries"
//               value={String(todayEnquiriesCount)}
//               subtitle="Today"
//             />
//             <MetricCard
//               title="New Orders"
//               value={String(todayOrders.length)}
//               subtitle="Confirmed"
//             />
//             <MetricCard
//               title="Expenses"
//               value={formatCurrency(todayExpensesTotal)}
//               subtitle="Recorded today"
//             />
//             <MetricCard
//               title="Pending Payments"
//               value={formatCurrency(pendingPayments)}
//               subtitle="Customer balances"
//               warning
//             />
//             <MetricCard
//               title="Profit (Est.)"
//               value={formatCurrency(Math.max(0, todaySales - todayExpensesTotal))}
//               subtitle="Estimated today"
//             />
//           </div>
//         </section>

//         {/* MAIN KPI */}
//         <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <BigMetricCard
//             title="Total Products"
//             value={String(totalProducts)}
//             subtitle="Furniture products"
//             icon="P"
//           />
//           <BigMetricCard
//             title="In Stock"
//             value={String(inStock)}
//             subtitle="Available products"
//             icon="I"
//           />
//           <BigMetricCard
//             title="Low Stock"
//             value={String(lowStock.length)}
//             subtitle="Need attention"
//             icon="!"
//             warning
//           />
//           <BigMetricCard
//             title="Out of Stock"
//             value={String(outOfStock.length)}
//             subtitle="Currently unavailable"
//             icon="O"
//           />
//         </section>

//         {/* SALES + PROFIT */}
//         <section className="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-[1.65fr_1fr]">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="mb-5 flex items-start justify-between">
//               <div>
//                 <h2 className="text-base font-semibold">Sales Trend</h2>
//                 <p className="mt-1 text-xs text-[#999]">Monthly furniture sales</p>
//               </div>
//               <div className="text-right">
//                 <p className="text-lg font-semibold">{formatCurrency(totalSales)}</p>
//                 <p className="text-xs text-[#16804d]">{period}</p>
//               </div>
//             </div>
//             <SalesChart data={salesData} />
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="mb-5">
//               <h2 className="text-base font-semibold">Business Performance</h2>
//               <p className="mt-1 text-xs text-[#999]">{period} profit overview</p>
//             </div>
//             <div className="space-y-4">
//               <FinancialRow label="Sales Revenue" value={formatCurrency(totalSales)} />
//               <FinancialRow label="Product Cost (est.)" value={formatCurrency(productCost)} />
//               <FinancialRow label="Other Expenses" value={formatCurrency(periodExpensesTotal)} />
//               <div className="border-t border-[#eee] pt-4">
//                 <FinancialRow
//                   label="Estimated Net Profit"
//                   value={formatCurrency(estimatedProfit)}
//                   strong
//                 />
//               </div>
//             </div>
//             <div className="mt-6 rounded-lg bg-[#eef7f3] p-4">
//               <p className="text-xs text-[#688078]">Suggested calculation</p>
//               <p className="mt-1 text-sm font-medium text-[#176b5b]">
//                 Sales − Product Cost − Other Expenses
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* SOURCE + TOP PRODUCTS */}
//         <section className="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-2">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="mb-5">
//               <h2 className="text-base font-semibold">Customer / Lead Sources</h2>
//               <p className="mt-1 text-xs text-[#999]">Source-wise enquiries</p>
//             </div>
//             <div className="space-y-4">
//               {sourceData.map((source) => (
//                 <div key={source.name}>
//                   <div className="mb-1.5 flex items-center justify-between">
//                     <span className="text-sm text-[#555]">{source.name}</span>
//                     <span className="text-xs font-semibold text-[#555]">{source.value}%</span>
//                   </div>
//                   <div className="h-2 overflow-hidden rounded-full bg-[#eeeeeb]">
//                     <div
//                       className="h-full rounded-full bg-[#176b5b]"
//                       style={{ width: `${source.value}%` }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="mb-5 flex items-start justify-between">
//               <div>
//                 <h2 className="text-base font-semibold">Top Products</h2>
//                 <p className="mt-1 text-xs text-[#999]">Products with stronger sales</p>
//               </div>
//               <Link
//                 href="/furniture/products"
//                 className="text-xs font-semibold text-[#176b5b] hover:underline"
//               >
//                 View Products
//               </Link>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[500px]">
//                 <thead>
//                   <tr className="border-b border-[#eee] text-left">
//                     <th className="pb-3 text-xs font-semibold text-[#999]">Product</th>
//                     <th className="pb-3 text-xs font-semibold text-[#999]">Category</th>
//                     <th className="pb-3 text-center text-xs font-semibold text-[#999]">Sales</th>
//                     <th className="pb-3 text-right text-xs font-semibold text-[#999]">Revenue</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {topProducts.map((product, index) => (
//                     <tr key={product.code} className="border-b border-[#f0efeb] last:border-0">
//                       <td className="py-3">
//                         <div className="flex items-center gap-3">
//                           <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#f2f3ef] text-xs font-semibold text-[#176b5b]">
//                             {index + 1}
//                           </div>
//                           <div>
//                             <p className="text-sm font-medium">{product.name}</p>
//                             <p className="text-[11px] text-[#aaa]">{product.code}</p>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="py-3 text-sm text-[#666]">{product.category}</td>
//                       <td className="py-3 text-center text-sm font-medium">{product.sales}</td>
//                       <td className="py-3 text-right text-sm font-semibold">
//                         {formatCurrency(product.revenue)}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </section>

//         {/* ATTENTION NEEDED */}
//         <section className="mb-6 rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="flex flex-col gap-4 border-b border-[#eee] p-5 md:flex-row md:items-center md:justify-between">
//             <div>
//               <h2 className="text-base font-semibold">Attention Needed</h2>
//               <p className="mt-1 text-xs text-[#999]">
//                 Items that may require an immediate business action.
//               </p>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {["All", "Ageing", "Low Stock", "Payment"].map((filter) => (
//                 <button
//                   key={filter}
//                   onClick={() => setAttentionFilter(filter)}
//                   className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
//                     attentionFilter === filter
//                       ? "bg-[#176b5b] text-white"
//                       : "bg-[#f3f3f0] text-[#666] hover:bg-[#e9e9e5]"
//                   }`}
//                 >
//                   {filter}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="divide-y divide-[#eee]">
//             {filteredAttention.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex flex-col gap-4 p-5 transition hover:bg-[#fafbf9] md:flex-row md:items-center md:justify-between"
//               >
//                 <div className="flex items-start gap-4">
//                   <AttentionIcon type={item.type} />
//                   <div>
//                     <div className="flex flex-wrap items-center gap-2">
//                       <h3 className="text-sm font-semibold">{item.title}</h3>
//                       <span
//                         className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
//                           item.priority === "High"
//                             ? "bg-red-50 text-red-600"
//                             : "bg-orange-50 text-orange-600"
//                         }`}
//                       >
//                         {item.priority}
//                       </span>
//                     </div>
//                     <p className="mt-1 text-xs text-[#777]">{item.description}</p>
//                     <p className="mt-1 text-[11px] text-[#aaa]">Reference: {item.id}</p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => item.href && router.push(item.href)}
//                   className="rounded-lg border border-[#ddd] px-4 py-2 text-xs font-semibold text-[#555] hover:border-[#176b5b] hover:text-[#176b5b]"
//                 >
//                   Open Record
//                 </button>
//               </div>
//             ))}

//             {filteredAttention.length === 0 && (
//               <div className="p-10 text-center">
//                 <p className="text-sm font-medium text-[#555]">No attention items</p>
//                 <p className="mt-1 text-xs text-[#999]">There are no items in this category.</p>
//               </div>
//             )}
//           </div>
//         </section>

//         {/* QUICK ACCESS */}
//         <section>
//           <div className="mb-3">
//             <h2 className="text-sm font-semibold text-[#444]">Quick Access</h2>
//           </div>
//           <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
//             <QuickLink title="Products" href="/furniture/products" />
//             <QuickLink title="Customers" href="/furniture/customers" />
//             <QuickLink title="Enquiries" href="/furniture/enquiries" />
//             <QuickLink title="Orders" href="/furniture/orders" />
//             <QuickLink title="Payments" href="/furniture/payments" />
//             <QuickLink title="Reports" href="/furniture/reports" />
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// /* ---------- UI Components (unchanged style) ---------- */

// function MetricCard({
//   title,
//   value,
//   subtitle,
//   warning = false,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   warning?: boolean;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-4 shadow-sm">
//       <p className="text-xs font-medium text-[#999]">{title}</p>
//       <p className={`mt-2 text-xl font-semibold ${warning ? "text-[#b46b17]" : "text-[#222]"}`}>
//         {value}
//       </p>
//       <p className="mt-1 text-[11px] text-[#aaa]">{subtitle}</p>
//     </div>
//   );
// }

// function BigMetricCard({
//   title,
//   value,
//   subtitle,
//   icon,
//   warning = false,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   icon: string;
//   warning?: boolean;
// }) {
//   return (
//     <div className="flex items-center justify-between rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//       <div>
//         <p className="text-xs font-medium text-[#999]">{title}</p>
//         <p className={`mt-2 text-2xl font-semibold ${warning ? "text-[#b46b17]" : "text-[#222]"}`}>
//           {value}
//         </p>
//         <p className="mt-1 text-xs text-[#aaa]">{subtitle}</p>
//       </div>
//       <div
//         className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold ${
//           warning ? "bg-[#fff4df] text-[#b46b17]" : "bg-[#e8f2ee] text-[#176b5b]"
//         }`}
//       >
//         {icon}
//       </div>
//     </div>
//   );
// }

// function SalesChart({ data }: { data: Sale[] }) {
//   const max = Math.max(...data.map((item) => item.sales), 1);
//   return (
//     <div>
//       <div className="flex h-[250px] items-end gap-3 border-b border-l border-[#eee] px-4 pb-0 pt-5 sm:gap-6">
//         {data.map((item) => {
//           const height = Math.max(10, (item.sales / max) * 190);
//           return (
//             <div key={item.month} className="flex h-full flex-1 flex-col items-center justify-end">
//               <div className="mb-2 text-[10px] text-[#888]">{formatCurrency(item.sales)}</div>
//               <div
//                 className="w-full max-w-[45px] rounded-t-md bg-[#176b5b] transition hover:bg-[#125849]"
//                 style={{ height: `${height}px` }}
//                 title={`${item.month}: ${formatCurrency(item.sales)}`}
//               />
//               <div className="mt-3 text-xs text-[#888]">{item.month}</div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// function FinancialRow({
//   label,
//   value,
//   strong = false,
// }: {
//   label: string;
//   value: string;
//   strong?: boolean;
// }) {
//   return (
//     <div className="flex items-center justify-between gap-4">
//       <span className={`text-sm ${strong ? "font-semibold text-[#333]" : "text-[#777]"}`}>
//         {label}
//       </span>
//       <span className={`text-sm ${strong ? "font-semibold text-[#176b5b]" : "font-medium text-[#444]"}`}>
//         {value}
//       </span>
//     </div>
//   );
// }

// function AttentionIcon({ type }: { type: AttentionItem["type"] }) {
//   let content = "!";
//   if (type === "Payment") content = "₹";
//   if (type === "Ageing") content = "⏱";
//   return (
//     <div
//       className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
//         type === "Payment"
//           ? "bg-[#fff4df] text-[#b46b17]"
//           : type === "Low Stock"
//           ? "bg-red-50 text-red-600"
//           : "bg-[#eef1ff] text-[#5a65a8]"
//       }`}
//     >
//       {content}
//     </div>
//   );
// }

// function QuickLink({ title, href }: { title: string; href: string }) {
//   return (
//     <Link
//       href={href}
//       className="rounded-xl border border-[#e4e2da] bg-white px-4 py-4 text-center text-sm font-medium text-[#555] shadow-sm transition hover:-translate-y-0.5 hover:border-[#176b5b] hover:text-[#176b5b]"
//     >
//       {title}
//     </Link>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import {
//   getAllProducts,
//   getLowStockProducts,
//   getOutOfStockProducts,
//   getAgeingProducts,
//   type FurnitureProduct,
// } from "@/modules/furniture/services/productService";
// import {
//   getAllOrders,
//   getTodayOrders,
//   type FurnitureOrder,
// } from "@/modules/furniture/services/orderService";
// import {
//   getAllEnquiries,
//   getTodayEnquiries,
// } from "@/modules/furniture/services/enquiryService";
// import {
//   getTodayExpenses,
//   getExpensesInRange,
//   type FurnitureExpense,
// } from "@/modules/furniture/services/expenseService";

// type Sale = { month: string; sales: number };

// type AttentionItem = {
//   id: string;
//   title: string;
//   description: string;
//   type: "Ageing" | "Low Stock" | "Payment";
//   priority: "High" | "Medium";
//   href?: string;
// };

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function sumByAmount(items: { amount?: number }[]): number {
//   return items.reduce((sum: number, item) => sum + (item.amount || 0), 0);
// }

// function getPeriodRange(period: string): { start: Date; end: Date } {
//   const now = new Date();
//   const end = new Date(now);
//   end.setHours(23, 59, 59, 999);

//   const start = new Date(now);

//   if (period === "This Month") {
//     start.setDate(1);
//     start.setHours(0, 0, 0, 0);
//   } else if (period === "Last Month") {
//     start.setMonth(start.getMonth() - 1, 1);
//     start.setHours(0, 0, 0, 0);
//     end.setDate(0);
//     end.setHours(23, 59, 59, 999);
//   } else if (period === "Last 3 Months") {
//     start.setMonth(start.getMonth() - 2, 1);
//     start.setHours(0, 0, 0, 0);
//   } else {
//     start.setMonth(0, 1);
//     start.setHours(0, 0, 0, 0);
//   }

//   return { start, end };
// }

// export default function FurnitureDashboardPage() {
//   const router = useRouter();
//   const [period, setPeriod] = useState("This Month");
//   const [attentionFilter, setAttentionFilter] = useState("All");
//   const [loading, setLoading] = useState(true);

//   const [products, setProducts] = useState<FurnitureProduct[]>([]);
//   const [orders, setOrders] = useState<FurnitureOrder[]>([]);
//   const [todayOrders, setTodayOrders] = useState<FurnitureOrder[]>([]);
//   const [todayEnquiriesCount, setTodayEnquiriesCount] = useState(0);
//   const [todayExpensesTotal, setTodayExpensesTotal] = useState(0);
//   const [periodExpensesTotal, setPeriodExpensesTotal] = useState(0);
//   const [lowStock, setLowStock] = useState<FurnitureProduct[]>([]);
//   const [outOfStock, setOutOfStock] = useState<FurnitureProduct[]>([]);
//   const [ageing, setAgeing] = useState<(FurnitureProduct & { daysPublished: number })[]>([]);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const { start, end } = getPeriodRange(period);

//         const [
//           allProducts,
//           allOrders,
//           tOrders,
//           tEnquiries,
//           tExpenses,
//           pExpenses,
//           low,
//           out,
//           age,
//         ] = await Promise.all([
//           getAllProducts(),
//           getAllOrders(),
//           getTodayOrders(),
//           getTodayEnquiries(),
//           getTodayExpenses(),
//           getExpensesInRange(start, end),
//           getLowStockProducts(),
//           getOutOfStockProducts(),
//           getAgeingProducts(10),
//         ]);

//         if (cancelled) return;

//         setProducts(allProducts);
//         setOrders(allOrders);
//         setTodayOrders(tOrders);
//         setTodayEnquiriesCount(tEnquiries.length);
//         setTodayExpensesTotal(sumByAmount(tExpenses));
//         setPeriodExpensesTotal(sumByAmount(pExpenses));
//         setLowStock(low);
//         setOutOfStock(out);
//         setAgeing(age);
//       } catch (err) {
//         console.error("Dashboard load error:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, [period]);

//   const totalProducts = products.length;
//   const inStock = products.filter((p) => (p.stock ?? 0) > 0).length;

//   const periodOrders = useMemo(() => {
//     const { start, end } = getPeriodRange(period);
//     return orders.filter((o) => {
//       const ts = o.createdAt?.toMillis?.() ?? 0;
//       return ts >= start.getTime() && ts <= end.getTime();
//     });
//   }, [orders, period]);

//   const totalSales = periodOrders.reduce((s: number, o) => s + (o.amount || 0), 0);
//   const todaySales = todayOrders.reduce((s: number, o) => s + (o.amount || 0), 0);

//   const pendingPayments = orders
//     .filter((o) => o.paymentStatus === "Pending" || o.paymentStatus === "Partial")
//     .reduce((s: number, o) => s + (o.amount || 0), 0);

//   const productCost = periodOrders.reduce((sum: number, o) => {
//     return sum + (o.amount || 0) * 0.6;
//   }, 0);

//   const estimatedProfit = totalSales - productCost - periodExpensesTotal;

//   const salesData: Sale[] = useMemo(() => {
//     const months: Sale[] = [];
//     const now = new Date();
//     for (let i = 5; i >= 0; i--) {
//       const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
//       const label = d.toLocaleString("en-IN", { month: "short" });
//       const monthStart = new Date(d.getFullYear(), d.getMonth(), 1).getTime();
//       const monthEnd = new Date(d.getFullYear(), d.getMonth() + 1, 0, 23, 59, 59).getTime();

//       const sales = orders
//         .filter((o) => {
//           const ts = o.createdAt?.toMillis?.() ?? 0;
//           return ts >= monthStart && ts <= monthEnd;
//         })
//         .reduce((s: number, o) => s + (o.amount || 0), 0);

//       months.push({ month: label, sales });
//     }
//     return months;
//   }, [orders]);

//   const topProducts = useMemo(() => {
//     const map = new Map<string, { name: string; category: string; sales: number; revenue: number }>();

//     periodOrders.forEach((o) => {
//       (o.items || []).forEach((item) => {
//         const key = item.productId || item.name;
//         const existing = map.get(key) || {
//           name: item.name,
//           category: "",
//           sales: 0,
//           revenue: 0,
//         };
//         existing.sales += item.qty;
//         existing.revenue += item.qty * item.price;
//         map.set(key, existing);
//       });
//     });

//     if (map.size === 0) {
//       return products.slice(0, 4).map((p) => ({
//         code: p.sku || p.id,
//         name: p.name,
//         category: p.category || "—",
//         sales: 0,
//         revenue: 0,
//       }));
//     }

//     return Array.from(map.entries())
//       .map(([code, v]) => ({ code, ...v }))
//       .sort((a, b) => b.revenue - a.revenue)
//       .slice(0, 4);
//   }, [periodOrders, products]);

//   const sourceData = useMemo(() => {
//     const sources = ["Website", "Instagram", "WhatsApp", "Referral", "Walk-in", "Other"];
//     return sources.map((name) => ({ name, value: Math.floor(Math.random() * 20) + 5 }));
//   }, []);

//   const attentionItems: AttentionItem[] = useMemo(() => {
//     const items: AttentionItem[] = [];

//     ageing.slice(0, 5).forEach((p) => {
//       items.push({
//         id: p.id,
//         title: p.name,
//         description: `Published for ${p.daysPublished} days without a confirmed sale.`,
//         type: "Ageing",
//         priority: p.daysPublished >= 15 ? "High" : "Medium",
//         href: `/furniture/products/${p.id}`,
//       });
//     });

//     lowStock.slice(0, 3).forEach((p) => {
//       items.push({
//         id: p.id,
//         title: p.name,
//         description: `Only ${p.stock} units remaining. Minimum stock level is ${p.minStock ?? 5}.`,
//         type: "Low Stock",
//         priority: (p.stock ?? 0) <= 2 ? "High" : "Medium",
//         href: `/furniture/products/${p.id}`,
//       });
//     });

//     orders
//       .filter((o) => o.paymentStatus === "Pending" || o.paymentStatus === "Partial")
//       .slice(0, 3)
//       .forEach((o) => {
//         items.push({
//           id: o.id,
//           title: o.customerName || o.orderNo || "Customer",
//           description: `Payment of ${formatCurrency(o.amount || 0)} is pending.`,
//           type: "Payment",
//           priority: "High",
//           href: `/furniture/orders/${o.id}`,
//         });
//       });

//     return items;
//   }, [ageing, lowStock, orders]);

//   const filteredAttention = useMemo(() => {
//     if (attentionFilter === "All") return attentionItems;
//     return attentionItems.filter((item) => item.type === attentionFilter);
//   }, [attentionItems, attentionFilter]);

//   if (loading) {
//     return (
//       <div className="flex min-h-[60vh] items-center justify-center">
//         <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#242424]">
//       <main className="mx-auto max-w-[1500px] px-5 py-7 lg:px-8">
//         {/* TITLE + PERIOD */}
//         <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
//           <div>
//             <p className="mb-1 text-xs font-medium text-[#999]">Furniture / Dashboard</p>
//             <h1 className="text-2xl font-semibold tracking-tight">Furniture ERP Dashboard</h1>
//             <p className="mt-1 text-sm text-[#777]">
//               Live overview of products, sales, customers, payments and business performance.
//             </p>
//           </div>

//           <select
//             value={period}
//             onChange={(e) => setPeriod(e.target.value)}
//             className="h-10 rounded-lg border border-[#ddd] bg-white px-4 text-sm outline-none focus:border-[#176b5b]"
//           >
//             <option>This Month</option>
//             <option>Last Month</option>
//             <option>Last 3 Months</option>
//             <option>This Year</option>
//           </select>
//         </div>

//         {/* TODAY KPI */}
//         <section className="mb-6">
//           <div className="mb-3">
//             <h2 className="text-sm font-semibold text-[#444]">Today</h2>
//           </div>
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-6">
//             <MetricCard title="Today's Sales" value={formatCurrency(todaySales)} subtitle={`${todayOrders.length} orders`} />
//             <MetricCard title="New Enquiries" value={String(todayEnquiriesCount)} subtitle="Today" />
//             <MetricCard title="New Orders" value={String(todayOrders.length)} subtitle="Confirmed" />
//             <MetricCard title="Expenses" value={formatCurrency(todayExpensesTotal)} subtitle="Recorded today" />
//             <MetricCard title="Pending Payments" value={formatCurrency(pendingPayments)} subtitle="Customer balances" warning />
//             <MetricCard title="Profit (Est.)" value={formatCurrency(Math.max(0, todaySales - todayExpensesTotal))} subtitle="Estimated today" />
//           </div>
//         </section>

//         {/* MAIN KPI */}
//         <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <BigMetricCard title="Total Products" value={String(totalProducts)} subtitle="Furniture products" icon="P" />
//           <BigMetricCard title="In Stock" value={String(inStock)} subtitle="Available products" icon="I" />
//           <BigMetricCard title="Low Stock" value={String(lowStock.length)} subtitle="Need attention" icon="!" warning />
//           <BigMetricCard title="Out of Stock" value={String(outOfStock.length)} subtitle="Currently unavailable" icon="O" />
//         </section>

//         {/* SALES + PROFIT */}
//         <section className="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-[1.65fr_1fr]">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="mb-5 flex items-start justify-between">
//               <div>
//                 <h2 className="text-base font-semibold">Sales Trend</h2>
//                 <p className="mt-1 text-xs text-[#999]">Monthly furniture sales</p>
//               </div>
//               <div className="text-right">
//                 <p className="text-lg font-semibold">{formatCurrency(totalSales)}</p>
//                 <p className="text-xs text-[#16804d]">{period}</p>
//               </div>
//             </div>
//             <SalesChart data={salesData} />
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="mb-5">
//               <h2 className="text-base font-semibold">Business Performance</h2>
//               <p className="mt-1 text-xs text-[#999]">{period} profit overview</p>
//             </div>
//             <div className="space-y-4">
//               <FinancialRow label="Sales Revenue" value={formatCurrency(totalSales)} />
//               <FinancialRow label="Product Cost (est.)" value={formatCurrency(productCost)} />
//               <FinancialRow label="Other Expenses" value={formatCurrency(periodExpensesTotal)} />
//               <div className="border-t border-[#eee] pt-4">
//                 <FinancialRow label="Estimated Net Profit" value={formatCurrency(estimatedProfit)} strong />
//               </div>
//             </div>
//             <div className="mt-6 rounded-lg bg-[#eef7f3] p-4">
//               <p className="text-xs text-[#688078]">Suggested calculation</p>
//               <p className="mt-1 text-sm font-medium text-[#176b5b]">Sales − Product Cost − Other Expenses</p>
//             </div>
//           </div>
//         </section>

//         {/* SOURCE + TOP PRODUCTS */}
//         <section className="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-2">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="mb-5">
//               <h2 className="text-base font-semibold">Customer / Lead Sources</h2>
//               <p className="mt-1 text-xs text-[#999]">Source-wise enquiries</p>
//             </div>
//             <div className="space-y-4">
//               {sourceData.map((source) => (
//                 <div key={source.name}>
//                   <div className="mb-1.5 flex items-center justify-between">
//                     <span className="text-sm text-[#555]">{source.name}</span>
//                     <span className="text-xs font-semibold text-[#555]">{source.value}%</span>
//                   </div>
//                   <div className="h-2 overflow-hidden rounded-full bg-[#eeeeeb]">
//                     <div className="h-full rounded-full bg-[#176b5b]" style={{ width: `${source.value}%` }} />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="mb-5 flex items-start justify-between">
//               <div>
//                 <h2 className="text-base font-semibold">Top Products</h2>
//                 <p className="mt-1 text-xs text-[#999]">Products with stronger sales</p>
//               </div>
//               <Link href="/furniture/products" className="text-xs font-semibold text-[#176b5b] hover:underline">
//                 View Products
//               </Link>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[500px]">
//                 <thead>
//                   <tr className="border-b border-[#eee] text-left">
//                     <th className="pb-3 text-xs font-semibold text-[#999]">Product</th>
//                     <th className="pb-3 text-xs font-semibold text-[#999]">Category</th>
//                     <th className="pb-3 text-center text-xs font-semibold text-[#999]">Sales</th>
//                     <th className="pb-3 text-right text-xs font-semibold text-[#999]">Revenue</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {topProducts.map((product, index) => (
//                     <tr key={product.code} className="border-b border-[#f0efeb] last:border-0">
//                       <td className="py-3">
//                         <div className="flex items-center gap-3">
//                           <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#f2f3ef] text-xs font-semibold text-[#176b5b]">
//                             {index + 1}
//                           </div>
//                           <div>
//                             <p className="text-sm font-medium">{product.name}</p>
//                             <p className="text-[11px] text-[#aaa]">{product.code}</p>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="py-3 text-sm text-[#666]">{product.category}</td>
//                       <td className="py-3 text-center text-sm font-medium">{product.sales}</td>
//                       <td className="py-3 text-right text-sm font-semibold">{formatCurrency(product.revenue)}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </section>

//         {/* ATTENTION NEEDED */}
//         <section className="mb-6 rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="flex flex-col gap-4 border-b border-[#eee] p-5 md:flex-row md:items-center md:justify-between">
//             <div>
//               <h2 className="text-base font-semibold">Attention Needed</h2>
//               <p className="mt-1 text-xs text-[#999]">Items that may require an immediate business action.</p>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {["All", "Ageing", "Low Stock", "Payment"].map((filter) => (
//                 <button
//                   key={filter}
//                   onClick={() => setAttentionFilter(filter)}
//                   className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
//                     attentionFilter === filter
//                       ? "bg-[#176b5b] text-white"
//                       : "bg-[#f3f3f0] text-[#666] hover:bg-[#e9e9e5]"
//                   }`}
//                 >
//                   {filter}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="divide-y divide-[#eee]">
//             {filteredAttention.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex flex-col gap-4 p-5 transition hover:bg-[#fafbf9] md:flex-row md:items-center md:justify-between"
//               >
//                 <div className="flex items-start gap-4">
//                   <AttentionIcon type={item.type} />
//                   <div>
//                     <div className="flex flex-wrap items-center gap-2">
//                       <h3 className="text-sm font-semibold">{item.title}</h3>
//                       <span
//                         className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
//                           item.priority === "High" ? "bg-red-50 text-red-600" : "bg-orange-50 text-orange-600"
//                         }`}
//                       >
//                         {item.priority}
//                       </span>
//                     </div>
//                     <p className="mt-1 text-xs text-[#777]">{item.description}</p>
//                     <p className="mt-1 text-[11px] text-[#aaa]">Reference: {item.id}</p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => item.href && router.push(item.href)}
//                   className="rounded-lg border border-[#ddd] px-4 py-2 text-xs font-semibold text-[#555] hover:border-[#176b5b] hover:text-[#176b5b]"
//                 >
//                   Open Record
//                 </button>
//               </div>
//             ))}

//             {filteredAttention.length === 0 && (
//               <div className="p-10 text-center">
//                 <p className="text-sm font-medium text-[#555]">No attention items</p>
//                 <p className="mt-1 text-xs text-[#999]">There are no items in this category.</p>
//               </div>
//             )}
//           </div>
//         </section>

//         {/* QUICK ACCESS */}
//         <section>
//           <div className="mb-3">
//             <h2 className="text-sm font-semibold text-[#444]">Quick Access</h2>
//           </div>
//           <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
//             <QuickLink title="Products" href="/furniture/products" />
//             <QuickLink title="Customers" href="/furniture/customers" />
//             <QuickLink title="Enquiries" href="/furniture/enquiries" />
//             <QuickLink title="Orders" href="/furniture/orders" />
//             <QuickLink title="Payments" href="/furniture/payments" />
//             <QuickLink title="Reports" href="/furniture/reports" />
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// /* ---------- UI Components ---------- */

// function MetricCard({
//   title,
//   value,
//   subtitle,
//   warning = false,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   warning?: boolean;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-4 shadow-sm">
//       <p className="text-xs font-medium text-[#999]">{title}</p>
//       <p className={`mt-2 text-xl font-semibold ${warning ? "text-[#b46b17]" : "text-[#222]"}`}>
//         {value}
//       </p>
//       <p className="mt-1 text-[11px] text-[#aaa]">{subtitle}</p>
//     </div>
//   );
// }

// function BigMetricCard({
//   title,
//   value,
//   subtitle,
//   icon,
//   warning = false,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   icon: string;
//   warning?: boolean;
// }) {
//   return (
//     <div className="flex items-center justify-between rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//       <div>
//         <p className="text-xs font-medium text-[#999]">{title}</p>
//         <p className={`mt-2 text-2xl font-semibold ${warning ? "text-[#b46b17]" : "text-[#222]"}`}>
//           {value}
//         </p>
//         <p className="mt-1 text-xs text-[#aaa]">{subtitle}</p>
//       </div>
//       <div
//         className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold ${
//           warning ? "bg-[#fff4df] text-[#b46b17]" : "bg-[#e8f2ee] text-[#176b5b]"
//         }`}
//       >
//         {icon}
//       </div>
//     </div>
//   );
// }

// function SalesChart({ data }: { data: Sale[] }) {
//   const max = Math.max(...data.map((item) => item.sales), 1);
//   return (
//     <div>
//       <div className="flex h-[250px] items-end gap-3 border-b border-l border-[#eee] px-4 pb-0 pt-5 sm:gap-6">
//         {data.map((item) => {
//           const height = Math.max(10, (item.sales / max) * 190);
//           return (
//             <div key={item.month} className="flex h-full flex-1 flex-col items-center justify-end">
//               <div className="mb-2 text-[10px] text-[#888]">{formatCurrency(item.sales)}</div>
//               <div
//                 className="w-full max-w-[45px] rounded-t-md bg-[#176b5b] transition hover:bg-[#125849]"
//                 style={{ height: `${height}px` }}
//                 title={`${item.month}: ${formatCurrency(item.sales)}`}
//               />
//               <div className="mt-3 text-xs text-[#888]">{item.month}</div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// function FinancialRow({
//   label,
//   value,
//   strong = false,
// }: {
//   label: string;
//   value: string;
//   strong?: boolean;
// }) {
//   return (
//     <div className="flex items-center justify-between gap-4">
//       <span className={`text-sm ${strong ? "font-semibold text-[#333]" : "text-[#777]"}`}>{label}</span>
//       <span className={`text-sm ${strong ? "font-semibold text-[#176b5b]" : "font-medium text-[#444]"}`}>
//         {value}
//       </span>
//     </div>
//   );
// }

// function AttentionIcon({ type }: { type: AttentionItem["type"] }) {
//   let content = "!";
//   if (type === "Payment") content = "₹";
//   if (type === "Ageing") content = "⏱";
//   return (
//     <div
//       className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
//         type === "Payment"
//           ? "bg-[#fff4df] text-[#b46b17]"
//           : type === "Low Stock"
//           ? "bg-red-50 text-red-600"
//           : "bg-[#eef1ff] text-[#5a65a8]"
//       }`}
//     >
//       {content}
//     </div>
//   );
// }

// function QuickLink({ title, href }: { title: string; href: string }) {
//   return (
//     <Link
//       href={href}
//       className="rounded-xl border border-[#e4e2da] bg-white px-4 py-4 text-center text-sm font-medium text-[#555] shadow-sm transition hover:-translate-y-0.5 hover:border-[#176b5b] hover:text-[#176b5b]"
//     >
//       {title}
//     </Link>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import {
//   getAllProducts,
//   getLowStockProducts,
//   getOutOfStockProducts,
//   getAgeingProducts,
//   type FurnitureProduct,
// } from "@/modules/furniture/services/productService";
// import {
//   getAllOrders,
//   getTodayOrders,
//   type FurnitureOrder,
// } from "@/modules/furniture/services/orderService";
// import { getTodayEnquiries } from "@/modules/furniture/services/enquiryService";
// import {
//   getTodayExpenses,
//   getExpensesInRange,
// } from "@/modules/furniture/services/expenseService";

// type Sale = { month: string; sales: number };

// type AttentionItem = {
//   id: string;
//   title: string;
//   description: string;
//   type: "Ageing" | "Low Stock" | "Payment";
//   priority: "High" | "Medium";
//   href?: string;
// };

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function sumByAmount(items: { amount?: number }[]): number {
//   return items.reduce((sum: number, item) => sum + (item.amount || 0), 0);
// }

// function getPeriodRange(period: string): { start: Date; end: Date } {
//   const now = new Date();
//   const end = new Date(now);
//   end.setHours(23, 59, 59, 999);

//   const start = new Date(now);

//   if (period === "This Month") {
//     start.setDate(1);
//     start.setHours(0, 0, 0, 0);
//   } else if (period === "Last Month") {
//     start.setMonth(start.getMonth() - 1, 1);
//     start.setHours(0, 0, 0, 0);
//     end.setDate(0);
//     end.setHours(23, 59, 59, 999);
//   } else if (period === "Last 3 Months") {
//     start.setMonth(start.getMonth() - 2, 1);
//     start.setHours(0, 0, 0, 0);
//   } else {
//     start.setMonth(0, 1);
//     start.setHours(0, 0, 0, 0);
//   }

//   return { start, end };
// }

// function isActiveOrder(o: FurnitureOrder) {
//   const s = String(o.status || o.orderStatus || "").toLowerCase();
//   return s !== "cancelled";
// }

// function orderRevenue(o: FurnitureOrder) {
//   return Number(o.total ?? o.amount ?? o.totalAmount ?? 0) || 0;
// }

// export default function FurnitureDashboardPage() {
//   const router = useRouter();
//   const [period, setPeriod] = useState("This Month");
//   const [attentionFilter, setAttentionFilter] = useState("All");
//   const [loading, setLoading] = useState(true);

//   const [products, setProducts] = useState<FurnitureProduct[]>([]);
//   const [orders, setOrders] = useState<FurnitureOrder[]>([]);
//   const [todayOrders, setTodayOrders] = useState<FurnitureOrder[]>([]);
//   const [todayEnquiriesCount, setTodayEnquiriesCount] = useState(0);
//   const [todayExpensesTotal, setTodayExpensesTotal] = useState(0);
//   const [periodExpensesTotal, setPeriodExpensesTotal] = useState(0);
//   const [lowStock, setLowStock] = useState<FurnitureProduct[]>([]);
//   const [outOfStock, setOutOfStock] = useState<FurnitureProduct[]>([]);
//   const [ageing, setAgeing] = useState<
//     (FurnitureProduct & { daysPublished: number })[]
//   >([]);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const { start, end } = getPeriodRange(period);

//         const [
//           allProducts,
//           allOrders,
//           tOrders,
//           tEnquiries,
//           tExpenses,
//           pExpenses,
//           low,
//           out,
//           age,
//         ] = await Promise.all([
//           getAllProducts(),
//           getAllOrders(),
//           getTodayOrders(),
//           getTodayEnquiries(),
//           getTodayExpenses(),
//           getExpensesInRange(start, end),
//           getLowStockProducts(),
//           getOutOfStockProducts(),
//           getAgeingProducts(10),
//         ]);

//         if (cancelled) return;

//         setProducts(allProducts);
//         setOrders(allOrders);
//         setTodayOrders(tOrders);
//         setTodayEnquiriesCount(tEnquiries.length);
//         setTodayExpensesTotal(sumByAmount(tExpenses));
//         setPeriodExpensesTotal(sumByAmount(pExpenses));
//         setLowStock(low);
//         setOutOfStock(out);
//         setAgeing(age);
//       } catch (err) {
//         console.error("Dashboard load error:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, [period]);

//   const totalProducts = products.length;
//   const inStock = products.filter((p) => (p.stock ?? 0) > 0).length;

//   /** productId / sku / code → costPrice */
//   const costByProductId = useMemo(() => {
//     const map = new Map<string, number>();
//     products.forEach((p) => {
//       const cost = Number(p.costPrice ?? 0) || 0;
//       map.set(p.id, cost);
//       if (p.sku) map.set(String(p.sku), cost);
//       if (p.code) map.set(String(p.code), cost);
//     });
//     return map;
//   }, [products]);

//   /**
//    * COGS for one order from catalog costPrice × qty.
//    * Falls back to matching product by name when line items lack productId.
//    */
//   function orderProductCost(o: FurnitureOrder): number {
//     const items = o.items || [];
//     if (items.length > 0) {
//       return items.reduce((sum, item) => {
//         const qty = Number(item.qty ?? item.quantity ?? 1) || 1;
//         const pid = String(item.productId || "");
//         if (pid && costByProductId.has(pid)) {
//           return sum + (costByProductId.get(pid) || 0) * qty;
//         }
//         return sum;
//       }, 0);
//     }

//     const name = (o.product || o.productName || "").toLowerCase().trim();
//     if (!name) return 0;
//     const match = products.find(
//       (p) => p.name?.toLowerCase().trim() === name && Number(p.costPrice) > 0
//     );
//     if (!match) return 0;
//     const qty = Number(o.quantity) || 1;
//     return Number(match.costPrice) * qty;
//   }

//   const periodOrders = useMemo(() => {
//     const { start, end } = getPeriodRange(period);
//     return orders.filter((o) => {
//       if (!isActiveOrder(o)) return false;
//       const ts = o.createdAt?.toMillis?.() ?? 0;
//       return ts >= start.getTime() && ts <= end.getTime();
//     });
//   }, [orders, period]);

//   const activeTodayOrders = useMemo(
//     () => todayOrders.filter(isActiveOrder),
//     [todayOrders]
//   );

//   const totalSales = periodOrders.reduce((s, o) => s + orderRevenue(o), 0);
//   const todaySales = activeTodayOrders.reduce((s, o) => s + orderRevenue(o), 0);

//   const pendingPayments = orders
//     .filter(
//       (o) =>
//         isActiveOrder(o) &&
//         (o.paymentStatus === "Pending" || o.paymentStatus === "Partial")
//     )
//     .reduce(
//       (s, o) => s + Math.max(0, orderRevenue(o) - Number(o.paid || 0)),
//       0
//     );

//   const productCost = periodOrders.reduce(
//     (sum, o) => sum + orderProductCost(o),
//     0
//   );

//   const todayProductCost = activeTodayOrders.reduce(
//     (sum, o) => sum + orderProductCost(o),
//     0
//   );

//   const estimatedProfit = totalSales - productCost - periodExpensesTotal;
//   const todayEstimatedProfit =
//     todaySales - todayProductCost - todayExpensesTotal;

//   const salesData: Sale[] = useMemo(() => {
//     const months: Sale[] = [];
//     const now = new Date();
//     for (let i = 5; i >= 0; i--) {
//       const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
//       const label = d.toLocaleString("en-IN", { month: "short" });
//       const monthStart = new Date(d.getFullYear(), d.getMonth(), 1).getTime();
//       const monthEnd = new Date(
//         d.getFullYear(),
//         d.getMonth() + 1,
//         0,
//         23,
//         59,
//         59
//       ).getTime();

//       const sales = orders
//         .filter((o) => {
//           if (!isActiveOrder(o)) return false;
//           const ts = o.createdAt?.toMillis?.() ?? 0;
//           return ts >= monthStart && ts <= monthEnd;
//         })
//         .reduce((s, o) => s + orderRevenue(o), 0);

//       months.push({ month: label, sales });
//     }
//     return months;
//   }, [orders]);

//   const topProducts = useMemo(() => {
//     const map = new Map<
//       string,
//       { name: string; category: string; sales: number; revenue: number }
//     >();

//     periodOrders.forEach((o) => {
//       (o.items || []).forEach((item) => {
//         const key = item.productId || item.name || "unknown";
//         const existing = map.get(key) || {
//           name: item.name || "Item",
//           category: "",
//           sales: 0,
//           revenue: 0,
//         };
//         const qty = Number(item.qty ?? item.quantity ?? 1) || 1;
//         existing.sales += qty;
//         existing.revenue += qty * (Number(item.price) || 0);
//         map.set(key, existing);
//       });
//     });

//     if (map.size === 0) {
//       return products.slice(0, 4).map((p) => ({
//         code: p.sku || p.id,
//         name: p.name,
//         category: p.category || "—",
//         sales: 0,
//         revenue: 0,
//       }));
//     }

//     return Array.from(map.entries())
//       .map(([code, v]) => ({ code, ...v }))
//       .sort((a, b) => b.revenue - a.revenue)
//       .slice(0, 4);
//   }, [periodOrders, products]);

//   const sourceData = useMemo(() => {
//     const counts: Record<string, number> = {};
//     orders.filter(isActiveOrder).forEach((o) => {
//       const src = (o.source || "Other").trim() || "Other";
//       counts[src] = (counts[src] || 0) + 1;
//     });
//     const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
//     const preferred = [
//       "Website",
//       "Instagram",
//       "WhatsApp",
//       "Referral",
//       "Walk-in",
//       "Other",
//     ];
//     return preferred.map((name) => ({
//       name,
//       value: Math.round(((counts[name] || 0) / total) * 100),
//     }));
//   }, [orders]);

//   const attentionItems: AttentionItem[] = useMemo(() => {
//     const items: AttentionItem[] = [];

//     ageing.slice(0, 5).forEach((p) => {
//       items.push({
//         id: p.id,
//         title: p.name,
//         description: `Published for ${p.daysPublished} days without a confirmed sale.`,
//         type: "Ageing",
//         priority: p.daysPublished >= 15 ? "High" : "Medium",
//         href: `/furniture/products/${p.id}`,
//       });
//     });

//     lowStock.slice(0, 3).forEach((p) => {
//       items.push({
//         id: p.id,
//         title: p.name,
//         description: `Only ${p.stock} units remaining. Minimum stock level is ${
//           p.minStock ?? p.reorderLevel ?? 5
//         }.`,
//         type: "Low Stock",
//         priority: (p.stock ?? 0) <= 2 ? "High" : "Medium",
//         href: `/furniture/products/${p.id}`,
//       });
//     });

//     orders
//       .filter(
//         (o) =>
//           isActiveOrder(o) &&
//           (o.paymentStatus === "Pending" || o.paymentStatus === "Partial")
//       )
//       .slice(0, 3)
//       .forEach((o) => {
//         const due = Math.max(0, orderRevenue(o) - Number(o.paid || 0));
//         items.push({
//           id: o.id,
//           title: o.customerName || o.orderNo || "Customer",
//           description: `Payment of ${formatCurrency(due)} is pending.`,
//           type: "Payment",
//           priority: "High",
//           href: `/furniture/orders`,
//         });
//       });

//     return items;
//   }, [ageing, lowStock, orders]);

//   const filteredAttention = useMemo(() => {
//     if (attentionFilter === "All") return attentionItems;
//     return attentionItems.filter((item) => item.type === attentionFilter);
//   }, [attentionItems, attentionFilter]);

//   if (loading) {
//     return (
//       <div className="flex min-h-[60vh] items-center justify-center">
//         <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#242424]">
//       <main className="mx-auto max-w-[1500px] px-5 py-7 lg:px-8">
//         <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
//           <div>
//             <p className="mb-1 text-xs font-medium text-[#999]">
//               Furniture / Dashboard
//             </p>
//             <h1 className="text-2xl font-semibold tracking-tight">
//               Furniture ERP Dashboard
//             </h1>
//             <p className="mt-1 text-sm text-[#777]">
//               Live overview of products, sales, customers, payments and business
//               performance.
//             </p>
//           </div>

//           <select
//             value={period}
//             onChange={(e) => setPeriod(e.target.value)}
//             className="h-10 rounded-lg border border-[#ddd] bg-white px-4 text-sm outline-none focus:border-[#176b5b]"
//           >
//             <option>This Month</option>
//             <option>Last Month</option>
//             <option>Last 3 Months</option>
//             <option>This Year</option>
//           </select>
//         </div>

//         {/* TODAY KPI */}
//         <section className="mb-6">
//           <div className="mb-3">
//             <h2 className="text-sm font-semibold text-[#444]">Today</h2>
//           </div>
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-6">
//             <MetricCard
//               title="Today's Sales"
//               value={formatCurrency(todaySales)}
//               subtitle={`${activeTodayOrders.length} order${
//                 activeTodayOrders.length !== 1 ? "s" : ""
//               }`}
//             />
//             <MetricCard
//               title="New Enquiries"
//               value={String(todayEnquiriesCount)}
//               subtitle="Today"
//             />
//             <MetricCard
//               title="New Orders"
//               value={String(activeTodayOrders.length)}
//               subtitle="Excl. cancelled"
//             />
//             <MetricCard
//               title="Expenses"
//               value={formatCurrency(todayExpensesTotal)}
//               subtitle="Recorded today"
//             />
//             <MetricCard
//               title="Pending Payments"
//               value={formatCurrency(pendingPayments)}
//               subtitle="Outstanding balances"
//               warning
//             />
//             <MetricCard
//               title="Profit (Est.)"
//               value={formatCurrency(Math.max(0, todayEstimatedProfit))}
//               subtitle="Sales − cost − expenses"
//             />
//           </div>
//         </section>

//         {/* MAIN KPI */}
//         <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <BigMetricCard
//             title="Total Products"
//             value={String(totalProducts)}
//             subtitle="Furniture products"
//             icon="P"
//           />
//           <BigMetricCard
//             title="In Stock"
//             value={String(inStock)}
//             subtitle="Available products"
//             icon="I"
//           />
//           <BigMetricCard
//             title="Low Stock"
//             value={String(lowStock.length)}
//             subtitle="Need attention"
//             icon="!"
//             warning
//           />
//           <BigMetricCard
//             title="Out of Stock"
//             value={String(outOfStock.length)}
//             subtitle="Currently unavailable"
//             icon="O"
//           />
//         </section>

//         {/* SALES + PROFIT */}
//         <section className="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-[1.65fr_1fr]">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="mb-5 flex items-start justify-between">
//               <div>
//                 <h2 className="text-base font-semibold">Sales Trend</h2>
//                 <p className="mt-1 text-xs text-[#999]">
//                   Monthly furniture sales (excl. cancelled)
//                 </p>
//               </div>
//               <div className="text-right">
//                 <p className="text-lg font-semibold">
//                   {formatCurrency(totalSales)}
//                 </p>
//                 <p className="text-xs text-[#16804d]">{period}</p>
//               </div>
//             </div>
//             <SalesChart data={salesData} />
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="mb-5">
//               <h2 className="text-base font-semibold">Business Performance</h2>
//               <p className="mt-1 text-xs text-[#999]">
//                 {period} profit overview
//               </p>
//             </div>
//             <div className="space-y-4">
//               <FinancialRow
//                 label="Sales Revenue"
//                 value={formatCurrency(totalSales)}
//               />
//               <FinancialRow
//                 label="Product Cost (COGS)"
//                 value={formatCurrency(productCost)}
//               />
//               <FinancialRow
//                 label="Other Expenses"
//                 value={formatCurrency(periodExpensesTotal)}
//               />
//               <div className="border-t border-[#eee] pt-4">
//                 <FinancialRow
//                   label="Estimated Net Profit"
//                   value={formatCurrency(Math.max(0, estimatedProfit))}
//                   strong
//                 />
//               </div>
//             </div>
//             <div className="mt-6 rounded-lg bg-[#eef7f3] p-4">
//               <p className="text-xs text-[#688078]">Calculation</p>
//               <p className="mt-1 text-sm font-medium text-[#176b5b]">
//                 Sales − Product Cost (from catalog) − Other Expenses
//               </p>
//               <p className="mt-1 text-[11px] text-[#688078]">
//                 Cancelled orders are excluded.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* SOURCE + TOP PRODUCTS */}
//         <section className="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-2">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="mb-5">
//               <h2 className="text-base font-semibold">
//                 Customer / Lead Sources
//               </h2>
//               <p className="mt-1 text-xs text-[#999]">
//                 Source-wise order share
//               </p>
//             </div>
//             <div className="space-y-4">
//               {sourceData.map((source) => (
//                 <div key={source.name}>
//                   <div className="mb-1.5 flex items-center justify-between">
//                     <span className="text-sm text-[#555]">{source.name}</span>
//                     <span className="text-xs font-semibold text-[#555]">
//                       {source.value}%
//                     </span>
//                   </div>
//                   <div className="h-2 overflow-hidden rounded-full bg-[#eeeeeb]">
//                     <div
//                       className="h-full rounded-full bg-[#176b5b]"
//                       style={{ width: `${Math.min(100, source.value)}%` }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="mb-5 flex items-start justify-between">
//               <div>
//                 <h2 className="text-base font-semibold">Top Products</h2>
//                 <p className="mt-1 text-xs text-[#999]">
//                   Products with stronger sales
//                 </p>
//               </div>
//               <Link
//                 href="/furniture/products"
//                 className="text-xs font-semibold text-[#176b5b] hover:underline"
//               >
//                 View Products
//               </Link>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[500px]">
//                 <thead>
//                   <tr className="border-b border-[#eee] text-left">
//                     <th className="pb-3 text-xs font-semibold text-[#999]">
//                       Product
//                     </th>
//                     <th className="pb-3 text-xs font-semibold text-[#999]">
//                       Category
//                     </th>
//                     <th className="pb-3 text-center text-xs font-semibold text-[#999]">
//                       Sales
//                     </th>
//                     <th className="pb-3 text-right text-xs font-semibold text-[#999]">
//                       Revenue
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {topProducts.map((product, index) => (
//                     <tr
//                       key={product.code}
//                       className="border-b border-[#f0efeb] last:border-0"
//                     >
//                       <td className="py-3">
//                         <div className="flex items-center gap-3">
//                           <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#f2f3ef] text-xs font-semibold text-[#176b5b]">
//                             {index + 1}
//                           </div>
//                           <div>
//                             <p className="text-sm font-medium">{product.name}</p>
//                             <p className="text-[11px] text-[#aaa]">
//                               {product.code}
//                             </p>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="py-3 text-sm text-[#666]">
//                         {product.category || "—"}
//                       </td>
//                       <td className="py-3 text-center text-sm font-medium">
//                         {product.sales}
//                       </td>
//                       <td className="py-3 text-right text-sm font-semibold">
//                         {formatCurrency(product.revenue)}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </section>

//         {/* ATTENTION NEEDED */}
//         <section className="mb-6 rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="flex flex-col gap-4 border-b border-[#eee] p-5 md:flex-row md:items-center md:justify-between">
//             <div>
//               <h2 className="text-base font-semibold">Attention Needed</h2>
//               <p className="mt-1 text-xs text-[#999]">
//                 Items that may require an immediate business action.
//               </p>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {["All", "Ageing", "Low Stock", "Payment"].map((filter) => (
//                 <button
//                   key={filter}
//                   type="button"
//                   onClick={() => setAttentionFilter(filter)}
//                   className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
//                     attentionFilter === filter
//                       ? "bg-[#176b5b] text-white"
//                       : "bg-[#f3f3f0] text-[#666] hover:bg-[#e9e9e5]"
//                   }`}
//                 >
//                   {filter}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="divide-y divide-[#eee]">
//             {filteredAttention.map((item) => (
//               <div
//                 key={`${item.type}-${item.id}`}
//                 className="flex flex-col gap-4 p-5 transition hover:bg-[#fafbf9] md:flex-row md:items-center md:justify-between"
//               >
//                 <div className="flex items-start gap-4">
//                   <AttentionIcon type={item.type} />
//                   <div>
//                     <div className="flex flex-wrap items-center gap-2">
//                       <h3 className="text-sm font-semibold">{item.title}</h3>
//                       <span
//                         className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
//                           item.priority === "High"
//                             ? "bg-red-50 text-red-600"
//                             : "bg-orange-50 text-orange-600"
//                         }`}
//                       >
//                         {item.priority}
//                       </span>
//                     </div>
//                     <p className="mt-1 text-xs text-[#777]">
//                       {item.description}
//                     </p>
//                     <p className="mt-1 text-[11px] text-[#aaa]">
//                       Reference: {item.id}
//                     </p>
//                   </div>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => item.href && router.push(item.href)}
//                   className="rounded-lg border border-[#ddd] px-4 py-2 text-xs font-semibold text-[#555] hover:border-[#176b5b] hover:text-[#176b5b]"
//                 >
//                   Open Record
//                 </button>
//               </div>
//             ))}

//             {filteredAttention.length === 0 && (
//               <div className="p-10 text-center">
//                 <p className="text-sm font-medium text-[#555]">
//                   No attention items
//                 </p>
//                 <p className="mt-1 text-xs text-[#999]">
//                   There are no items in this category.
//                 </p>
//               </div>
//             )}
//           </div>
//         </section>

//         {/* QUICK ACCESS */}
//         <section>
//           <div className="mb-3">
//             <h2 className="text-sm font-semibold text-[#444]">Quick Access</h2>
//           </div>
//           <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
//             <QuickLink title="Products" href="/furniture/products" />
//             <QuickLink title="Customers" href="/furniture/customers" />
//             <QuickLink title="Enquiries" href="/furniture/enquiries" />
//             <QuickLink title="Orders" href="/furniture/orders" />
//             <QuickLink title="Payments" href="/furniture/payments" />
//             <QuickLink title="Reports" href="/furniture/reports" />
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// /* ---------- UI Components ---------- */

// function MetricCard({
//   title,
//   value,
//   subtitle,
//   warning = false,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   warning?: boolean;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-4 shadow-sm">
//       <p className="text-xs font-medium text-[#999]">{title}</p>
//       <p
//         className={`mt-2 text-xl font-semibold ${
//           warning ? "text-[#b46b17]" : "text-[#222]"
//         }`}
//       >
//         {value}
//       </p>
//       <p className="mt-1 text-[11px] text-[#aaa]">{subtitle}</p>
//     </div>
//   );
// }

// function BigMetricCard({
//   title,
//   value,
//   subtitle,
//   icon,
//   warning = false,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   icon: string;
//   warning?: boolean;
// }) {
//   return (
//     <div className="flex items-center justify-between rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//       <div>
//         <p className="text-xs font-medium text-[#999]">{title}</p>
//         <p
//           className={`mt-2 text-2xl font-semibold ${
//             warning ? "text-[#b46b17]" : "text-[#222]"
//           }`}
//         >
//           {value}
//         </p>
//         <p className="mt-1 text-xs text-[#aaa]">{subtitle}</p>
//       </div>
//       <div
//         className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold ${
//           warning
//             ? "bg-[#fff4df] text-[#b46b17]"
//             : "bg-[#e8f2ee] text-[#176b5b]"
//         }`}
//       >
//         {icon}
//       </div>
//     </div>
//   );
// }

// function SalesChart({ data }: { data: Sale[] }) {
//   const max = Math.max(...data.map((item) => item.sales), 1);
//   return (
//     <div>
//       <div className="flex h-[250px] items-end gap-3 border-b border-l border-[#eee] px-4 pb-0 pt-5 sm:gap-6">
//         {data.map((item) => {
//           const height = Math.max(10, (item.sales / max) * 190);
//           return (
//             <div
//               key={item.month}
//               className="flex h-full flex-1 flex-col items-center justify-end"
//             >
//               <div className="mb-2 text-[10px] text-[#888]">
//                 {formatCurrency(item.sales)}
//               </div>
//               <div
//                 className="w-full max-w-[45px] rounded-t-md bg-[#176b5b] transition hover:bg-[#125849]"
//                 style={{ height: `${height}px` }}
//                 title={`${item.month}: ${formatCurrency(item.sales)}`}
//               />
//               <div className="mt-3 text-xs text-[#888]">{item.month}</div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// function FinancialRow({
//   label,
//   value,
//   strong = false,
// }: {
//   label: string;
//   value: string;
//   strong?: boolean;
// }) {
//   return (
//     <div className="flex items-center justify-between gap-4">
//       <span
//         className={`text-sm ${
//           strong ? "font-semibold text-[#333]" : "text-[#777]"
//         }`}
//       >
//         {label}
//       </span>
//       <span
//         className={`text-sm ${
//           strong
//             ? "font-semibold text-[#176b5b]"
//             : "font-medium text-[#444]"
//         }`}
//       >
//         {value}
//       </span>
//     </div>
//   );
// }

// function AttentionIcon({ type }: { type: AttentionItem["type"] }) {
//   let content = "!";
//   if (type === "Payment") content = "₹";
//   if (type === "Ageing") content = "⏱";
//   return (
//     <div
//       className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
//         type === "Payment"
//           ? "bg-[#fff4df] text-[#b46b17]"
//           : type === "Low Stock"
//             ? "bg-red-50 text-red-600"
//             : "bg-[#eef1ff] text-[#5a65a8]"
//       }`}
//     >
//       {content}
//     </div>
//   );
// }

// function QuickLink({ title, href }: { title: string; href: string }) {
//   return (
//     <Link
//       href={href}
//       className="rounded-xl border border-[#e4e2da] bg-white px-4 py-4 text-center text-sm font-medium text-[#555] shadow-sm transition hover:-translate-y-0.5 hover:border-[#176b5b] hover:text-[#176b5b]"
//     >
//       {title}
//     </Link>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import {
//   getAllProducts,
//   getLowStockProducts,
//   getOutOfStockProducts,
//   getAgeingProducts,
//   type FurnitureProduct,
// } from "@/modules/furniture/services/productService";
// import {
//   getAllOrders,
//   type FurnitureOrder,
// } from "@/modules/furniture/services/orderService";
// import { getTodayEnquiries } from "@/modules/furniture/services/enquiryService";
// import {
//   getTodayExpenses,
//   getExpensesInRange,
// } from "@/modules/furniture/services/expenseService";

// type Sale = { month: string; sales: number };

// type AttentionItem = {
//   id: string;
//   title: string;
//   description: string;
//   type: "Ageing" | "Low Stock" | "Payment";
//   priority: "High" | "Medium";
//   href?: string;
// };

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function sumByAmount(items: { amount?: number }[]): number {
//   return items.reduce((sum: number, item) => sum + (item.amount || 0), 0);
// }

// function getPeriodRange(period: string): { start: Date; end: Date } {
//   const now = new Date();
//   const end = new Date(now);
//   end.setHours(23, 59, 59, 999);

//   const start = new Date(now);

//   if (period === "This Month") {
//     start.setDate(1);
//     start.setHours(0, 0, 0, 0);
//   } else if (period === "Last Month") {
//     start.setMonth(start.getMonth() - 1, 1);
//     start.setHours(0, 0, 0, 0);
//     end.setDate(0); // last day of previous month
//     end.setHours(23, 59, 59, 999);
//   } else if (period === "Last 3 Months") {
//     start.setMonth(start.getMonth() - 2, 1);
//     start.setHours(0, 0, 0, 0);
//   } else {
//     // This Year
//     start.setMonth(0, 1);
//     start.setHours(0, 0, 0, 0);
//   }

//   return { start, end };
// }

// function isActiveOrder(o: FurnitureOrder) {
//   const s = String(o.status || o.orderStatus || "").toLowerCase();
//   return s !== "cancelled";
// }

// function orderRevenue(o: FurnitureOrder) {
//   return Number(o.total ?? o.amount ?? o.totalAmount ?? 0) || 0;
// }

// /**
//  * Best-effort order timestamp for period filters.
//  * Uses createdAt, then orderNo date (AKR-20261015-…), then other date fields.
//  */
// function orderTimeMs(o: FurnitureOrder): number {
//   const ts = o.createdAt?.toMillis?.();
//   if (ts && ts > 0) return ts;

//   // orderNo / orderNumber like AKR-20261015-4663
//   const no = String(
//     (o as { orderNo?: string; orderNumber?: string }).orderNo ||
//       (o as { orderNumber?: string }).orderNumber ||
//       o.id ||
//       ""
//   );
//   const m = no.match(/(\d{4})(\d{2})(\d{2})/);
//   if (m) {
//     const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 12, 0, 0);
//     if (!Number.isNaN(d.getTime())) return d.getTime();
//   }

//   const raw = String(
//     (o as { orderDate?: string }).orderDate || o.deliveryDate || ""
//   );
//   if (raw) {
//     const d = new Date(raw.includes("T") ? raw : `${raw}T12:00:00`);
//     if (!Number.isNaN(d.getTime())) return d.getTime();
//   }

//   return 0;
// }

// function isSameCalendarDay(ms: number, ref: Date = new Date()): boolean {
//   if (!ms) return false;
//   const d = new Date(ms);
//   return (
//     d.getFullYear() === ref.getFullYear() &&
//     d.getMonth() === ref.getMonth() &&
//     d.getDate() === ref.getDate()
//   );
// }

// export default function FurnitureDashboardPage() {
//   const router = useRouter();
//   const [period, setPeriod] = useState("This Month");
//   const [attentionFilter, setAttentionFilter] = useState("All");
//   const [loading, setLoading] = useState(true);

//   const [products, setProducts] = useState<FurnitureProduct[]>([]);
//   const [orders, setOrders] = useState<FurnitureOrder[]>([]);
//   const [todayEnquiriesCount, setTodayEnquiriesCount] = useState(0);
//   const [todayExpensesTotal, setTodayExpensesTotal] = useState(0);
//   const [periodExpensesTotal, setPeriodExpensesTotal] = useState(0);
//   const [lowStock, setLowStock] = useState<FurnitureProduct[]>([]);
//   const [outOfStock, setOutOfStock] = useState<FurnitureProduct[]>([]);
//   const [ageing, setAgeing] = useState<
//     (FurnitureProduct & { daysPublished: number })[]
//   >([]);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const { start, end } = getPeriodRange(period);

//         const [
//           allProducts,
//           allOrders,
//           tEnquiries,
//           tExpenses,
//           pExpenses,
//           low,
//           out,
//           age,
//         ] = await Promise.all([
//           getAllProducts(),
//           getAllOrders(),
//           getTodayEnquiries(),
//           getTodayExpenses(),
//           getExpensesInRange(start, end),
//           getLowStockProducts(),
//           getOutOfStockProducts(),
//           getAgeingProducts(10),
//         ]);

//         if (cancelled) return;

//         setProducts(allProducts);
//         setOrders(allOrders);
//         setTodayEnquiriesCount(tEnquiries.length);
//         setTodayExpensesTotal(sumByAmount(tExpenses));
//         setPeriodExpensesTotal(sumByAmount(pExpenses));
//         setLowStock(low);
//         setOutOfStock(out);
//         setAgeing(age);
//       } catch (err) {
//         console.error("Dashboard load error:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, [period]);

//   const totalProducts = products.length;
//   const inStock = products.filter((p) => (p.stock ?? 0) > 0).length;

//   const costByProductId = useMemo(() => {
//     const map = new Map<string, number>();
//     products.forEach((p) => {
//       const cost = Number(p.costPrice ?? 0) || 0;
//       map.set(p.id, cost);
//       if (p.sku) map.set(String(p.sku), cost);
//       if (p.code) map.set(String(p.code), cost);
//     });
//     return map;
//   }, [products]);

//   function orderProductCost(o: FurnitureOrder): number {
//     const items = o.items || [];
//     if (items.length > 0) {
//       return items.reduce((sum, item) => {
//         const qty = Number(item.qty ?? item.quantity ?? 1) || 1;
//         const pid = String(item.productId || "");
//         if (pid && costByProductId.has(pid)) {
//           return sum + (costByProductId.get(pid) || 0) * qty;
//         }
//         // try match by product name on line item
//         const iname = String(item.name || "").toLowerCase().trim();
//         if (iname) {
//           const match = products.find(
//             (p) =>
//               p.name?.toLowerCase().trim() === iname && Number(p.costPrice) > 0
//           );
//           if (match) return sum + Number(match.costPrice) * qty;
//         }
//         return sum;
//       }, 0);
//     }

//     const name = (o.product || o.productName || "").toLowerCase().trim();
//     if (!name) return 0;
//     const match = products.find(
//       (p) => p.name?.toLowerCase().trim() === name && Number(p.costPrice) > 0
//     );
//     if (!match) return 0;
//     const qty = Number(o.quantity) || 1;
//     return Number(match.costPrice) * qty;
//   }

//   // Period filter — uses orderTimeMs so missing createdAt still works
//   const periodOrders = useMemo(() => {
//     const { start, end } = getPeriodRange(period);
//     const startMs = start.getTime();
//     const endMs = end.getTime();
//     return orders.filter((o) => {
//       if (!isActiveOrder(o)) return false;
//       const t = orderTimeMs(o);
//       if (!t) return false;
//       return t >= startMs && t <= endMs;
//     });
//   }, [orders, period]);

//   // Today from all orders (not only getTodayOrders) so orderNo date works
//   const activeTodayOrders = useMemo(
//     () =>
//       orders.filter((o) => isActiveOrder(o) && isSameCalendarDay(orderTimeMs(o))),
//     [orders]
//   );

//   const periodPaidOrders = useMemo(
//     () =>
//       periodOrders.filter((o) => {
//         const ps = String(o.paymentStatus || "").toLowerCase();
//         return ps === "paid" || ps === "received";
//       }),
//     [periodOrders]
//   );

//   const totalSales = periodOrders.reduce((s, o) => s + orderRevenue(o), 0);
//   const todaySales = activeTodayOrders.reduce((s, o) => s + orderRevenue(o), 0);

//   const paidSales = periodPaidOrders.reduce((s, o) => s + orderRevenue(o), 0);

//   const pendingPayments = orders
//     .filter(
//       (o) =>
//         isActiveOrder(o) &&
//         (o.paymentStatus === "Pending" || o.paymentStatus === "Partial")
//     )
//     .reduce(
//       (s, o) => s + Math.max(0, orderRevenue(o) - Number(o.paid || 0)),
//       0
//     );

//   const productCost = periodOrders.reduce(
//     (sum, o) => sum + orderProductCost(o),
//     0
//   );

//   const paidProductCost = periodPaidOrders.reduce(
//     (sum, o) => sum + orderProductCost(o),
//     0
//   );

//   const todayProductCost = activeTodayOrders.reduce(
//     (sum, o) => sum + orderProductCost(o),
//     0
//   );

//   // Business performance: all active sales in period
//   const estimatedProfit = totalSales - productCost - periodExpensesTotal;
//   // Optional paid-only margin for display clarity
//   const paidEstimatedProfit = paidSales - paidProductCost - periodExpensesTotal;

//   const todayEstimatedProfit =
//     todaySales - todayProductCost - todayExpensesTotal;

//   const salesData: Sale[] = useMemo(() => {
//     const months: Sale[] = [];
//     const now = new Date();
//     for (let i = 5; i >= 0; i--) {
//       const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
//       const label = d.toLocaleString("en-IN", { month: "short" });
//       const monthStart = new Date(d.getFullYear(), d.getMonth(), 1).getTime();
//       const monthEnd = new Date(
//         d.getFullYear(),
//         d.getMonth() + 1,
//         0,
//         23,
//         59,
//         59
//       ).getTime();

//       const sales = orders
//         .filter((o) => {
//           if (!isActiveOrder(o)) return false;
//           const t = orderTimeMs(o);
//           return t >= monthStart && t <= monthEnd;
//         })
//         .reduce((s, o) => s + orderRevenue(o), 0);

//       months.push({ month: label, sales });
//     }
//     return months;
//   }, [orders]);

//   const topProducts = useMemo(() => {
//     const map = new Map<
//       string,
//       { name: string; category: string; sales: number; revenue: number }
//     >();

//     periodOrders.forEach((o) => {
//       (o.items || []).forEach((item) => {
//         const key = item.productId || item.name || "unknown";
//         const existing = map.get(key) || {
//           name: item.name || "Item",
//           category: "",
//           sales: 0,
//           revenue: 0,
//         };
//         const qty = Number(item.qty ?? item.quantity ?? 1) || 1;
//         existing.sales += qty;
//         existing.revenue += qty * (Number(item.price) || 0);
//         map.set(key, existing);
//       });

//       // Single-product orders without items[]
//       if ((!o.items || o.items.length === 0) && (o.product || o.productName)) {
//         const name = o.product || o.productName || "Item";
//         const key = name;
//         const existing = map.get(key) || {
//           name,
//           category: o.category || "",
//           sales: 0,
//           revenue: 0,
//         };
//         const qty = Number(o.quantity) || 1;
//         existing.sales += qty;
//         existing.revenue += orderRevenue(o);
//         map.set(key, existing);
//       }
//     });

//     if (map.size === 0) {
//       return products.slice(0, 4).map((p) => ({
//         code: p.sku || p.id,
//         name: p.name,
//         category: p.category || "—",
//         sales: 0,
//         revenue: 0,
//       }));
//     }

//     return Array.from(map.entries())
//       .map(([code, v]) => ({ code, ...v }))
//       .sort((a, b) => b.revenue - a.revenue)
//       .slice(0, 4);
//   }, [periodOrders, products]);

//   const sourceData = useMemo(() => {
//     const counts: Record<string, number> = {};
//     orders.filter(isActiveOrder).forEach((o) => {
//       const src = (o.source || "Other").trim() || "Other";
//       counts[src] = (counts[src] || 0) + 1;
//     });
//     const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
//     const preferred = [
//       "Website",
//       "Instagram",
//       "WhatsApp",
//       "Referral",
//       "Walk-in",
//       "Other",
//     ];
//     return preferred.map((name) => ({
//       name,
//       value: Math.round(((counts[name] || 0) / total) * 100),
//     }));
//   }, [orders]);

//   const attentionItems: AttentionItem[] = useMemo(() => {
//     const items: AttentionItem[] = [];

//     ageing.slice(0, 5).forEach((p) => {
//       items.push({
//         id: p.id,
//         title: p.name,
//         description: `Published for ${p.daysPublished} days without a confirmed sale.`,
//         type: "Ageing",
//         priority: p.daysPublished >= 15 ? "High" : "Medium",
//         href: `/furniture/products/${p.id}`,
//       });
//     });

//     lowStock.slice(0, 3).forEach((p) => {
//       items.push({
//         id: p.id,
//         title: p.name,
//         description: `Only ${p.stock} units remaining. Minimum stock level is ${
//           p.minStock ?? p.reorderLevel ?? 5
//         }.`,
//         type: "Low Stock",
//         priority: (p.stock ?? 0) <= 2 ? "High" : "Medium",
//         href: `/furniture/products/${p.id}`,
//       });
//     });

//     orders
//       .filter(
//         (o) =>
//           isActiveOrder(o) &&
//           (o.paymentStatus === "Pending" || o.paymentStatus === "Partial")
//       )
//       .slice(0, 3)
//       .forEach((o) => {
//         const due = Math.max(0, orderRevenue(o) - Number(o.paid || 0));
//         items.push({
//           id: o.id,
//           title: o.customerName || o.orderNo || "Customer",
//           description: `Payment of ${formatCurrency(due)} is pending.`,
//           type: "Payment",
//           priority: "High",
//           href: `/furniture/orders`,
//         });
//       });

//     return items;
//   }, [ageing, lowStock, orders]);

//   const filteredAttention = useMemo(() => {
//     if (attentionFilter === "All") return attentionItems;
//     return attentionItems.filter((item) => item.type === attentionFilter);
//   }, [attentionItems, attentionFilter]);

//   if (loading) {
//     return (
//       <div className="flex min-h-[60vh] items-center justify-center">
//         <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#242424]">
//       <main className="mx-auto max-w-[1500px] px-5 py-7 lg:px-8">
//         <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
//           <div>
//             <p className="mb-1 text-xs font-medium text-[#999]">
//               Furniture / Dashboard
//             </p>
//             <h1 className="text-2xl font-semibold tracking-tight">
//               Furniture ERP Dashboard
//             </h1>
//             <p className="mt-1 text-sm text-[#777]">
//               Live overview of products, sales, customers, payments and business
//               performance.
//             </p>
//           </div>

//           <select
//             value={period}
//             onChange={(e) => setPeriod(e.target.value)}
//             className="h-10 rounded-lg border border-[#ddd] bg-white px-4 text-sm outline-none focus:border-[#176b5b]"
//           >
//             <option>This Month</option>
//             <option>Last Month</option>
//             <option>Last 3 Months</option>
//             <option>This Year</option>
//           </select>
//         </div>

//         {/* TODAY KPI */}
//         <section className="mb-6">
//           <div className="mb-3">
//             <h2 className="text-sm font-semibold text-[#444]">Today</h2>
//           </div>
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-6">
//             <MetricCard
//               title="Today's Sales"
//               value={formatCurrency(todaySales)}
//               subtitle={`${activeTodayOrders.length} order${
//                 activeTodayOrders.length !== 1 ? "s" : ""
//               }`}
//             />
//             <MetricCard
//               title="New Enquiries"
//               value={String(todayEnquiriesCount)}
//               subtitle="Today"
//             />
//             <MetricCard
//               title="New Orders"
//               value={String(activeTodayOrders.length)}
//               subtitle="Excl. cancelled"
//             />
//             <MetricCard
//               title="Expenses"
//               value={formatCurrency(todayExpensesTotal)}
//               subtitle="Recorded today"
//             />
//             <MetricCard
//               title="Pending Payments"
//               value={formatCurrency(pendingPayments)}
//               subtitle="Outstanding balances"
//               warning
//             />
//             <MetricCard
//               title="Profit (Est.)"
//               value={formatCurrency(Math.max(0, todayEstimatedProfit))}
//               subtitle="Sales − cost − expenses"
//             />
//           </div>
//         </section>

//         {/* PRODUCT KPI */}
//         <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <BigMetricCard
//             title="Total Products"
//             value={String(totalProducts)}
//             subtitle="Furniture products"
//             icon="P"
//           />
//           <BigMetricCard
//             title="In Stock"
//             value={String(inStock)}
//             subtitle="Available products"
//             icon="I"
//           />
//           <BigMetricCard
//             title="Low Stock"
//             value={String(lowStock.length)}
//             subtitle="Need attention"
//             icon="!"
//             warning
//           />
//           <BigMetricCard
//             title="Out of Stock"
//             value={String(outOfStock.length)}
//             subtitle="Currently unavailable"
//             icon="O"
//           />
//         </section>

//         {/* BUSINESS PERFORMANCE (period filter) */}
//         <section className="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-3">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm xl:col-span-2">
//             <div className="mb-4 flex items-center justify-between">
//               <div>
//                 <h2 className="text-base font-semibold">Sales Trend</h2>
//                 <p className="mt-1 text-xs text-[#999]">Last 6 months</p>
//               </div>
//               <span className="rounded-full bg-[#eef7f4] px-3 py-1 text-xs font-semibold text-[#176b5b]">
//                 {period}
//               </span>
//             </div>
//             <SalesChart data={salesData} />
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <h2 className="text-base font-semibold">Business Performance</h2>
//             <p className="mt-1 text-xs text-[#999]">
//               Period: <span className="font-semibold text-[#555]">{period}</span>
//               {" · "}
//               {periodOrders.length} active order
//               {periodOrders.length !== 1 ? "s" : ""}
//             </p>
//             <div className="mt-5 space-y-4">
//               <FinancialRow
//                 label="Total Sales"
//                 value={formatCurrency(totalSales)}
//               />
//               <FinancialRow
//                 label="Paid sales"
//                 value={formatCurrency(paidSales)}
//               />
//               <FinancialRow
//                 label="Product cost (COGS)"
//                 value={formatCurrency(productCost)}
//               />
//               <FinancialRow
//                 label="Expenses"
//                 value={formatCurrency(periodExpensesTotal)}
//               />
//               <div className="border-t border-[#eee] pt-4">
//                 <FinancialRow
//                   label="Est. profit"
//                   value={formatCurrency(Math.max(0, estimatedProfit))}
//                   strong
//                 />
//                 <p className="mt-1 text-[11px] text-[#aaa]">
//                   Paid-only margin:{" "}
//                   {formatCurrency(Math.max(0, paidEstimatedProfit))}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* TOP PRODUCTS + SOURCES */}
//         <section className="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-3">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm xl:col-span-2">
//             <h2 className="text-base font-semibold">Top Products</h2>
//             <p className="mt-1 text-xs text-[#999]">
//               By revenue in selected period
//             </p>
//             <div className="mt-4 overflow-x-auto">
//               <table className="w-full min-w-[480px]">
//                 <thead>
//                   <tr className="border-b border-[#eee] text-left">
//                     <th className="pb-3 text-xs font-semibold text-[#999]">
//                       Product
//                     </th>
//                     <th className="pb-3 text-xs font-semibold text-[#999]">
//                       Category
//                     </th>
//                     <th className="pb-3 text-center text-xs font-semibold text-[#999]">
//                       Sales
//                     </th>
//                     <th className="pb-3 text-right text-xs font-semibold text-[#999]">
//                       Revenue
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {topProducts.map((product, index) => (
//                     <tr
//                       key={product.code}
//                       className="border-b border-[#f0efeb] last:border-0"
//                     >
//                       <td className="py-3">
//                         <div className="flex items-center gap-3">
//                           <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#f2f3ef] text-xs font-semibold text-[#176b5b]">
//                             {index + 1}
//                           </div>
//                           <div>
//                             <p className="text-sm font-medium">{product.name}</p>
//                             <p className="text-[11px] text-[#aaa]">
//                               {product.code}
//                             </p>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="py-3 text-sm text-[#666]">
//                         {product.category || "—"}
//                       </td>
//                       <td className="py-3 text-center text-sm font-medium">
//                         {product.sales}
//                       </td>
//                       <td className="py-3 text-right text-sm font-semibold">
//                         {formatCurrency(product.revenue)}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <h2 className="text-base font-semibold">Order Sources</h2>
//             <p className="mt-1 text-xs text-[#999]">Share of active orders</p>
//             <div className="mt-5 space-y-3">
//               {sourceData.map((s) => (
//                 <div key={s.name}>
//                   <div className="mb-1 flex justify-between text-xs">
//                     <span className="text-[#666]">{s.name}</span>
//                     <span className="font-semibold text-[#444]">{s.value}%</span>
//                   </div>
//                   <div className="h-2 overflow-hidden rounded-full bg-[#f0eee7]">
//                     <div
//                       className="h-full rounded-full bg-[#176b5b]"
//                       style={{ width: `${s.value}%` }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ATTENTION NEEDED */}
//         <section className="mb-6 rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="flex flex-col gap-4 border-b border-[#eee] p-5 md:flex-row md:items-center md:justify-between">
//             <div>
//               <h2 className="text-base font-semibold">Attention Needed</h2>
//               <p className="mt-1 text-xs text-[#999]">
//                 Items that may require an immediate business action.
//               </p>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {["All", "Ageing", "Low Stock", "Payment"].map((filter) => (
//                 <button
//                   key={filter}
//                   type="button"
//                   onClick={() => setAttentionFilter(filter)}
//                   className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
//                     attentionFilter === filter
//                       ? "bg-[#176b5b] text-white"
//                       : "bg-[#f3f3f0] text-[#666] hover:bg-[#e9e9e5]"
//                   }`}
//                 >
//                   {filter}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="divide-y divide-[#eee]">
//             {filteredAttention.map((item) => (
//               <div
//                 key={`${item.type}-${item.id}`}
//                 className="flex flex-col gap-4 p-5 transition hover:bg-[#fafbf9] md:flex-row md:items-center md:justify-between"
//               >
//                 <div className="flex items-start gap-4">
//                   <AttentionIcon type={item.type} />
//                   <div>
//                     <div className="flex flex-wrap items-center gap-2">
//                       <h3 className="text-sm font-semibold">{item.title}</h3>
//                       <span
//                         className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
//                           item.priority === "High"
//                             ? "bg-red-50 text-red-600"
//                             : "bg-orange-50 text-orange-600"
//                         }`}
//                       >
//                         {item.priority}
//                       </span>
//                     </div>
//                     <p className="mt-1 text-xs text-[#777]">{item.description}</p>
//                     <p className="mt-1 text-[11px] text-[#aaa]">
//                       Reference: {item.id}
//                     </p>
//                   </div>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => item.href && router.push(item.href)}
//                   className="rounded-lg border border-[#ddd] px-4 py-2 text-xs font-semibold text-[#555] hover:border-[#176b5b] hover:text-[#176b5b]"
//                 >
//                   Open Record
//                 </button>
//               </div>
//             ))}

//             {filteredAttention.length === 0 && (
//               <div className="p-10 text-center">
//                 <p className="text-sm font-medium text-[#555]">
//                   No attention items
//                 </p>
//                 <p className="mt-1 text-xs text-[#999]">
//                   There are no items in this category.
//                 </p>
//               </div>
//             )}
//           </div>
//         </section>

//         {/* QUICK ACCESS */}
//         <section>
//           <h2 className="mb-3 text-sm font-semibold text-[#444]">Quick access</h2>
//           <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
//             <QuickLink title="Orders" href="/furniture/orders" />
//             <QuickLink title="Products" href="/furniture/products" />
//             <QuickLink title="Enquiries" href="/furniture/enquiries" />
//             <QuickLink title="Payments" href="/furniture/payments" />
//             <QuickLink title="Inventory" href="/furniture/inventory" />
//             <QuickLink title="Reports" href="/furniture/reports" />
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// function MetricCard({
//   title,
//   value,
//   subtitle,
//   warning = false,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   warning?: boolean;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//       <p className="text-xs font-medium text-[#999]">{title}</p>
//       <p
//         className={`mt-2 text-2xl font-semibold ${
//           warning ? "text-[#b46b17]" : "text-[#222]"
//         }`}
//       >
//         {value}
//       </p>
//       <p className="mt-1 text-xs text-[#aaa]">{subtitle}</p>
//     </div>
//   );
// }

// function BigMetricCard({
//   title,
//   value,
//   subtitle,
//   icon,
//   warning = false,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   icon: string;
//   warning?: boolean;
// }) {
//   return (
//     <div className="flex items-center justify-between rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//       <div>
//         <p className="text-xs font-medium text-[#999]">{title}</p>
//         <p
//           className={`mt-2 text-2xl font-semibold ${
//             warning ? "text-[#b46b17]" : "text-[#222]"
//           }`}
//         >
//           {value}
//         </p>
//         <p className="mt-1 text-xs text-[#aaa]">{subtitle}</p>
//       </div>
//       <div
//         className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold ${
//           warning
//             ? "bg-[#fff4df] text-[#b46b17]"
//             : "bg-[#e8f2ee] text-[#176b5b]"
//         }`}
//       >
//         {icon}
//       </div>
//     </div>
//   );
// }

// function SalesChart({ data }: { data: Sale[] }) {
//   const max = Math.max(...data.map((item) => item.sales), 1);
//   return (
//     <div>
//       <div className="flex h-[250px] items-end gap-3 border-b border-l border-[#eee] px-4 pb-0 pt-5 sm:gap-6">
//         {data.map((item) => {
//           const height = Math.max(10, (item.sales / max) * 190);
//           return (
//             <div
//               key={item.month}
//               className="flex h-full flex-1 flex-col items-center justify-end"
//             >
//               <div className="mb-2 text-[10px] text-[#888]">
//                 {formatCurrency(item.sales)}
//               </div>
//               <div
//                 className="w-full max-w-[45px] rounded-t-md bg-[#176b5b] transition hover:bg-[#125849]"
//                 style={{ height: `${height}px` }}
//                 title={`${item.month}: ${formatCurrency(item.sales)}`}
//               />
//               <div className="mt-3 text-xs text-[#888]">{item.month}</div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// function FinancialRow({
//   label,
//   value,
//   strong = false,
// }: {
//   label: string;
//   value: string;
//   strong?: boolean;
// }) {
//   return (
//     <div className="flex items-center justify-between gap-4">
//       <span
//         className={`text-sm ${
//           strong ? "font-semibold text-[#333]" : "text-[#777]"
//         }`}
//       >
//         {label}
//       </span>
//       <span
//         className={`text-sm ${
//           strong ? "font-semibold text-[#176b5b]" : "font-medium text-[#444]"
//         }`}
//       >
//         {value}
//       </span>
//     </div>
//   );
// }

// function AttentionIcon({ type }: { type: AttentionItem["type"] }) {
//   let content = "!";
//   if (type === "Payment") content = "₹";
//   if (type === "Ageing") content = "⏱";
//   return (
//     <div
//       className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
//         type === "Payment"
//           ? "bg-[#fff4df] text-[#b46b17]"
//           : type === "Low Stock"
//             ? "bg-red-50 text-red-600"
//             : "bg-[#eef1ff] text-[#5a65a8]"
//       }`}
//     >
//       {content}
//     </div>
//   );
// }

// function QuickLink({ title, href }: { title: string; href: string }) {
//   return (
//     <Link
//       href={href}
//       className="rounded-xl border border-[#e4e2da] bg-white px-4 py-4 text-center text-sm font-medium text-[#555] shadow-sm transition hover:-translate-y-0.5 hover:border-[#176b5b] hover:text-[#176b5b]"
//     >
//       {title}
//     </Link>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import {
//   getAllProducts,
//   getLowStockProducts,
//   getOutOfStockProducts,
//   getAgeingProducts,
//   type FurnitureProduct,
// } from "@/modules/furniture/services/productService";
// import {
//   getAllOrders,
//   type FurnitureOrder,
// } from "@/modules/furniture/services/orderService";
// import { getTodayEnquiries } from "@/modules/furniture/services/enquiryService";
// import {
//   getTodayExpenses,
//   getExpensesInRange,
// } from "@/modules/furniture/services/expenseService";

// type Sale = { month: string; sales: number };

// type AttentionItem = {
//   id: string;
//   title: string;
//   description: string;
//   type: "Ageing" | "Low Stock" | "Payment";
//   priority: "High" | "Medium";
//   href?: string;
// };

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function sumByAmount(items: { amount?: number }[]): number {
//   return items.reduce((sum: number, item) => sum + (item.amount || 0), 0);
// }

// function getPeriodRange(period: string): { start: Date; end: Date } {
//   const now = new Date();
//   const end = new Date(now);
//   end.setHours(23, 59, 59, 999);

//   const start = new Date(now);

//   if (period === "This Month") {
//     start.setDate(1);
//     start.setHours(0, 0, 0, 0);
//   } else if (period === "Last Month") {
//     start.setMonth(start.getMonth() - 1, 1);
//     start.setHours(0, 0, 0, 0);
//     end.setDate(0);
//     end.setHours(23, 59, 59, 999);
//   } else if (period === "Last 3 Months") {
//     start.setMonth(start.getMonth() - 2, 1);
//     start.setHours(0, 0, 0, 0);
//   } else {
//     // This Year
//     start.setMonth(0, 1);
//     start.setHours(0, 0, 0, 0);
//   }

//   return { start, end };
// }

// function isActiveOrder(o: FurnitureOrder) {
//   const s = String(o.status || o.orderStatus || "").toLowerCase();
//   return s !== "cancelled";
// }

// function orderRevenue(o: FurnitureOrder) {
//   return Number(o.total ?? o.amount ?? o.totalAmount ?? 0) || 0;
// }

// /** Resolve order date: createdAt → orderNo YYYYMMDD → other fields */
// function orderTimeMs(o: FurnitureOrder): number {
//   const ts = o.createdAt?.toMillis?.();
//   if (ts && ts > 0) return ts;

//   const no = String(
//     (o as { orderNo?: string; orderNumber?: string }).orderNo ||
//       (o as { orderNumber?: string }).orderNumber ||
//       o.id ||
//       ""
//   );
//   const m = no.match(/(\d{4})(\d{2})(\d{2})/);
//   if (m) {
//     const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 12, 0, 0);
//     if (!Number.isNaN(d.getTime())) return d.getTime();
//   }

//   const raw = String(
//     (o as { orderDate?: string }).orderDate || o.deliveryDate || ""
//   );
//   if (raw) {
//     const d = new Date(raw.includes("T") ? raw : `${raw}T12:00:00`);
//     if (!Number.isNaN(d.getTime())) return d.getTime();
//   }

//   return 0;
// }

// function isSameCalendarDay(ms: number, ref: Date = new Date()): boolean {
//   if (!ms) return false;
//   const d = new Date(ms);
//   return (
//     d.getFullYear() === ref.getFullYear() &&
//     d.getMonth() === ref.getMonth() &&
//     d.getDate() === ref.getDate()
//   );
// }

// /**
//  * Build chart buckets from period:
//  * - This Month / Last Month → one bar per day (or weekly if many days)
//  * - Last 3 Months / This Year → one bar per month
//  */
// function buildSalesTrend(
//   orders: FurnitureOrder[],
//   period: string
// ): Sale[] {
//   const { start, end } = getPeriodRange(period);
//   const startMs = start.getTime();
//   const endMs = end.getTime();

//   const inPeriod = orders.filter((o) => {
//     if (!isActiveOrder(o)) return false;
//     const t = orderTimeMs(o);
//     return t >= startMs && t <= endMs;
//   });

//   // Monthly buckets for multi-month periods
//   if (period === "Last 3 Months" || period === "This Year") {
//     const buckets = new Map<string, { label: string; sales: number; sort: number }>();

//     const cursor = new Date(start.getFullYear(), start.getMonth(), 1);
//     const endMonth = new Date(end.getFullYear(), end.getMonth(), 1);

//     while (cursor <= endMonth) {
//       const key = `${cursor.getFullYear()}-${cursor.getMonth()}`;
//       const label = cursor.toLocaleString("en-IN", { month: "short" });
//       buckets.set(key, {
//         label,
//         sales: 0,
//         sort: cursor.getTime(),
//       });
//       cursor.setMonth(cursor.getMonth() + 1);
//     }

//     inPeriod.forEach((o) => {
//       const t = orderTimeMs(o);
//       const d = new Date(t);
//       const key = `${d.getFullYear()}-${d.getMonth()}`;
//       const b = buckets.get(key);
//       if (b) b.sales += orderRevenue(o);
//     });

//     return Array.from(buckets.values())
//       .sort((a, b) => a.sort - b.sort)
//       .map((b) => ({ month: b.label, sales: b.sales }));
//   }

//   // This Month / Last Month → daily bars
//   const dayBuckets = new Map<string, { label: string; sales: number; sort: number }>();
//   const dayCursor = new Date(start);
//   dayCursor.setHours(0, 0, 0, 0);
//   const dayEnd = new Date(end);
//   dayEnd.setHours(0, 0, 0, 0);

//   while (dayCursor <= dayEnd) {
//     const key = dayCursor.toISOString().slice(0, 10);
//     const label = String(dayCursor.getDate());
//     dayBuckets.set(key, {
//       label,
//       sales: 0,
//       sort: dayCursor.getTime(),
//     });
//     dayCursor.setDate(dayCursor.getDate() + 1);
//   }

//   inPeriod.forEach((o) => {
//     const t = orderTimeMs(o);
//     const d = new Date(t);
//     d.setHours(12, 0, 0, 0);
//     const key = new Date(d.getFullYear(), d.getMonth(), d.getDate())
//       .toISOString()
//       .slice(0, 10);
//     // normalize key
//     const norm = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
//     const b = dayBuckets.get(norm) || dayBuckets.get(key);
//     if (b) b.sales += orderRevenue(o);
//   });

//   // If too many days (>16), collapse to weeks for readability
//   const days = Array.from(dayBuckets.values()).sort((a, b) => a.sort - b.sort);
//   if (days.length > 16) {
//     const weeks: Sale[] = [];
//     for (let i = 0; i < days.length; i += 7) {
//       const slice = days.slice(i, i + 7);
//       const sales = slice.reduce((s, d) => s + d.sales, 0);
//       const from = new Date(slice[0].sort).getDate();
//       const to = new Date(slice[slice.length - 1].sort).getDate();
//       weeks.push({ month: `${from}–${to}`, sales });
//     }
//     return weeks;
//   }

//   return days.map((d) => ({ month: d.label, sales: d.sales }));
// }

// function periodChartSubtitle(period: string): string {
//   switch (period) {
//     case "This Month":
//       return "Daily sales this month";
//     case "Last Month":
//       return "Daily sales last month";
//     case "Last 3 Months":
//       return "Monthly sales — last 3 months";
//     case "This Year":
//       return "Monthly sales — year to date";
//     default:
//       return "Sales for selected period";
//   }
// }

// export default function FurnitureDashboardPage() {
//   const router = useRouter();
//   const [period, setPeriod] = useState("This Month");
//   const [attentionFilter, setAttentionFilter] = useState("All");
//   const [loading, setLoading] = useState(true);

//   const [products, setProducts] = useState<FurnitureProduct[]>([]);
//   const [orders, setOrders] = useState<FurnitureOrder[]>([]);
//   const [todayEnquiriesCount, setTodayEnquiriesCount] = useState(0);
//   const [todayExpensesTotal, setTodayExpensesTotal] = useState(0);
//   const [periodExpensesTotal, setPeriodExpensesTotal] = useState(0);
//   const [lowStock, setLowStock] = useState<FurnitureProduct[]>([]);
//   const [outOfStock, setOutOfStock] = useState<FurnitureProduct[]>([]);
//   const [ageing, setAgeing] = useState<
//     (FurnitureProduct & { daysPublished: number })[]
//   >([]);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const { start, end } = getPeriodRange(period);

//         const [
//           allProducts,
//           allOrders,
//           tEnquiries,
//           tExpenses,
//           pExpenses,
//           low,
//           out,
//           age,
//         ] = await Promise.all([
//           getAllProducts(),
//           getAllOrders(),
//           getTodayEnquiries(),
//           getTodayExpenses(),
//           getExpensesInRange(start, end),
//           getLowStockProducts(),
//           getOutOfStockProducts(),
//           getAgeingProducts(10),
//         ]);

//         if (cancelled) return;

//         setProducts(allProducts);
//         setOrders(allOrders);
//         setTodayEnquiriesCount(tEnquiries.length);
//         setTodayExpensesTotal(sumByAmount(tExpenses));
//         setPeriodExpensesTotal(sumByAmount(pExpenses));
//         setLowStock(low);
//         setOutOfStock(out);
//         setAgeing(age);
//       } catch (err) {
//         console.error("Dashboard load error:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, [period]);

//   const totalProducts = products.length;
//   const inStock = products.filter((p) => (p.stock ?? 0) > 0).length;

//   const costByProductId = useMemo(() => {
//     const map = new Map<string, number>();
//     products.forEach((p) => {
//       const cost = Number(p.costPrice ?? 0) || 0;
//       map.set(p.id, cost);
//       if (p.sku) map.set(String(p.sku), cost);
//       if (p.code) map.set(String(p.code), cost);
//     });
//     return map;
//   }, [products]);

//   function orderProductCost(o: FurnitureOrder): number {
//     const items = o.items || [];
//     if (items.length > 0) {
//       return items.reduce((sum, item) => {
//         const qty = Number(item.qty ?? item.quantity ?? 1) || 1;
//         const pid = String(item.productId || "");
//         if (pid && costByProductId.has(pid)) {
//           return sum + (costByProductId.get(pid) || 0) * qty;
//         }
//         const iname = String(item.name || "").toLowerCase().trim();
//         if (iname) {
//           const match = products.find(
//             (p) =>
//               p.name?.toLowerCase().trim() === iname && Number(p.costPrice) > 0
//           );
//           if (match) return sum + Number(match.costPrice) * qty;
//         }
//         return sum;
//       }, 0);
//     }

//     const name = (o.product || o.productName || "").toLowerCase().trim();
//     if (!name) return 0;
//     const match = products.find(
//       (p) => p.name?.toLowerCase().trim() === name && Number(p.costPrice) > 0
//     );
//     if (!match) return 0;
//     return Number(match.costPrice) * (Number(o.quantity) || 1);
//   }

//   const periodOrders = useMemo(() => {
//     const { start, end } = getPeriodRange(period);
//     const startMs = start.getTime();
//     const endMs = end.getTime();
//     return orders.filter((o) => {
//       if (!isActiveOrder(o)) return false;
//       const t = orderTimeMs(o);
//       if (!t) return false;
//       return t >= startMs && t <= endMs;
//     });
//   }, [orders, period]);

//   const activeTodayOrders = useMemo(
//     () =>
//       orders.filter(
//         (o) => isActiveOrder(o) && isSameCalendarDay(orderTimeMs(o))
//       ),
//     [orders]
//   );

//   const periodPaidOrders = useMemo(
//     () =>
//       periodOrders.filter((o) => {
//         const ps = String(o.paymentStatus || "").toLowerCase();
//         return ps === "paid" || ps === "received";
//       }),
//     [periodOrders]
//   );

//   const totalSales = periodOrders.reduce((s, o) => s + orderRevenue(o), 0);
//   const todaySales = activeTodayOrders.reduce((s, o) => s + orderRevenue(o), 0);
//   const paidSales = periodPaidOrders.reduce((s, o) => s + orderRevenue(o), 0);

//   const pendingPayments = orders
//     .filter(
//       (o) =>
//         isActiveOrder(o) &&
//         (o.paymentStatus === "Pending" || o.paymentStatus === "Partial")
//     )
//     .reduce(
//       (s, o) => s + Math.max(0, orderRevenue(o) - Number(o.paid || 0)),
//       0
//     );

//   const productCost = periodOrders.reduce(
//     (sum, o) => sum + orderProductCost(o),
//     0
//   );
//   const paidProductCost = periodPaidOrders.reduce(
//     (sum, o) => sum + orderProductCost(o),
//     0
//   );
//   const todayProductCost = activeTodayOrders.reduce(
//     (sum, o) => sum + orderProductCost(o),
//     0
//   );

//   const estimatedProfit = totalSales - productCost - periodExpensesTotal;
//   const paidEstimatedProfit =
//     paidSales - paidProductCost - periodExpensesTotal;
//   const todayEstimatedProfit =
//     todaySales - todayProductCost - todayExpensesTotal;

//   // Sales Trend — driven by period filter
//   const salesData = useMemo(
//     () => buildSalesTrend(orders, period),
//     [orders, period]
//   );

//   const topProducts = useMemo(() => {
//     const map = new Map<
//       string,
//       { name: string; category: string; sales: number; revenue: number }
//     >();

//     periodOrders.forEach((o) => {
//       (o.items || []).forEach((item) => {
//         const key = item.productId || item.name || "unknown";
//         const existing = map.get(key) || {
//           name: item.name || "Item",
//           category: "",
//           sales: 0,
//           revenue: 0,
//         };
//         const qty = Number(item.qty ?? item.quantity ?? 1) || 1;
//         existing.sales += qty;
//         existing.revenue += qty * (Number(item.price) || 0);
//         map.set(key, existing);
//       });

//       if ((!o.items || o.items.length === 0) && (o.product || o.productName)) {
//         const name = o.product || o.productName || "Item";
//         const existing = map.get(name) || {
//           name,
//           category: o.category || "",
//           sales: 0,
//           revenue: 0,
//         };
//         existing.sales += Number(o.quantity) || 1;
//         existing.revenue += orderRevenue(o);
//         map.set(name, existing);
//       }
//     });

//     if (map.size === 0) {
//       return products.slice(0, 4).map((p) => ({
//         code: p.sku || p.id,
//         name: p.name,
//         category: p.category || "—",
//         sales: 0,
//         revenue: 0,
//       }));
//     }

//     return Array.from(map.entries())
//       .map(([code, v]) => ({ code, ...v }))
//       .sort((a, b) => b.revenue - a.revenue)
//       .slice(0, 4);
//   }, [periodOrders, products]);

//   // Sources for orders in selected period only
//   const sourceData = useMemo(() => {
//     const counts: Record<string, number> = {};
//     periodOrders.forEach((o) => {
//       const src = (o.source || "Other").trim() || "Other";
//       counts[src] = (counts[src] || 0) + 1;
//     });
//     const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
//     const preferred = [
//       "Website",
//       "Instagram",
//       "WhatsApp",
//       "Referral",
//       "Walk-in",
//       "Other",
//     ];
//     return preferred.map((name) => ({
//       name,
//       value: Math.round(((counts[name] || 0) / total) * 100),
//     }));
//   }, [periodOrders]);

//   const attentionItems: AttentionItem[] = useMemo(() => {
//     const items: AttentionItem[] = [];

//     ageing.slice(0, 5).forEach((p) => {
//       items.push({
//         id: p.id,
//         title: p.name,
//         description: `Published for ${p.daysPublished} days without a confirmed sale.`,
//         type: "Ageing",
//         priority: p.daysPublished >= 15 ? "High" : "Medium",
//         href: `/furniture/products/${p.id}`,
//       });
//     });

//     lowStock.slice(0, 3).forEach((p) => {
//       items.push({
//         id: p.id,
//         title: p.name,
//         description: `Only ${p.stock} units remaining. Minimum stock level is ${
//           p.minStock ?? p.reorderLevel ?? 5
//         }.`,
//         type: "Low Stock",
//         priority: (p.stock ?? 0) <= 2 ? "High" : "Medium",
//         href: `/furniture/products/${p.id}`,
//       });
//     });

//     orders
//       .filter(
//         (o) =>
//           isActiveOrder(o) &&
//           (o.paymentStatus === "Pending" || o.paymentStatus === "Partial")
//       )
//       .slice(0, 3)
//       .forEach((o) => {
//         const due = Math.max(0, orderRevenue(o) - Number(o.paid || 0));
//         items.push({
//           id: o.id,
//           title: o.customerName || o.orderNo || "Customer",
//           description: `Payment of ${formatCurrency(due)} is pending.`,
//           type: "Payment",
//           priority: "High",
//           href: `/furniture/orders`,
//         });
//       });

//     return items;
//   }, [ageing, lowStock, orders]);

//   const filteredAttention = useMemo(() => {
//     if (attentionFilter === "All") return attentionItems;
//     return attentionItems.filter((item) => item.type === attentionFilter);
//   }, [attentionItems, attentionFilter]);

//   if (loading) {
//     return (
//       <div className="flex min-h-[60vh] items-center justify-center">
//         <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#242424]">
//       <main className="mx-auto max-w-[1500px] px-5 py-7 lg:px-8">
//         <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
//           <div>
//             <p className="mb-1 text-xs font-medium text-[#999]">
//               Furniture / Dashboard
//             </p>
//             <h1 className="text-2xl font-semibold tracking-tight">
//               Furniture ERP Dashboard
//             </h1>
//             <p className="mt-1 text-sm text-[#777]">
//               Live overview of products, sales, customers, payments and business
//               performance.
//             </p>
//           </div>

//           <select
//             value={period}
//             onChange={(e) => setPeriod(e.target.value)}
//             className="h-10 rounded-lg border border-[#ddd] bg-white px-4 text-sm outline-none focus:border-[#176b5b]"
//           >
//             <option>This Month</option>
//             <option>Last Month</option>
//             <option>Last 3 Months</option>
//             <option>This Year</option>
//           </select>
//         </div>

//         {/* TODAY — always calendar today (not period) */}
//         <section className="mb-6">
//           <div className="mb-3">
//             <h2 className="text-sm font-semibold text-[#444]">Today</h2>
//           </div>
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-6">
//             <MetricCard
//               title="Today's Sales"
//               value={formatCurrency(todaySales)}
//               subtitle={`${activeTodayOrders.length} order${
//                 activeTodayOrders.length !== 1 ? "s" : ""
//               }`}
//             />
//             <MetricCard
//               title="New Enquiries"
//               value={String(todayEnquiriesCount)}
//               subtitle="Today"
//             />
//             <MetricCard
//               title="New Orders"
//               value={String(activeTodayOrders.length)}
//               subtitle="Excl. cancelled"
//             />
//             <MetricCard
//               title="Expenses"
//               value={formatCurrency(todayExpensesTotal)}
//               subtitle="Recorded today"
//             />
//             <MetricCard
//               title="Pending Payments"
//               value={formatCurrency(pendingPayments)}
//               subtitle="Outstanding balances"
//               warning
//             />
//             <MetricCard
//               title="Profit (Est.)"
//               value={formatCurrency(Math.max(0, todayEstimatedProfit))}
//               subtitle="Sales − cost − expenses"
//             />
//           </div>
//         </section>

//         <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <BigMetricCard
//             title="Total Products"
//             value={String(totalProducts)}
//             subtitle="Furniture products"
//             icon="P"
//           />
//           <BigMetricCard
//             title="In Stock"
//             value={String(inStock)}
//             subtitle="Available products"
//             icon="I"
//           />
//           <BigMetricCard
//             title="Low Stock"
//             value={String(lowStock.length)}
//             subtitle="Need attention"
//             icon="!"
//             warning
//           />
//           <BigMetricCard
//             title="Out of Stock"
//             value={String(outOfStock.length)}
//             subtitle="Currently unavailable"
//             icon="O"
//           />
//         </section>

//         {/* GRAPHS — all use period */}
//         <section className="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-3">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm xl:col-span-2">
//             <div className="mb-4 flex items-center justify-between gap-3">
//               <div>
//                 <h2 className="text-base font-semibold">Sales Trend</h2>
//                 <p className="mt-1 text-xs text-[#999]">
//                   {periodChartSubtitle(period)}
//                 </p>
//               </div>
//               <span className="shrink-0 rounded-full bg-[#eef7f4] px-3 py-1 text-xs font-semibold text-[#176b5b]">
//                 {period}
//               </span>
//             </div>
//             <SalesChart data={salesData} />
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <h2 className="text-base font-semibold">Business Performance</h2>
//             <p className="mt-1 text-xs text-[#999]">
//               Period:{" "}
//               <span className="font-semibold text-[#555]">{period}</span>
//               {" · "}
//               {periodOrders.length} active order
//               {periodOrders.length !== 1 ? "s" : ""}
//             </p>
//             <div className="mt-5 space-y-4">
//               <FinancialRow
//                 label="Total Sales"
//                 value={formatCurrency(totalSales)}
//               />
//               <FinancialRow
//                 label="Paid sales"
//                 value={formatCurrency(paidSales)}
//               />
//               <FinancialRow
//                 label="Product cost (COGS)"
//                 value={formatCurrency(productCost)}
//               />
//               <FinancialRow
//                 label="Expenses"
//                 value={formatCurrency(periodExpensesTotal)}
//               />
//               <div className="border-t border-[#eee] pt-4">
//                 <FinancialRow
//                   label="Est. profit"
//                   value={formatCurrency(Math.max(0, estimatedProfit))}
//                   strong
//                 />
//                 <p className="mt-1 text-[11px] text-[#aaa]">
//                   Paid-only margin:{" "}
//                   {formatCurrency(Math.max(0, paidEstimatedProfit))}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-3">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm xl:col-span-2">
//             <div className="mb-1 flex items-center justify-between">
//               <h2 className="text-base font-semibold">Top Products</h2>
//               <span className="rounded-full bg-[#eef7f4] px-3 py-1 text-xs font-semibold text-[#176b5b]">
//                 {period}
//               </span>
//             </div>
//             <p className="text-xs text-[#999]">By revenue in selected period</p>
//             <div className="mt-4 overflow-x-auto">
//               <table className="w-full min-w-[480px]">
//                 <thead>
//                   <tr className="border-b border-[#eee] text-left">
//                     <th className="pb-3 text-xs font-semibold text-[#999]">
//                       Product
//                     </th>
//                     <th className="pb-3 text-xs font-semibold text-[#999]">
//                       Category
//                     </th>
//                     <th className="pb-3 text-center text-xs font-semibold text-[#999]">
//                       Sales
//                     </th>
//                     <th className="pb-3 text-right text-xs font-semibold text-[#999]">
//                       Revenue
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {topProducts.map((product, index) => (
//                     <tr
//                       key={product.code}
//                       className="border-b border-[#f0efeb] last:border-0"
//                     >
//                       <td className="py-3">
//                         <div className="flex items-center gap-3">
//                           <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#f2f3ef] text-xs font-semibold text-[#176b5b]">
//                             {index + 1}
//                           </div>
//                           <div>
//                             <p className="text-sm font-medium">{product.name}</p>
//                             <p className="text-[11px] text-[#aaa]">
//                               {product.code}
//                             </p>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="py-3 text-sm text-[#666]">
//                         {product.category || "—"}
//                       </td>
//                       <td className="py-3 text-center text-sm font-medium">
//                         {product.sales}
//                       </td>
//                       <td className="py-3 text-right text-sm font-semibold">
//                         {formatCurrency(product.revenue)}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="mb-1 flex items-center justify-between">
//               <h2 className="text-base font-semibold">Order Sources</h2>
//               <span className="rounded-full bg-[#eef7f4] px-3 py-1 text-xs font-semibold text-[#176b5b]">
//                 {period}
//               </span>
//             </div>
//             <p className="text-xs text-[#999]">Share of orders in period</p>
//             <div className="mt-5 space-y-3">
//               {sourceData.map((s) => (
//                 <div key={s.name}>
//                   <div className="mb-1 flex justify-between text-xs">
//                     <span className="text-[#666]">{s.name}</span>
//                     <span className="font-semibold text-[#444]">{s.value}%</span>
//                   </div>
//                   <div className="h-2 overflow-hidden rounded-full bg-[#f0eee7]">
//                     <div
//                       className="h-full rounded-full bg-[#176b5b]"
//                       style={{ width: `${s.value}%` }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section className="mb-6 rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="flex flex-col gap-4 border-b border-[#eee] p-5 md:flex-row md:items-center md:justify-between">
//             <div>
//               <h2 className="text-base font-semibold">Attention Needed</h2>
//               <p className="mt-1 text-xs text-[#999]">
//                 Items that may require an immediate business action.
//               </p>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {["All", "Ageing", "Low Stock", "Payment"].map((filter) => (
//                 <button
//                   key={filter}
//                   type="button"
//                   onClick={() => setAttentionFilter(filter)}
//                   className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
//                     attentionFilter === filter
//                       ? "bg-[#176b5b] text-white"
//                       : "bg-[#f3f3f0] text-[#666] hover:bg-[#e9e9e5]"
//                   }`}
//                 >
//                   {filter}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="divide-y divide-[#eee]">
//             {filteredAttention.map((item) => (
//               <div
//                 key={`${item.type}-${item.id}`}
//                 className="flex flex-col gap-4 p-5 transition hover:bg-[#fafbf9] md:flex-row md:items-center md:justify-between"
//               >
//                 <div className="flex items-start gap-4">
//                   <AttentionIcon type={item.type} />
//                   <div>
//                     <div className="flex flex-wrap items-center gap-2">
//                       <h3 className="text-sm font-semibold">{item.title}</h3>
//                       <span
//                         className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
//                           item.priority === "High"
//                             ? "bg-red-50 text-red-600"
//                             : "bg-orange-50 text-orange-600"
//                         }`}
//                       >
//                         {item.priority}
//                       </span>
//                     </div>
//                     <p className="mt-1 text-xs text-[#777]">{item.description}</p>
//                     <p className="mt-1 text-[11px] text-[#aaa]">
//                       Reference: {item.id}
//                     </p>
//                   </div>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => item.href && router.push(item.href)}
//                   className="rounded-lg border border-[#ddd] px-4 py-2 text-xs font-semibold text-[#555] hover:border-[#176b5b] hover:text-[#176b5b]"
//                 >
//                   Open Record
//                 </button>
//               </div>
//             ))}

//             {filteredAttention.length === 0 && (
//               <div className="p-10 text-center">
//                 <p className="text-sm font-medium text-[#555]">
//                   No attention items
//                 </p>
//                 <p className="mt-1 text-xs text-[#999]">
//                   There are no items in this category.
//                 </p>
//               </div>
//             )}
//           </div>
//         </section>

//         <section>
//           <h2 className="mb-3 text-sm font-semibold text-[#444]">Quick access</h2>
//           <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
//             <QuickLink title="Orders" href="/furniture/orders" />
//             <QuickLink title="Products" href="/furniture/products" />
//             <QuickLink title="Enquiries" href="/furniture/enquiries" />
//             <QuickLink title="Payments" href="/furniture/payments" />
//             <QuickLink title="Inventory" href="/furniture/inventory" />
//             <QuickLink title="Reports" href="/furniture/reports" />
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// function MetricCard({
//   title,
//   value,
//   subtitle,
//   warning = false,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   warning?: boolean;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//       <p className="text-xs font-medium text-[#999]">{title}</p>
//       <p
//         className={`mt-2 text-2xl font-semibold ${
//           warning ? "text-[#b46b17]" : "text-[#222]"
//         }`}
//       >
//         {value}
//       </p>
//       <p className="mt-1 text-xs text-[#aaa]">{subtitle}</p>
//     </div>
//   );
// }

// function BigMetricCard({
//   title,
//   value,
//   subtitle,
//   icon,
//   warning = false,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   icon: string;
//   warning?: boolean;
// }) {
//   return (
//     <div className="flex items-center justify-between rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//       <div>
//         <p className="text-xs font-medium text-[#999]">{title}</p>
//         <p
//           className={`mt-2 text-2xl font-semibold ${
//             warning ? "text-[#b46b17]" : "text-[#222]"
//           }`}
//         >
//           {value}
//         </p>
//         <p className="mt-1 text-xs text-[#aaa]">{subtitle}</p>
//       </div>
//       <div
//         className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold ${
//           warning
//             ? "bg-[#fff4df] text-[#b46b17]"
//             : "bg-[#e8f2ee] text-[#176b5b]"
//         }`}
//       >
//         {icon}
//       </div>
//     </div>
//   );
// }

// function SalesChart({ data }: { data: Sale[] }) {
//   const max = Math.max(...data.map((item) => item.sales), 1);
//   return (
//     <div>
//       <div className="flex h-[250px] items-end gap-2 border-b border-l border-[#eee] px-2 pb-0 pt-5 sm:gap-3 sm:px-4">
//         {data.map((item, i) => {
//           const height = Math.max(8, (item.sales / max) * 190);
//           return (
//             <div
//               key={`${item.month}-${i}`}
//               className="flex h-full min-w-0 flex-1 flex-col items-center justify-end"
//             >
//               <div className="mb-1 max-w-full truncate text-[9px] text-[#888] sm:text-[10px]">
//                 {item.sales > 0 ? formatCurrency(item.sales) : ""}
//               </div>
//               <div
//                 className="w-full max-w-[40px] rounded-t-md bg-[#176b5b] transition hover:bg-[#125849]"
//                 style={{ height: `${height}px` }}
//                 title={`${item.month}: ${formatCurrency(item.sales)}`}
//               />
//               <div className="mt-2 max-w-full truncate text-[10px] text-[#888] sm:text-xs">
//                 {item.month}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// function FinancialRow({
//   label,
//   value,
//   strong = false,
// }: {
//   label: string;
//   value: string;
//   strong?: boolean;
// }) {
//   return (
//     <div className="flex items-center justify-between gap-4">
//       <span
//         className={`text-sm ${
//           strong ? "font-semibold text-[#333]" : "text-[#777]"
//         }`}
//       >
//         {label}
//       </span>
//       <span
//         className={`text-sm ${
//           strong ? "font-semibold text-[#176b5b]" : "font-medium text-[#444]"
//         }`}
//       >
//         {value}
//       </span>
//     </div>
//   );
// }

// function AttentionIcon({ type }: { type: AttentionItem["type"] }) {
//   let content = "!";
//   if (type === "Payment") content = "₹";
//   if (type === "Ageing") content = "⏱";
//   return (
//     <div
//       className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
//         type === "Payment"
//           ? "bg-[#fff4df] text-[#b46b17]"
//           : type === "Low Stock"
//             ? "bg-red-50 text-red-600"
//             : "bg-[#eef1ff] text-[#5a65a8]"
//       }`}
//     >
//       {content}
//     </div>
//   );
// }

// function QuickLink({ title, href }: { title: string; href: string }) {
//   return (
//     <Link
//       href={href}
//       className="rounded-xl border border-[#e4e2da] bg-white px-4 py-4 text-center text-sm font-medium text-[#555] shadow-sm transition hover:-translate-y-0.5 hover:border-[#176b5b] hover:text-[#176b5b]"
//     >
//       {title}
//     </Link>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import {
//   getAllProducts,
//   getLowStockProducts,
//   getOutOfStockProducts,
//   getAgeingProducts,
//   type FurnitureProduct,
// } from "@/modules/furniture/services/productService";
// import {
//   getAllOrders,
//   type FurnitureOrder,
// } from "@/modules/furniture/services/orderService";
// import { getTodayEnquiries } from "@/modules/furniture/services/enquiryService";
// import {
//   getTodayExpenses,
//   getExpensesInRange,
// } from "@/modules/furniture/services/expenseService";

// type Sale = { month: string; sales: number };

// type AttentionItem = {
//   id: string;
//   title: string;
//   description: string;
//   type: "Ageing" | "Low Stock" | "Payment";
//   priority: "High" | "Medium";
//   href?: string;
// };

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function sumByAmount(items: { amount?: number }[]): number {
//   return items.reduce((sum: number, item) => sum + (item.amount || 0), 0);
// }

// function getPeriodRange(period: string): { start: Date; end: Date } {
//   const now = new Date();
//   const end = new Date(now);
//   end.setHours(23, 59, 59, 999);

//   const start = new Date(now);

//   if (period === "This Month") {
//     start.setDate(1);
//     start.setHours(0, 0, 0, 0);
//   } else if (period === "Last Month") {
//     start.setMonth(start.getMonth() - 1, 1);
//     start.setHours(0, 0, 0, 0);
//     end.setDate(0);
//     end.setHours(23, 59, 59, 999);
//   } else if (period === "Last 3 Months") {
//     start.setMonth(start.getMonth() - 2, 1);
//     start.setHours(0, 0, 0, 0);
//   } else {
//     start.setMonth(0, 1);
//     start.setHours(0, 0, 0, 0);
//   }

//   return { start, end };
// }

// function isActiveOrder(o: FurnitureOrder) {
//   const s = String(o.status || o.orderStatus || "").toLowerCase();
//   return s !== "cancelled";
// }

// function orderRevenue(o: FurnitureOrder) {
//   return Number(o.total ?? o.amount ?? o.totalAmount ?? 0) || 0;
// }

// /** Local YYYY-MM-DD — avoids UTC day shift in IST */
// function localDateKey(d: Date): string {
//   const y = d.getFullYear();
//   const m = String(d.getMonth() + 1).padStart(2, "0");
//   const day = String(d.getDate()).padStart(2, "0");
//   return `${y}-${m}-${day}`;
// }

// /** Resolve order date: createdAt → orderNo YYYYMMDD → other fields */
// function orderTimeMs(o: FurnitureOrder): number {
//   const ts = o.createdAt?.toMillis?.();
//   if (ts && ts > 0) return ts;

//   const no = String(
//     (o as { orderNo?: string; orderNumber?: string }).orderNo ||
//       (o as { orderNumber?: string }).orderNumber ||
//       o.id ||
//       ""
//   );
//   const m = no.match(/(\d{4})(\d{2})(\d{2})/);
//   if (m) {
//     const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 12, 0, 0);
//     if (!Number.isNaN(d.getTime())) return d.getTime();
//   }

//   const raw = String(
//     (o as { orderDate?: string }).orderDate || o.deliveryDate || ""
//   );
//   if (raw) {
//     const d = new Date(raw.includes("T") ? raw : `${raw}T12:00:00`);
//     if (!Number.isNaN(d.getTime())) return d.getTime();
//   }

//   return 0;
// }

// function isSameCalendarDay(ms: number, ref: Date = new Date()): boolean {
//   if (!ms) return false;
//   const d = new Date(ms);
//   return (
//     d.getFullYear() === ref.getFullYear() &&
//     d.getMonth() === ref.getMonth() &&
//     d.getDate() === ref.getDate()
//   );
// }

// /**
//  * Sales trend buckets:
//  * - This Month / Last Month → daily (local dates)
//  * - Last 3 Months / This Year → monthly
//  */
// function buildSalesTrend(
//   orders: FurnitureOrder[],
//   period: string
// ): Sale[] {
//   const { start, end } = getPeriodRange(period);
//   const startMs = start.getTime();
//   const endMs = end.getTime();

//   const inPeriod = orders.filter((o) => {
//     if (!isActiveOrder(o)) return false;
//     const t = orderTimeMs(o);
//     return t >= startMs && t <= endMs;
//   });

//   if (period === "Last 3 Months" || period === "This Year") {
//     const buckets = new Map<
//       string,
//       { label: string; sales: number; sort: number }
//     >();

//     const cursor = new Date(start.getFullYear(), start.getMonth(), 1);
//     const endMonth = new Date(end.getFullYear(), end.getMonth(), 1);

//     while (cursor <= endMonth) {
//       const key = `${cursor.getFullYear()}-${cursor.getMonth()}`;
//       buckets.set(key, {
//         label: cursor.toLocaleString("en-IN", { month: "short" }),
//         sales: 0,
//         sort: cursor.getTime(),
//       });
//       cursor.setMonth(cursor.getMonth() + 1);
//     }

//     inPeriod.forEach((o) => {
//       const d = new Date(orderTimeMs(o));
//       const key = `${d.getFullYear()}-${d.getMonth()}`;
//       const b = buckets.get(key);
//       if (b) b.sales += orderRevenue(o);
//     });

//     return Array.from(buckets.values())
//       .sort((a, b) => a.sort - b.sort)
//       .map((b) => ({ month: b.label, sales: b.sales }));
//   }

//   // Daily bars — local keys only (fixes yesterday = 0 in IST)
//   const dayBuckets = new Map<
//     string,
//     { label: string; sales: number; sort: number }
//   >();

//   const dayCursor = new Date(
//     start.getFullYear(),
//     start.getMonth(),
//     start.getDate()
//   );
//   const dayEnd = new Date(end.getFullYear(), end.getMonth(), end.getDate());

//   while (dayCursor <= dayEnd) {
//     const key = localDateKey(dayCursor);
//     dayBuckets.set(key, {
//       label: String(dayCursor.getDate()),
//       sales: 0,
//       sort: dayCursor.getTime(),
//     });
//     dayCursor.setDate(dayCursor.getDate() + 1);
//   }

//   inPeriod.forEach((o) => {
//     const t = orderTimeMs(o);
//     if (!t) return;
//     const key = localDateKey(new Date(t));
//     const b = dayBuckets.get(key);
//     if (b) b.sales += orderRevenue(o);
//   });

//   const days = Array.from(dayBuckets.values()).sort((a, b) => a.sort - b.sort);

//   if (days.length > 16) {
//     const weeks: Sale[] = [];
//     for (let i = 0; i < days.length; i += 7) {
//       const slice = days.slice(i, i + 7);
//       const sales = slice.reduce((s, d) => s + d.sales, 0);
//       const from = new Date(slice[0].sort).getDate();
//       const to = new Date(slice[slice.length - 1].sort).getDate();
//       weeks.push({ month: `${from}–${to}`, sales });
//     }
//     return weeks;
//   }

//   return days.map((d) => ({ month: d.label, sales: d.sales }));
// }

// function periodChartSubtitle(period: string): string {
//   switch (period) {
//     case "This Month":
//       return "Daily sales this month";
//     case "Last Month":
//       return "Daily sales last month";
//     case "Last 3 Months":
//       return "Monthly sales — last 3 months";
//     case "This Year":
//       return "Monthly sales — year to date";
//     default:
//       return "Sales for selected period";
//   }
// }

// export default function FurnitureDashboardPage() {
//   const router = useRouter();
//   const [period, setPeriod] = useState("This Month");
//   const [attentionFilter, setAttentionFilter] = useState("All");
//   const [loading, setLoading] = useState(true);

//   const [products, setProducts] = useState<FurnitureProduct[]>([]);
//   const [orders, setOrders] = useState<FurnitureOrder[]>([]);
//   const [todayEnquiriesCount, setTodayEnquiriesCount] = useState(0);
//   const [todayExpensesTotal, setTodayExpensesTotal] = useState(0);
//   const [periodExpensesTotal, setPeriodExpensesTotal] = useState(0);
//   const [lowStock, setLowStock] = useState<FurnitureProduct[]>([]);
//   const [outOfStock, setOutOfStock] = useState<FurnitureProduct[]>([]);
//   const [ageing, setAgeing] = useState<
//     (FurnitureProduct & { daysPublished: number })[]
//   >([]);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const { start, end } = getPeriodRange(period);

//         const [
//           allProducts,
//           allOrders,
//           tEnquiries,
//           tExpenses,
//           pExpenses,
//           low,
//           out,
//           age,
//         ] = await Promise.all([
//           getAllProducts(),
//           getAllOrders(),
//           getTodayEnquiries(),
//           getTodayExpenses(),
//           getExpensesInRange(start, end),
//           getLowStockProducts(),
//           getOutOfStockProducts(),
//           getAgeingProducts(10),
//         ]);

//         if (cancelled) return;

//         setProducts(allProducts);
//         setOrders(allOrders);
//         setTodayEnquiriesCount(tEnquiries.length);
//         setTodayExpensesTotal(sumByAmount(tExpenses));
//         setPeriodExpensesTotal(sumByAmount(pExpenses));
//         setLowStock(low);
//         setOutOfStock(out);
//         setAgeing(age);
//       } catch (err) {
//         console.error("Dashboard load error:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, [period]);

//   const totalProducts = products.length;
//   const inStock = products.filter((p) => (p.stock ?? 0) > 0).length;

//   const costByProductId = useMemo(() => {
//     const map = new Map<string, number>();
//     products.forEach((p) => {
//       const cost = Number(p.costPrice ?? 0) || 0;
//       map.set(p.id, cost);
//       if (p.sku) map.set(String(p.sku), cost);
//       if (p.code) map.set(String(p.code), cost);
//     });
//     return map;
//   }, [products]);

//   function orderProductCost(o: FurnitureOrder): number {
//     const items = o.items || [];
//     if (items.length > 0) {
//       return items.reduce((sum, item) => {
//         const qty = Number(item.qty ?? item.quantity ?? 1) || 1;
//         const pid = String(item.productId || "");
//         if (pid && costByProductId.has(pid)) {
//           return sum + (costByProductId.get(pid) || 0) * qty;
//         }
//         const iname = String(item.name || "").toLowerCase().trim();
//         if (iname) {
//           const match = products.find(
//             (p) =>
//               p.name?.toLowerCase().trim() === iname && Number(p.costPrice) > 0
//           );
//           if (match) return sum + Number(match.costPrice) * qty;
//         }
//         return sum;
//       }, 0);
//     }

//     const name = (o.product || o.productName || "").toLowerCase().trim();
//     if (!name) return 0;
//     const match = products.find(
//       (p) => p.name?.toLowerCase().trim() === name && Number(p.costPrice) > 0
//     );
//     if (!match) return 0;
//     return Number(match.costPrice) * (Number(o.quantity) || 1);
//   }

//   const periodOrders = useMemo(() => {
//     const { start, end } = getPeriodRange(period);
//     const startMs = start.getTime();
//     const endMs = end.getTime();
//     return orders.filter((o) => {
//       if (!isActiveOrder(o)) return false;
//       const t = orderTimeMs(o);
//       if (!t) return false;
//       return t >= startMs && t <= endMs;
//     });
//   }, [orders, period]);

//   const activeTodayOrders = useMemo(
//     () =>
//       orders.filter(
//         (o) => isActiveOrder(o) && isSameCalendarDay(orderTimeMs(o))
//       ),
//     [orders]
//   );

//   const periodPaidOrders = useMemo(
//     () =>
//       periodOrders.filter((o) => {
//         const ps = String(o.paymentStatus || "").toLowerCase();
//         return ps === "paid" || ps === "received";
//       }),
//     [periodOrders]
//   );

//   const totalSales = periodOrders.reduce((s, o) => s + orderRevenue(o), 0);
//   const todaySales = activeTodayOrders.reduce((s, o) => s + orderRevenue(o), 0);
//   const paidSales = periodPaidOrders.reduce((s, o) => s + orderRevenue(o), 0);

//   const pendingPayments = orders
//     .filter(
//       (o) =>
//         isActiveOrder(o) &&
//         (o.paymentStatus === "Pending" || o.paymentStatus === "Partial")
//     )
//     .reduce(
//       (s, o) => s + Math.max(0, orderRevenue(o) - Number(o.paid || 0)),
//       0
//     );

//   const productCost = periodOrders.reduce(
//     (sum, o) => sum + orderProductCost(o),
//     0
//   );
//   const paidProductCost = periodPaidOrders.reduce(
//     (sum, o) => sum + orderProductCost(o),
//     0
//   );
//   const todayProductCost = activeTodayOrders.reduce(
//     (sum, o) => sum + orderProductCost(o),
//     0
//   );

//   const estimatedProfit = totalSales - productCost - periodExpensesTotal;
//   const paidEstimatedProfit =
//     paidSales - paidProductCost - periodExpensesTotal;
//   const todayEstimatedProfit =
//     todaySales - todayProductCost - todayExpensesTotal;

//   const salesData = useMemo(
//     () => buildSalesTrend(orders, period),
//     [orders, period]
//   );

//   const topProducts = useMemo(() => {
//     const map = new Map<
//       string,
//       { name: string; category: string; sales: number; revenue: number }
//     >();

//     periodOrders.forEach((o) => {
//       (o.items || []).forEach((item) => {
//         const key = item.productId || item.name || "unknown";
//         const existing = map.get(key) || {
//           name: item.name || "Item",
//           category: "",
//           sales: 0,
//           revenue: 0,
//         };
//         const qty = Number(item.qty ?? item.quantity ?? 1) || 1;
//         existing.sales += qty;
//         existing.revenue += qty * (Number(item.price) || 0);
//         map.set(key, existing);
//       });

//       if ((!o.items || o.items.length === 0) && (o.product || o.productName)) {
//         const name = o.product || o.productName || "Item";
//         const existing = map.get(name) || {
//           name,
//           category: o.category || "",
//           sales: 0,
//           revenue: 0,
//         };
//         existing.sales += Number(o.quantity) || 1;
//         existing.revenue += orderRevenue(o);
//         map.set(name, existing);
//       }
//     });

//     if (map.size === 0) {
//       return products.slice(0, 4).map((p) => ({
//         code: p.sku || p.id,
//         name: p.name,
//         category: p.category || "—",
//         sales: 0,
//         revenue: 0,
//       }));
//     }

//     return Array.from(map.entries())
//       .map(([code, v]) => ({ code, ...v }))
//       .sort((a, b) => b.revenue - a.revenue)
//       .slice(0, 4);
//   }, [periodOrders, products]);

//   const sourceData = useMemo(() => {
//     const counts: Record<string, number> = {};
//     periodOrders.forEach((o) => {
//       const src = (o.source || "Other").trim() || "Other";
//       counts[src] = (counts[src] || 0) + 1;
//     });
//     const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
//     const preferred = [
//       "Website",
//       "Instagram",
//       "WhatsApp",
//       "Referral",
//       "Walk-in",
//       "Other",
//     ];
//     return preferred.map((name) => ({
//       name,
//       value: Math.round(((counts[name] || 0) / total) * 100),
//     }));
//   }, [periodOrders]);

//   const attentionItems: AttentionItem[] = useMemo(() => {
//     const items: AttentionItem[] = [];

//     ageing.slice(0, 5).forEach((p) => {
//       items.push({
//         id: p.id,
//         title: p.name,
//         description: `Published for ${p.daysPublished} days without a confirmed sale.`,
//         type: "Ageing",
//         priority: p.daysPublished >= 15 ? "High" : "Medium",
//         href: `/furniture/products/${p.id}`,
//       });
//     });

//     lowStock.slice(0, 3).forEach((p) => {
//       items.push({
//         id: p.id,
//         title: p.name,
//         description: `Only ${p.stock} units remaining. Minimum stock level is ${
//           p.minStock ?? p.reorderLevel ?? 5
//         }.`,
//         type: "Low Stock",
//         priority: (p.stock ?? 0) <= 2 ? "High" : "Medium",
//         href: `/furniture/products/${p.id}`,
//       });
//     });

//     orders
//       .filter(
//         (o) =>
//           isActiveOrder(o) &&
//           (o.paymentStatus === "Pending" || o.paymentStatus === "Partial")
//       )
//       .slice(0, 3)
//       .forEach((o) => {
//         const due = Math.max(0, orderRevenue(o) - Number(o.paid || 0));
//         items.push({
//           id: o.id,
//           title: o.customerName || o.orderNo || "Customer",
//           description: `Payment of ${formatCurrency(due)} is pending.`,
//           type: "Payment",
//           priority: "High",
//           href: `/furniture/orders`,
//         });
//       });

//     return items;
//   }, [ageing, lowStock, orders]);

//   const filteredAttention = useMemo(() => {
//     if (attentionFilter === "All") return attentionItems;
//     return attentionItems.filter((item) => item.type === attentionFilter);
//   }, [attentionItems, attentionFilter]);

//   if (loading) {
//     return (
//       <div className="flex min-h-[60vh] items-center justify-center">
//         <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#242424]">
//       <main className="mx-auto max-w-[1500px] px-5 py-7 lg:px-8">
//         <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
//           <div>
//             <p className="mb-1 text-xs font-medium text-[#999]">
//               Furniture / Dashboard
//             </p>
//             <h1 className="text-2xl font-semibold tracking-tight">
//               Furniture ERP Dashboard
//             </h1>
//             <p className="mt-1 text-sm text-[#777]">
//               Live overview of products, sales, customers, payments and business
//               performance.
//             </p>
//           </div>

//           <select
//             value={period}
//             onChange={(e) => setPeriod(e.target.value)}
//             className="h-10 rounded-lg border border-[#ddd] bg-white px-4 text-sm outline-none focus:border-[#176b5b]"
//           >
//             <option>This Month</option>
//             <option>Last Month</option>
//             <option>Last 3 Months</option>
//             <option>This Year</option>
//           </select>
//         </div>

//         <section className="mb-6">
//           <div className="mb-3">
//             <h2 className="text-sm font-semibold text-[#444]">Today</h2>
//           </div>
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-6">
//             <MetricCard
//               title="Today's Sales"
//               value={formatCurrency(todaySales)}
//               subtitle={`${activeTodayOrders.length} order${
//                 activeTodayOrders.length !== 1 ? "s" : ""
//               }`}
//             />
//             <MetricCard
//               title="New Enquiries"
//               value={String(todayEnquiriesCount)}
//               subtitle="Today"
//             />
//             <MetricCard
//               title="New Orders"
//               value={String(activeTodayOrders.length)}
//               subtitle="Excl. cancelled"
//             />
//             <MetricCard
//               title="Expenses"
//               value={formatCurrency(todayExpensesTotal)}
//               subtitle="Recorded today"
//             />
//             <MetricCard
//               title="Pending Payments"
//               value={formatCurrency(pendingPayments)}
//               subtitle="Outstanding balances"
//               warning
//             />
//             <MetricCard
//               title="Profit (Est.)"
//               value={formatCurrency(Math.max(0, todayEstimatedProfit))}
//               subtitle="Sales − cost − expenses"
//             />
//           </div>
//         </section>

//         <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <BigMetricCard
//             title="Total Products"
//             value={String(totalProducts)}
//             subtitle="Furniture products"
//             icon="P"
//           />
//           <BigMetricCard
//             title="In Stock"
//             value={String(inStock)}
//             subtitle="Available products"
//             icon="I"
//           />
//           <BigMetricCard
//             title="Low Stock"
//             value={String(lowStock.length)}
//             subtitle="Need attention"
//             icon="!"
//             warning
//           />
//           <BigMetricCard
//             title="Out of Stock"
//             value={String(outOfStock.length)}
//             subtitle="Currently unavailable"
//             icon="O"
//           />
//         </section>

//         <section className="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-3">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm xl:col-span-2">
//             <div className="mb-4 flex items-center justify-between gap-3">
//               <div>
//                 <h2 className="text-base font-semibold">Sales Trend</h2>
//                 <p className="mt-1 text-xs text-[#999]">
//                   {periodChartSubtitle(period)}
//                 </p>
//               </div>
//               <span className="shrink-0 rounded-full bg-[#eef7f4] px-3 py-1 text-xs font-semibold text-[#176b5b]">
//                 {period}
//               </span>
//             </div>
//             <SalesChart data={salesData} />
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <h2 className="text-base font-semibold">Business Performance</h2>
//             <p className="mt-1 text-xs text-[#999]">
//               Period:{" "}
//               <span className="font-semibold text-[#555]">{period}</span>
//               {" · "}
//               {periodOrders.length} active order
//               {periodOrders.length !== 1 ? "s" : ""}
//             </p>
//             <div className="mt-5 space-y-4">
//               <FinancialRow
//                 label="Total Sales"
//                 value={formatCurrency(totalSales)}
//               />
//               <FinancialRow
//                 label="Paid sales"
//                 value={formatCurrency(paidSales)}
//               />
//               <FinancialRow
//                 label="Product cost (COGS)"
//                 value={formatCurrency(productCost)}
//               />
//               <FinancialRow
//                 label="Expenses"
//                 value={formatCurrency(periodExpensesTotal)}
//               />
//               <div className="border-t border-[#eee] pt-4">
//                 <FinancialRow
//                   label="Est. profit"
//                   value={formatCurrency(Math.max(0, estimatedProfit))}
//                   strong
//                 />
//                 <p className="mt-1 text-[11px] text-[#aaa]">
//                   Paid-only margin:{" "}
//                   {formatCurrency(Math.max(0, paidEstimatedProfit))}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-3">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm xl:col-span-2">
//             <div className="mb-1 flex items-center justify-between">
//               <h2 className="text-base font-semibold">Top Products</h2>
//               <span className="rounded-full bg-[#eef7f4] px-3 py-1 text-xs font-semibold text-[#176b5b]">
//                 {period}
//               </span>
//             </div>
//             <p className="text-xs text-[#999]">By revenue in selected period</p>
//             <div className="mt-4 overflow-x-auto">
//               <table className="w-full min-w-[480px]">
//                 <thead>
//                   <tr className="border-b border-[#eee] text-left">
//                     <th className="pb-3 text-xs font-semibold text-[#999]">
//                       Product
//                     </th>
//                     <th className="pb-3 text-xs font-semibold text-[#999]">
//                       Category
//                     </th>
//                     <th className="pb-3 text-center text-xs font-semibold text-[#999]">
//                       Sales
//                     </th>
//                     <th className="pb-3 text-right text-xs font-semibold text-[#999]">
//                       Revenue
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {topProducts.map((product, index) => (
//                     <tr
//                       key={product.code}
//                       className="border-b border-[#f0efeb] last:border-0"
//                     >
//                       <td className="py-3">
//                         <div className="flex items-center gap-3">
//                           <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#f2f3ef] text-xs font-semibold text-[#176b5b]">
//                             {index + 1}
//                           </div>
//                           <div>
//                             <p className="text-sm font-medium">{product.name}</p>
//                             <p className="text-[11px] text-[#aaa]">
//                               {product.code}
//                             </p>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="py-3 text-sm text-[#666]">
//                         {product.category || "—"}
//                       </td>
//                       <td className="py-3 text-center text-sm font-medium">
//                         {product.sales}
//                       </td>
//                       <td className="py-3 text-right text-sm font-semibold">
//                         {formatCurrency(product.revenue)}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="mb-1 flex items-center justify-between">
//               <h2 className="text-base font-semibold">Order Sources</h2>
//               <span className="rounded-full bg-[#eef7f4] px-3 py-1 text-xs font-semibold text-[#176b5b]">
//                 {period}
//               </span>
//             </div>
//             <p className="text-xs text-[#999]">Share of orders in period</p>
//             <div className="mt-5 space-y-3">
//               {sourceData.map((s) => (
//                 <div key={s.name}>
//                   <div className="mb-1 flex justify-between text-xs">
//                     <span className="text-[#666]">{s.name}</span>
//                     <span className="font-semibold text-[#444]">{s.value}%</span>
//                   </div>
//                   <div className="h-2 overflow-hidden rounded-full bg-[#f0eee7]">
//                     <div
//                       className="h-full rounded-full bg-[#176b5b]"
//                       style={{ width: `${s.value}%` }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section className="mb-6 rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="flex flex-col gap-4 border-b border-[#eee] p-5 md:flex-row md:items-center md:justify-between">
//             <div>
//               <h2 className="text-base font-semibold">Attention Needed</h2>
//               <p className="mt-1 text-xs text-[#999]">
//                 Items that may require an immediate business action.
//               </p>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {["All", "Ageing", "Low Stock", "Payment"].map((filter) => (
//                 <button
//                   key={filter}
//                   type="button"
//                   onClick={() => setAttentionFilter(filter)}
//                   className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
//                     attentionFilter === filter
//                       ? "bg-[#176b5b] text-white"
//                       : "bg-[#f3f3f0] text-[#666] hover:bg-[#e9e9e5]"
//                   }`}
//                 >
//                   {filter}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="divide-y divide-[#eee]">
//             {filteredAttention.map((item) => (
//               <div
//                 key={`${item.type}-${item.id}`}
//                 className="flex flex-col gap-4 p-5 transition hover:bg-[#fafbf9] md:flex-row md:items-center md:justify-between"
//               >
//                 <div className="flex items-start gap-4">
//                   <AttentionIcon type={item.type} />
//                   <div>
//                     <div className="flex flex-wrap items-center gap-2">
//                       <h3 className="text-sm font-semibold">{item.title}</h3>
//                       <span
//                         className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
//                           item.priority === "High"
//                             ? "bg-red-50 text-red-600"
//                             : "bg-orange-50 text-orange-600"
//                         }`}
//                       >
//                         {item.priority}
//                       </span>
//                     </div>
//                     <p className="mt-1 text-xs text-[#777]">{item.description}</p>
//                     <p className="mt-1 text-[11px] text-[#aaa]">
//                       Reference: {item.id}
//                     </p>
//                   </div>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => item.href && router.push(item.href)}
//                   className="rounded-lg border border-[#ddd] px-4 py-2 text-xs font-semibold text-[#555] hover:border-[#176b5b] hover:text-[#176b5b]"
//                 >
//                   Open Record
//                 </button>
//               </div>
//             ))}

//             {filteredAttention.length === 0 && (
//               <div className="p-10 text-center">
//                 <p className="text-sm font-medium text-[#555]">
//                   No attention items
//                 </p>
//                 <p className="mt-1 text-xs text-[#999]">
//                   There are no items in this category.
//                 </p>
//               </div>
//             )}
//           </div>
//         </section>

//         <section>
//           <h2 className="mb-3 text-sm font-semibold text-[#444]">Quick access</h2>
//           <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
//             <QuickLink title="Orders" href="/furniture/orders" />
//             <QuickLink title="Products" href="/furniture/products" />
//             <QuickLink title="Enquiries" href="/furniture/enquiries" />
//             <QuickLink title="Payments" href="/furniture/payments" />
//             <QuickLink title="Inventory" href="/furniture/inventory" />
//             <QuickLink title="Reports" href="/furniture/reports" />
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// function MetricCard({
//   title,
//   value,
//   subtitle,
//   warning = false,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   warning?: boolean;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//       <p className="text-xs font-medium text-[#999]">{title}</p>
//       <p
//         className={`mt-2 text-2xl font-semibold ${
//           warning ? "text-[#b46b17]" : "text-[#222]"
//         }`}
//       >
//         {value}
//       </p>
//       <p className="mt-1 text-xs text-[#aaa]">{subtitle}</p>
//     </div>
//   );
// }

// function BigMetricCard({
//   title,
//   value,
//   subtitle,
//   icon,
//   warning = false,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   icon: string;
//   warning?: boolean;
// }) {
//   return (
//     <div className="flex items-center justify-between rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//       <div>
//         <p className="text-xs font-medium text-[#999]">{title}</p>
//         <p
//           className={`mt-2 text-2xl font-semibold ${
//             warning ? "text-[#b46b17]" : "text-[#222]"
//           }`}
//         >
//           {value}
//         </p>
//         <p className="mt-1 text-xs text-[#aaa]">{subtitle}</p>
//       </div>
//       <div
//         className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold ${
//           warning
//             ? "bg-[#fff4df] text-[#b46b17]"
//             : "bg-[#e8f2ee] text-[#176b5b]"
//         }`}
//       >
//         {icon}
//       </div>
//     </div>
//   );
// }

// function SalesChart({ data }: { data: Sale[] }) {
//   const max = Math.max(...data.map((item) => item.sales), 1);
//   return (
//     <div>
//       <div className="flex h-[250px] items-end gap-2 border-b border-l border-[#eee] px-2 pb-0 pt-5 sm:gap-3 sm:px-4">
//         {data.map((item, i) => {
//           const height = Math.max(8, (item.sales / max) * 190);
//           return (
//             <div
//               key={`${item.month}-${i}`}
//               className="flex h-full min-w-0 flex-1 flex-col items-center justify-end"
//             >
//               <div className="mb-1 max-w-full truncate text-[9px] text-[#888] sm:text-[10px]">
//                 {item.sales > 0 ? formatCurrency(item.sales) : ""}
//               </div>
//               <div
//                 className="w-full max-w-[40px] rounded-t-md bg-[#176b5b] transition hover:bg-[#125849]"
//                 style={{ height: `${height}px` }}
//                 title={`${item.month}: ${formatCurrency(item.sales)}`}
//               />
//               <div className="mt-2 max-w-full truncate text-[10px] text-[#888] sm:text-xs">
//                 {item.month}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// function FinancialRow({
//   label,
//   value,
//   strong = false,
// }: {
//   label: string;
//   value: string;
//   strong?: boolean;
// }) {
//   return (
//     <div className="flex items-center justify-between gap-4">
//       <span
//         className={`text-sm ${
//           strong ? "font-semibold text-[#333]" : "text-[#777]"
//         }`}
//       >
//         {label}
//       </span>
//       <span
//         className={`text-sm ${
//           strong ? "font-semibold text-[#176b5b]" : "font-medium text-[#444]"
//         }`}
//       >
//         {value}
//       </span>
//     </div>
//   );
// }

// function AttentionIcon({ type }: { type: AttentionItem["type"] }) {
//   let content = "!";
//   if (type === "Payment") content = "₹";
//   if (type === "Ageing") content = "⏱";
//   return (
//     <div
//       className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
//         type === "Payment"
//           ? "bg-[#fff4df] text-[#b46b17]"
//           : type === "Low Stock"
//             ? "bg-red-50 text-red-600"
//             : "bg-[#eef1ff] text-[#5a65a8]"
//       }`}
//     >
//       {content}
//     </div>
//   );
// }

// function QuickLink({ title, href }: { title: string; href: string }) {
//   return (
//     <Link
//       href={href}
//       className="rounded-xl border border-[#e4e2da] bg-white px-4 py-4 text-center text-sm font-medium text-[#555] shadow-sm transition hover:-translate-y-0.5 hover:border-[#176b5b] hover:text-[#176b5b]"
//     >
//       {title}
//     </Link>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import {
//   getAllProducts,
//   getLowStockProducts,
//   getOutOfStockProducts,
//   getAgeingProducts,
//   type FurnitureProduct,
// } from "@/modules/furniture/services/productService";
// import {
//   getAllOrders,
//   type FurnitureOrder,
// } from "@/modules/furniture/services/orderService";
// import { getTodayEnquiries } from "@/modules/furniture/services/enquiryService";
// import {
//   getTodayExpenses,
//   getExpensesInRange,
// } from "@/modules/furniture/services/expenseService";

// type Sale = {
//   month: string;
//   sales: number;
//   /** local YYYY-MM-DD for daily, or YYYY-M for monthly */
//   key: string;
//   sort: number;
// };

// type AttentionItem = {
//   id: string;
//   title: string;
//   description: string;
//   type: "Ageing" | "Low Stock" | "Payment";
//   priority: "High" | "Medium";
//   href?: string;
// };

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function sumByAmount(items: { amount?: number }[]): number {
//   return items.reduce((sum: number, item) => sum + (item.amount || 0), 0);
// }

// function getPeriodRange(period: string): { start: Date; end: Date } {
//   const now = new Date();
//   const end = new Date(now);
//   end.setHours(23, 59, 59, 999);

//   const start = new Date(now);

//   if (period === "This Month") {
//     start.setDate(1);
//     start.setHours(0, 0, 0, 0);
//   } else if (period === "Last Month") {
//     start.setMonth(start.getMonth() - 1, 1);
//     start.setHours(0, 0, 0, 0);
//     end.setDate(0);
//     end.setHours(23, 59, 59, 999);
//   } else if (period === "Last 3 Months") {
//     start.setMonth(start.getMonth() - 2, 1);
//     start.setHours(0, 0, 0, 0);
//   } else {
//     start.setMonth(0, 1);
//     start.setHours(0, 0, 0, 0);
//   }

//   return { start, end };
// }

// function isActiveOrder(o: FurnitureOrder) {
//   const s = String(o.status || o.orderStatus || "").toLowerCase();
//   return s !== "cancelled";
// }

// function orderRevenue(o: FurnitureOrder) {
//   return Number(o.total ?? o.amount ?? o.totalAmount ?? 0) || 0;
// }

// function localDateKey(d: Date): string {
//   const y = d.getFullYear();
//   const m = String(d.getMonth() + 1).padStart(2, "0");
//   const day = String(d.getDate()).padStart(2, "0");
//   return `${y}-${m}-${day}`;
// }

// function orderTimeMs(o: FurnitureOrder): number {
//   const ts = o.createdAt?.toMillis?.();
//   if (ts && ts > 0) return ts;

//   const no = String(
//     (o as { orderNo?: string; orderNumber?: string }).orderNo ||
//       (o as { orderNumber?: string }).orderNumber ||
//       o.id ||
//       ""
//   );
//   const m = no.match(/(\d{4})(\d{2})(\d{2})/);
//   if (m) {
//     const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 12, 0, 0);
//     if (!Number.isNaN(d.getTime())) return d.getTime();
//   }

//   const raw = String(
//     (o as { orderDate?: string }).orderDate || o.deliveryDate || ""
//   );
//   if (raw) {
//     const d = new Date(raw.includes("T") ? raw : `${raw}T12:00:00`);
//     if (!Number.isNaN(d.getTime())) return d.getTime();
//   }

//   return 0;
// }

// function isSameCalendarDay(ms: number, ref: Date = new Date()): boolean {
//   if (!ms) return false;
//   const d = new Date(ms);
//   return (
//     d.getFullYear() === ref.getFullYear() &&
//     d.getMonth() === ref.getMonth() &&
//     d.getDate() === ref.getDate()
//   );
// }

// function buildSalesTrend(
//   orders: FurnitureOrder[],
//   period: string
// ): Sale[] {
//   const { start, end } = getPeriodRange(period);
//   const startMs = start.getTime();
//   const endMs = end.getTime();

//   const inPeriod = orders.filter((o) => {
//     if (!isActiveOrder(o)) return false;
//     const t = orderTimeMs(o);
//     return t >= startMs && t <= endMs;
//   });

//   if (period === "Last 3 Months" || period === "This Year") {
//     const buckets = new Map<
//       string,
//       { label: string; sales: number; sort: number; key: string }
//     >();

//     const cursor = new Date(start.getFullYear(), start.getMonth(), 1);
//     const endMonth = new Date(end.getFullYear(), end.getMonth(), 1);

//     while (cursor <= endMonth) {
//       const key = `${cursor.getFullYear()}-${cursor.getMonth()}`;
//       buckets.set(key, {
//         label: cursor.toLocaleString("en-IN", { month: "short" }),
//         sales: 0,
//         sort: cursor.getTime(),
//         key,
//       });
//       cursor.setMonth(cursor.getMonth() + 1);
//     }

//     inPeriod.forEach((o) => {
//       const d = new Date(orderTimeMs(o));
//       const key = `${d.getFullYear()}-${d.getMonth()}`;
//       const b = buckets.get(key);
//       if (b) b.sales += orderRevenue(o);
//     });

//     return Array.from(buckets.values())
//       .sort((a, b) => a.sort - b.sort)
//       .map((b) => ({
//         month: b.label,
//         sales: b.sales,
//         key: b.key,
//         sort: b.sort,
//       }));
//   }

//   const dayBuckets = new Map<
//     string,
//     { label: string; sales: number; sort: number; key: string }
//   >();

//   const dayCursor = new Date(
//     start.getFullYear(),
//     start.getMonth(),
//     start.getDate()
//   );
//   const dayEnd = new Date(end.getFullYear(), end.getMonth(), end.getDate());

//   while (dayCursor <= dayEnd) {
//     const key = localDateKey(dayCursor);
//     dayBuckets.set(key, {
//       label: String(dayCursor.getDate()),
//       sales: 0,
//       sort: dayCursor.getTime(),
//       key,
//     });
//     dayCursor.setDate(dayCursor.getDate() + 1);
//   }

//   inPeriod.forEach((o) => {
//     const t = orderTimeMs(o);
//     if (!t) return;
//     const key = localDateKey(new Date(t));
//     const b = dayBuckets.get(key);
//     if (b) b.sales += orderRevenue(o);
//   });

//   const days = Array.from(dayBuckets.values()).sort((a, b) => a.sort - b.sort);

//   if (days.length > 16) {
//     const weeks: Sale[] = [];
//     for (let i = 0; i < days.length; i += 7) {
//       const slice = days.slice(i, i + 7);
//       const sales = slice.reduce((s, d) => s + d.sales, 0);
//       const from = new Date(slice[0].sort).getDate();
//       const to = new Date(slice[slice.length - 1].sort).getDate();
//       weeks.push({
//         month: `${from}–${to}`,
//         sales,
//         key: `week-${slice[0].key}-${slice[slice.length - 1].key}`,
//         sort: slice[0].sort,
//       });
//     }
//     return weeks;
//   }

//   return days.map((d) => ({
//     month: d.label,
//     sales: d.sales,
//     key: d.key,
//     sort: d.sort,
//   }));
// }

// function periodChartSubtitle(period: string): string {
//   switch (period) {
//     case "This Month":
//       return "Daily sales this month · click a bar to filter";
//     case "Last Month":
//       return "Daily sales last month · click a bar to filter";
//     case "Last 3 Months":
//       return "Monthly sales · click a bar to filter";
//     case "This Year":
//       return "Monthly sales · click a bar to filter";
//     default:
//       return "Sales for selected period";
//   }
// }

// /** Orders matching a chart bar key */
// function ordersForBarKey(
//   orders: FurnitureOrder[],
//   key: string,
//   period: string
// ): FurnitureOrder[] {
//   if (!key) return [];

//   // Week range: week-YYYY-MM-DD-YYYY-MM-DD
//   if (key.startsWith("week-")) {
//     const parts = key.replace("week-", "").split("-");
//     // week-2026-10-01-2026-10-07 → need careful parse
//     const match = key.match(
//       /^week-(\d{4}-\d{2}-\d{2})-(\d{4}-\d{2}-\d{2})$/
//     );
//     if (match) {
//       const start = new Date(`${match[1]}T00:00:00`).getTime();
//       const end = new Date(`${match[2]}T23:59:59`).getTime();
//       return orders.filter((o) => {
//         if (!isActiveOrder(o)) return false;
//         const t = orderTimeMs(o);
//         return t >= start && t <= end;
//       });
//     }
//   }

//   // Monthly: "2026-9"
//   if (period === "Last 3 Months" || period === "This Year") {
//     const [y, m] = key.split("-").map(Number);
//     if (!Number.isNaN(y) && !Number.isNaN(m)) {
//       return orders.filter((o) => {
//         if (!isActiveOrder(o)) return false;
//         const d = new Date(orderTimeMs(o));
//         return d.getFullYear() === y && d.getMonth() === m;
//       });
//     }
//   }

//   // Daily: YYYY-MM-DD
//   if (/^\d{4}-\d{2}-\d{2}$/.test(key)) {
//     return orders.filter((o) => {
//       if (!isActiveOrder(o)) return false;
//       return localDateKey(new Date(orderTimeMs(o))) === key;
//     });
//   }

//   return [];
// }

// function formatBarLabel(key: string, label: string, period: string): string {
//   if (/^\d{4}-\d{2}-\d{2}$/.test(key)) {
//     const d = new Date(`${key}T12:00:00`);
//     return d.toLocaleDateString("en-IN", {
//       day: "numeric",
//       month: "short",
//       year: "numeric",
//     });
//   }
//   if (period === "Last 3 Months" || period === "This Year") {
//     return label;
//   }
//   return label;
// }

// export default function FurnitureDashboardPage() {
//   const router = useRouter();
//   const [period, setPeriod] = useState("This Month");
//   const [attentionFilter, setAttentionFilter] = useState("All");
//   const [loading, setLoading] = useState(true);
//   /** Selected chart bar key — null = full period */
//   const [selectedBarKey, setSelectedBarKey] = useState<string | null>(null);

//   const [products, setProducts] = useState<FurnitureProduct[]>([]);
//   const [orders, setOrders] = useState<FurnitureOrder[]>([]);
//   const [todayEnquiriesCount, setTodayEnquiriesCount] = useState(0);
//   const [todayExpensesTotal, setTodayExpensesTotal] = useState(0);
//   const [periodExpensesTotal, setPeriodExpensesTotal] = useState(0);
//   const [lowStock, setLowStock] = useState<FurnitureProduct[]>([]);
//   const [outOfStock, setOutOfStock] = useState<FurnitureProduct[]>([]);
//   const [ageing, setAgeing] = useState<
//     (FurnitureProduct & { daysPublished: number })[]
//   >([]);

//   // Reset bar selection when period changes
//   useEffect(() => {
//     setSelectedBarKey(null);
//   }, [period]);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const { start, end } = getPeriodRange(period);

//         const [
//           allProducts,
//           allOrders,
//           tEnquiries,
//           tExpenses,
//           pExpenses,
//           low,
//           out,
//           age,
//         ] = await Promise.all([
//           getAllProducts(),
//           getAllOrders(),
//           getTodayEnquiries(),
//           getTodayExpenses(),
//           getExpensesInRange(start, end),
//           getLowStockProducts(),
//           getOutOfStockProducts(),
//           getAgeingProducts(10),
//         ]);

//         if (cancelled) return;

//         setProducts(allProducts);
//         setOrders(allOrders);
//         setTodayEnquiriesCount(tEnquiries.length);
//         setTodayExpensesTotal(sumByAmount(tExpenses));
//         setPeriodExpensesTotal(sumByAmount(pExpenses));
//         setLowStock(low);
//         setOutOfStock(out);
//         setAgeing(age);
//       } catch (err) {
//         console.error("Dashboard load error:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, [period]);

//   const totalProducts = products.length;
//   const inStock = products.filter((p) => (p.stock ?? 0) > 0).length;

//   const costByProductId = useMemo(() => {
//     const map = new Map<string, number>();
//     products.forEach((p) => {
//       const cost = Number(p.costPrice ?? 0) || 0;
//       map.set(p.id, cost);
//       if (p.sku) map.set(String(p.sku), cost);
//       if (p.code) map.set(String(p.code), cost);
//     });
//     return map;
//   }, [products]);

//   function orderProductCost(o: FurnitureOrder): number {
//     const items = o.items || [];
//     if (items.length > 0) {
//       return items.reduce((sum, item) => {
//         const qty = Number(item.qty ?? item.quantity ?? 1) || 1;
//         const pid = String(item.productId || "");
//         if (pid && costByProductId.has(pid)) {
//           return sum + (costByProductId.get(pid) || 0) * qty;
//         }
//         const iname = String(item.name || "").toLowerCase().trim();
//         if (iname) {
//           const match = products.find(
//             (p) =>
//               p.name?.toLowerCase().trim() === iname && Number(p.costPrice) > 0
//           );
//           if (match) return sum + Number(match.costPrice) * qty;
//         }
//         return sum;
//       }, 0);
//     }

//     const name = (o.product || o.productName || "").toLowerCase().trim();
//     if (!name) return 0;
//     const match = products.find(
//       (p) => p.name?.toLowerCase().trim() === name && Number(p.costPrice) > 0
//     );
//     if (!match) return 0;
//     return Number(match.costPrice) * (Number(o.quantity) || 1);
//   }

//   const periodOrders = useMemo(() => {
//     const { start, end } = getPeriodRange(period);
//     const startMs = start.getTime();
//     const endMs = end.getTime();
//     return orders.filter((o) => {
//       if (!isActiveOrder(o)) return false;
//       const t = orderTimeMs(o);
//       if (!t) return false;
//       return t >= startMs && t <= endMs;
//     });
//   }, [orders, period]);

//   // Orders for selected bar (or full period)
//   const focusOrders = useMemo(() => {
//     if (!selectedBarKey) return periodOrders;
//     return ordersForBarKey(orders, selectedBarKey, period);
//   }, [orders, selectedBarKey, period, periodOrders]);

//   const activeTodayOrders = useMemo(
//     () =>
//       orders.filter(
//         (o) => isActiveOrder(o) && isSameCalendarDay(orderTimeMs(o))
//       ),
//     [orders]
//   );

//   const focusPaidOrders = useMemo(
//     () =>
//       focusOrders.filter((o) => {
//         const ps = String(o.paymentStatus || "").toLowerCase();
//         return ps === "paid" || ps === "received";
//       }),
//     [focusOrders]
//   );

//   const totalSales = focusOrders.reduce((s, o) => s + orderRevenue(o), 0);
//   const todaySales = activeTodayOrders.reduce((s, o) => s + orderRevenue(o), 0);
//   const paidSales = focusPaidOrders.reduce((s, o) => s + orderRevenue(o), 0);

//   const pendingPayments = orders
//     .filter(
//       (o) =>
//         isActiveOrder(o) &&
//         (o.paymentStatus === "Pending" || o.paymentStatus === "Partial")
//     )
//     .reduce(
//       (s, o) => s + Math.max(0, orderRevenue(o) - Number(o.paid || 0)),
//       0
//     );

//   const productCost = focusOrders.reduce(
//     (sum, o) => sum + orderProductCost(o),
//     0
//   );
//   const paidProductCost = focusPaidOrders.reduce(
//     (sum, o) => sum + orderProductCost(o),
//     0
//   );
//   const todayProductCost = activeTodayOrders.reduce(
//     (sum, o) => sum + orderProductCost(o),
//     0
//   );

//   // When a bar is selected, expenses stay period-level (or 0 for single day — keep period for simplicity)
//   const focusExpenses = selectedBarKey ? 0 : periodExpensesTotal;

//   const estimatedProfit = totalSales - productCost - focusExpenses;
//   const paidEstimatedProfit = paidSales - paidProductCost - focusExpenses;
//   const todayEstimatedProfit =
//     todaySales - todayProductCost - todayExpensesTotal;

//   const salesData = useMemo(
//     () => buildSalesTrend(orders, period),
//     [orders, period]
//   );

//   const selectedBarMeta = useMemo(() => {
//     if (!selectedBarKey) return null;
//     return salesData.find((s) => s.key === selectedBarKey) || null;
//   }, [selectedBarKey, salesData]);

//   const topProducts = useMemo(() => {
//     const map = new Map<
//       string,
//       { name: string; category: string; sales: number; revenue: number }
//     >();

//     focusOrders.forEach((o) => {
//       (o.items || []).forEach((item) => {
//         const key = item.productId || item.name || "unknown";
//         const existing = map.get(key) || {
//           name: item.name || "Item",
//           category: "",
//           sales: 0,
//           revenue: 0,
//         };
//         const qty = Number(item.qty ?? item.quantity ?? 1) || 1;
//         existing.sales += qty;
//         existing.revenue += qty * (Number(item.price) || 0);
//         map.set(key, existing);
//       });

//       if ((!o.items || o.items.length === 0) && (o.product || o.productName)) {
//         const name = o.product || o.productName || "Item";
//         const existing = map.get(name) || {
//           name,
//           category: o.category || "",
//           sales: 0,
//           revenue: 0,
//         };
//         existing.sales += Number(o.quantity) || 1;
//         existing.revenue += orderRevenue(o);
//         map.set(name, existing);
//       }
//     });

//     if (map.size === 0) {
//       return products.slice(0, 4).map((p) => ({
//         code: p.sku || p.id,
//         name: p.name,
//         category: p.category || "—",
//         sales: 0,
//         revenue: 0,
//       }));
//     }

//     return Array.from(map.entries())
//       .map(([code, v]) => ({ code, ...v }))
//       .sort((a, b) => b.revenue - a.revenue)
//       .slice(0, 4);
//   }, [focusOrders, products]);

//   const sourceData = useMemo(() => {
//     const counts: Record<string, number> = {};
//     focusOrders.forEach((o) => {
//       const src = (o.source || "Other").trim() || "Other";
//       counts[src] = (counts[src] || 0) + 1;
//     });
//     const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
//     const preferred = [
//       "Website",
//       "Instagram",
//       "WhatsApp",
//       "Referral",
//       "Walk-in",
//       "Other",
//     ];
//     return preferred.map((name) => ({
//       name,
//       value: Math.round(((counts[name] || 0) / total) * 100),
//     }));
//   }, [focusOrders]);

//   const attentionItems: AttentionItem[] = useMemo(() => {
//     const items: AttentionItem[] = [];

//     ageing.slice(0, 5).forEach((p) => {
//       items.push({
//         id: p.id,
//         title: p.name,
//         description: `Published for ${p.daysPublished} days without a confirmed sale.`,
//         type: "Ageing",
//         priority: p.daysPublished >= 15 ? "High" : "Medium",
//         href: `/furniture/products/${p.id}`,
//       });
//     });

//     lowStock.slice(0, 3).forEach((p) => {
//       items.push({
//         id: p.id,
//         title: p.name,
//         description: `Only ${p.stock} units remaining. Minimum stock level is ${
//           p.minStock ?? p.reorderLevel ?? 5
//         }.`,
//         type: "Low Stock",
//         priority: (p.stock ?? 0) <= 2 ? "High" : "Medium",
//         href: `/furniture/products/${p.id}`,
//       });
//     });

//     orders
//       .filter(
//         (o) =>
//           isActiveOrder(o) &&
//           (o.paymentStatus === "Pending" || o.paymentStatus === "Partial")
//       )
//       .slice(0, 3)
//       .forEach((o) => {
//         const due = Math.max(0, orderRevenue(o) - Number(o.paid || 0));
//         items.push({
//           id: o.id,
//           title: o.customerName || o.orderNo || "Customer",
//           description: `Payment of ${formatCurrency(due)} is pending.`,
//           type: "Payment",
//           priority: "High",
//           href: `/furniture/orders`,
//         });
//       });

//     return items;
//   }, [ageing, lowStock, orders]);

//   const filteredAttention = useMemo(() => {
//     if (attentionFilter === "All") return attentionItems;
//     return attentionItems.filter((item) => item.type === attentionFilter);
//   }, [attentionItems, attentionFilter]);

//   function handleBarClick(key: string) {
//     setSelectedBarKey((prev) => (prev === key ? null : key));
//   }

//   if (loading) {
//     return (
//       <div className="flex min-h-[60vh] items-center justify-center">
//         <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//       </div>
//     );
//   }

//   const performanceLabel = selectedBarMeta
//     ? formatBarLabel(selectedBarMeta.key, selectedBarMeta.month, period)
//     : period;

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#242424]">
//       <main className="mx-auto max-w-[1500px] px-5 py-7 lg:px-8">
//         <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
//           <div>
//             <p className="mb-1 text-xs font-medium text-[#999]">
//               Furniture / Dashboard
//             </p>
//             <h1 className="text-2xl font-semibold tracking-tight">
//               Furniture ERP Dashboard
//             </h1>
//             <p className="mt-1 text-sm text-[#777]">
//               Live overview of products, sales, customers, payments and business
//               performance.
//             </p>
//           </div>

//           <select
//             value={period}
//             onChange={(e) => setPeriod(e.target.value)}
//             className="h-10 rounded-lg border border-[#ddd] bg-white px-4 text-sm outline-none focus:border-[#176b5b]"
//           >
//             <option>This Month</option>
//             <option>Last Month</option>
//             <option>Last 3 Months</option>
//             <option>This Year</option>
//           </select>
//         </div>

//         {/* TODAY — always calendar today */}
//         <section className="mb-6">
//           <div className="mb-3">
//             <h2 className="text-sm font-semibold text-[#444]">Today</h2>
//           </div>
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-6">
//             <MetricCard
//               title="Today's Sales"
//               value={formatCurrency(todaySales)}
//               subtitle={`${activeTodayOrders.length} order${
//                 activeTodayOrders.length !== 1 ? "s" : ""
//               }`}
//             />
//             <MetricCard
//               title="New Enquiries"
//               value={String(todayEnquiriesCount)}
//               subtitle="Today"
//             />
//             <MetricCard
//               title="New Orders"
//               value={String(activeTodayOrders.length)}
//               subtitle="Excl. cancelled"
//             />
//             <MetricCard
//               title="Expenses"
//               value={formatCurrency(todayExpensesTotal)}
//               subtitle="Recorded today"
//             />
//             <MetricCard
//               title="Pending Payments"
//               value={formatCurrency(pendingPayments)}
//               subtitle="Outstanding balances"
//               warning
//             />
//             <MetricCard
//               title="Profit (Est.)"
//               value={formatCurrency(Math.max(0, todayEstimatedProfit))}
//               subtitle="Sales − cost − expenses"
//             />
//           </div>
//         </section>

//         <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <BigMetricCard
//             title="Total Products"
//             value={String(totalProducts)}
//             subtitle="Furniture products"
//             icon="P"
//           />
//           <BigMetricCard
//             title="In Stock"
//             value={String(inStock)}
//             subtitle="Available products"
//             icon="I"
//           />
//           <BigMetricCard
//             title="Low Stock"
//             value={String(lowStock.length)}
//             subtitle="Need attention"
//             icon="!"
//             warning
//           />
//           <BigMetricCard
//             title="Out of Stock"
//             value={String(outOfStock.length)}
//             subtitle="Currently unavailable"
//             icon="O"
//           />
//         </section>

//         {/* Focus KPI strip when a bar is selected */}
//         {selectedBarKey && (
//           <section className="mb-6 rounded-xl border border-[#cfe4dd] bg-[#eef7f4] px-5 py-4">
//             <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
//               <div>
//                 <p className="text-xs font-semibold uppercase tracking-wide text-[#176b5b]">
//                   Filtered view
//                 </p>
//                 <p className="mt-1 text-sm text-[#333]">
//                   Showing data for{" "}
//                   <span className="font-semibold">{performanceLabel}</span>
//                   {" · "}
//                   {focusOrders.length} order
//                   {focusOrders.length !== 1 ? "s" : ""}
//                   {" · "}
//                   {formatCurrency(totalSales)} sales
//                 </p>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setSelectedBarKey(null)}
//                 className="rounded-lg border border-[#176b5b]/30 bg-white px-4 py-2 text-xs font-semibold text-[#176b5b] hover:bg-[#e8f2ee]"
//               >
//                 Clear filter
//               </button>
//             </div>
//             <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
//               <MetricCard
//                 title="Sales"
//                 value={formatCurrency(totalSales)}
//                 subtitle={`${focusOrders.length} orders`}
//               />
//               <MetricCard
//                 title="Paid sales"
//                 value={formatCurrency(paidSales)}
//                 subtitle={`${focusPaidOrders.length} paid`}
//               />
//               <MetricCard
//                 title="COGS"
//                 value={formatCurrency(productCost)}
//                 subtitle="Product cost"
//               />
//               <MetricCard
//                 title="Est. profit"
//                 value={formatCurrency(Math.max(0, estimatedProfit))}
//                 subtitle="Sales − cost"
//               />
//             </div>
//           </section>
//         )}

//         <section className="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-3">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm xl:col-span-2">
//             <div className="mb-4 flex items-center justify-between gap-3">
//               <div>
//                 <h2 className="text-base font-semibold">Sales Trend</h2>
//                 <p className="mt-1 text-xs text-[#999]">
//                   {periodChartSubtitle(period)}
//                 </p>
//               </div>
//               <span className="shrink-0 rounded-full bg-[#eef7f4] px-3 py-1 text-xs font-semibold text-[#176b5b]">
//                 {period}
//               </span>
//             </div>
//             <SalesChart
//               data={salesData}
//               selectedKey={selectedBarKey}
//               onBarClick={handleBarClick}
//             />
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <h2 className="text-base font-semibold">Business Performance</h2>
//             <p className="mt-1 text-xs text-[#999]">
//               {selectedBarKey ? "Bar filter: " : "Period: "}
//               <span className="font-semibold text-[#555]">
//                 {performanceLabel}
//               </span>
//               {" · "}
//               {focusOrders.length} active order
//               {focusOrders.length !== 1 ? "s" : ""}
//             </p>
//             <div className="mt-5 space-y-4">
//               <FinancialRow
//                 label="Total Sales"
//                 value={formatCurrency(totalSales)}
//               />
//               <FinancialRow
//                 label="Paid sales"
//                 value={formatCurrency(paidSales)}
//               />
//               <FinancialRow
//                 label="Product cost (COGS)"
//                 value={formatCurrency(productCost)}
//               />
//               <FinancialRow
//                 label="Expenses"
//                 value={formatCurrency(focusExpenses)}
//               />
//               <div className="border-t border-[#eee] pt-4">
//                 <FinancialRow
//                   label="Est. profit"
//                   value={formatCurrency(Math.max(0, estimatedProfit))}
//                   strong
//                 />
//                 <p className="mt-1 text-[11px] text-[#aaa]">
//                   Paid-only margin:{" "}
//                   {formatCurrency(Math.max(0, paidEstimatedProfit))}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-3">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm xl:col-span-2">
//             <div className="mb-1 flex items-center justify-between">
//               <h2 className="text-base font-semibold">Top Products</h2>
//               <span className="rounded-full bg-[#eef7f4] px-3 py-1 text-xs font-semibold text-[#176b5b]">
//                 {performanceLabel}
//               </span>
//             </div>
//             <p className="text-xs text-[#999]">By revenue in selected view</p>
//             <div className="mt-4 overflow-x-auto">
//               <table className="w-full min-w-[480px]">
//                 <thead>
//                   <tr className="border-b border-[#eee] text-left">
//                     <th className="pb-3 text-xs font-semibold text-[#999]">
//                       Product
//                     </th>
//                     <th className="pb-3 text-xs font-semibold text-[#999]">
//                       Category
//                     </th>
//                     <th className="pb-3 text-center text-xs font-semibold text-[#999]">
//                       Sales
//                     </th>
//                     <th className="pb-3 text-right text-xs font-semibold text-[#999]">
//                       Revenue
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {topProducts.map((product, index) => (
//                     <tr
//                       key={product.code}
//                       className="border-b border-[#f0efeb] last:border-0"
//                     >
//                       <td className="py-3">
//                         <div className="flex items-center gap-3">
//                           <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#f2f3ef] text-xs font-semibold text-[#176b5b]">
//                             {index + 1}
//                           </div>
//                           <div>
//                             <p className="text-sm font-medium">{product.name}</p>
//                             <p className="text-[11px] text-[#aaa]">
//                               {product.code}
//                             </p>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="py-3 text-sm text-[#666]">
//                         {product.category || "—"}
//                       </td>
//                       <td className="py-3 text-center text-sm font-medium">
//                         {product.sales}
//                       </td>
//                       <td className="py-3 text-right text-sm font-semibold">
//                         {formatCurrency(product.revenue)}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="mb-1 flex items-center justify-between">
//               <h2 className="text-base font-semibold">Order Sources</h2>
//               <span className="rounded-full bg-[#eef7f4] px-3 py-1 text-xs font-semibold text-[#176b5b]">
//                 {performanceLabel}
//               </span>
//             </div>
//             <p className="text-xs text-[#999]">Share of orders in view</p>
//             <div className="mt-5 space-y-3">
//               {sourceData.map((s) => (
//                 <div key={s.name}>
//                   <div className="mb-1 flex justify-between text-xs">
//                     <span className="text-[#666]">{s.name}</span>
//                     <span className="font-semibold text-[#444]">{s.value}%</span>
//                   </div>
//                   <div className="h-2 overflow-hidden rounded-full bg-[#f0eee7]">
//                     <div
//                       className="h-full rounded-full bg-[#176b5b]"
//                       style={{ width: `${s.value}%` }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section className="mb-6 rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="flex flex-col gap-4 border-b border-[#eee] p-5 md:flex-row md:items-center md:justify-between">
//             <div>
//               <h2 className="text-base font-semibold">Attention Needed</h2>
//               <p className="mt-1 text-xs text-[#999]">
//                 Items that may require an immediate business action.
//               </p>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {["All", "Ageing", "Low Stock", "Payment"].map((filter) => (
//                 <button
//                   key={filter}
//                   type="button"
//                   onClick={() => setAttentionFilter(filter)}
//                   className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
//                     attentionFilter === filter
//                       ? "bg-[#176b5b] text-white"
//                       : "bg-[#f3f3f0] text-[#666] hover:bg-[#e9e9e5]"
//                   }`}
//                 >
//                   {filter}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="divide-y divide-[#eee]">
//             {filteredAttention.map((item) => (
//               <div
//                 key={`${item.type}-${item.id}`}
//                 className="flex flex-col gap-4 p-5 transition hover:bg-[#fafbf9] md:flex-row md:items-center md:justify-between"
//               >
//                 <div className="flex items-start gap-4">
//                   <AttentionIcon type={item.type} />
//                   <div>
//                     <div className="flex flex-wrap items-center gap-2">
//                       <h3 className="text-sm font-semibold">{item.title}</h3>
//                       <span
//                         className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
//                           item.priority === "High"
//                             ? "bg-red-50 text-red-600"
//                             : "bg-orange-50 text-orange-600"
//                         }`}
//                       >
//                         {item.priority}
//                       </span>
//                     </div>
//                     <p className="mt-1 text-xs text-[#777]">{item.description}</p>
//                     <p className="mt-1 text-[11px] text-[#aaa]">
//                       Reference: {item.id}
//                     </p>
//                   </div>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => item.href && router.push(item.href)}
//                   className="rounded-lg border border-[#ddd] px-4 py-2 text-xs font-semibold text-[#555] hover:border-[#176b5b] hover:text-[#176b5b]"
//                 >
//                   Open Record
//                 </button>
//               </div>
//             ))}

//             {filteredAttention.length === 0 && (
//               <div className="p-10 text-center">
//                 <p className="text-sm font-medium text-[#555]">
//                   No attention items
//                 </p>
//                 <p className="mt-1 text-xs text-[#999]">
//                   There are no items in this category.
//                 </p>
//               </div>
//             )}
//           </div>
//         </section>

//         <section>
//           <h2 className="mb-3 text-sm font-semibold text-[#444]">Quick access</h2>
//           <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
//             <QuickLink title="Orders" href="/furniture/orders" />
//             <QuickLink title="Products" href="/furniture/products" />
//             <QuickLink title="Enquiries" href="/furniture/enquiries" />
//             <QuickLink title="Payments" href="/furniture/payments" />
//             <QuickLink title="Inventory" href="/furniture/inventory" />
//             <QuickLink title="Reports" href="/furniture/reports" />
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// function MetricCard({
//   title,
//   value,
//   subtitle,
//   warning = false,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   warning?: boolean;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//       <p className="text-xs font-medium text-[#999]">{title}</p>
//       <p
//         className={`mt-2 text-2xl font-semibold ${
//           warning ? "text-[#b46b17]" : "text-[#222]"
//         }`}
//       >
//         {value}
//       </p>
//       <p className="mt-1 text-xs text-[#aaa]">{subtitle}</p>
//     </div>
//   );
// }

// function BigMetricCard({
//   title,
//   value,
//   subtitle,
//   icon,
//   warning = false,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   icon: string;
//   warning?: boolean;
// }) {
//   return (
//     <div className="flex items-center justify-between rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//       <div>
//         <p className="text-xs font-medium text-[#999]">{title}</p>
//         <p
//           className={`mt-2 text-2xl font-semibold ${
//             warning ? "text-[#b46b17]" : "text-[#222]"
//           }`}
//         >
//           {value}
//         </p>
//         <p className="mt-1 text-xs text-[#aaa]">{subtitle}</p>
//       </div>
//       <div
//         className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold ${
//           warning
//             ? "bg-[#fff4df] text-[#b46b17]"
//             : "bg-[#e8f2ee] text-[#176b5b]"
//         }`}
//       >
//         {icon}
//       </div>
//     </div>
//   );
// }

// function SalesChart({
//   data,
//   selectedKey,
//   onBarClick,
// }: {
//   data: Sale[];
//   selectedKey: string | null;
//   onBarClick: (key: string) => void;
// }) {
//   const max = Math.max(...data.map((item) => item.sales), 1);
//   return (
//     <div>
//       <div className="flex h-[250px] items-end gap-2 border-b border-l border-[#eee] px-2 pb-0 pt-5 sm:gap-3 sm:px-4">
//         {data.map((item, i) => {
//           const height = Math.max(8, (item.sales / max) * 190);
//           const selected = selectedKey === item.key;
//           return (
//             <button
//               key={`${item.key}-${i}`}
//               type="button"
//               onClick={() => onBarClick(item.key)}
//               className="flex h-full min-w-0 flex-1 flex-col items-center justify-end rounded-t-md outline-none transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#176b5b]"
//               title={`${item.month}: ${formatCurrency(item.sales)} — click to filter`}
//             >
//               <div className="mb-1 max-w-full truncate text-[9px] text-[#888] sm:text-[10px]">
//                 {item.sales > 0 ? formatCurrency(item.sales) : ""}
//               </div>
//               <div
//                 className={`w-full max-w-[40px] rounded-t-md transition ${
//                   selected
//                     ? "bg-[#0f4f42] ring-2 ring-[#176b5b] ring-offset-1"
//                     : "bg-[#176b5b] hover:bg-[#125849]"
//                 }`}
//                 style={{ height: `${height}px` }}
//               />
//               <div
//                 className={`mt-2 max-w-full truncate text-[10px] sm:text-xs ${
//                   selected
//                     ? "font-semibold text-[#176b5b]"
//                     : "text-[#888]"
//                 }`}
//               >
//                 {item.month}
//               </div>
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// function FinancialRow({
//   label,
//   value,
//   strong = false,
// }: {
//   label: string;
//   value: string;
//   strong?: boolean;
// }) {
//   return (
//     <div className="flex items-center justify-between gap-4">
//       <span
//         className={`text-sm ${
//           strong ? "font-semibold text-[#333]" : "text-[#777]"
//         }`}
//       >
//         {label}
//       </span>
//       <span
//         className={`text-sm ${
//           strong ? "font-semibold text-[#176b5b]" : "font-medium text-[#444]"
//         }`}
//       >
//         {value}
//       </span>
//     </div>
//   );
// }

// function AttentionIcon({ type }: { type: AttentionItem["type"] }) {
//   let content = "!";
//   if (type === "Payment") content = "₹";
//   if (type === "Ageing") content = "⏱";
//   return (
//     <div
//       className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
//         type === "Payment"
//           ? "bg-[#fff4df] text-[#b46b17]"
//           : type === "Low Stock"
//             ? "bg-red-50 text-red-600"
//             : "bg-[#eef1ff] text-[#5a65a8]"
//       }`}
//     >
//       {content}
//     </div>
//   );
// }

// function QuickLink({ title, href }: { title: string; href: string }) {
//   return (
//     <Link
//       href={href}
//       className="rounded-xl border border-[#e4e2da] bg-white px-4 py-4 text-center text-sm font-medium text-[#555] shadow-sm transition hover:-translate-y-0.5 hover:border-[#176b5b] hover:text-[#176b5b]"
//     >
//       {title}
//     </Link>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import {
//   getAllProducts,
//   getLowStockProducts,
//   getOutOfStockProducts,
//   getAgeingProducts,
//   type FurnitureProduct,
// } from "@/modules/furniture/services/productService";
// import {
//   getAllOrders,
//   type FurnitureOrder,
// } from "@/modules/furniture/services/orderService";
// import { getTodayEnquiries } from "@/modules/furniture/services/enquiryService";
// import {
//   getTodayExpenses,
//   getExpensesInRange,
// } from "@/modules/furniture/services/expenseService";

// type Sale = {
//   month: string;
//   sales: number;
//   key: string;
//   sort: number;
// };

// type AttentionItem = {
//   id: string;
//   title: string;
//   description: string;
//   type: "Ageing" | "Low Stock" | "Payment";
//   priority: "High" | "Medium";
//   href?: string;
// };

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function sumByAmount(items: { amount?: number }[]): number {
//   return items.reduce((sum: number, item) => sum + (item.amount || 0), 0);
// }

// function getPeriodRange(period: string): { start: Date; end: Date } {
//   const now = new Date();
//   const end = new Date(now);
//   end.setHours(23, 59, 59, 999);

//   const start = new Date(now);

//   if (period === "This Month") {
//     start.setDate(1);
//     start.setHours(0, 0, 0, 0);
//   } else if (period === "Last Month") {
//     start.setMonth(start.getMonth() - 1, 1);
//     start.setHours(0, 0, 0, 0);
//     end.setDate(0);
//     end.setHours(23, 59, 59, 999);
//   } else if (period === "Last 3 Months") {
//     start.setMonth(start.getMonth() - 2, 1);
//     start.setHours(0, 0, 0, 0);
//   } else {
//     start.setMonth(0, 1);
//     start.setHours(0, 0, 0, 0);
//   }

//   return { start, end };
// }

// function isActiveOrder(o: FurnitureOrder) {
//   const s = String(o.status || o.orderStatus || "").toLowerCase();
//   return s !== "cancelled";
// }

// function orderRevenue(o: FurnitureOrder) {
//   return Number(o.total ?? o.amount ?? o.totalAmount ?? 0) || 0;
// }

// function localDateKey(d: Date): string {
//   const y = d.getFullYear();
//   const m = String(d.getMonth() + 1).padStart(2, "0");
//   const day = String(d.getDate()).padStart(2, "0");
//   return `${y}-${m}-${day}`;
// }

// function orderTimeMs(o: FurnitureOrder): number {
//   const ts = o.createdAt?.toMillis?.();
//   if (ts && ts > 0) return ts;

//   const no = String(
//     (o as { orderNo?: string; orderNumber?: string }).orderNo ||
//       (o as { orderNumber?: string }).orderNumber ||
//       o.id ||
//       ""
//   );
//   const m = no.match(/(\d{4})(\d{2})(\d{2})/);
//   if (m) {
//     const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 12, 0, 0);
//     if (!Number.isNaN(d.getTime())) return d.getTime();
//   }

//   const raw = String(
//     (o as { orderDate?: string }).orderDate || o.deliveryDate || ""
//   );
//   if (raw) {
//     const d = new Date(raw.includes("T") ? raw : `${raw}T12:00:00`);
//     if (!Number.isNaN(d.getTime())) return d.getTime();
//   }

//   return 0;
// }

// function isSameCalendarDay(ms: number, ref: Date = new Date()): boolean {
//   if (!ms) return false;
//   const d = new Date(ms);
//   return (
//     d.getFullYear() === ref.getFullYear() &&
//     d.getMonth() === ref.getMonth() &&
//     d.getDate() === ref.getDate()
//   );
// }

// function buildSalesTrend(
//   orders: FurnitureOrder[],
//   period: string
// ): Sale[] {
//   const { start, end } = getPeriodRange(period);
//   const startMs = start.getTime();
//   const endMs = end.getTime();

//   const inPeriod = orders.filter((o) => {
//     if (!isActiveOrder(o)) return false;
//     const t = orderTimeMs(o);
//     return t >= startMs && t <= endMs;
//   });

//   if (period === "Last 3 Months" || period === "This Year") {
//     const buckets = new Map<
//       string,
//       { label: string; sales: number; sort: number; key: string }
//     >();

//     const cursor = new Date(start.getFullYear(), start.getMonth(), 1);
//     const endMonth = new Date(end.getFullYear(), end.getMonth(), 1);

//     while (cursor <= endMonth) {
//       const key = `${cursor.getFullYear()}-${cursor.getMonth()}`;
//       buckets.set(key, {
//         label: cursor.toLocaleString("en-IN", { month: "short" }),
//         sales: 0,
//         sort: cursor.getTime(),
//         key,
//       });
//       cursor.setMonth(cursor.getMonth() + 1);
//     }

//     inPeriod.forEach((o) => {
//       const d = new Date(orderTimeMs(o));
//       const key = `${d.getFullYear()}-${d.getMonth()}`;
//       const b = buckets.get(key);
//       if (b) b.sales += orderRevenue(o);
//     });

//     return Array.from(buckets.values())
//       .sort((a, b) => a.sort - b.sort)
//       .map((b) => ({
//         month: b.label,
//         sales: b.sales,
//         key: b.key,
//         sort: b.sort,
//       }));
//   }

//   const dayBuckets = new Map<
//     string,
//     { label: string; sales: number; sort: number; key: string }
//   >();

//   const dayCursor = new Date(
//     start.getFullYear(),
//     start.getMonth(),
//     start.getDate()
//   );
//   const dayEnd = new Date(end.getFullYear(), end.getMonth(), end.getDate());

//   while (dayCursor <= dayEnd) {
//     const key = localDateKey(dayCursor);
//     dayBuckets.set(key, {
//       label: String(dayCursor.getDate()),
//       sales: 0,
//       sort: dayCursor.getTime(),
//       key,
//     });
//     dayCursor.setDate(dayCursor.getDate() + 1);
//   }

//   inPeriod.forEach((o) => {
//     const t = orderTimeMs(o);
//     if (!t) return;
//     const key = localDateKey(new Date(t));
//     const b = dayBuckets.get(key);
//     if (b) b.sales += orderRevenue(o);
//   });

//   const days = Array.from(dayBuckets.values()).sort((a, b) => a.sort - b.sort);

//   if (days.length > 16) {
//     const weeks: Sale[] = [];
//     for (let i = 0; i < days.length; i += 7) {
//       const slice = days.slice(i, i + 7);
//       const sales = slice.reduce((s, d) => s + d.sales, 0);
//       const from = new Date(slice[0].sort).getDate();
//       const to = new Date(slice[slice.length - 1].sort).getDate();
//       weeks.push({
//         month: `${from}–${to}`,
//         sales,
//         key: `week-${slice[0].key}-${slice[slice.length - 1].key}`,
//         sort: slice[0].sort,
//       });
//     }
//     return weeks;
//   }

//   return days.map((d) => ({
//     month: d.label,
//     sales: d.sales,
//     key: d.key,
//     sort: d.sort,
//   }));
// }

// function periodChartSubtitle(period: string): string {
//   switch (period) {
//     case "This Month":
//       return "Daily sales this month · click a bar to filter KPIs";
//     case "Last Month":
//       return "Daily sales last month · click a bar to filter KPIs";
//     case "Last 3 Months":
//       return "Monthly sales · click a bar to filter KPIs";
//     case "This Year":
//       return "Monthly sales · click a bar to filter KPIs";
//     default:
//       return "Sales for selected period";
//   }
// }

// function ordersForBarKey(
//   orders: FurnitureOrder[],
//   key: string,
//   period: string
// ): FurnitureOrder[] {
//   if (!key) return [];

//   if (key.startsWith("week-")) {
//     const match = key.match(
//       /^week-(\d{4}-\d{2}-\d{2})-(\d{4}-\d{2}-\d{2})$/
//     );
//     if (match) {
//       const start = new Date(`${match[1]}T00:00:00`).getTime();
//       const end = new Date(`${match[2]}T23:59:59`).getTime();
//       return orders.filter((o) => {
//         if (!isActiveOrder(o)) return false;
//         const t = orderTimeMs(o);
//         return t >= start && t <= end;
//       });
//     }
//   }

//   if (period === "Last 3 Months" || period === "This Year") {
//     const [y, m] = key.split("-").map(Number);
//     if (!Number.isNaN(y) && !Number.isNaN(m)) {
//       return orders.filter((o) => {
//         if (!isActiveOrder(o)) return false;
//         const d = new Date(orderTimeMs(o));
//         return d.getFullYear() === y && d.getMonth() === m;
//       });
//     }
//   }

//   if (/^\d{4}-\d{2}-\d{2}$/.test(key)) {
//     return orders.filter((o) => {
//       if (!isActiveOrder(o)) return false;
//       return localDateKey(new Date(orderTimeMs(o))) === key;
//     });
//   }

//   return [];
// }

// function formatBarLabel(key: string, label: string, period: string): string {
//   if (/^\d{4}-\d{2}-\d{2}$/.test(key)) {
//     const d = new Date(`${key}T12:00:00`);
//     return d.toLocaleDateString("en-IN", {
//       day: "numeric",
//       month: "short",
//       year: "numeric",
//     });
//   }
//   if (period === "Last 3 Months" || period === "This Year") {
//     return label || key;
//   }
//   return label || key;
// }

// export default function FurnitureDashboardPage() {
//   const router = useRouter();
//   const [period, setPeriod] = useState("This Month");
//   const [attentionFilter, setAttentionFilter] = useState("All");
//   const [loading, setLoading] = useState(true);
//   const [selectedBarKey, setSelectedBarKey] = useState<string | null>(null);

//   const [products, setProducts] = useState<FurnitureProduct[]>([]);
//   const [orders, setOrders] = useState<FurnitureOrder[]>([]);
//   const [todayEnquiriesCount, setTodayEnquiriesCount] = useState(0);
//   const [todayExpensesTotal, setTodayExpensesTotal] = useState(0);
//   const [periodExpensesTotal, setPeriodExpensesTotal] = useState(0);
//   const [lowStock, setLowStock] = useState<FurnitureProduct[]>([]);
//   const [outOfStock, setOutOfStock] = useState<FurnitureProduct[]>([]);
//   const [ageing, setAgeing] = useState<
//     (FurnitureProduct & { daysPublished: number })[]
//   >([]);

//   useEffect(() => {
//     setSelectedBarKey(null);
//   }, [period]);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const { start, end } = getPeriodRange(period);

//         const [
//           allProducts,
//           allOrders,
//           tEnquiries,
//           tExpenses,
//           pExpenses,
//           low,
//           out,
//           age,
//         ] = await Promise.all([
//           getAllProducts(),
//           getAllOrders(),
//           getTodayEnquiries(),
//           getTodayExpenses(),
//           getExpensesInRange(start, end),
//           getLowStockProducts(),
//           getOutOfStockProducts(),
//           getAgeingProducts(10),
//         ]);

//         if (cancelled) return;

//         setProducts(allProducts);
//         setOrders(allOrders);
//         setTodayEnquiriesCount(tEnquiries.length);
//         setTodayExpensesTotal(sumByAmount(tExpenses));
//         setPeriodExpensesTotal(sumByAmount(pExpenses));
//         setLowStock(low);
//         setOutOfStock(out);
//         setAgeing(age);
//       } catch (err) {
//         console.error("Dashboard load error:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, [period]);

//   const totalProducts = products.length;
//   const inStock = products.filter((p) => (p.stock ?? 0) > 0).length;

//   const costByProductId = useMemo(() => {
//     const map = new Map<string, number>();
//     products.forEach((p) => {
//       const cost = Number(p.costPrice ?? 0) || 0;
//       map.set(p.id, cost);
//       if (p.sku) map.set(String(p.sku), cost);
//       if (p.code) map.set(String(p.code), cost);
//     });
//     return map;
//   }, [products]);

//   function orderProductCost(o: FurnitureOrder): number {
//     const items = o.items || [];
//     if (items.length > 0) {
//       return items.reduce((sum, item) => {
//         const qty = Number(item.qty ?? item.quantity ?? 1) || 1;
//         const pid = String(item.productId || "");
//         if (pid && costByProductId.has(pid)) {
//           return sum + (costByProductId.get(pid) || 0) * qty;
//         }
//         const iname = String(item.name || "").toLowerCase().trim();
//         if (iname) {
//           const match = products.find(
//             (p) =>
//               p.name?.toLowerCase().trim() === iname && Number(p.costPrice) > 0
//           );
//           if (match) return sum + Number(match.costPrice) * qty;
//         }
//         return sum;
//       }, 0);
//     }

//     const name = (o.product || o.productName || "").toLowerCase().trim();
//     if (!name) return 0;
//     const match = products.find(
//       (p) => p.name?.toLowerCase().trim() === name && Number(p.costPrice) > 0
//     );
//     if (!match) return 0;
//     return Number(match.costPrice) * (Number(o.quantity) || 1);
//   }

//   const periodOrders = useMemo(() => {
//     const { start, end } = getPeriodRange(period);
//     const startMs = start.getTime();
//     const endMs = end.getTime();
//     return orders.filter((o) => {
//       if (!isActiveOrder(o)) return false;
//       const t = orderTimeMs(o);
//       if (!t) return false;
//       return t >= startMs && t <= endMs;
//     });
//   }, [orders, period]);

//   const focusOrders = useMemo(() => {
//     if (!selectedBarKey) return periodOrders;
//     return ordersForBarKey(orders, selectedBarKey, period);
//   }, [orders, selectedBarKey, period, periodOrders]);

//   const activeTodayOrders = useMemo(
//     () =>
//       orders.filter(
//         (o) => isActiveOrder(o) && isSameCalendarDay(orderTimeMs(o))
//       ),
//     [orders]
//   );

//   const focusPaidOrders = useMemo(
//     () =>
//       focusOrders.filter((o) => {
//         const ps = String(o.paymentStatus || "").toLowerCase();
//         return ps === "paid" || ps === "received";
//       }),
//     [focusOrders]
//   );

//   const totalSales = focusOrders.reduce((s, o) => s + orderRevenue(o), 0);
//   const todaySales = activeTodayOrders.reduce((s, o) => s + orderRevenue(o), 0);
//   const paidSales = focusPaidOrders.reduce((s, o) => s + orderRevenue(o), 0);

//   const pendingPayments = orders
//     .filter(
//       (o) =>
//         isActiveOrder(o) &&
//         (o.paymentStatus === "Pending" || o.paymentStatus === "Partial")
//     )
//     .reduce(
//       (s, o) => s + Math.max(0, orderRevenue(o) - Number(o.paid || 0)),
//       0
//     );

//   const productCost = focusOrders.reduce(
//     (sum, o) => sum + orderProductCost(o),
//     0
//   );
//   const paidProductCost = focusPaidOrders.reduce(
//     (sum, o) => sum + orderProductCost(o),
//     0
//   );
//   const todayProductCost = activeTodayOrders.reduce(
//     (sum, o) => sum + orderProductCost(o),
//     0
//   );

//   const focusExpenses = selectedBarKey ? 0 : periodExpensesTotal;

//   const estimatedProfit = totalSales - productCost - focusExpenses;
//   const paidEstimatedProfit = paidSales - paidProductCost - focusExpenses;
//   const todayEstimatedProfit =
//     todaySales - todayProductCost - todayExpensesTotal;

//   const salesData = useMemo(
//     () => buildSalesTrend(orders, period),
//     [orders, period]
//   );

//   const selectedBarMeta = useMemo(() => {
//     if (!selectedBarKey) return null;
//     return salesData.find((s) => s.key === selectedBarKey) || null;
//   }, [selectedBarKey, salesData]);

//   // KPI tiles: selected bar OR calendar today
//   const kpiSales = selectedBarKey ? totalSales : todaySales;
//   const kpiOrdersCount = selectedBarKey
//     ? focusOrders.length
//     : activeTodayOrders.length;
//   const kpiProfit = selectedBarKey ? estimatedProfit : todayEstimatedProfit;
//   const kpiExpenses = selectedBarKey ? focusExpenses : todayExpensesTotal;
//   const kpiSalesSubtitle = selectedBarKey
//     ? `${focusOrders.length} order${focusOrders.length !== 1 ? "s" : ""}`
//     : `${activeTodayOrders.length} order${
//         activeTodayOrders.length !== 1 ? "s" : ""
//       }`;
//   const kpiSectionTitle = selectedBarKey
//     ? formatBarLabel(
//         selectedBarMeta?.key || selectedBarKey,
//         selectedBarMeta?.month || "",
//         period
//       )
//     : "Today";

//   const performanceLabel = selectedBarMeta
//     ? formatBarLabel(selectedBarMeta.key, selectedBarMeta.month, period)
//     : period;

//   const topProducts = useMemo(() => {
//     const map = new Map<
//       string,
//       { name: string; category: string; sales: number; revenue: number }
//     >();

//     focusOrders.forEach((o) => {
//       (o.items || []).forEach((item) => {
//         const key = item.productId || item.name || "unknown";
//         const existing = map.get(key) || {
//           name: item.name || "Item",
//           category: "",
//           sales: 0,
//           revenue: 0,
//         };
//         const qty = Number(item.qty ?? item.quantity ?? 1) || 1;
//         existing.sales += qty;
//         existing.revenue += qty * (Number(item.price) || 0);
//         map.set(key, existing);
//       });

//       if ((!o.items || o.items.length === 0) && (o.product || o.productName)) {
//         const name = o.product || o.productName || "Item";
//         const existing = map.get(name) || {
//           name,
//           category: o.category || "",
//           sales: 0,
//           revenue: 0,
//         };
//         existing.sales += Number(o.quantity) || 1;
//         existing.revenue += orderRevenue(o);
//         map.set(name, existing);
//       }
//     });

//     if (map.size === 0) {
//       return products.slice(0, 4).map((p) => ({
//         code: p.sku || p.id,
//         name: p.name,
//         category: p.category || "—",
//         sales: 0,
//         revenue: 0,
//       }));
//     }

//     return Array.from(map.entries())
//       .map(([code, v]) => ({ code, ...v }))
//       .sort((a, b) => b.revenue - a.revenue)
//       .slice(0, 4);
//   }, [focusOrders, products]);

//   const sourceData = useMemo(() => {
//     const counts: Record<string, number> = {};
//     focusOrders.forEach((o) => {
//       const src = (o.source || "Other").trim() || "Other";
//       counts[src] = (counts[src] || 0) + 1;
//     });
//     const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
//     const preferred = [
//       "Website",
//       "Instagram",
//       "WhatsApp",
//       "Referral",
//       "Walk-in",
//       "Other",
//     ];
//     return preferred.map((name) => ({
//       name,
//       value: Math.round(((counts[name] || 0) / total) * 100),
//     }));
//   }, [focusOrders]);

//   const attentionItems: AttentionItem[] = useMemo(() => {
//     const items: AttentionItem[] = [];

//     ageing.slice(0, 5).forEach((p) => {
//       items.push({
//         id: p.id,
//         title: p.name,
//         description: `Published for ${p.daysPublished} days without a confirmed sale.`,
//         type: "Ageing",
//         priority: p.daysPublished >= 15 ? "High" : "Medium",
//         href: `/furniture/products/${p.id}`,
//       });
//     });

//     lowStock.slice(0, 3).forEach((p) => {
//       items.push({
//         id: p.id,
//         title: p.name,
//         description: `Only ${p.stock} units remaining. Minimum stock level is ${
//           p.minStock ?? p.reorderLevel ?? 5
//         }.`,
//         type: "Low Stock",
//         priority: (p.stock ?? 0) <= 2 ? "High" : "Medium",
//         href: `/furniture/products/${p.id}`,
//       });
//     });

//     orders
//       .filter(
//         (o) =>
//           isActiveOrder(o) &&
//           (o.paymentStatus === "Pending" || o.paymentStatus === "Partial")
//       )
//       .slice(0, 3)
//       .forEach((o) => {
//         const due = Math.max(0, orderRevenue(o) - Number(o.paid || 0));
//         items.push({
//           id: o.id,
//           title: o.customerName || o.orderNo || "Customer",
//           description: `Payment of ${formatCurrency(due)} is pending.`,
//           type: "Payment",
//           priority: "High",
//           href: `/furniture/orders`,
//         });
//       });

//     return items;
//   }, [ageing, lowStock, orders]);

//   const filteredAttention = useMemo(() => {
//     if (attentionFilter === "All") return attentionItems;
//     return attentionItems.filter((item) => item.type === attentionFilter);
//   }, [attentionItems, attentionFilter]);

//   function handleBarClick(key: string) {
//     setSelectedBarKey((prev) => (prev === key ? null : key));
//   }

//   if (loading) {
//     return (
//       <div className="flex min-h-[60vh] items-center justify-center">
//         <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#242424]">
//       <main className="mx-auto max-w-[1500px] px-5 py-7 lg:px-8">
//         <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
//           <div>
//             <p className="mb-1 text-xs font-medium text-[#999]">
//               Furniture / Dashboard
//             </p>
//             <h1 className="text-2xl font-semibold tracking-tight">
//               Furniture ERP Dashboard
//             </h1>
//             <p className="mt-1 text-sm text-[#777]">
//               Live overview of products, sales, customers, payments and business
//               performance.
//             </p>
//           </div>

//           <select
//             value={period}
//             onChange={(e) => setPeriod(e.target.value)}
//             className="h-10 rounded-lg border border-[#ddd] bg-white px-4 text-sm outline-none focus:border-[#176b5b]"
//           >
//             <option>This Month</option>
//             <option>Last Month</option>
//             <option>Last 3 Months</option>
//             <option>This Year</option>
//           </select>
//         </div>

//         {/* KPI tiles — update in place when a chart bar is selected */}
//         <section className="mb-6">
//           <div className="mb-3 flex items-center justify-between gap-3">
//             <h2 className="text-sm font-semibold text-[#444]">
//               {kpiSectionTitle}
//             </h2>
//             {selectedBarKey && (
//               <button
//                 type="button"
//                 onClick={() => setSelectedBarKey(null)}
//                 className="text-xs font-semibold text-[#176b5b] hover:underline"
//               >
//                 Clear · show Today
//               </button>
//             )}
//           </div>
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-6">
//             <MetricCard
//               title={selectedBarKey ? "Sales" : "Today's Sales"}
//               value={formatCurrency(kpiSales)}
//               subtitle={kpiSalesSubtitle}
//             />
//             <MetricCard
//               title="New Enquiries"
//               value={String(todayEnquiriesCount)}
//               subtitle="Today"
//             />
//             <MetricCard
//               title={selectedBarKey ? "Orders" : "New Orders"}
//               value={String(kpiOrdersCount)}
//               subtitle="Excl. cancelled"
//             />
//             <MetricCard
//               title="Expenses"
//               value={formatCurrency(kpiExpenses)}
//               subtitle={
//                 selectedBarKey ? "In this selection" : "Recorded today"
//               }
//             />
//             <MetricCard
//               title="Pending Payments"
//               value={formatCurrency(pendingPayments)}
//               subtitle="Outstanding balances"
//               warning
//             />
//             <MetricCard
//               title="Profit (Est.)"
//               value={formatCurrency(Math.max(0, kpiProfit))}
//               subtitle="Sales − cost − expenses"
//             />
//           </div>
//         </section>

//         <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <BigMetricCard
//             title="Total Products"
//             value={String(totalProducts)}
//             subtitle="Furniture products"
//             icon="P"
//           />
//           <BigMetricCard
//             title="In Stock"
//             value={String(inStock)}
//             subtitle="Available products"
//             icon="I"
//           />
//           <BigMetricCard
//             title="Low Stock"
//             value={String(lowStock.length)}
//             subtitle="Need attention"
//             icon="!"
//             warning
//           />
//           <BigMetricCard
//             title="Out of Stock"
//             value={String(outOfStock.length)}
//             subtitle="Currently unavailable"
//             icon="O"
//           />
//         </section>

//         <section className="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-3">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm xl:col-span-2">
//             <div className="mb-4 flex items-center justify-between gap-3">
//               <div>
//                 <h2 className="text-base font-semibold">Sales Trend</h2>
//                 <p className="mt-1 text-xs text-[#999]">
//                   {periodChartSubtitle(period)}
//                 </p>
//               </div>
//               <span className="shrink-0 rounded-full bg-[#eef7f4] px-3 py-1 text-xs font-semibold text-[#176b5b]">
//                 {period}
//               </span>
//             </div>
//             <SalesChart
//               data={salesData}
//               selectedKey={selectedBarKey}
//               onBarClick={handleBarClick}
//             />
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <h2 className="text-base font-semibold">Business Performance</h2>
//             <p className="mt-1 text-xs text-[#999]">
//               {selectedBarKey ? "Bar filter: " : "Period: "}
//               <span className="font-semibold text-[#555]">
//                 {performanceLabel}
//               </span>
//               {" · "}
//               {focusOrders.length} active order
//               {focusOrders.length !== 1 ? "s" : ""}
//             </p>
//             <div className="mt-5 space-y-4">
//               <FinancialRow
//                 label="Total Sales"
//                 value={formatCurrency(totalSales)}
//               />
//               <FinancialRow
//                 label="Paid sales"
//                 value={formatCurrency(paidSales)}
//               />
//               <FinancialRow
//                 label="Product cost (COGS)"
//                 value={formatCurrency(productCost)}
//               />
//               <FinancialRow
//                 label="Expenses"
//                 value={formatCurrency(focusExpenses)}
//               />
//               <div className="border-t border-[#eee] pt-4">
//                 <FinancialRow
//                   label="Est. profit"
//                   value={formatCurrency(Math.max(0, estimatedProfit))}
//                   strong
//                 />
//                 <p className="mt-1 text-[11px] text-[#aaa]">
//                   Paid-only margin:{" "}
//                   {formatCurrency(Math.max(0, paidEstimatedProfit))}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-3">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm xl:col-span-2">
//             <div className="mb-1 flex items-center justify-between">
//               <h2 className="text-base font-semibold">Top Products</h2>
//               <span className="rounded-full bg-[#eef7f4] px-3 py-1 text-xs font-semibold text-[#176b5b]">
//                 {performanceLabel}
//               </span>
//             </div>
//             <p className="text-xs text-[#999]">By revenue in selected view</p>
//             <div className="mt-4 overflow-x-auto">
//               <table className="w-full min-w-[480px]">
//                 <thead>
//                   <tr className="border-b border-[#eee] text-left">
//                     <th className="pb-3 text-xs font-semibold text-[#999]">
//                       Product
//                     </th>
//                     <th className="pb-3 text-xs font-semibold text-[#999]">
//                       Category
//                     </th>
//                     <th className="pb-3 text-center text-xs font-semibold text-[#999]">
//                       Sales
//                     </th>
//                     <th className="pb-3 text-right text-xs font-semibold text-[#999]">
//                       Revenue
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {topProducts.map((product, index) => (
//                     <tr
//                       key={product.code}
//                       className="border-b border-[#f0efeb] last:border-0"
//                     >
//                       <td className="py-3">
//                         <div className="flex items-center gap-3">
//                           <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#f2f3ef] text-xs font-semibold text-[#176b5b]">
//                             {index + 1}
//                           </div>
//                           <div>
//                             <p className="text-sm font-medium">{product.name}</p>
//                             <p className="text-[11px] text-[#aaa]">
//                               {product.code}
//                             </p>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="py-3 text-sm text-[#666]">
//                         {product.category || "—"}
//                       </td>
//                       <td className="py-3 text-center text-sm font-medium">
//                         {product.sales}
//                       </td>
//                       <td className="py-3 text-right text-sm font-semibold">
//                         {formatCurrency(product.revenue)}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="mb-1 flex items-center justify-between">
//               <h2 className="text-base font-semibold">Order Sources</h2>
//               <span className="rounded-full bg-[#eef7f4] px-3 py-1 text-xs font-semibold text-[#176b5b]">
//                 {performanceLabel}
//               </span>
//             </div>
//             <p className="text-xs text-[#999]">Share of orders in view</p>
//             <div className="mt-5 space-y-3">
//               {sourceData.map((s) => (
//                 <div key={s.name}>
//                   <div className="mb-1 flex justify-between text-xs">
//                     <span className="text-[#666]">{s.name}</span>
//                     <span className="font-semibold text-[#444]">{s.value}%</span>
//                   </div>
//                   <div className="h-2 overflow-hidden rounded-full bg-[#f0eee7]">
//                     <div
//                       className="h-full rounded-full bg-[#176b5b]"
//                       style={{ width: `${s.value}%` }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section className="mb-6 rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="flex flex-col gap-4 border-b border-[#eee] p-5 md:flex-row md:items-center md:justify-between">
//             <div>
//               <h2 className="text-base font-semibold">Attention Needed</h2>
//               <p className="mt-1 text-xs text-[#999]">
//                 Items that may require an immediate business action.
//               </p>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {["All", "Ageing", "Low Stock", "Payment"].map((filter) => (
//                 <button
//                   key={filter}
//                   type="button"
//                   onClick={() => setAttentionFilter(filter)}
//                   className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
//                     attentionFilter === filter
//                       ? "bg-[#176b5b] text-white"
//                       : "bg-[#f3f3f0] text-[#666] hover:bg-[#e9e9e5]"
//                   }`}
//                 >
//                   {filter}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="divide-y divide-[#eee]">
//             {filteredAttention.map((item) => (
//               <div
//                 key={`${item.type}-${item.id}`}
//                 className="flex flex-col gap-4 p-5 transition hover:bg-[#fafbf9] md:flex-row md:items-center md:justify-between"
//               >
//                 <div className="flex items-start gap-4">
//                   <AttentionIcon type={item.type} />
//                   <div>
//                     <div className="flex flex-wrap items-center gap-2">
//                       <h3 className="text-sm font-semibold">{item.title}</h3>
//                       <span
//                         className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
//                           item.priority === "High"
//                             ? "bg-red-50 text-red-600"
//                             : "bg-orange-50 text-orange-600"
//                         }`}
//                       >
//                         {item.priority}
//                       </span>
//                     </div>
//                     <p className="mt-1 text-xs text-[#777]">{item.description}</p>
//                     <p className="mt-1 text-[11px] text-[#aaa]">
//                       Reference: {item.id}
//                     </p>
//                   </div>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => item.href && router.push(item.href)}
//                   className="rounded-lg border border-[#ddd] px-4 py-2 text-xs font-semibold text-[#555] hover:border-[#176b5b] hover:text-[#176b5b]"
//                 >
//                   Open Record
//                 </button>
//               </div>
//             ))}

//             {filteredAttention.length === 0 && (
//               <div className="p-10 text-center">
//                 <p className="text-sm font-medium text-[#555]">
//                   No attention items
//                 </p>
//                 <p className="mt-1 text-xs text-[#999]">
//                   There are no items in this category.
//                 </p>
//               </div>
//             )}
//           </div>
//         </section>

//         <section>
//           <h2 className="mb-3 text-sm font-semibold text-[#444]">Quick access</h2>
//           <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
//             <QuickLink title="Orders" href="/furniture/orders" />
//             <QuickLink title="Products" href="/furniture/products" />
//             <QuickLink title="Enquiries" href="/furniture/enquiries" />
//             <QuickLink title="Payments" href="/furniture/payments" />
//             <QuickLink title="Inventory" href="/furniture/inventory" />
//             <QuickLink title="Reports" href="/furniture/reports" />
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// function MetricCard({
//   title,
//   value,
//   subtitle,
//   warning = false,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   warning?: boolean;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//       <p className="text-xs font-medium text-[#999]">{title}</p>
//       <p
//         className={`mt-2 text-2xl font-semibold ${
//           warning ? "text-[#b46b17]" : "text-[#222]"
//         }`}
//       >
//         {value}
//       </p>
//       <p className="mt-1 text-xs text-[#aaa]">{subtitle}</p>
//     </div>
//   );
// }

// function BigMetricCard({
//   title,
//   value,
//   subtitle,
//   icon,
//   warning = false,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   icon: string;
//   warning?: boolean;
// }) {
//   return (
//     <div className="flex items-center justify-between rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//       <div>
//         <p className="text-xs font-medium text-[#999]">{title}</p>
//         <p
//           className={`mt-2 text-2xl font-semibold ${
//             warning ? "text-[#b46b17]" : "text-[#222]"
//           }`}
//         >
//           {value}
//         </p>
//         <p className="mt-1 text-xs text-[#aaa]">{subtitle}</p>
//       </div>
//       <div
//         className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold ${
//           warning
//             ? "bg-[#fff4df] text-[#b46b17]"
//             : "bg-[#e8f2ee] text-[#176b5b]"
//         }`}
//       >
//         {icon}
//       </div>
//     </div>
//   );
// }

// function SalesChart({
//   data,
//   selectedKey,
//   onBarClick,
// }: {
//   data: Sale[];
//   selectedKey: string | null;
//   onBarClick: (key: string) => void;
// }) {
//   const max = Math.max(...data.map((item) => item.sales), 1);
//   return (
//     <div>
//       <div className="flex h-[250px] items-end gap-2 border-b border-l border-[#eee] px-2 pb-0 pt-5 sm:gap-3 sm:px-4">
//         {data.map((item, i) => {
//           const height = Math.max(8, (item.sales / max) * 190);
//           const selected = selectedKey === item.key;
//           return (
//             <button
//               key={`${item.key}-${i}`}
//               type="button"
//               onClick={() => onBarClick(item.key)}
//               className="flex h-full min-w-0 flex-1 flex-col items-center justify-end rounded-t-md outline-none transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#176b5b]"
//               title={`${item.month}: ${formatCurrency(item.sales)} — click to filter`}
//             >
//               <div className="mb-1 max-w-full truncate text-[9px] text-[#888] sm:text-[10px]">
//                 {item.sales > 0 ? formatCurrency(item.sales) : ""}
//               </div>
//               <div
//                 className={`w-full max-w-[40px] rounded-t-md transition ${
//                   selected
//                     ? "bg-[#0f4f42] ring-2 ring-[#176b5b] ring-offset-1"
//                     : "bg-[#176b5b] hover:bg-[#125849]"
//                 }`}
//                 style={{ height: `${height}px` }}
//               />
//               <div
//                 className={`mt-2 max-w-full truncate text-[10px] sm:text-xs ${
//                   selected
//                     ? "font-semibold text-[#176b5b]"
//                     : "text-[#888]"
//                 }`}
//               >
//                 {item.month}
//               </div>
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// function FinancialRow({
//   label,
//   value,
//   strong = false,
// }: {
//   label: string;
//   value: string;
//   strong?: boolean;
// }) {
//   return (
//     <div className="flex items-center justify-between gap-4">
//       <span
//         className={`text-sm ${
//           strong ? "font-semibold text-[#333]" : "text-[#777]"
//         }`}
//       >
//         {label}
//       </span>
//       <span
//         className={`text-sm ${
//           strong ? "font-semibold text-[#176b5b]" : "font-medium text-[#444]"
//         }`}
//       >
//         {value}
//       </span>
//     </div>
//   );
// }

// function AttentionIcon({ type }: { type: AttentionItem["type"] }) {
//   let content = "!";
//   if (type === "Payment") content = "₹";
//   if (type === "Ageing") content = "⏱";
//   return (
//     <div
//       className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
//         type === "Payment"
//           ? "bg-[#fff4df] text-[#b46b17]"
//           : type === "Low Stock"
//             ? "bg-red-50 text-red-600"
//             : "bg-[#eef1ff] text-[#5a65a8]"
//       }`}
//     >
//       {content}
//     </div>
//   );
// }

// function QuickLink({ title, href }: { title: string; href: string }) {
//   return (
//     <Link
//       href={href}
//       className="rounded-xl border border-[#e4e2da] bg-white px-4 py-4 text-center text-sm font-medium text-[#555] shadow-sm transition hover:-translate-y-0.5 hover:border-[#176b5b] hover:text-[#176b5b]"
//     >
//       {title}
//     </Link>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import {
//   getAllProducts,
//   getLowStockProducts,
//   getOutOfStockProducts,
//   getAgeingProducts,
//   type FurnitureProduct,
// } from "@/modules/furniture/services/productService";
// import {
//   getAllOrders,
//   type FurnitureOrder,
// } from "@/modules/furniture/services/orderService";
// import { getTodayEnquiries } from "@/modules/furniture/services/enquiryService";
// import {
//   getTodayExpenses,
//   getExpensesInRange,
// } from "@/modules/furniture/services/expenseService";

// type Sale = {
//   month: string;
//   sales: number;
//   key: string;
//   sort: number;
// };

// type AttentionItem = {
//   id: string;
//   title: string;
//   description: string;
//   type: "Ageing" | "Low Stock" | "Payment";
//   priority: "High" | "Medium";
//   href?: string;
// };

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function sumByAmount(items: { amount?: number }[]): number {
//   return items.reduce((sum: number, item) => sum + (item.amount || 0), 0);
// }

// function getPeriodRange(period: string): { start: Date; end: Date } {
//   const now = new Date();
//   const end = new Date(now);
//   end.setHours(23, 59, 59, 999);

//   const start = new Date(now);

//   if (period === "This Month") {
//     start.setDate(1);
//     start.setHours(0, 0, 0, 0);
//   } else if (period === "Last Month") {
//     start.setMonth(start.getMonth() - 1, 1);
//     start.setHours(0, 0, 0, 0);
//     end.setDate(0);
//     end.setHours(23, 59, 59, 999);
//   } else if (period === "Last 3 Months") {
//     start.setMonth(start.getMonth() - 2, 1);
//     start.setHours(0, 0, 0, 0);
//   } else {
//     start.setMonth(0, 1);
//     start.setHours(0, 0, 0, 0);
//   }

//   return { start, end };
// }

// function isActiveOrder(o: FurnitureOrder) {
//   const s = String(o.status || o.orderStatus || "").toLowerCase();
//   return s !== "cancelled";
// }

// function orderRevenue(o: FurnitureOrder) {
//   return Number(o.total ?? o.amount ?? o.totalAmount ?? 0) || 0;
// }

// function localDateKey(d: Date): string {
//   const y = d.getFullYear();
//   const m = String(d.getMonth() + 1).padStart(2, "0");
//   const day = String(d.getDate()).padStart(2, "0");
//   return `${y}-${m}-${day}`;
// }

// function orderTimeMs(o: FurnitureOrder): number {
//   const ts = o.createdAt?.toMillis?.();
//   if (ts && ts > 0) return ts;

//   const no = String(
//     (o as { orderNo?: string; orderNumber?: string }).orderNo ||
//       (o as { orderNumber?: string }).orderNumber ||
//       o.id ||
//       ""
//   );
//   const m = no.match(/(\d{4})(\d{2})(\d{2})/);
//   if (m) {
//     const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 12, 0, 0);
//     if (!Number.isNaN(d.getTime())) return d.getTime();
//   }

//   const raw = String(
//     (o as { orderDate?: string }).orderDate || o.deliveryDate || ""
//   );
//   if (raw) {
//     const d = new Date(raw.includes("T") ? raw : `${raw}T12:00:00`);
//     if (!Number.isNaN(d.getTime())) return d.getTime();
//   }

//   return 0;
// }

// function isSameCalendarDay(ms: number, ref: Date = new Date()): boolean {
//   if (!ms) return false;
//   const d = new Date(ms);
//   return (
//     d.getFullYear() === ref.getFullYear() &&
//     d.getMonth() === ref.getMonth() &&
//     d.getDate() === ref.getDate()
//   );
// }

// function buildSalesTrend(orders: FurnitureOrder[], period: string): Sale[] {
//   const { start, end } = getPeriodRange(period);
//   const startMs = start.getTime();
//   const endMs = end.getTime();

//   const inPeriod = orders.filter((o) => {
//     if (!isActiveOrder(o)) return false;
//     const t = orderTimeMs(o);
//     return t >= startMs && t <= endMs;
//   });

//   if (period === "Last 3 Months" || period === "This Year") {
//     const buckets = new Map<
//       string,
//       { label: string; sales: number; sort: number; key: string }
//     >();

//     const cursor = new Date(start.getFullYear(), start.getMonth(), 1);
//     const endMonth = new Date(end.getFullYear(), end.getMonth(), 1);

//     while (cursor <= endMonth) {
//       const key = `${cursor.getFullYear()}-${cursor.getMonth()}`;
//       buckets.set(key, {
//         label: cursor.toLocaleString("en-IN", { month: "short" }),
//         sales: 0,
//         sort: cursor.getTime(),
//         key,
//       });
//       cursor.setMonth(cursor.getMonth() + 1);
//     }

//     inPeriod.forEach((o) => {
//       const d = new Date(orderTimeMs(o));
//       const key = `${d.getFullYear()}-${d.getMonth()}`;
//       const b = buckets.get(key);
//       if (b) b.sales += orderRevenue(o);
//     });

//     return Array.from(buckets.values())
//       .sort((a, b) => a.sort - b.sort)
//       .map((b) => ({
//         month: b.label,
//         sales: b.sales,
//         key: b.key,
//         sort: b.sort,
//       }));
//   }

//   const dayBuckets = new Map<
//     string,
//     { label: string; sales: number; sort: number; key: string }
//   >();

//   const dayCursor = new Date(
//     start.getFullYear(),
//     start.getMonth(),
//     start.getDate()
//   );
//   const dayEnd = new Date(end.getFullYear(), end.getMonth(), end.getDate());

//   while (dayCursor <= dayEnd) {
//     const key = localDateKey(dayCursor);
//     dayBuckets.set(key, {
//       label: String(dayCursor.getDate()),
//       sales: 0,
//       sort: dayCursor.getTime(),
//       key,
//     });
//     dayCursor.setDate(dayCursor.getDate() + 1);
//   }

//   inPeriod.forEach((o) => {
//     const t = orderTimeMs(o);
//     if (!t) return;
//     const key = localDateKey(new Date(t));
//     const b = dayBuckets.get(key);
//     if (b) b.sales += orderRevenue(o);
//   });

//   const days = Array.from(dayBuckets.values()).sort((a, b) => a.sort - b.sort);

//   if (days.length > 16) {
//     const weeks: Sale[] = [];
//     for (let i = 0; i < days.length; i += 7) {
//       const slice = days.slice(i, i + 7);
//       const sales = slice.reduce((s, d) => s + d.sales, 0);
//       const from = new Date(slice[0].sort).getDate();
//       const to = new Date(slice[slice.length - 1].sort).getDate();
//       weeks.push({
//         month: `${from}–${to}`,
//         sales,
//         key: `week-${slice[0].key}-${slice[slice.length - 1].key}`,
//         sort: slice[0].sort,
//       });
//     }
//     return weeks;
//   }

//   return days.map((d) => ({
//     month: d.label,
//     sales: d.sales,
//     key: d.key,
//     sort: d.sort,
//   }));
// }

// function periodChartSubtitle(period: string): string {
//   switch (period) {
//     case "This Month":
//       return "Daily sales · tap a bar to filter";
//     case "Last Month":
//       return "Daily sales · tap a bar to filter";
//     case "Last 3 Months":
//       return "Monthly sales · tap a bar to filter";
//     case "This Year":
//       return "Monthly sales · tap a bar to filter";
//     default:
//       return "Sales for selected period";
//   }
// }

// function ordersForBarKey(
//   orders: FurnitureOrder[],
//   key: string,
//   period: string
// ): FurnitureOrder[] {
//   if (!key) return [];

//   if (key.startsWith("week-")) {
//     const match = key.match(
//       /^week-(\d{4}-\d{2}-\d{2})-(\d{4}-\d{2}-\d{2})$/
//     );
//     if (match) {
//       const start = new Date(`${match[1]}T00:00:00`).getTime();
//       const end = new Date(`${match[2]}T23:59:59`).getTime();
//       return orders.filter((o) => {
//         if (!isActiveOrder(o)) return false;
//         const t = orderTimeMs(o);
//         return t >= start && t <= end;
//       });
//     }
//   }

//   if (period === "Last 3 Months" || period === "This Year") {
//     const [y, m] = key.split("-").map(Number);
//     if (!Number.isNaN(y) && !Number.isNaN(m)) {
//       return orders.filter((o) => {
//         if (!isActiveOrder(o)) return false;
//         const d = new Date(orderTimeMs(o));
//         return d.getFullYear() === y && d.getMonth() === m;
//       });
//     }
//   }

//   if (/^\d{4}-\d{2}-\d{2}$/.test(key)) {
//     return orders.filter((o) => {
//       if (!isActiveOrder(o)) return false;
//       return localDateKey(new Date(orderTimeMs(o))) === key;
//     });
//   }

//   return [];
// }

// function formatBarLabel(key: string, label: string, period: string): string {
//   if (/^\d{4}-\d{2}-\d{2}$/.test(key)) {
//     const d = new Date(`${key}T12:00:00`);
//     return d.toLocaleDateString("en-IN", {
//       day: "numeric",
//       month: "short",
//       year: "numeric",
//     });
//   }
//   if (period === "Last 3 Months" || period === "This Year") {
//     return label || key;
//   }
//   return label || key;
// }

// export default function FurnitureDashboardPage() {
//   const router = useRouter();
//   const [period, setPeriod] = useState("This Month");
//   const [attentionFilter, setAttentionFilter] = useState("All");
//   const [loading, setLoading] = useState(true);
//   const [selectedBarKey, setSelectedBarKey] = useState<string | null>(null);

//   const [products, setProducts] = useState<FurnitureProduct[]>([]);
//   const [orders, setOrders] = useState<FurnitureOrder[]>([]);
//   const [todayEnquiriesCount, setTodayEnquiriesCount] = useState(0);
//   const [todayExpensesTotal, setTodayExpensesTotal] = useState(0);
//   const [periodExpensesTotal, setPeriodExpensesTotal] = useState(0);
//   const [lowStock, setLowStock] = useState<FurnitureProduct[]>([]);
//   const [outOfStock, setOutOfStock] = useState<FurnitureProduct[]>([]);
//   const [ageing, setAgeing] = useState<
//     (FurnitureProduct & { daysPublished: number })[]
//   >([]);

//   useEffect(() => {
//     setSelectedBarKey(null);
//   }, [period]);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const { start, end } = getPeriodRange(period);

//         const [
//           allProducts,
//           allOrders,
//           tEnquiries,
//           tExpenses,
//           pExpenses,
//           low,
//           out,
//           age,
//         ] = await Promise.all([
//           getAllProducts(),
//           getAllOrders(),
//           getTodayEnquiries(),
//           getTodayExpenses(),
//           getExpensesInRange(start, end),
//           getLowStockProducts(),
//           getOutOfStockProducts(),
//           getAgeingProducts(10),
//         ]);

//         if (cancelled) return;

//         setProducts(allProducts);
//         setOrders(allOrders);
//         setTodayEnquiriesCount(tEnquiries.length);
//         setTodayExpensesTotal(sumByAmount(tExpenses));
//         setPeriodExpensesTotal(sumByAmount(pExpenses));
//         setLowStock(low);
//         setOutOfStock(out);
//         setAgeing(age);
//       } catch (err) {
//         console.error("Dashboard load error:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, [period]);

//   const totalProducts = products.length;
//   const inStock = products.filter((p) => (p.stock ?? 0) > 0).length;

//   const costByProductId = useMemo(() => {
//     const map = new Map<string, number>();
//     products.forEach((p) => {
//       const cost = Number(p.costPrice ?? 0) || 0;
//       map.set(p.id, cost);
//       if (p.sku) map.set(String(p.sku), cost);
//       if (p.code) map.set(String(p.code), cost);
//     });
//     return map;
//   }, [products]);

//   function orderProductCost(o: FurnitureOrder): number {
//     const items = o.items || [];
//     if (items.length > 0) {
//       return items.reduce((sum, item) => {
//         const qty = Number(item.qty ?? item.quantity ?? 1) || 1;
//         const pid = String(item.productId || "");
//         if (pid && costByProductId.has(pid)) {
//           return sum + (costByProductId.get(pid) || 0) * qty;
//         }
//         const iname = String(item.name || "").toLowerCase().trim();
//         if (iname) {
//           const match = products.find(
//             (p) =>
//               p.name?.toLowerCase().trim() === iname && Number(p.costPrice) > 0
//           );
//           if (match) return sum + Number(match.costPrice) * qty;
//         }
//         return sum;
//       }, 0);
//     }

//     const name = (o.product || o.productName || "").toLowerCase().trim();
//     if (!name) return 0;
//     const match = products.find(
//       (p) => p.name?.toLowerCase().trim() === name && Number(p.costPrice) > 0
//     );
//     if (!match) return 0;
//     return Number(match.costPrice) * (Number(o.quantity) || 1);
//   }

//   const periodOrders = useMemo(() => {
//     const { start, end } = getPeriodRange(period);
//     const startMs = start.getTime();
//     const endMs = end.getTime();
//     return orders.filter((o) => {
//       if (!isActiveOrder(o)) return false;
//       const t = orderTimeMs(o);
//       if (!t) return false;
//       return t >= startMs && t <= endMs;
//     });
//   }, [orders, period]);

//   const focusOrders = useMemo(() => {
//     if (!selectedBarKey) return periodOrders;
//     return ordersForBarKey(orders, selectedBarKey, period);
//   }, [orders, selectedBarKey, period, periodOrders]);

//   const activeTodayOrders = useMemo(
//     () =>
//       orders.filter(
//         (o) => isActiveOrder(o) && isSameCalendarDay(orderTimeMs(o))
//       ),
//     [orders]
//   );

//   const focusPaidOrders = useMemo(
//     () =>
//       focusOrders.filter((o) => {
//         const ps = String(o.paymentStatus || "").toLowerCase();
//         return ps === "paid" || ps === "received";
//       }),
//     [focusOrders]
//   );

//   const totalSales = focusOrders.reduce((s, o) => s + orderRevenue(o), 0);
//   const todaySales = activeTodayOrders.reduce((s, o) => s + orderRevenue(o), 0);
//   const paidSales = focusPaidOrders.reduce((s, o) => s + orderRevenue(o), 0);

//   const pendingPayments = orders
//     .filter(
//       (o) =>
//         isActiveOrder(o) &&
//         (o.paymentStatus === "Pending" || o.paymentStatus === "Partial")
//     )
//     .reduce(
//       (s, o) => s + Math.max(0, orderRevenue(o) - Number(o.paid || 0)),
//       0
//     );

//   const productCost = focusOrders.reduce(
//     (sum, o) => sum + orderProductCost(o),
//     0
//   );
//   const paidProductCost = focusPaidOrders.reduce(
//     (sum, o) => sum + orderProductCost(o),
//     0
//   );
//   const todayProductCost = activeTodayOrders.reduce(
//     (sum, o) => sum + orderProductCost(o),
//     0
//   );

//   const focusExpenses = selectedBarKey ? 0 : periodExpensesTotal;

//   const estimatedProfit = totalSales - productCost - focusExpenses;
//   const paidEstimatedProfit = paidSales - paidProductCost - focusExpenses;
//   const todayEstimatedProfit =
//     todaySales - todayProductCost - todayExpensesTotal;

//   const salesData = useMemo(
//     () => buildSalesTrend(orders, period),
//     [orders, period]
//   );

//   const selectedBarMeta = useMemo(() => {
//     if (!selectedBarKey) return null;
//     return salesData.find((s) => s.key === selectedBarKey) || null;
//   }, [selectedBarKey, salesData]);

//   const kpiSales = selectedBarKey ? totalSales : todaySales;
//   const kpiOrdersCount = selectedBarKey
//     ? focusOrders.length
//     : activeTodayOrders.length;
//   const kpiProfit = selectedBarKey ? estimatedProfit : todayEstimatedProfit;
//   const kpiExpenses = selectedBarKey ? focusExpenses : todayExpensesTotal;
//   const kpiSalesSubtitle = selectedBarKey
//     ? `${focusOrders.length} order${focusOrders.length !== 1 ? "s" : ""}`
//     : `${activeTodayOrders.length} order${
//         activeTodayOrders.length !== 1 ? "s" : ""
//       }`;
//   const kpiSectionTitle = selectedBarKey
//     ? formatBarLabel(
//         selectedBarMeta?.key || selectedBarKey,
//         selectedBarMeta?.month || "",
//         period
//       )
//     : "Today";

//   const performanceLabel = selectedBarMeta
//     ? formatBarLabel(selectedBarMeta.key, selectedBarMeta.month, period)
//     : period;

//   const topProducts = useMemo(() => {
//     const map = new Map<
//       string,
//       { name: string; category: string; sales: number; revenue: number }
//     >();

//     focusOrders.forEach((o) => {
//       (o.items || []).forEach((item) => {
//         const key = item.productId || item.name || "unknown";
//         const existing = map.get(key) || {
//           name: item.name || "Item",
//           category: "",
//           sales: 0,
//           revenue: 0,
//         };
//         const qty = Number(item.qty ?? item.quantity ?? 1) || 1;
//         existing.sales += qty;
//         existing.revenue += qty * (Number(item.price) || 0);
//         map.set(key, existing);
//       });

//       if ((!o.items || o.items.length === 0) && (o.product || o.productName)) {
//         const name = o.product || o.productName || "Item";
//         const existing = map.get(name) || {
//           name,
//           category: o.category || "",
//           sales: 0,
//           revenue: 0,
//         };
//         existing.sales += Number(o.quantity) || 1;
//         existing.revenue += orderRevenue(o);
//         map.set(name, existing);
//       }
//     });

//     if (map.size === 0) {
//       return products.slice(0, 4).map((p) => ({
//         code: p.sku || p.id,
//         name: p.name,
//         category: p.category || "—",
//         sales: 0,
//         revenue: 0,
//       }));
//     }

//     return Array.from(map.entries())
//       .map(([code, v]) => ({ code, ...v }))
//       .sort((a, b) => b.revenue - a.revenue)
//       .slice(0, 4);
//   }, [focusOrders, products]);

//   const sourceData = useMemo(() => {
//     const counts: Record<string, number> = {};
//     focusOrders.forEach((o) => {
//       const src = (o.source || "Other").trim() || "Other";
//       counts[src] = (counts[src] || 0) + 1;
//     });
//     const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
//     const preferred = [
//       "Website",
//       "Instagram",
//       "WhatsApp",
//       "Referral",
//       "Walk-in",
//       "Other",
//     ];
//     return preferred.map((name) => ({
//       name,
//       value: Math.round(((counts[name] || 0) / total) * 100),
//     }));
//   }, [focusOrders]);

//   const attentionItems: AttentionItem[] = useMemo(() => {
//     const items: AttentionItem[] = [];

//     ageing.slice(0, 5).forEach((p) => {
//       items.push({
//         id: p.id,
//         title: p.name,
//         description: `Published for ${p.daysPublished} days without a confirmed sale.`,
//         type: "Ageing",
//         priority: p.daysPublished >= 15 ? "High" : "Medium",
//         href: `/furniture/products/${p.id}`,
//       });
//     });

//     lowStock.slice(0, 3).forEach((p) => {
//       items.push({
//         id: p.id,
//         title: p.name,
//         description: `Only ${p.stock} units remaining. Minimum stock level is ${
//           p.minStock ?? p.reorderLevel ?? 5
//         }.`,
//         type: "Low Stock",
//         priority: (p.stock ?? 0) <= 2 ? "High" : "Medium",
//         href: `/furniture/products/${p.id}`,
//       });
//     });

//     orders
//       .filter(
//         (o) =>
//           isActiveOrder(o) &&
//           (o.paymentStatus === "Pending" || o.paymentStatus === "Partial")
//       )
//       .slice(0, 3)
//       .forEach((o) => {
//         const due = Math.max(0, orderRevenue(o) - Number(o.paid || 0));
//         items.push({
//           id: o.id,
//           title: o.customerName || o.orderNo || "Customer",
//           description: `Payment of ${formatCurrency(due)} is pending.`,
//           type: "Payment",
//           priority: "High",
//           href: `/furniture/orders`,
//         });
//       });

//     return items;
//   }, [ageing, lowStock, orders]);

//   const filteredAttention = useMemo(() => {
//     if (attentionFilter === "All") return attentionItems;
//     return attentionItems.filter((item) => item.type === attentionFilter);
//   }, [attentionItems, attentionFilter]);

//   function handleBarClick(key: string) {
//     setSelectedBarKey((prev) => (prev === key ? null : key));
//   }

//   if (loading) {
//     return (
//       <div className="flex min-h-[50vh] items-center justify-center">
//         <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#242424]">
//       <main className="mx-auto max-w-[1500px] px-3 py-4 sm:px-5 sm:py-7 lg:px-8">
//         {/* Header */}
//         <div className="mb-5 flex flex-col gap-3 sm:mb-7 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
//           <div className="min-w-0">
//             <p className="mb-0.5 text-[10px] font-medium text-[#999] sm:mb-1 sm:text-xs">
//               Furniture / Dashboard
//             </p>
//             <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
//               Furniture ERP Dashboard
//             </h1>
//             <p className="mt-1 text-xs text-[#777] sm:text-sm">
//               Live overview of products, sales, payments and performance.
//             </p>
//           </div>

//           <select
//             value={period}
//             onChange={(e) => setPeriod(e.target.value)}
//             className="h-10 w-full shrink-0 rounded-lg border border-[#ddd] bg-white px-3 text-sm outline-none focus:border-[#176b5b] sm:w-auto sm:px-4"
//           >
//             <option>This Month</option>
//             <option>Last Month</option>
//             <option>Last 3 Months</option>
//             <option>This Year</option>
//           </select>
//         </div>

//         {/* KPI tiles */}
//         <section className="mb-4 sm:mb-6">
//           <div className="mb-2.5 flex items-center justify-between gap-2 sm:mb-3">
//             <h2 className="text-xs font-semibold text-[#444] sm:text-sm">
//               {kpiSectionTitle}
//             </h2>
//             {selectedBarKey && (
//               <button
//                 type="button"
//                 onClick={() => setSelectedBarKey(null)}
//                 className="text-[11px] font-semibold text-[#176b5b] hover:underline sm:text-xs"
//               >
//                 Clear · show Today
//               </button>
//             )}
//           </div>
//           <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-3 xl:grid-cols-6">
//             <MetricCard
//               title={selectedBarKey ? "Sales" : "Today's Sales"}
//               value={formatCurrency(kpiSales)}
//               subtitle={kpiSalesSubtitle}
//             />
//             <MetricCard
//               title="New Enquiries"
//               value={String(todayEnquiriesCount)}
//               subtitle="Today"
//             />
//             <MetricCard
//               title={selectedBarKey ? "Orders" : "New Orders"}
//               value={String(kpiOrdersCount)}
//               subtitle="Excl. cancelled"
//             />
//             <MetricCard
//               title="Expenses"
//               value={formatCurrency(kpiExpenses)}
//               subtitle={selectedBarKey ? "In selection" : "Recorded today"}
//             />
//             <MetricCard
//               title="Pending Payments"
//               value={formatCurrency(pendingPayments)}
//               subtitle="Outstanding"
//               warning
//             />
//             <MetricCard
//               title="Profit (Est.)"
//               value={formatCurrency(Math.max(0, kpiProfit))}
//               subtitle="Sales − cost − exp."
//             />
//           </div>
//         </section>

//         {/* Stock summary */}
//         <section className="mb-4 grid grid-cols-2 gap-2.5 sm:mb-6 sm:gap-4 lg:grid-cols-4">
//           <BigMetricCard
//             title="Total Products"
//             value={String(totalProducts)}
//             subtitle="Furniture products"
//             icon="P"
//           />
//           <BigMetricCard
//             title="In Stock"
//             value={String(inStock)}
//             subtitle="Available"
//             icon="I"
//           />
//           <BigMetricCard
//             title="Low Stock"
//             value={String(lowStock.length)}
//             subtitle="Need attention"
//             icon="!"
//             warning
//           />
//           <BigMetricCard
//             title="Out of Stock"
//             value={String(outOfStock.length)}
//             subtitle="Unavailable"
//             icon="O"
//           />
//         </section>

//         {/* Chart + performance */}
//         <section className="mb-4 grid grid-cols-1 gap-4 sm:mb-6 sm:gap-5 xl:grid-cols-3">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5 xl:col-span-2">
//             <div className="mb-3 flex items-start justify-between gap-2 sm:mb-4">
//               <div className="min-w-0">
//                 <h2 className="text-sm font-semibold sm:text-base">
//                   Sales Trend
//                 </h2>
//                 <p className="mt-0.5 text-[10px] text-[#999] sm:mt-1 sm:text-xs">
//                   {periodChartSubtitle(period)}
//                 </p>
//               </div>
//               <span className="shrink-0 rounded-full bg-[#eef7f4] px-2.5 py-1 text-[10px] font-semibold text-[#176b5b] sm:px-3 sm:text-xs">
//                 {period}
//               </span>
//             </div>
//             <SalesChart
//               data={salesData}
//               selectedKey={selectedBarKey}
//               onBarClick={handleBarClick}
//             />
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5">
//             <h2 className="text-sm font-semibold sm:text-base">
//               Business Performance
//             </h2>
//             <p className="mt-1 text-[10px] text-[#999] sm:text-xs">
//               {selectedBarKey ? "Bar filter: " : "Period: "}
//               <span className="font-semibold text-[#555]">
//                 {performanceLabel}
//               </span>
//               {" · "}
//               {focusOrders.length} order
//               {focusOrders.length !== 1 ? "s" : ""}
//             </p>
//             <div className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
//               <FinancialRow
//                 label="Total Sales"
//                 value={formatCurrency(totalSales)}
//               />
//               <FinancialRow
//                 label="Paid sales"
//                 value={formatCurrency(paidSales)}
//               />
//               <FinancialRow
//                 label="Product cost"
//                 value={formatCurrency(productCost)}
//               />
//               <FinancialRow
//                 label="Expenses"
//                 value={formatCurrency(focusExpenses)}
//               />
//               <div className="border-t border-[#eee] pt-3 sm:pt-4">
//                 <FinancialRow
//                   label="Est. profit"
//                   value={formatCurrency(Math.max(0, estimatedProfit))}
//                   strong
//                 />
//                 <p className="mt-1 text-[10px] text-[#aaa] sm:text-[11px]">
//                   Paid-only:{" "}
//                   {formatCurrency(Math.max(0, paidEstimatedProfit))}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Top products + sources */}
//         <section className="mb-4 grid grid-cols-1 gap-4 sm:mb-6 sm:gap-5 xl:grid-cols-3">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5 xl:col-span-2">
//             <div className="mb-1 flex items-center justify-between gap-2">
//               <h2 className="text-sm font-semibold sm:text-base">
//                 Top Products
//               </h2>
//               <span className="rounded-full bg-[#eef7f4] px-2.5 py-1 text-[10px] font-semibold text-[#176b5b] sm:px-3 sm:text-xs">
//                 {performanceLabel}
//               </span>
//             </div>
//             <p className="text-[10px] text-[#999] sm:text-xs">
//               By revenue in selected view
//             </p>
//             <div className="mt-3 -mx-1 overflow-x-auto sm:mt-4 sm:mx-0">
//               <table className="w-full min-w-[420px]">
//                 <thead>
//                   <tr className="border-b border-[#eee] text-left">
//                     <th className="pb-2.5 pl-1 text-[10px] font-semibold text-[#999] sm:pb-3 sm:text-xs">
//                       Product
//                     </th>
//                     <th className="pb-2.5 text-[10px] font-semibold text-[#999] sm:pb-3 sm:text-xs">
//                       Category
//                     </th>
//                     <th className="pb-2.5 text-center text-[10px] font-semibold text-[#999] sm:pb-3 sm:text-xs">
//                       Sales
//                     </th>
//                     <th className="pb-2.5 pr-1 text-right text-[10px] font-semibold text-[#999] sm:pb-3 sm:text-xs">
//                       Revenue
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {topProducts.map((product, index) => (
//                     <tr
//                       key={product.code}
//                       className="border-b border-[#f0efeb] last:border-0"
//                     >
//                       <td className="py-2.5 pl-1 sm:py-3">
//                         <div className="flex items-center gap-2 sm:gap-3">
//                           <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#f2f3ef] text-[10px] font-semibold text-[#176b5b] sm:h-8 sm:w-8 sm:text-xs">
//                             {index + 1}
//                           </div>
//                           <div className="min-w-0">
//                             <p className="truncate text-xs font-medium sm:text-sm">
//                               {product.name}
//                             </p>
//                             <p className="truncate text-[10px] text-[#aaa] sm:text-[11px]">
//                               {product.code}
//                             </p>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="py-2.5 text-xs text-[#666] sm:py-3 sm:text-sm">
//                         {product.category || "—"}
//                       </td>
//                       <td className="py-2.5 text-center text-xs font-medium sm:py-3 sm:text-sm">
//                         {product.sales}
//                       </td>
//                       <td className="py-2.5 pr-1 text-right text-xs font-semibold sm:py-3 sm:text-sm">
//                         {formatCurrency(product.revenue)}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5">
//             <div className="mb-1 flex items-center justify-between gap-2">
//               <h2 className="text-sm font-semibold sm:text-base">
//                 Order Sources
//               </h2>
//               <span className="rounded-full bg-[#eef7f4] px-2.5 py-1 text-[10px] font-semibold text-[#176b5b] sm:px-3 sm:text-xs">
//                 {performanceLabel}
//               </span>
//             </div>
//             <p className="text-[10px] text-[#999] sm:text-xs">
//               Share of orders in view
//             </p>
//             <div className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
//               {sourceData.map((s) => (
//                 <div key={s.name}>
//                   <div className="mb-1 flex justify-between text-[10px] sm:text-xs">
//                     <span className="text-[#666]">{s.name}</span>
//                     <span className="font-semibold text-[#444]">
//                       {s.value}%
//                     </span>
//                   </div>
//                   <div className="h-1.5 overflow-hidden rounded-full bg-[#f0eee7] sm:h-2">
//                     <div
//                       className="h-full rounded-full bg-[#176b5b]"
//                       style={{ width: `${s.value}%` }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Attention */}
//         <section className="mb-4 rounded-xl border border-[#e4e2da] bg-white shadow-sm sm:mb-6">
//           <div className="flex flex-col gap-3 border-b border-[#eee] p-3.5 sm:gap-4 sm:p-5 md:flex-row md:items-center md:justify-between">
//             <div>
//               <h2 className="text-sm font-semibold sm:text-base">
//                 Attention Needed
//               </h2>
//               <p className="mt-0.5 text-[10px] text-[#999] sm:mt-1 sm:text-xs">
//                 Items that may need action.
//               </p>
//             </div>
//             <div className="flex flex-wrap gap-1.5 sm:gap-2">
//               {["All", "Ageing", "Low Stock", "Payment"].map((filter) => (
//                 <button
//                   key={filter}
//                   type="button"
//                   onClick={() => setAttentionFilter(filter)}
//                   className={`min-h-[32px] rounded-full px-2.5 py-1.5 text-[10px] font-medium transition sm:min-h-0 sm:px-3 sm:text-xs ${
//                     attentionFilter === filter
//                       ? "bg-[#176b5b] text-white"
//                       : "bg-[#f3f3f0] text-[#666] hover:bg-[#e9e9e5]"
//                   }`}
//                 >
//                   {filter}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="divide-y divide-[#eee]">
//             {filteredAttention.map((item) => (
//               <div
//                 key={`${item.type}-${item.id}`}
//                 className="flex flex-col gap-3 p-3.5 transition hover:bg-[#fafbf9] sm:gap-4 sm:p-5 md:flex-row md:items-center md:justify-between"
//               >
//                 <div className="flex items-start gap-3 sm:gap-4">
//                   <AttentionIcon type={item.type} />
//                   <div className="min-w-0">
//                     <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
//                       <h3 className="text-xs font-semibold sm:text-sm">
//                         {item.title}
//                       </h3>
//                       <span
//                         className={`rounded-full px-2 py-0.5 text-[9px] font-medium sm:text-[10px] ${
//                           item.priority === "High"
//                             ? "bg-red-50 text-red-600"
//                             : "bg-orange-50 text-orange-600"
//                         }`}
//                       >
//                         {item.priority}
//                       </span>
//                     </div>
//                     <p className="mt-1 text-[11px] text-[#777] sm:text-xs">
//                       {item.description}
//                     </p>
//                     <p className="mt-0.5 text-[10px] text-[#aaa] sm:mt-1 sm:text-[11px]">
//                       Ref: {item.id}
//                     </p>
//                   </div>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => item.href && router.push(item.href)}
//                   className="min-h-[40px] w-full rounded-lg border border-[#ddd] px-4 py-2 text-xs font-semibold text-[#555] hover:border-[#176b5b] hover:text-[#176b5b] md:w-auto md:min-h-0"
//                 >
//                   Open Record
//                 </button>
//               </div>
//             ))}

//             {filteredAttention.length === 0 && (
//               <div className="p-8 text-center sm:p-10">
//                 <p className="text-sm font-medium text-[#555]">
//                   No attention items
//                 </p>
//                 <p className="mt-1 text-xs text-[#999]">
//                   There are no items in this category.
//                 </p>
//               </div>
//             )}
//           </div>
//         </section>

//         {/* Quick links */}
//         <section>
//           <h2 className="mb-2.5 text-xs font-semibold text-[#444] sm:mb-3 sm:text-sm">
//             Quick access
//           </h2>
//           <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
//             <QuickLink title="Orders" href="/furniture/orders" />
//             <QuickLink title="Products" href="/furniture/products" />
//             <QuickLink title="Enquiries" href="/furniture/enquiries" />
//             <QuickLink title="Payments" href="/furniture/payments" />
//             <QuickLink title="Inventory" href="/furniture/inventory" />
//             <QuickLink title="Reports" href="/furniture/reports" />
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// function MetricCard({
//   title,
//   value,
//   subtitle,
//   warning = false,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   warning?: boolean;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-3 shadow-sm sm:p-5">
//       <p className="text-[10px] font-medium text-[#999] sm:text-xs">{title}</p>
//       <p
//         className={`mt-1.5 text-lg font-semibold sm:mt-2 sm:text-2xl ${
//           warning ? "text-[#b46b17]" : "text-[#222]"
//         }`}
//       >
//         {value}
//       </p>
//       <p className="mt-0.5 text-[10px] text-[#aaa] sm:mt-1 sm:text-xs">
//         {subtitle}
//       </p>
//     </div>
//   );
// }

// function BigMetricCard({
//   title,
//   value,
//   subtitle,
//   icon,
//   warning = false,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   icon: string;
//   warning?: boolean;
// }) {
//   return (
//     <div className="flex items-center justify-between gap-2 rounded-xl border border-[#e4e2da] bg-white p-3 shadow-sm sm:p-5">
//       <div className="min-w-0">
//         <p className="text-[10px] font-medium text-[#999] sm:text-xs">
//           {title}
//         </p>
//         <p
//           className={`mt-1.5 text-lg font-semibold sm:mt-2 sm:text-2xl ${
//             warning ? "text-[#b46b17]" : "text-[#222]"
//           }`}
//         >
//           {value}
//         </p>
//         <p className="mt-0.5 text-[10px] text-[#aaa] sm:mt-1 sm:text-xs">
//           {subtitle}
//         </p>
//       </div>
//       <div
//         className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold sm:h-11 sm:w-11 sm:text-sm ${
//           warning
//             ? "bg-[#fff4df] text-[#b46b17]"
//             : "bg-[#e8f2ee] text-[#176b5b]"
//         }`}
//       >
//         {icon}
//       </div>
//     </div>
//   );
// }

// function SalesChart({
//   data,
//   selectedKey,
//   onBarClick,
// }: {
//   data: Sale[];
//   selectedKey: string | null;
//   onBarClick: (key: string) => void;
// }) {
//   const max = Math.max(...data.map((item) => item.sales), 1);
//   return (
//     <div className="-mx-1 overflow-x-auto sm:mx-0">
//       <div className="flex h-[200px] min-w-[280px] items-end gap-1.5 border-b border-l border-[#eee] px-1.5 pb-0 pt-4 sm:h-[250px] sm:gap-3 sm:px-4 sm:pt-5">
//         {data.map((item, i) => {
//           const height = Math.max(8, (item.sales / max) * 160);
//           const selected = selectedKey === item.key;
//           return (
//             <button
//               key={`${item.key}-${i}`}
//               type="button"
//               onClick={() => onBarClick(item.key)}
//               className="flex h-full min-w-0 flex-1 flex-col items-center justify-end rounded-t-md outline-none transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#176b5b]"
//               title={`${item.month}: ${formatCurrency(item.sales)}`}
//             >
//               <div className="mb-0.5 max-w-full truncate text-[8px] text-[#888] sm:mb-1 sm:text-[10px]">
//                 {item.sales > 0 ? formatCurrency(item.sales) : ""}
//               </div>
//               <div
//                 className={`w-full max-w-[36px] rounded-t-md transition sm:max-w-[40px] ${
//                   selected
//                     ? "bg-[#0f4f42] ring-2 ring-[#176b5b] ring-offset-1"
//                     : "bg-[#176b5b] hover:bg-[#125849]"
//                 }`}
//                 style={{
//                   height: `${Math.max(
//                     8,
//                     (item.sales / max) * (typeof window !== "undefined" && window.innerWidth < 640 ? 140 : 190)
//                   )}px`,
//                 }}
//               />
//               <div
//                 className={`mt-1.5 max-w-full truncate text-[9px] sm:mt-2 sm:text-xs ${
//                   selected
//                     ? "font-semibold text-[#176b5b]"
//                     : "text-[#888]"
//                 }`}
//               >
//                 {item.month}
//               </div>
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// function FinancialRow({
//   label,
//   value,
//   strong = false,
// }: {
//   label: string;
//   value: string;
//   strong?: boolean;
// }) {
//   return (
//     <div className="flex items-center justify-between gap-3">
//       <span
//         className={`text-xs sm:text-sm ${
//           strong ? "font-semibold text-[#333]" : "text-[#777]"
//         }`}
//       >
//         {label}
//       </span>
//       <span
//         className={`shrink-0 text-xs sm:text-sm ${
//           strong
//             ? "font-semibold text-[#176b5b]"
//             : "font-medium text-[#444]"
//         }`}
//       >
//         {value}
//       </span>
//     </div>
//   );
// }

// function AttentionIcon({ type }: { type: AttentionItem["type"] }) {
//   let content = "!";
//   if (type === "Payment") content = "₹";
//   if (type === "Ageing") content = "⏱";
//   return (
//     <div
//       className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold sm:h-10 sm:w-10 sm:text-sm ${
//         type === "Payment"
//           ? "bg-[#fff4df] text-[#b46b17]"
//           : type === "Low Stock"
//             ? "bg-red-50 text-red-600"
//             : "bg-[#eef1ff] text-[#5a65a8]"
//       }`}
//     >
//       {content}
//     </div>
//   );
// }

// function QuickLink({ title, href }: { title: string; href: string }) {
//   return (
//     <Link
//       href={href}
//       className="flex min-h-[44px] items-center justify-center rounded-xl border border-[#e4e2da] bg-white px-3 py-3 text-center text-xs font-medium text-[#555] shadow-sm transition hover:-translate-y-0.5 hover:border-[#176b5b] hover:text-[#176b5b] sm:min-h-0 sm:px-4 sm:py-4 sm:text-sm"
//     >
//       {title}
//     </Link>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import {
//   getAllProducts,
//   getLowStockProducts,
//   getOutOfStockProducts,
//   getAgeingProducts,
//   type FurnitureProduct,
// } from "@/modules/furniture/services/productService";
// import {
//   getAllOrders,
//   type FurnitureOrder,
// } from "@/modules/furniture/services/orderService";
// import { getTodayEnquiries } from "@/modules/furniture/services/enquiryService";
// import {
//   getTodayExpenses,
//   getExpensesInRange,
// } from "@/modules/furniture/services/expenseService";

// type Sale = {
//   month: string;
//   sales: number;
//   key: string;
//   sort: number;
// };

// type AttentionItem = {
//   id: string;
//   title: string;
//   description: string;
//   type: "Ageing" | "Low Stock" | "Payment";
//   priority: "High" | "Medium";
//   href?: string;
// };

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function sumByAmount(items: { amount?: number }[]): number {
//   return items.reduce((sum: number, item) => sum + (item.amount || 0), 0);
// }

// function getPeriodRange(period: string): { start: Date; end: Date } {
//   const now = new Date();
//   const end = new Date(now);
//   end.setHours(23, 59, 59, 999);

//   const start = new Date(now);

//   if (period === "This Month") {
//     start.setDate(1);
//     start.setHours(0, 0, 0, 0);
//   } else if (period === "Last Month") {
//     start.setMonth(start.getMonth() - 1, 1);
//     start.setHours(0, 0, 0, 0);
//     end.setDate(0);
//     end.setHours(23, 59, 59, 999);
//   } else if (period === "Last 3 Months") {
//     start.setMonth(start.getMonth() - 2, 1);
//     start.setHours(0, 0, 0, 0);
//   } else {
//     start.setMonth(0, 1);
//     start.setHours(0, 0, 0, 0);
//   }

//   return { start, end };
// }

// function isActiveOrder(o: FurnitureOrder) {
//   const s = String(o.status || o.orderStatus || "").toLowerCase();
//   return s !== "cancelled";
// }

// function orderRevenue(o: FurnitureOrder) {
//   return Number(o.total ?? o.amount ?? o.totalAmount ?? 0) || 0;
// }

// function localDateKey(d: Date): string {
//   const y = d.getFullYear();
//   const m = String(d.getMonth() + 1).padStart(2, "0");
//   const day = String(d.getDate()).padStart(2, "0");
//   return `${y}-${m}-${day}`;
// }

// function orderTimeMs(o: FurnitureOrder): number {
//   const ts = o.createdAt?.toMillis?.();
//   if (ts && ts > 0) return ts;

//   const no = String(
//     (o as { orderNo?: string; orderNumber?: string }).orderNo ||
//       (o as { orderNumber?: string }).orderNumber ||
//       o.id ||
//       ""
//   );
//   const m = no.match(/(\d{4})(\d{2})(\d{2})/);
//   if (m) {
//     const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 12, 0, 0);
//     if (!Number.isNaN(d.getTime())) return d.getTime();
//   }

//   const raw = String(
//     (o as { orderDate?: string }).orderDate || o.deliveryDate || ""
//   );
//   if (raw) {
//     const d = new Date(raw.includes("T") ? raw : `${raw}T12:00:00`);
//     if (!Number.isNaN(d.getTime())) return d.getTime();
//   }

//   return 0;
// }

// function isSameCalendarDay(ms: number, ref: Date = new Date()): boolean {
//   if (!ms) return false;
//   const d = new Date(ms);
//   return (
//     d.getFullYear() === ref.getFullYear() &&
//     d.getMonth() === ref.getMonth() &&
//     d.getDate() === ref.getDate()
//   );
// }

// function buildSalesTrend(orders: FurnitureOrder[], period: string): Sale[] {
//   const { start, end } = getPeriodRange(period);
//   const startMs = start.getTime();
//   const endMs = end.getTime();

//   const inPeriod = orders.filter((o) => {
//     if (!isActiveOrder(o)) return false;
//     const t = orderTimeMs(o);
//     return t >= startMs && t <= endMs;
//   });

//   if (period === "Last 3 Months" || period === "This Year") {
//     const buckets = new Map<
//       string,
//       { label: string; sales: number; sort: number; key: string }
//     >();

//     const cursor = new Date(start.getFullYear(), start.getMonth(), 1);
//     const endMonth = new Date(end.getFullYear(), end.getMonth(), 1);

//     while (cursor <= endMonth) {
//       const key = `${cursor.getFullYear()}-${cursor.getMonth()}`;
//       buckets.set(key, {
//         label: cursor.toLocaleString("en-IN", { month: "short" }),
//         sales: 0,
//         sort: cursor.getTime(),
//         key,
//       });
//       cursor.setMonth(cursor.getMonth() + 1);
//     }

//     inPeriod.forEach((o) => {
//       const d = new Date(orderTimeMs(o));
//       const key = `${d.getFullYear()}-${d.getMonth()}`;
//       const b = buckets.get(key);
//       if (b) b.sales += orderRevenue(o);
//     });

//     return Array.from(buckets.values())
//       .sort((a, b) => a.sort - b.sort)
//       .map((b) => ({
//         month: b.label,
//         sales: b.sales,
//         key: b.key,
//         sort: b.sort,
//       }));
//   }

//   const dayBuckets = new Map<
//     string,
//     { label: string; sales: number; sort: number; key: string }
//   >();

//   const dayCursor = new Date(
//     start.getFullYear(),
//     start.getMonth(),
//     start.getDate()
//   );
//   const dayEnd = new Date(end.getFullYear(), end.getMonth(), end.getDate());

//   while (dayCursor <= dayEnd) {
//     const key = localDateKey(dayCursor);
//     dayBuckets.set(key, {
//       label: String(dayCursor.getDate()),
//       sales: 0,
//       sort: dayCursor.getTime(),
//       key,
//     });
//     dayCursor.setDate(dayCursor.getDate() + 1);
//   }

//   inPeriod.forEach((o) => {
//     const t = orderTimeMs(o);
//     if (!t) return;
//     const key = localDateKey(new Date(t));
//     const b = dayBuckets.get(key);
//     if (b) b.sales += orderRevenue(o);
//   });

//   const days = Array.from(dayBuckets.values()).sort((a, b) => a.sort - b.sort);

//   if (days.length > 16) {
//     const weeks: Sale[] = [];
//     for (let i = 0; i < days.length; i += 7) {
//       const slice = days.slice(i, i + 7);
//       const sales = slice.reduce((s, d) => s + d.sales, 0);
//       const from = new Date(slice[0].sort).getDate();
//       const to = new Date(slice[slice.length - 1].sort).getDate();
//       weeks.push({
//         month: `${from}–${to}`,
//         sales,
//         key: `week-${slice[0].key}-${slice[slice.length - 1].key}`,
//         sort: slice[0].sort,
//       });
//     }
//     return weeks;
//   }

//   return days.map((d) => ({
//     month: d.label,
//     sales: d.sales,
//     key: d.key,
//     sort: d.sort,
//   }));
// }

// function periodChartSubtitle(period: string): string {
//   switch (period) {
//     case "This Month":
//       return "Daily sales · tap a bar to filter";
//     case "Last Month":
//       return "Daily sales · tap a bar to filter";
//     case "Last 3 Months":
//       return "Monthly sales · tap a bar to filter";
//     case "This Year":
//       return "Monthly sales · tap a bar to filter";
//     default:
//       return "Sales for selected period";
//   }
// }

// function ordersForBarKey(
//   orders: FurnitureOrder[],
//   key: string,
//   period: string
// ): FurnitureOrder[] {
//   if (!key) return [];

//   if (key.startsWith("week-")) {
//     const match = key.match(
//       /^week-(\d{4}-\d{2}-\d{2})-(\d{4}-\d{2}-\d{2})$/
//     );
//     if (match) {
//       const start = new Date(`${match[1]}T00:00:00`).getTime();
//       const end = new Date(`${match[2]}T23:59:59`).getTime();
//       return orders.filter((o) => {
//         if (!isActiveOrder(o)) return false;
//         const t = orderTimeMs(o);
//         return t >= start && t <= end;
//       });
//     }
//   }

//   if (period === "Last 3 Months" || period === "This Year") {
//     const [y, m] = key.split("-").map(Number);
//     if (!Number.isNaN(y) && !Number.isNaN(m)) {
//       return orders.filter((o) => {
//         if (!isActiveOrder(o)) return false;
//         const d = new Date(orderTimeMs(o));
//         return d.getFullYear() === y && d.getMonth() === m;
//       });
//     }
//   }

//   if (/^\d{4}-\d{2}-\d{2}$/.test(key)) {
//     return orders.filter((o) => {
//       if (!isActiveOrder(o)) return false;
//       return localDateKey(new Date(orderTimeMs(o))) === key;
//     });
//   }

//   return [];
// }

// function formatBarLabel(key: string, label: string, period: string): string {
//   if (/^\d{4}-\d{2}-\d{2}$/.test(key)) {
//     const d = new Date(`${key}T12:00:00`);
//     return d.toLocaleDateString("en-IN", {
//       day: "numeric",
//       month: "short",
//       year: "numeric",
//     });
//   }
//   if (period === "Last 3 Months" || period === "This Year") {
//     return label || key;
//   }
//   return label || key;
// }

// export default function FurnitureDashboardPage() {
//   const router = useRouter();
//   const [period, setPeriod] = useState("This Month");
//   const [attentionFilter, setAttentionFilter] = useState("All");
//   const [loading, setLoading] = useState(true);
//   const [selectedBarKey, setSelectedBarKey] = useState<string | null>(null);

//   const [products, setProducts] = useState<FurnitureProduct[]>([]);
//   const [orders, setOrders] = useState<FurnitureOrder[]>([]);
//   const [todayEnquiriesCount, setTodayEnquiriesCount] = useState(0);
//   const [todayExpensesTotal, setTodayExpensesTotal] = useState(0);
//   const [periodExpensesTotal, setPeriodExpensesTotal] = useState(0);
//   const [lowStock, setLowStock] = useState<FurnitureProduct[]>([]);
//   const [outOfStock, setOutOfStock] = useState<FurnitureProduct[]>([]);
//   const [ageing, setAgeing] = useState<
//     (FurnitureProduct & { daysPublished: number })[]
//   >([]);

//   useEffect(() => {
//     setSelectedBarKey(null);
//   }, [period]);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const { start, end } = getPeriodRange(period);

//         const [
//           allProducts,
//           allOrders,
//           tEnquiries,
//           tExpenses,
//           pExpenses,
//           low,
//           out,
//           age,
//         ] = await Promise.all([
//           getAllProducts(),
//           getAllOrders(),
//           getTodayEnquiries(),
//           getTodayExpenses(),
//           getExpensesInRange(start, end),
//           getLowStockProducts(),
//           getOutOfStockProducts(),
//           getAgeingProducts(10),
//         ]);

//         if (cancelled) return;

//         setProducts(allProducts);
//         setOrders(allOrders);
//         setTodayEnquiriesCount(tEnquiries.length);
//         setTodayExpensesTotal(sumByAmount(tExpenses));
//         setPeriodExpensesTotal(sumByAmount(pExpenses));
//         setLowStock(low);
//         setOutOfStock(out);
//         setAgeing(age);
//       } catch (err) {
//         console.error("Dashboard load error:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, [period]);

//   const totalProducts = products.length;
//   const inStock = products.filter((p) => (p.stock ?? 0) > 0).length;

//   const costByProductId = useMemo(() => {
//     const map = new Map<string, number>();
//     products.forEach((p) => {
//       const cost = Number(p.costPrice ?? 0) || 0;
//       map.set(p.id, cost);
//       if (p.sku) map.set(String(p.sku), cost);
//       if (p.code) map.set(String(p.code), cost);
//     });
//     return map;
//   }, [products]);

//   function orderProductCost(o: FurnitureOrder): number {
//     const items = o.items || [];
//     if (items.length > 0) {
//       return items.reduce((sum, item) => {
//         const qty = Number(item.qty ?? item.quantity ?? 1) || 1;
//         const pid = String(item.productId || "");
//         if (pid && costByProductId.has(pid)) {
//           return sum + (costByProductId.get(pid) || 0) * qty;
//         }
//         const iname = String(item.name || "").toLowerCase().trim();
//         if (iname) {
//           const match = products.find(
//             (p) =>
//               p.name?.toLowerCase().trim() === iname && Number(p.costPrice) > 0
//           );
//           if (match) return sum + Number(match.costPrice) * qty;
//         }
//         return sum;
//       }, 0);
//     }

//     const name = (o.product || o.productName || "").toLowerCase().trim();
//     if (!name) return 0;
//     const match = products.find(
//       (p) => p.name?.toLowerCase().trim() === name && Number(p.costPrice) > 0
//     );
//     if (!match) return 0;
//     return Number(match.costPrice) * (Number(o.quantity) || 1);
//   }

//   const periodOrders = useMemo(() => {
//     const { start, end } = getPeriodRange(period);
//     const startMs = start.getTime();
//     const endMs = end.getTime();
//     return orders.filter((o) => {
//       if (!isActiveOrder(o)) return false;
//       const t = orderTimeMs(o);
//       if (!t) return false;
//       return t >= startMs && t <= endMs;
//     });
//   }, [orders, period]);

//   const focusOrders = useMemo(() => {
//     if (!selectedBarKey) return periodOrders;
//     return ordersForBarKey(orders, selectedBarKey, period);
//   }, [orders, selectedBarKey, period, periodOrders]);

//   const activeTodayOrders = useMemo(
//     () =>
//       orders.filter(
//         (o) => isActiveOrder(o) && isSameCalendarDay(orderTimeMs(o))
//       ),
//     [orders]
//   );

//   const focusPaidOrders = useMemo(
//     () =>
//       focusOrders.filter((o) => {
//         const ps = String(o.paymentStatus || "").toLowerCase();
//         return ps === "paid" || ps === "received";
//       }),
//     [focusOrders]
//   );

//   const totalSales = focusOrders.reduce((s, o) => s + orderRevenue(o), 0);
//   const todaySales = activeTodayOrders.reduce((s, o) => s + orderRevenue(o), 0);
//   const paidSales = focusPaidOrders.reduce((s, o) => s + orderRevenue(o), 0);

//   const pendingPayments = orders
//     .filter(
//       (o) =>
//         isActiveOrder(o) &&
//         (o.paymentStatus === "Pending" || o.paymentStatus === "Partial")
//     )
//     .reduce(
//       (s, o) => s + Math.max(0, orderRevenue(o) - Number(o.paid || 0)),
//       0
//     );

//   const productCost = focusOrders.reduce(
//     (sum, o) => sum + orderProductCost(o),
//     0
//   );
//   const paidProductCost = focusPaidOrders.reduce(
//     (sum, o) => sum + orderProductCost(o),
//     0
//   );
//   const todayProductCost = activeTodayOrders.reduce(
//     (sum, o) => sum + orderProductCost(o),
//     0
//   );

//   const focusExpenses = selectedBarKey ? 0 : periodExpensesTotal;

//   const estimatedProfit = totalSales - productCost - focusExpenses;
//   const paidEstimatedProfit = paidSales - paidProductCost - focusExpenses;
//   const todayEstimatedProfit =
//     todaySales - todayProductCost - todayExpensesTotal;

//   const salesData = useMemo(
//     () => buildSalesTrend(orders, period),
//     [orders, period]
//   );

//   const selectedBarMeta = useMemo(() => {
//     if (!selectedBarKey) return null;
//     return salesData.find((s) => s.key === selectedBarKey) || null;
//   }, [selectedBarKey, salesData]);

//   const kpiSales = selectedBarKey ? totalSales : todaySales;
//   const kpiOrdersCount = selectedBarKey
//     ? focusOrders.length
//     : activeTodayOrders.length;
//   const kpiProfit = selectedBarKey ? estimatedProfit : todayEstimatedProfit;
//   const kpiExpenses = selectedBarKey ? focusExpenses : todayExpensesTotal;
//   const kpiSalesSubtitle = selectedBarKey
//     ? `${focusOrders.length} order${focusOrders.length !== 1 ? "s" : ""}`
//     : `${activeTodayOrders.length} order${
//         activeTodayOrders.length !== 1 ? "s" : ""
//       }`;
//   const kpiSectionTitle = selectedBarKey
//     ? formatBarLabel(
//         selectedBarMeta?.key || selectedBarKey,
//         selectedBarMeta?.month || "",
//         period
//       )
//     : "Today";

//   const performanceLabel = selectedBarMeta
//     ? formatBarLabel(selectedBarMeta.key, selectedBarMeta.month, period)
//     : period;

//   const topProducts = useMemo(() => {
//     const map = new Map<
//       string,
//       { name: string; category: string; sales: number; revenue: number }
//     >();

//     focusOrders.forEach((o) => {
//       (o.items || []).forEach((item) => {
//         const key = item.productId || item.name || "unknown";
//         const existing = map.get(key) || {
//           name: item.name || "Item",
//           category: "",
//           sales: 0,
//           revenue: 0,
//         };
//         const qty = Number(item.qty ?? item.quantity ?? 1) || 1;
//         existing.sales += qty;
//         existing.revenue += qty * (Number(item.price) || 0);
//         map.set(key, existing);
//       });

//       if ((!o.items || o.items.length === 0) && (o.product || o.productName)) {
//         const name = o.product || o.productName || "Item";
//         const existing = map.get(name) || {
//           name,
//           category: o.category || "",
//           sales: 0,
//           revenue: 0,
//         };
//         existing.sales += Number(o.quantity) || 1;
//         existing.revenue += orderRevenue(o);
//         map.set(name, existing);
//       }
//     });

//     if (map.size === 0) {
//       return products.slice(0, 4).map((p) => ({
//         code: p.sku || p.id,
//         name: p.name,
//         category: p.category || "—",
//         sales: 0,
//         revenue: 0,
//       }));
//     }

//     return Array.from(map.entries())
//       .map(([code, v]) => ({ code, ...v }))
//       .sort((a, b) => b.revenue - a.revenue)
//       .slice(0, 4);
//   }, [focusOrders, products]);

//   const sourceData = useMemo(() => {
//     const counts: Record<string, number> = {};
//     focusOrders.forEach((o) => {
//       const src = (o.source || "Other").trim() || "Other";
//       counts[src] = (counts[src] || 0) + 1;
//     });
//     const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
//     const preferred = [
//       "Website",
//       "Instagram",
//       "WhatsApp",
//       "Referral",
//       "Walk-in",
//       "Other",
//     ];
//     return preferred.map((name) => ({
//       name,
//       value: Math.round(((counts[name] || 0) / total) * 100),
//     }));
//   }, [focusOrders]);

//   const attentionItems: AttentionItem[] = useMemo(() => {
//     const items: AttentionItem[] = [];

//     ageing.slice(0, 5).forEach((p) => {
//       items.push({
//         id: p.id,
//         title: p.name,
//         description: `Published for ${p.daysPublished} days without a confirmed sale.`,
//         type: "Ageing",
//         priority: p.daysPublished >= 15 ? "High" : "Medium",
//         href: `/furniture/products/${p.id}`,
//       });
//     });

//     lowStock.slice(0, 3).forEach((p) => {
//       items.push({
//         id: p.id,
//         title: p.name,
//         description: `Only ${p.stock} units remaining. Minimum stock level is ${
//           p.minStock ?? p.reorderLevel ?? 5
//         }.`,
//         type: "Low Stock",
//         priority: (p.stock ?? 0) <= 2 ? "High" : "Medium",
//         href: `/furniture/products/${p.id}`,
//       });
//     });

//     orders
//       .filter(
//         (o) =>
//           isActiveOrder(o) &&
//           (o.paymentStatus === "Pending" || o.paymentStatus === "Partial")
//       )
//       .slice(0, 3)
//       .forEach((o) => {
//         const due = Math.max(0, orderRevenue(o) - Number(o.paid || 0));
//         items.push({
//           id: o.id,
//           title: o.customerName || o.orderNo || "Customer",
//           description: `Payment of ${formatCurrency(due)} is pending.`,
//           type: "Payment",
//           priority: "High",
//           href: `/furniture/orders`,
//         });
//       });

//     return items;
//   }, [ageing, lowStock, orders]);

//   const filteredAttention = useMemo(() => {
//     if (attentionFilter === "All") return attentionItems;
//     return attentionItems.filter((item) => item.type === attentionFilter);
//   }, [attentionItems, attentionFilter]);

//   function handleBarClick(key: string) {
//     setSelectedBarKey((prev) => (prev === key ? null : key));
//   }

//   if (loading) {
//     return (
//       <div className="flex min-h-[50vh] items-center justify-center">
//         <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#242424]">
//       <main className="mx-auto max-w-[1500px] px-3 py-4 sm:px-5 sm:py-7 lg:px-8">
//         {/* Header + compact period filter */}
//         <div className="mb-5 flex flex-col gap-3 sm:mb-7 sm:flex-row sm:items-end sm:justify-between">
//           <div className="min-w-0">
//             <p className="mb-0.5 text-[10px] font-medium text-[#999] sm:text-xs">
//               Furniture / Dashboard
//             </p>
//             <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
//               Furniture ERP Dashboard
//             </h1>
//             <p className="mt-1 text-xs text-[#777] sm:text-sm">
//               Live overview of products, sales, payments and performance.
//             </p>
//           </div>

//           <select
//             value={period}
//             onChange={(e) => setPeriod(e.target.value)}
//             className="h-9 w-fit max-w-[11rem] shrink-0 rounded-lg border border-[#ddd] bg-white px-2.5 text-xs outline-none focus:border-[#176b5b] sm:text-sm"
//           >
//             <option>This Month</option>
//             <option>Last Month</option>
//             <option>Last 3 Months</option>
//             <option>This Year</option>
//           </select>
//         </div>

//         {/* KPI tiles — 3 per row */}
//         <section className="mb-4 sm:mb-6">
//           <div className="mb-2.5 flex items-center justify-between gap-2">
//             <h2 className="text-xs font-semibold text-[#444] sm:text-sm">
//               {kpiSectionTitle}
//             </h2>
//             {selectedBarKey && (
//               <button
//                 type="button"
//                 onClick={() => setSelectedBarKey(null)}
//                 className="text-[11px] font-semibold text-[#176b5b] hover:underline sm:text-xs"
//               >
//                 Clear · show Today
//               </button>
//             )}
//           </div>
//           <div className="grid grid-cols-3 gap-2 sm:gap-3 xl:grid-cols-6">
//             <MetricCard
//               title={selectedBarKey ? "Sales" : "Today's Sales"}
//               value={formatCurrency(kpiSales)}
//               subtitle={kpiSalesSubtitle}
//             />
//             <MetricCard
//               title="New Enquiries"
//               value={String(todayEnquiriesCount)}
//               subtitle="Today"
//             />
//             <MetricCard
//               title={selectedBarKey ? "Orders" : "New Orders"}
//               value={String(kpiOrdersCount)}
//               subtitle="Excl. cancelled"
//             />
//             <MetricCard
//               title="Expenses"
//               value={formatCurrency(kpiExpenses)}
//               subtitle={selectedBarKey ? "In selection" : "Recorded today"}
//             />
//             <MetricCard
//               title="Pending Payments"
//               value={formatCurrency(pendingPayments)}
//               subtitle="Outstanding"
//               warning
//             />
//             <MetricCard
//               title="Profit (Est.)"
//               value={formatCurrency(Math.max(0, kpiProfit))}
//               subtitle="Sales − cost − exp."
//             />
//           </div>
//         </section>

//         {/* Stock — 3 per row on mobile, 4 on lg */}
//         <section className="mb-4 grid grid-cols-3 gap-2 sm:mb-6 sm:gap-3 lg:grid-cols-4">
//           <BigMetricCard
//             title="Total Products"
//             value={String(totalProducts)}
//             subtitle="Furniture products"
//             icon="P"
//           />
//           <BigMetricCard
//             title="In Stock"
//             value={String(inStock)}
//             subtitle="Available"
//             icon="I"
//           />
//           <BigMetricCard
//             title="Low Stock"
//             value={String(lowStock.length)}
//             subtitle="Need attention"
//             icon="!"
//             warning
//           />
//           <BigMetricCard
//             title="Out of Stock"
//             value={String(outOfStock.length)}
//             subtitle="Unavailable"
//             icon="O"
//           />
//         </section>

//         {/* Chart + performance */}
//         <section className="mb-4 grid grid-cols-1 gap-4 sm:mb-6 sm:gap-5 xl:grid-cols-3">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5 xl:col-span-2">
//             <div className="mb-3 flex items-start justify-between gap-2 sm:mb-4">
//               <div className="min-w-0">
//                 <h2 className="text-sm font-semibold sm:text-base">
//                   Sales Trend
//                 </h2>
//                 <p className="mt-0.5 text-[10px] text-[#999] sm:text-xs">
//                   {periodChartSubtitle(period)}
//                 </p>
//               </div>
//               <span className="shrink-0 rounded-full bg-[#eef7f4] px-2.5 py-1 text-[10px] font-semibold text-[#176b5b] sm:text-xs">
//                 {period}
//               </span>
//             </div>
//             <SalesChart
//               data={salesData}
//               selectedKey={selectedBarKey}
//               onBarClick={handleBarClick}
//             />
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5">
//             <h2 className="text-sm font-semibold sm:text-base">
//               Business Performance
//             </h2>
//             <p className="mt-1 text-[10px] text-[#999] sm:text-xs">
//               {selectedBarKey ? "Bar filter: " : "Period: "}
//               <span className="font-semibold text-[#555]">
//                 {performanceLabel}
//               </span>
//               {" · "}
//               {focusOrders.length} order
//               {focusOrders.length !== 1 ? "s" : ""}
//             </p>
//             <div className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
//               <FinancialRow
//                 label="Total Sales"
//                 value={formatCurrency(totalSales)}
//               />
//               <FinancialRow
//                 label="Paid sales"
//                 value={formatCurrency(paidSales)}
//               />
//               <FinancialRow
//                 label="Product cost"
//                 value={formatCurrency(productCost)}
//               />
//               <FinancialRow
//                 label="Expenses"
//                 value={formatCurrency(focusExpenses)}
//               />
//               <div className="border-t border-[#eee] pt-3 sm:pt-4">
//                 <FinancialRow
//                   label="Est. profit"
//                   value={formatCurrency(Math.max(0, estimatedProfit))}
//                   strong
//                 />
//                 <p className="mt-1 text-[10px] text-[#aaa] sm:text-[11px]">
//                   Paid-only:{" "}
//                   {formatCurrency(Math.max(0, paidEstimatedProfit))}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Top products + sources */}
//         <section className="mb-4 grid grid-cols-1 gap-4 sm:mb-6 sm:gap-5 xl:grid-cols-3">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5 xl:col-span-2">
//             <div className="mb-1 flex items-center justify-between gap-2">
//               <h2 className="text-sm font-semibold sm:text-base">
//                 Top Products
//               </h2>
//               <span className="rounded-full bg-[#eef7f4] px-2.5 py-1 text-[10px] font-semibold text-[#176b5b] sm:text-xs">
//                 {performanceLabel}
//               </span>
//             </div>
//             <p className="text-[10px] text-[#999] sm:text-xs">
//               By revenue in selected view
//             </p>
//             <div className="mt-3 -mx-1 overflow-x-auto sm:mt-4 sm:mx-0">
//               <table className="w-full min-w-[420px]">
//                 <thead>
//                   <tr className="border-b border-[#eee] text-left">
//                     <th className="pb-2.5 pl-1 text-[10px] font-semibold text-[#999] sm:text-xs">
//                       Product
//                     </th>
//                     <th className="pb-2.5 text-[10px] font-semibold text-[#999] sm:text-xs">
//                       Category
//                     </th>
//                     <th className="pb-2.5 text-center text-[10px] font-semibold text-[#999] sm:text-xs">
//                       Sales
//                     </th>
//                     <th className="pb-2.5 pr-1 text-right text-[10px] font-semibold text-[#999] sm:text-xs">
//                       Revenue
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {topProducts.map((product, index) => (
//                     <tr
//                       key={product.code}
//                       className="border-b border-[#f0efeb] last:border-0"
//                     >
//                       <td className="py-2.5 pl-1 sm:py-3">
//                         <div className="flex items-center gap-2 sm:gap-3">
//                           <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#f2f3ef] text-[10px] font-semibold text-[#176b5b] sm:h-8 sm:w-8 sm:text-xs">
//                             {index + 1}
//                           </div>
//                           <div className="min-w-0">
//                             <p className="truncate text-xs font-medium sm:text-sm">
//                               {product.name}
//                             </p>
//                             <p className="truncate text-[10px] text-[#aaa]">
//                               {product.code}
//                             </p>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="py-2.5 text-xs text-[#666] sm:text-sm">
//                         {product.category || "—"}
//                       </td>
//                       <td className="py-2.5 text-center text-xs font-medium sm:text-sm">
//                         {product.sales}
//                       </td>
//                       <td className="py-2.5 pr-1 text-right text-xs font-semibold sm:text-sm">
//                         {formatCurrency(product.revenue)}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5">
//             <div className="mb-1 flex items-center justify-between gap-2">
//               <h2 className="text-sm font-semibold sm:text-base">
//                 Order Sources
//               </h2>
//               <span className="rounded-full bg-[#eef7f4] px-2.5 py-1 text-[10px] font-semibold text-[#176b5b] sm:text-xs">
//                 {performanceLabel}
//               </span>
//             </div>
//             <p className="text-[10px] text-[#999] sm:text-xs">
//               Share of orders in view
//             </p>
//             <div className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
//               {sourceData.map((s) => (
//                 <div key={s.name}>
//                   <div className="mb-1 flex justify-between text-[10px] sm:text-xs">
//                     <span className="text-[#666]">{s.name}</span>
//                     <span className="font-semibold text-[#444]">
//                       {s.value}%
//                     </span>
//                   </div>
//                   <div className="h-1.5 overflow-hidden rounded-full bg-[#f0eee7] sm:h-2">
//                     <div
//                       className="h-full rounded-full bg-[#176b5b]"
//                       style={{ width: `${s.value}%` }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Attention */}
//         <section className="mb-4 rounded-xl border border-[#e4e2da] bg-white shadow-sm sm:mb-6">
//           <div className="flex flex-col gap-3 border-b border-[#eee] p-3.5 sm:p-5 md:flex-row md:items-center md:justify-between">
//             <div>
//               <h2 className="text-sm font-semibold sm:text-base">
//                 Attention Needed
//               </h2>
//               <p className="mt-0.5 text-[10px] text-[#999] sm:text-xs">
//                 Items that may need action.
//               </p>
//             </div>
//             <div className="flex flex-wrap gap-1.5 sm:gap-2">
//               {["All", "Ageing", "Low Stock", "Payment"].map((filter) => (
//                 <button
//                   key={filter}
//                   type="button"
//                   onClick={() => setAttentionFilter(filter)}
//                   className={`min-h-[32px] rounded-full px-2.5 py-1.5 text-[10px] font-medium transition sm:text-xs ${
//                     attentionFilter === filter
//                       ? "bg-[#176b5b] text-white"
//                       : "bg-[#f3f3f0] text-[#666] hover:bg-[#e9e9e5]"
//                   }`}
//                 >
//                   {filter}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="divide-y divide-[#eee]">
//             {filteredAttention.map((item) => (
//               <div
//                 key={`${item.type}-${item.id}`}
//                 className="flex flex-col gap-3 p-3.5 transition hover:bg-[#fafbf9] sm:p-5 md:flex-row md:items-center md:justify-between"
//               >
//                 <div className="flex items-start gap-3 sm:gap-4">
//                   <AttentionIcon type={item.type} />
//                   <div className="min-w-0">
//                     <div className="flex flex-wrap items-center gap-1.5">
//                       <h3 className="text-xs font-semibold sm:text-sm">
//                         {item.title}
//                       </h3>
//                       <span
//                         className={`rounded-full px-2 py-0.5 text-[9px] font-medium sm:text-[10px] ${
//                           item.priority === "High"
//                             ? "bg-red-50 text-red-600"
//                             : "bg-orange-50 text-orange-600"
//                         }`}
//                       >
//                         {item.priority}
//                       </span>
//                     </div>
//                     <p className="mt-1 text-[11px] text-[#777] sm:text-xs">
//                       {item.description}
//                     </p>
//                     <p className="mt-0.5 text-[10px] text-[#aaa]">
//                       Ref: {item.id}
//                     </p>
//                   </div>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => item.href && router.push(item.href)}
//                   className="min-h-[40px] w-full rounded-lg border border-[#ddd] px-4 py-2 text-xs font-semibold text-[#555] hover:border-[#176b5b] hover:text-[#176b5b] md:w-auto md:min-h-0"
//                 >
//                   Open Record
//                 </button>
//               </div>
//             ))}

//             {filteredAttention.length === 0 && (
//               <div className="p-8 text-center sm:p-10">
//                 <p className="text-sm font-medium text-[#555]">
//                   No attention items
//                 </p>
//                 <p className="mt-1 text-xs text-[#999]">
//                   There are no items in this category.
//                 </p>
//               </div>
//             )}
//           </div>
//         </section>

//         {/* Quick links */}
//         <section>
//           <h2 className="mb-2.5 text-xs font-semibold text-[#444] sm:text-sm">
//             Quick access
//           </h2>
//           <div className="grid grid-cols-3 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
//             <QuickLink title="Orders" href="/furniture/orders" />
//             <QuickLink title="Products" href="/furniture/products" />
//             <QuickLink title="Enquiries" href="/furniture/enquiries" />
//             <QuickLink title="Payments" href="/furniture/payments" />
//             <QuickLink title="Inventory" href="/furniture/inventory" />
//             <QuickLink title="Reports" href="/furniture/reports" />
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// function MetricCard({
//   title,
//   value,
//   subtitle,
//   warning = false,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   warning?: boolean;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-2.5 shadow-sm sm:p-4">
//       <p className="truncate text-[9px] font-medium text-[#999] sm:text-xs">
//         {title}
//       </p>
//       <p
//         className={`mt-1 truncate text-sm font-semibold sm:mt-1.5 sm:text-xl ${
//           warning ? "text-[#b46b17]" : "text-[#222]"
//         }`}
//       >
//         {value}
//       </p>
//       <p className="mt-0.5 truncate text-[9px] text-[#aaa] sm:text-[10px]">
//         {subtitle}
//       </p>
//     </div>
//   );
// }

// function BigMetricCard({
//   title,
//   value,
//   subtitle,
//   icon,
//   warning = false,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   icon: string;
//   warning?: boolean;
// }) {
//   return (
//     <div className="flex items-center justify-between gap-1.5 rounded-xl border border-[#e4e2da] bg-white p-2.5 shadow-sm sm:p-4">
//       <div className="min-w-0">
//         <p className="truncate text-[9px] font-medium text-[#999] sm:text-xs">
//           {title}
//         </p>
//         <p
//           className={`mt-1 text-sm font-semibold sm:text-xl ${
//             warning ? "text-[#b46b17]" : "text-[#222]"
//           }`}
//         >
//           {value}
//         </p>
//         <p className="mt-0.5 truncate text-[9px] text-[#aaa] sm:text-[10px]">
//           {subtitle}
//         </p>
//       </div>
//       <div
//         className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold sm:h-10 sm:w-10 sm:rounded-xl sm:text-xs ${
//           warning
//             ? "bg-[#fff4df] text-[#b46b17]"
//             : "bg-[#e8f2ee] text-[#176b5b]"
//         }`}
//       >
//         {icon}
//       </div>
//     </div>
//   );
// }

// function SalesChart({
//   data,
//   selectedKey,
//   onBarClick,
// }: {
//   data: Sale[];
//   selectedKey: string | null;
//   onBarClick: (key: string) => void;
// }) {
//   const max = Math.max(...data.map((item) => item.sales), 1);
//   return (
//     <div className="-mx-1 overflow-x-auto sm:mx-0">
//       <div className="flex h-[200px] min-w-[280px] items-end gap-1.5 border-b border-l border-[#eee] px-1.5 pb-0 pt-4 sm:h-[250px] sm:gap-3 sm:px-4 sm:pt-5">
//         {data.map((item, i) => {
//           const height = Math.max(8, (item.sales / max) * 160);
//           const selected = selectedKey === item.key;
//           return (
//             <button
//               key={`${item.key}-${i}`}
//               type="button"
//               onClick={() => onBarClick(item.key)}
//               className="flex h-full min-w-0 flex-1 flex-col items-center justify-end rounded-t-md outline-none transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#176b5b]"
//               title={`${item.month}: ${formatCurrency(item.sales)}`}
//             >
//               <div className="mb-0.5 max-w-full truncate text-[8px] text-[#888] sm:text-[10px]">
//                 {item.sales > 0 ? formatCurrency(item.sales) : ""}
//               </div>
//               <div
//                 className={`w-full max-w-[36px] rounded-t-md transition sm:max-w-[40px] ${
//                   selected
//                     ? "bg-[#0f4f42] ring-2 ring-[#176b5b] ring-offset-1"
//                     : "bg-[#176b5b] hover:bg-[#125849]"
//                 }`}
//                 style={{ height: `${height}px` }}
//               />
//               <div
//                 className={`mt-1.5 max-w-full truncate text-[9px] sm:mt-2 sm:text-xs ${
//                   selected
//                     ? "font-semibold text-[#176b5b]"
//                     : "text-[#888]"
//                 }`}
//               >
//                 {item.month}
//               </div>
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// function FinancialRow({
//   label,
//   value,
//   strong = false,
// }: {
//   label: string;
//   value: string;
//   strong?: boolean;
// }) {
//   return (
//     <div className="flex items-center justify-between gap-3">
//       <span
//         className={`text-xs sm:text-sm ${
//           strong ? "font-semibold text-[#333]" : "text-[#777]"
//         }`}
//       >
//         {label}
//       </span>
//       <span
//         className={`shrink-0 text-xs sm:text-sm ${
//           strong
//             ? "font-semibold text-[#176b5b]"
//             : "font-medium text-[#444]"
//         }`}
//       >
//         {value}
//       </span>
//     </div>
//   );
// }

// function AttentionIcon({ type }: { type: AttentionItem["type"] }) {
//   let content = "!";
//   if (type === "Payment") content = "₹";
//   if (type === "Ageing") content = "⏱";
//   return (
//     <div
//       className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold sm:h-10 sm:w-10 sm:text-sm ${
//         type === "Payment"
//           ? "bg-[#fff4df] text-[#b46b17]"
//           : type === "Low Stock"
//             ? "bg-red-50 text-red-600"
//             : "bg-[#eef1ff] text-[#5a65a8]"
//       }`}
//     >
//       {content}
//     </div>
//   );
// }

// function QuickLink({ title, href }: { title: string; href: string }) {
//   return (
//     <Link
//       href={href}
//       className="flex min-h-[44px] items-center justify-center rounded-xl border border-[#e4e2da] bg-white px-2 py-3 text-center text-xs font-medium text-[#555] shadow-sm transition hover:-translate-y-0.5 hover:border-[#176b5b] hover:text-[#176b5b] sm:min-h-0 sm:px-4 sm:py-4 sm:text-sm"
//     >
//       {title}
//     </Link>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import {
//   getAllProducts,
//   getLowStockProducts,
//   getOutOfStockProducts,
//   getAgeingProducts,
//   type FurnitureProduct,
// } from "@/modules/furniture/services/productService";
// import {
//   getAllOrders,
//   type FurnitureOrder,
// } from "@/modules/furniture/services/orderService";
// import { getTodayEnquiries } from "@/modules/furniture/services/enquiryService";
// import {
//   getTodayExpenses,
//   getExpensesInRange,
// } from "@/modules/furniture/services/expenseService";

// type Sale = {
//   month: string;
//   sales: number;
//   key: string;
//   sort: number;
// };

// type AttentionItem = {
//   id: string;
//   title: string;
//   description: string;
//   type: "Ageing" | "Low Stock" | "Payment";
//   priority: "High" | "Medium";
//   href?: string;
// };

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function sumByAmount(items: { amount?: number }[]): number {
//   return items.reduce((sum: number, item) => sum + (item.amount || 0), 0);
// }

// function getPeriodRange(period: string): { start: Date; end: Date } {
//   const now = new Date();
//   const end = new Date(now);
//   end.setHours(23, 59, 59, 999);

//   const start = new Date(now);

//   if (period === "This Month") {
//     start.setDate(1);
//     start.setHours(0, 0, 0, 0);
//   } else if (period === "Last Month") {
//     start.setMonth(start.getMonth() - 1, 1);
//     start.setHours(0, 0, 0, 0);
//     end.setDate(0);
//     end.setHours(23, 59, 59, 999);
//   } else if (period === "Last 3 Months") {
//     start.setMonth(start.getMonth() - 2, 1);
//     start.setHours(0, 0, 0, 0);
//   } else {
//     start.setMonth(0, 1);
//     start.setHours(0, 0, 0, 0);
//   }

//   return { start, end };
// }

// function isActiveOrder(o: FurnitureOrder) {
//   const s = String(o.status || o.orderStatus || "").toLowerCase();
//   return s !== "cancelled";
// }

// function orderRevenue(o: FurnitureOrder) {
//   return Number(o.total ?? o.amount ?? o.totalAmount ?? 0) || 0;
// }

// function localDateKey(d: Date): string {
//   const y = d.getFullYear();
//   const m = String(d.getMonth() + 1).padStart(2, "0");
//   const day = String(d.getDate()).padStart(2, "0");
//   return `${y}-${m}-${day}`;
// }

// function orderTimeMs(o: FurnitureOrder): number {
//   const ts = o.createdAt?.toMillis?.();
//   if (ts && ts > 0) return ts;

//   const no = String(
//     (o as { orderNo?: string; orderNumber?: string }).orderNo ||
//       (o as { orderNumber?: string }).orderNumber ||
//       o.id ||
//       ""
//   );
//   const m = no.match(/(\d{4})(\d{2})(\d{2})/);
//   if (m) {
//     const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 12, 0, 0);
//     if (!Number.isNaN(d.getTime())) return d.getTime();
//   }

//   const raw = String(
//     (o as { orderDate?: string }).orderDate || o.deliveryDate || ""
//   );
//   if (raw) {
//     const d = new Date(raw.includes("T") ? raw : `${raw}T12:00:00`);
//     if (!Number.isNaN(d.getTime())) return d.getTime();
//   }

//   return 0;
// }

// function isSameCalendarDay(ms: number, ref: Date = new Date()): boolean {
//   if (!ms) return false;
//   const d = new Date(ms);
//   return (
//     d.getFullYear() === ref.getFullYear() &&
//     d.getMonth() === ref.getMonth() &&
//     d.getDate() === ref.getDate()
//   );
// }

// // function buildSalesTrend(orders: FurnitureOrder[], period: string): Sale[] {
// //   const { start, end } = getPeriodRange(period);
// //   const startMs = start.getTime();
// //   const endMs = end.getTime();

// //   const inPeriod = orders.filter((o) => {
// //     if (!isActiveOrder(o)) return false;
// //     const t = orderTimeMs(o);
// //     return t >= startMs && t <= endMs;
// //   });

// //   if (period === "Last 3 Months" || period === "This Year") {
// //     const buckets = new Map<
// //       string,
// //       { label: string; sales: number; sort: number; key: string }
// //     >();

// //     const cursor = new Date(start.getFullYear(), start.getMonth(), 1);
// //     const endMonth = new Date(end.getFullYear(), end.getMonth(), 1);

// //     while (cursor <= endMonth) {
// //       const key = `${cursor.getFullYear()}-${cursor.getMonth()}`;
// //       buckets.set(key, {
// //         label: cursor.toLocaleString("en-IN", { month: "short" }),
// //         sales: 0,
// //         sort: cursor.getTime(),
// //         key,
// //       });
// //       cursor.setMonth(cursor.getMonth() + 1);
// //     }

// //     inPeriod.forEach((o) => {
// //       const d = new Date(orderTimeMs(o));
// //       const key = `${d.getFullYear()}-${d.getMonth()}`;
// //       const b = buckets.get(key);
// //       if (b) b.sales += orderRevenue(o);
// //     });

// //     return Array.from(buckets.values())
// //       .sort((a, b) => a.sort - b.sort)
// //       .map((b) => ({
// //         month: b.label,
// //         sales: b.sales,
// //         key: b.key,
// //         sort: b.sort,
// //       }));
// //   }

// //   const dayBuckets = new Map<
// //     string,
// //     { label: string; sales: number; sort: number; key: string }
// //   >();

// //   const dayCursor = new Date(
// //     start.getFullYear(),
// //     start.getMonth(),
// //     start.getDate()
// //   );
// //   const dayEnd = new Date(end.getFullYear(), end.getMonth(), end.getDate());

// //   while (dayCursor <= dayEnd) {
// //     const key = localDateKey(dayCursor);
// //     dayBuckets.set(key, {
// //       label: String(dayCursor.getDate()),
// //       sales: 0,
// //       sort: dayCursor.getTime(),
// //       key,
// //     });
// //     dayCursor.setDate(dayCursor.getDate() + 1);
// //   }

// //   inPeriod.forEach((o) => {
// //     const t = orderTimeMs(o);
// //     if (!t) return;
// //     const key = localDateKey(new Date(t));
// //     const b = dayBuckets.get(key);
// //     if (b) b.sales += orderRevenue(o);
// //   });

// //   const days = Array.from(dayBuckets.values()).sort((a, b) => a.sort - b.sort);

// //   if (days.length > 16) {
// //     const weeks: Sale[] = [];
// //     for (let i = 0; i < days.length; i += 7) {
// //       const slice = days.slice(i, i + 7);
// //       const sales = slice.reduce((s, d) => s + d.sales, 0);
// //       const from = new Date(slice[0].sort).getDate();
// //       const to = new Date(slice[slice.length - 1].sort).getDate();
// //       weeks.push({
// //         month: `${from}–${to}`,
// //         sales,
// //         key: `week-${slice[0].key}-${slice[slice.length - 1].key}`,
// //         sort: slice[0].sort,
// //       });
// //     }
// //     return weeks;
// //   }

// //   return days.map((d) => ({
// //     month: d.label,
// //     sales: d.sales,
// //     key: d.key,
// //     sort: d.sort,
// //   }));
// // }


// function buildSalesTrend(orders: FurnitureOrder[], period: string): Sale[] {
//   const { start, end } = getPeriodRange(period);
//   const startMs = start.getTime();
//   const endMs = end.getTime();

//   const inPeriod = orders.filter((o) => {
//     if (!isActiveOrder(o)) return false;

//     const t = orderTimeMs(o);
//     return t >= startMs && t <= endMs;
//   });

//   // Last 3 Months and This Year: show monthly bars.
//   if (period === "Last 3 Months" || period === "This Year") {
//     const buckets = new Map<
//       string,
//       { label: string; sales: number; sort: number; key: string }
//     >();

//     const cursor = new Date(
//       start.getFullYear(),
//       start.getMonth(),
//       1
//     );
//     const endMonth = new Date(
//       end.getFullYear(),
//       end.getMonth(),
//       1
//     );

//     while (cursor <= endMonth) {
//       const year = cursor.getFullYear();
//       const monthIndex = cursor.getMonth();
//       const key = `${year}-${monthIndex}`;

//       buckets.set(key, {
//         label: cursor.toLocaleString("en-IN", {
//           month: "short",
//           year: "2-digit",
//         }),
//         sales: 0,
//         sort: cursor.getTime(),
//         key,
//       });

//       cursor.setMonth(cursor.getMonth() + 1);
//     }

//     inPeriod.forEach((o) => {
//       const t = orderTimeMs(o);
//       if (!t) return;

//       const d = new Date(t);
//       const key = `${d.getFullYear()}-${d.getMonth()}`;
//       const bucket = buckets.get(key);

//       if (bucket) {
//         bucket.sales += orderRevenue(o);
//       }
//     });

//     return Array.from(buckets.values())
//       .sort((a, b) => a.sort - b.sort)
//       .map((bucket) => ({
//         month: bucket.label,
//         sales: bucket.sales,
//         key: bucket.key,
//         sort: bucket.sort,
//       }));
//   }

//   // This Month and Last Month: show every calendar date.
//   const dayBuckets = new Map<
//     string,
//     { label: string; sales: number; sort: number; key: string }
//   >();

//   const dayCursor = new Date(
//     start.getFullYear(),
//     start.getMonth(),
//     start.getDate()
//   );

//   const dayEnd = new Date(
//     end.getFullYear(),
//     end.getMonth(),
//     end.getDate()
//   );

//   while (dayCursor <= dayEnd) {
//     const key = localDateKey(dayCursor);

//     dayBuckets.set(key, {
//       label: String(dayCursor.getDate()),
//       sales: 0,
//       sort: dayCursor.getTime(),
//       key,
//     });

//     dayCursor.setDate(dayCursor.getDate() + 1);
//   }

//   inPeriod.forEach((o) => {
//     const t = orderTimeMs(o);
//     if (!t) return;

//     const key = localDateKey(new Date(t));
//     const bucket = dayBuckets.get(key);

//     if (bucket) {
//       bucket.sales += orderRevenue(o);
//     }
//   });

//   return Array.from(dayBuckets.values())
//     .sort((a, b) => a.sort - b.sort)
//     .map((bucket) => ({
//       month: bucket.label,
//       sales: bucket.sales,
//       key: bucket.key,
//       sort: bucket.sort,
//     }));
// }


// function periodChartSubtitle(period: string): string {
//   switch (period) {
//     case "This Month":
//       return "Daily sales · tap a bar to filter";
//     case "Last Month":
//       return "Daily sales · tap a bar to filter";
//     case "Last 3 Months":
//       return "Monthly sales · tap a bar to filter";
//     case "This Year":
//       return "Monthly sales · tap a bar to filter";
//     default:
//       return "Sales for selected period";
//   }
// }

// function ordersForBarKey(
//   orders: FurnitureOrder[],
//   key: string,
//   period: string
// ): FurnitureOrder[] {
//   if (!key) return [];

//   if (key.startsWith("week-")) {
//     const match = key.match(
//       /^week-(\d{4}-\d{2}-\d{2})-(\d{4}-\d{2}-\d{2})$/
//     );
//     if (match) {
//       const start = new Date(`${match[1]}T00:00:00`).getTime();
//       const end = new Date(`${match[2]}T23:59:59`).getTime();
//       return orders.filter((o) => {
//         if (!isActiveOrder(o)) return false;
//         const t = orderTimeMs(o);
//         return t >= start && t <= end;
//       });
//     }
//   }

//   if (period === "Last 3 Months" || period === "This Year") {
//     const [y, m] = key.split("-").map(Number);
//     if (!Number.isNaN(y) && !Number.isNaN(m)) {
//       return orders.filter((o) => {
//         if (!isActiveOrder(o)) return false;
//         const d = new Date(orderTimeMs(o));
//         return d.getFullYear() === y && d.getMonth() === m;
//       });
//     }
//   }

//   if (/^\d{4}-\d{2}-\d{2}$/.test(key)) {
//     return orders.filter((o) => {
//       if (!isActiveOrder(o)) return false;
//       return localDateKey(new Date(orderTimeMs(o))) === key;
//     });
//   }

//   return [];
// }

// function formatBarLabel(key: string, label: string, period: string): string {
//   if (/^\d{4}-\d{2}-\d{2}$/.test(key)) {
//     const d = new Date(`${key}T12:00:00`);
//     return d.toLocaleDateString("en-IN", {
//       day: "numeric",
//       month: "short",
//       year: "numeric",
//     });
//   }
//   if (period === "Last 3 Months" || period === "This Year") {
//     return label || key;
//   }
//   return label || key;
// }

// export default function FurnitureDashboardPage() {
//   const router = useRouter();
//   const [period, setPeriod] = useState("This Month");
//   const [attentionFilter, setAttentionFilter] = useState("All");
//   const [loading, setLoading] = useState(true);
//   const [selectedBarKey, setSelectedBarKey] = useState<string | null>(null);

//   const [products, setProducts] = useState<FurnitureProduct[]>([]);
//   const [orders, setOrders] = useState<FurnitureOrder[]>([]);
//   const [todayEnquiriesCount, setTodayEnquiriesCount] = useState(0);
//   const [todayExpensesTotal, setTodayExpensesTotal] = useState(0);
//   const [periodExpensesTotal, setPeriodExpensesTotal] = useState(0);
//   const [lowStock, setLowStock] = useState<FurnitureProduct[]>([]);
//   const [outOfStock, setOutOfStock] = useState<FurnitureProduct[]>([]);
//   const [ageing, setAgeing] = useState<
//     (FurnitureProduct & { daysPublished: number })[]
//   >([]);

//   useEffect(() => {
//     setSelectedBarKey(null);
//   }, [period]);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const { start, end } = getPeriodRange(period);

//         const [
//           allProducts,
//           allOrders,
//           tEnquiries,
//           tExpenses,
//           pExpenses,
//           low,
//           out,
//           age,
//         ] = await Promise.all([
//           getAllProducts(),
//           getAllOrders(),
//           getTodayEnquiries(),
//           getTodayExpenses(),
//           getExpensesInRange(start, end),
//           getLowStockProducts(),
//           getOutOfStockProducts(),
//           getAgeingProducts(10),
//         ]);

//         if (cancelled) return;

//         setProducts(allProducts);
//         setOrders(allOrders);
//         setTodayEnquiriesCount(tEnquiries.length);
//         setTodayExpensesTotal(sumByAmount(tExpenses));
//         setPeriodExpensesTotal(sumByAmount(pExpenses));
//         setLowStock(low);
//         setOutOfStock(out);
//         setAgeing(age);
//       } catch (err) {
//         console.error("Dashboard load error:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, [period]);

//   const totalProducts = products.length;
//   const inStock = products.filter((p) => (p.stock ?? 0) > 0).length;

//   const costByProductId = useMemo(() => {
//     const map = new Map<string, number>();
//     products.forEach((p) => {
//       const cost = Number(p.costPrice ?? 0) || 0;
//       map.set(p.id, cost);
//       if (p.sku) map.set(String(p.sku), cost);
//       if (p.code) map.set(String(p.code), cost);
//     });
//     return map;
//   }, [products]);

//   function orderProductCost(o: FurnitureOrder): number {
//     const items = o.items || [];
//     if (items.length > 0) {
//       return items.reduce((sum, item) => {
//         const qty = Number(item.qty ?? item.quantity ?? 1) || 1;
//         const pid = String(item.productId || "");
//         if (pid && costByProductId.has(pid)) {
//           return sum + (costByProductId.get(pid) || 0) * qty;
//         }
//         const iname = String(item.name || "").toLowerCase().trim();
//         if (iname) {
//           const match = products.find(
//             (p) =>
//               p.name?.toLowerCase().trim() === iname && Number(p.costPrice) > 0
//           );
//           if (match) return sum + Number(match.costPrice) * qty;
//         }
//         return sum;
//       }, 0);
//     }

//     const name = (o.product || o.productName || "").toLowerCase().trim();
//     if (!name) return 0;
//     const match = products.find(
//       (p) => p.name?.toLowerCase().trim() === name && Number(p.costPrice) > 0
//     );
//     if (!match) return 0;
//     return Number(match.costPrice) * (Number(o.quantity) || 1);
//   }

//   const periodOrders = useMemo(() => {
//     const { start, end } = getPeriodRange(period);
//     const startMs = start.getTime();
//     const endMs = end.getTime();
//     return orders.filter((o) => {
//       if (!isActiveOrder(o)) return false;
//       const t = orderTimeMs(o);
//       if (!t) return false;
//       return t >= startMs && t <= endMs;
//     });
//   }, [orders, period]);

//   const focusOrders = useMemo(() => {
//     if (!selectedBarKey) return periodOrders;
//     return ordersForBarKey(orders, selectedBarKey, period);
//   }, [orders, selectedBarKey, period, periodOrders]);

//   const activeTodayOrders = useMemo(
//     () =>
//       orders.filter(
//         (o) => isActiveOrder(o) && isSameCalendarDay(orderTimeMs(o))
//       ),
//     [orders]
//   );

//   const focusPaidOrders = useMemo(
//     () =>
//       focusOrders.filter((o) => {
//         const ps = String(o.paymentStatus || "").toLowerCase();
//         return ps === "paid" || ps === "received";
//       }),
//     [focusOrders]
//   );

//   const totalSales = focusOrders.reduce((s, o) => s + orderRevenue(o), 0);
//   const todaySales = activeTodayOrders.reduce((s, o) => s + orderRevenue(o), 0);
//   const paidSales = focusPaidOrders.reduce((s, o) => s + orderRevenue(o), 0);

//   const pendingPayments = orders
//     .filter(
//       (o) =>
//         isActiveOrder(o) &&
//         (o.paymentStatus === "Pending" || o.paymentStatus === "Partial")
//     )
//     .reduce(
//       (s, o) => s + Math.max(0, orderRevenue(o) - Number(o.paid || 0)),
//       0
//     );

//   const productCost = focusOrders.reduce(
//     (sum, o) => sum + orderProductCost(o),
//     0
//   );
//   const paidProductCost = focusPaidOrders.reduce(
//     (sum, o) => sum + orderProductCost(o),
//     0
//   );
//   const todayProductCost = activeTodayOrders.reduce(
//     (sum, o) => sum + orderProductCost(o),
//     0
//   );

//   const focusExpenses = selectedBarKey ? 0 : periodExpensesTotal;

//   const estimatedProfit = totalSales - productCost - focusExpenses;
//   const paidEstimatedProfit = paidSales - paidProductCost - focusExpenses;
//   const todayEstimatedProfit =
//     todaySales - todayProductCost - todayExpensesTotal;

//   const salesData = useMemo(
//     () => buildSalesTrend(orders, period),
//     [orders, period]
//   );

//   const selectedBarMeta = useMemo(() => {
//     if (!selectedBarKey) return null;
//     return salesData.find((s) => s.key === selectedBarKey) || null;
//   }, [selectedBarKey, salesData]);

//   const kpiSales = selectedBarKey ? totalSales : todaySales;
//   const kpiOrdersCount = selectedBarKey
//     ? focusOrders.length
//     : activeTodayOrders.length;
//   const kpiProfit = selectedBarKey ? estimatedProfit : todayEstimatedProfit;
//   const kpiExpenses = selectedBarKey ? focusExpenses : todayExpensesTotal;
//   const kpiSalesSubtitle = selectedBarKey
//     ? `${focusOrders.length} order${focusOrders.length !== 1 ? "s" : ""}`
//     : `${activeTodayOrders.length} order${
//         activeTodayOrders.length !== 1 ? "s" : ""
//       }`;
//   const kpiSectionTitle = selectedBarKey
//     ? formatBarLabel(
//         selectedBarMeta?.key || selectedBarKey,
//         selectedBarMeta?.month || "",
//         period
//       )
//     : "Today";

//   const performanceLabel = selectedBarMeta
//     ? formatBarLabel(selectedBarMeta.key, selectedBarMeta.month, period)
//     : period;

//   const topProducts = useMemo(() => {
//     const map = new Map<
//       string,
//       { name: string; category: string; sales: number; revenue: number }
//     >();

//     focusOrders.forEach((o) => {
//       (o.items || []).forEach((item) => {
//         const key = item.productId || item.name || "unknown";
//         const existing = map.get(key) || {
//           name: item.name || "Item",
//           category: "",
//           sales: 0,
//           revenue: 0,
//         };
//         const qty = Number(item.qty ?? item.quantity ?? 1) || 1;
//         existing.sales += qty;
//         existing.revenue += qty * (Number(item.price) || 0);
//         map.set(key, existing);
//       });

//       if ((!o.items || o.items.length === 0) && (o.product || o.productName)) {
//         const name = o.product || o.productName || "Item";
//         const existing = map.get(name) || {
//           name,
//           category: o.category || "",
//           sales: 0,
//           revenue: 0,
//         };
//         existing.sales += Number(o.quantity) || 1;
//         existing.revenue += orderRevenue(o);
//         map.set(name, existing);
//       }
//     });

//     if (map.size === 0) {
//       return products.slice(0, 4).map((p) => ({
//         code: p.sku || p.id,
//         name: p.name,
//         category: p.category || "—",
//         sales: 0,
//         revenue: 0,
//       }));
//     }

//     return Array.from(map.entries())
//       .map(([code, v]) => ({ code, ...v }))
//       .sort((a, b) => b.revenue - a.revenue)
//       .slice(0, 4);
//   }, [focusOrders, products]);

//   const sourceData = useMemo(() => {
//     const counts: Record<string, number> = {};
//     focusOrders.forEach((o) => {
//       const src = (o.source || "Other").trim() || "Other";
//       counts[src] = (counts[src] || 0) + 1;
//     });
//     const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
//     const preferred = [
//       "Website",
//       "Instagram",
//       "WhatsApp",
//       "Referral",
//       "Walk-in",
//       "Other",
//     ];
//     return preferred.map((name) => ({
//       name,
//       value: Math.round(((counts[name] || 0) / total) * 100),
//     }));
//   }, [focusOrders]);

//   const attentionItems: AttentionItem[] = useMemo(() => {
//     const items: AttentionItem[] = [];

//     ageing.slice(0, 5).forEach((p) => {
//       items.push({
//         id: p.id,
//         title: p.name,
//         description: `Published for ${p.daysPublished} days without a confirmed sale.`,
//         type: "Ageing",
//         priority: p.daysPublished >= 15 ? "High" : "Medium",
//         href: `/furniture/products/${p.id}`,
//       });
//     });

//     lowStock.slice(0, 3).forEach((p) => {
//       items.push({
//         id: p.id,
//         title: p.name,
//         description: `Only ${p.stock} units remaining. Minimum stock level is ${
//           p.minStock ?? p.reorderLevel ?? 5
//         }.`,
//         type: "Low Stock",
//         priority: (p.stock ?? 0) <= 2 ? "High" : "Medium",
//         href: `/furniture/products/${p.id}`,
//       });
//     });

//     orders
//       .filter(
//         (o) =>
//           isActiveOrder(o) &&
//           (o.paymentStatus === "Pending" || o.paymentStatus === "Partial")
//       )
//       .slice(0, 3)
//       .forEach((o) => {
//         const due = Math.max(0, orderRevenue(o) - Number(o.paid || 0));
//         items.push({
//           id: o.id,
//           title: o.customerName || o.orderNo || "Customer",
//           description: `Payment of ${formatCurrency(due)} is pending.`,
//           type: "Payment",
//           priority: "High",
//           href: `/furniture/orders`,
//         });
//       });

//     return items;
//   }, [ageing, lowStock, orders]);

//   const filteredAttention = useMemo(() => {
//     if (attentionFilter === "All") return attentionItems;
//     return attentionItems.filter((item) => item.type === attentionFilter);
//   }, [attentionItems, attentionFilter]);

//   function handleBarClick(key: string) {
//     setSelectedBarKey((prev) => (prev === key ? null : key));
//   }

//   if (loading) {
//     return (
//       <div className="flex min-h-[50vh] items-center justify-center">
//         <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#242424]">
//       <main className="mx-auto max-w-[1500px] px-3 py-4 sm:px-5 sm:py-7 lg:px-8">
//         <div className="mb-5 flex flex-col gap-3 sm:mb-7 sm:flex-row sm:items-end sm:justify-between">
//           <div className="min-w-0">
//             <p className="mb-0.5 text-[11px] font-medium text-[#999] sm:text-xs">
//               Furniture / Dashboard
//             </p>
//             <h1 className="text-[22px] font-semibold tracking-tight sm:text-2xl">
//               Furniture ERP Dashboard
//             </h1>
//             <p className="mt-1 text-[13px] text-[#777] sm:text-sm">
//               Live overview of products, sales, payments and performance.
//             </p>
//           </div>

//           <select
//             value={period}
//             onChange={(e) => setPeriod(e.target.value)}
//             className="h-9 w-fit max-w-[11rem] shrink-0 rounded-lg border border-[#ddd] bg-white px-2.5 text-[13px] outline-none focus:border-[#176b5b] sm:text-sm"
//           >
//             <option>This Month</option>
//             <option>Last Month</option>
//             <option>Last 3 Months</option>
//             <option>This Year</option>
//           </select>
//         </div>

//         <section className="mb-4 sm:mb-6">
//           <div className="mb-2.5 flex items-center justify-between gap-2">
//             <h2 className="text-[13px] font-semibold text-[#444] sm:text-sm">
//               {kpiSectionTitle}
//             </h2>
//             {selectedBarKey && (
//               <button
//                 type="button"
//                 onClick={() => setSelectedBarKey(null)}
//                 className="text-xs font-semibold text-[#176b5b] hover:underline"
//               >
//                 Clear · show Today
//               </button>
//             )}
//           </div>
//           <div className="grid grid-cols-3 gap-2 sm:gap-3 xl:grid-cols-6">
//             <MetricCard
//               title={selectedBarKey ? "Sales" : "Today's Sales"}
//               value={formatCurrency(kpiSales)}
//               subtitle={kpiSalesSubtitle}
//             />
//             <MetricCard
//               title="New Enquiries"
//               value={String(todayEnquiriesCount)}
//               subtitle="Today"
//             />
//             <MetricCard
//               title={selectedBarKey ? "Orders" : "New Orders"}
//               value={String(kpiOrdersCount)}
//               subtitle="Excl. cancelled"
//             />
//             <MetricCard
//               title="Expenses"
//               value={formatCurrency(kpiExpenses)}
//               subtitle={selectedBarKey ? "In selection" : "Recorded today"}
//             />
//             <MetricCard
//               title="Pending Payments"
//               value={formatCurrency(pendingPayments)}
//               subtitle="Outstanding"
//               warning
//             />
//             <MetricCard
//               title="Profit (Est.)"
//               value={formatCurrency(Math.max(0, kpiProfit))}
//               subtitle="Sales − cost − exp."
//             />
//           </div>
//         </section>

//         <section className="mb-4 grid grid-cols-3 gap-2 sm:mb-6 sm:gap-3 lg:grid-cols-4">
//           <BigMetricCard
//             title="Total Products"
//             value={String(totalProducts)}
//             subtitle="Furniture products"
//             icon="P"
//           />
//           <BigMetricCard
//             title="In Stock"
//             value={String(inStock)}
//             subtitle="Available"
//             icon="I"
//           />
//           <BigMetricCard
//             title="Low Stock"
//             value={String(lowStock.length)}
//             subtitle="Need attention"
//             icon="!"
//             warning
//           />
//           <BigMetricCard
//             title="Out of Stock"
//             value={String(outOfStock.length)}
//             subtitle="Unavailable"
//             icon="O"
//           />
//         </section>

//         <section className="mb-4 grid grid-cols-1 gap-4 sm:mb-6 sm:gap-5 xl:grid-cols-3">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5 xl:col-span-2">
//             <div className="mb-3 flex items-start justify-between gap-2 sm:mb-4">
//               <div className="min-w-0">
//                 <h2 className="text-[15px] font-semibold sm:text-base">
//                   Sales Trend
//                 </h2>
//                 <p className="mt-0.5 text-[11px] text-[#999] sm:text-xs">
//                   {periodChartSubtitle(period)}
//                 </p>
//               </div>
//               <span className="shrink-0 rounded-full bg-[#eef7f4] px-2.5 py-1 text-[11px] font-semibold text-[#176b5b] sm:text-xs">
//                 {period}
//               </span>
//             </div>
//             <SalesChart
//               data={salesData}
//               selectedKey={selectedBarKey}
//               onBarClick={handleBarClick}
//             />
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5">
//             <h2 className="text-[15px] font-semibold sm:text-base">
//               Business Performance
//             </h2>
//             <p className="mt-1 text-[11px] text-[#999] sm:text-xs">
//               {selectedBarKey ? "Bar filter: " : "Period: "}
//               <span className="font-semibold text-[#555]">
//                 {performanceLabel}
//               </span>
//               {" · "}
//               {focusOrders.length} order
//               {focusOrders.length !== 1 ? "s" : ""}
//             </p>
//             <div className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
//               <FinancialRow
//                 label="Total Sales"
//                 value={formatCurrency(totalSales)}
//               />
//               <FinancialRow
//                 label="Paid sales"
//                 value={formatCurrency(paidSales)}
//               />
//               <FinancialRow
//                 label="Product cost"
//                 value={formatCurrency(productCost)}
//               />
//               <FinancialRow
//                 label="Expenses"
//                 value={formatCurrency(focusExpenses)}
//               />
//               <div className="border-t border-[#eee] pt-3 sm:pt-4">
//                 <FinancialRow
//                   label="Est. profit"
//                   value={formatCurrency(Math.max(0, estimatedProfit))}
//                   strong
//                 />
//                 <p className="mt-1 text-[11px] text-[#aaa]">
//                   Paid-only:{" "}
//                   {formatCurrency(Math.max(0, paidEstimatedProfit))}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="mb-4 grid grid-cols-1 gap-4 sm:mb-6 sm:gap-5 xl:grid-cols-3">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5 xl:col-span-2">
//             <div className="mb-1 flex items-center justify-between gap-2">
//               <h2 className="text-[15px] font-semibold sm:text-base">
//                 Top Products
//               </h2>
//               <span className="rounded-full bg-[#eef7f4] px-2.5 py-1 text-[11px] font-semibold text-[#176b5b] sm:text-xs">
//                 {performanceLabel}
//               </span>
//             </div>
//             <p className="text-[11px] text-[#999] sm:text-xs">
//               By revenue in selected view
//             </p>
//             <div className="mt-3 -mx-1 overflow-x-auto sm:mt-4 sm:mx-0">
//               <table className="w-full min-w-[420px]">
//                 <thead>
//                   <tr className="border-b border-[#eee] text-left">
//                     <th className="pb-2.5 pl-1 text-[11px] font-semibold text-[#999] sm:text-xs">
//                       Product
//                     </th>
//                     <th className="pb-2.5 text-[11px] font-semibold text-[#999] sm:text-xs">
//                       Category
//                     </th>
//                     <th className="pb-2.5 text-center text-[11px] font-semibold text-[#999] sm:text-xs">
//                       Sales
//                     </th>
//                     <th className="pb-2.5 pr-1 text-right text-[11px] font-semibold text-[#999] sm:text-xs">
//                       Revenue
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {topProducts.map((product, index) => (
//                     <tr
//                       key={product.code}
//                       className="border-b border-[#f0efeb] last:border-0"
//                     >
//                       <td className="py-2.5 pl-1 sm:py-3">
//                         <div className="flex items-center gap-2 sm:gap-3">
//                           <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#f2f3ef] text-[11px] font-semibold text-[#176b5b] sm:h-8 sm:w-8 sm:text-xs">
//                             {index + 1}
//                           </div>
//                           <div className="min-w-0">
//                             <p className="truncate text-[13px] font-medium sm:text-sm">
//                               {product.name}
//                             </p>
//                             <p className="truncate text-[11px] text-[#aaa]">
//                               {product.code}
//                             </p>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="py-2.5 text-[13px] text-[#666] sm:text-sm">
//                         {product.category || "—"}
//                       </td>
//                       <td className="py-2.5 text-center text-[13px] font-medium sm:text-sm">
//                         {product.sales}
//                       </td>
//                       <td className="py-2.5 pr-1 text-right text-[13px] font-semibold sm:text-sm">
//                         {formatCurrency(product.revenue)}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5">
//             <div className="mb-1 flex items-center justify-between gap-2">
//               <h2 className="text-[15px] font-semibold sm:text-base">
//                 Order Sources
//               </h2>
//               <span className="rounded-full bg-[#eef7f4] px-2.5 py-1 text-[11px] font-semibold text-[#176b5b] sm:text-xs">
//                 {performanceLabel}
//               </span>
//             </div>
//             <p className="text-[11px] text-[#999] sm:text-xs">
//               Share of orders in view
//             </p>
//             <div className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
//               {sourceData.map((s) => (
//                 <div key={s.name}>
//                   <div className="mb-1 flex justify-between text-[11px] sm:text-xs">
//                     <span className="text-[#666]">{s.name}</span>
//                     <span className="font-semibold text-[#444]">
//                       {s.value}%
//                     </span>
//                   </div>
//                   <div className="h-1.5 overflow-hidden rounded-full bg-[#f0eee7] sm:h-2">
//                     <div
//                       className="h-full rounded-full bg-[#176b5b]"
//                       style={{ width: `${s.value}%` }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section className="mb-4 rounded-xl border border-[#e4e2da] bg-white shadow-sm sm:mb-6">
//           <div className="flex flex-col gap-3 border-b border-[#eee] p-3.5 sm:p-5 md:flex-row md:items-center md:justify-between">
//             <div>
//               <h2 className="text-[15px] font-semibold sm:text-base">
//                 Attention Needed
//               </h2>
//               <p className="mt-0.5 text-[11px] text-[#999] sm:text-xs">
//                 Items that may need action.
//               </p>
//             </div>
//             <div className="flex flex-wrap gap-1.5 sm:gap-2">
//               {["All", "Ageing", "Low Stock", "Payment"].map((filter) => (
//                 <button
//                   key={filter}
//                   type="button"
//                   onClick={() => setAttentionFilter(filter)}
//                   className={`min-h-[32px] rounded-full px-2.5 py-1.5 text-[11px] font-medium transition sm:text-xs ${
//                     attentionFilter === filter
//                       ? "bg-[#176b5b] text-white"
//                       : "bg-[#f3f3f0] text-[#666] hover:bg-[#e9e9e5]"
//                   }`}
//                 >
//                   {filter}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="divide-y divide-[#eee]">
//             {filteredAttention.map((item) => (
//               <div
//                 key={`${item.type}-${item.id}`}
//                 className="flex flex-col gap-3 p-3.5 transition hover:bg-[#fafbf9] sm:p-5 md:flex-row md:items-center md:justify-between"
//               >
//                 <div className="flex items-start gap-3 sm:gap-4">
//                   <AttentionIcon type={item.type} />
//                   <div className="min-w-0">
//                     <div className="flex flex-wrap items-center gap-1.5">
//                       <h3 className="text-[13px] font-semibold sm:text-sm">
//                         {item.title}
//                       </h3>
//                       <span
//                         className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
//                           item.priority === "High"
//                             ? "bg-red-50 text-red-600"
//                             : "bg-orange-50 text-orange-600"
//                         }`}
//                       >
//                         {item.priority}
//                       </span>
//                     </div>
//                     <p className="mt-1 text-xs text-[#777] sm:text-xs">
//                       {item.description}
//                     </p>
//                     <p className="mt-0.5 text-[11px] text-[#aaa]">
//                       Ref: {item.id}
//                     </p>
//                   </div>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => item.href && router.push(item.href)}
//                   className="min-h-[40px] w-full rounded-lg border border-[#ddd] px-4 py-2 text-[13px] font-semibold text-[#555] hover:border-[#176b5b] hover:text-[#176b5b] md:w-auto md:min-h-0 md:text-xs"
//                 >
//                   Open Record
//                 </button>
//               </div>
//             ))}

//             {filteredAttention.length === 0 && (
//               <div className="p-8 text-center sm:p-10">
//                 <p className="text-sm font-medium text-[#555]">
//                   No attention items
//                 </p>
//                 <p className="mt-1 text-xs text-[#999]">
//                   There are no items in this category.
//                 </p>
//               </div>
//             )}
//           </div>
//         </section>

//         <section>
//           <h2 className="mb-2.5 text-[13px] font-semibold text-[#444] sm:text-sm">
//             Quick access
//           </h2>
//           <div className="grid grid-cols-3 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
//             <QuickLink title="Orders" href="/furniture/orders" />
//             <QuickLink title="Products" href="/furniture/products" />
//             <QuickLink title="Enquiries" href="/furniture/enquiries" />
//             <QuickLink title="Payments" href="/furniture/payments" />
//             <QuickLink title="Inventory" href="/furniture/inventory" />
//             <QuickLink title="Reports" href="/furniture/reports" />
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// function MetricCard({
//   title,
//   value,
//   subtitle,
//   warning = false,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   warning?: boolean;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-2.5 shadow-sm sm:p-4">
//       <p className="truncate text-[10px] font-medium text-[#999] sm:text-xs">
//         {title}
//       </p>
//       <p
//         className={`mt-1 truncate text-base font-semibold sm:mt-1.5 sm:text-xl ${
//           warning ? "text-[#b46b17]" : "text-[#222]"
//         }`}
//       >
//         {value}
//       </p>
//       <p className="mt-0.5 truncate text-[10px] text-[#aaa] sm:text-[11px]">
//         {subtitle}
//       </p>
//     </div>
//   );
// }

// function BigMetricCard({
//   title,
//   value,
//   subtitle,
//   icon,
//   warning = false,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   icon: string;
//   warning?: boolean;
// }) {
//   return (
//     <div className="flex items-center justify-between gap-1.5 rounded-xl border border-[#e4e2da] bg-white p-2.5 shadow-sm sm:p-4">
//       <div className="min-w-0">
//         <p className="truncate text-[10px] font-medium text-[#999] sm:text-xs">
//           {title}
//         </p>
//         <p
//           className={`mt-1 text-base font-semibold sm:text-xl ${
//             warning ? "text-[#b46b17]" : "text-[#222]"
//           }`}
//         >
//           {value}
//         </p>
//         <p className="mt-0.5 truncate text-[10px] text-[#aaa] sm:text-[11px]">
//           {subtitle}
//         </p>
//       </div>
//       <div
//         className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold sm:h-10 sm:w-10 sm:rounded-xl sm:text-xs ${
//           warning
//             ? "bg-[#fff4df] text-[#b46b17]"
//             : "bg-[#e8f2ee] text-[#176b5b]"
//         }`}
//       >
//         {icon}
//       </div>
//     </div>
//   );
// }

// function SalesChart({
//   data,
//   selectedKey,
//   onBarClick,
// }: {
//   data: Sale[];
//   selectedKey: string | null;
//   onBarClick: (key: string) => void;
// }) {
//   const max = Math.max(...data.map((item) => item.sales), 1);
//   return (
//     <div className="-mx-1 overflow-x-auto sm:mx-0">
//       {/* <div className="flex h-[200px] min-w-[280px] items-end gap-1.5 border-b border-l border-[#eee] px-1.5 pb-0 pt-4 sm:h-[250px] sm:gap-3 sm:px-4 sm:pt-5"> */}
//       <div className="flex h-[200px] w-max min-w-full items-end gap-2 border-b border-l border-[#eee] px-2 pb-0 pt-4 sm:h-[250px] sm:gap-3 sm:px-4 sm:pt-5">
//         {data.map((item, i) => {
//           const height = Math.max(8, (item.sales / max) * 160);
//           const selected = selectedKey === item.key;
//           return (
//             <button
//               key={`${item.key}-${i}`}
//               type="button"
//               onClick={() => onBarClick(item.key)}
//               // className="flex h-full min-w-0 flex-1 flex-col items-center justify-end rounded-t-md outline-none transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#176b5b]"
//               className="flex h-full w-8 shrink-0 flex-col items-center justify-end rounded-t-md outline-none transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#176b5b] sm:w-9"
//               title={`${item.month}: ${formatCurrency(item.sales)}`}
//             >
//               <div className="mb-0.5 max-w-full truncate text-[9px] text-[#888] sm:text-[10px]">
//                 {item.sales > 0 ? formatCurrency(item.sales) : ""}
//               </div>
//               <div
//                 className={`w-full max-w-[36px] rounded-t-md transition sm:max-w-[40px] ${
//                   selected
//                     ? "bg-[#0f4f42] ring-2 ring-[#176b5b] ring-offset-1"
//                     : "bg-[#176b5b] hover:bg-[#125849]"
//                 }`}
//                 style={{ height: `${height}px` }}
//               />
//               <div
//                 className={`mt-1.5 max-w-full truncate text-[10px] sm:mt-2 sm:text-xs ${
//                   selected
//                     ? "font-semibold text-[#176b5b]"
//                     : "text-[#888]"
//                 }`}
//               >
//                 {item.month}
//               </div>
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// function FinancialRow({
//   label,
//   value,
//   strong = false,
// }: {
//   label: string;
//   value: string;
//   strong?: boolean;
// }) {
//   return (
//     <div className="flex items-center justify-between gap-3">
//       <span
//         className={`text-[13px] sm:text-sm ${
//           strong ? "font-semibold text-[#333]" : "text-[#777]"
//         }`}
//       >
//         {label}
//       </span>
//       <span
//         className={`shrink-0 text-[13px] sm:text-sm ${
//           strong
//             ? "font-semibold text-[#176b5b]"
//             : "font-medium text-[#444]"
//         }`}
//       >
//         {value}
//       </span>
//     </div>
//   );
// }

// function AttentionIcon({ type }: { type: AttentionItem["type"] }) {
//   let content = "!";
//   if (type === "Payment") content = "₹";
//   if (type === "Ageing") content = "⏱";
//   return (
//     <div
//       className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold sm:h-10 sm:w-10 sm:text-sm ${
//         type === "Payment"
//           ? "bg-[#fff4df] text-[#b46b17]"
//           : type === "Low Stock"
//             ? "bg-red-50 text-red-600"
//             : "bg-[#eef1ff] text-[#5a65a8]"
//       }`}
//     >
//       {content}
//     </div>
//   );
// }

// function QuickLink({ title, href }: { title: string; href: string }) {
//   return (
//     <Link
//       href={href}
//       className="flex min-h-[44px] items-center justify-center rounded-xl border border-[#e4e2da] bg-white px-2 py-3 text-center text-[13px] font-medium text-[#555] shadow-sm transition hover:-translate-y-0.5 hover:border-[#176b5b] hover:text-[#176b5b] sm:min-h-0 sm:px-4 sm:py-4 sm:text-sm"
//     >
//       {title}
//     </Link>
//   );
// }

"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  getAllProducts,
  getLowStockProducts,
  getOutOfStockProducts,
  getAgeingProducts,
  type FurnitureProduct,
} from "@/modules/furniture/services/productService";
import {
  getAllOrders,
  type FurnitureOrder,
} from "@/modules/furniture/services/orderService";
import {
  getAllEnquiries,
  getTodayEnquiries,
  enquiryTimeMs,
  type FurnitureEnquiry,
} from "@/modules/furniture/services/enquiryService";
import {
  getAllExpenses,
  getTodayExpenses,
  getExpensesInRange,
  expenseDateMs,
  type FurnitureExpense,
} from "@/modules/furniture/services/expenseService";

type Sale = {
  month: string;
  sales: number;
  key: string;
  sort: number;
};

type AttentionItem = {
  id: string;
  title: string;
  description: string;
  type: "Ageing" | "Low Stock" | "Payment";
  priority: "High" | "Medium";
  href?: string;
};

function formatCurrency(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function sumByAmount(items: { amount?: number }[]): number {
  return items.reduce((sum: number, item) => sum + (item.amount || 0), 0);
}

function getPeriodRange(period: string): { start: Date; end: Date } {
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);

  const start = new Date(now);

  if (period === "This Month") {
    start.setDate(1);
    start.setHours(0, 0, 0, 0);
  } else if (period === "Last Month") {
    start.setMonth(start.getMonth() - 1, 1);
    start.setHours(0, 0, 0, 0);
    end.setDate(0);
    end.setHours(23, 59, 59, 999);
  } else if (period === "Last 3 Months") {
    start.setMonth(start.getMonth() - 2, 1);
    start.setHours(0, 0, 0, 0);
  } else {
    start.setMonth(0, 1);
    start.setHours(0, 0, 0, 0);
  }

  return { start, end };
}

function isActiveOrder(o: FurnitureOrder) {
  const s = String(o.status || o.orderStatus || "").toLowerCase();
  return s !== "cancelled";
}

function orderRevenue(o: FurnitureOrder) {
  return Number(o.total ?? o.amount ?? o.totalAmount ?? 0) || 0;
}

function localDateKey(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function orderTimeMs(o: FurnitureOrder): number {
  const ts = o.createdAt?.toMillis?.();
  if (ts && ts > 0) return ts;

  const no = String(
    (o as { orderNo?: string; orderNumber?: string }).orderNo ||
      (o as { orderNumber?: string }).orderNumber ||
      o.id ||
      ""
  );
  const m = no.match(/(\d{4})(\d{2})(\d{2})/);
  if (m) {
    const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 12, 0, 0);
    if (!Number.isNaN(d.getTime())) return d.getTime();
  }

  const raw = String(
    (o as { orderDate?: string }).orderDate || o.deliveryDate || ""
  );
  if (raw) {
    const d = new Date(raw.includes("T") ? raw : `${raw}T12:00:00`);
    if (!Number.isNaN(d.getTime())) return d.getTime();
  }

  return 0;
}

function isSameCalendarDay(ms: number, ref: Date = new Date()): boolean {
  if (!ms) return false;
  const d = new Date(ms);
  return (
    d.getFullYear() === ref.getFullYear() &&
    d.getMonth() === ref.getMonth() &&
    d.getDate() === ref.getDate()
  );
}

function rangeForBarKey(
  key: string,
  period: string
): { startMs: number; endMs: number } | null {
  if (!key) return null;

  if (key.startsWith("week-")) {
    const match = key.match(
      /^week-(\d{4}-\d{2}-\d{2})-(\d{4}-\d{2}-\d{2})$/
    );
    if (match) {
      return {
        startMs: new Date(`${match[1]}T00:00:00`).getTime(),
        endMs: new Date(`${match[2]}T23:59:59`).getTime(),
      };
    }
  }

  if (period === "Last 3 Months" || period === "This Year") {
    const [y, m] = key.split("-").map(Number);
    if (!Number.isNaN(y) && !Number.isNaN(m)) {
      const start = new Date(y, m, 1, 0, 0, 0, 0);
      const end = new Date(y, m + 1, 0, 23, 59, 59, 999);
      return { startMs: start.getTime(), endMs: end.getTime() };
    }
  }

  if (/^\d{4}-\d{2}-\d{2}$/.test(key)) {
    return {
      startMs: new Date(`${key}T00:00:00`).getTime(),
      endMs: new Date(`${key}T23:59:59.999`).getTime(),
    };
  }

  return null;
}

function buildSalesTrend(orders: FurnitureOrder[], period: string): Sale[] {
  const { start, end } = getPeriodRange(period);
  const startMs = start.getTime();
  const endMs = end.getTime();

  const inPeriod = orders.filter((o) => {
    if (!isActiveOrder(o)) return false;
    const t = orderTimeMs(o);
    return t >= startMs && t <= endMs;
  });

  if (period === "Last 3 Months" || period === "This Year") {
    const buckets = new Map<
      string,
      { label: string; sales: number; sort: number; key: string }
    >();

    const cursor = new Date(start.getFullYear(), start.getMonth(), 1);
    const endMonth = new Date(end.getFullYear(), end.getMonth(), 1);

    while (cursor <= endMonth) {
      const year = cursor.getFullYear();
      const monthIndex = cursor.getMonth();
      const key = `${year}-${monthIndex}`;

      buckets.set(key, {
        label: cursor.toLocaleString("en-IN", {
          month: "short",
          year: "2-digit",
        }),
        sales: 0,
        sort: cursor.getTime(),
        key,
      });

      cursor.setMonth(cursor.getMonth() + 1);
    }

    inPeriod.forEach((o) => {
      const t = orderTimeMs(o);
      if (!t) return;

      const d = new Date(t);
      const key = `${d.getFullYear()}-${d.getMonth()}`;
      const bucket = buckets.get(key);

      if (bucket) {
        bucket.sales += orderRevenue(o);
      }
    });

    return Array.from(buckets.values())
      .sort((a, b) => a.sort - b.sort)
      .map((bucket) => ({
        month: bucket.label,
        sales: bucket.sales,
        key: bucket.key,
        sort: bucket.sort,
      }));
  }

  const dayBuckets = new Map<
    string,
    { label: string; sales: number; sort: number; key: string }
  >();

  const dayCursor = new Date(
    start.getFullYear(),
    start.getMonth(),
    start.getDate()
  );
  const dayEnd = new Date(end.getFullYear(), end.getMonth(), end.getDate());

  while (dayCursor <= dayEnd) {
    const key = localDateKey(dayCursor);

    dayBuckets.set(key, {
      label: String(dayCursor.getDate()),
      sales: 0,
      sort: dayCursor.getTime(),
      key,
    });

    dayCursor.setDate(dayCursor.getDate() + 1);
  }

  inPeriod.forEach((o) => {
    const t = orderTimeMs(o);
    if (!t) return;

    const key = localDateKey(new Date(t));
    const bucket = dayBuckets.get(key);

    if (bucket) {
      bucket.sales += orderRevenue(o);
    }
  });

  return Array.from(dayBuckets.values())
    .sort((a, b) => a.sort - b.sort)
    .map((bucket) => ({
      month: bucket.label,
      sales: bucket.sales,
      key: bucket.key,
      sort: bucket.sort,
    }));
}

function periodChartSubtitle(period: string): string {
  switch (period) {
    case "This Month":
    case "Last Month":
      return "Daily sales · tap a bar to filter KPIs";
    case "Last 3 Months":
    case "This Year":
      return "Monthly sales · tap a bar to filter KPIs";
    default:
      return "Sales for selected period";
  }
}

function ordersForBarKey(
  orders: FurnitureOrder[],
  key: string,
  period: string
): FurnitureOrder[] {
  const range = rangeForBarKey(key, period);
  if (!range) return [];

  return orders.filter((o) => {
    if (!isActiveOrder(o)) return false;
    const t = orderTimeMs(o);
    return t >= range.startMs && t <= range.endMs;
  });
}

function formatBarLabel(key: string, label: string, period: string): string {
  if (/^\d{4}-\d{2}-\d{2}$/.test(key)) {
    const d = new Date(`${key}T12:00:00`);
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }
  if (period === "Last 3 Months" || period === "This Year") {
    return label || key;
  }
  return label || key;
}

export default function FurnitureDashboardPage() {
  const router = useRouter();
  const [period, setPeriod] = useState("This Month");
  const [attentionFilter, setAttentionFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [selectedBarKey, setSelectedBarKey] = useState<string | null>(null);

  const [products, setProducts] = useState<FurnitureProduct[]>([]);
  const [orders, setOrders] = useState<FurnitureOrder[]>([]);
  const [allEnquiries, setAllEnquiries] = useState<FurnitureEnquiry[]>([]);
  const [allExpenses, setAllExpenses] = useState<FurnitureExpense[]>([]);
  const [todayEnquiriesCount, setTodayEnquiriesCount] = useState(0);
  const [todayExpensesTotal, setTodayExpensesTotal] = useState(0);
  const [periodExpensesTotal, setPeriodExpensesTotal] = useState(0);
  const [lowStock, setLowStock] = useState<FurnitureProduct[]>([]);
  const [outOfStock, setOutOfStock] = useState<FurnitureProduct[]>([]);
  const [ageing, setAgeing] = useState<
    (FurnitureProduct & { daysPublished: number })[]
  >([]);

  useEffect(() => {
    setSelectedBarKey(null);
  }, [period]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const { start, end } = getPeriodRange(period);

        const [
          allProducts,
          allOrders,
          tEnquiries,
          allEnq,
          tExpenses,
          pExpenses,
          allExp,
          low,
          out,
          age,
        ] = await Promise.all([
          getAllProducts(),
          getAllOrders(),
          getTodayEnquiries(),
          getAllEnquiries(),
          getTodayExpenses(),
          getExpensesInRange(start, end),
          getAllExpenses(),
          getLowStockProducts(),
          getOutOfStockProducts(),
          getAgeingProducts(10),
        ]);

        if (cancelled) return;

        setProducts(allProducts);
        setOrders(allOrders);
        setAllEnquiries(allEnq);
        setAllExpenses(allExp);
        setTodayEnquiriesCount(tEnquiries.length);
        setTodayExpensesTotal(sumByAmount(tExpenses));
        setPeriodExpensesTotal(sumByAmount(pExpenses));
        setLowStock(low);
        setOutOfStock(out);
        setAgeing(age);
      } catch (err) {
        console.error("Dashboard load error:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [period]);

  const totalProducts = products.length;
  const inStock = products.filter((p) => (p.stock ?? 0) > 0).length;

  const costByProductId = useMemo(() => {
    const map = new Map<string, number>();
    products.forEach((p) => {
      const cost = Number(p.costPrice ?? 0) || 0;
      map.set(p.id, cost);
      if (p.sku) map.set(String(p.sku), cost);
      if (p.code) map.set(String(p.code), cost);
    });
    return map;
  }, [products]);

  function orderProductCost(o: FurnitureOrder): number {
    const items = o.items || [];
    if (items.length > 0) {
      return items.reduce((sum, item) => {
        const qty = Number(item.qty ?? item.quantity ?? 1) || 1;
        const pid = String(item.productId || "");
        if (pid && costByProductId.has(pid)) {
          return sum + (costByProductId.get(pid) || 0) * qty;
        }
        const iname = String(item.name || "").toLowerCase().trim();
        if (iname) {
          const match = products.find(
            (p) =>
              p.name?.toLowerCase().trim() === iname && Number(p.costPrice) > 0
          );
          if (match) return sum + Number(match.costPrice) * qty;
        }
        return sum;
      }, 0);
    }

    const name = (o.product || o.productName || "").toLowerCase().trim();
    if (!name) return 0;
    const match = products.find(
      (p) => p.name?.toLowerCase().trim() === name && Number(p.costPrice) > 0
    );
    if (!match) return 0;
    return Number(match.costPrice) * (Number(o.quantity) || 1);
  }

  const periodOrders = useMemo(() => {
    const { start, end } = getPeriodRange(period);
    const startMs = start.getTime();
    const endMs = end.getTime();
    return orders.filter((o) => {
      if (!isActiveOrder(o)) return false;
      const t = orderTimeMs(o);
      if (!t) return false;
      return t >= startMs && t <= endMs;
    });
  }, [orders, period]);

  const focusRange = useMemo(() => {
    if (!selectedBarKey) return null;
    return rangeForBarKey(selectedBarKey, period);
  }, [selectedBarKey, period]);

  const focusOrders = useMemo(() => {
    if (!selectedBarKey) return periodOrders;
    return ordersForBarKey(orders, selectedBarKey, period);
  }, [orders, selectedBarKey, period, periodOrders]);

  const activeTodayOrders = useMemo(
    () =>
      orders.filter(
        (o) => isActiveOrder(o) && isSameCalendarDay(orderTimeMs(o))
      ),
    [orders]
  );

  const focusPaidOrders = useMemo(
    () =>
      focusOrders.filter((o) => {
        const ps = String(o.paymentStatus || "").toLowerCase();
        return ps === "paid" || ps === "received";
      }),
    [focusOrders]
  );

  const totalSales = focusOrders.reduce((s, o) => s + orderRevenue(o), 0);
  const todaySales = activeTodayOrders.reduce((s, o) => s + orderRevenue(o), 0);
  const paidSales = focusPaidOrders.reduce((s, o) => s + orderRevenue(o), 0);

  const pendingPayments = orders
    .filter(
      (o) =>
        isActiveOrder(o) &&
        (o.paymentStatus === "Pending" || o.paymentStatus === "Partial")
    )
    .reduce(
      (s, o) => s + Math.max(0, orderRevenue(o) - Number(o.paid || 0)),
      0
    );

  const productCost = focusOrders.reduce(
    (sum, o) => sum + orderProductCost(o),
    0
  );
  const paidProductCost = focusPaidOrders.reduce(
    (sum, o) => sum + orderProductCost(o),
    0
  );
  const todayProductCost = activeTodayOrders.reduce(
    (sum, o) => sum + orderProductCost(o),
    0
  );

  const focusEnquiries = useMemo(() => {
    if (focusRange) {
      return allEnquiries.filter((e) => {
        const t = enquiryTimeMs(e.createdAt);
        return t >= focusRange.startMs && t <= focusRange.endMs;
      });
    }
    return allEnquiries.filter((e) =>
      isSameCalendarDay(enquiryTimeMs(e.createdAt))
    );
  }, [allEnquiries, focusRange]);

  const focusExpensesAmount = useMemo(() => {
    if (focusRange) {
      return allExpenses
        .filter((e) => {
          const t =
            expenseDateMs(e.date) ||
            expenseDateMs(e.createdAt as FurnitureExpense["date"]);
          return t >= focusRange.startMs && t <= focusRange.endMs;
        })
        .reduce((s, e) => s + (Number(e.amount) || 0), 0);
    }
    return todayExpensesTotal;
  }, [allExpenses, focusRange, todayExpensesTotal]);

  const panelExpenses = selectedBarKey
    ? focusExpensesAmount
    : periodExpensesTotal;

  const estimatedProfit = totalSales - productCost - panelExpenses;
  const paidEstimatedProfit = paidSales - paidProductCost - panelExpenses;
  const todayEstimatedProfit =
    todaySales - todayProductCost - todayExpensesTotal;

  const salesData = useMemo(
    () => buildSalesTrend(orders, period),
    [orders, period]
  );

  const selectedBarMeta = useMemo(() => {
    if (!selectedBarKey) return null;
    return salesData.find((s) => s.key === selectedBarKey) || null;
  }, [selectedBarKey, salesData]);

  const kpiSales = selectedBarKey ? totalSales : todaySales;
  const kpiOrdersCount = selectedBarKey
    ? focusOrders.length
    : activeTodayOrders.length;
  const kpiEnquiries = selectedBarKey
    ? focusEnquiries.length
    : todayEnquiriesCount || focusEnquiries.length;
  const kpiExpenses = focusExpensesAmount;
  const kpiProfit = selectedBarKey
    ? totalSales - productCost - focusExpensesAmount
    : todayEstimatedProfit;

  const kpiSalesSubtitle = selectedBarKey
    ? `${focusOrders.length} order${focusOrders.length !== 1 ? "s" : ""}`
    : `${activeTodayOrders.length} order${
        activeTodayOrders.length !== 1 ? "s" : ""
      }`;

  const kpiSectionTitle = selectedBarKey
    ? formatBarLabel(
        selectedBarMeta?.key || selectedBarKey,
        selectedBarMeta?.month || "",
        period
      )
    : "Today";

  const performanceLabel = selectedBarMeta
    ? formatBarLabel(selectedBarMeta.key, selectedBarMeta.month, period)
    : period;

  const topProducts = useMemo(() => {
    const map = new Map<
      string,
      { name: string; category: string; sales: number; revenue: number }
    >();

    focusOrders.forEach((o) => {
      (o.items || []).forEach((item) => {
        const key = item.productId || item.name || "unknown";
        const existing = map.get(key) || {
          name: item.name || "Item",
          category: "",
          sales: 0,
          revenue: 0,
        };
        const qty = Number(item.qty ?? item.quantity ?? 1) || 1;
        existing.sales += qty;
        existing.revenue += qty * (Number(item.price) || 0);
        map.set(key, existing);
      });

      if ((!o.items || o.items.length === 0) && (o.product || o.productName)) {
        const name = o.product || o.productName || "Item";
        const existing = map.get(name) || {
          name,
          category: o.category || "",
          sales: 0,
          revenue: 0,
        };
        existing.sales += Number(o.quantity) || 1;
        existing.revenue += orderRevenue(o);
        map.set(name, existing);
      }
    });

    if (map.size === 0) {
      return products.slice(0, 4).map((p) => ({
        code: p.sku || p.id,
        name: p.name,
        category: p.category || "—",
        sales: 0,
        revenue: 0,
      }));
    }

    return Array.from(map.entries())
      .map(([code, v]) => ({ code, ...v }))
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 4);
  }, [focusOrders, products]);

  const sourceData = useMemo(() => {
    const counts: Record<string, number> = {};
    focusOrders.forEach((o) => {
      const src = (o.source || "Other").trim() || "Other";
      counts[src] = (counts[src] || 0) + 1;
    });
    const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
    const preferred = [
      "Website",
      "Instagram",
      "WhatsApp",
      "Referral",
      "Walk-in",
      "Other",
    ];
    return preferred.map((name) => ({
      name,
      value: Math.round(((counts[name] || 0) / total) * 100),
    }));
  }, [focusOrders]);

  const attentionItems: AttentionItem[] = useMemo(() => {
    const items: AttentionItem[] = [];

    ageing.slice(0, 5).forEach((p) => {
      items.push({
        id: p.id,
        title: p.name,
        description: `Published for ${p.daysPublished} days without a confirmed sale.`,
        type: "Ageing",
        priority: p.daysPublished >= 15 ? "High" : "Medium",
        href: `/furniture/products/${p.id}`,
      });
    });

    lowStock.slice(0, 3).forEach((p) => {
      items.push({
        id: p.id,
        title: p.name,
        description: `Only ${p.stock} units remaining. Minimum stock level is ${
          p.minStock ?? p.reorderLevel ?? 5
        }.`,
        type: "Low Stock",
        priority: (p.stock ?? 0) <= 2 ? "High" : "Medium",
        href: `/furniture/products/${p.id}`,
      });
    });

    orders
      .filter(
        (o) =>
          isActiveOrder(o) &&
          (o.paymentStatus === "Pending" || o.paymentStatus === "Partial")
      )
      .slice(0, 3)
      .forEach((o) => {
        const due = Math.max(0, orderRevenue(o) - Number(o.paid || 0));
        items.push({
          id: o.id,
          title: o.customerName || o.orderNo || "Customer",
          description: `Payment of ${formatCurrency(due)} is pending.`,
          type: "Payment",
          priority: "High",
          href: `/furniture/orders`,
        });
      });

    return items;
  }, [ageing, lowStock, orders]);

  const filteredAttention = useMemo(() => {
    if (attentionFilter === "All") return attentionItems;
    return attentionItems.filter((item) => item.type === attentionFilter);
  }, [attentionItems, attentionFilter]);

  function handleBarClick(key: string) {
    setSelectedBarKey((prev) => (prev === key ? null : key));
  }

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#242424]">
      <main className="mx-auto max-w-[1500px] px-3 py-4 sm:px-5 sm:py-7 lg:px-8">
        <div className="mb-5 flex flex-col gap-3 sm:mb-7 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="mb-0.5 text-[11px] font-medium text-[#999] sm:text-xs">
              Furniture / Dashboard
            </p>
            <h1 className="text-[22px] font-semibold tracking-tight sm:text-2xl">
              Furniture ERP Dashboard
            </h1>
            <p className="mt-1 text-[13px] text-[#777] sm:text-sm">
              Live overview of products, sales, payments and performance.
            </p>
          </div>

          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="h-9 w-fit max-w-[11rem] shrink-0 rounded-lg border border-[#ddd] bg-white px-2.5 text-[13px] outline-none focus:border-[#176b5b] sm:text-sm"
          >
            <option>This Month</option>
            <option>Last Month</option>
            <option>Last 3 Months</option>
            <option>This Year</option>
          </select>
        </div>

        <section className="mb-4 sm:mb-6">
          <div className="mb-2.5 flex items-center justify-between gap-2">
            <h2 className="text-[13px] font-semibold text-[#444] sm:text-sm">
              {kpiSectionTitle}
            </h2>
            {selectedBarKey && (
              <button
                type="button"
                onClick={() => setSelectedBarKey(null)}
                className="text-xs font-semibold text-[#176b5b] hover:underline"
              >
                Clear · show Today
              </button>
            )}
          </div>
          <div className="grid grid-cols-3 gap-2 sm:gap-3 xl:grid-cols-6">
            <MetricCard
              title={selectedBarKey ? "Sales" : "Today's Sales"}
              value={formatCurrency(kpiSales)}
              subtitle={kpiSalesSubtitle}
            />
            <MetricCard
              title="New Enquiries"
              value={String(kpiEnquiries)}
              subtitle={selectedBarKey ? "In selection" : "Today"}
            />
            <MetricCard
              title={selectedBarKey ? "Orders" : "New Orders"}
              value={String(kpiOrdersCount)}
              subtitle="Excl. cancelled"
            />
            <MetricCard
              title="Expenses"
              value={formatCurrency(kpiExpenses)}
              subtitle={selectedBarKey ? "In selection" : "Recorded today"}
            />
            <MetricCard
              title="Pending Payments"
              value={formatCurrency(pendingPayments)}
              subtitle="Outstanding"
              warning
            />
            <MetricCard
              title="Profit (Est.)"
              value={formatCurrency(Math.max(0, kpiProfit))}
              subtitle="Sales − cost − exp."
            />
          </div>
        </section>

        <section className="mb-4 grid grid-cols-3 gap-2 sm:mb-6 sm:gap-3 lg:grid-cols-4">
          <BigMetricCard
            title="Total Products"
            value={String(totalProducts)}
            subtitle="Furniture products"
            icon="P"
          />
          <BigMetricCard
            title="In Stock"
            value={String(inStock)}
            subtitle="Available"
            icon="I"
          />
          <BigMetricCard
            title="Low Stock"
            value={String(lowStock.length)}
            subtitle="Need attention"
            icon="!"
            warning
          />
          <BigMetricCard
            title="Out of Stock"
            value={String(outOfStock.length)}
            subtitle="Unavailable"
            icon="O"
          />
        </section>

        <section className="mb-4 grid grid-cols-1 gap-4 sm:mb-6 sm:gap-5 xl:grid-cols-3">
          <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5 xl:col-span-2">
            <div className="mb-3 flex items-start justify-between gap-2 sm:mb-4">
              <div className="min-w-0">
                <h2 className="text-[15px] font-semibold sm:text-base">
                  Sales Trend
                </h2>
                <p className="mt-0.5 text-[11px] text-[#999] sm:text-xs">
                  {periodChartSubtitle(period)}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[#eef7f4] px-2.5 py-1 text-[11px] font-semibold text-[#176b5b] sm:text-xs">
                {period}
              </span>
            </div>
            <SalesChart
              data={salesData}
              selectedKey={selectedBarKey}
              onBarClick={handleBarClick}
            />
          </div>

          <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5">
            <h2 className="text-[15px] font-semibold sm:text-base">
              Business Performance
            </h2>
            <p className="mt-1 text-[11px] text-[#999] sm:text-xs">
              {selectedBarKey ? "Bar filter: " : "Period: "}
              <span className="font-semibold text-[#555]">
                {performanceLabel}
              </span>
              {" · "}
              {focusOrders.length} order
              {focusOrders.length !== 1 ? "s" : ""}
            </p>
            <div className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
              <FinancialRow
                label="Total Sales"
                value={formatCurrency(totalSales)}
              />
              <FinancialRow
                label="Paid sales"
                value={formatCurrency(paidSales)}
              />
              <FinancialRow
                label="Product cost"
                value={formatCurrency(productCost)}
              />
              <FinancialRow
                label="Expenses"
                value={formatCurrency(panelExpenses)}
              />
              <div className="border-t border-[#eee] pt-3 sm:pt-4">
                <FinancialRow
                  label="Est. profit"
                  value={formatCurrency(Math.max(0, estimatedProfit))}
                  strong
                />
                <p className="mt-1 text-[11px] text-[#aaa]">
                  Paid-only:{" "}
                  {formatCurrency(Math.max(0, paidEstimatedProfit))}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-4 grid grid-cols-1 gap-4 sm:mb-6 sm:gap-5 xl:grid-cols-3">
          <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5 xl:col-span-2">
            <div className="mb-1 flex items-center justify-between gap-2">
              <h2 className="text-[15px] font-semibold sm:text-base">
                Top Products
              </h2>
              <span className="rounded-full bg-[#eef7f4] px-2.5 py-1 text-[11px] font-semibold text-[#176b5b] sm:text-xs">
                {performanceLabel}
              </span>
            </div>
            <p className="text-[11px] text-[#999] sm:text-xs">
              By revenue in selected view
            </p>
            <div className="mt-3 -mx-1 overflow-x-auto sm:mt-4 sm:mx-0">
              <table className="w-full min-w-[420px]">
                <thead>
                  <tr className="border-b border-[#eee] text-left">
                    <th className="pb-2.5 pl-1 text-[11px] font-semibold text-[#999] sm:text-xs">
                      Product
                    </th>
                    <th className="pb-2.5 text-[11px] font-semibold text-[#999] sm:text-xs">
                      Category
                    </th>
                    <th className="pb-2.5 text-center text-[11px] font-semibold text-[#999] sm:text-xs">
                      Sales
                    </th>
                    <th className="pb-2.5 pr-1 text-right text-[11px] font-semibold text-[#999] sm:text-xs">
                      Revenue
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {topProducts.map((product, index) => (
                    <tr
                      key={product.code}
                      className="border-b border-[#f0efeb] last:border-0"
                    >
                      <td className="py-2.5 pl-1 sm:py-3">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#f2f3ef] text-[11px] font-semibold text-[#176b5b] sm:h-8 sm:w-8 sm:text-xs">
                            {index + 1}
                          </div>
                          <div className="min-w-0">
                            <p className="truncate text-[13px] font-medium sm:text-sm">
                              {product.name}
                            </p>
                            <p className="truncate text-[11px] text-[#aaa]">
                              {product.code}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-2.5 text-[13px] text-[#666] sm:text-sm">
                        {product.category || "—"}
                      </td>
                      <td className="py-2.5 text-center text-[13px] font-medium sm:text-sm">
                        {product.sales}
                      </td>
                      <td className="py-2.5 pr-1 text-right text-[13px] font-semibold sm:text-sm">
                        {formatCurrency(product.revenue)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5">
            <div className="mb-1 flex items-center justify-between gap-2">
              <h2 className="text-[15px] font-semibold sm:text-base">
                Order Sources
              </h2>
              <span className="rounded-full bg-[#eef7f4] px-2.5 py-1 text-[11px] font-semibold text-[#176b5b] sm:text-xs">
                {performanceLabel}
              </span>
            </div>
            <p className="text-[11px] text-[#999] sm:text-xs">
              Share of orders in view
            </p>
            <div className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
              {sourceData.map((s) => (
                <div key={s.name}>
                  <div className="mb-1 flex justify-between text-[11px] sm:text-xs">
                    <span className="text-[#666]">{s.name}</span>
                    <span className="font-semibold text-[#444]">
                      {s.value}%
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-[#f0eee7] sm:h-2">
                    <div
                      className="h-full rounded-full bg-[#176b5b]"
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-4 rounded-xl border border-[#e4e2da] bg-white shadow-sm sm:mb-6">
          <div className="flex flex-col gap-3 border-b border-[#eee] p-3.5 sm:p-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-[15px] font-semibold sm:text-base">
                Attention Needed
              </h2>
              <p className="mt-0.5 text-[11px] text-[#999] sm:text-xs">
                Items that may need action.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {["All", "Ageing", "Low Stock", "Payment"].map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setAttentionFilter(filter)}
                  className={`min-h-[32px] rounded-full px-2.5 py-1.5 text-[11px] font-medium transition sm:text-xs ${
                    attentionFilter === filter
                      ? "bg-[#176b5b] text-white"
                      : "bg-[#f3f3f0] text-[#666] hover:bg-[#e9e9e5]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="divide-y divide-[#eee]">
            {filteredAttention.map((item) => (
              <div
                key={`${item.type}-${item.id}`}
                className="flex flex-col gap-3 p-3.5 transition hover:bg-[#fafbf9] sm:p-5 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <AttentionIcon type={item.type} />
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <h3 className="text-[13px] font-semibold sm:text-sm">
                        {item.title}
                      </h3>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                          item.priority === "High"
                            ? "bg-red-50 text-red-600"
                            : "bg-orange-50 text-orange-600"
                        }`}
                      >
                        {item.priority}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[#777] sm:text-xs">
                      {item.description}
                    </p>
                    <p className="mt-0.5 text-[11px] text-[#aaa]">
                      Ref: {item.id}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => item.href && router.push(item.href)}
                  className="min-h-[40px] w-full rounded-lg border border-[#ddd] px-4 py-2 text-[13px] font-semibold text-[#555] hover:border-[#176b5b] hover:text-[#176b5b] md:w-auto md:min-h-0 md:text-xs"
                >
                  Open Record
                </button>
              </div>
            ))}

            {filteredAttention.length === 0 && (
              <div className="p-8 text-center sm:p-10">
                <p className="text-sm font-medium text-[#555]">
                  No attention items
                </p>
                <p className="mt-1 text-xs text-[#999]">
                  There are no items in this category.
                </p>
              </div>
            )}
          </div>
        </section>

        <section>
          <h2 className="mb-2.5 text-[13px] font-semibold text-[#444] sm:text-sm">
            Quick access
          </h2>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
            <QuickLink title="Orders" href="/furniture/orders" />
            <QuickLink title="Products" href="/furniture/products" />
            <QuickLink title="Enquiries" href="/furniture/enquiries" />
            <QuickLink title="Payments" href="/furniture/payments" />
            <QuickLink title="Inventory" href="/furniture/inventory" />
            <QuickLink title="Reports" href="/furniture/reports" />
          </div>
        </section>
      </main>
    </div>
  );
}

function MetricCard({
  title,
  value,
  subtitle,
  warning = false,
}: {
  title: string;
  value: string;
  subtitle: string;
  warning?: boolean;
}) {
  return (
    <div className="rounded-xl border border-[#e4e2da] bg-white p-2.5 shadow-sm sm:p-4">
      <p className="truncate text-[10px] font-medium text-[#999] sm:text-xs">
        {title}
      </p>
      <p
        className={`mt-1 truncate text-base font-semibold sm:mt-1.5 sm:text-xl ${
          warning ? "text-[#b46b17]" : "text-[#222]"
        }`}
      >
        {value}
      </p>
      <p className="mt-0.5 truncate text-[10px] text-[#aaa] sm:text-[11px]">
        {subtitle}
      </p>
    </div>
  );
}

function BigMetricCard({
  title,
  value,
  subtitle,
  icon,
  warning = false,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
  warning?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-1.5 rounded-xl border border-[#e4e2da] bg-white p-2.5 shadow-sm sm:p-4">
      <div className="min-w-0">
        <p className="truncate text-[10px] font-medium text-[#999] sm:text-xs">
          {title}
        </p>
        <p
          className={`mt-1 text-base font-semibold sm:text-xl ${
            warning ? "text-[#b46b17]" : "text-[#222]"
          }`}
        >
          {value}
        </p>
        <p className="mt-0.5 truncate text-[10px] text-[#aaa] sm:text-[11px]">
          {subtitle}
        </p>
      </div>
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold sm:h-10 sm:w-10 sm:rounded-xl sm:text-xs ${
          warning
            ? "bg-[#fff4df] text-[#b46b17]"
            : "bg-[#e8f2ee] text-[#176b5b]"
        }`}
      >
        {icon}
      </div>
    </div>
  );
}

function SalesChart({
  data,
  selectedKey,
  onBarClick,
}: {
  data: Sale[];
  selectedKey: string | null;
  onBarClick: (key: string) => void;
}) {
  const max = Math.max(...data.map((item) => item.sales), 1);
  return (
    <div className="-mx-1 overflow-x-auto sm:mx-0">
      <div className="flex h-[200px] w-max min-w-full items-end gap-2 border-b border-l border-[#eee] px-2 pb-0 pt-4 sm:h-[250px] sm:gap-3 sm:px-4 sm:pt-5">
        {data.map((item, i) => {
          const height = Math.max(8, (item.sales / max) * 160);
          const selected = selectedKey === item.key;
          return (
            <button
              key={`${item.key}-${i}`}
              type="button"
              onClick={() => onBarClick(item.key)}
              className="flex h-full w-8 shrink-0 flex-col items-center justify-end rounded-t-md outline-none transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#176b5b] sm:w-9"
              title={`${item.month}: ${formatCurrency(item.sales)}`}
            >
              <div className="mb-0.5 max-w-full truncate text-[9px] text-[#888] sm:text-[10px]">
                {item.sales > 0 ? formatCurrency(item.sales) : ""}
              </div>
              <div
                className={`w-full max-w-[36px] rounded-t-md transition sm:max-w-[40px] ${
                  selected
                    ? "bg-[#0f4f42] ring-2 ring-[#176b5b] ring-offset-1"
                    : "bg-[#176b5b] hover:bg-[#125849]"
                }`}
                style={{ height: `${height}px` }}
              />
              <div
                className={`mt-1.5 max-w-full truncate text-[10px] sm:mt-2 sm:text-xs ${
                  selected
                    ? "font-semibold text-[#176b5b]"
                    : "text-[#888]"
                }`}
              >
                {item.month}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function FinancialRow({
  label,
  value,
  strong = false,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span
        className={`text-[13px] sm:text-sm ${
          strong ? "font-semibold text-[#333]" : "text-[#777]"
        }`}
      >
        {label}
      </span>
      <span
        className={`shrink-0 text-[13px] sm:text-sm ${
          strong
            ? "font-semibold text-[#176b5b]"
            : "font-medium text-[#444]"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function AttentionIcon({ type }: { type: AttentionItem["type"] }) {
  let content = "!";
  if (type === "Payment") content = "₹";
  if (type === "Ageing") content = "⏱";
  return (
    <div
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold sm:h-10 sm:w-10 sm:text-sm ${
        type === "Payment"
          ? "bg-[#fff4df] text-[#b46b17]"
          : type === "Low Stock"
            ? "bg-red-50 text-red-600"
            : "bg-[#eef1ff] text-[#5a65a8]"
      }`}
    >
      {content}
    </div>
  );
}

function QuickLink({ title, href }: { title: string; href: string }) {
  return (
    <Link
      href={href}
      className="flex min-h-[44px] items-center justify-center rounded-xl border border-[#e4e2da] bg-white px-2 py-3 text-center text-[13px] font-medium text-[#555] shadow-sm transition hover:-translate-y-0.5 hover:border-[#176b5b] hover:text-[#176b5b] sm:min-h-0 sm:px-4 sm:py-4 sm:text-sm"
    >
      {title}
    </Link>
  );
}
