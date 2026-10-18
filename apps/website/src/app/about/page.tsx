"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f9f8]">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            About Us
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
            About Akrish Furniture
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500">
            We design and curate beautiful spaces with thoughtfully selected furniture and complete interior solutions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Our Story</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Akrish was founded with a simple idea — to make high-quality furniture and interior design accessible, beautiful and practical for every home and workspace.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Today we help customers discover furniture they love and support them with complete interior solutions that transform the way they live and work.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-8 text-white">
            <h3 className="text-xl font-bold">What we offer</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>• Premium furniture collection</li>
              <li>• Residential & commercial interior design</li>
              <li>• Custom design consultation</li>
              <li>• Reliable delivery & support</li>
            </ul>
            <Link
              href="/products"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900"
            >
              Explore Furniture
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}