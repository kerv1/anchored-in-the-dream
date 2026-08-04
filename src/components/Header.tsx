import { Link, NavLink } from "react-router-dom";
import { SettingsMenu } from "./SettingsMenu";
import { useTheme } from "../hooks/useTheme";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/guide", label: "Plan" },
  { to: "/journal", label: "Journal" },
  { to: "/about", label: "About" },
];

export function Header() {
  const { focusMode } = useTheme();

  if (focusMode) return null;

  return (
    <header className="sticky top-0 z-30 border-b border-shell bg-navy/90 text-cream backdrop-blur-md dark:bg-[#050f1f]/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="min-w-0">
          <span className="block font-display text-lg font-semibold tracking-tight text-cream sm:text-xl">
            Anchored in the Dream
          </span>
          <span className="hidden text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-soft-gold/80 sm:block">
            DreamLife Dallas · Worship & Arts
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-gold/15 text-soft-gold"
                    : "text-cream/70 hover:bg-white/5 hover:text-cream"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <SettingsMenu />
      </div>
    </header>
  );
}
