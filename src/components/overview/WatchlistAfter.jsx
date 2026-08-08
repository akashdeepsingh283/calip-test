import { Plus } from "lucide-react";
import Navbar from "../dashboard/Navbar";
import CompanyCard from "./CompanyCard";
import { watchlistCompanies } from "./overviewMockData";

export default function WatchlistAfter() {
  return (
    <div className="min-h-screen bg-[#fbfbf9]">
      <Navbar />

      <main className="mx-auto max-w-[1440px] px-[30px] pb-10">
        <div className="pt-5">
          <h1 className="text-[30px] font-bold leading-none text-[#1a1a2e]">
            Watchlist
          </h1>
          <p className="mt-[5px] text-[18px] text-[#6b7280]">
            Track your saved companies and stay updated on their auction activity.
          </p>
        </div>

        <div className="mt-[30px] flex items-center justify-between">
          <span className="text-[20px] text-[#374151]">
            Saved companies ({watchlistCompanies.length})
          </span>

          <button
            type="button"
            className="flex h-[40px] items-center gap-[5px] rounded-lg bg-[#6366f1] px-[13px] text-white transition-colors hover:bg-[#5558e3]"
          >
            <Plus className="h-[25px] w-[25px]" strokeWidth={1.5} />
            <span className="text-[16px] font-medium leading-none">Add companies</span>
          </button>
        </div>

        <div className="mt-[25px] space-y-[20px]">
          {watchlistCompanies.map((company) => (
            <CompanyCard key={company.id} {...company} />
          ))}
        </div>
      </main>
    </div>
  );
}
