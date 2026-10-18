// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   doc,
//   query,
//   orderBy,
//   serverTimestamp,
//   Timestamp,
// } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";

// export type FurniturePayment = {
//   id: string;
//   paymentNo?: string;
//   orderNo?: string;
//   orderId?: string;
//   customer?: string;
//   customerName?: string;
//   phone?: string;
//   amount?: number;
//   paidAmount?: number;
//   dueAmount?: number;
//   paymentMethod?: string;
//   status?: string;
//   paymentDate?: string;
//   dueDate?: string;
//   reference?: string;
//   notes?: string;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

// const PAYMENTS = "furniture_payments";
// const ORDERS = "furniture_orders";

// export async function getAllPayments(): Promise<FurniturePayment[]> {
//   try {
//     const snap = await getDocs(
//       query(collection(db, PAYMENTS), orderBy("createdAt", "desc"))
//     );
//     if (!snap.empty) {
//       return snap.docs.map(
//         (d) => ({ id: d.id, ...d.data() } as FurniturePayment)
//       );
//     }
//   } catch {
//     try {
//       const snap = await getDocs(collection(db, PAYMENTS));
//       if (!snap.empty) {
//         return snap.docs.map(
//           (d) => ({ id: d.id, ...d.data() } as FurniturePayment)
//         );
//       }
//     } catch {
//       /* fall through */
//     }
//   }

//   // Fallback: derive from furniture_orders
//   const orderSnap = await getDocs(
//     query(collection(db, ORDERS), orderBy("createdAt", "desc"))
//   );

//   return orderSnap.docs.map((d) => {
//     const data = d.data();
//     const amount = Number(data.total ?? data.amount ?? 0) || 0;
//     const paid = Number(data.paid ?? 0) || 0;
//     const due = Math.max(amount - paid, 0);

//     let status = "Pending";
//     if (paid >= amount && amount > 0) status = "Received";
//     else if (paid > 0) status = "Partial";
//     else if (
//       data.paymentStatus === "Failed" ||
//       data.paymentStatus === "Overdue"
//     )
//       status = "Overdue";

//     const dueDate = data.dueDate || data.deliveryDate || "";
//     if (due > 0 && dueDate) {
//       try {
//         const dueTs = new Date(`${dueDate}T23:59:59`).getTime();
//         if (dueTs < Date.now()) status = "Overdue";
//       } catch {
//         /* ignore */
//       }
//     }

//     return {
//       id: d.id,
//       paymentNo: data.paymentNo || `PAY-${d.id.slice(0, 6).toUpperCase()}`,
//       orderNo: data.orderNo || d.id,
//       orderId: d.id,
//       customer: data.customerName || data.customer || "Unknown",
//       customerName: data.customerName || data.customer || "Unknown",
//       phone: data.phone || "—",
//       amount,
//       paidAmount: paid,
//       dueAmount: due,
//       paymentMethod: data.paymentMethod || "UPI",
//       status,
//       paymentDate:
//         paid > 0
//           ? data.paymentDate ||
//             (data.createdAt?.toDate
//               ? data.createdAt.toDate().toISOString().slice(0, 10)
//               : "-")
//           : "-",
//       dueDate: dueDate || "-",
//       reference: data.reference || data.paymentRef || "-",
//       notes: data.notes || "",
//       createdAt: data.createdAt || null,
//       updatedAt: data.updatedAt || null,
//     } as FurniturePayment;
//   });
// }

// export async function createPayment(
//   data: Omit<FurniturePayment, "id" | "createdAt" | "updatedAt">
// ): Promise<string> {
//   const ref = await addDoc(collection(db, PAYMENTS), {
//     ...data,
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   });

//   if (data.orderId) {
//     try {
//       await updateDoc(doc(db, ORDERS, data.orderId), {
//         paid: data.paidAmount ?? 0,
//         paymentStatus:
//           (data.paidAmount ?? 0) >= (data.amount ?? 0) && (data.amount ?? 0) > 0
//             ? "Paid"
//             : (data.paidAmount ?? 0) > 0
//             ? "Partial"
//             : "Pending",
//         paymentMethod: data.paymentMethod,
//         reference: data.reference,
//         dueDate: data.dueDate,
//         updatedAt: serverTimestamp(),
//       });
//     } catch {
//       /* order may not exist */
//     }
//   }

//   return ref.id;
// }

// export async function updatePayment(
//   id: string,
//   data: Partial<FurniturePayment>
// ): Promise<void> {
//   try {
//     await updateDoc(doc(db, PAYMENTS, id), {
//       ...data,
//       updatedAt: serverTimestamp(),
//     });
//   } catch {
//     await updateDoc(doc(db, ORDERS, id), {
//       paid: data.paidAmount,
//       paymentStatus:
//         data.status === "Received"
//           ? "Paid"
//           : data.status === "Partial"
//           ? "Partial"
//           : data.status === "Overdue"
//           ? "Pending"
//           : data.status === "Pending"
//           ? "Pending"
//           : undefined,
//       paymentMethod: data.paymentMethod,
//       paymentDate: data.paymentDate,
//       reference: data.reference,
//       dueDate: data.dueDate,
//       notes: data.notes,
//       updatedAt: serverTimestamp(),
//     });
//   }
// }

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  query,
  orderBy,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/core/config/firebaseClient";

// export type FurniturePayment = {
//   id: string;
//   paymentNo?: string;
//   orderNo?: string;
//   orderId?: string;
//   customer?: string;
//   customerName?: string;
//   phone?: string;
//   amount?: number;
//   paidAmount?: number;
//   dueAmount?: number;
//   paymentMethod?: string;
//   status?: string;
//   paymentDate?: string;
//   dueDate?: string;
//   reference?: string;
//   notes?: string;
//   createdAt?: Timestamp | null;
//   updatedAt?: Timestamp | null;
// };

export type FurniturePayment = {
  id: string;
  paymentNo?: string;
  orderNo?: string;
  orderId?: string;
  customer?: string;
  customerName?: string;
  phone?: string;
  amount?: number;
  paidAmount?: number;
  dueAmount?: number;
  paymentMethod?: string;
  source?: string;          // "Online" | "Manual"
  status?: string;
  paymentDate?: string;
  dueDate?: string;
  reference?: string;
  notes?: string;
  cfOrderId?: string;       // Cashfree order id
  cfPaymentId?: string;     // Cashfree payment id
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
};

const PAYMENTS = "furniture_payments";
const ORDERS = "furniture_orders";

export async function getAllPayments(): Promise<FurniturePayment[]> {
  try {
    const snap = await getDocs(
      query(collection(db, PAYMENTS), orderBy("createdAt", "desc"))
    );
    if (!snap.empty) {
      return snap.docs.map(
        (d) => ({ id: d.id, ...d.data() } as FurniturePayment)
      );
    }
  } catch {
    try {
      const snap = await getDocs(collection(db, PAYMENTS));
      if (!snap.empty) {
        return snap.docs.map(
          (d) => ({ id: d.id, ...d.data() } as FurniturePayment)
        );
      }
    } catch {
      /* fall through */
    }
  }

  // Fallback: derive from furniture_orders
  const orderSnap = await getDocs(
    query(collection(db, ORDERS), orderBy("createdAt", "desc"))
  );

  return orderSnap.docs.map((d) => {
    const data = d.data();
    const amount = Number(data.total ?? data.amount ?? 0) || 0;
    const paid = Number(data.paid ?? 0) || 0;
    const due = Math.max(amount - paid, 0);

    let status = "Pending";
    if (paid >= amount && amount > 0) status = "Received";
    else if (paid > 0) status = "Partial";
    else if (
      data.paymentStatus === "Failed" ||
      data.paymentStatus === "Overdue"
    )
      status = "Overdue";

    const dueDate = data.dueDate || data.deliveryDate || "";
    if (due > 0 && dueDate) {
      try {
        const dueTs = new Date(`${dueDate}T23:59:59`).getTime();
        if (dueTs < Date.now()) status = "Overdue";
      } catch {
        /* ignore */
      }
    }

    return {
      id: d.id,
      paymentNo: data.paymentNo || `PAY-${d.id.slice(0, 6).toUpperCase()}`,
      orderNo: data.orderNo || d.id,
      orderId: d.id,
      customer: data.customerName || data.customer || "Unknown",
      customerName: data.customerName || data.customer || "Unknown",
      phone: data.phone || "—",
      amount,
      paidAmount: paid,
      dueAmount: due,
      paymentMethod: data.paymentMethod || "UPI",
      status,
      paymentDate:
        paid > 0
          ? data.paymentDate ||
            (data.createdAt?.toDate
              ? data.createdAt.toDate().toISOString().slice(0, 10)
              : "-")
          : "-",
      dueDate: dueDate || "-",
      reference: data.reference || data.paymentRef || "-",
      notes: data.notes || "",
      createdAt: data.createdAt || null,
      updatedAt: data.updatedAt || null,
    } as FurniturePayment;
  });
}

export async function createPayment(
  data: Omit<FurniturePayment, "id" | "createdAt" | "updatedAt">
): Promise<string> {
  const ref = await addDoc(collection(db, PAYMENTS), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  if (data.orderId) {
    try {
      await updateDoc(doc(db, ORDERS, data.orderId), {
        paid: data.paidAmount ?? 0,
        paymentStatus:
          (data.paidAmount ?? 0) >= (data.amount ?? 0) && (data.amount ?? 0) > 0
            ? "Paid"
            : (data.paidAmount ?? 0) > 0
            ? "Partial"
            : "Pending",
        paymentMethod: data.paymentMethod,
        reference: data.reference,
        dueDate: data.dueDate,
        updatedAt: serverTimestamp(),
      });
    } catch {
      /* order may not exist */
    }
  }

  return ref.id;
}

export async function updatePayment(
  id: string,
  data: Partial<FurniturePayment>
): Promise<void> {
  try {
    await updateDoc(doc(db, PAYMENTS, id), {
      ...data,
      updatedAt: serverTimestamp(),
    });
  } catch {
    await updateDoc(doc(db, ORDERS, id), {
      paid: data.paidAmount,
      paymentStatus:
        data.status === "Received"
          ? "Paid"
          : data.status === "Partial"
          ? "Partial"
          : data.status === "Overdue"
          ? "Pending"
          : data.status === "Pending"
          ? "Pending"
          : undefined,
      paymentMethod: data.paymentMethod,
      paymentDate: data.paymentDate,
      reference: data.reference,
      dueDate: data.dueDate,
      notes: data.notes,
      updatedAt: serverTimestamp(),
    });
  }
}

/**
 * Record a refund against an order (manual / offline / after Cashfree).
 * Does not call Cashfree itself — use Cloud Function for gateway refunds.
 */
export async function recordRefund(input: {
  orderId: string;
  orderNo?: string;
  customer?: string;
  phone?: string;
  amount: number;
  paymentMethod?: string;
  reference?: string;
  notes?: string;
}): Promise<string> {
  const amount = Number(input.amount) || 0;
  if (amount <= 0) throw new Error("Refund amount must be greater than zero.");

  const today = new Date().toISOString().slice(0, 10);
  const paymentNo = `REF-${Date.now().toString().slice(-8)}`;

  const ref = await addDoc(collection(db, PAYMENTS), {
    paymentNo,
    orderNo: input.orderNo || input.orderId,
    orderId: input.orderId,
    customer: input.customer || "Customer",
    customerName: input.customer || "Customer",
    phone: input.phone || "",
    amount,
    paidAmount: amount,
    dueAmount: 0,
    paymentMethod: input.paymentMethod || "Refund",
    source: "Refund",
    status: "Refunded",
    paymentDate: today,
    dueDate: "-",
    reference: input.reference || paymentNo,
    notes: input.notes || "Order cancellation refund",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return ref.id;
}
