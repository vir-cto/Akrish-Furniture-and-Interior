// "use client";

// import { useMemo, useState } from "react";

// type LeadStatus =
//   | "New"
//   | "Contacted"
//   | "Follow-up"
//   | "Qualified"
//   | "Proposal"
//   | "Converted"
//   | "Lost";

// type LeadSource =
//   | "Website"
//   | "Instagram"
//   | "Facebook"
//   | "Google"
//   | "WhatsApp"
//   | "Referral"
//   | "Walk-in"
//   | "Other";

// type ClientType = "Residential" | "Commercial";

// type Lead = {
//   id: number;
//   name: string;
//   phone: string;
//   email: string;
//   project: string;
//   projectType: ClientType;
//   location: string;
//   budget: number;
//   source: LeadSource;
//   status: LeadStatus;
//   assignedTo: string;
//   nextFollowUp: string;
//   createdDate: string;
//   notes: string;
// };

// const initialLeads: Lead[] = [
//   {
//     id: 1,
//     name: "Rahul Kumar",
//     phone: "+91 98765 43210",
//     email: "rahul.kumar@gmail.com",
//     project: "Luxury 3 BHK Interior",
//     projectType: "Residential",
//     location: "Guntur",
//     budget: 850000,
//     source: "Website",
//     status: "Qualified",
//     assignedTo: "Akrish Design Team",
//     nextFollowUp: "2026-10-08",
//     createdDate: "2026-09-22",
//     notes: "Interested in complete home interior with modular kitchen.",
//   },
//   {
//     id: 2,
//     name: "Priya Sharma",
//     phone: "+91 99887 66554",
//     email: "priya.sharma@gmail.com",
//     project: "2 BHK Apartment",
//     projectType: "Residential",
//     location: "Vijayawada",
//     budget: 620000,
//     source: "Instagram",
//     status: "Follow-up",
//     assignedTo: "Priya Designer",
//     nextFollowUp: "2026-10-07",
//     createdDate: "2026-09-25",
//     notes: "Wants modern minimal interiors.",
//   },
//   {
//     id: 3,
//     name: "Suresh Reddy",
//     phone: "+91 90000 11223",
//     email: "suresh.reddy@gmail.com",
//     project: "Modern Villa Interior",
//     projectType: "Residential",
//     location: "Amaravati",
//     budget: 1250000,
//     source: "Referral",
//     status: "Proposal",
//     assignedTo: "Ravi Designer",
//     nextFollowUp: "2026-10-09",
//     createdDate: "2026-09-18",
//     notes: "Proposal shared. Waiting for client confirmation.",
//   },
//   {
//     id: 4,
//     name: "Anjali Rao",
//     phone: "+91 91111 22334",
//     email: "anjali.rao@gmail.com",
//     project: "Apartment Interior",
//     projectType: "Residential",
//     location: "Guntur",
//     budget: 480000,
//     source: "Google",
//     status: "Converted",
//     assignedTo: "Akrish Design Team",
//     nextFollowUp: "",
//     createdDate: "2026-09-10",
//     notes: "Converted to active interior project.",
//   },
//   {
//     id: 5,
//     name: "Kiran Kumar",
//     phone: "+91 98888 77665",
//     email: "kiran.kumar@company.com",
//     project: "Corporate Office",
//     projectType: "Commercial",
//     location: "Vijayawada",
//     budget: 980000,
//     source: "Website",
//     status: "Contacted",
//     assignedTo: "Ravi Designer",
//     nextFollowUp: "2026-10-10",
//     createdDate: "2026-09-29",
//     notes: "Office renovation requirement for approximately 5000 sq.ft.",
//   },
//   {
//     id: 6,
//     name: "Meghana Devi",
//     phone: "+91 95555 44332",
//     email: "meghana.devi@gmail.com",
//     project: "2 BHK Interior",
//     projectType: "Residential",
//     location: "Tenali",
//     budget: 390000,
//     source: "WhatsApp",
//     status: "New",
//     assignedTo: "Priya Designer",
//     nextFollowUp: "2026-10-06",
//     createdDate: "2026-10-04",
//     notes: "New enquiry received through WhatsApp.",
//   },
//   {
//     id: 7,
//     name: "Vamsi Krishna",
//     phone: "+91 96666 55443",
//     email: "vamsi.krishna@gmail.com",
//     project: "Commercial Office",
//     projectType: "Commercial",
//     location: "Guntur",
//     budget: 720000,
//     source: "Walk-in",
//     status: "Qualified",
//     assignedTo: "Ravi Designer",
//     nextFollowUp: "2026-10-11",
//     createdDate: "2026-09-30",
//     notes: "Site visit requested.",
//   },
//   {
//     id: 8,
//     name: "Sneha Reddy",
//     phone: "+91 93333 22110",
//     email: "sneha.reddy@gmail.com",
//     project: "Living Room Interior",
//     projectType: "Residential",
//     location: "Mangalagiri",
//     budget: 280000,
//     source: "Facebook",
//     status: "Lost",
//     assignedTo: "Priya Designer",
//     nextFollowUp: "",
//     createdDate: "2026-09-15",
//     notes: "Client postponed the project.",
//   },
// ];

// const statusOptions: LeadStatus[] = [
//   "New",
//   "Contacted",
//   "Follow-up",
//   "Qualified",
//   "Proposal",
//   "Converted",
//   "Lost",
// ];

// const sourceOptions: LeadSource[] = [
//   "Website",
//   "Instagram",
//   "Facebook",
//   "Google",
//   "WhatsApp",
//   "Referral",
//   "Walk-in",
//   "Other",
// ];

// const emptyLead: Omit<Lead, "id" | "createdDate"> = {
//   name: "",
//   phone: "",
//   email: "",
//   project: "",
//   projectType: "Residential",
//   location: "",
//   budget: 0,
//   source: "Website",
//   status: "New",
//   assignedTo: "Akrish Design Team",
//   nextFollowUp: "",
//   notes: "",
// };

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function statusClass(status: LeadStatus) {
//   switch (status) {
//     case "New":
//       return "bg-blue-50 text-blue-700 border-blue-200";
//     case "Contacted":
//       return "bg-purple-50 text-purple-700 border-purple-200";
//     case "Follow-up":
//       return "bg-amber-50 text-amber-700 border-amber-200";
//     case "Qualified":
//       return "bg-cyan-50 text-cyan-700 border-cyan-200";
//     case "Proposal":
//       return "bg-orange-50 text-orange-700 border-orange-200";
//     case "Converted":
//       return "bg-green-50 text-green-700 border-green-200";
//     case "Lost":
//       return "bg-red-50 text-red-700 border-red-200";
//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function initials(name: string) {
//   return name
//     .split(" ")
//     .map((word) => word[0])
//     .join("")
//     .slice(0, 2)
//     .toUpperCase();
// }

// export default function InteriorCRMPage() {
//   const [leads, setLeads] = useState<Lead[]>(initialLeads);
//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [sourceFilter, setSourceFilter] = useState("All");
//   const [typeFilter, setTypeFilter] = useState("All");

//   const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
//   const [isNewModalOpen, setIsNewModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);

//   const [form, setForm] =
//     useState<Omit<Lead, "id" | "createdDate">>(emptyLead);

//   const filteredLeads = useMemo(() => {
//     const query = search.toLowerCase().trim();

//     return leads.filter((lead) => {
//       const matchesSearch =
//         !query ||
//         lead.name.toLowerCase().includes(query) ||
//         lead.phone.toLowerCase().includes(query) ||
//         lead.email.toLowerCase().includes(query) ||
//         lead.project.toLowerCase().includes(query) ||
//         lead.location.toLowerCase().includes(query);

//       const matchesStatus =
//         statusFilter === "All" || lead.status === statusFilter;

//       const matchesSource =
//         sourceFilter === "All" || lead.source === sourceFilter;

//       const matchesType =
//         typeFilter === "All" || lead.projectType === typeFilter;

//       return (
//         matchesSearch &&
//         matchesStatus &&
//         matchesSource &&
//         matchesType
//       );
//     });
//   }, [leads, search, statusFilter, sourceFilter, typeFilter]);

//   const totalLeads = leads.length;
//   const newLeads = leads.filter((lead) => lead.status === "New").length;
//   const activeLeads = leads.filter(
//     (lead) =>
//       lead.status !== "Converted" &&
//       lead.status !== "Lost"
//   ).length;
//   const convertedLeads = leads.filter(
//     (lead) => lead.status === "Converted"
//   ).length;

//   const totalPipelineValue = leads
//     .filter(
//       (lead) =>
//         lead.status !== "Lost" &&
//         lead.status !== "Converted"
//     )
//     .reduce((sum, lead) => sum + lead.budget, 0);

//   const conversionRate =
//     totalLeads > 0
//       ? Math.round((convertedLeads / totalLeads) * 100)
//       : 0;

//   const sourceData = sourceOptions
//     .map((source) => {
//       const count = leads.filter((lead) => lead.source === source).length;
//       return { source, count };
//     })
//     .filter((item) => item.count > 0);

//   function openNewLead() {
//     setForm(emptyLead);
//     setIsNewModalOpen(true);
//   }

//   function saveNewLead() {
//     if (!form.name.trim() || !form.phone.trim() || !form.project.trim()) {
//       alert("Please enter Name, Phone and Project.");
//       return;
//     }

//     const newLead: Lead = {
//       ...form,
//       id: Date.now(),
//       createdDate: new Date().toISOString().split("T")[0],
//       budget: Number(form.budget) || 0,
//     };

//     setLeads((current) => [newLead, ...current]);
//     setIsNewModalOpen(false);
//   }

//   function openEditLead(lead: Lead) {
//     setSelectedLead(lead);

//     setForm({
//       name: lead.name,
//       phone: lead.phone,
//       email: lead.email,
//       project: lead.project,
//       projectType: lead.projectType,
//       location: lead.location,
//       budget: lead.budget,
//       source: lead.source,
//       status: lead.status,
//       assignedTo: lead.assignedTo,
//       nextFollowUp: lead.nextFollowUp,
//       notes: lead.notes,
//     });

//     setIsEditModalOpen(true);
//   }

//   function updateLead() {
//     if (!selectedLead) return;

//     if (!form.name.trim() || !form.phone.trim() || !form.project.trim()) {
//       alert("Please enter Name, Phone and Project.");
//       return;
//     }

//     setLeads((current) =>
//       current.map((lead) =>
//         lead.id === selectedLead.id
//           ? {
//               ...lead,
//               ...form,
//               budget: Number(form.budget) || 0,
//             }
//           : lead
//       )
//     );

//     setSelectedLead({
//       ...selectedLead,
//       ...form,
//       budget: Number(form.budget) || 0,
//     });

//     setIsEditModalOpen(false);
//   }

//   function updateStatus(id: number, status: LeadStatus) {
//     setLeads((current) =>
//       current.map((lead) =>
//         lead.id === id ? { ...lead, status } : lead
//       )
//     );

//     setSelectedLead((current) =>
//       current && current.id === id
//         ? { ...current, status }
//         : current
//     );
//   }

//   function deleteLead(id: number) {
//     const confirmed = window.confirm(
//       "Are you sure you want to delete this lead?"
//     );

//     if (!confirmed) return;

//     setLeads((current) => current.filter((lead) => lead.id !== id));
//     setSelectedLead(null);
//   }

//   function printLead(lead: Lead) {
//     const printWindow = window.open("", "_blank");

//     if (!printWindow) return;

//     printWindow.document.write(`
//       <!DOCTYPE html>
//       <html>
//         <head>
//           <title>${lead.name} - CRM Lead</title>
//           <style>
//             body {
//               font-family: Arial, sans-serif;
//               padding: 40px;
//               color: #222;
//             }
//             h1 {
//               color: #176b5b;
//               margin-bottom: 5px;
//             }
//             .subtitle {
//               color: #777;
//               margin-bottom: 30px;
//             }
//             .grid {
//               display: grid;
//               grid-template-columns: 1fr 1fr;
//               gap: 20px;
//             }
//             .box {
//               border: 1px solid #ddd;
//               padding: 16px;
//               border-radius: 8px;
//             }
//             .label {
//               color: #777;
//               font-size: 12px;
//               margin-bottom: 5px;
//             }
//             .value {
//               font-size: 16px;
//               font-weight: 600;
//             }
//             .notes {
//               margin-top: 20px;
//               border: 1px solid #ddd;
//               padding: 18px;
//               border-radius: 8px;
//             }
//           </style>
//         </head>
//         <body>
//           <h1>Akrish / Furniture and Interior</h1>
//           <div class="subtitle">CRM Lead Details</div>

//           <div class="grid">
//             <div class="box">
//               <div class="label">Client Name</div>
//               <div class="value">${lead.name}</div>
//             </div>

//             <div class="box">
//               <div class="label">Status</div>
//               <div class="value">${lead.status}</div>
//             </div>

//             <div class="box">
//               <div class="label">Phone</div>
//               <div class="value">${lead.phone}</div>
//             </div>

//             <div class="box">
//               <div class="label">Email</div>
//               <div class="value">${lead.email || "-"}</div>
//             </div>

//             <div class="box">
//               <div class="label">Project</div>
//               <div class="value">${lead.project}</div>
//             </div>

//             <div class="box">
//               <div class="label">Project Type</div>
//               <div class="value">${lead.projectType}</div>
//             </div>

//             <div class="box">
//               <div class="label">Location</div>
//               <div class="value">${lead.location || "-"}</div>
//             </div>

//             <div class="box">
//               <div class="label">Estimated Budget</div>
//               <div class="value">${formatCurrency(lead.budget)}</div>
//             </div>

//             <div class="box">
//               <div class="label">Lead Source</div>
//               <div class="value">${lead.source}</div>
//             </div>

//             <div class="box">
//               <div class="label">Assigned To</div>
//               <div class="value">${lead.assignedTo}</div>
//             </div>

//             <div class="box">
//               <div class="label">Created Date</div>
//               <div class="value">${lead.createdDate}</div>
//             </div>

//             <div class="box">
//               <div class="label">Next Follow-up</div>
//               <div class="value">${lead.nextFollowUp || "-"}</div>
//             </div>
//           </div>

//           <div class="notes">
//             <div class="label">Notes</div>
//             <div>${lead.notes || "No notes available."}</div>
//           </div>

//           <script>
//             window.onload = function() {
//               window.print();
//             };
//           </script>
//         </body>
//       </html>
//     `);

//     printWindow.document.close();
//   }

//   function openWhatsApp(phone: string) {
//     const cleanPhone = phone.replace(/\D/g, "");
//     window.open(`https://wa.me/${cleanPhone}`, "_blank");
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       {/* HEADER */}
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1600px] px-5 py-5 lg:px-8">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               <div className="mb-1 text-sm font-medium text-[#9a5b18]">
//                 Akrish / Furniture and Interior
//               </div>

//               <h1 className="text-2xl font-bold tracking-tight">
//                 CRM
//               </h1>

//               <p className="mt-1 text-sm text-gray-500">
//                 Manage interior leads, clients and follow-ups.
//               </p>
//             </div>

//             <button
//               onClick={openNewLead}
//               className="rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#125848]"
//             >
//               + New Lead
//             </button>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-6 px-5 py-6 lg:px-8">
//         {/* SUMMARY */}
//         <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
//           <SummaryCard
//             label="Total Leads"
//             value={totalLeads}
//             helper="All CRM enquiries"
//             icon="👥"
//           />

//           <SummaryCard
//             label="New Leads"
//             value={newLeads}
//             helper="Need attention"
//             icon="✨"
//           />

//           <SummaryCard
//             label="Active Pipeline"
//             value={activeLeads}
//             helper="Open opportunities"
//             icon="📈"
//           />

//           <SummaryCard
//             label="Pipeline Value"
//             value={formatCurrency(totalPipelineValue)}
//             helper="Estimated project value"
//             icon="₹"
//           />

//           <SummaryCard
//             label="Conversion Rate"
//             value={`${conversionRate}%`}
//             helper={`${convertedLeads} converted`}
//             icon="✓"
//           />
//         </section>

//         {/* FILTERS */}
//         <section className="rounded-xl border border-[#e4e2da] bg-white p-4">
//           <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
//             <div className="relative flex-1">
//               <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                 🔍
//               </span>

//               <input
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search client, phone, email, project or location..."
//                 className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] py-2.5 pl-10 pr-3 text-sm outline-none focus:border-[#176b5b]"
//               />
//             </div>

//             <select
//               value={statusFilter}
//               onChange={(e) => setStatusFilter(e.target.value)}
//               className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               <option value="All">All Statuses</option>
//               {statusOptions.map((status) => (
//                 <option key={status}>{status}</option>
//               ))}
//             </select>

//             <select
//               value={sourceFilter}
//               onChange={(e) => setSourceFilter(e.target.value)}
//               className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               <option value="All">All Sources</option>
//               {sourceOptions.map((source) => (
//                 <option key={source}>{source}</option>
//               ))}
//             </select>

//             <select
//               value={typeFilter}
//               onChange={(e) => setTypeFilter(e.target.value)}
//               className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               <option value="All">All Project Types</option>
//               <option value="Residential">Residential</option>
//               <option value="Commercial">Commercial</option>
//             </select>

//             <button
//               onClick={() => {
//                 setSearch("");
//                 setStatusFilter("All");
//                 setSourceFilter("All");
//                 setTypeFilter("All");
//               }}
//               className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
//             >
//               Clear
//             </button>
//           </div>
//         </section>

//         {/* MAIN CONTENT */}
//         <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
//           {/* LEADS TABLE */}
//           <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-5 py-4">
//               <div>
//                 <h2 className="font-semibold">Leads & Clients</h2>
//                 <p className="mt-1 text-xs text-gray-500">
//                   Showing {filteredLeads.length} of {leads.length} records
//                 </p>
//               </div>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[1050px] text-left">
//                 <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                   <tr>
//                     <th className="px-5 py-3 font-semibold">Client</th>
//                     <th className="px-4 py-3 font-semibold">Project</th>
//                     <th className="px-4 py-3 font-semibold">Budget</th>
//                     <th className="px-4 py-3 font-semibold">Source</th>
//                     <th className="px-4 py-3 font-semibold">Status</th>
//                     <th className="px-4 py-3 font-semibold">
//                       Follow-up
//                     </th>
//                     <th className="px-4 py-3 font-semibold text-right">
//                       Action
//                     </th>
//                   </tr>
//                 </thead>

//                 <tbody className="divide-y divide-gray-100">
//                   {filteredLeads.map((lead) => (
//                     <tr
//                       key={lead.id}
//                       className="transition hover:bg-[#fafaf8]"
//                     >
//                       <td className="px-5 py-4">
//                         <div className="flex items-center gap-3">
//                           <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8f2ef] text-xs font-bold text-[#176b5b]">
//                             {initials(lead.name)}
//                           </div>

//                           <div>
//                             <button
//                               onClick={() => setSelectedLead(lead)}
//                               className="font-semibold hover:text-[#176b5b]"
//                             >
//                               {lead.name}
//                             </button>

//                             <div className="mt-0.5 text-xs text-gray-500">
//                               {lead.phone}
//                             </div>
//                           </div>
//                         </div>
//                       </td>

//                       <td className="px-4 py-4">
//                         <div className="font-medium">{lead.project}</div>
//                         <div className="mt-1 text-xs text-gray-500">
//                           {lead.projectType} · {lead.location}
//                         </div>
//                       </td>

//                       <td className="px-4 py-4 font-semibold">
//                         {formatCurrency(lead.budget)}
//                       </td>

//                       <td className="px-4 py-4 text-sm text-gray-600">
//                         {lead.source}
//                       </td>

//                       <td className="px-4 py-4">
//                         <span
//                           className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                             lead.status
//                           )}`}
//                         >
//                           {lead.status}
//                         </span>
//                       </td>

//                       <td className="px-4 py-4 text-sm text-gray-600">
//                         {lead.nextFollowUp || "—"}
//                       </td>

//                       <td className="px-4 py-4 text-right">
//                         <button
//                           onClick={() => setSelectedLead(lead)}
//                           className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold hover:bg-gray-50"
//                         >
//                           View
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>

//               {filteredLeads.length === 0 && (
//                 <div className="px-5 py-16 text-center">
//                   <div className="text-4xl">🔎</div>
//                   <h3 className="mt-3 font-semibold">
//                     No leads found
//                   </h3>
//                   <p className="mt-1 text-sm text-gray-500">
//                     Try changing the filters or search text.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </section>

//           {/* SIDEBAR */}
//           <div className="space-y-6">
//             {/* PIPELINE */}
//             <section className="rounded-xl border border-[#e4e2da] bg-white p-5">
//               <h2 className="font-semibold">Sales Pipeline</h2>
//               <p className="mt-1 text-xs text-gray-500">
//                 Leads by current stage
//               </p>

//               <div className="mt-5 space-y-3">
//                 {statusOptions.map((status) => {
//                   const count = leads.filter(
//                     (lead) => lead.status === status
//                   ).length;

//                   const percentage =
//                     totalLeads > 0
//                       ? Math.round((count / totalLeads) * 100)
//                       : 0;

//                   return (
//                     <div key={status}>
//                       <div className="mb-1 flex items-center justify-between text-xs">
//                         <span className="font-medium">{status}</span>
//                         <span className="text-gray-500">
//                           {count}
//                         </span>
//                       </div>

//                       <div className="h-2 overflow-hidden rounded-full bg-gray-100">
//                         <div
//                           className="h-full rounded-full bg-[#176b5b]"
//                           style={{ width: `${percentage}%` }}
//                         />
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </section>

//             {/* LEAD SOURCES */}
//             <section className="rounded-xl border border-[#e4e2da] bg-white p-5">
//               <h2 className="font-semibold">Lead Sources</h2>
//               <p className="mt-1 text-xs text-gray-500">
//                 Where your enquiries come from
//               </p>

//               <div className="mt-5 space-y-4">
//                 {sourceData.map((item) => {
//                   const percentage =
//                     totalLeads > 0
//                       ? Math.round((item.count / totalLeads) * 100)
//                       : 0;

//                   return (
//                     <div key={item.source}>
//                       <div className="flex items-center justify-between text-sm">
//                         <span>{item.source}</span>
//                         <span className="font-semibold">
//                           {item.count}
//                         </span>
//                       </div>

//                       <div className="mt-2 h-1.5 rounded-full bg-gray-100">
//                         <div
//                           className="h-full rounded-full bg-[#9a5b18]"
//                           style={{ width: `${percentage}%` }}
//                         />
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </section>

//             {/* QUICK ACTIONS */}
//             <section className="rounded-xl border border-[#e4e2da] bg-white p-5">
//               <h2 className="font-semibold">Quick Actions</h2>

//               <div className="mt-4 space-y-2">
//                 <button
//                   onClick={openNewLead}
//                   className="flex w-full items-center justify-between rounded-lg border border-gray-200 px-4 py-3 text-left text-sm hover:bg-gray-50"
//                 >
//                   <span>➕ Add New Lead</span>
//                   <span>→</span>
//                 </button>

//                 <button
//                   onClick={() => {
//                     setStatusFilter("New");
//                     setSourceFilter("All");
//                     setTypeFilter("All");
//                   }}
//                   className="flex w-full items-center justify-between rounded-lg border border-gray-200 px-4 py-3 text-left text-sm hover:bg-gray-50"
//                 >
//                   <span>✨ View New Leads</span>
//                   <span>→</span>
//                 </button>

//                 <button
//                   onClick={() => {
//                     setStatusFilter("Follow-up");
//                     setSourceFilter("All");
//                     setTypeFilter("All");
//                   }}
//                   className="flex w-full items-center justify-between rounded-lg border border-gray-200 px-4 py-3 text-left text-sm hover:bg-gray-50"
//                 >
//                   <span>📅 Follow-ups</span>
//                   <span>→</span>
//                 </button>
//               </div>
//             </section>
//           </div>
//         </div>
//       </main>

//       {/* VIEW LEAD MODAL */}
//       {selectedLead && !isEditModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="sticky top-0 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-5">
//               <div>
//                 <h2 className="text-lg font-bold">
//                   {selectedLead.name}
//                 </h2>

//                 <p className="mt-1 text-xs text-gray-500">
//                   {selectedLead.project}
//                 </p>
//               </div>

//               <button
//                 onClick={() => setSelectedLead(null)}
//                 className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="space-y-6 p-6">
//               <div className="flex flex-wrap items-center gap-2">
//                 <span
//                   className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusClass(
//                     selectedLead.status
//                   )}`}
//                 >
//                   {selectedLead.status}
//                 </span>

//                 <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600">
//                   {selectedLead.projectType}
//                 </span>

//                 <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600">
//                   {selectedLead.source}
//                 </span>
//               </div>

//               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                 <InfoBox label="Phone" value={selectedLead.phone} />
//                 <InfoBox
//                   label="Email"
//                   value={selectedLead.email || "—"}
//                 />
//                 <InfoBox
//                   label="Project"
//                   value={selectedLead.project}
//                 />
//                 <InfoBox
//                   label="Location"
//                   value={selectedLead.location || "—"}
//                 />
//                 <InfoBox
//                   label="Estimated Budget"
//                   value={formatCurrency(selectedLead.budget)}
//                 />
//                 <InfoBox
//                   label="Assigned To"
//                   value={selectedLead.assignedTo}
//                 />
//                 <InfoBox
//                   label="Created Date"
//                   value={selectedLead.createdDate}
//                 />
//                 <InfoBox
//                   label="Next Follow-up"
//                   value={selectedLead.nextFollowUp || "Not scheduled"}
//                 />
//               </div>

//               <div>
//                 <h3 className="mb-2 text-sm font-semibold">
//                   Notes
//                 </h3>

//                 <div className="rounded-lg border border-gray-200 bg-[#fafaf8] p-4 text-sm leading-6 text-gray-600">
//                   {selectedLead.notes || "No notes available."}
//                 </div>
//               </div>

//               <div>
//                 <h3 className="mb-3 text-sm font-semibold">
//                   Update Status
//                 </h3>

//                 <div className="flex flex-wrap gap-2">
//                   {statusOptions.map((status) => (
//                     <button
//                       key={status}
//                       onClick={() =>
//                         updateStatus(selectedLead.id, status)
//                       }
//                       className={`rounded-lg border px-3 py-2 text-xs font-semibold transition ${
//                         selectedLead.status === status
//                           ? "border-[#176b5b] bg-[#176b5b] text-white"
//                           : "border-gray-200 hover:bg-gray-50"
//                       }`}
//                     >
//                       {status}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-2 border-t border-gray-200 pt-5">
//                 <button
//                   onClick={() => openEditLead(selectedLead)}
//                   className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//                 >
//                   Edit Lead
//                 </button>

//                 <button
//                   onClick={() => openWhatsApp(selectedLead.phone)}
//                   className="rounded-lg border border-green-200 bg-green-50 px-4 py-2.5 text-sm font-semibold text-green-700 hover:bg-green-100"
//                 >
//                   WhatsApp
//                 </button>

//                 <a
//                   href={`tel:${selectedLead.phone}`}
//                   className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold hover:bg-gray-50"
//                 >
//                   Call
//                 </a>

//                 {selectedLead.email && (
//                   <a
//                     href={`mailto:${selectedLead.email}`}
//                     className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold hover:bg-gray-50"
//                   >
//                     Email
//                   </a>
//                 )}

//                 <button
//                   onClick={() => printLead(selectedLead)}
//                   className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold hover:bg-gray-50"
//                 >
//                   Print
//                 </button>

//                 <button
//                   onClick={() => deleteLead(selectedLead.id)}
//                   className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* NEW LEAD MODAL */}
//       {isNewModalOpen && (
//         <LeadFormModal
//           title="New CRM Lead"
//           form={form}
//           setForm={setForm}
//           onClose={() => setIsNewModalOpen(false)}
//           onSave={saveNewLead}
//           saveLabel="Create Lead"
//         />
//       )}

//       {/* EDIT LEAD MODAL */}
//       {isEditModalOpen && selectedLead && (
//         <LeadFormModal
//           title="Edit CRM Lead"
//           form={form}
//           setForm={setForm}
//           onClose={() => setIsEditModalOpen(false)}
//           onSave={updateLead}
//           saveLabel="Save Changes"
//         />
//       )}
//     </div>
//   );
// }

// /* SUMMARY CARD */

// function SummaryCard({
//   label,
//   value,
//   helper,
//   icon,
// }: {
//   label: string;
//   value: string | number;
//   helper: string;
//   icon: string;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//       <div className="flex items-start justify-between">
//         <div>
//           <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
//             {label}
//           </p>

//           <p className="mt-2 text-2xl font-bold tracking-tight">
//             {value}
//           </p>

//           <p className="mt-1 text-xs text-gray-500">{helper}</p>
//         </div>

//         <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#edf5f2] text-lg text-[#176b5b]">
//           {icon}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* INFO BOX */

// function InfoBox({
//   label,
//   value,
// }: {
//   label: string;
//   value: string;
// }) {
//   return (
//     <div className="rounded-lg border border-gray-200 bg-[#fafaf8] p-4">
//       <div className="text-xs text-gray-500">{label}</div>
//       <div className="mt-1 text-sm font-semibold">{value}</div>
//     </div>
//   );
// }

// /* LEAD FORM */

// function LeadFormModal({
//   title,
//   form,
//   setForm,
//   onClose,
//   onSave,
//   saveLabel,
// }: {
//   title: string;
//   form: Omit<Lead, "id" | "createdDate">;
//   setForm: React.Dispatch<
//     React.SetStateAction<Omit<Lead, "id" | "createdDate">>
//   >;
//   onClose: () => void;
//   onSave: () => void;
//   saveLabel: string;
// }) {
//   function updateField<K extends keyof typeof form>(
//     key: K,
//     value: (typeof form)[K]
//   ) {
//     setForm((current) => ({
//       ...current,
//       [key]: value,
//     }));
//   }

//   return (
//     <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4">
//       <div className="max-h-[94vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//         <div className="sticky top-0 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-5">
//           <div>
//             <h2 className="text-lg font-bold">{title}</h2>
//             <p className="mt-1 text-xs text-gray-500">
//               Enter client and project details.
//             </p>
//           </div>

//           <button
//             onClick={onClose}
//             className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
//           >
//             ✕
//           </button>
//         </div>

//         <div className="space-y-5 p-6">
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//             <FormInput
//               label="Client Name *"
//               value={form.name}
//               onChange={(value) => updateField("name", value)}
//               placeholder="Enter client name"
//             />

//             <FormInput
//               label="Phone *"
//               value={form.phone}
//               onChange={(value) => updateField("phone", value)}
//               placeholder="+91 XXXXX XXXXX"
//             />

//             <FormInput
//               label="Email"
//               value={form.email}
//               onChange={(value) => updateField("email", value)}
//               placeholder="client@email.com"
//               type="email"
//             />

//             <FormInput
//               label="Project *"
//               value={form.project}
//               onChange={(value) => updateField("project", value)}
//               placeholder="Example: 3 BHK Interior"
//             />

//             <FormSelect
//               label="Project Type"
//               value={form.projectType}
//               onChange={(value) =>
//                 updateField(
//                   "projectType",
//                   value as ClientType
//                 )
//               }
//               options={["Residential", "Commercial"]}
//             />

//             <FormInput
//               label="Location"
//               value={form.location}
//               onChange={(value) =>
//                 updateField("location", value)
//               }
//               placeholder="City / Area"
//             />

//             <FormInput
//               label="Estimated Budget"
//               value={String(form.budget || "")}
//               onChange={(value) =>
//                 updateField("budget", Number(value) || 0)
//               }
//               placeholder="850000"
//               type="number"
//             />

//             <FormSelect
//               label="Lead Source"
//               value={form.source}
//               onChange={(value) =>
//                 updateField(
//                   "source",
//                   value as LeadSource
//                 )
//               }
//               options={sourceOptions}
//             />

//             <FormSelect
//               label="Status"
//               value={form.status}
//               onChange={(value) =>
//                 updateField(
//                   "status",
//                   value as LeadStatus
//                 )
//               }
//               options={statusOptions}
//             />

//             <FormInput
//               label="Assigned To"
//               value={form.assignedTo}
//               onChange={(value) =>
//                 updateField("assignedTo", value)
//               }
//               placeholder="Designer / Team"
//             />

//             <FormInput
//               label="Next Follow-up"
//               value={form.nextFollowUp}
//               onChange={(value) =>
//                 updateField("nextFollowUp", value)
//               }
//               type="date"
//             />
//           </div>

//           <div>
//             <label className="mb-2 block text-sm font-medium">
//               Notes
//             </label>

//             <textarea
//               value={form.notes}
//               onChange={(e) =>
//                 updateField("notes", e.target.value)
//               }
//               rows={4}
//               placeholder="Add client requirements, preferences or follow-up notes..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             />
//           </div>

//           <div className="flex justify-end gap-3 border-t border-gray-200 pt-5">
//             <button
//               onClick={onClose}
//               className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-semibold hover:bg-gray-50"
//             >
//               Cancel
//             </button>

//             <button
//               onClick={onSave}
//               className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//             >
//               {saveLabel}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* FORM INPUT */

// function FormInput({
//   label,
//   value,
//   onChange,
//   placeholder,
//   type = "text",
// }: {
//   label: string;
//   value: string;
//   onChange: (value: string) => void;
//   placeholder?: string;
//   type?: string;
// }) {
//   return (
//     <div>
//       <label className="mb-2 block text-sm font-medium">
//         {label}
//       </label>

//       <input
//         type={type}
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         placeholder={placeholder}
//         className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//       />
//     </div>
//   );
// }

// /* FORM SELECT */

// function FormSelect({
//   label,
//   value,
//   onChange,
//   options,
// }: {
//   label: string;
//   value: string;
//   onChange: (value: string) => void;
//   options: string[];
// }) {
//   return (
//     <div>
//       <label className="mb-2 block text-sm font-medium">
//         {label}
//       </label>

//       <select
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//       >
//         {options.map((option) => (
//           <option key={option} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

"use client";

import { useEffect, useMemo, useState } from "react";
import {
  getAllLeads,
  createLead,
  updateLead,
  deleteLead as deleteLeadFromDb,
  type InteriorLead,
} from "@/modules/interior/services/crmService";
import { Timestamp } from "firebase/firestore";

type LeadStatus =
  | "New"
  | "Contacted"
  | "Follow-up"
  | "Qualified"
  | "Proposal"
  | "Converted"
  | "Lost";

type LeadSource =
  | "Website"
  | "Instagram"
  | "Facebook"
  | "Google"
  | "WhatsApp"
  | "Referral"
  | "Walk-in"
  | "Other";

type ClientType = "Residential" | "Commercial";

type Lead = {
  id: string;
  name: string;
  phone: string;
  email: string;
  project: string;
  projectType: ClientType;
  location: string;
  budget: number;
  source: LeadSource;
  status: LeadStatus;
  assignedTo: string;
  nextFollowUp: string;
  createdDate: string;
  notes: string;
};

const statusOptions: LeadStatus[] = [
  "New",
  "Contacted",
  "Follow-up",
  "Qualified",
  "Proposal",
  "Converted",
  "Lost",
];

const sourceOptions: LeadSource[] = [
  "Website",
  "Instagram",
  "Facebook",
  "Google",
  "WhatsApp",
  "Referral",
  "Walk-in",
  "Other",
];

const emptyLead: Omit<Lead, "id" | "createdDate"> = {
  name: "",
  phone: "",
  email: "",
  project: "",
  projectType: "Residential",
  location: "",
  budget: 0,
  source: "Website",
  status: "New",
  assignedTo: "Akrish Design Team",
  nextFollowUp: "",
  notes: "",
};

function formatCurrency(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function statusClass(status: LeadStatus) {
  switch (status) {
    case "New":
      return "bg-blue-50 text-blue-700 border-blue-200";
    case "Contacted":
      return "bg-purple-50 text-purple-700 border-purple-200";
    case "Follow-up":
      return "bg-amber-50 text-amber-700 border-amber-200";
    case "Qualified":
      return "bg-cyan-50 text-cyan-700 border-cyan-200";
    case "Proposal":
      return "bg-orange-50 text-orange-700 border-orange-200";
    case "Converted":
      return "bg-green-50 text-green-700 border-green-200";
    case "Lost":
      return "bg-red-50 text-red-700 border-red-200";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
}

function initials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0] || "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
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

function normalizeStatus(raw?: string): LeadStatus {
  const s = (raw || "New").trim();
  if ((statusOptions as string[]).includes(s)) return s as LeadStatus;
  const lower = s.toLowerCase();
  if (lower.includes("contact")) return "Contacted";
  if (lower.includes("follow")) return "Follow-up";
  if (lower.includes("qualif")) return "Qualified";
  if (lower.includes("proposal") || lower.includes("quoted")) return "Proposal";
  if (lower.includes("convert") || lower.includes("won")) return "Converted";
  if (lower.includes("lost") || lower.includes("closed")) return "Lost";
  return "New";
}

function normalizeSource(raw?: string): LeadSource {
  const s = (raw || "Website").trim();
  if ((sourceOptions as string[]).includes(s)) return s as LeadSource;
  return "Other";
}

function normalizeType(raw?: string): ClientType {
  const s = (raw || "Residential").toLowerCase();
  if (s.includes("commercial") || s.includes("office")) return "Commercial";
  return "Residential";
}

function mapToUi(l: InteriorLead): Lead {
  return {
    id: l.id,
    name: l.name || l.customerName || "Unknown",
    phone: l.phone || "—",
    email: l.email || "",
    project: l.project || l.projectName || "—",
    projectType: normalizeType(l.projectType),
    location: l.location || "—",
    budget: Number(l.budget ?? 0) || 0,
    source: normalizeSource(l.source),
    status: normalizeStatus(l.status),
    assignedTo: l.assignedTo || "—",
    nextFollowUp: l.nextFollowUp || "",
    createdDate:
      l.createdDate || toDateString(l.createdAt) || new Date().toISOString().slice(0, 10),
    notes: l.notes || "",
  };
}

export default function InteriorCRMPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<LeadStatus | "All">("All");
  const [sourceFilter, setSourceFilter] = useState<LeadSource | "All">("All");
  const [typeFilter, setTypeFilter] = useState<ClientType | "All">("All");

  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [form, setForm] =
    useState<Omit<Lead, "id" | "createdDate">>(emptyLead);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const data = await getAllLeads();
        if (cancelled) return;
        setLeads(data.map(mapToUi));
      } catch (err) {
        console.error("Failed to load CRM leads:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const filteredLeads = useMemo(() => {
    const query = search.toLowerCase().trim();

    return leads.filter((lead) => {
      const matchesSearch =
        !query ||
        lead.name.toLowerCase().includes(query) ||
        lead.phone.toLowerCase().includes(query) ||
        lead.email.toLowerCase().includes(query) ||
        lead.project.toLowerCase().includes(query) ||
        lead.location.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "All" || lead.status === statusFilter;
      const matchesSource =
        sourceFilter === "All" || lead.source === sourceFilter;
      const matchesType =
        typeFilter === "All" || lead.projectType === typeFilter;

      return matchesSearch && matchesStatus && matchesSource && matchesType;
    });
  }, [leads, search, statusFilter, sourceFilter, typeFilter]);

  const totalLeads = leads.length;
  const newLeads = leads.filter((lead) => lead.status === "New").length;
  const activeLeads = leads.filter(
    (lead) => lead.status !== "Converted" && lead.status !== "Lost"
  ).length;
  const convertedLeads = leads.filter(
    (lead) => lead.status === "Converted"
  ).length;

  const totalPipelineValue = leads
    .filter((lead) => lead.status !== "Lost" && lead.status !== "Converted")
    .reduce((sum, lead) => sum + lead.budget, 0);

  const conversionRate =
    totalLeads > 0 ? Math.round((convertedLeads / totalLeads) * 100) : 0;

  const sourceData = sourceOptions
    .map((source) => ({
      source,
      count: leads.filter((lead) => lead.source === source).length,
    }))
    .filter((item) => item.count > 0);

  function updateField<K extends keyof typeof form>(
    key: K,
    value: (typeof form)[K]
  ) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function openNewLead() {
    setForm(emptyLead);
    setIsNewModalOpen(true);
  }

  async function saveNewLead() {
    if (!form.name.trim() || !form.phone.trim() || !form.project.trim()) {
      alert("Please enter Name, Phone and Project.");
      return;
    }

    setSaving(true);
    try {
      const createdDate = new Date().toISOString().split("T")[0];
      const payload = {
        name: form.name.trim(),
        customerName: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        project: form.project.trim(),
        projectName: form.project.trim(),
        projectType: form.projectType,
        location: form.location.trim(),
        budget: Number(form.budget) || 0,
        source: form.source,
        status: form.status,
        assignedTo: form.assignedTo.trim(),
        nextFollowUp: form.nextFollowUp,
        notes: form.notes.trim(),
        createdDate,
      };

      const id = await createLead(payload);

      const newLead: Lead = {
        id,
        name: payload.name,
        phone: payload.phone,
        email: payload.email,
        project: payload.project,
        projectType: form.projectType,
        location: payload.location,
        budget: payload.budget,
        source: form.source,
        status: form.status,
        assignedTo: payload.assignedTo,
        nextFollowUp: form.nextFollowUp,
        createdDate,
        notes: payload.notes,
      };

      setLeads((current) => [newLead, ...current]);
      setIsNewModalOpen(false);
      setForm(emptyLead);
    } catch (err) {
      console.error(err);
      alert("Unable to save lead. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  function openEditLead(lead: Lead) {
    setSelectedLead(lead);
    setForm({
      name: lead.name,
      phone: lead.phone,
      email: lead.email,
      project: lead.project,
      projectType: lead.projectType,
      location: lead.location,
      budget: lead.budget,
      source: lead.source,
      status: lead.status,
      assignedTo: lead.assignedTo,
      nextFollowUp: lead.nextFollowUp,
      notes: lead.notes,
    });
    setIsEditModalOpen(true);
  }

  async function saveUpdatedLead() {
    if (!selectedLead) return;

    if (!form.name.trim() || !form.phone.trim() || !form.project.trim()) {
      alert("Please enter Name, Phone and Project.");
      return;
    }

    setSaving(true);
    try {
      const payload = {
        name: form.name.trim(),
        customerName: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        project: form.project.trim(),
        projectName: form.project.trim(),
        projectType: form.projectType,
        location: form.location.trim(),
        budget: Number(form.budget) || 0,
        source: form.source,
        status: form.status,
        assignedTo: form.assignedTo.trim(),
        nextFollowUp: form.nextFollowUp,
        notes: form.notes.trim(),
      };

      await updateLead(selectedLead.id, payload);

      const updated: Lead = {
        ...selectedLead,
        ...form,
        budget: Number(form.budget) || 0,
      };

      setLeads((current) =>
        current.map((lead) =>
          lead.id === selectedLead.id ? updated : lead
        )
      );
      setSelectedLead(updated);
      setIsEditModalOpen(false);
    } catch (err) {
      console.error(err);
      alert("Unable to update lead.");
    } finally {
      setSaving(false);
    }
  }

  async function changeStatus(id: string, status: LeadStatus) {
    setLeads((current) =>
      current.map((lead) => (lead.id === id ? { ...lead, status } : lead))
    );
    setSelectedLead((current) =>
      current && current.id === id ? { ...current, status } : current
    );

    try {
      await updateLead(id, { status });
    } catch (err) {
      console.error(err);
      try {
        const data = await getAllLeads();
        setLeads(data.map(mapToUi));
      } catch {
        /* ignore */
      }
    }
  }

  async function removeLead(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this lead?"
    );
    if (!confirmed) return;

    setLeads((current) => current.filter((lead) => lead.id !== id));
    setSelectedLead(null);

    try {
      await deleteLeadFromDb(id);
    } catch (err) {
      console.error(err);
      try {
        const data = await getAllLeads();
        setLeads(data.map(mapToUi));
      } catch {
        /* ignore */
      }
    }
  }

  function openWhatsApp(phone: string) {
    const cleanPhone = phone.replace(/\D/g, "");
    window.open(`https://wa.me/${cleanPhone}`, "_blank");
  }

  function printLead(lead: Lead) {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${lead.name} - CRM Lead</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 40px; color: #222; }
            h1 { color: #176b5b; margin-bottom: 5px; }
            .subtitle { color: #777; margin-bottom: 30px; }
            .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
            .box { border: 1px solid #ddd; padding: 16px; border-radius: 8px; }
            .label { color: #777; font-size: 12px; margin-bottom: 5px; }
            .value { font-size: 16px; font-weight: 600; }
            .notes { margin-top: 24px; border: 1px solid #ddd; padding: 16px; border-radius: 8px; }
          </style>
        </head>
        <body>
          <h1>${lead.name}</h1>
          <div class="subtitle">${lead.project} · ${lead.status}</div>
          <div class="grid">
            <div class="box"><div class="label">Phone</div><div class="value">${lead.phone}</div></div>
            <div class="box"><div class="label">Email</div><div class="value">${lead.email || "-"}</div></div>
            <div class="box"><div class="label">Location</div><div class="value">${lead.location || "-"}</div></div>
            <div class="box"><div class="label">Budget</div><div class="value">${formatCurrency(lead.budget)}</div></div>
            <div class="box"><div class="label">Source</div><div class="value">${lead.source}</div></div>
            <div class="box"><div class="label">Assigned To</div><div class="value">${lead.assignedTo}</div></div>
            <div class="box"><div class="label">Created</div><div class="value">${lead.createdDate}</div></div>
            <div class="box"><div class="label">Next Follow-up</div><div class="value">${lead.nextFollowUp || "-"}</div></div>
          </div>
          <div class="notes"><div class="label">Notes</div><div>${lead.notes || "No notes available."}</div></div>
          <script>window.onload = function() { window.print(); };</script>
        </body>
      </html>
    `);
    printWindow.document.close();
  }

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
      <div className="border-b border-[#e4e2da] bg-white">
        <div className="mx-auto max-w-[1600px] px-5 py-5 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              {/* <div className="mb-1 text-sm font-medium text-[#9a5b18]">
                Akrish / Furniture and Interior
              </div> */}
              <h1 className="text-2xl font-bold tracking-tight">CRM</h1>
              <p className="mt-1 text-sm text-gray-500">
                Manage interior leads, clients and follow-ups.
                {loading && (
                  <span className="ml-2 text-[#176b5b]">Loading…</span>
                )}
              </p>
            </div>
            <button
              onClick={openNewLead}
              className="rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#125848]"
            >
              + New Lead
            </button>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[1600px] space-y-6 px-5 py-6 lg:px-8">
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
          <SummaryCard
            label="Total Leads"
            value={loading ? "…" : String(totalLeads)}
            helper="All CRM enquiries"
            icon="👥"
          />
          <SummaryCard
            label="New Leads"
            value={loading ? "…" : String(newLeads)}
            helper="Need attention"
            icon="✨"
          />
          <SummaryCard
            label="Active Pipeline"
            value={loading ? "…" : String(activeLeads)}
            helper="In progress"
            icon="⚡"
          />
          <SummaryCard
            label="Converted"
            value={loading ? "…" : String(convertedLeads)}
            helper={`${conversionRate}% conversion`}
            icon="✓"
          />
          <SummaryCard
            label="Pipeline Value"
            value={loading ? "…" : formatCurrency(totalPipelineValue)}
            helper="Open lead budgets"
            icon="₹"
          />
        </section>

        <section className="rounded-xl border border-[#e4e2da] bg-white p-4">
          <div className="flex flex-col gap-3 lg:flex-row">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, phone, project, location..."
              className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-4 py-2.5 text-sm outline-none focus:border-[#176b5b] lg:max-w-md"
            />
            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value as LeadStatus | "All")
              }
              className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
            >
              <option value="All">All Status</option>
              {statusOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <select
              value={sourceFilter}
              onChange={(e) =>
                setSourceFilter(e.target.value as LeadSource | "All")
              }
              className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
            >
              <option value="All">All Sources</option>
              {sourceOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <select
              value={typeFilter}
              onChange={(e) =>
                setTypeFilter(e.target.value as ClientType | "All")
              }
              className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
            >
              <option value="All">All Types</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>
        </section>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
          <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
            <div className="border-b border-[#e4e2da] px-5 py-4">
              <h2 className="font-semibold">Leads</h2>
              <p className="mt-1 text-xs text-gray-500">
                {filteredLeads.length} records
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px] text-left">
                <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Lead</th>
                    <th className="px-4 py-3 font-semibold">Project</th>
                    <th className="px-4 py-3 font-semibold">Budget</th>
                    <th className="px-4 py-3 font-semibold">Source</th>
                    <th className="px-4 py-3 font-semibold">Status</th>
                    <th className="px-4 py-3 font-semibold">Follow-up</th>
                    <th className="px-4 py-3 text-right font-semibold">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eeece6]">
                  {loading ? (
                    <tr>
                      <td
                        colSpan={7}
                        className="px-5 py-12 text-center text-sm text-gray-500"
                      >
                        Loading leads…
                      </td>
                    </tr>
                  ) : (
                    <>
                      {filteredLeads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-[#fafaf8]">
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef7f4] text-xs font-bold text-[#176b5b]">
                                {initials(lead.name)}
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900">
                                  {lead.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {lead.phone}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <p className="text-sm font-medium text-gray-800">
                              {lead.project}
                            </p>
                            <p className="text-xs text-gray-400">
                              {lead.projectType} · {lead.location}
                            </p>
                          </td>
                          <td className="px-4 py-4 text-sm font-semibold text-gray-900">
                            {formatCurrency(lead.budget)}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-600">
                            {lead.source}
                          </td>
                          <td className="px-4 py-4">
                            <span
                              className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${statusClass(
                                lead.status
                              )}`}
                            >
                              {lead.status}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-600">
                            {lead.nextFollowUp || "—"}
                          </td>
                          <td className="px-4 py-4 text-right">
                            <div className="flex justify-end gap-2">
                              <button
                                onClick={() => setSelectedLead(lead)}
                                className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
                              >
                                View
                              </button>
                              <button
                                onClick={() => openEditLead(lead)}
                                className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50"
                              >
                                Edit
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {filteredLeads.length === 0 && (
                        <tr>
                          <td
                            colSpan={7}
                            className="px-5 py-12 text-center text-sm text-gray-500"
                          >
                            No leads found.
                          </td>
                        </tr>
                      )}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          <aside className="space-y-6">
            <section className="rounded-xl border border-[#e4e2da] bg-white p-5">
              <h2 className="font-semibold">Leads by Source</h2>
              <div className="mt-4 space-y-3">
                {sourceData.length === 0 && (
                  <p className="text-sm text-gray-500">No source data yet.</p>
                )}
                {sourceData.map((item) => {
                  const pct =
                    totalLeads > 0
                      ? Math.round((item.count / totalLeads) * 100)
                      : 0;
                  return (
                    <div key={item.source}>
                      <div className="mb-1 flex justify-between text-xs">
                        <span>{item.source}</span>
                        <span className="font-semibold">{item.count}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className="h-full rounded-full bg-[#176b5b]"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="rounded-xl border border-[#e4e2da] bg-white p-5">
              <h2 className="font-semibold">Status Pipeline</h2>
              <div className="mt-4 space-y-2">
                {statusOptions.map((status) => {
                  const count = leads.filter((l) => l.status === status).length;
                  return (
                    <button
                      key={status}
                      onClick={() => setStatusFilter(status)}
                      className="flex w-full items-center justify-between rounded-lg border border-gray-100 px-3 py-2 text-left text-sm hover:bg-[#fafaf8]"
                    >
                      <span
                        className={`rounded-full border px-2 py-0.5 text-xs font-medium ${statusClass(
                          status
                        )}`}
                      >
                        {status}
                      </span>
                      <span className="font-semibold text-gray-700">
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>
          </aside>
        </div>
      </main>

      {/* Detail drawer / modal */}
      {selectedLead && !isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-4">
              <div>
                <p className="text-xs font-semibold text-[#176b5b]">
                  Lead details
                </p>
                <h2 className="mt-1 text-xl font-bold">{selectedLead.name}</h2>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4 p-6">
              <div className="grid grid-cols-2 gap-3">
                <Info label="Phone" value={selectedLead.phone} />
                <Info label="Email" value={selectedLead.email || "—"} />
                <Info label="Project" value={selectedLead.project} />
                <Info label="Type" value={selectedLead.projectType} />
                <Info label="Location" value={selectedLead.location} />
                <Info
                  label="Budget"
                  value={formatCurrency(selectedLead.budget)}
                />
                <Info label="Source" value={selectedLead.source} />
                <Info label="Assigned" value={selectedLead.assignedTo} />
                <Info label="Created" value={selectedLead.createdDate} />
                <Info
                  label="Follow-up"
                  value={selectedLead.nextFollowUp || "—"}
                />
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
                  Update status
                </p>
                <div className="flex flex-wrap gap-2">
                  {statusOptions.map((status) => (
                    <button
                      key={status}
                      onClick={() => changeStatus(selectedLead.id, status)}
                      className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
                        selectedLead.status === status
                          ? statusClass(status)
                          : "border-gray-200 text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {selectedLead.notes && (
                <div className="rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
                  {selectedLead.notes}
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => openEditLead(selectedLead)}
                  className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
                >
                  Edit
                </button>
                <button
                  onClick={() => openWhatsApp(selectedLead.phone)}
                  className="rounded-lg border border-[#176b5b] px-4 py-2.5 text-sm font-semibold text-[#176b5b]"
                >
                  WhatsApp
                </button>
                <button
                  onClick={() => printLead(selectedLead)}
                  className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700"
                >
                  Print
                </button>
                <button
                  onClick={() => removeLead(selectedLead.id)}
                  className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* New / Edit modal */}
      {(isNewModalOpen || isEditModalOpen) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-4">
              <h2 className="text-lg font-bold">
                {isNewModalOpen ? "New Lead" : "Edit Lead"}
              </h2>
              <button
                onClick={() => {
                  setIsNewModalOpen(false);
                  setIsEditModalOpen(false);
                }}
                className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-2">
              <FormInput
                label="Name *"
                value={form.name}
                onChange={(v) => updateField("name", v)}
                placeholder="Client name"
              />
              <FormInput
                label="Phone *"
                value={form.phone}
                onChange={(v) => updateField("phone", v)}
                placeholder="+91 ..."
              />
              <FormInput
                label="Email"
                value={form.email}
                onChange={(v) => updateField("email", v)}
                placeholder="email@example.com"
              />
              <FormInput
                label="Project *"
                value={form.project}
                onChange={(v) => updateField("project", v)}
                placeholder="3 BHK Interior"
              />
              <FormSelect
                label="Project Type"
                value={form.projectType}
                onChange={(v) =>
                  updateField("projectType", v as ClientType)
                }
                options={["Residential", "Commercial"]}
              />
              <FormInput
                label="Location"
                value={form.location}
                onChange={(v) => updateField("location", v)}
                placeholder="Guntur"
              />
              <FormInput
                label="Budget"
                type="number"
                value={String(form.budget || "")}
                onChange={(v) => updateField("budget", Number(v) || 0)}
                placeholder="500000"
              />
              <FormSelect
                label="Source"
                value={form.source}
                onChange={(v) => updateField("source", v as LeadSource)}
                options={sourceOptions}
              />
              <FormSelect
                label="Status"
                value={form.status}
                onChange={(v) => updateField("status", v as LeadStatus)}
                options={statusOptions}
              />
              <FormInput
                label="Assigned To"
                value={form.assignedTo}
                onChange={(v) => updateField("assignedTo", v)}
                placeholder="Designer / Team"
              />
              <FormInput
                label="Next Follow-up"
                type="date"
                value={form.nextFollowUp}
                onChange={(v) => updateField("nextFollowUp", v)}
              />
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Notes
                </label>
                <textarea
                  rows={3}
                  value={form.notes}
                  onChange={(e) => updateField("notes", e.target.value)}
                  className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                  placeholder="Notes..."
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
              <button
                onClick={() => {
                  setIsNewModalOpen(false);
                  setIsEditModalOpen(false);
                }}
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700"
              >
                Cancel
              </button>
              <button
                disabled={saving}
                onClick={isNewModalOpen ? saveNewLead : saveUpdatedLead}
                className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848] disabled:opacity-60"
              >
                {saving
                  ? "Saving…"
                  : isNewModalOpen
                  ? "Create Lead"
                  : "Save Changes"}
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
  icon,
}: {
  label: string;
  value: string;
  helper: string;
  icon: string;
}) {
  return (
    <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
          <p className="mt-1 text-xs text-gray-400">{helper}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef7f4] text-lg">
          {icon}
        </div>
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-[#fafaf8] p-3">
      <p className="text-xs text-gray-400">{label}</p>
      <p className="mt-1 text-sm font-semibold text-gray-800">{value}</p>
    </div>
  );
}

function FormInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
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
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
      />
    </div>
  );
}

function FormSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[] | string[];
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}