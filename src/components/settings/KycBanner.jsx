import { Shield } from "lucide-react";
import SettingsCard from "./SettingsCard";

export default function KycBanner() {
  return (
    <SettingsCard className="h-[98px] border-[#452f0d]">
      <div className="absolute left-[33px] top-[19px] flex h-[59px] w-[58px] items-center justify-center rounded-[20px] bg-[#6450ea]">
        <Shield className="h-[34px] w-[35px] text-white" strokeWidth={2} />
      </div>

      <p className="absolute left-[129px] top-[25px] text-[16px] font-semibold leading-none text-black">
        Identity Verification (KYC)
      </p>
      <p className="absolute left-[129px] top-[56px] text-[12px] leading-none text-[#6878a0]">
        Verify your identity to unlock higher limits
      </p>

      <span className="absolute left-[423px] top-[25px] flex h-[21px] w-[126px] items-center justify-center rounded-[5px] border border-[#3c3184] bg-[#6551ED] text-[9px] font-bold uppercase tracking-wide text-white">
        Not Verified
      </span>

      <button
        type="button"
        className="absolute left-[1128px] top-[29px] flex h-[40px] w-[205px] items-center justify-center rounded-[20px] bg-[#6651F1] text-[13px] font-semibold text-white transition-colors hover:bg-[#5741dc]"
      >
        Start Verification
      </button>
    </SettingsCard>
  );
}
