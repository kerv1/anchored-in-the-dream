import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-20 text-center">
      <p className="label-gold">404</p>
      <h1 className="type-section mt-4 text-cream">Page not found</h1>
      <p className="mt-3 text-cream/60">
        This path isn’t part of the August plan. Head home to continue the
        journey.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </div>
  );
}
