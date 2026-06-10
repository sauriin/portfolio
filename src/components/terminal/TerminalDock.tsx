import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTerminalStore } from "../../store/terminalStore";
import { TerminalWindow } from "./TerminalWindow";

export function TerminalDock() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const isOpen = useTerminalStore((state) => state.isOpen);
  const toggleTerminal = useTerminalStore((state) => state.toggleTerminal);
  const openTerminal = useTerminalStore((state) => state.openTerminal);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        openTerminal();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openTerminal]);

  useEffect(() => {
    if (!buttonRef.current) return;

    gsap.fromTo(
      buttonRef.current,
      { y: 22, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.8, ease: "power3.out" },
    );
  }, []);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={toggleTerminal}
        className="fixed bottom-5 right-5 z-50 rounded-full border border-white/15 bg-[#07111F]/90 px-5 py-4 font-mono text-xs uppercase tracking-[0.2em] text-white shadow-panel backdrop-blur-xl transition hover:border-chronicle-primary hover:text-chronicle-primary md:bottom-8 md:right-8"
      >
        chronicle-os$
      </button>
    </>
  );
}
