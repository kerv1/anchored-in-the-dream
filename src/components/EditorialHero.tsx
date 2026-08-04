import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { HeroAnchorArt, AnchorIcon } from "./AbstractWeekArtwork";

interface EditorialHeroProps {
  completedCount: number;
  totalCount: number;
  ctaLabel: string;
  ctaHref: string;
}

export function EditorialHero({
  completedCount,
  totalCount,
  ctaLabel,
  ctaHref,
}: EditorialHeroProps) {
  const pct = totalCount === 0 ? 0 : (completedCount / totalCount) * 100;

  return (
    <section className="relative flex min-h-[calc(100dvh-3.5rem)] flex-col overflow-hidden bg-navy text-cream">
      <div className="pointer-events-none absolute inset-0 opacity-90" aria-hidden="true">
        <HeroAnchorArt className="h-full w-full object-cover" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(18_62_115/0.35),transparent_55%),linear-gradient(to_bottom,transparent_40%,rgb(7_26_51/0.85)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-5 pb-10 pt-12 sm:px-8 lg:px-10">
        <p className="label-gold">DreamLife Dallas · Worship & Arts</p>

        <h1 className="type-hero mt-6 text-cream">
          <span className="block">Anchored</span>
          <span className="block">in the</span>
          <span className="block text-soft-gold">Dream</span>
        </h1>

        <p className="mt-6 max-w-xl text-base text-cream/80 sm:text-lg">
          An August Fast for the DreamLife Dallas Worship & Arts Team
        </p>
        <p className="mt-3 max-w-md font-display text-xl italic text-soft-gold/90 sm:text-2xl">
          Four Wednesdays. One sound. A deeper life with God.
        </p>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Link to={ctaHref} className="btn-primary">
            {ctaLabel}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link to="/guide" className="btn-text text-soft-gold">
            View the Fast Guide
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 pb-10 sm:px-8 lg:px-10">
        <div className="flex items-end justify-between gap-4">
          <p className="label-gold">
            {completedCount} of {totalCount} Wednesdays complete
          </p>
          <AnchorIcon className="text-gold" size={18} />
        </div>
        <div
          className="relative mt-3 h-px w-full bg-cream/15"
          role="progressbar"
          aria-valuenow={completedCount}
          aria-valuemin={0}
          aria-valuemax={totalCount}
          aria-label="August progress"
        >
          <div
            className="absolute inset-y-0 left-0 bg-gold transition-[width] duration-700"
            style={{ width: `${pct}%` }}
          />
          <span
            className="absolute top-1/2 -translate-y-1/2 text-gold transition-[left] duration-700"
            style={{ left: `calc(${pct}% - 8px)` }}
          >
            <AnchorIcon size={14} />
          </span>
        </div>
      </div>
    </section>
  );
}
