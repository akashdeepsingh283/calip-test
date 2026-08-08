"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const inputClass =
  "input-premium w-full rounded-xl bg-white/[0.03] border border-white/[0.08] px-4 py-3 text-sm text-foreground outline-none";

const labelClass =
  "block mb-2 text-[11px] uppercase tracking-wider text-muted-foreground";

export default function InvestorForm({
  onSubmit,
  submitLabel = "Submit enquiry",
  backHref = "/contact",
  backLabel = "Back to Contact",
  disabled = false,
}) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    investmentRange: "",
    interestedSectors: "",
    linkedin: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="mx-auto max-w-3xl">
        <Link
          href={backHref}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          &larr; {backLabel}
        </Link>

        <div className="mt-4">
          <span className="text-xs uppercase tracking-[0.2em] text-primary-glow">
            Investor enquiry
          </span>
          <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Tell us about your thesis.
          </h1>
        </div>

        <article className="group glass depth-2 depth-hover hover:border-white/10 relative overflow-hidden rounded-3xl mt-10 p-8 lg:p-10">
          <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
            <div>
              <label className={labelClass}>Full Name</label>
              <input
                className={inputClass}
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className={labelClass}>Email</label>
              <input
                className={inputClass}
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className={labelClass}>Investment Range</label>
              <input
                className={inputClass}
                type="text"
                name="investmentRange"
                value={form.investmentRange}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className={labelClass}>Interested Sectors</label>
              <input
                className={inputClass}
                type="text"
                name="interestedSectors"
                value={form.interestedSectors}
                onChange={handleChange}
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}>LinkedIn</label>
              <input
                className={inputClass}
                type="text"
                name="linkedin"
                value={form.linkedin}
                onChange={handleChange}
              />
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}>Message</label>
              <textarea
                name="message"
                className={`${inputClass} min-h-[120px] resize-y`}
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <div className="md:col-span-2 flex justify-end pt-2">
              <button
                type="submit"
                disabled={disabled}
                className="btn-primary-glow btn-press group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitLabel}
                <ArrowRight className="h-4 w-4 icon-shift" />
              </button>
            </div>
          </form>
        </article>
      </div>
    </section>
  );
}
