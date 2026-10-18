// import {
//   collection,
//   getDocs,
//   setDoc,
//   doc,
//   query,
//   where,
//   serverTimestamp,
//   Timestamp,
// } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";
// import { getAllEmployees } from "./employeeService";

// export type InteriorAttendance = {
//   id: string;
//   date?: string;
//   employeeDocId?: string;
//   employeeId?: string;
//   name?: string;
//   department?: string;
//   designation?: string;
//   checkIn?: string;
//   checkOut?: string;
//   status?: string;
//   workHours?: string;
//   overtime?: string;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// const PRIMARY = "interior_attendance";
// const FALLBACK = "attendance";

// export async function getAttendanceByDate(
//   date: string
// ): Promise<InteriorAttendance[]> {
//   try {
//     const snap = await getDocs(
//       query(collection(db, PRIMARY), where("date", "==", date))
//     );
//     if (!snap.empty) {
//       return snap.docs.map(
//         (d) => ({ id: d.id, ...d.data() } as InteriorAttendance)
//       );
//     }
//   } catch {
//     /* try fallback */
//   }

//   try {
//     const snap = await getDocs(
//       query(collection(db, FALLBACK), where("date", "==", date))
//     );
//     if (!snap.empty) {
//       return snap.docs.map(
//         (d) => ({ id: d.id, ...d.data() } as InteriorAttendance)
//       );
//     }
//   } catch {
//     /* ignore */
//   }

//   // Seed rows from employees if no attendance for this date
//   const employees = await getAllEmployees();
//   return employees.map((e) => ({
//     id: `${date}_${e.id}`,
//     date,
//     employeeDocId: e.id,
//     employeeId: e.employeeId || e.id,
//     name: e.name || "Unknown",
//     department: e.department || "Other",
//     designation: e.designation || "—",
//     checkIn: "--",
//     checkOut: "--",
//     status: "Absent",
//     workHours: "0h",
//     overtime: "0m",
//   }));
// }

// export async function upsertAttendance(
//   record: Omit<InteriorAttendance, "createdAt" | "updatedAt">
// ): Promise<void> {
//   const id =
//     record.id ||
//     `${record.date || "na"}_${record.employeeDocId || record.employeeId}`;

//   try {
//     await setDoc(
//       doc(db, PRIMARY, id),
//       {
//         ...record,
//         id,
//         updatedAt: serverTimestamp(),
//         createdAt: serverTimestamp(),
//       },
//       { merge: true }
//     );
//   } catch {
//     await setDoc(
//       doc(db, FALLBACK, id),
//       {
//         ...record,
//         id,
//         updatedAt: serverTimestamp(),
//         createdAt: serverTimestamp(),
//       },
//       { merge: true }
//     );
//   }
// }

// /** All saved attendance rows (history). Does not seed empty days. */
// export async function getAllAttendanceHistory(): Promise<InteriorAttendance[]> {
//   const map = new Map<string, InteriorAttendance>();

//   async function pull(col: string) {
//     try {
//       const snap = await getDocs(collection(db, col));
//       for (const d of snap.docs) {
//         const row = { id: d.id, ...d.data() } as InteriorAttendance;
//         if (!row.date) continue;
//         map.set(d.id, row);
//       }
//     } catch {
//       /* ignore */
//     }
//   }

//   await pull(PRIMARY);
//   if (map.size === 0) await pull(FALLBACK);

//   return Array.from(map.values()).sort((a, b) => {
//     const da = a.date || "";
//     const db_ = b.date || "";
//     if (da !== db_) return db_.localeCompare(da);
//     return (a.name || "").localeCompare(b.name || "");
//   });
// }

// /** History for one employee (by employeeId or employeeDocId). */
// export async function getAttendanceHistoryForEmployee(
//   employeeKey: string
// ): Promise<InteriorAttendance[]> {
//   const all = await getAllAttendanceHistory();
//   const key = employeeKey.toLowerCase();
//   return all.filter(
//     (r) =>
//       (r.employeeId || "").toLowerCase() === key ||
//       (r.employeeDocId || "").toLowerCase() === key ||
//       (r.id || "").toLowerCase().includes(key)
//   );
// }

// import {
//   collection,
//   getDocs,
//   setDoc,
//   doc,
//   query,
//   where,
//   serverTimestamp,
//   Timestamp,
// } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";
// import { getAllEmployees } from "./employeeService";

// export type InteriorAttendance = {
//   id: string;
//   date?: string;
//   employeeDocId?: string;
//   employeeId?: string;
//   name?: string;
//   department?: string;
//   designation?: string;
//   checkIn?: string;
//   checkOut?: string;
//   status?: string;
//   workHours?: string;
//   overtime?: string;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// const PRIMARY = "interior_attendance";
// const FALLBACK = "attendance";

// /** Empty / default row for a staff member on a given date → Absent */
// function seedAbsentRow(
//   date: string,
//   e: {
//     id: string;
//     employeeId?: string;
//     name?: string;
//     department?: string;
//     designation?: string;
//   }
// ): InteriorAttendance {
//   return {
//     id: `${date}_${e.id}`,
//     date,
//     employeeDocId: e.id,
//     employeeId: e.employeeId || e.id,
//     name: e.name || "Unknown",
//     department: e.department || "Other",
//     designation: e.designation || "—",
//     checkIn: "--",
//     checkOut: "--",
//     status: "Absent",
//     workHours: "0h",
//     overtime: "0m",
//   };
// }

// /**
//  * Attendance for one calendar day.
//  * - If Firestore has rows for that date → return them (merge any missing employees as Absent).
//  * - If no rows for that date → every employee is Absent (fresh day).
//  * Yesterday’s Present is never carried over.
//  */
// export async function getAttendanceByDate(
//   date: string
// ): Promise<InteriorAttendance[]> {
//   const employees = await getAllEmployees();

//   async function fetchForDate(col: string): Promise<InteriorAttendance[]> {
//     try {
//       const snap = await getDocs(
//         query(collection(db, col), where("date", "==", date))
//       );
//       return snap.docs.map(
//         (d) => ({ id: d.id, ...d.data() } as InteriorAttendance)
//       );
//     } catch {
//       return [];
//     }
//   }

//   let existing = await fetchForDate(PRIMARY);
//   if (existing.length === 0) {
//     existing = await fetchForDate(FALLBACK);
//   }

//   // No records for this date → brand-new day: all Absent
//   if (existing.length === 0) {
//     return employees.map((e) => seedAbsentRow(date, e));
//   }

//   // Merge: employees without a row for this date still show as Absent
//   const byEmployeeDoc = new Map<string, InteriorAttendance>();
//   const byEmployeeId = new Map<string, InteriorAttendance>();

//   for (const row of existing) {
//     if (row.employeeDocId) byEmployeeDoc.set(row.employeeDocId, row);
//     if (row.employeeId) byEmployeeId.set(String(row.employeeId), row);
//   }

//   return employees.map((e) => {
//     const found =
//       byEmployeeDoc.get(e.id) ||
//       byEmployeeId.get(String(e.employeeId || e.id));

//     if (found) {
//       return {
//         ...found,
//         id: found.id || `${date}_${e.id}`,
//         date: found.date || date,
//         employeeDocId: found.employeeDocId || e.id,
//         employeeId: found.employeeId || e.employeeId || e.id,
//         name: found.name || e.name || "Unknown",
//         department: found.department || e.department || "Other",
//         designation: found.designation || e.designation || "—",
//       };
//     }

//     return seedAbsentRow(date, e);
//   });
// }

// export async function upsertAttendance(
//   record: Omit<InteriorAttendance, "createdAt" | "updatedAt">
// ): Promise<void> {
//   const date = record.date || new Date().toISOString().slice(0, 10);
//   const id =
//     record.id ||
//     `${date}_${record.employeeDocId || record.employeeId || "unknown"}`;

//   const payload = {
//     ...record,
//     id,
//     date,
//     updatedAt: serverTimestamp(),
//     createdAt: serverTimestamp(),
//   };

//   try {
//     await setDoc(doc(db, PRIMARY, id), payload, { merge: true });
//   } catch {
//     await setDoc(doc(db, FALLBACK, id), payload, { merge: true });
//   }
// }

// /** All saved attendance rows (history). Does not seed empty days. */
// export async function getAllAttendanceHistory(): Promise<InteriorAttendance[]> {
//   const map = new Map<string, InteriorAttendance>();

//   async function pull(col: string) {
//     try {
//       const snap = await getDocs(collection(db, col));
//       for (const d of snap.docs) {
//         const row = { id: d.id, ...d.data() } as InteriorAttendance;
//         if (!row.date) continue;
//         map.set(d.id, row);
//       }
//     } catch {
//       /* ignore */
//     }
//   }

//   await pull(PRIMARY);
//   if (map.size === 0) await pull(FALLBACK);

//   return Array.from(map.values()).sort((a, b) => {
//     const da = a.date || "";
//     const dbDate = b.date || "";
//     if (da !== dbDate) return dbDate.localeCompare(da);
//     return (a.name || "").localeCompare(b.name || "");
//   });
// }

// export async function getAttendanceHistoryForEmployee(
//   employeeKey: string
// ): Promise<InteriorAttendance[]> {
//   const all = await getAllAttendanceHistory();
//   const key = employeeKey.toLowerCase();
//   return all.filter(
//     (r) =>
//       (r.employeeId || "").toLowerCase() === key ||
//       (r.employeeDocId || "").toLowerCase() === key ||
//       (r.id || "").toLowerCase().includes(key)
//   );
// }

// const HOLIDAYS = "interior_holidays";

// export type InteriorHoliday = {
//   id: string; // same as date YYYY-MM-DD
//   date: string;
//   name?: string;
//   note?: string;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// export async function getHoliday(
//   date: string
// ): Promise<InteriorHoliday | null> {
//   try {
//     const snap = await getDocs(
//       query(collection(db, HOLIDAYS), where("date", "==", date))
//     );
//     if (snap.empty) return null;
//     const d = snap.docs[0]!;
//     return { id: d.id, ...d.data() } as InteriorHoliday;
//   } catch {
//     return null;
//   }
// }

// export async function markHoliday(
//   date: string,
//   name = "Holiday",
//   note = ""
// ): Promise<void> {
//   await setDoc(
//     doc(db, HOLIDAYS, date),
//     {
//       id: date,
//       date,
//       name,
//       note,
//       updatedAt: serverTimestamp(),
//       createdAt: serverTimestamp(),
//     },
//     { merge: true }
//   );
// }

// export async function unmarkHoliday(date: string): Promise<void> {
//   try {
//     const { deleteDoc } = await import("firebase/firestore");
//     await deleteDoc(doc(db, HOLIDAYS, date));
//   } catch {
//     await setDoc(
//       doc(db, HOLIDAYS, date),
//       { date, name: "", deleted: true, updatedAt: serverTimestamp() },
//       { merge: true }
//     );
//   }
// }

// export async function getAllHolidays(): Promise<InteriorHoliday[]> {
//   try {
//     const snap = await getDocs(collection(db, HOLIDAYS));
//     return snap.docs
//       .map((d) => ({ id: d.id, ...d.data() } as InteriorHoliday))
//       .filter((h) => h.date && !(h as { deleted?: boolean }).deleted)
//       .sort((a, b) => (b.date || "").localeCompare(a.date || ""));
//   } catch {
//     return [];
//   }
// }

// import {
//   collection,
//   getDocs,
//   setDoc,
//   deleteDoc,
//   doc,
//   query,
//   where,
//   serverTimestamp,
//   Timestamp,
// } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";
// import { getAllEmployees } from "./employeeService";

// export type InteriorAttendance = {
//   id: string;
//   date?: string;
//   employeeDocId?: string;
//   employeeId?: string;
//   name?: string;
//   department?: string;
//   designation?: string;
//   checkIn?: string;
//   checkOut?: string;
//   status?: string;
//   workHours?: string;
//   overtime?: string;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// const PRIMARY = "interior_attendance";
// const FALLBACK = "attendance";
// const HOLIDAYS = "interior_holidays";

// export type InteriorHoliday = {
//   id: string;
//   date: string;
//   name?: string;
//   note?: string;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// /** Default row for one employee on one date */
// function seedRow(
//   date: string,
//   e: {
//     id: string;
//     employeeId?: string;
//     name?: string;
//     department?: string;
//     designation?: string;
//   },
//   status: "Absent" | "Holiday" = "Absent"
// ): InteriorAttendance {
//   return {
//     id: `${date}_${e.id}`,
//     date,
//     employeeDocId: e.id,
//     employeeId: e.employeeId || e.id,
//     name: e.name || "Unknown",
//     department: e.department || "Other",
//     designation: e.designation || "—",
//     checkIn: "--",
//     checkOut: "--",
//     status,
//     workHours: "0h",
//     overtime: "0m",
//   };
// }

// // export async function getHoliday(
// //   date: string
// // ): Promise<InteriorHoliday | null> {
// //   try {
// //     const snap = await getDocs(
// //       query(collection(db, HOLIDAYS), where("date", "==", date))
// //     );
// //     if (snap.empty) return null;
// //     const d = snap.docs[0]!;
// //     const data = d.data() as InteriorHoliday & { deleted?: boolean };
// //     if (data.deleted) return null;
// //     return { id: d.id, ...data };
// //   } catch {
// //     return null;
// //   }
// // }

// export async function getHoliday(
//   date: string
// ): Promise<InteriorHoliday | null> {
//   try {
//     const snap = await getDocs(
//       query(collection(db, HOLIDAYS), where("date", "==", date))
//     );
//     if (snap.empty) return null;

//     const d = snap.docs[0]!;
//     const data = d.data() as {
//       date?: string;
//       name?: string;
//       note?: string;
//       deleted?: boolean;
//       createdAt?: Timestamp | null;
//       updatedAt?: Timestamp | null;
//     };

//     if (data.deleted) return null;

//     const holiday: InteriorHoliday = {
//       id: d.id,
//       date: data.date || date,
//       name: data.name,
//       note: data.note,
//       createdAt: data.createdAt ?? null,
//       updatedAt: data.updatedAt ?? null,
//     };

//     return holiday;
//   } catch {
//     return null;
//   }
// }

// export async function markHoliday(
//   date: string,
//   name = "",
//   note = ""
// ): Promise<void> {
//   await setDoc(
//     doc(db, HOLIDAYS, date),
//     {
//       id: date,
//       date,
//       name,
//       note,
//       updatedAt: serverTimestamp(),
//       createdAt: serverTimestamp(),
//     },
//     { merge: true }
//   );
// }

// export async function unmarkHoliday(date: string): Promise<void> {
//   await deleteDoc(doc(db, HOLIDAYS, date));
// }

// export async function getAllHolidays(): Promise<InteriorHoliday[]> {
//   try {
//     const snap = await getDocs(collection(db, HOLIDAYS));
//     return snap.docs
//       .map((d) => ({ id: d.id, ...d.data() } as InteriorHoliday & { deleted?: boolean }))
//       .filter((h) => h.date && !h.deleted)
//       .sort((a, b) => (b.date || "").localeCompare(a.date || ""));
//   } catch {
//     return [];
//   }
// }

// /**
//  * Attendance for one calendar day.
//  * - No saved rows → all Absent (or Holiday if that date is marked).
//  * - Yesterday is never copied to a new date.
//  * - Missing employees on a partial day still seed as Absent / Holiday.
//  */
// export async function getAttendanceByDate(
//   date: string
// ): Promise<InteriorAttendance[]> {
//   const [employees, holiday] = await Promise.all([
//     getAllEmployees(),
//     getHoliday(date),
//   ]);

//   const defaultStatus: "Absent" | "Holiday" = holiday ? "Holiday" : "Absent";

//   async function fetchForDate(col: string): Promise<InteriorAttendance[]> {
//     try {
//       const snap = await getDocs(
//         query(collection(db, col), where("date", "==", date))
//       );
//       return snap.docs.map(
//         (d) => ({ id: d.id, ...d.data() } as InteriorAttendance)
//       );
//     } catch {
//       return [];
//     }
//   }

//   let existing = await fetchForDate(PRIMARY);
//   if (existing.length === 0) {
//     existing = await fetchForDate(FALLBACK);
//   }

//   if (existing.length === 0) {
//     return employees.map((e) => seedRow(date, e, defaultStatus));
//   }

//   const byEmployeeDoc = new Map<string, InteriorAttendance>();
//   const byEmployeeId = new Map<string, InteriorAttendance>();

//   for (const row of existing) {
//     if (row.employeeDocId) byEmployeeDoc.set(row.employeeDocId, row);
//     if (row.employeeId) byEmployeeId.set(String(row.employeeId), row);
//   }

//   return employees.map((e) => {
//     const found =
//       byEmployeeDoc.get(e.id) ||
//       byEmployeeId.get(String(e.employeeId || e.id));

//     if (found) {
//       return {
//         ...found,
//         id: found.id || `${date}_${e.id}`,
//         date: found.date || date,
//         employeeDocId: found.employeeDocId || e.id,
//         employeeId: found.employeeId || e.employeeId || e.id,
//         name: found.name || e.name || "Unknown",
//         department: found.department || e.department || "Other",
//         designation: found.designation || e.designation || "—",
//       };
//     }

//     return seedRow(date, e, defaultStatus);
//   });
// }

// export async function upsertAttendance(
//   record: Omit<InteriorAttendance, "createdAt" | "updatedAt">
// ): Promise<void> {
//   const date = record.date || new Date().toISOString().slice(0, 10);
//   const id =
//     record.id ||
//     `${date}_${record.employeeDocId || record.employeeId || "unknown"}`;

//   const payload = {
//     ...record,
//     id,
//     date,
//     updatedAt: serverTimestamp(),
//     createdAt: serverTimestamp(),
//   };

//   try {
//     await setDoc(doc(db, PRIMARY, id), payload, { merge: true });
//   } catch {
//     await setDoc(doc(db, FALLBACK, id), payload, { merge: true });
//   }
// }

// /** All saved attendance rows (history). Does not seed empty days. */
// export async function getAllAttendanceHistory(): Promise<InteriorAttendance[]> {
//   const map = new Map<string, InteriorAttendance>();

//   async function pull(col: string) {
//     try {
//       const snap = await getDocs(collection(db, col));
//       for (const d of snap.docs) {
//         const row = { id: d.id, ...d.data() } as InteriorAttendance;
//         if (!row.date) continue;
//         map.set(d.id, row);
//       }
//     } catch {
//       /* ignore */
//     }
//   }

//   await pull(PRIMARY);
//   if (map.size === 0) await pull(FALLBACK);

//   return Array.from(map.values()).sort((a, b) => {
//     const da = a.date || "";
//     const dbDate = b.date || "";
//     if (da !== dbDate) return dbDate.localeCompare(da);
//     return (a.name || "").localeCompare(b.name || "");
//   });
// }

// export async function getAttendanceHistoryForEmployee(
//   employeeKey: string
// ): Promise<InteriorAttendance[]> {
//   const all = await getAllAttendanceHistory();
//   const key = employeeKey.toLowerCase();
//   return all.filter(
//     (r) =>
//       (r.employeeId || "").toLowerCase() === key ||
//       (r.employeeDocId || "").toLowerCase() === key ||
//       (r.id || "").toLowerCase().includes(key)
//   );
// }

// import {
//   collection,
//   getDocs,
//   setDoc,
//   deleteDoc,
//   doc,
//   query,
//   where,
//   serverTimestamp,
//   Timestamp,
// } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";
// import { getAllEmployees } from "./employeeService";

// export type InteriorAttendance = {
//   id: string;
//   date?: string;
//   employeeDocId?: string;
//   employeeId?: string;
//   name?: string;
//   department?: string;
//   designation?: string;
//   checkIn?: string;
//   checkOut?: string;
//   status?: string;
//   workHours?: string;
//   overtime?: string;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// const PRIMARY = "interior_attendance";
// const FALLBACK = "attendance";
// const HOLIDAYS = "interior_holidays";

// export type InteriorHoliday = {
//   id: string;
//   date: string;
//   name?: string;
//   note?: string;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// /** Default row for one employee on one date */
// function seedRow(
//   date: string,
//   e: {
//     id: string;
//     employeeId?: string;
//     name?: string;
//     department?: string;
//     designation?: string;
//   },
//   status: "Absent" | "Holiday" = "Absent"
// ): InteriorAttendance {
//   return {
//     id: `${date}_${e.id}`,
//     date,
//     employeeDocId: e.id,
//     employeeId: e.employeeId || e.id,
//     name: e.name || "Unknown",
//     department: e.department || "Other",
//     designation: e.designation || "—",
//     checkIn: "--",
//     checkOut: "--",
//     status,
//     workHours: "0h",
//     overtime: "0m",
//   };
// }

// /** True if date (YYYY-MM-DD) is strictly before today in local time */
// function isPastDate(date: string): boolean {
//   const today = new Date().toISOString().slice(0, 10);
//   return date < today;
// }

// export async function getHoliday(
//   date: string
// ): Promise<InteriorHoliday | null> {
//   try {
//     const snap = await getDocs(
//       query(collection(db, HOLIDAYS), where("date", "==", date))
//     );
//     if (snap.empty) return null;
//     const d = snap.docs[0]!;
//     const data = d.data() as {
//       date?: string;
//       name?: string;
//       note?: string;
//       deleted?: boolean;
//       createdAt?: Timestamp | null;
//       updatedAt?: Timestamp | null;
//     };
//     if (data.deleted) return null;
//     return {
//       id: d.id,
//       date: data.date || date,
//       name: data.name,
//       note: data.note,
//       createdAt: data.createdAt ?? null,
//       updatedAt: data.updatedAt ?? null,
//     };
//   } catch {
//     return null;
//   }
// }

// export async function markHoliday(
//   date: string,
//   name = "",
//   note = ""
// ): Promise<void> {
//   await setDoc(
//     doc(db, HOLIDAYS, date),
//     {
//       id: date,
//       date,
//       name,
//       note,
//       updatedAt: serverTimestamp(),
//       createdAt: serverTimestamp(),
//     },
//     { merge: true }
//   );
// }

// export async function unmarkHoliday(date: string): Promise<void> {
//   await deleteDoc(doc(db, HOLIDAYS, date));
// }

// export async function getAllHolidays(): Promise<InteriorHoliday[]> {
//   try {
//     const snap = await getDocs(collection(db, HOLIDAYS));
//     return snap.docs
//       .map(
//         (d) =>
//           ({ id: d.id, ...d.data() } as InteriorHoliday & { deleted?: boolean })
//       )
//       .filter((h) => h.date && !h.deleted)
//       .sort((a, b) => (b.date || "").localeCompare(a.date || ""));
//   } catch {
//     return [];
//   }
// }

// /**
//  * Attendance for one calendar day.
//  * - No saved rows → seed Absent (or Holiday).
//  * - For PAST dates that are not holidays: missing employees are
//  *   written to Firestore as Absent so history stays correct.
//  */
// export async function getAttendanceByDate(
//   date: string
// ): Promise<InteriorAttendance[]> {
//   const [employees, holiday] = await Promise.all([
//     getAllEmployees(),
//     getHoliday(date),
//   ]);

//   const defaultStatus: "Absent" | "Holiday" = holiday ? "Holiday" : "Absent";

//   async function fetchForDate(col: string): Promise<InteriorAttendance[]> {
//     try {
//       const snap = await getDocs(
//         query(collection(db, col), where("date", "==", date))
//       );
//       return snap.docs.map(
//         (d) => ({ id: d.id, ...d.data() } as InteriorAttendance)
//       );
//     } catch {
//       return [];
//     }
//   }

//   let existing = await fetchForDate(PRIMARY);
//   if (existing.length === 0) {
//     existing = await fetchForDate(FALLBACK);
//   }

//   const byEmployeeDoc = new Map<string, InteriorAttendance>();
//   const byEmployeeId = new Map<string, InteriorAttendance>();
//   for (const row of existing) {
//     if (row.employeeDocId) byEmployeeDoc.set(row.employeeDocId, row);
//     if (row.employeeId) byEmployeeId.set(String(row.employeeId), row);
//   }

//   const result: InteriorAttendance[] = [];
//   const toPersist: InteriorAttendance[] = [];

//   for (const e of employees) {
//     const found =
//       byEmployeeDoc.get(e.id) ||
//       byEmployeeId.get(String(e.employeeId || e.id));

//     if (found) {
//       result.push({
//         ...found,
//         id: found.id || `${date}_${e.id}`,
//         date: found.date || date,
//         employeeDocId: found.employeeDocId || e.id,
//         employeeId: found.employeeId || e.employeeId || e.id,
//         name: found.name || e.name || "Unknown",
//         department: found.department || e.department || "Other",
//         designation: found.designation || e.designation || "—",
//       });
//     } else {
//       const seeded = seedRow(date, e, defaultStatus);
//       result.push(seeded);

//       // Persist Absent for past days (not holidays) so history is correct
//       if (!holiday && isPastDate(date) && defaultStatus === "Absent") {
//         toPersist.push(seeded);
//       }
//     }
//   }

//   // Write missing past-day Absent rows in background (do not block UI)
//   if (toPersist.length > 0) {
//     void Promise.all(
//       toPersist.map((row) =>
//         upsertAttendance({
//           id: row.id,
//           date: row.date,
//           employeeDocId: row.employeeDocId,
//           employeeId: row.employeeId,
//           name: row.name,
//           department: row.department,
//           designation: row.designation,
//           checkIn: row.checkIn,
//           checkOut: row.checkOut,
//           status: "Absent",
//           workHours: row.workHours,
//           overtime: row.overtime,
//         }).catch((err) =>
//           console.error("[attendance] auto-persist Absent failed", row.id, err)
//         )
//       )
//     );
//   }

//   return result;
// }

// export async function upsertAttendance(
//   record: Omit<InteriorAttendance, "createdAt" | "updatedAt">
// ): Promise<void> {
//   const date = record.date || new Date().toISOString().slice(0, 10);
//   const id =
//     record.id ||
//     `${date}_${record.employeeDocId || record.employeeId || "unknown"}`;

//   const payload = {
//     ...record,
//     id,
//     date,
//     updatedAt: serverTimestamp(),
//     createdAt: serverTimestamp(),
//   };

//   try {
//     await setDoc(doc(db, PRIMARY, id), payload, { merge: true });
//   } catch {
//     await setDoc(doc(db, FALLBACK, id), payload, { merge: true });
//   }
// }

// /** All saved attendance rows (history). Does not seed empty days. */
// export async function getAllAttendanceHistory(): Promise<InteriorAttendance[]> {
//   const map = new Map<string, InteriorAttendance>();

//   async function pull(col: string) {
//     try {
//       const snap = await getDocs(collection(db, col));
//       for (const d of snap.docs) {
//         const row = { id: d.id, ...d.data() } as InteriorAttendance;
//         if (!row.date) continue;
//         map.set(d.id, row);
//       }
//     } catch {
//       /* ignore */
//     }
//   }

//   await pull(PRIMARY);
//   if (map.size === 0) await pull(FALLBACK);

//   return Array.from(map.values()).sort((a, b) => {
//     const da = a.date || "";
//     const dbDate = b.date || "";
//     if (da !== dbDate) return dbDate.localeCompare(da);
//     return (a.name || "").localeCompare(b.name || "");
//   });
// }

// export async function getAttendanceHistoryForEmployee(
//   employeeKey: string
// ): Promise<InteriorAttendance[]> {
//   const all = await getAllAttendanceHistory();
//   const key = employeeKey.toLowerCase();
//   return all.filter(
//     (r) =>
//       (r.employeeId || "").toLowerCase() === key ||
//       (r.employeeDocId || "").toLowerCase() === key ||
//       (r.id || "").toLowerCase().includes(key)
//   );
// }


// /**
//  * For a given month: any past day that is not a holiday and has no
//  * attendance row is written as Absent for every active employee.
//  * Safe to call multiple times (merge).
//  */
// export async function ensurePastAbsentsForMonth(
//   year: number,
//   monthIndex: number // 0–11
// ): Promise<number> {
//   const employees = await getAllEmployees();
//   if (employees.length === 0) return 0;

//   const today = new Date().toISOString().slice(0, 10);
//   const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
//   let written = 0;

//   for (let day = 1; day <= daysInMonth; day++) {
//     const date = `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
//     if (date >= today) continue; // only past days

//     const holiday = await getHoliday(date);
//     if (holiday) continue;

//     // existing rows for this date
//     let existing: InteriorAttendance[] = [];
//     try {
//       const snap = await getDocs(
//         query(collection(db, PRIMARY), where("date", "==", date))
//       );
//       existing = snap.docs.map(
//         (d) => ({ id: d.id, ...d.data() } as InteriorAttendance)
//       );
//     } catch {
//       /* ignore */
//     }

//     const byDoc = new Set(existing.map((r) => r.employeeDocId).filter(Boolean));
//     const byId = new Set(
//       existing.map((r) => String(r.employeeId || "")).filter(Boolean)
//     );

//     for (const e of employees) {
//       if (byDoc.has(e.id) || byId.has(String(e.employeeId || e.id))) {
//         continue;
//       }
//       const row = seedRow(date, e, "Absent");
//       await upsertAttendance({
//         id: row.id,
//         date: row.date,
//         employeeDocId: row.employeeDocId,
//         employeeId: row.employeeId,
//         name: row.name,
//         department: row.department,
//         designation: row.designation,
//         checkIn: "--",
//         checkOut: "--",
//         status: "Absent",
//         workHours: "0h",
//         overtime: "0m",
//       });
//       written++;
//     }
//   }

//   return written;
// }


// import {
//   collection,
//   getDocs,
//   setDoc,
//   deleteDoc,
//   doc,
//   query,
//   where,
//   serverTimestamp,
//   Timestamp,
// } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";
// import { getAllEmployees } from "./employeeService";

// export type InteriorAttendance = {
//   id: string;
//   date?: string;
//   employeeDocId?: string;
//   employeeId?: string;
//   name?: string;
//   department?: string;
//   designation?: string;
//   checkIn?: string;
//   checkOut?: string;
//   status?: string;
//   workHours?: string;
//   overtime?: string;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// const PRIMARY = "interior_attendance";
// const FALLBACK = "attendance";
// const HOLIDAYS = "interior_holidays";

// export type InteriorHoliday = {
//   id: string;
//   date: string;
//   name?: string;
//   note?: string;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// /** Default row for one employee on one date */
// function seedRow(
//   date: string,
//   e: {
//     id: string;
//     employeeId?: string;
//     name?: string;
//     department?: string;
//     designation?: string;
//   },
//   status: "Absent" | "Holiday" = "Absent"
// ): InteriorAttendance {
//   return {
//     id: `${date}_${e.id}`,
//     date,
//     employeeDocId: e.id,
//     employeeId: e.employeeId || e.id,
//     name: e.name || "Unknown",
//     department: e.department || "Other",
//     designation: e.designation || "—",
//     checkIn: "--",
//     checkOut: "--",
//     status,
//     workHours: "0h",
//     overtime: "0m",
//   };
// }

// /** True if date (YYYY-MM-DD) is strictly before today in local time */
// function isPastDate(date: string): boolean {
//   const today = new Date().toISOString().slice(0, 10);
//   return date < today;
// }

// export async function getHoliday(
//   date: string
// ): Promise<InteriorHoliday | null> {
//   try {
//     const snap = await getDocs(
//       query(collection(db, HOLIDAYS), where("date", "==", date))
//     );
//     if (snap.empty) return null;
//     const d = snap.docs[0]!;
//     const data = d.data() as {
//       date?: string;
//       name?: string;
//       note?: string;
//       deleted?: boolean;
//       createdAt?: Timestamp | null;
//       updatedAt?: Timestamp | null;
//     };
//     if (data.deleted) return null;
//     return {
//       id: d.id,
//       date: data.date || date,
//       name: data.name,
//       note: data.note,
//       createdAt: data.createdAt ?? null,
//       updatedAt: data.updatedAt ?? null,
//     };
//   } catch {
//     return null;
//   }
// }

// export async function markHoliday(
//   date: string,
//   name = "",
//   note = ""
// ): Promise<void> {
//   await setDoc(
//     doc(db, HOLIDAYS, date),
//     {
//       id: date,
//       date,
//       name,
//       note,
//       updatedAt: serverTimestamp(),
//       createdAt: serverTimestamp(),
//     },
//     { merge: true }
//   );
// }

// export async function unmarkHoliday(date: string): Promise<void> {
//   await deleteDoc(doc(db, HOLIDAYS, date));
// }

// export async function getAllHolidays(): Promise<InteriorHoliday[]> {
//   try {
//     const snap = await getDocs(collection(db, HOLIDAYS));
//     return snap.docs
//       .map(
//         (d) =>
//           ({ id: d.id, ...d.data() } as InteriorHoliday & { deleted?: boolean })
//       )
//       .filter((h) => h.date && !h.deleted)
//       .sort((a, b) => (b.date || "").localeCompare(a.date || ""));
//   } catch {
//     return [];
//   }
// }

// /**
//  * Attendance for one calendar day.
//  * - No saved rows → seed Absent (or Holiday).
//  * - For PAST dates that are not holidays: missing employees are
//  *   written to Firestore as Absent so history stays correct.
//  */
// export async function getAttendanceByDate(
//   date: string
// ): Promise<InteriorAttendance[]> {
//   const [employees, holiday] = await Promise.all([
//     getAllEmployees(),
//     getHoliday(date),
//   ]);

//   const defaultStatus: "Absent" | "Holiday" = holiday ? "Holiday" : "Absent";

//   async function fetchForDate(col: string): Promise<InteriorAttendance[]> {
//     try {
//       const snap = await getDocs(
//         query(collection(db, col), where("date", "==", date))
//       );
//       return snap.docs.map(
//         (d) => ({ id: d.id, ...d.data() } as InteriorAttendance)
//       );
//     } catch {
//       return [];
//     }
//   }

//   let existing = await fetchForDate(PRIMARY);
//   if (existing.length === 0) {
//     existing = await fetchForDate(FALLBACK);
//   }

//   const byEmployeeDoc = new Map<string, InteriorAttendance>();
//   const byEmployeeId = new Map<string, InteriorAttendance>();
//   for (const row of existing) {
//     if (row.employeeDocId) byEmployeeDoc.set(row.employeeDocId, row);
//     if (row.employeeId) byEmployeeId.set(String(row.employeeId), row);
//   }

//   const result: InteriorAttendance[] = [];
//   const toPersist: InteriorAttendance[] = [];

//   for (const e of employees) {
//     const found =
//       byEmployeeDoc.get(e.id) ||
//       byEmployeeId.get(String(e.employeeId || e.id));

//     if (found) {
//       result.push({
//         ...found,
//         id: found.id || `${date}_${e.id}`,
//         date: found.date || date,
//         employeeDocId: found.employeeDocId || e.id,
//         employeeId: found.employeeId || e.employeeId || e.id,
//         name: found.name || e.name || "Unknown",
//         department: found.department || e.department || "Other",
//         designation: found.designation || e.designation || "—",
//       });
//     } else {
//       const seeded = seedRow(date, e, defaultStatus);
//       result.push(seeded);

//       if (!holiday && isPastDate(date) && defaultStatus === "Absent") {
//         toPersist.push(seeded);
//       }
//     }
//   }

//   if (toPersist.length > 0) {
//     void Promise.all(
//       toPersist.map((row) =>
//         upsertAttendance({
//           id: row.id,
//           date: row.date,
//           employeeDocId: row.employeeDocId,
//           employeeId: row.employeeId,
//           name: row.name,
//           department: row.department,
//           designation: row.designation,
//           checkIn: row.checkIn,
//           checkOut: row.checkOut,
//           status: "Absent",
//           workHours: row.workHours,
//           overtime: row.overtime,
//         }).catch((err) =>
//           console.error("[attendance] auto-persist Absent failed", row.id, err)
//         )
//       )
//     );
//   }

//   return result;
// }

// export async function upsertAttendance(
//   record: Omit<InteriorAttendance, "createdAt" | "updatedAt">
// ): Promise<void> {
//   const date = record.date || new Date().toISOString().slice(0, 10);
//   const id =
//     record.id ||
//     `${date}_${record.employeeDocId || record.employeeId || "unknown"}`;

//   const payload = {
//     ...record,
//     id,
//     date,
//     updatedAt: serverTimestamp(),
//     createdAt: serverTimestamp(),
//   };

//   try {
//     await setDoc(doc(db, PRIMARY, id), payload, { merge: true });
//   } catch {
//     await setDoc(doc(db, FALLBACK, id), payload, { merge: true });
//   }
// }

// /** All saved attendance rows (history). Does not seed empty days. */
// export async function getAllAttendanceHistory(): Promise<InteriorAttendance[]> {
//   const map = new Map<string, InteriorAttendance>();

//   async function pull(col: string) {
//     try {
//       const snap = await getDocs(collection(db, col));
//       for (const d of snap.docs) {
//         const row = { id: d.id, ...d.data() } as InteriorAttendance;
//         if (!row.date) continue;
//         map.set(d.id, row);
//       }
//     } catch {
//       /* ignore */
//     }
//   }

//   await pull(PRIMARY);
//   if (map.size === 0) await pull(FALLBACK);

//   return Array.from(map.values()).sort((a, b) => {
//     const da = a.date || "";
//     const dbDate = b.date || "";
//     if (da !== dbDate) return dbDate.localeCompare(da);
//     return (a.name || "").localeCompare(b.name || "");
//   });
// }

// export async function getAttendanceHistoryForEmployee(
//   employeeKey: string
// ): Promise<InteriorAttendance[]> {
//   const all = await getAllAttendanceHistory();
//   const key = employeeKey.toLowerCase();
//   return all.filter(
//     (r) =>
//       (r.employeeId || "").toLowerCase() === key ||
//       (r.employeeDocId || "").toLowerCase() === key ||
//       (r.id || "").toLowerCase().includes(key)
//   );
// }

// /**
//  * For a given month: any past day that is not a holiday and has no
//  * attendance row is written as Absent for every active employee.
//  * Safe to call multiple times (merge).
//  */
// export async function ensurePastAbsentsForMonth(
//   year: number,
//   monthIndex: number // 0–11
// ): Promise<number> {
//   const employees = await getAllEmployees();
//   if (employees.length === 0) return 0;

//   const today = new Date().toISOString().slice(0, 10);
//   const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
//   let written = 0;

//   for (let day = 1; day <= daysInMonth; day++) {
//     const date = `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
//     if (date >= today) continue;

//     const holiday = await getHoliday(date);
//     if (holiday) continue;

//     let existing: InteriorAttendance[] = [];
//     try {
//       const snap = await getDocs(
//         query(collection(db, PRIMARY), where("date", "==", date))
//       );
//       existing = snap.docs.map(
//         (d) => ({ id: d.id, ...d.data() } as InteriorAttendance)
//       );
//     } catch {
//       /* ignore */
//     }

//     const byDoc = new Set(
//       existing.map((r) => r.employeeDocId).filter(Boolean) as string[]
//     );
//     const byId = new Set(
//       existing.map((r) => String(r.employeeId || "")).filter(Boolean)
//     );

//     for (const e of employees) {
//       if (byDoc.has(e.id) || byId.has(String(e.employeeId || e.id))) {
//         continue;
//       }
//       const row = seedRow(date, e, "Absent");
//       await upsertAttendance({
//         id: row.id,
//         date: row.date,
//         employeeDocId: row.employeeDocId,
//         employeeId: row.employeeId,
//         name: row.name,
//         department: row.department,
//         designation: row.designation,
//         checkIn: "--",
//         checkOut: "--",
//         status: "Absent",
//         workHours: "0h",
//         overtime: "0m",
//       });
//       written++;
//     }
//   }

//   return written;
// }


import {
  collection,
  getDocs,
  setDoc,
  deleteDoc,
  doc,
  query,
  where,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/core/config/firebaseClient";
import { getAllEmployees } from "./employeeService";

export type InteriorAttendance = {
  id: string;
  date?: string;
  employeeDocId?: string;
  employeeId?: string;
  name?: string;
  department?: string;
  designation?: string;
  checkIn?: string;
  checkOut?: string;
  status?: string;
  workHours?: string;
  overtime?: string;
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
};

const PRIMARY = "interior_attendance";
const FALLBACK = "attendance";
const HOLIDAYS = "interior_holidays";

export type InteriorHoliday = {
  id: string;
  date: string;
  name?: string;
  note?: string;
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
};

type EmployeeLike = {
  id: string;
  employeeId?: string;
  name?: string;
  department?: string;
  designation?: string;
  /** Possible join / creation fields from employeeService */
  joiningDate?: string;
  dateOfJoining?: string;
  joinedAt?: string | Timestamp | null;
  startDate?: string;
  createdAt?: string | Timestamp | null;
};

/** YYYY-MM-DD from various employee date fields, or null if unknown */
function getEmployeeStartDate(e: EmployeeLike): string | null {
  const candidates = [
    e.joiningDate,
    e.dateOfJoining,
    e.startDate,
    e.joinedAt,
    e.createdAt,
  ];

  for (const raw of candidates) {
    if (!raw) continue;

    if (typeof raw === "string") {
      const s = raw.trim().slice(0, 10);
      if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
      // try parse other formats
      const d = new Date(raw);
      if (!Number.isNaN(d.getTime())) {
        return d.toISOString().slice(0, 10);
      }
      continue;
    }

    // Firestore Timestamp
    if (
      typeof raw === "object" &&
      raw !== null &&
      "toDate" in raw &&
      typeof (raw as Timestamp).toDate === "function"
    ) {
      try {
        return (raw as Timestamp).toDate().toISOString().slice(0, 10);
      } catch {
        /* ignore */
      }
    }
  }

  return null;
}

/** True if this employee should be considered for attendance on this date */
function isEmployeeActiveOnDate(e: EmployeeLike, date: string): boolean {
  const start = getEmployeeStartDate(e);
  // No start date known → still allow (legacy employees)
  if (!start) return true;
  // Only on/after account / joining date
  return date >= start;
}

function seedRow(
  date: string,
  e: EmployeeLike,
  status: "Absent" | "Holiday" = "Absent"
): InteriorAttendance {
  return {
    id: `${date}_${e.id}`,
    date,
    employeeDocId: e.id,
    employeeId: e.employeeId || e.id,
    name: e.name || "Unknown",
    department: e.department || "Other",
    designation: e.designation || "—",
    checkIn: "--",
    checkOut: "--",
    status,
    workHours: "0h",
    overtime: "0m",
  };
}

function isPastDate(date: string): boolean {
  const today = new Date().toISOString().slice(0, 10);
  return date < today;
}

export async function getHoliday(
  date: string
): Promise<InteriorHoliday | null> {
  try {
    const snap = await getDocs(
      query(collection(db, HOLIDAYS), where("date", "==", date))
    );
    if (snap.empty) return null;
    const d = snap.docs[0]!;
    const data = d.data() as {
      date?: string;
      name?: string;
      note?: string;
      deleted?: boolean;
      createdAt?: Timestamp | null;
      updatedAt?: Timestamp | null;
    };
    if (data.deleted) return null;
    return {
      id: d.id,
      date: data.date || date,
      name: data.name,
      note: data.note,
      createdAt: data.createdAt ?? null,
      updatedAt: data.updatedAt ?? null,
    };
  } catch {
    return null;
  }
}

export async function markHoliday(
  date: string,
  name = "",
  note = ""
): Promise<void> {
  await setDoc(
    doc(db, HOLIDAYS, date),
    {
      id: date,
      date,
      name,
      note,
      updatedAt: serverTimestamp(),
      createdAt: serverTimestamp(),
    },
    { merge: true }
  );
}

export async function unmarkHoliday(date: string): Promise<void> {
  await deleteDoc(doc(db, HOLIDAYS, date));
}

export async function getAllHolidays(): Promise<InteriorHoliday[]> {
  try {
    const snap = await getDocs(collection(db, HOLIDAYS));
    return snap.docs
      .map(
        (d) =>
          ({ id: d.id, ...d.data() } as InteriorHoliday & { deleted?: boolean })
      )
      .filter((h) => h.date && !h.deleted)
      .sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  } catch {
    return [];
  }
}

/**
 * Attendance for one calendar day.
 * - Only employees whose join/create date is on or before this date.
 * - Past dates (not holiday): missing rows are persisted as Absent.
 */
export async function getAttendanceByDate(
  date: string
): Promise<InteriorAttendance[]> {
  const [allEmployees, holiday] = await Promise.all([
    getAllEmployees(),
    getHoliday(date),
  ]);

  // Only staff who existed on this date
  const employees = (allEmployees as EmployeeLike[]).filter((e) =>
    isEmployeeActiveOnDate(e, date)
  );

  const defaultStatus: "Absent" | "Holiday" = holiday ? "Holiday" : "Absent";

  async function fetchForDate(col: string): Promise<InteriorAttendance[]> {
    try {
      const snap = await getDocs(
        query(collection(db, col), where("date", "==", date))
      );
      return snap.docs.map(
        (d) => ({ id: d.id, ...d.data() } as InteriorAttendance)
      );
    } catch {
      return [];
    }
  }

  let existing = await fetchForDate(PRIMARY);
  if (existing.length === 0) {
    existing = await fetchForDate(FALLBACK);
  }

  const byEmployeeDoc = new Map<string, InteriorAttendance>();
  const byEmployeeId = new Map<string, InteriorAttendance>();
  for (const row of existing) {
    if (row.employeeDocId) byEmployeeDoc.set(row.employeeDocId, row);
    if (row.employeeId) byEmployeeId.set(String(row.employeeId), row);
  }

  const result: InteriorAttendance[] = [];
  const toPersist: InteriorAttendance[] = [];

  for (const e of employees) {
    const found =
      byEmployeeDoc.get(e.id) ||
      byEmployeeId.get(String(e.employeeId || e.id));

    if (found) {
      result.push({
        ...found,
        id: found.id || `${date}_${e.id}`,
        date: found.date || date,
        employeeDocId: found.employeeDocId || e.id,
        employeeId: found.employeeId || e.employeeId || e.id,
        name: found.name || e.name || "Unknown",
        department: found.department || e.department || "Other",
        designation: found.designation || e.designation || "—",
      });
    } else {
      const seeded = seedRow(date, e, defaultStatus);
      result.push(seeded);

      if (!holiday && isPastDate(date) && defaultStatus === "Absent") {
        toPersist.push(seeded);
      }
    }
  }

  if (toPersist.length > 0) {
    void Promise.all(
      toPersist.map((row) =>
        upsertAttendance({
          id: row.id,
          date: row.date,
          employeeDocId: row.employeeDocId,
          employeeId: row.employeeId,
          name: row.name,
          department: row.department,
          designation: row.designation,
          checkIn: row.checkIn,
          checkOut: row.checkOut,
          status: "Absent",
          workHours: row.workHours,
          overtime: row.overtime,
        }).catch((err) =>
          console.error("[attendance] auto-persist Absent failed", row.id, err)
        )
      )
    );
  }

  return result;
}

export async function upsertAttendance(
  record: Omit<InteriorAttendance, "createdAt" | "updatedAt">
): Promise<void> {
  const date = record.date || new Date().toISOString().slice(0, 10);
  const id =
    record.id ||
    `${date}_${record.employeeDocId || record.employeeId || "unknown"}`;

  const payload = {
    ...record,
    id,
    date,
    updatedAt: serverTimestamp(),
    createdAt: serverTimestamp(),
  };

  try {
    await setDoc(doc(db, PRIMARY, id), payload, { merge: true });
  } catch {
    await setDoc(doc(db, FALLBACK, id), payload, { merge: true });
  }
}

export async function getAllAttendanceHistory(): Promise<InteriorAttendance[]> {
  const map = new Map<string, InteriorAttendance>();

  async function pull(col: string) {
    try {
      const snap = await getDocs(collection(db, col));
      for (const d of snap.docs) {
        const row = { id: d.id, ...d.data() } as InteriorAttendance;
        if (!row.date) continue;
        map.set(d.id, row);
      }
    } catch {
      /* ignore */
    }
  }

  await pull(PRIMARY);
  if (map.size === 0) await pull(FALLBACK);

  return Array.from(map.values()).sort((a, b) => {
    const da = a.date || "";
    const dbDate = b.date || "";
    if (da !== dbDate) return dbDate.localeCompare(da);
    return (a.name || "").localeCompare(b.name || "");
  });
}

export async function getAttendanceHistoryForEmployee(
  employeeKey: string
): Promise<InteriorAttendance[]> {
  const all = await getAllAttendanceHistory();
  const key = employeeKey.toLowerCase();
  return all.filter(
    (r) =>
      (r.employeeId || "").toLowerCase() === key ||
      (r.employeeDocId || "").toLowerCase() === key ||
      (r.id || "").toLowerCase().includes(key)
  );
}

/**
 * Past days in this month with no record → Absent,
 * but only for employees whose join/create date is on or before that day.
 */
export async function ensurePastAbsentsForMonth(
  year: number,
  monthIndex: number
): Promise<number> {
  const allEmployees = (await getAllEmployees()) as EmployeeLike[];
  if (allEmployees.length === 0) return 0;

  const today = new Date().toISOString().slice(0, 10);
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  let written = 0;

  for (let day = 1; day <= daysInMonth; day++) {
    const date = `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    if (date >= today) continue;

    const holiday = await getHoliday(date);
    if (holiday) continue;

    const employees = allEmployees.filter((e) =>
      isEmployeeActiveOnDate(e, date)
    );
    if (employees.length === 0) continue;

    let existing: InteriorAttendance[] = [];
    try {
      const snap = await getDocs(
        query(collection(db, PRIMARY), where("date", "==", date))
      );
      existing = snap.docs.map(
        (d) => ({ id: d.id, ...d.data() } as InteriorAttendance)
      );
    } catch {
      /* ignore */
    }

    const byDoc = new Set(
      existing.map((r) => r.employeeDocId).filter(Boolean) as string[]
    );
    const byId = new Set(
      existing.map((r) => String(r.employeeId || "")).filter(Boolean)
    );

    for (const e of employees) {
      if (byDoc.has(e.id) || byId.has(String(e.employeeId || e.id))) {
        continue;
      }
      const row = seedRow(date, e, "Absent");
      await upsertAttendance({
        id: row.id,
        date: row.date,
        employeeDocId: row.employeeDocId,
        employeeId: row.employeeId,
        name: row.name,
        department: row.department,
        designation: row.designation,
        checkIn: "--",
        checkOut: "--",
        status: "Absent",
        workHours: "0h",
        overtime: "0m",
      });
      written++;
    }
  }

  return written;
}
