import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { ChronicleId } from "../data/chronicles";

type ChronicleState = {
  activeChronicle: ChronicleId | null;
  setActiveChronicle: (id: ChronicleId | null) => void;
};

export const useChronicleStore = create<ChronicleState>()(
  immer((set) => ({
    activeChronicle: null,
    setActiveChronicle: (id) =>
      set((state) => {
        state.activeChronicle = id;
      }),
  })),
);
