import type { FontSize } from "../hooks/useTheme";
import { useTheme } from "../hooks/useTheme";

const OPTIONS: { value: FontSize; label: string }[] = [
  { value: "sm", label: "S" },
  { value: "md", label: "M" },
  { value: "lg", label: "L" },
];

export function FontSizeControl() {
  const { fontSize, setFontSize } = useTheme();

  return (
    <div
      className="inline-flex rounded-lg border border-shell p-1"
      role="group"
      aria-label="Text size"
    >
      {OPTIONS.map((option) => {
        const active = fontSize === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setFontSize(option.value)}
            className={`min-h-9 min-w-9 rounded-md px-2.5 text-sm font-semibold transition ${
              active
                ? "bg-gold text-navy"
                : "text-cream/60 hover:text-cream"
            }`}
            aria-pressed={active}
            aria-label={
              option.value === "sm"
                ? "Small"
                : option.value === "md"
                  ? "Default"
                  : "Large"
            }
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
