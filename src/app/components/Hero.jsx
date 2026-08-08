"use client";

import { Sparkles, ArrowRight, TrendingUp, BadgeCheck, ShoppingBag, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useLenis } from "./SmoothScroll";
import ScrollReveal from "./ScrollReveal";
import { useChat } from "../context/ChatContext";

export default function Hero() {
  const lenisCtx = useLenis();
  const scrollTo = lenisCtx?.scrollTo;
  const { openChat } = useChat();
  const orbRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let scrollY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let rafId = null;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const update = () => {
      if (orbRef.current) {
        const tx = mouseX * 6;
        const ty = scrollY * 0.08 + mouseY * 4;
        orbRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      }
      cardsRef.current.forEach((el, i) => {
        if (!el) return;
        const depth = (i + 1) * 1.5;
        const tx = mouseX * depth;
        const ty = mouseY * depth;
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      });
      rafId = null;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
      if (!rafId) rafId = requestAnimationFrame(update);
    };

    const handleMouse = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseX = (e.clientX - cx) / cx;
      mouseY = (e.clientY - cy) / cy;
      if (!rafId) rafId = requestAnimationFrame(update);
    };

    if (!reduced) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("mousemove", handleMouse, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouse);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="relative mx-auto max-w-7xl px-6" aria-labelledby="hero-heading">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground" role="status">
              <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              <span>The new era of startup capital</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h1 id="hero-heading" className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-[5.2rem]">
              Discover <br /> Trade <span className="font-sans">&</span> Track{" "}
              <span className="text-gradient">Startup Opportunities</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Explore verified startups and buy, sell, and trade Startup Performance Tokens through a transparent next-generation platform.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/startup"
                className="btn-primary-glow btn-press group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
              >
                Register Your Startup
                <ArrowRight className="h-4 w-4 icon-shift" aria-hidden="true" />
              </Link>
              <Link
                href="/join/individual-enquiry"
                className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 btn-press"
              >
                Register as an Investor
              </Link>
              <button
                onClick={() => {
                  const el = document.getElementById("what");
                  if (el) scrollTo(el, { offset: 0 });
                }}
                className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 btn-press"
                aria-label="Explore the Calip.io ecosystem section"
              >
                Learn More
              </button>
              <button
                onClick={openChat}
                className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:bg-white/10 hover:text-primary-glow focus:outline-none focus:ring-2 focus:ring-primary/50 btn-press"
                aria-label="Chat with Calip AI assistant"
              >
                <MessageCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                Chat With Calip AI
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={320}>
            <div className="mt-14 grid max-w-md grid-cols-3 gap-6" aria-label="Key metrics" />
          </ScrollReveal>
        </div>

        <ScrollReveal delay={160} className="relative lg:col-span-5">
          <div ref={orbRef} className="relative aspect-square will-change-transform">
            <div
              className="absolute inset-0 rounded-full opacity-70 blur-3xl"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(139,124,255,0.55), transparent 60%)",
              }}
            />
            <Image
              src="/hero-orb.png"
              alt="Calip.io platform — AI-powered startup investment ecosystem visualization"
              width={1024}
              height={1024}
              className="relative z-10 h-full w-full object-contain animate-float-slow"
              style={{ transform: "rotate(19.224deg)" }}
              priority
              sizes="(max-width: 768px) 100vw, 42vw"
            />

            <div
              ref={(el) => (cardsRef.current[0] = el)}
              className="absolute right-4 top-8 z-20 group cursor-default will-change-transform"
            >
              <div className="glass-strong motion-lift rounded-2xl px-4 py-3 text-xs transition-colors duration-500 ease-out group-hover:border-primary/30">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BadgeCheck className="h-3.5 w-3.5 text-emerald-400" />
                  Verified Startups
                </div>
                <div className="mt-1 font-display text-2xl font-bold text-primary place-self-center">50+</div>
              </div>
            </div>

            <div
              ref={(el) => (cardsRef.current[1] = el)}
              className="absolute bottom-16 left-0 z-20 group cursor-default will-change-transform"
            >
              <div className="glass-strong motion-lift rounded-2xl px-4 py-3 text-xs transition-colors duration-500 ease-out group-hover:border-primary/30">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                  AI Startup Analysis
                </div>
                <div className="mt-1 flex items-center gap-1.5 font-display text-primary text-lg font-semibold place-self-center">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-soft-pulse" />
                  Live
                </div>
              </div>
            </div>

            <div
              ref={(el) => (cardsRef.current[2] = el)}
              className="absolute bottom-8 right-4 z-20 group cursor-default will-change-transform"
            >
              <div className="glass-strong motion-lift rounded-2xl px-4 py-3 text-xs transition-colors duration-500 ease-out group-hover:border-primary/30">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <ShoppingBag className="h-3.5 w-3.5 text-primary-glow" />
                  Token Marketplace
                </div>
                <div className="mt-1 font-display text-base font-semibold text-primary place-self-center">Coming Soon</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}