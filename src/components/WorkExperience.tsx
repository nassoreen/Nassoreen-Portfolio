import { EXPERIENCE_ITEMS } from "@/data/experience";

interface WorkExperienceProps {
  darkMode: boolean;
}

export default function WorkExperience({ darkMode }: WorkExperienceProps) {
  return (
    <section
      id="experience"
      className="relative px-6 py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto relative z-10">

        {/* heading */}
        <div className="reveal mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className={`mono text-[11px] uppercase tracking-[0.2em]
              ${darkMode ? "text-orange-400" : "text-orange-600"}`}>
              01 — experience
            </span>
            <h2 className={`mt-2 text-4xl md:text-5xl font-extrabold tracking-tight
              ${darkMode ? "text-white" : "text-slate-900"}`}>
              WORK <br />
              EXPERIENCE
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {EXPERIENCE_ITEMS.map((item, i) => {
            const cardClass = `reveal relative rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.99] ${
              darkMode
                ? "glass-dark hover:border-orange-400/40 hover:shadow-2xl hover:shadow-orange-500/10"
                : "bg-white border border-slate-200 shadow-sm hover:border-orange-300 hover:shadow-xl"
            }`;

            const logoWrapClass = `w-14 h-14 rounded-full flex-shrink-0 overflow-hidden flex items-center justify-center ${
              darkMode ? "bg-white" : "bg-slate-100 border border-slate-200"
            }`;

            const periodClass = `mono text-[11px] uppercase tracking-widest px-2.5 py-1 rounded-md whitespace-nowrap ${
              darkMode
                ? "bg-white/5 border border-white/10 text-stone-300"
                : "bg-slate-100 border border-slate-200 text-slate-600"
            }`;

            return (
              <div key={item.company} className={cardClass} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">

                  <div className={logoWrapClass}>
                    {item.logo ? (
                      <img src={item.logo} alt={item.company} className="w-full h-full object-contain p-1.5" />
                    ) : (
                      <span className="mono text-xs font-bold text-slate-900">
                        {item.company.slice(0, 2).toUpperCase()}
                      </span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                      <h3 className={`thai text-xl md:text-2xl font-extrabold ${darkMode ? "text-white" : "text-slate-900"}`}>
                        {item.company}
                      </h3>
                      <span className={periodClass}>{item.period}</span>
                    </div>

                    <p className={`thai text-sm mb-0.5 ${darkMode ? "text-stone-300" : "text-slate-600"}`}>
                      {item.role}
                    </p>
                    <p className={`thai text-xs mb-4 ${darkMode ? "text-stone-500" : "text-slate-400"}`}>
                      {item.workType}
                    </p>

                    <p className={`thai text-sm leading-relaxed mb-4 ${darkMode ? "text-stone-300" : "text-slate-600"}`}>
                      {item.description}
                    </p>

                    {item.documents && item.documents.length > 0 && (
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`text-xs ${darkMode ? "text-stone-500" : "text-slate-400"}`}>
                          View Documents:
                        </span>
                        {item.documents.map((doc) => {
                          const linkClass = `thai text-xs px-3 py-1.5 rounded-full border transition-all duration-200 hover:scale-105 ${
                            darkMode
                              ? "border-white/15 text-stone-200 hover:bg-white/5 hover:border-orange-400/40"
                              : "border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-orange-300"
                          }`;
                          return (
                            <a key={doc.label} href={doc.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                              {doc.label}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}