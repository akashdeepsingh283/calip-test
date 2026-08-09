"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Search,
  Settings,
  RefreshCw,
  User,
  Wallet,
} from "lucide-react";

const overviewDropdownItems = [
  { label: "Dashboard", href: "/dashboard", key: "dashboard" },
  { label: "Watchlist", href: "/overview", key: "watchlist" },
  { label: "Performance Summary", href: "/performance-summary", key: "performance-summary" },
];

const discoverToolsItems = [
  { label: "Analytics", href: "/analytics", key: "analytics" },
  { label: "AI Insights", href: "/insights", key: "insights" },
  { label: "Trending News", href: "/trending", key: "trending" },
  { label: "Glossary", href: "/glossary", key: "glossary" },
];

const navLinks = [
  { label: "Overview", key: "overview" },
  { label: "Auction", href: "/auction/live", key: "auction" },
  { label: "Companies", href: "/companies", key: "companies" },
  { label: "Founders", href: "/founders", key: "founders" },
];

export default function Navbar({ activePage = "overview" }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toolsDropdownRef = useRef(null);

  const isOverviewActive =
    activePage === "overview" ||
    overviewDropdownItems.some((item) => item.key === activePage);

  const isToolsActive = discoverToolsItems.some((item) => item.key === activePage);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (
        toolsDropdownRef.current &&
        !toolsDropdownRef.current.contains(event.target)
      ) {
        setToolsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="relative z-[9999] w-full border-b border-[#e5e7eb] bg-[#fafaf7]">
      <div className="mx-auto grid h-[95px] max-w-[1440px] grid-cols-1 items-center gap-4 px-[30px] lg:grid-cols-[auto_1fr_auto] lg:gap-0">
        <div className="flex items-center justify-between lg:justify-start">
          <Link href="/" aria-label="Calip home">
            <Image
              src="/caliplogo.png"
              alt="Calip"
              width={95}
              height={40}
              priority
              style={{ width: "auto", height: "40px" }}
            />
          </Link>

          <div className="flex items-center gap-[15px] lg:hidden">
            <button
              type="button"
              className="flex h-[30px] w-[30px] items-center justify-center rounded-[10px] border border-[#e5e7eb] bg-[#f4f5f7]"
              aria-label="Search"
            >
              <Search className="h-5 w-5 text-[#374151]" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-[#e5e7eb] bg-[#f4f5f7]"
              aria-label="Profile"
            >
              <User className="h-5 w-5 text-[#374151]" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <nav className="hidden items-center justify-center gap-[25px] lg:flex">
          {navLinks.map((link) => {
            const isActive = link.key === activePage;
            return link.key === "overview" ? (
              <div key={link.key} className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  aria-expanded={dropdownOpen}
                  className={
                    isOverviewActive
                      ? "flex h-[34px] items-center gap-2 rounded-[10px] bg-[#eef2ff] px-[11px] text-[16px] font-medium text-[#4f46e5]"
                      : "text-[16px] font-medium text-[#4b5563] hover:text-[#1a1a2e]"
                  }
                >
                  <span className="flex items-center gap-2">
                    {link.label}
                    <ChevronDown
                      className={`h-[10px] w-5 transition-transform ${dropdownOpen ? "rotate-180" : ""} ${
                        isOverviewActive ? "text-[#4f46e5]" : "text-[#4b5563]"
                      }`}
                      strokeWidth={2}
                    />
                  </span>
                </button>

                {dropdownOpen && (
                  <div className="absolute left-0 top-full z-[9999] mt-2 w-[200px] rounded-[12px] border border-[#e5e7eb] bg-white p-[6px] shadow-lg">
                    {overviewDropdownItems.map((item) => {
                      const isItemActive = item.key === activePage;
                      return (
                        <Link
                          key={item.key}
                          href={item.href}
                          onClick={() => setDropdownOpen(false)}
                          className={
                            isItemActive
                              ? "flex h-[36px] items-center rounded-[8px] bg-[#eef2ff] px-[11px] text-[15px] font-medium text-[#4f46e5]"
                              : "flex h-[36px] items-center rounded-[8px] px-[11px] text-[15px] font-medium text-[#4b5563] hover:bg-[#f4f5f7] hover:text-[#1a1a2e]"
                          }
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.key}
                href={link.href}
                className={
                  isActive
                    ? "flex h-[34px] items-center gap-2 rounded-[10px] bg-[#eef2ff] px-[11px] text-[16px] font-medium text-[#4f46e5]"
                    : "text-[16px] font-medium text-[#4b5563] hover:text-[#1a1a2e]"
                }
              >
                {link.label}
              </Link>
            );
          })}

          <div className="relative" ref={toolsDropdownRef}>
            <button
              type="button"
              onClick={() => setToolsDropdownOpen((prev) => !prev)}
              aria-expanded={toolsDropdownOpen}
              className={
                isToolsActive
                  ? "flex h-[34px] items-center gap-2 rounded-[10px] bg-[#eef2ff] px-[11px] text-[16px] font-medium text-[#4f46e5]"
                  : "flex items-center gap-2 text-[16px] font-medium text-[#4b5563] hover:text-[#1a1a2e]"
              }
            >
              Discover Tools
              <ChevronDown
                className={`h-[10px] w-5 transition-transform ${toolsDropdownOpen ? "rotate-180" : ""} ${
                  isToolsActive ? "text-[#4f46e5]" : "text-[#4b5563]"
                }`}
                strokeWidth={2}
              />
            </button>

            {toolsDropdownOpen && (
              <div className="absolute left-0 top-full z-[9999] mt-2 w-[200px] rounded-[12px] border border-[#e5e7eb] bg-white p-[6px] shadow-lg">
                {discoverToolsItems.map((item) => {
                  const isItemActive = item.key === activePage;
                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      onClick={() => setToolsDropdownOpen(false)}
                      className={
                        isItemActive
                          ? "flex h-[36px] items-center rounded-[8px] bg-[#eef2ff] px-[11px] text-[15px] font-medium text-[#4f46e5]"
                          : "flex h-[36px] items-center rounded-[8px] px-[11px] text-[15px] font-medium text-[#4b5563] hover:bg-[#f4f5f7] hover:text-[#1a1a2e]"
                      }
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link
            href="/faq"
            className={
              activePage === "faq"
                ? "flex h-[34px] items-center rounded-[10px] bg-[#eef2ff] px-[11px] text-[16px] font-medium text-[#4f46e5]"
                : "text-[16px] font-medium text-[#4b5563] hover:text-[#1a1a2e]"
            }
          >
            FAQs
          </Link>
        </nav>

        <div className="hidden items-center justify-end gap-[15px] lg:flex">
          <button
            type="button"
            className="flex h-[30px] w-[30px] items-center justify-center rounded-[10px] border border-[#e5e7eb] bg-[#f4f5f7] transition-colors hover:bg-[#e5e7eb]"
            aria-label="Search"
          >
            <Search className="h-5 w-5 text-[#374151]" strokeWidth={1.5} />
          </button>

          <Link
            href="/wallet"
            className="flex h-[40px] w-[174px] items-center gap-[5px] rounded-[15px] bg-[#5346ae] px-[13px] text-white transition-colors hover:bg-[#473a99]"
          >
            <Wallet className="h-[25px] w-[25px]" strokeWidth={1.5} />
            <span className="text-[15px] font-medium leading-none">Connect Wallet</span>
          </Link>

          <Link
            href="/settings"
            aria-label="Settings"
            className="flex h-[30px] w-[30px] items-center justify-center rounded-[10px] border border-[#e5e7eb] bg-[#f4f5f7] transition-colors hover:bg-[#e5e7eb]"
          >
            <Settings className="h-5 w-5 text-[#374151]" strokeWidth={1.5} />
          </Link>

          <button
            type="button"
            className="flex h-[30px] w-[30px] items-center justify-center rounded-[10px] border border-[#e5e7eb] bg-[#f4f5f7] transition-colors hover:bg-[#e5e7eb]"
            aria-label="Currency exchange"
          >
            <RefreshCw className="h-5 w-5 text-[#374151]" strokeWidth={1.5} />
          </button>

          <button
            type="button"
            className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-[#e5e7eb] bg-[#f4f5f7] transition-colors hover:bg-[#e5e7eb]"
            aria-label="Profile"
          >
            <User className="h-5 w-5 text-[#374151]" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>
  );
}