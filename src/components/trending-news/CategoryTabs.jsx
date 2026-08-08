import { categories } from "./trendingNewsMockData";

export default function CategoryTabs() {
  return (
    <div className="flex flex-wrap items-center gap-[10px]">
      {categories.map((category, index) => {
        const isFirst = index === 0;
        return (
          <button
            key={category}
            type="button"
            className={`flex h-[38px] items-center justify-center rounded-lg px-[16px] text-[16px] font-medium leading-none transition-colors ${
              isFirst
                ? "bg-[#6366f1] text-white"
                : "bg-[#f3f4f6] text-[#374151] hover:bg-[#e5e7eb]"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
