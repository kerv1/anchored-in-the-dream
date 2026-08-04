import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { AnchorIcon } from "./AbstractWeekArtwork";

interface CompletionButtonProps {
  complete: boolean;
  onComplete: () => void;
  onUndo?: () => void;
}

export function CompletionButton({
  complete,
  onComplete,
  onUndo,
}: CompletionButtonProps) {
  const [justCompleted, setJustCompleted] = useState(false);

  useEffect(() => {
    if (!justCompleted) return;
    const timer = window.setTimeout(() => setJustCompleted(false), 2800);
    return () => window.clearTimeout(timer);
  }, [justCompleted]);

  const handleClick = () => {
    if (complete) {
      onUndo?.();
      return;
    }
    onComplete();
    setJustCompleted(true);
  };

  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={handleClick}
        className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-6 text-base font-semibold transition ${
          complete
            ? "border border-gold/50 bg-gold/15 text-cream"
            : "bg-gold text-navy hover:bg-soft-gold"
        }`}
        aria-pressed={complete}
      >
        <span
          className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${
            complete || justCompleted
              ? "bg-gold text-navy [animation:checkPop_500ms_ease]"
              : "bg-navy/15 text-navy"
          }`}
        >
          {complete || justCompleted ? (
            <Check size={16} strokeWidth={2.75} aria-hidden="true" />
          ) : (
            <AnchorIcon size={14} />
          )}
        </span>
        {complete ? "Completed" : "Mark Complete"}
      </button>
      {justCompleted && (
        <p
          className="text-center font-display text-xl text-soft-gold"
          role="status"
          aria-live="polite"
        >
          Carry this with you.
        </p>
      )}
    </div>
  );
}
