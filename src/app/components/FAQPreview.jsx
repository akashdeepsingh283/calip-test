"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FAQAccordion from "./FAQAccordion";
import ScrollReveal from "./ScrollReveal";
import { featuredFaqs } from "../lib/faqs";

export default function FAQPreview() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-preview-heading"
      className="relative mx-auto mt-20 max-w-7xl px-6"
    >
      <div className="max-w-4xl mx-auto">
        <ScrollReveal delay={0}>
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span
              className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(139,124,255,0.8)]"
              aria-hidden="true"
            />
            FAQ
          </span>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2
            id="faq-preview-heading"
            className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl"
          >
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <div className="mt-10">
            <FAQAccordion items={featuredFaqs} defaultOpen={0} />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/faq"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary-glow transition-colors hover:text-foreground"
            >
              View All FAQs
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}