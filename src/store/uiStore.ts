import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type UiState = {
  isResumeOpen: boolean;
  modalState: "idle" | "chronicle" | "resume";
  navigationState: "landing" | "archive";
  overlays: {
    terminal: boolean;
    dataCurrents: boolean;
  };
  openResume: () => void;
  closeResume: () => void;
  setNavigationState: (state: UiState["navigationState"]) => void;
  setOverlay: (key: keyof UiState["overlays"], value: boolean) => void;
};

export const useUiStore = create<UiState>()(
  immer((set) => ({
    isResumeOpen: false,
    modalState: "idle",
    navigationState: "landing",
    overlays: {
      terminal: false,
      dataCurrents: true,
    },
    openResume: () =>
      set((state) => {
        state.isResumeOpen = true;
        state.modalState = "resume";
      }),
    closeResume: () =>
      set((state) => {
        state.isResumeOpen = false;
        state.modalState = "idle";
      }),
    setNavigationState: (navigationState) =>
      set((state) => {
        state.navigationState = navigationState;
      }),
    setOverlay: (key, value) =>
      set((state) => {
        state.overlays[key] = value;
      }),
  })),
);
