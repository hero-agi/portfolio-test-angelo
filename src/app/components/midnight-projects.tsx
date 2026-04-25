import { ImageWithFallback } from './figma/ImageWithFallback';
import { Github, ExternalLink } from 'lucide-react';
import type { PortfolioProject } from '../data/types';

const PLACEHOLDER_IMG = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800';

interface Props { projects: PortfolioProject[]; }

export function MidnightProjects({ projects }: Props) {
  const items = projects.length > 0 ? projects : [];
  if (items.length === 0) return null;

  return (
    <section id="projects" className="relative px-6 py-32 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="text-white/50 uppercase tracking-[0.3em] mb-3" style={{ fontSize: 12 }}>Selected work</div>
        <h2 className="text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem,4vw,3rem)' }}>
          Projects that{' '}
          <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">shipped</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(p => (
          <div
            key={p.title}
            className="group rounded-2xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-xl overflow-hidden hover:scale-[1.02] hover:bg-white/[0.05] transition-all"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-violet-900/40 to-cyan-900/20">
              <ImageWithFallback
                src={p.image || PLACEHOLDER_IMG}
                alt={p.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white/80" style={{ fontSize: 11 }}>
                {p.category}
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-white mb-4" style={{ fontWeight: 700, fontSize: 20 }}>{p.title}</h3>

              <div className="space-y-2 mb-4">
                {[
                  { k: 'Problem',  v: p.problem  },
                  { k: 'Solution', v: p.solution },
                  { k: 'Result',   v: p.result   },
                ].filter(r => r.v).map(row => (
                  <div key={row.k} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                    <div className="text-violet-300/80 uppercase tracking-wider mb-0.5" style={{ fontSize: 10 }}>{row.k}</div>
                    <div className="text-white/70" style={{ fontSize: 13 }}>{row.v}</div>
                  </div>
                ))}
              </div>

              {p.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/60" style={{ fontSize: 11 }}>{t}</span>
                  ))}
                </div>
              )}

              <div className="flex gap-2">
                {p.githubUrl && (
                  <a href={p.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white/80 hover:bg-white/[0.08] transition flex items-center justify-center gap-1.5" style={{ fontSize: 13 }}>
                    <Github size={13} /> Code
                  </a>
                )}
                {p.demoUrl && (
                  <a href={p.demoUrl} target="_blank" rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:brightness-110 transition flex items-center justify-center gap-1.5" style={{ fontSize: 13 }}>
                    <ExternalLink size={13} /> Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
