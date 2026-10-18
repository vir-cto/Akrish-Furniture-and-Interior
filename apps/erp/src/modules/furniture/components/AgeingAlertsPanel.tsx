"use client";

import { AlertTriangle, ArrowRight, Clock3, Package } from "lucide-react";

export interface AgeingItem {
  id: string;
  productName: string;
  category?: string;
  quantity: number;
  daysInStock: number;
  value?: number;
}

interface AgeingAlertsPanelProps {
  items?: AgeingItem[];
  onViewItem?: (item: AgeingItem) => void;
  onViewAll?: () => void;
  thresholdDays?: number;
  title?: string;
  className?: string;
}

const defaultItems: AgeingItem[] = [
  {
    id: "AGE-001",
    productName: "Classic Wooden Sofa",
    category: "Sofa",
    quantity: 3,
    daysInStock: 96,
    value: 84000,
  },
  {
    id: "AGE-002",
    productName: "Premium Dining Table",
    category: "Dining",
    quantity: 2,
    daysInStock: 74,
    value: 56000,
  },
  {
    id: "AGE-003",
    productName: "Modern Wardrobe",
    category: "Storage",
    quantity: 1,
    daysInStock: 61,
    value: 32000,
  },
];

function getAgeingLevel(days: number) {
  if (days >= 90) {
    return {
      label: "Critical",
      badge: "bg-red-50 text-red-700 ring-1 ring-red-200",
      icon: "text-red-500",
    };
  }

  if (days >= 60) {
    return {
      label: "High",
      badge: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
      icon: "text-amber-500",
    };
  }

  return {
    label: "Ageing",
    badge: "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
    icon: "text-blue-500",
  };
}

function formatCurrency(value?: number) {
  if (value === undefined || value === null) return "—";

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function AgeingAlertsPanel({
  items = defaultItems,
  onViewItem,
  onViewAll,
  thresholdDays = 60,
  title = "Ageing Stock Alerts",
  className = "",
}: AgeingAlertsPanelProps) {
  const ageingItems = items
    .filter((item) => item.daysInStock >= thresholdDays)
    .sort((a, b) => b.daysInStock - a.daysInStock);

  const criticalCount = ageingItems.filter(
    (item) => item.daysInStock >= 90
  ).length;

  return (
    <section
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white ${className}`}
    >
      {/* Header */}
      <div className="flex flex-col gap-3 border-b border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
            <AlertTriangle size={19} />
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              {title}
            </h2>

            <p className="text-xs text-slate-500">
              Products held in stock for {thresholdDays}+ days
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {criticalCount > 0 && (
            <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700">
              {criticalCount} critical
            </span>
          )}

          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
            {ageingItems.length} items
          </span>
        </div>
      </div>

      {/* Content */}
      {ageingItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center px-5 py-10 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <Package size={21} />
          </div>

          <p className="mt-3 text-sm font-semibold text-slate-800">
            No ageing stock
          </p>

          <p className="mt-1 max-w-sm text-xs leading-5 text-slate-500">
            There are currently no products above the configured ageing
            threshold.
          </p>
        </div>
      ) : (
        <div className="divide-y divide-slate-100">
          {ageingItems.map((item) => {
            const level = getAgeingLevel(item.daysInStock);

            return (
              <div
                key={item.id}
                className="flex flex-col gap-4 px-5 py-4 transition hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between"
              >
                {/* Product */}
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
                    <Package size={18} />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-800">
                      {item.productName}
                    </p>

                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                      {item.category && (
                        <>
                          <span>{item.category}</span>
                          <span>•</span>
                        </>
                      )}

                      <span>
                        Qty:{" "}
                        <span className="font-medium text-slate-700">
                          {item.quantity}
                        </span>
                      </span>

                      {item.value !== undefined && (
                        <>
                          <span>•</span>
                          <span>{formatCurrency(item.value)}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Age + action */}
                <div className="flex items-center justify-between gap-4 sm:justify-end">
                  <div className="text-left sm:text-right">
                    <div className="flex items-center gap-1.5 sm:justify-end">
                      <Clock3
                        size={14}
                        className={level.icon}
                      />

                      <span className="text-sm font-bold text-slate-800">
                        {item.daysInStock} days
                      </span>
                    </div>

                    <span
                      className={`mt-1 inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold ${level.badge}`}
                    >
                      {level.label}
                    </span>
                  </div>

                  {onViewItem && (
                    <button
                      type="button"
                      onClick={() => onViewItem(item)}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-800"
                      title="View item"
                    >
                      <ArrowRight size={16} />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Footer */}
      {ageingItems.length > 0 && onViewAll && (
        <div className="border-t border-slate-100 px-5 py-3">
          <button
            type="button"
            onClick={onViewAll}
            className="flex w-full items-center justify-center gap-2 rounded-lg py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
          >
            View all ageing stock
            <ArrowRight size={14} />
          </button>
        </div>
      )}
    </section>
  );
}