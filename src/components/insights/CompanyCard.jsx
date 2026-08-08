import { insightsCompany } from "./insightsMockData";

export default function CompanyCard() {
  return (
    <div className="flex h-[95.8px] w-[1346px] items-center justify-between rounded-[20px] border border-[#e5e7eb] bg-white px-[25px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">
      <div className="flex items-center gap-[17.5px]">
        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[10px] bg-[#e3eaf7]">
          <span className="text-[20px] font-semibold leading-[25px] text-[#3b7bf8]">
            {insightsCompany.initial}
          </span>
        </div>
        <div>
          <p className="text-[16px] leading-[18px] text-[#111827]">
            {insightsCompany.name}
          </p>
          <p className="mt-[3px] text-[14px] leading-[15px] text-[#4b5563]">
            {insightsCompany.sector}
          </p>
        </div>
      </div>

      <div className="flex h-[78.166px] w-[78.166px] flex-col items-center justify-center rounded-[10px] bg-[#e3eaf7]">
        <span className="text-[32px] font-semibold leading-none text-[#7a49e8]">
          {insightsCompany.aiScore}
        </span>
        <span className="mt-[3px] text-[10px] leading-[15px] text-[#7a49e8]">
          AI Score
        </span>
      </div>
    </div>
  );
}
