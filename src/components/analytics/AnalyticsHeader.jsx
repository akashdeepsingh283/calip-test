export default function AnalyticsHeader() {
  return (
    <div className="flex items-start justify-between">
      <div>
        <h1 className="text-[24px] font-semibold leading-[30px] text-black">
          Analytics
        </h1>
        <p className="mt-[5px] text-[14px] leading-[21px] text-[#4b5563]">
          Deep-dive analytics: startup comparisons, industry trends, and funding heatmaps.
        </p>
      </div>

      <div className="mt-[21.85px] flex items-center gap-[11px]">
        <button
          type="button"
          className="flex h-[40px] w-[124px] items-center justify-center rounded-[15px] bg-[#7a49e8] text-[15px] text-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]"
        >
          Overview
        </button>
        <button
          type="button"
          className="flex h-[40px] w-[124px] items-center justify-center rounded-[15px] border border-[#e5e7eb] bg-white text-[15px] text-[#4b5563] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]"
        >
          Comparison
        </button>
      </div>
    </div>
  );
}
