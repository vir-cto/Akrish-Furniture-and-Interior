import axios, { AxiosInstance } from "axios";

const CASHFREE_BASE_URL =
  process.env.CASHFREE_BASE_URL ||
  "https://sandbox.cashfree.com/pg";

const CASHFREE_CLIENT_ID =
  process.env.CASHFREE_CLIENT_ID || "";

const CASHFREE_CLIENT_SECRET =
  process.env.CASHFREE_CLIENT_SECRET || "";

const CASHFREE_API_VERSION =
  process.env.CASHFREE_API_VERSION || "2025-01-01";

if (!CASHFREE_CLIENT_ID || !CASHFREE_CLIENT_SECRET) {
  console.warn(
    "Cashfree credentials are not configured. " +
      "Set CASHFREE_CLIENT_ID and CASHFREE_CLIENT_SECRET."
  );
}

/**
 * Cashfree Payment Gateway client.
 *
 * This file must only be used from the backend/functions
 * environment. Never expose CASHFREE_CLIENT_SECRET to the
 * browser or Next.js client-side code.
 */
const cashfreeClient: AxiosInstance = axios.create({
  baseURL: CASHFREE_BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-api-version": CASHFREE_API_VERSION,
    "x-client-id": CASHFREE_CLIENT_ID,
    "x-client-secret": CASHFREE_CLIENT_SECRET,
  },
});

export interface CashfreeOrderRequest {
  order_id: string;
  order_amount: number;
  order_currency?: string;

  customer_details: {
    customer_id: string;
    customer_name?: string;
    customer_email?: string;
    customer_phone: string;
  };

  order_meta?: {
    return_url?: string;
    notify_url?: string;
    payment_methods?: string;
  };

  order_note?: string;

  order_tags?: Record<string, string>;
}

export interface CashfreeOrderResponse {
  cf_order_id?: string;
  order_id: string;
  entity?: string;
  order_currency?: string;
  order_amount?: number;
  order_status?: string;
  payment_session_id?: string;
  order_token?: string;
  customer_details?: {
    customer_id?: string;
    customer_name?: string;
    customer_email?: string;
    customer_phone?: string;
  };
  order_meta?: {
    return_url?: string;
    notify_url?: string;
  };
  order_expiry_time?: string;
}

export interface CashfreePaymentResponse {
  cf_payment_id?: string;
  payment_session_id?: string;
  payment_method?: Record<string, unknown>;
  payment_amount?: number;
  payment_currency?: string;
  payment_status?: string;
  payment_message?: string;
  payment_time?: string;
  order_id?: string;
}

export interface CashfreeRefundRequest {
  refund_amount: number;
  refund_id: string;
  refund_note?: string;
}

export interface CashfreeRefundResponse {
  cf_payment_id?: string;
  cf_refund_id?: string;
  refund_id?: string;
  refund_amount?: number;
  refund_status?: string;
  refund_type?: string;
  refund_note?: string;
  refund_time?: string;
  order_id?: string;
}

/**
 * Validate Cashfree configuration.
 */
export function isCashfreeConfigured(): boolean {
  return Boolean(
    CASHFREE_CLIENT_ID &&
      CASHFREE_CLIENT_SECRET
  );
}

/**
 * Get the configured Cashfree environment.
 */
export function getCashfreeEnvironment(): "sandbox" | "production" {
  return CASHFREE_BASE_URL.includes("sandbox")
    ? "sandbox"
    : "production";
}

/**
 * Create a Cashfree payment order.
 */
export async function createCashfreeOrder(
  order: CashfreeOrderRequest
): Promise<CashfreeOrderResponse> {
  if (!isCashfreeConfigured()) {
    throw new Error(
      "Cashfree is not configured. " +
        "Please set CASHFREE_CLIENT_ID and CASHFREE_CLIENT_SECRET."
    );
  }

  if (!order.order_id) {
    throw new Error("Cashfree order ID is required.");
  }

  if (
    !Number.isFinite(order.order_amount) ||
    order.order_amount <= 0
  ) {
    throw new Error("Cashfree order amount must be greater than zero.");
  }

  if (!order.customer_details?.customer_id) {
    throw new Error("Cashfree customer ID is required.");
  }

  if (!order.customer_details?.customer_phone) {
    throw new Error("Cashfree customer phone is required.");
  }

  try {
    const response =
      await cashfreeClient.post<CashfreeOrderResponse>(
        "/orders",
        {
          ...order,
          order_currency:
            order.order_currency || "INR",
        }
      );

    return response.data;
  } catch (error: unknown) {
    throw createCashfreeError(
      "Failed to create Cashfree order",
      error
    );
  }
}

/**
 * Get a Cashfree order by order ID.
 */
export async function getCashfreeOrder(
  orderId: string
): Promise<CashfreeOrderResponse> {
  if (!orderId) {
    throw new Error("Cashfree order ID is required.");
  }

  try {
    const response =
      await cashfreeClient.get<CashfreeOrderResponse>(
        `/orders/${encodeURIComponent(orderId)}`
      );

    return response.data;
  } catch (error: unknown) {
    throw createCashfreeError(
      "Failed to fetch Cashfree order",
      error
    );
  }
}

/**
 * Get payments associated with a Cashfree order.
 */
export async function getCashfreePayments(
  orderId: string
): Promise<CashfreePaymentResponse[]> {
  if (!orderId) {
    throw new Error("Cashfree order ID is required.");
  }

  try {
    const response =
      await cashfreeClient.get<CashfreePaymentResponse[]>(
        `/orders/${encodeURIComponent(orderId)}/payments`
      );

    return response.data;
  } catch (error: unknown) {
    throw createCashfreeError(
      "Failed to fetch Cashfree payments",
      error
    );
  }
}

/**
 * Get a specific Cashfree payment.
 */
export async function getCashfreePayment(
  orderId: string,
  paymentId: string
): Promise<CashfreePaymentResponse> {
  if (!orderId) {
    throw new Error("Cashfree order ID is required.");
  }

  if (!paymentId) {
    throw new Error("Cashfree payment ID is required.");
  }

  try {
    const response =
      await cashfreeClient.get<CashfreePaymentResponse>(
        `/orders/${encodeURIComponent(
          orderId
        )}/payments/${encodeURIComponent(paymentId)}`
      );

    return response.data;
  } catch (error: unknown) {
    throw createCashfreeError(
      "Failed to fetch Cashfree payment",
      error
    );
  }
}

/**
 * Create a refund for a Cashfree order.
 */
export async function createCashfreeRefund(
  orderId: string,
  refund: CashfreeRefundRequest
): Promise<CashfreeRefundResponse> {
  if (!orderId) {
    throw new Error("Cashfree order ID is required.");
  }

  if (!refund.refund_id) {
    throw new Error("Refund ID is required.");
  }

  if (
    !Number.isFinite(refund.refund_amount) ||
    refund.refund_amount <= 0
  ) {
    throw new Error(
      "Refund amount must be greater than zero."
    );
  }

  try {
    const response =
      await cashfreeClient.post<CashfreeRefundResponse>(
        `/orders/${encodeURIComponent(orderId)}/refunds`,
        {
          refund_id: refund.refund_id,
          refund_amount: refund.refund_amount,
          refund_note: refund.refund_note,
        }
      );

    return response.data;
  } catch (error: unknown) {
    throw createCashfreeError(
      "Failed to create Cashfree refund",
      error
    );
  }
}

/**
 * Get refund information.
 */
export async function getCashfreeRefund(
  orderId: string,
  refundId: string
): Promise<CashfreeRefundResponse> {
  if (!orderId) {
    throw new Error("Cashfree order ID is required.");
  }

  if (!refundId) {
    throw new Error("Refund ID is required.");
  }

  try {
    const response =
      await cashfreeClient.get<CashfreeRefundResponse>(
        `/orders/${encodeURIComponent(
          orderId
        )}/refunds/${encodeURIComponent(refundId)}`
      );

    return response.data;
  } catch (error: unknown) {
    throw createCashfreeError(
      "Failed to fetch Cashfree refund",
      error
    );
  }
}

/**
 * Create a consistent error message without exposing
 * Cashfree credentials.
 */
function createCashfreeError(
  message: string,
  error: unknown
): Error {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;

    const responseData = error.response?.data as
      | {
          message?: string;
          error?: string;
          type?: string;
        }
      | undefined;

    const cashfreeMessage =
      responseData?.message ||
      responseData?.error ||
      error.message;

    return new Error(
      `${message}${status ? ` (${status})` : ""}: ${cashfreeMessage}`
    );
  }

  if (error instanceof Error) {
    return new Error(`${message}: ${error.message}`);
  }

  return new Error(message);
}

export default cashfreeClient;