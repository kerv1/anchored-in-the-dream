interface CarryQuoteProps {
  quote: string;
  variant?: "feature" | "carry";
  chapterNumber?: string;
}

export function CarryQuote({
  quote,
  variant = "feature",
  chapterNumber,
}: CarryQuoteProps) {
  if (variant === "carry") {
    return (
      <section className="relative flex min-h-full flex-col justify-center bg-navy px-6 py-12 text-center text-cream sm:px-10">
        <div className="gold-rule mx-auto mb-10 w-24" />
        {chapterNumber && (
          <p className="label-gold mb-6">{chapterNumber}</p>
        )}
        <h2 className="label-gold mb-8">Carry This With You</h2>
        <blockquote className="type-quote mx-auto max-w-3xl text-cream">
          {quote}
        </blockquote>
        <div className="gold-rule mx-auto mt-10 w-24" />
      </section>
    );
  }

  return (
    <section className="relative flex min-h-full flex-col justify-center bg-navy px-6 py-14 text-center text-cream sm:px-12">
      <div className="gold-rule mx-auto mb-10 w-20" />
      <blockquote className="type-quote mx-auto max-w-3xl text-cream">
        {quote}
      </blockquote>
      <div className="gold-rule mx-auto mt-10 w-20" />
    </section>
  );
}
