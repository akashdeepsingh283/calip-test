"use client";

import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowLeft, Shield, Zap, Rocket, Briefcase } from "lucide-react";
import GlowField from "../components/GlowField";

export default function WaitlistPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0b0b0f] text-white">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-background" />

        <GlowField position="top-center" size={900} intensity="low" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:50px_50px]" aria-hidden="true" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-16 page-enter">
        <div className="w-full max-w-5xl">
          <article className="glass-strong relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[32px] border border-white/10 p-5 sm:p-8 md:p-10 lg:p-16">

            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(135deg, rgba(139,124,255,0.08), transparent 30%, transparent 70%, rgba(139,124,255,0.05))",
              }}
            />

            <div className="relative grid gap-8 md:gap-10 lg:gap-12 lg:grid-cols-2 lg:items-center">

              <div className="flex flex-col">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full glass px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs text-muted-foreground w-fit" role="status">
                  <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" aria-hidden="true" />
                  Early access in progress
                </div>

                <h1 className="mt-4 sm:mt-6 font-display text-[1.75rem] sm:text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight">
                  Join the
                  <span className="block text-gradient">
                    waitlist today.
                  </span>
                </h1>

                <p className="mt-3 sm:mt-4 max-w-md text-sm sm:text-base text-muted-foreground leading-relaxed">
                 Discover, buy & trade Startup Performance Tokens Launch your Startup Performance Token and reach a global audience Be among the first individuals and startups to access Calip.io.
                </p>

                <div className="mt-6 sm:mt-8 w-full grid grid-cols-1 gap-3 sm:gap-4" role="list">
                  <Link href="/join/individual-enquiry" className="group block w-full" aria-label="Join as an individual investor">
                    <div className="glass-strong relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/[0.08] px-4 py-3.5 sm:px-5 sm:py-4 md:px-6 md:py-5 transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.04] motion-lift">
                      <div className="relative flex items-center gap-3 sm:gap-4">
                        <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/30 to-primary/5 ring-1 ring-primary/30 group-hover:ring-primary/50 transition-all duration-300" aria-hidden="true">
                          <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-primary-glow transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h2 className="font-display text-base sm:text-lg font-semibold group-hover:text-primary-glow transition-colors duration-300">
                            Individual
                          </h2>
                          <p className="mt-0.5 text-xs sm:text-sm text-muted-foreground truncate">
                            Discover, buy & trade Startup Performance Tokens
                          </p>
                        </div>
                        <svg
                          className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-primary-glow icon-shift"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>

                  <Link href="/startup" className="group block w-full" aria-label="Join as a startup">
                    <div className="glass-strong relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/[0.08] px-4 py-3.5 sm:px-5 sm:py-4 md:px-6 md:py-5 transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.04] motion-lift">
                      <div className="relative flex items-center gap-3 sm:gap-4">
                        <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/30 to-primary/5 ring-1 ring-primary/30 group-hover:ring-primary/50 transition-all duration-300" aria-hidden="true">
                          <Rocket className="h-4 w-4 sm:h-5 sm:w-5 text-primary-glow transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h2 className="font-display text-base sm:text-lg font-semibold group-hover:text-primary-glow transition-colors duration-300">
                            Startup
                          </h2>
                          <p className="mt-0.5 text-xs sm:text-sm text-muted-foreground truncate">
                            Launch your Startup Performance Token and reach a global audience
                          </p>
                        </div>
                        <svg
                          className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-primary-glow icon-shift"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
                <Link
                  href="/"
                  className="group mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:bg-white/[0.08] glass focus:outline-none focus:ring-2 focus:ring-primary/50 btn-press"
                >
                  <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:-translate-x-0.5" aria-hidden="true" />
                  Back to home
                </Link>
              </div>

              <div className="hidden lg:flex relative items-center justify-center" aria-hidden="true">
                <div className="relative aspect-square w-full max-w-[420px] mx-auto">

                  <GlowField position="center" size={420} intensity="medium" />

                  <div className="absolute inset-8 rounded-full border border-white/20 animate-spin [animation-duration:20s]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-primary-glow shadow-[0_0_12px_rgba(139,124,255,0.8)]" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-2 w-2 rounded-full bg-white/40" />
                  </div>
                  <div className="absolute inset-16 rounded-full border border-primary/30 animate-spin [animation-duration:12s] [animation-direction:reverse]">
                    <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(139,124,255,0.7)]" />
                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-white/30" />
                  </div>
                  <div className="absolute inset-24 rounded-full border border-white/10 animate-spin [animation-duration:30s]">
                    <div className="absolute top-0 right-1/4 -translate-y-1/2 h-2 w-2 rounded-full bg-primary-glow/60 shadow-[0_0_8px_rgba(139,124,255,0.5)]" />
                  </div>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-28 w-28 rounded-2xl glass-strong flex items-center justify-center p-3">
                    <Image
                      src="/icon.png"
                      alt="Calip.io icon"
                      width={112}
                      height={112}
                      className="w-full h-full object-contain drop-shadow-[0_0_24px_rgba(139,124,255,0.7)]"
                    />
                  </div>

                  <div className="absolute top-10 right-6 glass-strong rounded-2xl px-4 py-3 text-xs">
                    <div className="text-muted-foreground">Perks</div>
                    <div className="font-display text-lg text-primary-glow">Exclusive</div>
                  </div>

                  <div className="absolute top-60 right-4 glass-strong rounded-2xl px-4 py-3 text-xs">
                    <div className="text-muted-foreground ">Access</div>
                    <div className="font-display text-lg text-primary">Priority</div>
                  </div>

                  <div className="absolute bottom-10 left-6 glass-strong rounded-2xl px-4 py-3 text-xs">
                    <div className="text-muted-foreground">Secure</div>
                    <div className="font-display text-lg text-primary">Early Spot</div>
                  </div>
                </div>
              </div>

            </div>
          </article>
        </div>
      </div>
    </div>
  );
}