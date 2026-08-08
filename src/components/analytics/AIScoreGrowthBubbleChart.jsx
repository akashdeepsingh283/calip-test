"use client";

import {
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";
import { comparisonCompanies } from "./analyticsMockData";

const xTicks = [0, 25, 50, 75, 100];
const yTicks = [160, 120, 80, 40, 0];

function ChartTooltip({ active, payload }) {
  if (!active || !payload || payload.length === 0) return null;
  const d = payload[0].payload;
  return (
    <div className="rounded-[10px] border border-[#f0f0f0] bg-white px-[14px] py-[10px] shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <p className="text-[14px] font-semibold text-[#6b7280]">{d.name}</p>
      <p className="text-[15px] text-[#1a1a2e]">AI Score: {d.aiScore}</p>
      <p className="text-[15px] text-[#1a1a2e]">Growth: {d.growth}</p>
      <p className="text-[15px] text-[#1a1a2e]">Raised: {d.raised}</p>
    </div>
  );
}

export default function AIScoreGrowthBubbleChart() {
  return (
    <div className="relative h-[382.945px] w-[1350px] rounded-[20px] border border-[#e5e7eb] bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">
      <h2 className="absolute left-[39.15px] top-[43.17px] text-[15px] font-semibold leading-[22.5px] text-[#111827]">
        AI Score vs. Growth Rate
      </h2>
      <p className="absolute left-[38.46px] top-[73.81px] text-[12px] leading-[18px] text-[#9ca3af]">
        Bubble size represents total raised. Hover for details.
      </p>

      <div className="absolute bottom-0 left-0 h-[310px] w-[1350px]">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{ top: 58, right: 40, bottom: 52, left: 0 }}
          >
            <CartesianGrid stroke="#F3F4F6" strokeDasharray="3 3" />
            <XAxis
              dataKey="aiScore"
              type="number"
              domain={[0, 100]}
              ticks={xTicks}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 11 }}
              dy={6}
            />
            <YAxis
              dataKey="growth"
              type="number"
              domain={[0, 160]}
              ticks={yTicks}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 11 }}
              width={69}
              tickFormatter={(value) => `${value}%`}
            />
            <ZAxis
              type="number"
              dataKey="raisedValue"
              range={[100, 3000]}
            />
            <Tooltip
              content={<ChartTooltip />}
              cursor={{ strokeDasharray: "3 3" }}
            />
            <Scatter data={comparisonCompanies} fill="#8884d8">
              {comparisonCompanies.map((c) => (
                <Cell key={c.name} fill={c.avatarColor} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
