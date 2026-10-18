// "use client";

// import Link from "next/link";
// import { useEffect, useState, Suspense } from "react";
// import { useSearchParams } from "next/navigation";
// import { Check, X, Loader2, ArrowRight } from "lucide-react";
// import { markOrderAsPaid, updatePaymentStatus } from "@/services/checkoutService";
// import { clearCart } from "@/services/cartService";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/lib/firebase";

// function ResultInner() {
//   const searchParams = useSearchParams();
//   const orderId = searchParams.get("order_id") || "";
//   const orderNumber = searchParams.get("order_number") || "";

//   const [status, setStatus] = useState<"loading" | "paid" | "failed">("loading");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     let cancelled = false;

//     async function verify() {
//       if (!orderNumber) {
//         setStatus("failed");
//         setMessage("Missing order reference.");
//         return;
//       }

//       try {
//         const res = await fetch("/api/cashfree/verify", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ orderNumber }),
//         });
//         const data = await res.json();

//         if (cancelled) return;

//         if (data.paid) {
//           if (orderId) {
//             try {
//               await markOrderAsPaid(orderId);
//             } catch (e) {
//               console.error(e);
//             }
//           }
//           // Clear cart after successful pay
//           onAuthStateChanged(auth, async (user) => {
//             if (user) {
//               try {
//                 await clearCart(user.uid);
//               } catch {
//                 /* ignore */
//               }
//             }
//           });
//           setStatus("paid");
//           setMessage("Payment successful. Your order is confirmed.");
//         } else {
//           if (orderId) {
//             try {
//               await updatePaymentStatus(orderId, "Failed");
//             } catch {
//               /* ignore */
//             }
//           }
//           setStatus("failed");
//           setMessage(
//             `Payment not completed (${data.status || "UNKNOWN"}). You can try again from cart.`
//           );
//         }
//       } catch (err) {
//         if (!cancelled) {
//           setStatus("failed");
//           setMessage(
//             err instanceof Error ? err.message : "Could not verify payment."
//           );
//         }
//       }
//     }

//     verify();
//     return () => {
//       cancelled = true;
//     };
//   }, [orderId, orderNumber]);

//   if (status === "loading") {
//     return (
//       <main className="flex min-h-[70vh] items-center justify-center bg-[#f7f9f8]">
//         <div className="text-center">
//           <Loader2 className="mx-auto h-8 w-8 animate-spin text-[#176b5b]" />
//           <p className="mt-4 text-sm text-slate-600">Verifying payment…</p>
//         </div>
//       </main>
//     );
//   }

//   const ok = status === "paid";

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto flex min-h-[80vh] max-w-xl items-center justify-center px-4 py-12">
//         <section className="w-full rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
//           <div
//             className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${
//               ok ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
//             }`}
//           >
//             {ok ? <Check size={30} /> : <X size={30} />}
//           </div>
//           <p
//             className={`mt-6 text-xs font-semibold uppercase tracking-[0.16em] ${
//               ok ? "text-emerald-600" : "text-red-600"
//             }`}
//           >
//             {ok ? "Payment successful" : "Payment failed"}
//           </p>
//           <h1 className="mt-2 text-2xl font-bold text-slate-900">
//             {ok ? "Thank you for your order!" : "Payment not completed"}
//           </h1>
//           <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
//             {message}
//           </p>
//           {orderNumber && (
//             <p className="mt-2 text-xs text-slate-400">Order: {orderNumber}</p>
//           )}
//           <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
//             {ok ? (
//               <Link
//                 href="/account/orders"
//                 className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
//               >
//                 View orders
//                 <ArrowRight size={16} />
//               </Link>
//             ) : (
//               <Link
//                 href="/checkout"
//                 className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white"
//               >
//                 Try again
//               </Link>
//             )}
//             <Link
//               href="/products"
//               className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
//             >
//               Continue shopping
//             </Link>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// export default function CheckoutResultPage() {
//   return (
//     <Suspense
//       fallback={
//         <main className="flex min-h-[70vh] items-center justify-center">
//           <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//         </main>
//       }
//     >
//       <ResultInner />
//     </Suspense>
//   );
// }

"use client";

import Link from "next/link";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Check, X, Loader2, ArrowRight } from "lucide-react";
import {
  markOrderAsPaid,
  updatePaymentStatus,
} from "@/services/checkoutService";
import { clearCart } from "@/services/cartService";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

function ResultInner() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id") || "";
  const orderNumber = searchParams.get("order_number") || "";

  const [status, setStatus] = useState<"loading" | "paid" | "failed">(
    "loading"
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function verify() {
      if (!orderNumber) {
        setStatus("failed");
        setMessage("Missing order reference.");
        return;
      }

      try {
        const res = await fetch("/api/cashfree/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ orderNumber }),
        });
        const data = await res.json();

        if (cancelled) return;

        if (data.paid) {
          if (orderId) {
            try {
              await markOrderAsPaid(orderId);
            } catch (e) {
              console.error(e);
            }
          }

          // Clear cart + refresh header badge
          const user = auth.currentUser;
          if (user) {
            try {
              await clearCart(user.uid);
              window.dispatchEvent(new Event("cartUpdated"));
            } catch {
              /* ignore */
            }
          } else {
            // Wait briefly for auth if needed
            await new Promise<void>((resolve) => {
              const unsub = onAuthStateChanged(auth, async (u) => {
                unsub();
                if (u) {
                  try {
                    await clearCart(u.uid);
                    window.dispatchEvent(new Event("cartUpdated"));
                  } catch {
                    /* ignore */
                  }
                }
                resolve();
              });
            });
          }

          setStatus("paid");
          setMessage("Payment successful. Your order is confirmed.");
        } else {
          if (orderId) {
            try {
              await updatePaymentStatus(orderId, "Failed");
            } catch {
              /* ignore */
            }
          }
          setStatus("failed");
          setMessage(
            `Payment not completed (${data.status || "UNKNOWN"}). You can try again from cart.`
          );
        }
      } catch (err) {
        if (!cancelled) {
          setStatus("failed");
          setMessage(
            err instanceof Error ? err.message : "Could not verify payment."
          );
        }
      }
    }

    verify();
    return () => {
      cancelled = true;
    };
  }, [orderId, orderNumber]);

  if (status === "loading") {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#f7f9f8]">
        <div className="text-center">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-[#176b5b]" />
          <p className="mt-4 text-sm text-slate-600">Verifying payment…</p>
        </div>
      </main>
    );
  }

  const ok = status === "paid";

  return (
    <main className="min-h-screen bg-[#f7f9f8]">
      <div className="mx-auto flex min-h-[80vh] max-w-xl items-center justify-center px-4 py-12">
        <section className="w-full rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
          <div
            className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${
              ok ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
            }`}
          >
            {ok ? <Check size={30} /> : <X size={30} />}
          </div>
          <p
            className={`mt-6 text-xs font-semibold uppercase tracking-[0.16em] ${
              ok ? "text-emerald-600" : "text-red-600"
            }`}
          >
            {ok ? "Payment successful" : "Payment failed"}
          </p>
          <h1 className="mt-2 text-2xl font-bold text-slate-900">
            {ok ? "Thank you for your order!" : "Payment not completed"}
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
            {message}
          </p>
          {orderNumber && (
            <p className="mt-2 text-xs text-slate-400">Order: {orderNumber}</p>
          )}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            {ok ? (
              <Link
                href="/account/orders"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                View orders
                <ArrowRight size={16} />
              </Link>
            ) : (
              <Link
                href="/checkout"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white"
              >
                Try again
              </Link>
            )}
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Continue shopping
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default function CheckoutResultPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-[70vh] items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
        </main>
      }
    >
      <ResultInner />
    </Suspense>
  );
}
