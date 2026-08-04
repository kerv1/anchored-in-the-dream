interface ConsiderSectionProps {
  paragraphs: string[];
  pullQuote?: string;
}

export function ConsiderSection({ paragraphs, pullQuote }: ConsiderSectionProps) {
  // Emphasize one mid-length sentence if no separate pull is shown in-flow
  const mid = Math.floor(paragraphs.length / 2);
  const emphasizeIndex = paragraphs.findIndex(
    (p, i) => i >= mid - 1 && i <= mid + 1 && p.length > 40 && p.length < 120,
  );

  return (
    <section className="reading-canvas px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-[42rem]">
        <p className="label-gold">Consider</p>
        <div className="gold-rule-solid mt-4 w-16" />

        <div className="relative mt-8">
          <span
            className="pointer-events-none absolute -left-1 -top-6 font-display text-[5.5rem] leading-none text-gold/20 select-none sm:-left-4 sm:text-[7rem]"
            aria-hidden="true"
          >
            “
          </span>

          <div className="space-y-5 text-reading text-charcoal dark:text-cream/90">
            {paragraphs.map((paragraph, index) => {
              const emphasize = index === emphasizeIndex && !pullQuote;
              if (emphasize) {
                return (
                  <p
                    key={index}
                    className="border-l-2 border-gold pl-4 font-display text-xl leading-snug text-dream-blue dark:text-soft-gold sm:text-2xl"
                  >
                    {paragraph}
                  </p>
                );
              }
              return <p key={index}>{paragraph}</p>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
