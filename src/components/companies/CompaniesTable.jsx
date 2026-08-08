"use client";

import { useMemo, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { companiesData } from "./companiesMockData";

const columns = [
  { key: "name", label: "Name" },
  { key: "price", label: "Price" },
  { key: "tokenPrice", label: "Token" },
  { key: "domain", label: "Domain" },
  { key: "status", label: "Per listed/ Listed" },
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
    <div className="w-full overflow-x-auto rounded-[16px] border border-[#f0f0f0] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <div className="min-w-[1138px] px-[72px] pb-[20px] pt-[30px]">
        <h2 className="text-[20px] font-semibold leading-none text-[#1a1a2e]">
          Market
        </h2>

        <div className="mt-[12px] grid grid-cols-[50px_279px_237px_249px_323px_1fr] items-center">
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

        <div className="mt-[10px] border-t border-[#e5e7eb]" />

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
                ₹ {row.price.toLocaleString("en-IN")}
              </span>

              <span className="text-[18px] text-[#1a1a2e]">
                ₹ {row.tokenPrice.toLocaleString("en-IN")}
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
  );
}
