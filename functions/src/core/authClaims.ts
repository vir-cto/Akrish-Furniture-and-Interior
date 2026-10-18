import { getAuth } from "firebase-admin/auth";

export type UserRole =
  | "admin"
  | "manager"
  | "designer"
  | "sales"
  | "accounts"
  | "hr"
  | "employee";

const VALID_ROLES: UserRole[] = [
  "admin",
  "manager",
  "designer",
  "sales",
  "accounts",
  "hr",
  "employee",
];

function isValidRole(role: unknown): role is UserRole {
  return (
    typeof role === "string" &&
    VALID_ROLES.includes(role as UserRole)
  );
}

/**
 * Set a Firebase Authentication custom role claim.
 *
 * This role is available to:
 * - Firestore Security Rules
 * - Firebase Storage Security Rules
 * - Server-side Firebase Admin SDK code
 */
export async function setUserRole(
  uid: string,
  role: UserRole
): Promise<void> {
  if (!uid) {
    throw new Error("User UID is required.");
  }

  if (!isValidRole(role)) {
    throw new Error(`Invalid user role: ${String(role)}`);
  }

  const auth = getAuth();

  const user = await auth.getUser(uid);

  const existingClaims = user.customClaims ?? {};

  await auth.setCustomUserClaims(uid, {
    ...existingClaims,
    role,
  });
}

/**
 * Get the role assigned to a Firebase user.
 *
 * Returns "employee" when no valid role is assigned.
 */
export async function getUserRole(
  uid: string
): Promise<UserRole> {
  if (!uid) {
    throw new Error("User UID is required.");
  }

  const auth = getAuth();
  const user = await auth.getUser(uid);

  const role = user.customClaims?.role;

  if (isValidRole(role)) {
    return role;
  }

  return "employee";
}

/**
 * Remove the custom role claim from a user.
 */
export async function removeUserRole(
  uid: string
): Promise<void> {
  if (!uid) {
    throw new Error("User UID is required.");
  }

  const auth = getAuth();
  const user = await auth.getUser(uid);

  const existingClaims = {
    ...(user.customClaims ?? {}),
  };

  delete existingClaims.role;

  await auth.setCustomUserClaims(uid, existingClaims);
}

/**
 * Set or update multiple custom claims while preserving
 * existing claims.
 */
export async function setUserClaims(
  uid: string,
  claims: Record<string, unknown>
): Promise<void> {
  if (!uid) {
    throw new Error("User UID is required.");
  }

  const auth = getAuth();
  const user = await auth.getUser(uid);

  await auth.setCustomUserClaims(uid, {
    ...(user.customClaims ?? {}),
    ...claims,
  });
}

/**
 * Get all custom claims assigned to a Firebase user.
 */
export async function getUserClaims(
  uid: string
): Promise<Record<string, unknown>> {
  if (!uid) {
    throw new Error("User UID is required.");
  }

  const auth = getAuth();
  const user = await auth.getUser(uid);

  return {
    ...(user.customClaims ?? {}),
  };
}

/**
 * Check whether a user has a specific role.
 */
export async function userHasRole(
  uid: string,
  role: UserRole
): Promise<boolean> {
  const currentRole = await getUserRole(uid);

  return currentRole === role;
}

/**
 * Check whether a user has one of the supplied roles.
 */
export async function userHasAnyRole(
  uid: string,
  roles: UserRole[]
): Promise<boolean> {
  const currentRole = await getUserRole(uid);

  return roles.includes(currentRole);
}