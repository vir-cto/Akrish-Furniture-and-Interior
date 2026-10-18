/**
 * Seed Super Admin for Collective ERP
 *
 * Creates (if missing) the default super-admin user:
 *   Email   : admin@akrish.in
 *   Password: Admin@123
 *   Role    : admin
 *   Modules : ["interior", "furniture"]
 *
 * This function is idempotent – safe to call multiple times.
 */

import { getAuth } from "firebase-admin/auth";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { onRequest } from "firebase-functions/v2/https";

const SUPER_ADMIN_EMAIL = "admin@akrish.in";
const SUPER_ADMIN_PASSWORD = "Admin@123";
const SUPER_ADMIN_NAME = "Akrish Super Admin";
const SUPER_ADMIN_ROLE = "admin";
const SUPER_ADMIN_MODULES = ["interior", "furniture"] as const;

/**
 * Core logic – can also be called from scripts or other functions.
 */
export async function ensureSuperAdmin(): Promise<{
  created: boolean;
  uid: string;
  email: string;
  message: string;
}> {
  const auth = getAuth();
  const db = getFirestore();

  let userRecord;
  let created = false;

  try {
    // Try to fetch existing user
    userRecord = await auth.getUserByEmail(SUPER_ADMIN_EMAIL);
  } catch (err: any) {
    if (err.code === "auth/user-not-found") {
      // Create the user
      userRecord = await auth.createUser({
        email: SUPER_ADMIN_EMAIL,
        password: SUPER_ADMIN_PASSWORD,
        displayName: SUPER_ADMIN_NAME,
        emailVerified: true,
        disabled: false,
      });
      created = true;
    } else {
      throw err;
    }
  }

  const uid = userRecord.uid;

  // Always ensure the correct custom claims (role + modules)
  await auth.setCustomUserClaims(uid, {
    role: SUPER_ADMIN_ROLE,
    modules: [...SUPER_ADMIN_MODULES],
  });

  // Ensure a matching document in the `users` collection
  const userRef = db.collection("users").doc(uid);
  const snap = await userRef.get();

  if (!snap.exists) {
    await userRef.set({
      uid,
      email: SUPER_ADMIN_EMAIL,
      name: SUPER_ADMIN_NAME,
      role: SUPER_ADMIN_ROLE,
      modules: [...SUPER_ADMIN_MODULES],
      status: "Active",
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    });
  } else {
    // Keep claims in sync with Firestore profile
    await userRef.set(
      {
        role: SUPER_ADMIN_ROLE,
        modules: [...SUPER_ADMIN_MODULES],
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  }

  return {
    created,
    uid,
    email: SUPER_ADMIN_EMAIL,
    message: created
      ? `Super admin created successfully (${SUPER_ADMIN_EMAIL}).`
      : `Super admin already exists – claims & profile refreshed (${SUPER_ADMIN_EMAIL}).`,
  };
}

/**
 * HTTP endpoint – call once after deployment.
 *
 * POST /seedSuperAdmin
 * Optional header: x-seed-secret: <value of SEED_SECRET env var>
 */
export const seedSuperAdmin = onRequest(
  {
    region: "asia-south1",
    cors: true,
  },
  async (req, res) => {
    // Simple protection – set SEED_SECRET in environment
    const expectedSecret = process.env.SEED_SECRET;
    if (expectedSecret) {
      const provided =
        req.headers["x-seed-secret"] ||
        (req.query.secret as string) ||
        "";
      if (provided !== expectedSecret) {
        res.status(403).json({
          success: false,
          message: "Forbidden – invalid or missing seed secret.",
        });
        return;
      }
    }

    try {
      const result = await ensureSuperAdmin();
      res.status(200).json({
        success: true,
        ...result,
      });
    } catch (error: unknown) {
      console.error("seedSuperAdmin error:", error);
      const message =
        error instanceof Error ? error.message : "Failed to seed super admin.";
      res.status(500).json({
        success: false,
        message,
      });
    }
  }
);

export default seedSuperAdmin;