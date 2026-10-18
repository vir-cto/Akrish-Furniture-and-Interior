"use client";

import {
  Fragment,
  type ReactNode,
  type TableHTMLAttributes,
} from "react";

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  children: ReactNode;
}

export function Table({
  children,
  className = "",
  ...props
}: TableProps) {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-slate-200 bg-white">
      <table
        {...props}
        className={`w-full min-w-[700px] border-collapse text-sm ${className}`}
      >
        {children}
      </table>
    </div>
  );
}

interface TableHeaderProps {
  children: ReactNode;
  className?: string;
}

export function TableHeader({
  children,
  className = "",
}: TableHeaderProps) {
  return (
    <thead
      className={`border-b border-slate-200 bg-slate-50 ${className}`}
    >
      {children}
    </thead>
  );
}

interface TableBodyProps {
  children: ReactNode;
  className?: string;
}

export function TableBody({
  children,
  className = "",
}: TableBodyProps) {
  return (
    <tbody className={`divide-y divide-slate-100 ${className}`}>
      {children}
    </tbody>
  );
}

interface TableRowProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function TableRow({
  children,
  className = "",
  onClick,
}: TableRowProps) {
  return (
    <tr
      onClick={onClick}
      className={`transition-colors ${
        onClick ? "cursor-pointer hover:bg-slate-50" : ""
      } ${className}`}
    >
      {children}
    </tr>
  );
}

interface TableHeadProps {
  children?: ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}

export function TableHead({
  children,
  className = "",
  align = "left",
}: TableHeadProps) {
  const alignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  return (
    <th
      scope="col"
      className={`px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 ${alignment} ${className}`}
    >
      {children}
    </th>
  );
}

interface TableCellProps {
  children?: ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
  colSpan?: number;
}

export function TableCell({
  children,
  className = "",
  align = "left",
  colSpan,
}: TableCellProps) {
  const alignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  return (
    <td
      colSpan={colSpan}
      className={`px-4 py-3.5 text-sm text-slate-700 ${alignment} ${className}`}
    >
      {children}
    </td>
  );
}

interface TableEmptyProps {
  message?: string;
  colSpan?: number;
  className?: string;
}

export function TableEmpty({
  message = "No records found.",
  colSpan = 1,
  className = "",
}: TableEmptyProps) {
  return (
    <tr>
      <td
        colSpan={colSpan}
        className={`px-4 py-12 text-center ${className}`}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-400">
            —
          </div>

          <p className="text-sm font-medium text-slate-600">
            {message}
          </p>
        </div>
      </td>
    </tr>
  );
}

interface TableLoadingProps {
  colSpan?: number;
  rows?: number;
}

export function TableLoading({
  colSpan = 5,
  rows = 5,
}: TableLoadingProps) {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <tr key={rowIndex}>
          {Array.from({ length: colSpan }).map((_, cellIndex) => (
            <td key={cellIndex} className="px-4 py-4">
              <div className="h-4 animate-pulse rounded bg-slate-100" />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

interface TableActionProps {
  children: ReactNode;
  className?: string;
}

export function TableActions({
  children,
  className = "",
}: TableActionProps) {
  return (
    <div
      className={`flex items-center justify-end gap-1.5 ${className}`}
    >
      {children}
    </div>
  );
}

interface TableActionButtonProps {
  children: ReactNode;
  onClick?: () => void;
  title?: string;
  variant?: "default" | "danger";
  disabled?: boolean;
}

export function TableActionButton({
  children,
  onClick,
  title,
  variant = "default",
  disabled = false,
}: TableActionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      disabled={disabled}
      className={`rounded-lg p-2 transition disabled:cursor-not-allowed disabled:opacity-40 ${
        variant === "danger"
          ? "text-red-500 hover:bg-red-50 hover:text-red-700"
          : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
      }`}
    >
      {children}
    </button>
  );
}

interface TablePaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems?: number;
  pageSize?: number;
}

export function TablePagination({
  page,
  totalPages,
  onPageChange,
  totalItems,
  pageSize = 10,
}: TablePaginationProps) {
  if (totalPages <= 1 && !totalItems) return null;

  const start =
    totalItems && totalItems > 0
      ? (page - 1) * pageSize + 1
      : 0;

  const end =
    totalItems && totalItems > 0
      ? Math.min(page * pageSize, totalItems)
      : 0;

  return (
    <div className="flex flex-col gap-3 border-t border-slate-200 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-xs text-slate-500">
        {totalItems
          ? `Showing ${start}-${end} of ${totalItems}`
          : `Page ${page} of ${totalPages}`}
      </p>

      <div className="flex items-center gap-1">
        <button
          type="button"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }).map((_, index) => {
          const pageNumber = index + 1;

          if (
            totalPages > 7 &&
            pageNumber !== 1 &&
            pageNumber !== totalPages &&
            Math.abs(pageNumber - page) > 1
          ) {
            if (pageNumber === 2 || pageNumber === totalPages - 1) {
              return (
                <Fragment key={pageNumber}>
                  <span className="px-1 text-xs text-slate-400">
                    ...
                  </span>
                </Fragment>
              );
            }

            return null;
          }

          return (
            <button
              key={pageNumber}
              type="button"
              onClick={() => onPageChange(pageNumber)}
              className={`h-8 min-w-8 rounded-lg px-2 text-xs font-semibold transition ${
                pageNumber === page
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          type="button"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
          className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}