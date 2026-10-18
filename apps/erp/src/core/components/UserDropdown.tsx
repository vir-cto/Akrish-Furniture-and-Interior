"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import { useAuth } from "../auth/AuthContext";

export default function UserDropdown() {
  const { user, logout } = useAuth();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleLogout = () => {
    setOpen(false);
    logout();
  };

  const displayName = user?.name || "User";
  const email = user?.email || "user@vipinterior.com";
  const role = user?.role || "employee";

  const initials = displayName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex items-center gap-2 rounded-xl p-1.5 pr-2 transition hover:bg-slate-100"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
          {initials || "U"}
        </div>

        <div className="hidden max-w-[140px] text-left sm:block">
          <p className="truncate text-sm font-semibold text-slate-800">
            {displayName}
          </p>

          <p className="truncate text-xs capitalize text-slate-500">
            {role}
          </p>
        </div>

        <ChevronDown
          size={16}
          className={`hidden text-slate-400 transition-transform sm:block ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-[calc(100%+8px)] z-50 w-64 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl"
        >
          {/* User information */}
          <div className="border-b border-slate-100 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                {initials || "U"}
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-900">
                  {displayName}
                </p>

                <p className="truncate text-xs text-slate-500">
                  {email}
                </p>

                <span className="mt-1 inline-block rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600">
                  {role}
                </span>
              </div>
            </div>
          </div>

          {/* Menu items */}
          <div className="p-1.5">
            <Link
              href="/profile"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 transition hover:bg-slate-100"
            >
              <User size={17} className="text-slate-500" />
              <span>My Profile</span>
            </Link>

            <Link
              href="/settings"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 transition hover:bg-slate-100"
            >
              <Settings size={17} className="text-slate-500" />
              <span>Settings</span>
            </Link>
          </div>

          {/* Logout */}
          <div className="border-t border-slate-100 p-1.5">
            <button
              type="button"
              role="menuitem"
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50"
            >
              <LogOut size={17} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}