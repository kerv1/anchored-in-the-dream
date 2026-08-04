import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const BELIEVING_FOR = [
  "Fresh fire",
  "Intimacy with God",
  "Greater unity",
  "Joy in serving",
  "Worship as a lifestyle",
  "Alignment with the vision of the house",
  "Presence over performance",
  "Progress over perfection",
];

const GUIDELINES = [
  "Fast each Wednesday in August",
  "Fast from sunrise to sunset, or from 6:00 AM to 6:00 PM",
  "Water is allowed and encouraged",
  "Anyone with medical, dietary, pregnancy, medication, or health needs should use wisdom and adapt the fast",
  "A modified fast is still meaningful",
  "Do not compare your fast with anyone else’s",
  "The goal is not deprivation for its own sake",
  "Use the space created by fasting for prayer, worship, Scripture, reflection, and connection",
];

const STEPS = [
  "Read the assigned Scriptures",
  "Read the devotional slowly",
  "Sit with the reflection questions",
  "Pray the written prayer",
  "Complete the practical challenge",
  "Mark the day complete",
  "Carry the main sentence with you",
];

export function GuidePage() {
  return (
    <article className="mx-auto max-w-3xl">
      <header className="mb-12">
        <p className="label-gold">Fast Guide</p>
        <h1 className="type-chapter mt-4 text-cream">Before We Begin</h1>
      </header>

      <div className="reading-canvas rounded-sm px-5 py-10 text-charcoal sm:px-8 dark:text-cream">
        <div className="space-y-5 text-reading">
          <p>
            This month is not about proving how spiritual we are. It is about
            making intentional room for God.
          </p>
          <p>
            We are fasting because we want fresh fire, deeper unity, and clearer
            alignment with the purpose God has given this team. Before we prepare
            another song, arrangement, transition, or service, we want to make
            sure our hearts remain anchored.
          </p>
          <p>
            Our goal is not perfection. Our goal is progress. We are asking God to
            deepen our intimacy with Him, strengthen our relationships with one
            another, and shape us into worshipers whose private lives can sustain
            our public ministry.
          </p>
        </div>

        <Section number="01" title="Why We Are Fasting">
          <p className="mb-4 text-reading">We are believing God for:</p>
          <ul className="space-y-3">
            {BELIEVING_FOR.map((item) => (
              <li key={item} className="flex gap-3 text-reading">
                <span className="mt-2 h-px w-4 shrink-0 bg-gold" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section number="02" title="What We Are Believing For">
          <p className="text-reading">
            Fresh fire. Intimacy. Unity. Joy. Worship as a lifestyle. Alignment
            with the house. Presence over performance. Progress over perfection.
          </p>
        </Section>

        <Section number="03" title="How to Participate">
          <ul className="space-y-3">
            {GUIDELINES.map((item) => (
              <li key={item} className="flex gap-3 text-reading">
                <span className="mt-2 h-px w-4 shrink-0 bg-dream-blue dark:bg-soft-gold" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 bg-pale px-5 py-5 text-sm leading-relaxed text-charcoal dark:bg-[#0a203c] dark:text-cream/85">
            Anyone with medical, dietary, pregnancy, medication, or health needs
            should use wisdom and adapt the fast. A modified fast is still
            meaningful. Do not compare your fast with anyone else’s.
          </div>
        </Section>

        <Section number="04" title="How to Use Each Wednesday">
          <ol className="space-y-4">
            {STEPS.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="font-display text-xl text-gold" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="pt-1 text-reading">{step}</span>
              </li>
            ))}
          </ol>
        </Section>
      </div>

      <section className="mt-10 px-2 py-14 text-center">
        <p className="type-quote text-soft-gold">
          Do not rush through this.
          <br />
          Let God meet you in it.
        </p>
        <Link to="/day/august-5" className="btn-primary mt-10">
          Begin Week 1
        </Link>
      </section>
    </article>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-14">
      <div className="flex items-baseline gap-4">
        <span className="font-display text-3xl text-gold/50">{number}</span>
        <h2 className="type-section text-charcoal dark:text-cream">{title}</h2>
      </div>
      <div className="gold-rule-solid mt-4 w-16" />
      <div className="mt-6">{children}</div>
    </section>
  );
}
