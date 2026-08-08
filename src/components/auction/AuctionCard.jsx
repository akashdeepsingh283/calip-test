const badgeStyles = {
  live: "bg-[#10b981] text-white",
  upcoming: "border border-[#d1d5db] bg-white text-[#6b7280]",
  closed: "bg-[#f3f4f6] text-[#9ca3af]",
};

const buttonConfig = {
  live: { label: "Place Bid", className: "bg-[#6366f1] text-white hover:bg-[#5558e3]" },
  upcoming: { label: "Notify Me", className: "border border-[#d1d5db] bg-white text-[#374151] hover:bg-[#f9fafb]" },
  closed: { label: "View Details", className: "bg-[#f3f4f6] text-[#9ca3af] cursor-not-allowed" },
};

export default function AuctionCard({ item }) {
  const status = item.status || "live";
  const badge = badgeStyles[status];
  const button = buttonConfig[status];

  return (
    <div className="relative flex w-full flex-col rounded-xl border border-[#e5e7eb] bg-white p-0 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <div className={`absolute right-[14px] top-[14px] inline-flex h-[25px] items-center rounded-[4px] px-2.5 text-sm font-medium leading-none ${badge}`}>
        {status === "live" && "Live"}
        {status === "upcoming" && "Coming soon"}
        {status === "closed" && "Closed"}
      </div>

      <div className="flex items-start gap-4 px-[22px] pt-[18px]">
        <div className="flex h-[55px] w-[55px] shrink-0 items-center justify-center rounded-[10px] bg-[#f3f4f6] text-[22px] font-bold text-[#6366f1]">
          {item.logoLetter}
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-[20px] font-semibold leading-tight text-[#1a1a2e]">
            {item.companyName}
          </h3>
          <span className="text-[15px] leading-none text-[#6b7280]">
            {item.sector}
          </span>
        </div>
      </div>

      <p className="mt-[22px] line-clamp-2 px-[24px] text-[14px] leading-[19px] text-[#374151]">
        {item.description}
      </p>

      <div className="mt-[30px] grid grid-cols-2 gap-x-[5px] gap-y-[4px] px-[22px]">
        <div className="rounded-lg bg-[#f9fafb] px-4 py-[7px]">
          <p className="text-[12px] text-[#9ca3af]">Current Bid</p>
          <p className="text-[16px] font-semibold text-[#1a1a2e]">
            ₹{item.currentBid.toLocaleString()}
          </p>
        </div>
        <div className="rounded-lg bg-[#f9fafb] px-4 py-[7px]">
          <p className="text-[12px] text-[#9ca3af]">Target</p>
          <p className="text-[16px] font-semibold text-[#1a1a2e]">
            ₹{item.targetAmount.toLocaleString()}
          </p>
        </div>
        <div className="rounded-lg bg-[#f9fafb] px-4 py-[7px]">
          <p className="text-[12px] text-[#9ca3af]">Equity</p>
          <p className="text-[16px] font-semibold text-[#1a1a2e]">
            {item.equityPercent}%
          </p>
        </div>
        <div className="rounded-lg bg-[#f9fafb] px-4 py-[7px]">
          <p className="text-[12px] text-[#9ca3af]">Avg. Bid</p>
          <p className="text-[16px] font-semibold text-[#1a1a2e]">
            ₹{item.avgBid.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="mt-[22px] px-[22px]">
        <div className="h-[6px] w-full overflow-hidden rounded-full bg-[#e5e7eb]">
          <div
            className="h-full rounded-full bg-[#6366f1]"
            style={{ width: `${item.progressPercent}%` }}
          />
        </div>
      </div>

      <div className="mt-[22px] flex justify-center px-[22px] pb-[18px]">
        <button
          type="button"
          disabled={status === "closed"}
          className={`flex h-[38px] w-full items-center justify-center rounded-lg px-6 text-[14px] font-medium transition-colors ${button.className}`}
        >
          {button.label}
        </button>
      </div>
    </div>
  );
}
