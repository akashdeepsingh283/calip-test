import Navbar from "./Navbar";
import StatCard from "./StatCard";
import PortfolioChart from "./PortfolioChart";
import SectorAllocation from "./SectorAllocation";
import RecentActivity from "./RecentActivity";
import AIRecommendationsActivated from "./AIRecommendationsActivated";
import { statsData } from "./mockData";

export default function AfterInvestingActivated() {
  return (
    <div className="min-h-screen bg-[#fbfbf9]">
      <Navbar activePage="dashboard" />

      <main className="mx-auto max-w-[1440px] px-4 pb-10 sm:px-[30px]">
        <div className="pt-5">
          <h1 className="text-[24px] font-bold leading-none text-[#1a1a2e] sm:text-[30px]">
            Dashboard
          </h1>
          <p className="mt-[5px] text-[16px] text-[#6b7280] sm:text-[18px]">
            Your investment portfolio at a glance
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-[23px] sm:mt-[30px] sm:grid-cols-2 xl:grid-cols-4">
          {statsData.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-[30px] sm:mt-[30px] xl:grid-cols-[885fr_434fr]">
          <PortfolioChart />
          <SectorAllocation />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-[30px] sm:mt-[30px] lg:grid-cols-2">
          <RecentActivity />
          <AIRecommendationsActivated />
        </div>
      </main>
    </div>
  );
}
