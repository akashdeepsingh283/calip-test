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
      <Navbar activePage="overview" />

      <main className="mx-auto max-w-[1440px] px-[30px] pb-[30px]">
        <div className="pt-[19.65px]">
          <AnalyticsHeader />
        </div>

        <div className="mt-[54px] flex gap-[50px] pl-[9.5px]">
          <TotalFundingSector />
          <DealStageDistribution />
        </div>

        <div className="mt-[51.9px]">
          <MonthlyActivity />
        </div>

        <div className="mt-[61px]">
          <AIScoreGrowthBubbleChart />
        </div>

        <div className="mt-[61px] pl-[4px]">
          <StartupComparisonTable />
        </div>
      </main>
    </div>
  );
}
