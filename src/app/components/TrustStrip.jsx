"use client";

import ScrollReveal from "./ScrollReveal";

const trustItems = [
  "Startup Performance Tokens are Not Equity",
  "AI Screened Startups",
  "Transparent Web3 Infrastructure",
];

export default function TrustStrip() {
  return (
    <section aria-label="Trust indicators" className="relative mx-auto mt-6 max-w-7xl px-6">
      <ScrollReveal delay={80}>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-1.5 rounded-2xl glass py-3 px-5">
          {trustItems.map((item) => (
            <div
              key={item}
              className="inline-flex items-center gap-2 text-xs text-muted-foreground"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/80 shadow-[0_0_8px_rgba(52,211,153,0.4)]"
              />
              {item}
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
