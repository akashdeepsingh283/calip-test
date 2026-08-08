import { Copy, Trash2, Wallet } from "lucide-react";
import SettingsCard from "./SettingsCard";
import { wallets } from "./settingsMockData";

function WalletRow({ wallet, index }) {
  const baseTop = 102 + index * 90;

  return (
    <>
      {index > 0 && (
        <div className="absolute left-[35px] right-[35px] h-px bg-[#242730]" style={{ top: 177 }} />
      )}

      <div
        className="absolute left-[40px] flex h-[59px] w-[58px] items-center justify-center rounded-[20px] border border-[#131622] bg-[#6450ea]"
        style={{ top: baseTop }}
      >
        <Wallet className="h-[28px] w-[28px] text-white" strokeWidth={1.5} />
      </div>

      <p
        className="absolute left-[129px] text-[16px] font-semibold leading-none text-[#9da3b0]"
        style={{ top: baseTop + 14 }}
      >
        {wallet.name}
      </p>

      <span
        className="absolute flex h-[30px] items-center justify-center rounded-[20px] bg-[#6450ea] text-[14px] font-semibold leading-none text-white"
        style={{
          left: wallet.badgeLeft,
          width: wallet.badgeWidth,
          top: baseTop + 15,
        }}
      >
        {wallet.badge}
      </span>

      <span
        className="absolute font-mono text-[11px] font-medium leading-none text-[#333D58]"
        style={{ left: 640, width: 116, top: baseTop + 22 }}
      >
        {wallet.address}
      </span>

      <button
        type="button"
        className="absolute flex h-[27px] w-[28px] items-center justify-center text-[#6878a0] transition-colors hover:text-[#333D58]"
        style={{ left: 779, top: baseTop + 16 }}
        aria-label={`Copy ${wallet.name} address`}
      >
        <Copy className="h-[24px] w-[24px]" strokeWidth={1.5} />
      </button>

      <button
        type="button"
        className="absolute left-[1271px] flex h-[59px] w-[58px] items-center justify-center rounded-[15px] border border-[#2f2763] bg-[#6450e8] transition-colors hover:bg-[#5741dc]"
        style={{ top: baseTop }}
        aria-label={`Remove ${wallet.name}`}
      >
        <Trash2 className="h-[24px] w-[24px] text-white" strokeWidth={1.5} />
      </button>
    </>
  );
}

export default function ConnectedWallets() {
  return (
    <SettingsCard className="h-[267px]">
      <h2 className="absolute left-[35px] top-[15px] text-[20px] font-bold leading-none text-black">
        Connected Wallet
      </h2>
      <p className="absolute left-[35px] top-[52px] text-[14px] leading-none text-[#8791a7]">
        Manage wallets linked to your account
      </p>

      <button
        type="button"
        className="absolute left-[1128px] top-[24px] flex h-[40px] w-[205px] items-center justify-center rounded-[20px] bg-[#6550EB] text-[15px] font-semibold text-white transition-colors hover:bg-[#5741dc]"
      >
        + Add Wallet
      </button>

      <div className="absolute left-[35px] right-[35px] top-[87px] h-px bg-[#242730]" />

      {wallets.map((wallet, index) => (
        <WalletRow key={wallet.id} wallet={wallet} index={index} />
      ))}
    </SettingsCard>
  );
}
