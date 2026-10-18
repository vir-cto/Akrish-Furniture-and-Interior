// import { NextRequest, NextResponse } from "next/server";

// /**
//  * Creates a Cashfree payment session for an already-created Firebase order.
//  * Body: { orderId, orderNumber, amount, customerName, customerEmail, customerPhone }
//  */
// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const {
//       orderId,
//       orderNumber,
//       amount,
//       customerName,
//       customerEmail,
//       customerPhone,
//     } = body;

//     if (!orderId || !orderNumber || !amount) {
//       return NextResponse.json(
//         { error: "orderId, orderNumber and amount are required" },
//         { status: 400 }
//       );
//     }

//     const appId = process.env.CASHFREE_APP_ID;
//     const secretKey = process.env.CASHFREE_SECRET_KEY;
//     const env = process.env.CASHFREE_ENV || "sandbox";
//     const siteUrl =
//       process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

//     if (!appId || !secretKey) {
//       return NextResponse.json(
//         {
//           error:
//             "Cashfree keys missing. Set CASHFREE_APP_ID and CASHFREE_SECRET_KEY in .env.local",
//         },
//         { status: 500 }
//       );
//     }

//     const baseUrl =
//       env === "production"
//         ? "https://api.cashfree.com/pg"
//         : "https://sandbox.cashfree.com/pg";

//     // Cashfree order_id must be unique; use our orderNumber
//     const cashfreeOrderId = String(orderNumber).replace(/[^a-zA-Z0-9_-]/g, "_");

//     const payload = {
//       order_id: cashfreeOrderId,
//       order_amount: Number(Number(amount).toFixed(2)),
//       order_currency: "INR",
//       customer_details: {
//         customer_id: String(orderId).slice(0, 50),
//         customer_name: String(customerName || "Customer").slice(0, 100),
//         customer_email: String(customerEmail || "customer@example.com"),
//         customer_phone: String(customerPhone || "9999999999").replace(/\D/g, "").slice(-10) || "9999999999",
//       },
//       order_meta: {
//         return_url: `${siteUrl}/checkout/result?order_id=${encodeURIComponent(
//           orderId
//         )}&order_number=${encodeURIComponent(orderNumber)}`,
//         notify_url: `${siteUrl}/api/cashfree/webhook`,
//       },
//     };

//     const res = await fetch(`${baseUrl}/orders`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "x-client-id": appId,
//         "x-client-secret": secretKey,
//         "x-api-version": "2023-08-01",
//       },
//       body: JSON.stringify(payload),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       console.error("Cashfree create order error:", data);
//       return NextResponse.json(
//         {
//           error:
//             data?.message ||
//             data?.error ||
//             "Failed to create Cashfree payment session",
//           details: data,
//         },
//         { status: 400 }
//       );
//     }

//     const paymentSessionId = data.payment_session_id;
//     if (!paymentSessionId) {
//       return NextResponse.json(
//         { error: "No payment_session_id from Cashfree", details: data },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({
//       paymentSessionId,
//       cashfreeOrderId,
//       orderId,
//       orderNumber,
//     });
//   } catch (err) {
//     console.error("Cashfree session error:", err);
//     return NextResponse.json(
//       {
//         error:
//           err instanceof Error ? err.message : "Cashfree session failed",
//       },
//       { status: 500 }
//     );
//   }
// }

import { NextRequest, NextResponse } from "next/server";

function getCashfreeCredentials() {
  const appId =
    process.env.CASHFREE_APP_ID ||
    process.env.CASHFREE_CLIENT_ID ||
    "";
  const secretKey =
    process.env.CASHFREE_SECRET_KEY ||
    process.env.CASHFREE_CLIENT_SECRET ||
    "";
  const env = process.env.CASHFREE_ENV || "sandbox";
  return { appId, secretKey, env };
}

/**
 * Creates a Cashfree payment session for an already-created Firebase order.
 * Body: { orderId, orderNumber, amount, customerName, customerEmail, customerPhone }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      orderId,
      orderNumber,
      amount,
      customerName,
      customerEmail,
      customerPhone,
    } = body;

    if (!orderId || !orderNumber || !amount) {
      return NextResponse.json(
        { error: "orderId, orderNumber and amount are required" },
        { status: 400 }
      );
    }

    const { appId, secretKey, env } = getCashfreeCredentials();
    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    if (!appId || !secretKey) {
      console.error(
        "Cashfree env missing. Checked CASHFREE_APP_ID / CASHFREE_CLIENT_ID and CASHFREE_SECRET_KEY / CASHFREE_CLIENT_SECRET. File must be apps/website/.env.local then restart next."
      );
      return NextResponse.json(
        {
          error:
            "Cashfree keys missing. Set CASHFREE_APP_ID and CASHFREE_SECRET_KEY in apps/website/.env.local and restart the website dev server.",
        },
        { status: 500 }
      );
    }

    const baseUrl =
      env === "production"
        ? "https://api.cashfree.com/pg"
        : "https://sandbox.cashfree.com/pg";

    const cashfreeOrderId = String(orderNumber).replace(
      /[^a-zA-Z0-9_-]/g,
      "_"
    );

    const phone =
      String(customerPhone || "9999999999")
        .replace(/\D/g, "")
        .slice(-10) || "9999999999";

    const payload = {
      order_id: cashfreeOrderId,
      order_amount: Number(Number(amount).toFixed(2)),
      order_currency: "INR",
      customer_details: {
        customer_id: String(orderId).slice(0, 50),
        customer_name: String(customerName || "Customer").slice(0, 100),
        customer_email: String(customerEmail || "customer@example.com"),
        customer_phone: phone,
      },
      order_meta: {
        return_url: `${siteUrl}/checkout/result?order_id=${encodeURIComponent(
          orderId
        )}&order_number=${encodeURIComponent(orderNumber)}`,
        notify_url: `${siteUrl}/api/cashfree/webhook`,
      },
    };

    const res = await fetch(`${baseUrl}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-client-id": appId,
        "x-client-secret": secretKey,
        "x-api-version": "2023-08-01",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Cashfree create order error:", data);
      return NextResponse.json(
        {
          error:
            data?.message ||
            data?.error ||
            "Failed to create Cashfree payment session",
          details: data,
        },
        { status: 400 }
      );
    }

    const paymentSessionId = data.payment_session_id;
    if (!paymentSessionId) {
      return NextResponse.json(
        { error: "No payment_session_id from Cashfree", details: data },
        { status: 500 }
      );
    }

    return NextResponse.json({
      paymentSessionId,
      cashfreeOrderId,
      orderId,
      orderNumber,
    });
  } catch (err) {
    console.error("Cashfree session error:", err);
    return NextResponse.json(
      {
        error:
          err instanceof Error ? err.message : "Cashfree session failed",
      },
      { status: 500 }
    );
  }
}
