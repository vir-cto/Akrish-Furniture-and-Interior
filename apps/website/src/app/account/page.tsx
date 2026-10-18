// "use client";

// import Link from "next/link";
// import { Package, User, Heart, LogOut } from "lucide-react";
// import { useEffect, useState } from "react";

// export default function AccountPage() {
//   const [user, setUser] = useState<{ name?: string; email?: string } | null>(null);

//   useEffect(() => {
//     try {
//       const stored = localStorage.getItem("user");
//       if (stored) setUser(JSON.parse(stored));
//     } catch {
//       setUser(null);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     window.location.href = "/";
//   };

//   if (!user) {
//     return (
//       <main className="min-h-screen bg-[#f7f9f8] flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-slate-600">Please sign in to view your account.</p>
//           <Link
//             href="/sign-in"
//             className="mt-4 inline-block rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white"
//           >
//             Sign In
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
//         <h1 className="text-3xl font-bold text-slate-900">My Account</h1>
//         <p className="mt-2 text-sm text-slate-500">
//           Welcome back, {user.name || user.email}
//         </p>

//         <div className="mt-8 grid gap-4 sm:grid-cols-2">
//           <Link
//             href="/account/orders"
//             className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-md"
//           >
//             <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f5ef] text-[#176b5b]">
//               <Package size={20} />
//             </div>
//             <div>
//               <p className="font-semibold text-slate-900">My Orders</p>
//               <p className="text-xs text-slate-500">Track your purchases</p>
//             </div>
//           </Link>

//           <Link
//             href="/wishlist"
//             className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-md"
//           >
//             <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f5ef] text-[#176b5b]">
//               <Heart size={20} />
//             </div>
//             <div>
//               <p className="font-semibold text-slate-900">Wishlist</p>
//               <p className="text-xs text-slate-500">Saved items</p>
//             </div>
//           </Link>

//           <Link
//             href="/account/profile"
//             className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-md"
//           >
//             <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f5ef] text-[#176b5b]">
//               <User size={20} />
//             </div>
//             <div>
//               <p className="font-semibold text-slate-900">Profile</p>
//               <p className="text-xs text-slate-500">Manage your details</p>
//             </div>
//           </Link>

//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left hover:shadow-md"
//           >
//             <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
//               <LogOut size={20} />
//             </div>
//             <div>
//               <p className="font-semibold text-slate-900">Logout</p>
//               <p className="text-xs text-slate-500">Sign out of your account</p>
//             </div>
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }

// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function AccountPage() {
//   const router = useRouter();

//   useEffect(() => {
//     // Redirect /account → /account/profile (Flipkart style)
//     router.replace("/account/profile");
//   }, [router]);

//   return null;
// }

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/account/profile");
  }, [router]);

  return null;
}
