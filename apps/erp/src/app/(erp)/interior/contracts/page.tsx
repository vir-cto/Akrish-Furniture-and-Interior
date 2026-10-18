// "use client";

// import { useMemo, useState } from "react";

// type ContractStatus =
//   | "Draft"
//   | "Sent"
//   | "Active"
//   | "Completed"
//   | "Expired"
//   | "Cancelled";

// type Contract = {
//   id: string;
//   contractNo: string;
//   client: string;
//   project: string;
//   projectType: string;
//   startDate: string;
//   endDate: string;
//   value: number;
//   paid: number;
//   pending: number;
//   status: ContractStatus;
//   paymentTerms: string;
//   designer: string;
//   createdDate: string;
//   notes: string;
// };

// const initialContracts: Contract[] = [
//   {
//     id: "CON-001",
//     contractNo: "AKR-CON-2026-001",
//     client: "Rahul Kumar",
//     project: "Luxury Home Interior",
//     projectType: "Residential",
//     startDate: "2026-08-15",
//     endDate: "2026-12-20",
//     value: 850000,
//     paid: 510000,
//     pending: 340000,
//     status: "Active",
//     paymentTerms: "40% Advance / 40% Production / 20% Completion",
//     designer: "Akrish Design Team",
//     createdDate: "2026-08-12",
//     notes: "Complete interior design and furniture work.",
//   },
//   {
//     id: "CON-002",
//     contractNo: "AKR-CON-2026-002",
//     client: "Priya Sharma",
//     project: "3 BHK Interior",
//     projectType: "Residential",
//     startDate: "2026-09-01",
//     endDate: "2026-12-15",
//     value: 620000,
//     paid: 310000,
//     pending: 310000,
//     status: "Active",
//     paymentTerms: "50% Advance / 30% Production / 20% Completion",
//     designer: "Akrish Design Team",
//     createdDate: "2026-08-28",
//     notes: "Living room, bedrooms and modular kitchen.",
//   },
//   {
//     id: "CON-003",
//     contractNo: "AKR-CON-2026-003",
//     client: "Suresh Reddy",
//     project: "Modern Villa Interior",
//     projectType: "Residential",
//     startDate: "2026-07-20",
//     endDate: "2027-01-10",
//     value: 1250000,
//     paid: 1000000,
//     pending: 250000,
//     status: "Active",
//     paymentTerms: "40% Advance / 30% Production / 30% Completion",
//     designer: "Akrish Design Team",
//     createdDate: "2026-07-15",
//     notes: "Full villa interior with custom furniture.",
//   },
//   {
//     id: "CON-004",
//     contractNo: "AKR-CON-2026-004",
//     client: "Anjali Rao",
//     project: "Apartment Interior",
//     projectType: "Residential",
//     startDate: "2026-06-25",
//     endDate: "2026-09-30",
//     value: 480000,
//     paid: 480000,
//     pending: 0,
//     status: "Completed",
//     paymentTerms: "50% Advance / 50% Completion",
//     designer: "Akrish Design Team",
//     createdDate: "2026-06-22",
//     notes: "Apartment interior completed and handed over.",
//   },
//   {
//     id: "CON-005",
//     contractNo: "AKR-CON-2026-005",
//     client: "Kiran Kumar",
//     project: "Corporate Office Interior",
//     projectType: "Commercial",
//     startDate: "2026-08-10",
//     endDate: "2026-12-30",
//     value: 980000,
//     paid: 490000,
//     pending: 490000,
//     status: "Active",
//     paymentTerms: "50% Advance / 25% Production / 25% Completion",
//     designer: "Akrish Commercial Team",
//     createdDate: "2026-08-03",
//     notes: "Reception, meeting rooms and office workstations.",
//   },
//   {
//     id: "CON-006",
//     contractNo: "AKR-CON-2026-006",
//     client: "Meghana Devi",
//     project: "2 BHK Interior",
//     projectType: "Residential",
//     startDate: "2026-10-10",
//     endDate: "2027-01-20",
//     value: 390000,
//     paid: 0,
//     pending: 390000,
//     status: "Sent",
//     paymentTerms: "50% Advance / 30% Production / 20% Completion",
//     designer: "Akrish Design Team",
//     createdDate: "2026-09-30",
//     notes: "Contract sent to client. Awaiting confirmation.",
//   },
//   {
//     id: "CON-007",
//     contractNo: "AKR-CON-2026-007",
//     client: "Vamsi Krishna",
//     project: "Commercial Office",
//     projectType: "Commercial",
//     startDate: "2026-11-01",
//     endDate: "2027-03-15",
//     value: 720000,
//     paid: 0,
//     pending: 720000,
//     status: "Draft",
//     paymentTerms: "40% Advance / 40% Production / 20% Completion",
//     designer: "Akrish Commercial Team",
//     createdDate: "2026-09-28",
//     notes: "Draft contract prepared based on approved quotation.",
//   },
//   {
//     id: "CON-008",
//     contractNo: "AKR-CON-2026-008",
//     client: "Sneha Reddy",
//     project: "Living Room Interior",
//     projectType: "Residential",
//     startDate: "2026-07-01",
//     endDate: "2026-09-15",
//     value: 280000,
//     paid: 140000,
//     pending: 140000,
//     status: "Cancelled",
//     paymentTerms: "50% Advance / 50% Completion",
//     designer: "Akrish Design Team",
//     createdDate: "2026-06-28",
//     notes: "Project paused by client.",
//   },
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

// function statusClass(status: ContractStatus) {
//   switch (status) {
//     case "Active":
//       return "bg-[#eaf5f1] text-[#176b5b]";

//     case "Completed":
//       return "bg-[#eaf5f1] text-[#176b5b]";

//     case "Sent":
//       return "bg-[#eef2ff] text-[#4f46a5]";

//     case "Draft":
//       return "bg-gray-100 text-gray-600";

//     case "Expired":
//       return "bg-[#fff5df] text-[#a36a00]";

//     case "Cancelled":
//       return "bg-[#fdecec] text-[#b42318]";

//     default:
//       return "bg-gray-100 text-gray-600";
//   }
// }

// function daysBetween(startDate: string, endDate: string) {
//   const start = new Date(startDate).getTime();
//   const end = new Date(endDate).getTime();

//   return Math.ceil((end - start) / (1000 * 60 * 60 * 24));
// }

// export default function InteriorContractsPage() {
//   const [contracts, setContracts] =
//     useState<Contract[]>(initialContracts);

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [typeFilter, setTypeFilter] = useState("All");

//   const [activeTab, setActiveTab] = useState<
//     "All Contracts" | "Active" | "Drafts" | "Completed"
//   >("All Contracts");

//   const [selectedContract, setSelectedContract] =
//     useState<Contract | null>(null);

//   const [showDetails, setShowDetails] = useState(false);
//   const [showContractModal, setShowContractModal] =
//     useState(false);

//   const [editingContract, setEditingContract] =
//     useState<Contract | null>(null);

//   const [form, setForm] = useState({
//     client: "",
//     project: "",
//     projectType: "Residential",
//     startDate: "",
//     endDate: "",
//     value: "",
//     paymentTerms:
//       "50% Advance / 30% Production / 20% Completion",
//     designer: "Akrish Design Team",
//     notes: "",
//   });

//   const totalContracts = contracts.length;

//   const activeContracts = contracts.filter(
//     (contract) => contract.status === "Active"
//   ).length;

//   const draftContracts = contracts.filter(
//     (contract) => contract.status === "Draft"
//   ).length;

//   const completedContracts = contracts.filter(
//     (contract) => contract.status === "Completed"
//   ).length;

//   const totalValue = contracts.reduce(
//     (sum, contract) => sum + contract.value,
//     0
//   );

//   const totalPaid = contracts.reduce(
//     (sum, contract) => sum + contract.paid,
//     0
//   );

//   const totalPending = contracts.reduce(
//     (sum, contract) => sum + contract.pending,
//     0
//   );

//   const filteredContracts = useMemo(() => {
//     const query = search.toLowerCase().trim();

//     return contracts.filter((contract) => {
//       const matchesSearch =
//         !query ||
//         contract.contractNo.toLowerCase().includes(query) ||
//         contract.client.toLowerCase().includes(query) ||
//         contract.project.toLowerCase().includes(query) ||
//         contract.projectType.toLowerCase().includes(query) ||
//         contract.designer.toLowerCase().includes(query);

//       const matchesStatus =
//         statusFilter === "All" ||
//         contract.status === statusFilter;

//       const matchesType =
//         typeFilter === "All" ||
//         contract.projectType === typeFilter;

//       const matchesTab =
//         activeTab === "All Contracts" ||
//         (activeTab === "Active" &&
//           contract.status === "Active") ||
//         (activeTab === "Drafts" &&
//           contract.status === "Draft") ||
//         (activeTab === "Completed" &&
//           contract.status === "Completed");

//       return (
//         matchesSearch &&
//         matchesStatus &&
//         matchesType &&
//         matchesTab
//       );
//     });
//   }, [
//     contracts,
//     search,
//     statusFilter,
//     typeFilter,
//     activeTab,
//   ]);

//   function resetForm() {
//     setForm({
//       client: "",
//       project: "",
//       projectType: "Residential",
//       startDate: "",
//       endDate: "",
//       value: "",
//       paymentTerms:
//         "50% Advance / 30% Production / 20% Completion",
//       designer: "Akrish Design Team",
//       notes: "",
//     });
//   }

//   function openNewContract() {
//     setEditingContract(null);
//     resetForm();
//     setShowContractModal(true);
//   }

//   function openEditContract(contract: Contract) {
//     setEditingContract(contract);

//     setForm({
//       client: contract.client,
//       project: contract.project,
//       projectType: contract.projectType,
//       startDate: contract.startDate,
//       endDate: contract.endDate,
//       value: String(contract.value),
//       paymentTerms: contract.paymentTerms,
//       designer: contract.designer,
//       notes: contract.notes,
//     });

//     setShowContractModal(true);
//   }

//   function saveContract() {
//     if (
//       !form.client.trim() ||
//       !form.project.trim() ||
//       !form.startDate ||
//       !form.endDate
//     ) {
//       window.alert(
//         "Please fill client, project, start date and end date."
//       );
//       return;
//     }

//     const value = Number(form.value) || 0;

//     if (editingContract) {
//       setContracts((current) =>
//         current.map((contract) =>
//           contract.id === editingContract.id
//             ? {
//                 ...contract,
//                 client: form.client,
//                 project: form.project,
//                 projectType: form.projectType,
//                 startDate: form.startDate,
//                 endDate: form.endDate,
//                 value,
//                 pending: Math.max(
//                   0,
//                   value - contract.paid
//                 ),
//                 paymentTerms: form.paymentTerms,
//                 designer: form.designer,
//                 notes: form.notes,
//               }
//             : contract
//         )
//       );
//     } else {
//       const contractNumber = `AKR-CON-2026-${String(
//         contracts.length + 1
//       ).padStart(3, "0")}`;

//       const newContract: Contract = {
//         id: `CON-${String(contracts.length + 1).padStart(
//           3,
//           "0"
//         )}`,
//         contractNo: contractNumber,
//         client: form.client,
//         project: form.project,
//         projectType: form.projectType,
//         startDate: form.startDate,
//         endDate: form.endDate,
//         value,
//         paid: 0,
//         pending: value,
//         status: "Draft",
//         paymentTerms: form.paymentTerms,
//         designer: form.designer,
//         createdDate: new Date()
//           .toISOString()
//           .slice(0, 10),
//         notes: form.notes,
//       };

//       setContracts((current) => [
//         newContract,
//         ...current,
//       ]);
//     }

//     setShowContractModal(false);
//     resetForm();
//   }

//   function updateStatus(
//     contractId: string,
//     status: ContractStatus
//   ) {
//     setContracts((current) =>
//       current.map((contract) =>
//         contract.id === contractId
//           ? { ...contract, status }
//           : contract
//       )
//     );

//     setSelectedContract((current) =>
//       current && current.id === contractId
//         ? { ...current, status }
//         : current
//     );
//   }

//   function deleteContract(contract: Contract) {
//     const confirmed = window.confirm(
//       `Delete contract "${contract.contractNo}"?`
//     );

//     if (!confirmed) return;

//     setContracts((current) =>
//       current.filter(
//         (item) => item.id !== contract.id
//       )
//     );

//     setSelectedContract(null);
//     setShowDetails(false);
//   }

//   function openDetails(contract: Contract) {
//     setSelectedContract(contract);
//     setShowDetails(true);
//   }

//   function sendContract(contract: Contract) {
//     updateStatus(contract.id, "Sent");

//     window.alert(
//       `Contract ${contract.contractNo} marked as Sent.`
//     );
//   }

//   function printContract(contract: Contract) {
//     setSelectedContract(contract);

//     window.setTimeout(() => {
//       window.print();
//     }, 100);
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f7f4] text-[#242424]">
//       <div className="mx-auto max-w-[1500px] px-4 py-5 sm:px-6 lg:px-8">

//         {/* Header */}
//         <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between print:hidden">
//           <div>
//             <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
//               <span>Interior</span>
//               <span>/</span>
//               <span className="text-gray-800">
//                 Contracts
//               </span>
//             </div>

//             <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
//               Contracts
//             </h1>

//             <p className="mt-1 text-sm text-gray-500">
//               Manage interior project contracts, agreements
//               and payment terms.
//             </p>
//           </div>

//           <button
//             onClick={openNewContract}
//             className="rounded-xl bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#125848]"
//           >
//             + New Contract
//           </button>
//         </div>

//         {/* Summary */}
//         <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 print:hidden">

//           <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="flex items-center justify-between">
//               <p className="text-sm text-gray-500">
//                 Total Contracts
//               </p>

//               <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f0f4f1] text-[#176b5b]">
//                 ▣
//               </div>
//             </div>

//             <p className="mt-3 text-3xl font-bold">
//               {totalContracts}
//             </p>

//             <p className="mt-1 text-xs text-gray-400">
//               All project agreements
//             </p>
//           </div>

//           <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="flex items-center justify-between">
//               <p className="text-sm text-gray-500">
//                 Active Contracts
//               </p>

//               <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eaf5f1] text-[#176b5b]">
//                 ✓
//               </div>
//             </div>

//             <p className="mt-3 text-3xl font-bold">
//               {activeContracts}
//             </p>

//             <p className="mt-1 text-xs text-[#176b5b]">
//               Projects in progress
//             </p>
//           </div>

//           <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="flex items-center justify-between">
//               <p className="text-sm text-gray-500">
//                 Contract Value
//               </p>

//               <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f3f0ea] text-[#9a5b18]">
//                 ₹
//               </div>
//             </div>

//             <p className="mt-3 text-3xl font-bold">
//               {formatCompactCurrency(totalValue)}
//             </p>

//             <p className="mt-1 text-xs text-gray-400">
//               Total project value
//             </p>
//           </div>

//           <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="flex items-center justify-between">
//               <p className="text-sm text-gray-500">
//                 Pending Amount
//               </p>

//               <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fff5df] text-[#a36a00]">
//                 !
//               </div>
//             </div>

//             <p className="mt-3 text-3xl font-bold text-[#b42318]">
//               {formatCompactCurrency(totalPending)}
//             </p>

//             <p className="mt-1 text-xs text-gray-400">
//               Amount to be collected
//             </p>
//           </div>
//         </section>

//         {/* Tabs */}
//         <div className="mb-5 overflow-x-auto rounded-2xl border border-[#e4e2da] bg-white p-1.5 shadow-sm print:hidden">
//           <div className="flex min-w-max gap-1">
//             {[
//               "All Contracts",
//               "Active",
//               "Drafts",
//               "Completed",
//             ].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() =>
//                   setActiveTab(
//                     tab as
//                       | "All Contracts"
//                       | "Active"
//                       | "Drafts"
//                       | "Completed"
//                   )
//                 }
//                 className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
//                   activeTab === tab
//                     ? "bg-[#176b5b] text-white"
//                     : "text-gray-600 hover:bg-gray-100"
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Filters */}
//         <section className="mb-5 rounded-2xl border border-[#e4e2da] bg-white p-4 shadow-sm print:hidden">
//           <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_190px_190px_auto]">

//             <div className="relative">
//               <span className="absolute left-3 top-2.5 text-gray-400">
//                 ⌕
//               </span>

//               <input
//                 value={search}
//                 onChange={(e) =>
//                   setSearch(e.target.value)
//                 }
//                 placeholder="Search contract, client, project..."
//                 className="w-full rounded-xl border border-[#dddcd5] bg-white py-2.5 pl-9 pr-4 text-sm outline-none focus:border-[#176b5b]"
//               />
//             </div>

//             <select
//               value={statusFilter}
//               onChange={(e) =>
//                 setStatusFilter(e.target.value)
//               }
//               className="rounded-xl border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               <option value="All">
//                 All Status
//               </option>
//               <option value="Draft">Draft</option>
//               <option value="Sent">Sent</option>
//               <option value="Active">Active</option>
//               <option value="Completed">
//                 Completed
//               </option>
//               <option value="Expired">Expired</option>
//               <option value="Cancelled">
//                 Cancelled
//               </option>
//             </select>

//             <select
//               value={typeFilter}
//               onChange={(e) =>
//                 setTypeFilter(e.target.value)
//               }
//               className="rounded-xl border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               <option value="All">
//                 All Project Types
//               </option>
//               <option value="Residential">
//                 Residential
//               </option>
//               <option value="Commercial">
//                 Commercial
//               </option>
//               <option value="Office">
//                 Office
//               </option>
//               <option value="Retail">
//                 Retail
//               </option>
//             </select>

//             <button
//               onClick={() => {
//                 setSearch("");
//                 setStatusFilter("All");
//                 setTypeFilter("All");
//               }}
//               className="rounded-xl border border-[#dddcd5] px-4 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-50"
//             >
//               Clear
//             </button>
//           </div>
//         </section>

//         {/* Contract Table */}
//         <section className="overflow-hidden rounded-2xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="flex flex-col gap-2 border-b border-[#eceae3] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
//             <div>
//               <h2 className="font-bold">
//                 Contract List
//               </h2>

//               <p className="mt-1 text-xs text-gray-500">
//                 {filteredContracts.length} contract
//                 {filteredContracts.length === 1
//                   ? ""
//                   : "s"} found
//               </p>
//             </div>

//             <div className="text-xs text-gray-500">
//               Paid:{" "}
//               <span className="font-bold text-[#176b5b]">
//                 {formatCompactCurrency(totalPaid)}
//               </span>
//             </div>
//           </div>

//           {filteredContracts.length === 0 ? (
//             <div className="px-5 py-16 text-center">
//               <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
//                 ▣
//               </div>

//               <h3 className="mt-4 font-bold">
//                 No contracts found
//               </h3>

//               <p className="mt-1 text-sm text-gray-500">
//                 Try changing your search or filters.
//               </p>
//             </div>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[1200px] text-left">
//                 <thead className="bg-[#fafaf7] text-xs uppercase tracking-wide text-gray-500">
//                   <tr>
//                     <th className="px-5 py-3 font-semibold">
//                       Contract
//                     </th>
//                     <th className="px-5 py-3 font-semibold">
//                       Client / Project
//                     </th>
//                     <th className="px-5 py-3 font-semibold">
//                       Duration
//                     </th>
//                     <th className="px-5 py-3 font-semibold">
//                       Value
//                     </th>
//                     <th className="px-5 py-3 font-semibold">
//                       Pending
//                     </th>
//                     <th className="px-5 py-3 font-semibold">
//                       Status
//                     </th>
//                     <th className="px-5 py-3 text-right font-semibold">
//                       Action
//                     </th>
//                   </tr>
//                 </thead>

//                 <tbody className="divide-y divide-[#efeee9]">
//                   {filteredContracts.map(
//                     (contract) => (
//                       <tr
//                         key={contract.id}
//                         className="transition hover:bg-[#fcfcfa]"
//                       >
//                         <td className="px-5 py-4">
//                           <p className="text-sm font-bold">
//                             {contract.contractNo}
//                           </p>

//                           <p className="mt-1 text-xs text-gray-400">
//                             Created{" "}
//                             {contract.createdDate}
//                           </p>
//                         </td>

//                         <td className="px-5 py-4">
//                           <p className="text-sm font-semibold">
//                             {contract.client}
//                           </p>

//                           <p className="mt-1 text-xs text-gray-500">
//                             {contract.project}
//                           </p>

//                           <p className="mt-1 text-xs text-gray-400">
//                             {contract.projectType}
//                           </p>
//                         </td>

//                         <td className="px-5 py-4">
//                           <p className="text-sm">
//                             {contract.startDate}
//                           </p>

//                           <p className="my-1 text-xs text-gray-400">
//                             to
//                           </p>

//                           <p className="text-sm">
//                             {contract.endDate}
//                           </p>

//                           <p className="mt-1 text-[11px] text-gray-400">
//                             {daysBetween(
//                               contract.startDate,
//                               contract.endDate
//                             )}{" "}
//                             days
//                           </p>
//                         </td>

//                         <td className="px-5 py-4">
//                           <p className="text-sm font-bold">
//                             {formatCurrency(
//                               contract.value
//                             )}
//                           </p>

//                           <p className="mt-1 text-xs text-[#176b5b]">
//                             Paid{" "}
//                             {formatCurrency(
//                               contract.paid
//                             )}
//                           </p>
//                         </td>

//                         <td className="px-5 py-4">
//                           <p
//                             className={`text-sm font-semibold ${
//                               contract.pending > 0
//                                 ? "text-[#b42318]"
//                                 : "text-[#176b5b]"
//                             }`}
//                           >
//                             {formatCurrency(
//                               contract.pending
//                             )}
//                           </p>
//                         </td>

//                         <td className="px-5 py-4">
//                           <span
//                             className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusClass(
//                               contract.status
//                             )}`}
//                           >
//                             {contract.status}
//                           </span>
//                         </td>

//                         <td className="px-5 py-4">
//                           <div className="flex justify-end gap-2">
//                             <button
//                               onClick={() =>
//                                 openDetails(
//                                   contract
//                                 )
//                               }
//                               className="rounded-lg border border-[#dddcd5] px-3 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-50"
//                             >
//                               View
//                             </button>

//                             <button
//                               onClick={() =>
//                                 openEditContract(
//                                   contract
//                                 )
//                               }
//                               className="rounded-lg bg-[#f1f6f3] px-3 py-1.5 text-xs font-semibold text-[#176b5b] hover:bg-[#e5efeb]"
//                             >
//                               Edit
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     )
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </section>

//         {/* Bottom Analytics */}
//         <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3 print:hidden">

//           {/* Payment Collection */}
//           <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm lg:col-span-2">
//             <div className="mb-5">
//               <h2 className="font-bold">
//                 Contract Payment Collection
//               </h2>

//               <p className="mt-1 text-xs text-gray-500">
//                 Overview of payments against active contracts.
//               </p>
//             </div>

//             <div className="mb-5 flex items-end justify-between">
//               <div>
//                 <p className="text-xs text-gray-500">
//                   Total Contract Value
//                 </p>

//                 <p className="mt-1 text-2xl font-bold">
//                   {formatCompactCurrency(totalValue)}
//                 </p>
//               </div>

//               <div className="text-right">
//                 <p className="text-xs text-gray-500">
//                   Pending
//                 </p>

//                 <p className="mt-1 text-xl font-bold text-[#b42318]">
//                   {formatCompactCurrency(
//                     totalPending
//                   )}
//                 </p>
//               </div>
//             </div>

//             <div className="h-4 overflow-hidden rounded-full bg-gray-100">
//               <div
//                 className="h-full rounded-full bg-[#176b5b]"
//                 style={{
//                   width: `${
//                     totalValue > 0
//                       ? (totalPaid / totalValue) *
//                         100
//                       : 0
//                   }%`,
//                 }}
//               />
//             </div>

//             <div className="mt-3 flex justify-between text-xs text-gray-500">
//               <span>
//                 Collected{" "}
//                 {totalValue > 0
//                   ? (
//                       (totalPaid / totalValue) *
//                       100
//                     ).toFixed(1)
//                   : 0}
//                 %
//               </span>

//               <span>
//                 {formatCompactCurrency(totalPaid)} /
//                 {formatCompactCurrency(totalValue)}
//               </span>
//             </div>
//           </div>

//           {/* Contract Status */}
//           <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="mb-5">
//               <h2 className="font-bold">
//                 Contract Status
//               </h2>

//               <p className="mt-1 text-xs text-gray-500">
//                 Current contract distribution.
//               </p>
//             </div>

//             <div className="space-y-4">
//               {[
//                 {
//                   label: "Active",
//                   count: activeContracts,
//                   color: "bg-[#176b5b]",
//                 },
//                 {
//                   label: "Draft",
//                   count: draftContracts,
//                   color: "bg-gray-400",
//                 },
//                 {
//                   label: "Completed",
//                   count: completedContracts,
//                   color: "bg-[#4f46a5]",
//                 },
//               ].map((item) => (
//                 <div key={item.label}>
//                   <div className="mb-1.5 flex justify-between text-xs">
//                     <span className="font-medium">
//                       {item.label}
//                     </span>

//                     <span className="text-gray-500">
//                       {item.count}
//                     </span>
//                   </div>

//                   <div className="h-2 rounded-full bg-gray-100">
//                     <div
//                       className={`h-2 rounded-full ${item.color}`}
//                       style={{
//                         width: `${Math.max(
//                           5,
//                           (item.count /
//                             Math.max(
//                               totalContracts,
//                               1
//                             )) *
//                             100
//                         )}%`,
//                       }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* New / Edit Contract Modal */}
//       {showContractModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 print:hidden">
//           <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-xl">

//             <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#e8e6df] bg-white px-5 py-4">
//               <div>
//                 <h2 className="font-bold">
//                   {editingContract
//                     ? "Edit Contract"
//                     : "Create New Contract"}
//                 </h2>

//                 <p className="mt-1 text-xs text-gray-500">
//                   {editingContract
//                     ? "Update the contract information."
//                     : "Create an interior project agreement."}
//                 </p>
//               </div>

//               <button
//                 onClick={() =>
//                   setShowContractModal(false)
//                 }
//                 className="rounded-lg px-2 py-1 text-xl text-gray-400 hover:bg-gray-100"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="space-y-5 p-5">

//               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-gray-600">
//                     Client Name *
//                   </label>

//                   <input
//                     value={form.client}
//                     onChange={(e) =>
//                       setForm({
//                         ...form,
//                         client: e.target.value,
//                       })
//                     }
//                     placeholder="Enter client name"
//                     className="w-full rounded-xl border border-[#dddcd5] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-gray-600">
//                     Project Name *
//                   </label>

//                   <input
//                     value={form.project}
//                     onChange={(e) =>
//                       setForm({
//                         ...form,
//                         project: e.target.value,
//                       })
//                     }
//                     placeholder="Interior project name"
//                     className="w-full rounded-xl border border-[#dddcd5] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-gray-600">
//                     Project Type
//                   </label>

//                   <select
//                     value={form.projectType}
//                     onChange={(e) =>
//                       setForm({
//                         ...form,
//                         projectType: e.target.value,
//                       })
//                     }
//                     className="w-full rounded-xl border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="Residential">
//                       Residential
//                     </option>
//                     <option value="Commercial">
//                       Commercial
//                     </option>
//                     <option value="Office">
//                       Office
//                     </option>
//                     <option value="Retail">
//                       Retail
//                     </option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-gray-600">
//                     Contract Value
//                   </label>

//                   <input
//                     type="number"
//                     value={form.value}
//                     onChange={(e) =>
//                       setForm({
//                         ...form,
//                         value: e.target.value,
//                       })
//                     }
//                     placeholder="₹ 0"
//                     className="w-full rounded-xl border border-[#dddcd5] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-gray-600">
//                     Start Date *
//                   </label>

//                   <input
//                     type="date"
//                     value={form.startDate}
//                     onChange={(e) =>
//                       setForm({
//                         ...form,
//                         startDate: e.target.value,
//                       })
//                     }
//                     className="w-full rounded-xl border border-[#dddcd5] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-gray-600">
//                     End Date *
//                   </label>

//                   <input
//                     type="date"
//                     value={form.endDate}
//                     onChange={(e) =>
//                       setForm({
//                         ...form,
//                         endDate: e.target.value,
//                       })
//                     }
//                     className="w-full rounded-xl border border-[#dddcd5] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-gray-600">
//                     Payment Terms
//                   </label>

//                   <select
//                     value={form.paymentTerms}
//                     onChange={(e) =>
//                       setForm({
//                         ...form,
//                         paymentTerms: e.target.value,
//                       })
//                     }
//                     className="w-full rounded-xl border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option>
//                       50% Advance / 30% Production / 20% Completion
//                     </option>

//                     <option>
//                       40% Advance / 40% Production / 20% Completion
//                     </option>

//                     <option>
//                       40% Advance / 30% Production / 30% Completion
//                     </option>

//                     <option>
//                       50% Advance / 50% Completion
//                     </option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-gray-600">
//                     Designer / Team
//                   </label>

//                   <input
//                     value={form.designer}
//                     onChange={(e) =>
//                       setForm({
//                         ...form,
//                         designer: e.target.value,
//                       })
//                     }
//                     placeholder="Designer or team"
//                     className="w-full rounded-xl border border-[#dddcd5] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-xs font-semibold text-gray-600">
//                   Contract Notes
//                 </label>

//                 <textarea
//                   rows={4}
//                   value={form.notes}
//                   onChange={(e) =>
//                     setForm({
//                       ...form,
//                       notes: e.target.value,
//                     })
//                   }
//                   placeholder="Add contract notes..."
//                   className="w-full resize-none rounded-xl border border-[#dddcd5] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>

//               <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
//                 <button
//                   onClick={() =>
//                     setShowContractModal(false)
//                   }
//                   className="rounded-xl border border-[#dddcd5] px-5 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-50"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   onClick={saveContract}
//                   className="rounded-xl bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//                 >
//                   {editingContract
//                     ? "Save Changes"
//                     : "Create Contract"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Contract Details Modal */}
//       {showDetails && selectedContract && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 print:hidden">
//           <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-xl">

//             <div className="flex items-center justify-between border-b border-[#e8e6df] px-5 py-4">
//               <div>
//                 <div className="flex flex-wrap items-center gap-2">
//                   <h2 className="font-bold">
//                     {selectedContract.contractNo}
//                   </h2>

//                   <span
//                     className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusClass(
//                       selectedContract.status
//                     )}`}
//                   >
//                     {selectedContract.status}
//                   </span>
//                 </div>

//                 <p className="mt-1 text-xs text-gray-500">
//                   Contract details and project agreement
//                 </p>
//               </div>

//               <button
//                 onClick={() =>
//                   setShowDetails(false)
//                 }
//                 className="rounded-lg px-2 py-1 text-xl text-gray-400 hover:bg-gray-100"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="space-y-5 p-5">

//               {/* Client */}
//               <div className="rounded-2xl border border-[#e4e2da] p-5">
//                 <h3 className="font-bold">
//                   Client & Project
//                 </h3>

//                 <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//                   <div>
//                     <p className="text-xs text-gray-500">
//                       Client
//                     </p>
//                     <p className="mt-1 text-sm font-semibold">
//                       {selectedContract.client}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-xs text-gray-500">
//                       Project
//                     </p>
//                     <p className="mt-1 text-sm font-semibold">
//                       {selectedContract.project}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-xs text-gray-500">
//                       Project Type
//                     </p>
//                     <p className="mt-1 text-sm font-semibold">
//                       {selectedContract.projectType}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-xs text-gray-500">
//                       Designer / Team
//                     </p>
//                     <p className="mt-1 text-sm font-semibold">
//                       {selectedContract.designer}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-xs text-gray-500">
//                       Start Date
//                     </p>
//                     <p className="mt-1 text-sm font-semibold">
//                       {selectedContract.startDate}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-xs text-gray-500">
//                       End Date
//                     </p>
//                     <p className="mt-1 text-sm font-semibold">
//                       {selectedContract.endDate}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Financial */}
//               <div className="rounded-2xl border border-[#e4e2da] p-5">
//                 <h3 className="font-bold">
//                   Financial Summary
//                 </h3>

//                 <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
//                   <div className="rounded-xl bg-[#f8f8f5] p-4">
//                     <p className="text-xs text-gray-500">
//                       Contract Value
//                     </p>

//                     <p className="mt-1 text-xl font-bold">
//                       {formatCurrency(
//                         selectedContract.value
//                       )}
//                     </p>
//                   </div>

//                   <div className="rounded-xl bg-[#eaf5f1] p-4">
//                     <p className="text-xs text-gray-500">
//                       Amount Paid
//                     </p>

//                     <p className="mt-1 text-xl font-bold text-[#176b5b]">
//                       {formatCurrency(
//                         selectedContract.paid
//                       )}
//                     </p>
//                   </div>

//                   <div className="rounded-xl bg-[#fdecec] p-4">
//                     <p className="text-xs text-gray-500">
//                       Pending
//                     </p>

//                     <p className="mt-1 text-xl font-bold text-[#b42318]">
//                       {formatCurrency(
//                         selectedContract.pending
//                       )}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mt-4 h-3 overflow-hidden rounded-full bg-gray-100">
//                   <div
//                     className="h-full rounded-full bg-[#176b5b]"
//                     style={{
//                       width: `${
//                         selectedContract.value > 0
//                           ? (selectedContract.paid /
//                               selectedContract.value) *
//                             100
//                           : 0
//                       }%`,
//                     }}
//                   />
//                 </div>

//                 <p className="mt-2 text-xs text-gray-500">
//                   {selectedContract.value > 0
//                     ? (
//                         (selectedContract.paid /
//                           selectedContract.value) *
//                         100
//                       ).toFixed(1)
//                     : 0}
//                   % collected
//                 </p>
//               </div>

//               {/* Terms */}
//               <div className="rounded-2xl border border-[#e4e2da] p-5">
//                 <h3 className="font-bold">
//                   Payment Terms
//                 </h3>

//                 <p className="mt-2 text-sm text-gray-600">
//                   {selectedContract.paymentTerms}
//                 </p>
//               </div>

//               {/* Notes */}
//               <div className="rounded-2xl border border-[#e4e2da] p-5">
//                 <h3 className="font-bold">
//                   Contract Notes
//                 </h3>

//                 <p className="mt-2 text-sm leading-6 text-gray-600">
//                   {selectedContract.notes ||
//                     "No notes added."}
//                 </p>
//               </div>

//               {/* Status */}
//               <div className="rounded-2xl border border-[#e4e2da] p-5">
//                 <h3 className="font-bold">
//                   Update Contract Status
//                 </h3>

//                 <div className="mt-3 flex flex-wrap gap-2">
//                   {(
//                     [
//                       "Draft",
//                       "Sent",
//                       "Active",
//                       "Completed",
//                       "Expired",
//                       "Cancelled",
//                     ] as ContractStatus[]
//                   ).map((status) => (
//                     <button
//                       key={status}
//                       onClick={() =>
//                         updateStatus(
//                           selectedContract.id,
//                           status
//                         )
//                       }
//                       className={`rounded-xl px-3.5 py-2 text-xs font-semibold ${
//                         selectedContract.status ===
//                         status
//                           ? "bg-[#176b5b] text-white"
//                           : "border border-[#dddcd5] text-gray-600 hover:bg-gray-50"
//                       }`}
//                     >
//                       {status}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Actions */}
//               <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-between">
//                 <button
//                   onClick={() =>
//                     deleteContract(selectedContract)
//                   }
//                   className="rounded-xl border border-[#f1caca] px-5 py-2.5 text-sm font-semibold text-[#b42318] hover:bg-[#fff5f5]"
//                 >
//                   Delete Contract
//                 </button>

//                 <div className="flex flex-col gap-2 sm:flex-row">
//                   {selectedContract.status ===
//                     "Draft" && (
//                     <button
//                       onClick={() =>
//                         sendContract(
//                           selectedContract
//                         )
//                       }
//                       className="rounded-xl bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//                     >
//                       Send Contract
//                     </button>
//                   )}

//                   <button
//                     onClick={() =>
//                       printContract(
//                         selectedContract
//                       )
//                     }
//                     className="rounded-xl border border-[#dddcd5] px-5 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-50"
//                   >
//                     Print
//                   </button>

//                   <button
//                     onClick={() => {
//                       setShowDetails(false);
//                       openEditContract(
//                         selectedContract
//                       );
//                     }}
//                     className="rounded-xl border border-[#dddcd5] px-5 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-50"
//                   >
//                     Edit
//                   </button>

//                   <button
//                     onClick={() =>
//                       setShowDetails(false)
//                     }
//                     className="rounded-xl bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Print Contract */}
//       {selectedContract && (
//         <div className="hidden print:block">
//           <div className="mx-auto max-w-4xl bg-white p-10 text-black">
//             <div className="mb-8 flex items-start justify-between border-b-2 border-[#176b5b] pb-5">
//               <div>
//                 <h1 className="text-3xl font-bold">
//                   AKRISH
//                 </h1>

//                 <p className="mt-1 text-sm text-gray-600">
//                   Furniture & Interior
//                 </p>
//               </div>

//               <div className="text-right">
//                 <h2 className="text-xl font-bold">
//                   INTERIOR CONTRACT
//                 </h2>

//                 <p className="mt-1 text-sm">
//                   {selectedContract.contractNo}
//                 </p>

//                 <p className="mt-1 text-xs text-gray-500">
//                   Created:{" "}
//                   {selectedContract.createdDate}
//                 </p>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-8">
//               <div>
//                 <h3 className="mb-2 text-sm font-bold uppercase">
//                   Client
//                 </h3>

//                 <p className="text-base font-semibold">
//                   {selectedContract.client}
//                 </p>

//                 <p className="mt-1 text-sm text-gray-600">
//                   {selectedContract.project}
//                 </p>

//                 <p className="mt-1 text-sm text-gray-600">
//                   {selectedContract.projectType}
//                 </p>
//               </div>

//               <div>
//                 <h3 className="mb-2 text-sm font-bold uppercase">
//                   Project Period
//                 </h3>

//                 <p className="text-sm">
//                   Start:{" "}
//                   {selectedContract.startDate}
//                 </p>

//                 <p className="mt-1 text-sm">
//                   End: {selectedContract.endDate}
//                 </p>
//               </div>
//             </div>

//             <div className="mt-8 border border-gray-300">
//               <div className="grid grid-cols-3 border-b border-gray-300 bg-gray-100 p-4 text-sm font-bold">
//                 <span>Contract Value</span>
//                 <span>Paid</span>
//                 <span>Pending</span>
//               </div>

//               <div className="grid grid-cols-3 p-4 text-sm">
//                 <span>
//                   {formatCurrency(
//                     selectedContract.value
//                   )}
//                 </span>

//                 <span>
//                   {formatCurrency(
//                     selectedContract.paid
//                   )}
//                 </span>

//                 <span>
//                   {formatCurrency(
//                     selectedContract.pending
//                   )}
//                 </span>
//               </div>
//             </div>

//             <div className="mt-8">
//               <h3 className="text-sm font-bold uppercase">
//                 Payment Terms
//               </h3>

//               <p className="mt-2 text-sm">
//                 {selectedContract.paymentTerms}
//               </p>
//             </div>

//             <div className="mt-8">
//               <h3 className="text-sm font-bold uppercase">
//                 Notes
//               </h3>

//               <p className="mt-2 text-sm leading-6">
//                 {selectedContract.notes}
//               </p>
//             </div>

//             <div className="mt-20 grid grid-cols-2 gap-16">
//               <div className="border-t border-gray-400 pt-2 text-sm">
//                 Client Signature
//               </div>

//               <div className="border-t border-gray-400 pt-2 text-sm">
//                 Authorized Signature
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx global>{`
//         @media print {
//           body {
//             background: white !important;
//           }

//           body * {
//             visibility: hidden;
//           }

//           .print\\:block,
//           .print\\:block * {
//             visibility: visible;
//           }

//           .print\\:block {
//             position: absolute;
//             inset: 0;
//             width: 100%;
//           }

//           @page {
//             size: A4;
//             margin: 15mm;
//           }
//         }
//       `}</style>
//     </main>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAllContracts,
//   createContract,
//   updateContract,
//   deleteContract as deleteContractFromDb,
//   type InteriorContract,
// } from "@/modules/interior/services/contractService";
// import { Timestamp } from "firebase/firestore";

// type ContractStatus =
//   | "Draft"
//   | "Sent"
//   | "Active"
//   | "Completed"
//   | "Expired"
//   | "Cancelled";

// type Contract = {
//   id: string;
//   contractNo: string;
//   client: string;
//   project: string;
//   projectType: string;
//   startDate: string;
//   endDate: string;
//   value: number;
//   paid: number;
//   pending: number;
//   status: ContractStatus;
//   paymentTerms: string;
//   designer: string;
//   createdDate: string;
//   notes: string;
// };

// const tabs = ["All", "Active", "Completed", "Draft"] as const;

// const statusOptions: ContractStatus[] = [
//   "Draft",
//   "Sent",
//   "Active",
//   "Completed",
//   "Expired",
//   "Cancelled",
// ];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function statusClass(status: ContractStatus) {
//   switch (status) {
//     case "Draft":
//       return "bg-gray-100 text-gray-700 border-gray-200";
//     case "Sent":
//       return "bg-blue-50 text-blue-700 border-blue-200";
//     case "Active":
//       return "bg-emerald-50 text-emerald-700 border-emerald-200";
//     case "Completed":
//       return "bg-green-50 text-green-700 border-green-200";
//     case "Expired":
//       return "bg-amber-50 text-amber-700 border-amber-200";
//     case "Cancelled":
//       return "bg-red-50 text-red-700 border-red-200";
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

// function normalizeStatus(raw?: string): ContractStatus {
//   const s = (raw || "Draft").trim();
//   if ((statusOptions as string[]).includes(s)) return s as ContractStatus;
//   const lower = s.toLowerCase();
//   if (lower.includes("active") || lower.includes("progress")) return "Active";
//   if (lower.includes("complete") || lower.includes("done")) return "Completed";
//   if (lower.includes("sent")) return "Sent";
//   if (lower.includes("expir")) return "Expired";
//   if (lower.includes("cancel")) return "Cancelled";
//   return "Draft";
// }

// function mapToUi(c: InteriorContract): Contract {
//   const value = Number(c.value ?? 0) || 0;
//   const paid = Number(c.paid ?? 0) || 0;
//   const pending =
//     c.pending !== undefined && c.pending !== null
//       ? Number(c.pending) || 0
//       : Math.max(value - paid, 0);

//   return {
//     id: c.id,
//     contractNo: c.contractNo || `AKR-CON-${c.id.slice(0, 6).toUpperCase()}`,
//     client: c.client || c.clientName || "Unknown",
//     project: c.project || c.projectName || "—",
//     projectType: c.projectType || "Residential",
//     startDate: c.startDate || "—",
//     endDate: c.endDate || "—",
//     value,
//     paid,
//     pending,
//     status: normalizeStatus(c.status),
//     paymentTerms:
//       c.paymentTerms || "50% Advance / 30% Production / 20% Completion",
//     designer: c.designer || "—",
//     createdDate: c.createdDate || toDateString(c.createdAt) || "—",
//     notes: c.notes || "",
//   };
// }

// export default function InteriorContractsPage() {
//   const [contracts, setContracts] = useState<Contract[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState<"All" | ContractStatus>(
//     "All"
//   );
//   const [typeFilter, setTypeFilter] = useState("All");
//   const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("All");

//   const [selectedContract, setSelectedContract] = useState<Contract | null>(
//     null
//   );
//   const [showDetailsModal, setShowDetailsModal] = useState(false);
//   const [showContractModal, setShowContractModal] = useState(false);
//   const [editingContract, setEditingContract] = useState<Contract | null>(null);

//   const [form, setForm] = useState({
//     client: "",
//     project: "",
//     projectType: "Residential",
//     startDate: "",
//     endDate: "",
//     value: "",
//     paymentTerms: "50% Advance / 30% Production / 20% Completion",
//     designer: "Akrish Design Team",
//     notes: "",
//   });

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllContracts();
//         if (cancelled) return;
//         setContracts(data.map(mapToUi));
//       } catch (err) {
//         console.error("Failed to load contracts:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const totalContracts = contracts.length;
//   const activeContracts = contracts.filter((c) => c.status === "Active").length;
//   const totalValue = contracts.reduce((s, c) => s + c.value, 0);
//   const totalPending = contracts.reduce((s, c) => s + c.pending, 0);

//   const filteredContracts = useMemo(() => {
//     const query = search.toLowerCase().trim();

//     return contracts.filter((contract) => {
//       const matchesSearch =
//         !query ||
//         contract.contractNo.toLowerCase().includes(query) ||
//         contract.client.toLowerCase().includes(query) ||
//         contract.project.toLowerCase().includes(query) ||
//         contract.designer.toLowerCase().includes(query);

//       const matchesStatus =
//         statusFilter === "All" || contract.status === statusFilter;

//       const matchesType =
//         typeFilter === "All" || contract.projectType === typeFilter;

//       const matchesTab =
//         activeTab === "All" ||
//         (activeTab === "Active" && contract.status === "Active") ||
//         (activeTab === "Completed" && contract.status === "Completed") ||
//         (activeTab === "Draft" && contract.status === "Draft");

//       return matchesSearch && matchesStatus && matchesType && matchesTab;
//     });
//   }, [contracts, search, statusFilter, typeFilter, activeTab]);

//   function resetForm() {
//     setForm({
//       client: "",
//       project: "",
//       projectType: "Residential",
//       startDate: "",
//       endDate: "",
//       value: "",
//       paymentTerms: "50% Advance / 30% Production / 20% Completion",
//       designer: "Akrish Design Team",
//       notes: "",
//     });
//   }

//   function openNewContract() {
//     setEditingContract(null);
//     resetForm();
//     setShowContractModal(true);
//   }

//   function openEditContract(contract: Contract) {
//     setEditingContract(contract);
//     setForm({
//       client: contract.client,
//       project: contract.project,
//       projectType: contract.projectType,
//       startDate: contract.startDate === "—" ? "" : contract.startDate,
//       endDate: contract.endDate === "—" ? "" : contract.endDate,
//       value: String(contract.value),
//       paymentTerms: contract.paymentTerms,
//       designer: contract.designer,
//       notes: contract.notes,
//     });
//     setShowContractModal(true);
//   }

//   async function saveContract() {
//     if (
//       !form.client.trim() ||
//       !form.project.trim() ||
//       !form.startDate ||
//       !form.endDate
//     ) {
//       window.alert("Please fill client, project, start date and end date.");
//       return;
//     }

//     const value = Number(form.value) || 0;
//     setSaving(true);

//     try {
//       if (editingContract) {
//         const payload = {
//           client: form.client.trim(),
//           project: form.project.trim(),
//           projectType: form.projectType,
//           startDate: form.startDate,
//           endDate: form.endDate,
//           value,
//           pending: Math.max(0, value - editingContract.paid),
//           paymentTerms: form.paymentTerms,
//           designer: form.designer.trim(),
//           notes: form.notes.trim(),
//         };

//         await updateContract(editingContract.id, payload);

//         setContracts((current) =>
//           current.map((contract) =>
//             contract.id === editingContract.id
//               ? { ...contract, ...payload }
//               : contract
//           )
//         );
//       } else {
//         const today = new Date().toISOString().slice(0, 10);
//         const contractNo = `AKR-CON-${Date.now().toString().slice(-6)}`;

//         const payload = {
//           contractNo,
//           client: form.client.trim(),
//           project: form.project.trim(),
//           projectType: form.projectType,
//           startDate: form.startDate,
//           endDate: form.endDate,
//           value,
//           paid: 0,
//           pending: value,
//           status: "Draft",
//           paymentTerms: form.paymentTerms,
//           designer: form.designer.trim(),
//           createdDate: today,
//           notes: form.notes.trim(),
//         };

//         const id = await createContract(payload);

//         setContracts((current) => [
//           {
//             id,
//             ...payload,
//             status: "Draft" as ContractStatus,
//           },
//           ...current,
//         ]);
//       }

//       setShowContractModal(false);
//       resetForm();
//       setEditingContract(null);
//     } catch (err) {
//       console.error(err);
//       alert("Unable to save contract. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function changeStatus(id: string, status: ContractStatus) {
//     setContracts((current) =>
//       current.map((c) => (c.id === id ? { ...c, status } : c))
//     );
//     setSelectedContract((current) =>
//       current && current.id === id ? { ...current, status } : current
//     );

//     try {
//       await updateContract(id, { status });
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllContracts();
//         setContracts(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   async function removeContract(contract: Contract) {
//     const confirmed = window.confirm(
//       `Delete contract "${contract.contractNo}"?`
//     );
//     if (!confirmed) return;

//     setContracts((current) => current.filter((c) => c.id !== contract.id));
//     setSelectedContract(null);
//     setShowDetailsModal(false);

//     try {
//       await deleteContractFromDb(contract.id);
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllContracts();
//         setContracts(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
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
//               <h1 className="text-2xl font-bold tracking-tight">Contracts</h1>
//               <p className="mt-1 text-sm text-gray-500">
//                 Manage interior project contracts and payment schedules.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <button
//               onClick={openNewContract}
//               className="rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#125848]"
//             >
//               + New Contract
//             </button>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-6 px-5 py-6 lg:px-8">
//         <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <SummaryCard
//             label="Total Contracts"
//             value={loading ? "…" : String(totalContracts)}
//             helper={`${activeContracts} active`}
//           />
//           <SummaryCard
//             label="Active"
//             value={loading ? "…" : String(activeContracts)}
//             helper="Currently running"
//           />
//           <SummaryCard
//             label="Contract Value"
//             value={loading ? "…" : formatCurrency(totalValue)}
//             helper="All contracts"
//           />
//           <SummaryCard
//             label="Pending"
//             value={loading ? "…" : formatCurrency(totalPending)}
//             helper="Outstanding amount"
//           />
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-2">
//           <div className="flex gap-1 overflow-x-auto">
//             {tabs.map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
//                   activeTab === tab
//                     ? "bg-[#176b5b] text-white"
//                     : "text-gray-600 hover:bg-[#f7f7f4]"
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-4">
//           <div className="flex flex-col gap-3 lg:flex-row">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search contract, client, project..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-4 py-2.5 text-sm outline-none focus:border-[#176b5b] lg:max-w-md"
//             />
//             <select
//               value={statusFilter}
//               onChange={(e) =>
//                 setStatusFilter(e.target.value as "All" | ContractStatus)
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
//               onChange={(e) => setTypeFilter(e.target.value)}
//               className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               <option value="All">All Types</option>
//               <option value="Residential">Residential</option>
//               <option value="Commercial">Commercial</option>
//             </select>
//           </div>
//         </section>

//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="border-b border-[#e4e2da] px-5 py-4">
//             <h2 className="font-semibold">Contract List</h2>
//             <p className="mt-1 text-xs text-gray-500">
//               {filteredContracts.length} records
//             </p>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1100px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Contract</th>
//                   <th className="px-4 py-3 font-semibold">Client</th>
//                   <th className="px-4 py-3 font-semibold">Project</th>
//                   <th className="px-4 py-3 font-semibold">Value</th>
//                   <th className="px-4 py-3 font-semibold">Pending</th>
//                   <th className="px-4 py-3 font-semibold">Period</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
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
//                       Loading contracts…
//                     </td>
//                   </tr>
//                 ) : (
//                   <>
//                     {filteredContracts.map((contract) => (
//                       <tr key={contract.id} className="hover:bg-[#fafaf8]">
//                         <td className="px-5 py-4">
//                           <p className="font-semibold text-[#176b5b]">
//                             {contract.contractNo}
//                           </p>
//                           <p className="mt-0.5 text-xs text-gray-400">
//                             {contract.createdDate}
//                           </p>
//                         </td>
//                         <td className="px-4 py-4 text-sm font-medium text-gray-900">
//                           {contract.client}
//                         </td>
//                         <td className="px-4 py-4">
//                           <p className="text-sm font-medium text-gray-800">
//                             {contract.project}
//                           </p>
//                           <p className="text-xs text-gray-400">
//                             {contract.projectType}
//                           </p>
//                         </td>
//                         <td className="px-4 py-4 text-sm font-semibold text-gray-900">
//                           {formatCurrency(contract.value)}
//                         </td>
//                         <td className="px-4 py-4 text-sm font-semibold text-orange-700">
//                           {formatCurrency(contract.pending)}
//                         </td>
//                         <td className="px-4 py-4 text-xs text-gray-600">
//                           {contract.startDate}
//                           <br />
//                           to {contract.endDate}
//                         </td>
//                         <td className="px-4 py-4">
//                           <span
//                             className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                               contract.status
//                             )}`}
//                           >
//                             {contract.status}
//                           </span>
//                         </td>
//                         <td className="px-4 py-4 text-right">
//                           <div className="flex justify-end gap-2">
//                             <button
//                               onClick={() => {
//                                 setSelectedContract(contract);
//                                 setShowDetailsModal(true);
//                               }}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                             >
//                               View
//                             </button>
//                             <button
//                               onClick={() => openEditContract(contract)}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50"
//                             >
//                               Edit
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                     {filteredContracts.length === 0 && (
//                       <tr>
//                         <td
//                           colSpan={8}
//                           className="px-5 py-12 text-center text-sm text-gray-500"
//                         >
//                           No contracts found.
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

//       {/* Details */}
//       {showDetailsModal && selectedContract && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-4">
//               <div>
//                 <p className="text-xs font-semibold text-[#176b5b]">
//                   {selectedContract.contractNo}
//                 </p>
//                 <h2 className="mt-1 text-xl font-bold">
//                   {selectedContract.project}
//                 </h2>
//               </div>
//               <button
//                 onClick={() => {
//                   setShowDetailsModal(false);
//                   setSelectedContract(null);
//                 }}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="grid grid-cols-2 gap-3 p-6">
//               <Info label="Client" value={selectedContract.client} />
//               <Info label="Designer" value={selectedContract.designer} />
//               <Info label="Type" value={selectedContract.projectType} />
//               <Info label="Created" value={selectedContract.createdDate} />
//               <Info label="Start" value={selectedContract.startDate} />
//               <Info label="End" value={selectedContract.endDate} />
//               <Info
//                 label="Value"
//                 value={formatCurrency(selectedContract.value)}
//               />
//               <Info
//                 label="Paid"
//                 value={formatCurrency(selectedContract.paid)}
//               />
//               <Info
//                 label="Pending"
//                 value={formatCurrency(selectedContract.pending)}
//               />
//               <div className="rounded-xl bg-[#fafaf8] p-3">
//                 <p className="text-xs text-gray-400">Status</p>
//                 <span
//                   className={`mt-1 inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                     selectedContract.status
//                   )}`}
//                 >
//                   {selectedContract.status}
//                 </span>
//               </div>
//             </div>

//             <div className="px-6 pb-2">
//               <p className="text-xs text-gray-400">Payment Terms</p>
//               <p className="mt-1 text-sm text-gray-700">
//                 {selectedContract.paymentTerms}
//               </p>
//             </div>

//             <div className="px-6 pb-2">
//               <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
//                 Update Status
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {statusOptions.map((status) => (
//                   <button
//                     key={status}
//                     onClick={() => changeStatus(selectedContract.id, status)}
//                     className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
//                       selectedContract.status === status
//                         ? statusClass(status)
//                         : "border-gray-200 text-gray-600 hover:bg-gray-50"
//                     }`}
//                   >
//                     {status}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {selectedContract.notes && (
//               <div className="mx-6 mb-4 rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
//                 {selectedContract.notes}
//               </div>
//             )}

//             <div className="flex flex-wrap gap-2 border-t border-[#e4e2da] px-6 py-4">
//               <button
//                 onClick={() => {
//                   setShowDetailsModal(false);
//                   openEditContract(selectedContract);
//                 }}
//                 className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => removeContract(selectedContract)}
//                 className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600"
//               >
//                 Delete
//               </button>
//               <button
//                 onClick={() => {
//                   setShowDetailsModal(false);
//                   setSelectedContract(null);
//                 }}
//                 className="ml-auto rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Create / Edit */}
//       {showContractModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-4">
//               <h2 className="text-lg font-bold">
//                 {editingContract ? "Edit Contract" : "New Contract"}
//               </h2>
//               <button
//                 onClick={() => {
//                   setShowContractModal(false);
//                   setEditingContract(null);
//                   resetForm();
//                 }}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="grid gap-4 p-6 sm:grid-cols-2">
//               <Field
//                 label="Client *"
//                 value={form.client}
//                 onChange={(v) => setForm((f) => ({ ...f, client: v }))}
//               />
//               <Field
//                 label="Project *"
//                 value={form.project}
//                 onChange={(v) => setForm((f) => ({ ...f, project: v }))}
//               />
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Project Type
//                 </label>
//                 <select
//                   value={form.projectType}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, projectType: e.target.value }))
//                   }
//                   className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   <option>Residential</option>
//                   <option>Commercial</option>
//                 </select>
//               </div>
//               <Field
//                 label="Designer"
//                 value={form.designer}
//                 onChange={(v) => setForm((f) => ({ ...f, designer: v }))}
//               />
//               <Field
//                 label="Start Date *"
//                 type="date"
//                 value={form.startDate}
//                 onChange={(v) => setForm((f) => ({ ...f, startDate: v }))}
//               />
//               <Field
//                 label="End Date *"
//                 type="date"
//                 value={form.endDate}
//                 onChange={(v) => setForm((f) => ({ ...f, endDate: v }))}
//               />
//               <Field
//                 label="Contract Value"
//                 type="number"
//                 value={form.value}
//                 onChange={(v) => setForm((f) => ({ ...f, value: v }))}
//               />
//               <Field
//                 label="Payment Terms"
//                 value={form.paymentTerms}
//                 onChange={(v) => setForm((f) => ({ ...f, paymentTerms: v }))}
//               />
//               <div className="sm:col-span-2">
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Notes
//                 </label>
//                 <textarea
//                   rows={3}
//                   value={form.notes}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, notes: e.target.value }))
//                   }
//                   className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//             </div>

//             <div className="flex justify-end gap-3 border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
//               <button
//                 onClick={() => {
//                   setShowContractModal(false);
//                   setEditingContract(null);
//                   resetForm();
//                 }}
//                 className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700"
//               >
//                 Cancel
//               </button>
//               <button
//                 disabled={saving}
//                 onClick={saveContract}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848] disabled:opacity-60"
//               >
//                 {saving
//                   ? "Saving…"
//                   : editingContract
//                   ? "Save Changes"
//                   : "Create Contract"}
//               </button>
//             </div>
//           </div>
//         </div>
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
  getAllContracts,
  createContract,
  updateContract,
  deleteContract as deleteContractFromDb,
  type InteriorContract,
} from "@/modules/interior/services/contractService";
import { Timestamp } from "firebase/firestore";
import { Plus } from "lucide-react";

type ContractStatus =
  | "Draft"
  | "Sent"
  | "Active"
  | "Completed"
  | "Expired"
  | "Cancelled";

type Contract = {
  id: string;
  contractNo: string;
  client: string;
  project: string;
  projectType: string;
  startDate: string;
  endDate: string;
  value: number;
  paid: number;
  pending: number;
  status: ContractStatus;
  paymentTerms: string;
  designer: string;
  createdDate: string;
  notes: string;
};

const tabs = ["All", "Active", "Completed", "Draft"] as const;

const statusOptions: ContractStatus[] = [
  "Draft",
  "Sent",
  "Active",
  "Completed",
  "Expired",
  "Cancelled",
];

function formatCurrency(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function statusClass(status: ContractStatus) {
  switch (status) {
    case "Draft":
      return "bg-gray-100 text-gray-700 border-gray-200";
    case "Sent":
      return "bg-blue-50 text-blue-700 border-blue-200";
    case "Active":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    case "Completed":
      return "bg-green-50 text-green-700 border-green-200";
    case "Expired":
      return "bg-amber-50 text-amber-700 border-amber-200";
    case "Cancelled":
      return "bg-red-50 text-red-700 border-red-200";
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

function normalizeStatus(raw?: string): ContractStatus {
  const s = (raw || "Draft").trim();
  if ((statusOptions as string[]).includes(s)) return s as ContractStatus;
  const lower = s.toLowerCase();
  if (lower.includes("active") || lower.includes("progress")) return "Active";
  if (lower.includes("complete") || lower.includes("done")) return "Completed";
  if (lower.includes("sent")) return "Sent";
  if (lower.includes("expir")) return "Expired";
  if (lower.includes("cancel")) return "Cancelled";
  return "Draft";
}

function mapToUi(c: InteriorContract): Contract {
  const value = Number(c.value ?? 0) || 0;
  const paid = Number(c.paid ?? 0) || 0;
  const pending =
    c.pending !== undefined && c.pending !== null
      ? Number(c.pending) || 0
      : Math.max(value - paid, 0);

  return {
    id: c.id,
    contractNo: c.contractNo || `AKR-CON-${c.id.slice(0, 6).toUpperCase()}`,
    client: c.client || c.clientName || "Unknown",
    project: c.project || c.projectName || "—",
    projectType: c.projectType || "Residential",
    startDate: c.startDate || "—",
    endDate: c.endDate || "—",
    value,
    paid,
    pending,
    status: normalizeStatus(c.status),
    paymentTerms:
      c.paymentTerms || "50% Advance / 30% Production / 20% Completion",
    designer: c.designer || "—",
    createdDate: c.createdDate || toDateString(c.createdAt) || "—",
    notes: c.notes || "",
  };
}

export default function InteriorContractsPage() {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | ContractStatus>(
    "All"
  );
  const [typeFilter, setTypeFilter] = useState("All");
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("All");

  const [selectedContract, setSelectedContract] = useState<Contract | null>(
    null
  );
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showContractModal, setShowContractModal] = useState(false);
  const [editingContract, setEditingContract] = useState<Contract | null>(null);

  const [form, setForm] = useState({
    client: "",
    project: "",
    projectType: "Residential",
    startDate: "",
    endDate: "",
    value: "",
    paymentTerms: "50% Advance / 30% Production / 20% Completion",
    designer: "Akrish Design Team",
    notes: "",
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const data = await getAllContracts();
        if (cancelled) return;
        setContracts(data.map(mapToUi));
      } catch (err) {
        console.error("Failed to load contracts:", err);
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
    if (!showDetailsModal && !showContractModal) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showDetailsModal, showContractModal]);

  const totalContracts = contracts.length;
  const activeContracts = contracts.filter((c) => c.status === "Active").length;
  const totalValue = contracts.reduce((s, c) => s + c.value, 0);
  const totalPending = contracts.reduce((s, c) => s + c.pending, 0);

  const filteredContracts = useMemo(() => {
    const query = search.toLowerCase().trim();

    return contracts.filter((contract) => {
      const matchesSearch =
        !query ||
        contract.contractNo.toLowerCase().includes(query) ||
        contract.client.toLowerCase().includes(query) ||
        contract.project.toLowerCase().includes(query) ||
        contract.designer.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "All" || contract.status === statusFilter;

      const matchesType =
        typeFilter === "All" || contract.projectType === typeFilter;

      const matchesTab =
        activeTab === "All" ||
        (activeTab === "Active" && contract.status === "Active") ||
        (activeTab === "Completed" && contract.status === "Completed") ||
        (activeTab === "Draft" && contract.status === "Draft");

      return matchesSearch && matchesStatus && matchesType && matchesTab;
    });
  }, [contracts, search, statusFilter, typeFilter, activeTab]);

  function resetForm() {
    setForm({
      client: "",
      project: "",
      projectType: "Residential",
      startDate: "",
      endDate: "",
      value: "",
      paymentTerms: "50% Advance / 30% Production / 20% Completion",
      designer: "Akrish Design Team",
      notes: "",
    });
  }

  function openNewContract() {
    setEditingContract(null);
    resetForm();
    setShowContractModal(true);
  }

  function openEditContract(contract: Contract) {
    setEditingContract(contract);
    setForm({
      client: contract.client,
      project: contract.project,
      projectType: contract.projectType,
      startDate: contract.startDate === "—" ? "" : contract.startDate,
      endDate: contract.endDate === "—" ? "" : contract.endDate,
      value: String(contract.value),
      paymentTerms: contract.paymentTerms,
      designer: contract.designer,
      notes: contract.notes,
    });
    setShowContractModal(true);
  }

  async function saveContract() {
    if (
      !form.client.trim() ||
      !form.project.trim() ||
      !form.startDate ||
      !form.endDate
    ) {
      window.alert("Please fill client, project, start date and end date.");
      return;
    }

    const value = Number(form.value) || 0;
    setSaving(true);

    try {
      if (editingContract) {
        const payload = {
          client: form.client.trim(),
          project: form.project.trim(),
          projectType: form.projectType,
          startDate: form.startDate,
          endDate: form.endDate,
          value,
          pending: Math.max(0, value - editingContract.paid),
          paymentTerms: form.paymentTerms,
          designer: form.designer.trim(),
          notes: form.notes.trim(),
        };

        await updateContract(editingContract.id, payload);

        setContracts((current) =>
          current.map((contract) =>
            contract.id === editingContract.id
              ? { ...contract, ...payload }
              : contract
          )
        );
      } else {
        const today = new Date().toISOString().slice(0, 10);
        const contractNo = `AKR-CON-${Date.now().toString().slice(-6)}`;

        const payload = {
          contractNo,
          client: form.client.trim(),
          project: form.project.trim(),
          projectType: form.projectType,
          startDate: form.startDate,
          endDate: form.endDate,
          value,
          paid: 0,
          pending: value,
          status: "Draft",
          paymentTerms: form.paymentTerms,
          designer: form.designer.trim(),
          createdDate: today,
          notes: form.notes.trim(),
        };

        const id = await createContract(payload);

        setContracts((current) => [
          {
            id,
            ...payload,
            status: "Draft" as ContractStatus,
          },
          ...current,
        ]);
      }

      setShowContractModal(false);
      resetForm();
      setEditingContract(null);
    } catch (err) {
      console.error(err);
      alert("Unable to save contract. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  async function changeStatus(id: string, status: ContractStatus) {
    setContracts((current) =>
      current.map((c) => (c.id === id ? { ...c, status } : c))
    );
    setSelectedContract((current) =>
      current && current.id === id ? { ...current, status } : current
    );

    try {
      await updateContract(id, { status });
    } catch (err) {
      console.error(err);
      try {
        const data = await getAllContracts();
        setContracts(data.map(mapToUi));
      } catch {
        /* ignore */
      }
    }
  }

  async function removeContract(contract: Contract) {
    const confirmed = window.confirm(
      `Delete contract "${contract.contractNo}"?`
    );
    if (!confirmed) return;

    setContracts((current) => current.filter((c) => c.id !== contract.id));
    setSelectedContract(null);
    setShowDetailsModal(false);

    try {
      await deleteContractFromDb(contract.id);
    } catch (err) {
      console.error(err);
      try {
        const data = await getAllContracts();
        setContracts(data.map(mapToUi));
      } catch {
        /* ignore */
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
      {/* Header: title + New Contract beside */}
      <div className="border-b border-[#e4e2da] bg-white">
        <div className="mx-auto max-w-[1600px] px-3 py-4 sm:px-5 sm:py-5 lg:px-8">
          <div className="flex items-start justify-between gap-3 sm:items-center">
            <div className="min-w-0 flex-1">
              <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
                Contracts
              </h1>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Manage interior project contracts and payment schedules.
                {loading && (
                  <span className="ml-2 text-[#176b5b]">Loading…</span>
                )}
              </p>
            </div>
            <button
              type="button"
              onClick={openNewContract}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125848] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
            >
              <Plus size={16} strokeWidth={2.5} />
              <span className="hidden sm:inline">New Contract</span>
              <span className="sm:hidden">New</span>
            </button>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[1600px] space-y-4 px-3 py-4 sm:space-y-6 sm:px-5 sm:py-6 lg:px-8">
        <section className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
          <SummaryCard
            label="Total Contracts"
            value={loading ? "…" : String(totalContracts)}
            helper={`${activeContracts} active`}
          />
          <SummaryCard
            label="Active"
            value={loading ? "…" : String(activeContracts)}
            helper="Currently running"
          />
          <SummaryCard
            label="Contract Value"
            value={loading ? "…" : formatCurrency(totalValue)}
            helper="All contracts"
          />
          <SummaryCard
            label="Pending"
            value={loading ? "…" : formatCurrency(totalPending)}
            helper="Outstanding amount"
          />
        </section>

        <section className="rounded-xl border border-[#e4e2da] bg-white p-1.5 sm:p-2">
          <div className="flex gap-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`shrink-0 whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold transition sm:px-4 sm:py-2.5 sm:text-sm ${
                  activeTab === tab
                    ? "bg-[#176b5b] text-white"
                    : "text-gray-600 hover:bg-[#f7f7f4]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search contract, client, project..."
              className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] sm:max-w-md sm:flex-1"
            />
            <div className="flex gap-2">
              <select
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(e.target.value as "All" | ContractStatus)
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
                onChange={(e) => setTypeFilter(e.target.value)}
                className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
              >
                <option value="All">All Types</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
          <div className="border-b border-[#e4e2da] px-4 py-3 sm:px-5 sm:py-4">
            <h2 className="font-semibold">Contract List</h2>
            <p className="mt-1 text-xs text-gray-500">
              {filteredContracts.length} records
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[1000px] text-left">
              <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
                <tr>
                  <th className="px-5 py-3 font-semibold">Contract</th>
                  <th className="px-4 py-3 font-semibold">Client</th>
                  <th className="px-4 py-3 font-semibold">Project</th>
                  <th className="px-4 py-3 font-semibold">Value</th>
                  <th className="px-4 py-3 font-semibold">Pending</th>
                  <th className="px-4 py-3 font-semibold">Period</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
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
                      Loading contracts…
                    </td>
                  </tr>
                ) : filteredContracts.length === 0 ? (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-5 py-12 text-center text-sm text-gray-500"
                    >
                      No contracts found.
                    </td>
                  </tr>
                ) : (
                  filteredContracts.map((contract) => (
                    <tr key={contract.id} className="hover:bg-[#fafaf8]">
                      <td className="px-5 py-4">
                        <p className="font-semibold text-[#176b5b]">
                          {contract.contractNo}
                        </p>
                        <p className="mt-0.5 text-xs text-gray-400">
                          {contract.createdDate}
                        </p>
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-900">
                        {contract.client}
                      </td>
                      <td className="px-4 py-4">
                        <p className="text-sm font-medium text-gray-800">
                          {contract.project}
                        </p>
                        <p className="text-xs text-gray-400">
                          {contract.projectType}
                        </p>
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold text-gray-900">
                        {formatCurrency(contract.value)}
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold text-orange-700">
                        {formatCurrency(contract.pending)}
                      </td>
                      <td className="px-4 py-4 text-xs text-gray-600">
                        {contract.startDate}
                        <br />
                        to {contract.endDate}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
                            contract.status
                          )}`}
                        >
                          {contract.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedContract(contract);
                              setShowDetailsModal(true);
                            }}
                            className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
                          >
                            View
                          </button>
                          <button
                            type="button"
                            onClick={() => openEditContract(contract)}
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
                Loading contracts…
              </p>
            ) : filteredContracts.length === 0 ? (
              <p className="py-10 text-center text-sm text-gray-500">
                No contracts found.
              </p>
            ) : (
              filteredContracts.map((contract) => (
                <article
                  key={contract.id}
                  className="rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="font-semibold text-[#176b5b]">
                        {contract.contractNo}
                      </p>
                      <p className="mt-0.5 truncate text-sm font-medium text-gray-900">
                        {contract.client}
                      </p>
                      <p className="mt-0.5 text-xs text-gray-500">
                        {contract.project} · {contract.projectType}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${statusClass(
                        contract.status
                      )}`}
                    >
                      {contract.status}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs">
                    <span className="font-semibold text-gray-900">
                      {formatCurrency(contract.value)}
                    </span>
                    <span className="text-orange-700">
                      Due {formatCurrency(contract.pending)}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-gray-500">
                    {contract.startDate} → {contract.endDate}
                  </p>
                  <div className="mt-3 flex gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedContract(contract);
                        setShowDetailsModal(true);
                      }}
                      className="flex-1 rounded-lg border border-gray-200 bg-white py-2 text-xs font-medium text-gray-700"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      onClick={() => openEditContract(contract)}
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

      {/* Details modal */}
      {showDetailsModal && selectedContract && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 sm:p-4">
          <div className="max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="sticky top-0 flex items-center justify-between border-b border-[#e4e2da] bg-white px-4 py-4 sm:px-6">
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[#176b5b]">
                  {selectedContract.contractNo}
                </p>
                <h2 className="mt-1 truncate text-lg font-bold sm:text-xl">
                  {selectedContract.project}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => {
                  setShowDetailsModal(false);
                  setSelectedContract(null);
                }}
                className="shrink-0 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 p-4 sm:gap-3 sm:p-6">
              <Info label="Client" value={selectedContract.client} />
              <Info label="Designer" value={selectedContract.designer} />
              <Info label="Type" value={selectedContract.projectType} />
              <Info label="Created" value={selectedContract.createdDate} />
              <Info label="Start" value={selectedContract.startDate} />
              <Info label="End" value={selectedContract.endDate} />
              <Info
                label="Value"
                value={formatCurrency(selectedContract.value)}
              />
              <Info
                label="Paid"
                value={formatCurrency(selectedContract.paid)}
              />
              <Info
                label="Pending"
                value={formatCurrency(selectedContract.pending)}
              />
              <div className="rounded-xl bg-[#fafaf8] p-3">
                <p className="text-xs text-gray-400">Status</p>
                <span
                  className={`mt-1 inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
                    selectedContract.status
                  )}`}
                >
                  {selectedContract.status}
                </span>
              </div>
            </div>

            <div className="px-4 pb-2 sm:px-6">
              <p className="text-xs text-gray-400">Payment Terms</p>
              <p className="mt-1 text-sm text-gray-700">
                {selectedContract.paymentTerms}
              </p>
            </div>

            <div className="px-4 pb-2 sm:px-6">
              <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
                Update Status
              </p>
              <div className="flex flex-wrap gap-2">
                {statusOptions.map((status) => (
                  <button
                    key={status}
                    type="button"
                    onClick={() => changeStatus(selectedContract.id, status)}
                    className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
                      selectedContract.status === status
                        ? statusClass(status)
                        : "border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {selectedContract.notes && (
              <div className="mx-4 mb-4 rounded-xl bg-gray-50 p-4 text-sm text-gray-700 sm:mx-6">
                {selectedContract.notes}
              </div>
            )}

            <div className="flex flex-wrap gap-2 border-t border-[#e4e2da] px-4 py-4 sm:px-6">
              <button
                type="button"
                onClick={() => {
                  setShowDetailsModal(false);
                  openEditContract(selectedContract);
                }}
                className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => removeContract(selectedContract)}
                className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600"
              >
                Delete
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowDetailsModal(false);
                  setSelectedContract(null);
                }}
                className="ml-auto rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create / Edit modal */}
      {showContractModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 sm:p-4">
          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="sticky top-0 flex items-center justify-between border-b border-[#e4e2da] bg-white px-4 py-4 sm:px-6">
              <h2 className="text-base font-bold sm:text-lg">
                {editingContract ? "Edit Contract" : "New Contract"}
              </h2>
              <button
                type="button"
                onClick={() => {
                  setShowContractModal(false);
                  setEditingContract(null);
                  resetForm();
                }}
                className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <div className="grid gap-3 p-4 sm:grid-cols-2 sm:gap-4 sm:p-6">
              <Field
                label="Client *"
                value={form.client}
                onChange={(v) => setForm((f) => ({ ...f, client: v }))}
              />
              <Field
                label="Project *"
                value={form.project}
                onChange={(v) => setForm((f) => ({ ...f, project: v }))}
              />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Project Type
                </label>
                <select
                  value={form.projectType}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, projectType: e.target.value }))
                  }
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                >
                  <option>Residential</option>
                  <option>Commercial</option>
                </select>
              </div>
              <Field
                label="Designer"
                value={form.designer}
                onChange={(v) => setForm((f) => ({ ...f, designer: v }))}
              />
              <Field
                label="Start Date *"
                type="date"
                value={form.startDate}
                onChange={(v) => setForm((f) => ({ ...f, startDate: v }))}
              />
              <Field
                label="End Date *"
                type="date"
                value={form.endDate}
                onChange={(v) => setForm((f) => ({ ...f, endDate: v }))}
              />
              <Field
                label="Contract Value"
                type="number"
                value={form.value}
                onChange={(v) => setForm((f) => ({ ...f, value: v }))}
              />
              <Field
                label="Payment Terms"
                value={form.paymentTerms}
                onChange={(v) => setForm((f) => ({ ...f, paymentTerms: v }))}
              />
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Notes
                </label>
                <textarea
                  rows={3}
                  value={form.notes}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, notes: e.target.value }))
                  }
                  className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                />
              </div>
            </div>

            <div className="flex flex-col-reverse gap-2 border-t border-[#e4e2da] bg-[#fafaf8] px-4 py-4 sm:flex-row sm:justify-end sm:gap-3 sm:px-6">
              <button
                type="button"
                onClick={() => {
                  setShowContractModal(false);
                  setEditingContract(null);
                  resetForm();
                }}
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={saving}
                onClick={saveContract}
                className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848] disabled:opacity-60"
              >
                {saving
                  ? "Saving…"
                  : editingContract
                    ? "Save Changes"
                    : "Create Contract"}
              </button>
            </div>
          </div>
        </div>
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
