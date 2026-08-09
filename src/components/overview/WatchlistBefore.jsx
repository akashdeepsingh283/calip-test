import { Plus } from "lucide-react";
import Navbar from "../dashboard/Navbar";

export default function WatchlistBefore() {
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

        <div className="mt-12 flex justify-center sm:mt-[65px]">
          <button
            type="button"
            className="flex h-[50px] w-[280px] items-center justify-center gap-2 rounded-lg bg-[#6366f1] text-white transition-colors hover:bg-[#5558e3]"
          >
            <Plus className="h-[30px] w-[30px]" strokeWidth={1.5} />
            <span className="text-[18px] font-semibold leading-none">Add companies</span>
          </button>
        </div>
      </main>
    </div>
  );
}
