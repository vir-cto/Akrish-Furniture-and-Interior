// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   try {
//     const { orderNumber } = await req.json();
//     if (!orderNumber) {
//       return NextResponse.json(
//         { error: "orderNumber is required" },
//         { status: 400 }
//       );
//     }

//     const appId = process.env.CASHFREE_APP_ID;
//     const secretKey = process.env.CASHFREE_SECRET_KEY;
//     const env = process.env.CASHFREE_ENV || "sandbox";

//     if (!appId || !secretKey) {
//       return NextResponse.json(
//         { error: "Cashfree keys missing" },
//         { status: 500 }
//       );
//     }

//     const baseUrl =
//       env === "production"
//         ? "https://api.cashfree.com/pg"
//         : "https://sandbox.cashfree.com/pg";

//     const cashfreeOrderId = String(orderNumber).replace(/[^a-zA-Z0-9_-]/g, "_");

//     const res = await fetch(`${baseUrl}/orders/${cashfreeOrderId}`, {
//       method: "GET",
//       headers: {
//         "x-client-id": appId,
//         "x-client-secret": secretKey,
//         "x-api-version": "2023-08-01",
//       },
//     });

//     const data = await res.json();
//     if (!res.ok) {
//       return NextResponse.json(
//         { paid: false, status: "UNKNOWN", details: data },
//         { status: 200 }
//       );
//     }

//     const status = String(data.order_status || "").toUpperCase();
//     const paid = status === "PAID";

//     return NextResponse.json({
//       paid,
//       status,
//       orderAmount: data.order_amount,
//       details: data,
//     });
//   } catch (err) {
//     console.error("Cashfree verify error:", err);
//     return NextResponse.json(
//       {
//         paid: false,
//         error: err instanceof Error ? err.message : "Verify failed",
//       },
//       { status: 500 }
//     );
//   }
// }


import { NextRequest, NextResponse } from "next/server";

function getCashfreeCredentials() {
  const appId =
    process.env.CASHFREE_APP_ID || process.env.CASHFREE_CLIENT_ID || "";
  const secretKey =
    process.env.CASHFREE_SECRET_KEY ||
    process.env.CASHFREE_CLIENT_SECRET ||
    "";
  const env = process.env.CASHFREE_ENV || "sandbox";
  return { appId, secretKey, env };
}

export async function POST(req: NextRequest) {
  try {
    const { orderNumber } = await req.json();
    if (!orderNumber) {
      return NextResponse.json(
        { error: "orderNumber is required" },
        { status: 400 }
      );
    }

    const { appId, secretKey, env } = getCashfreeCredentials();

    if (!appId || !secretKey) {
      console.error(
        "Cashfree env missing in verify. Use apps/website/.env.local with CASHFREE_APP_ID and CASHFREE_SECRET_KEY, then restart Next."
      );
      return NextResponse.json(
        {
          paid: false,
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

    const res = await fetch(`${baseUrl}/orders/${cashfreeOrderId}`, {
      method: "GET",
      headers: {
        "x-client-id": appId,
        "x-client-secret": secretKey,
        "x-api-version": "2023-08-01",
      },
    });

    const data = await res.json();
    if (!res.ok) {
      return NextResponse.json(
        { paid: false, status: "UNKNOWN", details: data },
        { status: 200 }
      );
    }

    const status = String(data.order_status || "").toUpperCase();
    const paid = status === "PAID";

    return NextResponse.json({
      paid,
      status,
      orderAmount: data.order_amount,
      details: data,
    });
  } catch (err) {
    console.error("Cashfree verify error:", err);
    return NextResponse.json(
      {
        paid: false,
        error: err instanceof Error ? err.message : "Verify failed",
      },
      { status: 500 }
    );
  }
}
