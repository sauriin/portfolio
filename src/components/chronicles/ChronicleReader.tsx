import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { chronicles } from "../../data/chronicles";
import { useChronicleStore } from "../../store/chronicleStore";

export function ChronicleReader() {
  const ref = useRef<HTMLDivElement | null>(null);
  const activeChronicle = useChronicleStore((state) => state.activeChronicle);
  const setActiveChronicle = useChronicleStore((state) => state.setActiveChronicle);
  const chronicle = useMemo(
    () => chronicles.find((item) => item.id === activeChronicle),
    [activeChronicle],
  );

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.32, ease: "power2.out" },
      );
      gsap.from("[data-reader-item]", {
        y: 18,
        opacity: 0,
        duration: 0.58,
        ease: "power3.out",
        stagger: 0.06,
      });
    }, ref);

    return () => ctx.revert();
  }, [activeChronicle]);

  if (!chronicle) return null;

  return (
    <div ref={ref} className="relative w-full h-full overflow-y-auto">
      <article className="mx-auto max-w-6xl rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 md:p-10">
        <div data-reader-item className="mb-6 sm:mb-8 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:pb-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="mb-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.24em] sm:tracking-[0.3em] text-slate-400">
              Digital Archive / Chapter
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-4xl md:text-6xl">{chronicle.title}</h2>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <section data-reader-item className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
            <h3 className="mb-3 sm:mb-4 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.24em] text-blue-600">Discovery Summary</h3>
            <p className="text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9">{chronicle.discoverySummary}</p>
          </section>

          <section data-reader-item className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
            <h3 className="mb-3 sm:mb-4 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.24em] text-blue-600">Problem</h3>
            <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{chronicle.problem}</p>
            <h3 className="mb-3 sm:mb-4 mt-6 sm:mt-8 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.24em] text-blue-600">Solution</h3>
            <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{chronicle.solution}</p>
          </section>

          <section data-reader-item className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
            <h3 className="mb-3 sm:mb-4 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.24em] text-blue-600">Key Findings</h3>
            <div className="grid gap-3 sm:gap-4">
              {chronicle.keyFindings.map((finding) => (
                <p key={finding} className="border-l-2 border-blue-500 pl-3 sm:pl-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  {finding}
                </p>
              ))}
            </div>
          </section>

          <section data-reader-item className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
            <h3 className="mb-3 sm:mb-4 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.24em] text-blue-600">Visual Evidence</h3>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
              {chronicle.visualEvidence.map((evidence) => (
                <div key={evidence} className="min-h-24 sm:min-h-28 rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-3 text-xs text-slate-600 sm:p-4 sm:text-sm">
                  {evidence}
                </div>
              ))}
            </div>
            <a
              href={chronicle.repositoryLink}
              target="_blank"
              rel="noreferrer"
              className="mt-5 sm:mt-6 inline-flex rounded-full bg-blue-600 px-4 py-2.5 sm:px-5 sm:py-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.18em] text-white"
            >
              Repository Link
            </a>
          </section>
        </div>
      </article>
    </div>
  );
}
