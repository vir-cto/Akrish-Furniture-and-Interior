"use client";

import { useEffect, useState } from "react";

interface CashfreeCheckoutProps {
  orderId: string;
  paymentSessionId?: string;
  onSuccess?: (response: unknown) => void;
  onFailure?: (error: unknown) => void;
  className?: string;
}

interface CashfreeInstance {
  checkout: (options: {
    paymentSessionId: string;
    redirectTarget?: "_self" | "_blank" | "_modal" | "_top";
  }) => Promise<unknown>;
}

declare global {
  interface Window {
    Cashfree?: (options: {
      mode: "sandbox" | "production";
    }) => CashfreeInstance;
  }
}

const CASHFREE_SDK_URL =
  "https://sdk.cashfree.com/js/v3/cashfree.js";

export default function CashfreeCheckout({
  orderId,
  paymentSessionId,
  onSuccess,
  onFailure,
  className = "",
}: CashfreeCheckoutProps) {
  const [loading, setLoading] = useState(false);
  const [sdkLoading, setSdkLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.Cashfree) {
      setSdkLoading(false);
      return;
    }

    const existingScript = document.querySelector(
      `script[src="${CASHFREE_SDK_URL}"]`
    );

    if (existingScript) {
      const handleLoad = () => setSdkLoading(false);
      const handleError = () => {
        setSdkLoading(false);
        setError("Unable to load the Cashfree payment SDK.");
      };

      existingScript.addEventListener("load", handleLoad);
      existingScript.addEventListener("error", handleError);

      return () => {
        existingScript.removeEventListener("load", handleLoad);
        existingScript.removeEventListener("error", handleError);
      };
    }

    const script = document.createElement("script");

    script.src = CASHFREE_SDK_URL;
    script.async = true;

    script.onload = () => {
      setSdkLoading(false);
      setError("");
    };

    script.onerror = () => {
      setSdkLoading(false);
      setError("Unable to load the Cashfree payment SDK.");
    };

    document.head.appendChild(script);
  }, []);

  const startCheckout = async () => {
    setError("");

    if (!orderId) {
      const message = "A valid order ID is required.";
      setError(message);
      onFailure?.(new Error(message));
      return;
    }

    if (!paymentSessionId) {
      const message =
        "Payment session is not available. Please create the order before starting payment.";

      setError(message);
      onFailure?.(new Error(message));
      return;
    }

    if (!window.Cashfree) {
      const message =
        "Cashfree payment service is not ready. Please try again.";

      setError(message);
      onFailure?.(new Error(message));
      return;
    }

    setLoading(true);

    try {
      const cashfree = window.Cashfree({
        /*
         * Use production only after your backend is configured
         * with production Cashfree credentials.
         */
        mode:
          process.env.NEXT_PUBLIC_CASHFREE_ENV === "production"
            ? "production"
            : "sandbox",
      });

      const result = await cashfree.checkout({
        paymentSessionId,
        redirectTarget: "_modal",
      });

      /*
       * Cashfree handles the checkout UI.
       * Verify the final payment status on your server before
       * marking an order as paid.
       */
      onSuccess?.(result);
    } catch (checkoutError) {
      console.error("Cashfree checkout error:", checkoutError);

      setError(
        "Payment could not be started. Please try again."
      );

      onFailure?.(checkoutError);
    } finally {
      setLoading(false);
    }
  };

  const disabled =
    loading || sdkLoading || !paymentSessionId;

  return (
    <div className={className}>
      <button
        type="button"
        onClick={startCheckout}
        disabled={disabled}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {sdkLoading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Loading payment...
          </>
        ) : loading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Processing...
          </>
        ) : (
          "Pay securely"
        )}
      </button>

      {error && (
        <p
          role="alert"
          className="mt-2 text-center text-xs font-medium text-red-600"
        >
          {error}
        </p>
      )}

      <p className="mt-2 text-center text-[11px] text-slate-400">
        Secure payment powered by Cashfree
      </p>
    </div>
  );
}