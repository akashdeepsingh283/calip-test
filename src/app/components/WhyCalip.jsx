"use client";

import { Sparkles, BadgeCheck, Eye, Users } from "lucide-react";
import GlowCard from "./GlowCard";
import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    icon: Sparkles,
    title: "AI Driven Screening",
    desc: "Every startup is analyzed before reaching the ecosystem.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Startups",
    desc: "Identity, business and platform verification improve quality.",
  },
  {
    icon: Eye,
    title: "Transparent Platform",
    desc: "Blockchain-backed transparency with clear platform activity.",
  },
  {
    icon: Users,
    title: "Built for Community",
    desc: "Helping startups grow visibility while individuals discover opportunities.",
  },
];

const iconColors = [
  "from-primary/30 to-primary/5 ring-primary/30 text-primary-glow",
  "from-emerald-400/30 to-emerald-400/5 ring-emerald-400/30 text-emerald-400",
  "from-violet-400/30 to-violet-400/5 ring-violet-400/30 text-violet-400",
  "from-amber-400/30 to-amber-400/5 ring-amber-400/30 text-amber-400",
];

export default function WhyCalip() {
  return (
    <section
      id="why-calip"
      aria-labelledby="why-calip-heading"
      className="relative mx-auto mt-28 max-w-7xl px-6"
    >
      <div className="max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span
            className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(139,124,255,0.8)]"
            aria-hidden="true"
          />
          Why Calip
        </span>
        <h2
          id="why-calip-heading"
          className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl"
        >
          Why Choose Calip
        </h2>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          Built for the next generation of startup discovery.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => {
          const Icon = card.icon;
          const colorClasses = iconColors[i];
          const delays = [0, 120, 60, 180];

          return (
            <ScrollReveal key={card.title} delay={delays[i]}>
              <GlowCard className="group p-6 h-full">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${colorClasses} ring-1 transition-all duration-300 group-hover:ring-2`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.desc}
                </p>
              </GlowCard>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
