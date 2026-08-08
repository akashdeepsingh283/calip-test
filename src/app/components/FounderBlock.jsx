"use client";

import ScrollReveal from "./ScrollReveal";

const founders = [
  {
    name: "Alex Chen",
    title: "Co-Founder & CEO",
    initials: "AC",
    linkedin: "#",
  },
  {
    name: "Sarah Park",
    title: "Co-Founder & CTO",
    initials: "SP",
    linkedin: "#",
  },
  {
    name: "Marcus Johnson",
    title: "Co-Founder & COO",
    initials: "MJ",
    linkedin: "#",
  },
  {
    name: "Priya Sharma",
    title: "Co-Founder & CFO",
    initials: "PS",
    linkedin: "#",
  },
];

const avatarColors = [
  "from-primary/40 to-primary/5",
  "from-violet-400/40 to-violet-400/5",
  "from-emerald-400/40 to-emerald-400/5",
  "from-amber-400/40 to-amber-400/5",
];

export default function FounderBlock() {
  return (
    <section
      aria-label="Founder information"
      className="relative mx-auto mt-24 max-w-7xl px-6"
    >
      <div className="relative overflow-hidden rounded-[2rem] glass-strong py-10 px-8 md:py-12 md:px-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139,124,255,0.08), transparent 60%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(139,124,255,0.3), transparent)",
          }}
        />

        <ScrollReveal delay={0}>
          <div className="text-center">
            <p className="mx-auto max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
              Built by founders who believe startup investing should be more
              accessible.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="mt-8 grid grid-cols-2 gap-6 md:flex md:items-center md:justify-center md:gap-10">
            {founders.map((f, i) => (
              <div
                key={f.name}
                className="flex items-center gap-3"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${avatarColors[i]} ring-1 ring-white/10 text-xs font-display font-semibold text-primary-glow`}
                >
                  {f.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {f.name}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {f.title}
                  </p>
                  <a
                    href={f.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary-glow/70 hover:text-primary-glow transition-colors mt-0.5 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
                    aria-label={`${f.name} on LinkedIn`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
