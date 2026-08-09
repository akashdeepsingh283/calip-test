"use client";

import { useMemo, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { companiesData } from "./companiesMockData";

const columns = [
  { key: "name", label: "Company" },
  { key: "price", label: "Price (₹)" },
  { key: "tokenPrice", label: "Token Price (₹)" },
  { key: "domain", label: "Sector" },
  { key: "status", label: "Status" },
];

export default function CompaniesTable() {
  const [sortKey, setSortKey] = useState(null);
  const [sortDir, setSortDir] = useState("asc");

  const sortedRows = useMemo(() => {
    if (!sortKey) return companiesData;
    const rows = [...companiesData];
    rows.sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      const cmp =
        typeof aVal === "number"
          ? aVal - bVal
          : String(aVal).localeCompare(String(bVal));
      return sortDir === "asc" ? cmp : -cmp;
    });
    return rows;
  }, [sortKey, sortDir]);

  function handleSort(key) {
    if (key === sortKey) {
      setSortDir((dir) => (dir === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  return (
    <div className="w-full rounded-[16px] border border-[#f0f0f0] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <div className="px-4 pb-[20px] pt-[30px] sm:px-[72px]">
        <h2 className="text-[20px] font-semibold leading-none text-[#1a1a2e]">
          Market
        </h2>

        {/* Desktop header */}
        <div className="mt-[12px] hidden grid-cols-[50px_279px_237px_249px_323px_1fr] items-center md:grid">
          <div />
          {columns.map((col) => {
            const isActive = col.key === sortKey;
            const isName = col.key === "name";
            return (
              <button
                key={col.key}
                type="button"
                onClick={() => handleSort(col.key)}
                className={`flex items-center gap-1 text-left text-[15px] leading-none text-[#9ca3af] transition-colors hover:text-[#6366f1] ${
                  isName ? "pl-[20px]" : ""
                }`}
              >
                {col.label}
                {isActive ? (
                  sortDir === "asc" ? (
                    <ChevronUp
                      className="h-4 w-4 text-[#6366f1]"
                      strokeWidth={2}
                    />
                  ) : (
                    <ChevronDown
                      className="h-4 w-4 text-[#6366f1]"
                      strokeWidth={2}
                    />
                  )
                ) : (
                  <ChevronDown className="h-4 w-4" strokeWidth={2} />
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-[10px] hidden border-t border-[#e5e7eb] md:block" />

        {/* Mobile card view */}
        <div className="mt-4 flex flex-col gap-3 md:hidden">
          {sortedRows.map((row) => (
            <div key={row.id} className="rounded-lg border border-[#e5e7eb] p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-lg bg-[#eef2ff] text-[16px] font-semibold text-[#6366f1]">
                    {row.initial}
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold text-[#1a1a2e]">{row.name}</p>
                    <p className="text-[13px] text-[#6b7280]">{row.domain}</p>
                  </div>
                </div>
                <span
                  className={`text-[14px] font-medium ${
                    row.status === "Listed"
                      ? "text-[#10b981]"
                      : "text-[#ef4444]"
                  }`}
                >
                  {row.status}
                </span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div>
                  <p className="text-[12px] text-[#9ca3af]">Price</p>
                  <p className="text-[14px] font-medium text-[#1a1a2e]">₹{row.price.toLocaleString("en-IN")}</p>
                </div>
                <div>
                  <p className="text-[12px] text-[#9ca3af]">Token Price</p>
                  <p className="text-[14px] font-medium text-[#8b7cff]">₹{row.tokenPrice.toLocaleString("en-IN")}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop table view */}
        <div className="hidden md:block">
          {sortedRows.map((row, index) => (
            <div key={row.id}>
              <div className="grid h-[50px] grid-cols-[50px_279px_237px_249px_323px_1fr] items-center">
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-lg bg-[#eef2ff] text-[20px] font-semibold text-[#6366f1]">
                  {row.initial}
                </div>

                <span className="pl-[20px] text-[18px] font-semibold text-[#1a1a2e]">
                  {row.name}
                </span>

                <span className="text-[18px] text-[#1a1a2e]">
                  ₹{row.price.toLocaleString("en-IN")}
                </span>

                <span className="text-[18px] text-[#8b7cff] font-medium">
                  ₹{row.tokenPrice.toLocaleString("en-IN")}
                </span>

                <span className="text-[15px] text-[#374151]">{row.domain}</span>

                <span
                  className={`text-[18px] ${
                    row.status === "Listed"
                      ? "text-[#10b981]"
                      : "text-[#ef4444]"
                  }`}
                >
                  {row.status}
                </span>
              </div>

              {index < sortedRows.length - 1 && (
                <div className="mt-[9px] border-t border-[#e5e7eb] pb-[10px]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
