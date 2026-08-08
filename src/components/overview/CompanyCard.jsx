import { ArrowRight, X } from "lucide-react";

export default function CompanyCard({ initial, name, raised, category, growth, progress }) {
  return (
    <div className="flex h-[80px] w-full items-center rounded-[16px] border border-[#f0f0f0] bg-white px-[25px] shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-lg bg-[#eef2ff] text-[20px] font-semibold text-[#6366f1]">
        {initial}
      </div>

      <div className="ml-[16px] flex flex-col">
        <span className="text-[18px] font-semibold leading-tight text-[#1a1a2e]">
          {name}
        </span>
        <span className="mt-[2px] text-[15px] text-[#9ca3af]">{raised}</span>
      </div>

      <div className="ml-[127px] flex flex-col">
        <span className="text-[15px] leading-tight text-[#374151]">{category}</span>
        <span className="mt-[2px] text-[15px] text-[#10b981]">{growth}</span>
      </div>

      <div className="ml-auto flex items-center gap-[15px]">
        <div className="flex flex-col items-end gap-[5px]">
          <div className="h-[12px] w-[200px] overflow-hidden rounded-full bg-[#f3f4f6]">
            <div
              className="h-full rounded-full bg-[#6366f1] transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[15px] text-[#374151]">{progress}%</span>
        </div>

        <div className="flex items-center gap-[5px]">
          <button
            type="button"
            className="flex h-[50px] w-[50px] items-center justify-center rounded-lg bg-[#f3f4f6] transition-colors hover:bg-[#e5e7eb]"
            aria-label={`View ${name} details`}
          >
            <ArrowRight className="h-[13px] w-[13px] text-[#374151]" strokeWidth={2} />
          </button>

          <button
            type="button"
            className="flex h-[50px] w-[50px] items-center justify-center rounded-lg bg-[#f3f4f6] transition-colors hover:bg-[#e5e7eb]"
            aria-label={`Remove ${name} from watchlist`}
          >
            <X className="h-[22px] w-[22px] text-[#374151]" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
