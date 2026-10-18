// import { onSchedule } from "firebase-functions/v2/scheduler";
// import { FieldValue, getFirestore } from "firebase-admin/firestore";
// import { initializeApp, getApps } from "firebase-admin/app";

// if (getApps().length === 0) {
//   initializeApp();
// }

// const db = getFirestore();

// const ATTENDANCE_COL = "interior_attendance";
// const HOLIDAYS_COL = "interior_holidays";
// const EMPLOYEES_COL = "employees"; // change if you use interior_employees

// type Employee = {
//   id: string;
//   employeeId?: string;
//   name?: string;
//   department?: string;
//   designation?: string;
//   status?: string; // Active / Inactive
// };

// /**
//  * Yesterday in Asia/Kolkata as YYYY-MM-DD
//  */
// function getYesterdayIST(): string {
//   const now = new Date();
//   // IST = UTC+5:30
//   const istOffsetMs = 5.5 * 60 * 60 * 1000;
//   const istNow = new Date(now.getTime() + istOffsetMs);
//   // move back one calendar day in IST
//   istNow.setUTCDate(istNow.getUTCDate() - 1);
//   const y = istNow.getUTCFullYear();
//   const m = String(istNow.getUTCMonth() + 1).padStart(2, "0");
//   const d = String(istNow.getUTCDate()).padStart(2, "0");
//   return `${y}-${m}-${d}`;
// }

// async function isHoliday(date: string): Promise<boolean> {
//   const snap = await db
//     .collection(HOLIDAYS_COL)
//     .where("date", "==", date)
//     .limit(1)
//     .get();

//   if (snap.empty) return false;
//   const data = snap.docs[0]!.data();
//   return !data.deleted;
// }

// async function getActiveEmployees(): Promise<Employee[]> {
//   const snap = await db.collection(EMPLOYEES_COL).get();
//   const list: Employee[] = [];

//   for (const d of snap.docs) {
//     const data = d.data();
//     const status = String(data.status || "Active").toLowerCase();
//     if (status === "inactive" || status === "terminated" || status === "left") {
//       continue;
//     }
//     list.push({
//       id: d.id,
//       employeeId: data.employeeId || data.empId || d.id,
//       name: data.name || data.fullName || "Unknown",
//       department: data.department || "Other",
//       designation: data.designation || data.role || "—",
//       status: data.status,
//     });
//   }
//   return list;
// }

// async function getExistingAttendanceIds(date: string): Promise<Set<string>> {
//   const set = new Set<string>();
//   const snap = await db
//     .collection(ATTENDANCE_COL)
//     .where("date", "==", date)
//     .get();

//   for (const d of snap.docs) {
//     const data = d.data();
//     if (data.employeeDocId) set.add(String(data.employeeDocId));
//     if (data.employeeId) set.add(String(data.employeeId));
//     // also key by doc id pattern date_empId
//     set.add(d.id);
//   }
//   return set;
// }

// /**
//  * Runs every day at 00:15 Asia/Kolkata.
//  * For yesterday: if not a holiday, create Absent rows for any employee
//  * who still has no attendance document.
//  */
// export const autoMarkAbsentCron = onSchedule(
//   {
//     schedule: "15 0 * * *", // 00:15 every day
//     timeZone: "Asia/Kolkata",
//     region: "asia-south1",
//     memory: "256MiB",
//     timeoutSeconds: 300,
//   },
//   async () => {
//     const date = getYesterdayIST();
//     console.log(`[autoMarkAbsent] Processing date: ${date}`);

//     const holiday = await isHoliday(date);
//     if (holiday) {
//       console.log(`[autoMarkAbsent] ${date} is a holiday — skip Absent marking`);
//       return;
//     }

//     const employees = await getActiveEmployees();
//     if (employees.length === 0) {
//       console.log("[autoMarkAbsent] No active employees found");
//       return;
//     }

//     const existing = await getExistingAttendanceIds(date);
//     let created = 0;
//     let skipped = 0;

//     const batchSize = 400;
//     let batch = db.batch();
//     let ops = 0;

//     for (const emp of employees) {
//       const docId = `${date}_${emp.id}`;
//       const already =
//         existing.has(emp.id) ||
//         existing.has(String(emp.employeeId || "")) ||
//         existing.has(docId);

//       if (already) {
//         skipped++;
//         continue;
//       }

//       const ref = db.collection(ATTENDANCE_COL).doc(docId);
//       batch.set(
//         ref,
//         {
//           id: docId,
//           date,
//           employeeDocId: emp.id,
//           employeeId: emp.employeeId || emp.id,
//           name: emp.name || "Unknown",
//           department: emp.department || "Other",
//           designation: emp.designation || "—",
//           checkIn: "--",
//           checkOut: "--",
//           status: "Absent",
//           workHours: "0h",
//           overtime: "0m",
//           source: "auto-end-of-day",
//           createdAt: FieldValue.serverTimestamp(),
//           updatedAt: FieldValue.serverTimestamp(),
//         },
//         { merge: true }
//       );

//       created++;
//       ops++;

//       if (ops >= batchSize) {
//         await batch.commit();
//         batch = db.batch();
//         ops = 0;
//       }
//     }

//     if (ops > 0) {
//       await batch.commit();
//     }

//     console.log(
//       `[autoMarkAbsent] Done for ${date}. Created: ${created}, Skipped (already had record): ${skipped}`
//     );
//   }
// );

// export default autoMarkAbsentCron;


import { onSchedule } from "firebase-functions/v2/scheduler";
import { FieldValue, getFirestore, Timestamp } from "firebase-admin/firestore";
import { initializeApp, getApps } from "firebase-admin/app";

if (getApps().length === 0) {
  initializeApp();
}

const db = getFirestore();

const ATTENDANCE_COL = "interior_attendance";
const HOLIDAYS_COL = "interior_holidays";
const EMPLOYEES_COL = "employees"; // change to interior_employees if needed

type Employee = {
  id: string;
  employeeId?: string;
  name?: string;
  department?: string;
  designation?: string;
  status?: string;
  joiningDate?: string;
  dateOfJoining?: string;
  joinedAt?: string | Timestamp | null;
  startDate?: string;
  createdAt?: string | Timestamp | null;
};

function getYesterdayIST(): string {
  const now = new Date();
  const istOffsetMs = 5.5 * 60 * 60 * 1000;
  const istNow = new Date(now.getTime() + istOffsetMs);
  istNow.setUTCDate(istNow.getUTCDate() - 1);
  const y = istNow.getUTCFullYear();
  const m = String(istNow.getUTCMonth() + 1).padStart(2, "0");
  const d = String(istNow.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function getEmployeeStartDate(e: Employee): string | null {
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
      const d = new Date(raw);
      if (!Number.isNaN(d.getTime())) return d.toISOString().slice(0, 10);
      continue;
    }
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

function isActiveOnDate(e: Employee, date: string): boolean {
  const start = getEmployeeStartDate(e);
  if (!start) return true;
  return date >= start;
}

async function isHoliday(date: string): Promise<boolean> {
  const snap = await db
    .collection(HOLIDAYS_COL)
    .where("date", "==", date)
    .limit(1)
    .get();
  if (snap.empty) return false;
  return !snap.docs[0]!.data().deleted;
}

async function getActiveEmployeesForDate(date: string): Promise<Employee[]> {
  const snap = await db.collection(EMPLOYEES_COL).get();
  const list: Employee[] = [];

  for (const d of snap.docs) {
    const data = d.data();
    const status = String(data.status || "Active").toLowerCase();
    if (status === "inactive" || status === "terminated" || status === "left") {
      continue;
    }
    const emp: Employee = {
      id: d.id,
      employeeId: data.employeeId || data.empId || d.id,
      name: data.name || data.fullName || "Unknown",
      department: data.department || "Other",
      designation: data.designation || data.role || "—",
      status: data.status,
      joiningDate: data.joiningDate,
      dateOfJoining: data.dateOfJoining,
      joinedAt: data.joinedAt,
      startDate: data.startDate,
      createdAt: data.createdAt,
    };
    if (isActiveOnDate(emp, date)) {
      list.push(emp);
    }
  }
  return list;
}

async function getExistingAttendanceIds(date: string): Promise<Set<string>> {
  const set = new Set<string>();
  const snap = await db
    .collection(ATTENDANCE_COL)
    .where("date", "==", date)
    .get();

  for (const d of snap.docs) {
    const data = d.data();
    if (data.employeeDocId) set.add(String(data.employeeDocId));
    if (data.employeeId) set.add(String(data.employeeId));
    set.add(d.id);
  }
  return set;
}

export const autoMarkAbsentCron = onSchedule(
  {
    schedule: "15 0 * * *",
    timeZone: "Asia/Kolkata",
    region: "asia-south1",
    memory: "256MiB",
    timeoutSeconds: 300,
  },
  async () => {
    const date = getYesterdayIST();
    console.log(`[autoMarkAbsent] Processing date: ${date}`);

    if (await isHoliday(date)) {
      console.log(`[autoMarkAbsent] ${date} is a holiday — skip`);
      return;
    }

    const employees = await getActiveEmployeesForDate(date);
    if (employees.length === 0) {
      console.log("[autoMarkAbsent] No eligible employees");
      return;
    }

    const existing = await getExistingAttendanceIds(date);
    let created = 0;
    let skipped = 0;

    let batch = db.batch();
    let ops = 0;
    const batchSize = 400;

    for (const emp of employees) {
      const docId = `${date}_${emp.id}`;
      const already =
        existing.has(emp.id) ||
        existing.has(String(emp.employeeId || "")) ||
        existing.has(docId);

      if (already) {
        skipped++;
        continue;
      }

      batch.set(
        db.collection(ATTENDANCE_COL).doc(docId),
        {
          id: docId,
          date,
          employeeDocId: emp.id,
          employeeId: emp.employeeId || emp.id,
          name: emp.name || "Unknown",
          department: emp.department || "Other",
          designation: emp.designation || "—",
          checkIn: "--",
          checkOut: "--",
          status: "Absent",
          workHours: "0h",
          overtime: "0m",
          source: "auto-end-of-day",
          createdAt: FieldValue.serverTimestamp(),
          updatedAt: FieldValue.serverTimestamp(),
        },
        { merge: true }
      );

      created++;
      ops++;

      if (ops >= batchSize) {
        await batch.commit();
        batch = db.batch();
        ops = 0;
      }
    }

    if (ops > 0) await batch.commit();

    console.log(
      `[autoMarkAbsent] ${date} — created: ${created}, skipped: ${skipped}`
    );
  }
);

export default autoMarkAbsentCron;
