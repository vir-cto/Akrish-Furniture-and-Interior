// import { redirect } from "next/navigation";

// export default function HomePage() {
//   redirect("/interior/dashboard");
// }

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Building2, Sofa, ArrowRight } from "lucide-react";
import { useAuth } from "@/core/auth/AuthContext";

export default function ModuleSwitcherPage() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading, hasModule } = useAuth();

  useEffect(() => {
    if (isLoading) return;

    if (!isAuthenticated) {
      router.replace("/login");
      return;
    }

    // If user has only one module → auto redirect
    const hasInterior = hasModule("interior");
    const hasFurniture = hasModule("furniture");

    if (hasInterior && !hasFurniture) {
      router.replace("/interior/dashboard");
    } else if (hasFurniture && !hasInterior) {
      router.replace("/furniture/dashboard");
    }
    // else stay on this page (admin or both)
  }, [isLoading, isAuthenticated, hasModule, router]);

  if (isLoading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f6f1]">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f6f1] flex items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        <div className="mb-10 text-center">
          <div className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#9a5b18]">
            Collective ERP
          </div>
          <h1 className="text-3xl font-semibold text-[#1a1a1a]">
            Welcome back, {user.name.split(" ")[0]}
          </h1>
          <p className="mt-2 text-[#666]">Select a module to continue</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Interior Card */}
          {hasModule("interior") && (
            <Link
              href="/interior/dashboard"
              className="group relative overflow-hidden rounded-2xl border border-[#e8e4db] bg-white p-8 shadow-sm transition hover:border-[#176b5b]/40 hover:shadow-lg"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#e8f5ef] text-[#176b5b]">
                <Building2 size={28} />
              </div>
              <h2 className="text-xl font-semibold text-[#1a1a1a]">Interior ERP</h2>
              <p className="mt-2 text-sm text-[#666]">
                Project & Service Management
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#176b5b]">
                Open Interior Module
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </div>
            </Link>
          )}

          {/* Furniture Card */}
          {hasModule("furniture") && (
            <Link
              href="/furniture/dashboard"
              className="group relative overflow-hidden rounded-2xl border border-[#e8e4db] bg-white p-8 shadow-sm transition hover:border-[#9a5b18]/40 hover:shadow-lg"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#faf3eb] text-[#9a5b18]">
                <Sofa size={28} />
              </div>
              <h2 className="text-xl font-semibold text-[#1a1a1a]">Furniture ERP</h2>
              <p className="mt-2 text-sm text-[#666]">
                Product & Retail Management
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#9a5b18]">
                Open Furniture Module
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </div>
            </Link>
          )}
        </div>

        <p className="mt-10 text-center text-xs text-[#999]">
          You are signed in as <strong>{user.email}</strong> ({user.role})
        </p>
      </div>
    </main>
  );
}