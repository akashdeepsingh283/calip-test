import WatchlistBefore from "../../components/overview/WatchlistBefore";
import WatchlistAfter from "../../components/overview/WatchlistAfter";

export default function OverviewPage() {
  return (
    <div>
      <div className="bg-[#fef9c3] px-4 py-2 text-center text-sm font-medium text-[#854d0e]">
        WATCHLIST — BEFORE INVESTING
      </div>
      <WatchlistBefore />

      <div className="mt-10 bg-[#d1fae5] px-4 py-2 text-center text-sm font-medium text-[#065f46]">
        WATCHLIST — AFTER INVESTING
      </div>
      <WatchlistAfter />
    </div>
  );
}
