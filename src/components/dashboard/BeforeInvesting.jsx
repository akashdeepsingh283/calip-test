import Navbar from "./Navbar";
import StatCard from "./StatCard";
import BeforePortfolioChart from "./BeforePortfolioChart";
import BeforeSectorAllocation from "./BeforeSectorAllocation";
import { beforeStatsData } from "./beforeMockData";

export default function BeforeInvesting() {
  return (
    <div className="min-h-screen bg-[#fbfbf9]">
      <Navbar />

      <main className="mx-auto max-w-[1440px] px-[30px] pb-10">
        <div className="pt-5">
          <h1 className="text-[30px] font-bold leading-none text-[#1a1a2e]">
            Dashboard
          </h1>
          <p className="mt-[5px] text-[18px] text-[#6b7280]">
            Your investment portfolio at a glance
          </p>
        </div>

        <div className="mt-[30px] grid grid-cols-1 gap-[23px] sm:grid-cols-2 xl:grid-cols-4">
          {beforeStatsData.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        <div className="mt-[30px] grid grid-cols-1 gap-[30px] xl:grid-cols-[885fr_434fr]">
          <BeforePortfolioChart />
          <BeforeSectorAllocation />
        </div>
      </main>
    </div>
  );
}
