"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowRight, MessageCircle } from "lucide-react";
import BackgroundEffects from "../components/BackgroundEffects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQAccordion from "../components/FAQAccordion";
import ScrollReveal from "../components/ScrollReveal";
import EnergyCircuit from "../components/EnergyCircuit";
import { useChat } from "../context/ChatContext";
import { faqCategories } from "../lib/faqs";

const categoryTabs = [
  { id: "all", name: "All" },
  ...faqCategories.map((cat) => ({ id: cat.id, name: cat.name })),
];

export default function FAQClientPage() {
  const { openChat } = useChat();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    let cats = faqCategories;

    if (activeCategory !== "all") {
      cats = cats.filter((c) => c.id === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      cats = cats
        .map((cat) => ({
          ...cat,
          items: cat.items.filter(
            (item) =>
              item.question.toLowerCase().includes(q) ||
              item.answer.toLowerCase().includes(q)
          ),
        }))
        .filter((cat) => cat.items.length > 0);
    }

    return cats;
  }, [activeCategory, searchQuery]);

  const showCategoryHeaders =
    activeCategory === "all" && !searchQuery.trim();

  return (
    <>
      <BackgroundEffects />
      <Navbar />
      <main className="relative pt-32 pb-20 page-enter">
        <section className="mx-auto max-w-7xl px-6">
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
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Frequently Asked Questions
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="mt-4 max-w-3xl text-base text-muted-foreground md:text-lg">
              Everything you need to know about Calip.io, Startup Performance
              Tokens, startup onboarding, platform security, participation, and
              ecosystem features.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <div className="mt-10 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search frequently asked questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="faq-search-input w-full rounded-xl bg-white/[0.03] border border-white/[0.08] py-3.5 pl-11 pr-4 text-sm text-foreground outline-none transition-all focus:border-primary/60 focus:bg-white/[0.06] focus:ring-4 focus:ring-primary/15 placeholder:text-muted-foreground"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={320}>
            <div className="mt-8 flex flex-wrap gap-2">
              {categoryTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                    activeCategory === tab.id
                      ? "bg-white/10 text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="mt-12 max-w-4xl">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((cat, catIndex) => (
                <div
                  key={cat.id}
                  className={catIndex > 0 ? "mt-14" : ""}
                >
                  {showCategoryHeaders && (
                    <div className="mb-6">
                      <span className="text-xs uppercase tracking-[0.22em] text-primary-glow">
                        {cat.name}
                      </span>
                    </div>
                  )}
                  <FAQAccordion
                    items={cat.items}
                    defaultOpen={catIndex === 0 ? 0 : -1}
                  />
                </div>
              ))
            ) : (
              <div className="py-16 text-center">
                <p className="text-muted-foreground">
                  No results found for &quot;{searchQuery}&quot;
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-3 text-sm text-primary-glow hover:text-foreground transition-colors"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </section>

        <section
          aria-labelledby="faq-cta-heading"
          className="relative mt-32 mb-0"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="btn-energy relative overflow-hidden rounded-[2rem] glass-strong cta-emphasis py-16 px-8 md:py-20 md:px-14 text-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(139,124,255,0.12), transparent 70%)",
                }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(139,124,255,0.4), transparent)",
                }}
              />
              <EnergyCircuit filterId="faq" />
              <ScrollReveal delay={0}>
                <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(139,124,255,0.8)]"
                    aria-hidden="true"
                  />
                  Still have questions?
                </span>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <h2
                  id="faq-cta-heading"
                  className="mt-6 font-display text-3xl font-semibold leading-tight md:text-5xl"
                >
                  Still Have Questions?
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <p className="mt-4 mx-auto max-w-lg text-base text-muted-foreground md:text-lg">
                  Need more information about Calip.io, Startup Performance
                  Tokens, onboarding, or platform features?
                </p>
              </ScrollReveal>
              <ScrollReveal delay={240}>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full glass px-8 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 btn-press"
                  >
                    Contact Us
                  </Link>
                  <button
                    onClick={openChat}
                    className="inline-flex items-center gap-2 rounded-full glass px-8 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-white/10 hover:text-primary-glow focus:outline-none focus:ring-2 focus:ring-primary/50 btn-press"
                  >
                    <MessageCircle className="h-4 w-4 text-primary" />
                    Chat With Calip AI
                  </button>
                  <Link
                    href="/startup"
                    className="btn-primary-glow btn-press group inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
                  >
                    Register Your Startup
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}