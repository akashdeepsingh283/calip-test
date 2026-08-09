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
  Menu,
  X,
  ShieldCheck,
} from "lucide-react";
import WalletModal from "../wallet/WalletModal";

const overviewDropdownItems = [
  { label: "Dashboard", href: "/dashboard", key: "dashboard" },
  { label: "Watchlist", href: "/overview", key: "watchlist" },
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [walletModalOpen, setWalletModalOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [isKYCVerified, setIsKYCVerified] = useState(false);
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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        type="button"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        className="fixed top-4 left-4 z-[10000] flex h-[40px] w-[40px] items-center justify-center rounded-lg bg-white border border-[#e5e7eb] shadow-lg lg:hidden"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? (
          <X className="h-5 w-5 text-[#374151]" strokeWidth={1.5} />
        ) : (
          <Menu className="h-5 w-5 text-[#374151]" strokeWidth={1.5} />
        )}
      </button>

      {/* Desktop Navbar */}
      <header className="relative z-[9999] hidden w-full border-b border-[#e5e7eb] bg-[#fafaf7] lg:block">
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
          </div>

          <nav className="flex items-center justify-center gap-[25px]">
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

          <div className="flex items-center justify-end gap-[15px]">
            <button
              type="button"
              className="flex h-[30px] w-[30px] items-center justify-center rounded-[10px] border border-[#e5e7eb] bg-[#f4f5f7] transition-colors hover:bg-[#e5e7eb]"
              aria-label="Search"
            >
              <Search className="h-5 w-5 text-[#374151]" strokeWidth={1.5} />
            </button>

            <div className="relative flex items-center gap-2">
              <button
                type="button"
                onClick={() => setWalletModalOpen((prev) => !prev)}
                className="flex h-[40px] items-center gap-[5px] rounded-[15px] bg-[#5346ae] px-[13px] text-white transition-colors hover:bg-[#473a99]"
              >
                <Wallet className="h-[25px] w-[25px]" strokeWidth={1.5} />
                <span className="text-[15px] font-medium leading-none">
                  {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : "Connect Wallet"}
                </span>
              </button>
              {walletAddress && (
                <div className="flex items-center gap-1 rounded-full border border-[#10b981] bg-[#10b981]/10 px-2 py-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#10b981]" strokeWidth={2} />
                  <span className="text-[11px] font-medium text-[#10b981]">KYC</span>
                </div>
              )}
              <WalletModal
                isOpen={walletModalOpen}
                onClose={() => setWalletModalOpen(false)}
                onConnect={(address) => setWalletAddress(address)}
              />
            </div>

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

      {/* Mobile Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-[9999] w-[280px] border-r border-[#e5e7eb] bg-white shadow-xl transition-transform duration-300 lg:hidden ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-full flex-col">
          <div className="flex h-[70px] items-center justify-center border-b border-[#e5e7eb]">
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
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <div className="flex flex-col gap-2">
              <Link
                href="/overview"
                className={`flex h-[44px] items-center rounded-[10px] px-[14px] text-[15px] font-medium ${
                  activePage === "overview" || activePage === "dashboard" || activePage === "watchlist"
                    ? "bg-[#8b7cff] text-white"
                    : "text-[#374151] hover:bg-[#f3f4f6]"
                }`}
              >
                Overview
              </Link>
              <Link
                href="/auction/live"
                className={`flex h-[44px] items-center rounded-[10px] px-[14px] text-[15px] font-medium ${
                  activePage === "auction"
                    ? "bg-[#8b7cff] text-white"
                    : "text-[#374151] hover:bg-[#f3f4f6]"
                }`}
              >
                Auction
              </Link>
              <Link
                href="/companies"
                className={`flex h-[44px] items-center rounded-[10px] px-[14px] text-[15px] font-medium ${
                  activePage === "companies"
                    ? "bg-[#8b7cff] text-white"
                    : "text-[#374151] hover:bg-[#f3f4f6]"
                }`}
              >
                Companies
              </Link>
              <Link
                href="/founders"
                className={`flex h-[44px] items-center rounded-[10px] px-[14px] text-[15px] font-medium ${
                  activePage === "founders"
                    ? "bg-[#8b7cff] text-white"
                    : "text-[#374151] hover:bg-[#f3f4f6]"
                }`}
              >
                Founders
              </Link>

              <div className="mt-[10px] border-t border-[#e5e7eb] pt-[10px]">
                <p className="mb-[6px] px-[14px] text-[12px] font-semibold uppercase tracking-[0.1em] text-[#9ca3af]">
                  Discover Tools
                </p>
                <Link
                  href="/analytics"
                  className={`flex h-[40px] items-center rounded-[10px] px-[14px] text-[14px] font-medium ${
                    activePage === "analytics"
                      ? "bg-[#8b7cff] text-white"
                      : "text-[#374151] hover:bg-[#f3f4f6]"
                  }`}
                >
                  Analytics
                </Link>
                <Link
                  href="/insights"
                  className={`flex h-[40px] items-center rounded-[10px] px-[14px] text-[14px] font-medium ${
                    activePage === "insights"
                      ? "bg-[#8b7cff] text-white"
                      : "text-[#374151] hover:bg-[#f3f4f6]"
                  }`}
                >
                  AI Insights
                </Link>
                <Link
                  href="/trending"
                  className={`flex h-[40px] items-center rounded-[10px] px-[14px] text-[14px] font-medium ${
                    activePage === "trending"
                      ? "bg-[#8b7cff] text-white"
                      : "text-[#374151] hover:bg-[#f3f4f6]"
                  }`}
                >
                  Trending News
                </Link>
                <Link
                  href="/glossary"
                  className={`flex h-[40px] items-center rounded-[10px] px-[14px] text-[14px] font-medium ${
                    activePage === "glossary"
                      ? "bg-[#8b7cff] text-white"
                      : "text-[#374151] hover:bg-[#f3f4f6]"
                  }`}
                >
                  Glossary
                </Link>
              </div>

              <div className="mt-[10px] border-t border-[#e5e7eb] pt-[10px]">
                <Link
                  href="/faq"
                  className={`flex h-[44px] items-center rounded-[10px] px-[14px] text-[15px] font-medium ${
                    activePage === "faq"
                      ? "bg-[#8b7cff] text-white"
                      : "text-[#374151] hover:bg-[#f3f4f6]"
                  }`}
                >
                  FAQs
                </Link>
              </div>
            </div>
          </nav>

          <div className="border-t border-[#e5e7eb] p-4">
            <button
              type="button"
              onClick={() => setWalletModalOpen(true)}
              className="flex h-[44px] w-full items-center justify-center gap-2 rounded-[12px] bg-[#8b7cff] text-white"
            >
              <Wallet className="h-[20px] w-[20px]" strokeWidth={1.5} />
              <span className="text-[15px] font-medium">
                {walletAddress ? "Wallet Connected" : "Connect Wallet"}
              </span>
            </button>
          </div>
        </div>
      </aside>

      {/* Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[9998] bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
