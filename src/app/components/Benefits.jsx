
"use client";

import { useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const individualItems = [
  "Discover high-potential startups",
  "Access startup data, traction, and valuation references",
  "Buy and trade Startup Performance Tokens",
  "Monitor token performance in real time",
  "Follow startup growth and milestone updates",
  "Build a diversified startup-focused portfolio",
];

const startupItems = [
  "Zero-cost onboarding",
  "Startup token creation and listing",
  "Revenue-sharing opportunities from ecosystem activity",
  "Global startup exposure",
  "Community-driven growth ecosystem",
  "Founder analytics dashboard",
];
//"Performance and traction visibility",

export default function Benefits() {
  // Ref for the vertical divider line animation
  const dividerRef = useRef(null);

  useEffect(() => {
    // IntersectionObserver: when the divider enters the viewport,
    // add the "revealed" class to trigger a CSS transition.
    // This creates the "divider line grows downward" effect.
    const el = dividerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el); // Only animate once
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative mx-auto mt-5 max-w-7xl px-6">
      {/* Section header */}
      <div className="max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px rgba(139,124,255,0.8)]" />
          Benefits
        </span>
        <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
          One platform. Two growth journeys.
        </h2>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
         Explore promising startups through Startup Performance Tokens while helping innovative companies build visibility, community, and momentum.
        </p>
      </div>

      {/* Main benefit card container */}
      <div className="relative mt-16">
        <div className="btn-energy btn-energy-strong relative overflow-hidden rounded-[2rem] glass-strong">
          {/* Inner purple glow border (simulated via box-shadow) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[2rem]"
            style={{
              boxShadow:
                "inset 0 0 0 1px rgba(139,124,255,0.18), 0 0 80px -20px rgba(139,124,255,0.35)",
            }}
          />
          {/* Background gradient glow orbs (decorative) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-1/2 opacity-50"
            style={{
              background:
                "radial-gradient(40% 40% at 30% 30%, rgba(139, 124, 255, 0.18), transparent 60%), radial-gradient(40% 40% at 70% 70%, rgba(169, 155, 255, 0.14), transparent 60%)",
              transform: "rotate(19.224deg)",
            }}
          />
          {/* Top edge highlight line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
            }}
          />

          {/* Content grid: Individuals (left) | Startups (right) */}
          <div className="relative grid gap-12 p-10 md:p-14 lg:grid-cols-2 lg:gap-16 lg:p-20">
            {/* Vertical divider line (animated on scroll) */}
            <div
              ref={dividerRef}
              className="pointer-events-none absolute left-1/2 top-12 hidden h-[calc(100%-6rem)] w-px -translate-x-1/2 lg:block"
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent, rgba(139,124,255,0.4), rgba(169,155,255,0.6), rgba(139,124,255,0.4), transparent)",
                }}
              />
            </div>

            {/* ===== Individuals Column ===== */}
            <div className="lg:pr-10">
              <div className="text-[11px] uppercase tracking-[0.22em] text-primary-glow">
                For Individuals
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold leading-tight md:text-4xl">
               Trade startup opportunities before they become mainstream.
              </h3>
              <ul className="mt-10 space-y-4">
                {individualItems.map((item, i) => (
                  <ScrollReveal key={item} delay={i * 80}>
                    <li className="flex items-center gap-4 text-base text-foreground/85 md:text-lg font-sans">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-glow shadow-[0_0_10px_rgba(139,124,255,0.8)]"
                      />
                      {item}
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </div>

            {/* ===== Startups Column ===== */}
            <div className="lg:pl-10">
              <div className="text-[11px] uppercase tracking-[0.22em] text-primary-glow">
                For Startups
              </div>
              <h3 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-4xl">
                Build visibility. Grow your community. Unlock opportunities
              </h3>
              <ul className="mt-10 space-y-4">
                {startupItems.map((item, i) => (
                  <ScrollReveal key={item} delay={i * 80}>
                    <li className="flex items-center gap-4 text-base text-foreground/85 md:text-lg font-sans">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-glow shadow-[0_0_10px_rgba(139,124,255,0.8)]"
                      />
                      {item}
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
