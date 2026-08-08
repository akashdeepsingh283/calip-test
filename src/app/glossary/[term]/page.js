import Link from "next/link";
import { notFound } from "next/navigation";
import { glossaryTerms } from "../../lib/glossary";
import Breadcrumbs from "../../components/Breadcrumbs";
import BackgroundEffects from "../../components/BackgroundEffects";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export async function generateStaticParams() {
  return glossaryTerms.map((term) => ({
    term: term.slug,
  }));
}

export async function generateMetadata({ params }) {
  const term = glossaryTerms.find((t) => t.slug === params.term);
  if (!term) return {};

  return {
    title: `${term.name} — Definition & Meaning | Calip.io Glossary`,
    description: term.excerpt,
    alternates: {
      canonical: `https://calip.io/glossary/${term.slug}`,
    },
    openGraph: {
      title: `${term.name} — Definition & Meaning | Calip.io Glossary`,
      description: term.excerpt,
      url: `https://calip.io/glossary/${term.slug}`,
      siteName: "Calip.io",
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${term.name} — Definition & Meaning | Calip.io Glossary`,
      description: term.excerpt,
    },
  };
}

export default function GlossaryTermPage({ params }) {
  const term = glossaryTerms.find((t) => t.slug === params.term);
  if (!term) notFound();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Glossary", path: "/glossary" },
    { name: term.name, path: `/glossary/${term.slug}` },
  ];

  return (
    <>
      <BackgroundEffects />
      <Navbar />
      <main className="relative pt-32 pb-20 page-enter">
        <section className="mx-auto max-w-3xl px-6">
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
            {term.name}
          </h1>

          <div className="mt-8 max-w-none">
            {term.content.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="mt-4 text-base text-muted-foreground leading-relaxed md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <Link
              href="/glossary"
              className="inline-flex items-center gap-2 text-sm text-primary-glow hover:text-foreground transition-colors"
            >
              &larr; Back to Glossary
            </Link>
          </div>
        </section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            name: term.name,
            description: term.excerpt,
            inDefinedTermSet: "https://calip.io/glossary",
            url: `https://calip.io/glossary/${term.slug}`,
          }),
        }}
      />
    </>
  );
}
