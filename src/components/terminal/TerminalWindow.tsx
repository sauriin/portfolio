import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useTerminalCommands } from "../../hooks/useTerminalCommands";
import { useTerminalStore } from "../../store/terminalStore";

export function TerminalWindow() {
  const windowRef = useRef<HTMLDivElement | null>(null);
  const outputRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [value, setValue] = useState("");
  const lines = useTerminalStore((state) => state.lines);
  const closeTerminal = useTerminalStore((state) => state.closeTerminal);
  const commandHistory = useTerminalStore((state) => state.commandHistory);
  const historyIndex = useTerminalStore((state) => state.historyIndex);
  const setHistoryIndex = useTerminalStore((state) => state.setHistoryIndex);
  const { execute, autocomplete } = useTerminalCommands();

  useEffect(() => {
    if (!windowRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        windowRef.current,
        { y: 34, scale: 0.96, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 0.46, ease: "power3.out" },
      );
    }, windowRef);

    inputRef.current?.focus();
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!outputRef.current) return;
    outputRef.current.scrollTop = outputRef.current.scrollHeight;
  }, [lines]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    execute(value);
    setValue("");
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Tab") {
      event.preventDefault();
      setValue(autocomplete(value));
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      const nextIndex = Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setValue(commandHistory[nextIndex] ?? "");
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      const nextIndex = Math.min(commandHistory.length, historyIndex + 1);
      setHistoryIndex(nextIndex);
      setValue(commandHistory[nextIndex] ?? "");
    }

    if (event.key === "Escape") {
      closeTerminal();
    }
  }

  return (
    <div className="fixed inset-x-3 bottom-20 z-50 mx-auto max-w-6xl md:inset-x-8 md:bottom-24">
      <div ref={windowRef} className="glass-panel terminal-scanline relative overflow-hidden rounded-[1.5rem] h-[75vh] flex flex-col mt-4">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
            <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-chronicle-muted">Chronicle Terminal</p>
          <button
            type="button"
            onClick={closeTerminal}
            className="font-mono text-xs uppercase tracking-[0.2em] text-white/70 transition hover:text-chronicle-primary"
          >
            Close
          </button>
        </div>

        <div ref={outputRef} className="max-h-[80vh] overflow-y-auto px-5 py-5 font-mono text-sm leading-7 md:px-7">
          {lines.map((line) => {
            const className =
              line.variant === "input"
                ? "text-chronicle-primary"
                : line.variant === "error"
                  ? "text-red-300"
                  : line.variant === "system"
                    ? "text-white"
                    : "text-chronicle-muted";

            if (line.variant === "link" && line.href) {
              return (
                <a
                  key={line.id}
                  href={line.href}
                  target={line.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="block text-chronicle-primary underline-offset-4 hover:underline"
                >
                  {line.text}
                </a>
              );
            }

            return (
              <p key={line.id} className={className}>
                {line.text}
              </p>
            );
          })}
        </div>

        <form onSubmit={onSubmit} className="flex items-center gap-3 border-t border-white/10 px-5 py-4 font-mono md:px-7">
          <label htmlFor="chronicle-command" className="shrink-0 text-chronicle-primary">
            chronicle-os$
          </label>
          <input
            ref={inputRef}
            id="chronicle-command"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={onKeyDown}
            className="min-w-0 flex-1 bg-transparent text-white outline-none placeholder:text-chronicle-muted"
            placeholder="type help"
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  );
}
