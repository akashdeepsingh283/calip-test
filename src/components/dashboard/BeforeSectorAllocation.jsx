"use client";

import { beforeSectorData } from "./beforeMockData";

export default function BeforeSectorAllocation() {
  return (
    <div className="h-[375px] w-full rounded-[16px] border border-[#f0f0f0] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <div className="flex h-full flex-col p-[30px]">
        <h2 className="text-[20px] font-semibold text-[#1a1a2e]">Sector Allocation</h2>

        <div className="flex min-h-0 flex-1 flex-col">
          <div className="relative flex flex-1 items-center justify-center">
            <svg width="210" height="155" viewBox="0 0 210 155">
              <circle cx="105" cy="78" r="73" fill="none" stroke="#f3f4f6" strokeWidth="24" />
              <circle cx="105" cy="78" r="49" fill="none" stroke="#f3f4f6" strokeWidth="24" />
            </svg>
            <div className="pointer-events-none absolute flex flex-col items-center">
              <span className="text-[17px] text-[#9ca3af]">Sectors</span>
              <span className="text-[28px] font-bold leading-none text-[#1a1a2e]">0</span>
            </div>
          </div>

          <div className="mt-2 w-full space-y-[6px]">
            {beforeSectorData.map((sector, i) => (
              <div key={i} className="flex items-center gap-3">
                <span
                  className="h-[15px] w-[15px] shrink-0 rounded-full"
                  style={{ backgroundColor: sector.color }}
                />
                <span className="w-[70px] shrink-0 text-[16px] text-[#374151]">
                  {sector.name}
                </span>
                <span className="flex-1 border-b border-dotted border-[#d1d5db]" />
                <span className="w-[30px] text-right text-[16px] text-[#374151]">
                  0%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
