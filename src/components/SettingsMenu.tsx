import { useEffect, useId, useRef, useState } from "react";
import { Settings, X } from "lucide-react";
import { FontSizeControl } from "./FontSizeControl";
import { ThemeToggle } from "./ThemeToggle";
import { useProgress } from "../hooks/useProgress";

export function SettingsMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { previewAll, setPreviewAll } = useProgress();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-shell text-cream transition hover:border-gold/50 hover:text-soft-gold"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label="Open settings"
      >
        <Settings size={18} aria-hidden="true" />
      </button>

      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 cursor-default bg-transparent"
            aria-label="Close settings"
            onClick={() => setOpen(false)}
          />
          <div
            id={panelId}
            className="absolute right-0 z-50 mt-2 w-[min(100vw-2rem,20rem)] rounded-xl border border-shell bg-[#0d2748] p-4 text-cream shadow-soft"
            role="dialog"
            aria-label="Settings"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="label-gold">Settings</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-cream/70 hover:bg-white/5"
                aria-label="Close settings"
              >
                <X size={16} aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <p className="mb-2 text-sm font-medium text-cream">Appearance</p>
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <span className="text-sm text-cream/70">Dark mode</span>
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium text-cream">Text size</p>
                <FontSizeControl />
              </div>

              <div className="border-t border-shell pt-4">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={previewAll}
                    onChange={(e) => setPreviewAll(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded accent-gold"
                  />
                  <span>
                    <span className="block text-sm font-medium text-cream">
                      Preview all days
                    </span>
                    <span className="block text-xs text-cream/60">
                      Emphasize every day as available for reading ahead.
                    </span>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
