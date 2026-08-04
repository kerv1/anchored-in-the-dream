interface ReflectionCardProps {
  questions: string[];
}

export function ReflectionCard({ questions }: ReflectionCardProps) {
  return (
    <section className="relative min-h-full overflow-hidden bg-pale px-5 py-10 text-charcoal sm:px-8 dark:bg-[#0a203c] dark:text-cream">
      <span
        className="pointer-events-none absolute -right-4 top-6 font-display text-[10rem] leading-none text-dream-blue/10 select-none dark:text-soft-gold/10"
        aria-hidden="true"
      >
        ?
      </span>
      <div className="relative mx-auto max-w-[42rem]">
        <p className="label-gold">Pause & Consider</p>
        <h2 className="type-section mt-4 text-charcoal dark:text-cream">
          Sit with these questions
        </h2>
        <div className="gold-rule-solid mt-5 w-16" />

        <ol className="mt-10 space-y-8">
          {questions.map((question, index) => (
            <li key={index} className="flex gap-4">
              <span className="font-display text-2xl text-gold" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="pt-1 text-reading">{question}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
