import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-shell text-cream transition hover:border-gold/50"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  );
}
