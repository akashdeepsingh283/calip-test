import { aiTableData } from "./performanceMockData";

export default function AIRecommendationsTable() {
  return (
    <div className="w-full rounded-[16px] border border-[#f0f0f0] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <div className="px-[36px] pb-[20px] pt-[30px]">
        <h2 className="text-[20px] font-semibold leading-none text-[#1a1a2e]">
          AI Recommendations
        </h2>

        <div className="mt-[36px] grid grid-cols-[50px_1fr_1.2fr_1fr_1fr_1fr_0.8fr] items-center">
          <div />
          <span className="text-[15px] leading-none text-[#9ca3af]">Company</span>
          <span className="text-[15px] leading-none text-[#9ca3af]">Sector</span>
          <span className="text-[15px] leading-none text-[#9ca3af]">Invested</span>
          <span className="text-[15px] leading-none text-[#9ca3af]">Current Value</span>
          <span className="text-[15px] leading-none text-[#9ca3af]">Gain/Loss</span>
          <span className="text-[15px] leading-none text-[#9ca3af]">ROI</span>
        </div>

        <div className="mt-[8px] border-t border-[#e5e7eb]" />

        {aiTableData.map((row, index) => (
          <div key={row.initial}>
            <div className="grid grid-cols-[50px_1fr_1.2fr_1fr_1fr_1fr_0.8fr] h-[50px] items-center">
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-lg bg-[#eef2ff] text-[20px] font-semibold text-[#6366f1]">
                {row.initial}
              </div>

              <span className="text-[18px] font-semibold text-[#1a1a2e]">
                {row.name}
              </span>

              <span className="text-[16px] text-[#374151]">{row.sector}</span>

              <span className="text-[18px] text-[#1a1a2e]">{row.invested}</span>

              <span className="text-[18px] text-[#1a1a2e]">
                {row.currentValue}
              </span>

              <span
                className={`text-[18px] ${
                  row.gainPositive ? "text-[#10b981]" : "text-[#ef4444]"
                }`}
              >
                {row.gainLoss}
              </span>

              <span
                className={`text-[18px] ${
                  row.roiPositive ? "text-[#10b981]" : "text-[#ef4444]"
                }`}
              >
                {row.roi}
              </span>
            </div>

            {index < aiTableData.length - 1 && (
              <div className="mt-[16px] mb-[15px] border-t border-[#e5e7eb]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
