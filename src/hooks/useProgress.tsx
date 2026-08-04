import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import { devotionals } from "../data/devotionals";
import { useLocalStorage } from "./useLocalStorage";

type DayStatus = "complete" | "today" | "available" | "upcoming";

interface ProgressContextValue {
  completed: string[];
  completedCount: number;
  totalCount: number;
  allComplete: boolean;
  isComplete: (slug: string) => boolean;
  markComplete: (slug: string) => void;
  unmarkComplete: (slug: string) => void;
  nextDevotional: (typeof devotionals)[number] | null;
  lastVisited: string | null;
  setLastVisited: (
    value: string | null | ((prev: string | null) => string | null),
  ) => void;
  previewAll: boolean;
  setPreviewAll: (value: boolean | ((prev: boolean) => boolean)) => void;
  getDayStatus: (slug: string) => DayStatus;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [completed, setCompleted] = useLocalStorage<string[]>(
    "anchored:completed",
    [],
  );
  const [lastVisited, setLastVisited] = useLocalStorage<string | null>(
    "anchored:lastVisited",
    null,
  );
  const [previewAll, setPreviewAll] = useLocalStorage<boolean>(
    "anchored:previewAll",
    false,
  );

  const completedSet = useMemo(() => new Set(completed), [completed]);
  const completedCount = completed.length;
  const totalCount = devotionals.length;
  const allComplete = completedCount >= totalCount;

  const isComplete = useCallback(
    (slug: string) => completedSet.has(slug),
    [completedSet],
  );

  const markComplete = useCallback(
    (slug: string) => {
      setCompleted((prev) => (prev.includes(slug) ? prev : [...prev, slug]));
    },
    [setCompleted],
  );

  const unmarkComplete = useCallback(
    (slug: string) => {
      setCompleted((prev) => prev.filter((s) => s !== slug));
    },
    [setCompleted],
  );

  const nextDevotional = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const incomplete = devotionals.filter((d) => !completedSet.has(d.slug));
    if (incomplete.length === 0) return null;

    const pastOrToday = incomplete.filter((d) => {
      const date = new Date(`${d.date}T00:00:00`);
      return date <= today;
    });

    if (pastOrToday.length > 0) {
      return pastOrToday[pastOrToday.length - 1]!;
    }

    return incomplete[0]!;
  }, [completedSet]);

  const getDayStatus = useCallback(
    (slug: string): DayStatus => {
      const day = devotionals.find((d) => d.slug === slug);
      if (!day) return "upcoming";
      if (completedSet.has(slug)) return "complete";

      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const date = new Date(`${day.date}T00:00:00`);

      if (date.getTime() === today.getTime()) return "today";
      if (date < today) return "available";
      return "upcoming";
    },
    [completedSet],
  );

  const value = useMemo(
    () => ({
      completed,
      completedCount,
      totalCount,
      allComplete,
      isComplete,
      markComplete,
      unmarkComplete,
      nextDevotional,
      lastVisited,
      setLastVisited,
      previewAll,
      setPreviewAll,
      getDayStatus,
    }),
    [
      completed,
      completedCount,
      totalCount,
      allComplete,
      isComplete,
      markComplete,
      unmarkComplete,
      nextDevotional,
      lastVisited,
      setLastVisited,
      previewAll,
      setPreviewAll,
      getDayStatus,
    ],
  );

  return (
    <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) {
    throw new Error("useProgress must be used within ProgressProvider");
  }
  return ctx;
}
