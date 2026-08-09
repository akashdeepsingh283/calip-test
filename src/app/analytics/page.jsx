import { Sora } from "next/font/google";
import Navbar from "../../components/dashboard/Navbar";
import AnalyticsHeader from "../../components/analytics/AnalyticsHeader";
import TotalFundingSector from "../../components/analytics/TotalFundingSector";
import DealStageDistribution from "../../components/analytics/DealStageDistribution";
import MonthlyActivity from "../../components/analytics/MonthlyActivity";
import AIScoreGrowthBubbleChart from "../../components/analytics/AIScoreGrowthBubbleChart";
import StartupComparisonTable from "../../components/analytics/StartupComparisonTable";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Calip — Analytics",
  description:
    "Deep-dive analytics: startup comparisons, industry trends, and funding heatmaps on Calip.",
};

export default function AnalyticsPage() {
  return (
    <div className={`${sora.className} min-h-screen bg-[#fafaf8]`}>
      <Navbar activePage="analytics" />

      <main className="mx-auto max-w-[1440px] px-4 pb-10 sm:px-[30px]">
        <div className="pt-5 sm:pt-[19.65px]">
          <AnalyticsHeader />
        </div>

        <div className="mt-6 flex flex-col gap-6 sm:mt-[54px] sm:flex-row sm:gap-[50px] sm:pl-[9.5px]">
          <TotalFundingSector />
          <DealStageDistribution />
        </div>

        <div className="mt-6 sm:mt-[51.9px]">
          <MonthlyActivity />
        </div>

        <div className="mt-6 sm:mt-[61px]">
          <AIScoreGrowthBubbleChart />
        </div>

        <div className="mt-6 sm:mt-[61px] sm:pl-[4px]">
          <StartupComparisonTable />
        </div>
      </main>
    </div>
  );
}
