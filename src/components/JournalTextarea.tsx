import { useEffect, useRef, useState } from "react";

interface JournalTextareaProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  tone?: "canvas" | "shell";
}

export function JournalTextarea({
  id,
  label,
  value,
  onChange,
  placeholder,
  rows = 5,
  tone = "shell",
}: JournalTextareaProps) {
  const [saved, setSaved] = useState(true);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    setSaved(true);
  }, [value]);

  const handleChange = (next: string) => {
    setSaved(false);
    onChange(next);
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setSaved(true), 500);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const onCanvas = tone === "canvas";

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <label
          htmlFor={id}
          className={`label-gold ${onCanvas ? "" : ""}`}
        >
          {label}
        </label>
        <span
          className={`text-xs ${onCanvas ? "text-muted" : "text-cream/45"}`}
          aria-live="polite"
          role="status"
        >
          {saved ? "Saved" : "Saving…"}
        </span>
      </div>
      <textarea
        id={id}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className={`w-full resize-y border-0 border-b bg-transparent px-0 py-3 text-reading outline-none transition focus:border-gold ${
          onCanvas
            ? "border-charcoal/15 text-charcoal placeholder:text-muted dark:border-cream/20 dark:text-cream dark:placeholder:text-cream/40"
            : "border-cream/20 text-cream placeholder:text-cream/35"
        }`}
      />
    </div>
  );
}
