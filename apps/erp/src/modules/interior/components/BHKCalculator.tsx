"use client";

import { useMemo, useState } from "react";
import {
  Calculator,
  IndianRupee,
  RotateCcw,
  Ruler,
} from "lucide-react";

type BHKType = "1 BHK" | "2 BHK" | "3 BHK" | "4 BHK" | "5 BHK";

interface BHKOption {
  label: BHKType;
  defaultArea: number;
  minArea: number;
  maxArea: number;
}

const BHK_OPTIONS: BHKOption[] = [
  {
    label: "1 BHK",
    defaultArea: 600,
    minArea: 400,
    maxArea: 900,
  },
  {
    label: "2 BHK",
    defaultArea: 1000,
    minArea: 700,
    maxArea: 1400,
  },
  {
    label: "3 BHK",
    defaultArea: 1400,
    minArea: 1000,
    maxArea: 2000,
  },
  {
    label: "4 BHK",
    defaultArea: 1900,
    minArea: 1400,
    maxArea: 2800,
  },
  {
    label: "5 BHK",
    defaultArea: 2500,
    minArea: 1800,
    maxArea: 3500,
  },
];

const INTERIOR_RATES = {
  Basic: 1400,
  Standard: 1900,
  Premium: 2600,
};

type FinishLevel = keyof typeof INTERIOR_RATES;

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function BHKCalculator() {
  const [bhk, setBhk] = useState<BHKType>("2 BHK");
  const [area, setArea] = useState(1000);
  const [finish, setFinish] = useState<FinishLevel>("Standard");

  const selectedOption = useMemo(
    () => BHK_OPTIONS.find((option) => option.label === bhk) ?? BHK_OPTIONS[1],
    [bhk]
  );

  const ratePerSqFt = INTERIOR_RATES[finish];

  const estimatedCost = area * ratePerSqFt;

  const handleBhkChange = (value: BHKType) => {
    const option = BHK_OPTIONS.find((item) => item.label === value);

    setBhk(value);

    if (option) {
      setArea(option.defaultArea);
    }
  };

  const handleReset = () => {
    setBhk("2 BHK");
    setArea(1000);
    setFinish("Standard");
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
            <Calculator size={19} />
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              BHK Interior Calculator
            </h2>
            <p className="text-xs text-slate-500">
              Estimate interior project cost
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
        >
          <RotateCcw size={14} />
          Reset
        </button>
      </div>

      <div className="grid gap-6 p-5 lg:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-5">
          {/* BHK */}
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">
              BHK Type
            </label>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
              {BHK_OPTIONS.map((option) => {
                const active = bhk === option.label;

                return (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => handleBhkChange(option.label)}
                    className={`rounded-lg border px-3 py-2.5 text-sm font-semibold transition ${
                      active
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Area */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="bhk-area"
                className="text-xs font-semibold uppercase tracking-wide text-slate-500"
              >
                Carpet Area
              </label>

              <span className="text-xs font-medium text-slate-500">
                {selectedOption.minArea} - {selectedOption.maxArea} sq.ft
              </span>
            </div>

            <div className="relative">
              <Ruler
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                id="bhk-area"
                type="number"
                min={selectedOption.minArea}
                max={selectedOption.maxArea}
                value={area}
                onChange={(event) =>
                  setArea(Number(event.target.value))
                }
                className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-16 text-sm font-medium text-slate-800 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-100"
              />

              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400">
                sq.ft
              </span>
            </div>

            <input
              type="range"
              min={selectedOption.minArea}
              max={selectedOption.maxArea}
              step={50}
              value={Math.min(
                Math.max(area, selectedOption.minArea),
                selectedOption.maxArea
              )}
              onChange={(event) =>
                setArea(Number(event.target.value))
              }
              className="mt-3 w-full accent-slate-900"
            />
          </div>

          {/* Finish */}
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">
              Finish Level
            </label>

            <div className="grid grid-cols-3 gap-2">
              {(Object.keys(INTERIOR_RATES) as FinishLevel[]).map(
                (level) => {
                  const active = finish === level;

                  return (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setFinish(level)}
                      className={`rounded-lg border px-3 py-3 text-left transition ${
                        active
                          ? "border-slate-900 bg-slate-900 text-white"
                          : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <span className="block text-xs font-semibold">
                        {level}
                      </span>

                      <span
                        className={`mt-1 block text-[10px] ${
                          active
                            ? "text-slate-300"
                            : "text-slate-400"
                        }`}
                      >
                        {formatCurrency(INTERIOR_RATES[level])}/sq.ft
                      </span>
                    </button>
                  );
                }
              )}
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="flex flex-col rounded-2xl bg-slate-900 p-5 text-white">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
              <IndianRupee size={18} />
            </div>

            <div>
              <p className="text-xs font-medium text-slate-300">
                Estimated Interior Cost
              </p>
              <p className="text-sm font-semibold">
                {bhk} • {area.toLocaleString("en-IN")} sq.ft
              </p>
            </div>
          </div>

          <div className="my-auto py-8">
            <p className="text-xs uppercase tracking-wider text-slate-400">
              Approximate Cost
            </p>

            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              {formatCurrency(estimatedCost)}
            </p>

            <p className="mt-2 text-xs text-slate-400">
              Based on {formatCurrency(ratePerSqFt)} per sq.ft for{" "}
              {finish.toLowerCase()} finish.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
            <div>
              <p className="text-[10px] uppercase tracking-wide text-slate-400">
                Area
              </p>
              <p className="mt-1 text-sm font-semibold">
                {area.toLocaleString("en-IN")} sq.ft
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wide text-slate-400">
                Rate
              </p>
              <p className="mt-1 text-sm font-semibold">
                {formatCurrency(ratePerSqFt)}/sq.ft
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="border-t border-slate-100 px-5 py-3">
        <p className="text-[11px] leading-5 text-slate-400">
          This calculator provides an indicative estimate. Final project
          pricing may vary based on design, materials, site conditions,
          furniture requirements, and selected specifications.
        </p>
      </div>
    </section>
  );
}