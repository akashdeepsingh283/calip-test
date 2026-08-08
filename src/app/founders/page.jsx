import { Sora } from "next/font/google";
import Navbar from "../../components/dashboard/Navbar";
import FoundersHero from "../../components/founders/FoundersHero";
import WhyRaiseOnCalip from "../../components/founders/WhyRaiseOnCalip";
import EligibilityCriteria from "../../components/founders/EligibilityCriteria";
import HowItWorks from "../../components/founders/HowItWorks";
import ApplicationForm from "../../components/founders/ApplicationForm";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Calip — For Founders",
  description:
    "List your startup on Calip to unlock transparent token auctions, AI-powered investor matching, and on-chain equity management all in one platform.",
};

export default function FoundersPage() {
  return (
    <div
      className={`${sora.className} min-h-screen bg-[#fafaf8]`}
    >
      <Navbar activePage="founders" />

      <main className="mx-auto max-w-[1440px] px-[66px] pb-[100px]">
        <FoundersHero />
        <WhyRaiseOnCalip />
        <EligibilityCriteria />
        <HowItWorks />
        <ApplicationForm />
      </main>
    </div>
  );
}
