// import {
//   collection,
//   getDocs,
//   doc,
//   setDoc,
//   updateDoc,
//   serverTimestamp,
//   Timestamp,
// } from "firebase/firestore";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "@/core/config/firebaseClient";

// export type StaffUserDoc = {
//   id: string;
//   uid?: string;
//   name?: string;
//   email?: string;
//   role?: string;
//   modules?: string[];
//   status?: "Active" | "Inactive" | string;
//   avatar?: string;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// const COLLECTION = "users";

// export async function getAllStaffUsers(): Promise<StaffUserDoc[]> {
//   const snap = await getDocs(collection(db, COLLECTION));
//   return snap.docs.map(
//     (d) =>
//       ({
//         id: d.id,
//         uid: d.id,
//         ...d.data(),
//       } as StaffUserDoc)
//   );
// }

// export async function updateStaffUser(
//   id: string,
//   data: Partial<StaffUserDoc>
// ): Promise<void> {
//   const { id: _id, ...rest } = data as StaffUserDoc & { id?: string };
//   await updateDoc(doc(db, COLLECTION, id), {
//     ...rest,
//     updatedAt: serverTimestamp(),
//   });
// }

// /**
//  * Creates a Firebase Auth user + matching `users/{uid}` profile.
//  * Note: client-side createUserWithEmailAndPassword will sign in as the new user
//  * unless you use a Cloud Function with Admin SDK. For production, prefer a
//  * Cloud Function. This client path is fine for bootstrap / admin tooling.
//  */
// export async function createStaffUser(input: {
//   name: string;
//   email: string;
//   password: string;
//   role: string;
//   modules: string[];
//   status?: "Active" | "Inactive";
// }): Promise<string> {
//   const cred = await createUserWithEmailAndPassword(
//     auth,
//     input.email.trim(),
//     input.password
//   );
//   const uid = cred.user.uid;

//   await setDoc(doc(db, COLLECTION, uid), {
//     uid,
//     name: input.name.trim(),
//     email: input.email.trim().toLowerCase(),
//     role: input.role,
//     modules: input.modules,
//     status: input.status || "Active",
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   });

//   return uid;
// }

// /** Profile-only write (Auth user must already exist with this uid). */
// export async function upsertStaffProfile(
//   uid: string,
//   data: {
//     name: string;
//     email: string;
//     role: string;
//     modules: string[];
//     status?: "Active" | "Inactive";
//   }
// ): Promise<void> {
//   await setDoc(
//     doc(db, COLLECTION, uid),
//     {
//       uid,
//       name: data.name.trim(),
//       email: data.email.trim().toLowerCase(),
//       role: data.role,
//       modules: data.modules,
//       status: data.status || "Active",
//       updatedAt: serverTimestamp(),
//       createdAt: serverTimestamp(),
//     },
//     { merge: true }
//   );
// }

import {
  collection,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";
import { initializeApp, deleteApp, getApps } from "firebase/app";
import { db } from "@/core/config/firebaseClient";

export type StaffUserDoc = {
  id: string;
  uid?: string;
  name?: string;
  email?: string;
  role?: string;
  modules?: string[];
  status?: "Active" | "Inactive" | string;
  avatar?: string;
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
};

const COLLECTION = "users";

/** Same config as main app — used only to create users without replacing admin session */
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export async function getAllStaffUsers(): Promise<StaffUserDoc[]> {
  const snap = await getDocs(collection(db, COLLECTION));
  return snap.docs.map(
    (d) =>
      ({
        id: d.id,
        uid: d.id,
        ...d.data(),
      }) as StaffUserDoc
  );
}

export async function updateStaffUser(
  id: string,
  data: Partial<StaffUserDoc>
): Promise<void> {
  const { id: _id, ...rest } = data as StaffUserDoc & { id?: string };
  await updateDoc(doc(db, COLLECTION, id), {
    ...rest,
    updatedAt: serverTimestamp(),
  });
}

/**
 * Creates Auth user + users/{uid} profile WITHOUT logging out the admin.
 * Uses a secondary Firebase app so the primary auth session stays intact.
 */
export async function createStaffUser(input: {
  name: string;
  email: string;
  password: string;
  role: string;
  modules: string[];
  status?: "Active" | "Inactive";
}): Promise<string> {
  const email = input.email.trim().toLowerCase();
  const name = input.name.trim();
  const modules =
    input.role === "admin"
      ? ["interior", "furniture"]
      : input.modules.length > 0
        ? input.modules
        : ["furniture"];

  // Secondary app — create user here so admin stays signed in on primary auth
  const secondaryName = `StaffCreate_${Date.now()}`;
  const secondaryApp = initializeApp(firebaseConfig, secondaryName);
  const secondaryAuth = getAuth(secondaryApp);

  try {
    const cred = await createUserWithEmailAndPassword(
      secondaryAuth,
      email,
      input.password
    );
    const uid = cred.user.uid;

    await setDoc(doc(db, COLLECTION, uid), {
      uid,
      name,
      email,
      role: input.role,
      modules,
      status: input.status || "Active",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    // Sign out only the secondary session
    await signOut(secondaryAuth);

    return uid;
  } finally {
    try {
      await deleteApp(secondaryApp);
    } catch {
      /* ignore */
    }
  }
}

export async function upsertStaffProfile(
  uid: string,
  data: {
    name: string;
    email: string;
    role: string;
    modules: string[];
    status?: "Active" | "Inactive";
  }
): Promise<void> {
  await setDoc(
    doc(db, COLLECTION, uid),
    {
      uid,
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      role: data.role,
      modules: data.modules,
      status: data.status || "Active",
      updatedAt: serverTimestamp(),
      createdAt: serverTimestamp(),
    },
    { merge: true }
  );
}
