// "use client";

// import { ReactNode, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   Bell,
//   ChevronLeft,
//   ChevronRight,
//   LogOut,
//   Menu,
//   User,
//   X,
// } from "lucide-react";
// import ModuleSwitcher from "./ModuleSwitcher";
// import { useAuth } from "../auth/AuthContext";

// type NavItem = {
//   label: string;
//   href: string;
// };

// const interiorNavigation: NavItem[] = [
//   { label: "Dashboard", href: "/interior/dashboard" },
//   { label: "CRM", href: "/interior/crm" },
//   { label: "Clients", href: "/interior/clients" },
//   { label: "Quotations", href: "/interior/quotations" },
//   { label: "Contracts", href: "/interior/contracts" },
//   { label: "Projects", href: "/interior/projects" },
//   { label: "HRMS", href: "/interior/hrms" },
//   { label: "Vendors", href: "/interior/vendors" },
//   { label: "Payments", href: "/interior/payments" },
//   { label: "Reports", href: "/interior/reports" },
// ];

// const furnitureNavigation: NavItem[] = [
//   { label: "Dashboard", href: "/furniture/dashboard" },
//   { label: "Products", href: "/furniture/products" },
//   { label: "Inventory", href: "/furniture/inventory" },
//   { label: "Customers", href: "/furniture/customers" },
//   { label: "Enquiries", href: "/furniture/enquiries" },
//   { label: "Orders", href: "/furniture/orders" },
//   { label: "Payments", href: "/furniture/payments" },
//   { label: "Expenses", href: "/furniture/expenses" },
//   { label: "Reports", href: "/furniture/reports" },
// ];

// interface ShellLayoutProps {
//   children: ReactNode;
// }

// export default function ShellLayout({ children }: ShellLayoutProps) {
//   const pathname = usePathname();
//   const { user, logout } = useAuth();

//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [collapsed, setCollapsed] = useState(false);

//   const isFurniture = pathname.startsWith("/furniture");
//   const navigation = isFurniture
//     ? furnitureNavigation
//     : interiorNavigation;

//   const moduleName = isFurniture ? "Furniture" : "Interior";

//   const isActive = (href: string) => {
//     if (pathname === href) return true;

//     return pathname.startsWith(`${href}/`);
//   };

//   const handleLogout = () => {
//     logout();
//   };

//   return (
//     <div className="min-h-screen bg-[#f7f9f8] text-slate-800">
//       {/* Mobile overlay */}
//       {sidebarOpen && (
//         <button
//           type="button"
//           aria-label="Close sidebar"
//           className="fixed inset-0 z-40 bg-black/30 lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`fixed inset-y-0 left-0 z-50 flex flex-col border-r border-slate-200 bg-white transition-all duration-300 ${
//           collapsed ? "w-[76px]" : "w-[260px]"
//         } ${
//           sidebarOpen
//             ? "translate-x-0"
//             : "-translate-x-full lg:translate-x-0"
//         }`}
//       >
//         {/* Logo */}
//         <div className="flex h-16 items-center border-b border-slate-200 px-4">
//           <div className="flex min-w-0 flex-1 items-center gap-3">
//             <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
//               VIP
//             </div>

//             {!collapsed && (
//               <div className="min-w-0">
//                 <p className="truncate text-sm font-bold text-slate-900">
//                   VIP Interior
//                 </p>
//                 <p className="truncate text-xs text-slate-500">
//                   ERP Management
//                 </p>
//               </div>
//             )}
//           </div>

//           <button
//             type="button"
//             onClick={() => setSidebarOpen(false)}
//             className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
//             aria-label="Close sidebar"
//           >
//             <X size={19} />
//           </button>
//         </div>

//         {/* Module switcher */}
//         <div className="border-b border-slate-200 p-3">
//           <ModuleSwitcher />
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 overflow-y-auto px-3 py-4">
//           <p
//             className={`mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400 ${
//               collapsed ? "sr-only" : ""
//             }`}
//           >
//             {moduleName} Module
//           </p>

//           <div className="space-y-1">
//             {navigation.map((item) => {
//               const active = isActive(item.href);

//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setSidebarOpen(false)}
//                   title={collapsed ? item.label : undefined}
//                   className={`flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition ${
//                     collapsed ? "justify-center" : "gap-3"
//                   } ${
//                     active
//                       ? "bg-slate-900 text-white shadow-sm"
//                       : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
//                   }`}
//                 >
//                   <span
//                     className={`h-1.5 w-1.5 shrink-0 rounded-full ${
//                       active ? "bg-white" : "bg-slate-300"
//                     }`}
//                   />

//                   {!collapsed && (
//                     <span className="truncate">{item.label}</span>
//                   )}
//                 </Link>
//               );
//             })}
//           </div>
//         </nav>

//         {/* Collapse button */}
//         <div className="hidden border-t border-slate-200 p-3 lg:block">
//           <button
//             type="button"
//             onClick={() => setCollapsed((value) => !value)}
//             className={`flex w-full items-center rounded-lg px-3 py-2 text-sm text-slate-500 hover:bg-slate-100 hover:text-slate-900 ${
//               collapsed ? "justify-center" : "gap-3"
//             }`}
//           >
//             {collapsed ? (
//               <ChevronRight size={18} />
//             ) : (
//               <>
//                 <ChevronLeft size={18} />
//                 <span>Collapse sidebar</span>
//               </>
//             )}
//           </button>
//         </div>

//         {/* User */}
//         <div className="border-t border-slate-200 p-3">
//           <div
//             className={`flex items-center ${
//               collapsed ? "justify-center" : "gap-3"
//             }`}
//           >
//             <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
//               <User size={17} />
//             </div>

//             {!collapsed && (
//               <>
//                 <div className="min-w-0 flex-1">
//                   <p className="truncate text-sm font-semibold text-slate-800">
//                     {user?.name || "User"}
//                   </p>
//                   <p className="truncate text-xs capitalize text-slate-500">
//                     {user?.role || "Employee"}
//                   </p>
//                 </div>

//                 <button
//                   type="button"
//                   onClick={handleLogout}
//                   title="Logout"
//                   className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600"
//                 >
//                   <LogOut size={17} />
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </aside>

//       {/* Main area */}
//       <div
//         className={`min-h-screen transition-all duration-300 ${
//           collapsed ? "lg:pl-[76px]" : "lg:pl-[260px]"
//         }`}
//       >
//         {/* Header */}
//         <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6">
//           <div className="flex items-center gap-3">
//             <button
//               type="button"
//               onClick={() => setSidebarOpen(true)}
//               className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
//               aria-label="Open sidebar"
//             >
//               <Menu size={21} />
//             </button>

//             <div>
//               <p className="text-sm font-semibold text-slate-900">
//                 {moduleName} Management
//               </p>
//               <p className="hidden text-xs text-slate-500 sm:block">
//                 VIP Interior ERP
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2">
//             <button
//               type="button"
//               title="Notifications"
//               className="relative rounded-lg p-2.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
//             >
//               <Bell size={19} />

//               <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500" />
//             </button>

//             <div className="hidden h-7 w-px bg-slate-200 sm:block" />

//             <div className="hidden items-center gap-2 sm:flex">
//               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
//                 {user?.name?.charAt(0).toUpperCase() || "U"}
//               </div>

//               <div className="max-w-[150px]">
//                 <p className="truncate text-xs font-semibold text-slate-800">
//                   {user?.name || "User"}
//                 </p>
//                 <p className="truncate text-[11px] capitalize text-slate-500">
//                   {user?.role || "Employee"}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Page content */}
//         <main className="min-h-[calc(100vh-4rem)] p-4 sm:p-6">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { ReactNode, useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   Bell,
//   ChevronLeft,
//   ChevronRight,
//   LogOut,
//   Menu,
//   User,
//   X,
// } from "lucide-react";
// import ModuleSwitcher from "./ModuleSwitcher";
// import { useAuth } from "../auth/AuthContext";

// type NavItem = {
//   label: string;
//   href: string;
// };

// const interiorNavigation: NavItem[] = [
//   { label: "Dashboard", href: "/interior/dashboard" },
//   { label: "CRM", href: "/interior/crm" },
//   { label: "Clients", href: "/interior/clients" },
//   { label: "Quotations", href: "/interior/quotations" },
//   { label: "Contracts", href: "/interior/contracts" },
//   { label: "Projects", href: "/interior/projects" },
//   { label: "HRMS", href: "/interior/hrms" },
//   { label: "Vendors", href: "/interior/vendors" },
//   { label: "Payments", href: "/interior/payments" },
//   { label: "Reports", href: "/interior/reports" },
// ];

// const furnitureNavigation: NavItem[] = [
//   { label: "Dashboard", href: "/furniture/dashboard" },
//   { label: "Products", href: "/furniture/products" },
//   { label: "Inventory", href: "/furniture/inventory" },
//   { label: "Customers", href: "/furniture/customers" },
//   { label: "Enquiries", href: "/furniture/enquiries" },
//   { label: "Orders", href: "/furniture/orders" },
//   { label: "Payments", href: "/furniture/payments" },
//   { label: "Expenses", href: "/furniture/expenses" },
//   { label: "Reports", href: "/furniture/reports" },
// ];

// interface ShellLayoutProps {
//   children: ReactNode;
// }

// export default function ShellLayout({ children }: ShellLayoutProps) {
//   const pathname = usePathname();
//   const { user, logout } = useAuth();

//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [collapsed, setCollapsed] = useState(false);

//   const isFurniture = pathname.startsWith("/furniture");
//   const navigation = isFurniture ? furnitureNavigation : interiorNavigation;
//   const moduleName = isFurniture ? "Furniture" : "Interior";

//   const isActive = (href: string) =>
//     pathname === href || pathname.startsWith(`${href}/`);

//   useEffect(() => {
//     setSidebarOpen(false);
//   }, [pathname]);

//   useEffect(() => {
//     if (!sidebarOpen) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, [sidebarOpen]);

//   return (
//     <div className="min-h-screen min-h-[100dvh] overflow-x-hidden bg-[#f7f9f8] text-slate-800">
//       {sidebarOpen && (
//         <button
//           type="button"
//           aria-label="Close sidebar"
//           className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px] lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       <aside
//         className={`fixed inset-y-0 left-0 z-50 flex flex-col border-r border-slate-200 bg-white shadow-xl transition-all duration-300 lg:shadow-none ${
//           collapsed ? "lg:w-[76px]" : "lg:w-[260px]"
//         } w-[min(280px,85vw)] ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
//         }`}
//       >
//         <div className="flex h-14 items-center border-b border-slate-200 px-4 sm:h-16">
//           <div className="flex min-w-0 flex-1 items-center gap-3">
//             <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
//               VIP
//             </div>
//             {!collapsed && (
//               <div className="min-w-0">
//                 <p className="truncate text-sm font-bold text-slate-900">
//                   VIP Interior
//                 </p>
//                 <p className="truncate text-xs text-slate-500">ERP Management</p>
//               </div>
//             )}
//           </div>
//           <button
//             type="button"
//             onClick={() => setSidebarOpen(false)}
//             className="rounded-lg p-2.5 text-slate-500 hover:bg-slate-100 lg:hidden"
//             aria-label="Close sidebar"
//           >
//             <X size={19} />
//           </button>
//         </div>

//         <div className="border-b border-slate-200 p-3">
//           <ModuleSwitcher />
//         </div>

//         <nav className="flex-1 overflow-y-auto overscroll-contain px-3 py-4">
//           <p
//             className={`mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400 ${
//               collapsed ? "lg:sr-only" : ""
//             }`}
//           >
//             {moduleName} Module
//           </p>
//           <div className="space-y-1">
//             {navigation.map((item) => {
//               const active = isActive(item.href);
//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setSidebarOpen(false)}
//                   title={collapsed ? item.label : undefined}
//                   className={`flex min-h-[44px] items-center rounded-lg px-3 py-2.5 text-sm font-medium transition lg:min-h-0 ${
//                     collapsed ? "lg:justify-center" : "gap-3"
//                   } ${
//                     active
//                       ? "bg-slate-900 text-white shadow-sm"
//                       : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
//                   }`}
//                 >
//                   <span
//                     className={`h-1.5 w-1.5 shrink-0 rounded-full ${
//                       active ? "bg-white" : "bg-slate-300"
//                     }`}
//                   />
//                   <span className={collapsed ? "lg:hidden" : ""}>
//                     {item.label}
//                   </span>
//                 </Link>
//               );
//             })}
//           </div>
//         </nav>

//         <div className="hidden border-t border-slate-200 p-3 lg:block">
//           <button
//             type="button"
//             onClick={() => setCollapsed((v) => !v)}
//             className={`flex w-full items-center rounded-lg px-3 py-2 text-sm text-slate-500 hover:bg-slate-100 hover:text-slate-900 ${
//               collapsed ? "justify-center" : "gap-3"
//             }`}
//           >
//             {collapsed ? (
//               <ChevronRight size={18} />
//             ) : (
//               <>
//                 <ChevronLeft size={18} />
//                 <span>Collapse sidebar</span>
//               </>
//             )}
//           </button>
//         </div>

//         <div className="border-t border-slate-200 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
//           <div
//             className={`flex items-center ${
//               collapsed ? "lg:justify-center" : "gap-3"
//             }`}
//           >
//             <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
//               <User size={17} />
//             </div>
//             <div className={`min-w-0 flex-1 ${collapsed ? "lg:hidden" : ""}`}>
//               <p className="truncate text-sm font-semibold text-slate-800">
//                 {user?.name || "User"}
//               </p>
//               <p className="truncate text-xs capitalize text-slate-500">
//                 {user?.role || "Employee"}
//               </p>
//             </div>
//             <button
//               type="button"
//               onClick={() => logout()}
//               title="Logout"
//               className={`rounded-lg p-2.5 text-slate-400 hover:bg-red-50 hover:text-red-600 ${
//                 collapsed ? "lg:hidden" : ""
//               }`}
//             >
//               <LogOut size={17} />
//             </button>
//           </div>
//         </div>
//       </aside>

//       <div
//         className={`min-h-screen transition-all duration-300 ${
//           collapsed ? "lg:pl-[76px]" : "lg:pl-[260px]"
//         }`}
//       >
//         <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-slate-200 bg-white/95 px-3 pt-[env(safe-area-inset-top,0px)] backdrop-blur sm:h-16 sm:px-6">
//           <div className="flex min-w-0 items-center gap-3">
//             <button
//               type="button"
//               onClick={() => setSidebarOpen(true)}
//               className="rounded-lg p-2.5 text-slate-600 hover:bg-slate-100 lg:hidden"
//               aria-label="Open sidebar"
//             >
//               <Menu size={21} />
//             </button>
//             <div className="min-w-0">
//               <p className="truncate text-sm font-semibold text-slate-900">
//                 {moduleName} Management
//               </p>
//               <p className="hidden text-xs text-slate-500 sm:block">
//                 VIP Interior ERP
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center gap-2">
//             <button
//               type="button"
//               title="Notifications"
//               className="relative rounded-lg p-2.5 text-slate-500 hover:bg-slate-100"
//             >
//               <Bell size={19} />
//               <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500" />
//             </button>
//             <div className="hidden items-center gap-2 sm:flex">
//               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
//                 {user?.name?.charAt(0).toUpperCase() || "U"}
//               </div>
//               <div className="max-w-[150px]">
//                 <p className="truncate text-xs font-semibold text-slate-800">
//                   {user?.name || "User"}
//                 </p>
//                 <p className="truncate text-[11px] capitalize text-slate-500">
//                   {user?.role || "Employee"}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </header>

//         <main className="min-h-[calc(100vh-3.5rem)] p-3 sm:min-h-[calc(100vh-4rem)] sm:p-6">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }


"use client";

import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Menu,
  User,
  X,
} from "lucide-react";
import ModuleSwitcher from "./ModuleSwitcher";
import { useAuth } from "../auth/AuthContext";

type NavItem = {
  label: string;
  href: string;
};

const interiorNavigation: NavItem[] = [
  { label: "Dashboard", href: "/interior/dashboard" },
  { label: "CRM", href: "/interior/crm" },
  { label: "Clients", href: "/interior/clients" },
  { label: "Quotations", href: "/interior/quotations" },
  { label: "Contracts", href: "/interior/contracts" },
  { label: "Projects", href: "/interior/projects" },
  { label: "HRMS", href: "/interior/hrms" },
  { label: "Vendors", href: "/interior/vendors" },
  { label: "Payments", href: "/interior/payments" },
  { label: "Reports", href: "/interior/reports" },
];

const furnitureNavigation: NavItem[] = [
  { label: "Dashboard", href: "/furniture/dashboard" },
  { label: "Products", href: "/furniture/products" },
  { label: "Inventory", href: "/furniture/inventory" },
  { label: "Customers", href: "/furniture/customers" },
  { label: "Enquiries", href: "/furniture/enquiries" },
  { label: "Orders", href: "/furniture/orders" },
  { label: "Payments", href: "/furniture/payments" },
  { label: "Expenses", href: "/furniture/expenses" },
  { label: "Delivery", href: "/furniture/settings/delivery" },
  { label: "Reports", href: "/furniture/reports" },
];

interface ShellLayoutProps {
  children: ReactNode;
}

export default function ShellLayout({ children }: ShellLayoutProps) {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const isFurniture = pathname.startsWith("/furniture");
  const navigation = isFurniture ? furnitureNavigation : interiorNavigation;
  const moduleName = isFurniture ? "Furniture" : "Interior";

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!sidebarOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen min-h-[100dvh] overflow-x-hidden bg-[#f7f9f8] text-slate-800">
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px] lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col border-r border-slate-200 bg-white shadow-xl transition-all duration-300 lg:shadow-none ${
          collapsed ? "lg:w-[76px]" : "lg:w-[260px]"
        } w-[min(280px,85vw)] ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex h-14 items-center border-b border-slate-200 px-4 sm:h-16">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
              VIP
            </div>
            {!collapsed && (
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-slate-900">
                  VIP Interior
                </p>
                <p className="truncate text-xs text-slate-500">ERP Management</p>
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2.5 text-slate-500 hover:bg-slate-100 lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={19} />
          </button>
        </div>

        <div className="border-b border-slate-200 p-3">
          <ModuleSwitcher />
        </div>

        <nav className="flex-1 overflow-y-auto overscroll-contain px-3 py-4">
          <p
            className={`mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400 ${
              collapsed ? "lg:sr-only" : ""
            }`}
          >
            {moduleName} Module
          </p>
          <div className="space-y-1">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  title={collapsed ? item.label : undefined}
                  className={`flex min-h-[44px] items-center rounded-lg px-3 py-2.5 text-sm font-medium transition lg:min-h-0 ${
                    collapsed ? "lg:justify-center" : "gap-3"
                  } ${
                    active
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                      active ? "bg-white" : "bg-slate-300"
                    }`}
                  />
                  <span className={collapsed ? "lg:hidden" : ""}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="hidden border-t border-slate-200 p-3 lg:block">
          <button
            type="button"
            onClick={() => setCollapsed((v) => !v)}
            className={`flex w-full items-center rounded-lg px-3 py-2 text-sm text-slate-500 hover:bg-slate-100 hover:text-slate-900 ${
              collapsed ? "justify-center" : "gap-3"
            }`}
          >
            {collapsed ? (
              <ChevronRight size={18} />
            ) : (
              <>
                <ChevronLeft size={18} />
                <span>Collapse sidebar</span>
              </>
            )}
          </button>
        </div>

        <div className="border-t border-slate-200 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <div
            className={`flex items-center ${
              collapsed ? "lg:justify-center" : "gap-3"
            }`}
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
              <User size={17} />
            </div>
            <div className={`min-w-0 flex-1 ${collapsed ? "lg:hidden" : ""}`}>
              <p className="truncate text-sm font-semibold text-slate-800">
                {user?.name || "User"}
              </p>
              <p className="truncate text-xs capitalize text-slate-500">
                {user?.role || "Employee"}
              </p>
            </div>
            <button
              type="button"
              onClick={() => logout()}
              title="Logout"
              className={`rounded-lg p-2.5 text-slate-400 hover:bg-red-50 hover:text-red-600 ${
                collapsed ? "lg:hidden" : ""
              }`}
            >
              <LogOut size={17} />
            </button>
          </div>
        </div>
      </aside>

      <div
        className={`min-h-screen transition-all duration-300 ${
          collapsed ? "lg:pl-[76px]" : "lg:pl-[260px]"
        }`}
      >
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-slate-200 bg-white/95 px-3 pt-[env(safe-area-inset-top,0px)] backdrop-blur sm:h-16 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2.5 text-slate-600 hover:bg-slate-100 lg:hidden"
              aria-label="Open sidebar"
            >
              <Menu size={21} />
            </button>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-900">
                {moduleName} Management
              </p>
              <p className="hidden text-xs text-slate-500 sm:block">
                VIP Interior ERP
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              title="Notifications"
              className="relative rounded-lg p-2.5 text-slate-500 hover:bg-slate-100"
            >
              <Bell size={19} />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500" />
            </button>
            <div className="hidden items-center gap-2 sm:flex">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                {user?.name?.charAt(0).toUpperCase() || "U"}
              </div>
              <div className="max-w-[150px]">
                <p className="truncate text-xs font-semibold text-slate-800">
                  {user?.name || "User"}
                </p>
                <p className="truncate text-[11px] capitalize text-slate-500">
                  {user?.role || "Employee"}
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="min-h-[calc(100vh-3.5rem)] p-3 sm:min-h-[calc(100vh-4rem)] sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
