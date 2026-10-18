"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  CheckCircle2,
  Loader2,
  Mail,
  MessageSquare,
  Phone,
  User,
  X,
} from "lucide-react";

interface EnquiryModalProps {
  open: boolean;
  onClose: () => void;
  productName?: string;
}

interface EnquiryForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialForm: EnquiryForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function EnquiryModal({
  open,
  onClose,
  productName,
}: EnquiryModalProps) {
  const [form, setForm] = useState<EnquiryForm>(initialForm);
  const [errors, setErrors] = useState<
    Partial<Record<keyof EnquiryForm, string>>
  >({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) {
      setForm(initialForm);
      setErrors({});
      setSubmitting(false);
      setSubmitted(false);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !submitting) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose, submitting]);

  if (!open) {
    return null;
  }

  const updateField = (
    field: keyof EnquiryForm,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((current) => ({
        ...current,
        [field]: "",
      }));
    }
  };

  const validate = () => {
    const nextErrors: Partial<
      Record<keyof EnquiryForm, string>
    > = {};

    if (!form.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (!/^[0-9+\-\s()]{8,15}$/.test(form.phone)) {
      nextErrors.phone = "Enter a valid phone number.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Please enter your enquiry.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setSubmitting(true);

    try {
      /*
       * Connect this section to your enquiry API/server action
       * when the backend endpoint is available.
       *
       * Example payload:
       * {
       *   ...form,
       *   productName,
       * }
       */

      await new Promise((resolve) =>
        window.setTimeout(resolve, 700)
      );

      console.log("Product enquiry:", {
        ...form,
        productName,
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Enquiry submission failed:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    if (submitting) return;
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-modal-title"
        className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-100 px-5 py-5 sm:px-6">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              VIP Interior
            </p>

            <h2
              id="enquiry-modal-title"
              className="mt-1 text-xl font-bold text-slate-900"
            >
              {submitted ? "Enquiry received" : "Make an enquiry"}
            </h2>

            {productName && !submitted && (
              <p className="mt-1 text-xs text-slate-500">
                Enquiring about{" "}
                <span className="font-semibold text-slate-700">
                  {productName}
                </span>
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={handleClose}
            disabled={submitting}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Close enquiry modal"
          >
            <X size={19} />
          </button>
        </div>

        {submitted ? (
          /* Success */
          <div className="px-6 py-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
              <CheckCircle2
                size={34}
                className="text-emerald-600"
              />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              Thank you for your enquiry
            </h3>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
              Your enquiry has been received. Our team will
              contact you using the details you provided.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mt-7 rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Close
            </button>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit}>
            <div className="space-y-5 px-5 py-6 sm:px-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="enquiry-name"
                  className="mb-2 block text-xs font-semibold text-slate-700"
                >
                  Full name
                </label>

                <div className="relative">
                  <User
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="enquiry-name"
                    type="text"
                    value={form.name}
                    onChange={(event) =>
                      updateField("name", event.target.value)
                    }
                    placeholder="Enter your name"
                    className={`h-11 w-full rounded-lg border bg-white pl-10 pr-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-400 ${
                      errors.name
                        ? "border-red-300"
                        : "border-slate-200"
                    }`}
                  />
                </div>

                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="enquiry-email"
                  className="mb-2 block text-xs font-semibold text-slate-700"
                >
                  Email address
                </label>

                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="enquiry-email"
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
                    }
                    placeholder="you@example.com"
                    className={`h-11 w-full rounded-lg border bg-white pl-10 pr-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-400 ${
                      errors.email
                        ? "border-red-300"
                        : "border-slate-200"
                    }`}
                  />
                </div>

                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="enquiry-phone"
                  className="mb-2 block text-xs font-semibold text-slate-700"
                >
                  Phone number
                </label>

                <div className="relative">
                  <Phone
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="enquiry-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(event) =>
                      updateField("phone", event.target.value)
                    }
                    placeholder="Enter your phone number"
                    className={`h-11 w-full rounded-lg border bg-white pl-10 pr-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-400 ${
                      errors.phone
                        ? "border-red-300"
                        : "border-slate-200"
                    }`}
                  />
                </div>

                {errors.phone && (
                  <p className="mt-1.5 text-xs text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="enquiry-message"
                  className="mb-2 block text-xs font-semibold text-slate-700"
                >
                  Your enquiry
                </label>

                <div className="relative">
                  <MessageSquare
                    size={16}
                    className="absolute left-3 top-3.5 text-slate-400"
                  />

                  <textarea
                    id="enquiry-message"
                    rows={4}
                    value={form.message}
                    onChange={(event) =>
                      updateField(
                        "message",
                        event.target.value
                      )
                    }
                    placeholder="Tell us what you would like to know..."
                    className={`w-full resize-none rounded-lg border bg-white py-3 pl-10 pr-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-400 ${
                      errors.message
                        ? "border-red-300"
                        : "border-slate-200"
                    }`}
                  />
                </div>

                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col-reverse gap-3 border-t border-slate-100 bg-slate-50 px-5 py-4 sm:flex-row sm:justify-end sm:px-6">
              <button
                type="button"
                onClick={handleClose}
                disabled={submitting}
                className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2
                      size={16}
                      className="animate-spin"
                    />
                    Sending...
                  </>
                ) : (
                  "Send enquiry"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}