// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAllFinishes,
//   createFinish,
//   updateFinish,
//   deleteFinish,
//   type FurnitureFinish,
// } from "@/modules/furniture/services/finishService";

// type Row = {
//   id: string;
//   name: string;
//   slug: string;
//   description: string;
//   status: "Active" | "Inactive";
//   sortOrder: number;
// };

// function mapToUi(f: FurnitureFinish): Row {
//   return {
//     id: f.id,
//     name: f.name || "",
//     slug: f.slug || "",
//     description: f.description || "",
//     status: f.status === "Inactive" ? "Inactive" : "Active",
//     sortOrder: typeof f.sortOrder === "number" ? f.sortOrder : 0,
//   };
// }

// export default function FurnitureFinishesPage() {
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
//       const data = await getAllFinishes();
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
//         await updateFinish(editing.id, {
//           name: form.name.trim(),
//           description: form.description.trim(),
//           status: form.status,
//           sortOrder: form.sortOrder,
//         });
//       } else {
//         await createFinish({
//           name: form.name.trim(),
//           description: form.description.trim(),
//           status: form.status,
//           sortOrder: form.sortOrder,
//         });
//       }
//       setShowModal(false);
//       await load();
//     } catch (e) {
//       console.error(e);
//       alert("Unable to save finish.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function handleDelete(id: string) {
//     if (!confirm("Delete this finish?")) return;
//     try {
//       await deleteFinish(id);
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
//             <h1 className="text-2xl font-semibold tracking-tight">Finishes</h1>
//             <p className="mt-1 text-sm text-slate-500">
//               e.g. Matte Finish, Glossy Finish, Laminate, Veneer.
//             </p>
//           </div>
//           <button
//             type="button"
//             onClick={openCreate}
//             className="rounded-lg bg-[#176b57] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125849]"
//           >
//             + Add Finish
//           </button>
//         </div>

//         <div className="mb-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
//           <div className="border-b border-slate-100 p-4">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search finishes…"
//               className="h-11 w-full max-w-md rounded-lg border border-slate-200 px-4 text-sm outline-none focus:border-[#176b57]"
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
//                     <td colSpan={3} className="px-5 py-14 text-center text-sm text-slate-400">
//                       Loading…
//                     </td>
//                   </tr>
//                 ) : filtered.length === 0 ? (
//                   <tr>
//                     <td colSpan={3} className="px-5 py-14 text-center text-sm text-slate-500">
//                       No finishes. Add Matte Finish, Glossy Finish, etc.
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
//                           className="mr-2 rounded-md border border-slate-200 px-3 py-1.5 text-xs font-semibold"
//                         >
//                           Edit
//                         </button>
//                         <button
//                           type="button"
//                           onClick={() => handleDelete(row.id)}
//                           className="rounded-md border border-red-100 px-3 py-1.5 text-xs font-semibold text-red-600"
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
//                 {editing ? "Edit Finish" : "Add Finish"}
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
//                   placeholder="Matte Finish, Glossy Finish…"
//                   className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b57]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium">Description</label>
//                 <textarea
//                   value={form.description}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, description: e.target.value }))
//                   }
//                   rows={3}
//                   className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm"
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
//                 <div>
//                   <label className="mb-1.5 block text-sm font-medium">Sort order</label>
//                   <input
//                     type="number"
//                     value={form.sortOrder}
//                     onChange={(e) =>
//                       setForm((f) => ({ ...f, sortOrder: Number(e.target.value) || 0 }))
//                     }
//                     className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm"
//                   />
//                 </div>
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
//   getAllFinishes,
//   createFinish,
//   updateFinish,
//   deleteFinish,
//   type FurnitureFinish,
// } from "@/modules/furniture/services/finishService";

// type Row = {
//   id: string;
//   name: string;
//   slug: string;
//   description: string;
//   status: "Active" | "Inactive";
// };

// function mapToUi(f: FurnitureFinish): Row {
//   return {
//     id: f.id,
//     name: f.name || "",
//     slug: f.slug || "",
//     description: f.description || "",
//     status: f.status === "Inactive" ? "Inactive" : "Active",
//   };
// }

// export default function FurnitureFinishesPage() {
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
//       const data = await getAllFinishes();
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
//         r.description.toLowerCase().includes(q)
//     );
//   }, [rows, search]);

//   function openCreate() {
//     setEditing(null);
//     setForm({ name: "", description: "", status: "Active" });
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
//         await updateFinish(editing.id, {
//           name: form.name.trim(),
//           description: form.description.trim(),
//           status: form.status,
//         });
//       } else {
//         await createFinish({
//           name: form.name.trim(),
//           description: form.description.trim(),
//           status: form.status,
//         });
//       }
//       setShowModal(false);
//       await load();
//     } catch (e) {
//       console.error(e);
//       alert("Unable to save finish.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function handleDelete(id: string) {
//     if (!confirm("Delete this finish?")) return;
//     try {
//       await deleteFinish(id);
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
//             <h1 className="text-2xl font-semibold tracking-tight">Finishes</h1>
//             <p className="mt-1 text-sm text-slate-500">
//               e.g. Matte Finish, Glossy Finish, Laminate, Veneer.
//             </p>
//           </div>
//           <button
//             type="button"
//             onClick={openCreate}
//             className="rounded-lg bg-[#176b57] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125849]"
//           >
//             + Add Finish
//           </button>
//         </div>

//         <div className="mb-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
//           <div className="border-b border-slate-100 p-4">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search finishes…"
//               className="h-11 w-full max-w-md rounded-lg border border-slate-200 px-4 text-sm outline-none focus:border-[#176b57]"
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
//                       colSpan={3}
//                       className="px-5 py-14 text-center text-sm text-slate-400"
//                     >
//                       Loading…
//                     </td>
//                   </tr>
//                 ) : filtered.length === 0 ? (
//                   <tr>
//                     <td
//                       colSpan={3}
//                       className="px-5 py-14 text-center text-sm text-slate-500"
//                     >
//                       No finishes. Add Matte Finish, Glossy Finish, etc.
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
//                           className="mr-2 rounded-md border border-slate-200 px-3 py-1.5 text-xs font-semibold"
//                         >
//                           Edit
//                         </button>
//                         <button
//                           type="button"
//                           onClick={() => handleDelete(row.id)}
//                           className="rounded-md border border-red-100 px-3 py-1.5 text-xs font-semibold text-red-600"
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
//                 {editing ? "Edit Finish" : "Add Finish"}
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
//                   placeholder="Matte Finish, Glossy Finish…"
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
//                   className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm"
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

"use client";

import { useEffect, useMemo, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import {
  getAllFinishes,
  createFinish,
  updateFinish,
  deleteFinish,
  type FurnitureFinish,
} from "@/modules/furniture/services/finishService";

type Row = {
  id: string;
  name: string;
  slug: string;
  description: string;
  status: "Active" | "Inactive";
};

function mapToUi(f: FurnitureFinish): Row {
  return {
    id: f.id,
    name: f.name || "",
    slug: f.slug || "",
    description: f.description || "",
    status: f.status === "Inactive" ? "Inactive" : "Active",
  };
}

export default function FurnitureFinishesPage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");
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
      const data = await getAllFinishes();
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
    if (!q) return rows;
    return rows.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.slug.toLowerCase().includes(q)
    );
  }, [rows, search]);

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
        await updateFinish(editing.id, {
          name: form.name.trim(),
          description: form.description.trim(),
          status: form.status,
        });
      } else {
        await createFinish({
          name: form.name.trim(),
          description: form.description.trim(),
          status: form.status,
        });
      }
      setShowModal(false);
      await load();
    } catch (e) {
      console.error(e);
      alert("Unable to save finish.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this finish?")) return;
    try {
      await deleteFinish(id);
      setRows((list) => list.filter((r) => r.id !== id));
    } catch (e) {
      console.error(e);
      alert("Unable to delete.");
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f9f8] text-slate-800">
      <main className="mx-auto max-w-[1200px] px-3 py-5 sm:px-5 sm:py-7 lg:px-8">
        {/* Title + button same row */}
        <div className="mb-5 flex items-start justify-between gap-3 sm:mb-7">
          <div className="min-w-0 flex-1">
            <p className="mb-1 text-xs font-medium text-slate-400">
              Furniture / Catalog
            </p>
            <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Finishes
            </h1>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              e.g. Matte Finish, Glossy Finish, Laminate, Veneer.
            </p>
          </div>
          <button
            type="button"
            onClick={openCreate}
            className="shrink-0 rounded-lg bg-[#176b57] px-3 py-2.5 text-xs font-semibold text-white hover:bg-[#125849] sm:px-5 sm:text-sm"
          >
            + Add Finish
          </button>
        </div>

        <div className="mb-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {/* Search only — no filter */}
          <div className="border-b border-slate-100 p-3 sm:p-4">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search finishes…"
              className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#176b57] focus:ring-2 focus:ring-[#176b57]/15"
            />
          </div>

          {/* No min-width → no horizontal scroll */}
          <div className="w-full">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50 text-left">
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:px-5">
                    Name
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
                    <td
                      colSpan={3}
                      className="px-4 py-14 text-center text-sm text-slate-400"
                    >
                      Loading…
                    </td>
                  </tr>
                ) : filtered.length === 0 ? (
                  <tr>
                    <td
                      colSpan={3}
                      className="px-4 py-14 text-center text-sm text-slate-500"
                    >
                      No finishes. Add Matte Finish, Glossy Finish, etc.
                    </td>
                  </tr>
                ) : (
                  filtered.map((row) => (
                    <tr
                      key={row.id}
                      className="border-b border-slate-50 hover:bg-slate-50/80"
                    >
                      <td className="px-4 py-3 sm:px-5 sm:py-4">
                        <p className="text-sm font-semibold text-slate-800">
                          {row.name}
                        </p>
                        {row.description ? (
                          <p className="mt-0.5 line-clamp-2 text-xs text-slate-400">
                            {row.description}
                          </p>
                        ) : null}
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
                {editing ? "Edit Finish" : "Add Finish"}
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
                  placeholder="Matte Finish, Glossy Finish…"
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
                  className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm"
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
