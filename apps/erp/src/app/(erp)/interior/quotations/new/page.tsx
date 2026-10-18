// "use client";

// import { useMemo, useState } from "react";

// type Item = {
//   id: number;
//   category: string;
//   description: string;
//   quantity: number;
//   unit: string;
//   rate: number;
//   discount: number;
// };

// type ClientDetails = {
//   name: string;
//   phone: string;
//   email: string;
//   address: string;
// };

// const categories = [
//   "Design",
//   "Civil Work",
//   "Furniture",
//   "Electrical",
//   "Lighting",
//   "False Ceiling",
//   "Painting",
//   "Flooring",
//   "Kitchen",
//   "Wardrobe",
//   "Other",
// ];

// const units = ["Nos", "Sq.Ft", "Sq.M", "Rft", "Set", "Job", "Lot"];

// export default function NewInteriorQuotationPage() {
//   const [quotationNo] = useState(
//     `QT-${new Date().getFullYear()}-${String(
//       Math.floor(Math.random() * 900) + 100
//     )}`
//   );

//   const [quotationDate, setQuotationDate] = useState(
//     new Date().toISOString().split("T")[0]
//   );

//   const [validUntil, setValidUntil] = useState(
//     new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)
//       .toISOString()
//       .split("T")[0]
//   );

//   const [client, setClient] = useState<ClientDetails>({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//   });

//   const [projectName, setProjectName] = useState("");
//   const [projectType, setProjectType] = useState("Residential");
//   const [location, setLocation] = useState("");
//   const [designer, setDesigner] = useState("Priya Sharma");
//   const [paymentTerms, setPaymentTerms] =
//     useState("40% Advance, 40% During Work, 20% On Completion");

//   const [items, setItems] = useState<Item[]>([
//     {
//       id: 1,
//       category: "Design",
//       description: "Complete Interior Design & 3D Visualization",
//       quantity: 1,
//       unit: "Job",
//       rate: 45000,
//       discount: 0,
//     },
//     {
//       id: 2,
//       category: "False Ceiling",
//       description: "Gypsum False Ceiling with Cove Lighting Provision",
//       quantity: 850,
//       unit: "Sq.Ft",
//       rate: 180,
//       discount: 5,
//     },
//     {
//       id: 3,
//       category: "Furniture",
//       description: "Custom TV Unit with Storage",
//       quantity: 1,
//       unit: "Nos",
//       rate: 65000,
//       discount: 0,
//     },
//   ]);

//   const [taxRate, setTaxRate] = useState(18);
//   const [additionalDiscount, setAdditionalDiscount] =
//     useState(0);

//   const [notes, setNotes] = useState(
//     "Quotation is prepared based on the current design requirements. Any additional work or material changes will be charged separately."
//   );

//   const [terms, setTerms] = useState(
//     "Prices are valid for the quotation validity period. Material selection and final design will be confirmed before execution."
//   );

//   const [showPreview, setShowPreview] = useState(false);

//   const [nextItemId, setNextItemId] = useState(4);

//   const calculations = useMemo(() => {
//     const subtotal = items.reduce((sum, item) => {
//       const amount =
//         item.quantity *
//         item.rate *
//         (1 - item.discount / 100);

//       return sum + amount;
//     }, 0);

//     const itemDiscount = items.reduce((sum, item) => {
//       const original =
//         item.quantity * item.rate;

//       const discounted =
//         original * (1 - item.discount / 100);

//       return sum + (original - discounted);
//     }, 0);

//     const taxableAmount = Math.max(
//       0,
//       subtotal - additionalDiscount
//     );

//     const tax = taxableAmount * (taxRate / 100);

//     const total = taxableAmount + tax;

//     return {
//       subtotal,
//       itemDiscount,
//       taxableAmount,
//       tax,
//       total,
//     };
//   }, [items, taxRate, additionalDiscount]);

//   function updateItem(
//     id: number,
//     field: keyof Item,
//     value: string | number
//   ) {
//     setItems((current) =>
//       current.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               [field]: value,
//             }
//           : item
//       )
//     );
//   }

//   function addItem() {
//     const item: Item = {
//       id: nextItemId,
//       category: "Other",
//       description: "",
//       quantity: 1,
//       unit: "Nos",
//       rate: 0,
//       discount: 0,
//     };

//     setItems((current) => [...current, item]);
//     setNextItemId((current) => current + 1);
//   }

//   function removeItem(id: number) {
//     if (items.length === 1) {
//       alert("At least one quotation item is required.");
//       return;
//     }

//     setItems((current) =>
//       current.filter((item) => item.id !== id)
//     );
//   }

//   function saveQuotation() {
//     if (!client.name.trim()) {
//       alert("Please enter client name.");
//       return;
//     }

//     if (!projectName.trim()) {
//       alert("Please enter project name.");
//       return;
//     }

//     if (items.some((item) => !item.description.trim())) {
//       alert("Please enter description for all items.");
//       return;
//     }

//     alert(
//       `Quotation ${quotationNo} saved successfully.`
//     );
//   }

//   function sendQuotation() {
//     if (!client.email.trim()) {
//       alert("Please enter client email before sending.");
//       return;
//     }

//     alert(
//       `Quotation ${quotationNo} is ready to be sent to ${client.email}.`
//     );
//   }

//   function printQuotation() {
//     setShowPreview(true);

//     setTimeout(() => {
//       window.print();
//     }, 300);
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-gray-900">
//       {/* Header */}
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1450px] px-5 py-5">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               <div className="mb-1 flex flex-wrap items-center gap-2 text-sm text-gray-500">
//                 <span className="font-semibold text-[#9a5b18]">
//                   Akrish
//                 </span>
//                 <span>/</span>
//                 <span>Interior</span>
//                 <span>/</span>
//                 <span>Quotations</span>
//                 <span>/</span>
//                 <span>New</span>
//               </div>

//               <h1 className="text-2xl font-bold">
//                 Create New Quotation
//               </h1>

//               <p className="mt-1 text-sm text-gray-500">
//                 Prepare a detailed quotation for an interior
//                 project.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               <button
//                 onClick={() =>
//                   window.history.back()
//                 }
//                 className="rounded-lg border border-[#d9d7ce] bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 ← Back
//               </button>

//               <button
//                 onClick={printQuotation}
//                 className="rounded-lg border border-[#d9d7ce] bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 🖨 Print
//               </button>

//               <button
//                 onClick={saveQuotation}
//                 className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#12594b]"
//               >
//                 Save Quotation
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1450px] space-y-5 px-5 py-6">
//         {/* Quotation Information */}
//         <section className="rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="border-b border-[#e4e2da] px-5 py-4">
//             <h2 className="font-semibold">
//               Quotation Information
//             </h2>

//             <p className="mt-1 text-xs text-gray-500">
//               Basic quotation and project details.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2 lg:grid-cols-4">
//             <Field
//               label="Quotation Number"
//               value={quotationNo}
//               disabled
//             />

//             <Field
//               label="Quotation Date"
//               type="date"
//               value={quotationDate}
//               onChange={setQuotationDate}
//             />

//             <Field
//               label="Valid Until"
//               type="date"
//               value={validUntil}
//               onChange={setValidUntil}
//             />

//             <SelectField
//               label="Project Type"
//               value={projectType}
//               onChange={setProjectType}
//               options={[
//                 "Residential",
//                 "Commercial",
//                 "Office",
//                 "Villa",
//                 "Apartment",
//               ]}
//             />
//           </div>
//         </section>

//         {/* Client & Project */}
//         <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
//           <div className="rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//             <div className="border-b border-[#e4e2da] px-5 py-4">
//               <h2 className="font-semibold">
//                 Client Details
//               </h2>

//               <p className="mt-1 text-xs text-gray-500">
//                 Customer information for the quotation.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2">
//               <Field
//                 label="Client Name *"
//                 value={client.name}
//                 placeholder="Enter client name"
//                 onChange={(value) =>
//                   setClient({
//                     ...client,
//                     name: value,
//                   })
//                 }
//               />

//               <Field
//                 label="Phone Number"
//                 value={client.phone}
//                 placeholder="Enter phone number"
//                 onChange={(value) =>
//                   setClient({
//                     ...client,
//                     phone: value,
//                   })
//                 }
//               />

//               <Field
//                 label="Email"
//                 value={client.email}
//                 type="email"
//                 placeholder="client@example.com"
//                 onChange={(value) =>
//                   setClient({
//                     ...client,
//                     email: value,
//                   })
//                 }
//               />

//               <div className="md:col-span-2">
//                 <label className="block">
//                   <span className="mb-1.5 block text-sm font-medium text-gray-700">
//                     Address
//                   </span>

//                   <textarea
//                     value={client.address}
//                     onChange={(event) =>
//                       setClient({
//                         ...client,
//                         address:
//                           event.target.value,
//                       })
//                     }
//                     rows={3}
//                     placeholder="Client address"
//                     className="w-full resize-none rounded-lg border border-[#dddcd5] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                   />
//                 </label>
//               </div>
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//             <div className="border-b border-[#e4e2da] px-5 py-4">
//               <h2 className="font-semibold">
//                 Project Details
//               </h2>

//               <p className="mt-1 text-xs text-gray-500">
//                 Information about the interior project.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2">
//               <Field
//                 label="Project Name *"
//                 value={projectName}
//                 placeholder="e.g. Luxury 3 BHK Interior"
//                 onChange={setProjectName}
//               />

//               <Field
//                 label="Project Location"
//                 value={location}
//                 placeholder="City / Area"
//                 onChange={setLocation}
//               />

//               <SelectField
//                 label="Designer"
//                 value={designer}
//                 onChange={setDesigner}
//                 options={[
//                   "Priya Sharma",
//                   "Anjali Rao",
//                   "Sneha Rao",
//                   "Vamsi Krishna",
//                 ]}
//               />

//               <SelectField
//                 label="Payment Terms"
//                 value={paymentTerms}
//                 onChange={setPaymentTerms}
//                 options={[
//                   "40% Advance, 40% During Work, 20% On Completion",
//                   "50% Advance, 50% On Completion",
//                   "30% Advance, 40% During Work, 30% On Completion",
//                   "100% Advance",
//                 ]}
//               />

//               <div className="md:col-span-2">
//                 <div className="rounded-lg bg-[#f7f7f4] p-4">
//                   <div className="flex items-center justify-between">
//                     <span className="text-xs text-gray-500">
//                       Quotation Status
//                     </span>

//                     <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
//                       Draft
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Items */}
//         <section className="rounded-xl border border-[#e4e2da] bg-white shadow-sm">
//           <div className="flex flex-col gap-3 border-b border-[#e4e2da] px-5 py-4 md:flex-row md:items-center md:justify-between">
//             <div>
//               <h2 className="font-semibold">
//                 Quotation Items
//               </h2>

//               <p className="mt-1 text-xs text-gray-500">
//                 Add all design, material and execution
//                 requirements.
//               </p>
//             </div>

//             <button
//               onClick={addItem}
//               className="w-fit rounded-lg bg-[#176b5b] px-4 py-2 text-sm font-semibold text-white hover:bg-[#12594b]"
//             >
//               + Add Item
//             </button>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="min-w-[1050px] w-full">
//               <thead className="bg-[#fafaf8]">
//                 <tr className="border-b border-[#e4e2da] text-left text-xs uppercase tracking-wide text-gray-500">
//                   <th className="w-12 px-4 py-3">
//                     #
//                   </th>

//                   <th className="w-40 px-4 py-3">
//                     Category
//                   </th>

//                   <th className="min-w-[300px] px-4 py-3">
//                     Description
//                   </th>

//                   <th className="w-24 px-4 py-3">
//                     Qty
//                   </th>

//                   <th className="w-28 px-4 py-3">
//                     Unit
//                   </th>

//                   <th className="w-32 px-4 py-3">
//                     Rate
//                   </th>

//                   <th className="w-28 px-4 py-3">
//                     Discount %
//                   </th>

//                   <th className="w-36 px-4 py-3">
//                     Amount
//                   </th>

//                   <th className="w-16 px-4 py-3">
//                     Action
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {items.map((item, index) => {
//                   const original =
//                     item.quantity * item.rate;

//                   const amount =
//                     original *
//                     (1 - item.discount / 100);

//                   return (
//                     <tr
//                       key={item.id}
//                       className="border-b border-[#eeeeea] last:border-0"
//                     >
//                       <td className="px-4 py-4 text-sm text-gray-500">
//                         {index + 1}
//                       </td>

//                       <td className="px-4 py-4">
//                         <select
//                           value={item.category}
//                           onChange={(event) =>
//                             updateItem(
//                               item.id,
//                               "category",
//                               event.target.value
//                             )
//                           }
//                           className="w-full rounded-lg border border-[#dddcd5] bg-white px-2.5 py-2 text-sm outline-none focus:border-[#176b5b]"
//                         >
//                           {categories.map(
//                             (category) => (
//                               <option
//                                 key={category}
//                                 value={category}
//                               >
//                                 {category}
//                               </option>
//                             )
//                           )}
//                         </select>
//                       </td>

//                       <td className="px-4 py-4">
//                         <input
//                           value={item.description}
//                           onChange={(event) =>
//                             updateItem(
//                               item.id,
//                               "description",
//                               event.target.value
//                             )
//                           }
//                           placeholder="Enter work/material description"
//                           className="w-full rounded-lg border border-[#dddcd5] px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                         />
//                       </td>

//                       <td className="px-4 py-4">
//                         <input
//                           type="number"
//                           min="0"
//                           value={item.quantity}
//                           onChange={(event) =>
//                             updateItem(
//                               item.id,
//                               "quantity",
//                               Number(
//                                 event.target.value
//                               ) || 0
//                             )
//                           }
//                           className="w-full rounded-lg border border-[#dddcd5] px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                         />
//                       </td>

//                       <td className="px-4 py-4">
//                         <select
//                           value={item.unit}
//                           onChange={(event) =>
//                             updateItem(
//                               item.id,
//                               "unit",
//                               event.target.value
//                             )
//                           }
//                           className="w-full rounded-lg border border-[#dddcd5] bg-white px-2.5 py-2 text-sm outline-none focus:border-[#176b5b]"
//                         >
//                           {units.map((unit) => (
//                             <option
//                               key={unit}
//                               value={unit}
//                             >
//                               {unit}
//                             </option>
//                           ))}
//                         </select>
//                       </td>

//                       <td className="px-4 py-4">
//                         <input
//                           type="number"
//                           min="0"
//                           value={item.rate}
//                           onChange={(event) =>
//                             updateItem(
//                               item.id,
//                               "rate",
//                               Number(
//                                 event.target.value
//                               ) || 0
//                             )
//                           }
//                           className="w-full rounded-lg border border-[#dddcd5] px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                         />
//                       </td>

//                       <td className="px-4 py-4">
//                         <input
//                           type="number"
//                           min="0"
//                           max="100"
//                           value={item.discount}
//                           onChange={(event) =>
//                             updateItem(
//                               item.id,
//                               "discount",
//                               Math.min(
//                                 100,
//                                 Math.max(
//                                   0,
//                                   Number(
//                                     event.target
//                                       .value
//                                   ) || 0
//                                 )
//                               )
//                             )
//                           }
//                           className="w-full rounded-lg border border-[#dddcd5] px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
//                         />
//                       </td>

//                       <td className="px-4 py-4 text-right">
//                         <p className="text-sm font-bold">
//                           {formatCurrency(amount)}
//                         </p>

//                         {item.discount > 0 && (
//                           <p className="mt-1 text-xs text-gray-400 line-through">
//                             {formatCurrency(
//                               original
//                             )}
//                           </p>
//                         )}
//                       </td>

//                       <td className="px-4 py-4 text-center">
//                         <button
//                           onClick={() =>
//                             removeItem(item.id)
//                           }
//                           className="rounded-lg p-2 text-red-500 hover:bg-red-50"
//                           title="Remove item"
//                         >
//                           🗑
//                         </button>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>

//           <div className="flex justify-end border-t border-[#e4e2da] bg-[#fafaf8] p-5">
//             <div className="w-full max-w-md space-y-3">
//               <div className="flex justify-between text-sm">
//                 <span className="text-gray-500">
//                   Item Subtotal
//                 </span>

//                 <span className="font-medium">
//                   {formatCurrency(
//                     calculations.subtotal
//                   )}
//                 </span>
//               </div>

//               <div className="flex justify-between text-sm">
//                 <span className="text-gray-500">
//                   Item Discounts
//                 </span>

//                 <span className="font-medium text-red-600">
//                   -{" "}
//                   {formatCurrency(
//                     calculations.itemDiscount
//                   )}
//                 </span>
//               </div>

//               <div className="flex items-center justify-between gap-4">
//                 <span className="text-sm text-gray-500">
//                   Additional Discount
//                 </span>

//                 <div className="flex items-center gap-2">
//                   <span className="text-sm">
//                     ₹
//                   </span>

//                   <input
//                     type="number"
//                     min="0"
//                     value={additionalDiscount}
//                     onChange={(event) =>
//                       setAdditionalDiscount(
//                         Math.max(
//                           0,
//                           Number(
//                             event.target.value
//                           ) || 0
//                         )
//                       )
//                     }
//                     className="w-32 rounded-lg border border-[#dddcd5] bg-white px-3 py-2 text-right text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>

//               <div className="flex items-center justify-between gap-4">
//                 <span className="text-sm text-gray-500">
//                   GST / Tax
//                 </span>

//                 <div className="flex items-center gap-2">
//                   <input
//                     type="number"
//                     min="0"
//                     max="100"
//                     value={taxRate}
//                     onChange={(event) =>
//                       setTaxRate(
//                         Math.min(
//                           100,
//                           Math.max(
//                             0,
//                             Number(
//                               event.target.value
//                             ) || 0
//                           )
//                         )
//                       )
//                     }
//                     className="w-20 rounded-lg border border-[#dddcd5] bg-white px-3 py-2 text-right text-sm outline-none focus:border-[#176b5b]"
//                   />

//                   <span className="text-sm text-gray-500">
//                     %
//                   </span>

//                   <span className="w-32 text-right text-sm font-medium">
//                     {formatCurrency(
//                       calculations.tax
//                     )}
//                   </span>
//                 </div>
//               </div>

//               <div className="border-t border-[#dcdad2] pt-3">
//                 <div className="flex items-center justify-between">
//                   <span className="text-base font-bold">
//                     Grand Total
//                   </span>

//                   <span className="text-2xl font-bold text-[#176b5b]">
//                     {formatCurrency(
//                       calculations.total
//                     )}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Terms and Notes */}
//         <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <h2 className="font-semibold">
//               Notes
//             </h2>

//             <p className="mt-1 text-xs text-gray-500">
//               Additional information for the client.
//             </p>

//             <textarea
//               value={notes}
//               onChange={(event) =>
//                 setNotes(event.target.value)
//               }
//               rows={6}
//               className="mt-4 w-full resize-none rounded-lg border border-[#dddcd5] px-3 py-2.5 text-sm leading-6 outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//             />
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//             <h2 className="font-semibold">
//               Terms & Conditions
//             </h2>

//             <p className="mt-1 text-xs text-gray-500">
//               Terms that will appear on the quotation.
//             </p>

//             <textarea
//               value={terms}
//               onChange={(event) =>
//                 setTerms(event.target.value)
//               }
//               rows={6}
//               className="mt-4 w-full resize-none rounded-lg border border-[#dddcd5] px-3 py-2.5 text-sm leading-6 outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//             />
//           </div>
//         </section>

//         {/* Final Actions */}
//         <section className="flex flex-col gap-3 rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             <p className="text-sm font-semibold">
//               Quotation Total
//             </p>

//             <p className="mt-1 text-2xl font-bold text-[#176b5b]">
//               {formatCurrency(
//                 calculations.total
//               )}
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-2">
//             <button
//               onClick={() => setShowPreview(true)}
//               className="rounded-lg border border-[#d9d7ce] px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//             >
//               Preview
//             </button>

//             <button
//               onClick={saveQuotation}
//               className="rounded-lg border border-[#176b5b] px-5 py-2.5 text-sm font-semibold text-[#176b5b] hover:bg-[#176b5b]/5"
//             >
//               Save Draft
//             </button>

//             <button
//               onClick={sendQuotation}
//               className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#12594b]"
//             >
//               Save & Send
//             </button>
//           </div>
//         </section>
//       </main>

//       {/* Preview Modal */}
//       {showPreview && (
//         <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 p-4">
//           <div className="mx-auto my-5 max-w-5xl rounded-xl bg-white shadow-2xl">
//             <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#e4e2da] bg-white px-5 py-4">
//               <div>
//                 <h2 className="font-bold">
//                   Quotation Preview
//                 </h2>

//                 <p className="text-xs text-gray-500">
//                   {quotationNo}
//                 </p>
//               </div>

//               <div className="flex gap-2">
//                 <button
//                   onClick={() => window.print()}
//                   className="rounded-lg bg-[#176b5b] px-4 py-2 text-sm font-semibold text-white"
//                 >
//                   🖨 Print
//                 </button>

//                 <button
//                   onClick={() =>
//                     setShowPreview(false)
//                   }
//                   className="rounded-lg border border-gray-300 px-4 py-2 text-sm"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>

//             <QuotationPreview
//               quotationNo={quotationNo}
//               quotationDate={quotationDate}
//               validUntil={validUntil}
//               client={client}
//               projectName={projectName}
//               projectType={projectType}
//               location={location}
//               designer={designer}
//               paymentTerms={paymentTerms}
//               items={items}
//               calculations={calculations}
//               taxRate={taxRate}
//               notes={notes}
//               terms={terms}
//             />
//           </div>
//         </div>
//       )}

//       <style jsx global>{`
//         @media print {
//           body {
//             background: white !important;
//           }

//           body * {
//             visibility: hidden;
//           }

//           .quotation-print-area,
//           .quotation-print-area * {
//             visibility: visible;
//           }

//           .quotation-print-area {
//             position: absolute;
//             left: 0;
//             top: 0;
//             width: 100%;
//           }

//           @page {
//             size: A4;
//             margin: 12mm;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// function Field({
//   label,
//   value,
//   onChange,
//   type = "text",
//   placeholder,
//   disabled = false,
// }: {
//   label: string;
//   value: string;
//   onChange?: (value: string) => void;
//   type?: string;
//   placeholder?: string;
//   disabled?: boolean;
// }) {
//   return (
//     <label className="block">
//       <span className="mb-1.5 block text-sm font-medium text-gray-700">
//         {label}
//       </span>

//       <input
//         type={type}
//         value={value}
//         disabled={disabled}
//         placeholder={placeholder}
//         onChange={(event) =>
//           onChange?.(event.target.value)
//         }
//         className={`w-full rounded-lg border border-[#dddcd5] px-3 py-2.5 text-sm outline-none ${
//           disabled
//             ? "bg-[#f5f5f2] text-gray-500"
//             : "bg-white focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//         }`}
//       />
//     </label>
//   );
// }

// function SelectField({
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
//         className="w-full rounded-lg border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
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

// function QuotationPreview({
//   quotationNo,
//   quotationDate,
//   validUntil,
//   client,
//   projectName,
//   projectType,
//   location,
//   designer,
//   paymentTerms,
//   items,
//   calculations,
//   taxRate,
//   notes,
//   terms,
// }: {
//   quotationNo: string;
//   quotationDate: string;
//   validUntil: string;
//   client: ClientDetails;
//   projectName: string;
//   projectType: string;
//   location: string;
//   designer: string;
//   paymentTerms: string;
//   items: Item[];
//   calculations: {
//     subtotal: number;
//     itemDiscount: number;
//     taxableAmount: number;
//     tax: number;
//     total: number;
//   };
//   taxRate: number;
//   notes: string;
//   terms: string;
// }) {
//   return (
//     <div className="quotation-print-area p-8">
//       <div className="border-b-2 border-[#176b5b] pb-5">
//         <div className="flex items-start justify-between">
//           <div>
//             <div className="text-3xl font-bold text-[#9a5b18]">
//               AKRISH
//             </div>

//             <p className="mt-1 text-sm font-semibold">
//               Furniture & Interior
//             </p>

//             <p className="mt-1 text-xs text-gray-500">
//               Interior Design & Execution Services
//             </p>
//           </div>

//           <div className="text-right">
//             <h1 className="text-2xl font-bold">
//               QUOTATION
//             </h1>

//             <p className="mt-2 text-sm">
//               <strong>No:</strong> {quotationNo}
//             </p>

//             <p className="mt-1 text-sm">
//               <strong>Date:</strong>{" "}
//               {formatDate(quotationDate)}
//             </p>

//             <p className="mt-1 text-sm">
//               <strong>Valid Until:</strong>{" "}
//               {formatDate(validUntil)}
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-6 grid grid-cols-2 gap-8">
//         <div>
//           <p className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-500">
//             Bill To
//           </p>

//           <p className="font-bold">
//             {client.name || "Client Name"}
//           </p>

//           {client.phone && (
//             <p className="mt-1 text-sm">
//               {client.phone}
//             </p>
//           )}

//           {client.email && (
//             <p className="mt-1 text-sm">
//               {client.email}
//             </p>
//           )}

//           {client.address && (
//             <p className="mt-1 whitespace-pre-line text-sm">
//               {client.address}
//             </p>
//           )}
//         </div>

//         <div>
//           <p className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-500">
//             Project
//           </p>

//           <p className="font-bold">
//             {projectName || "Interior Project"}
//           </p>

//           <p className="mt-1 text-sm">
//             Type: {projectType}
//           </p>

//           {location && (
//             <p className="mt-1 text-sm">
//               Location: {location}
//             </p>
//           )}

//           <p className="mt-1 text-sm">
//             Designer: {designer}
//           </p>
//         </div>
//       </div>

//       <div className="mt-7 overflow-hidden rounded-lg border border-gray-300">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-100 text-left text-xs uppercase">
//               <th className="border-b border-gray-300 px-3 py-3">
//                 #
//               </th>

//               <th className="border-b border-gray-300 px-3 py-3">
//                 Description
//               </th>

//               <th className="border-b border-gray-300 px-3 py-3">
//                 Qty
//               </th>

//               <th className="border-b border-gray-300 px-3 py-3">
//                 Unit
//               </th>

//               <th className="border-b border-gray-300 px-3 py-3 text-right">
//                 Rate
//               </th>

//               <th className="border-b border-gray-300 px-3 py-3 text-right">
//                 Amount
//               </th>
//             </tr>
//           </thead>

//           <tbody>
//             {items.map((item, index) => {
//               const amount =
//                 item.quantity *
//                 item.rate *
//                 (1 - item.discount / 100);

//               return (
//                 <tr key={item.id}>
//                   <td className="border-b border-gray-200 px-3 py-3 text-sm">
//                     {index + 1}
//                   </td>

//                   <td className="border-b border-gray-200 px-3 py-3 text-sm">
//                     <p className="font-medium">
//                       {item.description}
//                     </p>

//                     <p className="mt-1 text-xs text-gray-500">
//                       {item.category}
//                     </p>
//                   </td>

//                   <td className="border-b border-gray-200 px-3 py-3 text-sm">
//                     {item.quantity}
//                   </td>

//                   <td className="border-b border-gray-200 px-3 py-3 text-sm">
//                     {item.unit}
//                   </td>

//                   <td className="border-b border-gray-200 px-3 py-3 text-right text-sm">
//                     {formatCurrency(item.rate)}
//                   </td>

//                   <td className="border-b border-gray-200 px-3 py-3 text-right text-sm font-semibold">
//                     {formatCurrency(amount)}
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>

//       <div className="mt-5 flex justify-end">
//         <div className="w-80 space-y-2 text-sm">
//           <div className="flex justify-between">
//             <span>Subtotal</span>
//             <span>
//               {formatCurrency(
//                 calculations.subtotal
//               )}
//             </span>
//           </div>

//           <div className="flex justify-between">
//             <span>Item Discount</span>
//             <span>
//               -{" "}
//               {formatCurrency(
//                 calculations.itemDiscount
//               )}
//             </span>
//           </div>

//           <div className="flex justify-between">
//             <span>Additional Discount</span>
//             <span>
//               -{" "}
//               {formatCurrency(
//                 calculations.subtotal -
//                   calculations.itemDiscount -
//                   calculations.taxableAmount
//               )}
//             </span>
//           </div>

//           <div className="flex justify-between">
//             <span>
//               GST ({taxRate}%)
//             </span>

//             <span>
//               {formatCurrency(
//                 calculations.tax
//               )}
//             </span>
//           </div>

//           <div className="mt-2 flex justify-between border-t-2 border-gray-800 pt-3 text-lg font-bold">
//             <span>Grand Total</span>

//             <span>
//               {formatCurrency(
//                 calculations.total
//               )}
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="mt-8 grid grid-cols-2 gap-8">
//         <div>
//           <h3 className="text-sm font-bold">
//             Notes
//           </h3>

//           <p className="mt-2 whitespace-pre-line text-xs leading-5 text-gray-600">
//             {notes}
//           </p>
//         </div>

//         <div>
//           <h3 className="text-sm font-bold">
//             Terms & Conditions
//           </h3>

//           <p className="mt-2 whitespace-pre-line text-xs leading-5 text-gray-600">
//             {terms}
//           </p>

//           <p className="mt-3 text-xs">
//             <strong>Payment Terms:</strong>{" "}
//             {paymentTerms}
//           </p>
//         </div>
//       </div>

//       <div className="mt-12 grid grid-cols-2 gap-16">
//         <div>
//           <div className="border-t border-gray-400 pt-2 text-center text-xs">
//             Client Signature
//           </div>
//         </div>

//         <div>
//           <div className="border-t border-gray-400 pt-2 text-center text-xs">
//             For Akrish Furniture & Interior
//           </div>
//         </div>
//       </div>

//       <div className="mt-8 border-t border-gray-200 pt-3 text-center text-[10px] text-gray-400">
//         This quotation is system generated and is subject
//         to the terms and conditions mentioned above.
//       </div>
//     </div>
//   );
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function formatDate(date: string) {
//   if (!date) return "-";

//   return new Date(date).toLocaleDateString(
//     "en-IN",
//     {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     }
//   );
// }

"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  createQuotation,
  type QuotationItem,
} from "@/modules/interior/services/quotationService";
import {
  getAllClients,
  type InteriorClient,
} from "@/modules/interior/services/clientService";

type Item = {
  id: number;
  category: string;
  description: string;
  quantity: number;
  unit: string;
  rate: number;
  discount: number;
};

type ClientDetails = {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
};

const categories = [
  "Design",
  "Civil Work",
  "Furniture",
  "Electrical",
  "Lighting",
  "False Ceiling",
  "Painting",
  "Flooring",
  "Kitchen",
  "Wardrobe",
  "Other",
];

const units = ["Nos", "Sq.Ft", "Sq.M", "Rft", "Set", "Job", "Lot"];

const PAYMENT_TERMS = [
  "40% Advance, 40% During Work, 20% On Completion",
  "50% Advance, 50% On Completion",
  "30% Advance, 40% During Work, 30% On Completion",
  "100% Advance",
];

function emptyItem(id: number): Item {
  return {
    id,
    category: "Other",
    description: "",
    quantity: 1,
    unit: "Nos",
    rate: 0,
    discount: 0,
  };
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatDate(date: string) {
  if (!date) return "-";
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function NewInteriorQuotationPage() {
  const router = useRouter();

  const [quotationNo] = useState(
    `QT-${new Date().getFullYear()}-${String(
      Math.floor(Math.random() * 900) + 100
    )}`
  );

  const [quotationDate, setQuotationDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [validUntil, setValidUntil] = useState(
    new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0]
  );

  const [clients, setClients] = useState<InteriorClient[]>([]);
  const [clientsLoading, setClientsLoading] = useState(true);
  const [selectedClientId, setSelectedClientId] = useState("");

  const [client, setClient] = useState<ClientDetails>({
    id: "",
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const [projectName, setProjectName] = useState("");
  const [projectType, setProjectType] = useState("Residential");
  const [location, setLocation] = useState("");
  const [designer, setDesigner] = useState("");
  const [paymentTerms, setPaymentTerms] = useState(PAYMENT_TERMS[0]);

  const [items, setItems] = useState<Item[]>([emptyItem(1)]);
  const [nextItemId, setNextItemId] = useState(2);

  const [taxRate, setTaxRate] = useState(18);
  const [additionalDiscount, setAdditionalDiscount] = useState(0);

  const [notes, setNotes] = useState("");
  const [terms, setTerms] = useState(
    "Prices are valid for the quotation validity period. Material selection and final design will be confirmed before execution."
  );

  const [showPreview, setShowPreview] = useState(false);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setClientsLoading(true);
      try {
        const data = await getAllClients();
        if (!cancelled) setClients(data);
      } catch (err) {
        console.error("Failed to load clients:", err);
      } finally {
        if (!cancelled) setClientsLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3500);
    return () => clearTimeout(t);
  }, [toast]);

  function handleClientSelect(id: string) {
    setSelectedClientId(id);
    if (!id) {
      setClient({ id: "", name: "", phone: "", email: "", address: "" });
      return;
    }
    const c = clients.find((x) => x.id === id);
    if (!c) return;
    setClient({
      id: c.id,
      name: c.name || c.company || "",
      phone: c.phone || "",
      email: c.email || "",
      address: c.location || "",
    });
    if (!projectName.trim() && (c.project || c.projectName)) {
      setProjectName(c.project || c.projectName || "");
    }
    if (!location.trim() && c.location) {
      setLocation(c.location);
    }
    if (c.projectType) {
      setProjectType(c.projectType);
    }
  }

  const calculations = useMemo(() => {
    const subtotal = items.reduce((sum, item) => {
      const amount =
        item.quantity * item.rate * (1 - item.discount / 100);
      return sum + amount;
    }, 0);

    const itemDiscount = items.reduce((sum, item) => {
      const original = item.quantity * item.rate;
      const discounted = original * (1 - item.discount / 100);
      return sum + (original - discounted);
    }, 0);

    const taxableAmount = Math.max(0, subtotal - additionalDiscount);
    const tax = taxableAmount * (taxRate / 100);
    const total = taxableAmount + tax;

    return { subtotal, itemDiscount, taxableAmount, tax, total };
  }, [items, taxRate, additionalDiscount]);

  function updateItem(id: number, field: keyof Item, value: string | number) {
    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  }

  function addItem() {
    setItems((current) => [...current, emptyItem(nextItemId)]);
    setNextItemId((n) => n + 1);
  }

  function removeItem(id: number) {
    if (items.length === 1) {
      setToast({
        type: "error",
        message: "At least one quotation item is required.",
      });
      return;
    }
    setItems((current) => current.filter((item) => item.id !== id));
  }

  function validate(): string | null {
    if (!client.name.trim()) return "Please enter or select a client name.";
    if (!projectName.trim()) return "Please enter project name.";
    if (items.some((item) => !item.description.trim())) {
      return "Please enter description for all items.";
    }
    return null;
  }

  async function persist(status: "Draft" | "Sent") {
    const error = validate();
    if (error) {
      setToast({ type: "error", message: error });
      return;
    }

    setSaving(true);
    try {
      const payloadItems: QuotationItem[] = items.map((item) => ({
        id: item.id,
        category: item.category,
        description: item.description,
        quantity: item.quantity,
        unit: item.unit,
        rate: item.rate,
        discount: item.discount,
      }));

      await createQuotation({
        quotationNo,
        clientId: client.id || selectedClientId || undefined,
        client: client.name,
        clientName: client.name,
        phone: client.phone,
        email: client.email,
        address: client.address,
        projectName,
        projectType,
        location,
        designer: designer || undefined,
        quotationDate,
        validUntil,
        subtotal: calculations.subtotal,
        itemDiscount: calculations.itemDiscount,
        additionalDiscount,
        tax: calculations.tax,
        taxRate,
        amount: calculations.subtotal,
        total: calculations.total,
        status,
        paymentTerms,
        notes,
        terms,
        items: payloadItems,
      });

      setToast({
        type: "success",
        message:
          status === "Sent"
            ? `Quotation ${quotationNo} saved and marked as Sent.`
            : `Quotation ${quotationNo} saved as Draft.`,
      });

      setTimeout(() => {
        router.push("/interior/quotations");
      }, 900);
    } catch (err) {
      console.error(err);
      setToast({
        type: "error",
        message: "Failed to save quotation. Please try again.",
      });
    } finally {
      setSaving(false);
    }
  }

  function saveQuotation() {
    void persist("Draft");
  }

  function sendQuotation() {
    if (!client.email.trim()) {
      setToast({
        type: "error",
        message: "Please enter client email before marking as Sent.",
      });
      return;
    }
    void persist("Sent");
  }

  function printQuotation() {
    setShowPreview(true);
    setTimeout(() => window.print(), 300);
  }

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-gray-900">
      {toast && (
        <div className="fixed right-4 top-4 z-[100] max-w-sm rounded-xl border border-[#e4e2da] bg-white px-4 py-3 shadow-lg">
          <p
            className={`text-sm font-medium ${
              toast.type === "success" ? "text-[#176b5b]" : "text-red-600"
            }`}
          >
            {toast.message}
          </p>
        </div>
      )}

      <div className="border-b border-[#e4e2da] bg-white">
        <div className="mx-auto max-w-[1450px] px-5 py-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-1 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                <span className="font-semibold text-[#9a5b18]">Akrish</span>
                <span>/</span>
                <span>Interior</span>
                <span>/</span>
                <span>Quotations</span>
                <span>/</span>
                <span>New</span>
              </div>
              <h1 className="text-2xl font-bold">Create New Quotation</h1>
              <p className="mt-1 text-sm text-gray-500">
                Prepare a detailed quotation for an interior project.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => router.push("/interior/quotations")}
                className="rounded-lg border border-[#d9d7ce] bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={printQuotation}
                className="rounded-lg border border-[#d9d7ce] bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Print
              </button>
              <button
                type="button"
                onClick={saveQuotation}
                disabled={saving}
                className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#12594b] disabled:opacity-60"
              >
                {saving ? "Saving…" : "Save Quotation"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[1450px] space-y-5 px-5 py-6">
        <section className="rounded-xl border border-[#e4e2da] bg-white shadow-sm">
          <div className="border-b border-[#e4e2da] px-5 py-4">
            <h2 className="font-semibold">Quotation Information</h2>
            <p className="mt-1 text-xs text-gray-500">
              Basic quotation and project details.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2 lg:grid-cols-4">
            <Field label="Quotation Number" value={quotationNo} disabled />
            <Field
              label="Quotation Date"
              type="date"
              value={quotationDate}
              onChange={setQuotationDate}
            />
            <Field
              label="Valid Until"
              type="date"
              value={validUntil}
              onChange={setValidUntil}
            />
            <SelectField
              label="Project Type"
              value={projectType}
              onChange={setProjectType}
              options={[
                "Residential",
                "Commercial",
                "Office",
                "Villa",
                "Apartment",
              ]}
            />
          </div>
        </section>

        <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="rounded-xl border border-[#e4e2da] bg-white shadow-sm">
            <div className="border-b border-[#e4e2da] px-5 py-4">
              <h2 className="font-semibold">Client Details</h2>
              <p className="mt-1 text-xs text-gray-500">
                Select an existing client or enter details manually.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2">
              <label className="block md:col-span-2">
                <span className="mb-1.5 block text-sm font-medium text-gray-700">
                  Select client from Clients
                </span>
                <select
                  value={selectedClientId}
                  onChange={(e) => handleClientSelect(e.target.value)}
                  className="w-full rounded-lg border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
                >
                  <option value="">
                    {clientsLoading
                      ? "Loading clients…"
                      : "— Select client (optional) —"}
                  </option>
                  {clients.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name || c.company || "Unnamed"}
                      {c.phone ? ` · ${c.phone}` : ""}
                    </option>
                  ))}
                </select>
              </label>

              <Field
                label="Client Name *"
                value={client.name}
                placeholder="Enter client name"
                onChange={(value) => setClient({ ...client, name: value })}
              />
              <Field
                label="Phone Number"
                value={client.phone}
                placeholder="Enter phone number"
                onChange={(value) => setClient({ ...client, phone: value })}
              />
              <Field
                label="Email"
                value={client.email}
                type="email"
                placeholder="client@example.com"
                onChange={(value) => setClient({ ...client, email: value })}
              />
              <div className="md:col-span-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-gray-700">
                    Address
                  </span>
                  <textarea
                    value={client.address}
                    onChange={(e) =>
                      setClient({ ...client, address: e.target.value })
                    }
                    rows={3}
                    placeholder="Client address"
                    className="w-full resize-none rounded-lg border border-[#dddcd5] px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-[#e4e2da] bg-white shadow-sm">
            <div className="border-b border-[#e4e2da] px-5 py-4">
              <h2 className="font-semibold">Project Details</h2>
              <p className="mt-1 text-xs text-gray-500">
                Information about the interior project.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2">
              <Field
                label="Project Name *"
                value={projectName}
                placeholder="e.g. Luxury 3 BHK Interior"
                onChange={setProjectName}
              />
              <Field
                label="Project Location"
                value={location}
                placeholder="City / Area"
                onChange={setLocation}
              />
              <Field
                label="Designer"
                value={designer}
                placeholder="Enter designer name"
                onChange={setDesigner}
              />
              <SelectField
                label="Payment Terms"
                value={paymentTerms}
                onChange={setPaymentTerms}
                options={PAYMENT_TERMS}
              />
              <div className="md:col-span-2">
                <div className="rounded-lg bg-[#f7f7f4] p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      Quotation Status
                    </span>
                    <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      Draft
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-[#e4e2da] bg-white shadow-sm">
          <div className="flex flex-col gap-3 border-b border-[#e4e2da] px-5 py-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-semibold">Quotation Items</h2>
              <p className="mt-1 text-xs text-gray-500">
                Add design, material and execution line items.
              </p>
            </div>
            <button
              type="button"
              onClick={addItem}
              className="w-fit rounded-lg bg-[#176b5b] px-4 py-2 text-sm font-semibold text-white hover:bg-[#12594b]"
            >
              + Add Item
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-[1050px] w-full">
              <thead className="bg-[#fafaf8]">
                <tr className="border-b border-[#e4e2da] text-left text-xs uppercase tracking-wide text-gray-500">
                  <th className="w-12 px-4 py-3">#</th>
                  <th className="w-40 px-4 py-3">Category</th>
                  <th className="min-w-[300px] px-4 py-3">Description</th>
                  <th className="w-24 px-4 py-3">Qty</th>
                  <th className="w-28 px-4 py-3">Unit</th>
                  <th className="w-32 px-4 py-3">Rate</th>
                  <th className="w-28 px-4 py-3">Discount %</th>
                  <th className="w-36 px-4 py-3">Amount</th>
                  <th className="w-16 px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => {
                  const original = item.quantity * item.rate;
                  const amount = original * (1 - item.discount / 100);
                  return (
                    <tr
                      key={item.id}
                      className="border-b border-[#eeeeea] last:border-0"
                    >
                      <td className="px-4 py-4 text-sm text-gray-500">
                        {index + 1}
                      </td>
                      <td className="px-4 py-4">
                        <select
                          value={item.category}
                          onChange={(e) =>
                            updateItem(item.id, "category", e.target.value)
                          }
                          className="w-full rounded-lg border border-[#dddcd5] bg-white px-2.5 py-2 text-sm outline-none focus:border-[#176b5b]"
                        >
                          {categories.map((category) => (
                            <option key={category} value={category}>
                              {category}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-4">
                        <input
                          value={item.description}
                          onChange={(e) =>
                            updateItem(item.id, "description", e.target.value)
                          }
                          placeholder="Enter work/material description"
                          className="w-full rounded-lg border border-[#dddcd5] px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
                        />
                      </td>
                      <td className="px-4 py-4">
                        <input
                          type="number"
                          min={0}
                          value={item.quantity}
                          onChange={(e) =>
                            updateItem(
                              item.id,
                              "quantity",
                              Number(e.target.value) || 0
                            )
                          }
                          className="w-full rounded-lg border border-[#dddcd5] px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
                        />
                      </td>
                      <td className="px-4 py-4">
                        <select
                          value={item.unit}
                          onChange={(e) =>
                            updateItem(item.id, "unit", e.target.value)
                          }
                          className="w-full rounded-lg border border-[#dddcd5] bg-white px-2.5 py-2 text-sm outline-none focus:border-[#176b5b]"
                        >
                          {units.map((unit) => (
                            <option key={unit} value={unit}>
                              {unit}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-4">
                        <input
                          type="number"
                          min={0}
                          value={item.rate}
                          onChange={(e) =>
                            updateItem(
                              item.id,
                              "rate",
                              Number(e.target.value) || 0
                            )
                          }
                          className="w-full rounded-lg border border-[#dddcd5] px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
                        />
                      </td>
                      <td className="px-4 py-4">
                        <input
                          type="number"
                          min={0}
                          max={100}
                          value={item.discount}
                          onChange={(e) =>
                            updateItem(
                              item.id,
                              "discount",
                              Math.min(
                                100,
                                Math.max(0, Number(e.target.value) || 0)
                              )
                            )
                          }
                          className="w-full rounded-lg border border-[#dddcd5] px-3 py-2 text-sm outline-none focus:border-[#176b5b]"
                        />
                      </td>
                      <td className="px-4 py-4 text-right">
                        <p className="text-sm font-bold">
                          {formatCurrency(amount)}
                        </p>
                        {item.discount > 0 && (
                          <p className="mt-1 text-xs text-gray-400 line-through">
                            {formatCurrency(original)}
                          </p>
                        )}
                      </td>
                      <td className="px-4 py-4 text-center">
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="rounded-lg px-2 py-1 text-sm text-red-500 hover:bg-red-50"
                          title="Remove item"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end border-t border-[#e4e2da] bg-[#fafaf8] p-5">
            <div className="w-full max-w-md space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Item Subtotal</span>
                <span className="font-medium">
                  {formatCurrency(calculations.subtotal)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Item Discounts</span>
                <span className="font-medium text-red-600">
                  - {formatCurrency(calculations.itemDiscount)}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-gray-500">
                  Additional Discount
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm">₹</span>
                  <input
                    type="number"
                    min={0}
                    value={additionalDiscount}
                    onChange={(e) =>
                      setAdditionalDiscount(
                        Math.max(0, Number(e.target.value) || 0)
                      )
                    }
                    className="w-32 rounded-lg border border-[#dddcd5] bg-white px-3 py-2 text-right text-sm outline-none focus:border-[#176b5b]"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-gray-500">GST / Tax</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={0}
                    max={100}
                    value={taxRate}
                    onChange={(e) =>
                      setTaxRate(
                        Math.min(100, Math.max(0, Number(e.target.value) || 0))
                      )
                    }
                    className="w-20 rounded-lg border border-[#dddcd5] bg-white px-3 py-2 text-right text-sm outline-none focus:border-[#176b5b]"
                  />
                  <span className="text-sm text-gray-500">%</span>
                  <span className="w-32 text-right text-sm font-medium">
                    {formatCurrency(calculations.tax)}
                  </span>
                </div>
              </div>
              <div className="border-t border-[#dcdad2] pt-3">
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold">Grand Total</span>
                  <span className="text-2xl font-bold text-[#176b5b]">
                    {formatCurrency(calculations.total)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
            <h2 className="font-semibold">Notes</h2>
            <p className="mt-1 text-xs text-gray-500">
              Additional information for the client.
            </p>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={6}
              placeholder="Optional notes…"
              className="mt-4 w-full resize-none rounded-lg border border-[#dddcd5] px-3 py-2.5 text-sm leading-6 outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
            />
          </div>
          <div className="rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm">
            <h2 className="font-semibold">Terms & Conditions</h2>
            <p className="mt-1 text-xs text-gray-500">
              Terms that will appear on the quotation.
            </p>
            <textarea
              value={terms}
              onChange={(e) => setTerms(e.target.value)}
              rows={6}
              className="mt-4 w-full resize-none rounded-lg border border-[#dddcd5] px-3 py-2.5 text-sm leading-6 outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
            />
          </div>
        </section>

        <section className="flex flex-col gap-3 rounded-xl border border-[#e4e2da] bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold">Quotation Total</p>
            <p className="mt-1 text-2xl font-bold text-[#176b5b]">
              {formatCurrency(calculations.total)}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setShowPreview(true)}
              className="rounded-lg border border-[#d9d7ce] px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Preview
            </button>
            <button
              type="button"
              onClick={saveQuotation}
              disabled={saving}
              className="rounded-lg border border-[#176b5b] px-5 py-2.5 text-sm font-semibold text-[#176b5b] hover:bg-[#176b5b]/5 disabled:opacity-60"
            >
              {saving ? "Saving…" : "Save Draft"}
            </button>
            <button
              type="button"
              onClick={sendQuotation}
              disabled={saving}
              className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#12594b] disabled:opacity-60"
            >
              {saving ? "Saving…" : "Save & Send"}
            </button>
          </div>
        </section>
      </main>

      {showPreview && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4">
          <div className="my-5 w-full max-w-5xl rounded-xl bg-white shadow-2xl">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#e4e2da] bg-white px-5 py-4">
              <div>
                <h2 className="font-bold">Quotation Preview</h2>
                <p className="text-xs text-gray-500">{quotationNo}</p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="rounded-lg bg-[#176b5b] px-4 py-2 text-sm font-semibold text-white"
                >
                  Print
                </button>
                <button
                  type="button"
                  onClick={() => setShowPreview(false)}
                  className="rounded-lg border border-gray-300 px-4 py-2 text-sm"
                >
                  Close
                </button>
              </div>
            </div>
            <QuotationPreview
              quotationNo={quotationNo}
              quotationDate={quotationDate}
              validUntil={validUntil}
              client={client}
              projectName={projectName}
              projectType={projectType}
              location={location}
              designer={designer}
              paymentTerms={paymentTerms}
              items={items}
              calculations={calculations}
              taxRate={taxRate}
              additionalDiscount={additionalDiscount}
              notes={notes}
              terms={terms}
            />
          </div>
        </div>
      )}

      <style jsx global>{`
        @media print {
          body {
            background: white !important;
          }
          body * {
            visibility: hidden;
          }
          .quotation-print-area,
          .quotation-print-area * {
            visibility: visible;
          }
          .quotation-print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          @page {
            size: A4;
            margin: 12mm;
          }
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  disabled = false,
}: {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-gray-700">
        {label}
      </span>
      <input
        type={type}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className={`w-full rounded-lg border border-[#dddcd5] px-3 py-2.5 text-sm outline-none ${
          disabled
            ? "bg-[#f5f5f2] text-gray-500"
            : "bg-white focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
        }`}
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-gray-700">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-[#dddcd5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function QuotationPreview({
  quotationNo,
  quotationDate,
  validUntil,
  client,
  projectName,
  projectType,
  location,
  designer,
  paymentTerms,
  items,
  calculations,
  taxRate,
  additionalDiscount,
  notes,
  terms,
}: {
  quotationNo: string;
  quotationDate: string;
  validUntil: string;
  client: ClientDetails;
  projectName: string;
  projectType: string;
  location: string;
  designer: string;
  paymentTerms: string;
  items: Item[];
  calculations: {
    subtotal: number;
    itemDiscount: number;
    taxableAmount: number;
    tax: number;
    total: number;
  };
  taxRate: number;
  additionalDiscount: number;
  notes: string;
  terms: string;
}) {
  return (
    <div className="quotation-print-area p-8">
      <div className="border-b-2 border-[#176b5b] pb-5">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-3xl font-bold text-[#9a5b18]">AKRISH</div>
            <p className="mt-1 text-sm font-semibold">Furniture & Interior</p>
            <p className="mt-1 text-xs text-gray-500">
              Interior Design & Execution Services
            </p>
          </div>
          <div className="text-right">
            <h1 className="text-2xl font-bold">QUOTATION</h1>
            <p className="mt-2 text-sm">
              <strong>No:</strong> {quotationNo}
            </p>
            <p className="mt-1 text-sm">
              <strong>Date:</strong> {formatDate(quotationDate)}
            </p>
            <p className="mt-1 text-sm">
              <strong>Valid Until:</strong> {formatDate(validUntil)}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-8">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-500">
            Bill To
          </p>
          <p className="font-bold">{client.name || "Client Name"}</p>
          {client.phone && <p className="mt-1 text-sm">{client.phone}</p>}
          {client.email && <p className="mt-1 text-sm">{client.email}</p>}
          {client.address && (
            <p className="mt-1 whitespace-pre-line text-sm">{client.address}</p>
          )}
        </div>
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-500">
            Project
          </p>
          <p className="font-bold">{projectName || "Interior Project"}</p>
          <p className="mt-1 text-sm">Type: {projectType}</p>
          {location && <p className="mt-1 text-sm">Location: {location}</p>}
          {designer && <p className="mt-1 text-sm">Designer: {designer}</p>}
        </div>
      </div>

      <div className="mt-7 overflow-hidden rounded-lg border border-gray-300">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-xs uppercase">
              <th className="border-b border-gray-300 px-3 py-3">#</th>
              <th className="border-b border-gray-300 px-3 py-3">Description</th>
              <th className="border-b border-gray-300 px-3 py-3">Qty</th>
              <th className="border-b border-gray-300 px-3 py-3">Unit</th>
              <th className="border-b border-gray-300 px-3 py-3 text-right">
                Rate
              </th>
              <th className="border-b border-gray-300 px-3 py-3 text-right">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              const amount =
                item.quantity * item.rate * (1 - item.discount / 100);
              return (
                <tr key={item.id}>
                  <td className="border-b border-gray-200 px-3 py-3 text-sm">
                    {index + 1}
                  </td>
                  <td className="border-b border-gray-200 px-3 py-3 text-sm">
                    <p className="font-medium">{item.description || "—"}</p>
                    <p className="mt-1 text-xs text-gray-500">{item.category}</p>
                  </td>
                  <td className="border-b border-gray-200 px-3 py-3 text-sm">
                    {item.quantity}
                  </td>
                  <td className="border-b border-gray-200 px-3 py-3 text-sm">
                    {item.unit}
                  </td>
                  <td className="border-b border-gray-200 px-3 py-3 text-right text-sm">
                    {formatCurrency(item.rate)}
                  </td>
                  <td className="border-b border-gray-200 px-3 py-3 text-right text-sm font-semibold">
                    {formatCurrency(amount)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-5 flex justify-end">
        <div className="w-80 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{formatCurrency(calculations.subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>Item Discount</span>
            <span>- {formatCurrency(calculations.itemDiscount)}</span>
          </div>
          <div className="flex justify-between">
            <span>Additional Discount</span>
            <span>- {formatCurrency(additionalDiscount)}</span>
          </div>
          <div className="flex justify-between">
            <span>GST ({taxRate}%)</span>
            <span>{formatCurrency(calculations.tax)}</span>
          </div>
          <div className="mt-2 flex justify-between border-t-2 border-gray-800 pt-3 text-lg font-bold">
            <span>Grand Total</span>
            <span>{formatCurrency(calculations.total)}</span>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-sm font-bold">Notes</h3>
          <p className="mt-2 whitespace-pre-line text-xs leading-5 text-gray-600">
            {notes || "—"}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold">Terms & Conditions</h3>
          <p className="mt-2 whitespace-pre-line text-xs leading-5 text-gray-600">
            {terms}
          </p>
          <p className="mt-3 text-xs">
            <strong>Payment Terms:</strong> {paymentTerms}
          </p>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-16">
        <div>
          <div className="border-t border-gray-400 pt-2 text-center text-xs">
            Client Signature
          </div>
        </div>
        <div>
          <div className="border-t border-gray-400 pt-2 text-center text-xs">
            For Akrish Furniture & Interior
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-200 pt-3 text-center text-[10px] text-gray-400">
        This quotation is system generated and is subject to the terms and
        conditions mentioned above.
      </div>
    </div>
  );
}
