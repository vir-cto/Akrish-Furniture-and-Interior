// "use client";

// import { useMemo, useState } from "react";

// type EnquiryStatus =
//   | "New"
//   | "Contacted"
//   | "Follow-up"
//   | "Quoted"
//   | "Converted"
//   | "Closed";

// type Enquiry = {
//   id: string;
//   customerName: string;
//   phone: string;
//   email: string;
//   productCode: string;
//   productName: string;
//   message: string;
//   source: string;
//   createdAt: string;
//   status: EnquiryStatus;
//   nextFollowUp: string;
//   notes: string;
// };

// const initialEnquiries: Enquiry[] = [
//   {
//     id: "ENQ-001",
//     customerName: "Ananya Reddy",
//     phone: "+91 98765 43211",
//     email: "ananya.reddy@gmail.com",
//     productCode: "FD-100",
//     productName: "Modern Sofa",
//     message: "Interested in the sofa. Please share dimensions and final price.",
//     source: "Website",
//     createdAt: "06 Oct 2026, 10:20 AM",
//     status: "New",
//     nextFollowUp: "06 Oct 2026",
//     notes: "",
//   },
//   {
//     id: "ENQ-002",
//     customerName: "Rahul Sharma",
//     phone: "+91 98480 11223",
//     email: "rahul.sharma@gmail.com",
//     productCode: "FT-001",
//     productName: "Dining Table",
//     message: "Can you provide this table in a 6-seater version?",
//     source: "WhatsApp",
//     createdAt: "06 Oct 2026, 09:45 AM",
//     status: "Contacted",
//     nextFollowUp: "07 Oct 2026",
//     notes: "Customer wants custom size.",
//   },
//   {
//     id: "ENQ-003",
//     customerName: "Priya Sharma",
//     phone: "+91 96765 43210",
//     email: "priya.sharma@gmail.com",
//     productCode: "FB-002",
//     productName: "Bed Frame",
//     message: "Please send product PDF and available finishes.",
//     source: "Instagram",
//     createdAt: "05 Oct 2026, 04:15 PM",
//     status: "Follow-up",
//     nextFollowUp: "08 Oct 2026",
//     notes: "Follow up regarding finish options.",
//   },
//   {
//     id: "ENQ-004",
//     customerName: "Vikram Singh",
//     phone: "+91 99887 66554",
//     email: "vikram.singh@gmail.com",
//     productCode: "FC-001",
//     productName: "Coffee Table",
//     message: "Is this product available in stock?",
//     source: "Website",
//     createdAt: "05 Oct 2026, 11:30 AM",
//     status: "Quoted",
//     nextFollowUp: "09 Oct 2026",
//     notes: "Quotation sent to customer.",
//   },
//   {
//     id: "ENQ-005",
//     customerName: "Neha Gupta",
//     phone: "+91 91234 56789",
//     email: "neha.gupta@gmail.com",
//     productCode: "FD-104",
//     productName: "Lounge Chair",
//     message: "I would like to know the available colours.",
//     source: "Walk-in",
//     createdAt: "04 Oct 2026, 02:10 PM",
//     status: "Converted",
//     nextFollowUp: "",
//     notes: "Converted to order.",
//   },
//   {
//     id: "ENQ-006",
//     customerName: "Arjun Kumar",
//     phone: "+91 90000 12345",
//     email: "arjun.kumar@gmail.com",
//     productCode: "CUSTOM",
//     productName: "Custom Furniture",
//     message: "Need a custom TV unit for my living room.",
//     source: "Referral",
//     createdAt: "03 Oct 2026, 06:40 PM",
//     status: "Follow-up",
//     nextFollowUp: "10 Oct 2026",
//     notes: "Waiting for measurements.",
//   },
// ];

// const sourceOptions = [
//   "All Sources",
//   "Website",
//   "Product Page",
//   "Custom Furniture Enquiry",
//   "Instagram",
//   "Facebook",
//   "Google",
//   "WhatsApp",
//   "Walk-in",
//   "Referral",
//   "Other",
// ];

// const statusOptions = [
//   "All Status",
//   "New",
//   "Contacted",
//   "Follow-up",
//   "Quoted",
//   "Converted",
//   "Closed",
// ];

// export default function FurnitureEnquiriesPage() {
//   const [enquiries, setEnquiries] =
//     useState<Enquiry[]>(initialEnquiries);

//   const [search, setSearch] = useState("");
//   const [sourceFilter, setSourceFilter] = useState("All Sources");
//   const [statusFilter, setStatusFilter] = useState("All Status");

//   const [selectedEnquiry, setSelectedEnquiry] =
//     useState<Enquiry | null>(null);

//   const [showAddModal, setShowAddModal] = useState(false);

//   const [newEnquiry, setNewEnquiry] = useState({
//     customerName: "",
//     phone: "",
//     email: "",
//     productCode: "",
//     productName: "",
//     message: "",
//     source: "Website",
//     nextFollowUp: "",
//   });

//   const filteredEnquiries = useMemo(() => {
//     const searchValue = search.toLowerCase().trim();

//     return enquiries.filter((enquiry) => {
//       const matchesSearch =
//         !searchValue ||
//         enquiry.id.toLowerCase().includes(searchValue) ||
//         enquiry.customerName.toLowerCase().includes(searchValue) ||
//         enquiry.phone.toLowerCase().includes(searchValue) ||
//         enquiry.productCode.toLowerCase().includes(searchValue) ||
//         enquiry.productName.toLowerCase().includes(searchValue) ||
//         enquiry.message.toLowerCase().includes(searchValue);

//       const matchesSource =
//         sourceFilter === "All Sources" ||
//         enquiry.source === sourceFilter;

//       const matchesStatus =
//         statusFilter === "All Status" ||
//         enquiry.status === statusFilter;

//       return matchesSearch && matchesSource && matchesStatus;
//     });
//   }, [enquiries, search, sourceFilter, statusFilter]);

//   const newCount = enquiries.filter(
//     (item) => item.status === "New"
//   ).length;

//   const followUpCount = enquiries.filter(
//     (item) =>
//       item.status === "Follow-up" ||
//       item.status === "Contacted"
//   ).length;

//   const quotedCount = enquiries.filter(
//     (item) => item.status === "Quoted"
//   ).length;

//   const convertedCount = enquiries.filter(
//     (item) => item.status === "Converted"
//   ).length;

//   const handleAddEnquiry = () => {
//     if (
//       !newEnquiry.customerName.trim() ||
//       !newEnquiry.phone.trim()
//     ) {
//       return;
//     }

//     const enquiry: Enquiry = {
//       id: `ENQ-${String(enquiries.length + 1).padStart(3, "0")}`,
//       customerName: newEnquiry.customerName,
//       phone: newEnquiry.phone,
//       email: newEnquiry.email,
//       productCode:
//         newEnquiry.productCode.trim() || "CUSTOM",
//       productName:
//         newEnquiry.productName.trim() || "Custom Furniture",
//       message: newEnquiry.message,
//       source: newEnquiry.source,
//       createdAt: new Date().toLocaleString("en-IN", {
//         day: "2-digit",
//         month: "short",
//         year: "numeric",
//         hour: "2-digit",
//         minute: "2-digit",
//       }),
//       status: "New",
//       nextFollowUp: newEnquiry.nextFollowUp,
//       notes: "",
//     };

//     setEnquiries((current) => [enquiry, ...current]);

//     setNewEnquiry({
//       customerName: "",
//       phone: "",
//       email: "",
//       productCode: "",
//       productName: "",
//       message: "",
//       source: "Website",
//       nextFollowUp: "",
//     });

//     setShowAddModal(false);
//   };

//   const updateStatus = (
//     enquiryId: string,
//     status: EnquiryStatus
//   ) => {
//     setEnquiries((current) =>
//       current.map((enquiry) =>
//         enquiry.id === enquiryId
//           ? { ...enquiry, status }
//           : enquiry
//       )
//     );

//     setSelectedEnquiry((current) =>
//       current && current.id === enquiryId
//         ? { ...current, status }
//         : current
//     );
//   };

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#242424]">
//       {/* HEADER */}
//       <header className="border-b border-[#e5e3dc] bg-white">
//         <div className="flex min-h-[76px] items-center justify-between px-5 lg:px-8">
//           <div>
//             <div className="text-[25px] font-bold tracking-tight text-[#9a5b18]">
//               Akrish
//             </div>

//             <div className="text-[8px] uppercase tracking-[3px] text-[#777]">
//               Furniture and Interior
//             </div>
//           </div>

//           <div className="hidden text-right sm:block">
//             <p className="text-sm font-semibold text-[#333]">
//               Furniture ERP
//             </p>

//             <p className="text-xs text-[#999]">
//               Enquiry Management
//             </p>
//           </div>
//         </div>
//       </header>

//       <main className="mx-auto max-w-[1500px] px-5 py-7 lg:px-8">
//         {/* PAGE TITLE */}
//         <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//           <div>
//             <p className="mb-1 text-xs font-medium text-[#999]">
//               Furniture / CRM
//             </p>

//             <h1 className="text-2xl font-semibold tracking-tight">
//               Enquiries
//             </h1>

//             <p className="mt-1 text-sm text-[#777]">
//               Track customer enquiries and follow up on product
//               interests.
//             </p>
//           </div>

//           <button
//             onClick={() => setShowAddModal(true)}
//             className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#125849]"
//           >
//             + New Enquiry
//           </button>
//         </div>

//         {/* SUMMARY */}
//         <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//           <SummaryCard
//             title="New Enquiries"
//             value={newCount.toString()}
//             subtitle="Needs first response"
//           />

//           <SummaryCard
//             title="Follow-up"
//             value={followUpCount.toString()}
//             subtitle="Contacted / follow-up"
//           />

//           <SummaryCard
//             title="Quoted"
//             value={quotedCount.toString()}
//             subtitle="Quotation sent"
//           />

//           <SummaryCard
//             title="Converted"
//             value={convertedCount.toString()}
//             subtitle="Converted to order"
//           />
//         </div>

//         {/* MAIN TABLE */}
//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           {/* TOOLBAR */}
//           <div className="border-b border-[#eceae4] p-5">
//             <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
//               {/* SEARCH */}
//               <div className="relative w-full xl:max-w-[500px]">
//                 <svg
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999]"
//                   width="18"
//                   height="18"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                 >
//                   <path
//                     d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                   />
//                 </svg>

//                 <input
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   placeholder="Search enquiry, customer, phone or product..."
//                   className="h-11 w-full rounded-lg border border-[#ddd] bg-white pl-10 pr-4 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                 />
//               </div>

//               {/* FILTERS */}
//               <div className="flex flex-wrap gap-3">
//                 <select
//                   value={sourceFilter}
//                   onChange={(e) =>
//                     setSourceFilter(e.target.value)
//                   }
//                   className="h-11 rounded-lg border border-[#ddd] bg-white px-3 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {sourceOptions.map((source) => (
//                     <option key={source}>{source}</option>
//                   ))}
//                 </select>

//                 <select
//                   value={statusFilter}
//                   onChange={(e) =>
//                     setStatusFilter(e.target.value)
//                   }
//                   className="h-11 rounded-lg border border-[#ddd] bg-white px-3 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {statusOptions.map((status) => (
//                     <option key={status}>{status}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </div>

//           {/* TABLE */}
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1250px] border-collapse">
//               <thead>
//                 <tr className="border-b border-[#e9e7e1] bg-[#fafaf8] text-left">
//                   <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#888]">
//                     Enquiry
//                   </th>

//                   <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#888]">
//                     Customer
//                   </th>

//                   <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#888]">
//                     Product
//                   </th>

//                   <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#888]">
//                     Source
//                   </th>

//                   <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#888]">
//                     Created
//                   </th>

//                   <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#888]">
//                     Follow-up
//                   </th>

//                   <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#888]">
//                     Status
//                   </th>

//                   <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-[#888]">
//                     Action
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {filteredEnquiries.map((enquiry) => (
//                   <tr
//                     key={enquiry.id}
//                     className="border-b border-[#efede8] transition hover:bg-[#fafbf9]"
//                   >
//                     {/* ENQUIRY */}
//                     <td className="px-5 py-4">
//                       <p className="text-sm font-semibold text-[#333]">
//                         {enquiry.id}
//                       </p>

//                       <p className="mt-1 max-w-[250px] truncate text-xs text-[#888]">
//                         {enquiry.message || "No message"}
//                       </p>
//                     </td>

//                     {/* CUSTOMER */}
//                     <td className="px-5 py-4">
//                       <p className="text-sm font-medium text-[#333]">
//                         {enquiry.customerName}
//                       </p>

//                       <p className="mt-1 text-xs text-[#888]">
//                         {enquiry.phone}
//                       </p>

//                       {enquiry.email && (
//                         <p className="mt-0.5 text-xs text-[#aaa]">
//                           {enquiry.email}
//                         </p>
//                       )}
//                     </td>

//                     {/* PRODUCT */}
//                     <td className="px-5 py-4">
//                       <p className="text-sm font-medium text-[#333]">
//                         {enquiry.productName}
//                       </p>

//                       <p className="mt-1 text-xs font-medium text-[#176b5b]">
//                         {enquiry.productCode}
//                       </p>
//                     </td>

//                     {/* SOURCE */}
//                     <td className="px-5 py-4">
//                       <SourceBadge source={enquiry.source} />
//                     </td>

//                     {/* CREATED */}
//                     <td className="px-5 py-4">
//                       <p className="text-xs text-[#666]">
//                         {enquiry.createdAt}
//                       </p>
//                     </td>

//                     {/* FOLLOW UP */}
//                     <td className="px-5 py-4">
//                       {enquiry.nextFollowUp ? (
//                         <div>
//                           <p className="text-xs font-medium text-[#555]">
//                             {enquiry.nextFollowUp}
//                           </p>

//                           <p className="mt-1 text-[10px] text-[#999]">
//                             Next follow-up
//                           </p>
//                         </div>
//                       ) : (
//                         <span className="text-xs text-[#aaa]">
//                           Not scheduled
//                         </span>
//                       )}
//                     </td>

//                     {/* STATUS */}
//                     <td className="px-5 py-4">
//                       <StatusBadge status={enquiry.status} />
//                     </td>

//                     {/* ACTION */}
//                     <td className="px-5 py-4 text-right">
//                       <button
//                         onClick={() =>
//                           setSelectedEnquiry(enquiry)
//                         }
//                         className="rounded-md border border-[#ddd] px-3 py-1.5 text-xs font-semibold text-[#555] transition hover:border-[#176b5b] hover:text-[#176b5b]"
//                       >
//                         View
//                       </button>
//                     </td>
//                   </tr>
//                 ))}

//                 {filteredEnquiries.length === 0 && (
//                   <tr>
//                     <td colSpan={8} className="px-5 py-16 text-center">
//                       <div className="mx-auto max-w-[350px]">
//                         <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#eef5f2] text-[#176b5b]">
//                           ?
//                         </div>

//                         <p className="mt-4 text-sm font-semibold text-[#444]">
//                           No enquiries found
//                         </p>

//                         <p className="mt-1 text-xs leading-5 text-[#999]">
//                           Try another search or change the selected
//                           filters.
//                         </p>
//                       </div>
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {/* FOOTER */}
//           <div className="flex flex-col gap-2 border-t border-[#eceae4] bg-[#fafaf8] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
//             <p className="text-xs text-[#888]">
//               Showing {filteredEnquiries.length} of{" "}
//               {enquiries.length} enquiries
//             </p>

//             <p className="text-xs text-[#aaa]">
//               Website enquiries should carry the exact product
//               reference.
//             </p>
//           </div>
//         </section>
//       </main>

//       {/* VIEW ENQUIRY MODAL */}
//       {selectedEnquiry && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-[760px] overflow-y-auto rounded-xl bg-white shadow-2xl">
//             {/* MODAL HEADER */}
//             <div className="flex items-start justify-between border-b border-[#eee] px-6 py-5">
//               <div>
//                 <div className="flex items-center gap-2">
//                   <h2 className="text-lg font-semibold">
//                     {selectedEnquiry.id}
//                   </h2>

//                   <StatusBadge
//                     status={selectedEnquiry.status}
//                   />
//                 </div>

//                 <p className="mt-1 text-xs text-[#999]">
//                   Customer enquiry details
//                 </p>
//               </div>

//               <button
//                 onClick={() => setSelectedEnquiry(null)}
//                 className="text-xl text-[#999] hover:text-[#333]"
//               >
//                 ×
//               </button>
//             </div>

//             {/* CUSTOMER + PRODUCT */}
//             <div className="grid gap-4 px-6 py-6 sm:grid-cols-2">
//               <InfoBox
//                 title="Customer"
//                 value={selectedEnquiry.customerName}
//                 secondary={selectedEnquiry.phone}
//               />

//               <InfoBox
//                 title="Product"
//                 value={selectedEnquiry.productName}
//                 secondary={selectedEnquiry.productCode}
//               />

//               <InfoBox
//                 title="Email"
//                 value={
//                   selectedEnquiry.email || "Not provided"
//                 }
//               />

//               <InfoBox
//                 title="Source"
//                 value={selectedEnquiry.source}
//               />

//               <InfoBox
//                 title="Created At"
//                 value={selectedEnquiry.createdAt}
//               />

//               <InfoBox
//                 title="Next Follow-up"
//                 value={
//                   selectedEnquiry.nextFollowUp ||
//                   "Not scheduled"
//                 }
//               />
//             </div>

//             {/* MESSAGE */}
//             <div className="px-6 pb-5">
//               <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#999]">
//                 Customer Message
//               </p>

//               <div className="rounded-lg border border-[#eee] bg-[#fafaf8] p-4">
//                 <p className="text-sm leading-6 text-[#555]">
//                   {selectedEnquiry.message ||
//                     "No message provided."}
//                 </p>
//               </div>
//             </div>

//             {/* NOTES */}
//             <div className="px-6 pb-5">
//               <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#999]">
//                 Internal Notes
//               </p>

//               <div className="rounded-lg border border-[#eee] bg-[#fafaf8] p-4">
//                 <p className="text-sm leading-6 text-[#555]">
//                   {selectedEnquiry.notes ||
//                     "No internal notes added."}
//                 </p>
//               </div>
//             </div>

//             {/* STATUS UPDATE */}
//             <div className="border-t border-[#eee] px-6 py-5">
//               <p className="mb-3 text-sm font-semibold text-[#444]">
//                 Update Follow-up Status
//               </p>

//               <div className="flex flex-wrap gap-2">
//                 {statusOptions
//                   .filter((status) => status !== "All Status")
//                   .map((status) => (
//                     <button
//                       key={status}
//                       onClick={() =>
//                         updateStatus(
//                           selectedEnquiry.id,
//                           status as EnquiryStatus
//                         )
//                       }
//                       className={`rounded-lg border px-3 py-2 text-xs font-medium transition ${
//                         selectedEnquiry.status === status
//                           ? "border-[#176b5b] bg-[#176b5b] text-white"
//                           : "border-[#ddd] text-[#666] hover:border-[#176b5b] hover:text-[#176b5b]"
//                       }`}
//                     >
//                       {status}
//                     </button>
//                   ))}
//               </div>
//             </div>

//             {/* ACTIONS */}
//             <div className="flex flex-col gap-3 border-t border-[#eee] bg-[#fafaf8] px-6 py-4 sm:flex-row sm:justify-between">
//               <div className="flex gap-2">
//                 <a
//                   href={`tel:${selectedEnquiry.phone}`}
//                   className="rounded-lg border border-[#ddd] bg-white px-4 py-2 text-xs font-semibold text-[#555] hover:border-[#176b5b] hover:text-[#176b5b]"
//                 >
//                   Call
//                 </a>

//                 <a
//                   href={`https://wa.me/${selectedEnquiry.phone.replace(
//                     /\D/g,
//                     ""
//                   )}`}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="rounded-lg border border-[#ddd] bg-white px-4 py-2 text-xs font-semibold text-[#555] hover:border-[#176b5b] hover:text-[#176b5b]"
//                 >
//                   WhatsApp
//                 </a>

//                 {selectedEnquiry.email && (
//                   <a
//                     href={`mailto:${selectedEnquiry.email}`}
//                     className="rounded-lg border border-[#ddd] bg-white px-4 py-2 text-xs font-semibold text-[#555] hover:border-[#176b5b] hover:text-[#176b5b]"
//                   >
//                     Email
//                   </a>
//                 )}
//               </div>

//               <button
//                 onClick={() => setSelectedEnquiry(null)}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2 text-xs font-semibold text-white hover:bg-[#125849]"
//               >
//                 Done
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ADD ENQUIRY MODAL */}
//       {showAddModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-[650px] overflow-y-auto rounded-xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#eee] px-6 py-5">
//               <div>
//                 <h2 className="text-lg font-semibold">
//                   New Enquiry
//                 </h2>

//                 <p className="mt-1 text-xs text-[#999]">
//                   Create a furniture customer enquiry.
//                 </p>
//               </div>

//               <button
//                 onClick={() => setShowAddModal(false)}
//                 className="text-xl text-[#999] hover:text-[#333]"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="grid gap-4 px-6 py-6 sm:grid-cols-2">
//               <InputField
//                 label="Customer Name *"
//                 value={newEnquiry.customerName}
//                 onChange={(value) =>
//                   setNewEnquiry({
//                     ...newEnquiry,
//                     customerName: value,
//                   })
//                 }
//                 placeholder="Customer name"
//               />

//               <InputField
//                 label="Phone / WhatsApp *"
//                 value={newEnquiry.phone}
//                 onChange={(value) =>
//                   setNewEnquiry({
//                     ...newEnquiry,
//                     phone: value,
//                   })
//                 }
//                 placeholder="+91 XXXXX XXXXX"
//               />

//               <InputField
//                 label="Email"
//                 value={newEnquiry.email}
//                 onChange={(value) =>
//                   setNewEnquiry({
//                     ...newEnquiry,
//                     email: value,
//                   })
//                 }
//                 placeholder="customer@email.com"
//               />

//               <InputField
//                 label="Product Code"
//                 value={newEnquiry.productCode}
//                 onChange={(value) =>
//                   setNewEnquiry({
//                     ...newEnquiry,
//                     productCode: value,
//                   })
//                 }
//                 placeholder="FD-100"
//               />

//               <InputField
//                 label="Product Name"
//                 value={newEnquiry.productName}
//                 onChange={(value) =>
//                   setNewEnquiry({
//                     ...newEnquiry,
//                     productName: value,
//                   })
//                 }
//                 placeholder="Modern Sofa"
//               />

//               <div>
//                 <label className="mb-2 block text-sm font-medium text-[#444]">
//                   Source
//                 </label>

//                 <select
//                   value={newEnquiry.source}
//                   onChange={(e) =>
//                     setNewEnquiry({
//                       ...newEnquiry,
//                       source: e.target.value,
//                     })
//                   }
//                   className="h-11 w-full rounded-lg border border-[#ddd] bg-white px-3 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {sourceOptions
//                     .filter(
//                       (source) => source !== "All Sources"
//                     )
//                     .map((source) => (
//                       <option key={source}>
//                         {source}
//                       </option>
//                     ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm font-medium text-[#444]">
//                   Next Follow-up
//                 </label>

//                 <input
//                   type="date"
//                   value={newEnquiry.nextFollowUp}
//                   onChange={(e) =>
//                     setNewEnquiry({
//                       ...newEnquiry,
//                       nextFollowUp: e.target.value,
//                     })
//                   }
//                   className="h-11 w-full rounded-lg border border-[#ddd] px-3 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>

//               <div className="sm:col-span-2">
//                 <label className="mb-2 block text-sm font-medium text-[#444]">
//                   Customer Message
//                 </label>

//                 <textarea
//                   value={newEnquiry.message}
//                   onChange={(e) =>
//                     setNewEnquiry({
//                       ...newEnquiry,
//                       message: e.target.value,
//                     })
//                   }
//                   rows={4}
//                   placeholder="Customer requirement or question..."
//                   className="w-full resize-none rounded-lg border border-[#ddd] px-3 py-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                 />
//               </div>
//             </div>

//             <div className="flex justify-end gap-3 border-t border-[#eee] px-6 py-4">
//               <button
//                 onClick={() => setShowAddModal(false)}
//                 className="rounded-lg border border-[#ddd] px-5 py-2.5 text-sm font-medium text-[#555] hover:bg-[#f7f7f7]"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={handleAddEnquiry}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125849]"
//               >
//                 Create Enquiry
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// /* ---------------------------------------------------------
//    COMPONENTS
// --------------------------------------------------------- */

// function SummaryCard({
//   title,
//   value,
//   subtitle,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//       <p className="text-xs font-medium text-[#999]">
//         {title}
//       </p>

//       <p className="mt-2 text-2xl font-semibold text-[#222]">
//         {value}
//       </p>

//       <p className="mt-1 text-xs text-[#aaa]">
//         {subtitle}
//       </p>
//     </div>
//   );
// }

// function SourceBadge({ source }: { source: string }) {
//   return (
//     <span className="inline-flex rounded-full bg-[#f1f3f1] px-2.5 py-1 text-xs font-medium text-[#666]">
//       {source}
//     </span>
//   );
// }

// function StatusBadge({ status }: { status: EnquiryStatus }) {
//   const styles: Record<EnquiryStatus, string> = {
//     New: "bg-blue-50 text-blue-600",
//     Contacted: "bg-purple-50 text-purple-600",
//     "Follow-up": "bg-orange-50 text-orange-600",
//     Quoted: "bg-[#eef5f2] text-[#176b5b]",
//     Converted: "bg-green-50 text-green-600",
//     Closed: "bg-gray-100 text-gray-600",
//   };

//   return (
//     <span
//       className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}
//     >
//       {status}
//     </span>
//   );
// }

// function InfoBox({
//   title,
//   value,
//   secondary,
// }: {
//   title: string;
//   value: string;
//   secondary?: string;
// }) {
//   return (
//     <div className="rounded-lg border border-[#eee] bg-[#fafaf8] p-4">
//       <p className="text-xs text-[#999]">{title}</p>

//       <p className="mt-1 text-sm font-semibold text-[#333]">
//         {value}
//       </p>

//       {secondary && (
//         <p className="mt-1 text-xs text-[#888]">
//           {secondary}
//         </p>
//       )}
//     </div>
//   );
// }

// function InputField({
//   label,
//   value,
//   onChange,
//   placeholder,
// }: {
//   label: string;
//   value: string;
//   onChange: (value: string) => void;
//   placeholder: string;
// }) {
//   return (
//     <div>
//       <label className="mb-2 block text-sm font-medium text-[#444]">
//         {label}
//       </label>

//       <input
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         placeholder={placeholder}
//         className="h-11 w-full rounded-lg border border-[#ddd] px-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//       />
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAllEnquiries,
//   createEnquiry,
//   updateEnquiry,
//   type FurnitureEnquiry,
// } from "@/modules/furniture/services/enquiryService";

// type EnquiryStatus =
//   | "New"
//   | "Contacted"
//   | "Follow-up"
//   | "Quoted"
//   | "Converted"
//   | "Closed";

// type Enquiry = {
//   id: string;
//   customerName: string;
//   phone: string;
//   email: string;
//   productCode: string;
//   productName: string;
//   message: string;
//   source: string;
//   createdAt: string;
//   status: EnquiryStatus;
//   nextFollowUp: string;
//   notes: string;
// };

// function formatCreatedAt(
//   value: FurnitureEnquiry["createdAt"]
// ): string {
//   if (!value) return "—";
//   try {
//     const date =
//       typeof value.toDate === "function"
//         ? value.toDate()
//         : new Date(value as unknown as string);
//     return date.toLocaleString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   } catch {
//     return "—";
//   }
// }

// function mapToUi(e: FurnitureEnquiry): Enquiry {
//   return {
//     id: e.id,
//     customerName: e.customerName || "Unknown",
//     phone: e.phone || "—",
//     email: e.email || "",
//     productCode: e.productCode || "CUSTOM",
//     productName: e.productName || "Custom Furniture",
//     message: e.message || "",
//     source: e.source || "Other",
//     createdAt: formatCreatedAt(e.createdAt),
//     status: (e.status as EnquiryStatus) || "New",
//     nextFollowUp: e.nextFollowUp || "",
//     notes: e.notes || "",
//   };
// }

// const sourceOptions = [
//   "All Sources",
//   "Website",
//   "Product Page",
//   "Custom Furniture Enquiry",
//   "Instagram",
//   "Facebook",
//   "Google",
//   "WhatsApp",
//   "Walk-in",
//   "Referral",
//   "Other",
// ];

// const statusOptions = [
//   "All Status",
//   "New",
//   "Contacted",
//   "Follow-up",
//   "Quoted",
//   "Converted",
//   "Closed",
// ];

// export default function FurnitureEnquiriesPage() {
//   const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   const [search, setSearch] = useState("");
//   const [sourceFilter, setSourceFilter] = useState("All Sources");
//   const [statusFilter, setStatusFilter] = useState("All Status");

//   const [selectedEnquiry, setSelectedEnquiry] =
//     useState<Enquiry | null>(null);

//   const [showAddModal, setShowAddModal] = useState(false);

//   const [newEnquiry, setNewEnquiry] = useState({
//     customerName: "",
//     phone: "",
//     email: "",
//     productCode: "",
//     productName: "",
//     message: "",
//     source: "Website",
//     nextFollowUp: "",
//   });

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllEnquiries();
//         if (cancelled) return;
//         setEnquiries(data.map(mapToUi));
//       } catch (err) {
//         console.error("Failed to load enquiries:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const filteredEnquiries = useMemo(() => {
//     const searchValue = search.toLowerCase().trim();

//     return enquiries.filter((enquiry) => {
//       const matchesSearch =
//         !searchValue ||
//         enquiry.id.toLowerCase().includes(searchValue) ||
//         enquiry.customerName.toLowerCase().includes(searchValue) ||
//         enquiry.phone.toLowerCase().includes(searchValue) ||
//         enquiry.productCode.toLowerCase().includes(searchValue) ||
//         enquiry.productName.toLowerCase().includes(searchValue) ||
//         enquiry.message.toLowerCase().includes(searchValue);

//       const matchesSource =
//         sourceFilter === "All Sources" ||
//         enquiry.source === sourceFilter;

//       const matchesStatus =
//         statusFilter === "All Status" ||
//         enquiry.status === statusFilter;

//       return matchesSearch && matchesSource && matchesStatus;
//     });
//   }, [enquiries, search, sourceFilter, statusFilter]);

//   const newCount = enquiries.filter(
//     (item) => item.status === "New"
//   ).length;

//   const followUpCount = enquiries.filter(
//     (item) =>
//       item.status === "Follow-up" ||
//       item.status === "Contacted"
//   ).length;

//   const quotedCount = enquiries.filter(
//     (item) => item.status === "Quoted"
//   ).length;

//   const convertedCount = enquiries.filter(
//     (item) => item.status === "Converted"
//   ).length;

//   const handleAddEnquiry = async () => {
//     if (
//       !newEnquiry.customerName.trim() ||
//       !newEnquiry.phone.trim()
//     ) {
//       return;
//     }

//     setSaving(true);
//     try {
//       const payload = {
//         customerName: newEnquiry.customerName.trim(),
//         phone: newEnquiry.phone.trim(),
//         email: newEnquiry.email.trim(),
//         productCode:
//           newEnquiry.productCode.trim() || "CUSTOM",
//         productName:
//           newEnquiry.productName.trim() || "Custom Furniture",
//         message: newEnquiry.message.trim(),
//         source: newEnquiry.source,
//         status: "New" as const,
//         nextFollowUp: newEnquiry.nextFollowUp,
//         notes: "",
//       };

//       const id = await createEnquiry(payload);

//       const enquiry: Enquiry = {
//         id,
//         customerName: payload.customerName,
//         phone: payload.phone,
//         email: payload.email,
//         productCode: payload.productCode,
//         productName: payload.productName,
//         message: payload.message,
//         source: payload.source,
//         createdAt: new Date().toLocaleString("en-IN", {
//           day: "2-digit",
//           month: "short",
//           year: "numeric",
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//         status: "New",
//         nextFollowUp: payload.nextFollowUp,
//         notes: "",
//       };

//       setEnquiries((current) => [enquiry, ...current]);

//       setNewEnquiry({
//         customerName: "",
//         phone: "",
//         email: "",
//         productCode: "",
//         productName: "",
//         message: "",
//         source: "Website",
//         nextFollowUp: "",
//       });

//       setShowAddModal(false);
//     } catch (err) {
//       console.error("Failed to create enquiry:", err);
//       alert("Unable to create enquiry. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const updateStatus = async (
//     enquiryId: string,
//     status: EnquiryStatus
//   ) => {
//     setEnquiries((current) =>
//       current.map((enquiry) =>
//         enquiry.id === enquiryId
//           ? { ...enquiry, status }
//           : enquiry
//       )
//     );

//     setSelectedEnquiry((current) =>
//       current && current.id === enquiryId
//         ? { ...current, status }
//         : current
//     );

//     try {
//       await updateEnquiry(enquiryId, { status });
//     } catch (err) {
//       console.error("Failed to update status:", err);
//       try {
//         const data = await getAllEnquiries();
//         setEnquiries(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#242424]">
//       {/* HEADER */}
//       <header className="border-b border-[#e5e3dc] bg-white">
//         <div className="flex min-h-[76px] items-center justify-between px-5 lg:px-8">
//           <div>
//             <div className="text-[25px] font-bold tracking-tight text-[#9a5b18]">
//               Akrish
//             </div>

//             <div className="text-[8px] uppercase tracking-[3px] text-[#777]">
//               Furniture and Interior
//             </div>
//           </div>

//           <div className="hidden text-right sm:block">
//             <p className="text-sm font-semibold text-[#333]">
//               Furniture ERP
//             </p>

//             <p className="text-xs text-[#999]">
//               Enquiry Management
//             </p>
//           </div>
//         </div>
//       </header>

//       <main className="mx-auto max-w-[1500px] px-5 py-7 lg:px-8">
//         {/* PAGE TITLE */}
//         <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//           <div>
//             <p className="mb-1 text-xs font-medium text-[#999]">
//               Furniture / CRM
//             </p>

//             <h1 className="text-2xl font-semibold tracking-tight">
//               Enquiries
//             </h1>

//             <p className="mt-1 text-sm text-[#777]">
//               Track customer enquiries and follow up on product
//               interests.
//             </p>
//           </div>

//           <button
//             onClick={() => setShowAddModal(true)}
//             className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#125849]"
//           >
//             + New Enquiry
//           </button>
//         </div>

//         {/* SUMMARY */}
//         <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//           <SummaryCard
//             title="New Enquiries"
//             value={loading ? "…" : newCount.toString()}
//             subtitle="Needs first response"
//           />

//           <SummaryCard
//             title="Follow-up"
//             value={loading ? "…" : followUpCount.toString()}
//             subtitle="Contacted / follow-up"
//           />

//           <SummaryCard
//             title="Quoted"
//             value={loading ? "…" : quotedCount.toString()}
//             subtitle="Quotation sent"
//           />

//           <SummaryCard
//             title="Converted"
//             value={loading ? "…" : convertedCount.toString()}
//             subtitle="Converted to order"
//           />
//         </div>

//         {/* MAIN TABLE */}
//         <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           {/* TOOLBAR */}
//           <div className="border-b border-[#eceae4] p-5">
//             <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
//               {/* SEARCH */}
//               <div className="relative w-full xl:max-w-[500px]">
//                 <svg
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999]"
//                   width="18"
//                   height="18"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                 >
//                   <path
//                     d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                   />
//                 </svg>

//                 <input
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   placeholder="Search enquiry, customer, phone or product..."
//                   className="h-11 w-full rounded-lg border border-[#ddd] bg-white pl-10 pr-4 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                 />
//               </div>

//               {/* FILTERS */}
//               <div className="flex flex-wrap gap-3">
//                 <select
//                   value={sourceFilter}
//                   onChange={(e) =>
//                     setSourceFilter(e.target.value)
//                   }
//                   className="h-11 rounded-lg border border-[#ddd] bg-white px-3 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {sourceOptions.map((source) => (
//                     <option key={source}>{source}</option>
//                   ))}
//                 </select>

//                 <select
//                   value={statusFilter}
//                   onChange={(e) =>
//                     setStatusFilter(e.target.value)
//                   }
//                   className="h-11 rounded-lg border border-[#ddd] bg-white px-3 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {statusOptions.map((status) => (
//                     <option key={status}>{status}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </div>

//           {/* TABLE */}
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1250px] border-collapse">
//               <thead>
//                 <tr className="border-b border-[#e9e7e1] bg-[#fafaf8] text-left">
//                   <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#888]">
//                     Enquiry
//                   </th>

//                   <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#888]">
//                     Customer
//                   </th>

//                   <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#888]">
//                     Product
//                   </th>

//                   <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#888]">
//                     Source
//                   </th>

//                   <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#888]">
//                     Created
//                   </th>

//                   <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#888]">
//                     Follow-up
//                   </th>

//                   <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#888]">
//                     Status
//                   </th>

//                   <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-[#888]">
//                     Action
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={8}
//                       className="px-5 py-16 text-center text-sm text-[#888]"
//                     >
//                       Loading enquiries…
//                     </td>
//                   </tr>
//                 ) : (
//                   <>
//                     {filteredEnquiries.map((enquiry) => (
//                       <tr
//                         key={enquiry.id}
//                         className="border-b border-[#efede8] transition hover:bg-[#fafbf9]"
//                       >
//                         {/* ENQUIRY */}
//                         <td className="px-5 py-4">
//                           <p className="text-sm font-semibold text-[#333]">
//                             {enquiry.id}
//                           </p>

//                           <p className="mt-1 max-w-[250px] truncate text-xs text-[#888]">
//                             {enquiry.message || "No message"}
//                           </p>
//                         </td>

//                         {/* CUSTOMER */}
//                         <td className="px-5 py-4">
//                           <p className="text-sm font-medium text-[#333]">
//                             {enquiry.customerName}
//                           </p>

//                           <p className="mt-1 text-xs text-[#888]">
//                             {enquiry.phone}
//                           </p>

//                           {enquiry.email && (
//                             <p className="mt-0.5 text-xs text-[#aaa]">
//                               {enquiry.email}
//                             </p>
//                           )}
//                         </td>

//                         {/* PRODUCT */}
//                         <td className="px-5 py-4">
//                           <p className="text-sm font-medium text-[#333]">
//                             {enquiry.productName}
//                           </p>

//                           <p className="mt-1 text-xs font-medium text-[#176b5b]">
//                             {enquiry.productCode}
//                           </p>
//                         </td>

//                         {/* SOURCE */}
//                         <td className="px-5 py-4">
//                           <SourceBadge source={enquiry.source} />
//                         </td>

//                         {/* CREATED */}
//                         <td className="px-5 py-4">
//                           <p className="text-xs text-[#666]">
//                             {enquiry.createdAt}
//                           </p>
//                         </td>

//                         {/* FOLLOW UP */}
//                         <td className="px-5 py-4">
//                           {enquiry.nextFollowUp ? (
//                             <div>
//                               <p className="text-xs font-medium text-[#555]">
//                                 {enquiry.nextFollowUp}
//                               </p>

//                               <p className="mt-1 text-[10px] text-[#999]">
//                                 Next follow-up
//                               </p>
//                             </div>
//                           ) : (
//                             <span className="text-xs text-[#aaa]">
//                               Not scheduled
//                             </span>
//                           )}
//                         </td>

//                         {/* STATUS */}
//                         <td className="px-5 py-4">
//                           <StatusBadge status={enquiry.status} />
//                         </td>

//                         {/* ACTION */}
//                         <td className="px-5 py-4 text-right">
//                           <button
//                             onClick={() =>
//                               setSelectedEnquiry(enquiry)
//                             }
//                             className="rounded-md border border-[#ddd] px-3 py-1.5 text-xs font-semibold text-[#555] transition hover:border-[#176b5b] hover:text-[#176b5b]"
//                           >
//                             View
//                           </button>
//                         </td>
//                       </tr>
//                     ))}

//                     {filteredEnquiries.length === 0 && (
//                       <tr>
//                         <td
//                           colSpan={8}
//                           className="px-5 py-16 text-center"
//                         >
//                           <div className="mx-auto max-w-[350px]">
//                             <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#eef5f2] text-[#176b5b]">
//                               ?
//                             </div>

//                             <p className="mt-4 text-sm font-semibold text-[#444]">
//                               No enquiries found
//                             </p>

//                             <p className="mt-1 text-xs leading-5 text-[#999]">
//                               Try another search or change the
//                               selected filters.
//                             </p>
//                           </div>
//                         </td>
//                       </tr>
//                     )}
//                   </>
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {/* FOOTER */}
//           <div className="flex flex-col gap-2 border-t border-[#eceae4] bg-[#fafaf8] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
//             <p className="text-xs text-[#888]">
//               Showing {filteredEnquiries.length} of{" "}
//               {enquiries.length} enquiries
//             </p>

//             <p className="text-xs text-[#aaa]">
//               Website enquiries should carry the exact product
//               reference.
//             </p>
//           </div>
//         </section>
//       </main>

//       {/* VIEW ENQUIRY MODAL */}
//       {selectedEnquiry && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-[760px] overflow-y-auto rounded-xl bg-white shadow-2xl">
//             {/* MODAL HEADER */}
//             <div className="flex items-start justify-between border-b border-[#eee] px-6 py-5">
//               <div>
//                 <div className="flex items-center gap-2">
//                   <h2 className="text-lg font-semibold">
//                     {selectedEnquiry.id}
//                   </h2>

//                   <StatusBadge
//                     status={selectedEnquiry.status}
//                   />
//                 </div>

//                 <p className="mt-1 text-xs text-[#999]">
//                   Customer enquiry details
//                 </p>
//               </div>

//               <button
//                 onClick={() => setSelectedEnquiry(null)}
//                 className="text-xl text-[#999] hover:text-[#333]"
//               >
//                 ×
//               </button>
//             </div>

//             {/* CUSTOMER + PRODUCT */}
//             <div className="grid gap-4 px-6 py-6 sm:grid-cols-2">
//               <InfoBox
//                 title="Customer"
//                 value={selectedEnquiry.customerName}
//                 secondary={selectedEnquiry.phone}
//               />

//               <InfoBox
//                 title="Product"
//                 value={selectedEnquiry.productName}
//                 secondary={selectedEnquiry.productCode}
//               />

//               <InfoBox
//                 title="Email"
//                 value={
//                   selectedEnquiry.email || "Not provided"
//                 }
//               />

//               <InfoBox
//                 title="Source"
//                 value={selectedEnquiry.source}
//               />

//               <InfoBox
//                 title="Created At"
//                 value={selectedEnquiry.createdAt}
//               />

//               <InfoBox
//                 title="Next Follow-up"
//                 value={
//                   selectedEnquiry.nextFollowUp ||
//                   "Not scheduled"
//                 }
//               />
//             </div>

//             {/* MESSAGE */}
//             <div className="px-6 pb-5">
//               <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#999]">
//                 Customer Message
//               </p>

//               <div className="rounded-lg border border-[#eee] bg-[#fafaf8] p-4">
//                 <p className="text-sm leading-6 text-[#555]">
//                   {selectedEnquiry.message ||
//                     "No message provided."}
//                 </p>
//               </div>
//             </div>

//             {/* NOTES */}
//             <div className="px-6 pb-5">
//               <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#999]">
//                 Internal Notes
//               </p>

//               <div className="rounded-lg border border-[#eee] bg-[#fafaf8] p-4">
//                 <p className="text-sm leading-6 text-[#555]">
//                   {selectedEnquiry.notes ||
//                     "No internal notes added."}
//                 </p>
//               </div>
//             </div>

//             {/* STATUS UPDATE */}
//             <div className="border-t border-[#eee] px-6 py-5">
//               <p className="mb-3 text-sm font-semibold text-[#444]">
//                 Update Follow-up Status
//               </p>

//               <div className="flex flex-wrap gap-2">
//                 {statusOptions
//                   .filter((status) => status !== "All Status")
//                   .map((status) => (
//                     <button
//                       key={status}
//                       onClick={() =>
//                         updateStatus(
//                           selectedEnquiry.id,
//                           status as EnquiryStatus
//                         )
//                       }
//                       className={`rounded-lg border px-3 py-2 text-xs font-medium transition ${
//                         selectedEnquiry.status === status
//                           ? "border-[#176b5b] bg-[#176b5b] text-white"
//                           : "border-[#ddd] text-[#666] hover:border-[#176b5b] hover:text-[#176b5b]"
//                       }`}
//                     >
//                       {status}
//                     </button>
//                   ))}
//               </div>
//             </div>

//             {/* ACTIONS */}
//             <div className="flex flex-col gap-3 border-t border-[#eee] bg-[#fafaf8] px-6 py-4 sm:flex-row sm:justify-between">
//               <div className="flex gap-2">
//                 <a
//                   href={`tel:${selectedEnquiry.phone}`}
//                   className="rounded-lg border border-[#ddd] bg-white px-4 py-2 text-xs font-semibold text-[#555] hover:border-[#176b5b] hover:text-[#176b5b]"
//                 >
//                   Call
//                 </a>

//                 <a
//                   href={`https://wa.me/${selectedEnquiry.phone.replace(
//                     /\D/g,
//                     ""
//                   )}`}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="rounded-lg border border-[#ddd] bg-white px-4 py-2 text-xs font-semibold text-[#555] hover:border-[#176b5b] hover:text-[#176b5b]"
//                 >
//                   WhatsApp
//                 </a>

//                 {selectedEnquiry.email && (
//                   <a
//                     href={`mailto:${selectedEnquiry.email}`}
//                     className="rounded-lg border border-[#ddd] bg-white px-4 py-2 text-xs font-semibold text-[#555] hover:border-[#176b5b] hover:text-[#176b5b]"
//                   >
//                     Email
//                   </a>
//                 )}
//               </div>

//               <button
//                 onClick={() => setSelectedEnquiry(null)}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2 text-xs font-semibold text-white hover:bg-[#125849]"
//               >
//                 Done
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ADD ENQUIRY MODAL */}
//       {showAddModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-[650px] overflow-y-auto rounded-xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#eee] px-6 py-5">
//               <div>
//                 <h2 className="text-lg font-semibold">
//                   New Enquiry
//                 </h2>

//                 <p className="mt-1 text-xs text-[#999]">
//                   Create a furniture customer enquiry.
//                 </p>
//               </div>

//               <button
//                 onClick={() => setShowAddModal(false)}
//                 className="text-xl text-[#999] hover:text-[#333]"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="grid gap-4 px-6 py-6 sm:grid-cols-2">
//               <InputField
//                 label="Customer Name *"
//                 value={newEnquiry.customerName}
//                 onChange={(value) =>
//                   setNewEnquiry({
//                     ...newEnquiry,
//                     customerName: value,
//                   })
//                 }
//                 placeholder="Customer name"
//               />

//               <InputField
//                 label="Phone / WhatsApp *"
//                 value={newEnquiry.phone}
//                 onChange={(value) =>
//                   setNewEnquiry({
//                     ...newEnquiry,
//                     phone: value,
//                   })
//                 }
//                 placeholder="+91 XXXXX XXXXX"
//               />

//               <InputField
//                 label="Email"
//                 value={newEnquiry.email}
//                 onChange={(value) =>
//                   setNewEnquiry({
//                     ...newEnquiry,
//                     email: value,
//                   })
//                 }
//                 placeholder="customer@email.com"
//               />

//               <InputField
//                 label="Product Code"
//                 value={newEnquiry.productCode}
//                 onChange={(value) =>
//                   setNewEnquiry({
//                     ...newEnquiry,
//                     productCode: value,
//                   })
//                 }
//                 placeholder="FD-100"
//               />

//               <InputField
//                 label="Product Name"
//                 value={newEnquiry.productName}
//                 onChange={(value) =>
//                   setNewEnquiry({
//                     ...newEnquiry,
//                     productName: value,
//                   })
//                 }
//                 placeholder="Modern Sofa"
//               />

//               <div>
//                 <label className="mb-2 block text-sm font-medium text-[#444]">
//                   Source
//                 </label>

//                 <select
//                   value={newEnquiry.source}
//                   onChange={(e) =>
//                     setNewEnquiry({
//                       ...newEnquiry,
//                       source: e.target.value,
//                     })
//                   }
//                   className="h-11 w-full rounded-lg border border-[#ddd] bg-white px-3 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {sourceOptions
//                     .filter(
//                       (source) => source !== "All Sources"
//                     )
//                     .map((source) => (
//                       <option key={source}>
//                         {source}
//                       </option>
//                     ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm font-medium text-[#444]">
//                   Next Follow-up
//                 </label>

//                 <input
//                   type="date"
//                   value={newEnquiry.nextFollowUp}
//                   onChange={(e) =>
//                     setNewEnquiry({
//                       ...newEnquiry,
//                       nextFollowUp: e.target.value,
//                     })
//                   }
//                   className="h-11 w-full rounded-lg border border-[#ddd] px-3 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>

//               <div className="sm:col-span-2">
//                 <label className="mb-2 block text-sm font-medium text-[#444]">
//                   Customer Message
//                 </label>

//                 <textarea
//                   value={newEnquiry.message}
//                   onChange={(e) =>
//                     setNewEnquiry({
//                       ...newEnquiry,
//                       message: e.target.value,
//                     })
//                   }
//                   rows={4}
//                   placeholder="Customer requirement or question..."
//                   className="w-full resize-none rounded-lg border border-[#ddd] px-3 py-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                 />
//               </div>
//             </div>

//             <div className="flex justify-end gap-3 border-t border-[#eee] px-6 py-4">
//               <button
//                 onClick={() => setShowAddModal(false)}
//                 className="rounded-lg border border-[#ddd] px-5 py-2.5 text-sm font-medium text-[#555] hover:bg-[#f7f7f7]"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={handleAddEnquiry}
//                 disabled={saving}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//               >
//                 {saving ? "Creating…" : "Create Enquiry"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// /* ---------------------------------------------------------
//    COMPONENTS
// --------------------------------------------------------- */

// function SummaryCard({
//   title,
//   value,
//   subtitle,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//       <p className="text-xs font-medium text-[#999]">
//         {title}
//       </p>

//       <p className="mt-2 text-2xl font-semibold text-[#222]">
//         {value}
//       </p>

//       <p className="mt-1 text-xs text-[#aaa]">
//         {subtitle}
//       </p>
//     </div>
//   );
// }

// function SourceBadge({ source }: { source: string }) {
//   return (
//     <span className="inline-flex rounded-full bg-[#f1f3f1] px-2.5 py-1 text-xs font-medium text-[#666]">
//       {source}
//     </span>
//   );
// }

// function StatusBadge({ status }: { status: EnquiryStatus }) {
//   const styles: Record<EnquiryStatus, string> = {
//     New: "bg-blue-50 text-blue-600",
//     Contacted: "bg-purple-50 text-purple-600",
//     "Follow-up": "bg-orange-50 text-orange-600",
//     Quoted: "bg-[#eef5f2] text-[#176b5b]",
//     Converted: "bg-green-50 text-green-600",
//     Closed: "bg-gray-100 text-gray-600",
//   };

//   return (
//     <span
//       className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}
//     >
//       {status}
//     </span>
//   );
// }

// function InfoBox({
//   title,
//   value,
//   secondary,
// }: {
//   title: string;
//   value: string;
//   secondary?: string;
// }) {
//   return (
//     <div className="rounded-lg border border-[#eee] bg-[#fafaf8] p-4">
//       <p className="text-xs text-[#999]">{title}</p>

//       <p className="mt-1 text-sm font-semibold text-[#333]">
//         {value}
//       </p>

//       {secondary && (
//         <p className="mt-1 text-xs text-[#888]">
//           {secondary}
//         </p>
//       )}
//     </div>
//   );
// }

// function InputField({
//   label,
//   value,
//   onChange,
//   placeholder,
// }: {
//   label: string;
//   value: string;
//   onChange: (value: string) => void;
//   placeholder: string;
// }) {
//   return (
//     <div>
//       <label className="mb-2 block text-sm font-medium text-[#444]">
//         {label}
//       </label>

//       <input
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         placeholder={placeholder}
//         className="h-11 w-full rounded-lg border border-[#ddd] px-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//       />
//     </div>
//   );
// }

"use client";

import { useEffect, useMemo, useState } from "react";
import {
  getAllEnquiries,
  createEnquiry,
  updateEnquiry,
  type FurnitureEnquiry,
} from "@/modules/furniture/services/enquiryService";

type EnquiryStatus =
  | "New"
  | "Contacted"
  | "Follow-up"
  | "Quoted"
  | "Converted"
  | "Closed";

type Enquiry = {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  productCode: string;
  productName: string;
  message: string;
  source: string;
  createdAt: string;
  status: EnquiryStatus;
  nextFollowUp: string;
  notes: string;
};

function formatCreatedAt(value: FurnitureEnquiry["createdAt"]): string {
  if (!value) return "—";
  try {
    const date =
      typeof value.toDate === "function"
        ? value.toDate()
        : new Date(value as unknown as string);
    return date.toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "—";
  }
}

function mapToUi(e: FurnitureEnquiry): Enquiry {
  return {
    id: e.id,
    customerName: e.customerName || "Unknown",
    phone: e.phone || "—",
    email: e.email || "",
    productCode: e.productCode || "CUSTOM",
    productName: e.productName || "Custom Furniture",
    message: e.message || "",
    source: e.source || "Other",
    createdAt: formatCreatedAt(e.createdAt),
    status: (e.status as EnquiryStatus) || "New",
    nextFollowUp: e.nextFollowUp || "",
    notes: e.notes || "",
  };
}

const sourceOptions = [
  "All Sources",
  "Website",
  "Product Page",
  "Custom Furniture Enquiry",
  "Instagram",
  "Facebook",
  "Google",
  "WhatsApp",
  "Walk-in",
  "Referral",
  "Other",
];

const statusOptions = [
  "All Status",
  "New",
  "Contacted",
  "Follow-up",
  "Quoted",
  "Converted",
  "Closed",
];

export default function FurnitureEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [search, setSearch] = useState("");
  const [sourceFilter, setSourceFilter] = useState("All Sources");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const [newEnquiry, setNewEnquiry] = useState({
    customerName: "",
    phone: "",
    email: "",
    productCode: "",
    productName: "",
    message: "",
    source: "Website",
    nextFollowUp: "",
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const data = await getAllEnquiries();
        if (cancelled) return;
        setEnquiries(data.map(mapToUi));
      } catch (err) {
        console.error("Failed to load enquiries:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const filteredEnquiries = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    return enquiries.filter((enquiry) => {
      const matchesSearch =
        !searchValue ||
        enquiry.id.toLowerCase().includes(searchValue) ||
        enquiry.customerName.toLowerCase().includes(searchValue) ||
        enquiry.phone.toLowerCase().includes(searchValue) ||
        enquiry.productCode.toLowerCase().includes(searchValue) ||
        enquiry.productName.toLowerCase().includes(searchValue) ||
        enquiry.message.toLowerCase().includes(searchValue);

      const matchesSource =
        sourceFilter === "All Sources" || enquiry.source === sourceFilter;

      const matchesStatus =
        statusFilter === "All Status" || enquiry.status === statusFilter;

      return matchesSearch && matchesSource && matchesStatus;
    });
  }, [enquiries, search, sourceFilter, statusFilter]);

  const newCount = enquiries.filter((item) => item.status === "New").length;
  const followUpCount = enquiries.filter(
    (item) => item.status === "Follow-up" || item.status === "Contacted"
  ).length;
  const quotedCount = enquiries.filter((item) => item.status === "Quoted")
    .length;
  const convertedCount = enquiries.filter(
    (item) => item.status === "Converted"
  ).length;

  const handleAddEnquiry = async () => {
    if (!newEnquiry.customerName.trim() || !newEnquiry.phone.trim()) {
      return;
    }

    setSaving(true);
    try {
      const payload = {
        customerName: newEnquiry.customerName.trim(),
        phone: newEnquiry.phone.trim(),
        email: newEnquiry.email.trim(),
        productCode: newEnquiry.productCode.trim() || "CUSTOM",
        productName: newEnquiry.productName.trim() || "Custom Furniture",
        message: newEnquiry.message.trim(),
        source: newEnquiry.source,
        status: "New" as const,
        nextFollowUp: newEnquiry.nextFollowUp,
        notes: "",
      };

      const id = await createEnquiry(payload);

      const enquiry: Enquiry = {
        id,
        customerName: payload.customerName,
        phone: payload.phone,
        email: payload.email,
        productCode: payload.productCode,
        productName: payload.productName,
        message: payload.message,
        source: payload.source,
        createdAt: new Date().toLocaleString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        status: "New",
        nextFollowUp: payload.nextFollowUp,
        notes: "",
      };

      setEnquiries((current) => [enquiry, ...current]);
      setNewEnquiry({
        customerName: "",
        phone: "",
        email: "",
        productCode: "",
        productName: "",
        message: "",
        source: "Website",
        nextFollowUp: "",
      });
      setShowAddModal(false);
    } catch (err) {
      console.error("Failed to create enquiry:", err);
      alert("Unable to create enquiry. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const updateStatus = async (enquiryId: string, status: EnquiryStatus) => {
    setEnquiries((current) =>
      current.map((enquiry) =>
        enquiry.id === enquiryId ? { ...enquiry, status } : enquiry
      )
    );

    setSelectedEnquiry((current) =>
      current && current.id === enquiryId ? { ...current, status } : current
    );

    try {
      await updateEnquiry(enquiryId, { status });
    } catch (err) {
      console.error("Failed to update status:", err);
      try {
        const data = await getAllEnquiries();
        setEnquiries(data.map(mapToUi));
      } catch {
        /* ignore */
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#242424]">
      <main className="mx-auto max-w-[1500px] px-3 py-5 sm:px-5 sm:py-7 lg:px-8">
        {/* Title + button same row */}
        <div className="mb-5 flex items-start justify-between gap-3 sm:mb-7">
          <div className="min-w-0 flex-1">
            <p className="mb-1 text-xs font-medium text-[#999]">
              Furniture / CRM
            </p>
            <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Enquiries
            </h1>
            <p className="mt-1 text-xs text-[#777] sm:text-sm">
              Track customer enquiries and follow up on product interests.
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="shrink-0 rounded-lg bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-[#125849] sm:px-5 sm:text-sm"
          >
            + New Enquiry
          </button>
        </div>

        {/* Summary */}
        <div className="mb-5 grid grid-cols-2 gap-3 sm:mb-7 sm:gap-4 lg:grid-cols-4">
          <SummaryCard
            title="New Enquiries"
            value={loading ? "…" : newCount.toString()}
            subtitle="Needs first response"
          />
          <SummaryCard
            title="Follow-up"
            value={loading ? "…" : followUpCount.toString()}
            subtitle="Contacted / follow-up"
          />
          <SummaryCard
            title="Quoted"
            value={loading ? "…" : quotedCount.toString()}
            subtitle="Quotation sent"
          />
          <SummaryCard
            title="Converted"
            value={loading ? "…" : convertedCount.toString()}
            subtitle="Converted to order"
          />
        </div>

        <section className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white shadow-sm">
          <div className="border-b border-[#eceae4] p-3 sm:p-5">
            <div className="flex flex-col gap-3">
              <div className="relative w-full">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999]"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search enquiry, customer, phone or product..."
                  className="h-11 w-full rounded-xl border border-[#ddd] bg-white pl-10 pr-4 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
                />
              </div>

              {/* Filters — one line */}
              <div className="flex w-full gap-2">
                <select
                  value={sourceFilter}
                  onChange={(e) => setSourceFilter(e.target.value)}
                  className="h-11 min-w-0 flex-1 rounded-xl border border-[#ddd] bg-white px-2.5 text-xs outline-none focus:border-[#176b5b] sm:px-3 sm:text-sm"
                >
                  {sourceOptions.map((source) => (
                    <option key={source}>{source}</option>
                  ))}
                </select>

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="h-11 min-w-0 flex-1 rounded-xl border border-[#ddd] bg-white px-2.5 text-xs outline-none focus:border-[#176b5b] sm:px-3 sm:text-sm"
                >
                  {statusOptions.map((status) => (
                    <option key={status}>{status}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr className="border-b border-[#e9e7e1] bg-[#fafaf8] text-left">
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[#888] sm:px-5 sm:py-4">
                    Enquiry
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[#888] sm:px-5 sm:py-4">
                    Customer
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[#888] sm:px-5 sm:py-4">
                    Product
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[#888] sm:px-5 sm:py-4">
                    Source
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[#888] sm:px-5 sm:py-4">
                    Created
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[#888] sm:px-5 sm:py-4">
                    Follow-up
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[#888] sm:px-5 sm:py-4">
                    Status
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-[#888] sm:px-5 sm:py-4">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-5 py-16 text-center text-sm text-[#888]"
                    >
                      Loading enquiries…
                    </td>
                  </tr>
                ) : (
                  <>
                    {filteredEnquiries.map((enquiry) => (
                      <tr
                        key={enquiry.id}
                        className="border-b border-[#efede8] transition hover:bg-[#fafbf9]"
                      >
                        <td className="px-4 py-3 sm:px-5 sm:py-4">
                          <p className="text-sm font-semibold text-[#333]">
                            {enquiry.id.slice(0, 10).toUpperCase()}
                          </p>
                          <p className="mt-1 max-w-[220px] truncate text-xs text-[#888]">
                            {enquiry.message || "No message"}
                          </p>
                        </td>
                        <td className="px-4 py-3 sm:px-5 sm:py-4">
                          <p className="text-sm font-medium text-[#333]">
                            {enquiry.customerName}
                          </p>
                          <p className="mt-1 text-xs text-[#888]">
                            {enquiry.phone}
                          </p>
                          {enquiry.email && (
                            <p className="mt-0.5 truncate text-xs text-[#aaa]">
                              {enquiry.email}
                            </p>
                          )}
                        </td>
                        <td className="px-4 py-3 sm:px-5 sm:py-4">
                          <p className="text-sm font-medium text-[#333]">
                            {enquiry.productName}
                          </p>
                          <p className="mt-1 text-xs font-medium text-[#176b5b]">
                            {enquiry.productCode}
                          </p>
                        </td>
                        <td className="px-4 py-3 sm:px-5 sm:py-4">
                          <SourceBadge source={enquiry.source} />
                        </td>
                        <td className="px-4 py-3 sm:px-5 sm:py-4">
                          <p className="text-xs text-[#666]">
                            {enquiry.createdAt}
                          </p>
                        </td>
                        <td className="px-4 py-3 sm:px-5 sm:py-4">
                          {enquiry.nextFollowUp ? (
                            <div>
                              <p className="text-xs font-medium text-[#555]">
                                {enquiry.nextFollowUp}
                              </p>
                              <p className="mt-1 text-[10px] text-[#999]">
                                Next follow-up
                              </p>
                            </div>
                          ) : (
                            <span className="text-xs text-[#aaa]">
                              Not scheduled
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3 sm:px-5 sm:py-4">
                          <StatusBadge status={enquiry.status} />
                        </td>
                        <td className="px-4 py-3 text-right sm:px-5 sm:py-4">
                          <button
                            onClick={() => setSelectedEnquiry(enquiry)}
                            className="rounded-md border border-[#ddd] px-3 py-1.5 text-xs font-semibold text-[#555] transition hover:border-[#176b5b] hover:text-[#176b5b]"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}

                    {filteredEnquiries.length === 0 && (
                      <tr>
                        <td colSpan={8} className="px-5 py-16 text-center">
                          <p className="text-sm font-semibold text-[#444]">
                            No enquiries found
                          </p>
                          <p className="mt-1 text-xs text-[#999]">
                            Try another search or change the filters.
                          </p>
                        </td>
                      </tr>
                    )}
                  </>
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="space-y-3 p-3 md:hidden">
            {loading ? (
              <p className="py-10 text-center text-sm text-[#888]">
                Loading enquiries…
              </p>
            ) : filteredEnquiries.length === 0 ? (
              <p className="py-10 text-center text-sm text-[#777]">
                No enquiries found
              </p>
            ) : (
              filteredEnquiries.map((enquiry) => (
                <button
                  key={enquiry.id}
                  type="button"
                  onClick={() => setSelectedEnquiry(enquiry)}
                  className="w-full rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3 text-left"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-[#333]">
                        {enquiry.customerName}
                      </p>
                      <p className="mt-0.5 text-xs text-[#666]">
                        {enquiry.phone}
                      </p>
                    </div>
                    <StatusBadge status={enquiry.status} />
                  </div>
                  <p className="mt-2 truncate text-sm text-[#444]">
                    {enquiry.productName}
                  </p>
                  <p className="mt-1 text-xs text-[#176b5b]">
                    {enquiry.productCode}
                  </p>
                  <div className="mt-2 flex items-center justify-between gap-2 text-xs text-[#999]">
                    <span className="truncate">{enquiry.source}</span>
                    <span className="shrink-0">{enquiry.createdAt}</span>
                  </div>
                </button>
              ))
            )}
          </div>

          <div className="flex flex-col gap-1 border-t border-[#eceae4] bg-[#fafaf8] px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4">
            <p className="text-xs text-[#888]">
              Showing {filteredEnquiries.length} of {enquiries.length} enquiries
            </p>
            <p className="text-xs text-[#aaa]">
              Website enquiries should carry the product reference.
            </p>
          </div>
        </section>
      </main>

      {/* View modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="max-h-[90vh] w-full max-w-[760px] overflow-y-auto rounded-xl bg-white shadow-2xl">
            <div className="flex items-start justify-between border-b border-[#eee] px-4 py-4 sm:px-6 sm:py-5">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-semibold">
                    {selectedEnquiry.id.slice(0, 12).toUpperCase()}
                  </h2>
                  <StatusBadge status={selectedEnquiry.status} />
                </div>
                <p className="mt-1 text-xs text-[#999]">
                  Customer enquiry details
                </p>
              </div>
              <button
                onClick={() => setSelectedEnquiry(null)}
                className="shrink-0 text-xl text-[#999] hover:text-[#333]"
              >
                ×
              </button>
            </div>

            <div className="grid gap-3 px-4 py-5 sm:grid-cols-2 sm:gap-4 sm:px-6 sm:py-6">
              <InfoBox
                title="Customer"
                value={selectedEnquiry.customerName}
                secondary={selectedEnquiry.phone}
              />
              <InfoBox
                title="Product"
                value={selectedEnquiry.productName}
                secondary={selectedEnquiry.productCode}
              />
              <InfoBox
                title="Email"
                value={selectedEnquiry.email || "Not provided"}
              />
              <InfoBox title="Source" value={selectedEnquiry.source} />
              <InfoBox title="Created At" value={selectedEnquiry.createdAt} />
              <InfoBox
                title="Next Follow-up"
                value={selectedEnquiry.nextFollowUp || "Not scheduled"}
              />
            </div>

            <div className="px-4 pb-4 sm:px-6 sm:pb-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#999]">
                Customer Message
              </p>
              <div className="rounded-lg border border-[#eee] bg-[#fafaf8] p-4">
                <p className="text-sm leading-6 text-[#555]">
                  {selectedEnquiry.message || "No message provided."}
                </p>
              </div>
            </div>

            <div className="px-4 pb-4 sm:px-6 sm:pb-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#999]">
                Internal Notes
              </p>
              <div className="rounded-lg border border-[#eee] bg-[#fafaf8] p-4">
                <p className="text-sm leading-6 text-[#555]">
                  {selectedEnquiry.notes || "No internal notes added."}
                </p>
              </div>
            </div>

            <div className="border-t border-[#eee] px-4 py-4 sm:px-6 sm:py-5">
              <p className="mb-3 text-sm font-semibold text-[#444]">
                Update Follow-up Status
              </p>
              <div className="flex flex-wrap gap-2">
                {statusOptions
                  .filter((status) => status !== "All Status")
                  .map((status) => (
                    <button
                      key={status}
                      onClick={() =>
                        updateStatus(
                          selectedEnquiry.id,
                          status as EnquiryStatus
                        )
                      }
                      className={`rounded-lg border px-3 py-2 text-xs font-medium transition ${
                        selectedEnquiry.status === status
                          ? "border-[#176b5b] bg-[#176b5b] text-white"
                          : "border-[#ddd] text-[#666] hover:border-[#176b5b] hover:text-[#176b5b]"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-[#eee] bg-[#fafaf8] px-4 py-4 sm:flex-row sm:justify-between sm:px-6">
              <div className="flex flex-wrap gap-2">
                <a
                  href={`tel:${selectedEnquiry.phone}`}
                  className="rounded-lg border border-[#ddd] bg-white px-4 py-2 text-xs font-semibold text-[#555] hover:border-[#176b5b] hover:text-[#176b5b]"
                >
                  Call
                </a>
                <a
                  href={`https://wa.me/${selectedEnquiry.phone.replace(
                    /\D/g,
                    ""
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-[#ddd] bg-white px-4 py-2 text-xs font-semibold text-[#555] hover:border-[#176b5b] hover:text-[#176b5b]"
                >
                  WhatsApp
                </a>
                {selectedEnquiry.email && (
                  <a
                    href={`mailto:${selectedEnquiry.email}`}
                    className="rounded-lg border border-[#ddd] bg-white px-4 py-2 text-xs font-semibold text-[#555] hover:border-[#176b5b] hover:text-[#176b5b]"
                  >
                    Email
                  </a>
                )}
              </div>
              <button
                onClick={() => setSelectedEnquiry(null)}
                className="rounded-lg bg-[#176b5b] px-5 py-2 text-xs font-semibold text-white hover:bg-[#125849]"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="max-h-[90vh] w-full max-w-[650px] overflow-y-auto rounded-xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#eee] px-4 py-4 sm:px-6 sm:py-5">
              <div>
                <h2 className="text-lg font-semibold">New Enquiry</h2>
                <p className="mt-1 text-xs text-[#999]">
                  Create a furniture customer enquiry.
                </p>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-xl text-[#999] hover:text-[#333]"
              >
                ×
              </button>
            </div>

            <div className="grid gap-4 px-4 py-5 sm:grid-cols-2 sm:px-6 sm:py-6">
              <InputField
                label="Customer Name *"
                value={newEnquiry.customerName}
                onChange={(value) =>
                  setNewEnquiry({ ...newEnquiry, customerName: value })
                }
                placeholder="Customer name"
              />
              <InputField
                label="Phone / WhatsApp *"
                value={newEnquiry.phone}
                onChange={(value) =>
                  setNewEnquiry({ ...newEnquiry, phone: value })
                }
                placeholder="+91 XXXXX XXXXX"
              />
              <InputField
                label="Email"
                value={newEnquiry.email}
                onChange={(value) =>
                  setNewEnquiry({ ...newEnquiry, email: value })
                }
                placeholder="customer@email.com"
              />
              <InputField
                label="Product Code"
                value={newEnquiry.productCode}
                onChange={(value) =>
                  setNewEnquiry({ ...newEnquiry, productCode: value })
                }
                placeholder="FD-100"
              />
              <InputField
                label="Product Name"
                value={newEnquiry.productName}
                onChange={(value) =>
                  setNewEnquiry({ ...newEnquiry, productName: value })
                }
                placeholder="Modern Sofa"
              />
              <div>
                <label className="mb-2 block text-sm font-medium text-[#444]">
                  Source
                </label>
                <select
                  value={newEnquiry.source}
                  onChange={(e) =>
                    setNewEnquiry({ ...newEnquiry, source: e.target.value })
                  }
                  className="h-11 w-full rounded-lg border border-[#ddd] bg-white px-3 text-sm outline-none focus:border-[#176b5b]"
                >
                  {sourceOptions
                    .filter((source) => source !== "All Sources")
                    .map((source) => (
                      <option key={source}>{source}</option>
                    ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#444]">
                  Next Follow-up
                </label>
                <input
                  type="date"
                  value={newEnquiry.nextFollowUp}
                  onChange={(e) =>
                    setNewEnquiry({
                      ...newEnquiry,
                      nextFollowUp: e.target.value,
                    })
                  }
                  className="h-11 w-full rounded-lg border border-[#ddd] px-3 text-sm outline-none focus:border-[#176b5b]"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-[#444]">
                  Customer Message
                </label>
                <textarea
                  value={newEnquiry.message}
                  onChange={(e) =>
                    setNewEnquiry({ ...newEnquiry, message: e.target.value })
                  }
                  rows={4}
                  placeholder="Customer requirement or question..."
                  className="w-full resize-none rounded-lg border border-[#ddd] px-3 py-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 border-t border-[#eee] px-4 py-4 sm:px-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="rounded-lg border border-[#ddd] px-5 py-2.5 text-sm font-medium text-[#555] hover:bg-[#f7f7f7]"
              >
                Cancel
              </button>
              <button
                onClick={handleAddEnquiry}
                disabled={saving}
                className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
              >
                {saving ? "Creating…" : "Create Enquiry"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SummaryCard({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-xl border border-[#e4e2da] bg-white p-3 shadow-sm sm:p-5">
      <p className="text-[11px] font-medium text-[#999] sm:text-xs">{title}</p>
      <p className="mt-1.5 text-lg font-semibold text-[#222] sm:mt-2 sm:text-2xl">
        {value}
      </p>
      <p className="mt-1 text-[10px] text-[#aaa] sm:text-xs">{subtitle}</p>
    </div>
  );
}

function SourceBadge({ source }: { source: string }) {
  return (
    <span className="inline-flex rounded-full bg-[#f1f3f1] px-2.5 py-1 text-xs font-medium text-[#666]">
      {source}
    </span>
  );
}

function StatusBadge({ status }: { status: EnquiryStatus }) {
  const styles: Record<EnquiryStatus, string> = {
    New: "bg-blue-50 text-blue-600",
    Contacted: "bg-purple-50 text-purple-600",
    "Follow-up": "bg-orange-50 text-orange-600",
    Quoted: "bg-[#eef5f2] text-[#176b5b]",
    Converted: "bg-green-50 text-green-600",
    Closed: "bg-gray-100 text-gray-600",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}

function InfoBox({
  title,
  value,
  secondary,
}: {
  title: string;
  value: string;
  secondary?: string;
}) {
  return (
    <div className="rounded-lg border border-[#eee] bg-[#fafaf8] p-4">
      <p className="text-xs text-[#999]">{title}</p>
      <p className="mt-1 text-sm font-semibold text-[#333]">{value}</p>
      {secondary && (
        <p className="mt-1 text-xs text-[#888]">{secondary}</p>
      )}
    </div>
  );
}

function InputField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[#444]">
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-11 w-full rounded-lg border border-[#ddd] px-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
      />
    </div>
  );
}
