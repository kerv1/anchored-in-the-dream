import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";

const SECTIONS = [
  { id: "read", label: "Read" },
  { id: "consider", label: "Consider" },
  { id: "reflect", label: "Reflect" },
  { id: "pray", label: "Pray" },
  { id: "live-it", label: "Live It" },
] as const;

export function DevotionalProgressNav() {
  const [active, setActive] = useState<string>("read");
  const { focusMode } = useTheme();

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      Boolean,
    ) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.3, 0.6],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`sticky z-20 -mx-4 mb-6 border-b border-app bg-app/95 px-4 py-2 backdrop-blur-md sm:-mx-0 sm:rounded-full sm:border sm:px-2 ${
        focusMode ? "top-2" : "top-[4.25rem]"
      }`}
      aria-label="Devotional sections"
    >
      <ol className="mx-auto flex max-w-3xl items-center justify-between gap-1 overflow-x-auto">
        {SECTIONS.map((section) => {
          const isActive = active === section.id;
          return (
            <li key={section.id} className="shrink-0">
              <a
                href={`#${section.id}`}
                className={`block rounded-full px-2.5 py-1.5 text-xs font-medium transition sm:px-3 sm:text-sm ${
                  isActive
                    ? "bg-navy text-cream dark:bg-soft-gold dark:text-navy"
                    : "text-muted-app hover:text-app"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                {section.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
