import BackgroundEffects from "../components/BackgroundEffects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata = {
  title: "Terms of Service — Calip.io",
  description:
    "Calip.io terms of service. Read the terms governing your use of the Web3 startup investment platform and Startup Performance Token marketplace.",
  alternates: { canonical: "https://calip.io/terms" },
  openGraph: {
    title: "Terms of Service — Calip.io",
    description:
      "Read the terms governing your use of the Web3 startup investment platform and Startup Performance Token marketplace.",
    url: "https://calip.io/terms",
    siteName: "Calip.io",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service — Calip.io",
    description:
      "Read the terms governing your use of the Calip.io platform.",
  },
};

export default function TermsPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Terms of Service", path: "/terms" },
  ];

  return (
    <>
      <JsonLd page="terms" breadcrumbs={breadcrumbs} />
      <BackgroundEffects />
      <Navbar />
      <main className="relative pt-32 pb-20 page-enter">
        <section className="mx-auto max-w-3xl px-6">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: January 2026
          </p>

          <div className="mt-10 space-y-8 text-sm text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">
                Acceptance of Terms
              </h2>
              <p>
                By accessing Calip.io, you agree to be bound by these Terms of
                Service. If you do not agree, please do not use the platform.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">
                Platform Description
              </h2>
              <p>
                Calip.io is a Web3-powered platform that connects startups with
                individual investors through verified deal flow, AI-driven
                screening, and Startup Performance Tokens. The platform is
                currently in development and available for early access.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">
                Startup Performance Tokens
              </h2>
              <p>
                Startup Performance Tokens (STPs) are utility-based participation
                tokens. They do not represent equity, voting rights, dividends, or
                legal ownership in the underlying startup. Token values may
                fluctuate based on market activity.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">
                User Obligations
              </h2>
              <p>
                Users agree to provide accurate information, comply with
                applicable laws, and not misuse the platform. Calip.io reserves
                the right to suspend or terminate access for violations.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">
                Limitation of Liability
              </h2>
              <p>
                Calip.io is provided on an &ldquo;as is&rdquo; basis. We make no
                warranties regarding platform availability, accuracy of
                information, or financial outcomes. Users participate at their own
                risk.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">
                Contact
              </h2>
              <p>
                For questions about these Terms, contact{" "}
                <a
                  href="mailto:info@calip.io"
                  className="text-primary-glow hover:underline"
                >
                  info@calip.io
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
