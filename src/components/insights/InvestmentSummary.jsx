import { aiVerdict, summaryMetrics } from "./insightsMockData";

export default function InvestmentSummary() {
  return (
    <div className="h-[490px] w-[1350px] rounded-[20px] border border-[#e5e7eb] bg-white px-[28.5px] pt-[28px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">
      <h2 className="text-[16px] font-semibold leading-[24px] text-[#111827]">
        AI Investment Summary
      </h2>

      <div className="mt-[49px]">
        {summaryMetrics.map((metric, index) => (
          <div key={metric.id} className="relative h-[54.17px]">
            <p className="absolute left-0 top-0 text-[13px] leading-[19.5px] text-[#4b5563]">
              {metric.label}
            </p>

            {index === 0 && (
              <p className="absolute right-0 top-[24px] text-[13px] font-semibold leading-[19.5px] text-[#16a34a]">
                Exceptional · 92/100
              </p>
            )}

            <div className="absolute left-0 top-[30px] h-[10px] w-[1100px] rounded-[20px] bg-[#d9d9d9]">
              <div
                className="h-full rounded-[20px]"
                style={{
                  width: `${metric.barPercent}%`,
                  backgroundColor: metric.barColor,
                }}
              />
            </div>

            <p
              className="absolute right-0 top-[79px] text-[13px] font-semibold leading-[19.5px]"
              style={{ color: metric.scoreColor }}
            >
              {metric.score}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-[45px] rounded-[20px] bg-[#eef2ff] px-[18px] py-[15px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">
        <p className="text-[20px] leading-[30px] text-[#4f46e5]">
          <span className="font-bold">AI Verdict:</span>
          {aiVerdict}
        </p>
      </div>
    </div>
  );
}
