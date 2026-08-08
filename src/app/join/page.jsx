"use client";

import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CTACards() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Navbar className="mb-2" />

      <section
        aria-labelledby="join-heading"
        className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pt-30"
      >
        <div className="max-w-3xl mb-8">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(139,124,255,0.8)]" aria-hidden="true" />
            Join Calip.io
          </span>
          <h1 id="join-heading" className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
            Choose your path
          </h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Whether you invest in startups or are building one, Calip.io gives you the infrastructure to move faster and smarter.
          </p>
        </div>

        <div className="grid flex-1 gap-6 mt-8 md:mt-10 md:grid-cols-2">
          <ScrollReveal delay={0} className="w-full">
            <Link href="/join/individual-enquiry" className="block h-full">
              <article className="group glass depth-2 depth-hover hover:border-white/10 relative overflow-hidden rounded-3xl min-h-[240px] cursor-pointer p-8 lg:p-10">
                <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                  <svg
                    viewBox="0 0 360 280"
                    className="absolute -right-6 -bottom-6 h-[110%] w-[75%] opacity-[0.35] animate-drift-slow"
                    aria-hidden="true"
                  >
                    <defs>
                      <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#A99BFF" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#8B7CFF" stopOpacity="0" />
                      </radialGradient>
                      <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#A99BFF" stopOpacity="0.55" />
                        <stop offset="100%" stopColor="#8B7CFF" stopOpacity="0.05" />
                      </linearGradient>
                    </defs>

                    <g stroke="url(#edge)" strokeWidth="0.6" fill="none" opacity="0.6">
                      <ellipse cx="180" cy="140" rx="120" ry="120" />
                      <ellipse cx="180" cy="140" rx="120" ry="50" />
                      <ellipse cx="180" cy="140" rx="50" ry="120" />
                      <ellipse cx="180" cy="140" rx="90" ry="100" />
                    </g>

                    <g stroke="url(#edge)" strokeWidth="0.8">
                      <line x1="60" y1="40" x2="140" y2="80" />
                      <line x1="140" y1="80" x2="220" y2="30" />
                      <line x1="140" y1="80" x2="90" y2="150" />
                      <line x1="140" y1="80" x2="200" y2="170" />
                      <line x1="220" y1="30" x2="280" y2="110" />
                      <line x1="200" y1="170" x2="280" y2="110" />
                      <line x1="90" y1="150" x2="170" y2="240" />
                      <line x1="200" y1="170" x2="170" y2="240" />
                      <line x1="280" y1="110" x2="320" y2="200" />
                      <line x1="320" y1="200" x2="170" y2="240" />
                      <line x1="90" y1="150" x2="40" y2="220" />
                      <line x1="40" y1="220" x2="170" y2="240" />
                    </g>

                    {[
                      [60, 40], [140, 80], [220, 30], [90, 150],
                      [200, 170], [280, 110], [320, 200], [40, 220], [170, 240],
                    ].map(([cx, cy], idx) => (
                      <g key={idx}>
                        <circle cx={cx} cy={cy} r="10" fill="url(#nodeGlow)" />
                        <circle
                          cx={cx}
                          cy={cy}
                          r="2"
                          fill="#D6CCFF"
                          opacity={
                            [0.53, 0.62, 0.96, 0.95, 0.71, 0.98, 0.85, 0.72, 0.83][idx]
                          }
                        />
                      </g>
                    ))}
                  </svg>

                  <div
                    className="absolute -right-16 -bottom-16 h-72 w-72 rounded-full blur-3xl"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(139,124,255,0.35), transparent 60%)",
                    }}
                  />
                </div>

                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(105deg, rgba(11,11,15,0.85) 0%, rgba(11,11,15,0.5) 45%, rgba(11,11,15,0) 100%)",
                  }}
                />

                <div className="relative">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-primary-glow">
                    Individual
                  </div>

                  <h3 className="mt-6 font-display text-3xl font-semibold md:text-4xl">
                    I am an Individual
                  </h3>

                  <p className="mt-3 max-w-md text-muted-foreground">
                    Access curated deal flow, AI-matched startups, and a private investor network built for smart capital deployment.
                  </p>

                  <div className="mt-10 inline-flex items-center gap-2 text-sm text-primary-glow" aria-hidden="true">
                    Continue
                    <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={150} className="w-full">
            <Link href="/startup" className="block h-full">
              <article className="group glass depth-2 depth-hover hover:border-white/10 relative overflow-hidden rounded-3xl min-h-[240px] cursor-pointer p-8 lg:p-10">
                <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                  <svg
                    viewBox="0 0 360 280"
                    className="absolute -right-4 -bottom-8 h-[115%] w-[75%] opacity-[0.32] animate-rotate-slow"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="ringJoin" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#C9BFFF" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#8B7CFF" stopOpacity="0.05" />
                      </linearGradient>
                      <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#A99BFF" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#8B7CFF" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    <g style={{ transformOrigin: "180px 150px", transform: "rotate(19.224deg)" }}>
                      <ellipse cx="180" cy="150" rx="130" ry="42" stroke="url(#ringJoin)" strokeWidth="0.8" fill="none" />
                    </g>

                    <g style={{ transformOrigin: "180px 150px", transform: "rotate(-252.816deg)" }}>
                      <ellipse cx="180" cy="150" rx="110" ry="80" stroke="url(#ringJoin)" strokeWidth="0.6" fill="none" transform="rotate(25 180 150)" />
                    </g>

                    <g style={{ transformOrigin: "180px 150px", transform: "rotate(189.612deg)" }}>
                      <ellipse cx="180" cy="150" rx="140" ry="110" stroke="url(#ringJoin)" strokeWidth="0.5" fill="none" transform="rotate(-15 180 150)" />
                    </g>

                    <path d="M 20 240 Q 120 120 200 150 T 350 60" stroke="url(#ringJoin)" strokeWidth="0.8" fill="none" opacity="0.6" />
                    <path d="M 10 260 Q 140 180 230 170 T 360 90" stroke="url(#ringJoin)" strokeWidth="0.5" fill="none" opacity="0.4" />

                    <circle cx="180" cy="150" r="40" fill="url(#coreGlow)" />
                    <circle cx="180" cy="150" r="3" fill="#E2D9FF" />
                  </svg>

                  <div
                    className="absolute right-10 bottom-10 h-72 w-72 rounded-full blur-3xl"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(167,139,250,0.3), transparent 60%)",
                    }}
                  />
                </div>

                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(105deg, rgba(11,11,15,0.85) 0%, rgba(11,11,15,0.5) 45%, rgba(11,11,15,0) 100%)",
                  }}
                />

                <div className="relative">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-primary-glow">
                    Startup
                  </div>

                  <h3 className="mt-6 font-display text-3xl font-semibold md:text-4xl">
                    I am a Startup
                  </h3>

                  <p className="mt-3 max-w-md text-muted-foreground">
                    Get visibility with qualified investors, faster fundraising, and Web3-native growth infrastructure.
                  </p>

                  <div className="mt-10 inline-flex items-center gap-2 text-sm text-primary-glow" aria-hidden="true">
                    Continue
                    <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}