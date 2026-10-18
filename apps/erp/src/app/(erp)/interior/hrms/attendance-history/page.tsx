// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAllAttendanceHistory,
//   type InteriorAttendance,
// } from "@/modules/interior/services/attendanceService";

// function statusClass(status?: string) {
//   const s = (status || "").toLowerCase();
//   if (s.includes("present"))
//     return "bg-green-50 text-green-700 border-green-200";
//   if (s.includes("late")) return "bg-amber-50 text-amber-700 border-amber-200";
//   if (s.includes("half")) return "bg-blue-50 text-blue-700 border-blue-200";
//   if (s.includes("leave"))
//     return "bg-purple-50 text-purple-700 border-purple-200";
//   return "bg-red-50 text-red-700 border-red-200";
// }

// export default function AttendanceHistoryPage() {
//   const [rows, setRows] = useState<InteriorAttendance[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [employeeFilter, setEmployeeFilter] = useState("all");
//   const [fromDate, setFromDate] = useState("");
//   const [toDate, setToDate] = useState("");

//   useEffect(() => {
//     let cancelled = false;
//     (async () => {
//       setLoading(true);
//       try {
//         const data = await getAllAttendanceHistory();
//         if (!cancelled) setRows(data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     })();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const employeeOptions = useMemo(() => {
//     const map = new Map<string, string>();
//     for (const r of rows) {
//       const id = r.employeeId || r.employeeDocId || "";
//       if (!id) continue;
//       map.set(id, r.name || id);
//     }
//     return Array.from(map.entries()).sort((a, b) =>
//       a[1].localeCompare(b[1])
//     );
//   }, [rows]);

//   const filtered = useMemo(() => {
//     const q = search.toLowerCase().trim();
//     return rows.filter((r) => {
//       if (employeeFilter !== "all") {
//         const id = r.employeeId || r.employeeDocId || "";
//         if (id !== employeeFilter) return false;
//       }
//       if (fromDate && (r.date || "") < fromDate) return false;
//       if (toDate && (r.date || "") > toDate) return false;
//       if (!q) return true;
//       return (
//         (r.name || "").toLowerCase().includes(q) ||
//         (r.employeeId || "").toLowerCase().includes(q) ||
//         (r.department || "").toLowerCase().includes(q) ||
//         (r.date || "").includes(q)
//       );
//     });
//   }, [rows, search, employeeFilter, fromDate, toDate]);

//   function exportCsv() {
//     const headers = [
//       "Date",
//       "Employee ID",
//       "Name",
//       "Department",
//       "Status",
//       "Check In",
//       "Check Out",
//       "Work Hours",
//       "Overtime",
//     ];
//     const body = filtered.map((r) =>
//       [
//         r.date || "",
//         r.employeeId || "",
//         r.name || "",
//         r.department || "",
//         r.status || "",
//         r.checkIn || "",
//         r.checkOut || "",
//         r.workHours || "",
//         r.overtime || "",
//       ].join(",")
//     );
//     const blob = new Blob([[headers.join(","), ...body].join("\n")], {
//       type: "text/csv",
//     });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `attendance-history.csv`;
//     a.click();
//     URL.revokeObjectURL(url);
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1600px] px-5 py-5 lg:px-8">
//           <a
//             href="/interior/hrms"
//             className="mb-3 inline-flex text-sm font-semibold text-[#176b5b] hover:underline"
//           >
//             ← Back to HRMS
//           </a>
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               <h1 className="text-2xl font-bold tracking-tight">
//                 Attendance History
//               </h1>
//               <p className="mt-1 text-sm text-gray-500">
//                 All saved attendance records for every employee (Firebase).
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               <a
//                 href="/interior/hrms/attendance"
//                 className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
//               >
//                 Mark attendance
//               </a>
//               <button
//                 type="button"
//                 onClick={exportCsv}
//                 className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//               >
//                 Export CSV
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-6 px-5 py-6 lg:px-8">
//         <section className="rounded-xl border border-[#e4e2da] bg-white p-4">
//           <div className="flex flex-col gap-3 lg:flex-row lg:flex-wrap">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search name, ID, department, date…"
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-4 py-2.5 text-sm outline-none focus:border-[#176b5b] lg:max-w-sm"
//             />
//             <select
//               value={employeeFilter}
//               onChange={(e) => setEmployeeFilter(e.target.value)}
//               className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               <option value="all">All employees</option>
//               {employeeOptions.map(([id, name]) => (
//                 <option key={id} value={id}>
//                   {name} ({id})
//                 </option>
//               ))}
//             </select>
//             <input
//               type="date"
//               value={fromDate}
//               onChange={(e) => setFromDate(e.target.value)}
//               className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//               title="From date"
//             />
//             <input
//               type="date"
//               value={toDate}
//               onChange={(e) => setToDate(e.target.value)}
//               className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//               title="To date"
//             />
//           </div>
//         </section>

//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1000px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Date</th>
//                   <th className="px-4 py-3 font-semibold">Employee</th>
//                   <th className="px-4 py-3 font-semibold">Department</th>
//                   <th className="px-4 py-3 font-semibold">Check In</th>
//                   <th className="px-4 py-3 font-semibold">Check Out</th>
//                   <th className="px-4 py-3 font-semibold">Hours</th>
//                   <th className="px-4 py-3 font-semibold">OT</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece6]">
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={8}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       Loading history…
//                     </td>
//                   </tr>
//                 ) : filtered.length === 0 ? (
//                   <tr>
//                     <td
//                       colSpan={8}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       No stored attendance yet. Mark attendance on the daily
//                       page — records appear here automatically.
//                     </td>
//                   </tr>
//                 ) : (
//                   filtered.map((r) => (
//                     <tr key={r.id} className="hover:bg-[#fafaf8]">
//                       <td className="px-5 py-4 text-sm font-medium">
//                         {r.date || "—"}
//                       </td>
//                       <td className="px-4 py-4">
//                         <p className="font-semibold text-gray-900">
//                           {r.name || "—"}
//                         </p>
//                         <p className="text-xs text-[#176b5b]">
//                           {r.employeeId || "—"}
//                         </p>
//                       </td>
//                       <td className="px-4 py-4 text-sm text-gray-700">
//                         {r.department || "—"}
//                       </td>
//                       <td className="px-4 py-4 text-sm">{r.checkIn || "—"}</td>
//                       <td className="px-4 py-4 text-sm">{r.checkOut || "—"}</td>
//                       <td className="px-4 py-4 text-sm">{r.workHours || "—"}</td>
//                       <td className="px-4 py-4 text-sm text-[#9a5b18]">
//                         {r.overtime || "0m"}
//                       </td>
//                       <td className="px-4 py-4">
//                         <span
//                           className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                             r.status
//                           )}`}
//                         >
//                           {r.status || "—"}
//                         </span>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </section>

//         <p className="text-xs text-gray-400">
//           Showing {filtered.length} of {rows.length} stored records.
//         </p>
//       </main>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import {
//   getAllAttendanceHistory,
//   type InteriorAttendance,
// } from "@/modules/interior/services/attendanceService";
// import { Download } from "lucide-react";

// function statusClass(status?: string) {
//   const s = (status || "").toLowerCase();
//   if (s.includes("holiday"))
//     return "bg-indigo-50 text-indigo-700 border-indigo-200";
//   if (s.includes("present"))
//     return "bg-green-50 text-green-700 border-green-200";
//   if (s.includes("late")) return "bg-amber-50 text-amber-700 border-amber-200";
//   if (s.includes("half")) return "bg-blue-50 text-blue-700 border-blue-200";
//   if (s.includes("leave"))
//     return "bg-purple-50 text-purple-700 border-purple-200";
//   return "bg-red-50 text-red-700 border-red-200";
// }

// export default function AttendanceHistoryPage() {
//   const [rows, setRows] = useState<InteriorAttendance[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [employeeFilter, setEmployeeFilter] = useState("all");
//   const [fromDate, setFromDate] = useState("");
//   const [toDate, setToDate] = useState("");

//   useEffect(() => {
//     let cancelled = false;
//     (async () => {
//       setLoading(true);
//       try {
//         const data = await getAllAttendanceHistory();
//         if (!cancelled) setRows(data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     })();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const employeeOptions = useMemo(() => {
//     const map = new Map<string, string>();
//     for (const r of rows) {
//       const id = r.employeeId || r.employeeDocId || "";
//       if (!id) continue;
//       map.set(id, r.name || id);
//     }
//     return Array.from(map.entries()).sort((a, b) =>
//       a[1].localeCompare(b[1])
//     );
//   }, [rows]);

//   const filtered = useMemo(() => {
//     const q = search.toLowerCase().trim();
//     return rows.filter((r) => {
//       if (employeeFilter !== "all") {
//         const id = r.employeeId || r.employeeDocId || "";
//         if (id !== employeeFilter) return false;
//       }
//       if (fromDate && (r.date || "") < fromDate) return false;
//       if (toDate && (r.date || "") > toDate) return false;
//       if (!q) return true;
//       return (
//         (r.name || "").toLowerCase().includes(q) ||
//         (r.employeeId || "").toLowerCase().includes(q) ||
//         (r.department || "").toLowerCase().includes(q) ||
//         (r.date || "").includes(q)
//       );
//     });
//   }, [rows, search, employeeFilter, fromDate, toDate]);

//   function exportCsv() {
//     const headers = [
//       "Date",
//       "Employee ID",
//       "Name",
//       "Department",
//       "Status",
//       "Check In",
//       "Check Out",
//       "Work Hours",
//       "Overtime",
//     ];
//     const body = filtered.map((r) =>
//       [
//         r.date || "",
//         r.employeeId || "",
//         r.name || "",
//         r.department || "",
//         r.status || "",
//         r.checkIn || "",
//         r.checkOut || "",
//         r.workHours || "",
//         r.overtime || "",
//       ]
//         .map((cell) => `"${String(cell).replace(/"/g, '""')}"`)
//         .join(",")
//     );
//     const blob = new Blob([[headers.join(","), ...body].join("\n")], {
//       type: "text/csv;charset=utf-8;",
//     });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `attendance-history.csv`;
//     a.click();
//     URL.revokeObjectURL(url);
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       {/* Header: title + actions beside */}
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1600px] px-3 py-4 sm:px-5 sm:py-5 lg:px-8">
//           <Link
//             href="/interior/hrms"
//             className="mb-2 inline-flex text-xs font-semibold text-[#176b5b] hover:underline sm:text-sm"
//           >
//             ← Back to HRMS
//           </Link>
//           <div className="flex items-start justify-between gap-3 sm:items-center">
//             <div className="min-w-0 flex-1">
//               <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
//                 Attendance History
//               </h1>
//               <p className="mt-1 text-xs text-gray-500 sm:text-sm">
//                 All saved attendance records (Firebase).
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <div className="flex shrink-0 flex-wrap items-center justify-end gap-2">
//               <Link
//                 href="/interior/hrms/attendance"
//                 className="hidden rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 sm:inline-flex sm:px-4 sm:text-sm"
//               >
//                 Mark attendance
//               </Link>
//               <button
//                 type="button"
//                 onClick={exportCsv}
//                 className="inline-flex items-center gap-1.5 rounded-xl bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125848] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
//               >
//                 <Download size={16} strokeWidth={2.5} />
//                 <span className="hidden sm:inline">Export CSV</span>
//                 <span className="sm:hidden">Export</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-4 px-3 py-4 sm:space-y-6 sm:px-5 sm:py-6 lg:px-8">
//         {/* Mobile-only mark link */}
//         <Link
//           href="/interior/hrms/attendance"
//           className="flex items-center justify-center rounded-xl border border-gray-200 bg-white py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 sm:hidden"
//         >
//           Mark attendance →
//         </Link>

//         {/* Filters */}
//         <section className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-4">
//           <div className="flex flex-col gap-2 sm:gap-3 lg:flex-row lg:flex-wrap lg:items-center">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search name, ID, department, date…"
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] lg:max-w-sm"
//             />
//             <select
//               value={employeeFilter}
//               onChange={(e) => setEmployeeFilter(e.target.value)}
//               className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] lg:w-auto"
//             >
//               <option value="all">All employees</option>
//               {employeeOptions.map(([id, name]) => (
//                 <option key={id} value={id}>
//                   {name} ({id})
//                 </option>
//               ))}
//             </select>
//             <div className="flex gap-2">
//               <input
//                 type="date"
//                 value={fromDate}
//                 onChange={(e) => setFromDate(e.target.value)}
//                 className="min-w-0 flex-1 rounded-lg border border-gray-200 px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:text-sm lg:flex-none"
//                 title="From date"
//               />
//               <input
//                 type="date"
//                 value={toDate}
//                 onChange={(e) => setToDate(e.target.value)}
//                 className="min-w-0 flex-1 rounded-lg border border-gray-200 px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:text-sm lg:flex-none"
//                 title="To date"
//               />
//             </div>
//           </div>
//         </section>

//         {/* Table + mobile cards */}
//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           {/* Desktop table */}
//           <div className="hidden overflow-x-auto md:block">
//             <table className="w-full min-w-[1000px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Date</th>
//                   <th className="px-4 py-3 font-semibold">Employee</th>
//                   <th className="px-4 py-3 font-semibold">Department</th>
//                   <th className="px-4 py-3 font-semibold">Check In</th>
//                   <th className="px-4 py-3 font-semibold">Check Out</th>
//                   <th className="px-4 py-3 font-semibold">Hours</th>
//                   <th className="px-4 py-3 font-semibold">OT</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece6]">
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={8}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       Loading history…
//                     </td>
//                   </tr>
//                 ) : filtered.length === 0 ? (
//                   <tr>
//                     <td
//                       colSpan={8}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       No stored attendance yet. Mark attendance on the daily
//                       page — records appear here automatically.
//                     </td>
//                   </tr>
//                 ) : (
//                   filtered.map((r) => (
//                     <tr key={r.id} className="hover:bg-[#fafaf8]">
//                       <td className="px-5 py-4 text-sm font-medium">
//                         {r.date || "—"}
//                       </td>
//                       <td className="px-4 py-4">
//                         <p className="font-semibold text-gray-900">
//                           {r.name || "—"}
//                         </p>
//                         <p className="text-xs text-[#176b5b]">
//                           {r.employeeId || "—"}
//                         </p>
//                       </td>
//                       <td className="px-4 py-4 text-sm text-gray-700">
//                         {r.department || "—"}
//                       </td>
//                       <td className="px-4 py-4 text-sm">{r.checkIn || "—"}</td>
//                       <td className="px-4 py-4 text-sm">{r.checkOut || "—"}</td>
//                       <td className="px-4 py-4 text-sm">{r.workHours || "—"}</td>
//                       <td className="px-4 py-4 text-sm text-[#9a5b18]">
//                         {r.overtime || "0m"}
//                       </td>
//                       <td className="px-4 py-4">
//                         <span
//                           className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                             r.status
//                           )}`}
//                         >
//                           {r.status || "—"}
//                         </span>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {/* Mobile cards */}
//           <div className="space-y-3 p-3 md:hidden">
//             {loading ? (
//               <p className="py-10 text-center text-sm text-gray-500">
//                 Loading history…
//               </p>
//             ) : filtered.length === 0 ? (
//               <p className="py-10 text-center text-sm text-gray-500">
//                 No stored attendance yet. Mark a day on Attendance — records
//                 show up here.
//               </p>
//             ) : (
//               filtered.map((r) => (
//                 <article
//                   key={r.id}
//                   className="rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3.5"
//                 >
//                   <div className="flex items-start justify-between gap-2">
//                     <div className="min-w-0">
//                       <p className="text-xs font-medium text-gray-500">
//                         {r.date || "—"}
//                       </p>
//                       <p className="mt-0.5 font-semibold text-gray-900">
//                         {r.name || "—"}
//                       </p>
//                       <p className="text-xs text-[#176b5b]">
//                         {r.employeeId || "—"}
//                       </p>
//                       <p className="mt-0.5 text-xs text-gray-500">
//                         {r.department || "—"}
//                       </p>
//                     </div>
//                     <span
//                       className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${statusClass(
//                         r.status
//                       )}`}
//                     >
//                       {r.status || "—"}
//                     </span>
//                   </div>
//                   <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
//                     <div>
//                       <p className="text-gray-400">Check in</p>
//                       <p className="font-medium text-gray-800">
//                         {r.checkIn || "—"}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-gray-400">Check out</p>
//                       <p className="font-medium text-gray-800">
//                         {r.checkOut || "—"}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-gray-400">Hours</p>
//                       <p className="font-medium text-gray-800">
//                         {r.workHours || "—"}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-gray-400">OT</p>
//                       <p className="font-medium text-[#9a5b18]">
//                         {r.overtime || "0m"}
//                       </p>
//                     </div>
//                   </div>
//                 </article>
//               ))
//             )}
//           </div>
//         </section>

//         <p className="text-xs text-gray-400">
//           Showing {filtered.length} of {rows.length} stored records.
//         </p>
//       </main>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import {
//   getAllAttendanceHistory,
//   type InteriorAttendance,
// } from "@/modules/interior/services/attendanceService";
// import { ChevronLeft, ChevronRight, Download } from "lucide-react";

// type DayStatus =
//   | "Present"
//   | "Absent"
//   | "Late"
//   | "Half Day"
//   | "Leave"
//   | "Holiday"
//   | "Empty";

// function normalizeStatus(raw?: string): DayStatus {
//   const s = (raw || "").toLowerCase().trim();
//   if (!s) return "Empty";
//   if (s.includes("holiday")) return "Holiday";
//   if (s.includes("present") || s === "p") return "Present";
//   if (s.includes("late")) return "Late";
//   if (s.includes("half")) return "Half Day";
//   if (s.includes("leave")) return "Leave";
//   if (s.includes("absent") || s === "a" || s.includes("miss")) return "Absent";
//   return "Empty";
// }

// function statusDotClass(status: DayStatus) {
//   switch (status) {
//     case "Present":
//       return "bg-emerald-500 ring-emerald-100";
//     case "Absent":
//       return "bg-red-400 ring-red-100";
//     case "Late":
//       return "bg-amber-400 ring-amber-100";
//     case "Half Day":
//       return "bg-blue-400 ring-blue-100";
//     case "Leave":
//       return "bg-purple-400 ring-purple-100";
//     case "Holiday":
//       return "bg-indigo-400 ring-indigo-100";
//     default:
//       return "bg-slate-200 ring-slate-100";
//   }
// }

// function statusLabel(status: DayStatus) {
//   if (status === "Empty") return "—";
//   return status;
// }

// const MONTH_NAMES = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// export default function AttendanceHistoryPage() {
//   const [rows, setRows] = useState<InteriorAttendance[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");

//   const now = new Date();
//   const [viewYear, setViewYear] = useState(now.getFullYear());
//   const [viewMonth, setViewMonth] = useState(now.getMonth()); // 0-based

//   useEffect(() => {
//     let cancelled = false;
//     (async () => {
//       setLoading(true);
//       try {
//         const data = await getAllAttendanceHistory();
//         if (!cancelled) setRows(data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     })();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const daysInMonth = useMemo(
//     () => new Date(viewYear, viewMonth + 1, 0).getDate(),
//     [viewYear, viewMonth]
//   );

//   const dayNumbers = useMemo(
//     () => Array.from({ length: daysInMonth }, (_, i) => i + 1),
//     [daysInMonth]
//   );

//   /** employeeId → name */
//   const employees = useMemo(() => {
//     const map = new Map<string, string>();
//     for (const r of rows) {
//       const id = r.employeeId || r.employeeDocId || r.name || "";
//       if (!id) continue;
//       if (!map.has(id)) map.set(id, r.name || id);
//     }
//     return Array.from(map.entries())
//       .map(([id, name]) => ({ id, name }))
//       .sort((a, b) => a.name.localeCompare(b.name));
//   }, [rows]);

//   const filteredEmployees = useMemo(() => {
//     const q = search.toLowerCase().trim();
//     if (!q) return employees;
//     return employees.filter(
//       (e) =>
//         e.name.toLowerCase().includes(q) || e.id.toLowerCase().includes(q)
//     );
//   }, [employees, search]);

//   /**
//    * Lookup: `${employeeId}|YYYY-MM-DD` → DayStatus
//    */
//   const statusMap = useMemo(() => {
//     const map = new Map<string, DayStatus>();
//     const prefix = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-`;

//     for (const r of rows) {
//       const date = (r.date || "").slice(0, 10);
//       if (!date.startsWith(prefix)) continue;
//       const empId = r.employeeId || r.employeeDocId || r.name || "";
//       if (!empId) continue;
//       map.set(`${empId}|${date}`, normalizeStatus(r.status));
//     }
//     return map;
//   }, [rows, viewYear, viewMonth]);

//   function getStatus(employeeId: string, day: number): DayStatus {
//     const date = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
//     return statusMap.get(`${employeeId}|${date}`) || "Empty";
//   }

//   function prevMonth() {
//     if (viewMonth === 0) {
//       setViewMonth(11);
//       setViewYear((y) => y - 1);
//     } else {
//       setViewMonth((m) => m - 1);
//     }
//   }

//   function nextMonth() {
//     if (viewMonth === 11) {
//       setViewMonth(0);
//       setViewYear((y) => y + 1);
//     } else {
//       setViewMonth((m) => m + 1);
//     }
//   }

//   function goToday() {
//     const d = new Date();
//     setViewYear(d.getFullYear());
//     setViewMonth(d.getMonth());
//   }

//   function exportCsv() {
//     const headers = ["Employee", "Employee ID", ...dayNumbers.map(String)];
//     const body = filteredEmployees.map((emp) => {
//       const cells = dayNumbers.map((d) => statusLabel(getStatus(emp.id, d)));
//       return [emp.name, emp.id, ...cells]
//         .map((cell) => `"${String(cell).replace(/"/g, '""')}"`)
//         .join(",");
//     });
//     const blob = new Blob([[headers.join(","), ...body].join("\n")], {
//       type: "text/csv;charset=utf-8;",
//     });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `attendance-${MONTH_NAMES[viewMonth]}-${viewYear}.csv`;
//     a.click();
//     URL.revokeObjectURL(url);
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       {/* Header */}
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1600px] px-3 py-4 sm:px-5 sm:py-5 lg:px-8">
//           <Link
//             href="/interior/hrms"
//             className="mb-2 inline-flex text-xs font-semibold text-[#176b5b] hover:underline sm:text-sm"
//           >
//             ← Back to HRMS
//           </Link>
//           <div className="flex items-start justify-between gap-3 sm:items-center">
//             <div className="min-w-0 flex-1">
//               <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
//                 Attendance
//               </h1>
//               <p className="mt-1 text-xs text-gray-500 sm:text-sm">
//                 Monthly calendar view from Firebase records.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <div className="flex shrink-0 flex-wrap items-center justify-end gap-2">
//               <Link
//                 href="/interior/hrms/attendance"
//                 className="hidden rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 sm:inline-flex sm:px-4 sm:text-sm"
//               >
//                 Mark attendance
//               </Link>
//               <button
//                 type="button"
//                 onClick={exportCsv}
//                 className="inline-flex items-center gap-1.5 rounded-xl bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125848] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
//               >
//                 <Download size={16} strokeWidth={2.5} />
//                 <span className="hidden sm:inline">Export CSV</span>
//                 <span className="sm:hidden">Export</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-4 px-3 py-4 sm:space-y-6 sm:px-5 sm:py-6 lg:px-8">
//         {/* Month navigator + search */}
//         <section className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-4">
//           <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
//             <div className="flex items-center gap-2">
//               <button
//                 type="button"
//                 onClick={prevMonth}
//                 className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50"
//                 aria-label="Previous month"
//               >
//                 <ChevronLeft size={18} />
//               </button>
//               <div className="min-w-[140px] text-center sm:min-w-[180px]">
//                 <p className="text-base font-bold text-gray-900 sm:text-lg">
//                   {MONTH_NAMES[viewMonth]} {viewYear}
//                 </p>
//               </div>
//               <button
//                 type="button"
//                 onClick={nextMonth}
//                 className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50"
//                 aria-label="Next month"
//               >
//                 <ChevronRight size={18} />
//               </button>
//               <button
//                 type="button"
//                 onClick={goToday}
//                 className="ml-1 rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-50"
//               >
//                 Today
//               </button>
//             </div>
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search employee…"
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] sm:max-w-xs"
//             />
//           </div>
//         </section>

//         {/* Legend */}
//         <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600 sm:gap-4">
//           {(
//             [
//               ["Present", "bg-emerald-500"],
//               ["Absent", "bg-red-400"],
//               ["Late", "bg-amber-400"],
//               ["Half Day", "bg-blue-400"],
//               ["Leave", "bg-purple-400"],
//               ["Holiday", "bg-indigo-400"],
//               ["No record", "bg-slate-200"],
//             ] as const
//           ).map(([label, color]) => (
//             <span key={label} className="inline-flex items-center gap-1.5">
//               <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
//               {label}
//             </span>
//           ))}
//         </div>

//         {/* Calendar grid */}
//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           {loading ? (
//             <p className="px-5 py-16 text-center text-sm text-gray-500">
//               Loading attendance…
//             </p>
//           ) : filteredEmployees.length === 0 ? (
//             <p className="px-5 py-16 text-center text-sm text-gray-500">
//               No employees with attendance records yet. Mark attendance on the
//               daily page first.
//             </p>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="w-full min-w-max border-collapse text-left">
//                 <thead>
//                   <tr className="bg-[#fafaf8] text-xs text-gray-500">
//                     <th className="sticky left-0 z-10 min-w-[140px] border-b border-r border-[#eeece6] bg-[#fafaf8] px-4 py-3 text-left font-semibold sm:min-w-[180px]">
//                       Employee
//                     </th>
//                     {dayNumbers.map((d) => (
//                       <th
//                         key={d}
//                         className="border-b border-[#eeece6] px-1 py-3 text-center font-semibold"
//                         style={{ minWidth: 36 }}
//                       >
//                         {d}
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredEmployees.map((emp) => (
//                     <tr
//                       key={emp.id}
//                       className="border-b border-[#eeece6] last:border-0 hover:bg-[#fafaf8]/60"
//                     >
//                       <td className="sticky left-0 z-10 border-r border-[#eeece6] bg-white px-4 py-3">
//                         <p className="truncate text-sm font-semibold text-gray-900">
//                           {emp.name}
//                         </p>
//                         <p className="truncate text-[11px] text-[#176b5b]">
//                           {emp.id}
//                         </p>
//                       </td>
//                       {dayNumbers.map((d) => {
//                         const st = getStatus(emp.id, d);
//                         return (
//                           <td
//                             key={d}
//                             className="px-1 py-2.5 text-center"
//                             title={`${emp.name} · ${d} ${MONTH_NAMES[viewMonth]} · ${statusLabel(st)}`}
//                           >
//                             <span
//                               className={`mx-auto inline-block h-3.5 w-3.5 rounded-full ring-4 ${statusDotClass(
//                                 st
//                               )}`}
//                             />
//                           </td>
//                         );
//                       })}
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </section>

//         {/* Mobile tip */}
//         <p className="text-xs text-gray-400 md:hidden">
//           Swipe sideways to see all days of the month.
//         </p>
//       </main>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import {
//   getAllAttendanceHistory,
//   type InteriorAttendance,
// } from "@/modules/interior/services/attendanceService";
// import { ChevronLeft, ChevronRight, Download } from "lucide-react";

// type DayStatus =
//   | "Present"
//   | "Absent"
//   | "Late"
//   | "Half Day"
//   | "Leave"
//   | "Holiday"
//   | "Empty";

// function normalizeStatus(raw?: string): DayStatus {
//   const s = (raw || "").toLowerCase().trim();
//   if (!s) return "Empty";
//   if (s.includes("holiday")) return "Holiday";
//   if (s.includes("present") || s === "p") return "Present";
//   if (s.includes("late")) return "Late";
//   if (s.includes("half")) return "Half Day";
//   if (s.includes("leave")) return "Leave";
//   if (s.includes("absent") || s === "a" || s.includes("miss")) return "Absent";
//   return "Empty";
// }

// function statusDotClass(status: DayStatus) {
//   switch (status) {
//     case "Present":
//       return "bg-emerald-500 ring-emerald-100";
//     case "Absent":
//       return "bg-red-400 ring-red-100";
//     case "Late":
//       return "bg-amber-400 ring-amber-100";
//     case "Half Day":
//       return "bg-blue-400 ring-blue-100";
//     case "Leave":
//       return "bg-purple-400 ring-purple-100";
//     case "Holiday":
//       return "bg-indigo-400 ring-indigo-100";
//     default:
//       return "bg-slate-200 ring-slate-100";
//   }
// }

// function statusCellClass(status: DayStatus) {
//   switch (status) {
//     case "Present":
//       return "bg-emerald-50 border-emerald-200 text-emerald-800";
//     case "Absent":
//       return "bg-red-50 border-red-200 text-red-700";
//     case "Late":
//       return "bg-amber-50 border-amber-200 text-amber-800";
//     case "Half Day":
//       return "bg-blue-50 border-blue-200 text-blue-800";
//     case "Leave":
//       return "bg-purple-50 border-purple-200 text-purple-800";
//     case "Holiday":
//       return "bg-indigo-50 border-indigo-200 text-indigo-800";
//     default:
//       return "bg-white border-[#eeece6] text-gray-400";
//   }
// }

// function statusLabel(status: DayStatus) {
//   if (status === "Empty") return "—";
//   return status;
// }

// const MONTH_NAMES = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// export default function AttendanceHistoryPage() {
//   const [rows, setRows] = useState<InteriorAttendance[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedEmployee, setSelectedEmployee] = useState<string>("all");

//   const now = new Date();
//   const [viewYear, setViewYear] = useState(now.getFullYear());
//   const [viewMonth, setViewMonth] = useState(now.getMonth()); // 0-based

//   useEffect(() => {
//     let cancelled = false;
//     (async () => {
//       setLoading(true);
//       try {
//         const data = await getAllAttendanceHistory();
//         if (!cancelled) setRows(data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     })();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const daysInMonth = useMemo(
//     () => new Date(viewYear, viewMonth + 1, 0).getDate(),
//     [viewYear, viewMonth]
//   );

//   const firstWeekday = useMemo(
//     () => new Date(viewYear, viewMonth, 1).getDay(),
//     [viewYear, viewMonth]
//   );

//   const dayNumbers = useMemo(
//     () => Array.from({ length: daysInMonth }, (_, i) => i + 1),
//     [daysInMonth]
//   );

//   /** employeeId → name */
//   const employees = useMemo(() => {
//     const map = new Map<string, string>();
//     for (const r of rows) {
//       const id = r.employeeId || r.employeeDocId || r.name || "";
//       if (!id) continue;
//       if (!map.has(id)) map.set(id, r.name || id);
//     }
//     return Array.from(map.entries())
//       .map(([id, name]) => ({ id, name }))
//       .sort((a, b) => a.name.localeCompare(b.name));
//   }, [rows]);

//   /**
//    * Lookup: `${employeeId}|YYYY-MM-DD` → { status, record }
//    */
//   const recordMap = useMemo(() => {
//     const map = new Map<
//       string,
//       { status: DayStatus; record: InteriorAttendance }
//     >();
//     const prefix = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-`;

//     for (const r of rows) {
//       const date = (r.date || "").slice(0, 10);
//       if (!date.startsWith(prefix)) continue;
//       const empId = r.employeeId || r.employeeDocId || r.name || "";
//       if (!empId) continue;
//       map.set(`${empId}|${date}`, {
//         status: normalizeStatus(r.status),
//         record: r,
//       });
//     }
//     return map;
//   }, [rows, viewYear, viewMonth]);

//   function getStatus(employeeId: string, day: number): DayStatus {
//     const date = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
//     return recordMap.get(`${employeeId}|${date}`)?.status || "Empty";
//   }

//   function getRecord(employeeId: string, day: number) {
//     const date = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
//     return recordMap.get(`${employeeId}|${date}`)?.record;
//   }

//   /** For single-employee full calendar: status by day of month */
//   function getDayStatusForSelected(day: number): DayStatus {
//     if (selectedEmployee === "all") return "Empty";
//     return getStatus(selectedEmployee, day);
//   }

//   function prevMonth() {
//     if (viewMonth === 0) {
//       setViewMonth(11);
//       setViewYear((y) => y - 1);
//     } else {
//       setViewMonth((m) => m - 1);
//     }
//   }

//   function nextMonth() {
//     if (viewMonth === 11) {
//       setViewMonth(0);
//       setViewYear((y) => y + 1);
//     } else {
//       setViewMonth((m) => m + 1);
//     }
//   }

//   function goToday() {
//     const d = new Date();
//     setViewYear(d.getFullYear());
//     setViewMonth(d.getMonth());
//   }

//   const selectedName =
//     selectedEmployee === "all"
//       ? "All employees"
//       : employees.find((e) => e.id === selectedEmployee)?.name || selectedEmployee;

//   /** Month summary counts for selected employee (or all) */
//   const monthSummary = useMemo(() => {
//     const counts: Record<DayStatus, number> = {
//       Present: 0,
//       Absent: 0,
//       Late: 0,
//       "Half Day": 0,
//       Leave: 0,
//       Holiday: 0,
//       Empty: 0,
//     };

//     if (selectedEmployee === "all") {
//       for (const emp of employees) {
//         for (const d of dayNumbers) {
//           counts[getStatus(emp.id, d)]++;
//         }
//       }
//     } else {
//       for (const d of dayNumbers) {
//         counts[getStatus(selectedEmployee, d)]++;
//       }
//     }
//     return counts;
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [selectedEmployee, employees, dayNumbers, recordMap]);

//   function exportCsv() {
//     if (selectedEmployee === "all") {
//       const headers = ["Employee", "Employee ID", ...dayNumbers.map(String)];
//       const body = employees.map((emp) => {
//         const cells = dayNumbers.map((d) => statusLabel(getStatus(emp.id, d)));
//         return [emp.name, emp.id, ...cells]
//           .map((cell) => `"${String(cell).replace(/"/g, '""')}"`)
//           .join(",");
//       });
//       const blob = new Blob([[headers.join(","), ...body].join("\n")], {
//         type: "text/csv;charset=utf-8;",
//       });
//       const url = URL.createObjectURL(blob);
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = `attendance-${MONTH_NAMES[viewMonth]}-${viewYear}.csv`;
//       a.click();
//       URL.revokeObjectURL(url);
//       return;
//     }

//     const headers = ["Date", "Status", "Check In", "Check Out", "Hours", "OT"];
//     const body = dayNumbers.map((d) => {
//       const rec = getRecord(selectedEmployee, d);
//       const date = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
//       return [
//         date,
//         statusLabel(getStatus(selectedEmployee, d)),
//         rec?.checkIn || "",
//         rec?.checkOut || "",
//         rec?.workHours || "",
//         rec?.overtime || "",
//       ]
//         .map((cell) => `"${String(cell).replace(/"/g, '""')}"`)
//         .join(",");
//     });
//     const blob = new Blob([[headers.join(","), ...body].join("\n")], {
//       type: "text/csv;charset=utf-8;",
//     });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `attendance-${selectedName}-${MONTH_NAMES[viewMonth]}-${viewYear}.csv`;
//     a.click();
//     URL.revokeObjectURL(url);
//   }

//   /** Calendar cells: leading blanks + days */
//   const calendarCells = useMemo(() => {
//     const cells: (number | null)[] = [];
//     for (let i = 0; i < firstWeekday; i++) cells.push(null);
//     for (let d = 1; d <= daysInMonth; d++) cells.push(d);
//     while (cells.length % 7 !== 0) cells.push(null);
//     return cells;
//   }, [firstWeekday, daysInMonth]);

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       {/* Header */}
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1600px] px-3 py-4 sm:px-5 sm:py-5 lg:px-8">
//           <Link
//             href="/interior/hrms"
//             className="mb-2 inline-flex text-xs font-semibold text-[#176b5b] hover:underline sm:text-sm"
//           >
//             ← Back to HRMS
//           </Link>
//           <div className="flex items-start justify-between gap-3 sm:items-center">
//             <div className="min-w-0 flex-1">
//               <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
//                 Attendance
//               </h1>
//               <p className="mt-1 text-xs text-gray-500 sm:text-sm">
//                 Monthly calendar · Firebase records
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>

//             {/* Top-right: employee select + export */}
//             <div className="flex shrink-0 flex-col items-end gap-2 sm:flex-row sm:items-center">
//               <select
//                 value={selectedEmployee}
//                 onChange={(e) => setSelectedEmployee(e.target.value)}
//                 className="h-10 max-w-[200px] rounded-xl border border-gray-200 bg-white px-3 text-xs font-medium outline-none focus:border-[#176b5b] sm:max-w-[240px] sm:text-sm"
//               >
//                 <option value="all">All employees</option>
//                 {employees.map((e) => (
//                   <option key={e.id} value={e.id}>
//                     {e.name}
//                   </option>
//                 ))}
//               </select>
//               <button
//                 type="button"
//                 onClick={exportCsv}
//                 className="inline-flex items-center gap-1.5 rounded-xl bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125848] sm:gap-2 sm:px-4 sm:text-sm"
//               >
//                 <Download size={16} strokeWidth={2.5} />
//                 <span className="hidden sm:inline">Export</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-4 px-3 py-4 sm:space-y-5 sm:px-5 sm:py-6 lg:px-8">
//         {/* Month bar */}
//         <section className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-4">
//           <div className="flex flex-wrap items-center justify-between gap-3">
//             <div className="flex items-center gap-2">
//               <button
//                 type="button"
//                 onClick={prevMonth}
//                 className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50"
//                 aria-label="Previous month"
//               >
//                 <ChevronLeft size={18} />
//               </button>
//               <p className="min-w-[150px] text-center text-base font-bold text-gray-900 sm:min-w-[180px] sm:text-lg">
//                 {MONTH_NAMES[viewMonth]} {viewYear}
//               </p>
//               <button
//                 type="button"
//                 onClick={nextMonth}
//                 className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50"
//                 aria-label="Next month"
//               >
//                 <ChevronRight size={18} />
//               </button>
//               <button
//                 type="button"
//                 onClick={goToday}
//                 className="rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-50"
//               >
//                 Today
//               </button>
//             </div>
//             <p className="text-sm font-medium text-gray-700">
//               {selectedName}
//             </p>
//           </div>
//         </section>

//         {/* Legend + summary chips */}
//         <div className="flex flex-wrap items-center gap-2 text-xs sm:gap-3">
//           {(
//             [
//               ["Present", "bg-emerald-500", monthSummary.Present],
//               ["Absent", "bg-red-400", monthSummary.Absent],
//               ["Late", "bg-amber-400", monthSummary.Late],
//               ["Half Day", "bg-blue-400", monthSummary["Half Day"]],
//               ["Leave", "bg-purple-400", monthSummary.Leave],
//               ["Holiday", "bg-indigo-400", monthSummary.Holiday],
//             ] as const
//           ).map(([label, color, count]) => (
//             <span
//               key={label}
//               className="inline-flex items-center gap-1.5 rounded-full border border-[#e4e2da] bg-white px-2.5 py-1"
//             >
//               <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
//               {label}
//               <span className="font-semibold text-gray-800">{count}</span>
//             </span>
//           ))}
//         </div>

//         {loading ? (
//           <p className="rounded-xl border border-[#e4e2da] bg-white py-20 text-center text-sm text-gray-500">
//             Loading attendance…
//           </p>
//         ) : selectedEmployee === "all" ? (
//           /* ── All employees: matrix grid ── */
//           <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//             {employees.length === 0 ? (
//               <p className="px-5 py-16 text-center text-sm text-gray-500">
//                 No attendance records yet. Mark attendance on the daily page
//                 first.
//               </p>
//             ) : (
//               <div className="overflow-x-auto">
//                 <table className="w-full min-w-max border-collapse text-left">
//                   <thead>
//                     <tr className="bg-[#fafaf8] text-xs text-gray-500">
//                       <th className="sticky left-0 z-10 min-w-[140px] border-b border-r border-[#eeece6] bg-[#fafaf8] px-4 py-3 text-left font-semibold sm:min-w-[180px]">
//                         Employee
//                       </th>
//                       {dayNumbers.map((d) => (
//                         <th
//                           key={d}
//                           className="border-b border-[#eeece6] px-1 py-3 text-center font-semibold"
//                           style={{ minWidth: 36 }}
//                         >
//                           {d}
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {employees.map((emp) => (
//                       <tr
//                         key={emp.id}
//                         className="border-b border-[#eeece6] last:border-0 hover:bg-[#fafaf8]/60"
//                       >
//                         <td className="sticky left-0 z-10 border-r border-[#eeece6] bg-white px-4 py-3">
//                           <button
//                             type="button"
//                             onClick={() => setSelectedEmployee(emp.id)}
//                             className="text-left"
//                           >
//                             <p className="truncate text-sm font-semibold text-gray-900 hover:text-[#176b5b]">
//                               {emp.name}
//                             </p>
//                             <p className="truncate text-[11px] text-[#176b5b]">
//                               {emp.id}
//                             </p>
//                           </button>
//                         </td>
//                         {dayNumbers.map((d) => {
//                           const st = getStatus(emp.id, d);
//                           return (
//                             <td
//                               key={d}
//                               className="px-1 py-2.5 text-center"
//                               title={`${emp.name} · ${d} ${MONTH_NAMES[viewMonth]} · ${statusLabel(st)}`}
//                             >
//                               <span
//                                 className={`mx-auto inline-block h-3.5 w-3.5 rounded-full ring-4 ${statusDotClass(
//                                   st
//                                 )}`}
//                               />
//  mid                            </td>
//                           );
//                         })}
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//             <p className="border-t border-[#eeece6] px-4 py-2 text-[11px] text-gray-400 md:hidden">
//               Swipe sideways for all days · tap a name to open their calendar
//             </p>
//           </section>
//         ) : (
//           /* ── Single employee: full month calendar ── */
//           <section className="rounded-xl border border-[#e4e2da] bg-white p-3 shadow-sm sm:p-5">
//             <div className="mb-4 flex items-center justify-between gap-2">
//               <h2 className="text-base font-semibold text-gray-900 sm:text-lg">
//                 {selectedName}
//               </h2>
//               <button
//                 type="button"
//                 onClick={() => setSelectedEmployee("all")}
//                 className="text-xs font-semibold text-[#176b5b] hover:underline sm:text-sm"
//               >
//                 ← All employees
//               </button>
//             </div>

//             {/* Weekday headers */}
//             <div className="mb-2 grid grid-cols-7 gap-1.5 sm:gap-2">
//               {WEEKDAYS.map((w) => (
//                 <div
//                   key={w}
//                   className="py-1 text-center text-[11px] font-semibold uppercase tracking-wide text-gray-400 sm:text-xs"
//                 >
//                   {w}
//                 </div>
//               ))}
//             </div>

//             {/* Day cells — fills the page */}
//             <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
//               {calendarCells.map((day, idx) => {
//                 if (day === null) {
//                   return (
//                     <div
//                       key={`blank-${idx}`}
//                       className="min-h-[72px] rounded-xl bg-transparent sm:min-h-[96px]"
//                     />
//                   );
//                 }
//                 const st = getDayStatusForSelected(day);
//                 const rec = getRecord(selectedEmployee, day);
//                 const isToday =
//                   day === now.getDate() &&
//                   viewMonth === now.getMonth() &&
//                   viewYear === now.getFullYear();

//                 return (
//                   <div
//                     key={day}
//                     className={`flex min-h-[72px] flex-col rounded-xl border p-1.5 sm:min-h-[96px] sm:p-2 ${statusCellClass(
//                       st
//                     )} ${isToday ? "ring-2 ring-[#176b5b] ring-offset-1" : ""}`}
//                     title={statusLabel(st)}
//                   >
//                     <div className="flex items-start justify-between gap-1">
//                       <span
//                         className={`text-xs font-bold sm:text-sm ${
//                           isToday ? "text-[#176b5b]" : "text-gray-800"
//                         }`}
//                       >
//                         {day}
//                       </span>
//                       <span
//                         className={`mt-0.5 h-2 w-2 shrink-0 rounded-full sm:h-2.5 sm:w-2.5 ${
//                           st === "Empty"
//                             ? "bg-slate-200"
//                             : statusDotClass(st).split(" ")[0]
//                         }`}
//                       />
//                     </div>
//                     {st !== "Empty" && (
//                       <p className="mt-1 truncate text-[10px] font-semibold leading-tight sm:text-[11px]">
//                         {st}
//                       </p>
//                     )}
//                     {rec?.checkIn && (
//                       <p className="mt-auto truncate text-[9px] opacity-70 sm:text-[10px]">
//                         {rec.checkIn}
//                         {rec.checkOut ? `–${rec.checkOut}` : ""}
//                       </p>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </section>
//         )}

//         <div className="flex flex-wrap gap-2">
//           <Link
//             href="/interior/hrms/attendance"
//             className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
//           >
//             Mark attendance
//           </Link>
//         </div>
//       </main>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import {
//   getAllAttendanceHistory,
//   type InteriorAttendance,
// } from "@/modules/interior/services/attendanceService";
// import { ChevronLeft, ChevronRight, Download } from "lucide-react";

// type DayStatus =
//   | "Present"
//   | "Absent"
//   | "Late"
//   | "Half Day"
//   | "Leave"
//   | "Holiday"
//   | "Empty";

// function normalizeStatus(raw?: string): DayStatus {
//   const s = (raw || "").toLowerCase().trim();
//   if (!s) return "Empty";
//   if (s.includes("holiday")) return "Holiday";
//   if (s.includes("present") || s === "p") return "Present";
//   if (s.includes("late")) return "Late";
//   if (s.includes("half")) return "Half Day";
//   if (s.includes("leave")) return "Leave";
//   if (s.includes("absent") || s === "a" || s.includes("miss")) return "Absent";
//   return "Empty";
// }

// function statusDotClass(status: DayStatus) {
//   switch (status) {
//     case "Present":
//       return "bg-emerald-500";
//     case "Absent":
//       return "bg-red-400";
//     case "Late":
//       return "bg-amber-400";
//     case "Half Day":
//       return "bg-blue-400";
//     case "Leave":
//       return "bg-purple-400";
//     case "Holiday":
//       return "bg-indigo-400";
//     default:
//       return "bg-transparent";
//   }
// }

// function statusPillClass(status: DayStatus) {
//   switch (status) {
//     case "Present":
//       return "bg-emerald-100 text-emerald-800";
//     case "Absent":
//       return "bg-red-100 text-red-800";
//     case "Late":
//       return "bg-amber-100 text-amber-900";
//     case "Half Day":
//       return "bg-blue-100 text-blue-800";
//     case "Leave":
//       return "bg-purple-100 text-purple-800";
//     case "Holiday":
//       return "bg-indigo-100 text-indigo-800";
//     default:
//       return "";
//   }
// }

// function statusLabel(status: DayStatus) {
//   if (status === "Empty") return "";
//   return status;
// }

// const MONTH_NAMES = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// export default function AttendanceHistoryPage() {
//   const [rows, setRows] = useState<InteriorAttendance[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedEmployee, setSelectedEmployee] = useState<string>("all");

//   const now = new Date();
//   const [viewYear, setViewYear] = useState(now.getFullYear());
//   const [viewMonth, setViewMonth] = useState(now.getMonth());

//   useEffect(() => {
//     let cancelled = false;
//     (async () => {
//       setLoading(true);
//       try {
//         const data = await getAllAttendanceHistory();
//         if (!cancelled) setRows(data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     })();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const daysInMonth = useMemo(
//     () => new Date(viewYear, viewMonth + 1, 0).getDate(),
//     [viewYear, viewMonth]
//   );

//   const firstWeekday = useMemo(
//     () => new Date(viewYear, viewMonth, 1).getDay(),
//     [viewYear, viewMonth]
//   );

//   const dayNumbers = useMemo(
//     () => Array.from({ length: daysInMonth }, (_, i) => i + 1),
//     [daysInMonth]
//   );

//   const employees = useMemo(() => {
//     const map = new Map<string, string>();
//     for (const r of rows) {
//       const id = r.employeeId || r.employeeDocId || r.name || "";
//       if (!id) continue;
//       if (!map.has(id)) map.set(id, r.name || id);
//     }
//     return Array.from(map.entries())
//       .map(([id, name]) => ({ id, name }))
//       .sort((a, b) => a.name.localeCompare(b.name));
//   }, [rows]);

//   const recordMap = useMemo(() => {
//     const map = new Map<
//       string,
//       { status: DayStatus; record: InteriorAttendance }
//     >();
//     const prefix = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-`;

//     for (const r of rows) {
//       const date = (r.date || "").slice(0, 10);
//       if (!date.startsWith(prefix)) continue;
//       const empId = r.employeeId || r.employeeDocId || r.name || "";
//       if (!empId) continue;
//       map.set(`${empId}|${date}`, {
//         status: normalizeStatus(r.status),
//         record: r,
//       });
//     }
//     return map;
//   }, [rows, viewYear, viewMonth]);

//   function getStatus(employeeId: string, day: number): DayStatus {
//     const date = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
//     return recordMap.get(`${employeeId}|${date}`)?.status || "Empty";
//   }

//   function getRecord(employeeId: string, day: number) {
//     const date = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
//     return recordMap.get(`${employeeId}|${date}`)?.record;
//   }

//   function getDayStatusForSelected(day: number): DayStatus {
//     if (selectedEmployee === "all") return "Empty";
//     return getStatus(selectedEmployee, day);
//   }

//   function prevMonth() {
//     if (viewMonth === 0) {
//       setViewMonth(11);
//       setViewYear((y) => y - 1);
//     } else {
//       setViewMonth((m) => m - 1);
//     }
//   }

//   function nextMonth() {
//     if (viewMonth === 11) {
//       setViewMonth(0);
//       setViewYear((y) => y + 1);
//     } else {
//       setViewMonth((m) => m + 1);
//     }
//   }

//   function goToday() {
//     const d = new Date();
//     setViewYear(d.getFullYear());
//     setViewMonth(d.getMonth());
//   }

//   const selectedName =
//     selectedEmployee === "all"
//       ? "All employees"
//       : employees.find((e) => e.id === selectedEmployee)?.name ||
//         selectedEmployee;

//   const monthSummary = useMemo(() => {
//     const counts: Record<DayStatus, number> = {
//       Present: 0,
//       Absent: 0,
//       Late: 0,
//       "Half Day": 0,
//       Leave: 0,
//       Holiday: 0,
//       Empty: 0,
//     };

//     if (selectedEmployee === "all") {
//       for (const emp of employees) {
//         for (const d of dayNumbers) {
//           counts[getStatus(emp.id, d)]++;
//         }
//       }
//     } else {
//       for (const d of dayNumbers) {
//         counts[getStatus(selectedEmployee, d)]++;
//       }
//     }
//     return counts;
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [selectedEmployee, employees, dayNumbers, recordMap]);

//   /** Google-style weeks: each row is one week (7 cells) */
//   const weeks = useMemo(() => {
//     const cells: (number | null)[] = [];
//     for (let i = 0; i < firstWeekday; i++) cells.push(null);
//     for (let d = 1; d <= daysInMonth; d++) cells.push(d);
//     while (cells.length % 7 !== 0) cells.push(null);

//     const rowsWeeks: (number | null)[][] = [];
//     for (let i = 0; i < cells.length; i += 7) {
//       rowsWeeks.push(cells.slice(i, i + 7));
//     }
//     return rowsWeeks;
//   }, [firstWeekday, daysInMonth]);

//   function exportCsv() {
//     if (selectedEmployee === "all") {
//       const headers = ["Employee", "Employee ID", ...dayNumbers.map(String)];
//       const body = employees.map((emp) => {
//         const cells = dayNumbers.map((d) => {
//           const s = getStatus(emp.id, d);
//           return s === "Empty" ? "" : s;
//         });
//         return [emp.name, emp.id, ...cells]
//           .map((cell) => `"${String(cell).replace(/"/g, '""')}"`)
//           .join(",");
//       });
//       const blob = new Blob([[headers.join(","), ...body].join("\n")], {
//         type: "text/csv;charset=utf-8;",
//       });
//       const url = URL.createObjectURL(blob);
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = `attendance-${MONTH_NAMES[viewMonth]}-${viewYear}.csv`;
//       a.click();
//       URL.revokeObjectURL(url);
//       return;
//     }

//     const headers = ["Date", "Status", "Check In", "Check Out", "Hours", "OT"];
//     const body = dayNumbers.map((d) => {
//       const rec = getRecord(selectedEmployee, d);
//       const date = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
//       const st = getStatus(selectedEmployee, d);
//       return [
//         date,
//         st === "Empty" ? "" : st,
//         rec?.checkIn || "",
//         rec?.checkOut || "",
//         rec?.workHours || "",
//         rec?.overtime || "",
//       ]
//         .map((cell) => `"${String(cell).replace(/"/g, '""')}"`)
//         .join(",");
//     });
//     const blob = new Blob([[headers.join(","), ...body].join("\n")], {
//       type: "text/csv;charset=utf-8;",
//     });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `attendance-${selectedName}-${MONTH_NAMES[viewMonth]}-${viewYear}.csv`;
//     a.click();
//     URL.revokeObjectURL(url);
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       {/* Header */}
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1600px] px-3 py-4 sm:px-5 sm:py-5 lg:px-8">
//           <Link
//             href="/interior/hrms"
//             className="mb-2 inline-flex text-xs font-semibold text-[#176b5b] hover:underline sm:text-sm"
//           >
//             ← Back to HRMS
//           </Link>
//           <div className="flex items-start justify-between gap-3 sm:items-center">
//             <div className="min-w-0 flex-1">
//               <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
//                 Attendance
//               </h1>
//               <p className="mt-1 text-xs text-gray-500 sm:text-sm">
//                 Calendar view · Firebase records
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>

//             <div className="flex shrink-0 flex-col items-end gap-2 sm:flex-row sm:items-center">
//               <select
//                 value={selectedEmployee}
//                 onChange={(e) => setSelectedEmployee(e.target.value)}
//                 className="h-10 max-w-[200px] rounded-xl border border-gray-200 bg-white px-3 text-xs font-medium outline-none focus:border-[#176b5b] sm:max-w-[240px] sm:text-sm"
//               >
//                 <option value="all">All employees</option>
//                 {employees.map((e) => (
//                   <option key={e.id} value={e.id}>
//                     {e.name}
//                   </option>
//                 ))}
//               </select>
//               <button
//                 type="button"
//                 onClick={exportCsv}
//                 className="inline-flex items-center gap-1.5 rounded-xl bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125848] sm:gap-2 sm:px-4 sm:text-sm"
//               >
//                 <Download size={16} strokeWidth={2.5} />
//                 <span className="hidden sm:inline">Export</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto flex max-w-[1600px] flex-col gap-4 px-3 py-4 sm:gap-5 sm:px-5 sm:py-6 lg:px-8">
//         {/* Toolbar like Google Calendar */}
//         <section className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#e4e2da] bg-white px-3 py-3 sm:px-4">
//           <div className="flex items-center gap-1 sm:gap-2">
//             <button
//               type="button"
//               onClick={goToday}
//               className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 sm:text-sm"
//             >
//               Today
//             </button>
//             <button
//               type="button"
//               onClick={prevMonth}
//               className="inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100"
//               aria-label="Previous month"
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <button
//               type="button"
//               onClick={nextMonth}
//               className="inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100"
//               aria-label="Next month"
//             >
//               <ChevronRight size={20} />
//             </button>
//             <h2 className="ml-1 text-lg font-semibold text-gray-900 sm:text-xl">
//               {MONTH_NAMES[viewMonth]} {viewYear}
//             </h2>
//           </div>
//           <p className="text-sm font-medium text-gray-600">{selectedName}</p>
//         </section>

//         {/* Legend */}
//         <div className="flex flex-wrap gap-2 text-xs">
//           {(
//             [
//               ["Present", "bg-emerald-500", monthSummary.Present],
//               ["Absent", "bg-red-400", monthSummary.Absent],
//               ["Late", "bg-amber-400", monthSummary.Late],
//               ["Half Day", "bg-blue-400", monthSummary["Half Day"]],
//               ["Leave", "bg-purple-400", monthSummary.Leave],
//               ["Holiday", "bg-indigo-400", monthSummary.Holiday],
//             ] as const
//           ).map(([label, color, count]) => (
//             <span
//               key={label}
//               className="inline-flex items-center gap-1.5 rounded-full border border-[#e4e2da] bg-white px-2.5 py-1"
//             >
//               <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
//               {label}
//               <span className="font-semibold text-gray-800">{count}</span>
//             </span>
//           ))}
//         </div>

//         {loading ? (
//           <p className="rounded-xl border border-[#e4e2da] bg-white py-20 text-center text-sm text-gray-500">
//             Loading attendance…
//           </p>
//         ) : selectedEmployee === "all" ? (
//           /* All employees matrix */
//           <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//             {employees.length === 0 ? (
//               <p className="px-5 py-16 text-center text-sm text-gray-500">
//                 No attendance records yet. Mark attendance on the daily page
//                 first.
//               </p>
//             ) : (
//               <div className="overflow-x-auto">
//                 <table className="w-full min-w-max border-collapse text-left">
//                   <thead>
//                     <tr className="bg-[#fafaf8] text-xs text-gray-500">
//                       <th className="sticky left-0 z-10 min-w-[140px] border-b border-r border-[#eeece6] bg-[#fafaf8] px-4 py-3 text-left font-semibold sm:min-w-[180px]">
//                         Employee
//                       </th>
//                       {dayNumbers.map((d) => (
//                         <th
//                           key={d}
//                           className="border-b border-[#eeece6] px-1 py-3 text-center font-semibold"
//                           style={{ minWidth: 36 }}
//                         >
//                           {d}
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {employees.map((emp) => (
//                       <tr
//                         key={emp.id}
//                         className="border-b border-[#eeece6] last:border-0 hover:bg-[#fafaf8]/60"
//                       >
//                         <td className="sticky left-0 z-10 border-r border-[#eeece6] bg-white px-4 py-3">
//                           <button
//                             type="button"
//                             onClick={() => setSelectedEmployee(emp.id)}
//                             className="text-left"
//                           >
//                             <p className="truncate text-sm font-semibold text-gray-900 hover:text-[#176b5b]">
//                               {emp.name}
//                             </p>
//                             <p className="truncate text-[11px] text-[#176b5b]">
//                               {emp.id}
//                             </p>
//                           </button>
//                         </td>
//                         {dayNumbers.map((d) => {
//                           const st = getStatus(emp.id, d);
//                           return (
//                             <td
//                               key={d}
//                               className="px-1 py-2.5 text-center"
//                               title={`${emp.name} · ${d} ${MONTH_NAMES[viewMonth]} · ${statusLabel(st) || "—"}`}
//                             >
//                               <span
//                                 className={`mx-auto inline-block h-3.5 w-3.5 rounded-full ${statusDotClass(
//                                   st
//                                 )} ${st === "Empty" ? "bg-slate-200" : ""}`}
//                               />
//                             </td>
//                           );
//                         })}
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//             <p className="border-t border-[#eeece6] px-4 py-2 text-[11px] text-gray-400 md:hidden">
//               Swipe for all days · tap a name for calendar
//             </p>
//           </section>
//         ) : (
//           /* Google Calendar–style month: weeks as rows */
//           <section className="flex min-h-[70vh] flex-1 flex-col overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//             <div className="flex items-center justify-between border-b border-[#eeece6] px-3 py-2.5 sm:px-4">
//               <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
//                 {selectedName}
//               </h3>
//               <button
//                 type="button"
//                 onClick={() => setSelectedEmployee("all")}
//                 className="text-xs font-semibold text-[#176b5b] hover:underline sm:text-sm"
//               >
//                 ← All employees
//               </button>
//             </div>

//             {/* Weekday header row */}
//             <div className="grid grid-cols-7 border-b border-[#eeece6] bg-[#fafaf8]">
//               {WEEKDAYS.map((w) => (
//                 <div
//                   key={w}
//                   className="border-r border-[#eeece6] py-2 text-center text-[11px] font-semibold uppercase tracking-wide text-gray-500 last:border-r-0 sm:text-xs"
//                 >
//                   {w}
//                 </div>
//               ))}
//             </div>

//             {/* Week rows — equal height, fills remaining space */}
//             <div className="flex flex-1 flex-col">
//               {weeks.map((week, wi) => (
//                 <div
//                   key={wi}
//                   className="grid min-h-[88px] flex-1 grid-cols-7 border-b border-[#eeece6] last:border-b-0 sm:min-h-[110px]"
//                 >
//                   {week.map((day, di) => {
//                     if (day === null) {
//                       return (
//                         <div
//                           key={`b-${wi}-${di}`}
//                           className="border-r border-[#eeece6] bg-[#fafaf8]/50 last:border-r-0"
//                         />
//                       );
//                     }

//                     const st = getDayStatusForSelected(day);
//                     const rec = getRecord(selectedEmployee, day);
//                     const isToday =
//                       day === now.getDate() &&
//                       viewMonth === now.getMonth() &&
//                       viewYear === now.getFullYear();
//                     const isWeekend = di === 0 || di === 6;

//                     return (
//                       <div
//                         key={day}
//                         className={`relative flex flex-col border-r border-[#eeece6] p-1 last:border-r-0 sm:p-1.5 ${
//                           isWeekend ? "bg-[#fafafa]" : "bg-white"
//                         }`}
//                       >
//                         {/* Date number — Google style circle for today */}
//                         <div className="mb-1 flex justify-end sm:justify-start">
//                           <span
//                             className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium sm:h-7 sm:w-7 sm:text-sm ${
//                               isToday
//                                 ? "bg-[#176b5b] font-bold text-white"
//                                 : "text-gray-700"
//                             }`}
//                           >
//                             {day}
//                           </span>
//                         </div>

//                         {/* Event-style pills (like Google Calendar events) */}
//                         <div className="mt-auto flex flex-col gap-0.5 overflow-hidden">
//                           {st !== "Empty" && (
//                             <span
//                               className={`truncate rounded px-1 py-0.5 text-[10px] font-semibold leading-tight sm:text-[11px] ${statusPillClass(
//                                 st
//                               )}`}
//                             >
//                               {st}
//                             </span>
//                           )}
//                           {rec?.checkIn && (
//                             <span className="truncate px-1 text-[9px] text-gray-500 sm:text-[10px]">
//                               {rec.checkIn}
//                               {rec.checkOut ? ` – ${rec.checkOut}` : ""}
//                             </span>
//                           )}
//                           {rec?.workHours && (
//                             <span className="hidden truncate px-1 text-[9px] text-gray-400 sm:block sm:text-[10px]">
//                               {rec.workHours}
//                             </span>
//                           )}
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         <Link
//           href="/interior/hrms/attendance"
//           className="inline-flex w-fit rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
//         >
//           Mark attendance
//         </Link>
//       </main>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import {
//   getAllAttendanceHistory,
//   type InteriorAttendance,
// } from "@/modules/interior/services/attendanceService";
// import { ChevronLeft, ChevronRight, Download } from "lucide-react";

// type DayStatus =
//   | "Present"
//   | "Absent"
//   | "Late"
//   | "Half Day"
//   | "Leave"
//   | "Holiday"
//   | "Empty";

// function normalizeStatus(raw?: string): DayStatus {
//   const s = (raw || "").toLowerCase().trim();
//   if (!s) return "Empty";
//   if (s.includes("holiday")) return "Holiday";
//   if (s.includes("present") || s === "p") return "Present";
//   if (s.includes("late")) return "Late";
//   if (s.includes("half")) return "Half Day";
//   if (s.includes("leave")) return "Leave";
//   if (s.includes("absent") || s === "a" || s.includes("miss")) return "Absent";
//   return "Empty";
// }

// function statusDotClass(status: DayStatus) {
//   switch (status) {
//     case "Present":
//       return "bg-emerald-500";
//     case "Absent":
//       return "bg-red-400";
//     case "Late":
//       return "bg-amber-400";
//     case "Half Day":
//       return "bg-blue-400";
//     case "Leave":
//       return "bg-purple-400";
//     case "Holiday":
//       return "bg-indigo-400";
//     default:
//       return "bg-transparent";
//   }
// }

// function statusPillClass(status: DayStatus) {
//   switch (status) {
//     case "Present":
//       return "bg-emerald-100 text-emerald-800";
//     case "Absent":
//       return "bg-red-100 text-red-800";
//     case "Late":
//       return "bg-amber-100 text-amber-900";
//     case "Half Day":
//       return "bg-blue-100 text-blue-800";
//     case "Leave":
//       return "bg-purple-100 text-purple-800";
//     case "Holiday":
//       return "bg-indigo-100 text-indigo-800";
//     default:
//       return "";
//   }
// }

// function statusLabel(status: DayStatus) {
//   if (status === "Empty") return "";
//   return status;
// }

// const MONTH_NAMES = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// export default function AttendanceHistoryPage() {
//   const [rows, setRows] = useState<InteriorAttendance[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedEmployee, setSelectedEmployee] = useState<string>("all");

//   const now = new Date();
//   const [viewYear, setViewYear] = useState(now.getFullYear());
//   const [viewMonth, setViewMonth] = useState(now.getMonth());

//   useEffect(() => {
//     let cancelled = false;
//     (async () => {
//       setLoading(true);
//       try {
//         const data = await getAllAttendanceHistory();
//         if (!cancelled) setRows(data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     })();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const daysInMonth = useMemo(
//     () => new Date(viewYear, viewMonth + 1, 0).getDate(),
//     [viewYear, viewMonth]
//   );

//   const firstWeekday = useMemo(
//     () => new Date(viewYear, viewMonth, 1).getDay(),
//     [viewYear, viewMonth]
//   );

//   const dayNumbers = useMemo(
//     () => Array.from({ length: daysInMonth }, (_, i) => i + 1),
//     [daysInMonth]
//   );

//   const employees = useMemo(() => {
//     const map = new Map<string, string>();
//     for (const r of rows) {
//       const id = r.employeeId || r.employeeDocId || r.name || "";
//       if (!id) continue;
//       if (!map.has(id)) map.set(id, r.name || id);
//     }
//     return Array.from(map.entries())
//       .map(([id, name]) => ({ id, name }))
//       .sort((a, b) => a.name.localeCompare(b.name));
//   }, [rows]);

//   const recordMap = useMemo(() => {
//     const map = new Map<
//       string,
//       { status: DayStatus; record: InteriorAttendance }
//     >();
//     const prefix = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-`;
//     for (const r of rows) {
//       const date = (r.date || "").slice(0, 10);
//       if (!date.startsWith(prefix)) continue;
//       const empId = r.employeeId || r.employeeDocId || r.name || "";
//       if (!empId) continue;
//       map.set(`${empId}|${date}`, {
//         status: normalizeStatus(r.status),
//         record: r,
//       });
//     }
//     return map;
//   }, [rows, viewYear, viewMonth]);

//   function getStatus(employeeId: string, day: number): DayStatus {
//     const date = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
//     return recordMap.get(`${employeeId}|${date}`)?.status || "Empty";
//   }

//   function getRecord(employeeId: string, day: number) {
//     const date = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
//     return recordMap.get(`${employeeId}|${date}`)?.record;
//   }

//   function getDayStatusForSelected(day: number): DayStatus {
//     if (selectedEmployee === "all") return "Empty";
//     return getStatus(selectedEmployee, day);
//   }

//   function prevMonth() {
//     if (viewMonth === 0) {
//       setViewMonth(11);
//       setViewYear((y) => y - 1);
//     } else {
//       setViewMonth((m) => m - 1);
//     }
//   }

//   function nextMonth() {
//     if (viewMonth === 11) {
//       setViewMonth(0);
//       setViewYear((y) => y + 1);
//     } else {
//       setViewMonth((m) => m + 1);
//     }
//   }

//   function goToday() {
//     const d = new Date();
//     setViewYear(d.getFullYear());
//     setViewMonth(d.getMonth());
//   }

//   const selectedName =
//     selectedEmployee === "all"
//       ? "All employees"
//       : employees.find((e) => e.id === selectedEmployee)?.name ||
//         selectedEmployee;

//   const monthSummary = useMemo(() => {
//     const counts: Record<DayStatus, number> = {
//       Present: 0,
//       Absent: 0,
//       Late: 0,
//       "Half Day": 0,
//       Leave: 0,
//       Holiday: 0,
//       Empty: 0,
//     };
//     if (selectedEmployee === "all") {
//       for (const emp of employees) {
//         for (const d of dayNumbers) {
//           counts[getStatus(emp.id, d)]++;
//         }
//       }
//     } else {
//       for (const d of dayNumbers) {
//         counts[getStatus(selectedEmployee, d)]++;
//       }
//     }
//     return counts;
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [selectedEmployee, employees, dayNumbers, recordMap]);

//   const weeks = useMemo(() => {
//     const cells: (number | null)[] = [];
//     for (let i = 0; i < firstWeekday; i++) cells.push(null);
//     for (let d = 1; d <= daysInMonth; d++) cells.push(d);
//     while (cells.length % 7 !== 0) cells.push(null);
//     const rowsWeeks: (number | null)[][] = [];
//     for (let i = 0; i < cells.length; i += 7) {
//       rowsWeeks.push(cells.slice(i, i + 7));
//     }
//     return rowsWeeks;
//   }, [firstWeekday, daysInMonth]);

//   function exportCsv() {
//     if (selectedEmployee === "all") {
//       const headers = ["Employee", "Employee ID", ...dayNumbers.map(String)];
//       const body = employees.map((emp) => {
//         const cells = dayNumbers.map((d) => {
//           const s = getStatus(emp.id, d);
//           return s === "Empty" ? "" : s;
//         });
//         return [emp.name, emp.id, ...cells]
//           .map((cell) => `"${String(cell).replace(/"/g, '""')}"`)
//           .join(",");
//       });
//       const blob = new Blob([[headers.join(","), ...body].join("\n")], {
//         type: "text/csv;charset=utf-8;",
//       });
//       const url = URL.createObjectURL(blob);
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = `attendance-${MONTH_NAMES[viewMonth]}-${viewYear}.csv`;
//       a.click();
//       URL.revokeObjectURL(url);
//       return;
//     }

//     const headers = ["Date", "Status", "Check In", "Check Out", "Hours", "OT"];
//     const body = dayNumbers.map((d) => {
//       const rec = getRecord(selectedEmployee, d);
//       const date = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
//       const st = getStatus(selectedEmployee, d);
//       return [
//         date,
//         st === "Empty" ? "" : st,
//         rec?.checkIn || "",
//         rec?.checkOut || "",
//         rec?.workHours || "",
//         rec?.overtime || "",
//       ]
//         .map((cell) => `"${String(cell).replace(/"/g, '""')}"`)
//         .join(",");
//     });
//     const blob = new Blob([[headers.join(","), ...body].join("\n")], {
//       type: "text/csv;charset=utf-8;",
//     });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `attendance-${selectedName}-${MONTH_NAMES[viewMonth]}-${viewYear}.csv`;
//     a.click();
//     URL.revokeObjectURL(url);
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       {/* Header */}
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1600px] px-3 py-3 sm:px-5 sm:py-4 lg:px-8">
//           <Link
//             href="/interior/hrms"
//             className="mb-1.5 inline-flex text-xs font-semibold text-[#176b5b] hover:underline sm:mb-2 sm:text-sm"
//           >
//             ← Back to HRMS
//           </Link>

//           <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
//             <div className="min-w-0">
//               <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
//                 Attendance History
//               </h1>
//               <p className="mt-0.5 text-xs text-gray-500 sm:text-sm">
//                 Calendar view · Firebase records
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>

//             <div className="flex flex-wrap items-center gap-2">
//               <select
//                 value={selectedEmployee}
//                 onChange={(e) => setSelectedEmployee(e.target.value)}
//                 className="h-10 min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-3 text-xs font-medium outline-none focus:border-[#176b5b] sm:min-w-[200px] sm:flex-none sm:text-sm"
//               >
//                 <option value="all">All employees</option>
//                 {employees.map((e) => (
//                   <option key={e.id} value={e.id}>
//                     {e.name}
//                   </option>
//                 ))}
//               </select>

//               <button
//                 type="button"
//                 onClick={exportCsv}
//                 className="inline-flex h-10 items-center gap-1.5 rounded-xl bg-[#176b5b] px-3 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125848] sm:px-4 sm:text-sm"
//               >
//                 <Download size={16} strokeWidth={2.5} />
//                 <span className="hidden xs:inline sm:inline">Export</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto flex max-w-[1600px] flex-col gap-3 px-3 py-3 sm:gap-4 sm:px-5 sm:py-5 lg:px-8">
//         {/* Toolbar */}
//         <section className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[#e4e2da] bg-white px-2.5 py-2.5 sm:px-4 sm:py-3">
//           <div className="flex items-center gap-1">
//             <button
//               type="button"
//               onClick={goToday}
//               className="rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 sm:px-3 sm:text-sm"
//             >
//               Today
//             </button>
//             <button
//               type="button"
//               onClick={prevMonth}
//               className="inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100"
//               aria-label="Previous month"
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <button
//               type="button"
//               onClick={nextMonth}
//               className="inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100"
//               aria-label="Next month"
//             >
//               <ChevronRight size={20} />
//             </button>
//             <h2 className="ml-1 text-base font-semibold text-gray-900 sm:text-xl">
//               {MONTH_NAMES[viewMonth]} {viewYear}
//             </h2>
//           </div>
//           <p className="text-xs font-medium text-gray-600 sm:text-sm">
//             {selectedName}
//           </p>
//         </section>

//         {/* Legend */}
//         <div className="flex flex-wrap gap-1.5 text-[11px] sm:gap-2 sm:text-xs">
//           {(
//             [
//               ["Present", "bg-emerald-500", monthSummary.Present],
//               ["Absent", "bg-red-400", monthSummary.Absent],
//               ["Late", "bg-amber-400", monthSummary.Late],
//               ["Half Day", "bg-blue-400", monthSummary["Half Day"]],
//               ["Leave", "bg-purple-400", monthSummary.Leave],
//               ["Holiday", "bg-indigo-400", monthSummary.Holiday],
//             ] as const
//           ).map(([label, color, count]) => (
//             <span
//               key={label}
//               className="inline-flex items-center gap-1 rounded-full border border-[#e4e2da] bg-white px-2 py-1 sm:gap-1.5 sm:px-2.5"
//             >
//               <span className={`h-2 w-2 rounded-full sm:h-2.5 sm:w-2.5 ${color}`} />
//               <span className="hidden xs:inline sm:inline">{label}</span>
//               <span className="font-semibold text-gray-800">{count}</span>
//             </span>
//           ))}
//         </div>

//         {loading ? (
//           <div className="rounded-xl border border-[#e4e2da] bg-white py-16 text-center text-sm text-gray-500 sm:py-20">
//             Loading attendance…
//           </div>
//         ) : selectedEmployee === "all" ? (
//           /* All employees matrix */
//           <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//             {employees.length === 0 ? (
//               <p className="px-4 py-12 text-center text-sm text-gray-500 sm:px-5 sm:py-16">
//                 No attendance records yet. Mark attendance on the daily page
//                 first.
//               </p>
//             ) : (
//               <div className="overflow-x-auto overscroll-x-contain">
//                 <table className="w-full min-w-max border-collapse text-left">
//                   <thead>
//                     <tr className="bg-[#fafaf8] text-[11px] text-gray-500 sm:text-xs">
//                       <th className="sticky left-0 z-10 min-w-[120px] border-b border-r border-[#eeece6] bg-[#fafaf8] px-3 py-2.5 text-left font-semibold sm:min-w-[160px] sm:px-4 sm:py-3">
//                         Employee
//                       </th>
//                       {dayNumbers.map((d) => (
//                         <th
//                           key={d}
//                           className="border-b border-[#eeece6] px-0.5 py-2.5 text-center font-semibold sm:px-1 sm:py-3"
//                           style={{ minWidth: 32 }}
//                         >
//                           {d}
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {employees.map((emp) => (
//                       <tr
//                         key={emp.id}
//                         className="border-b border-[#eeece6] last:border-0 hover:bg-[#fafaf8]/60"
//                       >
//                         <td className="sticky left-0 z-10 border-r border-[#eeece6] bg-white px-3 py-2.5 sm:px-4 sm:py-3">
//                           <button
//                             type="button"
//                             onClick={() => setSelectedEmployee(emp.id)}
//                             className="w-full text-left"
//                           >
//                             <p className="truncate text-xs font-semibold text-gray-900 hover:text-[#176b5b] sm:text-sm">
//                               {emp.name}
//                             </p>
//                             <p className="truncate text-[10px] text-[#176b5b] sm:text-[11px]">
//                               {emp.id}
//                             </p>
//                           </button>
//                         </td>
//                         {dayNumbers.map((d) => {
//                           const st = getStatus(emp.id, d);
//                           return (
//                             <td
//                               key={d}
//                               className="px-0.5 py-2 text-center sm:px-1 sm:py-2.5"
//                               title={`${emp.name} · ${d} ${MONTH_NAMES[viewMonth]} · ${statusLabel(st) || "—"}`}
//                             >
//                               <span
//                                 className={`mx-auto inline-block h-3 w-3 rounded-full sm:h-3.5 sm:w-3.5 ${statusDotClass(
//                                   st
//                                 )} ${st === "Empty" ? "bg-slate-200" : ""}`}
//                               />
//                             </td>
//                           );
//                         })}
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//             <p className="border-t border-[#eeece6] px-3 py-2 text-[10px] text-gray-400 sm:hidden">
//               Swipe horizontally · tap a name for calendar view
//             </p>
//           </section>
//         ) : (
//           /* Single employee – Google Calendar style */
//           <section className="flex flex-col overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//             <div className="flex items-center justify-between border-b border-[#eeece6] px-3 py-2.5 sm:px-4">
//               <h3 className="truncate text-sm font-semibold text-gray-900 sm:text-base">
//                 {selectedName}
//               </h3>
//               <button
//                 type="button"
//                 onClick={() => setSelectedEmployee("all")}
//                 className="shrink-0 text-xs font-semibold text-[#176b5b] hover:underline sm:text-sm"
//               >
//                 ← All employees
//               </button>
//             </div>

//             {/* Weekday header */}
//             <div className="grid grid-cols-7 border-b border-[#eeece6] bg-[#fafaf8]">
//               {WEEKDAYS.map((w) => (
//                 <div
//                   key={w}
//                   className="border-r border-[#eeece6] py-1.5 text-center text-[10px] font-semibold uppercase tracking-wide text-gray-500 last:border-r-0 sm:py-2 sm:text-xs"
//                 >
//                   {w}
//                 </div>
//               ))}
//             </div>

//             {/* Week rows */}
//             <div className="flex flex-col">
//               {weeks.map((week, wi) => (
//                 <div
//                   key={wi}
//                   className="grid grid-cols-7 border-b border-[#eeece6] last:border-b-0"
//                   style={{ minHeight: "72px" }}
//                 >
//                   {week.map((day, di) => {
//                     if (day === null) {
//                       return (
//                         <div
//                           key={`b-${wi}-${di}`}
//                           className="border-r border-[#eeece6] bg-[#fafaf8]/50 last:border-r-0"
//                         />
//                       );
//                     }

//                     const st = getDayStatusForSelected(day);
//                     const rec = getRecord(selectedEmployee, day);
//                     const isToday =
//                       day === now.getDate() &&
//                       viewMonth === now.getMonth() &&
//                       viewYear === now.getFullYear();
//                     const isWeekend = di === 0 || di === 6;

//                     return (
//                       <div
//                         key={day}
//                         className={`relative flex min-h-[72px] flex-col border-r border-[#eeece6] p-1 last:border-r-0 sm:min-h-[96px] sm:p-1.5 ${
//                           isWeekend ? "bg-[#fafafa]" : "bg-white"
//                         }`}
//                       >
//                         <div className="mb-0.5 flex justify-end sm:mb-1 sm:justify-start">
//                           <span
//                             className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-medium sm:h-7 sm:w-7 sm:text-sm ${
//                               isToday
//                                 ? "bg-[#176b5b] font-bold text-white"
//                                 : "text-gray-700"
//                             }`}
//                           >
//                             {day}
//                           </span>
//                         </div>

//                         <div className="mt-auto flex flex-col gap-0.5 overflow-hidden">
//                           {st !== "Empty" && (
//                             <span
//                               className={`truncate rounded px-1 py-0.5 text-[9px] font-semibold leading-tight sm:text-[11px] ${statusPillClass(
//                                 st
//                               )}`}
//                             >
//                               {st}
//                             </span>
//                           )}
//                           {rec?.checkIn && (
//                             <span className="truncate px-0.5 text-[8px] text-gray-500 sm:text-[10px]">
//                               {rec.checkIn}
//                               {rec.checkOut ? ` – ${rec.checkOut}` : ""}
//                             </span>
//                           )}
//                           {rec?.workHours && (
//                             <span className="hidden truncate px-0.5 text-[9px] text-gray-400 sm:block sm:text-[10px]">
//                               {rec.workHours}
//                             </span>
//                           )}
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         <Link
//           href="/interior/hrms/attendance"
//           className="inline-flex w-fit items-center rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
//         >
//           Mark attendance
//         </Link>
//       </main>
//     </div>
//   );
// }


"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  getAllAttendanceHistory,
  ensurePastAbsentsForMonth,
  type InteriorAttendance,
} from "@/modules/interior/services/attendanceService";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";

type DayStatus =
  | "Present"
  | "Absent"
  | "Late"
  | "Half Day"
  | "Leave"
  | "Holiday"
  | "Empty";

function normalizeStatus(raw?: string): DayStatus {
  const s = (raw || "").toLowerCase().trim();
  if (!s) return "Empty";
  if (s.includes("holiday")) return "Holiday";
  if (s.includes("present") || s === "p") return "Present";
  if (s.includes("late")) return "Late";
  if (s.includes("half")) return "Half Day";
  if (s.includes("leave")) return "Leave";
  if (s.includes("absent") || s === "a" || s.includes("miss")) return "Absent";
  return "Empty";
}

function statusDotClass(status: DayStatus) {
  switch (status) {
    case "Present":
      return "bg-emerald-500";
    case "Absent":
      return "bg-red-400";
    case "Late":
      return "bg-amber-400";
    case "Half Day":
      return "bg-blue-400";
    case "Leave":
      return "bg-purple-400";
    case "Holiday":
      return "bg-indigo-400";
    default:
      return "bg-transparent";
  }
}

function statusPillClass(status: DayStatus) {
  switch (status) {
    case "Present":
      return "bg-emerald-100 text-emerald-800";
    case "Absent":
      return "bg-red-100 text-red-800";
    case "Late":
      return "bg-amber-100 text-amber-900";
    case "Half Day":
      return "bg-blue-100 text-blue-800";
    case "Leave":
      return "bg-purple-100 text-purple-800";
    case "Holiday":
      return "bg-indigo-100 text-indigo-800";
    default:
      return "";
  }
}

function statusLabel(status: DayStatus) {
  if (status === "Empty") return "";
  return status;
}

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function AttendanceHistoryPage() {
  const [rows, setRows] = useState<InteriorAttendance[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEmployee, setSelectedEmployee] = useState<string>("all");

  const now = new Date();
  const [viewYear, setViewYear] = useState(now.getFullYear());
  const [viewMonth, setViewMonth] = useState(now.getMonth());

  useEffect(() => {
    let cancelled = false;

    (async () => {
      setLoading(true);
      try {
        // Backfill past empty days in this month as Absent
        await ensurePastAbsentsForMonth(viewYear, viewMonth);

        const data = await getAllAttendanceHistory();
        if (!cancelled) setRows(data);
      } catch (err) {
        console.error(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [viewYear, viewMonth]);

  const daysInMonth = useMemo(
    () => new Date(viewYear, viewMonth + 1, 0).getDate(),
    [viewYear, viewMonth]
  );

  const firstWeekday = useMemo(
    () => new Date(viewYear, viewMonth, 1).getDay(),
    [viewYear, viewMonth]
  );

  const dayNumbers = useMemo(
    () => Array.from({ length: daysInMonth }, (_, i) => i + 1),
    [daysInMonth]
  );

  const employees = useMemo(() => {
    const map = new Map<string, string>();
    for (const r of rows) {
      const id = r.employeeId || r.employeeDocId || r.name || "";
      if (!id) continue;
      if (!map.has(id)) map.set(id, r.name || id);
    }
    return Array.from(map.entries())
      .map(([id, name]) => ({ id, name }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [rows]);

  const recordMap = useMemo(() => {
    const map = new Map<
      string,
      { status: DayStatus; record: InteriorAttendance }
    >();
    const prefix = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-`;
    for (const r of rows) {
      const date = (r.date || "").slice(0, 10);
      if (!date.startsWith(prefix)) continue;
      const empId = r.employeeId || r.employeeDocId || r.name || "";
      if (!empId) continue;
      map.set(`${empId}|${date}`, {
        status: normalizeStatus(r.status),
        record: r,
      });
    }
    return map;
  }, [rows, viewYear, viewMonth]);

  function getStatus(employeeId: string, day: number): DayStatus {
    const date = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return recordMap.get(`${employeeId}|${date}`)?.status || "Empty";
  }

  function getRecord(employeeId: string, day: number) {
    const date = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return recordMap.get(`${employeeId}|${date}`)?.record;
  }

  function getDayStatusForSelected(day: number): DayStatus {
    if (selectedEmployee === "all") return "Empty";
    return getStatus(selectedEmployee, day);
  }

  function prevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  }

  function nextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  }

  function goToday() {
    const d = new Date();
    setViewYear(d.getFullYear());
    setViewMonth(d.getMonth());
  }

  const selectedName =
    selectedEmployee === "all"
      ? "All employees"
      : employees.find((e) => e.id === selectedEmployee)?.name ||
        selectedEmployee;

  const monthSummary = useMemo(() => {
    const counts: Record<DayStatus, number> = {
      Present: 0,
      Absent: 0,
      Late: 0,
      "Half Day": 0,
      Leave: 0,
      Holiday: 0,
      Empty: 0,
    };
    if (selectedEmployee === "all") {
      for (const emp of employees) {
        for (const d of dayNumbers) {
          counts[getStatus(emp.id, d)]++;
        }
      }
    } else {
      for (const d of dayNumbers) {
        counts[getStatus(selectedEmployee, d)]++;
      }
    }
    return counts;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedEmployee, employees, dayNumbers, recordMap]);

  const weeks = useMemo(() => {
    const cells: (number | null)[] = [];
    for (let i = 0; i < firstWeekday; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);
    while (cells.length % 7 !== 0) cells.push(null);
    const rowsWeeks: (number | null)[][] = [];
    for (let i = 0; i < cells.length; i += 7) {
      rowsWeeks.push(cells.slice(i, i + 7));
    }
    return rowsWeeks;
  }, [firstWeekday, daysInMonth]);

  function exportCsv() {
    if (selectedEmployee === "all") {
      const headers = ["Employee", "Employee ID", ...dayNumbers.map(String)];
      const body = employees.map((emp) => {
        const cells = dayNumbers.map((d) => {
          const s = getStatus(emp.id, d);
          return s === "Empty" ? "" : s;
        });
        return [emp.name, emp.id, ...cells]
          .map((cell) => `"${String(cell).replace(/"/g, '""')}"`)
          .join(",");
      });
      const blob = new Blob([[headers.join(","), ...body].join("\n")], {
        type: "text/csv;charset=utf-8;",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `attendance-${MONTH_NAMES[viewMonth]}-${viewYear}.csv`;
      a.click();
      URL.revokeObjectURL(url);
      return;
    }

    const headers = ["Date", "Status", "Check In", "Check Out", "Hours", "OT"];
    const body = dayNumbers.map((d) => {
      const rec = getRecord(selectedEmployee, d);
      const date = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      const st = getStatus(selectedEmployee, d);
      return [
        date,
        st === "Empty" ? "" : st,
        rec?.checkIn || "",
        rec?.checkOut || "",
        rec?.workHours || "",
        rec?.overtime || "",
      ]
        .map((cell) => `"${String(cell).replace(/"/g, '""')}"`)
        .join(",");
    });
    const blob = new Blob([[headers.join(","), ...body].join("\n")], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `attendance-${selectedName}-${MONTH_NAMES[viewMonth]}-${viewYear}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
      <div className="border-b border-[#e4e2da] bg-white">
        <div className="mx-auto max-w-[1600px] px-3 py-3 sm:px-5 sm:py-4 lg:px-8">
          <Link
            href="/interior/hrms"
            className="mb-1.5 inline-flex text-xs font-semibold text-[#176b5b] hover:underline sm:mb-2 sm:text-sm"
          >
            ← Back to HRMS
          </Link>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
                Attendance History
              </h1>
              <p className="mt-0.5 text-xs text-gray-500 sm:text-sm">
                Calendar view · Firebase records
                {loading && (
                  <span className="ml-2 text-[#176b5b]">Loading…</span>
                )}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <select
                value={selectedEmployee}
                onChange={(e) => setSelectedEmployee(e.target.value)}
                className="h-10 min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-3 text-xs font-medium outline-none focus:border-[#176b5b] sm:min-w-[200px] sm:flex-none sm:text-sm"
              >
                <option value="all">All employees</option>
                {employees.map((e) => (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={exportCsv}
                className="inline-flex h-10 items-center gap-1.5 rounded-xl bg-[#176b5b] px-3 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125848] sm:px-4 sm:text-sm"
              >
                <Download size={16} strokeWidth={2.5} />
                <span className="hidden sm:inline">Export</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto flex max-w-[1600px] flex-col gap-3 px-3 py-3 sm:gap-4 sm:px-5 sm:py-5 lg:px-8">
        <section className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[#e4e2da] bg-white px-2.5 py-2.5 sm:px-4 sm:py-3">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={goToday}
              className="rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 sm:px-3 sm:text-sm"
            >
              Today
            </button>
            <button
              type="button"
              onClick={prevMonth}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100"
              aria-label="Previous month"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={nextMonth}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100"
              aria-label="Next month"
            >
              <ChevronRight size={20} />
            </button>
            <h2 className="ml-1 text-base font-semibold text-gray-900 sm:text-xl">
              {MONTH_NAMES[viewMonth]} {viewYear}
            </h2>
          </div>
          <p className="text-xs font-medium text-gray-600 sm:text-sm">
            {selectedName}
          </p>
        </section>

        <div className="flex flex-wrap gap-1.5 text-[11px] sm:gap-2 sm:text-xs">
          {(
            [
              ["Present", "bg-emerald-500", monthSummary.Present],
              ["Absent", "bg-red-400", monthSummary.Absent],
              ["Late", "bg-amber-400", monthSummary.Late],
              ["Half Day", "bg-blue-400", monthSummary["Half Day"]],
              ["Leave", "bg-purple-400", monthSummary.Leave],
              ["Holiday", "bg-indigo-400", monthSummary.Holiday],
            ] as const
          ).map(([label, color, count]) => (
            <span
              key={label}
              className="inline-flex items-center gap-1 rounded-full border border-[#e4e2da] bg-white px-2 py-1 sm:gap-1.5 sm:px-2.5"
            >
              <span
                className={`h-2 w-2 rounded-full sm:h-2.5 sm:w-2.5 ${color}`}
              />
              <span className="hidden sm:inline">{label}</span>
              <span className="font-semibold text-gray-800">{count}</span>
            </span>
          ))}
        </div>

        {loading ? (
          <div className="rounded-xl border border-[#e4e2da] bg-white py-16 text-center text-sm text-gray-500 sm:py-20">
            Loading attendance…
          </div>
        ) : selectedEmployee === "all" ? (
          <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
            {employees.length === 0 ? (
              <p className="px-4 py-12 text-center text-sm text-gray-500 sm:px-5 sm:py-16">
                No attendance records yet. Mark attendance on the daily page
                first.
              </p>
            ) : (
              <div className="overflow-x-auto overscroll-x-contain">
                <table className="w-full min-w-max border-collapse text-left">
                  <thead>
                    <tr className="bg-[#fafaf8] text-[11px] text-gray-500 sm:text-xs">
                      <th className="sticky left-0 z-10 min-w-[120px] border-b border-r border-[#eeece6] bg-[#fafaf8] px-3 py-2.5 text-left font-semibold sm:min-w-[160px] sm:px-4 sm:py-3">
                        Employee
                      </th>
                      {dayNumbers.map((d) => (
                        <th
                          key={d}
                          className="border-b border-[#eeece6] px-0.5 py-2.5 text-center font-semibold sm:px-1 sm:py-3"
                          style={{ minWidth: 32 }}
                        >
                          {d}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map((emp) => (
                      <tr
                        key={emp.id}
                        className="border-b border-[#eeece6] last:border-0 hover:bg-[#fafaf8]/60"
                      >
                        <td className="sticky left-0 z-10 border-r border-[#eeece6] bg-white px-3 py-2.5 sm:px-4 sm:py-3">
                          <button
                            type="button"
                            onClick={() => setSelectedEmployee(emp.id)}
                            className="w-full text-left"
                          >
                            <p className="truncate text-xs font-semibold text-gray-900 hover:text-[#176b5b] sm:text-sm">
                              {emp.name}
                            </p>
                            <p className="truncate text-[10px] text-[#176b5b] sm:text-[11px]">
                              {emp.id}
                            </p>
                          </button>
                        </td>
                        {dayNumbers.map((d) => {
                          const st = getStatus(emp.id, d);
                          return (
                            <td
                              key={d}
                              className="px-0.5 py-2 text-center sm:px-1 sm:py-2.5"
                              title={`${emp.name} · ${d} ${MONTH_NAMES[viewMonth]} · ${statusLabel(st) || "—"}`}
                            >
                              <span
                                className={`mx-auto inline-block h-3 w-3 rounded-full sm:h-3.5 sm:w-3.5 ${statusDotClass(
                                  st
                                )} ${st === "Empty" ? "bg-slate-200" : ""}`}
                              />
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <p className="border-t border-[#eeece6] px-3 py-2 text-[10px] text-gray-400 sm:hidden">
              Swipe horizontally · tap a name for calendar view
            </p>
          </section>
        ) : (
          <section className="flex flex-col overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-[#eeece6] px-3 py-2.5 sm:px-4">
              <h3 className="truncate text-sm font-semibold text-gray-900 sm:text-base">
                {selectedName}
              </h3>
              <button
                type="button"
                onClick={() => setSelectedEmployee("all")}
                className="shrink-0 text-xs font-semibold text-[#176b5b] hover:underline sm:text-sm"
              >
                ← All employees
              </button>
            </div>

            <div className="grid grid-cols-7 border-b border-[#eeece6] bg-[#fafaf8]">
              {WEEKDAYS.map((w) => (
                <div
                  key={w}
                  className="border-r border-[#eeece6] py-1.5 text-center text-[10px] font-semibold uppercase tracking-wide text-gray-500 last:border-r-0 sm:py-2 sm:text-xs"
                >
                  {w}
                </div>
              ))}
            </div>

            <div className="flex flex-col">
              {weeks.map((week, wi) => (
                <div
                  key={wi}
                  className="grid grid-cols-7 border-b border-[#eeece6] last:border-b-0"
                  style={{ minHeight: "72px" }}
                >
                  {week.map((day, di) => {
                    if (day === null) {
                      return (
                        <div
                          key={`b-${wi}-${di}`}
                          className="border-r border-[#eeece6] bg-[#fafaf8]/50 last:border-r-0"
                        />
                      );
                    }

                    const st = getDayStatusForSelected(day);
                    const rec = getRecord(selectedEmployee, day);
                    const isToday =
                      day === now.getDate() &&
                      viewMonth === now.getMonth() &&
                      viewYear === now.getFullYear();
                    const isWeekend = di === 0 || di === 6;

                    return (
                      <div
                        key={day}
                        className={`relative flex min-h-[72px] flex-col border-r border-[#eeece6] p-1 last:border-r-0 sm:min-h-[96px] sm:p-1.5 ${
                          isWeekend ? "bg-[#fafafa]" : "bg-white"
                        }`}
                      >
                        <div className="mb-0.5 flex justify-end sm:mb-1 sm:justify-start">
                          <span
                            className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-medium sm:h-7 sm:w-7 sm:text-sm ${
                              isToday
                                ? "bg-[#176b5b] font-bold text-white"
                                : "text-gray-700"
                            }`}
                          >
                            {day}
                          </span>
                        </div>

                        <div className="mt-auto flex flex-col gap-0.5 overflow-hidden">
                          {st !== "Empty" && (
                            <span
                              className={`truncate rounded px-1 py-0.5 text-[9px] font-semibold leading-tight sm:text-[11px] ${statusPillClass(
                                st
                              )}`}
                            >
                              {st}
                            </span>
                          )}
                          {rec?.checkIn && (
                            <span className="truncate px-0.5 text-[8px] text-gray-500 sm:text-[10px]">
                              {rec.checkIn}
                              {rec.checkOut ? ` – ${rec.checkOut}` : ""}
                            </span>
                          )}
                          {rec?.workHours && (
                            <span className="hidden truncate px-0.5 text-[9px] text-gray-400 sm:block sm:text-[10px]">
                              {rec.workHours}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </section>
        )}

        <Link
          href="/interior/hrms/attendance"
          className="inline-flex w-fit items-center rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
        >
          Mark attendance
        </Link>
      </main>
    </div>
  );
}
