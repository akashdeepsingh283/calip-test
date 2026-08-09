import { ArrowRight, Bookmark, TrendingUp, ExternalLink } from "lucide-react";
import { recentActivityData } from "./mockData";

const iconMap = {
  "trending-up": TrendingUp,
  bookmark: Bookmark,
};

export default function RecentActivity() {
  return (
    <div className="w-full rounded-[16px] border border-[#f0f0f0] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <div className="flex flex-col p-4 sm:p-[30px]">
        <div className="mb-[10px] flex items-center justify-between">
          <h2 className="text-[18px] font-semibold text-[#1a1a2e] sm:text-[20px]">Recent Activity</h2>
          <button
            type="button"
            className="flex items-center gap-1 text-[14px] font-medium text-[#6366f1] transition-colors hover:text-[#5558e3] sm:text-[16px]"
          >
            View all
            <ArrowRight className="h-[12px] w-[12px] sm:h-[13px] sm:w-[13px]" strokeWidth={2.5} />
          </button>
        </div>

        <div className="flex flex-col">
          {recentActivityData.map((item, index) => {
            const IconComponent = iconMap[item.icon] || TrendingUp;

            return (
              <div
                key={item.id}
                className={`flex items-center justify-between py-[10px] ${
                  index < recentActivityData.length - 1
                    ? "border-b border-[#f3f4f6]"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3 sm:gap-[15px]">
                  <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-lg bg-[#f3f4f6] sm:h-[40px] sm:w-[40px]">
                    <IconComponent
                      className={`h-[20px] w-[20px] sm:h-[25px] sm:w-[25px] ${
                        item.icon === "bookmark"
                          ? "text-[#374151]"
                          : "text-[#10b981]"
                      }`}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold leading-tight text-[#1a1a2e] sm:text-[18px]">
                      {item.title}
                    </p>
                    <p className="mt-[2px] text-[13px] text-[#9ca3af] sm:text-[15px]">{item.subtitle}</p>
                  </div>
                </div>

                <div className="text-right">
                  {item.amount && (
                    <p className="text-[14px] font-medium text-[#10b981] sm:text-[15px]">{item.amount}</p>
                  )}
                  <p
                    className={`text-[13px] text-[#9ca3af] sm:text-[15px] ${
                      item.amount ? "mt-[2px]" : ""
                    }`}
                  >
                    {item.time}
                  </p>
                  {item.txHash && (
                    <div className="mt-[4px] flex items-center justify-end gap-1">
                      <ExternalLink className="h-3 w-3 text-[#6366f1]" strokeWidth={1.5} />
                      <a
                        href={`https://etherscan.io/tx/${item.txHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-[#6366f1] hover:text-[#4f46e5]"
                      >
                        {`${item.txHash.slice(0, 6)}...${item.txHash.slice(-4)}`}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
