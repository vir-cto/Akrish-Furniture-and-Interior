// "use client";

// import { useMemo, useState } from "react";

// type PaymentStatus = "Received" | "Pending" | "Overdue" | "Partial";
// type PaymentMethod = "UPI" | "Bank Transfer" | "Cash" | "Card" | "Cheque";

// type Payment = {
//   id: string;
//   paymentNo: string;
//   projectId: string;
//   project: string;
//   client: string;
//   projectType: string;
//   invoiceNo: string;
//   invoiceAmount: number;
//   amountReceived: number;
//   pendingAmount: number;
//   paymentDate: string;
//   dueDate: string;
//   method: PaymentMethod;
//   status: PaymentStatus;
//   notes: string;
// };

// const initialPayments: Payment[] = [
//   {
//     id: "1",
//     paymentNo: "PAY-INT-001",
//     projectId: "INT-001",
//     project: "Luxury 3 BHK Interior",
//     client: "Rahul Kumar",
//     projectType: "Residential",
//     invoiceNo: "INV-INT-001",
//     invoiceAmount: 850000,
//     amountReceived: 520000,
//     pendingAmount: 330000,
//     paymentDate: "2026-09-28",
//     dueDate: "2026-10-15",
//     method: "Bank Transfer",
//     status: "Partial",
//     notes: "First and second milestone payments received.",
//   },
//   {
//     id: "2",
//     paymentNo: "PAY-INT-002",
//     projectId: "INT-002",
//     project: "Modern 2 BHK Interior",
//     client: "Priya Sharma",
//     projectType: "Residential",
//     invoiceNo: "INV-INT-002",
//     invoiceAmount: 620000,
//     amountReceived: 310000,
//     pendingAmount: 310000,
//     paymentDate: "2026-09-25",
//     dueDate: "2026-10-12",
//     method: "UPI",
//     status: "Partial",
//     notes: "50% advance received.",
//   },
//   {
//     id: "3",
//     paymentNo: "PAY-INT-003",
//     projectId: "INT-003",
//     project: "Modern Villa Interior",
//     client: "Suresh Reddy",
//     projectType: "Residential",
//     invoiceNo: "INV-INT-003",
//     invoiceAmount: 1250000,
//     amountReceived: 750000,
//     pendingAmount: 500000,
//     paymentDate: "2026-09-20",
//     dueDate: "2026-10-10",
//     method: "Bank Transfer",
//     status: "Partial",
//     notes: "60% of project value received.",
//   },
//   {
//     id: "4",
//     paymentNo: "PAY-INT-004",
//     projectId: "INT-004",
//     project: "Apartment Interior",
//     client: "Anjali Rao",
//     projectType: "Residential",
//     invoiceNo: "INV-INT-004",
//     invoiceAmount: 480000,
//     amountReceived: 480000,
//     pendingAmount: 0,
//     paymentDate: "2026-09-18",
//     dueDate: "2026-09-25",
//     method: "Cheque",
//     status: "Received",
//     notes: "Full payment received.",
//   },
//   {
//     id: "5",
//     paymentNo: "PAY-INT-005",
//     projectId: "INT-005",
//     project: "Corporate Office Interior",
//     client: "Kiran Kumar",
//     projectType: "Commercial",
//     invoiceNo: "INV-INT-005",
//     invoiceAmount: 980000,
//     amountReceived: 490000,
//     pendingAmount: 490000,
//     paymentDate: "2026-09-15",
//     dueDate: "2026-10-05",
//     method: "Bank Transfer",
//     status: "Overdue",
//     notes: "Second milestone payment is overdue.",
//   },
//   {
//     id: "6",
//     paymentNo: "PAY-INT-006",
//     projectId: "INT-006",
//     project: "2 BHK Interior",
//     client: "Meghana Devi",
//     projectType: "Residential",
//     invoiceNo: "INV-INT-006",
//     invoiceAmount: 390000,
//     amountReceived: 100000,
//     pendingAmount: 290000,
//     paymentDate: "2026-09-10",
//     dueDate: "2026-10-20",
//     method: "UPI",
//     status: "Partial",
//     notes: "Initial advance received.",
//   },
//   {
//     id: "7",
//     paymentNo: "PAY-INT-007",
//     projectId: "INT-007",
//     project: "Commercial Office Interior",
//     client: "Vamsi Krishna",
//     projectType: "Commercial",
//     invoiceNo: "INV-INT-007",
//     invoiceAmount: 720000,
//     amountReceived: 360000,
//     pendingAmount: 360000,
//     paymentDate: "2026-09-05",
//     dueDate: "2026-10-18",
//     method: "Card",
//     status: "Partial",
//     notes: "50% advance received.",
//   },
//   {
//     id: "8",
//     paymentNo: "PAY-INT-008",
//     projectId: "INT-008",
//     project: "Living Room Interior",
//     client: "Sneha Reddy",
//     projectType: "Residential",
//     invoiceNo: "INV-INT-008",
//     invoiceAmount: 280000,
//     amountReceived: 280000,
//     pendingAmount: 0,
//     paymentDate: "2026-09-02",
//     dueDate: "2026-09-10",
//     method: "Cash",
//     status: "Received",
//     notes: "Payment received in full.",
//   },
// ];

// const statuses = [
//   "All Status",
//   "Received",
//   "Partial",
//   "Pending",
//   "Overdue",
// ];

// const methods = [
//   "All Methods",
//   "UPI",
//   "Bank Transfer",
//   "Cash",
//   "Card",
//   "Cheque",
// ];

// const projectTypes = [
//   "All Types",
//   "Residential",
//   "Commercial",
// ];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function formatDate(date: string) {
//   if (!date) return "-";

//   return new Date(date).toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });
// }

// function statusClass(status: PaymentStatus) {
//   if (status === "Received") {
//     return "border-green-200 bg-green-50 text-green-700";
//   }

//   if (status === "Overdue") {
//     return "border-red-200 bg-red-50 text-red-700";
//   }

//   if (status === "Partial") {
//     return "border-blue-200 bg-blue-50 text-blue-700";
//   }

//   return "border-yellow-200 bg-yellow-50 text-yellow-700";
// }

// function methodClass(method: PaymentMethod) {
//   if (method === "UPI") {
//     return "bg-purple-50 text-purple-700";
//   }

//   if (method === "Bank Transfer") {
//     return "bg-blue-50 text-blue-700";
//   }

//   if (method === "Cash") {
//     return "bg-green-50 text-green-700";
//   }

//   if (method === "Card") {
//     return "bg-orange-50 text-orange-700";
//   }

//   return "bg-gray-100 text-gray-700";
// }

// export default function InteriorPaymentsPage() {
//   const [payments, setPayments] = useState<Payment[]>(initialPayments);

//   const [search, setSearch] = useState("");
//   const [status, setStatus] = useState("All Status");
//   const [method, setMethod] = useState("All Methods");
//   const [projectType, setProjectType] = useState("All Types");

//   const [showDetails, setShowDetails] = useState<Payment | null>(
//     null
//   );

//   const [showRecordModal, setShowRecordModal] = useState(false);

//   const [newPayment, setNewPayment] = useState({
//     project: "",
//     client: "",
//     projectType: "Residential",
//     invoiceNo: "",
//     invoiceAmount: "",
//     amountReceived: "",
//     paymentDate: "",
//     dueDate: "",
//     method: "Bank Transfer" as PaymentMethod,
//     notes: "",
//   });

//   const filteredPayments = useMemo(() => {
//     return payments.filter((payment) => {
//       const searchText = search.toLowerCase();

//       const matchesSearch =
//         payment.paymentNo.toLowerCase().includes(searchText) ||
//         payment.project.toLowerCase().includes(searchText) ||
//         payment.client.toLowerCase().includes(searchText) ||
//         payment.invoiceNo.toLowerCase().includes(searchText);

//       const matchesStatus =
//         status === "All Status" || payment.status === status;

//       const matchesMethod =
//         method === "All Methods" || payment.method === method;

//       const matchesType =
//         projectType === "All Types" ||
//         payment.projectType === projectType;

//       return (
//         matchesSearch &&
//         matchesStatus &&
//         matchesMethod &&
//         matchesType
//       );
//     });
//   }, [payments, search, status, method, projectType]);

//   const totalInvoiceValue = filteredPayments.reduce(
//     (sum, payment) => sum + payment.invoiceAmount,
//     0
//   );

//   const totalReceived = filteredPayments.reduce(
//     (sum, payment) => sum + payment.amountReceived,
//     0
//   );

//   const totalPending = filteredPayments.reduce(
//     (sum, payment) => sum + payment.pendingAmount,
//     0
//   );

//   const overdueAmount = filteredPayments
//     .filter((payment) => payment.status === "Overdue")
//     .reduce((sum, payment) => sum + payment.pendingAmount, 0);

//   const receivedCount = filteredPayments.filter(
//     (payment) => payment.status === "Received"
//   ).length;

//   const partialCount = filteredPayments.filter(
//     (payment) => payment.status === "Partial"
//   ).length;

//   const pendingCount = filteredPayments.filter(
//     (payment) => payment.status === "Pending"
//   ).length;

//   const overdueCount = filteredPayments.filter(
//     (payment) => payment.status === "Overdue"
//   ).length;

//   const collectionPercentage = totalInvoiceValue
//     ? Math.round((totalReceived / totalInvoiceValue) * 100)
//     : 0;

//   function calculateStatus(
//     invoiceAmount: number,
//     amountReceived: number,
//     dueDate: string
//   ): PaymentStatus {
//     if (amountReceived >= invoiceAmount) {
//       return "Received";
//     }

//     if (amountReceived > 0) {
//       if (
//         dueDate &&
//         new Date(dueDate).getTime() < new Date().getTime()
//       ) {
//         return "Overdue";
//       }

//       return "Partial";
//     }

//     if (
//       dueDate &&
//       new Date(dueDate).getTime() < new Date().getTime()
//     ) {
//       return "Overdue";
//     }

//     return "Pending";
//   }

//   function recordPayment() {
//     if (
//       !newPayment.project ||
//       !newPayment.client ||
//       !newPayment.invoiceNo ||
//       !newPayment.invoiceAmount ||
//       !newPayment.amountReceived
//     ) {
//       alert("Please fill all required fields.");
//       return;
//     }

//     const invoiceAmount = Number(newPayment.invoiceAmount);
//     const amountReceived = Number(newPayment.amountReceived);

//     const payment: Payment = {
//       id: Date.now().toString(),
//       paymentNo: `PAY-INT-${String(
//         payments.length + 1
//       ).padStart(3, "0")}`,
//       projectId: `INT-${String(payments.length + 1).padStart(
//         3,
//         "0"
//       )}`,
//       project: newPayment.project,
//       client: newPayment.client,
//       projectType: newPayment.projectType,
//       invoiceNo: newPayment.invoiceNo,
//       invoiceAmount,
//       amountReceived,
//       pendingAmount: Math.max(
//         invoiceAmount - amountReceived,
//         0
//       ),
//       paymentDate:
//         newPayment.paymentDate ||
//         new Date().toISOString().split("T")[0],
//       dueDate: newPayment.dueDate,
//       method: newPayment.method,
//       status: calculateStatus(
//         invoiceAmount,
//         amountReceived,
//         newPayment.dueDate
//       ),
//       notes: newPayment.notes,
//     };

//     setPayments((current) => [payment, ...current]);

//     setNewPayment({
//       project: "",
//       client: "",
//       projectType: "Residential",
//       invoiceNo: "",
//       invoiceAmount: "",
//       amountReceived: "",
//       paymentDate: "",
//       dueDate: "",
//       method: "Bank Transfer",
//       notes: "",
//     });

//     setShowRecordModal(false);
//   }

//   function markAsReceived(paymentId: string) {
//     setPayments((current) =>
//       current.map((payment) =>
//         payment.id === paymentId
//           ? {
//               ...payment,
//               amountReceived: payment.invoiceAmount,
//               pendingAmount: 0,
//               status: "Received",
//               paymentDate: new Date()
//                 .toISOString()
//                 .split("T")[0],
//             }
//           : payment
//       )
//     );

//     setShowDetails(null);
//   }

//   function markAsPending(paymentId: string) {
//     setPayments((current) =>
//       current.map((payment) =>
//         payment.id === paymentId
//           ? {
//               ...payment,
//               status: "Pending",
//             }
//           : payment
//       )
//     );

//     setShowDetails(null);
//   }

//   function sendReminder(payment: Payment) {
//     alert(
//       `Payment reminder prepared for ${payment.client} regarding ${payment.invoiceNo}.`
//     );
//   }

//   function exportPayments() {
//     const headers = [
//       "Payment No",
//       "Project ID",
//       "Project",
//       "Client",
//       "Project Type",
//       "Invoice No",
//       "Invoice Amount",
//       "Amount Received",
//       "Pending Amount",
//       "Payment Date",
//       "Due Date",
//       "Method",
//       "Status",
//       "Notes",
//     ];

//     const rows = filteredPayments.map((payment) => [
//       payment.paymentNo,
//       payment.projectId,
//       payment.project,
//       payment.client,
//       payment.projectType,
//       payment.invoiceNo,
//       payment.invoiceAmount,
//       payment.amountReceived,
//       payment.pendingAmount,
//       payment.paymentDate,
//       payment.dueDate,
//       payment.method,
//       payment.status,
//       payment.notes,
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
//     link.download = "akrish-interior-payments.csv";
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
//                 <span>Payments</span>
//               </div>

//               <h1 className="text-2xl font-bold tracking-tight">
//                 Payments
//               </h1>

//               <p className="mt-1 text-sm text-gray-500">
//                 Track project invoices, collections, pending payments
//                 and overdue amounts.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               <button
//                 onClick={exportPayments}
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
//                 onClick={() => setShowRecordModal(true)}
//                 className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#12594b]"
//               >
//                 + Record Payment
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1500px] space-y-5 px-5 py-6">
//         {/* KPI Cards */}
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//           <SummaryCard
//             title="Total Invoice Value"
//             value={formatCurrency(totalInvoiceValue)}
//             subtitle={`${filteredPayments.length} payment records`}
//             icon="₹"
//           />

//           <SummaryCard
//             title="Amount Received"
//             value={formatCurrency(totalReceived)}
//             subtitle={`${collectionPercentage}% collection`}
//             icon="✓"
//             iconClass="bg-green-50 text-green-700"
//           />

//           <SummaryCard
//             title="Pending Amount"
//             value={formatCurrency(totalPending)}
//             subtitle={`${partialCount + pendingCount} open payments`}
//             icon="◷"
//             iconClass="bg-yellow-50 text-yellow-700"
//           />

//           <SummaryCard
//             title="Overdue"
//             value={formatCurrency(overdueAmount)}
//             subtitle={`${overdueCount} overdue payment${
//               overdueCount !== 1 ? "s" : ""
//             }`}
//             icon="!"
//             iconClass="bg-red-50 text-red-700"
//           />
//         </div>

//         {/* Collection Overview */}
//         <section className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//           <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
//             <div className="flex-1">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h2 className="font-semibold">
//                     Collection Overview
//                   </h2>
//                   <p className="mt-1 text-sm text-gray-500">
//                     Overall project payment collection
//                   </p>
//                 </div>

//                 <span className="text-2xl font-bold text-[#176b5b]">
//                   {collectionPercentage}%
//                 </span>
//               </div>

//               <div className="mt-4 h-3 overflow-hidden rounded-full bg-gray-100">
//                 <div
//                   className="h-full rounded-full bg-[#176b5b]"
//                   style={{
//                     width: `${collectionPercentage}%`,
//                   }}
//                 />
//               </div>

//               <div className="mt-3 flex justify-between text-xs text-gray-500">
//                 <span>
//                   Received {formatCurrency(totalReceived)}
//                 </span>

//                 <span>
//                   Total {formatCurrency(totalInvoiceValue)}
//                 </span>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:w-[430px]">
//               <MiniMetric
//                 label="Received"
//                 value={receivedCount}
//                 className="text-green-700"
//               />

//               <MiniMetric
//                 label="Partial"
//                 value={partialCount}
//                 className="text-blue-700"
//               />

//               <MiniMetric
//                 label="Pending"
//                 value={pendingCount}
//                 className="text-yellow-700"
//               />

//               <MiniMetric
//                 label="Overdue"
//                 value={overdueCount}
//                 className="text-red-700"
//               />
//             </div>
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
//                 onChange={(event) =>
//                   setSearch(event.target.value)
//                 }
//                 placeholder="Search payment, project, client or invoice..."
//                 className="w-full rounded-lg border border-[#dddcd5] bg-[#fafaf8] py-2.5 pl-10 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//               />
//             </div>

//             <select
//               value={projectType}
//               onChange={(event) =>
//                 setProjectType(event.target.value)
//               }
//               className="rounded-lg border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {projectTypes.map((item) => (
//                 <option key={item}>{item}</option>
//               ))}
//             </select>

//             <select
//               value={status}
//               onChange={(event) =>
//                 setStatus(event.target.value)
//               }
//               className="rounded-lg border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {statuses.map((item) => (
//                 <option key={item}>{item}</option>
//               ))}
//             </select>

//             <select
//               value={method}
//               onChange={(event) =>
//                 setMethod(event.target.value)
//               }
//               className="rounded-lg border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {methods.map((item) => (
//                 <option key={item}>{item}</option>
//               ))}
//             </select>

//             <button
//               onClick={() => {
//                 setSearch("");
//                 setStatus("All Status");
//                 setMethod("All Methods");
//                 setProjectType("All Types");
//               }}
//               className="rounded-lg border border-[#dddcd5] px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
//             >
//               Clear
//             </button>
//           </div>
//         </section>

//         {/* Payment Table */}
//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="flex flex-col gap-2 border-b border-[#e4e2da] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
//             <div>
//               <h2 className="font-semibold">
//                 Project Payments
//               </h2>

//               <p className="text-sm text-gray-500">
//                 Showing {filteredPayments.length} of{" "}
//                 {payments.length} payment records
//               </p>
//             </div>

//             <div className="text-sm text-gray-500">
//               Pending:{" "}
//               <span className="font-semibold text-red-600">
//                 {formatCurrency(totalPending)}
//               </span>
//             </div>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="min-w-[1350px] w-full">
//               <thead className="bg-[#fafaf8]">
//                 <tr className="border-b border-[#e4e2da] text-left text-xs uppercase tracking-wide text-gray-500">
//                   <th className="px-5 py-3 font-semibold">
//                     Payment
//                   </th>

//                   <th className="px-4 py-3 font-semibold">
//                     Project / Client
//                   </th>

//                   <th className="px-4 py-3 font-semibold">
//                     Invoice
//                   </th>

//                   <th className="px-4 py-3 font-semibold">
//                     Received
//                   </th>

//                   <th className="px-4 py-3 font-semibold">
//                     Pending
//                   </th>

//                   <th className="px-4 py-3 font-semibold">
//                     Method
//                   </th>

//                   <th className="px-4 py-3 font-semibold">
//                     Due Date
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
//                 {filteredPayments.length === 0 ? (
//                   <tr>
//                     <td
//                       colSpan={9}
//                       className="px-5 py-12 text-center text-sm text-gray-500"
//                     >
//                       No payment records found.
//                     </td>
//                   </tr>
//                 ) : (
//                   filteredPayments.map((payment) => (
//                     <tr
//                       key={payment.id}
//                       className="border-b border-[#eeeeea] last:border-b-0 hover:bg-[#fcfcfa]"
//                     >
//                       <td className="px-5 py-4">
//                         <button
//                           onClick={() =>
//                             setShowDetails(payment)
//                           }
//                           className="text-left"
//                         >
//                           <p className="font-semibold text-gray-900 hover:text-[#176b5b]">
//                             {payment.paymentNo}
//                           </p>

//                           <p className="mt-1 text-xs text-gray-500">
//                             {formatDate(payment.paymentDate)}
//                           </p>
//                         </button>
//                       </td>

//                       <td className="px-4 py-4">
//                         <p className="font-medium text-gray-800">
//                           {payment.project}
//                         </p>

//                         <p className="mt-1 text-xs text-gray-500">
//                           {payment.client} ·{" "}
//                           {payment.projectType}
//                         </p>
//                       </td>

//                       <td className="px-4 py-4">
//                         <p className="text-sm font-medium">
//                           {payment.invoiceNo}
//                         </p>

//                         <p className="mt-1 text-xs text-gray-500">
//                           {formatCurrency(
//                             payment.invoiceAmount
//                           )}
//                         </p>
//                       </td>

//                       <td className="px-4 py-4 text-sm font-semibold text-green-700">
//                         {formatCurrency(
//                           payment.amountReceived
//                         )}
//                       </td>

//                       <td className="px-4 py-4 text-sm font-semibold text-red-600">
//                         {formatCurrency(
//                           payment.pendingAmount
//                         )}
//                       </td>

//                       <td className="px-4 py-4">
//                         <span
//                           className={`inline-flex rounded-md px-2.5 py-1 text-xs font-semibold ${methodClass(
//                             payment.method
//                           )}`}
//                         >
//                           {payment.method}
//                         </span>
//                       </td>

//                       <td className="px-4 py-4 text-sm text-gray-600">
//                         {formatDate(payment.dueDate)}
//                       </td>

//                       <td className="px-4 py-4">
//                         <span
//                           className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                             payment.status
//                           )}`}
//                         >
//                           {payment.status}
//                         </span>
//                       </td>

//                       <td className="px-4 py-4">
//                         <div className="flex justify-end gap-1">
//                           <button
//                             onClick={() =>
//                               setShowDetails(payment)
//                             }
//                             title="View details"
//                             className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
//                           >
//                             👁
//                           </button>

//                           {payment.status !== "Received" && (
//                             <button
//                               onClick={() =>
//                                 markAsReceived(payment.id)
//                               }
//                               title="Mark as received"
//                               className="rounded-md p-2 text-green-600 hover:bg-green-50"
//                             >
//                               ✓
//                             </button>
//                           )}

//                           {(payment.status === "Overdue" ||
//                             payment.status === "Partial") && (
//                             <button
//                               onClick={() =>
//                                 sendReminder(payment)
//                               }
//                               title="Send reminder"
//                               className="rounded-md p-2 text-orange-600 hover:bg-orange-50"
//                             >
//                               🔔
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

//         {/* Analytics */}
//         <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
//           {/* Payment Status */}
//           <section className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <h2 className="font-semibold">
//               Payment Status Breakdown
//             </h2>

//             <p className="mt-1 text-sm text-gray-500">
//               Number of payment records by status
//             </p>

//             <div className="mt-5 space-y-4">
//               <StatusRow
//                 label="Received"
//                 value={receivedCount}
//                 total={filteredPayments.length}
//                 amount={filteredPayments
//                   .filter(
//                     (payment) =>
//                       payment.status === "Received"
//                   )
//                   .reduce(
//                     (sum, payment) =>
//                       sum + payment.amountReceived,
//                     0
//                   )}
//                 className="bg-green-500"
//               />

//               <StatusRow
//                 label="Partial"
//                 value={partialCount}
//                 total={filteredPayments.length}
//                 amount={filteredPayments
//                   .filter(
//                     (payment) =>
//                       payment.status === "Partial"
//                   )
//                   .reduce(
//                     (sum, payment) =>
//                       sum + payment.pendingAmount,
//                     0
//                   )}
//                 className="bg-blue-500"
//               />

//               <StatusRow
//                 label="Pending"
//                 value={pendingCount}
//                 total={filteredPayments.length}
//                 amount={filteredPayments
//                   .filter(
//                     (payment) =>
//                       payment.status === "Pending"
//                   )
//                   .reduce(
//                     (sum, payment) =>
//                       sum + payment.pendingAmount,
//                     0
//                   )}
//                 className="bg-yellow-500"
//               />

//               <StatusRow
//                 label="Overdue"
//                 value={overdueCount}
//                 total={filteredPayments.length}
//                 amount={overdueAmount}
//                 className="bg-red-500"
//               />
//             </div>
//           </section>

//           {/* Methods */}
//           <section className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <h2 className="font-semibold">
//               Payment Method Overview
//             </h2>

//             <p className="mt-1 text-sm text-gray-500">
//               Collections grouped by payment method
//             </p>

//             <div className="mt-5 space-y-4">
//               {methods
//                 .filter((item) => item !== "All Methods")
//                 .map((item) => {
//                   const records = filteredPayments.filter(
//                     (payment) => payment.method === item
//                   );

//                   const amount = records.reduce(
//                     (sum, payment) =>
//                       sum + payment.amountReceived,
//                     0
//                   );

//                   const percentage = totalReceived
//                     ? Math.round(
//                         (amount / totalReceived) * 100
//                       )
//                     : 0;

//                   if (!records.length) return null;

//                   return (
//                     <div key={item}>
//                       <div className="mb-1.5 flex justify-between text-sm">
//                         <span className="font-medium">
//                           {item}
//                         </span>

//                         <span className="text-gray-500">
//                           {formatCurrency(amount)} ·{" "}
//                           {percentage}%
//                         </span>
//                       </div>

//                       <div className="h-2 overflow-hidden rounded-full bg-gray-100">
//                         <div
//                           className="h-full rounded-full bg-[#176b5b]"
//                           style={{
//                             width: `${percentage}%`,
//                           }}
//                         />
//                       </div>
//                     </div>
//                   );
//                 })}
//             </div>
//           </section>
//         </div>

//         {/* Pending Collection */}
//         <section className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//           <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
//             <div>
//               <h2 className="font-semibold">
//                 Pending Collection
//               </h2>

//               <p className="mt-1 text-sm text-gray-500">
//                 Projects with outstanding payment amounts
//               </p>
//             </div>

//             <span className="text-lg font-bold text-red-600">
//               {formatCurrency(totalPending)}
//             </span>
//           </div>

//           <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
//             {filteredPayments
//               .filter(
//                 (payment) => payment.pendingAmount > 0
//               )
//               .map((payment) => (
//                 <div
//                   key={payment.id}
//                   className="rounded-lg border border-[#e8e6de] p-4"
//                 >
//                   <div className="flex items-start justify-between gap-3">
//                     <div>
//                       <p className="font-semibold">
//                         {payment.project}
//                       </p>

//                       <p className="mt-1 text-xs text-gray-500">
//                         {payment.client}
//                       </p>
//                     </div>

//                     <span
//                       className={`rounded-full border px-2 py-1 text-[11px] font-semibold ${statusClass(
//                         payment.status
//                       )}`}
//                     >
//                       {payment.status}
//                     </span>
//                   </div>

//                   <div className="mt-4 flex items-end justify-between">
//                     <div>
//                       <p className="text-xs text-gray-500">
//                         Pending
//                       </p>

//                       <p className="mt-1 text-lg font-bold text-red-600">
//                         {formatCurrency(
//                           payment.pendingAmount
//                         )}
//                       </p>
//                     </div>

//                     <button
//                       onClick={() => sendReminder(payment)}
//                       className="rounded-lg border border-[#dddcd5] px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50"
//                     >
//                       Send Reminder
//                     </button>
//                   </div>
//                 </div>
//               ))}

//             {filteredPayments.filter(
//               (payment) => payment.pendingAmount > 0
//             ).length === 0 && (
//               <div className="col-span-full rounded-lg bg-green-50 p-5 text-center text-sm font-medium text-green-700">
//                 All payments are collected.
//               </div>
//             )}
//           </div>
//         </section>
//       </main>

//       {/* Payment Details Modal */}
//       {showDetails && (
//         <Modal
//           title="Payment Details"
//           onClose={() => setShowDetails(null)}
//         >
//           <div className="flex items-start justify-between gap-4 border-b border-[#e4e2da] pb-5">
//             <div>
//               <p className="text-sm text-gray-500">
//                 Payment Number
//               </p>

//               <h3 className="mt-1 text-xl font-bold">
//                 {showDetails.paymentNo}
//               </h3>

//               <p className="mt-1 text-sm text-gray-500">
//                 {showDetails.invoiceNo}
//               </p>
//             </div>

//             <span
//               className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${statusClass(
//                 showDetails.status
//               )}`}
//             >
//               {showDetails.status}
//             </span>
//           </div>

//           <div className="mt-5">
//             <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
//               <DetailItem
//                 label="Project"
//                 value={showDetails.project}
//               />

//               <DetailItem
//                 label="Client"
//                 value={showDetails.client}
//               />

//               <DetailItem
//                 label="Project Type"
//                 value={showDetails.projectType}
//               />

//               <DetailItem
//                 label="Invoice Amount"
//                 value={formatCurrency(
//                   showDetails.invoiceAmount
//                 )}
//               />

//               <DetailItem
//                 label="Amount Received"
//                 value={formatCurrency(
//                   showDetails.amountReceived
//                 )}
//               />

//               <DetailItem
//                 label="Pending Amount"
//                 value={formatCurrency(
//                   showDetails.pendingAmount
//                 )}
//               />

//               <DetailItem
//                 label="Payment Method"
//                 value={showDetails.method}
//               />

//               <DetailItem
//                 label="Payment Date"
//                 value={formatDate(
//                   showDetails.paymentDate
//                 )}
//               />

//               <DetailItem
//                 label="Due Date"
//                 value={formatDate(showDetails.dueDate)}
//               />

//               <DetailItem
//                 label="Invoice Number"
//                 value={showDetails.invoiceNo}
//               />
//             </div>

//             {showDetails.notes && (
//               <div className="mt-4 rounded-lg bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">
//                   Notes
//                 </p>

//                 <p className="mt-1 text-sm text-gray-700">
//                   {showDetails.notes}
//                 </p>
//               </div>
//             )}
//           </div>

//           <div className="mt-6 flex flex-wrap justify-end gap-2 border-t border-[#e4e2da] pt-4">
//             {(showDetails.status === "Partial" ||
//               showDetails.status === "Pending" ||
//               showDetails.status === "Overdue") && (
//               <button
//                 onClick={() =>
//                   sendReminder(showDetails)
//                 }
//                 className="rounded-lg border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700"
//               >
//                 🔔 Send Reminder
//               </button>
//             )}

//             {showDetails.status !== "Received" && (
//               <button
//                 onClick={() =>
//                   markAsReceived(showDetails.id)
//                 }
//                 className="rounded-lg bg-[#176b5b] px-4 py-2 text-sm font-semibold text-white"
//               >
//                 Mark as Received
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

//       {/* Record Payment Modal */}
//       {showRecordModal && (
//         <Modal
//           title="Record New Payment"
//           onClose={() => setShowRecordModal(false)}
//         >
//           <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//             <Input
//               label="Project Name *"
//               value={newPayment.project}
//               onChange={(value) =>
//                 setNewPayment({
//                   ...newPayment,
//                   project: value,
//                 })
//               }
//               placeholder="Luxury 3 BHK Interior"
//             />

//             <Input
//               label="Client Name *"
//               value={newPayment.client}
//               onChange={(value) =>
//                 setNewPayment({
//                   ...newPayment,
//                   client: value,
//                 })
//               }
//               placeholder="Client name"
//             />

//             <SelectInput
//               label="Project Type"
//               value={newPayment.projectType}
//               onChange={(value) =>
//                 setNewPayment({
//                   ...newPayment,
//                   projectType: value,
//                 })
//               }
//               options={["Residential", "Commercial"]}
//             />

//             <Input
//               label="Invoice Number *"
//               value={newPayment.invoiceNo}
//               onChange={(value) =>
//                 setNewPayment({
//                   ...newPayment,
//                   invoiceNo: value,
//                 })
//               }
//               placeholder="INV-INT-009"
//             />

//             <Input
//               label="Invoice Amount *"
//               type="number"
//               value={newPayment.invoiceAmount}
//               onChange={(value) =>
//                 setNewPayment({
//                   ...newPayment,
//                   invoiceAmount: value,
//                 })
//               }
//               placeholder="500000"
//             />

//             <Input
//               label="Amount Received *"
//               type="number"
//               value={newPayment.amountReceived}
//               onChange={(value) =>
//                 setNewPayment({
//                   ...newPayment,
//                   amountReceived: value,
//                 })
//               }
//               placeholder="250000"
//             />

//             <Input
//               label="Payment Date"
//               type="date"
//               value={newPayment.paymentDate}
//               onChange={(value) =>
//                 setNewPayment({
//                   ...newPayment,
//                   paymentDate: value,
//                 })
//               }
//             />

//             <Input
//               label="Due Date"
//               type="date"
//               value={newPayment.dueDate}
//               onChange={(value) =>
//                 setNewPayment({
//                   ...newPayment,
//                   dueDate: value,
//                 })
//               }
//             />

//             <SelectInput
//               label="Payment Method"
//               value={newPayment.method}
//               onChange={(value) =>
//                 setNewPayment({
//                   ...newPayment,
//                   method: value as PaymentMethod,
//                 })
//               }
//               options={[
//                 "UPI",
//                 "Bank Transfer",
//                 "Cash",
//                 "Card",
//                 "Cheque",
//               ]}
//             />

//             <Input
//               label="Notes"
//               value={newPayment.notes}
//               onChange={(value) =>
//                 setNewPayment({
//                   ...newPayment,
//                   notes: value,
//                 })
//               }
//               placeholder="Payment notes"
//             />
//           </div>

//           <div className="mt-6 rounded-lg bg-[#f7f7f4] p-4">
//             <div className="flex items-center justify-between">
//               <span className="text-sm text-gray-500">
//                 Calculated Pending
//               </span>

//               <span className="text-lg font-bold text-red-600">
//                 {formatCurrency(
//                   Math.max(
//                     Number(newPayment.invoiceAmount || 0) -
//                       Number(
//                         newPayment.amountReceived || 0
//                       ),
//                     0
//                   )
//                 )}
//               </span>
//             </div>
//           </div>

//           <div className="mt-6 flex justify-end gap-2 border-t border-[#e4e2da] pt-4">
//             <button
//               onClick={() => setShowRecordModal(false)}
//               className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium"
//             >
//               Cancel
//             </button>

//             <button
//               onClick={recordPayment}
//               className="rounded-lg bg-[#176b5b] px-5 py-2 text-sm font-semibold text-white"
//             >
//               Record Payment
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
//   value: string;
//   subtitle: string;
//   icon: string;
//   iconClass?: string;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//       <div className="flex items-start justify-between">
//         <div>
//           <p className="text-sm text-gray-500">
//             {title}
//           </p>

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

// function MiniMetric({
//   label,
//   value,
//   className,
// }: {
//   label: string;
//   value: number;
//   className: string;
// }) {
//   return (
//     <div className="rounded-lg bg-[#fafaf8] p-3 text-center">
//       <p className={`text-xl font-bold ${className}`}>
//         {value}
//       </p>

//       <p className="mt-1 text-xs text-gray-500">
//         {label}
//       </p>
//     </div>
//   );
// }

// function StatusRow({
//   label,
//   value,
//   total,
//   amount,
//   className,
// }: {
//   label: string;
//   value: number;
//   total: number;
//   amount: number;
//   className: string;
// }) {
//   const percentage = total
//     ? Math.round((value / total) * 100)
//     : 0;

//   return (
//     <div>
//       <div className="mb-1.5 flex items-center justify-between">
//         <span className="text-sm font-medium text-gray-700">
//           {label}
//         </span>

//         <span className="text-xs text-gray-500">
//           {value} · {formatCurrency(amount)}
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

//       <p className="mt-1 break-words text-sm font-semibold text-gray-800">
//         {value}
//       </p>
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
//         onChange={(event) =>
//           onChange(event.target.value)
//         }
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
//         onChange={(event) =>
//           onChange(event.target.value)
//         }
//         className="w-full rounded-lg border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//       >
//         {options.map((option) => (
//           <option key={option}>{option}</option>
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
//       <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//         <div className="sticky top-0 flex items-center justify-between border-b border-[#e4e2da] bg-white px-5 py-4">
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
//   getAllPayments,
//   createPayment,
//   updatePayment,
//   type InteriorPayment,
// } from "@/modules/interior/services/paymentService";
// import { Timestamp } from "firebase/firestore";

// type PaymentStatus = "Received" | "Pending" | "Overdue" | "Partial";
// type PaymentMethod = "UPI" | "Bank Transfer" | "Cash" | "Card" | "Cheque";

// type Payment = {
//   id: string;
//   paymentNo: string;
//   projectId: string;
//   project: string;
//   client: string;
//   projectType: string;
//   invoiceNo: string;
//   invoiceAmount: number;
//   amountReceived: number;
//   pendingAmount: number;
//   paymentDate: string;
//   dueDate: string;
//   method: PaymentMethod;
//   status: PaymentStatus;
//   notes: string;
// };

// const statuses = ["All Status", "Received", "Pending", "Overdue", "Partial"];
// const methods = [
//   "All Methods",
//   "UPI",
//   "Bank Transfer",
//   "Cash",
//   "Card",
//   "Cheque",
// ];
// const projectTypes = ["All Types", "Residential", "Commercial", "Office"];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function formatDate(date: string) {
//   if (!date || date === "—") return "—";
//   try {
//     const d = date.includes("T")
//       ? new Date(date)
//       : new Date(`${date}T00:00:00`);
//     if (Number.isNaN(d.getTime())) return date;
//     return d.toLocaleDateString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   } catch {
//     return date;
//   }
// }

// function statusClass(status: PaymentStatus) {
//   switch (status) {
//     case "Received":
//       return "bg-green-50 text-green-700 border-green-200";
//     case "Partial":
//       return "bg-blue-50 text-blue-700 border-blue-200";
//     case "Pending":
//       return "bg-amber-50 text-amber-700 border-amber-200";
//     case "Overdue":
//       return "bg-red-50 text-red-700 border-red-200";
//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function methodClass(method: PaymentMethod) {
//   return "bg-slate-50 text-slate-700 border-slate-200";
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

// function calculateStatus(
//   invoiceAmount: number,
//   amountReceived: number,
//   dueDate: string
// ): PaymentStatus {
//   if (amountReceived >= invoiceAmount && invoiceAmount > 0) {
//     return "Received";
//   }

//   const isOverdue =
//     !!dueDate &&
//     dueDate !== "—" &&
//     new Date(dueDate).getTime() < Date.now();

//   if (amountReceived > 0) {
//     return isOverdue ? "Overdue" : "Partial";
//   }

//   return isOverdue ? "Overdue" : "Pending";
// }

// function normalizeMethod(raw?: string): PaymentMethod {
//   const s = (raw || "Bank Transfer").trim();
//   if (
//     ["UPI", "Bank Transfer", "Cash", "Card", "Cheque"].includes(s)
//   ) {
//     return s as PaymentMethod;
//   }
//   return "Bank Transfer";
// }

// function mapToUi(p: InteriorPayment): Payment {
//   const invoiceAmount = Number(p.invoiceAmount ?? 0) || 0;
//   const amountReceived = Number(p.amountReceived ?? 0) || 0;
//   const pendingAmount =
//     p.pendingAmount !== undefined && p.pendingAmount !== null
//       ? Number(p.pendingAmount) || 0
//       : Math.max(invoiceAmount - amountReceived, 0);
//   const dueDate = p.dueDate || "";
//   const statusRaw = (p.status || "").toString();
//   const status: PaymentStatus =
//     statusRaw === "Received" ||
//     statusRaw === "Pending" ||
//     statusRaw === "Overdue" ||
//     statusRaw === "Partial"
//       ? statusRaw
//       : calculateStatus(invoiceAmount, amountReceived, dueDate);

//   return {
//     id: p.id,
//     paymentNo: p.paymentNo || `PAY-INT-${p.id.slice(0, 6).toUpperCase()}`,
//     projectId: p.projectId || "—",
//     project: p.project || p.projectName || "—",
//     client: p.client || p.clientName || "Unknown",
//     projectType: p.projectType || "Residential",
//     invoiceNo: p.invoiceNo || "—",
//     invoiceAmount,
//     amountReceived,
//     pendingAmount,
//     paymentDate: p.paymentDate || toDateString(p.createdAt) || "—",
//     dueDate: dueDate || "—",
//     method: normalizeMethod(p.method),
//     status,
//     notes: p.notes || "",
//   };
// }

// export default function InteriorPaymentsPage() {
//   const [payments, setPayments] = useState<Payment[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   const [search, setSearch] = useState("");
//   const [status, setStatus] = useState("All Status");
//   const [method, setMethod] = useState("All Methods");
//   const [projectType, setProjectType] = useState("All Types");

//   const [showDetails, setShowDetails] = useState<Payment | null>(null);
//   const [showRecordModal, setShowRecordModal] = useState(false);

//   const [newPayment, setNewPayment] = useState({
//     project: "",
//     client: "",
//     projectType: "Residential",
//     invoiceNo: "",
//     invoiceAmount: "",
//     amountReceived: "",
//     paymentDate: "",
//     dueDate: "",
//     method: "Bank Transfer" as PaymentMethod,
//     notes: "",
//   });

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllPayments();
//         if (cancelled) return;
//         setPayments(data.map(mapToUi));
//       } catch (err) {
//         console.error("Failed to load payments:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const filteredPayments = useMemo(() => {
//     const searchText = search.toLowerCase().trim();

//     return payments.filter((payment) => {
//       const matchesSearch =
//         !searchText ||
//         payment.paymentNo.toLowerCase().includes(searchText) ||
//         payment.client.toLowerCase().includes(searchText) ||
//         payment.project.toLowerCase().includes(searchText) ||
//         payment.invoiceNo.toLowerCase().includes(searchText);

//       const matchesStatus =
//         status === "All Status" || payment.status === status;
//       const matchesMethod =
//         method === "All Methods" || payment.method === method;
//       const matchesType =
//         projectType === "All Types" ||
//         payment.projectType === projectType;

//       return matchesSearch && matchesStatus && matchesMethod && matchesType;
//     });
//   }, [payments, search, status, method, projectType]);

//   const totalInvoiceValue = filteredPayments.reduce(
//     (sum, p) => sum + p.invoiceAmount,
//     0
//   );
//   const totalReceived = filteredPayments.reduce(
//     (sum, p) => sum + p.amountReceived,
//     0
//   );
//   const totalPending = filteredPayments.reduce(
//     (sum, p) => sum + p.pendingAmount,
//     0
//   );
//   const overdueAmount = filteredPayments
//     .filter((p) => p.status === "Overdue")
//     .reduce((sum, p) => sum + p.pendingAmount, 0);

//   const receivedCount = filteredPayments.filter(
//     (p) => p.status === "Received"
//   ).length;
//   const partialCount = filteredPayments.filter(
//     (p) => p.status === "Partial"
//   ).length;
//   const pendingCount = filteredPayments.filter(
//     (p) => p.status === "Pending"
//   ).length;
//   const overdueCount = filteredPayments.filter(
//     (p) => p.status === "Overdue"
//   ).length;

//   const collectionPercentage = totalInvoiceValue
//     ? Math.round((totalReceived / totalInvoiceValue) * 100)
//     : 0;

//   async function recordPayment() {
//     if (
//       !newPayment.project ||
//       !newPayment.client ||
//       !newPayment.invoiceNo ||
//       !newPayment.invoiceAmount ||
//       !newPayment.amountReceived
//     ) {
//       alert("Please fill all required fields.");
//       return;
//     }

//     const invoiceAmount = Number(newPayment.invoiceAmount);
//     const amountReceived = Number(newPayment.amountReceived);
//     const paymentDate =
//       newPayment.paymentDate || new Date().toISOString().split("T")[0];
//     const pendingAmount = Math.max(invoiceAmount - amountReceived, 0);
//     const statusValue = calculateStatus(
//       invoiceAmount,
//       amountReceived,
//       newPayment.dueDate
//     );

//     setSaving(true);
//     try {
//       const payload = {
//         paymentNo: `PAY-INT-${Date.now().toString().slice(-6)}`,
//         projectId: `INT-${Date.now().toString().slice(-4)}`,
//         project: newPayment.project.trim(),
//         client: newPayment.client.trim(),
//         projectType: newPayment.projectType,
//         invoiceNo: newPayment.invoiceNo.trim(),
//         invoiceAmount,
//         amountReceived,
//         pendingAmount,
//         paymentDate,
//         dueDate: newPayment.dueDate,
//         method: newPayment.method,
//         status: statusValue,
//         notes: newPayment.notes.trim(),
//       };

//       const id = await createPayment(payload);

//       setPayments((current) => [
//         {
//           id,
//           ...payload,
//           method: newPayment.method,
//           status: statusValue,
//         },
//         ...current,
//       ]);

//       setNewPayment({
//         project: "",
//         client: "",
//         projectType: "Residential",
//         invoiceNo: "",
//         invoiceAmount: "",
//         amountReceived: "",
//         paymentDate: "",
//         dueDate: "",
//         method: "Bank Transfer",
//         notes: "",
//       });
//       setShowRecordModal(false);
//     } catch (err) {
//       console.error(err);
//       alert("Unable to record payment.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function markAsReceived(paymentId: string) {
//     const payment = payments.find((p) => p.id === paymentId);
//     if (!payment) return;

//     const paymentDate = new Date().toISOString().split("T")[0];
//     const patch = {
//       amountReceived: payment.invoiceAmount,
//       pendingAmount: 0,
//       status: "Received" as const,
//       paymentDate,
//     };

//     setPayments((current) =>
//       current.map((p) => (p.id === paymentId ? { ...p, ...patch } : p))
//     );
//     setShowDetails((current) =>
//       current && current.id === paymentId
//         ? { ...current, ...patch }
//         : current
//     );

//     try {
//       await updatePayment(paymentId, patch);
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllPayments();
//         setPayments(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1600px] px-5 py-5 lg:px-8">
//           {/* <a
//             href="/interior/dashboard"
//             className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-[#176b5b] hover:underline"
//           >
//             ← Back to Interior
//           </a> */}
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               {/* <div className="mb-1 text-sm font-medium text-[#9a5b18]">
//                 Akrish / Furniture and Interior
//               </div> */}
//               <h1 className="text-2xl font-bold tracking-tight">Payments</h1>
//               <p className="mt-1 text-sm text-gray-500">
//                 Track interior project invoices and collections.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <button
//               onClick={() => setShowRecordModal(true)}
//               className="rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#125848]"
//             >
//               + Record Payment
//             </button>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-6 px-5 py-6 lg:px-8">
//         <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <Stat
//             label="Invoice Value"
//             value={loading ? "…" : formatCurrency(totalInvoiceValue)}
//             helper={`${collectionPercentage}% collected`}
//           />
//           <Stat
//             label="Received"
//             value={loading ? "…" : formatCurrency(totalReceived)}
//             helper={`${receivedCount} fully received`}
//           />
//           <Stat
//             label="Pending"
//             value={loading ? "…" : formatCurrency(totalPending)}
//             helper={`${partialCount} partial · ${pendingCount} pending`}
//           />
//           <Stat
//             label="Overdue"
//             value={loading ? "…" : formatCurrency(overdueAmount)}
//             helper={`${overdueCount} overdue`}
//           />
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <div className="flex items-center justify-between">
//             <p className="text-sm font-semibold">Collection progress</p>
//             <p className="text-lg font-bold text-[#176b5b]">
//               {collectionPercentage}%
//             </p>
//           </div>
//           <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
//             <div
//               className="h-full rounded-full bg-[#176b5b]"
//               style={{ width: `${collectionPercentage}%` }}
//             />
//           </div>
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-4">
//           <div className="flex flex-col gap-3 lg:flex-row">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search payment, client, project, invoice..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-4 py-2.5 text-sm outline-none focus:border-[#176b5b] lg:max-w-md"
//             />
//             <select
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//               className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {statuses.map((s) => (
//                 <option key={s}>{s}</option>
//               ))}
//             </select>
//             <select
//               value={method}
//               onChange={(e) => setMethod(e.target.value)}
//               className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {methods.map((m) => (
//                 <option key={m}>{m}</option>
//               ))}
//             </select>
//             <select
//               value={projectType}
//               onChange={(e) => setProjectType(e.target.value)}
//               className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {projectTypes.map((t) => (
//                 <option key={t}>{t}</option>
//               ))}
//             </select>
//           </div>
//         </section>

//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="border-b border-[#e4e2da] px-5 py-4">
//             <h2 className="font-semibold">Payment Records</h2>
//             <p className="mt-1 text-xs text-gray-500">
//               {filteredPayments.length} records
//             </p>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1100px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Payment</th>
//                   <th className="px-4 py-3 font-semibold">Client / Project</th>
//                   <th className="px-4 py-3 font-semibold">Invoice</th>
//                   <th className="px-4 py-3 font-semibold">Received</th>
//                   <th className="px-4 py-3 font-semibold">Pending</th>
//                   <th className="px-4 py-3 font-semibold">Method</th>
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
//                       Loading payments…
//                     </td>
//                   </tr>
//                 ) : (
//                   <>
//                     {filteredPayments.map((payment) => (
//                       <tr key={payment.id} className="hover:bg-[#fafaf8]">
//                         <td className="px-5 py-4">
//                           <p className="font-semibold text-[#176b5b]">
//                             {payment.paymentNo}
//                           </p>
//                           <p className="text-xs text-gray-400">
//                             {formatDate(payment.paymentDate)}
//                           </p>
//                         </td>
//                         <td className="px-4 py-4">
//                           <p className="text-sm font-medium text-gray-900">
//                             {payment.client}
//                           </p>
//                           <p className="text-xs text-gray-500">
//                             {payment.project}
//                           </p>
//                         </td>
//                         <td className="px-4 py-4">
//                           <p className="text-sm font-semibold">
//                             {formatCurrency(payment.invoiceAmount)}
//                           </p>
//                           <p className="text-xs text-gray-400">
//                             {payment.invoiceNo}
//                           </p>
//                         </td>
//                         <td className="px-4 py-4 text-sm font-medium text-green-700">
//                           {formatCurrency(payment.amountReceived)}
//                         </td>
//                         <td className="px-4 py-4 text-sm font-semibold text-orange-700">
//                           {formatCurrency(payment.pendingAmount)}
//                         </td>
//                         <td className="px-4 py-4">
//                           <span
//                             className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${methodClass(
//                               payment.method
//                             )}`}
//                           >
//                             {payment.method}
//                           </span>
//                         </td>
//                         <td className="px-4 py-4">
//                           <span
//                             className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                               payment.status
//                             )}`}
//                           >
//                             {payment.status}
//                           </span>
//                         </td>
//                         <td className="px-4 py-4 text-right">
//                           <button
//                             onClick={() => setShowDetails(payment)}
//                             className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                           >
//                             View
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                     {filteredPayments.length === 0 && (
//                       <tr>
//                         <td
//                           colSpan={8}
//                           className="px-5 py-12 text-center text-sm text-gray-500"
//                         >
//                           No payments found.
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

//       {showDetails && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-4">
//               <div>
//                 <p className="text-xs font-semibold text-[#176b5b]">
//                   {showDetails.paymentNo}
//                 </p>
//                 <h2 className="mt-1 text-xl font-bold">
//                   {showDetails.project}
//                 </h2>
//               </div>
//               <button
//                 onClick={() => setShowDetails(null)}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>
//             <div className="grid grid-cols-2 gap-3 p-6">
//               <Info label="Client" value={showDetails.client} />
//               <Info label="Type" value={showDetails.projectType} />
//               <Info label="Invoice" value={showDetails.invoiceNo} />
//               <Info label="Method" value={showDetails.method} />
//               <Info
//                 label="Invoice Amount"
//                 value={formatCurrency(showDetails.invoiceAmount)}
//               />
//               <Info
//                 label="Received"
//                 value={formatCurrency(showDetails.amountReceived)}
//               />
//               <Info
//                 label="Pending"
//                 value={formatCurrency(showDetails.pendingAmount)}
//               />
//               <Info label="Due Date" value={formatDate(showDetails.dueDate)} />
//               <Info
//                 label="Payment Date"
//                 value={formatDate(showDetails.paymentDate)}
//               />
//               <div className="rounded-xl bg-[#fafaf8] p-3">
//                 <p className="text-xs text-gray-400">Status</p>
//                 <span
//                   className={`mt-1 inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                     showDetails.status
//                   )}`}
//                 >
//                   {showDetails.status}
//                 </span>
//               </div>
//             </div>
//             {showDetails.notes && (
//               <div className="mx-6 mb-4 rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
//                 {showDetails.notes}
//               </div>
//             )}
//             <div className="flex flex-wrap gap-2 border-t border-[#e4e2da] px-6 py-4">
//               {showDetails.status !== "Received" && (
//                 <button
//                   onClick={() => markAsReceived(showDetails.id)}
//                   className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//                 >
//                   Mark Fully Received
//                 </button>
//               )}
//               <button
//                 onClick={() => setShowDetails(null)}
//                 className="ml-auto rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {showRecordModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-4">
//               <h2 className="text-lg font-bold">Record Payment</h2>
//               <button
//                 onClick={() => setShowRecordModal(false)}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>
//             <div className="grid gap-4 p-6 sm:grid-cols-2">
//               <Field
//                 label="Project *"
//                 value={newPayment.project}
//                 onChange={(v) =>
//                   setNewPayment((f) => ({ ...f, project: v }))
//                 }
//               />
//               <Field
//                 label="Client *"
//                 value={newPayment.client}
//                 onChange={(v) => setNewPayment((f) => ({ ...f, client: v }))}
//               />
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Project Type
//                 </label>
//                 <select
//                   value={newPayment.projectType}
//                   onChange={(e) =>
//                     setNewPayment((f) => ({
//                       ...f,
//                       projectType: e.target.value,
//                     }))
//                   }
//                   className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   <option>Residential</option>
//                   <option>Commercial</option>
//                   <option>Office</option>
//                 </select>
//               </div>
//               <Field
//                 label="Invoice No *"
//                 value={newPayment.invoiceNo}
//                 onChange={(v) =>
//                   setNewPayment((f) => ({ ...f, invoiceNo: v }))
//                 }
//               />
//               <Field
//                 label="Invoice Amount *"
//                 type="number"
//                 value={newPayment.invoiceAmount}
//                 onChange={(v) =>
//                   setNewPayment((f) => ({ ...f, invoiceAmount: v }))
//                 }
//               />
//               <Field
//                 label="Amount Received *"
//                 type="number"
//                 value={newPayment.amountReceived}
//                 onChange={(v) =>
//                   setNewPayment((f) => ({ ...f, amountReceived: v }))
//                 }
//               />
//               <Field
//                 label="Payment Date"
//                 type="date"
//                 value={newPayment.paymentDate}
//                 onChange={(v) =>
//                   setNewPayment((f) => ({ ...f, paymentDate: v }))
//                 }
//               />
//               <Field
//                 label="Due Date"
//                 type="date"
//                 value={newPayment.dueDate}
//                 onChange={(v) =>
//                   setNewPayment((f) => ({ ...f, dueDate: v }))
//                 }
//               />
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Method
//                 </label>
//                 <select
//                   value={newPayment.method}
//                   onChange={(e) =>
//                     setNewPayment((f) => ({
//                       ...f,
//                       method: e.target.value as PaymentMethod,
//                     }))
//                   }
//                   className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   <option>UPI</option>
//                   <option>Bank Transfer</option>
//                   <option>Cash</option>
//                   <option>Card</option>
//                   <option>Cheque</option>
//                 </select>
//               </div>
//               <div className="sm:col-span-2">
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Notes
//                 </label>
//                 <textarea
//                   rows={3}
//                   value={newPayment.notes}
//                   onChange={(e) =>
//                     setNewPayment((f) => ({ ...f, notes: e.target.value }))
//                   }
//                   className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//             </div>
//             <div className="flex justify-end gap-3 border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
//               <button
//                 onClick={() => setShowRecordModal(false)}
//                 className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium"
//               >
//                 Cancel
//               </button>
//               <button
//                 disabled={saving}
//                 onClick={recordPayment}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
//               >
//                 {saving ? "Saving…" : "Record Payment"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function Stat({
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
//   getAllPayments,
//   createPayment,
//   updatePayment,
//   generateNextInvoiceNo,
//   type InteriorPayment,
// } from "@/modules/interior/services/paymentService";
// import {
//   getAllInteriorProjects,
//   type InteriorProject,
// } from "@/modules/interior/services/projectService";
// import {
//   getAllClients,
//   type InteriorClient,
// } from "@/modules/interior/services/clientService";
// import { Timestamp } from "firebase/firestore";

// type PaymentStatus = "Received" | "Pending" | "Overdue" | "Partial";
// type PaymentMethod = "UPI" | "Bank Transfer" | "Cash" | "Card" | "Cheque";

// type Payment = {
//   id: string;
//   paymentNo: string;
//   projectId: string;
//   project: string;
//   client: string;
//   clientId: string;
//   projectType: string;
//   invoiceNo: string;
//   invoiceAmount: number;
//   amountReceived: number;
//   pendingAmount: number;
//   paymentDate: string;
//   dueDate: string;
//   method: PaymentMethod;
//   status: PaymentStatus;
//   notes: string;
// };

// const statuses = ["All Status", "Received", "Pending", "Overdue", "Partial"];
// const methods = [
//   "All Methods",
//   "UPI",
//   "Bank Transfer",
//   "Cash",
//   "Card",
//   "Cheque",
// ];
// const projectTypes = [
//   "All Types",
//   "Residential",
//   "Commercial",
//   "Office",
//   "Villa",
//   "Apartment",
// ];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function formatDate(date: string) {
//   if (!date || date === "—") return "—";
//   try {
//     const d = date.includes("T")
//       ? new Date(date)
//       : new Date(`${date}T00:00:00`);
//     if (Number.isNaN(d.getTime())) return date;
//     return d.toLocaleDateString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   } catch {
//     return date;
//   }
// }

// function statusClass(status: PaymentStatus) {
//   switch (status) {
//     case "Received":
//       return "bg-green-50 text-green-700 border-green-200";
//     case "Partial":
//       return "bg-blue-50 text-blue-700 border-blue-200";
//     case "Pending":
//       return "bg-amber-50 text-amber-700 border-amber-200";
//     case "Overdue":
//       return "bg-red-50 text-red-700 border-red-200";
//     default:
//       return "bg-gray-50 text-gray-700 border-gray-200";
//   }
// }

// function methodClass(_method: PaymentMethod) {
//   return "bg-slate-50 text-slate-700 border-slate-200";
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

// function calculateStatus(
//   invoiceAmount: number,
//   amountReceived: number,
//   dueDate: string
// ): PaymentStatus {
//   if (amountReceived >= invoiceAmount && invoiceAmount > 0) {
//     return "Received";
//   }

//   const isOverdue =
//     !!dueDate &&
//     dueDate !== "—" &&
//     new Date(dueDate).getTime() < Date.now();

//   if (amountReceived > 0) {
//     return isOverdue ? "Overdue" : "Partial";
//   }

//   return isOverdue ? "Overdue" : "Pending";
// }

// function normalizeMethod(raw?: string): PaymentMethod {
//   const s = (raw || "Bank Transfer").trim();
//   if (["UPI", "Bank Transfer", "Cash", "Card", "Cheque"].includes(s)) {
//     return s as PaymentMethod;
//   }
//   return "Bank Transfer";
// }

// function mapToUi(p: InteriorPayment): Payment {
//   const invoiceAmount = Number(p.invoiceAmount ?? 0) || 0;
//   const amountReceived = Number(p.amountReceived ?? 0) || 0;
//   const pendingAmount =
//     p.pendingAmount !== undefined && p.pendingAmount !== null
//       ? Number(p.pendingAmount) || 0
//       : Math.max(invoiceAmount - amountReceived, 0);
//   const dueDate = p.dueDate || "";
//   const statusRaw = (p.status || "").toString();
//   const status: PaymentStatus =
//     statusRaw === "Received" ||
//     statusRaw === "Pending" ||
//     statusRaw === "Overdue" ||
//     statusRaw === "Partial"
//       ? statusRaw
//       : calculateStatus(invoiceAmount, amountReceived, dueDate);

//   return {
//     id: p.id,
//     paymentNo: p.paymentNo || `PAY-INT-${p.id.slice(0, 6).toUpperCase()}`,
//     projectId: p.projectId || "",
//     project: p.project || p.projectName || "—",
//     client: p.client || p.clientName || "Unknown",
//     clientId: p.clientId || "",
//     projectType: p.projectType || "Residential",
//     invoiceNo: p.invoiceNo || "—",
//     invoiceAmount,
//     amountReceived,
//     pendingAmount,
//     paymentDate: p.paymentDate || toDateString(p.createdAt) || "—",
//     dueDate: dueDate || "—",
//     method: normalizeMethod(p.method),
//     status,
//     notes: p.notes || "",
//   };
// }

// function projectLabel(p: InteriorProject) {
//   const no = p.projectNo || p.projectId || p.id.slice(0, 8).toUpperCase();
//   const name = p.projectName || p.name || "Untitled";
//   return `${no} · ${name}`;
// }

// function clientLabel(c: InteriorClient) {
//   const name = c.name || c.company || "Unnamed";
//   const phone = c.phone ? ` · ${c.phone}` : "";
//   return `${name}${phone}`;
// }

// export default function InteriorPaymentsPage() {
//   const [payments, setPayments] = useState<Payment[]>([]);
//   const [projects, setProjects] = useState<InteriorProject[]>([]);
//   const [clients, setClients] = useState<InteriorClient[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   const [search, setSearch] = useState("");
//   const [status, setStatus] = useState("All Status");
//   const [method, setMethod] = useState("All Methods");
//   const [projectType, setProjectType] = useState("All Types");

//   const [showDetails, setShowDetails] = useState<Payment | null>(null);
//   const [showRecordModal, setShowRecordModal] = useState(false);

//   const [newPayment, setNewPayment] = useState({
//     projectDocId: "",
//     project: "",
//     projectId: "",
//     client: "",
//     clientId: "",
//     projectType: "Residential",
//     invoiceNo: "",
//     invoiceAmount: "",
//     amountReceived: "",
//     paymentDate: "",
//     dueDate: "",
//     method: "Bank Transfer" as PaymentMethod,
//     notes: "",
//   });

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const [payData, projectData, clientData] = await Promise.all([
//           getAllPayments(),
//           getAllInteriorProjects(),
//           getAllClients(),
//         ]);
//         if (cancelled) return;
//         setPayments(payData.map(mapToUi));
//         setProjects(projectData);
//         setClients(clientData);
//       } catch (err) {
//         console.error("Failed to load payments:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const filteredPayments = useMemo(() => {
//     const searchText = search.toLowerCase().trim();

//     return payments.filter((payment) => {
//       const matchesSearch =
//         !searchText ||
//         payment.paymentNo.toLowerCase().includes(searchText) ||
//         payment.client.toLowerCase().includes(searchText) ||
//         payment.project.toLowerCase().includes(searchText) ||
//         payment.invoiceNo.toLowerCase().includes(searchText);

//       const matchesStatus =
//         status === "All Status" || payment.status === status;
//       const matchesMethod =
//         method === "All Methods" || payment.method === method;
//       const matchesType =
//         projectType === "All Types" ||
//         payment.projectType === projectType;

//       return matchesSearch && matchesStatus && matchesMethod && matchesType;
//     });
//   }, [payments, search, status, method, projectType]);

//   const totalInvoiceValue = filteredPayments.reduce(
//     (sum, p) => sum + p.invoiceAmount,
//     0
//   );
//   const totalReceived = filteredPayments.reduce(
//     (sum, p) => sum + p.amountReceived,
//     0
//   );
//   const totalPending = filteredPayments.reduce(
//     (sum, p) => sum + p.pendingAmount,
//     0
//   );
//   const overdueAmount = filteredPayments
//     .filter((p) => p.status === "Overdue")
//     .reduce((sum, p) => sum + p.pendingAmount, 0);

//   const receivedCount = filteredPayments.filter(
//     (p) => p.status === "Received"
//   ).length;
//   const partialCount = filteredPayments.filter(
//     (p) => p.status === "Partial"
//   ).length;
//   const pendingCount = filteredPayments.filter(
//     (p) => p.status === "Pending"
//   ).length;
//   const overdueCount = filteredPayments.filter(
//     (p) => p.status === "Overdue"
//   ).length;

//   const collectionPercentage = totalInvoiceValue
//     ? Math.round((totalReceived / totalInvoiceValue) * 100)
//     : 0;

//   function openRecordModal() {
//     const invoiceNo = generateNextInvoiceNo(payments);
//     const today = new Date().toISOString().slice(0, 10);
//     setNewPayment({
//       projectDocId: "",
//       project: "",
//       projectId: "",
//       client: "",
//       clientId: "",
//       projectType: "Residential",
//       invoiceNo,
//       invoiceAmount: "",
//       amountReceived: "",
//       paymentDate: today,
//       dueDate: "",
//       method: "Bank Transfer",
//       notes: "",
//     });
//     setShowRecordModal(true);
//   }

//   function onProjectSelect(docId: string) {
//     if (!docId) {
//       setNewPayment((f) => ({
//         ...f,
//         projectDocId: "",
//         project: "",
//         projectId: "",
//         client: "",
//         clientId: "",
//         projectType: "Residential",
//         invoiceAmount: "",
//       }));
//       return;
//     }

//     const p = projects.find((x) => x.id === docId);
//     if (!p) return;

//     const name = p.projectName || p.name || "Untitled";
//     const code =
//       p.projectNo || p.projectId || p.id.slice(0, 8).toUpperCase();
//     const clientName = p.clientName || p.client || p.customerName || "";
//     const type = p.projectType || p.type || "Residential";
//     const value = Number(p.value ?? p.projectValue ?? p.totalValue ?? 0) || 0;
//     const paid = Number(p.paid ?? p.amountPaid ?? 0) || 0;
//     const remaining = Math.max(value - paid, 0);

//     // Try match client in clients list
//     const matchedClient =
//       clients.find(
//         (c) =>
//           c.id === (p as InteriorProject & { clientId?: string }).clientId ||
//           (c.name || "").toLowerCase() === clientName.toLowerCase()
//       ) || null;

//     setNewPayment((f) => ({
//       ...f,
//       projectDocId: docId,
//       project: name,
//       projectId: code,
//       client: matchedClient
//         ? matchedClient.name || matchedClient.company || clientName
//         : clientName,
//       clientId: matchedClient?.id || "",
//       projectType: type,
//       invoiceAmount:
//         remaining > 0 ? String(remaining) : value > 0 ? String(value) : f.invoiceAmount,
//     }));
//   }

//   function onClientSelect(clientId: string) {
//     if (!clientId) {
//       setNewPayment((f) => ({ ...f, clientId: "", client: "" }));
//       return;
//     }
//     const c = clients.find((x) => x.id === clientId);
//     setNewPayment((f) => ({
//       ...f,
//       clientId,
//       client: c ? c.name || c.company || "Unknown" : "",
//     }));
//   }

//   async function recordPayment() {
//     if (
//       !newPayment.project ||
//       !newPayment.client ||
//       !newPayment.invoiceNo ||
//       !newPayment.invoiceAmount ||
//       newPayment.amountReceived === ""
//     ) {
//       alert("Please select project & client, and fill amount fields.");
//       return;
//     }

//     const invoiceAmount = Number(newPayment.invoiceAmount);
//     const amountReceived = Number(newPayment.amountReceived);
//     const paymentDate =
//       newPayment.paymentDate || new Date().toISOString().split("T")[0];
//     const pendingAmount = Math.max(invoiceAmount - amountReceived, 0);
//     const statusValue = calculateStatus(
//       invoiceAmount,
//       amountReceived,
//       newPayment.dueDate
//     );

//     // Re-generate if somehow duplicate
//     let invoiceNo = newPayment.invoiceNo.trim();
//     const used = new Set(
//       payments.map((p) => (p.invoiceNo || "").toUpperCase())
//     );
//     if (used.has(invoiceNo.toUpperCase())) {
//       invoiceNo = generateNextInvoiceNo(payments);
//     }

//     setSaving(true);
//     try {
//       const payload = {
//         paymentNo: `PAY-INT-${Date.now().toString().slice(-6)}`,
//         projectId: newPayment.projectId || newPayment.projectDocId,
//         project: newPayment.project.trim(),
//         client: newPayment.client.trim(),
//         clientId: newPayment.clientId || "",
//         projectType: newPayment.projectType,
//         invoiceNo,
//         invoiceAmount,
//         amountReceived,
//         pendingAmount,
//         paymentDate,
//         dueDate: newPayment.dueDate,
//         method: newPayment.method,
//         status: statusValue,
//         notes: newPayment.notes.trim(),
//       };

//       const id = await createPayment(payload);

//       setPayments((current) => [
//         {
//           id,
//           ...payload,
//           method: newPayment.method,
//           status: statusValue,
//         },
//         ...current,
//       ]);

//       setShowRecordModal(false);
//     } catch (err) {
//       console.error(err);
//       alert("Unable to record payment.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function markAsReceived(paymentId: string) {
//     const payment = payments.find((p) => p.id === paymentId);
//     if (!payment) return;

//     const paymentDate = new Date().toISOString().split("T")[0];
//     const patch = {
//       amountReceived: payment.invoiceAmount,
//       pendingAmount: 0,
//       status: "Received" as const,
//       paymentDate,
//     };

//     setPayments((current) =>
//       current.map((p) => (p.id === paymentId ? { ...p, ...patch } : p))
//     );
//     setShowDetails((current) =>
//       current && current.id === paymentId
//         ? { ...current, ...patch }
//         : current
//     );

//     try {
//       await updatePayment(paymentId, patch);
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllPayments();
//         setPayments(data.map(mapToUi));
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
//               <h1 className="text-2xl font-bold tracking-tight">Payments</h1>
//               <p className="mt-1 text-sm text-gray-500">
//                 Track interior project invoices and collections.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <button
//               type="button"
//               onClick={openRecordModal}
//               className="rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#125848]"
//             >
//               + Record Payment
//             </button>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-6 px-5 py-6 lg:px-8">
//         <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <Stat
//             label="Invoice Value"
//             value={loading ? "…" : formatCurrency(totalInvoiceValue)}
//             helper={`${collectionPercentage}% collected`}
//           />
//           <Stat
//             label="Received"
//             value={loading ? "…" : formatCurrency(totalReceived)}
//             helper={`${receivedCount} fully received`}
//           />
//           <Stat
//             label="Pending"
//             value={loading ? "…" : formatCurrency(totalPending)}
//             helper={`${partialCount} partial · ${pendingCount} pending`}
//           />
//           <Stat
//             label="Overdue"
//             value={loading ? "…" : formatCurrency(overdueAmount)}
//             helper={`${overdueCount} overdue`}
//           />
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <div className="flex items-center justify-between">
//             <p className="text-sm font-semibold">Collection progress</p>
//             <p className="text-lg font-bold text-[#176b5b]">
//               {collectionPercentage}%
//             </p>
//           </div>
//           <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
//             <div
//               className="h-full rounded-full bg-[#176b5b]"
//               style={{ width: `${collectionPercentage}%` }}
//             />
//           </div>
//         </section>

//         <section className="rounded-xl border border-[#e4e2da] bg-white p-4">
//           <div className="flex flex-col gap-3 lg:flex-row">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search payment, client, project, invoice..."
//               className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-4 py-2.5 text-sm outline-none focus:border-[#176b5b] lg:max-w-md"
//             />
//             <select
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//               className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {statuses.map((s) => (
//                 <option key={s}>{s}</option>
//               ))}
//             </select>
//             <select
//               value={method}
//               onChange={(e) => setMethod(e.target.value)}
//               className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {methods.map((m) => (
//                 <option key={m}>{m}</option>
//               ))}
//             </select>
//             <select
//               value={projectType}
//               onChange={(e) => setProjectType(e.target.value)}
//               className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//             >
//               {projectTypes.map((t) => (
//                 <option key={t}>{t}</option>
//               ))}
//             </select>
//           </div>
//         </section>

//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="border-b border-[#e4e2da] px-5 py-4">
//             <h2 className="font-semibold">Payment Records</h2>
//             <p className="mt-1 text-xs text-gray-500">
//               {filteredPayments.length} records
//             </p>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1100px] text-left">
//               <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
//                 <tr>
//                   <th className="px-5 py-3 font-semibold">Payment</th>
//                   <th className="px-4 py-3 font-semibold">Client / Project</th>
//                   <th className="px-4 py-3 font-semibold">Invoice</th>
//                   <th className="px-4 py-3 font-semibold">Received</th>
//                   <th className="px-4 py-3 font-semibold">Pending</th>
//                   <th className="px-4 py-3 font-semibold">Method</th>
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
//                       Loading payments…
//                     </td>
//                   </tr>
//                 ) : (
//                   <>
//                     {filteredPayments.map((payment) => (
//                       <tr key={payment.id} className="hover:bg-[#fafaf8]">
//                         <td className="px-5 py-4">
//                           <p className="font-semibold text-[#176b5b]">
//                             {payment.paymentNo}
//                           </p>
//                           <p className="text-xs text-gray-400">
//                             {formatDate(payment.paymentDate)}
//                           </p>
//                         </td>
//                         <td className="px-4 py-4">
//                           <p className="text-sm font-medium text-gray-900">
//                             {payment.client}
//                           </p>
//                           <p className="text-xs text-gray-500">
//                             {payment.project}
//                           </p>
//                         </td>
//                         <td className="px-4 py-4">
//                           <p className="text-sm font-semibold">
//                             {formatCurrency(payment.invoiceAmount)}
//                           </p>
//                           <p className="text-xs text-gray-400">
//                             {payment.invoiceNo}
//                           </p>
//                         </td>
//                         <td className="px-4 py-4 text-sm font-medium text-green-700">
//                           {formatCurrency(payment.amountReceived)}
//                         </td>
//                         <td className="px-4 py-4 text-sm font-semibold text-orange-700">
//                           {formatCurrency(payment.pendingAmount)}
//                         </td>
//                         <td className="px-4 py-4">
//                           <span
//                             className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${methodClass(
//                               payment.method
//                             )}`}
//                           >
//                             {payment.method}
//                           </span>
//                         </td>
//                         <td className="px-4 py-4">
//                           <span
//                             className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                               payment.status
//                             )}`}
//                           >
//                             {payment.status}
//                           </span>
//                         </td>
//                         <td className="px-4 py-4 text-right">
//                           <button
//                             type="button"
//                             onClick={() => setShowDetails(payment)}
//                             className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                           >
//                             View
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                     {filteredPayments.length === 0 && (
//                       <tr>
//                         <td
//                           colSpan={8}
//                           className="px-5 py-12 text-center text-sm text-gray-500"
//                         >
//                           No payments found.
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

//       {showDetails && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-4">
//               <div>
//                 <p className="text-xs font-semibold text-[#176b5b]">
//                   {showDetails.paymentNo}
//                 </p>
//                 <h2 className="mt-1 text-xl font-bold">
//                   {showDetails.project}
//                 </h2>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setShowDetails(null)}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>
//             <div className="grid grid-cols-2 gap-3 p-6">
//               <Info label="Client" value={showDetails.client} />
//               <Info label="Type" value={showDetails.projectType} />
//               <Info label="Invoice" value={showDetails.invoiceNo} />
//               <Info label="Method" value={showDetails.method} />
//               <Info
//                 label="Invoice Amount"
//                 value={formatCurrency(showDetails.invoiceAmount)}
//               />
//               <Info
//                 label="Received"
//                 value={formatCurrency(showDetails.amountReceived)}
//               />
//               <Info
//                 label="Pending"
//                 value={formatCurrency(showDetails.pendingAmount)}
//               />
//               <Info label="Due Date" value={formatDate(showDetails.dueDate)} />
//               <Info
//                 label="Payment Date"
//                 value={formatDate(showDetails.paymentDate)}
//               />
//               <div className="rounded-xl bg-[#fafaf8] p-3">
//                 <p className="text-xs text-gray-400">Status</p>
//                 <span
//                   className={`mt-1 inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
//                     showDetails.status
//                   )}`}
//                 >
//                   {showDetails.status}
//                 </span>
//               </div>
//             </div>
//             {showDetails.notes && (
//               <div className="mx-6 mb-4 rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
//                 {showDetails.notes}
//               </div>
//             )}
//             <div className="flex flex-wrap gap-2 border-t border-[#e4e2da] px-6 py-4">
//               {showDetails.status !== "Received" && (
//                 <button
//                   type="button"
//                   onClick={() => markAsReceived(showDetails.id)}
//                   className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//                 >
//                   Mark Fully Received
//                 </button>
//               )}
//               <button
//                 type="button"
//                 onClick={() => setShowDetails(null)}
//                 className="ml-auto rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {showRecordModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-4">
//               <h2 className="text-lg font-bold">Record Payment</h2>
//               <button
//                 type="button"
//                 onClick={() => setShowRecordModal(false)}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>
//             <div className="grid gap-4 p-6 sm:grid-cols-2">
//               {/* Project dropdown */}
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Project *
//                 </label>
//                 <select
//                   value={newPayment.projectDocId}
//                   onChange={(e) => onProjectSelect(e.target.value)}
//                   className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   <option value="">— Select project —</option>
//                   {projects.map((p) => (
//                     <option key={p.id} value={p.id}>
//                       {projectLabel(p)}
//                     </option>
//                   ))}
//                 </select>
//                 {projects.length === 0 && (
//                   <p className="mt-1 text-[11px] text-gray-400">
//                     Create projects under Projects first.
//                   </p>
//                 )}
//               </div>

//               {/* Client dropdown */}
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Client *
//                 </label>
//                 <select
//                   value={newPayment.clientId}
//                   onChange={(e) => onClientSelect(e.target.value)}
//                   className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   <option value="">— Select client —</option>
//                   {clients.map((c) => (
//                     <option key={c.id} value={c.id}>
//                       {clientLabel(c)}
//                     </option>
//                   ))}
//                 </select>
//                 {!newPayment.clientId && newPayment.client && (
//                   <p className="mt-1 text-[11px] text-amber-600">
//                     From project: {newPayment.client}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Project Type
//                 </label>
//                 <select
//                   value={newPayment.projectType}
//                   onChange={(e) =>
//                     setNewPayment((f) => ({
//                       ...f,
//                       projectType: e.target.value,
//                     }))
//                   }
//                   className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   <option>Residential</option>
//                   <option>Commercial</option>
//                   <option>Office</option>
//                   <option>Villa</option>
//                   <option>Apartment</option>
//                 </select>
//               </div>

//               {/* Auto invoice no — read only */}
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Invoice No *
//                 </label>
//                 <input
//                   value={newPayment.invoiceNo}
//                   readOnly
//                   className="w-full cursor-not-allowed rounded-lg border border-gray-200 bg-[#f5f5f2] px-3 py-2.5 text-sm font-semibold text-[#176b5b] outline-none"
//                 />
//                 {/* <p className="mt-1 text-[11px] text-gray-400">
//                   Auto-generated unique ID
//                 </p> */}
//               </div>

//               <Field
//                 label="Invoice Amount *"
//                 type="number"
//                 value={newPayment.invoiceAmount}
//                 onChange={(v) =>
//                   setNewPayment((f) => ({ ...f, invoiceAmount: v }))
//                 }
//               />
//               <Field
//                 label="Amount Received *"
//                 type="number"
//                 value={newPayment.amountReceived}
//                 onChange={(v) =>
//                   setNewPayment((f) => ({ ...f, amountReceived: v }))
//                 }
//               />
//               <Field
//                 label="Payment Date"
//                 type="date"
//                 value={newPayment.paymentDate}
//                 onChange={(v) =>
//                   setNewPayment((f) => ({ ...f, paymentDate: v }))
//                 }
//               />
//               <Field
//                 label="Due Date"
//                 type="date"
//                 value={newPayment.dueDate}
//                 onChange={(v) =>
//                   setNewPayment((f) => ({ ...f, dueDate: v }))
//                 }
//               />
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Method
//                 </label>
//                 <select
//                   value={newPayment.method}
//                   onChange={(e) =>
//                     setNewPayment((f) => ({
//                       ...f,
//                       method: e.target.value as PaymentMethod,
//                     }))
//                   }
//                   className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   <option>UPI</option>
//                   <option>Bank Transfer</option>
//                   <option>Cash</option>
//                   <option>Card</option>
//                   <option>Cheque</option>
//                 </select>
//               </div>
//               <div className="sm:col-span-2">
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Notes
//                 </label>
//                 <textarea
//                   rows={3}
//                   value={newPayment.notes}
//                   onChange={(e) =>
//                     setNewPayment((f) => ({ ...f, notes: e.target.value }))
//                   }
//                   className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//             </div>
//             <div className="flex justify-end gap-3 border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
//               <button
//                 type="button"
//                 onClick={() => setShowRecordModal(false)}
//                 className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 disabled={saving}
//                 onClick={recordPayment}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
//               >
//                 {saving ? "Saving…" : "Record Payment"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function Stat({
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
  getAllPayments,
  createPayment,
  updatePayment,
  generateNextInvoiceNo,
  type InteriorPayment,
} from "@/modules/interior/services/paymentService";
import {
  getAllInteriorProjects,
  type InteriorProject,
} from "@/modules/interior/services/projectService";
import {
  getAllClients,
  type InteriorClient,
} from "@/modules/interior/services/clientService";
import { Timestamp } from "firebase/firestore";
import { Plus } from "lucide-react";

type PaymentStatus = "Received" | "Pending" | "Overdue" | "Partial";
type PaymentMethod = "UPI" | "Bank Transfer" | "Cash" | "Card" | "Cheque";

type Payment = {
  id: string;
  paymentNo: string;
  projectId: string;
  project: string;
  client: string;
  clientId: string;
  projectType: string;
  invoiceNo: string;
  invoiceAmount: number;
  amountReceived: number;
  pendingAmount: number;
  paymentDate: string;
  dueDate: string;
  method: PaymentMethod;
  status: PaymentStatus;
  notes: string;
};

const statuses = ["All Status", "Received", "Pending", "Overdue", "Partial"];
const methods = [
  "All Methods",
  "UPI",
  "Bank Transfer",
  "Cash",
  "Card",
  "Cheque",
];
const projectTypes = [
  "All Types",
  "Residential",
  "Commercial",
  "Office",
  "Villa",
  "Apartment",
];

function formatCurrency(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function formatDate(date: string) {
  if (!date || date === "—") return "—";
  try {
    const d = date.includes("T")
      ? new Date(date)
      : new Date(`${date}T00:00:00`);
    if (Number.isNaN(d.getTime())) return date;
    return d.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return date;
  }
}

function statusClass(status: PaymentStatus) {
  switch (status) {
    case "Received":
      return "bg-green-50 text-green-700 border-green-200";
    case "Partial":
      return "bg-blue-50 text-blue-700 border-blue-200";
    case "Pending":
      return "bg-amber-50 text-amber-700 border-amber-200";
    case "Overdue":
      return "bg-red-50 text-red-700 border-red-200";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
}

function methodClass(_method: PaymentMethod) {
  return "bg-slate-50 text-slate-700 border-slate-200";
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

function calculateStatus(
  invoiceAmount: number,
  amountReceived: number,
  dueDate: string
): PaymentStatus {
  if (amountReceived >= invoiceAmount && invoiceAmount > 0) {
    return "Received";
  }

  const isOverdue =
    !!dueDate &&
    dueDate !== "—" &&
    new Date(dueDate).getTime() < Date.now();

  if (amountReceived > 0) {
    return isOverdue ? "Overdue" : "Partial";
  }

  return isOverdue ? "Overdue" : "Pending";
}

function normalizeMethod(raw?: string): PaymentMethod {
  const s = (raw || "Bank Transfer").trim();
  if (["UPI", "Bank Transfer", "Cash", "Card", "Cheque"].includes(s)) {
    return s as PaymentMethod;
  }
  return "Bank Transfer";
}

function mapToUi(p: InteriorPayment): Payment {
  const invoiceAmount = Number(p.invoiceAmount ?? 0) || 0;
  const amountReceived = Number(p.amountReceived ?? 0) || 0;
  const pendingAmount =
    p.pendingAmount !== undefined && p.pendingAmount !== null
      ? Number(p.pendingAmount) || 0
      : Math.max(invoiceAmount - amountReceived, 0);
  const dueDate = p.dueDate || "";
  const statusRaw = (p.status || "").toString();
  const status: PaymentStatus =
    statusRaw === "Received" ||
    statusRaw === "Pending" ||
    statusRaw === "Overdue" ||
    statusRaw === "Partial"
      ? statusRaw
      : calculateStatus(invoiceAmount, amountReceived, dueDate);

  return {
    id: p.id,
    paymentNo: p.paymentNo || `PAY-INT-${p.id.slice(0, 6).toUpperCase()}`,
    projectId: p.projectId || "",
    project: p.project || p.projectName || "—",
    client: p.client || p.clientName || "Unknown",
    clientId: p.clientId || "",
    projectType: p.projectType || "Residential",
    invoiceNo: p.invoiceNo || "—",
    invoiceAmount,
    amountReceived,
    pendingAmount,
    paymentDate: p.paymentDate || toDateString(p.createdAt) || "—",
    dueDate: dueDate || "—",
    method: normalizeMethod(p.method),
    status,
    notes: p.notes || "",
  };
}

function projectLabel(p: InteriorProject) {
  const no = p.projectNo || p.projectId || p.id.slice(0, 8).toUpperCase();
  const name = p.projectName || p.name || "Untitled";
  return `${no} · ${name}`;
}

function clientLabel(c: InteriorClient) {
  const name = c.name || c.company || "Unnamed";
  const phone = c.phone ? ` · ${c.phone}` : "";
  return `${name}${phone}`;
}

export default function InteriorPaymentsPage() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [projects, setProjects] = useState<InteriorProject[]>([]);
  const [clients, setClients] = useState<InteriorClient[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");
  const [method, setMethod] = useState("All Methods");
  const [projectType, setProjectType] = useState("All Types");

  const [showDetails, setShowDetails] = useState<Payment | null>(null);
  const [showRecordModal, setShowRecordModal] = useState(false);

  const [newPayment, setNewPayment] = useState({
    projectDocId: "",
    project: "",
    projectId: "",
    client: "",
    clientId: "",
    projectType: "Residential",
    invoiceNo: "",
    invoiceAmount: "",
    amountReceived: "",
    paymentDate: "",
    dueDate: "",
    method: "Bank Transfer" as PaymentMethod,
    notes: "",
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const [payData, projectData, clientData] = await Promise.all([
          getAllPayments(),
          getAllInteriorProjects(),
          getAllClients(),
        ]);
        if (cancelled) return;
        setPayments(payData.map(mapToUi));
        setProjects(projectData);
        setClients(clientData);
      } catch (err) {
        console.error("Failed to load payments:", err);
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
    if (!showDetails && !showRecordModal) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showDetails, showRecordModal]);

  const filteredPayments = useMemo(() => {
    const searchText = search.toLowerCase().trim();

    return payments.filter((payment) => {
      const matchesSearch =
        !searchText ||
        payment.paymentNo.toLowerCase().includes(searchText) ||
        payment.client.toLowerCase().includes(searchText) ||
        payment.project.toLowerCase().includes(searchText) ||
        payment.invoiceNo.toLowerCase().includes(searchText);

      const matchesStatus =
        status === "All Status" || payment.status === status;
      const matchesMethod =
        method === "All Methods" || payment.method === method;
      const matchesType =
        projectType === "All Types" || payment.projectType === projectType;

      return matchesSearch && matchesStatus && matchesMethod && matchesType;
    });
  }, [payments, search, status, method, projectType]);

  const totalInvoiceValue = filteredPayments.reduce(
    (sum, p) => sum + p.invoiceAmount,
    0
  );
  const totalReceived = filteredPayments.reduce(
    (sum, p) => sum + p.amountReceived,
    0
  );
  const totalPending = filteredPayments.reduce(
    (sum, p) => sum + p.pendingAmount,
    0
  );
  const overdueAmount = filteredPayments
    .filter((p) => p.status === "Overdue")
    .reduce((sum, p) => sum + p.pendingAmount, 0);

  const receivedCount = filteredPayments.filter(
    (p) => p.status === "Received"
  ).length;
  const partialCount = filteredPayments.filter(
    (p) => p.status === "Partial"
  ).length;
  const pendingCount = filteredPayments.filter(
    (p) => p.status === "Pending"
  ).length;
  const overdueCount = filteredPayments.filter(
    (p) => p.status === "Overdue"
  ).length;

  const collectionPercentage = totalInvoiceValue
    ? Math.round((totalReceived / totalInvoiceValue) * 100)
    : 0;

  function openRecordModal() {
    const invoiceNo = generateNextInvoiceNo(payments);
    const today = new Date().toISOString().slice(0, 10);
    setNewPayment({
      projectDocId: "",
      project: "",
      projectId: "",
      client: "",
      clientId: "",
      projectType: "Residential",
      invoiceNo,
      invoiceAmount: "",
      amountReceived: "",
      paymentDate: today,
      dueDate: "",
      method: "Bank Transfer",
      notes: "",
    });
    setShowRecordModal(true);
  }

  function onProjectSelect(docId: string) {
    if (!docId) {
      setNewPayment((f) => ({
        ...f,
        projectDocId: "",
        project: "",
        projectId: "",
        client: "",
        clientId: "",
        projectType: "Residential",
        invoiceAmount: "",
      }));
      return;
    }

    const p = projects.find((x) => x.id === docId);
    if (!p) return;

    const name = p.projectName || p.name || "Untitled";
    const code =
      p.projectNo || p.projectId || p.id.slice(0, 8).toUpperCase();
    const clientName = p.clientName || p.client || p.customerName || "";
    const type = p.projectType || p.type || "Residential";
    const value = Number(p.value ?? p.projectValue ?? p.totalValue ?? 0) || 0;
    const paid = Number(p.paid ?? p.amountPaid ?? 0) || 0;
    const remaining = Math.max(value - paid, 0);

    const matchedClient =
      clients.find(
        (c) =>
          c.id === (p as InteriorProject & { clientId?: string }).clientId ||
          (c.name || "").toLowerCase() === clientName.toLowerCase()
      ) || null;

    setNewPayment((f) => ({
      ...f,
      projectDocId: docId,
      project: name,
      projectId: code,
      client: matchedClient
        ? matchedClient.name || matchedClient.company || clientName
        : clientName,
      clientId: matchedClient?.id || "",
      projectType: type,
      invoiceAmount:
        remaining > 0
          ? String(remaining)
          : value > 0
            ? String(value)
            : f.invoiceAmount,
    }));
  }

  function onClientSelect(clientId: string) {
    if (!clientId) {
      setNewPayment((f) => ({ ...f, clientId: "", client: "" }));
      return;
    }
    const c = clients.find((x) => x.id === clientId);
    setNewPayment((f) => ({
      ...f,
      clientId,
      client: c ? c.name || c.company || "Unknown" : "",
    }));
  }

  async function recordPayment() {
    if (
      !newPayment.project ||
      !newPayment.client ||
      !newPayment.invoiceNo ||
      !newPayment.invoiceAmount ||
      newPayment.amountReceived === ""
    ) {
      alert("Please select project & client, and fill amount fields.");
      return;
    }

    const invoiceAmount = Number(newPayment.invoiceAmount);
    const amountReceived = Number(newPayment.amountReceived);
    const paymentDate =
      newPayment.paymentDate || new Date().toISOString().split("T")[0];
    const pendingAmount = Math.max(invoiceAmount - amountReceived, 0);
    const statusValue = calculateStatus(
      invoiceAmount,
      amountReceived,
      newPayment.dueDate
    );

    let invoiceNo = newPayment.invoiceNo.trim();
    const used = new Set(
      payments.map((p) => (p.invoiceNo || "").toUpperCase())
    );
    if (used.has(invoiceNo.toUpperCase())) {
      invoiceNo = generateNextInvoiceNo(payments);
    }

    setSaving(true);
    try {
      const payload = {
        paymentNo: `PAY-INT-${Date.now().toString().slice(-6)}`,
        projectId: newPayment.projectId || newPayment.projectDocId,
        project: newPayment.project.trim(),
        client: newPayment.client.trim(),
        clientId: newPayment.clientId || "",
        projectType: newPayment.projectType,
        invoiceNo,
        invoiceAmount,
        amountReceived,
        pendingAmount,
        paymentDate,
        dueDate: newPayment.dueDate,
        method: newPayment.method,
        status: statusValue,
        notes: newPayment.notes.trim(),
      };

      const id = await createPayment(payload);

      setPayments((current) => [
        {
          id,
          ...payload,
          method: newPayment.method,
          status: statusValue,
        },
        ...current,
      ]);

      setShowRecordModal(false);
    } catch (err) {
      console.error(err);
      alert("Unable to record payment.");
    } finally {
      setSaving(false);
    }
  }

  async function markAsReceived(paymentId: string) {
    const payment = payments.find((p) => p.id === paymentId);
    if (!payment) return;

    const paymentDate = new Date().toISOString().split("T")[0];
    const patch = {
      amountReceived: payment.invoiceAmount,
      pendingAmount: 0,
      status: "Received" as const,
      paymentDate,
    };

    setPayments((current) =>
      current.map((p) => (p.id === paymentId ? { ...p, ...patch } : p))
    );
    setShowDetails((current) =>
      current && current.id === paymentId
        ? { ...current, ...patch }
        : current
    );

    try {
      await updatePayment(paymentId, patch);
    } catch (err) {
      console.error(err);
      try {
        const data = await getAllPayments();
        setPayments(data.map(mapToUi));
      } catch {
        /* ignore */
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
      {/* Header: title + Record Payment beside */}
      <div className="border-b border-[#e4e2da] bg-white">
        <div className="mx-auto max-w-[1600px] px-3 py-4 sm:px-5 sm:py-5 lg:px-8">
          <div className="flex items-start justify-between gap-3 sm:items-center">
            <div className="min-w-0 flex-1">
              <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
                Payments
              </h1>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Track interior project invoices and collections.
                {loading && (
                  <span className="ml-2 text-[#176b5b]">Loading…</span>
                )}
              </p>
            </div>
            <button
              type="button"
              onClick={openRecordModal}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125848] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
            >
              <Plus size={16} strokeWidth={2.5} />
              <span className="hidden sm:inline">Record Payment</span>
              <span className="sm:hidden">Record</span>
            </button>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[1600px] space-y-4 px-3 py-4 sm:space-y-6 sm:px-5 sm:py-6 lg:px-8">
        <section className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
          <Stat
            label="Invoice Value"
            value={loading ? "…" : formatCurrency(totalInvoiceValue)}
            helper={`${collectionPercentage}% collected`}
          />
          <Stat
            label="Received"
            value={loading ? "…" : formatCurrency(totalReceived)}
            helper={`${receivedCount} fully received`}
          />
          <Stat
            label="Pending"
            value={loading ? "…" : formatCurrency(totalPending)}
            helper={`${partialCount} partial · ${pendingCount} pending`}
          />
          <Stat
            label="Overdue"
            value={loading ? "…" : formatCurrency(overdueAmount)}
            helper={`${overdueCount} overdue`}
          />
        </section>

        <section className="rounded-xl border border-[#e4e2da] bg-white p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">Collection progress</p>
            <p className="text-lg font-bold text-[#176b5b]">
              {collectionPercentage}%
            </p>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-[#176b5b]"
              style={{ width: `${collectionPercentage}%` }}
            />
          </div>
        </section>

        <section className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-4">
          <div className="flex flex-col gap-2 sm:gap-3 lg:flex-row lg:flex-wrap">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search payment, client, project, invoice..."
              className="w-full rounded-lg border border-gray-200 bg-[#fafaf8] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] lg:max-w-md"
            />
            <div className="flex flex-wrap gap-2">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="min-w-0 flex-1 rounded-lg border border-gray-200 px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
              >
                {statuses.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <select
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                className="min-w-0 flex-1 rounded-lg border border-gray-200 px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
              >
                {methods.map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="min-w-0 flex-1 rounded-lg border border-gray-200 px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:flex-none sm:px-3 sm:text-sm"
              >
                {projectTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
          <div className="border-b border-[#e4e2da] px-4 py-3 sm:px-5 sm:py-4">
            <h2 className="font-semibold">Payment Records</h2>
            <p className="mt-1 text-xs text-gray-500">
              {filteredPayments.length} records
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[1000px] text-left">
              <thead className="bg-[#fafaf8] text-xs uppercase tracking-wide text-gray-500">
                <tr>
                  <th className="px-5 py-3 font-semibold">Payment</th>
                  <th className="px-4 py-3 font-semibold">Client / Project</th>
                  <th className="px-4 py-3 font-semibold">Invoice</th>
                  <th className="px-4 py-3 font-semibold">Received</th>
                  <th className="px-4 py-3 font-semibold">Pending</th>
                  <th className="px-4 py-3 font-semibold">Method</th>
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
                      Loading payments…
                    </td>
                  </tr>
                ) : filteredPayments.length === 0 ? (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-5 py-12 text-center text-sm text-gray-500"
                    >
                      No payments found.
                    </td>
                  </tr>
                ) : (
                  filteredPayments.map((payment) => (
                    <tr key={payment.id} className="hover:bg-[#fafaf8]">
                      <td className="px-5 py-4">
                        <p className="font-semibold text-[#176b5b]">
                          {payment.paymentNo}
                        </p>
                        <p className="text-xs text-gray-400">
                          {formatDate(payment.paymentDate)}
                        </p>
                      </td>
                      <td className="px-4 py-4">
                        <p className="text-sm font-medium text-gray-900">
                          {payment.client}
                        </p>
                        <p className="text-xs text-gray-500">
                          {payment.project}
                        </p>
                      </td>
                      <td className="px-4 py-4">
                        <p className="text-sm font-semibold">
                          {formatCurrency(payment.invoiceAmount)}
                        </p>
                        <p className="text-xs text-gray-400">
                          {payment.invoiceNo}
                        </p>
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-green-700">
                        {formatCurrency(payment.amountReceived)}
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold text-orange-700">
                        {formatCurrency(payment.pendingAmount)}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${methodClass(
                            payment.method
                          )}`}
                        >
                          {payment.method}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
                            payment.status
                          )}`}
                        >
                          {payment.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <button
                          type="button"
                          onClick={() => setShowDetails(payment)}
                          className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-[#176b5b] hover:text-[#176b5b]"
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
                Loading payments…
              </p>
            ) : filteredPayments.length === 0 ? (
              <p className="py-10 text-center text-sm text-gray-500">
                No payments found.
              </p>
            ) : (
              filteredPayments.map((payment) => (
                <article
                  key={payment.id}
                  className="rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-[#176b5b]">
                        {payment.paymentNo}
                      </p>
                      <p className="mt-0.5 font-medium text-gray-900">
                        {payment.client}
                      </p>
                      <p className="text-xs text-gray-500">{payment.project}</p>
                      <p className="mt-0.5 text-[11px] text-gray-400">
                        {formatDate(payment.paymentDate)} · {payment.invoiceNo}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${statusClass(
                        payment.status
                      )}`}
                    >
                      {payment.status}
                    </span>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <p className="text-gray-400">Invoice</p>
                      <p className="font-semibold text-gray-900">
                        {formatCurrency(payment.invoiceAmount)}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400">Received</p>
                      <p className="font-medium text-green-700">
                        {formatCurrency(payment.amountReceived)}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400">Pending</p>
                      <p className="font-semibold text-orange-700">
                        {formatCurrency(payment.pendingAmount)}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400">Method</p>
                      <p className="font-medium text-gray-800">
                        {payment.method}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowDetails(payment)}
                    className="mt-3 w-full rounded-lg border border-gray-200 bg-white py-2 text-xs font-medium text-gray-700"
                  >
                    View details
                  </button>
                </article>
              ))
            )}
          </div>
        </section>
      </main>

      {/* Details modal */}
      {showDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 sm:p-4">
          <div className="max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="sticky top-0 flex items-center justify-between border-b border-[#e4e2da] bg-white px-4 py-4 sm:px-6">
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[#176b5b]">
                  {showDetails.paymentNo}
                </p>
                <h2 className="mt-1 truncate text-lg font-bold sm:text-xl">
                  {showDetails.project}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setShowDetails(null)}
                className="shrink-0 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2 p-4 sm:gap-3 sm:p-6">
              <Info label="Client" value={showDetails.client} />
              <Info label="Type" value={showDetails.projectType} />
              <Info label="Invoice" value={showDetails.invoiceNo} />
              <Info label="Method" value={showDetails.method} />
              <Info
                label="Invoice Amount"
                value={formatCurrency(showDetails.invoiceAmount)}
              />
              <Info
                label="Received"
                value={formatCurrency(showDetails.amountReceived)}
              />
              <Info
                label="Pending"
                value={formatCurrency(showDetails.pendingAmount)}
              />
              <Info label="Due Date" value={formatDate(showDetails.dueDate)} />
              <Info
                label="Payment Date"
                value={formatDate(showDetails.paymentDate)}
              />
              <div className="rounded-xl bg-[#fafaf8] p-3">
                <p className="text-xs text-gray-400">Status</p>
                <span
                  className={`mt-1 inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
                    showDetails.status
                  )}`}
                >
                  {showDetails.status}
                </span>
              </div>
            </div>
            {showDetails.notes && (
              <div className="mx-4 mb-4 rounded-xl bg-gray-50 p-4 text-sm text-gray-700 sm:mx-6">
                {showDetails.notes}
              </div>
            )}
            <div className="flex flex-wrap gap-2 border-t border-[#e4e2da] px-4 py-4 sm:px-6">
              {showDetails.status !== "Received" && (
                <button
                  type="button"
                  onClick={() => markAsReceived(showDetails.id)}
                  className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
                >
                  Mark Fully Received
                </button>
              )}
              <button
                type="button"
                onClick={() => setShowDetails(null)}
                className="ml-auto rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Record payment modal */}
      {showRecordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 sm:p-4">
          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="sticky top-0 flex items-center justify-between border-b border-[#e4e2da] bg-white px-4 py-4 sm:px-6">
              <h2 className="text-base font-bold sm:text-lg">Record Payment</h2>
              <button
                type="button"
                onClick={() => setShowRecordModal(false)}
                className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>
            <div className="grid gap-3 p-4 sm:grid-cols-2 sm:gap-4 sm:p-6">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Project *
                </label>
                <select
                  value={newPayment.projectDocId}
                  onChange={(e) => onProjectSelect(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                >
                  <option value="">— Select project —</option>
                  {projects.map((p) => (
                    <option key={p.id} value={p.id}>
                      {projectLabel(p)}
                    </option>
                  ))}
                </select>
                {projects.length === 0 && (
                  <p className="mt-1 text-[11px] text-gray-400">
                    Create projects under Projects first.
                  </p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Client *
                </label>
                <select
                  value={newPayment.clientId}
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
                {!newPayment.clientId && newPayment.client && (
                  <p className="mt-1 text-[11px] text-amber-600">
                    From project: {newPayment.client}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Project Type
                </label>
                <select
                  value={newPayment.projectType}
                  onChange={(e) =>
                    setNewPayment((f) => ({
                      ...f,
                      projectType: e.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                >
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Office</option>
                  <option>Villa</option>
                  <option>Apartment</option>
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Invoice No *
                </label>
                <input
                  value={newPayment.invoiceNo}
                  readOnly
                  className="w-full cursor-not-allowed rounded-lg border border-gray-200 bg-[#f5f5f2] px-3 py-2.5 text-sm font-semibold text-[#176b5b] outline-none"
                />
              </div>

              <Field
                label="Invoice Amount *"
                type="number"
                value={newPayment.invoiceAmount}
                onChange={(v) =>
                  setNewPayment((f) => ({ ...f, invoiceAmount: v }))
                }
              />
              <Field
                label="Amount Received *"
                type="number"
                value={newPayment.amountReceived}
                onChange={(v) =>
                  setNewPayment((f) => ({ ...f, amountReceived: v }))
                }
              />
              <Field
                label="Payment Date"
                type="date"
                value={newPayment.paymentDate}
                onChange={(v) =>
                  setNewPayment((f) => ({ ...f, paymentDate: v }))
                }
              />
              <Field
                label="Due Date"
                type="date"
                value={newPayment.dueDate}
                onChange={(v) =>
                  setNewPayment((f) => ({ ...f, dueDate: v }))
                }
              />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Method
                </label>
                <select
                  value={newPayment.method}
                  onChange={(e) =>
                    setNewPayment((f) => ({
                      ...f,
                      method: e.target.value as PaymentMethod,
                    }))
                  }
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                >
                  <option>UPI</option>
                  <option>Bank Transfer</option>
                  <option>Cash</option>
                  <option>Card</option>
                  <option>Cheque</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Notes
                </label>
                <textarea
                  rows={3}
                  value={newPayment.notes}
                  onChange={(e) =>
                    setNewPayment((f) => ({ ...f, notes: e.target.value }))
                  }
                  className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                />
              </div>
            </div>
            <div className="flex flex-col-reverse gap-2 border-t border-[#e4e2da] bg-[#fafaf8] px-4 py-4 sm:flex-row sm:justify-end sm:gap-3 sm:px-6">
              <button
                type="button"
                onClick={() => setShowRecordModal(false)}
                className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={saving}
                onClick={recordPayment}
                className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
              >
                {saving ? "Saving…" : "Record Payment"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Stat({
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
