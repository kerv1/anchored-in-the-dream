import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { BottomNavigation } from "../components/BottomNavigation";
import { Footer } from "../components/Footer";
import { useTheme } from "../hooks/useTheme";

export function AppShell() {
  const { focusMode } = useTheme();
  const location = useLocation();
  const isDayPage = location.pathname.startsWith("/day/");
  const isHome = location.pathname === "/";

  return (
    <div
      className={`flex bg-shell text-shell ${
        isDayPage ? "h-dvh overflow-hidden" : "min-h-dvh"
      } flex-col`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>
      <Header />
      <main
        id="main-content"
        className={`mx-auto flex w-full flex-1 flex-col ${
          isDayPage
            ? focusMode
              ? "min-h-0 overflow-hidden"
              : "min-h-0 overflow-hidden pb-[3.75rem] md:pb-0"
            : isHome
              ? focusMode
                ? ""
                : "pb-20 md:pb-0"
              : focusMode
                ? "px-4 pb-8 pt-6 sm:px-6"
                : "px-4 pb-24 pt-8 sm:px-6 md:pb-12"
        }`}
      >
        <Outlet />
      </main>
      {!focusMode && !isDayPage && !isHome && <Footer />}
      {!focusMode && <BottomNavigation />}
    </div>
  );
}
