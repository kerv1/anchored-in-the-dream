import { useState } from "react";
import { Download, Trash2 } from "lucide-react";
import { devotionals } from "../data/devotionals";
import { useLocalStorage } from "../hooks/useLocalStorage";
import {
  JOURNAL_PROMPTS,
  STORAGE_KEYS,
  createEmptyJournal,
  downloadTextFile,
} from "../utils/helpers";
import type { JournalNotes } from "../utils/types";
import { JournalTextarea } from "../components/JournalTextarea";
import { ConfirmModal } from "../components/ConfirmModal";

export function JournalPage() {
  const [journal, setJournal] = useLocalStorage<JournalNotes>(
    STORAGE_KEYS.journal,
    createEmptyJournal(),
  );
  const [confirmOpen, setConfirmOpen] = useState(false);

  const exportNotes = () => {
    const lines: string[] = [
      "Anchored in the Dream — Journal",
      "DreamLife Dallas Worship & Arts",
      "================================",
      "",
      "Monthly Reflection",
      "------------------",
      journal.monthly || "(empty)",
      "",
    ];

    for (const day of devotionals) {
      lines.push(day.displayDate);
      lines.push(day.title);
      lines.push("-".repeat(day.title.length));
      lines.push(journal.days[day.slug] || "(empty)");
      lines.push("");
    }

    downloadTextFile("anchored-in-the-dream-journal.txt", lines.join("\n"));
  };

  const clearAll = () => {
    setJournal(createEmptyJournal());
    setConfirmOpen(false);
  };

  return (
    <div className="mx-auto max-w-3xl">
      <header className="mb-8">
        <p className="label-gold">Private Journal</p>
        <h1 className="type-chapter mt-4 text-cream">Reflections</h1>
        <p className="mt-3 text-cream/60">
          Your notes are stored only on this device unless you export them.
        </p>
      </header>

      <div className="reading-canvas rounded-sm px-5 py-10 sm:px-8">
        <div className="mb-10">
          <p className="label-gold">Prompts</p>
          <ul className="mt-4 space-y-2 text-charcoal dark:text-cream/85">
            {JOURNAL_PROMPTS.map((prompt) => (
              <li key={prompt} className="text-reading">
                {prompt}
              </li>
            ))}
          </ul>
        </div>

        <JournalTextarea
          id="monthly-reflection"
          label="Monthly reflection"
          value={journal.monthly}
          onChange={(value) =>
            setJournal((prev) => ({ ...prev, monthly: value }))
          }
          placeholder="What is God doing across this August fast?"
          rows={6}
          tone="canvas"
        />

        <div className="mt-14 space-y-12">
          {devotionals.map((day, index) => (
            <div key={day.slug} className="relative pl-6">
              <span
                className="absolute left-0 top-1 h-full w-px bg-gold/30"
                aria-hidden="true"
              />
              <span className="absolute -left-1.5 top-2 h-3 w-3 rounded-full border border-gold bg-canvas" />
              <p className="label-gold">
                {String(index + 1).padStart(2, "0")} ·{" "}
                {day.displayDate.replace("Wednesday, ", "").replace(", 2026", "")}
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-charcoal dark:text-cream">
                {day.title}
              </h2>
              <div className="mt-4">
                <JournalTextarea
                  id={`journal-${day.slug}`}
                  label="Entry"
                  value={journal.days[day.slug] ?? ""}
                  onChange={(value) =>
                    setJournal((prev) => ({
                      ...prev,
                      days: { ...prev.days, [day.slug]: value },
                    }))
                  }
                  placeholder="Capture what God is saying…"
                  rows={4}
                  tone="canvas"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={exportNotes}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-shell px-5 text-sm font-semibold text-cream hover:border-gold/50"
        >
          <Download size={16} aria-hidden="true" />
          Export notes
        </button>
        <button
          type="button"
          onClick={() => setConfirmOpen(true)}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-red-400/30 px-5 text-sm font-semibold text-red-300"
        >
          <Trash2 size={16} aria-hidden="true" />
          Clear all notes
        </button>
      </div>

      <ConfirmModal
        open={confirmOpen}
        title="Clear all notes?"
        description="This will permanently remove your monthly reflection and all day notes from this device. Exported files are not affected."
        confirmLabel="Clear notes"
        tone="danger"
        onConfirm={clearAll}
        onCancel={() => setConfirmOpen(false)}
      />
    </div>
  );
}
