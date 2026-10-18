"use client";

import type { ReactNode } from "react";

export type StatusVariant =
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "neutral"
  | "primary"
  | "pending"
  | "active"
  | "inactive"
  | "completed"
  | "cancelled"
  | "draft";

interface StatusBadgeProps {
  status?: string;
  label?: string;
  variant?: StatusVariant;
  size?: "sm" | "md";
  dot?: boolean;
  icon?: ReactNode;
  className?: string;
}

const variantStyles: Record<
  StatusVariant,
  {
    badge: string;
    dot: string;
  }
> = {
  success: {
    badge: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
    dot: "bg-emerald-500",
  },
  active: {
    badge: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
    dot: "bg-emerald-500",
  },
  completed: {
    badge: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
    dot: "bg-emerald-500",
  },
  warning: {
    badge: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
    dot: "bg-amber-500",
  },
  pending: {
    badge: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
    dot: "bg-amber-500",
  },
  danger: {
    badge: "bg-red-50 text-red-700 ring-1 ring-red-200",
    dot: "bg-red-500",
  },
  cancelled: {
    badge: "bg-red-50 text-red-700 ring-1 ring-red-200",
    dot: "bg-red-500",
  },
  info: {
    badge: "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
    dot: "bg-blue-500",
  },
  primary: {
    badge: "bg-slate-100 text-slate-700 ring-1 ring-slate-200",
    dot: "bg-slate-600",
  },
  neutral: {
    badge: "bg-slate-100 text-slate-600 ring-1 ring-slate-200",
    dot: "bg-slate-400",
  },
  inactive: {
    badge: "bg-slate-100 text-slate-500 ring-1 ring-slate-200",
    dot: "bg-slate-400",
  },
  draft: {
    badge: "bg-slate-100 text-slate-600 ring-1 ring-slate-200",
    dot: "bg-slate-400",
  },
};

function normalizeStatus(status: string): string {
  return status.trim().toLowerCase().replace(/[_-]+/g, " ");
}

function getStatusVariant(status?: string): StatusVariant {
  if (!status) return "neutral";

  const normalized = normalizeStatus(status);

  switch (normalized) {
    case "active":
    case "approved":
    case "paid":
    case "success":
    case "successful":
    case "available":
    case "in stock":
    case "completed":
    case "complete":
    case "delivered":
    case "confirmed":
    case "accepted":
      return "success";

    case "pending":
    case "pending payment":
    case "partially paid":
    case "in progress":
    case "processing":
    case "waiting":
    case "on hold":
    case "low stock":
      return "warning";

    case "cancelled":
    case "canceled":
    case "rejected":
    case "failed":
    case "overdue":
    case "inactive":
    case "blocked":
    case "unpaid":
    case "out of stock":
      return "danger";

    case "new":
    case "info":
    case "in review":
    case "review":
    case "scheduled":
    case "assigned":
      return "info";

    case "draft":
    case "inactive":
    case "closed":
    case "archived":
      return "neutral";

    default:
      return "primary";
  }
}

function formatStatus(status: string): string {
  return status
    .trim()
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function StatusBadge({
  status,
  label,
  variant,
  size = "md",
  dot = true,
  icon,
  className = "",
}: StatusBadgeProps) {
  const displayText = label || (status ? formatStatus(status) : "Unknown");
  const resolvedVariant = variant || getStatusVariant(status);
  const styles = variantStyles[resolvedVariant];

  const sizeClass =
    size === "sm"
      ? "px-2 py-0.5 text-[10px]"
      : "px-2.5 py-1 text-xs";

  return (
    <span
      className={`inline-flex w-fit items-center gap-1.5 rounded-full font-semibold whitespace-nowrap ${sizeClass} ${styles.badge} ${className}`}
    >
      {icon ? (
        <span className="flex shrink-0 items-center">{icon}</span>
      ) : dot ? (
        <span
          className={`h-1.5 w-1.5 shrink-0 rounded-full ${styles.dot}`}
        />
      ) : null}

      <span>{displayText}</span>
    </span>
  );
}

interface StatusDotProps {
  status?: string;
  variant?: StatusVariant;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function StatusDot({
  status,
  variant,
  size = "md",
  className = "",
}: StatusDotProps) {
  const resolvedVariant = variant || getStatusVariant(status);
  const styles = variantStyles[resolvedVariant];

  const sizeClass = {
    sm: "h-1.5 w-1.5",
    md: "h-2 w-2",
    lg: "h-2.5 w-2.5",
  }[size];

  return (
    <span
      aria-label={status}
      title={status}
      className={`inline-block shrink-0 rounded-full ${sizeClass} ${styles.dot} ${className}`}
    />
  );
}

interface StatusBadgeGroupProps {
  children: ReactNode;
  className?: string;
}

export function StatusBadgeGroup({
  children,
  className = "",
}: StatusBadgeGroupProps) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {children}
    </div>
  );
}

export function PaymentStatusBadge({
  status,
  className = "",
}: {
  status?: string;
  className?: string;
}) {
  return (
    <StatusBadge
      status={status}
      label={status || "Pending"}
      className={className}
    />
  );
}

export function ProjectStatusBadge({
  status,
  className = "",
}: {
  status?: string;
  className?: string;
}) {
  return (
    <StatusBadge
      status={status}
      label={status || "Draft"}
      className={className}
    />
  );
}

export function OrderStatusBadge({
  status,
  className = "",
}: {
  status?: string;
  className?: string;
}) {
  return (
    <StatusBadge
      status={status}
      label={status || "New"}
      className={className}
    />
  );
}

export function ActiveStatusBadge({
  active,
  className = "",
}: {
  active: boolean;
  className?: string;
}) {
  return (
    <StatusBadge
      status={active ? "Active" : "Inactive"}
      variant={active ? "active" : "inactive"}
      className={className}
    />
  );
}