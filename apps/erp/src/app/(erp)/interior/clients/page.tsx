// "use client";

// import { useMemo, useState } from "react";

// type ClientStatus = "Active" | "Lead" | "Inactive";

// type Client = {
//   id: string;
//   name: string;
//   company: string;
//   phone: string;
//   email: string;
//   location: string;
//   project: string;
//   projectType: string;
//   projectValue: number;
//   paid: number;
//   pending: number;
//   status: ClientStatus;
//   source: string;
//   lastContact: string;
//   joinedDate: string;
//   notes: string;
// };

// const initialClients: Client[] = [
//   {
//     id: "CL-1001",
//     name: "Rahul Kumar",
//     company: "Kumar Residence",
//     phone: "+91 98765 43210",
//     email: "rahul.kumar@email.com",
//     location: "Guntur",
//     project: "Luxury Home Interior",
//     projectType: "Residential",
//     projectValue: 850000,
//     paid: 510000,
//     pending: 340000,
//     status: "Active",
//     source: "Website",
//     lastContact: "2026-10-05",
//     joinedDate: "2026-08-12",
//     notes: "Complete interior design and furniture requirement.",
//   },
//   {
//     id: "CL-1002",
//     name: "Priya Sharma",
//     company: "Sharma Residence",
//     phone: "+91 91234 56789",
//     email: "priya.sharma@email.com",
//     location: "Vijayawada",
//     project: "3 BHK Interior",
//     projectType: "Residential",
//     projectValue: 620000,
//     paid: 310000,
//     pending: 310000,
//     status: "Active",
//     source: "Instagram",
//     lastContact: "2026-10-04",
//     joinedDate: "2026-08-28",
//     notes: "Kitchen, bedroom and living room interiors.",
//   },
//   {
//     id: "CL-1003",
//     name: "Suresh Reddy",
//     company: "Reddy Villa",
//     phone: "+91 99887 66554",
//     email: "suresh.reddy@email.com",
//     location: "Hyderabad",
//     project: "Modern Villa Interior",
//     projectType: "Residential",
//     projectValue: 1250000,
//     paid: 1000000,
//     pending: 250000,
//     status: "Active",
//     source: "Referral",
//     lastContact: "2026-10-03",
//     joinedDate: "2026-07-15",
//     notes: "Full villa interior with custom furniture.",
//   },
//   {
//     id: "CL-1004",
//     name: "Anjali Rao",
//     company: "Rao Residence",
//     phone: "+91 90000 12345",
//     email: "anjali.rao@email.com",
//     location: "Guntur",
//     project: "Apartment Interior",
//     projectType: "Residential",
//     projectValue: 480000,
//     paid: 480000,
//     pending: 0,
//     status: "Active",
//     source: "Walk-in",
//     lastContact: "2026-10-02",
//     joinedDate: "2026-06-22",
//     notes: "Apartment interior completed successfully.",
//   },
//   {
//     id: "CL-1005",
//     name: "Kiran Kumar",
//     company: "Kiran Office",
//     phone: "+91 95555 66777",
//     email: "kiran.kumar@company.com",
//     location: "Amaravati",
//     project: "Corporate Office Interior",
//     projectType: "Commercial",
//     projectValue: 980000,
//     paid: 490000,
//     pending: 490000,
//     status: "Active",
//     source: "Google",
//     lastContact: "2026-10-01",
//     joinedDate: "2026-08-03",
//     notes: "Office workstation, reception and meeting room.",
//   },
//   {
//     id: "CL-1006",
//     name: "Meghana Devi",
//     company: "Meghana Residence",
//     phone: "+91 94444 22111",
//     email: "meghana.devi@email.com",
//     location: "Vijayawada",
//     project: "2 BHK Interior",
//     projectType: "Residential",
//     projectValue: 390000,
//     paid: 150000,
//     pending: 240000,
//     status: "Lead",
//     source: "WhatsApp",
//     lastContact: "2026-09-30",
//     joinedDate: "2026-09-30",
//     notes: "Initial discussion completed. Waiting for site visit.",
//   },
//   {
//     id: "CL-1007",
//     name: "Vamsi Krishna",
//     company: "VK Business Center",
//     phone: "+91 93333 44555",
//     email: "vamsi.krishna@email.com",
//     location: "Hyderabad",
//     project: "Commercial Office",
//     projectType: "Commercial",
//     projectValue: 720000,
//     paid: 0,
//     pending: 720000,
//     status: "Lead",
//     source: "Website",
//     lastContact: "2026-09-28",
//     joinedDate: "2026-09-28",
//     notes: "Quotation shared. Follow-up required.",
//   },
//   {
//     id: "CL-1008",
//     name: "Sneha Reddy",
//     company: "Sneha Home",
//     phone: "+91 98888 77666",
//     email: "sneha.reddy@email.com",
//     location: "Guntur",
//     project: "Living Room Interior",
//     projectType: "Residential",
//     projectValue: 280000,
//     paid: 140000,
//     pending: 140000,
//     status: "Inactive",
//     source: "Facebook",
//     lastContact: "2026-09-15",
//     joinedDate: "2026-07-30",
//     notes: "Client requested to pause the project temporarily.",
//   },
// ];

// const projectTypes = [
//   "Residential",
//   "Commercial",
//   "Office",
//   "Retail",
//   "Other",
// ];

// const sources = [
//   "Website",
//   "Instagram",
//   "Facebook",
//   "Google",
//   "WhatsApp",
//   "Referral",
//   "Walk-in",
//   "Other",
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

// function statusClass(status: ClientStatus) {
//   switch (status) {
//     case "Active":
//       return "bg-[#eaf5f1] text-[#176b5b]";

//     case "Lead":
//       return "bg-[#fff5df] text-[#a36a00]";

//     case "Inactive":
//       return "bg-gray-100 text-gray-600";

//     default:
//       return "bg-gray-100 text-gray-600";
//   }
// }

// export default function InteriorClientsPage() {
//   const [clients, setClients] = useState<Client[]>(initialClients);

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [typeFilter, setTypeFilter] = useState("All");

//   const [selectedClient, setSelectedClient] = useState<Client | null>(null);
//   const [showClientModal, setShowClientModal] = useState(false);
//   const [showDetailsModal, setShowDetailsModal] = useState(false);
//   const [editingClient, setEditingClient] = useState<Client | null>(null);

//   const [activeTab, setActiveTab] = useState<
//     "All Clients" | "Active" | "Leads" | "Inactive"
//   >("All Clients");

//   const [form, setForm] = useState({
//     name: "",
//     company: "",
//     phone: "",
//     email: "",
//     location: "",
//     project: "",
//     projectType: "Residential",
//     projectValue: "",
//     source: "Website",
//     notes: "",
//   });

//   const totalClients = clients.length;

//   const activeClients = clients.filter(
//     (client) => client.status === "Active"
//   ).length;

//   const leadClients = clients.filter(
//     (client) => client.status === "Lead"
//   ).length;

//   const totalProjectValue = clients.reduce(
//     (sum, client) => sum + client.projectValue,
//     0
//   );

//   const totalPending = clients.reduce(
//     (sum, client) => sum + client.pending,
//     0
//   );

//   const filteredClients = useMemo(() => {
//     const query = search.toLowerCase().trim();

//     return clients.filter((client) => {
//       const matchesSearch =
//         !query ||
//         client.name.toLowerCase().includes(query) ||
//         client.company.toLowerCase().includes(query) ||
//         client.phone.toLowerCase().includes(query) ||
//         client.email.toLowerCase().includes(query) ||
//         client.project.toLowerCase().includes(query) ||
//         client.location.toLowerCase().includes(query);

//       const matchesStatus =
//         statusFilter === "All" || client.status === statusFilter;

//       const matchesType =
//         typeFilter === "All" || client.projectType === typeFilter;

//       const matchesTab =
//         activeTab === "All Clients" ||
//         (activeTab === "Active" && client.status === "Active") ||
//         (activeTab === "Leads" && client.status === "Lead") ||
//         (activeTab === "Inactive" && client.status === "Inactive");

//       return (
//         matchesSearch &&
//         matchesStatus &&
//         matchesType &&
//         matchesTab
//       );
//     });
//   }, [clients, search, statusFilter, typeFilter, activeTab]);

//   function resetForm() {
//     setForm({
//       name: "",
//       company: "",
//       phone: "",
//       email: "",
//       location: "",
//       project: "",
//       projectType: "Residential",
//       projectValue: "",
//       source: "Website",
//       notes: "",
//     });
//   }

//   function openNewClient() {
//     setEditingClient(null);
//     resetForm();
//     setShowClientModal(true);
//   }

//   function openEditClient(client: Client) {
//     setEditingClient(client);

//     setForm({
//       name: client.name,
//       company: client.company,
//       phone: client.phone,
//       email: client.email,
//       location: client.location,
//       project: client.project,
//       projectType: client.projectType,
//       projectValue: String(client.projectValue),
//       source: client.source,
//       notes: client.notes,
//     });

//     setShowClientModal(true);
//   }

//   function saveClient() {
//     if (!form.name.trim() || !form.phone.trim()) {
//       window.alert("Please enter client name and phone number.");
//       return;
//     }

//     const projectValue = Number(form.projectValue) || 0;

//     if (editingClient) {
//       setClients((current) =>
//         current.map((client) =>
//           client.id === editingClient.id
//             ? {
//                 ...client,
//                 name: form.name,
//                 company: form.company,
//                 phone: form.phone,
//                 email: form.email,
//                 location: form.location,
//                 project: form.project,
//                 projectType: form.projectType,
//                 projectValue,
//                 source: form.source,
//                 notes: form.notes,
//               }
//             : client
//         )
//       );
//     } else {
//       const newClient: Client = {
//         id: `CL-${1000 + clients.length + 1}`,
//         name: form.name,
//         company: form.company,
//         phone: form.phone,
//         email: form.email,
//         location: form.location,
//         project: form.project,
//         projectType: form.projectType,
//         projectValue,
//         paid: 0,
//         pending: projectValue,
//         status: "Lead",
//         source: form.source,
//         lastContact: new Date().toISOString().slice(0, 10),
//         joinedDate: new Date().toISOString().slice(0, 10),
//         notes: form.notes,
//       };

//       setClients((current) => [newClient, ...current]);
//     }

//     setShowClientModal(false);
//     resetForm();
//   }

//   function deleteClient(client: Client) {
//     const confirmed = window.confirm(
//       `Delete client "${client.name}"?`
//     );

//     if (!confirmed) return;

//     setClients((current) =>
//       current.filter((item) => item.id !== client.id)
//     );

//     setSelectedClient(null);
//     setShowDetailsModal(false);
//   }

//   function updateClientStatus(
//     clientId: string,
//     status: ClientStatus
//   ) {
//     setClients((current) =>
//       current.map((client) =>
//         client.id === clientId
//           ? { ...client, status }
//           : client
//       )
//     );

//     setSelectedClient((current) =>
//       current && current.id === clientId
//         ? { ...current, status }
//         : current
//     );
//   }

//   function openClientDetails(client: Client) {
//     setSelectedClient(client);
//     setShowDetailsModal(true);
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f7f4] text-[#242424]">
//       <div className="mx-auto max-w-[1500px] px-4 py-5 sm:px-6 lg:px-8">

//         {/* Header */}
//         <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//           <div>
//             <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
//               <span>Interior</span>
//               <span>/</span>
//               <span className="text-gray-800">Clients</span>
//             </div>

//             <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
//               Clients
//             </h1>

//             <p className="mt-1 text-sm text-gray-500">
//               Manage interior design clients, projects and payments.
//             </p>
//           </div>

//           <button
//             onClick={openNewClient}
//             className="rounded-xl bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#125848]"
//           >
//             + Add Client
//           </button>
//         </div>

//         {/* Summary Cards */}
//         <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="flex items-center justify-between">
//               <p className="text-sm text-gray-500">Total Clients</p>
//               <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f0f4f1] text-[#176b5b]">
//                 ♙
//               </div>
//             </div>

//             <p className="mt-3 text-3xl font-bold">{totalClients}</p>

//             <p className="mt-1 text-xs text-gray-400">
//               All registered clients
//             </p>
//           </div>

//           <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="flex items-center justify-between">
//               <p className="text-sm text-gray-500">Active Clients</p>
//               <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eaf5f1] text-[#176b5b]">
//                 ✓
//               </div>
//             </div>

//             <p className="mt-3 text-3xl font-bold">{activeClients}</p>

//             <p className="mt-1 text-xs text-[#176b5b]">
//               Active projects
//             </p>
//           </div>

//           <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="flex items-center justify-between">
//               <p className="text-sm text-gray-500">New Leads</p>
//               <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fff5df] text-[#a36a00]">
//                 +
//               </div>
//             </div>

//             <p className="mt-3 text-3xl font-bold">{leadClients}</p>

//             <p className="mt-1 text-xs text-[#a36a00]">
//               Need follow-up
//             </p>
//           </div>

//           <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="flex items-center justify-between">
//               <p className="text-sm text-gray-500">Project Value</p>
//               <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f3f0ea] text-[#9a5b18]">
//                 ₹
//               </div>
//             </div>

//             <p className="mt-3 text-3xl font-bold">
//               {formatCompactCurrency(totalProjectValue)}
//             </p>

//             <p className="mt-1 text-xs text-gray-400">
//               Total client projects
//             </p>
//           </div>
//         </section>

//         {/* Client Tabs */}
//         <div className="mb-5 overflow-x-auto rounded-2xl border border-[#e4e2da] bg-white p-1.5 shadow-sm">
//           <div className="flex min-w-max gap-1">
//             {[
//               "All Clients",
//               "Active",
//               "Leads",
//               "Inactive",
//             ].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() =>
//                   setActiveTab(
//                     tab as
//                       | "All Clients"
//                       | "Active"
//                       | "Leads"
//                       | "Inactive"
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
//         <section className="mb-5 rounded-2xl border border-[#e4e2da] bg-white p-4 shadow-sm">
//           <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_180px_180px_auto]">
//             <div className="relative">
//               <span className="absolute left-3 top-2.5 text-gray-400">
//                 ⌕
//               </span>

//               <input
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search clients, project, phone..."
//                 className="w-full rounded-xl border border-[#dddcd5] bg-white py-2.5 pl-9 pr-4 text-sm outline-none transition focus:border-[#176b5b]"
//               />
//             </div>

//             <select
//               value={statusFilter}
//               onChange={(e) => setStatusFilter(e.target.value)}
//               className="rounded-xl border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               <option value="All">All Status</option>
//               <option value="Active">Active</option>
//               <option value="Lead">Lead</option>
//               <option value="Inactive">Inactive</option>
//             </select>

//             <select
//               value={typeFilter}
//               onChange={(e) => setTypeFilter(e.target.value)}
//               className="rounded-xl border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               <option value="All">All Project Types</option>

//               {projectTypes.map((type) => (
//                 <option key={type} value={type}>
//                   {type}
//                 </option>
//               ))}
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

//         {/* Client Table */}
//         <section className="overflow-hidden rounded-2xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="flex flex-col gap-2 border-b border-[#eceae3] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
//             <div>
//               <h2 className="font-bold">Client List</h2>
//               <p className="mt-1 text-xs text-gray-500">
//                 {filteredClients.length} client
//                 {filteredClients.length === 1 ? "" : "s"} found
//               </p>
//             </div>

//             <div className="text-xs text-gray-500">
//               Pending:{" "}
//               <span className="font-bold text-[#b42318]">
//                 {formatCompactCurrency(totalPending)}
//               </span>
//             </div>
//           </div>

//           {filteredClients.length === 0 ? (
//             <div className="px-5 py-16 text-center">
//               <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-xl">
//                 ⌕
//               </div>

//               <h3 className="mt-4 font-bold">No clients found</h3>

//               <p className="mt-1 text-sm text-gray-500">
//                 Try changing your search or filters.
//               </p>
//             </div>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[1100px] text-left">
//                 <thead className="bg-[#fafaf7] text-xs uppercase tracking-wide text-gray-500">
//                   <tr>
//                     <th className="px-5 py-3 font-semibold">
//                       Client
//                     </th>
//                     <th className="px-5 py-3 font-semibold">
//                       Project
//                     </th>
//                     <th className="px-5 py-3 font-semibold">
//                       Contact
//                     </th>
//                     <th className="px-5 py-3 font-semibold">
//                       Project Value
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
//                   {filteredClients.map((client) => (
//                     <tr
//                       key={client.id}
//                       className="transition hover:bg-[#fcfcfa]"
//                     >
//                       <td className="px-5 py-4">
//                         <div className="flex items-center gap-3">
//                           <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eaf5f1] font-bold text-[#176b5b]">
//                             {client.name.charAt(0).toUpperCase()}
//                           </div>

//                           <div>
//                             <p className="text-sm font-bold">
//                               {client.name}
//                             </p>

//                             <p className="mt-0.5 text-xs text-gray-400">
//                               {client.id}
//                             </p>

//                             <p className="mt-0.5 text-xs text-gray-500">
//                               {client.location}
//                             </p>
//                           </div>
//                         </div>
//                       </td>

//                       <td className="px-5 py-4">
//                         <p className="text-sm font-semibold">
//                           {client.project}
//                         </p>

//                         <p className="mt-1 text-xs text-gray-400">
//                           {client.projectType}
//                         </p>
//                       </td>

//                       <td className="px-5 py-4">
//                         <p className="text-sm">{client.phone}</p>

//                         <p className="mt-1 text-xs text-gray-400">
//                           {client.email}
//                         </p>
//                       </td>

//                       <td className="px-5 py-4 text-sm font-semibold">
//                         {formatCurrency(client.projectValue)}
//                       </td>

//                       <td className="px-5 py-4">
//                         <p
//                           className={`text-sm font-semibold ${
//                             client.pending > 0
//                               ? "text-[#b42318]"
//                               : "text-[#176b5b]"
//                           }`}
//                         >
//                           {formatCurrency(client.pending)}
//                         </p>

//                         <p className="mt-1 text-xs text-gray-400">
//                           Paid: {formatCurrency(client.paid)}
//                         </p>
//                       </td>

//                       <td className="px-5 py-4">
//                         <span
//                           className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusClass(
//                             client.status
//                           )}`}
//                         >
//                           {client.status}
//                         </span>
//                       </td>

//                       <td className="px-5 py-4">
//                         <div className="flex justify-end gap-2">
//                           <button
//                             onClick={() => openClientDetails(client)}
//                             className="rounded-lg border border-[#dddcd5] px-3 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-50"
//                           >
//                             View
//                           </button>

//                           <button
//                             onClick={() => openEditClient(client)}
//                             className="rounded-lg bg-[#f1f6f3] px-3 py-1.5 text-xs font-semibold text-[#176b5b] hover:bg-[#e5efeb]"
//                           >
//                             Edit
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </section>

//         {/* Bottom Cards */}
//         <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
//           <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="mb-4">
//               <h2 className="font-bold">Payment Overview</h2>
//               <p className="mt-1 text-xs text-gray-500">
//                 Client project payment collection
//               </p>
//             </div>

//             <div className="mb-4 flex items-end justify-between">
//               <div>
//                 <p className="text-xs text-gray-500">
//                   Total Project Value
//                 </p>
//                 <p className="mt-1 text-2xl font-bold">
//                   {formatCompactCurrency(totalProjectValue)}
//                 </p>
//               </div>

//               <div className="text-right">
//                 <p className="text-xs text-gray-500">
//                   Pending
//                 </p>
//                 <p className="mt-1 text-xl font-bold text-[#b42318]">
//                   {formatCompactCurrency(totalPending)}
//                 </p>
//               </div>
//             </div>

//             <div className="h-3 overflow-hidden rounded-full bg-gray-100">
//               <div
//                 className="h-full rounded-full bg-[#176b5b]"
//                 style={{
//                   width: `${
//                     totalProjectValue > 0
//                       ? ((totalProjectValue - totalPending) /
//                           totalProjectValue) *
//                         100
//                       : 0
//                   }%`,
//                 }}
//               />
//             </div>

//             <p className="mt-2 text-xs text-gray-500">
//               {totalProjectValue > 0
//                 ? (
//                     ((totalProjectValue - totalPending) /
//                       totalProjectValue) *
//                     100
//                   ).toFixed(1)
//                 : 0}
//               % payment collected
//             </p>
//           </div>

//           <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="mb-4">
//               <h2 className="font-bold">Client Sources</h2>
//               <p className="mt-1 text-xs text-gray-500">
//                 Where your interior clients are coming from
//               </p>
//             </div>

//             <div className="space-y-3">
//               {sources.slice(0, 6).map((source) => {
//                 const count = clients.filter(
//                   (client) => client.source === source
//                 ).length;

//                 return (
//                   <div key={source}>
//                     <div className="mb-1 flex items-center justify-between">
//                       <span className="text-xs font-medium">
//                         {source}
//                       </span>

//                       <span className="text-xs text-gray-500">
//                         {count}
//                       </span>
//                     </div>

//                     <div className="h-2 rounded-full bg-gray-100">
//                       <div
//                         className="h-2 rounded-full bg-[#176b5b]"
//                         style={{
//                           width: `${Math.max(
//                             8,
//                             (count / Math.max(totalClients, 1)) * 100
//                           )}%`,
//                         }}
//                       />
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* Add / Edit Client Modal */}
//       {showClientModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-xl">
//             <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#e8e6df] bg-white px-5 py-4">
//               <div>
//                 <h2 className="font-bold">
//                   {editingClient ? "Edit Client" : "Add New Client"}
//                 </h2>

//                 <p className="mt-1 text-xs text-gray-500">
//                   {editingClient
//                     ? "Update client information."
//                     : "Create a new interior client record."}
//                 </p>
//               </div>

//               <button
//                 onClick={() => setShowClientModal(false)}
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
//                     value={form.name}
//                     onChange={(e) =>
//                       setForm({
//                         ...form,
//                         name: e.target.value,
//                       })
//                     }
//                     placeholder="Enter client name"
//                     className="w-full rounded-xl border border-[#dddcd5] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-gray-600">
//                     Company / Residence
//                   </label>

//                   <input
//                     value={form.company}
//                     onChange={(e) =>
//                       setForm({
//                         ...form,
//                         company: e.target.value,
//                       })
//                     }
//                     placeholder="Company or residence"
//                     className="w-full rounded-xl border border-[#dddcd5] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-gray-600">
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
//                     placeholder="+91 XXXXX XXXXX"
//                     className="w-full rounded-xl border border-[#dddcd5] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-gray-600">
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
//                     placeholder="client@email.com"
//                     className="w-full rounded-xl border border-[#dddcd5] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-gray-600">
//                     Location
//                   </label>

//                   <input
//                     value={form.location}
//                     onChange={(e) =>
//                       setForm({
//                         ...form,
//                         location: e.target.value,
//                       })
//                     }
//                     placeholder="City / Location"
//                     className="w-full rounded-xl border border-[#dddcd5] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-gray-600">
//                     Project Name
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
//                     {projectTypes.map((type) => (
//                       <option key={type} value={type}>
//                         {type}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-gray-600">
//                     Estimated Project Value
//                   </label>

//                   <input
//                     type="number"
//                     value={form.projectValue}
//                     onChange={(e) =>
//                       setForm({
//                         ...form,
//                         projectValue: e.target.value,
//                       })
//                     }
//                     placeholder="₹ 0"
//                     className="w-full rounded-xl border border-[#dddcd5] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-gray-600">
//                     Lead Source
//                   </label>

//                   <select
//                     value={form.source}
//                     onChange={(e) =>
//                       setForm({
//                         ...form,
//                         source: e.target.value,
//                       })
//                     }
//                     className="w-full rounded-xl border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     {sources.map((source) => (
//                       <option key={source} value={source}>
//                         {source}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-xs font-semibold text-gray-600">
//                   Notes
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
//                   placeholder="Add client or project notes..."
//                   className="w-full resize-none rounded-xl border border-[#dddcd5] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>

//               <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
//                 <button
//                   onClick={() => setShowClientModal(false)}
//                   className="rounded-xl border border-[#dddcd5] px-5 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-50"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   onClick={saveClient}
//                   className="rounded-xl bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//                 >
//                   {editingClient ? "Save Changes" : "Create Client"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Client Details Modal */}
//       {showDetailsModal && selectedClient && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-xl">
//             <div className="flex items-center justify-between border-b border-[#e8e6df] px-5 py-4">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eaf5f1] font-bold text-[#176b5b]">
//                   {selectedClient.name.charAt(0).toUpperCase()}
//                 </div>

//                 <div>
//                   <h2 className="font-bold">
//                     {selectedClient.name}
//                   </h2>

//                   <p className="mt-1 text-xs text-gray-500">
//                     {selectedClient.id} • {selectedClient.company}
//                   </p>
//                 </div>
//               </div>

//               <button
//                 onClick={() => setShowDetailsModal(false)}
//                 className="rounded-lg px-2 py-1 text-xl text-gray-400 hover:bg-gray-100"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="space-y-5 p-5">
//               {/* Client Info */}
//               <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
//                 <div className="rounded-xl bg-[#f8f8f5] p-4">
//                   <p className="text-xs text-gray-500">
//                     Phone
//                   </p>
//                   <p className="mt-1 text-sm font-semibold">
//                     {selectedClient.phone}
//                   </p>
//                 </div>

//                 <div className="rounded-xl bg-[#f8f8f5] p-4">
//                   <p className="text-xs text-gray-500">
//                     Email
//                   </p>
//                   <p className="mt-1 break-all text-sm font-semibold">
//                     {selectedClient.email || "Not provided"}
//                   </p>
//                 </div>

//                 <div className="rounded-xl bg-[#f8f8f5] p-4">
//                   <p className="text-xs text-gray-500">
//                     Location
//                   </p>
//                   <p className="mt-1 text-sm font-semibold">
//                     {selectedClient.location || "Not provided"}
//                   </p>
//                 </div>

//                 <div className="rounded-xl bg-[#f8f8f5] p-4">
//                   <p className="text-xs text-gray-500">
//                     Source
//                   </p>
//                   <p className="mt-1 text-sm font-semibold">
//                     {selectedClient.source}
//                   </p>
//                 </div>
//               </div>

//               {/* Project */}
//               <div className="rounded-2xl border border-[#e4e2da] p-5">
//                 <div className="mb-4 flex items-center justify-between">
//                   <div>
//                     <h3 className="font-bold">Project Details</h3>
//                     <p className="mt-1 text-xs text-gray-500">
//                       Current interior project
//                     </p>
//                   </div>

//                   <span
//                     className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusClass(
//                       selectedClient.status
//                     )}`}
//                   >
//                     {selectedClient.status}
//                   </span>
//                 </div>

//                 <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
//                   <div>
//                     <p className="text-xs text-gray-500">
//                       Project
//                     </p>
//                     <p className="mt-1 text-sm font-semibold">
//                       {selectedClient.project}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-xs text-gray-500">
//                       Type
//                     </p>
//                     <p className="mt-1 text-sm font-semibold">
//                       {selectedClient.projectType}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-xs text-gray-500">
//                       Joined
//                     </p>
//                     <p className="mt-1 text-sm font-semibold">
//                       {selectedClient.joinedDate}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Payment */}
//               <div className="rounded-2xl border border-[#e4e2da] p-5">
//                 <h3 className="font-bold">Payment Summary</h3>

//                 <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
//                   <div className="rounded-xl bg-[#f8f8f5] p-4">
//                     <p className="text-xs text-gray-500">
//                       Project Value
//                     </p>
//                     <p className="mt-1 text-lg font-bold">
//                       {formatCurrency(
//                         selectedClient.projectValue
//                       )}
//                     </p>
//                   </div>

//                   <div className="rounded-xl bg-[#eaf5f1] p-4">
//                     <p className="text-xs text-gray-500">
//                       Paid
//                     </p>
//                     <p className="mt-1 text-lg font-bold text-[#176b5b]">
//                       {formatCurrency(selectedClient.paid)}
//                     </p>
//                   </div>

//                   <div className="rounded-xl bg-[#fdecec] p-4">
//                     <p className="text-xs text-gray-500">
//                       Pending
//                     </p>
//                     <p className="mt-1 text-lg font-bold text-[#b42318]">
//                       {formatCurrency(selectedClient.pending)}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Notes */}
//               <div className="rounded-2xl border border-[#e4e2da] p-5">
//                 <h3 className="font-bold">Notes</h3>

//                 <p className="mt-2 text-sm leading-6 text-gray-600">
//                   {selectedClient.notes || "No notes added."}
//                 </p>
//               </div>

//               {/* Status Controls */}
//               <div className="rounded-2xl border border-[#e4e2da] p-5">
//                 <h3 className="font-bold">Update Client Status</h3>

//                 <div className="mt-3 flex flex-wrap gap-2">
//                   {(
//                     ["Active", "Lead", "Inactive"] as ClientStatus[]
//                   ).map((status) => (
//                     <button
//                       key={status}
//                       onClick={() =>
//                         updateClientStatus(
//                           selectedClient.id,
//                           status
//                         )
//                       }
//                       className={`rounded-xl px-4 py-2 text-sm font-semibold ${
//                         selectedClient.status === status
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
//                   onClick={() => deleteClient(selectedClient)}
//                   className="rounded-xl border border-[#f1caca] px-5 py-2.5 text-sm font-semibold text-[#b42318] hover:bg-[#fff5f5]"
//                 >
//                   Delete Client
//                 </button>

//                 <div className="flex flex-col gap-2 sm:flex-row">
//                   <button
//                     onClick={() => {
//                       setShowDetailsModal(false);
//                       openEditClient(selectedClient);
//                     }}
//                     className="rounded-xl border border-[#dddcd5] px-5 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-50"
//                   >
//                     Edit Client
//                   </button>

//                   <button
//                     onClick={() => setShowDetailsModal(false)}
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
//     </main>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAllClients,
//   createClient,
//   updateClient,
//   deleteClient as deleteClientFromDb,
//   type InteriorClient,
// } from "@/modules/interior/services/clientService";
// import { Timestamp } from "firebase/firestore";

// type ClientStatus = "Active" | "Lead" | "Inactive";

// type Client = {
//   id: string;
//   name: string;
//   company: string;
//   phone: string;
//   email: string;
//   location: string;
//   project: string;
//   projectType: string;
//   projectValue: number;
//   paid: number;
//   pending: number;
//   status: ClientStatus;
//   source: string;
//   lastContact: string;
//   joinedDate: string;
//   notes: string;
// };

// const tabs = ["All Clients", "Active", "Leads", "Inactive"] as const;

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function statusClass(status: ClientStatus) {
//   if (status === "Active") return "bg-green-50 text-green-700 border-green-200";
//   if (status === "Lead") return "bg-blue-50 text-blue-700 border-blue-200";
//   return "bg-gray-100 text-gray-600 border-gray-200";
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

// function normalizeStatus(raw?: string): ClientStatus {
//   const s = (raw || "Active").toLowerCase();
//   if (s.includes("lead") || s === "new") return "Lead";
//   if (s.includes("inactive") || s.includes("closed")) return "Inactive";
//   return "Active";
// }

// function mapToUi(c: InteriorClient): Client {
//   const projectValue = Number(c.projectValue ?? c.value ?? 0) || 0;
//   const paid = Number(c.paid ?? 0) || 0;
//   const pending =
//     c.pending !== undefined && c.pending !== null
//       ? Number(c.pending) || 0
//       : Math.max(projectValue - paid, 0);

//   return {
//     id: c.clientId || c.id,
//     name: c.name || "Unknown",
//     company: c.company || "",
//     phone: c.phone || "—",
//     email: c.email || "",
//     location: c.location || "—",
//     project: c.project || c.projectName || "—",
//     projectType: c.projectType || "Residential",
//     projectValue,
//     paid,
//     pending,
//     status: normalizeStatus(c.status),
//     source: c.source || "Website",
//     lastContact: c.lastContact || toDateString(c.updatedAt || c.createdAt) || "—",
//     joinedDate: c.joinedDate || toDateString(c.createdAt) || "—",
//     notes: c.notes || "",
//   };
// }

// export default function InteriorClientsPage() {
//   const [clients, setClients] = useState<Client[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState<"All" | ClientStatus>("All");
//   const [typeFilter, setTypeFilter] = useState("All");
//   const [activeTab, setActiveTab] =
//     useState<(typeof tabs)[number]>("All Clients");

//   const [selectedClient, setSelectedClient] = useState<Client | null>(null);
//   const [showDetailsModal, setShowDetailsModal] = useState(false);
//   const [showClientModal, setShowClientModal] = useState(false);
//   const [editingClient, setEditingClient] = useState<Client | null>(null);

//   const [form, setForm] = useState({
//     name: "",
//     company: "",
//     phone: "",
//     email: "",
//     location: "",
//     project: "",
//     projectType: "Residential",
//     projectValue: "",
//     source: "Website",
//     notes: "",
//   });

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllClients();
//         if (cancelled) return;
//         setClients(data.map(mapToUi));
//       } catch (err) {
//         console.error("Failed to load clients:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const totalClients = clients.length;
//   const activeClients = clients.filter((c) => c.status === "Active").length;
//   const leadClients = clients.filter((c) => c.status === "Lead").length;
//   const totalProjectValue = clients.reduce((s, c) => s + c.projectValue, 0);
//   const totalPending = clients.reduce((s, c) => s + c.pending, 0);

//   const filteredClients = useMemo(() => {
//     const query = search.toLowerCase().trim();

//     return clients.filter((client) => {
//       const matchesSearch =
//         !query ||
//         client.name.toLowerCase().includes(query) ||
//         client.company.toLowerCase().includes(query) ||
//         client.phone.toLowerCase().includes(query) ||
//         client.email.toLowerCase().includes(query) ||
//         client.project.toLowerCase().includes(query) ||
//         client.location.toLowerCase().includes(query);

//       const matchesStatus =
//         statusFilter === "All" || client.status === statusFilter;

//       const matchesType =
//         typeFilter === "All" || client.projectType === typeFilter;

//       const matchesTab =
//         activeTab === "All Clients" ||
//         (activeTab === "Active" && client.status === "Active") ||
//         (activeTab === "Leads" && client.status === "Lead") ||
//         (activeTab === "Inactive" && client.status === "Inactive");

//       return matchesSearch && matchesStatus && matchesType && matchesTab;
//     });
//   }, [clients, search, statusFilter, typeFilter, activeTab]);

//   function resetForm() {
//     setForm({
//       name: "",
//       company: "",
//       phone: "",
//       email: "",
//       location: "",
//       project: "",
//       projectType: "Residential",
//       projectValue: "",
//       source: "Website",
//       notes: "",
//     });
//   }

//   function openNewClient() {
//     setEditingClient(null);
//     resetForm();
//     setShowClientModal(true);
//   }

//   function openEditClient(client: Client) {
//     setEditingClient(client);
//     setForm({
//       name: client.name,
//       company: client.company,
//       phone: client.phone,
//       email: client.email,
//       location: client.location,
//       project: client.project,
//       projectType: client.projectType,
//       projectValue: String(client.projectValue),
//       source: client.source,
//       notes: client.notes,
//     });
//     setShowClientModal(true);
//   }

//   async function saveClient() {
//     if (!form.name.trim() || !form.phone.trim()) {
//       window.alert("Please enter client name and phone number.");
//       return;
//     }

//     const projectValue = Number(form.projectValue) || 0;
//     setSaving(true);

//     try {
//       if (editingClient) {
//         const payload = {
//           name: form.name.trim(),
//           company: form.company.trim(),
//           phone: form.phone.trim(),
//           email: form.email.trim(),
//           location: form.location.trim(),
//           project: form.project.trim(),
//           projectType: form.projectType,
//           projectValue,
//           source: form.source,
//           notes: form.notes.trim(),
//         };

//         await updateClient(editingClient.id, payload);

//         setClients((current) =>
//           current.map((client) =>
//             client.id === editingClient.id
//               ? {
//                   ...client,
//                   ...payload,
//                   pending: Math.max(projectValue - client.paid, 0),
//                 }
//               : client
//           )
//         );
//       } else {
//         const today = new Date().toISOString().slice(0, 10);
//         const payload = {
//           name: form.name.trim(),
//           company: form.company.trim(),
//           phone: form.phone.trim(),
//           email: form.email.trim(),
//           location: form.location.trim(),
//           project: form.project.trim(),
//           projectType: form.projectType,
//           projectValue,
//           paid: 0,
//           pending: projectValue,
//           status: "Lead",
//           source: form.source,
//           lastContact: today,
//           joinedDate: today,
//           notes: form.notes.trim(),
//         };

//         const id = await createClient(payload);

//         setClients((current) => [
//           {
//             id,
//             ...payload,
//             status: "Lead" as ClientStatus,
//           },
//           ...current,
//         ]);
//       }

//       setShowClientModal(false);
//       resetForm();
//       setEditingClient(null);
//     } catch (err) {
//       console.error(err);
//       alert("Unable to save client. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function removeClient(client: Client) {
//     const confirmed = window.confirm(`Delete client "${client.name}"?`);
//     if (!confirmed) return;

//     setClients((current) => current.filter((item) => item.id !== client.id));
//     setSelectedClient(null);
//     setShowDetailsModal(false);

//     try {
//       await deleteClientFromDb(client.id);
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllClients();
//         setClients(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   async function updateClientStatus(clientId: string, status: ClientStatus) {
//     setClients((current) =>
//       current.map((client) =>
//         client.id === clientId ? { ...client, status } : client
//       )
//     );

//     setSelectedClient((current) =>
//       current && current.id === clientId ? { ...current, status } : current
//     );

//     try {
//       await updateClient(clientId, { status });
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllClients();
//         setClients(data.map(mapToUi));
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
//               <h1 className="text-2xl font-bold tracking-tight">Clients</h1>
//               <p className="mt-1 text-sm text-gray-500">
//                 Manage interior clients, project values and outstanding amounts.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <button
//               onClick={openNewClient}
//               className="rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#125848]"
//             >
//               + Add Client
//             </button>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-6 px-5 py-6 lg:px-8">
//         <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <SummaryCard
//             label="Total Clients"
//             value={loading ? "…" : String(totalClients)}
//             helper={`${activeClients} active · ${leadClients} leads`}
//           />
//           <SummaryCard
//             label="Active Clients"
//             value={loading ? "…" : String(activeClients)}
//             helper="Currently engaged"
//           />
//           <SummaryCard
//             label="Project Value"
//             value={loading ? "…" : formatCurrency(totalProjectValue)}
//             helper="Across all clients"
//           />
//           <SummaryCard
//             label="Pending Amount"
//             value={loading ? "…" : formatCurrency(totalPending)}
//             helper="Outstanding collections"
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
//               placeholder="Search client, phone, project, location..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-4 py-2.5 text-sm outline-none focus:border-[#176b5b] lg:max-w-md"
//             />
//             <select
//               value={statusFilter}
//               onChange={(e) =>
//                 setStatusFilter(e.target.value as "All" | ClientStatus)
//               }
//               className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               <option value="All">All Status</option>
//               <option value="Active">Active</option>
//               <option value="Lead">Lead</option>
//               <option value="Inactive">Inactive</option>
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
//             <h2 className="font-semibold">Client Directory</h2>
//             <p className="mt-1 text-xs text-gray-500">
//               {filteredClients.length} clients
//             </p>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1100px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Client</th>
//                   <th className="px-4 py-3 font-semibold">Project</th>
//                   <th className="px-4 py-3 font-semibold">Value</th>
//                   <th className="px-4 py-3 font-semibold">Paid</th>
//                   <th className="px-4 py-3 font-semibold">Pending</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
//                   <th className="px-4 py-3 font-semibold">Last Contact</th>
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
//                       Loading clients…
//                     </td>
//                   </tr>
//                 ) : (
//                   <>
//                     {filteredClients.map((client) => (
//                       <tr key={client.id} className="hover:bg-[#fafaf8]">
//                         <td className="px-5 py-4">
//                           <p className="font-semibold text-gray-900">
//                             {client.name}
//                           </p>
//                           <p className="mt-0.5 text-xs text-gray-500">
//                             {client.phone}
//                           </p>
//                           <p className="text-xs text-gray-400">
//                             {client.location}
//                           </p>
//                         </td>
//                         <td className="px-4 py-4">
//                           <p className="text-sm font-medium text-gray-800">
//                             {client.project}
//                           </p>
//                           <p className="text-xs text-gray-400">
//                             {client.projectType}
//                           </p>
//                         </td>
//                         <td className="px-4 py-4 text-sm font-semibold text-gray-900">
//                           {formatCurrency(client.projectValue)}
//                         </td>
//                         <td className="px-4 py-4 text-sm font-medium text-green-700">
//                           {formatCurrency(client.paid)}
//                         </td>
//                         <td className="px-4 py-4 text-sm font-semibold text-orange-700">
//                           {formatCurrency(client.pending)}
//                         </td>
//                         <td className="px-4 py-4">
//                           <span
//                             className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${statusClass(
//                               client.status
//                             )}`}
//                           >
//                             {client.status}
//                           </span>
//                         </td>
//                         <td className="px-4 py-4 text-sm text-gray-600">
//                           {client.lastContact}
//                         </td>
//                         <td className="px-4 py-4 text-right">
//                           <div className="flex justify-end gap-2">
//                             <button
//                               onClick={() => {
//                                 setSelectedClient(client);
//                                 setShowDetailsModal(true);
//                               }}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                             >
//                               View
//                             </button>
//                             <button
//                               onClick={() => openEditClient(client)}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50"
//                             >
//                               Edit
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                     {filteredClients.length === 0 && (
//                       <tr>
//                         <td
//                           colSpan={8}
//                           className="px-5 py-12 text-center text-sm text-gray-500"
//                         >
//                           No clients found.
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

//       {/* Details modal */}
//       {showDetailsModal && selectedClient && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-4">
//               <div>
//                 <p className="text-xs font-semibold text-[#176b5b]">
//                   {selectedClient.id}
//                 </p>
//                 <h2 className="mt-1 text-xl font-bold">
//                   {selectedClient.name}
//                 </h2>
//               </div>
//               <button
//                 onClick={() => {
//                   setShowDetailsModal(false);
//                   setSelectedClient(null);
//                 }}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="grid grid-cols-2 gap-3 p-6">
//               <Info label="Company" value={selectedClient.company || "—"} />
//               <Info label="Phone" value={selectedClient.phone} />
//               <Info label="Email" value={selectedClient.email || "—"} />
//               <Info label="Location" value={selectedClient.location} />
//               <Info label="Project" value={selectedClient.project} />
//               <Info label="Type" value={selectedClient.projectType} />
//               <Info
//                 label="Project Value"
//                 value={formatCurrency(selectedClient.projectValue)}
//               />
//               <Info
//                 label="Paid"
//                 value={formatCurrency(selectedClient.paid)}
//               />
//               <Info
//                 label="Pending"
//                 value={formatCurrency(selectedClient.pending)}
//               />
//               <Info label="Source" value={selectedClient.source} />
//               <Info label="Joined" value={selectedClient.joinedDate} />
//               <Info label="Last Contact" value={selectedClient.lastContact} />
//             </div>

//             <div className="px-6 pb-2">
//               <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
//                 Status
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {(["Active", "Lead", "Inactive"] as ClientStatus[]).map(
//                   (status) => (
//                     <button
//                       key={status}
//                       onClick={() =>
//                         updateClientStatus(selectedClient.id, status)
//                       }
//                       className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
//                         selectedClient.status === status
//                           ? statusClass(status)
//                           : "border-gray-200 text-gray-600 hover:bg-gray-50"
//                       }`}
//                     >
//                       {status}
//                     </button>
//                   )
//                 )}
//               </div>
//             </div>

//             {selectedClient.notes && (
//               <div className="mx-6 mb-4 rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
//                 {selectedClient.notes}
//               </div>
//             )}

//             <div className="flex flex-wrap gap-2 border-t border-[#e4e2da] px-6 py-4">
//               <button
//                 onClick={() => {
//                   setShowDetailsModal(false);
//                   openEditClient(selectedClient);
//                 }}
//                 className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => removeClient(selectedClient)}
//                 className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600"
//               >
//                 Delete
//               </button>
//               <button
//                 onClick={() => {
//                   setShowDetailsModal(false);
//                   setSelectedClient(null);
//                 }}
//                 className="ml-auto rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Add / Edit modal */}
//       {showClientModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-4">
//               <h2 className="text-lg font-bold">
//                 {editingClient ? "Edit Client" : "Add Client"}
//               </h2>
//               <button
//                 onClick={() => {
//                   setShowClientModal(false);
//                   setEditingClient(null);
//                   resetForm();
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
//               <Field
//                 label="Company"
//                 value={form.company}
//                 onChange={(v) => setForm((f) => ({ ...f, company: v }))}
//               />
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
//                 label="Location"
//                 value={form.location}
//                 onChange={(v) => setForm((f) => ({ ...f, location: v }))}
//               />
//               <Field
//                 label="Project"
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
//                 label="Project Value"
//                 type="number"
//                 value={form.projectValue}
//                 onChange={(v) => setForm((f) => ({ ...f, projectValue: v }))}
//               />
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Source
//                 </label>
//                 <select
//                   value={form.source}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, source: e.target.value }))
//                   }
//                   className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   <option>Website</option>
//                   <option>Instagram</option>
//                   <option>Facebook</option>
//                   <option>Google</option>
//                   <option>WhatsApp</option>
//                   <option>Referral</option>
//                   <option>Walk-in</option>
//                   <option>Other</option>
//                 </select>
//               </div>
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
//                   setShowClientModal(false);
//                   setEditingClient(null);
//                   resetForm();
//                 }}
//                 className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700"
//               >
//                 Cancel
//               </button>
//               <button
//                 disabled={saving}
//                 onClick={saveClient}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848] disabled:opacity-60"
//               >
//                 {saving ? "Saving…" : editingClient ? "Save Changes" : "Add Client"}
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
  getAllClients,
  createClient,
  updateClient,
  deleteClient as deleteClientFromDb,
  type InteriorClient,
} from "@/modules/interior/services/clientService";
import { Timestamp } from "firebase/firestore";
import { Plus } from "lucide-react";

type ClientStatus = "Active" | "Lead" | "Inactive";

type Client = {
  id: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  location: string;
  project: string;
  projectType: string;
  projectValue: number;
  paid: number;
  pending: number;
  status: ClientStatus;
  source: string;
  lastContact: string;
  joinedDate: string;
  notes: string;
};

const tabs = ["All Clients", "Active", "Leads", "Inactive"] as const;

function formatCurrency(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function statusClass(status: ClientStatus) {
  if (status === "Active") return "bg-green-50 text-green-700 border-green-200";
  if (status === "Lead") return "bg-blue-50 text-blue-700 border-blue-200";
  return "bg-gray-100 text-gray-600 border-gray-200";
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

function normalizeStatus(raw?: string): ClientStatus {
  const s = (raw || "Active").toLowerCase();
  if (s.includes("lead") || s === "new") return "Lead";
  if (s.includes("inactive") || s.includes("closed")) return "Inactive";
  return "Active";
}

function mapToUi(c: InteriorClient): Client {
  const projectValue = Number(c.projectValue ?? c.value ?? 0) || 0;
  const paid = Number(c.paid ?? 0) || 0;
  const pending =
    c.pending !== undefined && c.pending !== null
      ? Number(c.pending) || 0
      : Math.max(projectValue - paid, 0);

  return {
    id: c.clientId || c.id,
    name: c.name || "Unknown",
    company: c.company || "",
    phone: c.phone || "—",
    email: c.email || "",
    location: c.location || "—",
    project: c.project || c.projectName || "—",
    projectType: c.projectType || "Residential",
    projectValue,
    paid,
    pending,
    status: normalizeStatus(c.status),
    source: c.source || "Website",
    lastContact:
      c.lastContact || toDateString(c.updatedAt || c.createdAt) || "—",
    joinedDate: c.joinedDate || toDateString(c.createdAt) || "—",
    notes: c.notes || "",
  };
}

export default function InteriorClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | ClientStatus>("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [activeTab, setActiveTab] =
    useState<(typeof tabs)[number]>("All Clients");

  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showClientModal, setShowClientModal] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | null>(null);

  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    location: "",
    project: "",
    projectType: "Residential",
    projectValue: "",
    source: "Website",
    notes: "",
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const data = await getAllClients();
        if (cancelled) return;
        setClients(data.map(mapToUi));
      } catch (err) {
        console.error("Failed to load clients:", err);
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
    if (!showClientModal && !showDetailsModal) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showClientModal, showDetailsModal]);

  const totalClients = clients.length;
  const activeClients = clients.filter((c) => c.status === "Active").length;
  const leadClients = clients.filter((c) => c.status === "Lead").length;
  const totalProjectValue = clients.reduce((s, c) => s + c.projectValue, 0);
  const totalPending = clients.reduce((s, c) => s + c.pending, 0);

  const filteredClients = useMemo(() => {
    const query = search.toLowerCase().trim();

    return clients.filter((client) => {
      const matchesSearch =
        !query ||
        client.name.toLowerCase().includes(query) ||
        client.company.toLowerCase().includes(query) ||
        client.phone.toLowerCase().includes(query) ||
        client.email.toLowerCase().includes(query) ||
        client.project.toLowerCase().includes(query) ||
        client.location.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "All" || client.status === statusFilter;

      const matchesType =
        typeFilter === "All" || client.projectType === typeFilter;

      const matchesTab =
        activeTab === "All Clients" ||
        (activeTab === "Active" && client.status === "Active") ||
        (activeTab === "Leads" && client.status === "Lead") ||
        (activeTab === "Inactive" && client.status === "Inactive");

      return matchesSearch && matchesStatus && matchesType && matchesTab;
    });
  }, [clients, search, statusFilter, typeFilter, activeTab]);

  function resetForm() {
    setForm({
      name: "",
      company: "",
      phone: "",
      email: "",
      location: "",
      project: "",
      projectType: "Residential",
      projectValue: "",
      source: "Website",
      notes: "",
    });
  }

  function openNewClient() {
    setEditingClient(null);
    resetForm();
    setShowClientModal(true);
  }

  function openEditClient(client: Client) {
    setEditingClient(client);
    setForm({
      name: client.name,
      company: client.company,
      phone: client.phone,
      email: client.email,
      location: client.location,
      project: client.project,
      projectType: client.projectType,
      projectValue: String(client.projectValue),
      source: client.source,
      notes: client.notes,
    });
    setShowClientModal(true);
  }

  async function saveClient() {
    if (!form.name.trim() || !form.phone.trim()) {
      window.alert("Please enter client name and phone number.");
      return;
    }

    const projectValue = Number(form.projectValue) || 0;
    setSaving(true);

    try {
      if (editingClient) {
        const payload = {
          name: form.name.trim(),
          company: form.company.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          location: form.location.trim(),
          project: form.project.trim(),
          projectType: form.projectType,
          projectValue,
          source: form.source,
          notes: form.notes.trim(),
        };

        await updateClient(editingClient.id, payload);

        setClients((current) =>
          current.map((client) =>
            client.id === editingClient.id
              ? {
                  ...client,
                  ...payload,
                  pending: Math.max(projectValue - client.paid, 0),
                }
              : client
          )
        );
      } else {
        const today = new Date().toISOString().slice(0, 10);
        const payload = {
          name: form.name.trim(),
          company: form.company.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          location: form.location.trim(),
          project: form.project.trim(),
          projectType: form.projectType,
          projectValue,
          paid: 0,
          pending: projectValue,
          status: "Lead",
          source: form.source,
          lastContact: today,
          joinedDate: today,
          notes: form.notes.trim(),
        };

        const id = await createClient(payload);

        setClients((current) => [
          {
            id,
            ...payload,
            status: "Lead" as ClientStatus,
          },
          ...current,
        ]);
      }

      setShowClientModal(false);
      resetForm();
      setEditingClient(null);
    } catch (err) {
      console.error(err);
      alert("Unable to save client. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  async function removeClient(client: Client) {
    const confirmed = window.confirm(`Delete client "${client.name}"?`);
    if (!confirmed) return;

    setClients((current) => current.filter((item) => item.id !== client.id));
    setSelectedClient(null);
    setShowDetailsModal(false);

    try {
      await deleteClientFromDb(client.id);
    } catch (err) {
      console.error(err);
      try {
        const data = await getAllClients();
        setClients(data.map(mapToUi));
      } catch {
        /* ignore */
      }
    }
  }

  async function updateClientStatus(clientId: string, status: ClientStatus) {
    setClients((current) =>
      current.map((client) =>
        client.id === clientId ? { ...client, status } : client
      )
    );

    setSelectedClient((current) =>
      current && current.id === clientId ? { ...current, status } : current
    );

    try {
      await updateClient(clientId, { status });
    } catch (err) {
      console.error(err);
      try {
        const data = await getAllClients();
        setClients(data.map(mapToUi));
      } catch {
        /* ignore */
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
      {/* Header: title + Add Client beside */}
      <div className="border-b border-[#e4e2da] bg-white">
        <div className="mx-auto max-w-[1600px] px-3 py-4 sm:px-5 sm:py-5 lg:px-8">
          <div className="flex items-start justify-between gap-3 sm:items-center">
            <div className="min-w-0 flex-1">
              <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
                Clients
              </h1>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Manage interior clients, project values and outstanding amounts.
                {loading && (
                  <span className="ml-2 text-[#176b5b]">Loading…</span>
                )}
              </p>
            </div>
            <button
              type="button"
              onClick={openNewClient}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125848] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
            >
              <Plus size={16} strokeWidth={2.5} />
              <span className="hidden sm:inline">Add Client</span>
              <span className="sm:hidden">Add</span>
            </button>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[1600px] space-y-4 px-3 py-4 sm:space-y-6 sm:px-5 sm:py-6 lg:px-8">
        {/* Summary — 2 per row on mobile */}
        <section className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
          <SummaryCard
            label="Total Clients"
            value={loading ? "…" : String(totalClients)}
            helper={`${activeClients} active · ${leadClients} leads`}
          />
          <SummaryCard
            label="Active Clients"
            value={loading ? "…" : String(activeClients)}
            helper="Currently engaged"
          />
          <SummaryCard
            label="Project Value"
            value={loading ? "…" : formatCurrency(totalProjectValue)}
            helper="Across all clients"
          />
          <SummaryCard
            label="Pending Amount"
            value={loading ? "…" : formatCurrency(totalPending)}
            helper="Outstanding collections"
          />
        </section>

        {/* Tabs */}
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

        {/* Filters */}
        <section className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search client, phone, project..."
              className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] sm:max-w-md sm:flex-1"
            />
            <div className="flex gap-2">
              <select
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(e.target.value as "All" | ClientStatus)
                }
                className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Lead">Lead</option>
                <option value="Inactive">Inactive</option>
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

        {/* Directory */}
        <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
          <div className="border-b border-[#e4e2da] px-4 py-3 sm:px-5 sm:py-4">
            <h2 className="font-semibold">Client Directory</h2>
            <p className="mt-1 text-xs text-gray-500">
              {filteredClients.length} clients
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[1000px] text-left">
              <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
                <tr>
                  <th className="px-5 py-3 font-semibold">Client</th>
                  <th className="px-4 py-3 font-semibold">Project</th>
                  <th className="px-4 py-3 font-semibold">Value</th>
                  <th className="px-4 py-3 font-semibold">Paid</th>
                  <th className="px-4 py-3 font-semibold">Pending</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold">Last Contact</th>
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
                      Loading clients…
                    </td>
                  </tr>
                ) : filteredClients.length === 0 ? (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-5 py-12 text-center text-sm text-gray-500"
                    >
                      No clients found.
                    </td>
                  </tr>
                ) : (
                  filteredClients.map((client) => (
                    <tr key={client.id} className="hover:bg-[#fafaf8]">
                      <td className="px-5 py-4">
                        <p className="font-semibold text-gray-900">
                          {client.name}
                        </p>
                        <p className="mt-0.5 text-xs text-gray-500">
                          {client.phone}
                        </p>
                        <p className="text-xs text-gray-400">
                          {client.location}
                        </p>
                      </td>
                      <td className="px-4 py-4">
                        <p className="text-sm font-medium text-gray-800">
                          {client.project}
                        </p>
                        <p className="text-xs text-gray-400">
                          {client.projectType}
                        </p>
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold text-gray-900">
                        {formatCurrency(client.projectValue)}
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-green-700">
                        {formatCurrency(client.paid)}
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold text-orange-700">
                        {formatCurrency(client.pending)}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${statusClass(
                            client.status
                          )}`}
                        >
                          {client.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600">
                        {client.lastContact}
                      </td>
                      <td className="px-4 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedClient(client);
                              setShowDetailsModal(true);
                            }}
                            className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
                          >
                            View
                          </button>
                          <button
                            type="button"
                            onClick={() => openEditClient(client)}
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
                Loading clients…
              </p>
            ) : filteredClients.length === 0 ? (
              <p className="py-10 text-center text-sm text-gray-500">
                No clients found.
              </p>
            ) : (
              filteredClients.map((client) => (
                <article
                  key={client.id}
                  className="rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="truncate font-semibold text-gray-900">
                        {client.name}
                      </p>
                      <p className="mt-0.5 text-xs text-gray-500">
                        {client.phone}
                      </p>
                      <p className="text-xs text-gray-400">{client.location}</p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium ${statusClass(
                        client.status
                      )}`}
                    >
                      {client.status}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-gray-600">
                    {client.project} · {client.projectType}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs">
                    <span className="font-semibold text-gray-900">
                      {formatCurrency(client.projectValue)}
                    </span>
                    <span className="text-green-700">
                      Paid {formatCurrency(client.paid)}
                    </span>
                    <span className="text-orange-700">
                      Due {formatCurrency(client.pending)}
                    </span>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedClient(client);
                        setShowDetailsModal(true);
                      }}
                      className="flex-1 rounded-lg border border-gray-200 bg-white py-2 text-xs font-medium text-gray-700"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      onClick={() => openEditClient(client)}
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
      {showDetailsModal && selectedClient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 sm:p-4">
          <div className="max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="sticky top-0 flex items-center justify-between border-b border-[#e4e2da] bg-white px-4 py-4 sm:px-6">
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[#176b5b]">
                  {selectedClient.id}
                </p>
                <h2 className="mt-1 truncate text-lg font-bold sm:text-xl">
                  {selectedClient.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => {
                  setShowDetailsModal(false);
                  setSelectedClient(null);
                }}
                className="shrink-0 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 p-4 sm:gap-3 sm:p-6">
              <Info label="Company" value={selectedClient.company || "—"} />
              <Info label="Phone" value={selectedClient.phone} />
              <Info label="Email" value={selectedClient.email || "—"} />
              <Info label="Location" value={selectedClient.location} />
              <Info label="Project" value={selectedClient.project} />
              <Info label="Type" value={selectedClient.projectType} />
              <Info
                label="Project Value"
                value={formatCurrency(selectedClient.projectValue)}
              />
              <Info label="Paid" value={formatCurrency(selectedClient.paid)} />
              <Info
                label="Pending"
                value={formatCurrency(selectedClient.pending)}
              />
              <Info label="Source" value={selectedClient.source} />
              <Info label="Joined" value={selectedClient.joinedDate} />
              <Info label="Last Contact" value={selectedClient.lastContact} />
            </div>

            <div className="px-4 pb-2 sm:px-6">
              <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
                Status
              </p>
              <div className="flex flex-wrap gap-2">
                {(["Active", "Lead", "Inactive"] as ClientStatus[]).map(
                  (status) => (
                    <button
                      key={status}
                      type="button"
                      onClick={() =>
                        updateClientStatus(selectedClient.id, status)
                      }
                      className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
                        selectedClient.status === status
                          ? statusClass(status)
                          : "border-gray-200 text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {status}
                    </button>
                  )
                )}
              </div>
            </div>

            {selectedClient.notes && (
              <div className="mx-4 mb-4 rounded-xl bg-gray-50 p-4 text-sm text-gray-700 sm:mx-6">
                {selectedClient.notes}
              </div>
            )}

            <div className="flex flex-wrap gap-2 border-t border-[#e4e2da] px-4 py-4 sm:px-6">
              <button
                type="button"
                onClick={() => {
                  setShowDetailsModal(false);
                  openEditClient(selectedClient);
                }}
                className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => removeClient(selectedClient)}
                className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600"
              >
                Delete
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowDetailsModal(false);
                  setSelectedClient(null);
                }}
                className="ml-auto rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add / Edit floating modal */}
      {showClientModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 sm:p-4">
          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="sticky top-0 flex items-center justify-between border-b border-[#e4e2da] bg-white px-4 py-4 sm:px-6">
              <h2 className="text-base font-bold sm:text-lg">
                {editingClient ? "Edit Client" : "Add Client"}
              </h2>
              <button
                type="button"
                onClick={() => {
                  setShowClientModal(false);
                  setEditingClient(null);
                  resetForm();
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
              <Field
                label="Company"
                value={form.company}
                onChange={(v) => setForm((f) => ({ ...f, company: v }))}
              />
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
              <Field
                label="Location"
                value={form.location}
                onChange={(v) => setForm((f) => ({ ...f, location: v }))}
              />
              <Field
                label="Project"
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
                label="Project Value"
                type="number"
                value={form.projectValue}
                onChange={(v) => setForm((f) => ({ ...f, projectValue: v }))}
              />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Source
                </label>
                <select
                  value={form.source}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, source: e.target.value }))
                  }
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                >
                  <option>Website</option>
                  <option>Instagram</option>
                  <option>Facebook</option>
                  <option>Google</option>
                  <option>WhatsApp</option>
                  <option>Referral</option>
                  <option>Walk-in</option>
                  <option>Other</option>
                </select>
              </div>
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
                  setShowClientModal(false);
                  setEditingClient(null);
                  resetForm();
                }}
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={saving}
                onClick={saveClient}
                className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848] disabled:opacity-60"
              >
                {saving
                  ? "Saving…"
                  : editingClient
                    ? "Save Changes"
                    : "Add Client"}
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
