// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Building2, ChevronDown, Sofa, Check } from "lucide-react";
// import { useState } from "react";

// type Module = {
//   id: "interior" | "furniture";
//   name: string;
//   description: string;
//   href: string;
//   icon: typeof Building2;
// };

// const modules: Module[] = [
//   {
//     id: "interior",
//     name: "Interior",
//     description: "Projects & Operations",
//     href: "/interior/dashboard",
//     icon: Building2,
//   },
//   {
//     id: "furniture",
//     name: "Furniture",
//     description: "Products & Sales",
//     href: "/furniture/dashboard",
//     icon: Sofa,
//   },
// ];

// export default function ModuleSwitcher() {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);

//   const currentModule =
//     pathname.startsWith("/furniture") ? modules[1] : modules[0];

//   const CurrentIcon = currentModule.icon;

//   return (
//     <div className="relative">
//       <button
//         type="button"
//         onClick={() => setOpen((value) => !value)}
//         className="flex w-full items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-left shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
//         aria-expanded={open}
//         aria-haspopup="menu"
//       >
//         <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white">
//           <CurrentIcon size={19} />
//         </div>

//         <div className="min-w-0 flex-1">
//           <p className="truncate text-sm font-semibold text-slate-900">
//             {currentModule.name}
//           </p>
//           <p className="truncate text-xs text-slate-500">
//             {currentModule.description}
//           </p>
//         </div>

//         <ChevronDown
//           size={17}
//           className={`shrink-0 text-slate-500 transition-transform ${
//             open ? "rotate-180" : ""
//           }`}
//         />
//       </button>

//       {open && (
//         <>
//           <button
//             type="button"
//             aria-label="Close module menu"
//             className="fixed inset-0 z-40 cursor-default"
//             onClick={() => setOpen(false)}
//           />

//           <div
//             role="menu"
//             className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl"
//           >
//             {modules.map((module) => {
//               const Icon = module.icon;
//               const isActive = module.id === currentModule.id;

//               return (
//                 <Link
//                   key={module.id}
//                   href={module.href}
//                   role="menuitem"
//                   onClick={() => setOpen(false)}
//                   className={`flex items-center gap-3 rounded-lg px-3 py-3 transition ${
//                     isActive
//                       ? "bg-slate-100"
//                       : "hover:bg-slate-50"
//                   }`}
//                 >
//                   <div
//                     className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
//                       isActive
//                         ? "bg-slate-900 text-white"
//                         : "bg-slate-100 text-slate-600"
//                     }`}
//                   >
//                     <Icon size={18} />
//                   </div>

//                   <div className="min-w-0 flex-1">
//                     <p className="text-sm font-semibold text-slate-900">
//                       {module.name}
//                     </p>
//                     <p className="text-xs text-slate-500">
//                       {module.description}
//                     </p>
//                   </div>

//                   {isActive && (
//                     <Check
//                       size={17}
//                       className="shrink-0 text-slate-700"
//                     />
//                   )}
//                 </Link>
//               );
//             })}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, ChevronDown, Sofa, Check } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/core/auth/AuthContext";

type Module = {
  id: "interior" | "furniture";
  name: string;
  description: string;
  href: string;
  icon: typeof Building2;
};

const ALL_MODULES: Module[] = [
  {
    id: "interior",
    name: "Interior",
    description: "Projects & Operations",
    href: "/interior/dashboard",
    icon: Building2,
  },
  {
    id: "furniture",
    name: "Furniture",
    description: "Products & Sales",
    href: "/furniture/dashboard",
    icon: Sofa,
  },
];

export default function ModuleSwitcher() {
  const pathname = usePathname();
  const { hasModule } = useAuth();
  const [open, setOpen] = useState(false);

  const availableModules = ALL_MODULES.filter((m) => hasModule(m.id));

  // If only one module, don't show switcher
  if (availableModules.length <= 1) return null;

  const currentModule =
    pathname.startsWith("/furniture")
      ? ALL_MODULES[1]
      : ALL_MODULES[0];

  const CurrentIcon = currentModule.icon;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-left shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white">
          <CurrentIcon size={19} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-slate-900">{currentModule.name}</p>
          <p className="truncate text-xs text-slate-500">{currentModule.description}</p>
        </div>
        <ChevronDown
          size={17}
          className={`shrink-0 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-label="Close"
            className="fixed inset-0 z-40 cursor-default"
            onClick={() => setOpen(false)}
          />
          <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl">
            {availableModules.map((module) => {
              const Icon = module.icon;
              const isActive = module.id === currentModule.id;
              return (
                <Link
                  key={module.id}
                  href={module.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-3 py-3 transition ${
                    isActive ? "bg-slate-100" : "hover:bg-slate-50"
                  }`}
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                      isActive ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-slate-900">{module.name}</p>
                    <p className="text-xs text-slate-500">{module.description}</p>
                  </div>
                  {isActive && <Check size={17} className="shrink-0 text-slate-700" />}
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}