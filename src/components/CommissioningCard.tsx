import { Link } from "react-router-dom";

interface CommissioningCardProps {
  reviewHref?: string;
}

export function CommissioningCard({
  reviewHref = "/day/august-5",
}: CommissioningCardProps) {
  return (
    <section className="border border-gold/30 bg-dream-blue/30 px-6 py-10 text-cream sm:px-10">
      <p className="label-gold">Journey complete</p>
      <h2 className="type-section mt-4 text-cream">Continue Living Anchored</h2>
      <p className="mt-4 max-w-xl text-cream/80">
        The fast may be complete, but the work continues.
      </p>
      <ul className="mt-6 space-y-2 text-cream/85">
        <li>Protect the secret place.</li>
        <li>Choose your teammates.</li>
        <li>Offer God your best.</li>
        <li>Carry hope into every room.</li>
      </ul>
      <p className="mt-6 font-display text-2xl text-soft-gold">Stay anchored.</p>
      <Link to={reviewHref} className="btn-primary mt-8">
        Review the Journey
      </Link>
    </section>
  );
}
