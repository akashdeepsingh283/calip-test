import Link from "next/link";
import { glossaryTerms } from "../lib/glossary";
import BackgroundEffects from "../components/BackgroundEffects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata = {
  title: "Glossary — Startup Investment & Web3 Terms | Calip.io",
  description:
    "Learn the key terms and concepts behind startup investing, Web3, Startup Performance Tokens, deal flow, and the Calip.io platform.",
  alternates: {
    canonical: "https://calip.io/glossary",
  },
  openGraph: {
    title: "Glossary — Startup Investment & Web3 Terms | Calip.io",
    description:
      "Learn the key terms and concepts behind startup investing, Web3, Startup Performance Tokens, deal flow, and the Calip.io platform.",
    url: "https://calip.io/glossary",
    siteName: "Calip.io",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glossary — Startup Investment & Web3 Terms | Calip.io",
    description:
      "Learn the key terms and concepts behind startup investing, Web3, Startup Performance Tokens, deal flow, and the Calip.io platform.",
  },
};

export default function GlossaryPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Glossary", path: "/glossary" },
  ];

  return (
    <>
      <JsonLd page="glossary" breadcrumbs={breadcrumbs} />
      <BackgroundEffects />
      <Navbar />
      <main className="relative pt-32 pb-20 page-enter">
        <section className="mx-auto max-w-4xl px-6">
          <Breadcrumbs items={breadcrumbs} />

          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span
                className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(139,124,255,0.8)]"
                aria-hidden="true"
              />
              Glossary
            </span>
          </div>

          <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
            Startup Investment &amp; Web3 Glossary
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Key terms and concepts behind startup investing, Startup Performance
            Tokens, Web3 deal flow, and the Calip.io platform.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {glossaryTerms.map((term) => (
              <Link
                key={term.slug}
                href={`/glossary/${term.slug}`}
                className="glass-strong motion-lift group rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:border-primary/30"
              >
                <h2 className="font-display text-lg font-semibold group-hover:text-primary-glow transition-colors duration-300">
                  {term.name}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {term.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
