// "use client";

// import { useMemo, useState } from "react";

// type QuotationStatus =
//   | "Draft"
//   | "Sent"
//   | "Accepted"
//   | "Rejected"
//   | "Expired"
//   | "Converted";

// type ProjectType =
//   | "Residential"
//   | "Commercial"
//   | "Office"
//   | "Villa"
//   | "Apartment";

// type Quotation = {
//   id: string;
//   quotationNo: string;
//   client: string;
//   phone: string;
//   email: string;
//   projectName: string;
//   projectType: ProjectType;
//   location: string;
//   designer: string;
//   quotationDate: string;
//   validUntil: string;
//   amount: number;
//   tax: number;
//   total: number;
//   status: QuotationStatus;
//   paymentTerms: string;
//   notes: string;
// };

// const initialQuotations: Quotation[] = [
//   {
//     id: "QT-001",
//     quotationNo: "QT-2026-101",
//     client: "Rahul Kumar",
//     phone: "9876543210",
//     email: "rahul@example.com",
//     projectName: "Luxury 3 BHK Interior",
//     projectType: "Residential",
//     location: "Guntur",
//     designer: "Priya Sharma",
//     quotationDate: "2026-10-01",
//     validUntil: "2026-10-16",
//     amount: 720339,
//     tax: 129661,
//     total: 850000,
//     status: "Accepted",
//     paymentTerms:
//       "40% Advance, 40% During Work, 20% On Completion",
//     notes: "Complete 3 BHK interior quotation.",
//   },
//   {
//     id: "QT-002",
//     quotationNo: "QT-2026-102",
//     client: "Priya Sharma",
//     phone: "9988776655",
//     email: "priya@example.com",
//     projectName: "Modern 2 BHK Interior",
//     projectType: "Apartment",
//     location: "Vijayawada",
//     designer: "Anjali Rao",
//     quotationDate: "2026-10-02",
//     validUntil: "2026-10-17",
//     amount: 525424,
//     tax: 94576,
//     total: 620000,
//     status: "Sent",
//     paymentTerms:
//       "50% Advance, 50% On Completion",
//     notes: "Modern apartment interior proposal.",
//   },
//   {
//     id: "QT-003",
//     quotationNo: "QT-2026-103",
//     client: "Suresh Reddy",
//     phone: "9123456780",
//     email: "suresh@example.com",
//     projectName: "Modern Villa Interior",
//     projectType: "Villa",
//     location: "Hyderabad",
//     designer: "Anjali Rao",
//     quotationDate: "2026-09-28",
//     validUntil: "2026-10-13",
//     amount: 1059322,
//     tax: 190678,
//     total: 1250000,
//     status: "Converted",
//     paymentTerms:
//       "40% Advance, 40% During Work, 20% On Completion",
//     notes: "Villa complete interior package.",
//   },
//   {
//     id: "QT-004",
//     quotationNo: "QT-2026-104",
//     client: "Anjali Rao",
//     phone: "9012345678",
//     email: "anjali@example.com",
//     projectName: "Apartment Interior",
//     projectType: "Apartment",
//     location: "Guntur",
//     designer: "Priya Sharma",
//     quotationDate: "2026-09-25",
//     validUntil: "2026-10-10",
//     amount: 406780,
//     tax: 73220,
//     total: 480000,
//     status: "Accepted",
//     paymentTerms:
//       "50% Advance, 50% On Completion",
//     notes: "Apartment living and bedroom interiors.",
//   },
//   {
//     id: "QT-005",
//     quotationNo: "QT-2026-105",
//     client: "Kiran Kumar",
//     phone: "8899776655",
//     email: "kiran@example.com",
//     projectName: "Corporate Office Interior",
//     projectType: "Office",
//     location: "Vijayawada",
//     designer: "Sneha Rao",
//     quotationDate: "2026-10-03",
//     validUntil: "2026-10-18",
//     amount: 830508,
//     tax: 149492,
//     total: 980000,
//     status: "Sent",
//     paymentTerms:
//       "30% Advance, 40% During Work, 30% On Completion",
//     notes: "Office reception, cabins and workstations.",
//   },
//   {
//     id: "QT-006",
//     quotationNo: "QT-2026-106",
//     client: "Meghana Devi",
//     phone: "9000011111",
//     email: "meghana@example.com",
//     projectName: "2 BHK Interior",
//     projectType: "Residential",
//     location: "Guntur",
//     designer: "Anjali Rao",
//     quotationDate: "2026-10-04",
//     validUntil: "2026-10-19",
//     amount: 330508,
//     tax: 59492,
//     total: 390000,
//     status: "Draft",
//     paymentTerms:
//       "50% Advance, 50% On Completion",
//     notes: "Budget-focused 2 BHK interior.",
//   },
//   {
//     id: "QT-007",
//     quotationNo: "QT-2026-107",
//     client: "Vamsi Krishna",
//     phone: "9111122222",
//     email: "vamsi@example.com",
//     projectName: "Commercial Office Interior",
//     projectType: "Commercial",
//     location: "Hyderabad",
//     designer: "Priya Sharma",
//     quotationDate: "2026-09-20",
//     validUntil: "2026-10-05",
//     amount: 610170,
//     tax: 109830,
//     total: 720000,
//     status: "Expired",
//     paymentTerms:
//       "40% Advance, 40% During Work, 20% On Completion",
//     notes: "Commercial office interior proposal.",
//   },
//   {
//     id: "QT-008",
//     quotationNo: "QT-2026-108",
//     client: "Sneha Reddy",
//     phone: "9222233333",
//     email: "sneha@example.com",
//     projectName: "Living Room Interior",
//     projectType: "Residential",
//     location: "Tenali",
//     designer: "Sneha Rao",
//     quotationDate: "2026-09-30",
//     validUntil: "2026-10-15",
//     amount: 237288,
//     tax: 42712,
//     total: 280000,
//     status: "Rejected",
//     paymentTerms:
//       "50% Advance, 50% On Completion",
//     notes: "Living room furniture and false ceiling.",
//   },
// ];

// const statuses: Array<QuotationStatus | "All"> = [
//   "All",
//   "Draft",
//   "Sent",
//   "Accepted",
//   "Rejected",
//   "Expired",
//   "Converted",
// ];

// const projectTypes: Array<ProjectType | "All"> = [
//   "All",
//   "Residential",
//   "Commercial",
//   "Office",
//   "Villa",
//   "Apartment",
// ];

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function formatCompactCurrency(value: number) {
//   if (value >= 10000000) {
//     return `₹${(value / 10000000).toFixed(1)} Cr`;
//   }

//   if (value >= 100000) {
//     return `₹${(value / 100000).toFixed(1)} L`;
//   }

//   if (value >= 1000) {
//     return `₹${Math.round(value / 1000)}K`;
//   }

//   return `₹${value}`;
// }

// function formatDate(date: string) {
//   if (!date) return "-";

//   return new Date(date).toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });
// }

// function statusClass(status: QuotationStatus) {
//   switch (status) {
//     case "Draft":
//       return "border-gray-200 bg-gray-50 text-gray-700";

//     case "Sent":
//       return "border-blue-200 bg-blue-50 text-blue-700";

//     case "Accepted":
//       return "border-green-200 bg-green-50 text-green-700";

//     case "Rejected":
//       return "border-red-200 bg-red-50 text-red-700";

//     case "Expired":
//       return "border-orange-200 bg-orange-50 text-orange-700";

//     case "Converted":
//       return "border-purple-200 bg-purple-50 text-purple-700";

//     default:
//       return "border-gray-200 bg-gray-50 text-gray-700";
//   }
// }

// export default function InteriorQuotationsPage() {
//   const [quotations, setQuotations] =
//     useState<Quotation[]>(initialQuotations);

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] =
//     useState<QuotationStatus | "All">("All");
//   const [typeFilter, setTypeFilter] =
//     useState<ProjectType | "All">("All");

//   const [selectedQuotation, setSelectedQuotation] =
//     useState<Quotation | null>(null);

//   const [showDeleteModal, setShowDeleteModal] =
//     useState(false);

//   const [showConvertModal, setShowConvertModal] =
//     useState(false);

//   const [showSendModal, setShowSendModal] =
//     useState(false);

//   const filteredQuotations = useMemo(() => {
//     const query = search.toLowerCase().trim();

//     return quotations.filter((quotation) => {
//       const matchesSearch =
//         !query ||
//         quotation.quotationNo
//           .toLowerCase()
//           .includes(query) ||
//         quotation.client
//           .toLowerCase()
//           .includes(query) ||
//         quotation.projectName
//           .toLowerCase()
//           .includes(query) ||
//         quotation.location
//           .toLowerCase()
//           .includes(query) ||
//         quotation.designer
//           .toLowerCase()
//           .includes(query);

//       const matchesStatus =
//         statusFilter === "All" ||
//         quotation.status === statusFilter;

//       const matchesType =
//         typeFilter === "All" ||
//         quotation.projectType === typeFilter;

//       return (
//         matchesSearch &&
//         matchesStatus &&
//         matchesType
//       );
//     });
//   }, [
//     quotations,
//     search,
//     statusFilter,
//     typeFilter,
//   ]);

//   const totalValue = quotations.reduce(
//     (sum, quotation) =>
//       sum + quotation.total,
//     0
//   );

//   const acceptedValue = quotations
//     .filter(
//       (quotation) =>
//         quotation.status === "Accepted" ||
//         quotation.status === "Converted"
//     )
//     .reduce(
//       (sum, quotation) =>
//         sum + quotation.total,
//       0
//     );

//   const pendingValue = quotations
//     .filter(
//       (quotation) =>
//         quotation.status === "Sent" ||
//         quotation.status === "Draft"
//     )
//     .reduce(
//       (sum, quotation) =>
//         sum + quotation.total,
//       0
//     );

//   const acceptedCount = quotations.filter(
//     (quotation) =>
//       quotation.status === "Accepted" ||
//       quotation.status === "Converted"
//   ).length;

//   const conversionRate =
//     quotations.length === 0
//       ? 0
//       : Math.round(
//           (acceptedCount / quotations.length) *
//             100
//         );

//   function changeStatus(
//     quotationId: string,
//     status: QuotationStatus
//   ) {
//     setQuotations((current) =>
//       current.map((quotation) =>
//         quotation.id === quotationId
//           ? {
//               ...quotation,
//               status,
//             }
//           : quotation
//       )
//     );

//     setSelectedQuotation((current) =>
//       current
//         ? {
//             ...current,
//             status,
//           }
//         : null
//     );
//   }

//   function deleteQuotation() {
//     if (!selectedQuotation) return;

//     setQuotations((current) =>
//       current.filter(
//         (quotation) =>
//           quotation.id !==
//           selectedQuotation.id
//       )
//     );

//     setSelectedQuotation(null);
//     setShowDeleteModal(false);
//   }

//   function convertToProject() {
//     if (!selectedQuotation) return;

//     changeStatus(
//       selectedQuotation.id,
//       "Converted"
//     );

//     setShowConvertModal(false);

//     alert(
//       `${selectedQuotation.quotationNo} has been converted to a project.`
//     );
//   }

//   function sendQuotation() {
//     if (!selectedQuotation) return;

//     changeStatus(
//       selectedQuotation.id,
//       "Sent"
//     );

//     setShowSendModal(false);

//     alert(
//       `Quotation ${selectedQuotation.quotationNo} is ready to be sent to ${selectedQuotation.email}.`
//     );
//   }

//   function exportCSV() {
//     const header = [
//       "Quotation No",
//       "Client",
//       "Phone",
//       "Email",
//       "Project",
//       "Project Type",
//       "Location",
//       "Designer",
//       "Quotation Date",
//       "Valid Until",
//       "Amount",
//       "Tax",
//       "Total",
//       "Status",
//     ];

//     const rows = filteredQuotations.map(
//       (quotation) => [
//         quotation.quotationNo,
//         quotation.client,
//         quotation.phone,
//         quotation.email,
//         quotation.projectName,
//         quotation.projectType,
//         quotation.location,
//         quotation.designer,
//         quotation.quotationDate,
//         quotation.validUntil,
//         quotation.amount,
//         quotation.tax,
//         quotation.total,
//         quotation.status,
//       ]
//     );

//     const csv = [
//       header,
//       ...rows,
//     ]
//       .map((row) =>
//         row
//           .map((value) =>
//             `"${String(value).replace(
//               /"/g,
//               '""'
//             )}"`
//           )
//           .join(",")
//       )
//       .join("\n");

//     const blob = new Blob([csv], {
//       type: "text/csv;charset=utf-8;",
//     });

//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");

//     link.href = url;
//     link.download = "interior-quotations.csv";
//     link.click();

//     URL.revokeObjectURL(url);
//   }

//   function clearFilters() {
//     setSearch("");
//     setStatusFilter("All");
//     setTypeFilter("All");
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-gray-900">
//       {/* Header */}
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1500px] px-5 py-5">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               <div className="mb-1 flex flex-wrap items-center gap-2 text-sm text-gray-500">
//                 <span className="font-semibold text-[#9a5b18]">
//                   Akrish
//                 </span>

//                 <span>/</span>

//                 <span>Interior</span>

//                 <span>/</span>

//                 <span>Quotations</span>
//               </div>

//               <h1 className="text-2xl font-bold tracking-tight">
//                 Quotations
//               </h1>

//               <p className="mt-1 text-sm text-gray-500">
//                 Create, manage and track interior project
//                 quotations.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               <button
//                 onClick={exportCSV}
//                 className="rounded-lg border border-[#d9d7ce] bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 ↓ Export CSV
//               </button>

//               <button
//                 onClick={() => window.print()}
//                 className="rounded-lg border border-[#d9d7ce] bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 🖨 Print
//               </button>

//               <a
//                 href="/interior/quotations/new"
//                 className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#12594b]"
//               >
//                 + New Quotation
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1500px] space-y-5 px-5 py-6">
//         {/* Summary Cards */}
//         <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
//           <SummaryCard
//             title="Total Quotations"
//             value={quotations.length}
//             subtitle="All quotations"
//             icon="▤"
//           />

//           <SummaryCard
//             title="Total Quotation Value"
//             value={formatCompactCurrency(
//               totalValue
//             )}
//             subtitle="All quotation value"
//             icon="₹"
//           />

//           <SummaryCard
//             title="Accepted Value"
//             value={formatCompactCurrency(
//               acceptedValue
//             )}
//             subtitle="Accepted + converted"
//             icon="✓"
//             green
//           />

//           <SummaryCard
//             title="Pending Value"
//             value={formatCompactCurrency(
//               pendingValue
//             )}
//             subtitle="Draft + sent"
//             icon="◷"
//             orange
//           />

//           <SummaryCard
//             title="Conversion Rate"
//             value={`${conversionRate}%`}
//             subtitle={`${acceptedCount} accepted/converted`}
//             icon="%"
//           />
//         </section>

//         {/* Status Overview */}
//         <section className="grid grid-cols-1 gap-5 lg:grid-cols-3">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h2 className="font-semibold">
//                   Quotation Status
//                 </h2>

//                 <p className="mt-1 text-xs text-gray-500">
//                   Current quotation pipeline
//                 </p>
//               </div>

//               <span className="text-xs font-medium text-gray-400">
//                 {quotations.length} total
//               </span>
//             </div>

//             <div className="mt-5 space-y-3">
//               {statuses
//                 .filter((status) => status !== "All")
//                 .map((status) => {
//                   const count =
//                     quotations.filter(
//                       (quotation) =>
//                         quotation.status ===
//                         status
//                     ).length;

//                   const percentage =
//                     quotations.length
//                       ? Math.round(
//                           (count /
//                             quotations.length) *
//                             100
//                         )
//                       : 0;

//                   return (
//                     <div key={status}>
//                       <div className="mb-1.5 flex items-center justify-between">
//                         <span className="text-xs font-medium text-gray-600">
//                           {status}
//                         </span>

//                         <span className="text-xs font-semibold">
//                           {count}
//                         </span>
//                       </div>

//                       <div className="h-2 overflow-hidden rounded-full bg-gray-100">
//                         <div
//                           className={`h-full rounded-full ${
//                             status === "Accepted"
//                               ? "bg-green-500"
//                               : status === "Converted"
//                               ? "bg-purple-500"
//                               : status === "Sent"
//                               ? "bg-blue-500"
//                               : status === "Rejected"
//                               ? "bg-red-500"
//                               : status === "Expired"
//                               ? "bg-orange-500"
//                               : "bg-gray-400"
//                           }`}
//                           style={{
//                             width: `${percentage}%`,
//                           }}
//                         />
//                       </div>
//                     </div>
//                   );
//                 })}
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <h2 className="font-semibold">
//               Project Type Distribution
//             </h2>

//             <p className="mt-1 text-xs text-gray-500">
//               Quotations by project category
//             </p>

//             <div className="mt-5 space-y-4">
//               {(
//                 [
//                   "Residential",
//                   "Apartment",
//                   "Villa",
//                   "Office",
//                   "Commercial",
//                 ] as ProjectType[]
//               ).map((type) => {
//                 const matching =
//                   quotations.filter(
//                     (quotation) =>
//                       quotation.projectType ===
//                       type
//                   );

//                 const value =
//                   matching.reduce(
//                     (sum, quotation) =>
//                       sum + quotation.total,
//                     0
//                   );

//                 const percentage =
//                   totalValue > 0
//                     ? Math.round(
//                         (value / totalValue) *
//                           100
//                       )
//                     : 0;

//                 return (
//                   <div key={type}>
//                     <div className="mb-1.5 flex justify-between">
//                       <span className="text-xs font-medium text-gray-600">
//                         {type}
//                       </span>

//                       <span className="text-xs font-semibold">
//                         {matching.length} •{" "}
//                         {formatCompactCurrency(
//                           value
//                         )}
//                       </span>
//                     </div>

//                     <div className="h-2 overflow-hidden rounded-full bg-gray-100">
//                       <div
//                         className="h-full rounded-full bg-[#176b5b]"
//                         style={{
//                           width: `${percentage}%`,
//                         }}
//                       />
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <h2 className="font-semibold">
//               Quick Actions
//             </h2>

//             <p className="mt-1 text-xs text-gray-500">
//               Common quotation operations
//             </p>

//             <div className="mt-5 grid grid-cols-2 gap-3">
//               <a
//                 href="/interior/quotations/new"
//                 className="rounded-xl border border-[#e4e2da] p-4 text-left hover:border-[#176b5b] hover:bg-[#176b5b]/5"
//               >
//                 <div className="text-xl">
//                   ＋
//                 </div>

//                 <p className="mt-2 text-sm font-semibold">
//                   New Quotation
//                 </p>

//                 <p className="mt-1 text-xs text-gray-500">
//                   Create a quotation
//                 </p>
//               </a>

//               <button
//                 onClick={() =>
//                   setStatusFilter("Sent")
//                 }
//                 className="rounded-xl border border-[#e4e2da] p-4 text-left hover:border-[#176b5b] hover:bg-[#176b5b]/5"
//               >
//                 <div className="text-xl">
//                   ✉
//                 </div>

//                 <p className="mt-2 text-sm font-semibold">
//                   Sent
//                 </p>

//                 <p className="mt-1 text-xs text-gray-500">
//                   View sent quotations
//                 </p>
//               </button>

//               <button
//                 onClick={() =>
//                   setStatusFilter("Accepted")
//                 }
//                 className="rounded-xl border border-[#e4e2da] p-4 text-left hover:border-[#176b5b] hover:bg-[#176b5b]/5"
//               >
//                 <div className="text-xl">
//                   ✓
//                 </div>

//                 <p className="mt-2 text-sm font-semibold">
//                   Accepted
//                 </p>

//                 <p className="mt-1 text-xs text-gray-500">
//                   View accepted quotes
//                 </p>
//               </button>

//               <button
//                 onClick={() =>
//                   setStatusFilter("Draft")
//                 }
//                 className="rounded-xl border border-[#e4e2da] p-4 text-left hover:border-[#176b5b] hover:bg-[#176b5b]/5"
//               >
//                 <div className="text-xl">
//                   📝
//                 </div>

//                 <p className="mt-2 text-sm font-semibold">
//                   Drafts
//                 </p>

//                 <p className="mt-1 text-xs text-gray-500">
//                   Continue drafts
//                 </p>
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Filters */}
//         <section className="rounded-xl border border-[#e4e2da] bg-white p-4 shadow-sm">
//           <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-[1fr_190px_190px_auto]">
//             <div className="relative">
//               <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                 🔍
//               </span>

//               <input
//                 value={search}
//                 onChange={(event) =>
//                   setSearch(event.target.value)
//                 }
//                 placeholder="Search quotation, client, project..."
//                 className="w-full rounded-lg border border-[#dddcd5] bg-[#fafaf8] py-2.5 pl-10 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//               />
//             </div>

//             <select
//               value={statusFilter}
//               onChange={(event) =>
//                 setStatusFilter(
//                   event.target
//                     .value as QuotationStatus | "All"
//                 )
//               }
//               className="rounded-lg border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {statuses.map((status) => (
//                 <option key={status} value={status}>
//                   {status === "All"
//                     ? "All Statuses"
//                     : status}
//                 </option>
//               ))}
//             </select>

//             <select
//               value={typeFilter}
//               onChange={(event) =>
//                 setTypeFilter(
//                   event.target
//                     .value as ProjectType | "All"
//                 )
//               }
//               className="rounded-lg border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {projectTypes.map((type) => (
//                 <option key={type} value={type}>
//                   {type === "All"
//                     ? "All Project Types"
//                     : type}
//                 </option>
//               ))}
//             </select>

//             <button
//               onClick={clearFilters}
//               className="rounded-lg border border-[#dddcd5] px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
//             >
//               Clear Filters
//             </button>
//           </div>
//         </section>

//         {/* Quotation Table */}
//         <section className="rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="flex flex-col gap-2 border-b border-[#e4e2da] p-5 sm:flex-row sm:items-center sm:justify-between">
//             <div>
//               <h2 className="font-semibold">
//                 Quotation List
//               </h2>

//               <p className="mt-1 text-sm text-gray-500">
//                 Showing{" "}
//                 {filteredQuotations.length} of{" "}
//                 {quotations.length} quotations
//               </p>
//             </div>

//             <div className="rounded-lg bg-[#f7f7f4] px-3 py-2 text-xs font-medium text-gray-600">
//               Total Value:{" "}
//               {formatCurrency(totalValue)}
//             </div>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="min-w-[1250px] w-full">
//               <thead className="bg-[#fafaf8]">
//                 <tr className="border-b border-[#e4e2da] text-left text-xs uppercase tracking-wide text-gray-500">
//                   <th className="px-5 py-3">
//                     Quotation
//                   </th>

//                   <th className="px-4 py-3">
//                     Client
//                   </th>

//                   <th className="px-4 py-3">
//                     Project
//                   </th>

//                   <th className="px-4 py-3">
//                     Type
//                   </th>

//                   <th className="px-4 py-3">
//                     Date
//                   </th>

//                   <th className="px-4 py-3">
//                     Valid Until
//                   </th>

//                   <th className="px-4 py-3">
//                     Amount
//                   </th>

//                   <th className="px-4 py-3">
//                     Status
//                   </th>

//                   <th className="px-4 py-3 text-right">
//                     Action
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {filteredQuotations.map(
//                   (quotation) => (
//                     <tr
//                       key={quotation.id}
//                       className="border-b border-[#eeeeea] last:border-0 hover:bg-[#fcfcfa]"
//                     >
//                       <td className="px-5 py-4">
//                         <button
//                           onClick={() =>
//                             setSelectedQuotation(
//                               quotation
//                             )
//                           }
//                           className="text-left"
//                         >
//                           <p className="font-semibold text-gray-900 hover:text-[#176b5b]">
//                             {quotation.quotationNo}
//                           </p>

//                           <p className="mt-1 text-xs text-gray-500">
//                             {quotation.designer}
//                           </p>
//                         </button>
//                       </td>

//                       <td className="px-4 py-4">
//                         <p className="text-sm font-semibold">
//                           {quotation.client}
//                         </p>

//                         <p className="mt-1 text-xs text-gray-500">
//                           {quotation.phone}
//                         </p>
//                       </td>

//                       <td className="px-4 py-4">
//                         <p className="max-w-[220px] truncate text-sm font-medium">
//                           {quotation.projectName}
//                         </p>

//                         <p className="mt-1 text-xs text-gray-500">
//                           {quotation.location}
//                         </p>
//                       </td>

//                       <td className="px-4 py-4">
//                         <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
//                           {quotation.projectType}
//                         </span>
//                       </td>

//                       <td className="px-4 py-4 text-sm text-gray-600">
//                         {formatDate(
//                           quotation.quotationDate
//                         )}
//                       </td>

//                       <td className="px-4 py-4 text-sm text-gray-600">
//                         {formatDate(
//                           quotation.validUntil
//                         )}
//                       </td>

//                       <td className="px-4 py-4">
//                         <p className="text-sm font-bold">
//                           {formatCompactCurrency(
//                             quotation.total
//                           )}
//                         </p>

//                         <p className="mt-1 text-xs text-gray-400">
//                           Incl. tax
//                         </p>
//                       </td>

//                       <td className="px-4 py-4">
//                         <span
//                           className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                             quotation.status
//                           )}`}
//                         >
//                           {quotation.status}
//                         </span>
//                       </td>

//                       <td className="px-4 py-4">
//                         <div className="flex justify-end">
//                           <button
//                             onClick={() =>
//                               setSelectedQuotation(
//                                 quotation
//                               )
//                             }
//                             className="rounded-lg border border-[#dddcd5] px-3 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-50"
//                           >
//                             View
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   )
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {filteredQuotations.length === 0 && (
//             <div className="px-5 py-16 text-center">
//               <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-2xl">
//                 📄
//               </div>

//               <h3 className="mt-4 font-semibold">
//                 No quotations found
//               </h3>

//               <p className="mt-1 text-sm text-gray-500">
//                 Try changing your search or filters.
//               </p>

//               <button
//                 onClick={clearFilters}
//                 className="mt-4 rounded-lg bg-[#176b5b] px-4 py-2 text-sm font-semibold text-white"
//               >
//                 Clear Filters
//               </button>
//             </div>
//           )}
//         </section>

//         {/* Bottom Section */}
//         <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <h2 className="font-semibold">
//               Recent Quotations
//             </h2>

//             <p className="mt-1 text-xs text-gray-500">
//               Latest quotation activity
//             </p>

//             <div className="mt-4 space-y-3">
//               {quotations
//                 .slice(0, 5)
//                 .map((quotation) => (
//                   <button
//                     key={quotation.id}
//                     onClick={() =>
//                       setSelectedQuotation(
//                         quotation
//                       )
//                     }
//                     className="flex w-full items-center gap-3 rounded-lg border border-[#eeeeea] p-3 text-left hover:bg-[#fafaf8]"
//                   >
//                     <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#176b5b]/10 font-semibold text-[#176b5b]">
//                       ₹
//                     </div>

//                     <div className="min-w-0 flex-1">
//                       <p className="truncate text-sm font-semibold">
//                         {quotation.projectName}
//                       </p>

//                       <p className="mt-1 text-xs text-gray-500">
//                         {quotation.client} •{" "}
//                         {formatDate(
//                           quotation.quotationDate
//                         )}
//                       </p>
//                     </div>

//                     <div className="text-right">
//                       <p className="text-sm font-bold">
//                         {formatCompactCurrency(
//                           quotation.total
//                         )}
//                       </p>

//                       <span
//                         className={`mt-1 inline-flex rounded-full border px-2 py-0.5 text-[10px] font-semibold ${statusClass(
//                           quotation.status
//                         )}`}
//                       >
//                         {quotation.status}
//                       </span>
//                     </div>
//                   </button>
//                 ))}
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <h2 className="font-semibold">
//               Sales Pipeline
//             </h2>

//             <p className="mt-1 text-xs text-gray-500">
//               Current quotation opportunity
//             </p>

//             <div className="mt-5 grid grid-cols-2 gap-3">
//               <PipelineCard
//                 title="Draft"
//                 count={
//                   quotations.filter(
//                     (q) => q.status === "Draft"
//                   ).length
//                 }
//                 value={quotations
//                   .filter(
//                     (q) => q.status === "Draft"
//                   )
//                   .reduce(
//                     (sum, q) => sum + q.total,
//                     0
//                   )}
//               />

//               <PipelineCard
//                 title="Sent"
//                 count={
//                   quotations.filter(
//                     (q) => q.status === "Sent"
//                   ).length
//                 }
//                 value={quotations
//                   .filter(
//                     (q) => q.status === "Sent"
//                   )
//                   .reduce(
//                     (sum, q) => sum + q.total,
//                     0
//                   )}
//               />

//               <PipelineCard
//                 title="Accepted"
//                 count={
//                   quotations.filter(
//                     (q) => q.status === "Accepted"
//                   ).length
//                 }
//                 value={quotations
//                   .filter(
//                     (q) => q.status === "Accepted"
//                   )
//                   .reduce(
//                     (sum, q) => sum + q.total,
//                     0
//                   )}
//               />

//               <PipelineCard
//                 title="Converted"
//                 count={
//                   quotations.filter(
//                     (q) => q.status === "Converted"
//                   ).length
//                 }
//                 value={quotations
//                   .filter(
//                     (q) => q.status === "Converted"
//                   )
//                   .reduce(
//                     (sum, q) => sum + q.total,
//                     0
//                   )}
//               />
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Details Modal */}
//       {selectedQuotation && (
//         <Modal
//           title="Quotation Details"
//           onClose={() =>
//             setSelectedQuotation(null)
//           }
//         >
//           <div className="space-y-5">
//             <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
//               <div>
//                 <div className="flex flex-wrap items-center gap-2">
//                   <h2 className="text-xl font-bold">
//                     {selectedQuotation.quotationNo}
//                   </h2>

//                   <span
//                     className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusClass(
//                       selectedQuotation.status
//                     )}`}
//                   >
//                     {selectedQuotation.status}
//                   </span>
//                 </div>

//                 <p className="mt-2 text-sm text-gray-500">
//                   Created on{" "}
//                   {formatDate(
//                     selectedQuotation.quotationDate
//                   )}
//                 </p>
//               </div>

//               <p className="text-2xl font-bold text-[#176b5b]">
//                 {formatCurrency(
//                   selectedQuotation.total
//                 )}
//               </p>
//             </div>

//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//               <DetailBox
//                 title="Client"
//                 value={selectedQuotation.client}
//               />

//               <DetailBox
//                 title="Phone"
//                 value={selectedQuotation.phone}
//               />

//               <DetailBox
//                 title="Email"
//                 value={selectedQuotation.email}
//               />

//               <DetailBox
//                 title="Project"
//                 value={
//                   selectedQuotation.projectName
//                 }
//               />

//               <DetailBox
//                 title="Project Type"
//                 value={
//                   selectedQuotation.projectType
//                 }
//               />

//               <DetailBox
//                 title="Location"
//                 value={selectedQuotation.location}
//               />

//               <DetailBox
//                 title="Designer"
//                 value={selectedQuotation.designer}
//               />

//               <DetailBox
//                 title="Valid Until"
//                 value={formatDate(
//                   selectedQuotation.validUntil
//                 )}
//               />
//             </div>

//             <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
//               <AmountBox
//                 label="Base Amount"
//                 value={formatCurrency(
//                   selectedQuotation.amount
//                 )}
//               />

//               <AmountBox
//                 label="Tax"
//                 value={formatCurrency(
//                   selectedQuotation.tax
//                 )}
//               />

//               <AmountBox
//                 label="Grand Total"
//                 value={formatCurrency(
//                   selectedQuotation.total
//                 )}
//                 green
//               />
//             </div>

//             <div className="rounded-xl border border-[#e4e2da] p-4">
//               <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
//                 Payment Terms
//               </p>

//               <p className="mt-2 text-sm leading-6 text-gray-700">
//                 {selectedQuotation.paymentTerms}
//               </p>
//             </div>

//             <div className="rounded-xl border border-[#e4e2da] p-4">
//               <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
//                 Notes
//               </p>

//               <p className="mt-2 text-sm leading-6 text-gray-700">
//                 {selectedQuotation.notes}
//               </p>
//             </div>

//             {/* Status Controls */}
//             <div className="rounded-xl border border-[#e4e2da] p-4">
//               <p className="mb-3 text-sm font-semibold">
//                 Update Status
//               </p>

//               <div className="flex flex-wrap gap-2">
//                 {(
//                   [
//                     "Draft",
//                     "Sent",
//                     "Accepted",
//                     "Rejected",
//                     "Expired",
//                     "Converted",
//                   ] as QuotationStatus[]
//                 ).map((status) => (
//                   <button
//                     key={status}
//                     onClick={() =>
//                       changeStatus(
//                         selectedQuotation.id,
//                         status
//                       )
//                     }
//                     className={`rounded-lg border px-3 py-2 text-xs font-semibold ${
//                       selectedQuotation.status ===
//                       status
//                         ? statusClass(status)
//                         : "border-[#dddcd5] text-gray-600 hover:bg-gray-50"
//                     }`}
//                   >
//                     {status}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Actions */}
//             <div className="flex flex-wrap justify-end gap-2 border-t border-[#e4e2da] pt-4">
//               {selectedQuotation.status !==
//                 "Sent" &&
//                 selectedQuotation.status !==
//                   "Accepted" &&
//                 selectedQuotation.status !==
//                   "Converted" && (
//                   <button
//                     onClick={() =>
//                       setShowSendModal(true)
//                     }
//                     className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-100"
//                   >
//                     ✉ Send
//                   </button>
//                 )}

//               {selectedQuotation.status !==
//                 "Converted" && (
//                 <button
//                   onClick={() =>
//                     setShowConvertModal(true)
//                   }
//                   className="rounded-lg border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700 hover:bg-purple-100"
//                 >
//                   Convert to Project
//                 </button>
//               )}

//               <button
//                 onClick={() => window.print()}
//                 className="rounded-lg border border-[#dddcd5] px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 🖨 Print
//               </button>

//               <button
//                 onClick={() =>
//                   setShowDeleteModal(true)
//                 }
//                 className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-100"
//               >
//                 Delete
//               </button>

//               <button
//                 onClick={() =>
//                   setSelectedQuotation(null)
//                 }
//                 className="rounded-lg bg-[#176b5b] px-4 py-2 text-sm font-semibold text-white hover:bg-[#12594b]"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </Modal>
//       )}

//       {/* Delete Modal */}
//       {showDeleteModal &&
//         selectedQuotation && (
//           <Modal
//             title="Delete Quotation"
//             onClose={() =>
//               setShowDeleteModal(false)
//             }
//           >
//             <div className="text-center">
//               <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-2xl text-red-600">
//                 !
//               </div>

//               <h3 className="mt-4 text-lg font-bold">
//                 Delete this quotation?
//               </h3>

//               <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
//                 Are you sure you want to delete{" "}
//                 <strong>
//                   {selectedQuotation.quotationNo}
//                 </strong>
//                 ? This action cannot be undone in
//                 this local demo.
//               </p>

//               <div className="mt-6 flex justify-center gap-2">
//                 <button
//                   onClick={() =>
//                     setShowDeleteModal(false)
//                   }
//                   className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   onClick={deleteQuotation}
//                   className="rounded-lg bg-red-600 px-5 py-2 text-sm font-semibold text-white hover:bg-red-700"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </Modal>
//         )}

//       {/* Convert Modal */}
//       {showConvertModal &&
//         selectedQuotation && (
//           <Modal
//             title="Convert Quotation"
//             onClose={() =>
//               setShowConvertModal(false)
//             }
//           >
//             <div className="text-center">
//               <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-purple-50 text-2xl text-purple-600">
//                 ✓
//               </div>

//               <h3 className="mt-4 text-lg font-bold">
//                 Convert to Project?
//               </h3>

//               <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
//                 The quotation{" "}
//                 <strong>
//                   {selectedQuotation.quotationNo}
//                 </strong>{" "}
//                 will be marked as converted and can
//                 be used to create an interior project.
//               </p>

//               <div className="mt-5 rounded-lg bg-[#fafaf8] p-4 text-left">
//                 <p className="text-xs text-gray-500">
//                   Project
//                 </p>

//                 <p className="mt-1 font-semibold">
//                   {selectedQuotation.projectName}
//                 </p>

//                 <p className="mt-2 text-xs text-gray-500">
//                   Client
//                 </p>

//                 <p className="mt-1 font-semibold">
//                   {selectedQuotation.client}
//                 </p>

//                 <p className="mt-2 text-xs text-gray-500">
//                   Value
//                 </p>

//                 <p className="mt-1 font-semibold text-[#176b5b]">
//                   {formatCurrency(
//                     selectedQuotation.total
//                   )}
//                 </p>
//               </div>

//               <div className="mt-6 flex justify-center gap-2">
//                 <button
//                   onClick={() =>
//                     setShowConvertModal(false)
//                   }
//                   className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   onClick={convertToProject}
//                   className="rounded-lg bg-[#176b5b] px-5 py-2 text-sm font-semibold text-white"
//                 >
//                   Convert
//                 </button>
//               </div>
//             </div>
//           </Modal>
//         )}

//       {/* Send Modal */}
//       {showSendModal &&
//         selectedQuotation && (
//           <Modal
//             title="Send Quotation"
//             onClose={() =>
//               setShowSendModal(false)
//             }
//           >
//             <div className="text-center">
//               <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl text-blue-600">
//                 ✉
//               </div>

//               <h3 className="mt-4 text-lg font-bold">
//                 Send quotation to client?
//               </h3>

//               <p className="mt-2 text-sm text-gray-500">
//                 The quotation will be marked as
//                 Sent.
//               </p>

//               <div className="mt-5 rounded-lg bg-[#fafaf8] p-4 text-left">
//                 <p className="text-xs text-gray-500">
//                   Client
//                 </p>

//                 <p className="mt-1 font-semibold">
//                   {selectedQuotation.client}
//                 </p>

//                 <p className="mt-3 text-xs text-gray-500">
//                   Email
//                 </p>

//                 <p className="mt-1 font-medium text-blue-600">
//                   {selectedQuotation.email}
//                 </p>

//                 <p className="mt-3 text-xs text-gray-500">
//                   Quotation Value
//                 </p>

//                 <p className="mt-1 font-semibold">
//                   {formatCurrency(
//                     selectedQuotation.total
//                   )}
//                 </p>
//               </div>

//               <div className="mt-6 flex justify-center gap-2">
//                 <button
//                   onClick={() =>
//                     setShowSendModal(false)
//                   }
//                   className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   onClick={sendQuotation}
//                   className="rounded-lg bg-[#176b5b] px-5 py-2 text-sm font-semibold text-white"
//                 >
//                   Send Quotation
//                 </button>
//               </div>
//             </div>
//           </Modal>
//         )}

//       <style jsx global>{`
//         @media print {
//           body {
//             background: white !important;
//           }

//           button,
//           input,
//           select {
//             display: none !important;
//           }

//           @page {
//             size: A4 landscape;
//             margin: 10mm;
//           }

//           .shadow-sm {
//             box-shadow: none !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// function SummaryCard({
//   title,
//   value,
//   subtitle,
//   icon,
//   green = false,
//   orange = false,
// }: {
//   title: string;
//   value: string | number;
//   subtitle: string;
//   icon: string;
//   green?: boolean;
//   orange?: boolean;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//       <div className="flex items-start justify-between">
//         <div>
//           <p className="text-xs font-medium text-gray-500">
//             {title}
//           </p>

//           <p
//             className={`mt-2 text-2xl font-bold ${
//               green
//                 ? "text-green-600"
//                 : orange
//                 ? "text-orange-600"
//                 : "text-gray-900"
//             }`}
//           >
//             {value}
//           </p>

//           <p className="mt-1 text-xs text-gray-400">
//             {subtitle}
//           </p>
//         </div>

//         <div
//           className={`flex h-10 w-10 items-center justify-center rounded-lg ${
//             green
//               ? "bg-green-50 text-green-600"
//               : orange
//               ? "bg-orange-50 text-orange-600"
//               : "bg-[#176b5b]/10 text-[#176b5b]"
//           }`}
//         >
//           {icon}
//         </div>
//       </div>
//     </div>
//   );
// }

// function PipelineCard({
//   title,
//   count,
//   value,
// }: {
//   title: string;
//   count: number;
//   value: number;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-4">
//       <div className="flex items-center justify-between">
//         <span className="text-sm font-semibold">
//           {title}
//         </span>

//         <span className="rounded-full bg-white px-2 py-1 text-xs font-semibold text-gray-500">
//           {count}
//         </span>
//       </div>

//       <p className="mt-3 text-xl font-bold text-[#176b5b]">
//         {formatCompactCurrency(value)}
//       </p>
//     </div>
//   );
// }

// function DetailBox({
//   title,
//   value,
// }: {
//   title: string;
//   value: string;
// }) {
//   return (
//     <div className="rounded-lg border border-[#e4e2da] bg-[#fafaf8] p-3">
//       <p className="text-xs text-gray-500">
//         {title}
//       </p>

//       <p className="mt-1 text-sm font-semibold text-gray-800">
//         {value || "-"}
//       </p>
//     </div>
//   );
// }

// function AmountBox({
//   label,
//   value,
//   green = false,
// }: {
//   label: string;
//   value: string;
//   green?: boolean;
// }) {
//   return (
//     <div className="rounded-lg border border-[#e4e2da] bg-[#fafaf8] p-4">
//       <p className="text-xs text-gray-500">
//         {label}
//       </p>

//       <p
//         className={`mt-1 text-lg font-bold ${
//           green
//             ? "text-[#176b5b]"
//             : "text-gray-900"
//         }`}
//       >
//         {value}
//       </p>
//     </div>
//   );
// }

// function Modal({
//   title,
//   children,
//   onClose,
// }: {
//   title: string;
//   children: React.ReactNode;
//   onClose: () => void;
// }) {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//       <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//         <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#e4e2da] bg-white px-5 py-4">
//           <h2 className="text-lg font-bold">
//             {title}
//           </h2>

//           <button
//             onClick={onClose}
//             className="rounded-lg px-3 py-1 text-xl text-gray-500 hover:bg-gray-100"
//           >
//             ×
//           </button>
//         </div>

//         <div className="p-5">{children}</div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAllQuotations,
//   updateQuotation,
//   deleteQuotation as deleteQuotationFromDb,
//   type InteriorQuotation,
// } from "@/modules/interior/services/quotationService";
// import { Timestamp } from "firebase/firestore";

// type QuotationStatus =
//   | "Draft"
//   | "Sent"
//   | "Accepted"
//   | "Rejected"
//   | "Expired"
//   | "Converted";

// type ProjectType =
//   | "Residential"
//   | "Commercial"
//   | "Office"
//   | "Villa"
//   | "Apartment";

// type Quotation = {
//   id: string;
//   quotationNo: string;
//   client: string;
//   phone: string;
//   email: string;
//   projectName: string;
//   projectType: ProjectType;
//   location: string;
//   designer: string;
//   quotationDate: string;
//   validUntil: string;
//   amount: number;
//   tax: number;
//   total: number;
//   status: QuotationStatus;
//   paymentTerms: string;
//   notes: string;
// };

// const statusOptions: QuotationStatus[] = [
//   "Draft",
//   "Sent",
//   "Accepted",
//   "Rejected",
//   "Expired",
//   "Converted",
// ];

// const typeOptions: ProjectType[] = [
//   "Residential",
//   "Commercial",
//   "Office",
//   "Villa",
//   "Apartment",
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

// function statusClass(status: QuotationStatus) {
//   switch (status) {
//     case "Draft":
//       return "bg-gray-100 text-gray-700 border-gray-200";
//     case "Sent":
//       return "bg-blue-50 text-blue-700 border-blue-200";
//     case "Accepted":
//       return "bg-green-50 text-green-700 border-green-200";
//     case "Rejected":
//       return "bg-red-50 text-red-700 border-red-200";
//     case "Expired":
//       return "bg-amber-50 text-amber-700 border-amber-200";
//     case "Converted":
//       return "bg-emerald-50 text-emerald-700 border-emerald-200";
//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function toDateString(value: unknown): string {
//   if (!value) return "";
//   if (typeof value === "string") return value.slice(0, 10);
//   try {
//     if (typeof (value as Timestamp).toDate === "function") {
//       return (value as Timestamp).toDate().toISOString().slice(0, 10);
//     }
//   } catch {
//     /* ignore */
//   }
//   return "";
// }

// function normalizeStatus(raw?: string): QuotationStatus {
//   const s = (raw || "Draft").trim();
//   if ((statusOptions as string[]).includes(s)) return s as QuotationStatus;
//   const lower = s.toLowerCase();
//   if (lower.includes("sent")) return "Sent";
//   if (lower.includes("accept") || lower.includes("approved")) return "Accepted";
//   if (lower.includes("reject")) return "Rejected";
//   if (lower.includes("expir")) return "Expired";
//   if (lower.includes("convert")) return "Converted";
//   return "Draft";
// }

// function normalizeType(raw?: string): ProjectType {
//   const s = (raw || "Residential").trim();
//   if ((typeOptions as string[]).includes(s)) return s as ProjectType;
//   const lower = s.toLowerCase();
//   if (lower.includes("commercial")) return "Commercial";
//   if (lower.includes("office")) return "Office";
//   if (lower.includes("villa")) return "Villa";
//   if (lower.includes("apartment")) return "Apartment";
//   return "Residential";
// }

// function mapToUi(q: InteriorQuotation): Quotation {
//   const total = Number(q.total ?? 0) || 0;
//   const amount = Number(q.amount ?? 0) || (total ? Math.round(total / 1.18) : 0);
//   const tax = Number(q.tax ?? 0) || Math.max(total - amount, 0);

//   return {
//     id: q.id,
//     quotationNo: q.quotationNo || `QT-${q.id.slice(0, 6).toUpperCase()}`,
//     client: q.client || q.clientName || "Unknown",
//     phone: q.phone || "—",
//     email: q.email || "",
//     projectName: q.projectName || "—",
//     projectType: normalizeType(q.projectType),
//     location: q.location || "—",
//     designer: q.designer || "—",
//     quotationDate: q.quotationDate || toDateString(q.createdAt) || "—",
//     validUntil: q.validUntil || "—",
//     amount,
//     tax,
//     total: total || amount + tax,
//     status: normalizeStatus(q.status),
//     paymentTerms:
//       q.paymentTerms || "40% Advance, 40% During Work, 20% On Completion",
//     notes: q.notes || "",
//   };
// }

// export default function InteriorQuotationsPage() {
//   const [quotations, setQuotations] = useState<Quotation[]>([]);
//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState<QuotationStatus | "All">(
//     "All"
//   );
//   const [typeFilter, setTypeFilter] = useState<ProjectType | "All">("All");

//   const [selectedQuotation, setSelectedQuotation] = useState<Quotation | null>(
//     null
//   );
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [showConvertModal, setShowConvertModal] = useState(false);
//   const [showSendModal, setShowSendModal] = useState(false);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllQuotations();
//         if (cancelled) return;
//         setQuotations(data.map(mapToUi));
//       } catch (err) {
//         console.error("Failed to load quotations:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const filteredQuotations = useMemo(() => {
//     const query = search.toLowerCase().trim();

//     return quotations.filter((quotation) => {
//       const matchesSearch =
//         !query ||
//         quotation.quotationNo.toLowerCase().includes(query) ||
//         quotation.client.toLowerCase().includes(query) ||
//         quotation.projectName.toLowerCase().includes(query) ||
//         quotation.location.toLowerCase().includes(query) ||
//         quotation.designer.toLowerCase().includes(query);

//       const matchesStatus =
//         statusFilter === "All" || quotation.status === statusFilter;

//       const matchesType =
//         typeFilter === "All" || quotation.projectType === typeFilter;

//       return matchesSearch && matchesStatus && matchesType;
//     });
//   }, [quotations, search, statusFilter, typeFilter]);

//   const totalValue = quotations.reduce((sum, q) => sum + q.total, 0);

//   const acceptedValue = quotations
//     .filter((q) => q.status === "Accepted" || q.status === "Converted")
//     .reduce((sum, q) => sum + q.total, 0);

//   const pendingValue = quotations
//     .filter((q) => q.status === "Sent" || q.status === "Draft")
//     .reduce((sum, q) => sum + q.total, 0);

//   const acceptedCount = quotations.filter(
//     (q) => q.status === "Accepted" || q.status === "Converted"
//   ).length;

//   const conversionRate =
//     quotations.length === 0
//       ? 0
//       : Math.round((acceptedCount / quotations.length) * 100);

//   async function changeStatus(
//     quotationId: string,
//     status: QuotationStatus
//   ) {
//     setQuotations((current) =>
//       current.map((quotation) =>
//         quotation.id === quotationId ? { ...quotation, status } : quotation
//       )
//     );

//     setSelectedQuotation((current) =>
//       current && current.id === quotationId
//         ? { ...current, status }
//         : current
//     );

//     try {
//       await updateQuotation(quotationId, { status });
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllQuotations();
//         setQuotations(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   async function confirmDelete() {
//     if (!selectedQuotation) return;
//     const id = selectedQuotation.id;

//     setQuotations((current) => current.filter((q) => q.id !== id));
//     setSelectedQuotation(null);
//     setShowDeleteModal(false);

//     try {
//       await deleteQuotationFromDb(id);
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllQuotations();
//         setQuotations(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   function convertToProject() {
//     if (!selectedQuotation) return;
//     changeStatus(selectedQuotation.id, "Converted");
//     setShowConvertModal(false);
//   }

//   function sendQuotation() {
//     if (!selectedQuotation) return;
//     changeStatus(selectedQuotation.id, "Sent");
//     setShowSendModal(false);
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1600px] px-5 py-5 lg:px-8">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               {/* <div className="mb-1 text-sm font-medium text-[#9a5b18]">
//                 Akrish / Furniture and Interior
//               </div> */}
//               <h1 className="text-2xl font-bold tracking-tight">Quotations</h1>
//               <p className="mt-1 text-sm text-gray-500">
//                 Manage interior quotations, approvals and conversions.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <a
//               href="/interior/quotations/new"
//               className="inline-flex items-center justify-center rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#125848]"
//             >
//               + New Quotation
//             </a>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-6 px-5 py-6 lg:px-8">
//         <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <SummaryCard
//             label="Total Quotations"
//             value={loading ? "…" : String(quotations.length)}
//             helper={formatCompactCurrency(totalValue)}
//           />
//           <SummaryCard
//             label="Accepted Value"
//             value={loading ? "…" : formatCompactCurrency(acceptedValue)}
//             helper={`${acceptedCount} accepted / converted`}
//           />
//           <SummaryCard
//             label="Pending Value"
//             value={loading ? "…" : formatCompactCurrency(pendingValue)}
//             helper="Draft + Sent"
//           />
//           <SummaryCard
//             label="Conversion Rate"
//             value={loading ? "…" : `${conversionRate}%`}
//             helper="Accepted vs total"
//           />
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-4">
//           <div className="flex flex-col gap-3 lg:flex-row">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search quotation, client, project, designer..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-4 py-2.5 text-sm outline-none focus:border-[#176b5b] lg:max-w-md"
//             />
//             <select
//               value={statusFilter}
//               onChange={(e) =>
//                 setStatusFilter(e.target.value as QuotationStatus | "All")
//               }
//               className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               <option value="All">All Status</option>
//               {statusOptions.map((s) => (
//                 <option key={s} value={s}>
//                   {s}
//                 </option>
//               ))}
//             </select>
//             <select
//               value={typeFilter}
//               onChange={(e) =>
//                 setTypeFilter(e.target.value as ProjectType | "All")
//               }
//               className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               <option value="All">All Types</option>
//               {typeOptions.map((t) => (
//                 <option key={t} value={t}>
//                   {t}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </section>

//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="border-b border-[#e4e2da] px-5 py-4">
//             <h2 className="font-semibold">Quotation List</h2>
//             <p className="mt-1 text-xs text-gray-500">
//               {filteredQuotations.length} records
//             </p>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1100px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Quotation</th>
//                   <th className="px-4 py-3 font-semibold">Client</th>
//                   <th className="px-4 py-3 font-semibold">Project</th>
//                   <th className="px-4 py-3 font-semibold">Total</th>
//                   <th className="px-4 py-3 font-semibold">Valid Until</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
//                   <th className="px-4 py-3 text-right font-semibold">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece6]">
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={7}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       Loading quotations…
//                     </td>
//                   </tr>
//                 ) : (
//                   <>
//                     {filteredQuotations.map((quotation) => (
//                       <tr key={quotation.id} className="hover:bg-[#fafaf8]">
//                         <td className="px-5 py-4">
//                           <p className="font-semibold text-[#176b5b]">
//                             {quotation.quotationNo}
//                           </p>
//                           <p className="mt-0.5 text-xs text-gray-400">
//                             {formatDate(quotation.quotationDate)}
//                           </p>
//                         </td>
//                         <td className="px-4 py-4">
//                           <p className="text-sm font-medium text-gray-900">
//                             {quotation.client}
//                           </p>
//                           <p className="text-xs text-gray-500">
//                             {quotation.phone}
//                           </p>
//                         </td>
//                         <td className="px-4 py-4">
//                           <p className="text-sm font-medium text-gray-800">
//                             {quotation.projectName}
//                           </p>
//                           <p className="text-xs text-gray-400">
//                             {quotation.projectType} · {quotation.location}
//                           </p>
//                         </td>
//                         <td className="px-4 py-4 text-sm font-semibold text-gray-900">
//                           {formatCurrency(quotation.total)}
//                         </td>
//                         <td className="px-4 py-4 text-sm text-gray-600">
//                           {formatDate(quotation.validUntil)}
//                         </td>
//                         <td className="px-4 py-4">
//                           <span
//                             className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                               quotation.status
//                             )}`}
//                           >
//                             {quotation.status}
//                           </span>
//                         </td>
//                         <td className="px-4 py-4 text-right">
//                           <button
//                             onClick={() => setSelectedQuotation(quotation)}
//                             className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                           >
//                             View
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                     {filteredQuotations.length === 0 && (
//                       <tr>
//                         <td
//                           colSpan={7}
//                           className="px-5 py-12 text-center text-sm text-gray-500"
//                         >
//                           No quotations found.
//                         </td>
//                       </tr>
//                     )}
//                   </>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </section>
//       </main>

//       {/* Detail modal */}
//       {selectedQuotation && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-4">
//               <div>
//                 <p className="text-xs font-semibold text-[#176b5b]">
//                   {selectedQuotation.quotationNo}
//                 </p>
//                 <h2 className="mt-1 text-xl font-bold">
//                   {selectedQuotation.projectName}
//                 </h2>
//               </div>
//               <button
//                 onClick={() => setSelectedQuotation(null)}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="grid grid-cols-2 gap-3 p-6">
//               <Info label="Client" value={selectedQuotation.client} />
//               <Info label="Phone" value={selectedQuotation.phone} />
//               <Info label="Email" value={selectedQuotation.email || "—"} />
//               <Info label="Designer" value={selectedQuotation.designer} />
//               <Info label="Type" value={selectedQuotation.projectType} />
//               <Info label="Location" value={selectedQuotation.location} />
//               <Info
//                 label="Date"
//                 value={formatDate(selectedQuotation.quotationDate)}
//               />
//               <Info
//                 label="Valid Until"
//                 value={formatDate(selectedQuotation.validUntil)}
//               />
//               <Info
//                 label="Amount"
//                 value={formatCurrency(selectedQuotation.amount)}
//               />
//               <Info
//                 label="Tax"
//                 value={formatCurrency(selectedQuotation.tax)}
//               />
//               <Info
//                 label="Total"
//                 value={formatCurrency(selectedQuotation.total)}
//               />
//               <div className="rounded-xl bg-[#fafaf8] p-3">
//                 <p className="text-xs text-gray-400">Status</p>
//                 <span
//                   className={`mt-1 inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                     selectedQuotation.status
//                   )}`}
//                 >
//                   {selectedQuotation.status}
//                 </span>
//               </div>
//             </div>

//             <div className="px-6 pb-2">
//               <p className="text-xs text-gray-400">Payment Terms</p>
//               <p className="mt-1 text-sm text-gray-700">
//                 {selectedQuotation.paymentTerms}
//               </p>
//             </div>

//             {selectedQuotation.notes && (
//               <div className="mx-6 mb-4 rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
//                 {selectedQuotation.notes}
//               </div>
//             )}

//             <div className="px-6 pb-2">
//               <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
//                 Update Status
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {statusOptions.map((status) => (
//                   <button
//                     key={status}
//                     onClick={() => changeStatus(selectedQuotation.id, status)}
//                     className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
//                       selectedQuotation.status === status
//                         ? statusClass(status)
//                         : "border-gray-200 text-gray-600 hover:bg-gray-50"
//                     }`}
//                   >
//                     {status}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-2 border-t border-[#e4e2da] px-6 py-4">
//               {selectedQuotation.status === "Draft" && (
//                 <button
//                   onClick={() => setShowSendModal(true)}
//                   className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//                 >
//                   Mark as Sent
//                 </button>
//               )}
//               {(selectedQuotation.status === "Sent" ||
//                 selectedQuotation.status === "Accepted") && (
//                 <button
//                   onClick={() => setShowConvertModal(true)}
//                   className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//                 >
//                   Convert to Project
//                 </button>
//               )}
//               <button
//                 onClick={() => setShowDeleteModal(true)}
//                 className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600"
//               >
//                 Delete
//               </button>
//               <button
//                 onClick={() => setSelectedQuotation(null)}
//                 className="ml-auto rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {showDeleteModal && selectedQuotation && (
//         <ConfirmModal
//           title="Delete quotation?"
//           message={`Delete ${selectedQuotation.quotationNo} for ${selectedQuotation.client}?`}
//           confirmLabel="Delete"
//           danger
//           onCancel={() => setShowDeleteModal(false)}
//           onConfirm={confirmDelete}
//         />
//       )}

//       {showConvertModal && selectedQuotation && (
//         <ConfirmModal
//           title="Convert to project?"
//           message={`Mark ${selectedQuotation.quotationNo} as Converted?`}
//           confirmLabel="Convert"
//           onCancel={() => setShowConvertModal(false)}
//           onConfirm={convertToProject}
//         />
//       )}

//       {showSendModal && selectedQuotation && (
//         <ConfirmModal
//           title="Mark as sent?"
//           message={`Mark ${selectedQuotation.quotationNo} as Sent to client?`}
//           confirmLabel="Mark Sent"
//           onCancel={() => setShowSendModal(false)}
//           onConfirm={sendQuotation}
//         />
//       )}
//     </div>
//   );
// }

// function SummaryCard({
//   label,
//   value,
//   helper,
// }: {
//   label: string;
//   value: string;
//   helper: string;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//       <p className="text-sm text-gray-500">{label}</p>
//       <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
//       <p className="mt-1 text-xs text-gray-400">{helper}</p>
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

// function ConfirmModal({
//   title,
//   message,
//   confirmLabel,
//   danger,
//   onCancel,
//   onConfirm,
// }: {
//   title: string;
//   message: string;
//   confirmLabel: string;
//   danger?: boolean;
//   onCancel: () => void;
//   onConfirm: () => void;
// }) {
//   return (
//     <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
//       <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
//         <h3 className="text-lg font-bold text-gray-900">{title}</h3>
//         <p className="mt-2 text-sm text-gray-600">{message}</p>
//         <div className="mt-6 flex justify-end gap-3">
//           <button
//             onClick={onCancel}
//             className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={onConfirm}
//             className={`rounded-lg px-4 py-2.5 text-sm font-semibold text-white ${
//               danger
//                 ? "bg-red-600 hover:bg-red-700"
//                 : "bg-[#176b5b] hover:bg-[#125848]"
//             }`}
//           >
//             {confirmLabel}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  getAllQuotations,
  updateQuotation,
  deleteQuotation as deleteQuotationFromDb,
  type InteriorQuotation,
} from "@/modules/interior/services/quotationService";
import { Timestamp } from "firebase/firestore";
import { Plus } from "lucide-react";

type QuotationStatus =
  | "Draft"
  | "Sent"
  | "Accepted"
  | "Rejected"
  | "Expired"
  | "Converted";

type ProjectType =
  | "Residential"
  | "Commercial"
  | "Office"
  | "Villa"
  | "Apartment";

type Quotation = {
  id: string;
  quotationNo: string;
  client: string;
  phone: string;
  email: string;
  projectName: string;
  projectType: ProjectType;
  location: string;
  designer: string;
  quotationDate: string;
  validUntil: string;
  amount: number;
  tax: number;
  total: number;
  status: QuotationStatus;
  paymentTerms: string;
  notes: string;
};

const statusOptions: QuotationStatus[] = [
  "Draft",
  "Sent",
  "Accepted",
  "Rejected",
  "Expired",
  "Converted",
];

const typeOptions: ProjectType[] = [
  "Residential",
  "Commercial",
  "Office",
  "Villa",
  "Apartment",
];

function formatCurrency(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function formatCompactCurrency(value: number) {
  if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
  if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
  if (value >= 1000) return `₹${(value / 1000).toFixed(0)}K`;
  return formatCurrency(value);
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

function statusClass(status: QuotationStatus) {
  switch (status) {
    case "Draft":
      return "bg-gray-100 text-gray-700 border-gray-200";
    case "Sent":
      return "bg-blue-50 text-blue-700 border-blue-200";
    case "Accepted":
      return "bg-green-50 text-green-700 border-green-200";
    case "Rejected":
      return "bg-red-50 text-red-700 border-red-200";
    case "Expired":
      return "bg-amber-50 text-amber-700 border-amber-200";
    case "Converted":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
}

function toDateString(value: unknown): string {
  if (!value) return "";
  if (typeof value === "string") return value.slice(0, 10);
  try {
    if (typeof (value as Timestamp).toDate === "function") {
      return (value as Timestamp).toDate().toISOString().slice(0, 10);
    }
  } catch {
    /* ignore */
  }
  return "";
}

function normalizeStatus(raw?: string): QuotationStatus {
  const s = (raw || "Draft").trim();
  if ((statusOptions as string[]).includes(s)) return s as QuotationStatus;
  const lower = s.toLowerCase();
  if (lower.includes("sent")) return "Sent";
  if (lower.includes("accept") || lower.includes("approved")) return "Accepted";
  if (lower.includes("reject")) return "Rejected";
  if (lower.includes("expir")) return "Expired";
  if (lower.includes("convert")) return "Converted";
  return "Draft";
}

function normalizeType(raw?: string): ProjectType {
  const s = (raw || "Residential").trim();
  if ((typeOptions as string[]).includes(s)) return s as ProjectType;
  const lower = s.toLowerCase();
  if (lower.includes("commercial")) return "Commercial";
  if (lower.includes("office")) return "Office";
  if (lower.includes("villa")) return "Villa";
  if (lower.includes("apartment")) return "Apartment";
  return "Residential";
}

function mapToUi(q: InteriorQuotation): Quotation {
  const total = Number(q.total ?? 0) || 0;
  const amount =
    Number(q.amount ?? 0) || (total ? Math.round(total / 1.18) : 0);
  const tax = Number(q.tax ?? 0) || Math.max(total - amount, 0);

  return {
    id: q.id,
    quotationNo: q.quotationNo || `QT-${q.id.slice(0, 6).toUpperCase()}`,
    client: q.client || q.clientName || "Unknown",
    phone: q.phone || "—",
    email: q.email || "",
    projectName: q.projectName || "—",
    projectType: normalizeType(q.projectType),
    location: q.location || "—",
    designer: q.designer || "—",
    quotationDate: q.quotationDate || toDateString(q.createdAt) || "—",
    validUntil: q.validUntil || "—",
    amount,
    tax,
    total: total || amount + tax,
    status: normalizeStatus(q.status),
    paymentTerms:
      q.paymentTerms || "40% Advance, 40% During Work, 20% On Completion",
    notes: q.notes || "",
  };
}

export default function InteriorQuotationsPage() {
  const [quotations, setQuotations] = useState<Quotation[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<QuotationStatus | "All">(
    "All"
  );
  const [typeFilter, setTypeFilter] = useState<ProjectType | "All">("All");

  const [selectedQuotation, setSelectedQuotation] = useState<Quotation | null>(
    null
  );
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showConvertModal, setShowConvertModal] = useState(false);
  const [showSendModal, setShowSendModal] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const data = await getAllQuotations();
        if (cancelled) return;
        setQuotations(data.map(mapToUi));
      } catch (err) {
        console.error("Failed to load quotations:", err);
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
    if (!selectedQuotation && !showDeleteModal) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [selectedQuotation, showDeleteModal, showConvertModal, showSendModal]);

  const filteredQuotations = useMemo(() => {
    const query = search.toLowerCase().trim();

    return quotations.filter((quotation) => {
      const matchesSearch =
        !query ||
        quotation.quotationNo.toLowerCase().includes(query) ||
        quotation.client.toLowerCase().includes(query) ||
        quotation.projectName.toLowerCase().includes(query) ||
        quotation.location.toLowerCase().includes(query) ||
        quotation.designer.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "All" || quotation.status === statusFilter;

      const matchesType =
        typeFilter === "All" || quotation.projectType === typeFilter;

      return matchesSearch && matchesStatus && matchesType;
    });
  }, [quotations, search, statusFilter, typeFilter]);

  const totalValue = quotations.reduce((sum, q) => sum + q.total, 0);

  const acceptedValue = quotations
    .filter((q) => q.status === "Accepted" || q.status === "Converted")
    .reduce((sum, q) => sum + q.total, 0);

  const pendingValue = quotations
    .filter((q) => q.status === "Sent" || q.status === "Draft")
    .reduce((sum, q) => sum + q.total, 0);

  const acceptedCount = quotations.filter(
    (q) => q.status === "Accepted" || q.status === "Converted"
  ).length;

  const conversionRate =
    quotations.length === 0
      ? 0
      : Math.round((acceptedCount / quotations.length) * 100);

  async function changeStatus(quotationId: string, status: QuotationStatus) {
    setQuotations((current) =>
      current.map((quotation) =>
        quotation.id === quotationId ? { ...quotation, status } : quotation
      )
    );

    setSelectedQuotation((current) =>
      current && current.id === quotationId ? { ...current, status } : current
    );

    try {
      await updateQuotation(quotationId, { status });
    } catch (err) {
      console.error(err);
      try {
        const data = await getAllQuotations();
        setQuotations(data.map(mapToUi));
      } catch {
        /* ignore */
      }
    }
  }

  async function confirmDelete() {
    if (!selectedQuotation) return;
    const id = selectedQuotation.id;

    setQuotations((current) => current.filter((q) => q.id !== id));
    setSelectedQuotation(null);
    setShowDeleteModal(false);

    try {
      await deleteQuotationFromDb(id);
    } catch (err) {
      console.error(err);
      try {
        const data = await getAllQuotations();
        setQuotations(data.map(mapToUi));
      } catch {
        /* ignore */
      }
    }
  }

  function convertToProject() {
    if (!selectedQuotation) return;
    changeStatus(selectedQuotation.id, "Converted");
    setShowConvertModal(false);
  }

  function sendQuotation() {
    if (!selectedQuotation) return;
    changeStatus(selectedQuotation.id, "Sent");
    setShowSendModal(false);
  }

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
      {/* Header: title + New Quotation beside */}
      <div className="border-b border-[#e4e2da] bg-white">
        <div className="mx-auto max-w-[1600px] px-3 py-4 sm:px-5 sm:py-5 lg:px-8">
          <div className="flex items-start justify-between gap-3 sm:items-center">
            <div className="min-w-0 flex-1">
              <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
                Quotations
              </h1>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Manage interior quotations, approvals and conversions.
                {loading && (
                  <span className="ml-2 text-[#176b5b]">Loading…</span>
                )}
              </p>
            </div>
            <Link
              href="/interior/quotations/new"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125848] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
            >
              <Plus size={16} strokeWidth={2.5} />
              <span className="hidden sm:inline">New Quotation</span>
              <span className="sm:hidden">New</span>
            </Link>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[1600px] space-y-4 px-3 py-4 sm:space-y-6 sm:px-5 sm:py-6 lg:px-8">
        {/* Summary — 2 per row mobile */}
        <section className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
          <SummaryCard
            label="Total Quotations"
            value={loading ? "…" : String(quotations.length)}
            helper={formatCompactCurrency(totalValue)}
          />
          <SummaryCard
            label="Accepted Value"
            value={loading ? "…" : formatCompactCurrency(acceptedValue)}
            helper={`${acceptedCount} accepted / converted`}
          />
          <SummaryCard
            label="Pending Value"
            value={loading ? "…" : formatCompactCurrency(pendingValue)}
            helper="Draft + Sent"
          />
          <SummaryCard
            label="Conversion Rate"
            value={loading ? "…" : `${conversionRate}%`}
            helper="Accepted vs total"
          />
        </section>

        {/* Filters */}
        <section className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search quotation, client, project..."
              className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] sm:max-w-md sm:flex-1"
            />
            <div className="flex gap-2">
              <select
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(e.target.value as QuotationStatus | "All")
                }
                className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
              >
                <option value="All">All Status</option>
                {statusOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <select
                value={typeFilter}
                onChange={(e) =>
                  setTypeFilter(e.target.value as ProjectType | "All")
                }
                className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
              >
                <option value="All">All Types</option>
                {typeOptions.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* List */}
        <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
          <div className="border-b border-[#e4e2da] px-4 py-3 sm:px-5 sm:py-4">
            <h2 className="font-semibold">Quotation List</h2>
            <p className="mt-1 text-xs text-gray-500">
              {filteredQuotations.length} records
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[1000px] text-left">
              <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
                <tr>
                  <th className="px-5 py-3 font-semibold">Quotation</th>
                  <th className="px-4 py-3 font-semibold">Client</th>
                  <th className="px-4 py-3 font-semibold">Project</th>
                  <th className="px-4 py-3 font-semibold">Total</th>
                  <th className="px-4 py-3 font-semibold">Valid Until</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 text-right font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eeece6]">
                {loading ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-5 py-12 text-center text-sm text-gray-500"
                    >
                      Loading quotations…
                    </td>
                  </tr>
                ) : filteredQuotations.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-5 py-12 text-center text-sm text-gray-500"
                    >
                      No quotations found.
                    </td>
                  </tr>
                ) : (
                  filteredQuotations.map((quotation) => (
                    <tr key={quotation.id} className="hover:bg-[#fafaf8]">
                      <td className="px-5 py-4">
                        <p className="font-semibold text-[#176b5b]">
                          {quotation.quotationNo}
                        </p>
                        <p className="mt-0.5 text-xs text-gray-400">
                          {formatDate(quotation.quotationDate)}
                        </p>
                      </td>
                      <td className="px-4 py-4">
                        <p className="text-sm font-medium text-gray-900">
                          {quotation.client}
                        </p>
                        <p className="text-xs text-gray-500">
                          {quotation.phone}
                        </p>
                      </td>
                      <td className="px-4 py-4">
                        <p className="text-sm font-medium text-gray-800">
                          {quotation.projectName}
                        </p>
                        <p className="text-xs text-gray-400">
                          {quotation.projectType} · {quotation.location}
                        </p>
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold text-gray-900">
                        {formatCurrency(quotation.total)}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600">
                        {formatDate(quotation.validUntil)}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
                            quotation.status
                          )}`}
                        >
                          {quotation.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <button
                          type="button"
                          onClick={() => setSelectedQuotation(quotation)}
                          className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
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
                Loading quotations…
              </p>
            ) : filteredQuotations.length === 0 ? (
              <p className="py-10 text-center text-sm text-gray-500">
                No quotations found.
              </p>
            ) : (
              filteredQuotations.map((quotation) => (
                <article
                  key={quotation.id}
                  className="rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="font-semibold text-[#176b5b]">
                        {quotation.quotationNo}
                      </p>
                      <p className="mt-0.5 truncate text-sm font-medium text-gray-900">
                        {quotation.client}
                      </p>
                      <p className="mt-0.5 text-xs text-gray-500">
                        {quotation.projectName}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${statusClass(
                        quotation.status
                      )}`}
                    >
                      {quotation.status}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="font-semibold text-gray-900">
                      {formatCurrency(quotation.total)}
                    </span>
                    <span className="text-xs text-gray-500">
                      Valid {formatDate(quotation.validUntil)}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedQuotation(quotation)}
                    className="mt-3 w-full rounded-lg border border-gray-200 bg-white py-2 text-xs font-medium text-gray-700"
                  >
                    View
                  </button>
                </article>
              ))
            )}
          </div>
        </section>
      </main>

      {/* Detail modal */}
      {selectedQuotation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 sm:p-4">
          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="sticky top-0 flex items-center justify-between border-b border-[#e4e2da] bg-white px-4 py-4 sm:px-6">
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[#176b5b]">
                  {selectedQuotation.quotationNo}
                </p>
                <h2 className="mt-1 truncate text-lg font-bold sm:text-xl">
                  {selectedQuotation.projectName}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedQuotation(null)}
                className="shrink-0 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 p-4 sm:gap-3 sm:p-6">
              <Info label="Client" value={selectedQuotation.client} />
              <Info label="Phone" value={selectedQuotation.phone} />
              <Info label="Email" value={selectedQuotation.email || "—"} />
              <Info label="Designer" value={selectedQuotation.designer} />
              <Info label="Type" value={selectedQuotation.projectType} />
              <Info label="Location" value={selectedQuotation.location} />
              <Info
                label="Date"
                value={formatDate(selectedQuotation.quotationDate)}
              />
              <Info
                label="Valid Until"
                value={formatDate(selectedQuotation.validUntil)}
              />
              <Info
                label="Amount"
                value={formatCurrency(selectedQuotation.amount)}
              />
              <Info
                label="Tax"
                value={formatCurrency(selectedQuotation.tax)}
              />
              <Info
                label="Total"
                value={formatCurrency(selectedQuotation.total)}
              />
              <div className="rounded-xl bg-[#fafaf8] p-3">
                <p className="text-xs text-gray-400">Status</p>
                <span
                  className={`mt-1 inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
                    selectedQuotation.status
                  )}`}
                >
                  {selectedQuotation.status}
                </span>
              </div>
            </div>

            <div className="px-4 pb-2 sm:px-6">
              <p className="text-xs text-gray-400">Payment Terms</p>
              <p className="mt-1 text-sm text-gray-700">
                {selectedQuotation.paymentTerms}
              </p>
            </div>

            {selectedQuotation.notes && (
              <div className="mx-4 mb-4 rounded-xl bg-gray-50 p-4 text-sm text-gray-700 sm:mx-6">
                {selectedQuotation.notes}
              </div>
            )}

            <div className="px-4 pb-2 sm:px-6">
              <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
                Update Status
              </p>
              <div className="flex flex-wrap gap-2">
                {statusOptions.map((status) => (
                  <button
                    key={status}
                    type="button"
                    onClick={() => changeStatus(selectedQuotation.id, status)}
                    className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
                      selectedQuotation.status === status
                        ? statusClass(status)
                        : "border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 border-t border-[#e4e2da] px-4 py-4 sm:px-6">
              {selectedQuotation.status === "Draft" && (
                <button
                  type="button"
                  onClick={() => setShowSendModal(true)}
                  className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
                >
                  Mark as Sent
                </button>
              )}
              {(selectedQuotation.status === "Sent" ||
                selectedQuotation.status === "Accepted") && (
                <button
                  type="button"
                  onClick={() => setShowConvertModal(true)}
                  className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
                >
                  Convert to Project
                </button>
              )}
              <button
                type="button"
                onClick={() => setShowDeleteModal(true)}
                className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600"
              >
                Delete
              </button>
              <button
                type="button"
                onClick={() => setSelectedQuotation(null)}
                className="ml-auto rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showDeleteModal && selectedQuotation && (
        <ConfirmModal
          title="Delete quotation?"
          message={`Delete ${selectedQuotation.quotationNo} for ${selectedQuotation.client}?`}
          confirmLabel="Delete"
          danger
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={confirmDelete}
        />
      )}

      {showConvertModal && selectedQuotation && (
        <ConfirmModal
          title="Convert to project?"
          message={`Mark ${selectedQuotation.quotationNo} as Converted?`}
          confirmLabel="Convert"
          onCancel={() => setShowConvertModal(false)}
          onConfirm={convertToProject}
        />
      )}

      {showSendModal && selectedQuotation && (
        <ConfirmModal
          title="Mark as sent?"
          message={`Mark ${selectedQuotation.quotationNo} as Sent to client?`}
          confirmLabel="Mark Sent"
          onCancel={() => setShowSendModal(false)}
          onConfirm={sendQuotation}
        />
      )}
    </div>
  );
}

function SummaryCard({
  label,
  value,
  helper,
}: {
  label: string;
  value: string;
  helper: string;
}) {
  return (
    <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5">
      <p className="text-xs text-gray-500 sm:text-sm">{label}</p>
      <p className="mt-1.5 truncate text-lg font-bold text-gray-900 sm:mt-2 sm:text-2xl">
        {value}
      </p>
      <p className="mt-1 text-[10px] text-gray-400 sm:text-xs">{helper}</p>
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

function ConfirmModal({
  title,
  message,
  confirmLabel,
  danger,
  onCancel,
  onConfirm,
}: {
  title: string;
  message: string;
  confirmLabel: string;
  danger?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl sm:p-6">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{message}</p>
        <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className={`rounded-lg px-4 py-2.5 text-sm font-semibold text-white ${
              danger
                ? "bg-red-600 hover:bg-red-700"
                : "bg-[#176b5b] hover:bg-[#125848]"
            }`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
