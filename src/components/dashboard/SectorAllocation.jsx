"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { sectorData } from "./mockData";

function SectorTooltip({ active, payload }) {
  if (!active || !payload || payload.length === 0) return null;

  const item = payload[0];

  return (
    <div className="rounded-[10px] border border-[#f0f0f0] bg-white px-[14px] py-[10px] shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <p className="m-0 text-[14px] text-[#6b7280]">{item.name}</p>
      <p className="m-0 mt-[4px] text-[15px] font-semibold text-[#1a1a2e]">
        {item.value}%
      </p>
    </div>
  );
}

export default function SectorAllocation() {
  const totalSectors = sectorData.length;

  return (
    <div className="h-[375px] w-full rounded-[16px] border border-[#f0f0f0] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <div className="flex h-full flex-col p-[30px]">
        <h2 className="text-[20px] font-semibold text-[#1a1a2e]">Sector Allocation</h2>

        <div className="flex min-h-0 flex-1 flex-col">
          <div className="relative flex flex-1 items-center justify-center">
            <ResponsiveContainer width="100%" height={155}>
              <PieChart>
                <Pie
                  data={sectorData}
                  cx="50%"
                  cy="50%"
                  innerRadius={49}
                  outerRadius={73}
                  paddingAngle={2}
                  dataKey="value"
                  stroke="none"
                >
                  {sectorData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<SectorTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="pointer-events-none absolute flex flex-col items-center">
              <span className="text-[17px] text-[#9ca3af]">Sectors</span>
              <span className="text-[28px] font-bold leading-none text-[#1a1a2e]">
                {totalSectors}
              </span>
            </div>
          </div>

          <div className="mt-2 w-full space-y-[6px]">
            {sectorData.map((sector) => (
              <div key={sector.name} className="flex items-center gap-3">
                <span
                  className="h-[15px] w-[15px] shrink-0 rounded-full"
                  style={{ backgroundColor: sector.color }}
                />
                <span className="w-[70px] shrink-0 text-[16px] text-[#374151]">
                  {sector.name}
                </span>
                <span className="flex-1 border-b border-dotted border-[#d1d5db]" />
                <span className="w-[30px] text-right text-[16px] text-[#374151]">
                  {sector.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
