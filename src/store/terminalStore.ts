import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type TerminalLine = {
  id: string;
  variant: "input" | "system" | "muted" | "error" | "link";
  text: string;
  href?: string;
};

type TerminalState = {
  isOpen: boolean;
  lines: TerminalLine[];
  commandHistory: string[];
  historyIndex: number;
  openTerminal: () => void;
  closeTerminal: () => void;
  toggleTerminal: () => void;
  pushLine: (line: Omit<TerminalLine, "id">) => void;
  pushLines: (lines: Omit<TerminalLine, "id">[]) => void;
  addCommandToHistory: (command: string) => void;
  setHistoryIndex: (index: number) => void;
  clear: () => void;
};

const createId = () => crypto.randomUUID();

export const useTerminalStore = create<TerminalState>()(
  immer((set) => ({
    isOpen: false,
    lines: [
      {
        id: createId(),
        variant: "system",
        text: "CHRONICLE OS ONLINE. Type help to inspect available commands.",
      },
    ],
    commandHistory: [],
    historyIndex: 0,
    openTerminal: () =>
      set((state) => {
        state.isOpen = true;
      }),
    closeTerminal: () =>
      set((state) => {
        state.isOpen = false;
      }),
    toggleTerminal: () =>
      set((state) => {
        state.isOpen = !state.isOpen;
      }),
    pushLine: (line) =>
      set((state) => {
        state.lines.push({ id: createId(), ...line });
      }),
    pushLines: (lines) =>
      set((state) => {
        lines.forEach((line) => state.lines.push({ id: createId(), ...line }));
      }),
    addCommandToHistory: (command) =>
      set((state) => {
        state.commandHistory.push(command);
        state.historyIndex = state.commandHistory.length;
      }),
    setHistoryIndex: (index) =>
      set((state) => {
        state.historyIndex = index;
      }),
    clear: () =>
      set((state) => {
        state.lines = [];
      }),
  })),
);
