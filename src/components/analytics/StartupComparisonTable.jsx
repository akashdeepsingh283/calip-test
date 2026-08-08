import { comparisonCompanies } from "./analyticsMockData";

const headers = [
  "Company",
  "Sector",
  "Stage",
  "AI Score",
  "Growth",
  "Revenue",
  "Raised",
];

const gridColumns =
  "235.99px 198.175px 123.263px 127.15px 124.238px 144.512px 107.475px";

export default function StartupComparisonTable() {
  return (
    <div className="flex h-[410px] w-[1139px] flex-col items-start rounded-[16px] border border-[#e5e7eb] bg-white p-[24.8px] shadow-[0px_1px_1.5px_rgba(0,0,0,0.08),0px_1px_1px_rgba(0,0,0,0.04)]">
      <h3 className="text-[15px] font-semibold leading-[22.5px] text-[#111827]">
        Startup Comparison
      </h3>

      <div className="h-[330.1px] w-full">
        <div
          className={`mt-[16px] grid h-[32.9px] w-[1060.8px] items-center border-b-[0.8px] border-[#e5e7eb]`}
          style={{ gridTemplateColumns: gridColumns }}
        >
          {headers.map((header) => (
            <div
              key={header}
              className="pl-[12px] text-[11px] font-semibold uppercase leading-[16.5px] tracking-[0.4px] text-[#9ca3af]"
            >
              {header}
            </div>
          ))}
        </div>

        {comparisonCompanies.map((c) => (
          <div
            key={c.name}
            className="grid h-[46.8px] w-[1060.8px] items-center border-b-[0.8px] border-[#f3f4f6]"
            style={{ gridTemplateColumns: gridColumns }}
          >
            <div className="flex items-center gap-[8px] pl-[12px]">
              <div
                className="flex size-[26px] items-center justify-center rounded-[6px]"
                style={{ backgroundColor: c.avatarBg }}
              >
                <span
                  className="text-[11px] font-bold leading-[16.5px]"
                  style={{ color: c.avatarColor }}
                >
                  {c.initial}
                </span>
              </div>
              <span className="text-[13px] font-semibold leading-[19.5px] text-[#111827]">
                {c.name}
              </span>
            </div>
            <div className="pl-[12px] text-[12px] leading-[18px] text-[#4b5563]">
              {c.sector}
            </div>
            <div className="pl-[12px] text-[12px] leading-[18px] text-[#4b5563]">
              {c.stage}
            </div>
            <div className="pl-[12px]">
              <span className="inline-flex h-[19.2px] items-center rounded-[6px] bg-[#eef2ff] px-[8px] text-[12px] font-bold leading-[18px] text-[#4f46e5]">
                {c.aiScore}
              </span>
            </div>
            <div className="pl-[12px] text-[12px] font-semibold leading-[18px] text-[#16a34a]">
              {c.growth}
            </div>
            <div className="pl-[12px] text-[12px] leading-[18px] text-[#111827]">
              {c.revenue}
            </div>
            <div className="pl-[12px] text-[12px] font-medium leading-[18px] text-[#111827]">
              {c.raised}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
