import BackgroundEffects from "../components/BackgroundEffects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata = {
  title: "Security — How Calip.io Protects Your Data",
  description:
    "Learn about Calip.io's security infrastructure: encryption, blockchain transparency, audit-grade compliance, and secure digital asset management.",
  alternates: { canonical: "https://calip.io/security" },
  openGraph: {
    title: "Security — How Calip.io Protects Your Data",
    description:
      "Learn about Calip.io's security infrastructure: encryption, blockchain transparency, and audit-grade compliance.",
    url: "https://calip.io/security",
    siteName: "Calip.io",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security — How Calip.io Protects Your Data",
    description:
      "Learn about Calip.io's security infrastructure: encryption, blockchain transparency, and audit-grade compliance.",
  },
};

export default function SecurityPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Security", path: "/security" },
  ];

  return (
    <>
      <JsonLd page="security" breadcrumbs={breadcrumbs} />
      <BackgroundEffects />
      <Navbar />
      <main className="relative pt-32 pb-20 page-enter">
        <section className="mx-auto max-w-3xl px-6">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
            Platform Security
          </h1>

          <div className="mt-10 space-y-8 text-sm text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">
                Blockchain Infrastructure
              </h2>
              <p>
                Calip.io is built on Web3 infrastructure designed to provide
                transparent transaction records, secure digital asset management,
                and auditable activity logs. Every transaction on the platform is
                recorded on-chain, providing an immutable record of activity.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">
                Data Encryption
              </h2>
              <p>
                All data transmitted to and from Calip.io is encrypted using
                industry-standard TLS protocols. User data at rest is stored with
                encryption and access is restricted to authorized personnel only.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">
                Audit-Grade Compliance
              </h2>
              <p>
                Calip.io maintains audit-grade compliance standards. Encrypted
                deal flow pipelines ensure that your data stays private and your
                investments stay protected. Our infrastructure is designed with
                security as a core requirement, not an afterthought.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">
                Wallet Security
              </h2>
              <p>
                Wallet authentication and transaction infrastructure are built
                with bank-grade security standards. We support integration with
                major wallet providers including MetaMask and follow Web3 security
                best practices.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">
                Report a Vulnerability
              </h2>
              <p>
                If you discover a security vulnerability, please contact us at{" "}
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
