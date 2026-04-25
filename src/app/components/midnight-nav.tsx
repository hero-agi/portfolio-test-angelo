interface Props { name: string; }

export function MidnightNav({ name }: Props) {
  const links = ['Home', 'About', 'Projects', 'Experience', 'Contact'];
  const initials = name ? name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() : 'MN';

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full backdrop-blur-xl bg-white/[0.03] border border-white/[0.07] flex items-center gap-6">
      <div className="text-white tracking-widest" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}>
        {initials}
      </div>
      <div className="hidden md:flex items-center gap-5">
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} className="text-white/60 hover:text-white transition-colors" style={{ fontSize: 14 }}>
            {l}
          </a>
        ))}
      </div>
      <a href="#contact" className="px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-400 text-white" style={{ fontSize: 13 }}>
        Hire me
      </a>
    </nav>
  );
}
