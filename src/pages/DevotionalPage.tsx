import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import {
  getDevotionalBySlug,
  getDevotionalIndex,
} from "../data/devotionals";
import { useProgress } from "../hooks/useProgress";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { createEmptyJournal, STORAGE_KEYS } from "../utils/helpers";
import type { JournalNotes } from "../utils/types";
import { DevotionalFlow } from "../components/DevotionalFlow";

export function DevotionalPage() {
  const { slug = "" } = useParams();
  const devotional = getDevotionalBySlug(slug);
  const index = getDevotionalIndex(slug);
  const {
    isComplete,
    markComplete,
    unmarkComplete,
    setLastVisited,
  } = useProgress();
  const [journal, setJournal] = useLocalStorage<JournalNotes>(
    STORAGE_KEYS.journal,
    createEmptyJournal(),
  );

  useEffect(() => {
    if (devotional) {
      setLastVisited(devotional.slug);
      window.scrollTo(0, 0);
    }
  }, [devotional, setLastVisited]);

  if (!devotional) {
    return <Navigate to="/" replace />;
  }

  const complete = isComplete(devotional.slug);
  const noteValue = journal.days[devotional.slug] ?? "";

  return (
    <DevotionalFlow
      devotional={devotional}
      dayIndex={index}
      complete={complete}
      noteValue={noteValue}
      onNoteChange={(value) =>
        setJournal((prev) => ({
          ...prev,
          days: { ...prev.days, [devotional.slug]: value },
        }))
      }
      onComplete={() => markComplete(devotional.slug)}
      onUndo={() => unmarkComplete(devotional.slug)}
    />
  );
}
