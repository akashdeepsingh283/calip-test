import BackgroundEffects from "../components/BackgroundEffects";
import Navbar from "../components/Navbar";
import Benefits from "../components/Benefits";
import ScrollReveal from "../components/ScrollReveal";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata = {
  title: "About Calip.io — AI-Powered Startup Investment Platform",
  description:
    "Learn how Calip.io creates a two-sided advantage: giving individual investors curated deal flow and signal, and giving startups visibility, capital, and growth infrastructure.",
  alternates: {
    canonical: "https://calip.io/about",
  },
  openGraph: {
    title: "About Calip.io — AI-Powered Startup Investment Platform",
    description:
      "Learn how Calip.io creates a two-sided advantage: giving individual investors curated deal flow and signal, and giving startups visibility, capital, and growth infrastructure.",
    url: "https://calip.io/about",
    siteName: "Calip.io",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://calip.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Calip.io — Web3 Startup Investment Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Calip.io — AI-Powered Startup Investment Platform",
    description:
      "Learn how Calip.io creates a two-sided advantage: giving individual investors curated deal flow and signal, and giving startups visibility, capital, and growth infrastructure.",
  },
  keywords: [
    "about calip",
    "startup investor platform",
    "Web3 ecosystem",
    "deal flow",
    "investor network",
  ],
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <JsonLd page="about" breadcrumbs={breadcrumbs} />
      <BackgroundEffects />
      <Navbar />
      <main className="relative pt-32 pb-20 page-enter">
        <section className="mx-auto max-w-7xl px-6 mb-16">
          <ScrollReveal delay={0}>
            <Breadcrumbs items={breadcrumbs} />

            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span
                className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(139,124,255,0.8)]"
                aria-hidden="true"
              />
              About
            </span>

            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Connecting visionary startups with{" "}
              <span className="text-gradient">smart capital</span>
            </h1>

            <p className="mt-6 max-w-3xl text-base text-muted-foreground md:text-lg leading-relaxed">
              Calip.io is a Web3-powered investment platform built to make
              startup opportunities more accessible. We connect verified
              startups with individual investors through AI-driven deal flow
              screening, transparent on-chain infrastructure, and a marketplace
              for Startup Performance Tokens.
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <div className="glass-strong rounded-2xl p-6 border border-white/10">
                <h2 className="font-display text-lg font-semibold">
                  For Investors
                </h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Access curated deal flow, AI-matched opportunities, and a
                  private network built for smart capital deployment. No venture
                  capital connections or insider access required.
                </p>
              </div>

              <div className="glass-strong rounded-2xl p-6 border border-white/10">
                <h2 className="font-display text-lg font-semibold">
                  For Startups
                </h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Gain visibility with qualified investors, faster fundraising,
                  Web3-native growth infrastructure, and revenue-sharing
                  opportunities from token ecosystem activity.
                </p>
              </div>

              <div className="glass-strong rounded-2xl p-6 border border-white/10">
                <h2 className="font-display text-lg font-semibold">
                  The Platform
                </h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Built on Web3 infrastructure for transparency, security, and
                  auditability. Every startup is verified, every transaction is
                  on-chain, and every participant is protected.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <Benefits />
      </main>
      <Footer />
    </>
  );
}
