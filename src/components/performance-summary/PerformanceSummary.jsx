import Navbar from "../dashboard/Navbar";
import StatCard from "../dashboard/StatCard";
import PortfolioChart from "../dashboard/PortfolioChart";
import SectorAllocation from "../dashboard/SectorAllocation";
import MonthlyReturnsBarChart from "./MonthlyReturnsBarChart";
import AIRecommendationsTable from "./AIRecommendationsTable";
import { performanceStatsData } from "./performanceMockData";

export default function PerformanceSummary() {
  return (
    <div className="min-h-screen bg-[#fbfbf9]">
      <Navbar activePage="performance-summary" />

      <main className="mx-auto max-w-[1440px] px-[30px] pb-10">
        <div className="pt-5">
          <h1 className="text-[30px] font-bold leading-none text-[#1a1a2e]">
            Performance Summary
          </h1>
          <p className="mt-[5px] text-[18px] leading-none text-[#6b7280]">
            Your investment history, ROI, and portfolio performance analytics.
          </p>
        </div>

        <div className="mt-[30px] grid grid-cols-1 gap-[23px] sm:grid-cols-2 xl:grid-cols-4">
          {performanceStatsData.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        <div className="mt-[30px] grid grid-cols-1 gap-[30px] xl:grid-cols-[885fr_434fr]">
          <PortfolioChart />
          <SectorAllocation />
        </div>

        <div className="mt-[30px]">
          <MonthlyReturnsBarChart />
        </div>

        <div className="mt-[30px]">
          <AIRecommendationsTable />
        </div>
      </main>
    </div>
  );
}
