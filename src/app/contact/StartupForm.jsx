"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import SuccessAnimation from "../components/SuccessAnimation";
import GlowField from "../components/GlowField";
import { submitToWeb3Forms, validateEmail, validateRequired, validateLinkedIn } from "../lib/web3forms";

const inputClass =
  "input-premium w-full rounded-xl bg-white/[0.03] border border-white/[0.08] px-4 py-3 text-sm text-foreground outline-none";

const labelClass =
  "block mb-2 text-[11px] uppercase tracking-wider text-muted-foreground";

export default function StartupForm({
  backHref = "/",
  backLabel = "Back to Contact",
}) {
  const [form, setForm] = useState({
    startupName: "",
    founderName: "",
    email: "",
    linkedInProfile: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    const nameErr = validateRequired(form.startupName, "Startup name");
    const founderErr = validateRequired(form.founderName, "Founder name");
    const emailErr = validateEmail(form.email);
    const linkedinErr = validateLinkedIn(form.linkedInProfile);

    if (nameErr || founderErr || emailErr || linkedinErr) {
      setErrors({
        startupName: nameErr,
        founderName: founderErr,
        email: emailErr,
        linkedInProfile: linkedinErr,
      });
      return;
    }

    setLoading(true);
    try {
      await submitToWeb3Forms({
        subject: "New Startup Application — Calip.io",
        startupName: form.startupName.trim(),
        founderName: form.founderName.trim(),
        email: form.email.trim(),
        linkedin: form.linkedInProfile.trim(),
      });
      setShowSuccess(true);
      setForm({ startupName: "", founderName: "", email: "", linkedInProfile: "" });
    } catch (err) {
      setErrors({ form: err.message || "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="mx-auto max-w-7xl px-6" aria-labelledby="startup-form-heading">
        <nav aria-label="Breadcrumb">
          <Link
            href={backHref}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
          >
            &larr; {backLabel}
          </Link>
        </nav>

        <div className="mt-4 text-left">
          <span className="text-xs uppercase tracking-[0.2em] text-primary-glow">
            Startup application
          </span>
          <h1 id="startup-form-heading" className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Tell us about your{" "}
            <span className="text-gradient">startup.</span>
          </h1>
          <p className="mt-3 text-muted-foreground text-lg max-w-xl">
            Submit your application and our team will review it. We connect verified startups with the right investors.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-5 items-start">
          <div className="lg:col-span-3 relative">
            <div className="pointer-events-none absolute -inset-10 overflow-hidden -z-10" aria-hidden="true">
              <GlowField position="top-center" size={420} intensity="medium" />
            </div>

            <article className="group glass depth-2 depth-hover hover:border-white/10 relative overflow-hidden rounded-3xl p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2" aria-label="Startup application form">
                <div>
                  <label htmlFor="startup-name" className={labelClass}>Startup Name</label>
                  <input
                    id="startup-name"
                    className={`${inputClass} ${errors.startupName ? "input-error" : ""}`}
                    type="text"
                    name="startupName"
                    value={form.startupName}
                    onChange={handleChange}
                    required
                    autoComplete="organization"
                  />
                  {errors.startupName && (
                    <p className="mt-1.5 text-xs text-red-400 field-error">{errors.startupName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="founder-name" className={labelClass}>Founder Name</label>
                  <input
                    id="founder-name"
                    className={`${inputClass} ${errors.founderName ? "input-error" : ""}`}
                    type="text"
                    name="founderName"
                    value={form.founderName}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                  {errors.founderName && (
                    <p className="mt-1.5 text-xs text-red-400 field-error">{errors.founderName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="startup-email" className={labelClass}>Email</label>
                  <input
                    id="startup-email"
                    className={`${inputClass} ${errors.email ? "input-error" : ""}`}
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400 field-error">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="startup-linkedin" className={labelClass}>LinkedIn Profile</label>
                  <input
                    id="startup-linkedin"
                    className={`${inputClass} ${errors.linkedInProfile ? "input-error" : ""}`}
                    type="url"
                    name="linkedInProfile"
                    value={form.linkedInProfile}
                    onChange={handleChange}
                    required
                    placeholder="https://linkedin.com/in/..."
                    autoComplete="url"
                  />
                  {errors.linkedInProfile && (
                    <p className="mt-1.5 text-xs text-red-400 field-error">{errors.linkedInProfile}</p>
                  )}
                </div>

                {errors.form && (
                  <div className="md:col-span-2">
                    <p className="text-sm text-red-400 text-center">{errors.form}</p>
                  </div>
                )}

                <div className="md:col-span-2 flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary-glow btn-press group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
                  >
                    {loading ? "Submitting..." : "Submit application"}
                    <ArrowRight className="h-4 w-4 icon-shift" aria-hidden="true" />
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
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-primary/5 ring-1 ring-primary/30 group-hover:ring-primary/50 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary/40 group-hover:to-primary/10">
                      <Mail className="h-4 w-4 text-primary-glow transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
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
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-primary/5 ring-1 ring-primary/30 group-hover:ring-primary/50 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary/40 group-hover:to-primary/10">
                      <Phone className="h-4 w-4 text-primary-glow transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
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
            </article>
          </div>
        </div>
      </section>

      <SuccessAnimation
        visible={showSuccess}
        message="Your startup application has been submitted successfully. Our team will review it and get back to you."
        onClose={() => setShowSuccess(false)}
      />
    </>
  );
}
