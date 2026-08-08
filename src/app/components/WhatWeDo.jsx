"use client";

import ScrollReveal from "./ScrollReveal";

const services = [
  {
    num: "01",
    title: "Startup Discovery",
    desc: "Browse verified startups and explore detailed company insights.",
  },
  {
    num: "02",
    title: "Token Marketplace",
    desc: "Buy, sell, and track Startup Performance Tokens in real time.",
  },
  {
    num: "03",
    title: "AI Analysis",
    desc: "Access startup summaries, growth indicators, and performance intelligence.",
  },
  {
    num: "04",
    title: "Growth Ecosystem",
    desc: "Follow startup progress, milestones, and community activity.",
  },
  
  {
    num: "05",
    title: "Web3 Infrastructure",
    desc: "On-chain rails deliver transparency, ownership tracking, and capital coordination. Every transaction is auditable and secure by design.",
  },
  {
    num: "06",
    title: "Secure Pipelines",
    desc: "Encrypted deal flow with audit-grade compliance built in. Your data stays private, your investments stay protected.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="what" aria-labelledby="what-heading" className="relative mx-auto mt-20 mb-32 max-w-7xl px-6">
      <div className="max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(139,124,255,0.8)]" aria-hidden="true" />
          What we do
        </span>
        <h2 id="what-heading" className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
          A smarter way to access startup opportunities
        </h2>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
         Discover startups, analyze performance, and participate through Startup Performance Tokens designed for the next generation of startup ecosystems.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2" role="list">
        {services.map((s, i) => (
          <ScrollReveal key={s.num} delay={i * 100}>
            <article className="group glass depth-2 depth-hover hover:border-white/10 btn-energy relative overflow-hidden rounded-3xl p-8 h-full">
              <div className="flex items-start justify-between">
                <span className="font-display text-6xl font-bold leading-none tracking-tight text-white/10 transition-colors duration-500 group-hover:text-primary/30" aria-hidden="true">
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}