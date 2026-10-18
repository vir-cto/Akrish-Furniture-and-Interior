// "use client";

// import { useMemo, useState } from "react";

// type ProjectStatus =
//   | "New"
//   | "Designing"
//   | "In Progress"
//   | "On Hold"
//   | "Completed";

// type Project = {
//   id: string;
//   client: string;
//   project: string;
//   type: "Residential" | "Commercial";
//   location: string;
//   value: number;
//   paid: number;
//   status: ProjectStatus;
//   designer: string;
//   startDate: string;
//   deadline: string;
// };

// type Activity = {
//   id: number;
//   title: string;
//   description: string;
//   time: string;
//   type: "project" | "payment" | "enquiry" | "task";
// };

// const projects: Project[] = [
//   {
//     id: "INT-001",
//     client: "Rahul Kumar",
//     project: "Luxury 3 BHK Interior",
//     type: "Residential",
//     location: "Guntur",
//     value: 850000,
//     paid: 520000,
//     status: "In Progress",
//     designer: "Akrish Design Team",
//     startDate: "2026-09-05",
//     deadline: "2026-11-20",
//   },
//   {
//     id: "INT-002",
//     client: "Priya Sharma",
//     project: "Modern 2 BHK Interior",
//     type: "Residential",
//     location: "Vijayawada",
//     value: 620000,
//     paid: 310000,
//     status: "Designing",
//     designer: "Priya Designer",
//     startDate: "2026-09-20",
//     deadline: "2026-11-10",
//   },
//   {
//     id: "INT-003",
//     client: "Suresh Reddy",
//     project: "Modern Villa Interior",
//     type: "Residential",
//     location: "Amaravati",
//     value: 1250000,
//     paid: 750000,
//     status: "In Progress",
//     designer: "Ravi Designer",
//     startDate: "2026-08-25",
//     deadline: "2026-12-15",
//   },
//   {
//     id: "INT-004",
//     client: "Anjali Rao",
//     project: "Apartment Interior",
//     type: "Residential",
//     location: "Guntur",
//     value: 480000,
//     paid: 480000,
//     status: "Completed",
//     designer: "Akrish Design Team",
//     startDate: "2026-07-10",
//     deadline: "2026-09-30",
//   },
//   {
//     id: "INT-005",
//     client: "Kiran Kumar",
//     project: "Corporate Office Interior",
//     type: "Commercial",
//     location: "Vijayawada",
//     value: 980000,
//     paid: 490000,
//     status: "In Progress",
//     designer: "Ravi Designer",
//     startDate: "2026-09-15",
//     deadline: "2026-12-05",
//   },
//   {
//     id: "INT-006",
//     client: "Meghana Devi",
//     project: "2 BHK Interior",
//     type: "Residential",
//     location: "Tenali",
//     value: 390000,
//     paid: 100000,
//     status: "New",
//     designer: "Priya Designer",
//     startDate: "2026-10-04",
//     deadline: "2026-11-30",
//   },
//   {
//     id: "INT-007",
//     client: "Vamsi Krishna",
//     project: "Commercial Office",
//     type: "Commercial",
//     location: "Guntur",
//     value: 720000,
//     paid: 360000,
//     status: "Designing",
//     designer: "Ravi Designer",
//     startDate: "2026-09-28",
//     deadline: "2026-12-01",
//   },
// ];

// const activities: Activity[] = [
//   {
//     id: 1,
//     title: "New project created",
//     description: "Meghana Devi - 2 BHK Interior",
//     time: "15 min ago",
//     type: "project",
//   },
//   {
//     id: 2,
//     title: "Payment received",
//     description: "₹1,20,000 received from Rahul Kumar",
//     time: "1 hour ago",
//     type: "payment",
//   },
//   {
//     id: 3,
//     title: "New enquiry",
//     description: "Commercial office interior enquiry",
//     time: "2 hours ago",
//     type: "enquiry",
//   },
//   {
//     id: 4,
//     title: "Design task completed",
//     description: "Kitchen layout approved for Priya Sharma",
//     time: "4 hours ago",
//     type: "task",
//   },
//   {
//     id: 5,
//     title: "Site visit scheduled",
//     description: "Vamsi Krishna - Guntur",
//     time: "Yesterday",
//     type: "project",
//   },
// ];

// const statusOptions: ProjectStatus[] = [
//   "New",
//   "Designing",
//   "In Progress",
//   "On Hold",
//   "Completed",
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

//   return `₹${value}`;
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
//       return "bg-red-50 text-red-700 border-red-200";
//     case "Completed":
//       return "bg-green-50 text-green-700 border-green-200";
//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function getProgress(project: Project) {
//   if (project.status === "New") return 10;
//   if (project.status === "Designing") return 35;
//   if (project.status === "In Progress") return 65;
//   if (project.status === "On Hold") return 50;
//   return 100;
// }

// export default function InteriorDashboardPage() {
//   const [statusFilter, setStatusFilter] = useState<
//     ProjectStatus | "All"
//   >("All");

//   const [typeFilter, setTypeFilter] = useState<
//     "All" | "Residential" | "Commercial"
//   >("All");

//   const [search, setSearch] = useState("");

//   const [showAllProjects, setShowAllProjects] = useState(false);

//   const filteredProjects = useMemo(() => {
//     const query = search.toLowerCase().trim();

//     return projects.filter((project) => {
//       const matchesSearch =
//         !query ||
//         project.client.toLowerCase().includes(query) ||
//         project.project.toLowerCase().includes(query) ||
//         project.location.toLowerCase().includes(query);

//       const matchesStatus =
//         statusFilter === "All" ||
//         project.status === statusFilter;

//       const matchesType =
//         typeFilter === "All" ||
//         project.type === typeFilter;

//       return matchesSearch && matchesStatus && matchesType;
//     });
//   }, [search, statusFilter, typeFilter]);

//   const visibleProjects = showAllProjects
//     ? filteredProjects
//     : filteredProjects.slice(0, 5);

//   const totalProjects = projects.length;

//   const activeProjects = projects.filter(
//     (project) =>
//       project.status === "Designing" ||
//       project.status === "In Progress"
//   ).length;

//   const completedProjects = projects.filter(
//     (project) => project.status === "Completed"
//   ).length;

//   const totalValue = projects.reduce(
//     (sum, project) => sum + project.value,
//     0
//   );

//   const totalPaid = projects.reduce(
//     (sum, project) => sum + project.paid,
//     0
//   );

//   const totalPending = totalValue - totalPaid;

//   const collectionPercentage =
//     totalValue > 0
//       ? Math.round((totalPaid / totalValue) * 100)
//       : 0;

//   const residentialProjects = projects.filter(
//     (project) => project.type === "Residential"
//   ).length;

//   const commercialProjects = projects.filter(
//     (project) => project.type === "Commercial"
//   ).length;

//   const statusData = statusOptions.map((status) => ({
//     status,
//     count: projects.filter(
//       (project) => project.status === status
//     ).length,
//   }));

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       {/* HEADER */}
//       <header className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1600px] px-5 py-5 lg:px-8">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               <div className="mb-1 text-sm font-medium text-[#9a5b18]">
//                 Akrish / Furniture and Interior
//               </div>

//               <h1 className="text-2xl font-bold tracking-tight">
//                 Interior Dashboard
//               </h1>

//               <p className="mt-1 text-sm text-gray-500">
//                 Overview of projects, revenue, payments and team activity.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               <button
//                 onClick={() => {
//                   setStatusFilter("All");
//                   setTypeFilter("All");
//                   setSearch("");
//                 }}
//                 className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
//               >
//                 Reset Filters
//               </button>

//               <button
//                 onClick={() => {
//                   window.location.href = "/interior/crm";
//                 }}
//                 className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//               >
//                 + New Enquiry
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       <main className="mx-auto max-w-[1600px] space-y-6 px-5 py-6 lg:px-8">
//         {/* KPI CARDS */}
//         <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
//           <MetricCard
//             title="Total Projects"
//             value={totalProjects}
//             helper="All interior projects"
//             icon="🏠"
//           />

//           <MetricCard
//             title="Active Projects"
//             value={activeProjects}
//             helper="Currently in progress"
//             icon="📐"
//           />

//           <MetricCard
//             title="Completed"
//             value={completedProjects}
//             helper="Successfully completed"
//             icon="✓"
//           />

//           <MetricCard
//             title="Project Value"
//             value={formatCompactCurrency(totalValue)}
//             helper="Total project value"
//             icon="₹"
//           />

//           <MetricCard
//             title="Pending Payments"
//             value={formatCompactCurrency(totalPending)}
//             helper={`${collectionPercentage}% collected`}
//             icon="💰"
//           />
//         </section>

//         {/* FILTER BAR */}
//         <section className="rounded-xl border border-[#e4e2da] bg-white p-4">
//           <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
//             <div className="relative flex-1">
//               <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                 🔍
//               </span>

//               <input
//                 value={search}
//                 onChange={(event) => setSearch(event.target.value)}
//                 placeholder="Search client, project or location..."
//                 className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] py-2.5 pl-10 pr-3 text-sm outline-none focus:border-[#176b5b]"
//               />
//             </div>

//             <select
//               value={statusFilter}
//               onChange={(event) =>
//                 setStatusFilter(
//                   event.target.value as ProjectStatus | "All"
//                 )
//               }
//               className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               <option value="All">All Statuses</option>

//               {statusOptions.map((status) => (
//                 <option key={status} value={status}>
//                   {status}
//                 </option>
//               ))}
//             </select>

//             <select
//               value={typeFilter}
//               onChange={(event) =>
//                 setTypeFilter(
//                   event.target.value as
//                     | "All"
//                     | "Residential"
//                     | "Commercial"
//                 )
//               }
//               className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               <option value="All">All Project Types</option>
//               <option value="Residential">Residential</option>
//               <option value="Commercial">Commercial</option>
//             </select>

//             <div className="rounded-lg bg-[#edf5f2] px-4 py-2.5 text-sm font-semibold text-[#176b5b]">
//               {filteredProjects.length} Projects
//             </div>
//           </div>
//         </section>

//         {/* MAIN GRID */}
//         <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_350px]">
//           {/* PROJECTS */}
//           <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//             <div className="flex flex-col gap-3 border-b border-[#e4e2da] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
//               <div>
//                 <h2 className="font-semibold">Active Projects</h2>
//                 <p className="mt-1 text-xs text-gray-500">
//                   Track ongoing interior projects and deadlines.
//                 </p>
//               </div>

//               <button
//                 onClick={() => setShowAllProjects((value) => !value)}
//                 className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold hover:bg-gray-50"
//               >
//                 {showAllProjects ? "Show Less" : "View All Projects"}
//               </button>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[950px] text-left">
//                 <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                   <tr>
//                     <th className="px-5 py-3 font-semibold">
//                       Project
//                     </th>

//                     <th className="px-4 py-3 font-semibold">
//                       Client
//                     </th>

//                     <th className="px-4 py-3 font-semibold">
//                       Value
//                     </th>

//                     <th className="px-4 py-3 font-semibold">
//                       Progress
//                     </th>

//                     <th className="px-4 py-3 font-semibold">
//                       Status
//                     </th>

//                     <th className="px-4 py-3 font-semibold">
//                       Deadline
//                     </th>
//                   </tr>
//                 </thead>

//                 <tbody className="divide-y divide-gray-100">
//                   {visibleProjects.map((project) => {
//                     const progress = getProgress(project);

//                     return (
//                       <tr
//                         key={project.id}
//                         className="transition hover:bg-[#fafaf8]"
//                       >
//                         <td className="px-5 py-4">
//                           <div className="font-semibold">
//                             {project.project}
//                           </div>

//                           <div className="mt-1 text-xs text-gray-500">
//                             {project.id} · {project.location}
//                           </div>
//                         </td>

//                         <td className="px-4 py-4">
//                           <div className="font-medium">
//                             {project.client}
//                           </div>

//                           <div className="mt-1 text-xs text-gray-500">
//                             {project.type}
//                           </div>
//                         </td>

//                         <td className="px-4 py-4">
//                           <div className="font-semibold">
//                             {formatCurrency(project.value)}
//                           </div>

//                           <div className="mt-1 text-xs text-gray-500">
//                             Paid {formatCurrency(project.paid)}
//                           </div>
//                         </td>

//                         <td className="px-4 py-4">
//                           <div className="mb-1 flex items-center justify-between text-xs">
//                             <span className="font-semibold">
//                               {progress}%
//                             </span>
//                           </div>

//                           <div className="h-2 w-28 overflow-hidden rounded-full bg-gray-100">
//                             <div
//                               className="h-full rounded-full bg-[#176b5b]"
//                               style={{
//                                 width: `${progress}%`,
//                               }}
//                             />
//                           </div>
//                         </td>

//                         <td className="px-4 py-4">
//                           <span
//                             className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                               project.status
//                             )}`}
//                           >
//                             {project.status}
//                           </span>
//                         </td>

//                         <td className="px-4 py-4">
//                           <div className="text-sm font-medium">
//                             {project.deadline}
//                           </div>

//                           <div className="mt-1 text-xs text-gray-500">
//                             {project.designer}
//                           </div>
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>

//               {visibleProjects.length === 0 && (
//                 <div className="px-5 py-14 text-center">
//                   <div className="text-4xl">🔎</div>

//                   <h3 className="mt-3 font-semibold">
//                     No projects found
//                   </h3>

//                   <p className="mt-1 text-sm text-gray-500">
//                     Try changing your search or filters.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </section>

//           {/* RIGHT SIDE */}
//           <div className="space-y-6">
//             {/* PAYMENT COLLECTION */}
//             <section className="rounded-xl border border-[#e4e2da] bg-white p-5">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h2 className="font-semibold">
//                     Payment Collection
//                   </h2>

//                   <p className="mt-1 text-xs text-gray-500">
//                     Overall project collections
//                   </p>
//                 </div>

//                 <span className="text-lg font-bold text-[#176b5b]">
//                   {collectionPercentage}%
//                 </span>
//               </div>

//               <div className="mt-5">
//                 <div className="h-3 overflow-hidden rounded-full bg-gray-100">
//                   <div
//                     className="h-full rounded-full bg-[#176b5b]"
//                     style={{
//                       width: `${collectionPercentage}%`,
//                     }}
//                   />
//                 </div>

//                 <div className="mt-3 flex justify-between text-xs">
//                   <span className="text-gray-500">
//                     Received
//                   </span>

//                   <span className="font-semibold">
//                     {formatCurrency(totalPaid)}
//                   </span>
//                 </div>

//                 <div className="mt-2 flex justify-between text-xs">
//                   <span className="text-gray-500">
//                     Pending
//                   </span>

//                   <span className="font-semibold text-red-600">
//                     {formatCurrency(totalPending)}
//                   </span>
//                 </div>
//               </div>
//             </section>

//             {/* PROJECT TYPE */}
//             <section className="rounded-xl border border-[#e4e2da] bg-white p-5">
//               <h2 className="font-semibold">
//                 Project Overview
//               </h2>

//               <p className="mt-1 text-xs text-gray-500">
//                 Residential vs commercial
//               </p>

//               <div className="mt-5 space-y-4">
//                 <OverviewRow
//                   label="Residential"
//                   value={residentialProjects}
//                   total={totalProjects}
//                   icon="🏠"
//                 />

//                 <OverviewRow
//                   label="Commercial"
//                   value={commercialProjects}
//                   total={totalProjects}
//                   icon="🏢"
//                 />
//               </div>
//             </section>

//             {/* STATUS */}
//             <section className="rounded-xl border border-[#e4e2da] bg-white p-5">
//               <h2 className="font-semibold">
//                 Project Status
//               </h2>

//               <div className="mt-5 space-y-3">
//                 {statusData.map((item) => {
//                   const percentage =
//                     totalProjects > 0
//                       ? Math.round(
//                           (item.count / totalProjects) * 100
//                         )
//                       : 0;

//                   return (
//                     <div key={item.status}>
//                       <div className="mb-1 flex items-center justify-between text-xs">
//                         <span>{item.status}</span>

//                         <span className="font-semibold">
//                           {item.count}
//                         </span>
//                       </div>

//                       <div className="h-2 overflow-hidden rounded-full bg-gray-100">
//                         <div
//                           className="h-full rounded-full bg-[#9a5b18]"
//                           style={{
//                             width: `${percentage}%`,
//                           }}
//                         />
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </section>
//           </div>
//         </div>

//         {/* BOTTOM SECTION */}
//         <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
//           {/* RECENT ACTIVITY */}
//           <section className="rounded-xl border border-[#e4e2da] bg-white">
//             <div className="border-b border-[#e4e2da] px-5 py-4">
//               <h2 className="font-semibold">
//                 Recent Activity
//               </h2>

//               <p className="mt-1 text-xs text-gray-500">
//                 Latest updates from your interior business.
//               </p>
//             </div>

//             <div className="divide-y divide-gray-100">
//               {activities.map((activity) => (
//                 <div
//                   key={activity.id}
//                   className="flex gap-4 px-5 py-4"
//                 >
//                   <ActivityIcon type={activity.type} />

//                   <div className="min-w-0 flex-1">
//                     <div className="flex flex-col justify-between gap-1 sm:flex-row">
//                       <h3 className="text-sm font-semibold">
//                         {activity.title}
//                       </h3>

//                       <span className="text-xs text-gray-400">
//                         {activity.time}
//                       </span>
//                     </div>

//                     <p className="mt-1 text-xs leading-5 text-gray-500">
//                       {activity.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* BUSINESS SNAPSHOT */}
//           <section className="rounded-xl border border-[#e4e2da] bg-white">
//             <div className="border-b border-[#e4e2da] px-5 py-4">
//               <h2 className="font-semibold">
//                 Business Snapshot
//               </h2>

//               <p className="mt-1 text-xs text-gray-500">
//                 Current interior business performance.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2">
//               <SnapshotCard
//                 label="Total Project Value"
//                 value={formatCurrency(totalValue)}
//                 helper="Across all projects"
//               />

//               <SnapshotCard
//                 label="Amount Received"
//                 value={formatCurrency(totalPaid)}
//                 helper="Collected so far"
//               />

//               <SnapshotCard
//                 label="Amount Pending"
//                 value={formatCurrency(totalPending)}
//                 helper="Outstanding amount"
//               />

//               <SnapshotCard
//                 label="Average Project"
//                 value={formatCurrency(
//                   totalProjects > 0
//                     ? Math.round(totalValue / totalProjects)
//                     : 0
//                 )}
//                 helper="Average project value"
//               />
//             </div>

//             <div className="border-t border-[#e4e2da] p-5">
//               <h3 className="text-sm font-semibold">
//                 Quick Navigation
//               </h3>

//               <div className="mt-3 grid grid-cols-2 gap-2">
//                 <QuickLink
//                   label="CRM"
//                   href="/interior/crm"
//                 />

//                 <QuickLink
//                   label="Contracts"
//                   href="/interior/contracts"
//                 />

//                 <QuickLink
//                   label="Projects"
//                   href="/interior/projects"
//                 />

//                 <QuickLink
//                   label="Payments"
//                   href="/interior/payments"
//                 />
//               </div>
//             </div>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// }

// /* METRIC CARD */

// function MetricCard({
//   title,
//   value,
//   helper,
//   icon,
// }: {
//   title: string;
//   value: string | number;
//   helper: string;
//   icon: string;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//       <div className="flex items-start justify-between">
//         <div>
//           <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
//             {title}
//           </p>

//           <p className="mt-2 text-2xl font-bold tracking-tight">
//             {value}
//           </p>

//           <p className="mt-1 text-xs text-gray-500">
//             {helper}
//           </p>
//         </div>

//         <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#edf5f2] text-lg">
//           {icon}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* OVERVIEW ROW */

// function OverviewRow({
//   label,
//   value,
//   total,
//   icon,
// }: {
//   label: string;
//   value: number;
//   total: number;
//   icon: string;
// }) {
//   const percentage =
//     total > 0 ? Math.round((value / total) * 100) : 0;

//   return (
//     <div>
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <span>{icon}</span>
//           <span className="text-sm font-medium">
//             {label}
//           </span>
//         </div>

//         <span className="text-sm font-bold">
//           {value}
//         </span>
//       </div>

//       <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
//         <div
//           className="h-full rounded-full bg-[#176b5b]"
//           style={{ width: `${percentage}%` }}
//         />
//       </div>

//       <div className="mt-1 text-right text-xs text-gray-400">
//         {percentage}%
//       </div>
//     </div>
//   );
// }

// /* ACTIVITY ICON */

// function ActivityIcon({
//   type,
// }: {
//   type: Activity["type"];
// }) {
//   const content = {
//     project: "🏠",
//     payment: "₹",
//     enquiry: "📩",
//     task: "✓",
//   };

//   return (
//     <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#edf5f2] text-sm text-[#176b5b]">
//       {content[type]}
//     </div>
//   );
// }

// /* SNAPSHOT CARD */

// function SnapshotCard({
//   label,
//   value,
//   helper,
// }: {
//   label: string;
//   value: string;
//   helper: string;
// }) {
//   return (
//     <div className="rounded-lg border border-gray-200 bg-[#fafaf8] p-4">
//       <p className="text-xs text-gray-500">
//         {label}
//       </p>

//       <p className="mt-2 text-lg font-bold">
//         {value}
//       </p>

//       <p className="mt-1 text-xs text-gray-400">
//         {helper}
//       </p>
//     </div>
//   );
// }

// /* QUICK LINK */

// function QuickLink({
//   label,
//   href,
// }: {
//   label: string;
//   href: string;
// }) {
//   return (
//     <button
//       onClick={() => {
//         window.location.href = href;
//       }}
//       className="rounded-lg border border-gray-200 px-3 py-2.5 text-left text-xs font-semibold text-gray-700 transition hover:border-[#176b5b] hover:bg-[#edf5f2] hover:text-[#176b5b]"
//     >
//       {label} →
//     </button>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAllInteriorProjects,
//   type InteriorProject,
// } from "@/modules/interior/services/projectService";
// import { Timestamp } from "firebase/firestore";

// type ProjectStatus =
//   | "New"
//   | "Designing"
//   | "In Progress"
//   | "On Hold"
//   | "Completed";

// type Project = {
//   id: string;
//   client: string;
//   project: string;
//   type: "Residential" | "Commercial";
//   location: string;
//   value: number;
//   paid: number;
//   status: ProjectStatus;
//   designer: string;
//   startDate: string;
//   deadline: string;
// };

// type Activity = {
//   id: string;
//   title: string;
//   description: string;
//   time: string;
//   type: "project" | "payment" | "enquiry" | "task";
// };

// const statusOptions: ProjectStatus[] = [
//   "New",
//   "Designing",
//   "In Progress",
//   "On Hold",
//   "Completed",
// ];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function formatCompactCurrency(value: number) {
//   if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
//   if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
//   if (value >= 1000) return `₹${(value / 1000).toFixed(0)}K`;
//   return `₹${value}`;
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
//       return "bg-red-50 text-red-700 border-red-200";
//     case "Completed":
//       return "bg-green-50 text-green-700 border-green-200";
//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function getProgress(project: Project) {
//   if (project.status === "New") return 10;
//   if (project.status === "Designing") return 35;
//   if (project.status === "In Progress") return 65;
//   if (project.status === "On Hold") return 50;
//   return 100;
// }

// function toDateString(value: unknown): string {
//   if (!value) return "—";
//   if (typeof value === "string") return value.slice(0, 10);
//   try {
//     if (typeof (value as Timestamp).toDate === "function") {
//       return (value as Timestamp).toDate().toISOString().slice(0, 10);
//     }
//   } catch {
//     /* ignore */
//   }
//   return "—";
// }

// function relativeTime(value: unknown): string {
//   const d =
//     typeof value === "string"
//       ? new Date(value)
//       : typeof (value as Timestamp)?.toDate === "function"
//       ? (value as Timestamp).toDate()
//       : null;

//   if (!d || Number.isNaN(d.getTime())) return "Recently";

//   const diffMs = Date.now() - d.getTime();
//   const mins = Math.floor(diffMs / 60000);
//   if (mins < 1) return "Just now";
//   if (mins < 60) return `${mins} min ago`;
//   const hours = Math.floor(mins / 60);
//   if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
//   const days = Math.floor(hours / 24);
//   if (days === 1) return "Yesterday";
//   return `${days} days ago`;
// }

// function normalizeStatus(raw?: string): ProjectStatus {
//   const s = (raw || "New").trim().toLowerCase();
//   if (s.includes("design")) return "Designing";
//   if (s.includes("progress") || s === "active" || s === "ongoing")
//     return "In Progress";
//   if (s.includes("hold")) return "On Hold";
//   if (s.includes("complete") || s === "done" || s === "closed")
//     return "Completed";
//   if (s === "new" || s === "pending" || s === "lead") return "New";
//   return "New";
// }

// function normalizeType(raw?: string): "Residential" | "Commercial" {
//   const s = (raw || "Residential").toLowerCase();
//   if (s.includes("commercial") || s.includes("office")) return "Commercial";
//   return "Residential";
// }

// function mapToUi(p: InteriorProject): Project {
//   return {
//     id: p.projectId || p.id,
//     client: p.clientName || p.client || p.customerName || "Unknown",
//     project: p.projectName || p.name || "Untitled Project",
//     type: normalizeType(p.projectType || p.type),
//     location: p.location || "—",
//     value: Number(p.value ?? p.projectValue ?? p.totalValue ?? 0) || 0,
//     paid: Number(p.paid ?? p.amountPaid ?? 0) || 0,
//     status: normalizeStatus(p.status),
//     designer: p.designer || "—",
//     startDate: toDateString(p.startDate || p.createdAt),
//     deadline: toDateString(p.deadline || p.endDate),
//   };
// }

// function buildActivities(raw: InteriorProject[]): Activity[] {
//   return raw.slice(0, 8).map((p, index) => {
//     const name = p.projectName || p.name || "Project";
//     const client = p.clientName || p.client || p.customerName || "Client";
//     const paid = Number(p.paid ?? p.amountPaid ?? 0) || 0;

//     if (paid > 0 && index % 3 === 1) {
//       return {
//         id: `act-${p.id}-pay`,
//         title: "Payment received",
//         description: `${formatCurrency(paid)} · ${client}`,
//         time: relativeTime(p.updatedAt || p.createdAt),
//         type: "payment" as const,
//       };
//     }

//     return {
//       id: `act-${p.id}`,
//       title: "Project update",
//       description: `${client} · ${name}`,
//       time: relativeTime(p.updatedAt || p.createdAt),
//       type: "project" as const,
//     };
//   });
// }

// export default function InteriorDashboardPage() {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [activities, setActivities] = useState<Activity[]>([]);
//   const [loading, setLoading] = useState(true);

//   const [statusFilter, setStatusFilter] = useState<ProjectStatus | "All">(
//     "All"
//   );
//   const [typeFilter, setTypeFilter] = useState<
//     "All" | "Residential" | "Commercial"
//   >("All");
//   const [search, setSearch] = useState("");
//   const [showAllProjects, setShowAllProjects] = useState(false);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllInteriorProjects();
//         if (cancelled) return;
//         setProjects(data.map(mapToUi));
//         setActivities(buildActivities(data));
//       } catch (err) {
//         console.error("Failed to load interior dashboard:", err);
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
//     return projects.filter((project) => {
//       const searchValue = search.toLowerCase().trim();

//       const matchesSearch =
//         !searchValue ||
//         project.client.toLowerCase().includes(searchValue) ||
//         project.project.toLowerCase().includes(searchValue) ||
//         project.location.toLowerCase().includes(searchValue) ||
//         project.id.toLowerCase().includes(searchValue);

//       const matchesStatus =
//         statusFilter === "All" || project.status === statusFilter;

//       const matchesType =
//         typeFilter === "All" || project.type === typeFilter;

//       return matchesSearch && matchesStatus && matchesType;
//     });
//   }, [projects, search, statusFilter, typeFilter]);

//   const visibleProjects = showAllProjects
//     ? filteredProjects
//     : filteredProjects.slice(0, 5);

//   const totalProjects = projects.length;

//   const activeProjects = projects.filter(
//     (project) =>
//       project.status === "Designing" || project.status === "In Progress"
//   ).length;

//   const completedProjects = projects.filter(
//     (project) => project.status === "Completed"
//   ).length;

//   const totalValue = projects.reduce((sum, project) => sum + project.value, 0);
//   const totalPaid = projects.reduce((sum, project) => sum + project.paid, 0);
//   const totalPending = totalValue - totalPaid;

//   const collectionPercentage =
//     totalValue > 0 ? Math.round((totalPaid / totalValue) * 100) : 0;

//   const residentialProjects = projects.filter(
//     (project) => project.type === "Residential"
//   ).length;

//   const commercialProjects = projects.filter(
//     (project) => project.type === "Commercial"
//   ).length;

//   const statusData = statusOptions.map((status) => ({
//     status,
//     count: projects.filter((project) => project.status === status).length,
//   }));

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       <header className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1600px] px-5 py-5 lg:px-8">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               {/* <div className="mb-1 text-sm font-medium text-[#9a5b18]">
//                 Akrish / Furniture and Interior
//               </div> */}
//               <h1 className="text-2xl font-bold tracking-tight">
//                 Interior Dashboard
//               </h1>
//               <p className="mt-1 text-sm text-gray-500">
//                 Overview of projects, revenue, payments and team activity.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               <button
//                 onClick={() => {
//                   setStatusFilter("All");
//                   setTypeFilter("All");
//                   setSearch("");
//                 }}
//                 className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
//               >
//                 Reset Filters
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       <main className="mx-auto max-w-[1600px] px-5 py-6 lg:px-8">
//         {/* Metrics */}
//         <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <MetricCard
//             title="Total Projects"
//             value={loading ? "…" : String(totalProjects)}
//             helper="All interior projects"
//             icon="▣"
//           />
//           <MetricCard
//             title="Active Projects"
//             value={loading ? "…" : String(activeProjects)}
//             helper="Designing + In Progress"
//             icon="⚡"
//           />
//           <MetricCard
//             title="Completed"
//             value={loading ? "…" : String(completedProjects)}
//             helper="Finished projects"
//             icon="✓"
//           />
//           <MetricCard
//             title="Collections"
//             value={loading ? "…" : formatCompactCurrency(totalPaid)}
//             helper={`${collectionPercentage}% collected`}
//             icon="₹"
//           />
//         </div>

//         <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
//           {/* Projects table */}
//           <section className="min-w-0 rounded-xl border border-[#e4e2da] bg-white">
//             <div className="border-b border-[#e4e2da] p-5">
//               <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//                 <div>
//                   <h2 className="font-semibold">Projects</h2>
//                   <p className="mt-1 text-xs text-gray-500">
//                     Track ongoing interior projects and deadlines.
//                   </p>
//                 </div>

//                 <div className="flex flex-col gap-2 sm:flex-row">
//                   <input
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                     placeholder="Search project, client, location..."
//                     className="rounded-lg border border-gray-200 bg-[#fafaf8] px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                   <select
//                     value={statusFilter}
//                     onChange={(e) =>
//                       setStatusFilter(e.target.value as ProjectStatus | "All")
//                     }
//                     className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="All">All Status</option>
//                     {statusOptions.map((s) => (
//                       <option key={s} value={s}>
//                         {s}
//                       </option>
//                     ))}
//                   </select>
//                   <select
//                     value={typeFilter}
//                     onChange={(e) =>
//                       setTypeFilter(
//                         e.target.value as "All" | "Residential" | "Commercial"
//                       )
//                     }
//                     className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="All">All Types</option>
//                     <option value="Residential">Residential</option>
//                     <option value="Commercial">Commercial</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[950px] text-left">
//                 <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                   <tr>
//                     <th className="px-5 py-3 font-semibold">Project</th>
//                     <th className="px-4 py-3 font-semibold">Client</th>
//                     <th className="px-4 py-3 font-semibold">Value</th>
//                     <th className="px-4 py-3 font-semibold">Progress</th>
//                     <th className="px-4 py-3 font-semibold">Status</th>
//                     <th className="px-4 py-3 font-semibold">Deadline</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-[#eeece6]">
//                   {loading ? (
//                     <tr>
//                       <td
//                         colSpan={6}
//                         className="px-5 py-12 text-center text-sm text-gray-500"
//                       >
//                         Loading projects…
//                       </td>
//                     </tr>
//                   ) : (
//                     <>
//                       {visibleProjects.map((project) => {
//                         const progress = getProgress(project);
//                         return (
//                           <tr key={project.id} className="hover:bg-[#fafaf8]">
//                             <td className="px-5 py-4">
//                               <p className="text-xs font-semibold text-[#176b5b]">
//                                 {project.id}
//                               </p>
//                               <p className="mt-1 font-medium text-gray-900">
//                                 {project.project}
//                               </p>
//                               <p className="mt-0.5 text-xs text-gray-400">
//                                 {project.type} · {project.location}
//                               </p>
//                             </td>
//                             <td className="px-4 py-4 text-sm text-gray-700">
//                               {project.client}
//                             </td>
//                             <td className="px-4 py-4">
//                               <p className="text-sm font-semibold text-gray-900">
//                                 {formatCurrency(project.value)}
//                               </p>
//                               <p className="mt-0.5 text-xs text-gray-400">
//                                 Paid {formatCurrency(project.paid)}
//                               </p>
//                             </td>
//                             <td className="px-4 py-4">
//                               <div className="flex items-center gap-2">
//                                 <div className="h-2 w-20 overflow-hidden rounded-full bg-gray-100">
//                                   <div
//                                     className="h-full rounded-full bg-[#176b5b]"
//                                     style={{ width: `${progress}%` }}
//                                   />
//                                 </div>
//                                 <span className="text-xs text-gray-500">
//                                   {progress}%
//                                 </span>
//                               </div>
//                             </td>
//                             <td className="px-4 py-4">
//                               <span
//                                 className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${statusClass(
//                                   project.status
//                                 )}`}
//                               >
//                                 {project.status}
//                               </span>
//                             </td>
//                             <td className="px-4 py-4 text-sm text-gray-600">
//                               {project.deadline}
//                             </td>
//                           </tr>
//                         );
//                       })}

//                       {visibleProjects.length === 0 && (
//                         <tr>
//                           <td
//                             colSpan={6}
//                             className="px-5 py-12 text-center text-sm text-gray-500"
//                           >
//                             No projects found
//                           </td>
//                         </tr>
//                       )}
//                     </>
//                   )}
//                 </tbody>
//               </table>
//             </div>

//             {filteredProjects.length > 5 && (
//               <div className="border-t border-[#e4e2da] px-5 py-3 text-right">
//                 <button
//                   onClick={() => setShowAllProjects((v) => !v)}
//                   className="text-sm font-semibold text-[#176b5b] hover:underline"
//                 >
//                   {showAllProjects
//                     ? "Show less"
//                     : `Show all ${filteredProjects.length} projects`}
//                 </button>
//               </div>
//             )}
//           </section>

//           {/* Right column */}
//           <div className="space-y-6">
//             <section className="rounded-xl border border-[#e4e2da] bg-white p-5">
//               <h2 className="font-semibold">Collection Progress</h2>
//               <p className="mt-1 text-xs text-gray-500">
//                 Overall project collections
//               </p>
//               <p className="mt-4 text-3xl font-bold text-[#176b5b]">
//                 {collectionPercentage}%
//               </p>
//               <div className="mt-3 h-3 overflow-hidden rounded-full bg-gray-100">
//                 <div
//                   className="h-full rounded-full bg-[#176b5b]"
//                   style={{ width: `${collectionPercentage}%` }}
//                 />
//               </div>
//               <div className="mt-4 flex justify-between text-sm">
//                 <span className="text-gray-500">Received</span>
//                 <span className="font-semibold text-green-700">
//                   {formatCurrency(totalPaid)}
//                 </span>
//               </div>
//               <div className="mt-2 flex justify-between text-sm">
//                 <span className="text-gray-500">Pending</span>
//                 <span className="font-semibold text-red-600">
//                   {formatCurrency(totalPending)}
//                 </span>
//               </div>
//             </section>

//             <section className="rounded-xl border border-[#e4e2da] bg-white p-5">
//               <h2 className="font-semibold">Project Overview</h2>
//               <p className="mt-1 text-xs text-gray-500">
//                 Residential vs commercial
//               </p>
//               <div className="mt-5 space-y-4">
//                 <OverviewRow
//                   label="Residential"
//                   value={residentialProjects}
//                   total={totalProjects}
//                   icon="🏠"
//                 />
//                 <OverviewRow
//                   label="Commercial"
//                   value={commercialProjects}
//                   total={totalProjects}
//                   icon="🏢"
//                 />
//               </div>
//             </section>

//             <section className="rounded-xl border border-[#e4e2da] bg-white p-5">
//               <h2 className="font-semibold">Project Status</h2>
//               <div className="mt-5 space-y-3">
//                 {statusData.map((item) => {
//                   const percentage =
//                     totalProjects > 0
//                       ? Math.round((item.count / totalProjects) * 100)
//                       : 0;
//                   return (
//                     <div key={item.status}>
//                       <div className="mb-1 flex items-center justify-between text-xs">
//                         <span>{item.status}</span>
//                         <span className="font-semibold">{item.count}</span>
//                       </div>
//                       <div className="h-2 overflow-hidden rounded-full bg-gray-100">
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
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="mt-6 grid gap-6 lg:grid-cols-2">
//           <section className="rounded-xl border border-[#e4e2da] bg-white">
//             <div className="border-b border-[#e4e2da] px-5 py-4">
//               <h2 className="font-semibold">Recent Activity</h2>
//               <p className="mt-1 text-xs text-gray-500">
//                 Latest project and payment updates
//               </p>
//             </div>
//             <div className="divide-y divide-[#eeece6]">
//               {activities.length === 0 && !loading && (
//                 <div className="px-5 py-8 text-center text-sm text-gray-500">
//                   No recent activity
//                 </div>
//               )}
//               {activities.map((activity) => (
//                 <div key={activity.id} className="flex gap-3 px-5 py-4">
//                   <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef7f4] text-sm">
//                     {activity.type === "payment"
//                       ? "₹"
//                       : activity.type === "enquiry"
//                       ? "?"
//                       : "▣"}
//                   </div>
//                   <div>
//                     <p className="text-sm font-semibold text-gray-900">
//                       {activity.title}
//                     </p>
//                     <p className="mt-1 text-xs leading-5 text-gray-500">
//                       {activity.description}
//                     </p>
//                     <p className="mt-1 text-[11px] text-gray-400">
//                       {activity.time}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           <section className="rounded-xl border border-[#e4e2da] bg-white">
//             <div className="border-b border-[#e4e2da] px-5 py-4">
//               <h2 className="font-semibold">Business Snapshot</h2>
//               <p className="mt-1 text-xs text-gray-500">
//                 Current interior business performance.
//               </p>
//             </div>
//             <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2">
//               <SnapshotCard
//                 label="Total Project Value"
//                 value={formatCurrency(totalValue)}
//                 helper="Across all projects"
//               />
//               <SnapshotCard
//                 label="Amount Received"
//                 value={formatCurrency(totalPaid)}
//                 helper="Collected so far"
//               />
//               <SnapshotCard
//                 label="Amount Pending"
//                 value={formatCurrency(totalPending)}
//                 helper="Outstanding amount"
//               />
//               <SnapshotCard
//                 label="Average Project"
//                 value={formatCurrency(
//                   totalProjects > 0
//                     ? Math.round(totalValue / totalProjects)
//                     : 0
//                 )}
//                 helper="Average project value"
//               />
//             </div>
//             <div className="border-t border-[#e4e2da] p-5">
//               <h3 className="text-sm font-semibold">Quick Navigation</h3>
//               <div className="mt-3 grid grid-cols-2 gap-2">
//                 <QuickLink label="CRM" href="/interior/crm" />
//                 <QuickLink label="Contracts" href="/interior/contracts" />
//                 <QuickLink label="Projects" href="/interior/projects" />
//                 <QuickLink label="Payments" href="/interior/payments" />
//               </div>
//             </div>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// }

// function MetricCard({
//   title,
//   value,
//   helper,
//   icon,
// }: {
//   title: string;
//   value: string;
//   helper: string;
//   icon: string;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//       <div className="flex items-start justify-between">
//         <div>
//           <p className="text-sm text-gray-500">{title}</p>
//           <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
//           <p className="mt-1 text-xs text-gray-400">{helper}</p>
//         </div>
//         <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef7f4] text-lg">
//           {icon}
//         </div>
//       </div>
//     </div>
//   );
// }

// function OverviewRow({
//   label,
//   value,
//   total,
//   icon,
// }: {
//   label: string;
//   value: number;
//   total: number;
//   icon: string;
// }) {
//   const pct = total > 0 ? Math.round((value / total) * 100) : 0;
//   return (
//     <div>
//       <div className="mb-1.5 flex items-center justify-between text-sm">
//         <span className="flex items-center gap-2 text-gray-600">
//           <span>{icon}</span>
//           {label}
//         </span>
//         <span className="font-semibold text-gray-800">
//           {value} ({pct}%)
//         </span>
//       </div>
//       <div className="h-2 overflow-hidden rounded-full bg-gray-100">
//         <div
//           className="h-full rounded-full bg-[#176b5b]"
//           style={{ width: `${pct}%` }}
//         />
//       </div>
//     </div>
//   );
// }

// function SnapshotCard({
//   label,
//   value,
//   helper,
// }: {
//   label: string;
//   value: string;
//   helper: string;
// }) {
//   return (
//     <div className="rounded-xl bg-[#fafaf8] p-4">
//       <p className="text-xs text-gray-500">{label}</p>
//       <p className="mt-1 text-lg font-bold text-gray-900">{value}</p>
//       <p className="mt-1 text-xs text-gray-400">{helper}</p>
//     </div>
//   );
// }

// function QuickLink({ label, href }: { label: string; href: string }) {
//   return (
//     <a
//       href={href}
//       className="rounded-lg border border-gray-200 px-3 py-2.5 text-center text-sm font-medium text-gray-700 transition hover:border-[#176b5b] hover:text-[#176b5b]"
//     >
//       {label}
//     </a>
//   );
// }

"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  getAllInteriorProjects,
  type InteriorProject,
} from "@/modules/interior/services/projectService";
import { Timestamp } from "firebase/firestore";
import { Plus } from "lucide-react";

type ProjectStatus =
  | "New"
  | "Designing"
  | "In Progress"
  | "On Hold"
  | "Completed";

type Project = {
  id: string;
  client: string;
  project: string;
  type: "Residential" | "Commercial";
  location: string;
  value: number;
  paid: number;
  status: ProjectStatus;
  designer: string;
  startDate: string;
  deadline: string;
};

type Activity = {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "project" | "payment" | "enquiry" | "task";
};

const statusOptions: ProjectStatus[] = [
  "New",
  "Designing",
  "In Progress",
  "On Hold",
  "Completed",
];

function formatCurrency(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function formatCompactCurrency(value: number) {
  if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
  if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
  if (value >= 1000) return `₹${(value / 1000).toFixed(0)}K`;
  return `₹${value}`;
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
      return "bg-red-50 text-red-700 border-red-200";
    case "Completed":
      return "bg-green-50 text-green-700 border-green-200";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
}

function getProgress(project: Project) {
  if (project.status === "New") return 10;
  if (project.status === "Designing") return 35;
  if (project.status === "In Progress") return 65;
  if (project.status === "On Hold") return 50;
  return 100;
}

function toDateString(value: unknown): string {
  if (!value) return "—";
  if (typeof value === "string") return value.slice(0, 10);
  try {
    if (typeof (value as Timestamp).toDate === "function") {
      return (value as Timestamp).toDate().toISOString().slice(0, 10);
    }
  } catch {
    /* ignore */
  }
  return "—";
}

function relativeTime(value: unknown): string {
  const d =
    typeof value === "string"
      ? new Date(value)
      : typeof (value as Timestamp)?.toDate === "function"
        ? (value as Timestamp).toDate()
        : null;

  if (!d || Number.isNaN(d.getTime())) return "Recently";

  const diffMs = Date.now() - d.getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins} min ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  const days = Math.floor(hours / 24);
  if (days === 1) return "Yesterday";
  return `${days} days ago`;
}

function normalizeStatus(raw?: string): ProjectStatus {
  const s = (raw || "New").trim().toLowerCase();
  if (s.includes("design")) return "Designing";
  if (s.includes("progress") || s === "active" || s === "ongoing")
    return "In Progress";
  if (s.includes("hold")) return "On Hold";
  if (s.includes("complete") || s === "done" || s === "closed")
    return "Completed";
  if (s === "new" || s === "pending" || s === "lead") return "New";
  return "New";
}

function normalizeType(raw?: string): "Residential" | "Commercial" {
  const s = (raw || "Residential").toLowerCase();
  if (s.includes("commercial") || s.includes("office")) return "Commercial";
  return "Residential";
}

function mapToUi(p: InteriorProject): Project {
  return {
    id: p.projectId || p.id,
    client: p.clientName || p.client || p.customerName || "Unknown",
    project: p.projectName || p.name || "Untitled Project",
    type: normalizeType(p.projectType || p.type),
    location: p.location || "—",
    value: Number(p.value ?? p.projectValue ?? p.totalValue ?? 0) || 0,
    paid: Number(p.paid ?? p.amountPaid ?? 0) || 0,
    status: normalizeStatus(p.status),
    designer: p.designer || "—",
    startDate: toDateString(p.startDate || p.createdAt),
    deadline: toDateString(p.deadline || p.endDate),
  };
}

function buildActivities(raw: InteriorProject[]): Activity[] {
  return raw.slice(0, 8).map((p, index) => {
    const name = p.projectName || p.name || "Project";
    const client = p.clientName || p.client || p.customerName || "Client";
    const paid = Number(p.paid ?? p.amountPaid ?? 0) || 0;

    if (paid > 0 && index % 3 === 1) {
      return {
        id: `act-${p.id}-pay`,
        title: "Payment received",
        description: `${formatCurrency(paid)} · ${client}`,
        time: relativeTime(p.updatedAt || p.createdAt),
        type: "payment" as const,
      };
    }

    return {
      id: `act-${p.id}`,
      title: "Project update",
      description: `${client} · ${name}`,
      time: relativeTime(p.updatedAt || p.createdAt),
      type: "project" as const,
    };
  });
}

export default function InteriorDashboardPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  const [statusFilter, setStatusFilter] = useState<ProjectStatus | "All">(
    "All"
  );
  const [typeFilter, setTypeFilter] = useState<
    "All" | "Residential" | "Commercial"
  >("All");
  const [search, setSearch] = useState("");
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const data = await getAllInteriorProjects();
        if (cancelled) return;
        setProjects(data.map(mapToUi));
        setActivities(buildActivities(data));
      } catch (err) {
        console.error("Failed to load interior dashboard:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const searchValue = search.toLowerCase().trim();

      const matchesSearch =
        !searchValue ||
        project.client.toLowerCase().includes(searchValue) ||
        project.project.toLowerCase().includes(searchValue) ||
        project.location.toLowerCase().includes(searchValue) ||
        project.id.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "All" || project.status === statusFilter;

      const matchesType =
        typeFilter === "All" || project.type === typeFilter;

      return matchesSearch && matchesStatus && matchesType;
    });
  }, [projects, search, statusFilter, typeFilter]);

  const visibleProjects = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, 5);

  const totalProjects = projects.length;

  const activeProjects = projects.filter(
    (project) =>
      project.status === "Designing" || project.status === "In Progress"
  ).length;

  const completedProjects = projects.filter(
    (project) => project.status === "Completed"
  ).length;

  const totalValue = projects.reduce((sum, project) => sum + project.value, 0);
  const totalPaid = projects.reduce((sum, project) => sum + project.paid, 0);
  const totalPending = totalValue - totalPaid;

  const collectionPercentage =
    totalValue > 0 ? Math.round((totalPaid / totalValue) * 100) : 0;

  const residentialProjects = projects.filter(
    (project) => project.type === "Residential"
  ).length;

  const commercialProjects = projects.filter(
    (project) => project.type === "Commercial"
  ).length;

  const statusData = statusOptions.map((status) => ({
    status,
    count: projects.filter((project) => project.status === status).length,
  }));

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
      {/* Header: title + New Enquiry beside */}
      <header className="border-b border-[#e4e2da] bg-white">
        <div className="mx-auto max-w-[1600px] px-3 py-4 sm:px-5 sm:py-5 lg:px-8">
          <div className="flex items-start justify-between gap-3 sm:items-center">
            <div className="min-w-0 flex-1">
              <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
                Interior Dashboard
              </h1>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Overview of projects, revenue, payments and team activity.
                {loading && (
                  <span className="ml-2 text-[#176b5b]">Loading…</span>
                )}
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  setStatusFilter("All");
                  setTypeFilter("All");
                  setSearch("");
                }}
                className="hidden rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 sm:inline-flex sm:px-4 sm:text-sm"
              >
                Reset Filters
              </button>
              {/* <Link
                href="/interior/crm"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125849] sm:gap-2 sm:px-4 sm:text-sm"
              >
                <Plus size={16} strokeWidth={2.5} />
                <span className="hidden sm:inline">New Enquiry</span>
                <span className="sm:hidden">Enquiry</span>
              </Link> */}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1600px] px-3 py-4 sm:px-5 sm:py-6 lg:px-8">
        {/* Metrics */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
          <MetricCard
            title="Total Projects"
            value={loading ? "…" : String(totalProjects)}
            helper="All interior projects"
            icon="▣"
          />
          <MetricCard
            title="Active Projects"
            value={loading ? "…" : String(activeProjects)}
            helper="Designing + In Progress"
            icon="⚡"
          />
          <MetricCard
            title="Completed"
            value={loading ? "…" : String(completedProjects)}
            helper="Finished projects"
            icon="✓"
          />
          <MetricCard
            title="Collections"
            value={loading ? "…" : formatCompactCurrency(totalPaid)}
            helper={`${collectionPercentage}% collected`}
            icon="₹"
          />
        </div>

        <div className="mt-5 grid gap-5 sm:mt-6 sm:gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
          {/* Projects */}
          <section className="min-w-0 rounded-xl border border-[#e4e2da] bg-white shadow-sm">
            <div className="border-b border-[#e4e2da] p-3 sm:p-5">
              <div className="flex flex-col gap-3 sm:gap-4">
                <div>
                  <h2 className="font-semibold">Projects</h2>
                  <p className="mt-1 text-xs text-gray-500">
                    Track ongoing interior projects and deadlines.
                  </p>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search project, client, location..."
                    className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] sm:min-w-[200px] sm:flex-1"
                  />
                  <div className="flex gap-2 overflow-x-auto pb-0.5">
                    <select
                      value={statusFilter}
                      onChange={(e) =>
                        setStatusFilter(
                          e.target.value as ProjectStatus | "All"
                        )
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
                        setTypeFilter(
                          e.target.value as
                            | "All"
                            | "Residential"
                            | "Commercial"
                        )
                      }
                      className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
                    >
                      <option value="All">All Types</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                    <button
                      type="button"
                      onClick={() => {
                        setStatusFilter("All");
                        setTypeFilter("All");
                        setSearch("");
                      }}
                      className="shrink-0 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 sm:hidden"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop table */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[900px] text-left">
                <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Project</th>
                    <th className="px-4 py-3 font-semibold">Client</th>
                    <th className="px-4 py-3 font-semibold">Value</th>
                    <th className="px-4 py-3 font-semibold">Progress</th>
                    <th className="px-4 py-3 font-semibold">Status</th>
                    <th className="px-4 py-3 font-semibold">Deadline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eeece6]">
                  {loading ? (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-5 py-12 text-center text-sm text-gray-500"
                      >
                        Loading projects…
                      </td>
                    </tr>
                  ) : visibleProjects.length === 0 ? (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-5 py-12 text-center text-sm text-gray-500"
                      >
                        No projects found
                      </td>
                    </tr>
                  ) : (
                    visibleProjects.map((project) => {
                      const progress = getProgress(project);
                      return (
                        <tr key={project.id} className="hover:bg-[#fafaf8]">
                          <td className="px-5 py-4">
                            <p className="text-xs font-semibold text-[#176b5b]">
                              {project.id}
                            </p>
                            <p className="mt-1 font-medium text-gray-900">
                              {project.project}
                            </p>
                            <p className="mt-0.5 text-xs text-gray-400">
                              {project.type} · {project.location}
                            </p>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-700">
                            {project.client}
                          </td>
                          <td className="px-4 py-4">
                            <p className="text-sm font-semibold text-gray-900">
                              {formatCurrency(project.value)}
                            </p>
                            <p className="mt-0.5 text-xs text-gray-400">
                              Paid {formatCurrency(project.paid)}
                            </p>
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-20 overflow-hidden rounded-full bg-gray-100">
                                <div
                                  className="h-full rounded-full bg-[#176b5b]"
                                  style={{ width: `${progress}%` }}
                                />
                              </div>
                              <span className="text-xs text-gray-500">
                                {progress}%
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
                            {project.deadline}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Mobile project cards */}
            <div className="space-y-3 p-3 md:hidden">
              {loading ? (
                <p className="py-10 text-center text-sm text-gray-500">
                  Loading projects…
                </p>
              ) : visibleProjects.length === 0 ? (
                <p className="py-10 text-center text-sm text-gray-500">
                  No projects found
                </p>
              ) : (
                visibleProjects.map((project) => {
                  const progress = getProgress(project);
                  return (
                    <div
                      key={project.id}
                      className="rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3.5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="text-[11px] font-semibold text-[#176b5b]">
                            {project.id}
                          </p>
                          <p className="mt-0.5 truncate font-medium text-gray-900">
                            {project.project}
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
                      <div className="mt-3 flex items-center justify-between text-sm">
                        <span className="font-semibold text-gray-900">
                          {formatCurrency(project.value)}
                        </span>
                        <span className="text-xs text-gray-500">
                          Due {project.deadline}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200">
                          <div
                            className="h-full rounded-full bg-[#176b5b]"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <span className="text-[11px] text-gray-500">
                          {progress}%
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {filteredProjects.length > 5 && (
              <div className="border-t border-[#e4e2da] px-4 py-3 text-right sm:px-5">
                <button
                  type="button"
                  onClick={() => setShowAllProjects((v) => !v)}
                  className="text-sm font-semibold text-[#176b5b] hover:underline"
                >
                  {showAllProjects
                    ? "Show less"
                    : `Show all ${filteredProjects.length} projects`}
                </button>
              </div>
            )}
          </section>

          {/* Right column */}
          <div className="space-y-5 sm:space-y-6">
            <section className="rounded-xl border border-[#e4e2da] bg-white p-4 shadow-sm sm:p-5">
              <h2 className="font-semibold">Collection Progress</h2>
              <p className="mt-1 text-xs text-gray-500">
                Overall project collections
              </p>
              <p className="mt-4 text-3xl font-bold text-[#176b5b]">
                {collectionPercentage}%
              </p>
              <div className="mt-3 h-3 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-[#176b5b]"
                  style={{ width: `${collectionPercentage}%` }}
                />
              </div>
              <div className="mt-4 flex justify-between text-sm">
                <span className="text-gray-500">Received</span>
                <span className="font-semibold text-green-700">
                  {formatCurrency(totalPaid)}
                </span>
              </div>
              <div className="mt-2 flex justify-between text-sm">
                <span className="text-gray-500">Pending</span>
                <span className="font-semibold text-red-600">
                  {formatCurrency(totalPending)}
                </span>
              </div>
            </section>

            <section className="rounded-xl border border-[#e4e2da] bg-white p-4 shadow-sm sm:p-5">
              <h2 className="font-semibold">Project Overview</h2>
              <p className="mt-1 text-xs text-gray-500">
                Residential vs commercial
              </p>
              <div className="mt-5 space-y-4">
                <OverviewRow
                  label="Residential"
                  value={residentialProjects}
                  total={totalProjects}
                  icon="🏠"
                />
                <OverviewRow
                  label="Commercial"
                  value={commercialProjects}
                  total={totalProjects}
                  icon="🏢"
                />
              </div>
            </section>

            <section className="rounded-xl border border-[#e4e2da] bg-white p-4 shadow-sm sm:p-5">
              <h2 className="font-semibold">Project Status</h2>
              <div className="mt-5 space-y-3">
                {statusData.map((item) => {
                  const percentage =
                    totalProjects > 0
                      ? Math.round((item.count / totalProjects) * 100)
                      : 0;
                  return (
                    <div key={item.status}>
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span>{item.status}</span>
                        <span className="font-semibold">{item.count}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className="h-full rounded-full bg-[#9a5b18]"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-5 grid gap-5 sm:mt-6 sm:gap-6 lg:grid-cols-2">
          <section className="rounded-xl border border-[#e4e2da] bg-white shadow-sm">
            <div className="border-b border-[#e4e2da] px-4 py-4 sm:px-5">
              <h2 className="font-semibold">Recent Activity</h2>
              <p className="mt-1 text-xs text-gray-500">
                Latest project and payment updates
              </p>
            </div>
            <div className="divide-y divide-[#eeece6]">
              {activities.length === 0 && !loading && (
                <div className="px-5 py-8 text-center text-sm text-gray-500">
                  No recent activity
                </div>
              )}
              {activities.map((activity) => (
                <div key={activity.id} className="flex gap-3 px-4 py-4 sm:px-5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef7f4] text-sm">
                    {activity.type === "payment"
                      ? "₹"
                      : activity.type === "enquiry"
                        ? "?"
                        : "▣"}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900">
                      {activity.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {activity.description}
                    </p>
                    <p className="mt-1 text-[11px] text-gray-400">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-[#e4e2da] bg-white shadow-sm">
            <div className="border-b border-[#e4e2da] px-4 py-4 sm:px-5">
              <h2 className="font-semibold">Business Snapshot</h2>
              <p className="mt-1 text-xs text-gray-500">
                Current interior business performance.
              </p>
            </div>
            {/* <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 sm:gap-4 sm:p-5">
              <SnapshotCard
                label="Total Project Value"
                value={formatCurrency(totalValue)}
                helper="Across all projects"
              />
              <SnapshotCard
                label="Amount Received"
                value={formatCurrency(totalPaid)}
                helper="Collected so far"
              />
              <SnapshotCard
                label="Amount Pending"
                value={formatCurrency(totalPending)}
                helper="Outstanding amount"
              />
              <SnapshotCard
                label="Average Project"
                value={formatCurrency(
                  totalProjects > 0
                    ? Math.round(totalValue / totalProjects)
                    : 0
                )}
                helper="Average project value"
              />
            </div> */}
            <div className="grid grid-cols-2 gap-3 p-3 sm:gap-4 sm:p-5">
              <SnapshotCard
                label="Total Project Value"
                value={formatCurrency(totalValue)}
                helper="Across all projects"
              />
              <SnapshotCard
                label="Amount Received"
                value={formatCurrency(totalPaid)}
                helper="Collected so far"
              />
              <SnapshotCard
                label="Amount Pending"
                value={formatCurrency(totalPending)}
                helper="Outstanding amount"
              />
              <SnapshotCard
                label="Average Project"
                value={formatCurrency(
                  totalProjects > 0 ? Math.round(totalValue / totalProjects) : 0
                )}
                helper="Average project value"
              />
            </div>
            <div className="border-t border-[#e4e2da] p-4 sm:p-5">
              <h3 className="text-sm font-semibold">Quick Navigation</h3>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <QuickLink label="CRM" href="/interior/crm" />
                <QuickLink label="Contracts" href="/interior/contracts" />
                <QuickLink label="Projects" href="/interior/projects" />
                <QuickLink label="Payments" href="/interior/payments" />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function MetricCard({
  title,
  value,
  helper,
  icon,
}: {
  title: string;
  value: string;
  helper: string;
  icon: string;
}) {
  return (
    <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="text-xs text-gray-500 sm:text-sm">{title}</p>
          <p className="mt-1.5 truncate text-xl font-bold text-gray-900 sm:mt-2 sm:text-2xl">
            {value}
          </p>
          <p className="mt-1 text-[11px] text-gray-400 sm:text-xs">{helper}</p>
        </div>
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#eef7f4] text-base sm:h-10 sm:w-10 sm:text-lg">
          {icon}
        </div>
      </div>
    </div>
  );
}

function OverviewRow({
  label,
  value,
  total,
  icon,
}: {
  label: string;
  value: number;
  total: number;
  icon: string;
}) {
  const pct = total > 0 ? Math.round((value / total) * 100) : 0;
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="flex items-center gap-2 text-gray-600">
          <span>{icon}</span>
          {label}
        </span>
        <span className="font-semibold text-gray-800">
          {value} ({pct}%)
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-[#176b5b]"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function SnapshotCard({
  label,
  value,
  helper,
}: {
  label: string;
  value: string;
  helper: string;
}) {
  return (
    <div className="rounded-xl bg-[#fafaf8] p-3.5 sm:p-4">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="mt-1 text-base font-bold text-gray-900 sm:text-lg">
        {value}
      </p>
      <p className="mt-1 text-xs text-gray-400">{helper}</p>
    </div>
  );
}

function QuickLink({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="rounded-lg border border-gray-200 px-3 py-2.5 text-center text-sm font-medium text-gray-700 transition hover:border-[#176b5b] hover:text-[#176b5b]"
    >
      {label}
    </Link>
  );
}
