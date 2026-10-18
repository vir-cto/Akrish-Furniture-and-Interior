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
// } from "lucide-react";

// export default function SignInPage() {
//   const [showPassword, setShowPassword] = useState(false);

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");
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

//     const email = form.email.trim().toLowerCase();

//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }

//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       /*
//        * Connect this section to your authentication API/server
//        * action when backend authentication is available.
//        */
//       await new Promise((resolve) => setTimeout(resolve, 500));

//       // Example:
//       // const response = await fetch("/api/auth/sign-in", {
//       //   method: "POST",
//       //   headers: { "Content-Type": "application/json" },
//       //   body: JSON.stringify(form),
//       // });
//       //
//       // if (!response.ok) {
//       //   throw new Error("Invalid email or password.");
//       // }
//       //
//       // window.location.href = "/";

//       console.log("Sign-in submitted:", {
//         email,
//       });
//     } catch (signInError) {
//       console.error("Sign-in failed:", signInError);
//       setError("Invalid email or password. Please try again.");
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
//               Welcome back to VIP Interior ERP.
//             </h1>

//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Sign in to manage your interior projects,
//               clients, quotations, vendors, payments and
//               business operations.
//             </p>

//             <div className="mt-8 space-y-4">
//               {[
//                 "Manage interior projects",
//                 "Track clients and quotations",
//                 "Manage vendors and payments",
//                 "Monitor business performance",
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

//         {/* Sign-in panel */}
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
//                   Welcome back
//                 </p>

//                 <h2 className="mt-2 text-2xl font-bold text-slate-900">
//                   Sign in to your account
//                 </h2>

//                 <p className="mt-2 text-sm leading-6 text-slate-500">
//                   Enter your credentials to continue to the
//                   VIP Interior ERP platform.
//                 </p>
//               </div>

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
//                 className="space-y-5"
//               >
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
//                       autoFocus
//                       value={form.email}
//                       onChange={(event) =>
//                         updateField(
//                           "email",
//                           event.target.value
//                         )
//                       }
//                       placeholder="you@example.com"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-100"
//                     />
//                   </div>
//                 </div>

//                 {/* Password */}
//                 <div>
//                   <div className="mb-2 flex items-center justify-between">
//                     <label
//                       htmlFor="password"
//                       className="text-xs font-semibold text-slate-700"
//                     >
//                       Password
//                     </label>

//                     <Link
//                       href="/forgot-password"
//                       className="text-xs font-semibold text-slate-600 hover:text-slate-900 hover:underline"
//                     >
//                       Forgot password?
//                     </Link>
//                   </div>

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
//                       autoComplete="current-password"
//                       value={form.password}
//                       onChange={(event) =>
//                         updateField(
//                           "password",
//                           event.target.value
//                         )
//                       }
//                       placeholder="Enter your password"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-11 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-100"
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
//                 </div>

//                 {/* Remember me */}
//                 <label className="flex cursor-pointer items-center gap-2.5">
//                   <input
//                     type="checkbox"
//                     className="h-4 w-4 rounded border-slate-300 accent-slate-900"
//                   />

//                   <span className="text-xs text-slate-500">
//                     Remember me
//                   </span>
//                 </label>

//                 {/* Submit */}
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   {loading ? (
//                     <>
//                       <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
//                       Signing in...
//                     </>
//                   ) : (
//                     <>
//                       Sign in
//                       <ArrowRight size={16} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <div className="mt-6 border-t border-slate-100 pt-5 text-center">
//                 <p className="text-sm text-slate-500">
//                   Don&apos;t have an account?{" "}
//                   <Link
//                     href="/register"
//                     className="font-semibold text-slate-900 hover:underline"
//                   >
//                     Create an account
//                   </Link>
//                 </p>
//               </div>
//             </div>

//             <p className="mt-5 text-center text-[11px] leading-5 text-slate-400">
//               Secure access to your VIP Interior ERP
//               workspace.
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
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   ShoppingBag,
//   CheckCircle2,
// } from "lucide-react";

// export default function CustomerSignInPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();

//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       // TODO: Connect to real customer auth API later
//       await new Promise((resolve) => setTimeout(resolve, 600));

//       // Demo success
//       localStorage.setItem(
//         "user",
//         JSON.stringify({ name: "Customer", email })
//       );
//       window.location.href = "/account";
//     } catch {
//       setError("Invalid email or password. Please try again.");
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
//               Welcome back to Akrish Furniture.
//             </h1>

//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Sign in to track your orders, manage your wishlist and continue shopping for beautiful furniture.
//             </p>

//             <div className="mt-8 space-y-4">
//               {[
//                 "Track your furniture orders",
//                 "Save items to wishlist",
//                 "Faster checkout experience",
//                 "View purchase history",
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
//                   Customer Login
//                 </p>
//                 <h2 className="mt-2 text-2xl font-bold text-slate-900">
//                   Sign in to your account
//                 </h2>
//                 <p className="mt-2 text-sm leading-6 text-slate-500">
//                   Enter your credentials to continue shopping.
//                 </p>
//               </div>

//               {error && (
//                 <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700">
//                   {error}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div>
//                   <label htmlFor="email" className="mb-2 block text-xs font-semibold text-slate-700">
//                     Email address
//                   </label>
//                   <div className="relative">
//                     <Mail size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
//                     <input
//                       id="email"
//                       type="email"
//                       autoComplete="email"
//                       value={form.email}
//                       onChange={(e) => updateField("email", e.target.value)}
//                       placeholder="you@example.com"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <div className="mb-2 flex items-center justify-between">
//                     <label htmlFor="password" className="text-xs font-semibold text-slate-700">
//                       Password
//                     </label>
//                     <Link href="/forgot-password" className="text-xs font-semibold text-slate-600 hover:underline">
//                       Forgot password?
//                     </Link>
//                   </div>
//                   <div className="relative">
//                     <LockKeyhole size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="Enter your password"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-11 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100"
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <label className="flex cursor-pointer items-center gap-2.5">
//                   <input type="checkbox" className="h-4 w-4 rounded border-slate-300 accent-[#176b5b]" />
//                   <span className="text-xs text-slate-500">Remember me</span>
//                 </label>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading ? "Signing in..." : (
//                     <>
//                       Sign in
//                       <ArrowRight size={16} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <div className="mt-6 border-t border-slate-100 pt-5 text-center">
//                 <p className="text-sm text-slate-500">
//                   Don&apos;t have an account?{" "}
//                   <Link href="/register" className="font-semibold text-[#176b5b] hover:underline">
//                     Create an account
//                   </Link>
//                 </p>
//               </div>
//             </div>

//             <p className="mt-5 text-center text-[11px] text-slate-400">
//               This login is only for customers who want to shop furniture.
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
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   ShoppingBag,
//   CheckCircle2,
// } from "lucide-react";

// export default function CustomerSignInPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();

//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       // TODO: Connect to real Firebase Auth later
//       await new Promise((resolve) => setTimeout(resolve, 600));

//       // Create a proper display name from email
//       // Example: "ram@gmail.com" → "Ram"
//       const nameFromEmail = email
//         .split("@")[0]
//         .replace(/[._]/g, " ")
//         .split(" ")
//         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(" ");

//       localStorage.setItem(
//         "user",
//         JSON.stringify({
//           name: nameFromEmail,
//           email: email,
//         })
//       );

//       window.location.href = "/account";
//     } catch {
//       setError("Invalid email or password. Please try again.");
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
//               Welcome back to Akrish Furniture.
//             </h1>

//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Sign in to track your orders, manage your wishlist and continue
//               shopping for beautiful furniture.
//             </p>

//             <div className="mt-8 space-y-4">
//               {[
//                 "Track your furniture orders",
//                 "Save items to wishlist",
//                 "Faster checkout experience",
//                 "View purchase history",
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
//                   Customer Login
//                 </p>
//                 <h2 className="mt-2 text-2xl font-bold text-slate-900">
//                   Sign in to your account
//                 </h2>
//                 <p className="mt-2 text-sm leading-6 text-slate-500">
//                   Enter your credentials to continue shopping.
//                 </p>
//               </div>

//               {error && (
//                 <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700">
//                   {error}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-5">
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
//                       type="email"
//                       autoComplete="email"
//                       value={form.email}
//                       onChange={(e) => updateField("email", e.target.value)}
//                       placeholder="you@example.com"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <div className="mb-2 flex items-center justify-between">
//                     <label
//                       htmlFor="password"
//                       className="text-xs font-semibold text-slate-700"
//                     >
//                       Password
//                     </label>
//                     <Link
//                       href="/forgot-password"
//                       className="text-xs font-semibold text-slate-600 hover:underline"
//                     >
//                       Forgot password?
//                     </Link>
//                   </div>
//                   <div className="relative">
//                     <LockKeyhole
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="Enter your password"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-11 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100"
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <label className="flex cursor-pointer items-center gap-2.5">
//                   <input
//                     type="checkbox"
//                     className="h-4 w-4 rounded border-slate-300 accent-[#176b5b]"
//                   />
//                   <span className="text-xs text-slate-500">Remember me</span>
//                 </label>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading ? (
//                     "Signing in..."
//                   ) : (
//                     <>
//                       Sign in
//                       <ArrowRight size={16} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <div className="mt-6 border-t border-slate-100 pt-5 text-center">
//                 <p className="text-sm text-slate-500">
//                   Don&apos;t have an account?{" "}
//                   <Link
//                     href="/register"
//                     className="font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Create an account
//                   </Link>
//                 </p>
//               </div>
//             </div>

//             <p className="mt-5 text-center text-[11px] text-slate-400">
//               This login is only for customers who want to shop furniture.
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
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   ShoppingBag,
//   CheckCircle2,
// } from "lucide-react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// export default function CustomerSignInPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();
//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//   //   setLoading(true);

//   //   try {
//   //     const cred = await signInWithEmailAndPassword(
//   //       auth,
//   //       email,
//   //       form.password
//   //     );

//   //     const name =
//   //       cred.user.displayName ||
//   //       email
//   //         .split("@")[0]
//   //         .replace(/[._]/g, " ")
//   //         .split(" ")
//   //         .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
//   //         .join(" ");

//   //     // Ensure ERP customer row exists (covers older local-only accounts)
//   //     await upsertCustomerFromAuth({
//   //       uid: cred.user.uid,
//   //       name,
//   //       email: cred.user.email || email,
//   //       photoURL: cred.user.photoURL || "",
//   //     });

//   //     localStorage.setItem(
//   //       "user",
//   //       JSON.stringify({
//   //         uid: cred.user.uid,
//   //         name,
//   //         email: cred.user.email || email,
//   //       })
//   //     );

//   //     window.location.href = "/account";
//   //   } catch (err: unknown) {
//   //     console.error(err);
//   //     const code =
//   //       err && typeof err === "object" && "code" in err
//   //         ? String((err as { code: string }).code)
//   //         : "";

//   //     if (
//   //       code === "auth/invalid-credential" ||
//   //       code === "auth/wrong-password" ||
//   //       code === "auth/user-not-found" ||
//   //       code === "auth/invalid-email"
//   //     ) {
//   //       setError("Invalid email or password. Please try again.");
//   //     } else {
//   //       setError("Unable to sign in. Please try again.");
//   //     }
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//       setLoading(true);

//     try {
//       // TODO: Connect to real Firebase Auth later
//       await new Promise((resolve) => setTimeout(resolve, 600));

//       const emailKey = email.toLowerCase();

//       // Prefer saved full profile from registration
//       const savedProfile = localStorage.getItem(`profile_${emailKey}`);

//       if (savedProfile) {
//         localStorage.setItem("user", savedProfile);
//       } else {
//         // Fallback: build name from email
//         const nameFromEmail = email
//           .split("@")[0]
//           .replace(/[._]/g, " ")
//           .split(" ")
//           .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//           .join(" ");

//         localStorage.setItem(
//           "user",
//           JSON.stringify({
//             name: nameFromEmail,
//             email: emailKey,
//             phone: "",
//             gender: "",
//           })
//         );
//       }

//       window.location.href = "/account";
//     } catch {
//       setError("Invalid email or password. Please try again.");
//     } finally {
//       setLoading(false);
//     }

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
//               Welcome back to Akrish Furniture.
//             </h1>
//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Sign in to track your orders, manage your wishlist and continue
//               shopping for beautiful furniture.
//             </p>
//             <div className="mt-8 space-y-4">
//               {[
//                 "Track your furniture orders",
//                 "Save items to wishlist",
//                 "Faster checkout experience",
//                 "View purchase history",
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
//                   Customer Login
//                 </p>
//                 <h2 className="mt-2 text-2xl font-bold text-slate-900">
//                   Sign in to your account
//                 </h2>
//                 <p className="mt-2 text-sm leading-6 text-slate-500">
//                   Enter your credentials to continue shopping.
//                 </p>
//               </div>
//               {error && (
//                 <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700">
//                   {error}
//                 </div>
//               )}
//               <form onSubmit={handleSubmit} className="space-y-5">
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
//                       type="email"
//                       autoComplete="email"
//                       value={form.email}
//                       onChange={(e) => updateField("email", e.target.value)}
//                       placeholder="you@example.com"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <div className="mb-2 flex items-center justify-between">
//                     <label
//                       htmlFor="password"
//                       className="text-xs font-semibold text-slate-700"
//                     >
//                       Password
//                     </label>
//                     <Link
//                       href="/forgot-password"
//                       className="text-xs font-semibold text-slate-600 hover:underline"
//                     >
//                       Forgot password?
//                     </Link>
//                   </div>
//                   <div className="relative">
//                     <LockKeyhole
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="Enter your password"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-11 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100"
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>
//                 <label className="flex cursor-pointer items-center gap-2.5">
//                   <input
//                     type="checkbox"
//                     className="h-4 w-4 rounded border-slate-300 accent-[#176b5b]"
//                   />
//                   <span className="text-xs text-slate-500">Remember me</span>
//                 </label>
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading ? (
//                     "Signing in..."
//                   ) : (
//                     <>
//                       Sign in
//                       <ArrowRight size={16} />
//                     </>
//                   )}
//                 </button>
//               </form>
//               <div className="mt-6 border-t border-slate-100 pt-5 text-center">
//                 <p className="text-sm text-slate-500">
//                   Don&apos;t have an account?{" "}
//                   <Link
//                     href="/register"
//                     className="font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Create an account
//                   </Link>
//                 </p>
//               </div>
//             </div>
//             <p className="mt-5 text-center text-[11px] text-slate-400">
//               This login is only for customers who want to shop furniture.
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
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   ShoppingBag,
//   CheckCircle2,
// } from "lucide-react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// export default function CustomerSignInPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();
//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const cred = await signInWithEmailAndPassword(auth, email, form.password);
//       const uid = cred.user.uid;

//       // Default name from displayName or email
//       let name =
//         cred.user.displayName ||
//         email
//           .split("@")[0]
//           .replace(/[._]/g, " ")
//           .split(" ")
//           .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
//           .join(" ");

//       let phone = "";
//       let gender = "";

//       // 1) Try furniture_customers/{uid}
//       try {
//         const customerSnap = await getDoc(doc(db, "furniture_customers", uid));
//         if (customerSnap.exists()) {
//           const data = customerSnap.data();
//           if (data.name) name = data.name;
//           if (data.phone) phone = String(data.phone);
//           if (data.gender) gender = String(data.gender);
//         }
//       } catch (e) {
//         console.warn("Could not load furniture_customers:", e);
//       }

//       // 2) Fallback: local profile cache from registration
//       if (!phone || !gender) {
//         const savedProfile = localStorage.getItem(`profile_${email}`);
//         if (savedProfile) {
//           try {
//             const parsed = JSON.parse(savedProfile);
//             if (!phone && parsed.phone) phone = parsed.phone;
//             if (!gender && parsed.gender) gender = parsed.gender;
//             if (parsed.name) name = parsed.name;
//           } catch {
//             // ignore
//           }
//         }
//       }

//       // Ensure ERP customer row exists
//       await upsertCustomerFromAuth({
//         uid,
//         name,
//         email: cred.user.email || email,
//         phone,
//         gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       const userData = {
//         uid,
//         name,
//         email: cred.user.email || email,
//         phone,
//         gender,
//       };

//       localStorage.setItem("user", JSON.stringify(userData));
//       localStorage.setItem(`profile_${email}`, JSON.stringify(userData));

//       window.location.href = "/account";
//     } catch (err: unknown) {
//       console.error(err);
//       const code =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (
//         code === "auth/invalid-credential" ||
//         code === "auth/wrong-password" ||
//         code === "auth/user-not-found" ||
//         code === "auth/invalid-email"
//       ) {
//         setError("Invalid email or password. Please try again.");
//       } else {
//         setError("Unable to sign in. Please try again.");
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
//               Welcome back to Akrish Furniture.
//             </h1>
//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Sign in to track your orders, manage your wishlist and continue
//               shopping for beautiful furniture.
//             </p>
//             <div className="mt-8 space-y-4">
//               {[
//                 "Track your furniture orders",
//                 "Save items to wishlist",
//                 "Faster checkout experience",
//                 "View purchase history",
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
//                   <p className="text-xs text-slate-500">Furniture & Interior</p>
//                 </div>
//               </Link>
//             </div>

//             <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
//               <div className="mb-7">
//                 <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
//                   Customer Login
//                 </p>
//                 <h2 className="mt-2 text-2xl font-bold text-slate-900">
//                   Sign in to your account
//                 </h2>
//                 <p className="mt-2 text-sm leading-6 text-slate-500">
//                   Enter your credentials to continue shopping.
//                 </p>
//               </div>

//               {error && (
//                 <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700">
//                   {error}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-5">
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
//                       type="email"
//                       autoComplete="email"
//                       value={form.email}
//                       onChange={(e) => updateField("email", e.target.value)}
//                       placeholder="you@example.com"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <div className="mb-2 flex items-center justify-between">
//                     <label
//                       htmlFor="password"
//                       className="text-xs font-semibold text-slate-700"
//                     >
//                       Password
//                     </label>
//                     <Link
//                       href="/forgot-password"
//                       className="text-xs font-semibold text-slate-600 hover:underline"
//                     >
//                       Forgot password?
//                     </Link>
//                   </div>
//                   <div className="relative">
//                     <LockKeyhole
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="Enter your password"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-11 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100"
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <label className="flex cursor-pointer items-center gap-2.5">
//                   <input
//                     type="checkbox"
//                     className="h-4 w-4 rounded border-slate-300 accent-[#176b5b]"
//                   />
//                   <span className="text-xs text-slate-500">Remember me</span>
//                 </label>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading ? (
//                     "Signing in..."
//                   ) : (
//                     <>
//                       Sign in
//                       <ArrowRight size={16} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <div className="mt-6 border-t border-slate-100 pt-5 text-center">
//                 <p className="text-sm text-slate-500">
//                   Don&apos;t have an account?{" "}
//                   <Link
//                     href="/register"
//                     className="font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Create an account
//                   </Link>
//                 </p>
//               </div>
//             </div>

//             <p className="mt-5 text-center text-[11px] text-slate-400">
//               This login is only for customers who want to shop furniture.
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
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   ShoppingBag,
//   CheckCircle2,
// } from "lucide-react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// export default function CustomerSignInPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();
//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const cred = await signInWithEmailAndPassword(auth, email, form.password);
//       const uid = cred.user.uid;

//       let name =
//         cred.user.displayName ||
//         email
//           .split("@")[0]
//           .replace(/[._]/g, " ")
//           .split(" ")
//           .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
//           .join(" ");

//       let phone = "";
//       let gender = "";

//       const customerSnap = await getDoc(doc(db, "furniture_customers", uid));
//       if (customerSnap.exists()) {
//         const data = customerSnap.data();
//         if (data.name) name = String(data.name);
//         if (data.phone) phone = String(data.phone);
//         if (data.gender) gender = String(data.gender);
//       }

//       await upsertCustomerFromAuth({
//         uid,
//         name,
//         email: cred.user.email || email,
//         phone,
//         gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       // Session is Firebase Auth only — no localStorage
//       window.location.href = "/account";
//     } catch (err: unknown) {
//       console.error(err);
//       const code =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (
//         code === "auth/invalid-credential" ||
//         code === "auth/wrong-password" ||
//         code === "auth/user-not-found" ||
//         code === "auth/invalid-email"
//       ) {
//         setError("Invalid email or password. Please try again.");
//       } else {
//         setError("Unable to sign in. Please try again.");
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
//               Welcome back to Akrish Furniture.
//             </h1>
//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Sign in to track your orders, manage your wishlist and continue
//               shopping for beautiful furniture.
//             </p>
//             <div className="mt-8 space-y-4">
//               {[
//                 "Track your furniture orders",
//                 "Save items to wishlist",
//                 "Faster checkout experience",
//                 "View purchase history",
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
//                   Customer Login
//                 </p>
//                 <h2 className="mt-2 text-2xl font-bold text-slate-900">
//                   Sign in to your account
//                 </h2>
//                 <p className="mt-2 text-sm leading-6 text-slate-500">
//                   Enter your credentials to continue shopping.
//                 </p>
//               </div>

//               {error && (
//                 <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700">
//                   {error}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-5">
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
//                       type="email"
//                       autoComplete="email"
//                       value={form.email}
//                       onChange={(e) => updateField("email", e.target.value)}
//                       placeholder="you@example.com"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <div className="mb-2 flex items-center justify-between">
//                     <label
//                       htmlFor="password"
//                       className="text-xs font-semibold text-slate-700"
//                     >
//                       Password
//                     </label>
//                     <Link
//                       href="/forgot-password"
//                       className="text-xs font-semibold text-slate-600 hover:underline"
//                     >
//                       Forgot password?
//                     </Link>
//                   </div>
//                   <div className="relative">
//                     <LockKeyhole
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="Enter your password"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-11 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100"
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 py-3 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading ? (
//                     "Signing in..."
//                   ) : (
//                     <>
//                       Sign in
//                       <ArrowRight size={16} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <div className="mt-6 border-t border-slate-100 pt-5 text-center">
//                 <p className="text-sm text-slate-500">
//                   Don&apos;t have an account?{" "}
//                   <Link
//                     href="/register"
//                     className="font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Create an account
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
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   ShoppingBag,
//   CheckCircle2,
// } from "lucide-react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";
// import { upsertCustomerFromAuth } from "@/services/customerService";

// export default function CustomerSignInPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const updateField = (field: keyof typeof form, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     const email = form.email.trim().toLowerCase();
//     if (!email) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!form.password) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const cred = await signInWithEmailAndPassword(auth, email, form.password);
//       const uid = cred.user.uid;

//       let name =
//         cred.user.displayName ||
//         email
//           .split("@")[0]
//           .replace(/[._]/g, " ")
//           .split(" ")
//           .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
//           .join(" ");

//       let phone = "";
//       let gender = "";

//       const customerSnap = await getDoc(doc(db, "furniture_customers", uid));
//       if (customerSnap.exists()) {
//         const data = customerSnap.data();
//         if (data.name) name = String(data.name);
//         if (data.phone) phone = String(data.phone);
//         if (data.gender) gender = String(data.gender);
//       }

//       await upsertCustomerFromAuth({
//         uid,
//         name,
//         email: cred.user.email || email,
//         phone,
//         gender,
//         photoURL: cred.user.photoURL || "",
//       });

//       window.location.href = "/account";
//     } catch (err: unknown) {
//       console.error(err);
//       const code =
//         err && typeof err === "object" && "code" in err
//           ? String((err as { code: string }).code)
//           : "";

//       if (
//         code === "auth/invalid-credential" ||
//         code === "auth/wrong-password" ||
//         code === "auth/user-not-found" ||
//         code === "auth/invalid-email"
//       ) {
//         setError("Invalid email or password. Please try again.");
//       } else {
//         setError("Unable to sign in. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-[100dvh] bg-[#f7f9f8]">
//       <div className="grid min-h-[100dvh] lg:grid-cols-2">
//         {/* Left panel — desktop only */}
//         <div className="relative hidden overflow-hidden bg-slate-900 p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_40%)]" />
//           <div className="relative">
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
//           <div className="relative max-w-lg">
//             <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
//               <ShoppingBag size={28} />
//             </div>
//             <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
//               Welcome back to Akrish Furniture.
//             </h1>
//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//               Sign in to track your orders, manage your wishlist and continue
//               shopping for beautiful furniture.
//             </p>
//             <div className="mt-8 space-y-4">
//               {[
//                 "Track your furniture orders",
//                 "Save items to wishlist",
//                 "Faster checkout experience",
//                 "View purchase history",
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
//           <p className="relative text-xs text-slate-500">
//             © {new Date().getFullYear()} Akrish Furniture
//           </p>
//         </div>

//         {/* Form */}
//         <div className="flex min-h-[100dvh] items-start justify-center px-4 pb-8 pt-6 sm:items-center sm:px-6 sm:py-10 lg:px-10">
//           <div className="w-full max-w-md">
//             <div className="mb-6 flex items-center justify-between lg:hidden">
//               <Link href="/" className="inline-flex items-center gap-2.5">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#176b5b] text-sm font-bold text-white">
//                   A
//                 </div>
//                 <div>
//                   <p className="text-sm font-bold text-slate-900">Akrish</p>
//                   <p className="text-[10px] text-slate-500">
//                     Furniture & Interior
//                   </p>
//                 </div>
//               </Link>
//               <Link
//                 href="/products"
//                 className="text-xs font-semibold text-slate-600 hover:text-slate-900"
//               >
//                 Back to store
//               </Link>
//             </div>

//             <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
//               <div className="mb-6 sm:mb-7">
//                 <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">
//                   Customer Login
//                 </p>
//                 <h2 className="mt-1.5 text-xl font-bold text-slate-900 sm:mt-2 sm:text-2xl">
//                   Sign in to your account
//                 </h2>
//                 <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:mt-2 sm:text-sm sm:leading-6">
//                   Enter your credentials to continue shopping.
//                 </p>
//               </div>

//               {error && (
//                 <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700 sm:mb-5">
//                   {error}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-1.5 block text-xs font-semibold text-slate-700"
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
//                       type="email"
//                       autoComplete="email"
//                       inputMode="email"
//                       value={form.email}
//                       onChange={(e) => updateField("email", e.target.value)}
//                       placeholder="you@example.com"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <div className="mb-1.5 flex items-center justify-between gap-2">
//                     <label
//                       htmlFor="password"
//                       className="text-xs font-semibold text-slate-700"
//                     >
//                       Password
//                     </label>
//                     <Link
//                       href="/forgot-password"
//                       className="text-xs font-semibold text-slate-600 hover:underline"
//                     >
//                       Forgot password?
//                     </Link>
//                   </div>
//                   <div className="relative">
//                     <LockKeyhole
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     />
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       autoComplete="current-password"
//                       value={form.password}
//                       onChange={(e) => updateField("password", e.target.value)}
//                       placeholder="Enter your password"
//                       className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-11 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100"
//                       aria-label={
//                         showPassword ? "Hide password" : "Show password"
//                       }
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 py-3 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   {loading ? (
//                     "Signing in..."
//                   ) : (
//                     <>
//                       Sign in
//                       <ArrowRight size={16} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <div className="mt-5 border-t border-slate-100 pt-4 text-center sm:mt-6 sm:pt-5">
//                 <p className="text-sm text-slate-500">
//                   Don&apos;t have an account?{" "}
//                   <Link
//                     href="/register"
//                     className="font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Create an account
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShoppingBag,
  CheckCircle2,
} from "lucide-react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { upsertCustomerFromAuth } from "@/services/customerService";

const STAFF_ROLES = new Set([
  "admin",
  "manager",
  "sales",
  "designer",
  "accountant",
  "hr",
  "employee",
]);

async function isStaffAccount(uid: string, email: string): Promise<boolean> {
  if (email === "admin@akrish.in") return true;

  const staffSnap = await getDoc(doc(db, "users", uid));
  if (!staffSnap.exists()) return false;

  const role = String(staffSnap.data()?.role || "").toLowerCase();
  return STAFF_ROLES.has(role);
}

export default function CustomerSignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const email = form.email.trim().toLowerCase();
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    if (!form.password) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);

    try {
      const cred = await signInWithEmailAndPassword(auth, email, form.password);
      const uid = cred.user.uid;

      // Block ERP staff from using the storefront login
      if (await isStaffAccount(uid, email)) {
        await signOut(auth);
        setError(
          "This is a staff account. Please sign in through the Collective ERP staff login."
        );
        return;
      }

      let name =
        cred.user.displayName ||
        email
          .split("@")[0]
          .replace(/[._]/g, " ")
          .split(" ")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ");

      let phone = "";
      let gender = "";

      const customerSnap = await getDoc(doc(db, "furniture_customers", uid));
      if (customerSnap.exists()) {
        const data = customerSnap.data();
        if (data.name) name = String(data.name);
        if (data.phone) phone = String(data.phone);
        if (data.gender) gender = String(data.gender);
      }

      await upsertCustomerFromAuth({
        uid,
        name,
        email: cred.user.email || email,
        phone,
        gender,
        photoURL: cred.user.photoURL || "",
      });

      window.location.href = "/account";
    } catch (err: unknown) {
      console.error(err);
      const code =
        err && typeof err === "object" && "code" in err
          ? String((err as { code: string }).code)
          : "";

      if (
        code === "auth/invalid-credential" ||
        code === "auth/wrong-password" ||
        code === "auth/user-not-found" ||
        code === "auth/invalid-email"
      ) {
        setError("Invalid email or password. Please try again.");
      } else {
        setError("Unable to sign in. Please try again.");
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
              Welcome back to Akrish Furniture.
            </h1>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
              Sign in to track your orders, manage your wishlist and continue
              shopping for beautiful furniture.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Track your furniture orders",
                "Save items to wishlist",
                "Faster checkout experience",
                "View purchase history",
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
            <div className="mb-6 flex items-center justify-between lg:hidden">
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
              <div className="mb-6 sm:mb-7">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">
                  Customer Login
                </p>
                <h2 className="mt-1.5 text-xl font-bold text-slate-900 sm:mt-2 sm:text-2xl">
                  Sign in to your account
                </h2>
                <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:mt-2 sm:text-sm sm:leading-6">
                  Enter your credentials to continue shopping.
                </p>
              </div>

              {error && (
                <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-700 sm:mb-5">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-semibold text-slate-700"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <Mail
                      size={17}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-1.5 flex items-center justify-between gap-2">
                    <label
                      htmlFor="password"
                      className="text-xs font-semibold text-slate-700"
                    >
                      Password
                    </label>
                    <Link
                      href="/forgot-password"
                      className="text-xs font-semibold text-slate-600 hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <LockKeyhole
                      size={17}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      value={form.password}
                      onChange={(e) => updateField("password", e.target.value)}
                      placeholder="Enter your password"
                      className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-11 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 py-3 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
                >
                  {loading ? (
                    "Signing in..."
                  ) : (
                    <>
                      Sign in
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-5 border-t border-slate-100 pt-4 text-center sm:mt-6 sm:pt-5">
                <p className="text-sm text-slate-500">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/register"
                    className="font-semibold text-[#176b5b] hover:underline"
                  >
                    Create an account
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
