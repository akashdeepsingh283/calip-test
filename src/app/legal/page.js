import BackgroundEffects from "../components/BackgroundEffects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata = {
  title: "Legal Disclaimer — Calip.io",
  description:
    "Important legal disclaimers about Startup Performance Tokens, investment risks, and platform participation on Calip.io.",
  alternates: { canonical: "https://calip.io/legal" },
  openGraph: {
    title: "Legal Disclaimer — Calip.io",
    description:
      "Important legal disclaimers about Startup Performance Tokens, investment risks, and platform participation.",
    url: "https://calip.io/legal",
    siteName: "Calip.io",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Disclaimer — Calip.io",
    description:
      "Important legal disclaimers about Startup Performance Tokens and platform participation.",
  },
};

export default function LegalPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Legal", path: "/legal" },
  ];

  return (
    <>
      <JsonLd page="legal" breadcrumbs={breadcrumbs} />
      <BackgroundEffects />
      <Navbar />
      <main className="relative pt-32 pb-20 page-enter">
        <section className="mx-auto max-w-3xl px-6">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
            Legal Disclaimer
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: January 2026
          </p>

          <div className="mt-10 space-y-8 text-sm text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">
                Not Equity
              </h2>
              <p>
                Startup Performance Tokens (STPs) do not represent equity
                ownership, voting rights, dividend rights, or legal ownership in
                the underlying startup. They function as utility-based
                participation tokens within the Calip.io ecosystem.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">
                Not Investment Advice
              </h2>
              <p>
                Nothing on Calip.io constitutes investment, legal, or financial
                advice. All information provided on the platform is for
                informational purposes only. Users should conduct their own
                research and consult qualified professionals before making
                investment decisions.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">
                Risk Disclosure
              </h2>
              <p>
                Trading Startup Performance Tokens involves significant risk.
                Token prices may move up or down based on market activity and
                startup developments. Past performance does not guarantee future
                results. Users may lose all value associated with their tokens.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">
                Jurisdictional Restrictions
              </h2>
              <p>
                Access to certain Calip.io features may be restricted based on
                your jurisdiction. Users are responsible for ensuring their use of
                the platform complies with local laws and regulations.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">
                Platform Status
              </h2>
              <p>
                Calip.io is currently in development. Features described on the
                website may not yet be available. Descriptions of future
                functionality are forward-looking and subject to change.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
