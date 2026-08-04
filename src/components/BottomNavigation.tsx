import { NavLink } from "react-router-dom";
import { BookOpen, Home, Info, NotebookPen } from "lucide-react";

const links = [
  { to: "/", label: "Home", icon: Home, end: true },
  { to: "/guide", label: "Plan", icon: BookOpen },
  { to: "/journal", label: "Journal", icon: NotebookPen },
  { to: "/about", label: "About", icon: Info },
];

export function BottomNavigation() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-30 border-t border-shell bg-navy/95 text-cream backdrop-blur-md md:hidden dark:bg-[#050f1f]/95"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Primary"
    >
      <ul className="mx-auto grid max-w-lg grid-cols-4">
        {links.map(({ to, label, icon: Icon, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex min-h-14 flex-col items-center justify-center gap-0.5 text-xs font-medium transition ${
                  isActive ? "text-soft-gold" : "text-cream/55 hover:text-cream"
                }`
              }
            >
              <Icon size={20} aria-hidden="true" />
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
