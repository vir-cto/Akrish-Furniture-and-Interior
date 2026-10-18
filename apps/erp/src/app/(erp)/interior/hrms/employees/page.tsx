// "use client";

// import { useMemo, useState } from "react";

// type EmployeeStatus = "Active" | "Inactive" | "On Leave";

// type Employee = {
//   id: string;
//   employeeId: string;
//   name: string;
//   email: string;
//   phone: string;
//   department: string;
//   designation: string;
//   joiningDate: string;
//   status: EmployeeStatus;
//   salary: number;
//   manager: string;
//   location: string;
//   experience: string;
// };

// const initialEmployees: Employee[] = [
//   {
//     id: "1",
//     employeeId: "AKR001",
//     name: "Ravi Kumar",
//     email: "ravi.kumar@akrish.com",
//     phone: "9876543210",
//     department: "Interior Design",
//     designation: "Senior Interior Designer",
//     joiningDate: "2024-06-10",
//     status: "Active",
//     salary: 65000,
//     manager: "Project Head",
//     location: "Guntur",
//     experience: "6 Years",
//   },
//   {
//     id: "2",
//     employeeId: "AKR002",
//     name: "Priya Sharma",
//     email: "priya.sharma@akrish.com",
//     phone: "9876543211",
//     department: "Interior Design",
//     designation: "Interior Designer",
//     joiningDate: "2025-01-15",
//     status: "Active",
//     salary: 48000,
//     manager: "Ravi Kumar",
//     location: "Guntur",
//     experience: "3 Years",
//   },
//   {
//     id: "3",
//     employeeId: "AKR003",
//     name: "Arjun Reddy",
//     email: "arjun.reddy@akrish.com",
//     phone: "9876543212",
//     department: "Project Management",
//     designation: "Project Manager",
//     joiningDate: "2023-08-20",
//     status: "Active",
//     salary: 72000,
//     manager: "Operations Head",
//     location: "Vijayawada",
//     experience: "8 Years",
//   },
//   {
//     id: "4",
//     employeeId: "AKR004",
//     name: "Sneha Rao",
//     email: "sneha.rao@akrish.com",
//     phone: "9876543213",
//     department: "HR",
//     designation: "HR Executive",
//     joiningDate: "2024-02-05",
//     status: "Active",
//     salary: 42000,
//     manager: "HR Manager",
//     location: "Guntur",
//     experience: "4 Years",
//   },
//   {
//     id: "5",
//     employeeId: "AKR005",
//     name: "Vamsi Krishna",
//     email: "vamsi.krishna@akrish.com",
//     phone: "9876543214",
//     department: "Site Operations",
//     designation: "Site Supervisor",
//     joiningDate: "2024-09-12",
//     status: "Active",
//     salary: 45000,
//     manager: "Arjun Reddy",
//     location: "Tenali",
//     experience: "5 Years",
//   },
//   {
//     id: "6",
//     employeeId: "AKR006",
//     name: "Meghana Devi",
//     email: "meghana.devi@akrish.com",
//     phone: "9876543215",
//     department: "Accounts",
//     designation: "Accountant",
//     joiningDate: "2023-11-18",
//     status: "On Leave",
//     salary: 40000,
//     manager: "Finance Manager",
//     location: "Guntur",
//     experience: "5 Years",
//   },
//   {
//     id: "7",
//     employeeId: "AKR007",
//     name: "Kiran Kumar",
//     email: "kiran.kumar@akrish.com",
//     phone: "9876543216",
//     department: "Sales",
//     designation: "Sales Executive",
//     joiningDate: "2025-04-01",
//     status: "Active",
//     salary: 38000,
//     manager: "Sales Manager",
//     location: "Vijayawada",
//     experience: "2 Years",
//   },
//   {
//     id: "8",
//     employeeId: "AKR008",
//     name: "Anjali Rao",
//     email: "anjali.rao@akrish.com",
//     phone: "9876543217",
//     department: "Interior Design",
//     designation: "Junior Designer",
//     joiningDate: "2025-06-16",
//     status: "Active",
//     salary: 32000,
//     manager: "Ravi Kumar",
//     location: "Guntur",
//     experience: "1 Year",
//   },
//   {
//     id: "9",
//     employeeId: "AKR009",
//     name: "Suresh Babu",
//     email: "suresh.babu@akrish.com",
//     phone: "9876543218",
//     department: "Procurement",
//     designation: "Purchase Executive",
//     joiningDate: "2024-04-22",
//     status: "Active",
//     salary: 44000,
//     manager: "Procurement Manager",
//     location: "Guntur",
//     experience: "4 Years",
//   },
//   {
//     id: "10",
//     employeeId: "AKR010",
//     name: "Divya Sri",
//     email: "divya.sri@akrish.com",
//     phone: "9876543219",
//     department: "Administration",
//     designation: "Admin Executive",
//     joiningDate: "2025-02-10",
//     status: "Inactive",
//     salary: 36000,
//     manager: "Admin Manager",
//     location: "Guntur",
//     experience: "2 Years",
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

// const statuses = ["All Status", "Active", "Inactive", "On Leave"];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function formatDate(date: string) {
//   return new Date(date).toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });
// }

// function statusClass(status: EmployeeStatus) {
//   if (status === "Active") {
//     return "bg-green-50 text-green-700 border-green-200";
//   }

//   if (status === "On Leave") {
//     return "bg-yellow-50 text-yellow-700 border-yellow-200";
//   }

//   return "bg-gray-100 text-gray-600 border-gray-200";
// }

// export default function EmployeesPage() {
//   const [employees, setEmployees] = useState<Employee[]>(initialEmployees);

//   const [search, setSearch] = useState("");
//   const [department, setDepartment] = useState("All Departments");
//   const [status, setStatus] = useState("All Status");

//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showDetails, setShowDetails] = useState<Employee | null>(null);
//   const [showEdit, setShowEdit] = useState<Employee | null>(null);
//   const [showDelete, setShowDelete] = useState<Employee | null>(null);

//   const [newEmployee, setNewEmployee] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     department: "Interior Design",
//     designation: "",
//     joiningDate: "",
//     salary: "",
//     manager: "",
//     location: "Guntur",
//     experience: "",
//   });

//   const filteredEmployees = useMemo(() => {
//     return employees.filter((employee) => {
//       const text = search.toLowerCase();

//       const matchesSearch =
//         employee.name.toLowerCase().includes(text) ||
//         employee.employeeId.toLowerCase().includes(text) ||
//         employee.email.toLowerCase().includes(text) ||
//         employee.designation.toLowerCase().includes(text);

//       const matchesDepartment =
//         department === "All Departments" ||
//         employee.department === department;

//       const matchesStatus =
//         status === "All Status" || employee.status === status;

//       return matchesSearch && matchesDepartment && matchesStatus;
//     });
//   }, [employees, search, department, status]);

//   const activeCount = employees.filter(
//     (employee) => employee.status === "Active"
//   ).length;

//   const inactiveCount = employees.filter(
//     (employee) => employee.status === "Inactive"
//   ).length;

//   const leaveCount = employees.filter(
//     (employee) => employee.status === "On Leave"
//   ).length;

//   const departmentsCount = new Set(
//     employees.map((employee) => employee.department)
//   ).size;

//   const totalPayroll = employees.reduce(
//     (sum, employee) => sum + employee.salary,
//     0
//   );

//   function addEmployee() {
//     if (
//       !newEmployee.name ||
//       !newEmployee.email ||
//       !newEmployee.phone ||
//       !newEmployee.designation
//     ) {
//       alert("Please fill all required fields.");
//       return;
//     }

//     const nextNumber = employees.length + 1;

//     const employee: Employee = {
//       id: Date.now().toString(),
//       employeeId: `AKR${String(nextNumber).padStart(3, "0")}`,
//       name: newEmployee.name,
//       email: newEmployee.email,
//       phone: newEmployee.phone,
//       department: newEmployee.department,
//       designation: newEmployee.designation,
//       joiningDate:
//         newEmployee.joiningDate ||
//         new Date().toISOString().split("T")[0],
//       status: "Active",
//       salary: Number(newEmployee.salary) || 0,
//       manager: newEmployee.manager || "Management",
//       location: newEmployee.location,
//       experience: newEmployee.experience || "Fresher",
//     };

//     setEmployees((current) => [employee, ...current]);

//     setNewEmployee({
//       name: "",
//       email: "",
//       phone: "",
//       department: "Interior Design",
//       designation: "",
//       joiningDate: "",
//       salary: "",
//       manager: "",
//       location: "Guntur",
//       experience: "",
//     });

//     setShowAddModal(false);
//   }

//   function updateEmployee(updated: Employee) {
//     setEmployees((current) =>
//       current.map((employee) =>
//         employee.id === updated.id ? updated : employee
//       )
//     );

//     setShowEdit(null);
//   }

//   function deleteEmployee() {
//     if (!showDelete) return;

//     setEmployees((current) =>
//       current.filter((employee) => employee.id !== showDelete.id)
//     );

//     setShowDelete(null);
//   }

//   function changeStatus(employeeId: string, newStatus: EmployeeStatus) {
//     setEmployees((current) =>
//       current.map((employee) =>
//         employee.id === employeeId
//           ? { ...employee, status: newStatus }
//           : employee
//       )
//     );
//   }

//   function exportEmployees() {
//     const headers = [
//       "Employee ID",
//       "Name",
//       "Email",
//       "Phone",
//       "Department",
//       "Designation",
//       "Joining Date",
//       "Status",
//       "Salary",
//       "Manager",
//       "Location",
//       "Experience",
//     ];

//     const rows = filteredEmployees.map((employee) => [
//       employee.employeeId,
//       employee.name,
//       employee.email,
//       employee.phone,
//       employee.department,
//       employee.designation,
//       employee.joiningDate,
//       employee.status,
//       employee.salary,
//       employee.manager,
//       employee.location,
//       employee.experience,
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
//     link.download = "akrish-employees.csv";
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
//                 Employees
//               </h1>

//               <p className="mt-1 text-sm text-gray-500">
//                 Manage employee records, departments, roles and HR information.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               <button
//                 onClick={exportEmployees}
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
//                 onClick={() => setShowAddModal(true)}
//                 className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#12594b]"
//               >
//                 + Add Employee
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1500px] space-y-5 px-5 py-6">
//         {/* Summary Cards */}
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//           <SummaryCard
//             title="Total Employees"
//             value={employees.length}
//             subtitle="All employee records"
//             icon="👥"
//           />

//           <SummaryCard
//             title="Active Employees"
//             value={activeCount}
//             subtitle={`${employees.length ? Math.round(
//               (activeCount / employees.length) * 100
//             ) : 0}% of workforce`}
//             icon="✓"
//             iconClass="bg-green-50 text-green-700"
//           />

//           <SummaryCard
//             title="On Leave"
//             value={leaveCount}
//             subtitle="Currently on leave"
//             icon="◷"
//             iconClass="bg-yellow-50 text-yellow-700"
//           />

//           <SummaryCard
//             title="Departments"
//             value={departmentsCount}
//             subtitle={`Payroll ${formatCurrency(totalPayroll)}`}
//             icon="▦"
//             iconClass="bg-blue-50 text-blue-700"
//           />
//         </div>

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
//                 placeholder="Search by name, employee ID, email or designation..."
//                 className="w-full rounded-lg border border-[#dddcd5] bg-[#fafaf8] py-2.5 pl-10 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//               />
//             </div>

//             <select
//               value={department}
//               onChange={(event) => setDepartment(event.target.value)}
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

//         {/* Employee Table */}
//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="flex flex-col gap-2 border-b border-[#e4e2da] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
//             <div>
//               <h2 className="font-semibold">Employee Directory</h2>
//               <p className="text-sm text-gray-500">
//                 Showing {filteredEmployees.length} of {employees.length} employees
//               </p>
//             </div>

//             <div className="text-sm text-gray-500">
//               Active:{" "}
//               <span className="font-semibold text-green-700">
//                 {activeCount}
//               </span>{" "}
//               · Inactive:{" "}
//               <span className="font-semibold">{inactiveCount}</span>
//             </div>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="min-w-[1100px] w-full">
//               <thead className="bg-[#fafaf8]">
//                 <tr className="border-b border-[#e4e2da] text-left text-xs uppercase tracking-wide text-gray-500">
//                   <th className="px-5 py-3 font-semibold">Employee</th>
//                   <th className="px-4 py-3 font-semibold">Department</th>
//                   <th className="px-4 py-3 font-semibold">Designation</th>
//                   <th className="px-4 py-3 font-semibold">Joining Date</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
//                   <th className="px-4 py-3 font-semibold">Salary</th>
//                   <th className="px-4 py-3 text-right font-semibold">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {filteredEmployees.length === 0 ? (
//                   <tr>
//                     <td
//                       colSpan={7}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       No employees found.
//                     </td>
//                   </tr>
//                 ) : (
//                   filteredEmployees.map((employee) => (
//                     <tr
//                       key={employee.id}
//                       className="border-b border-[#eeeeea] last:border-b-0 hover:bg-[#fcfcfa]"
//                     >
//                       <td className="px-5 py-4">
//                         <div className="flex items-center gap-3">
//                           <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e7f1ee] text-sm font-bold text-[#176b5b]">
//                             {employee.name
//                               .split(" ")
//                               .map((name) => name[0])
//                               .slice(0, 2)
//                               .join("")}
//                           </div>

//                           <div>
//                             <button
//                               onClick={() => setShowDetails(employee)}
//                               className="font-semibold text-gray-900 hover:text-[#176b5b]"
//                             >
//                               {employee.name}
//                             </button>

//                             <p className="text-xs text-gray-500">
//                               {employee.employeeId} · {employee.email}
//                             </p>
//                           </div>
//                         </div>
//                       </td>

//                       <td className="px-4 py-4">
//                         <p className="text-sm font-medium">
//                           {employee.department}
//                         </p>
//                         <p className="text-xs text-gray-500">
//                           {employee.location}
//                         </p>
//                       </td>

//                       <td className="px-4 py-4 text-sm text-gray-700">
//                         {employee.designation}
//                       </td>

//                       <td className="px-4 py-4 text-sm text-gray-600">
//                         {formatDate(employee.joiningDate)}
//                       </td>

//                       <td className="px-4 py-4">
//                         <span
//                           className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                             employee.status
//                           )}`}
//                         >
//                           {employee.status}
//                         </span>
//                       </td>

//                       <td className="px-4 py-4 text-sm font-semibold">
//                         {formatCurrency(employee.salary)}
//                       </td>

//                       <td className="px-4 py-4">
//                         <div className="flex justify-end gap-1">
//                           <button
//                             onClick={() => setShowDetails(employee)}
//                             title="View"
//                             className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
//                           >
//                             👁
//                           </button>

//                           <button
//                             onClick={() => setShowEdit(employee)}
//                             title="Edit"
//                             className="rounded-md p-2 text-gray-500 hover:bg-blue-50 hover:text-blue-700"
//                           >
//                             ✎
//                           </button>

//                           <button
//                             onClick={() => setShowDelete(employee)}
//                             title="Delete"
//                             className="rounded-md p-2 text-gray-500 hover:bg-red-50 hover:text-red-700"
//                           >
//                             🗑
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </section>

//         {/* Bottom Sections */}
//         <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
//           <section className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <h2 className="font-semibold">Department Overview</h2>
//             <p className="mt-1 text-sm text-gray-500">
//               Employee distribution by department
//             </p>

//             <div className="mt-5 space-y-4">
//               {departments
//                 .filter((item) => item !== "All Departments")
//                 .map((item) => {
//                   const count = employees.filter(
//                     (employee) => employee.department === item
//                   ).length;

//                   if (!count) return null;

//                   const percentage = Math.round(
//                     (count / employees.length) * 100
//                   );

//                   return (
//                     <div key={item}>
//                       <div className="mb-1.5 flex justify-between text-sm">
//                         <span className="font-medium text-gray-700">
//                           {item}
//                         </span>
//                         <span className="text-gray-500">
//                           {count} employee{count !== 1 ? "s" : ""}
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
//             </div>
//           </section>

//           <section className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <h2 className="font-semibold">Employee Status</h2>
//             <p className="mt-1 text-sm text-gray-500">
//               Current workforce status
//             </p>

//             <div className="mt-5 space-y-4">
//               <StatusBar
//                 label="Active"
//                 value={activeCount}
//                 total={employees.length}
//                 className="bg-green-500"
//               />

//               <StatusBar
//                 label="On Leave"
//                 value={leaveCount}
//                 total={employees.length}
//                 className="bg-yellow-500"
//               />

//               <StatusBar
//                 label="Inactive"
//                 value={inactiveCount}
//                 total={employees.length}
//                 className="bg-gray-400"
//               />
//             </div>

//             <div className="mt-6 rounded-lg bg-[#f7f7f4] p-4">
//               <div className="flex items-center justify-between">
//                 <span className="text-sm text-gray-600">
//                   Monthly Payroll
//                 </span>
//                 <span className="text-lg font-bold text-[#176b5b]">
//                   {formatCurrency(totalPayroll)}
//                 </span>
//               </div>
//             </div>
//           </section>
//         </div>
//       </main>

//       {/* Add Employee Modal */}
//       {showAddModal && (
//         <Modal
//           title="Add New Employee"
//           onClose={() => setShowAddModal(false)}
//         >
//           <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//             <Input
//               label="Full Name *"
//               value={newEmployee.name}
//               onChange={(value) =>
//                 setNewEmployee({ ...newEmployee, name: value })
//               }
//               placeholder="Enter employee name"
//             />

//             <Input
//               label="Email *"
//               type="email"
//               value={newEmployee.email}
//               onChange={(value) =>
//                 setNewEmployee({ ...newEmployee, email: value })
//               }
//               placeholder="employee@example.com"
//             />

//             <Input
//               label="Phone *"
//               value={newEmployee.phone}
//               onChange={(value) =>
//                 setNewEmployee({ ...newEmployee, phone: value })
//               }
//               placeholder="9876543210"
//             />

//             <Input
//               label="Designation *"
//               value={newEmployee.designation}
//               onChange={(value) =>
//                 setNewEmployee({ ...newEmployee, designation: value })
//               }
//               placeholder="Interior Designer"
//             />

//             <SelectInput
//               label="Department"
//               value={newEmployee.department}
//               onChange={(value) =>
//                 setNewEmployee({ ...newEmployee, department: value })
//               }
//               options={departments.filter(
//                 (item) => item !== "All Departments"
//               )}
//             />

//             <Input
//               label="Joining Date"
//               type="date"
//               value={newEmployee.joiningDate}
//               onChange={(value) =>
//                 setNewEmployee({ ...newEmployee, joiningDate: value })
//               }
//             />

//             <Input
//               label="Monthly Salary"
//               type="number"
//               value={newEmployee.salary}
//               onChange={(value) =>
//                 setNewEmployee({ ...newEmployee, salary: value })
//               }
//               placeholder="45000"
//             />

//             <Input
//               label="Experience"
//               value={newEmployee.experience}
//               onChange={(value) =>
//                 setNewEmployee({ ...newEmployee, experience: value })
//               }
//               placeholder="3 Years"
//             />

//             <Input
//               label="Manager"
//               value={newEmployee.manager}
//               onChange={(value) =>
//                 setNewEmployee({ ...newEmployee, manager: value })
//               }
//               placeholder="Reporting manager"
//             />

//             <Input
//               label="Location"
//               value={newEmployee.location}
//               onChange={(value) =>
//                 setNewEmployee({ ...newEmployee, location: value })
//               }
//               placeholder="Guntur"
//             />
//           </div>

//           <div className="mt-6 flex justify-end gap-2 border-t border-[#e4e2da] pt-4">
//             <button
//               onClick={() => setShowAddModal(false)}
//               className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium"
//             >
//               Cancel
//             </button>

//             <button
//               onClick={addEmployee}
//               className="rounded-lg bg-[#176b5b] px-5 py-2 text-sm font-semibold text-white"
//             >
//               Add Employee
//             </button>
//           </div>
//         </Modal>
//       )}

//       {/* Details Modal */}
//       {showDetails && (
//         <Modal
//           title="Employee Details"
//           onClose={() => setShowDetails(null)}
//         >
//           <div className="flex items-center gap-4 border-b border-[#e4e2da] pb-5">
//             <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e7f1ee] text-lg font-bold text-[#176b5b]">
//               {showDetails.name
//                 .split(" ")
//                 .map((name) => name[0])
//                 .slice(0, 2)
//                 .join("")}
//             </div>

//             <div>
//               <h3 className="text-xl font-bold">{showDetails.name}</h3>
//               <p className="text-sm text-gray-500">
//                 {showDetails.employeeId} · {showDetails.designation}
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

//           <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
//             <DetailItem label="Email" value={showDetails.email} />
//             <DetailItem label="Phone" value={showDetails.phone} />
//             <DetailItem
//               label="Department"
//               value={showDetails.department}
//             />
//             <DetailItem
//               label="Designation"
//               value={showDetails.designation}
//             />
//             <DetailItem
//               label="Joining Date"
//               value={formatDate(showDetails.joiningDate)}
//             />
//             <DetailItem
//               label="Experience"
//               value={showDetails.experience}
//             />
//             <DetailItem
//               label="Monthly Salary"
//               value={formatCurrency(showDetails.salary)}
//             />
//             <DetailItem label="Manager" value={showDetails.manager} />
//             <DetailItem label="Location" value={showDetails.location} />
//           </div>

//           <div className="mt-6 flex flex-wrap gap-2 border-t border-[#e4e2da] pt-4">
//             {showDetails.status !== "Active" && (
//               <button
//                 onClick={() => {
//                   changeStatus(showDetails.id, "Active");
//                   setShowDetails({
//                     ...showDetails,
//                     status: "Active",
//                   });
//                 }}
//                 className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white"
//               >
//                 Mark Active
//               </button>
//             )}

//             {showDetails.status !== "On Leave" && (
//               <button
//                 onClick={() => {
//                   changeStatus(showDetails.id, "On Leave");
//                   setShowDetails({
//                     ...showDetails,
//                     status: "On Leave",
//                   });
//                 }}
//                 className="rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold text-white"
//               >
//                 Mark On Leave
//               </button>
//             )}

//             {showDetails.status !== "Inactive" && (
//               <button
//                 onClick={() => {
//                   changeStatus(showDetails.id, "Inactive");
//                   setShowDetails({
//                     ...showDetails,
//                     status: "Inactive",
//                   });
//                 }}
//                 className="rounded-lg bg-gray-700 px-4 py-2 text-sm font-semibold text-white"
//               >
//                 Mark Inactive
//               </button>
//             )}

//             <button
//               onClick={() => {
//                 setShowDetails(null);
//                 setShowEdit(showDetails);
//               }}
//               className="ml-auto rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium"
//             >
//               Edit Employee
//             </button>
//           </div>
//         </Modal>
//       )}

//       {/* Edit Modal */}
//       {showEdit && (
//         <EditEmployeeModal
//           employee={showEdit}
//           onClose={() => setShowEdit(null)}
//           onSave={updateEmployee}
//         />
//       )}

//       {/* Delete Modal */}
//       {showDelete && (
//         <Modal
//           title="Delete Employee"
//           onClose={() => setShowDelete(null)}
//         >
//           <div className="py-3">
//             <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-xl">
//               🗑
//             </div>

//             <h3 className="text-lg font-semibold">
//               Delete {showDelete.name}?
//             </h3>

//             <p className="mt-2 text-sm leading-6 text-gray-500">
//               This will remove the employee record from the current local
//               employee list. This action cannot be undone.
//             </p>
//           </div>

//           <div className="flex justify-end gap-2 border-t border-[#e4e2da] pt-4">
//             <button
//               onClick={() => setShowDelete(null)}
//               className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium"
//             >
//               Cancel
//             </button>

//             <button
//               onClick={deleteEmployee}
//               className="rounded-lg bg-red-600 px-5 py-2 text-sm font-semibold text-white"
//             >
//               Delete Employee
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
//           <p className="mt-2 text-2xl font-bold">{value}</p>
//           <p className="mt-1 text-xs text-gray-500">{subtitle}</p>
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

// function StatusBar({
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
//   const percentage = total ? Math.round((value / total) * 100) : 0;

//   return (
//     <div>
//       <div className="mb-1.5 flex justify-between text-sm">
//         <span className="font-medium text-gray-700">{label}</span>
//         <span className="text-gray-500">
//           {value} · {percentage}%
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
//       <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
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

// function Input({
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
//     <label className="block">
//       <span className="mb-1.5 block text-sm font-medium text-gray-700">
//         {label}
//       </span>

//       <input
//         type={type}
//         value={value}
//         onChange={(event) => onChange(event.target.value)}
//         placeholder={placeholder}
//         className="w-full rounded-lg border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//       />
//     </label>
//   );
// }

// function SelectInput({
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
//     <label className="block">
//       <span className="mb-1.5 block text-sm font-medium text-gray-700">
//         {label}
//       </span>

//       <select
//         value={value}
//         onChange={(event) => onChange(event.target.value)}
//         className="w-full rounded-lg border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//       >
//         {options.map((option) => (
//           <option key={option}>{option}</option>
//         ))}
//       </select>
//     </label>
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
//       <p className="mt-1 break-words text-sm font-medium text-gray-800">
//         {value}
//       </p>
//     </div>
//   );
// }

// function EditEmployeeModal({
//   employee,
//   onClose,
//   onSave,
// }: {
//   employee: Employee;
//   onClose: () => void;
//   onSave: (employee: Employee) => void;
// }) {
//   const [form, setForm] = useState<Employee>(employee);

//   function update<K extends keyof Employee>(
//     key: K,
//     value: Employee[K]
//   ) {
//     setForm((current) => ({
//       ...current,
//       [key]: value,
//     }));
//   }

//   return (
//     <Modal title="Edit Employee" onClose={onClose}>
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//         <Input
//           label="Full Name"
//           value={form.name}
//           onChange={(value) => update("name", value)}
//         />

//         <Input
//           label="Email"
//           type="email"
//           value={form.email}
//           onChange={(value) => update("email", value)}
//         />

//         <Input
//           label="Phone"
//           value={form.phone}
//           onChange={(value) => update("phone", value)}
//         />

//         <Input
//           label="Designation"
//           value={form.designation}
//           onChange={(value) => update("designation", value)}
//         />

//         <SelectInput
//           label="Department"
//           value={form.department}
//           onChange={(value) => update("department", value)}
//           options={departments.filter(
//             (item) => item !== "All Departments"
//           )}
//         />

//         <SelectInput
//           label="Status"
//           value={form.status}
//           onChange={(value) =>
//             update("status", value as EmployeeStatus)
//           }
//           options={["Active", "Inactive", "On Leave"]}
//         />

//         <Input
//           label="Joining Date"
//           type="date"
//           value={form.joiningDate}
//           onChange={(value) => update("joiningDate", value)}
//         />

//         <Input
//           label="Monthly Salary"
//           type="number"
//           value={String(form.salary)}
//           onChange={(value) => update("salary", Number(value))}
//         />

//         <Input
//           label="Experience"
//           value={form.experience}
//           onChange={(value) => update("experience", value)}
//         />

//         <Input
//           label="Manager"
//           value={form.manager}
//           onChange={(value) => update("manager", value)}
//         />

//         <Input
//           label="Location"
//           value={form.location}
//           onChange={(value) => update("location", value)}
//         />
//       </div>

//       <div className="mt-6 flex justify-end gap-2 border-t border-[#e4e2da] pt-4">
//         <button
//           onClick={onClose}
//           className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium"
//         >
//           Cancel
//         </button>

//         <button
//           onClick={() => onSave(form)}
//           className="rounded-lg bg-[#176b5b] px-5 py-2 text-sm font-semibold text-white"
//         >
//           Save Changes
//         </button>
//       </div>
//     </Modal>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAllEmployees,
//   createEmployee,
//   updateEmployee,
//   deleteEmployee as deleteEmployeeFromDb,
//   type InteriorEmployee,
// } from "@/modules/interior/services/employeeService";
// import { Timestamp } from "firebase/firestore";

// type EmployeeStatus = "Active" | "Inactive" | "On Leave";

// type Employee = {
//   id: string;
//   employeeId: string;
//   name: string;
//   email: string;
//   phone: string;
//   department: string;
//   designation: string;
//   joiningDate: string;
//   status: EmployeeStatus;
//   salary: number;
//   manager: string;
//   location: string;
//   experience: string;
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

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function statusClass(status: EmployeeStatus) {
//   if (status === "Active")
//     return "bg-green-50 text-green-700 border-green-200";
//   if (status === "On Leave")
//     return "bg-amber-50 text-amber-700 border-amber-200";
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

// function normalizeStatus(raw?: string): EmployeeStatus {
//   const s = (raw || "Active").toLowerCase();
//   if (s.includes("leave")) return "On Leave";
//   if (s.includes("inactive") || s.includes("resign")) return "Inactive";
//   return "Active";
// }

// function mapToUi(e: InteriorEmployee): Employee {
//   return {
//     id: e.id,
//     employeeId: e.employeeId || `AKR-${e.id.slice(0, 4).toUpperCase()}`,
//     name: e.name || "Unknown",
//     email: e.email || "",
//     phone: e.phone || "—",
//     department: e.department || "Other",
//     designation: e.designation || "—",
//     joiningDate: e.joiningDate || toDateString(e.createdAt) || "—",
//     status: normalizeStatus(e.status),
//     salary: Number(e.salary ?? 0) || 0,
//     manager: e.manager || "—",
//     location: e.location || "—",
//     experience: e.experience || "—",
//   };
// }

// export default function InteriorEmployeesPage() {
//   const [employees, setEmployees] = useState<Employee[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   const [search, setSearch] = useState("");
//   const [department, setDepartment] = useState("All Departments");
//   const [status, setStatus] = useState("All Status");

//   const [selected, setSelected] = useState<Employee | null>(null);
//   const [showModal, setShowModal] = useState(false);
//   const [editing, setEditing] = useState<Employee | null>(null);

//   const [form, setForm] = useState({
//     employeeId: "",
//     name: "",
//     email: "",
//     phone: "",
//     department: "Interior Design",
//     designation: "",
//     joiningDate: "",
//     status: "Active" as EmployeeStatus,
//     salary: "",
//     manager: "",
//     location: "",
//     experience: "",
//   });

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllEmployees();
//         if (cancelled) return;
//         setEmployees(data.map(mapToUi));
//       } catch (err) {
//         console.error(err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const filtered = useMemo(() => {
//     const text = search.toLowerCase().trim();

//     return employees.filter((employee) => {
//       const matchesSearch =
//         !text ||
//         employee.name.toLowerCase().includes(text) ||
//         employee.employeeId.toLowerCase().includes(text) ||
//         employee.email.toLowerCase().includes(text) ||
//         employee.designation.toLowerCase().includes(text);

//       const matchesDepartment =
//         department === "All Departments" ||
//         employee.department === department;

//       const matchesStatus =
//         status === "All Status" || employee.status === status;

//       return matchesSearch && matchesDepartment && matchesStatus;
//     });
//   }, [employees, search, department, status]);

//   const activeCount = employees.filter((e) => e.status === "Active").length;
//   const inactiveCount = employees.filter((e) => e.status === "Inactive").length;
//   const leaveCount = employees.filter((e) => e.status === "On Leave").length;
//   const payrollTotal = employees.reduce((s, e) => s + e.salary, 0);

//   function resetForm() {
//     setForm({
//       employeeId: "",
//       name: "",
//       email: "",
//       phone: "",
//       department: "Interior Design",
//       designation: "",
//       joiningDate: "",
//       status: "Active",
//       salary: "",
//       manager: "",
//       location: "",
//       experience: "",
//     });
//   }

//   function openNew() {
//     setEditing(null);
//     resetForm();
//     setShowModal(true);
//   }

//   function openEdit(emp: Employee) {
//     setEditing(emp);
//     setForm({
//       employeeId: emp.employeeId,
//       name: emp.name,
//       email: emp.email,
//       phone: emp.phone,
//       department: emp.department,
//       designation: emp.designation,
//       joiningDate: emp.joiningDate === "—" ? "" : emp.joiningDate,
//       status: emp.status,
//       salary: String(emp.salary || ""),
//       manager: emp.manager,
//       location: emp.location,
//       experience: emp.experience,
//     });
//     setShowModal(true);
//   }

//   async function save() {
//     if (!form.name.trim() || !form.phone.trim()) {
//       alert("Name and phone are required.");
//       return;
//     }

//     setSaving(true);
//     try {
//       const payload = {
//         employeeId:
//           form.employeeId.trim() ||
//           `AKR${String(employees.length + 1).padStart(3, "0")}`,
//         name: form.name.trim(),
//         email: form.email.trim(),
//         phone: form.phone.trim(),
//         department: form.department,
//         designation: form.designation.trim(),
//         joiningDate:
//           form.joiningDate || new Date().toISOString().slice(0, 10),
//         status: form.status,
//         salary: Number(form.salary) || 0,
//         manager: form.manager.trim(),
//         location: form.location.trim(),
//         experience: form.experience.trim(),
//       };

//       if (editing) {
//         await updateEmployee(editing.id, payload);
//         setEmployees((current) =>
//           current.map((e) =>
//             e.id === editing.id ? { ...e, ...payload } : e
//           )
//         );
//       } else {
//         const id = await createEmployee(payload);
//         setEmployees((current) => [
//           { id, ...payload, status: form.status },
//           ...current,
//         ]);
//       }

//       setShowModal(false);
//       setEditing(null);
//       resetForm();
//     } catch (err) {
//       console.error(err);
//       alert("Unable to save employee.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function changeStatus(id: string, next: EmployeeStatus) {
//     setEmployees((current) =>
//       current.map((e) => (e.id === id ? { ...e, status: next } : e))
//     );
//     setSelected((current) =>
//       current && current.id === id ? { ...current, status: next } : current
//     );

//     try {
//       await updateEmployee(id, { status: next });
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllEmployees();
//         setEmployees(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   async function remove(emp: Employee) {
//     if (!window.confirm(`Delete employee "${emp.name}"?`)) return;

//     setEmployees((current) => current.filter((e) => e.id !== emp.id));
//     setSelected(null);

//     try {
//       await deleteEmployeeFromDb(emp.id);
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllEmployees();
//         setEmployees(data.map(mapToUi));
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
//               <a
//                 href="/interior/hrms"
//                 className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-[#176b5b] hover:underline"
//               >
//                 ← Back to HRMS
//               </a>
//               {/* <div className="mb-1 text-sm font-medium text-[#9a5b18]">
//                 Akrish / HRMS
//               </div> */}
//               <h1 className="text-2xl font-bold tracking-tight">Employees</h1>
//               <p className="mt-1 text-sm text-gray-500">
//                 Staff directory for interior operations.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <button
//               onClick={openNew}
//               className="rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white hover:bg-[#125848]"
//             >
//               + Add Employee
//             </button>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-6 px-5 py-6 lg:px-8">
//         <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <Stat
//             label="Total"
//             value={loading ? "…" : String(employees.length)}
//           />
//           <Stat label="Active" value={loading ? "…" : String(activeCount)} />
//           <Stat
//             label="On Leave"
//             value={loading ? "…" : String(leaveCount)}
//           />
//           <Stat
//             label="Payroll"
//             value={loading ? "…" : formatCurrency(payrollTotal)}
//           />
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-4">
//           <div className="flex flex-col gap-3 lg:flex-row">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search name, ID, email, designation..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-4 py-2.5 text-sm outline-none focus:border-[#176b5b] lg:max-w-md"
//             />
//             <select
//               value={department}
//               onChange={(e) => setDepartment(e.target.value)}
//               className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {departments.map((d) => (
//                 <option key={d} value={d}>
//                   {d}
//                 </option>
//               ))}
//             </select>
//             <select
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//               className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               <option>All Status</option>
//               <option>Active</option>
//               <option>Inactive</option>
//               <option>On Leave</option>
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
//                   <th className="px-4 py-3 font-semibold">Designation</th>
//                   <th className="px-4 py-3 font-semibold">Salary</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
//                   <th className="px-4 py-3 text-right font-semibold">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece6]">
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={6}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       Loading employees…
//                     </td>
//                   </tr>
//                 ) : (
//                   <>
//                     {filtered.map((emp) => (
//                       <tr key={emp.id} className="hover:bg-[#fafaf8]">
//                         <td className="px-5 py-4">
//                           <p className="font-semibold text-gray-900">
//                             {emp.name}
//                           </p>
//                           <p className="text-xs text-[#176b5b]">
//                             {emp.employeeId}
//                           </p>
//                           <p className="text-xs text-gray-400">{emp.phone}</p>
//                         </td>
//                         <td className="px-4 py-4 text-sm text-gray-700">
//                           {emp.department}
//                         </td>
//                         <td className="px-4 py-4 text-sm text-gray-700">
//                           {emp.designation}
//                         </td>
//                         <td className="px-4 py-4 text-sm font-semibold">
//                           {formatCurrency(emp.salary)}
//                         </td>
//                         <td className="px-4 py-4">
//                           <span
//                             className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${statusClass(
//                               emp.status
//                             )}`}
//                           >
//                             {emp.status}
//                           </span>
//                         </td>
//                         <td className="px-4 py-4 text-right">
//                           <div className="flex justify-end gap-2">
//                             <button
//                               onClick={() => setSelected(emp)}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                             >
//                               View
//                             </button>
//                             <button
//                               onClick={() => openEdit(emp)}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600"
//                             >
//                               Edit
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                     {filtered.length === 0 && (
//                       <tr>
//                         <td
//                           colSpan={6}
//                           className="px-5 py-12 text-center text-sm text-gray-500"
//                         >
//                           No employees found.
//                         </td>
//                       </tr>
//                     )}
//                   </>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </section>

//         <p className="text-xs text-gray-400">
//           Inactive: {inactiveCount} · Data from Firestore{" "}
//           <code>interior_employees</code> / <code>employees</code>
//         </p>
//       </main>

//       {selected && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-4">
//               <div>
//                 <p className="text-xs font-semibold text-[#176b5b]">
//                   {selected.employeeId}
//                 </p>
//                 <h2 className="mt-1 text-xl font-bold">{selected.name}</h2>
//               </div>
//               <button
//                 onClick={() => setSelected(null)}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>
//             <div className="grid grid-cols-2 gap-3 p-6">
//               <Info label="Email" value={selected.email || "—"} />
//               <Info label="Phone" value={selected.phone} />
//               <Info label="Department" value={selected.department} />
//               <Info label="Designation" value={selected.designation} />
//               <Info label="Manager" value={selected.manager} />
//               <Info label="Location" value={selected.location} />
//               <Info label="Joined" value={selected.joiningDate} />
//               <Info label="Experience" value={selected.experience} />
//               <Info label="Salary" value={formatCurrency(selected.salary)} />
//             </div>
//             <div className="px-6 pb-2">
//               <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
//                 Status
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {(["Active", "Inactive", "On Leave"] as EmployeeStatus[]).map(
//                   (s) => (
//                     <button
//                       key={s}
//                       onClick={() => changeStatus(selected.id, s)}
//                       className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
//                         selected.status === s
//                           ? statusClass(s)
//                           : "border-gray-200 text-gray-600"
//                       }`}
//                     >
//                       {s}
//                     </button>
//                   )
//                 )}
//               </div>
//             </div>
//             <div className="flex gap-2 border-t border-[#e4e2da] px-6 py-4">
//               <button
//                 onClick={() => {
//                   setSelected(null);
//                   openEdit(selected);
//                 }}
//                 className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => remove(selected)}
//                 className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-4">
//               <h2 className="text-lg font-bold">
//                 {editing ? "Edit Employee" : "Add Employee"}
//               </h2>
//               <button
//                 onClick={() => {
//                   setShowModal(false);
//                   setEditing(null);
//                 }}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>
//             <div className="grid gap-4 p-6 sm:grid-cols-2">
//               <Field
//                 label="Employee ID"
//                 value={form.employeeId}
//                 onChange={(v) => setForm((f) => ({ ...f, employeeId: v }))}
//               />
//               <Field
//                 label="Name *"
//                 value={form.name}
//                 onChange={(v) => setForm((f) => ({ ...f, name: v }))}
//               />
//               <Field
//                 label="Email"
//                 value={form.email}
//                 onChange={(v) => setForm((f) => ({ ...f, email: v }))}
//               />
//               <Field
//                 label="Phone *"
//                 value={form.phone}
//                 onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
//               />
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Department
//                 </label>
//                 <select
//                   value={form.department}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, department: e.target.value }))
//                   }
//                   className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {departments
//                     .filter((d) => d !== "All Departments")
//                     .map((d) => (
//                       <option key={d}>{d}</option>
//                     ))}
//                 </select>
//               </div>
//               <Field
//                 label="Designation"
//                 value={form.designation}
//                 onChange={(v) => setForm((f) => ({ ...f, designation: v }))}
//               />
//               <Field
//                 label="Joining Date"
//                 type="date"
//                 value={form.joiningDate}
//                 onChange={(v) => setForm((f) => ({ ...f, joiningDate: v }))}
//               />
//               <Field
//                 label="Salary"
//                 type="number"
//                 value={form.salary}
//                 onChange={(v) => setForm((f) => ({ ...f, salary: v }))}
//               />
//               <Field
//                 label="Manager"
//                 value={form.manager}
//                 onChange={(v) => setForm((f) => ({ ...f, manager: v }))}
//               />
//               <Field
//                 label="Location"
//                 value={form.location}
//                 onChange={(v) => setForm((f) => ({ ...f, location: v }))}
//               />
//               <Field
//                 label="Experience"
//                 value={form.experience}
//                 onChange={(v) => setForm((f) => ({ ...f, experience: v }))}
//               />
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Status
//                 </label>
//                 <select
//                   value={form.status}
//                   onChange={(e) =>
//                     setForm((f) => ({
//                       ...f,
//                       status: e.target.value as EmployeeStatus,
//                     }))
//                   }
//                   className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   <option>Active</option>
//                   <option>Inactive</option>
//                   <option>On Leave</option>
//                 </select>
//               </div>
//             </div>
//             <div className="flex justify-end gap-3 border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
//               <button
//                 onClick={() => {
//                   setShowModal(false);
//                   setEditing(null);
//                 }}
//                 className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium"
//               >
//                 Cancel
//               </button>
//               <button
//                 disabled={saving}
//                 onClick={save}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
//               >
//                 {saving ? "Saving…" : editing ? "Save" : "Add"}
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
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//       <p className="text-sm text-gray-500">{label}</p>
//       <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
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
//   getAllEmployees,
//   createEmployee,
//   updateEmployee,
//   deleteEmployee as deleteEmployeeFromDb,
//   generateNextEmployeeId,
//   type InteriorEmployee,
// } from "@/modules/interior/services/employeeService";
// import { Timestamp } from "firebase/firestore";

// type EmployeeStatus = "Active" | "Inactive" | "On Leave";

// type Employee = {
//   id: string;
//   employeeId: string;
//   name: string;
//   email: string;
//   phone: string;
//   department: string;
//   designation: string;
//   joiningDate: string;
//   status: EmployeeStatus;
//   salary: number;
//   manager: string;
//   location: string;
//   experience: string;
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

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function statusClass(status: EmployeeStatus) {
//   if (status === "Active")
//     return "bg-green-50 text-green-700 border-green-200";
//   if (status === "On Leave")
//     return "bg-amber-50 text-amber-700 border-amber-200";
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

// function normalizeStatus(raw?: string): EmployeeStatus {
//   const s = (raw || "Active").toLowerCase();
//   if (s.includes("leave")) return "On Leave";
//   if (s.includes("inactive") || s.includes("resign")) return "Inactive";
//   return "Active";
// }

// function mapToUi(e: InteriorEmployee): Employee {
//   return {
//     id: e.id,
//     employeeId: e.employeeId || `EMP-${e.id.slice(0, 6).toUpperCase()}`,
//     name: e.name || "Unknown",
//     email: e.email || "",
//     phone: e.phone || "—",
//     department: e.department || "Other",
//     designation: e.designation || "—",
//     joiningDate: e.joiningDate || toDateString(e.createdAt) || "—",
//     status: normalizeStatus(e.status),
//     salary: Number(e.salary ?? 0) || 0,
//     manager: e.manager || "—",
//     location: e.location || "—",
//     experience: e.experience || "—",
//   };
// }

// export default function InteriorEmployeesPage() {
//   const [employees, setEmployees] = useState<Employee[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   const [search, setSearch] = useState("");
//   const [department, setDepartment] = useState("All Departments");
//   const [status, setStatus] = useState("All Status");

//   const [selected, setSelected] = useState<Employee | null>(null);
//   const [showModal, setShowModal] = useState(false);
//   const [editing, setEditing] = useState<Employee | null>(null);

//   const [form, setForm] = useState({
//     employeeId: "",
//     name: "",
//     email: "",
//     phone: "",
//     department: "Interior Design",
//     designation: "",
//     joiningDate: "",
//     status: "Active" as EmployeeStatus,
//     salary: "",
//     manager: "",
//     location: "",
//     experience: "",
//   });

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllEmployees();
//         if (cancelled) return;
//         setEmployees(data.map(mapToUi));
//       } catch (err) {
//         console.error(err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const filtered = useMemo(() => {
//     const text = search.toLowerCase().trim();

//     return employees.filter((employee) => {
//       const matchesSearch =
//         !text ||
//         employee.name.toLowerCase().includes(text) ||
//         employee.employeeId.toLowerCase().includes(text) ||
//         employee.email.toLowerCase().includes(text) ||
//         employee.designation.toLowerCase().includes(text);

//       const matchesDepartment =
//         department === "All Departments" ||
//         employee.department === department;

//       const matchesStatus =
//         status === "All Status" || employee.status === status;

//       return matchesSearch && matchesDepartment && matchesStatus;
//     });
//   }, [employees, search, department, status]);

//   const activeCount = employees.filter((e) => e.status === "Active").length;
//   const inactiveCount = employees.filter((e) => e.status === "Inactive").length;
//   const leaveCount = employees.filter((e) => e.status === "On Leave").length;
//   const payrollTotal = employees.reduce((s, e) => s + e.salary, 0);

//   function resetForm(nextId = "") {
//     setForm({
//       employeeId: nextId,
//       name: "",
//       email: "",
//       phone: "",
//       department: "Interior Design",
//       designation: "",
//       joiningDate: new Date().toISOString().slice(0, 10),
//       status: "Active",
//       salary: "",
//       manager: "",
//       location: "",
//       experience: "",
//     });
//   }

//   function openNew() {
//     setEditing(null);
//     const nextId = generateNextEmployeeId(employees);
//     resetForm(nextId);
//     setShowModal(true);
//   }

//   function openEdit(emp: Employee) {
//     setEditing(emp);
//     setForm({
//       employeeId: emp.employeeId,
//       name: emp.name,
//       email: emp.email,
//       phone: emp.phone === "—" ? "" : emp.phone,
//       department: emp.department,
//       designation: emp.designation === "—" ? "" : emp.designation,
//       joiningDate: emp.joiningDate === "—" ? "" : emp.joiningDate,
//       status: emp.status,
//       salary: String(emp.salary || ""),
//       manager: emp.manager === "—" ? "" : emp.manager,
//       location: emp.location === "—" ? "" : emp.location,
//       experience: emp.experience === "—" ? "" : emp.experience,
//     });
//     setShowModal(true);
//   }

//   async function save() {
//     if (!form.name.trim() || !form.phone.trim()) {
//       alert("Name and phone are required.");
//       return;
//     }

//     setSaving(true);
//     try {
//       // Always auto ID on create; never change on edit
//       let employeeId = form.employeeId.trim();

//       if (!editing) {
//         employeeId = generateNextEmployeeId(employees);
//         // Guard if someone else was added in the same session
//         const used = new Set(
//           employees.map((e) => e.employeeId.toUpperCase())
//         );
//         while (used.has(employeeId.toUpperCase())) {
//           const m = employeeId.match(/^(EMP-\d{4}-)(\d+)$/i);
//           if (!m) break;
//           const n = parseInt(m[2]!, 10) + 1;
//           employeeId = `${m[1]}${String(n).padStart(3, "0")}`;
//         }
//       } else {
//         employeeId = editing.employeeId;
//       }

//       const payload = {
//         employeeId,
//         name: form.name.trim(),
//         email: form.email.trim(),
//         phone: form.phone.trim(),
//         department: form.department,
//         designation: form.designation.trim(),
//         joiningDate:
//           form.joiningDate || new Date().toISOString().slice(0, 10),
//         status: form.status,
//         salary: Number(form.salary) || 0,
//         manager: form.manager.trim(),
//         location: form.location.trim(),
//         experience: form.experience.trim(),
//       };

//       if (editing) {
//         await updateEmployee(editing.id, payload);
//         setEmployees((current) =>
//           current.map((e) =>
//             e.id === editing.id ? { ...e, ...payload } : e
//           )
//         );
//         setSelected((current) =>
//           current && current.id === editing.id
//             ? { ...current, ...payload }
//             : current
//         );
//       } else {
//         const id = await createEmployee(payload);
//         setEmployees((current) => [
//           { id, ...payload, status: form.status },
//           ...current,
//         ]);
//       }

//       setShowModal(false);
//       setEditing(null);
//       resetForm();
//     } catch (err) {
//       console.error(err);
//       alert("Unable to save employee.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function changeStatus(id: string, next: EmployeeStatus) {
//     setEmployees((current) =>
//       current.map((e) => (e.id === id ? { ...e, status: next } : e))
//     );
//     setSelected((current) =>
//       current && current.id === id ? { ...current, status: next } : current
//     );

//     try {
//       await updateEmployee(id, { status: next });
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllEmployees();
//         setEmployees(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   async function remove(emp: Employee) {
//     if (!window.confirm(`Delete employee "${emp.name}"?`)) return;

//     setEmployees((current) => current.filter((e) => e.id !== emp.id));
//     setSelected(null);

//     try {
//       await deleteEmployeeFromDb(emp.id);
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllEmployees();
//         setEmployees(data.map(mapToUi));
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
//               <a
//                 href="/interior/hrms"
//                 className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-[#176b5b] hover:underline"
//               >
//                 ← Back to HRMS
//               </a>
//               <h1 className="text-2xl font-bold tracking-tight">Employees</h1>
//               <p className="mt-1 text-sm text-gray-500">
//                 Staff directory for interior operations.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <button
//               type="button"
//               onClick={openNew}
//               className="rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white hover:bg-[#125848]"
//             >
//               + Add Employee
//             </button>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-6 px-5 py-6 lg:px-8">
//         <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <Stat
//             label="Total"
//             value={loading ? "…" : String(employees.length)}
//           />
//           <Stat label="Active" value={loading ? "…" : String(activeCount)} />
//           <Stat
//             label="On Leave"
//             value={loading ? "…" : String(leaveCount)}
//           />
//           <Stat
//             label="Payroll"
//             value={loading ? "…" : formatCurrency(payrollTotal)}
//           />
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-4">
//           <div className="flex flex-col gap-3 lg:flex-row">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search name, ID, email, designation..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-4 py-2.5 text-sm outline-none focus:border-[#176b5b] lg:max-w-md"
//             />
//             <select
//               value={department}
//               onChange={(e) => setDepartment(e.target.value)}
//               className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {departments.map((d) => (
//                 <option key={d} value={d}>
//                   {d}
//                 </option>
//               ))}
//             </select>
//             <select
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//               className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               <option>All Status</option>
//               <option>Active</option>
//               <option>Inactive</option>
//               <option>On Leave</option>
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
//                   <th className="px-4 py-3 font-semibold">Designation</th>
//                   <th className="px-4 py-3 font-semibold">Salary</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
//                   <th className="px-4 py-3 text-right font-semibold">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece6]">
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={6}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       Loading employees…
//                     </td>
//                   </tr>
//                 ) : (
//                   <>
//                     {filtered.map((emp) => (
//                       <tr key={emp.id} className="hover:bg-[#fafaf8]">
//                         <td className="px-5 py-4">
//                           <p className="font-semibold text-gray-900">
//                             {emp.name}
//                           </p>
//                           <p className="text-xs text-[#176b5b]">
//                             {emp.employeeId}
//                           </p>
//                           <p className="text-xs text-gray-400">{emp.phone}</p>
//                         </td>
//                         <td className="px-4 py-4 text-sm text-gray-700">
//                           {emp.department}
//                         </td>
//                         <td className="px-4 py-4 text-sm text-gray-700">
//                           {emp.designation}
//                         </td>
//                         <td className="px-4 py-4 text-sm font-semibold">
//                           {formatCurrency(emp.salary)}
//                         </td>
//                         <td className="px-4 py-4">
//                           <span
//                             className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${statusClass(
//                               emp.status
//                             )}`}
//                           >
//                             {emp.status}
//                           </span>
//                         </td>
//                         <td className="px-4 py-4 text-right">
//                           <div className="flex justify-end gap-2">
//                             <button
//                               type="button"
//                               onClick={() => setSelected(emp)}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                             >
//                               View
//                             </button>
//                             <button
//                               type="button"
//                               onClick={() => openEdit(emp)}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600"
//                             >
//                               Edit
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                     {filtered.length === 0 && (
//                       <tr>
//                         <td
//                           colSpan={6}
//                           className="px-5 py-12 text-center text-sm text-gray-500"
//                         >
//                           No employees found.
//                         </td>
//                       </tr>
//                     )}
//                   </>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </section>

//         <p className="text-xs text-gray-400">
//           Inactive: {inactiveCount} · Data from Firestore{" "}
//           <code>interior_employees</code> / <code>employees</code>
//         </p>
//       </main>

//       {selected && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-4">
//               <div>
//                 <p className="text-xs font-semibold text-[#176b5b]">
//                   {selected.employeeId}
//                 </p>
//                 <h2 className="mt-1 text-xl font-bold">{selected.name}</h2>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setSelected(null)}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>
//             <div className="grid grid-cols-2 gap-3 p-6">
//               <Info label="Email" value={selected.email || "—"} />
//               <Info label="Phone" value={selected.phone} />
//               <Info label="Department" value={selected.department} />
//               <Info label="Designation" value={selected.designation} />
//               <Info label="Manager" value={selected.manager} />
//               <Info label="Location" value={selected.location} />
//               <Info label="Joined" value={selected.joiningDate} />
//               <Info label="Experience" value={selected.experience} />
//               <Info label="Salary" value={formatCurrency(selected.salary)} />
//             </div>
//             <div className="px-6 pb-2">
//               <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
//                 Status
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {(["Active", "Inactive", "On Leave"] as EmployeeStatus[]).map(
//                   (s) => (
//                     <button
//                       key={s}
//                       type="button"
//                       onClick={() => changeStatus(selected.id, s)}
//                       className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
//                         selected.status === s
//                           ? statusClass(s)
//                           : "border-gray-200 text-gray-600"
//                       }`}
//                     >
//                       {s}
//                     </button>
//                   )
//                 )}
//               </div>
//             </div>
//             <div className="flex gap-2 border-t border-[#e4e2da] px-6 py-4">
//               <button
//                 type="button"
//                 onClick={() => {
//                   setSelected(null);
//                   openEdit(selected);
//                 }}
//                 className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white"
//               >
//                 Edit
//               </button>
//               <button
//                 type="button"
//                 onClick={() => remove(selected)}
//                 className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-4">
//               <h2 className="text-lg font-bold">
//                 {editing ? "Edit Employee" : "Add Employee"}
//               </h2>
//               <button
//                 type="button"
//                 onClick={() => {
//                   setShowModal(false);
//                   setEditing(null);
//                 }}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>
//             <div className="grid gap-4 p-6 sm:grid-cols-2">
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Employee ID
//                 </label>
//                 <input
//                   type="text"
//                   value={form.employeeId}
//                   readOnly
//                   className="w-full cursor-not-allowed rounded-lg border border-gray-200 bg-[#f5f5f2] px-3 py-2.5 text-sm text-gray-600 outline-none"
//                 />
//                 <p className="mt-1 text-[11px] text-gray-400">
//                   {editing
//                     ? "Employee ID cannot be changed."
//                     : "Auto-generated unique ID"}
//                 </p>
//               </div>
//               <Field
//                 label="Name *"
//                 value={form.name}
//                 onChange={(v) => setForm((f) => ({ ...f, name: v }))}
//               />
//               <Field
//                 label="Email"
//                 value={form.email}
//                 onChange={(v) => setForm((f) => ({ ...f, email: v }))}
//               />
//               <Field
//                 label="Phone *"
//                 value={form.phone}
//                 onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
//               />
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Department
//                 </label>
//                 <select
//                   value={form.department}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, department: e.target.value }))
//                   }
//                   className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {departments
//                     .filter((d) => d !== "All Departments")
//                     .map((d) => (
//                       <option key={d}>{d}</option>
//                     ))}
//                 </select>
//               </div>
//               <Field
//                 label="Designation"
//                 value={form.designation}
//                 onChange={(v) => setForm((f) => ({ ...f, designation: v }))}
//               />
//               <Field
//                 label="Joining Date"
//                 type="date"
//                 value={form.joiningDate}
//                 onChange={(v) => setForm((f) => ({ ...f, joiningDate: v }))}
//               />
//               <Field
//                 label="Salary"
//                 type="number"
//                 value={form.salary}
//                 onChange={(v) => setForm((f) => ({ ...f, salary: v }))}
//               />
//               <Field
//                 label="Manager"
//                 value={form.manager}
//                 onChange={(v) => setForm((f) => ({ ...f, manager: v }))}
//               />
//               <Field
//                 label="Location"
//                 value={form.location}
//                 onChange={(v) => setForm((f) => ({ ...f, location: v }))}
//               />
//               <Field
//                 label="Experience"
//                 value={form.experience}
//                 onChange={(v) => setForm((f) => ({ ...f, experience: v }))}
//               />
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Status
//                 </label>
//                 <select
//                   value={form.status}
//                   onChange={(e) =>
//                     setForm((f) => ({
//                       ...f,
//                       status: e.target.value as EmployeeStatus,
//                     }))
//                   }
//                   className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   <option>Active</option>
//                   <option>Inactive</option>
//                   <option>On Leave</option>
//                 </select>
//               </div>
//             </div>
//             <div className="flex justify-end gap-3 border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
//               <button
//                 type="button"
//                 onClick={() => {
//                   setShowModal(false);
//                   setEditing(null);
//                 }}
//                 className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 disabled={saving}
//                 onClick={save}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
//               >
//                 {saving ? "Saving…" : editing ? "Save" : "Add"}
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
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//       <p className="text-sm text-gray-500">{label}</p>
//       <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
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
//   getAllEmployees,
//   createEmployee,
//   updateEmployee,
//   deleteEmployee as deleteEmployeeFromDb,
//   generateNextEmployeeId,
//   type InteriorEmployee,
// } from "@/modules/interior/services/employeeService";
// import { Timestamp } from "firebase/firestore";

// type EmployeeStatus = "Active" | "Inactive" | "On Leave";

// type Employee = {
//   id: string;
//   employeeId: string;
//   name: string;
//   email: string;
//   phone: string;
//   department: string;
//   designation: string;
//   joiningDate: string;
//   status: EmployeeStatus;
//   salary: number;
//   manager: string;
//   location: string;
//   experience: string;
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

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function statusClass(status: EmployeeStatus) {
//   if (status === "Active")
//     return "bg-green-50 text-green-700 border-green-200";
//   if (status === "On Leave")
//     return "bg-amber-50 text-amber-700 border-amber-200";
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

// function normalizeStatus(raw?: string): EmployeeStatus {
//   const s = (raw || "Active").toLowerCase();
//   if (s.includes("leave")) return "On Leave";
//   if (s.includes("inactive") || s.includes("resign")) return "Inactive";
//   return "Active";
// }

// function mapToUi(e: InteriorEmployee): Employee {
//   return {
//     id: e.id,
//     employeeId: e.employeeId || `EMP-${e.id.slice(0, 6).toUpperCase()}`,
//     name: e.name || "Unknown",
//     email: e.email || "",
//     phone: e.phone || "—",
//     department: e.department || "Other",
//     designation: e.designation || "—",
//     joiningDate: e.joiningDate || toDateString(e.createdAt) || "—",
//     status: normalizeStatus(e.status),
//     salary: Number(e.salary ?? 0) || 0,
//     manager: e.manager || "—",
//     location: e.location || "—",
//     experience: e.experience || "—",
//   };
// }

// export default function InteriorEmployeesPage() {
//   const [employees, setEmployees] = useState<Employee[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   const [search, setSearch] = useState("");
//   const [department, setDepartment] = useState("All Departments");
//   const [status, setStatus] = useState("All Status");

//   const [selected, setSelected] = useState<Employee | null>(null);
//   const [showModal, setShowModal] = useState(false);
//   const [editing, setEditing] = useState<Employee | null>(null);

//   const [form, setForm] = useState({
//     employeeId: "",
//     name: "",
//     email: "",
//     phone: "",
//     department: "Interior Design",
//     designation: "",
//     joiningDate: "",
//     status: "Active" as EmployeeStatus,
//     salary: "",
//     manager: "",
//     location: "",
//     experience: "",
//   });

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllEmployees();
//         if (cancelled) return;
//         setEmployees(data.map(mapToUi));
//       } catch (err) {
//         console.error(err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const filtered = useMemo(() => {
//     const text = search.toLowerCase().trim();

//     return employees.filter((employee) => {
//       const matchesSearch =
//         !text ||
//         employee.name.toLowerCase().includes(text) ||
//         employee.employeeId.toLowerCase().includes(text) ||
//         employee.email.toLowerCase().includes(text) ||
//         employee.designation.toLowerCase().includes(text);

//       const matchesDepartment =
//         department === "All Departments" ||
//         employee.department === department;

//       const matchesStatus =
//         status === "All Status" || employee.status === status;

//       return matchesSearch && matchesDepartment && matchesStatus;
//     });
//   }, [employees, search, department, status]);

//   const managerOptions = useMemo(() => {
//     return employees
//       .filter((e) => {
//         if (editing && e.id === editing.id) return false;
//         return e.status !== "Inactive";
//       })
//       .sort((a, b) => a.name.localeCompare(b.name));
//   }, [employees, editing]);

//   const activeCount = employees.filter((e) => e.status === "Active").length;
//   const inactiveCount = employees.filter((e) => e.status === "Inactive").length;
//   const leaveCount = employees.filter((e) => e.status === "On Leave").length;
//   const payrollTotal = employees.reduce((s, e) => s + e.salary, 0);

//   function resetForm(nextId = "") {
//     setForm({
//       employeeId: nextId,
//       name: "",
//       email: "",
//       phone: "",
//       department: "Interior Design",
//       designation: "",
//       joiningDate: new Date().toISOString().slice(0, 10),
//       status: "Active",
//       salary: "",
//       manager: "",
//       location: "",
//       experience: "",
//     });
//   }

//   function openNew() {
//     setEditing(null);
//     const nextId = generateNextEmployeeId(employees);
//     resetForm(nextId);
//     setShowModal(true);
//   }

//   function openEdit(emp: Employee) {
//     setEditing(emp);
//     setForm({
//       employeeId: emp.employeeId,
//       name: emp.name,
//       email: emp.email,
//       phone: emp.phone === "—" ? "" : emp.phone,
//       department: emp.department,
//       designation: emp.designation === "—" ? "" : emp.designation,
//       joiningDate: emp.joiningDate === "—" ? "" : emp.joiningDate,
//       status: emp.status,
//       salary: String(emp.salary || ""),
//       manager: emp.manager === "—" ? "" : emp.manager,
//       location: emp.location === "—" ? "" : emp.location,
//       experience: emp.experience === "—" ? "" : emp.experience,
//     });
//     setShowModal(true);
//   }

//   async function save() {
//     if (!form.name.trim() || !form.phone.trim()) {
//       alert("Name and phone are required.");
//       return;
//     }

//     setSaving(true);
//     try {
//       let employeeId = form.employeeId.trim();

//       if (!editing) {
//         employeeId = generateNextEmployeeId(employees);
//         const used = new Set(
//           employees.map((e) => e.employeeId.toUpperCase())
//         );
//         while (used.has(employeeId.toUpperCase())) {
//           const m = employeeId.match(/^(EMP-\d{4}-)(\d+)$/i);
//           if (!m) break;
//           const n = parseInt(m[2]!, 10) + 1;
//           employeeId = `${m[1]}${String(n).padStart(3, "0")}`;
//         }
//       } else {
//         employeeId = editing.employeeId;
//       }

//       const payload = {
//         employeeId,
//         name: form.name.trim(),
//         email: form.email.trim(),
//         phone: form.phone.trim(),
//         department: form.department,
//         designation: form.designation.trim(),
//         joiningDate:
//           form.joiningDate || new Date().toISOString().slice(0, 10),
//         status: form.status,
//         salary: Number(form.salary) || 0,
//         manager: form.manager.trim(),
//         location: form.location.trim(),
//         experience: form.experience.trim(),
//       };

//       if (editing) {
//         await updateEmployee(editing.id, payload);
//         setEmployees((current) =>
//           current.map((e) =>
//             e.id === editing.id ? { ...e, ...payload } : e
//           )
//         );
//         setSelected((current) =>
//           current && current.id === editing.id
//             ? { ...current, ...payload }
//             : current
//         );
//       } else {
//         const id = await createEmployee(payload);
//         setEmployees((current) => [
//           { id, ...payload, status: form.status },
//           ...current,
//         ]);
//       }

//       setShowModal(false);
//       setEditing(null);
//       resetForm();
//     } catch (err) {
//       console.error(err);
//       alert("Unable to save employee.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function changeStatus(id: string, next: EmployeeStatus) {
//     setEmployees((current) =>
//       current.map((e) => (e.id === id ? { ...e, status: next } : e))
//     );
//     setSelected((current) =>
//       current && current.id === id ? { ...current, status: next } : current
//     );

//     try {
//       await updateEmployee(id, { status: next });
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllEmployees();
//         setEmployees(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   async function remove(emp: Employee) {
//     if (!window.confirm(`Delete employee "${emp.name}"?`)) return;

//     setEmployees((current) => current.filter((e) => e.id !== emp.id));
//     setSelected(null);

//     try {
//       await deleteEmployeeFromDb(emp.id);
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllEmployees();
//         setEmployees(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1600px] px-5 py-5 lg:px-8">
//           {/* <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               <a
//                 href="/interior/hrms"
//                 className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-[#176b5b] hover:underline"
//               >
//                 ← Back to HRMS
//               </a>
//               <h1 className="text-2xl font-bold tracking-tight">Employees</h1>
//               <p className="mt-1 text-sm text-gray-500">
//                 Staff directory for interior operations.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <button
//               type="button"
//               onClick={openNew}
//               className="rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white hover:bg-[#125848]"
//             >
//               + Add Employee
//             </button>
//           </div> */}


//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-6 px-5 py-6 lg:px-8">
//         <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <Stat
//             label="Total"
//             value={loading ? "…" : String(employees.length)}
//           />
//           <Stat label="Active" value={loading ? "…" : String(activeCount)} />
//           <Stat
//             label="On Leave"
//             value={loading ? "…" : String(leaveCount)}
//           />
//           <Stat
//             label="Payroll"
//             value={loading ? "…" : formatCurrency(payrollTotal)}
//           />
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-4">
//           <div className="flex flex-col gap-3 lg:flex-row">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search name, ID, email, designation..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-4 py-2.5 text-sm outline-none focus:border-[#176b5b] lg:max-w-md"
//             />
//             <select
//               value={department}
//               onChange={(e) => setDepartment(e.target.value)}
//               className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {departments.map((d) => (
//                 <option key={d} value={d}>
//                   {d}
//                 </option>
//               ))}
//             </select>
//             <select
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//               className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               <option>All Status</option>
//               <option>Active</option>
//               <option>Inactive</option>
//               <option>On Leave</option>
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
//                   <th className="px-4 py-3 font-semibold">Designation</th>
//                   <th className="px-4 py-3 font-semibold">Salary</th>
//                   <th className="px-4 py-3 font-semibold">Status</th>
//                   <th className="px-4 py-3 text-right font-semibold">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-[#eeece6]">
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={6}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       Loading employees…
//                     </td>
//                   </tr>
//                 ) : (
//                   <>
//                     {filtered.map((emp) => (
//                       <tr key={emp.id} className="hover:bg-[#fafaf8]">
//                         <td className="px-5 py-4">
//                           <p className="font-semibold text-gray-900">
//                             {emp.name}
//                           </p>
//                           <p className="text-xs text-[#176b5b]">
//                             {emp.employeeId}
//                           </p>
//                           <p className="text-xs text-gray-400">{emp.phone}</p>
//                         </td>
//                         <td className="px-4 py-4 text-sm text-gray-700">
//                           {emp.department}
//                         </td>
//                         <td className="px-4 py-4 text-sm text-gray-700">
//                           {emp.designation}
//                         </td>
//                         <td className="px-4 py-4 text-sm font-semibold">
//                           {formatCurrency(emp.salary)}
//                         </td>
//                         <td className="px-4 py-4">
//                           <span
//                             className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${statusClass(
//                               emp.status
//                             )}`}
//                           >
//                             {emp.status}
//                           </span>
//                         </td>
//                         <td className="px-4 py-4 text-right">
//                           <div className="flex justify-end gap-2">
//                             <button
//                               type="button"
//                               onClick={() => setSelected(emp)}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                             >
//                               View
//                             </button>
//                             <button
//                               type="button"
//                               onClick={() => openEdit(emp)}
//                               className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600"
//                             >
//                               Edit
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                     {filtered.length === 0 && (
//                       <tr>
//                         <td
//                           colSpan={6}
//                           className="px-5 py-12 text-center text-sm text-gray-500"
//                         >
//                           No employees found.
//                         </td>
//                       </tr>
//                     )}
//                   </>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </section>

//         <p className="text-xs text-gray-400">
//           Inactive: {inactiveCount} · Data from Firestore{" "}
//           <code>interior_employees</code> / <code>employees</code>
//         </p>
//       </main>

//       {selected && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-4">
//               <div>
//                 <p className="text-xs font-semibold text-[#176b5b]">
//                   {selected.employeeId}
//                 </p>
//                 <h2 className="mt-1 text-xl font-bold">{selected.name}</h2>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setSelected(null)}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>
//             <div className="grid grid-cols-2 gap-3 p-6">
//               <Info label="Email" value={selected.email || "—"} />
//               <Info label="Phone" value={selected.phone} />
//               <Info label="Department" value={selected.department} />
//               <Info label="Designation" value={selected.designation} />
//               <Info label="Manager" value={selected.manager} />
//               <Info label="Location" value={selected.location} />
//               <Info label="Joined" value={selected.joiningDate} />
//               <Info label="Experience" value={selected.experience} />
//               <Info label="Salary" value={formatCurrency(selected.salary)} />
//             </div>
//             <div className="px-6 pb-2">
//               <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
//                 Status
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {(["Active", "Inactive", "On Leave"] as EmployeeStatus[]).map(
//                   (s) => (
//                     <button
//                       key={s}
//                       type="button"
//                       onClick={() => changeStatus(selected.id, s)}
//                       className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
//                         selected.status === s
//                           ? statusClass(s)
//                           : "border-gray-200 text-gray-600"
//                       }`}
//                     >
//                       {s}
//                     </button>
//                   )
//                 )}
//               </div>
//             </div>
//             <div className="flex gap-2 border-t border-[#e4e2da] px-6 py-4">
//               <button
//                 type="button"
//                 onClick={() => {
//                   setSelected(null);
//                   openEdit(selected);
//                 }}
//                 className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white"
//               >
//                 Edit
//               </button>
//               <button
//                 type="button"
//                 onClick={() => remove(selected)}
//                 className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-4">
//               <h2 className="text-lg font-bold">
//                 {editing ? "Edit Employee" : "Add Employee"}
//               </h2>
//               <button
//                 type="button"
//                 onClick={() => {
//                   setShowModal(false);
//                   setEditing(null);
//                 }}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>
//             <div className="grid gap-4 p-6 sm:grid-cols-2">
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Employee ID
//                 </label>
//                 <input
//                   type="text"
//                   value={form.employeeId}
//                   readOnly
//                   className="w-full cursor-not-allowed rounded-lg border border-gray-200 bg-[#f5f5f2] px-3 py-2.5 text-sm text-gray-600 outline-none"
//                 />
//                 <p className="mt-1 text-[11px] text-gray-400">
//                   {editing
//                     ? "Employee ID cannot be changed."
//                     : "Auto-generated unique ID"}
//                 </p>
//               </div>
//               <Field
//                 label="Name *"
//                 value={form.name}
//                 onChange={(v) => setForm((f) => ({ ...f, name: v }))}
//               />
//               <Field
//                 label="Email"
//                 value={form.email}
//                 onChange={(v) => setForm((f) => ({ ...f, email: v }))}
//               />
//               <Field
//                 label="Phone *"
//                 value={form.phone}
//                 onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
//               />
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Department
//                 </label>
//                 <select
//                   value={form.department}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, department: e.target.value }))
//                   }
//                   className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {departments
//                     .filter((d) => d !== "All Departments")
//                     .map((d) => (
//                       <option key={d}>{d}</option>
//                     ))}
//                 </select>
//               </div>
//               <Field
//                 label="Designation"
//                 value={form.designation}
//                 onChange={(v) => setForm((f) => ({ ...f, designation: v }))}
//               />
//               <Field
//                 label="Joining Date"
//                 type="date"
//                 value={form.joiningDate}
//                 onChange={(v) => setForm((f) => ({ ...f, joiningDate: v }))}
//               />
//               <Field
//                 label="Salary"
//                 type="number"
//                 value={form.salary}
//                 onChange={(v) => setForm((f) => ({ ...f, salary: v }))}
//               />

//               {/* Manager — employees only */}
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Manager
//                 </label>
//                 <select
//                   value={form.manager}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, manager: e.target.value }))
//                   }
//                   className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   <option value="">— No manager —</option>
//                   {managerOptions.map((emp) => (
//                     <option key={emp.id} value={emp.name}>
//                       {emp.name}
//                       {emp.employeeId ? ` (${emp.employeeId})` : ""}
//                       {emp.designation && emp.designation !== "—"
//                         ? ` · ${emp.designation}`
//                         : ""}
//                     </option>
//                   ))}
//                 </select>
//                 {employees.length === 0 && (
//                   <p className="mt-1 text-[11px] text-gray-400">
//                     Add employees first to assign a manager.
//                   </p>
//                 )}
//               </div>

//               <Field
//                 label="Location"
//                 value={form.location}
//                 onChange={(v) => setForm((f) => ({ ...f, location: v }))}
//               />
//               <Field
//                 label="Experience"
//                 value={form.experience}
//                 onChange={(v) => setForm((f) => ({ ...f, experience: v }))}
//               />
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Status
//                 </label>
//                 <select
//                   value={form.status}
//                   onChange={(e) =>
//                     setForm((f) => ({
//                       ...f,
//                       status: e.target.value as EmployeeStatus,
//                     }))
//                   }
//                   className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   <option>Active</option>
//                   <option>Inactive</option>
//                   <option>On Leave</option>
//                 </select>
//               </div>
//             </div>
//             <div className="flex justify-end gap-3 border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
//               <button
//                 type="button"
//                 onClick={() => {
//                   setShowModal(false);
//                   setEditing(null);
//                 }}
//                 className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 disabled={saving}
//                 onClick={save}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
//               >
//                 {saving ? "Saving…" : editing ? "Save" : "Add"}
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
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//       <p className="text-sm text-gray-500">{label}</p>
//       <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
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
  getAllEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee as deleteEmployeeFromDb,
  generateNextEmployeeId,
  type InteriorEmployee,
} from "@/modules/interior/services/employeeService";
import { Timestamp } from "firebase/firestore";
import { Plus } from "lucide-react";

type EmployeeStatus = "Active" | "Inactive" | "On Leave";

type Employee = {
  id: string;
  employeeId: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  joiningDate: string;
  status: EmployeeStatus;
  salary: number;
  manager: string;
  location: string;
  experience: string;
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

function formatCurrency(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function statusClass(status: EmployeeStatus) {
  if (status === "Active")
    return "bg-green-50 text-green-700 border-green-200";
  if (status === "On Leave")
    return "bg-amber-50 text-amber-700 border-amber-200";
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

function normalizeStatus(raw?: string): EmployeeStatus {
  const s = (raw || "Active").toLowerCase();
  if (s.includes("leave")) return "On Leave";
  if (s.includes("inactive") || s.includes("resign")) return "Inactive";
  return "Active";
}

function mapToUi(e: InteriorEmployee): Employee {
  return {
    id: e.id,
    employeeId: e.employeeId || `EMP-${e.id.slice(0, 6).toUpperCase()}`,
    name: e.name || "Unknown",
    email: e.email || "",
    phone: e.phone || "—",
    department: e.department || "Other",
    designation: e.designation || "—",
    joiningDate: e.joiningDate || toDateString(e.createdAt) || "—",
    status: normalizeStatus(e.status),
    salary: Number(e.salary ?? 0) || 0,
    manager: e.manager || "—",
    location: e.location || "—",
    experience: e.experience || "—",
  };
}

export default function InteriorEmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [status, setStatus] = useState("All Status");

  const [selected, setSelected] = useState<Employee | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<Employee | null>(null);

  const [form, setForm] = useState({
    employeeId: "",
    name: "",
    email: "",
    phone: "",
    department: "Interior Design",
    designation: "",
    joiningDate: "",
    status: "Active" as EmployeeStatus,
    salary: "",
    manager: "",
    location: "",
    experience: "",
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const data = await getAllEmployees();
        if (cancelled) return;
        setEmployees(data.map(mapToUi));
      } catch (err) {
        console.error(err);
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
    if (!selected && !showModal) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [selected, showModal]);

  const filtered = useMemo(() => {
    const text = search.toLowerCase().trim();

    return employees.filter((employee) => {
      const matchesSearch =
        !text ||
        employee.name.toLowerCase().includes(text) ||
        employee.employeeId.toLowerCase().includes(text) ||
        employee.email.toLowerCase().includes(text) ||
        employee.designation.toLowerCase().includes(text);

      const matchesDepartment =
        department === "All Departments" ||
        employee.department === department;

      const matchesStatus =
        status === "All Status" || employee.status === status;

      return matchesSearch && matchesDepartment && matchesStatus;
    });
  }, [employees, search, department, status]);

  const managerOptions = useMemo(() => {
    return employees
      .filter((e) => {
        if (editing && e.id === editing.id) return false;
        return e.status !== "Inactive";
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [employees, editing]);

  const activeCount = employees.filter((e) => e.status === "Active").length;
  const inactiveCount = employees.filter((e) => e.status === "Inactive").length;
  const leaveCount = employees.filter((e) => e.status === "On Leave").length;
  const payrollTotal = employees.reduce((s, e) => s + e.salary, 0);

  function resetForm(nextId = "") {
    setForm({
      employeeId: nextId,
      name: "",
      email: "",
      phone: "",
      department: "Interior Design",
      designation: "",
      joiningDate: new Date().toISOString().slice(0, 10),
      status: "Active",
      salary: "",
      manager: "",
      location: "",
      experience: "",
    });
  }

  function openNew() {
    setEditing(null);
    const nextId = generateNextEmployeeId(employees);
    resetForm(nextId);
    setShowModal(true);
  }

  function openEdit(emp: Employee) {
    setEditing(emp);
    setForm({
      employeeId: emp.employeeId,
      name: emp.name,
      email: emp.email,
      phone: emp.phone === "—" ? "" : emp.phone,
      department: emp.department,
      designation: emp.designation === "—" ? "" : emp.designation,
      joiningDate: emp.joiningDate === "—" ? "" : emp.joiningDate,
      status: emp.status,
      salary: String(emp.salary || ""),
      manager: emp.manager === "—" ? "" : emp.manager,
      location: emp.location === "—" ? "" : emp.location,
      experience: emp.experience === "—" ? "" : emp.experience,
    });
    setShowModal(true);
  }

  async function save() {
    if (!form.name.trim() || !form.phone.trim()) {
      alert("Name and phone are required.");
      return;
    }

    setSaving(true);
    try {
      let employeeId = form.employeeId.trim();

      if (!editing) {
        employeeId = generateNextEmployeeId(employees);
        const used = new Set(
          employees.map((e) => e.employeeId.toUpperCase())
        );
        while (used.has(employeeId.toUpperCase())) {
          const m = employeeId.match(/^(EMP-\d{4}-)(\d+)$/i);
          if (!m) break;
          const n = parseInt(m[2]!, 10) + 1;
          employeeId = `${m[1]}${String(n).padStart(3, "0")}`;
        }
      } else {
        employeeId = editing.employeeId;
      }

      const payload = {
        employeeId,
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        department: form.department,
        designation: form.designation.trim(),
        joiningDate:
          form.joiningDate || new Date().toISOString().slice(0, 10),
        status: form.status,
        salary: Number(form.salary) || 0,
        manager: form.manager.trim(),
        location: form.location.trim(),
        experience: form.experience.trim(),
      };

      if (editing) {
        await updateEmployee(editing.id, payload);
        setEmployees((current) =>
          current.map((e) =>
            e.id === editing.id ? { ...e, ...payload } : e
          )
        );
        setSelected((current) =>
          current && current.id === editing.id
            ? { ...current, ...payload }
            : current
        );
      } else {
        const id = await createEmployee(payload);
        setEmployees((current) => [
          { id, ...payload, status: form.status },
          ...current,
        ]);
      }

      setShowModal(false);
      setEditing(null);
      resetForm();
    } catch (err) {
      console.error(err);
      alert("Unable to save employee.");
    } finally {
      setSaving(false);
    }
  }

  async function changeStatus(id: string, next: EmployeeStatus) {
    setEmployees((current) =>
      current.map((e) => (e.id === id ? { ...e, status: next } : e))
    );
    setSelected((current) =>
      current && current.id === id ? { ...current, status: next } : current
    );

    try {
      await updateEmployee(id, { status: next });
    } catch (err) {
      console.error(err);
      try {
        const data = await getAllEmployees();
        setEmployees(data.map(mapToUi));
      } catch {
        /* ignore */
      }
    }
  }

  async function remove(emp: Employee) {
    if (!window.confirm(`Delete employee "${emp.name}"?`)) return;

    setEmployees((current) => current.filter((e) => e.id !== emp.id));
    setSelected(null);

    try {
      await deleteEmployeeFromDb(emp.id);
    } catch (err) {
      console.error(err);
      try {
        const data = await getAllEmployees();
        setEmployees(data.map(mapToUi));
      } catch {
        /* ignore */
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
      {/* Header: title + Add Employee beside */}
      <div className="border-b border-[#e4e2da] bg-white">
        <div className="mx-auto max-w-[1600px] px-3 py-4 sm:px-5 sm:py-5 lg:px-8">
          <div className="flex items-start justify-between gap-3 sm:items-center">
            <div className="min-w-0 flex-1">
              <Link
                href="/interior/hrms"
                className="mb-2 inline-flex text-xs font-semibold text-[#176b5b] hover:underline sm:text-sm"
              >
                ← Back to HRMS
              </Link>
              <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
                Employees
              </h1>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Staff directory for interior operations.
                {loading && (
                  <span className="ml-2 text-[#176b5b]">Loading…</span>
                )}
              </p>
            </div>
            <button
              type="button"
              onClick={openNew}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125848] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
            >
              <Plus size={16} strokeWidth={2.5} />
              <span className="hidden sm:inline">Add Employee</span>
              <span className="sm:hidden">Add</span>
            </button>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[1600px] space-y-4 px-3 py-4 sm:space-y-6 sm:px-5 sm:py-6 lg:px-8">
        <section className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
          <Stat
            label="Total"
            value={loading ? "…" : String(employees.length)}
          />
          <Stat label="Active" value={loading ? "…" : String(activeCount)} />
          <Stat
            label="On Leave"
            value={loading ? "…" : String(leaveCount)}
          />
          <Stat
            label="Payroll"
            value={loading ? "…" : formatCurrency(payrollTotal)}
          />
        </section>

        <section className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, ID, email, designation..."
              className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] sm:max-w-md sm:flex-1"
            />
            <div className="flex gap-2">
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
              >
                {departments.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
              >
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>On Leave</option>
              </select>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
          {/* Desktop table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[900px] text-left">
              <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
                <tr>
                  <th className="px-5 py-3 font-semibold">Employee</th>
                  <th className="px-4 py-3 font-semibold">Department</th>
                  <th className="px-4 py-3 font-semibold">Designation</th>
                  <th className="px-4 py-3 font-semibold">Salary</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 text-right font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eeece6]">
                {loading ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-5 py-12 text-center text-sm text-gray-500"
                    >
                      Loading employees…
                    </td>
                  </tr>
                ) : filtered.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-5 py-12 text-center text-sm text-gray-500"
                    >
                      No employees found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((emp) => (
                    <tr key={emp.id} className="hover:bg-[#fafaf8]">
                      <td className="px-5 py-4">
                        <p className="font-semibold text-gray-900">
                          {emp.name}
                        </p>
                        <p className="text-xs text-[#176b5b]">
                          {emp.employeeId}
                        </p>
                        <p className="text-xs text-gray-400">{emp.phone}</p>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        {emp.department}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        {emp.designation}
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold">
                        {formatCurrency(emp.salary)}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${statusClass(
                            emp.status
                          )}`}
                        >
                          {emp.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => setSelected(emp)}
                            className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
                          >
                            View
                          </button>
                          <button
                            type="button"
                            onClick={() => openEdit(emp)}
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
                Loading employees…
              </p>
            ) : filtered.length === 0 ? (
              <p className="py-10 text-center text-sm text-gray-500">
                No employees found.
              </p>
            ) : (
              filtered.map((emp) => (
                <article
                  key={emp.id}
                  className="rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900">{emp.name}</p>
                      <p className="text-xs text-[#176b5b]">{emp.employeeId}</p>
                      <p className="mt-0.5 text-xs text-gray-500">
                        {emp.department} · {emp.designation}
                      </p>
                      <p className="mt-0.5 text-xs text-gray-400">{emp.phone}</p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium ${statusClass(
                        emp.status
                      )}`}
                    >
                      {emp.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-gray-900">
                    {formatCurrency(emp.salary)}
                  </p>
                  <div className="mt-3 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setSelected(emp)}
                      className="flex-1 rounded-lg border border-gray-200 bg-white py-2 text-xs font-medium text-gray-700"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      onClick={() => openEdit(emp)}
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

        <p className="text-xs text-gray-400">
          Inactive: {inactiveCount} · Data from Firestore
        </p>
      </main>

      {/* Detail modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 sm:p-4">
          <div className="max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="sticky top-0 flex items-center justify-between border-b border-[#e4e2da] bg-white px-4 py-4 sm:px-6">
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[#176b5b]">
                  {selected.employeeId}
                </p>
                <h2 className="mt-1 truncate text-lg font-bold sm:text-xl">
                  {selected.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="shrink-0 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2 p-4 sm:gap-3 sm:p-6">
              <Info label="Email" value={selected.email || "—"} />
              <Info label="Phone" value={selected.phone} />
              <Info label="Department" value={selected.department} />
              <Info label="Designation" value={selected.designation} />
              <Info label="Manager" value={selected.manager} />
              <Info label="Location" value={selected.location} />
              <Info label="Joined" value={selected.joiningDate} />
              <Info label="Experience" value={selected.experience} />
              <Info label="Salary" value={formatCurrency(selected.salary)} />
            </div>
            <div className="px-4 pb-2 sm:px-6">
              <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
                Status
              </p>
              <div className="flex flex-wrap gap-2">
                {(["Active", "Inactive", "On Leave"] as EmployeeStatus[]).map(
                  (s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => changeStatus(selected.id, s)}
                      className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
                        selected.status === s
                          ? statusClass(s)
                          : "border-gray-200 text-gray-600"
                      }`}
                    >
                      {s}
                    </button>
                  )
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 border-t border-[#e4e2da] px-4 py-4 sm:px-6">
              <button
                type="button"
                onClick={() => {
                  setSelected(null);
                  openEdit(selected);
                }}
                className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => remove(selected)}
                className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add / Edit modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 sm:p-4">
          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="sticky top-0 flex items-center justify-between border-b border-[#e4e2da] bg-white px-4 py-4 sm:px-6">
              <h2 className="text-base font-bold sm:text-lg">
                {editing ? "Edit Employee" : "Add Employee"}
              </h2>
              <button
                type="button"
                onClick={() => {
                  setShowModal(false);
                  setEditing(null);
                }}
                className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>
            <div className="grid gap-3 p-4 sm:grid-cols-2 sm:gap-4 sm:p-6">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Employee ID
                </label>
                <input
                  type="text"
                  value={form.employeeId}
                  readOnly
                  className="w-full cursor-not-allowed rounded-lg border border-gray-200 bg-[#f5f5f2] px-3 py-2.5 text-sm text-gray-600 outline-none"
                />
                <p className="mt-1 text-[11px] text-gray-400">
                  {editing
                    ? "Employee ID cannot be changed."
                    : "Auto-generated unique ID"}
                </p>
              </div>
              <Field
                label="Name *"
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
              />
              <Field
                label="Email"
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
              />
              <Field
                label="Phone *"
                value={form.phone}
                onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
              />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Department
                </label>
                <select
                  value={form.department}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, department: e.target.value }))
                  }
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                >
                  {departments
                    .filter((d) => d !== "All Departments")
                    .map((d) => (
                      <option key={d}>{d}</option>
                    ))}
                </select>
              </div>
              <Field
                label="Designation"
                value={form.designation}
                onChange={(v) => setForm((f) => ({ ...f, designation: v }))}
              />
              <Field
                label="Joining Date"
                type="date"
                value={form.joiningDate}
                onChange={(v) => setForm((f) => ({ ...f, joiningDate: v }))}
              />
              <Field
                label="Salary"
                type="number"
                value={form.salary}
                onChange={(v) => setForm((f) => ({ ...f, salary: v }))}
              />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Manager
                </label>
                <select
                  value={form.manager}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, manager: e.target.value }))
                  }
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                >
                  <option value="">— No manager —</option>
                  {managerOptions.map((emp) => (
                    <option key={emp.id} value={emp.name}>
                      {emp.name}
                      {emp.employeeId ? ` (${emp.employeeId})` : ""}
                      {emp.designation && emp.designation !== "—"
                        ? ` · ${emp.designation}`
                        : ""}
                    </option>
                  ))}
                </select>
              </div>
              <Field
                label="Location"
                value={form.location}
                onChange={(v) => setForm((f) => ({ ...f, location: v }))}
              />
              <Field
                label="Experience"
                value={form.experience}
                onChange={(v) => setForm((f) => ({ ...f, experience: v }))}
              />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  value={form.status}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      status: e.target.value as EmployeeStatus,
                    }))
                  }
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                >
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>On Leave</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col-reverse gap-2 border-t border-[#e4e2da] bg-[#fafaf8] px-4 py-4 sm:flex-row sm:justify-end sm:gap-3 sm:px-6">
              <button
                type="button"
                onClick={() => {
                  setShowModal(false);
                  setEditing(null);
                }}
                className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={saving}
                onClick={save}
                className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
              >
                {saving ? "Saving…" : editing ? "Save" : "Add"}
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
    <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5">
      <p className="text-xs text-gray-500 sm:text-sm">{label}</p>
      <p className="mt-1.5 truncate text-lg font-bold text-gray-900 sm:mt-2 sm:text-2xl">
        {value}
      </p>
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
