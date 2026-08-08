"use client";

import { X } from "lucide-react";

export default function UpgradeModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/40 backdrop-blur-[9.5px]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Upgraded to Calip Pro"
    >
      <div
        className="relative flex h-[603.367px] w-[1004.388px] max-w-[90vw] flex-col items-center rounded-[30px] bg-white shadow-[10px_10px_50px_10px_rgba(0,0,0,0.25)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-[30px] top-[30px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#f4f5f7] text-[#4b5563] transition-colors hover:bg-[#e5e7eb]"
        >
          <X className="h-5 w-5" strokeWidth={1.5} />
        </button>

        <div className="flex flex-col items-center pt-[152px] text-center">
          <h2 className="whitespace-nowrap text-[48px] font-bold leading-[58px] text-black">
            Upgraded to Calip Pro
          </h2>
          <p className="mt-[54px] w-[520px] text-[20px] font-bold leading-[27.2px] text-[#4b5563]">
            Your subscription is now active. You have full access to&nbsp;
            AI-powered analysis, advanced portfolio analytics, and priority
            access to the best deals on Calip.
          </p>
        </div>
      </div>
    </div>
  );
}
