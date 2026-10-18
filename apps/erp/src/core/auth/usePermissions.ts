"use client";

import { useCallback, useMemo } from "react";

export type Permission =
  | "dashboard.view"
  | "customers.view"
  | "customers.create"
  | "customers.edit"
  | "customers.delete"
  | "enquiries.view"
  | "enquiries.create"
  | "enquiries.edit"
  | "enquiries.delete"
  | "products.view"
  | "products.create"
  | "products.edit"
  | "products.delete"
  | "orders.view"
  | "orders.create"
  | "orders.edit"
  | "orders.delete"
  | "payments.view"
  | "payments.create"
  | "payments.edit"
  | "payments.delete"
  | "quotations.view"
  | "quotations.create"
  | "quotations.edit"
  | "quotations.delete"
  | "projects.view"
  | "projects.create"
  | "projects.edit"
  | "projects.delete"
  | "contracts.view"
  | "contracts.create"
  | "contracts.edit"
  | "contracts.delete"
  | "reports.view"
  | "hrms.view"
  | "hrms.create"
  | "hrms.edit"
  | "hrms.delete"
  | "settings.view"
  | "settings.edit"
  | "users.view"      // NEW
  | "users.create"    // NEW
  | "users.edit"      // NEW
  | "users.delete";

export type UserRole =
  | "admin"
  | "manager"
  | "designer"
  | "sales"
  | "accounts"
  | "hr"
  | "employee";

const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  admin: [
    "dashboard.view",

    "customers.view",
    "customers.create",
    "customers.edit",
    "customers.delete",

    "enquiries.view",
    "enquiries.create",
    "enquiries.edit",
    "enquiries.delete",

    "products.view",
    "products.create",
    "products.edit",
    "products.delete",

    "orders.view",
    "orders.create",
    "orders.edit",
    "orders.delete",

    "payments.view",
    "payments.create",
    "payments.edit",
    "payments.delete",

    "quotations.view",
    "quotations.create",
    "quotations.edit",
    "quotations.delete",

    "projects.view",
    "projects.create",
    "projects.edit",
    "projects.delete",

    "contracts.view",
    "contracts.create",
    "contracts.edit",
    "contracts.delete",

    "reports.view",

    "hrms.view",
    "hrms.create",
    "hrms.edit",
    "hrms.delete",

    "settings.view",
    "settings.edit",

    "users.view",
    "users.create",
    "users.edit",
    "users.delete",
  ],

  manager: [
    "dashboard.view",

    "customers.view",
    "customers.create",
    "customers.edit",

    "enquiries.view",
    "enquiries.create",
    "enquiries.edit",

    "products.view",
    "products.create",
    "products.edit",

    "orders.view",
    "orders.create",
    "orders.edit",

    "payments.view",
    "payments.create",
    "payments.edit",

    "quotations.view",
    "quotations.create",
    "quotations.edit",

    "projects.view",
    "projects.create",
    "projects.edit",

    "contracts.view",
    "contracts.create",
    "contracts.edit",

    "reports.view",

    "hrms.view",

    "settings.view",
  ],

  designer: [
    "dashboard.view",

    "customers.view",

    "enquiries.view",
    "enquiries.create",
    "enquiries.edit",

    "products.view",

    "quotations.view",
    "quotations.create",
    "quotations.edit",

    "projects.view",
    "projects.create",
    "projects.edit",

    "contracts.view",

    "reports.view",
  ],

  sales: [
    "dashboard.view",

    "customers.view",
    "customers.create",
    "customers.edit",

    "enquiries.view",
    "enquiries.create",
    "enquiries.edit",

    "products.view",

    "orders.view",
    "orders.create",
    "orders.edit",

    "payments.view",

    "quotations.view",
    "quotations.create",
    "quotations.edit",

    "projects.view",

    "reports.view",
  ],

  accounts: [
    "dashboard.view",

    "customers.view",

    "products.view",

    "orders.view",

    "payments.view",
    "payments.create",
    "payments.edit",

    "quotations.view",

    "projects.view",

    "contracts.view",

    "reports.view",
  ],

  hr: [
    "dashboard.view",

    "customers.view",

    "hrms.view",
    "hrms.create",
    "hrms.edit",
    "hrms.delete",

    "reports.view",
  ],

  employee: [
    "dashboard.view",
    "customers.view",
    "products.view",
    "orders.view",
    "quotations.view",
    "projects.view",
  ],
};

function normalizeRole(role: unknown): UserRole {
  if (
    typeof role === "string" &&
    Object.prototype.hasOwnProperty.call(ROLE_PERMISSIONS, role)
  ) {
    return role as UserRole;
  }

  return "employee";
}

function getStoredRole(): UserRole {
  if (typeof window === "undefined") {
    return "employee";
  }

  const possibleKeys = [
    "userRole",
    "role",
    "user_role",
    "erp_role",
  ];

  for (const key of possibleKeys) {
    const value = window.localStorage.getItem(key);

    if (value) {
      try {
        const parsed = JSON.parse(value);

        if (typeof parsed === "string") {
          return normalizeRole(parsed);
        }

        if (parsed?.role) {
          return normalizeRole(parsed.role);
        }
      } catch {
        return normalizeRole(value);
      }
    }
  }

  return "employee";
}

export function getPermissionsForRole(role: UserRole): Permission[] {
  return ROLE_PERMISSIONS[role] ?? [];
}

export function hasPermission(
  role: UserRole,
  permission: Permission
): boolean {
  return getPermissionsForRole(role).includes(permission);
}

export function hasAnyPermission(
  role: UserRole,
  permissions: Permission[]
): boolean {
  return permissions.some((permission) =>
    hasPermission(role, permission)
  );
}

export function hasAllPermissions(
  role: UserRole,
  permissions: Permission[]
): boolean {
  return permissions.every((permission) =>
    hasPermission(role, permission)
  );
}

export function usePermissions() {
  const role = useMemo<UserRole>(() => {
    return getStoredRole();
  }, []);

  const permissions = useMemo(() => {
    return getPermissionsForRole(role);
  }, [role]);

  const can = useCallback(
    (permission: Permission) => {
      return permissions.includes(permission);
    },
    [permissions]
  );

  const canAny = useCallback(
    (requiredPermissions: Permission[]) => {
      return requiredPermissions.some((permission) =>
        permissions.includes(permission)
      );
    },
    [permissions]
  );

  const canAll = useCallback(
    (requiredPermissions: Permission[]) => {
      return requiredPermissions.every((permission) =>
        permissions.includes(permission)
      );
    },
    [permissions]
  );

  const isAdmin = role === "admin";
  const isManager = role === "manager";

  return {
    role,
    permissions,

    can,
    canAny,
    canAll,

    isAdmin,
    isManager,

    isDesigner: role === "designer",
    isSales: role === "sales",
    isAccounts: role === "accounts",
    isHR: role === "hr",
    isEmployee: role === "employee",
  };
}

export default usePermissions;