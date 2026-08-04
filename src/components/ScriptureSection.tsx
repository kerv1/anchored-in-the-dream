import type { ScripturePassage } from "../data/devotionals";
import { SCRIPTURE_TRANSLATION } from "../data/devotionals";

interface ScriptureSectionProps {
  passages: ScripturePassage[];
}

export function ScriptureSection({ passages }: ScriptureSectionProps) {
  return (
    <section className="reading-canvas px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-[46rem]">
        <p className="label-gold">Read</p>
        <div className="gold-rule-solid mt-4 w-16" />

        <div className="mt-10 space-y-12">
          {passages.map((passage) => (
            <article key={passage.reference}>
              <h3 className="font-display text-3xl font-semibold text-charcoal dark:text-cream sm:text-4xl">
                {passage.reference}
              </h3>
              <div className="mt-6 space-y-5 text-reading text-charcoal dark:text-cream/90">
                {passage.verses.map((verse) => (
                  <p key={String(verse.number)} className="leading-relaxed">
                    <sup className="mr-1.5 select-none font-sans text-[0.7rem] font-semibold text-gold">
                      {verse.number}
                    </sup>
                    {verse.text}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-xs text-muted dark:text-cream/45">
          {SCRIPTURE_TRANSLATION}
        </p>
        <p className="mt-2 text-sm text-muted dark:text-cream/55">
          Read slowly before continuing.
        </p>
      </div>
    </section>
  );
}
