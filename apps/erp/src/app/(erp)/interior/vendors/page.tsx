// "use client";

// import { useMemo, useState } from "react";

// type VendorType =
//   | "Carpenter"
//   | "Electrical"
//   | "Plumbing"
//   | "Painting"
//   | "Civil"
//   | "Other";

// type PaymentStatus = "Paid" | "Partial" | "Pending";

// type Vendor = {
//   id: string;
//   name: string;
//   type: VendorType;
//   phone: string;
//   email: string;
//   project: string;
//   projectId: string;
//   work: string;
//   agreedAmount: number;
//   paidAmount: number;
//   status: PaymentStatus;
//   active: boolean;
// };

// const initialVendors: Vendor[] = [
//   {
//     id: "VEN-001",
//     name: "Sharma Carpentry",
//     type: "Carpenter",
//     phone: "9876543210",
//     email: "sharmacarpentry@gmail.com",
//     project: "Kumar Residence",
//     projectId: "PRJ-2024-001",
//     work: "Modular Kitchen & Wardrobe",
//     agreedAmount: 180000,
//     paidAmount: 180000,
//     status: "Paid",
//     active: true,
//   },
//   {
//     id: "VEN-002",
//     name: "Modern Interiors",
//     type: "Carpenter",
//     phone: "9988776655",
//     email: "moderninteriors@gmail.com",
//     project: "Sharma Residence",
//     projectId: "PRJ-2024-002",
//     work: "Bedroom Carpentry",
//     agreedAmount: 145000,
//     paidAmount: 90000,
//     status: "Partial",
//     active: true,
//   },
//   {
//     id: "VEN-003",
//     name: "Raju Electricals",
//     type: "Electrical",
//     phone: "9123456780",
//     email: "rajuelectricals@gmail.com",
//     project: "Mehta Villa",
//     projectId: "PRJ-2024-003",
//     work: "Complete Electrical Work",
//     agreedAmount: 120000,
//     paidAmount: 60000,
//     status: "Partial",
//     active: true,
//   },
//   {
//     id: "VEN-004",
//     name: "Color World",
//     type: "Painting",
//     phone: "9001234567",
//     email: "colorworld@gmail.com",
//     project: "Reddy Office",
//     projectId: "PRJ-2024-005",
//     work: "Interior Painting",
//     agreedAmount: 95000,
//     paidAmount: 0,
//     status: "Pending",
//     active: true,
//   },
//   {
//     id: "VEN-005",
//     name: "Prime Plumbing",
//     type: "Plumbing",
//     phone: "9012345678",
//     email: "primeplumbing@gmail.com",
//     project: "Patel Apartment",
//     projectId: "PRJ-2024-004",
//     work: "Plumbing & Sanitary",
//     agreedAmount: 85000,
//     paidAmount: 85000,
//     status: "Paid",
//     active: true,
//   },
//   {
//     id: "VEN-006",
//     name: "Sri Sai Civil Works",
//     type: "Civil",
//     phone: "9090909090",
//     email: "srisai.civil@gmail.com",
//     project: "Mehta Villa",
//     projectId: "PRJ-2024-003",
//     work: "Civil Modification",
//     agreedAmount: 210000,
//     paidAmount: 110000,
//     status: "Partial",
//     active: true,
//   },
// ];

// const formatCurrency = (amount: number) => {
//   return `₹${amount.toLocaleString("en-IN")}`;
// };

// const getPaymentStatus = (
//   agreedAmount: number,
//   paidAmount: number
// ): PaymentStatus => {
//   if (paidAmount <= 0) return "Pending";
//   if (paidAmount >= agreedAmount) return "Paid";
//   return "Partial";
// };

// const statusClass = (status: PaymentStatus) => {
//   switch (status) {
//     case "Paid":
//       return "border-emerald-200 bg-emerald-50 text-emerald-700";

//     case "Partial":
//       return "border-amber-200 bg-amber-50 text-amber-700";

//     case "Pending":
//       return "border-red-200 bg-red-50 text-red-700";
//   }
// };

// const typeClass = (type: VendorType) => {
//   switch (type) {
//     case "Carpenter":
//       return "bg-blue-50 text-blue-700";

//     case "Electrical":
//       return "bg-yellow-50 text-yellow-700";

//     case "Plumbing":
//       return "bg-cyan-50 text-cyan-700";

//     case "Painting":
//       return "bg-purple-50 text-purple-700";

//     case "Civil":
//       return "bg-orange-50 text-orange-700";

//     default:
//       return "bg-slate-100 text-slate-700";
//   }
// };

// export default function InteriorVendorsPage() {
//   const [vendors, setVendors] = useState<Vendor[]>(initialVendors);

//   const [search, setSearch] = useState("");
//   const [typeFilter, setTypeFilter] = useState("All Types");
//   const [paymentFilter, setPaymentFilter] = useState("All Status");

//   const [showModal, setShowModal] = useState(false);
//   const [showPaymentModal, setShowPaymentModal] = useState(false);

//   const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);

//   const [paymentAmount, setPaymentAmount] = useState("");

//   const [form, setForm] = useState({
//     name: "",
//     type: "Carpenter" as VendorType,
//     phone: "",
//     email: "",
//     project: "",
//     projectId: "",
//     work: "",
//     agreedAmount: "",
//   });

//   const filteredVendors = useMemo(() => {
//     return vendors.filter((vendor) => {
//       const searchValue = search.toLowerCase().trim();

//       const matchesSearch =
//         !searchValue ||
//         vendor.name.toLowerCase().includes(searchValue) ||
//         vendor.phone.toLowerCase().includes(searchValue) ||
//         vendor.project.toLowerCase().includes(searchValue) ||
//         vendor.projectId.toLowerCase().includes(searchValue) ||
//         vendor.work.toLowerCase().includes(searchValue);

//       const matchesType =
//         typeFilter === "All Types" || vendor.type === typeFilter;

//       const matchesPayment =
//         paymentFilter === "All Status" ||
//         vendor.status === paymentFilter;

//       return matchesSearch && matchesType && matchesPayment;
//     });
//   }, [vendors, search, typeFilter, paymentFilter]);

//   const statistics = useMemo(() => {
//     const totalAgreed = vendors.reduce(
//       (sum, vendor) => sum + vendor.agreedAmount,
//       0
//     );

//     const totalPaid = vendors.reduce(
//       (sum, vendor) => sum + vendor.paidAmount,
//       0
//     );

//     const totalPending = totalAgreed - totalPaid;

//     const activeVendors = vendors.filter((vendor) => vendor.active).length;

//     const carpenters = vendors.filter(
//       (vendor) => vendor.type === "Carpenter"
//     ).length;

//     return {
//       total: vendors.length,
//       active: activeVendors,
//       carpenters,
//       totalAgreed,
//       totalPaid,
//       totalPending,
//     };
//   }, [vendors]);

//   const resetForm = () => {
//     setForm({
//       name: "",
//       type: "Carpenter",
//       phone: "",
//       email: "",
//       project: "",
//       projectId: "",
//       work: "",
//       agreedAmount: "",
//     });
//   };

//   const handleAddVendor = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (
//       !form.name.trim() ||
//       !form.phone.trim() ||
//       !form.project.trim() ||
//       !form.work.trim() ||
//       !form.agreedAmount
//     ) {
//       alert("Please fill all required fields.");
//       return;
//     }

//     const agreedAmount = Number(form.agreedAmount);

//     if (Number.isNaN(agreedAmount) || agreedAmount <= 0) {
//       alert("Please enter a valid agreed amount.");
//       return;
//     }

//     const newVendor: Vendor = {
//       id: `VEN-${String(vendors.length + 1).padStart(3, "0")}`,
//       name: form.name.trim(),
//       type: form.type,
//       phone: form.phone.trim(),
//       email: form.email.trim(),
//       project: form.project.trim(),
//       projectId: form.projectId.trim() || "N/A",
//       work: form.work.trim(),
//       agreedAmount,
//       paidAmount: 0,
//       status: "Pending",
//       active: true,
//     };

//     setVendors((current) => [newVendor, ...current]);
//     setShowModal(false);
//     resetForm();
//   };

//   const openPaymentModal = (vendor: Vendor) => {
//     setSelectedVendor(vendor);
//     setPaymentAmount("");
//     setShowPaymentModal(true);
//   };

//   const handlePayment = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!selectedVendor) return;

//     const amount = Number(paymentAmount);

//     if (Number.isNaN(amount) || amount <= 0) {
//       alert("Enter a valid payment amount.");
//       return;
//     }

//     const pending =
//       selectedVendor.agreedAmount - selectedVendor.paidAmount;

//     if (amount > pending) {
//       alert(
//         `Payment cannot exceed the pending amount of ${formatCurrency(
//           pending
//         )}.`
//       );
//       return;
//     }

//     setVendors((current) =>
//       current.map((vendor) => {
//         if (vendor.id !== selectedVendor.id) {
//           return vendor;
//         }

//         const newPaidAmount = vendor.paidAmount + amount;

//         return {
//           ...vendor,
//           paidAmount: newPaidAmount,
//           status: getPaymentStatus(
//             vendor.agreedAmount,
//             newPaidAmount
//           ),
//         };
//       })
//     );

//     setShowPaymentModal(false);
//     setSelectedVendor(null);
//     setPaymentAmount("");
//   };

//   const toggleVendorStatus = (id: string) => {
//     setVendors((current) =>
//       current.map((vendor) =>
//         vendor.id === id
//           ? {
//               ...vendor,
//               active: !vendor.active,
//             }
//           : vendor
//       )
//     );
//   };

//   return (
//     <main className="min-h-screen bg-[#f8faf9] p-4 md:p-6">
//       {/* HEADER */}
//       <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//         <div>
//           <div className="mb-4 flex items-center gap-2">
//             <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-700 text-sm font-bold text-white">
//               V
//             </div>

//             <div>
//               <h1 className="text-xl font-bold text-slate-900">
//                 VIP Interior
//               </h1>

//               <p className="text-[10px] uppercase tracking-wider text-slate-400">
//                 Furniture & Interior
//               </p>
//             </div>
//           </div>

//           <h2 className="text-2xl font-bold text-slate-900">
//             Vendors / Carpenters
//           </h2>

//           <p className="mt-1 text-sm text-slate-500">
//             Manage vendors, carpenters, assigned work and payments
//           </p>
//         </div>

//         <button
//           type="button"
//           onClick={() => setShowModal(true)}
//           className="flex h-10 items-center justify-center gap-2 rounded-lg bg-emerald-700 px-4 text-sm font-semibold text-white transition hover:bg-emerald-800"
//         >
//           <span className="text-lg">+</span>
//           Add Vendor
//         </button>
//       </div>

//       {/* STATISTICS */}
//       <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
//         <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
//           <p className="text-xs text-slate-500">Total Vendors</p>

//           <p className="mt-2 text-2xl font-bold text-slate-900">
//             {statistics.total}
//           </p>
//         </div>

//         <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
//           <p className="text-xs text-slate-500">Active Vendors</p>

//           <p className="mt-2 text-2xl font-bold text-emerald-700">
//             {statistics.active}
//           </p>
//         </div>

//         <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
//           <p className="text-xs text-slate-500">Carpenters</p>

//           <p className="mt-2 text-2xl font-bold text-blue-600">
//             {statistics.carpenters}
//           </p>
//         </div>

//         <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
//           <p className="text-xs text-slate-500">Agreed Amount</p>

//           <p className="mt-2 text-xl font-bold text-slate-900">
//             {formatCurrency(statistics.totalAgreed)}
//           </p>
//         </div>

//         <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
//           <p className="text-xs text-slate-500">Paid Amount</p>

//           <p className="mt-2 text-xl font-bold text-emerald-700">
//             {formatCurrency(statistics.totalPaid)}
//           </p>
//         </div>

//         <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
//           <p className="text-xs text-slate-500">Pending Amount</p>

//           <p className="mt-2 text-xl font-bold text-amber-600">
//             {formatCurrency(statistics.totalPending)}
//           </p>
//         </div>
//       </div>

//       {/* FILTERS */}
//       <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
//         <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
//           <div className="relative flex-1">
//             <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
//               🔍
//             </span>

//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search vendor, project, phone or work..."
//               className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-sm outline-none transition focus:border-emerald-500"
//             />
//           </div>

//           <select
//             value={typeFilter}
//             onChange={(e) => setTypeFilter(e.target.value)}
//             className="h-10 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-emerald-500"
//           >
//             <option>All Types</option>
//             <option>Carpenter</option>
//             <option>Electrical</option>
//             <option>Plumbing</option>
//             <option>Painting</option>
//             <option>Civil</option>
//             <option>Other</option>
//           </select>

//           <select
//             value={paymentFilter}
//             onChange={(e) => setPaymentFilter(e.target.value)}
//             className="h-10 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-emerald-500"
//           >
//             <option>All Status</option>
//             <option>Paid</option>
//             <option>Partial</option>
//             <option>Pending</option>
//           </select>
//         </div>
//       </div>

//       {/* TABLE */}
//       <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
//         <div className="flex items-center justify-between border-b border-slate-100 p-5">
//           <div>
//             <h3 className="text-[15px] font-semibold text-slate-900">
//               Vendor Directory
//             </h3>

//             <p className="mt-1 text-xs text-slate-500">
//               {filteredVendors.length} vendor
//               {filteredVendors.length !== 1 ? "s" : ""} found
//             </p>
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full min-w-[1200px]">
//             <thead>
//               <tr className="border-b border-slate-100 bg-slate-50">
//                 <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500">
//                   Vendor
//                 </th>

//                 <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500">
//                   Type
//                 </th>

//                 <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500">
//                   Contact
//                 </th>

//                 <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500">
//                   Project
//                 </th>

//                 <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500">
//                   Assigned Work
//                 </th>

//                 <th className="px-5 py-3 text-right text-[11px] font-semibold uppercase tracking-wide text-slate-500">
//                   Agreed
//                 </th>

//                 <th className="px-5 py-3 text-right text-[11px] font-semibold uppercase tracking-wide text-slate-500">
//                   Paid
//                 </th>

//                 <th className="px-5 py-3 text-right text-[11px] font-semibold uppercase tracking-wide text-slate-500">
//                   Pending
//                 </th>

//                 <th className="px-5 py-3 text-center text-[11px] font-semibold uppercase tracking-wide text-slate-500">
//                   Payment
//                 </th>

//                 <th className="px-5 py-3 text-center text-[11px] font-semibold uppercase tracking-wide text-slate-500">
//                   Action
//                 </th>
//               </tr>
//             </thead>

//             <tbody>
//               {filteredVendors.map((vendor) => {
//                 const pending =
//                   vendor.agreedAmount - vendor.paidAmount;

//                 return (
//                   <tr
//                     key={vendor.id}
//                     className="border-b border-slate-100 transition hover:bg-slate-50"
//                   >
//                     {/* Vendor */}
//                     <td className="px-5 py-4">
//                       <div className="flex items-center gap-3">
//                         <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
//                           {vendor.name.charAt(0).toUpperCase()}
//                         </div>

//                         <div>
//                           <p className="text-sm font-semibold text-slate-800">
//                             {vendor.name}
//                           </p>

//                           <p className="mt-0.5 text-[10px] text-slate-400">
//                             {vendor.id}
//                           </p>
//                         </div>
//                       </div>
//                     </td>

//                     {/* Type */}
//                     <td className="px-5 py-4">
//                       <span
//                         className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${typeClass(
//                           vendor.type
//                         )}`}
//                       >
//                         {vendor.type}
//                       </span>
//                     </td>

//                     {/* Contact */}
//                     <td className="px-5 py-4">
//                       <p className="text-sm text-slate-700">
//                         {vendor.phone}
//                       </p>

//                       <p className="mt-0.5 max-w-[180px] truncate text-[10px] text-slate-400">
//                         {vendor.email || "No email"}
//                       </p>
//                     </td>

//                     {/* Project */}
//                     <td className="px-5 py-4">
//                       <p className="text-sm font-medium text-slate-700">
//                         {vendor.project}
//                       </p>

//                       <p className="mt-0.5 text-[10px] text-slate-400">
//                         {vendor.projectId}
//                       </p>
//                     </td>

//                     {/* Work */}
//                     <td className="px-5 py-4">
//                       <p className="max-w-[200px] text-sm text-slate-600">
//                         {vendor.work}
//                       </p>
//                     </td>

//                     {/* Agreed */}
//                     <td className="px-5 py-4 text-right text-sm font-medium text-slate-800">
//                       {formatCurrency(vendor.agreedAmount)}
//                     </td>

//                     {/* Paid */}
//                     <td className="px-5 py-4 text-right text-sm font-medium text-emerald-700">
//                       {formatCurrency(vendor.paidAmount)}
//                     </td>

//                     {/* Pending */}
//                     <td className="px-5 py-4 text-right text-sm font-medium text-amber-600">
//                       {formatCurrency(pending)}
//                     </td>

//                     {/* Status */}
//                     <td className="px-5 py-4 text-center">
//                       <span
//                         className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-semibold ${statusClass(
//                           vendor.status
//                         )}`}
//                       >
//                         {vendor.status}
//                       </span>
//                     </td>

//                     {/* Actions */}
//                     <td className="px-5 py-4">
//                       <div className="flex items-center justify-center gap-2">
//                         {pending > 0 && (
//                           <button
//                             type="button"
//                             onClick={() => openPaymentModal(vendor)}
//                             className="rounded-md bg-emerald-50 px-2.5 py-1.5 text-[10px] font-semibold text-emerald-700 transition hover:bg-emerald-100"
//                           >
//                             Pay
//                           </button>
//                         )}

//                         <button
//                           type="button"
//                           onClick={() =>
//                             toggleVendorStatus(vendor.id)
//                           }
//                           className={`rounded-md px-2.5 py-1.5 text-[10px] font-semibold transition ${
//                             vendor.active
//                               ? "bg-red-50 text-red-600 hover:bg-red-100"
//                               : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
//                           }`}
//                         >
//                           {vendor.active ? "Deactivate" : "Activate"}
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>

//         {filteredVendors.length === 0 && (
//           <div className="p-12 text-center">
//             <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
//               🔍
//             </div>

//             <h3 className="mt-3 text-sm font-semibold text-slate-800">
//               No vendors found
//             </h3>

//             <p className="mt-1 text-xs text-slate-400">
//               Try changing your search or filters.
//             </p>
//           </div>
//         )}
//       </div>

//       {/* ADD VENDOR MODAL */}
//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
//           <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-slate-100 p-5">
//               <div>
//                 <h2 className="text-lg font-bold text-slate-900">
//                   Add Vendor / Carpenter
//                 </h2>

//                 <p className="mt-1 text-xs text-slate-500">
//                   Add a vendor and assign their project work.
//                 </p>
//               </div>

//               <button
//                 type="button"
//                 onClick={() => {
//                   setShowModal(false);
//                   resetForm();
//                 }}
//                 className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
//               >
//                 ×
//               </button>
//             </div>

//             <form onSubmit={handleAddVendor}>
//               <div className="grid gap-4 p-5 md:grid-cols-2">
//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-600">
//                     Vendor Name *
//                   </label>

//                   <input
//                     value={form.name}
//                     onChange={(e) =>
//                       setForm({
//                         ...form,
//                         name: e.target.value,
//                       })
//                     }
//                     placeholder="Enter vendor name"
//                     className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-emerald-500"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-600">
//                     Type *
//                   </label>

//                   <select
//                     value={form.type}
//                     onChange={(e) =>
//                       setForm({
//                         ...form,
//                         type: e.target.value as VendorType,
//                       })
//                     }
//                     className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-emerald-500"
//                   >
//                     <option>Carpenter</option>
//                     <option>Electrical</option>
//                     <option>Plumbing</option>
//                     <option>Painting</option>
//                     <option>Civil</option>
//                     <option>Other</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-600">
//                     Phone *
//                   </label>

//                   <input
//                     value={form.phone}
//                     onChange={(e) =>
//                       setForm({
//                         ...form,
//                         phone: e.target.value,
//                       })
//                     }
//                     placeholder="10 digit phone number"
//                     inputMode="numeric"
//                     className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-emerald-500"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-600">
//                     Email
//                   </label>

//                   <input
//                     type="email"
//                     value={form.email}
//                     onChange={(e) =>
//                       setForm({
//                         ...form,
//                         email: e.target.value,
//                       })
//                     }
//                     placeholder="vendor@example.com"
//                     className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-emerald-500"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-600">
//                     Project *
//                   </label>

//                   <input
//                     value={form.project}
//                     onChange={(e) =>
//                       setForm({
//                         ...form,
//                         project: e.target.value,
//                       })
//                     }
//                     placeholder="Project name"
//                     className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-emerald-500"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-600">
//                     Project ID
//                   </label>

//                   <input
//                     value={form.projectId}
//                     onChange={(e) =>
//                       setForm({
//                         ...form,
//                         projectId: e.target.value,
//                       })
//                     }
//                     placeholder="PRJ-2024-001"
//                     className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-emerald-500"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-600">
//                     Assigned Work *
//                   </label>

//                   <input
//                     value={form.work}
//                     onChange={(e) =>
//                       setForm({
//                         ...form,
//                         work: e.target.value,
//                       })
//                     }
//                     placeholder="e.g. Wardrobe, Electrical Work"
//                     className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-emerald-500"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-600">
//                     Agreed Amount *
//                   </label>

//                   <input
//                     type="number"
//                     min="1"
//                     value={form.agreedAmount}
//                     onChange={(e) =>
//                       setForm({
//                         ...form,
//                         agreedAmount: e.target.value,
//                       })
//                     }
//                     placeholder="₹0"
//                     className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-emerald-500"
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-end gap-3 border-t border-slate-100 p-5">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setShowModal(false);
//                     resetForm();
//                   }}
//                   className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="submit"
//                   className="rounded-lg bg-emerald-700 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
//                 >
//                   Add Vendor
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* PAYMENT MODAL */}
//       {showPaymentModal && selectedVendor && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
//           <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl">
//             <div className="border-b border-slate-100 p-5">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h2 className="text-lg font-bold text-slate-900">
//                     Record Vendor Payment
//                   </h2>

//                   <p className="mt-1 text-xs text-slate-500">
//                     {selectedVendor.name}
//                   </p>
//                 </div>

//                 <button
//                   type="button"
//                   onClick={() => {
//                     setShowPaymentModal(false);
//                     setSelectedVendor(null);
//                   }}
//                   className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500"
//                 >
//                   ×
//                 </button>
//               </div>
//             </div>

//             <form onSubmit={handlePayment}>
//               <div className="space-y-4 p-5">
//                 <div className="grid grid-cols-2 gap-3">
//                   <div className="rounded-lg bg-slate-50 p-3">
//                     <p className="text-[10px] text-slate-400">
//                       Agreed Amount
//                     </p>

//                     <p className="mt-1 text-sm font-bold text-slate-800">
//                       {formatCurrency(
//                         selectedVendor.agreedAmount
//                       )}
//                     </p>
//                   </div>

//                   <div className="rounded-lg bg-amber-50 p-3">
//                     <p className="text-[10px] text-amber-600">
//                       Pending
//                     </p>

//                     <p className="mt-1 text-sm font-bold text-amber-700">
//                       {formatCurrency(
//                         selectedVendor.agreedAmount -
//                           selectedVendor.paidAmount
//                       )}
//                     </p>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-600">
//                     Payment Amount *
//                   </label>

//                   <input
//                     type="number"
//                     min="1"
//                     max={
//                       selectedVendor.agreedAmount -
//                       selectedVendor.paidAmount
//                     }
//                     value={paymentAmount}
//                     onChange={(e) =>
//                       setPaymentAmount(e.target.value)
//                     }
//                     placeholder="Enter amount"
//                     className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-emerald-500"
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-end gap-3 border-t border-slate-100 p-5">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setShowPaymentModal(false);
//                     setSelectedVendor(null);
//                   }}
//                   className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="submit"
//                   className="rounded-lg bg-emerald-700 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
//                 >
//                   Record Payment
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAllVendors,
//   createVendor,
//   updateVendor,
//   deleteVendor as deleteVendorFromDb,
//   type InteriorVendor,
// } from "@/modules/interior/services/vendorService";

// type VendorType =
//   | "Carpenter"
//   | "Electrical"
//   | "Plumbing"
//   | "Painting"
//   | "Civil"
//   | "Other";

// type PaymentStatus = "Paid" | "Partial" | "Pending";

// type Vendor = {
//   id: string;
//   name: string;
//   type: VendorType;
//   phone: string;
//   email: string;
//   project: string;
//   projectId: string;
//   work: string;
//   agreedAmount: number;
//   paidAmount: number;
//   status: PaymentStatus;
//   active: boolean;
// };

// const vendorTypes: VendorType[] = [
//   "Carpenter",
//   "Electrical",
//   "Plumbing",
//   "Painting",
//   "Civil",
//   "Other",
// ];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function paymentStatusFromAmounts(
//   agreed: number,
//   paid: number
// ): PaymentStatus {
//   if (paid <= 0) return "Pending";
//   if (paid >= agreed) return "Paid";
//   return "Partial";
// }

// function statusClass(status: PaymentStatus) {
//   if (status === "Paid") return "bg-green-50 text-green-700 border-green-200";
//   if (status === "Partial")
//     return "bg-amber-50 text-amber-700 border-amber-200";
//   return "bg-red-50 text-red-700 border-red-200";
// }

// function normalizeType(raw?: string): VendorType {
//   const s = (raw || "Other").trim();
//   if ((vendorTypes as string[]).includes(s)) return s as VendorType;
//   const lower = s.toLowerCase();
//   if (lower.includes("carpent")) return "Carpenter";
//   if (lower.includes("electric")) return "Electrical";
//   if (lower.includes("plumb")) return "Plumbing";
//   if (lower.includes("paint")) return "Painting";
//   if (lower.includes("civil")) return "Civil";
//   return "Other";
// }

// function mapToUi(v: InteriorVendor): Vendor {
//   const agreed = Number(v.agreedAmount ?? 0) || 0;
//   const paid = Number(v.paidAmount ?? 0) || 0;
//   const statusRaw = (v.status || "").toString();
//   const status: PaymentStatus =
//     statusRaw === "Paid" || statusRaw === "Partial" || statusRaw === "Pending"
//       ? statusRaw
//       : paymentStatusFromAmounts(agreed, paid);

//   return {
//     id: v.id,
//     name: v.name || "Unknown Vendor",
//     type: normalizeType(v.type),
//     phone: v.phone || "—",
//     email: v.email || "",
//     project: v.project || "—",
//     projectId: v.projectId || "—",
//     work: v.work || "—",
//     agreedAmount: agreed,
//     paidAmount: paid,
//     status,
//     active: v.active !== false,
//   };
// }

// export default function InteriorVendorsPage() {
//   const [vendors, setVendors] = useState<Vendor[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   const [search, setSearch] = useState("");
//   const [typeFilter, setTypeFilter] = useState<"All" | VendorType>("All");
//   const [statusFilter, setStatusFilter] = useState<"All" | PaymentStatus>(
//     "All"
//   );
//   const [activeOnly, setActiveOnly] = useState(false);

//   const [showModal, setShowModal] = useState(false);
//   const [editing, setEditing] = useState<Vendor | null>(null);
//   const [selected, setSelected] = useState<Vendor | null>(null);

//   const [form, setForm] = useState({
//     name: "",
//     type: "Carpenter" as VendorType,
//     phone: "",
//     email: "",
//     project: "",
//     projectId: "",
//     work: "",
//     agreedAmount: "",
//     paidAmount: "",
//     active: true,
//   });

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllVendors();
//         if (cancelled) return;
//         setVendors(data.map(mapToUi));
//       } catch (err) {
//         console.error(err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const filtered = useMemo(() => {
//     const q = search.toLowerCase().trim();
//     return vendors.filter((v) => {
//       const matchesSearch =
//         !q ||
//         v.name.toLowerCase().includes(q) ||
//         v.phone.toLowerCase().includes(q) ||
//         v.project.toLowerCase().includes(q) ||
//         v.work.toLowerCase().includes(q);

//       const matchesType = typeFilter === "All" || v.type === typeFilter;
//       const matchesStatus =
//         statusFilter === "All" || v.status === statusFilter;
//       const matchesActive = !activeOnly || v.active;

//       return matchesSearch && matchesType && matchesStatus && matchesActive;
//     });
//   }, [vendors, search, typeFilter, statusFilter, activeOnly]);

//   const statistics = useMemo(() => {
//     const total = vendors.length;
//     const active = vendors.filter((v) => v.active).length;
//     const carpenters = vendors.filter((v) => v.type === "Carpenter").length;
//     const agreed = vendors.reduce((s, v) => s + v.agreedAmount, 0);
//     const paid = vendors.reduce((s, v) => s + v.paidAmount, 0);
//     const pending = Math.max(agreed - paid, 0);
//     return { total, active, carpenters, agreed, paid, pending };
//   }, [vendors]);

//   function resetForm() {
//     setForm({
//       name: "",
//       type: "Carpenter",
//       phone: "",
//       email: "",
//       project: "",
//       projectId: "",
//       work: "",
//       agreedAmount: "",
//       paidAmount: "",
//       active: true,
//     });
//   }

//   function openNew() {
//     setEditing(null);
//     resetForm();
//     setShowModal(true);
//   }

//   function openEdit(vendor: Vendor) {
//     setEditing(vendor);
//     setForm({
//       name: vendor.name,
//       type: vendor.type,
//       phone: vendor.phone,
//       email: vendor.email,
//       project: vendor.project,
//       projectId: vendor.projectId,
//       work: vendor.work,
//       agreedAmount: String(vendor.agreedAmount || ""),
//       paidAmount: String(vendor.paidAmount || ""),
//       active: vendor.active,
//     });
//     setShowModal(true);
//   }

//   async function saveVendor() {
//     if (!form.name.trim() || !form.phone.trim()) {
//       alert("Name and phone are required.");
//       return;
//     }

//     const agreedAmount = Number(form.agreedAmount) || 0;
//     const paidAmount = Number(form.paidAmount) || 0;
//     const status = paymentStatusFromAmounts(agreedAmount, paidAmount);

//     setSaving(true);
//     try {
//       const payload = {
//         name: form.name.trim(),
//         type: form.type,
//         phone: form.phone.trim(),
//         email: form.email.trim(),
//         project: form.project.trim(),
//         projectId: form.projectId.trim(),
//         work: form.work.trim(),
//         agreedAmount,
//         paidAmount,
//         status,
//         active: form.active,
//       };

//       if (editing) {
//         await updateVendor(editing.id, payload);
//         setVendors((current) =>
//           current.map((v) =>
//             v.id === editing.id ? { ...v, ...payload } : v
//           )
//         );
//       } else {
//         const id = await createVendor(payload);
//         setVendors((current) => [{ id, ...payload }, ...current]);
//       }

//       setShowModal(false);
//       setEditing(null);
//       resetForm();
//     } catch (err) {
//       console.error(err);
//       alert("Unable to save vendor.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function toggleActive(id: string) {
//     const vendor = vendors.find((v) => v.id === id);
//     if (!vendor) return;
//     const next = !vendor.active;

//     setVendors((current) =>
//       current.map((v) => (v.id === id ? { ...v, active: next } : v))
//     );

//     try {
//       await updateVendor(id, { active: next });
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllVendors();
//         setVendors(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   async function removeVendor(vendor: Vendor) {
//     if (!window.confirm(`Delete vendor "${vendor.name}"?`)) return;

//     setVendors((current) => current.filter((v) => v.id !== vendor.id));
//     setSelected(null);

//     try {
//       await deleteVendorFromDb(vendor.id);
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllVendors();
//         setVendors(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f7f4] p-4 md:p-6 text-[#252525]">
//       <div className="mx-auto max-w-[1600px]">
//         {/* <a
//           href="/interior/dashboard"
//           className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[#176b5b] hover:underline"
//         >
//           ← Back to Interior
//         </a> */}

//         <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//           <div>
//             {/* <div className="mb-1 text-sm font-medium text-[#9a5b18]">
//               Akrish / Furniture and Interior
//             </div> */}
//             <h1 className="text-2xl font-bold tracking-tight">
//               Vendors / Carpenters
//             </h1>
//             <p className="mt-1 text-sm text-gray-500">
//               Manage vendors, assigned work and payments.
//               {loading && (
//                 <span className="ml-2 text-[#176b5b]">Loading…</span>
//               )}
//             </p>
//           </div>
//           <button
//             type="button"
//             onClick={openNew}
//             className="flex h-10 items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 text-sm font-semibold text-white hover:bg-[#125848]"
//           >
//             + Add Vendor
//           </button>
//         </div>

//         <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
//           <Stat label="Total Vendors" value={loading ? "…" : String(statistics.total)} />
//           <Stat label="Active" value={loading ? "…" : String(statistics.active)} />
//           <Stat label="Carpenters" value={loading ? "…" : String(statistics.carpenters)} />
//           <Stat label="Agreed" value={loading ? "…" : formatCurrency(statistics.agreed)} />
//           <Stat label="Paid" value={loading ? "…" : formatCurrency(statistics.paid)} />
//           <Stat label="Pending" value={loading ? "…" : formatCurrency(statistics.pending)} />
//         </div>

//         <div className="mb-4 rounded-xl border border-[#e4e2da] bg-white p-4">
//           <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search vendor, phone, project, work..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-4 py-2.5 text-sm outline-none focus:border-[#176b5b] lg:max-w-md"
//             />
//             <select
//               value={typeFilter}
//               onChange={(e) =>
//                 setTypeFilter(e.target.value as "All" | VendorType)
//               }
//               className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               <option value="All">All Types</option>
//               {vendorTypes.map((t) => (
//                 <option key={t} value={t}>
//                   {t}
//                 </option>
//               ))}
//             </select>
//             <select
//               value={statusFilter}
//               onChange={(e) =>
//                 setStatusFilter(e.target.value as "All" | PaymentStatus)
//               }
//               className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               <option value="All">All Payment Status</option>
//               <option value="Paid">Paid</option>
//               <option value="Partial">Partial</option>
//               <option value="Pending">Pending</option>
//             </select>
//             <label className="flex items-center gap-2 text-sm text-gray-600">
//               <input
//                 type="checkbox"
//                 checked={activeOnly}
//                 onChange={(e) => setActiveOnly(e.target.checked)}
//               />
//               Active only
//             </label>
//           </div>
//         </div>

//         <div className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1100px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Vendor</th>
//                   <th className="px-4 py-3 font-semibold">Type</th>
//                   <th className="px-4 py-3 font-semibold">Project / Work</th>
//                   <th className="px-4 py-3 font-semibold">Agreed</th>
//                   <th className="px-4 py-3 font-semibold">Paid</th>
//                   <th className="px-4 py-3 font-semibold">Payment</th>
//                   <th className="px-4 py-3 font-semibold">Active</th>
//                   <th className="px-4 py-3 text-right font-semibold">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece6]">
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={8}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       Loading vendors…
//                     </td>
//                   </tr>
//                 ) : (
//                   <>
//                     {filtered.map((vendor) => (
//                       <tr key={vendor.id} className="hover:bg-[#fafaf8]">
//                         <td className="px-5 py-4">
//                           <p className="font-semibold text-gray-900">
//                             {vendor.name}
//                           </p>
//                           <p className="text-xs text-gray-500">{vendor.phone}</p>
//                         </td>
//                         <td className="px-4 py-4 text-sm text-gray-700">
//                           {vendor.type}
//                         </td>
//                         <td className="px-4 py-4">
//                           <p className="text-sm font-medium text-gray-800">
//                             {vendor.project}
//                           </p>
//                           <p className="text-xs text-gray-400">{vendor.work}</p>
//                         </td>
//                         <td className="px-4 py-4 text-sm font-semibold">
//                           {formatCurrency(vendor.agreedAmount)}
//                         </td>
//                         <td className="px-4 py-4 text-sm text-green-700">
//                           {formatCurrency(vendor.paidAmount)}
//                         </td>
//                         <td className="px-4 py-4">
//                           <span
//                             className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                               vendor.status
//                             )}`}
//                           >
//                             {vendor.status}
//                           </span>
//                         </td>
//                         <td className="px-4 py-4">
//                           <button
//                             onClick={() => toggleActive(vendor.id)}
//                             className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
//                               vendor.active
//                                 ? "bg-emerald-50 text-emerald-700"
//                                 : "bg-gray-100 text-gray-500"
//                             }`}
//                           >
//                             {vendor.active ? "Active" : "Inactive"}
//                           </button>
//                         </td>
//                         <td className="px-4 py-4 text-right">
//                           <div className="flex justify-end gap-2">
//                             <button
//                               onClick={() => setSelected(vendor)}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                             >
//                               View
//                             </button>
//                             <button
//                               onClick={() => openEdit(vendor)}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600"
//                             >
//                               Edit
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                     {filtered.length === 0 && (
//                       <tr>
//                         <td
//                           colSpan={8}
//                           className="px-5 py-12 text-center text-sm text-gray-500"
//                         >
//                           No vendors found.
//                         </td>
//                       </tr>
//                     )}
//                   </>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {selected && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-4">
//               <div>
//                 <p className="text-xs font-semibold text-[#176b5b]">
//                   {selected.type}
//                 </p>
//                 <h2 className="mt-1 text-xl font-bold">{selected.name}</h2>
//               </div>
//               <button
//                 onClick={() => setSelected(null)}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>
//             <div className="grid grid-cols-2 gap-3 p-6">
//               <Info label="Phone" value={selected.phone} />
//               <Info label="Email" value={selected.email || "—"} />
//               <Info label="Project" value={selected.project} />
//               <Info label="Project ID" value={selected.projectId} />
//               <Info label="Work" value={selected.work} />
//               <Info
//                 label="Agreed"
//                 value={formatCurrency(selected.agreedAmount)}
//               />
//               <Info
//                 label="Paid"
//                 value={formatCurrency(selected.paidAmount)}
//               />
//               <Info
//                 label="Balance"
//                 value={formatCurrency(
//                   Math.max(selected.agreedAmount - selected.paidAmount, 0)
//                 )}
//               />
//             </div>
//             <div className="flex flex-wrap gap-2 border-t border-[#e4e2da] px-6 py-4">
//               <button
//                 onClick={() => {
//                   setSelected(null);
//                   openEdit(selected);
//                 }}
//                 className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => removeVendor(selected)}
//                 className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600"
//               >
//                 Delete
//               </button>
//               <button
//                 onClick={() => setSelected(null)}
//                 className="ml-auto rounded-lg border border-gray-200 px-4 py-2.5 text-sm"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-4">
//               <h2 className="text-lg font-bold">
//                 {editing ? "Edit Vendor" : "Add Vendor"}
//               </h2>
//               <button
//                 onClick={() => {
//                   setShowModal(false);
//                   setEditing(null);
//                 }}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>
//             <div className="grid gap-4 p-6 sm:grid-cols-2">
//               <Field
//                 label="Name *"
//                 value={form.name}
//                 onChange={(v) => setForm((f) => ({ ...f, name: v }))}
//               />
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Type
//                 </label>
//                 <select
//                   value={form.type}
//                   onChange={(e) =>
//                     setForm((f) => ({
//                       ...f,
//                       type: e.target.value as VendorType,
//                     }))
//                   }
//                   className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {vendorTypes.map((t) => (
//                     <option key={t}>{t}</option>
//                   ))}
//                 </select>
//               </div>
//               <Field
//                 label="Phone *"
//                 value={form.phone}
//                 onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
//               />
//               <Field
//                 label="Email"
//                 value={form.email}
//                 onChange={(v) => setForm((f) => ({ ...f, email: v }))}
//               />
//               <Field
//                 label="Project"
//                 value={form.project}
//                 onChange={(v) => setForm((f) => ({ ...f, project: v }))}
//               />
//               {/* <Field
//                 label="Project ID"
//                 value={form.projectId}
//                 onChange={(v) => setForm((f) => ({ ...f, projectId: v }))}
//               /> */}
//               <Field
//                 label="Work"
//                 value={form.work}
//                 onChange={(v) => setForm((f) => ({ ...f, work: v }))}
//               />
//               <Field
//                 label="Agreed Amount"
//                 type="number"
//                 value={form.agreedAmount}
//                 onChange={(v) => setForm((f) => ({ ...f, agreedAmount: v }))}
//               />
//               <Field
//                 label="Paid Amount"
//                 type="number"
//                 value={form.paidAmount}
//                 onChange={(v) => setForm((f) => ({ ...f, paidAmount: v }))}
//               />
//               <label className="flex items-center gap-2 text-sm text-gray-700 sm:col-span-2">
//                 <input
//                   type="checkbox"
//                   checked={form.active}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, active: e.target.checked }))
//                   }
//                 />
//                 Active vendor
//               </label>
//             </div>
//             <div className="flex justify-end gap-3 border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
//               <button
//                 onClick={() => {
//                   setShowModal(false);
//                   setEditing(null);
//                 }}
//                 className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium"
//               >
//                 Cancel
//               </button>
//               <button
//                 disabled={saving}
//                 onClick={saveVendor}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
//               >
//                 {saving ? "Saving…" : editing ? "Save" : "Add Vendor"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }

// function Stat({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-4 shadow-sm">
//       <p className="text-xs text-gray-500">{label}</p>
//       <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
//     </div>
//   );
// }

// function Info({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-xl bg-[#fafaf8] p-3">
//       <p className="text-xs text-gray-400">{label}</p>
//       <p className="mt-1 text-sm font-semibold text-gray-800">{value}</p>
//     </div>
//   );
// }

// function Field({
//   label,
//   value,
//   onChange,
//   type = "text",
// }: {
//   label: string;
//   value: string;
//   onChange: (value: string) => void;
//   type?: string;
// }) {
//   return (
//     <div>
//       <label className="mb-1.5 block text-sm font-medium text-gray-700">
//         {label}
//       </label>
//       <input
//         type={type}
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//       />
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAllVendors,
//   createVendor,
//   updateVendor,
//   deleteVendor as deleteVendorFromDb,
//   type InteriorVendor,
// } from "@/modules/interior/services/vendorService";
// import {
//   getAllInteriorProjects,
//   type InteriorProject,
// } from "@/modules/interior/services/projectService";

// type VendorType =
//   | "Carpenter"
//   | "Electrical"
//   | "Plumbing"
//   | "Painting"
//   | "Civil"
//   | "Other";

// type PaymentStatus = "Paid" | "Partial" | "Pending";

// type Vendor = {
//   id: string;
//   name: string;
//   type: VendorType;
//   phone: string;
//   email: string;
//   project: string;
//   projectId: string;
//   work: string;
//   agreedAmount: number;
//   paidAmount: number;
//   status: PaymentStatus;
//   active: boolean;
// };

// const vendorTypes: VendorType[] = [
//   "Carpenter",
//   "Electrical",
//   "Plumbing",
//   "Painting",
//   "Civil",
//   "Other",
// ];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function paymentStatusFromAmounts(
//   agreed: number,
//   paid: number
// ): PaymentStatus {
//   if (paid <= 0) return "Pending";
//   if (paid >= agreed) return "Paid";
//   return "Partial";
// }

// function statusClass(status: PaymentStatus) {
//   if (status === "Paid") return "bg-green-50 text-green-700 border-green-200";
//   if (status === "Partial")
//     return "bg-amber-50 text-amber-700 border-amber-200";
//   return "bg-red-50 text-red-700 border-red-200";
// }

// function normalizeType(raw?: string): VendorType {
//   const s = (raw || "Other").trim();
//   if ((vendorTypes as string[]).includes(s)) return s as VendorType;
//   const lower = s.toLowerCase();
//   if (lower.includes("carpent")) return "Carpenter";
//   if (lower.includes("electric")) return "Electrical";
//   if (lower.includes("plumb")) return "Plumbing";
//   if (lower.includes("paint")) return "Painting";
//   if (lower.includes("civil")) return "Civil";
//   return "Other";
// }

// function mapToUi(v: InteriorVendor): Vendor {
//   const agreed = Number(v.agreedAmount ?? 0) || 0;
//   const paid = Number(v.paidAmount ?? 0) || 0;
//   const statusRaw = (v.status || "").toString();
//   const status: PaymentStatus =
//     statusRaw === "Paid" || statusRaw === "Partial" || statusRaw === "Pending"
//       ? statusRaw
//       : paymentStatusFromAmounts(agreed, paid);

//   return {
//     id: v.id,
//     name: v.name || "Unknown Vendor",
//     type: normalizeType(v.type),
//     phone: v.phone || "—",
//     email: v.email || "",
//     project: v.project || "—",
//     projectId: v.projectId || "",
//     work: v.work || "—",
//     agreedAmount: agreed,
//     paidAmount: paid,
//     status,
//     active: v.active !== false,
//   };
// }

// function projectLabel(p: InteriorProject) {
//   const no = p.projectNo || p.projectId || p.id.slice(0, 8).toUpperCase();
//   const name = p.projectName || p.name || "Untitled";
//   const client = p.clientName || p.client || "";
//   return client ? `${no} · ${name} (${client})` : `${no} · ${name}`;
// }

// export default function InteriorVendorsPage() {
//   const [vendors, setVendors] = useState<Vendor[]>([]);
//   const [projects, setProjects] = useState<InteriorProject[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   const [search, setSearch] = useState("");
//   const [typeFilter, setTypeFilter] = useState<"All" | VendorType>("All");
//   const [statusFilter, setStatusFilter] = useState<"All" | PaymentStatus>(
//     "All"
//   );
//   const [activeOnly, setActiveOnly] = useState(false);

//   const [showModal, setShowModal] = useState(false);
//   const [editing, setEditing] = useState<Vendor | null>(null);
//   const [selected, setSelected] = useState<Vendor | null>(null);

//   const [form, setForm] = useState({
//     name: "",
//     type: "Carpenter" as VendorType,
//     phone: "",
//     email: "",
//     project: "",
//     projectId: "",
//     work: "",
//     agreedAmount: "",
//     paidAmount: "",
//     active: true,
//   });

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const [vendorData, projectData] = await Promise.all([
//           getAllVendors(),
//           getAllInteriorProjects(),
//         ]);
//         if (cancelled) return;
//         setVendors(vendorData.map(mapToUi));
//         setProjects(projectData);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const filtered = useMemo(() => {
//     const q = search.toLowerCase().trim();
//     return vendors.filter((v) => {
//       const matchesSearch =
//         !q ||
//         v.name.toLowerCase().includes(q) ||
//         v.phone.toLowerCase().includes(q) ||
//         v.project.toLowerCase().includes(q) ||
//         v.work.toLowerCase().includes(q);

//       const matchesType = typeFilter === "All" || v.type === typeFilter;
//       const matchesStatus =
//         statusFilter === "All" || v.status === statusFilter;
//       const matchesActive = !activeOnly || v.active;

//       return matchesSearch && matchesType && matchesStatus && matchesActive;
//     });
//   }, [vendors, search, typeFilter, statusFilter, activeOnly]);

//   const statistics = useMemo(() => {
//     const total = vendors.length;
//     const active = vendors.filter((v) => v.active).length;
//     const carpenters = vendors.filter((v) => v.type === "Carpenter").length;
//     const agreed = vendors.reduce((s, v) => s + v.agreedAmount, 0);
//     const paid = vendors.reduce((s, v) => s + v.paidAmount, 0);
//     const pending = Math.max(agreed - paid, 0);
//     return { total, active, carpenters, agreed, paid, pending };
//   }, [vendors]);

//   function resetForm() {
//     setForm({
//       name: "",
//       type: "Carpenter",
//       phone: "",
//       email: "",
//       project: "",
//       projectId: "",
//       work: "",
//       agreedAmount: "",
//       paidAmount: "",
//       active: true,
//     });
//   }

//   function openNew() {
//     setEditing(null);
//     resetForm();
//     setShowModal(true);
//   }

//   function openEdit(vendor: Vendor) {
//     setEditing(vendor);
//     setForm({
//       name: vendor.name,
//       type: vendor.type,
//       phone: vendor.phone === "—" ? "" : vendor.phone,
//       email: vendor.email,
//       project: vendor.project === "—" ? "" : vendor.project,
//       projectId: vendor.projectId === "—" ? "" : vendor.projectId,
//       work: vendor.work === "—" ? "" : vendor.work,
//       agreedAmount: String(vendor.agreedAmount || ""),
//       paidAmount: String(vendor.paidAmount || ""),
//       active: vendor.active,
//     });
//     setShowModal(true);
//   }

//   function onProjectSelect(projectDocId: string) {
//     if (!projectDocId) {
//       setForm((f) => ({ ...f, project: "", projectId: "" }));
//       return;
//     }
//     const p = projects.find((x) => x.id === projectDocId);
//     if (!p) return;
//     const name = p.projectName || p.name || "Untitled";
//     const code =
//       p.projectNo || p.projectId || p.id.slice(0, 8).toUpperCase();
//     setForm((f) => ({
//       ...f,
//       project: name,
//       projectId: code,
//     }));
//   }

//   /** Value for select: match by projectId code or name */
//   function selectedProjectValue(): string {
//     if (!form.projectId && !form.project) return "";
//     const match = projects.find((p) => {
//       const code =
//         p.projectNo || p.projectId || p.id.slice(0, 8).toUpperCase();
//       const name = p.projectName || p.name || "";
//       return (
//         code === form.projectId ||
//         p.id === form.projectId ||
//         name === form.project
//       );
//     });
//     return match?.id || "";
//   }

//   async function saveVendor() {
//     if (!form.name.trim() || !form.phone.trim()) {
//       alert("Name and phone are required.");
//       return;
//     }

//     const agreedAmount = Number(form.agreedAmount) || 0;
//     const paidAmount = Number(form.paidAmount) || 0;
//     const status = paymentStatusFromAmounts(agreedAmount, paidAmount);

//     setSaving(true);
//     try {
//       const payload = {
//         name: form.name.trim(),
//         type: form.type,
//         phone: form.phone.trim(),
//         email: form.email.trim(),
//         project: form.project.trim(),
//         projectId: form.projectId.trim(),
//         work: form.work.trim(),
//         agreedAmount,
//         paidAmount,
//         status,
//         active: form.active,
//       };

//       if (editing) {
//         await updateVendor(editing.id, payload);
//         setVendors((current) =>
//           current.map((v) =>
//             v.id === editing.id ? { ...v, ...payload } : v
//           )
//         );
//       } else {
//         const id = await createVendor(payload);
//         setVendors((current) => [{ id, ...payload }, ...current]);
//       }

//       setShowModal(false);
//       setEditing(null);
//       resetForm();
//     } catch (err) {
//       console.error(err);
//       alert("Unable to save vendor.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function toggleActive(id: string) {
//     const vendor = vendors.find((v) => v.id === id);
//     if (!vendor) return;
//     const next = !vendor.active;

//     setVendors((current) =>
//       current.map((v) => (v.id === id ? { ...v, active: next } : v))
//     );

//     try {
//       await updateVendor(id, { active: next });
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllVendors();
//         setVendors(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   async function removeVendor(vendor: Vendor) {
//     if (!window.confirm(`Delete vendor "${vendor.name}"?`)) return;

//     setVendors((current) => current.filter((v) => v.id !== vendor.id));
//     setSelected(null);

//     try {
//       await deleteVendorFromDb(vendor.id);
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllVendors();
//         setVendors(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f7f4] p-4 text-[#252525] md:p-6">
//       <div className="mx-auto max-w-[1600px]">
//         <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//           <div>
//             <h1 className="text-2xl font-bold tracking-tight">
//               Vendors / Carpenters
//             </h1>
//             <p className="mt-1 text-sm text-gray-500">
//               Manage vendors, assigned work and payments.
//               {loading && (
//                 <span className="ml-2 text-[#176b5b]">Loading…</span>
//               )}
//             </p>
//           </div>
//           <button
//             type="button"
//             onClick={openNew}
//             className="flex h-10 items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 text-sm font-semibold text-white hover:bg-[#125848]"
//           >
//             + Add Vendor
//           </button>
//         </div>

//         <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
//           <Stat
//             label="Total Vendors"
//             value={loading ? "…" : String(statistics.total)}
//           />
//           <Stat
//             label="Active"
//             value={loading ? "…" : String(statistics.active)}
//           />
//           <Stat
//             label="Carpenters"
//             value={loading ? "…" : String(statistics.carpenters)}
//           />
//           <Stat
//             label="Agreed"
//             value={loading ? "…" : formatCurrency(statistics.agreed)}
//           />
//           <Stat
//             label="Paid"
//             value={loading ? "…" : formatCurrency(statistics.paid)}
//           />
//           <Stat
//             label="Pending"
//             value={loading ? "…" : formatCurrency(statistics.pending)}
//           />
//         </div>

//         <div className="mb-4 rounded-xl border border-[#e4e2da] bg-white p-4">
//           <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search vendor, phone, project, work..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-4 py-2.5 text-sm outline-none focus:border-[#176b5b] lg:max-w-md"
//             />
//             <select
//               value={typeFilter}
//               onChange={(e) =>
//                 setTypeFilter(e.target.value as "All" | VendorType)
//               }
//               className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               <option value="All">All Types</option>
//               {vendorTypes.map((t) => (
//                 <option key={t} value={t}>
//                   {t}
//                 </option>
//               ))}
//             </select>
//             <select
//               value={statusFilter}
//               onChange={(e) =>
//                 setStatusFilter(e.target.value as "All" | PaymentStatus)
//               }
//               className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               <option value="All">All Payment Status</option>
//               <option value="Paid">Paid</option>
//               <option value="Partial">Partial</option>
//               <option value="Pending">Pending</option>
//             </select>
//             <label className="flex items-center gap-2 text-sm text-gray-600">
//               <input
//                 type="checkbox"
//                 checked={activeOnly}
//                 onChange={(e) => setActiveOnly(e.target.checked)}
//               />
//               Active only
//             </label>
//           </div>
//         </div>

//         <div className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1100px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Vendor</th>
//                   <th className="px-4 py-3 font-semibold">Type</th>
//                   <th className="px-4 py-3 font-semibold">Project / Work</th>
//                   <th className="px-4 py-3 font-semibold">Agreed</th>
//                   <th className="px-4 py-3 font-semibold">Paid</th>
//                   <th className="px-4 py-3 font-semibold">Payment</th>
//                   <th className="px-4 py-3 font-semibold">Active</th>
//                   <th className="px-4 py-3 text-right font-semibold">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece6]">
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={8}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       Loading vendors…
//                     </td>
//                   </tr>
//                 ) : (
//                   <>
//                     {filtered.map((vendor) => (
//                       <tr key={vendor.id} className="hover:bg-[#fafaf8]">
//                         <td className="px-5 py-4">
//                           <p className="font-semibold text-gray-900">
//                             {vendor.name}
//                           </p>
//                           <p className="text-xs text-gray-500">
//                             {vendor.phone}
//                           </p>
//                         </td>
//                         <td className="px-4 py-4 text-sm text-gray-700">
//                           {vendor.type}
//                         </td>
//                         <td className="px-4 py-4">
//                           <p className="text-sm font-medium text-gray-800">
//                             {vendor.project}
//                           </p>
//                           <p className="text-xs text-gray-400">
//                             {vendor.projectId
//                               ? `${vendor.projectId} · `
//                               : ""}
//                             {vendor.work}
//                           </p>
//                         </td>
//                         <td className="px-4 py-4 text-sm font-semibold">
//                           {formatCurrency(vendor.agreedAmount)}
//                         </td>
//                         <td className="px-4 py-4 text-sm text-green-700">
//                           {formatCurrency(vendor.paidAmount)}
//                         </td>
//                         <td className="px-4 py-4">
//                           <span
//                             className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                               vendor.status
//                             )}`}
//                           >
//                             {vendor.status}
//                           </span>
//                         </td>
//                         <td className="px-4 py-4">
//                           <button
//                             type="button"
//                             onClick={() => toggleActive(vendor.id)}
//                             className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
//                               vendor.active
//                                 ? "bg-emerald-50 text-emerald-700"
//                                 : "bg-gray-100 text-gray-500"
//                             }`}
//                           >
//                             {vendor.active ? "Active" : "Inactive"}
//                           </button>
//                         </td>
//                         <td className="px-4 py-4 text-right">
//                           <div className="flex justify-end gap-2">
//                             <button
//                               type="button"
//                               onClick={() => setSelected(vendor)}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                             >
//                               View
//                             </button>
//                             <button
//                               type="button"
//                               onClick={() => openEdit(vendor)}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600"
//                             >
//                               Edit
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                     {filtered.length === 0 && (
//                       <tr>
//                         <td
//                           colSpan={8}
//                           className="px-5 py-12 text-center text-sm text-gray-500"
//                         >
//                           No vendors found.
//                         </td>
//                       </tr>
//                     )}
//                   </>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {selected && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-4">
//               <div>
//                 <p className="text-xs font-semibold text-[#176b5b]">
//                   {selected.type}
//                 </p>
//                 <h2 className="mt-1 text-xl font-bold">{selected.name}</h2>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setSelected(null)}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>
//             <div className="grid grid-cols-2 gap-3 p-6">
//               <Info label="Phone" value={selected.phone} />
//               <Info label="Email" value={selected.email || "—"} />
//               <Info label="Project" value={selected.project} />
//               <Info label="Project ID" value={selected.projectId || "—"} />
//               <Info label="Work" value={selected.work} />
//               <Info
//                 label="Agreed"
//                 value={formatCurrency(selected.agreedAmount)}
//               />
//               <Info
//                 label="Paid"
//                 value={formatCurrency(selected.paidAmount)}
//               />
//               <Info
//                 label="Balance"
//                 value={formatCurrency(
//                   Math.max(selected.agreedAmount - selected.paidAmount, 0)
//                 )}
//               />
//             </div>
//             <div className="flex flex-wrap gap-2 border-t border-[#e4e2da] px-6 py-4">
//               <button
//                 type="button"
//                 onClick={() => {
//                   setSelected(null);
//                   openEdit(selected);
//                 }}
//                 className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white"
//               >
//                 Edit
//               </button>
//               <button
//                 type="button"
//                 onClick={() => removeVendor(selected)}
//                 className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600"
//               >
//                 Delete
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setSelected(null)}
//                 className="ml-auto rounded-lg border border-gray-200 px-4 py-2.5 text-sm"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-4">
//               <h2 className="text-lg font-bold">
//                 {editing ? "Edit Vendor" : "Add Vendor"}
//               </h2>
//               <button
//                 type="button"
//                 onClick={() => {
//                   setShowModal(false);
//                   setEditing(null);
//                 }}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>
//             <div className="grid gap-4 p-6 sm:grid-cols-2">
//               <Field
//                 label="Name *"
//                 value={form.name}
//                 onChange={(v) => setForm((f) => ({ ...f, name: v }))}
//               />
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Type
//                 </label>
//                 <select
//                   value={form.type}
//                   onChange={(e) =>
//                     setForm((f) => ({
//                       ...f,
//                       type: e.target.value as VendorType,
//                     }))
//                   }
//                   className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {vendorTypes.map((t) => (
//                     <option key={t}>{t}</option>
//                   ))}
//                 </select>
//               </div>
//               <Field
//                 label="Phone *"
//                 value={form.phone}
//                 onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
//               />
//               <Field
//                 label="Email"
//                 value={form.email}
//                 onChange={(v) => setForm((f) => ({ ...f, email: v }))}
//               />

//               {/* Project dropdown */}
//               <div className="sm:col-span-2">
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Project
//                 </label>
//                 <select
//                   value={selectedProjectValue()}
//                   onChange={(e) => onProjectSelect(e.target.value)}
//                   className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   <option value="">— Select project —</option>
//                   {projects.map((p) => (
//                     <option key={p.id} value={p.id}>
//                       {projectLabel(p)}
//                     </option>
//                   ))}
//                 </select>
//                 {projects.length === 0 && (
//                   <p className="mt-1 text-[11px] text-gray-400">
//                     No projects yet. Create projects under Projects first.
//                   </p>
//                 )}
//                 {form.projectId && (
//                   <p className="mt-1 text-[11px] text-gray-500">
//                     Project ID:{" "}
//                     <span className="font-semibold text-[#176b5b]">
//                       {form.projectId}
//                     </span>
//                   </p>
//                 )}
//               </div>

//               <Field
//                 label="Work"
//                 value={form.work}
//                 onChange={(v) => setForm((f) => ({ ...f, work: v }))}
//               />
//               <Field
//                 label="Agreed Amount"
//                 type="number"
//                 value={form.agreedAmount}
//                 onChange={(v) => setForm((f) => ({ ...f, agreedAmount: v }))}
//               />
//               <Field
//                 label="Paid Amount"
//                 type="number"
//                 value={form.paidAmount}
//                 onChange={(v) => setForm((f) => ({ ...f, paidAmount: v }))}
//               />
//               <label className="flex items-center gap-2 text-sm text-gray-700 sm:col-span-2">
//                 <input
//                   type="checkbox"
//                   checked={form.active}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, active: e.target.checked }))
//                   }
//                 />
//                 Active vendor
//               </label>
//             </div>
//             <div className="flex justify-end gap-3 border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
//               <button
//                 type="button"
//                 onClick={() => {
//                   setShowModal(false);
//                   setEditing(null);
//                 }}
//                 className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 disabled={saving}
//                 onClick={saveVendor}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
//               >
//                 {saving ? "Saving…" : editing ? "Save" : "Add Vendor"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }

// function Stat({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-4 shadow-sm">
//       <p className="text-xs text-gray-500">{label}</p>
//       <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
//     </div>
//   );
// }

// function Info({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-xl bg-[#fafaf8] p-3">
//       <p className="text-xs text-gray-400">{label}</p>
//       <p className="mt-1 text-sm font-semibold text-gray-800">{value}</p>
//     </div>
//   );
// }

// function Field({
//   label,
//   value,
//   onChange,
//   type = "text",
// }: {
//   label: string;
//   value: string;
//   onChange: (value: string) => void;
//   type?: string;
// }) {
//   return (
//     <div>
//       <label className="mb-1.5 block text-sm font-medium text-gray-700">
//         {label}
//       </label>
//       <input
//         type={type}
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//       />
//     </div>
//   );
// }

"use client";

import { useEffect, useMemo, useState } from "react";
import {
  getAllVendors,
  createVendor,
  updateVendor,
  deleteVendor as deleteVendorFromDb,
  type InteriorVendor,
} from "@/modules/interior/services/vendorService";
import {
  getAllInteriorProjects,
  type InteriorProject,
} from "@/modules/interior/services/projectService";
import { Plus } from "lucide-react";

type VendorType =
  | "Carpenter"
  | "Electrical"
  | "Plumbing"
  | "Painting"
  | "Civil"
  | "Other";

type PaymentStatus = "Paid" | "Partial" | "Pending";

type Vendor = {
  id: string;
  name: string;
  type: VendorType;
  phone: string;
  email: string;
  project: string;
  projectId: string;
  work: string;
  agreedAmount: number;
  paidAmount: number;
  status: PaymentStatus;
  active: boolean;
};

const vendorTypes: VendorType[] = [
  "Carpenter",
  "Electrical",
  "Plumbing",
  "Painting",
  "Civil",
  "Other",
];

function formatCurrency(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function paymentStatusFromAmounts(
  agreed: number,
  paid: number
): PaymentStatus {
  if (paid <= 0) return "Pending";
  if (paid >= agreed) return "Paid";
  return "Partial";
}

function statusClass(status: PaymentStatus) {
  if (status === "Paid") return "bg-green-50 text-green-700 border-green-200";
  if (status === "Partial")
    return "bg-amber-50 text-amber-700 border-amber-200";
  return "bg-red-50 text-red-700 border-red-200";
}

function normalizeType(raw?: string): VendorType {
  const s = (raw || "Other").trim();
  if ((vendorTypes as string[]).includes(s)) return s as VendorType;
  const lower = s.toLowerCase();
  if (lower.includes("carpent")) return "Carpenter";
  if (lower.includes("electric")) return "Electrical";
  if (lower.includes("plumb")) return "Plumbing";
  if (lower.includes("paint")) return "Painting";
  if (lower.includes("civil")) return "Civil";
  return "Other";
}

function mapToUi(v: InteriorVendor): Vendor {
  const agreed = Number(v.agreedAmount ?? 0) || 0;
  const paid = Number(v.paidAmount ?? 0) || 0;
  const statusRaw = (v.status || "").toString();
  const status: PaymentStatus =
    statusRaw === "Paid" || statusRaw === "Partial" || statusRaw === "Pending"
      ? statusRaw
      : paymentStatusFromAmounts(agreed, paid);

  return {
    id: v.id,
    name: v.name || "Unknown Vendor",
    type: normalizeType(v.type),
    phone: v.phone || "—",
    email: v.email || "",
    project: v.project || "—",
    projectId: v.projectId || "",
    work: v.work || "—",
    agreedAmount: agreed,
    paidAmount: paid,
    status,
    active: v.active !== false,
  };
}

function projectLabel(p: InteriorProject) {
  const no = p.projectNo || p.projectId || p.id.slice(0, 8).toUpperCase();
  const name = p.projectName || p.name || "Untitled";
  const client = p.clientName || p.client || "";
  return client ? `${no} · ${name} (${client})` : `${no} · ${name}`;
}

export default function InteriorVendorsPage() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [projects, setProjects] = useState<InteriorProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<"All" | VendorType>("All");
  const [statusFilter, setStatusFilter] = useState<"All" | PaymentStatus>(
    "All"
  );
  const [activeOnly, setActiveOnly] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<Vendor | null>(null);
  const [selected, setSelected] = useState<Vendor | null>(null);

  const [form, setForm] = useState({
    name: "",
    type: "Carpenter" as VendorType,
    phone: "",
    email: "",
    project: "",
    projectId: "",
    work: "",
    agreedAmount: "",
    paidAmount: "",
    active: true,
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const [vendorData, projectData] = await Promise.all([
          getAllVendors(),
          getAllInteriorProjects(),
        ]);
        if (cancelled) return;
        setVendors(vendorData.map(mapToUi));
        setProjects(projectData);
      } catch (err) {
        console.error(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!selected && !showModal) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [selected, showModal]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return vendors.filter((v) => {
      const matchesSearch =
        !q ||
        v.name.toLowerCase().includes(q) ||
        v.phone.toLowerCase().includes(q) ||
        v.project.toLowerCase().includes(q) ||
        v.work.toLowerCase().includes(q);

      const matchesType = typeFilter === "All" || v.type === typeFilter;
      const matchesStatus =
        statusFilter === "All" || v.status === statusFilter;
      const matchesActive = !activeOnly || v.active;

      return matchesSearch && matchesType && matchesStatus && matchesActive;
    });
  }, [vendors, search, typeFilter, statusFilter, activeOnly]);

  const statistics = useMemo(() => {
    const total = vendors.length;
    const active = vendors.filter((v) => v.active).length;
    const carpenters = vendors.filter((v) => v.type === "Carpenter").length;
    const agreed = vendors.reduce((s, v) => s + v.agreedAmount, 0);
    const paid = vendors.reduce((s, v) => s + v.paidAmount, 0);
    const pending = Math.max(agreed - paid, 0);
    return { total, active, carpenters, agreed, paid, pending };
  }, [vendors]);

  function resetForm() {
    setForm({
      name: "",
      type: "Carpenter",
      phone: "",
      email: "",
      project: "",
      projectId: "",
      work: "",
      agreedAmount: "",
      paidAmount: "",
      active: true,
    });
  }

  function openNew() {
    setEditing(null);
    resetForm();
    setShowModal(true);
  }

  function openEdit(vendor: Vendor) {
    setEditing(vendor);
    setForm({
      name: vendor.name,
      type: vendor.type,
      phone: vendor.phone === "—" ? "" : vendor.phone,
      email: vendor.email,
      project: vendor.project === "—" ? "" : vendor.project,
      projectId: vendor.projectId === "—" ? "" : vendor.projectId,
      work: vendor.work === "—" ? "" : vendor.work,
      agreedAmount: String(vendor.agreedAmount || ""),
      paidAmount: String(vendor.paidAmount || ""),
      active: vendor.active,
    });
    setShowModal(true);
  }

  function onProjectSelect(projectDocId: string) {
    if (!projectDocId) {
      setForm((f) => ({ ...f, project: "", projectId: "" }));
      return;
    }
    const p = projects.find((x) => x.id === projectDocId);
    if (!p) return;
    const name = p.projectName || p.name || "Untitled";
    const code =
      p.projectNo || p.projectId || p.id.slice(0, 8).toUpperCase();
    setForm((f) => ({
      ...f,
      project: name,
      projectId: code,
    }));
  }

  function selectedProjectValue(): string {
    if (!form.projectId && !form.project) return "";
    const match = projects.find((p) => {
      const code =
        p.projectNo || p.projectId || p.id.slice(0, 8).toUpperCase();
      const name = p.projectName || p.name || "";
      return (
        code === form.projectId ||
        p.id === form.projectId ||
        name === form.project
      );
    });
    return match?.id || "";
  }

  async function saveVendor() {
    if (!form.name.trim() || !form.phone.trim()) {
      alert("Name and phone are required.");
      return;
    }

    const agreedAmount = Number(form.agreedAmount) || 0;
    const paidAmount = Number(form.paidAmount) || 0;
    const status = paymentStatusFromAmounts(agreedAmount, paidAmount);

    setSaving(true);
    try {
      const payload = {
        name: form.name.trim(),
        type: form.type,
        phone: form.phone.trim(),
        email: form.email.trim(),
        project: form.project.trim(),
        projectId: form.projectId.trim(),
        work: form.work.trim(),
        agreedAmount,
        paidAmount,
        status,
        active: form.active,
      };

      if (editing) {
        await updateVendor(editing.id, payload);
        setVendors((current) =>
          current.map((v) =>
            v.id === editing.id ? { ...v, ...payload } : v
          )
        );
      } else {
        const id = await createVendor(payload);
        setVendors((current) => [{ id, ...payload }, ...current]);
      }

      setShowModal(false);
      setEditing(null);
      resetForm();
    } catch (err) {
      console.error(err);
      alert("Unable to save vendor.");
    } finally {
      setSaving(false);
    }
  }

  async function toggleActive(id: string) {
    const vendor = vendors.find((v) => v.id === id);
    if (!vendor) return;
    const next = !vendor.active;

    setVendors((current) =>
      current.map((v) => (v.id === id ? { ...v, active: next } : v))
    );

    try {
      await updateVendor(id, { active: next });
    } catch (err) {
      console.error(err);
      try {
        const data = await getAllVendors();
        setVendors(data.map(mapToUi));
      } catch {
        /* ignore */
      }
    }
  }

  async function removeVendor(vendor: Vendor) {
    if (!window.confirm(`Delete vendor "${vendor.name}"?`)) return;

    setVendors((current) => current.filter((v) => v.id !== vendor.id));
    setSelected(null);

    try {
      await deleteVendorFromDb(vendor.id);
    } catch (err) {
      console.error(err);
      try {
        const data = await getAllVendors();
        setVendors(data.map(mapToUi));
      } catch {
        /* ignore */
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
      {/* Header: title + Add Vendor beside */}
      <div className="border-b border-[#e4e2da] bg-white">
        <div className="mx-auto max-w-[1600px] px-3 py-4 sm:px-5 sm:py-5 lg:px-8">
          <div className="flex items-start justify-between gap-3 sm:items-center">
            <div className="min-w-0 flex-1">
              <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
                Vendors / Carpenters
              </h1>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Manage vendors, assigned work and payments.
                {loading && (
                  <span className="ml-2 text-[#176b5b]">Loading…</span>
                )}
              </p>
            </div>
            <button
              type="button"
              onClick={openNew}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125848] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
            >
              <Plus size={16} strokeWidth={2.5} />
              <span className="hidden sm:inline">Add Vendor</span>
              <span className="sm:hidden">Add</span>
            </button>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[1600px] space-y-4 px-3 py-4 sm:space-y-6 sm:px-5 sm:py-6 lg:px-8">
        <section className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-3 2xl:grid-cols-6">
          <Stat
            label="Total Vendors"
            value={loading ? "…" : String(statistics.total)}
          />
          <Stat
            label="Active"
            value={loading ? "…" : String(statistics.active)}
          />
          <Stat
            label="Carpenters"
            value={loading ? "…" : String(statistics.carpenters)}
          />
          <Stat
            label="Agreed"
            value={loading ? "…" : formatCurrency(statistics.agreed)}
          />
          <Stat
            label="Paid"
            value={loading ? "…" : formatCurrency(statistics.paid)}
          />
          <Stat
            label="Pending"
            value={loading ? "…" : formatCurrency(statistics.pending)}
          />
        </section>

        <section className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-4">
          <div className="flex flex-col gap-2 sm:gap-3 lg:flex-row lg:flex-wrap lg:items-center">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search vendor, phone, project, work..."
              className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] lg:max-w-md"
            />
            <div className="flex flex-wrap gap-2">
              <select
                value={typeFilter}
                onChange={(e) =>
                  setTypeFilter(e.target.value as "All" | VendorType)
                }
                className="min-w-0 flex-1 rounded-lg border border-gray-200 px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
              >
                <option value="All">All Types</option>
                {vendorTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <select
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(e.target.value as "All" | PaymentStatus)
                }
                className="min-w-0 flex-1 rounded-lg border border-gray-200 px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
              >
                <option value="All">All Payment</option>
                <option value="Paid">Paid</option>
                <option value="Partial">Partial</option>
                <option value="Pending">Pending</option>
              </select>
              <label className="flex items-center gap-2 whitespace-nowrap text-xs text-gray-600 sm:text-sm">
                <input
                  type="checkbox"
                  checked={activeOnly}
                  onChange={(e) => setActiveOnly(e.target.checked)}
                  className="rounded border-gray-300"
                />
                Active only
              </label>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
          {/* Desktop table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[1000px] text-left">
              <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
                <tr>
                  <th className="px-5 py-3 font-semibold">Vendor</th>
                  <th className="px-4 py-3 font-semibold">Type</th>
                  <th className="px-4 py-3 font-semibold">Project / Work</th>
                  <th className="px-4 py-3 font-semibold">Agreed</th>
                  <th className="px-4 py-3 font-semibold">Paid</th>
                  <th className="px-4 py-3 font-semibold">Payment</th>
                  <th className="px-4 py-3 font-semibold">Active</th>
                  <th className="px-4 py-3 text-right font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eeece6]">
                {loading ? (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-5 py-12 text-center text-sm text-gray-500"
                    >
                      Loading vendors…
                    </td>
                  </tr>
                ) : filtered.length === 0 ? (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-5 py-12 text-center text-sm text-gray-500"
                    >
                      No vendors found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((vendor) => (
                    <tr key={vendor.id} className="hover:bg-[#fafaf8]">
                      <td className="px-5 py-4">
                        <p className="font-semibold text-gray-900">
                          {vendor.name}
                        </p>
                        <p className="text-xs text-gray-500">{vendor.phone}</p>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        {vendor.type}
                      </td>
                      <td className="px-4 py-4">
                        <p className="text-sm font-medium text-gray-800">
                          {vendor.project}
                        </p>
                        <p className="text-xs text-gray-400">
                          {vendor.projectId ? `${vendor.projectId} · ` : ""}
                          {vendor.work}
                        </p>
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold">
                        {formatCurrency(vendor.agreedAmount)}
                      </td>
                      <td className="px-4 py-4 text-sm text-green-700">
                        {formatCurrency(vendor.paidAmount)}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
                            vendor.status
                          )}`}
                        >
                          {vendor.status}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <button
                          type="button"
                          onClick={() => toggleActive(vendor.id)}
                          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                            vendor.active
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {vendor.active ? "Active" : "Inactive"}
                        </button>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => setSelected(vendor)}
                            className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
                          >
                            View
                          </button>
                          <button
                            type="button"
                            onClick={() => openEdit(vendor)}
                            className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50"
                          >
                            Edit
                          </button>
                        </div>
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
                Loading vendors…
              </p>
            ) : filtered.length === 0 ? (
              <p className="py-10 text-center text-sm text-gray-500">
                No vendors found.
              </p>
            ) : (
              filtered.map((vendor) => (
                <article
                  key={vendor.id}
                  className="rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900">
                        {vendor.name}
                      </p>
                      <p className="text-xs text-gray-500">{vendor.phone}</p>
                      <p className="mt-0.5 text-xs text-gray-500">
                        {vendor.type} · {vendor.project}
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-1">
                      <span
                        className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${statusClass(
                          vendor.status
                        )}`}
                      >
                        {vendor.status}
                      </span>
                      <button
                        type="button"
                        onClick={() => toggleActive(vendor.id)}
                        className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                          vendor.active
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {vendor.active ? "Active" : "Inactive"}
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between text-sm">
                    <span className="text-gray-500">
                      Agreed {formatCurrency(vendor.agreedAmount)}
                    </span>
                    <span className="font-semibold text-green-700">
                      Paid {formatCurrency(vendor.paidAmount)}
                    </span>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setSelected(vendor)}
                      className="flex-1 rounded-lg border border-gray-200 bg-white py-2 text-xs font-medium text-gray-700"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      onClick={() => openEdit(vendor)}
                      className="flex-1 rounded-lg border border-gray-200 bg-white py-2 text-xs font-medium text-gray-700"
                    >
                      Edit
                    </button>
                  </div>
                </article>
              ))
            )}
          </div>
        </section>
      </main>

      {/* Detail modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 sm:p-4">
          <div className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="sticky top-0 flex items-center justify-between border-b border-[#e4e2da] bg-white px-4 py-4 sm:px-6">
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[#176b5b]">
                  {selected.type}
                </p>
                <h2 className="mt-1 truncate text-lg font-bold sm:text-xl">
                  {selected.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="shrink-0 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2 p-4 sm:gap-3 sm:p-6">
              <Info label="Phone" value={selected.phone} />
              <Info label="Email" value={selected.email || "—"} />
              <Info label="Project" value={selected.project} />
              <Info label="Project ID" value={selected.projectId || "—"} />
              <Info label="Work" value={selected.work} />
              <Info
                label="Agreed"
                value={formatCurrency(selected.agreedAmount)}
              />
              <Info
                label="Paid"
                value={formatCurrency(selected.paidAmount)}
              />
              <Info
                label="Balance"
                value={formatCurrency(
                  Math.max(selected.agreedAmount - selected.paidAmount, 0)
                )}
              />
            </div>
            <div className="flex flex-wrap gap-2 border-t border-[#e4e2da] px-4 py-4 sm:px-6">
              <button
                type="button"
                onClick={() => {
                  setSelected(null);
                  openEdit(selected);
                }}
                className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => removeVendor(selected)}
                className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600"
              >
                Delete
              </button>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="ml-auto rounded-lg border border-gray-200 px-4 py-2.5 text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add / Edit modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 sm:p-4">
          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="sticky top-0 flex items-center justify-between border-b border-[#e4e2da] bg-white px-4 py-4 sm:px-6">
              <h2 className="text-base font-bold sm:text-lg">
                {editing ? "Edit Vendor" : "Add Vendor"}
              </h2>
              <button
                type="button"
                onClick={() => {
                  setShowModal(false);
                  setEditing(null);
                }}
                className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>
            <div className="grid gap-3 p-4 sm:grid-cols-2 sm:gap-4 sm:p-6">
              <Field
                label="Name *"
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
              />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Type
                </label>
                <select
                  value={form.type}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      type: e.target.value as VendorType,
                    }))
                  }
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                >
                  {vendorTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <Field
                label="Phone *"
                value={form.phone}
                onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
              />
              <Field
                label="Email"
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
              />

              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Project
                </label>
                <select
                  value={selectedProjectValue()}
                  onChange={(e) => onProjectSelect(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                >
                  <option value="">— Select project —</option>
                  {projects.map((p) => (
                    <option key={p.id} value={p.id}>
                      {projectLabel(p)}
                    </option>
                  ))}
                </select>
                {projects.length === 0 && (
                  <p className="mt-1 text-[11px] text-gray-400">
                    No projects yet. Create projects under Projects first.
                  </p>
                )}
                {form.projectId && (
                  <p className="mt-1 text-[11px] text-gray-500">
                    Project ID:{" "}
                    <span className="font-semibold text-[#176b5b]">
                      {form.projectId}
                    </span>
                  </p>
                )}
              </div>

              <Field
                label="Work"
                value={form.work}
                onChange={(v) => setForm((f) => ({ ...f, work: v }))}
              />
              <Field
                label="Agreed Amount"
                type="number"
                value={form.agreedAmount}
                onChange={(v) => setForm((f) => ({ ...f, agreedAmount: v }))}
              />
              <Field
                label="Paid Amount"
                type="number"
                value={form.paidAmount}
                onChange={(v) => setForm((f) => ({ ...f, paidAmount: v }))}
              />
              <label className="flex items-center gap-2 text-sm text-gray-700 sm:col-span-2">
                <input
                  type="checkbox"
                  checked={form.active}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, active: e.target.checked }))
                  }
                  className="rounded border-gray-300"
                />
                Active vendor
              </label>
            </div>
            <div className="flex flex-col-reverse gap-2 border-t border-[#e4e2da] bg-[#fafaf8] px-4 py-4 sm:flex-row sm:justify-end sm:gap-3 sm:px-6">
              <button
                type="button"
                onClick={() => {
                  setShowModal(false);
                  setEditing(null);
                }}
                className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={saving}
                onClick={saveVendor}
                className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
              >
                {saving ? "Saving…" : editing ? "Save" : "Add Vendor"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-4">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="mt-1.5 truncate text-lg font-bold text-gray-900 sm:mt-2 sm:text-2xl">
        {value}
      </p>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-[#fafaf8] p-3">
      <p className="text-xs text-gray-400">{label}</p>
      <p className="mt-1 break-words text-sm font-semibold text-gray-800">
        {value}
      </p>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
      />
    </div>
  );
}
