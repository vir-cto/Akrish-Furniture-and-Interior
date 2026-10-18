// // "use client";

// // import {
// //   createContext,
// //   useContext,
// //   useEffect,
// //   useMemo,
// //   useState,
// //   type ReactNode,
// // } from "react";

// // export type UserRole =
// //   | "admin"
// //   | "manager"
// //   | "sales"
// //   | "designer"
// //   | "accountant"
// //   | "hr"
// //   | "employee";

// // export interface AuthUser {
// //   id: string;
// //   name: string;
// //   email: string;
// //   role: UserRole;
// //   avatar?: string;
// // }

// // interface AuthContextType {
// //   user: AuthUser | null;
// //   isAuthenticated: boolean;
// //   isLoading: boolean;
// //   login: (email: string, password: string) => Promise<boolean>;
// //   logout: () => void;
// //   hasRole: (...roles: UserRole[]) => boolean;
// // }

// // const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // const DEMO_USER: AuthUser = {
// //   id: "user-001",
// //   name: "VIP Interior Admin",
// //   email: "admin@vipinterior.com",
// //   role: "admin",
// // };

// // const AUTH_STORAGE_KEY = "vip-interior-auth-user";

// // export function AuthProvider({ children }: { children: ReactNode }) {
// //   const [user, setUser] = useState<AuthUser | null>(null);
// //   const [isLoading, setIsLoading] = useState(true);

// //   useEffect(() => {
// //     try {
// //       const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);

// //       if (storedUser) {
// //         setUser(JSON.parse(storedUser) as AuthUser);
// //       }
// //     } catch (error) {
// //       console.error("Failed to restore authentication:", error);
// //       localStorage.removeItem(AUTH_STORAGE_KEY);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   }, []);

// //   const login = async (
// //     email: string,
// //     password: string
// //   ): Promise<boolean> => {
// //     setIsLoading(true);

// //     try {
// //       /*
// //        * Demo authentication.
// //        * Replace this section with your API authentication when the backend
// //        * login endpoint is available.
// //        */
// //       if (
// //         email.trim().toLowerCase() === DEMO_USER.email &&
// //         password.trim() === "admin123"
// //       ) {
// //         setUser(DEMO_USER);
// //         localStorage.setItem(
// //           AUTH_STORAGE_KEY,
// //           JSON.stringify(DEMO_USER)
// //         );

// //         return true;
// //       }

// //       return false;
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const logout = () => {
// //     setUser(null);
// //     localStorage.removeItem(AUTH_STORAGE_KEY);
// //   };

// //   const hasRole = (...roles: UserRole[]) => {
// //     if (!user) return false;

// //     return roles.includes(user.role);
// //   };

// //   const value = useMemo<AuthContextType>(
// //     () => ({
// //       user,
// //       isAuthenticated: Boolean(user),
// //       isLoading,
// //       login,
// //       logout,
// //       hasRole,
// //     }),
// //     [user, isLoading]
// //   );

// //   return (
// //     <AuthContext.Provider value={value}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // }

// // export function useAuth() {
// //   const context = useContext(AuthContext);

// //   if (!context) {
// //     throw new Error("useAuth must be used inside an AuthProvider");
// //   }

// //   return context;
// // }

// // export default AuthContext;

// "use client";

// import {
//   createContext,
//   useContext,
//   useEffect,
//   useMemo,
//   useState,
//   type ReactNode,
// } from "react";

// export type UserRole =
//   | "admin"
//   | "manager"
//   | "sales"
//   | "designer"
//   | "accountant"
//   | "hr"
//   | "employee";

// export type ModuleAccess = "interior" | "furniture";

// export interface AuthUser {
//   id: string;
//   name: string;
//   email: string;
//   role: UserRole;
//   modules: ModuleAccess[];
//   avatar?: string;
// }

// interface AuthContextType {
//   user: AuthUser | null;
//   isAuthenticated: boolean;
//   isLoading: boolean;
//   login: (email: string, password: string) => Promise<boolean>;
//   logout: () => void;
//   hasRole: (...roles: UserRole[]) => boolean;
//   hasModule: (module: ModuleAccess) => boolean;
//   isAdmin: boolean;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// const DEMO_ADMIN: AuthUser = {
//   id: "user-001",
//   name: "Rahul Verma",
//   email: "admin@akrish.in",
//   role: "admin",
//   modules: ["interior", "furniture"],
// };

// const AUTH_STORAGE_KEY = "akrish-erp-auth-user";

// export function AuthProvider({ children }: { children: ReactNode }) {
//   const [user, setUser] = useState<AuthUser | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     try {
//       const stored = localStorage.getItem(AUTH_STORAGE_KEY);
//       if (stored) {
//         setUser(JSON.parse(stored) as AuthUser);
//       }
//     } catch {
//       localStorage.removeItem(AUTH_STORAGE_KEY);
//     } finally {
//       setIsLoading(false);
//     }
//   }, []);

//   const login = async (email: string, password: string): Promise<boolean> => {
//     setIsLoading(true);
//     try {
//       // Demo credentials – replace with real Firebase Auth later
//       if (
//         email.trim().toLowerCase() === DEMO_ADMIN.email &&
//         password.trim() === "admin123"
//       ) {
//         setUser(DEMO_ADMIN);
//         localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(DEMO_ADMIN));
//         // also set a simple cookie for middleware
//         document.cookie = `authToken=demo-admin-token; path=/; max-age=86400`;
//         return true;
//       }
//       return false;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem(AUTH_STORAGE_KEY);
//     document.cookie = "authToken=; path=/; max-age=0";
//   };

//   const hasRole = (...roles: UserRole[]) => {
//     if (!user) return false;
//     return roles.includes(user.role);
//   };

//   const hasModule = (module: ModuleAccess) => {
//     if (!user) return false;
//     if (user.role === "admin") return true;
//     return user.modules.includes(module);
//   };

//   const value = useMemo<AuthContextType>(
//     () => ({
//       user,
//       isAuthenticated: Boolean(user),
//       isLoading,
//       login,
//       logout,
//       hasRole,
//       hasModule,
//       isAdmin: user?.role === "admin",
//     }),
//     [user, isLoading]
//   );

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used inside an AuthProvider");
//   }
//   return context;
// }

// export default AuthContext;

// "use client";

// import {
//   createContext,
//   useContext,
//   useEffect,
//   useMemo,
//   useState,
//   type ReactNode,
// } from "react";
// import {
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
//   User,
// } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/core/config/firebaseClient";

// export type UserRole =
//   | "admin"
//   | "manager"
//   | "sales"
//   | "designer"
//   | "accountant"
//   | "hr"
//   | "employee";

// export type ModuleAccess = "interior" | "furniture";

// export interface AuthUser {
//   id: string;
//   name: string;
//   email: string;
//   role: UserRole;
//   modules: ModuleAccess[];
//   avatar?: string;
// }

// interface AuthContextType {
//   user: AuthUser | null;
//   isAuthenticated: boolean;
//   isLoading: boolean;
//   login: (email: string, password: string) => Promise<boolean>;
//   logout: () => Promise<void>;
//   hasRole: (...roles: UserRole[]) => boolean;
//   hasModule: (module: ModuleAccess) => boolean;
//   isAdmin: boolean;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // async function buildAuthUser(firebaseUser: User): Promise<AuthUser> {
// //   // 1. Get custom claims (role + modules)
// //   const tokenResult = await firebaseUser.getIdTokenResult(true);
// //   const claims = tokenResult.claims;

// //   const role = (claims.role as UserRole) || "employee";
// //   const modules = (claims.modules as ModuleAccess[]) || [];

// //   // 2. Try to get extra profile data from Firestore
// //   let name = firebaseUser.displayName || firebaseUser.email?.split("@")[0] || "User";
// //   let avatar: string | undefined;

// //   try {
// //     const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
// //     if (userDoc.exists()) {
// //       const data = userDoc.data();
// //       name = data.name || name;
// //       avatar = data.avatar;
// //     }
// //   } catch (err) {
// //     console.warn("Could not fetch user profile:", err);
// //   }

// //   return {
// //     id: firebaseUser.uid,
// //     name,
// //     email: firebaseUser.email || "",
// //     role,
// //     modules: role === "admin" ? ["interior", "furniture"] : modules,
// //     avatar,
// //   };
// // }

// async function buildAuthUser(firebaseUser: User): Promise<AuthUser> {
//   // 1. Get custom claims (role + modules)
//   const tokenResult = await firebaseUser.getIdTokenResult(true);
//   const claims = tokenResult.claims;

//   let role = (claims.role as UserRole) || "employee";
//   let modules = (claims.modules as ModuleAccess[]) || [];

//   // ─────────────────────────────────────────────
//   // HARD-CODED SUPER ADMIN FALLBACK
//   // If the email is admin@akrish.in → force super admin
//   // This guarantees modules appear even before claims are set
//   // ─────────────────────────────────────────────
//   if (firebaseUser.email?.toLowerCase() === "admin@akrish.in") {
//     role = "admin";
//     modules = ["interior", "furniture"];
//   }

//   // 2. Try to get extra profile data from Firestore
//   let name =
//     firebaseUser.displayName ||
//     firebaseUser.email?.split("@")[0] ||
//     "User";
//   let avatar: string | undefined;

//   try {
//     const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
//     if (userDoc.exists()) {
//       const data = userDoc.data();
//       name = data.name || name;
//       avatar = data.avatar;
//     }
//   } catch (err) {
//     console.warn("Could not fetch user profile:", err);
//   }

//   return {
//     id: firebaseUser.uid,
//     name,
//     email: firebaseUser.email || "",
//     role,
//     // Always give admin both modules
//     modules: role === "admin" ? ["interior", "furniture"] : modules,
//     avatar,
//   };
// }

// export function AuthProvider({ children }: { children: ReactNode }) {
//   const [user, setUser] = useState<AuthUser | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
//       if (firebaseUser) {
//         try {
//           const authUser = await buildAuthUser(firebaseUser);
//           setUser(authUser);

//           // Set cookie for middleware
//           document.cookie = `authToken=${await firebaseUser.getIdToken()}; path=/; max-age=86400`;
//         } catch (err) {
//           console.error("Failed to build auth user:", err);
//           setUser(null);
//         }
//       } else {
//         setUser(null);
//         document.cookie = "authToken=; path=/; max-age=0";
//       }
//       setIsLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   const login = async (email: string, password: string): Promise<boolean> => {
//     try {
//       const result = await signInWithEmailAndPassword(auth, email, password);
//       const authUser = await buildAuthUser(result.user);
//       setUser(authUser);

//       // Set cookie for middleware
//       document.cookie = `authToken=${await result.user.getIdToken()}; path=/; max-age=86400`;

//       return true;
//     } catch (err: any) {
//       console.error("Login error:", err);
//       return false;
//     }
//   };

//   const logout = async () => {
//     await signOut(auth);
//     setUser(null);
//     document.cookie = "authToken=; path=/; max-age=0";
//   };

//   const hasRole = (...roles: UserRole[]) => {
//     if (!user) return false;
//     return roles.includes(user.role);
//   };

//   const hasModule = (module: ModuleAccess) => {
//     if (!user) return false;
//     if (user.role === "admin") return true;
//     return user.modules.includes(module);
//   };

//   const value = useMemo<AuthContextType>(
//     () => ({
//       user,
//       isAuthenticated: Boolean(user),
//       isLoading,
//       login,
//       logout,
//       hasRole,
//       hasModule,
//       isAdmin: user?.role === "admin",
//     }),
//     [user, isLoading]
//   );

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used inside an AuthProvider");
//   }
//   return context;
// }

// export default AuthContext;

// "use client";

// import {
//   createContext,
//   useContext,
//   useEffect,
//   useMemo,
//   useState,
//   type ReactNode,
// } from "react";
// import {
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
//   User,
// } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/core/config/firebaseClient";

// export type UserRole =
//   | "admin"
//   | "manager"
//   | "sales"
//   | "designer"
//   | "accountant"
//   | "hr"
//   | "employee";

// export type ModuleAccess = "interior" | "furniture";

// export interface AuthUser {
//   id: string;
//   name: string;
//   email: string;
//   role: UserRole;
//   modules: ModuleAccess[];
//   avatar?: string;
// }

// interface AuthContextType {
//   user: AuthUser | null;
//   isAuthenticated: boolean;
//   isLoading: boolean;
//   login: (email: string, password: string) => Promise<boolean>;
//   logout: () => Promise<void>;
//   hasRole: (...roles: UserRole[]) => boolean;
//   hasModule: (module: ModuleAccess) => boolean;
//   isAdmin: boolean;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// function setSessionCookie(token: string) {
//   // No max-age → session cookie (cleared when browser closes)
//   document.cookie = `authToken=${token}; path=/; SameSite=Lax`;
// }

// function clearSessionCookie() {
//   document.cookie = "authToken=; path=/; max-age=0";
// }

// async function buildAuthUser(firebaseUser: User): Promise<AuthUser> {
//   const tokenResult = await firebaseUser.getIdTokenResult(true);
//   const claims = tokenResult.claims;

//   let role = (claims.role as UserRole) || "employee";
//   let modules = (claims.modules as ModuleAccess[]) || [];

//   // Super admin fallback
//   if (firebaseUser.email?.toLowerCase() === "admin@akrish.in") {
//     role = "admin";
//     modules = ["interior", "furniture"];
//   }

//   let name =
//     firebaseUser.displayName ||
//     firebaseUser.email?.split("@")[0] ||
//     "User";
//   let avatar: string | undefined;

//   try {
//     const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
//     if (userDoc.exists()) {
//       const data = userDoc.data();
//       name = data.name || name;
//       avatar = data.avatar;
//     }
//   } catch (err) {
//     console.warn("Could not fetch user profile:", err);
//   }

//   return {
//     id: firebaseUser.uid,
//     name,
//     email: firebaseUser.email || "",
//     role,
//     modules: role === "admin" ? ["interior", "furniture"] : modules,
//     avatar,
//   };
// }

// export function AuthProvider({ children }: { children: ReactNode }) {
//   const [user, setUser] = useState<AuthUser | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
//       if (firebaseUser) {
//         try {
//           const authUser = await buildAuthUser(firebaseUser);
//           setUser(authUser);

//           const token = await firebaseUser.getIdToken();
//           setSessionCookie(token);
//         } catch (err) {
//           console.error("Failed to build auth user:", err);
//           setUser(null);
//           clearSessionCookie();
//         }
//       } else {
//         setUser(null);
//         clearSessionCookie();
//       }
//       setIsLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   const login = async (email: string, password: string): Promise<boolean> => {
//     try {
//       const result = await signInWithEmailAndPassword(auth, email, password);
//       const authUser = await buildAuthUser(result.user);
//       setUser(authUser);

//       const token = await result.user.getIdToken();
//       setSessionCookie(token);

//       return true;
//     } catch (err: unknown) {
//       console.error("Login error:", err);
//       return false;
//     }
//   };

//   const logout = async () => {
//     await signOut(auth);
//     setUser(null);
//     clearSessionCookie();
//   };

//   const hasRole = (...roles: UserRole[]) => {
//     if (!user) return false;
//     return roles.includes(user.role);
//   };

//   const hasModule = (module: ModuleAccess) => {
//     if (!user) return false;
//     if (user.role === "admin") return true;
//     return user.modules.includes(module);
//   };

//   const value = useMemo<AuthContextType>(
//     () => ({
//       user,
//       isAuthenticated: Boolean(user),
//       isLoading,
//       login,
//       logout,
//       hasRole,
//       hasModule,
//       isAdmin: user?.role === "admin",
//     }),
//     [user, isLoading]
//   );

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used inside an AuthProvider");
//   }
//   return context;
// }

// export default AuthContext;

// "use client";

// import {
//   createContext,
//   useContext,
//   useEffect,
//   useMemo,
//   useState,
//   type ReactNode,
// } from "react";
// import {
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
//   User,
// } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/core/config/firebaseClient";

// export type UserRole =
//   | "admin"
//   | "manager"
//   | "sales"
//   | "designer"
//   | "accountant"
//   | "hr"
//   | "employee";

// export type ModuleAccess = "interior" | "furniture";

// export interface AuthUser {
//   id: string;
//   name: string;
//   email: string;
//   role: UserRole;
//   modules: ModuleAccess[];
//   avatar?: string;
// }

// interface AuthContextType {
//   user: AuthUser | null;
//   isAuthenticated: boolean;
//   isLoading: boolean;
//   login: (email: string, password: string) => Promise<boolean>;
//   logout: () => Promise<void>;
//   hasRole: (...roles: UserRole[]) => boolean;
//   hasModule: (module: ModuleAccess) => boolean;
//   isAdmin: boolean;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// function setSessionCookie(token: string) {
//   document.cookie = `authToken=${token}; path=/; SameSite=Lax`;
// }

// function clearSessionCookie() {
//   document.cookie = "authToken=; path=/; max-age=0";
// }

// function normalizeModules(raw: unknown, role: string): ModuleAccess[] {
//   if (role === "admin") return ["interior", "furniture"];
//   if (!Array.isArray(raw)) return [];
//   return raw
//     .map(String)
//     .filter((m): m is ModuleAccess => m === "interior" || m === "furniture");
// }

// async function buildAuthUser(firebaseUser: User): Promise<AuthUser> {
//   const tokenResult = await firebaseUser.getIdTokenResult(true);
//   const claims = tokenResult.claims;

//   let role = ((claims.role as string) || "employee").toLowerCase() as UserRole;
//   let modules = normalizeModules(claims.modules, role);

//   let name =
//     firebaseUser.displayName ||
//     firebaseUser.email?.split("@")[0] ||
//     "User";
//   let avatar: string | undefined;

//   // Super admin fallback
//   if (firebaseUser.email?.toLowerCase() === "admin@akrish.in") {
//     role = "admin";
//     modules = ["interior", "furniture"];
//   }

//   try {
//     const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
//     if (userDoc.exists()) {
//       const data = userDoc.data();
//       name = data.name || name;
//       avatar = data.avatar;

//       // Prefer Firestore profile for role & modules (set when admin creates staff)
//       if (data.role) {
//         role = String(data.role).toLowerCase() as UserRole;
//       }
//       if (data.modules || data.role === "admin") {
//         modules = normalizeModules(data.modules, role);
//       }

//       // Inactive users should not stay signed in as staff
//       if (String(data.status || "Active").toLowerCase() === "inactive") {
//         throw new Error("Account is inactive");
//       }
//     }
//   } catch (err) {
//     if (err instanceof Error && err.message === "Account is inactive") {
//       throw err;
//     }
//     console.warn("Could not fetch user profile:", err);
//   }

//   return {
//     id: firebaseUser.uid,
//     name,
//     email: firebaseUser.email || "",
//     role,
//     modules: role === "admin" ? ["interior", "furniture"] : modules,
//     avatar,
//   };
// }

// export function AuthProvider({ children }: { children: ReactNode }) {
//   const [user, setUser] = useState<AuthUser | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
//       if (firebaseUser) {
//         try {
//           const authUser = await buildAuthUser(firebaseUser);
//           setUser(authUser);

//           const token = await firebaseUser.getIdToken();
//           setSessionCookie(token);
//         } catch (err) {
//           console.error("Failed to build auth user:", err);
//           await signOut(auth);
//           setUser(null);
//           clearSessionCookie();
//         }
//       } else {
//         setUser(null);
//         clearSessionCookie();
//       }
//       setIsLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   const login = async (email: string, password: string): Promise<boolean> => {
//     try {
//       const result = await signInWithEmailAndPassword(auth, email, password);
//       const authUser = await buildAuthUser(result.user);
//       setUser(authUser);

//       const token = await result.user.getIdToken();
//       setSessionCookie(token);

//       return true;
//     } catch (err: unknown) {
//       console.error("Login error:", err);
//       return false;
//     }
//   };

//   const logout = async () => {
//     await signOut(auth);
//     setUser(null);
//     clearSessionCookie();
//   };

//   const hasRole = (...roles: UserRole[]) => {
//     if (!user) return false;
//     return roles.includes(user.role);
//   };

//   const hasModule = (module: ModuleAccess) => {
//     if (!user) return false;
//     if (user.role === "admin") return true;
//     return user.modules.includes(module);
//   };

//   const value = useMemo<AuthContextType>(
//     () => ({
//       user,
//       isAuthenticated: Boolean(user),
//       isLoading,
//       login,
//       logout,
//       hasRole,
//       hasModule,
//       isAdmin: user?.role === "admin",
//     }),
//     [user, isLoading]
//   );

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used inside an AuthProvider");
//   }
//   return context;
// }

// export default AuthContext;


// "use client";

// import {
//   createContext,
//   useContext,
//   useEffect,
//   useMemo,
//   useState,
//   type ReactNode,
// } from "react";
// import {
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
//   type User,
// } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/core/config/firebaseClient";

// export type UserRole =
//   | "admin"
//   | "manager"
//   | "sales"
//   | "designer"
//   | "accountant"
//   | "hr"
//   | "employee";

// export type ModuleAccess = "interior" | "furniture";

// export interface AuthUser {
//   id: string;
//   name: string;
//   email: string;
//   role: UserRole;
//   modules: ModuleAccess[];
//   avatar?: string;
// }

// interface AuthContextType {
//   user: AuthUser | null;
//   isAuthenticated: boolean;
//   isLoading: boolean;
//   login: (email: string, password: string) => Promise<boolean>;
//   logout: () => Promise<void>;
//   hasRole: (...roles: UserRole[]) => boolean;
//   hasModule: (module: ModuleAccess) => boolean;
//   isAdmin: boolean;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// const STAFF_COOKIE_NAME = "erpAuthToken";

// function setStaffSessionCookie(token: string) {
//   // This cookie is intentionally different from the website's customer session.
//   document.cookie =
//     `${STAFF_COOKIE_NAME}=${encodeURIComponent(token)}; ` +
//     "Path=/; SameSite=Lax; Secure";
// }

// function clearStaffSessionCookie() {
//   document.cookie =
//     `${STAFF_COOKIE_NAME}=; Path=/; Max-Age=0; SameSite=Lax; Secure`;
// }

// function normalizeModules(raw: unknown, role: string): ModuleAccess[] {
//   if (role === "admin") {
//     return ["interior", "furniture"];
//   }

//   if (!Array.isArray(raw)) {
//     return [];
//   }

//   return Array.from(
//     new Set(
//       raw.filter(
//         (module): module is ModuleAccess =>
//           module === "interior" || module === "furniture"
//       )
//     )
//   );
// }

// const isSupportedRole = (value: string): value is UserRole =>
//   [
//     "admin",
//     "manager",
//     "sales",
//     "designer",
//     "accountant",
//     "hr",
//     "employee",
//   ].includes(value);

// async function buildAuthUser(firebaseUser: User): Promise<AuthUser> {
//   const email = (firebaseUser.email || "").toLowerCase();
//   const isSuperAdmin = email === "admin@akrish.in";

//   const userRef = doc(db, "users", firebaseUser.uid);
//   const userSnap = await getDoc(userRef);

//   // Only the explicitly configured super-admin fallback may lack a staff
//   // profile document. Other users must be provisioned as staff.
//   if (!userSnap.exists() && !isSuperAdmin) {
//     throw new Error("This account is not registered as ERP staff.");
//   }

//   const data = userSnap.exists() ? userSnap.data() : {};

//   if (String(data.status || "Active").toLowerCase() !== "active") {
//     throw new Error("Your staff account is inactive.");
//   }

//   const tokenResult = await firebaseUser.getIdTokenResult(true);
//   const claims = tokenResult.claims;

//   let roleValue = String(
//     data.role || claims.role || (isSuperAdmin ? "admin" : "")
//   ).toLowerCase();

//   if (isSuperAdmin) {
//     roleValue = "admin";
//   }

//   if (!isSupportedRole(roleValue)) {
//     throw new Error("Your account does not have a valid staff role.");
//   }

//   const role: UserRole = roleValue;

//   const modules = normalizeModules(
//     data.modules ?? claims.modules,
//     role
//   );

//   if (role !== "admin" && modules.length === 0) {
//     throw new Error(
//       "No ERP modules have been assigned to this staff account."
//     );
//   }

//   const name =
//     String(data.name || "").trim() ||
//     firebaseUser.displayName ||
//     email.split("@")[0] ||
//     "Staff";

//   const avatar =
//     typeof data.avatar === "string" ? data.avatar : undefined;

//   return {
//     id: firebaseUser.uid,
//     name,
//     email,
//     role,
//     modules: role === "admin"
//       ? ["interior", "furniture"]
//       : modules,
//     avatar,
//   };
// }

// export function AuthProvider({ children }: { children: ReactNode }) {
//   const [user, setUser] = useState<AuthUser | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     let active = true;

//     const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
//       if (!active) {
//         return;
//       }

//       if (!firebaseUser) {
//         setUser(null);
//         clearStaffSessionCookie();
//         setIsLoading(false);
//         return;
//       }

//       try {
//         const authUser = await buildAuthUser(firebaseUser);

//         if (!active) {
//           return;
//         }

//         const token = await firebaseUser.getIdToken();

//         setUser(authUser);
//         setStaffSessionCookie(token);
//       } catch (error) {
//         console.error("ERP authentication validation failed:", error);

//         await signOut(auth);

//         if (active) {
//           setUser(null);
//           clearStaffSessionCookie();
//         }
//       } finally {
//         if (active) {
//           setIsLoading(false);
//         }
//       }
//     });

//     return () => {
//       active = false;
//       unsubscribe();
//     };
//   }, []);

//   const login = async (
//     email: string,
//     password: string
//   ): Promise<boolean> => {
//     try {
//       const result = await signInWithEmailAndPassword(
//         auth,
//         email.trim().toLowerCase(),
//         password
//       );

//       const authUser = await buildAuthUser(result.user);
//       const token = await result.user.getIdToken();

//       setUser(authUser);
//       setStaffSessionCookie(token);

//       return true;
//     } catch (error) {
//       console.error("ERP login failed:", error);

//       // Do not leave a customer or unconfigured account signed in to ERP.
//       try {
//         await signOut(auth);
//       } catch (signOutError) {
//         console.error("Failed to clear ERP auth state:", signOutError);
//       }

//       setUser(null);
//       clearStaffSessionCookie();

//       return false;
//     }
//   };

//   const logout = async () => {
//     try {
//       await signOut(auth);
//     } finally {
//       setUser(null);
//       clearStaffSessionCookie();
//     }
//   };

//   const hasRole = (...roles: UserRole[]) => {
//     return Boolean(user && roles.includes(user.role));
//   };

//   const hasModule = (module: ModuleAccess) => {
//     if (!user) {
//       return false;
//     }

//     if (user.role === "admin") {
//       return true;
//     }

//     return user.modules.includes(module);
//   };

//   const value = useMemo<AuthContextType>(
//     () => ({
//       user,
//       isAuthenticated: Boolean(user),
//       isLoading,
//       login,
//       logout,
//       hasRole,
//       hasModule,
//       isAdmin: user?.role === "admin",
//     }),
//     [user, isLoading]
//   );

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   const context = useContext(AuthContext);

//   if (!context) {
//     throw new Error("useAuth must be used inside an AuthProvider");
//   }

//   return context;
// }

// export default AuthContext;


"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/core/config/firebaseClient";

export type UserRole =
  | "admin"
  | "manager"
  | "sales"
  | "designer"
  | "accountant"
  | "hr"
  | "employee";

export type ModuleAccess = "interior" | "furniture";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  modules: ModuleAccess[];
  avatar?: string;
}

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  hasRole: (...roles: UserRole[]) => boolean;
  hasModule: (module: ModuleAccess) => boolean;
  isAdmin: boolean;
  lastError: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STAFF_COOKIE_NAME = "erpAuthToken";

function setStaffSessionCookie(token: string) {
  document.cookie =
    `${STAFF_COOKIE_NAME}=${encodeURIComponent(token)}; ` +
    "Path=/; SameSite=Lax; Secure";
}

function clearStaffSessionCookie() {
  document.cookie =
    `${STAFF_COOKIE_NAME}=; Path=/; Max-Age=0; SameSite=Lax; Secure`;
}

function normalizeModules(raw: unknown, role: string): ModuleAccess[] {
  if (role === "admin") return ["interior", "furniture"];
  if (!Array.isArray(raw)) return [];
  return Array.from(
    new Set(
      raw.filter(
        (module): module is ModuleAccess =>
          module === "interior" || module === "furniture"
      )
    )
  );
}

const isSupportedRole = (value: string): value is UserRole =>
  [
    "admin",
    "manager",
    "sales",
    "designer",
    "accountant",
    "hr",
    "employee",
  ].includes(value);

async function buildAuthUser(firebaseUser: User): Promise<AuthUser> {
  const email = (firebaseUser.email || "").toLowerCase();
  const isSuperAdmin = email === "admin@akrish.in";

  const userRef = doc(db, "users", firebaseUser.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists() && !isSuperAdmin) {
    throw new Error(
      "This account is not registered as ERP staff. Use the website customer login instead."
    );
  }

  const data = userSnap.exists() ? userSnap.data() : {};

  if (String(data.status || "Active").toLowerCase() !== "active") {
    throw new Error("Your staff account is inactive.");
  }

  const tokenResult = await firebaseUser.getIdTokenResult(true);
  const claims = tokenResult.claims;

  let roleValue = String(
    data.role || claims.role || (isSuperAdmin ? "admin" : "")
  ).toLowerCase();

  if (isSuperAdmin) roleValue = "admin";

  if (!isSupportedRole(roleValue)) {
    throw new Error("Your account does not have a valid staff role.");
  }

  const role: UserRole = roleValue;
  const modules = normalizeModules(data.modules ?? claims.modules, role);

  if (role !== "admin" && modules.length === 0) {
    throw new Error(
      "No ERP modules have been assigned to this staff account."
    );
  }

  const name =
    String(data.name || "").trim() ||
    firebaseUser.displayName ||
    email.split("@")[0] ||
    "Staff";

  const avatar =
    typeof data.avatar === "string" ? data.avatar : undefined;

  return {
    id: firebaseUser.uid,
    name,
    email,
    role,
    modules: role === "admin" ? ["interior", "furniture"] : modules,
    avatar,
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lastError, setLastError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!active) return;

      if (!firebaseUser) {
        setUser(null);
        clearStaffSessionCookie();
        setIsLoading(false);
        return;
      }

      try {
        const authUser = await buildAuthUser(firebaseUser);
        if (!active) return;
        const token = await firebaseUser.getIdToken();
        setUser(authUser);
        setStaffSessionCookie(token);
        setLastError(null);
      } catch (error) {
        console.error("ERP authentication validation failed:", error);
        await signOut(auth);
        if (active) {
          setUser(null);
          clearStaffSessionCookie();
        }
      } finally {
        if (active) setIsLoading(false);
      }
    });

    return () => {
      active = false;
      unsubscribe();
    };
  }, []);

  const login = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    setLastError(null);
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        email.trim().toLowerCase(),
        password
      );

      const authUser = await buildAuthUser(result.user);
      const token = await result.user.getIdToken();

      setUser(authUser);
      setStaffSessionCookie(token);
      return true;
    } catch (error) {
      console.error("ERP login failed:", error);

      const message =
        error instanceof Error
          ? error.message
          : "Unable to sign in.";

      // Firebase auth errors → generic credentials message
      const code =
        error && typeof error === "object" && "code" in error
          ? String((error as { code: string }).code)
          : "";

      if (
        code === "auth/invalid-credential" ||
        code === "auth/wrong-password" ||
        code === "auth/user-not-found" ||
        code === "auth/invalid-email" ||
        code === "auth/too-many-requests"
      ) {
        setLastError("Invalid email or password.");
      } else {
        setLastError(message);
      }

      try {
        await signOut(auth);
      } catch (signOutError) {
        console.error("Failed to clear ERP auth state:", signOutError);
      }

      setUser(null);
      clearStaffSessionCookie();
      return false;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } finally {
      setUser(null);
      clearStaffSessionCookie();
      setLastError(null);
    }
  };

  const hasRole = (...roles: UserRole[]) =>
    Boolean(user && roles.includes(user.role));

  const hasModule = (module: ModuleAccess) => {
    if (!user) return false;
    if (user.role === "admin") return true;
    return user.modules.includes(module);
  };

  const value = useMemo<AuthContextType>(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isLoading,
      login,
      logout,
      hasRole,
      hasModule,
      isAdmin: user?.role === "admin",
      lastError,
    }),
    [user, isLoading, lastError]
  );

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside an AuthProvider");
  }
  return context;
}

export default AuthContext;
