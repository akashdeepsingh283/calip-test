"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { portfolioChartData } from "./mockData";

function formatYAxis(value) {
  const labels = {
    0: "₹0k",
    6000: "₹06k",
    11000: "₹11k",
    17000: "₹17k",
    22000: "₹22k",
  };
  return labels[value] ?? "";
}

export default function PortfolioChart() {
  return (
    <div className="h-[375px] w-full rounded-[16px] border border-[#f0f0f0] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <div className="flex h-full flex-col p-[30px]">
        <div className="mb-2">
          <h2 className="text-[20px] font-semibold text-[#1a1a2e]">Portfolio Value</h2>
          <p className="mt-[5px] text-[15px] text-[#9ca3af]">Last 7 months</p>
        </div>

        <div className="min-h-0 flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={portfolioChartData}
              margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="4 4"
                stroke="#e5e7eb"
                vertical
                horizontal
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9ca3af", fontSize: 15 }}
                dy={8}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9ca3af", fontSize: 15 }}
                tickFormatter={formatYAxis}
                domain={[0, 22000]}
                ticks={[0, 6000, 11000, 17000, 22000]}
                width={45}
              />
              <Area
                type="monotone"
                dataKey="value"
                name="Portfolio Value"
                stroke="#6366f1"
                strokeWidth={2}
                fill="url(#portfolioGradient)"
                dot={false}
                activeDot={{ r: 5, fill: "#6366f1", stroke: "#ffffff", strokeWidth: 2 }}
              />
              <Tooltip
                formatter={(value) => `₹ ${Number(value).toLocaleString("en-IN")}`}
                cursor={{ stroke: "#c7d2fe", strokeWidth: 1 }}
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
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
