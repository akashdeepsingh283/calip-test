"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { monthlyReturnsData } from "./performanceMockData";

function formatYAxis(value) {
  const labels = {
    0: "₹0k",
    5000: "₹5k",
    9000: "₹9k",
    14000: "₹14k",
    18000: "₹18k",
  };
  return labels[value] ?? "";
}

export default function MonthlyReturnsBarChart() {
  return (
    <div className="h-[375px] w-full rounded-[16px] border border-[#f0f0f0] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <div className="flex h-full flex-col p-[30px]">
        <div>
          <h2 className="text-[20px] font-semibold text-[#1a1a2e]">
            Monthly Returns
          </h2>
          <p className="mt-[5px] text-[15px] text-[#9ca3af]">
            Total returns vs. invested capital per month
          </p>
        </div>

        <div className="mt-[20px] min-h-0 flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={monthlyReturnsData}
              margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
              barCategoryGap="30%"
            >
              <CartesianGrid
                strokeDasharray="4 4"
                stroke="#e5e7eb"
                vertical={false}
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
                domain={[0, 18000]}
                ticks={[0, 5000, 9000, 14000, 18000]}
                width={40}
              />
              <Bar
                dataKey="value"
                name="Monthly Returns"
                fill="#6366f1"
                radius={[0, 0, 0, 0]}
                barSize={35}
              />
              <Tooltip
                formatter={(value) => `₹ ${Number(value).toLocaleString("en-IN")}`}
                cursor={{ fill: "#eef2ff" }}
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
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
