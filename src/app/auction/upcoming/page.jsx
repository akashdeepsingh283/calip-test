import Navbar from "../../../components/dashboard/Navbar";
import AuctionFilterTabs from "../../../components/auction/AuctionFilterTabs";
import AuctionCard from "../../../components/auction/AuctionCard";
import { upcomingAuctions } from "../../../components/auction/auctionMockData";

export default function AuctionUpcomingPage() {
  return (
    <div className="min-h-screen bg-[#fbfbf9]">
      <Navbar activePage="auction" />

      <main className="mx-auto max-w-[1440px] px-4 pb-10 sm:px-[30px]">
        <div className="pt-[20px] sm:pt-[30px]">
          <h1 className="text-[24px] font-bold leading-none text-[#1a1a2e] sm:text-[30px]">
            Auction
          </h1>
          <p className="mt-[5px] text-[16px] text-[#6b7280] sm:text-[18px]">
            Participate in live auctions and invest in vetted early-stage
            startups.
          </p>
        </div>

        <AuctionFilterTabs activeTab="upcoming" auctions={upcomingAuctions} />
      </main>
    </div>
  );
}
