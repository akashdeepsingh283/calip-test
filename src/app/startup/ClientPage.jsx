"use client";

import BackgroundEffects from "../components/BackgroundEffects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RegisterStartupForm from "./RegisterStartupForm";
import ScrollReveal from "../components/ScrollReveal";
import GlowField from "../components/GlowField";
import { Sparkles } from "lucide-react";

export default function StartupClient() {
  return (
    <>
      <BackgroundEffects />
      <Navbar />
      <main className="relative pt-32 pb-20 page-enter">
        <section className="mx-auto max-w-4xl px-6" aria-labelledby="startup-reg-heading">
          <div className="text-center mb-12">
            <ScrollReveal delay={0}>
              <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                Startup Registration
              </span>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <h1 id="startup-reg-heading" className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Register Your{" "}
                <span className="text-gradient">Startup</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <p className="mt-4 max-w-2xl mx-auto text-base text-muted-foreground md:text-lg">
                Join Calip.io and get access to verified investors, AI-powered visibility, and Web3-native growth infrastructure.
              </p>
            </ScrollReveal>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-20 overflow-hidden -z-10" aria-hidden="true">
              <GlowField position="top-center" size={500} intensity="medium" />
            </div>

            <RegisterStartupForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
