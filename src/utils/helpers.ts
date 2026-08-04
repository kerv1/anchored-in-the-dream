import type { JournalNotes } from "./types";

export const JOURNAL_PROMPTS = [
  "What is God saying to me?",
  "What is God growing in me?",
  "What do I need to carry forward?",
  "Who do I need to encourage?",
  "What needs to change before I serve again?",
] as const;

export const STORAGE_KEYS = {
  journal: "anchored:journal",
} as const;

export function createEmptyJournal(): JournalNotes {
  return {
    monthly: "",
    days: {},
  };
}

export function formatComingLabel(displayDate: string): string {
  // "Wednesday, August 12, 2026" -> "Coming August 12"
  const match = displayDate.match(/August\s+\d+/);
  return match ? `Coming ${match[0]}` : "Coming soon";
}

export function downloadTextFile(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
