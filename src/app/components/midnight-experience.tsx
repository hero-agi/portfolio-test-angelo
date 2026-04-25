import type { PortfolioExperience } from '../data/types';

interface Props { experience: PortfolioExperience[]; }

export function MidnightExperience({ experience }: Props) {
  if (experience.length === 0) return null;

  return (
    <section id="experience" className="relative px-6 py-32 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <div className="text-white/50 uppercase tracking-[0.3em] mb-3" style={{ fontSize: 12 }}>Experience</div>
        <h2 className="text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem,4vw,3rem)' }}>
          Professional{' '}
          <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">journey</span>
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/40 via-cyan-400/30 to-transparent" />

        <div className="space-y-8">
          {experience.map(e => {
            const logo = e.company[0].toUpperCase();
            const bullets = e.description
              ? e.description.split(/\.\s+/).filter(Boolean).map(b => b.endsWith('.') ? b : b + '.')
              : [];

            return (
              <div key={`${e.company}-${e.role}`} className="relative pl-20">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/40 to-cyan-500/20 border border-white/10 flex items-center justify-center text-white" style={{ fontWeight: 900 }}>
                  {logo}
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-xl">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="text-white" style={{ fontWeight: 700, fontSize: 18 }}>{e.role}</div>
                      <div className="text-white/50" style={{ fontSize: 14 }}>{e.company}</div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-violet-600/15 border border-violet-500/30 text-violet-200" style={{ fontSize: 12 }}>
                      {e.period}
                    </span>
                  </div>

                  {bullets.length > 0 && (
                    <ul className="space-y-1.5">
                      {bullets.map((b, i) => (
                        <li key={i} className="flex gap-2 text-white/60" style={{ fontSize: 14, lineHeight: 1.6 }}>
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
