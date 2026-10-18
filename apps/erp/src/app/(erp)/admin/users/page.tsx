// "use client";

// import { useState } from "react";
// import { useAuth } from "@/core/auth/AuthContext";
// import AuthGuard from "@/core/auth/AuthGuard";
// import { Plus, Search, Shield } from "lucide-react";

// type StaffUser = {
//   id: string;
//   name: string;
//   email: string;
//   role: string;
//   modules: string[];
//   status: "Active" | "Inactive";
// };

// const DEMO_USERS: StaffUser[] = [
//   {
//     id: "USR-001",
//     name: "Rahul Verma",
//     email: "admin@akrish.in",
//     role: "admin",
//     modules: ["interior", "furniture"],
//     status: "Active",
//   },
//   {
//     id: "USR-002",
//     name: "Priya Sharma",
//     email: "priya@akrish.in",
//     role: "manager",
//     modules: ["interior"],
//     status: "Active",
//   },
//   {
//     id: "USR-003",
//     name: "Amit Patel",
//     email: "amit@akrish.in",
//     role: "sales",
//     modules: ["furniture"],
//     status: "Active",
//   },
// ];

// export default function AdminUsersPage() {
//   const { isAdmin } = useAuth();
//   const [users] = useState(DEMO_USERS);
//   const [search, setSearch] = useState("");

//   if (!isAdmin) {
//     return (
//       <div className="p-8 text-center text-red-600">
//         Only administrators can manage users.
//       </div>
//     );
//   }

//   const filtered = users.filter(
//     (u) =>
//       u.name.toLowerCase().includes(search.toLowerCase()) ||
//       u.email.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <AuthGuard allowedRoles={["admin"]}>
//       <div className="p-6">
//         <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
//           <div>
//             <h1 className="text-xl font-semibold text-slate-900">Staff Users</h1>
//             <p className="text-sm text-slate-500">
//               Only admins can create and manage users for both modules
//             </p>
//           </div>
//           <button className="inline-flex items-center gap-2 rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125849]">
//             <Plus size={16} />
//             Add Staff User
//           </button>
//         </div>

//         <div className="mb-4 flex items-center gap-3">
//           <div className="relative flex-1 max-w-sm">
//             <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search by name or email..."
//               className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-10 pr-4 text-sm outline-none focus:border-[#176b5b]"
//             />
//           </div>
//         </div>

//         <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
//           <table className="w-full text-left text-sm">
//             <thead className="border-b border-slate-100 bg-slate-50 text-xs uppercase text-slate-500">
//               <tr>
//                 <th className="px-5 py-3 font-medium">Name</th>
//                 <th className="px-5 py-3 font-medium">Email</th>
//                 <th className="px-5 py-3 font-medium">Role</th>
//                 <th className="px-5 py-3 font-medium">Modules</th>
//                 <th className="px-5 py-3 font-medium">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filtered.map((user) => (
//                 <tr key={user.id} className="border-b border-slate-50 hover:bg-slate-50/50">
//                   <td className="px-5 py-4 font-medium text-slate-900">{user.name}</td>
//                   <td className="px-5 py-4 text-slate-600">{user.email}</td>
//                   <td className="px-5 py-4">
//                     <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium capitalize text-slate-700">
//                       <Shield size={12} />
//                       {user.role}
//                     </span>
//                   </td>
//                   <td className="px-5 py-4">
//                     <div className="flex gap-1.5">
//                       {user.modules.map((m) => (
//                         <span
//                           key={m}
//                           className={`rounded-full px-2.5 py-1 text-xs font-medium ${
//                             m === "interior"
//                               ? "bg-emerald-50 text-emerald-700"
//                               : "bg-amber-50 text-amber-700"
//                           }`}
//                         >
//                           {m}
//                         </span>
//                       ))}
//                     </div>
//                   </td>
//                   <td className="px-5 py-4">
//                     <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
//                       {user.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </AuthGuard>
//   );
// }

// "use client";

// import { FormEvent, useEffect, useMemo, useState } from "react";
// import { useAuth } from "@/core/auth/AuthContext";
// import AuthGuard from "@/core/auth/AuthGuard";
// import { Plus, Search, Shield, X } from "lucide-react";
// import {
//   getAllStaffUsers,
//   createStaffUser,
//   updateStaffUser,
//   type StaffUserDoc,
// } from "@/modules/admin/services/userService";

// type StaffUser = {
//   id: string;
//   name: string;
//   email: string;
//   role: string;
//   modules: string[];
//   status: "Active" | "Inactive";
// };

// const ROLES = [
//   "admin",
//   "manager",
//   "sales",
//   "designer",
//   "accountant",
//   "hr",
//   "employee",
// ] as const;

// const MODULE_OPTIONS = ["interior", "furniture"] as const;

// function mapToUi(u: StaffUserDoc): StaffUser {
//   const statusRaw = (u.status || "Active").toString();
//   const status: "Active" | "Inactive" =
//     statusRaw.toLowerCase() === "inactive" ? "Inactive" : "Active";

//   return {
//     id: u.id,
//     name: u.name || u.email?.split("@")[0] || "User",
//     email: u.email || "—",
//     role: (u.role || "employee").toString().toLowerCase(),
//     modules: Array.isArray(u.modules)
//       ? u.modules.map(String)
//       : u.role === "admin"
//       ? ["interior", "furniture"]
//       : [],
//     status,
//   };
// }

// export default function AdminUsersPage() {
//   const { isAdmin } = useAuth();
//   const [users, setUsers] = useState<StaffUser[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [search, setSearch] = useState("");
//   const [showAdd, setShowAdd] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "sales",
//     modules: ["furniture"] as string[],
//     status: "Active" as "Active" | "Inactive",
//   });

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllStaffUsers();
//         if (cancelled) return;
//         setUsers(data.map(mapToUi));
//       } catch (err) {
//         console.error("Failed to load users:", err);
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
//     const q = search.toLowerCase().trim();
//     if (!q) return users;
//     return users.filter(
//       (u) =>
//         u.name.toLowerCase().includes(q) ||
//         u.email.toLowerCase().includes(q) ||
//         u.role.toLowerCase().includes(q)
//     );
//   }, [users, search]);

//   function toggleModule(mod: string) {
//     setForm((prev) => {
//       const has = prev.modules.includes(mod);
//       return {
//         ...prev,
//         modules: has
//           ? prev.modules.filter((m) => m !== mod)
//           : [...prev.modules, mod],
//       };
//     });
//   }

//   async function handleCreate(e: FormEvent) {
//     e.preventDefault();

//     if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
//       alert("Name, email and password are required.");
//       return;
//     }

//     if (form.password.length < 6) {
//       alert("Password must be at least 6 characters.");
//       return;
//     }

//     const modules =
//       form.role === "admin"
//         ? ["interior", "furniture"]
//         : form.modules.length
//         ? form.modules
//         : ["furniture"];

//     setSaving(true);
//     try {
//       const uid = await createStaffUser({
//         name: form.name.trim(),
//         email: form.email.trim(),
//         password: form.password,
//         role: form.role,
//         modules,
//         status: form.status,
//       });

//       setUsers((current) => [
//         {
//           id: uid,
//           name: form.name.trim(),
//           email: form.email.trim().toLowerCase(),
//           role: form.role,
//           modules,
//           status: form.status,
//         },
//         ...current,
//       ]);

//       setForm({
//         name: "",
//         email: "",
//         password: "",
//         role: "sales",
//         modules: ["furniture"],
//         status: "Active",
//       });
//       setShowAdd(false);

//       alert(
//         "User created. Note: custom claims (role/modules) for login permissions may need a Cloud Function or Admin SDK refresh. Profile is in Firestore."
//       );
//     } catch (err: unknown) {
//       console.error(err);
//       const message =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "Unable to create user.";
//       alert(`Failed to create user: ${message}`);
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function toggleStatus(user: StaffUser) {
//     const next: "Active" | "Inactive" =
//       user.status === "Active" ? "Inactive" : "Active";

//     setUsers((current) =>
//       current.map((u) => (u.id === user.id ? { ...u, status: next } : u))
//     );

//     try {
//       await updateStaffUser(user.id, { status: next });
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllStaffUsers();
//         setUsers(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   if (!isAdmin) {
//     return (
//       <div className="p-8 text-center text-red-600">
//         Only administrators can manage users.
//       </div>
//     );
//   }

//   return (
//     <AuthGuard allowedRoles={["admin"]}>
//       <div className="p-6">
//         <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
//           <div>
//             <h1 className="text-xl font-semibold text-slate-900">Staff Users</h1>
//             <p className="text-sm text-slate-500">
//               Only admins can create and manage users for both modules
//             </p>
//           </div>
//           <button
//             onClick={() => setShowAdd(true)}
//             className="inline-flex items-center gap-2 rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125849]"
//           >
//             <Plus size={16} />
//             Add Staff User
//           </button>
//         </div>

//         <div className="mb-4 flex items-center gap-3">
//           <div className="relative max-w-sm flex-1">
//             <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search by name or email..."
//               className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-10 pr-4 text-sm outline-none focus:border-[#176b5b]"
//             />
//           </div>
//         </div>

//         <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
//           <table className="w-full text-left text-sm">
//             <thead className="border-b border-slate-100 bg-slate-50 text-xs uppercase text-slate-500">
//               <tr>
//                 <th className="px-5 py-3 font-medium">Name</th>
//                 <th className="px-5 py-3 font-medium">Email</th>
//                 <th className="px-5 py-3 font-medium">Role</th>
//                 <th className="px-5 py-3 font-medium">Modules</th>
//                 <th className="px-5 py-3 font-medium">Status</th>
//                 <th className="px-5 py-3 text-right font-medium">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {loading ? (
//                 <tr>
//                   <td
//                     colSpan={6}
//                     className="px-5 py-12 text-center text-sm text-slate-500"
//                   >
//                     Loading users…
//                   </td>
//                 </tr>
//               ) : (
//                 <>
//                   {filtered.map((user) => (
//                     <tr
//                       key={user.id}
//                       className="border-b border-slate-50 hover:bg-slate-50/50"
//                     >
//                       <td className="px-5 py-4 font-medium text-slate-900">
//                         {user.name}
//                       </td>
//                       <td className="px-5 py-4 text-slate-600">{user.email}</td>
//                       <td className="px-5 py-4">
//                         <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium capitalize text-slate-700">
//                           <Shield size={12} />
//                           {user.role}
//                         </span>
//                       </td>
//                       <td className="px-5 py-4">
//                         <div className="flex flex-wrap gap-1.5">
//                           {user.modules.length === 0 ? (
//                             <span className="text-xs text-slate-400">—</span>
//                           ) : (
//                             user.modules.map((m) => (
//                               <span
//                                 key={m}
//                                 className={`rounded-full px-2.5 py-1 text-xs font-medium ${
//                                   m === "interior"
//                                     ? "bg-emerald-50 text-emerald-700"
//                                     : "bg-amber-50 text-amber-700"
//                                 }`}
//                               >
//                                 {m}
//                               </span>
//                             ))
//                           )}
//                         </div>
//                       </td>
//                       <td className="px-5 py-4">
//                         <span
//                           className={`rounded-full px-2.5 py-1 text-xs font-medium ${
//                             user.status === "Active"
//                               ? "bg-green-50 text-green-700"
//                               : "bg-slate-100 text-slate-600"
//                           }`}
//                         >
//                           {user.status}
//                         </span>
//                       </td>
//                       <td className="px-5 py-4 text-right">
//                         <button
//                           onClick={() => toggleStatus(user)}
//                           className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                         >
//                           {user.status === "Active"
//                             ? "Deactivate"
//                             : "Activate"}
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                   {filtered.length === 0 && (
//                     <tr>
//                       <td
//                         colSpan={6}
//                         className="px-5 py-12 text-center text-sm text-slate-500"
//                       >
//                         No users found in Firestore collection &quot;users&quot;.
//                       </td>
//                     </tr>
//                   )}
//                 </>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {showAdd && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
//               <div>
//                 <h2 className="text-lg font-bold text-slate-900">
//                   Add Staff User
//                 </h2>
//                 <p className="mt-1 text-xs text-slate-500">
//                   Creates Auth account + profile in Firestore
//                 </p>
//               </div>
//               <button
//                 onClick={() => setShowAdd(false)}
//                 className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
//               >
//                 <X size={18} />
//               </button>
//             </div>

//             <form onSubmit={handleCreate} className="space-y-4 p-6">
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                   Full name *
//                 </label>
//                 <input
//                   value={form.name}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, name: e.target.value }))
//                   }
//                   className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b5b]"
//                   placeholder="Staff name"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                   Email *
//                 </label>
//                 <input
//                   type="email"
//                   value={form.email}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, email: e.target.value }))
//                   }
//                   className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b5b]"
//                   placeholder="user@akrish.in"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                   Temporary password *
//                 </label>
//                 <input
//                   type="password"
//                   value={form.password}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, password: e.target.value }))
//                   }
//                   className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b5b]"
//                   placeholder="Min 6 characters"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                   Role
//                 </label>
//                 <select
//                   value={form.role}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, role: e.target.value }))
//                   }
//                   className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {ROLES.map((r) => (
//                     <option key={r} value={r}>
//                       {r}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {form.role !== "admin" && (
//                 <div>
//                   <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                     Modules
//                   </label>
//                   <div className="flex gap-3">
//                     {MODULE_OPTIONS.map((m) => (
//                       <label
//                         key={m}
//                         className="flex items-center gap-2 text-sm capitalize text-slate-700"
//                       >
//                         <input
//                           type="checkbox"
//                           checked={form.modules.includes(m)}
//                           onChange={() => toggleModule(m)}
//                         />
//                         {m}
//                       </label>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               <div className="flex justify-end gap-3 pt-2">
//                 <button
//                   type="button"
//                   onClick={() => setShowAdd(false)}
//                   className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={saving}
//                   className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {saving ? "Creating…" : "Create User"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </AuthGuard>
//   );
// }

// "use client";

// import { FormEvent, useEffect, useMemo, useState } from "react";
// import { usePathname } from "next/navigation";
// import { useAuth } from "@/core/auth/AuthContext";
// import AuthGuard from "@/core/auth/AuthGuard";
// import { Plus, Search, Shield, X } from "lucide-react";
// import {
//   getAllStaffUsers,
//   createStaffUser,
//   updateStaffUser,
//   type StaffUserDoc,
// } from "@/modules/admin/services/userService";

// type StaffUser = {
//   id: string;
//   name: string;
//   email: string;
//   role: string;
//   modules: string[];
//   status: "Active" | "Inactive";
// };

// const ROLES = [
//   "admin",
//   "manager",
//   "sales",
//   "designer",
//   "accountant",
//   "hr",
//   "employee",
// ] as const;

// const MODULE_OPTIONS = ["interior", "furniture"] as const;

// const ACTIVE_MODULE_KEY = "akrish_active_module";

// function mapToUi(u: StaffUserDoc): StaffUser {
//   const statusRaw = (u.status || "Active").toString();
//   const status: "Active" | "Inactive" =
//     statusRaw.toLowerCase() === "inactive" ? "Inactive" : "Active";

//   return {
//     id: u.id,
//     name: u.name || u.email?.split("@")[0] || "User",
//     email: u.email || "—",
//     role: (u.role || "employee").toString().toLowerCase(),
//     modules: Array.isArray(u.modules)
//       ? u.modules.map(String)
//       : u.role === "admin"
//       ? ["interior", "furniture"]
//       : [],
//     status,
//   };
// }

// /** Resolve current ERP module: interior | furniture */
// function resolveActiveModule(pathname: string): "interior" | "furniture" {
//   if (pathname.includes("/interior")) return "interior";
//   if (pathname.includes("/furniture")) return "furniture";

//   if (typeof window !== "undefined") {
//     try {
//       const stored = localStorage.getItem(ACTIVE_MODULE_KEY);
//       if (stored === "interior" || stored === "furniture") return stored;
//     } catch {
//       /* ignore */
//     }
//   }

//   return "furniture";
// }

// export default function AdminUsersPage() {
//   const { isAdmin } = useAuth();
//   const pathname = usePathname() || "";

//   const activeModule = useMemo(
//     () => resolveActiveModule(pathname),
//     [pathname]
//   );

//   // Persist so /admin/users still remembers last module
//   useEffect(() => {
//     try {
//       if (pathname.includes("/interior")) {
//         localStorage.setItem(ACTIVE_MODULE_KEY, "interior");
//       } else if (pathname.includes("/furniture")) {
//         localStorage.setItem(ACTIVE_MODULE_KEY, "furniture");
//       }
//     } catch {
//       /* ignore */
//     }
//   }, [pathname]);

//   const [users, setUsers] = useState<StaffUser[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [search, setSearch] = useState("");
//   const [showAdd, setShowAdd] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "sales",
//     modules: [activeModule] as string[],
//     status: "Active" as "Active" | "Inactive",
//   });

//   // Keep default modules in sync when active module is known
//   useEffect(() => {
//     if (!showAdd) {
//       setForm((f) => ({
//         ...f,
//         modules: f.role === "admin" ? ["interior", "furniture"] : [activeModule],
//       }));
//     }
//   }, [activeModule, showAdd]);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllStaffUsers();
//         if (cancelled) return;
//         setUsers(data.map(mapToUi));
//       } catch (err) {
//         console.error("Failed to load users:", err);
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
//     const q = search.toLowerCase().trim();
//     if (!q) return users;
//     return users.filter(
//       (u) =>
//         u.name.toLowerCase().includes(q) ||
//         u.email.toLowerCase().includes(q) ||
//         u.role.toLowerCase().includes(q)
//     );
//   }, [users, search]);

//   function openAddModal() {
//     setForm({
//       name: "",
//       email: "",
//       password: "",
//       role: "sales",
//       // interior context → interior checked; furniture → furniture checked
//       modules: [activeModule],
//       status: "Active",
//     });
//     setShowAdd(true);
//   }

//   function toggleModule(mod: string) {
//     setForm((prev) => {
//       const has = prev.modules.includes(mod);
//       return {
//         ...prev,
//         modules: has
//           ? prev.modules.filter((m) => m !== mod)
//           : [...prev.modules, mod],
//       };
//     });
//   }

//   function handleRoleChange(role: string) {
//     setForm((f) => ({
//       ...f,
//       role,
//       // Admin always gets both modules
//       modules:
//         role === "admin"
//           ? ["interior", "furniture"]
//           : f.modules.length
//           ? f.modules
//           : [activeModule],
//     }));
//   }

//   async function handleCreate(e: FormEvent) {
//     e.preventDefault();

//     if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
//       alert("Name, email and password are required.");
//       return;
//     }

//     if (form.password.length < 6) {
//       alert("Password must be at least 6 characters.");
//       return;
//     }

//     const modules =
//       form.role === "admin"
//         ? ["interior", "furniture"]
//         : form.modules.length
//         ? form.modules
//         : [activeModule];

//     setSaving(true);
//     try {
//       const uid = await createStaffUser({
//         name: form.name.trim(),
//         email: form.email.trim(),
//         password: form.password,
//         role: form.role,
//         modules,
//         status: form.status,
//       });

//       setUsers((current) => [
//         {
//           id: uid,
//           name: form.name.trim(),
//           email: form.email.trim().toLowerCase(),
//           role: form.role,
//           modules,
//           status: form.status,
//         },
//         ...current,
//       ]);

//       setForm({
//         name: "",
//         email: "",
//         password: "",
//         role: "sales",
//         modules: [activeModule],
//         status: "Active",
//       });
//       setShowAdd(false);

//       alert(
//         "User created. Note: custom claims (role/modules) for login permissions may need a Cloud Function or Admin SDK refresh. Profile is in Firestore."
//       );
//     } catch (err: unknown) {
//       console.error(err);
//       const message =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "Unable to create user.";
//       alert(`Failed to create user: ${message}`);
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function toggleStatus(user: StaffUser) {
//     const next: "Active" | "Inactive" =
//       user.status === "Active" ? "Inactive" : "Active";

//     setUsers((current) =>
//       current.map((u) => (u.id === user.id ? { ...u, status: next } : u))
//     );

//     try {
//       await updateStaffUser(user.id, { status: next });
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllStaffUsers();
//         setUsers(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   if (!isAdmin) {
//     return (
//       <div className="p-8 text-center text-red-600">
//         Only administrators can manage users.
//       </div>
//     );
//   }

//   return (
//     <AuthGuard allowedRoles={["admin"]}>
//       <div className="p-6">
//         <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
//           <div>
//             <h1 className="text-xl font-semibold text-slate-900">Staff Users</h1>
//             <p className="text-sm text-slate-500">
//               Only admins can create and manage users for both modules
//               <span className="ml-1 text-[#176b5b]">
//                 (default module: {activeModule})
//               </span>
//             </p>
//           </div>
//           <button
//             onClick={openAddModal}
//             className="inline-flex items-center gap-2 rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125849]"
//           >
//             <Plus size={16} />
//             Add Staff User
//           </button>
//         </div>

//         <div className="mb-4 flex items-center gap-3">
//           <div className="relative max-w-sm flex-1">
//             <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search by name or email..."
//               className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-10 pr-4 text-sm outline-none focus:border-[#176b5b]"
//             />
//           </div>
//         </div>

//         <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
//           <table className="w-full text-left text-sm">
//             <thead className="border-b border-slate-100 bg-slate-50 text-xs uppercase text-slate-500">
//               <tr>
//                 <th className="px-5 py-3 font-medium">Name</th>
//                 <th className="px-5 py-3 font-medium">Email</th>
//                 <th className="px-5 py-3 font-medium">Role</th>
//                 <th className="px-5 py-3 font-medium">Modules</th>
//                 <th className="px-5 py-3 font-medium">Status</th>
//                 <th className="px-5 py-3 text-right font-medium">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {loading ? (
//                 <tr>
//                   <td
//                     colSpan={6}
//                     className="px-5 py-12 text-center text-sm text-slate-500"
//                   >
//                     Loading users…
//                   </td>
//                 </tr>
//               ) : (
//                 <>
//                   {filtered.map((user) => (
//                     <tr
//                       key={user.id}
//                       className="border-b border-slate-50 hover:bg-slate-50/50"
//                     >
//                       <td className="px-5 py-4 font-medium text-slate-900">
//                         {user.name}
//                       </td>
//                       <td className="px-5 py-4 text-slate-600">{user.email}</td>
//                       <td className="px-5 py-4">
//                         <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium capitalize text-slate-700">
//                           <Shield size={12} />
//                           {user.role}
//                         </span>
//                       </td>
//                       <td className="px-5 py-4">
//                         <div className="flex flex-wrap gap-1.5">
//                           {user.modules.length === 0 ? (
//                             <span className="text-xs text-slate-400">—</span>
//                           ) : (
//                             user.modules.map((m) => (
//                               <span
//                                 key={m}
//                                 className={`rounded-full px-2.5 py-1 text-xs font-medium ${
//                                   m === "interior"
//                                     ? "bg-emerald-50 text-emerald-700"
//                                     : "bg-amber-50 text-amber-700"
//                                 }`}
//                               >
//                                 {m}
//                               </span>
//                             ))
//                           )}
//                         </div>
//                       </td>
//                       <td className="px-5 py-4">
//                         <span
//                           className={`rounded-full px-2.5 py-1 text-xs font-medium ${
//                             user.status === "Active"
//                               ? "bg-green-50 text-green-700"
//                               : "bg-slate-100 text-slate-600"
//                           }`}
//                         >
//                           {user.status}
//                         </span>
//                       </td>
//                       <td className="px-5 py-4 text-right">
//                         <button
//                           onClick={() => toggleStatus(user)}
//                           className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                         >
//                           {user.status === "Active"
//                             ? "Deactivate"
//                             : "Activate"}
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                   {filtered.length === 0 && (
//                     <tr>
//                       <td
//                         colSpan={6}
//                         className="px-5 py-12 text-center text-sm text-slate-500"
//                       >
//                         No users found in Firestore collection &quot;users&quot;.
//                       </td>
//                     </tr>
//                   )}
//                 </>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {showAdd && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
//               <div>
//                 <h2 className="text-lg font-bold text-slate-900">
//                   Add Staff User
//                 </h2>
//                 <p className="mt-1 text-xs text-slate-500">
//                   Creates Auth account + profile in Firestore · default module:{" "}
//                   <span className="font-semibold capitalize text-[#176b5b]">
//                     {activeModule}
//                   </span>
//                 </p>
//               </div>
//               <button
//                 onClick={() => setShowAdd(false)}
//                 className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
//               >
//                 <X size={18} />
//               </button>
//             </div>

//             <form onSubmit={handleCreate} className="space-y-4 p-6">
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                   Full name *
//                 </label>
//                 <input
//                   value={form.name}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, name: e.target.value }))
//                   }
//                   className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b5b]"
//                   placeholder="Staff name"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                   Email *
//                 </label>
//                 <input
//                   type="email"
//                   value={form.email}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, email: e.target.value }))
//                   }
//                   className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b5b]"
//                   placeholder="user@akrish.in"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                   Temporary password *
//                 </label>
//                 <input
//                   type="password"
//                   value={form.password}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, password: e.target.value }))
//                   }
//                   className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b5b]"
//                   placeholder="Min 6 characters"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                   Role
//                 </label>
//                 <select
//                   value={form.role}
//                   onChange={(e) => handleRoleChange(e.target.value)}
//                   className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {ROLES.map((r) => (
//                     <option key={r} value={r}>
//                       {r}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {form.role !== "admin" && (
//                 <div>
//                   <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                     Modules
//                   </label>
//                   <div className="flex gap-3">
//                     {MODULE_OPTIONS.map((m) => (
//                       <label
//                         key={m}
//                         className="flex items-center gap-2 text-sm capitalize text-slate-700"
//                       >
//                         <input
//                           type="checkbox"
//                           checked={form.modules.includes(m)}
//                           onChange={() => toggleModule(m)}
//                         />
//                         {m}
//                         {m === activeModule && (
//                           <span className="text-[10px] font-medium text-[#176b5b]">
//                             (default)
//                           </span>
//                         )}
//                       </label>
//                     ))}
//                   </div>
//                   <p className="mt-1.5 text-xs text-slate-400">
//                     Active ERP module is{" "}
//                     <span className="font-semibold capitalize">
//                       {activeModule}
//                     </span>{" "}
//                     — that option is checked by default.
//                   </p>
//                 </div>
//               )}

//               {form.role === "admin" && (
//                 <p className="rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600">
//                   Admin role automatically gets both{" "}
//                   <strong>interior</strong> and <strong>furniture</strong>{" "}
//                   modules.
//                 </p>
//               )}

//               <div className="flex justify-end gap-3 pt-2">
//                 <button
//                   type="button"
//                   onClick={() => setShowAdd(false)}
//                   className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={saving}
//                   className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {saving ? "Creating…" : "Create User"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </AuthGuard>
//   );
// }

// "use client";

// import { FormEvent, useEffect, useMemo, useState } from "react";
// import { usePathname } from "next/navigation";
// import { useAuth } from "@/core/auth/AuthContext";
// import AuthGuard from "@/core/auth/AuthGuard";
// import { Plus, Search, Shield, X } from "lucide-react";
// import {
//   getAllStaffUsers,
//   createStaffUser,
//   updateStaffUser,
//   type StaffUserDoc,
// } from "@/modules/admin/services/userService";

// type StaffUser = {
//   id: string;
//   name: string;
//   email: string;
//   role: string;
//   modules: string[];
//   status: "Active" | "Inactive";
// };

// type ErpModule = "interior" | "furniture";

// const ROLES = [
//   "admin",
//   "manager",
//   "sales",
//   "designer",
//   "accountant",
//   "hr",
//   "employee",
// ] as const;

// const MODULE_OPTIONS: ErpModule[] = ["interior", "furniture"];

// const ACTIVE_MODULE_KEY = "akrish_active_module";

// function mapToUi(u: StaffUserDoc): StaffUser {
//   const statusRaw = (u.status || "Active").toString();
//   const status: "Active" | "Inactive" =
//     statusRaw.toLowerCase() === "inactive" ? "Inactive" : "Active";

//   return {
//     id: u.id,
//     name: u.name || u.email?.split("@")[0] || "User",
//     email: u.email || "—",
//     role: (u.role || "employee").toString().toLowerCase(),
//     modules: Array.isArray(u.modules)
//       ? u.modules.map(String)
//       : u.role === "admin"
//       ? ["interior", "furniture"]
//       : [],
//     status,
//   };
// }

// function getActiveModule(pathname: string): ErpModule {
//   if (pathname.includes("/interior")) return "interior";
//   if (pathname.includes("/furniture")) return "furniture";

//   if (typeof window !== "undefined") {
//     try {
//       const stored = localStorage.getItem(ACTIVE_MODULE_KEY);
//       if (stored === "interior" || stored === "furniture") return stored;
//     } catch {
//       /* ignore */
//     }
//   }

//   return "furniture";
// }

// export default function AdminUsersPage() {
//   const { isAdmin } = useAuth();
//   const pathname = usePathname() || "";
//   const activeModule = useMemo(() => getActiveModule(pathname), [pathname]);
//   const [successMsg, setSuccessMsg] = useState<string | null>(null);

//   // Remember last module when browsing interior/furniture routes
//   useEffect(() => {
//     try {
//       if (pathname.includes("/interior")) {
//         localStorage.setItem(ACTIVE_MODULE_KEY, "interior");
//       } else if (pathname.includes("/furniture")) {
//         localStorage.setItem(ACTIVE_MODULE_KEY, "furniture");
//       }
//     } catch {
//       /* ignore */
//     }
//   }, [pathname]);

//   const [users, setUsers] = useState<StaffUser[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [search, setSearch] = useState("");
//   const [showAdd, setShowAdd] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "sales",
//     modules: [activeModule] as string[],
//     status: "Active" as "Active" | "Inactive",
//   });

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllStaffUsers();
//         if (cancelled) return;
//         setUsers(data.map(mapToUi));
//       } catch (err) {
//         console.error("Failed to load users:", err);
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
//     const q = search.toLowerCase().trim();
//     if (!q) return users;
//     return users.filter(
//       (u) =>
//         u.name.toLowerCase().includes(q) ||
//         u.email.toLowerCase().includes(q) ||
//         u.role.toLowerCase().includes(q)
//     );
//   }, [users, search]);

//   /** Open modal with correct module pre-checked */
//   function openAddModal() {
//     setForm({
//       name: "",
//       email: "",
//       password: "",
//       role: "sales",
//       // furniture → check furniture; interior → check interior
//       modules: [activeModule],
//       status: "Active",
//     });
//     setShowAdd(true);
//   }

//   function toggleModule(mod: string) {
//     setForm((prev) => {
//       const has = prev.modules.includes(mod);
//       return {
//         ...prev,
//         modules: has
//           ? prev.modules.filter((m) => m !== mod)
//           : [...prev.modules, mod],
//       };
//     });
//   }

//   function handleRoleChange(role: string) {
//     setForm((f) => ({
//       ...f,
//       role,
//       modules:
//         role === "admin"
//           ? ["interior", "furniture"]
//           : f.modules.length > 0
//           ? f.modules
//           : [activeModule],
//     }));
//   }

//   // async function handleCreate(e: FormEvent) {
//   //   e.preventDefault();

//   //   if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
//   //     alert("Name, email and password are required.");
//   //     return;
//   //   }

//   //   if (form.password.length < 6) {
//   //     alert("Password must be at least 6 characters.");
//   //     return;
//   //   }

//   //   const modules =
//   //     form.role === "admin"
//   //       ? ["interior", "furniture"]
//   //       : form.modules.length > 0
//   //       ? form.modules
//   //       : [activeModule];

//   //   setSaving(true);
//   //   try {
//   //     const uid = await createStaffUser({
//   //       name: form.name.trim(),
//   //       email: form.email.trim(),
//   //       password: form.password,
//   //       role: form.role,
//   //       modules,
//   //       status: form.status,
//   //     });

//   //     setUsers((current) => [
//   //       {
//   //         id: uid,
//   //         name: form.name.trim(),
//   //         email: form.email.trim().toLowerCase(),
//   //         role: form.role,
//   //         modules,
//   //         status: form.status,
//   //       },
//   //       ...current,
//   //     ]);

//   //     setForm({
//   //       name: "",
//   //       email: "",
//   //       password: "",
//   //       role: "sales",
//   //       modules: [activeModule],
//   //       status: "Active",
//   //     });
//   //     setShowAdd(false);

//   //     alert(
//   //       "User created. Note: custom claims (role/modules) for login permissions may need a Cloud Function or Admin SDK refresh. Profile is in Firestore."
//   //     );
//   //   } catch (err: unknown) {
//   //     console.error(err);
//   //     const message =
//   //       err && typeof err === "object" && "code" in err
//   //         ? String((err as { code: string }).code)
//   //         : "Unable to create user.";
//   //     alert(`Failed to create user: ${message}`);
//   //   } finally {
//   //     setSaving(false);
//   //   }
//   // }

//     async function handleCreate(e: FormEvent) {
//     e.preventDefault();

//     if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
//       alert("Name, email and password are required.");
//       return;
//     }

//     if (form.password.length < 6) {
//       alert("Password must be at least 6 characters.");
//       return;
//     }

//     const modules =
//       form.role === "admin"
//         ? ["interior", "furniture"]
//         : form.modules.length > 0
//           ? form.modules
//           : [activeModule];

//     setSaving(true);
//     setSuccessMsg(null);

//     try {
//       const uid = await createStaffUser({
//         name: form.name.trim(),
//         email: form.email.trim(),
//         password: form.password,
//         role: form.role,
//         modules,
//         status: form.status,
//       });

//       // Admin stays logged in (secondary app). Only update local list.
//       setUsers((current) => [
//         {
//           id: uid,
//           name: form.name.trim(),
//           email: form.email.trim().toLowerCase(),
//           role: form.role,
//           modules,
//           status: form.status,
//         },
//         ...current,
//       ]);

//       setForm({
//         name: "",
//         email: "",
//         password: "",
//         role: "sales",
//         modules: [activeModule],
//         status: "Active",
//       });
//       setShowAdd(false);

//       const moduleLabel =
//         modules.length === 2
//           ? "Interior & Furniture"
//           : modules[0] === "interior"
//             ? "Interior only"
//             : "Furniture only";

//       setSuccessMsg(
//         `User “${form.name.trim()}” created successfully (${moduleLabel}). They can sign in with their email and password.`
//       );

//       setTimeout(() => setSuccessMsg(null), 6000);
//     } catch (err: unknown) {
//       console.error(err);
//       const code =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";
//       if (code === "auth/email-already-in-use") {
//         alert("This email is already registered.");
//       } else {
//         alert("Failed to create user. Please try again.");
//       }
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function toggleStatus(user: StaffUser) {
//     const next: "Active" | "Inactive" =
//       user.status === "Active" ? "Inactive" : "Active";

//     setUsers((current) =>
//       current.map((u) => (u.id === user.id ? { ...u, status: next } : u))
//     );

//     try {
//       await updateStaffUser(user.id, { status: next });
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllStaffUsers();
//         setUsers(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   if (!isAdmin) {
//     return (
//       <div className="p-8 text-center text-red-600">
//         Only administrators can manage users.
//       </div>
//     );
//   }

//   return (
//     <AuthGuard allowedRoles={["admin"]}>
//       <div className="p-6">
//         <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
//           <div>
//             <h1 className="text-xl font-semibold text-slate-900">Staff Users</h1>
//             <p className="text-sm text-slate-500">
//               Only admins can create and manage users for both modules
//             </p>
//           </div>
//           <button
//             onClick={openAddModal}
//             className="inline-flex items-center gap-2 rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125849]"
//           >
//             <Plus size={16} />
//             Add Staff User
//           </button>
//         </div>

//         <div className="mb-4 flex items-center gap-3">
//           <div className="relative max-w-sm flex-1">
//             <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search by name or email..."
//               className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-10 pr-4 text-sm outline-none focus:border-[#176b5b]"
//             />
//           </div>
//         </div>

//         <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
//           <table className="w-full text-left text-sm">
//             <thead className="border-b border-slate-100 bg-slate-50 text-xs uppercase text-slate-500">
//               <tr>
//                 <th className="px-5 py-3 font-medium">Name</th>
//                 <th className="px-5 py-3 font-medium">Email</th>
//                 <th className="px-5 py-3 font-medium">Role</th>
//                 <th className="px-5 py-3 font-medium">Modules</th>
//                 <th className="px-5 py-3 font-medium">Status</th>
//                 <th className="px-5 py-3 text-right font-medium">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {loading ? (
//                 <tr>
//                   <td
//                     colSpan={6}
//                     className="px-5 py-12 text-center text-sm text-slate-500"
//                   >
//                     Loading users…
//                   </td>
//                 </tr>
//               ) : (
//                 <>
//                   {filtered.map((user) => (
//                     <tr
//                       key={user.id}
//                       className="border-b border-slate-50 hover:bg-slate-50/50"
//                     >
//                       <td className="px-5 py-4 font-medium text-slate-900">
//                         {user.name}
//                       </td>
//                       <td className="px-5 py-4 text-slate-600">{user.email}</td>
//                       <td className="px-5 py-4">
//                         <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium capitalize text-slate-700">
//                           <Shield size={12} />
//                           {user.role}
//                         </span>
//                       </td>
//                       <td className="px-5 py-4">
//                         <div className="flex flex-wrap gap-1.5">
//                           {user.modules.length === 0 ? (
//                             <span className="text-xs text-slate-400">—</span>
//                           ) : (
//                             user.modules.map((m) => (
//                               <span
//                                 key={m}
//                                 className={`rounded-full px-2.5 py-1 text-xs font-medium ${
//                                   m === "interior"
//                                     ? "bg-emerald-50 text-emerald-700"
//                                     : "bg-amber-50 text-amber-700"
//                                 }`}
//                               >
//                                 {m}
//                               </span>
//                             ))
//                           )}
//                         </div>
//                       </td>
//                       <td className="px-5 py-4">
//                         <span
//                           className={`rounded-full px-2.5 py-1 text-xs font-medium ${
//                             user.status === "Active"
//                               ? "bg-green-50 text-green-700"
//                               : "bg-slate-100 text-slate-600"
//                           }`}
//                         >
//                           {user.status}
//                         </span>
//                       </td>
//                       <td className="px-5 py-4 text-right">
//                         <button
//                           onClick={() => toggleStatus(user)}
//                           className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                         >
//                           {user.status === "Active"
//                             ? "Deactivate"
//                             : "Activate"}
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                   {filtered.length === 0 && (
//                     <tr>
//                       <td
//                         colSpan={6}
//                         className="px-5 py-12 text-center text-sm text-slate-500"
//                       >
//                         No users found in Firestore collection &quot;users&quot;.
//                       </td>
//                     </tr>
//                   )}
//                 </>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {showAdd && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
//               <div>
//                 <h2 className="text-lg font-bold text-slate-900">
//                   Add Staff User
//                 </h2>
//                 <p className="mt-1 text-xs text-slate-500">
//                   Creates Auth account + profile in Firestore
//                 </p>
//               </div>
//               <button
//                 onClick={() => setShowAdd(false)}
//                 className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
//               >
//                 <X size={18} />
//               </button>
//             </div>

//             <form onSubmit={handleCreate} className="space-y-4 p-6">
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                   Full name *
//                 </label>
//                 <input
//                   value={form.name}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, name: e.target.value }))
//                   }
//                   className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b5b]"
//                   placeholder="Staff name"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                   Email *
//                 </label>
//                 <input
//                   type="email"
//                   value={form.email}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, email: e.target.value }))
//                   }
//                   className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b5b]"
//                   placeholder="user@akrish.in"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                   Temporary password *
//                 </label>
//                 <input
//                   type="password"
//                   value={form.password}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, password: e.target.value }))
//                   }
//                   className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b5b]"
//                   placeholder="Min 6 characters"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                   Role
//                 </label>
//                 <select
//                   value={form.role}
//                   onChange={(e) => handleRoleChange(e.target.value)}
//                   className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {ROLES.map((r) => (
//                     <option key={r} value={r}>
//                       {r}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {form.role !== "admin" && (
//                 <div>
//                   <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                     Modules
//                   </label>
//                   <div className="flex gap-4">
//                     {MODULE_OPTIONS.map((m) => (
//                       <label
//                         key={m}
//                         className="flex items-center gap-2 text-sm capitalize text-slate-700"
//                       >
//                         <input
//                           type="checkbox"
//                           checked={form.modules.includes(m)}
//                           onChange={() => toggleModule(m)}
//                         />
//                         {m}
//                       </label>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {form.role === "admin" && (
//                 <p className="rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600">
//                   Admin role gets both <strong>interior</strong> and{" "}
//                   <strong>furniture</strong> modules automatically.
//                 </p>
//               )}

//               <div className="flex justify-end gap-3 pt-2">
//                 <button
//                   type="button"
//                   onClick={() => setShowAdd(false)}
//                   className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={saving}
//                   className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {saving ? "Creating…" : "Create User"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </AuthGuard>
//   );
// }

// "use client";

// import { FormEvent, useEffect, useMemo, useState } from "react";
// import { usePathname } from "next/navigation";
// import { useAuth } from "@/core/auth/AuthContext";
// import AuthGuard from "@/core/auth/AuthGuard";
// import { Plus, Search, Shield, X } from "lucide-react";
// import {
//   getAllStaffUsers,
//   createStaffUser,
//   updateStaffUser,
//   type StaffUserDoc,
// } from "@/modules/admin/services/userService";

// type StaffUser = {
//   id: string;
//   name: string;
//   email: string;
//   role: string;
//   modules: string[];
//   status: "Active" | "Inactive";
// };

// type ErpModule = "interior" | "furniture";

// const ROLES = [
//   "admin",
//   "manager",
//   "sales",
//   "designer",
//   "accountant",
//   "hr",
//   "employee",
// ] as const;

// const MODULE_OPTIONS: ErpModule[] = ["interior", "furniture"];

// const ACTIVE_MODULE_KEY = "akrish_active_module";

// function mapToUi(u: StaffUserDoc): StaffUser {
//   const statusRaw = (u.status || "Active").toString();
//   const status: "Active" | "Inactive" =
//     statusRaw.toLowerCase() === "inactive" ? "Inactive" : "Active";

//   return {
//     id: u.id,
//     name: u.name || u.email?.split("@")[0] || "User",
//     email: u.email || "—",
//     role: (u.role || "employee").toString().toLowerCase(),
//     modules: Array.isArray(u.modules)
//       ? u.modules.map(String)
//       : u.role === "admin"
//         ? ["interior", "furniture"]
//         : [],
//     status,
//   };
// }

// function getActiveModule(pathname: string): ErpModule {
//   if (pathname.includes("/interior")) return "interior";
//   if (pathname.includes("/furniture")) return "furniture";

//   if (typeof window !== "undefined") {
//     try {
//       const stored = localStorage.getItem(ACTIVE_MODULE_KEY);
//       if (stored === "interior" || stored === "furniture") return stored;
//     } catch {
//       /* ignore */
//     }
//   }

//   return "furniture";
// }

// export default function AdminUsersPage() {
//   const { isAdmin } = useAuth();
//   const pathname = usePathname() || "";
//   const activeModule = useMemo(() => getActiveModule(pathname), [pathname]);

//   const [successMsg, setSuccessMsg] = useState<string | null>(null);
//   const [users, setUsers] = useState<StaffUser[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [search, setSearch] = useState("");
//   const [showAdd, setShowAdd] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "sales",
//     modules: [activeModule] as string[],
//     status: "Active" as "Active" | "Inactive",
//   });

//   useEffect(() => {
//     try {
//       if (pathname.includes("/interior")) {
//         localStorage.setItem(ACTIVE_MODULE_KEY, "interior");
//       } else if (pathname.includes("/furniture")) {
//         localStorage.setItem(ACTIVE_MODULE_KEY, "furniture");
//       }
//     } catch {
//       /* ignore */
//     }
//   }, [pathname]);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllStaffUsers();
//         if (cancelled) return;
//         setUsers(data.map(mapToUi));
//       } catch (err) {
//         console.error("Failed to load users:", err);
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
//     const q = search.toLowerCase().trim();
//     if (!q) return users;
//     return users.filter(
//       (u) =>
//         u.name.toLowerCase().includes(q) ||
//         u.email.toLowerCase().includes(q) ||
//         u.role.toLowerCase().includes(q)
//     );
//   }, [users, search]);

//   function openAddModal() {
//     setForm({
//       name: "",
//       email: "",
//       password: "",
//       role: "sales",
//       modules: [activeModule],
//       status: "Active",
//     });
//     setShowAdd(true);
//   }

//   function toggleModule(mod: string) {
//     setForm((prev) => {
//       const has = prev.modules.includes(mod);
//       return {
//         ...prev,
//         modules: has
//           ? prev.modules.filter((m) => m !== mod)
//           : [...prev.modules, mod],
//       };
//     });
//   }

//   function handleRoleChange(role: string) {
//     setForm((f) => ({
//       ...f,
//       role,
//       modules:
//         role === "admin"
//           ? ["interior", "furniture"]
//           : f.modules.length > 0
//             ? f.modules
//             : [activeModule],
//     }));
//   }

//   async function handleCreate(e: FormEvent) {
//     e.preventDefault();

//     if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
//       alert("Name, email and password are required.");
//       return;
//     }

//     if (form.password.length < 6) {
//       alert("Password must be at least 6 characters.");
//       return;
//     }

//     const modules =
//       form.role === "admin"
//         ? ["interior", "furniture"]
//         : form.modules.length > 0
//           ? form.modules
//           : [activeModule];

//     const createdName = form.name.trim();

//     setSaving(true);
//     setSuccessMsg(null);

//     try {
//       const uid = await createStaffUser({
//         name: createdName,
//         email: form.email.trim(),
//         password: form.password,
//         role: form.role,
//         modules,
//         status: form.status,
//       });

//       // Admin stays logged in (secondary Firebase app in userService)
//       setUsers((current) => [
//         {
//           id: uid,
//           name: createdName,
//           email: form.email.trim().toLowerCase(),
//           role: form.role,
//           modules,
//           status: form.status,
//         },
//         ...current,
//       ]);

//       setForm({
//         name: "",
//         email: "",
//         password: "",
//         role: "sales",
//         modules: [activeModule],
//         status: "Active",
//       });
//       setShowAdd(false);

//       const moduleLabel =
//         modules.length === 2
//           ? "Interior & Furniture"
//           : modules[0] === "interior"
//             ? "Interior only"
//             : "Furniture only";

//       setSuccessMsg(
//         `User “${createdName}” created successfully (${moduleLabel}). They can sign in with their email and password.`
//       );

//       setTimeout(() => setSuccessMsg(null), 6000);
//     } catch (err: unknown) {
//       console.error(err);
//       const code =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";
//       if (code === "auth/email-already-in-use") {
//         alert("This email is already registered.");
//       } else {
//         alert("Failed to create user. Please try again.");
//       }
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function toggleStatus(user: StaffUser) {
//     const next: "Active" | "Inactive" =
//       user.status === "Active" ? "Inactive" : "Active";

//     setUsers((current) =>
//       current.map((u) => (u.id === user.id ? { ...u, status: next } : u))
//     );

//     try {
//       await updateStaffUser(user.id, { status: next });
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllStaffUsers();
//         setUsers(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   if (!isAdmin) {
//     return (
//       <div className="p-8 text-center text-red-600">
//         Only administrators can manage users.
//       </div>
//     );
//   }

//   return (
//     <AuthGuard allowedRoles={["admin"]}>
//       <div className="p-6">
//         <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
//           <div>
//             <h1 className="text-xl font-semibold text-slate-900">Staff Users</h1>
//             <p className="text-sm text-slate-500">
//               Only admins can create and manage users for both modules
//             </p>
//           </div>
//           <button
//             type="button"
//             onClick={openAddModal}
//             className="inline-flex items-center gap-2 rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125849]"
//           >
//             <Plus size={16} />
//             Add Staff User
//           </button>
//         </div>

//         <div className="mb-4 flex items-center gap-3">
//           <div className="relative max-w-sm flex-1">
//             <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search by name or email..."
//               className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-10 pr-4 text-sm outline-none focus:border-[#176b5b]"
//             />
//           </div>
//         </div>

//         {/* Success banner */}
//         {successMsg && (
//           <div className="mb-4 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
//             <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-[11px] font-bold text-white">
//               ✓
//             </span>
//             <div className="flex-1">
//               <p className="font-semibold">User created</p>
//               <p className="mt-0.5 text-emerald-700">{successMsg}</p>
//             </div>
//             <button
//               type="button"
//               onClick={() => setSuccessMsg(null)}
//               className="rounded p-1 text-emerald-600 hover:bg-emerald-100 hover:text-emerald-900"
//               aria-label="Dismiss"
//             >
//               <X size={16} />
//             </button>
//           </div>
//         )}

//         <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
//           <table className="w-full text-left text-sm">
//             <thead className="border-b border-slate-100 bg-slate-50 text-xs uppercase text-slate-500">
//               <tr>
//                 <th className="px-5 py-3 font-medium">Name</th>
//                 <th className="px-5 py-3 font-medium">Email</th>
//                 <th className="px-5 py-3 font-medium">Role</th>
//                 <th className="px-5 py-3 font-medium">Modules</th>
//                 <th className="px-5 py-3 font-medium">Status</th>
//                 <th className="px-5 py-3 text-right font-medium">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {loading ? (
//                 <tr>
//                   <td
//                     colSpan={6}
//                     className="px-5 py-12 text-center text-sm text-slate-500"
//                   >
//                     Loading users…
//                   </td>
//                 </tr>
//               ) : (
//                 <>
//                   {filtered.map((user) => (
//                     <tr
//                       key={user.id}
//                       className="border-b border-slate-50 hover:bg-slate-50/50"
//                     >
//                       <td className="px-5 py-4 font-medium text-slate-900">
//                         {user.name}
//                       </td>
//                       <td className="px-5 py-4 text-slate-600">{user.email}</td>
//                       <td className="px-5 py-4">
//                         <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium capitalize text-slate-700">
//                           <Shield size={12} />
//                           {user.role}
//                         </span>
//                       </td>
//                       <td className="px-5 py-4">
//                         <div className="flex flex-wrap gap-1.5">
//                           {user.modules.length === 0 ? (
//                             <span className="text-xs text-slate-400">—</span>
//                           ) : (
//                             user.modules.map((m) => (
//                               <span
//                                 key={m}
//                                 className={`rounded-full px-2.5 py-1 text-xs font-medium ${
//                                   m === "interior"
//                                     ? "bg-emerald-50 text-emerald-700"
//                                     : "bg-amber-50 text-amber-700"
//                                 }`}
//                               >
//                                 {m}
//                               </span>
//                             ))
//                           )}
//                         </div>
//                       </td>
//                       <td className="px-5 py-4">
//                         <span
//                           className={`rounded-full px-2.5 py-1 text-xs font-medium ${
//                             user.status === "Active"
//                               ? "bg-green-50 text-green-700"
//                               : "bg-slate-100 text-slate-600"
//                           }`}
//                         >
//                           {user.status}
//                         </span>
//                       </td>
//                       <td className="px-5 py-4 text-right">
//                         <button
//                           type="button"
//                           onClick={() => toggleStatus(user)}
//                           className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                         >
//                           {user.status === "Active"
//                             ? "Deactivate"
//                             : "Activate"}
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                   {filtered.length === 0 && (
//                     <tr>
//                       <td
//                         colSpan={6}
//                         className="px-5 py-12 text-center text-sm text-slate-500"
//                       >
//                         No users found in Firestore collection &quot;users&quot;.
//                       </td>
//                     </tr>
//                   )}
//                 </>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {showAdd && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
//               <div>
//                 <h2 className="text-lg font-bold text-slate-900">
//                   Add Staff User
//                 </h2>
//                 <p className="mt-1 text-xs text-slate-500">
//                   Creates Auth account + profile in Firestore (admin stays signed
//                   in)
//                 </p>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setShowAdd(false)}
//                 className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
//               >
//                 <X size={18} />
//               </button>
//             </div>

//             <form onSubmit={handleCreate} className="space-y-4 p-6">
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                   Full name *
//                 </label>
//                 <input
//                   value={form.name}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, name: e.target.value }))
//                   }
//                   className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b5b]"
//                   placeholder="Staff name"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                   Email *
//                 </label>
//                 <input
//                   type="email"
//                   value={form.email}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, email: e.target.value }))
//                   }
//                   className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b5b]"
//                   placeholder="user@akrish.in"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                   Temporary password *
//                 </label>
//                 <input
//                   type="password"
//                   value={form.password}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, password: e.target.value }))
//                   }
//                   className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b5b]"
//                   placeholder="Min 6 characters"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                   Role
//                 </label>
//                 <select
//                   value={form.role}
//                   onChange={(e) => handleRoleChange(e.target.value)}
//                   className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {ROLES.map((r) => (
//                     <option key={r} value={r}>
//                       {r}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {form.role !== "admin" && (
//                 <div>
//                   <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                     Modules
//                   </label>
//                   <div className="flex gap-4">
//                     {MODULE_OPTIONS.map((m) => (
//                       <label
//                         key={m}
//                         className="flex items-center gap-2 text-sm capitalize text-slate-700"
//                       >
//                         <input
//                           type="checkbox"
//                           checked={form.modules.includes(m)}
//                           onChange={() => toggleModule(m)}
//                         />
//                         {m}
//                       </label>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {form.role === "admin" && (
//                 <p className="rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600">
//                   Admin role gets both <strong>interior</strong> and{" "}
//                   <strong>furniture</strong> modules automatically.
//                 </p>
//               )}

//               <div className="flex justify-end gap-3 pt-2">
//                 <button
//                   type="button"
//                   onClick={() => setShowAdd(false)}
//                   className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={saving}
//                   className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {saving ? "Creating…" : "Create User"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </AuthGuard>
//   );
// }

// "use client";

// import { FormEvent, useEffect, useMemo, useState } from "react";
// import { usePathname } from "next/navigation";
// import { useAuth } from "@/core/auth/AuthContext";
// import AuthGuard from "@/core/auth/AuthGuard";
// import { Plus, Search, Shield, X } from "lucide-react";
// import {
//   getAllStaffUsers,
//   createStaffUser,
//   updateStaffUser,
//   type StaffUserDoc,
// } from "@/modules/admin/services/userService";

// type StaffUser = {
//   id: string;
//   name: string;
//   email: string;
//   role: string;
//   modules: string[];
//   status: "Active" | "Inactive";
// };

// type ErpModule = "interior" | "furniture";

// const ROLES = [
//   "admin",
//   "manager",
//   "sales",
//   "designer",
//   "accountant",
//   "hr",
//   "employee",
// ] as const;

// const MODULE_OPTIONS: ErpModule[] = ["interior", "furniture"];
// const ACTIVE_MODULE_KEY = "akrish_active_module";

// function mapToUi(u: StaffUserDoc): StaffUser {
//   const statusRaw = (u.status || "Active").toString();
//   const status: "Active" | "Inactive" =
//     statusRaw.toLowerCase() === "inactive" ? "Inactive" : "Active";

//   return {
//     id: u.id,
//     name: u.name || u.email?.split("@")[0] || "User",
//     email: u.email || "—",
//     role: (u.role || "employee").toString().toLowerCase(),
//     modules: Array.isArray(u.modules)
//       ? u.modules.map(String)
//       : u.role === "admin"
//         ? ["interior", "furniture"]
//         : [],
//     status,
//   };
// }

// function getActiveModule(pathname: string): ErpModule {
//   if (pathname.includes("/interior")) return "interior";
//   if (pathname.includes("/furniture")) return "furniture";

//   if (typeof window !== "undefined") {
//     try {
//       const stored = localStorage.getItem(ACTIVE_MODULE_KEY);
//       if (stored === "interior" || stored === "furniture") return stored;
//     } catch {
//       /* ignore */
//     }
//   }

//   return "furniture";
// }

// export default function AdminUsersPage() {
//   const { isAdmin } = useAuth();
//   const pathname = usePathname() || "";
//   const activeModule = useMemo(() => getActiveModule(pathname), [pathname]);

//   const [successMsg, setSuccessMsg] = useState<string | null>(null);
//   const [users, setUsers] = useState<StaffUser[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [search, setSearch] = useState("");
//   const [showAdd, setShowAdd] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "sales",
//     modules: [activeModule] as string[],
//     status: "Active" as "Active" | "Inactive",
//   });

//   useEffect(() => {
//     try {
//       if (pathname.includes("/interior")) {
//         localStorage.setItem(ACTIVE_MODULE_KEY, "interior");
//       } else if (pathname.includes("/furniture")) {
//         localStorage.setItem(ACTIVE_MODULE_KEY, "furniture");
//       }
//     } catch {
//       /* ignore */
//     }
//   }, [pathname]);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllStaffUsers();
//         if (cancelled) return;
//         setUsers(data.map(mapToUi));
//       } catch (err) {
//         console.error("Failed to load users:", err);
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
//     const q = search.toLowerCase().trim();
//     if (!q) return users;
//     return users.filter(
//       (u) =>
//         u.name.toLowerCase().includes(q) ||
//         u.email.toLowerCase().includes(q) ||
//         u.role.toLowerCase().includes(q)
//     );
//   }, [users, search]);

//   function openAddModal() {
//     setForm({
//       name: "",
//       email: "",
//       password: "",
//       role: "sales",
//       modules: [activeModule],
//       status: "Active",
//     });
//     setShowAdd(true);
//   }

//   function toggleModule(mod: string) {
//     setForm((prev) => {
//       const has = prev.modules.includes(mod);
//       return {
//         ...prev,
//         modules: has
//           ? prev.modules.filter((m) => m !== mod)
//           : [...prev.modules, mod],
//       };
//     });
//   }

//   function handleRoleChange(role: string) {
//     setForm((f) => ({
//       ...f,
//       role,
//       modules:
//         role === "admin"
//           ? ["interior", "furniture"]
//           : f.modules.length > 0
//             ? f.modules
//             : [activeModule],
//     }));
//   }

//   async function handleCreate(e: FormEvent) {
//     e.preventDefault();

//     if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
//       alert("Name, email and password are required.");
//       return;
//     }

//     if (form.password.length < 6) {
//       alert("Password must be at least 6 characters.");
//       return;
//     }

//     const modules =
//       form.role === "admin"
//         ? ["interior", "furniture"]
//         : form.modules.length > 0
//           ? form.modules
//           : [activeModule];

//     const createdName = form.name.trim();

//     setSaving(true);
//     setSuccessMsg(null);

//     try {
//       const uid = await createStaffUser({
//         name: createdName,
//         email: form.email.trim(),
//         password: form.password,
//         role: form.role,
//         modules,
//         status: form.status,
//       });

//       setUsers((current) => [
//         {
//           id: uid,
//           name: createdName,
//           email: form.email.trim().toLowerCase(),
//           role: form.role,
//           modules,
//           status: form.status,
//         },
//         ...current,
//       ]);

//       setForm({
//         name: "",
//         email: "",
//         password: "",
//         role: "sales",
//         modules: [activeModule],
//         status: "Active",
//       });
//       setShowAdd(false);

//       const moduleLabel =
//         modules.length === 2
//           ? "Interior & Furniture"
//           : modules[0] === "interior"
//             ? "Interior only"
//             : "Furniture only";

//       setSuccessMsg(
//         `User “${createdName}” created successfully (${moduleLabel}). They can sign in with their email and password.`
//       );

//       setTimeout(() => setSuccessMsg(null), 6000);
//     } catch (err: unknown) {
//       console.error(err);
//       const code =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";
//       if (code === "auth/email-already-in-use") {
//         alert("This email is already registered.");
//       } else {
//         alert("Failed to create user. Please try again.");
//       }
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function toggleStatus(user: StaffUser) {
//     const next: "Active" | "Inactive" =
//       user.status === "Active" ? "Inactive" : "Active";

//     setUsers((current) =>
//       current.map((u) => (u.id === user.id ? { ...u, status: next } : u))
//     );

//     try {
//       await updateStaffUser(user.id, { status: next });
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllStaffUsers();
//         setUsers(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   if (!isAdmin) {
//     return (
//       <div className="p-6 text-center text-sm text-red-600 sm:p-8">
//         Only administrators can manage users.
//       </div>
//     );
//   }

//   return (
//     <AuthGuard allowedRoles={["admin"]}>
//       <div className="min-h-screen bg-[#f7f7f4] p-3 sm:p-5 lg:p-6">
//         {/* Header: title + Add button side by side */}
//         <div className="mb-5 flex flex-row items-start justify-between gap-3 sm:mb-6 sm:items-center">
//           <div className="min-w-0 flex-1">
//             <h1 className="text-lg font-semibold text-slate-900 sm:text-xl">
//               Staff Users
//             </h1>
//             <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
//               Only admins can create and manage users for both modules
//             </p>
//           </div>
//           <button
//             type="button"
//             onClick={openAddModal}
//             className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-[#125849] sm:gap-2 sm:px-4 sm:text-sm"
//           >
//             <Plus size={16} className="shrink-0" />
//             <span className="hidden xs:inline sm:inline">Add Staff User</span>
//             {/* <span className="sm:hidden">Add</span> */}
//           </button>
//         </div>

//         {/* Search */}
//         <div className="mb-4">
//           <div className="relative w-full max-w-md">
//             <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search by name or email..."
//               className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-10 pr-4 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//             />
//           </div>
//         </div>

//         {successMsg && (
//           <div className="mb-4 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-3 text-sm text-emerald-800 sm:px-4">
//             <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-[11px] font-bold text-white">
//               ✓
//             </span>
//             <div className="min-w-0 flex-1">
//               <p className="font-semibold">User created</p>
//               <p className="mt-0.5 break-words text-emerald-700">{successMsg}</p>
//             </div>
//             <button
//               type="button"
//               onClick={() => setSuccessMsg(null)}
//               className="shrink-0 rounded p-1 text-emerald-600 hover:bg-emerald-100"
//               aria-label="Dismiss"
//             >
//               <X size={16} />
//             </button>
//           </div>
//         )}

//         {/* Desktop table */}
//         <div className="hidden overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm md:block">
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[720px] text-left text-sm">
//               <thead className="border-b border-slate-100 bg-slate-50 text-xs uppercase text-slate-500">
//                 <tr>
//                   <th className="px-4 py-3 font-medium lg:px-5">Name</th>
//                   <th className="px-4 py-3 font-medium lg:px-5">Email</th>
//                   <th className="px-4 py-3 font-medium lg:px-5">Role</th>
//                   <th className="px-4 py-3 font-medium lg:px-5">Modules</th>
//                   <th className="px-4 py-3 font-medium lg:px-5">Status</th>
//                   <th className="px-4 py-3 text-right font-medium lg:px-5">
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={6}
//                       className="px-5 py-12 text-center text-sm text-slate-500"
//                     >
//                       Loading users…
//                     </td>
//                   </tr>
//                 ) : (
//                   <>
//                     {filtered.map((user) => (
//                       <tr
//                         key={user.id}
//                         className="border-b border-slate-50 hover:bg-slate-50/50"
//                       >
//                         <td className="px-4 py-4 font-medium text-slate-900 lg:px-5">
//                           {user.name}
//                         </td>
//                         <td className="px-4 py-4 text-slate-600 lg:px-5">
//                           {user.email}
//                         </td>
//                         <td className="px-4 py-4 lg:px-5">
//                           <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium capitalize text-slate-700">
//                             <Shield size={12} />
//                             {user.role}
//                           </span>
//                         </td>
//                         <td className="px-4 py-4 lg:px-5">
//                           <div className="flex flex-wrap gap-1.5">
//                             {user.modules.length === 0 ? (
//                               <span className="text-xs text-slate-400">—</span>
//                             ) : (
//                               user.modules.map((m) => (
//                                 <span
//                                   key={m}
//                                   className={`rounded-full px-2.5 py-1 text-xs font-medium ${
//                                     m === "interior"
//                                       ? "bg-emerald-50 text-emerald-700"
//                                       : "bg-amber-50 text-amber-700"
//                                   }`}
//                                 >
//                                   {m}
//                                 </span>
//                               ))
//                             )}
//                           </div>
//                         </td>
//                         <td className="px-4 py-4 lg:px-5">
//                           <span
//                             className={`rounded-full px-2.5 py-1 text-xs font-medium ${
//                               user.status === "Active"
//                                 ? "bg-green-50 text-green-700"
//                                 : "bg-slate-100 text-slate-600"
//                             }`}
//                           >
//                             {user.status}
//                           </span>
//                         </td>
//                         <td className="px-4 py-4 text-right lg:px-5">
//                           <button
//                             type="button"
//                             onClick={() => toggleStatus(user)}
//                             className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                           >
//                             {user.status === "Active"
//                               ? "Deactivate"
//                               : "Activate"}
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                     {filtered.length === 0 && (
//                       <tr>
//                         <td
//                           colSpan={6}
//                           className="px-5 py-12 text-center text-sm text-slate-500"
//                         >
//                           No users found in Firestore collection
//                           &quot;users&quot;.
//                         </td>
//                       </tr>
//                     )}
//                   </>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Mobile cards */}
//         <div className="space-y-3 md:hidden">
//           {loading ? (
//             <div className="rounded-xl border border-slate-200 bg-white px-4 py-12 text-center text-sm text-slate-500">
//               Loading users…
//             </div>
//           ) : filtered.length === 0 ? (
//             <div className="rounded-xl border border-slate-200 bg-white px-4 py-12 text-center text-sm text-slate-500">
//               No users found.
//             </div>
//           ) : (
//             filtered.map((user) => (
//               <div
//                 key={user.id}
//                 className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
//               >
//                 <div className="flex items-start justify-between gap-2">
//                   <div className="min-w-0">
//                     <p className="truncate font-semibold text-slate-900">
//                       {user.name}
//                     </p>
//                     <p className="mt-0.5 truncate text-xs text-slate-500">
//                       {user.email}
//                     </p>
//                   </div>
//                   <span
//                     className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-medium ${
//                       user.status === "Active"
//                         ? "bg-green-50 text-green-700"
//                         : "bg-slate-100 text-slate-600"
//                     }`}
//                   >
//                     {user.status}
//                   </span>
//                 </div>

//                 <div className="mt-3 flex flex-wrap items-center gap-2">
//                   <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium capitalize text-slate-700">
//                     <Shield size={12} />
//                     {user.role}
//                   </span>
//                   {user.modules.map((m) => (
//                     <span
//                       key={m}
//                       className={`rounded-full px-2.5 py-1 text-xs font-medium ${
//                         m === "interior"
//                           ? "bg-emerald-50 text-emerald-700"
//                           : "bg-amber-50 text-amber-700"
//                       }`}
//                     >
//                       {m}
//                     </span>
//                   ))}
//                 </div>

//                 <button
//                   type="button"
//                   onClick={() => toggleStatus(user)}
//                   className="mt-3 w-full rounded-lg border border-slate-200 py-2 text-xs font-medium text-slate-600 hover:border-[#176b5b] hover:text-[#176b5b]"
//                 >
//                   {user.status === "Active" ? "Deactivate" : "Activate"}
//                 </button>
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       {/* Add modal — scrollable on small screens */}
//       {showAdd && (
//         <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-0 sm:items-center sm:p-4">
//           <div className="max-h-[92vh] w-full overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:max-w-lg sm:rounded-2xl">
//             <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-4 py-4 sm:px-6">
//               <div className="min-w-0 pr-2">
//                 <h2 className="text-base font-bold text-slate-900 sm:text-lg">
//                   Add Staff User
//                 </h2>
//                 <p className="mt-1 text-[11px] text-slate-500 sm:text-xs">
//                   Creates Auth account + profile (admin stays signed in)
//                 </p>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setShowAdd(false)}
//                 className="shrink-0 rounded-lg p-2 text-slate-400 hover:bg-slate-100"
//               >
//                 <X size={18} />
//               </button>
//             </div>

//             <form onSubmit={handleCreate} className="space-y-4 p-4 sm:p-6">
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                   Full name *
//                 </label>
//                 <input
//                   value={form.name}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, name: e.target.value }))
//                   }
//                   className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b5b]"
//                   placeholder="Staff name"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                   Email *
//                 </label>
//                 <input
//                   type="email"
//                   value={form.email}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, email: e.target.value }))
//                   }
//                   className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b5b]"
//                   placeholder="user@akrish.in"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                   Temporary password *
//                 </label>
//                 <input
//                   type="password"
//                   value={form.password}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, password: e.target.value }))
//                   }
//                   className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b5b]"
//                   placeholder="Min 6 characters"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                   Role
//                 </label>
//                 <select
//                   value={form.role}
//                   onChange={(e) => handleRoleChange(e.target.value)}
//                   className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {ROLES.map((r) => (
//                     <option key={r} value={r}>
//                       {r}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {form.role !== "admin" && (
//                 <div>
//                   <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                     Modules
//                   </label>
//                   <div className="flex flex-wrap gap-4">
//                     {MODULE_OPTIONS.map((m) => (
//                       <label
//                         key={m}
//                         className="flex items-center gap-2 text-sm capitalize text-slate-700"
//                       >
//                         <input
//                           type="checkbox"
//                           checked={form.modules.includes(m)}
//                           onChange={() => toggleModule(m)}
//                           className="h-4 w-4 accent-[#176b5b]"
//                         />
//                         {m}
//                       </label>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {form.role === "admin" && (
//                 <p className="rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600">
//                   Admin role gets both <strong>interior</strong> and{" "}
//                   <strong>furniture</strong> modules automatically.
//                 </p>
//               )}

//               <div className="flex flex-col-reverse gap-2 border-t border-slate-100 pt-4 sm:flex-row sm:justify-end sm:gap-3">
//                 <button
//                   type="button"
//                   onClick={() => setShowAdd(false)}
//                   className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={saving}
//                   className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {saving ? "Creating…" : "Create User"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </AuthGuard>
//   );
// }

// "use client";

// import { FormEvent, useEffect, useMemo, useState } from "react";
// import { usePathname } from "next/navigation";
// import { useAuth } from "@/core/auth/AuthContext";
// import AuthGuard from "@/core/auth/AuthGuard";
// import { Plus, Search, Shield, X } from "lucide-react";
// import {
//   getAllStaffUsers,
//   createStaffUser,
//   updateStaffUser,
//   type StaffUserDoc,
// } from "@/modules/admin/services/userService";

// type StaffUser = {
//   id: string;
//   name: string;
//   email: string;
//   role: string;
//   modules: string[];
//   status: "Active" | "Inactive";
// };

// type ErpModule = "interior" | "furniture";

// const ROLES = [
//   "admin",
//   "manager",
//   "sales",
//   "designer",
//   "accountant",
//   "hr",
//   "employee",
// ] as const;

// const MODULE_OPTIONS: ErpModule[] = ["interior", "furniture"];
// const ACTIVE_MODULE_KEY = "akrish_active_module";

// function mapToUi(u: StaffUserDoc): StaffUser {
//   const statusRaw = (u.status || "Active").toString();
//   const status: "Active" | "Inactive" =
//     statusRaw.toLowerCase() === "inactive" ? "Inactive" : "Active";

//   return {
//     id: u.id,
//     name: u.name || u.email?.split("@")[0] || "User",
//     email: u.email || "—",
//     role: (u.role || "employee").toString().toLowerCase(),
//     modules: Array.isArray(u.modules)
//       ? u.modules.map(String)
//       : u.role === "admin"
//         ? ["interior", "furniture"]
//         : [],
//     status,
//   };
// }

// function getActiveModule(pathname: string): ErpModule {
//   if (pathname.includes("/interior")) return "interior";
//   if (pathname.includes("/furniture")) return "furniture";

//   if (typeof window !== "undefined") {
//     try {
//       const stored = localStorage.getItem(ACTIVE_MODULE_KEY);
//       if (stored === "interior" || stored === "furniture") return stored;
//     } catch {
//       /* ignore */
//     }
//   }

//   return "furniture";
// }

// export default function AdminUsersPage() {
//   const { isAdmin } = useAuth();
//   const pathname = usePathname() || "";
//   const activeModule = useMemo(() => getActiveModule(pathname), [pathname]);

//   const [successMsg, setSuccessMsg] = useState<string | null>(null);
//   const [users, setUsers] = useState<StaffUser[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [search, setSearch] = useState("");
//   const [showAdd, setShowAdd] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "sales",
//     modules: [activeModule] as string[],
//     status: "Active" as "Active" | "Inactive",
//   });

//   useEffect(() => {
//     try {
//       if (pathname.includes("/interior")) {
//         localStorage.setItem(ACTIVE_MODULE_KEY, "interior");
//       } else if (pathname.includes("/furniture")) {
//         localStorage.setItem(ACTIVE_MODULE_KEY, "furniture");
//       }
//     } catch {
//       /* ignore */
//     }
//   }, [pathname]);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllStaffUsers();
//         if (cancelled) return;
//         setUsers(data.map(mapToUi));
//       } catch (err) {
//         console.error("Failed to load users:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   // Lock body scroll while floating form is open
//   useEffect(() => {
//     if (!showAdd) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, [showAdd]);

//   const filtered = useMemo(() => {
//     const q = search.toLowerCase().trim();
//     if (!q) return users;
//     return users.filter(
//       (u) =>
//         u.name.toLowerCase().includes(q) ||
//         u.email.toLowerCase().includes(q) ||
//         u.role.toLowerCase().includes(q)
//     );
//   }, [users, search]);

//   function openAddModal() {
//     setForm({
//       name: "",
//       email: "",
//       password: "",
//       role: "sales",
//       modules: [activeModule],
//       status: "Active",
//     });
//     setShowAdd(true);
//   }

//   function closeAddModal() {
//     if (saving) return;
//     setShowAdd(false);
//   }

//   function toggleModule(mod: string) {
//     setForm((prev) => {
//       const has = prev.modules.includes(mod);
//       return {
//         ...prev,
//         modules: has
//           ? prev.modules.filter((m) => m !== mod)
//           : [...prev.modules, mod],
//       };
//     });
//   }

//   function handleRoleChange(role: string) {
//     setForm((f) => ({
//       ...f,
//       role,
//       modules:
//         role === "admin"
//           ? ["interior", "furniture"]
//           : f.modules.length > 0
//             ? f.modules
//             : [activeModule],
//     }));
//   }

//   async function handleCreate(e: FormEvent) {
//     e.preventDefault();

//     if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
//       alert("Name, email and password are required.");
//       return;
//     }

//     if (form.password.length < 6) {
//       alert("Password must be at least 6 characters.");
//       return;
//     }

//     const modules =
//       form.role === "admin"
//         ? ["interior", "furniture"]
//         : form.modules.length > 0
//           ? form.modules
//           : [activeModule];

//     const createdName = form.name.trim();

//     setSaving(true);
//     setSuccessMsg(null);

//     try {
//       const uid = await createStaffUser({
//         name: createdName,
//         email: form.email.trim(),
//         password: form.password,
//         role: form.role,
//         modules,
//         status: form.status,
//       });

//       setUsers((current) => [
//         {
//           id: uid,
//           name: createdName,
//           email: form.email.trim().toLowerCase(),
//           role: form.role,
//           modules,
//           status: form.status,
//         },
//         ...current,
//       ]);

//       setForm({
//         name: "",
//         email: "",
//         password: "",
//         role: "sales",
//         modules: [activeModule],
//         status: "Active",
//       });
//       setShowAdd(false);

//       const moduleLabel =
//         modules.length === 2
//           ? "Interior & Furniture"
//           : modules[0] === "interior"
//             ? "Interior only"
//             : "Furniture only";

//       setSuccessMsg(
//         `User “${createdName}” created successfully (${moduleLabel}). They can sign in with their email and password.`
//       );

//       setTimeout(() => setSuccessMsg(null), 6000);
//     } catch (err: unknown) {
//       console.error(err);
//       const code =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";
//       if (code === "auth/email-already-in-use") {
//         alert("This email is already registered.");
//       } else {
//         alert("Failed to create user. Please try again.");
//       }
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function toggleStatus(user: StaffUser) {
//     const next: "Active" | "Inactive" =
//       user.status === "Active" ? "Inactive" : "Active";

//     setUsers((current) =>
//       current.map((u) => (u.id === user.id ? { ...u, status: next } : u))
//     );

//     try {
//       await updateStaffUser(user.id, { status: next });
//     } catch (err) {
//       console.error(err);
//       try {
//         const data = await getAllStaffUsers();
//         setUsers(data.map(mapToUi));
//       } catch {
//         /* ignore */
//       }
//     }
//   }

//   if (!isAdmin) {
//     return (
//       <div className="p-6 text-center text-sm text-red-600 sm:p-8">
//         Only administrators can manage users.
//       </div>
//     );
//   }

//   return (
//     <AuthGuard allowedRoles={["admin"]}>
//       <div className="min-h-screen bg-[#f7f7f4] p-3 sm:p-5 lg:p-6">
//         {/* Header + Add beside title */}
//         <div className="mb-5 flex items-center justify-between gap-3 sm:mb-6">
//           <div className="min-w-0">
//             <h1 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
//               Staff Users
//             </h1>
//             <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
//               Create and manage staff for Interior & Furniture
//             </p>
//           </div>
//           <button
//             type="button"
//             onClick={openAddModal}
//             className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#176b5b] px-3.5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125849] active:scale-[0.98] sm:gap-2 sm:px-4 sm:text-sm"
//           >
//             <Plus size={16} strokeWidth={2.5} />
//             <span className="hidden sm:inline">Add Staff User</span>
//             <span className="sm:hidden">Add</span>
//           </button>
//         </div>

//         <div className="mb-4">
//           <div className="relative w-full max-w-md">
//             <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search by name or email..."
//               className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/15"
//             />
//           </div>
//         </div>

//         {successMsg && (
//           <div className="mb-4 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-3 py-3 text-sm text-emerald-800 sm:px-4">
//             <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-[11px] font-bold text-white">
//               ✓
//             </span>
//             <div className="min-w-0 flex-1">
//               <p className="font-semibold">User created</p>
//               <p className="mt-0.5 break-words text-emerald-700">{successMsg}</p>
//             </div>
//             <button
//               type="button"
//               onClick={() => setSuccessMsg(null)}
//               className="shrink-0 rounded-lg p-1 text-emerald-600 hover:bg-emerald-100"
//               aria-label="Dismiss"
//             >
//               <X size={16} />
//             </button>
//           </div>
//         )}

//         {/* Desktop table */}
//         <div className="hidden overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm md:block">
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[720px] text-left text-sm">
//               <thead className="border-b border-slate-100 bg-slate-50/80 text-xs uppercase tracking-wide text-slate-500">
//                 <tr>
//                   <th className="px-5 py-3.5 font-medium">Name</th>
//                   <th className="px-5 py-3.5 font-medium">Email</th>
//                   <th className="px-5 py-3.5 font-medium">Role</th>
//                   <th className="px-5 py-3.5 font-medium">Modules</th>
//                   <th className="px-5 py-3.5 font-medium">Status</th>
//                   <th className="px-5 py-3.5 text-right font-medium">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {loading ? (
//                   <tr>
//                     <td
//                       colSpan={6}
//                       className="px-5 py-14 text-center text-sm text-slate-500"
//                     >
//                       Loading users…
//                     </td>
//                   </tr>
//                 ) : filtered.length === 0 ? (
//                   <tr>
//                     <td
//                       colSpan={6}
//                       className="px-5 py-14 text-center text-sm text-slate-500"
//                     >
//                       No users found.
//                     </td>
//                   </tr>
//                 ) : (
//                   filtered.map((user) => (
//                     <tr
//                       key={user.id}
//                       className="border-b border-slate-50 transition hover:bg-slate-50/60"
//                     >
//                       <td className="px-5 py-4 font-medium text-slate-900">
//                         {user.name}
//                       </td>
//                       <td className="px-5 py-4 text-slate-600">{user.email}</td>
//                       <td className="px-5 py-4">
//                         <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium capitalize text-slate-700">
//                           <Shield size={12} />
//                           {user.role}
//                         </span>
//                       </td>
//                       <td className="px-5 py-4">
//                         <div className="flex flex-wrap gap-1.5">
//                           {user.modules.length === 0 ? (
//                             <span className="text-xs text-slate-400">—</span>
//                           ) : (
//                             user.modules.map((m) => (
//                               <span
//                                 key={m}
//                                 className={`rounded-full px-2.5 py-1 text-xs font-medium capitalize ${
//                                   m === "interior"
//                                     ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
//                                     : "bg-amber-50 text-amber-800 ring-1 ring-amber-100"
//                                 }`}
//                               >
//                                 {m}
//                               </span>
//                             ))
//                           )}
//                         </div>
//                       </td>
//                       <td className="px-5 py-4">
//                         <span
//                           className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
//                             user.status === "Active"
//                               ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
//                               : "bg-slate-100 text-slate-600 ring-1 ring-slate-200"
//                           }`}
//                         >
//                           {user.status}
//                         </span>
//                       </td>
//                       <td className="px-5 py-4 text-right">
//                         <button
//                           type="button"
//                           onClick={() => toggleStatus(user)}
//                           className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-[#176b5b] hover:text-[#176b5b]"
//                         >
//                           {user.status === "Active"
//                             ? "Deactivate"
//                             : "Activate"}
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Mobile cards — refined UI */}
//         <div className="space-y-3 md:hidden">
//           {loading ? (
//             <div className="rounded-2xl border border-slate-200 bg-white px-4 py-14 text-center text-sm text-slate-500">
//               Loading users…
//             </div>
//           ) : filtered.length === 0 ? (
//             <div className="rounded-2xl border border-dashed border-slate-200 bg-white px-4 py-14 text-center text-sm text-slate-500">
//               No users found.
//             </div>
//           ) : (
//             filtered.map((user) => (
//               <article
//                 key={user.id}
//                 className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
//               >
//                 <div className="p-4">
//                   <div className="flex items-start justify-between gap-3">
//                     <div className="flex min-w-0 items-start gap-3">
//                       <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eef7f4] text-sm font-bold text-[#176b5b]">
//                         {(user.name || "?").charAt(0).toUpperCase()}
//                       </div>
//                       <div className="min-w-0 pt-0.5">
//                         <p className="truncate text-[15px] font-semibold text-slate-900">
//                           {user.name}
//                         </p>
//                         <p className="mt-0.5 truncate text-xs text-slate-500">
//                           {user.email}
//                         </p>
//                       </div>
//                     </div>
//                     <span
//                       className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-wide ${
//                         user.status === "Active"
//                           ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
//                           : "bg-slate-100 text-slate-500 ring-1 ring-slate-200"
//                       }`}
//                     >
//                       {user.status}
//                     </span>
//                   </div>

//                   <div className="mt-3.5 flex flex-wrap items-center gap-2">
//                     <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium capitalize text-slate-700">
//                       <Shield size={11} />
//                       {user.role}
//                     </span>
//                     {user.modules.map((m) => (
//                       <span
//                         key={m}
//                         className={`rounded-full px-2.5 py-1 text-[11px] font-medium capitalize ${
//                           m === "interior"
//                             ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
//                             : "bg-amber-50 text-amber-800 ring-1 ring-amber-100"
//                         }`}
//                       >
//                         {m}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="border-t border-slate-100 bg-slate-50/50 px-4 py-3">
//                   <button
//                     type="button"
//                     onClick={() => toggleStatus(user)}
//                     className="w-full rounded-xl border border-slate-200 bg-white py-2.5 text-xs font-semibold text-slate-700 transition hover:border-[#176b5b] hover:text-[#176b5b] active:bg-slate-50"
//                   >
//                     {user.status === "Active" ? "Deactivate" : "Activate"}
//                   </button>
//                 </div>
//               </article>
//             ))
//           )}
//         </div>
//       </div>

//       {/* Floating form overlay */}
//       {showAdd && (
//         <div
//           className="fixed inset-0 z-[100] flex items-center justify-center p-4"
//           role="dialog"
//           aria-modal="true"
//           aria-labelledby="add-staff-title"
//         >
//           {/* Backdrop */}
//           <button
//             type="button"
//             aria-label="Close"
//             className="absolute inset-0 bg-slate-900/50 backdrop-blur-[2px] transition-opacity"
//             onClick={closeAddModal}
//           />

//           {/* Floating panel */}
//           <div className="relative z-10 flex max-h-[min(90vh,640px)] w-full max-w-md flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 animate-in fade-in zoom-in-95 duration-200">
//             <div className="flex shrink-0 items-center justify-between border-b border-slate-100 px-5 py-4">
//               <div>
//                 <h2
//                   id="add-staff-title"
//                   className="text-base font-bold text-slate-900"
//                 >
//                   Add Staff User
//                 </h2>
//                 <p className="mt-0.5 text-xs text-slate-500">
//                   Auth account + profile · you stay signed in
//                 </p>
//               </div>
//               <button
//                 type="button"
//                 onClick={closeAddModal}
//                 disabled={saving}
//                 className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 disabled:opacity-50"
//               >
//                 <X size={18} />
//               </button>
//             </div>

//             <form
//               onSubmit={handleCreate}
//               className="flex min-h-0 flex-1 flex-col"
//             >
//               <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
//                 <div>
//                   <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                     Full name *
//                   </label>
//                   <input
//                     value={form.name}
//                     onChange={(e) =>
//                       setForm((f) => ({ ...f, name: e.target.value }))
//                     }
//                     className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/15"
//                     placeholder="Staff name"
//                     autoFocus
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                     Email *
//                   </label>
//                   <input
//                     type="email"
//                     value={form.email}
//                     onChange={(e) =>
//                       setForm((f) => ({ ...f, email: e.target.value }))
//                     }
//                     className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/15"
//                     placeholder="user@akrish.in"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                     Temporary password *
//                   </label>
//                   <input
//                     type="password"
//                     value={form.password}
//                     onChange={(e) =>
//                       setForm((f) => ({ ...f, password: e.target.value }))
//                     }
//                     className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/15"
//                     placeholder="Min 6 characters"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                     Role
//                   </label>
//                   <select
//                     value={form.role}
//                     onChange={(e) => handleRoleChange(e.target.value)}
//                     className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/15"
//                   >
//                     {ROLES.map((r) => (
//                       <option key={r} value={r}>
//                         {r}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {form.role !== "admin" ? (
//                   <div>
//                     <label className="mb-2 block text-sm font-medium text-slate-700">
//                       Modules
//                     </label>
//                     <div className="flex flex-wrap gap-2">
//                       {MODULE_OPTIONS.map((m) => {
//                         const on = form.modules.includes(m);
//                         return (
//                           <button
//                             key={m}
//                             type="button"
//                             onClick={() => toggleModule(m)}
//                             className={`rounded-full px-3.5 py-2 text-xs font-semibold capitalize transition ${
//                               on
//                                 ? m === "interior"
//                                   ? "bg-emerald-600 text-white"
//                                   : "bg-amber-600 text-white"
//                                 : "bg-slate-100 text-slate-600 hover:bg-slate-200"
//                             }`}
//                           >
//                             {m}
//                           </button>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 ) : (
//                   <p className="rounded-xl bg-slate-50 px-3.5 py-2.5 text-xs leading-5 text-slate-600">
//                     Admin gets both <strong>interior</strong> and{" "}
//                     <strong>furniture</strong> automatically.
//                   </p>
//                 )}
//               </div>

//               <div className="flex shrink-0 gap-2 border-t border-slate-100 bg-slate-50/80 px-5 py-4">
//                 <button
//                   type="button"
//                   onClick={closeAddModal}
//                   disabled={saving}
//                   className="flex-1 rounded-xl border border-slate-200 bg-white py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={saving}
//                   className="flex-1 rounded-xl bg-[#176b5b] py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {saving ? "Creating…" : "Create User"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </AuthGuard>
//   );
// }

"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/core/auth/AuthContext";
import AuthGuard from "@/core/auth/AuthGuard";
import { Plus, Search, Shield, X } from "lucide-react";
import {
  getAllStaffUsers,
  createStaffUser,
  updateStaffUser,
  type StaffUserDoc,
} from "@/modules/admin/services/userService";

type StaffUser = {
  id: string;
  name: string;
  email: string;
  role: string;
  modules: string[];
  status: "Active" | "Inactive";
};

type ErpModule = "interior" | "furniture";

const ROLES = [
  "admin",
  "manager",
  "sales",
  "designer",
  "accountant",
  "hr",
  "employee",
] as const;

const MODULE_OPTIONS: ErpModule[] = ["interior", "furniture"];
const ACTIVE_MODULE_KEY = "akrish_active_module";

function mapToUi(u: StaffUserDoc): StaffUser {
  const statusRaw = (u.status || "Active").toString();
  const status: "Active" | "Inactive" =
    statusRaw.toLowerCase() === "inactive" ? "Inactive" : "Active";

  return {
    id: u.id,
    name: u.name || u.email?.split("@")[0] || "User",
    email: u.email || "—",
    role: (u.role || "employee").toString().toLowerCase(),
    modules: Array.isArray(u.modules)
      ? u.modules.map(String)
      : u.role === "admin"
        ? ["interior", "furniture"]
        : [],
    status,
  };
}

function getActiveModule(pathname: string): ErpModule {
  if (pathname.includes("/interior")) return "interior";
  if (pathname.includes("/furniture")) return "furniture";

  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem(ACTIVE_MODULE_KEY);
      if (stored === "interior" || stored === "furniture") return stored;
    } catch {
      /* ignore */
    }
  }

  return "furniture";
}

const emptyForm = {
  name: "",
  email: "",
  password: "",
  role: "", // no default
  modules: [] as string[], // no default
  status: "Active" as "Active" | "Inactive",
};

export default function AdminUsersPage() {
  const { isAdmin } = useAuth();
  const pathname = usePathname() || "";
  const activeModule = useMemo(() => getActiveModule(pathname), [pathname]);

  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [users, setUsers] = useState<StaffUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    try {
      if (pathname.includes("/interior")) {
        localStorage.setItem(ACTIVE_MODULE_KEY, "interior");
      } else if (pathname.includes("/furniture")) {
        localStorage.setItem(ACTIVE_MODULE_KEY, "furniture");
      }
    } catch {
      /* ignore */
    }
  }, [pathname]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const data = await getAllStaffUsers();
        if (cancelled) return;
        setUsers(data.map(mapToUi));
      } catch (err) {
        console.error("Failed to load users:", err);
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
    if (!showAdd) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showAdd]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return users;
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        u.role.toLowerCase().includes(q)
    );
  }, [users, search]);

  function openAddModal() {
    setForm({ ...emptyForm });
    setShowAdd(true);
  }

  function closeAddModal() {
    if (saving) return;
    setShowAdd(false);
  }

  function toggleModule(mod: string) {
    setForm((prev) => {
      const has = prev.modules.includes(mod);
      return {
        ...prev,
        modules: has
          ? prev.modules.filter((m) => m !== mod)
          : [...prev.modules, mod],
      };
    });
  }

  function handleRoleChange(role: string) {
    setForm((f) => ({
      ...f,
      role,
      // Admin auto-gets both; others keep current selection (may be empty)
      modules: role === "admin" ? ["interior", "furniture"] : f.modules,
    }));
  }

  async function handleCreate(e: FormEvent) {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
      alert("Name, email and password are required.");
      return;
    }

    if (form.password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (!form.role) {
      alert("Please select a role.");
      return;
    }

    const modules =
      form.role === "admin"
        ? ["interior", "furniture"]
        : form.modules;

    if (form.role !== "admin" && modules.length === 0) {
      alert("Please select at least one module (Interior or Furniture).");
      return;
    }

    const createdName = form.name.trim();

    setSaving(true);
    setSuccessMsg(null);

    try {
      const uid = await createStaffUser({
        name: createdName,
        email: form.email.trim(),
        password: form.password,
        role: form.role,
        modules,
        status: form.status,
      });

      setUsers((current) => [
        {
          id: uid,
          name: createdName,
          email: form.email.trim().toLowerCase(),
          role: form.role,
          modules,
          status: form.status,
        },
        ...current,
      ]);

      setForm({ ...emptyForm });
      setShowAdd(false);

      const moduleLabel =
        modules.length === 2
          ? "Interior & Furniture"
          : modules[0] === "interior"
            ? "Interior only"
            : "Furniture only";

      setSuccessMsg(
        `User “${createdName}” created successfully (${moduleLabel}). They can sign in with their email and password.`
      );

      setTimeout(() => setSuccessMsg(null), 6000);
    } catch (err: unknown) {
      console.error(err);
      const code =
        err && typeof err === "object" && "code" in err
          ? String((err as { code: string }).code)
          : "";
      if (code === "auth/email-already-in-use") {
        alert("This email is already registered.");
      } else {
        alert("Failed to create user. Please try again.");
      }
    } finally {
      setSaving(false);
    }
  }

  async function toggleStatus(user: StaffUser) {
    const next: "Active" | "Inactive" =
      user.status === "Active" ? "Inactive" : "Active";

    setUsers((current) =>
      current.map((u) => (u.id === user.id ? { ...u, status: next } : u))
    );

    try {
      await updateStaffUser(user.id, { status: next });
    } catch (err) {
      console.error(err);
      try {
        const data = await getAllStaffUsers();
        setUsers(data.map(mapToUi));
      } catch {
        /* ignore */
      }
    }
  }

  if (!isAdmin) {
    return (
      <div className="p-6 text-center text-sm text-red-600 sm:p-8">
        Only administrators can manage users.
      </div>
    );
  }

  return (
    <AuthGuard allowedRoles={["admin"]}>
      <div className="min-h-screen bg-[#f7f7f4] p-3 sm:p-5 lg:p-6">
        <div className="mb-5 flex items-center justify-between gap-3 sm:mb-6">
          <div className="min-w-0">
            <h1 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
              Staff Users
            </h1>
            <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
              Create and manage staff for Interior & Furniture
            </p>
          </div>
          <button
            type="button"
            onClick={openAddModal}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#176b5b] px-3.5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125849] active:scale-[0.98] sm:gap-2 sm:px-4 sm:text-sm"
          >
            <Plus size={16} strokeWidth={2.5} />
            <span className="hidden sm:inline">Add Staff User</span>
            <span className="sm:hidden">Add</span>
          </button>
        </div>

        <div className="mb-4">
          <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or email..."
              className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/15"
            />
          </div>
        </div>

        {successMsg && (
          <div className="mb-4 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-3 py-3 text-sm text-emerald-800 sm:px-4">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-[11px] font-bold text-white">
              ✓
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-semibold">User created</p>
              <p className="mt-0.5 break-words text-emerald-700">{successMsg}</p>
            </div>
            <button
              type="button"
              onClick={() => setSuccessMsg(null)}
              className="shrink-0 rounded-lg p-1 text-emerald-600 hover:bg-emerald-100"
              aria-label="Dismiss"
            >
              <X size={16} />
            </button>
          </div>
        )}

        {/* Desktop table */}
        <div className="hidden overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm md:block">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="border-b border-slate-100 bg-slate-50/80 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-5 py-3.5 font-medium">Name</th>
                  <th className="px-5 py-3.5 font-medium">Email</th>
                  <th className="px-5 py-3.5 font-medium">Role</th>
                  <th className="px-5 py-3.5 font-medium">Modules</th>
                  <th className="px-5 py-3.5 font-medium">Status</th>
                  <th className="px-5 py-3.5 text-right font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-5 py-14 text-center text-sm text-slate-500"
                    >
                      Loading users…
                    </td>
                  </tr>
                ) : filtered.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-5 py-14 text-center text-sm text-slate-500"
                    >
                      No users found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((user) => (
                    <tr
                      key={user.id}
                      className="border-b border-slate-50 transition hover:bg-slate-50/60"
                    >
                      <td className="px-5 py-4 font-medium text-slate-900">
                        {user.name}
                      </td>
                      <td className="px-5 py-4 text-slate-600">{user.email}</td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium capitalize text-slate-700">
                          <Shield size={12} />
                          {user.role}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex flex-wrap gap-1.5">
                          {user.modules.length === 0 ? (
                            <span className="text-xs text-slate-400">—</span>
                          ) : (
                            user.modules.map((m) => (
                              <span
                                key={m}
                                className={`rounded-full px-2.5 py-1 text-xs font-medium capitalize ${
                                  m === "interior"
                                    ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
                                    : "bg-amber-50 text-amber-800 ring-1 ring-amber-100"
                                }`}
                              >
                                {m}
                              </span>
                            ))
                          )}
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                            user.status === "Active"
                              ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
                              : "bg-slate-100 text-slate-600 ring-1 ring-slate-200"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <button
                          type="button"
                          onClick={() => toggleStatus(user)}
                          className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-[#176b5b] hover:text-[#176b5b]"
                        >
                          {user.status === "Active"
                            ? "Deactivate"
                            : "Activate"}
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile cards — chips + activate on same line */}
        <div className="space-y-3 md:hidden">
          {loading ? (
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-14 text-center text-sm text-slate-500">
              Loading users…
            </div>
          ) : filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white px-4 py-14 text-center text-sm text-slate-500">
              No users found.
            </div>
          ) : (
            filtered.map((user) => (
              <article
                key={user.id}
                className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
              >
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eef7f4] text-sm font-bold text-[#176b5b]">
                        {(user.name || "?").charAt(0).toUpperCase()}
                      </div>
                      <div className="min-w-0 pt-0.5">
                        <p className="truncate text-[15px] font-semibold text-slate-900">
                          {user.name}
                        </p>
                        <p className="mt-0.5 truncate text-xs text-slate-500">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                        user.status === "Active"
                          ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
                          : "bg-slate-100 text-slate-500 ring-1 ring-slate-200"
                      }`}
                    >
                      {user.status}
                    </span>
                  </div>

                  {/* Role + modules + Activate/Deactivate on one row */}
                  <div className="mt-3.5 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium capitalize text-slate-700">
                      <Shield size={11} />
                      {user.role}
                    </span>
                    {user.modules.map((m) => (
                      <span
                        key={m}
                        className={`rounded-full px-2.5 py-1 text-[11px] font-medium capitalize ${
                          m === "interior"
                            ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
                            : "bg-amber-50 text-amber-800 ring-1 ring-amber-100"
                        }`}
                      >
                        {m}
                      </span>
                    ))}
                    <button
                      type="button"
                      onClick={() => toggleStatus(user)}
                      className="ml-auto rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold text-slate-600 transition hover:border-[#176b5b] hover:text-[#176b5b]"
                    >
                      {user.status === "Active" ? "Deactivate" : "Activate"}
                    </button>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>

      {/* Floating form — no defaults */}
      {showAdd && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="add-staff-title"
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-[2px]"
            onClick={closeAddModal}
          />

          <div className="relative z-10 flex max-h-[min(90vh,640px)] w-full max-w-md flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
            <div className="flex shrink-0 items-center justify-between border-b border-slate-100 px-5 py-4">
              <div>
                <h2
                  id="add-staff-title"
                  className="text-base font-bold text-slate-900"
                >
                  Add Staff User
                </h2>
                <p className="mt-0.5 text-xs text-slate-500">
                  Auth account + profile · you stay signed in
                </p>
              </div>
              <button
                type="button"
                onClick={closeAddModal}
                disabled={saving}
                className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 disabled:opacity-50"
              >
                <X size={18} />
              </button>
            </div>

            <form
              onSubmit={handleCreate}
              className="flex min-h-0 flex-1 flex-col"
            >
              <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Full name *
                  </label>
                  <input
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/15"
                    placeholder="Staff name"
                    autoFocus
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/15"
                    placeholder="user@akrish.in"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Temporary password *
                  </label>
                  <input
                    type="password"
                    value={form.password}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, password: e.target.value }))
                    }
                    className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/15"
                    placeholder="Min 6 characters"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Role *
                  </label>
                  <select
                    value={form.role}
                    onChange={(e) => handleRoleChange(e.target.value)}
                    className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/15"
                  >
                    <option value="" disabled>
                      Select role
                    </option>
                    {ROLES.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                {/* {form.role && form.role !== "admin" && (
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Modules *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {MODULE_OPTIONS.map((m) => {
                        const on = form.modules.includes(m);
                        return (
                          <button
                            key={m}
                            type="button"
                            onClick={() => toggleModule(m)}
                            className={`rounded-full px-3.5 py-2 text-xs font-semibold capitalize transition ${
                              on
                                ? m === "interior"
                                  ? "bg-emerald-600 text-white"
                                  : "bg-amber-600 text-white"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                            }`}
                          >
                            {m}
                          </button>
                        );
                      })}
                    </div>
                    {form.modules.length === 0 && (
                      <p className="mt-2 text-xs text-slate-400">
                        Select Interior and/or Furniture
                      </p>
                    )}
                  </div>
                )} */}

                {form.role && form.role !== "admin" && (
  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Modules *
    </label>
    <div className="flex flex-wrap gap-2">
      {MODULE_OPTIONS.map((m) => {
        const on = form.modules.includes(m);
        return (
          <button
            key={m}
            type="button"
            onClick={() => toggleModule(m)}
            className={`rounded-full px-4 py-2 text-xs font-semibold capitalize transition ${
              on
                ? m === "interior"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "bg-amber-600 text-white shadow-sm"
                : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
            }`}
          >
            {m}
          </button>
        );
      })}
    </div>
    {form.modules.length === 0 && (
      <p className="mt-2 text-xs text-slate-400">
        Tap Interior and/or Furniture
      </p>
    )}
  </div>
)}

                {form.role === "admin" && (
                  <p className="rounded-xl bg-slate-50 px-3.5 py-2.5 text-xs leading-5 text-slate-600">
                    Admin gets both <strong>interior</strong> and{" "}
                    <strong>furniture</strong> automatically.
                  </p>
                )}
              </div>

              <div className="flex shrink-0 gap-2 border-t border-slate-100 bg-slate-50/80 px-5 py-4">
                <button
                  type="button"
                  onClick={closeAddModal}
                  disabled={saving}
                  className="flex-1 rounded-xl border border-slate-200 bg-white py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 rounded-xl bg-[#176b5b] py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#125849] disabled:opacity-60"
                >
                  {saving ? "Creating…" : "Create User"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AuthGuard>
  );
}
