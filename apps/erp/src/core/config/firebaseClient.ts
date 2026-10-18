// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// export const auth = getAuth(app);

// export const db = getFirestore(app);

// export const storage = getStorage(app);

// export default app;

// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);

// export default app;



import { getApp, getApps, initializeApp } from "firebase/app";
import {
  browserSessionPersistence,
  initializeAuth,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAHcn8jZ5uK_x7clbQAOGAs2KIYdSMseFY",
  authDomain: "akrish-collective-erp.firebaseapp.com",
  projectId: "akrish-collective-erp",
  storageBucket: "akrish-collective-erp.firebasestorage.app",
  messagingSenderId: "309709340408",
  appId: "1:309709340408:web:f77b3c13a7738d1cb3850d",
};

// Use a different Firebase app name for staff authentication.
const ERP_APP_NAME = "akrish-erp-staff";

const erpApp =
  getApps().find((app) => app.name === ERP_APP_NAME) ??
  initializeApp(firebaseConfig, ERP_APP_NAME);

// Staff authentication is isolated from the website's default Firebase app.
// Session persistence keeps the staff login for this browser session.
function createStaffAuth() {
  try {
    return initializeAuth(erpApp, {
      persistence: browserSessionPersistence,
    });
  } catch (error) {
    // Reuse the instance if this module has already initialized it.
    const existingApp = getApps().find(
      (app) => app.name === ERP_APP_NAME
    );

    if (!existingApp) {
      throw error;
    }

    // getAuth returns the existing Auth instance without reinitializing it.
    return getAuth(existingApp);
  }
}

import { getAuth } from "firebase/auth";

export const auth = createStaffAuth();
export const db = getFirestore(erpApp);
export const storage = getStorage(erpApp);
export const firebaseApp = erpApp;
