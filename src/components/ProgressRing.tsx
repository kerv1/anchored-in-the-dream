interface ProgressRingProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function ProgressRing({
  value,
  max = 4,
  size = 88,
  strokeWidth = 7,
  className = "",
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const pct = max === 0 ? 0 : value / max;
  const offset = circumference * (1 - pct);

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={`${value} of ${max} devotionals complete`}
    >
      <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-pale dark:text-dream-blue/40"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-[stroke-dashoffset] duration-700"
        />
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C89B3C" />
            <stop offset="100%" stopColor="#E0C27A" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="font-display text-2xl font-semibold leading-none text-app">
          {value}/{max}
        </span>
      </div>
    </div>
  );
}
