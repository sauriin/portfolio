import { useEffect, useRef } from "react";
import gsap from "gsap";
import { profile } from "../../data/profile";
import { resume } from "../../data/resume";
import { downloadResume } from "../../lib/downloadResume";
import { useUiStore } from "../../store/uiStore";

export function ResumeViewer() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isResumeOpen = useUiStore((state) => state.isResumeOpen);
  const closeResume = useUiStore((state) => state.closeResume);

  useEffect(() => {
    if (!isResumeOpen || !ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current, { opacity: 0 }, { opacity: 1, duration: 0.28, ease: "power2.out" });
      gsap.from("[data-resume-page]", {
        y: 34,
        opacity: 0,
        duration: 0.72,
        ease: "power3.out",
      });
    }, ref);

    return () => ctx.revert();
  }, [isResumeOpen]);

  if (!isResumeOpen) return null;

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-10 bg-black/40 backdrop-blur-sm"
      style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-xl bg-white shadow-2xl flex flex-col animate-in fade-in zoom-in duration-300">
        {/* macOS Window Title Bar */}
        <div className="flex items-center justify-between bg-slate-100 px-3 py-2.5 sm:px-4 sm:py-3 border-b border-slate-200 select-none">
          <div className="flex gap-2">
            <button onClick={closeResume} className="w-3 h-3 rounded-full bg-[#FF5F57] hover:bg-[#ff4b43] transition-colors" title="Close" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 text-slate-500 text-[11px] sm:text-xs font-medium">
            Resume.pdf
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={downloadResume}
              className="p-1.5 rounded-md hover:bg-slate-200 text-slate-600 transition-colors"
              title="Download"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>
        </div>

        {/* Document Content */}
        <div className="flex-1 overflow-y-auto bg-slate-100 p-3 sm:p-5 md:p-8 flex justify-center">
          <article
            data-resume-page
            className="mx-auto w-full max-w-[800px] bg-white shadow-sm p-5 sm:p-8 md:p-12 text-slate-900 min-h-[1000px]"
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">{profile.owner}</h1>
                <p className="text-slate-600 mt-1">{profile.role}</p>
              </div>
              <div className="text-right text-sm text-slate-500 font-mono">
                <p>{profile.contact.email}</p>
                <p>{profile.contact.phone}</p>
                <p className="text-blue-600">{profile.contact.linkedin.split('in/')[1]}</p>
              </div>
            </div>

            <div className="space-y-8">
              {resume.sections.map((section, idx) => (
                <div key={idx}>
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-1 mb-3">
                    {section.title}
                  </h2>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="text-sm leading-relaxed text-slate-700 flex gap-2">
                        <span className="text-slate-300">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
