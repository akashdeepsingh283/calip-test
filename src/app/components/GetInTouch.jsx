"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function GetInTouch() {
  return (
    <section aria-labelledby="cta-heading" className="relative mt-32 mb-0">
      <div className="mx-auto max-w-7xl px-6">
        <div className="btn-energy btn-energy-strong relative overflow-hidden rounded-[2rem] glass-strong py-16 px-8 md:py-20 md:px-14 text-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(139,124,255,0.12), transparent 70%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(139,124,255,0.4), transparent)",
            }}
          />
          <ScrollReveal delay={0}>
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(139,124,255,0.8)]" aria-hidden="true" />
              Let&apos;s connect
            </span>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 id="cta-heading" className="mt-6 font-display text-3xl font-semibold leading-tight md:text-5xl">
              Ready to get started?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="mt-4 mx-auto max-w-lg text-base text-muted-foreground md:text-lg">
             Be among the first individuals and startups to access Calip.io. Discover startup opportunities, explore Startup Performance Tokens, and help shape the next generation of startup ecosystems.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/waitlist"
                className="btn-primary-glow btn-press group inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
              >
                Early Access
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}