import {
  collection,
  getDocs,
  setDoc,
  updateDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/core/config/firebaseClient";
import { getAllEmployees } from "./employeeService";

export type InteriorPayroll = {
  id: string;
  month?: string;
  employeeDocId?: string;
  employeeId?: string;
  employeeName?: string;
  department?: string;
  designation?: string;
  basicSalary?: number;
  allowances?: number;
  overtime?: number;
  deductions?: number;
  netSalary?: number;
  status?: string;
  paymentDate?: string;
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
};

const PRIMARY = "interior_payroll";
const FALLBACK = "payroll";

export async function getPayrollByMonth(
  month: string
): Promise<InteriorPayroll[]> {
  try {
    const snap = await getDocs(
      query(collection(db, PRIMARY), where("month", "==", month))
    );
    if (!snap.empty) {
      return snap.docs.map(
        (d) => ({ id: d.id, ...d.data() } as InteriorPayroll)
      );
    }
  } catch {
    /* fallback */
  }

  try {
    const snap = await getDocs(
      query(collection(db, FALLBACK), where("month", "==", month))
    );
    if (!snap.empty) {
      return snap.docs.map(
        (d) => ({ id: d.id, ...d.data() } as InteriorPayroll)
      );
    }
  } catch {
    /* ignore */
  }

  // Seed from employees if no payroll docs for month
  const employees = await getAllEmployees();
  return employees.map((e) => {
    const basic = Number(e.salary ?? 0) || 0;
    return {
      id: `${month}_${e.id}`,
      month,
      employeeDocId: e.id,
      employeeId: e.employeeId || e.id,
      employeeName: e.name || "Unknown",
      department: e.department || "Other",
      designation: e.designation || "—",
      basicSalary: basic,
      allowances: 0,
      overtime: 0,
      deductions: 0,
      netSalary: basic,
      status: "Pending",
      paymentDate: "",
    } as InteriorPayroll;
  });
}

export async function upsertPayroll(
  record: Omit<InteriorPayroll, "createdAt" | "updatedAt">
): Promise<void> {
  const id =
    record.id ||
    `${record.month || "na"}_${record.employeeDocId || record.employeeId}`;

  try {
    await setDoc(
      doc(db, PRIMARY, id),
      {
        ...record,
        id,
        updatedAt: serverTimestamp(),
        createdAt: serverTimestamp(),
      },
      { merge: true }
    );
  } catch {
    await setDoc(
      doc(db, FALLBACK, id),
      {
        ...record,
        id,
        updatedAt: serverTimestamp(),
        createdAt: serverTimestamp(),
      },
      { merge: true }
    );
  }
}

export async function updatePayrollStatus(
  id: string,
  status: string,
  paymentDate?: string
): Promise<void> {
  const data = {
    status,
    paymentDate: paymentDate || new Date().toISOString().slice(0, 10),
    updatedAt: serverTimestamp(),
  };
  try {
    await updateDoc(doc(db, PRIMARY, id), data);
  } catch {
    await updateDoc(doc(db, FALLBACK, id), data);
  }
}