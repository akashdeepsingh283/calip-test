"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import BackgroundEffects from "../../components/BackgroundEffects";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SuccessAnimation from "../../components/SuccessAnimation";
import GlowField from "../../components/GlowField";
import { validateEmail } from "../../lib/web3forms";
import { submitInvestorEnquiry } from "../../services/contact";

export default function InvestorEnquiryClient() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    const emailErr = validateEmail(email);
    if (emailErr) {
      setErrors({ email: emailErr });
      return;
    }

    setLoading(true);
    try {
      await submitInvestorEnquiry(email);
      setShowSuccess(true);
      setEmail("");
    } catch (err) {
      setErrors({ form: err.message || "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <BackgroundEffects />
      <Navbar />
      <main className="relative pt-32 pb-20">
        <section className="mx-auto max-w-7xl px-6" aria-labelledby="investor-contact-heading">
          <nav aria-label="Breadcrumb">
            <Link
              href="/"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              &larr; Home
            </Link>
          </nav>

          <div className="mt-6 text-center md:text-left">
            <h1 id="investor-contact-heading" className="mt-3 font-display text-4xl font-semibold md:text-5xl">
              Get in touch with{" "}
              <span className="text-gradient">us.</span>
            </h1>
            <p className="mt-3 text-muted-foreground text-lg max-w-xl md:mx-0 mx-auto">
              Share your email and we&apos;ll reach out with curated deal flow and early access details. Or contact us directly through any channel below.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-5 items-start">
            <div className="lg:col-span-3 relative">
              <div className="pointer-events-none absolute -inset-10 overflow-hidden -z-10" aria-hidden="true">
                <GlowField position="top-center" size={420} intensity="medium" />
              </div>

              <article className="group glass depth-2 depth-hover hover:border-white/10 relative overflow-hidden rounded-3xl p-8 lg:p-10">
                <form onSubmit={handleSubmit} aria-label="Investor contact form">
                  <div>
                    <label htmlFor="investor-email" className="block mb-2 text-[11px] uppercase tracking-wider text-muted-foreground">Email</label>
                    <input
                      id="investor-email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                      className="w-full rounded-xl bg-white/[0.03] border border-white/[0.08] px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary/60 focus:bg-white/[0.06] focus:ring-4 focus:ring-primary/15"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                    )}
                  </div>

                  {errors.form && (
                    <p className="mt-4 text-sm text-red-400 text-center">{errors.form}</p>
                  )}

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary-glow inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "Sending..." : "Get in"}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              </article>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <article className="group glass depth-2 depth-hover hover:border-white/10 relative overflow-hidden rounded-3xl p-8">
                <h2 className="font-display text-xl font-semibold mb-6">
                  Contact Us
                </h2>

                <ul className="space-y-5" aria-label="Contact information">
                  <li>
                    <a
                      href="mailto:info@calip.io"
                      className="group flex items-start gap-4 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Email us at info@calip.io"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-primary/5 ring-1 ring-primary/30 group-hover:ring-primary/50 transition-all">
                        <Mail className="h-4 w-4 text-primary-glow" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-0.5">
                          Email
                        </p>
                        <p className="text-sm text-foreground">info@calip.io</p>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      href="tel:+918980665439"
                      className="group flex items-start gap-4 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Call us at +91 89806 65439"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-primary/5 ring-1 ring-primary/30 group-hover:ring-primary/50 transition-all">
                        <Phone className="h-4 w-4 text-primary-glow" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-0.5">
                          Phone
                        </p>
                        <p className="text-sm text-foreground">
                          +91 89806 65439
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-white/[0.06]">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                    Follow Us
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://x.com/InfoCalip"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow Calip.io on X (Twitter)"
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.06] text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-white/[0.06] transition-all"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/calip-io"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow Calip.io on LinkedIn"
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.06] text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-white/[0.06] transition-all"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <SuccessAnimation
        visible={showSuccess}
        message="You've been added to the waitlist! We'll reach out with early access details soon."
        onClose={() => setShowSuccess(false)}
      />
    </>
  );
}
