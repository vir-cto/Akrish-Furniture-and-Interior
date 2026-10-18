// "use client";

// import { useMemo, useState } from "react";

// type AttendanceStatus =
//   | "Present"
//   | "Absent"
//   | "Late"
//   | "Half Day"
//   | "Leave";

// type Employee = {
//   id: string;
//   name: string;
//   employeeId: string;
//   department: string;
//   designation: string;
//   checkIn: string;
//   checkOut: string;
//   status: AttendanceStatus;
//   workHours: string;
//   overtime: string;
// };

// const initialAttendance: Employee[] = [
//   {
//     id: "EMP001",
//     name: "Ravi Kumar",
//     employeeId: "AKR001",
//     department: "Interior Design",
//     designation: "Senior Interior Designer",
//     checkIn: "09:02 AM",
//     checkOut: "06:12 PM",
//     status: "Present",
//     workHours: "8h 40m",
//     overtime: "12m",
//   },
//   {
//     id: "EMP002",
//     name: "Priya Sharma",
//     employeeId: "AKR002",
//     department: "Interior Design",
//     designation: "Interior Designer",
//     checkIn: "09:18 AM",
//     checkOut: "06:05 PM",
//     status: "Late",
//     workHours: "8h 10m",
//     overtime: "5m",
//   },
//   {
//     id: "EMP003",
//     name: "Arjun Reddy",
//     employeeId: "AKR003",
//     department: "Project Management",
//     designation: "Project Manager",
//     checkIn: "08:55 AM",
//     checkOut: "06:20 PM",
//     status: "Present",
//     workHours: "9h 05m",
//     overtime: "20m",
//   },
//   {
//     id: "EMP004",
//     name: "Sneha Rao",
//     employeeId: "AKR004",
//     department: "HR",
//     designation: "HR Executive",
//     checkIn: "09:00 AM",
//     checkOut: "06:00 PM",
//     status: "Present",
//     workHours: "8h 45m",
//     overtime: "0m",
//   },
//   {
//     id: "EMP005",
//     name: "Vamsi Krishna",
//     employeeId: "AKR005",
//     department: "Site Operations",
//     designation: "Site Supervisor",
//     checkIn: "09:30 AM",
//     checkOut: "01:30 PM",
//     status: "Half Day",
//     workHours: "4h 00m",
//     overtime: "0m",
//   },
//   {
//     id: "EMP006",
//     name: "Meghana Devi",
//     employeeId: "AKR006",
//     department: "Accounts",
//     designation: "Accountant",
//     checkIn: "--",
//     checkOut: "--",
//     status: "Leave",
//     workHours: "0h",
//     overtime: "0m",
//   },
//   {
//     id: "EMP007",
//     name: "Kiran Kumar",
//     employeeId: "AKR007",
//     department: "Sales",
//     designation: "Sales Executive",
//     checkIn: "--",
//     checkOut: "--",
//     status: "Absent",
//     workHours: "0h",
//     overtime: "0m",
//   },
//   {
//     id: "EMP008",
//     name: "Anjali Rao",
//     employeeId: "AKR008",
//     department: "Interior Design",
//     designation: "Junior Designer",
//     checkIn: "08:58 AM",
//     checkOut: "06:10 PM",
//     status: "Present",
//     workHours: "8h 50m",
//     overtime: "10m",
//   },
//   {
//     id: "EMP009",
//     name: "Suresh Babu",
//     employeeId: "AKR009",
//     department: "Procurement",
//     designation: "Purchase Executive",
//     checkIn: "09:12 AM",
//     checkOut: "06:02 PM",
//     status: "Late",
//     workHours: "8h 15m",
//     overtime: "2m",
//   },
//   {
//     id: "EMP010",
//     name: "Divya Sri",
//     employeeId: "AKR010",
//     department: "Administration",
//     designation: "Admin Executive",
//     checkIn: "09:05 AM",
//     checkOut: "05:58 PM",
//     status: "Present",
//     workHours: "8h 35m",
//     overtime: "0m",
//   },
// ];

// const departments = [
//   "All Departments",
//   "Interior Design",
//   "Project Management",
//   "HR",
//   "Site Operations",
//   "Accounts",
//   "Sales",
//   "Procurement",
//   "Administration",
// ];

// const statusOptions: Array<"All Statuses" | AttendanceStatus> = [
//   "All Statuses",
//   "Present",
//   "Absent",
//   "Late",
//   "Half Day",
//   "Leave",
// ];

// function statusClass(status: AttendanceStatus) {
//   switch (status) {
//     case "Present":
//       return "border-green-200 bg-green-50 text-green-700";
//     case "Absent":
//       return "border-red-200 bg-red-50 text-red-700";
//     case "Late":
//       return "border-amber-200 bg-amber-50 text-amber-700";
//     case "Half Day":
//       return "border-purple-200 bg-purple-50 text-purple-700";
//     case "Leave":
//       return "border-blue-200 bg-blue-50 text-blue-700";
//     default:
//       return "border-gray-200 bg-gray-50 text-gray-700";
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

// export default function AttendancePage() {
//   const [attendance, setAttendance] =
//     useState<Employee[]>(initialAttendance);

//   const [search, setSearch] = useState("");
//   const [department, setDepartment] =
//     useState("All Departments");
//   const [status, setStatus] =
//     useState<"All Statuses" | AttendanceStatus>(
//       "All Statuses"
//     );

//   const [selectedEmployee, setSelectedEmployee] =
//     useState<Employee | null>(null);

//   const [showMarkAttendance, setShowMarkAttendance] =
//     useState(false);

//   const [selectedDate, setSelectedDate] =
//     useState("2026-10-06");

//   const filteredAttendance = useMemo(() => {
//     const query = search.toLowerCase().trim();

//     return attendance.filter((employee) => {
//       const matchesSearch =
//         !query ||
//         employee.name.toLowerCase().includes(query) ||
//         employee.employeeId.toLowerCase().includes(query) ||
//         employee.department.toLowerCase().includes(query) ||
//         employee.designation.toLowerCase().includes(query);

//       const matchesDepartment =
//         department === "All Departments" ||
//         employee.department === department;

//       const matchesStatus =
//         status === "All Statuses" ||
//         employee.status === status;

//       return (
//         matchesSearch &&
//         matchesDepartment &&
//         matchesStatus
//       );
//     });
//   }, [attendance, search, department, status]);

//   const totalEmployees = attendance.length;

//   const presentCount = attendance.filter(
//     (employee) => employee.status === "Present"
//   ).length;

//   const absentCount = attendance.filter(
//     (employee) => employee.status === "Absent"
//   ).length;

//   const lateCount = attendance.filter(
//     (employee) => employee.status === "Late"
//   ).length;

//   const leaveCount = attendance.filter(
//     (employee) => employee.status === "Leave"
//   ).length;

//   const halfDayCount = attendance.filter(
//     (employee) => employee.status === "Half Day"
//   ).length;

//   const attendancePercentage =
//     totalEmployees > 0
//       ? Math.round(
//           ((presentCount + lateCount + halfDayCount) /
//             totalEmployees) *
//             100
//         )
//       : 0;

//   function updateAttendance(
//     employeeId: string,
//     newStatus: AttendanceStatus
//   ) {
//     setAttendance((current) =>
//       current.map((employee) => {
//         if (employee.id !== employeeId) {
//           return employee;
//         }

//         if (newStatus === "Present") {
//           return {
//             ...employee,
//             status: "Present",
//             checkIn:
//               employee.checkIn === "--"
//                 ? "09:00 AM"
//                 : employee.checkIn,
//             checkOut:
//               employee.checkOut === "--"
//                 ? "06:00 PM"
//                 : employee.checkOut,
//             workHours:
//               employee.workHours === "0h"
//                 ? "8h 45m"
//                 : employee.workHours,
//           };
//         }

//         if (newStatus === "Absent") {
//           return {
//             ...employee,
//             status: "Absent",
//             checkIn: "--",
//             checkOut: "--",
//             workHours: "0h",
//             overtime: "0m",
//           };
//         }

//         if (newStatus === "Leave") {
//           return {
//             ...employee,
//             status: "Leave",
//             checkIn: "--",
//             checkOut: "--",
//             workHours: "0h",
//             overtime: "0m",
//           };
//         }

//         if (newStatus === "Half Day") {
//           return {
//             ...employee,
//             status: "Half Day",
//             checkIn:
//               employee.checkIn === "--"
//                 ? "09:00 AM"
//                 : employee.checkIn,
//             checkOut:
//               employee.checkOut === "--"
//                 ? "01:30 PM"
//                 : employee.checkOut,
//             workHours: "4h 00m",
//             overtime: "0m",
//           };
//         }

//         return {
//           ...employee,
//           status: "Late",
//           checkIn:
//             employee.checkIn === "--"
//               ? "09:20 AM"
//               : employee.checkIn,
//           checkOut:
//             employee.checkOut === "--"
//               ? "06:00 PM"
//               : employee.checkOut,
//           workHours:
//             employee.workHours === "0h"
//               ? "8h 10m"
//               : employee.workHours,
//         };
//       })
//     );

//     setSelectedEmployee((current) => {
//       if (!current || current.id !== employeeId) {
//         return current;
//       }

//       const updated = attendance.find(
//         (employee) => employee.id === employeeId
//       );

//       return updated
//         ? {
//             ...updated,
//             status: newStatus,
//           }
//         : current;
//     });
//   }

//   function markAllPresent() {
//     setAttendance((current) =>
//       current.map((employee) => ({
//         ...employee,
//         status: "Present",
//         checkIn:
//           employee.checkIn === "--"
//             ? "09:00 AM"
//             : employee.checkIn,
//         checkOut:
//           employee.checkOut === "--"
//             ? "06:00 PM"
//             : employee.checkOut,
//         workHours:
//           employee.workHours === "0h"
//             ? "8h 45m"
//             : employee.workHours,
//       }))
//     );
//   }

//   function exportAttendance() {
//     const headers = [
//       "Employee ID",
//       "Employee Name",
//       "Department",
//       "Designation",
//       "Check In",
//       "Check Out",
//       "Status",
//       "Work Hours",
//       "Overtime",
//     ];

//     const rows = filteredAttendance.map((employee) => [
//       employee.employeeId,
//       employee.name,
//       employee.department,
//       employee.designation,
//       employee.checkIn,
//       employee.checkOut,
//       employee.status,
//       employee.workHours,
//       employee.overtime,
//     ]);

//     const csv = [
//       headers,
//       ...rows,
//     ]
//       .map((row) =>
//         row
//           .map((value) => `"${String(value).replace(/"/g, '""')}"`)
//           .join(",")
//       )
//       .join("\n");

//     const blob = new Blob([csv], {
//       type: "text/csv;charset=utf-8;",
//     });

//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");

//     link.href = url;
//     link.download = `attendance-${selectedDate}.csv`;
//     link.click();

//     URL.revokeObjectURL(url);
//   }

//   function printAttendance() {
//     window.print();
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       {/* HEADER */}
//       <header className="border-b border-[#e4e2da] bg-white print:hidden">
//         <div className="mx-auto max-w-[1600px] px-5 py-5 lg:px-8">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               <div className="mb-1 text-sm font-medium text-[#9a5b18]">
//                 Akrish / Furniture and Interior
//               </div>

//               <h1 className="text-2xl font-bold tracking-tight">
//                 Attendance
//               </h1>

//               <p className="mt-1 text-sm text-gray-500">
//                 Track employee attendance, working hours and daily status.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               <button
//                 onClick={markAllPresent}
//                 className="rounded-lg border border-[#176b5b] px-4 py-2.5 text-sm font-semibold text-[#176b5b] hover:bg-[#edf5f2]"
//               >
//                 Mark All Present
//               </button>

//               <button
//                 onClick={() => setShowMarkAttendance(true)}
//                 className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//               >
//                 + Mark Attendance
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* PRINT HEADER */}
//       <div className="hidden print:block">
//         <div className="border-b border-gray-300 px-8 py-5">
//           <h1 className="text-2xl font-bold">
//             Akrish / Furniture and Interior
//           </h1>

//           <p className="mt-1 text-sm">
//             Employee Attendance Report
//           </p>

//           <p className="mt-1 text-xs text-gray-500">
//             Date: {selectedDate}
//           </p>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-6 px-5 py-6 lg:px-8">
//         {/* SUMMARY */}
//         <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-6">
//           <SummaryCard
//             label="Total Employees"
//             value={totalEmployees}
//             helper="Registered employees"
//             icon="👥"
//           />

//           <SummaryCard
//             label="Present"
//             value={presentCount}
//             helper="On time today"
//             icon="✓"
//           />

//           <SummaryCard
//             label="Late"
//             value={lateCount}
//             helper="Late arrivals"
//             icon="⏰"
//           />

//           <SummaryCard
//             label="Absent"
//             value={absentCount}
//             helper="Not present"
//             icon="!"
//           />

//           <SummaryCard
//             label="On Leave"
//             value={leaveCount}
//             helper="Approved leave"
//             icon="📅"
//           />

//           <SummaryCard
//             label="Attendance"
//             value={`${attendancePercentage}%`}
//             helper="Today's rate"
//             icon="📊"
//           />
//         </section>

//         {/* DATE + FILTERS */}
//         <section className="rounded-xl border border-[#e4e2da] bg-white p-4 print:hidden">
//           <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
//             <div>
//               <label className="mb-1 block text-xs font-medium text-gray-500">
//                 Attendance Date
//               </label>

//               <input
//                 type="date"
//                 value={selectedDate}
//                 onChange={(event) =>
//                   setSelectedDate(event.target.value)
//                 }
//                 className="rounded-lg border border-gray-200 bg-[#fafaf8] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//               />
//             </div>

//             <div className="relative flex-1 xl:pt-5">
//               <span className="absolute left-3 top-[calc(50%+10px)] -translate-y-1/2 text-gray-400">
//                 🔍
//               </span>

//               <input
//                 value={search}
//                 onChange={(event) =>
//                   setSearch(event.target.value)
//                 }
//                 placeholder="Search employee, ID, department or designation..."
//                 className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] py-2.5 pl-10 pr-3 text-sm outline-none focus:border-[#176b5b]"
//               />
//             </div>

//             <select
//               value={department}
//               onChange={(event) =>
//                 setDepartment(event.target.value)
//               }
//               className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] xl:mt-5"
//             >
//               {departments.map((item) => (
//                 <option key={item} value={item}>
//                   {item}
//                 </option>
//               ))}
//             </select>

//             <select
//               value={status}
//               onChange={(event) =>
//                 setStatus(
//                   event.target.value as
//                     | "All Statuses"
//                     | AttendanceStatus
//                 )
//               }
//               className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] xl:mt-5"
//             >
//               {statusOptions.map((item) => (
//                 <option key={item} value={item}>
//                   {item}
//                 </option>
//               ))}
//             </select>

//             <button
//               onClick={exportAttendance}
//               className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 xl:mt-5"
//             >
//               Export CSV
//             </button>

//             <button
//               onClick={printAttendance}
//               className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 xl:mt-5"
//             >
//               Print
//             </button>
//           </div>
//         </section>

//         {/* ATTENDANCE TABLE */}
//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="flex items-center justify-between border-b border-[#e4e2da] px-5 py-4">
//             <div>
//               <h2 className="font-semibold">
//                 Daily Attendance
//               </h2>

//               <p className="mt-1 text-xs text-gray-500">
//                 {filteredAttendance.length} employees shown
//               </p>
//             </div>

//             <div className="hidden text-sm text-gray-500 sm:block">
//               {selectedDate}
//             </div>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1100px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">
//                     Employee
//                   </th>

//                   <th className="px-4 py-3 font-semibold">
//                     Department
//                   </th>

//                   <th className="px-4 py-3 font-semibold">
//                     Check In
//                   </th>

//                   <th className="px-4 py-3 font-semibold">
//                     Check Out
//                   </th>

//                   <th className="px-4 py-3 font-semibold">
//                     Work Hours
//                   </th>

//                   <th className="px-4 py-3 font-semibold">
//                     Overtime
//                   </th>

//                   <th className="px-4 py-3 font-semibold">
//                     Status
//                   </th>

//                   <th className="px-4 py-3 text-right font-semibold print:hidden">
//                     Action
//                   </th>
//                 </tr>
//               </thead>

//               <tbody className="divide-y divide-gray-100">
//                 {filteredAttendance.map((employee) => (
//                   <tr
//                     key={employee.id}
//                     className="transition hover:bg-[#fafaf8]"
//                   >
//                     <td className="px-5 py-4">
//                       <div className="flex items-center gap-3">
//                         <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#edf5f2] text-xs font-bold text-[#176b5b]">
//                           {initials(employee.name)}
//                         </div>

//                         <div>
//                           <button
//                             onClick={() =>
//                               setSelectedEmployee(employee)
//                             }
//                             className="font-semibold hover:text-[#176b5b]"
//                           >
//                             {employee.name}
//                           </button>

//                           <div className="mt-1 text-xs text-gray-500">
//                             {employee.employeeId}
//                           </div>
//                         </div>
//                       </div>
//                     </td>

//                     <td className="px-4 py-4">
//                       <div className="text-sm font-medium">
//                         {employee.department}
//                       </div>

//                       <div className="mt-1 text-xs text-gray-500">
//                         {employee.designation}
//                       </div>
//                     </td>

//                     <td className="px-4 py-4 text-sm font-medium">
//                       {employee.checkIn}
//                     </td>

//                     <td className="px-4 py-4 text-sm font-medium">
//                       {employee.checkOut}
//                     </td>

//                     <td className="px-4 py-4 text-sm">
//                       {employee.workHours}
//                     </td>

//                     <td className="px-4 py-4 text-sm">
//                       {employee.overtime}
//                     </td>

//                     <td className="px-4 py-4">
//                       <span
//                         className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                           employee.status
//                         )}`}
//                       >
//                         {employee.status}
//                       </span>
//                     </td>

//                     <td className="px-4 py-4 text-right print:hidden">
//                       <button
//                         onClick={() =>
//                           setSelectedEmployee(employee)
//                         }
//                         className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold hover:bg-gray-50"
//                       >
//                         View
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             {filteredAttendance.length === 0 && (
//               <div className="px-5 py-16 text-center">
//                 <div className="text-4xl">🔎</div>

//                 <h3 className="mt-3 font-semibold">
//                   No employees found
//                 </h3>

//                 <p className="mt-1 text-sm text-gray-500">
//                   Try changing the search or filters.
//                 </p>
//               </div>
//             )}
//           </div>
//         </section>

//         {/* BOTTOM ANALYTICS */}
//         <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
//           {/* STATUS BREAKDOWN */}
//           <section className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <h2 className="font-semibold">
//               Attendance Breakdown
//             </h2>

//             <p className="mt-1 text-xs text-gray-500">
//               Today's employee attendance status.
//             </p>

//             <div className="mt-6 space-y-4">
//               <AttendanceBar
//                 label="Present"
//                 count={presentCount}
//                 total={totalEmployees}
//                 className="bg-green-500"
//               />

//               <AttendanceBar
//                 label="Late"
//                 count={lateCount}
//                 total={totalEmployees}
//                 className="bg-amber-500"
//               />

//               <AttendanceBar
//                 label="Half Day"
//                 count={halfDayCount}
//                 total={totalEmployees}
//                 className="bg-purple-500"
//               />

//               <AttendanceBar
//                 label="Absent"
//                 count={absentCount}
//                 total={totalEmployees}
//                 className="bg-red-500"
//               />

//               <AttendanceBar
//                 label="Leave"
//                 count={leaveCount}
//                 total={totalEmployees}
//                 className="bg-blue-500"
//               />
//             </div>
//           </section>

//           {/* WORK HOURS */}
//           <section className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <h2 className="font-semibold">
//               Working Hours Summary
//             </h2>

//             <p className="mt-1 text-xs text-gray-500">
//               Overview of today's working hours.
//             </p>

//             <div className="mt-5 grid grid-cols-2 gap-3">
//               <HourCard
//                 label="Employees Present"
//                 value={`${presentCount + lateCount}`}
//               />

//               <HourCard
//                 label="Half Day"
//                 value={`${halfDayCount}`}
//               />

//               <HourCard
//                 label="Average Work Day"
//                 value="8h 25m"
//               />

//               <HourCard
//                 label="Total Overtime"
//                 value="49m"
//               />
//             </div>

//             <div className="mt-5 rounded-lg border border-[#e4e2da] bg-[#fafaf8] p-4">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-xs text-gray-500">
//                     Attendance Rate
//                   </p>

//                   <p className="mt-1 text-2xl font-bold">
//                     {attendancePercentage}%
//                   </p>
//                 </div>

//                 <div className="flex h-16 w-16 items-center justify-center rounded-full border-8 border-[#176b5b]/20">
//                   <span className="text-sm font-bold text-[#176b5b]">
//                     {attendancePercentage}%
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </main>

//       {/* VIEW EMPLOYEE MODAL */}
//       {selectedEmployee && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 print:hidden">
//           <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
//               <div>
//                 <h2 className="text-lg font-bold">
//                   {selectedEmployee.name}
//                 </h2>

//                 <p className="mt-1 text-xs text-gray-500">
//                   {selectedEmployee.employeeId} ·{" "}
//                   {selectedEmployee.designation}
//                 </p>
//               </div>

//               <button
//                 onClick={() => setSelectedEmployee(null)}
//                 className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="space-y-6 p-6">
//               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                 <InfoBox
//                   label="Employee ID"
//                   value={selectedEmployee.employeeId}
//                 />

//                 <InfoBox
//                   label="Department"
//                   value={selectedEmployee.department}
//                 />

//                 <InfoBox
//                   label="Designation"
//                   value={selectedEmployee.designation}
//                 />

//                 <InfoBox
//                   label="Check In"
//                   value={selectedEmployee.checkIn}
//                 />

//                 <InfoBox
//                   label="Check Out"
//                   value={selectedEmployee.checkOut}
//                 />

//                 <InfoBox
//                   label="Work Hours"
//                   value={selectedEmployee.workHours}
//                 />

//                 <InfoBox
//                   label="Overtime"
//                   value={selectedEmployee.overtime}
//                 />

//                 <div className="rounded-lg border border-gray-200 bg-[#fafaf8] p-4">
//                   <div className="text-xs text-gray-500">
//                     Current Status
//                   </div>

//                   <div className="mt-2">
//                     <span
//                       className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                         selectedEmployee.status
//                       )}`}
//                     >
//                       {selectedEmployee.status}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="mb-3 text-sm font-semibold">
//                   Change Attendance Status
//                 </h3>

//                 <div className="flex flex-wrap gap-2">
//                   {(
//                     [
//                       "Present",
//                       "Late",
//                       "Half Day",
//                       "Absent",
//                       "Leave",
//                     ] as AttendanceStatus[]
//                   ).map((item) => (
//                     <button
//                       key={item}
//                       onClick={() =>
//                         updateAttendance(
//                           selectedEmployee.id,
//                           item
//                         )
//                       }
//                       className={`rounded-lg border px-3 py-2 text-xs font-semibold ${
//                         selectedEmployee.status === item
//                           ? "border-[#176b5b] bg-[#176b5b] text-white"
//                           : "border-gray-200 hover:bg-gray-50"
//                       }`}
//                     >
//                       {item}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className="flex justify-end border-t border-gray-200 pt-5">
//                 <button
//                   onClick={() => setSelectedEmployee(null)}
//                   className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//                 >
//                   Done
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* MARK ATTENDANCE MODAL */}
//       {showMarkAttendance && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 print:hidden">
//           <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
//               <div>
//                 <h2 className="text-lg font-bold">
//                   Mark Attendance
//                 </h2>

//                 <p className="mt-1 text-xs text-gray-500">
//                   Select an employee to update attendance.
//                 </p>
//               </div>

//               <button
//                 onClick={() =>
//                   setShowMarkAttendance(false)
//                 }
//                 className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="max-h-[65vh] space-y-2 overflow-y-auto p-5">
//               {attendance.map((employee) => (
//                 <div
//                   key={employee.id}
//                   className="flex items-center justify-between rounded-lg border border-gray-200 p-3"
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#edf5f2] text-xs font-bold text-[#176b5b]">
//                       {initials(employee.name)}
//                     </div>

//                     <div>
//                       <div className="text-sm font-semibold">
//                         {employee.name}
//                       </div>

//                       <div className="text-xs text-gray-500">
//                         {employee.employeeId}
//                       </div>
//                     </div>
//                   </div>

//                   <button
//                     onClick={() => {
//                       setShowMarkAttendance(false);
//                       setSelectedEmployee(employee);
//                     }}
//                     className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold hover:bg-gray-50"
//                   >
//                     Mark
//                   </button>
//                 </div>
//               ))}
//             </div>

//             <div className="border-t border-gray-200 px-5 py-4">
//               <button
//                 onClick={() =>
//                   setShowMarkAttendance(false)
//                 }
//                 className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx global>{`
//         @media print {
//           body {
//             background: white !important;
//           }

//           @page {
//             size: A4 landscape;
//             margin: 12mm;
//           }

//           table {
//             font-size: 11px;
//           }

//           th,
//           td {
//             padding: 7px !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

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

//           <p className="mt-1 text-xs text-gray-500">
//             {helper}
//           </p>
//         </div>

//         <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#edf5f2] text-lg text-[#176b5b]">
//           {icon}
//         </div>
//       </div>
//     </div>
//   );
// }

// function AttendanceBar({
//   label,
//   count,
//   total,
//   className,
// }: {
//   label: string;
//   count: number;
//   total: number;
//   className: string;
// }) {
//   const percentage =
//     total > 0 ? Math.round((count / total) * 100) : 0;

//   return (
//     <div>
//       <div className="mb-1.5 flex items-center justify-between text-sm">
//         <span className="font-medium">{label}</span>

//         <span className="text-xs text-gray-500">
//           {count} ({percentage}%)
//         </span>
//       </div>

//       <div className="h-2 overflow-hidden rounded-full bg-gray-100">
//         <div
//           className={`h-full rounded-full ${className}`}
//           style={{
//             width: `${percentage}%`,
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// function HourCard({
//   label,
//   value,
// }: {
//   label: string;
//   value: string;
// }) {
//   return (
//     <div className="rounded-lg border border-gray-200 bg-[#fafaf8] p-4">
//       <p className="text-xs text-gray-500">{label}</p>

//       <p className="mt-2 text-xl font-bold">{value}</p>
//     </div>
//   );
// }

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

//       <div className="mt-1 text-sm font-semibold">
//         {value}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAttendanceByDate,
//   upsertAttendance,
//   type InteriorAttendance,
// } from "@/modules/interior/services/attendanceService";

// type AttendanceStatus =
//   | "Present"
//   | "Absent"
//   | "Late"
//   | "Half Day"
//   | "Leave";

// type Row = {
//   id: string;
//   name: string;
//   employeeId: string;
//   employeeDocId?: string;
//   department: string;
//   designation: string;
//   checkIn: string;
//   checkOut: string;
//   status: AttendanceStatus;
//   workHours: string;
//   overtime: string;
//   date: string;
// };

// const departments = [
//   "All Departments",
//   "Interior Design",
//   "Project Management",
//   "Site Operations",
//   "HR",
//   "Accounts",
//   "Sales",
//   "Other",
// ];

// const statusOptions: Array<"All Statuses" | AttendanceStatus> = [
//   "All Statuses",
//   "Present",
//   "Absent",
//   "Late",
//   "Half Day",
//   "Leave",
// ];

// function statusClass(status: AttendanceStatus) {
//   switch (status) {
//     case "Present":
//       return "bg-green-50 text-green-700 border-green-200";
//     case "Late":
//       return "bg-amber-50 text-amber-700 border-amber-200";
//     case "Half Day":
//       return "bg-blue-50 text-blue-700 border-blue-200";
//     case "Leave":
//       return "bg-purple-50 text-purple-700 border-purple-200";
//     case "Absent":
//       return "bg-red-50 text-red-700 border-red-200";
//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function normalizeStatus(raw?: string): AttendanceStatus {
//   const s = (raw || "Absent").toLowerCase();
//   if (s.includes("present")) return "Present";
//   if (s.includes("late")) return "Late";
//   if (s.includes("half")) return "Half Day";
//   if (s.includes("leave")) return "Leave";
//   return "Absent";
// }

// function mapToUi(r: InteriorAttendance, date: string): Row {
//   return {
//     id: r.id,
//     name: r.name || "Unknown",
//     employeeId: r.employeeId || "—",
//     employeeDocId: r.employeeDocId,
//     department: r.department || "Other",
//     designation: r.designation || "—",
//     checkIn: r.checkIn || "--",
//     checkOut: r.checkOut || "--",
//     status: normalizeStatus(r.status),
//     workHours: r.workHours || "0h",
//     overtime: r.overtime || "0m",
//     date: r.date || date,
//   };
// }

// function defaultsForStatus(status: AttendanceStatus) {
//   if (status === "Present")
//     return { checkIn: "09:00 AM", checkOut: "06:00 PM", workHours: "8h 30m", overtime: "0m" };
//   if (status === "Late")
//     return { checkIn: "09:30 AM", checkOut: "06:00 PM", workHours: "8h 00m", overtime: "0m" };
//   if (status === "Half Day")
//     return { checkIn: "09:00 AM", checkOut: "01:30 PM", workHours: "4h 00m", overtime: "0m" };
//   return { checkIn: "--", checkOut: "--", workHours: "0h", overtime: "0m" };
// }

// export default function AttendancePage() {
//   const [attendance, setAttendance] = useState<Row[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [department, setDepartment] = useState("All Departments");
//   const [status, setStatus] = useState<"All Statuses" | AttendanceStatus>(
//     "All Statuses"
//   );
//   const [selectedDate, setSelectedDate] = useState(
//     new Date().toISOString().slice(0, 10)
//   );
//   const [selectedEmployee, setSelectedEmployee] = useState<Row | null>(null);

//   async function load(date: string) {
//     setLoading(true);
//     try {
//       const data = await getAttendanceByDate(date);
//       setAttendance(data.map((d) => mapToUi(d, date)));
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     load(selectedDate);
//   }, [selectedDate]);

//   const filtered = useMemo(() => {
//     const q = search.toLowerCase().trim();
//     return attendance.filter((row) => {
//       const matchesSearch =
//         !q ||
//         row.name.toLowerCase().includes(q) ||
//         row.employeeId.toLowerCase().includes(q) ||
//         row.designation.toLowerCase().includes(q);
//       const matchesDept =
//         department === "All Departments" || row.department === department;
//       const matchesStatus =
//         status === "All Statuses" || row.status === status;
//       return matchesSearch && matchesDept && matchesStatus;
//     });
//   }, [attendance, search, department, status]);

//   const totalEmployees = attendance.length;
//   const presentCount = attendance.filter((r) => r.status === "Present").length;
//   const absentCount = attendance.filter((r) => r.status === "Absent").length;
//   const lateCount = attendance.filter((r) => r.status === "Late").length;
//   const leaveCount = attendance.filter((r) => r.status === "Leave").length;
//   const halfDayCount = attendance.filter((r) => r.status === "Half Day").length;
//   const attendancePercentage =
//     totalEmployees === 0
//       ? 0
//       : Math.round(
//           ((presentCount + lateCount + halfDayCount) / totalEmployees) * 100
//         );

//   async function updateRow(id: string, patch: Partial<Row>) {
//     const current = attendance.find((r) => r.id === id);
//     if (!current) return;

//     const next = { ...current, ...patch };
//     setAttendance((list) => list.map((r) => (r.id === id ? next : r)));
//     setSelectedEmployee((s) => (s && s.id === id ? next : s));

//     try {
//       await upsertAttendance({
//         id: next.id,
//         date: next.date || selectedDate,
//         employeeDocId: next.employeeDocId,
//         employeeId: next.employeeId,
//         name: next.name,
//         department: next.department,
//         designation: next.designation,
//         checkIn: next.checkIn,
//         checkOut: next.checkOut,
//         status: next.status,
//         workHours: next.workHours,
//         overtime: next.overtime,
//       });
//     } catch (err) {
//       console.error(err);
//       await load(selectedDate);
//     }
//   }

//   async function setStatusFor(id: string, nextStatus: AttendanceStatus) {
//     const defaults = defaultsForStatus(nextStatus);
//     await updateRow(id, { status: nextStatus, ...defaults });
//   }

//   async function markAllPresent() {
//     for (const row of attendance) {
//       if (row.status === "Present") continue;
//       await setStatusFor(row.id, "Present");
//     }
//   }

//   function exportCsv() {
//     const headers = [
//       "Employee ID",
//       "Name",
//       "Department",
//       "Status",
//       "Check In",
//       "Check Out",
//       "Work Hours",
//       "Overtime",
//     ];
//     const rows = filtered.map((r) =>
//       [
//         r.employeeId,
//         r.name,
//         r.department,
//         r.status,
//         r.checkIn,
//         r.checkOut,
//         r.workHours,
//         r.overtime,
//       ].join(",")
//     );
//     const blob = new Blob([[headers.join(","), ...rows].join("\n")], {
//       type: "text/csv",
//     });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `attendance-${selectedDate}.csv`;
//     a.click();
//     URL.revokeObjectURL(url);
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1600px] px-5 py-5 lg:px-8">
//           <a
//             href="/interior/hrms"
//             className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-[#176b5b] hover:underline"
//           >
//             ← Back to HRMS
//           </a>
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               {/* <div className="mb-1 text-sm font-medium text-[#9a5b18]">
//                 Akrish / HRMS
//               </div> */}
//               <h1 className="text-2xl font-bold tracking-tight">Attendance</h1>
//               <p className="mt-1 text-sm text-gray-500">
//                 Daily attendance for interior staff.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               <input
//                 type="date"
//                 value={selectedDate}
//                 onChange={(e) => setSelectedDate(e.target.value)}
//                 className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//               />
//               <button
//                 onClick={markAllPresent}
//                 className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
//               >
//                 Mark All Present
//               </button>
//               <button
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
//         <section className="grid grid-cols-2 gap-4 xl:grid-cols-6">
//           <Stat label="Staff" value={loading ? "…" : String(totalEmployees)} />
//           <Stat label="Present" value={loading ? "…" : String(presentCount)} />
//           <Stat label="Late" value={loading ? "…" : String(lateCount)} />
//           <Stat label="Half Day" value={loading ? "…" : String(halfDayCount)} />
//           <Stat label="Leave" value={loading ? "…" : String(leaveCount)} />
//           <Stat label="Absent" value={loading ? "…" : String(absentCount)} />
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <div className="flex items-center justify-between">
//             <p className="text-sm font-semibold">Attendance rate</p>
//             <p className="text-lg font-bold text-[#176b5b]">
//               {attendancePercentage}%
//             </p>
//           </div>
//           <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
//             <div
//               className="h-full rounded-full bg-[#176b5b]"
//               style={{ width: `${attendancePercentage}%` }}
//             />
//           </div>
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-4">
//           <div className="flex flex-col gap-3 lg:flex-row">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search name, ID, designation..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-4 py-2.5 text-sm outline-none focus:border-[#176b5b] lg:max-w-md"
//             />
//             <select
//               value={department}
//               onChange={(e) => setDepartment(e.target.value)}
//               className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {departments.map((d) => (
//                 <option key={d}>{d}</option>
//               ))}
//             </select>
//             <select
//               value={status}
//               onChange={(e) =>
//                 setStatus(e.target.value as "All Statuses" | AttendanceStatus)
//               }
//               className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {statusOptions.map((s) => (
//                 <option key={s}>{s}</option>
//               ))}
//             </select>
//           </div>
//         </section>

//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1000px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Employee</th>
//                   <th className="px-4 py-3 font-semibold">Department</th>
//                   <th className="px-4 py-3 font-semibold">Check In</th>
//                   <th className="px-4 py-3 font-semibold">Check Out</th>
//                   <th className="px-4 py-3 font-semibold">Hours</th>
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
//                       Loading attendance…
//                     </td>
//                   </tr>
//                 ) : (
//                   <>
//                     {filtered.map((row) => (
//                       <tr key={row.id} className="hover:bg-[#fafaf8]">
//                         <td className="px-5 py-4">
//                           <p className="font-semibold text-gray-900">
//                             {row.name}
//                           </p>
//                           <p className="text-xs text-[#176b5b]">
//                             {row.employeeId}
//                           </p>
//                         </td>
//                         <td className="px-4 py-4 text-sm text-gray-700">
//                           {row.department}
//                         </td>
//                         <td className="px-4 py-4 text-sm">{row.checkIn}</td>
//                         <td className="px-4 py-4 text-sm">{row.checkOut}</td>
//                         <td className="px-4 py-4 text-sm">
//                           {row.workHours}
//                           <span className="block text-xs text-gray-400">
//                             OT {row.overtime}
//                           </span>
//                         </td>
//                         <td className="px-4 py-4">
//                           <span
//                             className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                               row.status
//                             )}`}
//                           >
//                             {row.status}
//                           </span>
//                         </td>
//                         <td className="px-4 py-4 text-right">
//                           <button
//                             onClick={() => setSelectedEmployee(row)}
//                             className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                           >
//                             Update
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                     {filtered.length === 0 && (
//                       <tr>
//                         <td
//                           colSpan={7}
//                           className="px-5 py-12 text-center text-sm text-gray-500"
//                         >
//                           No attendance rows. Add employees first.
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

//       {selectedEmployee && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl">
//             <div className="border-b border-[#e4e2da] px-6 py-4">
//               <p className="text-xs font-semibold text-[#176b5b]">
//                 {selectedEmployee.employeeId}
//               </p>
//               <h2 className="mt-1 text-lg font-bold">
//                 {selectedEmployee.name}
//               </h2>
//             </div>
//             <div className="space-y-3 p-6">
//               <p className="text-xs font-semibold uppercase text-gray-400">
//                 Mark status
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {(
//                   [
//                     "Present",
//                     "Late",
//                     "Half Day",
//                     "Leave",
//                     "Absent",
//                   ] as AttendanceStatus[]
//                 ).map((s) => (
//                   <button
//                     key={s}
//                     onClick={() => setStatusFor(selectedEmployee.id, s)}
//                     className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
//                       selectedEmployee.status === s
//                         ? statusClass(s)
//                         : "border-gray-200 text-gray-600"
//                     }`}
//                   >
//                     {s}
//                   </button>
//                 ))}
//               </div>
//               <button
//                 onClick={() => setSelectedEmployee(null)}
//                 className="mt-4 w-full rounded-lg border border-gray-200 py-2.5 text-sm font-medium"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function Stat({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-4">
//       <p className="text-xs text-gray-500">{label}</p>
//       <p className="mt-1 text-xl font-bold text-gray-900">{value}</p>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAttendanceByDate,
//   upsertAttendance,
//   type InteriorAttendance,
// } from "@/modules/interior/services/attendanceService";

// type AttendanceStatus =
//   | "Present"
//   | "Absent"
//   | "Late"
//   | "Half Day"
//   | "Leave";

// type Row = {
//   id: string;
//   name: string;
//   employeeId: string;
//   employeeDocId?: string;
//   department: string;
//   designation: string;
//   checkIn: string;
//   checkOut: string;
//   status: AttendanceStatus;
//   workHours: string;
//   overtime: string;
//   date: string;
// };

// const departments = [
//   "All Departments",
//   "Interior Design",
//   "Project Management",
//   "Site Operations",
//   "HR",
//   "Accounts",
//   "Sales",
//   "Other",
// ];

// const statusOptions: Array<"All Statuses" | AttendanceStatus> = [
//   "All Statuses",
//   "Present",
//   "Absent",
//   "Late",
//   "Half Day",
//   "Leave",
// ];

// function statusClass(status: AttendanceStatus) {
//   switch (status) {
//     case "Present":
//       return "bg-green-50 text-green-700 border-green-200";
//     case "Late":
//       return "bg-amber-50 text-amber-700 border-amber-200";
//     case "Half Day":
//       return "bg-blue-50 text-blue-700 border-blue-200";
//     case "Leave":
//       return "bg-purple-50 text-purple-700 border-purple-200";
//     case "Absent":
//       return "bg-red-50 text-red-700 border-red-200";
//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function normalizeStatus(raw?: string): AttendanceStatus {
//   const s = (raw || "Absent").toLowerCase();
//   if (s.includes("present")) return "Present";
//   if (s.includes("late")) return "Late";
//   if (s.includes("half")) return "Half Day";
//   if (s.includes("leave")) return "Leave";
//   return "Absent";
// }

// function mapToUi(r: InteriorAttendance, date: string): Row {
//   return {
//     id: r.id,
//     name: r.name || "Unknown",
//     employeeId: r.employeeId || "—",
//     employeeDocId: r.employeeDocId,
//     department: r.department || "Other",
//     designation: r.designation || "—",
//     checkIn: r.checkIn || "--",
//     checkOut: r.checkOut || "--",
//     status: normalizeStatus(r.status),
//     workHours: r.workHours || "0h",
//     overtime: r.overtime || "0m",
//     date: r.date || date,
//   };
// }

// /** Fixed hours by status (saved to Firebase with the row). */
// function defaultsForStatus(status: AttendanceStatus) {
//   if (status === "Present")
//     return {
//       checkIn: "09:00 AM",
//       checkOut: "06:00 PM",
//       workHours: "8h 30m",
//       overtime: "0m",
//     };
//   if (status === "Late")
//     return {
//       checkIn: "09:30 AM",
//       checkOut: "06:00 PM",
//       workHours: "8h 00m",
//       overtime: "0m",
//     };
//   if (status === "Half Day")
//     return {
//       checkIn: "09:00 AM",
//       checkOut: "01:30 PM",
//       workHours: "4h 00m",
//       overtime: "0m",
//     };
//   // Absent / Leave
//   return {
//     checkIn: "--",
//     checkOut: "--",
//     workHours: "0h",
//     overtime: "0m",
//   };
// }

// function isPresentLike(status: AttendanceStatus) {
//   return (
//     status === "Present" || status === "Late" || status === "Half Day"
//   );
// }

// export default function AttendancePage() {
//   const [attendance, setAttendance] = useState<Row[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [department, setDepartment] = useState("All Departments");
//   const [status, setStatus] = useState<"All Statuses" | AttendanceStatus>(
//     "All Statuses"
//   );
//   const [selectedDate, setSelectedDate] = useState(
//     new Date().toISOString().slice(0, 10)
//   );
//   const [selectedEmployee, setSelectedEmployee] = useState<Row | null>(null);

//   async function load(date: string) {
//     setLoading(true);
//     try {
//       const data = await getAttendanceByDate(date);
//       setAttendance(data.map((d) => mapToUi(d, date)));
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     load(selectedDate);
//   }, [selectedDate]);

//   const filtered = useMemo(() => {
//     const q = search.toLowerCase().trim();
//     return attendance.filter((row) => {
//       const matchesSearch =
//         !q ||
//         row.name.toLowerCase().includes(q) ||
//         row.employeeId.toLowerCase().includes(q) ||
//         row.designation.toLowerCase().includes(q);
//       const matchesDept =
//         department === "All Departments" || row.department === department;
//       const matchesStatus =
//         status === "All Statuses" || row.status === status;
//       return matchesSearch && matchesDept && matchesStatus;
//     });
//   }, [attendance, search, department, status]);

//   const totalEmployees = attendance.length;
//   const presentCount = attendance.filter((r) => r.status === "Present").length;
//   const absentCount = attendance.filter((r) => r.status === "Absent").length;
//   const lateCount = attendance.filter((r) => r.status === "Late").length;
//   const leaveCount = attendance.filter((r) => r.status === "Leave").length;
//   const halfDayCount = attendance.filter((r) => r.status === "Half Day").length;
//   const attendancePercentage =
//     totalEmployees === 0
//       ? 0
//       : Math.round(
//           ((presentCount + lateCount + halfDayCount) / totalEmployees) * 100
//         );

//   async function updateRow(id: string, patch: Partial<Row>) {
//     const current = attendance.find((r) => r.id === id);
//     if (!current) return;

//     const next = { ...current, ...patch };
//     setAttendance((list) => list.map((r) => (r.id === id ? next : r)));
//     setSelectedEmployee((s) => (s && s.id === id ? next : s));

//     try {
//       await upsertAttendance({
//         id: next.id,
//         date: next.date || selectedDate,
//         employeeDocId: next.employeeDocId,
//         employeeId: next.employeeId,
//         name: next.name,
//         department: next.department,
//         designation: next.designation,
//         checkIn: next.checkIn,
//         checkOut: next.checkOut,
//         status: next.status,
//         workHours: next.workHours,
//         overtime: next.overtime,
//       });
//     } catch (err) {
//       console.error(err);
//       await load(selectedDate);
//     }
//   }

//   async function setStatusFor(id: string, nextStatus: AttendanceStatus) {
//     const defaults = defaultsForStatus(nextStatus);
//     await updateRow(id, { status: nextStatus, ...defaults });
//   }

//   /** Toggle: Present ↔ Absent (hours update via defaultsForStatus). */
//   async function togglePresent(row: Row) {
//     if (isPresentLike(row.status)) {
//       await setStatusFor(row.id, "Absent");
//     } else {
//       await setStatusFor(row.id, "Present");
//     }
//   }

//   async function markAllPresent() {
//     for (const row of attendance) {
//       if (row.status === "Present") continue;
//       await setStatusFor(row.id, "Present");
//     }
//   }

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
//     const rows = filtered.map((r) =>
//       [
//         selectedDate,
//         r.employeeId,
//         r.name,
//         r.department,
//         r.status,
//         r.checkIn,
//         r.checkOut,
//         r.workHours,
//         r.overtime,
//       ].join(",")
//     );
//     const blob = new Blob([[headers.join(","), ...rows].join("\n")], {
//       type: "text/csv",
//     });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `attendance-${selectedDate}.csv`;
//     a.click();
//     URL.revokeObjectURL(url);
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1600px] px-5 py-5 lg:px-8">
//           <a
//             href="/interior/hrms"
//             className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-[#176b5b] hover:underline"
//           >
//             ← Back to HRMS
//           </a>
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               <h1 className="text-2xl font-bold tracking-tight">Attendance</h1>
//               <p className="mt-1 text-sm text-gray-500">
//                 Daily attendance for interior staff. Pick any past date to view
//                 saved history.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               <input
//                 type="date"
//                 value={selectedDate}
//                 onChange={(e) => setSelectedDate(e.target.value)}
//                 className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//               />
//               <button
//                 type="button"
//                 onClick={markAllPresent}
//                 className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
//               >
//                 Mark All Present
//               </button>
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
//         <section className="grid grid-cols-2 gap-4 xl:grid-cols-6">
//           <Stat label="Staff" value={loading ? "…" : String(totalEmployees)} />
//           <Stat label="Present" value={loading ? "…" : String(presentCount)} />
//           <Stat label="Late" value={loading ? "…" : String(lateCount)} />
//           <Stat label="Half Day" value={loading ? "…" : String(halfDayCount)} />
//           <Stat label="Leave" value={loading ? "…" : String(leaveCount)} />
//           <Stat label="Absent" value={loading ? "…" : String(absentCount)} />
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <div className="flex items-center justify-between">
//             <p className="text-sm font-semibold">Attendance rate</p>
//             <p className="text-lg font-bold text-[#176b5b]">
//               {attendancePercentage}%
//             </p>
//           </div>
//           <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
//             <div
//               className="h-full rounded-full bg-[#176b5b]"
//               style={{ width: `${attendancePercentage}%` }}
//             />
//           </div>
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-4">
//           <div className="flex flex-col gap-3 lg:flex-row">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search name, ID, designation..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-4 py-2.5 text-sm outline-none focus:border-[#176b5b] lg:max-w-md"
//             />
//             <select
//               value={department}
//               onChange={(e) => setDepartment(e.target.value)}
//               className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {departments.map((d) => (
//                 <option key={d}>{d}</option>
//               ))}
//             </select>
//             <select
//               value={status}
//               onChange={(e) =>
//                 setStatus(e.target.value as "All Statuses" | AttendanceStatus)
//               }
//               className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {statusOptions.map((s) => (
//                 <option key={s}>{s}</option>
//               ))}
//             </select>
//           </div>
//         </section>

//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1000px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Employee</th>
//                   <th className="px-4 py-3 font-semibold">Department</th>
//                   <th className="px-4 py-3 font-semibold">Check In</th>
//                   <th className="px-4 py-3 font-semibold">Check Out</th>
//                   <th className="px-4 py-3 font-semibold">Hours</th>
//                   <th className="px-4 py-3 font-semibold">Present</th>
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
//                       Loading attendance…
//                     </td>
//                   </tr>
//                 ) : (
//                   <>
//                     {filtered.map((row) => {
//                       const on = isPresentLike(row.status);
//                       return (
//                         <tr key={row.id} className="hover:bg-[#fafaf8]">
//                           <td className="px-5 py-4">
//                             <p className="font-semibold text-gray-900">
//                               {row.name}
//                             </p>
//                             <p className="text-xs text-[#176b5b]">
//                               {row.employeeId}
//                             </p>
//                           </td>
//                           <td className="px-4 py-4 text-sm text-gray-700">
//                             {row.department}
//                           </td>
//                           <td className="px-4 py-4 text-sm">{row.checkIn}</td>
//                           <td className="px-4 py-4 text-sm">{row.checkOut}</td>
//                           <td className="px-4 py-4 text-sm">
//                             {row.workHours}
//                             <span className="block text-xs text-gray-400">
//                               OT {row.overtime}
//                             </span>
//                           </td>
//                           <td className="px-4 py-4">
//                             <button
//                               type="button"
//                               role="switch"
//                               aria-checked={on}
//                               title={on ? "Mark Absent" : "Mark Present"}
//                               onClick={() => void togglePresent(row)}
//                               className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${
//                                 on ? "bg-[#176b5b]" : "bg-gray-300"
//                               }`}
//                             >
//                               <span
//                                 className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-all ${
//                                   on ? "left-5" : "left-0.5"
//                                 }`}
//                               />
//                             </button>
//                           </td>
//                           <td className="px-4 py-4">
//                             <span
//                               className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                                 row.status
//                               )}`}
//                             >
//                               {row.status}
//                             </span>
//                           </td>
//                           <td className="px-4 py-4 text-right">
//                             <button
//                               type="button"
//                               onClick={() => setSelectedEmployee(row)}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                             >
//                               Update
//                             </button>
//                           </td>
//                         </tr>
//                       );
//                     })}
//                     {filtered.length === 0 && (
//                       <tr>
//                         <td
//                           colSpan={8}
//                           className="px-5 py-12 text-center text-sm text-gray-500"
//                         >
//                           No attendance rows. Add employees first.
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

//       {selectedEmployee && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl">
//             <div className="border-b border-[#e4e2da] px-6 py-4">
//               <p className="text-xs font-semibold text-[#176b5b]">
//                 {selectedEmployee.employeeId}
//               </p>
//               <h2 className="mt-1 text-lg font-bold">
//                 {selectedEmployee.name}
//               </h2>
//               <p className="mt-1 text-xs text-gray-400">
//                 Date: {selectedDate}
//               </p>
//             </div>
//             <div className="space-y-4 p-6">
//               <div className="flex items-center justify-between rounded-xl bg-[#fafaf8] px-4 py-3">
//                 <div>
//                   <p className="text-sm font-semibold text-gray-800">
//                     Present toggle
//                   </p>
//                   <p className="text-xs text-gray-400">
//                     On = Present · Off = Absent
//                   </p>
//                 </div>
//                 <button
//                   type="button"
//                   role="switch"
//                   aria-checked={isPresentLike(selectedEmployee.status)}
//                   onClick={() => void togglePresent(selectedEmployee)}
//                   className={`relative h-7 w-12 rounded-full transition-colors ${
//                     isPresentLike(selectedEmployee.status)
//                       ? "bg-[#176b5b]"
//                       : "bg-gray-300"
//                   }`}
//                 >
//                   <span
//                     className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-all ${
//                       isPresentLike(selectedEmployee.status)
//                         ? "left-5"
//                         : "left-0.5"
//                     }`}
//                   />
//                 </button>
//               </div>

//               <div>
//                 <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
//                   Detailed status
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {(
//                     [
//                       "Present",
//                       "Late",
//                       "Half Day",
//                       "Leave",
//                       "Absent",
//                     ] as AttendanceStatus[]
//                   ).map((s) => (
//                     <button
//                       key={s}
//                       type="button"
//                       onClick={() =>
//                         void setStatusFor(selectedEmployee.id, s)
//                       }
//                       className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
//                         selectedEmployee.status === s
//                           ? statusClass(s)
//                           : "border-gray-200 text-gray-600"
//                       }`}
//                     >
//                       {s}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-3 rounded-xl border border-[#e4e2da] p-3 text-sm">
//                 <div>
//                   <p className="text-xs text-gray-400">Check in</p>
//                   <p className="font-semibold">{selectedEmployee.checkIn}</p>
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-400">Check out</p>
//                   <p className="font-semibold">{selectedEmployee.checkOut}</p>
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-400">Hours</p>
//                   <p className="font-semibold">{selectedEmployee.workHours}</p>
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-400">Overtime</p>
//                   <p className="font-semibold">{selectedEmployee.overtime}</p>
//                 </div>
//               </div>

//               <button
//                 type="button"
//                 onClick={() => setSelectedEmployee(null)}
//                 className="w-full rounded-lg border border-gray-200 py-2.5 text-sm font-medium"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function Stat({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-4">
//       <p className="text-xs text-gray-500">{label}</p>
//       <p className="mt-1 text-xl font-bold text-gray-900">{value}</p>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAttendanceByDate,
//   upsertAttendance,
//   type InteriorAttendance,
// } from "@/modules/interior/services/attendanceService";

// type AttendanceStatus =
//   | "Present"
//   | "Absent"
//   | "Late"
//   | "Half Day"
//   | "Leave";

// type Row = {
//   id: string;
//   name: string;
//   employeeId: string;
//   employeeDocId?: string;
//   department: string;
//   designation: string;
//   checkIn: string;
//   checkOut: string;
//   status: AttendanceStatus;
//   workHours: string;
//   overtime: string;
//   date: string;
// };

// const departments = [
//   "All Departments",
//   "Interior Design",
//   "Project Management",
//   "Site Operations",
//   "HR",
//   "Accounts",
//   "Sales",
//   "Other",
// ];

// const statusOptions: Array<"All Statuses" | AttendanceStatus> = [
//   "All Statuses",
//   "Present",
//   "Absent",
//   "Late",
//   "Half Day",
//   "Leave",
// ];

// const OVERTIME_PRESETS = ["0m", "15m", "30m", "45m", "1h", "1h 30m", "2h", "2h 30m", "3h"];

// function statusClass(status: AttendanceStatus) {
//   switch (status) {
//     case "Present":
//       return "bg-green-50 text-green-700 border-green-200";
//     case "Late":
//       return "bg-amber-50 text-amber-700 border-amber-200";
//     case "Half Day":
//       return "bg-blue-50 text-blue-700 border-blue-200";
//     case "Leave":
//       return "bg-purple-50 text-purple-700 border-purple-200";
//     case "Absent":
//       return "bg-red-50 text-red-700 border-red-200";
//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function normalizeStatus(raw?: string): AttendanceStatus {
//   const s = (raw || "Absent").toLowerCase();
//   if (s.includes("present")) return "Present";
//   if (s.includes("late")) return "Late";
//   if (s.includes("half")) return "Half Day";
//   if (s.includes("leave")) return "Leave";
//   return "Absent";
// }

// function mapToUi(r: InteriorAttendance, date: string): Row {
//   return {
//     id: r.id,
//     name: r.name || "Unknown",
//     employeeId: r.employeeId || "—",
//     employeeDocId: r.employeeDocId,
//     department: r.department || "Other",
//     designation: r.designation || "—",
//     checkIn: r.checkIn || "--",
//     checkOut: r.checkOut || "--",
//     status: normalizeStatus(r.status),
//     workHours: r.workHours || "0h",
//     overtime: r.overtime || "0m",
//     date: r.date || date,
//   };
// }

// function defaultsForStatus(status: AttendanceStatus) {
//   if (status === "Present")
//     return {
//       checkIn: "09:00 AM",
//       checkOut: "06:00 PM",
//       workHours: "8h 30m",
//       overtime: "0m",
//     };
//   if (status === "Late")
//     return {
//       checkIn: "09:30 AM",
//       checkOut: "06:00 PM",
//       workHours: "8h 00m",
//       overtime: "0m",
//     };
//   if (status === "Half Day")
//     return {
//       checkIn: "09:00 AM",
//       checkOut: "01:30 PM",
//       workHours: "4h 00m",
//       overtime: "0m",
//     };
//   return {
//     checkIn: "--",
//     checkOut: "--",
//     workHours: "0h",
//     overtime: "0m",
//   };
// }

// function isPresentLike(status: AttendanceStatus) {
//   return (
//     status === "Present" || status === "Late" || status === "Half Day"
//   );
// }

// export default function AttendancePage() {
//   const [attendance, setAttendance] = useState<Row[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [search, setSearch] = useState("");
//   const [department, setDepartment] = useState("All Departments");
//   const [status, setStatus] = useState<"All Statuses" | AttendanceStatus>(
//     "All Statuses"
//   );
//   const [selectedDate, setSelectedDate] = useState(
//     new Date().toISOString().slice(0, 10)
//   );
//   const [selectedEmployee, setSelectedEmployee] = useState<Row | null>(null);

//   /** Editable fields inside Update modal */
//   const [editForm, setEditForm] = useState({
//     status: "Absent" as AttendanceStatus,
//     checkIn: "",
//     checkOut: "",
//     workHours: "",
//     overtime: "0m",
//   });

//   async function load(date: string) {
//     setLoading(true);
//     try {
//       const data = await getAttendanceByDate(date);
//       setAttendance(data.map((d) => mapToUi(d, date)));
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     load(selectedDate);
//   }, [selectedDate]);

//   const filtered = useMemo(() => {
//     const q = search.toLowerCase().trim();
//     return attendance.filter((row) => {
//       const matchesSearch =
//         !q ||
//         row.name.toLowerCase().includes(q) ||
//         row.employeeId.toLowerCase().includes(q) ||
//         row.designation.toLowerCase().includes(q);
//       const matchesDept =
//         department === "All Departments" || row.department === department;
//       const matchesStatus =
//         status === "All Statuses" || row.status === status;
//       return matchesSearch && matchesDept && matchesStatus;
//     });
//   }, [attendance, search, department, status]);

//   const totalEmployees = attendance.length;
//   const presentCount = attendance.filter((r) => r.status === "Present").length;
//   const absentCount = attendance.filter((r) => r.status === "Absent").length;
//   const lateCount = attendance.filter((r) => r.status === "Late").length;
//   const leaveCount = attendance.filter((r) => r.status === "Leave").length;
//   const halfDayCount = attendance.filter((r) => r.status === "Half Day").length;
//   const attendancePercentage =
//     totalEmployees === 0
//       ? 0
//       : Math.round(
//           ((presentCount + lateCount + halfDayCount) / totalEmployees) * 100
//         );

//   async function updateRow(id: string, patch: Partial<Row>) {
//     const current = attendance.find((r) => r.id === id);
//     if (!current) return;

//     const next = { ...current, ...patch };
//     setAttendance((list) => list.map((r) => (r.id === id ? next : r)));
//     setSelectedEmployee((s) => (s && s.id === id ? next : s));

//     try {
//       await upsertAttendance({
//         id: next.id,
//         date: next.date || selectedDate,
//         employeeDocId: next.employeeDocId,
//         employeeId: next.employeeId,
//         name: next.name,
//         department: next.department,
//         designation: next.designation,
//         checkIn: next.checkIn,
//         checkOut: next.checkOut,
//         status: next.status,
//         workHours: next.workHours,
//         overtime: next.overtime,
//       });
//     } catch (err) {
//       console.error(err);
//       await load(selectedDate);
//     }
//   }

//   async function setStatusFor(id: string, nextStatus: AttendanceStatus) {
//     const defaults = defaultsForStatus(nextStatus);
//     await updateRow(id, { status: nextStatus, ...defaults });
//   }

//   async function togglePresent(row: Row) {
//     if (isPresentLike(row.status)) {
//       await setStatusFor(row.id, "Absent");
//     } else {
//       await setStatusFor(row.id, "Present");
//     }
//   }

//   function openUpdate(row: Row) {
//     setSelectedEmployee(row);
//     setEditForm({
//       status: row.status,
//       checkIn: row.checkIn === "--" ? "" : row.checkIn,
//       checkOut: row.checkOut === "--" ? "" : row.checkOut,
//       workHours: row.workHours || "0h",
//       overtime: row.overtime || "0m",
//     });
//   }

//   function applyStatusInModal(nextStatus: AttendanceStatus) {
//     const defaults = defaultsForStatus(nextStatus);
//     setEditForm((f) => ({
//       ...f,
//       status: nextStatus,
//       checkIn: defaults.checkIn === "--" ? "" : defaults.checkIn,
//       checkOut: defaults.checkOut === "--" ? "" : defaults.checkOut,
//       workHours: defaults.workHours,
//       // Keep OT if user already set it, unless Absent/Leave
//       overtime:
//         nextStatus === "Absent" || nextStatus === "Leave"
//           ? "0m"
//           : f.overtime || defaults.overtime,
//     }));
//   }

//   async function saveUpdate() {
//     if (!selectedEmployee) return;
//     setSaving(true);
//     try {
//       await updateRow(selectedEmployee.id, {
//         status: editForm.status,
//         checkIn: editForm.checkIn.trim() || "--",
//         checkOut: editForm.checkOut.trim() || "--",
//         workHours: editForm.workHours.trim() || "0h",
//         overtime: editForm.overtime.trim() || "0m",
//       });
//       setSelectedEmployee(null);
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function markAllPresent() {
//     for (const row of attendance) {
//       if (row.status === "Present") continue;
//       await setStatusFor(row.id, "Present");
//     }
//   }

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
//     const rows = filtered.map((r) =>
//       [
//         selectedDate,
//         r.employeeId,
//         r.name,
//         r.department,
//         r.status,
//         r.checkIn,
//         r.checkOut,
//         r.workHours,
//         r.overtime,
//       ].join(",")
//     );
//     const blob = new Blob([[headers.join(","), ...rows].join("\n")], {
//       type: "text/csv",
//     });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `attendance-${selectedDate}.csv`;
//     a.click();
//     URL.revokeObjectURL(url);
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1600px] px-5 py-5 lg:px-8">
//           <a
//             href="/interior/hrms"
//             className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-[#176b5b] hover:underline"
//           >
//             ← Back to HRMS
//           </a>
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               <h1 className="text-2xl font-bold tracking-tight">Attendance</h1>
//               <p className="mt-1 text-sm text-gray-500">
//                 Toggle presence, or open Update to set overtime and times.
//                 Use the date picker for past days.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               <input
//                 type="date"
//                 value={selectedDate}
//                 onChange={(e) => setSelectedDate(e.target.value)}
//                 className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//               />
//               <button
//                 type="button"
//                 onClick={markAllPresent}
//                 className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
//               >
//                 Mark All Present
//               </button>
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
//         <section className="grid grid-cols-2 gap-4 xl:grid-cols-6">
//           <Stat label="Staff" value={loading ? "…" : String(totalEmployees)} />
//           <Stat label="Present" value={loading ? "…" : String(presentCount)} />
//           <Stat label="Late" value={loading ? "…" : String(lateCount)} />
//           <Stat label="Half Day" value={loading ? "…" : String(halfDayCount)} />
//           <Stat label="Leave" value={loading ? "…" : String(leaveCount)} />
//           <Stat label="Absent" value={loading ? "…" : String(absentCount)} />
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <div className="flex items-center justify-between">
//             <p className="text-sm font-semibold">Attendance rate</p>
//             <p className="text-lg font-bold text-[#176b5b]">
//               {attendancePercentage}%
//             </p>
//           </div>
//           <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
//             <div
//               className="h-full rounded-full bg-[#176b5b]"
//               style={{ width: `${attendancePercentage}%` }}
//             />
//           </div>
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-4">
//           <div className="flex flex-col gap-3 lg:flex-row">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search name, ID, designation..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-4 py-2.5 text-sm outline-none focus:border-[#176b5b] lg:max-w-md"
//             />
//             <select
//               value={department}
//               onChange={(e) => setDepartment(e.target.value)}
//               className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {departments.map((d) => (
//                 <option key={d}>{d}</option>
//               ))}
//             </select>
//             <select
//               value={status}
//               onChange={(e) =>
//                 setStatus(e.target.value as "All Statuses" | AttendanceStatus)
//               }
//               className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {statusOptions.map((s) => (
//                 <option key={s}>{s}</option>
//               ))}
//             </select>
//           </div>
//         </section>

//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1050px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Employee</th>
//                   <th className="px-4 py-3 font-semibold">Department</th>
//                   <th className="px-4 py-3 font-semibold">Check In</th>
//                   <th className="px-4 py-3 font-semibold">Check Out</th>
//                   <th className="px-4 py-3 font-semibold">Hours</th>
//                   <th className="px-4 py-3 font-semibold">OT</th>
//                   <th className="px-4 py-3 font-semibold">Present</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
//                   <th className="px-4 py-3 text-right font-semibold">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece6]">
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={9}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       Loading attendance…
//                     </td>
//                   </tr>
//                 ) : (
//                   <>
//                     {filtered.map((row) => {
//                       const on = isPresentLike(row.status);
//                       return (
//                         <tr key={row.id} className="hover:bg-[#fafaf8]">
//                           <td className="px-5 py-4">
//                             <p className="font-semibold text-gray-900">
//                               {row.name}
//                             </p>
//                             <p className="text-xs text-[#176b5b]">
//                               {row.employeeId}
//                             </p>
//                           </td>
//                           <td className="px-4 py-4 text-sm text-gray-700">
//                             {row.department}
//                           </td>
//                           <td className="px-4 py-4 text-sm">{row.checkIn}</td>
//                           <td className="px-4 py-4 text-sm">{row.checkOut}</td>
//                           <td className="px-4 py-4 text-sm">{row.workHours}</td>
//                           <td className="px-4 py-4 text-sm font-medium text-[#9a5b18]">
//                             {row.overtime}
//                           </td>
//                           <td className="px-4 py-4">
//                             <button
//                               type="button"
//                               role="switch"
//                               aria-checked={on}
//                               title={on ? "Mark Absent" : "Mark Present"}
//                               onClick={() => void togglePresent(row)}
//                               className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${
//                                 on ? "bg-[#176b5b]" : "bg-gray-300"
//                               }`}
//                             >
//                               <span
//                                 className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-all ${
//                                   on ? "left-5" : "left-0.5"
//                                 }`}
//                               />
//                             </button>
//                           </td>
//                           <td className="px-4 py-4">
//                             <span
//                               className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                                 row.status
//                               )}`}
//                             >
//                               {row.status}
//                             </span>
//                           </td>
//                           <td className="px-4 py-4 text-right">
//                             <button
//                               type="button"
//                               onClick={() => openUpdate(row)}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                             >
//                               Update
//                             </button>
//                           </td>
//                         </tr>
//                       );
//                     })}
//                     {filtered.length === 0 && (
//                       <tr>
//                         <td
//                           colSpan={9}
//                           className="px-5 py-12 text-center text-sm text-gray-500"
//                         >
//                           No attendance rows. Add employees first.
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

//       {selectedEmployee && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="border-b border-[#e4e2da] px-6 py-4">
//               <p className="text-xs font-semibold text-[#176b5b]">
//                 {selectedEmployee.employeeId}
//               </p>
//               <h2 className="mt-1 text-lg font-bold">
//                 {selectedEmployee.name}
//               </h2>
//               <p className="mt-1 text-xs text-gray-400">Date: {selectedDate}</p>
//             </div>

//             <div className="space-y-4 p-6">
//               <div>
//                 <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
//                   Status
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {(
//                     [
//                       "Present",
//                       "Late",
//                       "Half Day",
//                       "Leave",
//                       "Absent",
//                     ] as AttendanceStatus[]
//                   ).map((s) => (
//                     <button
//                       key={s}
//                       type="button"
//                       onClick={() => applyStatusInModal(s)}
//                       className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
//                         editForm.status === s
//                           ? statusClass(s)
//                           : "border-gray-200 text-gray-600"
//                       }`}
//                     >
//                       {s}
//                     </button>
//                   ))}
//                 </div>
//                 <p className="mt-2 text-[11px] text-gray-400">
//                   Changing status fills default times/hours. You can still edit
//                   overtime below.
//                 </p>
//               </div>

//               <div className="grid grid-cols-2 gap-3">
//                 <label className="block">
//                   <span className="mb-1 block text-xs font-medium text-gray-600">
//                     Check in
//                   </span>
//                   <input
//                     value={editForm.checkIn}
//                     onChange={(e) =>
//                       setEditForm((f) => ({ ...f, checkIn: e.target.value }))
//                     }
//                     placeholder="09:00 AM"
//                     className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="mb-1 block text-xs font-medium text-gray-600">
//                     Check out
//                   </span>
//                   <input
//                     value={editForm.checkOut}
//                     onChange={(e) =>
//                       setEditForm((f) => ({ ...f, checkOut: e.target.value }))
//                     }
//                     placeholder="06:00 PM"
//                     className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="mb-1 block text-xs font-medium text-gray-600">
//                     Work hours
//                   </span>
//                   <input
//                     value={editForm.workHours}
//                     onChange={(e) =>
//                       setEditForm((f) => ({ ...f, workHours: e.target.value }))
//                     }
//                     placeholder="8h 30m"
//                     className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="mb-1 block text-xs font-medium text-gray-600">
//                     Overtime
//                   </span>
//                   <input
//                     list="ot-presets"
//                     value={editForm.overtime}
//                     onChange={(e) =>
//                       setEditForm((f) => ({ ...f, overtime: e.target.value }))
//                     }
//                     placeholder="0m / 1h / 1h 30m"
//                     className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                   <datalist id="ot-presets">
//                     {OVERTIME_PRESETS.map((p) => (
//                       <option key={p} value={p} />
//                     ))}
//                   </datalist>
//                 </label>
//               </div>

//               <div className="flex flex-wrap gap-2">
//                 {OVERTIME_PRESETS.map((p) => (
//                   <button
//                     key={p}
//                     type="button"
//                     onClick={() => setEditForm((f) => ({ ...f, overtime: p }))}
//                     className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
//                       editForm.overtime === p
//                         ? "border-[#9a5b18] bg-[#faf6f0] text-[#9a5b18]"
//                         : "border-gray-200 text-gray-600 hover:bg-gray-50"
//                     }`}
//                   >
//                     {p}
//                   </button>
//                 ))}
//               </div>

//               <div className="flex gap-2 pt-1">
//                 <button
//                   type="button"
//                   onClick={() => setSelectedEmployee(null)}
//                   className="flex-1 rounded-lg border border-gray-200 py-2.5 text-sm font-medium"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   disabled={saving}
//                   onClick={() => void saveUpdate()}
//                   className="flex-1 rounded-lg bg-[#176b5b] py-2.5 text-sm font-semibold text-white hover:bg-[#125848] disabled:opacity-60"
//                 >
//                   {saving ? "Saving…" : "Save"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function Stat({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-4">
//       <p className="text-xs text-gray-500">{label}</p>
//       <p className="mt-1 text-xl font-bold text-gray-900">{value}</p>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAttendanceByDate,
//   upsertAttendance,
//   type InteriorAttendance,
// } from "@/modules/interior/services/attendanceService";

// type AttendanceStatus =
//   | "Present"
//   | "Absent"
//   | "Late"
//   | "Half Day"
//   | "Leave";

// type Row = {
//   id: string;
//   name: string;
//   employeeId: string;
//   employeeDocId?: string;
//   department: string;
//   designation: string;
//   checkIn: string;
//   checkOut: string;
//   status: AttendanceStatus;
//   workHours: string;
//   overtime: string;
//   date: string;
// };

// const departments = [
//   "All Departments",
//   "Interior Design",
//   "Project Management",
//   "Site Operations",
//   "HR",
//   "Accounts",
//   "Sales",
//   "Other",
// ];

// const statusOptions: Array<"All Statuses" | AttendanceStatus> = [
//   "All Statuses",
//   "Present",
//   "Absent",
//   "Late",
//   "Half Day",
//   "Leave",
// ];

// const OVERTIME_PRESETS = [
//   "0m",
//   "15m",
//   "30m",
//   "45m",
//   "1h",
//   "1h 30m",
//   "2h",
//   "2h 30m",
//   "3h",
// ];

// function statusClass(status: AttendanceStatus) {
//   switch (status) {
//     case "Present":
//       return "bg-green-50 text-green-700 border-green-200";
//     case "Late":
//       return "bg-amber-50 text-amber-700 border-amber-200";
//     case "Half Day":
//       return "bg-blue-50 text-blue-700 border-blue-200";
//     case "Leave":
//       return "bg-purple-50 text-purple-700 border-purple-200";
//     case "Absent":
//       return "bg-red-50 text-red-700 border-red-200";
//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function normalizeStatus(raw?: string): AttendanceStatus {
//   const s = (raw || "Absent").toLowerCase();
//   if (s.includes("present")) return "Present";
//   if (s.includes("late")) return "Late";
//   if (s.includes("half")) return "Half Day";
//   if (s.includes("leave")) return "Leave";
//   return "Absent";
// }

// /** "09:00 AM" | "09:00" | "--" → "09:00" for <input type="time"> */
// function toTimeInputValue(value: string): string {
//   if (!value || value === "--" || value === "-") return "";
//   const v = value.trim();

//   // Already 24h HH:MM
//   const m24 = v.match(/^(\d{1,2}):(\d{2})$/);
//   if (m24) {
//     const h = Math.min(23, parseInt(m24[1]!, 10));
//     const min = Math.min(59, parseInt(m24[2]!, 10));
//     return `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
//   }

//   // 12h with AM/PM
//   const m12 = v.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
//   if (m12) {
//     let h = parseInt(m12[1]!, 10);
//     const min = parseInt(m12[2]!, 10);
//     const ap = m12[3]!.toUpperCase();
//     if (ap === "AM") {
//       if (h === 12) h = 0;
//     } else {
//       if (h !== 12) h += 12;
//     }
//     return `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
//   }

//   return "";
// }

// /** "09:00" from time input → "09:00 AM" for display / storage */
// function fromTimeInputValue(value: string): string {
//   if (!value) return "--";
//   const m = value.match(/^(\d{1,2}):(\d{2})$/);
//   if (!m) return "--";
//   let h = parseInt(m[1]!, 10);
//   const min = m[2]!;
//   const ap = h >= 12 ? "PM" : "AM";
//   if (h === 0) h = 12;
//   else if (h > 12) h -= 12;
//   return `${String(h).padStart(2, "0")}:${min} ${ap}`;
// }

// function mapToUi(r: InteriorAttendance, date: string): Row {
//   return {
//     id: r.id,
//     name: r.name || "Unknown",
//     employeeId: r.employeeId || "—",
//     employeeDocId: r.employeeDocId,
//     department: r.department || "Other",
//     designation: r.designation || "—",
//     checkIn: r.checkIn || "--",
//     checkOut: r.checkOut || "--",
//     status: normalizeStatus(r.status),
//     workHours: r.workHours || "0h",
//     overtime: r.overtime || "0m",
//     date: r.date || date,
//   };
// }

// function defaultsForStatus(status: AttendanceStatus) {
//   if (status === "Present")
//     return {
//       checkIn: "09:00 AM",
//       checkOut: "06:00 PM",
//       workHours: "8h 30m",
//       overtime: "0m",
//     };
//   if (status === "Late")
//     return {
//       checkIn: "09:30 AM",
//       checkOut: "06:00 PM",
//       workHours: "8h 00m",
//       overtime: "0m",
//     };
//   if (status === "Half Day")
//     return {
//       checkIn: "09:00 AM",
//       checkOut: "01:30 PM",
//       workHours: "4h 00m",
//       overtime: "0m",
//     };
//   return {
//     checkIn: "--",
//     checkOut: "--",
//     workHours: "0h",
//     overtime: "0m",
//   };
// }

// function isPresentLike(status: AttendanceStatus) {
//   return (
//     status === "Present" || status === "Late" || status === "Half Day"
//   );
// }

// export default function AttendancePage() {
//   const [attendance, setAttendance] = useState<Row[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [search, setSearch] = useState("");
//   const [department, setDepartment] = useState("All Departments");
//   const [status, setStatus] = useState<"All Statuses" | AttendanceStatus>(
//     "All Statuses"
//   );
//   const [selectedDate, setSelectedDate] = useState(
//     new Date().toISOString().slice(0, 10)
//   );
//   const [selectedEmployee, setSelectedEmployee] = useState<Row | null>(null);

//   /** time fields stored as HH:MM for <input type="time"> */
//   const [editForm, setEditForm] = useState({
//     status: "Absent" as AttendanceStatus,
//     checkIn: "",
//     checkOut: "",
//     workHours: "",
//     overtime: "0m",
//   });

//   async function load(date: string) {
//     setLoading(true);
//     try {
//       const data = await getAttendanceByDate(date);
//       setAttendance(data.map((d) => mapToUi(d, date)));
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     load(selectedDate);
//   }, [selectedDate]);

//   const filtered = useMemo(() => {
//     const q = search.toLowerCase().trim();
//     return attendance.filter((row) => {
//       const matchesSearch =
//         !q ||
//         row.name.toLowerCase().includes(q) ||
//         row.employeeId.toLowerCase().includes(q) ||
//         row.designation.toLowerCase().includes(q);
//       const matchesDept =
//         department === "All Departments" || row.department === department;
//       const matchesStatus =
//         status === "All Statuses" || row.status === status;
//       return matchesSearch && matchesDept && matchesStatus;
//     });
//   }, [attendance, search, department, status]);

//   const totalEmployees = attendance.length;
//   const presentCount = attendance.filter((r) => r.status === "Present").length;
//   const absentCount = attendance.filter((r) => r.status === "Absent").length;
//   const lateCount = attendance.filter((r) => r.status === "Late").length;
//   const leaveCount = attendance.filter((r) => r.status === "Leave").length;
//   const halfDayCount = attendance.filter((r) => r.status === "Half Day").length;
//   const attendancePercentage =
//     totalEmployees === 0
//       ? 0
//       : Math.round(
//           ((presentCount + lateCount + halfDayCount) / totalEmployees) * 100
//         );

//   async function updateRow(id: string, patch: Partial<Row>) {
//     const current = attendance.find((r) => r.id === id);
//     if (!current) return;

//     const next = { ...current, ...patch };
//     setAttendance((list) => list.map((r) => (r.id === id ? next : r)));
//     setSelectedEmployee((s) => (s && s.id === id ? next : s));

//     try {
//       await upsertAttendance({
//         id: next.id,
//         date: next.date || selectedDate,
//         employeeDocId: next.employeeDocId,
//         employeeId: next.employeeId,
//         name: next.name,
//         department: next.department,
//         designation: next.designation,
//         checkIn: next.checkIn,
//         checkOut: next.checkOut,
//         status: next.status,
//         workHours: next.workHours,
//         overtime: next.overtime,
//       });
//     } catch (err) {
//       console.error(err);
//       await load(selectedDate);
//     }
//   }

//   async function setStatusFor(id: string, nextStatus: AttendanceStatus) {
//     const defaults = defaultsForStatus(nextStatus);
//     await updateRow(id, { status: nextStatus, ...defaults });
//   }

//   async function togglePresent(row: Row) {
//     if (isPresentLike(row.status)) {
//       await setStatusFor(row.id, "Absent");
//     } else {
//       await setStatusFor(row.id, "Present");
//     }
//   }

//   function openUpdate(row: Row) {
//     setSelectedEmployee(row);
//     setEditForm({
//       status: row.status,
//       checkIn: toTimeInputValue(row.checkIn),
//       checkOut: toTimeInputValue(row.checkOut),
//       workHours: row.workHours || "0h",
//       overtime: row.overtime || "0m",
//     });
//   }

//   function applyStatusInModal(nextStatus: AttendanceStatus) {
//     const defaults = defaultsForStatus(nextStatus);
//     setEditForm((f) => ({
//       ...f,
//       status: nextStatus,
//       checkIn: toTimeInputValue(defaults.checkIn),
//       checkOut: toTimeInputValue(defaults.checkOut),
//       workHours: defaults.workHours,
//       overtime:
//         nextStatus === "Absent" || nextStatus === "Leave"
//           ? "0m"
//           : f.overtime || defaults.overtime,
//     }));
//   }

//   async function saveUpdate() {
//     if (!selectedEmployee) return;
//     setSaving(true);
//     try {
//       await updateRow(selectedEmployee.id, {
//         status: editForm.status,
//         checkIn: fromTimeInputValue(editForm.checkIn),
//         checkOut: fromTimeInputValue(editForm.checkOut),
//         workHours: editForm.workHours.trim() || "0h",
//         overtime: editForm.overtime.trim() || "0m",
//       });
//       setSelectedEmployee(null);
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function markAllPresent() {
//     for (const row of attendance) {
//       if (row.status === "Present") continue;
//       await setStatusFor(row.id, "Present");
//     }
//   }

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
//     const rows = filtered.map((r) =>
//       [
//         selectedDate,
//         r.employeeId,
//         r.name,
//         r.department,
//         r.status,
//         r.checkIn,
//         r.checkOut,
//         r.workHours,
//         r.overtime,
//       ].join(",")
//     );
//     const blob = new Blob([[headers.join(","), ...rows].join("\n")], {
//       type: "text/csv",
//     });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `attendance-${selectedDate}.csv`;
//     a.click();
//     URL.revokeObjectURL(url);
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1600px] px-5 py-5 lg:px-8">
//           <a
//             href="/interior/hrms"
//             className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-[#176b5b] hover:underline"
//           >
//             ← Back to HRMS
//           </a>
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               <h1 className="text-2xl font-bold tracking-tight">Attendance</h1>
//               <p className="mt-1 text-sm text-gray-500">
//                 Toggle presence, or open Update to set times and overtime.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               <input
//                 type="date"
//                 value={selectedDate}
//                 onChange={(e) => setSelectedDate(e.target.value)}
//                 className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//               />
//               <button
//                 type="button"
//                 onClick={markAllPresent}
//                 className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
//               >
//                 Mark All Present
//               </button>
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
//         <section className="grid grid-cols-2 gap-4 xl:grid-cols-6">
//           <Stat label="Staff" value={loading ? "…" : String(totalEmployees)} />
//           <Stat label="Present" value={loading ? "…" : String(presentCount)} />
//           <Stat label="Late" value={loading ? "…" : String(lateCount)} />
//           <Stat label="Half Day" value={loading ? "…" : String(halfDayCount)} />
//           <Stat label="Leave" value={loading ? "…" : String(leaveCount)} />
//           <Stat label="Absent" value={loading ? "…" : String(absentCount)} />
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <div className="flex items-center justify-between">
//             <p className="text-sm font-semibold">Attendance rate</p>
//             <p className="text-lg font-bold text-[#176b5b]">
//               {attendancePercentage}%
//             </p>
//           </div>
//           <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
//             <div
//               className="h-full rounded-full bg-[#176b5b]"
//               style={{ width: `${attendancePercentage}%` }}
//             />
//           </div>
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-4">
//           <div className="flex flex-col gap-3 lg:flex-row">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search name, ID, designation..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-4 py-2.5 text-sm outline-none focus:border-[#176b5b] lg:max-w-md"
//             />
//             <select
//               value={department}
//               onChange={(e) => setDepartment(e.target.value)}
//               className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {departments.map((d) => (
//                 <option key={d}>{d}</option>
//               ))}
//             </select>
//             <select
//               value={status}
//               onChange={(e) =>
//                 setStatus(e.target.value as "All Statuses" | AttendanceStatus)
//               }
//               className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {statusOptions.map((s) => (
//                 <option key={s}>{s}</option>
//               ))}
//             </select>
//           </div>
//         </section>

//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1050px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Employee</th>
//                   <th className="px-4 py-3 font-semibold">Department</th>
//                   <th className="px-4 py-3 font-semibold">Check In</th>
//                   <th className="px-4 py-3 font-semibold">Check Out</th>
//                   <th className="px-4 py-3 font-semibold">Hours</th>
//                   <th className="px-4 py-3 font-semibold">OT</th>
//                   <th className="px-4 py-3 font-semibold">Present</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
//                   <th className="px-4 py-3 text-right font-semibold">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece6]">
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={9}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       Loading attendance…
//                     </td>
//                   </tr>
//                 ) : (
//                   <>
//                     {filtered.map((row) => {
//                       const on = isPresentLike(row.status);
//                       return (
//                         <tr key={row.id} className="hover:bg-[#fafaf8]">
//                           <td className="px-5 py-4">
//                             <p className="font-semibold text-gray-900">
//                               {row.name}
//                             </p>
//                             <p className="text-xs text-[#176b5b]">
//                               {row.employeeId}
//                             </p>
//                           </td>
//                           <td className="px-4 py-4 text-sm text-gray-700">
//                             {row.department}
//                           </td>
//                           <td className="px-4 py-4 text-sm">{row.checkIn}</td>
//                           <td className="px-4 py-4 text-sm">{row.checkOut}</td>
//                           <td className="px-4 py-4 text-sm">{row.workHours}</td>
//                           <td className="px-4 py-4 text-sm font-medium text-[#9a5b18]">
//                             {row.overtime}
//                           </td>
//                           <td className="px-4 py-4">
//                             <button
//                               type="button"
//                               role="switch"
//                               aria-checked={on}
//                               title={on ? "Mark Absent" : "Mark Present"}
//                               onClick={() => void togglePresent(row)}
//                               className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${
//                                 on ? "bg-[#176b5b]" : "bg-gray-300"
//                               }`}
//                             >
//                               <span
//                                 className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-all ${
//                                   on ? "left-5" : "left-0.5"
//                                 }`}
//                               />
//                             </button>
//                           </td>
//                           <td className="px-4 py-4">
//                             <span
//                               className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                                 row.status
//                               )}`}
//                             >
//                               {row.status}
//                             </span>
//                           </td>
//                           <td className="px-4 py-4 text-right">
//                             <button
//                               type="button"
//                               onClick={() => openUpdate(row)}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                             >
//                               Update
//                             </button>
//                           </td>
//                         </tr>
//                       );
//                     })}
//                     {filtered.length === 0 && (
//                       <tr>
//                         <td
//                           colSpan={9}
//                           className="px-5 py-12 text-center text-sm text-gray-500"
//                         >
//                           No attendance rows. Add employees first.
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

//       {selectedEmployee && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="border-b border-[#e4e2da] px-6 py-4">
//               <p className="text-xs font-semibold text-[#176b5b]">
//                 {selectedEmployee.employeeId}
//               </p>
//               <h2 className="mt-1 text-lg font-bold">
//                 {selectedEmployee.name}
//               </h2>
//               <p className="mt-1 text-xs text-gray-400">Date: {selectedDate}</p>
//             </div>

//             <div className="space-y-4 p-6">
//               <div>
//                 <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
//                   Status
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {(
//                     [
//                       "Present",
//                       "Late",
//                       "Half Day",
//                       "Leave",
//                       "Absent",
//                     ] as AttendanceStatus[]
//                   ).map((s) => (
//                     <button
//                       key={s}
//                       type="button"
//                       onClick={() => applyStatusInModal(s)}
//                       className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
//                         editForm.status === s
//                           ? statusClass(s)
//                           : "border-gray-200 text-gray-600"
//                       }`}
//                     >
//                       {s}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-3">
//                 <label className="block">
//                   <span className="mb-1 block text-xs font-medium text-gray-600">
//                     Check in
//                   </span>
//                   <input
//                     type="time"
//                     value={editForm.checkIn}
//                     onChange={(e) =>
//                       setEditForm((f) => ({ ...f, checkIn: e.target.value }))
//                     }
//                     className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="mb-1 block text-xs font-medium text-gray-600">
//                     Check out
//                   </span>
//                   <input
//                     type="time"
//                     value={editForm.checkOut}
//                     onChange={(e) =>
//                       setEditForm((f) => ({ ...f, checkOut: e.target.value }))
//                     }
//                     className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="mb-1 block text-xs font-medium text-gray-600">
//                     Work hours
//                   </span>
//                   <input
//                     value={editForm.workHours}
//                     onChange={(e) =>
//                       setEditForm((f) => ({ ...f, workHours: e.target.value }))
//                     }
//                     placeholder="8h 30m"
//                     className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="mb-1 block text-xs font-medium text-gray-600">
//                     Overtime
//                   </span>
//                   <input
//                     list="ot-presets"
//                     value={editForm.overtime}
//                     onChange={(e) =>
//                       setEditForm((f) => ({ ...f, overtime: e.target.value }))
//                     }
//                     placeholder="0m / 1h"
//                     className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                   <datalist id="ot-presets">
//                     {OVERTIME_PRESETS.map((p) => (
//                       <option key={p} value={p} />
//                     ))}
//                   </datalist>
//                 </label>
//               </div>

//               <div className="flex flex-wrap gap-2">
//                 {OVERTIME_PRESETS.map((p) => (
//                   <button
//                     key={p}
//                     type="button"
//                     onClick={() => setEditForm((f) => ({ ...f, overtime: p }))}
//                     className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
//                       editForm.overtime === p
//                         ? "border-[#9a5b18] bg-[#faf6f0] text-[#9a5b18]"
//                         : "border-gray-200 text-gray-600 hover:bg-gray-50"
//                     }`}
//                   >
//                     {p}
//                   </button>
//                 ))}
//               </div>

//               <div className="flex gap-2 pt-1">
//                 <button
//                   type="button"
//                   onClick={() => setSelectedEmployee(null)}
//                   className="flex-1 rounded-lg border border-gray-200 py-2.5 text-sm font-medium"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   disabled={saving}
//                   onClick={() => void saveUpdate()}
//                   className="flex-1 rounded-lg bg-[#176b5b] py-2.5 text-sm font-semibold text-white hover:bg-[#125848] disabled:opacity-60"
//                 >
//                   {saving ? "Saving…" : "Save"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function Stat({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-4">
//       <p className="text-xs text-gray-500">{label}</p>
//       <p className="mt-1 text-xl font-bold text-gray-900">{value}</p>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAttendanceByDate,
//   upsertAttendance,
//   type InteriorAttendance,
// } from "@/modules/interior/services/attendanceService";

// type AttendanceStatus =
//   | "Present"
//   | "Absent"
//   | "Late"
//   | "Half Day"
//   | "Leave";

// type Row = {
//   id: string;
//   name: string;
//   employeeId: string;
//   employeeDocId?: string;
//   department: string;
//   designation: string;
//   checkIn: string;
//   checkOut: string;
//   status: AttendanceStatus;
//   workHours: string;
//   overtime: string;
//   date: string;
// };

// const departments = [
//   "All Departments",
//   "Interior Design",
//   "Project Management",
//   "Site Operations",
//   "HR",
//   "Accounts",
//   "Sales",
//   "Other",
// ];

// const statusOptions: Array<"All Statuses" | AttendanceStatus> = [
//   "All Statuses",
//   "Present",
//   "Absent",
//   "Late",
//   "Half Day",
//   "Leave",
// ];

// const OVERTIME_PRESETS = [
//   "0m",
//   "15m",
//   "30m",
//   "45m",
//   "1h",
//   "1h 30m",
//   "2h",
//   "2h 30m",
//   "3h",
// ];

// function statusClass(status: AttendanceStatus) {
//   switch (status) {
//     case "Present":
//       return "bg-green-50 text-green-700 border-green-200";
//     case "Late":
//       return "bg-amber-50 text-amber-700 border-amber-200";
//     case "Half Day":
//       return "bg-blue-50 text-blue-700 border-blue-200";
//     case "Leave":
//       return "bg-purple-50 text-purple-700 border-purple-200";
//     case "Absent":
//       return "bg-red-50 text-red-700 border-red-200";
//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function normalizeStatus(raw?: string): AttendanceStatus {
//   const s = (raw || "Absent").toLowerCase();
//   if (s.includes("present")) return "Present";
//   if (s.includes("late")) return "Late";
//   if (s.includes("half")) return "Half Day";
//   if (s.includes("leave")) return "Leave";
//   return "Absent";
// }

// /** "09:00 AM" | "09:00" | "--" → "09:00" for <input type="time"> */
// function toTimeInputValue(value: string): string {
//   if (!value || value === "--" || value === "-") return "";
//   const v = value.trim();

//   // Already 24h HH:MM
//   const m24 = v.match(/^(\d{1,2}):(\d{2})$/);
//   if (m24) {
//     const h = Math.min(23, parseInt(m24[1]!, 10));
//     const min = Math.min(59, parseInt(m24[2]!, 10));
//     return `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
//   }

//   // 12h with AM/PM
//   const m12 = v.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
//   if (m12) {
//     let h = parseInt(m12[1]!, 10);
//     const min = parseInt(m12[2]!, 10);
//     const ap = m12[3]!.toUpperCase();
//     if (ap === "AM") {
//       if (h === 12) h = 0;
//     } else {
//       if (h !== 12) h += 12;
//     }
//     return `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
//   }

//   return "";
// }

// /** "09:00" from time input → "09:00 AM" for display / storage */
// function fromTimeInputValue(value: string): string {
//   if (!value) return "--";
//   const m = value.match(/^(\d{1,2}):(\d{2})$/);
//   if (!m) return "--";
//   let h = parseInt(m[1]!, 10);
//   const min = m[2]!;
//   const ap = h >= 12 ? "PM" : "AM";
//   if (h === 0) h = 12;
//   else if (h > 12) h -= 12;
//   return `${String(h).padStart(2, "0")}:${min} ${ap}`;
// }

// function mapToUi(r: InteriorAttendance, date: string): Row {
//   return {
//     id: r.id,
//     name: r.name || "Unknown",
//     employeeId: r.employeeId || "—",
//     employeeDocId: r.employeeDocId,
//     department: r.department || "Other",
//     designation: r.designation || "—",
//     checkIn: r.checkIn || "--",
//     checkOut: r.checkOut || "--",
//     status: normalizeStatus(r.status),
//     workHours: r.workHours || "0h",
//     overtime: r.overtime || "0m",
//     date: r.date || date,
//   };
// }

// function defaultsForStatus(status: AttendanceStatus) {
//   if (status === "Present")
//     return {
//       checkIn: "09:00 AM",
//       checkOut: "06:00 PM",
//       workHours: "8h 30m",
//       overtime: "0m",
//     };
//   if (status === "Late")
//     return {
//       checkIn: "09:30 AM",
//       checkOut: "06:00 PM",
//       workHours: "8h 00m",
//       overtime: "0m",
//     };
//   if (status === "Half Day")
//     return {
//       checkIn: "09:00 AM",
//       checkOut: "01:30 PM",
//       workHours: "4h 00m",
//       overtime: "0m",
//     };
//   return {
//     checkIn: "--",
//     checkOut: "--",
//     workHours: "0h",
//     overtime: "0m",
//   };
// }

// function isPresentLike(status: AttendanceStatus) {
//   return (
//     status === "Present" || status === "Late" || status === "Half Day"
//   );
// }

// export default function AttendancePage() {
//   const [attendance, setAttendance] = useState<Row[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [search, setSearch] = useState("");
//   const [department, setDepartment] = useState("All Departments");
//   const [status, setStatus] = useState<"All Statuses" | AttendanceStatus>(
//     "All Statuses"
//   );
//   const [selectedDate, setSelectedDate] = useState(
//     new Date().toISOString().slice(0, 10)
//   );
//   const [selectedEmployee, setSelectedEmployee] = useState<Row | null>(null);

//   /** time fields stored as HH:MM for <input type="time"> */
//   const [editForm, setEditForm] = useState({
//     status: "Absent" as AttendanceStatus,
//     checkIn: "",
//     checkOut: "",
//     workHours: "",
//     overtime: "0m",
//   });

//   async function load(date: string) {
//     setLoading(true);
//     try {
//       const data = await getAttendanceByDate(date);
//       setAttendance(data.map((d) => mapToUi(d, date)));
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     load(selectedDate);
//   }, [selectedDate]);

//   const filtered = useMemo(() => {
//     const q = search.toLowerCase().trim();
//     return attendance.filter((row) => {
//       const matchesSearch =
//         !q ||
//         row.name.toLowerCase().includes(q) ||
//         row.employeeId.toLowerCase().includes(q) ||
//         row.designation.toLowerCase().includes(q);
//       const matchesDept =
//         department === "All Departments" || row.department === department;
//       const matchesStatus =
//         status === "All Statuses" || row.status === status;
//       return matchesSearch && matchesDept && matchesStatus;
//     });
//   }, [attendance, search, department, status]);

//   const totalEmployees = attendance.length;
//   const presentCount = attendance.filter((r) => r.status === "Present").length;
//   const absentCount = attendance.filter((r) => r.status === "Absent").length;
//   const lateCount = attendance.filter((r) => r.status === "Late").length;
//   const leaveCount = attendance.filter((r) => r.status === "Leave").length;
//   const halfDayCount = attendance.filter((r) => r.status === "Half Day").length;
//   const attendancePercentage =
//     totalEmployees === 0
//       ? 0
//       : Math.round(
//           ((presentCount + lateCount + halfDayCount) / totalEmployees) * 100
//         );

//   async function updateRow(id: string, patch: Partial<Row>) {
//     const current = attendance.find((r) => r.id === id);
//     if (!current) return;

//     const next = { ...current, ...patch };
//     setAttendance((list) => list.map((r) => (r.id === id ? next : r)));
//     setSelectedEmployee((s) => (s && s.id === id ? next : s));

//     try {
//       await upsertAttendance({
//         id: next.id,
//         date: next.date || selectedDate,
//         employeeDocId: next.employeeDocId,
//         employeeId: next.employeeId,
//         name: next.name,
//         department: next.department,
//         designation: next.designation,
//         checkIn: next.checkIn,
//         checkOut: next.checkOut,
//         status: next.status,
//         workHours: next.workHours,
//         overtime: next.overtime,
//       });
//     } catch (err) {
//       console.error(err);
//       await load(selectedDate);
//     }
//   }

//   async function setStatusFor(id: string, nextStatus: AttendanceStatus) {
//     const defaults = defaultsForStatus(nextStatus);
//     await updateRow(id, { status: nextStatus, ...defaults });
//   }

//   async function togglePresent(row: Row) {
//     if (isPresentLike(row.status)) {
//       await setStatusFor(row.id, "Absent");
//     } else {
//       await setStatusFor(row.id, "Present");
//     }
//   }

//   function openUpdate(row: Row) {
//     setSelectedEmployee(row);
//     setEditForm({
//       status: row.status,
//       checkIn: toTimeInputValue(row.checkIn),
//       checkOut: toTimeInputValue(row.checkOut),
//       workHours: row.workHours || "0h",
//       overtime: row.overtime || "0m",
//     });
//   }

//   function applyStatusInModal(nextStatus: AttendanceStatus) {
//     const defaults = defaultsForStatus(nextStatus);
//     setEditForm((f) => ({
//       ...f,
//       status: nextStatus,
//       checkIn: toTimeInputValue(defaults.checkIn),
//       checkOut: toTimeInputValue(defaults.checkOut),
//       workHours: defaults.workHours,
//       overtime:
//         nextStatus === "Absent" || nextStatus === "Leave"
//           ? "0m"
//           : f.overtime || defaults.overtime,
//     }));
//   }

//   async function saveUpdate() {
//     if (!selectedEmployee) return;
//     setSaving(true);
//     try {
//       await updateRow(selectedEmployee.id, {
//         status: editForm.status,
//         checkIn: fromTimeInputValue(editForm.checkIn),
//         checkOut: fromTimeInputValue(editForm.checkOut),
//         workHours: editForm.workHours.trim() || "0h",
//         overtime: editForm.overtime.trim() || "0m",
//       });
//       setSelectedEmployee(null);
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function markAllPresent() {
//     for (const row of attendance) {
//       if (row.status === "Present") continue;
//       await setStatusFor(row.id, "Present");
//     }
//   }

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
//     const rows = filtered.map((r) =>
//       [
//         selectedDate,
//         r.employeeId,
//         r.name,
//         r.department,
//         r.status,
//         r.checkIn,
//         r.checkOut,
//         r.workHours,
//         r.overtime,
//       ].join(",")
//     );
//     const blob = new Blob([[headers.join(","), ...rows].join("\n")], {
//       type: "text/csv",
//     });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `attendance-${selectedDate}.csv`;
//     a.click();
//     URL.revokeObjectURL(url);
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1600px] px-5 py-5 lg:px-8">
//           <a
//             href="/interior/hrms"
//             className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-[#176b5b] hover:underline"
//           >
//             ← Back to HRMS
//           </a>
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               <h1 className="text-2xl font-bold tracking-tight">Attendance</h1>
//               <p className="mt-1 text-sm text-gray-500">
//                 Toggle presence, or open Update to set times and overtime.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               <input
//                 type="date"
//                 value={selectedDate}
//                 onChange={(e) => setSelectedDate(e.target.value)}
//                 className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//               />
//               <button
//                 type="button"
//                 onClick={markAllPresent}
//                 className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
//               >
//                 Mark All Present
//               </button>
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
//         <section className="grid grid-cols-2 gap-4 xl:grid-cols-6">
//           <Stat label="Staff" value={loading ? "…" : String(totalEmployees)} />
//           <Stat label="Present" value={loading ? "…" : String(presentCount)} />
//           <Stat label="Late" value={loading ? "…" : String(lateCount)} />
//           <Stat label="Half Day" value={loading ? "…" : String(halfDayCount)} />
//           <Stat label="Leave" value={loading ? "…" : String(leaveCount)} />
//           <Stat label="Absent" value={loading ? "…" : String(absentCount)} />
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <div className="flex items-center justify-between">
//             <p className="text-sm font-semibold">Attendance rate</p>
//             <p className="text-lg font-bold text-[#176b5b]">
//               {attendancePercentage}%
//             </p>
//           </div>
//           <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
//             <div
//               className="h-full rounded-full bg-[#176b5b]"
//               style={{ width: `${attendancePercentage}%` }}
//             />
//           </div>
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-4">
//           <div className="flex flex-col gap-3 lg:flex-row">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search name, ID, designation..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-4 py-2.5 text-sm outline-none focus:border-[#176b5b] lg:max-w-md"
//             />
//             <select
//               value={department}
//               onChange={(e) => setDepartment(e.target.value)}
//               className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {departments.map((d) => (
//                 <option key={d}>{d}</option>
//               ))}
//             </select>
//             <select
//               value={status}
//               onChange={(e) =>
//                 setStatus(e.target.value as "All Statuses" | AttendanceStatus)
//               }
//               className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {statusOptions.map((s) => (
//                 <option key={s}>{s}</option>
//               ))}
//             </select>
//           </div>
//         </section>

//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1050px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Employee</th>
//                   <th className="px-4 py-3 font-semibold">Department</th>
//                   <th className="px-4 py-3 font-semibold">Check In</th>
//                   <th className="px-4 py-3 font-semibold">Check Out</th>
//                   <th className="px-4 py-3 font-semibold">Hours</th>
//                   <th className="px-4 py-3 font-semibold">OT</th>
//                   <th className="px-4 py-3 font-semibold">Present</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
//                   <th className="px-4 py-3 text-right font-semibold">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece6]">
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={9}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       Loading attendance…
//                     </td>
//                   </tr>
//                 ) : (
//                   <>
//                     {filtered.map((row) => {
//                       const on = isPresentLike(row.status);
//                       return (
//                         <tr key={row.id} className="hover:bg-[#fafaf8]">
//                           <td className="px-5 py-4">
//                             <p className="font-semibold text-gray-900">
//                               {row.name}
//                             </p>
//                             <p className="text-xs text-[#176b5b]">
//                               {row.employeeId}
//                             </p>
//                           </td>
//                           <td className="px-4 py-4 text-sm text-gray-700">
//                             {row.department}
//                           </td>
//                           <td className="px-4 py-4 text-sm">{row.checkIn}</td>
//                           <td className="px-4 py-4 text-sm">{row.checkOut}</td>
//                           <td className="px-4 py-4 text-sm">{row.workHours}</td>
//                           <td className="px-4 py-4 text-sm font-medium text-[#9a5b18]">
//                             {row.overtime}
//                           </td>
//                           <td className="px-4 py-4">
//                             <button
//                               type="button"
//                               role="switch"
//                               aria-checked={on}
//                               title={on ? "Mark Absent" : "Mark Present"}
//                               onClick={() => void togglePresent(row)}
//                               className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${
//                                 on ? "bg-[#176b5b]" : "bg-gray-300"
//                               }`}
//                             >
//                               <span
//                                 className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-all ${
//                                   on ? "left-5" : "left-0.5"
//                                 }`}
//                               />
//                             </button>
//                           </td>
//                           <td className="px-4 py-4">
//                             <span
//                               className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                                 row.status
//                               )}`}
//                             >
//                               {row.status}
//                             </span>
//                           </td>
//                           <td className="px-4 py-4 text-right">
//                             <button
//                               type="button"
//                               onClick={() => openUpdate(row)}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                             >
//                               Update
//                             </button>
//                           </td>
//                         </tr>
//                       );
//                     })}
//                     {filtered.length === 0 && (
//                       <tr>
//                         <td
//                           colSpan={9}
//                           className="px-5 py-12 text-center text-sm text-gray-500"
//                         >
//                           No attendance rows. Add employees first.
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

//       {selectedEmployee && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="border-b border-[#e4e2da] px-6 py-4">
//               <p className="text-xs font-semibold text-[#176b5b]">
//                 {selectedEmployee.employeeId}
//               </p>
//               <h2 className="mt-1 text-lg font-bold">
//                 {selectedEmployee.name}
//               </h2>
//               <p className="mt-1 text-xs text-gray-400">Date: {selectedDate}</p>
//             </div>

//             <div className="space-y-4 p-6">
//               <div>
//                 <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
//                   Status
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {(
//                     [
//                       "Present",
//                       "Late",
//                       "Half Day",
//                       "Leave",
//                       "Absent",
//                     ] as AttendanceStatus[]
//                   ).map((s) => (
//                     <button
//                       key={s}
//                       type="button"
//                       onClick={() => applyStatusInModal(s)}
//                       className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
//                         editForm.status === s
//                           ? statusClass(s)
//                           : "border-gray-200 text-gray-600"
//                       }`}
//                     >
//                       {s}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-3">
//                 <label className="block">
//                   <span className="mb-1 block text-xs font-medium text-gray-600">
//                     Check in
//                   </span>
//                   <input
//                     type="time"
//                     value={editForm.checkIn}
//                     onChange={(e) =>
//                       setEditForm((f) => ({ ...f, checkIn: e.target.value }))
//                     }
//                     className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="mb-1 block text-xs font-medium text-gray-600">
//                     Check out
//                   </span>
//                   <input
//                     type="time"
//                     value={editForm.checkOut}
//                     onChange={(e) =>
//                       setEditForm((f) => ({ ...f, checkOut: e.target.value }))
//                     }
//                     className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="mb-1 block text-xs font-medium text-gray-600">
//                     Work hours
//                   </span>
//                   <input
//                     value={editForm.workHours}
//                     onChange={(e) =>
//                       setEditForm((f) => ({ ...f, workHours: e.target.value }))
//                     }
//                     placeholder="8h 30m"
//                     className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="mb-1 block text-xs font-medium text-gray-600">
//                     Overtime
//                   </span>
//                   <input
//                     list="ot-presets"
//                     value={editForm.overtime}
//                     onChange={(e) =>
//                       setEditForm((f) => ({ ...f, overtime: e.target.value }))
//                     }
//                     placeholder="0m / 1h"
//                     className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                   <datalist id="ot-presets">
//                     {OVERTIME_PRESETS.map((p) => (
//                       <option key={p} value={p} />
//                     ))}
//                   </datalist>
//                 </label>
//               </div>

//               <div className="flex flex-wrap gap-2">
//                 {OVERTIME_PRESETS.map((p) => (
//                   <button
//                     key={p}
//                     type="button"
//                     onClick={() => setEditForm((f) => ({ ...f, overtime: p }))}
//                     className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
//                       editForm.overtime === p
//                         ? "border-[#9a5b18] bg-[#faf6f0] text-[#9a5b18]"
//                         : "border-gray-200 text-gray-600 hover:bg-gray-50"
//                     }`}
//                   >
//                     {p}
//                   </button>
//                 ))}
//               </div>

//               <div className="flex gap-2 pt-1">
//                 <button
//                   type="button"
//                   onClick={() => setSelectedEmployee(null)}
//                   className="flex-1 rounded-lg border border-gray-200 py-2.5 text-sm font-medium"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   disabled={saving}
//                   onClick={() => void saveUpdate()}
//                   className="flex-1 rounded-lg bg-[#176b5b] py-2.5 text-sm font-semibold text-white hover:bg-[#125848] disabled:opacity-60"
//                 >
//                   {saving ? "Saving…" : "Save"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function Stat({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-4">
//       <p className="text-xs text-gray-500">{label}</p>
//       <p className="mt-1 text-xl font-bold text-gray-900">{value}</p>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAttendanceByDate,
//   upsertAttendance,
//   type InteriorAttendance,
// } from "@/modules/interior/services/attendanceService";

// type AttendanceStatus =
//   | "Present"
//   | "Absent"
//   | "Late"
//   | "Half Day"
//   | "Leave";

// type Row = {
//   id: string;
//   name: string;
//   employeeId: string;
//   employeeDocId?: string;
//   department: string;
//   designation: string;
//   checkIn: string;
//   checkOut: string;
//   status: AttendanceStatus;
//   workHours: string;
//   overtime: string;
//   date: string;
// };

// const departments = [
//   "All Departments",
//   "Interior Design",
//   "Project Management",
//   "Site Operations",
//   "HR",
//   "Accounts",
//   "Sales",
//   "Other",
// ];

// const statusOptions: Array<"All Statuses" | AttendanceStatus> = [
//   "All Statuses",
//   "Present",
//   "Absent",
//   "Late",
//   "Half Day",
//   "Leave",
// ];

// const OVERTIME_PRESETS = [
//   "0m",
//   "15m",
//   "30m",
//   "45m",
//   "1h",
//   "1h 30m",
//   "2h",
//   "2h 30m",
//   "3h",
// ];

// /** Standard day for overtime (8h 30m) */
// const STANDARD_DAY_MINUTES = 8 * 60 + 30;

// function statusClass(status: AttendanceStatus) {
//   switch (status) {
//     case "Present":
//       return "bg-green-50 text-green-700 border-green-200";
//     case "Late":
//       return "bg-amber-50 text-amber-700 border-amber-200";
//     case "Half Day":
//       return "bg-blue-50 text-blue-700 border-blue-200";
//     case "Leave":
//       return "bg-purple-50 text-purple-700 border-purple-200";
//     case "Absent":
//       return "bg-red-50 text-red-700 border-red-200";
//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function normalizeStatus(raw?: string): AttendanceStatus {
//   const s = (raw || "Absent").toLowerCase();
//   if (s.includes("present")) return "Present";
//   if (s.includes("late")) return "Late";
//   if (s.includes("half")) return "Half Day";
//   if (s.includes("leave")) return "Leave";
//   return "Absent";
// }

// /** Display / stored time → HH:MM for <input type="time"> */
// function toTimeInputValue(value: string): string {
//   if (!value || value === "--" || value === "-") return "";
//   const v = value.trim();

//   const m24 = v.match(/^(\d{1,2}):(\d{2})$/);
//   if (m24) {
//     const h = Math.min(23, parseInt(m24[1]!, 10));
//     const min = Math.min(59, parseInt(m24[2]!, 10));
//     return `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
//   }

//   const m12 = v.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
//   if (m12) {
//     let h = parseInt(m12[1]!, 10);
//     const min = parseInt(m12[2]!, 10);
//     const ap = m12[3]!.toUpperCase();
//     if (ap === "AM") {
//       if (h === 12) h = 0;
//     } else if (h !== 12) {
//       h += 12;
//     }
//     return `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
//   }

//   return "";
// }

// /** HH:MM → "09:00 AM" for table / Firebase */
// function fromTimeInputValue(value: string): string {
//   if (!value) return "--";
//   const m = value.match(/^(\d{1,2}):(\d{2})$/);
//   if (!m) return "--";
//   let h = parseInt(m[1]!, 10);
//   const min = m[2]!;
//   const ap = h >= 12 ? "PM" : "AM";
//   if (h === 0) h = 12;
//   else if (h > 12) h -= 12;
//   return `${String(h).padStart(2, "0")}:${min} ${ap}`;
// }

// function timeToMinutes(value: string): number | null {
//   if (!value) return null;
//   const m = value.match(/^(\d{1,2}):(\d{2})$/);
//   if (!m) return null;
//   const h = parseInt(m[1]!, 10);
//   const min = parseInt(m[2]!, 10);
//   if (!Number.isFinite(h) || !Number.isFinite(min)) return null;
//   return h * 60 + min;
// }

// function formatDuration(totalMinutes: number): string {
//   if (totalMinutes <= 0) return "0h";
//   const h = Math.floor(totalMinutes / 60);
//   const m = totalMinutes % 60;
//   if (h === 0) return `${m}m`;
//   if (m === 0) return `${h}h`;
//   return `${h}h ${String(m).padStart(2, "0")}m`;
// }

// /** Work hours + OT from check-in / check-out (HH:MM) */
// function computeHoursFromTimes(
//   checkInHHMM: string,
//   checkOutHHMM: string
// ): { workHours: string; overtime: string } {
//   const inMin = timeToMinutes(checkInHHMM);
//   const outMin = timeToMinutes(checkOutHHMM);

//   if (inMin === null || outMin === null) {
//     return { workHours: "0h", overtime: "0m" };
//   }

//   let worked = outMin - inMin;
//   if (worked < 0) worked += 24 * 60;

//   const ot = Math.max(0, worked - STANDARD_DAY_MINUTES);

//   return {
//     workHours: formatDuration(worked),
//     overtime: ot === 0 ? "0m" : formatDuration(ot),
//   };
// }

// function mapToUi(r: InteriorAttendance, date: string): Row {
//   return {
//     id: r.id,
//     name: r.name || "Unknown",
//     employeeId: r.employeeId || "—",
//     employeeDocId: r.employeeDocId,
//     department: r.department || "Other",
//     designation: r.designation || "—",
//     checkIn: r.checkIn || "--",
//     checkOut: r.checkOut || "--",
//     status: normalizeStatus(r.status),
//     workHours: r.workHours || "0h",
//     overtime: r.overtime || "0m",
//     date: r.date || date,
//   };
// }

// function defaultsForStatus(status: AttendanceStatus) {
//   if (status === "Present")
//     return { checkIn: "09:00 AM", checkOut: "06:00 PM" };
//   if (status === "Late")
//     return { checkIn: "09:30 AM", checkOut: "06:00 PM" };
//   if (status === "Half Day")
//     return { checkIn: "09:00 AM", checkOut: "01:30 PM" };
//   return { checkIn: "--", checkOut: "--" };
// }

// function isPresentLike(status: AttendanceStatus) {
//   return (
//     status === "Present" || status === "Late" || status === "Half Day"
//   );
// }

// export default function AttendancePage() {
//   const [attendance, setAttendance] = useState<Row[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [search, setSearch] = useState("");
//   const [department, setDepartment] = useState("All Departments");
//   const [status, setStatus] = useState<"All Statuses" | AttendanceStatus>(
//     "All Statuses"
//   );
//   const [selectedDate, setSelectedDate] = useState(
//     new Date().toISOString().slice(0, 10)
//   );
//   const [selectedEmployee, setSelectedEmployee] = useState<Row | null>(null);

//   /** checkIn / checkOut stored as HH:MM for time inputs */
//   const [editForm, setEditForm] = useState({
//     status: "Absent" as AttendanceStatus,
//     checkIn: "",
//     checkOut: "",
//     overtime: "0m",
//   });

//   /** true when user picks OT chip / types OT manually */
//   const [otManual, setOtManual] = useState(false);

//   /** Always recalculates when either time changes */
//   const autoHours = useMemo(
//     () => computeHoursFromTimes(editForm.checkIn, editForm.checkOut),
//     [editForm.checkIn, editForm.checkOut]
//   );

//   /** Keep OT in sync with auto calc unless user overrode it */
//   useEffect(() => {
//     if (otManual) return;
//     setEditForm((f) =>
//       f.overtime === autoHours.overtime
//         ? f
//         : { ...f, overtime: autoHours.overtime }
//     );
//   }, [autoHours.overtime, otManual]);

//   async function load(date: string) {
//     setLoading(true);
//     try {
//       const data = await getAttendanceByDate(date);
//       setAttendance(data.map((d) => mapToUi(d, date)));
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     load(selectedDate);
//   }, [selectedDate]);

//   const filtered = useMemo(() => {
//     const q = search.toLowerCase().trim();
//     return attendance.filter((row) => {
//       const matchesSearch =
//         !q ||
//         row.name.toLowerCase().includes(q) ||
//         row.employeeId.toLowerCase().includes(q) ||
//         row.designation.toLowerCase().includes(q);
//       const matchesDept =
//         department === "All Departments" || row.department === department;
//       const matchesStatus =
//         status === "All Statuses" || row.status === status;
//       return matchesSearch && matchesDept && matchesStatus;
//     });
//   }, [attendance, search, department, status]);

//   const totalEmployees = attendance.length;
//   const presentCount = attendance.filter((r) => r.status === "Present").length;
//   const absentCount = attendance.filter((r) => r.status === "Absent").length;
//   const lateCount = attendance.filter((r) => r.status === "Late").length;
//   const leaveCount = attendance.filter((r) => r.status === "Leave").length;
//   const halfDayCount = attendance.filter((r) => r.status === "Half Day").length;
//   const attendancePercentage =
//     totalEmployees === 0
//       ? 0
//       : Math.round(
//           ((presentCount + lateCount + halfDayCount) / totalEmployees) * 100
//         );

//   async function updateRow(id: string, patch: Partial<Row>) {
//     const current = attendance.find((r) => r.id === id);
//     if (!current) return;

//     const next = { ...current, ...patch };
//     setAttendance((list) => list.map((r) => (r.id === id ? next : r)));
//     setSelectedEmployee((s) => (s && s.id === id ? next : s));

//     try {
//       await upsertAttendance({
//         id: next.id,
//         date: next.date || selectedDate,
//         employeeDocId: next.employeeDocId,
//         employeeId: next.employeeId,
//         name: next.name,
//         department: next.department,
//         designation: next.designation,
//         checkIn: next.checkIn,
//         checkOut: next.checkOut,
//         status: next.status,
//         workHours: next.workHours,
//         overtime: next.overtime,
//       });
//     } catch (err) {
//       console.error(err);
//       await load(selectedDate);
//     }
//   }

//   async function setStatusFor(id: string, nextStatus: AttendanceStatus) {
//     const defaults = defaultsForStatus(nextStatus);
//     const inHH = toTimeInputValue(defaults.checkIn);
//     const outHH = toTimeInputValue(defaults.checkOut);
//     const computed = computeHoursFromTimes(inHH, outHH);

//     await updateRow(id, {
//       status: nextStatus,
//       checkIn: defaults.checkIn,
//       checkOut: defaults.checkOut,
//       workHours: computed.workHours,
//       overtime: computed.overtime,
//     });
//   }

//   async function togglePresent(row: Row) {
//     if (isPresentLike(row.status)) {
//       await setStatusFor(row.id, "Absent");
//     } else {
//       await setStatusFor(row.id, "Present");
//     }
//   }

//   function openUpdate(row: Row) {
//     setOtManual(false);
//     setSelectedEmployee(row);
//     const checkIn = toTimeInputValue(row.checkIn);
//     const checkOut = toTimeInputValue(row.checkOut);
//     const computed = computeHoursFromTimes(checkIn, checkOut);

//     setEditForm({
//       status: row.status,
//       checkIn,
//       checkOut,
//       overtime: computed.overtime,
//     });
//   }

//   function applyStatusInModal(nextStatus: AttendanceStatus) {
//     setOtManual(false);
//     const defaults = defaultsForStatus(nextStatus);
//     const checkIn = toTimeInputValue(defaults.checkIn);
//     const checkOut = toTimeInputValue(defaults.checkOut);
//     const computed = computeHoursFromTimes(checkIn, checkOut);

//     setEditForm({
//       status: nextStatus,
//       checkIn,
//       checkOut,
//       overtime: computed.overtime,
//     });
//   }

//   async function saveUpdate() {
//     if (!selectedEmployee) return;
//     setSaving(true);
//     try {
//       const computed = computeHoursFromTimes(
//         editForm.checkIn,
//         editForm.checkOut
//       );
//       await updateRow(selectedEmployee.id, {
//         status: editForm.status,
//         checkIn: fromTimeInputValue(editForm.checkIn),
//         checkOut: fromTimeInputValue(editForm.checkOut),
//         workHours: computed.workHours,
//         overtime: editForm.overtime.trim() || computed.overtime,
//       });
//       setSelectedEmployee(null);
//       setOtManual(false);
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function markAllPresent() {
//     for (const row of attendance) {
//       if (row.status === "Present") continue;
//       await setStatusFor(row.id, "Present");
//     }
//   }

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
//     const rows = filtered.map((r) =>
//       [
//         selectedDate,
//         r.employeeId,
//         r.name,
//         r.department,
//         r.status,
//         r.checkIn,
//         r.checkOut,
//         r.workHours,
//         r.overtime,
//       ].join(",")
//     );
//     const blob = new Blob([[headers.join(","), ...rows].join("\n")], {
//       type: "text/csv",
//     });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `attendance-${selectedDate}.csv`;
//     a.click();
//     URL.revokeObjectURL(url);
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1600px] px-5 py-5 lg:px-8">
//           <a
//             href="/interior/hrms"
//             className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-[#176b5b] hover:underline"
//           >
//             ← Back to HRMS
//           </a>
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               <h1 className="text-2xl font-bold tracking-tight">Attendance</h1>
//               <p className="mt-1 text-sm text-gray-500">
//                 Work hours update automatically from check-in / check-out.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               <input
//                 type="date"
//                 value={selectedDate}
//                 onChange={(e) => setSelectedDate(e.target.value)}
//                 className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//               />
//               <button
//                 type="button"
//                 onClick={markAllPresent}
//                 className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
//               >
//                 Mark All Present
//               </button>
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
//         <section className="grid grid-cols-2 gap-4 xl:grid-cols-6">
//           <Stat label="Staff" value={loading ? "…" : String(totalEmployees)} />
//           <Stat label="Present" value={loading ? "…" : String(presentCount)} />
//           <Stat label="Late" value={loading ? "…" : String(lateCount)} />
//           <Stat label="Half Day" value={loading ? "…" : String(halfDayCount)} />
//           <Stat label="Leave" value={loading ? "…" : String(leaveCount)} />
//           <Stat label="Absent" value={loading ? "…" : String(absentCount)} />
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <div className="flex items-center justify-between">
//             <p className="text-sm font-semibold">Attendance rate</p>
//             <p className="text-lg font-bold text-[#176b5b]">
//               {attendancePercentage}%
//             </p>
//           </div>
//           <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
//             <div
//               className="h-full rounded-full bg-[#176b5b]"
//               style={{ width: `${attendancePercentage}%` }}
//             />
//           </div>
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-4">
//           <div className="flex flex-col gap-3 lg:flex-row">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search name, ID, designation..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-4 py-2.5 text-sm outline-none focus:border-[#176b5b] lg:max-w-md"
//             />
//             <select
//               value={department}
//               onChange={(e) => setDepartment(e.target.value)}
//               className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {departments.map((d) => (
//                 <option key={d}>{d}</option>
//               ))}
//             </select>
//             <select
//               value={status}
//               onChange={(e) =>
//                 setStatus(e.target.value as "All Statuses" | AttendanceStatus)
//               }
//               className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {statusOptions.map((s) => (
//                 <option key={s}>{s}</option>
//               ))}
//             </select>
//           </div>
//         </section>

//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1050px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Employee</th>
//                   <th className="px-4 py-3 font-semibold">Department</th>
//                   <th className="px-4 py-3 font-semibold">Check In</th>
//                   <th className="px-4 py-3 font-semibold">Check Out</th>
//                   <th className="px-4 py-3 font-semibold">Hours</th>
//                   <th className="px-4 py-3 font-semibold">OT</th>
//                   <th className="px-4 py-3 font-semibold">Present</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
//                   <th className="px-4 py-3 text-right font-semibold">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece6]">
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={9}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       Loading attendance…
//                     </td>
//                   </tr>
//                 ) : (
//                   <>
//                     {filtered.map((row) => {
//                       const on = isPresentLike(row.status);
//                       return (
//                         <tr key={row.id} className="hover:bg-[#fafaf8]">
//                           <td className="px-5 py-4">
//                             <p className="font-semibold text-gray-900">
//                               {row.name}
//                             </p>
//                             <p className="text-xs text-[#176b5b]">
//                               {row.employeeId}
//                             </p>
//                           </td>
//                           <td className="px-4 py-4 text-sm text-gray-700">
//                             {row.department}
//                           </td>
//                           <td className="px-4 py-4 text-sm">{row.checkIn}</td>
//                           <td className="px-4 py-4 text-sm">{row.checkOut}</td>
//                           <td className="px-4 py-4 text-sm">{row.workHours}</td>
//                           <td className="px-4 py-4 text-sm font-medium text-[#9a5b18]">
//                             {row.overtime}
//                           </td>
//                           <td className="px-4 py-4">
//                             <button
//                               type="button"
//                               role="switch"
//                               aria-checked={on}
//                               title={on ? "Mark Absent" : "Mark Present"}
//                               onClick={() => void togglePresent(row)}
//                               className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${
//                                 on ? "bg-[#176b5b]" : "bg-gray-300"
//                               }`}
//                             >
//                               <span
//                                 className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-all ${
//                                   on ? "left-5" : "left-0.5"
//                                 }`}
//                               />
//                             </button>
//                           </td>
//                           <td className="px-4 py-4">
//                             <span
//                               className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                                 row.status
//                               )}`}
//                             >
//                               {row.status}
//                             </span>
//                           </td>
//                           <td className="px-4 py-4 text-right">
//                             <button
//                               type="button"
//                               onClick={() => openUpdate(row)}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                             >
//                               Update
//                             </button>
//                           </td>
//                         </tr>
//                       );
//                     })}
//                     {filtered.length === 0 && (
//                       <tr>
//                         <td
//                           colSpan={9}
//                           className="px-5 py-12 text-center text-sm text-gray-500"
//                         >
//                           No attendance rows. Add employees first.
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

//       {selectedEmployee && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="border-b border-[#e4e2da] px-6 py-4">
//               <p className="text-xs font-semibold text-[#176b5b]">
//                 {selectedEmployee.employeeId}
//               </p>
//               <h2 className="mt-1 text-lg font-bold">
//                 {selectedEmployee.name}
//               </h2>
//               <p className="mt-1 text-xs text-gray-400">Date: {selectedDate}</p>
//             </div>

//             <div className="space-y-4 p-6">
//               <div>
//                 <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
//                   Status
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {(
//                     [
//                       "Present",
//                       "Late",
//                       "Half Day",
//                       "Leave",
//                       "Absent",
//                     ] as AttendanceStatus[]
//                   ).map((s) => (
//                     <button
//                       key={s}
//                       type="button"
//                       onClick={() => applyStatusInModal(s)}
//                       className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
//                         editForm.status === s
//                           ? statusClass(s)
//                           : "border-gray-200 text-gray-600"
//                       }`}
//                     >
//                       {s}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-3">
//                 <label className="block">
//                   <span className="mb-1 block text-xs font-medium text-gray-600">
//                     Check in
//                   </span>
//                   <input
//                     type="time"
//                     value={editForm.checkIn}
//                     onChange={(e) => {
//                       setOtManual(false);
//                       setEditForm((f) => ({
//                         ...f,
//                         checkIn: e.target.value,
//                       }));
//                     }}
//                     className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="mb-1 block text-xs font-medium text-gray-600">
//                     Check out
//                   </span>
//                   <input
//                     type="time"
//                     value={editForm.checkOut}
//                     onChange={(e) => {
//                       setOtManual(false);
//                       setEditForm((f) => ({
//                         ...f,
//                         checkOut: e.target.value,
//                       }));
//                     }}
//                     className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="mb-1 block text-xs font-medium text-gray-600">
//                     Work hours
//                   </span>
//                   <input
//                     value={autoHours.workHours}
//                     readOnly
//                     className="w-full cursor-not-allowed rounded-lg border border-gray-200 bg-[#f5f5f2] px-3 py-2 text-sm text-gray-700 outline-none"
//                   />
//                   <p className="mt-1 text-[11px] text-gray-400">
//                     Auto from check-in / check-out
//                   </p>
//                 </label>
//                 <label className="block">
//                   <span className="mb-1 block text-xs font-medium text-gray-600">
//                     Overtime
//                   </span>
//                   <input
//                     list="ot-presets"
//                     value={editForm.overtime}
//                     onChange={(e) => {
//                       setOtManual(true);
//                       setEditForm((f) => ({
//                         ...f,
//                         overtime: e.target.value,
//                       }));
//                     }}
//                     placeholder="0m / 1h"
//                     className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                   <p className="mt-1 text-[11px] text-gray-400">
//                     Auto over 8h 30m — chips override
//                   </p>
//                   <datalist id="ot-presets">
//                     {OVERTIME_PRESETS.map((p) => (
//                       <option key={p} value={p} />
//                     ))}
//                   </datalist>
//                 </label>
//               </div>

//               <div className="flex flex-wrap gap-2">
//                 {OVERTIME_PRESETS.map((p) => (
//                   <button
//                     key={p}
//                     type="button"
//                     onClick={() => {
//                       setOtManual(true);
//                       setEditForm((f) => ({ ...f, overtime: p }));
//                     }}
//                     className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
//                       editForm.overtime === p
//                         ? "border-[#9a5b18] bg-[#faf6f0] text-[#9a5b18]"
//                         : "border-gray-200 text-gray-600 hover:bg-gray-50"
//                     }`}
//                   >
//                     {p}
//                   </button>
//                 ))}
//               </div>

//               <div className="flex gap-2 pt-1">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSelectedEmployee(null);
//                     setOtManual(false);
//                   }}
//                   className="flex-1 rounded-lg border border-gray-200 py-2.5 text-sm font-medium"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   disabled={saving}
//                   onClick={() => void saveUpdate()}
//                   className="flex-1 rounded-lg bg-[#176b5b] py-2.5 text-sm font-semibold text-white hover:bg-[#125848] disabled:opacity-60"
//                 >
//                   {saving ? "Saving…" : "Save"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function Stat({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-4">
//       <p className="text-xs text-gray-500">{label}</p>
//       <p className="mt-1 text-xl font-bold text-gray-900">{value}</p>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAttendanceByDate,
//   upsertAttendance,
//   getHoliday,
//   markHoliday,
//   unmarkHoliday,
//   type InteriorAttendance,
//   type InteriorHoliday,
// } from "@/modules/interior/services/attendanceService";

// type AttendanceStatus =
//   | "Present"
//   | "Absent"
//   | "Late"
//   | "Half Day"
//   | "Leave"
//   | "Holiday";

// type Row = {
//   id: string;
//   name: string;
//   employeeId: string;
//   employeeDocId?: string;
//   department: string;
//   designation: string;
//   checkIn: string;
//   checkOut: string;
//   status: AttendanceStatus;
//   workHours: string;
//   overtime: string;
//   date: string;
// };

// const departments = [
//   "All Departments",
//   "Interior Design",
//   "Project Management",
//   "Site Operations",
//   "HR",
//   "Accounts",
//   "Sales",
//   "Other",
// ];

// const statusOptions: Array<"All Statuses" | AttendanceStatus> = [
//   "All Statuses",
//   "Present",
//   "Absent",
//   "Late",
//   "Half Day",
//   "Leave",
//   "Holiday",
// ];

// const OVERTIME_PRESETS = [
//   "0m",
//   "15m",
//   "30m",
//   "45m",
//   "1h",
//   "1h 30m",
//   "2h",
//   "2h 30m",
//   "3h",
// ];

// const STANDARD_DAY_MINUTES = 8 * 60 + 30;

// function statusClass(status: AttendanceStatus) {
//   switch (status) {
//     case "Present":
//       return "bg-green-50 text-green-700 border-green-200";
//     case "Late":
//       return "bg-amber-50 text-amber-700 border-amber-200";
//     case "Half Day":
//       return "bg-blue-50 text-blue-700 border-blue-200";
//     case "Leave":
//       return "bg-purple-50 text-purple-700 border-purple-200";
//     case "Holiday":
//       return "bg-indigo-50 text-indigo-700 border-indigo-200";
//     case "Absent":
//       return "bg-red-50 text-red-700 border-red-200";
//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function normalizeStatus(raw?: string): AttendanceStatus {
//   const s = (raw || "Absent").toLowerCase();
//   if (s.includes("holiday")) return "Holiday";
//   if (s.includes("present")) return "Present";
//   if (s.includes("late")) return "Late";
//   if (s.includes("half")) return "Half Day";
//   if (s.includes("leave")) return "Leave";
//   return "Absent";
// }

// function toTimeInputValue(value: string): string {
//   if (!value || value === "--" || value === "-") return "";
//   const v = value.trim();

//   const m24 = v.match(/^(\d{1,2}):(\d{2})$/);
//   if (m24) {
//     const h = Math.min(23, parseInt(m24[1]!, 10));
//     const min = Math.min(59, parseInt(m24[2]!, 10));
//     return `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
//   }

//   const m12 = v.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
//   if (m12) {
//     let h = parseInt(m12[1]!, 10);
//     const min = parseInt(m12[2]!, 10);
//     const ap = m12[3]!.toUpperCase();
//     if (ap === "AM") {
//       if (h === 12) h = 0;
//     } else if (h !== 12) {
//       h += 12;
//     }
//     return `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
//   }

//   return "";
// }

// function fromTimeInputValue(value: string): string {
//   if (!value) return "--";
//   const m = value.match(/^(\d{1,2}):(\d{2})$/);
//   if (!m) return "--";
//   let h = parseInt(m[1]!, 10);
//   const min = m[2]!;
//   const ap = h >= 12 ? "PM" : "AM";
//   if (h === 0) h = 12;
//   else if (h > 12) h -= 12;
//   return `${String(h).padStart(2, "0")}:${min} ${ap}`;
// }

// function timeToMinutes(value: string): number | null {
//   if (!value) return null;
//   const m = value.match(/^(\d{1,2}):(\d{2})$/);
//   if (!m) return null;
//   const h = parseInt(m[1]!, 10);
//   const min = parseInt(m[2]!, 10);
//   if (!Number.isFinite(h) || !Number.isFinite(min)) return null;
//   return h * 60 + min;
// }

// function formatDuration(totalMinutes: number): string {
//   if (totalMinutes <= 0) return "0h";
//   const h = Math.floor(totalMinutes / 60);
//   const m = totalMinutes % 60;
//   if (h === 0) return `${m}m`;
//   if (m === 0) return `${h}h`;
//   return `${h}h ${String(m).padStart(2, "0")}m`;
// }

// function computeHoursFromTimes(
//   checkInHHMM: string,
//   checkOutHHMM: string
// ): { workHours: string; overtime: string } {
//   const inMin = timeToMinutes(checkInHHMM);
//   const outMin = timeToMinutes(checkOutHHMM);

//   if (inMin === null || outMin === null) {
//     return { workHours: "0h", overtime: "0m" };
//   }

//   let worked = outMin - inMin;
//   if (worked < 0) worked += 24 * 60;

//   const ot = Math.max(0, worked - STANDARD_DAY_MINUTES);

//   return {
//     workHours: formatDuration(worked),
//     overtime: ot === 0 ? "0m" : formatDuration(ot),
//   };
// }

// function mapToUi(r: InteriorAttendance, date: string): Row {
//   return {
//     id: r.id,
//     name: r.name || "Unknown",
//     employeeId: r.employeeId || "—",
//     employeeDocId: r.employeeDocId,
//     department: r.department || "Other",
//     designation: r.designation || "—",
//     checkIn: r.checkIn || "--",
//     checkOut: r.checkOut || "--",
//     status: normalizeStatus(r.status),
//     workHours: r.workHours || "0h",
//     overtime: r.overtime || "0m",
//     date: r.date || date,
//   };
// }

// function defaultsForStatus(status: AttendanceStatus) {
//   if (status === "Present")
//     return { checkIn: "09:00 AM", checkOut: "06:00 PM" };
//   if (status === "Late")
//     return { checkIn: "09:30 AM", checkOut: "06:00 PM" };
//   if (status === "Half Day")
//     return { checkIn: "09:00 AM", checkOut: "01:30 PM" };
//   return { checkIn: "--", checkOut: "--" };
// }

// function isPresentLike(status: AttendanceStatus) {
//   return (
//     status === "Present" || status === "Late" || status === "Half Day"
//   );
// }

// export default function AttendancePage() {
//   const [attendance, setAttendance] = useState<Row[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [holidayBusy, setHolidayBusy] = useState(false);
//   const [search, setSearch] = useState("");
//   const [department, setDepartment] = useState("All Departments");
//   const [status, setStatus] = useState<"All Statuses" | AttendanceStatus>(
//     "All Statuses"
//   );
//   const [selectedDate, setSelectedDate] = useState(
//     new Date().toISOString().slice(0, 10)
//   );
//   const [holiday, setHoliday] = useState<InteriorHoliday | null>(null);
//   const [showHolidayModal, setShowHolidayModal] = useState(false);
//   const [holidayName, setHolidayName] = useState("");
//   const [selectedEmployee, setSelectedEmployee] = useState<Row | null>(null);

//   const [editForm, setEditForm] = useState({
//     status: "Absent" as AttendanceStatus,
//     checkIn: "",
//     checkOut: "",
//     overtime: "0m",
//   });

//   const [otManual, setOtManual] = useState(false);

//   const autoHours = useMemo(
//     () => computeHoursFromTimes(editForm.checkIn, editForm.checkOut),
//     [editForm.checkIn, editForm.checkOut]
//   );

//   useEffect(() => {
//     if (otManual) return;
//     setEditForm((f) =>
//       f.overtime === autoHours.overtime
//         ? f
//         : { ...f, overtime: autoHours.overtime }
//     );
//   }, [autoHours.overtime, otManual]);

//   async function load(date: string) {
//     setLoading(true);
//     try {
//       const [data, hol] = await Promise.all([
//         getAttendanceByDate(date),
//         getHoliday(date),
//       ]);
//       setAttendance(data.map((d) => mapToUi(d, date)));
//       setHoliday(hol);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     load(selectedDate);
//   }, [selectedDate]);

//   const filtered = useMemo(() => {
//     const q = search.toLowerCase().trim();
//     return attendance.filter((row) => {
//       const matchesSearch =
//         !q ||
//         row.name.toLowerCase().includes(q) ||
//         row.employeeId.toLowerCase().includes(q) ||
//         row.designation.toLowerCase().includes(q);
//       const matchesDept =
//         department === "All Departments" || row.department === department;
//       const matchesStatus =
//         status === "All Statuses" || row.status === status;
//       return matchesSearch && matchesDept && matchesStatus;
//     });
//   }, [attendance, search, department, status]);

//   const totalEmployees = attendance.length;
//   const presentCount = attendance.filter((r) => r.status === "Present").length;
//   const absentCount = attendance.filter((r) => r.status === "Absent").length;
//   const lateCount = attendance.filter((r) => r.status === "Late").length;
//   const leaveCount = attendance.filter((r) => r.status === "Leave").length;
//   const halfDayCount = attendance.filter((r) => r.status === "Half Day").length;
//   const holidayCount = attendance.filter((r) => r.status === "Holiday").length;
//   const attendancePercentage =
//     totalEmployees === 0
//       ? 0
//       : Math.round(
//           ((presentCount + lateCount + halfDayCount) / totalEmployees) * 100
//         );

//   async function updateRow(id: string, patch: Partial<Row>) {
//     const current = attendance.find((r) => r.id === id);
//     if (!current) return;

//     const next = { ...current, ...patch };
//     setAttendance((list) => list.map((r) => (r.id === id ? next : r)));
//     setSelectedEmployee((s) => (s && s.id === id ? next : s));

//     try {
//       await upsertAttendance({
//         id: next.id,
//         date: next.date || selectedDate,
//         employeeDocId: next.employeeDocId,
//         employeeId: next.employeeId,
//         name: next.name,
//         department: next.department,
//         designation: next.designation,
//         checkIn: next.checkIn,
//         checkOut: next.checkOut,
//         status: next.status,
//         workHours: next.workHours,
//         overtime: next.overtime,
//       });
//     } catch (err) {
//       console.error(err);
//       await load(selectedDate);
//     }
//   }

//   async function setStatusFor(id: string, nextStatus: AttendanceStatus) {
//     const defaults = defaultsForStatus(nextStatus);
//     const inHH = toTimeInputValue(defaults.checkIn);
//     const outHH = toTimeInputValue(defaults.checkOut);
//     const computed = computeHoursFromTimes(inHH, outHH);

//     await updateRow(id, {
//       status: nextStatus,
//       checkIn: defaults.checkIn,
//       checkOut: defaults.checkOut,
//       workHours: computed.workHours,
//       overtime: computed.overtime,
//     });
//   }

//   async function togglePresent(row: Row) {
//     if (isPresentLike(row.status)) {
//       await setStatusFor(row.id, "Absent");
//     } else {
//       await setStatusFor(row.id, "Present");
//     }
//   }

//   function openUpdate(row: Row) {
//     setOtManual(false);
//     setSelectedEmployee(row);
//     const checkIn = toTimeInputValue(row.checkIn);
//     const checkOut = toTimeInputValue(row.checkOut);
//     const computed = computeHoursFromTimes(checkIn, checkOut);

//     setEditForm({
//       status: row.status,
//       checkIn,
//       checkOut,
//       overtime: computed.overtime,
//     });
//   }

//   function applyStatusInModal(nextStatus: AttendanceStatus) {
//     setOtManual(false);
//     const defaults = defaultsForStatus(nextStatus);
//     const checkIn = toTimeInputValue(defaults.checkIn);
//     const checkOut = toTimeInputValue(defaults.checkOut);
//     const computed = computeHoursFromTimes(checkIn, checkOut);

//     setEditForm({
//       status: nextStatus,
//       checkIn,
//       checkOut,
//       overtime: computed.overtime,
//     });
//   }

//   async function saveUpdate() {
//     if (!selectedEmployee) return;
//     setSaving(true);
//     try {
//       const computed = computeHoursFromTimes(
//         editForm.checkIn,
//         editForm.checkOut
//       );
//       await updateRow(selectedEmployee.id, {
//         status: editForm.status,
//         checkIn: fromTimeInputValue(editForm.checkIn),
//         checkOut: fromTimeInputValue(editForm.checkOut),
//         workHours: computed.workHours,
//         overtime: editForm.overtime.trim() || computed.overtime,
//       });
//       setSelectedEmployee(null);
//       setOtManual(false);
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function markAllPresent() {
//     for (const row of attendance) {
//       if (row.status === "Present") continue;
//       await setStatusFor(row.id, "Present");
//     }
//   }

//   /** Mark selected date as company holiday + set every row to Holiday */
//   async function confirmMarkHoliday() {
//     setHolidayBusy(true);
//     try {
//       const name = holidayName.trim() || "Holiday";
//       await markHoliday(selectedDate, name);

//       for (const row of attendance) {
//         await updateRow(row.id, {
//           status: "Holiday",
//           checkIn: "--",
//           checkOut: "--",
//           workHours: "0h",
//           overtime: "0m",
//         });
//       }

//       setHoliday({
//         id: selectedDate,
//         date: selectedDate,
//         name,
//       });
//       setShowHolidayModal(false);
//     } catch (err) {
//       console.error(err);
//       alert("Could not mark holiday.");
//     } finally {
//       setHolidayBusy(false);
//     }
//   }

//   async function removeHoliday() {
//     if (!window.confirm("Remove holiday for this date? Staff will show as Absent until marked again.")) {
//       return;
//     }
//     setHolidayBusy(true);
//     try {
//       await unmarkHoliday(selectedDate);
//       for (const row of attendance) {
//         if (row.status === "Holiday") {
//           await updateRow(row.id, {
//             status: "Absent",
//             checkIn: "--",
//             checkOut: "--",
//             workHours: "0h",
//             overtime: "0m",
//           });
//         }
//       }
//       setHoliday(null);
//     } catch (err) {
//       console.error(err);
//       alert("Could not remove holiday.");
//     } finally {
//       setHolidayBusy(false);
//     }
//   }

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
//     const rows = filtered.map((r) =>
//       [
//         selectedDate,
//         r.employeeId,
//         r.name,
//         r.department,
//         r.status,
//         r.checkIn,
//         r.checkOut,
//         r.workHours,
//         r.overtime,
//       ].join(",")
//     );
//     const blob = new Blob([[headers.join(","), ...rows].join("\n")], {
//       type: "text/csv",
//     });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `attendance-${selectedDate}.csv`;
//     a.click();
//     URL.revokeObjectURL(url);
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1600px] px-5 py-5 lg:px-8">
//           <a
//             href="/interior/hrms"
//             className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-[#176b5b] hover:underline"
//           >
//             ← Back to HRMS
//           </a>
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               <h1 className="text-2xl font-bold tracking-tight">Attendance</h1>
//               <p className="mt-1 text-sm text-gray-500">
//                 New days default to Absent. Mark holidays for the selected date.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               <input
//                 type="date"
//                 value={selectedDate}
//                 onChange={(e) => setSelectedDate(e.target.value)}
//                 className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//               />
//               {holiday ? (
//                 <button
//                   type="button"
//                   disabled={holidayBusy}
//                   onClick={() => void removeHoliday()}
//                   className="rounded-lg border border-indigo-200 bg-indigo-50 px-4 py-2.5 text-sm font-semibold text-indigo-700 hover:bg-indigo-100 disabled:opacity-60"
//                 >
//                   {holidayBusy ? "…" : "Remove holiday"}
//                 </button>
//               ) : (
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setHolidayName("Holiday");
//                     setShowHolidayModal(true);
//                   }}
//                   className="rounded-lg border border-indigo-200 bg-white px-4 py-2.5 text-sm font-semibold text-indigo-700 hover:bg-indigo-50"
//                 >
//                   Mark as holiday
//                 </button>
//               )}
//               <button
//                 type="button"
//                 onClick={markAllPresent}
//                 disabled={!!holiday}
//                 className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50"
//               >
//                 Mark All Present
//               </button>
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
//         {holiday && (
//           <div className="rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-3 text-sm text-indigo-800">
//             <span className="font-semibold">
//               {holiday.name || ""}
//             </span>
//             {" · "}
//             {selectedDate} — all staff marked as Holiday for this date.
//           </div>
//         )}

//         <section className="grid grid-cols-2 gap-4 xl:grid-cols-7">
//           <Stat label="Staff" value={loading ? "…" : String(totalEmployees)} />
//           <Stat label="Present" value={loading ? "…" : String(presentCount)} />
//           <Stat label="Late" value={loading ? "…" : String(lateCount)} />
//           <Stat label="Half Day" value={loading ? "…" : String(halfDayCount)} />
//           <Stat label="Leave" value={loading ? "…" : String(leaveCount)} />
//           <Stat label="Holiday" value={loading ? "…" : String(holidayCount)} />
//           <Stat label="Absent" value={loading ? "…" : String(absentCount)} />
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <div className="flex items-center justify-between">
//             <p className="text-sm font-semibold">Attendance rate</p>
//             <p className="text-lg font-bold text-[#176b5b]">
//               {attendancePercentage}%
//             </p>
//           </div>
//           <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
//             <div
//               className="h-full rounded-full bg-[#176b5b]"
//               style={{ width: `${attendancePercentage}%` }}
//             />
//           </div>
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-4">
//           <div className="flex flex-col gap-3 lg:flex-row">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search name, ID, designation..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-4 py-2.5 text-sm outline-none focus:border-[#176b5b] lg:max-w-md"
//             />
//             <select
//               value={department}
//               onChange={(e) => setDepartment(e.target.value)}
//               className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {departments.map((d) => (
//                 <option key={d}>{d}</option>
//               ))}
//             </select>
//             <select
//               value={status}
//               onChange={(e) =>
//                 setStatus(e.target.value as "All Statuses" | AttendanceStatus)
//               }
//               className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {statusOptions.map((s) => (
//                 <option key={s}>{s}</option>
//               ))}
//             </select>
//           </div>
//         </section>

//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1050px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Employee</th>
//                   <th className="px-4 py-3 font-semibold">Department</th>
//                   <th className="px-4 py-3 font-semibold">Check In</th>
//                   <th className="px-4 py-3 font-semibold">Check Out</th>
//                   <th className="px-4 py-3 font-semibold">Hours</th>
//                   <th className="px-4 py-3 font-semibold">OT</th>
//                   <th className="px-4 py-3 font-semibold">Present</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
//                   <th className="px-4 py-3 text-right font-semibold">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece6]">
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={9}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       Loading attendance…
//                     </td>
//                   </tr>
//                 ) : (
//                   <>
//                     {filtered.map((row) => {
//                       const on = isPresentLike(row.status);
//                       return (
//                         <tr key={row.id} className="hover:bg-[#fafaf8]">
//                           <td className="px-5 py-4">
//                             <p className="font-semibold text-gray-900">
//                               {row.name}
//                             </p>
//                             <p className="text-xs text-[#176b5b]">
//                               {row.employeeId}
//                             </p>
//                           </td>
//                           <td className="px-4 py-4 text-sm text-gray-700">
//                             {row.department}
//                           </td>
//                           <td className="px-4 py-4 text-sm">{row.checkIn}</td>
//                           <td className="px-4 py-4 text-sm">{row.checkOut}</td>
//                           <td className="px-4 py-4 text-sm">{row.workHours}</td>
//                           <td className="px-4 py-4 text-sm font-medium text-[#9a5b18]">
//                             {row.overtime}
//                           </td>
//                           <td className="px-4 py-4">
//                             <button
//                               type="button"
//                               role="switch"
//                               aria-checked={on}
//                               disabled={!!holiday}
//                               title={on ? "Mark Absent" : "Mark Present"}
//                               onClick={() => void togglePresent(row)}
//                               className={`relative h-7 w-12 shrink-0 rounded-full transition-colors disabled:opacity-40 ${
//                                 on ? "bg-[#176b5b]" : "bg-gray-300"
//                               }`}
//                             >
//                               <span
//                                 className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-all ${
//                                   on ? "left-5" : "left-0.5"
//                                 }`}
//                               />
//                             </button>
//                           </td>
//                           <td className="px-4 py-4">
//                             <span
//                               className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                                 row.status
//                               )}`}
//                             >
//                               {row.status}
//                             </span>
//                           </td>
//                           <td className="px-4 py-4 text-right">
//                             <button
//                               type="button"
//                               onClick={() => openUpdate(row)}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                             >
//                               Update
//                             </button>
//                           </td>
//                         </tr>
//                       );
//                     })}
//                     {filtered.length === 0 && (
//                       <tr>
//                         <td
//                           colSpan={9}
//                           className="px-5 py-12 text-center text-sm text-gray-500"
//                         >
//                           No attendance rows. Add employees first.
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

//       {showHolidayModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
//             <h2 className="text-lg font-bold">Mark as holiday</h2>
//             <p className="mt-1 text-sm text-gray-500">
//               Date: <span className="font-semibold">{selectedDate}</span>
//               . All employees will be set to Holiday for this day.
//             </p>
//             <label className="mt-4 block">
//               <span className="mb-1 block text-xs font-medium text-gray-600">
//                 Holiday name
//               </span>
//               <input
//                 value={holidayName}
//                 onChange={(e) => setHolidayName(e.target.value)}
//                 placeholder="Diwali / Company Holiday"
//                 className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//               />
//             </label>
//             <div className="mt-5 flex gap-2">
//               <button
//                 type="button"
//                 onClick={() => setShowHolidayModal(false)}
//                 className="flex-1 rounded-lg border border-gray-200 py-2.5 text-sm font-medium"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 disabled={holidayBusy}
//                 onClick={() => void confirmMarkHoliday()}
//                 className="flex-1 rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-60"
//               >
//                 {holidayBusy ? "Saving…" : "Confirm holiday"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {selectedEmployee && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="border-b border-[#e4e2da] px-6 py-4">
//               <p className="text-xs font-semibold text-[#176b5b]">
//                 {selectedEmployee.employeeId}
//               </p>
//               <h2 className="mt-1 text-lg font-bold">
//                 {selectedEmployee.name}
//               </h2>
//               <p className="mt-1 text-xs text-gray-400">Date: {selectedDate}</p>
//             </div>

//             <div className="space-y-4 p-6">
//               <div>
//                 <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
//                   Status
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {(
//                     [
//                       "Present",
//                       "Late",
//                       "Half Day",
//                       "Leave",
//                       "Holiday",
//                       "Absent",
//                     ] as AttendanceStatus[]
//                   ).map((s) => (
//                     <button
//                       key={s}
//                       type="button"
//                       onClick={() => applyStatusInModal(s)}
//                       className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
//                         editForm.status === s
//                           ? statusClass(s)
//                           : "border-gray-200 text-gray-600"
//                       }`}
//                     >
//                       {s}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-3">
//                 <label className="block">
//                   <span className="mb-1 block text-xs font-medium text-gray-600">
//                     Check in
//                   </span>
//                   <input
//                     type="time"
//                     value={editForm.checkIn}
//                     onChange={(e) => {
//                       setOtManual(false);
//                       setEditForm((f) => ({
//                         ...f,
//                         checkIn: e.target.value,
//                       }));
//                     }}
//                     className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="mb-1 block text-xs font-medium text-gray-600">
//                     Check out
//                   </span>
//                   <input
//                     type="time"
//                     value={editForm.checkOut}
//                     onChange={(e) => {
//                       setOtManual(false);
//                       setEditForm((f) => ({
//                         ...f,
//                         checkOut: e.target.value,
//                       }));
//                     }}
//                     className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="mb-1 block text-xs font-medium text-gray-600">
//                     Work hours
//                   </span>
//                   <input
//                     value={autoHours.workHours}
//                     readOnly
//                     className="w-full cursor-not-allowed rounded-lg border border-gray-200 bg-[#f5f5f2] px-3 py-2 text-sm text-gray-700 outline-none"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="mb-1 block text-xs font-medium text-gray-600">
//                     Overtime
//                   </span>
//                   <input
//                     list="ot-presets"
//                     value={editForm.overtime}
//                     onChange={(e) => {
//                       setOtManual(true);
//                       setEditForm((f) => ({
//                         ...f,
//                         overtime: e.target.value,
//                       }));
//                     }}
//                     className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                   <datalist id="ot-presets">
//                     {OVERTIME_PRESETS.map((p) => (
//                       <option key={p} value={p} />
//                     ))}
//                   </datalist>
//                 </label>
//               </div>

//               <div className="flex flex-wrap gap-2">
//                 {OVERTIME_PRESETS.map((p) => (
//                   <button
//                     key={p}
//                     type="button"
//                     onClick={() => {
//                       setOtManual(true);
//                       setEditForm((f) => ({ ...f, overtime: p }));
//                     }}
//                     className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
//                       editForm.overtime === p
//                         ? "border-[#9a5b18] bg-[#faf6f0] text-[#9a5b18]"
//                         : "border-gray-200 text-gray-600 hover:bg-gray-50"
//                     }`}
//                   >
//                     {p}
//                   </button>
//                 ))}
//               </div>

//               <div className="flex gap-2 pt-1">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSelectedEmployee(null);
//                     setOtManual(false);
//                   }}
//                   className="flex-1 rounded-lg border border-gray-200 py-2.5 text-sm font-medium"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   disabled={saving}
//                   onClick={() => void saveUpdate()}
//                   className="flex-1 rounded-lg bg-[#176b5b] py-2.5 text-sm font-semibold text-white hover:bg-[#125848] disabled:opacity-60"
//                 >
//                   {saving ? "Saving…" : "Save"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function Stat({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-4">
//       <p className="text-xs text-gray-500">{label}</p>
//       <p className="mt-1 text-xl font-bold text-gray-900">{value}</p>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAttendanceByDate,
//   upsertAttendance,
//   getHoliday,
//   markHoliday,
//   unmarkHoliday,
//   type InteriorAttendance,
//   type InteriorHoliday,
// } from "@/modules/interior/services/attendanceService";

// type AttendanceStatus =
//   | "Present"
//   | "Absent"
//   | "Late"
//   | "Half Day"
//   | "Leave"
//   | "Holiday";

// type Row = {
//   id: string;
//   name: string;
//   employeeId: string;
//   employeeDocId?: string;
//   department: string;
//   designation: string;
//   checkIn: string;
//   checkOut: string;
//   status: AttendanceStatus;
//   workHours: string;
//   overtime: string;
//   date: string;
// };

// const departments = [
//   "All Departments",
//   "Interior Design",
//   "Project Management",
//   "Site Operations",
//   "HR",
//   "Accounts",
//   "Sales",
//   "Other",
// ];

// const statusOptions: Array<"All Statuses" | AttendanceStatus> = [
//   "All Statuses",
//   "Present",
//   "Absent",
//   "Late",
//   "Half Day",
//   "Leave",
//   "Holiday",
// ];

// const OVERTIME_PRESETS = [
//   "0m",
//   "15m",
//   "30m",
//   "45m",
//   "1h",
//   "1h 30m",
//   "2h",
//   "2h 30m",
//   "3h",
// ];

// const STANDARD_DAY_MINUTES = 8 * 60 + 30;

// function statusClass(status: AttendanceStatus) {
//   switch (status) {
//     case "Present":
//       return "bg-green-50 text-green-700 border-green-200";
//     case "Late":
//       return "bg-amber-50 text-amber-700 border-amber-200";
//     case "Half Day":
//       return "bg-blue-50 text-blue-700 border-blue-200";
//     case "Leave":
//       return "bg-purple-50 text-purple-700 border-purple-200";
//     case "Holiday":
//       return "bg-indigo-50 text-indigo-700 border-indigo-200";
//     case "Absent":
//       return "bg-red-50 text-red-700 border-red-200";
//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function normalizeStatus(raw?: string): AttendanceStatus {
//   const s = (raw || "Absent").toLowerCase();
//   if (s.includes("holiday")) return "Holiday";
//   if (s.includes("present")) return "Present";
//   if (s.includes("late")) return "Late";
//   if (s.includes("half")) return "Half Day";
//   if (s.includes("leave")) return "Leave";
//   return "Absent";
// }

// function toTimeInputValue(value: string): string {
//   if (!value || value === "--" || value === "-") return "";
//   const v = value.trim();

//   const m24 = v.match(/^(\d{1,2}):(\d{2})$/);
//   if (m24) {
//     const h = Math.min(23, parseInt(m24[1]!, 10));
//     const min = Math.min(59, parseInt(m24[2]!, 10));
//     return `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
//   }

//   const m12 = v.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
//   if (m12) {
//     let h = parseInt(m12[1]!, 10);
//     const min = parseInt(m12[2]!, 10);
//     const ap = m12[3]!.toUpperCase();
//     if (ap === "AM") {
//       if (h === 12) h = 0;
//     } else if (h !== 12) {
//       h += 12;
//     }
//     return `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
//   }

//   return "";
// }

// function fromTimeInputValue(value: string): string {
//   if (!value) return "--";
//   const m = value.match(/^(\d{1,2}):(\d{2})$/);
//   if (!m) return "--";
//   let h = parseInt(m[1]!, 10);
//   const min = m[2]!;
//   const ap = h >= 12 ? "PM" : "AM";
//   if (h === 0) h = 12;
//   else if (h > 12) h -= 12;
//   return `${String(h).padStart(2, "0")}:${min} ${ap}`;
// }

// function timeToMinutes(value: string): number | null {
//   if (!value) return null;
//   const m = value.match(/^(\d{1,2}):(\d{2})$/);
//   if (!m) return null;
//   const h = parseInt(m[1]!, 10);
//   const min = parseInt(m[2]!, 10);
//   if (!Number.isFinite(h) || !Number.isFinite(min)) return null;
//   return h * 60 + min;
// }

// function formatDuration(totalMinutes: number): string {
//   if (totalMinutes <= 0) return "0h";
//   const h = Math.floor(totalMinutes / 60);
//   const m = totalMinutes % 60;
//   if (h === 0) return `${m}m`;
//   if (m === 0) return `${h}h`;
//   return `${h}h ${String(m).padStart(2, "0")}m`;
// }

// function computeHoursFromTimes(
//   checkInHHMM: string,
//   checkOutHHMM: string
// ): { workHours: string; overtime: string } {
//   const inMin = timeToMinutes(checkInHHMM);
//   const outMin = timeToMinutes(checkOutHHMM);

//   if (inMin === null || outMin === null) {
//     return { workHours: "0h", overtime: "0m" };
//   }

//   let worked = outMin - inMin;
//   if (worked < 0) worked += 24 * 60;

//   const ot = Math.max(0, worked - STANDARD_DAY_MINUTES);

//   return {
//     workHours: formatDuration(worked),
//     overtime: ot === 0 ? "0m" : formatDuration(ot),
//   };
// }

// function mapToUi(r: InteriorAttendance, date: string): Row {
//   return {
//     id: r.id,
//     name: r.name || "Unknown",
//     employeeId: r.employeeId || "—",
//     employeeDocId: r.employeeDocId,
//     department: r.department || "Other",
//     designation: r.designation || "—",
//     checkIn: r.checkIn || "--",
//     checkOut: r.checkOut || "--",
//     status: normalizeStatus(r.status),
//     workHours: r.workHours || "0h",
//     overtime: r.overtime || "0m",
//     date: r.date || date,
//   };
// }

// function defaultsForStatus(status: AttendanceStatus) {
//   if (status === "Present")
//     return { checkIn: "09:00 AM", checkOut: "06:00 PM" };
//   if (status === "Late")
//     return { checkIn: "09:30 AM", checkOut: "06:00 PM" };
//   if (status === "Half Day")
//     return { checkIn: "09:00 AM", checkOut: "01:30 PM" };
//   return { checkIn: "--", checkOut: "--" };
// }

// function isPresentLike(status: AttendanceStatus) {
//   return (
//     status === "Present" || status === "Late" || status === "Half Day"
//   );
// }

// export default function AttendancePage() {
//   const [attendance, setAttendance] = useState<Row[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [holidayBusy, setHolidayBusy] = useState(false);
//   const [search, setSearch] = useState("");
//   const [department, setDepartment] = useState("All Departments");
//   const [status, setStatus] = useState<"All Statuses" | AttendanceStatus>(
//     "All Statuses"
//   );
//   const [selectedDate, setSelectedDate] = useState(
//     new Date().toISOString().slice(0, 10)
//   );
//   const [holiday, setHoliday] = useState<InteriorHoliday | null>(null);
//   const [showHolidayModal, setShowHolidayModal] = useState(false);
//   const [holidayName, setHolidayName] = useState("");
//   const [selectedEmployee, setSelectedEmployee] = useState<Row | null>(null);

//   const [editForm, setEditForm] = useState({
//     status: "Absent" as AttendanceStatus,
//     checkIn: "",
//     checkOut: "",
//     overtime: "0m",
//   });

//   const [otManual, setOtManual] = useState(false);

//   const autoHours = useMemo(
//     () => computeHoursFromTimes(editForm.checkIn, editForm.checkOut),
//     [editForm.checkIn, editForm.checkOut]
//   );

//   useEffect(() => {
//     if (otManual) return;
//     setEditForm((f) =>
//       f.overtime === autoHours.overtime
//         ? f
//         : { ...f, overtime: autoHours.overtime }
//     );
//   }, [autoHours.overtime, otManual]);

//   async function load(date: string) {
//     setLoading(true);
//     try {
//       const [data, hol] = await Promise.all([
//         getAttendanceByDate(date),
//         getHoliday(date),
//       ]);
//       setAttendance(data.map((d) => mapToUi(d, date)));
//       setHoliday(hol);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     load(selectedDate);
//   }, [selectedDate]);

//   const filtered = useMemo(() => {
//     const q = search.toLowerCase().trim();
//     return attendance.filter((row) => {
//       const matchesSearch =
//         !q ||
//         row.name.toLowerCase().includes(q) ||
//         row.employeeId.toLowerCase().includes(q) ||
//         row.designation.toLowerCase().includes(q);
//       const matchesDept =
//         department === "All Departments" || row.department === department;
//       const matchesStatus =
//         status === "All Statuses" || row.status === status;
//       return matchesSearch && matchesDept && matchesStatus;
//     });
//   }, [attendance, search, department, status]);

//   const totalEmployees = attendance.length;
//   const presentCount = attendance.filter((r) => r.status === "Present").length;
//   const absentCount = attendance.filter((r) => r.status === "Absent").length;
//   const lateCount = attendance.filter((r) => r.status === "Late").length;
//   const leaveCount = attendance.filter((r) => r.status === "Leave").length;
//   const halfDayCount = attendance.filter((r) => r.status === "Half Day").length;
//   const holidayCount = attendance.filter((r) => r.status === "Holiday").length;
//   const attendancePercentage =
//     totalEmployees === 0
//       ? 0
//       : Math.round(
//           ((presentCount + lateCount + halfDayCount) / totalEmployees) * 100
//         );

//   async function updateRow(id: string, patch: Partial<Row>) {
//     const current = attendance.find((r) => r.id === id);
//     if (!current) return;

//     const next = { ...current, ...patch };
//     setAttendance((list) => list.map((r) => (r.id === id ? next : r)));
//     setSelectedEmployee((s) => (s && s.id === id ? next : s));

//     try {
//       await upsertAttendance({
//         id: next.id,
//         date: next.date || selectedDate,
//         employeeDocId: next.employeeDocId,
//         employeeId: next.employeeId,
//         name: next.name,
//         department: next.department,
//         designation: next.designation,
//         checkIn: next.checkIn,
//         checkOut: next.checkOut,
//         status: next.status,
//         workHours: next.workHours,
//         overtime: next.overtime,
//       });
//     } catch (err) {
//       console.error(err);
//       await load(selectedDate);
//     }
//   }

//   async function setStatusFor(id: string, nextStatus: AttendanceStatus) {
//     const defaults = defaultsForStatus(nextStatus);
//     const inHH = toTimeInputValue(defaults.checkIn);
//     const outHH = toTimeInputValue(defaults.checkOut);
//     const computed = computeHoursFromTimes(inHH, outHH);

//     await updateRow(id, {
//       status: nextStatus,
//       checkIn: defaults.checkIn,
//       checkOut: defaults.checkOut,
//       workHours: computed.workHours,
//       overtime: computed.overtime,
//     });
//   }

//   async function togglePresent(row: Row) {
//     if (isPresentLike(row.status)) {
//       await setStatusFor(row.id, "Absent");
//     } else {
//       await setStatusFor(row.id, "Present");
//     }
//   }

//   function openUpdate(row: Row) {
//     setOtManual(false);
//     setSelectedEmployee(row);
//     const checkIn = toTimeInputValue(row.checkIn);
//     const checkOut = toTimeInputValue(row.checkOut);
//     const computed = computeHoursFromTimes(checkIn, checkOut);

//     setEditForm({
//       status: row.status,
//       checkIn,
//       checkOut,
//       overtime: computed.overtime,
//     });
//   }

//   function applyStatusInModal(nextStatus: AttendanceStatus) {
//     setOtManual(false);
//     const defaults = defaultsForStatus(nextStatus);
//     const checkIn = toTimeInputValue(defaults.checkIn);
//     const checkOut = toTimeInputValue(defaults.checkOut);
//     const computed = computeHoursFromTimes(checkIn, checkOut);

//     setEditForm({
//       status: nextStatus,
//       checkIn,
//       checkOut,
//       overtime: computed.overtime,
//     });
//   }

//   async function saveUpdate() {
//     if (!selectedEmployee) return;
//     setSaving(true);
//     try {
//       const computed = computeHoursFromTimes(
//         editForm.checkIn,
//         editForm.checkOut
//       );
//       await updateRow(selectedEmployee.id, {
//         status: editForm.status,
//         checkIn: fromTimeInputValue(editForm.checkIn),
//         checkOut: fromTimeInputValue(editForm.checkOut),
//         workHours: computed.workHours,
//         overtime: editForm.overtime.trim() || computed.overtime,
//       });
//       setSelectedEmployee(null);
//       setOtManual(false);
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function markAllPresent() {
//     for (const row of attendance) {
//       if (row.status === "Present") continue;
//       await setStatusFor(row.id, "Present");
//     }
//   }

//   async function confirmMarkHoliday() {
//     setHolidayBusy(true);
//     try {
//       const name = holidayName.trim() || "Holiday";
//       await markHoliday(selectedDate, name);

//       for (const row of attendance) {
//         await updateRow(row.id, {
//           status: "Holiday",
//           checkIn: "--",
//           checkOut: "--",
//           workHours: "0h",
//           overtime: "0m",
//         });
//       }

//       setHoliday({
//         id: selectedDate,
//         date: selectedDate,
//         name,
//       });
//       setShowHolidayModal(false);
//     } catch (err) {
//       console.error(err);
//       alert("Could not mark holiday.");
//     } finally {
//       setHolidayBusy(false);
//     }
//   }

//   async function removeHoliday() {
//     if (
//       !window.confirm(
//         "Remove holiday for this date? Staff will show as Absent until marked again."
//       )
//     ) {
//       return;
//     }
//     setHolidayBusy(true);
//     try {
//       await unmarkHoliday(selectedDate);
//       for (const row of attendance) {
//         if (row.status === "Holiday") {
//           await updateRow(row.id, {
//             status: "Absent",
//             checkIn: "--",
//             checkOut: "--",
//             workHours: "0h",
//             overtime: "0m",
//           });
//         }
//       }
//       setHoliday(null);
//     } catch (err) {
//       console.error(err);
//       alert("Could not remove holiday.");
//     } finally {
//       setHolidayBusy(false);
//     }
//   }

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
//     const rows = filtered.map((r) =>
//       [
//         selectedDate,
//         r.employeeId,
//         r.name,
//         r.department,
//         r.status,
//         r.checkIn,
//         r.checkOut,
//         r.workHours,
//         r.overtime,
//       ].join(",")
//     );
//     const blob = new Blob([[headers.join(","), ...rows].join("\n")], {
//       type: "text/csv",
//     });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `attendance-${selectedDate}.csv`;
//     a.click();
//     URL.revokeObjectURL(url);
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       {/* Header */}
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1600px] px-4 py-4 sm:px-5 sm:py-5 lg:px-8">
//           <a
//             href="/interior/hrms"
//             className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-[#176b5b] hover:underline sm:mb-3"
//           >
//             ← Back to HRMS
//           </a>

//           <div className="flex flex-col gap-3 sm:gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
//                 Attendance
//               </h1>
//               <p className="mt-1 text-xs text-gray-500 sm:text-sm">
//                 New days default to Absent. Mark holidays for the selected date.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>

//             {/* Action buttons – 2 per row on mobile */}
//             <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-2">
//               <input
//                 type="date"
//                 value={selectedDate}
//                 onChange={(e) => setSelectedDate(e.target.value)}
//                 className="col-span-2 rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] sm:col-span-1"
//               />

//               {holiday ? (
//                 <button
//                   type="button"
//                   disabled={holidayBusy}
//                   onClick={() => void removeHoliday()}
//                   className="rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-2.5 text-xs font-semibold text-indigo-700 hover:bg-indigo-100 disabled:opacity-60 sm:px-4 sm:text-sm"
//                 >
//                   {holidayBusy ? "…" : "Remove holiday"}
//                 </button>
//               ) : (
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setHolidayName("Holiday");
//                     setShowHolidayModal(true);
//                   }}
//                   className="rounded-lg border border-indigo-200 bg-white px-3 py-2.5 text-xs font-semibold text-indigo-700 hover:bg-indigo-50 sm:px-4 sm:text-sm"
//                 >
//                   Mark as holiday
//                 </button>
//               )}

//               <button
//                 type="button"
//                 onClick={markAllPresent}
//                 disabled={!!holiday}
//                 className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50 sm:px-4 sm:text-sm"
//               >
//                 Mark All Present
//               </button>

//               <button
//                 type="button"
//                 onClick={exportCsv}
//                 className="rounded-lg bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white hover:bg-[#125848] sm:px-4 sm:text-sm"
//               >
//                 Export CSV
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-4 px-4 py-4 sm:space-y-6 sm:px-5 sm:py-6 lg:px-8">
//         {holiday && (
//           <div className="rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-3 text-sm text-indigo-800">
//             <span className="font-semibold">{holiday.name || ""}</span>
//             {" · "}
//             {selectedDate} — all staff marked as Holiday for this date.
//           </div>
//         )}

//         {/* Stats */}
//         <section className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-7">
//           <Stat label="Staff" value={loading ? "…" : String(totalEmployees)} />
//           <Stat label="Present" value={loading ? "…" : String(presentCount)} />
//           <Stat label="Late" value={loading ? "…" : String(lateCount)} />
//           <Stat label="Half Day" value={loading ? "…" : String(halfDayCount)} />
//           <Stat label="Leave" value={loading ? "…" : String(leaveCount)} />
//           <Stat label="Holiday" value={loading ? "…" : String(holidayCount)} />
//           <Stat label="Absent" value={loading ? "…" : String(absentCount)} />
//         </section>

//         {/* Attendance rate */}
//         <section className="rounded-xl border border-[#e4e2da] bg-white p-4 sm:p-5">
//           <div className="flex items-center justify-between">
//             <p className="text-sm font-semibold">Attendance rate</p>
//             <p className="text-lg font-bold text-[#176b5b]">
//               {attendancePercentage}%
//             </p>
//           </div>
//           <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
//             <div
//               className="h-full rounded-full bg-[#176b5b]"
//               style={{ width: `${attendancePercentage}%` }}
//             />
//           </div>
//         </section>

//         {/* Filters – Search full width, then 2 selects per row on mobile */}
//         <section className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-4">
//           <div className="flex flex-col gap-3">
//             {/* Search – always full width */}
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search name, ID, designation..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-4 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             />

//             {/* Two selects side-by-side on mobile */}
//             <div className="grid grid-cols-2 gap-3">
//               <select
//                 value={department}
//                 onChange={(e) => setDepartment(e.target.value)}
//                 className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//               >
//                 {departments.map((d) => (
//                   <option key={d}>{d}</option>
//                 ))}
//               </select>

//               <select
//                 value={status}
//                 onChange={(e) =>
//                   setStatus(e.target.value as "All Statuses" | AttendanceStatus)
//                 }
//                 className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//               >
//                 {statusOptions.map((s) => (
//                   <option key={s}>{s}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </section>

//         {/* Table */}
//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1050px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Employee</th>
//                   <th className="px-4 py-3 font-semibold">Department</th>
//                   <th className="px-4 py-3 font-semibold">Check In</th>
//                   <th className="px-4 py-3 font-semibold">Check Out</th>
//                   <th className="px-4 py-3 font-semibold">Hours</th>
//                   <th className="px-4 py-3 font-semibold">OT</th>
//                   <th className="px-4 py-3 font-semibold">Present</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
//                   <th className="px-4 py-3 text-right font-semibold">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece6]">
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={9}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       Loading attendance…
//                     </td>
//                   </tr>
//                 ) : (
//                   <>
//                     {filtered.map((row) => {
//                       const on = isPresentLike(row.status);
//                       return (
//                         <tr key={row.id} className="hover:bg-[#fafaf8]">
//                           <td className="px-5 py-4">
//                             <p className="font-semibold text-gray-900">
//                               {row.name}
//                             </p>
//                             <p className="text-xs text-[#176b5b]">
//                               {row.employeeId}
//                             </p>
//                           </td>
//                           <td className="px-4 py-4 text-sm text-gray-700">
//                             {row.department}
//                           </td>
//                           <td className="px-4 py-4 text-sm">{row.checkIn}</td>
//                           <td className="px-4 py-4 text-sm">{row.checkOut}</td>
//                           <td className="px-4 py-4 text-sm">{row.workHours}</td>
//                           <td className="px-4 py-4 text-sm font-medium text-[#9a5b18]">
//                             {row.overtime}
//                           </td>
//                           <td className="px-4 py-4">
//                             <button
//                               type="button"
//                               role="switch"
//                               aria-checked={on}
//                               disabled={!!holiday}
//                               title={on ? "Mark Absent" : "Mark Present"}
//                               onClick={() => void togglePresent(row)}
//                               className={`relative h-7 w-12 shrink-0 rounded-full transition-colors disabled:opacity-40 ${
//                                 on ? "bg-[#176b5b]" : "bg-gray-300"
//                               }`}
//                             >
//                               <span
//                                 className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-all ${
//                                   on ? "left-5" : "left-0.5"
//                                 }`}
//                               />
//                             </button>
//                           </td>
//                           <td className="px-4 py-4">
//                             <span
//                               className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                                 row.status
//                               )}`}
//                             >
//                               {row.status}
//                             </span>
//                           </td>
//                           <td className="px-4 py-4 text-right">
//                             <button
//                               type="button"
//                               onClick={() => openUpdate(row)}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                             >
//                               Update
//                             </button>
//                           </td>
//                         </tr>
//                       );
//                     })}
//                     {filtered.length === 0 && (
//                       <tr>
//                         <td
//                           colSpan={9}
//                           className="px-5 py-12 text-center text-sm text-gray-500"
//                         >
//                           No attendance rows. Add employees first.
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

//       {/* Holiday modal */}
//       {showHolidayModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
//             <h2 className="text-lg font-bold">Mark as holiday</h2>
//             <p className="mt-1 text-sm text-gray-500">
//               Date: <span className="font-semibold">{selectedDate}</span>. All
//               employees will be set to Holiday for this day.
//             </p>
//             <label className="mt-4 block">
//               <span className="mb-1 block text-xs font-medium text-gray-600">
//                 Holiday name
//               </span>
//               <input
//                 value={holidayName}
//                 onChange={(e) => setHolidayName(e.target.value)}
//                 placeholder="Diwali / Company Holiday"
//                 className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//               />
//             </label>
//             <div className="mt-5 flex gap-2">
//               <button
//                 type="button"
//                 onClick={() => setShowHolidayModal(false)}
//                 className="flex-1 rounded-lg border border-gray-200 py-2.5 text-sm font-medium"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 disabled={holidayBusy}
//                 onClick={() => void confirmMarkHoliday()}
//                 className="flex-1 rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-60"
//               >
//                 {holidayBusy ? "Saving…" : "Confirm holiday"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Update modal */}
//       {selectedEmployee && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="border-b border-[#e4e2da] px-6 py-4">
//               <p className="text-xs font-semibold text-[#176b5b]">
//                 {selectedEmployee.employeeId}
//               </p>
//               <h2 className="mt-1 text-lg font-bold">
//                 {selectedEmployee.name}
//               </h2>
//               <p className="mt-1 text-xs text-gray-400">Date: {selectedDate}</p>
//             </div>

//             <div className="space-y-4 p-6">
//               <div>
//                 <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
//                   Status
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {(
//                     [
//                       "Present",
//                       "Late",
//                       "Half Day",
//                       "Leave",
//                       "Holiday",
//                       "Absent",
//                     ] as AttendanceStatus[]
//                   ).map((s) => (
//                     <button
//                       key={s}
//                       type="button"
//                       onClick={() => applyStatusInModal(s)}
//                       className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
//                         editForm.status === s
//                           ? statusClass(s)
//                           : "border-gray-200 text-gray-600"
//                       }`}
//                     >
//                       {s}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-3">
//                 <label className="block">
//                   <span className="mb-1 block text-xs font-medium text-gray-600">
//                     Check in
//                   </span>
//                   <input
//                     type="time"
//                     value={editForm.checkIn}
//                     onChange={(e) => {
//                       setOtManual(false);
//                       setEditForm((f) => ({
//                         ...f,
//                         checkIn: e.target.value,
//                       }));
//                     }}
//                     className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="mb-1 block text-xs font-medium text-gray-600">
//                     Check out
//                   </span>
//                   <input
//                     type="time"
//                     value={editForm.checkOut}
//                     onChange={(e) => {
//                       setOtManual(false);
//                       setEditForm((f) => ({
//                         ...f,
//                         checkOut: e.target.value,
//                       }));
//                     }}
//                     className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="mb-1 block text-xs font-medium text-gray-600">
//                     Work hours
//                   </span>
//                   <input
//                     value={autoHours.workHours}
//                     readOnly
//                     className="w-full cursor-not-allowed rounded-lg border border-gray-200 bg-[#f5f5f2] px-3 py-2 text-sm text-gray-700 outline-none"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="mb-1 block text-xs font-medium text-gray-600">
//                     Overtime
//                   </span>
//                   <input
//                     list="ot-presets"
//                     value={editForm.overtime}
//                     onChange={(e) => {
//                       setOtManual(true);
//                       setEditForm((f) => ({
//                         ...f,
//                         overtime: e.target.value,
//                       }));
//                     }}
//                     className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                   <datalist id="ot-presets">
//                     {OVERTIME_PRESETS.map((p) => (
//                       <option key={p} value={p} />
//                     ))}
//                   </datalist>
//                 </label>
//               </div>

//               <div className="flex flex-wrap gap-2">
//                 {OVERTIME_PRESETS.map((p) => (
//                   <button
//                     key={p}
//                     type="button"
//                     onClick={() => {
//                       setOtManual(true);
//                       setEditForm((f) => ({ ...f, overtime: p }));
//                     }}
//                     className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
//                       editForm.overtime === p
//                         ? "border-[#9a5b18] bg-[#faf6f0] text-[#9a5b18]"
//                         : "border-gray-200 text-gray-600 hover:bg-gray-50"
//                     }`}
//                   >
//                     {p}
//                   </button>
//                 ))}
//               </div>

//               <div className="flex gap-2 pt-1">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSelectedEmployee(null);
//                     setOtManual(false);
//                   }}
//                   className="flex-1 rounded-lg border border-gray-200 py-2.5 text-sm font-medium"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   disabled={saving}
//                   onClick={() => void saveUpdate()}
//                   className="flex-1 rounded-lg bg-[#176b5b] py-2.5 text-sm font-semibold text-white hover:bg-[#125848] disabled:opacity-60"
//                 >
//                   {saving ? "Saving…" : "Save"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function Stat({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-4">
//       <p className="text-xs text-gray-500">{label}</p>
//       <p className="mt-1 text-lg font-bold text-gray-900 sm:text-xl">{value}</p>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAttendanceByDate,
//   upsertAttendance,
//   getHoliday,
//   markHoliday,
//   unmarkHoliday,
//   type InteriorAttendance,
//   type InteriorHoliday,
// } from "@/modules/interior/services/attendanceService";

// type AttendanceStatus =
//   | "Present"
//   | "Absent"
//   | "Late"
//   | "Half Day"
//   | "Leave"
//   | "Holiday";

// type Row = {
//   id: string;
//   name: string;
//   employeeId: string;
//   employeeDocId?: string;
//   department: string;
//   designation: string;
//   checkIn: string;
//   checkOut: string;
//   status: AttendanceStatus;
//   workHours: string;
//   overtime: string;
//   date: string;
// };

// const departments = [
//   "All Departments",
//   "Interior Design",
//   "Project Management",
//   "Site Operations",
//   "HR",
//   "Accounts",
//   "Sales",
//   "Other",
// ];

// const statusOptions: Array<"All Statuses" | AttendanceStatus> = [
//   "All Statuses",
//   "Present",
//   "Absent",
//   "Late",
//   "Half Day",
//   "Leave",
//   "Holiday",
// ];

// const OVERTIME_PRESETS = [
//   "0m",
//   "15m",
//   "30m",
//   "45m",
//   "1h",
//   "1h 30m",
//   "2h",
//   "2h 30m",
//   "3h",
// ];

// const STANDARD_DAY_MINUTES = 8 * 60 + 30;

// function statusClass(status: AttendanceStatus) {
//   switch (status) {
//     case "Present":
//       return "bg-green-50 text-green-700 border-green-200";
//     case "Late":
//       return "bg-amber-50 text-amber-700 border-amber-200";
//     case "Half Day":
//       return "bg-blue-50 text-blue-700 border-blue-200";
//     case "Leave":
//       return "bg-purple-50 text-purple-700 border-purple-200";
//     case "Holiday":
//       return "bg-indigo-50 text-indigo-700 border-indigo-200";
//     case "Absent":
//       return "bg-red-50 text-red-700 border-red-200";
//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function normalizeStatus(raw?: string): AttendanceStatus {
//   const s = (raw || "Absent").toLowerCase();
//   if (s.includes("holiday")) return "Holiday";
//   if (s.includes("present")) return "Present";
//   if (s.includes("late")) return "Late";
//   if (s.includes("half")) return "Half Day";
//   if (s.includes("leave")) return "Leave";
//   return "Absent";
// }

// function toTimeInputValue(value: string): string {
//   if (!value || value === "--" || value === "-") return "";
//   const v = value.trim();

//   const m24 = v.match(/^(\d{1,2}):(\d{2})$/);
//   if (m24) {
//     const h = Math.min(23, parseInt(m24[1]!, 10));
//     const min = Math.min(59, parseInt(m24[2]!, 10));
//     return `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
//   }

//   const m12 = v.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
//   if (m12) {
//     let h = parseInt(m12[1]!, 10);
//     const min = parseInt(m12[2]!, 10);
//     const ap = m12[3]!.toUpperCase();
//     if (ap === "AM") {
//       if (h === 12) h = 0;
//     } else if (h !== 12) {
//       h += 12;
//     }
//     return `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
//   }

//   return "";
// }

// function fromTimeInputValue(value: string): string {
//   if (!value) return "--";
//   const m = value.match(/^(\d{1,2}):(\d{2})$/);
//   if (!m) return "--";
//   let h = parseInt(m[1]!, 10);
//   const min = m[2]!;
//   const ap = h >= 12 ? "PM" : "AM";
//   if (h === 0) h = 12;
//   else if (h > 12) h -= 12;
//   return `${String(h).padStart(2, "0")}:${min} ${ap}`;
// }

// function timeToMinutes(value: string): number | null {
//   if (!value) return null;
//   const m = value.match(/^(\d{1,2}):(\d{2})$/);
//   if (!m) return null;
//   const h = parseInt(m[1]!, 10);
//   const min = parseInt(m[2]!, 10);
//   if (!Number.isFinite(h) || !Number.isFinite(min)) return null;
//   return h * 60 + min;
// }

// function formatDuration(totalMinutes: number): string {
//   if (totalMinutes <= 0) return "0h";
//   const h = Math.floor(totalMinutes / 60);
//   const m = totalMinutes % 60;
//   if (h === 0) return `${m}m`;
//   if (m === 0) return `${h}h`;
//   return `${h}h ${String(m).padStart(2, "0")}m`;
// }

// function computeHoursFromTimes(
//   checkInHHMM: string,
//   checkOutHHMM: string
// ): { workHours: string; overtime: string } {
//   const inMin = timeToMinutes(checkInHHMM);
//   const outMin = timeToMinutes(checkOutHHMM);

//   if (inMin === null || outMin === null) {
//     return { workHours: "0h", overtime: "0m" };
//   }

//   let worked = outMin - inMin;
//   if (worked < 0) worked += 24 * 60;

//   const ot = Math.max(0, worked - STANDARD_DAY_MINUTES);

//   return {
//     workHours: formatDuration(worked),
//     overtime: ot === 0 ? "0m" : formatDuration(ot),
//   };
// }

// function mapToUi(r: InteriorAttendance, date: string): Row {
//   return {
//     id: r.id,
//     name: r.name || "Unknown",
//     employeeId: r.employeeId || "—",
//     employeeDocId: r.employeeDocId,
//     department: r.department || "Other",
//     designation: r.designation || "—",
//     checkIn: r.checkIn || "--",
//     checkOut: r.checkOut || "--",
//     status: normalizeStatus(r.status),
//     workHours: r.workHours || "0h",
//     overtime: r.overtime || "0m",
//     date: r.date || date,
//   };
// }

// function defaultsForStatus(status: AttendanceStatus) {
//   if (status === "Present")
//     return { checkIn: "09:00 AM", checkOut: "06:00 PM" };
//   if (status === "Late")
//     return { checkIn: "09:30 AM", checkOut: "06:00 PM" };
//   if (status === "Half Day")
//     return { checkIn: "09:00 AM", checkOut: "01:30 PM" };
//   return { checkIn: "--", checkOut: "--" };
// }

// function isPresentLike(status: AttendanceStatus) {
//   return (
//     status === "Present" || status === "Late" || status === "Half Day"
//   );
// }

// export default function AttendancePage() {
//   const [attendance, setAttendance] = useState<Row[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [holidayBusy, setHolidayBusy] = useState(false);
//   const [search, setSearch] = useState("");
//   const [department, setDepartment] = useState("All Departments");
//   const [status, setStatus] = useState<"All Statuses" | AttendanceStatus>(
//     "All Statuses"
//   );
//   const [selectedDate, setSelectedDate] = useState(
//     new Date().toISOString().slice(0, 10)
//   );
//   const [holiday, setHoliday] = useState<InteriorHoliday | null>(null);
//   const [showHolidayModal, setShowHolidayModal] = useState(false);
//   const [holidayName, setHolidayName] = useState("");
//   const [selectedEmployee, setSelectedEmployee] = useState<Row | null>(null);

//   const [editForm, setEditForm] = useState({
//     status: "Absent" as AttendanceStatus,
//     checkIn: "",
//     checkOut: "",
//     overtime: "0m",
//   });

//   const [otManual, setOtManual] = useState(false);

//   const autoHours = useMemo(
//     () => computeHoursFromTimes(editForm.checkIn, editForm.checkOut),
//     [editForm.checkIn, editForm.checkOut]
//   );

//   useEffect(() => {
//     if (otManual) return;
//     setEditForm((f) =>
//       f.overtime === autoHours.overtime
//         ? f
//         : { ...f, overtime: autoHours.overtime }
//     );
//   }, [autoHours.overtime, otManual]);

//   async function load(date: string) {
//     setLoading(true);
//     try {
//       const [data, hol] = await Promise.all([
//         getAttendanceByDate(date),
//         getHoliday(date),
//       ]);
//       setAttendance(data.map((d) => mapToUi(d, date)));
//       setHoliday(hol);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     load(selectedDate);
//   }, [selectedDate]);

//   const filtered = useMemo(() => {
//     const q = search.toLowerCase().trim();
//     return attendance.filter((row) => {
//       const matchesSearch =
//         !q ||
//         row.name.toLowerCase().includes(q) ||
//         row.employeeId.toLowerCase().includes(q) ||
//         row.designation.toLowerCase().includes(q);
//       const matchesDept =
//         department === "All Departments" || row.department === department;
//       const matchesStatus =
//         status === "All Statuses" || row.status === status;
//       return matchesSearch && matchesDept && matchesStatus;
//     });
//   }, [attendance, search, department, status]);

//   const totalEmployees = attendance.length;
//   const presentCount = attendance.filter((r) => r.status === "Present").length;
//   const absentCount = attendance.filter((r) => r.status === "Absent").length;
//   const lateCount = attendance.filter((r) => r.status === "Late").length;
//   const leaveCount = attendance.filter((r) => r.status === "Leave").length;
//   const halfDayCount = attendance.filter((r) => r.status === "Half Day").length;
//   const holidayCount = attendance.filter((r) => r.status === "Holiday").length;
//   const attendancePercentage =
//     totalEmployees === 0
//       ? 0
//       : Math.round(
//           ((presentCount + lateCount + halfDayCount) / totalEmployees) * 100
//         );

//   async function updateRow(id: string, patch: Partial<Row>) {
//     const current = attendance.find((r) => r.id === id);
//     if (!current) return;

//     const next = { ...current, ...patch };
//     setAttendance((list) => list.map((r) => (r.id === id ? next : r)));
//     setSelectedEmployee((s) => (s && s.id === id ? next : s));

//     try {
//       await upsertAttendance({
//         id: next.id,
//         date: next.date || selectedDate,
//         employeeDocId: next.employeeDocId,
//         employeeId: next.employeeId,
//         name: next.name,
//         department: next.department,
//         designation: next.designation,
//         checkIn: next.checkIn,
//         checkOut: next.checkOut,
//         status: next.status,
//         workHours: next.workHours,
//         overtime: next.overtime,
//       });
//     } catch (err) {
//       console.error(err);
//       await load(selectedDate);
//     }
//   }

//   async function setStatusFor(id: string, nextStatus: AttendanceStatus) {
//     const defaults = defaultsForStatus(nextStatus);
//     const inHH = toTimeInputValue(defaults.checkIn);
//     const outHH = toTimeInputValue(defaults.checkOut);
//     const computed = computeHoursFromTimes(inHH, outHH);

//     await updateRow(id, {
//       status: nextStatus,
//       checkIn: defaults.checkIn,
//       checkOut: defaults.checkOut,
//       workHours: computed.workHours,
//       overtime: computed.overtime,
//     });
//   }

//   async function togglePresent(row: Row) {
//     if (isPresentLike(row.status)) {
//       await setStatusFor(row.id, "Absent");
//     } else {
//       await setStatusFor(row.id, "Present");
//     }
//   }

//   function openUpdate(row: Row) {
//     setOtManual(false);
//     setSelectedEmployee(row);
//     const checkIn = toTimeInputValue(row.checkIn);
//     const checkOut = toTimeInputValue(row.checkOut);
//     const computed = computeHoursFromTimes(checkIn, checkOut);

//     setEditForm({
//       status: row.status,
//       checkIn,
//       checkOut,
//       overtime: computed.overtime,
//     });
//   }

//   function applyStatusInModal(nextStatus: AttendanceStatus) {
//     setOtManual(false);
//     const defaults = defaultsForStatus(nextStatus);
//     const checkIn = toTimeInputValue(defaults.checkIn);
//     const checkOut = toTimeInputValue(defaults.checkOut);
//     const computed = computeHoursFromTimes(checkIn, checkOut);

//     setEditForm({
//       status: nextStatus,
//       checkIn,
//       checkOut,
//       overtime: computed.overtime,
//     });
//   }

//   async function saveUpdate() {
//     if (!selectedEmployee) return;
//     setSaving(true);
//     try {
//       const computed = computeHoursFromTimes(
//         editForm.checkIn,
//         editForm.checkOut
//       );
//       await updateRow(selectedEmployee.id, {
//         status: editForm.status,
//         checkIn: fromTimeInputValue(editForm.checkIn),
//         checkOut: fromTimeInputValue(editForm.checkOut),
//         workHours: computed.workHours,
//         overtime: editForm.overtime.trim() || computed.overtime,
//       });
//       setSelectedEmployee(null);
//       setOtManual(false);
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function markAllPresent() {
//     for (const row of attendance) {
//       if (row.status === "Present") continue;
//       await setStatusFor(row.id, "Present");
//     }
//   }

//   async function confirmMarkHoliday() {
//     setHolidayBusy(true);
//     try {
//       const name = holidayName.trim() || "Holiday";
//       await markHoliday(selectedDate, name);

//       for (const row of attendance) {
//         await updateRow(row.id, {
//           status: "Holiday",
//           checkIn: "--",
//           checkOut: "--",
//           workHours: "0h",
//           overtime: "0m",
//         });
//       }

//       setHoliday({
//         id: selectedDate,
//         date: selectedDate,
//         name,
//       });
//       setShowHolidayModal(false);
//     } catch (err) {
//       console.error(err);
//       alert("Could not mark holiday.");
//     } finally {
//       setHolidayBusy(false);
//     }
//   }

//   async function removeHoliday() {
//     if (
//       !window.confirm(
//         "Remove holiday for this date? Staff will show as Absent until marked again."
//       )
//     ) {
//       return;
//     }
//     setHolidayBusy(true);
//     try {
//       await unmarkHoliday(selectedDate);
//       for (const row of attendance) {
//         if (row.status === "Holiday") {
//           await updateRow(row.id, {
//             status: "Absent",
//             checkIn: "--",
//             checkOut: "--",
//             workHours: "0h",
//             overtime: "0m",
//           });
//         }
//       }
//       setHoliday(null);
//     } catch (err) {
//       console.error(err);
//       alert("Could not remove holiday.");
//     } finally {
//       setHolidayBusy(false);
//     }
//   }

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
//     const rows = filtered.map((r) =>
//       [
//         selectedDate,
//         r.employeeId,
//         r.name,
//         r.department,
//         r.status,
//         r.checkIn,
//         r.checkOut,
//         r.workHours,
//         r.overtime,
//       ].join(",")
//     );
//     const blob = new Blob([[headers.join(","), ...rows].join("\n")], {
//       type: "text/csv",
//     });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `attendance-${selectedDate}.csv`;
//     a.click();
//     URL.revokeObjectURL(url);
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       {/* Header */}
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1600px] px-4 py-4 sm:px-5 sm:py-5 lg:px-8">
//           <a
//             href="/interior/hrms"
//             className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-[#176b5b] hover:underline sm:mb-3"
//           >
//             ← Back to HRMS
//           </a>

//           <div className="flex flex-col gap-3 sm:gap-4">
//             <div>
//               <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
//                 Attendance
//               </h1>
//               <p className="mt-1 text-xs text-gray-500 sm:text-sm">
//                 New days default to Absent. Mark holidays for the selected date.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>

//             {/* Action buttons – always 4 per row */}
//             <div className="grid grid-cols-4 gap-2">
//               <input
//                 type="date"
//                 value={selectedDate}
//                 onChange={(e) => setSelectedDate(e.target.value)}
//                 className="rounded-lg border border-gray-200 px-2 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:px-3 sm:text-sm"
//               />

//               {holiday ? (
//                 <button
//                   type="button"
//                   disabled={holidayBusy}
//                   onClick={() => void removeHoliday()}
//                   className="rounded-lg border border-indigo-200 bg-indigo-50 px-1 py-2.5 text-[11px] font-semibold text-indigo-700 hover:bg-indigo-100 disabled:opacity-60 sm:px-3 sm:text-sm"
//                 >
//                   {holidayBusy ? "…" : "Remove holiday"}
//                 </button>
//               ) : (
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setHolidayName("Holiday");
//                     setShowHolidayModal(true);
//                   }}
//                   className="rounded-lg border border-indigo-200 bg-white px-1 py-2.5 text-[11px] font-semibold text-indigo-700 hover:bg-indigo-50 sm:px-3 sm:text-sm"
//                 >
//                   Mark as holiday
//                 </button>
//               )}

//               <button
//                 type="button"
//                 onClick={markAllPresent}
//                 disabled={!!holiday}
//                 className="rounded-lg border border-gray-200 bg-white px-1 py-2.5 text-[11px] font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50 sm:px-3 sm:text-sm"
//               >
//                 Mark All Present
//               </button>

//               <button
//                 type="button"
//                 onClick={exportCsv}
//                 className="rounded-lg bg-[#176b5b] px-1 py-2.5 text-[11px] font-semibold text-white hover:bg-[#125848] sm:px-3 sm:text-sm"
//               >
//                 Export CSV
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-4 px-4 py-4 sm:space-y-6 sm:px-5 sm:py-6 lg:px-8">
//         {holiday && (
//           <div className="rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-3 text-sm text-indigo-800">
//             <span className="font-semibold">{holiday.name || ""}</span>
//             {" · "}
//             {selectedDate} — all staff marked as Holiday for this date.
//           </div>
//         )}

//         {/* Stats */}
//         <section className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-7">
//           <Stat label="Staff" value={loading ? "…" : String(totalEmployees)} />
//           <Stat label="Present" value={loading ? "…" : String(presentCount)} />
//           <Stat label="Late" value={loading ? "…" : String(lateCount)} />
//           <Stat label="Half Day" value={loading ? "…" : String(halfDayCount)} />
//           <Stat label="Leave" value={loading ? "…" : String(leaveCount)} />
//           <Stat label="Holiday" value={loading ? "…" : String(holidayCount)} />
//           <Stat label="Absent" value={loading ? "…" : String(absentCount)} />
//         </section>

//         {/* Attendance rate */}
//         <section className="rounded-xl border border-[#e4e2da] bg-white p-4 sm:p-5">
//           <div className="flex items-center justify-between">
//             <p className="text-sm font-semibold">Attendance rate</p>
//             <p className="text-lg font-bold text-[#176b5b]">
//               {attendancePercentage}%
//             </p>
//           </div>
//           <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
//             <div
//               className="h-full rounded-full bg-[#176b5b]"
//               style={{ width: `${attendancePercentage}%` }}
//             />
//           </div>
//         </section>

//         {/* Filters – Search full width, then 2 selects per row on mobile */}
//         <section className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-4">
//           <div className="flex flex-col gap-3">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search name, ID, designation..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-4 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             />

//             <div className="grid grid-cols-2 gap-3">
//               <select
//                 value={department}
//                 onChange={(e) => setDepartment(e.target.value)}
//                 className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//               >
//                 {departments.map((d) => (
//                   <option key={d}>{d}</option>
//                 ))}
//               </select>

//               <select
//                 value={status}
//                 onChange={(e) =>
//                   setStatus(e.target.value as "All Statuses" | AttendanceStatus)
//                 }
//                 className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//               >
//                 {statusOptions.map((s) => (
//                   <option key={s}>{s}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </section>

//         {/* Table */}
//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1050px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Employee</th>
//                   <th className="px-4 py-3 font-semibold">Department</th>
//                   <th className="px-4 py-3 font-semibold">Check In</th>
//                   <th className="px-4 py-3 font-semibold">Check Out</th>
//                   <th className="px-4 py-3 font-semibold">Hours</th>
//                   <th className="px-4 py-3 font-semibold">OT</th>
//                   <th className="px-4 py-3 font-semibold">Present</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
//                   <th className="px-4 py-3 text-right font-semibold">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece6]">
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={9}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       Loading attendance…
//                     </td>
//                   </tr>
//                 ) : (
//                   <>
//                     {filtered.map((row) => {
//                       const on = isPresentLike(row.status);
//                       return (
//                         <tr key={row.id} className="hover:bg-[#fafaf8]">
//                           <td className="px-5 py-4">
//                             <p className="font-semibold text-gray-900">
//                               {row.name}
//                             </p>
//                             <p className="text-xs text-[#176b5b]">
//                               {row.employeeId}
//                             </p>
//                           </td>
//                           <td className="px-4 py-4 text-sm text-gray-700">
//                             {row.department}
//                           </td>
//                           <td className="px-4 py-4 text-sm">{row.checkIn}</td>
//                           <td className="px-4 py-4 text-sm">{row.checkOut}</td>
//                           <td className="px-4 py-4 text-sm">{row.workHours}</td>
//                           <td className="px-4 py-4 text-sm font-medium text-[#9a5b18]">
//                             {row.overtime}
//                           </td>
//                           <td className="px-4 py-4">
//                             <button
//                               type="button"
//                               role="switch"
//                               aria-checked={on}
//                               disabled={!!holiday}
//                               title={on ? "Mark Absent" : "Mark Present"}
//                               onClick={() => void togglePresent(row)}
//                               className={`relative h-7 w-12 shrink-0 rounded-full transition-colors disabled:opacity-40 ${
//                                 on ? "bg-[#176b5b]" : "bg-gray-300"
//                               }`}
//                             >
//                               <span
//                                 className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-all ${
//                                   on ? "left-5" : "left-0.5"
//                                 }`}
//                               />
//                             </button>
//                           </td>
//                           <td className="px-4 py-4">
//                             <span
//                               className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                                 row.status
//                               )}`}
//                             >
//                               {row.status}
//                             </span>
//                           </td>
//                           <td className="px-4 py-4 text-right">
//                             <button
//                               type="button"
//                               onClick={() => openUpdate(row)}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                             >
//                               Update
//                             </button>
//                           </td>
//                         </tr>
//                       );
//                     })}
//                     {filtered.length === 0 && (
//                       <tr>
//                         <td
//                           colSpan={9}
//                           className="px-5 py-12 text-center text-sm text-gray-500"
//                         >
//                           No attendance rows. Add employees first.
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

//       {/* Holiday modal */}
//       {showHolidayModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
//             <h2 className="text-lg font-bold">Mark as holiday</h2>
//             <p className="mt-1 text-sm text-gray-500">
//               Date: <span className="font-semibold">{selectedDate}</span>. All
//               employees will be set to Holiday for this day.
//             </p>
//             <label className="mt-4 block">
//               <span className="mb-1 block text-xs font-medium text-gray-600">
//                 Holiday name
//               </span>
//               <input
//                 value={holidayName}
//                 onChange={(e) => setHolidayName(e.target.value)}
//                 placeholder="Diwali / Company Holiday"
//                 className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//               />
//             </label>
//             <div className="mt-5 flex gap-2">
//               <button
//                 type="button"
//                 onClick={() => setShowHolidayModal(false)}
//                 className="flex-1 rounded-lg border border-gray-200 py-2.5 text-sm font-medium"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 disabled={holidayBusy}
//                 onClick={() => void confirmMarkHoliday()}
//                 className="flex-1 rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-60"
//               >
//                 {holidayBusy ? "Saving…" : "Confirm holiday"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Update modal */}
//       {selectedEmployee && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="border-b border-[#e4e2da] px-6 py-4">
//               <p className="text-xs font-semibold text-[#176b5b]">
//                 {selectedEmployee.employeeId}
//               </p>
//               <h2 className="mt-1 text-lg font-bold">
//                 {selectedEmployee.name}
//               </h2>
//               <p className="mt-1 text-xs text-gray-400">Date: {selectedDate}</p>
//             </div>

//             <div className="space-y-4 p-6">
//               <div>
//                 <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
//                   Status
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {(
//                     [
//                       "Present",
//                       "Late",
//                       "Half Day",
//                       "Leave",
//                       "Holiday",
//                       "Absent",
//                     ] as AttendanceStatus[]
//                   ).map((s) => (
//                     <button
//                       key={s}
//                       type="button"
//                       onClick={() => applyStatusInModal(s)}
//                       className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
//                         editForm.status === s
//                           ? statusClass(s)
//                           : "border-gray-200 text-gray-600"
//                       }`}
//                     >
//                       {s}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-3">
//                 <label className="block">
//                   <span className="mb-1 block text-xs font-medium text-gray-600">
//                     Check in
//                   </span>
//                   <input
//                     type="time"
//                     value={editForm.checkIn}
//                     onChange={(e) => {
//                       setOtManual(false);
//                       setEditForm((f) => ({
//                         ...f,
//                         checkIn: e.target.value,
//                       }));
//                     }}
//                     className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="mb-1 block text-xs font-medium text-gray-600">
//                     Check out
//                   </span>
//                   <input
//                     type="time"
//                     value={editForm.checkOut}
//                     onChange={(e) => {
//                       setOtManual(false);
//                       setEditForm((f) => ({
//                         ...f,
//                         checkOut: e.target.value,
//                       }));
//                     }}
//                     className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="mb-1 block text-xs font-medium text-gray-600">
//                     Work hours
//                   </span>
//                   <input
//                     value={autoHours.workHours}
//                     readOnly
//                     className="w-full cursor-not-allowed rounded-lg border border-gray-200 bg-[#f5f5f2] px-3 py-2 text-sm text-gray-700 outline-none"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="mb-1 block text-xs font-medium text-gray-600">
//                     Overtime
//                   </span>
//                   <input
//                     list="ot-presets"
//                     value={editForm.overtime}
//                     onChange={(e) => {
//                       setOtManual(true);
//                       setEditForm((f) => ({
//                         ...f,
//                         overtime: e.target.value,
//                       }));
//                     }}
//                     className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                   <datalist id="ot-presets">
//                     {OVERTIME_PRESETS.map((p) => (
//                       <option key={p} value={p} />
//                     ))}
//                   </datalist>
//                 </label>
//               </div>

//               <div className="flex flex-wrap gap-2">
//                 {OVERTIME_PRESETS.map((p) => (
//                   <button
//                     key={p}
//                     type="button"
//                     onClick={() => {
//                       setOtManual(true);
//                       setEditForm((f) => ({ ...f, overtime: p }));
//                     }}
//                     className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
//                       editForm.overtime === p
//                         ? "border-[#9a5b18] bg-[#faf6f0] text-[#9a5b18]"
//                         : "border-gray-200 text-gray-600 hover:bg-gray-50"
//                     }`}
//                   >
//                     {p}
//                   </button>
//                 ))}
//               </div>

//               <div className="flex gap-2 pt-1">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSelectedEmployee(null);
//                     setOtManual(false);
//                   }}
//                   className="flex-1 rounded-lg border border-gray-200 py-2.5 text-sm font-medium"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   disabled={saving}
//                   onClick={() => void saveUpdate()}
//                   className="flex-1 rounded-lg bg-[#176b5b] py-2.5 text-sm font-semibold text-white hover:bg-[#125848] disabled:opacity-60"
//                 >
//                   {saving ? "Saving…" : "Save"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function Stat({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-4">
//       <p className="text-xs text-gray-500">{label}</p>
//       <p className="mt-1 text-lg font-bold text-gray-900 sm:text-xl">{value}</p>
//     </div>
//   );
// }


"use client";

import { useEffect, useMemo, useState } from "react";
import {
  getAttendanceByDate,
  upsertAttendance,
  getHoliday,
  markHoliday,
  unmarkHoliday,
  type InteriorAttendance,
  type InteriorHoliday,
} from "@/modules/interior/services/attendanceService";

type AttendanceStatus =
  | "Present"
  | "Absent"
  | "Late"
  | "Half Day"
  | "Leave"
  | "Holiday";

type Row = {
  id: string;
  name: string;
  employeeId: string;
  employeeDocId?: string;
  department: string;
  designation: string;
  checkIn: string;
  checkOut: string;
  status: AttendanceStatus;
  workHours: string;
  overtime: string;
  date: string;
};

const departments = [
  "All Departments",
  "Interior Design",
  "Project Management",
  "Site Operations",
  "HR",
  "Accounts",
  "Sales",
  "Other",
];

const statusOptions: Array<"All Statuses" | AttendanceStatus> = [
  "All Statuses",
  "Present",
  "Absent",
  "Late",
  "Half Day",
  "Leave",
  "Holiday",
];

const OVERTIME_PRESETS = [
  "0m",
  "15m",
  "30m",
  "45m",
  "1h",
  "1h 30m",
  "2h",
  "2h 30m",
  "3h",
];

const STANDARD_DAY_MINUTES = 8 * 60 + 30;

function statusClass(status: AttendanceStatus) {
  switch (status) {
    case "Present":
      return "bg-green-50 text-green-700 border-green-200";
    case "Late":
      return "bg-amber-50 text-amber-700 border-amber-200";
    case "Half Day":
      return "bg-blue-50 text-blue-700 border-blue-200";
    case "Leave":
      return "bg-purple-50 text-purple-700 border-purple-200";
    case "Holiday":
      return "bg-indigo-50 text-indigo-700 border-indigo-200";
    case "Absent":
      return "bg-red-50 text-red-700 border-red-200";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
}

function normalizeStatus(raw?: string): AttendanceStatus {
  const s = (raw || "Absent").toLowerCase();
  if (s.includes("holiday")) return "Holiday";
  if (s.includes("present")) return "Present";
  if (s.includes("late")) return "Late";
  if (s.includes("half")) return "Half Day";
  if (s.includes("leave")) return "Leave";
  return "Absent";
}

function toTimeInputValue(value: string): string {
  if (!value || value === "--" || value === "-") return "";
  const v = value.trim();

  const m24 = v.match(/^(\d{1,2}):(\d{2})$/);
  if (m24) {
    const h = Math.min(23, parseInt(m24[1]!, 10));
    const min = Math.min(59, parseInt(m24[2]!, 10));
    return `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
  }

  const m12 = v.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (m12) {
    let h = parseInt(m12[1]!, 10);
    const min = parseInt(m12[2]!, 10);
    const ap = m12[3]!.toUpperCase();
    if (ap === "AM") {
      if (h === 12) h = 0;
    } else if (h !== 12) {
      h += 12;
    }
    return `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
  }

  return "";
}

function fromTimeInputValue(value: string): string {
  if (!value) return "--";
  const m = value.match(/^(\d{1,2}):(\d{2})$/);
  if (!m) return "--";
  let h = parseInt(m[1]!, 10);
  const min = m[2]!;
  const ap = h >= 12 ? "PM" : "AM";
  if (h === 0) h = 12;
  else if (h > 12) h -= 12;
  return `${String(h).padStart(2, "0")}:${min} ${ap}`;
}

function timeToMinutes(value: string): number | null {
  if (!value) return null;
  const m = value.match(/^(\d{1,2}):(\d{2})$/);
  if (!m) return null;
  const h = parseInt(m[1]!, 10);
  const min = parseInt(m[2]!, 10);
  if (!Number.isFinite(h) || !Number.isFinite(min)) return null;
  return h * 60 + min;
}

function formatDuration(totalMinutes: number): string {
  if (totalMinutes <= 0) return "0h";
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  if (h === 0) return `${m}m`;
  if (m === 0) return `${h}h`;
  return `${h}h ${String(m).padStart(2, "0")}m`;
}

function computeHoursFromTimes(
  checkInHHMM: string,
  checkOutHHMM: string
): { workHours: string; overtime: string } {
  const inMin = timeToMinutes(checkInHHMM);
  const outMin = timeToMinutes(checkOutHHMM);

  if (inMin === null || outMin === null) {
    return { workHours: "0h", overtime: "0m" };
  }

  let worked = outMin - inMin;
  if (worked < 0) worked += 24 * 60;

  const ot = Math.max(0, worked - STANDARD_DAY_MINUTES);

  return {
    workHours: formatDuration(worked),
    overtime: ot === 0 ? "0m" : formatDuration(ot),
  };
}

function mapToUi(r: InteriorAttendance, date: string): Row {
  return {
    id: r.id,
    name: r.name || "Unknown",
    employeeId: r.employeeId || "—",
    employeeDocId: r.employeeDocId,
    department: r.department || "Other",
    designation: r.designation || "—",
    checkIn: r.checkIn || "--",
    checkOut: r.checkOut || "--",
    status: normalizeStatus(r.status),
    workHours: r.workHours || "0h",
    overtime: r.overtime || "0m",
    date: r.date || date,
  };
}

function defaultsForStatus(status: AttendanceStatus) {
  if (status === "Present")
    return { checkIn: "09:00 AM", checkOut: "06:00 PM" };
  if (status === "Late")
    return { checkIn: "09:30 AM", checkOut: "06:00 PM" };
  if (status === "Half Day")
    return { checkIn: "09:00 AM", checkOut: "01:30 PM" };
  return { checkIn: "--", checkOut: "--" };
}

function isPresentLike(status: AttendanceStatus) {
  return (
    status === "Present" || status === "Late" || status === "Half Day"
  );
}

export default function AttendancePage() {
  const [attendance, setAttendance] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [holidayBusy, setHolidayBusy] = useState(false);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [status, setStatus] = useState<"All Statuses" | AttendanceStatus>(
    "All Statuses"
  );
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [holiday, setHoliday] = useState<InteriorHoliday | null>(null);
  const [showHolidayModal, setShowHolidayModal] = useState(false);
  const [holidayName, setHolidayName] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState<Row | null>(null);

  const [editForm, setEditForm] = useState({
    status: "Absent" as AttendanceStatus,
    checkIn: "",
    checkOut: "",
    overtime: "0m",
  });

  const [otManual, setOtManual] = useState(false);

  const autoHours = useMemo(
    () => computeHoursFromTimes(editForm.checkIn, editForm.checkOut),
    [editForm.checkIn, editForm.checkOut]
  );

  useEffect(() => {
    if (otManual) return;
    setEditForm((f) =>
      f.overtime === autoHours.overtime
        ? f
        : { ...f, overtime: autoHours.overtime }
    );
  }, [autoHours.overtime, otManual]);

  async function load(date: string) {
    setLoading(true);
    try {
      const [data, hol] = await Promise.all([
        getAttendanceByDate(date),
        getHoliday(date),
      ]);
      setAttendance(data.map((d) => mapToUi(d, date)));
      setHoliday(hol);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load(selectedDate);
  }, [selectedDate]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return attendance.filter((row) => {
      const matchesSearch =
        !q ||
        row.name.toLowerCase().includes(q) ||
        row.employeeId.toLowerCase().includes(q) ||
        row.designation.toLowerCase().includes(q);
      const matchesDept =
        department === "All Departments" || row.department === department;
      const matchesStatus =
        status === "All Statuses" || row.status === status;
      return matchesSearch && matchesDept && matchesStatus;
    });
  }, [attendance, search, department, status]);

  const totalEmployees = attendance.length;
  const presentCount = attendance.filter((r) => r.status === "Present").length;
  const absentCount = attendance.filter((r) => r.status === "Absent").length;
  const lateCount = attendance.filter((r) => r.status === "Late").length;
  const leaveCount = attendance.filter((r) => r.status === "Leave").length;
  const halfDayCount = attendance.filter((r) => r.status === "Half Day").length;
  const holidayCount = attendance.filter((r) => r.status === "Holiday").length;
  const attendancePercentage =
    totalEmployees === 0
      ? 0
      : Math.round(
          ((presentCount + lateCount + halfDayCount) / totalEmployees) * 100
        );

  async function updateRow(id: string, patch: Partial<Row>) {
    const current = attendance.find((r) => r.id === id);
    if (!current) return;

    const next = { ...current, ...patch };
    setAttendance((list) => list.map((r) => (r.id === id ? next : r)));
    setSelectedEmployee((s) => (s && s.id === id ? next : s));

    try {
      await upsertAttendance({
        id: next.id,
        date: next.date || selectedDate,
        employeeDocId: next.employeeDocId,
        employeeId: next.employeeId,
        name: next.name,
        department: next.department,
        designation: next.designation,
        checkIn: next.checkIn,
        checkOut: next.checkOut,
        status: next.status,
        workHours: next.workHours,
        overtime: next.overtime,
      });
    } catch (err) {
      console.error(err);
      await load(selectedDate);
    }
  }

  async function setStatusFor(id: string, nextStatus: AttendanceStatus) {
    const defaults = defaultsForStatus(nextStatus);
    const inHH = toTimeInputValue(defaults.checkIn);
    const outHH = toTimeInputValue(defaults.checkOut);
    const computed = computeHoursFromTimes(inHH, outHH);

    await updateRow(id, {
      status: nextStatus,
      checkIn: defaults.checkIn,
      checkOut: defaults.checkOut,
      workHours: computed.workHours,
      overtime: computed.overtime,
    });
  }

  async function togglePresent(row: Row) {
    if (isPresentLike(row.status)) {
      await setStatusFor(row.id, "Absent");
    } else {
      await setStatusFor(row.id, "Present");
    }
  }

  function openUpdate(row: Row) {
    setOtManual(false);
    setSelectedEmployee(row);
    const checkIn = toTimeInputValue(row.checkIn);
    const checkOut = toTimeInputValue(row.checkOut);
    const computed = computeHoursFromTimes(checkIn, checkOut);

    setEditForm({
      status: row.status,
      checkIn,
      checkOut,
      overtime: computed.overtime,
    });
  }

  function applyStatusInModal(nextStatus: AttendanceStatus) {
    setOtManual(false);
    const defaults = defaultsForStatus(nextStatus);
    const checkIn = toTimeInputValue(defaults.checkIn);
    const checkOut = toTimeInputValue(defaults.checkOut);
    const computed = computeHoursFromTimes(checkIn, checkOut);

    setEditForm({
      status: nextStatus,
      checkIn,
      checkOut,
      overtime: computed.overtime,
    });
  }

  async function saveUpdate() {
    if (!selectedEmployee) return;
    setSaving(true);
    try {
      const computed = computeHoursFromTimes(
        editForm.checkIn,
        editForm.checkOut
      );
      await updateRow(selectedEmployee.id, {
        status: editForm.status,
        checkIn: fromTimeInputValue(editForm.checkIn),
        checkOut: fromTimeInputValue(editForm.checkOut),
        workHours: computed.workHours,
        overtime: editForm.overtime.trim() || computed.overtime,
      });
      setSelectedEmployee(null);
      setOtManual(false);
    } finally {
      setSaving(false);
    }
  }

  async function markAllPresent() {
    for (const row of attendance) {
      if (row.status === "Present") continue;
      await setStatusFor(row.id, "Present");
    }
  }

  async function confirmMarkHoliday() {
    setHolidayBusy(true);
    try {
      const name = holidayName.trim() || "Holiday";
      await markHoliday(selectedDate, name);

      for (const row of attendance) {
        await updateRow(row.id, {
          status: "Holiday",
          checkIn: "--",
          checkOut: "--",
          workHours: "0h",
          overtime: "0m",
        });
      }

      setHoliday({
        id: selectedDate,
        date: selectedDate,
        name,
      });
      setShowHolidayModal(false);
    } catch (err) {
      console.error(err);
      alert("Could not mark holiday.");
    } finally {
      setHolidayBusy(false);
    }
  }

  async function removeHoliday() {
    if (
      !window.confirm(
        "Remove holiday for this date? Staff will show as Absent until marked again."
      )
    ) {
      return;
    }
    setHolidayBusy(true);
    try {
      await unmarkHoliday(selectedDate);
      for (const row of attendance) {
        if (row.status === "Holiday") {
          await updateRow(row.id, {
            status: "Absent",
            checkIn: "--",
            checkOut: "--",
            workHours: "0h",
            overtime: "0m",
          });
        }
      }
      setHoliday(null);
    } catch (err) {
      console.error(err);
      alert("Could not remove holiday.");
    } finally {
      setHolidayBusy(false);
    }
  }

  function exportCsv() {
    const headers = [
      "Date",
      "Employee ID",
      "Name",
      "Department",
      "Status",
      "Check In",
      "Check Out",
      "Work Hours",
      "Overtime",
    ];
    const rows = filtered.map((r) =>
      [
        selectedDate,
        r.employeeId,
        r.name,
        r.department,
        r.status,
        r.checkIn,
        r.checkOut,
        r.workHours,
        r.overtime,
      ].join(",")
    );
    const blob = new Blob([[headers.join(","), ...rows].join("\n")], {
      type: "text/csv",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `attendance-${selectedDate}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
      {/* Header */}
      <div className="border-b border-[#e4e2da] bg-white">
        <div className="mx-auto max-w-[1600px] px-4 py-4 sm:px-5 sm:py-5 lg:px-8">
          <a
            href="/interior/hrms"
            className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-[#176b5b] hover:underline sm:mb-3"
          >
            ← Back to HRMS
          </a>

          <div className="flex flex-col gap-3 sm:gap-4">
            <div>
              <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
                Attendance
              </h1>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                New days default to Absent. Mark holidays for the selected date.
                {loading && (
                  <span className="ml-2 text-[#176b5b]">Loading…</span>
                )}
              </p>
            </div>

            {/* Action buttons – always 4 per row */}
            <div className="grid grid-cols-4 gap-2">
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="rounded-lg border border-gray-200 px-2 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:px-3 sm:text-sm"
              />

              {holiday ? (
                <button
                  type="button"
                  disabled={holidayBusy}
                  onClick={() => void removeHoliday()}
                  className="rounded-lg border border-indigo-200 bg-indigo-50 px-1 py-2.5 text-[11px] font-semibold text-indigo-700 hover:bg-indigo-100 disabled:opacity-60 sm:px-3 sm:text-sm"
                >
                  {holidayBusy ? "…" : "Remove holiday"}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setHolidayName("Holiday");
                    setShowHolidayModal(true);
                  }}
                  className="rounded-lg border border-indigo-200 bg-white px-1 py-2.5 text-[11px] font-semibold text-indigo-700 hover:bg-indigo-50 sm:px-3 sm:text-sm"
                >
                  Mark as holiday
                </button>
              )}

              <button
                type="button"
                onClick={markAllPresent}
                disabled={!!holiday}
                className="rounded-lg border border-gray-200 bg-white px-1 py-2.5 text-[11px] font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50 sm:px-3 sm:text-sm"
              >
                Mark All Present
              </button>

              <button
                type="button"
                onClick={exportCsv}
                className="rounded-lg bg-[#176b5b] px-1 py-2.5 text-[11px] font-semibold text-white hover:bg-[#125848] sm:px-3 sm:text-sm"
              >
                Export CSV
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[1600px] space-y-4 px-4 py-4 sm:space-y-6 sm:px-5 sm:py-6 lg:px-8">
        {holiday && (
          <div className="rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-3 text-sm text-indigo-800">
            <span className="font-semibold">{holiday.name || ""}</span>
            {" · "}
            {selectedDate} — all staff marked as Holiday for this date.
          </div>
        )}

        {/* Stats */}
        <section className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-7">
          <Stat label="Staff" value={loading ? "…" : String(totalEmployees)} />
          <Stat label="Present" value={loading ? "…" : String(presentCount)} />
          <Stat label="Late" value={loading ? "…" : String(lateCount)} />
          <Stat label="Half Day" value={loading ? "…" : String(halfDayCount)} />
          <Stat label="Leave" value={loading ? "…" : String(leaveCount)} />
          <Stat label="Holiday" value={loading ? "…" : String(holidayCount)} />
          <Stat label="Absent" value={loading ? "…" : String(absentCount)} />
        </section>

        {/* Attendance rate */}
        <section className="rounded-xl border border-[#e4e2da] bg-white p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">Attendance rate</p>
            <p className="text-lg font-bold text-[#176b5b]">
              {attendancePercentage}%
            </p>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-[#176b5b]"
              style={{ width: `${attendancePercentage}%` }}
            />
          </div>
        </section>

        {/* Filters */}
        <section className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-4">
          <div className="flex flex-col gap-3">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, ID, designation..."
              className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-4 py-2.5 text-sm outline-none focus:border-[#176b5b]"
            />

            <div className="grid grid-cols-2 gap-3">
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
              >
                {departments.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>

              <select
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value as "All Statuses" | AttendanceStatus)
                }
                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
              >
                {statusOptions.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* ========== MOBILE: Card list (no horizontal scroll) ========== */}
        <section className="space-y-3 md:hidden">
          {loading ? (
            <div className="rounded-xl border border-[#e4e2da] bg-white py-12 text-center text-sm text-gray-500">
              Loading attendance…
            </div>
          ) : filtered.length === 0 ? (
            <div className="rounded-xl border border-[#e4e2da] bg-white py-12 text-center text-sm text-gray-500">
              No attendance rows. Add employees first.
            </div>
          ) : (
            filtered.map((row) => {
              const on = isPresentLike(row.status);
              return (
                <div
                  key={row.id}
                  className="rounded-xl border border-[#e4e2da] bg-white p-4 shadow-sm"
                >
                  {/* Name + Status */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate font-semibold text-gray-900">
                        {row.name}
                      </p>
                      <p className="text-xs text-[#176b5b]">{row.employeeId}</p>
                      <p className="mt-0.5 text-xs text-gray-500">
                        {row.department}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
                        row.status
                      )}`}
                    >
                      {row.status}
                    </span>
                  </div>

                  {/* Times & Hours */}
                  <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    <div>
                      <p className="text-[11px] text-gray-400">Check In</p>
                      <p className="font-medium">{row.checkIn}</p>
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-400">Check Out</p>
                      <p className="font-medium">{row.checkOut}</p>
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-400">Hours</p>
                      <p className="font-medium">{row.workHours}</p>
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-400">OT</p>
                      <p className="font-medium text-[#9a5b18]">
                        {row.overtime}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 flex items-center justify-between border-t border-[#eeece6] pt-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">Present</span>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={on}
                        disabled={!!holiday}
                        title={on ? "Mark Absent" : "Mark Present"}
                        onClick={() => void togglePresent(row)}
                        className={`relative h-7 w-12 shrink-0 rounded-full transition-colors disabled:opacity-40 ${
                          on ? "bg-[#176b5b]" : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-all ${
                            on ? "left-5" : "left-0.5"
                          }`}
                        />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => openUpdate(row)}
                      className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
                    >
                      Update
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </section>

        {/* ========== DESKTOP: Full table ========== */}
        <section className="hidden overflow-hidden rounded-xl border border-[#e4e2da] bg-white md:block">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1050px] text-left">
              <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
                <tr>
                  <th className="px-5 py-3 font-semibold">Employee</th>
                  <th className="px-4 py-3 font-semibold">Department</th>
                  <th className="px-4 py-3 font-semibold">Check In</th>
                  <th className="px-4 py-3 font-semibold">Check Out</th>
                  <th className="px-4 py-3 font-semibold">Hours</th>
                  <th className="px-4 py-3 font-semibold">OT</th>
                  <th className="px-4 py-3 font-semibold">Present</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 text-right font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eeece6]">
                {loading ? (
                  <tr>
                    <td
                      colSpan={9}
                      className="px-5 py-12 text-center text-sm text-gray-500"
                    >
                      Loading attendance…
                    </td>
                  </tr>
                ) : (
                  <>
                    {filtered.map((row) => {
                      const on = isPresentLike(row.status);
                      return (
                        <tr key={row.id} className="hover:bg-[#fafaf8]">
                          <td className="px-5 py-4">
                            <p className="font-semibold text-gray-900">
                              {row.name}
                            </p>
                            <p className="text-xs text-[#176b5b]">
                              {row.employeeId}
                            </p>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-700">
                            {row.department}
                          </td>
                          <td className="px-4 py-4 text-sm">{row.checkIn}</td>
                          <td className="px-4 py-4 text-sm">{row.checkOut}</td>
                          <td className="px-4 py-4 text-sm">{row.workHours}</td>
                          <td className="px-4 py-4 text-sm font-medium text-[#9a5b18]">
                            {row.overtime}
                          </td>
                          <td className="px-4 py-4">
                            <button
                              type="button"
                              role="switch"
                              aria-checked={on}
                              disabled={!!holiday}
                              title={on ? "Mark Absent" : "Mark Present"}
                              onClick={() => void togglePresent(row)}
                              className={`relative h-7 w-12 shrink-0 rounded-full transition-colors disabled:opacity-40 ${
                                on ? "bg-[#176b5b]" : "bg-gray-300"
                              }`}
                            >
                              <span
                                className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-all ${
                                  on ? "left-5" : "left-0.5"
                                }`}
                              />
                            </button>
                          </td>
                          <td className="px-4 py-4">
                            <span
                              className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
                                row.status
                              )}`}
                            >
                              {row.status}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-right">
                            <button
                              type="button"
                              onClick={() => openUpdate(row)}
                              className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
                            >
                              Update
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                    {filtered.length === 0 && (
                      <tr>
                        <td
                          colSpan={9}
                          className="px-5 py-12 text-center text-sm text-gray-500"
                        >
                          No attendance rows. Add employees first.
                        </td>
                      </tr>
                    )}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* Holiday modal */}
      {showHolidayModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <h2 className="text-lg font-bold">Mark as holiday</h2>
            <p className="mt-1 text-sm text-gray-500">
              Date: <span className="font-semibold">{selectedDate}</span>. All
              employees will be set to Holiday for this day.
            </p>
            <label className="mt-4 block">
              <span className="mb-1 block text-xs font-medium text-gray-600">
                Holiday name
              </span>
              <input
                value={holidayName}
                onChange={(e) => setHolidayName(e.target.value)}
                placeholder="Diwali / Company Holiday"
                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
              />
            </label>
            <div className="mt-5 flex gap-2">
              <button
                type="button"
                onClick={() => setShowHolidayModal(false)}
                className="flex-1 rounded-lg border border-gray-200 py-2.5 text-sm font-medium"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={holidayBusy}
                onClick={() => void confirmMarkHoliday()}
                className="flex-1 rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-60"
              >
                {holidayBusy ? "Saving…" : "Confirm holiday"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Update modal */}
      {selectedEmployee && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="border-b border-[#e4e2da] px-6 py-4">
              <p className="text-xs font-semibold text-[#176b5b]">
                {selectedEmployee.employeeId}
              </p>
              <h2 className="mt-1 text-lg font-bold">
                {selectedEmployee.name}
              </h2>
              <p className="mt-1 text-xs text-gray-400">Date: {selectedDate}</p>
            </div>

            <div className="space-y-4 p-6">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
                  Status
                </p>
                <div className="flex flex-wrap gap-2">
                  {(
                    [
                      "Present",
                      "Late",
                      "Half Day",
                      "Leave",
                      "Holiday",
                      "Absent",
                    ] as AttendanceStatus[]
                  ).map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => applyStatusInModal(s)}
                      className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
                        editForm.status === s
                          ? statusClass(s)
                          : "border-gray-200 text-gray-600"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <label className="block">
                  <span className="mb-1 block text-xs font-medium text-gray-600">
                    Check in
                  </span>
                  <input
                    type="time"
                    value={editForm.checkIn}
                    onChange={(e) => {
                      setOtManual(false);
                      setEditForm((f) => ({
                        ...f,
                        checkIn: e.target.value,
                      }));
                    }}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-medium text-gray-600">
                    Check out
                  </span>
                  <input
                    type="time"
                    value={editForm.checkOut}
                    onChange={(e) => {
                      setOtManual(false);
                      setEditForm((f) => ({
                        ...f,
                        checkOut: e.target.value,
                      }));
                    }}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-medium text-gray-600">
                    Work hours
                  </span>
                  <input
                    value={autoHours.workHours}
                    readOnly
                    className="w-full cursor-not-allowed rounded-lg border border-gray-200 bg-[#f5f5f2] px-3 py-2 text-sm text-gray-700 outline-none"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-medium text-gray-600">
                    Overtime
                  </span>
                  <input
                    list="ot-presets"
                    value={editForm.overtime}
                    onChange={(e) => {
                      setOtManual(true);
                      setEditForm((f) => ({
                        ...f,
                        overtime: e.target.value,
                      }));
                    }}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
                  />
                  <datalist id="ot-presets">
                    {OVERTIME_PRESETS.map((p) => (
                      <option key={p} value={p} />
                    ))}
                  </datalist>
                </label>
              </div>

              <div className="flex flex-wrap gap-2">
                {OVERTIME_PRESETS.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => {
                      setOtManual(true);
                      setEditForm((f) => ({ ...f, overtime: p }));
                    }}
                    className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
                      editForm.overtime === p
                        ? "border-[#9a5b18] bg-[#faf6f0] text-[#9a5b18]"
                        : "border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>

              <div className="flex gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedEmployee(null);
                    setOtManual(false);
                  }}
                  className="flex-1 rounded-lg border border-gray-200 py-2.5 text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={saving}
                  onClick={() => void saveUpdate()}
                  className="flex-1 rounded-lg bg-[#176b5b] py-2.5 text-sm font-semibold text-white hover:bg-[#125848] disabled:opacity-60"
                >
                  {saving ? "Saving…" : "Save"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-4">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="mt-1 text-lg font-bold text-gray-900 sm:text-xl">{value}</p>
    </div>
  );
}
