import BackgroundEffects from "../components/BackgroundEffects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata = {
  title: "Privacy Policy — Calip.io",
  description:
    "Calip.io privacy policy. Learn how we collect, use, and protect your personal information on our Web3 startup investment platform.",
  alternates: { canonical: "https://calip.io/privacy" },
  openGraph: {
    title: "Privacy Policy — Calip.io",
    description:
      "Learn how we collect, use, and protect your personal information on our Web3 startup investment platform.",
    url: "https://calip.io/privacy",
    siteName: "Calip.io",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Calip.io",
    description:
      "Learn how we collect, use, and protect your personal information on our Web3 startup investment platform.",
  },
};

export default function PrivacyPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/privacy" },
  ];

  return (
    <>
      <JsonLd page="privacy" breadcrumbs={breadcrumbs} />
      <BackgroundEffects />
      <Navbar />
      <main className="relative pt-32 pb-20 page-enter">
        <section className="mx-auto max-w-3xl px-6">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: January 2026
          </p>

          <div className="mt-10 space-y-8 text-sm text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">
                Information We Collect
              </h2>
              <p>
                When you use Calip.io, we may collect information you provide
                directly, including your name, email address, phone number,
                LinkedIn profile, wallet addresses, and any information submitted
                through our contact forms or enquiry pages.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">
                How We Use Your Information
              </h2>
              <p>
                We use your information to process applications, respond to
                enquiries, provide platform access, send updates about our
                services, improve our platform, and comply with legal obligations.
                We do not sell personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">
                Data Security
              </h2>
              <p>
                We implement industry-standard security measures to protect your
                data. Our platform uses encryption for data in transit and at
                rest. However, no method of electronic storage or transmission is
                100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">
                Third-Party Services
              </h2>
              <p>
                We use third-party services including Web3Forms for form
                submissions and Render for backend infrastructure. These services
                have their own privacy policies governing the use of data
                processed through them.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">
                Contact
              </h2>
              <p>
                For questions about this Privacy Policy, contact us at{" "}
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
