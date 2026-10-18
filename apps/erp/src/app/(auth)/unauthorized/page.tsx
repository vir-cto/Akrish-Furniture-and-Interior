"use client";

import { useRouter } from "next/navigation";

export default function UnauthorizedPage() {
  const router = useRouter();

  const handleGoToDashboard = () => {
    router.push("/");
  };

  return (
    <main className="min-h-screen bg-[#f7f6f1] flex items-center justify-center p-4">
      <div className="w-full max-w-[520px]">
        {/* Card */}
        <div className="overflow-hidden rounded-2xl border border-[#e7e3d8] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          {/* Top Brand Section */}
          <div className="border-b border-[#eeeae1] bg-[#faf9f5] px-8 py-7 text-center">
            {/* Logo */}
            <div className="text-[28px] font-bold tracking-tight text-[#9a5b18]">
              Akrish
            </div>

            <div className="mt-0.5 text-[9px] uppercase tracking-[3px] text-[#777]">
              Furniture and Interior
            </div>
          </div>

          {/* Main Content */}
          <div className="px-8 py-12 text-center sm:px-12">
            {/* Lock Icon */}
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="5"
                    y="10"
                    width="14"
                    height="10"
                    rx="2"
                    stroke="#dc2626"
                    strokeWidth="1.8"
                  />

                  <path
                    d="M8 10V7.5C8 5.57 9.57 4 11.5 4H12.5C14.43 4 16 5.57 16 7.5V10"
                    stroke="#dc2626"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M12 14V16"
                    stroke="#dc2626"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-2xl font-semibold text-[#222]">
              Access Restricted
            </h1>

            <p className="mx-auto mt-3 max-w-[350px] text-sm leading-6 text-[#777]">
              You do not have permission to access this module.
              Please contact your administrator.
            </p>

            {/* Button */}
            <button
              type="button"
              onClick={handleGoToDashboard}
              className="mt-8 inline-flex h-11 items-center justify-center rounded-lg border border-[#d8d8d8] bg-white px-6 text-sm font-semibold text-[#333] transition hover:bg-[#f7f7f7] hover:border-[#c8c8c8]"
            >
              Go to Dashboard
            </button>
          </div>

          {/* Footer */}
          <div className="border-t border-[#eeeae1] bg-[#faf9f5] px-6 py-4 text-center">
            <p className="text-xs text-[#999]">
              Collective ERP
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}