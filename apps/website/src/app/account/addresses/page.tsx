// "use client";

// import { FormEvent, useEffect, useState } from "react";
// import {
//   Check,
//   MapPin,
//   Pencil,
//   Plus,
//   Trash2,
//   X,
// } from "lucide-react";

// interface Address {
//   id: string;
//   name: string;
//   phone: string;
//   addressLine1: string;
//   addressLine2: string;
//   city: string;
//   state: string;
//   pincode: string;
//   type: "Home" | "Work" | "Other";
//   isDefault: boolean;
// }

// const STORAGE_KEY = "akrish_addresses";

// const emptyForm = {
//   name: "",
//   phone: "",
//   addressLine1: "",
//   addressLine2: "",
//   city: "",
//   state: "",
//   pincode: "",
//   type: "Home" as Address["type"],
//   isDefault: false,
// };

// export default function AddressesPage() {
//   const [addresses, setAddresses] = useState<Address[]>([]);
//   const [showForm, setShowForm] = useState(false);
//   const [editingId, setEditingId] = useState<string | null>(null);
//   const [form, setForm] = useState(emptyForm);
//   const [error, setError] = useState("");
//   const [saved, setSaved] = useState(false);

//   // Load addresses from localStorage
//   useEffect(() => {
//     try {
//       const stored = localStorage.getItem(STORAGE_KEY);
//       if (stored) {
//         setAddresses(JSON.parse(stored));
//       }
//     } catch {
//       setAddresses([]);
//     }
//   }, []);

//   const saveToStorage = (list: Address[]) => {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
//     setAddresses(list);
//   };

//   const updateField = (field: keyof typeof form, value: string | boolean) => {
//     setForm((prev) => ({ ...prev, [field]: value }));
//     setError("");
//     setSaved(false);
//   };

//   const openAddForm = () => {
//     setEditingId(null);
//     setForm(emptyForm);
//     setShowForm(true);
//     setError("");
//     setSaved(false);
//   };

//   const openEditForm = (address: Address) => {
//     setEditingId(address.id);
//     setForm({
//       name: address.name,
//       phone: address.phone,
//       addressLine1: address.addressLine1,
//       addressLine2: address.addressLine2,
//       city: address.city,
//       state: address.state,
//       pincode: address.pincode,
//       type: address.type,
//       isDefault: address.isDefault,
//     });
//     setShowForm(true);
//     setError("");
//     setSaved(false);
//   };

//   const closeForm = () => {
//     setShowForm(false);
//     setEditingId(null);
//     setForm(emptyForm);
//     setError("");
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     setError("");

//     if (!form.name.trim()) {
//       setError("Please enter full name.");
//       return;
//     }
//     if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10) {
//       setError("Please enter a valid 10-digit mobile number.");
//       return;
//     }
//     if (!form.addressLine1.trim()) {
//       setError("Please enter address.");
//       return;
//     }
//     if (!form.city.trim()) {
//       setError("Please enter city.");
//       return;
//     }
//     if (!form.state.trim()) {
//       setError("Please enter state.");
//       return;
//     }
//     if (!form.pincode.trim() || form.pincode.length !== 6) {
//       setError("Please enter a valid 6-digit PIN code.");
//       return;
//     }

//     let updatedList = [...addresses];

//     if (editingId) {
//       // Update existing
//       updatedList = updatedList.map((addr) =>
//         addr.id === editingId
//           ? {
//               ...addr,
//               ...form,
//               name: form.name.trim(),
//               phone: form.phone.trim(),
//               addressLine1: form.addressLine1.trim(),
//               addressLine2: form.addressLine2.trim(),
//               city: form.city.trim(),
//               state: form.state.trim(),
//               pincode: form.pincode.trim(),
//             }
//           : form.isDefault
//             ? { ...addr, isDefault: false }
//             : addr
//       );
//     } else {
//       // Add new
//       const newAddress: Address = {
//         id: `addr_${Date.now()}`,
//         name: form.name.trim(),
//         phone: form.phone.trim(),
//         addressLine1: form.addressLine1.trim(),
//         addressLine2: form.addressLine2.trim(),
//         city: form.city.trim(),
//         state: form.state.trim(),
//         pincode: form.pincode.trim(),
//         type: form.type,
//         isDefault: form.isDefault || addresses.length === 0,
//       };

//       if (newAddress.isDefault) {
//         updatedList = updatedList.map((a) => ({ ...a, isDefault: false }));
//       }

//       updatedList.push(newAddress);
//     }

//     saveToStorage(updatedList);
//     setSaved(true);
//     setShowForm(false);
//     setEditingId(null);
//     setForm(emptyForm);

//     setTimeout(() => setSaved(false), 2500);
//   };

//   const handleDelete = (id: string) => {
//     if (!confirm("Are you sure you want to delete this address?")) return;

//     let updatedList = addresses.filter((a) => a.id !== id);

//     // If deleted was default, make first one default
//     if (updatedList.length > 0 && !updatedList.some((a) => a.isDefault)) {
//       updatedList[0].isDefault = true;
//     }

//     saveToStorage(updatedList);
//   };

//   const setAsDefault = (id: string) => {
//     const updatedList = addresses.map((a) => ({
//       ...a,
//       isDefault: a.id === id,
//     }));
//     saveToStorage(updatedList);
//   };

//   return (
//     <div className="rounded-lg border border-slate-200 bg-white">
//       {/* Header */}
//       <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
//         <div>
//           <h2 className="text-lg font-semibold text-slate-900">
//             Manage Addresses
//           </h2>
//           <p className="mt-0.5 text-xs text-slate-500">
//             Add and manage your delivery addresses
//           </p>
//         </div>

//         {!showForm && (
//           <button
//             type="button"
//             onClick={openAddForm}
//             className="inline-flex items-center gap-2 rounded-lg bg-[#176b5b] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#125849]"
//           >
//             <Plus size={16} />
//             Add New Address
//           </button>
//         )}
//       </div>

//       {/* Success message */}
//       {saved && (
//         <div className="flex items-center gap-2 border-b border-emerald-100 bg-emerald-50 px-6 py-3 text-sm font-medium text-emerald-700">
//           <Check size={16} />
//           Address saved successfully
//         </div>
//       )}

//       {/* Add / Edit Form */}
//       {showForm && (
//         <div className="border-b border-slate-100 px-6 py-5">
//           <div className="mb-4 flex items-center justify-between">
//             <h3 className="text-sm font-semibold text-slate-900">
//               {editingId ? "Edit Address" : "Add a new address"}
//             </h3>
//             <button
//               type="button"
//               onClick={closeForm}
//               className="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
//             >
//               <X size={18} />
//             </button>
//           </div>

//           {error && (
//             <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-700">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="grid gap-4 sm:grid-cols-2">
//               <div>
//                 <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   value={form.name}
//                   onChange={(e) => updateField("name", e.target.value)}
//                   placeholder="Enter full name"
//                   className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                   Mobile Number
//                 </label>
//                 <input
//                   type="tel"
//                   value={form.phone}
//                   onChange={(e) => updateField("phone", e.target.value)}
//                   placeholder="10-digit mobile number"
//                   className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                 Address (House No, Building, Street, Area)
//               </label>
//               <textarea
//                 rows={2}
//                 value={form.addressLine1}
//                 onChange={(e) => updateField("addressLine1", e.target.value)}
//                 placeholder="House No, Building Name, Street, Area"
//                 className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//               />
//             </div>

//             <div>
//               <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                 Landmark (Optional)
//               </label>
//               <input
//                 type="text"
//                 value={form.addressLine2}
//                 onChange={(e) => updateField("addressLine2", e.target.value)}
//                 placeholder="Nearby landmark"
//                 className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//               />
//             </div>

//             <div className="grid gap-4 sm:grid-cols-3">
//               <div>
//                 <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                   City
//                 </label>
//                 <input
//                   type="text"
//                   value={form.city}
//                   onChange={(e) => updateField("city", e.target.value)}
//                   placeholder="City"
//                   className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                   State
//                 </label>
//                 <input
//                   type="text"
//                   value={form.state}
//                   onChange={(e) => updateField("state", e.target.value)}
//                   placeholder="State"
//                   className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                   PIN Code
//                 </label>
//                 <input
//                   type="text"
//                   inputMode="numeric"
//                   maxLength={6}
//                   value={form.pincode}
//                   onChange={(e) =>
//                     updateField("pincode", e.target.value.replace(/\D/g, ""))
//                   }
//                   placeholder="6-digit PIN"
//                   className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                 />
//               </div>
//             </div>

//             {/* Address Type */}
//             <div>
//               <label className="mb-2 block text-xs font-semibold text-slate-700">
//                 Address Type
//               </label>
//               <div className="flex flex-wrap gap-3">
//                 {(["Home", "Work", "Other"] as const).map((type) => (
//                   <label
//                     key={type}
//                     className={`flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2 text-sm transition ${
//                       form.type === type
//                         ? "border-[#176b5b] bg-[#e8f5ef] font-medium text-[#176b5b]"
//                         : "border-slate-200 text-slate-600 hover:border-slate-300"
//                     }`}
//                   >
//                     <input
//                       type="radio"
//                       name="type"
//                       value={type}
//                       checked={form.type === type}
//                       onChange={() => updateField("type", type)}
//                       className="sr-only"
//                     />
//                     {type}
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Default checkbox */}
//             <label className="flex cursor-pointer items-center gap-2.5">
//               <input
//                 type="checkbox"
//                 checked={form.isDefault}
//                 onChange={(e) => updateField("isDefault", e.target.checked)}
//                 className="h-4 w-4 rounded border-slate-300 accent-[#176b5b]"
//               />
//               <span className="text-sm text-slate-600">
//                 Make this my default address
//               </span>
//             </label>

//             <div className="flex gap-3 pt-2">
//               <button
//                 type="submit"
//                 className="rounded-lg bg-[#176b5b] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#125849]"
//               >
//                 {editingId ? "Update Address" : "Save Address"}
//               </button>
//               <button
//                 type="button"
//                 onClick={closeForm}
//                 className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       {/* Address List */}
//       <div className="px-6 py-5">
//         {addresses.length === 0 && !showForm ? (
//           <div className="py-12 text-center">
//             <MapPin size={40} className="mx-auto text-slate-300" />
//             <p className="mt-4 text-sm font-medium text-slate-700">
//               No addresses saved yet
//             </p>
//             <p className="mt-1 text-xs text-slate-500">
//               Add a delivery address for faster checkout
//             </p>
//             <button
//               type="button"
//               onClick={openAddForm}
//               className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white"
//             >
//               <Plus size={16} />
//               Add New Address
//             </button>
//           </div>
//         ) : (
//           <div className="space-y-4">
//             {addresses.map((address) => (
//               <div
//                 key={address.id}
//                 className="rounded-xl border border-slate-200 p-4 transition hover:border-slate-300"
//               >
//                 <div className="flex items-start justify-between gap-4">
//                   <div className="flex-1">
//                     <div className="flex flex-wrap items-center gap-2">
//                       <span className="text-sm font-bold text-slate-900">
//                         {address.name}
//                       </span>
//                       <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600">
//                         {address.type}
//                       </span>
//                       {address.isDefault && (
//                         <span className="rounded bg-[#e8f5ef] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#176b5b]">
//                           Default
//                         </span>
//                       )}
//                     </div>

//                     <p className="mt-1 text-sm text-slate-600">
//                       {address.phone}
//                     </p>

//                     <p className="mt-2 text-sm leading-6 text-slate-600">
//                       {address.addressLine1}
//                       {address.addressLine2 ? `, ${address.addressLine2}` : ""}
//                       <br />
//                       {address.city}, {address.state} – {address.pincode}
//                     </p>
//                   </div>

//                   <div className="flex shrink-0 items-center gap-1">
//                     <button
//                       type="button"
//                       onClick={() => openEditForm(address)}
//                       className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
//                       title="Edit"
//                     >
//                       <Pencil size={16} />
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => handleDelete(address.id)}
//                       className="rounded-lg p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-600"
//                       title="Delete"
//                     >
//                       <Trash2 size={16} />
//                     </button>
//                   </div>
//                 </div>

//                 {!address.isDefault && (
//                   <button
//                     type="button"
//                     onClick={() => setAsDefault(address.id)}
//                     className="mt-3 text-xs font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Make this default
//                   </button>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { FormEvent, useEffect, useState } from "react";
// import {
//   Check,
//   MapPin,
//   Pencil,
//   Plus,
//   Trash2,
//   X,
// } from "lucide-react";

// interface Address {
//   id: string;
//   name: string;
//   phone: string;
//   addressLine1: string;
//   addressLine2: string;
//   city: string;
//   state: string;
//   pincode: string;
//   type: "Home" | "Work" | "Other";
//   isDefault: boolean;
// }

// const STORAGE_KEY = "akrish_addresses";

// const emptyForm = {
//   name: "",
//   phone: "",
//   addressLine1: "",
//   addressLine2: "",
//   city: "",
//   state: "",
//   pincode: "",
//   type: "Home" as Address["type"],
//   isDefault: false,
// };

// export default function AddressesPage() {
//   const [addresses, setAddresses] = useState<Address[]>([]);
//   const [showForm, setShowForm] = useState(false);
//   const [editingId, setEditingId] = useState<string | null>(null);
//   const [form, setForm] = useState(emptyForm);
//   const [error, setError] = useState("");
//   const [saved, setSaved] = useState(false);

//   useEffect(() => {
//     try {
//       const stored = localStorage.getItem(STORAGE_KEY);
//       if (stored) {
//         setAddresses(JSON.parse(stored));
//       }
//     } catch {
//       setAddresses([]);
//     }
//   }, []);

//   // Prevent body scroll when modal is open
//   useEffect(() => {
//     if (showForm) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [showForm]);

//   const saveToStorage = (list: Address[]) => {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
//     setAddresses(list);
//   };

//   const updateField = (field: keyof typeof form, value: string | boolean) => {
//     setForm((prev) => ({ ...prev, [field]: value }));
//     setError("");
//     setSaved(false);
//   };

//   const openAddForm = () => {
//     setEditingId(null);
//     setForm(emptyForm);
//     setShowForm(true);
//     setError("");
//     setSaved(false);
//   };

//   const openEditForm = (address: Address) => {
//     setEditingId(address.id);
//     setForm({
//       name: address.name,
//       phone: address.phone,
//       addressLine1: address.addressLine1,
//       addressLine2: address.addressLine2,
//       city: address.city,
//       state: address.state,
//       pincode: address.pincode,
//       type: address.type,
//       isDefault: address.isDefault,
//     });
//     setShowForm(true);
//     setError("");
//     setSaved(false);
//   };

//   const closeForm = () => {
//     setShowForm(false);
//     setEditingId(null);
//     setForm(emptyForm);
//     setError("");
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     setError("");

//     if (!form.name.trim()) {
//       setError("Please enter full name.");
//       return;
//     }
//     if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10) {
//       setError("Please enter a valid 10-digit mobile number.");
//       return;
//     }
//     if (!form.addressLine1.trim()) {
//       setError("Please enter address.");
//       return;
//     }
//     if (!form.city.trim()) {
//       setError("Please enter city.");
//       return;
//     }
//     if (!form.state.trim()) {
//       setError("Please enter state.");
//       return;
//     }
//     if (!form.pincode.trim() || form.pincode.length !== 6) {
//       setError("Please enter a valid 6-digit PIN code.");
//       return;
//     }

//     let updatedList = [...addresses];

//     if (editingId) {
//       updatedList = updatedList.map((addr) =>
//         addr.id === editingId
//           ? {
//               ...addr,
//               ...form,
//               name: form.name.trim(),
//               phone: form.phone.trim(),
//               addressLine1: form.addressLine1.trim(),
//               addressLine2: form.addressLine2.trim(),
//               city: form.city.trim(),
//               state: form.state.trim(),
//               pincode: form.pincode.trim(),
//             }
//           : form.isDefault
//             ? { ...addr, isDefault: false }
//             : addr
//       );
//     } else {
//       const newAddress: Address = {
//         id: `addr_${Date.now()}`,
//         name: form.name.trim(),
//         phone: form.phone.trim(),
//         addressLine1: form.addressLine1.trim(),
//         addressLine2: form.addressLine2.trim(),
//         city: form.city.trim(),
//         state: form.state.trim(),
//         pincode: form.pincode.trim(),
//         type: form.type,
//         isDefault: form.isDefault || addresses.length === 0,
//       };

//       if (newAddress.isDefault) {
//         updatedList = updatedList.map((a) => ({ ...a, isDefault: false }));
//       }

//       updatedList.push(newAddress);
//     }

//     saveToStorage(updatedList);
//     setSaved(true);
//     setShowForm(false);
//     setEditingId(null);
//     setForm(emptyForm);

//     setTimeout(() => setSaved(false), 2500);
//   };

//   const handleDelete = (id: string) => {
//     if (!confirm("Are you sure you want to delete this address?")) return;

//     let updatedList = addresses.filter((a) => a.id !== id);

//     if (updatedList.length > 0 && !updatedList.some((a) => a.isDefault)) {
//       updatedList = updatedList.map((a, i) =>
//         i === 0 ? { ...a, isDefault: true } : a
//       );
//     }

//     saveToStorage(updatedList);
//   };

//   const setAsDefault = (id: string) => {
//     const updatedList = addresses.map((a) => ({
//       ...a,
//       isDefault: a.id === id,
//     }));
//     saveToStorage(updatedList);
//   };

//   return (
//     <div className="rounded-lg border border-slate-200 bg-white">
//       {/* Header */}
//       <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
//         <div>
//           <h2 className="text-lg font-semibold text-slate-900">
//             Manage Addresses
//           </h2>
//           <p className="mt-0.5 text-xs text-slate-500">
//             Add and manage your delivery addresses
//           </p>
//         </div>

//         <button
//           type="button"
//           onClick={openAddForm}
//           className="inline-flex items-center gap-2 rounded-lg bg-[#176b5b] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#125849]"
//         >
//           <Plus size={16} />
//           Add New Address
//         </button>
//       </div>

//       {/* Success message */}
//       {saved && (
//         <div className="flex items-center gap-2 border-b border-emerald-100 bg-emerald-50 px-6 py-3 text-sm font-medium text-emerald-700">
//           <Check size={16} />
//           Address saved successfully
//         </div>
//       )}

//       {/* Address List */}
//       <div className="px-6 py-5">
//         {addresses.length === 0 ? (
//           <div className="py-12 text-center">
//             <MapPin size={40} className="mx-auto text-slate-300" />
//             <p className="mt-4 text-sm font-medium text-slate-700">
//               No addresses saved yet
//             </p>
//             <p className="mt-1 text-xs text-slate-500">
//               Add a delivery address for faster checkout
//             </p>
//             <button
//               type="button"
//               onClick={openAddForm}
//               className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white"
//             >
//               <Plus size={16} />
//               Add New Address
//             </button>
//           </div>
//         ) : (
//           <div className="space-y-4">
//             {addresses.map((address) => (
//               <div
//                 key={address.id}
//                 className="rounded-xl border border-slate-200 p-4 transition hover:border-slate-300"
//               >
//                 <div className="flex items-start justify-between gap-4">
//                   <div className="flex-1">
//                     <div className="flex flex-wrap items-center gap-2">
//                       <span className="text-sm font-bold text-slate-900">
//                         {address.name}
//                       </span>
//                       <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600">
//                         {address.type}
//                       </span>
//                       {address.isDefault && (
//                         <span className="rounded bg-[#e8f5ef] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#176b5b]">
//                           Default
//                         </span>
//                       )}
//                     </div>

//                     <p className="mt-1 text-sm text-slate-600">{address.phone}</p>

//                     <p className="mt-2 text-sm leading-6 text-slate-600">
//                       {address.addressLine1}
//                       {address.addressLine2 ? `, ${address.addressLine2}` : ""}
//                       <br />
//                       {address.city}, {address.state} – {address.pincode}
//                     </p>
//                   </div>

//                   <div className="flex shrink-0 items-center gap-1">
//                     <button
//                       type="button"
//                       onClick={() => openEditForm(address)}
//                       className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
//                       title="Edit"
//                     >
//                       <Pencil size={16} />
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => handleDelete(address.id)}
//                       className="rounded-lg p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-600"
//                       title="Delete"
//                     >
//                       <Trash2 size={16} />
//                     </button>
//                   </div>
//                 </div>

//                 {!address.isDefault && (
//                   <button
//                     type="button"
//                     onClick={() => setAsDefault(address.id)}
//                     className="mt-3 text-xs font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Make this default
//                   </button>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* ========== FLOATING MODAL ========== */}
//       {showForm && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//           {/* Backdrop */}
//           <div
//             className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
//             onClick={closeForm}
//           />

//           {/* Modal panel */}
//           <div className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             {/* Modal header */}
//             <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white px-6 py-4">
//               <div>
//                 <h3 className="text-base font-bold text-slate-900">
//                   {editingId ? "Edit Address" : "Add a new address"}
//                 </h3>
//                 <p className="mt-0.5 text-xs text-slate-500">
//                   {editingId
//                     ? "Update your delivery address details"
//                     : "Enter delivery address for faster checkout"}
//                 </p>
//               </div>
//               <button
//                 type="button"
//                 onClick={closeForm}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
//               >
//                 <X size={18} />
//               </button>
//             </div>

//             {/* Modal body */}
//             <form onSubmit={handleSubmit} className="space-y-4 px-6 py-5">
//               {error && (
//                 <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-700">
//                   {error}
//                 </div>
//               )}

//               <div className="grid gap-4 sm:grid-cols-2">
//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     value={form.name}
//                     onChange={(e) => updateField("name", e.target.value)}
//                     placeholder="Enter full name"
//                     className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Mobile Number
//                   </label>
//                   <input
//                     type="tel"
//                     value={form.phone}
//                     onChange={(e) => updateField("phone", e.target.value)}
//                     placeholder="10-digit mobile number"
//                     className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                   Address (House No, Building, Street, Area)
//                 </label>
//                 <textarea
//                   rows={2}
//                   value={form.addressLine1}
//                   onChange={(e) => updateField("addressLine1", e.target.value)}
//                   placeholder="House No, Building Name, Street, Area"
//                   className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                   Landmark (Optional)
//                 </label>
//                 <input
//                   type="text"
//                   value={form.addressLine2}
//                   onChange={(e) => updateField("addressLine2", e.target.value)}
//                   placeholder="Nearby landmark"
//                   className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                 />
//               </div>

//               <div className="grid gap-4 sm:grid-cols-3">
//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     City
//                   </label>
//                   <input
//                     type="text"
//                     value={form.city}
//                     onChange={(e) => updateField("city", e.target.value)}
//                     placeholder="City"
//                     className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     State
//                   </label>
//                   <input
//                     type="text"
//                     value={form.state}
//                     onChange={(e) => updateField("state", e.target.value)}
//                     placeholder="State"
//                     className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     PIN Code
//                   </label>
//                   <input
//                     type="text"
//                     inputMode="numeric"
//                     maxLength={6}
//                     value={form.pincode}
//                     onChange={(e) =>
//                       updateField("pincode", e.target.value.replace(/\D/g, ""))
//                     }
//                     placeholder="6-digit PIN"
//                     className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                   />
//                 </div>
//               </div>

//               {/* Address Type */}
//               <div>
//                 <label className="mb-2 block text-xs font-semibold text-slate-700">
//                   Address Type
//                 </label>
//                 <div className="flex flex-wrap gap-3">
//                   {(["Home", "Work", "Other"] as const).map((type) => (
//                     <label
//                       key={type}
//                       className={`flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2 text-sm transition ${
//                         form.type === type
//                           ? "border-[#176b5b] bg-[#e8f5ef] font-medium text-[#176b5b]"
//                           : "border-slate-200 text-slate-600 hover:border-slate-300"
//                       }`}
//                     >
//                       <input
//                         type="radio"
//                         name="type"
//                         value={type}
//                         checked={form.type === type}
//                         onChange={() => updateField("type", type)}
//                         className="sr-only"
//                       />
//                       {type}
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               {/* Default checkbox */}
//               <label className="flex cursor-pointer items-center gap-2.5">
//                 <input
//                   type="checkbox"
//                   checked={form.isDefault}
//                   onChange={(e) => updateField("isDefault", e.target.checked)}
//                   className="h-4 w-4 rounded border-slate-300 accent-[#176b5b]"
//                 />
//                 <span className="text-sm text-slate-600">
//                   Make this my default address
//                 </span>
//               </label>

//               {/* Modal footer actions */}
//               <div className="flex gap-3 border-t border-slate-100 pt-4">
//                 <button
//                   type="button"
//                   onClick={closeForm}
//                   className="flex-1 rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="flex-1 rounded-lg bg-[#176b5b] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#125849]"
//                 >
//                   {editingId ? "Update Address" : "Save Address"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// "use client";

// import Link from "next/link";
// import { FormEvent, useEffect, useState } from "react";
// import {
//   Check,
//   Lock,
//   MapPin,
//   Pencil,
//   Plus,
//   Trash2,
//   X,
//   Loader2,
// } from "lucide-react";
// import {
//   collection,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   doc,
//   query,
//   where,
//   getDocs,
//   serverTimestamp,
// } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";

// interface Address {
//   id: string;
//   name: string;
//   phone: string;
//   addressLine1: string;
//   addressLine2: string;
//   city: string;
//   state: string;
//   pincode: string;
//   type: "Home" | "Work" | "Other";
//   isDefault: boolean;
//   userEmail: string;
// }

// const emptyForm = {
//   name: "",
//   phone: "",
//   addressLine1: "",
//   addressLine2: "",
//   city: "",
//   state: "",
//   pincode: "",
//   type: "Home" as Address["type"],
//   isDefault: false,
// };

// export default function AddressesPage() {
//   const [user, setUser] = useState<{ name?: string; email?: string } | null>(null);
//   const [checkingAuth, setCheckingAuth] = useState(true);
//   const [addresses, setAddresses] = useState<Address[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   const [editingId, setEditingId] = useState<string | null>(null);
//   const [form, setForm] = useState(emptyForm);
//   const [error, setError] = useState("");
//   const [saved, setSaved] = useState(false);
//   const [saving, setSaving] = useState(false);

//   // Auth check
//   useEffect(() => {
//     try {
//       const stored = localStorage.getItem("user");
//       if (stored) {
//         setUser(JSON.parse(stored));
//       } else {
//         setUser(null);
//       }
//     } catch {
//       setUser(null);
//     } finally {
//       setCheckingAuth(false);
//     }
//   }, []);

//   // Load addresses from Firebase for this user
//   useEffect(() => {
//     if (!user?.email) return;

//     const loadAddresses = async () => {
//       setLoading(true);
//       try {
//         const q = query(
//           collection(db, "customer_addresses"),
//           where("userEmail", "==", user.email!.toLowerCase())
//         );
//         const snapshot = await getDocs(q);
//         const list: Address[] = snapshot.docs.map((d) => {
//           const data = d.data();
//           return {
//             id: d.id,
//             name: data.name || "",
//             phone: data.phone || "",
//             addressLine1: data.addressLine1 || "",
//             addressLine2: data.addressLine2 || "",
//             city: data.city || "",
//             state: data.state || "",
//             pincode: data.pincode || "",
//             type: data.type || "Home",
//             isDefault: data.isDefault === true,
//             userEmail: data.userEmail || "",
//           };
//         });
//         setAddresses(list);
//       } catch (err) {
//         console.error("Failed to load addresses:", err);
//         setError("Unable to load addresses. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadAddresses();
//   }, [user?.email]);

//   useEffect(() => {
//     if (showForm) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [showForm]);

//   const updateField = (field: keyof typeof form, value: string | boolean) => {
//     setForm((prev) => ({ ...prev, [field]: value }));
//     setError("");
//     setSaved(false);
//   };

//   const openAddForm = () => {
//     setEditingId(null);
//     setForm(emptyForm);
//     setShowForm(true);
//     setError("");
//   };

//   const openEditForm = (address: Address) => {
//     setEditingId(address.id);
//     setForm({
//       name: address.name,
//       phone: address.phone,
//       addressLine1: address.addressLine1,
//       addressLine2: address.addressLine2,
//       city: address.city,
//       state: address.state,
//       pincode: address.pincode,
//       type: address.type,
//       isDefault: address.isDefault,
//     });
//     setShowForm(true);
//     setError("");
//   };

//   const closeForm = () => {
//     setShowForm(false);
//     setEditingId(null);
//     setForm(emptyForm);
//     setError("");
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     if (!user?.email) return;

//     setError("");

//     if (!form.name.trim()) {
//       setError("Please enter full name.");
//       return;
//     }
//     if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10) {
//       setError("Please enter a valid 10-digit mobile number.");
//       return;
//     }
//     if (!form.addressLine1.trim()) {
//       setError("Please enter address.");
//       return;
//     }
//     if (!form.city.trim()) {
//       setError("Please enter city.");
//       return;
//     }
//     if (!form.state.trim()) {
//       setError("Please enter state.");
//       return;
//     }
//     if (!form.pincode.trim() || form.pincode.length !== 6) {
//       setError("Please enter a valid 6-digit PIN code.");
//       return;
//     }

//     setSaving(true);

//     try {
//       const email = user.email.toLowerCase();
//       const payload = {
//         name: form.name.trim(),
//         phone: form.phone.trim(),
//         addressLine1: form.addressLine1.trim(),
//         addressLine2: form.addressLine2.trim(),
//         city: form.city.trim(),
//         state: form.state.trim(),
//         pincode: form.pincode.trim(),
//         type: form.type,
//         isDefault: form.isDefault || addresses.length === 0,
//         userEmail: email,
//         updatedAt: serverTimestamp(),
//       };

//       // If setting as default, clear other defaults first
//       if (payload.isDefault) {
//         const others = addresses.filter(
//           (a) => a.isDefault && a.id !== editingId
//         );
//         await Promise.all(
//           others.map((a) =>
//             updateDoc(doc(db, "customer_addresses", a.id), {
//               isDefault: false,
//               updatedAt: serverTimestamp(),
//             })
//           )
//         );
//       }

//       if (editingId) {
//         await updateDoc(doc(db, "customer_addresses", editingId), payload);
//       } else {
//         await addDoc(collection(db, "customer_addresses"), {
//           ...payload,
//           createdAt: serverTimestamp(),
//         });
//       }

//       // Reload list
//       const q = query(
//         collection(db, "customer_addresses"),
//         where("userEmail", "==", email)
//       );
//       const snapshot = await getDocs(q);
//       const list: Address[] = snapshot.docs.map((d) => {
//         const data = d.data();
//         return {
//           id: d.id,
//           name: data.name || "",
//           phone: data.phone || "",
//           addressLine1: data.addressLine1 || "",
//           addressLine2: data.addressLine2 || "",
//           city: data.city || "",
//           state: data.state || "",
//           pincode: data.pincode || "",
//           type: data.type || "Home",
//           isDefault: data.isDefault === true,
//           userEmail: data.userEmail || "",
//         };
//       });
//       setAddresses(list);

//       setSaved(true);
//       closeForm();
//       setTimeout(() => setSaved(false), 2500);
//     } catch (err) {
//       console.error("Save address failed:", err);
//       setError("Unable to save address. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleDelete = async (id: string) => {
//     if (!confirm("Are you sure you want to delete this address?")) return;
//     if (!user?.email) return;

//     try {
//       await deleteDoc(doc(db, "customer_addresses", id));

//       let updated = addresses.filter((a) => a.id !== id);

//       // If deleted was default, make first one default
//       if (updated.length > 0 && !updated.some((a) => a.isDefault)) {
//         await updateDoc(doc(db, "customer_addresses", updated[0].id), {
//           isDefault: true,
//           updatedAt: serverTimestamp(),
//         });
//         updated = updated.map((a, i) =>
//           i === 0 ? { ...a, isDefault: true } : a
//         );
//       }

//       setAddresses(updated);
//     } catch (err) {
//       console.error("Delete failed:", err);
//       setError("Unable to delete address.");
//     }
//   };

//   const setAsDefault = async (id: string) => {
//     if (!user?.email) return;

//     try {
//       await Promise.all(
//         addresses.map((a) =>
//           updateDoc(doc(db, "customer_addresses", a.id), {
//             isDefault: a.id === id,
//             updatedAt: serverTimestamp(),
//           })
//         )
//       );

//       setAddresses(
//         addresses.map((a) => ({
//           ...a,
//           isDefault: a.id === id,
//         }))
//       );
//     } catch (err) {
//       console.error("Set default failed:", err);
//     }
//   };

//   if (checkingAuth) {
//     return (
//       <div className="flex min-h-[320px] items-center justify-center rounded-lg border border-slate-200 bg-white">
//         <Loader2 className="h-6 w-6 animate-spin text-slate-400" />
//       </div>
//     );
//   }

//   if (!user) {
//     return (
//       <div className="flex min-h-[420px] flex-col items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-12 text-center">
//         <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-500">
//           <Lock size={24} />
//         </div>
//         <h2 className="mt-5 text-xl font-bold text-slate-900">Please sign in</h2>
//         <p className="mt-2 max-w-sm text-sm text-slate-500">
//           Sign in to manage your delivery addresses.
//         </p>
//         <div className="mt-6 flex gap-3">
//           <Link
//             href="/sign-in"
//             className="rounded-lg bg-[#176b5b] px-6 py-2.5 text-sm font-semibold text-white"
//           >
//             Sign In
//           </Link>
//           <Link
//             href="/register"
//             className="rounded-lg border border-slate-200 px-6 py-2.5 text-sm font-semibold text-slate-700"
//           >
//             Create account
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="rounded-lg border border-slate-200 bg-white">
//       <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
//         <div>
//           <h2 className="text-lg font-semibold text-slate-900">
//             Manage Addresses
//           </h2>
//           <p className="mt-0.5 text-xs text-slate-500">
//             Addresses for {user.email}
//           </p>
//         </div>

//         <button
//           type="button"
//           onClick={openAddForm}
//           className="inline-flex items-center gap-2 rounded-lg bg-[#176b5b] px-4 py-2 text-sm font-semibold text-white hover:bg-[#125849]"
//         >
//           <Plus size={16} />
//           Add New Address
//         </button>
//       </div>

//       {saved && (
//         <div className="flex items-center gap-2 border-b border-emerald-100 bg-emerald-50 px-6 py-3 text-sm font-medium text-emerald-700">
//           <Check size={16} />
//           Address saved successfully
//         </div>
//       )}

//       {error && !showForm && (
//         <div className="border-b border-red-100 bg-red-50 px-6 py-3 text-sm text-red-700">
//           {error}
//         </div>
//       )}

//       <div className="px-6 py-5">
//         {loading ? (
//           <div className="flex justify-center py-12">
//             <Loader2 className="h-7 w-7 animate-spin text-slate-400" />
//           </div>
//         ) : addresses.length === 0 ? (
//           <div className="py-12 text-center">
//             <MapPin size={40} className="mx-auto text-slate-300" />
//             <p className="mt-4 text-sm font-medium text-slate-700">
//               No addresses saved yet
//             </p>
//             <p className="mt-1 text-xs text-slate-500">
//               Add a delivery address for faster checkout
//             </p>
//             <button
//               type="button"
//               onClick={openAddForm}
//               className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white"
//             >
//               <Plus size={16} />
//               Add New Address
//             </button>
//           </div>
//         ) : (
//           <div className="space-y-4">
//             {addresses.map((address) => (
//               <div
//                 key={address.id}
//                 className="rounded-xl border border-slate-200 p-4 hover:border-slate-300"
//               >
//                 <div className="flex items-start justify-between gap-4">
//                   <div className="flex-1">
//                     <div className="flex flex-wrap items-center gap-2">
//                       <span className="text-sm font-bold text-slate-900">
//                         {address.name}
//                       </span>
//                       <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase text-slate-600">
//                         {address.type}
//                       </span>
//                       {address.isDefault && (
//                         <span className="rounded bg-[#e8f5ef] px-2 py-0.5 text-[10px] font-semibold uppercase text-[#176b5b]">
//                           Default
//                         </span>
//                       )}
//                     </div>
//                     <p className="mt-1 text-sm text-slate-600">{address.phone}</p>
//                     <p className="mt-2 text-sm leading-6 text-slate-600">
//                       {address.addressLine1}
//                       {address.addressLine2 ? `, ${address.addressLine2}` : ""}
//                       <br />
//                       {address.city}, {address.state} – {address.pincode}
//                     </p>
//                   </div>

//                   <div className="flex shrink-0 gap-1">
//                     <button
//                       type="button"
//                       onClick={() => openEditForm(address)}
//                       className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
//                     >
//                       <Pencil size={16} />
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => handleDelete(address.id)}
//                       className="rounded-lg p-2 text-slate-500 hover:bg-red-50 hover:text-red-600"
//                     >
//                       <Trash2 size={16} />
//                     </button>
//                   </div>
//                 </div>

//                 {!address.isDefault && (
//                   <button
//                     type="button"
//                     onClick={() => setAsDefault(address.id)}
//                     className="mt-3 text-xs font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Make this default
//                   </button>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Modal */}
//       {showForm && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//           <div
//             className="absolute inset-0 bg-black/40"
//             onClick={closeForm}
//           />
//           <div className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="sticky top-0 flex items-center justify-between border-b border-slate-100 bg-white px-6 py-4">
//               <h3 className="text-base font-bold text-slate-900">
//                 {editingId ? "Edit Address" : "Add a new address"}
//               </h3>
//               <button
//                 type="button"
//                 onClick={closeForm}
//                 className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
//               >
//                 <X size={18} />
//               </button>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-4 px-6 py-5">
//               {error && (
//                 <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-700">
//                   {error}
//                 </div>
//               )}

//               <div className="grid gap-4 sm:grid-cols-2">
//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     value={form.name}
//                     onChange={(e) => updateField("name", e.target.value)}
//                     className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Mobile Number
//                   </label>
//                   <input
//                     type="tel"
//                     value={form.phone}
//                     onChange={(e) => updateField("phone", e.target.value)}
//                     className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                   Address
//                 </label>
//                 <textarea
//                   rows={2}
//                   value={form.addressLine1}
//                   onChange={(e) => updateField("addressLine1", e.target.value)}
//                   className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                   Landmark (Optional)
//                 </label>
//                 <input
//                   type="text"
//                   value={form.addressLine2}
//                   onChange={(e) => updateField("addressLine2", e.target.value)}
//                   className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>

//               <div className="grid gap-4 sm:grid-cols-3">
//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     City
//                   </label>
//                   <input
//                     type="text"
//                     value={form.city}
//                     onChange={(e) => updateField("city", e.target.value)}
//                     className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     State
//                   </label>
//                   <input
//                     type="text"
//                     value={form.state}
//                     onChange={(e) => updateField("state", e.target.value)}
//                     className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     PIN Code
//                   </label>
//                   <input
//                     type="text"
//                     inputMode="numeric"
//                     maxLength={6}
//                     value={form.pincode}
//                     onChange={(e) =>
//                       updateField("pincode", e.target.value.replace(/\D/g, ""))
//                     }
//                     className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="mb-2 block text-xs font-semibold text-slate-700">
//                   Address Type
//                 </label>
//                 <div className="flex flex-wrap gap-3">
//                   {(["Home", "Work", "Other"] as const).map((type) => (
//                     <label
//                       key={type}
//                       className={`cursor-pointer rounded-lg border px-4 py-2 text-sm ${
//                         form.type === type
//                           ? "border-[#176b5b] bg-[#e8f5ef] font-medium text-[#176b5b]"
//                           : "border-slate-200 text-slate-600"
//                       }`}
//                     >
//                       <input
//                         type="radio"
//                         name="type"
//                         value={type}
//                         checked={form.type === type}
//                         onChange={() => updateField("type", type)}
//                         className="sr-only"
//                       />
//                       {type}
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               <label className="flex items-center gap-2.5">
//                 <input
//                   type="checkbox"
//                   checked={form.isDefault}
//                   onChange={(e) => updateField("isDefault", e.target.checked)}
//                   className="h-4 w-4 accent-[#176b5b]"
//                 />
//                 <span className="text-sm text-slate-600">
//                   Make this my default address
//                 </span>
//               </label>

//               <div className="flex gap-3 border-t border-slate-100 pt-4">
//                 <button
//                   type="button"
//                   onClick={closeForm}
//                   className="flex-1 rounded-lg border border-slate-200 py-2.5 text-sm font-semibold text-slate-600"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={saving}
//                   className="flex-1 rounded-lg bg-[#176b5b] py-2.5 text-sm font-semibold text-white disabled:opacity-60"
//                 >
//                   {saving
//                     ? "Saving..."
//                     : editingId
//                       ? "Update Address"
//                       : "Save Address"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import {
  Check,
  Lock,
  MapPin,
  Pencil,
  Plus,
  Trash2,
  X,
  Loader2,
} from "lucide-react";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/lib/firebase";

interface Address {
  id: string;
  name: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
  type: "Home" | "Work" | "Other";
  isDefault: boolean;
  userEmail: string;
}

const emptyForm = {
  name: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  pincode: "",
  type: "Home" as Address["type"],
  isDefault: false,
};

export default function AddressesPage() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>("");
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  // Auth from Firebase only (no localStorage)
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user?.email) {
        setUserEmail(user.email.toLowerCase());
        setUserName(user.displayName || "");
      } else {
        setUserEmail(null);
        setUserName("");
        setAddresses([]);
      }
      setCheckingAuth(false);
    });
    return () => unsub();
  }, []);

  // Load addresses from Firebase
  useEffect(() => {
    if (!userEmail) return;

    const loadAddresses = async () => {
      setLoading(true);
      setError("");
      try {
        const q = query(
          collection(db, "customer_addresses"),
          where("userEmail", "==", userEmail)
        );
        const snapshot = await getDocs(q);
        const list: Address[] = snapshot.docs.map((d) => {
          const data = d.data();
          return {
            id: d.id,
            name: data.name || "",
            phone: data.phone || "",
            addressLine1: data.addressLine1 || "",
            addressLine2: data.addressLine2 || "",
            city: data.city || "",
            state: data.state || "",
            pincode: data.pincode || "",
            type: data.type || "Home",
            isDefault: data.isDefault === true,
            userEmail: data.userEmail || "",
          };
        });
        setAddresses(list);
      } catch (err) {
        console.error("Failed to load addresses:", err);
        setError("Unable to load addresses. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadAddresses();
  }, [userEmail]);

  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showForm]);

  const updateField = (field: keyof typeof form, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
    setSaved(false);
  };

  const openAddForm = () => {
    setEditingId(null);
    setForm(emptyForm);
    setShowForm(true);
    setError("");
  };

  const openEditForm = (address: Address) => {
    setEditingId(address.id);
    setForm({
      name: address.name,
      phone: address.phone,
      addressLine1: address.addressLine1,
      addressLine2: address.addressLine2,
      city: address.city,
      state: address.state,
      pincode: address.pincode,
      type: address.type,
      isDefault: address.isDefault,
    });
    setShowForm(true);
    setError("");
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingId(null);
    setForm(emptyForm);
    setError("");
  };

  const reloadAddresses = async (email: string) => {
    const q = query(
      collection(db, "customer_addresses"),
      where("userEmail", "==", email)
    );
    const snapshot = await getDocs(q);
    const list: Address[] = snapshot.docs.map((d) => {
      const data = d.data();
      return {
        id: d.id,
        name: data.name || "",
        phone: data.phone || "",
        addressLine1: data.addressLine1 || "",
        addressLine2: data.addressLine2 || "",
        city: data.city || "",
        state: data.state || "",
        pincode: data.pincode || "",
        type: data.type || "Home",
        isDefault: data.isDefault === true,
        userEmail: data.userEmail || "",
      };
    });
    setAddresses(list);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!userEmail) return;

    setError("");
    if (!form.name.trim()) {
      setError("Please enter full name.");
      return;
    }
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!form.addressLine1.trim()) {
      setError("Please enter address.");
      return;
    }
    if (!form.city.trim()) {
      setError("Please enter city.");
      return;
    }
    if (!form.state.trim()) {
      setError("Please enter state.");
      return;
    }
    if (!form.pincode.trim() || form.pincode.length !== 6) {
      setError("Please enter a valid 6-digit PIN code.");
      return;
    }

    setSaving(true);
    try {
      const payload = {
        name: form.name.trim(),
        phone: form.phone.trim(),
        addressLine1: form.addressLine1.trim(),
        addressLine2: form.addressLine2.trim(),
        city: form.city.trim(),
        state: form.state.trim(),
        pincode: form.pincode.trim(),
        type: form.type,
        isDefault: form.isDefault || addresses.length === 0,
        userEmail,
        updatedAt: serverTimestamp(),
      };

      if (payload.isDefault) {
        const others = addresses.filter(
          (a) => a.isDefault && a.id !== editingId
        );
        await Promise.all(
          others.map((a) =>
            updateDoc(doc(db, "customer_addresses", a.id), {
              isDefault: false,
              updatedAt: serverTimestamp(),
            })
          )
        );
      }

      if (editingId) {
        await updateDoc(doc(db, "customer_addresses", editingId), payload);
      } else {
        await addDoc(collection(db, "customer_addresses"), {
          ...payload,
          createdAt: serverTimestamp(),
        });
      }

      await reloadAddresses(userEmail);
      setSaved(true);
      closeForm();
      setTimeout(() => setSaved(false), 2500);
    } catch (err) {
      console.error("Save address failed:", err);
      setError("Unable to save address. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this address?")) return;
    if (!userEmail) return;

    try {
      await deleteDoc(doc(db, "customer_addresses", id));
      let updated = addresses.filter((a) => a.id !== id);

      if (updated.length > 0 && !updated.some((a) => a.isDefault)) {
        await updateDoc(doc(db, "customer_addresses", updated[0].id), {
          isDefault: true,
          updatedAt: serverTimestamp(),
        });
        updated = updated.map((a, i) =>
          i === 0 ? { ...a, isDefault: true } : a
        );
      }
      setAddresses(updated);
    } catch (err) {
      console.error("Delete failed:", err);
      setError("Unable to delete address.");
    }
  };

  const setAsDefault = async (id: string) => {
    if (!userEmail) return;
    try {
      await Promise.all(
        addresses.map((a) =>
          updateDoc(doc(db, "customer_addresses", a.id), {
            isDefault: a.id === id,
            updatedAt: serverTimestamp(),
          })
        )
      );
      setAddresses(
        addresses.map((a) => ({
          ...a,
          isDefault: a.id === id,
        }))
      );
    } catch (err) {
      console.error("Set default failed:", err);
    }
  };

  if (checkingAuth) {
    return (
      <div className="flex min-h-[320px] items-center justify-center rounded-lg border border-slate-200 bg-white">
        <Loader2 className="h-6 w-6 animate-spin text-slate-400" />
      </div>
    );
  }

  if (!userEmail) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-500">
          <Lock size={24} />
        </div>
        <h2 className="mt-5 text-xl font-bold text-slate-900">Please sign in</h2>
        <p className="mt-2 max-w-sm text-sm text-slate-500">
          Sign in to manage your delivery addresses.
        </p>
        <div className="mt-6 flex gap-3">
          <Link
            href="/sign-in"
            className="rounded-lg bg-[#176b5b] px-6 py-2.5 text-sm font-semibold text-white"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="rounded-lg border border-slate-200 px-6 py-2.5 text-sm font-semibold text-slate-700"
          >
            Create account
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white">
      <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Manage Addresses
          </h2>
          <p className="mt-0.5 text-xs text-slate-500">
            Addresses for {userEmail}
            {userName ? ` · ${userName}` : ""}
          </p>
        </div>
        <button
          type="button"
          onClick={openAddForm}
          className="inline-flex items-center gap-2 rounded-lg bg-[#176b5b] px-4 py-2 text-sm font-semibold text-white hover:bg-[#125849]"
        >
          <Plus size={16} />
          Add New Address
        </button>
      </div>

      {saved && (
        <div className="flex items-center gap-2 border-b border-emerald-100 bg-emerald-50 px-6 py-3 text-sm font-medium text-emerald-700">
          <Check size={16} />
          Address saved successfully
        </div>
      )}

      {error && !showForm && (
        <div className="border-b border-red-100 bg-red-50 px-6 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="px-6 py-5">
        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="h-7 w-7 animate-spin text-slate-400" />
          </div>
        ) : addresses.length === 0 ? (
          <div className="py-12 text-center">
            <MapPin size={40} className="mx-auto text-slate-300" />
            <p className="mt-4 text-sm font-medium text-slate-700">
              No addresses saved yet
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Add a delivery address for faster checkout
            </p>
            <button
              type="button"
              onClick={openAddForm}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white"
            >
              <Plus size={16} />
              Add New Address
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {addresses.map((address) => (
              <div
                key={address.id}
                className="rounded-xl border border-slate-200 p-4 hover:border-slate-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-bold text-slate-900">
                        {address.name}
                      </span>
                      <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase text-slate-600">
                        {address.type}
                      </span>
                      {address.isDefault && (
                        <span className="rounded bg-[#e8f5ef] px-2 py-0.5 text-[10px] font-semibold uppercase text-[#176b5b]">
                          Default
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-slate-600">{address.phone}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {address.addressLine1}
                      {address.addressLine2 ? `, ${address.addressLine2}` : ""}
                      <br />
                      {address.city}, {address.state} – {address.pincode}
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-1">
                    <button
                      type="button"
                      onClick={() => openEditForm(address)}
                      className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(address.id)}
                      className="rounded-lg p-2 text-slate-500 hover:bg-red-50 hover:text-red-600"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                {!address.isDefault && (
                  <button
                    type="button"
                    onClick={() => setAsDefault(address.id)}
                    className="mt-3 text-xs font-semibold text-[#176b5b] hover:underline"
                  >
                    Make this default
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={closeForm} />
          <div className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="sticky top-0 flex items-center justify-between border-b border-slate-100 bg-white px-6 py-4">
              <h3 className="text-base font-bold text-slate-900">
                {editingId ? "Edit Address" : "Add a new address"}
              </h3>
              <button
                type="button"
                onClick={closeForm}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
              >
                <X size={18} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 px-6 py-5">
              {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-700">
                  {error}
                </div>
              )}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                  Address
                </label>
                <textarea
                  rows={2}
                  value={form.addressLine1}
                  onChange={(e) => updateField("addressLine1", e.target.value)}
                  className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                  Landmark (Optional)
                </label>
                <input
                  type="text"
                  value={form.addressLine2}
                  onChange={(e) => updateField("addressLine2", e.target.value)}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                    City
                  </label>
                  <input
                    type="text"
                    value={form.city}
                    onChange={(e) => updateField("city", e.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                    State
                  </label>
                  <input
                    type="text"
                    value={form.state}
                    onChange={(e) => updateField("state", e.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                    PIN Code
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    value={form.pincode}
                    onChange={(e) =>
                      updateField("pincode", e.target.value.replace(/\D/g, ""))
                    }
                    className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold text-slate-700">
                  Address Type
                </label>
                <div className="flex flex-wrap gap-3">
                  {(["Home", "Work", "Other"] as const).map((type) => (
                    <label
                      key={type}
                      className={`cursor-pointer rounded-lg border px-4 py-2 text-sm ${
                        form.type === type
                          ? "border-[#176b5b] bg-[#e8f5ef] font-medium text-[#176b5b]"
                          : "border-slate-200 text-slate-600"
                      }`}
                    >
                      <input
                        type="radio"
                        name="type"
                        value={type}
                        checked={form.type === type}
                        onChange={() => updateField("type", type)}
                        className="sr-only"
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>
              <label className="flex items-center gap-2.5">
                <input
                  type="checkbox"
                  checked={form.isDefault}
                  onChange={(e) => updateField("isDefault", e.target.checked)}
                  className="h-4 w-4 accent-[#176b5b]"
                />
                <span className="text-sm text-slate-600">
                  Make this my default address
                </span>
              </label>
              <div className="flex gap-3 border-t border-slate-100 pt-4">
                <button
                  type="button"
                  onClick={closeForm}
                  className="flex-1 rounded-lg border border-slate-200 py-2.5 text-sm font-semibold text-slate-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 rounded-lg bg-[#176b5b] py-2.5 text-sm font-semibold text-white disabled:opacity-60"
                >
                  {saving
                    ? "Saving..."
                    : editingId
                      ? "Update Address"
                      : "Save Address"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
