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
import {
  monthlyActivityData,
  monthlyLeftTicks,
  monthlyRightTicks,
} from "./analyticsMockData";

const plotLeft = 82;
const plotTop = 38;
const plotWidth = 1177;
const plotHeight = 309;

const verticalPoints = Array.from(
  { length: 7 },
  (_, i) => plotLeft + (plotWidth / 6) * i,
);

const horizontalPoints = Array.from(
  { length: 5 },
  (_, i) => plotTop + (plotHeight / 4) * i,
);

function formatRightAxis(value) {
  const tick = monthlyRightTicks.find((t) => t.value === value);
  return tick ? tick.label : "";
}

export default function MonthlyActivity() {
  return (
    <div className="relative h-[490px] w-[1350px] rounded-[20px] border border-[#e5e7eb] bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">
      <h2 className="absolute left-[45.5px] top-[47px] text-[16px] font-semibold leading-[20px] text-[#111827]">
        Monthly Activity
      </h2>

      <div className="absolute bottom-0 left-0 h-[385px] w-[1341px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={monthlyActivityData}
            margin={{ top: plotTop, right: 0, bottom: 0, left: 0 }}
            barCategoryGap="30%"
          >
            <CartesianGrid
              stroke="#F3F4F6"
              strokeDasharray="3 3"
              horizontalPoints={horizontalPoints}
              verticalPoints={verticalPoints}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 11 }}
              height={38}
              dy={6}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 11 }}
              domain={[0, 32]}
              ticks={monthlyLeftTicks}
              width={plotLeft}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 11 }}
              domain={[0, 12000000]}
              ticks={monthlyRightTicks.map((t) => t.value)}
              tickFormatter={formatRightAxis}
              width={82}
            />
            <Tooltip
              formatter={(value) => [value, "Activity"]}
              cursor={{ fill: "rgba(79, 70, 229, 0.06)" }}
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
              yAxisId="left"
              fill="#4F46E5"
              radius={[5.775, 5.775, 0, 0]}
              barSize={26.7}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
