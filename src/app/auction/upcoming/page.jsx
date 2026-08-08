import Navbar from "../../../components/dashboard/Navbar";
import AuctionFilterTabs from "../../../components/auction/AuctionFilterTabs";
import AuctionCard from "../../../components/auction/AuctionCard";
import { upcomingAuctions } from "../../../components/auction/auctionMockData";

export default function AuctionUpcomingPage() {
  return (
    <div className="min-h-screen bg-[#fbfbf9]">
      <Navbar />

      <main className="mx-auto max-w-[1440px] px-[30px] pb-10">
        <div className="pt-[30px]">
          <h1 className="text-[30px] font-bold leading-none text-[#1a1a2e]">
            Auction
          </h1>
          <p className="mt-[5px] text-[18px] text-[#6b7280]">
            Participate in live auctions and invest in vetted early-stage
            startups.
          </p>
        </div>

        <div className="mt-[20px]">
          <AuctionFilterTabs activeTab="upcoming" />
        </div>

        <div className="mt-[30px] grid grid-cols-1 gap-x-[40px] gap-y-[17px] md:grid-cols-2 xl:grid-cols-3">
          {upcomingAuctions.map((item) => (
            <AuctionCard key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
}
