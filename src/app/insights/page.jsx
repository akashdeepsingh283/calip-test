import { Sora } from "next/font/google";
import Navbar from "../../components/dashboard/Navbar";
import CompanyCard from "../../components/insights/CompanyCard";
import InsightsHeader from "../../components/insights/InsightsHeader";
import InvestmentSummary from "../../components/insights/InvestmentSummary";
import MultiDimensionScore from "../../components/insights/MultiDimensionScore";
import RevenueForecast from "../../components/insights/RevenueForecast";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Calip — AI Insights",
  description:
    "AI-generated investment insights, risk analysis, and growth predictions for companies on Calip.",
};

export default function InsightsPage() {
  return (
    <div className={`${sora.className} min-h-screen bg-[#fafaf8]`}>
      <Navbar activePage="insights" />

      <main className="mx-auto max-w-[1440px] px-[30px] pb-[30px]">
        <div className="pt-[19.65px]">
          <InsightsHeader />
        </div>

        <div className="mt-[21.5px]">
          <CompanyCard />
        </div>

        <div className="mt-[34.2px] flex gap-[30px]">
          <RevenueForecast />
          <MultiDimensionScore />
        </div>

        <div className="mt-[34.2px]">
          <InvestmentSummary />
        </div>
      </main>
    </div>
  );
}
