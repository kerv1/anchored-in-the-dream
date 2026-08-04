import { useEffect, useId, useRef } from "react";
import { X } from "lucide-react";

interface ConfirmModalProps {
  open: boolean;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  tone?: "danger" | "default";
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmModal({
  open,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  tone = "default",
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  const titleId = useId();
  const descId = useId();
  const confirmRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    confirmRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onCancel]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-navy/70 p-4 sm:items-center"
      role="presentation"
      onClick={onCancel}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="w-full max-w-md rounded-xl border border-shell bg-[#0d2748] p-6 text-cream shadow-soft"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <h2 id={titleId} className="font-display text-2xl font-semibold">
            {title}
          </h2>
          <button
            type="button"
            onClick={onCancel}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-cream/60 hover:bg-white/5"
            aria-label="Close"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>
        <p id={descId} className="mb-6 text-cream/65">
          {description}
        </p>
        <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onCancel}
            className="min-h-11 rounded-xl border border-shell px-5 text-sm font-medium text-cream"
          >
            {cancelLabel}
          </button>
          <button
            ref={confirmRef}
            type="button"
            onClick={onConfirm}
            className={`min-h-11 rounded-xl px-5 text-sm font-semibold ${
              tone === "danger"
                ? "bg-red-700 text-cream hover:bg-red-800"
                : "bg-gold text-navy hover:bg-soft-gold"
            }`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
