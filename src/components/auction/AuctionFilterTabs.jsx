"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import AuctionCard from "./AuctionCard";

const tabs = [
  { label: "Live", href: "/auction/live" },
  { label: "Upcoming", href: "/auction/upcoming" },
  { label: "Closed", href: "/auction/closed" },
];

const sectors = [
  "All Sectors",
  "FinTech",
  "CleanTech",
  "HealthTech",
  "DevTools",
  "Aerospace",
  "CyberSecurity",
  "AI/ML",
  "BioTech",
  "SpaceTech",
  "Big Data",
  "Energy",
  "Gaming",
];

export default function AuctionFilterTabs({ activeTab, auctions = [] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState("All Sectors");

  const filteredAuctions = useMemo(() => {
    return auctions.filter((auction) => {
      const matchesSearch =
        !searchQuery ||
        auction.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        auction.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
        auction.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSector =
        selectedSector === "All Sectors" || auction.sector === selectedSector;

      return matchesSearch && matchesSector;
    });
  }, [auctions, searchQuery, selectedSector]);

  const gridCols = "grid-cols-1 gap-x-[40px] gap-y-[17px] items-stretch md:grid-cols-2 xl:grid-cols-3";

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-[14px]">
        {tabs.map((tab) => {
          const isActive = tab.label.toLowerCase() === activeTab.toLowerCase();
          return (
            <Link
              key={tab.label}
              href={tab.href}
              className={`inline-flex h-[34px] items-center rounded-[6px] px-[14px] text-[15px] font-medium leading-none transition-colors ${
                isActive
                  ? "bg-[#6366f1] text-white"
                  : "border border-[#d1d5db] bg-white text-[#374151] hover:bg-[#f9fafb]"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9ca3af] sm:left-[14px]" strokeWidth={2} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search auctions..."
            className="w-full rounded-lg border border-[#e5e7eb] bg-white py-3 pl-10 pr-4 text-[14px] text-[#1a1a2e] placeholder:text-[#9ca3af] focus:border-[#6366f1] focus:outline-none sm:pl-[42px]"
          />
        </div>

        <select
          value={selectedSector}
          onChange={(e) => setSelectedSector(e.target.value)}
          className="rounded-lg border border-[#e5e7eb] bg-white px-4 py-3 text-[14px] text-[#374151] focus:border-[#6366f1] focus:outline-none"
        >
          {sectors.map((sector) => (
            <option key={sector} value={sector}>
              {sector}
            </option>
          ))}
        </select>
      </div>

      {filteredAuctions.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-[15px] text-[#6b7280]">No auctions found matching your criteria.</p>
        </div>
      ) : (
        <div className={`mt-[30px] grid ${gridCols}`}>
          {filteredAuctions.map((item) => (
            <AuctionCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
