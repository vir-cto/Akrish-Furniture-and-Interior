// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAllCategories,
//   createCategory,
//   updateCategory,
//   deleteCategory,
//   type FurnitureCategory,
// } from "@/modules/furniture/services/categoryService";

// type CategoryRow = {
//   id: string;
//   name: string;
//   slug: string;
//   description: string;
//   status: "Active" | "Inactive";
//   sortOrder: number;
// };

// function mapToUi(c: FurnitureCategory): CategoryRow {
//   return {
//     id: c.id,
//     name: c.name || "",
//     slug: c.slug || "",
//     description: c.description || "",
//     status: c.status === "Inactive" ? "Inactive" : "Active",
//     sortOrder: typeof c.sortOrder === "number" ? c.sortOrder : 0,
//   };
// }

// export default function FurnitureCategoriesPage() {
//   const [categories, setCategories] = useState<CategoryRow[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [search, setSearch] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [editing, setEditing] = useState<CategoryRow | null>(null);

//   const [form, setForm] = useState({
//     name: "",
//     description: "",
//     status: "Active" as "Active" | "Inactive",
//     sortOrder: 0,
//   });

//   async function load() {
//     setLoading(true);
//     try {
//       const data = await getAllCategories();
//       setCategories(data.map(mapToUi));
//     } catch (err) {
//       console.error("Failed to load categories:", err);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     load();
//   }, []);

//   const filtered = useMemo(() => {
//     const q = search.toLowerCase().trim();
//     if (!q) return categories;
//     return categories.filter(
//       (c) =>
//         c.name.toLowerCase().includes(q) ||
//         c.slug.toLowerCase().includes(q) ||
//         c.description.toLowerCase().includes(q)
//     );
//   }, [categories, search]);

//   const activeCount = categories.filter((c) => c.status === "Active").length;

//   function openCreate() {
//     setEditing(null);
//     setForm({
//       name: "",
//       description: "",
//       status: "Active",
//       sortOrder: categories.length,
//     });
//     setShowModal(true);
//   }

//   function openEdit(row: CategoryRow) {
//     setEditing(row);
//     setForm({
//       name: row.name,
//       description: row.description,
//       status: row.status,
//       sortOrder: row.sortOrder,
//     });
//     setShowModal(true);
//   }

//   async function handleSave() {
//     if (!form.name.trim()) return;
//     setSaving(true);
//     try {
//       if (editing) {
//         await updateCategory(editing.id, {
//           name: form.name.trim(),
//           description: form.description.trim(),
//           status: form.status,
//           sortOrder: form.sortOrder,
//         });
//       } else {
//         await createCategory({
//           name: form.name.trim(),
//           description: form.description.trim(),
//           status: form.status,
//           sortOrder: form.sortOrder,
//         });
//       }
//       setShowModal(false);
//       await load();
//     } catch (err) {
//       console.error("Failed to save category:", err);
//       alert("Unable to save category. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function handleDelete(id: string) {
//     if (!confirm("Delete this category?")) return;
//     try {
//       await deleteCategory(id);
//       setCategories((list) => list.filter((c) => c.id !== id));
//     } catch (err) {
//       console.error("Failed to delete category:", err);
//       alert("Unable to delete category.");
//     }
//   }

//   async function toggleStatus(row: CategoryRow) {
//     const next = row.status === "Active" ? "Inactive" : "Active";
//     setCategories((list) =>
//       list.map((c) => (c.id === row.id ? { ...c, status: next } : c))
//     );
//     try {
//       await updateCategory(row.id, { status: next });
//     } catch (err) {
//       console.error(err);
//       await load();
//     }
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f9f8] text-slate-800">
//       <main className="mx-auto max-w-[1200px] px-5 py-7 lg:px-8">
//         <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//           <div>
//             <p className="mb-1 text-xs font-medium text-slate-400">
//               Furniture / Catalog
//             </p>
//             <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
//               Categories
//             </h1>
//             <p className="mt-1 text-sm text-slate-500">
//               Create and manage product categories used across Products and the
//               website.
//             </p>
//           </div>

//           <button
//             type="button"
//             onClick={openCreate}
//             className="rounded-lg bg-[#176b57] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#125849]"
//           >
//             + Add Category
//           </button>
//         </div>

//         <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
//           <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
//             <p className="text-xs font-medium text-slate-400">Total</p>
//             <p className="mt-2 text-2xl font-semibold">
//               {loading ? "…" : categories.length}
//             </p>
//           </div>
//           <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
//             <p className="text-xs font-medium text-slate-400">Active</p>
//             <p className="mt-2 text-2xl font-semibold text-[#176b57]">
//               {loading ? "…" : activeCount}
//             </p>
//           </div>
//           <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
//             <p className="text-xs font-medium text-slate-400">Inactive</p>
//             <p className="mt-2 text-2xl font-semibold text-slate-500">
//               {loading ? "…" : categories.length - activeCount}
//             </p>
//           </div>
//         </div>

//         <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
//           <div className="border-b border-slate-100 p-4">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search categories…"
//               className="h-11 w-full max-w-md rounded-lg border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[#176b57] focus:ring-2 focus:ring-[#176b57]/15"
//             />
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[720px] border-collapse">
//               <thead>
//                 <tr className="border-b border-slate-100 bg-slate-50 text-left">
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
//                     Name
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
//                     Slug
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
//                     Status
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
//                     Order
//                   </th>
//                   <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-400">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={5}
//                       className="px-5 py-14 text-center text-sm text-slate-400"
//                     >
//                       Loading categories…
//                     </td>
//                   </tr>
//                 ) : filtered.length === 0 ? (
//                   <tr>
//                     <td
//                       colSpan={5}
//                       className="px-5 py-14 text-center text-sm text-slate-500"
//                     >
//                       No categories yet. Click{" "}
//                       <span className="font-semibold text-[#176b57]">
//                         + Add Category
//                       </span>{" "}
//                       to create one.
//                     </td>
//                   </tr>
//                 ) : (
//                   filtered.map((row) => (
//                     <tr
//                       key={row.id}
//                       className="border-b border-slate-50 transition hover:bg-slate-50/80"
//                     >
//                       <td className="px-5 py-4">
//                         <p className="text-sm font-semibold text-slate-800">
//                           {row.name}
//                         </p>
//                         {row.description && (
//                           <p className="mt-0.5 max-w-xs truncate text-xs text-slate-400">
//                             {row.description}
//                           </p>
//                         )}
//                       </td>
//                       <td className="px-5 py-4 text-xs text-slate-500">
//                         {row.slug || "—"}
//                       </td>
//                       <td className="px-5 py-4">
//                         <button
//                           type="button"
//                           onClick={() => toggleStatus(row)}
//                           className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
//                             row.status === "Active"
//                               ? "bg-[#e8f5ef] text-[#176b57]"
//                               : "bg-slate-100 text-slate-500"
//                           }`}
//                         >
//                           {row.status}
//                         </button>
//                       </td>
//                       <td className="px-5 py-4 text-sm text-slate-600">
//                         {row.sortOrder}
//                       </td>
//                       <td className="px-5 py-4 text-right">
//                         <div className="flex justify-end gap-2">
//                           <button
//                             type="button"
//                             onClick={() => openEdit(row)}
//                             className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:border-[#176b57] hover:text-[#176b57]"
//                           >
//                             Edit
//                           </button>
//                           <button
//                             type="button"
//                             onClick={() => handleDelete(row.id)}
//                             className="rounded-md border border-red-100 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-5
// 0"
//                           >
//                             Delete
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
//       </main>

//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="w-full max-w-md overflow-hidden rounded-xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
//               <div>
//                 <h2 className="text-lg font-semibold text-slate-900">
//                   {editing ? "Edit Category" : "Add Category"}
//                 </h2>
//                 <p className="mt-0.5 text-xs text-slate-400">
//                   Categories appear on products and the website catalog.
//                 </p>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setShowModal(false)}
//                 className="text-xl text-slate-400 hover:text-slate-700"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="space-y-4 px-5 py-5">
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                   Name *
//                 </label>
//                 <input
//                   value={form.name}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, name: e.target.value }))
//                   }
//                   placeholder="e.g. Sofas, Dining, Bedroom"
//                   className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b57] focus:ring-2 focus:ring-[#176b57]/15"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                   Description
//                 </label>
//                 <textarea
//                   value={form.description}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, description: e.target.value }))
//                   }
//                   rows={3}
//                   placeholder="Optional short description"
//                   className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b57] focus:ring-2 focus:ring-[#176b57]/15"
//                 />
//               </div>

//               <div className="grid grid-cols-2 gap-3">
//                 <div>
//                   <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                     Status
//                   </label>
//                   <select
//                     value={form.status}
//                     onChange={(e) =>
//                       setForm((f) => ({
//                         ...f,
//                         status: e.target.value as "Active" | "Inactive",
//                       }))
//                     }
//                     className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none focus:border-[#176b57]"
//                   >
//                     <option value="Active">Active</option>
//                     <option value="Inactive">Inactive</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                     Sort order
//                   </label>
//                   <input
//                     type="number"
//                     value={form.sortOrder}
//                     onChange={(e) =>
//                       setForm((f) => ({
//                         ...f,
//                         sortOrder: Number(e.target.value) || 0,
//                       }))
//                     }
//                     className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b57]"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="flex justify-end gap-2 border-t border-slate-100 px-5 py-4">
//               <button
//                 type="button"
//                 onClick={() => setShowModal(false)}
//                 className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 onClick={handleSave}
//                 disabled={saving || !form.name.trim()}
//                 className="rounded-lg bg-[#176b57] px-4 py-2 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//               >
//                 {saving ? "Saving…" : editing ? "Update" : "Create"}
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
//   getAllCategories,
//   createCategory,
//   updateCategory,
//   deleteCategory,
//   type FurnitureCategory,
// } from "@/modules/furniture/services/categoryService";

// type Row = {
//   id: string;
//   name: string;
//   slug: string;
//   description: string;
//   status: "Active" | "Inactive";
// //   sortOrder: number;
// };

// function mapToUi(c: FurnitureCategory): Row {
//   return {
//     id: c.id,
//     name: c.name || "",
//     slug: c.slug || "",
//     description: c.description || "",
//     status: c.status === "Inactive" ? "Inactive" : "Active",
//     // sortOrder: typeof c.sortOrder === "number" ? c.sortOrder : 0,
//   };
// }

// export default function FurnitureCategoriesPage() {
//   const [rows, setRows] = useState<Row[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [search, setSearch] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [editing, setEditing] = useState<Row | null>(null);
//   const [form, setForm] = useState({
//     name: "",
//     description: "",
//     status: "Active" as "Active" | "Inactive",
//     sortOrder: 0,
//   });

//   async function load() {
//     setLoading(true);
//     try {
//       const data = await getAllCategories();
//       setRows(data.map(mapToUi));
//     } catch (e) {
//       console.error(e);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     load();
//   }, []);

//   const filtered = useMemo(() => {
//     const q = search.toLowerCase().trim();
//     if (!q) return rows;
//     return rows.filter(
//       (r) =>
//         r.name.toLowerCase().includes(q) ||
//         r.slug.toLowerCase().includes(q) ||
//         r.description.toLowerCase().includes(q)
//     );
//   }, [rows, search]);

//   function openCreate() {
//     setEditing(null);
//     setForm({
//       name: "",
//       description: "",
//       status: "Active",
//       sortOrder: rows.length,
//     });
//     setShowModal(true);
//   }

//   function openEdit(row: Row) {
//     setEditing(row);
//     setForm({
//       name: row.name,
//       description: row.description,
//       status: row.status,
//       sortOrder: row.sortOrder,
//     });
//     setShowModal(true);
//   }

//   async function handleSave() {
//     if (!form.name.trim()) return;
//     setSaving(true);
//     try {
//       if (editing) {
//         await updateCategory(editing.id, {
//           name: form.name.trim(),
//           description: form.description.trim(),
//           status: form.status,
//         //   sortOrder: form.sortOrder,
//         });
//       } else {
//         await createCategory({
//           name: form.name.trim(),
//           description: form.description.trim(),
//           status: form.status,
//         //   sortOrder: form.sortOrder,
//         });
//       }
//       setShowModal(false);
//       await load();
//     } catch (e) {
//       console.error(e);
//       alert("Unable to save category.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function handleDelete(id: string) {
//     if (!confirm("Delete this category?")) return;
//     try {
//       await deleteCategory(id);
//       setRows((list) => list.filter((r) => r.id !== id));
//     } catch (e) {
//       console.error(e);
//       alert("Unable to delete.");
//     }
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f9f8] text-slate-800">
//       <main className="mx-auto max-w-[1200px] px-5 py-7 lg:px-8">
//         <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//           <div>
//             <p className="mb-1 text-xs font-medium text-slate-400">
//               Furniture / Catalog
//             </p>
//             <h1 className="text-2xl font-semibold tracking-tight">Categories</h1>
//             <p className="mt-1 text-sm text-slate-500">
//               Main product groups — e.g. Sofa, Bed, Dining Table, Chair.
//             </p>
//           </div>
//           <button
//             type="button"
//             onClick={openCreate}
//             className="rounded-lg bg-[#176b57] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125849]"
//           >
//             + Add Category
//           </button>
//         </div>

//         <div className="mb-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
//           <div className="border-b border-slate-100 p-4">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search categories…"
//               className="h-11 w-full max-w-md rounded-lg border border-slate-200 px-4 text-sm outline-none focus:border-[#176b57] focus:ring-2 focus:ring-[#176b57]/15"
//             />
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[700px]">
//               <thead>
//                 <tr className="border-b border-slate-100 bg-slate-50 text-left">
//                   <th className="px-5 py-3 text-xs font-semibold uppercase text-slate-400">
//                     Name
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase text-slate-400">
//                     Slug
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase text-slate-400">
//                     Status
//                   </th>
//                   <th className="px-5 py-3 text-right text-xs font-semibold uppercase text-slate-400">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {loading ? (
//                   <tr>
//                     <td colSpan={4} className="px-5 py-14 text-center text-sm text-slate-400">
//                       Loading…
//                     </td>
//                   </tr>
//                 ) : filtered.length === 0 ? (
//                   <tr>
//                     <td colSpan={4} className="px-5 py-14 text-center text-sm text-slate-500">
//                       No categories. Add Sofa, Bed, Dining Table, etc.
//                     </td>
//                   </tr>
//                 ) : (
//                   filtered.map((row) => (
//                     <tr key={row.id} className="border-b border-slate-50 hover:bg-slate-50/80">
//                       <td className="px-5 py-4">
//                         <p className="text-sm font-semibold">{row.name}</p>
//                         {row.description && (
//                           <p className="mt-0.5 text-xs text-slate-400">{row.description}</p>
//                         )}
//                       </td>
//                       <td className="px-5 py-4 text-xs text-slate-500">{row.slug || "—"}</td>
//                       <td className="px-5 py-4">
//                         <span
//                           className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
//                             row.status === "Active"
//                               ? "bg-[#e8f5ef] text-[#176b57]"
//                               : "bg-slate-100 text-slate-500"
//                           }`}
//                         >
//                           {row.status}
//                         </span>
//                       </td>
//                       <td className="px-5 py-4 text-right">
//                         <button
//                           type="button"
//                           onClick={() => openEdit(row)}
//                           className="mr-2 rounded-md border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:border-[#176b57] hover:text-[#176b57]"
//                         >
//                           Edit
//                         </button>
//                         <button
//                           type="button"
//                           onClick={() => handleDelete(row.id)}
//                           className="rounded-md border border-red-100 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50"
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </main>

//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="w-full max-w-md rounded-xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
//               <h2 className="text-lg font-semibold">
//                 {editing ? "Edit Category" : "Add Category"}
//               </h2>
//               <button type="button" onClick={() => setShowModal(false)} className="text-xl text-slate-400">
//                 ×
//               </button>
//             </div>
//             <div className="space-y-4 px-5 py-5">
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium">Name *</label>
//                 <input
//                   value={form.name}
//                   onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
//                   placeholder="Sofa, Bed, Dining Table…"
//                   className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b57]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium">Description</label>
//                 <textarea
//                   value={form.description}
//                   onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
//                   rows={3}
//                   className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#176b57]"
//                 />
//               </div>
//               <div className="grid grid-cols-2 gap-3">
//                 <div>
//                   <label className="mb-1.5 block text-sm font-medium">Status</label>
//                   <select
//                     value={form.status}
//                     onChange={(e) =>
//                       setForm((f) => ({
//                         ...f,
//                         status: e.target.value as "Active" | "Inactive",
//                       }))
//                     }
//                     className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm"
//                   >
//                     <option value="Active">Active</option>
//                     <option value="Inactive">Inactive</option>
//                   </select>
//                 </div>
//                 {/* <div>
//                   <label className="mb-1.5 block text-sm font-medium">Sort order</label>
//                   <input
//                     type="number"
//                     value={form.sortOrder}
//                     onChange={(e) =>
//                       setForm((f) => ({ ...f, sortOrder: Number(e.target.value) || 0 }))
//                     }
//                     className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm"
//                   />
//                 </div> */}
//               </div>
//             </div>
//             <div className="flex justify-end gap-2 border-t border-slate-100 px-5 py-4">
//               <button
//                 type="button"
//                 onClick={() => setShowModal(false)}
//                 className="rounded-lg border border-slate-200 px-4 py-2 text-sm"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 onClick={handleSave}
//                 disabled={saving || !form.name.trim()}
//                 className="rounded-lg bg-[#176b57] px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
//               >
//                 {saving ? "Saving…" : editing ? "Update" : "Create"}
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
//   getAllCategories,
//   createCategory,
//   updateCategory,
//   deleteCategory,
//   type FurnitureCategory,
// } from "@/modules/furniture/services/categoryService";

// type Row = {
//   id: string;
//   name: string;
//   slug: string;
//   description: string;
//   status: "Active" | "Inactive";
// };

// function mapToUi(c: FurnitureCategory): Row {
//   return {
//     id: c.id,
//     name: c.name || "",
//     slug: c.slug || "",
//     description: c.description || "",
//     status: c.status === "Inactive" ? "Inactive" : "Active",
//   };
// }

// export default function FurnitureCategoriesPage() {
//   const [rows, setRows] = useState<Row[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [search, setSearch] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [editing, setEditing] = useState<Row | null>(null);
//   const [form, setForm] = useState({
//     name: "",
//     description: "",
//     status: "Active" as "Active" | "Inactive",
//   });

//   async function load() {
//     setLoading(true);
//     try {
//       const data = await getAllCategories();
//       setRows(data.map(mapToUi));
//     } catch (e) {
//       console.error(e);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     load();
//   }, []);

//   const filtered = useMemo(() => {
//     const q = search.toLowerCase().trim();
//     if (!q) return rows;
//     return rows.filter(
//       (r) =>
//         r.name.toLowerCase().includes(q) ||
//         r.slug.toLowerCase().includes(q) ||
//         r.description.toLowerCase().includes(q)
//     );
//   }, [rows, search]);

//   function openCreate() {
//     setEditing(null);
//     setForm({
//       name: "",
//       description: "",
//       status: "Active",
//     });
//     setShowModal(true);
//   }

//   function openEdit(row: Row) {
//     setEditing(row);
//     setForm({
//       name: row.name,
//       description: row.description,
//       status: row.status,
//     });
//     setShowModal(true);
//   }

//   async function handleSave() {
//     if (!form.name.trim()) return;
//     setSaving(true);
//     try {
//       if (editing) {
//         await updateCategory(editing.id, {
//           name: form.name.trim(),
//           description: form.description.trim(),
//           status: form.status,
//         });
//       } else {
//         await createCategory({
//           name: form.name.trim(),
//           description: form.description.trim(),
//           status: form.status,
//         });
//       }
//       setShowModal(false);
//       await load();
//     } catch (e) {
//       console.error(e);
//       alert("Unable to save category.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function handleDelete(id: string) {
//     if (!confirm("Delete this category?")) return;
//     try {
//       await deleteCategory(id);
//       setRows((list) => list.filter((r) => r.id !== id));
//     } catch (e) {
//       console.error(e);
//       alert("Unable to delete.");
//     }
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f9f8] text-slate-800">
//       <main className="mx-auto max-w-[1200px] px-5 py-7 lg:px-8">
//         <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//           <div>
//             <p className="mb-1 text-xs font-medium text-slate-400">
//               Furniture / Catalog
//             </p>
//             <h1 className="text-2xl font-semibold tracking-tight">Categories</h1>
//             <p className="mt-1 text-sm text-slate-500">
//               Main product groups — e.g. Sofa, Bed, Dining Table, Chair.
//             </p>
//           </div>
//           <button
//             type="button"
//             onClick={openCreate}
//             className="rounded-lg bg-[#176b57] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125849]"
//           >
//             + Add Category
//           </button>
//         </div>

//         <div className="mb-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
//           <div className="border-b border-slate-100 p-4">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search categories…"
//               className="h-11 w-full max-w-md rounded-lg border border-slate-200 px-4 text-sm outline-none focus:border-[#176b57] focus:ring-2 focus:ring-[#176b57]/15"
//             />
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[700px]">
//               <thead>
//                 <tr className="border-b border-slate-100 bg-slate-50 text-left">
//                   <th className="px-5 py-3 text-xs font-semibold uppercase text-slate-400">
//                     Name
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase text-slate-400">
//                     Slug
//                   </th>
//                   <th className="px-5 py-3 text-xs font-semibold uppercase text-slate-400">
//                     Status
//                   </th>
//                   <th className="px-5 py-3 text-right text-xs font-semibold uppercase text-slate-400">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={4}
//                       className="px-5 py-14 text-center text-sm text-slate-400"
//                     >
//                       Loading…
//                     </td>
//                   </tr>
//                 ) : filtered.length === 0 ? (
//                   <tr>
//                     <td
//                       colSpan={4}
//                       className="px-5 py-14 text-center text-sm text-slate-500"
//                     >
//                       No categories. Add Sofa, Bed, Dining Table, etc.
//                     </td>
//                   </tr>
//                 ) : (
//                   filtered.map((row) => (
//                     <tr
//                       key={row.id}
//                       className="border-b border-slate-50 hover:bg-slate-50/80"
//                     >
//                       <td className="px-5 py-4">
//                         <p className="text-sm font-semibold">{row.name}</p>
//                         {row.description && (
//                           <p className="mt-0.5 text-xs text-slate-400">
//                             {row.description}
//                           </p>
//                         )}
//                       </td>
//                       <td className="px-5 py-4 text-xs text-slate-500">
//                         {row.slug || "—"}
//                       </td>
//                       <td className="px-5 py-4">
//                         <span
//                           className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
//                             row.status === "Active"
//                               ? "bg-[#e8f5ef] text-[#176b57]"
//                               : "bg-slate-100 text-slate-500"
//                           }`}
//                         >
//                           {row.status}
//                         </span>
//                       </td>
//                       <td className="px-5 py-4 text-right">
//                         <button
//                           type="button"
//                           onClick={() => openEdit(row)}
//                           className="mr-2 rounded-md border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:border-[#176b57] hover:text-[#176b57]"
//                         >
//                           Edit
//                         </button>
//                         <button
//                           type="button"
//                           onClick={() => handleDelete(row.id)}
//                           className="rounded-md border border-red-100 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50"
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </main>

//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="w-full max-w-md rounded-xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
//               <h2 className="text-lg font-semibold">
//                 {editing ? "Edit Category" : "Add Category"}
//               </h2>
//               <button
//                 type="button"
//                 onClick={() => setShowModal(false)}
//                 className="text-xl text-slate-400"
//               >
//                 ×
//               </button>
//             </div>
//             <div className="space-y-4 px-5 py-5">
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium">Name *</label>
//                 <input
//                   value={form.name}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, name: e.target.value }))
//                   }
//                   placeholder="Living Room, Bed Room..."
//                   className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b57]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium">
//                   Description
//                 </label>
//                 <textarea
//                   value={form.description}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, description: e.target.value }))
//                   }
//                   rows={3}
//                   className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#176b57]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium">Status</label>
//                 <select
//                   value={form.status}
//                   onChange={(e) =>
//                     setForm((f) => ({
//                       ...f,
//                       status: e.target.value as "Active" | "Inactive",
//                     }))
//                   }
//                   className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm"
//                 >
//                   <option value="Active">Active</option>
//                   <option value="Inactive">Inactive</option>
//                 </select>
//               </div>
//             </div>
//             <div className="flex justify-end gap-2 border-t border-slate-100 px-5 py-4">
//               <button
//                 type="button"
//                 onClick={() => setShowModal(false)}
//                 className="rounded-lg border border-slate-200 px-4 py-2 text-sm"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 onClick={handleSave}
//                 disabled={saving || !form.name.trim()}
//                 className="rounded-lg bg-[#176b57] px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
//               >
//                 {saving ? "Saving…" : editing ? "Update" : "Create"}
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
//   getAllCategories,
//   createCategory,
//   updateCategory,
//   deleteCategory,
//   type FurnitureCategory,
// } from "@/modules/furniture/services/categoryService";
// import { Pencil, Trash2 } from "lucide-react";

// type Row = {
//   id: string;
//   name: string;
//   slug: string;
//   description: string;
//   status: "Active" | "Inactive";
// };

// function mapToUi(c: FurnitureCategory): Row {
//   return {
//     id: c.id,
//     name: c.name || "",
//     slug: c.slug || "",
//     description: c.description || "",
//     status: c.status === "Inactive" ? "Inactive" : "Active",
//   };
// }

// export default function FurnitureCategoriesPage() {
//   const [rows, setRows] = useState<Row[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [search, setSearch] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [editing, setEditing] = useState<Row | null>(null);
//   const [form, setForm] = useState({
//     name: "",
//     description: "",
//     status: "Active" as "Active" | "Inactive",
//   });

//   async function load() {
//     setLoading(true);
//     try {
//       const data = await getAllCategories();
//       setRows(data.map(mapToUi));
//     } catch (e) {
//       console.error(e);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     load();
//   }, []);

//   const filtered = useMemo(() => {
//     const q = search.toLowerCase().trim();
//     if (!q) return rows;
//     return rows.filter(
//       (r) =>
//         r.name.toLowerCase().includes(q) ||
//         r.slug.toLowerCase().includes(q) ||
//         r.description.toLowerCase().includes(q)
//     );
//   }, [rows, search]);

//   function openCreate() {
//     setEditing(null);
//     setForm({
//       name: "",
//       description: "",
//       status: "Active",
//     });
//     setShowModal(true);
//   }

//   function openEdit(row: Row) {
//     setEditing(row);
//     setForm({
//       name: row.name,
//       description: row.description,
//       status: row.status,
//     });
//     setShowModal(true);
//   }

//   async function handleSave() {
//     if (!form.name.trim()) return;
//     setSaving(true);
//     try {
//       if (editing) {
//         await updateCategory(editing.id, {
//           name: form.name.trim(),
//           description: form.description.trim(),
//           status: form.status,
//         });
//       } else {
//         await createCategory({
//           name: form.name.trim(),
//           description: form.description.trim(),
//           status: form.status,
//         });
//       }
//       setShowModal(false);
//       await load();
//     } catch (e) {
//       console.error(e);
//       alert("Unable to save category.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function handleDelete(id: string) {
//     if (!confirm("Delete this category?")) return;
//     try {
//       await deleteCategory(id);
//       setRows((list) => list.filter((r) => r.id !== id));
//     } catch (e) {
//       console.error(e);
//       alert("Unable to delete.");
//     }
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f9f8] text-slate-800">
//       <main className="mx-auto max-w-[1200px] px-3 py-5 sm:px-5 sm:py-7 lg:px-8">
//         {/* Title + Add button same row */}
//         <div className="mb-5 flex items-start justify-between gap-3 sm:mb-7">
//           <div className="min-w-0 flex-1">
//             <p className="mb-1 text-xs font-medium text-slate-400">
//               Furniture / Catalog
//             </p>
//             <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
//               Categories
//             </h1>
//             <p className="mt-1 text-xs text-slate-500 sm:text-sm">
//               Main product groups — e.g. Sofa, Bed, Dining Table, Chair.
//             </p>
//           </div>
//           <button
//             type="button"
//             onClick={openCreate}
//             className="shrink-0 rounded-lg bg-[#176b57] px-3 py-2.5 text-xs font-semibold text-white hover:bg-[#125849] sm:px-5 sm:text-sm"
//           >
//             + Add Category
//           </button>
//         </div>

//         <div className="mb-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
//           <div className="border-b border-slate-100 p-3 sm:p-4">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search categories…"
//               className="h-11 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none focus:border-[#176b57] focus:ring-2 focus:ring-[#176b57]/15 sm:max-w-md"
//             />
//           </div>

//           {/* No min-width → no horizontal scroll */}
//           <div className="w-full overflow-x-hidden">
//             <table className="w-full table-fixed">
//               <thead>
//                 <tr className="border-b border-slate-100 bg-slate-50 text-left">
//                   <th className="w-[40%] px-3 py-3 text-xs font-semibold uppercase text-slate-400 sm:w-auto sm:px-5">
//                     Name
//                   </th>
//                   <th className="hidden w-[25%] px-3 py-3 text-xs font-semibold uppercase text-slate-400 sm:table-cell sm:px-5">
//                     Slug
//                   </th>
//                   <th className="w-[25%] px-3 py-3 text-xs font-semibold uppercase text-slate-400 sm:w-auto sm:px-5">
//                     Status
//                   </th>
//                   <th className="w-[35%] px-3 py-3 text-right text-xs font-semibold uppercase text-slate-400 sm:w-auto sm:px-5">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={4}
//                       className="px-3 py-14 text-center text-sm text-slate-400 sm:px-5"
//                     >
//                       Loading…
//                     </td>
//                   </tr>
//                 ) : filtered.length === 0 ? (
//                   <tr>
//                     <td
//                       colSpan={4}
//                       className="px-3 py-14 text-center text-sm text-slate-500 sm:px-5"
//                     >
//                       No categories. Add Sofa, Bed, Dining Table, etc.
//                     </td>
//                   </tr>
//                 ) : (
//                   filtered.map((row) => (
//                     <tr
//                       key={row.id}
//                       className="border-b border-slate-50 hover:bg-slate-50/80"
//                     >
//                       <td className="px-3 py-3 sm:px-5 sm:py-4">
//                         <p className="truncate text-sm font-semibold">
//                           {row.name}
//                         </p>
//                         {row.description && (
//                           <p className="mt-0.5 line-clamp-2 text-xs text-slate-400">
//                             {row.description}
//                           </p>
//                         )}
//                         {/* Slug under name on mobile */}
//                         <p className="mt-0.5 truncate text-[10px] text-slate-400 sm:hidden">
//                           {row.slug || "—"}
//                         </p>
//                       </td>
//                       <td className="hidden truncate px-3 py-3 text-xs text-slate-500 sm:table-cell sm:px-5 sm:py-4">
//                         {row.slug || "—"}
//                       </td>
//                       <td className="px-3 py-3 sm:px-5 sm:py-4">
//                         <span
//                           className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-medium sm:px-2.5 sm:py-1 sm:text-xs ${
//                             row.status === "Active"
//                               ? "bg-[#e8f5ef] text-[#176b57]"
//                               : "bg-slate-100 text-slate-500"
//                           }`}
//                         >
//                           {row.status}
//                         </span>
//                       </td>
//                       {/* <td className="px-3 py-3 text-right sm:px-5 sm:py-4">
//                         <div className="flex flex-wrap items-center justify-end gap-1.5">
//                           <button
//                             type="button"
//                             onClick={() => openEdit(row)}
//                             className="rounded-md border border-slate-200 px-2.5 py-1.5 text-[11px] font-semibold text-slate-600 hover:border-[#176b57] hover:text-[#176b57] sm:px-3 sm:text-xs"
//                           >
//                             Edit
//                           </button>
//                           <button
//                             type="button"
//                             onClick={() => handleDelete(row.id)}
//                             className="rounded-md border border-red-100 px-2.5 py-1.5 text-[11px] font-semibold text-red-600 hover:bg-red-50 sm:px-3 sm:text-xs"
//                           >
//                             Delete
//                           </button>
//                         </div>
//                       </td> */}

//                       {/* <td className="px-3 py-3 text-right sm:px-5 sm:py-4">
//                         <div className="flex items-center justify-end gap-1.5">
//                           <button
//                             type="button"
//                             onClick={() => openEdit(row)}
//                             title="Edit"
//                             aria-label="Edit"
//                             className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-600 hover:border-[#176b57] hover:text-[#176b57]"
//                           >
//                             ✎
//                           </button>
//                           <button
//                             type="button"
//                             onClick={() => handleDelete(row.id)}
//                             title="Delete"
//                             aria-label="Delete"
//                             className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-red-100 text-red-600 hover:bg-red-50"
//                           >
//                             🗑
//                           </button>
//                         </div>
//                       </td> */}

//                       <td className="px-3 py-3 text-right sm:px-5 sm:py-4">
//                         <div className="flex items-center justify-end gap-1.5">
//                           <button
//                             type="button"
//                             onClick={() => openEdit(row)}
//                             title="Edit"
//                             aria-label="Edit"
//                             className="inline-flex h-8 w-8 items-center justify-center rounded-md  border-slate-200 text-slate-600 hover:border-[#176b57] hover:text-[#176b57]"
//                           >
//                             <Pencil className="h-4 w-4" />
//                           </button>
//                           <button
//                             type="button"
//                             onClick={() => handleDelete(row.id)}
//                             title="Delete"
//                             aria-label="Delete"
//                             className="inline-flex h-8 w-8 items-center justify-center rounded-md  border-red-100 text-red-600 hover:bg-red-50"
//                           >
//                             <Trash2 className="h-4 w-4" />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </main>

//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="w-full max-w-md rounded-xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
//               <h2 className="text-lg font-semibold">
//                 {editing ? "Edit Category" : "Add Category"}
//               </h2>
//               <button
//                 type="button"
//                 onClick={() => setShowModal(false)}
//                 className="text-xl text-slate-400"
//               >
//                 ×
//               </button>
//             </div>
//             <div className="space-y-4 px-5 py-5">
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium">
//                   Name *
//                 </label>
//                 <input
//                   value={form.name}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, name: e.target.value }))
//                   }
//                   placeholder="Living Room, Bed Room..."
//                   className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b57]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium">
//                   Description
//                 </label>
//                 <textarea
//                   value={form.description}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, description: e.target.value }))
//                   }
//                   rows={3}
//                   className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#176b57]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium">
//                   Status
//                 </label>
//                 <select
//                   value={form.status}
//                   onChange={(e) =>
//                     setForm((f) => ({
//                       ...f,
//                       status: e.target.value as "Active" | "Inactive",
//                     }))
//                   }
//                   className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm"
//                 >
//                   <option value="Active">Active</option>
//                   <option value="Inactive">Inactive</option>
//                 </select>
//               </div>
//             </div>
//             <div className="flex justify-end gap-2 border-t border-slate-100 px-5 py-4">
//               <button
//                 type="button"
//                 onClick={() => setShowModal(false)}
//                 className="rounded-lg border border-slate-200 px-4 py-2 text-sm"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 onClick={handleSave}
//                 disabled={saving || !form.name.trim()}
//                 className="rounded-lg bg-[#176b57] px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
//               >
//                 {saving ? "Saving…" : editing ? "Update" : "Create"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { useEffect, useMemo, useState } from "react";
import { Filter, Pencil, Trash2 } from "lucide-react";
import {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  type FurnitureCategory,
} from "@/modules/furniture/services/categoryService";

type Row = {
  id: string;
  name: string;
  slug: string;
  description: string;
  status: "Active" | "Inactive";
};

function mapToUi(c: FurnitureCategory): Row {
  return {
    id: c.id,
    name: c.name || "",
    slug: c.slug || "",
    description: c.description || "",
    status: c.status === "Inactive" ? "Inactive" : "Active",
  };
}

export default function FurnitureCategoriesPage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "Active" | "Inactive">(
    "all"
  );
  const [showFilter, setShowFilter] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<Row | null>(null);
  const [form, setForm] = useState({
    name: "",
    description: "",
    status: "Active" as "Active" | "Inactive",
  });

  async function load() {
    setLoading(true);
    try {
      const data = await getAllCategories();
      setRows(data.map(mapToUi));
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return rows.filter((r) => {
      const matchStatus =
        statusFilter === "all" || r.status === statusFilter;
      const matchQ =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.slug.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q);
      return matchStatus && matchQ;
    });
  }, [rows, search, statusFilter]);

  function openCreate() {
    setEditing(null);
    setForm({ name: "", description: "", status: "Active" });
    setShowModal(true);
  }

  function openEdit(row: Row) {
    setEditing(row);
    setForm({
      name: row.name,
      description: row.description,
      status: row.status,
    });
    setShowModal(true);
  }

  async function handleSave() {
    if (!form.name.trim()) return;
    setSaving(true);
    try {
      if (editing) {
        await updateCategory(editing.id, {
          name: form.name.trim(),
          description: form.description.trim(),
          status: form.status,
        });
      } else {
        await createCategory({
          name: form.name.trim(),
          description: form.description.trim(),
          status: form.status,
        });
      }
      setShowModal(false);
      await load();
    } catch (e) {
      console.error(e);
      alert("Unable to save category.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this category?")) return;
    try {
      await deleteCategory(id);
      setRows((list) => list.filter((r) => r.id !== id));
    } catch (e) {
      console.error(e);
      alert("Unable to delete.");
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f9f8] text-slate-800">
      <main className="mx-auto max-w-[1200px] px-3 py-5 sm:px-5 sm:py-7 lg:px-8">
        <div className="mb-5 flex items-start justify-between gap-3 sm:mb-7">
          <div className="min-w-0 flex-1">
            <p className="mb-1 text-xs font-medium text-slate-400">
              Furniture / Catalog
            </p>
            <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Categories
            </h1>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Main product groups — e.g. Sofa, Bed, Dining Table, Chair.
            </p>
          </div>
          <button
            type="button"
            onClick={openCreate}
            className="shrink-0 rounded-lg bg-[#176b57] px-3 py-2.5 text-xs font-semibold text-white hover:bg-[#125849] sm:px-5 sm:text-sm"
          >
            + Add Category
          </button>
        </div>

        <div className="mb-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {/* Search + Filter side by side */}
          <div className="flex gap-2 border-b border-slate-100 p-3 sm:p-4">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search categories…"
              className="h-12 min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#176b57] focus:ring-2 focus:ring-[#176b57]/15"
            />
            <div className="relative shrink-0">
              {/* <button
                type="button"
                onClick={() => setShowFilter((v) => !v)}
                className={`inline-flex h-12 items-center gap-2 rounded-xl border px-3 text-sm font-medium sm:px-4 ${
                  statusFilter !== "all"
                    ? "border-[#176b57] bg-[#e8f5ef] text-[#176b57]"
                    : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                <Filter className="h-4 w-4" />
                <span className="hidden sm:inline">Filter</span>
              </button> */}
              {showFilter && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowFilter(false)}
                  />
                  <div className="absolute right-0 z-20 mt-2 w-48 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-lg">
                    {(
                      [
                        ["all", "All statuses"],
                        ["Active", "Active"],
                        ["Inactive", "Inactive"],
                      ] as const
                    ).map(([value, label]) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => {
                          setStatusFilter(value);
                          setShowFilter(false);
                        }}
                        className={`flex w-full px-4 py-2.5 text-left text-sm hover:bg-slate-50 ${
                          statusFilter === value
                            ? "font-semibold text-[#176b57]"
                            : "text-slate-700"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* <div className="w-full overflow-x-hidden"> */}
          <div className="w-full">
            {/* <table className="w-full table-fixed">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50 text-left">
                  <th className="w-[40%] px-3 py-3 text-xs font-semibold uppercase text-slate-400 sm:px-5">
                    Name
                  </th>
                  <th className="hidden px-5 py-3 text-xs font-semibold uppercase text-slate-400 sm:table-cell">
                    Slug
                  </th>
                  <th className="w-[25%] px-3 py-3 text-xs font-semibold uppercase text-slate-400 sm:px-5">
                    Status
                  </th>
                  <th className="w-[35%] px-3 py-3 text-right text-xs font-semibold uppercase text-slate-400 sm:px-5">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-3 py-14 text-center text-sm text-slate-400"
                    >
                      Loading…
                    </td>
                  </tr>
                ) : filtered.length === 0 ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-3 py-14 text-center text-sm text-slate-500"
                    >
                      No categories. Add Sofa, Bed, Dining Table, etc.
                    </td>
                  </tr>
                ) : (
                  filtered.map((row) => (
                    <tr
                      key={row.id}
                      className="border-b border-slate-50 hover:bg-slate-50/80"
                    >
                      <td className="px-3 py-3 sm:px-5 sm:py-4">
                        <p className="truncate text-sm font-semibold">
                          {row.name}
                        </p>
                        {row.description && (
                          <p className="mt-0.5 line-clamp-2 text-xs text-slate-400">
                            {row.description}
                          </p>
                        )}
                        <p className="mt-0.5 truncate text-[10px] text-slate-400 sm:hidden">
                          {row.slug || "—"}
                        </p>
                      </td>
                      <td className="hidden truncate px-5 py-4 text-xs text-slate-500 sm:table-cell">
                        {row.slug || "—"}
                      </td>
                      <td className="px-3 py-3 sm:px-5 sm:py-4">
                        <span
                          className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-medium sm:px-2.5 sm:py-1 sm:text-xs ${
                            row.status === "Active"
                              ? "bg-[#e8f5ef] text-[#176b57]"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-right sm:px-5 sm:py-4">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            type="button"
                            onClick={() => openEdit(row)}
                            title="Edit"
                            aria-label="Edit"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-600 hover:border-[#176b57] hover:text-[#176b57]"
                          >
                            <Pencil className="h-4 w-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(row.id)}
                            title="Delete"
                            aria-label="Delete"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-red-100 text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table> */}

            <table className="w-full">
  <thead>
    <tr className="border-b border-slate-100 bg-slate-50 text-left">
      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:px-5">
        Name
      </th>
      <th className="hidden px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:table-cell sm:px-5">
        Slug
      </th>
      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:px-5">
        Status
      </th>
      <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-400 sm:px-5">
        Actions
      </th>
    </tr>
  </thead>
  <tbody>
    {loading ? (
      <tr>
        <td colSpan={4} className="px-4 py-14 text-center text-sm text-slate-400">
          Loading…
        </td>
      </tr>
    ) : filtered.length === 0 ? (
      <tr>
        <td colSpan={4} className="px-4 py-14 text-center text-sm text-slate-500">
          No categories. Add Sofa, Bed, Dining Table, etc.
        </td>
      </tr>
    ) : (
      filtered.map((row) => (
        <tr key={row.id} className="border-b border-slate-50 hover:bg-slate-50/80">
          <td className="px-4 py-3 sm:px-5 sm:py-4">
            <p className="text-sm font-semibold text-slate-800">{row.name}</p>
            {row.description ? (
              <p className="mt-0.5 line-clamp-2 text-xs text-slate-400">
                {row.description}
              </p>
            ) : null}
            <p className="mt-0.5 text-[10px] text-slate-400 sm:hidden">
              {row.slug || "—"}
            </p>
          </td>
          <td className="hidden px-4 py-3 text-xs text-slate-500 sm:table-cell sm:px-5 sm:py-4">
            {row.slug || "—"}
          </td>
          <td className="px-4 py-3 sm:px-5 sm:py-4">
            <span
              className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                row.status === "Active"
                  ? "bg-[#e8f5ef] text-[#176b57]"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              {row.status}
            </span>
          </td>
          <td className="px-4 py-3 text-right sm:px-5 sm:py-4">
            <div className="flex items-center justify-end gap-1.5">
              <button
                type="button"
                onClick={() => openEdit(row)}
                title="Edit"
                aria-label="Edit"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md  border-slate-200 text-slate-600 hover:border-[#176b57] hover:text-[#176b57]"
              >
                <Pencil className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => handleDelete(row.id)}
                title="Delete"
                aria-label="Delete"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md  border-red-100 text-red-600 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </td>
        </tr>
      ))
    )}
  </tbody>
</table>
          </div>
        </div>
      </main>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <h2 className="text-lg font-semibold">
                {editing ? "Edit Category" : "Add Category"}
              </h2>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="text-xl text-slate-400"
              >
                ×
              </button>
            </div>
            <div className="space-y-4 px-5 py-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium">
                  Name *
                </label>
                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  placeholder="Living Room, Bed Room..."
                  className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b57]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">
                  Description
                </label>
                <textarea
                  value={form.description}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, description: e.target.value }))
                  }
                  rows={3}
                  className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#176b57]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">
                  Status
                </label>
                <select
                  value={form.status}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      status: e.target.value as "Active" | "Inactive",
                    }))
                  }
                  className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-2 border-t border-slate-100 px-5 py-4">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                disabled={saving || !form.name.trim()}
                className="rounded-lg bg-[#176b57] px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
              >
                {saving ? "Saving…" : editing ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
