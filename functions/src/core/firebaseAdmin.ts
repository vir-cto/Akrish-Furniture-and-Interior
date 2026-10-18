import { cert, getApps, initializeApp, App } from "firebase-admin/app";
import { getAuth, Auth } from "firebase-admin/auth";
import { getFirestore, Firestore } from "firebase-admin/firestore";
import { getStorage, Storage } from "firebase-admin/storage";

let adminApp: App;

function initializeFirebaseAdmin(): App {
  if (getApps().length > 0) {
    return getApps()[0];
  }

  const projectId =
    process.env.FIREBASE_PROJECT_ID ||
    process.env.GCLOUD_PROJECT;

  const clientEmail =
    process.env.FIREBASE_CLIENT_EMAIL;

  const privateKey =
    process.env.FIREBASE_PRIVATE_KEY?.replace(
      /\\n/g,
      "\n"
    );

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error(
      "Firebase Admin credentials are missing. " +
        "Set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, " +
        "and FIREBASE_PRIVATE_KEY."
    );
  }

  return initializeApp({
    credential: cert({
      projectId,
      clientEmail,
      privateKey,
    }),
    storageBucket:
      process.env.FIREBASE_STORAGE_BUCKET,
  });
}

adminApp = initializeFirebaseAdmin();

/**
 * Firebase Admin Authentication
 */
export const adminAuth: Auth = getAuth(adminApp);

/**
 * Firebase Admin Firestore
 */
export const adminDb: Firestore =
  getFirestore(adminApp);

/**
 * Firebase Admin Storage
 */
export const adminStorage: Storage =
  getStorage(adminApp);

/**
 * Firebase Admin application instance
 */
export const firebaseAdmin: App = adminApp;

export default firebaseAdmin;