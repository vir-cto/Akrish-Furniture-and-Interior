// "use client";

// import { useMemo, useState } from "react";

// type Customer = {
//   id: string;
//   name: string;
//   phone: string;
//   email: string;
//   area: string;
//   source: string;
//   enquiries: number;
//   orders: number;
//   totalPurchase: number;
//   pendingAmount: number;
//   lastInteraction: string;
//   status: "Active" | "Inactive";
// };

// const initialCustomers: Customer[] = [
//   {
//     id: "CUST-001",
//     name: "Ananya Reddy",
//     phone: "+91 98765 43211",
//     email: "ananya.reddy@gmail.com",
//     area: "Guntur",
//     source: "Website",
//     enquiries: 3,
//     orders: 2,
//     totalPurchase: 128500,
//     pendingAmount: 0,
//     lastInteraction: "02 Oct 2026",
//     status: "Active",
//   },
//   {
//     id: "CUST-002",
//     name: "Rahul Sharma",
//     phone: "+91 98480 11223",
//     email: "rahul.sharma@gmail.com",
//     area: "Vijayawada",
//     source: "WhatsApp",
//     enquiries: 2,
//     orders: 1,
//     totalPurchase: 84500,
//     pendingAmount: 12500,
//     lastInteraction: "30 Sep 2026",
//     status: "Active",
//   },
//   {
//     id: "CUST-003",
//     name: "Priya Sharma",
//     phone: "+91 96765 43210",
//     email: "priya.sharma@gmail.com",
//     area: "Hyderabad",
//     source: "Instagram",
//     enquiries: 4,
//     orders: 1,
//     totalPurchase: 56000,
//     pendingAmount: 8000,
//     lastInteraction: "27 Sep 2026",
//     status: "Active",
//   },
//   {
//     id: "CUST-004",
//     name: "Vikram Singh",
//     phone: "+91 99887 66554",
//     email: "vikram.singh@gmail.com",
//     area: "Guntur",
//     source: "Referral",
//     enquiries: 1,
//     orders: 0,
//     totalPurchase: 0,
//     pendingAmount: 0,
//     lastInteraction: "25 Sep 2026",
//     status: "Active",
//   },
//   {
//     id: "CUST-005",
//     name: "Neha Gupta",
//     phone: "+91 91234 56789",
//     email: "neha.gupta@gmail.com",
//     area: "Tenali",
//     source: "Walk-in",
//     enquiries: 2,
//     orders: 1,
//     totalPurchase: 73500,
//     pendingAmount: 15000,
//     lastInteraction: "21 Sep 2026",
//     status: "Active",
//   },
// ];

// const sources = [
//   "All Sources",
//   "Instagram",
//   "Facebook",
//   "Google",
//   "WhatsApp",
//   "Walk-in",
//   "Referral",
//   "Website",
//   "Other",
// ];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// export default function FurnitureCustomersPage() {
//   const [customers, setCustomers] = useState<Customer[]>(initialCustomers);
//   const [search, setSearch] = useState("");
//   const [source, setSource] = useState("All Sources");
//   const [status, setStatus] = useState("All Status");
//   const [selectedCustomer, setSelectedCustomer] =
//     useState<Customer | null>(null);
//   const [showAddCustomer, setShowAddCustomer] = useState(false);

//   const [newCustomer, setNewCustomer] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     area: "",
//     source: "Website",
//   });

//   const filteredCustomers = useMemo(() => {
//     return customers.filter((customer) => {
//       const searchText = search.toLowerCase();

//       const matchesSearch =
//         customer.name.toLowerCase().includes(searchText) ||
//         customer.phone.toLowerCase().includes(searchText) ||
//         customer.email.toLowerCase().includes(searchText) ||
//         customer.id.toLowerCase().includes(searchText);

//       const matchesSource =
//         source === "All Sources" || customer.source === source;

//       const matchesStatus =
//         status === "All Status" || customer.status === status;

//       return matchesSearch && matchesSource && matchesStatus;
//     });
//   }, [customers, search, source, status]);

//   const totalCustomers = customers.length;

//   const activeCustomers = customers.filter(
//     (customer) => customer.status === "Active"
//   ).length;

//   const totalPurchase = customers.reduce(
//     (sum, customer) => sum + customer.totalPurchase,
//     0
//   );

//   const pendingAmount = customers.reduce(
//     (sum, customer) => sum + customer.pendingAmount,
//     0
//   );

//   const handleAddCustomer = () => {
//     if (!newCustomer.name.trim() || !newCustomer.phone.trim()) {
//       return;
//     }

//     const customer: Customer = {
//       id: `CUST-${String(customers.length + 1).padStart(3, "0")}`,
//       name: newCustomer.name,
//       phone: newCustomer.phone,
//       email: newCustomer.email,
//       area: newCustomer.area,
//       source: newCustomer.source,
//       enquiries: 0,
//       orders: 0,
//       totalPurchase: 0,
//       pendingAmount: 0,
//       lastInteraction: "Today",
//       status: "Active",
//     };

//     setCustomers((current) => [customer, ...current]);

//     setNewCustomer({
//       name: "",
//       phone: "",
//       email: "",
//       area: "",
//       source: "Website",
//     });

//     setShowAddCustomer(false);
//   };

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#242424]">
//       {/* HEADER */}
//       <header className="border-b border-[#e7e5de] bg-white">
//         <div className="flex min-h-[76px] items-center justify-between px-6 lg:px-8">
//           <div>
//             <div className="text-[25px] font-bold tracking-tight text-[#9a5b18]">
//               Akrish
//             </div>

//             <div className="text-[8px] uppercase tracking-[3px] text-[#777]">
//               Furniture and Interior
//             </div>
//           </div>

//           <div className="hidden text-right sm:block">
//             <p className="text-sm font-semibold text-[#333]">
//               Furniture ERP
//             </p>
//             <p className="text-xs text-[#999]">Customer Management</p>
//           </div>
//         </div>
//       </header>

//       {/* CONTENT */}
//       <main className="mx-auto max-w-[1450px] px-5 py-7 lg:px-8">
//         {/* TITLE */}
//         <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//           <div>
//             <p className="mb-1 text-xs font-medium text-[#999]">
//               Furniture / CRM
//             </p>

//             <h1 className="text-2xl font-semibold tracking-tight">
//               Customers
//             </h1>

//             <p className="mt-1 text-sm text-[#777]">
//               Manage customer records, enquiries and purchase history.
//             </p>
//           </div>

//           <button
//             onClick={() => setShowAddCustomer(true)}
//             className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#125849]"
//           >
//             + Add Customer
//           </button>
//         </div>

//         {/* SUMMARY CARDS */}
//         <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <SummaryCard
//             title="Total Customers"
//             value={totalCustomers.toString()}
//             subtitle="Customer records"
//           />

//           <SummaryCard
//             title="Active Customers"
//             value={activeCustomers.toString()}
//             subtitle="Currently active"
//           />

//           <SummaryCard
//             title="Total Purchase"
//             value={formatCurrency(totalPurchase)}
//             subtitle="Recorded sales"
//           />

//           <SummaryCard
//             title="Pending Amount"
//             value={formatCurrency(pendingAmount)}
//             subtitle="Customer balances"
//             warning
//           />
//         </div>

//         {/* CUSTOMER TABLE CARD */}
//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           {/* TOOLBAR */}
//           <div className="border-b border-[#eceae4] p-5">
//             <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
//               {/* SEARCH */}
//               <div className="relative w-full xl:max-w-[430px]">
//                 <svg
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999]"
//                   width="18"
//                   height="18"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                 >
//                   <path
//                     d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                   />
//                 </svg>

//                 <input
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   placeholder="Search customer, phone or email..."
//                   className="h-11 w-full rounded-lg border border-[#ddd] bg-white pl-10 pr-4 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                 />
//               </div>

//               {/* FILTERS */}
//               <div className="flex flex-wrap gap-3">
//                 <select
//                   value={source}
//                   onChange={(e) => setSource(e.target.value)}
//                   className="h-11 rounded-lg border border-[#ddd] bg-white px-3 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {sources.map((item) => (
//                     <option key={item}>{item}</option>
//                   ))}
//                 </select>

//                 <select
//                   value={status}
//                   onChange={(e) => setStatus(e.target.value)}
//                   className="h-11 rounded-lg border border-[#ddd] bg-white px-3 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   <option>All Status</option>
//                   <option>Active</option>
//                   <option>Inactive</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           {/* TABLE */}
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1050px] border-collapse">
//               <thead>
//                 <tr className="border-b border-[#e9e7e1] bg-[#fafaf8] text-left">
//                   <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#888]">
//                     Customer
//                   </th>

//                   <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#888]">
//                     Contact
//                   </th>

//                   <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#888]">
//                     Source
//                   </th>

//                   <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-[#888]">
//                     Enquiries
//                   </th>

//                   <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-[#888]">
//                     Orders
//                   </th>

//                   <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-[#888]">
//                     Total Purchase
//                   </th>

//                   <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-[#888]">
//                     Pending
//                   </th>

//                   <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#888]">
//                     Status
//                   </th>

//                   <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-[#888]">
//                     Action
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {filteredCustomers.map((customer) => (
//                   <tr
//                     key={customer.id}
//                     className="border-b border-[#efede8] transition hover:bg-[#fafbf9]"
//                   >
//                     {/* CUSTOMER */}
//                     <td className="px-5 py-4">
//                       <div className="flex items-center gap-3">
//                         <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f2ee] text-sm font-semibold text-[#176b5b]">
//                           {customer.name.charAt(0)}
//                         </div>

//                         <div>
//                           <p className="text-sm font-semibold text-[#333]">
//                             {customer.name}
//                           </p>

//                           <p className="mt-0.5 text-xs text-[#999]">
//                             {customer.id} · {customer.area}
//                           </p>
//                         </div>
//                       </div>
//                     </td>

//                     {/* CONTACT */}
//                     <td className="px-5 py-4">
//                       <p className="text-sm text-[#444]">
//                         {customer.phone}
//                       </p>

//                       <p className="mt-1 text-xs text-[#999]">
//                         {customer.email || "No email"}
//                       </p>
//                     </td>

//                     {/* SOURCE */}
//                     <td className="px-5 py-4">
//                       <SourceBadge source={customer.source} />
//                     </td>

//                     {/* ENQUIRIES */}
//                     <td className="px-5 py-4 text-center text-sm font-medium">
//                       {customer.enquiries}
//                     </td>

//                     {/* ORDERS */}
//                     <td className="px-5 py-4 text-center text-sm font-medium">
//                       {customer.orders}
//                     </td>

//                     {/* PURCHASE */}
//                     <td className="px-5 py-4 text-right text-sm font-semibold text-[#333]">
//                       {formatCurrency(customer.totalPurchase)}
//                     </td>

//                     {/* PENDING */}
//                     <td className="px-5 py-4 text-right">
//                       <span
//                         className={
//                           customer.pendingAmount > 0
//                             ? "text-sm font-semibold text-[#c27b19]"
//                             : "text-sm font-medium text-[#777]"
//                         }
//                       >
//                         {formatCurrency(customer.pendingAmount)}
//                       </span>
//                     </td>

//                     {/* STATUS */}
//                     <td className="px-5 py-4">
//                       <span
//                         className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
//                           customer.status === "Active"
//                             ? "bg-[#e8f6ef] text-[#16804d]"
//                             : "bg-[#f1f1f1] text-[#777]"
//                         }`}
//                       >
//                         {customer.status}
//                       </span>
//                     </td>

//                     {/* ACTION */}
//                     <td className="px-5 py-4 text-right">
//                       <button
//                         onClick={() => setSelectedCustomer(customer)}
//                         className="rounded-md border border-[#ddd] px-3 py-1.5 text-xs font-semibold text-[#555] hover:border-[#176b5b] hover:text-[#176b5b]"
//                       >
//                         View
//                       </button>
//                     </td>
//                   </tr>
//                 ))}

//                 {filteredCustomers.length === 0 && (
//                   <tr>
//                     <td colSpan={9} className="px-5 py-14 text-center">
//                       <p className="text-sm font-medium text-[#555]">
//                         No customers found
//                       </p>

//                       <p className="mt-1 text-xs text-[#999]">
//                         Try changing the search or filters.
//                       </p>
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {/* FOOTER */}
//           <div className="flex flex-col gap-2 border-t border-[#eceae4] bg-[#fafaf8] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
//             <p className="text-xs text-[#888]">
//               Showing {filteredCustomers.length} of {customers.length} customers
//             </p>

//             <p className="text-xs text-[#aaa]">
//               Furniture ERP · Customer Management
//             </p>
//           </div>
//         </section>
//       </main>

//       {/* ADD CUSTOMER MODAL */}
//       {showAddCustomer && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="w-full max-w-[520px] rounded-xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#eee] px-6 py-5">
//               <div>
//                 <h2 className="text-lg font-semibold">
//                   Add Customer
//                 </h2>

//                 <p className="mt-1 text-xs text-[#999]">
//                   Create a new furniture customer record.
//                 </p>
//               </div>

//               <button
//                 onClick={() => setShowAddCustomer(false)}
//                 className="text-xl text-[#999] hover:text-[#333]"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="space-y-4 px-6 py-6">
//               <InputField
//                 label="Customer Name *"
//                 value={newCustomer.name}
//                 onChange={(value) =>
//                   setNewCustomer({
//                     ...newCustomer,
//                     name: value,
//                   })
//                 }
//                 placeholder="Enter customer name"
//               />

//               <InputField
//                 label="Phone / WhatsApp *"
//                 value={newCustomer.phone}
//                 onChange={(value) =>
//                   setNewCustomer({
//                     ...newCustomer,
//                     phone: value,
//                   })
//                 }
//                 placeholder="+91 XXXXX XXXXX"
//               />

//               <InputField
//                 label="Email"
//                 value={newCustomer.email}
//                 onChange={(value) =>
//                   setNewCustomer({
//                     ...newCustomer,
//                     email: value,
//                   })
//                 }
//                 placeholder="customer@email.com"
//               />

//               <InputField
//                 label="Address / Area"
//                 value={newCustomer.area}
//                 onChange={(value) =>
//                   setNewCustomer({
//                     ...newCustomer,
//                     area: value,
//                   })
//                 }
//                 placeholder="Guntur"
//               />

//               <div>
//                 <label className="mb-2 block text-sm font-medium text-[#444]">
//                   Source
//                 </label>

//                 <select
//                   value={newCustomer.source}
//                   onChange={(e) =>
//                     setNewCustomer({
//                       ...newCustomer,
//                       source: e.target.value,
//                     })
//                   }
//                   className="h-11 w-full rounded-lg border border-[#ddd] bg-white px-3 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {sources
//                     .filter((item) => item !== "All Sources")
//                     .map((item) => (
//                       <option key={item}>{item}</option>
//                     ))}
//                 </select>
//               </div>
//             </div>

//             <div className="flex justify-end gap-3 border-t border-[#eee] px-6 py-4">
//               <button
//                 onClick={() => setShowAddCustomer(false)}
//                 className="rounded-lg border border-[#ddd] px-5 py-2.5 text-sm font-medium text-[#555] hover:bg-[#f7f7f7]"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={handleAddCustomer}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125849]"
//               >
//                 Add Customer
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* CUSTOMER DETAIL MODAL */}
//       {selectedCustomer && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="w-full max-w-[700px] overflow-hidden rounded-xl bg-white shadow-2xl">
//             <div className="flex items-start justify-between border-b border-[#eee] px-6 py-5">
//               <div className="flex items-center gap-4">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f2ee] font-semibold text-[#176b5b]">
//                   {selectedCustomer.name.charAt(0)}
//                 </div>

//                 <div>
//                   <h2 className="text-lg font-semibold">
//                     {selectedCustomer.name}
//                   </h2>

//                   <p className="mt-1 text-xs text-[#999]">
//                     {selectedCustomer.id}
//                   </p>
//                 </div>
//               </div>

//               <button
//                 onClick={() => setSelectedCustomer(null)}
//                 className="text-xl text-[#999] hover:text-[#333]"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="grid gap-4 px-6 py-6 sm:grid-cols-2">
//               <DetailItem
//                 label="Phone / WhatsApp"
//                 value={selectedCustomer.phone}
//               />

//               <DetailItem
//                 label="Email"
//                 value={selectedCustomer.email || "Not available"}
//               />

//               <DetailItem
//                 label="Area"
//                 value={selectedCustomer.area || "Not available"}
//               />

//               <DetailItem
//                 label="Source"
//                 value={selectedCustomer.source}
//               />

//               <DetailItem
//                 label="Enquiries"
//                 value={selectedCustomer.enquiries.toString()}
//               />

//               <DetailItem
//                 label="Orders"
//                 value={selectedCustomer.orders.toString()}
//               />

//               <DetailItem
//                 label="Total Purchase"
//                 value={formatCurrency(selectedCustomer.totalPurchase)}
//               />

//               <DetailItem
//                 label="Pending Amount"
//                 value={formatCurrency(selectedCustomer.pendingAmount)}
//               />

//               <DetailItem
//                 label="Last Interaction"
//                 value={selectedCustomer.lastInteraction}
//               />

//               <DetailItem
//                 label="Status"
//                 value={selectedCustomer.status}
//               />
//             </div>

//             <div className="border-t border-[#eee] bg-[#fafaf8] px-6 py-4">
//               <p className="text-xs text-[#999]">
//                 Enquiry history, product interests, orders, payments and
//                 internal notes can be connected to this customer record.
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function SummaryCard({
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

// function SourceBadge({ source }: { source: string }) {
//   return (
//     <span className="inline-flex rounded-full bg-[#f3f4f2] px-2.5 py-1 text-xs font-medium text-[#666]">
//       {source}
//     </span>
//   );
// }

// function InputField({
//   label,
//   value,
//   onChange,
//   placeholder,
// }: {
//   label: string;
//   value: string;
//   onChange: (value: string) => void;
//   placeholder: string;
// }) {
//   return (
//     <div>
//       <label className="mb-2 block text-sm font-medium text-[#444]">
//         {label}
//       </label>

//       <input
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         placeholder={placeholder}
//         className="h-11 w-full rounded-lg border border-[#ddd] px-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//       />
//     </div>
//   );
// }

// function DetailItem({
//   label,
//   value,
// }: {
//   label: string;
//   value: string;
// }) {
//   return (
//     <div className="rounded-lg border border-[#eee] bg-[#fafaf8] p-4">
//       <p className="text-xs text-[#999]">{label}</p>
//       <p className="mt-1 text-sm font-medium text-[#333]">{value}</p>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAllCustomers,
//   createCustomer,
//   type FurnitureCustomer,
// } from "@/modules/furniture/services/customerService";

// type UiCustomer = {
//   id: string;
//   name: string;
//   phone: string;
//   email: string;
//   area: string;
//   source: string;
//   enquiries: number;
//   orders: number;
//   totalPurchase: number;
//   pendingAmount: number;
//   lastInteraction: string;
//   status: "Active" | "Inactive";
// };

// function mapToUi(c: FurnitureCustomer): UiCustomer {
//   return {
//     id: c.id,
//     name: c.name || "Unknown",
//     phone: c.phone || "—",
//     email: c.email || "",
//     area: c.area || c.address || "—",
//     source: c.source || "Other",
//     enquiries: c.enquiries ?? 0,
//     orders: c.orders ?? 0,
//     totalPurchase: c.totalPurchase ?? 0,
//     pendingAmount: c.pendingAmount ?? 0,
//     lastInteraction: c.lastInteraction
//       ? c.lastInteraction
//       : c.createdAt?.toDate
//       ? c.createdAt.toDate().toLocaleDateString("en-IN", {
//           day: "2-digit",
//           month: "short",
//           year: "numeric",
//         })
//       : "—",
//     status: c.status === "Inactive" ? "Inactive" : "Active",
//   };
// }

// const sources = [
//   "All Sources",
//   "Instagram",
//   "Facebook",
//   "Google",
//   "WhatsApp",
//   "Walk-in",
//   "Referral",
//   "Website",
//   "Other",
// ];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// export default function FurnitureCustomersPage() {
//   const [customers, setCustomers] = useState<UiCustomer[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [source, setSource] = useState("All Sources");
//   const [status, setStatus] = useState("All Status");
//   const [selectedCustomer, setSelectedCustomer] = useState<UiCustomer | null>(null);
//   const [showAddCustomer, setShowAddCustomer] = useState(false);
//   const [saving, setSaving] = useState(false);

//   const [newCustomer, setNewCustomer] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     area: "",
//     source: "Website",
//   });

//   // Load from Firebase
//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllCustomers();
//         if (!cancelled) {
//           setCustomers(data.map(mapToUi));
//         }
//       } catch (err) {
//         console.error("Failed to load customers:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const filteredCustomers = useMemo(() => {
//     return customers.filter((customer) => {
//       const searchText = search.toLowerCase();

//       const matchesSearch =
//         !searchText ||
//         customer.name.toLowerCase().includes(searchText) ||
//         customer.phone.toLowerCase().includes(searchText) ||
//         customer.email.toLowerCase().includes(searchText) ||
//         customer.id.toLowerCase().includes(searchText);

//       const matchesSource =
//         source === "All Sources" || customer.source === source;

//       const matchesStatus =
//         status === "All Status" || customer.status === status;

//       return matchesSearch && matchesSource && matchesStatus;
//     });
//   }, [customers, search, source, status]);

//   const totalCustomers = customers.length;
//   const activeCustomers = customers.filter((c) => c.status === "Active").length;
//   const totalPurchase = customers.reduce((sum, c) => sum + c.totalPurchase, 0);
//   const pendingAmount = customers.reduce((sum, c) => sum + c.pendingAmount, 0);

//   const handleAddCustomer = async () => {
//     if (!newCustomer.name.trim() || !newCustomer.phone.trim()) {
//       alert("Name and phone are required.");
//       return;
//     }

//     setSaving(true);
//     try {
//       const id = await createCustomer({
//         name: newCustomer.name.trim(),
//         phone: newCustomer.phone.trim(),
//         email: newCustomer.email.trim() || "",
//         area: newCustomer.area.trim() || "",
//         source: newCustomer.source,
//         enquiries: 0,
//         orders: 0,
//         totalPurchase: 0,
//         pendingAmount: 0,
//         status: "Active",
//         lastInteraction: "Today",
//       });

//       const ui: UiCustomer = {
//         id,
//         name: newCustomer.name.trim(),
//         phone: newCustomer.phone.trim(),
//         email: newCustomer.email.trim(),
//         area: newCustomer.area.trim() || "—",
//         source: newCustomer.source,
//         enquiries: 0,
//         orders: 0,
//         totalPurchase: 0,
//         pendingAmount: 0,
//         lastInteraction: "Today",
//         status: "Active",
//       };

//       setCustomers((current) => [ui, ...current]);
//       setNewCustomer({
//         name: "",
//         phone: "",
//         email: "",
//         area: "",
//         source: "Website",
//       });
//       setShowAddCustomer(false);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to add customer. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex min-h-[60vh] items-center justify-center bg-[#f7f7f4]">
//         <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#242424]">
//       <main className="mx-auto max-w-[1450px] px-5 py-7 lg:px-8">
//         {/* TITLE */}
//         <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//           <div>
//             <p className="mb-1 text-xs font-medium text-[#999]">Furniture / CRM</p>
//             <h1 className="text-2xl font-semibold tracking-tight">Customers</h1>
//             <p className="mt-1 text-sm text-[#777]">
//               Manage customer records, enquiries and purchase history.
//             </p>
//           </div>

//           <button
//             onClick={() => setShowAddCustomer(true)}
//             className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#125849]"
//           >
//             + Add Customer
//           </button>
//         </div>

//         {/* SUMMARY CARDS */}
//         <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <SummaryCard
//             title="Total Customers"
//             value={totalCustomers.toString()}
//             subtitle="Customer records"
//           />
//           <SummaryCard
//             title="Active Customers"
//             value={activeCustomers.toString()}
//             subtitle="Currently active"
//           />
//           <SummaryCard
//             title="Total Purchase"
//             value={formatCurrency(totalPurchase)}
//             subtitle="Recorded sales"
//           />
//           <SummaryCard
//             title="Pending Amount"
//             value={formatCurrency(pendingAmount)}
//             subtitle="Customer balances"
//             warning
//           />
//         </div>

//         {/* TABLE */}
//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="border-b border-[#eceae4] p-5">
//             <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
//               <div className="relative w-full xl:max-w-[430px]">
//                 <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999]">⌕</span>
//                 <input
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   placeholder="Search customer, phone or email..."
//                   className="h-11 w-full rounded-lg border border-[#ddd] bg-white pl-10 pr-4 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                 />
//               </div>

//               <div className="flex flex-wrap gap-3">
//                 <select
//                   value={source}
//                   onChange={(e) => setSource(e.target.value)}
//                   className="h-11 rounded-lg border border-[#ddd] bg-white px-3 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {sources.map((item) => (
//                     <option key={item}>{item}</option>
//                   ))}
//                 </select>

//                 <select
//                   value={status}
//                   onChange={(e) => setStatus(e.target.value)}
//                   className="h-11 rounded-lg border border-[#ddd] bg-white px-3 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   <option>All Status</option>
//                   <option>Active</option>
//                   <option>Inactive</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1050px] border-collapse">
//               <thead>
//                 <tr className="border-b border-[#e9e7e1] bg-[#fafaf8] text-left">
//                   <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#888]">Customer</th>
//                   <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#888]">Contact</th>
//                   <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#888]">Source</th>
//                   <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-[#888]">Enquiries</th>
//                   <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-[#888]">Orders</th>
//                   <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-[#888]">Total Purchase</th>
//                   <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-[#888]">Pending</th>
//                   <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#888]">Status</th>
//                   <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-[#888]">Action</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {filteredCustomers.map((customer) => (
//                   <tr
//                     key={customer.id}
//                     className="border-b border-[#efede8] transition hover:bg-[#fafbf9]"
//                   >
//                     <td className="px-5 py-4">
//                       <div className="flex items-center gap-3">
//                         <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f2ee] text-sm font-semibold text-[#176b5b]">
//                           {customer.name.charAt(0)}
//                         </div>
//                         <div>
//                           <p className="text-sm font-semibold text-[#333]">{customer.name}</p>
//                           <p className="mt-0.5 text-xs text-[#999]">
//                             {customer.id.slice(0, 8).toUpperCase()} · {customer.area}
//                           </p>
//                         </div>
//                       </div>
//                     </td>

//                     <td className="px-5 py-4">
//                       <p className="text-sm text-[#444]">{customer.phone}</p>
//                       <p className="mt-1 text-xs text-[#999]">{customer.email || "No email"}</p>
//                     </td>

//                     <td className="px-5 py-4">
//                       <SourceBadge source={customer.source} />
//                     </td>

//                     <td className="px-5 py-4 text-center text-sm font-medium">
//                       {customer.enquiries}
//                     </td>

//                     <td className="px-5 py-4 text-center text-sm font-medium">
//                       {customer.orders}
//                     </td>

//                     <td className="px-5 py-4 text-right text-sm font-semibold text-[#333]">
//                       {formatCurrency(customer.totalPurchase)}
//                     </td>

//                     <td className="px-5 py-4 text-right">
//                       <span
//                         className={
//                           customer.pendingAmount > 0
//                             ? "text-sm font-semibold text-[#c27b19]"
//                             : "text-sm font-medium text-[#777]"
//                         }
//                       >
//                         {formatCurrency(customer.pendingAmount)}
//                       </span>
//                     </td>

//                     <td className="px-5 py-4">
//                       <span
//                         className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
//                           customer.status === "Active"
//                             ? "bg-[#e8f6ef] text-[#16804d]"
//                             : "bg-[#f1f1f1] text-[#777]"
//                         }`}
//                       >
//                         {customer.status}
//                       </span>
//                     </td>

//                     <td className="px-5 py-4 text-right">
//                       <button
//                         onClick={() => setSelectedCustomer(customer)}
//                         className="rounded-md border border-[#ddd] px-3 py-1.5 text-xs font-semibold text-[#555] hover:border-[#176b5b] hover:text-[#176b5b]"
//                       >
//                         View
//                       </button>
//                     </td>
//                   </tr>
//                 ))}

//                 {filteredCustomers.length === 0 && (
//                   <tr>
//                     <td colSpan={9} className="px-5 py-14 text-center">
//                       <p className="text-sm font-medium text-[#555]">No customers found</p>
//                       <p className="mt-1 text-xs text-[#999]">
//                         {customers.length === 0
//                           ? "No customers in the database yet. Click “Add Customer” to create one."
//                           : "Try changing the search or filters."}
//                       </p>
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>

//           <div className="flex flex-col gap-2 border-t border-[#eceae4] bg-[#fafaf8] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
//             <p className="text-xs text-[#888]">
//               Showing {filteredCustomers.length} of {customers.length} customers
//             </p>
//             <p className="text-xs text-[#aaa]">Furniture ERP · Customer Management</p>
//           </div>
//         </section>
//       </main>

//       {/* ADD CUSTOMER MODAL */}
//       {showAddCustomer && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="w-full max-w-[520px] rounded-xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#eee] px-6 py-5">
//               <div>
//                 <h2 className="text-lg font-semibold">Add Customer</h2>
//                 <p className="mt-1 text-xs text-[#999]">
//                   Create a new furniture customer record.
//                 </p>
//               </div>
//               <button
//                 onClick={() => setShowAddCustomer(false)}
//                 className="text-xl text-[#999] hover:text-[#333]"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="space-y-4 px-6 py-6">
//               <InputField
//                 label="Customer Name *"
//                 value={newCustomer.name}
//                 onChange={(value) => setNewCustomer({ ...newCustomer, name: value })}
//                 placeholder="Enter customer name"
//               />
//               <InputField
//                 label="Phone / WhatsApp *"
//                 value={newCustomer.phone}
//                 onChange={(value) => setNewCustomer({ ...newCustomer, phone: value })}
//                 placeholder="+91 XXXXX XXXXX"
//               />
//               <InputField
//                 label="Email"
//                 value={newCustomer.email}
//                 onChange={(value) => setNewCustomer({ ...newCustomer, email: value })}
//                 placeholder="customer@email.com"
//               />
//               <InputField
//                 label="Address / Area"
//                 value={newCustomer.area}
//                 onChange={(value) => setNewCustomer({ ...newCustomer, area: value })}
//                 placeholder="Guntur"
//               />
//               <div>
//                 <label className="mb-2 block text-sm font-medium text-[#444]">Source</label>
//                 <select
//                   value={newCustomer.source}
//                   onChange={(e) =>
//                     setNewCustomer({ ...newCustomer, source: e.target.value })
//                   }
//                   className="h-11 w-full rounded-lg border border-[#ddd] bg-white px-3 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {sources
//                     .filter((item) => item !== "All Sources")
//                     .map((item) => (
//                       <option key={item}>{item}</option>
//                     ))}
//                 </select>
//               </div>
//             </div>

//             <div className="flex justify-end gap-3 border-t border-[#eee] px-6 py-4">
//               <button
//                 onClick={() => setShowAddCustomer(false)}
//                 className="rounded-lg border border-[#ddd] px-5 py-2.5 text-sm font-medium text-[#555] hover:bg-[#f7f7f7]"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleAddCustomer}
//                 disabled={saving}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//               >
//                 {saving ? "Saving..." : "Add Customer"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* CUSTOMER DETAIL MODAL */}
//       {selectedCustomer && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="w-full max-w-[700px] overflow-hidden rounded-xl bg-white shadow-2xl">
//             <div className="flex items-start justify-between border-b border-[#eee] px-6 py-5">
//               <div className="flex items-center gap-4">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f2ee] font-semibold text-[#176b5b]">
//                   {selectedCustomer.name.charAt(0)}
//                 </div>
//                 <div>
//                   <h2 className="text-lg font-semibold">{selectedCustomer.name}</h2>
//                   <p className="mt-1 text-xs text-[#999]">
//                     {selectedCustomer.id.slice(0, 8).toUpperCase()}
//                   </p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => setSelectedCustomer(null)}
//                 className="text-xl text-[#999] hover:text-[#333]"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="grid gap-4 px-6 py-6 sm:grid-cols-2">
//               <DetailItem label="Phone / WhatsApp" value={selectedCustomer.phone} />
//               <DetailItem label="Email" value={selectedCustomer.email || "Not available"} />
//               {/* <DetailItem label="Area" value={selectedCustomer.area || "Not available"} /> */}
//               <DetailItem label="Source" value={selectedCustomer.source} />
//               <DetailItem label="Enquiries" value={selectedCustomer.enquiries.toString()} />
//               <DetailItem label="Orders" value={selectedCustomer.orders.toString()} />
//               <DetailItem
//                 label="Total Purchase"
//                 value={formatCurrency(selectedCustomer.totalPurchase)}
//               />
//               <DetailItem
//                 label="Pending Amount"
//                 value={formatCurrency(selectedCustomer.pendingAmount)}
//               />
//               {/* <DetailItem label="Last Interaction" value={selectedCustomer.lastInteraction} /> */}
//               <DetailItem label="Status" value={selectedCustomer.status} />
//             </div>

//             <div className="border-t border-[#eee] bg-[#fafaf8] px-6 py-4">
//               <p className="text-xs text-[#999]">
//                 Enquiry history, product interests, orders, payments and internal notes
//                 can be connected to this customer record.
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function SummaryCard({
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
//       <p className={`mt-2 text-2xl font-semibold ${warning ? "text-[#b46b17]" : "text-[#222]"}`}>
//         {value}
//       </p>
//       <p className="mt-1 text-xs text-[#aaa]">{subtitle}</p>
//     </div>
//   );
// }

// function SourceBadge({ source }: { source: string }) {
//   return (
//     <span className="inline-flex rounded-full bg-[#f3f4f2] px-2.5 py-1 text-xs font-medium text-[#666]">
//       {source}
//     </span>
//   );
// }

// function InputField({
//   label,
//   value,
//   onChange,
//   placeholder,
// }: {
//   label: string;
//   value: string;
//   onChange: (value: string) => void;
//   placeholder: string;
// }) {
//   return (
//     <div>
//       <label className="mb-2 block text-sm font-medium text-[#444]">{label}</label>
//       <input
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         placeholder={placeholder}
//         className="h-11 w-full rounded-lg border border-[#ddd] px-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//       />
//     </div>
//   );
// }

// function DetailItem({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-lg border border-[#eee] bg-[#fafaf8] p-4">
//       <p className="text-xs text-[#999]">{label}</p>
//       <p className="mt-1 text-sm font-medium text-[#333]">{value}</p>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAllCustomers,
//   createCustomer,
//   type FurnitureCustomer,
// } from "@/modules/furniture/services/customerService";

// type UiCustomer = {
//   id: string;
//   name: string;
//   phone: string;
//   email: string;
//   area: string;
//   source: string;
//   enquiries: number;
//   orders: number;
//   totalPurchase: number;
//   pendingAmount: number;
//   lastInteraction: string;
//   status: "Active" | "Inactive";
// };

// function mapToUi(c: FurnitureCustomer): UiCustomer {
//   return {
//     id: c.id,
//     name: c.name || "Unknown",
//     phone: c.phone || "—",
//     email: c.email || "",
//     area: c.area || c.address || "—",
//     source: c.source || "Other",
//     enquiries: c.enquiries ?? 0,
//     orders: c.orders ?? 0,
//     totalPurchase: c.totalPurchase ?? 0,
//     pendingAmount: c.pendingAmount ?? 0,
//     lastInteraction: c.lastInteraction
//       ? c.lastInteraction
//       : c.createdAt?.toDate
//       ? c.createdAt.toDate().toLocaleDateString("en-IN", {
//           day: "2-digit",
//           month: "short",
//           year: "numeric",
//         })
//       : "—",
//     status: c.status === "Inactive" ? "Inactive" : "Active",
//   };
// }

// const sources = [
//   "All Sources",
//   "Instagram",
//   "Facebook",
//   "Google",
//   "WhatsApp",
//   "Walk-in",
//   "Referral",
//   "Website",
//   "Other",
// ];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// export default function FurnitureCustomersPage() {
//   const [customers, setCustomers] = useState<UiCustomer[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [source, setSource] = useState("All Sources");
//   const [status, setStatus] = useState("All Status");
//   const [selectedCustomer, setSelectedCustomer] = useState<UiCustomer | null>(
//     null
//   );
//   const [showAddCustomer, setShowAddCustomer] = useState(false);
//   const [saving, setSaving] = useState(false);

//   const [newCustomer, setNewCustomer] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     area: "",
//     source: "Website",
//   });

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllCustomers();
//         if (!cancelled) {
//           setCustomers(data.map(mapToUi));
//         }
//       } catch (err) {
//         console.error("Failed to load customers:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const filteredCustomers = useMemo(() => {
//     return customers.filter((customer) => {
//       const searchText = search.toLowerCase();

//       const matchesSearch =
//         !searchText ||
//         customer.name.toLowerCase().includes(searchText) ||
//         customer.phone.toLowerCase().includes(searchText) ||
//         customer.email.toLowerCase().includes(searchText) ||
//         customer.id.toLowerCase().includes(searchText);

//       const matchesSource =
//         source === "All Sources" || customer.source === source;

//       const matchesStatus =
//         status === "All Status" || customer.status === status;

//       return matchesSearch && matchesSource && matchesStatus;
//     });
//   }, [customers, search, source, status]);

//   const totalCustomers = customers.length;
//   const activeCustomers = customers.filter((c) => c.status === "Active").length;
//   const totalPurchase = customers.reduce((sum, c) => sum + c.totalPurchase, 0);
//   const pendingAmount = customers.reduce((sum, c) => sum + c.pendingAmount, 0);

//   const handleAddCustomer = async () => {
//     if (!newCustomer.name.trim() || !newCustomer.phone.trim()) {
//       alert("Name and phone are required.");
//       return;
//     }

//     setSaving(true);
//     try {
//       const id = await createCustomer({
//         name: newCustomer.name.trim(),
//         phone: newCustomer.phone.trim(),
//         email: newCustomer.email.trim() || "",
//         area: newCustomer.area.trim() || "",
//         source: newCustomer.source,
//         enquiries: 0,
//         orders: 0,
//         totalPurchase: 0,
//         pendingAmount: 0,
//         status: "Active",
//         lastInteraction: "Today",
//       });

//       const ui: UiCustomer = {
//         id,
//         name: newCustomer.name.trim(),
//         phone: newCustomer.phone.trim(),
//         email: newCustomer.email.trim(),
//         area: newCustomer.area.trim() || "—",
//         source: newCustomer.source,
//         enquiries: 0,
//         orders: 0,
//         totalPurchase: 0,
//         pendingAmount: 0,
//         lastInteraction: "Today",
//         status: "Active",
//       };

//       setCustomers((current) => [ui, ...current]);
//       setNewCustomer({
//         name: "",
//         phone: "",
//         email: "",
//         area: "",
//         source: "Website",
//       });
//       setShowAddCustomer(false);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to add customer. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex min-h-[60vh] items-center justify-center bg-[#f7f7f4]">
//         <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#242424]">
//       <main className="mx-auto max-w-[1450px] px-3 py-5 sm:px-5 sm:py-7 lg:px-8">
//         {/* TITLE + Add beside heading */}
//         <div className="mb-5 flex items-start justify-between gap-3 sm:mb-7">
//           <div className="min-w-0 flex-1">
//             <p className="mb-1 text-xs font-medium text-[#999]">
//               Furniture / CRM
//             </p>
//             <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
//               Customers
//             </h1>
//             <p className="mt-1 text-xs text-[#777] sm:text-sm">
//               Manage customer records, enquiries and purchase history.
//             </p>
//           </div>

//           <button
//             onClick={() => setShowAddCustomer(true)}
//             className="shrink-0 rounded-lg bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-[#125849] sm:px-5 sm:text-sm"
//           >
//             + Add Customer
//           </button>
//         </div>

//         {/* SUMMARY CARDS */}
//         <div className="mb-5 grid grid-cols-2 gap-3 sm:mb-7 sm:gap-4 xl:grid-cols-4">
//           <SummaryCard
//             title="Total Customers"
//             value={totalCustomers.toString()}
//             subtitle="Customer records"
//           />
//           <SummaryCard
//             title="Active Customers"
//             value={activeCustomers.toString()}
//             subtitle="Currently active"
//           />
//           <SummaryCard
//             title="Total Purchase"
//             value={formatCurrency(totalPurchase)}
//             subtitle="Recorded sales"
//           />
//           <SummaryCard
//             title="Pending Amount"
//             value={formatCurrency(pendingAmount)}
//             subtitle="Customer balances"
//             warning
//           />
//         </div>

//         {/* TABLE / LIST */}
//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="border-b border-[#eceae4] p-3 sm:p-5">
//             <div className="flex flex-col gap-3">
//               <div className="relative w-full">
//                 <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999]">
//                   ⌕
//                 </span>
//                 <input
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   placeholder="Search customer, phone or email..."
//                   className="h-11 w-full rounded-xl border border-[#ddd] bg-white pl-10 pr-4 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                 />
//               </div>

//               {/* Filters — one line */}
//               <div className="flex w-full gap-2">
//                 <select
//                   value={source}
//                   onChange={(e) => setSource(e.target.value)}
//                   className="h-11 min-w-0 flex-1 rounded-xl border border-[#ddd] bg-white px-2.5 text-xs outline-none focus:border-[#176b5b] sm:px-3 sm:text-sm"
//                 >
//                   {sources.map((item) => (
//                     <option key={item}>{item}</option>
//                   ))}
//                 </select>

//                 <select
//                   value={status}
//                   onChange={(e) => setStatus(e.target.value)}
//                   className="h-11 min-w-0 flex-1 rounded-xl border border-[#ddd] bg-white px-2.5 text-xs outline-none focus:border-[#176b5b] sm:px-3 sm:text-sm"
//                 >
//                   <option>All Status</option>
//                   <option>Active</option>
//                   <option>Inactive</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           {/* Desktop table */}
//           <div className="hidden overflow-x-auto md:block">
//             <table className="w-full min-w-[900px] border-collapse">
//               <thead>
//                 <tr className="border-b border-[#e9e7e1] bg-[#fafaf8] text-left">
//                   <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[#888] sm:px-5 sm:py-4">
//                     Customer
//                   </th>
//                   <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[#888] sm:px-5 sm:py-4">
//                     Contact
//                   </th>
//                   <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[#888] sm:px-5 sm:py-4">
//                     Source
//                   </th>
//                   <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-[#888] sm:px-5 sm:py-4">
//                     Enquiries
//                   </th>
//                   <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-[#888] sm:px-5 sm:py-4">
//                     Orders
//                   </th>
//                   <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-[#888] sm:px-5 sm:py-4">
//                     Total Purchase
//                   </th>
//                   <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-[#888] sm:px-5 sm:py-4">
//                     Pending
//                   </th>
//                   <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[#888] sm:px-5 sm:py-4">
//                     Status
//                   </th>
//                   <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-[#888] sm:px-5 sm:py-4">
//                     Action
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {filteredCustomers.map((customer) => (
//                   <tr
//                     key={customer.id}
//                     className="border-b border-[#efede8] transition hover:bg-[#fafbf9]"
//                   >
//                     <td className="px-4 py-3 sm:px-5 sm:py-4">
//                       <div className="flex items-center gap-3">
//                         <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8f2ee] text-sm font-semibold text-[#176b5b]">
//                           {customer.name.charAt(0)}
//                         </div>
//                         <div className="min-w-0">
//                           <p className="truncate text-sm font-semibold text-[#333]">
//                             {customer.name}
//                           </p>
//                           <p className="mt-0.5 truncate text-xs text-[#999]">
//                             {customer.id.slice(0, 8).toUpperCase()} ·{" "}
//                             {customer.area}
//                           </p>
//                         </div>
//                       </div>
//                     </td>

//                     <td className="px-4 py-3 sm:px-5 sm:py-4">
//                       <p className="text-sm text-[#444]">{customer.phone}</p>
//                       <p className="mt-1 truncate text-xs text-[#999]">
//                         {customer.email || "No email"}
//                       </p>
//                     </td>

//                     <td className="px-4 py-3 sm:px-5 sm:py-4">
//                       <SourceBadge source={customer.source} />
//                     </td>

//                     <td className="px-4 py-3 text-center text-sm font-medium sm:px-5 sm:py-4">
//                       {customer.enquiries}
//                     </td>

//                     <td className="px-4 py-3 text-center text-sm font-medium sm:px-5 sm:py-4">
//                       {customer.orders}
//                     </td>

//                     <td className="px-4 py-3 text-right text-sm font-semibold text-[#333] sm:px-5 sm:py-4">
//                       {formatCurrency(customer.totalPurchase)}
//                     </td>

//                     <td className="px-4 py-3 text-right sm:px-5 sm:py-4">
//                       <span
//                         className={
//                           customer.pendingAmount > 0
//                             ? "text-sm font-semibold text-[#c27b19]"
//                             : "text-sm font-medium text-[#777]"
//                         }
//                       >
//                         {formatCurrency(customer.pendingAmount)}
//                       </span>
//                     </td>

//                     <td className="px-4 py-3 sm:px-5 sm:py-4">
//                       <span
//                         className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
//                           customer.status === "Active"
//                             ? "bg-[#e8f6ef] text-[#16804d]"
//                             : "bg-[#f1f1f1] text-[#777]"
//                         }`}
//                       >
//                         {customer.status}
//                       </span>
//                     </td>

//                     <td className="px-4 py-3 text-right sm:px-5 sm:py-4">
//                       <button
//                         onClick={() => setSelectedCustomer(customer)}
//                         className="rounded-md border border-[#ddd] px-3 py-1.5 text-xs font-semibold text-[#555] hover:border-[#176b5b] hover:text-[#176b5b]"
//                       >
//                         View
//                       </button>
//                     </td>
//                   </tr>
//                 ))}

//                 {filteredCustomers.length === 0 && (
//                   <tr>
//                     <td colSpan={9} className="px-5 py-14 text-center">
//                       <p className="text-sm font-medium text-[#555]">
//                         No customers found
//                       </p>
//                       <p className="mt-1 text-xs text-[#999]">
//                         {customers.length === 0
//                           ? "No customers yet. Click “Add Customer” to create one."
//                           : "Try changing the search or filters."}
//                       </p>
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {/* Mobile cards */}
//           <div className="space-y-3 p-3 md:hidden">
//             {filteredCustomers.map((customer) => (
//               <button
//                 key={customer.id}
//                 type="button"
//                 onClick={() => setSelectedCustomer(customer)}
//                 className="w-full rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3 text-left"
//               >
//                 <div className="flex items-start gap-3">
//                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8f2ee] text-sm font-semibold text-[#176b5b]">
//                     {customer.name.charAt(0)}
//                   </div>
//                   <div className="min-w-0 flex-1">
//                     <div className="flex items-start justify-between gap-2">
//                       <p className="truncate text-sm font-semibold text-[#333]">
//                         {customer.name}
//                       </p>
//                       <span
//                         className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${
//                           customer.status === "Active"
//                             ? "bg-[#e8f6ef] text-[#16804d]"
//                             : "bg-[#f1f1f1] text-[#777]"
//                         }`}
//                       >
//                         {customer.status}
//                       </span>
//                     </div>
//                     <p className="mt-0.5 text-xs text-[#666]">
//                       {customer.phone}
//                     </p>
//                     <p className="mt-1 text-xs text-[#999]">
//                       {customer.source} · {customer.orders} orders
//                     </p>
//                     <div className="mt-2 flex items-center justify-between text-xs">
//                       <span className="font-semibold text-[#333]">
//                         {formatCurrency(customer.totalPurchase)}
//                       </span>
//                       {customer.pendingAmount > 0 && (
//                         <span className="font-medium text-[#c27b19]">
//                           Pending {formatCurrency(customer.pendingAmount)}
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </button>
//             ))}

//             {filteredCustomers.length === 0 && (
//               <p className="py-10 text-center text-sm text-[#777]">
//                 No customers found
//               </p>
//             )}
//           </div>

//           <div className="flex flex-col gap-1 border-t border-[#eceae4] bg-[#fafaf8] px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4">
//             <p className="text-xs text-[#888]">
//               Showing {filteredCustomers.length} of {customers.length} customers
//             </p>
//             <p className="text-xs text-[#aaa]">
//               Furniture ERP · Customer Management
//             </p>
//           </div>
//         </section>
//       </main>

//       {/* ADD CUSTOMER MODAL */}
//       {showAddCustomer && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-[520px] overflow-y-auto rounded-xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#eee] px-4 py-4 sm:px-6 sm:py-5">
//               <div>
//                 <h2 className="text-lg font-semibold">Add Customer</h2>
//                 <p className="mt-1 text-xs text-[#999]">
//                   Create a new furniture customer record.
//                 </p>
//               </div>
//               <button
//                 onClick={() => setShowAddCustomer(false)}
//                 className="text-xl text-[#999] hover:text-[#333]"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="space-y-4 px-4 py-5 sm:px-6 sm:py-6">
//               <InputField
//                 label="Customer Name *"
//                 value={newCustomer.name}
//                 onChange={(value) =>
//                   setNewCustomer({ ...newCustomer, name: value })
//                 }
//                 placeholder="Enter customer name"
//               />
//               <InputField
//                 label="Phone / WhatsApp *"
//                 value={newCustomer.phone}
//                 onChange={(value) =>
//                   setNewCustomer({ ...newCustomer, phone: value })
//                 }
//                 placeholder="+91 XXXXX XXXXX"
//               />
//               <InputField
//                 label="Email"
//                 value={newCustomer.email}
//                 onChange={(value) =>
//                   setNewCustomer({ ...newCustomer, email: value })
//                 }
//                 placeholder="customer@email.com"
//               />
//               <InputField
//                 label="Address / Area"
//                 value={newCustomer.area}
//                 onChange={(value) =>
//                   setNewCustomer({ ...newCustomer, area: value })
//                 }
//                 placeholder="Guntur"
//               />
//               <div>
//                 <label className="mb-2 block text-sm font-medium text-[#444]">
//                   Source
//                 </label>
//                 <select
//                   value={newCustomer.source}
//                   onChange={(e) =>
//                     setNewCustomer({ ...newCustomer, source: e.target.value })
//                   }
//                   className="h-11 w-full rounded-lg border border-[#ddd] bg-white px-3 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {sources
//                     .filter((item) => item !== "All Sources")
//                     .map((item) => (
//                       <option key={item}>{item}</option>
//                     ))}
//                 </select>
//               </div>
//             </div>

//             <div className="flex justify-end gap-3 border-t border-[#eee] px-4 py-4 sm:px-6">
//               <button
//                 onClick={() => setShowAddCustomer(false)}
//                 className="rounded-lg border border-[#ddd] px-5 py-2.5 text-sm font-medium text-[#555] hover:bg-[#f7f7f7]"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleAddCustomer}
//                 disabled={saving}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//               >
//                 {saving ? "Saving..." : "Add Customer"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* CUSTOMER DETAIL MODAL */}
//       {selectedCustomer && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-[700px] overflow-y-auto rounded-xl bg-white shadow-2xl">
//             <div className="flex items-start justify-between border-b border-[#eee] px-4 py-4 sm:px-6 sm:py-5">
//               <div className="flex min-w-0 items-center gap-3 sm:gap-4">
//                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f2ee] font-semibold text-[#176b5b]">
//                   {selectedCustomer.name.charAt(0)}
//                 </div>
//                 <div className="min-w-0">
//                   <h2 className="truncate text-lg font-semibold">
//                     {selectedCustomer.name}
//                   </h2>
//                   <p className="mt-1 text-xs text-[#999]">
//                     {selectedCustomer.id.slice(0, 8).toUpperCase()}
//                   </p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => setSelectedCustomer(null)}
//                 className="shrink-0 text-xl text-[#999] hover:text-[#333]"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="grid gap-3 px-4 py-5 sm:grid-cols-2 sm:gap-4 sm:px-6 sm:py-6">
//               <DetailItem
//                 label="Phone / WhatsApp"
//                 value={selectedCustomer.phone}
//               />
//               <DetailItem
//                 label="Email"
//                 value={selectedCustomer.email || "Not available"}
//               />
//               <DetailItem label="Source" value={selectedCustomer.source} />
//               <DetailItem
//                 label="Enquiries"
//                 value={selectedCustomer.enquiries.toString()}
//               />
//               <DetailItem
//                 label="Orders"
//                 value={selectedCustomer.orders.toString()}
//               />
//               <DetailItem
//                 label="Total Purchase"
//                 value={formatCurrency(selectedCustomer.totalPurchase)}
//               />
//               <DetailItem
//                 label="Pending Amount"
//                 value={formatCurrency(selectedCustomer.pendingAmount)}
//               />
//               <DetailItem label="Status" value={selectedCustomer.status} />
//             </div>

//             <div className="border-t border-[#eee] bg-[#fafaf8] px-4 py-4 sm:px-6">
//               <p className="text-xs text-[#999]">
//                 Enquiry history, product interests, orders, payments and
//                 internal notes can be connected to this customer record.
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function SummaryCard({
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
//       <p className="text-[11px] font-medium text-[#999] sm:text-xs">{title}</p>
//       <p
//         className={`mt-1.5 truncate text-lg font-semibold sm:mt-2 sm:text-2xl ${
//           warning ? "text-[#b46b17]" : "text-[#222]"
//         }`}
//       >
//         {value}
//       </p>
//       <p className="mt-1 text-[10px] text-[#aaa] sm:text-xs">{subtitle}</p>
//     </div>
//   );
// }

// function SourceBadge({ source }: { source: string }) {
//   return (
//     <span className="inline-flex rounded-full bg-[#f3f4f2] px-2.5 py-1 text-xs font-medium text-[#666]">
//       {source}
//     </span>
//   );
// }

// function InputField({
//   label,
//   value,
//   onChange,
//   placeholder,
// }: {
//   label: string;
//   value: string;
//   onChange: (value: string) => void;
//   placeholder: string;
// }) {
//   return (
//     <div>
//       <label className="mb-2 block text-sm font-medium text-[#444]">
//         {label}
//       </label>
//       <input
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         placeholder={placeholder}
//         className="h-11 w-full rounded-lg border border-[#ddd] px-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//       />
//     </div>
//   );
// }

// function DetailItem({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-lg border border-[#eee] bg-[#fafaf8] p-4">
//       <p className="text-xs text-[#999]">{label}</p>
//       <p className="mt-1 text-sm font-medium text-[#333]">{value}</p>
//     </div>
//   );
// }


"use client";

import { useEffect, useMemo, useState } from "react";
import {
  getAllCustomers,
  createCustomer,
  type FurnitureCustomer,
} from "@/modules/furniture/services/customerService";
import {
  getAllOrders,
  isVisibleOrderInErp,
  type FurnitureOrder,
} from "@/modules/furniture/services/orderService";

type UiCustomer = {
  id: string;
  uid?: string;
  name: string;
  phone: string;
  email: string;
  area: string;
  source: string;
  enquiries: number;
  orders: number;
  totalPurchase: number;
  pendingAmount: number;
  lastInteraction: string;
  status: "Active" | "Inactive";
};

function normalizePhone(phone?: string): string {
  return (phone || "").replace(/\D/g, "").slice(-10);
}

function normalizeEmail(email?: string): string {
  return (email || "").trim().toLowerCase();
}

function orderTotal(o: FurnitureOrder): number {
  return Number(o.total ?? o.amount ?? o.totalAmount ?? 0) || 0;
}

function orderPaid(o: FurnitureOrder): number {
  const total = orderTotal(o);
  const paid = Number(o.paid ?? 0) || 0;
  const pay = String(o.paymentStatus || "").toLowerCase();
  if (pay === "paid" || pay === "received") return Math.max(paid, total);
  if (pay === "refunded") return 0;
  return paid;
}

function orderPending(o: FurnitureOrder): number {
  const status = String(o.status || o.orderStatus || "").toLowerCase();
  const refund = String(o.refundStatus || "").toLowerCase();
  if (status === "cancelled") {
    // After refund complete, balances are cleared
    if (refund === "completed" || refund === "not_required") return 0;
    // Refund still pending — not regular customer pending
    return 0;
  }
  const total = orderTotal(o);
  const paid = orderPaid(o);
  return Math.max(total - paid, 0);
}

function orderMatchesCustomer(
  o: FurnitureOrder,
  c: FurnitureCustomer
): boolean {
  const cPhone = normalizePhone(c.phone);
  const oPhone = normalizePhone(o.phone || o.shippingAddress?.phone);
  if (cPhone && oPhone && cPhone === oPhone) return true;

  const cEmail = normalizeEmail(c.email);
  const oEmail = normalizeEmail(o.email || o.shippingAddress?.email);
  if (cEmail && oEmail && cEmail === oEmail) return true;

  const uid = (c.uid || c.id || "").trim();
  if (uid) {
    if (o.userId && String(o.userId) === uid) return true;
    if (o.customerId && String(o.customerId) === uid) return true;
  }
  if (c.id && o.customerId && String(o.customerId) === c.id) return true;

  return false;
}

function aggregateForCustomer(
  c: FurnitureCustomer,
  orders: FurnitureOrder[]
): Pick<UiCustomer, "orders" | "totalPurchase" | "pendingAmount"> {
  const matched = orders.filter(
    (o) => isVisibleOrderInErp(o) && orderMatchesCustomer(o, c)
  );

  const totalPurchase = matched.reduce((sum, o) => sum + orderPaid(o), 0);
  const pendingAmount = matched.reduce((sum, o) => sum + orderPending(o), 0);

  return {
    orders: matched.length,
    totalPurchase,
    pendingAmount,
  };
}

function mapToUi(
  c: FurnitureCustomer,
  orders: FurnitureOrder[]
): UiCustomer {
  const agg = aggregateForCustomer(c, orders);

  return {
    id: c.id,
    uid: c.uid,
    name: c.name || "Unknown",
    phone: c.phone || "—",
    email: c.email || "",
    // area: c.area || c.address || "—",
    area:
  [
    c.address,
    c.area,
  ]
    .filter(
      (value): value is string =>
        typeof value === "string" && value.trim().length > 0
    )
    .filter(
      (value, index, values) => values.indexOf(value) === index
    )
    .join(", ") || "—",
    source: c.source || "Other",
    enquiries: c.enquiries ?? 0,
    orders: agg.orders,
    totalPurchase: agg.totalPurchase,
    pendingAmount: agg.pendingAmount,
    lastInteraction: c.lastInteraction
      ? c.lastInteraction
      : c.createdAt?.toDate
      ? c.createdAt.toDate().toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      : "—",
    status: c.status === "Inactive" ? "Inactive" : "Active",
  };
}

const sources = [
  "All Sources",
  "Instagram",
  "Facebook",
  "Google",
  "WhatsApp",
  "Walk-in",
  "Referral",
  "Website",
  "Other",
];

function formatCurrency(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

export default function FurnitureCustomersPage() {
  const [customers, setCustomers] = useState<UiCustomer[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [source, setSource] = useState("All Sources");
  const [status, setStatus] = useState("All Status");
  const [selectedCustomer, setSelectedCustomer] = useState<UiCustomer | null>(
    null
  );
  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const [saving, setSaving] = useState(false);

  const [newCustomer, setNewCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    area: "",
    source: "Website",
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const [customerData, orderData] = await Promise.all([
          getAllCustomers(),
          getAllOrders(),
        ]);
        if (!cancelled) {
          setCustomers(
            customerData.map((c) => mapToUi(c, orderData))
          );
        }
      } catch (err) {
        console.error("Failed to load customers:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const filteredCustomers = useMemo(() => {
    return customers.filter((customer) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        !searchText ||
        customer.name.toLowerCase().includes(searchText) ||
        customer.phone.toLowerCase().includes(searchText) ||
        customer.email.toLowerCase().includes(searchText) ||
        customer.id.toLowerCase().includes(searchText);

      const matchesSource =
        source === "All Sources" || customer.source === source;

      const matchesStatus =
        status === "All Status" || customer.status === status;

      return matchesSearch && matchesSource && matchesStatus;
    });
  }, [customers, search, source, status]);

  const totalCustomers = customers.length;
  const activeCustomers = customers.filter((c) => c.status === "Active").length;
  const totalPurchase = customers.reduce((sum, c) => sum + c.totalPurchase, 0);
  const pendingAmount = customers.reduce((sum, c) => sum + c.pendingAmount, 0);

  const handleAddCustomer = async () => {
    if (!newCustomer.name.trim() || !newCustomer.phone.trim()) {
      alert("Name and phone are required.");
      return;
    }

    setSaving(true);
    try {
      const id = await createCustomer({
        name: newCustomer.name.trim(),
        phone: newCustomer.phone.trim(),
        email: newCustomer.email.trim() || "",
        area: newCustomer.area.trim() || "",
        source: newCustomer.source,
        enquiries: 0,
        orders: 0,
        totalPurchase: 0,
        pendingAmount: 0,
        status: "Active",
        lastInteraction: "Today",
      });

      const ui: UiCustomer = {
        id,
        name: newCustomer.name.trim(),
        phone: newCustomer.phone.trim(),
        email: newCustomer.email.trim(),
        area: newCustomer.area.trim() || "—",
        source: newCustomer.source,
        enquiries: 0,
        orders: 0,
        totalPurchase: 0,
        pendingAmount: 0,
        lastInteraction: "Today",
        status: "Active",
      };

      setCustomers((current) => [ui, ...current]);
      setNewCustomer({
        name: "",
        phone: "",
        email: "",
        area: "",
        source: "Website",
      });
      setShowAddCustomer(false);
    } catch (err) {
      console.error(err);
      alert("Failed to add customer. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-[#f7f7f4]">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#242424]">
      <main className="mx-auto max-w-[1450px] px-3 py-5 sm:px-5 sm:py-7 lg:px-8">
        <div className="mb-5 flex items-start justify-between gap-3 sm:mb-7">
          <div className="min-w-0 flex-1">
            <p className="mb-1 text-xs font-medium text-[#999]">
              Furniture / CRM
            </p>
            <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Customers
            </h1>
            <p className="mt-1 text-xs text-[#777] sm:text-sm">
              Manage customer records, enquiries and purchase history.
            </p>
          </div>

          <button
            onClick={() => setShowAddCustomer(true)}
            className="shrink-0 rounded-lg bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-[#125849] sm:px-5 sm:text-sm"
          >
            + Add Customer
          </button>
        </div>

        <div className="mb-5 grid grid-cols-2 gap-3 sm:mb-7 sm:gap-4 xl:grid-cols-4">
          <SummaryCard
            title="Total Customers"
            value={totalCustomers.toString()}
            subtitle="Customer records"
          />
          <SummaryCard
            title="Active Customers"
            value={activeCustomers.toString()}
            subtitle="Currently active"
          />
          <SummaryCard
            title="Total Purchase"
            value={formatCurrency(totalPurchase)}
            subtitle="From paid orders"
          />
          <SummaryCard
            title="Pending Amount"
            value={formatCurrency(pendingAmount)}
            subtitle="Unpaid order balances"
            warning
          />
        </div>

        <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
          <div className="border-b border-[#eceae4] p-3 sm:p-5">
            <div className="flex flex-col gap-3">
              <div className="relative w-full">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999]">
                  ⌕
                </span>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search customer, phone or email..."
                  className="h-11 w-full rounded-xl border border-[#ddd] bg-white pl-10 pr-4 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
                />
              </div>

              <div className="flex w-full gap-2">
                <select
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  className="h-11 min-w-0 flex-1 rounded-xl border border-[#ddd] bg-white px-2.5 text-xs outline-none focus:border-[#176b5b] sm:px-3 sm:text-sm"
                >
                  {sources.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>

                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="h-11 min-w-0 flex-1 rounded-xl border border-[#ddd] bg-white px-2.5 text-xs outline-none focus:border-[#176b5b] sm:px-3 sm:text-sm"
                >
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>
          </div>

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr className="border-b border-[#e9e7e1] bg-[#fafaf8] text-left">
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[#888] sm:px-5 sm:py-4">
                    Customer
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[#888] sm:px-5 sm:py-4">
                    Contact
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[#888] sm:px-5 sm:py-4">
                    Source
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-[#888] sm:px-5 sm:py-4">
                    Enquiries
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-[#888] sm:px-5 sm:py-4">
                    Orders
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-[#888] sm:px-5 sm:py-4">
                    Total Purchase
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-[#888] sm:px-5 sm:py-4">
                    Pending
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[#888] sm:px-5 sm:py-4">
                    Status
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-[#888] sm:px-5 sm:py-4">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredCustomers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="border-b border-[#efede8] transition hover:bg-[#fafbf9]"
                  >
                    <td className="px-4 py-3 sm:px-5 sm:py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8f2ee] text-sm font-semibold text-[#176b5b]">
                          {customer.name.charAt(0)}
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-[#333]">
                            {customer.name}
                          </p>
                          {/* <p className="mt-0.5 truncate text-xs text-[#999]">
                            {customer.id.slice(0, 8).toUpperCase()} ·{" "}
                            {customer.area}
                          </p> */}

                          <p className="mt-0.5 text-xs leading-5 text-[#999] break-words">
                            {customer.id.slice(0, 8).toUpperCase()} · {customer.area}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-3 sm:px-5 sm:py-4">
                      <p className="text-sm text-[#444]">{customer.phone}</p>
                      <p className="mt-1 truncate text-xs text-[#999]">
                        {customer.email || "No email"}
                      </p>
                    </td>

                    <td className="px-4 py-3 sm:px-5 sm:py-4">
                      <SourceBadge source={customer.source} />
                    </td>

                    <td className="px-4 py-3 text-center text-sm font-medium sm:px-5 sm:py-4">
                      {customer.enquiries}
                    </td>

                    <td className="px-4 py-3 text-center text-sm font-medium sm:px-5 sm:py-4">
                      {customer.orders}
                    </td>

                    <td className="px-4 py-3 text-right text-sm font-semibold text-[#333] sm:px-5 sm:py-4">
                      {formatCurrency(customer.totalPurchase)}
                    </td>

                    <td className="px-4 py-3 text-right sm:px-5 sm:py-4">
                      <span
                        className={
                          customer.pendingAmount > 0
                            ? "text-sm font-semibold text-[#c27b19]"
                            : "text-sm font-medium text-[#777]"
                        }
                      >
                        {formatCurrency(customer.pendingAmount)}
                      </span>
                    </td>

                    <td className="px-4 py-3 sm:px-5 sm:py-4">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                          customer.status === "Active"
                            ? "bg-[#e8f6ef] text-[#16804d]"
                            : "bg-[#f1f1f1] text-[#777]"
                        }`}
                      >
                        {customer.status}
                      </span>
                    </td>

                    <td className="px-4 py-3 text-right sm:px-5 sm:py-4">
                      <button
                        onClick={() => setSelectedCustomer(customer)}
                        className="rounded-md border border-[#ddd] px-3 py-1.5 text-xs font-semibold text-[#555] hover:border-[#176b5b] hover:text-[#176b5b]"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}

                {filteredCustomers.length === 0 && (
                  <tr>
                    <td colSpan={9} className="px-5 py-14 text-center">
                      <p className="text-sm font-medium text-[#555]">
                        No customers found
                      </p>
                      <p className="mt-1 text-xs text-[#999]">
                        {customers.length === 0
                          ? "No customers yet. Click “Add Customer” to create one."
                          : "Try changing the search or filters."}
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="space-y-3 p-3 md:hidden">
            {filteredCustomers.map((customer) => (
              <button
                key={customer.id}
                type="button"
                onClick={() => setSelectedCustomer(customer)}
                className="w-full rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3 text-left"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8f2ee] text-sm font-semibold text-[#176b5b]">
                    {customer.name.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="truncate text-sm font-semibold text-[#333]">
                        {customer.name}
                      </p>
                      <span
                        className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${
                          customer.status === "Active"
                            ? "bg-[#e8f6ef] text-[#16804d]"
                            : "bg-[#f1f1f1] text-[#777]"
                        }`}
                      >
                        {customer.status}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-[#666]">
                      {customer.phone}
                    </p>
                    <p className="mt-1 text-xs text-[#999]">
                      {customer.source} · {customer.orders} order
                      {customer.orders !== 1 ? "s" : ""}
                    </p>
                    <div className="mt-2 flex items-center justify-between text-xs">
                      <span className="font-semibold text-[#333]">
                        {formatCurrency(customer.totalPurchase)}
                      </span>
                      {customer.pendingAmount > 0 && (
                        <span className="font-medium text-[#c27b19]">
                          Pending {formatCurrency(customer.pendingAmount)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            ))}

            {filteredCustomers.length === 0 && (
              <p className="py-10 text-center text-sm text-[#777]">
                No customers found
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1 border-t border-[#eceae4] bg-[#fafaf8] px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4">
            <p className="text-xs text-[#888]">
              Showing {filteredCustomers.length} of {customers.length} customers
            </p>
            <p className="text-xs text-[#aaa]">
              Furniture ERP · Customer Management
            </p>
          </div>
        </section>
      </main>

      {showAddCustomer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="max-h-[90vh] w-full max-w-[520px] overflow-y-auto rounded-xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#eee] px-4 py-4 sm:px-6 sm:py-5">
              <div>
                <h2 className="text-lg font-semibold">Add Customer</h2>
                <p className="mt-1 text-xs text-[#999]">
                  Create a new furniture customer record.
                </p>
              </div>
              <button
                onClick={() => setShowAddCustomer(false)}
                className="text-xl text-[#999] hover:text-[#333]"
              >
                ×
              </button>
            </div>

            <div className="space-y-4 px-4 py-5 sm:px-6 sm:py-6">
              <InputField
                label="Customer Name *"
                value={newCustomer.name}
                onChange={(value) =>
                  setNewCustomer({ ...newCustomer, name: value })
                }
                placeholder="Enter customer name"
              />
              <InputField
                label="Phone / WhatsApp *"
                value={newCustomer.phone}
                onChange={(value) =>
                  setNewCustomer({ ...newCustomer, phone: value })
                }
                placeholder="+91 XXXXX XXXXX"
              />
              <InputField
                label="Email"
                value={newCustomer.email}
                onChange={(value) =>
                  setNewCustomer({ ...newCustomer, email: value })
                }
                placeholder="customer@email.com"
              />
              <InputField
                label="Address / Area"
                value={newCustomer.area}
                onChange={(value) =>
                  setNewCustomer({ ...newCustomer, area: value })
                }
                placeholder="Guntur"
              />
              <div>
                <label className="mb-2 block text-sm font-medium text-[#444]">
                  Source
                </label>
                <select
                  value={newCustomer.source}
                  onChange={(e) =>
                    setNewCustomer({ ...newCustomer, source: e.target.value })
                  }
                  className="h-11 w-full rounded-lg border border-[#ddd] bg-white px-3 text-sm outline-none focus:border-[#176b5b]"
                >
                  {sources
                    .filter((item) => item !== "All Sources")
                    .map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-3 border-t border-[#eee] px-4 py-4 sm:px-6">
              <button
                onClick={() => setShowAddCustomer(false)}
                className="rounded-lg border border-[#ddd] px-5 py-2.5 text-sm font-medium text-[#555] hover:bg-[#f7f7f7]"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCustomer}
                disabled={saving}
                className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
              >
                {saving ? "Saving..." : "Add Customer"}
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedCustomer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="max-h-[90vh] w-full max-w-[700px] overflow-y-auto rounded-xl bg-white shadow-2xl">
            <div className="flex items-start justify-between border-b border-[#eee] px-4 py-4 sm:px-6 sm:py-5">
              <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f2ee] font-semibold text-[#176b5b]">
                  {selectedCustomer.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h2 className="truncate text-lg font-semibold">
                    {selectedCustomer.name}
                  </h2>
                  <p className="mt-1 text-xs text-[#999]">
                    {selectedCustomer.id.slice(0, 8).toUpperCase()}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCustomer(null)}
                className="shrink-0 text-xl text-[#999] hover:text-[#333]"
              >
                ×
              </button>
            </div>

            <div className="grid gap-3 px-4 py-5 sm:grid-cols-2 sm:gap-4 sm:px-6 sm:py-6">
              <DetailItem
                label="Phone / WhatsApp"
                value={selectedCustomer.phone}
              />
              <DetailItem
                label="Email"
                value={selectedCustomer.email || "Not available"}
              />
              <DetailItem label="Source" value={selectedCustomer.source} />
              <DetailItem
                label="Enquiries"
                value={selectedCustomer.enquiries.toString()}
              />
              <DetailItem
                label="Orders"
                value={selectedCustomer.orders.toString()}
              />
              <DetailItem
                label="Total Purchase (paid)"
                value={formatCurrency(selectedCustomer.totalPurchase)}
              />
              <DetailItem
                label="Pending Amount"
                value={formatCurrency(selectedCustomer.pendingAmount)}
              />
              <DetailItem label="Status" value={selectedCustomer.status} />
            </div>

            <div className="border-t border-[#eee] bg-[#fafaf8] px-4 py-4 sm:px-6">
              <p className="text-xs text-[#999]">
                Totals are calculated from furniture orders matched by phone,
                email, or account id. Online paid and manually recorded payments
                both count toward Total Purchase.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SummaryCard({
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
    <div className="rounded-xl border border-[#e4e2da] bg-white p-3 shadow-sm sm:p-5">
      <p className="text-[11px] font-medium text-[#999] sm:text-xs">{title}</p>
      <p
        className={`mt-1.5 truncate text-lg font-semibold sm:mt-2 sm:text-2xl ${
          warning ? "text-[#b46b17]" : "text-[#222]"
        }`}
      >
        {value}
      </p>
      <p className="mt-1 text-[10px] text-[#aaa] sm:text-xs">{subtitle}</p>
    </div>
  );
}

function SourceBadge({ source }: { source: string }) {
  return (
    <span className="inline-flex rounded-full bg-[#f3f4f2] px-2.5 py-1 text-xs font-medium text-[#666]">
      {source}
    </span>
  );
}

function InputField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[#444]">
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-11 w-full rounded-lg border border-[#ddd] px-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
      />
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[#eee] bg-[#fafaf8] p-4">
      <p className="text-xs text-[#999]">{label}</p>
      <p className="mt-1 text-sm font-medium text-[#333]">{value}</p>
    </div>
  );
}
