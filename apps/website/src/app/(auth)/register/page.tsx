// "use client";

// import Link from "next/link";
// import { FormEvent, useState } from "react";
// import {
//   ArrowRight,
//   Building2,
//   CheckCircle2,
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   User,
// } from "lucide-react";

// export default function RegisterPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] =
//     useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const updateField = (
//     field: keyof typeof form,
//     value: string
//   ) => {
//     setForm((current) => ({
//       ...current,
//       [field]: value,
//     }));

//     setError("");
//   };

//   const handleSubmit = async (
//     event: FormEvent<HTMLFormElement>
//   ) => {
//     event.preventDefault();
//     setError("");
//     setSuccess(false);

//     const name = form.name.trim();
//     const email = form.email.trim().toLowerCase();

//     if (!name) {
//       setError("Please enter your full name.");
//       return;
//     }

//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }

//     if (!form.password) {
//       setError("Please create a password.");
//       return;
//     }

//     if (form.password.length < 6) {
//       setError("Password must contain at least 6 characters.");
//       return;
//     }

//     if (form.password !== form.confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     setLoading(true);

//     try {
//       /*
//        * Connect this section to your registration API/server
//        * action when backend authentication is available.
//        */
//       await new Promise((resolve) => setTimeout(resolve, 500));

//       setSuccess(true);

//       setForm({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//       });
//     } catch {
//       setError(
//         "Unable to create the account. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="grid min-h-screen lg:grid-cols-2">
//         {/* Left panel */}
//         <div className="hidden bg-slate-900 p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">
//           <div>
//             <Link
//               href="/"
//               className="inline-flex items-center gap-3"
//             >
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sm font-bold text-slate-900">
//                 VIP
//               </div>

//               <div>
//                 <p className="text-sm font-bold">
//                   VIP Interior
//                 </p>
//                 <p className="text-xs text-slate-400">
//                   Interior & Furniture
//                 </p>
//               </div>
//             </Link>
//           </div>

//           <div className="max-w-lg">
//             <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
//               <Building2 size={28} />
//             </div>

//             <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
//               Manage your interior business in one place.
//             </h1>

//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Manage projects, clients, quotations, vendors,
//               payments and operations through the VIP Interior
//               ERP platform.
//             </p>

//             <div className="mt-8 space-y-4">
//               {[
//                 "Project and client management",
//                 "Quotations and contract tracking",
//                 "Vendor and payment management",
//                 "Business reports and visibility",
//               ].map((item) => (
//                 <div
//                   key={item}
//                   className="flex items-center gap-3"
//                 >
//                   <CheckCircle2
//                     size={17}
//                     className="shrink-0 text-emerald-400"
//                   />
//                   <span className="text-sm text-slate-300">
//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <p className="text-xs text-slate-500">
//             © {new Date().getFullYear()} VIP Interior ERP
//           </p>
//         </div>

//         {/* Register panel */}
//         <div className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-10">
//           <div className="w-full max-w-md">
//             {/* Mobile logo */}
//             <div className="mb-8 flex justify-center lg:hidden">
//               <Link
//                 href="/"
//                 className="inline-flex items-center gap-3"
//               >
//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
//                   VIP
//                 </div>

//                 <div>
//                   <p className="text-sm font-bold text-slate-900">
//                     VIP Interior
//                   </p>
//                   <p className="text-xs text-slate-500">
//                     Interior & Furniture
//                   </p>
//                 </div>
//               </Link>
//             </div>

//             <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
//               <div className="mb-7">
//                 <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
//                   Get started
//                 </p>

//                 <h2 className="mt-2 text-2xl font-bold text-slate-900">
//                   Create your account
//                 </h2>

//                 <p className="mt-2 text-sm leading-6 text-slate-500">
//                   Enter your details to create an account and
//                   access the ERP platform.
//                 </p>
//               </div>

//               {success && (
//                 <div className="mb-5 flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 text-sm text-emerald-700">
//                   <CheckCircle2
//                     size={18}
//                     className="mt-0.5 shrink-0"
//                   />
//                   <div>
//                     <p className="font-semibold">
//                       Account created successfully.
//                     </p>
//                     <p className="mt-0.5 text-xs">
//                       You can now continue to the login page.
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {error && (
//                 <div
//                   role="alert"
//                   className="mb-5 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700"
//                 >
//                   {error}
//                 </div>
//               )}

//               <form
//                 onSubmit={handleSubmit}
//                 className="space-y-4"
//               >
//                 {/* Name */}
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="mb-2 block text-xs font-semibold text-slate-700"
//                   >
//                     Full name
//                   </label>

//                   <div className="relative">
//                     <User
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />

//                     <input
//                       id="name"
//                       name="name"
//                       type="text"
//                       autoComplete="name"
//                       value={form.name}
//                       onChange={(event) =>
//                         updateField(
//                           "name",
//                           event.target.value
//                         )
//                       }
//                       placeholder="Enter your full name"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-100"
//                     />
//                   </div>
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
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />

//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       autoComplete="email"
//                       value={form.email}
//                       onChange={(event) =>
//                         updateField(
//                           "email",
//                           event.target.value
//                         )
//                       }
//                       placeholder="you@example.com"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-100"
//                     />
//                   </div>
//                 </div>

//                 {/* Password */}
//                 <div>
//                   <label
//                     htmlFor="password"
//                     className="mb-2 block text-xs font-semibold text-slate-700"
//                   >
//                     Password
//                   </label>

//                   <div className="relative">
//                     <LockKeyhole
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />

//                     <input
//                       id="password"
//                       name="password"
//                       type={
//                         showPassword ? "text" : "password"
//                       }
//                       autoComplete="new-password"
//                       value={form.password}
//                       onChange={(event) =>
//                         updateField(
//                           "password",
//                           event.target.value
//                         )
//                       }
//                       placeholder="Create a password"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-11 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-100"
//                     />

//                     <button
//                       type="button"
//                       onClick={() =>
//                         setShowPassword((value) => !value)
//                       }
//                       className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 hover:text-slate-700"
//                       aria-label={
//                         showPassword
//                           ? "Hide password"
//                           : "Show password"
//                       }
//                     >
//                       {showPassword ? (
//                         <EyeOff size={16} />
//                       ) : (
//                         <Eye size={16} />
//                       )}
//                     </button>
//                   </div>

//                   <p className="mt-1.5 text-[11px] text-slate-400">
//                     Use at least 6 characters.
//                   </p>
//                 </div>

//                 {/* Confirm password */}
//                 <div>
//                   <label
//                     htmlFor="confirmPassword"
//                     className="mb-2 block text-xs font-semibold text-slate-700"
//                   >
//                     Confirm password
//                   </label>

//                   <div className="relative">
//                     <LockKeyhole
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />

//                     <input
//                       id="confirmPassword"
//                       name="confirmPassword"
//                       type={
//                         showConfirmPassword
//                           ? "text"
//                           : "password"
//                       }
//                       autoComplete="new-password"
//                       value={form.confirmPassword}
//                       onChange={(event) =>
//                         updateField(
//                           "confirmPassword",
//                           event.target.value
//                         )
//                       }
//                       placeholder="Confirm your password"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-11 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-100"
//                     />

//                     <button
//                       type="button"
//                       onClick={() =>
//                         setShowConfirmPassword(
//                           (value) => !value
//                         )
//                       }
//                       className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 hover:text-slate-700"
//                       aria-label={
//                         showConfirmPassword
//                           ? "Hide confirm password"
//                           : "Show confirm password"
//                       }
//                     >
//                       {showConfirmPassword ? (
//                         <EyeOff size={16} />
//                       ) : (
//                         <Eye size={16} />
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Submit */}
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   {loading ? (
//                     <>
//                       <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
//                       Creating account...
//                     </>
//                   ) : (
//                     <>
//                       Create account
//                       <ArrowRight size={16} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <div className="mt-6 border-t border-slate-100 pt-5 text-center">
//                 <p className="text-sm text-slate-500">
//                   Already have an account?{" "}
//                   <Link
//                     href="/login"
//                     className="font-semibold text-slate-900 hover:underline"
//                   >
//                     Sign in
//                   </Link>
//                 </p>
//               </div>
//             </div>

//             <p className="mt-5 text-center text-[11px] leading-5 text-slate-400">
//               By creating an account, you agree to use the VIP
//               Interior ERP platform according to your
//               organization&apos;s policies.
//             </p>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { FormEvent, useState } from "react";
// import {
//   ArrowRight,
//   CheckCircle2,
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   ShoppingBag,
//   User,
// } from "lucide-react";

// export default function CustomerRegisterPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");
//     setSuccess(false);

//     const name = form.name.trim();
//     const email = form.email.trim().toLowerCase();

//     if (!name) {
//       setError("Please enter your full name.");
//       return;
//     }
//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please create a password.");
//       return;
//     }
//     if (form.password.length < 6) {
//       setError("Password must contain at least 6 characters.");
//       return;
//     }
//     if (form.password !== form.confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     setLoading(true);

//     try {
//       // TODO: Connect to real customer registration API
//       await new Promise((resolve) => setTimeout(resolve, 700));

//       setSuccess(true);
//       setForm({ name: "", email: "", password: "", confirmPassword: "" });
//     } catch {
//       setError("Unable to create the account. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="grid min-h-screen lg:grid-cols-2">
//         {/* Left branding */}
//         <div className="hidden bg-slate-900 p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">
//           <div>
//             <Link href="/" className="inline-flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                 A
//               </div>
//               <div>
//                 <p className="text-sm font-bold">Akrish</p>
//                 <p className="text-xs text-slate-400">Furniture & Interior</p>
//               </div>
//             </Link>
//           </div>

//           <div className="max-w-lg">
//             <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
//               <ShoppingBag size={28} />
//             </div>

//             <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
//               Create your Akrish account
//             </h1>

//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Join us to shop premium furniture, track orders and enjoy a faster checkout experience.
//             </p>

//             <div className="mt-8 space-y-4">
//               {[
//                 "Shop exclusive furniture collections",
//                 "Save items to your wishlist",
//                 "Track orders easily",
//                 "Faster & secure checkout",
//               ].map((item) => (
//                 <div key={item} className="flex items-center gap-3">
//                   <CheckCircle2 size={17} className="shrink-0 text-emerald-400" />
//                   <span className="text-sm text-slate-300">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <p className="text-xs text-slate-500">
//             © {new Date().getFullYear()} Akrish Furniture
//           </p>
//         </div>

//         {/* Form */}
//         <div className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-10">
//           <div className="w-full max-w-md">
//             <div className="mb-8 flex justify-center lg:hidden">
//               <Link href="/" className="inline-flex items-center gap-3">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                   A
//                 </div>
//                 <div>
//                   <p className="text-sm font-bold text-slate-900">Akrish</p>
//                   <p className="text-xs text-slate-500">Furniture & Interior</p>
//                 </div>
//               </Link>
//             </div>

//             <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
//               <div className="mb-7">
//                 <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
//                   Customer Registration
//                 </p>
//                 <h2 className="mt-2 text-2xl font-bold text-slate-900">
//                   Create your account
//                 </h2>
//                 <p className="mt-2 text-sm leading-6 text-slate-500">
//                   Fill in your details to start shopping.
//                 </p>
//               </div>

//               {success && (
//                 <div className="mb-5 flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 text-sm text-emerald-700">
//                   <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
//                   <div>
//                     <p className="font-semibold">Account created successfully!</p>
//                     <p className="mt-0.5 text-xs">
//                       You can now{" "}
//                       <Link href="/sign-in" className="underline font-medium">
//                         sign in
//                       </Link>
//                       .
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {error && (
//                 <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700">
//                   {error}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label className="mb-2 block text-xs font-semibold text-slate-700">
//                     Full name
//                   </label>
//                   <div className="relative">
//                     <User size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
//                     <input
//                       type="text"
//                       value={form.name}
//                       onChange={(e) => updateField("name", e.target.value)}
//                       placeholder="Enter your full name"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-xs font-semibold text-slate-700">
//                     Email address
//                   </label>
//                   <div className="relative">
//                     <Mail size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
//                     <input
//                       type="email"
//                       value={form.email}
//                       onChange={(e) => updateField("email", e.target.value)}
//                       placeholder="you@example.com"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-xs font-semibold text-slate-700">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <LockKeyhole size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="Create a password"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-11 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-xs font-semibold text-slate-700">
//                     Confirm password
//                   </label>
//                   <div className="relative">
//                     <LockKeyhole size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
//                     <input
//                       type={showConfirmPassword ? "text" : "password"}
//                       value={form.confirmPassword}
//                       onChange={(e) => updateField("confirmPassword", e.target.value)}
//                       placeholder="Confirm your password"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-11 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                       className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
//                     >
//                       {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading ? "Creating account..." : (
//                     <>
//                       Create account
//                       <ArrowRight size={16} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <div className="mt-6 border-t border-slate-100 pt-5 text-center">
//                 <p className="text-sm text-slate-500">
//                   Already have an account?{" "}
//                   <Link href="/sign-in" className="font-semibold text-[#176b5b] hover:underline">
//                     Sign in
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }


// "use client";

// import Link from "next/link";
// import { FormEvent, useState } from "react";
// import {
//   ArrowRight,
//   CheckCircle2,
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   Phone,
//   ShoppingBag,
//   User,
// } from "lucide-react";

// export default function CustomerRegisterPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     gender: "" as "" | "Male" | "Female",
//     password: "",
//     confirmPassword: "",
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");
//     setSuccess(false);

//     const firstName = form.firstName.trim();
//     const lastName = form.lastName.trim();
//     const email = form.email.trim().toLowerCase();
//     const phone = form.phone.trim();

//     if (!firstName) {
//       setError("Please enter your first name.");
//       return;
//     }
//     if (!lastName) {
//       setError("Please enter your last name.");
//       return;
//     }
//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!phone) {
//       setError("Please enter your mobile number.");
//       return;
//     }
//     if (!/^[6-9]\d{9}$/.test(phone.replace(/\D/g, "").slice(-10))) {
//       setError("Please enter a valid 10-digit mobile number.");
//       return;
//     }
//     if (!form.gender) {
//       setError("Please select your gender.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please create a password.");
//       return;
//     }
//     if (form.password.length < 6) {
//       setError("Password must contain at least 6 characters.");
//       return;
//     }
//     if (form.password !== form.confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     setLoading(true);

//     try {
//       // TODO: Connect to real Firebase Auth + Firestore later
//       await new Promise((resolve) => setTimeout(resolve, 700));

//       const fullName = `${firstName} ${lastName}`.trim();

//       // Save user for demo login
//       localStorage.setItem(
//         "user",
//         JSON.stringify({
//           name: fullName,
//           email,
//           phone,
//           gender: form.gender,
//         })
//       );

//       setSuccess(true);
//       setForm({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         gender: "",
//         password: "",
//         confirmPassword: "",
//       });
//     } catch {
//       setError("Unable to create the account. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="grid min-h-screen lg:grid-cols-2">
//         {/* Left branding */}
//         <div className="hidden bg-slate-900 p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">
//           <div>
//             <Link href="/" className="inline-flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                 A
//               </div>
//               <div>
//                 <p className="text-sm font-bold">Akrish</p>
//                 <p className="text-xs text-slate-400">Furniture & Interior</p>
//               </div>
//             </Link>
//           </div>

//           <div className="max-w-lg">
//             <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
//               <ShoppingBag size={28} />
//             </div>

//             <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
//               Create your Akrish account
//             </h1>

//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Join us to shop premium furniture, track orders and enjoy a faster
//               checkout experience.
//             </p>

//             <div className="mt-8 space-y-4">
//               {[
//                 "Shop exclusive furniture collections",
//                 "Save items to your wishlist",
//                 "Track orders easily",
//                 "Faster & secure checkout",
//               ].map((item) => (
//                 <div key={item} className="flex items-center gap-3">
//                   <CheckCircle2 size={17} className="shrink-0 text-emerald-400" />
//                   <span className="text-sm text-slate-300">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <p className="text-xs text-slate-500">
//             © {new Date().getFullYear()} Akrish Furniture
//           </p>
//         </div>

//         {/* Form */}
//         <div className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-10">
//           <div className="w-full max-w-md">
//             <div className="mb-8 flex justify-center lg:hidden">
//               <Link href="/" className="inline-flex items-center gap-3">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                   A
//                 </div>
//                 <div>
//                   <p className="text-sm font-bold text-slate-900">Akrish</p>
//                   <p className="text-xs text-slate-500">Furniture & Interior</p>
//                 </div>
//               </Link>
//             </div>

//             <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
//               <div className="mb-7">
//                 <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
//                   Customer Registration
//                 </p>
//                 <h2 className="mt-2 text-2xl font-bold text-slate-900">
//                   Create your account
//                 </h2>
//                 <p className="mt-2 text-sm leading-6 text-slate-500">
//                   Fill in your details to start shopping.
//                 </p>
//               </div>

//               {success && (
//                 <div className="mb-5 flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 text-sm text-emerald-700">
//                   <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
//                   <div>
//                     <p className="font-semibold">Account created successfully!</p>
//                     <p className="mt-0.5 text-xs">
//                       You can now{" "}
//                       <Link href="/sign-in" className="font-medium underline">
//                         sign in
//                       </Link>
//                       .
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {error && (
//                 <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700">
//                   {error}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 {/* First + Last Name */}
//                 <div className="grid gap-4 sm:grid-cols-2">
//                   <div>
//                     <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                       First name
//                     </label>
//                     <div className="relative">
//                       <User
//                         size={16}
//                         className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                       />
//                       <input
//                         type="text"
//                         value={form.firstName}
//                         onChange={(e) => updateField("firstName", e.target.value)}
//                         placeholder="First name"
//                         className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                       Last name
//                     </label>
//                     <input
//                       type="text"
//                       value={form.lastName}
//                       onChange={(e) => updateField("lastName", e.target.value)}
//                       placeholder="Last name"
//                       className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Email address
//                   </label>
//                   <div className="relative">
//                     <Mail
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       type="email"
//                       value={form.email}
//                       onChange={(e) => updateField("email", e.target.value)}
//                       placeholder="you@example.com"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Mobile number
//                   </label>
//                   <div className="relative">
//                     <Phone
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       type="tel"
//                       value={form.phone}
//                       onChange={(e) => updateField("phone", e.target.value)}
//                       placeholder="10-digit mobile number"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 {/* Gender */}
//                 <div>
//                   <label className="mb-2 block text-xs font-semibold text-slate-700">
//                     Gender
//                   </label>
//                   <div className="flex items-center gap-6">
//                     <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
//                       <input
//                         type="radio"
//                         name="gender"
//                         value="Male"
//                         checked={form.gender === "Male"}
//                         onChange={() => updateField("gender", "Male")}
//                         className="h-4 w-4 accent-[#176b5b]"
//                       />
//                       Male
//                     </label>
//                     <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
//                       <input
//                         type="radio"
//                         name="gender"
//                         value="Female"
//                         checked={form.gender === "Female"}
//                         onChange={() => updateField("gender", "Female")}
//                         className="h-4 w-4 accent-[#176b5b]"
//                       />
//                       Female
//                     </label>
//                   </div>
//                 </div>

//                 {/* Password */}
//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <LockKeyhole
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="Create a password"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-11 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Confirm Password */}
//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Confirm password
//                   </label>
//                   <div className="relative">
//                     <LockKeyhole
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       type={showConfirmPassword ? "text" : "password"}
//                       value={form.confirmPassword}
//                       onChange={(e) =>
//                         updateField("confirmPassword", e.target.value)
//                       }
//                       placeholder="Confirm your password"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-11 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                       className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
//                     >
//                       {showConfirmPassword ? (
//                         <EyeOff size={16} />
//                       ) : (
//                         <Eye size={16} />
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading ? (
//                     "Creating account..."
//                   ) : (
//                     <>
//                       Create account
//                       <ArrowRight size={16} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <div className="mt-6 border-t border-slate-100 pt-5 text-center">
//                 <p className="text-sm text-slate-500">
//                   Already have an account?{" "}
//                   <Link
//                     href="/sign-in"
//                     className="font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Sign in
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { FormEvent, useState } from "react";
// import {
//   ArrowRight,
//   CheckCircle2,
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   Phone,
//   ShoppingBag,
//   User,
// } from "lucide-react";
// import {
//   createUserWithEmailAndPassword,
//   updateProfile,
// } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// export default function CustomerRegisterPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     gender: "" as "" | "Male" | "Female",
//     password: "",
//     confirmPassword: "",
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");
//     setSuccess(false);

//     const firstName = form.firstName.trim();
//     const lastName = form.lastName.trim();
//     const email = form.email.trim().toLowerCase();
//     const phone = form.phone.trim().replace(/\D/g, "").slice(-10);

//     if (!firstName) {
//       setError("Please enter your first name.");
//       return;
//     }
//     if (!lastName) {
//       setError("Please enter your last name.");
//       return;
//     }
//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!phone) {
//       setError("Please enter your mobile number.");
//       return;
//     }
//     if (!/^[6-9]\d{9}$/.test(phone)) {
//       setError("Please enter a valid 10-digit mobile number.");
//       return;
//     }
//     if (!form.gender) {
//       setError("Please select your gender.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please create a password.");
//       return;
//     }
//     if (form.password.length < 6) {
//       setError("Password must contain at least 6 characters.");
//       return;
//     }
//     if (form.password !== form.confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const fullName = `${firstName} ${lastName}`.trim();

//       // 1) Firebase Auth account
//       const cred = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         form.password
//       );

//       await updateProfile(cred.user, { displayName: fullName });

//       // 2) ERP-visible customer row (furniture_customers / uid)
//       await upsertCustomerFromAuth({
//         uid: cred.user.uid,
//         name: fullName,
//         email,
//         phone,
//         gender: form.gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       // 3) Website session (wishlist / cart still use email)
//       // localStorage.setItem(
//       //   "user",
//       //   JSON.stringify({
//       //     uid: cred.user.uid,
//       //     name: fullName,
//       //     email,
//       //     phone,
//       //     gender: form.gender,
//       //   })
//       // );

//       setSuccess(true);
//       setForm({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         gender: "",
//         password: "",
//         confirmPassword: "",
//       });
//     } catch (err: unknown) {
//       console.error(err);
//       const code =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (code === "auth/email-already-in-use") {
//         setError("This email is already registered. Please sign in.");
//       } else if (code === "auth/invalid-email") {
//         setError("Please enter a valid email address.");
//       } else if (code === "auth/weak-password") {
//         setError("Password is too weak. Use at least 6 characters.");
//       } else {
//         setError("Unable to create the account. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="grid min-h-screen lg:grid-cols-2">
//         <div className="hidden bg-slate-900 p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">
//           <div>
//             <Link href="/" className="inline-flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                 A
//               </div>
//               <div>
//                 <p className="text-sm font-bold">Akrish</p>
//                 <p className="text-xs text-slate-400">Furniture & Interior</p>
//               </div>
//             </Link>
//           </div>

//           <div className="max-w-lg">
//             <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
//               <ShoppingBag size={28} />
//             </div>

//             <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
//               Create your Akrish account
//             </h1>

//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Join us to shop premium furniture, track orders and enjoy a faster
//               checkout experience.
//             </p>

//             <div className="mt-8 space-y-4">
//               {[
//                 "Shop exclusive furniture collections",
//                 "Save items to your wishlist",
//                 "Track orders easily",
//                 "Faster & secure checkout",
//               ].map((item) => (
//                 <div key={item} className="flex items-center gap-3">
//                   <CheckCircle2
//                     size={17}
//                     className="shrink-0 text-emerald-400"
//                   />
//                   <span className="text-sm text-slate-300">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <p className="text-xs text-slate-500">
//             © {new Date().getFullYear()} Akrish Furniture
//           </p>
//         </div>

//         <div className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-10">
//           <div className="w-full max-w-md">
//             <div className="mb-8 flex justify-center lg:hidden">
//               <Link href="/" className="inline-flex items-center gap-3">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                   A
//                 </div>
//                 <div>
//                   <p className="text-sm font-bold text-slate-900">Akrish</p>
//                   <p className="text-xs text-slate-500">
//                     Furniture & Interior
//                   </p>
//                 </div>
//               </Link>
//             </div>

//             <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
//               <div className="mb-7">
//                 <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
//                   Customer Registration
//                 </p>
//                 <h2 className="mt-2 text-2xl font-bold text-slate-900">
//                   Create your account
//                 </h2>
//                 <p className="mt-2 text-sm leading-6 text-slate-500">
//                   Fill in your details to start shopping.
//                 </p>
//               </div>

//               {success && (
//                 <div className="mb-5 flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 text-sm text-emerald-700">
//                   <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
//                   <div>
//                     <p className="font-semibold">
//                       Account created successfully!
//                     </p>
//                     <p className="mt-0.5 text-xs">
//                       You can now{" "}
//                       <Link href="/sign-in" className="font-medium underline">
//                         sign in.
//                       </Link>
//                       {/* . Your profile is available in Furniture ERP → Customers. */}
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {error && (
//                 <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700">
//                   {error}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="grid gap-4 sm:grid-cols-2">
//                   <div>
//                     <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                       First name
//                     </label>
//                     <div className="relative">
//                       <User
//                         size={16}
//                         className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                       />
//                       <input
//                         type="text"
//                         value={form.firstName}
//                         onChange={(e) =>
//                           updateField("firstName", e.target.value)
//                         }
//                         placeholder="First name"
//                         className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                       Last name
//                     </label>
//                     <input
//                       type="text"
//                       value={form.lastName}
//                       onChange={(e) => updateField("lastName", e.target.value)}
//                       placeholder="Last name"
//                       className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Email address
//                   </label>
//                   <div className="relative">
//                     <Mail
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       type="email"
//                       value={form.email}
//                       onChange={(e) => updateField("email", e.target.value)}
//                       placeholder="you@example.com"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Mobile number
//                   </label>
//                   <div className="relative">
//                     <Phone
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       type="tel"
//                       value={form.phone}
//                       onChange={(e) => updateField("phone", e.target.value)}
//                       placeholder="10-digit mobile number"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-xs font-semibold text-slate-700">
//                     Gender
//                   </label>
//                   <div className="flex items-center gap-6">
//                     <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
//                       <input
//                         type="radio"
//                         name="gender"
//                         value="Male"
//                         checked={form.gender === "Male"}
//                         onChange={() => updateField("gender", "Male")}
//                         className="h-4 w-4 accent-[#176b5b]"
//                       />
//                       Male
//                     </label>
//                     <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
//                       <input
//                         type="radio"
//                         name="gender"
//                         value="Female"
//                         checked={form.gender === "Female"}
//                         onChange={() => updateField("gender", "Female")}
//                         className="h-4 w-4 accent-[#176b5b]"
//                       />
//                       Female
//                     </label>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <LockKeyhole
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="Create a password"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-11 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Confirm password
//                   </label>
//                   <div className="relative">
//                     <LockKeyhole
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       type={showConfirmPassword ? "text" : "password"}
//                       value={form.confirmPassword}
//                       onChange={(e) =>
//                         updateField("confirmPassword", e.target.value)
//                       }
//                       placeholder="Confirm your password"
//                       className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-11 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() =>
//                         setShowConfirmPassword(!showConfirmPassword)
//                       }
//                       className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
//                     >
//                       {showConfirmPassword ? (
//                         <EyeOff size={16} />
//                       ) : (
//                         <Eye size={16} />
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading ? (
//                     "Creating account..."
//                   ) : (
//                     <>
//                       Create account
//                       <ArrowRight size={16} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <div className="mt-6 border-t border-slate-100 pt-5 text-center">
//                 <p className="text-sm text-slate-500">
//                   Already have an account?{" "}
//                   <Link
//                     href="/sign-in"
//                     className="font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Sign in
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Phone,
  ShoppingBag,
  User,
} from "lucide-react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { upsertCustomerFromAuth } from "@/services/customerService";

export default function CustomerRegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "" as "" | "Male" | "Female",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    const firstName = form.firstName.trim();
    const lastName = form.lastName.trim();
    const email = form.email.trim().toLowerCase();
    const phone = form.phone.trim().replace(/\D/g, "").slice(-10);

    if (!firstName) {
      setError("Please enter your first name.");
      return;
    }
    if (!lastName) {
      setError("Please enter your last name.");
      return;
    }
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    if (!phone) {
      setError("Please enter your mobile number.");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!form.gender) {
      setError("Please select your gender.");
      return;
    }
    if (!form.password) {
      setError("Please create a password.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const fullName = `${firstName} ${lastName}`.trim();

      const cred = await createUserWithEmailAndPassword(
        auth,
        email,
        form.password
      );

      await updateProfile(cred.user, { displayName: fullName });

      await upsertCustomerFromAuth({
        uid: cred.user.uid,
        name: fullName,
        email,
        phone,
        gender: form.gender,
        photoURL: cred.user.photoURL || "",
      });

      setSuccess(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err: unknown) {
      console.error(err);
      const code =
        err && typeof err === "object" && "code" in err
          ? String((err as { code: string }).code)
          : "";

      if (code === "auth/email-already-in-use") {
        setError("This email is already registered. Please sign in.");
      } else if (code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (code === "auth/weak-password") {
        setError("Password is too weak. Use at least 6 characters.");
      } else {
        setError("Unable to create the account. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[100dvh] bg-[#f7f9f8]">
      <div className="grid min-h-[100dvh] lg:grid-cols-2">
        <div className="relative hidden overflow-hidden bg-slate-900 p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_40%)]" />
          <div className="relative">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
                A
              </div>
              <div>
                <p className="text-sm font-bold">Akrish</p>
                <p className="text-xs text-slate-400">Furniture & Interior</p>
              </div>
            </Link>
          </div>

          <div className="relative max-w-lg">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <ShoppingBag size={28} />
            </div>
            <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
              Create your Akrish account
            </h1>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
              Join us to shop premium furniture, track orders and enjoy a faster
              checkout experience.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Shop exclusive furniture collections",
                "Save items to your wishlist",
                "Track orders easily",
                "Faster & secure checkout",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-emerald-400"
                  />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="relative text-xs text-slate-500">
            © {new Date().getFullYear()} Akrish Furniture
          </p>
        </div>

        <div className="flex min-h-[100dvh] items-start justify-center px-4 pb-8 pt-6 sm:items-center sm:px-6 sm:py-10 lg:px-10">
          <div className="w-full max-w-md">
            <div className="mb-5 flex items-center justify-between lg:hidden">
              <Link href="/" className="inline-flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
                  A
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Akrish</p>
                  <p className="text-[10px] text-slate-500">
                    Furniture & Interior
                  </p>
                </div>
              </Link>
              <Link
                href="/products"
                className="text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Back to store
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
              <div className="mb-5 sm:mb-7">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">
                  Customer Registration
                </p>
                <h2 className="mt-1.5 text-xl font-bold text-slate-900 sm:mt-2 sm:text-2xl">
                  Create your account
                </h2>
                <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:mt-2 sm:text-sm sm:leading-6">
                  Fill in your details to start shopping.
                </p>
              </div>

              {success && (
                <div className="mb-4 flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 text-sm text-emerald-700 sm:mb-5">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold">
                      Account created successfully!
                    </p>
                    <p className="mt-0.5 text-xs">
                      You can now{" "}
                      <Link href="/sign-in" className="font-medium underline">
                        sign in
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              )}

              {error && (
                <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700 sm:mb-5">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                {/* First + last always side by side */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                      First name
                    </label>
                    <div className="relative">
                      <User
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                      <input
                        type="text"
                        autoComplete="given-name"
                        value={form.firstName}
                        onChange={(e) =>
                          updateField("firstName", e.target.value)
                        }
                        placeholder="First"
                        className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-2 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                      Last name
                    </label>
                    <input
                      type="text"
                      autoComplete="family-name"
                      value={form.lastName}
                      onChange={(e) => updateField("lastName", e.target.value)}
                      placeholder="Last"
                      className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Email address
                  </label>
                  <div className="relative">
                    <Mail
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Mobile number
                  </label>
                  <div className="relative">
                    <Phone
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="10-digit mobile"
                      className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-slate-700">
                    Gender
                  </label>
                  <div className="flex items-center gap-6">
                    <label className="flex min-h-[40px] cursor-pointer items-center gap-2 text-sm text-slate-700">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={form.gender === "Male"}
                        onChange={() => updateField("gender", "Male")}
                        className="h-4 w-4 accent-[#176b5b]"
                      />
                      Male
                    </label>
                    <label className="flex min-h-[40px] cursor-pointer items-center gap-2 text-sm text-slate-700">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={form.gender === "Female"}
                        onChange={() => updateField("gender", "Female")}
                        className="h-4 w-4 accent-[#176b5b]"
                      />
                      Female
                    </label>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Password
                  </label>
                  <div className="relative">
                    <LockKeyhole
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      value={form.password}
                      onChange={(e) => updateField("password", e.target.value)}
                      placeholder="Min. 6 characters"
                      className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-11 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center text-slate-400"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Confirm password
                  </label>
                  <div className="relative">
                    <LockKeyhole
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      autoComplete="new-password"
                      value={form.confirmPassword}
                      onChange={(e) =>
                        updateField("confirmPassword", e.target.value)
                      }
                      placeholder="Confirm password"
                      className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-11 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center text-slate-400"
                      aria-label={
                        showConfirmPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-1 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#125849] disabled:opacity-60"
                >
                  {loading ? (
                    "Creating account..."
                  ) : (
                    <>
                      Create account
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-5 border-t border-slate-100 pt-4 text-center sm:mt-6 sm:pt-5">
                <p className="text-sm text-slate-500">
                  Already have an account?{" "}
                  <Link
                    href="/sign-in"
                    className="font-semibold text-[#176b5b] hover:underline"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
