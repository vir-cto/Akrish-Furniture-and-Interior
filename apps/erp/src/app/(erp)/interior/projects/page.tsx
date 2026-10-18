// "use client";

// import { useMemo, useState } from "react";

// type ProjectStatus =
//   | "New"
//   | "Designing"
//   | "In Progress"
//   | "On Hold"
//   | "Completed"
//   | "Cancelled";

// type ProjectType =
//   | "Residential"
//   | "Commercial"
//   | "Office"
//   | "Villa"
//   | "Apartment";

// type Project = {
//   id: string;
//   projectNo: string;
//   client: string;
//   projectName: string;
//   type: ProjectType;
//   location: string;
//   designer: string;
//   manager: string;
//   startDate: string;
//   expectedDate: string;
//   value: number;
//   paid: number;
//   progress: number;
//   status: ProjectStatus;
//   rooms: number;
//   createdDate: string;
// };

// const initialProjects: Project[] = [
//   {
//     id: "INT-001",
//     projectNo: "INT-001",
//     client: "Rahul Kumar",
//     projectName: "Luxury 3 BHK Interior",
//     type: "Residential",
//     location: "Guntur",
//     designer: "Priya Sharma",
//     manager: "Arjun Reddy",
//     startDate: "2026-09-05",
//     expectedDate: "2026-12-20",
//     value: 850000,
//     paid: 520000,
//     progress: 65,
//     status: "In Progress",
//     rooms: 8,
//     createdDate: "2026-09-01",
//   },
//   {
//     id: "INT-002",
//     projectNo: "INT-002",
//     client: "Priya Sharma",
//     projectName: "Modern 2 BHK Interior",
//     type: "Apartment",
//     location: "Vijayawada",
//     designer: "Anjali Rao",
//     manager: "Arjun Reddy",
//     startDate: "2026-09-15",
//     expectedDate: "2026-12-10",
//     value: 620000,
//     paid: 310000,
//     progress: 42,
//     status: "Designing",
//     rooms: 6,
//     createdDate: "2026-09-10",
//   },
//   {
//     id: "INT-003",
//     projectNo: "INT-003",
//     client: "Suresh Reddy",
//     projectName: "Modern Villa Interior",
//     type: "Villa",
//     location: "Hyderabad",
//     designer: "Anjali Rao",
//     manager: "Arjun Reddy",
//     startDate: "2026-08-20",
//     expectedDate: "2027-01-15",
//     value: 1250000,
//     paid: 750000,
//     progress: 58,
//     status: "In Progress",
//     rooms: 12,
//     createdDate: "2026-08-15",
//   },
//   {
//     id: "INT-004",
//     projectNo: "INT-004",
//     client: "Anjali Rao",
//     projectName: "Apartment Interior",
//     type: "Apartment",
//     location: "Guntur",
//     designer: "Priya Sharma",
//     manager: "Vamsi Krishna",
//     startDate: "2026-06-10",
//     expectedDate: "2026-09-30",
//     value: 480000,
//     paid: 480000,
//     progress: 100,
//     status: "Completed",
//     rooms: 5,
//     createdDate: "2026-06-05",
//   },
//   {
//     id: "INT-005",
//     projectNo: "INT-005",
//     client: "Kiran Kumar",
//     projectName: "Corporate Office Interior",
//     type: "Office",
//     location: "Vijayawada",
//     designer: "Sneha Rao",
//     manager: "Arjun Reddy",
//     startDate: "2026-09-01",
//     expectedDate: "2026-12-30",
//     value: 980000,
//     paid: 490000,
//     progress: 48,
//     status: "In Progress",
//     rooms: 10,
//     createdDate: "2026-08-28",
//   },
//   {
//     id: "INT-006",
//     projectNo: "INT-006",
//     client: "Meghana Devi",
//     projectName: "2 BHK Interior",
//     type: "Residential",
//     location: "Guntur",
//     designer: "Anjali Rao",
//     manager: "Vamsi Krishna",
//     startDate: "2026-10-01",
//     expectedDate: "2027-01-05",
//     value: 390000,
//     paid: 100000,
//     progress: 15,
//     status: "New",
//     rooms: 6,
//     createdDate: "2026-09-28",
//   },
//   {
//     id: "INT-007",
//     projectNo: "INT-007",
//     client: "Vamsi Krishna",
//     projectName: "Commercial Office Interior",
//     type: "Commercial",
//     location: "Hyderabad",
//     designer: "Priya Sharma",
//     manager: "Arjun Reddy",
//     startDate: "2026-09-20",
//     expectedDate: "2027-01-10",
//     value: 720000,
//     paid: 360000,
//     progress: 35,
//     status: "Designing",
//     rooms: 9,
//     createdDate: "2026-09-18",
//   },
//   {
//     id: "INT-008",
//     projectNo: "INT-008",
//     client: "Sneha Reddy",
//     projectName: "Living Room Interior",
//     type: "Residential",
//     location: "Tenali",
//     designer: "Sneha Rao",
//     manager: "Vamsi Krishna",
//     startDate: "2026-08-05",
//     expectedDate: "2026-10-15",
//     value: 280000,
//     paid: 280000,
//     progress: 100,
//     status: "Completed",
//     rooms: 3,
//     createdDate: "2026-08-01",
//   },
// ];

// const statuses: Array<ProjectStatus | "All"> = [
//   "All",
//   "New",
//   "Designing",
//   "In Progress",
//   "On Hold",
//   "Completed",
//   "Cancelled",
// ];

// const types: Array<ProjectType | "All"> = [
//   "All",
//   "Residential",
//   "Commercial",
//   "Office",
//   "Villa",
//   "Apartment",
// ];

// const emptyProject: Omit<Project, "id" | "projectNo" | "createdDate"> = {
//   client: "",
//   projectName: "",
//   type: "Residential",
//   location: "",
//   designer: "",
//   manager: "",
//   startDate: "",
//   expectedDate: "",
//   value: 0,
//   paid: 0,
//   progress: 0,
//   status: "New",
//   rooms: 1,
// };

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
//     return `₹${(value / 1000).toFixed(0)}K`;
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

// function statusClass(status: ProjectStatus) {
//   switch (status) {
//     case "New":
//       return "bg-blue-50 text-blue-700 border-blue-200";

//     case "Designing":
//       return "bg-purple-50 text-purple-700 border-purple-200";

//     case "In Progress":
//       return "bg-green-50 text-green-700 border-green-200";

//     case "On Hold":
//       return "bg-yellow-50 text-yellow-700 border-yellow-200";

//     case "Completed":
//       return "bg-emerald-50 text-emerald-700 border-emerald-200";

//     case "Cancelled":
//       return "bg-red-50 text-red-700 border-red-200";

//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function progressClass(progress: number) {
//   if (progress >= 80) return "bg-[#176b5b]";
//   if (progress >= 50) return "bg-blue-500";
//   if (progress >= 25) return "bg-yellow-500";
//   return "bg-orange-500";
// }

// export default function InteriorProjectsPage() {
//   const [projects, setProjects] =
//     useState<Project[]>(initialProjects);

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] =
//     useState<ProjectStatus | "All">("All");
//   const [typeFilter, setTypeFilter] =
//     useState<ProjectType | "All">("All");

//   const [selectedProject, setSelectedProject] =
//     useState<Project | null>(null);

//   const [showNewModal, setShowNewModal] =
//     useState(false);

//   const [showEditModal, setShowEditModal] =
//     useState(false);

//   const [showDeleteModal, setShowDeleteModal] =
//     useState(false);

//   const [newProject, setNewProject] =
//     useState(emptyProject);

//   const [editProject, setEditProject] =
//     useState<Project | null>(null);

//   const filteredProjects = useMemo(() => {
//     const query = search.toLowerCase().trim();

//     return projects.filter((project) => {
//       const matchesSearch =
//         !query ||
//         project.projectNo
//           .toLowerCase()
//           .includes(query) ||
//         project.client
//           .toLowerCase()
//           .includes(query) ||
//         project.projectName
//           .toLowerCase()
//           .includes(query) ||
//         project.location
//           .toLowerCase()
//           .includes(query) ||
//         project.designer
//           .toLowerCase()
//           .includes(query);

//       const matchesStatus =
//         statusFilter === "All" ||
//         project.status === statusFilter;

//       const matchesType =
//         typeFilter === "All" ||
//         project.type === typeFilter;

//       return (
//         matchesSearch &&
//         matchesStatus &&
//         matchesType
//       );
//     });
//   }, [projects, search, statusFilter, typeFilter]);

//   const totalProjects = projects.length;

//   const activeProjects = projects.filter(
//     (project) =>
//       project.status !== "Completed" &&
//       project.status !== "Cancelled"
//   ).length;

//   const completedProjects = projects.filter(
//     (project) => project.status === "Completed"
//   ).length;

//   const totalValue = projects.reduce(
//     (sum, project) => sum + project.value,
//     0
//   );

//   const totalReceived = projects.reduce(
//     (sum, project) => sum + project.paid,
//     0
//   );

//   const totalPending = totalValue - totalReceived;

//   const averageProgress =
//     totalProjects === 0
//       ? 0
//       : Math.round(
//           projects.reduce(
//             (sum, project) => sum + project.progress,
//             0
//           ) / totalProjects
//         );

//   function openEdit(project: Project) {
//     setEditProject({ ...project });
//     setShowEditModal(true);
//     setSelectedProject(null);
//   }

//   function addProject() {
//     if (
//       !newProject.client.trim() ||
//       !newProject.projectName.trim()
//     ) {
//       alert(
//         "Please enter client name and project name."
//       );
//       return;
//     }

//     const nextNumber = projects.length + 1;

//     const project: Project = {
//       ...newProject,
//       id: `INT-${String(nextNumber).padStart(
//         3,
//         "0"
//       )}`,
//       projectNo: `INT-${String(nextNumber).padStart(
//         3,
//         "0"
//       )}`,
//       createdDate: new Date()
//         .toISOString()
//         .split("T")[0],
//     };

//     setProjects((current) => [
//       project,
//       ...current,
//     ]);

//     setNewProject(emptyProject);
//     setShowNewModal(false);
//   }

//   function saveEdit() {
//     if (!editProject) return;

//     setProjects((current) =>
//       current.map((project) =>
//         project.id === editProject.id
//           ? editProject
//           : project
//       )
//     );

//     setShowEditModal(false);
//     setEditProject(null);
//   }

//   function deleteProject() {
//     if (!selectedProject) return;

//     setProjects((current) =>
//       current.filter(
//         (project) =>
//           project.id !== selectedProject.id
//       )
//     );

//     setSelectedProject(null);
//     setShowDeleteModal(false);
//   }

//   function updateStatus(
//     projectId: string,
//     status: ProjectStatus
//   ) {
//     setProjects((current) =>
//       current.map((project) =>
//         project.id === projectId
//           ? {
//               ...project,
//               status,
//               progress:
//                 status === "Completed"
//                   ? 100
//                   : project.progress,
//             }
//           : project
//       )
//     );

//     if (selectedProject?.id === projectId) {
//       setSelectedProject((current) =>
//         current
//           ? {
//               ...current,
//               status,
//               progress:
//                 status === "Completed"
//                   ? 100
//                   : current.progress,
//             }
//           : null
//       );
//     }
//   }

//   function exportCSV() {
//     const header = [
//       "Project No",
//       "Client",
//       "Project Name",
//       "Type",
//       "Location",
//       "Designer",
//       "Manager",
//       "Start Date",
//       "Expected Date",
//       "Project Value",
//       "Paid",
//       "Pending",
//       "Progress",
//       "Status",
//     ];

//     const rows = filteredProjects.map(
//       (project) => [
//         project.projectNo,
//         project.client,
//         project.projectName,
//         project.type,
//         project.location,
//         project.designer,
//         project.manager,
//         project.startDate,
//         project.expectedDate,
//         project.value,
//         project.paid,
//         project.value - project.paid,
//         `${project.progress}%`,
//         project.status,
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
//     link.download = "interior-projects.csv";
//     link.click();

//     URL.revokeObjectURL(url);
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
//                 <span>Projects</span>
//               </div>

//               <h1 className="text-2xl font-bold tracking-tight">
//                 Interior Projects
//               </h1>

//               <p className="mt-1 text-sm text-gray-500">
//                 Manage residential, commercial and
//                 office interior projects.
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

//               <button
//                 onClick={() => setShowNewModal(true)}
//                 className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#12594b]"
//               >
//                 + New Project
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1500px] space-y-5 px-5 py-6">
//         {/* Summary */}
//         <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
//           <SummaryCard
//             title="Total Projects"
//             value={totalProjects}
//             subtitle="All projects"
//             icon="▣"
//           />

//           <SummaryCard
//             title="Active Projects"
//             value={activeProjects}
//             subtitle="Currently active"
//             icon="◷"
//           />

//           <SummaryCard
//             title="Completed"
//             value={completedProjects}
//             subtitle="Successfully completed"
//             icon="✓"
//           />

//           <SummaryCard
//             title="Project Value"
//             value={formatCompactCurrency(
//               totalValue
//             )}
//             subtitle="Total contract value"
//             icon="₹"
//           />

//           <SummaryCard
//             title="Pending Payment"
//             value={formatCompactCurrency(
//               totalPending
//             )}
//             subtitle="Amount to collect"
//             icon="!"
//             danger
//           />
//         </section>

//         {/* Performance */}
//         <section className="grid grid-cols-1 gap-5 lg:grid-cols-3">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-semibold">
//                   Overall Progress
//                 </p>
//                 <p className="mt-1 text-xs text-gray-500">
//                   Average project completion
//                 </p>
//               </div>

//               <span className="text-2xl font-bold text-[#176b5b]">
//                 {averageProgress}%
//               </span>
//             </div>

//             <div className="mt-5 h-3 overflow-hidden rounded-full bg-gray-100">
//               <div
//                 className="h-full rounded-full bg-[#176b5b]"
//                 style={{
//                   width: `${averageProgress}%`,
//                 }}
//               />
//             </div>

//             <div className="mt-3 flex justify-between text-xs text-gray-500">
//               <span>Project progress</span>
//               <span>{averageProgress}%</span>
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-semibold">
//                   Payment Collection
//                 </p>
//                 <p className="mt-1 text-xs text-gray-500">
//                   Received against project value
//                 </p>
//               </div>

//               <span className="text-2xl font-bold text-blue-600">
//                 {totalValue
//                   ? Math.round(
//                       (totalReceived /
//                         totalValue) *
//                         100
//                     )
//                   : 0}
//                 %
//               </span>
//             </div>

//             <div className="mt-5 h-3 overflow-hidden rounded-full bg-gray-100">
//               <div
//                 className="h-full rounded-full bg-blue-500"
//                 style={{
//                   width: `${
//                     totalValue
//                       ? (totalReceived /
//                           totalValue) *
//                         100
//                       : 0
//                   }%`,
//                 }}
//               />
//             </div>

//             <div className="mt-3 flex justify-between text-xs text-gray-500">
//               <span>
//                 Received {formatCurrency(totalReceived)}
//               </span>
//               <span>
//                 {formatCurrency(totalPending)} pending
//               </span>
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <p className="text-sm font-semibold">
//               Project Status
//             </p>

//             <div className="mt-4 space-y-3">
//               {statuses
//                 .filter((status) => status !== "All")
//                 .map((status) => {
//                   const count = projects.filter(
//                     (project) =>
//                       project.status === status
//                   ).length;

//                   return (
//                     <div
//                       key={status}
//                       className="flex items-center gap-3"
//                     >
//                       <div
//                         className={`h-2.5 w-2.5 rounded-full ${
//                           status === "Completed"
//                             ? "bg-emerald-500"
//                             : status ===
//                               "In Progress"
//                             ? "bg-green-500"
//                             : status ===
//                               "Designing"
//                             ? "bg-purple-500"
//                             : status === "New"
//                             ? "bg-blue-500"
//                             : status === "On Hold"
//                             ? "bg-yellow-500"
//                             : "bg-red-500"
//                         }`}
//                       />

//                       <span className="flex-1 text-xs text-gray-600">
//                         {status}
//                       </span>

//                       <span className="text-xs font-bold">
//                         {count}
//                       </span>
//                     </div>
//                   );
//                 })}
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
//                 placeholder="Search project, client, location..."
//                 className="w-full rounded-lg border border-[#dddcd5] bg-[#fafaf8] py-2.5 pl-10 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//               />
//             </div>

//             <select
//               value={statusFilter}
//               onChange={(event) =>
//                 setStatusFilter(
//                   event.target
//                     .value as ProjectStatus | "All"
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
//               {types.map((type) => (
//                 <option key={type} value={type}>
//                   {type === "All"
//                     ? "All Project Types"
//                     : type}
//                 </option>
//               ))}
//             </select>

//             <button
//               onClick={() => {
//                 setSearch("");
//                 setStatusFilter("All");
//                 setTypeFilter("All");
//               }}
//               className="rounded-lg border border-[#dddcd5] px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
//             >
//               Clear Filters
//             </button>
//           </div>
//         </section>

//         {/* Projects Table */}
//         <section className="rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="flex flex-col gap-2 border-b border-[#e4e2da] p-5 sm:flex-row sm:items-center sm:justify-between">
//             <div>
//               <h2 className="font-semibold">
//                 Project List
//               </h2>

//               <p className="mt-1 text-sm text-gray-500">
//                 Showing {filteredProjects.length} of{" "}
//                 {projects.length} projects
//               </p>
//             </div>

//             <button
//               onClick={() => setShowNewModal(true)}
//               className="w-fit rounded-lg border border-[#176b5b] px-3 py-2 text-xs font-semibold text-[#176b5b] hover:bg-[#176b5b]/5"
//             >
//               + Add Project
//             </button>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="min-w-[1250px] w-full">
//               <thead className="bg-[#fafaf8]">
//                 <tr className="border-b border-[#e4e2da] text-left text-xs uppercase tracking-wide text-gray-500">
//                   <th className="px-5 py-3 font-semibold">
//                     Project
//                   </th>

//                   <th className="px-4 py-3 font-semibold">
//                     Client
//                   </th>

//                   <th className="px-4 py-3 font-semibold">
//                     Type
//                   </th>

//                   <th className="px-4 py-3 font-semibold">
//                     Designer
//                   </th>

//                   <th className="px-4 py-3 font-semibold">
//                     Timeline
//                   </th>

//                   <th className="px-4 py-3 font-semibold">
//                     Value
//                   </th>

//                   <th className="px-4 py-3 font-semibold">
//                     Progress
//                   </th>

//                   <th className="px-4 py-3 font-semibold">
//                     Status
//                   </th>

//                   <th className="px-4 py-3 text-right font-semibold">
//                     Action
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {filteredProjects.map((project) => (
//                   <tr
//                     key={project.id}
//                     className="border-b border-[#eeeeea] last:border-b-0 hover:bg-[#fcfcfa]"
//                   >
//                     <td className="px-5 py-4">
//                       <button
//                         onClick={() =>
//                           setSelectedProject(project)
//                         }
//                         className="text-left"
//                       >
//                         <p className="font-semibold text-gray-900 hover:text-[#176b5b]">
//                           {project.projectName}
//                         </p>

//                         <div className="mt-1 flex items-center gap-2">
//                           <span className="text-xs font-medium text-[#9a5b18]">
//                             {project.projectNo}
//                           </span>

//                           <span className="text-xs text-gray-400">
//                             •
//                           </span>

//                           <span className="text-xs text-gray-500">
//                             {project.location}
//                           </span>
//                         </div>
//                       </button>
//                     </td>

//                     <td className="px-4 py-4">
//                       <p className="text-sm font-medium">
//                         {project.client}
//                       </p>

//                       <p className="mt-1 text-xs text-gray-500">
//                         {project.rooms} rooms
//                       </p>
//                     </td>

//                     <td className="px-4 py-4">
//                       <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
//                         {project.type}
//                       </span>
//                     </td>

//                     <td className="px-4 py-4">
//                       <p className="text-sm text-gray-700">
//                         {project.designer}
//                       </p>

//                       <p className="mt-1 text-xs text-gray-400">
//                         PM: {project.manager}
//                       </p>
//                     </td>

//                     <td className="px-4 py-4">
//                       <p className="text-xs text-gray-500">
//                         {formatDate(project.startDate)}
//                       </p>

//                       <p className="mt-1 text-xs font-medium text-gray-700">
//                         → {formatDate(project.expectedDate)}
//                       </p>
//                     </td>

//                     <td className="px-4 py-4">
//                       <p className="text-sm font-semibold">
//                         {formatCompactCurrency(
//                           project.value
//                         )}
//                       </p>

//                       <p className="mt-1 text-xs text-green-600">
//                         Paid{" "}
//                         {formatCompactCurrency(
//                           project.paid
//                         )}
//                       </p>
//                     </td>

//                     <td className="px-4 py-4">
//                       <div className="w-28">
//                         <div className="mb-1 flex justify-between text-[11px]">
//                           <span className="text-gray-400">
//                             Progress
//                           </span>

//                           <span className="font-semibold">
//                             {project.progress}%
//                           </span>
//                         </div>

//                         <div className="h-2 overflow-hidden rounded-full bg-gray-100">
//                           <div
//                             className={`h-full rounded-full ${progressClass(
//                               project.progress
//                             )}`}
//                             style={{
//                               width: `${project.progress}%`,
//                             }}
//                           />
//                         </div>
//                       </div>
//                     </td>

//                     <td className="px-4 py-4">
//                       <span
//                         className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                           project.status
//                         )}`}
//                       >
//                         {project.status}
//                       </span>
//                     </td>

//                     <td className="px-4 py-4">
//                       <div className="flex justify-end">
//                         <button
//                           onClick={() =>
//                             setSelectedProject(
//                               project
//                             )
//                           }
//                           className="rounded-lg border border-[#dddcd5] px-3 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-50"
//                         >
//                           View
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {filteredProjects.length === 0 && (
//             <div className="px-5 py-16 text-center">
//               <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-2xl">
//                 📁
//               </div>

//               <h3 className="mt-4 font-semibold">
//                 No projects found
//               </h3>

//               <p className="mt-1 text-sm text-gray-500">
//                 Try changing your search or filters.
//               </p>
//             </div>
//           )}
//         </section>

//         {/* Bottom Analytics */}
//         <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <h2 className="font-semibold">
//               Project Type Overview
//             </h2>

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
//                 const matching = projects.filter(
//                   (project) => project.type === type
//                 );

//                 const value = matching.reduce(
//                   (sum, project) =>
//                     sum + project.value,
//                   0
//                 );

//                 const percentage = totalValue
//                   ? Math.round(
//                       (value / totalValue) * 100
//                     )
//                   : 0;

//                 return (
//                   <div key={type}>
//                     <div className="mb-2 flex items-center justify-between">
//                       <div>
//                         <p className="text-sm font-medium">
//                           {type}
//                         </p>

//                         <p className="text-xs text-gray-400">
//                           {matching.length} projects
//                         </p>
//                       </div>

//                       <p className="text-sm font-semibold">
//                         {formatCompactCurrency(value)}
//                       </p>
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
//               Upcoming Project Deadlines
//             </h2>

//             <div className="mt-4 space-y-3">
//               {projects
//                 .filter(
//                   (project) =>
//                     project.status !==
//                       "Completed" &&
//                     project.status !== "Cancelled"
//                 )
//                 .sort(
//                   (a, b) =>
//                     new Date(
//                       a.expectedDate
//                     ).getTime() -
//                     new Date(
//                       b.expectedDate
//                     ).getTime()
//                 )
//                 .slice(0, 5)
//                 .map((project) => (
//                   <button
//                     key={project.id}
//                     onClick={() =>
//                       setSelectedProject(project)
//                     }
//                     className="flex w-full items-center gap-3 rounded-lg border border-[#eeeeea] p-3 text-left hover:bg-[#fafaf8]"
//                   >
//                     <div className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-lg bg-orange-50 text-orange-600">
//                       <span className="text-[10px] font-medium">
//                         {new Date(
//                           project.expectedDate
//                         ).toLocaleDateString(
//                           "en-IN",
//                           { month: "short" }
//                         )}
//                       </span>

//                       <span className="text-sm font-bold">
//                         {new Date(
//                           project.expectedDate
//                         ).getDate()}
//                       </span>
//                     </div>

//                     <div className="min-w-0 flex-1">
//                       <p className="truncate text-sm font-semibold">
//                         {project.projectName}
//                       </p>

//                       <p className="mt-1 text-xs text-gray-500">
//                         {project.client} •{" "}
//                         {project.location}
//                       </p>
//                     </div>

//                     <span className="text-xs font-semibold text-gray-600">
//                       {project.progress}%
//                     </span>
//                   </button>
//                 ))}
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Details Modal */}
//       {selectedProject && (
//         <Modal
//           title="Project Details"
//           onClose={() =>
//             setSelectedProject(null)
//           }
//         >
//           <div className="flex flex-col gap-5">
//             <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
//               <div>
//                 <div className="flex flex-wrap items-center gap-2">
//                   <h2 className="text-xl font-bold">
//                     {selectedProject.projectName}
//                   </h2>

//                   <span className="rounded-md bg-[#9a5b18]/10 px-2 py-1 text-xs font-semibold text-[#9a5b18]">
//                     {selectedProject.projectNo}
//                   </span>
//                 </div>

//                 <p className="mt-2 text-sm text-gray-500">
//                   {selectedProject.client} •{" "}
//                   {selectedProject.location}
//                 </p>
//               </div>

//               <span
//                 className={`w-fit rounded-full border px-3 py-1.5 text-xs font-semibold ${statusClass(
//                   selectedProject.status
//                 )}`}
//               >
//                 {selectedProject.status}
//               </span>
//             </div>

//             <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
//               <DetailCard
//                 label="Project Value"
//                 value={formatCurrency(
//                   selectedProject.value
//                 )}
//               />

//               <DetailCard
//                 label="Received"
//                 value={formatCurrency(
//                   selectedProject.paid
//                 )}
//               />

//               <DetailCard
//                 label="Pending"
//                 value={formatCurrency(
//                   selectedProject.value -
//                     selectedProject.paid
//                 )}
//               />

//               <DetailCard
//                 label="Progress"
//                 value={`${selectedProject.progress}%`}
//               />
//             </div>

//             <div className="rounded-xl border border-[#e4e2da] p-4">
//               <h3 className="font-semibold">
//                 Project Progress
//               </h3>

//               <div className="mt-4 h-3 overflow-hidden rounded-full bg-gray-100">
//                 <div
//                   className={`h-full rounded-full ${progressClass(
//                     selectedProject.progress
//                   )}`}
//                   style={{
//                     width: `${selectedProject.progress}%`,
//                   }}
//                 />
//               </div>

//               <div className="mt-2 flex justify-between text-xs text-gray-500">
//                 <span>Started</span>
//                 <span>
//                   {selectedProject.progress}% completed
//                 </span>
//                 <span>Expected completion</span>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
//               <DetailItem
//                 label="Project Type"
//                 value={selectedProject.type}
//               />

//               <DetailItem
//                 label="Rooms / Areas"
//                 value={`${selectedProject.rooms}`}
//               />

//               <DetailItem
//                 label="Designer"
//                 value={selectedProject.designer}
//               />

//               <DetailItem
//                 label="Project Manager"
//                 value={selectedProject.manager}
//               />

//               <DetailItem
//                 label="Start Date"
//                 value={formatDate(
//                   selectedProject.startDate
//                 )}
//               />

//               <DetailItem
//                 label="Expected Date"
//                 value={formatDate(
//                   selectedProject.expectedDate
//                 )}
//               />
//             </div>

//             <div className="rounded-xl border border-[#e4e2da] p-4">
//               <p className="mb-3 text-sm font-semibold">
//                 Update Project Status
//               </p>

//               <div className="flex flex-wrap gap-2">
//                 {(
//                   [
//                     "New",
//                     "Designing",
//                     "In Progress",
//                     "On Hold",
//                     "Completed",
//                     "Cancelled",
//                   ] as ProjectStatus[]
//                 ).map((status) => (
//                   <button
//                     key={status}
//                     onClick={() =>
//                       updateStatus(
//                         selectedProject.id,
//                         status
//                       )
//                     }
//                     className={`rounded-lg border px-3 py-2 text-xs font-semibold ${
//                       selectedProject.status ===
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

//             <div className="flex flex-wrap justify-end gap-2 border-t border-[#e4e2da] pt-4">
//               <button
//                 onClick={() =>
//                   openEdit(selectedProject)
//                 }
//                 className="rounded-lg border border-[#dddcd5] px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 Edit Project
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
//                   setSelectedProject(null)
//                 }
//                 className="rounded-lg bg-[#176b5b] px-4 py-2 text-sm font-semibold text-white hover:bg-[#12594b]"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </Modal>
//       )}

//       {/* New Project Modal */}
//       {showNewModal && (
//         <Modal
//           title="Create New Interior Project"
//           onClose={() => setShowNewModal(false)}
//         >
//           <ProjectForm
//             project={newProject}
//             onChange={setNewProject}
//             onSubmit={addProject}
//             onCancel={() => setShowNewModal(false)}
//             submitLabel="Create Project"
//           />
//         </Modal>
//       )}

//       {/* Edit Modal */}
//       {showEditModal && editProject && (
//         <Modal
//           title={`Edit ${editProject.projectNo}`}
//           onClose={() => {
//             setShowEditModal(false);
//             setEditProject(null);
//           }}
//         >
//           <ProjectForm
//             project={editProject}
//             onChange={setEditProject}
//             onSubmit={saveEdit}
//             onCancel={() => {
//               setShowEditModal(false);
//               setEditProject(null);
//             }}
//             submitLabel="Save Changes"
//             editing
//           />
//         </Modal>
//       )}

//       {/* Delete Modal */}
//       {showDeleteModal && selectedProject && (
//         <Modal
//           title="Delete Project"
//           onClose={() =>
//             setShowDeleteModal(false)
//           }
//         >
//           <div className="text-center">
//             <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-2xl text-red-600">
//               !
//             </div>

//             <h3 className="mt-4 text-lg font-bold">
//               Delete this project?
//             </h3>

//             <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
//               Are you sure you want to delete{" "}
//               <strong>
//                 {selectedProject.projectName}
//               </strong>
//               ? This action cannot be undone in this
//               local demo.
//             </p>

//             <div className="mt-6 flex justify-center gap-2">
//               <button
//                 onClick={() =>
//                   setShowDeleteModal(false)
//                 }
//                 className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={deleteProject}
//                 className="rounded-lg bg-red-600 px-5 py-2 text-sm font-semibold text-white hover:bg-red-700"
//               >
//                 Delete Project
//               </button>
//             </div>
//           </div>
//         </Modal>
//       )}

//       <style jsx global>{`
//         @media print {
//           body {
//             background: white !important;
//           }

//           button,
//           input,
//           select,
//           textarea {
//             display: none !important;
//           }

//           .shadow-sm {
//             box-shadow: none !important;
//           }

//           @page {
//             size: A4 landscape;
//             margin: 10mm;
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
//   danger = false,
// }: {
//   title: string;
//   value: string | number;
//   subtitle: string;
//   icon: string;
//   danger?: boolean;
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
//               danger
//                 ? "text-red-600"
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
//             danger
//               ? "bg-red-50 text-red-600"
//               : "bg-[#176b5b]/10 text-[#176b5b]"
//           }`}
//         >
//           {icon}
//         </div>
//       </div>
//     </div>
//   );
// }

// function DetailCard({
//   label,
//   value,
// }: {
//   label: string;
//   value: string;
// }) {
//   return (
//     <div className="rounded-lg bg-[#fafaf8] p-3">
//       <p className="text-xs text-gray-500">
//         {label}
//       </p>

//       <p className="mt-1 text-sm font-bold">
//         {value}
//       </p>
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
//     <div className="rounded-lg border border-[#e4e2da] bg-[#fafaf8] p-3">
//       <p className="text-xs text-gray-500">
//         {label}
//       </p>

//       <p className="mt-1 text-sm font-semibold text-gray-800">
//         {value}
//       </p>
//     </div>
//   );
// }

// function ProjectForm({
//   project,
//   onChange,
//   onSubmit,
//   onCancel,
//   submitLabel,
//   editing = false,
// }: {
//   project: Omit<
//     Project,
//     "id" | "projectNo" | "createdDate"
//   > | Project;
//   onChange: (
//     project: typeof project
//   ) => void;
//   onSubmit: () => void;
//   onCancel: () => void;
//   submitLabel: string;
//   editing?: boolean;
// }) {
//   const update = (
//     key: keyof typeof project,
//     value: string | number
//   ) => {
//     onChange({
//       ...project,
//       [key]: value,
//     });
//   };

//   return (
//     <div>
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//         <FormInput
//           label="Client Name *"
//           value={project.client}
//           onChange={(value) =>
//             update("client", value)
//           }
//           placeholder="Enter client name"
//         />

//         <FormInput
//           label="Project Name *"
//           value={project.projectName}
//           onChange={(value) =>
//             update("projectName", value)
//           }
//           placeholder="Enter project name"
//         />

//         <FormSelect
//           label="Project Type"
//           value={project.type}
//           options={[
//             "Residential",
//             "Commercial",
//             "Office",
//             "Villa",
//             "Apartment",
//           ]}
//           onChange={(value) =>
//             update("type", value)
//           }
//         />

//         <FormInput
//           label="Location"
//           value={project.location}
//           onChange={(value) =>
//             update("location", value)
//           }
//           placeholder="Enter location"
//         />

//         <FormInput
//           label="Designer"
//           value={project.designer}
//           onChange={(value) =>
//             update("designer", value)
//           }
//           placeholder="Designer name"
//         />

//         <FormInput
//           label="Project Manager"
//           value={project.manager}
//           onChange={(value) =>
//             update("manager", value)
//           }
//           placeholder="Project manager"
//         />

//         <FormInput
//           label="Start Date"
//           type="date"
//           value={project.startDate}
//           onChange={(value) =>
//             update("startDate", value)
//           }
//         />

//         <FormInput
//           label="Expected Completion"
//           type="date"
//           value={project.expectedDate}
//           onChange={(value) =>
//             update("expectedDate", value)
//           }
//         />

//         <FormInput
//           label="Project Value"
//           type="number"
//           value={String(project.value)}
//           onChange={(value) =>
//             update(
//               "value",
//               Number(value) || 0
//             )
//           }
//           placeholder="850000"
//         />

//         <FormInput
//           label="Amount Paid"
//           type="number"
//           value={String(project.paid)}
//           onChange={(value) =>
//             update(
//               "paid",
//               Number(value) || 0
//             )
//           }
//           placeholder="0"
//         />

//         <FormInput
//           label="Number of Rooms / Areas"
//           type="number"
//           value={String(project.rooms)}
//           onChange={(value) =>
//             update(
//               "rooms",
//               Math.max(
//                 1,
//                 Number(value) || 1
//               )
//             )
//           }
//         />

//         <FormInput
//           label="Progress (%)"
//           type="number"
//           value={String(project.progress)}
//           onChange={(value) =>
//             update(
//               "progress",
//               Math.min(
//                 100,
//                 Math.max(
//                   0,
//                   Number(value) || 0
//                 )
//               )
//             )
//           }
//         />

//         <FormSelect
//           label="Status"
//           value={project.status}
//           options={[
//             "New",
//             "Designing",
//             "In Progress",
//             "On Hold",
//             "Completed",
//             "Cancelled",
//           ]}
//           onChange={(value) =>
//             update("status", value)
//           }
//         />
//       </div>

//       {editing &&
//         "projectNo" in project && (
//           <div className="mt-4 rounded-lg bg-[#fafaf8] p-3 text-xs text-gray-500">
//             Project ID:{" "}
//             <strong className="text-gray-700">
//               {project.projectNo}
//             </strong>
//           </div>
//         )}

//       <div className="mt-6 flex justify-end gap-2 border-t border-[#e4e2da] pt-4">
//         <button
//           onClick={onCancel}
//           className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//         >
//           Cancel
//         </button>

//         <button
//           onClick={onSubmit}
//           className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#12594b]"
//         >
//           {submitLabel}
//         </button>
//       </div>
//     </div>
//   );
// }

// function FormInput({
//   label,
//   value,
//   onChange,
//   type = "text",
//   placeholder,
// }: {
//   label: string;
//   value: string;
//   onChange: (value: string) => void;
//   type?: string;
//   placeholder?: string;
// }) {
//   return (
//     <label className="block">
//       <span className="mb-1.5 block text-sm font-medium text-gray-700">
//         {label}
//       </span>

//       <input
//         type={type}
//         value={value}
//         onChange={(event) =>
//           onChange(event.target.value)
//         }
//         placeholder={placeholder}
//         className="w-full rounded-lg border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//       />
//     </label>
//   );
// }

// function FormSelect({
//   label,
//   value,
//   options,
//   onChange,
// }: {
//   label: string;
//   value: string;
//   options: string[];
//   onChange: (value: string) => void;
// }) {
//   return (
//     <label className="block">
//       <span className="mb-1.5 block text-sm font-medium text-gray-700">
//         {label}
//       </span>

//       <select
//         value={value}
//         onChange={(event) =>
//           onChange(event.target.value)
//         }
//         className="w-full rounded-lg border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//       >
//         {options.map((option) => (
//           <option key={option} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//     </label>
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
//       <div className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
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
//   getAllInteriorProjects,
//   createProject,
//   updateProject,
//   deleteProject as deleteProjectFromDb,
//   type InteriorProject,
// } from "@/modules/interior/services/projectService";
// import { Timestamp } from "firebase/firestore";

// type ProjectStatus =
//   | "New"
//   | "Designing"
//   | "In Progress"
//   | "On Hold"
//   | "Completed"
//   | "Cancelled";

// type ProjectType =
//   | "Residential"
//   | "Commercial"
//   | "Office"
//   | "Villa"
//   | "Apartment";

// type Project = {
//   id: string;
//   projectNo: string;
//   client: string;
//   projectName: string;
//   type: ProjectType;
//   location: string;
//   designer: string;
//   manager: string;
//   startDate: string;
//   expectedDate: string;
//   value: number;
//   paid: number;
//   progress: number;
//   status: ProjectStatus;
//   rooms: number;
//   createdDate: string;
// };

// const statusOptions: ProjectStatus[] = [
//   "New",
//   "Designing",
//   "In Progress",
//   "On Hold",
//   "Completed",
//   "Cancelled",
// ];

// const typeOptions: ProjectType[] = [
//   "Residential",
//   "Commercial",
//   "Office",
//   "Villa",
//   "Apartment",
// ];

// const emptyProject: Omit<Project, "id" | "projectNo" | "createdDate"> = {
//   client: "",
//   projectName: "",
//   type: "Residential",
//   location: "",
//   designer: "Akrish Design Team",
//   manager: "",
//   startDate: "",
//   expectedDate: "",
//   value: 0,
//   paid: 0,
//   progress: 0,
//   status: "New",
//   rooms: 0,
// };

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function statusClass(status: ProjectStatus) {
//   switch (status) {
//     case "New":
//       return "bg-blue-50 text-blue-700 border-blue-200";
//     case "Designing":
//       return "bg-purple-50 text-purple-700 border-purple-200";
//     case "In Progress":
//       return "bg-amber-50 text-amber-700 border-amber-200";
//     case "On Hold":
//       return "bg-orange-50 text-orange-700 border-orange-200";
//     case "Completed":
//       return "bg-green-50 text-green-700 border-green-200";
//     case "Cancelled":
//       return "bg-red-50 text-red-700 border-red-200";
//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function progressFromStatus(status: ProjectStatus): number {
//   if (status === "New") return 10;
//   if (status === "Designing") return 35;
//   if (status === "In Progress") return 65;
//   if (status === "On Hold") return 50;
//   if (status === "Completed") return 100;
//   return 0;
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

// function normalizeStatus(raw?: string): ProjectStatus {
//   const s = (raw || "New").trim();
//   if ((statusOptions as string[]).includes(s)) return s as ProjectStatus;
//   const lower = s.toLowerCase();
//   if (lower.includes("design")) return "Designing";
//   if (lower.includes("progress") || lower === "active") return "In Progress";
//   if (lower.includes("hold")) return "On Hold";
//   if (lower.includes("complete") || lower === "done") return "Completed";
//   if (lower.includes("cancel")) return "Cancelled";
//   return "New";
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

// function mapToUi(p: InteriorProject): Project {
//   const status = normalizeStatus(p.status);
//   const value = Number(p.value ?? p.projectValue ?? p.totalValue ?? 0) || 0;
//   const paid = Number(p.paid ?? p.amountPaid ?? 0) || 0;
//   const progress =
//     typeof p.progress === "number" && p.progress >= 0
//       ? Math.min(100, Math.round(p.progress))
//       : progressFromStatus(status);

//   return {
//     id: p.id,
//     projectNo: p.projectNo || p.projectId || `INT-${p.id.slice(0, 6).toUpperCase()}`,
//     client: p.clientName || p.client || p.customerName || "Unknown",
//     projectName: p.projectName || p.name || "Untitled Project",
//     type: normalizeType(p.projectType || p.type),
//     location: p.location || "—",
//     designer: p.designer || "—",
//     manager: p.manager || "—",
//     startDate: p.startDate || toDateString(p.createdAt) || "—",
//     expectedDate: p.expectedDate || p.deadline || p.endDate || "—",
//     value,
//     paid,
//     progress,
//     status,
//     rooms: Number(p.rooms ?? 0) || 0,
//     createdDate: p.createdDate || toDateString(p.createdAt) || "—",
//   };
// }

// export default function InteriorProjectsPage() {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState<ProjectStatus | "All">(
//     "All"
//   );
//   const [typeFilter, setTypeFilter] = useState<ProjectType | "All">("All");

//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
//   const [showNewModal, setShowNewModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [newProject, setNewProject] = useState(emptyProject);
//   const [editProject, setEditProject] = useState<Project | null>(null);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllInteriorProjects();
//         if (cancelled) return;
//         setProjects(data.map(mapToUi));
//       } catch (err) {
//         console.error("Failed to load projects:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const filteredProjects = useMemo(() => {
//     const query = search.toLowerCase().trim();

//     return projects.filter((project) => {
//       const matchesSearch =
//         !query ||
//         project.projectNo.toLowerCase().includes(query) ||
//         project.client.toLowerCase().includes(query) ||
//         project.projectName.toLowerCase().includes(query) ||
//         project.location.toLowerCase().includes(query) ||
//         project.designer.toLowerCase().includes(query);

//       const matchesStatus =
//         statusFilter === "All" || project.status === statusFilter;

//       const matchesType =
//         typeFilter === "All" || project.type === typeFilter;

//       return matchesSearch && matchesStatus && matchesType;
//     });
//   }, [projects, search, statusFilter, typeFilter]);

//   const totalProjects = projects.length;
//   const activeProjects = projects.filter(
//     (p) => p.status !== "Completed" && p.status !== "Cancelled"
//   ).length;
//   const completedProjects = projects.filter(
//     (p) => p.status === "Completed"
//   ).length;
//   const totalValue = projects.reduce((s, p) => s + p.value, 0);
//   const totalReceived = projects.reduce((s, p) => s + p.paid, 0);
//   const totalPending = totalValue - totalReceived;
//   const averageProgress =
//     totalProjects === 0
//       ? 0
//       : Math.round(
//           projects.reduce((s, p) => s + p.progress, 0) / totalProjects
//         );

//   function openEdit(project: Project) {
//     setEditProject({ ...project });
//     setShowEditModal(true);
//     setSelectedProject(null);
//   }

//   async function addProject() {
//     if (!newProject.client.trim() || !newProject.projectName.trim()) {
//       alert("Please enter client name and project name.");
//       return;
//     }

//     setSaving(true);
//     try {
//       const today = new Date().toISOString().split("T")[0];
//       const projectNo = `INT-${Date.now().toString().slice(-6)}`;

//       const payload = {
//         projectNo,
//         client: newProject.client.trim(),
//         clientName: newProject.client.trim(),
//         projectName: newProject.projectName.trim(),
//         name: newProject.projectName.trim(),
//         projectType: newProject.type,
//         type: newProject.type,
//         location: newProject.location.trim(),
//         designer: newProject.designer.trim(),
//         manager: newProject.manager.trim(),
//         startDate: newProject.startDate || today,
//         expectedDate: newProject.expectedDate,
//         endDate: newProject.expectedDate,
//         value: Number(newProject.value) || 0,
//         paid: Number(newProject.paid) || 0,
//         progress:
//           Number(newProject.progress) ||
//           progressFromStatus(newProject.status),
//         status: newProject.status,
//         rooms: Number(newProject.rooms) || 0,
//         createdDate: today,
//       };

//       const id = await createProject(payload);

//       setProjects((current) => [
//         {
//           id,
//           projectNo,
//           client: payload.client,
//           projectName: payload.projectName,
//           type: newProject.type,
//           location: payload.location || "—",
//           designer: payload.designer || "—",
//           manager: payload.manager || "—",
//           startDate: payload.startDate,
//           expectedDate: payload.expectedDate || "—",
//           value: payload.value,
//           paid: payload.paid,
//           progress: payload.progress,
//           status: newProject.status,
//           rooms: payload.rooms,
//           createdDate: today,
//         },
//         ...current,
//       ]);

//       setNewProject(emptyProject);
//       setShowNewModal(false);
//     } catch (err) {
//       console.error(err);
//       alert("Unable to create project.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function saveEdit() {
//     if (!editProject) return;
//     if (!editProject.client.trim() || !editProject.projectName.trim()) {
//       alert("Please enter client name and project name.");
//       return;
//     }

//     setSaving(true);
//     try {
//       const payload = {
//         client: editProject.client.trim(),
//         clientName: editProject.client.trim(),
//         projectName: editProject.projectName.trim(),
//         name: editProject.projectName.trim(),
//         projectType: editProject.type,
//         type: editProject.type,
//         location: editProject.location.trim(),
//         designer: editProject.designer.trim(),
//         manager: editProject.manager.trim(),
//         startDate: editProject.startDate,
//         expectedDate: editProject.expectedDate,
//         endDate: editProject.expectedDate,
//         value: Number(editProject.value) || 0,
//         paid: Number(editProject.paid) || 0,
//         progress: Number(editProject.progress) || 0,
//         status: editProject.status,
//         rooms: Number(editProject.rooms) || 0,
//       };

//       await updateProject(editProject.id, payload);

//       setProjects((current) =>
//         current.map((p) =>
//           p.id === editProject.id ? { ...editProject, ...payload } : p
//         )
//       );
//       setShowEditModal(false);
//       setEditProject(null);
//     } catch (err) {
//       console.error(err);
//       alert("Unable to update project.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function changeStatus(id: string, status: ProjectStatus) {
//     const progress = progressFromStatus(status);

//     setProjects((current) =>
//       current.map((p) =>
//         p.id === id ? { ...p, status, progress } : p
//       )
//     );
//     setSelectedProject((current) =>
//       current && current.id === id
//         ? { ...current, status, progress }
//         : current
//     );

//     try {
//       await updateProject(id, { status, progress });
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllInteriorProjects();
//         setProjects(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   async function removeProject(project: Project) {
//     const confirmed = window.confirm(
//       `Delete project "${project.projectName}"?`
//     );
//     if (!confirmed) return;

//     setProjects((current) => current.filter((p) => p.id !== project.id));
//     setSelectedProject(null);

//     try {
//       await deleteProjectFromDb(project.id);
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllInteriorProjects();
//         setProjects(data.map(mapToUi));
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
//               <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
//               <p className="mt-1 text-sm text-gray-500">
//                 Track interior projects, progress and collections.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <button
//               onClick={() => {
//                 setNewProject(emptyProject);
//                 setShowNewModal(true);
//               }}
//               className="rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#125848]"
//             >
//               + New Project
//             </button>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-6 px-5 py-6 lg:px-8">
//         <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <SummaryCard
//             label="Total Projects"
//             value={loading ? "…" : String(totalProjects)}
//             helper={`${activeProjects} active · ${completedProjects} done`}
//           />
//           <SummaryCard
//             label="Project Value"
//             value={loading ? "…" : formatCurrency(totalValue)}
//             helper={`Received ${formatCurrency(totalReceived)}`}
//           />
//           <SummaryCard
//             label="Pending"
//             value={loading ? "…" : formatCurrency(totalPending)}
//             helper="Outstanding collections"
//           />
//           <SummaryCard
//             label="Avg Progress"
//             value={loading ? "…" : `${averageProgress}%`}
//             helper="Across all projects"
//           />
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-4">
//           <div className="flex flex-col gap-3 lg:flex-row">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search project, client, location, designer..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-4 py-2.5 text-sm outline-none focus:border-[#176b5b] lg:max-w-md"
//             />
//             <select
//               value={statusFilter}
//               onChange={(e) =>
//                 setStatusFilter(e.target.value as ProjectStatus | "All")
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
//             <h2 className="font-semibold">Project Directory</h2>
//             <p className="mt-1 text-xs text-gray-500">
//               {filteredProjects.length} projects
//             </p>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1100px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Project</th>
//                   <th className="px-4 py-3 font-semibold">Client</th>
//                   <th className="px-4 py-3 font-semibold">Value</th>
//                   <th className="px-4 py-3 font-semibold">Progress</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
//                   <th className="px-4 py-3 font-semibold">Deadline</th>
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
//                       Loading projects…
//                     </td>
//                   </tr>
//                 ) : (
//                   <>
//                     {filteredProjects.map((project) => (
//                       <tr key={project.id} className="hover:bg-[#fafaf8]">
//                         <td className="px-5 py-4">
//                           <p className="text-xs font-semibold text-[#176b5b]">
//                             {project.projectNo}
//                           </p>
//                           <p className="mt-1 font-medium text-gray-900">
//                             {project.projectName}
//                           </p>
//                           <p className="mt-0.5 text-xs text-gray-400">
//                             {project.type} · {project.location}
//                           </p>
//                         </td>
//                         <td className="px-4 py-4">
//                           <p className="text-sm font-medium text-gray-800">
//                             {project.client}
//                           </p>
//                           <p className="text-xs text-gray-400">
//                             {project.designer}
//                           </p>
//                         </td>
//                         <td className="px-4 py-4">
//                           <p className="text-sm font-semibold text-gray-900">
//                             {formatCurrency(project.value)}
//                           </p>
//                           <p className="text-xs text-gray-400">
//                             Paid {formatCurrency(project.paid)}
//                           </p>
//                         </td>
//                         <td className="px-4 py-4">
//                           <div className="flex items-center gap-2">
//                             <div className="h-2 w-20 overflow-hidden rounded-full bg-gray-100">
//                               <div
//                                 className="h-full rounded-full bg-[#176b5b]"
//                                 style={{ width: `${project.progress}%` }}
//                               />
//                             </div>
//                             <span className="text-xs text-gray-500">
//                               {project.progress}%
//                             </span>
//                           </div>
//                         </td>
//                         <td className="px-4 py-4">
//                           <span
//                             className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${statusClass(
//                               project.status
//                             )}`}
//                           >
//                             {project.status}
//                           </span>
//                         </td>
//                         <td className="px-4 py-4 text-sm text-gray-600">
//                           {project.expectedDate}
//                         </td>
//                         <td className="px-4 py-4 text-right">
//                           <div className="flex justify-end gap-2">
//                             <button
//                               onClick={() => setSelectedProject(project)}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                             >
//                               View
//                             </button>
//                             <button
//                               onClick={() => openEdit(project)}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50"
//                             >
//                               Edit
//                             </button>
//                             <a
//                               href={`/interior/projects/${project.id}/timeline`}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50"
//                             >
//                               Open
//                             </a>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                     {filteredProjects.length === 0 && (
//                       <tr>
//                         <td
//                           colSpan={7}
//                           className="px-5 py-12 text-center text-sm text-gray-500"
//                         >
//                           No projects found.
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
//       {selectedProject && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-4">
//               <div>
//                 <p className="text-xs font-semibold text-[#176b5b]">
//                   {selectedProject.projectNo}
//                 </p>
//                 <h2 className="mt-1 text-xl font-bold">
//                   {selectedProject.projectName}
//                 </h2>
//               </div>
//               <button
//                 onClick={() => setSelectedProject(null)}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="grid grid-cols-2 gap-3 p-6">
//               <Info label="Client" value={selectedProject.client} />
//               <Info label="Type" value={selectedProject.type} />
//               <Info label="Location" value={selectedProject.location} />
//               <Info label="Designer" value={selectedProject.designer} />
//               <Info label="Manager" value={selectedProject.manager} />
//               <Info label="Rooms" value={String(selectedProject.rooms)} />
//               <Info label="Start" value={selectedProject.startDate} />
//               <Info label="Expected" value={selectedProject.expectedDate} />
//               <Info
//                 label="Value"
//                 value={formatCurrency(selectedProject.value)}
//               />
//               <Info
//                 label="Paid"
//                 value={formatCurrency(selectedProject.paid)}
//               />
//               <Info label="Progress" value={`${selectedProject.progress}%`} />
//               <Info label="Created" value={selectedProject.createdDate} />
//             </div>

//             <div className="px-6 pb-2">
//               <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
//                 Update Status
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {statusOptions.map((status) => (
//                   <button
//                     key={status}
//                     onClick={() => changeStatus(selectedProject.id, status)}
//                     className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
//                       selectedProject.status === status
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
//               <button
//                 onClick={() => openEdit(selectedProject)}
//                 className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//               >
//                 Edit
//               </button>
//               <a
//                 href={`/interior/projects/${selectedProject.id}/timeline`}
//                 className="rounded-lg border border-[#176b5b] px-4 py-2.5 text-sm font-semibold text-[#176b5b]"
//               >
//                 Timeline
//               </a>
//               <a
//                 href={`/interior/projects/${selectedProject.id}/checklist`}
//                 className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700"
//               >
//                 Checklist
//               </a>
//               <button
//                 onClick={() => removeProject(selectedProject)}
//                 className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* New / Edit modals share the same form fields */}
//       {(showNewModal || (showEditModal && editProject)) && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-4">
//               <h2 className="text-lg font-bold">
//                 {showNewModal ? "New Project" : "Edit Project"}
//               </h2>
//               <button
//                 onClick={() => {
//                   setShowNewModal(false);
//                   setShowEditModal(false);
//                   setEditProject(null);
//                 }}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>

//             <ProjectForm
//               data={showNewModal ? newProject : editProject!}
//               onChange={(field, value) => {
//                 if (showNewModal) {
//                   setNewProject((current) => ({
//                     ...current,
//                     [field]: value,
//                   }));
//                 } else {
//                   setEditProject((current) =>
//                     current ? { ...current, [field]: value } : current
//                   );
//                 }
//               }}
//             />

//             <div className="flex justify-end gap-3 border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
//               <button
//                 onClick={() => {
//                   setShowNewModal(false);
//                   setShowEditModal(false);
//                   setEditProject(null);
//                 }}
//                 className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700"
//               >
//                 Cancel
//               </button>
//               <button
//                 disabled={saving}
//                 onClick={showNewModal ? addProject : saveEdit}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848] disabled:opacity-60"
//               >
//                 {saving
//                   ? "Saving…"
//                   : showNewModal
//                   ? "Create Project"
//                   : "Save Changes"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function ProjectForm({
//   data,
//   onChange,
// }: {
//   data: Omit<Project, "id" | "projectNo" | "createdDate"> | Project;
//   onChange: (
//     field: keyof typeof emptyProject,
//     value: string | number
//   ) => void;
// }) {
//   return (
//     <div className="grid gap-4 p-6 sm:grid-cols-2">
//       <Field
//         label="Client *"
//         value={data.client}
//         onChange={(v) => onChange("client", v)}
//       />
//       <Field
//         label="Project Name *"
//         value={data.projectName}
//         onChange={(v) => onChange("projectName", v)}
//       />
//       <div>
//         <label className="mb-1.5 block text-sm font-medium text-gray-700">
//           Type
//         </label>
//         <select
//           value={data.type}
//           onChange={(e) => onChange("type", e.target.value)}
//           className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//         >
//           {typeOptions.map((t) => (
//             <option key={t} value={t}>
//               {t}
//             </option>
//           ))}
//         </select>
//       </div>
//       <Field
//         label="Location"
//         value={data.location}
//         onChange={(v) => onChange("location", v)}
//       />
//       <Field
//         label="Designer"
//         value={data.designer}
//         onChange={(v) => onChange("designer", v)}
//       />
//       <Field
//         label="Manager"
//         value={data.manager}
//         onChange={(v) => onChange("manager", v)}
//       />
//       <Field
//         label="Start Date"
//         type="date"
//         value={data.startDate === "—" ? "" : data.startDate}
//         onChange={(v) => onChange("startDate", v)}
//       />
//       <Field
//         label="Expected Date"
//         type="date"
//         value={data.expectedDate === "—" ? "" : data.expectedDate}
//         onChange={(v) => onChange("expectedDate", v)}
//       />
//       <Field
//         label="Value"
//         type="number"
//         value={String(data.value || "")}
//         onChange={(v) => onChange("value", Number(v) || 0)}
//       />
//       <Field
//         label="Paid"
//         type="number"
//         value={String(data.paid || "")}
//         onChange={(v) => onChange("paid", Number(v) || 0)}
//       />
//       <Field
//         label="Progress %"
//         type="number"
//         value={String(data.progress || "")}
//         onChange={(v) => onChange("progress", Number(v) || 0)}
//       />
//       <Field
//         label="Rooms"
//         type="number"
//         value={String(data.rooms || "")}
//         onChange={(v) => onChange("rooms", Number(v) || 0)}
//       />
//       <div>
//         <label className="mb-1.5 block text-sm font-medium text-gray-700">
//           Status
//         </label>
//         <select
//           value={data.status}
//           onChange={(e) => onChange("status", e.target.value)}
//           className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//         >
//           {statusOptions.map((s) => (
//             <option key={s} value={s}>
//               {s}
//             </option>
//           ))}
//         </select>
//       </div>
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

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAllInteriorProjects,
//   createProject,
//   updateProject,
//   deleteProject as deleteProjectFromDb,
//   type InteriorProject,
// } from "@/modules/interior/services/projectService";
// import {
//   getAllClients,
//   type InteriorClient,
// } from "@/modules/interior/services/clientService";
// import { Timestamp } from "firebase/firestore";

// type ProjectStatus =
//   | "New"
//   | "Designing"
//   | "In Progress"
//   | "On Hold"
//   | "Completed"
//   | "Cancelled";

// type ProjectType =
//   | "Residential"
//   | "Commercial"
//   | "Office"
//   | "Villa"
//   | "Apartment";

// type Project = {
//   id: string;
//   projectNo: string;
//   client: string;
//   clientId: string;
//   projectName: string;
//   type: ProjectType;
//   location: string;
//   designer: string;
//   manager: string;
//   startDate: string;
//   expectedDate: string;
//   value: number;
//   paid: number;
//   progress: number;
//   status: ProjectStatus;
//   rooms: number;
//   createdDate: string;
// };

// const statusOptions: ProjectStatus[] = [
//   "New",
//   "Designing",
//   "In Progress",
//   "On Hold",
//   "Completed",
//   "Cancelled",
// ];

// const typeOptions: ProjectType[] = [
//   "Residential",
//   "Commercial",
//   "Office",
//   "Villa",
//   "Apartment",
// ];

// const emptyProject: Omit<Project, "id" | "projectNo" | "createdDate"> = {
//   client: "",
//   clientId: "",
//   projectName: "",
//   type: "Residential",
//   location: "",
//   designer: "Akrish Design Team",
//   manager: "",
//   startDate: "",
//   expectedDate: "",
//   value: 0,
//   paid: 0,
//   progress: 0,
//   status: "New",
//   rooms: 0,
// };

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function statusClass(status: ProjectStatus) {
//   switch (status) {
//     case "New":
//       return "bg-blue-50 text-blue-700 border-blue-200";
//     case "Designing":
//       return "bg-purple-50 text-purple-700 border-purple-200";
//     case "In Progress":
//       return "bg-amber-50 text-amber-700 border-amber-200";
//     case "On Hold":
//       return "bg-orange-50 text-orange-700 border-orange-200";
//     case "Completed":
//       return "bg-green-50 text-green-700 border-green-200";
//     case "Cancelled":
//       return "bg-red-50 text-red-700 border-red-200";
//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function progressFromStatus(status: ProjectStatus): number {
//   if (status === "New") return 10;
//   if (status === "Designing") return 35;
//   if (status === "In Progress") return 65;
//   if (status === "On Hold") return 50;
//   if (status === "Completed") return 100;
//   return 0;
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

// function normalizeStatus(raw?: string): ProjectStatus {
//   const s = (raw || "New").trim();
//   if ((statusOptions as string[]).includes(s)) return s as ProjectStatus;
//   const lower = s.toLowerCase();
//   if (lower.includes("design")) return "Designing";
//   if (lower.includes("progress") || lower === "active") return "In Progress";
//   if (lower.includes("hold")) return "On Hold";
//   if (lower.includes("complete") || lower === "done") return "Completed";
//   if (lower.includes("cancel")) return "Cancelled";
//   return "New";
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

// function mapToUi(p: InteriorProject): Project {
//   const status = normalizeStatus(p.status);
//   const value = Number(p.value ?? p.projectValue ?? p.totalValue ?? 0) || 0;
//   const paid = Number(p.paid ?? p.amountPaid ?? 0) || 0;
//   const progress =
//     typeof p.progress === "number" && p.progress >= 0
//       ? Math.min(100, Math.round(p.progress))
//       : progressFromStatus(status);

//   return {
//     id: p.id,
//     projectNo:
//       p.projectNo || p.projectId || `INT-${p.id.slice(0, 6).toUpperCase()}`,
//     client: p.clientName || p.client || p.customerName || "Unknown",
//     clientId: (p as InteriorProject & { clientId?: string }).clientId || "",
//     projectName: p.projectName || p.name || "Untitled Project",
//     type: normalizeType(p.projectType || p.type),
//     location: p.location || "—",
//     designer: p.designer || "—",
//     manager: p.manager || "—",
//     startDate: p.startDate || toDateString(p.createdAt) || "—",
//     expectedDate: p.expectedDate || p.deadline || p.endDate || "—",
//     value,
//     paid,
//     progress,
//     status,
//     rooms: Number(p.rooms ?? 0) || 0,
//     createdDate: p.createdDate || toDateString(p.createdAt) || "—",
//   };
// }

// function clientLabel(c: InteriorClient) {
//   const name = c.name || c.company || "Unnamed";
//   const phone = c.phone ? ` · ${c.phone}` : "";
//   return `${name}${phone}`;
// }

// export default function InteriorProjectsPage() {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [clients, setClients] = useState<InteriorClient[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState<ProjectStatus | "All">(
//     "All"
//   );
//   const [typeFilter, setTypeFilter] = useState<ProjectType | "All">("All");

//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
//   const [showNewModal, setShowNewModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [newProject, setNewProject] = useState(emptyProject);
//   const [editProject, setEditProject] = useState<Project | null>(null);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const [projectData, clientData] = await Promise.all([
//           getAllInteriorProjects(),
//           getAllClients(),
//         ]);
//         if (cancelled) return;
//         setProjects(projectData.map(mapToUi));
//         setClients(clientData);
//       } catch (err) {
//         console.error("Failed to load projects:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const filteredProjects = useMemo(() => {
//     const query = search.toLowerCase().trim();

//     return projects.filter((project) => {
//       const matchesSearch =
//         !query ||
//         project.projectNo.toLowerCase().includes(query) ||
//         project.client.toLowerCase().includes(query) ||
//         project.projectName.toLowerCase().includes(query) ||
//         project.location.toLowerCase().includes(query) ||
//         project.designer.toLowerCase().includes(query);

//       const matchesStatus =
//         statusFilter === "All" || project.status === statusFilter;

//       const matchesType =
//         typeFilter === "All" || project.type === typeFilter;

//       return matchesSearch && matchesStatus && matchesType;
//     });
//   }, [projects, search, statusFilter, typeFilter]);

//   const totalProjects = projects.length;
//   const activeProjects = projects.filter(
//     (p) => p.status !== "Completed" && p.status !== "Cancelled"
//   ).length;
//   const completedProjects = projects.filter(
//     (p) => p.status === "Completed"
//   ).length;
//   const totalValue = projects.reduce((s, p) => s + p.value, 0);
//   const totalReceived = projects.reduce((s, p) => s + p.paid, 0);
//   const totalPending = totalValue - totalReceived;
//   const averageProgress =
//     totalProjects === 0
//       ? 0
//       : Math.round(
//           projects.reduce((s, p) => s + p.progress, 0) / totalProjects
//         );

//   function openEdit(project: Project) {
//     setEditProject({ ...project });
//     setShowEditModal(true);
//     setSelectedProject(null);
//   }

//   async function addProject() {
//     if (!newProject.client.trim() || !newProject.projectName.trim()) {
//       alert("Please select a client and enter project name.");
//       return;
//     }

//     setSaving(true);
//     try {
//       const today = new Date().toISOString().split("T")[0];
//       const projectNo = `INT-${Date.now().toString().slice(-6)}`;

//       const payload = {
//         projectNo,
//         clientId: newProject.clientId || "",
//         client: newProject.client.trim(),
//         clientName: newProject.client.trim(),
//         projectName: newProject.projectName.trim(),
//         name: newProject.projectName.trim(),
//         projectType: newProject.type,
//         type: newProject.type,
//         location: newProject.location.trim(),
//         designer: newProject.designer.trim(),
//         manager: newProject.manager.trim(),
//         startDate: newProject.startDate || today,
//         expectedDate: newProject.expectedDate,
//         endDate: newProject.expectedDate,
//         value: Number(newProject.value) || 0,
//         paid: Number(newProject.paid) || 0,
//         progress:
//           Number(newProject.progress) ||
//           progressFromStatus(newProject.status),
//         status: newProject.status,
//         rooms: Number(newProject.rooms) || 0,
//         createdDate: today,
//       };

//       const id = await createProject(payload);

//       setProjects((current) => [
//         {
//           id,
//           projectNo,
//           client: payload.client,
//           clientId: payload.clientId,
//           projectName: payload.projectName,
//           type: newProject.type,
//           location: payload.location || "—",
//           designer: payload.designer || "—",
//           manager: payload.manager || "—",
//           startDate: payload.startDate,
//           expectedDate: payload.expectedDate || "—",
//           value: payload.value,
//           paid: payload.paid,
//           progress: payload.progress,
//           status: newProject.status,
//           rooms: payload.rooms,
//           createdDate: today,
//         },
//         ...current,
//       ]);

//       setNewProject(emptyProject);
//       setShowNewModal(false);
//     } catch (err) {
//       console.error(err);
//       alert("Unable to create project.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function saveEdit() {
//     if (!editProject) return;
//     if (!editProject.client.trim() || !editProject.projectName.trim()) {
//       alert("Please select a client and enter project name.");
//       return;
//     }

//     setSaving(true);
//     try {
//       const payload = {
//         clientId: editProject.clientId || "",
//         client: editProject.client.trim(),
//         clientName: editProject.client.trim(),
//         projectName: editProject.projectName.trim(),
//         name: editProject.projectName.trim(),
//         projectType: editProject.type,
//         type: editProject.type,
//         location: editProject.location.trim(),
//         designer: editProject.designer.trim(),
//         manager: editProject.manager.trim(),
//         startDate: editProject.startDate,
//         expectedDate: editProject.expectedDate,
//         endDate: editProject.expectedDate,
//         value: Number(editProject.value) || 0,
//         paid: Number(editProject.paid) || 0,
//         progress: Number(editProject.progress) || 0,
//         status: editProject.status,
//         rooms: Number(editProject.rooms) || 0,
//       };

//       await updateProject(editProject.id, payload);

//       setProjects((current) =>
//         current.map((p) =>
//           p.id === editProject.id ? { ...editProject, ...payload } : p
//         )
//       );
//       setShowEditModal(false);
//       setEditProject(null);
//     } catch (err) {
//       console.error(err);
//       alert("Unable to update project.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function changeStatus(id: string, status: ProjectStatus) {
//     const progress = progressFromStatus(status);

//     setProjects((current) =>
//       current.map((p) => (p.id === id ? { ...p, status, progress } : p))
//     );
//     setSelectedProject((current) =>
//       current && current.id === id
//         ? { ...current, status, progress }
//         : current
//     );

//     try {
//       await updateProject(id, { status, progress });
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllInteriorProjects();
//         setProjects(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   async function removeProject(project: Project) {
//     const confirmed = window.confirm(
//       `Delete project "${project.projectName}"?`
//     );
//     if (!confirmed) return;

//     setProjects((current) => current.filter((p) => p.id !== project.id));
//     setSelectedProject(null);

//     try {
//       await deleteProjectFromDb(project.id);
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllInteriorProjects();
//         setProjects(data.map(mapToUi));
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
//               <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
//               <p className="mt-1 text-sm text-gray-500">
//                 Track interior projects, progress and collections.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <button
//               type="button"
//               onClick={() => {
//                 setNewProject(emptyProject);
//                 setShowNewModal(true);
//               }}
//               className="rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#125848]"
//             >
//               + New Project
//             </button>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-6 px-5 py-6 lg:px-8">
//         <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <SummaryCard
//             label="Total Projects"
//             value={loading ? "…" : String(totalProjects)}
//             helper={`${activeProjects} active · ${completedProjects} done`}
//           />
//           <SummaryCard
//             label="Project Value"
//             value={loading ? "…" : formatCurrency(totalValue)}
//             helper={`Received ${formatCurrency(totalReceived)}`}
//           />
//           <SummaryCard
//             label="Pending"
//             value={loading ? "…" : formatCurrency(totalPending)}
//             helper="Outstanding collections"
//           />
//           <SummaryCard
//             label="Avg Progress"
//             value={loading ? "…" : `${averageProgress}%`}
//             helper="Across all projects"
//           />
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-4">
//           <div className="flex flex-col gap-3 lg:flex-row">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search project, client, location, designer..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-4 py-2.5 text-sm outline-none focus:border-[#176b5b] lg:max-w-md"
//             />
//             <select
//               value={statusFilter}
//               onChange={(e) =>
//                 setStatusFilter(e.target.value as ProjectStatus | "All")
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
//             <h2 className="font-semibold">Project Directory</h2>
//             <p className="mt-1 text-xs text-gray-500">
//               {filteredProjects.length} projects
//             </p>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1100px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Project</th>
//                   <th className="px-4 py-3 font-semibold">Client</th>
//                   <th className="px-4 py-3 font-semibold">Value</th>
//                   <th className="px-4 py-3 font-semibold">Progress</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
//                   <th className="px-4 py-3 font-semibold">Deadline</th>
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
//                       Loading projects…
//                     </td>
//                   </tr>
//                 ) : (
//                   <>
//                     {filteredProjects.map((project) => (
//                       <tr key={project.id} className="hover:bg-[#fafaf8]">
//                         <td className="px-5 py-4">
//                           <p className="text-xs font-semibold text-[#176b5b]">
//                             {project.projectNo}
//                           </p>
//                           <p className="mt-1 font-medium text-gray-900">
//                             {project.projectName}
//                           </p>
//                           <p className="mt-0.5 text-xs text-gray-400">
//                             {project.type} · {project.location}
//                           </p>
//                         </td>
//                         <td className="px-4 py-4">
//                           <p className="text-sm font-medium text-gray-800">
//                             {project.client}
//                           </p>
//                           <p className="text-xs text-gray-400">
//                             {project.designer}
//                           </p>
//                         </td>
//                         <td className="px-4 py-4">
//                           <p className="text-sm font-semibold text-gray-900">
//                             {formatCurrency(project.value)}
//                           </p>
//                           <p className="text-xs text-gray-400">
//                             Paid {formatCurrency(project.paid)}
//                           </p>
//                         </td>
//                         <td className="px-4 py-4">
//                           <div className="flex items-center gap-2">
//                             <div className="h-2 w-20 overflow-hidden rounded-full bg-gray-100">
//                               <div
//                                 className="h-full rounded-full bg-[#176b5b]"
//                                 style={{ width: `${project.progress}%` }}
//                               />
//                             </div>
//                             <span className="text-xs text-gray-500">
//                               {project.progress}%
//                             </span>
//                           </div>
//                         </td>
//                         <td className="px-4 py-4">
//                           <span
//                             className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${statusClass(
//                               project.status
//                             )}`}
//                           >
//                             {project.status}
//                           </span>
//                         </td>
//                         <td className="px-4 py-4 text-sm text-gray-600">
//                           {project.expectedDate}
//                         </td>
//                         <td className="px-4 py-4 text-right">
//                           <div className="flex justify-end gap-2">
//                             <button
//                               type="button"
//                               onClick={() => setSelectedProject(project)}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                             >
//                               View
//                             </button>
//                             <button
//                               type="button"
//                               onClick={() => openEdit(project)}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50"
//                             >
//                               Edit
//                             </button>
//                             <a
//                               href={`/interior/projects/${project.id}/timeline`}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50"
//                             >
//                               Open
//                             </a>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                     {filteredProjects.length === 0 && (
//                       <tr>
//                         <td
//                           colSpan={7}
//                           className="px-5 py-12 text-center text-sm text-gray-500"
//                         >
//                           No projects found.
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

//       {selectedProject && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-4">
//               <div>
//                 <p className="text-xs font-semibold text-[#176b5b]">
//                   {selectedProject.projectNo}
//                 </p>
//                 <h2 className="mt-1 text-xl font-bold">
//                   {selectedProject.projectName}
//                 </h2>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setSelectedProject(null)}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="grid grid-cols-2 gap-3 p-6">
//               <Info label="Client" value={selectedProject.client} />
//               <Info label="Type" value={selectedProject.type} />
//               <Info label="Location" value={selectedProject.location} />
//               <Info label="Designer" value={selectedProject.designer} />
//               <Info label="Manager" value={selectedProject.manager} />
//               <Info label="Rooms" value={String(selectedProject.rooms)} />
//               <Info label="Start" value={selectedProject.startDate} />
//               <Info label="Expected" value={selectedProject.expectedDate} />
//               <Info
//                 label="Value"
//                 value={formatCurrency(selectedProject.value)}
//               />
//               <Info
//                 label="Paid"
//                 value={formatCurrency(selectedProject.paid)}
//               />
//               <Info label="Progress" value={`${selectedProject.progress}%`} />
//               <Info label="Created" value={selectedProject.createdDate} />
//             </div>

//             <div className="px-6 pb-2">
//               <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
//                 Update Status
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {statusOptions.map((status) => (
//                   <button
//                     key={status}
//                     type="button"
//                     onClick={() => changeStatus(selectedProject.id, status)}
//                     className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
//                       selectedProject.status === status
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
//               <button
//                 type="button"
//                 onClick={() => openEdit(selectedProject)}
//                 className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//               >
//                 Edit
//               </button>
//               <a
//                 href={`/interior/projects/${selectedProject.id}/timeline`}
//                 className="rounded-lg border border-[#176b5b] px-4 py-2.5 text-sm font-semibold text-[#176b5b]"
//               >
//                 Timeline
//               </a>
//               <a
//                 href={`/interior/projects/${selectedProject.id}/checklist`}
//                 className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700"
//               >
//                 Checklist
//               </a>
//               <button
//                 type="button"
//                 onClick={() => removeProject(selectedProject)}
//                 className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {(showNewModal || (showEditModal && editProject)) && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-4">
//               <h2 className="text-lg font-bold">
//                 {showNewModal ? "New Project" : "Edit Project"}
//               </h2>
//               <button
//                 type="button"
//                 onClick={() => {
//                   setShowNewModal(false);
//                   setShowEditModal(false);
//                   setEditProject(null);
//                 }}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>

//             <ProjectForm
//               data={showNewModal ? newProject : editProject!}
//               clients={clients}
//               onChange={(field, value) => {
//                 if (showNewModal) {
//                   setNewProject((current) => ({
//                     ...current,
//                     [field]: value,
//                   }));
//                 } else {
//                   setEditProject((current) =>
//                     current ? { ...current, [field]: value } : current
//                   );
//                 }
//               }}
//               onClientSelect={(clientId) => {
//                 const c = clients.find((x) => x.id === clientId);
//                 const name = c
//                   ? c.name || c.company || "Unknown"
//                   : "";
//                 if (showNewModal) {
//                   setNewProject((current) => ({
//                     ...current,
//                     clientId,
//                     client: name,
//                     location:
//                       current.location ||
//                       (c?.location ? String(c.location) : current.location),
//                   }));
//                 } else {
//                   setEditProject((current) =>
//                     current
//                       ? {
//                           ...current,
//                           clientId,
//                           client: name,
//                         }
//                       : current
//                   );
//                 }
//               }}
//             />

//             <div className="flex justify-end gap-3 border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
//               <button
//                 type="button"
//                 onClick={() => {
//                   setShowNewModal(false);
//                   setShowEditModal(false);
//                   setEditProject(null);
//                 }}
//                 className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 disabled={saving}
//                 onClick={showNewModal ? addProject : saveEdit}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848] disabled:opacity-60"
//               >
//                 {saving
//                   ? "Saving…"
//                   : showNewModal
//                   ? "Create Project"
//                   : "Save Changes"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function ProjectForm({
//   data,
//   clients,
//   onChange,
//   onClientSelect,
// }: {
//   data: Omit<Project, "id" | "projectNo" | "createdDate"> | Project;
//   clients: InteriorClient[];
//   onChange: (
//     field: keyof typeof emptyProject,
//     value: string | number
//   ) => void;
//   onClientSelect: (clientId: string) => void;
// }) {
//   return (
//     <div className="grid gap-4 p-6 sm:grid-cols-2">
//       <div>
//         <label className="mb-1.5 block text-sm font-medium text-gray-700">
//           Client *
//         </label>
//         <select
//           value={data.clientId || ""}
//           onChange={(e) => onClientSelect(e.target.value)}
//           className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//         >
//           <option value="">— Select client —</option>
//           {clients.map((c) => (
//             <option key={c.id} value={c.id}>
//               {clientLabel(c)}
//             </option>
//           ))}
//         </select>
//         {clients.length === 0 && (
//           <p className="mt-1 text-[11px] text-gray-400">
//             No clients found. Add clients under Clients first.
//           </p>
//         )}
//         {/* If editing old project with name but no clientId, show name */}
//         {!data.clientId && data.client && data.client !== "—" && (
//           <p className="mt-1 text-[11px] text-amber-600">
//             Current: {data.client} (pick from list to link)
//           </p>
//         )}
//       </div>
//       <Field
//         label="Project Name *"
//         value={data.projectName}
//         onChange={(v) => onChange("projectName", v)}
//       />
//       <div>
//         <label className="mb-1.5 block text-sm font-medium text-gray-700">
//           Type
//         </label>
//         <select
//           value={data.type}
//           onChange={(e) => onChange("type", e.target.value)}
//           className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//         >
//           {typeOptions.map((t) => (
//             <option key={t} value={t}>
//               {t}
//             </option>
//           ))}
//         </select>
//       </div>
//       <Field
//         label="Location"
//         value={data.location === "—" ? "" : data.location}
//         onChange={(v) => onChange("location", v)}
//       />
//       <Field
//         label="Designer"
//         value={data.designer === "—" ? "" : data.designer}
//         onChange={(v) => onChange("designer", v)}
//       />
//       <Field
//         label="Manager"
//         value={data.manager === "—" ? "" : data.manager}
//         onChange={(v) => onChange("manager", v)}
//       />
//       <Field
//         label="Start Date"
//         type="date"
//         value={data.startDate === "—" ? "" : data.startDate}
//         onChange={(v) => onChange("startDate", v)}
//       />
//       <Field
//         label="Expected Date"
//         type="date"
//         value={data.expectedDate === "—" ? "" : data.expectedDate}
//         onChange={(v) => onChange("expectedDate", v)}
//       />
//       <Field
//         label="Value"
//         type="number"
//         value={String(data.value || "")}
//         onChange={(v) => onChange("value", Number(v) || 0)}
//       />
//       <Field
//         label="Paid"
//         type="number"
//         value={String(data.paid || "")}
//         onChange={(v) => onChange("paid", Number(v) || 0)}
//       />
//       <Field
//         label="Progress %"
//         type="number"
//         value={String(data.progress || "")}
//         onChange={(v) => onChange("progress", Number(v) || 0)}
//       />
//       <Field
//         label="Rooms"
//         type="number"
//         value={String(data.rooms || "")}
//         onChange={(v) => onChange("rooms", Number(v) || 0)}
//       />
//       <div>
//         <label className="mb-1.5 block text-sm font-medium text-gray-700">
//           Status
//         </label>
//         <select
//           value={data.status}
//           onChange={(e) => onChange("status", e.target.value)}
//           className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//         >
//           {statusOptions.map((s) => (
//             <option key={s} value={s}>
//               {s}
//             </option>
//           ))}
//         </select>
//       </div>
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

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAllInteriorProjects,
//   createProject,
//   updateProject,
//   deleteProject as deleteProjectFromDb,
//   type InteriorProject,
// } from "@/modules/interior/services/projectService";
// import {
//   getAllClients,
//   type InteriorClient,
// } from "@/modules/interior/services/clientService";
// import {
//   getAllEmployees,
//   type InteriorEmployee,
// } from "@/modules/interior/services/employeeService";
// import { Timestamp } from "firebase/firestore";

// type ProjectStatus =
//   | "New"
//   | "Designing"
//   | "In Progress"
//   | "On Hold"
//   | "Completed"
//   | "Cancelled";

// type ProjectType =
//   | "Residential"
//   | "Commercial"
//   | "Office"
//   | "Villa"
//   | "Apartment";

// type Project = {
//   id: string;
//   projectNo: string;
//   client: string;
//   clientId: string;
//   projectName: string;
//   type: ProjectType;
//   location: string;
//   designer: string;
//   manager: string;
//   managerId: string;
//   startDate: string;
//   expectedDate: string;
//   value: number;
//   paid: number;
//   progress: number;
//   status: ProjectStatus;
//   rooms: number;
//   createdDate: string;
// };

// const statusOptions: ProjectStatus[] = [
//   "New",
//   "Designing",
//   "In Progress",
//   "On Hold",
//   "Completed",
//   "Cancelled",
// ];

// const typeOptions: ProjectType[] = [
//   "Residential",
//   "Commercial",
//   "Office",
//   "Villa",
//   "Apartment",
// ];

// const emptyProject: Omit<Project, "id" | "projectNo" | "createdDate"> = {
//   client: "",
//   clientId: "",
//   projectName: "",
//   type: "Residential",
//   location: "",
//   designer: "Akrish Design Team",
//   manager: "",
//   managerId: "",
//   startDate: "",
//   expectedDate: "",
//   value: 0,
//   paid: 0,
//   progress: 0,
//   status: "New",
//   rooms: 0,
// };

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function statusClass(status: ProjectStatus) {
//   switch (status) {
//     case "New":
//       return "bg-blue-50 text-blue-700 border-blue-200";
//     case "Designing":
//       return "bg-purple-50 text-purple-700 border-purple-200";
//     case "In Progress":
//       return "bg-amber-50 text-amber-700 border-amber-200";
//     case "On Hold":
//       return "bg-orange-50 text-orange-700 border-orange-200";
//     case "Completed":
//       return "bg-green-50 text-green-700 border-green-200";
//     case "Cancelled":
//       return "bg-red-50 text-red-700 border-red-200";
//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function progressFromStatus(status: ProjectStatus): number {
//   if (status === "New") return 10;
//   if (status === "Designing") return 35;
//   if (status === "In Progress") return 65;
//   if (status === "On Hold") return 50;
//   if (status === "Completed") return 100;
//   return 0;
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

// function normalizeStatus(raw?: string): ProjectStatus {
//   const s = (raw || "New").trim();
//   if ((statusOptions as string[]).includes(s)) return s as ProjectStatus;
//   const lower = s.toLowerCase();
//   if (lower.includes("design")) return "Designing";
//   if (lower.includes("progress") || lower === "active") return "In Progress";
//   if (lower.includes("hold")) return "On Hold";
//   if (lower.includes("complete") || lower === "done") return "Completed";
//   if (lower.includes("cancel")) return "Cancelled";
//   return "New";
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

// function mapToUi(p: InteriorProject): Project {
//   const status = normalizeStatus(p.status);
//   const value = Number(p.value ?? p.projectValue ?? p.totalValue ?? 0) || 0;
//   const paid = Number(p.paid ?? p.amountPaid ?? 0) || 0;
//   const progress =
//     typeof p.progress === "number" && p.progress >= 0
//       ? Math.min(100, Math.round(p.progress))
//       : progressFromStatus(status);

//   const extra = p as InteriorProject & {
//     clientId?: string;
//     managerId?: string;
//   };

//   return {
//     id: p.id,
//     projectNo:
//       p.projectNo || p.projectId || `INT-${p.id.slice(0, 6).toUpperCase()}`,
//     client: p.clientName || p.client || p.customerName || "Unknown",
//     clientId: extra.clientId || "",
//     projectName: p.projectName || p.name || "Untitled Project",
//     type: normalizeType(p.projectType || p.type),
//     location: p.location || "—",
//     designer: p.designer || "—",
//     manager: p.manager || "—",
//     managerId: extra.managerId || "",
//     startDate: p.startDate || toDateString(p.createdAt) || "—",
//     expectedDate: p.expectedDate || p.deadline || p.endDate || "—",
//     value,
//     paid,
//     progress,
//     status,
//     rooms: Number(p.rooms ?? 0) || 0,
//     createdDate: p.createdDate || toDateString(p.createdAt) || "—",
//   };
// }

// function clientLabel(c: InteriorClient) {
//   const name = c.name || c.company || "Unnamed";
//   const phone = c.phone ? ` · ${c.phone}` : "";
//   return `${name}${phone}`;
// }

// function employeeLabel(e: InteriorEmployee) {
//   const name = e.name || "Unnamed";
//   const id = e.employeeId ? ` (${e.employeeId})` : "";
//   const role = e.designation ? ` · ${e.designation}` : "";
//   return `${name}${id}${role}`;
// }

// function isActiveEmployee(e: InteriorEmployee) {
//   const s = (e.status || "Active").toLowerCase();
//   return !s.includes("inactive") && !s.includes("resign");
// }

// export default function InteriorProjectsPage() {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [clients, setClients] = useState<InteriorClient[]>([]);
//   const [employees, setEmployees] = useState<InteriorEmployee[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState<ProjectStatus | "All">(
//     "All"
//   );
//   const [typeFilter, setTypeFilter] = useState<ProjectType | "All">("All");

//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
//   const [showNewModal, setShowNewModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [newProject, setNewProject] = useState(emptyProject);
//   const [editProject, setEditProject] = useState<Project | null>(null);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const [projectData, clientData, employeeData] = await Promise.all([
//           getAllInteriorProjects(),
//           getAllClients(),
//           getAllEmployees(),
//         ]);
//         if (cancelled) return;
//         setProjects(projectData.map(mapToUi));
//         setClients(clientData);
//         setEmployees(employeeData);
//       } catch (err) {
//         console.error("Failed to load projects:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const managerOptions = useMemo(
//     () =>
//       employees
//         .filter(isActiveEmployee)
//         .sort((a, b) => (a.name || "").localeCompare(b.name || "")),
//     [employees]
//   );

//   const filteredProjects = useMemo(() => {
//     const query = search.toLowerCase().trim();

//     return projects.filter((project) => {
//       const matchesSearch =
//         !query ||
//         project.projectNo.toLowerCase().includes(query) ||
//         project.client.toLowerCase().includes(query) ||
//         project.projectName.toLowerCase().includes(query) ||
//         project.location.toLowerCase().includes(query) ||
//         project.designer.toLowerCase().includes(query) ||
//         project.manager.toLowerCase().includes(query);

//       const matchesStatus =
//         statusFilter === "All" || project.status === statusFilter;

//       const matchesType =
//         typeFilter === "All" || project.type === typeFilter;

//       return matchesSearch && matchesStatus && matchesType;
//     });
//   }, [projects, search, statusFilter, typeFilter]);

//   const totalProjects = projects.length;
//   const activeProjects = projects.filter(
//     (p) => p.status !== "Completed" && p.status !== "Cancelled"
//   ).length;
//   const completedProjects = projects.filter(
//     (p) => p.status === "Completed"
//   ).length;
//   const totalValue = projects.reduce((s, p) => s + p.value, 0);
//   const totalReceived = projects.reduce((s, p) => s + p.paid, 0);
//   const totalPending = totalValue - totalReceived;
//   const averageProgress =
//     totalProjects === 0
//       ? 0
//       : Math.round(
//           projects.reduce((s, p) => s + p.progress, 0) / totalProjects
//         );

//   function openEdit(project: Project) {
//     setEditProject({ ...project });
//     setShowEditModal(true);
//     setSelectedProject(null);
//   }

//   async function addProject() {
//     if (!newProject.client.trim() || !newProject.projectName.trim()) {
//       alert("Please select a client and enter project name.");
//       return;
//     }

//     setSaving(true);
//     try {
//       const today = new Date().toISOString().split("T")[0];
//       const projectNo = `INT-${Date.now().toString().slice(-6)}`;

//       const payload = {
//         projectNo,
//         clientId: newProject.clientId || "",
//         client: newProject.client.trim(),
//         clientName: newProject.client.trim(),
//         projectName: newProject.projectName.trim(),
//         name: newProject.projectName.trim(),
//         projectType: newProject.type,
//         type: newProject.type,
//         location: newProject.location.trim(),
//         designer: newProject.designer.trim(),
//         manager: newProject.manager.trim(),
//         managerId: newProject.managerId || "",
//         startDate: newProject.startDate || today,
//         expectedDate: newProject.expectedDate,
//         endDate: newProject.expectedDate,
//         value: Number(newProject.value) || 0,
//         paid: Number(newProject.paid) || 0,
//         progress:
//           Number(newProject.progress) ||
//           progressFromStatus(newProject.status),
//         status: newProject.status,
//         rooms: Number(newProject.rooms) || 0,
//         createdDate: today,
//       };

//       const id = await createProject(payload);

//       setProjects((current) => [
//         {
//           id,
//           projectNo,
//           client: payload.client,
//           clientId: payload.clientId,
//           projectName: payload.projectName,
//           type: newProject.type,
//           location: payload.location || "—",
//           designer: payload.designer || "—",
//           manager: payload.manager || "—",
//           managerId: payload.managerId,
//           startDate: payload.startDate,
//           expectedDate: payload.expectedDate || "—",
//           value: payload.value,
//           paid: payload.paid,
//           progress: payload.progress,
//           status: newProject.status,
//           rooms: payload.rooms,
//           createdDate: today,
//         },
//         ...current,
//       ]);

//       setNewProject(emptyProject);
//       setShowNewModal(false);
//     } catch (err) {
//       console.error(err);
//       alert("Unable to create project.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function saveEdit() {
//     if (!editProject) return;
//     if (!editProject.client.trim() || !editProject.projectName.trim()) {
//       alert("Please select a client and enter project name.");
//       return;
//     }

//     setSaving(true);
//     try {
//       const payload = {
//         clientId: editProject.clientId || "",
//         client: editProject.client.trim(),
//         clientName: editProject.client.trim(),
//         projectName: editProject.projectName.trim(),
//         name: editProject.projectName.trim(),
//         projectType: editProject.type,
//         type: editProject.type,
//         location: editProject.location.trim(),
//         designer: editProject.designer.trim(),
//         manager: editProject.manager.trim(),
//         managerId: editProject.managerId || "",
//         startDate: editProject.startDate,
//         expectedDate: editProject.expectedDate,
//         endDate: editProject.expectedDate,
//         value: Number(editProject.value) || 0,
//         paid: Number(editProject.paid) || 0,
//         progress: Number(editProject.progress) || 0,
//         status: editProject.status,
//         rooms: Number(editProject.rooms) || 0,
//       };

//       await updateProject(editProject.id, payload);

//       setProjects((current) =>
//         current.map((p) =>
//           p.id === editProject.id ? { ...editProject, ...payload } : p
//         )
//       );
//       setShowEditModal(false);
//       setEditProject(null);
//     } catch (err) {
//       console.error(err);
//       alert("Unable to update project.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function changeStatus(id: string, status: ProjectStatus) {
//     const progress = progressFromStatus(status);

//     setProjects((current) =>
//       current.map((p) => (p.id === id ? { ...p, status, progress } : p))
//     );
//     setSelectedProject((current) =>
//       current && current.id === id
//         ? { ...current, status, progress }
//         : current
//     );

//     try {
//       await updateProject(id, { status, progress });
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllInteriorProjects();
//         setProjects(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   async function removeProject(project: Project) {
//     const confirmed = window.confirm(
//       `Delete project "${project.projectName}"?`
//     );
//     if (!confirmed) return;

//     setProjects((current) => current.filter((p) => p.id !== project.id));
//     setSelectedProject(null);

//     try {
//       await deleteProjectFromDb(project.id);
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllInteriorProjects();
//         setProjects(data.map(mapToUi));
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
//               <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
//               <p className="mt-1 text-sm text-gray-500">
//                 Track interior projects, progress and collections.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <button
//               type="button"
//               onClick={() => {
//                 setNewProject(emptyProject);
//                 setShowNewModal(true);
//               }}
//               className="rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#125848]"
//             >
//               + New Project
//             </button>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-6 px-5 py-6 lg:px-8">
//         <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <SummaryCard
//             label="Total Projects"
//             value={loading ? "…" : String(totalProjects)}
//             helper={`${activeProjects} active · ${completedProjects} done`}
//           />
//           <SummaryCard
//             label="Project Value"
//             value={loading ? "…" : formatCurrency(totalValue)}
//             helper={`Received ${formatCurrency(totalReceived)}`}
//           />
//           <SummaryCard
//             label="Pending"
//             value={loading ? "…" : formatCurrency(totalPending)}
//             helper="Outstanding collections"
//           />
//           <SummaryCard
//             label="Avg Progress"
//             value={loading ? "…" : `${averageProgress}%`}
//             helper="Across all projects"
//           />
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-4">
//           <div className="flex flex-col gap-3 lg:flex-row">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search project, client, manager, location..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-4 py-2.5 text-sm outline-none focus:border-[#176b5b] lg:max-w-md"
//             />
//             <select
//               value={statusFilter}
//               onChange={(e) =>
//                 setStatusFilter(e.target.value as ProjectStatus | "All")
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
//             <h2 className="font-semibold">Project Directory</h2>
//             <p className="mt-1 text-xs text-gray-500">
//               {filteredProjects.length} projects
//             </p>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1100px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Project</th>
//                   <th className="px-4 py-3 font-semibold">Client</th>
//                   <th className="px-4 py-3 font-semibold">Value</th>
//                   <th className="px-4 py-3 font-semibold">Progress</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
//                   <th className="px-4 py-3 font-semibold">Deadline</th>
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
//                       Loading projects…
//                     </td>
//                   </tr>
//                 ) : (
//                   <>
//                     {filteredProjects.map((project) => (
//                       <tr key={project.id} className="hover:bg-[#fafaf8]">
//                         <td className="px-5 py-4">
//                           <p className="text-xs font-semibold text-[#176b5b]">
//                             {project.projectNo}
//                           </p>
//                           <p className="mt-1 font-medium text-gray-900">
//                             {project.projectName}
//                           </p>
//                           <p className="mt-0.5 text-xs text-gray-400">
//                             {project.type} · {project.location}
//                           </p>
//                         </td>
//                         <td className="px-4 py-4">
//                           <p className="text-sm font-medium text-gray-800">
//                             {project.client}
//                           </p>
//                           <p className="text-xs text-gray-400">
//                             Mgr: {project.manager}
//                           </p>
//                         </td>
//                         <td className="px-4 py-4">
//                           <p className="text-sm font-semibold text-gray-900">
//                             {formatCurrency(project.value)}
//                           </p>
//                           <p className="text-xs text-gray-400">
//                             Paid {formatCurrency(project.paid)}
//                           </p>
//                         </td>
//                         <td className="px-4 py-4">
//                           <div className="flex items-center gap-2">
//                             <div className="h-2 w-20 overflow-hidden rounded-full bg-gray-100">
//                               <div
//                                 className="h-full rounded-full bg-[#176b5b]"
//                                 style={{ width: `${project.progress}%` }}
//                               />
//                             </div>
//                             <span className="text-xs text-gray-500">
//                               {project.progress}%
//                             </span>
//                           </div>
//                         </td>
//                         <td className="px-4 py-4">
//                           <span
//                             className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${statusClass(
//                               project.status
//                             )}`}
//                           >
//                             {project.status}
//                           </span>
//                         </td>
//                         <td className="px-4 py-4 text-sm text-gray-600">
//                           {project.expectedDate}
//                         </td>
//                         <td className="px-4 py-4 text-right">
//                           <div className="flex justify-end gap-2">
//                             <button
//                               type="button"
//                               onClick={() => setSelectedProject(project)}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                             >
//                               View
//                             </button>
//                             <button
//                               type="button"
//                               onClick={() => openEdit(project)}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50"
//                             >
//                               Edit
//                             </button>
//                             <a
//                               href={`/interior/projects/${project.id}/timeline`}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50"
//                             >
//                               Open
//                             </a>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                     {filteredProjects.length === 0 && (
//                       <tr>
//                         <td
//                           colSpan={7}
//                           className="px-5 py-12 text-center text-sm text-gray-500"
//                         >
//                           No projects found.
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

//       {selectedProject && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-4">
//               <div>
//                 <p className="text-xs font-semibold text-[#176b5b]">
//                   {selectedProject.projectNo}
//                 </p>
//                 <h2 className="mt-1 text-xl font-bold">
//                   {selectedProject.projectName}
//                 </h2>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setSelectedProject(null)}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="grid grid-cols-2 gap-3 p-6">
//               <Info label="Client" value={selectedProject.client} />
//               <Info label="Type" value={selectedProject.type} />
//               <Info label="Location" value={selectedProject.location} />
//               <Info label="Designer" value={selectedProject.designer} />
//               <Info label="Manager" value={selectedProject.manager} />
//               <Info label="Rooms" value={String(selectedProject.rooms)} />
//               <Info label="Start" value={selectedProject.startDate} />
//               <Info label="Expected" value={selectedProject.expectedDate} />
//               <Info
//                 label="Value"
//                 value={formatCurrency(selectedProject.value)}
//               />
//               <Info
//                 label="Paid"
//                 value={formatCurrency(selectedProject.paid)}
//               />
//               <Info label="Progress" value={`${selectedProject.progress}%`} />
//               <Info label="Created" value={selectedProject.createdDate} />
//             </div>

//             <div className="px-6 pb-2">
//               <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
//                 Update Status
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {statusOptions.map((status) => (
//                   <button
//                     key={status}
//                     type="button"
//                     onClick={() => changeStatus(selectedProject.id, status)}
//                     className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
//                       selectedProject.status === status
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
//               <button
//                 type="button"
//                 onClick={() => openEdit(selectedProject)}
//                 className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//               >
//                 Edit
//               </button>
//               <a
//                 href={`/interior/projects/${selectedProject.id}/timeline`}
//                 className="rounded-lg border border-[#176b5b] px-4 py-2.5 text-sm font-semibold text-[#176b5b]"
//               >
//                 Timeline
//               </a>
//               <a
//                 href={`/interior/projects/${selectedProject.id}/checklist`}
//                 className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700"
//               >
//                 Checklist
//               </a>
//               <button
//                 type="button"
//                 onClick={() => removeProject(selectedProject)}
//                 className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {(showNewModal || (showEditModal && editProject)) && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-4">
//               <h2 className="text-lg font-bold">
//                 {showNewModal ? "New Project" : "Edit Project"}
//               </h2>
//               <button
//                 type="button"
//                 onClick={() => {
//                   setShowNewModal(false);
//                   setShowEditModal(false);
//                   setEditProject(null);
//                 }}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>

//             <ProjectForm
//               data={showNewModal ? newProject : editProject!}
//               clients={clients}
//               managers={managerOptions}
//               onChange={(field, value) => {
//                 if (showNewModal) {
//                   setNewProject((current) => ({
//                     ...current,
//                     [field]: value,
//                   }));
//                 } else {
//                   setEditProject((current) =>
//                     current ? { ...current, [field]: value } : current
//                   );
//                 }
//               }}
//               onClientSelect={(clientId) => {
//                 const c = clients.find((x) => x.id === clientId);
//                 const name = c ? c.name || c.company || "Unknown" : "";
//                 if (showNewModal) {
//                   setNewProject((current) => ({
//                     ...current,
//                     clientId,
//                     client: name,
//                     location:
//                       current.location ||
//                       (c?.location ? String(c.location) : current.location),
//                   }));
//                 } else {
//                   setEditProject((current) =>
//                     current
//                       ? { ...current, clientId, client: name }
//                       : current
//                   );
//                 }
//               }}
//               onManagerSelect={(managerId) => {
//                 const e = managerOptions.find((x) => x.id === managerId);
//                 const name = e?.name || "";
//                 if (showNewModal) {
//                   setNewProject((current) => ({
//                     ...current,
//                     managerId,
//                     manager: name,
//                   }));
//                 } else {
//                   setEditProject((current) =>
//                     current
//                       ? { ...current, managerId, manager: name }
//                       : current
//                   );
//                 }
//               }}
//             />

//             <div className="flex justify-end gap-3 border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
//               <button
//                 type="button"
//                 onClick={() => {
//                   setShowNewModal(false);
//                   setShowEditModal(false);
//                   setEditProject(null);
//                 }}
//                 className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 disabled={saving}
//                 onClick={showNewModal ? addProject : saveEdit}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848] disabled:opacity-60"
//               >
//                 {saving
//                   ? "Saving…"
//                   : showNewModal
//                   ? "Create Project"
//                   : "Save Changes"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function ProjectForm({
//   data,
//   clients,
//   managers,
//   onChange,
//   onClientSelect,
//   onManagerSelect,
// }: {
//   data: Omit<Project, "id" | "projectNo" | "createdDate"> | Project;
//   clients: InteriorClient[];
//   managers: InteriorEmployee[];
//   onChange: (
//     field: keyof typeof emptyProject,
//     value: string | number
//   ) => void;
//   onClientSelect: (clientId: string) => void;
//   onManagerSelect: (managerId: string) => void;
// }) {
//   return (
//     <div className="grid gap-4 p-6 sm:grid-cols-2">
//       <div>
//         <label className="mb-1.5 block text-sm font-medium text-gray-700">
//           Client *
//         </label>
//         <select
//           value={data.clientId || ""}
//           onChange={(e) => onClientSelect(e.target.value)}
//           className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//         >
//           <option value="">— Select client —</option>
//           {clients.map((c) => (
//             <option key={c.id} value={c.id}>
//               {clientLabel(c)}
//             </option>
//           ))}
//         </select>
//         {clients.length === 0 && (
//           <p className="mt-1 text-[11px] text-gray-400">
//             Add clients under Clients first.
//           </p>
//         )}
//         {!data.clientId && data.client && data.client !== "—" && (
//           <p className="mt-1 text-[11px] text-amber-600">
//             Current: {data.client} (pick from list to link)
//           </p>
//         )}
//       </div>

//       <Field
//         label="Project Name *"
//         value={data.projectName}
//         onChange={(v) => onChange("projectName", v)}
//       />

//       <div>
//         <label className="mb-1.5 block text-sm font-medium text-gray-700">
//           Type
//         </label>
//         <select
//           value={data.type}
//           onChange={(e) => onChange("type", e.target.value)}
//           className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//         >
//           {typeOptions.map((t) => (
//             <option key={t} value={t}>
//               {t}
//             </option>
//           ))}
//         </select>
//       </div>

//       <Field
//         label="Location"
//         value={data.location === "—" ? "" : data.location}
//         onChange={(v) => onChange("location", v)}
//       />

//       <Field
//         label="Designer"
//         value={data.designer === "—" ? "" : data.designer}
//         onChange={(v) => onChange("designer", v)}
//       />

//       {/* Manager — employees only */}
//       <div>
//         <label className="mb-1.5 block text-sm font-medium text-gray-700">
//           Manager
//         </label>
//         <select
//           value={data.managerId || ""}
//           onChange={(e) => onManagerSelect(e.target.value)}
//           className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//         >
//           <option value="">— Select manager —</option>
//           {managers.map((e) => (
//             <option key={e.id} value={e.id}>
//               {employeeLabel(e)}
//             </option>
//           ))}
//         </select>
//         {managers.length === 0 && (
//           <p className="mt-1 text-[11px] text-gray-400">
//             Add employees under HRMS first.
//           </p>
//         )}
//         {!data.managerId && data.manager && data.manager !== "—" && (
//           <p className="mt-1 text-[11px] text-amber-600">
//             Current: {data.manager} (pick from list to link)
//           </p>
//         )}
//       </div>

//       <Field
//         label="Start Date"
//         type="date"
//         value={data.startDate === "—" ? "" : data.startDate}
//         onChange={(v) => onChange("startDate", v)}
//       />
//       <Field
//         label="Expected Date"
//         type="date"
//         value={data.expectedDate === "—" ? "" : data.expectedDate}
//         onChange={(v) => onChange("expectedDate", v)}
//       />
//       <Field
//         label="Value"
//         type="number"
//         value={String(data.value || "")}
//         onChange={(v) => onChange("value", Number(v) || 0)}
//       />
//       <Field
//         label="Paid"
//         type="number"
//         value={String(data.paid || "")}
//         onChange={(v) => onChange("paid", Number(v) || 0)}
//       />
//       <Field
//         label="Progress %"
//         type="number"
//         value={String(data.progress || "")}
//         onChange={(v) => onChange("progress", Number(v) || 0)}
//       />
//       {/* <Field
//         label="Rooms"
//         type="number"
//         value={String(data.rooms || "")}
//         onChange={(v) => onChange("rooms", Number(v) || 0)}
//       /> */}
//       <div>
//         <label className="mb-1.5 block text-sm font-medium text-gray-700">
//           Status
//         </label>
//         <select
//           value={data.status}
//           onChange={(e) => onChange("status", e.target.value)}
//           className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//         >
//           {statusOptions.map((s) => (
//             <option key={s} value={s}>
//               {s}
//             </option>
//           ))}
//         </select>
//       </div>
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
import Link from "next/link";
import {
  getAllInteriorProjects,
  createProject,
  updateProject,
  deleteProject as deleteProjectFromDb,
  type InteriorProject,
} from "@/modules/interior/services/projectService";
import {
  getAllClients,
  type InteriorClient,
} from "@/modules/interior/services/clientService";
import {
  getAllEmployees,
  type InteriorEmployee,
} from "@/modules/interior/services/employeeService";
import { Timestamp } from "firebase/firestore";
import { Plus } from "lucide-react";

type ProjectStatus =
  | "New"
  | "Designing"
  | "In Progress"
  | "On Hold"
  | "Completed"
  | "Cancelled";

type ProjectType =
  | "Residential"
  | "Commercial"
  | "Office"
  | "Villa"
  | "Apartment";

type Project = {
  id: string;
  projectNo: string;
  client: string;
  clientId: string;
  projectName: string;
  type: ProjectType;
  location: string;
  designer: string;
  manager: string;
  managerId: string;
  startDate: string;
  expectedDate: string;
  value: number;
  paid: number;
  progress: number;
  status: ProjectStatus;
  rooms: number;
  createdDate: string;
};

const statusOptions: ProjectStatus[] = [
  "New",
  "Designing",
  "In Progress",
  "On Hold",
  "Completed",
  "Cancelled",
];

const typeOptions: ProjectType[] = [
  "Residential",
  "Commercial",
  "Office",
  "Villa",
  "Apartment",
];

const emptyProject: Omit<Project, "id" | "projectNo" | "createdDate"> = {
  client: "",
  clientId: "",
  projectName: "",
  type: "Residential",
  location: "",
  designer: "Akrish Design Team",
  manager: "",
  managerId: "",
  startDate: "",
  expectedDate: "",
  value: 0,
  paid: 0,
  progress: 0,
  status: "New",
  rooms: 0,
};

function formatCurrency(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function statusClass(status: ProjectStatus) {
  switch (status) {
    case "New":
      return "bg-blue-50 text-blue-700 border-blue-200";
    case "Designing":
      return "bg-purple-50 text-purple-700 border-purple-200";
    case "In Progress":
      return "bg-amber-50 text-amber-700 border-amber-200";
    case "On Hold":
      return "bg-orange-50 text-orange-700 border-orange-200";
    case "Completed":
      return "bg-green-50 text-green-700 border-green-200";
    case "Cancelled":
      return "bg-red-50 text-red-700 border-red-200";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
}

function progressFromStatus(status: ProjectStatus): number {
  if (status === "New") return 10;
  if (status === "Designing") return 35;
  if (status === "In Progress") return 65;
  if (status === "On Hold") return 50;
  if (status === "Completed") return 100;
  return 0;
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

function normalizeStatus(raw?: string): ProjectStatus {
  const s = (raw || "New").trim();
  if ((statusOptions as string[]).includes(s)) return s as ProjectStatus;
  const lower = s.toLowerCase();
  if (lower.includes("design")) return "Designing";
  if (lower.includes("progress") || lower === "active") return "In Progress";
  if (lower.includes("hold")) return "On Hold";
  if (lower.includes("complete") || lower === "done") return "Completed";
  if (lower.includes("cancel")) return "Cancelled";
  return "New";
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

function mapToUi(p: InteriorProject): Project {
  const status = normalizeStatus(p.status);
  const value = Number(p.value ?? p.projectValue ?? p.totalValue ?? 0) || 0;
  const paid = Number(p.paid ?? p.amountPaid ?? 0) || 0;
  const progress =
    typeof p.progress === "number" && p.progress >= 0
      ? Math.min(100, Math.round(p.progress))
      : progressFromStatus(status);

  const extra = p as InteriorProject & {
    clientId?: string;
    managerId?: string;
  };

  return {
    id: p.id,
    projectNo:
      p.projectNo || p.projectId || `INT-${p.id.slice(0, 6).toUpperCase()}`,
    client: p.clientName || p.client || p.customerName || "Unknown",
    clientId: extra.clientId || "",
    projectName: p.projectName || p.name || "Untitled Project",
    type: normalizeType(p.projectType || p.type),
    location: p.location || "—",
    designer: p.designer || "—",
    manager: p.manager || "—",
    managerId: extra.managerId || "",
    startDate: p.startDate || toDateString(p.createdAt) || "—",
    expectedDate: p.expectedDate || p.deadline || p.endDate || "—",
    value,
    paid,
    progress,
    status,
    rooms: Number(p.rooms ?? 0) || 0,
    createdDate: p.createdDate || toDateString(p.createdAt) || "—",
  };
}

function clientLabel(c: InteriorClient) {
  const name = c.name || c.company || "Unnamed";
  const phone = c.phone ? ` · ${c.phone}` : "";
  return `${name}${phone}`;
}

function employeeLabel(e: InteriorEmployee) {
  const name = e.name || "Unnamed";
  const id = e.employeeId ? ` (${e.employeeId})` : "";
  const role = e.designation ? ` · ${e.designation}` : "";
  return `${name}${id}${role}`;
}

function isActiveEmployee(e: InteriorEmployee) {
  const s = (e.status || "Active").toLowerCase();
  return !s.includes("inactive") && !s.includes("resign");
}

export default function InteriorProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [clients, setClients] = useState<InteriorClient[]>([]);
  const [employees, setEmployees] = useState<InteriorEmployee[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<ProjectStatus | "All">(
    "All"
  );
  const [typeFilter, setTypeFilter] = useState<ProjectType | "All">("All");

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showNewModal, setShowNewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newProject, setNewProject] = useState(emptyProject);
  const [editProject, setEditProject] = useState<Project | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const [projectData, clientData, employeeData] = await Promise.all([
          getAllInteriorProjects(),
          getAllClients(),
          getAllEmployees(),
        ]);
        if (cancelled) return;
        setProjects(projectData.map(mapToUi));
        setClients(clientData);
        setEmployees(employeeData);
      } catch (err) {
        console.error("Failed to load projects:", err);
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
    if (!selectedProject && !showNewModal && !showEditModal) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [selectedProject, showNewModal, showEditModal]);

  const managerOptions = useMemo(
    () =>
      employees
        .filter(isActiveEmployee)
        .sort((a, b) => (a.name || "").localeCompare(b.name || "")),
    [employees]
  );

  const filteredProjects = useMemo(() => {
    const query = search.toLowerCase().trim();

    return projects.filter((project) => {
      const matchesSearch =
        !query ||
        project.projectNo.toLowerCase().includes(query) ||
        project.client.toLowerCase().includes(query) ||
        project.projectName.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query) ||
        project.designer.toLowerCase().includes(query) ||
        project.manager.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "All" || project.status === statusFilter;

      const matchesType = typeFilter === "All" || project.type === typeFilter;

      return matchesSearch && matchesStatus && matchesType;
    });
  }, [projects, search, statusFilter, typeFilter]);

  const totalProjects = projects.length;
  const activeProjects = projects.filter(
    (p) => p.status !== "Completed" && p.status !== "Cancelled"
  ).length;
  const completedProjects = projects.filter(
    (p) => p.status === "Completed"
  ).length;
  const totalValue = projects.reduce((s, p) => s + p.value, 0);
  const totalReceived = projects.reduce((s, p) => s + p.paid, 0);
  const totalPending = totalValue - totalReceived;
  const averageProgress =
    totalProjects === 0
      ? 0
      : Math.round(
          projects.reduce((s, p) => s + p.progress, 0) / totalProjects
        );

  function openEdit(project: Project) {
    setEditProject({ ...project });
    setShowEditModal(true);
    setSelectedProject(null);
  }

  async function addProject() {
    if (!newProject.client.trim() || !newProject.projectName.trim()) {
      alert("Please select a client and enter project name.");
      return;
    }

    setSaving(true);
    try {
      const today = new Date().toISOString().split("T")[0];
      const projectNo = `INT-${Date.now().toString().slice(-6)}`;

      const payload = {
        projectNo,
        clientId: newProject.clientId || "",
        client: newProject.client.trim(),
        clientName: newProject.client.trim(),
        projectName: newProject.projectName.trim(),
        name: newProject.projectName.trim(),
        projectType: newProject.type,
        type: newProject.type,
        location: newProject.location.trim(),
        designer: newProject.designer.trim(),
        manager: newProject.manager.trim(),
        managerId: newProject.managerId || "",
        startDate: newProject.startDate || today,
        expectedDate: newProject.expectedDate,
        endDate: newProject.expectedDate,
        value: Number(newProject.value) || 0,
        paid: Number(newProject.paid) || 0,
        progress:
          Number(newProject.progress) || progressFromStatus(newProject.status),
        status: newProject.status,
        rooms: Number(newProject.rooms) || 0,
        createdDate: today,
      };

      const id = await createProject(payload);

      setProjects((current) => [
        {
          id,
          projectNo,
          client: payload.client,
          clientId: payload.clientId,
          projectName: payload.projectName,
          type: newProject.type,
          location: payload.location || "—",
          designer: payload.designer || "—",
          manager: payload.manager || "—",
          managerId: payload.managerId,
          startDate: payload.startDate,
          expectedDate: payload.expectedDate || "—",
          value: payload.value,
          paid: payload.paid,
          progress: payload.progress,
          status: newProject.status,
          rooms: payload.rooms,
          createdDate: today,
        },
        ...current,
      ]);

      setNewProject(emptyProject);
      setShowNewModal(false);
    } catch (err) {
      console.error(err);
      alert("Unable to create project.");
    } finally {
      setSaving(false);
    }
  }

  async function saveEdit() {
    if (!editProject) return;
    if (!editProject.client.trim() || !editProject.projectName.trim()) {
      alert("Please select a client and enter project name.");
      return;
    }

    setSaving(true);
    try {
      const payload = {
        clientId: editProject.clientId || "",
        client: editProject.client.trim(),
        clientName: editProject.client.trim(),
        projectName: editProject.projectName.trim(),
        name: editProject.projectName.trim(),
        projectType: editProject.type,
        type: editProject.type,
        location: editProject.location.trim(),
        designer: editProject.designer.trim(),
        manager: editProject.manager.trim(),
        managerId: editProject.managerId || "",
        startDate: editProject.startDate,
        expectedDate: editProject.expectedDate,
        endDate: editProject.expectedDate,
        value: Number(editProject.value) || 0,
        paid: Number(editProject.paid) || 0,
        progress: Number(editProject.progress) || 0,
        status: editProject.status,
        rooms: Number(editProject.rooms) || 0,
      };

      await updateProject(editProject.id, payload);

      setProjects((current) =>
        current.map((p) =>
          p.id === editProject.id ? { ...editProject, ...payload } : p
        )
      );
      setShowEditModal(false);
      setEditProject(null);
    } catch (err) {
      console.error(err);
      alert("Unable to update project.");
    } finally {
      setSaving(false);
    }
  }

  async function changeStatus(id: string, status: ProjectStatus) {
    const progress = progressFromStatus(status);

    setProjects((current) =>
      current.map((p) => (p.id === id ? { ...p, status, progress } : p))
    );
    setSelectedProject((current) =>
      current && current.id === id ? { ...current, status, progress } : current
    );

    try {
      await updateProject(id, { status, progress });
    } catch (err) {
      console.error(err);
      try {
        const data = await getAllInteriorProjects();
        setProjects(data.map(mapToUi));
      } catch {
        /* ignore */
      }
    }
  }

  async function removeProject(project: Project) {
    const confirmed = window.confirm(
      `Delete project "${project.projectName}"?`
    );
    if (!confirmed) return;

    setProjects((current) => current.filter((p) => p.id !== project.id));
    setSelectedProject(null);

    try {
      await deleteProjectFromDb(project.id);
    } catch (err) {
      console.error(err);
      try {
        const data = await getAllInteriorProjects();
        setProjects(data.map(mapToUi));
      } catch {
        /* ignore */
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
      {/* Header: title + New Project beside */}
      <div className="border-b border-[#e4e2da] bg-white">
        <div className="mx-auto max-w-[1600px] px-3 py-4 sm:px-5 sm:py-5 lg:px-8">
          <div className="flex items-start justify-between gap-3 sm:items-center">
            <div className="min-w-0 flex-1">
              <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
                Projects
              </h1>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Track interior projects, progress and collections.
                {loading && (
                  <span className="ml-2 text-[#176b5b]">Loading…</span>
                )}
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setNewProject(emptyProject);
                setShowNewModal(true);
              }}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125848] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
            >
              <Plus size={16} strokeWidth={2.5} />
              <span className="hidden sm:inline">New Project</span>
              <span className="sm:hidden">New</span>
            </button>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[1600px] space-y-4 px-3 py-4 sm:space-y-6 sm:px-5 sm:py-6 lg:px-8">
        <section className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
          <SummaryCard
            label="Total Projects"
            value={loading ? "…" : String(totalProjects)}
            helper={`${activeProjects} active · ${completedProjects} done`}
          />
          <SummaryCard
            label="Project Value"
            value={loading ? "…" : formatCurrency(totalValue)}
            helper={`Received ${formatCurrency(totalReceived)}`}
          />
          <SummaryCard
            label="Pending"
            value={loading ? "…" : formatCurrency(totalPending)}
            helper="Outstanding collections"
          />
          <SummaryCard
            label="Avg Progress"
            value={loading ? "…" : `${averageProgress}%`}
            helper="Across all projects"
          />
        </section>

        <section className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search project, client, manager..."
              className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] sm:max-w-md sm:flex-1"
            />
            <div className="flex gap-2">
              <select
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(e.target.value as ProjectStatus | "All")
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

        <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
          <div className="border-b border-[#e4e2da] px-4 py-3 sm:px-5 sm:py-4">
            <h2 className="font-semibold">Project Directory</h2>
            <p className="mt-1 text-xs text-gray-500">
              {filteredProjects.length} projects
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[1000px] text-left">
              <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
                <tr>
                  <th className="px-5 py-3 font-semibold">Project</th>
                  <th className="px-4 py-3 font-semibold">Client</th>
                  <th className="px-4 py-3 font-semibold">Value</th>
                  <th className="px-4 py-3 font-semibold">Progress</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold">Deadline</th>
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
                      Loading projects…
                    </td>
                  </tr>
                ) : filteredProjects.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-5 py-12 text-center text-sm text-gray-500"
                    >
                      No projects found.
                    </td>
                  </tr>
                ) : (
                  filteredProjects.map((project) => (
                    <tr key={project.id} className="hover:bg-[#fafaf8]">
                      <td className="px-5 py-4">
                        <p className="text-xs font-semibold text-[#176b5b]">
                          {project.projectNo}
                        </p>
                        <p className="mt-1 font-medium text-gray-900">
                          {project.projectName}
                        </p>
                        <p className="mt-0.5 text-xs text-gray-400">
                          {project.type} · {project.location}
                        </p>
                      </td>
                      <td className="px-4 py-4">
                        <p className="text-sm font-medium text-gray-800">
                          {project.client}
                        </p>
                        <p className="text-xs text-gray-400">
                          Mgr: {project.manager}
                        </p>
                      </td>
                      <td className="px-4 py-4">
                        <p className="text-sm font-semibold text-gray-900">
                          {formatCurrency(project.value)}
                        </p>
                        <p className="text-xs text-gray-400">
                          Paid {formatCurrency(project.paid)}
                        </p>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-20 overflow-hidden rounded-full bg-gray-100">
                            <div
                              className="h-full rounded-full bg-[#176b5b]"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-500">
                            {project.progress}%
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${statusClass(
                            project.status
                          )}`}
                        >
                          {project.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600">
                        {project.expectedDate}
                      </td>
                      <td className="px-4 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => setSelectedProject(project)}
                            className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
                          >
                            View
                          </button>
                          <button
                            type="button"
                            onClick={() => openEdit(project)}
                            className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50"
                          >
                            Edit
                          </button>
                          <Link
                            href={`/interior/projects/${project.id}/timeline`}
                            className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50"
                          >
                            Open
                          </Link>
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
                Loading projects…
              </p>
            ) : filteredProjects.length === 0 ? (
              <p className="py-10 text-center text-sm text-gray-500">
                No projects found.
              </p>
            ) : (
              filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold text-[#176b5b]">
                        {project.projectNo}
                      </p>
                      <p className="mt-0.5 truncate font-medium text-gray-900">
                        {project.projectName}
                      </p>
                      <p className="mt-0.5 text-xs text-gray-500">
                        {project.client} · {project.type}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium ${statusClass(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="font-semibold text-gray-900">
                      {formatCurrency(project.value)}
                    </span>
                    <span className="text-xs text-gray-500">
                      Due {project.expectedDate}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200">
                      <div
                        className="h-full rounded-full bg-[#176b5b]"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <span className="text-[11px] text-gray-500">
                      {project.progress}%
                    </span>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 rounded-lg border border-gray-200 bg-white py-2 text-xs font-medium text-gray-700"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      onClick={() => openEdit(project)}
                      className="flex-1 rounded-lg border border-gray-200 bg-white py-2 text-xs font-medium text-gray-700"
                    >
                      Edit
                    </button>
                    <Link
                      href={`/interior/projects/${project.id}/timeline`}
                      className="flex-1 rounded-lg border border-gray-200 bg-white py-2 text-center text-xs font-medium text-gray-700"
                    >
                      Open
                    </Link>
                  </div>
                </article>
              ))
            )}
          </div>
        </section>
      </main>

      {/* Detail modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 sm:p-4">
          <div className="max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="sticky top-0 flex items-center justify-between border-b border-[#e4e2da] bg-white px-4 py-4 sm:px-6">
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[#176b5b]">
                  {selectedProject.projectNo}
                </p>
                <h2 className="mt-1 truncate text-lg font-bold sm:text-xl">
                  {selectedProject.projectName}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="shrink-0 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 p-4 sm:gap-3 sm:p-6">
              <Info label="Client" value={selectedProject.client} />
              <Info label="Type" value={selectedProject.type} />
              <Info label="Location" value={selectedProject.location} />
              <Info label="Designer" value={selectedProject.designer} />
              <Info label="Manager" value={selectedProject.manager} />
              <Info label="Rooms" value={String(selectedProject.rooms)} />
              <Info label="Start" value={selectedProject.startDate} />
              <Info label="Expected" value={selectedProject.expectedDate} />
              <Info
                label="Value"
                value={formatCurrency(selectedProject.value)}
              />
              <Info
                label="Paid"
                value={formatCurrency(selectedProject.paid)}
              />
              <Info label="Progress" value={`${selectedProject.progress}%`} />
              <Info label="Created" value={selectedProject.createdDate} />
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
                    onClick={() => changeStatus(selectedProject.id, status)}
                    className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
                      selectedProject.status === status
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
              <button
                type="button"
                onClick={() => openEdit(selectedProject)}
                className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
              >
                Edit
              </button>
              <Link
                href={`/interior/projects/${selectedProject.id}/timeline`}
                className="rounded-lg border border-[#176b5b] px-4 py-2.5 text-sm font-semibold text-[#176b5b]"
              >
                Timeline
              </Link>
              <Link
                href={`/interior/projects/${selectedProject.id}/checklist`}
                className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700"
              >
                Checklist
              </Link>
              <button
                type="button"
                onClick={() => removeProject(selectedProject)}
                className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {(showNewModal || (showEditModal && editProject)) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 sm:p-4">
          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="sticky top-0 flex items-center justify-between border-b border-[#e4e2da] bg-white px-4 py-4 sm:px-6">
              <h2 className="text-base font-bold sm:text-lg">
                {showNewModal ? "New Project" : "Edit Project"}
              </h2>
              <button
                type="button"
                onClick={() => {
                  setShowNewModal(false);
                  setShowEditModal(false);
                  setEditProject(null);
                }}
                className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <ProjectForm
              data={showNewModal ? newProject : editProject!}
              clients={clients}
              managers={managerOptions}
              onChange={(field, value) => {
                if (showNewModal) {
                  setNewProject((current) => ({
                    ...current,
                    [field]: value,
                  }));
                } else {
                  setEditProject((current) =>
                    current ? { ...current, [field]: value } : current
                  );
                }
              }}
              onClientSelect={(clientId) => {
                const c = clients.find((x) => x.id === clientId);
                const name = c ? c.name || c.company || "Unknown" : "";
                if (showNewModal) {
                  setNewProject((current) => ({
                    ...current,
                    clientId,
                    client: name,
                    location:
                      current.location ||
                      (c?.location ? String(c.location) : current.location),
                  }));
                } else {
                  setEditProject((current) =>
                    current ? { ...current, clientId, client: name } : current
                  );
                }
              }}
              onManagerSelect={(managerId) => {
                const e = managerOptions.find((x) => x.id === managerId);
                const name = e?.name || "";
                if (showNewModal) {
                  setNewProject((current) => ({
                    ...current,
                    managerId,
                    manager: name,
                  }));
                } else {
                  setEditProject((current) =>
                    current
                      ? { ...current, managerId, manager: name }
                      : current
                  );
                }
              }}
            />

            <div className="flex flex-col-reverse gap-2 border-t border-[#e4e2da] bg-[#fafaf8] px-4 py-4 sm:flex-row sm:justify-end sm:gap-3 sm:px-6">
              <button
                type="button"
                onClick={() => {
                  setShowNewModal(false);
                  setShowEditModal(false);
                  setEditProject(null);
                }}
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={saving}
                onClick={showNewModal ? addProject : saveEdit}
                className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848] disabled:opacity-60"
              >
                {saving
                  ? "Saving…"
                  : showNewModal
                    ? "Create Project"
                    : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectForm({
  data,
  clients,
  managers,
  onChange,
  onClientSelect,
  onManagerSelect,
}: {
  data: Omit<Project, "id" | "projectNo" | "createdDate"> | Project;
  clients: InteriorClient[];
  managers: InteriorEmployee[];
  onChange: (field: keyof typeof emptyProject, value: string | number) => void;
  onClientSelect: (clientId: string) => void;
  onManagerSelect: (managerId: string) => void;
}) {
  return (
    <div className="grid gap-3 p-4 sm:grid-cols-2 sm:gap-4 sm:p-6">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700">
          Client *
        </label>
        <select
          value={data.clientId || ""}
          onChange={(e) => onClientSelect(e.target.value)}
          className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
        >
          <option value="">— Select client —</option>
          {clients.map((c) => (
            <option key={c.id} value={c.id}>
              {clientLabel(c)}
            </option>
          ))}
        </select>
        {clients.length === 0 && (
          <p className="mt-1 text-[11px] text-gray-400">
            Add clients under Clients first.
          </p>
        )}
      </div>

      <Field
        label="Project Name *"
        value={data.projectName}
        onChange={(v) => onChange("projectName", v)}
      />

      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700">
          Type
        </label>
        <select
          value={data.type}
          onChange={(e) => onChange("type", e.target.value)}
          className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
        >
          {typeOptions.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <Field
        label="Location"
        value={data.location === "—" ? "" : data.location}
        onChange={(v) => onChange("location", v)}
      />

      <Field
        label="Designer"
        value={data.designer === "—" ? "" : data.designer}
        onChange={(v) => onChange("designer", v)}
      />

      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700">
          Manager
        </label>
        <select
          value={data.managerId || ""}
          onChange={(e) => onManagerSelect(e.target.value)}
          className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
        >
          <option value="">— Select manager —</option>
          {managers.map((e) => (
            <option key={e.id} value={e.id}>
              {employeeLabel(e)}
            </option>
          ))}
        </select>
      </div>

      <Field
        label="Start Date"
        type="date"
        value={data.startDate === "—" ? "" : data.startDate}
        onChange={(v) => onChange("startDate", v)}
      />
      <Field
        label="Expected Date"
        type="date"
        value={data.expectedDate === "—" ? "" : data.expectedDate}
        onChange={(v) => onChange("expectedDate", v)}
      />
      <Field
        label="Value"
        type="number"
        value={String(data.value || "")}
        onChange={(v) => onChange("value", Number(v) || 0)}
      />
      <Field
        label="Paid"
        type="number"
        value={String(data.paid || "")}
        onChange={(v) => onChange("paid", Number(v) || 0)}
      />
      <Field
        label="Progress %"
        type="number"
        value={String(data.progress || "")}
        onChange={(v) => onChange("progress", Number(v) || 0)}
      />
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700">
          Status
        </label>
        <select
          value={data.status}
          onChange={(e) => onChange("status", e.target.value)}
          className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
        >
          {statusOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
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
