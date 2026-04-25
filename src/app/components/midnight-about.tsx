import { Github, Linkedin, Mail, MapPin, Twitter } from 'lucide-react';
import type { PortfolioProfile, PortfolioContact } from '../data/types';

interface Props { profile: PortfolioProfile; contact: PortfolioContact; }

export function MidnightAbout({ profile, contact }: Props) {
  const socials = [
    { icon: Linkedin, label: 'LinkedIn', value: contact.linkedin || '—', href: contact.linkedin || '#' },
    { icon: Github,   label: 'GitHub',   value: contact.github   || '—', href: contact.github   || '#' },
    { icon: Mail,     label: 'Email',    value: contact.email,            href: `mailto:${contact.email}` },
  ].filter(s => s.value && s.value !== '—' || s.label === 'Email');

  return (
    <section id="about" className="relative px-6 py-32 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="text-white/50 uppercase tracking-[0.3em] mb-3" style={{ fontSize: 12 }}>About</div>
        <h2 className="text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem,4vw,3rem)' }}>
          {profile.name.split(' ')[0]}{' '}
          <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
            {profile.title.split(' ').slice(0, 2).join(' ')}
          </span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <p className="text-white/70 mb-8" style={{ lineHeight: 1.7 }}>{profile.description}</p>
          {profile.badges.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {profile.badges.map(s => (
                <span key={s} className="px-3 py-1.5 rounded-full bg-violet-600/15 border border-violet-500/30 text-violet-200" style={{ fontSize: 13 }}>
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-5">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <span className="text-white/70 uppercase tracking-wider" style={{ fontSize: 12 }}>
                {profile.availableText || 'Available for new projects'}
              </span>
            </div>
            <div className="text-white mt-3" style={{ fontSize: 22, fontWeight: 700 }}>Open to work</div>
            <div className="flex items-center gap-2 mt-4 text-white/60" style={{ fontSize: 13 }}>
              <MapPin size={14} /> Remote
            </div>
          </div>

          {socials.map(c => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-xl hover:bg-white/[0.06] hover:scale-[1.02] transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600/30 to-cyan-400/20 flex items-center justify-center">
                  <c.icon size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-white/50" style={{ fontSize: 12 }}>{c.label}</div>
                  <div className="text-white" style={{ fontSize: 14 }}>{c.value}</div>
                </div>
              </div>
              <span className="text-white/40">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
