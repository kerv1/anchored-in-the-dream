import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import type { Devotional } from "../data/devotionals";
import { AbstractWeekArtwork } from "./AbstractWeekArtwork";
import { formatComingLabel } from "../utils/helpers";

interface ChapterTimelineItemProps {
  devotional: Devotional;
  index: number;
  complete: boolean;
  status: "complete" | "today" | "available" | "upcoming";
  current?: boolean;
  previewAll?: boolean;
}

export function ChapterTimelineItem({
  devotional,
  index,
  complete,
  status,
  current = false,
  previewAll = false,
}: ChapterTimelineItemProps) {
  const number = String(index + 1).padStart(2, "0");
  const showComing = status === "upcoming" && !previewAll && !complete;

  return (
    <li>
      <Link
        to={`/day/${devotional.slug}`}
        className={`group relative flex gap-5 py-8 transition sm:gap-8 ${
          current ? "bg-cream/[0.04]" : "hover:bg-cream/[0.03]"
        }`}
      >
        {current && (
          <span
            className="absolute inset-y-3 left-0 w-0.5 bg-gold"
            aria-hidden="true"
          />
        )}

        <div className="relative w-16 shrink-0 pl-4 sm:w-24 sm:pl-6">
          <span
            className={`font-display text-4xl font-semibold leading-none sm:text-5xl ${
              complete ? "text-gold/50" : current ? "text-soft-gold" : "text-cream/25"
            }`}
          >
            {number}
          </span>
          <div className="pointer-events-none absolute -right-2 top-10 w-20 text-gold/20 opacity-0 transition group-hover:opacity-100 sm:w-28">
            <AbstractWeekArtwork theme={devotional.theme} className="h-10 w-full" />
          </div>
        </div>

        <div className="min-w-0 flex-1 pr-4 sm:pr-6">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cream/45">
              {devotional.displayDate.replace(", 2026", "")}
            </p>
            {complete && (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold">
                <Check size={14} strokeWidth={2.5} aria-hidden="true" />
                Complete
              </span>
            )}
            {showComing && (
              <span className="text-xs font-medium text-cream/40">
                {formatComingLabel(devotional.displayDate)}
              </span>
            )}
            {status === "today" && !complete && (
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-gold">
                Today
              </span>
            )}
          </div>

          <h3
            className={`mt-2 font-display text-2xl font-semibold leading-tight transition sm:text-3xl ${
              complete
                ? "text-cream/55 group-hover:text-cream/75"
                : "text-cream group-hover:text-soft-gold"
            }`}
          >
            {devotional.title}
          </h3>

          <p className="mt-2 text-sm text-cream/50">
            {devotional.scriptures.map((s) => s.reference).join(" · ")}
          </p>

          {current && !complete && (
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
              Continue
              <ArrowRight size={14} aria-hidden="true" />
            </span>
          )}

          <div
            className={`mt-6 h-px ${complete ? "bg-gold/40" : "bg-cream/10"}`}
          />
        </div>
      </Link>
    </li>
  );
}

interface ChapterTimelineProps {
  items: ChapterTimelineItemProps[];
}

export function ChapterTimeline({ items }: ChapterTimelineProps) {
  return (
    <section className="bg-navy text-cream">
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 lg:px-10">
        <p className="label-gold">The Plan</p>
        <h2 className="type-section mt-3 text-cream">Four Wednesdays</h2>
        <p className="mt-3 max-w-lg text-cream/60">
          August 2026 · A journey into intimacy, unity, excellence, and hope.
        </p>
        <ol className="mt-6">
          {items.map((item) => (
            <ChapterTimelineItem key={item.devotional.slug} {...item} />
          ))}
        </ol>
      </div>
    </section>
  );
}
