// "use client";

// import { useMemo, useState } from "react";

// type PayrollStatus = "Paid" | "Pending" | "Processing";

// type PayrollRecord = {
//   id: string;
//   employeeId: string;
//   employeeName: string;
//   department: string;
//   designation: string;
//   month: string;
//   basicSalary: number;
//   allowances: number;
//   overtime: number;
//   deductions: number;
//   netSalary: number;
//   status: PayrollStatus;
//   paymentDate: string;
// };

// const initialPayroll: PayrollRecord[] = [
//   {
//     id: "PAY001",
//     employeeId: "AKR001",
//     employeeName: "Ravi Kumar",
//     department: "Interior Design",
//     designation: "Senior Interior Designer",
//     month: "September 2026",
//     basicSalary: 52000,
//     allowances: 7000,
//     overtime: 3000,
//     deductions: 2000,
//     netSalary: 60000,
//     status: "Paid",
//     paymentDate: "2026-09-30",
//   },
//   {
//     id: "PAY002",
//     employeeId: "AKR002",
//     employeeName: "Priya Sharma",
//     department: "Interior Design",
//     designation: "Interior Designer",
//     month: "September 2026",
//     basicSalary: 40000,
//     allowances: 5000,
//     overtime: 1500,
//     deductions: 1500,
//     netSalary: 45000,
//     status: "Paid",
//     paymentDate: "2026-09-30",
//   },
//   {
//     id: "PAY003",
//     employeeId: "AKR003",
//     employeeName: "Arjun Reddy",
//     department: "Project Management",
//     designation: "Project Manager",
//     month: "September 2026",
//     basicSalary: 58000,
//     allowances: 9000,
//     overtime: 4000,
//     deductions: 3000,
//     netSalary: 68000,
//     status: "Paid",
//     paymentDate: "2026-09-30",
//   },
//   {
//     id: "PAY004",
//     employeeId: "AKR004",
//     employeeName: "Sneha Rao",
//     department: "HR",
//     designation: "HR Executive",
//     month: "September 2026",
//     basicSalary: 35000,
//     allowances: 5000,
//     overtime: 1000,
//     deductions: 1200,
//     netSalary: 39800,
//     status: "Paid",
//     paymentDate: "2026-09-30",
//   },
//   {
//     id: "PAY005",
//     employeeId: "AKR005",
//     employeeName: "Vamsi Krishna",
//     department: "Site Operations",
//     designation: "Site Supervisor",
//     month: "September 2026",
//     basicSalary: 38000,
//     allowances: 4500,
//     overtime: 2500,
//     deductions: 1000,
//     netSalary: 44000,
//     status: "Paid",
//     paymentDate: "2026-09-30",
//   },
//   {
//     id: "PAY006",
//     employeeId: "AKR006",
//     employeeName: "Meghana Devi",
//     department: "Accounts",
//     designation: "Accountant",
//     month: "September 2026",
//     basicSalary: 34000,
//     allowances: 4000,
//     overtime: 500,
//     deductions: 1000,
//     netSalary: 37500,
//     status: "Pending",
//     paymentDate: "",
//   },
//   {
//     id: "PAY007",
//     employeeId: "AKR007",
//     employeeName: "Kiran Kumar",
//     department: "Sales",
//     designation: "Sales Executive",
//     month: "September 2026",
//     basicSalary: 32000,
//     allowances: 3500,
//     overtime: 1000,
//     deductions: 800,
//     netSalary: 35700,
//     status: "Processing",
//     paymentDate: "",
//   },
//   {
//     id: "PAY008",
//     employeeId: "AKR008",
//     employeeName: "Anjali Rao",
//     department: "Interior Design",
//     designation: "Junior Designer",
//     month: "September 2026",
//     basicSalary: 28000,
//     allowances: 3000,
//     overtime: 1000,
//     deductions: 700,
//     netSalary: 31300,
//     status: "Paid",
//     paymentDate: "2026-09-30",
//   },
//   {
//     id: "PAY009",
//     employeeId: "AKR009",
//     employeeName: "Suresh Babu",
//     department: "Procurement",
//     designation: "Purchase Executive",
//     month: "September 2026",
//     basicSalary: 36000,
//     allowances: 4500,
//     overtime: 1500,
//     deductions: 1000,
//     netSalary: 41000,
//     status: "Paid",
//     paymentDate: "2026-09-30",
//   },
//   {
//     id: "PAY010",
//     employeeId: "AKR010",
//     employeeName: "Divya Sri",
//     department: "Administration",
//     designation: "Admin Executive",
//     month: "September 2026",
//     basicSalary: 30000,
//     allowances: 3500,
//     overtime: 500,
//     deductions: 700,
//     netSalary: 33300,
//     status: "Pending",
//     paymentDate: "",
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

// const statuses = ["All Status", "Paid", "Pending", "Processing"];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function statusClass(status: PayrollStatus) {
//   if (status === "Paid") {
//     return "bg-green-50 text-green-700 border-green-200";
//   }

//   if (status === "Processing") {
//     return "bg-blue-50 text-blue-700 border-blue-200";
//   }

//   return "bg-yellow-50 text-yellow-700 border-yellow-200";
// }

// export default function PayrollPage() {
//   const [payroll, setPayroll] = useState<PayrollRecord[]>(initialPayroll);

//   const [search, setSearch] = useState("");
//   const [department, setDepartment] = useState("All Departments");
//   const [status, setStatus] = useState("All Status");
//   const [selectedMonth, setSelectedMonth] = useState("September 2026");

//   const [showDetails, setShowDetails] =
//     useState<PayrollRecord | null>(null);

//   const [showProcessModal, setShowProcessModal] = useState(false);

//   const filteredPayroll = useMemo(() => {
//     return payroll.filter((record) => {
//       const searchText = search.toLowerCase();

//       const matchesSearch =
//         record.employeeName.toLowerCase().includes(searchText) ||
//         record.employeeId.toLowerCase().includes(searchText) ||
//         record.designation.toLowerCase().includes(searchText);

//       const matchesDepartment =
//         department === "All Departments" ||
//         record.department === department;

//       const matchesStatus =
//         status === "All Status" || record.status === status;

//       const matchesMonth = record.month === selectedMonth;

//       return (
//         matchesSearch &&
//         matchesDepartment &&
//         matchesStatus &&
//         matchesMonth
//       );
//     });
//   }, [payroll, search, department, status, selectedMonth]);

//   const totalPayroll = filteredPayroll.reduce(
//     (sum, record) => sum + record.netSalary,
//     0
//   );

//   const paidPayroll = filteredPayroll
//     .filter((record) => record.status === "Paid")
//     .reduce((sum, record) => sum + record.netSalary, 0);

//   const pendingPayroll = filteredPayroll
//     .filter((record) => record.status === "Pending")
//     .reduce((sum, record) => sum + record.netSalary, 0);

//   const processingPayroll = filteredPayroll
//     .filter((record) => record.status === "Processing")
//     .reduce((sum, record) => sum + record.netSalary, 0);

//   const totalBasic = filteredPayroll.reduce(
//     (sum, record) => sum + record.basicSalary,
//     0
//   );

//   const totalAllowances = filteredPayroll.reduce(
//     (sum, record) => sum + record.allowances,
//     0
//   );

//   const totalOvertime = filteredPayroll.reduce(
//     (sum, record) => sum + record.overtime,
//     0
//   );

//   const totalDeductions = filteredPayroll.reduce(
//     (sum, record) => sum + record.deductions,
//     0
//   );

//   function markAsPaid(id: string) {
//     setPayroll((current) =>
//       current.map((record) =>
//         record.id === id
//           ? {
//               ...record,
//               status: "Paid",
//               paymentDate: new Date()
//                 .toISOString()
//                 .split("T")[0],
//             }
//           : record
//       )
//     );

//     setShowDetails(null);
//   }

//   function markAsProcessing(id: string) {
//     setPayroll((current) =>
//       current.map((record) =>
//         record.id === id
//           ? {
//               ...record,
//               status: "Processing",
//             }
//           : record
//       )
//     );

//     setShowDetails(null);
//   }

//   function processAllPending() {
//     setPayroll((current) =>
//       current.map((record) => {
//         if (
//           record.month === selectedMonth &&
//           record.status !== "Paid"
//         ) {
//           return {
//             ...record,
//             status: "Paid",
//             paymentDate: new Date()
//               .toISOString()
//               .split("T")[0],
//           };
//         }

//         return record;
//       })
//     );

//     setShowProcessModal(false);
//   }

//   function exportPayroll() {
//     const headers = [
//       "Employee ID",
//       "Employee Name",
//       "Department",
//       "Designation",
//       "Month",
//       "Basic Salary",
//       "Allowances",
//       "Overtime",
//       "Deductions",
//       "Net Salary",
//       "Status",
//       "Payment Date",
//     ];

//     const rows = filteredPayroll.map((record) => [
//       record.employeeId,
//       record.employeeName,
//       record.department,
//       record.designation,
//       record.month,
//       record.basicSalary,
//       record.allowances,
//       record.overtime,
//       record.deductions,
//       record.netSalary,
//       record.status,
//       record.paymentDate || "-",
//     ]);

//     const csv = [headers, ...rows]
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
//     link.download = `akrish-payroll-${selectedMonth
//       .replace(" ", "-")
//       .toLowerCase()}.csv`;

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
//               <div className="mb-1 flex items-center gap-2 text-sm text-gray-500">
//                 <span className="font-semibold text-[#9a5b18]">
//                   Akrish
//                 </span>
//                 <span>/</span>
//                 <span>Interior</span>
//                 <span>/</span>
//                 <span>HRMS</span>
//               </div>

//               <h1 className="text-2xl font-bold tracking-tight">
//                 Payroll
//               </h1>

//               <p className="mt-1 text-sm text-gray-500">
//                 Manage employee salaries, payroll processing and payment
//                 records.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               <button
//                 onClick={exportPayroll}
//                 className="rounded-lg border border-[#d9d7ce] bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 ↓ Export
//               </button>

//               <button
//                 onClick={() => window.print()}
//                 className="rounded-lg border border-[#d9d7ce] bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 🖨 Print
//               </button>

//               <button
//                 onClick={() => setShowProcessModal(true)}
//                 className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#12594b]"
//               >
//                 Process Payroll
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1500px] space-y-5 px-5 py-6">
//         {/* Month + Summary */}
//         <section className="rounded-xl border border-[#e4e2da] bg-white p-4 shadow-sm">
//           <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
//             <div>
//               <p className="text-sm text-gray-500">Payroll Period</p>
//               <p className="text-lg font-bold">{selectedMonth}</p>
//             </div>

//             <select
//               value={selectedMonth}
//               onChange={(event) =>
//                 setSelectedMonth(event.target.value)
//               }
//               className="rounded-lg border border-[#dddcd5] bg-white px-4 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               <option>September 2026</option>
//               <option>August 2026</option>
//               <option>July 2026</option>
//               <option>June 2026</option>
//             </select>
//           </div>
//         </section>

//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//           <SummaryCard
//             title="Total Payroll"
//             value={formatCurrency(totalPayroll)}
//             subtitle={`${filteredPayroll.length} employees`}
//             icon="₹"
//           />

//           <SummaryCard
//             title="Paid"
//             value={formatCurrency(paidPayroll)}
//             subtitle={`${
//               totalPayroll
//                 ? Math.round((paidPayroll / totalPayroll) * 100)
//                 : 0
//             }% processed`}
//             icon="✓"
//             iconClass="bg-green-50 text-green-700"
//           />

//           <SummaryCard
//             title="Pending"
//             value={formatCurrency(pendingPayroll)}
//             subtitle={`${
//               filteredPayroll.filter(
//                 (record) => record.status === "Pending"
//               ).length
//             } employees`}
//             icon="◷"
//             iconClass="bg-yellow-50 text-yellow-700"
//           />

//           <SummaryCard
//             title="Processing"
//             value={formatCurrency(processingPayroll)}
//             subtitle={`${
//               filteredPayroll.filter(
//                 (record) => record.status === "Processing"
//               ).length
//             } employees`}
//             icon="↻"
//             iconClass="bg-blue-50 text-blue-700"
//           />
//         </div>

//         {/* Salary Breakdown */}
//         <section className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//           <div className="mb-5">
//             <h2 className="font-semibold">Salary Breakdown</h2>
//             <p className="mt-1 text-sm text-gray-500">
//               Current payroll components for {selectedMonth}
//             </p>
//           </div>

//           <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
//             <BreakdownItem
//               label="Basic Salary"
//               value={formatCurrency(totalBasic)}
//             />

//             <BreakdownItem
//               label="Allowances"
//               value={formatCurrency(totalAllowances)}
//             />

//             <BreakdownItem
//               label="Overtime"
//               value={formatCurrency(totalOvertime)}
//             />

//             <BreakdownItem
//               label="Deductions"
//               value={formatCurrency(totalDeductions)}
//             />
//           </div>
//         </section>

//         {/* Filters */}
//         <section className="rounded-xl border border-[#e4e2da] bg-white p-4 shadow-sm">
//           <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
//             <div className="relative flex-1">
//               <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                 🔍
//               </span>

//               <input
//                 value={search}
//                 onChange={(event) => setSearch(event.target.value)}
//                 placeholder="Search employee, ID or designation..."
//                 className="w-full rounded-lg border border-[#dddcd5] bg-[#fafaf8] py-2.5 pl-10 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//               />
//             </div>

//             <select
//               value={department}
//               onChange={(event) =>
//                 setDepartment(event.target.value)
//               }
//               className="rounded-lg border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {departments.map((item) => (
//                 <option key={item}>{item}</option>
//               ))}
//             </select>

//             <select
//               value={status}
//               onChange={(event) => setStatus(event.target.value)}
//               className="rounded-lg border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {statuses.map((item) => (
//                 <option key={item}>{item}</option>
//               ))}
//             </select>

//             <button
//               onClick={() => {
//                 setSearch("");
//                 setDepartment("All Departments");
//                 setStatus("All Status");
//               }}
//               className="rounded-lg border border-[#dddcd5] px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
//             >
//               Clear
//             </button>
//           </div>
//         </section>

//         {/* Payroll Table */}
//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="flex flex-col gap-2 border-b border-[#e4e2da] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
//             <div>
//               <h2 className="font-semibold">Employee Payroll</h2>
//               <p className="text-sm text-gray-500">
//                 Showing {filteredPayroll.length} payroll records
//               </p>
//             </div>

//             <div className="text-sm text-gray-500">
//               Net Payroll:{" "}
//               <span className="font-semibold text-[#176b5b]">
//                 {formatCurrency(totalPayroll)}
//               </span>
//             </div>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="min-w-[1250px] w-full">
//               <thead className="bg-[#fafaf8]">
//                 <tr className="border-b border-[#e4e2da] text-left text-xs uppercase tracking-wide text-gray-500">
//                   <th className="px-5 py-3 font-semibold">
//                     Employee
//                   </th>
//                   <th className="px-4 py-3 font-semibold">
//                     Department
//                   </th>
//                   <th className="px-4 py-3 font-semibold">
//                     Basic
//                   </th>
//                   <th className="px-4 py-3 font-semibold">
//                     Allowances
//                   </th>
//                   <th className="px-4 py-3 font-semibold">
//                     Overtime
//                   </th>
//                   <th className="px-4 py-3 font-semibold">
//                     Deductions
//                   </th>
//                   <th className="px-4 py-3 font-semibold">
//                     Net Salary
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
//                 {filteredPayroll.length === 0 ? (
//                   <tr>
//                     <td
//                       colSpan={9}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       No payroll records found.
//                     </td>
//                   </tr>
//                 ) : (
//                   filteredPayroll.map((record) => (
//                     <tr
//                       key={record.id}
//                       className="border-b border-[#eeeeea] last:border-b-0 hover:bg-[#fcfcfa]"
//                     >
//                       <td className="px-5 py-4">
//                         <div className="flex items-center gap-3">
//                           <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e7f1ee] text-sm font-bold text-[#176b5b]">
//                             {record.employeeName
//                               .split(" ")
//                               .map((name) => name[0])
//                               .slice(0, 2)
//                               .join("")}
//                           </div>

//                           <div>
//                             <button
//                               onClick={() =>
//                                 setShowDetails(record)
//                               }
//                               className="font-semibold text-gray-900 hover:text-[#176b5b]"
//                             >
//                               {record.employeeName}
//                             </button>

//                             <p className="text-xs text-gray-500">
//                               {record.employeeId}
//                             </p>
//                           </div>
//                         </div>
//                       </td>

//                       <td className="px-4 py-4">
//                         <p className="text-sm font-medium">
//                           {record.department}
//                         </p>
//                         <p className="text-xs text-gray-500">
//                           {record.designation}
//                         </p>
//                       </td>

//                       <td className="px-4 py-4 text-sm">
//                         {formatCurrency(record.basicSalary)}
//                       </td>

//                       <td className="px-4 py-4 text-sm text-green-700">
//                         +{formatCurrency(record.allowances)}
//                       </td>

//                       <td className="px-4 py-4 text-sm text-blue-700">
//                         +{formatCurrency(record.overtime)}
//                       </td>

//                       <td className="px-4 py-4 text-sm text-red-600">
//                         -{formatCurrency(record.deductions)}
//                       </td>

//                       <td className="px-4 py-4 text-sm font-bold">
//                         {formatCurrency(record.netSalary)}
//                       </td>

//                       <td className="px-4 py-4">
//                         <span
//                           className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                             record.status
//                           )}`}
//                         >
//                           {record.status}
//                         </span>
//                       </td>

//                       <td className="px-4 py-4">
//                         <div className="flex justify-end gap-1">
//                           <button
//                             onClick={() =>
//                               setShowDetails(record)
//                             }
//                             title="View details"
//                             className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
//                           >
//                             👁
//                           </button>

//                           {record.status !== "Paid" && (
//                             <button
//                               onClick={() =>
//                                 markAsPaid(record.id)
//                               }
//                               title="Mark as paid"
//                               className="rounded-md p-2 text-green-600 hover:bg-green-50"
//                             >
//                               ✓
//                             </button>
//                           )}
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </section>

//         {/* Bottom Analytics */}
//         <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
//           <section className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <h2 className="font-semibold">Payroll Status</h2>
//             <p className="mt-1 text-sm text-gray-500">
//               Payment processing overview
//             </p>

//             <div className="mt-5 space-y-4">
//               <PayrollStatusBar
//                 label="Paid"
//                 value={paidPayroll}
//                 total={totalPayroll}
//                 className="bg-green-500"
//               />

//               <PayrollStatusBar
//                 label="Processing"
//                 value={processingPayroll}
//                 total={totalPayroll}
//                 className="bg-blue-500"
//               />

//               <PayrollStatusBar
//                 label="Pending"
//                 value={pendingPayroll}
//                 total={totalPayroll}
//                 className="bg-yellow-500"
//               />
//             </div>
//           </section>

//           <section className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <h2 className="font-semibold">Payroll Information</h2>
//             <p className="mt-1 text-sm text-gray-500">
//               Current payroll summary
//             </p>

//             <div className="mt-5 space-y-3">
//               <InfoRow
//                 label="Employees in payroll"
//                 value={String(filteredPayroll.length)}
//               />

//               <InfoRow
//                 label="Basic salary"
//                 value={formatCurrency(totalBasic)}
//               />

//               <InfoRow
//                 label="Total allowances"
//                 value={formatCurrency(totalAllowances)}
//               />

//               <InfoRow
//                 label="Total overtime"
//                 value={formatCurrency(totalOvertime)}
//               />

//               <InfoRow
//                 label="Total deductions"
//                 value={formatCurrency(totalDeductions)}
//               />

//               <div className="mt-4 rounded-lg bg-[#e7f1ee] p-4">
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm font-medium text-[#176b5b]">
//                     Total Net Payroll
//                   </span>

//                   <span className="text-lg font-bold text-[#176b5b]">
//                     {formatCurrency(totalPayroll)}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </main>

//       {/* Details Modal */}
//       {showDetails && (
//         <Modal
//           title="Payroll Details"
//           onClose={() => setShowDetails(null)}
//         >
//           <div className="flex items-center gap-4 border-b border-[#e4e2da] pb-5">
//             <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e7f1ee] text-lg font-bold text-[#176b5b]">
//               {showDetails.employeeName
//                 .split(" ")
//                 .map((name) => name[0])
//                 .slice(0, 2)
//                 .join("")}
//             </div>

//             <div>
//               <h3 className="text-xl font-bold">
//                 {showDetails.employeeName}
//               </h3>

//               <p className="text-sm text-gray-500">
//                 {showDetails.employeeId} ·{" "}
//                 {showDetails.designation}
//               </p>

//               <span
//                 className={`mt-2 inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                   showDetails.status
//                 )}`}
//               >
//                 {showDetails.status}
//               </span>
//             </div>
//           </div>

//           <div className="mt-5">
//             <p className="mb-3 text-sm font-semibold text-gray-700">
//               Salary Components
//             </p>

//             <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
//               <DetailItem
//                 label="Payroll Month"
//                 value={showDetails.month}
//               />

//               <DetailItem
//                 label="Basic Salary"
//                 value={formatCurrency(
//                   showDetails.basicSalary
//                 )}
//               />

//               <DetailItem
//                 label="Allowances"
//                 value={formatCurrency(
//                   showDetails.allowances
//                 )}
//               />

//               <DetailItem
//                 label="Overtime"
//                 value={formatCurrency(
//                   showDetails.overtime
//                 )}
//               />

//               <DetailItem
//                 label="Deductions"
//                 value={formatCurrency(
//                   showDetails.deductions
//                 )}
//               />

//               <DetailItem
//                 label="Net Salary"
//                 value={formatCurrency(
//                   showDetails.netSalary
//                 )}
//               />

//               <DetailItem
//                 label="Department"
//                 value={showDetails.department}
//               />

//               <DetailItem
//                 label="Payment Date"
//                 value={
//                   showDetails.paymentDate || "Not paid yet"
//                 }
//               />
//             </div>
//           </div>

//           <div className="mt-6 flex flex-wrap justify-end gap-2 border-t border-[#e4e2da] pt-4">
//             {showDetails.status !== "Processing" &&
//               showDetails.status !== "Paid" && (
//                 <button
//                   onClick={() =>
//                     markAsProcessing(showDetails.id)
//                   }
//                   className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
//                 >
//                   Mark Processing
//                 </button>
//               )}

//             {showDetails.status !== "Paid" && (
//               <button
//                 onClick={() => markAsPaid(showDetails.id)}
//                 className="rounded-lg bg-[#176b5b] px-4 py-2 text-sm font-semibold text-white"
//               >
//                 Mark as Paid
//               </button>
//             )}

//             <button
//               onClick={() => setShowDetails(null)}
//               className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium"
//             >
//               Close
//             </button>
//           </div>
//         </Modal>
//       )}

//       {/* Process Payroll Modal */}
//       {showProcessModal && (
//         <Modal
//           title="Process Payroll"
//           onClose={() => setShowProcessModal(false)}
//         >
//           <div className="rounded-lg bg-[#f7f7f4] p-4">
//             <p className="text-sm text-gray-600">
//               You are about to process all unpaid payroll records
//               for:
//             </p>

//             <p className="mt-2 text-xl font-bold">
//               {selectedMonth}
//             </p>

//             <div className="mt-4 grid grid-cols-2 gap-3">
//               <div className="rounded-lg bg-white p-3">
//                 <p className="text-xs text-gray-500">
//                   Pending Employees
//                 </p>
//                 <p className="mt-1 text-lg font-bold">
//                   {
//                     filteredPayroll.filter(
//                       (record) => record.status !== "Paid"
//                     ).length
//                   }
//                 </p>
//               </div>

//               <div className="rounded-lg bg-white p-3">
//                 <p className="text-xs text-gray-500">
//                   Pending Amount
//                 </p>
//                 <p className="mt-1 text-lg font-bold text-[#176b5b]">
//                   {formatCurrency(
//                     filteredPayroll
//                       .filter(
//                         (record) => record.status !== "Paid"
//                       )
//                       .reduce(
//                         (sum, record) =>
//                           sum + record.netSalary,
//                         0
//                       )
//                   )}
//                 </p>
//               </div>
//             </div>
//           </div>

//           <p className="mt-4 text-sm leading-6 text-gray-500">
//             After processing, the selected payroll records will be
//             marked as paid and the current date will be added as the
//             payment date.
//           </p>

//           <div className="mt-6 flex justify-end gap-2 border-t border-[#e4e2da] pt-4">
//             <button
//               onClick={() => setShowProcessModal(false)}
//               className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium"
//             >
//               Cancel
//             </button>

//             <button
//               onClick={processAllPending}
//               className="rounded-lg bg-[#176b5b] px-5 py-2 text-sm font-semibold text-white"
//             >
//               Process Payroll
//             </button>
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
//           select {
//             display: none !important;
//           }

//           .shadow-sm {
//             box-shadow: none !important;
//           }

//           @page {
//             size: A4 landscape;
//             margin: 12mm;
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
//   iconClass = "bg-[#f1f1ec] text-[#176b5b]",
// }: {
//   title: string;
//   value: string | number;
//   subtitle: string;
//   icon: string;
//   iconClass?: string;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//       <div className="flex items-start justify-between">
//         <div>
//           <p className="text-sm text-gray-500">{title}</p>

//           <p className="mt-2 text-2xl font-bold">
//             {value}
//           </p>

//           <p className="mt-1 text-xs text-gray-500">
//             {subtitle}
//           </p>
//         </div>

//         <div
//           className={`flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold ${iconClass}`}
//         >
//           {icon}
//         </div>
//       </div>
//     </div>
//   );
// }

// function BreakdownItem({
//   label,
//   value,
// }: {
//   label: string;
//   value: string;
// }) {
//   return (
//     <div className="rounded-lg bg-[#fafaf8] p-4">
//       <p className="text-sm text-gray-500">{label}</p>
//       <p className="mt-2 text-lg font-bold">{value}</p>
//     </div>
//   );
// }

// function PayrollStatusBar({
//   label,
//   value,
//   total,
//   className,
// }: {
//   label: string;
//   value: number;
//   total: number;
//   className: string;
// }) {
//   const percentage = total
//     ? Math.round((value / total) * 100)
//     : 0;

//   return (
//     <div>
//       <div className="mb-1.5 flex justify-between text-sm">
//         <span className="font-medium text-gray-700">
//           {label}
//         </span>

//         <span className="text-gray-500">
//           {formatCurrency(value)} · {percentage}%
//         </span>
//       </div>

//       <div className="h-2 overflow-hidden rounded-full bg-gray-100">
//         <div
//           className={`h-full rounded-full ${className}`}
//           style={{ width: `${percentage}%` }}
//         />
//       </div>
//     </div>
//   );
// }

// function InfoRow({
//   label,
//   value,
// }: {
//   label: string;
//   value: string;
// }) {
//   return (
//     <div className="flex items-center justify-between border-b border-[#eeeeea] pb-3">
//       <span className="text-sm text-gray-500">{label}</span>
//       <span className="text-sm font-semibold text-gray-800">
//         {value}
//       </span>
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
//     <div className="rounded-lg bg-[#fafaf8] p-3">
//       <p className="text-xs text-gray-500">{label}</p>
//       <p className="mt-1 text-sm font-semibold text-gray-800">
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
//       <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//         <div className="sticky top-0 flex items-center justify-between border-b border-[#e4e2da] bg-white px-5 py-4">
//           <h2 className="text-lg font-bold">{title}</h2>

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

"use client";

import { useEffect, useMemo, useState } from "react";
import {
  getPayrollByMonth,
  upsertPayroll,
  updatePayrollStatus,
  type InteriorPayroll,
} from "@/modules/interior/services/payrollService";

type PayrollStatus = "Pending" | "Processed" | "Paid";

type Row = {
  id: string;
  month: string;
  employeeDocId?: string;
  employeeId: string;
  employeeName: string;
  department: string;
  designation: string;
  basicSalary: number;
  allowances: number;
  overtime: number;
  deductions: number;
  netSalary: number;
  status: PayrollStatus;
  paymentDate: string;
};

function formatCurrency(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function statusClass(status: PayrollStatus) {
  if (status === "Paid") return "bg-green-50 text-green-700 border-green-200";
  if (status === "Processed")
    return "bg-blue-50 text-blue-700 border-blue-200";
  return "bg-amber-50 text-amber-700 border-amber-200";
}

function normalizeStatus(raw?: string): PayrollStatus {
  const s = (raw || "Pending").toLowerCase();
  if (s.includes("paid")) return "Paid";
  if (s.includes("process")) return "Processed";
  return "Pending";
}

function currentMonthKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

function mapToUi(p: InteriorPayroll, month: string): Row {
  const basic = Number(p.basicSalary ?? 0) || 0;
  const allowances = Number(p.allowances ?? 0) || 0;
  const overtime = Number(p.overtime ?? 0) || 0;
  const deductions = Number(p.deductions ?? 0) || 0;
  const net =
    Number(p.netSalary ?? 0) || basic + allowances + overtime - deductions;

  return {
    id: p.id,
    month: p.month || month,
    employeeDocId: p.employeeDocId,
    employeeId: p.employeeId || "—",
    employeeName: p.employeeName || "Unknown",
    department: p.department || "Other",
    designation: p.designation || "—",
    basicSalary: basic,
    allowances,
    overtime,
    deductions,
    netSalary: net,
    status: normalizeStatus(p.status),
    paymentDate: p.paymentDate || "",
  };
}

export default function PayrollPage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [month, setMonth] = useState(currentMonthKey());
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | PayrollStatus>(
    "All"
  );
  const [selected, setSelected] = useState<Row | null>(null);

  async function load(m: string) {
    setLoading(true);
    try {
      const data = await getPayrollByMonth(m);
      setRows(data.map((d) => mapToUi(d, m)));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load(month);
  }, [month]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return rows.filter((r) => {
      const matchesSearch =
        !q ||
        r.employeeName.toLowerCase().includes(q) ||
        r.employeeId.toLowerCase().includes(q) ||
        r.department.toLowerCase().includes(q);
      const matchesStatus =
        statusFilter === "All" || r.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [rows, search, statusFilter]);

  const totalNet = rows.reduce((s, r) => s + r.netSalary, 0);
  const paidCount = rows.filter((r) => r.status === "Paid").length;
  const pendingCount = rows.filter((r) => r.status === "Pending").length;

  async function saveRow(row: Row) {
    const net =
      row.basicSalary + row.allowances + row.overtime - row.deductions;
    const next = { ...row, netSalary: net };
    setRows((list) => list.map((r) => (r.id === row.id ? next : r)));
    setSelected((s) => (s && s.id === row.id ? next : s));

    try {
      await upsertPayroll({
        id: next.id,
        month: next.month,
        employeeDocId: next.employeeDocId,
        employeeId: next.employeeId,
        employeeName: next.employeeName,
        department: next.department,
        designation: next.designation,
        basicSalary: next.basicSalary,
        allowances: next.allowances,
        overtime: next.overtime,
        deductions: next.deductions,
        netSalary: next.netSalary,
        status: next.status,
        paymentDate: next.paymentDate,
      });
    } catch (err) {
      console.error(err);
      await load(month);
    }
  }

  async function markPaid(row: Row) {
    const paymentDate = new Date().toISOString().slice(0, 10);
    const next = { ...row, status: "Paid" as const, paymentDate };
    setRows((list) => list.map((r) => (r.id === row.id ? next : r)));
    setSelected((s) => (s && s.id === row.id ? next : s));

    try {
      await upsertPayroll({
        id: next.id,
        month: next.month,
        employeeDocId: next.employeeDocId,
        employeeId: next.employeeId,
        employeeName: next.employeeName,
        department: next.department,
        designation: next.designation,
        basicSalary: next.basicSalary,
        allowances: next.allowances,
        overtime: next.overtime,
        deductions: next.deductions,
        netSalary: next.netSalary,
        status: "Paid",
        paymentDate,
      });
    } catch (err) {
      console.error(err);
      try {
        await updatePayrollStatus(row.id, "Paid", paymentDate);
      } catch (e) {
        console.error(e);
        await load(month);
      }
    }
  }

  async function markProcessed(row: Row) {
    const next = { ...row, status: "Processed" as const };
    setRows((list) => list.map((r) => (r.id === row.id ? next : r)));
    try {
      await upsertPayroll({
        ...next,
        employeeDocId: next.employeeDocId,
      });
    } catch (err) {
      console.error(err);
      await load(month);
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
      <div className="border-b border-[#e4e2da] bg-white">
        <div className="mx-auto max-w-[1600px] px-5 py-5 lg:px-8">
          <a
            href="/interior/hrms"
            className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-[#176b5b] hover:underline"
          >
            ← Back to HRMS
          </a>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              {/* <div className="mb-1 text-sm font-medium text-[#9a5b18]">
                Akrish / HRMS
              </div> */}
              <h1 className="text-2xl font-bold tracking-tight">Payroll</h1>
              <p className="mt-1 text-sm text-gray-500">
                Monthly salary processing for interior staff.
                {loading && (
                  <span className="ml-2 text-[#176b5b]">Loading…</span>
                )}
              </p>
            </div>
            <input
              type="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
            />
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[1600px] space-y-6 px-5 py-6 lg:px-8">
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Stat
            label="Payroll Total"
            value={loading ? "…" : formatCurrency(totalNet)}
          />
          <Stat label="Paid" value={loading ? "…" : String(paidCount)} />
          <Stat
            label="Pending"
            value={loading ? "…" : String(pendingCount)}
          />
        </section>

        <section className="rounded-xl border border-[#e4e2da] bg-white p-4">
          <div className="flex flex-col gap-3 lg:flex-row">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search employee, ID, department..."
              className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-4 py-2.5 text-sm outline-none focus:border-[#176b5b] lg:max-w-md"
            />
            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value as "All" | PayrollStatus)
              }
              className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
            >
              <option value="All">All Status</option>
              <option value="Pending">Pending</option>
              <option value="Processed">Processed</option>
              <option value="Paid">Paid</option>
            </select>
          </div>
        </section>

        <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px] text-left">
              <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
                <tr>
                  <th className="px-5 py-3 font-semibold">Employee</th>
                  <th className="px-4 py-3 font-semibold">Basic</th>
                  <th className="px-4 py-3 font-semibold">Allowances</th>
                  <th className="px-4 py-3 font-semibold">Overtime</th>
                  <th className="px-4 py-3 font-semibold">Deductions</th>
                  <th className="px-4 py-3 font-semibold">Net</th>
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
                      Loading payroll…
                    </td>
                  </tr>
                ) : (
                  <>
                    {filtered.map((row) => (
                      <tr key={row.id} className="hover:bg-[#fafaf8]">
                        <td className="px-5 py-4">
                          <p className="font-semibold text-gray-900">
                            {row.employeeName}
                          </p>
                          <p className="text-xs text-[#176b5b]">
                            {row.employeeId}
                          </p>
                          <p className="text-xs text-gray-400">
                            {row.department}
                          </p>
                        </td>
                        <td className="px-4 py-4 text-sm">
                          {formatCurrency(row.basicSalary)}
                        </td>
                        <td className="px-4 py-4 text-sm">
                          {formatCurrency(row.allowances)}
                        </td>
                        <td className="px-4 py-4 text-sm">
                          {formatCurrency(row.overtime)}
                        </td>
                        <td className="px-4 py-4 text-sm text-red-600">
                          {formatCurrency(row.deductions)}
                        </td>
                        <td className="px-4 py-4 text-sm font-semibold">
                          {formatCurrency(row.netSalary)}
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
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() => setSelected(row)}
                              className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600"
                            >
                              Edit
                            </button>
                            {row.status !== "Paid" && (
                              <button
                                onClick={() => markPaid(row)}
                                className="rounded-md bg-[#176b5b] px-3 py-1.5 text-xs font-semibold text-white"
                              >
                                Mark Paid
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                    {filtered.length === 0 && (
                      <tr>
                        <td
                          colSpan={8}
                          className="px-5 py-12 text-center text-sm text-gray-500"
                        >
                          No payroll rows. Add employees first.
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

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl">
            <div className="border-b border-[#e4e2da] px-6 py-4">
              <p className="text-xs font-semibold text-[#176b5b]">
                {selected.employeeId}
              </p>
              <h2 className="mt-1 text-lg font-bold">
                {selected.employeeName}
              </h2>
            </div>
            <div className="grid gap-3 p-6 sm:grid-cols-2">
              <Field
                label="Basic"
                type="number"
                value={String(selected.basicSalary)}
                onChange={(v) =>
                  setSelected({ ...selected, basicSalary: Number(v) || 0 })
                }
              />
              <Field
                label="Allowances"
                type="number"
                value={String(selected.allowances)}
                onChange={(v) =>
                  setSelected({ ...selected, allowances: Number(v) || 0 })
                }
              />
              <Field
                label="Overtime"
                type="number"
                value={String(selected.overtime)}
                onChange={(v) =>
                  setSelected({ ...selected, overtime: Number(v) || 0 })
                }
              />
              <Field
                label="Deductions"
                type="number"
                value={String(selected.deductions)}
                onChange={(v) =>
                  setSelected({ ...selected, deductions: Number(v) || 0 })
                }
              />
            </div>
            <div className="flex flex-wrap gap-2 border-t border-[#e4e2da] px-6 py-4">
              <button
                onClick={() => saveRow(selected)}
                className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white"
              >
                Save
              </button>
              <button
                onClick={() => markProcessed(selected)}
                className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium"
              >
                Mark Processed
              </button>
              <button
                onClick={() => markPaid(selected)}
                className="rounded-lg border border-[#176b5b] px-4 py-2.5 text-sm font-semibold text-[#176b5b]"
              >
                Mark Paid
              </button>
              <button
                onClick={() => setSelected(null)}
                className="ml-auto rounded-lg border border-gray-200 px-4 py-2.5 text-sm"
              >
                Close
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
    <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
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