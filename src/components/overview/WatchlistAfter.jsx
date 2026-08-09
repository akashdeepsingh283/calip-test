import { Plus } from "lucide-react";
import Navbar from "../dashboard/Navbar";
import CompanyCard from "./CompanyCard";
import { watchlistCompanies } from "./overviewMockData";

export default function WatchlistAfter() {
  return (
    <div className="min-h-screen bg-[#fbfbf9]">
      <Navbar activePage="watchlist" />

      <main className="mx-auto max-w-[1440px] px-4 pb-10 sm:px-[30px]">
        <div className="pt-5">
          <h1 className="text-[24px] font-bold leading-none text-[#1a1a2e] sm:text-[30px]">
            Watchlist
          </h1>
          <p className="mt-[5px] text-[16px] text-[#6b7280] sm:text-[18px]">
            Track your saved companies and stay updated on their auction activity.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:mt-[30px] sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[18px] text-[#374151] sm:text-[20px]">
            Saved companies ({watchlistCompanies.length})
          </span>

          <button
            type="button"
            className="flex h-[40px] w-full items-center justify-center gap-[5px] rounded-lg bg-[#6366f1] px-[13px] text-white transition-colors hover:bg-[#5558e3] sm:w-auto"
          >
            <Plus className="h-[25px] w-[25px]" strokeWidth={1.5} />
            <span className="text-[16px] font-medium leading-none">Add companies</span>
          </button>
        </div>

        <div className="mt-6 space-y-4 sm:mt-[25px] sm:space-y-[20px]">
          {watchlistCompanies.map((company) => (
            <CompanyCard key={company.id} {...company} />
          ))}
        </div>
      </main>
    </div>
  );
}
