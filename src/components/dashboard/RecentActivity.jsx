import { ArrowRight, Bookmark, TrendingUp } from "lucide-react";
import { recentActivityData } from "./mockData";

const iconMap = {
  "trending-up": TrendingUp,
  bookmark: Bookmark,
};

export default function RecentActivity() {
  return (
    <div className="min-h-[278px] w-full rounded-[16px] border border-[#f0f0f0] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <div className="flex h-full flex-col p-[30px]">
        <div className="mb-[10px] flex items-center justify-between">
          <h2 className="text-[20px] font-semibold text-[#1a1a2e]">Recent Activity</h2>
          <button
            type="button"
            className="flex items-center gap-1 text-[16px] font-medium text-[#6366f1] transition-colors hover:text-[#5558e3]"
          >
            View all
            <ArrowRight className="h-[13px] w-[13px]" strokeWidth={2.5} />
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
                <div className="flex items-center gap-[15px]">
                  <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-lg bg-[#f3f4f6]">
                    <IconComponent
                      className={`h-[25px] w-[25px] ${
                        item.icon === "bookmark"
                          ? "text-[#374151]"
                          : "text-[#10b981]"
                      }`}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="text-[18px] font-semibold leading-tight text-[#1a1a2e]">
                      {item.title}
                    </p>
                    <p className="mt-[2px] text-[15px] text-[#9ca3af]">{item.subtitle}</p>
                  </div>
                </div>

                <div className="text-right">
                  {item.amount && (
                    <p className="text-[15px] font-medium text-[#10b981]">{item.amount}</p>
                  )}
                  <p
                    className={`text-[15px] text-[#9ca3af] ${
                      item.amount ? "mt-[2px]" : ""
                    }`}
                  >
                    {item.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
