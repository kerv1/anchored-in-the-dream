import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Devotional } from "../data/devotionals";
import { devotionals } from "../data/devotionals";
import { AbstractWeekArtwork } from "./AbstractWeekArtwork";
import { ScriptureSection } from "./ScriptureSection";
import { ConsiderSection } from "./ConsiderSection";
import { CarryQuote } from "./CarryQuote";
import { ReflectionCard } from "./ReflectionCard";
import { PrayerCard } from "./PrayerCard";
import { LiveItCard } from "./LiveItCard";
import { CompletionButton } from "./CompletionButton";
import { JournalTextarea } from "./JournalTextarea";
import { FocusModeToggle } from "./FocusModeToggle";
import { ReadingProgressRail } from "./ReadingProgressRail";
import { useLocalStorage } from "../hooks/useLocalStorage";

const STEPS = [
  { id: "begin", label: "Begin" },
  { id: "read", label: "Read" },
  { id: "consider", label: "Consider" },
  { id: "quote", label: "Featured" },
  { id: "reflect", label: "Pause" },
  { id: "pray", label: "Pray" },
  { id: "live-it", label: "Live It" },
  { id: "carry", label: "Carry" },
  { id: "finish", label: "Finish" },
] as const;

interface DevotionalFlowProps {
  devotional: Devotional;
  dayIndex: number;
  complete: boolean;
  noteValue: string;
  onNoteChange: (value: string) => void;
  onComplete: () => void;
  onUndo: () => void;
}

export function DevotionalFlow({
  devotional,
  dayIndex,
  complete,
  noteValue,
  onNoteChange,
  onComplete,
  onUndo,
}: DevotionalFlowProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepByDay, setStepByDay] = useLocalStorage<Record<string, number>>(
    "anchored:devotionalStep",
    {},
  );
  const labelId = useId();
  const restoredRef = useRef(false);
  const chapterNumber = String(dayIndex + 1).padStart(2, "0");

  const prevDay = dayIndex > 0 ? devotionals[dayIndex - 1] : null;
  const nextDay =
    dayIndex < devotionals.length - 1 ? devotionals[dayIndex + 1] : null;
  const isLastStep = activeIndex >= STEPS.length - 1;
  const isCover = activeIndex === 0;
  const activeStep = STEPS[activeIndex]!;

  const goTo = useCallback(
    (index: number) => {
      const el = scrollerRef.current;
      if (!el) return;
      const clamped = Math.max(0, Math.min(STEPS.length - 1, index));
      el.scrollTo({ left: el.clientWidth * clamped, behavior: "smooth" });
      setActiveIndex(clamped);
    },
    [],
  );

  const goNext = useCallback(() => {
    if (activeIndex < STEPS.length - 1) goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    if (activeIndex > 0) goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    restoredRef.current = false;
  }, [devotional.slug]);

  useEffect(() => {
    if (restoredRef.current) return;
    const saved = stepByDay[devotional.slug] ?? 0;
    const el = scrollerRef.current;
    if (!el) return;
    restoredRef.current = true;
    const clamped = Math.max(0, Math.min(STEPS.length - 1, saved));
    el.scrollTo({ left: el.clientWidth * clamped, behavior: "auto" });
    setActiveIndex(clamped);
  }, [devotional.slug, stepByDay]);

  useEffect(() => {
    setStepByDay((prev) => {
      if (prev[devotional.slug] === activeIndex) return prev;
      return { ...prev, [devotional.slug]: activeIndex };
    });
  }, [activeIndex, devotional.slug, setStepByDay]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const width = el.clientWidth || 1;
        const index = Math.round(el.scrollLeft / width);
        setActiveIndex(Math.max(0, Math.min(STEPS.length - 1, index)));
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "TEXTAREA" || tag === "INPUT") return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  return (
    <div className="relative mx-auto flex h-full min-h-0 w-full max-w-5xl flex-col">
      {!isCover && (
        <ReadingProgressRail activeIndex={activeIndex} onSelect={goTo} />
      )}

      <div
        className={`mb-2 flex items-center justify-between gap-2 px-4 pt-3 sm:px-6 ${
          isCover ? "absolute inset-x-0 top-0 z-20" : ""
        }`}
      >
        <div className="min-w-0">
          {!isCover && (
            <>
              <p className="label-gold truncate">
                {devotional.weekLabel} · {chapterNumber}
              </p>
              <p id={labelId} className="truncate text-sm text-cream/55">
                {activeStep.label}
                <span className="text-cream/35">
                  {" "}
                  · {activeIndex + 1} of {STEPS.length}
                </span>
              </p>
            </>
          )}
        </div>
        <FocusModeToggle />
      </div>

      <div
        ref={scrollerRef}
        className="devotional-scroller flex min-h-0 flex-1 snap-x snap-mandatory overflow-x-auto overflow-y-hidden"
        tabIndex={0}
        aria-roledescription="carousel"
        aria-label={`${devotional.title} steps`}
        aria-labelledby={labelId}
      >
        <StepPanel tone="shell">
          <DevotionalCover
            devotional={devotional}
            chapterNumber={chapterNumber}
            onEnter={goNext}
          />
        </StepPanel>
        <StepPanel tone="canvas">
          <ScriptureSection passages={devotional.scriptures} />
        </StepPanel>
        <StepPanel tone="canvas">
          <ConsiderSection paragraphs={devotional.consider} />
        </StepPanel>
        <StepPanel tone="shell">
          <CarryQuote quote={devotional.pullQuote} />
        </StepPanel>
        <StepPanel tone="pale">
          <ReflectionCard questions={devotional.reflectionQuestions} />
        </StepPanel>
        <StepPanel tone="canvas">
          <PrayerCard prayer={devotional.prayer} />
        </StepPanel>
        <StepPanel tone="action">
          <LiveItCard steps={devotional.liveIt} />
        </StepPanel>
        <StepPanel tone="shell">
          <CarryQuote
            quote={devotional.carryThis}
            variant="carry"
            chapterNumber={chapterNumber}
          />
        </StepPanel>
        <StepPanel tone="shell">
          <FinishStep
            slug={devotional.slug}
            complete={complete}
            noteValue={noteValue}
            onNoteChange={onNoteChange}
            prevDay={prevDay}
            nextDay={nextDay}
          />
        </StepPanel>
      </div>

      <div
        className="flex items-center gap-2 border-t border-shell bg-navy/95 px-4 py-3 backdrop-blur-md"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <button
          type="button"
          onClick={goPrev}
          disabled={activeIndex === 0}
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-shell text-cream transition enabled:hover:border-gold/50 disabled:opacity-30"
          aria-label="Previous step"
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>

        {isLastStep ? (
          <div className="min-w-0 flex-1">
            <CompletionButton
              complete={complete}
              onComplete={onComplete}
              onUndo={onUndo}
            />
          </div>
        ) : (
          <button type="button" onClick={goNext} className="btn-primary flex-1">
            {isCover ? "Enter the Devotional" : "Continue"}
            <ChevronRight size={16} aria-hidden="true" />
          </button>
        )}

        <button
          type="button"
          onClick={goNext}
          disabled={isLastStep}
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-shell text-cream transition enabled:hover:border-gold/50 disabled:opacity-30"
          aria-label="Next step"
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

function StepPanel({
  children,
  tone,
}: {
  children: ReactNode;
  tone: "shell" | "canvas" | "pale" | "action";
}) {
  const toneClass =
    tone === "canvas"
      ? "bg-canvas"
      : tone === "pale"
        ? "bg-pale dark:bg-[#0a203c]"
        : tone === "action"
          ? "bg-royal dark:bg-dream-blue"
          : "bg-navy";

  return (
    <section
      className={`box-border h-full min-h-0 shrink-0 grow-0 basis-full snap-center snap-always overflow-y-auto overscroll-y-contain ${toneClass}`}
      aria-roledescription="slide"
    >
      {children}
    </section>
  );
}

function DevotionalCover({
  devotional,
  chapterNumber,
  onEnter,
}: {
  devotional: Devotional;
  chapterNumber: string;
  onEnter: () => void;
}) {
  const titleLines = splitTitle(devotional.title);

  return (
    <div className="relative flex min-h-full flex-col justify-between overflow-hidden px-6 py-10 text-cream sm:px-10">
      <div className="pointer-events-none absolute inset-0 text-soft-gold/30">
        <AbstractWeekArtwork
          theme={devotional.theme}
          variant="cover"
          className="h-full w-full opacity-60"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-navy/40 via-navy/70 to-navy"
        aria-hidden="true"
      />

      <div className="relative z-10 pt-10">
        <p className="label-gold">
          Wednesday · {devotional.displayDate.replace("Wednesday, ", "").replace(", 2026", "")}
        </p>
        <p className="mt-8 font-display text-6xl font-semibold text-gold/50 sm:text-7xl">
          {chapterNumber}
        </p>
        <h1 className="type-chapter mt-4 text-cream">
          {titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-8 max-w-xl font-display text-xl italic leading-relaxed text-soft-gold/90 sm:text-2xl">
          {devotional.meditation}
        </p>
        <div className="gold-rule-solid mt-8 w-16" />
        <ul className="mt-6 space-y-1">
          {devotional.scriptures.map((s) => (
            <li key={s.reference} className="text-sm text-cream/65">
              {s.reference}
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={onEnter}
        className="relative z-10 mt-12 self-start text-sm font-semibold uppercase tracking-[0.16em] text-soft-gold"
      >
        Enter the devotional ↓
      </button>
    </div>
  );
}

function splitTitle(title: string): string[] {
  const known: Record<string, string[]> = {
    "Fresh Fire Starts in Secret": ["Fresh Fire", "Starts in Secret"],
    "One Sound Begins with One Heart": ["One Sound Begins", "with One Heart"],
    "Presence Is the Pursuit": ["Presence Is", "the Pursuit"],
    "Anchored in the Dream": ["Anchored in", "the Dream"],
  };
  return known[title] ?? [title];
}

function FinishStep({
  slug,
  complete,
  noteValue,
  onNoteChange,
  prevDay,
  nextDay,
}: {
  slug: string;
  complete: boolean;
  noteValue: string;
  onNoteChange: (value: string) => void;
  prevDay: Devotional | null | undefined;
  nextDay: Devotional | null | undefined;
}) {
  return (
    <div className="mx-auto max-w-[42rem] px-5 py-10 text-cream sm:px-8">
      <p className="label-gold">Finish</p>
      <h2 className="type-section mt-4 text-cream">Finish this Wednesday</h2>
      <p className="mt-3 text-cream/65">
        Mark the day complete below, then capture anything God stirred in you.
      </p>
      {complete && (
        <p className="mt-4 font-display text-xl text-soft-gold" role="status">
          Carry this with you.
        </p>
      )}

      <div className="mt-8">
        <JournalTextarea
          id={`note-${slug}`}
          label="Personal note"
          value={noteValue}
          onChange={onNoteChange}
          placeholder="What is God stirring in you today?"
          rows={5}
        />
        <p className="mt-2 text-xs text-cream/45">
          Saved privately on this device.
        </p>
      </div>

      <nav
        className="mt-10 flex items-center justify-between gap-3"
        aria-label="Day navigation"
      >
        {prevDay ? (
          <Link to={`/day/${prevDay.slug}`} className="btn-text text-soft-gold">
            ← Previous day
          </Link>
        ) : (
          <span />
        )}
        {nextDay ? (
          <Link to={`/day/${nextDay.slug}`} className="btn-text text-soft-gold">
            Next day →
          </Link>
        ) : (
          <Link to="/" className="btn-text text-soft-gold">
            Home →
          </Link>
        )}
      </nav>
    </div>
  );
}
