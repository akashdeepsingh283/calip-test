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

const navLinks = [
  { label: "Overview", href: "/overview", key: "overview" },
  { label: "Auction", href: "/auction/live", key: "auction" },
  { label: "Companies", href: "/companies", key: "companies" },
  { label: "Founders", href: "/founders", key: "founders" },
];

export default function Navbar({ activePage = "overview" }) {
  return (
    <header className="w-full border-b border-[#e5e7eb] bg-[#fafaf7]">
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
            return (
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
                {link.key === "overview" && (
                  <ChevronDown
                    className={`h-[10px] w-5 ${isActive ? "text-[#4f46e5]" : "text-[#4b5563]"}`}
                    strokeWidth={2}
                  />
                )}
              </Link>
            );
          })}

          <button
            type="button"
            className="flex items-center gap-2 text-[16px] font-medium text-[#4b5563]"
          >
            Discover Tools
            <ChevronDown className="h-[10px] w-5 text-[#4b5563]" strokeWidth={2} />
          </button>

          <a
            href="#"
            className="text-[16px] font-medium text-[#4b5563] hover:text-[#1a1a2e]"
          >
            FAQs
          </a>
        </nav>

        <div className="hidden items-center justify-end gap-[15px] lg:flex">
          <button
            type="button"
            className="flex h-[30px] w-[30px] items-center justify-center rounded-[10px] border border-[#e5e7eb] bg-[#f4f5f7] transition-colors hover:bg-[#e5e7eb]"
            aria-label="Search"
          >
            <Search className="h-5 w-5 text-[#374151]" strokeWidth={1.5} />
          </button>

          <button
            type="button"
            className="flex h-[40px] w-[174px] items-center gap-[5px] rounded-[15px] bg-[#5346ae] px-[13px] text-white transition-colors hover:bg-[#473a99]"
          >
            <Wallet className="h-[25px] w-[25px]" strokeWidth={1.5} />
            <span className="text-[15px] font-medium leading-none">Connect Wallet</span>
          </button>

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
