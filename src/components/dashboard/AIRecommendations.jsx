import Link from "next/link";
import { Unlock } from "lucide-react";
import { aiRecommendationsData } from "./mockData";

export default function AIRecommendations() {
  return (
    <div className="relative min-h-[278px] w-full overflow-hidden rounded-[16px] border border-[#f0f0f0] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <div className="flex h-full flex-col p-[30px]">
        <h2 className="text-[20px] font-semibold text-[#1a1a2e]">AI Recommendations</h2>

        <div className="relative mt-[10px] flex-1">
          {/* Blurred background rows */}
          <div className="space-y-[11px] blur-[6px] select-none" aria-hidden="true">
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

          {/* Lock overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/40 backdrop-blur-[2px]">
            <Unlock className="h-[39px] w-[39px] text-[#1a1a2e]" strokeWidth={1.5} />
            <p className="mt-2 max-w-[440px] text-center text-[18px] font-medium leading-snug text-[#1a1a2e]">
              Unlock Calip.io Pro to access new features
            </p>
            <Link
              href="/pro"
              className="mt-[5px] rounded-xl bg-[#584DB0] px-8 py-[10px] text-[16px] font-semibold text-white shadow-[0_4px_14px_rgba(88,77,176,0.35)] transition-colors hover:bg-[#4a3f9a]"
            >
              Activate with @99/ month
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
