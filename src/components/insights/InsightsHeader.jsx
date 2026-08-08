import { ChevronDown, Upload } from "lucide-react";
import { insightsCompany } from "./insightsMockData";

export default function InsightsHeader() {
  return (
    <div className="flex items-start justify-between">
      <div>
        <h1 className="text-[24px] font-semibold leading-[30px] text-black">
          Ai Insights
        </h1>
        <p className="mt-[5px] text-[14px] leading-[21px] text-[#4b5563]">
          AI-generated investment insights, risk analysis, and growth predictions.
        </p>
      </div>

      <div className="mt-[21.85px] flex items-center gap-[22.55px]">
        <div className="flex h-[40px] w-[130.55px] items-center justify-between rounded-[15px] border border-[#e5e7eb] bg-white px-[14.5px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">
          <span className="text-[15px] text-[#4b5563]">{insightsCompany.name}</span>
          <ChevronDown
            className="h-[6px] w-[10px] text-[#4b5563]"
            strokeWidth={2}
          />
        </div>

        <button
          type="button"
          className="flex h-[40px] w-[165px] items-center gap-[6px] rounded-[15px] border border-[#e5e7eb] bg-white px-[13px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]"
        >
          <Upload className="h-6 w-6 text-[#4b5563]" strokeWidth={1.75} />
          <span className="text-[15px] text-[#4b5563]">Export Report</span>
        </button>
      </div>
    </div>
  );
}
