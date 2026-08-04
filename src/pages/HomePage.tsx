import { Link } from "react-router-dom";
import { devotionals } from "../data/devotionals";
import { useProgress } from "../hooks/useProgress";
import { EditorialHero } from "../components/EditorialHero";
import { ChapterTimeline } from "../components/ChapterTimeline";
import { CommissioningCard } from "../components/CommissioningCard";

export function HomePage() {
  const {
    completedCount,
    totalCount,
    allComplete,
    nextDevotional,
    isComplete,
    getDayStatus,
    previewAll,
  } = useProgress();

  const ctaLabel =
    completedCount === 0
      ? "Begin the Journey"
      : allComplete
        ? "Review the Journey"
        : "Continue the Journey";

  const ctaHref = nextDevotional
    ? `/day/${nextDevotional.slug}`
    : "/day/august-5";

  return (
    <div>
      <EditorialHero
        completedCount={completedCount}
        totalCount={totalCount}
        ctaLabel={ctaLabel}
        ctaHref={ctaHref}
      />

      {allComplete && (
        <div className="bg-navy px-5 pb-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-5xl">
            <CommissioningCard />
          </div>
        </div>
      )}

      <ChapterTimeline
        items={devotionals.map((day, index) => {
          const status = getDayStatus(day.slug);
          const current =
            nextDevotional?.slug === day.slug || status === "today";
          return {
            devotional: day,
            index,
            complete: isComplete(day.slug),
            status,
            current,
            previewAll,
          };
        })}
      />

      <div className="border-t border-shell bg-navy px-5 py-12 text-center sm:px-8">
        <Link to="/guide" className="btn-text text-soft-gold">
          Before you begin, read the Fast Guide →
        </Link>
      </div>
    </div>
  );
}
