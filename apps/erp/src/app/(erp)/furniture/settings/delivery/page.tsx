"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  getDeliverySettings,
  saveDeliverySettings,
  DEFAULT_DELIVERY_SETTINGS,
  type DeliverySettings,
} from "@/modules/furniture/services/deliverySettingsService";

export default function DeliverySettingsPage() {
  const [form, setForm] = useState<DeliverySettings>({
    ...DEFAULT_DELIVERY_SETTINGS,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      try {
        const s = await getDeliverySettings();
        if (!cancelled) setForm(s);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");
    try {
      await saveDeliverySettings(form);
      setMessage("Delivery settings saved. Website checkout will use these values.");
    } catch (err) {
      console.error(err);
      setMessage("Failed to save. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f7f4] px-4 py-6 sm:px-8">
      <div className="mx-auto max-w-xl">
        <p className="text-xs font-medium text-[#176b5b]">Furniture / Settings</p>
        <h1 className="mt-1 text-2xl font-bold text-slate-900">Delivery</h1>
        <p className="mt-1 text-sm text-slate-500">
          These values drive shipping charge and default lead time on website checkout.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-6 space-y-4 rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm sm:p-6"
        >
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Delivery charge (₹)
            </label>
            <input
              type="number"
              min={0}
              required
              value={form.shippingCharge}
              onChange={(e) =>
                setForm((f) => ({
                  ...f,
                  shippingCharge: Number(e.target.value) || 0,
                }))
              }
              className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b5b]"
            />
            <p className="mt-1 text-xs text-slate-400">
              Applied when order is below free-shipping minimum.
            </p>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Free shipping minimum (₹)
            </label>
            <input
              type="number"
              min={0}
              required
              value={form.freeShippingMin}
              onChange={(e) =>
                setForm((f) => ({
                  ...f,
                  freeShippingMin: Number(e.target.value) || 0,
                }))
              }
              className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b5b]"
            />
            <p className="mt-1 text-xs text-slate-400">
              Set to 0 to never offer free shipping.
            </p>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Default lead time (days)
            </label>
            <input
              type="number"
              min={1}
              max={365}
              required
              value={form.defaultLeadTimeDays}
              onChange={(e) =>
                setForm((f) => ({
                  ...f,
                  defaultLeadTimeDays: Number(e.target.value) || 7,
                }))
              }
              className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#176b5b]"
            />
            <p className="mt-1 text-xs text-slate-400">
              Used when a product has no lead time. Product lead time still wins when set.
            </p>
          </div>

          {message && (
            <p className="rounded-lg bg-[#eef7f4] px-3 py-2 text-sm text-[#176b5b]">
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={saving}
            className="h-11 w-full rounded-lg bg-[#176b5b] text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
          >
            {saving ? "Saving…" : "Save delivery settings"}
          </button>
        </form>
      </div>
    </div>
  );
}
