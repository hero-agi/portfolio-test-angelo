import { Github, Linkedin, Mail, Twitter, ArrowRight } from 'lucide-react';
import type { PortfolioProfile, PortfolioContact } from '../data/types';

interface Props { profile: PortfolioProfile; contact: PortfolioContact; }

export function MidnightContact({ profile, contact }: Props) {
  const socials = [
    { Icon: Github,   href: contact.github   || '#' },
    { Icon: Linkedin, href: contact.linkedin  || '#' },
    { Icon: Twitter,  href: contact.twitter   || '#' },
    { Icon: Mail,     href: `mailto:${contact.email}` },
  ].filter(s => s.href !== '#');

  return (
    <section id="contact" className="relative px-6 py-32 max-w-3xl mx-auto">
      <div className="absolute inset-x-20 top-20 h-40 rounded-full bg-violet-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute inset-x-40 bottom-0 h-40 rounded-full bg-cyan-400/15 blur-[120px] pointer-events-none" />

      <div className="relative p-10 md:p-14 rounded-3xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-xl text-center">
        <div className="text-white/50 uppercase tracking-[0.3em] mb-4" style={{ fontSize: 12 }}>
          Contact
        </div>
        <h2 className="text-white mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem,4.5vw,3.5rem)', lineHeight: 1.05 }}>
          Let's build{' '}
          <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
            something good
          </span>
        </h2>
        <p className="text-white/50 max-w-xl mx-auto mb-8" style={{ lineHeight: 1.6 }}>
          I read every message personally and typically reply within a day.
          Tell me about your project, your timeline, and what success looks like.
        </p>

        <a
          href={`mailto:${contact.email}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:scale-105 transition mb-8"
        >
          <Mail size={16} /> {contact.email} <ArrowRight size={16} />
        </a>

        {socials.length > 0 && (
          <div className="flex items-center justify-center gap-3">
            {socials.map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/70 hover:text-white hover:bg-white/[0.08] hover:scale-110 transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        )}

        <div className="mt-10 pt-6 border-t border-white/[0.06] text-white/30 flex flex-wrap justify-between gap-2" style={{ fontSize: 12 }}>
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with care</span>
        </div>
      </div>
    </section>
  );
}
