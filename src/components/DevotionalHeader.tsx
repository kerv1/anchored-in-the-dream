import type { Devotional } from "../data/devotionals";
import { AbstractWeekArtwork } from "./AbstractWeekArtwork";

interface DevotionalHeaderProps {
  devotional: Devotional;
}

export function DevotionalHeader({ devotional }: DevotionalHeaderProps) {
  return (
    <header className="relative overflow-hidden rounded-3xl border border-app bg-elevated px-5 py-8 sm:px-8">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 text-dream-blue/25 dark:text-soft-gold/20">
        <AbstractWeekArtwork theme={devotional.theme} className="h-24 w-full" />
      </div>
      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
          {devotional.weekLabel} · {devotional.displayDate}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-app sm:text-5xl">
          {devotional.title}
        </h1>
        <p className="mt-3 text-sm text-muted-app">{devotional.themeLabel}</p>
        <div className="gold-divider my-6" />
        <p className="font-display text-xl italic leading-relaxed text-dream-blue dark:text-soft-gold sm:text-2xl">
          {devotional.meditation}
        </p>
      </div>
    </header>
  );
}
