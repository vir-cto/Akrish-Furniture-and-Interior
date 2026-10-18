"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  IndianRupee,
  Loader2,
  WalletCards,
  X,
} from "lucide-react";

export interface PayrollEmployee {
  id: string;
  name: string;
  employeeId?: string;
  designation?: string;
  department?: string;
  monthlySalary: number;
}

export interface PayrollRecord {
  employeeId: string;
  month: string;
  basicSalary: number;
  allowances: number;
  deductions: number;
  netSalary: number;
  status: "pending" | "processed" | "paid";
  paymentDate?: string;
}

interface PayrollModalProps {
  open: boolean;
  onClose: () => void;
  employee?: PayrollEmployee | null;
  payroll?: PayrollRecord | null;
  onSave?: (record: PayrollRecord) => void | Promise<void>;
  month?: string;
}

type PayrollStatus = PayrollRecord["status"];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function getCurrentMonth() {
  const date = new Date();

  return `${date.getFullYear()}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}`;
}

function getToday() {
  return new Date().toISOString().split("T")[0];
}

function formatMonth(month: string) {
  const date = new Date(`${month}-01T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return month;
  }

  return date.toLocaleDateString("en-IN", {
    month: "long",
    year: "numeric",
  });
}

function normalizeNumber(value: string) {
  const parsed = Number(value);

  return Number.isFinite(parsed) ? parsed : 0;
}

export default function PayrollModal({
  open,
  onClose,
  employee,
  payroll,
  onSave,
  month,
}: PayrollModalProps) {
  const [payrollMonth, setPayrollMonth] = useState(
    month || getCurrentMonth()
  );
  const [basicSalary, setBasicSalary] = useState("");
  const [allowances, setAllowances] = useState("");
  const [deductions, setDeductions] = useState("");
  const [status, setStatus] =
    useState<PayrollStatus>("pending");
  const [paymentDate, setPaymentDate] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;

    const salary =
      payroll?.basicSalary ??
      employee?.monthlySalary ??
      0;

    setPayrollMonth(
      payroll?.month || month || getCurrentMonth()
    );
    setBasicSalary(String(salary));
    setAllowances(String(payroll?.allowances ?? 0));
    setDeductions(String(payroll?.deductions ?? 0));
    setStatus(payroll?.status ?? "pending");
    setPaymentDate(
      payroll?.paymentDate || getToday()
    );
    setError("");
    setSaving(false);
  }, [open, payroll, employee, month]);

  const calculated = useMemo(() => {
    const basic = Math.max(0, normalizeNumber(basicSalary));
    const allowance = Math.max(
      0,
      normalizeNumber(allowances)
    );
    const deduction = Math.max(
      0,
      normalizeNumber(deductions)
    );

    const gross = basic + allowance;
    const net = Math.max(0, gross - deduction);

    return {
      basic,
      allowance,
      deduction,
      gross,
      net,
    };
  }, [basicSalary, allowances, deductions]);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!employee) {
      setError("Employee details are required.");
      return;
    }

    if (!payrollMonth) {
      setError("Please select a payroll month.");
      return;
    }

    if (calculated.basic <= 0) {
      setError("Basic salary must be greater than zero.");
      return;
    }

    if (calculated.deduction > calculated.gross) {
      setError(
        "Deductions cannot be greater than the gross salary."
      );
      return;
    }

    setError("");
    setSaving(true);

    const record: PayrollRecord = {
      employeeId: employee.id,
      month: payrollMonth,
      basicSalary: calculated.basic,
      allowances: calculated.allowance,
      deductions: calculated.deduction,
      netSalary: calculated.net,
      status,
      paymentDate:
        status === "paid" ? paymentDate || getToday() : undefined,
    };

    try {
      await onSave?.(record);
      onClose();
    } catch (saveError) {
      console.error("Failed to save payroll:", saveError);
      setError("Unable to save payroll. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="payroll-modal-title"
    >
      <button
        type="button"
        aria-label="Close payroll modal"
        className="absolute inset-0 cursor-default"
        onClick={saving ? undefined : onClose}
      />

      <div className="relative z-10 flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
              <WalletCards size={19} />
            </div>

            <div>
              <h2
                id="payroll-modal-title"
                className="text-lg font-semibold text-slate-900"
              >
                {payroll
                  ? "Update Payroll"
                  : "Process Payroll"}
              </h2>

              <p className="mt-0.5 text-xs text-slate-500">
                {employee
                  ? employee.name
                  : "Employee payroll details"}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={saving}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 disabled:opacity-40"
            aria-label="Close"
          >
            <X size={19} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="min-h-0 overflow-y-auto"
        >
          <div className="space-y-6 p-5 sm:p-6">
            {/* Employee summary */}
            {employee && (
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                      Employee
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      {employee.name}
                    </p>
                    {employee.employeeId && (
                      <p className="text-xs text-slate-500">
                        {employee.employeeId}
                      </p>
                    )}
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                      Designation
                    </p>
                    <p className="mt-1 text-sm text-slate-700">
                      {employee.designation || "—"}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                      Department
                    </p>
                    <p className="mt-1 text-sm text-slate-700">
                      {employee.department || "—"}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Month and status */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="payroll-month"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  Payroll Month
                </label>

                <div className="relative">
                  <CalendarDays
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="payroll-month"
                    type="month"
                    value={payrollMonth}
                    onChange={(event) =>
                      setPayrollMonth(event.target.value)
                    }
                    className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-800 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-100"
                  />
                </div>

                <p className="mt-1 text-[11px] text-slate-400">
                  {formatMonth(payrollMonth)}
                </p>
              </div>

              <div>
                <label
                  htmlFor="payroll-status"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  Payment Status
                </label>

                <select
                  id="payroll-status"
                  value={status}
                  onChange={(event) =>
                    setStatus(
                      event.target.value as PayrollStatus
                    )
                  }
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-100"
                >
                  <option value="pending">Pending</option>
                  <option value="processed">Processed</option>
                  <option value="paid">Paid</option>
                </select>
              </div>
            </div>

            {/* Salary */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <IndianRupee
                  size={16}
                  className="text-slate-500"
                />
                <h3 className="text-sm font-semibold text-slate-800">
                  Salary Details
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="basic-salary"
                    className="mb-2 block text-xs font-medium text-slate-600"
                  >
                    Basic Salary
                  </label>

                  <input
                    id="basic-salary"
                    type="number"
                    min="0"
                    step="1"
                    value={basicSalary}
                    onChange={(event) =>
                      setBasicSalary(event.target.value)
                    }
                    placeholder="0"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="allowances"
                    className="mb-2 block text-xs font-medium text-slate-600"
                  >
                    Allowances
                  </label>

                  <input
                    id="allowances"
                    type="number"
                    min="0"
                    step="1"
                    value={allowances}
                    onChange={(event) =>
                      setAllowances(event.target.value)
                    }
                    placeholder="0"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="deductions"
                    className="mb-2 block text-xs font-medium text-slate-600"
                  >
                    Deductions
                  </label>

                  <input
                    id="deductions"
                    type="number"
                    min="0"
                    step="1"
                    value={deductions}
                    onChange={(event) =>
                      setDeductions(event.target.value)
                    }
                    placeholder="0"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-100"
                  />
                </div>
              </div>
            </div>

            {/* Calculation */}
            <div className="rounded-xl border border-slate-200 bg-white">
              <div className="grid grid-cols-2 divide-x divide-slate-100 sm:grid-cols-4">
                <div className="p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                    Basic
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {formatCurrency(calculated.basic)}
                  </p>
                </div>

                <div className="p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                    Allowances
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {formatCurrency(calculated.allowance)}
                  </p>
                </div>

                <div className="p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                    Deductions
                  </p>
                  <p className="mt-1 text-sm font-semibold text-red-600">
                    -{formatCurrency(calculated.deduction)}
                  </p>
                </div>

                <div className="bg-slate-900 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                    Net Salary
                  </p>
                  <p className="mt-1 text-base font-bold text-white">
                    {formatCurrency(calculated.net)}
                  </p>
                </div>
              </div>
            </div>

            {/* Payment date */}
            {status === "paid" && (
              <div>
                <label
                  htmlFor="payment-date"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  Payment Date
                </label>

                <input
                  id="payment-date"
                  type="date"
                  value={paymentDate}
                  onChange={(event) =>
                    setPaymentDate(event.target.value)
                  }
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-100 sm:max-w-xs"
                />
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-xs font-medium text-red-700">
                {error}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex flex-col-reverse gap-2 border-t border-slate-100 bg-slate-50 px-5 py-4 sm:flex-row sm:justify-end sm:px-6">
            <button
              type="button"
              onClick={onClose}
              disabled={saving}
              className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={saving || !employee}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {saving ? (
                <>
                  <Loader2
                    size={16}
                    className="animate-spin"
                  />
                  Saving...
                </>
              ) : (
                <>
                  <CheckCircle2 size={16} />
                  {payroll ? "Update Payroll" : "Save Payroll"}
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}