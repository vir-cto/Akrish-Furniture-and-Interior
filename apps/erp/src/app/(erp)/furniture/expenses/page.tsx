// "use client";

// import { useMemo, useState } from "react";

// type ExpenseStatus = "Paid" | "Pending" | "Partially Paid";

// type Expense = {
//   id: number;
//   expenseNo: string;
//   date: string;
//   category: string;
//   description: string;
//   vendor: string;
//   amount: number;
//   paidAmount: number;
//   paymentMode: string;
//   status: ExpenseStatus;
//   notes: string;
// };

// const categories = [
//   "Raw Materials",
//   "Transport",
//   "Electricity",
//   "Rent",
//   "Salary",
//   "Marketing",
//   "Maintenance",
//   "Office",
//   "Tools & Equipment",
//   "Other",
// ];

// const paymentModes = ["Cash", "UPI", "Bank Transfer", "Card", "Cheque"];

// const initialExpenses: Expense[] = [
//   {
//     id: 1,
//     expenseNo: "EXP-001",
//     date: "2026-10-06",
//     category: "Raw Materials",
//     description: "Plywood and MDF sheets",
//     vendor: "Sri Sai Plywoods",
//     amount: 28500,
//     paidAmount: 28500,
//     paymentMode: "Bank Transfer",
//     status: "Paid",
//     notes: "Kitchen project materials",
//   },
//   {
//     id: 2,
//     expenseNo: "EXP-002",
//     date: "2026-10-05",
//     category: "Transport",
//     description: "Material transportation",
//     vendor: "Local Transport",
//     amount: 6500,
//     paidAmount: 4000,
//     paymentMode: "Cash",
//     status: "Partially Paid",
//     notes: "",
//   },
//   {
//     id: 3,
//     expenseNo: "EXP-003",
//     date: "2026-10-04",
//     category: "Electricity",
//     description: "Workshop electricity bill",
//     vendor: "Electricity Department",
//     amount: 8200,
//     paidAmount: 8200,
//     paymentMode: "UPI",
//     status: "Paid",
//     notes: "",
//   },
//   {
//     id: 4,
//     expenseNo: "EXP-004",
//     date: "2026-10-03",
//     category: "Maintenance",
//     description: "Wood cutting machine service",
//     vendor: "Tech Machine Services",
//     amount: 12000,
//     paidAmount: 0,
//     paymentMode: "Bank Transfer",
//     status: "Pending",
//     notes: "Payment after service completion",
//   },
//   {
//     id: 5,
//     expenseNo: "EXP-005",
//     date: "2026-10-01",
//     category: "Marketing",
//     description: "Social media advertisement",
//     vendor: "Digital Marketing Agency",
//     amount: 15000,
//     paidAmount: 15000,
//     paymentMode: "Card",
//     status: "Paid",
//     notes: "October campaign",
//   },
//   {
//     id: 6,
//     expenseNo: "EXP-006",
//     date: "2026-09-30",
//     category: "Office",
//     description: "Printer paper and stationery",
//     vendor: "Office Mart",
//     amount: 3200,
//     paidAmount: 3200,
//     paymentMode: "UPI",
//     status: "Paid",
//     notes: "",
//   },
//   {
//     id: 7,
//     expenseNo: "EXP-007",
//     date: "2026-09-28",
//     category: "Tools & Equipment",
//     description: "Drill machine and accessories",
//     vendor: "Build Tools",
//     amount: 9800,
//     paidAmount: 5000,
//     paymentMode: "Cash",
//     status: "Partially Paid",
//     notes: "",
//   },
// ];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function formatDate(date: string) {
//   const value = new Date(`${date}T00:00:00`);

//   return value.toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });
// }

// function getStatusClasses(status: ExpenseStatus) {
//   if (status === "Paid") {
//     return "bg-emerald-50 text-emerald-700 border-emerald-200";
//   }

//   if (status === "Pending") {
//     return "bg-red-50 text-red-700 border-red-200";
//   }

//   return "bg-amber-50 text-amber-700 border-amber-200";
// }

// function SummaryCard({
//   title,
//   value,
//   subtitle,
//   icon,
//   iconClass,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   icon: string;
//   iconClass: string;
// }) {
//   return (
//     <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//       <div className="flex items-start justify-between">
//         <div>
//           <p className="text-sm font-medium text-gray-500">{title}</p>
//           <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
//           <p className="mt-1 text-xs text-gray-500">{subtitle}</p>
//         </div>

//         <div
//           className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl ${iconClass}`}
//         >
//           {icon}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function ExpensesPage() {
//   const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);

//   const [search, setSearch] = useState("");
//   const [categoryFilter, setCategoryFilter] = useState("All");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [dateFilter, setDateFilter] = useState("All");

//   const [showAddModal, setShowAddModal] = useState(false);
//   const [selectedExpense, setSelectedExpense] = useState<Expense | null>(
//     null
//   );

//   const [newExpense, setNewExpense] = useState({
//     date: "2026-10-06",
//     category: "Raw Materials",
//     description: "",
//     vendor: "",
//     amount: "",
//     paidAmount: "",
//     paymentMode: "Cash",
//     notes: "",
//   });

//   const today = "2026-10-06";

//   const filteredExpenses = useMemo(() => {
//     return expenses.filter((expense) => {
//       const searchValue = search.toLowerCase().trim();

//       const matchesSearch =
//         !searchValue ||
//         expense.expenseNo.toLowerCase().includes(searchValue) ||
//         expense.description.toLowerCase().includes(searchValue) ||
//         expense.vendor.toLowerCase().includes(searchValue) ||
//         expense.category.toLowerCase().includes(searchValue);

//       const matchesCategory =
//         categoryFilter === "All" || expense.category === categoryFilter;

//       const matchesStatus =
//         statusFilter === "All" || expense.status === statusFilter;

//       let matchesDate = true;

//       if (dateFilter === "Today") {
//         matchesDate = expense.date === today;
//       }

//       if (dateFilter === "This Week") {
//         const expenseDate = new Date(`${expense.date}T00:00:00`);
//         const todayDate = new Date(`${today}T00:00:00`);

//         const difference =
//           (todayDate.getTime() - expenseDate.getTime()) /
//           (1000 * 60 * 60 * 24);

//         matchesDate = difference >= 0 && difference <= 6;
//       }

//       if (dateFilter === "This Month") {
//         matchesDate = expense.date.startsWith("2026-10");
//       }

//       return (
//         matchesSearch &&
//         matchesCategory &&
//         matchesStatus &&
//         matchesDate
//       );
//     });
//   }, [expenses, search, categoryFilter, statusFilter, dateFilter]);

//   const totalExpenses = expenses.reduce(
//     (total, expense) => total + expense.amount,
//     0
//   );

//   const totalPaid = expenses.reduce(
//     (total, expense) => total + expense.paidAmount,
//     0
//   );

//   const totalPending = totalExpenses - totalPaid;

//   const thisMonthExpenses = expenses
//     .filter((expense) => expense.date.startsWith("2026-10"))
//     .reduce((total, expense) => total + expense.amount, 0);

//   const pendingCount = expenses.filter(
//     (expense) => expense.status !== "Paid"
//   ).length;

//   const categoryTotals = categories
//     .map((category) => ({
//       category,
//       amount: expenses
//         .filter((expense) => expense.category === category)
//         .reduce((sum, expense) => sum + expense.amount, 0),
//     }))
//     .filter((item) => item.amount > 0)
//     .sort((a, b) => b.amount - a.amount);

//   const maxCategoryAmount = Math.max(
//     ...categoryTotals.map((item) => item.amount),
//     1
//   );

//   function calculateStatus(
//     amount: number,
//     paidAmount: number
//   ): ExpenseStatus {
//     if (paidAmount <= 0) return "Pending";
//     if (paidAmount >= amount) return "Paid";
//     return "Partially Paid";
//   }

//   function handleAddExpense() {
//     const amount = Number(newExpense.amount);
//     const paidAmount = Number(newExpense.paidAmount || 0);

//     if (
//       !newExpense.description.trim() ||
//       !newExpense.vendor.trim() ||
//       !amount ||
//       amount <= 0
//     ) {
//       alert("Please enter description, vendor and a valid amount.");
//       return;
//     }

//     if (paidAmount < 0 || paidAmount > amount) {
//       alert("Paid amount cannot be greater than the total amount.");
//       return;
//     }

//     const nextId =
//       expenses.length > 0
//         ? Math.max(...expenses.map((expense) => expense.id)) + 1
//         : 1;

//     const expense: Expense = {
//       id: nextId,
//       expenseNo: `EXP-${String(nextId).padStart(3, "0")}`,
//       date: newExpense.date,
//       category: newExpense.category,
//       description: newExpense.description.trim(),
//       vendor: newExpense.vendor.trim(),
//       amount,
//       paidAmount,
//       paymentMode: newExpense.paymentMode,
//       status: calculateStatus(amount, paidAmount),
//       notes: newExpense.notes.trim(),
//     };

//     setExpenses((current) => [expense, ...current]);

//     setNewExpense({
//       date: today,
//       category: "Raw Materials",
//       description: "",
//       vendor: "",
//       amount: "",
//       paidAmount: "",
//       paymentMode: "Cash",
//       notes: "",
//     });

//     setShowAddModal(false);
//   }

//   function markAsPaid(expenseId: number) {
//     setExpenses((current) =>
//       current.map((expense) =>
//         expense.id === expenseId
//           ? {
//               ...expense,
//               paidAmount: expense.amount,
//               status: "Paid",
//             }
//           : expense
//       )
//     );

//     setSelectedExpense(null);
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-gray-900">
//       {/* Header */}
//       <header className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 lg:px-8">
//           <div className="flex items-center gap-3">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#9a5b18] text-lg font-bold text-white">
//               A
//             </div>

//             <div>
//               <p className="text-sm font-semibold text-gray-900">
//                 Akrish
//               </p>
//               <p className="text-xs text-gray-500">
//                 Furniture and Interior
//               </p>
//             </div>
//           </div>

//           <div className="hidden items-center gap-2 rounded-xl bg-[#f7f7f4] px-4 py-2 text-sm text-gray-600 sm:flex">
//             <span>₹</span>
//             <span>Finance</span>
//             <span className="text-gray-400">/</span>
//             <span className="font-medium text-gray-900">Expenses</span>
//           </div>
//         </div>
//       </header>

//       <main className="mx-auto max-w-[1600px] px-5 py-7 lg:px-8">
//         {/* Page heading */}
//         <div className="mb-7 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
//           <div>
//             <p className="mb-1 text-sm font-medium text-[#176b5b]">
//               Finance Management
//             </p>

//             <h1 className="text-3xl font-bold tracking-tight text-gray-900">
//               Expenses
//             </h1>

//             <p className="mt-1 text-sm text-gray-500">
//               Track business expenses, payments and outstanding amounts.
//             </p>
//           </div>

//           <button
//             onClick={() => setShowAddModal(true)}
//             className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#125748]"
//           >
//             <span className="text-lg">+</span>
//             Add Expense
//           </button>
//         </div>

//         {/* Summary cards */}
//         <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <SummaryCard
//             title="Total Expenses"
//             value={formatCurrency(totalExpenses)}
//             subtitle={`${expenses.length} expense records`}
//             icon="₹"
//             iconClass="bg-[#eef7f4] text-[#176b5b]"
//           />

//           <SummaryCard
//             title="Paid Amount"
//             value={formatCurrency(totalPaid)}
//             subtitle="Amount already paid"
//             icon="✓"
//             iconClass="bg-emerald-50 text-emerald-700"
//           />

//           <SummaryCard
//             title="Pending Amount"
//             value={formatCurrency(totalPending)}
//             subtitle={`${pendingCount} payment${pendingCount !== 1 ? "s" : ""} pending`}
//             icon="!"
//             iconClass="bg-amber-50 text-amber-700"
//           />

//           <SummaryCard
//             title="This Month"
//             value={formatCurrency(thisMonthExpenses)}
//             subtitle="October 2026 expenses"
//             icon="▣"
//             iconClass="bg-blue-50 text-blue-700"
//           />
//         </div>

//         {/* Main content */}
//         <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
//           <section className="min-w-0 rounded-2xl border border-[#e4e2da] bg-white shadow-sm">
//             {/* Filters */}
//             <div className="border-b border-[#e4e2da] p-5">
//               <div className="flex flex-col gap-4">
//                 <div className="relative">
//                   <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
//                     ⌕
//                   </span>

//                   <input
//                     value={search}
//                     onChange={(event) => setSearch(event.target.value)}
//                     placeholder="Search expense, vendor or category..."
//                     className="w-full rounded-xl border border-gray-200 bg-[#fafaf8] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                   />
//                 </div>

//                 <div className="grid gap-3 sm:grid-cols-3">
//                   <select
//                     value={categoryFilter}
//                     onChange={(event) =>
//                       setCategoryFilter(event.target.value)
//                     }
//                     className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="All">All Categories</option>

//                     {categories.map((category) => (
//                       <option key={category} value={category}>
//                         {category}
//                       </option>
//                     ))}
//                   </select>

//                   <select
//                     value={statusFilter}
//                     onChange={(event) =>
//                       setStatusFilter(event.target.value)
//                     }
//                     className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="All">All Status</option>
//                     <option value="Paid">Paid</option>
//                     <option value="Partially Paid">Partially Paid</option>
//                     <option value="Pending">Pending</option>
//                   </select>

//                   <select
//                     value={dateFilter}
//                     onChange={(event) => setDateFilter(event.target.value)}
//                     className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="All">All Dates</option>
//                     <option value="Today">Today</option>
//                     <option value="This Week">This Week</option>
//                     <option value="This Month">This Month</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Table */}
//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[950px]">
//                 <thead>
//                   <tr className="border-b border-[#e4e2da] bg-[#fafaf8] text-left">
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Expense
//                     </th>

//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Date
//                     </th>

//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Category
//                     </th>

//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Vendor
//                     </th>

//                     <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Amount
//                     </th>

//                     <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Paid
//                     </th>

//                     <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Status
//                     </th>

//                     <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Action
//                     </th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {filteredExpenses.map((expense) => (
//                     <tr
//                       key={expense.id}
//                       className="border-b border-[#efeee9] transition hover:bg-[#fafaf8]"
//                     >
//                       <td className="px-5 py-4">
//                         <div>
//                           <p className="text-xs font-semibold text-[#176b5b]">
//                             {expense.expenseNo}
//                           </p>

//                           <p className="mt-1 font-medium text-gray-900">
//                             {expense.description}
//                           </p>
//                         </div>
//                       </td>

//                       <td className="px-5 py-4 text-sm text-gray-600">
//                         {formatDate(expense.date)}
//                       </td>

//                       <td className="px-5 py-4">
//                         <span className="rounded-lg bg-gray-100 px-2.5 py-1.5 text-xs font-medium text-gray-700">
//                           {expense.category}
//                         </span>
//                       </td>

//                       <td className="px-5 py-4 text-sm text-gray-600">
//                         {expense.vendor}
//                       </td>

//                       <td className="px-5 py-4 text-right text-sm font-semibold text-gray-900">
//                         {formatCurrency(expense.amount)}
//                       </td>

//                       <td className="px-5 py-4 text-right text-sm text-gray-700">
//                         {formatCurrency(expense.paidAmount)}
//                       </td>

//                       <td className="px-5 py-4 text-center">
//                         <span
//                           className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusClasses(
//                             expense.status
//                           )}`}
//                         >
//                           {expense.status}
//                         </span>
//                       </td>

//                       <td className="px-5 py-4 text-right">
//                         <button
//                           onClick={() => setSelectedExpense(expense)}
//                           className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:border-[#176b5b] hover:text-[#176b5b]"
//                         >
//                           View
//                         </button>
//                       </td>
//                     </tr>
//                   ))}

//                   {filteredExpenses.length === 0 && (
//                     <tr>
//                       <td colSpan={8} className="px-5 py-14 text-center">
//                         <div className="text-3xl">⌕</div>

//                         <p className="mt-3 font-semibold text-gray-900">
//                           No expenses found
//                         </p>

//                         <p className="mt-1 text-sm text-gray-500">
//                           Try changing your search or filters.
//                         </p>
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>

//             {/* Table footer */}
//             <div className="flex items-center justify-between border-t border-[#e4e2da] px-5 py-4">
//               <p className="text-sm text-gray-500">
//                 Showing{" "}
//                 <span className="font-semibold text-gray-900">
//                   {filteredExpenses.length}
//                 </span>{" "}
//                 of{" "}
//                 <span className="font-semibold text-gray-900">
//                   {expenses.length}
//                 </span>{" "}
//                 expenses
//               </p>

//               <p className="text-sm text-gray-500">
//                 Filtered total:{" "}
//                 <span className="font-semibold text-gray-900">
//                   {formatCurrency(
//                     filteredExpenses.reduce(
//                       (sum, expense) => sum + expense.amount,
//                       0
//                     )
//                   )}
//                 </span>
//               </p>
//             </div>
//           </section>

//           {/* Right panel */}
//           <aside className="space-y-6">
//             <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//               <div className="mb-5">
//                 <h2 className="font-semibold text-gray-900">
//                   Expense Breakdown
//                 </h2>

//                 <p className="mt-1 text-xs text-gray-500">
//                   Spending by category
//                 </p>
//               </div>

//               <div className="space-y-5">
//                 {categoryTotals.map((item) => (
//                   <div key={item.category}>
//                     <div className="mb-2 flex items-center justify-between gap-3">
//                       <span className="text-sm text-gray-600">
//                         {item.category}
//                       </span>

//                       <span className="text-sm font-semibold text-gray-900">
//                         {formatCurrency(item.amount)}
//                       </span>
//                     </div>

//                     <div className="h-2 overflow-hidden rounded-full bg-gray-100">
//                       <div
//                         className="h-full rounded-full bg-[#176b5b]"
//                         style={{
//                           width: `${(item.amount / maxCategoryAmount) * 100}%`,
//                         }}
//                       />
//                     </div>
//                   </div>
//                 ))}

//                 {categoryTotals.length === 0 && (
//                   <p className="text-sm text-gray-500">
//                     No expense data available.
//                   </p>
//                 )}
//               </div>
//             </div>

//             <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//               <div className="mb-4 flex items-center justify-between">
//                 <div>
//                   <h2 className="font-semibold text-gray-900">
//                     Pending Payments
//                   </h2>

//                   <p className="mt-1 text-xs text-gray-500">
//                     Expenses that need payment
//                   </p>
//                 </div>

//                 <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700">
//                   {pendingCount}
//                 </span>
//               </div>

//               <div className="space-y-3">
//                 {expenses
//                   .filter((expense) => expense.status !== "Paid")
//                   .map((expense) => (
//                     <button
//                       key={expense.id}
//                       onClick={() => setSelectedExpense(expense)}
//                       className="w-full rounded-xl border border-gray-100 bg-[#fafaf8] p-3 text-left transition hover:border-[#d7ddd9] hover:bg-white"
//                     >
//                       <div className="flex items-start justify-between gap-3">
//                         <div className="min-w-0">
//                           <p className="truncate text-sm font-medium text-gray-900">
//                             {expense.vendor}
//                           </p>

//                           <p className="mt-1 truncate text-xs text-gray-500">
//                             {expense.description}
//                           </p>
//                         </div>

//                         <span className="shrink-0 text-sm font-semibold text-red-600">
//                           {formatCurrency(
//                             expense.amount - expense.paidAmount
//                           )}
//                         </span>
//                       </div>
//                     </button>
//                   ))}

//                 {pendingCount === 0 && (
//                   <div className="rounded-xl bg-emerald-50 p-4 text-center">
//                     <p className="text-sm font-medium text-emerald-700">
//                       All expenses are paid.
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </aside>
//         </div>
//       </main>

//       {/* Add Expense Modal */}
//       {showAddModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-5">
//               <div>
//                 <h2 className="text-xl font-bold text-gray-900">
//                   Add Expense
//                 </h2>

//                 <p className="mt-1 text-sm text-gray-500">
//                   Record a new business expense.
//                 </p>
//               </div>

//               <button
//                 onClick={() => setShowAddModal(false)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="grid gap-4 p-6 sm:grid-cols-2">
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Date
//                 </label>

//                 <input
//                   type="date"
//                   value={newExpense.date}
//                   onChange={(event) =>
//                     setNewExpense({
//                       ...newExpense,
//                       date: event.target.value,
//                     })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Category
//                 </label>

//                 <select
//                   value={newExpense.category}
//                   onChange={(event) =>
//                     setNewExpense({
//                       ...newExpense,
//                       category: event.target.value,
//                     })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {categories.map((category) => (
//                     <option key={category}>{category}</option>
//                   ))}
//                 </select>
//               </div>

//               <div className="sm:col-span-2">
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Description
//                 </label>

//                 <input
//                   value={newExpense.description}
//                   onChange={(event) =>
//                     setNewExpense({
//                       ...newExpense,
//                       description: event.target.value,
//                     })
//                   }
//                   placeholder="e.g. Plywood sheets"
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Vendor / Paid To
//                 </label>

//                 <input
//                   value={newExpense.vendor}
//                   onChange={(event) =>
//                     setNewExpense({
//                       ...newExpense,
//                       vendor: event.target.value,
//                     })
//                   }
//                   placeholder="Vendor name"
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Payment Mode
//                 </label>

//                 <select
//                   value={newExpense.paymentMode}
//                   onChange={(event) =>
//                     setNewExpense({
//                       ...newExpense,
//                       paymentMode: event.target.value,
//                     })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {paymentModes.map((mode) => (
//                     <option key={mode}>{mode}</option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Total Amount
//                 </label>

//                 <div className="relative">
//                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
//                     ₹
//                   </span>

//                   <input
//                     type="number"
//                     min="0"
//                     value={newExpense.amount}
//                     onChange={(event) =>
//                       setNewExpense({
//                         ...newExpense,
//                         amount: event.target.value,
//                       })
//                     }
//                     placeholder="0"
//                     className="w-full rounded-xl border border-gray-200 py-2.5 pl-8 pr-3 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Paid Amount
//                 </label>

//                 <div className="relative">
//                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
//                     ₹
//                   </span>

//                   <input
//                     type="number"
//                     min="0"
//                     value={newExpense.paidAmount}
//                     onChange={(event) =>
//                       setNewExpense({
//                         ...newExpense,
//                         paidAmount: event.target.value,
//                       })
//                     }
//                     placeholder="0"
//                     className="w-full rounded-xl border border-gray-200 py-2.5 pl-8 pr-3 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>

//               <div className="sm:col-span-2">
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Notes
//                 </label>

//                 <textarea
//                   rows={3}
//                   value={newExpense.notes}
//                   onChange={(event) =>
//                     setNewExpense({
//                       ...newExpense,
//                       notes: event.target.value,
//                     })
//                   }
//                   placeholder="Optional notes..."
//                   className="w-full resize-none rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//             </div>

//             <div className="flex justify-end gap-3 border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
//               <button
//                 onClick={() => setShowAddModal(false)}
//                 className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={handleAddExpense}
//                 className="rounded-xl bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125748]"
//               >
//                 Save Expense
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Expense Details Modal */}
//       {selectedExpense && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="w-full max-w-xl rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-5">
//               <div>
//                 <p className="text-xs font-semibold text-[#176b5b]">
//                   {selectedExpense.expenseNo}
//                 </p>

//                 <h2 className="mt-1 text-xl font-bold text-gray-900">
//                   Expense Details
//                 </h2>
//               </div>

//               <button
//                 onClick={() => setSelectedExpense(null)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="grid gap-4 p-6 sm:grid-cols-2">
//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Description</p>
//                 <p className="mt-1 font-medium text-gray-900">
//                   {selectedExpense.description}
//                 </p>
//               </div>

//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Date</p>
//                 <p className="mt-1 font-medium text-gray-900">
//                   {formatDate(selectedExpense.date)}
//                 </p>
//               </div>

//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Category</p>
//                 <p className="mt-1 font-medium text-gray-900">
//                   {selectedExpense.category}
//                 </p>
//               </div>

//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Vendor / Paid To</p>
//                 <p className="mt-1 font-medium text-gray-900">
//                   {selectedExpense.vendor}
//                 </p>
//               </div>

//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Total Amount</p>
//                 <p className="mt-1 text-lg font-bold text-gray-900">
//                   {formatCurrency(selectedExpense.amount)}
//                 </p>
//               </div>

//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Paid Amount</p>
//                 <p className="mt-1 text-lg font-bold text-emerald-700">
//                   {formatCurrency(selectedExpense.paidAmount)}
//                 </p>
//               </div>

//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Pending Amount</p>
//                 <p className="mt-1 text-lg font-bold text-red-600">
//                   {formatCurrency(
//                     selectedExpense.amount - selectedExpense.paidAmount
//                   )}
//                 </p>
//               </div>

//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Payment Mode</p>
//                 <p className="mt-1 font-medium text-gray-900">
//                   {selectedExpense.paymentMode}
//                 </p>
//               </div>

//               <div className="sm:col-span-2">
//                 <div className="flex items-center justify-between rounded-xl border border-gray-100 p-4">
//                   <div>
//                     <p className="text-xs text-gray-500">Payment Status</p>

//                     <span
//                       className={`mt-2 inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusClasses(
//                         selectedExpense.status
//                       )}`}
//                     >
//                       {selectedExpense.status}
//                     </span>
//                   </div>

//                   {selectedExpense.status !== "Paid" && (
//                     <button
//                       onClick={() => markAsPaid(selectedExpense.id)}
//                       className="rounded-xl bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125748]"
//                     >
//                       Mark as Paid
//                     </button>
//                   )}
//                 </div>
//               </div>

//               {selectedExpense.notes && (
//                 <div className="sm:col-span-2 rounded-xl border border-gray-100 p-4">
//                   <p className="text-xs text-gray-500">Notes</p>

//                   <p className="mt-1 text-sm text-gray-700">
//                     {selectedExpense.notes}
//                   </p>
//                 </div>
//               )}
//             </div>

//             <div className="flex justify-end border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
//               <button
//                 onClick={() => setSelectedExpense(null)}
//                 className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
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

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAllExpenses,
//   createExpense,
//   updateExpense,
//   type FurnitureExpense,
// } from "@/modules/furniture/services/expenseService";
// import { Timestamp } from "firebase/firestore";

// type ExpenseStatus = "Paid" | "Pending" | "Partially Paid";

// type Expense = {
//   id: string;
//   expenseNo: string;
//   date: string;
//   category: string;
//   description: string;
//   vendor: string;
//   amount: number;
//   paidAmount: number;
//   paymentMode: string;
//   status: ExpenseStatus;
//   notes: string;
// };

// const categories = [
//   "Raw Materials",
//   "Transport",
//   "Electricity",
//   "Rent",
//   "Salary",
//   "Marketing",
//   "Maintenance",
//   "Office",
//   "Tools & Equipment",
//   "Other",
// ];

// const paymentModes = ["Cash", "UPI", "Bank Transfer", "Card", "Cheque"];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function formatDate(date: string) {
//   if (!date || date === "—") return "—";
//   try {
//     const value = date.includes("T")
//       ? new Date(date)
//       : new Date(`${date}T00:00:00`);
//     if (Number.isNaN(value.getTime())) return date;
//     return value.toLocaleDateString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   } catch {
//     return date;
//   }
// }

// function toDateString(value: FurnitureExpense["date"]): string {
//   if (!value) return new Date().toISOString().slice(0, 10);
//   if (typeof value === "string") {
//     return value.slice(0, 10);
//   }
//   try {
//     if (typeof (value as Timestamp).toDate === "function") {
//       return (value as Timestamp).toDate().toISOString().slice(0, 10);
//     }
//   } catch {
//     /* ignore */
//   }
//   return new Date().toISOString().slice(0, 10);
// }

// function normalizeStatus(
//   raw?: string,
//   amount = 0,
//   paid = 0
// ): ExpenseStatus {
//   const s = (raw || "").trim();
//   if (s === "Paid" || s === "Partially Paid" || s === "Pending") {
//     return s as ExpenseStatus;
//   }
//   if (paid <= 0) return "Pending";
//   if (paid >= amount) return "Paid";
//   return "Partially Paid";
// }

// function mapToUi(e: FurnitureExpense): Expense {
//   const amount = Number(e.amount ?? 0) || 0;
//   const paid = Number(e.paidAmount ?? 0) || 0;

//   return {
//     id: e.id,
//     expenseNo: e.expenseNo || `EXP-${e.id.slice(0, 6).toUpperCase()}`,
//     date: toDateString(e.date),
//     category: e.category || "Other",
//     description: e.description || "—",
//     vendor: e.vendor || "—",
//     amount,
//     paidAmount: paid,
//     paymentMode: e.paymentMode || "Cash",
//     status: normalizeStatus(e.status, amount, paid),
//     notes: e.notes || "",
//   };
// }

// function getStatusClasses(status: ExpenseStatus) {
//   if (status === "Paid") {
//     return "bg-emerald-50 text-emerald-700 border-emerald-200";
//   }
//   if (status === "Pending") {
//     return "bg-red-50 text-red-700 border-red-200";
//   }
//   return "bg-amber-50 text-amber-700 border-amber-200";
// }

// function SummaryCard({
//   title,
//   value,
//   subtitle,
//   icon,
//   iconClass,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   icon: string;
//   iconClass: string;
// }) {
//   return (
//     <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//       <div className="flex items-start justify-between">
//         <div>
//           <p className="text-sm font-medium text-gray-500">{title}</p>
//           <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
//           <p className="mt-1 text-xs text-gray-500">{subtitle}</p>
//         </div>
//         <div
//           className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl ${iconClass}`}
//         >
//           {icon}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function ExpensesPage() {
//   const [expenses, setExpenses] = useState<Expense[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   const [search, setSearch] = useState("");
//   const [categoryFilter, setCategoryFilter] = useState("All");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [dateFilter, setDateFilter] = useState("All");

//   const [showAddModal, setShowAddModal] = useState(false);
//   const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null);

//   const today = new Date().toISOString().slice(0, 10);

//   const [newExpense, setNewExpense] = useState({
//     date: today,
//     category: "Raw Materials",
//     description: "",
//     vendor: "",
//     amount: "",
//     paidAmount: "",
//     paymentMode: "Cash",
//     notes: "",
//   });

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllExpenses();
//         if (cancelled) return;
//         setExpenses(data.map(mapToUi));
//       } catch (err) {
//         console.error("Failed to load expenses:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const filteredExpenses = useMemo(() => {
//     return expenses.filter((expense) => {
//       const searchValue = search.toLowerCase().trim();

//       const matchesSearch =
//         !searchValue ||
//         expense.expenseNo.toLowerCase().includes(searchValue) ||
//         expense.description.toLowerCase().includes(searchValue) ||
//         expense.vendor.toLowerCase().includes(searchValue) ||
//         expense.category.toLowerCase().includes(searchValue);

//       const matchesCategory =
//         categoryFilter === "All" || expense.category === categoryFilter;

//       const matchesStatus =
//         statusFilter === "All" || expense.status === statusFilter;

//       let matchesDate = true;
//       const todayDate = new Date();
//       todayDate.setHours(0, 0, 0, 0);

//       if (dateFilter === "Today") {
//         matchesDate = expense.date === today;
//       }

//       if (dateFilter === "This Week") {
//         const expenseDate = new Date(`${expense.date}T00:00:00`);
//         const difference =
//           (todayDate.getTime() - expenseDate.getTime()) /
//           (1000 * 60 * 60 * 24);
//         matchesDate = difference >= 0 && difference <= 6;
//       }

//       if (dateFilter === "This Month") {
//         const ym = today.slice(0, 7);
//         matchesDate = expense.date.startsWith(ym);
//       }

//       return (
//         matchesSearch &&
//         matchesCategory &&
//         matchesStatus &&
//         matchesDate
//       );
//     });
//   }, [expenses, search, categoryFilter, statusFilter, dateFilter, today]);

//   const totalExpenses = expenses.reduce(
//     (total, expense) => total + expense.amount,
//     0
//   );

//   const totalPaid = expenses.reduce(
//     (total, expense) => total + expense.paidAmount,
//     0
//   );

//   const totalPending = totalExpenses - totalPaid;

//   const thisMonthKey = today.slice(0, 7);
//   const thisMonthExpenses = expenses
//     .filter((expense) => expense.date.startsWith(thisMonthKey))
//     .reduce((total, expense) => total + expense.amount, 0);

//   const pendingCount = expenses.filter(
//     (expense) => expense.status !== "Paid"
//   ).length;

//   const categoryTotals = categories
//     .map((category) => ({
//       category,
//       amount: expenses
//         .filter((expense) => expense.category === category)
//         .reduce((sum, expense) => sum + expense.amount, 0),
//     }))
//     .filter((item) => item.amount > 0)
//     .sort((a, b) => b.amount - a.amount);

//   const maxCategoryAmount = Math.max(
//     ...categoryTotals.map((item) => item.amount),
//     1
//   );

//   function calculateStatus(
//     amount: number,
//     paidAmount: number
//   ): ExpenseStatus {
//     if (paidAmount <= 0) return "Pending";
//     if (paidAmount >= amount) return "Paid";
//     return "Partially Paid";
//   }

//   async function handleAddExpense() {
//     const amount = Number(newExpense.amount);
//     const paidAmount = Number(newExpense.paidAmount || 0);

//     if (
//       !newExpense.description.trim() ||
//       !newExpense.vendor.trim() ||
//       !amount ||
//       amount <= 0
//     ) {
//       alert("Please enter description, vendor and a valid amount.");
//       return;
//     }

//     if (paidAmount < 0 || paidAmount > amount) {
//       alert("Paid amount cannot be greater than the total amount.");
//       return;
//     }

//     setSaving(true);
//     try {
//       const status = calculateStatus(amount, paidAmount);
//       const expenseNo = `EXP-${Date.now().toString().slice(-6)}`;

//       const payload = {
//         expenseNo,
//         date: newExpense.date,
//         category: newExpense.category,
//         description: newExpense.description.trim(),
//         vendor: newExpense.vendor.trim(),
//         amount,
//         paidAmount,
//         paymentMode: newExpense.paymentMode,
//         status,
//         notes: newExpense.notes.trim(),
//       };

//       const id = await createExpense(payload);

//       const expense: Expense = {
//         id,
//         expenseNo,
//         date: newExpense.date,
//         category: payload.category,
//         description: payload.description,
//         vendor: payload.vendor,
//         amount,
//         paidAmount,
//         paymentMode: payload.paymentMode,
//         status,
//         notes: payload.notes,
//       };

//       setExpenses((current) => [expense, ...current]);

//       setNewExpense({
//         date: today,
//         category: "Raw Materials",
//         description: "",
//         vendor: "",
//         amount: "",
//         paidAmount: "",
//         paymentMode: "Cash",
//         notes: "",
//       });

//       setShowAddModal(false);
//     } catch (err) {
//       console.error("Failed to create expense:", err);
//       alert("Unable to save expense. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function markAsPaid(expenseId: string) {
//     const target = expenses.find((e) => e.id === expenseId);
//     if (!target) return;

//     setExpenses((current) =>
//       current.map((expense) =>
//         expense.id === expenseId
//           ? {
//               ...expense,
//               paidAmount: expense.amount,
//               status: "Paid" as ExpenseStatus,
//             }
//           : expense
//       )
//     );

//     setSelectedExpense(null);

//     try {
//       await updateExpense(expenseId, {
//         paidAmount: target.amount,
//         status: "Paid",
//       });
//     } catch (err) {
//       console.error("Failed to mark expense paid:", err);
//       try {
//         const data = await getAllExpenses();
//         setExpenses(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-gray-900">
//       <header className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 lg:px-8">
//           <div className="flex items-center gap-3">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#9a5b18] text-lg font-bold text-white">
//               A
//             </div>
//             <div>
//               <p className="text-sm font-semibold text-gray-900">Akrish</p>
//               <p className="text-xs text-gray-500">Furniture and Interior</p>
//             </div>
//           </div>
//           <div className="hidden items-center gap-2 rounded-xl bg-[#f7f7f4] px-4 py-2 text-sm text-gray-600 sm:flex">
//             <span>₹</span>
//             <span>Finance</span>
//             <span className="text-gray-400">/</span>
//             <span className="font-medium text-gray-900">Expenses</span>
//           </div>
//         </div>
//       </header>

//       <main className="mx-auto max-w-[1600px] px-5 py-7 lg:px-8">
//         <div className="mb-7 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
//           <div>
//             <p className="mb-1 text-sm font-medium text-[#176b5b]">
//               Finance Management
//             </p>
//             <h1 className="text-3xl font-bold tracking-tight text-gray-900">
//               Expenses
//             </h1>
//             <p className="mt-1 text-sm text-gray-500">
//               Track business expenses, payments and outstanding amounts.
//             </p>
//           </div>
//           <button
//             onClick={() => setShowAddModal(true)}
//             className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#125748]"
//           >
//             <span className="text-lg">+</span>
//             Add Expense
//           </button>
//         </div>

//         <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <SummaryCard
//             title="Total Expenses"
//             value={loading ? "…" : formatCurrency(totalExpenses)}
//             subtitle={`${expenses.length} expense records`}
//             icon="₹"
//             iconClass="bg-[#eef7f4] text-[#176b5b]"
//           />
//           <SummaryCard
//             title="Paid Amount"
//             value={loading ? "…" : formatCurrency(totalPaid)}
//             subtitle="Amount already paid"
//             icon="✓"
//             iconClass="bg-emerald-50 text-emerald-700"
//           />
//           <SummaryCard
//             title="Pending Amount"
//             value={loading ? "…" : formatCurrency(totalPending)}
//             subtitle={`${pendingCount} payment${pendingCount !== 1 ? "s" : ""} pending`}
//             icon="!"
//             iconClass="bg-amber-50 text-amber-700"
//           />
//           <SummaryCard
//             title="This Month"
//             value={loading ? "…" : formatCurrency(thisMonthExpenses)}
//             subtitle="Current month expenses"
//             icon="▣"
//             iconClass="bg-blue-50 text-blue-700"
//           />
//         </div>

//         <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
//           <section className="min-w-0 rounded-2xl border border-[#e4e2da] bg-white shadow-sm">
//             <div className="border-b border-[#e4e2da] p-5">
//               <div className="flex flex-col gap-4">
//                 <div className="relative">
//                   <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
//                     ⌕
//                   </span>
//                   <input
//                     value={search}
//                     onChange={(event) => setSearch(event.target.value)}
//                     placeholder="Search expense, vendor or category..."
//                     className="w-full rounded-xl border border-gray-200 bg-[#fafaf8] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                   />
//                 </div>
//                 <div className="grid gap-3 sm:grid-cols-3">
//                   <select
//                     value={categoryFilter}
//                     onChange={(event) => setCategoryFilter(event.target.value)}
//                     className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="All">All Categories</option>
//                     {categories.map((category) => (
//                       <option key={category} value={category}>
//                         {category}
//                       </option>
//                     ))}
//                   </select>
//                   <select
//                     value={statusFilter}
//                     onChange={(event) => setStatusFilter(event.target.value)}
//                     className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="All">All Status</option>
//                     <option value="Paid">Paid</option>
//                     <option value="Partially Paid">Partially Paid</option>
//                     <option value="Pending">Pending</option>
//                   </select>
//                   <select
//                     value={dateFilter}
//                     onChange={(event) => setDateFilter(event.target.value)}
//                     className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="All">All Dates</option>
//                     <option value="Today">Today</option>
//                     <option value="This Week">This Week</option>
//                     <option value="This Month">This Month</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[950px]">
//                 <thead>
//                   <tr className="border-b border-[#e4e2da] bg-[#fafaf8] text-left">
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Expense
//                     </th>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Date
//                     </th>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Category
//                     </th>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Vendor
//                     </th>
//                     <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Amount
//                     </th>
//                     <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Paid
//                     </th>
//                     <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Status
//                     </th>
//                     <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Action
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {loading ? (
//                     <tr>
//                       <td
//                         colSpan={8}
//                         className="px-5 py-14 text-center text-sm text-gray-500"
//                       >
//                         Loading expenses…
//                       </td>
//                     </tr>
//                   ) : (
//                     <>
//                       {filteredExpenses.map((expense) => (
//                         <tr
//                           key={expense.id}
//                           className="border-b border-[#efeee9] transition hover:bg-[#fafaf8]"
//                         >
//                           <td className="px-5 py-4">
//                             <div>
//                               <p className="text-xs font-semibold text-[#176b5b]">
//                                 {expense.expenseNo}
//                               </p>
//                               <p className="mt-1 font-medium text-gray-900">
//                                 {expense.description}
//                               </p>
//                             </div>
//                           </td>
//                           <td className="px-5 py-4 text-sm text-gray-600">
//                             {formatDate(expense.date)}
//                           </td>
//                           <td className="px-5 py-4">
//                             <span className="rounded-lg bg-gray-100 px-2.5 py-1.5 text-xs font-medium text-gray-700">
//                               {expense.category}
//                             </span>
//                           </td>
//                           <td className="px-5 py-4 text-sm text-gray-600">
//                             {expense.vendor}
//                           </td>
//                           <td className="px-5 py-4 text-right text-sm font-semibold text-gray-900">
//                             {formatCurrency(expense.amount)}
//                           </td>
//                           <td className="px-5 py-4 text-right text-sm text-gray-700">
//                             {formatCurrency(expense.paidAmount)}
//                           </td>
//                           <td className="px-5 py-4 text-center">
//                             <span
//                               className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusClasses(
//                                 expense.status
//                               )}`}
//                             >
//                               {expense.status}
//                             </span>
//                           </td>
//                           <td className="px-5 py-4 text-right">
//                             <button
//                               onClick={() => setSelectedExpense(expense)}
//                               className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:border-[#176b5b] hover:text-[#176b5b]"
//                             >
//                               View
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                       {filteredExpenses.length === 0 && (
//                         <tr>
//                           <td colSpan={8} className="px-5 py-14 text-center">
//                             <div className="text-3xl">⌕</div>
//                             <p className="mt-3 font-semibold text-gray-900">
//                               No expenses found
//                             </p>
//                             <p className="mt-1 text-sm text-gray-500">
//                               Try changing your search or filters.
//                             </p>
//                           </td>
//                         </tr>
//                       )}
//                     </>
//                   )}
//                 </tbody>
//               </table>
//             </div>

//             <div className="flex items-center justify-between border-t border-[#e4e2da] px-5 py-4">
//               <p className="text-sm text-gray-500">
//                 Showing{" "}
//                 <span className="font-semibold text-gray-900">
//                   {filteredExpenses.length}
//                 </span>{" "}
//                 of{" "}
//                 <span className="font-semibold text-gray-900">
//                   {expenses.length}
//                 </span>{" "}
//                 expenses
//               </p>
//               <p className="text-sm text-gray-500">
//                 Filtered total:{" "}
//                 <span className="font-semibold text-gray-900">
//                   {formatCurrency(
//                     filteredExpenses.reduce(
//                       (sum, expense) => sum + expense.amount,
//                       0
//                     )
//                   )}
//                 </span>
//               </p>
//             </div>
//           </section>

//           <aside className="space-y-6">
//             <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//               <div className="mb-5">
//                 <h2 className="font-semibold text-gray-900">
//                   Expense Breakdown
//                 </h2>
//                 <p className="mt-1 text-xs text-gray-500">
//                   Spending by category
//                 </p>
//               </div>
//               <div className="space-y-5">
//                 {categoryTotals.map((item) => (
//                   <div key={item.category}>
//                     <div className="mb-2 flex items-center justify-between gap-3">
//                       <span className="text-sm text-gray-600">
//                         {item.category}
//                       </span>
//                       <span className="text-sm font-semibold text-gray-900">
//                         {formatCurrency(item.amount)}
//                       </span>
//                     </div>
//                     <div className="h-2 overflow-hidden rounded-full bg-gray-100">
//                       <div
//                         className="h-full rounded-full bg-[#176b5b]"
//                         style={{
//                           width: `${(item.amount / maxCategoryAmount) * 100}%`,
//                         }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//                 {categoryTotals.length === 0 && (
//                   <p className="text-sm text-gray-500">
//                     No expense data available.
//                   </p>
//                 )}
//               </div>
//             </div>

//             <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//               <div className="mb-4 flex items-center justify-between">
//                 <div>
//                   <h2 className="font-semibold text-gray-900">
//                     Pending Payments
//                   </h2>
//                   <p className="mt-1 text-xs text-gray-500">
//                     Expenses that need payment
//                   </p>
//                 </div>
//                 <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700">
//                   {pendingCount}
//                 </span>
//               </div>
//               <div className="space-y-3">
//                 {expenses
//                   .filter((expense) => expense.status !== "Paid")
//                   .map((expense) => (
//                     <button
//                       key={expense.id}
//                       onClick={() => setSelectedExpense(expense)}
//                       className="w-full rounded-xl border border-gray-100 bg-[#fafaf8] p-3 text-left transition hover:border-[#d7ddd9] hover:bg-white"
//                     >
//                       <div className="flex items-start justify-between gap-3">
//                         <div className="min-w-0">
//                           <p className="truncate text-sm font-medium text-gray-900">
//                             {expense.vendor}
//                           </p>
//                           <p className="mt-1 truncate text-xs text-gray-500">
//                             {expense.description}
//                           </p>
//                         </div>
//                         <span className="shrink-0 text-sm font-semibold text-red-600">
//                           {formatCurrency(
//                             expense.amount - expense.paidAmount
//                           )}
//                         </span>
//                       </div>
//                     </button>
//                   ))}
//                 {pendingCount === 0 && (
//                   <div className="rounded-xl bg-emerald-50 p-4 text-center">
//                     <p className="text-sm font-medium text-emerald-700">
//                       All expenses are paid.
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </aside>
//         </div>
//       </main>

//       {showAddModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-5">
//               <div>
//                 <h2 className="text-xl font-bold text-gray-900">
//                   Add Expense
//                 </h2>
//                 <p className="mt-1 text-sm text-gray-500">
//                   Record a new business expense.
//                 </p>
//               </div>
//               <button
//                 onClick={() => setShowAddModal(false)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700"
//               >
//                 ×
//               </button>
//             </div>
//             <div className="grid gap-4 p-6 sm:grid-cols-2">
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Date
//                 </label>
//                 <input
//                   type="date"
//                   value={newExpense.date}
//                   onChange={(event) =>
//                     setNewExpense({ ...newExpense, date: event.target.value })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Category
//                 </label>
//                 <select
//                   value={newExpense.category}
//                   onChange={(event) =>
//                     setNewExpense({
//                       ...newExpense,
//                       category: event.target.value,
//                     })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {categories.map((category) => (
//                     <option key={category}>{category}</option>
//                   ))}
//                 </select>
//               </div>
//               <div className="sm:col-span-2">
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Description
//                 </label>
//                 <input
//                   value={newExpense.description}
//                   onChange={(event) =>
//                     setNewExpense({
//                       ...newExpense,
//                       description: event.target.value,
//                     })
//                   }
//                   placeholder="e.g. Plywood sheets"
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Vendor / Paid To
//                 </label>
//                 <input
//                   value={newExpense.vendor}
//                   onChange={(event) =>
//                     setNewExpense({
//                       ...newExpense,
//                       vendor: event.target.value,
//                     })
//                   }
//                   placeholder="Vendor name"
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Payment Mode
//                 </label>
//                 <select
//                   value={newExpense.paymentMode}
//                   onChange={(event) =>
//                     setNewExpense({
//                       ...newExpense,
//                       paymentMode: event.target.value,
//                     })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {paymentModes.map((mode) => (
//                     <option key={mode}>{mode}</option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Total Amount
//                 </label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
//                     ₹
//                   </span>
//                   <input
//                     type="number"
//                     min="0"
//                     value={newExpense.amount}
//                     onChange={(event) =>
//                       setNewExpense({
//                         ...newExpense,
//                         amount: event.target.value,
//                       })
//                     }
//                     placeholder="0"
//                     className="w-full rounded-xl border border-gray-200 py-2.5 pl-8 pr-3 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Paid Amount
//                 </label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
//                     ₹
//                   </span>
//                   <input
//                     type="number"
//                     min="0"
//                     value={newExpense.paidAmount}
//                     onChange={(event) =>
//                       setNewExpense({
//                         ...newExpense,
//                         paidAmount: event.target.value,
//                       })
//                     }
//                     placeholder="0"
//                     className="w-full rounded-xl border border-gray-200 py-2.5 pl-8 pr-3 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>
//               <div className="sm:col-span-2">
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Notes
//                 </label>
//                 <textarea
//                   rows={3}
//                   value={newExpense.notes}
//                   onChange={(event) =>
//                     setNewExpense({
//                       ...newExpense,
//                       notes: event.target.value,
//                     })
//                   }
//                   placeholder="Optional notes..."
//                   className="w-full resize-none rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//             </div>
//             <div className="flex justify-end gap-3 border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
//               <button
//                 onClick={() => setShowAddModal(false)}
//                 className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleAddExpense}
//                 disabled={saving}
//                 className="rounded-xl bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125748] disabled:opacity-60"
//               >
//                 {saving ? "Saving…" : "Save Expense"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {selectedExpense && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="w-full max-w-xl rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-5">
//               <div>
//                 <p className="text-xs font-semibold text-[#176b5b]">
//                   {selectedExpense.expenseNo}
//                 </p>
//                 <h2 className="mt-1 text-xl font-bold text-gray-900">
//                   Expense Details
//                 </h2>
//               </div>
//               <button
//                 onClick={() => setSelectedExpense(null)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700"
//               >
//                 ×
//               </button>
//             </div>
//             <div className="grid gap-4 p-6 sm:grid-cols-2">
//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Description</p>
//                 <p className="mt-1 font-medium text-gray-900">
//                   {selectedExpense.description}
//                 </p>
//               </div>
//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Date</p>
//                 <p className="mt-1 font-medium text-gray-900">
//                   {formatDate(selectedExpense.date)}
//                 </p>
//               </div>
//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Category</p>
//                 <p className="mt-1 font-medium text-gray-900">
//                   {selectedExpense.category}
//                 </p>
//               </div>
//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Vendor / Paid To</p>
//                 <p className="mt-1 font-medium text-gray-900">
//                   {selectedExpense.vendor}
//                 </p>
//               </div>
//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Total Amount</p>
//                 <p className="mt-1 text-lg font-bold text-gray-900">
//                   {formatCurrency(selectedExpense.amount)}
//                 </p>
//               </div>
//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Paid Amount</p>
//                 <p className="mt-1 text-lg font-bold text-emerald-700">
//                   {formatCurrency(selectedExpense.paidAmount)}
//                 </p>
//               </div>
//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Pending Amount</p>
//                 <p className="mt-1 text-lg font-bold text-red-600">
//                   {formatCurrency(
//                     selectedExpense.amount - selectedExpense.paidAmount
//                   )}
//                 </p>
//               </div>
//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Payment Mode</p>
//                 <p className="mt-1 font-medium text-gray-900">
//                   {selectedExpense.paymentMode}
//                 </p>
//               </div>
//               <div className="sm:col-span-2">
//                 <div className="flex items-center justify-between rounded-xl border border-gray-100 p-4">
//                   <div>
//                     <p className="text-xs text-gray-500">Payment Status</p>
//                     <span
//                       className={`mt-2 inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusClasses(
//                         selectedExpense.status
//                       )}`}
//                     >
//                       {selectedExpense.status}
//                     </span>
//                   </div>
//                   {selectedExpense.status !== "Paid" && (
//                     <button
//                       onClick={() => markAsPaid(selectedExpense.id)}
//                       className="rounded-xl bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125748]"
//                     >
//                       Mark as Paid
//                     </button>
//                   )}
//                 </div>
//               </div>
//               {selectedExpense.notes && (
//                 <div className="sm:col-span-2 rounded-xl border border-gray-100 p-4">
//                   <p className="text-xs text-gray-500">Notes</p>
//                   <p className="mt-1 text-sm text-gray-700">
//                     {selectedExpense.notes}
//                   </p>
//                 </div>
//               )}
//             </div>
//             <div className="flex justify-end border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
//               <button
//                 onClick={() => setSelectedExpense(null)}
//                 className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
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

"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import {
  getAllExpenses,
  createExpense,
  updateExpense,
  type FurnitureExpense,
} from "@/modules/furniture/services/expenseService";
import { Timestamp } from "firebase/firestore";

type ExpenseStatus = "Paid" | "Pending" | "Partially Paid";

type Expense = {
  id: string;
  expenseNo: string;
  date: string;
  category: string;
  description: string;
  vendor: string;
  amount: number;
  paidAmount: number;
  paymentMode: string;
  status: ExpenseStatus;
  notes: string;
};

const categories = [
  "Raw Materials",
  "Transport",
  "Electricity",
  "Rent",
  "Salary",
  "Marketing",
  "Maintenance",
  "Office",
  "Tools & Equipment",
  "Other",
];

const paymentModes = ["Cash", "UPI", "Bank Transfer", "Card", "Cheque"];

function formatCurrency(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function formatDate(date: string) {
  if (!date || date === "—") return "—";
  try {
    const value = date.includes("T")
      ? new Date(date)
      : new Date(`${date}T00:00:00`);
    if (Number.isNaN(value.getTime())) return date;
    return value.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return date;
  }
}

function toDateString(value: FurnitureExpense["date"]): string {
  if (!value) return new Date().toISOString().slice(0, 10);
  if (typeof value === "string") return value.slice(0, 10);
  try {
    if (typeof (value as Timestamp).toDate === "function") {
      return (value as Timestamp).toDate().toISOString().slice(0, 10);
    }
  } catch {
    /* ignore */
  }
  return new Date().toISOString().slice(0, 10);
}

function normalizeStatus(
  raw?: string,
  amount = 0,
  paid = 0
): ExpenseStatus {
  const s = (raw || "").trim();
  if (s === "Paid" || s === "Partially Paid" || s === "Pending") {
    return s as ExpenseStatus;
  }
  if (paid <= 0) return "Pending";
  if (paid >= amount) return "Paid";
  return "Partially Paid";
}

function mapToUi(e: FurnitureExpense): Expense {
  const amount = Number(e.amount ?? 0) || 0;
  const paid = Number(e.paidAmount ?? 0) || 0;

  return {
    id: e.id,
    expenseNo: e.expenseNo || `EXP-${e.id.slice(0, 6).toUpperCase()}`,
    date: toDateString(e.date),
    category: e.category || "Other",
    description: e.description || "—",
    vendor: e.vendor || "—",
    amount,
    paidAmount: paid,
    paymentMode: e.paymentMode || "Cash",
    status: normalizeStatus(e.status, amount, paid),
    notes: e.notes || "",
  };
}

function getStatusClasses(status: ExpenseStatus) {
  if (status === "Paid") {
    return "bg-emerald-50 text-emerald-700 border-emerald-200";
  }
  if (status === "Pending") {
    return "bg-red-50 text-red-700 border-red-200";
  }
  return "bg-amber-50 text-amber-700 border-amber-200";
}

function ModalPortal({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 p-4">
      {children}
    </div>,
    document.body
  );
}

function SummaryCard({
  title,
  value,
  subtitle,
  icon,
  iconClass,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
  iconClass: string;
}) {
  return (
    <div className="rounded-2xl border border-[#e4e2da] bg-white p-3 shadow-sm sm:p-5">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="text-xs font-medium text-gray-500 sm:text-sm">
            {title}
          </p>
          <p className="mt-1.5 truncate text-lg font-bold text-gray-900 sm:mt-2 sm:text-2xl">
            {value}
          </p>
          <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
            {subtitle}
          </p>
        </div>
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-lg sm:h-11 sm:w-11 sm:text-xl ${iconClass}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("All");

  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null);

  const today = new Date().toISOString().slice(0, 10);

  const [newExpense, setNewExpense] = useState({
    date: today,
    category: "Raw Materials",
    description: "",
    vendor: "",
    amount: "",
    paidAmount: "",
    paymentMode: "Cash",
    notes: "",
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const data = await getAllExpenses();
        if (cancelled) return;
        setExpenses(data.map(mapToUi));
      } catch (err) {
        console.error("Failed to load expenses:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const filteredExpenses = useMemo(() => {
    return expenses.filter((expense) => {
      const searchValue = search.toLowerCase().trim();

      const matchesSearch =
        !searchValue ||
        expense.expenseNo.toLowerCase().includes(searchValue) ||
        expense.description.toLowerCase().includes(searchValue) ||
        expense.vendor.toLowerCase().includes(searchValue) ||
        expense.category.toLowerCase().includes(searchValue);

      const matchesCategory =
        categoryFilter === "All" || expense.category === categoryFilter;

      const matchesStatus =
        statusFilter === "All" || expense.status === statusFilter;

      let matchesDate = true;
      const todayDate = new Date();
      todayDate.setHours(0, 0, 0, 0);

      if (dateFilter === "Today") {
        matchesDate = expense.date === today;
      }

      if (dateFilter === "This Week") {
        const expenseDate = new Date(`${expense.date}T00:00:00`);
        const difference =
          (todayDate.getTime() - expenseDate.getTime()) /
          (1000 * 60 * 60 * 24);
        matchesDate = difference >= 0 && difference <= 6;
      }

      if (dateFilter === "This Month") {
        const ym = today.slice(0, 7);
        matchesDate = expense.date.startsWith(ym);
      }

      return (
        matchesSearch && matchesCategory && matchesStatus && matchesDate
      );
    });
  }, [expenses, search, categoryFilter, statusFilter, dateFilter, today]);

  const totalExpenses = expenses.reduce((t, e) => t + e.amount, 0);
  const totalPaid = expenses.reduce((t, e) => t + e.paidAmount, 0);
  const totalPending = totalExpenses - totalPaid;

  const thisMonthKey = today.slice(0, 7);
  const thisMonthExpenses = expenses
    .filter((e) => e.date.startsWith(thisMonthKey))
    .reduce((t, e) => t + e.amount, 0);

  const pendingCount = expenses.filter((e) => e.status !== "Paid").length;

  const categoryTotals = categories
    .map((category) => ({
      category,
      amount: expenses
        .filter((e) => e.category === category)
        .reduce((sum, e) => sum + e.amount, 0),
    }))
    .filter((item) => item.amount > 0)
    .sort((a, b) => b.amount - a.amount);

  const maxCategoryAmount = Math.max(
    ...categoryTotals.map((item) => item.amount),
    1
  );

  function calculateStatus(amount: number, paidAmount: number): ExpenseStatus {
    if (paidAmount <= 0) return "Pending";
    if (paidAmount >= amount) return "Paid";
    return "Partially Paid";
  }

  async function handleAddExpense() {
    const amount = Number(newExpense.amount);
    const paidAmount = Number(newExpense.paidAmount || 0);

    if (
      !newExpense.description.trim() ||
      !newExpense.vendor.trim() ||
      !amount ||
      amount <= 0
    ) {
      alert("Please enter description, vendor and a valid amount.");
      return;
    }

    if (paidAmount < 0 || paidAmount > amount) {
      alert("Paid amount cannot be greater than the total amount.");
      return;
    }

    setSaving(true);
    try {
      const status = calculateStatus(amount, paidAmount);
      const expenseNo = `EXP-${Date.now().toString().slice(-6)}`;

      const payload = {
        expenseNo,
        date: newExpense.date,
        category: newExpense.category,
        description: newExpense.description.trim(),
        vendor: newExpense.vendor.trim(),
        amount,
        paidAmount,
        paymentMode: newExpense.paymentMode,
        status,
        notes: newExpense.notes.trim(),
      };

      const id = await createExpense(payload);

      setExpenses((current) => [
        {
          id,
          expenseNo,
          date: newExpense.date,
          category: payload.category,
          description: payload.description,
          vendor: payload.vendor,
          amount,
          paidAmount,
          paymentMode: payload.paymentMode,
          status,
          notes: payload.notes,
        },
        ...current,
      ]);

      setNewExpense({
        date: today,
        category: "Raw Materials",
        description: "",
        vendor: "",
        amount: "",
        paidAmount: "",
        paymentMode: "Cash",
        notes: "",
      });
      setShowAddModal(false);
    } catch (err) {
      console.error("Failed to create expense:", err);
      alert("Unable to save expense. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  async function markAsPaid(expenseId: string) {
    const target = expenses.find((e) => e.id === expenseId);
    if (!target) return;

    setExpenses((current) =>
      current.map((expense) =>
        expense.id === expenseId
          ? {
              ...expense,
              paidAmount: expense.amount,
              status: "Paid" as ExpenseStatus,
            }
          : expense
      )
    );
    setSelectedExpense(null);

    try {
      await updateExpense(expenseId, {
        paidAmount: target.amount,
        status: "Paid",
      });
    } catch (err) {
      console.error("Failed to mark expense paid:", err);
      try {
        const data = await getAllExpenses();
        setExpenses(data.map(mapToUi));
      } catch {
        /* ignore */
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-gray-900">
      <main className="mx-auto max-w-[1600px] px-3 py-5 sm:px-6 sm:py-7 lg:px-8">
        {/* Title + button same row */}
        <div className="mb-5 flex items-start justify-between gap-3 sm:mb-7">
          <div className="min-w-0 flex-1">
            <p className="mb-1 text-xs font-medium text-[#176b5b] sm:text-sm">
              Finance Management
            </p>
            <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Expenses
            </h1>
            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              Track business expenses, payments and outstanding amounts.
            </p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125748] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
          >
            <span className="text-base sm:text-lg">+</span>
            Add Expense
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
          <SummaryCard
            title="Total Expenses"
            value={loading ? "…" : formatCurrency(totalExpenses)}
            subtitle={`${expenses.length} expense records`}
            icon="₹"
            iconClass="bg-[#eef7f4] text-[#176b5b]"
          />
          <SummaryCard
            title="Paid Amount"
            value={loading ? "…" : formatCurrency(totalPaid)}
            subtitle="Amount already paid"
            icon="✓"
            iconClass="bg-emerald-50 text-emerald-700"
          />
          <SummaryCard
            title="Pending Amount"
            value={loading ? "…" : formatCurrency(totalPending)}
            subtitle={`${pendingCount} payment${pendingCount !== 1 ? "s" : ""} pending`}
            icon="!"
            iconClass="bg-amber-50 text-amber-700"
          />
          <SummaryCard
            title="This Month"
            value={loading ? "…" : formatCurrency(thisMonthExpenses)}
            subtitle="Current month expenses"
            icon="▣"
            iconClass="bg-blue-50 text-blue-700"
          />
        </div>

        <div className="mt-5 grid gap-5 sm:mt-6 sm:gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
          <section className="min-w-0 rounded-2xl border border-[#e4e2da] bg-white shadow-sm">
            <div className="border-b border-[#e4e2da] p-3 sm:p-5">
              <div className="flex flex-col gap-3">
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 sm:left-4">
                    ⌕
                  </span>
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search expense, vendor or category..."
                    className="w-full rounded-xl border border-gray-200 bg-[#fafaf8] py-2.5 pl-10 pr-3 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10 sm:py-3 sm:pl-11 sm:pr-4"
                  />
                </div>

                <div className="flex w-full gap-2 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:px-3 sm:text-sm"
                  >
                    <option value="All">All Categories</option>
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:px-3 sm:text-sm"
                  >
                    <option value="All">All Status</option>
                    <option value="Paid">Paid</option>
                    <option value="Partially Paid">Partially Paid</option>
                    <option value="Pending">Pending</option>
                  </select>
                  <select
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:px-3 sm:text-sm"
                  >
                    <option value="All">All Dates</option>
                    <option value="Today">Today</option>
                    <option value="This Week">This Week</option>
                    <option value="This Month">This Month</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Desktop table */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b border-[#e4e2da] bg-[#fafaf8] text-left">
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5 sm:py-4">
                      Expense
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5 sm:py-4">
                      Date
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5 sm:py-4">
                      Category
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5 sm:py-4">
                      Vendor
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5 sm:py-4">
                      Amount
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5 sm:py-4">
                      Paid
                    </th>
                    <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5 sm:py-4">
                      Status
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5 sm:py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td
                        colSpan={8}
                        className="px-5 py-14 text-center text-sm text-gray-500"
                      >
                        Loading expenses…
                      </td>
                    </tr>
                  ) : filteredExpenses.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="px-5 py-14 text-center">
                        <p className="font-semibold text-gray-900">
                          No expenses found
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Try changing your search or filters.
                        </p>
                      </td>
                    </tr>
                  ) : (
                    filteredExpenses.map((expense) => (
                      <tr
                        key={expense.id}
                        className="border-b border-[#efeee9] transition hover:bg-[#fafaf8]"
                      >
                        <td className="px-4 py-3 sm:px-5 sm:py-4">
                          <p className="text-xs font-semibold text-[#176b5b]">
                            {expense.expenseNo}
                          </p>
                          <p className="mt-1 font-medium text-gray-900">
                            {expense.description}
                          </p>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600 sm:px-5 sm:py-4">
                          {formatDate(expense.date)}
                        </td>
                        <td className="px-4 py-3 sm:px-5 sm:py-4">
                          <span className="rounded-lg bg-gray-100 px-2.5 py-1.5 text-xs font-medium text-gray-700">
                            {expense.category}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600 sm:px-5 sm:py-4">
                          {expense.vendor}
                        </td>
                        <td className="px-4 py-3 text-right text-sm font-semibold text-gray-900 sm:px-5 sm:py-4">
                          {formatCurrency(expense.amount)}
                        </td>
                        <td className="px-4 py-3 text-right text-sm text-gray-700 sm:px-5 sm:py-4">
                          {formatCurrency(expense.paidAmount)}
                        </td>
                        <td className="px-4 py-3 text-center sm:px-5 sm:py-4">
                          <span
                            className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusClasses(
                              expense.status
                            )}`}
                          >
                            {expense.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right sm:px-5 sm:py-4">
                          <button
                            onClick={() => setSelectedExpense(expense)}
                            className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:border-[#176b5b] hover:text-[#176b5b]"
                          >
                            View
                          </button>
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
                  Loading expenses…
                </p>
              ) : filteredExpenses.length === 0 ? (
                <p className="py-10 text-center text-sm text-gray-500">
                  No expenses found.
                </p>
              ) : (
                filteredExpenses.map((expense) => (
                  <button
                    key={expense.id}
                    type="button"
                    onClick={() => setSelectedExpense(expense)}
                    className="w-full rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3 text-left"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-[10px] font-semibold text-[#176b5b]">
                          {expense.expenseNo}
                        </p>
                        <p className="mt-0.5 truncate font-semibold text-gray-900">
                          {expense.description}
                        </p>
                        <p className="mt-0.5 text-xs text-gray-500">
                          {expense.vendor} · {formatDate(expense.date)}
                        </p>
                      </div>
                      <span
                        className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium ${getStatusClasses(
                          expense.status
                        )}`}
                      >
                        {expense.status}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs">
                      <span className="rounded-md bg-gray-100 px-2 py-0.5 text-gray-600">
                        {expense.category}
                      </span>
                      <span className="font-semibold text-gray-900">
                        {formatCurrency(expense.amount)}
                      </span>
                    </div>
                  </button>
                ))
              )}
            </div>

            <div className="flex flex-col gap-1 border-t border-[#e4e2da] px-3 py-3 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4 sm:text-sm">
              <p>
                Showing{" "}
                <span className="font-semibold text-gray-900">
                  {filteredExpenses.length}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900">
                  {expenses.length}
                </span>
              </p>
              <p>
                Filtered total:{" "}
                <span className="font-semibold text-gray-900">
                  {formatCurrency(
                    filteredExpenses.reduce((s, e) => s + e.amount, 0)
                  )}
                </span>
              </p>
            </div>
          </section>

          <aside className="space-y-4 sm:space-y-6">
            <div className="rounded-2xl border border-[#e4e2da] bg-white p-4 shadow-sm sm:p-5">
              <h2 className="font-semibold text-gray-900">Expense Breakdown</h2>
              <p className="mt-1 text-xs text-gray-500">Spending by category</p>
              <div className="mt-4 space-y-4">
                {categoryTotals.map((item) => (
                  <div key={item.category}>
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <span className="truncate text-sm text-gray-600">
                        {item.category}
                      </span>
                      <span className="shrink-0 text-sm font-semibold text-gray-900">
                        {formatCurrency(item.amount)}
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className="h-full rounded-full bg-[#176b5b]"
                        style={{
                          width: `${(item.amount / maxCategoryAmount) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
                {categoryTotals.length === 0 && (
                  <p className="text-sm text-gray-500">No expense data.</p>
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-[#e4e2da] bg-white p-4 shadow-sm sm:p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="font-semibold text-gray-900">
                    Pending Payments
                  </h2>
                  <p className="mt-1 text-xs text-gray-500">Need payment</p>
                </div>
                <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700">
                  {pendingCount}
                </span>
              </div>
              <div className="space-y-3">
                {expenses
                  .filter((e) => e.status !== "Paid")
                  .map((expense) => (
                    <button
                      key={expense.id}
                      type="button"
                      onClick={() => setSelectedExpense(expense)}
                      className="w-full rounded-xl border border-gray-100 bg-[#fafaf8] p-3 text-left transition hover:border-[#d7ddd9] hover:bg-white"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium text-gray-900">
                            {expense.vendor}
                          </p>
                          <p className="mt-1 truncate text-xs text-gray-500">
                            {expense.description}
                          </p>
                        </div>
                        <span className="shrink-0 text-sm font-semibold text-red-600">
                          {formatCurrency(
                            expense.amount - expense.paidAmount
                          )}
                        </span>
                      </div>
                    </button>
                  ))}
                {pendingCount === 0 && (
                  <div className="rounded-xl bg-emerald-50 p-4 text-center">
                    <p className="text-sm font-medium text-emerald-700">
                      All expenses are paid.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </main>

      {showAddModal && (
        <ModalPortal>
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#e4e2da] px-4 py-4 sm:px-6 sm:py-5">
              <div>
                <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                  Add Expense
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Record a new business expense.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-400 hover:bg-gray-100"
              >
                ×
              </button>
            </div>
            <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-6">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  value={newExpense.date}
                  onChange={(e) =>
                    setNewExpense({ ...newExpense, date: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  value={newExpense.category}
                  onChange={(e) =>
                    setNewExpense({ ...newExpense, category: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                >
                  {categories.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Description
                </label>
                <input
                  value={newExpense.description}
                  onChange={(e) =>
                    setNewExpense({
                      ...newExpense,
                      description: e.target.value,
                    })
                  }
                  placeholder="e.g. Plywood sheets"
                  className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Vendor / Paid To
                </label>
                <input
                  value={newExpense.vendor}
                  onChange={(e) =>
                    setNewExpense({ ...newExpense, vendor: e.target.value })
                  }
                  placeholder="Vendor name"
                  className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Payment Mode
                </label>
                <select
                  value={newExpense.paymentMode}
                  onChange={(e) =>
                    setNewExpense({
                      ...newExpense,
                      paymentMode: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                >
                  {paymentModes.map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Total Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                    ₹
                  </span>
                  <input
                    type="number"
                    min="0"
                    value={newExpense.amount}
                    onChange={(e) =>
                      setNewExpense({ ...newExpense, amount: e.target.value })
                    }
                    placeholder="0"
                    className="w-full rounded-xl border border-gray-200 py-2.5 pl-8 pr-3 text-sm outline-none focus:border-[#176b5b]"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Paid Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                    ₹
                  </span>
                  <input
                    type="number"
                    min="0"
                    value={newExpense.paidAmount}
                    onChange={(e) =>
                      setNewExpense({
                        ...newExpense,
                        paidAmount: e.target.value,
                      })
                    }
                    placeholder="0"
                    className="w-full rounded-xl border border-gray-200 py-2.5 pl-8 pr-3 text-sm outline-none focus:border-[#176b5b]"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Notes
                </label>
                <textarea
                  rows={3}
                  value={newExpense.notes}
                  onChange={(e) =>
                    setNewExpense({ ...newExpense, notes: e.target.value })
                  }
                  placeholder="Optional notes..."
                  className="w-full resize-none rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                />
              </div>
            </div>
            <div className="flex justify-end gap-3 border-t border-[#e4e2da] bg-[#fafaf8] px-4 py-4 sm:px-6">
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleAddExpense}
                disabled={saving}
                className="rounded-xl bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125748] disabled:opacity-60"
              >
                {saving ? "Saving…" : "Save Expense"}
              </button>
            </div>
          </div>
        </ModalPortal>
      )}

      {selectedExpense && (
        <ModalPortal>
          <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#e4e2da] px-4 py-4 sm:px-6 sm:py-5">
              <div>
                <p className="text-xs font-semibold text-[#176b5b]">
                  {selectedExpense.expenseNo}
                </p>
                <h2 className="mt-1 text-lg font-bold text-gray-900 sm:text-xl">
                  Expense Details
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedExpense(null)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-400 hover:bg-gray-100"
              >
                ×
              </button>
            </div>
            <div className="grid gap-3 p-4 sm:grid-cols-2 sm:gap-4 sm:p-6">
              <div className="rounded-xl bg-[#fafaf8] p-4 sm:col-span-2">
                <p className="text-xs text-gray-500">Description</p>
                <p className="mt-1 font-medium text-gray-900">
                  {selectedExpense.description}
                </p>
              </div>
              <div className="rounded-xl bg-[#fafaf8] p-4">
                <p className="text-xs text-gray-500">Date</p>
                <p className="mt-1 font-medium text-gray-900">
                  {formatDate(selectedExpense.date)}
                </p>
              </div>
              <div className="rounded-xl bg-[#fafaf8] p-4">
                <p className="text-xs text-gray-500">Category</p>
                <p className="mt-1 font-medium text-gray-900">
                  {selectedExpense.category}
                </p>
              </div>
              <div className="rounded-xl bg-[#fafaf8] p-4">
                <p className="text-xs text-gray-500">Vendor</p>
                <p className="mt-1 font-medium text-gray-900">
                  {selectedExpense.vendor}
                </p>
              </div>
              <div className="rounded-xl bg-[#fafaf8] p-4">
                <p className="text-xs text-gray-500">Payment Mode</p>
                <p className="mt-1 font-medium text-gray-900">
                  {selectedExpense.paymentMode}
                </p>
              </div>
              <div className="rounded-xl bg-[#fafaf8] p-4">
                <p className="text-xs text-gray-500">Total</p>
                <p className="mt-1 text-lg font-bold text-gray-900">
                  {formatCurrency(selectedExpense.amount)}
                </p>
              </div>
              <div className="rounded-xl bg-[#fafaf8] p-4">
                <p className="text-xs text-gray-500">Paid</p>
                <p className="mt-1 text-lg font-bold text-emerald-700">
                  {formatCurrency(selectedExpense.paidAmount)}
                </p>
              </div>
              <div className="sm:col-span-2">
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-100 p-4">
                  <div>
                    <p className="text-xs text-gray-500">Status</p>
                    <span
                      className={`mt-2 inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusClasses(
                        selectedExpense.status
                      )}`}
                    >
                      {selectedExpense.status}
                    </span>
                  </div>
                  {selectedExpense.status !== "Paid" && (
                    <button
                      type="button"
                      onClick={() => markAsPaid(selectedExpense.id)}
                      className="rounded-xl bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125748]"
                    >
                      Mark as Paid
                    </button>
                  )}
                </div>
              </div>
              {selectedExpense.notes && (
                <div className="rounded-xl border border-gray-100 p-4 sm:col-span-2">
                  <p className="text-xs text-gray-500">Notes</p>
                  <p className="mt-1 text-sm text-gray-700">
                    {selectedExpense.notes}
                  </p>
                </div>
              )}
            </div>
            <div className="flex justify-end border-t border-[#e4e2da] bg-[#fafaf8] px-4 py-4 sm:px-6">
              <button
                type="button"
                onClick={() => setSelectedExpense(null)}
                className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </ModalPortal>
      )}
    </div>
  );
}
