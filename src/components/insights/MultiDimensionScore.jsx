"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { radarData } from "./insightsMockData";

export default function MultiDimensionScore() {
  return (
    <div className="h-[375px] w-[434px] rounded-[20px] border border-[#e5e7eb] bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">
      <div className="flex h-full flex-col pl-[35px] pr-[20px] pt-[30px] pb-[20px]">
        <h2 className="text-[16px] font-semibold leading-[20px] text-[#111827]">
          Multi Dimensional score
        </h2>

        <div className="mt-[10px] min-h-0 flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart
              data={radarData}
              cx="50%"
              cy="50%"
              outerRadius="82%"
            >
              <PolarGrid gridType="polygon" stroke="#E5E7EB" />
              <PolarAngleAxis
                dataKey="dimension"
                tick={{ fill: "#4b5563", fontSize: 11 }}
              />
              <PolarRadiusAxis
                domain={[0, 100]}
                tick={false}
                axisLine={false}
              />
              <Tooltip
                formatter={(value) => [`${value}/100`, "Score"]}
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
              <Radar
                dataKey="score"
                name="Score"
                stroke="#4F46E5"
                strokeWidth={2}
                fill="#4F46E5"
                fillOpacity={0.15}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
