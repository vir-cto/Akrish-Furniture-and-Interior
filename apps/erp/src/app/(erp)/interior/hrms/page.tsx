// "use client";

// import { useEffect, useState } from "react";
// import {
//   getAllEmployees,
//   type InteriorEmployee,
// } from "@/modules/interior/services/employeeService";

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// export default function InteriorHrmsHubPage() {
//   const [employees, setEmployees] = useState<InteriorEmployee[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllEmployees();
//         if (!cancelled) setEmployees(data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const total = employees.length;
//   const active = employees.filter((e) => {
//     const s = (e.status || "Active").toLowerCase();
//     return s === "active" || !e.status;
//   }).length;
//   const onLeave = employees.filter((e) =>
//     (e.status || "").toLowerCase().includes("leave")
//   ).length;
//   const payroll = employees.reduce(
//     (sum, e) => sum + (Number(e.salary) || 0),
//     0
//   );

//   const cards = [
//     {
//       title: "Employees",
//       href: "/interior/hrms/employees",
//       desc: "Directory, roles and status",
//       value: loading ? "…" : String(total),
//       helper: `${active} active`,
//     },
//     {
//       title: "Attendance",
//       href: "/interior/hrms/attendance",
//       desc: "Daily check-in / check-out",
//       value: loading ? "…" : String(active),
//       helper: "Based on active staff",
//     },
//     {
//       title: "Payroll",
//       href: "/interior/hrms/payroll",
//       desc: "Salary overview",
//       value: loading ? "…" : formatCurrency(payroll),
//       helper: "Monthly salary total",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1600px] px-5 py-5 lg:px-8">
//           {/* <div className="mb-1 text-sm font-medium text-[#9a5b18]">
//             Akrish / Furniture and Interior
//           </div> */}
//           <h1 className="text-2xl font-bold tracking-tight">HRMS</h1>
//           <p className="mt-1 text-sm text-gray-500">
//             Interior human resources — employees, attendance and payroll.
//             {loading && (
//               <span className="ml-2 text-[#176b5b]">Loading…</span>
//             )}
//           </p>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-6 px-5 py-6 lg:px-8">
//         <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <Stat label="Total Staff" value={loading ? "…" : String(total)} />
//           <Stat label="Active" value={loading ? "…" : String(active)} />
//           <Stat label="On Leave" value={loading ? "…" : String(onLeave)} />
//           <Stat
//             label="Payroll Base"
//             value={loading ? "…" : formatCurrency(payroll)}
//           />
//         </section>

//         <section className="grid gap-4 md:grid-cols-3">
//           {cards.map((card) => (
//             <a
//               key={card.href}
//               href={card.href}
//               className="rounded-xl border border-[#e4e2da] bg-white p-6 transition hover:border-[#176b5b] hover:shadow-sm"
//             >
//               <p className="text-sm font-semibold text-[#176b5b]">
//                 {card.title}
//               </p>
//               <p className="mt-3 text-3xl font-bold text-gray-900">
//                 {card.value}
//               </p>
//               <p className="mt-1 text-xs text-gray-400">{card.helper}</p>
//               <p className="mt-4 text-sm text-gray-600">{card.desc}</p>
//               <p className="mt-4 text-sm font-semibold text-[#176b5b]">
//                 Open →
//               </p>
//             </a>
//           ))}
//         </section>
//       </main>
//     </div>
//   );
// }

// function Stat({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//       <p className="text-sm text-gray-500">{label}</p>
//       <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import {
//   getAllEmployees,
//   type InteriorEmployee,
// } from "@/modules/interior/services/employeeService";

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// export default function InteriorHrmsHubPage() {
//   const [employees, setEmployees] = useState<InteriorEmployee[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllEmployees();
//         if (!cancelled) setEmployees(data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const total = employees.length;
//   const active = employees.filter((e) => {
//     const s = (e.status || "Active").toLowerCase();
//     return s === "active" || !e.status;
//   }).length;
//   const onLeave = employees.filter((e) =>
//     (e.status || "").toLowerCase().includes("leave")
//   ).length;
//   const payroll = employees.reduce(
//     (sum, e) => sum + (Number(e.salary) || 0),
//     0
//   );

//   const cards = [
//     {
//       title: "Employees",
//       href: "/interior/hrms/employees",
//       desc: "Directory, roles and status",
//       value: loading ? "…" : String(total),
//       helper: `${active} active`,
//     },
//     {
//       title: "Attendance",
//       href: "/interior/hrms/attendance",
//       desc: "Daily check-in / check-out",
//       value: loading ? "…" : String(active),
//       helper: "Mark today or any date",
//     },
//     // {
//     //   title: "Attendance History",
//     //   href: "/interior/hrms/attendance-history",
//     //   desc: "Stored records for every employee",
//     //   value: "Log",
//     //   helper: "All past days in Firebase",
//     // },
//     {
//       title: "Payroll",
//       href: "/interior/hrms/payroll",
//       desc: "Salary overview",
//       value: loading ? "…" : formatCurrency(payroll),
//       helper: "Monthly salary total",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1600px] px-5 py-5 lg:px-8">
//           <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//             <div>
//               <h1 className="text-2xl font-bold tracking-tight">HRMS</h1>
//               <p className="mt-1 text-sm text-gray-500">
//                 Interior human resources — employees, attendance and payroll.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <a
//               href="/interior/hrms/attendance-history"
//               className="inline-flex items-center justify-center rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//             >
//               Attendance History
//             </a>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-6 px-5 py-6 lg:px-8">
//         <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <Stat label="Total Staff" value={loading ? "…" : String(total)} />
//           <Stat label="Active" value={loading ? "…" : String(active)} />
//           <Stat label="On Leave" value={loading ? "…" : String(onLeave)} />
//           <Stat
//             label="Payroll Base"
//             value={loading ? "…" : formatCurrency(payroll)}
//           />
//         </section>

//         <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
//           {cards.map((card) => (
//             <a
//               key={card.href}
//               href={card.href}
//               className="rounded-xl border border-[#e4e2da] bg-white p-6 transition hover:border-[#176b5b] hover:shadow-sm"
//             >
//               <p className="text-sm font-semibold text-[#176b5b]">
//                 {card.title}
//               </p>
//               <p className="mt-3 text-3xl font-bold text-gray-900">
//                 {card.value}
//               </p>
//               <p className="mt-1 text-xs text-gray-400">{card.helper}</p>
//               <p className="mt-4 text-sm text-gray-600">{card.desc}</p>
//               <p className="mt-4 text-sm font-semibold text-[#176b5b]">
//                 Open →
//               </p>
//             </a>
//           ))}
//         </section>

//         <p className="text-xs text-gray-400">
//           Attendance is saved automatically when you mark or update a day on the
//           Attendance page. History lists every stored record per employee.
//         </p>
//       </main>
//     </div>
//   );
// }

// function Stat({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//       <p className="text-sm text-gray-500">{label}</p>
//       <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import {
//   getAllEmployees,
//   type InteriorEmployee,
// } from "@/modules/interior/services/employeeService";
// import { History } from "lucide-react";

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// export default function InteriorHrmsHubPage() {
//   const [employees, setEmployees] = useState<InteriorEmployee[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllEmployees();
//         if (!cancelled) setEmployees(data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const total = employees.length;
//   const active = employees.filter((e) => {
//     const s = (e.status || "Active").toLowerCase();
//     return s === "active" || !e.status;
//   }).length;
//   const onLeave = employees.filter((e) =>
//     (e.status || "").toLowerCase().includes("leave")
//   ).length;
//   const payroll = employees.reduce(
//     (sum, e) => sum + (Number(e.salary) || 0),
//     0
//   );

//   const cards = [
//     {
//       title: "Employees",
//       href: "/interior/hrms/employees",
//       desc: "Directory, roles and status",
//       value: loading ? "…" : String(total),
//       helper: `${active} active`,
//     },
//     {
//       title: "Attendance",
//       href: "/interior/hrms/attendance",
//       desc: "Daily check-in / check-out",
//       value: loading ? "…" : String(active),
//       helper: "Mark today or any date",
//     },
//     {
//       title: "Payroll",
//       href: "/interior/hrms/payroll",
//       desc: "Salary overview",
//       value: loading ? "…" : formatCurrency(payroll),
//       helper: "Monthly salary total",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1600px] px-3 py-4 sm:px-5 sm:py-5 lg:px-8">
//           <div className="flex items-start justify-between gap-3 sm:items-center">
//             <div className="min-w-0 flex-1">
//               <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
//                 HRMS
//               </h1>
//               <p className="mt-1 text-xs text-gray-500 sm:text-sm">
//                 Interior human resources — employees, attendance and payroll.
//                 {loading && (
//                   <span className="ml-2 text-[#176b5b]">Loading…</span>
//                 )}
//               </p>
//             </div>
//             <Link
//               href="/interior/hrms/attendance-history"
//               className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125848] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
//             >
//               <History size={16} strokeWidth={2.5} />
//               <span className="hidden sm:inline">Attendance History</span>
//               <span className="sm:hidden">History</span>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1600px] space-y-4 px-3 py-4 sm:space-y-6 sm:px-5 sm:py-6 lg:px-8">
//         <section className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
//           <Stat label="Total Staff" value={loading ? "…" : String(total)} />
//           <Stat label="Active" value={loading ? "…" : String(active)} />
//           <Stat label="On Leave" value={loading ? "…" : String(onLeave)} />
//           <Stat
//             label="Payroll Base"
//             value={loading ? "…" : formatCurrency(payroll)}
//           />
//         </section>

//         <section className="grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
//           {cards.map((card) => (
//             <Link
//               key={card.href}
//               href={card.href}
//               className="rounded-xl border border-[#e4e2da] bg-white p-4 transition hover:border-[#176b5b] hover:shadow-sm sm:p-6"
//             >
//               <p className="text-sm font-semibold text-[#176b5b]">
//                 {card.title}
//               </p>
//               <p className="mt-2 truncate text-2xl font-bold text-gray-900 sm:mt-3 sm:text-3xl">
//                 {card.value}
//               </p>
//               <p className="mt-1 text-xs text-gray-400">{card.helper}</p>
//               <p className="mt-3 text-sm text-gray-600 sm:mt-4">{card.desc}</p>
//               <p className="mt-3 text-sm font-semibold text-[#176b5b] sm:mt-4">
//                 Open →
//               </p>
//             </Link>
//           ))}
//         </section>

//         <p className="text-xs text-gray-400">
//           Attendance is saved in Firebase when you mark a day. History lists
//           every stored record per employee.
//         </p>
//       </main>
//     </div>
//   );
// }

// function Stat({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5">
//       <p className="text-xs text-gray-500 sm:text-sm">{label}</p>
//       <p className="mt-1.5 truncate text-lg font-bold text-gray-900 sm:mt-2 sm:text-2xl">
//         {value}
//       </p>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  getAllEmployees,
  type InteriorEmployee,
} from "@/modules/interior/services/employeeService";
import { History } from "lucide-react";

function formatCurrency(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

export default function InteriorHrmsHubPage() {
  const [employees, setEmployees] = useState<InteriorEmployee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const data = await getAllEmployees();
        if (!cancelled) setEmployees(data);
      } catch (err) {
        console.error(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const total = employees.length;
  const active = employees.filter((e) => {
    const s = (e.status || "Active").toLowerCase();
    return s === "active" || !e.status;
  }).length;
  const onLeave = employees.filter((e) =>
    (e.status || "").toLowerCase().includes("leave")
  ).length;
  const payroll = employees.reduce(
    (sum, e) => sum + (Number(e.salary) || 0),
    0
  );

  const topCards = [
    {
      title: "Employees",
      href: "/interior/hrms/employees",
      desc: "Directory, roles and status",
      value: loading ? "…" : String(total),
      helper: `${active} active`,
    },
    {
      title: "Attendance",
      href: "/interior/hrms/attendance",
      desc: "Daily check-in / check-out",
      value: loading ? "…" : String(active),
      helper: "Mark today or any date",
    },
  ];

  const payrollCard = {
    title: "Payroll",
    href: "/interior/hrms/payroll",
    desc: "Salary overview",
    value: loading ? "…" : formatCurrency(payroll),
    helper: "Monthly salary total",
  };

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
      <div className="border-b border-[#e4e2da] bg-white">
        <div className="mx-auto max-w-[1600px] px-3 py-4 sm:px-5 sm:py-5 lg:px-8">
          <div className="flex items-start justify-between gap-3 sm:items-center">
            <div className="min-w-0 flex-1">
              <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
                HRMS
              </h1>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Interior human resources — employees, attendance and payroll.
                {loading && (
                  <span className="ml-2 text-[#176b5b]">Loading…</span>
                )}
              </p>
            </div>
            <Link
              href="/interior/hrms/attendance-history"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125848] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
            >
              <History size={16} strokeWidth={2.5} />
              <span className="hidden sm:inline">Attendance History</span>
              <span className="sm:hidden">History</span>
            </Link>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[1600px] space-y-4 px-3 py-4 sm:space-y-6 sm:px-5 sm:py-6 lg:px-8">
        <section className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
          <Stat label="Total Staff" value={loading ? "…" : String(total)} />
          <Stat label="Active" value={loading ? "…" : String(active)} />
          <Stat label="On Leave" value={loading ? "…" : String(onLeave)} />
          <Stat
            label="Payroll Base"
            value={loading ? "…" : formatCurrency(payroll)}
          />
        </section>

        {/*
          Mobile: grid-cols-2 → Employees | Attendance, then Payroll centered
          Desktop (md+): 3 equal columns
        */}
        <section className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {topCards.map((card) => (
            <ModuleCard key={card.href} card={card} />
          ))}

          {/* Payroll: spans 2 cols & centers on mobile; normal 1 col on md+ */}
          <div className="col-span-2 flex justify-center md:col-span-1 md:block">
            <div className="w-[calc(50%-0.375rem)] md:w-full">
              <ModuleCard card={payrollCard} />
            </div>
          </div>
        </section>

        <p className="text-xs text-gray-400">
          Attendance is saved in Firebase when you mark a day. History lists
          every stored record per employee.
        </p>
      </main>
    </div>
  );
}

function ModuleCard({
  card,
}: {
  card: {
    title: string;
    href: string;
    desc: string;
    value: string;
    helper: string;
  };
}) {
  return (
    <Link
      href={card.href}
      className="block h-full rounded-xl border border-[#e4e2da] bg-white p-3.5 transition hover:border-[#176b5b] hover:shadow-sm sm:p-6"
    >
      <p className="text-sm font-semibold text-[#176b5b]">{card.title}</p>
      <p className="mt-2 truncate text-xl font-bold text-gray-900 sm:mt-3 sm:text-3xl">
        {card.value}
      </p>
      <p className="mt-1 text-[11px] text-gray-400 sm:text-xs">{card.helper}</p>
      <p className="mt-2 text-xs text-gray-600 sm:mt-4 sm:text-sm">{card.desc}</p>
      <p className="mt-2 text-xs font-semibold text-[#176b5b] sm:mt-4 sm:text-sm">
        Open →
      </p>
    </Link>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-[#e4e2da] bg-white p-3.5 shadow-sm sm:p-5">
      <p className="text-xs text-gray-500 sm:text-sm">{label}</p>
      <p className="mt-1.5 truncate text-lg font-bold text-gray-900 sm:mt-2 sm:text-2xl">
        {value}
      </p>
    </div>
  );
}
