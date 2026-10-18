// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";

// type NavItem = {
//   label: string;
//   href: string;
//   icon: string;
// };

// const navigation: NavItem[] = [
//   {
//     label: "Dashboard",
//     href: "/interior/dashboard",
//     icon: "▦",
//   },
//   {
//     label: "CRM / Leads",
//     href: "/interior/crm",
//     icon: "◉",
//   },
//   {
//     label: "Clients",
//     href: "/interior/clients",
//     icon: "♙",
//   },
//   {
//     label: "Quotations",
//     href: "/interior/quotations",
//     icon: "▤",
//   },
//   {
//     label: "Contracts",
//     href: "/interior/contracts",
//     icon: "▥",
//   },
//   {
//     label: "Projects",
//     href: "/interior/projects",
//     icon: "▣",
//   },
//   {
//     label: "HRMS",
//     href: "/interior/hrms",
//     icon: "♟",
//   },
//   {
//     label: "Vendors",
//     href: "/interior/vendors",
//     icon: "◆",
//   },
//   {
//     label: "Payments",
//     href: "/interior/payments",
//     icon: "₹",
//   },
//   {
//     label: "Reports",
//     href: "/interior/reports",
//     icon: "▥",
//   },
// ];

// const furnitureNavigation: NavItem[] = [
//   {
//     label: "Dashboard",
//     href: "/furniture/dashboard",
//     icon: "▦",
//   },
//   {
//     label: "Products",
//     href: "/furniture/products",
//     icon: "▤",
//   },
//   {
//     label: "Inventory",
//     href: "/furniture/inventory",
//     icon: "▣",
//   },
//   {
//     label: "Customers",
//     href: "/furniture/customers",
//     icon: "♙",
//   },
//   {
//     label: "Enquiries",
//     href: "/furniture/enquiries",
//     icon: "◉",
//   },
//   {
//     label: "Orders",
//     href: "/furniture/orders",
//     icon: "▥",
//   },
//   {
//     label: "Payments",
//     href: "/furniture/payments",
//     icon: "₹",
//   },
//   {
//     label: "Expenses",
//     href: "/furniture/expenses",
//     icon: "◆",
//   },
//   {
//     label: "Reports",
//     href: "/furniture/reports",
//     icon: "▥",
//   },
// ];

// function getPageTitle(pathname: string) {
//   const allItems = [...navigation, ...furnitureNavigation];

//   const item = allItems.find(
//     (nav) =>
//       pathname === nav.href ||
//       pathname.startsWith(`${nav.href}/`)
//   );

//   return item?.label ?? "Dashboard";
// }

// function Logo() {
//   return (
//     <div className="flex items-center gap-2">
//       <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#176b57] text-white shadow-sm">
//         <span className="text-lg font-bold">A</span>
//       </div>

//       <div className="leading-none">
//         <div className="text-[20px] font-bold tracking-tight text-[#1f2937]">
//           Akrish
//         </div>

//         <div className="mt-1 text-[8px] font-medium uppercase tracking-[0.16em] text-slate-400">
//           Furniture and Interior
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function ERPLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();

//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [moduleOpen, setModuleOpen] = useState(false);

//   const isFurniture = pathname.startsWith("/furniture");

//   const currentNavigation = isFurniture
//     ? furnitureNavigation
//     : navigation;

//   const pageTitle = getPageTitle(pathname);

//   const moduleName = isFurniture
//     ? "Furniture ERP"
//     : "Interior ERP";

//   const switchModule = isFurniture
//     ? "/interior/dashboard"
//     : "/furniture/dashboard";

//   return (
//     <div className="min-h-screen bg-[#f7f9f8] text-slate-800">
//       {/* MOBILE OVERLAY */}
//       {sidebarOpen && (
//         <button
//           type="button"
//           aria-label="Close sidebar"
//           onClick={() => setSidebarOpen(false)}
//           className="fixed inset-0 z-40 bg-black/30 lg:hidden"
//         />
//       )}

//       {/* SIDEBAR */}
//       <aside
//         className={`fixed inset-y-0 left-0 z-50 flex w-[235px] flex-col border-r border-slate-200 bg-white transition-transform duration-200 ${
//           sidebarOpen
//             ? "translate-x-0"
//             : "-translate-x-full lg:translate-x-0"
//         }`}
//       >
//         {/* LOGO */}
//         <div className="flex h-[72px] items-center border-b border-slate-100 px-5">
//           <Logo />

//           <button
//             type="button"
//             onClick={() => setSidebarOpen(false)}
//             className="ml-auto flex h-8 w-8 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 lg:hidden"
//           >
//             ×
//           </button>
//         </div>

//         {/* MODULE SWITCHER */}
//         <div className="px-3 pt-4">
//           <div className="relative">
//             <button
//               type="button"
//               onClick={() => setModuleOpen(!moduleOpen)}
//               className="flex w-full items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-left transition hover:bg-slate-100"
//             >
//               <div>
//                 <p className="text-[10px] uppercase tracking-wide text-slate-400">
//                   Current Module
//                 </p>

//                 <p className="mt-0.5 text-xs font-semibold text-slate-800">
//                   {moduleName}
//                 </p>
//               </div>

//               <span
//                 className={`text-xs text-slate-400 transition ${
//                   moduleOpen ? "rotate-180" : ""
//                 }`}
//               >
//                 ▼
//               </span>
//             </button>

//             {moduleOpen && (
//               <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg">
//                 <Link
//                   href={switchModule}
//                   onClick={() => {
//                     setModuleOpen(false);
//                     setSidebarOpen(false);
//                   }}
//                   className="block rounded-md px-3 py-2.5 hover:bg-slate-50"
//                 >
//                   <p className="text-xs font-semibold text-slate-800">
//                     {isFurniture
//                       ? "Interior ERP"
//                       : "Furniture ERP"}
//                   </p>

//                   <p className="mt-0.5 text-[10px] text-slate-400">
//                     {isFurniture
//                       ? "Project & Site Management"
//                       : "Product & Retail Management"}
//                   </p>
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* NAVIGATION */}
//         <nav className="mt-4 flex-1 overflow-y-auto px-3 pb-4">
//           <p className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
//             {isFurniture ? "Furniture Management" : "Interior Management"}
//           </p>

//           <div className="space-y-1">
//             {currentNavigation.map((item) => {
//               const active =
//                 pathname === item.href ||
//                 pathname.startsWith(`${item.href}/`);

//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setSidebarOpen(false)}
//                   className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition ${
//                     active
//                       ? "bg-[#e8f5ef] text-[#176b57]"
//                       : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                   }`}
//                 >
//                   <span
//                     className={`flex h-6 w-6 items-center justify-center rounded-md text-[13px] ${
//                       active
//                         ? "bg-[#176b57] text-white"
//                         : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
//                     }`}
//                   >
//                     {item.icon}
//                   </span>

//                   <span>{item.label}</span>

//                   {active && (
//                     <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#176b57]" />
//                   )}
//                 </Link>
//               );
//             })}
//           </div>
//         </nav>

//         {/* SIDEBAR FOOTER */}
//         <div className="border-t border-slate-100 p-3">
//           <div className="rounded-lg bg-slate-50 p-3">
//             <div className="flex items-center gap-2">
//               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#176b57] text-xs font-bold text-white">
//                 V
//               </div>

//               <div className="min-w-0">
//                 <p className="truncate text-xs font-semibold text-slate-800">
//                   VIP Interior
//                 </p>

//                 <p className="truncate text-[10px] text-slate-400">
//                   Administrator
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </aside>

//       {/* MAIN AREA */}
//       <div className="min-h-screen lg:pl-[235px]">
//         {/* TOP HEADER */}
//         <header className="sticky top-0 z-30 h-[64px] border-b border-slate-200 bg-white/95 backdrop-blur">
//           <div className="flex h-full items-center justify-between px-4 md:px-6">
//             <div className="flex items-center gap-3">
//               {/* MOBILE MENU */}
//               <button
//                 type="button"
//                 onClick={() => setSidebarOpen(true)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 lg:hidden"
//                 aria-label="Open navigation"
//               >
//                 ☰
//               </button>

//               <div>
//                 <p className="text-[10px] uppercase tracking-wide text-slate-400">
//                   {moduleName}
//                 </p>

//                 <h1 className="text-sm font-semibold text-slate-800">
//                   {pageTitle}
//                 </h1>
//               </div>
//             </div>

//             {/* HEADER ACTIONS */}
//             <div className="flex items-center gap-2 md:gap-4">
//               {/* SEARCH */}
//               <button
//                 type="button"
//                 className="hidden h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 sm:flex"
//                 aria-label="Search"
//               >
//                 ⌕
//               </button>

//               {/* NOTIFICATION */}
//               <button
//                 type="button"
//                 className="relative flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
//                 aria-label="Notifications"
//               >
//                 ♧

//                 <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
//               </button>

//               {/* SETTINGS */}
//               <button
//                 type="button"
//                 className="hidden h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 sm:flex"
//                 aria-label="Settings"
//               >
//                 ⚙
//               </button>

//               {/* USER */}
//               <div className="flex items-center gap-2 border-l border-slate-200 pl-3">
//                 <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dff1e8] text-xs font-bold text-[#176b57]">
//                   V
//                 </div>

//                 <div className="hidden md:block">
//                   <p className="text-xs font-semibold text-slate-800">
//                     VIP Admin
//                   </p>

//                   <p className="text-[10px] text-slate-400">
//                     Administrator
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* PAGE CONTENT */}
//         <main className="min-h-[calc(100vh-64px)]">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }

// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { useState } from "react";
// import { LogOut, Users } from "lucide-react";
// import ModuleSwitcher from "@/core/components/ModuleSwitcher";
// import { useAuth } from "@/core/auth/AuthContext";

// type NavItem = {
//   label: string;
//   href: string;
//   icon: string;
// };

// const navigation: NavItem[] = [
//   { label: "Dashboard", href: "/interior/dashboard", icon: "▦" },
//   { label: "CRM / Leads", href: "/interior/crm", icon: "◉" },
//   { label: "Clients", href: "/interior/clients", icon: "♙" },
//   { label: "Quotations", href: "/interior/quotations", icon: "▤" },
//   { label: "Contracts", href: "/interior/contracts", icon: "▥" },
//   { label: "Projects", href: "/interior/projects", icon: "▣" },
//   { label: "HRMS", href: "/interior/hrms", icon: "♟" },
//   { label: "Vendors", href: "/interior/vendors", icon: "◆" },
//   { label: "Payments", href: "/interior/payments", icon: "₹" },
//   { label: "Reports", href: "/interior/reports", icon: "▥" },
// ];

// const furnitureNavigation: NavItem[] = [
//   { label: "Dashboard", href: "/furniture/dashboard", icon: "▦" },
//   { label: "Products", href: "/furniture/products", icon: "▤" },
//   { label: "Inventory", href: "/furniture/inventory", icon: "▣" },
//   { label: "Customers", href: "/furniture/customers", icon: "♙" },
//   { label: "Enquiries", href: "/furniture/enquiries", icon: "◉" },
//   { label: "Orders", href: "/furniture/orders", icon: "▥" },
//   { label: "Payments", href: "/furniture/payments", icon: "₹" },
//   { label: "Expenses", href: "/furniture/expenses", icon: "◆" },
//   { label: "Reports", href: "/furniture/reports", icon: "▥" },
// ];

// function getPageTitle(pathname: string) {
//   const allItems = [...navigation, ...furnitureNavigation];
//   const item = allItems.find(
//     (nav) => pathname === nav.href || pathname.startsWith(`${nav.href}/`)
//   );
//   return item?.label ?? "Dashboard";
// }

// function Logo() {
//   return (
//     <div className="flex items-center gap-2">
//       <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#176b57] text-white shadow-sm">
//         <span className="text-lg font-bold">A</span>
//       </div>
//       <div className="leading-none">
//         <div className="text-[20px] font-bold tracking-tight text-[#1f2937]">
//           Akrish
//         </div>
//         <div className="mt-1 text-[8px] font-medium uppercase tracking-[0.16em] text-slate-400">
//           Furniture and Interior
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function ERPLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();
//   const router = useRouter();
//   const { user, isAdmin, logout } = useAuth();

//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const isFurniture = pathname.startsWith("/furniture");
//   const currentNavigation = isFurniture ? furnitureNavigation : navigation;
//   const pageTitle = getPageTitle(pathname);
//   const moduleName = isFurniture ? "Furniture ERP" : "Interior ERP";

//   const handleLogout = () => {
//     logout();
//     router.push("/login");
//   };

//   const displayName = user?.name || "User";
//   const displayRole = user?.role
//     ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
//     : "Staff";
//   const avatarLetter = displayName.charAt(0).toUpperCase();

//   return (
//     <div className="min-h-screen bg-[#f7f9f8] text-slate-800">
//       {/* MOBILE OVERLAY */}
//       {sidebarOpen && (
//         <button
//           type="button"
//           aria-label="Close sidebar"
//           onClick={() => setSidebarOpen(false)}
//           className="fixed inset-0 z-40 bg-black/30 lg:hidden"
//         />
//       )}

//       {/* SIDEBAR */}
//       <aside
//         className={`fixed inset-y-0 left-0 z-50 flex w-[235px] flex-col border-r border-slate-200 bg-white transition-transform duration-200 ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
//         }`}
//       >
//         {/* LOGO */}
//         <div className="flex h-[72px] items-center border-b border-slate-100 px-5">
//           <Logo />
//           <button
//             type="button"
//             onClick={() => setSidebarOpen(false)}
//             className="ml-auto flex h-8 w-8 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 lg:hidden"
//           >
//             ×
//           </button>
//         </div>

//         {/* MODULE SWITCHER (only shows when user has access to both modules) */}
//         <div className="px-3 pt-4">
//           <ModuleSwitcher />
//         </div>

//         {/* NAVIGATION */}
//         <nav className="mt-4 flex-1 overflow-y-auto px-3 pb-4">
//           <p className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
//             {isFurniture ? "Furniture Management" : "Interior Management"}
//           </p>

//           <div className="space-y-1">
//             {currentNavigation.map((item) => {
//               const active =
//                 pathname === item.href || pathname.startsWith(`${item.href}/`);

//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setSidebarOpen(false)}
//                   className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition ${
//                     active
//                       ? "bg-[#e8f5ef] text-[#176b57]"
//                       : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                   }`}
//                 >
//                   <span
//                     className={`flex h-6 w-6 items-center justify-center rounded-md text-[13px] ${
//                       active
//                         ? "bg-[#176b57] text-white"
//                         : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
//                     }`}
//                   >
//                     {item.icon}
//                   </span>
//                   <span>{item.label}</span>
//                   {active && (
//                     <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#176b57]" />
//                   )}
//                 </Link>
//               );
//             })}

//             {/* Admin-only: Staff Users */}
//             {isAdmin && (
//               <>
//                 <div className="my-3 border-t border-slate-100" />
//                 <p className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
//                   Administration
//                 </p>
//                 <Link
//                   href="/admin/users"
//                   onClick={() => setSidebarOpen(false)}
//                   className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition ${
//                     pathname.startsWith("/admin/users")
//                       ? "bg-[#e8f5ef] text-[#176b57]"
//                       : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                   }`}
//                 >
//                   <span
//                     className={`flex h-6 w-6 items-center justify-center rounded-md ${
//                       pathname.startsWith("/admin/users")
//                         ? "bg-[#176b57] text-white"
//                         : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
//                     }`}
//                   >
//                     <Users size={14} />
//                   </span>
//                   <span>Staff Users</span>
//                 </Link>
//               </>
//             )}
//           </div>
//         </nav>

//         {/* SIDEBAR FOOTER */}
//         <div className="border-t border-slate-100 p-3">
//           <div className="rounded-lg bg-slate-50 p-3">
//             <div className="flex items-center gap-2">
//               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#176b57] text-xs font-bold text-white">
//                 {avatarLetter}
//               </div>
//               <div className="min-w-0 flex-1">
//                 <p className="truncate text-xs font-semibold text-slate-800">
//                   {displayName}
//                 </p>
//                 <p className="truncate text-[10px] text-slate-400">
//                   {displayRole}
//                 </p>
//               </div>
//               <button
//                 type="button"
//                 onClick={handleLogout}
//                 className="flex h-7 w-7 items-center justify-center rounded-md text-slate-400 hover:bg-slate-200 hover:text-slate-600"
//                 title="Logout"
//               >
//                 <LogOut size={14} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </aside>

//       {/* MAIN AREA */}
//       <div className="min-h-screen lg:pl-[235px]">
//         {/* TOP HEADER */}
//         <header className="sticky top-0 z-30 h-[64px] border-b border-slate-200 bg-white/95 backdrop-blur">
//           <div className="flex h-full items-center justify-between px-4 md:px-6">
//             <div className="flex items-center gap-3">
//               {/* MOBILE MENU */}
//               <button
//                 type="button"
//                 onClick={() => setSidebarOpen(true)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 lg:hidden"
//                 aria-label="Open navigation"
//               >
//                 ☰
//               </button>

//               <div>
//                 <p className="text-[10px] uppercase tracking-wide text-slate-400">
//                   {moduleName}
//                 </p>
//                 <h1 className="text-sm font-semibold text-slate-800">
//                   {pageTitle}
//                 </h1>
//               </div>
//             </div>

//             {/* HEADER ACTIONS */}
//             <div className="flex items-center gap-2 md:gap-4">
//               {/* Search */}
//               <button
//                 type="button"
//                 onClick={() => {
//                   const q = prompt("Search products, orders, customers...");
//                   if (q?.trim()) {
//                     router.push(`/furniture/products?search=${encodeURIComponent(q.trim())}`);
//                   }
//                 }}
//                 className="hidden h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 sm:flex"
//                 aria-label="Search"
//               >
//                 ⌕
//               </button>

//               {/* Notifications */}
//               <button
//                 type="button"
//                 onClick={() => alert("Notifications panel coming soon")}
//                 className="relative flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
//                 aria-label="Notifications"
//               >
//                 ♧
//                 <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
//               </button>

//               {/* Settings */}
//               <button
//                 type="button"
//                 onClick={() => router.push("/admin/users")}
//                 className="hidden h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 sm:flex"
//                 aria-label="Settings"
//               >
//                 ⚙
//               </button>

//               {/* USER */}
//               <div className="flex items-center gap-2 border-l border-slate-200 pl-3">
//                 <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dff1e8] text-xs font-bold text-[#176b57]">
//                   {avatarLetter}
//                 </div>
//                 <div className="hidden md:block">
//                   <p className="text-xs font-semibold text-slate-800">{displayName}</p>
//                   <p className="text-[10px] text-slate-400">{displayRole}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* PAGE CONTENT */}
//         <main className="min-h-[calc(100vh-64px)]">{children}</main>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { LogOut, Users, Search, Bell, Settings, X } from "lucide-react";
// import ModuleSwitcher from "@/core/components/ModuleSwitcher";
// import { useAuth } from "@/core/auth/AuthContext";

// type NavItem = {
//   label: string;
//   href: string;
//   icon: string;
// };

// const navigation: NavItem[] = [
//   { label: "Dashboard", href: "/interior/dashboard", icon: "▦" },
//   { label: "CRM / Leads", href: "/interior/crm", icon: "◉" },
//   { label: "Clients", href: "/interior/clients", icon: "♙" },
//   { label: "Quotations", href: "/interior/quotations", icon: "▤" },
//   { label: "Contracts", href: "/interior/contracts", icon: "▥" },
//   { label: "Projects", href: "/interior/projects", icon: "▣" },
//   { label: "HRMS", href: "/interior/hrms", icon: "♟" },
//   { label: "Vendors", href: "/interior/vendors", icon: "◆" },
//   { label: "Payments", href: "/interior/payments", icon: "₹" },
//   { label: "Reports", href: "/interior/reports", icon: "▥" },
// ];

// const furnitureNavigation: NavItem[] = [
//   { label: "Dashboard", href: "/furniture/dashboard", icon: "▦" },
//   { label: "Products", href: "/furniture/products", icon: "▤" },
//   { label: "Inventory", href: "/furniture/inventory", icon: "▣" },
//   { label: "Customers", href: "/furniture/customers", icon: "♙" },
//   { label: "Enquiries", href: "/furniture/enquiries", icon: "◉" },
//   { label: "Orders", href: "/furniture/orders", icon: "▥" },
//   { label: "Payments", href: "/furniture/payments", icon: "₹" },
//   { label: "Expenses", href: "/furniture/expenses", icon: "◆" },
//   { label: "Reports", href: "/furniture/reports", icon: "▥" },
// ];

// type NotificationItem = {
//   id: string;
//   title: string;
//   body: string;
//   href: string;
//   time: string;
//   read: boolean;
// };

// function getPageTitle(pathname: string) {
//   const allItems = [...navigation, ...furnitureNavigation];
//   const item = allItems.find(
//     (nav) => pathname === nav.href || pathname.startsWith(`${nav.href}/`)
//   );
//   if (pathname.startsWith("/admin/users")) return "Staff Users";
//   return item?.label ?? "Dashboard";
// }

// function Logo() {
//   return (
//     <div className="flex items-center gap-2">
//       <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#176b57] text-white shadow-sm">
//         <span className="text-lg font-bold">A</span>
//       </div>
//       <div className="leading-none">
//         <div className="text-[20px] font-bold tracking-tight text-[#1f2937]">
//           Akrish
//         </div>
//         <div className="mt-1 text-[8px] font-medium uppercase tracking-[0.16em] text-slate-400">
//           Furniture and Interior
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function ERPLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();
//   const router = useRouter();
//   const { user, isAdmin, logout } = useAuth();

//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [notifOpen, setNotifOpen] = useState(false);
//   const [settingsOpen, setSettingsOpen] = useState(false);
//   const [userMenuOpen, setUserMenuOpen] = useState(false);

//   const searchInputRef = useRef<HTMLInputElement>(null);
//   const headerActionsRef = useRef<HTMLDivElement>(null);

//   const isFurniture = pathname.startsWith("/furniture");
//   const currentNavigation = isFurniture ? furnitureNavigation : navigation;
//   const pageTitle = getPageTitle(pathname);
//   const moduleName = isFurniture ? "Furniture ERP" : "Interior ERP";
//   const moduleKey = isFurniture ? "furniture" : "interior";

//   // Remember active module for other pages (e.g. admin users default checkbox)
//   useEffect(() => {
//     try {
//       if (pathname.startsWith("/furniture")) {
//         localStorage.setItem("akrish_active_module", "furniture");
//       } else if (pathname.startsWith("/interior")) {
//         localStorage.setItem("akrish_active_module", "interior");
//       }
//     } catch {
//       /* ignore */
//     }
//   }, [pathname]);

//   const [notifications, setNotifications] = useState<NotificationItem[]>([
//     {
//       id: "1",
//       title: "New enquiry",
//       body: "A new lead was added in CRM",
//       href: isFurniture ? "/furniture/enquiries" : "/interior/crm",
//       time: "Just now",
//       read: false,
//     },
//     {
//       id: "2",
//       title: "Payment reminder",
//       body: "Pending collections need follow-up",
//       href: isFurniture ? "/furniture/payments" : "/interior/payments",
//       time: "1h ago",
//       read: false,
//     },
//     {
//       id: "3",
//       title: "Reports ready",
//       body: "Open analytics for this module",
//       href: isFurniture ? "/furniture/reports" : "/interior/reports",
//       time: "Today",
//       read: true,
//     },
//   ]);

//   const unreadCount = notifications.filter((n) => !n.read).length;

//   // Close dropdowns on outside click
//   useEffect(() => {
//     function onDocClick(e: MouseEvent) {
//       if (
//         headerActionsRef.current &&
//         !headerActionsRef.current.contains(e.target as Node)
//       ) {
//         setNotifOpen(false);
//         setSettingsOpen(false);
//         setUserMenuOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", onDocClick);
//     return () => document.removeEventListener("mousedown", onDocClick);
//   }, []);

//   // Focus search input when opened
//   useEffect(() => {
//     if (searchOpen) {
//       setTimeout(() => searchInputRef.current?.focus(), 50);
//     }
//   }, [searchOpen]);

//   // Esc closes panels
//   useEffect(() => {
//     function onKey(e: KeyboardEvent) {
//       if (e.key === "Escape") {
//         setSearchOpen(false);
//         setNotifOpen(false);
//         setSettingsOpen(false);
//         setUserMenuOpen(false);
//       }
//     }
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   const searchTargets = useMemo(() => {
//     const base = isFurniture
//       ? [
//           { label: "Products", href: "/furniture/products" },
//           { label: "Inventory", href: "/furniture/inventory" },
//           { label: "Customers", href: "/furniture/customers" },
//           { label: "Enquiries", href: "/furniture/enquiries" },
//           { label: "Orders", href: "/furniture/orders" },
//           { label: "Payments", href: "/furniture/payments" },
//           { label: "Expenses", href: "/furniture/expenses" },
//           { label: "Reports", href: "/furniture/reports" },
//         ]
//       : [
//           { label: "CRM / Leads", href: "/interior/crm" },
//           { label: "Clients", href: "/interior/clients" },
//           { label: "Quotations", href: "/interior/quotations" },
//           { label: "Contracts", href: "/interior/contracts" },
//           { label: "Projects", href: "/interior/projects" },
//           { label: "HRMS", href: "/interior/hrms" },
//           { label: "Vendors", href: "/interior/vendors" },
//           { label: "Payments", href: "/interior/payments" },
//           { label: "Reports", href: "/interior/reports" },
//         ];

//     if (isAdmin) {
//       base.push({ label: "Staff Users", href: "/admin/users" });
//     }
//     return base;
//   }, [isFurniture, isAdmin]);

//   const filteredSearch = useMemo(() => {
//     const q = searchQuery.toLowerCase().trim();
//     if (!q) return searchTargets;
//     return searchTargets.filter((t) => t.label.toLowerCase().includes(q));
//   }, [searchQuery, searchTargets]);

//   function runSearch(e?: React.FormEvent) {
//     e?.preventDefault();
//     const q = searchQuery.trim();
//     if (!q) return;

//     // Prefer matching a page, else go to module search landing
//     const match = filteredSearch[0];
//     if (match) {
//       router.push(`${match.href}?search=${encodeURIComponent(q)}`);
//     } else if (isFurniture) {
//       router.push(`/furniture/products?search=${encodeURIComponent(q)}`);
//     } else {
//       router.push(`/interior/crm?search=${encodeURIComponent(q)}`);
//     }
//     setSearchOpen(false);
//     setSearchQuery("");
//   }

//   function openNotification(n: NotificationItem) {
//     setNotifications((list) =>
//       list.map((item) =>
//         item.id === n.id ? { ...item, read: true } : item
//       )
//     );
//     setNotifOpen(false);
//     router.push(n.href);
//   }

//   function markAllRead() {
//     setNotifications((list) => list.map((n) => ({ ...n, read: true })));
//   }

//   const handleLogout = () => {
//     logout();
//     router.push("/login");
//   };

//   const displayName = user?.name || "User";
//   const displayRole = user?.role
//     ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
//     : "Staff";
//   const avatarLetter = displayName.charAt(0).toUpperCase();

//   return (
//     <div className="min-h-screen bg-[#f7f9f8] text-slate-800">
//       {/* MOBILE OVERLAY */}
//       {sidebarOpen && (
//         <button
//           type="button"
//           aria-label="Close sidebar"
//           onClick={() => setSidebarOpen(false)}
//           className="fixed inset-0 z-40 bg-black/30 lg:hidden"
//         />
//       )}

//       {/* SIDEBAR */}
//       <aside
//         className={`fixed inset-y-0 left-0 z-50 flex w-[235px] flex-col border-r border-slate-200 bg-white transition-transform duration-200 ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
//         }`}
//       >
//         <div className="flex h-[72px] items-center border-b border-slate-100 px-5">
//           <Logo />
//           <button
//             type="button"
//             onClick={() => setSidebarOpen(false)}
//             className="ml-auto flex h-8 w-8 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 lg:hidden"
//           >
//             ×
//           </button>
//         </div>

//         <div className="px-3 pt-4">
//           <ModuleSwitcher />
//         </div>

//         <nav className="mt-4 flex-1 overflow-y-auto px-3 pb-4">
//           <p className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
//             {isFurniture ? "Furniture Management" : "Interior Management"}
//           </p>

//           <div className="space-y-1">
//             {currentNavigation.map((item) => {
//               const active =
//                 pathname === item.href || pathname.startsWith(`${item.href}/`);

//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setSidebarOpen(false)}
//                   className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition ${
//                     active
//                       ? "bg-[#e8f5ef] text-[#176b57]"
//                       : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                   }`}
//                 >
//                   <span
//                     className={`flex h-6 w-6 items-center justify-center rounded-md text-[13px] ${
//                       active
//                         ? "bg-[#176b57] text-white"
//                         : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
//                     }`}
//                   >
//                     {item.icon}
//                   </span>
//                   <span>{item.label}</span>
//                   {active && (
//                     <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#176b57]" />
//                   )}
//                 </Link>
//               );
//             })}

//             {isAdmin && (
//               <>
//                 <div className="my-3 border-t border-slate-100" />
//                 <p className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
//                   Administration
//                 </p>
//                 <Link
//                   href="/admin/users"
//                   onClick={() => setSidebarOpen(false)}
//                   className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition ${
//                     pathname.startsWith("/admin/users")
//                       ? "bg-[#e8f5ef] text-[#176b57]"
//                       : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                   }`}
//                 >
//                   <span
//                     className={`flex h-6 w-6 items-center justify-center rounded-md ${
//                       pathname.startsWith("/admin/users")
//                         ? "bg-[#176b57] text-white"
//                         : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
//                     }`}
//                   >
//                     <Users size={14} />
//                   </span>
//                   <span>Staff Users</span>
//                 </Link>
//               </>
//             )}
//           </div>
//         </nav>

//         <div className="border-t border-slate-100 p-3">
//           <div className="rounded-lg bg-slate-50 p-3">
//             <div className="flex items-center gap-2">
//               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#176b57] text-xs font-bold text-white">
//                 {avatarLetter}
//               </div>
//               <div className="min-w-0 flex-1">
//                 <p className="truncate text-xs font-semibold text-slate-800">
//                   {displayName}
//                 </p>
//                 <p className="truncate text-[10px] text-slate-400">
//                   {displayRole}
//                 </p>
//               </div>
//               <button
//                 type="button"
//                 onClick={handleLogout}
//                 className="flex h-7 w-7 items-center justify-center rounded-md text-slate-400 hover:bg-slate-200 hover:text-slate-600"
//                 title="Logout"
//               >
//                 <LogOut size={14} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </aside>

//       {/* MAIN AREA */}
//       <div className="min-h-screen lg:pl-[235px]">
//         <header className="sticky top-0 z-30 h-[64px] border-b border-slate-200 bg-white/95 backdrop-blur">
//           <div className="flex h-full items-center justify-between px-4 md:px-6">
//             <div className="flex items-center gap-3">
//               <button
//                 type="button"
//                 onClick={() => setSidebarOpen(true)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 lg:hidden"
//                 aria-label="Open navigation"
//               >
//                 ☰
//               </button>

//               <div>
//                 <p className="text-[10px] uppercase tracking-wide text-slate-400">
//                   {moduleName}
//                 </p>
//                 <h1 className="text-sm font-semibold text-slate-800">
//                   {pageTitle}
//                 </h1>
//               </div>
//             </div>

//             {/* HEADER ACTIONS */}
//             <div
//               ref={headerActionsRef}
//               className="relative flex items-center gap-1 md:gap-2"
//             >
//               {/* Search */}
//               <button
//                 type="button"
//                 onClick={() => {
//                   setSearchOpen(true);
//                   setNotifOpen(false);
//                   setSettingsOpen(false);
//                   setUserMenuOpen(false);
//                 }}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
//                 aria-label="Search"
//               >
//                 <Search size={18} />
//               </button>

//               {/* Notifications */}
//               <div className="relative">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setNotifOpen((v) => !v);
//                     setSettingsOpen(false);
//                     setUserMenuOpen(false);
//                   }}
//                   className="relative flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
//                   aria-label="Notifications"
//                 >
//                   <Bell size={18} />
//                   {unreadCount > 0 && (
//                     <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
//                   )}
//                 </button>

//                 {notifOpen && (
//                   <div className="absolute right-0 z-50 mt-2 w-80 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
//                     <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
//                       <p className="text-sm font-semibold text-slate-800">
//                         Notifications
//                       </p>
//                       {unreadCount > 0 && (
//                         <button
//                           type="button"
//                           onClick={markAllRead}
//                           className="text-xs font-medium text-[#176b57] hover:underline"
//                         >
//                           Mark all read
//                         </button>
//                       )}
//                     </div>
//                     <div className="max-h-72 overflow-y-auto">
//                       {notifications.map((n) => (
//                         <button
//                           key={n.id}
//                           type="button"
//                           onClick={() => openNotification(n)}
//                           className={`flex w-full flex-col gap-0.5 border-b border-slate-50 px-4 py-3 text-left hover:bg-slate-50 ${
//                             n.read ? "opacity-70" : "bg-[#f4fbf8]"
//                           }`}
//                         >
//                           <div className="flex items-center justify-between gap-2">
//                             <p className="text-sm font-semibold text-slate-800">
//                               {n.title}
//                             </p>
//                             <span className="text-[10px] text-slate-400">
//                               {n.time}
//                             </span>
//                           </div>
//                           <p className="text-xs text-slate-500">{n.body}</p>
//                         </button>
//                       ))}
//                     </div>
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setNotifOpen(false);
//                         router.push(
//                           isFurniture
//                             ? "/furniture/dashboard"
//                             : "/interior/dashboard"
//                         );
//                       }}
//                       className="w-full border-t border-slate-100 px-4 py-2.5 text-center text-xs font-semibold text-[#176b57] hover:bg-slate-50"
//                     >
//                       View dashboard
//                     </button>
//                   </div>
//                 )}
//               </div>

//               {/* Settings */}
//               <div className="relative hidden sm:block">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSettingsOpen((v) => !v);
//                     setNotifOpen(false);
//                     setUserMenuOpen(false);
//                   }}
//                   className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
//                   aria-label="Settings"
//                 >
//                   <Settings size={18} />
//                 </button>

//                 {settingsOpen && (
//                   <div className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
//                     {isAdmin && (
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setSettingsOpen(false);
//                           router.push("/admin/users");
//                         }}
//                         className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                       >
//                         <Users size={14} />
//                         Staff Users
//                       </button>
//                     )}
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         router.push(
//                           isFurniture
//                             ? "/furniture/reports"
//                             : "/interior/reports"
//                         );
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                     >
//                       Reports
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         router.push(
//                           isFurniture
//                             ? "/furniture/dashboard"
//                             : "/interior/dashboard"
//                         );
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                     >
//                       {isFurniture ? "Furniture" : "Interior"} Dashboard
//                     </button>
//                     <div className="my-1 border-t border-slate-100" />
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         handleLogout();
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
//                     >
//                       <LogOut size={14} />
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>

//               {/* USER */}
//               <div className="relative border-l border-slate-200 pl-3">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setUserMenuOpen((v) => !v);
//                     setNotifOpen(false);
//                     setSettingsOpen(false);
//                   }}
//                   className="flex items-center gap-2 rounded-lg px-1 py-1 hover:bg-slate-50"
//                 >
//                   <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dff1e8] text-xs font-bold text-[#176b57]">
//                     {avatarLetter}
//                   </div>
//                   <div className="hidden text-left md:block">
//                     <p className="text-xs font-semibold text-slate-800">
//                       {displayName}
//                     </p>
//                     <p className="text-[10px] text-slate-400">{displayRole}</p>
//                   </div>
//                 </button>

//                 {userMenuOpen && (
//                   <div className="absolute right-0 z-50 mt-2 w-52 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
//                     <div className="border-b border-slate-100 px-4 py-3">
//                       <p className="text-sm font-semibold text-slate-800">
//                         {displayName}
//                       </p>
//                       <p className="text-xs text-slate-400">{displayRole}</p>
//                       <p className="mt-1 text-[10px] uppercase tracking-wide text-[#176b57]">
//                         {moduleKey} module
//                       </p>
//                     </div>
//                     {isAdmin && (
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setUserMenuOpen(false);
//                           router.push("/admin/users");
//                         }}
//                         className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                       >
//                         <Users size={14} />
//                         Manage users
//                       </button>
//                     )}
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setUserMenuOpen(false);
//                         handleLogout();
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
//                     >
//                       <LogOut size={14} />
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* SEARCH MODAL */}
//         {searchOpen && (
//           <div className="fixed inset-0 z-[60] flex items-start justify-center bg-black/40 p-4 pt-[12vh]">
//             <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">
//               <form
//                 onSubmit={runSearch}
//                 className="flex items-center gap-2 border-b border-slate-100 px-4 py-3"
//               >
//                 <Search size={18} className="text-slate-400" />
//                 <input
//                   ref={searchInputRef}
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder={`Search in ${moduleName}…`}
//                   className="h-10 flex-1 border-0 bg-transparent text-sm outline-none"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearchOpen(false);
//                     setSearchQuery("");
//                   }}
//                   className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100"
//                 >
//                   <X size={16} />
//                 </button>
//               </form>
//               <div className="max-h-72 overflow-y-auto py-2">
//                 {filteredSearch.length === 0 ? (
//                   <p className="px-4 py-6 text-center text-sm text-slate-500">
//                     No matching pages
//                   </p>
//                 ) : (
//                   filteredSearch.map((item) => (
//                     <button
//                       key={item.href}
//                       type="button"
//                       onClick={() => {
//                         const q = searchQuery.trim();
//                         router.push(
//                           q
//                             ? `${item.href}?search=${encodeURIComponent(q)}`
//                             : item.href
//                         );
//                         setSearchOpen(false);
//                         setSearchQuery("");
//                       }}
//                       className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                     >
//                       <span>{item.label}</span>
//                       <span className="text-[10px] text-slate-400">
//                         {item.href}
//                       </span>
//                     </button>
//                   ))
//                 )}
//               </div>
//               <div className="border-t border-slate-100 px-4 py-2 text-[11px] text-slate-400">
//                 Enter to open · Esc to close
//               </div>
//             </div>
//           </div>
//         )}

//         <main className="min-h-[calc(100vh-64px)]">{children}</main>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import {
//   LogOut,
//   Users,
//   Search,
//   Bell,
//   Settings,
//   X,
//   Sofa,
//   LayoutDashboard,
// } from "lucide-react";
// import { useAuth } from "@/core/auth/AuthContext";

// type NavItem = {
//   label: string;
//   href: string;
//   icon: string;
// };

// const navigation: NavItem[] = [
//   { label: "Dashboard", href: "/interior/dashboard", icon: "▦" },
//   { label: "CRM / Leads", href: "/interior/crm", icon: "◉" },
//   { label: "Clients", href: "/interior/clients", icon: "♙" },
//   { label: "Quotations", href: "/interior/quotations", icon: "▤" },
//   { label: "Contracts", href: "/interior/contracts", icon: "▥" },
//   { label: "Projects", href: "/interior/projects", icon: "▣" },
//   { label: "HRMS", href: "/interior/hrms", icon: "♟" },
//   { label: "Vendors", href: "/interior/vendors", icon: "◆" },
//   { label: "Payments", href: "/interior/payments", icon: "₹" },
//   { label: "Reports", href: "/interior/reports", icon: "▥" },
// ];

// const furnitureNavigation: NavItem[] = [
//   { label: "Dashboard", href: "/furniture/dashboard", icon: "▦" },
//   { label: "Products", href: "/furniture/products", icon: "▤" },
//   { label: "Inventory", href: "/furniture/inventory", icon: "▣" },
//   { label: "Customers", href: "/furniture/customers", icon: "♙" },
//   { label: "Enquiries", href: "/furniture/enquiries", icon: "◉" },
//   { label: "Orders", href: "/furniture/orders", icon: "▥" },
//   { label: "Payments", href: "/furniture/payments", icon: "₹" },
//   { label: "Expenses", href: "/furniture/expenses", icon: "◆" },
//   { label: "Reports", href: "/furniture/reports", icon: "▥" },
// ];

// type NotificationItem = {
//   id: string;
//   title: string;
//   body: string;
//   href: string;
//   time: string;
//   read: boolean;
// };

// function getPageTitle(pathname: string) {
//   const allItems = [...navigation, ...furnitureNavigation];
//   const item = allItems.find(
//     (nav) => pathname === nav.href || pathname.startsWith(`${nav.href}/`)
//   );
//   if (pathname.startsWith("/admin/users")) return "Staff Users";
//   return item?.label ?? "Dashboard";
// }

// function Logo() {
//   return (
//     <div className="flex items-center gap-2">
//       <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#176b57] text-white shadow-sm">
//         <span className="text-lg font-bold">A</span>
//       </div>
//       <div className="leading-none">
//         <div className="text-[20px] font-bold tracking-tight text-[#1f2937]">
//           Akrish
//         </div>
//         <div className="mt-1 text-[8px] font-medium uppercase tracking-[0.16em] text-slate-400">
//           Furniture and Interior
//         </div>
//       </div>
//     </div>
//   );
// }

// /** Compact Interior ↔ Furniture switcher for the header (top-right). */
// function HeaderModuleSwitcher({
//   isFurniture,
// }: {
//   isFurniture: boolean;
// }) {
//   return (
//     <div
//       className="flex items-center rounded-full border border-slate-200 bg-slate-50 p-0.5 shadow-sm"
//       role="group"
//       aria-label="Switch ERP module"
//     >
//       <Link
//         href="/interior/dashboard"
//         className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
//           !isFurniture
//             ? "bg-white text-[#176b57] shadow-sm"
//             : "text-slate-500 hover:text-slate-700"
//         }`}
//         title="Interior ERP"
//       >
//         <LayoutDashboard size={14} className="shrink-0" />
//         <span className="hidden sm:inline">Interior</span>
//       </Link>
//       <Link
//         href="/furniture/dashboard"
//         className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
//           isFurniture
//             ? "bg-white text-[#176b57] shadow-sm"
//             : "text-slate-500 hover:text-slate-700"
//         }`}
//         title="Furniture ERP — Products & Sales"
//       >
//         <Sofa size={14} className="shrink-0" />
//         <span className="hidden sm:inline">Furniture</span>
//       </Link>
//     </div>
//   );
// }

// export default function ERPLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();
//   const router = useRouter();
//   const { user, isAdmin, logout } = useAuth();

//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [notifOpen, setNotifOpen] = useState(false);
//   const [settingsOpen, setSettingsOpen] = useState(false);
//   const [userMenuOpen, setUserMenuOpen] = useState(false);

//   const searchInputRef = useRef<HTMLInputElement>(null);
//   const headerActionsRef = useRef<HTMLDivElement>(null);

//   const isFurniture = pathname.startsWith("/furniture");
//   const currentNavigation = isFurniture ? furnitureNavigation : navigation;
//   const pageTitle = getPageTitle(pathname);
//   const moduleName = isFurniture ? "Furniture ERP" : "Interior ERP";
//   const moduleKey = isFurniture ? "furniture" : "interior";

//   // Remember active module for other pages (e.g. admin users default checkbox)
//   useEffect(() => {
//     try {
//       if (pathname.startsWith("/furniture")) {
//         localStorage.setItem("akrish_active_module", "furniture");
//       } else if (pathname.startsWith("/interior")) {
//         localStorage.setItem("akrish_active_module", "interior");
//       }
//     } catch {
//       /* ignore */
//     }
//   }, [pathname]);

//   // No dummy notifications — start empty until real data is wired
//   const [notifications, setNotifications] = useState<NotificationItem[]>([]);

//   const unreadCount = notifications.filter((n) => !n.read).length;

//   // Close dropdowns on outside click
//   useEffect(() => {
//     function onDocClick(e: MouseEvent) {
//       if (
//         headerActionsRef.current &&
//         !headerActionsRef.current.contains(e.target as Node)
//       ) {
//         setNotifOpen(false);
//         setSettingsOpen(false);
//         setUserMenuOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", onDocClick);
//     return () => document.removeEventListener("mousedown", onDocClick);
//   }, []);

//   // Focus search input when opened
//   useEffect(() => {
//     if (searchOpen) {
//       setTimeout(() => searchInputRef.current?.focus(), 50);
//     }
//   }, [searchOpen]);

//   // Esc closes panels
//   useEffect(() => {
//     function onKey(e: KeyboardEvent) {
//       if (e.key === "Escape") {
//         setSearchOpen(false);
//         setNotifOpen(false);
//         setSettingsOpen(false);
//         setUserMenuOpen(false);
//       }
//     }
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   const searchTargets = useMemo(() => {
//     const base = isFurniture
//       ? [
//           { label: "Products", href: "/furniture/products" },
//           { label: "Inventory", href: "/furniture/inventory" },
//           { label: "Customers", href: "/furniture/customers" },
//           { label: "Enquiries", href: "/furniture/enquiries" },
//           { label: "Orders", href: "/furniture/orders" },
//           { label: "Payments", href: "/furniture/payments" },
//           { label: "Expenses", href: "/furniture/expenses" },
//           { label: "Reports", href: "/furniture/reports" },
//         ]
//       : [
//           { label: "CRM / Leads", href: "/interior/crm" },
//           { label: "Clients", href: "/interior/clients" },
//           { label: "Quotations", href: "/interior/quotations" },
//           { label: "Contracts", href: "/interior/contracts" },
//           { label: "Projects", href: "/interior/projects" },
//           { label: "HRMS", href: "/interior/hrms" },
//           { label: "Vendors", href: "/interior/vendors" },
//           { label: "Payments", href: "/interior/payments" },
//           { label: "Reports", href: "/interior/reports" },
//         ];

//     if (isAdmin) {
//       base.push({ label: "Staff Users", href: "/admin/users" });
//     }
//     return base;
//   }, [isFurniture, isAdmin]);

//   const filteredSearch = useMemo(() => {
//     const q = searchQuery.toLowerCase().trim();
//     if (!q) return searchTargets;
//     return searchTargets.filter((t) => t.label.toLowerCase().includes(q));
//   }, [searchQuery, searchTargets]);

//   function runSearch(e?: React.FormEvent) {
//     e?.preventDefault();
//     const q = searchQuery.trim();
//     if (!q) return;

//     const match = filteredSearch[0];
//     if (match) {
//       router.push(`${match.href}?search=${encodeURIComponent(q)}`);
//     } else if (isFurniture) {
//       router.push(`/furniture/products?search=${encodeURIComponent(q)}`);
//     } else {
//       router.push(`/interior/crm?search=${encodeURIComponent(q)}`);
//     }
//     setSearchOpen(false);
//     setSearchQuery("");
//   }

//   function openNotification(n: NotificationItem) {
//     setNotifications((list) =>
//       list.map((item) =>
//         item.id === n.id ? { ...item, read: true } : item
//       )
//     );
//     setNotifOpen(false);
//     router.push(n.href);
//   }

//   function markAllRead() {
//     setNotifications((list) => list.map((n) => ({ ...n, read: true })));
//   }

//   const handleLogout = () => {
//     logout();
//     router.push("/login");
//   };

//   const displayName = user?.name || "User";
//   const displayRole = user?.role
//     ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
//     : "Staff";
//   const avatarLetter = displayName.charAt(0).toUpperCase();

//   return (
//     <div className="min-h-screen bg-[#f7f9f8] text-slate-800">
//       {/* MOBILE OVERLAY */}
//       {sidebarOpen && (
//         <button
//           type="button"
//           aria-label="Close sidebar"
//           onClick={() => setSidebarOpen(false)}
//           className="fixed inset-0 z-40 bg-black/30 lg:hidden"
//         />
//       )}

//       {/* SIDEBAR */}
//       <aside
//         className={`fixed inset-y-0 left-0 z-50 flex w-[235px] flex-col border-r border-slate-200 bg-white transition-transform duration-200 ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
//         }`}
//       >
//         <div className="flex h-[72px] items-center border-b border-slate-100 px-5">
//           <Logo />
//           <button
//             type="button"
//             onClick={() => setSidebarOpen(false)}
//             className="ml-auto flex h-8 w-8 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 lg:hidden"
//           >
//             ×
//           </button>
//         </div>

//         {/* ModuleSwitcher removed from sidebar — switcher is in header top-right */}

//         <nav className="mt-4 flex-1 overflow-y-auto px-3 pb-4">
//           <p className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
//             {isFurniture ? "Furniture Management" : "Interior Management"}
//           </p>

//           <div className="space-y-1">
//             {currentNavigation.map((item) => {
//               const active =
//                 pathname === item.href || pathname.startsWith(`${item.href}/`);

//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setSidebarOpen(false)}
//                   className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition ${
//                     active
//                       ? "bg-[#e8f5ef] text-[#176b57]"
//                       : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                   }`}
//                 >
//                   <span
//                     className={`flex h-6 w-6 items-center justify-center rounded-md text-[13px] ${
//                       active
//                         ? "bg-[#176b57] text-white"
//                         : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
//                     }`}
//                   >
//                     {item.icon}
//                   </span>
//                   <span>{item.label}</span>
//                   {active && (
//                     <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#176b57]" />
//                   )}
//                 </Link>
//               );
//             })}

//             {isAdmin && (
//               <>
//                 <div className="my-3 border-t border-slate-100" />
//                 <p className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
//                   Administration
//                 </p>
//                 <Link
//                   href="/admin/users"
//                   onClick={() => setSidebarOpen(false)}
//                   className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition ${
//                     pathname.startsWith("/admin/users")
//                       ? "bg-[#e8f5ef] text-[#176b57]"
//                       : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                   }`}
//                 >
//                   <span
//                     className={`flex h-6 w-6 items-center justify-center rounded-md ${
//                       pathname.startsWith("/admin/users")
//                         ? "bg-[#176b57] text-white"
//                         : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
//                     }`}
//                   >
//                     <Users size={14} />
//                   </span>
//                   <span>Staff Users</span>
//                 </Link>
//               </>
//             )}
//           </div>
//         </nav>

//         <div className="border-t border-slate-100 p-3">
//           <div className="rounded-lg bg-slate-50 p-3">
//             <div className="flex items-center gap-2">
//               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#176b57] text-xs font-bold text-white">
//                 {avatarLetter}
//               </div>
//               <div className="min-w-0 flex-1">
//                 <p className="truncate text-xs font-semibold text-slate-800">
//                   {displayName}
//                 </p>
//                 <p className="truncate text-[10px] text-slate-400">
//                   {displayRole}
//                 </p>
//               </div>
//               <button
//                 type="button"
//                 onClick={handleLogout}
//                 className="flex h-7 w-7 items-center justify-center rounded-md text-slate-400 hover:bg-slate-200 hover:text-slate-600"
//                 title="Logout"
//               >
//                 <LogOut size={14} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </aside>

//       {/* MAIN AREA */}
//       <div className="min-h-screen lg:pl-[235px]">
//         <header className="sticky top-0 z-30 h-[64px] border-b border-slate-200 bg-white/95 backdrop-blur">
//           <div className="flex h-full items-center justify-between px-4 md:px-6">
//             <div className="flex items-center gap-3">
//               <button
//                 type="button"
//                 onClick={() => setSidebarOpen(true)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 lg:hidden"
//                 aria-label="Open navigation"
//               >
//                 ☰
//               </button>

//               <div>
//                 <p className="text-[10px] uppercase tracking-wide text-slate-400">
//                   {moduleName}
//                 </p>
//                 <h1 className="text-sm font-semibold text-slate-800">
//                   {pageTitle}
//                 </h1>
//               </div>
//             </div>

//             {/* HEADER ACTIONS — switcher first (top-right), then search / notif / settings / user */}
//             <div
//               ref={headerActionsRef}
//               className="relative flex items-center gap-1 md:gap-2"
//             >
//               {/* Module switcher (Interior ↔ Furniture) */}
//               <HeaderModuleSwitcher isFurniture={isFurniture} />

//               {/* Search */}
//               <button
//                 type="button"
//                 onClick={() => {
//                   setSearchOpen(true);
//                   setNotifOpen(false);
//                   setSettingsOpen(false);
//                   setUserMenuOpen(false);
//                 }}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
//                 aria-label="Search"
//               >
//                 <Search size={18} />
//               </button>

//               {/* Notifications — no dummy data */}
//               <div className="relative">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setNotifOpen((v) => !v);
//                     setSettingsOpen(false);
//                     setUserMenuOpen(false);
//                   }}
//                   className="relative flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
//                   aria-label="Notifications"
//                 >
//                   <Bell size={18} />
//                   {unreadCount > 0 && (
//                     <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
//                   )}
//                 </button>

//                 {notifOpen && (
//                   <div className="absolute right-0 z-50 mt-2 w-80 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
//                     <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
//                       <p className="text-sm font-semibold text-slate-800">
//                         Notifications
//                       </p>
//                       {unreadCount > 0 && (
//                         <button
//                           type="button"
//                           onClick={markAllRead}
//                           className="text-xs font-medium text-[#176b57] hover:underline"
//                         >
//                           Mark all read
//                         </button>
//                       )}
//                     </div>
//                     <div className="max-h-72 overflow-y-auto">
//                       {notifications.length === 0 ? (
//                         <div className="px-4 py-10 text-center">
//                           <Bell
//                             size={28}
//                             className="mx-auto mb-2 text-slate-300"
//                           />
//                           <p className="text-sm font-medium text-slate-600">
//                             No notifications
//                           </p>
//                           <p className="mt-1 text-xs text-slate-400">
//                             You’re all caught up
//                           </p>
//                         </div>
//                       ) : (
//                         notifications.map((n) => (
//                           <button
//                             key={n.id}
//                             type="button"
//                             onClick={() => openNotification(n)}
//                             className={`flex w-full flex-col gap-0.5 border-b border-slate-50 px-4 py-3 text-left hover:bg-slate-50 ${
//                               n.read ? "opacity-70" : "bg-[#f4fbf8]"
//                             }`}
//                           >
//                             <div className="flex items-center justify-between gap-2">
//                               <p className="text-sm font-semibold text-slate-800">
//                                 {n.title}
//                               </p>
//                               <span className="text-[10px] text-slate-400">
//                                 {n.time}
//                               </span>
//                             </div>
//                             <p className="text-xs text-slate-500">{n.body}</p>
//                           </button>
//                         ))
//                       )}
//                     </div>
//                     {notifications.length > 0 && (
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setNotifOpen(false);
//                           router.push(
//                             isFurniture
//                               ? "/furniture/dashboard"
//                               : "/interior/dashboard"
//                           );
//                         }}
//                         className="w-full border-t border-slate-100 px-4 py-2.5 text-center text-xs font-semibold text-[#176b57] hover:bg-slate-50"
//                       >
//                         View dashboard
//                       </button>
//                     )}
//                   </div>
//                 )}
//               </div>

//               {/* Settings */}
//               <div className="relative hidden sm:block">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSettingsOpen((v) => !v);
//                     setNotifOpen(false);
//                     setUserMenuOpen(false);
//                   }}
//                   className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
//                   aria-label="Settings"
//                 >
//                   <Settings size={18} />
//                 </button>

//                 {settingsOpen && (
//                   <div className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
//                     {isAdmin && (
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setSettingsOpen(false);
//                           router.push("/admin/users");
//                         }}
//                         className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                       >
//                         <Users size={14} />
//                         Staff Users
//                       </button>
//                     )}
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         router.push(
//                           isFurniture
//                             ? "/furniture/reports"
//                             : "/interior/reports"
//                         );
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                     >
//                       Reports
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         router.push(
//                           isFurniture
//                             ? "/furniture/dashboard"
//                             : "/interior/dashboard"
//                         );
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                     >
//                       {isFurniture ? "Furniture" : "Interior"} Dashboard
//                     </button>
//                     <div className="my-1 border-t border-slate-100" />
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         handleLogout();
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
//                     >
//                       <LogOut size={14} />
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>

//               {/* USER */}
//               <div className="relative border-l border-slate-200 pl-3">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setUserMenuOpen((v) => !v);
//                     setNotifOpen(false);
//                     setSettingsOpen(false);
//                   }}
//                   className="flex items-center gap-2 rounded-lg px-1 py-1 hover:bg-slate-50"
//                 >
//                   <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dff1e8] text-xs font-bold text-[#176b57]">
//                     {avatarLetter}
//                   </div>
//                   <div className="hidden text-left md:block">
//                     <p className="text-xs font-semibold text-slate-800">
//                       {displayName}
//                     </p>
//                     <p className="text-[10px] text-slate-400">{displayRole}</p>
//                   </div>
//                 </button>

//                 {userMenuOpen && (
//                   <div className="absolute right-0 z-50 mt-2 w-52 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
//                     <div className="border-b border-slate-100 px-4 py-3">
//                       <p className="text-sm font-semibold text-slate-800">
//                         {displayName}
//                       </p>
//                       <p className="text-xs text-slate-400">{displayRole}</p>
//                       <p className="mt-1 text-[10px] uppercase tracking-wide text-[#176b57]">
//                         {moduleKey} module
//                       </p>
//                     </div>
//                     {isAdmin && (
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setUserMenuOpen(false);
//                           router.push("/admin/users");
//                         }}
//                         className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                       >
//                         <Users size={14} />
//                         Manage users
//                       </button>
//                     )}
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setUserMenuOpen(false);
//                         handleLogout();
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
//                     >
//                       <LogOut size={14} />
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* SEARCH MODAL */}
//         {searchOpen && (
//           <div className="fixed inset-0 z-[60] flex items-start justify-center bg-black/40 p-4 pt-[12vh]">
//             <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">
//               <form
//                 onSubmit={runSearch}
//                 className="flex items-center gap-2 border-b border-slate-100 px-4 py-3"
//               >
//                 <Search size={18} className="text-slate-400" />
//                 <input
//                   ref={searchInputRef}
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder={`Search in ${moduleName}…`}
//                   className="h-10 flex-1 border-0 bg-transparent text-sm outline-none"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearchOpen(false);
//                     setSearchQuery("");
//                   }}
//                   className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100"
//                 >
//                   <X size={16} />
//                 </button>
//               </form>
//               <div className="max-h-72 overflow-y-auto py-2">
//                 {filteredSearch.length === 0 ? (
//                   <p className="px-4 py-6 text-center text-sm text-slate-500">
//                     No matching pages
//                   </p>
//                 ) : (
//                   filteredSearch.map((item) => (
//                     <button
//                       key={item.href}
//                       type="button"
//                       onClick={() => {
//                         const q = searchQuery.trim();
//                         router.push(
//                           q
//                             ? `${item.href}?search=${encodeURIComponent(q)}`
//                             : item.href
//                         );
//                         setSearchOpen(false);
//                         setSearchQuery("");
//                       }}
//                       className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                     >
//                       <span>{item.label}</span>
//                       <span className="text-[10px] text-slate-400">
//                         {item.href}
//                       </span>
//                     </button>
//                   ))
//                 )}
//               </div>
//               <div className="border-t border-slate-100 px-4 py-2 text-[11px] text-slate-400">
//                 Enter to open · Esc to close
//               </div>
//             </div>
//           </div>
//         )}

//         <main className="min-h-[calc(100vh-64px)]">{children}</main>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import {
//   LogOut,
//   Users,
//   Search,
//   Bell,
//   Settings,
//   X,
//   Sofa,
//   LayoutDashboard,
// } from "lucide-react";
// import { useAuth } from "@/core/auth/AuthContext";

// type NavItem = {
//   label: string;
//   href: string;
//   icon: string;
// };

// const navigation: NavItem[] = [
//   { label: "Dashboard", href: "/interior/dashboard", icon: "▦" },
//   { label: "CRM / Leads", href: "/interior/crm", icon: "◉" },
//   { label: "Clients", href: "/interior/clients", icon: "♙" },
//   { label: "Quotations", href: "/interior/quotations", icon: "▤" },
//   { label: "Contracts", href: "/interior/contracts", icon: "▥" },
//   { label: "Projects", href: "/interior/projects", icon: "▣" },
//   { label: "HRMS", href: "/interior/hrms", icon: "♟" },
//   { label: "Vendors", href: "/interior/vendors", icon: "◆" },
//   { label: "Payments", href: "/interior/payments", icon: "₹" },
//   { label: "Reports", href: "/interior/reports", icon: "▥" },
// ];

// const furnitureNavigation: NavItem[] = [
//   { label: "Dashboard", href: "/furniture/dashboard", icon: "▦" },
//   { label: "Products", href: "/furniture/products", icon: "▤" },
//   { label: "Inventory", href: "/furniture/inventory", icon: "▣" },
//   { label: "Customers", href: "/furniture/customers", icon: "♙" },
//   { label: "Enquiries", href: "/furniture/enquiries", icon: "◉" },
//   { label: "Orders", href: "/furniture/orders", icon: "▥" },
//   { label: "Payments", href: "/furniture/payments", icon: "₹" },
//   { label: "Expenses", href: "/furniture/expenses", icon: "◆" },
//   { label: "Reports", href: "/furniture/reports", icon: "▥" },
// ];

// type NotificationItem = {
//   id: string;
//   title: string;
//   body: string;
//   href: string;
//   time: string;
//   read: boolean;
// };

// function getPageTitle(pathname: string) {
//   const allItems = [...navigation, ...furnitureNavigation];
//   const item = allItems.find(
//     (nav) => pathname === nav.href || pathname.startsWith(`${nav.href}/`)
//   );
//   if (pathname.startsWith("/admin/users")) return "Staff Users";
//   return item?.label ?? "Dashboard";
// }

// function Logo() {
//   return (
//     <div className="flex items-center gap-2">
//       <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#176b57] text-white shadow-sm">
//         <span className="text-lg font-bold">A</span>
//       </div>
//       <div className="leading-none">
//         <div className="text-[20px] font-bold tracking-tight text-[#1f2937]">
//           Akrish
//         </div>
//         <div className="mt-1 text-[8px] font-medium uppercase tracking-[0.16em] text-slate-400">
//           Furniture and Interior
//         </div>
//       </div>
//     </div>
//   );
// }

// /** Smooth Interior ↔ Furniture switcher (header top-right). */
// function HeaderModuleSwitcher({ isFurniture }: { isFurniture: boolean }) {
//   return (
//     <div
//       className="relative flex items-center rounded-full border border-slate-200 bg-slate-50 p-0.5 shadow-sm"
//       role="group"
//       aria-label="Switch ERP module"
//     >
//       {/* Sliding active pill */}
//       <span
//         aria-hidden
//         className="pointer-events-none absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-white shadow-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
//         style={{
//           left: isFurniture ? "calc(50% + 1px)" : "2px",
//         }}
//       />

//       <Link
//         href="/interior/dashboard"
//         className={`relative z-10 flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-300 ${
//           !isFurniture
//             ? "text-[#176b57]"
//             : "text-slate-500 hover:text-slate-700"
//         }`}
//         title="Interior ERP"
//       >
//         <LayoutDashboard
//           size={14}
//           className={`shrink-0 transition-transform duration-300 ${
//             !isFurniture ? "scale-110" : "scale-100"
//           }`}
//         />
//         <span className="hidden sm:inline">Interior</span>
//       </Link>
//       <Link
//         href="/furniture/dashboard"
//         className={`relative z-10 flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-300 ${
//           isFurniture
//             ? "text-[#176b57]"
//             : "text-slate-500 hover:text-slate-700"
//         }`}
//         title="Furniture ERP — Products & Sales"
//       >
//         <Sofa
//           size={14}
//           className={`shrink-0 transition-transform duration-300 ${
//             isFurniture ? "scale-110" : "scale-100"
//           }`}
//         />
//         <span className="hidden sm:inline">Furniture</span>
//       </Link>
//     </div>
//   );
// }

// export default function ERPLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();
//   const router = useRouter();
//   const { user, isAdmin, logout } = useAuth();

//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [notifOpen, setNotifOpen] = useState(false);
//   const [settingsOpen, setSettingsOpen] = useState(false);
//   const [userMenuOpen, setUserMenuOpen] = useState(false);

//   // Content transition: fade + slight slide when module changes
//   const [contentVisible, setContentVisible] = useState(true);
//   const [displayChildren, setDisplayChildren] = useState(children);
//   const prevModuleRef = useRef<"interior" | "furniture" | null>(null);

//   const searchInputRef = useRef<HTMLInputElement>(null);
//   const headerActionsRef = useRef<HTMLDivElement>(null);

//   const isFurniture = pathname.startsWith("/furniture");
//   const currentModule: "interior" | "furniture" = isFurniture
//     ? "furniture"
//     : "interior";
//   const currentNavigation = isFurniture ? furnitureNavigation : navigation;
//   const pageTitle = getPageTitle(pathname);
//   const moduleName = isFurniture ? "Furniture ERP" : "Interior ERP";
//   const moduleKey = isFurniture ? "furniture" : "interior";

//   // Smooth content swap when module changes
//   useEffect(() => {
//     const prev = prevModuleRef.current;
//     if (prev !== null && prev !== currentModule) {
//       // Module switch → animate out, swap, animate in
//       setContentVisible(false);
//       const t = window.setTimeout(() => {
//         setDisplayChildren(children);
//         setContentVisible(true);
//       }, 180);
//       prevModuleRef.current = currentModule;
//       return () => window.clearTimeout(t);
//     }
//     // Same module (or first paint) — update content immediately, keep visible
//     setDisplayChildren(children);
//     setContentVisible(true);
//     prevModuleRef.current = currentModule;
//   }, [children, currentModule]);

//   // Remember active module
//   useEffect(() => {
//     try {
//       if (pathname.startsWith("/furniture")) {
//         localStorage.setItem("akrish_active_module", "furniture");
//       } else if (pathname.startsWith("/interior")) {
//         localStorage.setItem("akrish_active_module", "interior");
//       }
//     } catch {
//       /* ignore */
//     }
//   }, [pathname]);

//   // No dummy notifications
//   const [notifications, setNotifications] = useState<NotificationItem[]>([]);

//   const unreadCount = notifications.filter((n) => !n.read).length;

//   useEffect(() => {
//     function onDocClick(e: MouseEvent) {
//       if (
//         headerActionsRef.current &&
//         !headerActionsRef.current.contains(e.target as Node)
//       ) {
//         setNotifOpen(false);
//         setSettingsOpen(false);
//         setUserMenuOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", onDocClick);
//     return () => document.removeEventListener("mousedown", onDocClick);
//   }, []);

//   useEffect(() => {
//     if (searchOpen) {
//       setTimeout(() => searchInputRef.current?.focus(), 50);
//     }
//   }, [searchOpen]);

//   useEffect(() => {
//     function onKey(e: KeyboardEvent) {
//       if (e.key === "Escape") {
//         setSearchOpen(false);
//         setNotifOpen(false);
//         setSettingsOpen(false);
//         setUserMenuOpen(false);
//       }
//     }
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   const searchTargets = useMemo(() => {
//     const base = isFurniture
//       ? [
//           { label: "Products", href: "/furniture/products" },
//           { label: "Inventory", href: "/furniture/inventory" },
//           { label: "Customers", href: "/furniture/customers" },
//           { label: "Enquiries", href: "/furniture/enquiries" },
//           { label: "Orders", href: "/furniture/orders" },
//           { label: "Payments", href: "/furniture/payments" },
//           { label: "Expenses", href: "/furniture/expenses" },
//           { label: "Reports", href: "/furniture/reports" },
//         ]
//       : [
//           { label: "CRM / Leads", href: "/interior/crm" },
//           { label: "Clients", href: "/interior/clients" },
//           { label: "Quotations", href: "/interior/quotations" },
//           { label: "Contracts", href: "/interior/contracts" },
//           { label: "Projects", href: "/interior/projects" },
//           { label: "HRMS", href: "/interior/hrms" },
//           { label: "Vendors", href: "/interior/vendors" },
//           { label: "Payments", href: "/interior/payments" },
//           { label: "Reports", href: "/interior/reports" },
//         ];

//     if (isAdmin) {
//       base.push({ label: "Staff Users", href: "/admin/users" });
//     }
//     return base;
//   }, [isFurniture, isAdmin]);

//   const filteredSearch = useMemo(() => {
//     const q = searchQuery.toLowerCase().trim();
//     if (!q) return searchTargets;
//     return searchTargets.filter((t) => t.label.toLowerCase().includes(q));
//   }, [searchQuery, searchTargets]);

//   function runSearch(e?: React.FormEvent) {
//     e?.preventDefault();
//     const q = searchQuery.trim();
//     if (!q) return;

//     const match = filteredSearch[0];
//     if (match) {
//       router.push(`${match.href}?search=${encodeURIComponent(q)}`);
//     } else if (isFurniture) {
//       router.push(`/furniture/products?search=${encodeURIComponent(q)}`);
//     } else {
//       router.push(`/interior/crm?search=${encodeURIComponent(q)}`);
//     }
//     setSearchOpen(false);
//     setSearchQuery("");
//   }

//   function openNotification(n: NotificationItem) {
//     setNotifications((list) =>
//       list.map((item) =>
//         item.id === n.id ? { ...item, read: true } : item
//       )
//     );
//     setNotifOpen(false);
//     router.push(n.href);
//   }

//   function markAllRead() {
//     setNotifications((list) => list.map((n) => ({ ...n, read: true })));
//   }

//   const handleLogout = () => {
//     logout();
//     router.push("/login");
//   };

//   const displayName = user?.name || "User";
//   const displayRole = user?.role
//     ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
//     : "Staff";
//   const avatarLetter = displayName.charAt(0).toUpperCase();

//   return (
//     <div className="min-h-screen bg-[#f7f9f8] text-slate-800">
//       {sidebarOpen && (
//         <button
//           type="button"
//           aria-label="Close sidebar"
//           onClick={() => setSidebarOpen(false)}
//           className="fixed inset-0 z-40 bg-black/30 transition-opacity duration-200 lg:hidden"
//         />
//       )}

//       {/* SIDEBAR — nav list animates on module change */}
//       <aside
//         className={`fixed inset-y-0 left-0 z-50 flex w-[235px] flex-col border-r border-slate-200 bg-white transition-transform duration-200 ease-out ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
//         }`}
//       >
//         <div className="flex h-[72px] items-center border-b border-slate-100 px-5">
//           <Logo />
//           <button
//             type="button"
//             onClick={() => setSidebarOpen(false)}
//             className="ml-auto flex h-8 w-8 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 lg:hidden"
//           >
//             ×
//           </button>
//         </div>

//         <nav className="mt-4 flex-1 overflow-y-auto px-3 pb-4">
//           <p
//             key={moduleKey + "-label"}
//             className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400 transition-opacity duration-300"
//           >
//             {isFurniture ? "Furniture Management" : "Interior Management"}
//           </p>

//           <div
//             key={moduleKey + "-nav"}
//             className="space-y-1 animate-in fade-in slide-in-from-left-2 duration-300"
//             style={{
//               animation: "akrishNavIn 0.32s cubic-bezier(0.22, 1, 0.36, 1)",
//             }}
//           >
//             {currentNavigation.map((item) => {
//               const active =
//                 pathname === item.href || pathname.startsWith(`${item.href}/`);

//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setSidebarOpen(false)}
//                   className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-200 ${
//                     active
//                       ? "bg-[#e8f5ef] text-[#176b57]"
//                       : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                   }`}
//                 >
//                   <span
//                     className={`flex h-6 w-6 items-center justify-center rounded-md text-[13px] transition-colors duration-200 ${
//                       active
//                         ? "bg-[#176b57] text-white"
//                         : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
//                     }`}
//                   >
//                     {item.icon}
//                   </span>
//                   <span>{item.label}</span>
//                   {active && (
//                     <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#176b57]" />
//                   )}
//                 </Link>
//               );
//             })}

//             {isAdmin && (
//               <>
//                 <div className="my-3 border-t border-slate-100" />
//                 <p className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
//                   Administration
//                 </p>
//                 <Link
//                   href="/admin/users"
//                   onClick={() => setSidebarOpen(false)}
//                   className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-200 ${
//                     pathname.startsWith("/admin/users")
//                       ? "bg-[#e8f5ef] text-[#176b57]"
//                       : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                   }`}
//                 >
//                   <span
//                     className={`flex h-6 w-6 items-center justify-center rounded-md transition-colors duration-200 ${
//                       pathname.startsWith("/admin/users")
//                         ? "bg-[#176b57] text-white"
//                         : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
//                     }`}
//                   >
//                     <Users size={14} />
//                   </span>
//                   <span>Staff Users</span>
//                 </Link>
//               </>
//             )}
//           </div>
//         </nav>

//         <div className="border-t border-slate-100 p-3">
//           <div className="rounded-lg bg-slate-50 p-3">
//             <div className="flex items-center gap-2">
//               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#176b57] text-xs font-bold text-white">
//                 {avatarLetter}
//               </div>
//               <div className="min-w-0 flex-1">
//                 <p className="truncate text-xs font-semibold text-slate-800">
//                   {displayName}
//                 </p>
//                 <p className="truncate text-[10px] text-slate-400">
//                   {displayRole}
//                 </p>
//               </div>
//               <button
//                 type="button"
//                 onClick={handleLogout}
//                 className="flex h-7 w-7 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-600"
//                 title="Logout"
//               >
//                 <LogOut size={14} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </aside>

//       {/* MAIN AREA */}
//       <div className="min-h-screen lg:pl-[235px]">
//         <header className="sticky top-0 z-30 h-[64px] border-b border-slate-200 bg-white/95 backdrop-blur">
//           <div className="flex h-full items-center justify-between px-4 md:px-6">
//             <div className="flex items-center gap-3">
//               <button
//                 type="button"
//                 onClick={() => setSidebarOpen(true)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 lg:hidden"
//                 aria-label="Open navigation"
//               >
//                 ☰
//               </button>

//               <div
//                 key={moduleKey + "-title"}
//                 className="transition-all duration-300 ease-out"
//                 style={{
//                   animation: "akrishTitleIn 0.28s cubic-bezier(0.22, 1, 0.36, 1)",
//                 }}
//               >
//                 <p className="text-[10px] uppercase tracking-wide text-slate-400">
//                   {moduleName}
//                 </p>
//                 <h1 className="text-sm font-semibold text-slate-800">
//                   {pageTitle}
//                 </h1>
//               </div>
//             </div>

//             <div
//               ref={headerActionsRef}
//               className="relative flex items-center gap-1 md:gap-2"
//             >
//               <HeaderModuleSwitcher isFurniture={isFurniture} />

//               <button
//                 type="button"
//                 onClick={() => {
//                   setSearchOpen(true);
//                   setNotifOpen(false);
//                   setSettingsOpen(false);
//                   setUserMenuOpen(false);
//                 }}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100"
//                 aria-label="Search"
//               >
//                 <Search size={18} />
//               </button>

//               <div className="relative">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setNotifOpen((v) => !v);
//                     setSettingsOpen(false);
//                     setUserMenuOpen(false);
//                   }}
//                   className="relative flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100"
//                   aria-label="Notifications"
//                 >
//                   <Bell size={18} />
//                   {unreadCount > 0 && (
//                     <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
//                   )}
//                 </button>

//                 {notifOpen && (
//                   <div className="absolute right-0 z-50 mt-2 w-80 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl transition-all duration-200 origin-top-right animate-in fade-in zoom-in-95">
//                     <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
//                       <p className="text-sm font-semibold text-slate-800">
//                         Notifications
//                       </p>
//                       {unreadCount > 0 && (
//                         <button
//                           type="button"
//                           onClick={markAllRead}
//                           className="text-xs font-medium text-[#176b57] hover:underline"
//                         >
//                           Mark all read
//                         </button>
//                       )}
//                     </div>
//                     <div className="max-h-72 overflow-y-auto">
//                       {notifications.length === 0 ? (
//                         <div className="px-4 py-10 text-center">
//                           <Bell
//                             size={28}
//                             className="mx-auto mb-2 text-slate-300"
//                           />
//                           <p className="text-sm font-medium text-slate-600">
//                             No notifications
//                           </p>
//                           <p className="mt-1 text-xs text-slate-400">
//                             You’re all caught up
//                           </p>
//                         </div>
//                       ) : (
//                         notifications.map((n) => (
//                           <button
//                             key={n.id}
//                             type="button"
//                             onClick={() => openNotification(n)}
//                             className={`flex w-full flex-col gap-0.5 border-b border-slate-50 px-4 py-3 text-left transition-colors hover:bg-slate-50 ${
//                               n.read ? "opacity-70" : "bg-[#f4fbf8]"
//                             }`}
//                           >
//                             <div className="flex items-center justify-between gap-2">
//                               <p className="text-sm font-semibold text-slate-800">
//                                 {n.title}
//                               </p>
//                               <span className="text-[10px] text-slate-400">
//                                 {n.time}
//                               </span>
//                             </div>
//                             <p className="text-xs text-slate-500">{n.body}</p>
//                           </button>
//                         ))
//                       )}
//                     </div>
//                     {notifications.length > 0 && (
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setNotifOpen(false);
//                           router.push(
//                             isFurniture
//                               ? "/furniture/dashboard"
//                               : "/interior/dashboard"
//                           );
//                         }}
//                         className="w-full border-t border-slate-100 px-4 py-2.5 text-center text-xs font-semibold text-[#176b57] hover:bg-slate-50"
//                       >
//                         View dashboard
//                       </button>
//                     )}
//                   </div>
//                 )}
//               </div>

//               <div className="relative hidden sm:block">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSettingsOpen((v) => !v);
//                     setNotifOpen(false);
//                     setUserMenuOpen(false);
//                   }}
//                   className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100"
//                   aria-label="Settings"
//                 >
//                   <Settings size={18} />
//                 </button>

//                 {settingsOpen && (
//                   <div className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
//                     {isAdmin && (
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setSettingsOpen(false);
//                           router.push("/admin/users");
//                         }}
//                         className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                       >
//                         <Users size={14} />
//                         Staff Users
//                       </button>
//                     )}
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         router.push(
//                           isFurniture
//                             ? "/furniture/reports"
//                             : "/interior/reports"
//                         );
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                     >
//                       Reports
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         router.push(
//                           isFurniture
//                             ? "/furniture/dashboard"
//                             : "/interior/dashboard"
//                         );
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                     >
//                       {isFurniture ? "Furniture" : "Interior"} Dashboard
//                     </button>
//                     <div className="my-1 border-t border-slate-100" />
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         handleLogout();
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
//                     >
//                       <LogOut size={14} />
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>

//               <div className="relative border-l border-slate-200 pl-3">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setUserMenuOpen((v) => !v);
//                     setNotifOpen(false);
//                     setSettingsOpen(false);
//                   }}
//                   className="flex items-center gap-2 rounded-lg px-1 py-1 transition-colors hover:bg-slate-50"
//                 >
//                   <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dff1e8] text-xs font-bold text-[#176b57]">
//                     {avatarLetter}
//                   </div>
//                   <div className="hidden text-left md:block">
//                     <p className="text-xs font-semibold text-slate-800">
//                       {displayName}
//                     </p>
//                     <p className="text-[10px] text-slate-400">{displayRole}</p>
//                   </div>
//                 </button>

//                 {userMenuOpen && (
//                   <div className="absolute right-0 z-50 mt-2 w-52 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
//                     <div className="border-b border-slate-100 px-4 py-3">
//                       <p className="text-sm font-semibold text-slate-800">
//                         {displayName}
//                       </p>
//                       <p className="text-xs text-slate-400">{displayRole}</p>
//                       <p className="mt-1 text-[10px] uppercase tracking-wide text-[#176b57]">
//                         {moduleKey} module
//                       </p>
//                     </div>
//                     {isAdmin && (
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setUserMenuOpen(false);
//                           router.push("/admin/users");
//                         }}
//                         className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                       >
//                         <Users size={14} />
//                         Manage users
//                       </button>
//                     )}
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setUserMenuOpen(false);
//                         handleLogout();
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
//                     >
//                       <LogOut size={14} />
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </header>

//         {searchOpen && (
//           <div className="fixed inset-0 z-[60] flex items-start justify-center bg-black/40 p-4 pt-[12vh] transition-opacity duration-200">
//             <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-200">
//               <form
//                 onSubmit={runSearch}
//                 className="flex items-center gap-2 border-b border-slate-100 px-4 py-3"
//               >
//                 <Search size={18} className="text-slate-400" />
//                 <input
//                   ref={searchInputRef}
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder={`Search in ${moduleName}…`}
//                   className="h-10 flex-1 border-0 bg-transparent text-sm outline-none"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearchOpen(false);
//                     setSearchQuery("");
//                   }}
//                   className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100"
//                 >
//                   <X size={16} />
//                 </button>
//               </form>
//               <div className="max-h-72 overflow-y-auto py-2">
//                 {filteredSearch.length === 0 ? (
//                   <p className="px-4 py-6 text-center text-sm text-slate-500">
//                     No matching pages
//                   </p>
//                 ) : (
//                   filteredSearch.map((item) => (
//                     <button
//                       key={item.href}
//                       type="button"
//                       onClick={() => {
//                         const q = searchQuery.trim();
//                         router.push(
//                           q
//                             ? `${item.href}?search=${encodeURIComponent(q)}`
//                             : item.href
//                         );
//                         setSearchOpen(false);
//                         setSearchQuery("");
//                       }}
//                       className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                     >
//                       <span>{item.label}</span>
//                       <span className="text-[10px] text-slate-400">
//                         {item.href}
//                       </span>
//                     </button>
//                   ))
//                 )}
//               </div>
//               <div className="border-t border-slate-100 px-4 py-2 text-[11px] text-slate-400">
//                 Enter to open · Esc to close
//               </div>
//             </div>
//           </div>
//         )}

//         {/* MAIN CONTENT — smooth fade + slide when module switches */}
//         <main
//           className="min-h-[calc(100vh-64px)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
//           style={{
//             opacity: contentVisible ? 1 : 0,
//             transform: contentVisible
//               ? "translateY(0) scale(1)"
//               : "translateY(8px) scale(0.99)",
//           }}
//         >
//           {displayChildren}
//         </main>
//       </div>

//       {/* Keyframe helpers for nav / title (no external CSS required) */}
//       <style jsx global>{`
//         @keyframes akrishNavIn {
//           from {
//             opacity: 0;
//             transform: translateX(-6px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//         @keyframes akrishTitleIn {
//           from {
//             opacity: 0;
//             transform: translateY(-4px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import {
//   LogOut,
//   Users,
//   Search,
//   Bell,
//   Settings,
//   X,
//   Sofa,
//   LayoutDashboard,
// } from "lucide-react";
// import {
//   collection,
//   query,
//   orderBy,
//   limit,
//   onSnapshot,
//   type Timestamp,
// } from "firebase/firestore";
// import { useAuth } from "@/core/auth/AuthContext";
// import { db } from "@/core/config/firebaseClient";

// // type NavItem = {
// //   label: string;
// //   href: string;
// //   icon: string;
// //   nested: boolean;
// // };

// type NavItem = {
//   label: string;
//   href: string;
//   icon: string;
//   /** Indent under Products (catalog group) */
//   nested?: boolean;
// };

// const navigation: NavItem[] = [
//   { label: "Dashboard", href: "/interior/dashboard", icon: "▦" },
//   { label: "CRM / Leads", href: "/interior/crm", icon: "◉" },
//   { label: "Clients", href: "/interior/clients", icon: "♙" },
//   { label: "Quotations", href: "/interior/quotations", icon: "▤" },
//   { label: "Contracts", href: "/interior/contracts", icon: "▥" },
//   { label: "Projects", href: "/interior/projects", icon: "▣" },
//   { label: "HRMS", href: "/interior/hrms", icon: "♟" },
//   { label: "Vendors", href: "/interior/vendors", icon: "◆" },
//   { label: "Payments", href: "/interior/payments", icon: "₹" },
//   { label: "Reports", href: "/interior/reports", icon: "▥" },
// ];

// const furnitureNavigation: NavItem[] = [
//   { label: "Dashboard", href: "/furniture/dashboard", icon: "▦" },
//   { label: "Products", href: "/furniture/products", icon: "▤" },
//   { label: "Categories", href: "/furniture/categories", icon: "☰", nested: true },
//   { label: "Sub Categories", href: "/furniture/sub-categories", icon: "▤", nested: true },
//   { label: "Materials", href: "/furniture/materials", icon: "◆", nested: true },
//   { label: "Finishes", href: "/furniture/finishes", icon: "▣", nested: true },
//   { label: "Inventory", href: "/furniture/inventory", icon: "▣" },
//   { label: "Customers", href: "/furniture/customers", icon: "♙" },
//   { label: "Enquiries", href: "/furniture/enquiries", icon: "◉" },
//   { label: "Orders", href: "/furniture/orders", icon: "▥" },
//   { label: "Payments", href: "/furniture/payments", icon: "₹" },
//   // { label: "Payments", href: "/furniture/payments", icon: "₹" },
// {  label: "Online Payments", href: "/furniture/online-payments", icon: "◈" },
//   { label: "Expenses", href: "/furniture/expenses", icon: "◆" },
//   { label: "Reports", href: "/furniture/reports", icon: "▥" },
// ];

// type NotificationItem = {
//   id: string;
//   title: string;
//   body: string;
//   href: string;
//   time: string;
//   read: boolean;
//   enquiryId: string;
// };

// const DISMISSED_KEY = "akrish_dismissed_enquiry_notifs";
// const ENQUIRIES_COLLECTION = "furniture_enquiries";

// function getDismissedIds(): Set<string> {
//   try {
//     const raw = localStorage.getItem(DISMISSED_KEY);
//     if (!raw) return new Set();
//     const arr = JSON.parse(raw) as string[];
//     return new Set(Array.isArray(arr) ? arr : []);
//   } catch {
//     return new Set();
//   }
// }

// function dismissEnquiryIds(ids: string[]) {
//   try {
//     const set = getDismissedIds();
//     ids.forEach((id) => set.add(id));
//     localStorage.setItem(DISMISSED_KEY, JSON.stringify([...set]));
//   } catch {
//     /* ignore */
//   }
// }

// function formatRelativeTime(value: unknown): string {
//   let date: Date | null = null;
//   if (value && typeof value === "object" && "toDate" in (value as object)) {
//     try {
//       date = (value as Timestamp).toDate();
//     } catch {
//       date = null;
//     }
//   } else if (typeof value === "string" || typeof value === "number") {
//     date = new Date(value);
//   }
//   if (!date || Number.isNaN(date.getTime())) return "Just now";

//   const diffMs = Date.now() - date.getTime();
//   const mins = Math.floor(diffMs / 60000);
//   if (mins < 1) return "Just now";
//   if (mins < 60) return `${mins}m ago`;
//   const hours = Math.floor(mins / 60);
//   if (hours < 24) return `${hours}h ago`;
//   const days = Math.floor(hours / 24);
//   if (days === 1) return "Yesterday";
//   if (days < 7) return `${days}d ago`;
//   return date.toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "short",
//   });
// }

// function getPageTitle(pathname: string) {
//   const allItems = [...navigation, ...furnitureNavigation];
//   const item = allItems.find(
//     (nav) => pathname === nav.href || pathname.startsWith(`${nav.href}/`)
//   );
//   if (pathname.startsWith("/admin/users")) return "Staff Users";
//   return item?.label ?? "Dashboard";
// }

// function Logo() {
//   return (
//     <div className="flex items-center gap-2">
//       <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#176b57] text-white shadow-sm">
//         <span className="text-lg font-bold">A</span>
//       </div>
//       <div className="leading-none">
//         <div className="text-[20px] font-bold tracking-tight text-[#1f2937]">
//           Akrish
//         </div>
//         <div className="mt-1 text-[8px] font-medium uppercase tracking-[0.16em] text-slate-400">
//           Furniture and Interior
//         </div>
//       </div>
//     </div>
//   );
// }

// // function HeaderModuleSwitcher({ isFurniture }: { isFurniture: boolean }) {
// //   return (
// //     <div
// //       className="relative flex items-center rounded-full border border-slate-200 bg-slate-50 p-0.5 shadow-sm"
// //       role="group"
// //       aria-label="Switch ERP module"
// //     >
// //       <span
// //         aria-hidden
// //         className="pointer-events-none absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-white shadow-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
// //         style={{
// //           left: isFurniture ? "calc(50% + 1px)" : "2px",
// //         }}
// //       />

// //       <Link
// //         href="/interior/dashboard"
// //         className={`relative z-10 flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-300 ${
// //           !isFurniture
// //             ? "text-[#176b57]"
// //             : "text-slate-500 hover:text-slate-700"
// //         }`}
// //         title="Interior ERP"
// //       >
// //         <LayoutDashboard
// //           size={14}
// //           className={`shrink-0 transition-transform duration-300 ${
// //             !isFurniture ? "scale-110" : "scale-100"
// //           }`}
// //         />
// //         <span className="hidden sm:inline">Interior</span>
// //       </Link>
// //       <Link
// //         href="/furniture/dashboard"
// //         className={`relative z-10 flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-300 ${
// //           isFurniture
// //             ? "text-[#176b57]"
// //             : "text-slate-500 hover:text-slate-700"
// //         }`}
// //         title="Furniture ERP — Products & Sales"
// //       >
// //         <Sofa
// //           size={14}
// //           className={`shrink-0 transition-transform duration-300 ${
// //             isFurniture ? "scale-110" : "scale-100"
// //           }`}
// //         />
// //         <span className="hidden sm:inline">Furniture</span>
// //       </Link>
// //     </div>
// //   );
// // }

// function HeaderModuleSwitcher({ isFurniture }: { isFurniture: boolean }) {
//   return (
//     <div
//       className="relative flex items-center rounded-full border border-slate-200 bg-slate-50 p-0.5 shadow-sm"
//       role="group"
//       aria-label="Switch ERP module"
//     >
//       <span
//         aria-hidden
//         className="pointer-events-none absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-white shadow-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
//         style={{
//           left: isFurniture ? "calc(50% + 1px)" : "2px",
//         }}
//       />

//       <Link
//         href="/interior/dashboard"
//         className={`relative z-10 flex flex-1 items-center justify-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-300 ${
//           !isFurniture
//             ? "text-[#176b57]"
//             : "text-slate-500 hover:text-slate-700"
//         }`}
//         title="Interior ERP"
//       >
//         <LayoutDashboard
//           size={16}
//           className={`shrink-0 transition-transform duration-300 ${
//             !isFurniture ? "scale-110" : "scale-100"
//           }`}
//         />
//         <span className="hidden sm:inline">Interior</span>
//       </Link>
//       <Link
//         href="/furniture/dashboard"
//         className={`relative z-10 flex flex-1 items-center justify-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-300 ${
//           isFurniture
//             ? "text-[#176b57]"
//             : "text-slate-500 hover:text-slate-700"
//         }`}
//         title="Furniture ERP — Products & Sales"
//       >
//         <Sofa
//           size={16}
//           className={`shrink-0 transition-transform duration-300 ${
//             isFurniture ? "scale-110" : "scale-100"
//           }`}
//         />
//         <span className="hidden sm:inline">Furniture</span>
//       </Link>
//     </div>
//   );
// }

// export default function ERPLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();
//   const router = useRouter();
//   const { user, isAdmin, logout } = useAuth();

//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [notifOpen, setNotifOpen] = useState(false);
//   const [settingsOpen, setSettingsOpen] = useState(false);
//   const [userMenuOpen, setUserMenuOpen] = useState(false);

//   const [contentVisible, setContentVisible] = useState(true);
//   const [displayChildren, setDisplayChildren] = useState(children);
//   const prevModuleRef = useRef<"interior" | "furniture" | null>(null);

//   const searchInputRef = useRef<HTMLInputElement>(null);
//   const headerActionsRef = useRef<HTMLDivElement>(null);

//   const isFurniture = pathname.startsWith("/furniture");
//   const currentModule: "interior" | "furniture" = isFurniture
//     ? "furniture"
//     : "interior";
//   const currentNavigation = isFurniture ? furnitureNavigation : navigation;
//   const pageTitle = getPageTitle(pathname);
//   const moduleName = isFurniture ? "Furniture ERP" : "Interior ERP";
//   const moduleKey = isFurniture ? "furniture" : "interior";

//   const [notifications, setNotifications] = useState<NotificationItem[]>([]);

//   // ── Live website / product enquiries → header notifications ─────────────
//   useEffect(() => {
//     let unsub: (() => void) | undefined;

//     try {
//       const q = query(
//         collection(db, ENQUIRIES_COLLECTION),
//         orderBy("createdAt", "desc"),
//         limit(25)
//       );

//       unsub = onSnapshot(
//         q,
//         (snapshot) => {
//           const dismissed = getDismissedIds();
//           const items: NotificationItem[] = [];

//           snapshot.forEach((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "New");
//             // Only surface open/new enquiries that haven't been clicked away
//             if (status !== "New") return;
//             if (dismissed.has(docSnap.id)) return;

//             const name =
//               String(data.customerName || data.name || "Customer").trim() ||
//               "Customer";
//             const product =
//               String(data.productName || data.productCode || "").trim();
//             const source = String(data.source || "Website").trim();
//             const message = String(data.message || "").trim();

//             items.push({
//               id: `enq-${docSnap.id}`,
//               enquiryId: docSnap.id,
//               title: "New enquiry",
//               body: product
//                 ? `${name} · ${product}${source ? ` · ${source}` : ""}`
//                 : message
//                   ? `${name}: ${message.slice(0, 60)}${message.length > 60 ? "…" : ""}`
//                   : `${name} sent a contact request${source ? ` (${source})` : ""}`,
//               href: "/furniture/enquiries",
//               time: formatRelativeTime(data.createdAt),
//               read: false,
//             });
//           });

//           setNotifications(items);
//         },
//         (err) => {
//           console.error("Enquiry notifications listener error:", err);
//         }
//       );
//     } catch (err) {
//       console.error("Failed to start enquiry notifications:", err);
//     }

//     return () => {
//       unsub?.();
//     };
//   }, []);

//   // Smooth content swap when module changes
//   useEffect(() => {
//     const prev = prevModuleRef.current;
//     if (prev !== null && prev !== currentModule) {
//       setContentVisible(false);
//       const t = window.setTimeout(() => {
//         setDisplayChildren(children);
//         setContentVisible(true);
//       }, 180);
//       prevModuleRef.current = currentModule;
//       return () => window.clearTimeout(t);
//     }
//     setDisplayChildren(children);
//     setContentVisible(true);
//     prevModuleRef.current = currentModule;
//   }, [children, currentModule]);

//   useEffect(() => {
//     try {
//       if (pathname.startsWith("/furniture")) {
//         localStorage.setItem("akrish_active_module", "furniture");
//       } else if (pathname.startsWith("/interior")) {
//         localStorage.setItem("akrish_active_module", "interior");
//       }
//     } catch {
//       /* ignore */
//     }
//   }, [pathname]);

//   const unreadCount = notifications.filter((n) => !n.read).length;

//   useEffect(() => {
//     function onDocClick(e: MouseEvent) {
//       if (
//         headerActionsRef.current &&
//         !headerActionsRef.current.contains(e.target as Node)
//       ) {
//         setNotifOpen(false);
//         setSettingsOpen(false);
//         setUserMenuOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", onDocClick);
//     return () => document.removeEventListener("mousedown", onDocClick);
//   }, []);

//   useEffect(() => {
//     if (searchOpen) {
//       setTimeout(() => searchInputRef.current?.focus(), 50);
//     }
//   }, [searchOpen]);

//   useEffect(() => {
//     function onKey(e: KeyboardEvent) {
//       if (e.key === "Escape") {
//         setSearchOpen(false);
//         setNotifOpen(false);
//         setSettingsOpen(false);
//         setUserMenuOpen(false);
//       }
//     }
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   const searchTargets = useMemo(() => {
//     const base = isFurniture
//       ? [
//           { label: "Products", href: "/furniture/products" },
//           { label: "Inventory", href: "/furniture/inventory" },
//           { label: "Categories", href: "/furniture/categories" },
//           { label: "Sub Categories", href: "/furniture/sub-categories" },
//           { label: "Materials", href: "/furniture/materials" },
//           { label: "Finishes", href: "/furniture/finishes" },
//           { label: "Customers", href: "/furniture/customers" },
//           { label: "Enquiries", href: "/furniture/enquiries" },
//           { label: "Orders", href: "/furniture/orders" },
//           { label: "Payments", href: "/furniture/payments" },
//           { label: "Expenses", href: "/furniture/expenses" },
//           { label: "Reports", href: "/furniture/reports" },
//         ]
//       : [
//           { label: "CRM / Leads", href: "/interior/crm" },
//           { label: "Clients", href: "/interior/clients" },
//           { label: "Quotations", href: "/interior/quotations" },
//           { label: "Contracts", href: "/interior/contracts" },
//           { label: "Projects", href: "/interior/projects" },
//           { label: "HRMS", href: "/interior/hrms" },
//           { label: "Vendors", href: "/interior/vendors" },
//           { label: "Payments", href: "/interior/payments" },
//           { label: "Reports", href: "/interior/reports" },
//         ];

//     if (isAdmin) {
//       base.push({ label: "Staff Users", href: "/admin/users" });
//     }
//     return base;
//   }, [isFurniture, isAdmin]);

//   const filteredSearch = useMemo(() => {
//     const q = searchQuery.toLowerCase().trim();
//     if (!q) return searchTargets;
//     return searchTargets.filter((t) => t.label.toLowerCase().includes(q));
//   }, [searchQuery, searchTargets]);

//   function runSearch(e?: React.FormEvent) {
//     e?.preventDefault();
//     const q = searchQuery.trim();
//     if (!q) return;

//     const match = filteredSearch[0];
//     if (match) {
//       router.push(`${match.href}?search=${encodeURIComponent(q)}`);
//     } else if (isFurniture) {
//       router.push(`/furniture/products?search=${encodeURIComponent(q)}`);
//     } else {
//       router.push(`/interior/crm?search=${encodeURIComponent(q)}`);
//     }
//     setSearchOpen(false);
//     setSearchQuery("");
//   }

//   /** Click notification → Enquiries page + remove this notification permanently */
//   function openNotification(n: NotificationItem) {
//     dismissEnquiryIds([n.enquiryId]);
//     setNotifications((list) => list.filter((item) => item.id !== n.id));
//     setNotifOpen(false);
//     router.push(n.href);
//   }

//   /** Clear all enquiry notifications from the bell */
//   function markAllRead() {
//     const ids = notifications.map((n) => n.enquiryId);
//     dismissEnquiryIds(ids);
//     setNotifications([]);
//   }

//   const handleLogout = () => {
//     logout();
//     router.push("/login");
//   };

//   const displayName = user?.name || "User";
//   const displayRole = user?.role
//     ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
//     : "Staff";
//   const avatarLetter = displayName.charAt(0).toUpperCase();

//   return (
//     <div className="min-h-screen bg-[#f7f9f8] text-slate-800">
//       {sidebarOpen && (
//         <button
//           type="button"
//           aria-label="Close sidebar"
//           onClick={() => setSidebarOpen(false)}
//           className="fixed inset-0 z-40 bg-black/30 transition-opacity duration-200 lg:hidden"
//         />
//       )}

//       <aside
//         className={`fixed inset-y-0 left-0 z-50 flex w-[235px] flex-col border-r border-slate-200 bg-white transition-transform duration-200 ease-out ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
//         }`}
//       >
//         <div className="flex h-[72px] items-center border-b border-slate-100 px-5">
//           <Logo />
//           <button
//             type="button"
//             onClick={() => setSidebarOpen(false)}
//             className="ml-auto flex h-8 w-8 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 lg:hidden"
//           >
//             ×
//           </button>
//         </div>

//         <nav className="mt-4 flex-1 overflow-y-auto px-3 pb-4">
//           <p
//             key={moduleKey + "-label"}
//             className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400 transition-opacity duration-300"
//           >
//             {isFurniture ? "Furniture Management" : "Interior Management"}
//           </p>

//           <div
//             key={moduleKey + "-nav"}
//             className="space-y-1"
//             style={{
//               animation: "akrishNavIn 0.32s cubic-bezier(0.22, 1, 0.36, 1)",
//             }}
//           >
//             {/* {currentNavigation.map((item) => {
//               const active =
//                 pathname === item.href || pathname.startsWith(`${item.href}/`);

//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setSidebarOpen(false)}
//                   className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-200 ${
//                     active
//                       ? "bg-[#e8f5ef] text-[#176b57]"
//                       : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                   }`}
//                 >
//                   <span
//                     className={`flex h-6 w-6 items-center justify-center rounded-md text-[13px] transition-colors duration-200 ${
//                       active
//                         ? "bg-[#176b57] text-white"
//                         : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
//                     }`}
//                   >
//                     {item.icon}
//                   </span>
//                   <span>{item.label}</span>
//                   {active && (
//                     <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#176b57]" />
//                   )}
//                 </Link>
//               );
//             })} */}

//             {currentNavigation.map((item) => {
//               const active =
//                 pathname === item.href || pathname.startsWith(`${item.href}/`);

//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setSidebarOpen(false)}
//                   className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-200 ${
//                     item.nested ? "ml-3 border-l border-slate-200 pl-3" : ""
//                   } ${
//                     active
//                       ? "bg-[#e8f5ef] text-[#176b57]"
//                       : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                   }`}
//                 >
//                   <span
//                     className={`flex h-6 w-6 items-center justify-center rounded-md text-[13px] transition-colors duration-200 ${
//                       active
//                         ? "bg-[#176b57] text-white"
//                         : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
//                     }`}
//                   >
//                     {item.icon}
//                   </span>
//                   <span>{item.label}</span>
//                   {active && (
//                     <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#176b57]" />
//                   )}
//                 </Link>
//               );
//             })}

//             {isAdmin && (
//               <>
//                 <div className="my-3 border-t border-slate-100" />
//                 <p className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
//                   Administration
//                 </p>
//                 <Link
//                   href="/admin/users"
//                   onClick={() => setSidebarOpen(false)}
//                   className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-200 ${
//                     pathname.startsWith("/admin/users")
//                       ? "bg-[#e8f5ef] text-[#176b57]"
//                       : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                   }`}
//                 >
//                   <span
//                     className={`flex h-6 w-6 items-center justify-center rounded-md transition-colors duration-200 ${
//                       pathname.startsWith("/admin/users")
//                         ? "bg-[#176b57] text-white"
//                         : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
//                     }`}
//                   >
//                     <Users size={14} />
//                   </span>
//                   <span>Staff Users</span>
//                 </Link>
//               </>
//             )}
//           </div>
//         </nav>

//         <div className="border-t border-slate-100 p-3">
//           <div className="rounded-lg bg-slate-50 p-3">
//             <div className="flex items-center gap-2">
//               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#176b57] text-xs font-bold text-white">
//                 {avatarLetter}
//               </div>
//               <div className="min-w-0 flex-1">
//                 <p className="truncate text-xs font-semibold text-slate-800">
//                   {displayName}
//                 </p>
//                 <p className="truncate text-[10px] text-slate-400">
//                   {displayRole}
//                 </p>
//               </div>
//               <button
//                 type="button"
//                 onClick={handleLogout}
//                 className="flex h-7 w-7 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-600"
//                 title="Logout"
//               >
//                 <LogOut size={14} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </aside>

//       <div className="min-h-screen lg:pl-[235px]">
//         <header className="sticky top-0 z-30 h-[64px] border-b border-slate-200 bg-white/95 backdrop-blur">
//           <div className="flex h-full items-center justify-between px-4 md:px-6">
//             <div className="flex items-center gap-3">
//               <button
//                 type="button"
//                 onClick={() => setSidebarOpen(true)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 lg:hidden"
//                 aria-label="Open navigation"
//               >
//                 ☰
//               </button>

//               <div
//                 key={moduleKey + "-title"}
//                 className="transition-all duration-300 ease-out"
//                 style={{
//                   animation: "akrishTitleIn 0.28s cubic-bezier(0.22, 1, 0.36, 1)",
//                 }}
//               >
//                 <p className="text-[10px] uppercase tracking-wide text-slate-400">
//                   {moduleName}
//                 </p>
//                 <h1 className="text-sm font-semibold text-slate-800">
//                   {pageTitle}
//                 </h1>
//               </div>
//             </div>

//             <div
//               ref={headerActionsRef}
//               className="relative flex items-center gap-1 md:gap-2"
//             >
//               <HeaderModuleSwitcher isFurniture={isFurniture} />

//               <button
//                 type="button"
//                 onClick={() => {
//                   setSearchOpen(true);
//                   setNotifOpen(false);
//                   setSettingsOpen(false);
//                   setUserMenuOpen(false);
//                 }}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100"
//                 aria-label="Search"
//               >
//                 <Search size={18} />
//               </button>

//               {/* Notifications */}
//               <div className="relative">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setNotifOpen((v) => !v);
//                     setSettingsOpen(false);
//                     setUserMenuOpen(false);
//                   }}
//                   className="relative flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100"
//                   aria-label="Notifications"
//                 >
//                   <Bell size={18} />
//                   {unreadCount > 0 && (
//                     <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
//                       {unreadCount > 9 ? "9+" : unreadCount}
//                     </span>
//                   )}
//                 </button>

//                 {notifOpen && (
//                   <div className="absolute right-0 z-50 mt-2 w-80 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
//                     <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
//                       <p className="text-sm font-semibold text-slate-800">
//                         Notifications
//                       </p>
//                       {notifications.length > 0 && (
//                         <button
//                           type="button"
//                           onClick={markAllRead}
//                           className="text-xs font-medium text-[#176b57] hover:underline"
//                         >
//                           Clear all
//                         </button>
//                       )}
//                     </div>
//                     <div className="max-h-72 overflow-y-auto">
//                       {notifications.length === 0 ? (
//                         <div className="px-4 py-10 text-center">
//                           <Bell
//                             size={28}
//                             className="mx-auto mb-2 text-slate-300"
//                           />
//                           <p className="text-sm font-medium text-slate-600">
//                             No notifications
//                           </p>
//                           <p className="mt-1 text-xs text-slate-400">
//                             New website enquiries will appear here
//                           </p>
//                         </div>
//                       ) : (
//                         notifications.map((n) => (
//                           <button
//                             key={n.id}
//                             type="button"
//                             onClick={() => openNotification(n)}
//                             className="flex w-full flex-col gap-0.5 border-b border-slate-50 bg-[#f4fbf8] px-4 py-3 text-left transition-colors hover:bg-slate-50"
//                           >
//                             <div className="flex items-center justify-between gap-2">
//                               <p className="text-sm font-semibold text-slate-800">
//                                 {n.title}
//                               </p>
//                               <span className="shrink-0 text-[10px] text-slate-400">
//                                 {n.time}
//                               </span>
//                             </div>
//                             <p className="text-xs text-slate-500">{n.body}</p>
//                           </button>
//                         ))
//                       )}
//                     </div>
//                     {notifications.length > 0 && (
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setNotifOpen(false);
//                           router.push("/furniture/enquiries");
//                         }}
//                         className="w-full border-t border-slate-100 px-4 py-2.5 text-center text-xs font-semibold text-[#176b57] hover:bg-slate-50"
//                       >
//                         View all enquiries
//                       </button>
//                     )}
//                   </div>
//                 )}
//               </div>

//               <div className="relative hidden sm:block">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSettingsOpen((v) => !v);
//                     setNotifOpen(false);
//                     setUserMenuOpen(false);
//                   }}
//                   className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100"
//                   aria-label="Settings"
//                 >
//                   <Settings size={18} />
//                 </button>

//                 {settingsOpen && (
//                   <div className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
//                     {isAdmin && (
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setSettingsOpen(false);
//                           router.push("/admin/users");
//                         }}
//                         className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                       >
//                         <Users size={14} />
//                         Staff Users
//                       </button>
//                     )}
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         router.push(
//                           isFurniture
//                             ? "/furniture/reports"
//                             : "/interior/reports"
//                         );
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                     >
//                       Reports
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         router.push(
//                           isFurniture
//                             ? "/furniture/dashboard"
//                             : "/interior/dashboard"
//                         );
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                     >
//                       {isFurniture ? "Furniture" : "Interior"} Dashboard
//                     </button>
//                     <div className="my-1 border-t border-slate-100" />
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         handleLogout();
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
//                     >
//                       <LogOut size={14} />
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>

//               <div className="relative border-l border-slate-200 pl-3">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setUserMenuOpen((v) => !v);
//                     setNotifOpen(false);
//                     setSettingsOpen(false);
//                   }}
//                   className="flex items-center gap-2 rounded-lg px-1 py-1 transition-colors hover:bg-slate-50"
//                 >
//                   <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dff1e8] text-xs font-bold text-[#176b57]">
//                     {avatarLetter}
//                   </div>
//                   <div className="hidden text-left md:block">
//                     <p className="text-xs font-semibold text-slate-800">
//                       {displayName}
//                     </p>
//                     <p className="text-[10px] text-slate-400">{displayRole}</p>
//                   </div>
//                 </button>

//                 {userMenuOpen && (
//                   <div className="absolute right-0 z-50 mt-2 w-52 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
//                     <div className="border-b border-slate-100 px-4 py-3">
//                       <p className="text-sm font-semibold text-slate-800">
//                         {displayName}
//                       </p>
//                       <p className="text-xs text-slate-400">{displayRole}</p>
//                       <p className="mt-1 text-[10px] uppercase tracking-wide text-[#176b57]">
//                         {moduleKey} module
//                       </p>
//                     </div>
//                     {isAdmin && (
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setUserMenuOpen(false);
//                           router.push("/admin/users");
//                         }}
//                         className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                       >
//                         <Users size={14} />
//                         Manage users
//                       </button>
//                     )}
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setUserMenuOpen(false);
//                         handleLogout();
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
//                     >
//                       <LogOut size={14} />
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </header>

//         {searchOpen && (
//           <div className="fixed inset-0 z-[60] flex items-start justify-center bg-black/40 p-4 pt-[12vh] transition-opacity duration-200">
//             <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-200">
//               <form
//                 onSubmit={runSearch}
//                 className="flex items-center gap-2 border-b border-slate-100 px-4 py-3"
//               >
//                 <Search size={18} className="text-slate-400" />
//                 <input
//                   ref={searchInputRef}
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder={`Search in ${moduleName}…`}
//                   className="h-10 flex-1 border-0 bg-transparent text-sm outline-none"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearchOpen(false);
//                     setSearchQuery("");
//                   }}
//                   className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100"
//                 >
//                   <X size={16} />
//                 </button>
//               </form>
//               <div className="max-h-72 overflow-y-auto py-2">
//                 {filteredSearch.length === 0 ? (
//                   <p className="px-4 py-6 text-center text-sm text-slate-500">
//                     No matching pages
//                   </p>
//                 ) : (
//                   filteredSearch.map((item) => (
//                     <button
//                       key={item.href}
//                       type="button"
//                       onClick={() => {
//                         const q = searchQuery.trim();
//                         router.push(
//                           q
//                             ? `${item.href}?search=${encodeURIComponent(q)}`
//                             : item.href
//                         );
//                         setSearchOpen(false);
//                         setSearchQuery("");
//                       }}
//                       className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                     >
//                       <span>{item.label}</span>
//                       <span className="text-[10px] text-slate-400">
//                         {item.href}
//                       </span>
//                     </button>
//                   ))
//                 )}
//               </div>
//               <div className="border-t border-slate-100 px-4 py-2 text-[11px] text-slate-400">
//                 Enter to open · Esc to close
//               </div>
//             </div>
//           </div>
//         )}

//         <main
//           className="min-h-[calc(100vh-64px)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
//           style={{
//             opacity: contentVisible ? 1 : 0,
//             transform: contentVisible
//               ? "translateY(0) scale(1)"
//               : "translateY(8px) scale(0.99)",
//           }}
//         >
//           {displayChildren}
//         </main>
//       </div>

//       <style jsx global>{`
//         @keyframes akrishNavIn {
//           from {
//             opacity: 0;
//             transform: translateX(-6px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//         @keyframes akrishTitleIn {
//           from {
//             opacity: 0;
//             transform: translateY(-4px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import {
//   LogOut,
//   Users,
//   Search,
//   Bell,
//   Settings,
//   X,
//   Sofa,
//   LayoutDashboard,
// } from "lucide-react";
// import {
//   collection,
//   query,
//   orderBy,
//   limit,
//   onSnapshot,
//   type Timestamp,
// } from "firebase/firestore";
// import { useAuth } from "@/core/auth/AuthContext";
// import { db } from "@/core/config/firebaseClient";
// import {
//   markEnquiryNotificationSeen,
//   markEnquiryNotificationsSeen,
// } from "@/modules/furniture/services/enquiryService";

// type NavItem = {
//   label: string;
//   href: string;
//   icon: string;
//   nested?: boolean;
// };

// const navigation: NavItem[] = [
//   { label: "Dashboard", href: "/interior/dashboard", icon: "▦" },
//   { label: "CRM / Leads", href: "/interior/crm", icon: "◉" },
//   { label: "Clients", href: "/interior/clients", icon: "♙" },
//   { label: "Quotations", href: "/interior/quotations", icon: "▤" },
//   { label: "Contracts", href: "/interior/contracts", icon: "▥" },
//   { label: "Projects", href: "/interior/projects", icon: "▣" },
//   { label: "HRMS", href: "/interior/hrms", icon: "♟" },
//   { label: "Vendors", href: "/interior/vendors", icon: "◆" },
//   { label: "Payments", href: "/interior/payments", icon: "₹" },
//   { label: "Reports", href: "/interior/reports", icon: "▥" },
// ];

// const furnitureNavigation: NavItem[] = [
//   { label: "Dashboard", href: "/furniture/dashboard", icon: "▦" },
//   { label: "Products", href: "/furniture/products", icon: "▤" },
//   {
//     label: "Categories",
//     href: "/furniture/categories",
//     icon: "☰",
//     nested: true,
//   },
//   {
//     label: "Sub Categories",
//     href: "/furniture/sub-categories",
//     icon: "▤",
//     nested: true,
//   },
//   {
//     label: "Materials",
//     href: "/furniture/materials",
//     icon: "◆",
//     nested: true,
//   },
//   {
//     label: "Finishes",
//     href: "/furniture/finishes",
//     icon: "▣",
//     nested: true,
//   },
//   { label: "Inventory", href: "/furniture/inventory", icon: "▣" },
//   { label: "Customers", href: "/furniture/customers", icon: "♙" },
//   { label: "Enquiries", href: "/furniture/enquiries", icon: "◉" },
//   { label: "Orders", href: "/furniture/orders", icon: "▥" },
//   { label: "Payments", href: "/furniture/payments", icon: "₹" },
//   {
//     label: "Online Payments",
//     href: "/furniture/online-payments",
//     icon: "◈",
//   },
//   { label: "Expenses", href: "/furniture/expenses", icon: "◆" },
//   { label: "Reports", href: "/furniture/reports", icon: "▥" },
// ];

// type NotificationItem = {
//   id: string;
//   title: string;
//   body: string;
//   href: string;
//   time: string;
//   read: boolean;
//   enquiryId: string;
// };

// const ENQUIRIES_COLLECTION = "furniture_enquiries";

// function formatRelativeTime(value: unknown): string {
//   let date: Date | null = null;
//   if (value && typeof value === "object" && "toDate" in (value as object)) {
//     try {
//       date = (value as Timestamp).toDate();
//     } catch {
//       date = null;
//     }
//   } else if (typeof value === "string" || typeof value === "number") {
//     date = new Date(value);
//   }
//   if (!date || Number.isNaN(date.getTime())) return "Just now";

//   const diffMs = Date.now() - date.getTime();
//   const mins = Math.floor(diffMs / 60000);
//   if (mins < 1) return "Just now";
//   if (mins < 60) return `${mins}m ago`;
//   const hours = Math.floor(mins / 60);
//   if (hours < 24) return `${hours}h ago`;
//   const days = Math.floor(hours / 24);
//   if (days === 1) return "Yesterday";
//   if (days < 7) return `${days}d ago`;
//   return date.toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "short",
//   });
// }

// function getPageTitle(pathname: string) {
//   const allItems = [...navigation, ...furnitureNavigation];
//   const item = allItems.find(
//     (nav) => pathname === nav.href || pathname.startsWith(`${nav.href}/`)
//   );
//   if (pathname.startsWith("/admin/users")) return "Staff Users";
//   return item?.label ?? "Dashboard";
// }

// function Logo() {
//   return (
//     <div className="flex items-center gap-2">
//       <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#176b57] text-white shadow-sm">
//         <span className="text-lg font-bold">A</span>
//       </div>
//       <div className="leading-none">
//         <div className="text-[20px] font-bold tracking-tight text-[#1f2937]">
//           Akrish
//         </div>
//         <div className="mt-1 text-[8px] font-medium uppercase tracking-[0.16em] text-slate-400">
//           Furniture and Interior
//         </div>
//       </div>
//     </div>
//   );
// }

// function HeaderModuleSwitcher({ isFurniture }: { isFurniture: boolean }) {
//   return (
//     <div
//       className="relative flex items-center rounded-full border border-slate-200 bg-slate-50 p-0.5 shadow-sm"
//       role="group"
//       aria-label="Switch ERP module"
//     >
//       <span
//         aria-hidden
//         className="pointer-events-none absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-white shadow-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
//         style={{
//           left: isFurniture ? "calc(50% + 1px)" : "2px",
//         }}
//       />

//       <Link
//         href="/interior/dashboard"
//         className={`relative z-10 flex flex-1 items-center justify-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-300 ${
//           !isFurniture
//             ? "text-[#176b57]"
//             : "text-slate-500 hover:text-slate-700"
//         }`}
//         title="Interior ERP"
//       >
//         <LayoutDashboard
//           size={16}
//           className={`shrink-0 transition-transform duration-300 ${
//             !isFurniture ? "scale-110" : "scale-100"
//           }`}
//         />
//         <span className="hidden sm:inline">Interior</span>
//       </Link>
//       <Link
//         href="/furniture/dashboard"
//         className={`relative z-10 flex flex-1 items-center justify-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-300 ${
//           isFurniture
//             ? "text-[#176b57]"
//             : "text-slate-500 hover:text-slate-700"
//         }`}
//         title="Furniture ERP — Products & Sales"
//       >
//         <Sofa
//           size={16}
//           className={`shrink-0 transition-transform duration-300 ${
//             isFurniture ? "scale-110" : "scale-100"
//           }`}
//         />
//         <span className="hidden sm:inline">Furniture</span>
//       </Link>
//     </div>
//   );
// }

// export default function ERPLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();
//   const router = useRouter();
//   const { user, isAdmin, logout } = useAuth();

//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [notifOpen, setNotifOpen] = useState(false);
//   const [settingsOpen, setSettingsOpen] = useState(false);
//   const [userMenuOpen, setUserMenuOpen] = useState(false);

//   const [contentVisible, setContentVisible] = useState(true);
//   const [displayChildren, setDisplayChildren] = useState(children);
//   const prevModuleRef = useRef<"interior" | "furniture" | null>(null);

//   const searchInputRef = useRef<HTMLInputElement>(null);
//   const headerActionsRef = useRef<HTMLDivElement>(null);

//   // const isFurniture = pathname.startsWith("/furniture");
//   const isFurniture = pathname === "/furniture" || pathname.startsWith("/furniture/");
//   const currentModule: "interior" | "furniture" = isFurniture
//     ? "furniture"
//     : "interior";
//   const currentNavigation = isFurniture ? furnitureNavigation : navigation;
//   const pageTitle = getPageTitle(pathname);
//   const moduleName = isFurniture ? "Furniture ERP" : "Interior ERP";
//   const moduleKey = isFurniture ? "furniture" : "interior";

//   const [notifications, setNotifications] = useState<NotificationItem[]>([]);

//   // Live enquiries → bell (Furniture only; dismiss stored on Firestore)
//   useEffect(() => {
//     if (!isFurniture) {
//       setNotifications([]);
//       setNotifOpen(false);
//       return;
//     }

//     let unsub: (() => void) | undefined;

//     try {
//       const q = query(
//         collection(db, ENQUIRIES_COLLECTION),
//         orderBy("createdAt", "desc"),
//         limit(25)
//       );

//       unsub = onSnapshot(
//         q,
//         (snapshot) => {
//           const items: NotificationItem[] = [];

//           snapshot.forEach((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "New");
//             const seen = data.notificationSeen === true;

//             // Only New + not yet opened from the bell
//             if (status !== "New") return;
//             if (seen) return;

//             const name =
//               String(data.customerName || data.name || "Customer").trim() ||
//               "Customer";
//             const product = String(
//               data.productName || data.productCode || ""
//             ).trim();
//             const source = String(data.source || "Website").trim();
//             const message = String(data.message || "").trim();

//             items.push({
//               id: `enq-${docSnap.id}`,
//               enquiryId: docSnap.id,
//               title: "New enquiry",
//               body: product
//                 ? `${name} · ${product}${source ? ` · ${source}` : ""}`
//                 : message
//                   ? `${name}: ${message.slice(0, 60)}${message.length > 60 ? "…" : ""}`
//                   : `${name} sent a contact request${source ? ` (${source})` : ""}`,
//               href: "/furniture/enquiries",
//               time: formatRelativeTime(data.createdAt),
//               read: false,
//             });
//           });

//           setNotifications(items);
//         },
//         (err) => {
//           console.error("Enquiry notifications listener error:", err);
//         }
//       );
//     } catch (err) {
//       console.error("Failed to start enquiry notifications:", err);
//     }

//     return () => {
//       unsub?.();
//     };
//   }, [isFurniture]);

//   useEffect(() => {
//     const prev = prevModuleRef.current;
//     if (prev !== null && prev !== currentModule) {
//       setContentVisible(false);
//       const t = window.setTimeout(() => {
//         setDisplayChildren(children);
//         setContentVisible(true);
//       }, 180);
//       prevModuleRef.current = currentModule;
//       return () => window.clearTimeout(t);
//     }
//     setDisplayChildren(children);
//     setContentVisible(true);
//     prevModuleRef.current = currentModule;
//   }, [children, currentModule]);

//   useEffect(() => {
//     try {
//       if (pathname.startsWith("/furniture")) {
//         localStorage.setItem("akrish_active_module", "furniture");
//       } else if (pathname.startsWith("/interior")) {
//         localStorage.setItem("akrish_active_module", "interior");
//       }
//     } catch {
//       /* ignore */
//     }
//   }, [pathname]);

//   const unreadCount = notifications.length;

//   useEffect(() => {
//     function onDocClick(e: MouseEvent) {
//       if (
//         headerActionsRef.current &&
//         !headerActionsRef.current.contains(e.target as Node)
//       ) {
//         setNotifOpen(false);
//         setSettingsOpen(false);
//         setUserMenuOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", onDocClick);
//     return () => document.removeEventListener("mousedown", onDocClick);
//   }, []);

//   useEffect(() => {
//     if (searchOpen) {
//       setTimeout(() => searchInputRef.current?.focus(), 50);
//     }
//   }, [searchOpen]);

//   useEffect(() => {
//     function onKey(e: KeyboardEvent) {
//       if (e.key === "Escape") {
//         setSearchOpen(false);
//         setNotifOpen(false);
//         setSettingsOpen(false);
//         setUserMenuOpen(false);
//       }
//     }
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   const searchTargets = useMemo(() => {
//     const base = isFurniture
//       ? [
//           { label: "Products", href: "/furniture/products" },
//           { label: "Inventory", href: "/furniture/inventory" },
//           { label: "Categories", href: "/furniture/categories" },
//           { label: "Sub Categories", href: "/furniture/sub-categories" },
//           { label: "Materials", href: "/furniture/materials" },
//           { label: "Finishes", href: "/furniture/finishes" },
//           { label: "Customers", href: "/furniture/customers" },
//           { label: "Enquiries", href: "/furniture/enquiries" },
//           { label: "Orders", href: "/furniture/orders" },
//           { label: "Payments", href: "/furniture/payments" },
//           { label: "Expenses", href: "/furniture/expenses" },
//           { label: "Reports", href: "/furniture/reports" },
//         ]
//       : [
//           { label: "CRM / Leads", href: "/interior/crm" },
//           { label: "Clients", href: "/interior/clients" },
//           { label: "Quotations", href: "/interior/quotations" },
//           { label: "Contracts", href: "/interior/contracts" },
//           { label: "Projects", href: "/interior/projects" },
//           { label: "HRMS", href: "/interior/hrms" },
//           { label: "Vendors", href: "/interior/vendors" },
//           { label: "Payments", href: "/interior/payments" },
//           { label: "Reports", href: "/interior/reports" },
//         ];

//     if (isAdmin) {
//       base.push({ label: "Staff Users", href: "/admin/users" });
//     }
//     return base;
//   }, [isFurniture, isAdmin]);

//   const filteredSearch = useMemo(() => {
//     const q = searchQuery.toLowerCase().trim();
//     if (!q) return searchTargets;
//     return searchTargets.filter((t) => t.label.toLowerCase().includes(q));
//   }, [searchQuery, searchTargets]);

//   function runSearch(e?: React.FormEvent) {
//     e?.preventDefault();
//     const q = searchQuery.trim();
//     if (!q) return;

//     const match = filteredSearch[0];
//     if (match) {
//       router.push(`${match.href}?search=${encodeURIComponent(q)}`);
//     } else if (isFurniture) {
//       router.push(`/furniture/products?search=${encodeURIComponent(q)}`);
//     } else {
//       router.push(`/interior/crm?search=${encodeURIComponent(q)}`);
//     }
//     setSearchOpen(false);
//     setSearchQuery("");
//   }

//   async function openNotification(n: NotificationItem) {
//     setNotifications((list) => list.filter((item) => item.id !== n.id));
//     setNotifOpen(false);
//     router.push(n.href);

//     try {
//       await markEnquiryNotificationSeen(n.enquiryId);
//     } catch (err) {
//       console.error("Failed to mark notification seen:", err);
//     }
//   }

//   async function markAllRead() {
//     const ids = notifications.map((n) => n.enquiryId);
//     setNotifications([]);
//     setNotifOpen(false);
//     try {
//       await markEnquiryNotificationsSeen(ids);
//     } catch (err) {
//       console.error("Failed to clear notifications:", err);
//     }
//   }

//   const handleLogout = () => {
//     logout();
//     router.push("/login");
//   };

//   const displayName = user?.name || "User";
//   const displayRole = user?.role
//     ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
//     : "Staff";
//   const avatarLetter = displayName.charAt(0).toUpperCase();

//   return (
//     <div className="min-h-screen bg-[#f7f9f8] text-slate-800">
//       {sidebarOpen && (
//         <button
//           type="button"
//           aria-label="Close sidebar"
//           onClick={() => setSidebarOpen(false)}
//           className="fixed inset-0 z-40 bg-black/30 transition-opacity duration-200 lg:hidden"
//         />
//       )}

//       <aside
//         className={`fixed inset-y-0 left-0 z-50 flex w-[235px] flex-col border-r border-slate-200 bg-white transition-transform duration-200 ease-out ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
//         }`}
//       >
//         <div className="flex h-[72px] items-center border-b border-slate-100 px-5">
//           <Logo />
//           <button
//             type="button"
//             onClick={() => setSidebarOpen(false)}
//             className="ml-auto flex h-8 w-8 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 lg:hidden"
//           >
//             ×
//           </button>
//         </div>

//         <nav className="mt-4 flex-1 overflow-y-auto px-3 pb-4">
//           <p
//             key={moduleKey + "-label"}
//             className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400 transition-opacity duration-300"
//           >
//             {isFurniture ? "Furniture Management" : "Interior Management"}
//           </p>

//           <div
//             key={moduleKey + "-nav"}
//             className="space-y-1"
//             style={{
//               animation: "akrishNavIn 0.32s cubic-bezier(0.22, 1, 0.36, 1)",
//             }}
//           >
//             {currentNavigation.map((item) => {
//               const active =
//                 pathname === item.href || pathname.startsWith(`${item.href}/`);

//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setSidebarOpen(false)}
//                   className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-200 ${
//                     item.nested ? "ml-3 border-l border-slate-200 pl-3" : ""
//                   } ${
//                     active
//                       ? "bg-[#e8f5ef] text-[#176b57]"
//                       : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                   }`}
//                 >
//                   <span
//                     className={`flex h-6 w-6 items-center justify-center rounded-md text-[13px] transition-colors duration-200 ${
//                       active
//                         ? "bg-[#176b57] text-white"
//                         : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
//                     }`}
//                   >
//                     {item.icon}
//                   </span>
//                   <span>{item.label}</span>
//                   {active && (
//                     <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#176b57]" />
//                   )}
//                 </Link>
//               );
//             })}

//             {isAdmin && (
//               <>
//                 <div className="my-3 border-t border-slate-100" />
//                 <p className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
//                   Administration
//                 </p>
//                 <Link
//                   href="/admin/users"
//                   onClick={() => setSidebarOpen(false)}
//                   className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-200 ${
//                     pathname.startsWith("/admin/users")
//                       ? "bg-[#e8f5ef] text-[#176b57]"
//                       : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                   }`}
//                 >
//                   <span
//                     className={`flex h-6 w-6 items-center justify-center rounded-md transition-colors duration-200 ${
//                       pathname.startsWith("/admin/users")
//                         ? "bg-[#176b57] text-white"
//                         : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
//                     }`}
//                   >
//                     <Users size={14} />
//                   </span>
//                   <span>Staff Users</span>
//                 </Link>
//               </>
//             )}
//           </div>
//         </nav>

//         <div className="border-t border-slate-100 p-3">
//           <div className="rounded-lg bg-slate-50 p-3">
//             <div className="flex items-center gap-2">
//               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#176b57] text-xs font-bold text-white">
//                 {avatarLetter}
//               </div>
//               <div className="min-w-0 flex-1">
//                 <p className="truncate text-xs font-semibold text-slate-800">
//                   {displayName}
//                 </p>
//                 <p className="truncate text-[10px] text-slate-400">
//                   {displayRole}
//                 </p>
//               </div>
//               <button
//                 type="button"
//                 onClick={handleLogout}
//                 className="flex h-7 w-7 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-600"
//                 title="Logout"
//               >
//                 <LogOut size={14} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </aside>

//       <div className="min-h-screen lg:pl-[235px]">
//         <header className="sticky top-0 z-30 h-[64px] border-b border-slate-200 bg-white/95 backdrop-blur">
//           <div className="flex h-full items-center justify-between px-4 md:px-6">
//             <div className="flex items-center gap-3">
//               <button
//                 type="button"
//                 onClick={() => setSidebarOpen(true)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 lg:hidden"
//                 aria-label="Open navigation"
//               >
//                 ☰
//               </button>

//               <div
//                 key={moduleKey + "-title"}
//                 className="transition-all duration-300 ease-out"
//                 style={{
//                   animation:
//                     "akrishTitleIn 0.28s cubic-bezier(0.22, 1, 0.36, 1)",
//                 }}
//               >
//                 <p className="text-[10px] uppercase tracking-wide text-slate-400">
//                   {moduleName}
//                 </p>
//                 <h1 className="text-sm font-semibold text-slate-800">
//                   {pageTitle}
//                 </h1>
//               </div>
//             </div>

//             <div
//               ref={headerActionsRef}
//               className="relative flex items-center gap-1 md:gap-2"
//             >
//               <HeaderModuleSwitcher isFurniture={isFurniture} />

//               <button
//                 type="button"
//                 onClick={() => {
//                   setSearchOpen(true);
//                   setNotifOpen(false);
//                   setSettingsOpen(false);
//                   setUserMenuOpen(false);
//                 }}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100"
//                 aria-label="Search"
//               >
//                 <Search size={18} />
//               </button>

//               {/* Notifications — Furniture only */}
//               {isFurniture && (
//                 <div className="relative">
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setNotifOpen((v) => !v);
//                       setSettingsOpen(false);
//                       setUserMenuOpen(false);
//                     }}
//                     className="relative flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100"
//                     aria-label="Notifications"
//                   >
//                     <Bell size={18} />
//                     {unreadCount > 0 && (
//                       <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
//                         {unreadCount > 9 ? "9+" : unreadCount}
//                       </span>
//                     )}
//                   </button>

//                   {notifOpen && (
//                     <div className="absolute right-0 z-50 mt-2 w-80 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
//                       <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
//                         <p className="text-sm font-semibold text-slate-800">
//                           Notifications
//                         </p>
//                         {notifications.length > 0 && (
//                           <button
//                             type="button"
//                             onClick={markAllRead}
//                             className="text-xs font-medium text-[#176b57] hover:underline"
//                           >
//                             Clear all
//                           </button>
//                         )}
//                       </div>
//                       <div className="max-h-72 overflow-y-auto">
//                         {notifications.length === 0 ? (
//                           <div className="px-4 py-10 text-center">
//                             <Bell
//                               size={28}
//                               className="mx-auto mb-2 text-slate-300"
//                             />
//                             <p className="text-sm font-medium text-slate-600">
//                               No notifications
//                             </p>
//                             <p className="mt-1 text-xs text-slate-400">
//                               New website enquiries will appear here
//                             </p>
//                           </div>
//                         ) : (
//                           notifications.map((n) => (
//                             <button
//                               key={n.id}
//                               type="button"
//                               onClick={() => openNotification(n)}
//                               className="flex w-full flex-col gap-0.5 border-b border-slate-50 bg-[#f4fbf8] px-4 py-3 text-left transition-colors hover:bg-slate-50"
//                             >
//                               <div className="flex items-center justify-between gap-2">
//                                 <p className="text-sm font-semibold text-slate-800">
//                                   {n.title}
//                                 </p>
//                                 <span className="shrink-0 text-[10px] text-slate-400">
//                                   {n.time}
//                                 </span>
//                               </div>
//                               <p className="text-xs text-slate-500">{n.body}</p>
//                             </button>
//                           ))
//                         )}
//                       </div>
//                       {notifications.length > 0 && (
//                         <button
//                           type="button"
//                           onClick={() => {
//                             setNotifOpen(false);
//                             router.push("/furniture/enquiries");
//                           }}
//                           className="w-full border-t border-slate-100 px-4 py-2.5 text-center text-xs font-semibold text-[#176b57] hover:bg-slate-50"
//                         >
//                           View all enquiries
//                         </button>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               )}

//               <div className="relative hidden sm:block">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSettingsOpen((v) => !v);
//                     setNotifOpen(false);
//                     setUserMenuOpen(false);
//                   }}
//                   className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100"
//                   aria-label="Settings"
//                 >
//                   <Settings size={18} />
//                 </button>

//                 {settingsOpen && (
//                   <div className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
//                     {isAdmin && (
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setSettingsOpen(false);
//                           router.push("/admin/users");
//                         }}
//                         className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                       >
//                         <Users size={14} />
//                         Staff Users
//                       </button>
//                     )}
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         router.push(
//                           isFurniture
//                             ? "/furniture/reports"
//                             : "/interior/reports"
//                         );
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                     >
//                       Reports
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         router.push(
//                           isFurniture
//                             ? "/furniture/dashboard"
//                             : "/interior/dashboard"
//                         );
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                     >
//                       {isFurniture ? "Furniture" : "Interior"} Dashboard
//                     </button>
//                     <div className="my-1 border-t border-slate-100" />
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         handleLogout();
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
//                     >
//                       <LogOut size={14} />
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>

//               <div className="relative border-l border-slate-200 pl-3">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setUserMenuOpen((v) => !v);
//                     setNotifOpen(false);
//                     setSettingsOpen(false);
//                   }}
//                   className="flex items-center gap-2 rounded-lg px-1 py-1 transition-colors hover:bg-slate-50"
//                 >
//                   <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dff1e8] text-xs font-bold text-[#176b57]">
//                     {avatarLetter}
//                   </div>
//                   <div className="hidden text-left md:block">
//                     <p className="text-xs font-semibold text-slate-800">
//                       {displayName}
//                     </p>
//                     <p className="text-[10px] text-slate-400">{displayRole}</p>
//                   </div>
//                 </button>

//                 {userMenuOpen && (
//                   <div className="absolute right-0 z-50 mt-2 w-52 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
//                     <div className="border-b border-slate-100 px-4 py-3">
//                       <p className="text-sm font-semibold text-slate-800">
//                         {displayName}
//                       </p>
//                       <p className="text-xs text-slate-400">{displayRole}</p>
//                       <p className="mt-1 text-[10px] uppercase tracking-wide text-[#176b57]">
//                         {moduleKey} module
//                       </p>
//                     </div>
//                     {isAdmin && (
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setUserMenuOpen(false);
//                           router.push("/admin/users");
//                         }}
//                         className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                       >
//                         <Users size={14} />
//                         Manage users
//                       </button>
//                     )}
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setUserMenuOpen(false);
//                         handleLogout();
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
//                     >
//                       <LogOut size={14} />
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </header>

//         {searchOpen && (
//           <div className="fixed inset-0 z-[60] flex items-start justify-center bg-black/40 p-4 pt-[12vh] transition-opacity duration-200">
//             <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-200">
//               <form
//                 onSubmit={runSearch}
//                 className="flex items-center gap-2 border-b border-slate-100 px-4 py-3"
//               >
//                 <Search size={18} className="text-slate-400" />
//                 <input
//                   ref={searchInputRef}
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder={`Search in ${moduleName}…`}
//                   className="h-10 flex-1 border-0 bg-transparent text-sm outline-none"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearchOpen(false);
//                     setSearchQuery("");
//                   }}
//                   className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100"
//                 >
//                   <X size={16} />
//                 </button>
//               </form>
//               <div className="max-h-72 overflow-y-auto py-2">
//                 {filteredSearch.length === 0 ? (
//                   <p className="px-4 py-6 text-center text-sm text-slate-500">
//                     No matching pages
//                   </p>
//                 ) : (
//                   filteredSearch.map((item) => (
//                     <button
//                       key={item.href}
//                       type="button"
//                       onClick={() => {
//                         const q = searchQuery.trim();
//                         router.push(
//                           q
//                             ? `${item.href}?search=${encodeURIComponent(q)}`
//                             : item.href
//                         );
//                         setSearchOpen(false);
//                         setSearchQuery("");
//                       }}
//                       className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                     >
//                       <span>{item.label}</span>
//                       <span className="text-[10px] text-slate-400">
//                         {item.href}
//                       </span>
//                     </button>
//                   ))
//                 )}
//               </div>
//               <div className="border-t border-slate-100 px-4 py-2 text-[11px] text-slate-400">
//                 Enter to open · Esc to close
//               </div>
//             </div>
//           </div>
//         )}

//         <main
//           className="min-h-[calc(100vh-64px)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
//           style={{
//             opacity: contentVisible ? 1 : 0,
//             transform: contentVisible
//               ? "translateY(0) scale(1)"
//               : "translateY(8px) scale(0.99)",
//           }}
//         >
//           {displayChildren}
//         </main>
//       </div>

//       <style jsx global>{`
//         @keyframes akrishNavIn {
//           from {
//             opacity: 0;
//             transform: translateX(-6px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//         @keyframes akrishTitleIn {
//           from {
//             opacity: 0;
//             transform: translateY(-4px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import {
//   LogOut,
//   Users,
//   Search,
//   Bell,
//   Settings,
//   X,
//   Sofa,
//   LayoutDashboard,
// } from "lucide-react";
// import {
//   collection,
//   query,
//   orderBy,
//   limit,
//   onSnapshot,
//   type Timestamp,
// } from "firebase/firestore";
// import { useAuth } from "@/core/auth/AuthContext";
// import { db } from "@/core/config/firebaseClient";
// import {
//   markEnquiryNotificationSeen,
//   markEnquiryNotificationsSeen,
// } from "@/modules/furniture/services/enquiryService";

// type NavItem = {
//   label: string;
//   href: string;
//   icon: string;
//   nested?: boolean;
// };

// const navigation: NavItem[] = [
//   { label: "Dashboard", href: "/interior/dashboard", icon: "▦" },
//   { label: "CRM / Leads", href: "/interior/crm", icon: "◉" },
//   { label: "Clients", href: "/interior/clients", icon: "♙" },
//   { label: "Quotations", href: "/interior/quotations", icon: "▤" },
//   { label: "Contracts", href: "/interior/contracts", icon: "▥" },
//   { label: "Projects", href: "/interior/projects", icon: "▣" },
//   { label: "HRMS", href: "/interior/hrms", icon: "♟" },
//   { label: "Vendors", href: "/interior/vendors", icon: "◆" },
//   { label: "Payments", href: "/interior/payments", icon: "₹" },
//   { label: "Reports", href: "/interior/reports", icon: "▥" },
// ];

// const furnitureNavigation: NavItem[] = [
//   { label: "Dashboard", href: "/furniture/dashboard", icon: "▦" },
//   { label: "Products", href: "/furniture/products", icon: "▤" },
//   {
//     label: "Categories",
//     href: "/furniture/categories",
//     icon: "☰",
//     nested: true,
//   },
//   {
//     label: "Sub Categories",
//     href: "/furniture/sub-categories",
//     icon: "▤",
//     nested: true,
//   },
//   {
//     label: "Materials",
//     href: "/furniture/materials",
//     icon: "◆",
//     nested: true,
//   },
//   {
//     label: "Finishes",
//     href: "/furniture/finishes",
//     icon: "▣",
//     nested: true,
//   },
//   { label: "Inventory", href: "/furniture/inventory", icon: "▣" },
//   { label: "Customers", href: "/furniture/customers", icon: "♙" },
//   { label: "Enquiries", href: "/furniture/enquiries", icon: "◉" },
//   { label: "Orders", href: "/furniture/orders", icon: "▥" },
//   { label: "Payments", href: "/furniture/payments", icon: "₹" },
//   {
//     label: "Online Payments",
//     href: "/furniture/online-payments",
//     icon: "◈",
//   },
//   { label: "Expenses", href: "/furniture/expenses", icon: "◆" },
//   { label: "Reports", href: "/furniture/reports", icon: "▥" },
// ];

// type NotificationItem = {
//   id: string;
//   title: string;
//   body: string;
//   href: string;
//   time: string;
//   read: boolean;
//   enquiryId: string;
// };

// const ENQUIRIES_COLLECTION = "furniture_enquiries";

// function formatRelativeTime(value: unknown): string {
//   let date: Date | null = null;
//   if (value && typeof value === "object" && "toDate" in (value as object)) {
//     try {
//       date = (value as Timestamp).toDate();
//     } catch {
//       date = null;
//     }
//   } else if (typeof value === "string" || typeof value === "number") {
//     date = new Date(value);
//   }
//   if (!date || Number.isNaN(date.getTime())) return "Just now";

//   const diffMs = Date.now() - date.getTime();
//   const mins = Math.floor(diffMs / 60000);
//   if (mins < 1) return "Just now";
//   if (mins < 60) return `${mins}m ago`;
//   const hours = Math.floor(mins / 60);
//   if (hours < 24) return `${hours}h ago`;
//   const days = Math.floor(hours / 24);
//   if (days === 1) return "Yesterday";
//   if (days < 7) return `${days}d ago`;
//   return date.toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "short",
//   });
// }

// function getPageTitle(pathname: string) {
//   const allItems = [...navigation, ...furnitureNavigation];
//   const item = allItems.find(
//     (nav) => pathname === nav.href || pathname.startsWith(`${nav.href}/`)
//   );
//   if (pathname.startsWith("/admin/users")) return "Staff Users";
//   return item?.label ?? "Dashboard";
// }

// function Logo() {
//   return (
//     <div className="flex items-center gap-2">
//       <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#176b57] text-white shadow-sm">
//         <span className="text-lg font-bold">A</span>
//       </div>
//       <div className="leading-none">
//         <div className="text-[20px] font-bold tracking-tight text-[#1f2937]">
//           Akrish
//         </div>
//         <div className="mt-1 text-[8px] font-medium uppercase tracking-[0.16em] text-slate-400">
//           Furniture and Interior
//         </div>
//       </div>
//     </div>
//   );
// }

// function HeaderModuleSwitcher({
//   isFurniture,
//   canInterior,
//   canFurniture,
// }: {
//   isFurniture: boolean;
//   canInterior: boolean;
//   canFurniture: boolean;
// }) {
//   // Only one module access → hide switcher
//   if (!canInterior || !canFurniture) {
//     return null;
//   }

//   return (
//     <div
//       className="relative flex items-center rounded-full border border-slate-200 bg-slate-50 p-0.5 shadow-sm"
//       role="group"
//       aria-label="Switch ERP module"
//     >
//       <span
//         aria-hidden
//         className="pointer-events-none absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-white shadow-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
//         style={{
//           left: isFurniture ? "calc(50% + 1px)" : "2px",
//         }}
//       />

//       <Link
//         href="/interior/dashboard"
//         className={`relative z-10 flex flex-1 items-center justify-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-300 ${
//           !isFurniture
//             ? "text-[#176b57]"
//             : "text-slate-500 hover:text-slate-700"
//         }`}
//         title="Interior ERP"
//       >
//         <LayoutDashboard
//           size={16}
//           className={`shrink-0 transition-transform duration-300 ${
//             !isFurniture ? "scale-110" : "scale-100"
//           }`}
//         />
//         <span className="hidden sm:inline">Interior</span>
//       </Link>

//       <Link
//         href="/furniture/dashboard"
//         className={`relative z-10 flex flex-1 items-center justify-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-300 ${
//           isFurniture
//             ? "text-[#176b57]"
//             : "text-slate-500 hover:text-slate-700"
//         }`}
//         title="Furniture ERP — Products & Sales"
//       >
//         <Sofa
//           size={16}
//           className={`shrink-0 transition-transform duration-300 ${
//             isFurniture ? "scale-110" : "scale-100"
//           }`}
//         />
//         <span className="hidden sm:inline">Furniture</span>
//       </Link>
//     </div>
//   );
// }

// export default function ERPLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();
//   const router = useRouter();
//   const { user, isAdmin, logout, hasModule, isLoading } = useAuth();

//   const canInterior = hasModule("interior");
//   const canFurniture = hasModule("furniture");

//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [notifOpen, setNotifOpen] = useState(false);
//   const [settingsOpen, setSettingsOpen] = useState(false);
//   const [userMenuOpen, setUserMenuOpen] = useState(false);

//   const [contentVisible, setContentVisible] = useState(true);
//   const [displayChildren, setDisplayChildren] = useState(children);
//   const prevModuleRef = useRef<"interior" | "furniture" | null>(null);

//   const searchInputRef = useRef<HTMLInputElement>(null);
//   const headerActionsRef = useRef<HTMLDivElement>(null);

//   const isFurniture =
//     pathname === "/furniture" || pathname.startsWith("/furniture/");
//   const currentModule: "interior" | "furniture" = isFurniture
//     ? "furniture"
//     : "interior";
//   const currentNavigation = isFurniture ? furnitureNavigation : navigation;
//   const pageTitle = getPageTitle(pathname);
//   const moduleName = isFurniture ? "Furniture ERP" : "Interior ERP";
//   const moduleKey = isFurniture ? "furniture" : "interior";

//   const [notifications, setNotifications] = useState<NotificationItem[]>([]);

//   // Block module the user does not have access to
//   useEffect(() => {
//     if (isLoading || !user) return;

//     if (pathname.startsWith("/furniture") && !canFurniture) {
//       router.replace(canInterior ? "/interior/dashboard" : "/unauthorized");
//       return;
//     }

//     if (pathname.startsWith("/interior") && !canInterior) {
//       router.replace(canFurniture ? "/furniture/dashboard" : "/unauthorized");
//     }
//   }, [isLoading, user, pathname, canInterior, canFurniture, router]);

//   // Live enquiries → bell (Furniture only)
//   useEffect(() => {
//     if (!isFurniture || !canFurniture) {
//       setNotifications([]);
//       setNotifOpen(false);
//       return;
//     }

//     let unsub: (() => void) | undefined;

//     try {
//       const q = query(
//         collection(db, ENQUIRIES_COLLECTION),
//         orderBy("createdAt", "desc"),
//         limit(25)
//       );

//       unsub = onSnapshot(
//         q,
//         (snapshot) => {
//           const items: NotificationItem[] = [];

//           snapshot.forEach((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "New");
//             const seen = data.notificationSeen === true;

//             if (status !== "New") return;
//             if (seen) return;

//             const name =
//               String(data.customerName || data.name || "Customer").trim() ||
//               "Customer";
//             const product = String(
//               data.productName || data.productCode || ""
//             ).trim();
//             const source = String(data.source || "Website").trim();
//             const message = String(data.message || "").trim();

//             items.push({
//               id: `enq-${docSnap.id}`,
//               enquiryId: docSnap.id,
//               title: "New enquiry",
//               body: product
//                 ? `${name} · ${product}${source ? ` · ${source}` : ""}`
//                 : message
//                   ? `${name}: ${message.slice(0, 60)}${message.length > 60 ? "…" : ""}`
//                   : `${name} sent a contact request${source ? ` (${source})` : ""}`,
//               href: "/furniture/enquiries",
//               time: formatRelativeTime(data.createdAt),
//               read: false,
//             });
//           });

//           setNotifications(items);
//         },
//         (err) => {
//           console.error("Enquiry notifications listener error:", err);
//         }
//       );
//     } catch (err) {
//       console.error("Failed to start enquiry notifications:", err);
//     }

//     return () => {
//       unsub?.();
//     };
//   }, [isFurniture, canFurniture]);

//   useEffect(() => {
//     const prev = prevModuleRef.current;
//     if (prev !== null && prev !== currentModule) {
//       setContentVisible(false);
//       const t = window.setTimeout(() => {
//         setDisplayChildren(children);
//         setContentVisible(true);
//       }, 180);
//       prevModuleRef.current = currentModule;
//       return () => window.clearTimeout(t);
//     }
//     setDisplayChildren(children);
//     setContentVisible(true);
//     prevModuleRef.current = currentModule;
//   }, [children, currentModule]);

//   useEffect(() => {
//     try {
//       if (pathname.startsWith("/furniture")) {
//         localStorage.setItem("akrish_active_module", "furniture");
//       } else if (pathname.startsWith("/interior")) {
//         localStorage.setItem("akrish_active_module", "interior");
//       }
//     } catch {
//       /* ignore */
//     }
//   }, [pathname]);

//   const unreadCount = notifications.length;

//   useEffect(() => {
//     function onDocClick(e: MouseEvent) {
//       if (
//         headerActionsRef.current &&
//         !headerActionsRef.current.contains(e.target as Node)
//       ) {
//         setNotifOpen(false);
//         setSettingsOpen(false);
//         setUserMenuOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", onDocClick);
//     return () => document.removeEventListener("mousedown", onDocClick);
//   }, []);

//   useEffect(() => {
//     if (searchOpen) {
//       setTimeout(() => searchInputRef.current?.focus(), 50);
//     }
//   }, [searchOpen]);

//   useEffect(() => {
//     function onKey(e: KeyboardEvent) {
//       if (e.key === "Escape") {
//         setSearchOpen(false);
//         setNotifOpen(false);
//         setSettingsOpen(false);
//         setUserMenuOpen(false);
//       }
//     }
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   const searchTargets = useMemo(() => {
//     const base = isFurniture
//       ? [
//           { label: "Products", href: "/furniture/products" },
//           { label: "Inventory", href: "/furniture/inventory" },
//           { label: "Categories", href: "/furniture/categories" },
//           { label: "Sub Categories", href: "/furniture/sub-categories" },
//           { label: "Materials", href: "/furniture/materials" },
//           { label: "Finishes", href: "/furniture/finishes" },
//           { label: "Customers", href: "/furniture/customers" },
//           { label: "Enquiries", href: "/furniture/enquiries" },
//           { label: "Orders", href: "/furniture/orders" },
//           { label: "Payments", href: "/furniture/payments" },
//           { label: "Expenses", href: "/furniture/expenses" },
//           { label: "Reports", href: "/furniture/reports" },
//         ]
//       : [
//           { label: "CRM / Leads", href: "/interior/crm" },
//           { label: "Clients", href: "/interior/clients" },
//           { label: "Quotations", href: "/interior/quotations" },
//           { label: "Contracts", href: "/interior/contracts" },
//           { label: "Projects", href: "/interior/projects" },
//           { label: "HRMS", href: "/interior/hrms" },
//           { label: "Vendors", href: "/interior/vendors" },
//           { label: "Payments", href: "/interior/payments" },
//           { label: "Reports", href: "/interior/reports" },
//         ];

//     if (isAdmin) {
//       base.push({ label: "Staff Users", href: "/admin/users" });
//     }
//     return base;
//   }, [isFurniture, isAdmin]);

//   const filteredSearch = useMemo(() => {
//     const q = searchQuery.toLowerCase().trim();
//     if (!q) return searchTargets;
//     return searchTargets.filter((t) => t.label.toLowerCase().includes(q));
//   }, [searchQuery, searchTargets]);

//   function runSearch(e?: React.FormEvent) {
//     e?.preventDefault();
//     const q = searchQuery.trim();
//     if (!q) return;

//     const match = filteredSearch[0];
//     if (match) {
//       router.push(`${match.href}?search=${encodeURIComponent(q)}`);
//     } else if (isFurniture) {
//       router.push(`/furniture/products?search=${encodeURIComponent(q)}`);
//     } else {
//       router.push(`/interior/crm?search=${encodeURIComponent(q)}`);
//     }
//     setSearchOpen(false);
//     setSearchQuery("");
//   }

//   async function openNotification(n: NotificationItem) {
//     setNotifications((list) => list.filter((item) => item.id !== n.id));
//     setNotifOpen(false);
//     router.push(n.href);

//     try {
//       await markEnquiryNotificationSeen(n.enquiryId);
//     } catch (err) {
//       console.error("Failed to mark notification seen:", err);
//     }
//   }

//   async function markAllRead() {
//     const ids = notifications.map((n) => n.enquiryId);
//     setNotifications([]);
//     setNotifOpen(false);
//     try {
//       await markEnquiryNotificationsSeen(ids);
//     } catch (err) {
//       console.error("Failed to clear notifications:", err);
//     }
//   }

//   const handleLogout = () => {
//     logout();
//     router.push("/login");
//   };

//   const displayName = user?.name || "User";
//   const displayRole = user?.role
//     ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
//     : "Staff";
//   const avatarLetter = displayName.charAt(0).toUpperCase();

//   return (
//     <div className="min-h-screen bg-[#f7f9f8] text-slate-800">
//       {sidebarOpen && (
//         <button
//           type="button"
//           aria-label="Close sidebar"
//           onClick={() => setSidebarOpen(false)}
//           className="fixed inset-0 z-40 bg-black/30 transition-opacity duration-200 lg:hidden"
//         />
//       )}

//       <aside
//         className={`fixed inset-y-0 left-0 z-50 flex w-[235px] flex-col border-r border-slate-200 bg-white transition-transform duration-200 ease-out ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
//         }`}
//       >
//         <div className="flex h-[72px] items-center border-b border-slate-100 px-5">
//           <Logo />
//           <button
//             type="button"
//             onClick={() => setSidebarOpen(false)}
//             className="ml-auto flex h-8 w-8 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 lg:hidden"
//           >
//             ×
//           </button>
//         </div>

//         <nav className="mt-4 flex-1 overflow-y-auto px-3 pb-4">
//           <p
//             key={moduleKey + "-label"}
//             className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400 transition-opacity duration-300"
//           >
//             {isFurniture ? "Furniture Management" : "Interior Management"}
//           </p>

//           <div
//             key={moduleKey + "-nav"}
//             className="space-y-1"
//             style={{
//               animation: "akrishNavIn 0.32s cubic-bezier(0.22, 1, 0.36, 1)",
//             }}
//           >
//             {currentNavigation.map((item) => {
//               const active =
//                 pathname === item.href || pathname.startsWith(`${item.href}/`);

//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setSidebarOpen(false)}
//                   className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-200 ${
//                     item.nested ? "ml-3 border-l border-slate-200 pl-3" : ""
//                   } ${
//                     active
//                       ? "bg-[#e8f5ef] text-[#176b57]"
//                       : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                   }`}
//                 >
//                   <span
//                     className={`flex h-6 w-6 items-center justify-center rounded-md text-[13px] transition-colors duration-200 ${
//                       active
//                         ? "bg-[#176b57] text-white"
//                         : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
//                     }`}
//                   >
//                     {item.icon}
//                   </span>
//                   <span>{item.label}</span>
//                   {active && (
//                     <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#176b57]" />
//                   )}
//                 </Link>
//               );
//             })}

//             {isAdmin && (
//               <>
//                 <div className="my-3 border-t border-slate-100" />
//                 <p className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
//                   Administration
//                 </p>
//                 <Link
//                   href="/admin/users"
//                   onClick={() => setSidebarOpen(false)}
//                   className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-200 ${
//                     pathname.startsWith("/admin/users")
//                       ? "bg-[#e8f5ef] text-[#176b57]"
//                       : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                   }`}
//                 >
//                   <span
//                     className={`flex h-6 w-6 items-center justify-center rounded-md transition-colors duration-200 ${
//                       pathname.startsWith("/admin/users")
//                         ? "bg-[#176b57] text-white"
//                         : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
//                     }`}
//                   >
//                     <Users size={14} />
//                   </span>
//                   <span>Staff Users</span>
//                 </Link>
//               </>
//             )}
//           </div>
//         </nav>

//         <div className="border-t border-slate-100 p-3">
//           <div className="rounded-lg bg-slate-50 p-3">
//             <div className="flex items-center gap-2">
//               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#176b57] text-xs font-bold text-white">
//                 {avatarLetter}
//               </div>
//               <div className="min-w-0 flex-1">
//                 <p className="truncate text-xs font-semibold text-slate-800">
//                   {displayName}
//                 </p>
//                 <p className="truncate text-[10px] text-slate-400">
//                   {displayRole}
//                 </p>
//               </div>
//               <button
//                 type="button"
//                 onClick={handleLogout}
//                 className="flex h-7 w-7 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-600"
//                 title="Logout"
//               >
//                 <LogOut size={14} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </aside>

//       <div className="min-h-screen lg:pl-[235px]">
//         <header className="sticky top-0 z-30 h-[64px] border-b border-slate-200 bg-white/95 backdrop-blur">
//           <div className="flex h-full items-center justify-between px-4 md:px-6">
//             <div className="flex items-center gap-3">
//               <button
//                 type="button"
//                 onClick={() => setSidebarOpen(true)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 lg:hidden"
//                 aria-label="Open navigation"
//               >
//                 ☰
//               </button>

//               <div
//                 key={moduleKey + "-title"}
//                 className="transition-all duration-300 ease-out"
//                 style={{
//                   animation:
//                     "akrishTitleIn 0.28s cubic-bezier(0.22, 1, 0.36, 1)",
//                 }}
//               >
//                 <p className="text-[10px] uppercase tracking-wide text-slate-400">
//                   {moduleName}
//                 </p>
//                 <h1 className="text-sm font-semibold text-slate-800">
//                   {pageTitle}
//                 </h1>
//               </div>
//             </div>

//             <div
//               ref={headerActionsRef}
//               className="relative flex items-center gap-1 md:gap-2"
//             >
//               <HeaderModuleSwitcher
//                 isFurniture={isFurniture}
//                 canInterior={canInterior}
//                 canFurniture={canFurniture}
//               />

//               <button
//                 type="button"
//                 onClick={() => {
//                   setSearchOpen(true);
//                   setNotifOpen(false);
//                   setSettingsOpen(false);
//                   setUserMenuOpen(false);
//                 }}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100"
//                 aria-label="Search"
//               >
//                 <Search size={18} />
//               </button>

//               {isFurniture && canFurniture && (
//                 <div className="relative">
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setNotifOpen((v) => !v);
//                       setSettingsOpen(false);
//                       setUserMenuOpen(false);
//                     }}
//                     className="relative flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100"
//                     aria-label="Notifications"
//                   >
//                     <Bell size={18} />
//                     {unreadCount > 0 && (
//                       <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
//                         {unreadCount > 9 ? "9+" : unreadCount}
//                       </span>
//                     )}
//                   </button>

//                   {notifOpen && (
//                     <div className="absolute right-0 z-50 mt-2 w-80 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
//                       <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
//                         <p className="text-sm font-semibold text-slate-800">
//                           Notifications
//                         </p>
//                         {notifications.length > 0 && (
//                           <button
//                             type="button"
//                             onClick={markAllRead}
//                             className="text-xs font-medium text-[#176b57] hover:underline"
//                           >
//                             Clear all
//                           </button>
//                         )}
//                       </div>
//                       <div className="max-h-72 overflow-y-auto">
//                         {notifications.length === 0 ? (
//                           <div className="px-4 py-10 text-center">
//                             <Bell
//                               size={28}
//                               className="mx-auto mb-2 text-slate-300"
//                             />
//                             <p className="text-sm font-medium text-slate-600">
//                               No notifications
//                             </p>
//                             <p className="mt-1 text-xs text-slate-400">
//                               New website enquiries will appear here
//                             </p>
//                           </div>
//                         ) : (
//                           notifications.map((n) => (
//                             <button
//                               key={n.id}
//                               type="button"
//                               onClick={() => openNotification(n)}
//                               className="flex w-full flex-col gap-0.5 border-b border-slate-50 bg-[#f4fbf8] px-4 py-3 text-left transition-colors hover:bg-slate-50"
//                             >
//                               <div className="flex items-center justify-between gap-2">
//                                 <p className="text-sm font-semibold text-slate-800">
//                                   {n.title}
//                                 </p>
//                                 <span className="shrink-0 text-[10px] text-slate-400">
//                                   {n.time}
//                                 </span>
//                               </div>
//                               <p className="text-xs text-slate-500">{n.body}</p>
//                             </button>
//                           ))
//                         )}
//                       </div>
//                       {notifications.length > 0 && (
//                         <button
//                           type="button"
//                           onClick={() => {
//                             setNotifOpen(false);
//                             router.push("/furniture/enquiries");
//                           }}
//                           className="w-full border-t border-slate-100 px-4 py-2.5 text-center text-xs font-semibold text-[#176b57] hover:bg-slate-50"
//                         >
//                           View all enquiries
//                         </button>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               )}

//               <div className="relative hidden sm:block">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSettingsOpen((v) => !v);
//                     setNotifOpen(false);
//                     setUserMenuOpen(false);
//                   }}
//                   className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100"
//                   aria-label="Settings"
//                 >
//                   <Settings size={18} />
//                 </button>

//                 {settingsOpen && (
//                   <div className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
//                     {isAdmin && (
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setSettingsOpen(false);
//                           router.push("/admin/users");
//                         }}
//                         className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                       >
//                         <Users size={14} />
//                         Staff Users
//                       </button>
//                     )}
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         router.push(
//                           isFurniture
//                             ? "/furniture/reports"
//                             : "/interior/reports"
//                         );
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                     >
//                       Reports
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         router.push(
//                           isFurniture
//                             ? "/furniture/dashboard"
//                             : "/interior/dashboard"
//                         );
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                     >
//                       {isFurniture ? "Furniture" : "Interior"} Dashboard
//                     </button>
//                     <div className="my-1 border-t border-slate-100" />
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         handleLogout();
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
//                     >
//                       <LogOut size={14} />
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>

//               <div className="relative border-l border-slate-200 pl-3">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setUserMenuOpen((v) => !v);
//                     setNotifOpen(false);
//                     setSettingsOpen(false);
//                   }}
//                   className="flex items-center gap-2 rounded-lg px-1 py-1 transition-colors hover:bg-slate-50"
//                 >
//                   <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dff1e8] text-xs font-bold text-[#176b57]">
//                     {avatarLetter}
//                   </div>
//                   <div className="hidden text-left md:block">
//                     <p className="text-xs font-semibold text-slate-800">
//                       {displayName}
//                     </p>
//                     <p className="text-[10px] text-slate-400">{displayRole}</p>
//                   </div>
//                 </button>

//                 {userMenuOpen && (
//                   <div className="absolute right-0 z-50 mt-2 w-52 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
//                     <div className="border-b border-slate-100 px-4 py-3">
//                       <p className="text-sm font-semibold text-slate-800">
//                         {displayName}
//                       </p>
//                       <p className="text-xs text-slate-400">{displayRole}</p>
//                       <p className="mt-1 text-[10px] uppercase tracking-wide text-[#176b57]">
//                         {moduleKey} module
//                       </p>
//                     </div>
//                     {isAdmin && (
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setUserMenuOpen(false);
//                           router.push("/admin/users");
//                         }}
//                         className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                       >
//                         <Users size={14} />
//                         Manage users
//                       </button>
//                     )}
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setUserMenuOpen(false);
//                         handleLogout();
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
//                     >
//                       <LogOut size={14} />
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </header>

//         {searchOpen && (
//           <div className="fixed inset-0 z-[60] flex items-start justify-center bg-black/40 p-4 pt-[12vh] transition-opacity duration-200">
//             <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-200">
//               <form
//                 onSubmit={runSearch}
//                 className="flex items-center gap-2 border-b border-slate-100 px-4 py-3"
//               >
//                 <Search size={18} className="text-slate-400" />
//                 <input
//                   ref={searchInputRef}
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder={`Search in ${moduleName}…`}
//                   className="h-10 flex-1 border-0 bg-transparent text-sm outline-none"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearchOpen(false);
//                     setSearchQuery("");
//                   }}
//                   className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100"
//                 >
//                   <X size={16} />
//                 </button>
//               </form>
//               <div className="max-h-72 overflow-y-auto py-2">
//                 {filteredSearch.length === 0 ? (
//                   <p className="px-4 py-6 text-center text-sm text-slate-500">
//                     No matching pages
//                   </p>
//                 ) : (
//                   filteredSearch.map((item) => (
//                     <button
//                       key={item.href}
//                       type="button"
//                       onClick={() => {
//                         const q = searchQuery.trim();
//                         router.push(
//                           q
//                             ? `${item.href}?search=${encodeURIComponent(q)}`
//                             : item.href
//                         );
//                         setSearchOpen(false);
//                         setSearchQuery("");
//                       }}
//                       className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                     >
//                       <span>{item.label}</span>
//                       <span className="text-[10px] text-slate-400">
//                         {item.href}
//                       </span>
//                     </button>
//                   ))
//                 )}
//               </div>
//               <div className="border-t border-slate-100 px-4 py-2 text-[11px] text-slate-400">
//                 Enter to open · Esc to close
//               </div>
//             </div>
//           </div>
//         )}

//         <main
//           className="min-h-[calc(100vh-64px)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
//           style={{
//             opacity: contentVisible ? 1 : 0,
//             transform: contentVisible
//               ? "translateY(0) scale(1)"
//               : "translateY(8px) scale(0.99)",
//           }}
//         >
//           {displayChildren}
//         </main>
//       </div>

//       <style jsx global>{`
//         @keyframes akrishNavIn {
//           from {
//             opacity: 0;
//             transform: translateX(-6px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//         @keyframes akrishTitleIn {
//           from {
//             opacity: 0;
//             transform: translateY(-4px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import {
//   LogOut,
//   Users,
//   Search,
//   Bell,
//   Settings,
//   X,
//   Sofa,
//   LayoutDashboard,
// } from "lucide-react";
// import {
//   collection,
//   query,
//   orderBy,
//   limit,
//   onSnapshot,
//   type Timestamp,
// } from "firebase/firestore";
// import { useAuth } from "@/core/auth/AuthContext";
// import { db } from "@/core/config/firebaseClient";
// import {
//   markEnquiryNotificationSeen,
//   markEnquiryNotificationsSeen,
// } from "@/modules/furniture/services/enquiryService";

// type NavItem = {
//   label: string;
//   href: string;
//   icon: string;
//   nested?: boolean;
// };

// const navigation: NavItem[] = [
//   { label: "Dashboard", href: "/interior/dashboard", icon: "▦" },
//   // { label: "CRM / Leads", href: "/interior/crm", icon: "◉" },
//   { label: "Clients", href: "/interior/clients", icon: "♙" },
//   { label: "Quotations", href: "/interior/quotations", icon: "▤" },
//   { label: "Contracts", href: "/interior/contracts", icon: "▥" },
//   { label: "Projects", href: "/interior/projects", icon: "▣" },
//   { label: "HRMS", href: "/interior/hrms", icon: "♟" },
//   { label: "Vendors", href: "/interior/vendors", icon: "◆" },
//   { label: "Payments", href: "/interior/payments", icon: "₹" },
//   { label: "Reports", href: "/interior/reports", icon: "▥" },
// ];

// const furnitureNavigation: NavItem[] = [
//   { label: "Dashboard", href: "/furniture/dashboard", icon: "▦" },
//   { label: "Products", href: "/furniture/products", icon: "▤" },
//   {
//     label: "Categories",
//     href: "/furniture/categories",
//     icon: "☰",
//     nested: true,
//   },
//   {
//     label: "Sub Categories",
//     href: "/furniture/sub-categories",
//     icon: "▤",
//     nested: true,
//   },
//   {
//     label: "Materials",
//     href: "/furniture/materials",
//     icon: "◆",
//     nested: true,
//   },
//   {
//     label: "Finishes",
//     href: "/furniture/finishes",
//     icon: "▣",
//     nested: true,
//   },
//   { label: "Inventory", href: "/furniture/inventory", icon: "▣" },
//   { label: "Customers", href: "/furniture/customers", icon: "♙" },
//   { label: "Enquiries", href: "/furniture/enquiries", icon: "◉" },
//   { label: "Orders", href: "/furniture/orders", icon: "▥" },
//   { label: "Payments", href: "/furniture/payments", icon: "₹" },
//   {
//     label: "Online Payments",
//     href: "/furniture/online-payments",
//     icon: "◈",
//   },
//   { label: "Expenses", href: "/furniture/expenses", icon: "◆" },
//   { label: "Reports", href: "/furniture/reports", icon: "▥" },
// ];

// type NotificationItem = {
//   id: string;
//   title: string;
//   body: string;
//   href: string;
//   time: string;
//   read: boolean;
//   enquiryId: string;
// };

// const ENQUIRIES_COLLECTION = "furniture_enquiries";

// function formatRelativeTime(value: unknown): string {
//   let date: Date | null = null;
//   if (value && typeof value === "object" && "toDate" in (value as object)) {
//     try {
//       date = (value as Timestamp).toDate();
//     } catch {
//       date = null;
//     }
//   } else if (typeof value === "string" || typeof value === "number") {
//     date = new Date(value);
//   }
//   if (!date || Number.isNaN(date.getTime())) return "Just now";

//   const diffMs = Date.now() - date.getTime();
//   const mins = Math.floor(diffMs / 60000);
//   if (mins < 1) return "Just now";
//   if (mins < 60) return `${mins}m ago`;
//   const hours = Math.floor(mins / 60);
//   if (hours < 24) return `${hours}h ago`;
//   const days = Math.floor(hours / 24);
//   if (days === 1) return "Yesterday";
//   if (days < 7) return `${days}d ago`;
//   return date.toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "short",
//   });
// }

// function getPageTitle(pathname: string) {
//   const allItems = [...navigation, ...furnitureNavigation];
//   const item = allItems.find(
//     (nav) => pathname === nav.href || pathname.startsWith(`${nav.href}/`)
//   );
//   if (pathname.startsWith("/admin/users")) return "Staff Users";
//   return item?.label ?? "Dashboard";
// }

// function Logo() {
//   return (
//     <div className="flex items-center gap-2">
//       <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#176b57] text-white shadow-sm">
//         <span className="text-lg font-bold">A</span>
//       </div>
//       <div className="leading-none">
//         <div className="text-[20px] font-bold tracking-tight text-[#1f2937]">
//           Akrish
//         </div>
//         <div className="mt-1 text-[8px] font-medium uppercase tracking-[0.16em] text-slate-400">
//           Furniture and Interior
//         </div>
//       </div>
//     </div>
//   );
// }

// function HeaderModuleSwitcher({
//   isFurniture,
//   canInterior,
//   canFurniture,
// }: {
//   isFurniture: boolean;
//   canInterior: boolean;
//   canFurniture: boolean;
// }) {
//   if (!canInterior || !canFurniture) {
//     return null;
//   }

//   return (
//     <div
//       className="relative flex items-center rounded-full border border-slate-200 bg-slate-50 p-0.5 shadow-sm"
//       role="group"
//       aria-label="Switch ERP module"
//     >
//       <span
//         aria-hidden
//         className="pointer-events-none absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-white shadow-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
//         style={{
//           left: isFurniture ? "calc(50% + 1px)" : "2px",
//         }}
//       />

//       <Link
//         href="/interior/dashboard"
//         className={`relative z-10 flex flex-1 items-center justify-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-300 ${
//           !isFurniture
//             ? "text-[#176b57]"
//             : "text-slate-500 hover:text-slate-700"
//         }`}
//         title="Interior ERP"
//       >
//         <LayoutDashboard
//           size={16}
//           className={`shrink-0 transition-transform duration-300 ${
//             !isFurniture ? "scale-110" : "scale-100"
//           }`}
//         />
//         <span className="hidden sm:inline">Interior</span>
//       </Link>

//       <Link
//         href="/furniture/dashboard"
//         className={`relative z-10 flex flex-1 items-center justify-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-300 ${
//           isFurniture
//             ? "text-[#176b57]"
//             : "text-slate-500 hover:text-slate-700"
//         }`}
//         title="Furniture ERP — Products & Sales"
//       >
//         <Sofa
//           size={16}
//           className={`shrink-0 transition-transform duration-300 ${
//             isFurniture ? "scale-110" : "scale-100"
//           }`}
//         />
//         <span className="hidden sm:inline">Furniture</span>
//       </Link>
//     </div>
//   );
// }

// export default function ERPLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();
//   const router = useRouter();
//   const { user, isAdmin, logout, hasModule, isLoading } = useAuth();

//   const canInterior = hasModule("interior");
//   const canFurniture = hasModule("furniture");

//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [notifOpen, setNotifOpen] = useState(false);
//   const [settingsOpen, setSettingsOpen] = useState(false);
//   const [userMenuOpen, setUserMenuOpen] = useState(false);

//   const [contentVisible, setContentVisible] = useState(true);
//   const [displayChildren, setDisplayChildren] = useState(children);
//   const prevModuleRef = useRef<"interior" | "furniture" | null>(null);

//   const searchInputRef = useRef<HTMLInputElement>(null);
//   const headerActionsRef = useRef<HTMLDivElement>(null);

//   const isFurniture =
//     pathname === "/furniture" || pathname.startsWith("/furniture/");
//   const currentModule: "interior" | "furniture" = isFurniture
//     ? "furniture"
//     : "interior";
//   const currentNavigation = isFurniture ? furnitureNavigation : navigation;
//   const pageTitle = getPageTitle(pathname);
//   const moduleName = isFurniture ? "Furniture ERP" : "Interior ERP";
//   const moduleKey = isFurniture ? "furniture" : "interior";

//   const [notifications, setNotifications] = useState<NotificationItem[]>([]);

//   // Block module the user does not have access to
//   useEffect(() => {
//     if (isLoading || !user) return;

//     if (pathname.startsWith("/furniture") && !canFurniture) {
//       router.replace(canInterior ? "/interior/dashboard" : "/unauthorized");
//       return;
//     }

//     if (pathname.startsWith("/interior") && !canInterior) {
//       router.replace(canFurniture ? "/furniture/dashboard" : "/unauthorized");
//     }
//   }, [isLoading, user, pathname, canInterior, canFurniture, router]);

//   // Live enquiries → bell (Furniture only)
//   useEffect(() => {
//     if (!isFurniture || !canFurniture) {
//       setNotifications([]);
//       setNotifOpen(false);
//       return;
//     }

//     let unsub: (() => void) | undefined;

//     try {
//       const q = query(
//         collection(db, ENQUIRIES_COLLECTION),
//         orderBy("createdAt", "desc"),
//         limit(25)
//       );

//       unsub = onSnapshot(
//         q,
//         (snapshot) => {
//           const items: NotificationItem[] = [];

//           snapshot.forEach((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "New");
//             const seen = data.notificationSeen === true;

//             if (status !== "New") return;
//             if (seen) return;

//             const name =
//               String(data.customerName || data.name || "Customer").trim() ||
//               "Customer";
//             const product = String(
//               data.productName || data.productCode || ""
//             ).trim();
//             const source = String(data.source || "Website").trim();
//             const message = String(data.message || "").trim();

//             items.push({
//               id: `enq-${docSnap.id}`,
//               enquiryId: docSnap.id,
//               title: "New enquiry",
//               body: product
//                 ? `${name} · ${product}${source ? ` · ${source}` : ""}`
//                 : message
//                   ? `${name}: ${message.slice(0, 60)}${message.length > 60 ? "…" : ""}`
//                   : `${name} sent a contact request${source ? ` (${source})` : ""}`,
//               href: "/furniture/enquiries",
//               time: formatRelativeTime(data.createdAt),
//               read: false,
//             });
//           });

//           setNotifications(items);
//         },
//         (err) => {
//           console.error("Enquiry notifications listener error:", err);
//         }
//       );
//     } catch (err) {
//       console.error("Failed to start enquiry notifications:", err);
//     }

//     return () => {
//       unsub?.();
//     };
//   }, [isFurniture, canFurniture]);

//   useEffect(() => {
//     const prev = prevModuleRef.current;
//     if (prev !== null && prev !== currentModule) {
//       setContentVisible(false);
//       const t = window.setTimeout(() => {
//         setDisplayChildren(children);
//         setContentVisible(true);
//       }, 180);
//       prevModuleRef.current = currentModule;
//       return () => window.clearTimeout(t);
//     }
//     setDisplayChildren(children);
//     setContentVisible(true);
//     prevModuleRef.current = currentModule;
//   }, [children, currentModule]);

//   // NOTE: no localStorage — active module is derived from pathname only

//   const unreadCount = notifications.length;

//   useEffect(() => {
//     function onDocClick(e: MouseEvent) {
//       if (
//         headerActionsRef.current &&
//         !headerActionsRef.current.contains(e.target as Node)
//       ) {
//         setNotifOpen(false);
//         setSettingsOpen(false);
//         setUserMenuOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", onDocClick);
//     return () => document.removeEventListener("mousedown", onDocClick);
//   }, []);

//   useEffect(() => {
//     if (searchOpen) {
//       setTimeout(() => searchInputRef.current?.focus(), 50);
//     }
//   }, [searchOpen]);

//   useEffect(() => {
//     function onKey(e: KeyboardEvent) {
//       if (e.key === "Escape") {
//         setSearchOpen(false);
//         setNotifOpen(false);
//         setSettingsOpen(false);
//         setUserMenuOpen(false);
//       }
//     }
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   const searchTargets = useMemo(() => {
//     const base = isFurniture
//       ? [
//           { label: "Products", href: "/furniture/products" },
//           { label: "Inventory", href: "/furniture/inventory" },
//           { label: "Categories", href: "/furniture/categories" },
//           { label: "Sub Categories", href: "/furniture/sub-categories" },
//           { label: "Materials", href: "/furniture/materials" },
//           { label: "Finishes", href: "/furniture/finishes" },
//           { label: "Customers", href: "/furniture/customers" },
//           { label: "Enquiries", href: "/furniture/enquiries" },
//           { label: "Orders", href: "/furniture/orders" },
//           { label: "Payments", href: "/furniture/payments" },
//           { label: "Expenses", href: "/furniture/expenses" },
//           { label: "Reports", href: "/furniture/reports" },
//         ]
//       : [
//           { label: "CRM / Leads", href: "/interior/crm" },
//           { label: "Clients", href: "/interior/clients" },
//           { label: "Quotations", href: "/interior/quotations" },
//           { label: "Contracts", href: "/interior/contracts" },
//           { label: "Projects", href: "/interior/projects" },
//           { label: "HRMS", href: "/interior/hrms" },
//           { label: "Vendors", href: "/interior/vendors" },
//           { label: "Payments", href: "/interior/payments" },
//           { label: "Reports", href: "/interior/reports" },
//         ];

//     if (isAdmin) {
//       base.push({ label: "Staff Users", href: "/admin/users" });
//     }
//     return base;
//   }, [isFurniture, isAdmin]);

//   const filteredSearch = useMemo(() => {
//     const q = searchQuery.toLowerCase().trim();
//     if (!q) return searchTargets;
//     return searchTargets.filter((t) => t.label.toLowerCase().includes(q));
//   }, [searchQuery, searchTargets]);

//   function runSearch(e?: React.FormEvent) {
//     e?.preventDefault();
//     const q = searchQuery.trim();
//     if (!q) return;

//     const match = filteredSearch[0];
//     if (match) {
//       router.push(`${match.href}?search=${encodeURIComponent(q)}`);
//     } else if (isFurniture) {
//       router.push(`/furniture/products?search=${encodeURIComponent(q)}`);
//     } else {
//       router.push(`/interior/crm?search=${encodeURIComponent(q)}`);
//     }
//     setSearchOpen(false);
//     setSearchQuery("");
//   }

//   async function openNotification(n: NotificationItem) {
//     setNotifications((list) => list.filter((item) => item.id !== n.id));
//     setNotifOpen(false);
//     router.push(n.href);

//     try {
//       await markEnquiryNotificationSeen(n.enquiryId);
//     } catch (err) {
//       console.error("Failed to mark notification seen:", err);
//     }
//   }

//   async function markAllRead() {
//     const ids = notifications.map((n) => n.enquiryId);
//     setNotifications([]);
//     setNotifOpen(false);
//     try {
//       await markEnquiryNotificationsSeen(ids);
//     } catch (err) {
//       console.error("Failed to clear notifications:", err);
//     }
//   }

//   const handleLogout = () => {
//     logout();
//     router.push("/login");
//   };

//   const displayName = user?.name || "User";
//   const displayRole = user?.role
//     ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
//     : "Staff";
//   const avatarLetter = displayName.charAt(0).toUpperCase();

//   return (
//     <div className="min-h-screen bg-[#f7f9f8] text-slate-800">
//       {sidebarOpen && (
//         <button
//           type="button"
//           aria-label="Close sidebar"
//           onClick={() => setSidebarOpen(false)}
//           className="fixed inset-0 z-40 bg-black/30 transition-opacity duration-200 lg:hidden"
//         />
//       )}

//       <aside
//         className={`fixed inset-y-0 left-0 z-50 flex w-[235px] flex-col border-r border-slate-200 bg-white transition-transform duration-200 ease-out ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
//         }`}
//       >
//         <div className="flex h-[72px] items-center border-b border-slate-100 px-5">
//           <Logo />
//           <button
//             type="button"
//             onClick={() => setSidebarOpen(false)}
//             className="ml-auto flex h-8 w-8 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 lg:hidden"
//           >
//             ×
//           </button>
//         </div>

//         <nav className="mt-4 flex-1 overflow-y-auto px-3 pb-4">
//           <p
//             key={moduleKey + "-label"}
//             className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400 transition-opacity duration-300"
//           >
//             {isFurniture ? "Furniture Management" : "Interior Management"}
//           </p>

//           <div
//             key={moduleKey + "-nav"}
//             className="space-y-1"
//             style={{
//               animation: "akrishNavIn 0.32s cubic-bezier(0.22, 1, 0.36, 1)",
//             }}
//           >
//             {currentNavigation.map((item) => {
//               const active =
//                 pathname === item.href || pathname.startsWith(`${item.href}/`);

//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setSidebarOpen(false)}
//                   className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-200 ${
//                     item.nested ? "ml-3 border-l border-slate-200 pl-3" : ""
//                   } ${
//                     active
//                       ? "bg-[#e8f5ef] text-[#176b57]"
//                       : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                   }`}
//                 >
//                   <span
//                     className={`flex h-6 w-6 items-center justify-center rounded-md text-[13px] transition-colors duration-200 ${
//                       active
//                         ? "bg-[#176b57] text-white"
//                         : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
//                     }`}
//                   >
//                     {item.icon}
//                   </span>
//                   <span>{item.label}</span>
//                   {active && (
//                     <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#176b57]" />
//                   )}
//                 </Link>
//               );
//             })}

//             {isAdmin && (
//               <>
//                 <div className="my-3 border-t border-slate-100" />
//                 <p className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
//                   Administration
//                 </p>
//                 <Link
//                   href="/admin/users"
//                   onClick={() => setSidebarOpen(false)}
//                   className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-200 ${
//                     pathname.startsWith("/admin/users")
//                       ? "bg-[#e8f5ef] text-[#176b57]"
//                       : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                   }`}
//                 >
//                   <span
//                     className={`flex h-6 w-6 items-center justify-center rounded-md transition-colors duration-200 ${
//                       pathname.startsWith("/admin/users")
//                         ? "bg-[#176b57] text-white"
//                         : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
//                     }`}
//                   >
//                     <Users size={14} />
//                   </span>
//                   <span>Staff Users</span>
//                 </Link>
//               </>
//             )}
//           </div>
//         </nav>

//         <div className="border-t border-slate-100 p-3">
//           <div className="rounded-lg bg-slate-50 p-3">
//             <div className="flex items-center gap-2">
//               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#176b57] text-xs font-bold text-white">
//                 {avatarLetter}
//               </div>
//               <div className="min-w-0 flex-1">
//                 <p className="truncate text-xs font-semibold text-slate-800">
//                   {displayName}
//                 </p>
//                 <p className="truncate text-[10px] text-slate-400">
//                   {displayRole}
//                 </p>
//               </div>
//               <button
//                 type="button"
//                 onClick={handleLogout}
//                 className="flex h-7 w-7 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-600"
//                 title="Logout"
//               >
//                 <LogOut size={14} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </aside>

//       <div className="min-h-screen lg:pl-[235px]">
//         <header className="sticky top-0 z-30 h-[64px] border-b border-slate-200 bg-white/95 backdrop-blur">
//           <div className="flex h-full items-center justify-between px-4 md:px-6">
//             <div className="flex items-center gap-3">
//               <button
//                 type="button"
//                 onClick={() => setSidebarOpen(true)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 lg:hidden"
//                 aria-label="Open navigation"
//               >
//                 ☰
//               </button>

//               <div
//                 key={moduleKey + "-title"}
//                 className="transition-all duration-300 ease-out"
//                 style={{
//                   animation:
//                     "akrishTitleIn 0.28s cubic-bezier(0.22, 1, 0.36, 1)",
//                 }}
//               >
//                 <p className="text-[10px] uppercase tracking-wide text-slate-400">
//                   {moduleName}
//                 </p>
//                 <h1 className="text-sm font-semibold text-slate-800">
//                   {pageTitle}
//                 </h1>
//               </div>
//             </div>

//             <div
//               ref={headerActionsRef}
//               className="relative flex items-center gap-1 md:gap-2"
//             >
//               <HeaderModuleSwitcher
//                 isFurniture={isFurniture}
//                 canInterior={canInterior}
//                 canFurniture={canFurniture}
//               />

//               <button
//                 type="button"
//                 onClick={() => {
//                   setSearchOpen(true);
//                   setNotifOpen(false);
//                   setSettingsOpen(false);
//                   setUserMenuOpen(false);
//                 }}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100"
//                 aria-label="Search"
//               >
//                 <Search size={18} />
//               </button>

//               {isFurniture && canFurniture && (
//                 <div className="relative">
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setNotifOpen((v) => !v);
//                       setSettingsOpen(false);
//                       setUserMenuOpen(false);
//                     }}
//                     className="relative flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100"
//                     aria-label="Notifications"
//                   >
//                     <Bell size={18} />
//                     {unreadCount > 0 && (
//                       <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
//                         {unreadCount > 9 ? "9+" : unreadCount}
//                       </span>
//                     )}
//                   </button>

//                   {notifOpen && (
//                     <div className="absolute right-0 z-50 mt-2 w-80 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
//                       <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
//                         <p className="text-sm font-semibold text-slate-800">
//                           Notifications
//                         </p>
//                         {notifications.length > 0 && (
//                           <button
//                             type="button"
//                             onClick={markAllRead}
//                             className="text-xs font-medium text-[#176b57] hover:underline"
//                           >
//                             Clear all
//                           </button>
//                         )}
//                       </div>
//                       <div className="max-h-72 overflow-y-auto">
//                         {notifications.length === 0 ? (
//                           <div className="px-4 py-10 text-center">
//                             <Bell
//                               size={28}
//                               className="mx-auto mb-2 text-slate-300"
//                             />
//                             <p className="text-sm font-medium text-slate-600">
//                               No notifications
//                             </p>
//                             <p className="mt-1 text-xs text-slate-400">
//                               New website enquiries will appear here
//                             </p>
//                           </div>
//                         ) : (
//                           notifications.map((n) => (
//                             <button
//                               key={n.id}
//                               type="button"
//                               onClick={() => openNotification(n)}
//                               className="flex w-full flex-col gap-0.5 border-b border-slate-50 bg-[#f4fbf8] px-4 py-3 text-left transition-colors hover:bg-slate-50"
//                             >
//                               <div className="flex items-center justify-between gap-2">
//                                 <p className="text-sm font-semibold text-slate-800">
//                                   {n.title}
//                                 </p>
//                                 <span className="shrink-0 text-[10px] text-slate-400">
//                                   {n.time}
//                                 </span>
//                               </div>
//                               <p className="text-xs text-slate-500">{n.body}</p>
//                             </button>
//                           ))
//                         )}
//                       </div>
//                       {notifications.length > 0 && (
//                         <button
//                           type="button"
//                           onClick={() => {
//                             setNotifOpen(false);
//                             router.push("/furniture/enquiries");
//                           }}
//                           className="w-full border-t border-slate-100 px-4 py-2.5 text-center text-xs font-semibold text-[#176b57] hover:bg-slate-50"
//                         >
//                           View all enquiries
//                         </button>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               )}

//               <div className="relative hidden sm:block">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSettingsOpen((v) => !v);
//                     setNotifOpen(false);
//                     setUserMenuOpen(false);
//                   }}
//                   className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100"
//                   aria-label="Settings"
//                 >
//                   <Settings size={18} />
//                 </button>

//                 {settingsOpen && (
//                   <div className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
//                     {isAdmin && (
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setSettingsOpen(false);
//                           router.push("/admin/users");
//                         }}
//                         className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                       >
//                         <Users size={14} />
//                         Staff Users
//                       </button>
//                     )}
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         router.push(
//                           isFurniture
//                             ? "/furniture/reports"
//                             : "/interior/reports"
//                         );
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                     >
//                       Reports
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         router.push(
//                           isFurniture
//                             ? "/furniture/dashboard"
//                             : "/interior/dashboard"
//                         );
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                     >
//                       {isFurniture ? "Furniture" : "Interior"} Dashboard
//                     </button>
//                     <div className="my-1 border-t border-slate-100" />
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         handleLogout();
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
//                     >
//                       <LogOut size={14} />
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>

//               <div className="relative border-l border-slate-200 pl-3">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setUserMenuOpen((v) => !v);
//                     setNotifOpen(false);
//                     setSettingsOpen(false);
//                   }}
//                   className="flex items-center gap-2 rounded-lg px-1 py-1 transition-colors hover:bg-slate-50"
//                 >
//                   <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dff1e8] text-xs font-bold text-[#176b57]">
//                     {avatarLetter}
//                   </div>
//                   <div className="hidden text-left md:block">
//                     <p className="text-xs font-semibold text-slate-800">
//                       {displayName}
//                     </p>
//                     <p className="text-[10px] text-slate-400">{displayRole}</p>
//                   </div>
//                 </button>

//                 {userMenuOpen && (
//                   <div className="absolute right-0 z-50 mt-2 w-52 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
//                     <div className="border-b border-slate-100 px-4 py-3">
//                       <p className="text-sm font-semibold text-slate-800">
//                         {displayName}
//                       </p>
//                       <p className="text-xs text-slate-400">{displayRole}</p>
//                       <p className="mt-1 text-[10px] uppercase tracking-wide text-[#176b57]">
//                         {moduleKey} module
//                       </p>
//                     </div>
//                     {isAdmin && (
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setUserMenuOpen(false);
//                           router.push("/admin/users");
//                         }}
//                         className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                       >
//                         <Users size={14} />
//                         Manage users
//                       </button>
//                     )}
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setUserMenuOpen(false);
//                         handleLogout();
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
//                     >
//                       <LogOut size={14} />
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </header>

//         {searchOpen && (
//           <div className="fixed inset-0 z-[60] flex items-start justify-center bg-black/40 p-4 pt-[12vh] transition-opacity duration-200">
//             <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-200">
//               <form
//                 onSubmit={runSearch}
//                 className="flex items-center gap-2 border-b border-slate-100 px-4 py-3"
//               >
//                 <Search size={18} className="text-slate-400" />
//                 <input
//                   ref={searchInputRef}
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder={`Search in ${moduleName}…`}
//                   className="h-10 flex-1 border-0 bg-transparent text-sm outline-none"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearchOpen(false);
//                     setSearchQuery("");
//                   }}
//                   className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100"
//                 >
//                   <X size={16} />
//                 </button>
//               </form>
//               <div className="max-h-72 overflow-y-auto py-2">
//                 {filteredSearch.length === 0 ? (
//                   <p className="px-4 py-6 text-center text-sm text-slate-500">
//                     No matching pages
//                   </p>
//                 ) : (
//                   filteredSearch.map((item) => (
//                     <button
//                       key={item.href}
//                       type="button"
//                       onClick={() => {
//                         const q = searchQuery.trim();
//                         router.push(
//                           q
//                             ? `${item.href}?search=${encodeURIComponent(q)}`
//                             : item.href
//                         );
//                         setSearchOpen(false);
//                         setSearchQuery("");
//                       }}
//                       className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                     >
//                       <span>{item.label}</span>
//                       <span className="text-[10px] text-slate-400">
//                         {item.href}
//                       </span>
//                     </button>
//                   ))
//                 )}
//               </div>
//               <div className="border-t border-slate-100 px-4 py-2 text-[11px] text-slate-400">
//                 Enter to open · Esc to close
//               </div>
//             </div>
//           </div>
//         )}

//         <main
//           className="min-h-[calc(100vh-64px)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
//           style={{
//             opacity: contentVisible ? 1 : 0,
//             transform: contentVisible
//               ? "translateY(0) scale(1)"
//               : "translateY(8px) scale(0.99)",
//           }}
//         >
//           {displayChildren}
//         </main>
//       </div>

//       <style jsx global>{`
//         @keyframes akrishNavIn {
//           from {
//             opacity: 0;
//             transform: translateX(-6px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//         @keyframes akrishTitleIn {
//           from {
//             opacity: 0;
//             transform: translateY(-4px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import {
//   LogOut,
//   Users,
//   Search,
//   Bell,
//   Settings,
//   X,
//   Sofa,
//   LayoutDashboard,
// } from "lucide-react";
// import {
//   collection,
//   query,
//   orderBy,
//   limit,
//   onSnapshot,
//   type Timestamp,
// } from "firebase/firestore";
// import { useAuth } from "@/core/auth/AuthContext";
// import { db } from "@/core/config/firebaseClient";
// import {
//   markEnquiryNotificationSeen,
//   markEnquiryNotificationsSeen,
// } from "@/modules/furniture/services/enquiryService";

// type NavItem = {
//   label: string;
//   href: string;
//   icon: string;
//   nested?: boolean;
// };

// const navigation: NavItem[] = [
//   { label: "Dashboard", href: "/interior/dashboard", icon: "▦" },
//   // { label: "CRM / Leads", href: "/interior/crm", icon: "◉" },
//   { label: "Clients", href: "/interior/clients", icon: "♙" },
//   { label: "Quotations", href: "/interior/quotations", icon: "▤" },
//   { label: "Contracts", href: "/interior/contracts", icon: "▥" },
//   { label: "Projects", href: "/interior/projects", icon: "▣" },
//   { label: "HRMS", href: "/interior/hrms", icon: "♟" },
//   { label: "Vendors", href: "/interior/vendors", icon: "◆" },
//   { label: "Payments", href: "/interior/payments", icon: "₹" },
//   { label: "Reports", href: "/interior/reports", icon: "▥" },
// ];

// const furnitureNavigation: NavItem[] = [
//   { label: "Dashboard", href: "/furniture/dashboard", icon: "▦" },
//   { label: "Products", href: "/furniture/products", icon: "▤" },
//   {
//     label: "Categories",
//     href: "/furniture/categories",
//     icon: "☰",
//     nested: true,
//   },
//   {
//     label: "Sub Categories",
//     href: "/furniture/sub-categories",
//     icon: "▤",
//     nested: true,
//   },
//   {
//     label: "Materials",
//     href: "/furniture/materials",
//     icon: "◆",
//     nested: true,
//   },
//   {
//     label: "Finishes",
//     href: "/furniture/finishes",
//     icon: "▣",
//     nested: true,
//   },
//   { label: "Inventory", href: "/furniture/inventory", icon: "▣" },
//   { label: "Customers", href: "/furniture/customers", icon: "♙" },
//   { label: "Enquiries", href: "/furniture/enquiries", icon: "◉" },
//   { label: "Orders", href: "/furniture/orders", icon: "▥" },
//   { label: "Payments", href: "/furniture/payments", icon: "₹" },
//   // {
//   //   label: "Online Payments",
//   //   href: "/furniture/online-payments",
//   //   icon: "◈",
//   // },
//   { label: "Expenses", href: "/furniture/expenses", icon: "◆" },
//   { label: "Reports", href: "/furniture/reports", icon: "▥" },
// ];

// type NotificationItem = {
//   id: string;
//   title: string;
//   body: string;
//   href: string;
//   time: string;
//   read: boolean;
//   enquiryId: string;
// };

// const ENQUIRIES_COLLECTION = "furniture_enquiries";

// function formatRelativeTime(value: unknown): string {
//   let date: Date | null = null;
//   if (value && typeof value === "object" && "toDate" in (value as object)) {
//     try {
//       date = (value as Timestamp).toDate();
//     } catch {
//       date = null;
//     }
//   } else if (typeof value === "string" || typeof value === "number") {
//     date = new Date(value);
//   }
//   if (!date || Number.isNaN(date.getTime())) return "Just now";

//   const diffMs = Date.now() - date.getTime();
//   const mins = Math.floor(diffMs / 60000);
//   if (mins < 1) return "Just now";
//   if (mins < 60) return `${mins}m ago`;
//   const hours = Math.floor(mins / 60);
//   if (hours < 24) return `${hours}h ago`;
//   const days = Math.floor(hours / 24);
//   if (days === 1) return "Yesterday";
//   if (days < 7) return `${days}d ago`;
//   return date.toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "short",
//   });
// }

// function getPageTitle(pathname: string) {
//   const allItems = [...navigation, ...furnitureNavigation];
//   const item = allItems.find(
//     (nav) => pathname === nav.href || pathname.startsWith(`${nav.href}/`)
//   );
//   if (pathname.startsWith("/admin/users")) return "Staff Users";
//   return item?.label ?? "Dashboard";
// }

// function Logo() {
//   return (
//     <div className="flex min-w-0 items-center gap-2">
//       <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#176b57] text-white shadow-sm">
//         <span className="text-lg font-bold">A</span>
//       </div>
//       <div className="min-w-0 leading-none">
//         <div className="truncate text-[18px] font-bold tracking-tight text-[#1f2937] sm:text-[20px]">
//           Akrish
//         </div>
//         <div className="mt-1 hidden text-[8px] font-medium uppercase tracking-[0.16em] text-slate-400 xs:block sm:block">
//           Furniture and Interior
//         </div>
//       </div>
//     </div>
//   );
// }

// function HeaderModuleSwitcher({
//   isFurniture,
//   canInterior,
//   canFurniture,
// }: {
//   isFurniture: boolean;
//   canInterior: boolean;
//   canFurniture: boolean;
// }) {
//   if (!canInterior || !canFurniture) {
//     return null;
//   }

//   return (
//     <div
//       className="relative flex shrink-0 items-center rounded-full border border-slate-200 bg-slate-50 p-0.5 shadow-sm"
//       role="group"
//       aria-label="Switch ERP module"
//     >
//       <span
//         aria-hidden
//         className="pointer-events-none absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-white shadow-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
//         style={{
//           left: isFurniture ? "calc(50% + 1px)" : "2px",
//         }}
//       />

//       <Link
//         href="/interior/dashboard"
//         className={`relative z-10 flex flex-1 items-center justify-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors duration-300 sm:gap-1.5 sm:px-3.5 sm:py-2 sm:text-sm ${
//           !isFurniture
//             ? "text-[#176b57]"
//             : "text-slate-500 hover:text-slate-700"
//         }`}
//         title="Interior ERP"
//       >
//         <LayoutDashboard
//           size={15}
//           className={`shrink-0 transition-transform duration-300 ${
//             !isFurniture ? "scale-110" : "scale-100"
//           }`}
//         />
//         <span className="hidden sm:inline">Interior</span>
//       </Link>

//       <Link
//         href="/furniture/dashboard"
//         className={`relative z-10 flex flex-1 items-center justify-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors duration-300 sm:gap-1.5 sm:px-3.5 sm:py-2 sm:text-sm ${
//           isFurniture
//             ? "text-[#176b57]"
//             : "text-slate-500 hover:text-slate-700"
//         }`}
//         title="Furniture ERP — Products & Sales"
//       >
//         <Sofa
//           size={15}
//           className={`shrink-0 transition-transform duration-300 ${
//             isFurniture ? "scale-110" : "scale-100"
//           }`}
//         />
//         <span className="hidden sm:inline">Furniture</span>
//       </Link>
//     </div>
//   );
// }

// export default function ERPLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();
//   const router = useRouter();
//   const { user, isAdmin, logout, hasModule, isLoading } = useAuth();

//   const canInterior = hasModule("interior");
//   const canFurniture = hasModule("furniture");

//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [notifOpen, setNotifOpen] = useState(false);
//   const [settingsOpen, setSettingsOpen] = useState(false);
//   const [userMenuOpen, setUserMenuOpen] = useState(false);

//   const [contentVisible, setContentVisible] = useState(true);
//   const [displayChildren, setDisplayChildren] = useState(children);
//   const prevModuleRef = useRef<"interior" | "furniture" | null>(null);

//   const searchInputRef = useRef<HTMLInputElement>(null);
//   const headerActionsRef = useRef<HTMLDivElement>(null);

//   const isFurniture =
//     pathname === "/furniture" || pathname.startsWith("/furniture/");
//   const currentModule: "interior" | "furniture" = isFurniture
//     ? "furniture"
//     : "interior";
//   const currentNavigation = isFurniture ? furnitureNavigation : navigation;
//   const pageTitle = getPageTitle(pathname);
//   const moduleName = isFurniture ? "Furniture ERP" : "Interior ERP";
//   const moduleKey = isFurniture ? "furniture" : "interior";

//   const [notifications, setNotifications] = useState<NotificationItem[]>([]);

//   // Close mobile sidebar when navigating
//   useEffect(() => {
//     setSidebarOpen(false);
//     setNotifOpen(false);
//     setSettingsOpen(false);
//     setUserMenuOpen(false);
//     setSearchOpen(false);
//   }, [pathname]);

//   // Lock body scroll when mobile drawer is open
//   useEffect(() => {
//     if (!sidebarOpen) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, [sidebarOpen]);

//   // Block module the user does not have access to
//   useEffect(() => {
//     if (isLoading || !user) return;

//     if (pathname.startsWith("/furniture") && !canFurniture) {
//       router.replace(canInterior ? "/interior/dashboard" : "/unauthorized");
//       return;
//     }

//     if (pathname.startsWith("/interior") && !canInterior) {
//       router.replace(canFurniture ? "/furniture/dashboard" : "/unauthorized");
//     }
//   }, [isLoading, user, pathname, canInterior, canFurniture, router]);

//   // Live enquiries → bell (Furniture only)
//   useEffect(() => {
//     if (!isFurniture || !canFurniture) {
//       setNotifications([]);
//       setNotifOpen(false);
//       return;
//     }

//     let unsub: (() => void) | undefined;

//     try {
//       const q = query(
//         collection(db, ENQUIRIES_COLLECTION),
//         orderBy("createdAt", "desc"),
//         limit(25)
//       );

//       unsub = onSnapshot(
//         q,
//         (snapshot) => {
//           const items: NotificationItem[] = [];

//           snapshot.forEach((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "New");
//             const seen = data.notificationSeen === true;

//             if (status !== "New") return;
//             if (seen) return;

//             const name =
//               String(data.customerName || data.name || "Customer").trim() ||
//               "Customer";
//             const product = String(
//               data.productName || data.productCode || ""
//             ).trim();
//             const source = String(data.source || "Website").trim();
//             const message = String(data.message || "").trim();

//             items.push({
//               id: `enq-${docSnap.id}`,
//               enquiryId: docSnap.id,
//               title: "New enquiry",
//               body: product
//                 ? `${name} · ${product}${source ? ` · ${source}` : ""}`
//                 : message
//                   ? `${name}: ${message.slice(0, 60)}${message.length > 60 ? "…" : ""}`
//                   : `${name} sent a contact request${source ? ` (${source})` : ""}`,
//               href: "/furniture/enquiries",
//               time: formatRelativeTime(data.createdAt),
//               read: false,
//             });
//           });

//           setNotifications(items);
//         },
//         (err) => {
//           console.error("Enquiry notifications listener error:", err);
//         }
//       );
//     } catch (err) {
//       console.error("Failed to start enquiry notifications:", err);
//     }

//     return () => {
//       unsub?.();
//     };
//   }, [isFurniture, canFurniture]);

//   useEffect(() => {
//     const prev = prevModuleRef.current;
//     if (prev !== null && prev !== currentModule) {
//       setContentVisible(false);
//       const t = window.setTimeout(() => {
//         setDisplayChildren(children);
//         setContentVisible(true);
//       }, 180);
//       prevModuleRef.current = currentModule;
//       return () => window.clearTimeout(t);
//     }
//     setDisplayChildren(children);
//     setContentVisible(true);
//     prevModuleRef.current = currentModule;
//   }, [children, currentModule]);

//   const unreadCount = notifications.length;

//   useEffect(() => {
//     function onDocClick(e: MouseEvent) {
//       if (
//         headerActionsRef.current &&
//         !headerActionsRef.current.contains(e.target as Node)
//       ) {
//         setNotifOpen(false);
//         setSettingsOpen(false);
//         setUserMenuOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", onDocClick);
//     return () => document.removeEventListener("mousedown", onDocClick);
//   }, []);

//   useEffect(() => {
//     if (searchOpen) {
//       setTimeout(() => searchInputRef.current?.focus(), 50);
//     }
//   }, [searchOpen]);

//   useEffect(() => {
//     function onKey(e: KeyboardEvent) {
//       if (e.key === "Escape") {
//         setSearchOpen(false);
//         setNotifOpen(false);
//         setSettingsOpen(false);
//         setUserMenuOpen(false);
//         setSidebarOpen(false);
//       }
//     }
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   const searchTargets = useMemo(() => {
//     const base = isFurniture
//       ? [
//           { label: "Products", href: "/furniture/products" },
//           { label: "Inventory", href: "/furniture/inventory" },
//           { label: "Categories", href: "/furniture/categories" },
//           { label: "Sub Categories", href: "/furniture/sub-categories" },
//           { label: "Materials", href: "/furniture/materials" },
//           { label: "Finishes", href: "/furniture/finishes" },
//           { label: "Customers", href: "/furniture/customers" },
//           { label: "Enquiries", href: "/furniture/enquiries" },
//           { label: "Orders", href: "/furniture/orders" },
//           { label: "Payments", href: "/furniture/payments" },
//           { label: "Expenses", href: "/furniture/expenses" },
//           { label: "Reports", href: "/furniture/reports" },
//         ]
//       : [
//           { label: "CRM / Leads", href: "/interior/crm" },
//           { label: "Clients", href: "/interior/clients" },
//           { label: "Quotations", href: "/interior/quotations" },
//           { label: "Contracts", href: "/interior/contracts" },
//           { label: "Projects", href: "/interior/projects" },
//           { label: "HRMS", href: "/interior/hrms" },
//           { label: "Vendors", href: "/interior/vendors" },
//           { label: "Payments", href: "/interior/payments" },
//           { label: "Reports", href: "/interior/reports" },
//         ];

//     if (isAdmin) {
//       base.push({ label: "Staff Users", href: "/admin/users" });
//     }
//     return base;
//   }, [isFurniture, isAdmin]);

//   const filteredSearch = useMemo(() => {
//     const q = searchQuery.toLowerCase().trim();
//     if (!q) return searchTargets;
//     return searchTargets.filter((t) => t.label.toLowerCase().includes(q));
//   }, [searchQuery, searchTargets]);

//   function runSearch(e?: React.FormEvent) {
//     e?.preventDefault();
//     const q = searchQuery.trim();
//     if (!q) return;

//     const match = filteredSearch[0];
//     if (match) {
//       router.push(`${match.href}?search=${encodeURIComponent(q)}`);
//     } else if (isFurniture) {
//       router.push(`/furniture/products?search=${encodeURIComponent(q)}`);
//     } else {
//       router.push(`/interior/crm?search=${encodeURIComponent(q)}`);
//     }
//     setSearchOpen(false);
//     setSearchQuery("");
//   }

//   async function openNotification(n: NotificationItem) {
//     setNotifications((list) => list.filter((item) => item.id !== n.id));
//     setNotifOpen(false);
//     router.push(n.href);

//     try {
//       await markEnquiryNotificationSeen(n.enquiryId);
//     } catch (err) {
//       console.error("Failed to mark notification seen:", err);
//     }
//   }

//   async function markAllRead() {
//     const ids = notifications.map((n) => n.enquiryId);
//     setNotifications([]);
//     setNotifOpen(false);
//     try {
//       await markEnquiryNotificationsSeen(ids);
//     } catch (err) {
//       console.error("Failed to clear notifications:", err);
//     }
//   }

//   const handleLogout = () => {
//     logout();
//     router.push("/login");
//   };

//   const displayName = user?.name || "User";
//   const displayRole = user?.role
//     ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
//     : "Staff";
//   const avatarLetter = displayName.charAt(0).toUpperCase();

//   return (
//     <div className="min-h-screen overflow-x-hidden bg-[#f7f9f8] text-slate-800">
//       {sidebarOpen && (
//         <button
//           type="button"
//           aria-label="Close sidebar"
//           onClick={() => setSidebarOpen(false)}
//           className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px] transition-opacity duration-200 lg:hidden"
//         />
//       )}

//       <aside
//         className={`fixed inset-y-0 left-0 z-50 flex w-[min(280px,85vw)] max-w-[280px] flex-col border-r border-slate-200 bg-white shadow-xl transition-transform duration-200 ease-out lg:w-[235px] lg:max-w-none lg:shadow-none ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
//         }`}
//       >
//         <div className="flex h-14 shrink-0 items-center border-b border-slate-100 px-4 sm:h-[72px] sm:px-5">
//           <Logo />
//           <button
//             type="button"
//             onClick={() => setSidebarOpen(false)}
//             className="ml-auto flex h-9 w-9 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 lg:hidden"
//             aria-label="Close menu"
//           >
//             <X size={18} />
//           </button>
//         </div>

//         <nav className="mt-3 flex-1 overflow-y-auto overscroll-contain px-3 pb-4 sm:mt-4">
//           <p
//             key={moduleKey + "-label"}
//             className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400 transition-opacity duration-300"
//           >
//             {isFurniture ? "Furniture Management" : "Interior Management"}
//           </p>

//           <div
//             key={moduleKey + "-nav"}
//             className="space-y-0.5 sm:space-y-1"
//             style={{
//               animation: "akrishNavIn 0.32s cubic-bezier(0.22, 1, 0.36, 1)",
//             }}
//           >
//             {currentNavigation.map((item) => {
//               const active =
//                 pathname === item.href || pathname.startsWith(`${item.href}/`);

//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setSidebarOpen(false)}
//                   className={`group flex min-h-[44px] items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-200 sm:min-h-0 ${
//                     item.nested ? "ml-3 border-l border-slate-200 pl-3" : ""
//                   } ${
//                     active
//                       ? "bg-[#e8f5ef] text-[#176b57]"
//                       : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                   }`}
//                 >
//                   <span
//                     className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[13px] transition-colors duration-200 sm:h-6 sm:w-6 ${
//                       active
//                         ? "bg-[#176b57] text-white"
//                         : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
//                     }`}
//                   >
//                     {item.icon}
//                   </span>
//                   <span className="truncate">{item.label}</span>
//                   {active && (
//                     <span className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-[#176b57]" />
//                   )}
//                 </Link>
//               );
//             })}

//             {isAdmin && (
//               <>
//                 <div className="my-3 border-t border-slate-100" />
//                 <p className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
//                   Administration
//                 </p>
//                 <Link
//                   href="/admin/users"
//                   onClick={() => setSidebarOpen(false)}
//                   className={`group flex min-h-[44px] items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-200 sm:min-h-0 ${
//                     pathname.startsWith("/admin/users")
//                       ? "bg-[#e8f5ef] text-[#176b57]"
//                       : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                   }`}
//                 >
//                   <span
//                     className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md transition-colors duration-200 sm:h-6 sm:w-6 ${
//                       pathname.startsWith("/admin/users")
//                         ? "bg-[#176b57] text-white"
//                         : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
//                     }`}
//                   >
//                     <Users size={14} />
//                   </span>
//                   <span>Staff Users</span>
//                 </Link>
//               </>
//             )}
//           </div>
//         </nav>

//         <div className="shrink-0 border-t border-slate-100 p-3">
//           <div className="rounded-lg bg-slate-50 p-3">
//             <div className="flex items-center gap-2">
//               <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#176b57] text-xs font-bold text-white sm:h-8 sm:w-8">
//                 {avatarLetter}
//               </div>
//               <div className="min-w-0 flex-1">
//                 <p className="truncate text-xs font-semibold text-slate-800">
//                   {displayName}
//                 </p>
//                 <p className="truncate text-[10px] text-slate-400">
//                   {displayRole}
//                 </p>
//               </div>
//               <button
//                 type="button"
//                 onClick={handleLogout}
//                 className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-600 sm:h-7 sm:w-7"
//                 title="Logout"
//               >
//                 <LogOut size={14} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </aside>

//       <div className="min-h-screen lg:pl-[235px]">
//         <header className="sticky top-0 z-30 h-14 border-b border-slate-200 bg-white/95 backdrop-blur sm:h-[64px]">
//           <div className="flex h-full items-center justify-between gap-2 px-3 sm:px-4 md:px-6">
//             <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
//               <button
//                 type="button"
//                 onClick={() => setSidebarOpen(true)}
//                 className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 lg:hidden"
//                 aria-label="Open navigation"
//               >
//                 ☰
//               </button>

//               <div
//                 key={moduleKey + "-title"}
//                 className="min-w-0 transition-all duration-300 ease-out"
//                 style={{
//                   animation:
//                     "akrishTitleIn 0.28s cubic-bezier(0.22, 1, 0.36, 1)",
//                 }}
//               >
//                 <p className="hidden text-[10px] uppercase tracking-wide text-slate-400 sm:block">
//                   {moduleName}
//                 </p>
//                 <h1 className="truncate text-sm font-semibold text-slate-800">
//                   {pageTitle}
//                 </h1>
//               </div>
//             </div>

//             <div
//               ref={headerActionsRef}
//               className="relative flex shrink-0 items-center gap-0.5 sm:gap-1 md:gap-2"
//             >
//               <HeaderModuleSwitcher
//                 isFurniture={isFurniture}
//                 canInterior={canInterior}
//                 canFurniture={canFurniture}
//               />

//               <button
//                 type="button"
//                 onClick={() => {
//                   setSearchOpen(true);
//                   setNotifOpen(false);
//                   setSettingsOpen(false);
//                   setUserMenuOpen(false);
//                 }}
//                 className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 sm:h-9 sm:w-9"
//                 aria-label="Search"
//               >
//                 <Search size={18} />
//               </button>

//               {isFurniture && canFurniture && (
//                 <div className="relative">
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setNotifOpen((v) => !v);
//                       setSettingsOpen(false);
//                       setUserMenuOpen(false);
//                     }}
//                     className="relative flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 sm:h-9 sm:w-9"
//                     aria-label="Notifications"
//                   >
//                     <Bell size={18} />
//                     {unreadCount > 0 && (
//                       <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
//                         {unreadCount > 9 ? "9+" : unreadCount}
//                       </span>
//                     )}
//                   </button>

//                   {notifOpen && (
//                     <div className="absolute right-0 z-50 mt-2 w-[min(20rem,calc(100vw-1.5rem))] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
//                       <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
//                         <p className="text-sm font-semibold text-slate-800">
//                           Notifications
//                         </p>
//                         {notifications.length > 0 && (
//                           <button
//                             type="button"
//                             onClick={markAllRead}
//                             className="text-xs font-medium text-[#176b57] hover:underline"
//                           >
//                             Clear all
//                           </button>
//                         )}
//                       </div>
//                       <div className="max-h-[min(18rem,50vh)] overflow-y-auto">
//                         {notifications.length === 0 ? (
//                           <div className="px-4 py-10 text-center">
//                             <Bell
//                               size={28}
//                               className="mx-auto mb-2 text-slate-300"
//                             />
//                             <p className="text-sm font-medium text-slate-600">
//                               No notifications
//                             </p>
//                             <p className="mt-1 text-xs text-slate-400">
//                               New website enquiries will appear here
//                             </p>
//                           </div>
//                         ) : (
//                           notifications.map((n) => (
//                             <button
//                               key={n.id}
//                               type="button"
//                               onClick={() => openNotification(n)}
//                               className="flex w-full flex-col gap-0.5 border-b border-slate-50 bg-[#f4fbf8] px-4 py-3 text-left transition-colors hover:bg-slate-50"
//                             >
//                               <div className="flex items-center justify-between gap-2">
//                                 <p className="text-sm font-semibold text-slate-800">
//                                   {n.title}
//                                 </p>
//                                 <span className="shrink-0 text-[10px] text-slate-400">
//                                   {n.time}
//                                 </span>
//                               </div>
//                               <p className="text-xs text-slate-500">{n.body}</p>
//                             </button>
//                           ))
//                         )}
//                       </div>
//                       {notifications.length > 0 && (
//                         <button
//                           type="button"
//                           onClick={() => {
//                             setNotifOpen(false);
//                             router.push("/furniture/enquiries");
//                           }}
//                           className="w-full border-t border-slate-100 px-4 py-2.5 text-center text-xs font-semibold text-[#176b57] hover:bg-slate-50"
//                         >
//                           View all enquiries
//                         </button>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               )}

//               <div className="relative hidden sm:block">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSettingsOpen((v) => !v);
//                     setNotifOpen(false);
//                     setUserMenuOpen(false);
//                   }}
//                   className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100"
//                   aria-label="Settings"
//                 >
//                   <Settings size={18} />
//                 </button>

//                 {settingsOpen && (
//                   <div className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
//                     {isAdmin && (
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setSettingsOpen(false);
//                           router.push("/admin/users");
//                         }}
//                         className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                       >
//                         <Users size={14} />
//                         Staff Users
//                       </button>
//                     )}
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         router.push(
//                           isFurniture
//                             ? "/furniture/reports"
//                             : "/interior/reports"
//                         );
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                     >
//                       Reports
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         router.push(
//                           isFurniture
//                             ? "/furniture/dashboard"
//                             : "/interior/dashboard"
//                         );
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                     >
//                       {isFurniture ? "Furniture" : "Interior"} Dashboard
//                     </button>
//                     <div className="my-1 border-t border-slate-100" />
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         handleLogout();
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
//                     >
//                       <LogOut size={14} />
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>

//               <div className="relative border-l border-slate-200 pl-2 sm:pl-3">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setUserMenuOpen((v) => !v);
//                     setNotifOpen(false);
//                     setSettingsOpen(false);
//                   }}
//                   className="flex items-center gap-2 rounded-lg px-1 py-1 transition-colors hover:bg-slate-50"
//                 >
//                   <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dff1e8] text-xs font-bold text-[#176b57] sm:h-8 sm:w-8">
//                     {avatarLetter}
//                   </div>
//                   <div className="hidden min-w-0 text-left md:block">
//                     <p className="max-w-[120px] truncate text-xs font-semibold text-slate-800">
//                       {displayName}
//                     </p>
//                     <p className="text-[10px] text-slate-400">{displayRole}</p>
//                   </div>
//                 </button>

//                 {userMenuOpen && (
//                   <div className="absolute right-0 z-50 mt-2 w-[min(13rem,calc(100vw-1.5rem))] overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
//                     <div className="border-b border-slate-100 px-4 py-3">
//                       <p className="text-sm font-semibold text-slate-800">
//                         {displayName}
//                       </p>
//                       <p className="text-xs text-slate-400">{displayRole}</p>
//                       <p className="mt-1 text-[10px] uppercase tracking-wide text-[#176b57]">
//                         {moduleKey} module
//                       </p>
//                     </div>
//                     {isAdmin && (
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setUserMenuOpen(false);
//                           router.push("/admin/users");
//                         }}
//                         className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                       >
//                         <Users size={14} />
//                         Manage users
//                       </button>
//                     )}
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setUserMenuOpen(false);
//                         handleLogout();
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
//                     >
//                       <LogOut size={14} />
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </header>

//         {searchOpen && (
//           <div className="fixed inset-0 z-[60] flex items-start justify-center bg-black/40 p-3 pt-[10vh] transition-opacity duration-200 sm:p-4 sm:pt-[12vh]">
//             <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-200">
//               <form
//                 onSubmit={runSearch}
//                 className="flex items-center gap-2 border-b border-slate-100 px-3 py-3 sm:px-4"
//               >
//                 <Search size={18} className="shrink-0 text-slate-400" />
//                 <input
//                   ref={searchInputRef}
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder={`Search in ${moduleName}…`}
//                   className="h-10 min-w-0 flex-1 border-0 bg-transparent text-sm outline-none"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearchOpen(false);
//                     setSearchQuery("");
//                   }}
//                   className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
//                 >
//                   <X size={16} />
//                 </button>
//               </form>
//               <div className="max-h-[min(18rem,50vh)] overflow-y-auto py-2">
//                 {filteredSearch.length === 0 ? (
//                   <p className="px-4 py-6 text-center text-sm text-slate-500">
//                     No matching pages
//                   </p>
//                 ) : (
//                   filteredSearch.map((item) => (
//                     <button
//                       key={item.href}
//                       type="button"
//                       onClick={() => {
//                         const q = searchQuery.trim();
//                         router.push(
//                           q
//                             ? `${item.href}?search=${encodeURIComponent(q)}`
//                             : item.href
//                         );
//                         setSearchOpen(false);
//                         setSearchQuery("");
//                       }}
//                       className="flex w-full items-center justify-between gap-2 px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-50 sm:py-2.5"
//                     >
//                       <span>{item.label}</span>
//                       <span className="hidden shrink-0 text-[10px] text-slate-400 sm:inline">
//                         {item.href}
//                       </span>
//                     </button>
//                   ))
//                 )}
//               </div>
//               <div className="border-t border-slate-100 px-4 py-2 text-[11px] text-slate-400">
//                 Enter to open · Esc to close
//               </div>
//             </div>
//           </div>
//         )}

//         <main
//           className="min-h-[calc(100vh-3.5rem)] overflow-x-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:min-h-[calc(100vh-64px)]"
//           style={{
//             opacity: contentVisible ? 1 : 0,
//             transform: contentVisible
//               ? "translateY(0) scale(1)"
//               : "translateY(8px) scale(0.99)",
//           }}
//         >
//           {displayChildren}
//         </main>
//       </div>

//       <style jsx global>{`
//         @keyframes akrishNavIn {
//           from {
//             opacity: 0;
//             transform: translateX(-6px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//         @keyframes akrishTitleIn {
//           from {
//             opacity: 0;
//             transform: translateY(-4px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import {
//   LogOut,
//   Users,
//   Search,
//   Bell,
//   Settings,
//   X,
//   Sofa,
//   LayoutDashboard,
// } from "lucide-react";
// import {
//   collection,
//   query,
//   orderBy,
//   limit,
//   onSnapshot,
//   type Timestamp,
// } from "firebase/firestore";
// import { useAuth } from "@/core/auth/AuthContext";
// import { db } from "@/core/config/firebaseClient";
// import {
//   markEnquiryNotificationSeen,
//   markEnquiryNotificationsSeen,
// } from "@/modules/furniture/services/enquiryService";

// type NavItem = {
//   label: string;
//   href: string;
//   icon: string;
//   nested?: boolean;
// };

// const navigation: NavItem[] = [
//   { label: "Dashboard", href: "/interior/dashboard", icon: "▦" },
//   { label: "Clients", href: "/interior/clients", icon: "♙" },
//   { label: "Quotations", href: "/interior/quotations", icon: "▤" },
//   { label: "Contracts", href: "/interior/contracts", icon: "▥" },
//   { label: "Projects", href: "/interior/projects", icon: "▣" },
//   { label: "HRMS", href: "/interior/hrms", icon: "♟" },
//   { label: "Vendors", href: "/interior/vendors", icon: "◆" },
//   { label: "Payments", href: "/interior/payments", icon: "₹" },
//   { label: "Reports", href: "/interior/reports", icon: "▥" },
// ];

// const furnitureNavigation: NavItem[] = [
//   { label: "Dashboard", href: "/furniture/dashboard", icon: "▦" },
//   { label: "Products", href: "/furniture/products", icon: "▤" },
//   {
//     label: "Categories",
//     href: "/furniture/categories",
//     icon: "☰",
//     nested: true,
//   },
//   {
//     label: "Sub Categories",
//     href: "/furniture/sub-categories",
//     icon: "▤",
//     nested: true,
//   },
//   {
//     label: "Materials",
//     href: "/furniture/materials",
//     icon: "◆",
//     nested: true,
//   },
//   {
//     label: "Finishes",
//     href: "/furniture/finishes",
//     icon: "▣",
//     nested: true,
//   },
//   { label: "Inventory", href: "/furniture/inventory", icon: "▣" },
//   { label: "Customers", href: "/furniture/customers", icon: "♙" },
//   { label: "Enquiries", href: "/furniture/enquiries", icon: "◉" },
//   { label: "Orders", href: "/furniture/orders", icon: "▥" },
//   { label: "Payments", href: "/furniture/payments", icon: "₹" },
//   { label: "Expenses", href: "/furniture/expenses", icon: "◆" },
//   { label: "Reports", href: "/furniture/reports", icon: "▥" },
// ];

// type NotificationItem = {
//   id: string;
//   title: string;
//   body: string;
//   href: string;
//   time: string;
//   read: boolean;
//   enquiryId: string;
// };

// const ENQUIRIES_COLLECTION = "furniture_enquiries";

// function formatRelativeTime(value: unknown): string {
//   let date: Date | null = null;
//   if (value && typeof value === "object" && "toDate" in (value as object)) {
//     try {
//       date = (value as Timestamp).toDate();
//     } catch {
//       date = null;
//     }
//   } else if (typeof value === "string" || typeof value === "number") {
//     date = new Date(value);
//   }
//   if (!date || Number.isNaN(date.getTime())) return "Just now";

//   const diffMs = Date.now() - date.getTime();
//   const mins = Math.floor(diffMs / 60000);
//   if (mins < 1) return "Just now";
//   if (mins < 60) return `${mins}m ago`;
//   const hours = Math.floor(mins / 60);
//   if (hours < 24) return `${hours}h ago`;
//   const days = Math.floor(hours / 24);
//   if (days === 1) return "Yesterday";
//   if (days < 7) return `${days}d ago`;
//   return date.toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "short",
//   });
// }

// function getPageTitle(pathname: string) {
//   const allItems = [...navigation, ...furnitureNavigation];
//   const item = allItems.find(
//     (nav) => pathname === nav.href || pathname.startsWith(`${nav.href}/`)
//   );
//   if (pathname.startsWith("/admin/users")) return "Staff Users";
//   return item?.label ?? "Dashboard";
// }

// function Logo() {
//   return (
//     <div className="flex min-w-0 items-center gap-2">
//       <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#176b57] text-white shadow-sm">
//         <span className="text-lg font-bold">A</span>
//       </div>
//       <div className="min-w-0 leading-none">
//         <div className="truncate text-[18px] font-bold tracking-tight text-[#1f2937] sm:text-[20px]">
//           Akrish
//         </div>
//         <div className="mt-1 hidden text-[8px] font-medium uppercase tracking-[0.16em] text-slate-400 sm:block">
//           Furniture and Interior
//         </div>
//       </div>
//     </div>
//   );
// }

// function HeaderModuleSwitcher({
//   isFurniture,
//   canInterior,
//   canFurniture,
// }: {
//   isFurniture: boolean;
//   canInterior: boolean;
//   canFurniture: boolean;
// }) {
//   if (!canInterior || !canFurniture) {
//     return null;
//   }

//   return (
//     <div
//       className="relative flex shrink-0 items-center rounded-full border border-slate-200 bg-slate-50 p-0.5 shadow-sm"
//       role="group"
//       aria-label="Switch ERP module"
//     >
//       <span
//         aria-hidden
//         className="pointer-events-none absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-white shadow-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
//         style={{
//           left: isFurniture ? "calc(50% + 1px)" : "2px",
//         }}
//       />

//       <Link
//         href="/interior/dashboard"
//         className={`relative z-10 flex flex-1 items-center justify-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors duration-300 sm:gap-1.5 sm:px-3.5 sm:py-2 sm:text-sm ${
//           !isFurniture
//             ? "text-[#176b57]"
//             : "text-slate-500 hover:text-slate-700"
//         }`}
//         title="Interior ERP"
//       >
//         <LayoutDashboard
//           size={15}
//           className={`shrink-0 transition-transform duration-300 ${
//             !isFurniture ? "scale-110" : "scale-100"
//           }`}
//         />
//         <span className="hidden sm:inline">Interior</span>
//       </Link>

//       <Link
//         href="/furniture/dashboard"
//         className={`relative z-10 flex flex-1 items-center justify-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors duration-300 sm:gap-1.5 sm:px-3.5 sm:py-2 sm:text-sm ${
//           isFurniture
//             ? "text-[#176b57]"
//             : "text-slate-500 hover:text-slate-700"
//         }`}
//         title="Furniture ERP — Products & Sales"
//       >
//         <Sofa
//           size={15}
//           className={`shrink-0 transition-transform duration-300 ${
//             isFurniture ? "scale-110" : "scale-100"
//           }`}
//         />
//         <span className="hidden sm:inline">Furniture</span>
//       </Link>
//     </div>
//   );
// }

// export default function ERPLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();
//   const router = useRouter();
//   const { user, isAdmin, logout, hasModule, isLoading } = useAuth();

//   const canInterior = hasModule("interior");
//   const canFurniture = hasModule("furniture");

//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [notifOpen, setNotifOpen] = useState(false);
//   const [settingsOpen, setSettingsOpen] = useState(false);
//   const [userMenuOpen, setUserMenuOpen] = useState(false);

//   const [contentVisible, setContentVisible] = useState(true);
//   const [displayChildren, setDisplayChildren] = useState(children);
//   const prevModuleRef = useRef<"interior" | "furniture" | null>(null);

//   const searchInputRef = useRef<HTMLInputElement>(null);
//   const headerActionsRef = useRef<HTMLDivElement>(null);

//   const isFurniture =
//     pathname === "/furniture" || pathname.startsWith("/furniture/");
//   const currentModule: "interior" | "furniture" = isFurniture
//     ? "furniture"
//     : "interior";
//   const currentNavigation = isFurniture ? furnitureNavigation : navigation;
//   const pageTitle = getPageTitle(pathname);
//   const moduleName = isFurniture ? "Furniture ERP" : "Interior ERP";
//   const moduleKey = isFurniture ? "furniture" : "interior";

//   const [notifications, setNotifications] = useState<NotificationItem[]>([]);

//   useEffect(() => {
//     setSidebarOpen(false);
//     setNotifOpen(false);
//     setSettingsOpen(false);
//     setUserMenuOpen(false);
//     setSearchOpen(false);
//   }, [pathname]);

//   useEffect(() => {
//     if (!sidebarOpen) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, [sidebarOpen]);

//   useEffect(() => {
//     if (isLoading || !user) return;

//     if (pathname.startsWith("/furniture") && !canFurniture) {
//       router.replace(canInterior ? "/interior/dashboard" : "/unauthorized");
//       return;
//     }

//     if (pathname.startsWith("/interior") && !canInterior) {
//       router.replace(canFurniture ? "/furniture/dashboard" : "/unauthorized");
//     }
//   }, [isLoading, user, pathname, canInterior, canFurniture, router]);

//   useEffect(() => {
//     if (!isFurniture || !canFurniture) {
//       setNotifications([]);
//       setNotifOpen(false);
//       return;
//     }

//     let unsub: (() => void) | undefined;

//     try {
//       const q = query(
//         collection(db, ENQUIRIES_COLLECTION),
//         orderBy("createdAt", "desc"),
//         limit(25)
//       );

//       unsub = onSnapshot(
//         q,
//         (snapshot) => {
//           const items: NotificationItem[] = [];

//           snapshot.forEach((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "New");
//             const seen = data.notificationSeen === true;

//             if (status !== "New") return;
//             if (seen) return;

//             const name =
//               String(data.customerName || data.name || "Customer").trim() ||
//               "Customer";
//             const product = String(
//               data.productName || data.productCode || ""
//             ).trim();
//             const source = String(data.source || "Website").trim();
//             const message = String(data.message || "").trim();

//             items.push({
//               id: `enq-${docSnap.id}`,
//               enquiryId: docSnap.id,
//               title: "New enquiry",
//               body: product
//                 ? `${name} · ${product}${source ? ` · ${source}` : ""}`
//                 : message
//                   ? `${name}: ${message.slice(0, 60)}${message.length > 60 ? "…" : ""}`
//                   : `${name} sent a contact request${source ? ` (${source})` : ""}`,
//               href: "/furniture/enquiries",
//               time: formatRelativeTime(data.createdAt),
//               read: false,
//             });
//           });

//           setNotifications(items);
//         },
//         (err) => {
//           console.error("Enquiry notifications listener error:", err);
//         }
//       );
//     } catch (err) {
//       console.error("Failed to start enquiry notifications:", err);
//     }

//     return () => {
//       unsub?.();
//     };
//   }, [isFurniture, canFurniture]);

//   useEffect(() => {
//     const prev = prevModuleRef.current;
//     if (prev !== null && prev !== currentModule) {
//       setContentVisible(false);
//       const t = window.setTimeout(() => {
//         setDisplayChildren(children);
//         setContentVisible(true);
//       }, 180);
//       prevModuleRef.current = currentModule;
//       return () => window.clearTimeout(t);
//     }
//     setDisplayChildren(children);
//     setContentVisible(true);
//     prevModuleRef.current = currentModule;
//   }, [children, currentModule]);

//   const unreadCount = notifications.length;

//   useEffect(() => {
//     function onDocClick(e: MouseEvent) {
//       if (
//         headerActionsRef.current &&
//         !headerActionsRef.current.contains(e.target as Node)
//       ) {
//         setNotifOpen(false);
//         setSettingsOpen(false);
//         setUserMenuOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", onDocClick);
//     return () => document.removeEventListener("mousedown", onDocClick);
//   }, []);

//   useEffect(() => {
//     if (searchOpen) {
//       setTimeout(() => searchInputRef.current?.focus(), 50);
//     }
//   }, [searchOpen]);

//   useEffect(() => {
//     function onKey(e: KeyboardEvent) {
//       if (e.key === "Escape") {
//         setSearchOpen(false);
//         setNotifOpen(false);
//         setSettingsOpen(false);
//         setUserMenuOpen(false);
//         setSidebarOpen(false);
//       }
//     }
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   const searchTargets = useMemo(() => {
//     const base = isFurniture
//       ? [
//           { label: "Products", href: "/furniture/products" },
//           { label: "Inventory", href: "/furniture/inventory" },
//           { label: "Categories", href: "/furniture/categories" },
//           { label: "Sub Categories", href: "/furniture/sub-categories" },
//           { label: "Materials", href: "/furniture/materials" },
//           { label: "Finishes", href: "/furniture/finishes" },
//           { label: "Customers", href: "/furniture/customers" },
//           { label: "Enquiries", href: "/furniture/enquiries" },
//           { label: "Orders", href: "/furniture/orders" },
//           { label: "Payments", href: "/furniture/payments" },
//           { label: "Expenses", href: "/furniture/expenses" },
//           { label: "Reports", href: "/furniture/reports" },
//         ]
//       : [
//           { label: "CRM / Leads", href: "/interior/crm" },
//           { label: "Clients", href: "/interior/clients" },
//           { label: "Quotations", href: "/interior/quotations" },
//           { label: "Contracts", href: "/interior/contracts" },
//           { label: "Projects", href: "/interior/projects" },
//           { label: "HRMS", href: "/interior/hrms" },
//           { label: "Vendors", href: "/interior/vendors" },
//           { label: "Payments", href: "/interior/payments" },
//           { label: "Reports", href: "/interior/reports" },
//         ];

//     if (isAdmin) {
//       base.push({ label: "Staff Users", href: "/admin/users" });
//     }
//     return base;
//   }, [isFurniture, isAdmin]);

//   const filteredSearch = useMemo(() => {
//     const q = searchQuery.toLowerCase().trim();
//     if (!q) return searchTargets;
//     return searchTargets.filter((t) => t.label.toLowerCase().includes(q));
//   }, [searchQuery, searchTargets]);

//   function runSearch(e?: React.FormEvent) {
//     e?.preventDefault();
//     const q = searchQuery.trim();
//     if (!q) return;

//     const match = filteredSearch[0];
//     if (match) {
//       router.push(`${match.href}?search=${encodeURIComponent(q)}`);
//     } else if (isFurniture) {
//       router.push(`/furniture/products?search=${encodeURIComponent(q)}`);
//     } else {
//       router.push(`/interior/crm?search=${encodeURIComponent(q)}`);
//     }
//     setSearchOpen(false);
//     setSearchQuery("");
//   }

//   async function openNotification(n: NotificationItem) {
//     setNotifications((list) => list.filter((item) => item.id !== n.id));
//     setNotifOpen(false);
//     router.push(n.href);

//     try {
//       await markEnquiryNotificationSeen(n.enquiryId);
//     } catch (err) {
//       console.error("Failed to mark notification seen:", err);
//     }
//   }

//   async function markAllRead() {
//     const ids = notifications.map((n) => n.enquiryId);
//     setNotifications([]);
//     setNotifOpen(false);
//     try {
//       await markEnquiryNotificationsSeen(ids);
//     } catch (err) {
//       console.error("Failed to clear notifications:", err);
//     }
//   }

//   const handleLogout = () => {
//     logout();
//     router.push("/login");
//   };

//   const displayName = user?.name || "User";
//   const displayRole = user?.role
//     ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
//     : "Staff";
//   const avatarLetter = displayName.charAt(0).toUpperCase();

//   return (
//     <div className="min-h-screen min-h-[100dvh] overflow-x-hidden bg-[#f7f9f8] text-slate-800">
//       {sidebarOpen && (
//         <button
//           type="button"
//           aria-label="Close sidebar"
//           onClick={() => setSidebarOpen(false)}
//           className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px] transition-opacity duration-200 lg:hidden"
//         />
//       )}

//       <aside
//         className={`fixed inset-y-0 left-0 z-50 flex w-[min(280px,85vw)] max-w-[280px] flex-col border-r border-slate-200 bg-white shadow-xl transition-transform duration-200 ease-out lg:w-[235px] lg:max-w-none lg:shadow-none ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
//         }`}
//       >
//         <div className="flex h-14 shrink-0 items-center border-b border-slate-100 px-4 pt-[env(safe-area-inset-top,0px)] sm:h-[72px] sm:px-5">
//           <Logo />
//           <button
//             type="button"
//             onClick={() => setSidebarOpen(false)}
//             className="ml-auto flex h-10 w-10 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 lg:hidden"
//             aria-label="Close menu"
//           >
//             <X size={18} />
//           </button>
//         </div>

//         <nav className="mt-3 flex-1 overflow-y-auto overscroll-contain px-3 pb-4 sm:mt-4">
//           <p
//             key={moduleKey + "-label"}
//             className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400 transition-opacity duration-300"
//           >
//             {isFurniture ? "Furniture Management" : "Interior Management"}
//           </p>

//           <div
//             key={moduleKey + "-nav"}
//             className="space-y-0.5 sm:space-y-1"
//             style={{
//               animation: "akrishNavIn 0.32s cubic-bezier(0.22, 1, 0.36, 1)",
//             }}
//           >
//             {currentNavigation.map((item) => {
//               const active =
//                 pathname === item.href || pathname.startsWith(`${item.href}/`);

//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setSidebarOpen(false)}
//                   className={`group flex min-h-[44px] items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-200 sm:min-h-0 ${
//                     item.nested ? "ml-3 border-l border-slate-200 pl-3" : ""
//                   } ${
//                     active
//                       ? "bg-[#e8f5ef] text-[#176b57]"
//                       : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                   }`}
//                 >
//                   <span
//                     className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[13px] transition-colors duration-200 sm:h-6 sm:w-6 ${
//                       active
//                         ? "bg-[#176b57] text-white"
//                         : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
//                     }`}
//                   >
//                     {item.icon}
//                   </span>
//                   <span className="truncate">{item.label}</span>
//                   {active && (
//                     <span className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-[#176b57]" />
//                   )}
//                 </Link>
//               );
//             })}

//             {isAdmin && (
//               <>
//                 <div className="my-3 border-t border-slate-100" />
//                 <p className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
//                   Administration
//                 </p>
//                 <Link
//                   href="/admin/users"
//                   onClick={() => setSidebarOpen(false)}
//                   className={`group flex min-h-[44px] items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-200 sm:min-h-0 ${
//                     pathname.startsWith("/admin/users")
//                       ? "bg-[#e8f5ef] text-[#176b57]"
//                       : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                   }`}
//                 >
//                   <span
//                     className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md transition-colors duration-200 sm:h-6 sm:w-6 ${
//                       pathname.startsWith("/admin/users")
//                         ? "bg-[#176b57] text-white"
//                         : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
//                     }`}
//                   >
//                     <Users size={14} />
//                   </span>
//                   <span>Staff Users</span>
//                 </Link>
//               </>
//             )}
//           </div>
//         </nav>

//         <div className="shrink-0 border-t border-slate-100 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
//           <div className="rounded-lg bg-slate-50 p-3">
//             <div className="flex items-center gap-2">
//               <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#176b57] text-xs font-bold text-white sm:h-8 sm:w-8">
//                 {avatarLetter}
//               </div>
//               <div className="min-w-0 flex-1">
//                 <p className="truncate text-xs font-semibold text-slate-800">
//                   {displayName}
//                 </p>
//                 <p className="truncate text-[10px] text-slate-400">
//                   {displayRole}
//                 </p>
//               </div>
//               <button
//                 type="button"
//                 onClick={handleLogout}
//                 className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-600 sm:h-7 sm:w-7"
//                 title="Logout"
//               >
//                 <LogOut size={14} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </aside>

//       <div className="min-h-screen lg:pl-[235px]">
//         <header className="sticky top-0 z-30 h-14 border-b border-slate-200 bg-white/95 pt-[env(safe-area-inset-top,0px)] backdrop-blur sm:h-[64px]">
//           <div className="flex h-full items-center justify-between gap-2 px-3 sm:px-4 md:px-6">
//             <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
//               <button
//                 type="button"
//                 onClick={() => setSidebarOpen(true)}
//                 className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 lg:hidden"
//                 aria-label="Open navigation"
//               >
//                 ☰
//               </button>

//               <div
//                 key={moduleKey + "-title"}
//                 className="min-w-0 transition-all duration-300 ease-out"
//                 style={{
//                   animation:
//                     "akrishTitleIn 0.28s cubic-bezier(0.22, 1, 0.36, 1)",
//                 }}
//               >
//                 <p className="hidden text-[10px] uppercase tracking-wide text-slate-400 sm:block">
//                   {moduleName}
//                 </p>
//                 <h1 className="truncate text-sm font-semibold text-slate-800">
//                   {pageTitle}
//                 </h1>
//               </div>
//             </div>

//             <div
//               ref={headerActionsRef}
//               className="relative flex shrink-0 items-center gap-0.5 sm:gap-1 md:gap-2"
//             >
//               <HeaderModuleSwitcher
//                 isFurniture={isFurniture}
//                 canInterior={canInterior}
//                 canFurniture={canFurniture}
//               />

//               <button
//                 type="button"
//                 onClick={() => {
//                   setSearchOpen(true);
//                   setNotifOpen(false);
//                   setSettingsOpen(false);
//                   setUserMenuOpen(false);
//                 }}
//                 className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 sm:h-9 sm:w-9"
//                 aria-label="Search"
//               >
//                 <Search size={18} />
//               </button>

//               {isFurniture && canFurniture && (
//                 <div className="relative">
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setNotifOpen((v) => !v);
//                       setSettingsOpen(false);
//                       setUserMenuOpen(false);
//                     }}
//                     className="relative flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 sm:h-9 sm:w-9"
//                     aria-label="Notifications"
//                   >
//                     <Bell size={18} />
//                     {unreadCount > 0 && (
//                       <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
//                         {unreadCount > 9 ? "9+" : unreadCount}
//                       </span>
//                     )}
//                   </button>

//                   {notifOpen && (
//                     <div className="absolute right-0 z-50 mt-2 w-[min(20rem,calc(100vw-1.5rem))] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
//                       <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
//                         <p className="text-sm font-semibold text-slate-800">
//                           Notifications
//                         </p>
//                         {notifications.length > 0 && (
//                           <button
//                             type="button"
//                             onClick={markAllRead}
//                             className="text-xs font-medium text-[#176b57] hover:underline"
//                           >
//                             Clear all
//                           </button>
//                         )}
//                       </div>
//                       <div className="max-h-[min(18rem,50vh)] overflow-y-auto">
//                         {notifications.length === 0 ? (
//                           <div className="px-4 py-10 text-center">
//                             <Bell
//                               size={28}
//                               className="mx-auto mb-2 text-slate-300"
//                             />
//                             <p className="text-sm font-medium text-slate-600">
//                               No notifications
//                             </p>
//                             <p className="mt-1 text-xs text-slate-400">
//                               New website enquiries will appear here
//                             </p>
//                           </div>
//                         ) : (
//                           notifications.map((n) => (
//                             <button
//                               key={n.id}
//                               type="button"
//                               onClick={() => openNotification(n)}
//                               className="flex w-full flex-col gap-0.5 border-b border-slate-50 bg-[#f4fbf8] px-4 py-3 text-left transition-colors hover:bg-slate-50"
//                             >
//                               <div className="flex items-center justify-between gap-2">
//                                 <p className="text-sm font-semibold text-slate-800">
//                                   {n.title}
//                                 </p>
//                                 <span className="shrink-0 text-[10px] text-slate-400">
//                                   {n.time}
//                                 </span>
//                               </div>
//                               <p className="text-xs text-slate-500">{n.body}</p>
//                             </button>
//                           ))
//                         )}
//                       </div>
//                       {notifications.length > 0 && (
//                         <button
//                           type="button"
//                           onClick={() => {
//                             setNotifOpen(false);
//                             router.push("/furniture/enquiries");
//                           }}
//                           className="w-full border-t border-slate-100 px-4 py-2.5 text-center text-xs font-semibold text-[#176b57] hover:bg-slate-50"
//                         >
//                           View all enquiries
//                         </button>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               )}

//               <div className="relative hidden sm:block">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSettingsOpen((v) => !v);
//                     setNotifOpen(false);
//                     setUserMenuOpen(false);
//                   }}
//                   className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100"
//                   aria-label="Settings"
//                 >
//                   <Settings size={18} />
//                 </button>

//                 {settingsOpen && (
//                   <div className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
//                     {isAdmin && (
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setSettingsOpen(false);
//                           router.push("/admin/users");
//                         }}
//                         className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                       >
//                         <Users size={14} />
//                         Staff Users
//                       </button>
//                     )}
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         router.push(
//                           isFurniture
//                             ? "/furniture/reports"
//                             : "/interior/reports"
//                         );
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                     >
//                       Reports
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         router.push(
//                           isFurniture
//                             ? "/furniture/dashboard"
//                             : "/interior/dashboard"
//                         );
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                     >
//                       {isFurniture ? "Furniture" : "Interior"} Dashboard
//                     </button>
//                     <div className="my-1 border-t border-slate-100" />
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSettingsOpen(false);
//                         handleLogout();
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
//                     >
//                       <LogOut size={14} />
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>

//               <div className="relative border-l border-slate-200 pl-2 sm:pl-3">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setUserMenuOpen((v) => !v);
//                     setNotifOpen(false);
//                     setSettingsOpen(false);
//                   }}
//                   className="flex items-center gap-2 rounded-lg px-1 py-1 transition-colors hover:bg-slate-50"
//                 >
//                   <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dff1e8] text-xs font-bold text-[#176b57] sm:h-8 sm:w-8">
//                     {avatarLetter}
//                   </div>
//                   <div className="hidden min-w-0 text-left md:block">
//                     <p className="max-w-[120px] truncate text-xs font-semibold text-slate-800">
//                       {displayName}
//                     </p>
//                     <p className="text-[10px] text-slate-400">{displayRole}</p>
//                   </div>
//                 </button>

//                 {userMenuOpen && (
//                   <div className="absolute right-0 z-50 mt-2 w-[min(13rem,calc(100vw-1.5rem))] overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
//                     <div className="border-b border-slate-100 px-4 py-3">
//                       <p className="text-sm font-semibold text-slate-800">
//                         {displayName}
//                       </p>
//                       <p className="text-xs text-slate-400">{displayRole}</p>
//                       <p className="mt-1 text-[10px] uppercase tracking-wide text-[#176b57]">
//                         {moduleKey} module
//                       </p>
//                     </div>
//                     {isAdmin && (
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setUserMenuOpen(false);
//                           router.push("/admin/users");
//                         }}
//                         className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
//                       >
//                         <Users size={14} />
//                         Manage users
//                       </button>
//                     )}
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setUserMenuOpen(false);
//                         handleLogout();
//                       }}
//                       className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
//                     >
//                       <LogOut size={14} />
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </header>

//         {searchOpen && (
//           <div className="fixed inset-0 z-[60] flex items-start justify-center bg-black/40 p-3 pt-[max(10vh,env(safe-area-inset-top))] transition-opacity duration-200 sm:p-4 sm:pt-[12vh]">
//             <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-200">
//               <form
//                 onSubmit={runSearch}
//                 className="flex items-center gap-2 border-b border-slate-100 px-3 py-3 sm:px-4"
//               >
//                 <Search size={18} className="shrink-0 text-slate-400" />
//                 <input
//                   ref={searchInputRef}
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder={`Search in ${moduleName}…`}
//                   className="h-10 min-w-0 flex-1 border-0 bg-transparent text-base outline-none sm:text-sm"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearchOpen(false);
//                     setSearchQuery("");
//                   }}
//                   className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
//                 >
//                   <X size={16} />
//                 </button>
//               </form>
//               <div className="max-h-[min(18rem,50vh)] overflow-y-auto py-2">
//                 {filteredSearch.length === 0 ? (
//                   <p className="px-4 py-6 text-center text-sm text-slate-500">
//                     No matching pages
//                   </p>
//                 ) : (
//                   filteredSearch.map((item) => (
//                     <button
//                       key={item.href}
//                       type="button"
//                       onClick={() => {
//                         const q = searchQuery.trim();
//                         router.push(
//                           q
//                             ? `${item.href}?search=${encodeURIComponent(q)}`
//                             : item.href
//                         );
//                         setSearchOpen(false);
//                         setSearchQuery("");
//                       }}
//                       className="flex w-full items-center justify-between gap-2 px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-50 sm:py-2.5"
//                     >
//                       <span>{item.label}</span>
//                       <span className="hidden shrink-0 text-[10px] text-slate-400 sm:inline">
//                         {item.href}
//                       </span>
//                     </button>
//                   ))
//                 )}
//               </div>
//               <div className="border-t border-slate-100 px-4 py-2 text-[11px] text-slate-400">
//                 Enter to open · Esc to close
//               </div>
//             </div>
//           </div>
//         )}

//         <main
//           className="min-h-[calc(100vh-3.5rem)] overflow-x-hidden px-3 py-4 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:min-h-[calc(100vh-64px)] sm:p-6"
//           style={{
//             opacity: contentVisible ? 1 : 0,
//             transform: contentVisible
//               ? "translateY(0) scale(1)"
//               : "translateY(8px) scale(0.99)",
//           }}
//         >
//           {displayChildren}
//         </main>
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LogOut,
  Users,
  Search,
  Bell,
  Settings,
  X,
  Sofa,
  LayoutDashboard,
} from "lucide-react";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
  type Timestamp,
} from "firebase/firestore";
import { useAuth } from "@/core/auth/AuthContext";
import { db } from "@/core/config/firebaseClient";
import {
  markEnquiryNotificationSeen,
  markEnquiryNotificationsSeen,
} from "@/modules/furniture/services/enquiryService";

type NavItem = {
  label: string;
  href: string;
  icon: string;
  nested?: boolean;
};

const navigation: NavItem[] = [
  { label: "Dashboard", href: "/interior/dashboard", icon: "▦" },
    { label: "CRM", href: "/interior/crm", icon: "♟" },
    { label: "HRMS", href: "/interior/hrms", icon: "♟" },
  { label: "Clients", href: "/interior/clients", icon: "♙" },
  { label: "Quotations", href: "/interior/quotations", icon: "▤" },
  { label: "Contracts", href: "/interior/contracts", icon: "▥" },
  { label: "Projects", href: "/interior/projects", icon: "▣" },
  { label: "Vendors", href: "/interior/vendors", icon: "◆" },
  { label: "Payments", href: "/interior/payments", icon: "₹" },
  { label: "Reports", href: "/interior/reports", icon: "▥" },
];

const furnitureNavigation: NavItem[] = [
  { label: "Dashboard", href: "/furniture/dashboard", icon: "▦" },
  { label: "Products", href: "/furniture/products", icon: "▤" },
  {
    label: "Categories",
    href: "/furniture/categories",
    icon: "☰",
    nested: true,
  },
  {
    label: "Sub Categories",
    href: "/furniture/sub-categories",
    icon: "▤",
    nested: true,
  },
  {
    label: "Materials",
    href: "/furniture/materials",
    icon: "◆",
    nested: true,
  },
  {
    label: "Finishes",
    href: "/furniture/finishes",
    icon: "▣",
    nested: true,
  },
  { label: "Inventory", href: "/furniture/inventory", icon: "▣" },
  { label: "Customers", href: "/furniture/customers", icon: "♙" },
  { label: "Enquiries", href: "/furniture/enquiries", icon: "◉" },
  { label: "Orders", href: "/furniture/orders", icon: "▥" },
  { label: "Payments", href: "/furniture/payments", icon: "₹" },
  { label: "Expenses", href: "/furniture/expenses", icon: "◆" },
  // { label: "Delivery", href: "/furniture/settings/delivery", icon: "" },
  { label: "Delivery", href: "/furniture/settings/delivery", icon: "↗" },
  { label: "Reports", href: "/furniture/reports", icon: "▥" },
];

type NotificationItem = {
  id: string;
  title: string;
  body: string;
  href: string;
  time: string;
  read: boolean;
  enquiryId: string;
};

const ENQUIRIES_COLLECTION = "furniture_enquiries";

function formatRelativeTime(value: unknown): string {
  let date: Date | null = null;
  if (value && typeof value === "object" && "toDate" in (value as object)) {
    try {
      date = (value as Timestamp).toDate();
    } catch {
      date = null;
    }
  } else if (typeof value === "string" || typeof value === "number") {
    date = new Date(value);
  }
  if (!date || Number.isNaN(date.getTime())) return "Just now";

  const diffMs = Date.now() - date.getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days}d ago`;
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
  });
}

function getPageTitle(pathname: string) {
  const allItems = [...navigation, ...furnitureNavigation];
  const item = allItems.find(
    (nav) => pathname === nav.href || pathname.startsWith(`${nav.href}/`)
  );
  if (pathname.startsWith("/admin/users")) return "Staff Users";
  return item?.label ?? "Dashboard";
}

function Logo() {
  return (
    <div className="flex min-w-0 items-center gap-2">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#176b57] text-white shadow-sm">
        <span className="text-lg font-bold">A</span>
      </div>
      <div className="min-w-0 leading-none">
        <div className="truncate text-[18px] font-bold tracking-tight text-[#1f2937] sm:text-[20px]">
          Akrish
        </div>
        <div className="mt-1 hidden text-[8px] font-medium uppercase tracking-[0.16em] text-slate-400 sm:block">
          Furniture and Interior
        </div>
      </div>
    </div>
  );
}

function HeaderModuleSwitcher({
  isFurniture,
  canInterior,
  canFurniture,
}: {
  isFurniture: boolean;
  canInterior: boolean;
  canFurniture: boolean;
}) {
  if (!canInterior || !canFurniture) {
    return null;
  }

  return (
    <div
      className="relative flex shrink-0 items-center rounded-full border border-slate-200 bg-slate-50 p-0.5 shadow-sm"
      role="group"
      aria-label="Switch ERP module"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-white shadow-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          left: isFurniture ? "calc(50% + 1px)" : "2px",
        }}
      />

      <Link
        href="/interior/dashboard"
        className={`relative z-10 flex flex-1 items-center justify-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors duration-300 sm:gap-1.5 sm:px-3.5 sm:py-2 sm:text-sm ${
          !isFurniture
            ? "text-[#176b57]"
            : "text-slate-500 hover:text-slate-700"
        }`}
        title="Interior ERP"
      >
        <LayoutDashboard
          size={15}
          className={`shrink-0 transition-transform duration-300 ${
            !isFurniture ? "scale-110" : "scale-100"
          }`}
        />
        <span className="hidden sm:inline">Interior</span>
      </Link>

      <Link
        href="/furniture/dashboard"
        className={`relative z-10 flex flex-1 items-center justify-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors duration-300 sm:gap-1.5 sm:px-3.5 sm:py-2 sm:text-sm ${
          isFurniture
            ? "text-[#176b57]"
            : "text-slate-500 hover:text-slate-700"
        }`}
        title="Furniture ERP — Products & Sales"
      >
        <Sofa
          size={15}
          className={`shrink-0 transition-transform duration-300 ${
            isFurniture ? "scale-110" : "scale-100"
          }`}
        />
        <span className="hidden sm:inline">Furniture</span>
      </Link>
    </div>
  );
}

export default function ERPLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isAdmin, logout, hasModule, isLoading } = useAuth();

  const canInterior = hasModule("interior");
  const canFurniture = hasModule("furniture");

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notifOpen, setNotifOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const [contentVisible, setContentVisible] = useState(true);
  const [displayChildren, setDisplayChildren] = useState(children);
  const prevModuleRef = useRef<"interior" | "furniture" | null>(null);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const headerActionsRef = useRef<HTMLDivElement>(null);

  const isFurniture =
    pathname === "/furniture" || pathname.startsWith("/furniture/");
  const currentModule: "interior" | "furniture" = isFurniture
    ? "furniture"
    : "interior";
  const currentNavigation = isFurniture ? furnitureNavigation : navigation;
  const pageTitle = getPageTitle(pathname);
  const moduleName = isFurniture ? "Furniture ERP" : "Interior ERP";
  const moduleKey = isFurniture ? "furniture" : "interior";

  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  useEffect(() => {
    setSidebarOpen(false);
    setNotifOpen(false);
    setSettingsOpen(false);
    setUserMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!sidebarOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [sidebarOpen]);

  useEffect(() => {
    if (isLoading || !user) return;

    if (pathname.startsWith("/furniture") && !canFurniture) {
      router.replace(canInterior ? "/interior/dashboard" : "/unauthorized");
      return;
    }

    if (pathname.startsWith("/interior") && !canInterior) {
      router.replace(canFurniture ? "/furniture/dashboard" : "/unauthorized");
    }
  }, [isLoading, user, pathname, canInterior, canFurniture, router]);

  useEffect(() => {
    if (!isFurniture || !canFurniture) {
      setNotifications([]);
      setNotifOpen(false);
      return;
    }

    let unsub: (() => void) | undefined;

    try {
      const q = query(
        collection(db, ENQUIRIES_COLLECTION),
        orderBy("createdAt", "desc"),
        limit(25)
      );

      unsub = onSnapshot(
        q,
        (snapshot) => {
          const items: NotificationItem[] = [];

          snapshot.forEach((docSnap) => {
            const data = docSnap.data();
            const status = String(data.status || "New");
            const seen = data.notificationSeen === true;

            if (status !== "New") return;
            if (seen) return;

            const name =
              String(data.customerName || data.name || "Customer").trim() ||
              "Customer";
            const product = String(
              data.productName || data.productCode || ""
            ).trim();
            const source = String(data.source || "Website").trim();
            const message = String(data.message || "").trim();

            items.push({
              id: `enq-${docSnap.id}`,
              enquiryId: docSnap.id,
              title: "New enquiry",
              body: product
                ? `${name} · ${product}${source ? ` · ${source}` : ""}`
                : message
                  ? `${name}: ${message.slice(0, 60)}${message.length > 60 ? "…" : ""}`
                  : `${name} sent a contact request${source ? ` (${source})` : ""}`,
              href: "/furniture/enquiries",
              time: formatRelativeTime(data.createdAt),
              read: false,
            });
          });

          setNotifications(items);
        },
        (err) => {
          console.error("Enquiry notifications listener error:", err);
        }
      );
    } catch (err) {
      console.error("Failed to start enquiry notifications:", err);
    }

    return () => {
      unsub?.();
    };
  }, [isFurniture, canFurniture]);

  useEffect(() => {
    const prev = prevModuleRef.current;
    if (prev !== null && prev !== currentModule) {
      setContentVisible(false);
      const t = window.setTimeout(() => {
        setDisplayChildren(children);
        setContentVisible(true);
      }, 180);
      prevModuleRef.current = currentModule;
      return () => window.clearTimeout(t);
    }
    setDisplayChildren(children);
    setContentVisible(true);
    prevModuleRef.current = currentModule;
  }, [children, currentModule]);

  const unreadCount = notifications.length;

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (
        headerActionsRef.current &&
        !headerActionsRef.current.contains(e.target as Node)
      ) {
        setNotifOpen(false);
        setSettingsOpen(false);
        setUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [searchOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setNotifOpen(false);
        setSettingsOpen(false);
        setUserMenuOpen(false);
        setSidebarOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const searchTargets = useMemo(() => {
    const base = isFurniture
      ? [
          { label: "Products", href: "/furniture/products" },
          { label: "Inventory", href: "/furniture/inventory" },
          { label: "Categories", href: "/furniture/categories" },
          { label: "Sub Categories", href: "/furniture/sub-categories" },
          { label: "Materials", href: "/furniture/materials" },
          { label: "Finishes", href: "/furniture/finishes" },
          { label: "Customers", href: "/furniture/customers" },
          { label: "Enquiries", href: "/furniture/enquiries" },
          { label: "Orders", href: "/furniture/orders" },
          { label: "Payments", href: "/furniture/payments" },
          { label: "Expenses", href: "/furniture/expenses" },
          { label: "Reports", href: "/furniture/reports" },
        ]
      : [
          { label: "CRM / Leads", href: "/interior/crm" },
          { label: "Clients", href: "/interior/clients" },
          { label: "Quotations", href: "/interior/quotations" },
          { label: "Contracts", href: "/interior/contracts" },
          { label: "Projects", href: "/interior/projects" },
          { label: "HRMS", href: "/interior/hrms" },
          { label: "Vendors", href: "/interior/vendors" },
          { label: "Payments", href: "/interior/payments" },
          { label: "Reports", href: "/interior/reports" },
        ];

    if (isAdmin) {
      base.push({ label: "Staff Users", href: "/admin/users" });
    }
    return base;
  }, [isFurniture, isAdmin]);

  const filteredSearch = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return searchTargets;
    return searchTargets.filter((t) => t.label.toLowerCase().includes(q));
  }, [searchQuery, searchTargets]);

  function runSearch(e?: React.FormEvent) {
    e?.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;

    const match = filteredSearch[0];
    if (match) {
      router.push(`${match.href}?search=${encodeURIComponent(q)}`);
    } else if (isFurniture) {
      router.push(`/furniture/products?search=${encodeURIComponent(q)}`);
    } else {
      router.push(`/interior/crm?search=${encodeURIComponent(q)}`);
    }
    setSearchOpen(false);
    setSearchQuery("");
  }

  async function openNotification(n: NotificationItem) {
    setNotifications((list) => list.filter((item) => item.id !== n.id));
    setNotifOpen(false);
    router.push(n.href);

    try {
      await markEnquiryNotificationSeen(n.enquiryId);
    } catch (err) {
      console.error("Failed to mark notification seen:", err);
    }
  }

  async function markAllRead() {
    const ids = notifications.map((n) => n.enquiryId);
    setNotifications([]);
    setNotifOpen(false);
    try {
      await markEnquiryNotificationsSeen(ids);
    } catch (err) {
      console.error("Failed to clear notifications:", err);
    }
  }

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const displayName = user?.name || "User";
  const displayRole = user?.role
    ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
    : "Staff";
  const avatarLetter = displayName.charAt(0).toUpperCase();

  return (
    <div className="min-h-screen min-h-[100dvh] overflow-x-hidden bg-[#f7f9f8] text-slate-800">
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity duration-200 lg:hidden"
        />
      )}

      {/* Sidebar — floating card on mobile, docked on desktop */}
      <aside
        className={`
          fixed z-50 flex flex-col bg-white
          transition-all duration-250 ease-out
          /* mobile floating */
          left-3 top-3 bottom-3 w-[min(17.5rem,calc(100vw-1.5rem))]
          rounded-2xl border border-white/80
          shadow-[0_12px_40px_rgba(0,0,0,0.18)] ring-1 ring-slate-900/5
          /* desktop docked */
          lg:left-0 lg:top-0 lg:bottom-0 lg:w-[235px]
          lg:rounded-none lg:border-0 lg:border-r lg:border-slate-200
          lg:shadow-none lg:ring-0
          ${
            sidebarOpen
              ? "translate-x-0 opacity-100"
              : "-translate-x-[calc(100%+1.5rem)] opacity-0 pointer-events-none lg:pointer-events-auto lg:translate-x-0 lg:opacity-100"
          }
        `}
        style={{
          animation: sidebarOpen ? "akrishSidebarIn 0.22s ease-out" : undefined,
        }}
      >
        <div className="flex h-14 shrink-0 items-center border-b border-slate-100 px-4 sm:h-[64px] sm:px-5">
          <Logo />
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="ml-auto flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 lg:hidden"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="mt-2 flex-1 overflow-y-auto overscroll-contain px-2.5 pb-3 sm:mt-3 sm:px-3">
          <p
            key={moduleKey + "-label"}
            className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400"
          >
            {isFurniture ? "Furniture Management" : "Interior Management"}
          </p>

          <div key={moduleKey + "-nav"} className="space-y-0.5 sm:space-y-1">
            {currentNavigation.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`group flex min-h-[42px] items-center gap-3 rounded-xl px-3 py-2 text-[13px] font-medium transition-all duration-200 sm:min-h-0 sm:rounded-lg ${
                    item.nested ? "ml-2 border-l border-slate-200 pl-3" : ""
                  } ${
                    active
                      ? "bg-[#e8f5ef] text-[#176b57] shadow-sm"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[13px] transition-colors duration-200 sm:h-6 sm:w-6 ${
                      active
                        ? "bg-[#176b57] text-white"
                        : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span className="truncate">{item.label}</span>
                  {active && (
                    <span className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-[#176b57]" />
                  )}
                </Link>
              );
            })}

            {isAdmin && (
              <>
                <div className="my-3 border-t border-slate-100" />
                <p className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  Administration
                </p>
                <Link
                  href="/admin/users"
                  onClick={() => setSidebarOpen(false)}
                  className={`group flex min-h-[42px] items-center gap-3 rounded-xl px-3 py-2 text-[13px] font-medium transition-all duration-200 sm:min-h-0 sm:rounded-lg ${
                    pathname.startsWith("/admin/users")
                      ? "bg-[#e8f5ef] text-[#176b57] shadow-sm"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md transition-colors duration-200 sm:h-6 sm:w-6 ${
                      pathname.startsWith("/admin/users")
                        ? "bg-[#176b57] text-white"
                        : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                    }`}
                  >
                    <Users size={14} />
                  </span>
                  <span>Staff Users</span>
                </Link>
              </>
            )}
          </div>
        </nav>

        <div className="shrink-0 border-t border-slate-100 p-2.5 sm:p-3">
          <div className="rounded-xl bg-slate-50 p-2.5 sm:rounded-lg sm:p-3">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#176b57] text-xs font-bold text-white sm:h-8 sm:w-8">
                {avatarLetter}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-slate-800">
                  {displayName}
                </p>
                <p className="truncate text-[10px] text-slate-400">
                  {displayRole}
                </p>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-600 sm:h-7 sm:w-7"
                title="Logout"
              >
                <LogOut size={14} />
              </button>
            </div>
          </div>
        </div>
      </aside>

      <div className="min-h-screen lg:pl-[235px]">
        <header className="sticky top-0 z-30 h-14 border-b border-slate-200 bg-white/95 pt-[env(safe-area-inset-top,0px)] backdrop-blur sm:h-[64px]">
          <div className="flex h-full items-center justify-between gap-2 px-3 sm:px-4 md:px-6">
            <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:bg-slate-50 lg:hidden"
                aria-label="Open navigation"
              >
                ☰
              </button>

              {/* <div key={moduleKey + "-title"} className="min-w-0">
                <p className="hidden text-[10px] uppercase tracking-wide text-slate-400 sm:block">
                  {moduleName}
                </p>
                <h1 className="truncate text-sm font-semibold text-slate-800">
                  {pageTitle}
                </h1>
              </div> */}

              <div key={moduleKey + "-title"} className="min-w-0">
                <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                  {moduleName}
                </p>
                <h1 className="truncate text-sm font-semibold leading-tight text-slate-800">
                  {pageTitle}
                </h1>
              </div>
            </div>

            <div
              ref={headerActionsRef}
              className="relative flex shrink-0 items-center gap-0.5 sm:gap-1 md:gap-2"
            >
              <HeaderModuleSwitcher
                isFurniture={isFurniture}
                canInterior={canInterior}
                canFurniture={canFurniture}
              />

              <button
                type="button"
                onClick={() => {
                  setSearchOpen(true);
                  setNotifOpen(false);
                  setSettingsOpen(false);
                  setUserMenuOpen(false);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 sm:h-9 sm:w-9"
                aria-label="Search"
              >
                <Search size={18} />
              </button>

              {isFurniture && canFurniture && (
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      setNotifOpen((v) => !v);
                      setSettingsOpen(false);
                      setUserMenuOpen(false);
                    }}
                    className="relative flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 sm:h-9 sm:w-9"
                    aria-label="Notifications"
                  >
                    <Bell size={18} />
                    {unreadCount > 0 && (
                      <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
                        {unreadCount > 9 ? "9+" : unreadCount}
                      </span>
                    )}
                  </button>

                  {notifOpen && (
                    <div className="absolute right-0 z-50 mt-2 w-[min(20rem,calc(100vw-1.5rem))] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
                      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
                        <p className="text-sm font-semibold text-slate-800">
                          Notifications
                        </p>
                        {notifications.length > 0 && (
                          <button
                            type="button"
                            onClick={markAllRead}
                            className="text-xs font-medium text-[#176b57] hover:underline"
                          >
                            Clear all
                          </button>
                        )}
                      </div>
                      <div className="max-h-[min(18rem,50vh)] overflow-y-auto">
                        {notifications.length === 0 ? (
                          <div className="px-4 py-10 text-center">
                            <Bell
                              size={28}
                              className="mx-auto mb-2 text-slate-300"
                            />
                            <p className="text-sm font-medium text-slate-600">
                              No notifications
                            </p>
                            <p className="mt-1 text-xs text-slate-400">
                              New website enquiries will appear here
                            </p>
                          </div>
                        ) : (
                          notifications.map((n) => (
                            <button
                              key={n.id}
                              type="button"
                              onClick={() => openNotification(n)}
                              className="flex w-full flex-col gap-0.5 border-b border-slate-50 bg-[#f4fbf8] px-4 py-3 text-left transition-colors hover:bg-slate-50"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <p className="text-sm font-semibold text-slate-800">
                                  {n.title}
                                </p>
                                <span className="shrink-0 text-[10px] text-slate-400">
                                  {n.time}
                                </span>
                              </div>
                              <p className="text-xs text-slate-500">{n.body}</p>
                            </button>
                          ))
                        )}
                      </div>
                      {notifications.length > 0 && (
                        <button
                          type="button"
                          onClick={() => {
                            setNotifOpen(false);
                            router.push("/furniture/enquiries");
                          }}
                          className="w-full border-t border-slate-100 px-4 py-2.5 text-center text-xs font-semibold text-[#176b57] hover:bg-slate-50"
                        >
                          View all enquiries
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}

              <div className="relative hidden sm:block">
                <button
                  type="button"
                  onClick={() => {
                    setSettingsOpen((v) => !v);
                    setNotifOpen(false);
                    setUserMenuOpen(false);
                  }}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100"
                  aria-label="Settings"
                >
                  <Settings size={18} />
                </button>

                {settingsOpen && (
                  <div className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
                    {isAdmin && (
                      <button
                        type="button"
                        onClick={() => {
                          setSettingsOpen(false);
                          router.push("/admin/users");
                        }}
                        className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
                      >
                        <Users size={14} />
                        Staff Users
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setSettingsOpen(false);
                        router.push(
                          isFurniture
                            ? "/furniture/reports"
                            : "/interior/reports"
                        );
                      }}
                      className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
                    >
                      Reports
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSettingsOpen(false);
                        router.push(
                          isFurniture
                            ? "/furniture/dashboard"
                            : "/interior/dashboard"
                        );
                      }}
                      className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
                    >
                      {isFurniture ? "Furniture" : "Interior"} Dashboard
                    </button>
                    <div className="my-1 border-t border-slate-100" />
                    <button
                      type="button"
                      onClick={() => {
                        setSettingsOpen(false);
                        handleLogout();
                      }}
                      className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
                    >
                      <LogOut size={14} />
                      Logout
                    </button>
                  </div>
                )}
              </div>

              <div className="relative border-l border-slate-200 pl-2 sm:pl-3">
                <button
                  type="button"
                  onClick={() => {
                    setUserMenuOpen((v) => !v);
                    setNotifOpen(false);
                    setSettingsOpen(false);
                  }}
                  className="flex items-center gap-2 rounded-lg px-1 py-1 transition-colors hover:bg-slate-50"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dff1e8] text-xs font-bold text-[#176b57] sm:h-8 sm:w-8">
                    {avatarLetter}
                  </div>
                  <div className="hidden min-w-0 text-left md:block">
                    <p className="max-w-[120px] truncate text-xs font-semibold text-slate-800">
                      {displayName}
                    </p>
                    <p className="text-[10px] text-slate-400">{displayRole}</p>
                  </div>
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 z-50 mt-2 w-[min(13rem,calc(100vw-1.5rem))] overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
                    <div className="border-b border-slate-100 px-4 py-3">
                      <p className="text-sm font-semibold text-slate-800">
                        {displayName}
                      </p>
                      <p className="text-xs text-slate-400">{displayRole}</p>
                      <p className="mt-1 text-[10px] uppercase tracking-wide text-[#176b57]">
                        {moduleKey} module
                      </p>
                    </div>
                    {isAdmin && (
                      <button
                        type="button"
                        onClick={() => {
                          setUserMenuOpen(false);
                          router.push("/admin/users");
                        }}
                        className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
                      >
                        <Users size={14} />
                        Manage users
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setUserMenuOpen(false);
                        handleLogout();
                      }}
                      className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
                    >
                      <LogOut size={14} />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {searchOpen && (
          <div className="fixed inset-0 z-[60] flex items-start justify-center bg-black/40 p-3 pt-[max(10vh,env(safe-area-inset-top))] sm:p-4 sm:pt-[12vh]">
            <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">
              <form
                onSubmit={runSearch}
                className="flex items-center gap-2 border-b border-slate-100 px-3 py-3 sm:px-4"
              >
                <Search size={18} className="shrink-0 text-slate-400" />
                <input
                  ref={searchInputRef}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Search in ${moduleName}…`}
                  className="h-10 min-w-0 flex-1 border-0 bg-transparent text-base outline-none sm:text-sm"
                />
                <button
                  type="button"
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
                >
                  <X size={16} />
                </button>
              </form>
              <div className="max-h-[min(18rem,50vh)] overflow-y-auto py-2">
                {filteredSearch.length === 0 ? (
                  <p className="px-4 py-6 text-center text-sm text-slate-500">
                    No matching pages
                  </p>
                ) : (
                  filteredSearch.map((item) => (
                    <button
                      key={item.href}
                      type="button"
                      onClick={() => {
                        const q = searchQuery.trim();
                        router.push(
                          q
                            ? `${item.href}?search=${encodeURIComponent(q)}`
                            : item.href
                        );
                        setSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="flex w-full items-center justify-between gap-2 px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-50 sm:py-2.5"
                    >
                      <span>{item.label}</span>
                      <span className="hidden shrink-0 text-[10px] text-slate-400 sm:inline">
                        {item.href}
                      </span>
                    </button>
                  ))
                )}
              </div>
              <div className="border-t border-slate-100 px-4 py-2 text-[11px] text-slate-400">
                Enter to open · Esc to close
              </div>
            </div>
          </div>
        )}

        <main
          className="min-h-[calc(100vh-3.5rem)] overflow-x-hidden px-3 py-4 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:min-h-[calc(100vh-64px)] sm:p-6"
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible
              ? "translateY(0) scale(1)"
              : "translateY(8px) scale(0.99)",
          }}
        >
          {displayChildren}
        </main>
      </div>

      <style jsx global>{`
        @keyframes akrishSidebarIn {
          from {
            opacity: 0.7;
            transform: translateX(-12px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes akrishNavIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes akrishTitleIn {
          from {
            opacity: 0;
            transform: translateY(-2px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
