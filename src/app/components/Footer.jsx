"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5" role="contentinfo">
      <div
        className="absolute inset-x-0 top-0 h-px"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(139,124,255,0.6), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-1">
            <div className="flex items-center">
              <Image
                src="/caliplogo2.png"
                alt="Calip.io logo"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Calip.io is the Web3-powered investment platform that connects visionary
              startups with individual investors through verified deal flow and AI-driven screening.
            </p>
          </div>

          <nav aria-label="Platform links">
            <h4 className="text-sm font-medium text-foreground">Platform</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground" role="list">
              <li>
                <Link href="/" className="transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 rounded motion-underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 rounded motion-underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 rounded motion-underline">
                  Why Calip.io
                </Link>
              </li>
              <li>
                <Link href="/faq" className="transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 rounded motion-underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 rounded motion-underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/waitlist" className="transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 rounded motion-underline">
                  Waitlist
                </Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="For you links">
            <h4 className="text-sm font-medium text-foreground">For You</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground" role="list">
              <li>
                <Link href="/join/individual-enquiry" className="transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 rounded motion-underline">
                  For Investors
                </Link>
              </li>
              <li>
                <Link href="/startup" className="transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 rounded motion-underline">
                  For Startups
                </Link>
              </li>
              <li>
                <Link href="/join" className="transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 rounded motion-underline">
                  Join Calip.io
                </Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="Legal links">
            <h4 className="text-sm font-medium text-foreground">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground" role="list">
              <li>
                <Link href="/privacy" className="transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 rounded motion-underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 rounded motion-underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security" className="transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 rounded motion-underline">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/legal" className="transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 rounded motion-underline">
                  Legal
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Social media links">
            <h4 className="text-sm font-medium text-foreground">Connect</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground" role="list">
              <li>
                <a href="https://x.com/InfoCalip" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 rounded motion-underline" aria-label="Follow Calip.io on X (Twitter)">
                  X (Twitter)
                </a>
              </li>
              <li>
               
              </li>
              <li>
                <a href="https://www.linkedin.com/company/calip1/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 rounded motion-underline" aria-label="Follow Calip.io on LinkedIn">
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <small>&copy; 2026 Calip.io &mdash; All rights reserved.</small>
          <span>The Web3 platform connecting startups with smart capital.</span>
        </div>
      </div>
    </footer>
  );
}