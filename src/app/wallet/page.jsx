"use client";

import { Wallet, Sparkles, ArrowLeft } from "lucide-react";
import GlowField from "../components/GlowField";

/*
  Metadata is handled by the parent server component pattern.
  This page inherits SEO metadata from its layout.
*/

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0b0f] text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* base */}
        <div className="absolute inset-0 bg-background" />

        {/* single rotating glow field */}
        <GlowField position="top-center" size={800} intensity="low" />

        {/* grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-5xl">
          <div className="glass-strong relative overflow-hidden rounded-[32px] border border-white/10 p-10 md:p-16">

            {/* inner glow */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(139,124,255,0.08), transparent 30%, transparent 70%, rgba(139,124,255,0.05))",
              }}
            />

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center relative">

              {/* LEFT */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs text-muted-foreground">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Wallet infrastructure in progress
                </div>

                <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                  Premium wallet
                  <span className="block text-gradient">
                    experience coming.
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                  Secure wallet authentication, seamless Web3 onboarding, and
                  premium investor-grade transaction infrastructure are currently
                  being crafted.
                </p>

                <div className="mt-10 grid grid-cols-3 gap-4">
                  <div className="glass rounded-2xl p-4">
                    <div className="text-xs text-muted-foreground">Security</div>
                    <div className="mt-2 font-display text-lg">Bank Grade</div>
                  </div>

                  <div className="glass rounded-2xl p-4">
                    <div className="text-xs text-muted-foreground">Support</div>
                    <div className="mt-2 font-display text-lg">MetaMask+</div>
                  </div>

                  <div className="glass rounded-2xl p-4">
                    <div className="text-xs text-muted-foreground">Status</div>
                    <div className="mt-2 font-display text-lg text-primary">
                      Building
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => window.history.back()}
                  className="btn-primary-glow mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Platform
                </button>
              </div>

              {/* RIGHT */}
              <div className="relative flex items-center justify-center">
                <div className="relative aspect-square w-full max-w-[420px]">

                  {/* glow */}
                  <GlowField position="center" size={420} intensity="medium" />

                  {/* rotating rings */}
                  <div className="absolute inset-8 rounded-full border border-white/10 animate-spin [animation-duration:25s]" />
                  <div className="absolute inset-16 rounded-full border border-primary/20 animate-spin [animation-duration:15s] [animation-direction:reverse]" />

                  {/* center glass icon */}
                  <div className="absolute inset-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-3xl glass-strong flex items-center justify-center">
                    <Wallet className="h-16 w-16 text-primary" />
                  </div>

                  {/* floating mini cards */}
                  <div className="absolute top-10 right-6 glass-strong rounded-2xl px-4 py-3 text-xs">
                    <div className="text-muted-foreground">Wallets</div>
                    <div className="font-display text-lg">4+</div>
                  </div>

                  <div className="absolute bottom-10 left-2 glass-strong rounded-2xl px-4 py-3 text-xs">
                    <div className="text-muted-foreground">Security</div>
                    <div className="font-display text-lg text-primary">99.9%</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}