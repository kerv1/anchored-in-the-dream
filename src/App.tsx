import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./hooks/useTheme";
import { ProgressProvider } from "./hooks/useProgress";
import { AppShell } from "./layouts/AppShell";
import { HomePage } from "./pages/HomePage";
import { GuidePage } from "./pages/GuidePage";
import { DevotionalPage } from "./pages/DevotionalPage";
import { JournalPage } from "./pages/JournalPage";
import { AboutPage } from "./pages/AboutPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <ThemeProvider>
      <ProgressProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppShell />}>
              <Route index element={<HomePage />} />
              <Route path="guide" element={<GuidePage />} />
              <Route path="day/:slug" element={<DevotionalPage />} />
              <Route path="journal" element={<JournalPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="plan" element={<Navigate to="/guide" replace />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProgressProvider>
    </ThemeProvider>
  );
}
