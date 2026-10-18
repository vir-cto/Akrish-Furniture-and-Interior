import { NextRequest, NextResponse } from "next/server";

/** Cashfree will POST here after payment. Log for now; extend to mark order Paid in Firestore with Admin SDK later. */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Cashfree webhook:", JSON.stringify(body));
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
