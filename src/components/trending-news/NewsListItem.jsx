import { Bookmark, Clock, Star } from "lucide-react";
import { badgeColors } from "./trendingNewsMockData";

export default function NewsListItem({
  badge,
  title,
  description,
  time,
  readTime,
}) {
  const colors = badgeColors[badge] || badgeColors.Funding;

  return (
    <div className="h-[129px] w-full rounded-[16px] border border-[#f0f0f0] bg-white px-[20px] pt-[20px] pb-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-[25px]">
          <div
            className="inline-flex h-[25px] items-center rounded-md px-[10px] text-[14px] font-medium leading-none"
            style={{ backgroundColor: colors.bg, color: colors.text }}
          >
            {badge}
          </div>

          <div className="flex items-center gap-[5px]">
            <Clock className="h-[15px] w-[15px] text-[#9ca3af]" strokeWidth={1.5} />
            <span className="text-[14px] leading-none text-[#9ca3af]">{time}</span>
          </div>

          <span className="text-[14px] leading-none text-[#9ca3af]">{readTime}</span>
        </div>

        <div className="flex items-center gap-[10px]">
          <button
            type="button"
            className="flex h-[25px] w-[25px] items-center justify-center rounded-md bg-[#f3f4f6]"
            aria-label="Star article"
          >
            <Star className="h-[13px] w-[13px] text-[#374151]" strokeWidth={1.5} />
          </button>

          <button
            type="button"
            className="flex h-[25px] w-[25px] items-center justify-center rounded-md bg-[#f3f4f6]"
            aria-label="Bookmark article"
          >
            <Bookmark className="h-[16px] w-[16px] text-[#374151]" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <h3 className="mt-[15px] text-[18px] font-semibold leading-tight text-[#1a1a2e] truncate">
        {title}
      </h3>

      <p className="mt-[7px] text-[15px] leading-tight text-[#6b7280] truncate">
        {description}
      </p>
    </div>
  );
}
