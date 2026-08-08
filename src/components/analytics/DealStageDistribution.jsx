"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { dealStageData } from "./analyticsMockData";

export default function DealStageDistribution() {
  return (
    <div className="h-[375px] w-[520px] rounded-[20px] border border-[#e5e7eb] bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">
      <div className="flex h-full flex-col pl-[34px] pr-[15px] pt-[30px] pb-[20px]">
        <h2 className="text-[16px] font-semibold leading-[20px] text-[#111827]">
          Deal Stage Distribution
        </h2>

        <div className="mt-[15px] flex min-h-0 flex-1 items-center gap-[59px]">
          <div className="h-[206px] w-[200px] shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dealStageData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  startAngle={90}
                  endAngle={450}
                  innerRadius="60%"
                  outerRadius="90%"
                  stroke="#ffffff"
                  strokeWidth={2}
                >
                  {dealStageData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => [`${value}%`, "Share"]}
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #f0f0f0",
                    borderRadius: "10px",
                    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
                    padding: "10px 14px",
                    whiteSpace: "nowrap",
                  }}
                  labelStyle={{ color: "#6b7280", fontSize: 14 }}
                  itemStyle={{ color: "#1a1a2e", fontSize: 15 }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="flex flex-col gap-[17px]">
            {dealStageData.map((entry) => (
              <div key={entry.name} className="flex items-center">
                <span
                  className="h-[9px] w-[9px] shrink-0 rounded-[2px]"
                  style={{ backgroundColor: entry.color }}
                />
                <span className="ml-[13px] text-[12px] leading-[16px] text-[#4b5563]">
                  {entry.name}
                </span>
                <span className="ml-[10px] text-[12px] leading-[16px] font-semibold text-[#111827]">
                  {entry.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
