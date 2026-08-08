import SettingsCard from "./SettingsCard";

export default function DeleteAccount() {
  return (
    <SettingsCard className="h-[91px] border-[#2d1627] bg-[#6450ea]">
      <p className="absolute left-[35px] top-[29px] text-[16px] font-semibold leading-none text-[#e9edf6]">
        Delete account
      </p>
      <p className="absolute left-[35px] top-[49px] text-[14px] leading-none text-white">
        Permanently delete your account and all data
      </p>

      <button
        type="button"
        className="absolute left-[1198px] top-[26px] flex h-[40px] w-[135px] items-center justify-center rounded-[15px] border border-[#471a2e] bg-white text-[16px] font-semibold text-[#F0395A] transition-colors hover:bg-[#fef2f2]"
      >
        Delete
      </button>
    </SettingsCard>
  );
}
