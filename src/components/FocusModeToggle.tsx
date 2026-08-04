import { Focus } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export function FocusModeToggle() {
  const { focusMode, toggleFocusMode } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleFocusMode}
      className={`inline-flex h-10 items-center gap-2 rounded-lg border px-3 text-sm font-medium transition ${
        focusMode
          ? "border-gold/60 bg-gold/15 text-soft-gold"
          : "border-shell text-cream/80 hover:border-gold/40 hover:text-cream"
      }`}
      aria-pressed={focusMode}
      aria-label={focusMode ? "Exit focus mode" : "Enter focus mode"}
    >
      <Focus size={16} aria-hidden="true" />
      Focus
    </button>
  );
}
