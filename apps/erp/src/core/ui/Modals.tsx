"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AlertTriangle, CheckCircle2, Info, X } from "lucide-react";

type ModalSize = "sm" | "md" | "lg" | "xl";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  size?: ModalSize;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
}

const sizeClasses: Record<ModalSize, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-2xl",
};

export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  size = "md",
  showCloseButton = true,
  closeOnOverlayClick = true,
}: ModalProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
      aria-describedby={description ? "modal-description" : undefined}
    >
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close modal"
        className="absolute inset-0 cursor-default bg-slate-950/40 backdrop-blur-[2px]"
        onClick={closeOnOverlayClick ? onClose : undefined}
      />

      {/* Modal */}
      <div
        ref={contentRef}
        className={`relative z-10 flex max-h-[90vh] w-full ${sizeClasses[size]} flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl`}
      >
        {(title || showCloseButton) && (
          <div className="flex shrink-0 items-start justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
            <div className="min-w-0 pr-4">
              {title && (
                <h2
                  id="modal-title"
                  className="text-lg font-semibold text-slate-900"
                >
                  {title}
                </h2>
              )}

              {description && (
                <p
                  id="modal-description"
                  className="mt-1 text-sm leading-5 text-slate-500"
                >
                  {description}
                </p>
              )}
            </div>

            {showCloseButton && (
              <button
                type="button"
                onClick={onClose}
                className="shrink-0 rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close"
              >
                <X size={19} />
              </button>
            )}
          </div>
        )}

        <div className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

interface ConfirmModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void | Promise<void>;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  variant?: "danger" | "warning" | "primary";
  loading?: boolean;
}

export function ConfirmModal({
  open,
  onClose,
  onConfirm,
  title = "Confirm action",
  description = "Are you sure you want to continue?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  variant = "primary",
  loading = false,
}: ConfirmModalProps) {
  const iconConfig = {
    danger: {
      icon: AlertTriangle,
      wrapper: "bg-red-50 text-red-600",
      button: "bg-red-600 hover:bg-red-700",
    },
    warning: {
      icon: AlertTriangle,
      wrapper: "bg-amber-50 text-amber-600",
      button: "bg-amber-600 hover:bg-amber-700",
    },
    primary: {
      icon: Info,
      wrapper: "bg-slate-100 text-slate-700",
      button: "bg-slate-900 hover:bg-slate-800",
    },
  };

  const config = iconConfig[variant];
  const Icon = config.icon;

  return (
    <Modal
      open={open}
      onClose={loading ? () => undefined : onClose}
      title={title}
      size="sm"
      showCloseButton={!loading}
      closeOnOverlayClick={!loading}
    >
      <div className="text-center">
        <div
          className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${config.wrapper}`}
        >
          <Icon size={23} />
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-600">
          {description}
        </p>

        <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {cancelText}
          </button>

          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className={`rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-60 ${config.button}`}
          >
            {loading ? "Please wait..." : confirmText}
          </button>
        </div>
      </div>
    </Modal>
  );
}

interface AlertModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  message: string;
  type?: "success" | "error" | "info" | "warning";
  buttonText?: string;
}

export function AlertModal({
  open,
  onClose,
  title,
  message,
  type = "info",
  buttonText = "OK",
}: AlertModalProps) {
  const config = {
    success: {
      icon: CheckCircle2,
      wrapper: "bg-emerald-50 text-emerald-600",
    },
    error: {
      icon: AlertTriangle,
      wrapper: "bg-red-50 text-red-600",
    },
    info: {
      icon: Info,
      wrapper: "bg-blue-50 text-blue-600",
    },
    warning: {
      icon: AlertTriangle,
      wrapper: "bg-amber-50 text-amber-600",
    },
  };

  const Icon = config[type].icon;

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={title}
      size="sm"
    >
      <div className="text-center">
        <div
          className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${config[type].wrapper}`}
        >
          <Icon size={23} />
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-600">
          {message}
        </p>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          {buttonText}
        </button>
      </div>
    </Modal>
  );
}

interface ModalContextValue {
  openModal: (
    content: ReactNode,
    options?: {
      title?: string;
      description?: string;
      size?: ModalSize;
    }
  ) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextValue | undefined>(
  undefined
);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<{
    content: ReactNode;
    title?: string;
    description?: string;
    size?: ModalSize;
  } | null>(null);

  const openModal = (
    content: ReactNode,
    options?: {
      title?: string;
      description?: string;
      size?: ModalSize;
    }
  ) => {
    setModal({
      content,
      ...options,
    });
  };

  const closeModal = () => {
    setModal(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      <Modal
        open={Boolean(modal)}
        onClose={closeModal}
        title={modal?.title}
        description={modal?.description}
        size={modal?.size || "md"}
      >
        {modal?.content}
      </Modal>
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used inside a ModalProvider");
  }

  return context;
}