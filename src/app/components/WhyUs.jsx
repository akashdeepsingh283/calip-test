"use client";

import ScrollReveal from "./ScrollReveal";

const whyUsItems = [
  {
    title: "Smart Network",
    desc: "Funds, angels, and syndicates woven into a single coherent investor mesh — vetted, active, and aligned.",
  },
  {
    title: "Fast Connections",
    desc: "Meaningful introductions happen in days, not months. AI-matched founder-investor fit saves everyone time.",
  },
  {
    title: "Data-Driven Insights",
    desc: "Live ecosystem signals, market traction data, and sector intelligence — distilled into clarity you can act on.",
  },
  {
    title: "Secure by Design",
    desc: "End-to-end encryption and audit-grade compliance protect every deal, every interaction, every transaction.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" aria-labelledby="why-heading" className="relative mx-auto mt-20 max-w-6xl px-6">
      <div className="max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(139,124,255,0.8)]" aria-hidden="true" />
          Why Calip.io
        </span>
        <h2 id="why-heading" className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
          Built for the way capital should move
        </h2>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          A curated layer of trust, signal, and access — composed with intention. Every feature serves the goal of faster, smarter, more transparent investing.
        </p>
      </div>

      <div className="relative mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-10 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(139,124,255,0.35), transparent 65%)",
          }}
        />

        <div className="lg:col-span-7 flex">
          <ScrollReveal delay={0} className="w-full">
            <article className="group glass depth-2 depth-hover hover:border-white/10 relative overflow-hidden rounded-3xl h-full w-full p-10 lg:p-14">
              <span className="text-[11px] uppercase tracking-[0.22em] text-primary-glow">
                Featured
              </span>
              <h3 className="mt-6 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Verified Startups
              </h3>
              <p className="mt-5 max-w-md text-base text-muted-foreground md:text-lg">
                Every founder is screened, every signal is real. A curated layer
                of trust that turns noise into opportunity. Only startups that pass
                our verification process appear on Calip.io.
              </p>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full opacity-50 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(139,124,255,0.45), transparent 60%)",
                }}
              />
            </article>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-6">
          {whyUsItems.map((item, i) => (
            <ScrollReveal key={item.title} delay={(i + 1) * 100}>
              <article className="group glass depth-2 depth-hover hover:border-white/10 relative overflow-hidden rounded-3xl h-full p-7">
                <h4 className="font-display text-lg font-semibold">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}