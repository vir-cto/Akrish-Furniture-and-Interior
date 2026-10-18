// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   ChevronRight,
//   LogOut,
//   Package,
//   Settings,
//   ShoppingBag,
//   User,
// } from "lucide-react";

// const accountNavigation = [
//   {
//     label: "Profile",
//     href: "/account/profile",
//     icon: User,
//   },
//   {
//     label: "Orders",
//     href: "/account/orders",
//     icon: ShoppingBag,
//   },
// ];

// export default function AccountLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();

//   return (
//     <div className="min-h-screen bg-[#f7f9f8]">
//       {/* Account header */}
//       <header className="border-b border-slate-200 bg-white">
//         <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
//           <Link
//             href="/"
//             className="flex items-center gap-3"
//           >
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-xs font-bold text-white">
//               VIP
//             </div>

//             <div>
//               <p className="text-sm font-bold text-slate-900">
//                 VIP Interior
//               </p>

//               <p className="text-[11px] text-slate-500">
//                 Interior & Furniture
//               </p>
//             </div>
//           </Link>

//           <Link
//             href="/"
//             className="hidden text-sm font-medium text-slate-600 transition hover:text-slate-900 sm:block"
//           >
//             Back to store
//           </Link>
//         </div>
//       </header>

//       {/* Breadcrumb */}
//       <div className="border-b border-slate-100 bg-white">
//         <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs text-slate-500 sm:px-6 lg:px-8">
//           <Link
//             href="/"
//             className="transition hover:text-slate-900"
//           >
//             Home
//           </Link>

//           <ChevronRight size={13} />

//           <span className="font-medium text-slate-800">
//             My Account
//           </span>
//         </div>
//       </div>

//       <div className="mx-auto flex max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:px-8">
//         {/* Sidebar */}
//         <aside className="hidden w-60 shrink-0 lg:block">
//           <div className="sticky top-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
//             {/* Account heading */}
//             <div className="border-b border-slate-100 p-5">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
//                   VC
//                 </div>

//                 <div className="min-w-0">
//                   <p className="truncate text-sm font-bold text-slate-900">
//                     My Account
//                   </p>

//                   <p className="truncate text-xs text-slate-500">
//                     Manage your account
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Navigation */}
//             <nav className="p-2">
//               {accountNavigation.map((item) => {
//                 const Icon = item.icon;

//                 const isActive =
//                   pathname === item.href ||
//                   pathname.startsWith(`${item.href}/`);

//                 return (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     className={`mb-1 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
//                       isActive
//                         ? "bg-slate-900 font-semibold text-white"
//                         : "font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                     }`}
//                   >
//                     <Icon size={17} />
//                     <span>{item.label}</span>
//                   </Link>
//                 );
//               })}
//             </nav>

//             {/* Additional links */}
//             <div className="border-t border-slate-100 p-2">
//               <Link
//                 href="/products"
//                 className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
//               >
//                 <Package size={17} />
//                 <span>Shop products</span>
//               </Link>

//               <button
//                 type="button"
//                 className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
//               >
//                 <Settings size={17} />
//                 <span>Settings</span>
//               </button>

//               <button
//                 type="button"
//                 className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
//               >
//                 <LogOut size={17} />
//                 <span>Sign out</span>
//               </button>
//             </div>
//           </div>
//         </aside>

//         {/* Mobile navigation */}
//         <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white px-2 py-2 lg:hidden">
//           <nav className="mx-auto flex max-w-lg items-center justify-around">
//             {accountNavigation.map((item) => {
//               const Icon = item.icon;

//               const isActive =
//                 pathname === item.href ||
//                 pathname.startsWith(`${item.href}/`);

//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className={`flex min-w-24 flex-col items-center gap-1 rounded-lg px-3 py-2 text-[11px] font-semibold transition ${
//                     isActive
//                       ? "bg-slate-900 text-white"
//                       : "text-slate-500 hover:bg-slate-50"
//                   }`}
//                 >
//                   <Icon size={17} />
//                   {item.label}
//                 </Link>
//               );
//             })}
//           </nav>
//         </div>

//         {/* Page content */}
//         <section className="min-w-0 flex-1 pb-20 lg:pb-0">
//           {children}
//         </section>
//       </div>
//     </div>
//   );
// }

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   ChevronRight,
//   LogOut,
//   Settings,
//   ShoppingBag,
//   User,
// } from "lucide-react";

// const accountNavigation = [
//   {
//     label: "Profile",
//     href: "/account/profile",
//     icon: User,
//   },
//   {
//     label: "Orders",
//     href: "/account/orders",
//     icon: ShoppingBag,
//   },
// ];

// export default function AccountLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();

//   return (
//     <div className="min-h-screen bg-[#f7f9f8]">
//       {/* Account header */}
//       <header className="border-b border-slate-200 bg-white">
//         <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
//           <Link href="/" className="flex items-center gap-3">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-xs font-bold text-white">
//               A
//             </div>

//             <div>
//               <p className="text-sm font-bold text-slate-900">Akrish</p>
//               <p className="text-[11px] text-slate-500">
//                 Furniture & Interior
//               </p>
//             </div>
//           </Link>

//           <Link
//             href="/"
//             className="hidden text-sm font-medium text-slate-600 transition hover:text-slate-900 sm:block"
//           >
//             Back to store
//           </Link>
//         </div>
//       </header>

//       {/* Breadcrumb */}
//       <div className="border-b border-slate-100 bg-white">
//         <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs text-slate-500 sm:px-6 lg:px-8">
//           <Link href="/" className="transition hover:text-slate-900">
//             Home
//           </Link>
//           <ChevronRight size={13} />
//           <span className="font-medium text-slate-800">My Account</span>
//         </div>
//       </div>

//       <div className="mx-auto flex max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:px-8">
//         {/* Sidebar */}
//         <aside className="hidden w-60 shrink-0 lg:block">
//           <div className="sticky top-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
//             {/* Account heading */}
//             <div className="border-b border-slate-100 p-5">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
//                   A
//                 </div>
//                 <div className="min-w-0">
//                   <p className="truncate text-sm font-bold text-slate-900">
//                     My Account
//                   </p>
//                   <p className="truncate text-xs text-slate-500">
//                     Manage your account
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Navigation */}
//             <nav className="p-2">
//               {accountNavigation.map((item) => {
//                 const Icon = item.icon;
//                 const isActive =
//                   pathname === item.href ||
//                   pathname.startsWith(`${item.href}/`);

//                 return (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     className={`mb-1 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
//                       isActive
//                         ? "bg-slate-900 font-semibold text-white"
//                         : "font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                     }`}
//                   >
//                     <Icon size={17} />
//                     <span>{item.label}</span>
//                   </Link>
//                 );
//               })}
//             </nav>

//             {/* Additional links - Shop products removed */}
//             <div className="border-t border-slate-100 p-2">
//               <button
//                 type="button"
//                 className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
//               >
//                 <Settings size={17} />
//                 <span>Settings</span>
//               </button>

//               <button
//                 type="button"
//                 className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
//               >
//                 <LogOut size={17} />
//                 <span>Sign out</span>
//               </button>
//             </div>
//           </div>
//         </aside>

//         {/* Mobile navigation */}
//         <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white px-2 py-2 lg:hidden">
//           <nav className="mx-auto flex max-w-lg items-center justify-around">
//             {accountNavigation.map((item) => {
//               const Icon = item.icon;
//               const isActive =
//                 pathname === item.href ||
//                 pathname.startsWith(`${item.href}/`);

//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className={`flex min-w-24 flex-col items-center gap-1 rounded-lg px-3 py-2 text-[11px] font-semibold transition ${
//                     isActive
//                       ? "bg-slate-900 text-white"
//                       : "text-slate-500 hover:bg-slate-50"
//                   }`}
//                 >
//                   <Icon size={17} />
//                   {item.label}
//                 </Link>
//               );
//             })}
//           </nav>
//         </div>

//         {/* Page content */}
//         <section className="min-w-0 flex-1 pb-20 lg:pb-0">
//           {children}
//         </section>
//       </div>
//     </div>
//   );
// }

// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import {
//   ChevronRight,
//   LogOut,
//   MapPin,
//   Package,
//   User,
//   Heart,
// } from "lucide-react";

// export default function AccountLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();
//   const router = useRouter();
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
//     localStorage.removeItem("authToken");
//     window.location.href = "/";
//   };

//   const displayName = user?.name || "Customer";
//   const initial = displayName.charAt(0).toUpperCase();

//   return (
//     <div className="min-h-screen bg-[#f1f3f6]">
//       {/* Top bar */}
//       {/* <header className="border-b border-slate-200 bg-white">
//         <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
//           <Link href="/" className="flex items-center gap-2.5">
//             <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#176b5b] text-sm font-bold text-white">
//               A
//             </div>
//             <div>
//               <p className="text-sm font-bold text-slate-900">Akrish</p>
//               <p className="text-[10px] text-slate-500">Furniture & Interior</p>
//             </div>
//           </Link>

//           <Link
//             href="/"
//             className="text-sm font-medium text-slate-600 hover:text-slate-900"
//           >
//             Back to store
//           </Link>
//         </div>
//       </header> */}

//       {/* Top bar */}
//       {/* <header className="border-b border-slate-200 bg-white">
//         <div className="mx-auto flex h-14 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
//           <Link href="/" className="flex items-center gap-2.5">
//             <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#176b5b] text-sm font-bold text-white">
//               A
//             </div>
//             <div>
//               <p className="text-sm font-bold text-slate-900">Akrish</p>
//               <p className="text-[10px] text-slate-500">Furniture & Interior</p>
//             </div>
//           </Link>
//         </div>
//       </header> */}

//       {/* Breadcrumb
//       <div className="border-b border-slate-100 bg-white">
//         <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-2.5 text-xs text-slate-500 sm:px-6 lg:px-8">
//           <Link href="/" className="hover:text-slate-900">
//             Home
//           </Link>
//           <ChevronRight size={12} />
//           <span className="font-medium text-slate-800">My Account</span>
//         </div>
//       </div> */}

//         {/* Breadcrumb */}
//         <div className="border-b border-slate-100 bg-white">
//           <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 text-xs text-slate-500 sm:px-6 lg:px-8">
//             <div className="flex items-center gap-2">
//               <Link href="/" className="hover:text-slate-900">
//                 Home
//               </Link>
//               <ChevronRight size={12} />
//               <span className="font-medium text-slate-800">My Account</span>
//             </div>

//             <Link
//               href="/"
//               className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
//             >
//               Back to store
//             </Link>
//           </div>
//         </div>

//       <div className="mx-auto flex max-w-7xl gap-4 px-4 py-6 sm:px-6 lg:px-8">
//         {/* Sidebar - Flipkart style */}
//         <aside className="hidden w-64 shrink-0 lg:block">
//           <div className="space-y-3">
//             {/* User card */}
//             <div className="rounded-lg border border-slate-200 bg-white p-4">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#176b5b] text-lg font-bold text-white">
//                   {initial}
//                 </div>
//                 <div className="min-w-0">
//                   <p className="text-xs text-slate-500">Hello,</p>
//                   <p className="truncate text-sm font-bold text-slate-900">
//                     {displayName}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Navigation card */}
//             <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
//               {/* MY ORDERS */}
//               <Link
//                 href="/account/orders"
//                 className={`flex items-center justify-between border-b border-slate-100 px-4 py-3.5 transition hover:bg-slate-50 ${
//                   pathname.startsWith("/account/orders")
//                     ? "bg-slate-50"
//                     : ""
//                 }`}
//               >
//                 <div className="flex items-center gap-3">
//                   <Package size={18} className="text-[#176b5b]" />
//                   <span className="text-sm font-semibold uppercase tracking-wide text-slate-700">
//                     My Orders
//                   </span>
//                 </div>
//                 <ChevronRight size={16} className="text-slate-400" />
//               </Link>

//               {/* ACCOUNT SETTINGS */}
//               <div className="border-b border-slate-100">
//                 <div className="flex items-center gap-3 px-4 py-3">
//                   <User size={18} className="text-[#176b5b]" />
//                   <span className="text-sm font-semibold uppercase tracking-wide text-slate-700">
//                     Account Settings
//                   </span>
//                 </div>

//                 <div className="pb-2">
//                   <Link
//                     href="/account/profile"
//                     className={`block px-4 py-2.5 pl-11 text-sm transition ${
//                       pathname === "/account/profile" || pathname === "/account"
//                         ? "bg-[#e8f5ef] font-medium text-[#176b5b]"
//                         : "text-slate-600 hover:bg-slate-50"
//                     }`}
//                   >
//                     Profile Information
//                   </Link>

//                   <Link
//                     href="/account/addresses"
//                     className={`block px-4 py-2.5 pl-11 text-sm transition ${
//                       pathname.startsWith("/account/addresses")
//                         ? "bg-[#e8f5ef] font-medium text-[#176b5b]"
//                         : "text-slate-600 hover:bg-slate-50"
//                     }`}
//                   >
//                     Manage Addresses
//                   </Link>
//                 </div>
//               </div>

//               {/* MY STUFF */}
//               <div className="border-b border-slate-100">
//                 <div className="flex items-center gap-3 px-4 py-3">
//                   <Heart size={18} className="text-[#176b5b]" />
//                   <span className="text-sm font-semibold uppercase tracking-wide text-slate-700">
//                     My Stuff
//                   </span>
//                 </div>
//                 <div className="pb-2">
//                   <Link
//                     href="/wishlist"
//                     className="block px-4 py-2.5 pl-11 text-sm text-slate-600 transition hover:bg-slate-50"
//                   >
//                     Wishlist
//                   </Link>
//                 </div>
//               </div>

//               {/* Logout */}
//               <button
//                 type="button"
//                 onClick={handleLogout}
//                 className="flex w-full items-center gap-3 px-4 py-3.5 text-left text-sm font-medium text-slate-600 transition hover:bg-red-50 hover:text-red-600"
//               >
//                 <LogOut size={18} />
//                 Logout
//               </button>
//             </div>
//           </div>
//         </aside>

//         {/* Mobile bottom nav */}
//         <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white lg:hidden">
//           <nav className="mx-auto flex max-w-lg items-center justify-around py-2">
//             <Link
//               href="/account/profile"
//               className={`flex flex-col items-center gap-1 px-3 py-1.5 text-[11px] font-semibold ${
//                 pathname.includes("profile") || pathname === "/account"
//                   ? "text-[#176b5b]"
//                   : "text-slate-500"
//               }`}
//             >
//               <User size={18} />
//               Profile
//             </Link>
//             <Link
//               href="/account/orders"
//               className={`flex flex-col items-center gap-1 px-3 py-1.5 text-[11px] font-semibold ${
//                 pathname.includes("orders") ? "text-[#176b5b]" : "text-slate-500"
//               }`}
//             >
//               <Package size={18} />
//               Orders
//             </Link>
//             <Link
//               href="/wishlist"
//               className="flex flex-col items-center gap-1 px-3 py-1.5 text-[11px] font-semibold text-slate-500"
//             >
//               <Heart size={18} />
//               Wishlist
//             </Link>
//             <button
//               type="button"
//               onClick={handleLogout}
//               className="flex flex-col items-center gap-1 px-3 py-1.5 text-[11px] font-semibold text-slate-500"
//             >
//               <LogOut size={18} />
//               Logout
//             </button>
//           </nav>
//         </div>

//         {/* Main content */}
//         <section className="min-w-0 flex-1 pb-20 lg:pb-0">{children}</section>
//       </div>
//     </div>
//   );
// }

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import {
//   ChevronRight,
//   LogOut,
//   Package,
//   User,
//   Heart,
// } from "lucide-react";

// export default function AccountLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();
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
//     localStorage.removeItem("authToken");
//     window.location.href = "/";
//   };

//   const isLoggedIn = Boolean(user);
//   const displayName = user?.name || "Guest";
//   const initial = displayName.charAt(0).toUpperCase();

//   return (
//     <div className="min-h-screen bg-[#f1f3f6]">
//       {/* Breadcrumb */}
//       <div className="border-b border-slate-100 bg-white">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 text-xs text-slate-500 sm:px-6 lg:px-8">
//           <div className="flex items-center gap-2">
//             <Link href="/" className="hover:text-slate-900">
//               Home
//             </Link>
//             <ChevronRight size={12} />
//             <span className="font-medium text-slate-800">My Account</span>
//           </div>

//           <Link
//             href="/"
//             className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
//           >
//             Back to store
//           </Link>
//         </div>
//       </div>

//       <div className="mx-auto flex max-w-7xl gap-4 px-4 py-6 sm:px-6 lg:px-8">
//         {/* Sidebar */}
//         <aside className="hidden w-64 shrink-0 lg:block">
//           <div className="space-y-3">
//             {/* User card */}
//             <div className="rounded-lg border border-slate-200 bg-white p-4">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#176b5b] text-lg font-bold text-white">
//                   {initial}
//                 </div>
//                 <div className="min-w-0">
//                   <p className="text-xs text-slate-500">Hello,</p>
//                   <p className="truncate text-sm font-bold text-slate-900">
//                     {displayName}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Navigation */}
//             <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
//               <Link
//                 href="/account/orders"
//                 className={`flex items-center justify-between border-b border-slate-100 px-4 py-3.5 transition hover:bg-slate-50 ${
//                   pathname.startsWith("/account/orders") ? "bg-slate-50" : ""
//                 }`}
//               >
//                 <div className="flex items-center gap-3">
//                   <Package size={18} className="text-[#176b5b]" />
//                   <span className="text-sm font-semibold uppercase tracking-wide text-slate-700">
//                     My Orders
//                   </span>
//                 </div>
//                 <ChevronRight size={16} className="text-slate-400" />
//               </Link>

//               <div className="border-b border-slate-100">
//                 <div className="flex items-center gap-3 px-4 py-3">
//                   <User size={18} className="text-[#176b5b]" />
//                   <span className="text-sm font-semibold uppercase tracking-wide text-slate-700">
//                     Account Settings
//                   </span>
//                 </div>

//                 <div className="pb-2">
//                   <Link
//                     href="/account/profile"
//                     className={`block px-4 py-2.5 pl-11 text-sm transition ${
//                       pathname === "/account/profile" || pathname === "/account"
//                         ? "bg-[#e8f5ef] font-medium text-[#176b5b]"
//                         : "text-slate-600 hover:bg-slate-50"
//                     }`}
//                   >
//                     Profile Information
//                   </Link>

//                   <Link
//                     href="/account/addresses"
//                     className={`block px-4 py-2.5 pl-11 text-sm transition ${
//                       pathname.startsWith("/account/addresses")
//                         ? "bg-[#e8f5ef] font-medium text-[#176b5b]"
//                         : "text-slate-600 hover:bg-slate-50"
//                     }`}
//                   >
//                     Manage Addresses
//                   </Link>
//                 </div>
//               </div>

//               <div className="border-b border-slate-100">
//                 <div className="flex items-center gap-3 px-4 py-3">
//                   <Heart size={18} className="text-[#176b5b]" />
//                   <span className="text-sm font-semibold uppercase tracking-wide text-slate-700">
//                     My Stuff
//                   </span>
//                 </div>
//                 <div className="pb-2">
//                   <Link
//                     href="/wishlist"
//                     className="block px-4 py-2.5 pl-11 text-sm text-slate-600 transition hover:bg-slate-50"
//                   >
//                     Wishlist
//                   </Link>
//                 </div>
//               </div>

//               {isLoggedIn ? (
//                 <button
//                   type="button"
//                   onClick={handleLogout}
//                   className="flex w-full items-center gap-3 px-4 py-3.5 text-left text-sm font-medium text-slate-600 transition hover:bg-red-50 hover:text-red-600"
//                 >
//                   <LogOut size={18} />
//                   Logout
//                 </button>
//               ) : (
//                 <Link
//                   href="/sign-in"
//                   className="flex w-full items-center gap-3 px-4 py-3.5 text-sm font-medium text-[#176b5b] transition hover:bg-[#e8f5ef]"
//                 >
//                   <User size={18} />
//                   Sign In
//                 </Link>
//               )}
//             </div>
//           </div>
//         </aside>

//         {/* Mobile bottom nav */}
//         <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white lg:hidden">
//           <nav className="mx-auto flex max-w-lg items-center justify-around py-2">
//             <Link
//               href="/account/profile"
//               className={`flex flex-col items-center gap-1 px-3 py-1.5 text-[11px] font-semibold ${
//                 pathname.includes("profile") || pathname === "/account"
//                   ? "text-[#176b5b]"
//                   : "text-slate-500"
//               }`}
//             >
//               <User size={18} />
//               Profile
//             </Link>
//             <Link
//               href="/account/orders"
//               className={`flex flex-col items-center gap-1 px-3 py-1.5 text-[11px] font-semibold ${
//                 pathname.includes("orders") ? "text-[#176b5b]" : "text-slate-500"
//               }`}
//             >
//               <Package size={18} />
//               Orders
//             </Link>
//             <Link
//               href="/wishlist"
//               className="flex flex-col items-center gap-1 px-3 py-1.5 text-[11px] font-semibold text-slate-500"
//             >
//               <Heart size={18} />
//               Wishlist
//             </Link>
//             {isLoggedIn ? (
//               <button
//                 type="button"
//                 onClick={handleLogout}
//                 className="flex flex-col items-center gap-1 px-3 py-1.5 text-[11px] font-semibold text-slate-500"
//               >
//                 <LogOut size={18} />
//                 Logout
//               </button>
//             ) : (
//               <Link
//                 href="/sign-in"
//                 className="flex flex-col items-center gap-1 px-3 py-1.5 text-[11px] font-semibold text-[#176b5b]"
//               >
//                 <User size={18} />
//                 Sign In
//               </Link>
//             )}
//           </nav>
//         </div>

//         {/* Main content */}
//         <section className="min-w-0 flex-1 pb-20 lg:pb-0">{children}</section>
//       </div>
//     </div>
//   );
// }


// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import {
//   ChevronRight,
//   LogOut,
//   Package,
//   User,
//   Heart,
// } from "lucide-react";

// export default function AccountLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();
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
//     localStorage.removeItem("authToken");
//     window.location.href = "/";
//   };

//   const isLoggedIn = Boolean(user);
//   const displayName = user?.name || "Guest";
//   const initial = displayName.charAt(0).toUpperCase();

//   return (
//     <div className="min-h-screen bg-[#f1f3f6]">
//       {/* Breadcrumb */}
//       <div className="border-b border-slate-100 bg-white">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 text-xs text-slate-500 sm:px-6 lg:px-8">
//           <div className="flex items-center gap-2">
//             <Link href="/" className="hover:text-slate-900">
//               Home
//             </Link>
//             <ChevronRight size={12} />
//             <span className="font-medium text-slate-800">My Account</span>
//           </div>

//           <Link
//             href="/"
//             className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
//           >
//             Back to store
//           </Link>
//         </div>
//       </div>

//       <div className="mx-auto flex max-w-7xl gap-4 px-4 py-6 sm:px-6 lg:px-8">
//         {/* Sidebar */}
//         <aside className="hidden w-64 shrink-0 lg:block">
//           <div className="space-y-3">
//             {/* User card */}
//             <div className="rounded-lg border border-slate-200 bg-white p-4">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#176b5b] text-lg font-bold text-white">
//                   {initial}
//                 </div>
//                 <div className="min-w-0">
//                   <p className="text-xs text-slate-500">Hello,</p>
//                   <p className="truncate text-sm font-bold text-slate-900">
//                     {displayName}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Navigation */}
//             <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
//               {/* My Orders – only when signed in */}
//               {isLoggedIn && (
//                 <Link
//                   href="/account/orders"
//                   className={`flex items-center justify-between border-b border-slate-100 px-4 py-3.5 transition hover:bg-slate-50 ${
//                     pathname.startsWith("/account/orders") ? "bg-slate-50" : ""
//                   }`}
//                 >
//                   <div className="flex items-center gap-3">
//                     <Package size={18} className="text-[#176b5b]" />
//                     <span className="text-sm font-semibold uppercase tracking-wide text-slate-700">
//                       My Orders
//                     </span>
//                   </div>
//                   <ChevronRight size={16} className="text-slate-400" />
//                 </Link>
//               )}

//               {/* Account Settings */}
//               <div className="border-b border-slate-100">
//                 <div className="flex items-center gap-3 px-4 py-3">
//                   <User size={18} className="text-[#176b5b]" />
//                   <span className="text-sm font-semibold uppercase tracking-wide text-slate-700">
//                     Account Settings
//                   </span>
//                 </div>

//                 <div className="pb-2">
//                   <Link
//                     href="/account/profile"
//                     className={`block px-4 py-2.5 pl-11 text-sm transition ${
//                       pathname === "/account/profile" || pathname === "/account"
//                         ? "bg-[#e8f5ef] font-medium text-[#176b5b]"
//                         : "text-slate-600 hover:bg-slate-50"
//                     }`}
//                   >
//                     Profile Information
//                   </Link>

//                   {/* Manage Addresses – only when signed in */}
//                   {isLoggedIn && (
//                     <Link
//                       href="/account/addresses"
//                       className={`block px-4 py-2.5 pl-11 text-sm transition ${
//                         pathname.startsWith("/account/addresses")
//                           ? "bg-[#e8f5ef] font-medium text-[#176b5b]"
//                           : "text-slate-600 hover:bg-slate-50"
//                       }`}
//                     >
//                       Manage Addresses
//                     </Link>
//                   )}
//                 </div>
//               </div>

//               {/* My Stuff – only when signed in */}
//               {isLoggedIn && (
//                 <div className="border-b border-slate-100">
//                   <div className="flex items-center gap-3 px-4 py-3">
//                     <Heart size={18} className="text-[#176b5b]" />
//                     <span className="text-sm font-semibold uppercase tracking-wide text-slate-700">
//                       My Stuff
//                     </span>
//                   </div>
//                   <div className="pb-2">
//                     <Link
//                       href="/wishlist"
//                       className="block px-4 py-2.5 pl-11 text-sm text-slate-600 transition hover:bg-slate-50"
//                     >
//                       Wishlist
//                     </Link>
//                   </div>
//                 </div>
//               )}

//               {/* Sign In OR Logout */}
//               {isLoggedIn ? (
//                 <button
//                   type="button"
//                   onClick={handleLogout}
//                   className="flex w-full items-center gap-3 px-4 py-3.5 text-left text-sm font-medium text-slate-600 transition hover:bg-red-50 hover:text-red-600"
//                 >
//                   <LogOut size={18} />
//                   Logout
//                 </button>
//               ) : (
//                 <Link
//                   href="/sign-in"
//                   className="flex w-full items-center gap-3 px-4 py-3.5 text-sm font-medium text-[#176b5b] transition hover:bg-[#e8f5ef]"
//                 >
//                   <User size={18} />
//                   Sign In
//                 </Link>
//               )}
//             </div>
//           </div>
//         </aside>

//         {/* Mobile bottom nav */}
//         <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white lg:hidden">
//           <nav className="mx-auto flex max-w-lg items-center justify-around py-2">
//             <Link
//               href="/account/profile"
//               className={`flex flex-col items-center gap-1 px-3 py-1.5 text-[11px] font-semibold ${
//                 pathname.includes("profile") || pathname === "/account"
//                   ? "text-[#176b5b]"
//                   : "text-slate-500"
//               }`}
//             >
//               <User size={18} />
//               Profile
//             </Link>

//             {isLoggedIn && (
//               <Link
//                 href="/account/orders"
//                 className={`flex flex-col items-center gap-1 px-3 py-1.5 text-[11px] font-semibold ${
//                   pathname.includes("orders")
//                     ? "text-[#176b5b]"
//                     : "text-slate-500"
//                 }`}
//               >
//                 <Package size={18} />
//                 Orders
//               </Link>
//             )}

//             {isLoggedIn && (
//               <Link
//                 href="/wishlist"
//                 className="flex flex-col items-center gap-1 px-3 py-1.5 text-[11px] font-semibold text-slate-500"
//               >
//                 <Heart size={18} />
//                 Wishlist
//               </Link>
//             )}

//             {isLoggedIn ? (
//               <button
//                 type="button"
//                 onClick={handleLogout}
//                 className="flex flex-col items-center gap-1 px-3 py-1.5 text-[11px] font-semibold text-slate-500"
//               >
//                 <LogOut size={18} />
//                 Logout
//               </button>
//             ) : (
//               <Link
//                 href="/sign-in"
//                 className="flex flex-col items-center gap-1 px-3 py-1.5 text-[11px] font-semibold text-[#176b5b]"
//               >
//                 <User size={18} />
//                 Sign In
//               </Link>
//             )}
//           </nav>
//         </div>

//         <section className="min-w-0 flex-1 pb-20 lg:pb-0">{children}</section>
//       </div>
//     </div>
//   );
// }

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import {
//   ChevronRight,
//   LogOut,
//   Package,
//   User,
//   Heart,
// } from "lucide-react";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";

// export default function AccountLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();
//   const [user, setUser] = useState<{ name?: string; email?: string } | null>(
//     null
//   );
//   const [authReady, setAuthReady] = useState(false);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
//       if (!firebaseUser) {
//         setUser(null);
//         setAuthReady(true);
//         return;
//       }

//       let name = firebaseUser.displayName || "";
//       let email = firebaseUser.email || "";

//       try {
//         const snap = await getDoc(
//           doc(db, "furniture_customers", firebaseUser.uid)
//         );
//         if (snap.exists()) {
//           const data = snap.data();
//           if (data.name) name = String(data.name);
//           if (data.email) email = String(data.email);
//         }
//       } catch {
//         // ignore
//       }

//       setUser({ name, email });
//       setAuthReady(true);
//     });

//     return () => unsub();
//   }, []);

//   const handleLogout = async () => {
//     await signOut(auth);
//     window.location.href = "/";
//   };

//   const isLoggedIn = Boolean(user);
//   const displayName = user?.name || "Guest";
//   const initial = displayName.charAt(0).toUpperCase();

//   return (
//     <div className="min-h-screen bg-[#f1f3f6]">
//       <div className="border-b border-slate-100 bg-white">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 text-xs text-slate-500 sm:px-6 lg:px-8">
//           <div className="flex items-center gap-2">
//             <Link href="/" className="hover:text-slate-900">
//               Home
//             </Link>
//             <ChevronRight size={12} />
//             <span className="font-medium text-slate-800">My Account</span>
//           </div>
//           <Link
//             href="/"
//             className="text-sm font-medium text-slate-600 hover:text-slate-900"
//           >
//             Back to store
//           </Link>
//         </div>
//       </div>

//       <div className="mx-auto flex max-w-7xl gap-4 px-4 py-6 sm:px-6 lg:px-8">
//         <aside className="hidden w-64 shrink-0 lg:block">
//           <div className="space-y-3">
//             <div className="rounded-lg border border-slate-200 bg-white p-4">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#176b5b] text-lg font-bold text-white">
//                   {initial}
//                 </div>
//                 <div className="min-w-0">
//                   <p className="text-xs text-slate-500">Hello,</p>
//                   <p className="truncate text-sm font-bold text-slate-900">
//                     {authReady ? displayName : "..."}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
//               {isLoggedIn && (
//                 <Link
//                   href="/account/orders"
//                   className={`flex items-center justify-between border-b border-slate-100 px-4 py-3.5 hover:bg-slate-50 ${
//                     pathname.startsWith("/account/orders") ? "bg-slate-50" : ""
//                   }`}
//                 >
//                   <div className="flex items-center gap-3">
//                     <Package size={18} className="text-[#176b5b]" />
//                     <span className="text-sm font-semibold uppercase tracking-wide text-slate-700">
//                       My Orders
//                     </span>
//                   </div>
//                   <ChevronRight size={16} className="text-slate-400" />
//                 </Link>
//               )}

//               <div className="border-b border-slate-100">
//                 <div className="flex items-center gap-3 px-4 py-3">
//                   <User size={18} className="text-[#176b5b]" />
//                   <span className="text-sm font-semibold uppercase tracking-wide text-slate-700">
//                     Account Settings
//                   </span>
//                 </div>
//                 <div className="pb-2">
//                   <Link
//                     href="/account/profile"
//                     className={`block px-4 py-2.5 pl-11 text-sm ${
//                       pathname === "/account/profile" || pathname === "/account"
//                         ? "bg-[#e8f5ef] font-medium text-[#176b5b]"
//                         : "text-slate-600 hover:bg-slate-50"
//                     }`}
//                   >
//                     Profile Information
//                   </Link>
//                   {isLoggedIn && (
//                     <Link
//                       href="/account/addresses"
//                       className={`block px-4 py-2.5 pl-11 text-sm ${
//                         pathname.startsWith("/account/addresses")
//                           ? "bg-[#e8f5ef] font-medium text-[#176b5b]"
//                           : "text-slate-600 hover:bg-slate-50"
//                       }`}
//                     >
//                       Manage Addresses
//                     </Link>
//                   )}
//                 </div>
//               </div>

//               {isLoggedIn && (
//                 <div className="border-b border-slate-100">
//                   <div className="flex items-center gap-3 px-4 py-3">
//                     <Heart size={18} className="text-[#176b5b]" />
//                     <span className="text-sm font-semibold uppercase tracking-wide text-slate-700">
//                       My Stuff
//                     </span>
//                   </div>
//                   <div className="pb-2">
//                     <Link
//                       href="/wishlist"
//                       className="block px-4 py-2.5 pl-11 text-sm text-slate-600 hover:bg-slate-50"
//                     >
//                       Wishlist
//                     </Link>
//                   </div>
//                 </div>
//               )}

//               {isLoggedIn ? (
//                 <button
//                   type="button"
//                   onClick={handleLogout}
//                   className="flex w-full items-center gap-3 px-4 py-3.5 text-left text-sm font-medium text-slate-600 hover:bg-red-50 hover:text-red-600"
//                 >
//                   <LogOut size={18} />
//                   Logout
//                 </button>
//               ) : (
//                 <Link
//                   href="/sign-in"
//                   className="flex w-full items-center gap-3 px-4 py-3.5 text-sm font-medium text-[#176b5b] hover:bg-[#e8f5ef]"
//                 >
//                   <User size={18} />
//                   Sign In
//                 </Link>
//               )}
//             </div>
//           </div>
//         </aside>

//         <section className="min-w-0 flex-1 pb-20 lg:pb-0">{children}</section>
//       </div>
//     </div>
//   );
// }

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import {
//   ChevronRight,
//   LogOut,
//   Package,
//   User,
//   Heart,
// } from "lucide-react";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";

// export default function AccountLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();
//   const [user, setUser] = useState<{ name?: string; email?: string } | null>(
//     null
//   );
//   const [authReady, setAuthReady] = useState(false);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
//       if (!firebaseUser) {
//         setUser(null);
//         setAuthReady(true);
//         return;
//       }

//       let name = firebaseUser.displayName || "";
//       let email = firebaseUser.email || "";

//       try {
//         const snap = await getDoc(
//           doc(db, "furniture_customers", firebaseUser.uid)
//         );
//         if (snap.exists()) {
//           const data = snap.data();
//           if (data.name) name = String(data.name);
//           if (data.email) email = String(data.email);
//         }
//       } catch {
//         // ignore
//       }

//       setUser({ name, email });
//       setAuthReady(true);
//     });

//     return () => unsub();
//   }, []);

//   const handleLogout = async () => {
//     await signOut(auth);
//     window.location.href = "/";
//   };

//   const isLoggedIn = Boolean(user);
//   const displayName = user?.name || "Guest";
//   const initial = displayName.charAt(0).toUpperCase();

//   const isProfile =
//     pathname === "/account" || pathname.startsWith("/account/profile");
//   const isOrders = pathname.startsWith("/account/orders");
//   const isWishlist = pathname.startsWith("/wishlist");

//   return (
//     <div className="min-h-screen bg-[#f1f3f6]">
//       <div className="border-b border-slate-100 bg-white">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 text-xs text-slate-500 sm:px-6 lg:px-8">
//           <div className="flex min-w-0 items-center gap-2">
//             <Link href="/" className="shrink-0 hover:text-slate-900">
//               Home
//             </Link>
//             <ChevronRight size={12} className="shrink-0" />
//             <span className="truncate font-medium text-slate-800">
//               My Account
//             </span>
//           </div>
//           <Link
//             href="/"
//             className="shrink-0 text-sm font-medium text-slate-600 hover:text-slate-900"
//           >
//             Back to store
//           </Link>
//         </div>
//       </div>

//       <div className="mx-auto flex max-w-7xl gap-4 px-4 py-6 sm:px-6 lg:px-8">
//         {/* Desktop sidebar */}
//         <aside className="hidden w-64 shrink-0 lg:block">
//           <div className="space-y-3">
//             <div className="rounded-lg border border-slate-200 bg-white p-4">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#176b5b] text-lg font-bold text-white">
//                   {initial}
//                 </div>
//                 <div className="min-w-0">
//                   <p className="text-xs text-slate-500">Hello,</p>
//                   <p className="truncate text-sm font-bold text-slate-900">
//                     {authReady ? displayName : "..."}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
//               {isLoggedIn && (
//                 <Link
//                   href="/account/orders"
//                   className={`flex items-center justify-between border-b border-slate-100 px-4 py-3.5 hover:bg-slate-50 ${
//                     isOrders ? "bg-slate-50" : ""
//                   }`}
//                 >
//                   <div className="flex items-center gap-3">
//                     <Package size={18} className="text-[#176b5b]" />
//                     <span className="text-sm font-semibold uppercase tracking-wide text-slate-700">
//                       My Orders
//                     </span>
//                   </div>
//                   <ChevronRight size={16} className="text-slate-400" />
//                 </Link>
//               )}

//               <div className="border-b border-slate-100">
//                 <div className="flex items-center gap-3 px-4 py-3">
//                   <User size={18} className="text-[#176b5b]" />
//                   <span className="text-sm font-semibold uppercase tracking-wide text-slate-700">
//                     Account Settings
//                   </span>
//                 </div>
//                 <div className="pb-2">
//                   <Link
//                     href="/account/profile"
//                     className={`block px-4 py-2.5 pl-11 text-sm ${
//                       isProfile
//                         ? "bg-[#e8f5ef] font-medium text-[#176b5b]"
//                         : "text-slate-600 hover:bg-slate-50"
//                     }`}
//                   >
//                     Profile Information
//                   </Link>
//                   {isLoggedIn && (
//                     <Link
//                       href="/account/addresses"
//                       className={`block px-4 py-2.5 pl-11 text-sm ${
//                         pathname.startsWith("/account/addresses")
//                           ? "bg-[#e8f5ef] font-medium text-[#176b5b]"
//                           : "text-slate-600 hover:bg-slate-50"
//                       }`}
//                     >
//                       Manage Addresses
//                     </Link>
//                   )}
//                 </div>
//               </div>

//               {isLoggedIn && (
//                 <div className="border-b border-slate-100">
//                   <div className="flex items-center gap-3 px-4 py-3">
//                     <Heart size={18} className="text-[#176b5b]" />
//                     <span className="text-sm font-semibold uppercase tracking-wide text-slate-700">
//                       My Stuff
//                     </span>
//                   </div>
//                   <div className="pb-2">
//                     <Link
//                       href="/wishlist"
//                       className="block px-4 py-2.5 pl-11 text-sm text-slate-600 hover:bg-slate-50"
//                     >
//                       Wishlist
//                     </Link>
//                   </div>
//                 </div>
//               )}

//               {isLoggedIn ? (
//                 <button
//                   type="button"
//                   onClick={handleLogout}
//                   className="flex w-full items-center gap-3 px-4 py-3.5 text-left text-sm font-medium text-slate-600 hover:bg-red-50 hover:text-red-600"
//                 >
//                   <LogOut size={18} />
//                   Logout
//                 </button>
//               ) : (
//                 <Link
//                   href="/sign-in"
//                   className="flex w-full items-center gap-3 px-4 py-3.5 text-sm font-medium text-[#176b5b] hover:bg-[#e8f5ef]"
//                 >
//                   <User size={18} />
//                   Sign In
//                 </Link>
//               )}
//             </div>
//           </div>
//         </aside>

//         {/* Content — extra bottom padding on mobile for bottom nav */}
//         <section className="min-w-0 flex-1 pb-24 lg:pb-0">{children}</section>
//       </div>

//       {/* Mobile bottom navigation */}
//       <nav
//         className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white pb-[env(safe-area-inset-bottom,0px)] lg:hidden"
//         aria-label="Account navigation"
//       >
//         <div className="mx-auto flex max-w-lg items-stretch justify-around px-1 pt-1">
//           <Link
//             href="/account/profile"
//             className={`flex min-h-[52px] flex-1 flex-col items-center justify-center gap-0.5 text-[10px] font-medium ${
//               isProfile ? "text-[#176b5b]" : "text-slate-500"
//             }`}
//           >
//             <User size={18} />
//             Profile
//           </Link>

//           {isLoggedIn && (
//             <Link
//               href="/account/orders"
//               className={`flex min-h-[52px] flex-1 flex-col items-center justify-center gap-0.5 text-[10px] font-medium ${
//                 isOrders ? "text-[#176b5b]" : "text-slate-500"
//               }`}
//             >
//               <Package size={18} />
//               Orders
//             </Link>
//           )}

//           <Link
//             href="/wishlist"
//             className={`flex min-h-[52px] flex-1 flex-col items-center justify-center gap-0.5 text-[10px] font-medium ${
//               isWishlist ? "text-[#176b5b]" : "text-slate-500"
//             }`}
//           >
//             <Heart size={18} />
//             Wishlist
//           </Link>

//           {isLoggedIn ? (
//             <button
//               type="button"
//               onClick={handleLogout}
//               className="flex min-h-[52px] flex-1 flex-col items-center justify-center gap-0.5 text-[10px] font-medium text-slate-500"
//             >
//               <LogOut size={18} />
//               Logout
//             </button>
//           ) : (
//             <Link
//               href="/sign-in"
//               className="flex min-h-[52px] flex-1 flex-col items-center justify-center gap-0.5 text-[10px] font-medium text-[#176b5b]"
//             >
//               <User size={18} />
//               Sign in
//             </Link>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// }

// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { ReactNode, useEffect, useState } from "react";
// import {
//   Heart,
//   LogOut,
//   Menu,
//   Package,
//   User,
//   X,
// } from "lucide-react";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth } from "@/lib/firebase";

// const navItems = [
//   { href: "/account", label: "Profile", icon: User, exact: true },
//   { href: "/account/orders", label: "Orders", icon: Package, exact: false },
//   { href: "/wishlist", label: "Wishlist", icon: Heart, exact: false },
// ];

// export default function AccountLayout({ children }: { children: ReactNode }) {
//   const pathname = usePathname();
//   const router = useRouter();
//   const [open, setOpen] = useState(false);
//   const [userLabel, setUserLabel] = useState("Account");

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       if (!user) {
//         setUserLabel("Account");
//         return;
//       }
//       setUserLabel(
//         (user.displayName || user.email || "U").charAt(0).toUpperCase()
//       );
//     });
//     return () => unsub();
//   }, []);

//   // Close drawer on route change
//   useEffect(() => {
//     setOpen(false);
//   }, [pathname]);

//   // Lock body scroll when drawer open
//   useEffect(() => {
//     if (!open) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, [open]);

//   const handleLogout = async () => {
//     await signOut(auth);
//     setOpen(false);
//     router.push("/");
//   };

//   const isActive = (href: string, exact: boolean) => {
//     if (exact) return pathname === href;
//     return pathname === href || pathname.startsWith(href + "/");
//   };

//   const NavLinks = ({ onNavigate }: { onNavigate?: () => void }) => (
//     <nav className="flex flex-col gap-1 p-3">
//       {navItems.map(({ href, label, icon: Icon, exact }) => {
//         const active = isActive(href, exact);
//         return (
//           <Link
//             key={href}
//             href={href}
//             onClick={onNavigate}
//             className={`flex min-h-[44px] items-center gap-3 rounded-xl px-3 text-sm font-medium transition ${
//               active
//                 ? "bg-[#e8f5ef] text-[#176b5b]"
//                 : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//             }`}
//           >
//             <Icon size={18} className="shrink-0" />
//             {label}
//           </Link>
//         );
//       })}
//       <button
//         type="button"
//         onClick={handleLogout}
//         className="flex min-h-[44px] items-center gap-3 rounded-xl px-3 text-sm font-medium text-red-600 hover:bg-red-50"
//       >
//         <LogOut size={18} className="shrink-0" />
//         Logout
//       </button>
//     </nav>
//   );

//   return (
//     <div className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto max-w-6xl px-3 py-4 sm:px-6 sm:py-6 lg:px-8">
//         {/* Top bar */}
//         <div className="mb-4 flex items-center justify-between gap-3">
//           <div className="flex items-center gap-2 text-xs text-slate-500 sm:text-sm">
//             <Link href="/" className="hover:text-slate-900">
//               Home
//             </Link>
//             <span>›</span>
//             <span className="font-medium text-slate-800">My Account</span>
//           </div>

//           <div className="flex items-center gap-2">
//             <Link
//               href="/products"
//               className="hidden text-xs font-semibold text-slate-600 hover:text-slate-900 sm:inline"
//             >
//               Back to store
//             </Link>

//             {/* Sandwich toggle — mobile */}
//             <button
//               type="button"
//               onClick={() => setOpen(true)}
//               className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm lg:hidden"
//               aria-label="Open account menu"
//             >
//               <Menu size={20} />
//             </button>
//           </div>
//         </div>

//         <div className="flex gap-6">
//           {/* Desktop sidebar */}
//           <aside className="hidden w-56 shrink-0 lg:block">
//             <div className="sticky top-24 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
//               <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-4">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#176b5b] text-sm font-bold text-white">
//                   {userLabel}
//                 </div>
//                 <div>
//                   <p className="text-sm font-semibold text-slate-900">Account</p>
//                   <p className="text-xs text-slate-500">Manage profile</p>
//                 </div>
//               </div>
//               <NavLinks />
//             </div>
//           </aside>

//           {/* Main content */}
//           <div className="min-w-0 flex-1">{children}</div>
//         </div>
//       </div>

//       {/* Mobile sandwich drawer */}
//       {open && (
//         <div className="fixed inset-0 z-50 lg:hidden">
//           <button
//             type="button"
//             className="absolute inset-0 bg-black/40"
//             aria-label="Close menu"
//             onClick={() => setOpen(false)}
//           />
//           <aside
//             className="absolute left-0 top-0 flex h-full w-[min(18rem,85vw)] flex-col bg-white shadow-2xl"
//             style={{ animation: "akrishDrawerIn 0.2s ease-out" }}
//           >
//             <div className="flex items-center justify-between border-b border-slate-100 px-4 py-4">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#176b5b] text-sm font-bold text-white">
//                   {userLabel}
//                 </div>
//                 <div>
//                   <p className="text-sm font-semibold text-slate-900">
//                     My Account
//                   </p>
//                   <p className="text-xs text-slate-500">Menu</p>
//                 </div>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setOpen(false)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
//                 aria-label="Close"
//               >
//                 <X size={20} />
//               </button>
//             </div>

//             <NavLinks onNavigate={() => setOpen(false)} />

//             <div className="mt-auto border-t border-slate-100 p-4">
//               <Link
//                 href="/products"
//                 onClick={() => setOpen(false)}
//                 className="block text-center text-sm font-semibold text-[#176b5b]"
//               >
//                 Back to store
//               </Link>
//             </div>
//           </aside>
//         </div>
//       )}

//       <style jsx global>{`
//         @keyframes akrishDrawerIn {
//           from {
//             transform: translateX(-100%);
//           }
//           to {
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }


// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { ReactNode, useEffect, useState } from "react";
// import {
//   Heart,
//   LogOut,
//   Menu,
//   Package,
//   User,
//   X,
// } from "lucide-react";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth } from "@/lib/firebase";

// const navItems = [
//   { href: "/account", label: "Profile", icon: User, exact: true },
//   { href: "/account/orders", label: "Orders", icon: Package, exact: false },
//   { href: "/wishlist", label: "Wishlist", icon: Heart, exact: false },
// ];

// export default function AccountLayout({
//   children,
// }: {
//   children: ReactNode;
// }) {
//   const pathname = usePathname();
//   const router = useRouter();

//   const [open, setOpen] = useState(false);
//   const [userLabel, setUserLabel] = useState("A");
//   const [loggingOut, setLoggingOut] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (!user) {
//         setUserLabel("A");
//         return;
//       }

//       setUserLabel(
//         (user.displayName || user.email || "A")
//           .trim()
//           .charAt(0)
//           .toUpperCase()
//       );
//     });

//     return () => unsubscribe();
//   }, []);

//   // Close the mobile drawer after navigation.
//   useEffect(() => {
//     setOpen(false);
//   }, [pathname]);

//   // Prevent background scrolling while the drawer is open.
//   useEffect(() => {
//     if (!open) return;

//     const previousOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";

//     const handleEscape = (event: KeyboardEvent) => {
//       if (event.key === "Escape") {
//         setOpen(false);
//       }
//     };

//     document.addEventListener("keydown", handleEscape);

//     return () => {
//       document.body.style.overflow = previousOverflow;
//       document.removeEventListener("keydown", handleEscape);
//     };
//   }, [open]);

//   const handleLogout = async () => {
//     if (loggingOut) return;

//     setLoggingOut(true);

//     try {
//       await signOut(auth);
//       setOpen(false);
//       router.replace("/");
//     } catch (error) {
//       console.error("Logout failed:", error);
//       setLoggingOut(false);
//     }
//   };

//   const isActive = (href: string, exact: boolean) => {
//     if (exact) return pathname === href;

//     return pathname === href || pathname.startsWith(`${href}/`);
//   };

//   const NavLinks = ({
//     onNavigate,
//   }: {
//     onNavigate?: () => void;
//   }) => (
//     <nav className="flex flex-col gap-1.5 p-3">
//       {navItems.map(({ href, label, icon: Icon, exact }) => {
//         const active = isActive(href, exact);

//         return (
//           <Link
//             key={href}
//             href={href}
//             onClick={onNavigate}
//             aria-current={active ? "page" : undefined}
//             className={`group flex min-h-[46px] items-center gap-3 rounded-xl px-3.5 text-sm font-medium transition-all duration-200 ${
//               active
//                 ? "bg-[#e8f5ef] text-[#176b5b] shadow-sm"
//                 : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
//             }`}
//           >
//             <Icon
//               size={19}
//               strokeWidth={active ? 2.2 : 1.8}
//               className="shrink-0"
//             />

//             <span>{label}</span>

//             {active && (
//               <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#176b5b]" />
//             )}
//           </Link>
//         );
//       })}

//       <div className="my-2 border-t border-slate-100" />

//       <button
//         type="button"
//         onClick={() => {
//           onNavigate?.();
//           void handleLogout();
//         }}
//         disabled={loggingOut}
//         className="flex min-h-[46px] items-center gap-3 rounded-xl px-3.5 text-left text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
//       >
//         <LogOut size={19} className="shrink-0" />
//         {loggingOut ? "Logging out..." : "Logout"}
//       </button>
//     </nav>
//   );

//   const AccountIdentity = ({
//     mobile = false,
//   }: {
//     mobile?: boolean;
//   }) => (
//     <div className="flex min-w-0 items-center gap-3">
//       <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#176b5b] text-base font-bold text-white ring-4 ring-[#e8f5ef]">
//         {userLabel}
//       </div>

//       <div className="min-w-0">
//         <p className="truncate text-sm font-semibold text-slate-900">
//           {mobile ? "My Account" : "Account"}
//         </p>
//         <p className="text-xs text-slate-500">
//           {mobile ? "Manage your account" : "Profile and preferences"}
//         </p>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto max-w-7xl px-3 py-4 sm:px-6 sm:py-6 lg:px-8">
//         {/* Top bar */}
//         <header className="mb-5 flex items-center justify-between gap-3">
//           <div className="flex min-w-0 items-center gap-2 text-xs text-slate-500 sm:text-sm">
//             <Link href="/" className="transition hover:text-[#176b5b]">
//               Home
//             </Link>

//             <span aria-hidden="true">/</span>

//             <span className="truncate font-medium text-slate-800">
//               My Account
//             </span>
//           </div>

//           <div className="flex shrink-0 items-center gap-2">
//             <Link
//               href="/products"
//               className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-[#176b5b] sm:inline-flex"
//             >
//               Back to store
//             </Link>

//             <button
//               type="button"
//               onClick={() => setOpen(true)}
//               className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#176b5b] hover:text-[#176b5b] lg:hidden"
//               aria-label="Open account menu"
//               aria-expanded={open}
//             >
//               <Menu size={21} />
//             </button>
//           </div>
//         </header>

//         <div className="flex items-start gap-5 lg:gap-8">
//           {/* Floating desktop sidebar */}
//           <aside className="hidden w-60 shrink-0 lg:block xl:w-64">
//             <div className="sticky top-6">
//               <div className="overflow-hidden rounded-2xl border border-white bg-white/95 shadow-[0_8px_30px_rgba(15,23,42,0.07)] ring-1 ring-slate-200/70 backdrop-blur-md">
//                 <div className="border-b border-slate-100 p-5">
//                   <AccountIdentity />
//                 </div>

//                 <NavLinks />

//                 <div className="border-t border-slate-100 bg-slate-50/70 px-5 py-4">
//                   <p className="text-xs leading-5 text-slate-500">
//                     Manage your profile, orders and saved items in one place.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </aside>

//           {/* Main content */}
//           <main className="min-w-0 flex-1">
//             {children}
//           </main>
//         </div>
//       </div>

//       {/* Mobile drawer */}
//       {open && (
//         <div className="fixed inset-0 z-50 lg:hidden">
//           <button
//             type="button"
//             className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]"
//             aria-label="Close account menu"
//             onClick={() => setOpen(false)}
//           />

//           <aside
//             role="dialog"
//             aria-modal="true"
//             aria-label="Account navigation"
//             className="absolute inset-y-0 left-0 flex w-[min(19rem,85vw)] flex-col bg-white shadow-2xl"
//             style={{ animation: "akrishDrawerIn 0.22s ease-out" }}
//           >
//             <div className="flex items-center justify-between border-b border-slate-100 p-5">
//               <AccountIdentity mobile />

//               <button
//                 type="button"
//                 onClick={() => setOpen(false)}
//                 className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
//                 aria-label="Close account menu"
//               >
//                 <X size={20} />
//               </button>
//             </div>

//             <NavLinks onNavigate={() => setOpen(false)} />

//             <div className="mt-auto border-t border-slate-100 p-5">
//               <Link
//                 href="/products"
//                 onClick={() => setOpen(false)}
//                 className="block rounded-xl bg-[#e8f5ef] px-4 py-3 text-center text-sm font-semibold text-[#176b5b] transition hover:bg-[#d9eee5]"
//               >
//                 Back to store
//               </Link>
//             </div>
//           </aside>
//         </div>
//       )}

//       <style jsx global>{`
//         @keyframes akrishDrawerIn {
//           from {
//             transform: translateX(-100%);
//           }
//           to {
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { ReactNode, useEffect, useState } from "react";
// import {
//   Heart,
//   LogOut,
//   Menu,
//   Package,
//   User,
//   X,
// } from "lucide-react";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth } from "@/lib/firebase";

// // const navItems = [
// //   { href: "/account", label: "Profile", icon: User, exact: true },
// //   { href: "/account/orders", label: "Orders", icon: Package, exact: false },
// //   { href: "/wishlist", label: "Wishlist", icon: Heart, exact: false },
// // ];

// const navItems = [
//   { href: "/account/profile", label: "Profile", icon: User, exact: false },
//   { href: "/account/orders", label: "Orders", icon: Package, exact: false },
//   { href: "/wishlist", label: "Wishlist", icon: Heart, exact: false },
// ];

// export default function AccountLayout({ children }: { children: ReactNode }) {
//   const pathname = usePathname();
//   const router = useRouter();
//   const [open, setOpen] = useState(false);
//   const [userLabel, setUserLabel] = useState("A");
//   const [displayName, setDisplayName] = useState("Account");

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       if (!user) {
//         setUserLabel("A");
//         setDisplayName("Account");
//         return;
//       }
//       const name = user.displayName || user.email || "User";
//       setDisplayName(name);
//       setUserLabel(name.charAt(0).toUpperCase());
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     setOpen(false);
//   }, [pathname]);

//   useEffect(() => {
//     if (!open) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, [open]);

//   const handleLogout = async () => {
//     await signOut(auth);
//     setOpen(false);
//     router.push("/");
//   };

//   const isActive = (href: string, exact: boolean) => {
//     if (exact) return pathname === href;
//     return pathname === href || pathname.startsWith(href + "/");
//   };

//   const NavLinks = ({ onNavigate }: { onNavigate?: () => void }) => (
//     <nav className="flex flex-col gap-1 p-3">
//       {navItems.map(({ href, label, icon: Icon, exact }) => {
//         const active = isActive(href, exact);
//         return (
//           <Link
//             key={href}
//             href={href}
//             onClick={onNavigate}
//             className={`flex min-h-[44px] items-center gap-3 rounded-xl px-3 text-sm font-medium transition ${
//               active
//                 ? "bg-[#e8f5ef] text-[#176b5b] shadow-sm"
//                 : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//             }`}
//           >
//             <Icon size={18} className="shrink-0" />
//             {label}
//           </Link>
//         );
//       })}
//       <button
//         type="button"
//         onClick={handleLogout}
//         className="mt-1 flex min-h-[44px] items-center gap-3 rounded-xl px-3 text-sm font-medium text-red-600 hover:bg-red-50"
//       >
//         <LogOut size={18} className="shrink-0" />
//         Logout
//       </button>
//     </nav>
//   );

//   return (
//     <div className="min-h-screen bg-[#f0f2f1]">
//       <div className="mx-auto max-w-6xl px-3 py-4 sm:px-6 sm:py-8 lg:px-8">
//         {/* Top bar */}
//         <div className="mb-5 flex items-center justify-between gap-3 sm:mb-6">
//           <div className="flex items-center gap-2 text-xs text-slate-500 sm:text-sm">
//             <Link href="/" className="transition hover:text-slate-900">
//               Home
//             </Link>
//             <span className="text-slate-300">›</span>
//             <span className="font-medium text-slate-800">My Account</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Link
//               href="/products"
//               className="hidden text-xs font-semibold text-slate-600 transition hover:text-slate-900 sm:inline"
//             >
//               Back to store
//             </Link>
//             <button
//               type="button"
//               onClick={() => setOpen(true)}
//               className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white text-slate-700 shadow-md shadow-slate-200/60 lg:hidden"
//               aria-label="Open account menu"
//             >
//               <Menu size={20} />
//             </button>
//           </div>
//         </div>

//         <div className="flex gap-6 lg:gap-8">
//           {/* Floating desktop sidebar */}
//           <aside className="hidden w-[15.5rem] shrink-0 lg:block">
//             <div className="sticky top-24 overflow-hidden rounded-2xl border border-white/80 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-slate-900/5">
//               <div className="flex items-center gap-3 border-b border-slate-100/80 bg-gradient-to-br from-[#f4fbf8] to-white px-4 py-4">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#176b5b] text-sm font-bold text-white shadow-md shadow-[#176b5b]/25">
//                   {userLabel}
//                 </div>
//                 <div className="min-w-0">
//                   <p className="truncate text-sm font-semibold text-slate-900">
//                     {displayName}
//                   </p>
//                   <p className="text-xs text-slate-500">Manage profile</p>
//                 </div>
//               </div>
//               <NavLinks />
//             </div>
//           </aside>

//           {/* Main content — also slightly elevated */}
//           <div className="min-w-0 flex-1">
//             <div className="rounded-2xl border border-white/80 bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-slate-900/5 sm:p-6">
//               {children}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile floating drawer */}
//       {/* {open && (
//         <div className="fixed inset-0 z-50 lg:hidden">
//           <button
//             type="button"
//             className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
//             aria-label="Close menu"
//             onClick={() => setOpen(false)}
//           />
//           <aside
//             className="absolute left-3 top-3 bottom-3 flex w-[min(18rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-900/5"
//             style={{ animation: "akrishDrawerIn 0.22s ease-out" }}
//           >
//             <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-br from-[#f4fbf8] to-white px-4 py-4">
//               <div className="flex min-w-0 items-center gap-3">
//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#176b5b] text-sm font-bold text-white">
//                   {userLabel}
//                 </div>
//                 <div className="min-w-0">
//                   <p className="truncate text-sm font-semibold text-slate-900">
//                     My Account
//                   </p>
//                   <p className="truncate text-xs text-slate-500">{displayName}</p>
//                 </div>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setOpen(false)}
//                 className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
//                 aria-label="Close"
//               >
//                 <X size={20} />
//               </button>
//             </div>
//             <div className="flex-1 overflow-y-auto">
//               <NavLinks onNavigate={() => setOpen(false)} />
//             </div>
//             <div className="border-t border-slate-100 p-4">
//               <Link
//                 href="/products"
//                 onClick={() => setOpen(false)}
//                 className="block rounded-xl bg-[#f4fbf8] py-2.5 text-center text-sm font-semibold text-[#176b5b]"
//               >
//                 Back to store
//               </Link>
//             </div>
//           </aside>
//         </div>
//       )} */}

//             {/* Mobile floating drawer — compact height */}
//       {open && (
//         <div className="fixed inset-0 z-50 lg:hidden">
//           <button
//             type="button"
//             className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
//             aria-label="Close menu"
//             onClick={() => setOpen(false)}
//           />
//           <aside
//             className="absolute left-3 right-3 top-3 mx-auto flex max-h-[min(70vh,28rem)] w-[min(18rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-900/5 sm:left-3 sm:right-auto"
//             style={{ animation: "akrishDrawerIn 0.22s ease-out" }}
//           >
//             <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-br from-[#f4fbf8] to-white px-4 py-3">
//               <div className="flex min-w-0 items-center gap-2.5">
//                 <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#176b5b] text-sm font-bold text-white">
//                   {userLabel}
//                 </div>
//                 <div className="min-w-0">
//                   <p className="truncate text-sm font-semibold text-slate-900">
//                     My Account
//                   </p>
//                   <p className="truncate text-xs text-slate-500">{displayName}</p>
//                 </div>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setOpen(false)}
//                 className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
//                 aria-label="Close"
//               >
//                 <X size={18} />
//               </button>
//             </div>

//             <nav className="flex flex-col gap-0.5 p-2">
//               {navItems.map(({ href, label, icon: Icon, exact }) => {
//                 const active = isActive(href, exact);
//                 return (
//                   <Link
//                     key={href}
//                     href={href}
//                     onClick={() => setOpen(false)}
//                     className={`flex min-h-[40px] items-center gap-3 rounded-xl px-3 text-sm font-medium transition ${
//                       active
//                         ? "bg-[#e8f5ef] text-[#176b5b] shadow-sm"
//                         : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                     }`}
//                   >
//                     <Icon size={17} className="shrink-0" />
//                     {label}
//                   </Link>
//                 );
//               })}
//               <button
//                 type="button"
//                 onClick={handleLogout}
//                 className="flex min-h-[40px] items-center gap-3 rounded-xl px-3 text-sm font-medium text-red-600 hover:bg-red-50"
//               >
//                 <LogOut size={17} className="shrink-0" />
//                 Logout
//               </button>
//             </nav>

//             <div className="border-t border-slate-100 p-2.5">
//               <Link
//                 href="/products"
//                 onClick={() => setOpen(false)}
//                 className="block rounded-xl bg-[#f4fbf8] py-2 text-center text-sm font-semibold text-[#176b5b]"
//               >
//                 Back to store
//               </Link>
//             </div>
//           </aside>
//         </div>
//       )}

//       <style jsx global>{`
//         @keyframes akrishDrawerIn {
//           from {
//             opacity: 0.6;
//             transform: translateX(-12px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }



"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import {
  Heart,
  LogOut,
  Menu,
  Package,
  User,
  X,
} from "lucide-react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

const navItems = [
  {
    href: "/account/profile",
    label: "Profile",
    icon: User,
    exact: false,
  },
  {
    href: "/account/orders",
    label: "Orders",
    icon: Package,
    exact: false,
  },
  {
    href: "/account/wishlist",
    label: "Wishlist",
    icon: Heart,
    exact: false,
  },
];

export default function AccountLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [userLabel, setUserLabel] = useState("A");
  const [displayName, setDisplayName] = useState("Account");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setUserLabel("A");
        setDisplayName("Account");
        return;
      }

      const name = user.displayName || user.email || "User";

      setDisplayName(name);
      setUserLabel(name.charAt(0).toUpperCase());
    });

    return () => unsubscribe();
  }, []);

  // Close the mobile menu when navigating.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent background scrolling while the mobile menu is open.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setOpen(false);
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const NavLinks = ({
    onNavigate,
  }: {
    onNavigate?: () => void;
  }) => (
    <nav className="flex flex-col gap-1 p-3">
      {navItems.map(({ href, label, icon: Icon }) => {
        const active = isActive(href);

        return (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={`flex min-h-[44px] items-center gap-3 rounded-xl px-3 text-sm font-medium transition ${
              active
                ? "bg-[#e8f5ef] text-[#176b5b] shadow-sm"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            <Icon size={18} className="shrink-0" />
            {label}
          </Link>
        );
      })}

      <button
        type="button"
        onClick={handleLogout}
        className="mt-1 flex min-h-[44px] items-center gap-3 rounded-xl px-3 text-sm font-medium text-red-600 hover:bg-red-50"
      >
        <LogOut size={18} className="shrink-0" />
        Logout
      </button>
    </nav>
  );

  return (
    <div className="min-h-screen bg-[#f0f2f1]">
      <div className="mx-auto max-w-6xl px-3 py-4 sm:px-6 sm:py-8 lg:px-8">
        {/* Top bar */}
        <div className="mb-5 flex items-center justify-between gap-3 sm:mb-6">
          <div className="flex items-center gap-2 text-xs text-slate-500 sm:text-sm">
            <Link href="/" className="transition hover:text-slate-900">
              Home
            </Link>

            <span className="text-slate-300">›</span>

            <span className="font-medium text-slate-800">
              My Account
            </span>

            {pathname === "/account/wishlist" && (
              <>
                <span className="text-slate-300">›</span>
                <span className="font-medium text-slate-800">
                  Wishlist
                </span>
              </>
            )}

            {pathname === "/account/orders" && (
              <>
                <span className="text-slate-300">›</span>
                <span className="font-medium text-slate-800">
                  Orders
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/products"
              className="hidden text-xs font-semibold text-slate-600 transition hover:text-slate-900 sm:inline"
            >
              Back to store
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white text-slate-700 shadow-md shadow-slate-200/60 lg:hidden"
              aria-label="Open account menu"
              aria-expanded={open}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>

        <div className="flex gap-6 lg:gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden w-[15.5rem] shrink-0 lg:block">
            <div className="sticky top-24 overflow-hidden rounded-2xl border border-white/80 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-slate-900/5">
              <div className="flex items-center gap-3 border-b border-slate-100/80 bg-gradient-to-br from-[#f4fbf8] to-white px-4 py-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#176b5b] text-sm font-bold text-white shadow-md shadow-[#176b5b]/25">
                  {userLabel}
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-900">
                    {displayName}
                  </p>

                  <p className="text-xs text-slate-500">
                    Manage profile
                  </p>
                </div>
              </div>

              <NavLinks />
            </div>
          </aside>

          {/* Shared account content panel */}
          <main className="min-w-0 flex-1">
            <div className="min-h-[280px] rounded-2xl border border-white/80 bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-slate-900/5 sm:p-6">
              {children}
            </div>
          </main>
        </div>
      </div>

      {/* Mobile account menu */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
            aria-label="Close account menu"
            onClick={() => setOpen(false)}
          />

          <aside
            className="absolute left-3 right-3 top-3 mx-auto flex max-h-[min(70vh,28rem)] w-[min(18rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-900/5 sm:left-3 sm:right-auto"
            style={{ animation: "akrishDrawerIn 0.22s ease-out" }}
          >
            <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-br from-[#f4fbf8] to-white px-4 py-3">
              <div className="flex min-w-0 items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#176b5b] text-sm font-bold text-white">
                  {userLabel}
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-900">
                    My Account
                  </p>

                  <p className="truncate text-xs text-slate-500">
                    {displayName}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <NavLinks onNavigate={() => setOpen(false)} />
            </div>

            <div className="border-t border-slate-100 p-2.5">
              <Link
                href="/products"
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-[#f4fbf8] py-2.5 text-center text-sm font-semibold text-[#176b5b]"
              >
                Back to store
              </Link>
            </div>
          </aside>
        </div>
      )}

      <style jsx global>{`
        @keyframes akrishDrawerIn {
          from {
            opacity: 0.6;
            transform: translateX(-12px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
