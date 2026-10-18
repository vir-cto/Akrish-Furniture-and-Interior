"use client";

import { useEffect, useMemo, useState } from "react";
import {
  getAllPayments,
  type FurniturePayment,
} from "@/modules/furniture/services/paymentService";

type Row = {
  id: string;
  paymentNo: string;
  orderNo: string;
  customer: string;
  phone: string;
  amount: number;
  paidAmount: number;
  paymentMethod: string;
  status: string;
  paymentDate: string;
  reference: string;
  notes: string;
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

// function isOnlinePayment(p: FurniturePayment): boolean {
//   return (
//     p.source === "Online" ||
//     p.paymentMethod === "Cashfree" ||
//     !!p.cfPaymentId ||
//     !!p.cfOrderId
//   );
// }

function isOnlinePayment(p: FurniturePayment): boolean {
  const anyP = p as FurniturePayment & {
    source?: string;
    cfPaymentId?: string;
    cfOrderId?: string;
  };

  return (
    anyP.source === "Online" ||
    anyP.paymentMethod === "Cashfree" ||
    !!anyP.cfPaymentId ||
    !!anyP.cfOrderId
  );
}

function mapToUi(p: FurniturePayment): Row {
  return {
    id: p.id,
    paymentNo: p.paymentNo || `PAY-${p.id.slice(0, 6).toUpperCase()}`,
    orderNo: p.orderNo || "—",
    customer: p.customer || p.customerName || "Unknown",
    phone: p.phone || "—",
    amount: Number(p.amount ?? 0) || 0,
    paidAmount: Number(p.paidAmount ?? p.amount ?? 0) || 0,
    paymentMethod: p.paymentMethod || "Cashfree",
    status: p.status === "Received" || p.status === "Paid" ? "Received" : p.status || "Pending",
    paymentDate: p.paymentDate || "—",
    reference: p.reference || p.cfPaymentId || "—",
    notes: p.notes || "",
  };
}

export default function OnlinePaymentsPage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Row | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const data = await getAllPayments();
        if (cancelled) return;
        setRows(data.filter(isOnlinePayment).map(mapToUi));
      } catch (err) {
        console.error("Failed to load online payments:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return rows;
    return rows.filter(
      (r) =>
        r.paymentNo.toLowerCase().includes(q) ||
        r.orderNo.toLowerCase().includes(q) ||
        r.customer.toLowerCase().includes(q) ||
        r.phone.includes(q) ||
        r.reference.toLowerCase().includes(q)
    );
  }, [rows, search]);

  const totalReceived = filtered.reduce((s, r) => s + r.paidAmount, 0);

  return (
    <div className="min-h-screen bg-[#f7f9f8] text-slate-800">
      <main className="mx-auto max-w-[1200px] px-5 py-7 lg:px-8">
        <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-1 text-xs font-medium text-slate-400">
              Furniture / Payments
            </p>
            <h1 className="text-2xl font-semibold tracking-tight">
              Online Payments
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Payments received from the website (Cashfree / checkout). Manual
              collections stay under Payments.
            </p>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-medium text-slate-400">Online records</p>
            <p className="mt-2 text-2xl font-semibold">
              {loading ? "…" : filtered.length}
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:col-span-2">
            <p className="text-xs font-medium text-slate-400">
              Total received (filtered)
            </p>
            <p className="mt-2 text-2xl font-semibold text-[#176b57]">
              {loading ? "…" : formatCurrency(totalReceived)}
            </p>
          </div>
        </div>

        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-4">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search payment, order, customer, reference…"
              className="h-11 w-full max-w-md rounded-lg border border-slate-200 px-4 text-sm outline-none focus:border-[#176b57] focus:ring-2 focus:ring-[#176b57]/15"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50 text-left">
                  <th className="px-5 py-3 text-xs font-semibold uppercase text-slate-400">
                    Payment
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase text-slate-400">
                    Customer
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase text-slate-400">
                    Order
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase text-slate-400">
                    Amount
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase text-slate-400">
                    Method
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase text-slate-400">
                    Status
                  </th>
                  <th className="px-5 py-3 text-right text-xs font-semibold uppercase text-slate-400">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-5 py-14 text-center text-sm text-slate-400"
                    >
                      Loading online payments…
                    </td>
                  </tr>
                ) : filtered.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-5 py-14 text-center text-sm text-slate-500"
                    >
                      No website payments yet. They appear here when customers
                      pay online (Cashfree webhook).
                    </td>
                  </tr>
                ) : (
                  filtered.map((row) => (
                    <tr
                      key={row.id}
                      className="border-b border-slate-50 hover:bg-slate-50/80"
                    >
                      <td className="px-5 py-4">
                        <p className="text-sm font-semibold">{row.paymentNo}</p>
                        <p className="mt-0.5 text-xs text-slate-400">
                          {row.paymentDate}
                        </p>
                      </td>
                      <td className="px-5 py-4">
                        <p className="text-sm font-medium">{row.customer}</p>
                        <p className="mt-0.5 text-xs text-slate-400">
                          {row.phone}
                        </p>
                      </td>
                      <td className="px-5 py-4 text-sm font-medium text-[#176b57]">
                        {row.orderNo}
                      </td>
                      <td className="px-5 py-4 text-sm font-semibold">
                        {formatCurrency(row.paidAmount || row.amount)}
                      </td>
                      <td className="px-5 py-4 text-sm text-slate-600">
                        {row.paymentMethod}
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
                          {row.status}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <button
                          type="button"
                          onClick={() => setSelected(row)}
                          className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:border-[#176b57] hover:text-[#176b57]"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <div>
                <p className="text-xs font-semibold uppercase text-indigo-600">
                  Online · Website
                </p>
                <h2 className="mt-1 text-lg font-semibold">
                  {selected.paymentNo}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="text-xl text-slate-400"
              >
                ×
              </button>
            </div>
            <div className="space-y-3 px-5 py-5 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-slate-500">Customer</span>
                <span className="font-medium text-right">{selected.customer}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-slate-500">Phone</span>
                <span className="font-medium">{selected.phone}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-slate-500">Order</span>
                <span className="font-medium text-[#176b57]">
                  {selected.orderNo}
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-slate-500">Amount</span>
                <span className="font-semibold">
                  {formatCurrency(selected.paidAmount || selected.amount)}
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-slate-500">Method</span>
                <span className="font-medium">{selected.paymentMethod}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-slate-500">Reference</span>
                <span className="font-medium text-right break-all">
                  {selected.reference}
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-slate-500">Date</span>
                <span className="font-medium">{selected.paymentDate}</span>
              </div>
              {selected.notes && (
                <div className="rounded-lg bg-slate-50 p-3 text-slate-600">
                  {selected.notes}
                </div>
              )}
            </div>
            <div className="flex justify-end border-t border-slate-100 px-5 py-4">
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}