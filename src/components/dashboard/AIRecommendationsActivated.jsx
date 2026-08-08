import { aiRecommendationsData } from "./mockData";

export default function AIRecommendationsActivated() {
  return (
    <div className="min-h-[278px] w-full rounded-[16px] border border-[#f0f0f0] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <div className="flex h-full flex-col p-[30px]">
        <h2 className="text-[20px] font-semibold text-[#1a1a2e]">AI Recommendations</h2>

        <div className="mt-[10px] flex-1 space-y-[11px]">
          {aiRecommendationsData.map((item) => (
            <div
              key={item.initial}
              className="flex h-[55px] items-center justify-between rounded-lg bg-[#f9fafb] px-3"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-[42px] w-[42px] items-center justify-center rounded-lg bg-[#eef2ff] text-[20px] font-semibold text-[#6366f1]">
                  {item.initial}
                </div>
                <div>
                  <p className="text-[18px] font-semibold text-[#1a1a2e]">{item.title}</p>
                  <p className="text-[15px] text-[#9ca3af]">{item.category}</p>
                </div>
              </div>
              <span className="text-[18px] font-semibold text-[#1a1a2e]">{item.score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
