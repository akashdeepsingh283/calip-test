"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLenis } from "./SmoothScroll";
import { Menu, X, ChevronDown, Briefcase, Rocket } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const scrollRef = useRef({ lastY: 0, lastVisible: true });
  const registerRef = useRef(null);
  const pathname = usePathname();
  const lenisCtx = useLenis();
  const scrollTo = lenisCtx?.scrollTo;
  const stop = lenisCtx?.stop;
  const start = lenisCtx?.start;

  useEffect(() => {
    const handleClick = (e) => {
      if (registerRef.current && !registerRef.current.contains(e.target)) {
        setRegisterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    if (!registerOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") setRegisterOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [registerOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.classList.add("menu-open");
      stop();
    } else {
      document.documentElement.classList.remove("menu-open");
      start();
    }
    return () => {
      document.documentElement.classList.remove("menu-open");
      start();
    };
  }, [menuOpen, stop, start]);

  useEffect(() => {
    const SCROLL_THRESHOLD = 5;
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY <= 0) {
        setVisible(true);
        scrollRef.current.lastY = 0;
        scrollRef.current.lastVisible = true;
      } else {
        const diff = currentY - scrollRef.current.lastY;
        if (diff > SCROLL_THRESHOLD) {
          setVisible(false);
          scrollRef.current.lastVisible = false;
        } else if (diff < -SCROLL_THRESHOLD) {
          setVisible(true);
          scrollRef.current.lastVisible = true;
        }
      }
      scrollRef.current.lastY = currentY;
      setScrolled(currentY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = (e) => {
    if (pathname === "/") {
      e.preventDefault();
      scrollTo(0);
    }
    setMenuOpen(false);
  };

  return (
    <>
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-md bg-black/60 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <header
        role="banner"
        className={`fixed inset-x-0 top-4 z-50 px-4 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          visible ? "translate-y-0" : "-translate-y-[calc(100%+1rem)]"
        } ${scrolled ? "top-2" : "top-4"}`}
      >
        
        <div className="hidden md:grid grid-cols-3 items-center max-w-7xl mx-auto">
          <div className="flex justify-start">
            <Link href="/" className="flex items-center" onClick={handleHomeClick} aria-label="Calip.io home">
              <Image
                src="/caliplogo2.png"
                alt="Calip.io logo"
                width={500}
                height={170}
                className={`h-20 w-auto transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}
                priority
              />
            </Link>
          </div>

          <div className="flex justify-center">
            <nav aria-label="Main navigation" className={`flex items-center gap-1 rounded-full px-4 py-2 transition-all duration-300 ${scrolled ? "glass-strong navbar-scrolled" : "glass-strong"}`}>
              <ul className="flex items-center gap-1" role="list">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={link.href === "/" ? handleHomeClick : undefined}
                        aria-current={isActive ? "page" : undefined}
                        className={`nav-link rounded-full px-4 py-1.5 text-sm transition-colors duration-200 ${
                          isActive
                            ? "active text-foreground bg-white/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="flex justify-end relative" ref={registerRef}>
            <button
              onClick={() => setRegisterOpen((p) => !p)}
              className="btn-primary-glow btn-press inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-medium text-white"
              aria-haspopup="true"
              aria-expanded={registerOpen}
            >
              Register
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  registerOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            {registerOpen && (
              <div
                className="register-dropdown absolute top-full right-0 mt-2 w-56 rounded-xl border border-white/[0.1] bg-[#0d0d14]/95 backdrop-blur-md shadow-[0_8px_40px_rgba(0,0,0,0.4)] overflow-hidden z-50"
                role="menu"
              >
                <Link
                  href="/startup"
                  onClick={() => setRegisterOpen(false)}
                  className="flex items-center gap-3 px-4 py-3.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition-colors duration-150 border-b border-white/[0.04]"
                  role="menuitem"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                    <Rocket className="h-4 w-4 text-primary-glow" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">Register as a Startup</p>
                    <p className="text-[11px] text-muted-foreground">Create your startup profile</p>
                  </div>
                </Link>
                <Link
                  href="/join/individual-enquiry"
                  onClick={() => setRegisterOpen(false)}
                  className="flex items-center gap-3 px-4 py-3.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition-colors duration-150"
                  role="menuitem"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                    <Briefcase className="h-4 w-4 text-primary-glow" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">Register as an Investor</p>
                    <p className="text-[11px] text-muted-foreground">Access curated deal flow</p>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile: logo + hamburger */}
        <nav className={`md:hidden flex items-center justify-between rounded-full pl-4 pr-2 py-2 transition-all duration-300 ${scrolled ? "glass-strong navbar-scrolled" : "glass-strong"}`}>
          <Link href="/" className="flex items-center" onClick={handleHomeClick} aria-label="Calip.io home">
            <Image
              src="/caliplogo2.png"
              alt="Calip.io logo"
              width={180}
              height={42}
              className={`w-auto transition-all duration-300 ${scrolled ? "h-8" : "h-10"}`}
              priority
            />
          </Link>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="p-2 text-foreground rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {menuOpen && (
          <div
            id="mobile-menu"
            className="absolute top-full left-4 right-4 mt-2 rounded-2xl p-4 md:hidden border border-white/10 backdrop-blur-md bg-black/25"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-1" role="list">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={link.href === "/" ? handleHomeClick : () => setMenuOpen(false)}
                      aria-current={isActive ? "page" : undefined}
className={`nav-link rounded-full px-4 py-2.5 text-sm transition-colors block ${
                      isActive
                        ? "active text-foreground bg-white/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
              <li className="flex flex-col gap-2 mt-1">
                <Link
                  href="/startup"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 rounded-full glass px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-white/10"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                    <Rocket className="h-3.5 w-3.5 text-primary-glow" />
                  </span>
                  <span className="font-medium">Register as a Startup</span>
                </Link>
                <Link
                  href="/join/individual-enquiry"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 rounded-full glass px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-white/10"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                    <Briefcase className="h-3.5 w-3.5 text-primary-glow" />
                  </span>
                  <span className="font-medium">Register as an Investor</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}