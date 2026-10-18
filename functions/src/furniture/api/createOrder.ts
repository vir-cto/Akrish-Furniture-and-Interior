// import { Request, Response } from "express";
// import { FieldValue } from "firebase-admin/firestore";

// import { adminDb } from "../../core/firebaseAdmin";
// import {
//   createCashfreeOrder,
// } from "../../core/cashfreeClient";

// type PaymentMethod =
//   | "COD"
//   | "UPI"
//   | "Card"
//   | "Bank Transfer";

// interface OrderItem {
//   productId: string;
//   productCode?: string;
//   productName: string;
//   quantity: number;
//   unitPrice: number;
//   totalPrice: number;
//   image?: string;
// }

// interface ShippingAddress {
//   name: string;
//   phone: string;
//   email?: string;
//   addressLine1: string;
//   addressLine2?: string;
//   city: string;
//   state: string;
//   pincode: string;
//   country?: string;
// }

// interface CreateOrderRequest {
//   orderId?: string;
//   userId?: string;

//   customer: {
//     name: string;
//     phone: string;
//     email?: string;
//   };

//   items: OrderItem[];

//   shippingAddress: ShippingAddress;

//   paymentMethod: PaymentMethod;

//   subtotal: number;
//   shippingCharge?: number;
//   tax?: number;
//   discount?: number;
//   totalAmount: number;

//   notes?: string;
// }

// /**
//  * Generate a unique furniture order number.
//  */
// function generateOrderId(): string {
//   const timestamp = Date.now();

//   const randomPart = Math.floor(
//     1000 + Math.random() * 9000
//   );

//   return `AKR-F-${timestamp}-${randomPart}`;
// }

// /**
//  * Validate a positive number.
//  */
// function isValidAmount(
//   value: unknown
// ): value is number {
//   return (
//     typeof value === "number" &&
//     Number.isFinite(value) &&
//     value >= 0
//   );
// }

// /**
//  * Validate required customer information.
//  */
// function validateCustomer(
//   customer: CreateOrderRequest["customer"]
// ): string | null {
//   if (!customer) {
//     return "Customer details are required.";
//   }

//   if (!customer.name?.trim()) {
//     return "Customer name is required.";
//   }

//   if (!customer.phone?.trim()) {
//     return "Customer phone is required.";
//   }

//   if (
//     customer.email &&
//     !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
//       customer.email
//     )
//   ) {
//     return "Invalid customer email.";
//   }

//   return null;
// }

// /**
//  * Validate shipping address.
//  */
// function validateShippingAddress(
//   address: ShippingAddress
// ): string | null {
//   if (!address) {
//     return "Shipping address is required.";
//   }

//   const requiredFields = [
//     ["name", address.name],
//     ["phone", address.phone],
//     ["addressLine1", address.addressLine1],
//     ["city", address.city],
//     ["state", address.state],
//     ["pincode", address.pincode],
//   ];

//   for (const [field, value] of requiredFields) {
//     if (
//       typeof value !== "string" ||
//       !value.trim()
//     ) {
//       return `${field} is required.`;
//     }
//   }

//   if (!/^\d{6}$/.test(address.pincode)) {
//     return "Invalid 6-digit pincode.";
//   }

//   return null;
// }

// /**
//  * Validate order items.
//  */
// function validateItems(
//   items: OrderItem[]
// ): string | null {
//   if (!Array.isArray(items)) {
//     return "Order items are required.";
//   }

//   if (items.length === 0) {
//     return "At least one product is required.";
//   }

//   for (const item of items) {
//     if (!item.productId?.trim()) {
//       return "Product ID is required.";
//     }

//     if (!item.productName?.trim()) {
//       return "Product name is required.";
//     }

//     if (
//       !Number.isInteger(item.quantity) ||
//       item.quantity <= 0
//     ) {
//       return `Invalid quantity for ${item.productName}.`;
//     }

//     if (!isValidAmount(item.unitPrice)) {
//       return `Invalid unit price for ${item.productName}.`;
//     }

//     if (!isValidAmount(item.totalPrice)) {
//       return `Invalid total price for ${item.productName}.`;
//     }

//     const calculatedTotal =
//       item.unitPrice * item.quantity;

//     if (
//       Math.abs(
//         calculatedTotal - item.totalPrice
//       ) > 0.01
//     ) {
//       return `Incorrect total price for ${item.productName}.`;
//     }
//   }

//   return null;
// }

// /**
//  * Recalculate the order subtotal on the server.
//  *
//  * Do not blindly trust the amount sent by the browser.
//  */
// async function calculateVerifiedSubtotal(
//   items: OrderItem[]
// ): Promise<{
//   items: OrderItem[];
//   subtotal: number;
// }> {
//   const verifiedItems: OrderItem[] = [];

//   let subtotal = 0;

//   for (const item of items) {
//     const productRef = adminDb
//       .collection("products")
//       .doc(item.productId);

//     const productSnapshot =
//       await productRef.get();

//     if (!productSnapshot.exists) {
//       throw new Error(
//         `Product ${item.productId} was not found.`
//       );
//     }

//     const product =
//       productSnapshot.data() || {};

//     const productPrice = Number(
//       product.sellingPrice ??
//         product.price ??
//         item.unitPrice
//     );

//     if (
//       !Number.isFinite(productPrice) ||
//       productPrice < 0
//     ) {
//       throw new Error(
//         `Invalid price for product ${item.productId}.`
//       );
//     }

//     const quantity = item.quantity;

//     const verifiedTotal =
//       productPrice * quantity;

//     subtotal += verifiedTotal;

//     verifiedItems.push({
//       ...item,

//       productCode:
//         product.code ||
//         item.productCode ||
//         "",

//       productName:
//         product.name ||
//         item.productName,

//       unitPrice:
//         productPrice,

//       totalPrice:
//         verifiedTotal,

//       image:
//         product.image ||
//         product.imageUrl ||
//         item.image ||
//         "",
//     });
//   }

//   return {
//     items: verifiedItems,
//     subtotal,
//   };
// }

// /**
//  * Update product stock after an order.
//  */
// // async function reserveProductStock(
// //   items: OrderItem[]
// // ): Promise<void> {
// //   const batch =
// //     adminDb.batch();

// //   for (const item of items) {
// //     const productRef = adminDb
// //       .collection("products")
// //       .doc(item.productId);

// //     const snapshot =
// //       await productRef.get();

// //     if (!snapshot.exists) {
// //       throw new Error(
// //         `Product ${item.productId} was not found.`
// //       );
// //     }

// //     const product =
// //       snapshot.data() || {};

// //     const currentStock = Number(
// //       product.stock || 0
// //     );

// //     if (currentStock < item.quantity) {
// //       throw new Error(
// //         `Insufficient stock for ${item.productName}. Available: ${currentStock}.`
// //       );
// //     }

// //     const newStock =
// //       currentStock - item.quantity;

// //     const reorderLevel =
// //       Number(product.reorderLevel || 0);

// //     let stockStatus =
// //       "In Stock";

// //     if (newStock <= 0) {
// //       stockStatus =
// //         "Out of Stock";
// //     } else if (
// //       newStock <= reorderLevel
// //     ) {
// //       stockStatus =
// //         "Low Stock";
// //     }

// //     batch.update(
// //       productRef,
// //       {
// //         stock: newStock,
// //         status: stockStatus,
// //         updatedAt:
// //           FieldValue.serverTimestamp(),
// //       }
// //     );
// //   }

// //   await batch.commit();
// // }

// /**
//  * Reserve stock on website `products` AND ERP `furniture_products`.
//  */
// async function reserveProductStock(items: OrderItem[]): Promise<void> {
//   for (const item of items) {
//     const collections = ["products", "furniture_products"] as const;

//     for (const col of collections) {
//       let productRef = adminDb.collection(col).doc(item.productId);
//       let snapshot = await productRef.get();

//       // Fallback: match by name on furniture_products
//       if (!snapshot.exists && col === "furniture_products") {
//         const byName = await adminDb
//           .collection(col)
//           .where("name", "==", item.productName)
//           .limit(1)
//           .get();
//         if (!byName.empty) {
//           productRef = byName.docs[0].ref;
//           snapshot = byName.docs[0];
//         }
//       }

//       if (!snapshot.exists) {
//         if (col === "products") {
//           throw new Error(`Product ${item.productId} was not found.`);
//         }
//         continue; // furniture_products optional match
//       }

//       const product = snapshot.data() || {};
//       const currentStock = Number(product.stock || 0);

//       if (currentStock < item.quantity) {
//         throw new Error(
//           `Insufficient stock for ${item.productName}. Available: ${currentStock}.`
//         );
//       }

//       const newStock = currentStock - item.quantity;
//       const reorderLevel = Number(product.reorderLevel || product.minStock || 0);
//       let stockStatus = "In Stock";
//       if (newStock <= 0) stockStatus = "Out of Stock";
//       else if (newStock <= reorderLevel) stockStatus = "Low Stock";

//       await productRef.update({
//         stock: newStock,
//         status: stockStatus,
//         updatedAt: FieldValue.serverTimestamp(),
//       });
//     }
//   }
// }

// /**
//  * Create a Cashfree payment order.
//  */
// async function createCashfreePaymentOrder(
//   orderId: string,
//   totalAmount: number,
//   customer: CreateOrderRequest["customer"]
// ) {
//   const returnUrl =
//     process.env.CASHFREE_RETURN_URL ||
//     `${process.env.WEBSITE_URL || ""}/checkout/success?order_id=${encodeURIComponent(
//       orderId
//     )}`;

//   const notifyUrl =
//     process.env.CASHFREE_WEBHOOK_URL ||
//     "";

//   return createCashfreeOrder({
//     order_id: orderId,

//     order_amount: Number(
//       totalAmount.toFixed(2)
//     ),

//     order_currency: "INR",

//     customer_details: {
//       customer_id:
//         customer.phone ||
//         customer.email ||
//         orderId,

//       customer_name:
//         customer.name,

//       customer_email:
//         customer.email,

//       customer_phone:
//         customer.phone,
//     },

//     order_meta: {
//       return_url:
//         returnUrl,

//       ...(notifyUrl
//         ? {
//             notify_url:
//               notifyUrl,
//           }
//         : {}),
//     },

//     order_note:
//       `Akrish Furniture Order ${orderId}`,

//     order_tags: {
//       source: "furniture",
//       orderType: "furniture",
//     },
//   });
// }

// /**
//  * Main create-order API.
//  */
// export async function createOrder(
//   req: Request,
//   res: Response
// ): Promise<void> {
//   if (req.method !== "POST") {
//     res.status(405).json({
//       success: false,
//       message: "Method not allowed.",
//     });

//     return;
//   }

//   try {
//     const body =
//       req.body as CreateOrderRequest;

//     const customerError =
//       validateCustomer(
//         body.customer
//       );

//     if (customerError) {
//       res.status(400).json({
//         success: false,
//         message: customerError,
//       });

//       return;
//     }

//     const itemsError =
//       validateItems(body.items);

//     if (itemsError) {
//       res.status(400).json({
//         success: false,
//         message: itemsError,
//       });

//       return;
//     }

//     const addressError =
//       validateShippingAddress(
//         body.shippingAddress
//       );

//     if (addressError) {
//       res.status(400).json({
//         success: false,
//         message: addressError,
//       });

//       return;
//     }

//     if (
//       !isValidAmount(body.shippingCharge ?? 0) ||
//       !isValidAmount(body.tax ?? 0) ||
//       !isValidAmount(body.discount ?? 0)
//     ) {
//       res.status(400).json({
//         success: false,
//         message:
//           "Invalid shipping, tax, or discount amount.",
//       });

//       return;
//     }

//     const paymentMethod =
//       body.paymentMethod;

//     const allowedPaymentMethods: PaymentMethod[] =
//       [
//         "COD",
//         "UPI",
//         "Card",
//         "Bank Transfer",
//       ];

//     if (
//       !allowedPaymentMethods.includes(
//         paymentMethod
//       )
//     ) {
//       res.status(400).json({
//         success: false,
//         message:
//           "Invalid payment method.",
//       });

//       return;
//     }

//     /**
//      * Verify prices using Firestore instead of
//      * trusting prices supplied by the browser.
//      */
//     const {
//       items: verifiedItems,
//       subtotal,
//     } =
//       await calculateVerifiedSubtotal(
//         body.items
//       );

//     const shippingCharge =
//       Number(
//         body.shippingCharge || 0
//       );

//     const tax =
//       Number(body.tax || 0);

//     const discount =
//       Number(body.discount || 0);

//     const verifiedTotal =
//       Math.max(
//         subtotal +
//           shippingCharge +
//           tax -
//           discount,
//         0
//       );

//     /**
//      * Generate order ID.
//      */
//     const orderId =
//       body.orderId?.trim() ||
//       generateOrderId();

//     const orderRef =
//       adminDb
//         .collection("orders")
//         .doc(orderId);

//     const existingOrder =
//       await orderRef.get();

//     if (existingOrder.exists) {
//       res.status(409).json({
//         success: false,
//         message:
//           "An order with this ID already exists.",
//       });

//       return;
//     }

//     /**
//      * Check stock before creating the order.
//      */
//     for (const item of verifiedItems) {
//       const productSnapshot =
//         await adminDb
//           .collection("products")
//           .doc(item.productId)
//           .get();

//       if (!productSnapshot.exists) {
//         res.status(400).json({
//           success: false,
//           message:
//             `Product ${item.productId} was not found.`,
//         });

//         return;
//       }

//       const product =
//         productSnapshot.data() || {};

//       const stock =
//         Number(product.stock || 0);

//       if (stock < item.quantity) {
//         res.status(400).json({
//           success: false,
//           message:
//             `Insufficient stock for ${item.productName}. Available: ${stock}.`,
//         });

//         return;
//       }
//     }

//     /**
//      * Payment state.
//      */
//     const isCashfreePayment =
//       paymentMethod === "UPI" ||
//       paymentMethod === "Card";

//     let paymentSessionId:
//       | string
//       | null = null;

//     let cashfreeOrderId:
//       | string
//       | null = null;

//     let initialPaymentStatus =
//       "Pending";

//     let initialOrderStatus =
//       "Pending";

//     /**
//      * Create Cashfree order for online payment.
//      */
//     if (isCashfreePayment) {
//       const cashfreeOrder =
//         await createCashfreePaymentOrder(
//           orderId,
//           verifiedTotal,
//           body.customer
//         );

//       paymentSessionId =
//         cashfreeOrder.payment_session_id ||
//         null;

//       cashfreeOrderId =
//         cashfreeOrder.cf_order_id ||
//         null;
//     }

//     /**
//      * For COD, payment remains pending.
//      */
//     if (paymentMethod === "COD") {
//       initialPaymentStatus =
//         "Pending";
//     }

//     /**
//      * Create Firestore order.
//      */
//     const orderData = {
//       id: orderId,

//       orderId,

//       orderNumber:
//         orderId,

//       source:
//         "Furniture Website",

//       orderType:
//         "Furniture",

//       userId:
//         body.userId || null,

//       customer: {
//         name:
//           body.customer.name,

//         phone:
//           body.customer.phone,

//         email:
//           body.customer.email ||
//           "",
//       },

//       items:
//         verifiedItems,

//       shippingAddress:
//         body.shippingAddress,

//       paymentMethod,

//       paymentStatus:
//         initialPaymentStatus,

//       paymentState:
//         initialPaymentStatus,

//       orderStatus:
//         initialOrderStatus,

//       status:
//         initialOrderStatus,

//       subtotal,

//       shippingCharge,

//       tax,

//       discount,

//       totalAmount:
//         verifiedTotal,

//       amountReceived:
//         0,

//       pendingAmount:
//         verifiedTotal,

//       cashfreeOrderId,

//       paymentSessionId,

//       notes:
//         body.notes || "",

//       createdAt:
//         FieldValue.serverTimestamp(),

//       updatedAt:
//         FieldValue.serverTimestamp(),
//     };

//     await orderRef.set(
//       orderData
//     );

//     /**
//      * Reserve stock after the order is created.
//      */
//     try {
//       await reserveProductStock(
//         verifiedItems
//       );
//     } catch (stockError) {
//       /**
//        * Roll back the newly created order if stock
//        * reservation fails.
//        */
//       await orderRef.delete();

//       throw stockError;
//     }

//     /**
//      * Store a separate payment record for
//      * Cashfree-enabled orders.
//      */
//     if (isCashfreePayment) {
//       const paymentRef =
//         adminDb
//           .collection("payments")
//           .doc(
//             `PAY-${orderId}`
//           );

//       await paymentRef.set({
//         id:
//           `PAY-${orderId}`,

//         orderId,

//         customerName:
//           body.customer.name,

//         customerPhone:
//           body.customer.phone,

//         customerEmail:
//           body.customer.email ||
//           "",

//         amount:
//           verifiedTotal,

//         receivedAmount:
//           0,

//         pendingAmount:
//           verifiedTotal,

//         status:
//           "Pending",

//         method:
//           paymentMethod,

//         gateway:
//           "Cashfree",

//         cashfreeOrderId,

//         paymentSessionId,

//         createdAt:
//           FieldValue.serverTimestamp(),

//         updatedAt:
//           FieldValue.serverTimestamp(),
//       });
//     }

//     res.status(201).json({
//       success: true,

//       message:
//         "Furniture order created successfully.",

//       order: {
//         id: orderId,

//         orderId,

//         subtotal,

//         shippingCharge,

//         tax,

//         discount,

//         totalAmount:
//           verifiedTotal,

//         paymentMethod,

//         paymentStatus:
//           initialPaymentStatus,

//         orderStatus:
//           initialOrderStatus,

//         cashfreeOrderId,

//         paymentSessionId,
//       },
//     });
//   } catch (error: unknown) {
//     console.error(
//       "Create furniture order error:",
//       error
//     );

//     const message =
//       error instanceof Error
//         ? error.message
//         : "Unable to create order.";

//     res.status(500).json({
//       success: false,
//       message,
//     });
//   }
// }

// export default createOrder;

import { Request, Response } from "express";
import { FieldValue } from "firebase-admin/firestore";

import { adminDb } from "../../core/firebaseAdmin";
import { createCashfreeOrder } from "../../core/cashfreeClient";

type PaymentMethod = "COD" | "UPI" | "Card" | "Bank Transfer";

interface OrderItem {
  productId: string;
  productCode?: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  image?: string;
}

interface ShippingAddress {
  name: string;
  phone: string;
  email?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  country?: string;
}

interface CreateOrderRequest {
  orderId?: string;
  userId?: string;
  customer: {
    name: string;
    phone: string;
    email?: string;
  };
  items: OrderItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: PaymentMethod;
  subtotal: number;
  shippingCharge?: number;
  tax?: number;
  discount?: number;
  totalAmount: number;
  notes?: string;
}

function generateOrderId(): string {
  const timestamp = Date.now();
  const randomPart = Math.floor(1000 + Math.random() * 9000);
  return `AKR-F-${timestamp}-${randomPart}`;
}

function isValidAmount(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value) && value >= 0;
}

function validateCustomer(
  customer: CreateOrderRequest["customer"]
): string | null {
  if (!customer) return "Customer details are required.";
  if (!customer.name?.trim()) return "Customer name is required.";
  if (!customer.phone?.trim()) return "Customer phone is required.";
  if (
    customer.email &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email)
  ) {
    return "Invalid customer email.";
  }
  return null;
}

function validateShippingAddress(address: ShippingAddress): string | null {
  if (!address) return "Shipping address is required.";

  const requiredFields: [string, string | undefined][] = [
    ["name", address.name],
    ["phone", address.phone],
    ["addressLine1", address.addressLine1],
    ["city", address.city],
    ["state", address.state],
    ["pincode", address.pincode],
  ];

  for (const [field, value] of requiredFields) {
    if (typeof value !== "string" || !value.trim()) {
      return `${field} is required.`;
    }
  }

  if (!/^\d{6}$/.test(address.pincode)) {
    return "Invalid 6-digit pincode.";
  }

  return null;
}

function validateItems(items: OrderItem[]): string | null {
  if (!Array.isArray(items)) return "Order items are required.";
  if (items.length === 0) return "At least one product is required.";

  for (const item of items) {
    if (!item.productId?.trim()) return "Product ID is required.";
    if (!item.productName?.trim()) return "Product name is required.";
    if (!Number.isInteger(item.quantity) || item.quantity <= 0) {
      return `Invalid quantity for ${item.productName}.`;
    }
    if (!isValidAmount(item.unitPrice)) {
      return `Invalid unit price for ${item.productName}.`;
    }
    if (!isValidAmount(item.totalPrice)) {
      return `Invalid total price for ${item.productName}.`;
    }
    const calculatedTotal = item.unitPrice * item.quantity;
    if (Math.abs(calculatedTotal - item.totalPrice) > 0.01) {
      return `Incorrect total price for ${item.productName}.`;
    }
  }

  return null;
}

/**
 * Verify prices from Firestore (do not trust browser prices).
 * Tries `products` first, then `furniture_products`.
 */
async function calculateVerifiedSubtotal(items: OrderItem[]): Promise<{
  items: OrderItem[];
  subtotal: number;
}> {
  const verifiedItems: OrderItem[] = [];
  let subtotal = 0;

  for (const item of items) {
    let productSnapshot = await adminDb
      .collection("products")
      .doc(item.productId)
      .get();

    if (!productSnapshot.exists) {
      productSnapshot = await adminDb
        .collection("furniture_products")
        .doc(item.productId)
        .get();
    }

    if (!productSnapshot.exists) {
      const byName = await adminDb
        .collection("furniture_products")
        .where("name", "==", item.productName)
        .limit(1)
        .get();
      if (!byName.empty) {
        productSnapshot = byName.docs[0];
      }
    }

    if (!productSnapshot.exists) {
      throw new Error(`Product ${item.productId} was not found.`);
    }

    const product = productSnapshot.data() || {};
    const productPrice = Number(
      product.sellingPrice ?? product.price ?? item.unitPrice
    );

    if (!Number.isFinite(productPrice) || productPrice < 0) {
      throw new Error(`Invalid price for product ${item.productId}.`);
    }

    const quantity = item.quantity;
    const verifiedTotal = productPrice * quantity;
    subtotal += verifiedTotal;

    verifiedItems.push({
      ...item,
      productId: productSnapshot.id,
      productCode: product.code || product.sku || item.productCode || "",
      productName: product.name || item.productName,
      unitPrice: productPrice,
      totalPrice: verifiedTotal,
      image: product.image || product.imageUrl || item.image || "",
    });
  }

  return { items: verifiedItems, subtotal };
}

/**
 * Reserve stock on website `products` AND ERP `furniture_products`.
 */
async function reserveProductStock(items: OrderItem[]): Promise<void> {
  for (const item of items) {
    const collections = ["products", "furniture_products"] as const;

    for (const col of collections) {
      let productRef = adminDb.collection(col).doc(item.productId);
      let snapshot = await productRef.get();

      if (!snapshot.exists && col === "furniture_products") {
        const byName = await adminDb
          .collection(col)
          .where("name", "==", item.productName)
          .limit(1)
          .get();
        if (!byName.empty) {
          productRef = byName.docs[0].ref;
          snapshot = byName.docs[0];
        }
      }

      if (!snapshot.exists) {
        if (col === "products") {
          // Try furniture_products as primary if products missing
          const alt = await adminDb
            .collection("furniture_products")
            .doc(item.productId)
            .get();
          if (!alt.exists) {
            const byName = await adminDb
              .collection("furniture_products")
              .where("name", "==", item.productName)
              .limit(1)
              .get();
            if (byName.empty) {
              throw new Error(`Product ${item.productId} was not found.`);
            }
          }
          // furniture_products handled in next loop iteration / continue
          continue;
        }
        continue;
      }

      const product = snapshot.data() || {};
      const currentStock = Number(product.stock || 0);

      if (currentStock < item.quantity) {
        throw new Error(
          `Insufficient stock for ${item.productName}. Available: ${currentStock}.`
        );
      }

      const newStock = currentStock - item.quantity;
      const reorderLevel = Number(
        product.reorderLevel ?? product.minStock ?? 0
      );

      let stockStatus = "In Stock";
      if (newStock <= 0) stockStatus = "Out of Stock";
      else if (newStock <= reorderLevel) stockStatus = "Low Stock";

      await productRef.update({
        stock: newStock,
        status: stockStatus,
        updatedAt: FieldValue.serverTimestamp(),
      });
    }
  }
}

/**
 * Ensure at least one collection had stock reduced.
 * Prefer strict check on products or furniture_products.
 */
async function assertStockAvailable(items: OrderItem[]): Promise<void> {
  for (const item of items) {
    let stock = 0;
    let found = false;

    const productSnap = await adminDb
      .collection("products")
      .doc(item.productId)
      .get();
    if (productSnap.exists) {
      stock = Number(productSnap.data()?.stock || 0);
      found = true;
    }

    if (!found) {
      const erpSnap = await adminDb
        .collection("furniture_products")
        .doc(item.productId)
        .get();
      if (erpSnap.exists) {
        stock = Number(erpSnap.data()?.stock || 0);
        found = true;
      } else {
        const byName = await adminDb
          .collection("furniture_products")
          .where("name", "==", item.productName)
          .limit(1)
          .get();
        if (!byName.empty) {
          stock = Number(byName.docs[0].data()?.stock || 0);
          found = true;
        }
      }
    }

    if (!found) {
      throw new Error(`Product ${item.productId} was not found.`);
    }

    if (stock < item.quantity) {
      throw new Error(
        `Insufficient stock for ${item.productName}. Available: ${stock}.`
      );
    }
  }
}

async function createCashfreePaymentOrder(
  orderId: string,
  totalAmount: number,
  customer: CreateOrderRequest["customer"]
) {
  const returnUrl =
    process.env.CASHFREE_RETURN_URL ||
    `${process.env.WEBSITE_URL || ""}/checkout/success?order_id=${encodeURIComponent(
      orderId
    )}`;

  const notifyUrl = process.env.CASHFREE_WEBHOOK_URL || "";

  return createCashfreeOrder({
    order_id: orderId,
    order_amount: Number(totalAmount.toFixed(2)),
    order_currency: "INR",
    customer_details: {
      customer_id: customer.phone || customer.email || orderId,
      customer_name: customer.name,
      customer_email: customer.email,
      customer_phone: customer.phone,
    },
    order_meta: {
      return_url: returnUrl,
      ...(notifyUrl ? { notify_url: notifyUrl } : {}),
    },
    order_note: `Akrish Furniture Order ${orderId}`,
    order_tags: {
      source: "furniture",
      orderType: "furniture",
    },
  });
}

/**
 * Main create-order API.
 */
export async function createOrder(
  req: Request,
  res: Response
): Promise<void> {
  if (req.method !== "POST") {
    res.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
    return;
  }

  try {
    const body = req.body as CreateOrderRequest;

    const customerError = validateCustomer(body.customer);
    if (customerError) {
      res.status(400).json({ success: false, message: customerError });
      return;
    }

    const itemsError = validateItems(body.items);
    if (itemsError) {
      res.status(400).json({ success: false, message: itemsError });
      return;
    }

    const addressError = validateShippingAddress(body.shippingAddress);
    if (addressError) {
      res.status(400).json({ success: false, message: addressError });
      return;
    }

    if (
      !isValidAmount(body.shippingCharge ?? 0) ||
      !isValidAmount(body.tax ?? 0) ||
      !isValidAmount(body.discount ?? 0)
    ) {
      res.status(400).json({
        success: false,
        message: "Invalid shipping, tax, or discount amount.",
      });
      return;
    }

    const paymentMethod = body.paymentMethod;
    const allowedPaymentMethods: PaymentMethod[] = [
      "COD",
      "UPI",
      "Card",
      "Bank Transfer",
    ];

    if (!allowedPaymentMethods.includes(paymentMethod)) {
      res.status(400).json({
        success: false,
        message: "Invalid payment method.",
      });
      return;
    }

    const { items: verifiedItems, subtotal } =
      await calculateVerifiedSubtotal(body.items);

    const shippingCharge = Number(body.shippingCharge || 0);
    const tax = Number(body.tax || 0);
    const discount = Number(body.discount || 0);
    const verifiedTotal = Math.max(
      subtotal + shippingCharge + tax - discount,
      0
    );

    const orderId = body.orderId?.trim() || generateOrderId();
    const orderRef = adminDb.collection("orders").doc(orderId);

    const existingOrder = await orderRef.get();
    if (existingOrder.exists) {
      res.status(409).json({
        success: false,
        message: "An order with this ID already exists.",
      });
      return;
    }

    // Pre-check stock (products and/or furniture_products)
    try {
      await assertStockAvailable(verifiedItems);
    } catch (stockErr) {
      const message =
        stockErr instanceof Error ? stockErr.message : "Insufficient stock.";
      res.status(400).json({ success: false, message });
      return;
    }

    const isCashfreePayment =
      paymentMethod === "UPI" || paymentMethod === "Card";

    let paymentSessionId: string | null = null;
    let cashfreeOrderId: string | null = null;
    let initialPaymentStatus = "Pending";
    const initialOrderStatus = "Pending";

    if (isCashfreePayment) {
      const cashfreeOrder = await createCashfreePaymentOrder(
        orderId,
        verifiedTotal,
        body.customer
      );
      paymentSessionId = cashfreeOrder.payment_session_id || null;
      cashfreeOrderId = cashfreeOrder.cf_order_id || null;
    }

    if (paymentMethod === "COD") {
      initialPaymentStatus = "Pending";
    }

    const firstItem = verifiedItems[0];

    const orderData = {
      id: orderId,
      orderId,
      orderNumber: orderId,
      orderNo: orderId,
      source: "Furniture Website",
      orderType: "Furniture",
      userId: body.userId || null,
      customer: {
        name: body.customer.name,
        phone: body.customer.phone,
        email: body.customer.email || "",
      },
      customerName: body.customer.name,
      phone: body.customer.phone,
      email: body.customer.email || "",
      items: verifiedItems.map((i) => ({
        productId: i.productId,
        name: i.productName,
        qty: i.quantity,
        quantity: i.quantity,
        price: i.unitPrice,
      })),
      product: firstItem?.productName || "",
      productName: firstItem?.productName || "",
      quantity: verifiedItems.reduce((s, i) => s + i.quantity, 0),
      category: "",
      shippingAddress: body.shippingAddress,
      paymentMethod,
      paymentStatus: initialPaymentStatus,
      paymentState: initialPaymentStatus,
      orderStatus: initialOrderStatus,
      status: initialOrderStatus,
      subtotal,
      shippingCharge,
      tax,
      discount,
      totalAmount: verifiedTotal,
      total: verifiedTotal,
      amount: verifiedTotal,
      paid: 0,
      amountReceived: 0,
      pendingAmount: verifiedTotal,
      cashfreeOrderId,
      paymentSessionId,
      notes: body.notes || "",
      // Stock already reserved at checkout — ERP Delivered must not deduct again
      stockDeducted: true,
      stockDeductedAt: FieldValue.serverTimestamp(),
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    };

    await orderRef.set(orderData);

    // Also mirror a copy into furniture_orders for ERP
    try {
      await adminDb.collection("furniture_orders").doc(orderId).set({
        ...orderData,
        websiteOrderId: orderId,
        source: "Website",
      });
    } catch (mirrorErr) {
      console.warn("Mirror to furniture_orders failed:", mirrorErr);
    }

    try {
      await reserveProductStock(verifiedItems);
    } catch (stockError) {
      await orderRef.delete();
      try {
        await adminDb.collection("furniture_orders").doc(orderId).delete();
      } catch {
        /* ignore */
      }
      throw stockError;
    }

    if (isCashfreePayment) {
      await adminDb
        .collection("payments")
        .doc(`PAY-${orderId}`)
        .set({
          id: `PAY-${orderId}`,
          orderId,
          customerName: body.customer.name,
          customerPhone: body.customer.phone,
          customerEmail: body.customer.email || "",
          amount: verifiedTotal,
          receivedAmount: 0,
          pendingAmount: verifiedTotal,
          status: "Pending",
          method: paymentMethod,
          gateway: "Cashfree",
          cashfreeOrderId,
          paymentSessionId,
          createdAt: FieldValue.serverTimestamp(),
          updatedAt: FieldValue.serverTimestamp(),
        });
    }

    res.status(201).json({
      success: true,
      message: "Furniture order created successfully.",
      order: {
        id: orderId,
        orderId,
        subtotal,
        shippingCharge,
        tax,
        discount,
        totalAmount: verifiedTotal,
        paymentMethod,
        paymentStatus: initialPaymentStatus,
        orderStatus: initialOrderStatus,
        cashfreeOrderId,
        paymentSessionId,
      },
    });
  } catch (error: unknown) {
    console.error("Create furniture order error:", error);
    const message =
      error instanceof Error ? error.message : "Unable to create order.";
    res.status(500).json({
      success: false,
      message,
    });
  }
}

export default createOrder;
