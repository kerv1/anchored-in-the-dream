import { Sparkles } from "lucide-react";

interface LiveItCardProps {
  steps: string[];
}

export function LiveItCard({ steps }: LiveItCardProps) {
  return (
    <section className="min-h-full bg-royal px-5 py-10 text-cream sm:px-8 dark:bg-dream-blue">
      <div className="mx-auto max-w-[42rem]">
        <div className="flex items-center gap-3">
          <Sparkles className="text-soft-gold" size={20} aria-hidden="true" />
          <p className="label-gold !text-soft-gold">Live It</p>
        </div>
        <h2 className="type-section mt-4 text-cream">Your invitation today</h2>
        <div className="mt-5 h-px w-16 bg-soft-gold/60" />

        <div className="mt-8 space-y-4 text-reading text-cream/95">
          {steps.map((step, index) => (
            <p key={index}>{step}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
