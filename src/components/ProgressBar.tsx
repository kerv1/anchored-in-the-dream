interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  className?: string;
}

export function ProgressBar({
  value,
  max = 4,
  label,
  className = "",
}: ProgressBarProps) {
  const pct = max === 0 ? 0 : Math.min(100, Math.round((value / max) * 100));

  return (
    <div className={className}>
      {label && (
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-muted-app">{label}</span>
          <span className="font-medium text-app">
            {value} of {max} complete
          </span>
        </div>
      )}
      <div
        className="h-2 overflow-hidden rounded-full bg-subtle"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label ?? "Progress"}
      >
        <div
          className="h-full rounded-full bg-linear-to-r from-gold to-soft-gold transition-[width] duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
