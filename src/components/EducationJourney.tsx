import { useRef, useState, useEffect } from "react";
import { EDUCATION_ITEMS } from "@/data/education";

interface EducationJourneyProps {
  darkMode: boolean;
}

export default function EducationJourney({ darkMode }: EducationJourneyProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;

      const start = viewportH * 0.85;
      const end = viewportH * 0.35;

      const total = rect.height + (start - end);
      const scrolled = start - rect.top;

      const progress = Math.min(Math.max(scrolled / total, 0), 1);
      setLineProgress(progress * 100);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="education"
      className="relative px-6 py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto relative z-10">

        {/* heading — matches StackMatrix exactly */}
        <div className="reveal mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className={`mono text-[11px] uppercase tracking-[0.2em]
              ${darkMode ? "text-orange-400" : "text-orange-600"}`}>
              02 — education
            </span>
            <h2 className={`mt-2 text-4xl md:text-5xl font-extrabold tracking-tight
              ${darkMode ? "text-white" : "text-slate-900"}`}>
              EDUCATION
            </h2>
          </div>
          <p className={`max-w-md text-sm md:text-base
            ${darkMode ? "text-stone-400" : "text-slate-500"}`}>
            <span className={darkMode ? "text-stone-200" : "text-slate-800"}>{EDUCATION_ITEMS.length} milestones</span> that
            shaped the way I think and build.
          </p>
        </div>

        {/* timeline */}
        <div ref={timelineRef} className="relative">
          <div
            className={`absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2
              ${darkMode ? "bg-white/8" : "bg-slate-200"}`}
          />
          <div
            className={`absolute left-1/2 top-0 w-px -translate-x-1/2
              bg-gradient-to-b
              ${darkMode ? "from-orange-400 to-red-400" : "from-orange-500 to-red-500"}`}
            style={{
              height: `${lineProgress}%`,
              transition: "height 0.1s linear",
            }}
          />

          <div className="flex flex-col gap-16 md:gap-20">
            {EDUCATION_ITEMS.map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div key={item.title} className="group relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 items-start">

                  <div
                    className={`reveal absolute left-1/2 top-6 -translate-x-1/2 z-10
                      pointer-events-none
                      transition-all duration-300
                      group-hover:scale-110
                      w-10 h-10 rounded-full flex items-center justify-center
                      font-bold text-sm
                      ${darkMode
                        ? "bg-stone-950 border-2 border-white text-white"
                        : "bg-white border-2 border-slate-900 text-slate-900"}`}
                    style={{ transitionDelay: `${i * 0.12}s` }}
                  >
                    {i + 1}
                  </div>

                  <div className={isLeft ? "hidden md:block" : "hidden md:block md:order-1"} />

                  <div
                    className={`reveal relative rounded-2xl p-6 md:p-7 cursor-pointer
                      ring-1 ring-transparent transition-all duration-300 ease-out
                      hover:scale-[1.03] active:scale-[0.98]
                      hover:ring-[0.5px] hover:ring-orange-400
                      ${isLeft ? "md:order-1" : ""}
                      ${darkMode
                        ? "glass-dark"
                        : "bg-white border border-slate-200 shadow-sm"}`}
                    style={{ transitionDelay: `${i * 0.12}s` }}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className={`thai text-xl md:text-2xl font-extrabold
                        ${darkMode ? "text-white" : "text-slate-900"}`}>
                        {item.title}
                      </h3>
                      <span className={`mono text-[11px] uppercase tracking-widest px-2.5 py-1 rounded-md whitespace-nowrap
                        ${darkMode
                          ? "bg-white/5 border border-white/10 text-stone-300"
                          : "bg-slate-100 border border-slate-200 text-slate-600"}`}>
                        {item.period}
                      </span>
                    </div>

                    <div className={`thai flex items-center gap-1.5 text-sm mb-4
                      ${darkMode ? "text-stone-400" : "text-slate-500"}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 21h18M6 21V7l6-4 6 4v14M9 9h1M9 13h1M14 9h1M14 13h1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item.school}
                    </div>

                    <p className={`thai text-sm ${darkMode ? "text-stone-300" : "text-slate-600"}`}>
                      {item.description}
                    </p>

                    <div
                      className="overflow-hidden transition-all duration-300 ease-out
                        max-h-0 opacity-0 mt-0
                        group-hover:max-h-[400px] group-hover:opacity-100 group-hover:mt-4"
                    >
                      <div className={`border-t mb-4 ${darkMode ? "border-white/10" : "border-slate-200"}`} />
                      <span className={`mono text-[11px] uppercase tracking-widest font-semibold
                        ${darkMode ? "text-stone-400" : "text-slate-500"}`}>
                        ผลงานที่ผ่านมา:
                      </span>
                      <ul className="mt-2 space-y-1.5">
                        {item.achievements.map((a, ai) => (
                          <li key={ai} className={`thai text-sm flex gap-2
                            ${darkMode ? "text-stone-300" : "text-slate-600"}`}>
                            <span className={darkMode ? "text-orange-400" : "text-orange-500"}>•</span>
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}