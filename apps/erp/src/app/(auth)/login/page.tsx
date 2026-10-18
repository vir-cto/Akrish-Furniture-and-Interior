// "use client";

// import { FormEvent, useState } from "react";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     setError("");

//     if (!email.trim()) {
//       setError("Please enter your email address.");
//       return;
//     }

//     if (!password.trim()) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);

//     try {
//       /*
//        * Connect this to your real authentication API.
//        *
//        * Example:
//        *
//        * const response = await fetch("/api/auth/login", {
//        *   method: "POST",
//        *   headers: {
//        *     "Content-Type": "application/json",
//        *   },
//        *   body: JSON.stringify({
//        *     email,
//        *     password,
//        *   }),
//        * });
//        *
//        * const data = await response.json();
//        *
//        * if (!response.ok) {
//        *   throw new Error(data.message || "Invalid credentials");
//        * }
//        */

//       const response = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Invalid email or password.");
//       }

//       router.push("/");
//       router.refresh();
//     } catch (err) {
//       setError(
//         err instanceof Error
//           ? err.message
//           : "Unable to sign in. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f6f1] flex items-center justify-center p-4">
//       <div className="w-full max-w-[1100px] min-h-[650px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden grid lg:grid-cols-2">
//         {/* LEFT - LOGIN FORM */}
//         <section className="flex items-center justify-center px-6 py-10 sm:px-10 lg:px-16">
//           <div className="w-full max-w-[420px]">
//             {/* Logo */}
//             <div className="mb-10">
//               <div className="text-[28px] font-bold tracking-tight text-[#9a5b18]">
//                 Akrish
//               </div>

//               <div className="text-[9px] uppercase tracking-[3px] text-[#6d6d6d]">
//                 Furniture and Interior
//               </div>
//             </div>

//             {/* Heading */}
//             <div className="mb-8">
//               <h1 className="text-[28px] font-semibold text-[#202020]">
//                 Sign in to Collective ERP
//               </h1>

//               <p className="mt-2 text-sm text-[#777]">
//                 Access your interior and furniture modules
//               </p>
//             </div>

//             <form onSubmit={handleLogin} className="space-y-5">
//               {/* Email */}
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="mb-2 block text-sm font-medium text-[#333]"
//                 >
//                   Email address
//                 </label>

//                 <input
//                   id="email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="you@example.com"
//                   autoComplete="email"
//                   className="h-12 w-full rounded-lg border border-[#d9d9d9] bg-white px-4 text-sm text-[#222] outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                 />
//               </div>

//               {/* Password */}
//               <div>
//                 <div className="mb-2 flex items-center justify-between">
//                   <label
//                     htmlFor="password"
//                     className="block text-sm font-medium text-[#333]"
//                   >
//                     Password
//                   </label>

//                   <button
//                     type="button"
//                     onClick={() => {
//                       // Forgot password can be connected later
//                       router.push("/forgot-password");
//                     }}
//                     className="text-xs font-medium text-[#176b5b] hover:underline"
//                   >
//                     Forgot password?
//                   </button>
//                 </div>

//                 <div className="relative">
//                   <input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Enter your password"
//                     autoComplete="current-password"
//                     className="h-12 w-full rounded-lg border border-[#d9d9d9] bg-white px-4 pr-20 text-sm text-[#222] outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                   />

//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-[#176b5b] hover:underline"
//                   >
//                     {showPassword ? "Hide" : "Show"}
//                   </button>
//                 </div>
//               </div>

//               {/* Error */}
//               {error && (
//                 <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
//                   {error}
//                 </div>
//               )}

//               {/* Remember */}
//               <div className="flex items-center gap-2">
//                 <input
//                   id="remember"
//                   type="checkbox"
//                   className="h-4 w-4 rounded border-gray-300 accent-[#176b5b]"
//                 />

//                 <label
//                   htmlFor="remember"
//                   className="text-sm text-[#666]"
//                 >
//                   Remember me
//                 </label>
//               </div>

//               {/* Login button */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="h-12 w-full rounded-lg bg-[#176b5b] text-sm font-semibold text-white transition hover:bg-[#125849] disabled:cursor-not-allowed disabled:opacity-60"
//               >
//                 {loading ? "Signing in..." : "Sign In"}
//               </button>
//             </form>

//             {/* Footer */}
//             <p className="mt-8 text-center text-xs text-[#999]">
//               Authorized users only
//             </p>
//           </div>
//         </section>

//         {/* RIGHT - INTERIOR IMAGE / BRANDING */}
//         <section className="relative hidden min-h-[650px] overflow-hidden lg:block">
//           {/* Background image */}
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{
//               backgroundImage:
//                 "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85')",
//             }}
//           />

//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black/20" />

//           {/* Content */}
//           <div className="relative z-10 flex h-full flex-col justify-between p-10">
//             <div className="flex justify-end">
//               <div className="rounded-full bg-white/85 px-4 py-2 text-xs font-medium text-[#555] backdrop-blur">
//                 Interior & Furniture ERP
//               </div>
//             </div>

//             <div className="max-w-[420px]">
//               <div className="mb-4 inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#176b5b]">
//                 Collective ERP
//               </div>

//               <h2 className="text-4xl font-semibold leading-tight text-white drop-shadow-md">
//                 Transforming Spaces,
//                 <br />
//                 Creating Better Lives
//               </h2>

//               <p className="mt-5 max-w-[390px] text-sm leading-6 text-white/90">
//                 Manage your interior projects, clients, quotations,
//                 employees, payments and furniture operations from one
//                 connected ERP platform.
//               </p>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// "use client";

// import { FormEvent, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useAuth } from "@/core/auth/AuthContext";

// export default function LoginPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const { login } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");

//     if (!email.trim()) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!password.trim()) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const success = await login(email, password);

//       if (!success) {
//         throw new Error("Invalid email or password.");
//       }

//       // After successful login → go to Module Switcher
//       const redirect = searchParams.get("redirect");
//       if (redirect) {
//         router.push(redirect);
//       } else {
//         router.push("/"); // will land on Module Switcher page
//       }
//       router.refresh();
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Unable to sign in.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f6f1] flex items-center justify-center p-4">
//       <div className="w-full max-w-[1100px] min-h-[650px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden grid lg:grid-cols-2">
//         {/* LEFT – FORM */}
//         <section className="flex items-center justify-center px-6 py-10 sm:px-10 lg:px-16">
//           <div className="w-full max-w-[420px]">
//             <div className="mb-10">
//               <div className="text-[28px] font-bold tracking-tight text-[#9a5b18]">Akrish</div>
//               <div className="text-[9px] uppercase tracking-[3px] text-[#6d6d6d]">
//                 Furniture and Interior
//               </div>
//             </div>

//             <div className="mb-8">
//               <h1 className="text-[28px] font-semibold text-[#202020]">
//                 Sign in to Collective ERP
//               </h1>
//               <p className="mt-2 text-sm text-[#777]">
//                 Access your interior and furniture modules
//               </p>
//             </div>

//             <form onSubmit={handleLogin} className="space-y-5">
//               <div>
//                 <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#333]">
//                   Email address
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="admin@akrish.in"
//                   autoComplete="email"
//                   className="h-12 w-full rounded-lg border border-[#d9d9d9] bg-white px-4 text-sm text-[#222] outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                 />
//               </div>

//               <div>
//                 <div className="mb-2 flex items-center justify-between">
//                   <label htmlFor="password" className="block text-sm font-medium text-[#333]">
//                     Password
//                   </label>
//                   <button
//                     type="button"
//                     onClick={() => router.push("/forgot-password")}
//                     className="text-xs font-medium text-[#176b5b] hover:underline"
//                   >
//                     Forgot password?
//                   </button>
//                 </div>
//                 <div className="relative">
//                   <input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Enter your password"
//                     autoComplete="current-password"
//                     className="h-12 w-full rounded-lg border border-[#d9d9d9] bg-white px-4 pr-20 text-sm text-[#222] outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-[#176b5b] hover:underline"
//                   >
//                     {showPassword ? "Hide" : "Show"}
//                   </button>
//                 </div>
//               </div>

//               {error && (
//                 <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
//                   {error}
//                 </div>
//               )}

//               <div className="flex items-center gap-2">
//                 <input id="remember" type="checkbox" className="h-4 w-4 rounded border-gray-300 accent-[#176b5b]" />
//                 <label htmlFor="remember" className="text-sm text-[#666]">Remember me</label>
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="h-12 w-full rounded-lg bg-[#176b5b] text-sm font-semibold text-white transition hover:bg-[#125849] disabled:cursor-not-allowed disabled:opacity-60"
//               >
//                 {loading ? "Signing in..." : "Sign In"}
//               </button>
//             </form>

//             <p className="mt-8 text-center text-xs text-[#999]">Authorized users only</p>
//             {/* <p className="mt-2 text-center text-xs text-[#aaa]">
//               Demo: admin@akrish.in / Admin123
//             </p> */}
//           </div>
//         </section>

//         {/* RIGHT – BRANDING */}
//         <section className="relative hidden min-h-[650px] overflow-hidden lg:block">
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{
//               backgroundImage:
//                 "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85')",
//             }}
//           />
//           <div className="absolute inset-0 bg-black/20" />
//           <div className="relative z-10 flex h-full flex-col justify-between p-10">
//             <div className="flex justify-end">
//               <div className="rounded-full bg-white/85 px-4 py-2 text-xs font-medium text-[#555] backdrop-blur">
//                 Interior & Furniture ERP
//               </div>
//             </div>
//             <div className="max-w-[420px]">
//               <div className="mb-4 inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#176b5b]">
//                 Collective ERP
//               </div>
//               <h2 className="text-4xl font-semibold leading-tight text-white drop-shadow-md">
//                 Transforming Spaces,
//                 <br />
//                 Creating Better Lives
//               </h2>
//               <p className="mt-5 max-w-[390px] text-sm leading-6 text-white/90">
//                 Manage your interior projects, clients, quotations, employees, payments and furniture operations from one connected ERP platform.
//               </p>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// "use client";

// import { FormEvent, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useAuth } from "@/core/auth/AuthContext";

// export default function LoginPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const { login } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");

//     if (!email.trim()) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!password.trim()) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const success = await login(email, password);

//       if (!success) {
//         throw new Error("Invalid email or password.");
//       }

//       const redirect = searchParams.get("redirect");
//       if (redirect) {
//         router.push(redirect);
//       } else {
//         router.push("/");
//       }
//       router.refresh();
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Unable to sign in.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex min-h-[100dvh] flex-col bg-[#f7f6f1]">
//       {/* Header */}
//       <header className="sticky top-0 z-40 border-b border-[#e4e2da] bg-white/95 backdrop-blur">
//         <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
//           <div className="flex items-center gap-2.5 sm:gap-3">
//             <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#176b5b] sm:h-10 sm:w-10">
//               <span className="text-sm font-bold text-white sm:text-base">A</span>
//             </div>
//             <div className="min-w-0">
//               <p className="truncate text-base font-bold leading-none text-[#17352f] sm:text-lg">
//                 Akrish
//               </p>
//               <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.16em] text-[#9a5b18] sm:text-[10px]">
//                 Furniture & Interior
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2 sm:gap-3">
//             <span className="hidden rounded-full border border-[#e4e2da] bg-[#fafaf8] px-3 py-1.5 text-xs font-medium text-[#555] sm:inline-flex">
//               Collective ERP
//             </span>
//             <span className="rounded-full bg-[#176b5b]/10 px-2.5 py-1 text-[10px] font-semibold text-[#176b5b] sm:px-3 sm:text-xs">
//               Staff Login
//             </span>
//           </div>
//         </div>
//       </header>

//       {/* Body */}
//       <main className="flex flex-1 items-center justify-center p-4 sm:p-6">
//         <div className="grid w-full max-w-[1100px] overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] lg:min-h-[620px] lg:grid-cols-2">
//           {/* LEFT – FORM */}
//           <section className="flex items-center justify-center px-5 py-8 sm:px-10 sm:py-10 lg:px-16">
//             <div className="w-full max-w-[420px]">
//               <div className="mb-7 sm:mb-8">
//                 <h1 className="text-2xl font-semibold text-[#202020] sm:text-[28px]">
//                   Sign in to Collective ERP
//                 </h1>
//                 <p className="mt-2 text-sm text-[#777]">
//                   Access your interior and furniture modules
//                 </p>
//               </div>

//               <form onSubmit={handleLogin} className="space-y-5">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-2 block text-sm font-medium text-[#333]"
//                   >
//                     Email address
//                   </label>
//                   <input
//                     id="email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="admin@akrish.in"
//                     autoComplete="email"
//                     className="h-12 w-full rounded-lg border border-[#d9d9d9] bg-white px-4 text-sm text-[#222] outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                   />
//                 </div>

//                 <div>
//                   <div className="mb-2 flex items-center justify-between gap-2">
//                     <label
//                       htmlFor="password"
//                       className="block text-sm font-medium text-[#333]"
//                     >
//                       Password
//                     </label>
//                     <button
//                       type="button"
//                       onClick={() => router.push("/forgot-password")}
//                       className="text-xs font-medium text-[#176b5b] hover:underline"
//                     >
//                       Forgot password?
//                     </button>
//                   </div>
//                   <div className="relative">
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       placeholder="Enter your password"
//                       autoComplete="current-password"
//                       className="h-12 w-full rounded-lg border border-[#d9d9d9] bg-white px-4 pr-16 text-sm text-[#222] outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-[#176b5b] hover:underline"
//                     >
//                       {showPassword ? "Hide" : "Show"}
//                     </button>
//                   </div>
//                 </div>

//                 {error && (
//                   <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
//                     {error}
//                   </div>
//                 )}

//                 <div className="flex items-center gap-2">
//                   <input
//                     id="remember"
//                     type="checkbox"
//                     className="h-4 w-4 rounded border-gray-300 accent-[#176b5b]"
//                   />
//                   <label htmlFor="remember" className="text-sm text-[#666]">
//                     Remember me
//                   </label>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="h-12 w-full rounded-lg bg-[#176b5b] text-sm font-semibold text-white transition hover:bg-[#125849] disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   {loading ? "Signing in..." : "Sign In"}
//                 </button>
//               </form>

//               <p className="mt-8 text-center text-xs text-[#999]">
//                 Authorized users only
//               </p>
//             </div>
//           </section>

//           {/* RIGHT – BRANDING */}
//           <section className="relative hidden min-h-[620px] overflow-hidden lg:block">
//             <div
//               className="absolute inset-0 bg-cover bg-center"
//               style={{
//                 backgroundImage:
//                   "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85')",
//               }}
//             />
//             <div className="absolute inset-0 bg-black/20" />
//             <div className="relative z-10 flex h-full flex-col justify-between p-10">
//               <div className="flex justify-end">
//                 <div className="rounded-full bg-white/85 px-4 py-2 text-xs font-medium text-[#555] backdrop-blur">
//                   Interior & Furniture ERP
//                 </div>
//               </div>
//               <div className="max-w-[420px]">
//                 <div className="mb-4 inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#176b5b]">
//                   Collective ERP
//                 </div>
//                 <h2 className="text-4xl font-semibold leading-tight text-white drop-shadow-md">
//                   Transforming Spaces,
//                   <br />
//                   Creating Better Lives
//                 </h2>
//                 <p className="mt-5 max-w-[390px] text-sm leading-6 text-white/90">
//                   Manage your interior projects, clients, quotations, employees,
//                   payments and furniture operations from one connected ERP
//                   platform.
//                 </p>
//               </div>
//             </div>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// }


// "use client";

// import { FormEvent, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useAuth } from "@/core/auth/AuthContext";

// export default function LoginPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const { login, lastError } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");

//     if (!email.trim()) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!password.trim()) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const success = await login(email, password);

//       if (!success) {
//         throw new Error(lastError || "Invalid email or password.");
//       }

//       const redirect = searchParams.get("redirect");
//       router.push(redirect || "/");
//       router.refresh();
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Unable to sign in.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex min-h-[100dvh] flex-col bg-[#f7f6f1]">
//       <header className="sticky top-0 z-40 border-b border-[#e4e2da] bg-white/95 backdrop-blur">
//         <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
//           <div className="flex items-center gap-2.5 sm:gap-3">
//             <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#176b5b] sm:h-10 sm:w-10">
//               <span className="text-sm font-bold text-white sm:text-base">
//                 A
//               </span>
//             </div>
//             <div className="min-w-0">
//               <p className="truncate text-base font-bold leading-none text-[#17352f] sm:text-lg">
//                 Akrish
//               </p>
//               <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.16em] text-[#9a5b18] sm:text-[10px]">
//                 Furniture & Interior
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2 sm:gap-3">
//             <span className="hidden rounded-full border border-[#e4e2da] bg-[#fafaf8] px-3 py-1.5 text-xs font-medium text-[#555] sm:inline-flex">
//               Collective ERP
//             </span>
//             <span className="rounded-full bg-[#176b5b]/10 px-2.5 py-1 text-[10px] font-semibold text-[#176b5b] sm:px-3 sm:text-xs">
//               Staff Login
//             </span>
//           </div>
//         </div>
//       </header>

//       <main className="flex flex-1 items-center justify-center p-4 sm:p-6">
//         <div className="grid w-full max-w-[1100px] overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] lg:min-h-[620px] lg:grid-cols-2">
//           <section className="flex items-center justify-center px-5 py-8 sm:px-10 sm:py-10 lg:px-16">
//             <div className="w-full max-w-[420px]">
//               <div className="mb-7 sm:mb-8">
//                 <h1 className="text-2xl font-semibold text-[#202020] sm:text-[28px]">
//                   Sign in to Collective ERP
//                 </h1>
//                 <p className="mt-2 text-sm text-[#777]">
//                   Access your interior and furniture modules
//                 </p>
//               </div>

//               <form onSubmit={handleLogin} className="space-y-5">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-2 block text-sm font-medium text-[#333]"
//                   >
//                     Email address
//                   </label>
//                   <input
//                     id="email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="admin@akrish.in"
//                     autoComplete="email"
//                     className="h-12 w-full rounded-lg border border-[#d9d9d9] bg-white px-4 text-sm text-[#222] outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                   />
//                 </div>

//                 <div>
//                   <div className="mb-2 flex items-center justify-between gap-2">
//                     <label
//                       htmlFor="password"
//                       className="block text-sm font-medium text-[#333]"
//                     >
//                       Password
//                     </label>
//                     <button
//                       type="button"
//                       onClick={() => router.push("/forgot-password")}
//                       className="text-xs font-medium text-[#176b5b] hover:underline"
//                     >
//                       Forgot password?
//                     </button>
//                   </div>
//                   <div className="relative">
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       placeholder="Enter your password"
//                       autoComplete="current-password"
//                       className="h-12 w-full rounded-lg border border-[#d9d9d9] bg-white px-4 pr-16 text-sm text-[#222] outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-[#176b5b] hover:underline"
//                     >
//                       {showPassword ? "Hide" : "Show"}
//                     </button>
//                   </div>
//                 </div>

//                 {error && (
//                   <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
//                     {error}
//                   </div>
//                 )}

//                 <div className="flex items-center gap-2">
//                   <input
//                     id="remember"
//                     type="checkbox"
//                     className="h-4 w-4 rounded border-gray-300 accent-[#176b5b]"
//                   />
//                   <label htmlFor="remember" className="text-sm text-[#666]">
//                     Remember me
//                   </label>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="h-12 w-full rounded-lg bg-[#176b5b] text-sm font-semibold text-white transition hover:bg-[#125849] disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   {loading ? "Signing in..." : "Sign In"}
//                 </button>
//               </form>

//               <p className="mt-8 text-center text-xs text-[#999]">
//                 Authorized staff only · Customers use the website login
//               </p>
//             </div>
//           </section>

//           <section className="relative hidden min-h-[620px] overflow-hidden lg:block">
//             <div
//               className="absolute inset-0 bg-cover bg-center"
//               style={{
//                 backgroundImage:
//                   "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85')",
//               }}
//             />
//             <div className="absolute inset-0 bg-black/20" />
//             <div className="relative z-10 flex h-full flex-col justify-between p-10">
//               <div className="flex justify-end">
//                 <div className="rounded-full bg-white/85 px-4 py-2 text-xs font-medium text-[#555] backdrop-blur">
//                   Interior & Furniture ERP
//                 </div>
//               </div>
//               <div className="max-w-[420px]">
//                 <div className="mb-4 inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#176b5b]">
//                   Collective ERP
//                 </div>
//                 <h2 className="text-4xl font-semibold leading-tight text-white drop-shadow-md">
//                   Transforming Spaces,
//                   <br />
//                   Creating Better Lives
//                 </h2>
//                 <p className="mt-5 max-w-[390px] text-sm leading-6 text-white/90">
//                   Manage your interior projects, clients, quotations, employees,
//                   payments and furniture operations from one connected ERP
//                   platform.
//                 </p>
//               </div>
//             </div>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// }


// "use client";

// import { FormEvent, Suspense, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useAuth } from "@/core/auth/AuthContext";

// function LoginPageContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const { login } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");

//     if (!email.trim()) {
//       setError("Please enter your email address.");
//       return;
//     }
//     if (!password.trim()) {
//       setError("Please enter your password.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const success = await login(email, password);

//       if (!success) {
//         throw new Error("Invalid email or password.");
//       }

//       const redirect = searchParams.get("redirect");
//       if (redirect) {
//         router.push(redirect);
//       } else {
//         router.push("/");
//       }
//       router.refresh();
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Unable to sign in.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f6f1]">
//       {/* Keep your existing login UI here — form, header, image panel, etc. */}
//       {/* Example minimal form if you need a full drop-in: */}
//       <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-4 py-10">
//         <h1 className="text-2xl font-bold text-slate-900">Admin Login</h1>
//         <p className="mt-1 text-sm text-slate-500">Sign in to Collective ERP</p>

//         <form onSubmit={handleLogin} className="mt-8 space-y-4">
//           {error && (
//             <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
//               {error}
//             </div>
//           )}

//           <div>
//             <label className="mb-1.5 block text-sm font-medium text-slate-700">
//               Email
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/15"
//               placeholder="admin@akrish.in"
//               autoComplete="email"
//             />
//           </div>

//           <div>
//             <label className="mb-1.5 block text-sm font-medium text-slate-700">
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="h-11 w-full rounded-lg border border-slate-200 px-3 pr-16 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/15"
//                 placeholder="••••••••"
//                 autoComplete="current-password"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword((v) => !v)}
//                 className="absolute right-2 top-1/2 -translate-y-1/2 rounded px-2 py-1 text-xs font-semibold text-slate-500 hover:text-slate-800"
//               >
//                 {showPassword ? "Hide" : "Show"}
//               </button>
//             </div>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="flex h-11 w-full items-center justify-center rounded-lg bg-[#176b5b] text-sm font-semibold text-white hover:bg-[#125548] disabled:opacity-60"
//           >
//             {loading ? "Signing in..." : "Sign in"}
//           </button>
//         </form>
//       </div>
//     </main>
//   );
// }

// export default function LoginPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex min-h-screen items-center justify-center bg-[#f7f6f1]">
//           <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//         </div>
//       }
//     >
//       <LoginPageContent />
//     </Suspense>
//   );
// }


"use client";

import { FormEvent, Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/core/auth/AuthContext";

function LoginPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login, lastError } = useAuth() as {
    login: (email: string, password: string) => Promise<boolean>;
    lastError?: string | null;
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);
    try {
      const success = await login(email.trim(), password);

      if (!success) {
        throw new Error(lastError || "Invalid email or password.");
      }

      const redirect = searchParams.get("redirect");
      router.push(redirect || "/");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to sign in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[100dvh] flex-col bg-[#f7f6f1]">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[#e4e2da] bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#176b5b] sm:h-10 sm:w-10">
              <span className="text-sm font-bold text-white sm:text-base">A</span>
            </div>
            <div className="min-w-0">
              <p className="truncate text-base font-bold leading-none text-[#17352f] sm:text-lg">
                Akrish
              </p>
              <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.16em] text-[#9a5b18] sm:text-[10px]">
                Furniture &amp; Interior
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden rounded-full border border-[#e4e2da] bg-[#fafaf8] px-3 py-1.5 text-xs font-medium text-[#555] sm:inline-flex">
              Collective ERP
            </span>
            <span className="rounded-full bg-[#176b5b]/10 px-2.5 py-1 text-[10px] font-semibold text-[#176b5b] sm:px-3 sm:text-xs">
              Staff Login
            </span>
          </div>
        </div>
      </header>

      {/* Body */}
      <main className="flex flex-1 items-center justify-center p-4 sm:p-6">
        <div className="grid w-full max-w-[1100px] overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] lg:min-h-[620px] lg:grid-cols-2">
          {/* LEFT – FORM */}
          <section className="flex items-center justify-center px-5 py-8 sm:px-10 sm:py-10 lg:px-16">
            <div className="w-full max-w-[420px]">
              <div className="mb-7 sm:mb-8">
                <h1 className="text-2xl font-semibold text-[#202020] sm:text-[28px]">
                  Sign in to Collective ERP
                </h1>
                <p className="mt-2 text-sm text-[#777]">
                  Access your interior and furniture modules
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-[#333]"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@akrish.in"
                    autoComplete="email"
                    className="h-12 w-full rounded-lg border border-[#d9d9d9] bg-white px-4 text-sm text-[#222] outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-[#333]"
                    >
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => router.push("/forgot-password")}
                      className="text-xs font-medium text-[#176b5b] hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      className="h-12 w-full rounded-lg border border-[#d9d9d9] bg-white px-4 pr-16 text-sm text-[#222] outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-[#176b5b] hover:underline"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {error}
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 accent-[#176b5b]"
                  />
                  <label htmlFor="remember" className="text-sm text-[#666]">
                    Remember me
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="h-12 w-full rounded-lg bg-[#176b5b] text-sm font-semibold text-white transition hover:bg-[#125849] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Signing in..." : "Sign In"}
                </button>
              </form>

              <p className="mt-8 text-center text-xs text-[#999]">
                Authorized staff only · Customers use the website login
              </p>
            </div>
          </section>

          {/* RIGHT – BRANDING */}
          <section className="relative hidden min-h-[620px] overflow-hidden lg:block">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85')",
              }}
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 flex h-full flex-col justify-between p-10">
              <div className="flex justify-end">
                <div className="rounded-full bg-white/85 px-4 py-2 text-xs font-medium text-[#555] backdrop-blur">
                  Interior &amp; Furniture ERP
                </div>
              </div>
              <div className="max-w-[420px]">
                <div className="mb-4 inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#176b5b]">
                  Collective ERP
                </div>
                <h2 className="text-4xl font-semibold leading-tight text-white drop-shadow-md">
                  Transforming Spaces,
                  <br />
                  Creating Better Lives
                </h2>
                <p className="mt-5 max-w-[390px] text-sm leading-6 text-white/90">
                  Manage your interior projects, clients, quotations, employees,
                  payments and furniture operations from one connected ERP
                  platform.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[100dvh] items-center justify-center bg-[#f7f6f1]">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
        </div>
      }
    >
      <LoginPageContent />
    </Suspense>
  );
}
