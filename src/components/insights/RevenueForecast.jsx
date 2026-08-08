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
import { revenueForecastData } from "./insightsMockData";

const yAxisLabels = {
  0: "₹0k",
  6000: "₹06k",
  11000: "₹11k",
  17000: "₹17k",
  22000: "₹22k",
};

function formatYAxis(value) {
  return yAxisLabels[value] ?? "";
}

export default function RevenueForecast() {
  return (
    <div className="h-[375px] w-[885px] rounded-[20px] border border-[#e5e7eb] bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">
      <div className="flex h-full flex-col pl-[27px] pr-[15px] pt-[26px] pb-[20px]">
        <h2 className="text-[16px] font-semibold leading-[20px] text-[#111827]">
          Revenue Forecast
        </h2>

        <div className="mt-[20px] min-h-0 flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={revenueForecastData}
              margin={{ top: 15, right: 5, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#4F46E5" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#EEEEEE"
                vertical={false}
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9ca3af", fontSize: 12 }}
                dy={8}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9ca3af", fontSize: 12 }}
                tickFormatter={formatYAxis}
                domain={[0, 22000]}
                ticks={[0, 6000, 11000, 17000, 22000]}
                width={50}
              />
              <Tooltip
                formatter={(value) => [
                  `₹ ${Number(value).toLocaleString("en-IN")}`,
                  "Revenue",
                ]}
                cursor={{ stroke: "#c7d2fe", strokeDasharray: "4 4" }}
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
              <Area
                type="monotone"
                dataKey="value"
                name="Revenue"
                stroke="#4F46E5"
                strokeWidth={2}
                fill="url(#revenueFill)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
