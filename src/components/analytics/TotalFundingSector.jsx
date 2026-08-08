"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { fundingSectorData, sectorXTicks } from "./analyticsMockData";

function formatXAxis(value) {
  const tick = sectorXTicks.find((t) => t.value === value);
  return tick ? tick.label : "";
}

export default function TotalFundingSector() {
  return (
    <div className="h-[379px] w-[761px] rounded-[20px] border border-[#e5e7eb] bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">
      <div className="flex h-full flex-col pl-[36px] pr-[15px] pt-[30px] pb-[20px]">
        <h2 className="text-[16px] font-semibold leading-[20px] text-[#111827]">
          Total Funding Sector
        </h2>

        <div className="mt-[15px] min-h-0 flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={fundingSectorData}
              layout="vertical"
              margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
              barCategoryGap="30%"
            >
              <XAxis
                type="number"
                domain={[0, 100000]}
                ticks={sectorXTicks.map((t) => t.value)}
                tickFormatter={formatXAxis}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#4b5563", fontSize: 14, fillOpacity: 0.34 }}
                height={45}
              />
              <YAxis
                type="category"
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#4b5563", fontSize: 14, fillOpacity: 0.34 }}
                width={110}
              />
              <Tooltip
                formatter={(value) => [
                  `₹${Number(value).toLocaleString("en-IN")}`,
                  "Funding",
                ]}
                cursor={{ fill: "rgba(122, 73, 232, 0.06)" }}
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
              <Bar
                dataKey="value"
                fill="#7a49e8"
                radius={[0, 8, 8, 0]}
                barSize={32}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
