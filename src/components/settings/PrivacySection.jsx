import { Globe, Lock, Shield, Users } from "lucide-react";
import SettingsCard from "./SettingsCard";
import SettingsToggle from "./SettingsToggle";
import { privacySettings } from "./settingsMockData";

const iconMap = {
  globe: Globe,
  lock: Lock,
  users: Users,
  shield: Shield,
};

export default function PrivacySection() {
  return (
    <SettingsCard className="h-[535px]">
      <h2 className="absolute left-[35px] top-[15px] text-[20px] font-bold leading-none text-black">
        Privacy
      </h2>
      <p className="absolute left-[35px] top-[54px] text-[14px] leading-none text-[#8791a7]">
        Control what others can see about you
      </p>

      {privacySettings.map((item, index) => {
        const tileTop = 101 + index * 90;
        const Icon = iconMap[item.icon] || Globe;

        return (
          <div key={item.id}>
            <div
              className="absolute left-[35px] right-[35px] h-px bg-[#242730]"
              style={{ top: 86 + index * 90 }}
            />
            <div
              className="absolute left-[40px] flex h-[59px] w-[58px] items-center justify-center rounded-[20px] border border-[#131622] bg-[#6450ea]"
              style={{ top: tileTop }}
            >
              <Icon className="h-[30px] w-[30px] text-white" strokeWidth={1.5} />
            </div>
            <p
              className="absolute left-[129px] text-[16px] font-semibold leading-none text-[#9da3b0]"
              style={{ top: tileTop + 10 }}
            >
              {item.title}
            </p>
            <p
              className="absolute left-[129px] text-[14px] leading-none text-[#8791a7]"
              style={{ top: tileTop + 30 }}
            >
              {item.description}
            </p>
            <div className="absolute right-[32px]" style={{ top: tileTop + 17.5 }}>
              <SettingsToggle defaultOn={item.defaultOn} />
            </div>
          </div>
        );
      })}
    </SettingsCard>
  );
}
