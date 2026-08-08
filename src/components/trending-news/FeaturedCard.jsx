import { Bookmark, Clock } from "lucide-react";
import { badgeColors } from "./trendingNewsMockData";

export default function FeaturedCard({
  badge,
  title,
  description,
  time,
  readTime,
}) {
  const colors = badgeColors[badge] || badgeColors.Funding;

  return (
    <div className="relative h-[187px] w-full rounded-[16px] border border-[#f0f0f0] bg-white px-[20px] pt-[20px] pb-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <div
        className="inline-flex h-[25px] items-center rounded-md px-[10px] text-[14px] font-medium leading-none"
        style={{ backgroundColor: colors.bg, color: colors.text }}
      >
        {badge}
      </div>

      <button
        type="button"
        className="absolute right-[20px] top-[23px] flex h-[20px] w-[20px] items-center justify-center"
        aria-label="Bookmark"
      >
        <Bookmark className="h-[20px] w-[20px] text-[#374151]" strokeWidth={1.5} />
      </button>

      <h3 className="mt-[15px] text-[18px] font-semibold leading-tight text-[#1a1a2e] line-clamp-2">
        {title}
      </h3>

      <p className="mt-[15px] text-[15px] leading-tight text-[#6b7280] line-clamp-2">
        {description}
      </p>

      <div className="mt-[15px] flex items-center gap-[20px]">
        <div className="flex items-center gap-[5px]">
          <Clock className="h-[15px] w-[15px] text-[#9ca3af]" strokeWidth={1.5} />
          <span className="text-[14px] leading-none text-[#9ca3af]">{time}</span>
        </div>
        <span className="text-[14px] leading-none text-[#9ca3af]">{readTime}</span>
      </div>
    </div>
  );
}
