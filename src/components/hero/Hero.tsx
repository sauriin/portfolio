import { DataCurrents } from "./DataCurrents";

export function Hero() {
  return (
    <section className="relative z-10 flex min-h-[100dvh] items-center overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:px-10">
      <DataCurrents />
      <div className="mx-auto grid w-full max-w-7xl gap-10 sm:gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
        <div className="relative">
          <p data-intro className="mb-6 sm:mb-8 font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] sm:tracking-[0.34em] text-chronicle-primary">
            Chronicle OS / Discovery Environment
          </p>
          <h1
            data-intro
            className="max-w-5xl font-display text-[clamp(2.25rem,9vw,8.6rem)] font-semibold leading-[0.92] tracking-[-0.04em]"
          >
            NAVIGATING OCEANS OF DATA.
            <br />
            BUILDING SOLUTIONS THAT MATTER.
          </h1>
          <p data-intro className="mt-6 sm:mt-8 max-w-2xl text-base leading-7 text-chronicle-muted sm:text-lg sm:leading-8 md:text-xl">
            Solving real-world problems through data, technology, and innovation.
          </p>
          <a
            data-intro
            href="#chronicles"
            className="mt-12 sm:mt-16 inline-flex font-mono text-xs sm:text-sm uppercase tracking-[0.24em] sm:tracking-[0.28em] text-white/90 transition hover:text-chronicle-primary"
          >
            ↓ EXPLORE THE CHRONICLE
          </a>
        </div>

        <div data-intro className="glass-panel relative min-h-[280px] sm:min-h-[340px] overflow-hidden rounded-2xl sm:rounded-[2rem] p-4 sm:p-6">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-chronicle-primary to-transparent" />
          <div className="grid gap-4 font-mono text-xs text-chronicle-muted">
            <div className="flex items-center justify-between">
              <span>OS SIGNAL</span>
              <span className="text-chronicle-primary">LIVE</span>
            </div>
            {["DATA STREAM", "ANALYTICS CORE", "PROJECT ARCHIVE", "RESUME VIEWER"].map((item, index) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span>{item}</span>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-chronicle-primary"
                    style={{ width: `${54 + index * 12}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
