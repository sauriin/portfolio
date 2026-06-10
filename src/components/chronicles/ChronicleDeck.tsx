import { useEffect, useRef } from "react";
import gsap from "gsap";
import { chronicles } from "../../data/chronicles";
import { useChronicleStore } from "../../store/chronicleStore";
import { PanelHeader } from "../ui/PanelHeader";
import { ChronicleReader } from "./ChronicleReader";

export function ChronicleDeck() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const activeChronicle = useChronicleStore((state) => state.activeChronicle);
  const setActiveChronicle = useChronicleStore((state) => state.setActiveChronicle);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-chronicle]", {
        y: 26,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="chronicles" ref={sectionRef} className="relative z-10 px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <PanelHeader
          eyebrow="Archive"
          title="Chronicles, not project cards."
          description="Each chapter documents a discovery: the problem, the system built around it, and the evidence left behind."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {chronicles.map((chronicle) => (
            <button
              key={chronicle.id}
              data-chronicle
              type="button"
              onClick={() => setActiveChronicle(chronicle.id)}
              className="group glass-panel min-h-[320px] rounded-[1.75rem] p-7 text-left transition duration-300 hover:-translate-y-1 hover:border-chronicle-primary/60 hover:shadow-glow"
            >
              <div className="mb-16 flex items-center justify-between font-mono text-xs uppercase tracking-[0.24em] text-chronicle-muted">
                <span>Chronicle</span>
                <span className="text-chronicle-primary">{chronicle.id}</span>
              </div>
              <h3 className="mb-5 text-3xl font-semibold tracking-[-0.03em]">{chronicle.title}</h3>
              <p className="max-w-xl leading-7 text-chronicle-muted">{chronicle.discoverySummary}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {chronicle.technologyStack.slice(0, 4).map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/80">
                    {tech}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeChronicle ? <ChronicleReader /> : null}
    </section>
  );
}
