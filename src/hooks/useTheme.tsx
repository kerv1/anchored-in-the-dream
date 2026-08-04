import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { useLocalStorage } from "./useLocalStorage";

export type FontSize = "sm" | "md" | "lg";

interface ThemeContextValue {
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
  toggleDarkMode: () => void;
  fontSize: FontSize;
  setFontSize: (value: FontSize) => void;
  focusMode: boolean;
  setFocusMode: (value: boolean | ((prev: boolean) => boolean)) => void;
  toggleFocusMode: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useLocalStorage<boolean>(
    "anchored:darkMode",
    false,
  );
  const [fontSize, setFontSize] = useLocalStorage<FontSize>(
    "anchored:fontSize",
    "md",
  );
  const [focusMode, setFocusMode] = useLocalStorage<boolean>(
    "anchored:focusMode",
    false,
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", darkMode);
    root.classList.remove("text-size-sm", "text-size-md", "text-size-lg");
    root.classList.add(`text-size-${fontSize}`);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", "#071A33");
    }
  }, [darkMode, fontSize]);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, [setDarkMode]);

  const toggleFocusMode = useCallback(() => {
    setFocusMode((prev) => !prev);
  }, [setFocusMode]);

  const value = useMemo(
    () => ({
      darkMode,
      setDarkMode,
      toggleDarkMode,
      fontSize,
      setFontSize,
      focusMode,
      setFocusMode,
      toggleFocusMode,
    }),
    [
      darkMode,
      setDarkMode,
      toggleDarkMode,
      fontSize,
      setFontSize,
      focusMode,
      setFocusMode,
      toggleFocusMode,
    ],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
