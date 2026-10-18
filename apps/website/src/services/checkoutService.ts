// import { db } from "@/lib/firebase";
// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   addDoc,
//   updateDoc,
//   query,
//   where,
//   Timestamp,
// } from "firebase/firestore";

// export type PaymentMethod =
//   | "COD"
//   | "UPI"
//   | "Card"
//   | "Bank Transfer";

// export type OrderStatus =
//   | "Pending"
//   | "Confirmed"
//   | "Processing"
//   | "Shipped"
//   | "Delivered"
//   | "Cancelled";

// export interface CheckoutItem {
//   productId: string;
//   name: string;
//   price: number;
//   quantity: number;
//   image?: string;
//   category?: string;
//   variant?: string;
// }

// export interface ShippingAddress {
//   fullName: string;
//   phone: string;
//   email?: string;
//   addressLine1: string;
//   addressLine2?: string;
//   city: string;
//   state: string;
//   postalCode: string;
//   country?: string;
// }

// export interface CheckoutData {
//   userId: string;
//   items: CheckoutItem[];
//   shippingAddress: ShippingAddress;
//   paymentMethod: PaymentMethod;
//   subtotal: number;
//   shippingCharge: number;
//   discount: number;
//   tax: number;
//   totalAmount: number;
//   notes?: string;
// }

// export interface Order {
//   id: string;
//   orderNumber: string;
//   userId: string;
//   items: CheckoutItem[];
//   shippingAddress: ShippingAddress;
//   paymentMethod: PaymentMethod;
//   paymentStatus: "Pending" | "Paid" | "Failed";
//   orderStatus: OrderStatus;
//   subtotal: number;
//   shippingCharge: number;
//   discount: number;
//   tax: number;
//   totalAmount: number;
//   notes?: string;
//   createdAt?: unknown;
//   updatedAt?: unknown;
// }

// const ORDERS_COLLECTION = "orders";

// /**
//  * Calculate subtotal from checkout items.
//  */
// export function calculateSubtotal(
//   items: CheckoutItem[]
// ): number {
//   return items.reduce(
//     (total, item) =>
//       total + Number(item.price) * Number(item.quantity),
//     0
//   );
// }

// /**
//  * Calculate shipping charge.
//  *
//  * Orders above ₹5,000 get free shipping.
//  */
// export function calculateShipping(
//   subtotal: number
// ): number {
//   return subtotal >= 5000 ? 0 : 250;
// }

// /**
//  * Calculate tax.
//  */
// export function calculateTax(
//   subtotal: number,
//   taxRate = 0.18
// ): number {
//   return subtotal * taxRate;
// }

// /**
//  * Calculate final checkout total.
//  */
// export function calculateCheckoutTotal(
//   subtotal: number,
//   shippingCharge: number,
//   discount = 0,
//   tax = 0
// ): number {
//   return Math.max(
//     0,
//     subtotal + shippingCharge + tax - discount
//   );
// }

// /**
//  * Generate a simple order number.
//  */
// function generateOrderNumber(): string {
//   const now = new Date();

//   const year = now.getFullYear();

//   const month = String(
//     now.getMonth() + 1
//   ).padStart(2, "0");

//   const day = String(
//     now.getDate()
//   ).padStart(2, "0");

//   const randomNumber = Math.floor(
//     1000 + Math.random() * 9000
//   );

//   return `AKR-${year}${month}${day}-${randomNumber}`;
// }

// /**
//  * Validate checkout information.
//  */
// export function validateCheckout(
//   checkout: CheckoutData
// ): string[] {
//   const errors: string[] = [];

//   if (!checkout.userId) {
//     errors.push("User ID is required");
//   }

//   if (!checkout.items || checkout.items.length === 0) {
//     errors.push("Cart is empty");
//   }

//   if (!checkout.shippingAddress.fullName.trim()) {
//     errors.push("Full name is required");
//   }

//   if (!checkout.shippingAddress.phone.trim()) {
//     errors.push("Phone number is required");
//   }

//   if (!checkout.shippingAddress.addressLine1.trim()) {
//     errors.push("Address is required");
//   }

//   if (!checkout.shippingAddress.city.trim()) {
//     errors.push("City is required");
//   }

//   if (!checkout.shippingAddress.state.trim()) {
//     errors.push("State is required");
//   }

//   if (!checkout.shippingAddress.postalCode.trim()) {
//     errors.push("Postal code is required");
//   }

//   if (!checkout.paymentMethod) {
//     errors.push("Payment method is required");
//   }

//   return errors;
// }

// /**
//  * Create a new order.
//  */
// export async function createOrder(
//   checkout: CheckoutData
// ): Promise<Order> {
//   const errors = validateCheckout(checkout);

//   if (errors.length > 0) {
//     throw new Error(errors.join(", "));
//   }

//   const orderNumber = generateOrderNumber();

//   const orderData = {
//     orderNumber,
//     userId: checkout.userId,

//     items: checkout.items,

//     shippingAddress: checkout.shippingAddress,

//     paymentMethod: checkout.paymentMethod,

//     paymentStatus:
//       checkout.paymentMethod === "COD"
//         ? "Pending"
//         : "Pending",

//     orderStatus: "Pending",

//     subtotal: Number(checkout.subtotal || 0),

//     shippingCharge: Number(
//       checkout.shippingCharge || 0
//     ),

//     discount: Number(
//       checkout.discount || 0
//     ),

//     tax: Number(
//       checkout.tax || 0
//     ),

//     totalAmount: Number(
//       checkout.totalAmount || 0
//     ),

//     notes: checkout.notes || "",

//     createdAt: Timestamp.now(),
//     updatedAt: Timestamp.now(),
//   };

//   const ordersRef = collection(
//     db,
//     ORDERS_COLLECTION
//   );

//   const orderRef = await addDoc(
//     ordersRef,
//     orderData
//   );

//   return {
//     id: orderRef.id,
//     ...orderData,
//   } as Order;
// }

// /**
//  * Get an order by its ID.
//  */
// export async function getOrder(
//   orderId: string
// ): Promise<Order | null> {
//   if (!orderId) {
//     throw new Error("Order ID is required");
//   }

//   const orderRef = doc(
//     db,
//     ORDERS_COLLECTION,
//     orderId
//   );

//   const snapshot = await getDoc(orderRef);

//   if (!snapshot.exists()) {
//     return null;
//   }

//   return {
//     id: snapshot.id,
//     ...snapshot.data(),
//   } as Order;
// }

// /**
//  * Get all orders belonging to a user.
//  */
// export async function getUserOrders(
//   userId: string
// ): Promise<Order[]> {
//   if (!userId) {
//     throw new Error("User ID is required");
//   }

//   const ordersRef = collection(
//     db,
//     ORDERS_COLLECTION
//   );

//   const ordersQuery = query(
//     ordersRef,
//     where("userId", "==", userId)
//   );

//   const snapshot = await getDocs(
//     ordersQuery
//   );

//   return snapshot.docs.map((orderDoc) => ({
//     id: orderDoc.id,
//     ...orderDoc.data(),
//   })) as Order[];
// }

// /**
//  * Update order status.
//  */
// export async function updateOrderStatus(
//   orderId: string,
//   orderStatus: OrderStatus
// ): Promise<void> {
//   if (!orderId) {
//     throw new Error("Order ID is required");
//   }

//   const orderRef = doc(
//     db,
//     ORDERS_COLLECTION,
//     orderId
//   );

//   await updateDoc(orderRef, {
//     orderStatus,
//     updatedAt: Timestamp.now(),
//   });
// }

// /**
//  * Update payment status.
//  */
// export async function updatePaymentStatus(
//   orderId: string,
//   paymentStatus:
//     | "Pending"
//     | "Paid"
//     | "Failed"
// ): Promise<void> {
//   if (!orderId) {
//     throw new Error("Order ID is required");
//   }

//   const orderRef = doc(
//     db,
//     ORDERS_COLLECTION,
//     orderId
//   );

//   await updateDoc(orderRef, {
//     paymentStatus,
//     updatedAt: Timestamp.now(),
//   });
// }

// /**
//  * Mark an order as paid.
//  */
// export async function markOrderAsPaid(
//   orderId: string
// ): Promise<void> {
//   await updatePaymentStatus(
//     orderId,
//     "Paid"
//   );
// }

// /**
//  * Cancel an order.
//  */
// export async function cancelOrder(
//   orderId: string
// ): Promise<void> {
//   await updateOrderStatus(
//     orderId,
//     "Cancelled"
//   );
// }

// /**
//  * Confirm an order.
//  */
// export async function confirmOrder(
//   orderId: string
// ): Promise<void> {
//   await updateOrderStatus(
//     orderId,
//     "Confirmed"
//   );
// }

// /**
//  * Mark an order as processing.
//  */
// export async function processOrder(
//   orderId: string
// ): Promise<void> {
//   await updateOrderStatus(
//     orderId,
//     "Processing"
//   );
// }

// /**
//  * Mark an order as shipped.
//  */
// export async function shipOrder(
//   orderId: string
// ): Promise<void> {
//   await updateOrderStatus(
//     orderId,
//     "Shipped"
//   );
// }

// /**
//  * Mark an order as delivered.
//  */
// export async function deliverOrder(
//   orderId: string
// ): Promise<void> {
//   await updateOrderStatus(
//     orderId,
//     "Delivered"
//   );
// }

// /**
//  * Get all orders.
//  *
//  * Useful for admin/ERP order management.
//  */
// export async function getAllOrders(): Promise<Order[]> {
//   const ordersRef = collection(
//     db,
//     ORDERS_COLLECTION
//   );

//   const snapshot = await getDocs(
//     ordersRef
//   );

//   return snapshot.docs.map((orderDoc) => ({
//     id: orderDoc.id,
//     ...orderDoc.data(),
//   })) as Order[];
// }

// /**
//  * Get orders by order status.
//  */
// export async function getOrdersByStatus(
//   status: OrderStatus
// ): Promise<Order[]> {
//   const ordersRef = collection(
//     db,
//     ORDERS_COLLECTION
//   );

//   const ordersQuery = query(
//     ordersRef,
//     where("orderStatus", "==", status)
//   );

//   const snapshot = await getDocs(
//     ordersQuery
//   );

//   return snapshot.docs.map((orderDoc) => ({
//     id: orderDoc.id,
//     ...orderDoc.data(),
//   })) as Order[];
// }

// /**
//  * Get order total items.
//  */
// export function getOrderItemCount(
//   items: CheckoutItem[]
// ): number {
//   return items.reduce(
//     (total, item) =>
//       total + Number(item.quantity),
//     0
//   );
// }

// /**
//  * Format amount as Indian Rupees.
//  */
// export function formatCurrency(
//   amount: number
// ): string {
//   return new Intl.NumberFormat(
//     "en-IN",
//     {
//       style: "currency",
//       currency: "INR",
//       maximumFractionDigits: 0,
//     }
//   ).format(amount);
// }

// import { db } from "@/lib/firebase";
// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   addDoc,
//   updateDoc,
//   query,
//   where,
//   Timestamp,
// } from "firebase/firestore";

// export type PaymentMethod =
//   | "COD"
//   | "UPI"
//   | "Card"
//   | "Bank Transfer";

// export type OrderStatus =
//   | "Pending"
//   | "Confirmed"
//   | "Processing"
//   | "Shipped"
//   | "Delivered"
//   | "Cancelled";

// export interface CheckoutItem {
//   productId: string;
//   name: string;
//   price: number;
//   quantity: number;
//   image?: string;
//   category?: string;
//   variant?: string;
// }

// export interface ShippingAddress {
//   fullName: string;
//   phone: string;
//   email?: string;
//   addressLine1: string;
//   addressLine2?: string;
//   city: string;
//   state: string;
//   postalCode: string;
//   country?: string;
// }

// export interface CheckoutData {
//   userId: string;
//   items: CheckoutItem[];
//   shippingAddress: ShippingAddress;
//   paymentMethod: PaymentMethod;
//   subtotal: number;
//   shippingCharge: number;
//   discount: number;
//   tax: number;
//   totalAmount: number;
//   notes?: string;
// }

// export interface Order {
//   id: string;
//   orderNumber: string;
//   userId: string;
//   items: CheckoutItem[];
//   shippingAddress: ShippingAddress;
//   paymentMethod: PaymentMethod;
//   paymentStatus: "Pending" | "Paid" | "Failed";
//   orderStatus: OrderStatus;
//   subtotal: number;
//   shippingCharge: number;
//   discount: number;
//   tax: number;
//   totalAmount: number;
//   notes?: string;
//   createdAt?: unknown;
//   updatedAt?: unknown;
// }

// /** Customer account + history */
// const ORDERS_COLLECTION = "orders";
// /** ERP Furniture → Orders */
// const ERP_ORDERS_COLLECTION = "furniture_orders";

// export function calculateSubtotal(items: CheckoutItem[]): number {
//   return items.reduce(
//     (total, item) => total + Number(item.price) * Number(item.quantity),
//     0
//   );
// }

// export function calculateShipping(subtotal: number): number {
//   return subtotal >= 5000 ? 0 : 250;
// }

// export function calculateTax(subtotal: number, taxRate = 0.18): number {
//   return subtotal * taxRate;
// }

// export function calculateCheckoutTotal(
//   subtotal: number,
//   shippingCharge: number,
//   discount = 0,
//   tax = 0
// ): number {
//   return Math.max(0, subtotal + shippingCharge + tax - discount);
// }

// function generateOrderNumber(): string {
//   const now = new Date();
//   const year = now.getFullYear();
//   const month = String(now.getMonth() + 1).padStart(2, "0");
//   const day = String(now.getDate()).padStart(2, "0");
//   const randomNumber = Math.floor(1000 + Math.random() * 9000);
//   return `AKR-${year}${month}${day}-${randomNumber}`;
// }

// export function validateCheckout(checkout: CheckoutData): string[] {
//   const errors: string[] = [];

//   if (!checkout.userId) errors.push("User ID is required");
//   if (!checkout.items || checkout.items.length === 0) {
//     errors.push("Cart is empty");
//   }
//   if (!checkout.shippingAddress.fullName.trim()) {
//     errors.push("Full name is required");
//   }
//   if (!checkout.shippingAddress.phone.trim()) {
//     errors.push("Phone number is required");
//   }
//   if (!checkout.shippingAddress.addressLine1.trim()) {
//     errors.push("Address is required");
//   }
//   if (!checkout.shippingAddress.city.trim()) {
//     errors.push("City is required");
//   }
//   if (!checkout.shippingAddress.state.trim()) {
//     errors.push("State is required");
//   }
//   if (!checkout.shippingAddress.postalCode.trim()) {
//     errors.push("Postal code is required");
//   }
//   if (!checkout.paymentMethod) {
//     errors.push("Payment method is required");
//   }

//   return errors;
// }

// /**
//  * Create order in:
//  *  - `orders` (customer account)
//  *  - `furniture_orders` (ERP /furniture/orders)
//  */
// export async function createOrder(checkout: CheckoutData): Promise<Order> {
//   const errors = validateCheckout(checkout);
//   if (errors.length > 0) {
//     throw new Error(errors.join(", "));
//   }

//   const orderNumber = generateOrderNumber();
//   const addr = checkout.shippingAddress;
//   const fullName = addr.fullName.trim();
//   const phone = addr.phone.trim();
//   const email = (addr.email || "").trim();

//   const totalQty = checkout.items.reduce(
//     (s, i) => s + Number(i.quantity || 0),
//     0
//   );
//   const productLabel = checkout.items
//     .map((i) => i.name)
//     .filter(Boolean)
//     .join(", ");
//   const first = checkout.items[0];

//   const paymentStatus: "Pending" | "Paid" | "Failed" = "Pending";
//   const orderStatus: OrderStatus = "Pending";

//   const now = Timestamp.now();

//   const websiteOrderData = {
//     orderNumber,
//     userId: checkout.userId,
//     items: checkout.items,
//     shippingAddress: {
//       ...addr,
//       fullName,
//       phone,
//       email,
//       country: addr.country || "India",
//     },
//     paymentMethod: checkout.paymentMethod,
//     paymentStatus,
//     orderStatus,
//     subtotal: Number(checkout.subtotal || 0),
//     shippingCharge: Number(checkout.shippingCharge || 0),
//     discount: Number(checkout.discount || 0),
//     tax: Number(checkout.tax || 0),
//     totalAmount: Number(checkout.totalAmount || 0),
//     notes: checkout.notes || "",
//     source: "Website",
//     createdAt: now,
//     updatedAt: now,
//   };

//   /** ERP-friendly fields so /furniture/orders map works */
//   const erpOrderData = {
//     ...websiteOrderData,
//     orderNo: orderNumber,
//     customerName: fullName,
//     customer: fullName,
//     phone,
//     email,
//     product: productLabel || first?.name || "Furniture Item",
//     productName: productLabel || first?.name || "Furniture Item",
//     category: first?.category || "Other",
//     quantity: totalQty || 1,
//     amount: Number(checkout.totalAmount || 0),
//     total: Number(checkout.totalAmount || 0),
//     paid: 0,
//     status: orderStatus,
//     deliveryDate: "",
//     items: checkout.items.map((i) => ({
//       productId: i.productId,
//       name: i.name,
//       qty: Number(i.quantity) || 1,
//       price: Number(i.price) || 0,
//       image: i.image || "",
//       category: i.category || "",
//     })),
//   };

//   // 1) Customer collection
//   const websiteRef = await addDoc(
//     collection(db, ORDERS_COLLECTION),
//     websiteOrderData
//   );

//   // 2) ERP collection (same id when possible is nicer; use addDoc for simplicity)
//   await addDoc(collection(db, ERP_ORDERS_COLLECTION), {
//     ...erpOrderData,
//     websiteOrderId: websiteRef.id,
//   });

//   return {
//     id: websiteRef.id,
//     ...websiteOrderData,
//   } as Order;
// }

// export async function getOrder(orderId: string): Promise<Order | null> {
//   if (!orderId) throw new Error("Order ID is required");
//   const snapshot = await getDoc(doc(db, ORDERS_COLLECTION, orderId));
//   if (!snapshot.exists()) return null;
//   return { id: snapshot.id, ...snapshot.data() } as Order;
// }

// export async function getUserOrders(userId: string): Promise<Order[]> {
//   if (!userId) throw new Error("User ID is required");
//   const snapshot = await getDocs(
//     query(collection(db, ORDERS_COLLECTION), where("userId", "==", userId))
//   );
//   return snapshot.docs.map((d) => ({
//     id: d.id,
//     ...d.data(),
//   })) as Order[];
// }

// export async function updateOrderStatus(
//   orderId: string,
//   orderStatus: OrderStatus
// ): Promise<void> {
//   if (!orderId) throw new Error("Order ID is required");
//   await updateDoc(doc(db, ORDERS_COLLECTION, orderId), {
//     orderStatus,
//     updatedAt: Timestamp.now(),
//   });
// }

// export async function updatePaymentStatus(
//   orderId: string,
//   paymentStatus: "Pending" | "Paid" | "Failed"
// ): Promise<void> {
//   if (!orderId) throw new Error("Order ID is required");
//   await updateDoc(doc(db, ORDERS_COLLECTION, orderId), {
//     paymentStatus,
//     updatedAt: Timestamp.now(),
//   });
// }

// export async function markOrderAsPaid(orderId: string): Promise<void> {
//   await updatePaymentStatus(orderId, "Paid");
// }

// export async function cancelOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Cancelled");
// }

// export async function confirmOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Confirmed");
// }

// export async function processOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Processing");
// }

// export async function shipOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Shipped");
// }

// export async function deliverOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Delivered");
// }

// export async function getAllOrders(): Promise<Order[]> {
//   const snapshot = await getDocs(collection(db, ORDERS_COLLECTION));
//   return snapshot.docs.map((d) => ({
//     id: d.id,
//     ...d.data(),
//   })) as Order[];
// }

// export async function getOrdersByStatus(
//   status: OrderStatus
// ): Promise<Order[]> {
//   const snapshot = await getDocs(
//     query(collection(db, ORDERS_COLLECTION), where("orderStatus", "==", status))
//   );
//   return snapshot.docs.map((d) => ({
//     id: d.id,
//     ...d.data(),
//   })) as Order[];
// }

// export function getOrderItemCount(items: CheckoutItem[]): number {
//   return items.reduce((total, item) => total + Number(item.quantity), 0);
// }

// export function formatCurrency(amount: number): string {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(amount);
// }

// import { db } from "@/lib/firebase";
// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   addDoc,
//   updateDoc,
//   query,
//   where,
//   Timestamp,
// } from "firebase/firestore";

// export type PaymentMethod =
//   | "COD"
//   | "UPI"
//   | "Card"
//   | "Bank Transfer";

// export type OrderStatus =
//   | "Pending"
//   | "Confirmed"
//   | "Processing"
//   | "Shipped"
//   | "Delivered"
//   | "Cancelled";

// export interface CheckoutItem {
//   productId: string;
//   name: string;
//   price: number;
//   quantity: number;
//   image?: string;
//   category?: string;
//   variant?: string;
// }

// export interface ShippingAddress {
//   fullName: string;
//   phone: string;
//   email?: string;
//   addressLine1: string;
//   addressLine2?: string;
//   city: string;
//   state: string;
//   postalCode: string;
//   country?: string;
// }

// export interface CheckoutData {
//   userId: string;
//   items: CheckoutItem[];
//   shippingAddress: ShippingAddress;
//   paymentMethod: PaymentMethod;
//   subtotal: number;
//   shippingCharge: number;
//   discount: number;
//   tax: number;
//   totalAmount: number;
//   notes?: string;
// }

// export interface Order {
//   id: string;
//   orderNumber: string;
//   userId: string;
//   items: CheckoutItem[];
//   shippingAddress: ShippingAddress;
//   paymentMethod: PaymentMethod;
//   paymentStatus: "Pending" | "Paid" | "Failed";
//   orderStatus: OrderStatus;
//   subtotal: number;
//   shippingCharge: number;
//   discount: number;
//   tax: number;
//   totalAmount: number;
//   notes?: string;
//   createdAt?: unknown;
//   updatedAt?: unknown;
// }

// const ORDERS_COLLECTION = "orders";
// const ERP_ORDERS_COLLECTION = "furniture_orders";

// /** Firestore rejects undefined — only keep defined fields */
// function sanitizeItem(item: CheckoutItem): CheckoutItem {
//   const out: CheckoutItem = {
//     productId: String(item.productId || ""),
//     name: String(item.name || "Item"),
//     price: Number(item.price) || 0,
//     quantity: Math.max(1, Number(item.quantity) || 1),
//   };
//   if (item.image) out.image = String(item.image);
//   if (item.category) out.category = String(item.category);
//   if (item.variant) out.variant = String(item.variant);
//   return out;
// }

// export function calculateSubtotal(items: CheckoutItem[]): number {
//   return items.reduce(
//     (total, item) => total + Number(item.price) * Number(item.quantity),
//     0
//   );
// }

// export function calculateShipping(subtotal: number): number {
//   return subtotal >= 5000 ? 0 : 250;
// }

// export function calculateTax(subtotal: number, taxRate = 0.18): number {
//   return subtotal * taxRate;
// }

// export function calculateCheckoutTotal(
//   subtotal: number,
//   shippingCharge: number,
//   discount = 0,
//   tax = 0
// ): number {
//   return Math.max(0, subtotal + shippingCharge + tax - discount);
// }

// function generateOrderNumber(): string {
//   const now = new Date();
//   const year = now.getFullYear();
//   const month = String(now.getMonth() + 1).padStart(2, "0");
//   const day = String(now.getDate()).padStart(2, "0");
//   const randomNumber = Math.floor(1000 + Math.random() * 9000);
//   return `AKR-${year}${month}${day}-${randomNumber}`;
// }

// export function validateCheckout(checkout: CheckoutData): string[] {
//   const errors: string[] = [];

//   if (!checkout.userId) errors.push("User ID is required");
//   if (!checkout.items || checkout.items.length === 0) {
//     errors.push("Cart is empty");
//   }
//   if (!checkout.shippingAddress.fullName.trim()) {
//     errors.push("Full name is required");
//   }
//   if (!checkout.shippingAddress.phone.trim()) {
//     errors.push("Phone number is required");
//   }
//   if (!checkout.shippingAddress.addressLine1.trim()) {
//     errors.push("Address is required");
//   }
//   if (!checkout.shippingAddress.city.trim()) {
//     errors.push("City is required");
//   }
//   if (!checkout.shippingAddress.state.trim()) {
//     errors.push("State is required");
//   }
//   if (!checkout.shippingAddress.postalCode.trim()) {
//     errors.push("Postal code is required");
//   }
//   if (!checkout.paymentMethod) {
//     errors.push("Payment method is required");
//   }

//   return errors;
// }

// export async function createOrder(checkout: CheckoutData): Promise<Order> {
//   const errors = validateCheckout(checkout);
//   if (errors.length > 0) {
//     throw new Error(errors.join(", "));
//   }

//   const orderNumber = generateOrderNumber();
//   const addr = checkout.shippingAddress;
//   const fullName = addr.fullName.trim();
//   const phone = addr.phone.trim();
//   const email = (addr.email || "").trim();
//   const items = checkout.items.map(sanitizeItem);

//   const totalQty = items.reduce((s, i) => s + Number(i.quantity || 0), 0);
//   const productLabel = items
//     .map((i) => i.name)
//     .filter(Boolean)
//     .join(", ");
//   const first = items[0];

//   const paymentStatus: "Pending" | "Paid" | "Failed" = "Pending";
//   const orderStatus: OrderStatus = "Pending";
//   const now = Timestamp.now();

//   const websiteOrderData = {
//     orderNumber,
//     userId: checkout.userId,
//     items,
//     shippingAddress: {
//       fullName,
//       phone,
//       email,
//       addressLine1: addr.addressLine1.trim(),
//       addressLine2: addr.addressLine2?.trim() || "",
//       city: addr.city.trim(),
//       state: addr.state.trim(),
//       postalCode: addr.postalCode.trim(),
//       country: addr.country || "India",
//     },
//     paymentMethod: checkout.paymentMethod,
//     paymentStatus,
//     orderStatus,
//     subtotal: Number(checkout.subtotal || 0),
//     shippingCharge: Number(checkout.shippingCharge || 0),
//     discount: Number(checkout.discount || 0),
//     tax: Number(checkout.tax || 0),
//     totalAmount: Number(checkout.totalAmount || 0),
//     notes: checkout.notes || "",
//     source: "Website",
//     createdAt: now,
//     updatedAt: now,
//   };

//   const erpOrderData = {
//     ...websiteOrderData,
//     orderNo: orderNumber,
//     customerName: fullName,
//     customer: fullName,
//     phone,
//     email,
//     product: productLabel || first?.name || "Furniture Item",
//     productName: productLabel || first?.name || "Furniture Item",
//     category: first?.category || "Other",
//     quantity: totalQty || 1,
//     amount: Number(checkout.totalAmount || 0),
//     total: Number(checkout.totalAmount || 0),
//     paid: 0,
//     status: orderStatus,
//     deliveryDate: "",
//     items: items.map((i) => ({
//       productId: i.productId,
//       name: i.name,
//       qty: Number(i.quantity) || 1,
//       price: Number(i.price) || 0,
//       image: i.image || "",
//       category: i.category || "",
//     })),
//   };

//   const websiteRef = await addDoc(
//     collection(db, ORDERS_COLLECTION),
//     websiteOrderData
//   );

//   await addDoc(collection(db, ERP_ORDERS_COLLECTION), {
//     ...erpOrderData,
//     websiteOrderId: websiteRef.id,
//   });

//   return {
//     id: websiteRef.id,
//     ...websiteOrderData,
//   } as Order;
// }

// export async function getOrder(orderId: string): Promise<Order | null> {
//   if (!orderId) throw new Error("Order ID is required");
//   const snapshot = await getDoc(doc(db, ORDERS_COLLECTION, orderId));
//   if (!snapshot.exists()) return null;
//   return { id: snapshot.id, ...snapshot.data() } as Order;
// }

// export async function getUserOrders(userId: string): Promise<Order[]> {
//   if (!userId) throw new Error("User ID is required");
//   const snapshot = await getDocs(
//     query(collection(db, ORDERS_COLLECTION), where("userId", "==", userId))
//   );
//   return snapshot.docs.map((d) => ({
//     id: d.id,
//     ...d.data(),
//   })) as Order[];
// }

// export async function updateOrderStatus(
//   orderId: string,
//   orderStatus: OrderStatus
// ): Promise<void> {
//   if (!orderId) throw new Error("Order ID is required");
//   await updateDoc(doc(db, ORDERS_COLLECTION, orderId), {
//     orderStatus,
//     updatedAt: Timestamp.now(),
//   });
// }

// export async function updatePaymentStatus(
//   orderId: string,
//   paymentStatus: "Pending" | "Paid" | "Failed"
// ): Promise<void> {
//   if (!orderId) throw new Error("Order ID is required");
//   await updateDoc(doc(db, ORDERS_COLLECTION, orderId), {
//     paymentStatus,
//     updatedAt: Timestamp.now(),
//   });
// }

// export async function markOrderAsPaid(orderId: string): Promise<void> {
//   await updatePaymentStatus(orderId, "Paid");
// }

// export async function cancelOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Cancelled");
//   // Mirror to furniture_orders if linked
//   try {
//     const q = query(
//       collection(db, ERP_ORDERS_COLLECTION),
//       where("websiteOrderId", "==", orderId)
//     );
//     const snap = await getDocs(q);
//     for (const d of snap.docs) {
//       await updateDoc(doc(db, ERP_ORDERS_COLLECTION, d.id), {
//         status: "Cancelled",
//         orderStatus: "Cancelled",
//         updatedAt: Timestamp.now(),
//       });
//     }
//   } catch (err) {
//     console.error("ERP cancel mirror failed:", err);
//   }
// }

// export async function confirmOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Confirmed");
// }

// export async function processOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Processing");
// }

// export async function shipOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Shipped");
// }

// export async function deliverOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Delivered");
// }

// export async function getAllOrders(): Promise<Order[]> {
//   const snapshot = await getDocs(collection(db, ORDERS_COLLECTION));
//   return snapshot.docs.map((d) => ({
//     id: d.id,
//     ...d.data(),
//   })) as Order[];
// }

// export async function getOrdersByStatus(
//   status: OrderStatus
// ): Promise<Order[]> {
//   const snapshot = await getDocs(
//     query(collection(db, ORDERS_COLLECTION), where("orderStatus", "==", status))
//   );
//   return snapshot.docs.map((d) => ({
//     id: d.id,
//     ...d.data(),
//   })) as Order[];
// }

// export function getOrderItemCount(items: CheckoutItem[]): number {
//   return items.reduce((total, item) => total + Number(item.quantity), 0);
// }

// export function formatCurrency(amount: number): string {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(amount);
// }

// import { db } from "@/lib/firebase";
// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   addDoc,
//   updateDoc,
//   query,
//   where,
//   Timestamp,
// } from "firebase/firestore";

// export type PaymentMethod =
//   | "COD"
//   | "UPI"
//   | "Card"
//   | "Bank Transfer";

// export type OrderStatus =
//   | "Pending"
//   | "Confirmed"
//   | "Processing"
//   | "Shipped"
//   | "Delivered"
//   | "Cancelled";

// export interface CheckoutItem {
//   productId: string;
//   name: string;
//   price: number;
//   quantity: number;
//   image?: string;
//   category?: string;
//   variant?: string;
// }

// export interface ShippingAddress {
//   fullName: string;
//   phone: string;
//   email?: string;
//   addressLine1: string;
//   addressLine2?: string;
//   city: string;
//   state: string;
//   postalCode: string;
//   country?: string;
// }

// export interface CheckoutData {
//   userId: string;
//   items: CheckoutItem[];
//   shippingAddress: ShippingAddress;
//   paymentMethod: PaymentMethod;
//   subtotal: number;
//   shippingCharge: number;
//   discount: number;
//   tax: number;
//   totalAmount: number;
//   notes?: string;
// }

// export interface Order {
//   id: string;
//   orderNumber: string;
//   userId: string;
//   items: CheckoutItem[];
//   shippingAddress: ShippingAddress;
//   paymentMethod: PaymentMethod;
//   paymentStatus: "Pending" | "Paid" | "Failed";
//   orderStatus: OrderStatus;
//   subtotal: number;
//   shippingCharge: number;
//   discount: number;
//   tax: number;
//   totalAmount: number;
//   notes?: string;
//   createdAt?: unknown;
//   updatedAt?: unknown;
// }

// const ORDERS_COLLECTION = "orders";
// const ERP_ORDERS_COLLECTION = "furniture_orders";

// function sanitizeItem(item: CheckoutItem): CheckoutItem {
//   const out: CheckoutItem = {
//     productId: String(item.productId || ""),
//     name: String(item.name || "Item"),
//     price: Number(item.price) || 0,
//     quantity: Math.max(1, Number(item.quantity) || 1),
//   };
//   if (item.image) out.image = String(item.image);
//   if (item.category) out.category = String(item.category);
//   if (item.variant) out.variant = String(item.variant);
//   return out;
// }

// export function calculateSubtotal(items: CheckoutItem[]): number {
//   return items.reduce(
//     (total, item) => total + Number(item.price) * Number(item.quantity),
//     0
//   );
// }

// export function calculateShipping(subtotal: number): number {
//   return subtotal >= 5000 ? 0 : 250;
// }

// export function calculateTax(subtotal: number, taxRate = 0.18): number {
//   return subtotal * taxRate;
// }

// export function calculateCheckoutTotal(
//   subtotal: number,
//   shippingCharge: number,
//   discount = 0,
//   tax = 0
// ): number {
//   return Math.max(0, subtotal + shippingCharge + tax - discount);
// }

// function generateOrderNumber(): string {
//   const now = new Date();
//   const year = now.getFullYear();
//   const month = String(now.getMonth() + 1).padStart(2, "0");
//   const day = String(now.getDate()).padStart(2, "0");
//   const randomNumber = Math.floor(1000 + Math.random() * 9000);
//   return `AKR-${year}${month}${day}-${randomNumber}`;
// }

// export function validateCheckout(checkout: CheckoutData): string[] {
//   const errors: string[] = [];
//   if (!checkout.userId) errors.push("User ID is required");
//   if (!checkout.items || checkout.items.length === 0) {
//     errors.push("Cart is empty");
//   }
//   if (!checkout.shippingAddress.fullName.trim()) {
//     errors.push("Full name is required");
//   }
//   if (!checkout.shippingAddress.phone.trim()) {
//     errors.push("Phone number is required");
//   }
//   if (!checkout.shippingAddress.addressLine1.trim()) {
//     errors.push("Address is required");
//   }
//   if (!checkout.shippingAddress.city.trim()) {
//     errors.push("City is required");
//   }
//   if (!checkout.shippingAddress.state.trim()) {
//     errors.push("State is required");
//   }
//   if (!checkout.shippingAddress.postalCode.trim()) {
//     errors.push("Postal code is required");
//   }
//   if (!checkout.paymentMethod) {
//     errors.push("Payment method is required");
//   }
//   return errors;
// }

// function isOnlineMethod(method: PaymentMethod): boolean {
//   return method === "Card" || method === "UPI" || method === "Bank Transfer";
// }

// export async function createOrder(checkout: CheckoutData): Promise<Order> {
//   const errors = validateCheckout(checkout);
//   if (errors.length > 0) {
//     throw new Error(errors.join(", "));
//   }

//   const orderNumber = generateOrderNumber();
//   const addr = checkout.shippingAddress;
//   const fullName = addr.fullName.trim();
//   const phone = addr.phone.trim();
//   const email = (addr.email || "").trim();
//   const items = checkout.items.map(sanitizeItem);

//   const totalQty = items.reduce((s, i) => s + Number(i.quantity || 0), 0);
//   const productLabel = items
//     .map((i) => i.name)
//     .filter(Boolean)
//     .join(", ");
//   const first = items[0];
//   const totalAmount = Number(checkout.totalAmount || 0);

//   // COD → Pending until staff marks paid
//   // Online → still Pending until Cashfree confirms (result page marks Paid)
//   const paymentStatus: "Pending" | "Paid" | "Failed" = "Pending";
//   const orderStatus: OrderStatus = "Pending";
//   const paidAmount = 0;
//   const now = Timestamp.now();

//   const websiteOrderData = {
//     orderNumber,
//     userId: checkout.userId,
//     items,
//     shippingAddress: {
//       fullName,
//       phone,
//       email,
//       addressLine1: addr.addressLine1.trim(),
//       addressLine2: addr.addressLine2?.trim() || "",
//       city: addr.city.trim(),
//       state: addr.state.trim(),
//       postalCode: addr.postalCode.trim(),
//       country: addr.country || "India",
//     },
//     paymentMethod: checkout.paymentMethod,
//     paymentStatus,
//     orderStatus,
//     subtotal: Number(checkout.subtotal || 0),
//     shippingCharge: Number(checkout.shippingCharge || 0),
//     discount: Number(checkout.discount || 0),
//     tax: Number(checkout.tax || 0),
//     totalAmount,
//     notes: checkout.notes || "",
//     source: "Website",
//     createdAt: now,
//     updatedAt: now,
//   };

//   const erpOrderData = {
//     ...websiteOrderData,
//     orderNo: orderNumber,
//     customerName: fullName,
//     customer: fullName,
//     phone,
//     email,
//     product: productLabel || first?.name || "Furniture Item",
//     productName: productLabel || first?.name || "Furniture Item",
//     category: first?.category || "Other",
//     quantity: totalQty || 1,
//     amount: totalAmount,
//     total: totalAmount,
//     paid: paidAmount,
//     status: orderStatus,
//     deliveryDate: "",
//     items: items.map((i) => ({
//       productId: i.productId,
//       name: i.name,
//       qty: Number(i.quantity) || 1,
//       price: Number(i.price) || 0,
//       image: i.image || "",
//       category: i.category || "",
//     })),
//   };

//   const websiteRef = await addDoc(
//     collection(db, ORDERS_COLLECTION),
//     websiteOrderData
//   );

//   await addDoc(collection(db, ERP_ORDERS_COLLECTION), {
//     ...erpOrderData,
//     websiteOrderId: websiteRef.id,
//   });

//   return {
//     id: websiteRef.id,
//     ...websiteOrderData,
//   } as Order;
// }

// export async function getOrder(orderId: string): Promise<Order | null> {
//   if (!orderId) throw new Error("Order ID is required");
//   const snapshot = await getDoc(doc(db, ORDERS_COLLECTION, orderId));
//   if (!snapshot.exists()) return null;
//   return { id: snapshot.id, ...snapshot.data() } as Order;
// }

// export async function getUserOrders(userId: string): Promise<Order[]> {
//   if (!userId) throw new Error("User ID is required");
//   const snapshot = await getDocs(
//     query(collection(db, ORDERS_COLLECTION), where("userId", "==", userId))
//   );
//   return snapshot.docs.map((d) => ({
//     id: d.id,
//     ...d.data(),
//   })) as Order[];
// }

// export async function updateOrderStatus(
//   orderId: string,
//   orderStatus: OrderStatus
// ): Promise<void> {
//   if (!orderId) throw new Error("Order ID is required");
//   await updateDoc(doc(db, ORDERS_COLLECTION, orderId), {
//     orderStatus,
//     updatedAt: Timestamp.now(),
//   });
// }

// export async function updatePaymentStatus(
//   orderId: string,
//   paymentStatus: "Pending" | "Paid" | "Failed"
// ): Promise<void> {
//   if (!orderId) throw new Error("Order ID is required");
//   await updateDoc(doc(db, ORDERS_COLLECTION, orderId), {
//     paymentStatus,
//     updatedAt: Timestamp.now(),
//   });
// }

// /** Mark paid on website + ERP (full amount) after online success or staff COD confirm */
// export async function markOrderAsPaid(orderId: string): Promise<void> {
//   if (!orderId) throw new Error("Order ID is required");

//   const snap = await getDoc(doc(db, ORDERS_COLLECTION, orderId));
//   const total = snap.exists()
//     ? Number(snap.data()?.totalAmount || 0)
//     : 0;

//   await updateDoc(doc(db, ORDERS_COLLECTION, orderId), {
//     paymentStatus: "Paid",
//     paid: total,
//     updatedAt: Timestamp.now(),
//   });

//   // Mirror ERP furniture_orders
//   try {
//     const q = query(
//       collection(db, ERP_ORDERS_COLLECTION),
//       where("websiteOrderId", "==", orderId)
//     );
//     const erpSnap = await getDocs(q);
//     for (const d of erpSnap.docs) {
//       const erpTotal = Number(
//         d.data()?.total ?? d.data()?.amount ?? d.data()?.totalAmount ?? total
//       );
//       await updateDoc(doc(db, ERP_ORDERS_COLLECTION, d.id), {
//         paymentStatus: "Paid",
//         paid: erpTotal,
//         updatedAt: Timestamp.now(),
//       });
//     }
//   } catch (err) {
//     console.error("ERP mark paid mirror failed:", err);
//   }
// }

// export async function cancelOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Cancelled");
//   try {
//     const q = query(
//       collection(db, ERP_ORDERS_COLLECTION),
//       where("websiteOrderId", "==", orderId)
//     );
//     const snap = await getDocs(q);
//     for (const d of snap.docs) {
//       await updateDoc(doc(db, ERP_ORDERS_COLLECTION, d.id), {
//         status: "Cancelled",
//         orderStatus: "Cancelled",
//         updatedAt: Timestamp.now(),
//       });
//     }
//   } catch (err) {
//     console.error("ERP cancel mirror failed:", err);
//   }
// }

// export async function confirmOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Confirmed");
// }

// export async function processOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Processing");
// }

// export async function shipOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Shipped");
// }

// export async function deliverOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Delivered");
// }

// export async function getAllOrders(): Promise<Order[]> {
//   const snapshot = await getDocs(collection(db, ORDERS_COLLECTION));
//   return snapshot.docs.map((d) => ({
//     id: d.id,
//     ...d.data(),
//   })) as Order[];
// }

// export async function getOrdersByStatus(
//   status: OrderStatus
// ): Promise<Order[]> {
//   const snapshot = await getDocs(
//     query(collection(db, ORDERS_COLLECTION), where("orderStatus", "==", status))
//   );
//   return snapshot.docs.map((d) => ({
//     id: d.id,
//     ...d.data(),
//   })) as Order[];
// }

// export function getOrderItemCount(items: CheckoutItem[]): number {
//   return items.reduce((total, item) => total + Number(item.quantity), 0);
// }

// export function formatCurrency(amount: number): string {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(amount);
// }

// // unused but keeps tree-shake friendly exports if you use elsewhere
// export { isOnlineMethod };

// import { db } from "@/lib/firebase";
// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   addDoc,
//   updateDoc,
//   query,
//   where,
//   Timestamp,
// } from "firebase/firestore";

// export type PaymentMethod = "COD" | "UPI" | "Card" | "Bank Transfer";

// export type OrderStatus =
//   | "Pending"
//   | "Confirmed"
//   | "Processing"
//   | "Shipped"
//   | "Delivered"
//   | "Cancelled";

// export interface CheckoutItem {
//   productId: string;
//   name: string;
//   price: number;
//   quantity: number;
//   image?: string;
//   category?: string;
//   variant?: string;
// }

// export interface ShippingAddress {
//   fullName: string;
//   phone: string;
//   email?: string;
//   addressLine1: string;
//   addressLine2?: string;
//   city: string;
//   state: string;
//   postalCode: string;
//   country?: string;
// }

// export interface CheckoutData {
//   userId: string;
//   items: CheckoutItem[];
//   shippingAddress: ShippingAddress;
//   paymentMethod: PaymentMethod;
//   subtotal: number;
//   shippingCharge: number;
//   discount: number;
//   tax: number;
//   totalAmount: number;
//   notes?: string;
// }

// export interface Order {
//   id: string;
//   orderNumber: string;
//   userId: string;
//   items: CheckoutItem[];
//   shippingAddress: ShippingAddress;
//   paymentMethod: PaymentMethod;
//   paymentStatus: "Pending" | "Paid" | "Failed";
//   orderStatus: OrderStatus;
//   subtotal: number;
//   shippingCharge: number;
//   discount: number;
//   tax: number;
//   totalAmount: number;
//   paid?: number;
//   notes?: string;
//   createdAt?: unknown;
//   updatedAt?: unknown;
// }

// const ORDERS_COLLECTION = "orders";
// const ERP_ORDERS_COLLECTION = "furniture_orders";

// function sanitizeItem(item: CheckoutItem): CheckoutItem {
//   const out: CheckoutItem = {
//     productId: String(item.productId || ""),
//     name: String(item.name || "Item"),
//     price: Number(item.price) || 0,
//     quantity: Math.max(1, Number(item.quantity) || 1),
//   };
//   if (item.image) out.image = String(item.image);
//   if (item.category) out.category = String(item.category);
//   if (item.variant) out.variant = String(item.variant);
//   return out;
// }

// export function calculateSubtotal(items: CheckoutItem[]): number {
//   return items.reduce(
//     (total, item) => total + Number(item.price) * Number(item.quantity),
//     0
//   );
// }

// export function calculateShipping(subtotal: number): number {
//   return subtotal >= 5000 ? 0 : 250;
// }

// export function calculateTax(subtotal: number, taxRate = 0.18): number {
//   return subtotal * taxRate;
// }

// export function calculateCheckoutTotal(
//   subtotal: number,
//   shippingCharge: number,
//   discount = 0,
//   tax = 0
// ): number {
//   return Math.max(0, subtotal + shippingCharge + tax - discount);
// }

// function generateOrderNumber(): string {
//   const now = new Date();
//   const year = now.getFullYear();
//   const month = String(now.getMonth() + 1).padStart(2, "0");
//   const day = String(now.getDate()).padStart(2, "0");
//   const randomNumber = Math.floor(1000 + Math.random() * 9000);
//   return `AKR-${year}${month}${day}-${randomNumber}`;
// }

// export function validateCheckout(checkout: CheckoutData): string[] {
//   const errors: string[] = [];
//   if (!checkout.userId) errors.push("User ID is required");
//   if (!checkout.items || checkout.items.length === 0) {
//     errors.push("Cart is empty");
//   }
//   if (!checkout.shippingAddress.fullName.trim()) {
//     errors.push("Full name is required");
//   }
//   if (!checkout.shippingAddress.phone.trim()) {
//     errors.push("Phone number is required");
//   }
//   if (!checkout.shippingAddress.addressLine1.trim()) {
//     errors.push("Address is required");
//   }
//   if (!checkout.shippingAddress.city.trim()) {
//     errors.push("City is required");
//   }
//   if (!checkout.shippingAddress.state.trim()) {
//     errors.push("State is required");
//   }
//   if (!checkout.shippingAddress.postalCode.trim()) {
//     errors.push("Postal code is required");
//   }
//   if (!checkout.paymentMethod) {
//     errors.push("Payment method is required");
//   }
//   return errors;
// }

// function isOnlineMethod(method: PaymentMethod | string): boolean {
//   const m = String(method || "").toUpperCase();
//   return (
//     m === "CARD" ||
//     m === "UPI" ||
//     m === "BANK TRANSFER" ||
//     m.includes("CASHFREE") ||
//     m.includes("ONLINE")
//   );
// }

// /** Hide failed / unpaid online attempts from customer order list */
// function isVisibleToCustomer(o: Order): boolean {
//   const pay = String(o.paymentStatus || "").toLowerCase();
//   const method = String(o.paymentMethod || "").toUpperCase();
//   const paid = Number(o.paid ?? 0) || 0;

//   if (pay === "failed") return false;

//   const isCod = method === "COD" || method === "";
//   if (!isCod && isOnlineMethod(method) && pay === "pending" && paid <= 0) {
//     return false;
//   }

//   return true;
// }

// export async function createOrder(checkout: CheckoutData): Promise<Order> {
//   const errors = validateCheckout(checkout);
//   if (errors.length > 0) {
//     throw new Error(errors.join(", "));
//   }

//   const orderNumber = generateOrderNumber();
//   const addr = checkout.shippingAddress;
//   const fullName = addr.fullName.trim();
//   const phone = addr.phone.trim();
//   const email = (addr.email || "").trim();
//   const items = checkout.items.map(sanitizeItem);

//   const totalQty = items.reduce((s, i) => s + Number(i.quantity || 0), 0);
//   const productLabel = items
//     .map((i) => i.name)
//     .filter(Boolean)
//     .join(", ");
//   const first = items[0];
//   const totalAmount = Number(checkout.totalAmount || 0);

//   const paymentStatus: "Pending" | "Paid" | "Failed" = "Pending";
//   const orderStatus: OrderStatus = "Pending";
//   const paidAmount = 0;
//   const now = Timestamp.now();

//   const websiteOrderData = {
//     orderNumber,
//     userId: checkout.userId,
//     items,
//     shippingAddress: {
//       fullName,
//       phone,
//       email,
//       addressLine1: addr.addressLine1.trim(),
//       addressLine2: addr.addressLine2?.trim() || "",
//       city: addr.city.trim(),
//       state: addr.state.trim(),
//       postalCode: addr.postalCode.trim(),
//       country: addr.country || "India",
//     },
//     paymentMethod: checkout.paymentMethod,
//     paymentStatus,
//     orderStatus,
//     subtotal: Number(checkout.subtotal || 0),
//     shippingCharge: Number(checkout.shippingCharge || 0),
//     discount: Number(checkout.discount || 0),
//     tax: Number(checkout.tax || 0),
//     totalAmount,
//     paid: paidAmount,
//     notes: checkout.notes || "",
//     source: "Website",
//     createdAt: now,
//     updatedAt: now,
//   };

//   const erpOrderData = {
//     ...websiteOrderData,
//     orderNo: orderNumber,
//     customerName: fullName,
//     customer: fullName,
//     phone,
//     email,
//     product: productLabel || first?.name || "Furniture Item",
//     productName: productLabel || first?.name || "Furniture Item",
//     category: first?.category || "Other",
//     quantity: totalQty || 1,
//     amount: totalAmount,
//     total: totalAmount,
//     paid: paidAmount,
//     status: orderStatus,
//     deliveryDate: "",
//     items: items.map((i) => ({
//       productId: i.productId,
//       name: i.name,
//       qty: Number(i.quantity) || 1,
//       price: Number(i.price) || 0,
//       image: i.image || "",
//       category: i.category || "",
//     })),
//   };

//   const websiteRef = await addDoc(
//     collection(db, ORDERS_COLLECTION),
//     websiteOrderData
//   );

//   await addDoc(collection(db, ERP_ORDERS_COLLECTION), {
//     ...erpOrderData,
//     websiteOrderId: websiteRef.id,
//   });

//   return {
//     id: websiteRef.id,
//     ...websiteOrderData,
//   } as Order;
// }

// export async function getOrder(orderId: string): Promise<Order | null> {
//   if (!orderId) throw new Error("Order ID is required");
//   const snapshot = await getDoc(doc(db, ORDERS_COLLECTION, orderId));
//   if (!snapshot.exists()) return null;
//   return { id: snapshot.id, ...snapshot.data() } as Order;
// }

// export async function getUserOrders(userId: string): Promise<Order[]> {
//   if (!userId) throw new Error("User ID is required");
//   const snapshot = await getDocs(
//     query(collection(db, ORDERS_COLLECTION), where("userId", "==", userId))
//   );
//   return snapshot.docs
//     .map((d) => ({ id: d.id, ...d.data() }) as Order)
//     .filter(isVisibleToCustomer);
// }

// export async function updateOrderStatus(
//   orderId: string,
//   orderStatus: OrderStatus
// ): Promise<void> {
//   if (!orderId) throw new Error("Order ID is required");
//   await updateDoc(doc(db, ORDERS_COLLECTION, orderId), {
//     orderStatus,
//     updatedAt: Timestamp.now(),
//   });
// }

// export async function updatePaymentStatus(
//   orderId: string,
//   paymentStatus: "Pending" | "Paid" | "Failed"
// ): Promise<void> {
//   if (!orderId) throw new Error("Order ID is required");

//   const payload: Record<string, unknown> = {
//     paymentStatus,
//     updatedAt: Timestamp.now(),
//   };

//   if (paymentStatus === "Failed") {
//     payload.orderStatus = "Cancelled";
//     payload.status = "Cancelled";
//   }

//   await updateDoc(doc(db, ORDERS_COLLECTION, orderId), payload);

//   try {
//     const q = query(
//       collection(db, ERP_ORDERS_COLLECTION),
//       where("websiteOrderId", "==", orderId)
//     );
//     const erpSnap = await getDocs(q);
//     for (const d of erpSnap.docs) {
//       await updateDoc(doc(db, ERP_ORDERS_COLLECTION, d.id), {
//         paymentStatus,
//         ...(paymentStatus === "Failed"
//           ? { status: "Cancelled", orderStatus: "Cancelled" }
//           : {}),
//         updatedAt: Timestamp.now(),
//       });
//     }
//   } catch (err) {
//     console.error("ERP payment status mirror failed:", err);
//   }
// }

// export async function markOrderAsPaid(orderId: string): Promise<void> {
//   if (!orderId) throw new Error("Order ID is required");

//   const snap = await getDoc(doc(db, ORDERS_COLLECTION, orderId));
//   const total = snap.exists() ? Number(snap.data()?.totalAmount || 0) : 0;

//   await updateDoc(doc(db, ORDERS_COLLECTION, orderId), {
//     paymentStatus: "Paid",
//     paid: total,
//     orderStatus: "Confirmed",
//     updatedAt: Timestamp.now(),
//   });

//   try {
//     const q = query(
//       collection(db, ERP_ORDERS_COLLECTION),
//       where("websiteOrderId", "==", orderId)
//     );
//     const erpSnap = await getDocs(q);
//     for (const d of erpSnap.docs) {
//       const erpTotal = Number(
//         d.data()?.total ?? d.data()?.amount ?? d.data()?.totalAmount ?? total
//       );
//       await updateDoc(doc(db, ERP_ORDERS_COLLECTION, d.id), {
//         paymentStatus: "Paid",
//         paid: erpTotal,
//         status: "Confirmed",
//         orderStatus: "Confirmed",
//         updatedAt: Timestamp.now(),
//       });
//     }
//   } catch (err) {
//     console.error("ERP mark paid mirror failed:", err);
//   }
// }

// export async function cancelOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Cancelled");
//   try {
//     const q = query(
//       collection(db, ERP_ORDERS_COLLECTION),
//       where("websiteOrderId", "==", orderId)
//     );
//     const snap = await getDocs(q);
//     for (const d of snap.docs) {
//       await updateDoc(doc(db, ERP_ORDERS_COLLECTION, d.id), {
//         status: "Cancelled",
//         orderStatus: "Cancelled",
//         updatedAt: Timestamp.now(),
//       });
//     }
//   } catch (err) {
//     console.error("ERP cancel mirror failed:", err);
//   }
// }

// export async function confirmOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Confirmed");
// }

// export async function processOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Processing");
// }

// export async function shipOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Shipped");
// }

// export async function deliverOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Delivered");
// }

// export async function getAllOrders(): Promise<Order[]> {
//   const snapshot = await getDocs(collection(db, ORDERS_COLLECTION));
//   return snapshot.docs.map((d) => ({
//     id: d.id,
//     ...d.data(),
//   })) as Order[];
// }

// export async function getOrdersByStatus(
//   status: OrderStatus
// ): Promise<Order[]> {
//   const snapshot = await getDocs(
//     query(collection(db, ORDERS_COLLECTION), where("orderStatus", "==", status))
//   );
//   return snapshot.docs.map((d) => ({
//     id: d.id,
//     ...d.data(),
//   })) as Order[];
// }

// export function getOrderItemCount(items: CheckoutItem[]): number {
//   return items.reduce((total, item) => total + Number(item.quantity), 0);
// }

// export function formatCurrency(amount: number): string {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(amount);
// }

// export { isOnlineMethod };

// import { db } from "@/lib/firebase";
// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   addDoc,
//   updateDoc,
//   query,
//   where,
//   Timestamp,
//   limit,
// } from "firebase/firestore";

// export type PaymentMethod = "COD" | "UPI" | "Card" | "Bank Transfer";

// export type OrderStatus =
//   | "Pending"
//   | "Confirmed"
//   | "Processing"
//   | "Shipped"
//   | "Delivered"
//   | "Cancelled";

// export interface CheckoutItem {
//   productId: string;
//   name: string;
//   price: number;
//   quantity: number;
//   image?: string;
//   category?: string;
//   variant?: string;
// }

// export interface ShippingAddress {
//   fullName: string;
//   phone: string;
//   email?: string;
//   addressLine1: string;
//   addressLine2?: string;
//   city: string;
//   state: string;
//   postalCode: string;
//   country?: string;
// }

// export interface CheckoutData {
//   userId: string;
//   items: CheckoutItem[];
//   shippingAddress: ShippingAddress;
//   paymentMethod: PaymentMethod;
//   subtotal: number;
//   shippingCharge: number;
//   discount: number;
//   tax: number;
//   totalAmount: number;
//   notes?: string;
// }

// export interface Order {
//   id: string;
//   orderNumber: string;
//   userId: string;
//   items: CheckoutItem[];
//   shippingAddress: ShippingAddress;
//   paymentMethod: PaymentMethod;
//   paymentStatus: "Pending" | "Paid" | "Failed";
//   orderStatus: OrderStatus;
//   subtotal: number;
//   shippingCharge: number;
//   discount: number;
//   tax: number;
//   totalAmount: number;
//   paid?: number;
//   stockDeducted?: boolean;
//   notes?: string;
//   createdAt?: unknown;
//   updatedAt?: unknown;
// }

// const ORDERS_COLLECTION = "orders";
// const ERP_ORDERS_COLLECTION = "furniture_orders";
// const PRODUCTS_COLLECTION = "furniture_products";

// function sanitizeItem(item: CheckoutItem): CheckoutItem {
//   const out: CheckoutItem = {
//     productId: String(item.productId || ""),
//     name: String(item.name || "Item"),
//     price: Number(item.price) || 0,
//     quantity: Math.max(1, Number(item.quantity) || 1),
//   };
//   if (item.image) out.image = String(item.image);
//   if (item.category) out.category = String(item.category);
//   if (item.variant) out.variant = String(item.variant);
//   return out;
// }

// export function calculateSubtotal(items: CheckoutItem[]): number {
//   return items.reduce(
//     (total, item) => total + Number(item.price) * Number(item.quantity),
//     0
//   );
// }

// export function calculateShipping(subtotal: number): number {
//   return subtotal >= 5000 ? 0 : 250;
// }

// export function calculateTax(subtotal: number, taxRate = 0.18): number {
//   return subtotal * taxRate;
// }

// export function calculateCheckoutTotal(
//   subtotal: number,
//   shippingCharge: number,
//   discount = 0,
//   tax = 0
// ): number {
//   return Math.max(0, subtotal + shippingCharge + tax - discount);
// }

// function generateOrderNumber(): string {
//   const now = new Date();
//   const year = now.getFullYear();
//   const month = String(now.getMonth() + 1).padStart(2, "0");
//   const day = String(now.getDate()).padStart(2, "0");
//   const randomNumber = Math.floor(1000 + Math.random() * 9000);
//   return `AKR-${year}${month}${day}-${randomNumber}`;
// }

// export function validateCheckout(checkout: CheckoutData): string[] {
//   const errors: string[] = [];
//   if (!checkout.userId) errors.push("User ID is required");
//   if (!checkout.items || checkout.items.length === 0) {
//     errors.push("Cart is empty");
//   }
//   if (!checkout.shippingAddress.fullName.trim()) {
//     errors.push("Full name is required");
//   }
//   if (!checkout.shippingAddress.phone.trim()) {
//     errors.push("Phone number is required");
//   }
//   if (!checkout.shippingAddress.addressLine1.trim()) {
//     errors.push("Address is required");
//   }
//   if (!checkout.shippingAddress.city.trim()) {
//     errors.push("City is required");
//   }
//   if (!checkout.shippingAddress.state.trim()) {
//     errors.push("State is required");
//   }
//   if (!checkout.shippingAddress.postalCode.trim()) {
//     errors.push("Postal code is required");
//   }
//   if (!checkout.paymentMethod) {
//     errors.push("Payment method is required");
//   }
//   return errors;
// }

// function isOnlineMethod(method: PaymentMethod | string): boolean {
//   const m = String(method || "").toUpperCase();
//   return (
//     m === "CARD" ||
//     m === "UPI" ||
//     m === "BANK TRANSFER" ||
//     m.includes("CASHFREE") ||
//     m.includes("ONLINE")
//   );
// }

// function isVisibleToCustomer(o: Order): boolean {
//   const pay = String(o.paymentStatus || "").toLowerCase();
//   const method = String(o.paymentMethod || "").toUpperCase();
//   const paid = Number(o.paid ?? 0) || 0;

//   if (pay === "failed") return false;

//   const isCod = method === "COD" || method === "";
//   if (!isCod && isOnlineMethod(method) && pay === "pending" && paid <= 0) {
//     return false;
//   }

//   return true;
// }

// /** Find furniture_products doc by id, sku, code, or name */
// async function findFurnitureProduct(item: {
//   productId?: string;
//   name?: string;
// }): Promise<{ id: string; stock: number; reorderLevel: number } | null> {
//   if (item.productId) {
//     const byId = await getDoc(doc(db, PRODUCTS_COLLECTION, item.productId));
//     if (byId.exists()) {
//       const d = byId.data();
//       return {
//         id: byId.id,
//         stock: Number(d.stock ?? 0) || 0,
//         reorderLevel: Number(d.reorderLevel ?? d.minStock ?? 0) || 0,
//       };
//     }
//   }

//   const name = (item.name || "").trim();
//   if (!name) return null;

//   // Match sku / code (e.g. SOFA-001)
//   for (const field of ["sku", "code"] as const) {
//     const q1 = query(
//       collection(db, PRODUCTS_COLLECTION),
//       where(field, "==", name),
//       limit(1)
//     );
//     const s1 = await getDocs(q1);
//     if (!s1.empty) {
//       const d = s1.docs[0];
//       const data = d.data();
//       return {
//         id: d.id,
//         stock: Number(data.stock ?? 0) || 0,
//         reorderLevel: Number(data.reorderLevel ?? data.minStock ?? 0) || 0,
//       };
//     }
//   }

//   const qName = query(
//     collection(db, PRODUCTS_COLLECTION),
//     where("name", "==", name),
//     limit(1)
//   );
//   const sName = await getDocs(qName);
//   if (!sName.empty) {
//     const d = sName.docs[0];
//     const data = d.data();
//     return {
//       id: d.id,
//       stock: Number(data.stock ?? 0) || 0,
//       reorderLevel: Number(data.reorderLevel ?? data.minStock ?? 0) || 0,
//     };
//   }

//   // Case-insensitive fallback
//   const all = await getDocs(collection(db, PRODUCTS_COLLECTION));
//   const lower = name.toLowerCase();
//   for (const d of all.docs) {
//     const data = d.data();
//     const n = String(data.name || "").toLowerCase();
//     const sku = String(data.sku || data.code || "").toLowerCase();
//     if (n === lower || sku === lower) {
//       return {
//         id: d.id,
//         stock: Number(data.stock ?? 0) || 0,
//         reorderLevel: Number(data.reorderLevel ?? data.minStock ?? 0) || 0,
//       };
//     }
//   }

//   return null;
// }

// /**
//  * Decrease furniture_products.stock for each line item.
//  * Returns true if at least one product was updated.
//  */
// export async function deductStockForItems(
//   items: CheckoutItem[],
//   reason: string
// ): Promise<boolean> {
//   let any = false;

//   for (const item of items) {
//     const qty = Math.max(1, Number(item.quantity) || 1);
//     const product = await findFurnitureProduct({
//       productId: item.productId,
//       name: item.name,
//     });

//     if (!product) {
//       console.warn("deductStockForItems: product not found", item);
//       continue;
//     }

//     const next = Math.max(0, product.stock - qty);
//     let status = "In Stock";
//     if (next <= 0) status = "Out of Stock";
//     else if (next <= product.reorderLevel) status = "Low Stock";

//     await updateDoc(doc(db, PRODUCTS_COLLECTION, product.id), {
//       stock: next,
//       status,
//       updatedAt: Timestamp.now(),
//     });
//     any = true;
//     console.log(
//       `Stock ${reason}: ${item.name} ${product.stock} → ${next}`
//     );
//   }

//   return any;
// }

// export async function createOrder(checkout: CheckoutData): Promise<Order> {
//   const errors = validateCheckout(checkout);
//   if (errors.length > 0) {
//     throw new Error(errors.join(", "));
//   }

//   const orderNumber = generateOrderNumber();
//   const addr = checkout.shippingAddress;
//   const fullName = addr.fullName.trim();
//   const phone = addr.phone.trim();
//   const email = (addr.email || "").trim();
//   const items = checkout.items.map(sanitizeItem);

//   const totalQty = items.reduce((s, i) => s + Number(i.quantity || 0), 0);
//   const productLabel = items
//     .map((i) => i.name)
//     .filter(Boolean)
//     .join(", ");
//   const first = items[0];
//   const totalAmount = Number(checkout.totalAmount || 0);

//   const isCod = checkout.paymentMethod === "COD";
//   const paymentStatus: "Pending" | "Paid" | "Failed" = "Pending";
//   const orderStatus: OrderStatus = isCod ? "Confirmed" : "Pending";
//   const paidAmount = 0;
//   const now = Timestamp.now();

//   // COD = committed sale → deduct stock now
//   // Online = deduct only after markOrderAsPaid
//   let stockDeducted = false;
//   if (isCod) {
//     try {
//       stockDeducted = await deductStockForItems(items, `COD order ${orderNumber}`);
//     } catch (e) {
//       console.error("COD stock deduct failed:", e);
//     }
//   }

//   const websiteOrderData = {
//     orderNumber,
//     userId: checkout.userId,
//     items,
//     shippingAddress: {
//       fullName,
//       phone,
//       email,
//       addressLine1: addr.addressLine1.trim(),
//       addressLine2: addr.addressLine2?.trim() || "",
//       city: addr.city.trim(),
//       state: addr.state.trim(),
//       postalCode: addr.postalCode.trim(),
//       country: addr.country || "India",
//     },
//     paymentMethod: checkout.paymentMethod,
//     paymentStatus,
//     orderStatus,
//     subtotal: Number(checkout.subtotal || 0),
//     shippingCharge: Number(checkout.shippingCharge || 0),
//     discount: Number(checkout.discount || 0),
//     tax: Number(checkout.tax || 0),
//     totalAmount,
//     paid: paidAmount,
//     stockDeducted,
//     notes: checkout.notes || "",
//     source: "Website",
//     createdAt: now,
//     updatedAt: now,
//   };

//   const erpOrderData = {
//     ...websiteOrderData,
//     orderNo: orderNumber,
//     customerName: fullName,
//     customer: fullName,
//     phone,
//     email,
//     product: productLabel || first?.name || "Furniture Item",
//     productName: productLabel || first?.name || "Furniture Item",
//     category: first?.category || "Other",
//     quantity: totalQty || 1,
//     amount: totalAmount,
//     total: totalAmount,
//     paid: paidAmount,
//     status: orderStatus,
//     deliveryDate: "",
//     items: items.map((i) => ({
//       productId: i.productId,
//       name: i.name,
//       qty: Number(i.quantity) || 1,
//       price: Number(i.price) || 0,
//       image: i.image || "",
//       category: i.category || "",
//     })),
//   };

//   const websiteRef = await addDoc(
//     collection(db, ORDERS_COLLECTION),
//     websiteOrderData
//   );

//   await addDoc(collection(db, ERP_ORDERS_COLLECTION), {
//     ...erpOrderData,
//     websiteOrderId: websiteRef.id,
//   });

//   return {
//     id: websiteRef.id,
//     ...websiteOrderData,
//   } as Order;
// }

// export async function getOrder(orderId: string): Promise<Order | null> {
//   if (!orderId) throw new Error("Order ID is required");
//   const snapshot = await getDoc(doc(db, ORDERS_COLLECTION, orderId));
//   if (!snapshot.exists()) return null;
//   return { id: snapshot.id, ...snapshot.data() } as Order;
// }

// export async function getUserOrders(userId: string): Promise<Order[]> {
//   if (!userId) throw new Error("User ID is required");
//   const snapshot = await getDocs(
//     query(collection(db, ORDERS_COLLECTION), where("userId", "==", userId))
//   );
//   return snapshot.docs
//     .map((d) => ({ id: d.id, ...d.data() }) as Order)
//     .filter(isVisibleToCustomer);
// }

// export async function updateOrderStatus(
//   orderId: string,
//   orderStatus: OrderStatus
// ): Promise<void> {
//   if (!orderId) throw new Error("Order ID is required");
//   await updateDoc(doc(db, ORDERS_COLLECTION, orderId), {
//     orderStatus,
//     updatedAt: Timestamp.now(),
//   });
// }

// export async function updatePaymentStatus(
//   orderId: string,
//   paymentStatus: "Pending" | "Paid" | "Failed"
// ): Promise<void> {
//   if (!orderId) throw new Error("Order ID is required");

//   const payload: Record<string, unknown> = {
//     paymentStatus,
//     updatedAt: Timestamp.now(),
//   };

//   if (paymentStatus === "Failed") {
//     payload.orderStatus = "Cancelled";
//     payload.status = "Cancelled";
//   }

//   await updateDoc(doc(db, ORDERS_COLLECTION, orderId), payload);

//   try {
//     const q = query(
//       collection(db, ERP_ORDERS_COLLECTION),
//       where("websiteOrderId", "==", orderId)
//     );
//     const erpSnap = await getDocs(q);
//     for (const d of erpSnap.docs) {
//       await updateDoc(doc(db, ERP_ORDERS_COLLECTION, d.id), {
//         paymentStatus,
//         ...(paymentStatus === "Failed"
//           ? { status: "Cancelled", orderStatus: "Cancelled" }
//           : {}),
//         updatedAt: Timestamp.now(),
//       });
//     }
//   } catch (err) {
//     console.error("ERP payment status mirror failed:", err);
//   }
// }

// /** Mark paid + deduct stock once (online payments) */
// export async function markOrderAsPaid(orderId: string): Promise<void> {
//   if (!orderId) throw new Error("Order ID is required");

//   const snap = await getDoc(doc(db, ORDERS_COLLECTION, orderId));
//   if (!snap.exists()) throw new Error("Order not found");

//   const data = snap.data();
//   const total = Number(data.totalAmount || 0);
//   const alreadyDeducted = Boolean(data.stockDeducted);
//   const items = (data.items || []) as CheckoutItem[];

//   if (!alreadyDeducted && items.length > 0) {
//     try {
//       await deductStockForItems(
//         items.map(sanitizeItem),
//         `Paid order ${data.orderNumber || orderId}`
//       );
//     } catch (e) {
//       console.error("Stock deduct on paid failed:", e);
//     }
//   }

//   await updateDoc(doc(db, ORDERS_COLLECTION, orderId), {
//     paymentStatus: "Paid",
//     paid: total,
//     orderStatus: "Confirmed",
//     stockDeducted: true,
//     updatedAt: Timestamp.now(),
//   });

//   try {
//     const q = query(
//       collection(db, ERP_ORDERS_COLLECTION),
//       where("websiteOrderId", "==", orderId)
//     );
//     const erpSnap = await getDocs(q);
//     for (const d of erpSnap.docs) {
//       const erpTotal = Number(
//         d.data()?.total ?? d.data()?.amount ?? d.data()?.totalAmount ?? total
//       );
//       await updateDoc(doc(db, ERP_ORDERS_COLLECTION, d.id), {
//         paymentStatus: "Paid",
//         paid: erpTotal,
//         status: "Confirmed",
//         orderStatus: "Confirmed",
//         stockDeducted: true,
//         updatedAt: Timestamp.now(),
//       });
//     }
//   } catch (err) {
//     console.error("ERP mark paid mirror failed:", err);
//   }
// }

// export async function cancelOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Cancelled");
//   try {
//     const q = query(
//       collection(db, ERP_ORDERS_COLLECTION),
//       where("websiteOrderId", "==", orderId)
//     );
//     const snap = await getDocs(q);
//     for (const d of snap.docs) {
//       await updateDoc(doc(db, ERP_ORDERS_COLLECTION, d.id), {
//         status: "Cancelled",
//         orderStatus: "Cancelled",
//         updatedAt: Timestamp.now(),
//       });
//     }
//   } catch (err) {
//     console.error("ERP cancel mirror failed:", err);
//   }
// }

// export async function confirmOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Confirmed");
// }

// export async function processOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Processing");
// }

// export async function shipOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Shipped");
// }

// export async function deliverOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Delivered");
// }

// export async function getAllOrders(): Promise<Order[]> {
//   const snapshot = await getDocs(collection(db, ORDERS_COLLECTION));
//   return snapshot.docs.map((d) => ({
//     id: d.id,
//     ...d.data(),
//   })) as Order[];
// }

// export async function getOrdersByStatus(
//   status: OrderStatus
// ): Promise<Order[]> {
//   const snapshot = await getDocs(
//     query(collection(db, ORDERS_COLLECTION), where("orderStatus", "==", status))
//   );
//   return snapshot.docs.map((d) => ({
//     id: d.id,
//     ...d.data(),
//   })) as Order[];
// }

// export function getOrderItemCount(items: CheckoutItem[]): number {
//   return items.reduce((total, item) => total + Number(item.quantity), 0);
// }

// export function formatCurrency(amount: number): string {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(amount);
// }

// export { isOnlineMethod };

// /** Parse ERP leadTime string/number → days */
// export function parseLeadTimeDays(value: unknown, fallback = 7): number {
//   if (typeof value === "number" && Number.isFinite(value) && value > 0) {
//     return Math.min(365, Math.floor(value));
//   }
//   const s = String(value ?? "").trim();
//   if (!s || s === "—") return fallback;
//   const nums = s.match(/\d+/g);
//   if (!nums?.length) return fallback;
//   const max = Math.max(...nums.map((n) => parseInt(n, 10)).filter((n) => n > 0));
//   return Number.isFinite(max) ? Math.min(365, max) : fallback;
// }

// export function addCalendarDays(base: Date, days: number): Date {
//   const d = new Date(base);
//   d.setHours(12, 0, 0, 0);
//   d.setDate(d.getDate() + days);
//   return d;
// }

// export function formatExpectedDeliveryLabel(date: Date): string {
//   return date.toLocaleDateString("en-IN", {
//     weekday: "short",
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });
// }

// /** Max lead time across cart lines (uses item.leadTimeDays or product lookup). */
// export async function resolveCartLeadTimeDays(
//   items: CheckoutItem[]
// ): Promise<number> {
//   let maxDays = 0;

//   for (const item of items) {
//     if (item.leadTimeDays && item.leadTimeDays > 0) {
//       maxDays = Math.max(maxDays, item.leadTimeDays);
//       continue;
//     }
//     try {
//       if (item.productId) {
//         const snap = await getDoc(doc(db, PRODUCTS_COLLECTION, item.productId));
//         if (snap.exists()) {
//           const days = parseLeadTimeDays(snap.data().leadTime ?? snap.data().leadTimeDays);
//           maxDays = Math.max(maxDays, days);
//           continue;
//         }
//       }
//     } catch {
//       /* ignore */
//     }
//     maxDays = Math.max(maxDays, parseLeadTimeDays(undefined, 7));
//   }

//   return maxDays > 0 ? maxDays : 7;
// }


// import { db } from "@/lib/firebase";
// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   addDoc,
//   updateDoc,
//   query,
//   where,
//   Timestamp,
//   limit,
// } from "firebase/firestore";

// export type PaymentMethod = "COD" | "UPI" | "Card" | "Bank Transfer";

// export type OrderStatus =
//   | "Pending"
//   | "Confirmed"
//   | "Processing"
//   | "Shipped"
//   | "Delivered"
//   | "Cancelled";

// export interface CheckoutItem {
//   productId: string;
//   name: string;
//   price: number;
//   quantity: number;
//   image?: string;
//   category?: string;
//   variant?: string;
//   /** Days until estimated delivery for this line (from product lead time). */
//   leadTimeDays?: number;
// }

// export interface ShippingAddress {
//   fullName: string;
//   phone: string;
//   email?: string;
//   addressLine1: string;
//   addressLine2?: string;
//   city: string;
//   state: string;
//   postalCode: string;
//   country?: string;
// }

// export interface CheckoutData {
//   userId: string;
//   items: CheckoutItem[];
//   shippingAddress: ShippingAddress;
//   paymentMethod: PaymentMethod;
//   subtotal: number;
//   shippingCharge: number;
//   discount: number;
//   tax: number;
//   totalAmount: number;
//   notes?: string;
// }

// export interface Order {
//   id: string;
//   orderNumber: string;
//   userId: string;
//   items: CheckoutItem[];
//   shippingAddress: ShippingAddress;
//   paymentMethod: PaymentMethod;
//   paymentStatus: "Pending" | "Paid" | "Failed";
//   orderStatus: OrderStatus;
//   subtotal: number;
//   shippingCharge: number;
//   discount: number;
//   tax: number;
//   totalAmount: number;
//   paid?: number;
//   stockDeducted?: boolean;
//   notes?: string;
//   /** Max lead time (days) used for this order. */
//   leadTimeDays?: number;
//   /** ISO date YYYY-MM-DD */
//   expectedDeliveryDate?: string;
//   /** Human-readable label, e.g. "Fri, 24 Oct 2026" */
//   expectedDeliveryLabel?: string;
//   /** ERP mirror field */
//   deliveryDate?: string;
//   createdAt?: unknown;
//   updatedAt?: unknown;
// }

// const ORDERS_COLLECTION = "orders";
// const ERP_ORDERS_COLLECTION = "furniture_orders";
// const PRODUCTS_COLLECTION = "furniture_products";

// const DEFAULT_LEAD_TIME_DAYS = 7;

// /* -------------------------------------------------------------------------- */
// /* Lead time helpers                                                           */
// /* -------------------------------------------------------------------------- */

// /**
//  * Parse ERP lead time: number, "7", "7 days", "5-7 days" → days.
//  * Uses the highest number found; falls back to DEFAULT_LEAD_TIME_DAYS.
//  */
// export function parseLeadTimeDays(
//   value: unknown,
//   fallback = DEFAULT_LEAD_TIME_DAYS
// ): number {
//   if (typeof value === "number" && Number.isFinite(value) && value > 0) {
//     return Math.min(365, Math.floor(value));
//   }

//   const s = String(value ?? "").trim();
//   if (!s || s === "—") return fallback;

//   const nums = s.match(/\d+/g);
//   if (!nums?.length) return fallback;

//   const max = Math.max(
//     ...nums.map((n) => parseInt(n, 10)).filter((n) => n > 0)
//   );

//   return Number.isFinite(max) ? Math.min(365, max) : fallback;
// }

// export function addCalendarDays(base: Date, days: number): Date {
//   const d = new Date(base);
//   d.setHours(12, 0, 0, 0);
//   d.setDate(d.getDate() + Math.max(0, Math.floor(days)));
//   return d;
// }

// export function formatExpectedDeliveryLabel(date: Date): string {
//   return date.toLocaleDateString("en-IN", {
//     weekday: "short",
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });
// }

// /**
//  * Resolve max lead time for cart lines.
//  * Prefers item.leadTimeDays; otherwise loads furniture_products.leadTime.
//  */
// export async function resolveCartLeadTimeDays(
//   items: CheckoutItem[]
// ): Promise<number> {
//   let maxDays = 0;

//   for (const item of items) {
//     if (item.leadTimeDays && item.leadTimeDays > 0) {
//       maxDays = Math.max(maxDays, Math.floor(item.leadTimeDays));
//       continue;
//     }

//     try {
//       if (item.productId) {
//         const snap = await getDoc(doc(db, PRODUCTS_COLLECTION, item.productId));
//         if (snap.exists()) {
//           const data = snap.data();
//           const days = parseLeadTimeDays(
//             data.leadTime ?? data.leadTimeDays
//           );
//           maxDays = Math.max(maxDays, days);
//           continue;
//         }
//       }
//     } catch (err) {
//       console.warn("resolveCartLeadTimeDays: product lookup failed", err);
//     }

//     maxDays = Math.max(maxDays, DEFAULT_LEAD_TIME_DAYS);
//   }

//   return maxDays > 0 ? maxDays : DEFAULT_LEAD_TIME_DAYS;
// }

// /* -------------------------------------------------------------------------- */
// /* Item / totals helpers                                                       */
// /* -------------------------------------------------------------------------- */

// function sanitizeItem(item: CheckoutItem): CheckoutItem {
//   const out: CheckoutItem = {
//     productId: String(item.productId || ""),
//     name: String(item.name || "Item"),
//     price: Number(item.price) || 0,
//     quantity: Math.max(1, Number(item.quantity) || 1),
//   };
//   if (item.image) out.image = String(item.image);
//   if (item.category) out.category = String(item.category);
//   if (item.variant) out.variant = String(item.variant);
//   if (item.leadTimeDays && item.leadTimeDays > 0) {
//     out.leadTimeDays = Math.floor(Number(item.leadTimeDays));
//   }
//   return out;
// }

// export function calculateSubtotal(items: CheckoutItem[]): number {
//   return items.reduce(
//     (total, item) => total + Number(item.price) * Number(item.quantity),
//     0
//   );
// }

// export function calculateShipping(subtotal: number): number {
//   return subtotal >= 5000 ? 0 : 250;
// }

// export function calculateTax(subtotal: number, taxRate = 0.18): number {
//   return subtotal * taxRate;
// }

// export function calculateCheckoutTotal(
//   subtotal: number,
//   shippingCharge: number,
//   discount = 0,
//   tax = 0
// ): number {
//   return Math.max(0, subtotal + shippingCharge + tax - discount);
// }

// function generateOrderNumber(): string {
//   const now = new Date();
//   const year = now.getFullYear();
//   const month = String(now.getMonth() + 1).padStart(2, "0");
//   const day = String(now.getDate()).padStart(2, "0");
//   const randomNumber = Math.floor(1000 + Math.random() * 9000);
//   return `AKR-${year}${month}${day}-${randomNumber}`;
// }

// export function validateCheckout(checkout: CheckoutData): string[] {
//   const errors: string[] = [];
//   if (!checkout.userId) errors.push("User ID is required");
//   if (!checkout.items || checkout.items.length === 0) {
//     errors.push("Cart is empty");
//   }
//   if (!checkout.shippingAddress.fullName.trim()) {
//     errors.push("Full name is required");
//   }
//   if (!checkout.shippingAddress.phone.trim()) {
//     errors.push("Phone number is required");
//   }
//   if (!checkout.shippingAddress.addressLine1.trim()) {
//     errors.push("Address is required");
//   }
//   if (!checkout.shippingAddress.city.trim()) {
//     errors.push("City is required");
//   }
//   if (!checkout.shippingAddress.state.trim()) {
//     errors.push("State is required");
//   }
//   if (!checkout.shippingAddress.postalCode.trim()) {
//     errors.push("Postal code is required");
//   }
//   if (!checkout.paymentMethod) {
//     errors.push("Payment method is required");
//   }
//   return errors;
// }

// function isOnlineMethod(method: PaymentMethod | string): boolean {
//   const m = String(method || "").toUpperCase();
//   return (
//     m === "CARD" ||
//     m === "UPI" ||
//     m === "BANK TRANSFER" ||
//     m.includes("CASHFREE") ||
//     m.includes("ONLINE")
//   );
// }

// function isVisibleToCustomer(o: Order): boolean {
//   const pay = String(o.paymentStatus || "").toLowerCase();
//   const method = String(o.paymentMethod || "").toUpperCase();
//   const paid = Number(o.paid ?? 0) || 0;

//   if (pay === "failed") return false;

//   const isCod = method === "COD" || method === "";
//   if (!isCod && isOnlineMethod(method) && pay === "pending" && paid <= 0) {
//     return false;
//   }

//   return true;
// }

// /** Find furniture_products doc by id, sku, code, or name */
// async function findFurnitureProduct(item: {
//   productId?: string;
//   name?: string;
// }): Promise<{ id: string; stock: number; reorderLevel: number } | null> {
//   if (item.productId) {
//     const byId = await getDoc(doc(db, PRODUCTS_COLLECTION, item.productId));
//     if (byId.exists()) {
//       const d = byId.data();
//       return {
//         id: byId.id,
//         stock: Number(d.stock ?? 0) || 0,
//         reorderLevel: Number(d.reorderLevel ?? d.minStock ?? 0) || 0,
//       };
//     }
//   }

//   const name = (item.name || "").trim();
//   if (!name) return null;

//   for (const field of ["sku", "code"] as const) {
//     const q1 = query(
//       collection(db, PRODUCTS_COLLECTION),
//       where(field, "==", name),
//       limit(1)
//     );
//     const s1 = await getDocs(q1);
//     if (!s1.empty) {
//       const d = s1.docs[0];
//       const data = d.data();
//       return {
//         id: d.id,
//         stock: Number(data.stock ?? 0) || 0,
//         reorderLevel: Number(data.reorderLevel ?? data.minStock ?? 0) || 0,
//       };
//     }
//   }

//   const qName = query(
//     collection(db, PRODUCTS_COLLECTION),
//     where("name", "==", name),
//     limit(1)
//   );
//   const sName = await getDocs(qName);
//   if (!sName.empty) {
//     const d = sName.docs[0];
//     const data = d.data();
//     return {
//       id: d.id,
//       stock: Number(data.stock ?? 0) || 0,
//       reorderLevel: Number(data.reorderLevel ?? data.minStock ?? 0) || 0,
//     };
//   }

//   const all = await getDocs(collection(db, PRODUCTS_COLLECTION));
//   const lower = name.toLowerCase();
//   for (const d of all.docs) {
//     const data = d.data();
//     const n = String(data.name || "").toLowerCase();
//     const sku = String(data.sku || data.code || "").toLowerCase();
//     if (n === lower || sku === lower) {
//       return {
//         id: d.id,
//         stock: Number(data.stock ?? 0) || 0,
//         reorderLevel: Number(data.reorderLevel ?? data.minStock ?? 0) || 0,
//       };
//     }
//   }

//   return null;
// }

// /**
//  * Decrease furniture_products.stock for each line item.
//  * Returns true if at least one product was updated.
//  */
// export async function deductStockForItems(
//   items: CheckoutItem[],
//   reason: string
// ): Promise<boolean> {
//   let any = false;

//   for (const item of items) {
//     const qty = Math.max(1, Number(item.quantity) || 1);
//     const product = await findFurnitureProduct({
//       productId: item.productId,
//       name: item.name,
//     });

//     if (!product) {
//       console.warn("deductStockForItems: product not found", item);
//       continue;
//     }

//     const next = Math.max(0, product.stock - qty);
//     let status = "In Stock";
//     if (next <= 0) status = "Out of Stock";
//     else if (next <= product.reorderLevel) status = "Low Stock";

//     await updateDoc(doc(db, PRODUCTS_COLLECTION, product.id), {
//       stock: next,
//       status,
//       updatedAt: Timestamp.now(),
//     });
//     any = true;
//     console.log(
//       `Stock ${reason}: ${item.name} ${product.stock} → ${next}`
//     );
//   }

//   return any;
// }

// export async function createOrder(checkout: CheckoutData): Promise<Order> {
//   const errors = validateCheckout(checkout);
//   if (errors.length > 0) {
//     throw new Error(errors.join(", "));
//   }

//   const orderNumber = generateOrderNumber();
//   const addr = checkout.shippingAddress;
//   const fullName = addr.fullName.trim();
//   const phone = addr.phone.trim();
//   const email = (addr.email || "").trim();
//   const items = checkout.items.map(sanitizeItem);

//   const totalQty = items.reduce((s, i) => s + Number(i.quantity || 0), 0);
//   const productLabel = items
//     .map((i) => i.name)
//     .filter(Boolean)
//     .join(", ");
//   const first = items[0];
//   const totalAmount = Number(checkout.totalAmount || 0);

//   const isCod = checkout.paymentMethod === "COD";
//   const paymentStatus: "Pending" | "Paid" | "Failed" = "Pending";
//   const orderStatus: OrderStatus = isCod ? "Confirmed" : "Pending";
//   const paidAmount = 0;
//   const now = Timestamp.now();

//   // Lead time → expected delivery
//   const leadTimeDays = await resolveCartLeadTimeDays(items);
//   const expectedDate = addCalendarDays(new Date(), leadTimeDays);
//   const expectedDeliveryDate = expectedDate.toISOString().slice(0, 10);
//   const expectedDeliveryLabel = formatExpectedDeliveryLabel(expectedDate);

//   // COD = committed sale → deduct stock now
//   let stockDeducted = false;
//   if (isCod) {
//     try {
//       stockDeducted = await deductStockForItems(
//         items,
//         `COD order ${orderNumber}`
//       );
//     } catch (e) {
//       console.error("COD stock deduct failed:", e);
//     }
//   }

//   const websiteOrderData = {
//     orderNumber,
//     userId: checkout.userId,
//     items,
//     shippingAddress: {
//       fullName,
//       phone,
//       email,
//       addressLine1: addr.addressLine1.trim(),
//       addressLine2: addr.addressLine2?.trim() || "",
//       city: addr.city.trim(),
//       state: addr.state.trim(),
//       postalCode: addr.postalCode.trim(),
//       country: addr.country || "India",
//     },
//     paymentMethod: checkout.paymentMethod,
//     paymentStatus,
//     orderStatus,
//     subtotal: Number(checkout.subtotal || 0),
//     shippingCharge: Number(checkout.shippingCharge || 0),
//     discount: Number(checkout.discount || 0),
//     tax: Number(checkout.tax || 0),
//     totalAmount,
//     paid: paidAmount,
//     stockDeducted,
//     notes: checkout.notes || "",
//     source: "Website",
//     leadTimeDays,
//     expectedDeliveryDate,
//     expectedDeliveryLabel,
//     deliveryDate: expectedDeliveryDate,
//     createdAt: now,
//     updatedAt: now,
//   };

//   const erpOrderData = {
//     ...websiteOrderData,
//     orderNo: orderNumber,
//     customerName: fullName,
//     customer: fullName,
//     phone,
//     email,
//     product: productLabel || first?.name || "Furniture Item",
//     productName: productLabel || first?.name || "Furniture Item",
//     category: first?.category || "Other",
//     quantity: totalQty || 1,
//     amount: totalAmount,
//     total: totalAmount,
//     paid: paidAmount,
//     status: orderStatus,
//     deliveryDate: expectedDeliveryDate,
//     leadTimeDays,
//     expectedDeliveryDate,
//     expectedDeliveryLabel,
//     items: items.map((i) => ({
//       productId: i.productId,
//       name: i.name,
//       qty: Number(i.quantity) || 1,
//       price: Number(i.price) || 0,
//       image: i.image || "",
//       category: i.category || "",
//       leadTimeDays: i.leadTimeDays || leadTimeDays,
//     })),
//   };

//   const websiteRef = await addDoc(
//     collection(db, ORDERS_COLLECTION),
//     websiteOrderData
//   );

//   await addDoc(collection(db, ERP_ORDERS_COLLECTION), {
//     ...erpOrderData,
//     websiteOrderId: websiteRef.id,
//   });

//   return {
//     id: websiteRef.id,
//     ...websiteOrderData,
//   } as Order;
// }

// export async function getOrder(orderId: string): Promise<Order | null> {
//   if (!orderId) throw new Error("Order ID is required");
//   const snapshot = await getDoc(doc(db, ORDERS_COLLECTION, orderId));
//   if (!snapshot.exists()) return null;
//   return { id: snapshot.id, ...snapshot.data() } as Order;
// }

// export async function getUserOrders(userId: string): Promise<Order[]> {
//   if (!userId) throw new Error("User ID is required");
//   const snapshot = await getDocs(
//     query(collection(db, ORDERS_COLLECTION), where("userId", "==", userId))
//   );
//   return snapshot.docs
//     .map((d) => ({ id: d.id, ...d.data() }) as Order)
//     .filter(isVisibleToCustomer);
// }

// export async function updateOrderStatus(
//   orderId: string,
//   orderStatus: OrderStatus
// ): Promise<void> {
//   if (!orderId) throw new Error("Order ID is required");
//   await updateDoc(doc(db, ORDERS_COLLECTION, orderId), {
//     orderStatus,
//     updatedAt: Timestamp.now(),
//   });
// }

// export async function updatePaymentStatus(
//   orderId: string,
//   paymentStatus: "Pending" | "Paid" | "Failed"
// ): Promise<void> {
//   if (!orderId) throw new Error("Order ID is required");

//   const payload: Record<string, unknown> = {
//     paymentStatus,
//     updatedAt: Timestamp.now(),
//   };

//   if (paymentStatus === "Failed") {
//     payload.orderStatus = "Cancelled";
//     payload.status = "Cancelled";
//   }

//   await updateDoc(doc(db, ORDERS_COLLECTION, orderId), payload);

//   try {
//     const q = query(
//       collection(db, ERP_ORDERS_COLLECTION),
//       where("websiteOrderId", "==", orderId)
//     );
//     const erpSnap = await getDocs(q);
//     for (const d of erpSnap.docs) {
//       await updateDoc(doc(db, ERP_ORDERS_COLLECTION, d.id), {
//         paymentStatus,
//         ...(paymentStatus === "Failed"
//           ? { status: "Cancelled", orderStatus: "Cancelled" }
//           : {}),
//         updatedAt: Timestamp.now(),
//       });
//     }
//   } catch (err) {
//     console.error("ERP payment status mirror failed:", err);
//   }
// }

// /** Mark paid + deduct stock once (online payments) */
// export async function markOrderAsPaid(orderId: string): Promise<void> {
//   if (!orderId) throw new Error("Order ID is required");

//   const snap = await getDoc(doc(db, ORDERS_COLLECTION, orderId));
//   if (!snap.exists()) throw new Error("Order not found");

//   const data = snap.data();
//   const total = Number(data.totalAmount || 0);
//   const alreadyDeducted = Boolean(data.stockDeducted);
//   const items = (data.items || []) as CheckoutItem[];

//   if (!alreadyDeducted && items.length > 0) {
//     try {
//       await deductStockForItems(
//         items.map(sanitizeItem),
//         `Paid order ${data.orderNumber || orderId}`
//       );
//     } catch (e) {
//       console.error("Stock deduct on paid failed:", e);
//     }
//   }

//   await updateDoc(doc(db, ORDERS_COLLECTION, orderId), {
//     paymentStatus: "Paid",
//     paid: total,
//     orderStatus: "Confirmed",
//     stockDeducted: true,
//     updatedAt: Timestamp.now(),
//   });

//   try {
//     const q = query(
//       collection(db, ERP_ORDERS_COLLECTION),
//       where("websiteOrderId", "==", orderId)
//     );
//     const erpSnap = await getDocs(q);
//     for (const d of erpSnap.docs) {
//       const erpTotal = Number(
//         d.data()?.total ?? d.data()?.amount ?? d.data()?.totalAmount ?? total
//       );
//       await updateDoc(doc(db, ERP_ORDERS_COLLECTION, d.id), {
//         paymentStatus: "Paid",
//         paid: erpTotal,
//         status: "Confirmed",
//         orderStatus: "Confirmed",
//         stockDeducted: true,
//         updatedAt: Timestamp.now(),
//       });
//     }
//   } catch (err) {
//     console.error("ERP mark paid mirror failed:", err);
//   }
// }

// export async function cancelOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Cancelled");
//   try {
//     const q = query(
//       collection(db, ERP_ORDERS_COLLECTION),
//       where("websiteOrderId", "==", orderId)
//     );
//     const snap = await getDocs(q);
//     for (const d of snap.docs) {
//       await updateDoc(doc(db, ERP_ORDERS_COLLECTION, d.id), {
//         status: "Cancelled",
//         orderStatus: "Cancelled",
//         updatedAt: Timestamp.now(),
//       });
//     }
//   } catch (err) {
//     console.error("ERP cancel mirror failed:", err);
//   }
// }

// export async function confirmOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Confirmed");
// }

// export async function processOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Processing");
// }

// export async function shipOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Shipped");
// }

// export async function deliverOrder(orderId: string): Promise<void> {
//   await updateOrderStatus(orderId, "Delivered");
// }

// export async function getAllOrders(): Promise<Order[]> {
//   const snapshot = await getDocs(collection(db, ORDERS_COLLECTION));
//   return snapshot.docs.map((d) => ({
//     id: d.id,
//     ...d.data(),
//   })) as Order[];
// }

// export async function getOrdersByStatus(
//   status: OrderStatus
// ): Promise<Order[]> {
//   const snapshot = await getDocs(
//     query(collection(db, ORDERS_COLLECTION), where("orderStatus", "==", status))
//   );
//   return snapshot.docs.map((d) => ({
//     id: d.id,
//     ...d.data(),
//   })) as Order[];
// }

// export function getOrderItemCount(items: CheckoutItem[]): number {
//   return items.reduce((total, item) => total + Number(item.quantity), 0);
// }

// export function formatCurrency(amount: number): string {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(amount);
// }

// export { isOnlineMethod };


import { db } from "@/lib/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  query,
  where,
  Timestamp,
  limit,
} from "firebase/firestore";
import {
  getDeliverySettings,
  calcShippingFromSettings,
  DEFAULT_DELIVERY_SETTINGS,
  type DeliverySettings,
} from "@/services/deliverySettingsService";

export type PaymentMethod = "COD" | "UPI" | "Card" | "Bank Transfer";

export type OrderStatus =
  | "Pending"
  | "Confirmed"
  | "Processing"
  | "Shipped"
  | "Delivered"
  | "Cancelled";

export interface CheckoutItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  category?: string;
  variant?: string;
  /** Days until estimated delivery for this line (from product lead time). */
  leadTimeDays?: number;
}

export interface ShippingAddress {
  fullName: string;
  phone: string;
  email?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country?: string;
}

export interface CheckoutData {
  userId: string;
  items: CheckoutItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: PaymentMethod;
  subtotal: number;
  shippingCharge: number;
  discount: number;
  tax: number;
  totalAmount: number;
  notes?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  userId: string;
  items: CheckoutItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: PaymentMethod;
  paymentStatus: "Pending" | "Paid" | "Failed";
  orderStatus: OrderStatus;
  subtotal: number;
  shippingCharge: number;
  discount: number;
  tax: number;
  totalAmount: number;
  paid?: number;
  stockDeducted?: boolean;
  notes?: string;
  leadTimeDays?: number;
  expectedDeliveryDate?: string;
  expectedDeliveryLabel?: string;
  deliveryDate?: string;
  createdAt?: unknown;
  updatedAt?: unknown;
}

const ORDERS_COLLECTION = "orders";
const ERP_ORDERS_COLLECTION = "furniture_orders";
const PRODUCTS_COLLECTION = "furniture_products";

const DEFAULT_LEAD_TIME_DAYS = 7;

export type { DeliverySettings };
export { getDeliverySettings, DEFAULT_DELIVERY_SETTINGS };

/* -------------------------------------------------------------------------- */
/* Lead time helpers                                                           */
/* -------------------------------------------------------------------------- */

export function parseLeadTimeDays(
  value: unknown,
  fallback = DEFAULT_LEAD_TIME_DAYS
): number {
  if (typeof value === "number" && Number.isFinite(value) && value > 0) {
    return Math.min(365, Math.floor(value));
  }

  const s = String(value ?? "").trim();
  if (!s || s === "—") return fallback;

  const nums = s.match(/\d+/g);
  if (!nums?.length) return fallback;

  const max = Math.max(
    ...nums.map((n) => parseInt(n, 10)).filter((n) => n > 0)
  );

  return Number.isFinite(max) ? Math.min(365, max) : fallback;
}

export function addCalendarDays(base: Date, days: number): Date {
  const d = new Date(base);
  d.setHours(12, 0, 0, 0);
  d.setDate(d.getDate() + Math.max(0, Math.floor(days)));
  return d;
}

export function formatExpectedDeliveryLabel(date: Date): string {
  return date.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/**
 * Resolve max lead time for cart lines.
 * Prefers item.leadTimeDays; otherwise loads furniture_products.leadTime.
 * fallbackDays comes from ERP delivery settings when available.
 */
export async function resolveCartLeadTimeDays(
  items: CheckoutItem[],
  fallbackDays = DEFAULT_LEAD_TIME_DAYS
): Promise<number> {
  const fallback = Math.min(
    365,
    Math.max(1, Math.floor(Number(fallbackDays) || DEFAULT_LEAD_TIME_DAYS))
  );
  let maxDays = 0;

  for (const item of items) {
    if (item.leadTimeDays && item.leadTimeDays > 0) {
      maxDays = Math.max(maxDays, Math.floor(item.leadTimeDays));
      continue;
    }

    try {
      if (item.productId) {
        const snap = await getDoc(doc(db, PRODUCTS_COLLECTION, item.productId));
        if (snap.exists()) {
          const data = snap.data();
          const days = parseLeadTimeDays(
            data.leadTime ?? data.leadTimeDays,
            fallback
          );
          maxDays = Math.max(maxDays, days);
          continue;
        }
      }
    } catch (err) {
      console.warn("resolveCartLeadTimeDays: product lookup failed", err);
    }

    maxDays = Math.max(maxDays, fallback);
  }

  return maxDays > 0 ? maxDays : fallback;
}

/* -------------------------------------------------------------------------- */
/* Item / totals helpers                                                       */
/* -------------------------------------------------------------------------- */

function sanitizeItem(item: CheckoutItem): CheckoutItem {
  const out: CheckoutItem = {
    productId: String(item.productId || ""),
    name: String(item.name || "Item"),
    price: Number(item.price) || 0,
    quantity: Math.max(1, Number(item.quantity) || 1),
  };
  if (item.image) out.image = String(item.image);
  if (item.category) out.category = String(item.category);
  if (item.variant) out.variant = String(item.variant);
  if (item.leadTimeDays && item.leadTimeDays > 0) {
    out.leadTimeDays = Math.floor(Number(item.leadTimeDays));
  }
  return out;
}

export function calculateSubtotal(items: CheckoutItem[]): number {
  return items.reduce(
    (total, item) => total + Number(item.price) * Number(item.quantity),
    0
  );
}

/** Uses ERP delivery settings when provided; otherwise defaults. */
export function calculateShipping(
  subtotal: number,
  settings: DeliverySettings = DEFAULT_DELIVERY_SETTINGS
): number {
  return calcShippingFromSettings(subtotal, settings);
}

export function calculateTax(subtotal: number, taxRate = 0): number {
  return subtotal * taxRate;
}

export function calculateCheckoutTotal(
  subtotal: number,
  shippingCharge: number,
  discount = 0,
  tax = 0
): number {
  return Math.max(0, subtotal + shippingCharge + tax - discount);
}

function generateOrderNumber(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  return `AKR-${year}${month}${day}-${randomNumber}`;
}

export function validateCheckout(checkout: CheckoutData): string[] {
  const errors: string[] = [];
  if (!checkout.userId) errors.push("User ID is required");
  if (!checkout.items || checkout.items.length === 0) {
    errors.push("Cart is empty");
  }
  if (!checkout.shippingAddress.fullName.trim()) {
    errors.push("Full name is required");
  }
  if (!checkout.shippingAddress.phone.trim()) {
    errors.push("Phone number is required");
  }
  if (!checkout.shippingAddress.addressLine1.trim()) {
    errors.push("Address is required");
  }
  if (!checkout.shippingAddress.city.trim()) {
    errors.push("City is required");
  }
  if (!checkout.shippingAddress.state.trim()) {
    errors.push("State is required");
  }
  if (!checkout.shippingAddress.postalCode.trim()) {
    errors.push("Postal code is required");
  }
  if (!checkout.paymentMethod) {
    errors.push("Payment method is required");
  }
  return errors;
}

function isOnlineMethod(method: PaymentMethod | string): boolean {
  const m = String(method || "").toUpperCase();
  return (
    m === "CARD" ||
    m === "UPI" ||
    m === "BANK TRANSFER" ||
    m.includes("CASHFREE") ||
    m.includes("ONLINE")
  );
}

function isVisibleToCustomer(o: Order): boolean {
  const pay = String(o.paymentStatus || "").toLowerCase();
  const method = String(o.paymentMethod || "").toUpperCase();
  const paid = Number(o.paid ?? 0) || 0;

  if (pay === "failed") return false;

  const isCod = method === "COD" || method === "";
  if (!isCod && isOnlineMethod(method) && pay === "pending" && paid <= 0) {
    return false;
  }

  return true;
}

async function findFurnitureProduct(item: {
  productId?: string;
  name?: string;
}): Promise<{ id: string; stock: number; reorderLevel: number } | null> {
  if (item.productId) {
    const byId = await getDoc(doc(db, PRODUCTS_COLLECTION, item.productId));
    if (byId.exists()) {
      const d = byId.data();
      return {
        id: byId.id,
        stock: Number(d.stock ?? 0) || 0,
        reorderLevel: Number(d.reorderLevel ?? d.minStock ?? 0) || 0,
      };
    }
  }

  const name = (item.name || "").trim();
  if (!name) return null;

  for (const field of ["sku", "code"] as const) {
    const q1 = query(
      collection(db, PRODUCTS_COLLECTION),
      where(field, "==", name),
      limit(1)
    );
    const s1 = await getDocs(q1);
    if (!s1.empty) {
      const d = s1.docs[0];
      const data = d.data();
      return {
        id: d.id,
        stock: Number(data.stock ?? 0) || 0,
        reorderLevel: Number(data.reorderLevel ?? data.minStock ?? 0) || 0,
      };
    }
  }

  const qName = query(
    collection(db, PRODUCTS_COLLECTION),
    where("name", "==", name),
    limit(1)
  );
  const sName = await getDocs(qName);
  if (!sName.empty) {
    const d = sName.docs[0];
    const data = d.data();
    return {
      id: d.id,
      stock: Number(data.stock ?? 0) || 0,
      reorderLevel: Number(data.reorderLevel ?? data.minStock ?? 0) || 0,
    };
  }

  const all = await getDocs(collection(db, PRODUCTS_COLLECTION));
  const lower = name.toLowerCase();
  for (const d of all.docs) {
    const data = d.data();
    const n = String(data.name || "").toLowerCase();
    const sku = String(data.sku || data.code || "").toLowerCase();
    if (n === lower || sku === lower) {
      return {
        id: d.id,
        stock: Number(data.stock ?? 0) || 0,
        reorderLevel: Number(data.reorderLevel ?? data.minStock ?? 0) || 0,
      };
    }
  }

  return null;
}

export async function deductStockForItems(
  items: CheckoutItem[],
  reason: string
): Promise<boolean> {
  let any = false;

  for (const item of items) {
    const qty = Math.max(1, Number(item.quantity) || 1);
    const product = await findFurnitureProduct({
      productId: item.productId,
      name: item.name,
    });

    if (!product) {
      console.warn("deductStockForItems: product not found", item);
      continue;
    }

    const next = Math.max(0, product.stock - qty);
    let status = "In Stock";
    if (next <= 0) status = "Out of Stock";
    else if (next <= product.reorderLevel) status = "Low Stock";

    await updateDoc(doc(db, PRODUCTS_COLLECTION, product.id), {
      stock: next,
      status,
      updatedAt: Timestamp.now(),
    });
    any = true;
    console.log(
      `Stock ${reason}: ${item.name} ${product.stock} → ${next}`
    );
  }

  return any;
}

export async function createOrder(checkout: CheckoutData): Promise<Order> {
  const errors = validateCheckout(checkout);
  if (errors.length > 0) {
    throw new Error(errors.join(", "));
  }

  const orderNumber = generateOrderNumber();
  const addr = checkout.shippingAddress;
  const fullName = addr.fullName.trim();
  const phone = addr.phone.trim();
  const email = (addr.email || "").trim();
  const items = checkout.items.map(sanitizeItem);

  const totalQty = items.reduce((s, i) => s + Number(i.quantity || 0), 0);
  const productLabel = items
    .map((i) => i.name)
    .filter(Boolean)
    .join(", ");
  const first = items[0];
  const totalAmount = Number(checkout.totalAmount || 0);

  const isCod = checkout.paymentMethod === "COD";
  const paymentStatus: "Pending" | "Paid" | "Failed" = "Pending";
  const orderStatus: OrderStatus = isCod ? "Confirmed" : "Pending";
  const paidAmount = 0;
  const now = Timestamp.now();

  const deliverySettings = await getDeliverySettings();
  const leadTimeDays = await resolveCartLeadTimeDays(
    items,
    deliverySettings.defaultLeadTimeDays
  );
  const expectedDate = addCalendarDays(new Date(), leadTimeDays);
  const expectedDeliveryDate = expectedDate.toISOString().slice(0, 10);
  const expectedDeliveryLabel = formatExpectedDeliveryLabel(expectedDate);

  let stockDeducted = false;
  if (isCod) {
    try {
      stockDeducted = await deductStockForItems(
        items,
        `COD order ${orderNumber}`
      );
    } catch (e) {
      console.error("COD stock deduct failed:", e);
    }
  }

  const websiteOrderData = {
    orderNumber,
    userId: checkout.userId,
    items,
    shippingAddress: {
      fullName,
      phone,
      email,
      addressLine1: addr.addressLine1.trim(),
      addressLine2: addr.addressLine2?.trim() || "",
      city: addr.city.trim(),
      state: addr.state.trim(),
      postalCode: addr.postalCode.trim(),
      country: addr.country || "India",
    },
    paymentMethod: checkout.paymentMethod,
    paymentStatus,
    orderStatus,
    subtotal: Number(checkout.subtotal || 0),
    shippingCharge: Number(checkout.shippingCharge || 0),
    discount: Number(checkout.discount || 0),
    tax: Number(checkout.tax || 0),
    totalAmount,
    paid: paidAmount,
    stockDeducted,
    notes: checkout.notes || "",
    source: "Website",
    leadTimeDays,
    expectedDeliveryDate,
    expectedDeliveryLabel,
    deliveryDate: expectedDeliveryDate,
    createdAt: now,
    updatedAt: now,
  };

  const erpOrderData = {
    ...websiteOrderData,
    orderNo: orderNumber,
    customerName: fullName,
    customer: fullName,
    phone,
    email,
    product: productLabel || first?.name || "Furniture Item",
    productName: productLabel || first?.name || "Furniture Item",
    category: first?.category || "Other",
    quantity: totalQty || 1,
    amount: totalAmount,
    total: totalAmount,
    paid: paidAmount,
    status: orderStatus,
    deliveryDate: expectedDeliveryDate,
    leadTimeDays,
    expectedDeliveryDate,
    expectedDeliveryLabel,
    items: items.map((i) => ({
      productId: i.productId,
      name: i.name,
      qty: Number(i.quantity) || 1,
      price: Number(i.price) || 0,
      image: i.image || "",
      category: i.category || "",
      leadTimeDays: i.leadTimeDays || leadTimeDays,
    })),
  };

  const websiteRef = await addDoc(
    collection(db, ORDERS_COLLECTION),
    websiteOrderData
  );

  await addDoc(collection(db, ERP_ORDERS_COLLECTION), {
    ...erpOrderData,
    websiteOrderId: websiteRef.id,
  });

  return {
    id: websiteRef.id,
    ...websiteOrderData,
  } as Order;
}

export async function getOrder(orderId: string): Promise<Order | null> {
  if (!orderId) throw new Error("Order ID is required");
  const snapshot = await getDoc(doc(db, ORDERS_COLLECTION, orderId));
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() } as Order;
}

export async function getUserOrders(userId: string): Promise<Order[]> {
  if (!userId) throw new Error("User ID is required");
  const snapshot = await getDocs(
    query(collection(db, ORDERS_COLLECTION), where("userId", "==", userId))
  );
  return snapshot.docs
    .map((d) => ({ id: d.id, ...d.data() }) as Order)
    .filter(isVisibleToCustomer);
}

export async function updateOrderStatus(
  orderId: string,
  orderStatus: OrderStatus
): Promise<void> {
  if (!orderId) throw new Error("Order ID is required");
  await updateDoc(doc(db, ORDERS_COLLECTION, orderId), {
    orderStatus,
    updatedAt: Timestamp.now(),
  });
}

export async function updatePaymentStatus(
  orderId: string,
  paymentStatus: "Pending" | "Paid" | "Failed"
): Promise<void> {
  if (!orderId) throw new Error("Order ID is required");

  const payload: Record<string, unknown> = {
    paymentStatus,
    updatedAt: Timestamp.now(),
  };

  if (paymentStatus === "Failed") {
    payload.orderStatus = "Cancelled";
    payload.status = "Cancelled";
  }

  await updateDoc(doc(db, ORDERS_COLLECTION, orderId), payload);

  try {
    const q = query(
      collection(db, ERP_ORDERS_COLLECTION),
      where("websiteOrderId", "==", orderId)
    );
    const erpSnap = await getDocs(q);
    for (const d of erpSnap.docs) {
      await updateDoc(doc(db, ERP_ORDERS_COLLECTION, d.id), {
        paymentStatus,
        ...(paymentStatus === "Failed"
          ? { status: "Cancelled", orderStatus: "Cancelled" }
          : {}),
        updatedAt: Timestamp.now(),
      });
    }
  } catch (err) {
    console.error("ERP payment status mirror failed:", err);
  }
}

export async function markOrderAsPaid(orderId: string): Promise<void> {
  if (!orderId) throw new Error("Order ID is required");

  const snap = await getDoc(doc(db, ORDERS_COLLECTION, orderId));
  if (!snap.exists()) throw new Error("Order not found");

  const data = snap.data();
  const total = Number(data.totalAmount || 0);
  const alreadyDeducted = Boolean(data.stockDeducted);
  const items = (data.items || []) as CheckoutItem[];

  if (!alreadyDeducted && items.length > 0) {
    try {
      await deductStockForItems(
        items.map(sanitizeItem),
        `Paid order ${data.orderNumber || orderId}`
      );
    } catch (e) {
      console.error("Stock deduct on paid failed:", e);
    }
  }

  await updateDoc(doc(db, ORDERS_COLLECTION, orderId), {
    paymentStatus: "Paid",
    paid: total,
    orderStatus: "Confirmed",
    stockDeducted: true,
    updatedAt: Timestamp.now(),
  });

  try {
    const q = query(
      collection(db, ERP_ORDERS_COLLECTION),
      where("websiteOrderId", "==", orderId)
    );
    const erpSnap = await getDocs(q);
    for (const d of erpSnap.docs) {
      const erpTotal = Number(
        d.data()?.total ?? d.data()?.amount ?? d.data()?.totalAmount ?? total
      );
      await updateDoc(doc(db, ERP_ORDERS_COLLECTION, d.id), {
        paymentStatus: "Paid",
        paid: erpTotal,
        status: "Confirmed",
        orderStatus: "Confirmed",
        stockDeducted: true,
        updatedAt: Timestamp.now(),
      });
    }
  } catch (err) {
    console.error("ERP mark paid mirror failed:", err);
  }
}

export async function cancelOrder(orderId: string): Promise<void> {
  await updateOrderStatus(orderId, "Cancelled");
  try {
    const q = query(
      collection(db, ERP_ORDERS_COLLECTION),
      where("websiteOrderId", "==", orderId)
    );
    const snap = await getDocs(q);
    for (const d of snap.docs) {
      await updateDoc(doc(db, ERP_ORDERS_COLLECTION, d.id), {
        status: "Cancelled",
        orderStatus: "Cancelled",
        updatedAt: Timestamp.now(),
      });
    }
  } catch (err) {
    console.error("ERP cancel mirror failed:", err);
  }
}

export async function confirmOrder(orderId: string): Promise<void> {
  await updateOrderStatus(orderId, "Confirmed");
}

export async function processOrder(orderId: string): Promise<void> {
  await updateOrderStatus(orderId, "Processing");
}

export async function shipOrder(orderId: string): Promise<void> {
  await updateOrderStatus(orderId, "Shipped");
}

export async function deliverOrder(orderId: string): Promise<void> {
  await updateOrderStatus(orderId, "Delivered");
}

export async function getAllOrders(): Promise<Order[]> {
  const snapshot = await getDocs(collection(db, ORDERS_COLLECTION));
  return snapshot.docs.map((d) => ({
    id: d.id,
    ...d.data(),
  })) as Order[];
}

export async function getOrdersByStatus(
  status: OrderStatus
): Promise<Order[]> {
  const snapshot = await getDocs(
    query(collection(db, ORDERS_COLLECTION), where("orderStatus", "==", status))
  );
  return snapshot.docs.map((d) => ({
    id: d.id,
    ...d.data(),
  })) as Order[];
}

export function getOrderItemCount(items: CheckoutItem[]): number {
  return items.reduce((total, item) => total + Number(item.quantity), 0);
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export { isOnlineMethod };
