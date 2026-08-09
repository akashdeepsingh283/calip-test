import {
  BarChart3,
  Bookmark,
  Briefcase,
  TrendingUp,
} from "lucide-react";

const iconMap = {
  briefcase: Briefcase,
  "bar-chart-3": BarChart3,
  "trending-up": TrendingUp,
  bookmark: Bookmark,
};

export default function StatCard({
  label,
  value,
  trend,
  trendGreen = true,
  icon,
}) {
  const IconComponent = iconMap[icon] || Briefcase;

  return (
    <div className="group relative h-[115px] w-full rounded-[16px] border border-[#f0f0f0] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#e0e7ff] hover:shadow-[0_8px_30px_rgba(99,102,241,0.12)]">
      <div className="flex h-full flex-col justify-between p-4 sm:p-[18px]">
        <div className="flex items-start justify-between">
          <p className="text-[13px] font-medium uppercase tracking-wide text-[#9ca3af] sm:text-[14px]">
            {label}
          </p>
          <div className="flex h-[22px] w-[22px] items-center justify-center rounded-md bg-[#f3f4f6] transition-colors group-hover:bg-[#eef2ff] sm:h-[25px] sm:w-[25px]">
            <IconComponent className="h-[13px] w-[13px] text-[#374151] sm:h-[15px] sm:w-[15px]" strokeWidth={1.5} />
          </div>
        </div>

        <div>
          <p className="text-[22px] font-bold leading-none text-[#1a1a2e] sm:text-[25px]">{value}</p>
          {trend && (
            <div className="mt-[4px] sm:mt-[5px] flex items-center gap-1">
              {trendGreen && (
                <TrendingUp className="h-[10px] w-[10px] text-[#10b981] sm:h-[11px] sm:w-[11px]" strokeWidth={2} />
              )}
              <span
                className={`text-[13px] font-medium leading-none sm:text-[15px] ${
                  trendGreen ? "text-[#10b981]" : "text-[#9ca3af]"
                }`}
              >
                {trend}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
