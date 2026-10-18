// "use client";

// import { useMemo, useState } from "react";

// type Project = {
//   id: string;
//   name: string;
//   client: string;
//   type: "1 BHK" | "2 BHK" | "3 BHK" | "Villa" | "Office";
//   value: number;
//   received: number;
//   progress: number;
//   status: "On Track" | "In Progress" | "Completed" | "Delayed";
//   startDate: string;
// };

// type MonthlyData = {
//   month: string;
//   revenue: number;
//   expenses: number;
// };

// const projects: Project[] = [
//   {
//     id: "PRJ-2024-001",
//     name: "Kumar Residence",
//     client: "Kumar Family",
//     type: "3 BHK",
//     value: 1250000,
//     received: 850000,
//     progress: 45,
//     status: "In Progress",
//     startDate: "2024-03-01",
//   },
//   {
//     id: "PRJ-2024-002",
//     name: "Sharma Residence",
//     client: "Priya Sharma",
//     type: "2 BHK",
//     value: 875000,
//     received: 700000,
//     progress: 68,
//     status: "On Track",
//     startDate: "2024-02-15",
//   },
//   {
//     id: "PRJ-2024-003",
//     name: "Mehta Villa",
//     client: "Neha Mehta",
//     type: "Villa",
//     value: 2200000,
//     received: 1500000,
//     progress: 52,
//     status: "In Progress",
//     startDate: "2024-01-20",
//   },
//   {
//     id: "PRJ-2024-004",
//     name: "Patel Apartment",
//     client: "Amit Patel",
//     type: "2 BHK",
//     value: 650000,
//     received: 650000,
//     progress: 100,
//     status: "Completed",
//     startDate: "2024-01-05",
//   },
//   {
//     id: "PRJ-2024-005",
//     name: "Reddy Office",
//     client: "Reddy Enterprises",
//     type: "Office",
//     value: 950000,
//     received: 450000,
//     progress: 30,
//     status: "Delayed",
//     startDate: "2024-04-01",
//   },
//   {
//     id: "PRJ-2024-006",
//     name: "Shah Residence",
//     client: "Rajesh Shah",
//     type: "1 BHK",
//     value: 450000,
//     received: 300000,
//     progress: 75,
//     status: "On Track",
//     startDate: "2024-03-15",
//   },
// ];

// const monthlyData: MonthlyData[] = [
//   { month: "Jan", revenue: 420000, expenses: 250000 },
//   { month: "Feb", revenue: 580000, expenses: 310000 },
//   { month: "Mar", revenue: 720000, expenses: 390000 },
//   { month: "Apr", revenue: 650000, expenses: 360000 },
//   { month: "May", revenue: 850000, expenses: 470000 },
//   { month: "Jun", revenue: 920000, expenses: 510000 },
// ];

// const formatCurrency = (value: number) => {
//   if (value >= 10000000) {
//     return `₹${(value / 10000000).toFixed(2)} Cr`;
//   }

//   if (value >= 100000) {
//     return `₹${(value / 100000).toFixed(2)} L`;
//   }

//   return `₹${value.toLocaleString("en-IN")}`;
// };

// const formatFullCurrency = (value: number) => {
//   return `₹${value.toLocaleString("en-IN")}`;
// };

// const statusClass = (status: Project["status"]) => {
//   switch (status) {
//     case "Completed":
//       return "bg-emerald-50 text-emerald-700 border-emerald-200";

//     case "On Track":
//       return "bg-green-50 text-green-700 border-green-200";

//     case "Delayed":
//       return "bg-red-50 text-red-700 border-red-200";

//     default:
//       return "bg-amber-50 text-amber-700 border-amber-200";
//   }
// };

// function Card({
//   children,
//   className = "",
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) {
//   return (
//     <div
//       className={`rounded-xl border border-slate-200 bg-white shadow-sm ${className}`}
//     >
//       {children}
//     </div>
//   );
// }

// function SectionTitle({
//   title,
//   subtitle,
// }: {
//   title: string;
//   subtitle?: string;
// }) {
//   return (
//     <div className="mb-5">
//       <h2 className="text-[15px] font-semibold text-slate-900">{title}</h2>

//       {subtitle && (
//         <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
//       )}
//     </div>
//   );
// }

// export default function InteriorReportsPage() {
//   const [period, setPeriod] = useState("Jan 2024 - Dec 2024");
//   const [projectFilter, setProjectFilter] = useState("All Projects");

//   const filteredProjects = useMemo(() => {
//     if (projectFilter === "All Projects") {
//       return projects;
//     }

//     return projects.filter((project) => project.type === projectFilter);
//   }, [projectFilter]);

//   const totalProjectValue = filteredProjects.reduce(
//     (sum, project) => sum + project.value,
//     0
//   );

//   const totalReceived = filteredProjects.reduce(
//     (sum, project) => sum + project.received,
//     0
//   );

//   const totalPending = totalProjectValue - totalReceived;

//   const activeProjects = filteredProjects.filter(
//     (project) => project.status !== "Completed"
//   ).length;

//   const averageProgress =
//     filteredProjects.length > 0
//       ? Math.round(
//           filteredProjects.reduce(
//             (sum, project) => sum + project.progress,
//             0
//           ) / filteredProjects.length
//         )
//       : 0;

//   const totalRevenue = monthlyData.reduce(
//     (sum, item) => sum + item.revenue,
//     0
//   );

//   const totalExpenses = monthlyData.reduce(
//     (sum, item) => sum + item.expenses,
//     0
//   );

//   const totalProfit = totalRevenue - totalExpenses;

//   const profitMargin =
//     totalRevenue > 0 ? (totalProfit / totalRevenue) * 100 : 0;

//   const maxMonthlyValue = Math.max(
//     ...monthlyData.flatMap((item) => [item.revenue, item.expenses])
//   );

//   const projectTypeData = useMemo(() => {
//     const grouped: Record<string, number> = {};

//     filteredProjects.forEach((project) => {
//       grouped[project.type] = (grouped[project.type] || 0) + project.value;
//     });

//     return Object.entries(grouped)
//       .map(([type, value]) => ({
//         type,
//         value,
//         percentage:
//           totalProjectValue > 0
//             ? Math.round((value / totalProjectValue) * 100)
//             : 0,
//       }))
//       .sort((a, b) => b.value - a.value);
//   }, [filteredProjects, totalProjectValue]);

//   const clientData = useMemo(() => {
//     const grouped: Record<
//       string,
//       { value: number; projects: number }
//     > = {};

//     filteredProjects.forEach((project) => {
//       if (!grouped[project.client]) {
//         grouped[project.client] = {
//           value: 0,
//           projects: 0,
//         };
//       }

//       grouped[project.client].value += project.value;
//       grouped[project.client].projects += 1;
//     });

//     return Object.entries(grouped)
//       .map(([client, data]) => ({
//         client,
//         ...data,
//       }))
//       .sort((a, b) => b.value - a.value)
//       .slice(0, 5);
//   }, [filteredProjects]);

//   const progressSummary = [
//     {
//       label: "On Track",
//       count: filteredProjects.filter((p) => p.status === "On Track").length,
//       width: 72,
//       className: "bg-emerald-500",
//     },
//     {
//       label: "In Progress",
//       count: filteredProjects.filter((p) => p.status === "In Progress")
//         .length,
//       width: 58,
//       className: "bg-blue-500",
//     },
//     {
//       label: "Completed",
//       count: filteredProjects.filter((p) => p.status === "Completed").length,
//       width: 92,
//       className: "bg-green-600",
//     },
//     {
//       label: "Delayed",
//       count: filteredProjects.filter((p) => p.status === "Delayed").length,
//       width: 34,
//       className: "bg-red-500",
//     },
//   ];

//   return (
//     <main className="min-h-screen bg-[#f8faf9] p-4 md:p-6">
//       {/* Header */}
//       <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//         <div>
//           <div className="mb-1 flex items-center gap-2">
//             <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-700 text-sm font-bold text-white">
//               V
//             </div>

//             <div>
//               <h1 className="text-xl font-bold tracking-tight text-slate-900">
//                 VIP Interior
//               </h1>
//               <p className="text-[10px] uppercase tracking-wider text-slate-400">
//                 Furniture & Interior
//               </p>
//             </div>
//           </div>

//           <div className="mt-4">
//             <h2 className="text-2xl font-bold text-slate-900">
//               Reports & Analytics
//             </h2>

//             <p className="mt-1 text-sm text-slate-500">
//               Project, financial and operational insights
//             </p>
//           </div>
//         </div>

//         <div className="flex flex-wrap items-center gap-2">
//           <select
//             value={period}
//             onChange={(e) => setPeriod(e.target.value)}
//             className="h-10 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-emerald-500"
//           >
//             <option>Jan 2024 - Dec 2024</option>
//             <option>Jan 2024 - Jun 2024</option>
//             <option>Jul 2024 - Dec 2024</option>
//             <option>Last 30 Days</option>
//             <option>Last 90 Days</option>
//           </select>

//           <select
//             value={projectFilter}
//             onChange={(e) => setProjectFilter(e.target.value)}
//             className="h-10 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-emerald-500"
//           >
//             <option>All Projects</option>
//             <option>1 BHK</option>
//             <option>2 BHK</option>
//             <option>3 BHK</option>
//             <option>Villa</option>
//             <option>Office</option>
//           </select>

//           <button
//             type="button"
//             onClick={() => window.print()}
//             className="flex h-10 items-center gap-2 rounded-lg bg-emerald-700 px-4 text-sm font-medium text-white transition hover:bg-emerald-800"
//           >
//             <span>↓</span>
//             Export
//           </button>
//         </div>
//       </div>

//       {/* KPI Cards */}
//       <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
//         <Card className="p-4">
//           <p className="text-xs font-medium text-slate-500">
//             Total Project Value
//           </p>

//           <div className="mt-2 flex items-end justify-between">
//             <p className="text-2xl font-bold text-slate-900">
//               {formatCurrency(totalProjectValue)}
//             </p>

//             <span className="rounded-md bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
//               +12.4%
//             </span>
//           </div>
//         </Card>

//         <Card className="p-4">
//           <p className="text-xs font-medium text-slate-500">
//             Amount Received
//           </p>

//           <p className="mt-2 text-2xl font-bold text-emerald-700">
//             {formatCurrency(totalReceived)}
//           </p>

//           <p className="mt-1 text-xs text-slate-400">
//             {totalProjectValue > 0
//               ? Math.round((totalReceived / totalProjectValue) * 100)
//               : 0}
//             % collected
//           </p>
//         </Card>

//         <Card className="p-4">
//           <p className="text-xs font-medium text-slate-500">
//             Pending Amount
//           </p>

//           <p className="mt-2 text-2xl font-bold text-amber-600">
//             {formatCurrency(totalPending)}
//           </p>

//           <p className="mt-1 text-xs text-slate-400">
//             Receivable from projects
//           </p>
//         </Card>

//         <Card className="p-4">
//           <p className="text-xs font-medium text-slate-500">
//             Active Projects
//           </p>

//           <p className="mt-2 text-2xl font-bold text-blue-600">
//             {activeProjects}
//           </p>

//           <p className="mt-1 text-xs text-slate-400">
//             Avg. progress {averageProgress}%
//           </p>
//         </Card>

//         <Card className="p-4">
//           <p className="text-xs font-medium text-slate-500">
//             Profit Margin
//           </p>

//           <p className="mt-2 text-2xl font-bold text-slate-900">
//             {profitMargin.toFixed(1)}%
//           </p>

//           <p className="mt-1 text-xs text-emerald-600">
//             {formatCurrency(totalProfit)} estimated profit
//           </p>
//         </Card>
//       </div>

//       {/* Main Analytics */}
//       <div className="mt-5 grid gap-5 xl:grid-cols-2">
//         {/* Project Value By Type */}
//         <Card className="p-5">
//           <SectionTitle
//             title="Project Value by Type"
//             subtitle="Distribution of project portfolio value"
//           />

//           <div className="flex items-center gap-8">
//             <div
//               className="relative flex h-44 w-44 shrink-0 items-center justify-center rounded-full"
//               style={{
//                 background: `conic-gradient(
//                   #047857 0% 45%,
//                   #10b981 45% 70%,
//                   #60a5fa 70% 85%,
//                   #f59e0b 85% 95%,
//                   #94a3b8 95% 100%
//                 )`,
//               }}
//             >
//               <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white">
//                 <span className="text-lg font-bold text-slate-900">
//                   {formatCurrency(totalProjectValue)}
//                 </span>

//                 <span className="text-[10px] text-slate-400">
//                   Total Value
//                 </span>
//               </div>
//             </div>

//             <div className="flex-1 space-y-4">
//               {projectTypeData.map((item, index) => {
//                 const dotClasses = [
//                   "bg-emerald-700",
//                   "bg-emerald-400",
//                   "bg-blue-400",
//                   "bg-amber-400",
//                   "bg-slate-400",
//                 ];

//                 return (
//                   <div
//                     key={item.type}
//                     className="flex items-center justify-between gap-4"
//                   >
//                     <div className="flex items-center gap-2">
//                       <span
//                         className={`h-2.5 w-2.5 rounded-full ${
//                           dotClasses[index] || "bg-slate-400"
//                         }`}
//                       />

//                       <span className="text-sm text-slate-600">
//                         {item.type}
//                       </span>
//                     </div>

//                     <div className="text-right">
//                       <p className="text-sm font-semibold text-slate-900">
//                         {formatCurrency(item.value)}
//                       </p>

//                       <p className="text-[10px] text-slate-400">
//                         {item.percentage}%
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </Card>

//         {/* Monthly Revenue vs Expenses */}
//         <Card className="p-5">
//           <SectionTitle
//             title="Monthly Revenue vs Expenses"
//             subtitle="Financial performance by month"
//           />

//           <div className="flex h-52 items-end gap-3 border-b border-slate-100 px-2">
//             {monthlyData.map((item) => {
//               const revenueHeight =
//                 (item.revenue / maxMonthlyValue) * 175;

//               const expenseHeight =
//                 (item.expenses / maxMonthlyValue) * 175;

//               return (
//                 <div
//                   key={item.month}
//                   className="flex flex-1 flex-col items-center justify-end gap-2"
//                 >
//                   <div className="flex h-44 items-end gap-1">
//                     <div
//                       title={`Revenue: ${formatFullCurrency(
//                         item.revenue
//                       )}`}
//                       className="w-4 rounded-t bg-emerald-600 transition hover:bg-emerald-700"
//                       style={{
//                         height: `${revenueHeight}px`,
//                       }}
//                     />

//                     <div
//                       title={`Expenses: ${formatFullCurrency(
//                         item.expenses
//                       )}`}
//                       className="w-4 rounded-t bg-amber-400 transition hover:bg-amber-500"
//                       style={{
//                         height: `${expenseHeight}px`,
//                       }}
//                     />
//                   </div>

//                   <span className="text-[11px] text-slate-500">
//                     {item.month}
//                   </span>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="mt-4 flex items-center justify-center gap-5 text-xs text-slate-500">
//             <span className="flex items-center gap-2">
//               <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
//               Revenue
//             </span>

//             <span className="flex items-center gap-2">
//               <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
//               Expenses
//             </span>
//           </div>
//         </Card>
//       </div>

//       {/* Bottom Analytics */}
//       <div className="mt-5 grid gap-5 xl:grid-cols-2">
//         {/* Project Progress */}
//         <Card className="p-5">
//           <SectionTitle
//             title="Project Progress Summary"
//             subtitle="Current status across projects"
//           />

//           <div className="space-y-5">
//             {progressSummary.map((item) => (
//               <div key={item.label}>
//                 <div className="mb-2 flex items-center justify-between">
//                   <span className="text-sm font-medium text-slate-600">
//                     {item.label}
//                   </span>

//                   <span className="text-sm font-semibold text-slate-900">
//                     {item.count}
//                   </span>
//                 </div>

//                 <div className="h-2 overflow-hidden rounded-full bg-slate-100">
//                   <div
//                     className={`h-full rounded-full ${item.className}`}
//                     style={{
//                       width: `${item.count === 0 ? 0 : item.width}%`,
//                     }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-6 grid grid-cols-3 gap-3">
//             <div className="rounded-lg bg-slate-50 p-3 text-center">
//               <p className="text-xl font-bold text-slate-900">
//                 {filteredProjects.length}
//               </p>
//               <p className="mt-1 text-[10px] text-slate-500">
//                 Total Projects
//               </p>
//             </div>

//             <div className="rounded-lg bg-slate-50 p-3 text-center">
//               <p className="text-xl font-bold text-emerald-700">
//                 {averageProgress}%
//               </p>
//               <p className="mt-1 text-[10px] text-slate-500">
//                 Avg. Progress
//               </p>
//             </div>

//             <div className="rounded-lg bg-slate-50 p-3 text-center">
//               <p className="text-xl font-bold text-amber-600">
//                 {filteredProjects.filter((p) => p.status === "Delayed").length}
//               </p>
//               <p className="mt-1 text-[10px] text-slate-500">
//                 Delayed
//               </p>
//             </div>
//           </div>
//         </Card>

//         {/* Top Clients */}
//         <Card className="overflow-hidden">
//           <div className="p-5 pb-3">
//             <SectionTitle
//               title="Top Clients by Project Value"
//               subtitle="Highest-value clients in the selected period"
//             />
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[500px]">
//               <thead>
//                 <tr className="border-y border-slate-100 bg-slate-50">
//                   <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500">
//                     #
//                   </th>

//                   <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500">
//                     Client
//                   </th>

//                   <th className="px-5 py-3 text-center text-[11px] font-semibold uppercase tracking-wide text-slate-500">
//                     Projects
//                   </th>

//                   <th className="px-5 py-3 text-right text-[11px] font-semibold uppercase tracking-wide text-slate-500">
//                     Project Value
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {clientData.map((client, index) => (
//                   <tr
//                     key={client.client}
//                     className="border-b border-slate-100 transition hover:bg-slate-50"
//                   >
//                     <td className="px-5 py-4 text-sm font-semibold text-slate-400">
//                       {index + 1}
//                     </td>

//                     <td className="px-5 py-4">
//                       <p className="text-sm font-medium text-slate-800">
//                         {client.client}
//                       </p>
//                     </td>

//                     <td className="px-5 py-4 text-center text-sm text-slate-600">
//                       {client.projects}
//                     </td>

//                     <td className="px-5 py-4 text-right text-sm font-semibold text-slate-900">
//                       {formatFullCurrency(client.value)}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </Card>
//       </div>

//       {/* Project Financial Details */}
//       <Card className="mt-5 overflow-hidden">
//         <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             <h2 className="text-[15px] font-semibold text-slate-900">
//               Project Financial Overview
//             </h2>

//             <p className="mt-1 text-xs text-slate-500">
//               Project value, received amount and pending receivables
//             </p>
//           </div>

//           <span className="rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-500">
//             {period}
//           </span>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full min-w-[800px]">
//             <thead>
//               <tr className="border-y border-slate-100 bg-slate-50">
//                 <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500">
//                   Project
//                 </th>

//                 <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500">
//                   Client
//                 </th>

//                 <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500">
//                   Type
//                 </th>

//                 <th className="px-5 py-3 text-right text-[11px] font-semibold uppercase tracking-wide text-slate-500">
//                   Project Value
//                 </th>

//                 <th className="px-5 py-3 text-right text-[11px] font-semibold uppercase tracking-wide text-slate-500">
//                   Received
//                 </th>

//                 <th className="px-5 py-3 text-right text-[11px] font-semibold uppercase tracking-wide text-slate-500">
//                   Pending
//                 </th>

//                 <th className="px-5 py-3 text-center text-[11px] font-semibold uppercase tracking-wide text-slate-500">
//                   Progress
//                 </th>

//                 <th className="px-5 py-3 text-center text-[11px] font-semibold uppercase tracking-wide text-slate-500">
//                   Status
//                 </th>
//               </tr>
//             </thead>

//             <tbody>
//               {filteredProjects.map((project) => {
//                 const pending = project.value - project.received;

//                 return (
//                   <tr
//                     key={project.id}
//                     className="border-b border-slate-100 hover:bg-slate-50"
//                   >
//                     <td className="px-5 py-4">
//                       <p className="text-sm font-semibold text-slate-800">
//                         {project.name}
//                       </p>

//                       <p className="mt-0.5 text-[10px] text-slate-400">
//                         {project.id}
//                       </p>
//                     </td>

//                     <td className="px-5 py-4 text-sm text-slate-600">
//                       {project.client}
//                     </td>

//                     <td className="px-5 py-4 text-sm text-slate-600">
//                       {project.type}
//                     </td>

//                     <td className="px-5 py-4 text-right text-sm font-medium text-slate-800">
//                       {formatFullCurrency(project.value)}
//                     </td>

//                     <td className="px-5 py-4 text-right text-sm font-medium text-emerald-700">
//                       {formatFullCurrency(project.received)}
//                     </td>

//                     <td className="px-5 py-4 text-right text-sm font-medium text-amber-600">
//                       {formatFullCurrency(pending)}
//                     </td>

//                     <td className="px-5 py-4">
//                       <div className="mx-auto flex max-w-[100px] items-center gap-2">
//                         <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
//                           <div
//                             className="h-full rounded-full bg-emerald-600"
//                             style={{
//                               width: `${project.progress}%`,
//                             }}
//                           />
//                         </div>

//                         <span className="text-[11px] font-medium text-slate-600">
//                           {project.progress}%
//                         </span>
//                       </div>
//                     </td>

//                     <td className="px-5 py-4 text-center">
//                       <span
//                         className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-semibold ${statusClass(
//                           project.status
//                         )}`}
//                       >
//                         {project.status}
//                       </span>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>

//         {filteredProjects.length === 0 && (
//           <div className="p-10 text-center">
//             <p className="text-sm font-medium text-slate-700">
//               No projects found
//             </p>

//             <p className="mt-1 text-xs text-slate-400">
//               Try changing the project filter.
//             </p>
//           </div>
//         )}
//       </Card>

//       {/* Footer information */}
//       <div className="mt-5 flex flex-col gap-2 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
//         <p>
//           Reports are calculated from project, payment and operational records.
//         </p>

//         <p>
//           Selected period: <span className="font-medium">{period}</span>
//         </p>
//       </div>
//     </main>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAllInteriorProjects,
//   type InteriorProject,
// } from "@/modules/interior/services/projectService";
// import {
//   getAllPayments,
//   type InteriorPayment,
// } from "@/modules/interior/services/paymentService";
// import { Timestamp } from "firebase/firestore";

// type ProjectStatus = "On Track" | "In Progress" | "Completed" | "Delayed";

// type Project = {
//   id: string;
//   name: string;
//   client: string;
//   type: string;
//   value: number;
//   received: number;
//   progress: number;
//   status: ProjectStatus;
//   startDate: string;
// };

// type MonthlyData = {
//   month: string;
//   revenue: number;
//   expenses: number;
// };

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
//   if (value >= 10000000) return `₹${(value / 10000000).toFixed(2)} Cr`;
//   if (value >= 100000) return `₹${(value / 100000).toFixed(2)} L`;
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function formatFullCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function statusClass(status: ProjectStatus) {
//   switch (status) {
//     case "On Track":
//       return "bg-emerald-50 text-emerald-700 border-emerald-200";
//     case "In Progress":
//       return "bg-blue-50 text-blue-700 border-blue-200";
//     case "Completed":
//       return "bg-green-50 text-green-700 border-green-200";
//     case "Delayed":
//       return "bg-red-50 text-red-700 border-red-200";
//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function toDate(value: unknown): Date | null {
//   if (!value) return null;
//   if (typeof value === "string") {
//     const d = new Date(value);
//     return Number.isNaN(d.getTime()) ? null : d;
//   }
//   try {
//     if (typeof (value as Timestamp).toDate === "function") {
//       return (value as Timestamp).toDate();
//     }
//   } catch {
//     /* ignore */
//   }
//   return null;
// }

// function toDateString(value: unknown): string {
//   const d = toDate(value);
//   return d ? d.toISOString().slice(0, 10) : "—";
// }

// function mapProjectStatus(raw?: string, progress = 0): ProjectStatus {
//   const s = (raw || "").toLowerCase();
//   if (s.includes("complete") || s === "done" || progress >= 100)
//     return "Completed";
//   if (s.includes("delay") || s.includes("hold") || s.includes("overdue"))
//     return "Delayed";
//   if (s.includes("progress") || s.includes("design") || s === "active")
//     return "In Progress";
//   if (s.includes("track") || s === "new") return "On Track";
//   if (progress >= 70) return "On Track";
//   if (progress > 0) return "In Progress";
//   return "On Track";
// }

// function mapProject(p: InteriorProject): Project {
//   const value = Number(p.value ?? p.projectValue ?? p.totalValue ?? 0) || 0;
//   const received = Number(p.paid ?? p.amountPaid ?? 0) || 0;
//   const progress =
//     typeof p.progress === "number"
//       ? Math.min(100, Math.round(p.progress))
//       : received > 0 && value > 0
//       ? Math.min(100, Math.round((received / value) * 100))
//       : 0;

//   return {
//     id: p.projectNo || p.projectId || p.id,
//     name: p.projectName || p.name || "Untitled Project",
//     client: p.clientName || p.client || p.customerName || "Unknown",
//     type: p.projectType || p.type || "Residential",
//     value,
//     received,
//     progress,
//     status: mapProjectStatus(p.status, progress),
//     startDate: p.startDate || toDateString(p.createdAt),
//   };
// }

// function buildMonthlyFromPayments(
//   payments: InteriorPayment[]
// ): MonthlyData[] {
//   const map = new Map<string, number>();

//   for (const p of payments) {
//     const d =
//       toDate(p.paymentDate) ||
//       toDate(p.createdAt) ||
//       null;
//     if (!d) continue;
//     const key = MONTHS[d.getMonth()];
//     const amount = Number(p.amountReceived ?? 0) || 0;
//     map.set(key, (map.get(key) || 0) + amount);
//   }

//   // Last 6 months ending current month
//   const now = new Date();
//   const result: MonthlyData[] = [];
//   for (let i = 5; i >= 0; i--) {
//     const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
//     const key = MONTHS[d.getMonth()];
//     const revenue = map.get(key) || 0;
//     // Expense estimate: ~55% of revenue when no expense collection wired
//     const expenses = Math.round(revenue * 0.55);
//     result.push({ month: key, revenue, expenses });
//   }

//   return result;
// }

// export default function InteriorReportsPage() {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [monthlyData, setMonthlyData] = useState<MonthlyData[]>([]);
//   const [loading, setLoading] = useState(true);

//   const [period, setPeriod] = useState("All Time");
//   const [projectFilter, setProjectFilter] = useState("All Projects");

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const [projectDocs, paymentDocs] = await Promise.all([
//           getAllInteriorProjects(),
//           getAllPayments(),
//         ]);
//         if (cancelled) return;

//         setProjects(projectDocs.map(mapProject));
//         setMonthlyData(buildMonthlyFromPayments(paymentDocs));
//       } catch (err) {
//         console.error("Failed to load reports:", err);
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
//     if (projectFilter === "All Projects") return projects;
//     return projects.filter((p) => p.type === projectFilter);
//   }, [projects, projectFilter]);

//   const projectTypes = useMemo(() => {
//     const set = new Set(projects.map((p) => p.type));
//     return ["All Projects", ...Array.from(set)];
//   }, [projects]);

//   const totalProjectValue = filteredProjects.reduce(
//     (sum, p) => sum + p.value,
//     0
//   );
//   const totalReceived = filteredProjects.reduce(
//     (sum, p) => sum + p.received,
//     0
//   );
//   const totalPending = totalProjectValue - totalReceived;

//   const activeProjects = filteredProjects.filter(
//     (p) => p.status !== "Completed"
//   ).length;

//   const averageProgress =
//     filteredProjects.length === 0
//       ? 0
//       : Math.round(
//           filteredProjects.reduce((sum, p) => sum + p.progress, 0) /
//             filteredProjects.length
//         );

//   const totalRevenue = monthlyData.reduce((sum, m) => sum + m.revenue, 0);
//   const totalExpenses = monthlyData.reduce((sum, m) => sum + m.expenses, 0);
//   const totalProfit = totalRevenue - totalExpenses;
//   const profitMargin =
//     totalRevenue === 0 ? 0 : Math.round((totalProfit / totalRevenue) * 100);

//   const maxMonthlyValue = Math.max(
//     1,
//     ...monthlyData.flatMap((m) => [m.revenue, m.expenses])
//   );

//   const projectTypeData = useMemo(() => {
//     const grouped: Record<string, number> = {};
//     for (const p of filteredProjects) {
//       grouped[p.type] = (grouped[p.type] || 0) + 1;
//     }
//     const total = filteredProjects.length || 1;
//     return Object.entries(grouped).map(([label, count]) => ({
//       label,
//       count,
//       pct: Math.round((count / total) * 100),
//     }));
//   }, [filteredProjects]);

//   const clientData = useMemo(() => {
//     const grouped: Record<
//       string,
//       { client: string; value: number; received: number; count: number }
//     > = {};

//     for (const p of filteredProjects) {
//       if (!grouped[p.client]) {
//         grouped[p.client] = {
//           client: p.client,
//           value: 0,
//           received: 0,
//           count: 0,
//         };
//       }
//       grouped[p.client].value += p.value;
//       grouped[p.client].received += p.received;
//       grouped[p.client].count += 1;
//     }

//     return Object.values(grouped)
//       .sort((a, b) => b.value - a.value)
//       .slice(0, 6);
//   }, [filteredProjects]);

//   const progressSummary = [
//     {
//       label: "On Track",
//       count: filteredProjects.filter((p) => p.status === "On Track").length,
//       className: "bg-emerald-500",
//     },
//     {
//       label: "In Progress",
//       count: filteredProjects.filter((p) => p.status === "In Progress")
//         .length,
//       className: "bg-blue-500",
//     },
//     {
//       label: "Completed",
//       count: filteredProjects.filter((p) => p.status === "Completed").length,
//       className: "bg-green-600",
//     },
//     {
//       label: "Delayed",
//       count: filteredProjects.filter((p) => p.status === "Delayed").length,
//       className: "bg-red-500",
//     },
//   ];

//   return (
//     <main className="min-h-screen bg-[#f7f7f4] p-4 md:p-6 text-[#252525]">
//       <div className="mx-auto max-w-[1600px]">
//         <a
//           href="/interior/dashboard"
//           className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[#176b5b] hover:underline"
//         >
//           ← Back to Interior
//         </a>

//         <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//           <div>
//             <div className="mb-1 text-sm font-medium text-[#9a5b18]">
//               Akrish / Furniture and Interior
//             </div>
//             <h1 className="text-2xl font-bold tracking-tight">
//               Reports & Analytics
//             </h1>
//             <p className="mt-1 text-sm text-gray-500">
//               Project, financial and operational insights from Firebase.
//               {loading && (
//                 <span className="ml-2 text-[#176b5b]">Loading…</span>
//               )}
//             </p>
//           </div>

//           <div className="flex flex-wrap items-center gap-2">
//             <select
//               value={period}
//               onChange={(e) => setPeriod(e.target.value)}
//               className="h-10 rounded-lg border border-gray-200 bg-white px-3 text-sm outline-none focus:border-[#176b5b]"
//             >
//               <option>All Time</option>
//               <option>Last 30 Days</option>
//               <option>Last 90 Days</option>
//               <option>This Year</option>
//             </select>

//             <select
//               value={projectFilter}
//               onChange={(e) => setProjectFilter(e.target.value)}
//               className="h-10 rounded-lg border border-gray-200 bg-white px-3 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {projectTypes.map((t) => (
//                 <option key={t}>{t}</option>
//               ))}
//             </select>

//             <button
//               onClick={() => window.print()}
//               className="h-10 rounded-lg border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-700 hover:bg-gray-50"
//             >
//               Print
//             </button>
//           </div>
//         </div>

//         {/* KPI cards */}
//         <section className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <Card
//             title="Project Value"
//             value={loading ? "…" : formatCurrency(totalProjectValue)}
//             helper={`${filteredProjects.length} projects`}
//           />
//           <Card
//             title="Collected"
//             value={loading ? "…" : formatCurrency(totalReceived)}
//             helper={`${
//               totalProjectValue
//                 ? Math.round((totalReceived / totalProjectValue) * 100)
//                 : 0
//             }% of value`}
//           />
//           <Card
//             title="Pending"
//             value={loading ? "…" : formatCurrency(totalPending)}
//             helper={`${activeProjects} active projects`}
//           />
//           <Card
//             title="Avg Progress"
//             value={loading ? "…" : `${averageProgress}%`}
//             helper="Across filtered projects"
//           />
//         </section>

//         <div className="mb-6 grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
//           {/* Monthly revenue bars */}
//           <section className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <SectionTitle
//               title="Revenue vs Expenses"
//               subtitle="Derived from interior payments (expenses estimated at 55%)"
//             />
//             <div className="mt-6 flex h-56 items-end gap-3">
//               {monthlyData.length === 0 && !loading && (
//                 <p className="text-sm text-gray-500">No payment data yet.</p>
//               )}
//               {monthlyData.map((item) => {
//                 const revenueHeight = Math.max(
//                   4,
//                   Math.round((item.revenue / maxMonthlyValue) * 100)
//                 );
//                 const expenseHeight = Math.max(
//                   4,
//                   Math.round((item.expenses / maxMonthlyValue) * 100)
//                 );
//                 return (
//                   <div
//                     key={item.month}
//                     className="flex flex-1 flex-col items-center gap-2"
//                   >
//                     <div className="flex h-44 w-full items-end justify-center gap-1">
//                       <div
//                         className="w-3 rounded-t bg-[#176b5b]"
//                         style={{ height: `${revenueHeight}%` }}
//                         title={`Revenue ${formatFullCurrency(item.revenue)}`}
//                       />
//                       <div
//                         className="w-3 rounded-t bg-amber-400"
//                         style={{ height: `${expenseHeight}%` }}
//                         title={`Expenses ${formatFullCurrency(item.expenses)}`}
//                       />
//                     </div>
//                     <span className="text-xs font-medium text-gray-500">
//                       {item.month}
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>
//             <div className="mt-4 flex gap-4 text-xs text-gray-500">
//               <span className="flex items-center gap-1.5">
//                 <span className="h-2.5 w-2.5 rounded-sm bg-[#176b5b]" /> Revenue
//               </span>
//               <span className="flex items-center gap-1.5">
//                 <span className="h-2.5 w-2.5 rounded-sm bg-amber-400" /> Expenses
//               </span>
//             </div>
//             <div className="mt-5 grid grid-cols-3 gap-3">
//               <MiniStat
//                 label="Revenue"
//                 value={formatCurrency(totalRevenue)}
//               />
//               <MiniStat
//                 label="Expenses"
//                 value={formatCurrency(totalExpenses)}
//               />
//               <MiniStat
//                 label="Profit"
//                 value={`${formatCurrency(totalProfit)} (${profitMargin}%)`}
//               />
//             </div>
//           </section>

//           {/* Status + type breakdown */}
//           <div className="space-y-6">
//             <section className="rounded-xl border border-[#e4e2da] bg-white p-5">
//               <SectionTitle title="Project Status" subtitle="Current pipeline" />
//               <div className="mt-5 space-y-3">
//                 {progressSummary.map((item) => {
//                   const pct =
//                     filteredProjects.length === 0
//                       ? 0
//                       : Math.round(
//                           (item.count / filteredProjects.length) * 100
//                         );
//                   return (
//                     <div key={item.label}>
//                       <div className="mb-1 flex justify-between text-xs">
//                         <span>{item.label}</span>
//                         <span className="font-semibold">
//                           {item.count} ({pct}%)
//                         </span>
//                       </div>
//                       <div className="h-2 overflow-hidden rounded-full bg-gray-100">
//                         <div
//                           className={`h-full rounded-full ${item.className}`}
//                           style={{ width: `${pct}%` }}
//                         />
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </section>

//             <section className="rounded-xl border border-[#e4e2da] bg-white p-5">
//               <SectionTitle
//                 title="By Project Type"
//                 subtitle="Count of projects"
//               />
//               <div className="mt-5 space-y-3">
//                 {projectTypeData.length === 0 && (
//                   <p className="text-sm text-gray-500">No projects yet.</p>
//                 )}
//                 {projectTypeData.map((item) => (
//                   <div key={item.label}>
//                     <div className="mb-1 flex justify-between text-xs">
//                       <span>{item.label}</span>
//                       <span className="font-semibold">
//                         {item.count} ({item.pct}%)
//                       </span>
//                     </div>
//                     <div className="h-2 overflow-hidden rounded-full bg-gray-100">
//                       <div
//                         className="h-full rounded-full bg-[#9a5b18]"
//                         style={{ width: `${item.pct}%` }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           </div>
//         </div>

//         {/* Client performance */}
//         <section className="mb-6 rounded-xl border border-[#e4e2da] bg-white">
//           <div className="border-b border-[#e4e2da] px-5 py-4">
//             <SectionTitle
//               title="Top Clients"
//               subtitle="By project value"
//             />
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[700px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Client</th>
//                   <th className="px-4 py-3 font-semibold">Projects</th>
//                   <th className="px-4 py-3 font-semibold">Value</th>
//                   <th className="px-4 py-3 font-semibold">Received</th>
//                   <th className="px-4 py-3 font-semibold">Pending</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece6]">
//                 {clientData.map((c) => (
//                   <tr key={c.client} className="hover:bg-[#fafaf8]">
//                     <td className="px-5 py-3 font-medium text-gray-900">
//                       {c.client}
//                     </td>
//                     <td className="px-4 py-3 text-sm text-gray-600">
//                       {c.count}
//                     </td>
//                     <td className="px-4 py-3 text-sm font-semibold">
//                       {formatFullCurrency(c.value)}
//                     </td>
//                     <td className="px-4 py-3 text-sm text-green-700">
//                       {formatFullCurrency(c.received)}
//                     </td>
//                     <td className="px-4 py-3 text-sm text-orange-700">
//                       {formatFullCurrency(Math.max(c.value - c.received, 0))}
//                     </td>
//                   </tr>
//                 ))}
//                 {clientData.length === 0 && !loading && (
//                   <tr>
//                     <td
//                       colSpan={5}
//                       className="px-5 py-10 text-center text-sm text-gray-500"
//                     >
//                       No client data yet.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </section>

//         {/* Project table */}
//         <section className="rounded-xl border border-[#e4e2da] bg-white">
//           <div className="border-b border-[#e4e2da] px-5 py-4">
//             <SectionTitle
//               title="Project Performance"
//               subtitle={`${filteredProjects.length} projects · period: ${period}`}
//             />
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1000px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Project</th>
//                   <th className="px-4 py-3 font-semibold">Client</th>
//                   <th className="px-4 py-3 font-semibold">Type</th>
//                   <th className="px-4 py-3 font-semibold">Value</th>
//                   <th className="px-4 py-3 font-semibold">Received</th>
//                   <th className="px-4 py-3 font-semibold">Progress</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece6]">
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={7}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       Loading report data…
//                     </td>
//                   </tr>
//                 ) : (
//                   <>
//                     {filteredProjects.map((project) => {
//                       const pending = project.value - project.received;
//                       return (
//                         <tr key={project.id} className="hover:bg-[#fafaf8]">
//                           <td className="px-5 py-4">
//                             <p className="text-xs font-semibold text-[#176b5b]">
//                               {project.id}
//                             </p>
//                             <p className="mt-1 font-medium text-gray-900">
//                               {project.name}
//                             </p>
//                             <p className="text-xs text-gray-400">
//                               Started {project.startDate}
//                             </p>
//                           </td>
//                           <td className="px-4 py-4 text-sm text-gray-700">
//                             {project.client}
//                           </td>
//                           <td className="px-4 py-4 text-sm text-gray-700">
//                             {project.type}
//                           </td>
//                           <td className="px-4 py-4 text-sm font-semibold">
//                             {formatFullCurrency(project.value)}
//                           </td>
//                           <td className="px-4 py-4">
//                             <p className="text-sm font-medium text-green-700">
//                               {formatFullCurrency(project.received)}
//                             </p>
//                             <p className="text-xs text-gray-400">
//                               Pending {formatFullCurrency(Math.max(pending, 0))}
//                             </p>
//                           </td>
//                           <td className="px-4 py-4">
//                             <div className="flex items-center gap-2">
//                               <div className="h-2 w-20 overflow-hidden rounded-full bg-gray-100">
//                                 <div
//                                   className="h-full rounded-full bg-[#176b5b]"
//                                   style={{ width: `${project.progress}%` }}
//                                 />
//                               </div>
//                               <span className="text-xs text-gray-500">
//                                 {project.progress}%
//                               </span>
//                             </div>
//                           </td>
//                           <td className="px-4 py-4">
//                             <span
//                               className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                                 project.status
//                               )}`}
//                             >
//                               {project.status}
//                             </span>
//                           </td>
//                         </tr>
//                       );
//                     })}
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
//       </div>

//       <style jsx global>{`
//         @media print {
//           body {
//             background: white !important;
//           }
//           a {
//             display: none !important;
//           }
//         }
//       `}</style>
//     </main>
//   );
// }

// function Card({
//   title,
//   value,
//   helper,
// }: {
//   title: string;
//   value: string;
//   helper: string;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//       <p className="text-sm text-gray-500">{title}</p>
//       <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
//       <p className="mt-1 text-xs text-gray-400">{helper}</p>
//     </div>
//   );
// }

// function MiniStat({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-lg bg-[#fafaf8] p-3">
//       <p className="text-xs text-gray-400">{label}</p>
//       <p className="mt-1 text-sm font-semibold text-gray-800">{value}</p>
//     </div>
//   );
// }

// function SectionTitle({
//   title,
//   subtitle,
// }: {
//   title: string;
//   subtitle?: string;
// }) {
//   return (
//     <div>
//       <h2 className="font-semibold text-gray-900">{title}</h2>
//       {subtitle && (
//         <p className="mt-1 text-xs text-gray-500">{subtitle}</p>
//       )}
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAllInteriorProjects,
//   type InteriorProject,
// } from "@/modules/interior/services/projectService";
// import {
//   getAllPayments,
//   type InteriorPayment,
// } from "@/modules/interior/services/paymentService";
// import { Timestamp } from "firebase/firestore";

// type ProjectStatus = "On Track" | "In Progress" | "Completed" | "Delayed";

// type Project = {
//   id: string;
//   name: string;
//   client: string;
//   type: string;
//   value: number;
//   received: number;
//   progress: number;
//   status: ProjectStatus;
//   startDate: string;
// };

// type Slice = {
//   label: string;
//   value: number;
//   color: string;
// };

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

// const PIE_COLORS = [
//   "#176b5b",
//   "#9a5b18",
//   "#3b82f6",
//   "#8b5cf6",
//   "#ec4899",
//   "#14b8a6",
//   "#f59e0b",
//   "#ef4444",
// ];

// function formatCurrency(value: number) {
//   if (value >= 10000000) return `₹${(value / 10000000).toFixed(2)} Cr`;
//   if (value >= 100000) return `₹${(value / 100000).toFixed(2)} L`;
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function formatFullCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function statusClass(status: ProjectStatus) {
//   switch (status) {
//     case "On Track":
//       return "bg-emerald-50 text-emerald-700 border-emerald-200";
//     case "In Progress":
//       return "bg-blue-50 text-blue-700 border-blue-200";
//     case "Completed":
//       return "bg-green-50 text-green-700 border-green-200";
//     case "Delayed":
//       return "bg-red-50 text-red-700 border-red-200";
//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function toDate(value: unknown): Date | null {
//   if (!value) return null;
//   if (typeof value === "string") {
//     const d = new Date(value);
//     return Number.isNaN(d.getTime()) ? null : d;
//   }
//   try {
//     if (typeof (value as Timestamp).toDate === "function") {
//       return (value as Timestamp).toDate();
//     }
//   } catch {
//     /* ignore */
//   }
//   return null;
// }

// function toDateString(value: unknown): string {
//   const d = toDate(value);
//   return d ? d.toISOString().slice(0, 10) : "—";
// }

// function mapProjectStatus(raw?: string, progress = 0): ProjectStatus {
//   const s = (raw || "").toLowerCase();
//   if (s.includes("complete") || s === "done" || progress >= 100)
//     return "Completed";
//   if (s.includes("delay") || s.includes("hold") || s.includes("overdue"))
//     return "Delayed";
//   if (s.includes("progress") || s.includes("design") || s === "active")
//     return "In Progress";
//   if (s.includes("track") || s === "new") return "On Track";
//   if (progress >= 70) return "On Track";
//   if (progress > 0) return "In Progress";
//   return "On Track";
// }

// function mapProject(p: InteriorProject): Project {
//   const value = Number(p.value ?? p.projectValue ?? p.totalValue ?? 0) || 0;
//   const received = Number(p.paid ?? p.amountPaid ?? 0) || 0;
//   const progress =
//     typeof p.progress === "number"
//       ? Math.min(100, Math.round(p.progress))
//       : received > 0 && value > 0
//       ? Math.min(100, Math.round((received / value) * 100))
//       : 0;

//   return {
//     id: p.projectNo || p.projectId || p.id,
//     name: p.projectName || p.name || "Untitled Project",
//     client: p.clientName || p.client || p.customerName || "Unknown",
//     type: p.projectType || p.type || "Residential",
//     value,
//     received,
//     progress,
//     status: mapProjectStatus(p.status, progress),
//     startDate: p.startDate || toDateString(p.createdAt),
//   };
// }

// function buildRevenueFromPayments(payments: InteriorPayment[]): number {
//   const map = new Map<string, number>();
//   for (const p of payments) {
//     const d = toDate(p.paymentDate) || toDate(p.createdAt);
//     if (!d) continue;
//     const key = MONTHS[d.getMonth()];
//     map.set(key, (map.get(key) || 0) + (Number(p.amountReceived ?? 0) || 0));
//   }
//   const now = new Date();
//   let total = 0;
//   for (let i = 5; i >= 0; i--) {
//     const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
//     total += map.get(MONTHS[d.getMonth()]) || 0;
//   }
//   return total;
// }

// /** Hollow / donut pie chart */
// function DonutChart({
//   slices,
//   size = 180,
//   thickness = 28,
//   centerLabel,
//   centerSub,
// }: {
//   slices: Slice[];
//   size?: number;
//   thickness?: number;
//   centerLabel?: string;
//   centerSub?: string;
// }) {
//   const total = slices.reduce((s, x) => s + x.value, 0) || 1;
//   const radius = (size - thickness) / 2;
//   const circumference = 2 * Math.PI * radius;
//   let offset = 0;

//   return (
//     <div className="relative mx-auto" style={{ width: size, height: size }}>
//       <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
//         <circle
//           cx={size / 2}
//           cy={size / 2}
//           r={radius}
//           fill="none"
//           stroke="#eee"
//           strokeWidth={thickness}
//         />
//         {slices.map((slice) => {
//           const portion = slice.value / total;
//           const dash = portion * circumference;
//           const gap = circumference - dash;
//           const el = (
//             <circle
//               key={slice.label + slice.color}
//               cx={size / 2}
//               cy={size / 2}
//               r={radius}
//               fill="none"
//               stroke={slice.color}
//               strokeWidth={thickness}
//               strokeDasharray={`${dash} ${gap}`}
//               strokeDashoffset={-offset}
//               strokeLinecap="butt"
//               transform={`rotate(-90 ${size / 2} ${size / 2})`}
//             />
//           );
//           offset += dash;
//           return el;
//         })}
//       </svg>
//       <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-2 text-center">
//         {centerLabel && (
//           <p className="text-base font-bold leading-tight text-gray-900 sm:text-lg">
//             {centerLabel}
//           </p>
//         )}
//         {centerSub && (
//           <p className="mt-0.5 text-[11px] text-gray-500">{centerSub}</p>
//         )}
//       </div>
//     </div>
//   );
// }

// function Legend({
//   slices,
//   total,
//   formatValue,
// }: {
//   slices: Slice[];
//   total: number;
//   formatValue?: (n: number) => string;
// }) {
//   const t = total || 1;
//   const fmt = formatValue || ((n: number) => n.toLocaleString("en-IN"));
//   return (
//     <div className="mt-4 max-h-40 space-y-2 overflow-y-auto">
//       {slices.map((s) => {
//         const pct = Math.round((s.value / t) * 100);
//         return (
//           <div
//             key={s.label + s.color}
//             className="flex items-center justify-between gap-3 text-sm"
//           >
//             <div className="flex min-w-0 items-center gap-2">
//               <span
//                 className="h-2.5 w-2.5 shrink-0 rounded-full"
//                 style={{ background: s.color }}
//               />
//               <span className="truncate text-gray-700">{s.label}</span>
//             </div>
//             <span className="shrink-0 font-semibold text-gray-900">
//               {pct}% · {fmt(s.value)}
//             </span>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// function EmptyChart() {
//   return (
//     <div className="flex h-[180px] items-center justify-center text-sm text-gray-400">
//       No data
//     </div>
//   );
// }

// export default function InteriorReportsPage() {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [paymentRevenue, setPaymentRevenue] = useState(0);
//   const [loading, setLoading] = useState(true);

//   const [period, setPeriod] = useState("All Time");
//   const [projectFilter, setProjectFilter] = useState("All Projects");

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const [projectDocs, paymentDocs] = await Promise.all([
//           getAllInteriorProjects(),
//           getAllPayments(),
//         ]);
//         if (cancelled) return;
//         setProjects(projectDocs.map(mapProject));
//         setPaymentRevenue(buildRevenueFromPayments(paymentDocs));
//       } catch (err) {
//         console.error("Failed to load reports:", err);
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
//     if (projectFilter === "All Projects") return projects;
//     return projects.filter((p) => p.type === projectFilter);
//   }, [projects, projectFilter]);

//   const projectTypes = useMemo(() => {
//     const set = new Set(projects.map((p) => p.type));
//     return ["All Projects", ...Array.from(set)];
//   }, [projects]);

//   const totalProjectValue = filteredProjects.reduce(
//     (sum, p) => sum + p.value,
//     0
//   );
//   const totalReceived = filteredProjects.reduce(
//     (sum, p) => sum + p.received,
//     0
//   );
//   const totalPending = Math.max(totalProjectValue - totalReceived, 0);

//   const activeProjects = filteredProjects.filter(
//     (p) => p.status !== "Completed"
//   ).length;

//   const averageProgress =
//     filteredProjects.length === 0
//       ? 0
//       : Math.round(
//           filteredProjects.reduce((sum, p) => sum + p.progress, 0) /
//             filteredProjects.length
//         );

//   const collectionPct =
//     totalProjectValue > 0
//       ? Math.round((totalReceived / totalProjectValue) * 100)
//       : 0;

//   // Collection donut
//   const collectionSlices: Slice[] = [
//     { label: "Received", value: totalReceived, color: "#176b5b" },
//     { label: "Pending", value: totalPending, color: "#f59e0b" },
//   ].filter((s) => s.value > 0);

//   // Status donut
//   const statusSlices: Slice[] = [
//     {
//       label: "On Track",
//       value: filteredProjects.filter((p) => p.status === "On Track").length,
//       color: "#10b981",
//     },
//     {
//       label: "In Progress",
//       value: filteredProjects.filter((p) => p.status === "In Progress").length,
//       color: "#3b82f6",
//     },
//     {
//       label: "Completed",
//       value: filteredProjects.filter((p) => p.status === "Completed").length,
//       color: "#16a34a",
//     },
//     {
//       label: "Delayed",
//       value: filteredProjects.filter((p) => p.status === "Delayed").length,
//       color: "#ef4444",
//     },
//   ].filter((s) => s.value > 0);

//   // Type donut
//   const typeSlices: Slice[] = useMemo(() => {
//     const grouped: Record<string, number> = {};
//     for (const p of filteredProjects) {
//       grouped[p.type] = (grouped[p.type] || 0) + 1;
//     }
//     return Object.entries(grouped).map(([label, value], i) => ({
//       label,
//       value,
//       color: PIE_COLORS[i % PIE_COLORS.length],
//     }));
//   }, [filteredProjects]);

//   // ★ Projects by Value donut (top projects + Others)
//   const valueSlices: Slice[] = useMemo(() => {
//     const sorted = [...filteredProjects]
//       .filter((p) => p.value > 0)
//       .sort((a, b) => b.value - a.value);

//     const top = sorted.slice(0, 5);
//     const rest = sorted.slice(5);
//     const restTotal = rest.reduce((s, p) => s + p.value, 0);

//     const slices: Slice[] = top.map((p, i) => ({
//       label: p.name.length > 22 ? `${p.name.slice(0, 20)}…` : p.name,
//       value: p.value,
//       color: PIE_COLORS[i % PIE_COLORS.length],
//     }));

//     if (restTotal > 0) {
//       slices.push({
//         label: `Others (${rest.length})`,
//         value: restTotal,
//         color: "#94a3b8",
//       });
//     }

//     return slices;
//   }, [filteredProjects]);

//   // Finance donut
//   const revenue = paymentRevenue || totalReceived;
//   const expenses = Math.round(revenue * 0.55);
//   const profit = Math.max(revenue - expenses, 0);
//   const financeSlices: Slice[] = [
//     { label: "Revenue", value: revenue, color: "#176b5b" },
//     { label: "Expenses (est.)", value: expenses, color: "#f59e0b" },
//     { label: "Profit", value: profit, color: "#10b981" },
//   ].filter((s) => s.value > 0);

//   const clientData = useMemo(() => {
//     const grouped: Record<
//       string,
//       { client: string; value: number; received: number; count: number }
//     > = {};
//     for (const p of filteredProjects) {
//       if (!grouped[p.client]) {
//         grouped[p.client] = {
//           client: p.client,
//           value: 0,
//           received: 0,
//           count: 0,
//         };
//       }
//       grouped[p.client].value += p.value;
//       grouped[p.client].received += p.received;
//       grouped[p.client].count += 1;
//     }
//     return Object.values(grouped)
//       .sort((a, b) => b.value - a.value)
//       .slice(0, 6);
//   }, [filteredProjects]);

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
//               Reports & Analytics
//             </h1>
//             <p className="mt-1 text-sm text-gray-500">
//               Hollow pie analysis from Firebase projects & payments.
//               {loading && (
//                 <span className="ml-2 text-[#176b5b]">Loading…</span>
//               )}
//             </p>
//           </div>

//           <div className="flex flex-wrap items-center gap-2">
//             <select
//               value={period}
//               onChange={(e) => setPeriod(e.target.value)}
//               className="h-10 rounded-lg border border-gray-200 bg-white px-3 text-sm outline-none focus:border-[#176b5b]"
//             >
//               <option>All Time</option>
//               <option>Last 30 Days</option>
//               <option>Last 90 Days</option>
//               <option>This Year</option>
//             </select>
//             <select
//               value={projectFilter}
//               onChange={(e) => setProjectFilter(e.target.value)}
//               className="h-10 rounded-lg border border-gray-200 bg-white px-3 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {projectTypes.map((t) => (
//                 <option key={t}>{t}</option>
//               ))}
//             </select>
//             <button
//               onClick={() => window.print()}
//               className="h-10 rounded-lg border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-700 hover:bg-gray-50"
//             >
//               Print
//             </button>
//           </div>
//         </div>

//         {/* KPIs */}
//         <section className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <Card
//             title="Project Value"
//             value={loading ? "…" : formatCurrency(totalProjectValue)}
//             helper={`${filteredProjects.length} projects`}
//           />
//           <Card
//             title="Collected"
//             value={loading ? "…" : formatCurrency(totalReceived)}
//             helper={`${collectionPct}% of value`}
//           />
//           <Card
//             title="Pending"
//             value={loading ? "…" : formatCurrency(totalPending)}
//             helper={`${activeProjects} active projects`}
//           />
//           <Card
//             title="Avg Progress"
//             value={loading ? "…" : `${averageProgress}%`}
//             helper="Across filtered projects"
//           />
//         </section>

//         {/* Donut charts row */}
//         <section className="mb-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//           {/* Projects by Value — requested */}
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <h2 className="font-semibold text-gray-900">Projects by Value</h2>
//             <p className="mt-1 text-xs text-gray-500">
//               Top 5 projects by contract value
//             </p>
//             <div className="mt-4">
//               {valueSlices.length === 0 ? (
//                 <EmptyChart />
//               ) : (
//                 <>
//                   <DonutChart
//                     slices={valueSlices}
//                     centerLabel={formatCurrency(totalProjectValue)}
//                     centerSub="total value"
//                   />
//                   <Legend
//                     slices={valueSlices}
//                     total={totalProjectValue}
//                     formatValue={formatCurrency}
//                   />
//                 </>
//               )}
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <h2 className="font-semibold text-gray-900">Collection Split</h2>
//             <p className="mt-1 text-xs text-gray-500">Received vs pending</p>
//             <div className="mt-4">
//               {collectionSlices.length === 0 ? (
//                 <EmptyChart />
//               ) : (
//                 <>
//                   <DonutChart
//                     slices={collectionSlices}
//                     centerLabel={`${collectionPct}%`}
//                     centerSub="collected"
//                   />
//                   <Legend
//                     slices={collectionSlices}
//                     total={totalReceived + totalPending}
//                     formatValue={formatCurrency}
//                   />
//                 </>
//               )}
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <h2 className="font-semibold text-gray-900">Project Status</h2>
//             <p className="mt-1 text-xs text-gray-500">Pipeline breakdown</p>
//             <div className="mt-4">
//               {statusSlices.length === 0 ? (
//                 <EmptyChart />
//               ) : (
//                 <>
//                   <DonutChart
//                     slices={statusSlices}
//                     centerLabel={String(filteredProjects.length)}
//                     centerSub="projects"
//                   />
//                   <Legend
//                     slices={statusSlices}
//                     total={filteredProjects.length}
//                   />
//                 </>
//               )}
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <h2 className="font-semibold text-gray-900">By Project Type</h2>
//             <p className="mt-1 text-xs text-gray-500">Count by type</p>
//             <div className="mt-4">
//               {typeSlices.length === 0 ? (
//                 <EmptyChart />
//               ) : (
//                 <>
//                   <DonutChart
//                     slices={typeSlices}
//                     centerLabel={String(typeSlices.length)}
//                     centerSub="types"
//                   />
//                   <Legend slices={typeSlices} total={filteredProjects.length} />
//                 </>
//               )}
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <h2 className="font-semibold text-gray-900">Finance Snapshot</h2>
//             <p className="mt-1 text-xs text-gray-500">
//               Revenue · est. expenses · profit
//             </p>
//             <div className="mt-4">
//               {financeSlices.length === 0 ? (
//                 <EmptyChart />
//               ) : (
//                 <>
//                   <DonutChart
//                     slices={financeSlices}
//                     centerLabel={formatCurrency(profit)}
//                     centerSub="profit"
//                   />
//                   <Legend
//                     slices={financeSlices}
//                     total={revenue + expenses + profit}
//                     formatValue={formatCurrency}
//                   />
//                 </>
//               )}
//             </div>
//           </div>
//         </section>

//         {/* Top clients */}
//         <section className="mb-6 rounded-xl border border-[#e4e2da] bg-white">
//           <div className="border-b border-[#e4e2da] px-5 py-4">
//             <h2 className="font-semibold text-gray-900">Top Clients</h2>
//             <p className="mt-1 text-xs text-gray-500">By project value</p>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[700px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Client</th>
//                   <th className="px-4 py-3 font-semibold">Projects</th>
//                   <th className="px-4 py-3 font-semibold">Value</th>
//                   <th className="px-4 py-3 font-semibold">Received</th>
//                   <th className="px-4 py-3 font-semibold">Pending</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece6]">
//                 {clientData.map((c) => (
//                   <tr key={c.client} className="hover:bg-[#fafaf8]">
//                     <td className="px-5 py-3 font-medium text-gray-900">
//                       {c.client}
//                     </td>
//                     <td className="px-4 py-3 text-sm text-gray-600">
//                       {c.count}
//                     </td>
//                     <td className="px-4 py-3 text-sm font-semibold">
//                       {formatFullCurrency(c.value)}
//                     </td>
//                     <td className="px-4 py-3 text-sm text-green-700">
//                       {formatFullCurrency(c.received)}
//                     </td>
//                     <td className="px-4 py-3 text-sm text-orange-700">
//                       {formatFullCurrency(Math.max(c.value - c.received, 0))}
//                     </td>
//                   </tr>
//                 ))}
//                 {clientData.length === 0 && !loading && (
//                   <tr>
//                     <td
//                       colSpan={5}
//                       className="px-5 py-10 text-center text-sm text-gray-500"
//                     >
//                       No client data yet.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </section>

//         {/* Project table */}
//         <section className="rounded-xl border border-[#e4e2da] bg-white">
//           <div className="border-b border-[#e4e2da] px-5 py-4">
//             <h2 className="font-semibold text-gray-900">Project Performance</h2>
//             <p className="mt-1 text-xs text-gray-500">
//               {filteredProjects.length} projects · {period}
//             </p>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1000px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Project</th>
//                   <th className="px-4 py-3 font-semibold">Client</th>
//                   <th className="px-4 py-3 font-semibold">Type</th>
//                   <th className="px-4 py-3 font-semibold">Value</th>
//                   <th className="px-4 py-3 font-semibold">Received</th>
//                   <th className="px-4 py-3 font-semibold">Progress</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece6]">
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={7}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       Loading report data…
//                     </td>
//                   </tr>
//                 ) : (
//                   <>
//                     {filteredProjects.map((project) => (
//                       <tr key={project.id} className="hover:bg-[#fafaf8]">
//                         <td className="px-5 py-4">
//                           <p className="text-xs font-semibold text-[#176b5b]">
//                             {project.id}
//                           </p>
//                           <p className="mt-1 font-medium text-gray-900">
//                             {project.name}
//                           </p>
//                           <p className="text-xs text-gray-400">
//                             Started {project.startDate}
//                           </p>
//                         </td>
//                         <td className="px-4 py-4 text-sm text-gray-700">
//                           {project.client}
//                         </td>
//                         <td className="px-4 py-4 text-sm text-gray-700">
//                           {project.type}
//                         </td>
//                         <td className="px-4 py-4 text-sm font-semibold">
//                           {formatFullCurrency(project.value)}
//                         </td>
//                         <td className="px-4 py-4 text-sm text-green-700">
//                           {formatFullCurrency(project.received)}
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
//                             className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                               project.status
//                             )}`}
//                           >
//                             {project.status}
//                           </span>
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
//       </div>
//     </main>
//   );
// }

// function Card({
//   title,
//   value,
//   helper,
// }: {
//   title: string;
//   value: string;
//   helper: string;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//       <p className="text-sm text-gray-500">{title}</p>
//       <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
//       <p className="mt-1 text-xs text-gray-400">{helper}</p>
//     </div>
//   );
// }

"use client";

import { useEffect, useMemo, useState } from "react";
import {
  getAllInteriorProjects,
  type InteriorProject,
} from "@/modules/interior/services/projectService";
import {
  getAllPayments,
  type InteriorPayment,
} from "@/modules/interior/services/paymentService";
import { Timestamp } from "firebase/firestore";
import { Printer } from "lucide-react";

type ProjectStatus = "On Track" | "In Progress" | "Completed" | "Delayed";

type Project = {
  id: string;
  name: string;
  client: string;
  type: string;
  value: number;
  received: number;
  progress: number;
  status: ProjectStatus;
  startDate: string;
};

type Slice = {
  label: string;
  value: number;
  color: string;
};

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

const PIE_COLORS = [
  "#176b5b",
  "#9a5b18",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#14b8a6",
  "#f59e0b",
  "#ef4444",
];

function formatCurrency(value: number) {
  if (value >= 10000000) return `₹${(value / 10000000).toFixed(2)} Cr`;
  if (value >= 100000) return `₹${(value / 100000).toFixed(2)} L`;
  return `₹${value.toLocaleString("en-IN")}`;
}

function formatFullCurrency(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function statusClass(status: ProjectStatus) {
  switch (status) {
    case "On Track":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    case "In Progress":
      return "bg-blue-50 text-blue-700 border-blue-200";
    case "Completed":
      return "bg-green-50 text-green-700 border-green-200";
    case "Delayed":
      return "bg-red-50 text-red-700 border-red-200";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
}

function toDate(value: unknown): Date | null {
  if (!value) return null;
  if (typeof value === "string") {
    const d = new Date(value);
    return Number.isNaN(d.getTime()) ? null : d;
  }
  try {
    if (typeof (value as Timestamp).toDate === "function") {
      return (value as Timestamp).toDate();
    }
  } catch {
    /* ignore */
  }
  return null;
}

function toDateString(value: unknown): string {
  const d = toDate(value);
  return d ? d.toISOString().slice(0, 10) : "—";
}

function mapProjectStatus(raw?: string, progress = 0): ProjectStatus {
  const s = (raw || "").toLowerCase();
  if (s.includes("complete") || s === "done" || progress >= 100)
    return "Completed";
  if (s.includes("delay") || s.includes("hold") || s.includes("overdue"))
    return "Delayed";
  if (s.includes("progress") || s.includes("design") || s === "active")
    return "In Progress";
  if (s.includes("track") || s === "new") return "On Track";
  if (progress >= 70) return "On Track";
  if (progress > 0) return "In Progress";
  return "On Track";
}

function mapProject(p: InteriorProject): Project {
  const value = Number(p.value ?? p.projectValue ?? p.totalValue ?? 0) || 0;
  const received = Number(p.paid ?? p.amountPaid ?? 0) || 0;
  const progress =
    typeof p.progress === "number"
      ? Math.min(100, Math.round(p.progress))
      : received > 0 && value > 0
        ? Math.min(100, Math.round((received / value) * 100))
        : 0;

  return {
    id: p.projectNo || p.projectId || p.id,
    name: p.projectName || p.name || "Untitled Project",
    client: p.clientName || p.client || p.customerName || "Unknown",
    type: p.projectType || p.type || "Residential",
    value,
    received,
    progress,
    status: mapProjectStatus(p.status, progress),
    startDate: p.startDate || toDateString(p.createdAt),
  };
}

function buildRevenueFromPayments(payments: InteriorPayment[]): number {
  const map = new Map<string, number>();
  for (const p of payments) {
    const d = toDate(p.paymentDate) || toDate(p.createdAt);
    if (!d) continue;
    const key = MONTHS[d.getMonth()];
    map.set(key, (map.get(key) || 0) + (Number(p.amountReceived ?? 0) || 0));
  }
  const now = new Date();
  let total = 0;
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    total += map.get(MONTHS[d.getMonth()]) || 0;
  }
  return total;
}

function DonutChart({
  slices,
  size = 180,
  thickness = 28,
  centerLabel,
  centerSub,
}: {
  slices: Slice[];
  size?: number;
  thickness?: number;
  centerLabel?: string;
  centerSub?: string;
}) {
  const total = slices.reduce((s, x) => s + x.value, 0) || 1;
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#eee"
          strokeWidth={thickness}
        />
        {slices.map((slice) => {
          const portion = slice.value / total;
          const dash = portion * circumference;
          const gap = circumference - dash;
          const el = (
            <circle
              key={slice.label + slice.color}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={slice.color}
              strokeWidth={thickness}
              strokeDasharray={`${dash} ${gap}`}
              strokeDashoffset={-offset}
              strokeLinecap="butt"
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
          );
          offset += dash;
          return el;
        })}
      </svg>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-2 text-center">
        {centerLabel && (
          <p className="text-base font-bold leading-tight text-gray-900 sm:text-lg">
            {centerLabel}
          </p>
        )}
        {centerSub && (
          <p className="mt-0.5 text-[11px] text-gray-500">{centerSub}</p>
        )}
      </div>
    </div>
  );
}

function Legend({
  slices,
  total,
  formatValue,
}: {
  slices: Slice[];
  total: number;
  formatValue?: (n: number) => string;
}) {
  const t = total || 1;
  const fmt = formatValue || ((n: number) => n.toLocaleString("en-IN"));
  return (
    <div className="mt-4 max-h-40 space-y-2 overflow-y-auto">
      {slices.map((s) => {
        const pct = Math.round((s.value / t) * 100);
        return (
          <div
            key={s.label + s.color}
            className="flex items-center justify-between gap-3 text-sm"
          >
            <div className="flex min-w-0 items-center gap-2">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ background: s.color }}
              />
              <span className="truncate text-gray-700">{s.label}</span>
            </div>
            <span className="shrink-0 font-semibold text-gray-900">
              {pct}% · {fmt(s.value)}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function EmptyChart() {
  return (
    <div className="flex h-[180px] items-center justify-center text-sm text-gray-400">
      No data
    </div>
  );
}

export default function InteriorReportsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [paymentRevenue, setPaymentRevenue] = useState(0);
  const [loading, setLoading] = useState(true);

  const [period, setPeriod] = useState("All Time");
  const [projectFilter, setProjectFilter] = useState("All Projects");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const [projectDocs, paymentDocs] = await Promise.all([
          getAllInteriorProjects(),
          getAllPayments(),
        ]);
        if (cancelled) return;
        setProjects(projectDocs.map(mapProject));
        setPaymentRevenue(buildRevenueFromPayments(paymentDocs));
      } catch (err) {
        console.error("Failed to load reports:", err);
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
    if (projectFilter === "All Projects") return projects;
    return projects.filter((p) => p.type === projectFilter);
  }, [projects, projectFilter]);

  const projectTypes = useMemo(() => {
    const set = new Set(projects.map((p) => p.type));
    return ["All Projects", ...Array.from(set)];
  }, [projects]);

  const totalProjectValue = filteredProjects.reduce(
    (sum, p) => sum + p.value,
    0
  );
  const totalReceived = filteredProjects.reduce(
    (sum, p) => sum + p.received,
    0
  );
  const totalPending = Math.max(totalProjectValue - totalReceived, 0);

  const activeProjects = filteredProjects.filter(
    (p) => p.status !== "Completed"
  ).length;

  const averageProgress =
    filteredProjects.length === 0
      ? 0
      : Math.round(
          filteredProjects.reduce((sum, p) => sum + p.progress, 0) /
            filteredProjects.length
        );

  const collectionPct =
    totalProjectValue > 0
      ? Math.round((totalReceived / totalProjectValue) * 100)
      : 0;

  const collectionSlices: Slice[] = [
    { label: "Received", value: totalReceived, color: "#176b5b" },
    { label: "Pending", value: totalPending, color: "#f59e0b" },
  ].filter((s) => s.value > 0);

  const statusSlices: Slice[] = [
    {
      label: "On Track",
      value: filteredProjects.filter((p) => p.status === "On Track").length,
      color: "#10b981",
    },
    {
      label: "In Progress",
      value: filteredProjects.filter((p) => p.status === "In Progress").length,
      color: "#3b82f6",
    },
    {
      label: "Completed",
      value: filteredProjects.filter((p) => p.status === "Completed").length,
      color: "#16a34a",
    },
    {
      label: "Delayed",
      value: filteredProjects.filter((p) => p.status === "Delayed").length,
      color: "#ef4444",
    },
  ].filter((s) => s.value > 0);

  const typeSlices: Slice[] = useMemo(() => {
    const grouped: Record<string, number> = {};
    for (const p of filteredProjects) {
      grouped[p.type] = (grouped[p.type] || 0) + 1;
    }
    return Object.entries(grouped).map(([label, value], i) => ({
      label,
      value,
      color: PIE_COLORS[i % PIE_COLORS.length],
    }));
  }, [filteredProjects]);

  const valueSlices: Slice[] = useMemo(() => {
    const sorted = [...filteredProjects]
      .filter((p) => p.value > 0)
      .sort((a, b) => b.value - a.value);

    const top = sorted.slice(0, 5);
    const rest = sorted.slice(5);
    const restTotal = rest.reduce((s, p) => s + p.value, 0);

    const slices: Slice[] = top.map((p, i) => ({
      label: p.name.length > 22 ? `${p.name.slice(0, 20)}…` : p.name,
      value: p.value,
      color: PIE_COLORS[i % PIE_COLORS.length],
    }));

    if (restTotal > 0) {
      slices.push({
        label: `Others (${rest.length})`,
        value: restTotal,
        color: "#94a3b8",
      });
    }

    return slices;
  }, [filteredProjects]);

  const revenue = paymentRevenue || totalReceived;
  const expenses = Math.round(revenue * 0.55);
  const profit = Math.max(revenue - expenses, 0);
  const financeSlices: Slice[] = [
    { label: "Revenue", value: revenue, color: "#176b5b" },
    { label: "Expenses (est.)", value: expenses, color: "#f59e0b" },
    { label: "Profit", value: profit, color: "#10b981" },
  ].filter((s) => s.value > 0);

  const clientData = useMemo(() => {
    const grouped: Record<
      string,
      { client: string; value: number; received: number; count: number }
    > = {};
    for (const p of filteredProjects) {
      if (!grouped[p.client]) {
        grouped[p.client] = {
          client: p.client,
          value: 0,
          received: 0,
          count: 0,
        };
      }
      grouped[p.client].value += p.value;
      grouped[p.client].received += p.received;
      grouped[p.client].count += 1;
    }
    return Object.values(grouped)
      .sort((a, b) => b.value - a.value)
      .slice(0, 6);
  }, [filteredProjects]);

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
      {/* Header: title + Print beside */}
      <div className="border-b border-[#e4e2da] bg-white print:hidden">
        <div className="mx-auto max-w-[1600px] px-3 py-4 sm:px-5 sm:py-5 lg:px-8">
          <div className="flex items-start justify-between gap-3 sm:items-center">
            <div className="min-w-0 flex-1">
              <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
                Reports & Analytics
              </h1>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Hollow pie analysis from Firebase projects & payments.
                {loading && (
                  <span className="ml-2 text-[#176b5b]">Loading…</span>
                )}
              </p>
            </div>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125848] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
            >
              <Printer size={16} strokeWidth={2.5} />
              <span className="hidden sm:inline">Print</span>
            </button>
          </div>

          {/* Filters under header on mobile, inline-friendly */}
          <div className="mt-3 flex flex-wrap gap-2">
            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="h-10 min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-3 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:text-sm"
            >
              <option>All Time</option>
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>This Year</option>
            </select>
            <select
              value={projectFilter}
              onChange={(e) => setProjectFilter(e.target.value)}
              className="h-10 min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-3 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:text-sm"
            >
              {projectTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[1600px] space-y-4 px-3 py-4 sm:space-y-6 sm:px-5 sm:py-6 lg:px-8">
        {/* KPIs */}
        <section className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
          <Card
            title="Project Value"
            value={loading ? "…" : formatCurrency(totalProjectValue)}
            helper={`${filteredProjects.length} projects`}
          />
          <Card
            title="Collected"
            value={loading ? "…" : formatCurrency(totalReceived)}
            helper={`${collectionPct}% of value`}
          />
          <Card
            title="Pending"
            value={loading ? "…" : formatCurrency(totalPending)}
            helper={`${activeProjects} active projects`}
          />
          <Card
            title="Avg Progress"
            value={loading ? "…" : `${averageProgress}%`}
            helper="Across filtered projects"
          />
        </section>

        {/* Donut charts */}
        <section className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-xl border border-[#e4e2da] bg-white p-4 sm:p-5">
            <h2 className="font-semibold text-gray-900">Projects by Value</h2>
            <p className="mt-1 text-xs text-gray-500">
              Top 5 projects by contract value
            </p>
            <div className="mt-4">
              {valueSlices.length === 0 ? (
                <EmptyChart />
              ) : (
                <>
                  <DonutChart
                    slices={valueSlices}
                    centerLabel={formatCurrency(totalProjectValue)}
                    centerSub="total value"
                  />
                  <Legend
                    slices={valueSlices}
                    total={totalProjectValue}
                    formatValue={formatCurrency}
                  />
                </>
              )}
            </div>
          </div>

          <div className="rounded-xl border border-[#e4e2da] bg-white p-4 sm:p-5">
            <h2 className="font-semibold text-gray-900">Collection Split</h2>
            <p className="mt-1 text-xs text-gray-500">Received vs pending</p>
            <div className="mt-4">
              {collectionSlices.length === 0 ? (
                <EmptyChart />
              ) : (
                <>
                  <DonutChart
                    slices={collectionSlices}
                    centerLabel={`${collectionPct}%`}
                    centerSub="collected"
                  />
                  <Legend
                    slices={collectionSlices}
                    total={totalReceived + totalPending}
                    formatValue={formatCurrency}
                  />
                </>
              )}
            </div>
          </div>

          <div className="rounded-xl border border-[#e4e2da] bg-white p-4 sm:p-5">
            <h2 className="font-semibold text-gray-900">Project Status</h2>
            <p className="mt-1 text-xs text-gray-500">Pipeline breakdown</p>
            <div className="mt-4">
              {statusSlices.length === 0 ? (
                <EmptyChart />
              ) : (
                <>
                  <DonutChart
                    slices={statusSlices}
                    centerLabel={String(filteredProjects.length)}
                    centerSub="projects"
                  />
                  <Legend
                    slices={statusSlices}
                    total={filteredProjects.length}
                  />
                </>
              )}
            </div>
          </div>

          <div className="rounded-xl border border-[#e4e2da] bg-white p-4 sm:p-5">
            <h2 className="font-semibold text-gray-900">By Project Type</h2>
            <p className="mt-1 text-xs text-gray-500">Count by type</p>
            <div className="mt-4">
              {typeSlices.length === 0 ? (
                <EmptyChart />
              ) : (
                <>
                  <DonutChart
                    slices={typeSlices}
                    centerLabel={String(typeSlices.length)}
                    centerSub="types"
                  />
                  <Legend slices={typeSlices} total={filteredProjects.length} />
                </>
              )}
            </div>
          </div>

          <div className="rounded-xl border border-[#e4e2da] bg-white p-4 sm:p-5 md:col-span-2 xl:col-span-1">
            <h2 className="font-semibold text-gray-900">Finance Snapshot</h2>
            <p className="mt-1 text-xs text-gray-500">
              Revenue · est. expenses · profit
            </p>
            <div className="mt-4">
              {financeSlices.length === 0 ? (
                <EmptyChart />
              ) : (
                <>
                  <DonutChart
                    slices={financeSlices}
                    centerLabel={formatCurrency(profit)}
                    centerSub="profit"
                  />
                  <Legend
                    slices={financeSlices}
                    total={revenue + expenses + profit}
                    formatValue={formatCurrency}
                  />
                </>
              )}
            </div>
          </div>
        </section>

        {/* Top clients */}
        <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
          <div className="border-b border-[#e4e2da] px-4 py-3 sm:px-5 sm:py-4">
            <h2 className="font-semibold text-gray-900">Top Clients</h2>
            <p className="mt-1 text-xs text-gray-500">By project value</p>
          </div>

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[700px] text-left">
              <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
                <tr>
                  <th className="px-5 py-3 font-semibold">Client</th>
                  <th className="px-4 py-3 font-semibold">Projects</th>
                  <th className="px-4 py-3 font-semibold">Value</th>
                  <th className="px-4 py-3 font-semibold">Received</th>
                  <th className="px-4 py-3 font-semibold">Pending</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eeece6]">
                {clientData.map((c) => (
                  <tr key={c.client} className="hover:bg-[#fafaf8]">
                    <td className="px-5 py-3 font-medium text-gray-900">
                      {c.client}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {c.count}
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold">
                      {formatFullCurrency(c.value)}
                    </td>
                    <td className="px-4 py-3 text-sm text-green-700">
                      {formatFullCurrency(c.received)}
                    </td>
                    <td className="px-4 py-3 text-sm text-orange-700">
                      {formatFullCurrency(Math.max(c.value - c.received, 0))}
                    </td>
                  </tr>
                ))}
                {clientData.length === 0 && !loading && (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-5 py-10 text-center text-sm text-gray-500"
                    >
                      No client data yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="space-y-3 p-3 md:hidden">
            {clientData.length === 0 && !loading ? (
              <p className="py-8 text-center text-sm text-gray-500">
                No client data yet.
              </p>
            ) : (
              clientData.map((c) => (
                <article
                  key={c.client}
                  className="rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3.5"
                >
                  <p className="font-semibold text-gray-900">{c.client}</p>
                  <p className="mt-0.5 text-xs text-gray-500">
                    {c.count} project{c.count === 1 ? "" : "s"}
                  </p>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <p className="text-gray-400">Value</p>
                      <p className="font-semibold">
                        {formatFullCurrency(c.value)}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400">Received</p>
                      <p className="font-medium text-green-700">
                        {formatFullCurrency(c.received)}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-gray-400">Pending</p>
                      <p className="font-medium text-orange-700">
                        {formatFullCurrency(Math.max(c.value - c.received, 0))}
                      </p>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>
        </section>

        {/* Project performance */}
        <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
          <div className="border-b border-[#e4e2da] px-4 py-3 sm:px-5 sm:py-4">
            <h2 className="font-semibold text-gray-900">Project Performance</h2>
            <p className="mt-1 text-xs text-gray-500">
              {filteredProjects.length} projects · {period}
            </p>
          </div>

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[1000px] text-left">
              <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
                <tr>
                  <th className="px-5 py-3 font-semibold">Project</th>
                  <th className="px-4 py-3 font-semibold">Client</th>
                  <th className="px-4 py-3 font-semibold">Type</th>
                  <th className="px-4 py-3 font-semibold">Value</th>
                  <th className="px-4 py-3 font-semibold">Received</th>
                  <th className="px-4 py-3 font-semibold">Progress</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eeece6]">
                {loading ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-5 py-12 text-center text-sm text-gray-500"
                    >
                      Loading report data…
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
                          {project.id}
                        </p>
                        <p className="mt-1 font-medium text-gray-900">
                          {project.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          Started {project.startDate}
                        </p>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        {project.client}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        {project.type}
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold">
                        {formatFullCurrency(project.value)}
                      </td>
                      <td className="px-4 py-4 text-sm text-green-700">
                        {formatFullCurrency(project.received)}
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
                          className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
                            project.status
                          )}`}
                        >
                          {project.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="space-y-3 p-3 md:hidden">
            {loading ? (
              <p className="py-10 text-center text-sm text-gray-500">
                Loading report data…
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
                      <p className="text-xs font-semibold text-[#176b5b]">
                        {project.id}
                      </p>
                      <p className="mt-0.5 font-medium text-gray-900">
                        {project.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {project.client} · {project.type}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${statusClass(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="mt-2 flex justify-between text-xs">
                    <span className="font-semibold">
                      {formatFullCurrency(project.value)}
                    </span>
                    <span className="text-green-700">
                      {formatFullCurrency(project.received)}
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
                </article>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

function Card({
  title,
  value,
  helper,
}: {
  title: string;
  value: string;
  helper: string;
}) {
  return (
    <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5">
      <p className="text-xs text-gray-500 sm:text-sm">{title}</p>
      <p className="mt-1.5 truncate text-lg font-bold text-gray-900 sm:mt-2 sm:text-2xl">
        {value}
      </p>
      <p className="mt-1 text-[10px] text-gray-400 sm:text-xs">{helper}</p>
    </div>
  );
}
