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
      <article className="mx-auto max-w-6xl rounded-[2rem] p-6 md:p-10">
        <div data-reader-item className="mb-8 flex flex-col gap-4 border-b border-slate-200 pb-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-slate-400">
              Digital Archive / Chapter
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.03em] text-slate-900 md:text-6xl">{chronicle.title}</h2>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <section data-reader-item className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="mb-4 font-mono text-sm uppercase tracking-[0.24em] text-blue-600">Discovery Summary</h3>
            <p className="text-xl leading-9 text-slate-700">{chronicle.discoverySummary}</p>
          </section>

          <section data-reader-item className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="mb-4 font-mono text-sm uppercase tracking-[0.24em] text-blue-600">Problem</h3>
            <p className="leading-8 text-slate-600">{chronicle.problem}</p>
            <h3 className="mb-4 mt-8 font-mono text-sm uppercase tracking-[0.24em] text-blue-600">Solution</h3>
            <p className="leading-8 text-slate-600">{chronicle.solution}</p>
          </section>

          <section data-reader-item className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="mb-4 font-mono text-sm uppercase tracking-[0.24em] text-blue-600">Key Findings</h3>
            <div className="grid gap-4">
              {chronicle.keyFindings.map((finding) => (
                <p key={finding} className="border-l-2 border-blue-500 pl-4 leading-7 text-slate-600">
                  {finding}
                </p>
              ))}
            </div>
          </section>

          <section data-reader-item className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="mb-4 font-mono text-sm uppercase tracking-[0.24em] text-blue-600">Visual Evidence</h3>
            <div className="grid gap-3 sm:grid-cols-3">
              {chronicle.visualEvidence.map((evidence) => (
                <div key={evidence} className="min-h-28 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
                  {evidence}
                </div>
              ))}
            </div>
            <a
              href={chronicle.repositoryLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-blue-600 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-white"
            >
              Repository Link
            </a>
          </section>
        </div>
      </article>
    </div>
  );
}
