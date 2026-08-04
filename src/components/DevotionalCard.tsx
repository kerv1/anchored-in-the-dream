import { Link } from "react-router-dom";
import { Check, Clock } from "lucide-react";
import type { Devotional } from "../data/devotionals";
import { AbstractWeekArtwork } from "./AbstractWeekArtwork";
import { formatComingLabel } from "../utils/helpers";

interface DevotionalCardProps {
  devotional: Devotional;
  complete: boolean;
  status: "complete" | "today" | "available" | "upcoming";
  emphasized?: boolean;
  previewAll?: boolean;
}

export function DevotionalCard({
  devotional,
  complete,
  status,
  emphasized = false,
  previewAll = false,
}: DevotionalCardProps) {
  const showComing = status === "upcoming" && !previewAll && !complete;

  return (
    <Link
      to={`/day/${devotional.slug}`}
      className={`group relative block overflow-hidden rounded-2xl border bg-elevated p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-soft ${
        emphasized
          ? "border-gold/50 ring-1 ring-gold/30"
          : "border-app"
      }`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 text-dream-blue/30 dark:text-soft-gold/25">
        <AbstractWeekArtwork theme={devotional.theme} className="h-16 w-full" />
      </div>

      <div className="relative">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
              {devotional.weekLabel}
            </p>
            <p className="mt-1 text-sm text-muted-app">{devotional.displayDate}</p>
          </div>
          {complete ? (
            <span
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-gold"
              aria-label="Completed"
            >
              <Check size={18} strokeWidth={2.5} aria-hidden="true" />
            </span>
          ) : showComing ? (
            <span className="rounded-full bg-subtle px-3 py-1 text-xs font-medium text-muted-app">
              {formatComingLabel(devotional.displayDate)}
            </span>
          ) : status === "today" ? (
            <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-medium text-gold">
              Today
            </span>
          ) : null}
        </div>

        <h3 className="font-display text-2xl font-semibold leading-tight text-app group-hover:text-dream-blue dark:group-hover:text-soft-gold">
          {devotional.title}
        </h3>
        <p className="mt-2 text-sm text-muted-app">{devotional.themeLabel}</p>
        <p className="mt-3 text-sm text-app">
          {devotional.scriptures.map((s) => s.reference).join(" · ")}
        </p>
        <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-app">
          <Clock size={14} aria-hidden="true" />
          {devotional.estimatedMinutes}–{devotional.estimatedMinutes + 3} minutes
        </p>
      </div>
    </Link>
  );
}
