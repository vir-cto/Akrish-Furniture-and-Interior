// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getAllMaterials,
//   createMaterial,
//   updateMaterial,
//   deleteMaterial,
//   type FurnitureMaterial,
// } from "@/modules/furniture/services/materialService";

// type Row = {
//   id: string;
//   name: string;
//   slug: string;
//   description: string;
//   status: "Active" | "Inactive";
//   sortOrder: number;
// };

// function mapToUi(m: FurnitureMaterial): Row {
//   return {
//     id: m.id,
//     name: m.name || "",
//     slug: m.slug || "",
//     description: m.description || "",
//     status: m.status === "Inactive" ? "Inactive" : "Active",
//     sortOrder: typeof m.sortOrder === "number" ? m.sortOrder : 0,
//   };
// }

// export default function FurnitureMaterialsPage() {
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
//       const data = await getAllMaterials();
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
//         await updateMaterial(editing.id, {
//           name: form.name.trim(),
//           description: form.description.trim(),
//           status: form.status,
//           sortOrder: form.sortOrder,
//         });
//       } else {
//         await createMaterial({
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
//       alert("Unable to save material.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function handleDelete(id: string) {
//     if (!confirm("Delete this material?")) return;
//     try {
//       await deleteMaterial(id);
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
//             <h1 className="text-2xl font-semibold tracking-tight">Materials</h1>
//             <p className="mt-1 text-sm text-slate-500">
//               e.g. Plywood, Solid Wood, MDF, Metal, Cane.
//             </p>
//           </div>
//           <button
//             type="button"
//             onClick={openCreate}
//             className="rounded-lg bg-[#176b57] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125849]"
//           >
//             + Add Material
//           </button>
//         </div>

//         <div className="mb-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
//           <div className="border-b border-slate-100 p-4">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search materials…"
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
//                       No materials. Add Plywood, Solid Wood, etc.
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
//                 {editing ? "Edit Material" : "Add Material"}
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
//                   placeholder="Plywood, Solid Wood…"
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
//   getAllMaterials,
//   createMaterial,
//   updateMaterial,
//   deleteMaterial,
//   type FurnitureMaterial,
// } from "@/modules/furniture/services/materialService";

// type Row = {
//   id: string;
//   name: string;
//   slug: string;
//   description: string;
//   status: "Active" | "Inactive";
// };

// function mapToUi(m: FurnitureMaterial): Row {
//   return {
//     id: m.id,
//     name: m.name || "",
//     slug: m.slug || "",
//     description: m.description || "",
//     status: m.status === "Inactive" ? "Inactive" : "Active",
//   };
// }

// export default function FurnitureMaterialsPage() {
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
//       const data = await getAllMaterials();
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
//         await updateMaterial(editing.id, {
//           name: form.name.trim(),
//           description: form.description.trim(),
//           status: form.status,
//         });
//       } else {
//         await createMaterial({
//           name: form.name.trim(),
//           description: form.description.trim(),
//           status: form.status,
//         });
//       }
//       setShowModal(false);
//       await load();
//     } catch (e) {
//       console.error(e);
//       alert("Unable to save material.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function handleDelete(id: string) {
//     if (!confirm("Delete this material?")) return;
//     try {
//       await deleteMaterial(id);
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
//             <h1 className="text-2xl font-semibold tracking-tight">Materials</h1>
//             <p className="mt-1 text-sm text-slate-500">
//               e.g. Plywood, Solid Wood, MDF, Metal, Cane.
//             </p>
//           </div>
//           <button
//             type="button"
//             onClick={openCreate}
//             className="rounded-lg bg-[#176b57] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125849]"
//           >
//             + Add Material
//           </button>
//         </div>

//         <div className="mb-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
//           <div className="border-b border-slate-100 p-4">
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search materials…"
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
//                       No materials. Add Plywood, Solid Wood, etc.
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
//                 {editing ? "Edit Material" : "Add Material"}
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
//                   placeholder="Plywood, Solid Wood…"
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
import { Filter, Pencil, Trash2 } from "lucide-react";
import {
  getAllMaterials,
  createMaterial,
  updateMaterial,
  deleteMaterial,
  type FurnitureMaterial,
} from "@/modules/furniture/services/materialService";

type Row = {
  id: string;
  name: string;
  slug: string;
  description: string;
  status: "Active" | "Inactive";
};

function mapToUi(m: FurnitureMaterial): Row {
  return {
    id: m.id,
    name: m.name || "",
    slug: m.slug || "",
    description: m.description || "",
    status: m.status === "Inactive" ? "Inactive" : "Active",
  };
}

export default function FurnitureMaterialsPage() {
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
      const data = await getAllMaterials();
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
        r.description.toLowerCase().includes(q) ||
        r.slug.toLowerCase().includes(q);
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
        await updateMaterial(editing.id, {
          name: form.name.trim(),
          description: form.description.trim(),
          status: form.status,
        });
      } else {
        await createMaterial({
          name: form.name.trim(),
          description: form.description.trim(),
          status: form.status,
        });
      }
      setShowModal(false);
      await load();
    } catch (e) {
      console.error(e);
      alert("Unable to save material.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this material?")) return;
    try {
      await deleteMaterial(id);
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
              Materials
            </h1>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              e.g. Plywood, Solid Wood, MDF, Metal, Cane.
            </p>
          </div>
          <button
            type="button"
            onClick={openCreate}
            className="shrink-0 rounded-lg bg-[#176b57] px-3 py-2.5 text-xs font-semibold text-white hover:bg-[#125849] sm:px-5 sm:text-sm"
          >
            + Add Material
          </button>
        </div>

        <div className="mb-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {/* Search + Filter */}
          <div className="flex gap-2 border-b border-slate-100 p-3 sm:p-4">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search materials…"
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
                      No materials. Add Plywood, Solid Wood, etc.
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
                {editing ? "Edit Material" : "Add Material"}
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
                  placeholder="Plywood, Solid Wood…"
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
