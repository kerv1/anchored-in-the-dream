const ANCHORS = [
  { label: "Music", text: "We are a ministry of music and creativity, but our music is not the anchor." },
  { label: "Joy", text: "Its older history also carries associations with music, joy, celebration, and sound." },
  { label: "Hope", text: "Our sound becomes one of the ways we help people encounter that hope." },
  { label: "Christ", text: "Hebrews describes our hope in Him as a strong and trustworthy anchor for the soul. Christ is." },
];

const REMAIN = [
  "Anchored in Christ",
  "Anchored in the purpose of the house",
  "Anchored in relationship with one another",
  "Anchored in presence over performance",
  "Anchored in progress over perfection",
  "Anchored in the hope our music points toward",
];

export function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl">
      <header className="mb-10">
        <p className="label-gold">About</p>
        <h1 className="type-chapter mt-4 text-cream">
          <span className="block">What Does</span>
          <span className="block text-soft-gold">“Anchored in the Dream”</span>
          <span className="block">Mean?</span>
        </h1>
      </header>

      <div className="reading-canvas rounded-sm px-5 py-10 sm:px-8">
        <div className="space-y-5 text-reading text-charcoal dark:text-cream/90">
          <p>
            The word dream now usually makes us think about vision, aspiration, or
            something we hope to become.
          </p>
          <p>
            Its older history also carries associations with music, joy,
            celebration, and sound.
          </p>
          <p>That is a powerful picture for this team.</p>
        </div>

        <div className="mt-12 space-y-10">
          {ANCHORS.map((item) => (
            <div key={item.label}>
              <p className="label-gold">{item.label}</p>
              <p className="mt-3 font-display text-2xl leading-snug text-charcoal dark:text-cream">
                {item.text}
              </p>
              <div className="gold-rule mt-6" />
            </div>
          ))}
        </div>

        <p className="mt-12 text-reading text-charcoal dark:text-cream/90">
          To live anchored in the Dream is to remain:
        </p>
        <ul className="mt-6 space-y-3">
          {REMAIN.map((item) => (
            <li key={item} className="flex gap-3 text-charcoal dark:text-cream">
              <span className="mt-2 h-px w-4 shrink-0 bg-gold" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <section className="mt-10 bg-navy px-6 py-16 text-center sm:px-10">
        <div className="gold-rule mx-auto mb-8 w-20" />
        <p className="type-quote text-cream">
          May our music always be anchored in our hope, and may our hope always be
          anchored in Christ.
        </p>
        <div className="gold-rule mx-auto mt-8 w-20" />
      </section>
    </article>
  );
}
