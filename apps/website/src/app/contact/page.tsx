// "use client";

// import { FormEvent, useState } from "react";
// import { Mail, MapPin, Phone, Send } from "lucide-react";

// export default function ContactPage() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [sent, setSent] = useState(false);

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     setSent(true);
//     setForm({ name: "", email: "", message: "" });
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <section className="border-b border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
//           <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//             Contact
//           </p>
//           <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
//             Get in touch
//           </h1>
//           <p className="mt-4 max-w-xl text-sm text-slate-500">
//             Have a question about our furniture or interior services? We would love to hear from you.
//           </p>
//         </div>
//       </section>

//       <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
//         <div className="grid gap-10 lg:grid-cols-2">
//           {/* Info */}
//           <div className="space-y-6">
//             <div className="flex gap-4">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f5ef] text-[#176b5b]">
//                 <Phone size={18} />
//               </div>
//               <div>
//                 <p className="text-sm font-semibold text-slate-900">Phone</p>
//                 <p className="mt-1 text-sm text-slate-500">+91 98765 43210</p>
//               </div>
//             </div>
//             <div className="flex gap-4">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f5ef] text-[#176b5b]">
//                 <Mail size={18} />
//               </div>
//               <div>
//                 <p className="text-sm font-semibold text-slate-900">Email</p>
//                 <p className="mt-1 text-sm text-slate-500">hello@akrish.in</p>
//               </div>
//             </div>
//             <div className="flex gap-4">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f5ef] text-[#176b5b]">
//                 <MapPin size={18} />
//               </div>
//               <div>
//                 <p className="text-sm font-semibold text-slate-900">Location</p>
//                 <p className="mt-1 text-sm text-slate-500">Guntur, Andhra Pradesh, India</p>
//               </div>
//             </div>
//           </div>

//           {/* Form */}
//           <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
//             {sent ? (
//               <div className="py-10 text-center">
//                 <p className="text-lg font-semibold text-emerald-700">Message sent!</p>
//                 <p className="mt-2 text-sm text-slate-500">We will get back to you soon.</p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">Name</label>
//                   <input
//                     required
//                     value={form.name}
//                     onChange={(e) => setForm({ ...form, name: e.target.value })}
//                     className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                     placeholder="Your name"
//                   />
//                 </div>
//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">Email</label>
//                   <input
//                     required
//                     type="email"
//                     value={form.email}
//                     onChange={(e) => setForm({ ...form, email: e.target.value })}
//                     className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                     placeholder="you@example.com"
//                   />
//                 </div>
//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">Message</label>
//                   <textarea
//                     required
//                     rows={4}
//                     value={form.message}
//                     onChange={(e) => setForm({ ...form, message: e.target.value })}
//                     className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                     placeholder="How can we help you?"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 py-3 text-sm font-semibold text-white hover:bg-[#125849]"
//                 >
//                   <Send size={16} />
//                   Send Message
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// "use client";

// import { FormEvent, useState } from "react";
// import { Mail, MapPin, Phone, Send } from "lucide-react";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { db } from "@/lib/firebase"; // adjust path if different


// export default function ContactPage() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [sent, setSent] = useState(false);
//   const [sending, setSending] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setSending(true);
//     setError("");

//     try {
//       await addDoc(collection(db, "furniture_enquiries"), {
//         customerName: form.name.trim(),
//         email: form.email.trim(),
//         phone: form.phone.trim() || "",
//         message: form.message.trim(),
//         productCode: "",
//         productName: "General Enquiry",
//         source: "Website",
//         status: "New",
//         notes: "",
//         nextFollowUp: "",
//         createdAt: serverTimestamp(),
//         updatedAt: serverTimestamp(),
//       });

//       setSent(true);
//       setForm({ name: "", email: "", phone: "", message: "" });
//     } catch (err) {
//       console.error(err);
//       setError("Failed to send message. Please try again.");
//     } finally {
//       setSending(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <section className="border-b border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
//           <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//             Contact
//           </p>
//           <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
//             Get in touch
//           </h1>
//           <p className="mt-4 max-w-xl text-sm text-slate-500">
//             Have a question about our furniture or interior services? We would love to hear from you.
//           </p>
//         </div>
//       </section>

//       <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
//         <div className="grid gap-10 lg:grid-cols-2">
//           {/* Info */}
//           <div className="space-y-6">
//             <div className="flex gap-4">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f5ef] text-[#176b5b]">
//                 <Phone size={18} />
//               </div>
//               <div>
//                 <p className="text-sm font-semibold text-slate-900">Phone</p>
//                 <p className="mt-1 text-sm text-slate-500">+91 98765 43210</p>
//               </div>
//             </div>
//             <div className="flex gap-4">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f5ef] text-[#176b5b]">
//                 <Mail size={18} />
//               </div>
//               <div>
//                 <p className="text-sm font-semibold text-slate-900">Email</p>
//                 <p className="mt-1 text-sm text-slate-500">hello@akrish.in</p>
//               </div>
//             </div>
//             <div className="flex gap-4">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f5ef] text-[#176b5b]">
//                 <MapPin size={18} />
//               </div>
//               <div>
//                 <p className="text-sm font-semibold text-slate-900">Address</p>
//                 <p className="mt-1 text-sm text-slate-500">
//                   Akrish Furniture & Interior, Guntur
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Form */}
//           <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
//             {sent ? (
//               <div className="py-10 text-center">
//                 <p className="text-lg font-semibold text-emerald-700">Message sent!</p>
//                 <p className="mt-2 text-sm text-slate-500">
//                   We will get back to you soon.
//                 </p>
//                 <button
//                   onClick={() => setSent(false)}
//                   className="mt-6 text-sm font-medium text-[#176b5b] hover:underline"
//                 >
//                   Send another message
//                 </button>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Name *
//                   </label>
//                   <input
//                     required
//                     value={form.name}
//                     onChange={(e) => setForm({ ...form, name: e.target.value })}
//                     className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                     placeholder="Your name"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Email *
//                   </label>
//                   <input
//                     required
//                     type="email"
//                     value={form.email}
//                     onChange={(e) => setForm({ ...form, email: e.target.value })}
//                     className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                     placeholder="you@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Phone / WhatsApp
//                   </label>
//                   <input
//                     value={form.phone}
//                     onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                     className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                     placeholder="+91 XXXXX XXXXX"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Message *
//                   </label>
//                   <textarea
//                     required
//                     rows={4}
//                     value={form.message}
//                     onChange={(e) => setForm({ ...form, message: e.target.value })}
//                     className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                     placeholder="How can we help you?"
//                   />
//                 </div>

//                 {error && (
//                   <p className="text-sm text-red-600">{error}</p>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={sending}
//                   className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 py-3 text-sm font-semibold text-white hover:bg-[#125849] disabled:opacity-60"
//                 >
//                   <Send size={16} />
//                   {sending ? "Sending..." : "Send Message"}
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      await addDoc(collection(db, "furniture_enquiries"), {
        customerName: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || "",
        message: form.message.trim(),
        productCode: "",
        productName: "General Enquiry",
        source: "Website",
        status: "New",
        notes: "",
        nextFollowUp: "",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      setSent(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      setError("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f7f9f8]">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-14 lg:px-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
            Contact
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-4xl">
            Get in touch
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 sm:mt-4">
            Questions about our furniture, orders, or custom pieces? Send a
            message — we&apos;ll respond soon.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-12 lg:px-8">
        {/* Contact chips — 3 in a row on mobile */}
        <div className="mb-6 grid grid-cols-3 gap-2 sm:mb-10 sm:gap-4 lg:hidden">
          <a
            href="tel:+919876543210"
            className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white p-3 text-center active:bg-slate-50"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e8f5ef] text-[#176b5b]">
              <Phone size={16} />
            </div>
            <span className="text-[10px] font-semibold leading-tight text-slate-800">
              Call
            </span>
          </a>
          <a
            href="mailto:hello@akrish.in"
            className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white p-3 text-center active:bg-slate-50"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e8f5ef] text-[#176b5b]">
              <Mail size={16} />
            </div>
            <span className="text-[10px] font-semibold leading-tight text-slate-800">
              Email
            </span>
          </a>
          <div className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white p-3 text-center">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e8f5ef] text-[#176b5b]">
              <MapPin size={16} />
            </div>
            <span className="text-[10px] font-semibold leading-tight text-slate-800">
              Guntur
            </span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
          {/* Desktop info column */}
          <div className="hidden space-y-5 lg:block">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8f5ef] text-[#176b5b]">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Phone</p>
                <a
                  href="tel:+919876543210"
                  className="mt-1 block text-sm text-slate-500 hover:text-[#176b5b]"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8f5ef] text-[#176b5b]">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Email</p>
                <a
                  href="mailto:hello@akrish.in"
                  className="mt-1 block text-sm text-slate-500 hover:text-[#176b5b]"
                >
                  hello@akrish.in
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8f5ef] text-[#176b5b]">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Address</p>
                <p className="mt-1 text-sm text-slate-500">
                  Akrish Furniture, Guntur, Andhra Pradesh
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 sm:rounded-2xl sm:p-6 lg:p-8">
            {sent ? (
              <div className="flex flex-col items-center py-8 text-center sm:py-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 size={28} />
                </div>
                <p className="mt-4 text-base font-semibold text-emerald-700 sm:text-lg">
                  Message sent!
                </p>
                <p className="mt-1.5 text-sm text-slate-500">
                  We will get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-5 min-h-[44px] text-sm font-medium text-[#176b5b] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Name *
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="h-11 w-full rounded-lg border border-slate-200 px-3 text-base outline-none focus:border-[#176b5b] sm:text-sm"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>

                {/* Email + Phone side by side on sm+; stacked on very small if needed — 2 col from sm */}
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-slate-700">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="h-11 w-full rounded-lg border border-slate-200 px-3 text-base outline-none focus:border-[#176b5b] sm:text-sm"
                      placeholder="you@example.com"
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-slate-700">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="h-11 w-full rounded-lg border border-slate-200 px-3 text-base outline-none focus:border-[#176b5b] sm:text-sm"
                      placeholder="+91 XXXXX XXXXX"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-base outline-none focus:border-[#176b5b] sm:text-sm"
                    placeholder="How can we help you?"
                  />
                </div>

                {error && (
                  <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-4 text-sm font-semibold text-white transition hover:bg-[#125849] disabled:opacity-60"
                >
                  <Send size={16} />
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Mobile detail strip under form */}
        <div className="mt-6 space-y-2 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600 lg:hidden">
          <p className="flex items-center gap-2">
            <Phone size={14} className="shrink-0 text-[#176b5b]" />
            <a href="tel:+919876543210" className="font-medium text-slate-800">
              +91 98765 43210
            </a>
          </p>
          <p className="flex items-center gap-2">
            <Mail size={14} className="shrink-0 text-[#176b5b]" />
            <a
              href="mailto:hello@akrish.in"
              className="font-medium text-slate-800"
            >
              hello@akrish.in
            </a>
          </p>
          <p className="flex items-start gap-2">
            <MapPin size={14} className="mt-0.5 shrink-0 text-[#176b5b]" />
            <span>Akrish Furniture, Guntur, Andhra Pradesh</span>
          </p>
        </div>
      </section>
    </main>
  );
}
