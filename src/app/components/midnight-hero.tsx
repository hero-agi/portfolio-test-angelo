import { ImageWithFallback } from './figma/ImageWithFallback';
import { Download, Eye, Send } from 'lucide-react';
import type { PortfolioProfile, PortfolioContact } from '../data/types';

const PLACEHOLDER = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400';

interface Props { profile: PortfolioProfile; contact: PortfolioContact; }

export function MidnightHero({ profile, contact }: Props) {
  const { name, title, photo, stats } = profile;
  const [firstName, ...rest] = name.trim().split(' ');
  const lastName = rest.join(' ');

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-400/20 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-block mb-8">
          <div className="p-1 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-400">
            <div className="w-36 h-36 rounded-full overflow-hidden bg-[#050816]">
              <ImageWithFallback
                src={photo || PLACEHOLDER}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-4 text-white/50 tracking-[0.3em] uppercase" style={{ fontSize: 13 }}>
          {title}
        </div>

        <h1 className="text-white mb-6" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900, fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 1 }}>
          {firstName}{lastName ? <> <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">{lastName}</span></> : null}
        </h1>

        <p className="max-w-2xl mx-auto text-white/50 mb-10" style={{ fontSize: 18, lineHeight: 1.6 }}>
          {profile.description}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          <a href={`mailto:${contact.email}`} className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white flex items-center gap-2 hover:scale-105 transition" style={{ fontSize: 14 }}>
            <Send size={16} /> Hire me
          </a>
          <a href="#projects" className="px-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.07] text-white flex items-center gap-2 hover:bg-white/[0.06] transition" style={{ fontSize: 14 }}>
            <Eye size={16} /> View projects
          </a>
          <a href="#contact" className="px-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.07] text-white flex items-center gap-2 hover:bg-white/[0.06] transition" style={{ fontSize: 14 }}>
            <Download size={16} /> Download CV
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-xl">
          {[
            { k: `${stats.years}+`, v: 'Years' },
            { k: String(stats.projects), v: 'Projects' },
            { k: String(stats.companies), v: 'Companies' },
          ].map(s => (
            <div key={s.v} className="text-center">
              <div className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900, fontSize: 36 }}>
                {s.k}
              </div>
              <div className="text-white/50 uppercase tracking-wider" style={{ fontSize: 12 }}>{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
