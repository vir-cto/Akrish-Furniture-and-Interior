// "use client";

// import Link from "next/link";
// import { FormEvent, useState } from "react";
// import {
//   ArrowLeft,
//   Check,
//   Mail,
//   MapPin,
//   Phone,
//   User,
// } from "lucide-react";

// interface ProfileForm {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   address: string;
//   city: string;
//   state: string;
//   pincode: string;
// }

// const INITIAL_PROFILE: ProfileForm = {
//   firstName: "VIP",
//   lastName: "Customer",
//   email: "customer@example.com",
//   phone: "",
//   address: "",
//   city: "",
//   state: "",
//   pincode: "",
// };

// export default function ProfilePage() {
//   const [form, setForm] = useState<ProfileForm>(INITIAL_PROFILE);
//   const [saved, setSaved] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const updateField = (
//     field: keyof ProfileForm,
//     value: string
//   ) => {
//     setForm((current) => ({
//       ...current,
//       [field]: value,
//     }));

//     setSaved(false);
//   };

//   const handleSubmit = async (
//     event: FormEvent<HTMLFormElement>
//   ) => {
//     event.preventDefault();
//     setLoading(true);
//     setSaved(false);

//     try {
//       /*
//        * Connect this section to your profile API/server action
//        * when backend account management is available.
//        */
//       await new Promise((resolve) => setTimeout(resolve, 500));

//       console.log("Profile updated:", form);
//       setSaved(true);
//     } catch (error) {
//       console.error("Profile update failed:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
//         {/* Breadcrumb */}
//         <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
//           <Link
//             href="/account"
//             className="transition hover:text-slate-900"
//           >
//             My Account
//           </Link>

//           <span>/</span>

//           <span className="font-medium text-slate-800">
//             Profile
//           </span>
//         </div>

//         {/* Header */}
//         <div className="mb-8">
//           <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//             Account settings
//           </p>

//           <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
//             My Profile
//           </h1>

//           <p className="mt-2 text-sm text-slate-500">
//             Manage your personal information and delivery
//             details.
//           </p>
//         </div>

//         <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
//           {/* Profile sidebar */}
//           <aside className="h-fit rounded-xl border border-slate-200 bg-white p-5">
//             <div className="flex flex-col items-center text-center">
//               <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-900 text-xl font-bold text-white">
//                 {form.firstName.charAt(0).toUpperCase()}
//                 {form.lastName.charAt(0).toUpperCase()}
//               </div>

//               <h2 className="mt-4 text-base font-bold text-slate-900">
//                 {form.firstName} {form.lastName}
//               </h2>

//               <p className="mt-1 break-all text-xs text-slate-500">
//                 {form.email}
//               </p>
//             </div>

//             <div className="mt-6 border-t border-slate-100 pt-5">
//               <nav className="space-y-1">
//                 <Link
//                   href="/account/profile"
//                   className="flex items-center gap-3 rounded-lg bg-slate-100 px-3 py-2.5 text-sm font-semibold text-slate-900"
//                 >
//                   <User size={16} />
//                   Profile
//                 </Link>

//                 <Link
//                   href="/account/orders"
//                   className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
//                 >
//                   <span className="h-4 w-4" />
//                   Orders
//                 </Link>
//               </nav>
//             </div>
//           </aside>

//           {/* Form */}
//           <section className="rounded-xl border border-slate-200 bg-white">
//             <div className="border-b border-slate-100 px-5 py-5 sm:px-7">
//               <h2 className="text-base font-bold text-slate-900">
//                 Personal information
//               </h2>

//               <p className="mt-1 text-xs text-slate-500">
//                 Keep your account information up to date.
//               </p>
//             </div>

//             <form
//               onSubmit={handleSubmit}
//               className="px-5 py-6 sm:px-7"
//             >
//               <div className="grid gap-5 sm:grid-cols-2">
//                 {/* First name */}
//                 <div>
//                   <label
//                     htmlFor="firstName"
//                     className="mb-2 block text-xs font-semibold text-slate-700"
//                   >
//                     First name
//                   </label>

//                   <div className="relative">
//                     <User
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />

//                     <input
//                       id="firstName"
//                       type="text"
//                       value={form.firstName}
//                       onChange={(event) =>
//                         updateField(
//                           "firstName",
//                           event.target.value
//                         )
//                       }
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Last name */}
//                 <div>
//                   <label
//                     htmlFor="lastName"
//                     className="mb-2 block text-xs font-semibold text-slate-700"
//                   >
//                     Last name
//                   </label>

//                   <input
//                     id="lastName"
//                     type="text"
//                     value={form.lastName}
//                     onChange={(event) =>
//                       updateField(
//                         "lastName",
//                         event.target.value
//                       )
//                     }
//                     className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
//                     required
//                   />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-2 block text-xs font-semibold text-slate-700"
//                   >
//                     Email address
//                   </label>

//                   <div className="relative">
//                     <Mail
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />

//                     <input
//                       id="email"
//                       type="email"
//                       value={form.email}
//                       onChange={(event) =>
//                         updateField(
//                           "email",
//                           event.target.value
//                         )
//                       }
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <label
//                     htmlFor="phone"
//                     className="mb-2 block text-xs font-semibold text-slate-700"
//                   >
//                     Phone number
//                   </label>

//                   <div className="relative">
//                     <Phone
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />

//                     <input
//                       id="phone"
//                       type="tel"
//                       value={form.phone}
//                       onChange={(event) =>
//                         updateField(
//                           "phone",
//                           event.target.value
//                         )
//                       }
//                       placeholder="+91 XXXXX XXXXX"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Address */}
//               <div className="mt-7 border-t border-slate-100 pt-6">
//                 <h3 className="text-sm font-bold text-slate-900">
//                   Delivery address
//                 </h3>

//                 <p className="mt-1 text-xs text-slate-500">
//                   Add your address for easier order delivery.
//                 </p>

//                 <div className="mt-5">
//                   <label
//                     htmlFor="address"
//                     className="mb-2 block text-xs font-semibold text-slate-700"
//                   >
//                     Address
//                   </label>

//                   <div className="relative">
//                     <MapPin
//                       size={16}
//                       className="absolute left-3 top-3 text-slate-400"
//                     />

//                     <textarea
//                       id="address"
//                       rows={3}
//                       value={form.address}
//                       onChange={(event) =>
//                         updateField(
//                           "address",
//                           event.target.value
//                         )
//                       }
//                       placeholder="House number, street, area"
//                       className="w-full resize-none rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
//                     />
//                   </div>
//                 </div>

//                 <div className="mt-5 grid gap-5 sm:grid-cols-3">
//                   <div>
//                     <label
//                       htmlFor="city"
//                       className="mb-2 block text-xs font-semibold text-slate-700"
//                     >
//                       City
//                     </label>

//                     <input
//                       id="city"
//                       type="text"
//                       value={form.city}
//                       onChange={(event) =>
//                         updateField(
//                           "city",
//                           event.target.value
//                         )
//                       }
//                       className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="state"
//                       className="mb-2 block text-xs font-semibold text-slate-700"
//                     >
//                       State
//                     </label>

//                     <input
//                       id="state"
//                       type="text"
//                       value={form.state}
//                       onChange={(event) =>
//                         updateField(
//                           "state",
//                           event.target.value
//                         )
//                       }
//                       className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="pincode"
//                       className="mb-2 block text-xs font-semibold text-slate-700"
//                     >
//                       PIN code
//                     </label>

//                     <input
//                       id="pincode"
//                       type="text"
//                       inputMode="numeric"
//                       maxLength={6}
//                       value={form.pincode}
//                       onChange={(event) =>
//                         updateField(
//                           "pincode",
//                           event.target.value.replace(/\D/g, "")
//                         )
//                       }
//                       className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Actions */}
//               <div className="mt-7 flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
//                 <Link
//                   href="/account"
//                   className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
//                 >
//                   <ArrowLeft size={15} />
//                   Back to account
//                 </Link>

//                 <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
//                   {saved && (
//                     <span className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-emerald-600">
//                       <Check size={15} />
//                       Changes saved
//                     </span>
//                   )}

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
//                   >
//                     {loading ? "Saving..." : "Save changes"}
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </section>
//         </div>
//       </div>
//     </main>
//   );
// }

// "use client";

// import { FormEvent, useEffect, useState } from "react";
// import { Check } from "lucide-react";

// interface ProfileForm {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   gender: "Male" | "Female" | "";
// }

// export default function ProfilePage() {
//   const [form, setForm] = useState<ProfileForm>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     gender: "",
//   });
//   const [saved, setSaved] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [editingPersonal, setEditingPersonal] = useState(false);
//   const [editingEmail, setEditingEmail] = useState(false);
//   const [editingPhone, setEditingPhone] = useState(false);

//   useEffect(() => {
//     try {
//       const stored = localStorage.getItem("user");
//       if (stored) {
//         const user = JSON.parse(stored);
//         const nameParts = (user.name || "").trim().split(" ");
//         setForm({
//           firstName: nameParts[0] || "",
//           lastName: nameParts.slice(1).join(" ") || "",
//           email: user.email || "",
//           phone: user.phone || "",
//           gender: user.gender || "",
//         });
//       }
//     } catch {
//       // ignore
//     }
//   }, []);

//   const updateField = (field: keyof ProfileForm, value: string) => {
//     setForm((prev) => ({ ...prev, [field]: value }));
//     setSaved(false);
//   };

//   const handleSave = async (e?: FormEvent) => {
//     e?.preventDefault();
//     setLoading(true);

//     try {
//       await new Promise((r) => setTimeout(r, 400));

//       const fullName = `${form.firstName} ${form.lastName}`.trim();
//       const existing = localStorage.getItem("user");
//       const user = existing ? JSON.parse(existing) : {};

//       localStorage.setItem(
//         "user",
//         JSON.stringify({
//           ...user,
//           name: fullName,
//           email: form.email,
//           phone: form.phone,
//           gender: form.gender,
//         })
//       );

//       setSaved(true);
//       setEditingPersonal(false);
//       setEditingEmail(false);
//       setEditingPhone(false);

//       // Refresh header name
//       window.dispatchEvent(new Event("storage"));
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="rounded-lg border border-slate-200 bg-white">
//       {/* Personal Information */}
//       <div className="border-b border-slate-100 px-6 py-5">
//         <div className="flex items-center justify-between">
//           <h2 className="text-lg font-semibold text-slate-900">
//             Personal Information
//           </h2>
//           <button
//             type="button"
//             onClick={() => setEditingPersonal(!editingPersonal)}
//             className="text-sm font-medium text-[#176b5b] hover:underline"
//           >
//             {editingPersonal ? "Cancel" : "Edit"}
//           </button>
//         </div>

//         <div className="mt-5 grid gap-4 sm:grid-cols-2">
//           <input
//             type="text"
//             value={form.firstName}
//             disabled={!editingPersonal}
//             onChange={(e) => updateField("firstName", e.target.value)}
//             placeholder="First Name"
//             className="rounded border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500 focus:border-[#176b5b] focus:bg-white"
//           />
//           <input
//             type="text"
//             value={form.lastName}
//             disabled={!editingPersonal}
//             onChange={(e) => updateField("lastName", e.target.value)}
//             placeholder="Last Name"
//             className="rounded border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500 focus:border-[#176b5b] focus:bg-white"
//           />
//         </div>

//         <div className="mt-5">
//           <p className="mb-2 text-sm text-slate-600">Your Gender</p>
//           <div className="flex items-center gap-6">
//             <label className="flex items-center gap-2 text-sm text-slate-700">
//               <input
//                 type="radio"
//                 name="gender"
//                 value="Male"
//                 checked={form.gender === "Male"}
//                 disabled={!editingPersonal}
//                 onChange={() => updateField("gender", "Male")}
//                 className="accent-[#176b5b]"
//               />
//               Male
//             </label>
//             <label className="flex items-center gap-2 text-sm text-slate-700">
//               <input
//                 type="radio"
//                 name="gender"
//                 value="Female"
//                 checked={form.gender === "Female"}
//                 disabled={!editingPersonal}
//                 onChange={() => updateField("gender", "Female")}
//                 className="accent-[#176b5b]"
//               />
//               Female
//             </label>
//           </div>
//         </div>

//         {editingPersonal && (
//           <button
//             type="button"
//             onClick={() => handleSave()}
//             disabled={loading}
//             className="mt-5 rounded bg-[#176b5b] px-6 py-2 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//           >
//             {loading ? "Saving..." : "SAVE"}
//           </button>
//         )}
//       </div>

//       {/* Email Address */}
//       <div className="border-b border-slate-100 px-6 py-5">
//         <div className="flex items-center justify-between">
//           <h2 className="text-lg font-semibold text-slate-900">
//             Email Address
//           </h2>
//           <button
//             type="button"
//             onClick={() => setEditingEmail(!editingEmail)}
//             className="text-sm font-medium text-[#176b5b] hover:underline"
//           >
//             {editingEmail ? "Cancel" : "Edit"}
//           </button>
//         </div>

//         <div className="mt-4">
//           <input
//             type="email"
//             value={form.email}
//             disabled={!editingEmail}
//             onChange={(e) => updateField("email", e.target.value)}
//             className="w-full max-w-md rounded border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500 focus:border-[#176b5b] focus:bg-white"
//           />
//         </div>

//         {editingEmail && (
//           <button
//             type="button"
//             onClick={() => handleSave()}
//             disabled={loading}
//             className="mt-4 rounded bg-[#176b5b] px-6 py-2 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//           >
//             {loading ? "Saving..." : "SAVE"}
//           </button>
//         )}
//       </div>

//       {/* Mobile Number */}
//       <div className="border-b border-slate-100 px-6 py-5">
//         <div className="flex items-center justify-between">
//           <h2 className="text-lg font-semibold text-slate-900">
//             Mobile Number
//           </h2>
//           <button
//             type="button"
//             onClick={() => setEditingPhone(!editingPhone)}
//             className="text-sm font-medium text-[#176b5b] hover:underline"
//           >
//             {editingPhone ? "Cancel" : "Edit"}
//           </button>
//         </div>

//         <div className="mt-4">
//           <input
//             type="tel"
//             value={form.phone}
//             disabled={!editingPhone}
//             onChange={(e) => updateField("phone", e.target.value)}
//             placeholder="+91 XXXXX XXXXX"
//             className="w-full max-w-md rounded border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500 focus:border-[#176b5b] focus:bg-white"
//           />
//         </div>

//         {editingPhone && (
//           <button
//             type="button"
//             onClick={() => handleSave()}
//             disabled={loading}
//             className="mt-4 rounded bg-[#176b5b] px-6 py-2 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//           >
//             {loading ? "Saving..." : "SAVE"}
//           </button>
//         )}
//       </div>

//       {/* Success message */}
//       {saved && (
//         <div className="flex items-center gap-2 px-6 py-4 text-sm font-medium text-emerald-600">
//           <Check size={16} />
//           Profile updated successfully
//         </div>
//       )}

//       {/* FAQ */}
//       <div className="px-6 py-5">
//         <h3 className="text-sm font-semibold text-slate-900">FAQs</h3>
//         <div className="mt-3 space-y-3 text-sm text-slate-600">
//           <div>
//             <p className="font-medium text-slate-800">
//               What happens when I update my email address or mobile number?
//             </p>
//             <p className="mt-1 text-slate-500">
//               Your login email or mobile number will be updated. All account
//               related communication will be sent to the updated details.
//             </p>
//           </div>
//           <div>
//             <p className="font-medium text-slate-800">
//               When will my account be updated?
//             </p>
//             <p className="mt-1 text-slate-500">
//               Changes are saved immediately after you click SAVE.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import Link from "next/link";
// import { FormEvent, useEffect, useState } from "react";
// import { Check, Lock } from "lucide-react";

// interface ProfileForm {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   gender: "Male" | "Female" | "";
// }

// export default function ProfilePage() {
//   const [user, setUser] = useState<{ name?: string; email?: string } | null>(null);
//   const [checkingAuth, setCheckingAuth] = useState(true);

//   const [form, setForm] = useState<ProfileForm>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     gender: "",
//   });
//   const [saved, setSaved] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [editingPersonal, setEditingPersonal] = useState(false);
//   const [editingEmail, setEditingEmail] = useState(false);
//   const [editingPhone, setEditingPhone] = useState(false);

//   useEffect(() => {
//     try {
//       const stored = localStorage.getItem("user");
//       if (stored) {
//         const parsed = JSON.parse(stored);
//         setUser(parsed);

//         const nameParts = (parsed.name || "").trim().split(" ");
//         setForm({
//           firstName: nameParts[0] || "",
//           lastName: nameParts.slice(1).join(" ") || "",
//           email: parsed.email || "",
//           phone: parsed.phone || "",
//           gender: parsed.gender || "",
//         });
//       } else {
//         setUser(null);
//       }
//     } catch {
//       setUser(null);
//     } finally {
//       setCheckingAuth(false);
//     }
//   }, []);

//   const updateField = (field: keyof ProfileForm, value: string) => {
//     setForm((prev) => ({ ...prev, [field]: value }));
//     setSaved(false);
//   };

//   const handleSave = async (e?: FormEvent) => {
//     e?.preventDefault();
//     setLoading(true);

//     try {
//       await new Promise((r) => setTimeout(r, 400));

//       const fullName = `${form.firstName} ${form.lastName}`.trim();
//       const existing = localStorage.getItem("user");
//       const currentUser = existing ? JSON.parse(existing) : {};

//       localStorage.setItem(
//         "user",
//         JSON.stringify({
//           ...currentUser,
//           name: fullName,
//           email: form.email,
//           phone: form.phone,
//           gender: form.gender,
//         })
//       );

//       setUser({ name: fullName, email: form.email });
//       setSaved(true);
//       setEditingPersonal(false);
//       setEditingEmail(false);
//       setEditingPhone(false);

//       window.dispatchEvent(new Event("storage"));
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Loading state
//   if (checkingAuth) {
//     return (
//       <div className="flex min-h-[320px] items-center justify-center rounded-lg border border-slate-200 bg-white">
//         <p className="text-sm text-slate-500">Loading...</p>
//       </div>
//     );
//   }

//   // Not signed in
//   if (!user) {
//     return (
//       <div className="flex min-h-[420px] flex-col items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-12 text-center">
//         <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-500">
//           <Lock size={24} />
//         </div>

//         <h2 className="mt-5 text-xl font-bold text-slate-900">
//           Please sign in
//         </h2>

//         <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
//           You need to sign in to view and manage your account profile.
//         </p>

//         <div className="mt-6 flex flex-col gap-3 sm:flex-row">
//           <Link
//             href="/sign-in"
//             className="inline-flex items-center justify-center rounded-lg bg-[#176b5b] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#125849]"
//           >
//             Sign In
//           </Link>

//           <Link
//             href="/register"
//             className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-6 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
//           >
//             Create account
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   // Signed in – show profile
//   return (
//     <div className="rounded-lg border border-slate-200 bg-white">
//       {/* Personal Information */}
//       <div className="border-b border-slate-100 px-6 py-5">
//         <div className="flex items-center justify-between">
//           <h2 className="text-lg font-semibold text-slate-900">
//             Personal Information
//           </h2>
//           <button
//             type="button"
//             onClick={() => setEditingPersonal(!editingPersonal)}
//             className="text-sm font-medium text-[#176b5b] hover:underline"
//           >
//             {editingPersonal ? "Cancel" : "Edit"}
//           </button>
//         </div>

//         <div className="mt-5 grid gap-4 sm:grid-cols-2">
//           <input
//             type="text"
//             value={form.firstName}
//             disabled={!editingPersonal}
//             onChange={(e) => updateField("firstName", e.target.value)}
//             placeholder="First Name"
//             className="rounded border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500 focus:border-[#176b5b] focus:bg-white"
//           />
//           <input
//             type="text"
//             value={form.lastName}
//             disabled={!editingPersonal}
//             onChange={(e) => updateField("lastName", e.target.value)}
//             placeholder="Last Name"
//             className="rounded border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500 focus:border-[#176b5b] focus:bg-white"
//           />
//         </div>

//         <div className="mt-5">
//           <p className="mb-2 text-sm text-slate-600">Your Gender</p>
//           <div className="flex items-center gap-6">
//             <label className="flex items-center gap-2 text-sm text-slate-700">
//               <input
//                 type="radio"
//                 name="gender"
//                 value="Male"
//                 checked={form.gender === "Male"}
//                 disabled={!editingPersonal}
//                 onChange={() => updateField("gender", "Male")}
//                 className="accent-[#176b5b]"
//               />
//               Male
//             </label>
//             <label className="flex items-center gap-2 text-sm text-slate-700">
//               <input
//                 type="radio"
//                 name="gender"
//                 value="Female"
//                 checked={form.gender === "Female"}
//                 disabled={!editingPersonal}
//                 onChange={() => updateField("gender", "Female")}
//                 className="accent-[#176b5b]"
//               />
//               Female
//             </label>
//           </div>
//         </div>

//         {editingPersonal && (
//           <button
//             type="button"
//             onClick={() => handleSave()}
//             disabled={loading}
//             className="mt-5 rounded bg-[#176b5b] px-6 py-2 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//           >
//             {loading ? "Saving..." : "SAVE"}
//           </button>
//         )}
//       </div>

//       {/* Email Address */}
//       <div className="border-b border-slate-100 px-6 py-5">
//         <div className="flex items-center justify-between">
//           <h2 className="text-lg font-semibold text-slate-900">
//             Email Address
//           </h2>
//           <button
//             type="button"
//             onClick={() => setEditingEmail(!editingEmail)}
//             className="text-sm font-medium text-[#176b5b] hover:underline"
//           >
//             {editingEmail ? "Cancel" : "Edit"}
//           </button>
//         </div>

//         <div className="mt-4">
//           <input
//             type="email"
//             value={form.email}
//             disabled={!editingEmail}
//             onChange={(e) => updateField("email", e.target.value)}
//             className="w-full max-w-md rounded border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500 focus:border-[#176b5b] focus:bg-white"
//           />
//         </div>

//         {editingEmail && (
//           <button
//             type="button"
//             onClick={() => handleSave()}
//             disabled={loading}
//             className="mt-4 rounded bg-[#176b5b] px-6 py-2 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//           >
//             {loading ? "Saving..." : "SAVE"}
//           </button>
//         )}
//       </div>

//       {/* Mobile Number */}
//       <div className="border-b border-slate-100 px-6 py-5">
//         <div className="flex items-center justify-between">
//           <h2 className="text-lg font-semibold text-slate-900">
//             Mobile Number
//           </h2>
//           <button
//             type="button"
//             onClick={() => setEditingPhone(!editingPhone)}
//             className="text-sm font-medium text-[#176b5b] hover:underline"
//           >
//             {editingPhone ? "Cancel" : "Edit"}
//           </button>
//         </div>

//         <div className="mt-4">
//           <input
//             type="tel"
//             value={form.phone}
//             disabled={!editingPhone}
//             onChange={(e) => updateField("phone", e.target.value)}
//             placeholder="+91 XXXXX XXXXX"
//             className="w-full max-w-md rounded border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500 focus:border-[#176b5b] focus:bg-white"
//           />
//         </div>

//         {editingPhone && (
//           <button
//             type="button"
//             onClick={() => handleSave()}
//             disabled={loading}
//             className="mt-4 rounded bg-[#176b5b] px-6 py-2 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//           >
//             {loading ? "Saving..." : "SAVE"}
//           </button>
//         )}
//       </div>

//       {saved && (
//         <div className="flex items-center gap-2 px-6 py-4 text-sm font-medium text-emerald-600">
//           <Check size={16} />
//           Profile updated successfully
//         </div>
//       )}

//       <div className="px-6 py-5">
//         <h3 className="text-sm font-semibold text-slate-900">FAQs</h3>
//         <div className="mt-3 space-y-3 text-sm text-slate-600">
//           <div>
//             <p className="font-medium text-slate-800">
//               What happens when I update my email address or mobile number?
//             </p>
//             <p className="mt-1 text-slate-500">
//               Your login email or mobile number will be updated. All account
//               related communication will be sent to the updated details.
//             </p>
//           </div>
//           <div>
//             <p className="font-medium text-slate-800">
//               When will my account be updated?
//             </p>
//             <p className="mt-1 text-slate-500">
//               Changes are saved immediately after you click SAVE.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import Link from "next/link";
// import { FormEvent, useEffect, useState } from "react";
// import { Check, Lock, Loader2 } from "lucide-react";
// import { onAuthStateChanged, updateProfile } from "firebase/auth";
// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";

// interface ProfileForm {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   gender: "Male" | "Female" | "";
// }

// export default function ProfilePage() {
//   const [uid, setUid] = useState<string | null>(null);
//   const [checkingAuth, setCheckingAuth] = useState(true);
//   const [form, setForm] = useState<ProfileForm>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     gender: "",
//   });
//   const [saved, setSaved] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [editingPersonal, setEditingPersonal] = useState(false);
//   const [editingEmail, setEditingEmail] = useState(false);
//   const [editingPhone, setEditingPhone] = useState(false);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
//       if (!firebaseUser) {
//         setUid(null);
//         setCheckingAuth(false);
//         return;
//       }

//       setUid(firebaseUser.uid);

//       try {
//         const snap = await getDoc(
//           doc(db, "furniture_customers", firebaseUser.uid)
//         );
//         if (snap.exists()) {
//           const data = snap.data();
//           const nameParts = String(data.name || "").trim().split(" ");
//           setForm({
//             firstName: nameParts[0] || "",
//             lastName: nameParts.slice(1).join(" ") || "",
//             email: String(data.email || firebaseUser.email || ""),
//             phone: String(data.phone || ""),
//             gender: (data.gender as "Male" | "Female" | "") || "",
//           });
//         } else {
//           const nameParts = (firebaseUser.displayName || "")
//             .trim()
//             .split(" ");
//           setForm({
//             firstName: nameParts[0] || "",
//             lastName: nameParts.slice(1).join(" ") || "",
//             email: firebaseUser.email || "",
//             phone: "",
//             gender: "",
//           });
//         }
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setCheckingAuth(false);
//       }
//     });

//     return () => unsub();
//   }, []);

//   const updateField = (field: keyof ProfileForm, value: string) => {
//     setForm((prev) => ({ ...prev, [field]: value }));
//     setSaved(false);
//   };

//   const handleSave = async (e?: FormEvent) => {
//     e?.preventDefault();
//     if (!uid) return;

//     setLoading(true);
//     try {
//       const fullName = `${form.firstName} ${form.lastName}`.trim();

//       await updateDoc(doc(db, "furniture_customers", uid), {
//         name: fullName,
//         email: form.email.trim().toLowerCase(),
//         phone: form.phone.trim(),
//         gender: form.gender,
//       });

//       if (auth.currentUser) {
//         await updateProfile(auth.currentUser, { displayName: fullName });
//       }

//       setSaved(true);
//       setEditingPersonal(false);
//       setEditingEmail(false);
//       setEditingPhone(false);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (checkingAuth) {
//     return (
//       <div className="flex min-h-[320px] items-center justify-center rounded-lg border border-slate-200 bg-white">
//         <Loader2 className="h-6 w-6 animate-spin text-slate-400" />
//       </div>
//     );
//   }

//   if (!uid) {
//     return (
//       <div className="flex min-h-[420px] flex-col items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-12 text-center">
//         <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-500">
//           <Lock size={24} />
//         </div>
//         <h2 className="mt-5 text-xl font-bold text-slate-900">Please sign in</h2>
//         <p className="mt-2 max-w-sm text-sm text-slate-500">
//           You need to sign in to view and manage your account profile.
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
//       <div className="border-b border-slate-100 px-6 py-5">
//         <div className="flex items-center justify-between">
//           <h2 className="text-lg font-semibold text-slate-900">
//             Personal Information
//           </h2>
//           <button
//             type="button"
//             onClick={() => setEditingPersonal(!editingPersonal)}
//             className="text-sm font-medium text-[#176b5b] hover:underline"
//           >
//             {editingPersonal ? "Cancel" : "Edit"}
//           </button>
//         </div>

//         <div className="mt-5 grid gap-4 sm:grid-cols-2">
//           <input
//             type="text"
//             value={form.firstName}
//             disabled={!editingPersonal}
//             onChange={(e) => updateField("firstName", e.target.value)}
//             className="rounded border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none disabled:bg-slate-100 focus:border-[#176b5b] focus:bg-white"
//           />
//           <input
//             type="text"
//             value={form.lastName}
//             disabled={!editingPersonal}
//             onChange={(e) => updateField("lastName", e.target.value)}
//             className="rounded border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none disabled:bg-slate-100 focus:border-[#176b5b] focus:bg-white"
//           />
//         </div>

//         <div className="mt-5">
//           <p className="mb-2 text-sm text-slate-600">Your Gender</p>
//           <div className="flex gap-6">
//             <label className="flex items-center gap-2 text-sm">
//               <input
//                 type="radio"
//                 name="gender"
//                 checked={form.gender === "Male"}
//                 disabled={!editingPersonal}
//                 onChange={() => updateField("gender", "Male")}
//                 className="accent-[#176b5b]"
//               />
//               Male
//             </label>
//             <label className="flex items-center gap-2 text-sm">
//               <input
//                 type="radio"
//                 name="gender"
//                 checked={form.gender === "Female"}
//                 disabled={!editingPersonal}
//                 onChange={() => updateField("gender", "Female")}
//                 className="accent-[#176b5b]"
//               />
//               Female
//             </label>
//           </div>
//         </div>

//         {editingPersonal && (
//           <button
//             type="button"
//             onClick={() => handleSave()}
//             disabled={loading}
//             className="mt-5 rounded bg-[#176b5b] px-6 py-2 text-sm font-semibold text-white disabled:opacity-60"
//           >
//             {loading ? "Saving..." : "SAVE"}
//           </button>
//         )}
//       </div>

//       <div className="border-b border-slate-100 px-6 py-5">
//         <div className="flex items-center justify-between">
//           <h2 className="text-lg font-semibold text-slate-900">Email Address</h2>
//           <button
//             type="button"
//             onClick={() => setEditingEmail(!editingEmail)}
//             className="text-sm font-medium text-[#176b5b] hover:underline"
//           >
//             {editingEmail ? "Cancel" : "Edit"}
//           </button>
//         </div>
//         <input
//           type="email"
//           value={form.email}
//           disabled={!editingEmail}
//           onChange={(e) => updateField("email", e.target.value)}
//           className="mt-4 w-full max-w-md rounded border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none disabled:bg-slate-100 focus:border-[#176b5b] focus:bg-white"
//         />
//         {editingEmail && (
//           <button
//             type="button"
//             onClick={() => handleSave()}
//             disabled={loading}
//             className="mt-4 rounded bg-[#176b5b] px-6 py-2 text-sm font-semibold text-white disabled:opacity-60"
//           >
//             {loading ? "Saving..." : "SAVE"}
//           </button>
//         )}
//       </div>

//       <div className="border-b border-slate-100 px-6 py-5">
//         <div className="flex items-center justify-between">
//           <h2 className="text-lg font-semibold text-slate-900">Mobile Number</h2>
//           <button
//             type="button"
//             onClick={() => setEditingPhone(!editingPhone)}
//             className="text-sm font-medium text-[#176b5b] hover:underline"
//           >
//             {editingPhone ? "Cancel" : "Edit"}
//           </button>
//         </div>
//         <input
//           type="tel"
//           value={form.phone}
//           disabled={!editingPhone}
//           onChange={(e) => updateField("phone", e.target.value)}
//           placeholder="+91 XXXXX XXXXX"
//           className="mt-4 w-full max-w-md rounded border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none disabled:bg-slate-100 focus:border-[#176b5b] focus:bg-white"
//         />
//         {editingPhone && (
//           <button
//             type="button"
//             onClick={() => handleSave()}
//             disabled={loading}
//             className="mt-4 rounded bg-[#176b5b] px-6 py-2 text-sm font-semibold text-white disabled:opacity-60"
//           >
//             {loading ? "Saving..." : "SAVE"}
//           </button>
//         )}
//       </div>

//       {saved && (
//         <div className="flex items-center gap-2 px-6 py-4 text-sm font-medium text-emerald-600">
//           <Check size={16} />
//           Profile updated successfully
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { Check, Lock, Loader2 } from "lucide-react";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

interface ProfileForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: "Male" | "Female" | "";
}

export default function ProfilePage() {
  const [uid, setUid] = useState<string | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [form, setForm] = useState<ProfileForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
  });
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editingPersonal, setEditingPersonal] = useState(false);
  const [editingEmail, setEditingEmail] = useState(false);
  const [editingPhone, setEditingPhone] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        setUid(null);
        setCheckingAuth(false);
        return;
      }

      setUid(firebaseUser.uid);

      try {
        const snap = await getDoc(
          doc(db, "furniture_customers", firebaseUser.uid)
        );
        if (snap.exists()) {
          const data = snap.data();
          const nameParts = String(data.name || "").trim().split(" ");
          setForm({
            firstName: nameParts[0] || "",
            lastName: nameParts.slice(1).join(" ") || "",
            email: String(data.email || firebaseUser.email || ""),
            phone: String(data.phone || ""),
            gender: (data.gender as "Male" | "Female" | "") || "",
          });
        } else {
          const nameParts = (firebaseUser.displayName || "")
            .trim()
            .split(" ");
          setForm({
            firstName: nameParts[0] || "",
            lastName: nameParts.slice(1).join(" ") || "",
            email: firebaseUser.email || "",
            phone: "",
            gender: "",
          });
        }
      } catch (err) {
        console.error(err);
      } finally {
        setCheckingAuth(false);
      }
    });

    return () => unsub();
  }, []);

  const updateField = (field: keyof ProfileForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  const handleSave = async (e?: FormEvent) => {
    e?.preventDefault();
    if (!uid) return;

    setLoading(true);
    try {
      const fullName = `${form.firstName} ${form.lastName}`.trim();

      await updateDoc(doc(db, "furniture_customers", uid), {
        name: fullName,
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim(),
        gender: form.gender,
      });

      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: fullName });
      }

      setSaved(true);
      setEditingPersonal(false);
      setEditingEmail(false);
      setEditingPhone(false);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (checkingAuth) {
    return (
      <div className="flex min-h-[320px] items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-slate-400" />
      </div>
    );
  }

  if (!uid) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center px-6 py-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-500">
          <Lock size={24} />
        </div>
        <h2 className="mt-5 text-xl font-bold text-slate-900">Please sign in</h2>
        <p className="mt-2 max-w-sm text-sm text-slate-500">
          You need to sign in to view and manage your account profile.
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
    <div>
      {/* Personal Information */}
      <div className="border-b border-slate-100 pb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">
            Personal Information
          </h2>
          <button
            type="button"
            onClick={() => setEditingPersonal(!editingPersonal)}
            className="text-sm font-medium text-[#176b5b] hover:underline"
          >
            {editingPersonal ? "Cancel" : "Edit"}
          </button>
        </div>

        {/* First name + Last name — always one row */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-500">
              First name
            </label>
            <input
              type="text"
              value={form.firstName}
              disabled={!editingPersonal}
              onChange={(e) => updateField("firstName", e.target.value)}
              placeholder="First name"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none disabled:cursor-not-allowed disabled:bg-slate-100 focus:border-[#176b5b] focus:bg-white"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-500">
              Last name
            </label>
            <input
              type="text"
              value={form.lastName}
              disabled={!editingPersonal}
              onChange={(e) => updateField("lastName", e.target.value)}
              placeholder="Last name"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none disabled:cursor-not-allowed disabled:bg-slate-100 focus:border-[#176b5b] focus:bg-white"
            />
          </div>
        </div>

        <div className="mt-5">
          <p className="mb-2 text-sm text-slate-600">Your Gender</p>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="gender"
                checked={form.gender === "Male"}
                disabled={!editingPersonal}
                onChange={() => updateField("gender", "Male")}
                className="accent-[#176b5b]"
              />
              Male
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="gender"
                checked={form.gender === "Female"}
                disabled={!editingPersonal}
                onChange={() => updateField("gender", "Female")}
                className="accent-[#176b5b]"
              />
              Female
            </label>
          </div>
        </div>

        {editingPersonal && (
          <button
            type="button"
            onClick={() => handleSave()}
            disabled={loading}
            className="mt-5 rounded-lg bg-[#176b5b] px-6 py-2 text-sm font-semibold text-white disabled:opacity-60"
          >
            {loading ? "Saving..." : "SAVE"}
          </button>
        )}
      </div>

      {/* Email */}
      <div className="border-b border-slate-100 py-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Email Address</h2>
          <button
            type="button"
            onClick={() => setEditingEmail(!editingEmail)}
            className="text-sm font-medium text-[#176b5b] hover:underline"
          >
            {editingEmail ? "Cancel" : "Edit"}
          </button>
        </div>
        <input
          type="email"
          value={form.email}
          disabled={!editingEmail}
          onChange={(e) => updateField("email", e.target.value)}
          className="mt-4 w-full max-w-md rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none disabled:cursor-not-allowed disabled:bg-slate-100 focus:border-[#176b5b] focus:bg-white"
        />
        {editingEmail && (
          <button
            type="button"
            onClick={() => handleSave()}
            disabled={loading}
            className="mt-4 rounded-lg bg-[#176b5b] px-6 py-2 text-sm font-semibold text-white disabled:opacity-60"
          >
            {loading ? "Saving..." : "SAVE"}
          </button>
        )}
      </div>

      {/* Phone */}
      <div className="border-b border-slate-100 py-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Mobile Number</h2>
          <button
            type="button"
            onClick={() => setEditingPhone(!editingPhone)}
            className="text-sm font-medium text-[#176b5b] hover:underline"
          >
            {editingPhone ? "Cancel" : "Edit"}
          </button>
        </div>
        <input
          type="tel"
          value={form.phone}
          disabled={!editingPhone}
          onChange={(e) => updateField("phone", e.target.value)}
          placeholder="+91 XXXXX XXXXX"
          className="mt-4 w-full max-w-md rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none disabled:cursor-not-allowed disabled:bg-slate-100 focus:border-[#176b5b] focus:bg-white"
        />
        {editingPhone && (
          <button
            type="button"
            onClick={() => handleSave()}
            disabled={loading}
            className="mt-4 rounded-lg bg-[#176b5b] px-6 py-2 text-sm font-semibold text-white disabled:opacity-60"
          >
            {loading ? "Saving..." : "SAVE"}
          </button>
        )}
      </div>

      {saved && (
        <div className="flex items-center gap-2 pt-4 text-sm font-medium text-emerald-600">
          <Check size={16} />
          Profile updated successfully
        </div>
      )}
    </div>
  );
}
