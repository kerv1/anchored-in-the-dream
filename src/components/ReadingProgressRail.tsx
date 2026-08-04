import { AnchorIcon } from "./AbstractWeekArtwork";

const MARKERS = [
  { id: "begin", label: "Begin" },
  { id: "read", label: "Read" },
  { id: "consider", label: "Consider" },
  { id: "quote", label: "Quote" },
  { id: "reflect", label: "Reflect" },
  { id: "pray", label: "Pray" },
  { id: "live-it", label: "Live" },
  { id: "carry", label: "Carry" },
  { id: "finish", label: "Finish" },
] as const;

interface ReadingProgressRailProps {
  activeIndex: number;
  onSelect: (index: number) => void;
}

export function ReadingProgressRail({
  activeIndex,
  onSelect,
}: ReadingProgressRailProps) {
  const pct =
    MARKERS.length <= 1
      ? 0
      : (activeIndex / (MARKERS.length - 1)) * 100;

  return (
    <aside
      className="pointer-events-none absolute inset-y-16 left-1 z-10 flex w-6 flex-col items-center md:left-3 md:w-8 lg:left-[max(0.75rem,calc(50%-26rem))]"
      aria-hidden="true"
    >
      <div className="relative h-full w-px bg-cream/15">
        <div
          className="absolute inset-x-0 top-0 bg-gold transition-[height] duration-500"
          style={{ height: `${pct}%` }}
        />
        <div className="absolute inset-0 flex flex-col justify-between py-1">
          {MARKERS.map((marker, index) => {
            const reached = index <= activeIndex;
            return (
              <button
                key={marker.id}
                type="button"
                tabIndex={-1}
                onClick={() => onSelect(index)}
                className={`pointer-events-auto h-2 w-2 -translate-x-1/2 rounded-full transition ${
                  reached ? "bg-gold" : "bg-cream/25"
                } ${index === activeIndex ? "scale-125" : ""}`}
                style={{ marginLeft: "0.5px" }}
                aria-label={marker.label}
              />
            );
          })}
        </div>
        <span
          className="absolute left-1/2 -translate-x-1/2 text-gold transition-[top] duration-500"
          style={{ top: `calc(${pct}% - 8px)` }}
        >
          <AnchorIcon size={14} />
        </span>
      </div>
    </aside>
  );
}
