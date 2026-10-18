// "use client";

// import Link from "next/link";
// import { ArrowRight, Check, Home, Palette, Ruler, Sofa } from "lucide-react";

// const services = [
//   {
//     title: "Residential Interior",
//     description: "Complete interior design solutions for homes, apartments and villas.",
//     icon: Home,
//   },
//   {
//     title: "Commercial Spaces",
//     description: "Modern interior solutions for offices, showrooms and commercial projects.",
//     icon: Ruler,
//   },
//   {
//     title: "Furniture Curation",
//     description: "Carefully selected furniture pieces that match your space and style.",
//     icon: Sofa,
//   },
//   {
//     title: "Custom Design",
//     description: "Bespoke design services tailored to your unique requirements.",
//     icon: Palette,
//   },
// ];

// export default function ServicesPage() {
//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <section className="border-b border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
//           <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//             Our Services
//           </p>
//           <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
//             Interior & Furniture Services
//           </h1>
//           <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500">
//             From complete interior design to premium furniture selection, we help you create spaces that feel beautiful and functional.
//           </p>
//         </div>
//       </section>

//       <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
//         <div className="grid gap-6 sm:grid-cols-2">
//           {services.map((service) => {
//             const Icon = service.icon;
//             return (
//               <div
//                 key={service.title}
//                 className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md"
//               >
//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8f5ef] text-[#176b5b]">
//                   <Icon size={22} />
//                 </div>
//                 <h2 className="mt-5 text-lg font-bold text-slate-900">{service.title}</h2>
//                 <p className="mt-2 text-sm leading-6 text-slate-500">{service.description}</p>
//               </div>
//             );
//           })}
//         </div>

//         <div className="mt-12 rounded-2xl bg-slate-900 px-8 py-10 text-center text-white">
//           <h2 className="text-2xl font-bold">Ready to transform your space?</h2>
//           <p className="mt-3 text-sm text-slate-300">
//             Explore our furniture collection or get in touch with our team.
//           </p>
//           <div className="mt-6 flex flex-wrap justify-center gap-3">
//             <Link
//               href="/products"
//               className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900"
//             >
//               Shop Furniture
//               <ArrowRight size={16} />
//             </Link>
//             <Link
//               href="/contact"
//               className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


"use client";

import Link from "next/link";
import {
  ArrowRight,
  Armchair,
  BedDouble,
  Lamp,
  Sofa,
  Table,
  Warehouse,
} from "lucide-react";

const services = [
  {
    title: "Living Room",
    description:
      "Sofas, sectionals, coffee tables and accent pieces for everyday comfort.",
    icon: Sofa,
  },
  {
    title: "Dining",
    description:
      "Dining tables, chairs and storage that bring the family together.",
    icon: Table,
  },
  {
    title: "Bedroom",
    description:
      "Beds, wardrobes and nightstands designed for rest and calm spaces.",
    icon: BedDouble,
  },
  {
    title: "Office & Study",
    description:
      "Desks, chairs and storage for productive work from home or office.",
    icon: Armchair,
  },
  {
    title: "Lighting & Decor",
    description:
      "Lamps and finishing touches that complete your furniture setup.",
    icon: Lamp,
  },
  {
    title: "Bulk & Custom Orders",
    description:
      "Large quantities and made-to-order pieces for homes and projects.",
    icon: Warehouse,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f7f9f8]">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
            Our Services
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-4xl">
            Furniture services
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:mt-4">
            Premium furniture for every room — curated collections, quality
            materials, and options that fit modern homes and workspaces.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* 2 per row on mobile, 3 on large screens */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-xl border border-slate-200 bg-white p-3.5 transition hover:shadow-md sm:rounded-2xl sm:p-6"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e8f5ef] text-[#176b5b] sm:h-12 sm:w-12 sm:rounded-xl">
                  <Icon size={18} className="sm:hidden" />
                  <Icon size={22} className="hidden sm:block" />
                </div>
                <h2 className="mt-3 text-sm font-bold leading-snug text-slate-900 sm:mt-5 sm:text-lg">
                  {service.title}
                </h2>
                <p className="mt-1.5 text-[11px] leading-5 text-slate-500 sm:mt-2 sm:text-sm sm:leading-6">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-xl bg-slate-900 px-5 py-8 text-center text-white sm:mt-12 sm:rounded-2xl sm:px-8 sm:py-10">
          <h2 className="text-xl font-bold sm:text-2xl">
            Ready to furnish your space?
          </h2>
          <p className="mt-2 text-sm text-slate-300 sm:mt-3">
            Browse our collection or talk to us about bulk and custom orders.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2.5 sm:mt-6 sm:gap-3">
            <Link
              href="/products"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900"
            >
              Shop Furniture
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
