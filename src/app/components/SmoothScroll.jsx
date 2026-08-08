"use client";

import { createContext, useContext, useEffect, useRef, useCallback, useMemo } from "react";
import Lenis from "lenis";

const LenisContext = createContext(null);

export function useLenis() {
  return useContext(LenisContext);
}

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Premium, ultra-smooth feel (Apple/Linear/Stripe-tier):
    // - lerp ≈ 0.075 → longer exponential smoothing tail → buttery glide
    //   while still glued to input (no float / no rubber-band).
    // - autoRaf: false → we drive a manual rAF loop with the native
    //   high-resolution timestamp so it scales to high-refresh displays
    //   (120Hz / 240Hz) where each frame is a smaller, smoother delta,
    //   giving a perceptually >60fps scroll.
    // - syncTouch stays false to avoid iOS rubber-band / scroll jank.
    // - touchMultiplier bumped for fluid trackpad / touch momentum.
    const lenis = new Lenis({
      lerp: reduced ? 1 : 0.075,
      duration: reduced ? 0 : 1.1,
      easing: reduced
        ? (t) => t
        : (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.5,
      wheelMultiplier: 1,
      autoRaf: false,
      anchors: { offset: -80 },
      prevent: (node) =>
        node?.hasAttribute?.("data-lenis-prevent") ||
        node?.closest?.("[data-lenis-prevent]") !== null,
    });

    lenisRef.current = lenis;

    // Manual rAF loop — native timestamp → frame-rate adaptive.
    let rafId = 0;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Debounced resize keeps scroll metrics in sync without thrashing.
    let resizeTimer = null;
    const handleResize = () => {
      if (resizeTimer) cancelAnimationFrame(resizeTimer);
      resizeTimer = requestAnimationFrame(() => {
        lenis.resize();
        resizeTimer = null;
      });
    };
    window.addEventListener("resize", handleResize, { passive: true });

    // Pause when tab hidden — saves CPU/GPU and avoids jump on return.
    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      } else if (!rafId) {
        rafId = requestAnimationFrame(raf);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(rafId);
      if (resizeTimer) cancelAnimationFrame(resizeTimer);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = useCallback((target, options) => {
    const instance = lenisRef.current;
    if (instance && typeof instance.scrollTo === "function") {
      instance.scrollTo(target, { offset: 0, ...options });
    }
  }, []);

  const stop = useCallback(() => {
    const instance = lenisRef.current;
    if (instance && typeof instance.stop === "function") {
      instance.stop();
    }
  }, []);

  const start = useCallback(() => {
    const instance = lenisRef.current;
    if (instance && typeof instance.start === "function") {
      instance.start();
    }
  }, []);

  const value = useMemo(
    () => ({ scrollTo, stop, start, lenis: lenisRef }),
    [scrollTo, stop, start]
  );

  return (
    <LenisContext.Provider value={value}>
      {children}
    </LenisContext.Provider>
  );
}