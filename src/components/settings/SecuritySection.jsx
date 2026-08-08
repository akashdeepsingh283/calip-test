import { ChevronRight } from "lucide-react";
import SettingsCard from "./SettingsCard";
import SettingsToggle from "./SettingsToggle";
import { securityItems } from "./settingsMockData";

export default function SecuritySection() {
  return (
    <SettingsCard className="h-[334px]">
      <h2 className="absolute left-[35px] top-[15px] text-[20px] font-bold leading-none text-black">
        Security
      </h2>

      {securityItems.map((item, index) => {
        const dividerTop = 64 + index * 90;
        const titleTop = dividerTop + 28;
        const descTop = titleTop + 20;

        return (
          <div key={item.id}>
            <div
              className="absolute left-[35px] right-[35px] h-px bg-[#242730]"
              style={{ top: dividerTop }}
            />
            <p
              className="absolute left-[35px] text-[16px] font-semibold leading-none text-black"
              style={{ top: titleTop }}
            >
              {item.title}
            </p>
            <p
              className="absolute left-[35px] text-[14px] leading-none text-[#8791a7]"
              style={{ top: descTop }}
            >
              {item.description}
            </p>

            {item.type === "arrow" && (
              <div className="absolute left-[1318px]" style={{ top: 97 }}>
                <ChevronRight
                  className="h-[27px] w-[14px] text-[#6878A0]"
                  strokeWidth={3}
                />
              </div>
            )}

            {item.type === "toggle" && (
              <>
                <span
                  className="absolute left-[1182px] text-[12px] font-semibold leading-none text-[#7C5CFC]"
                  style={{ top: 189 }}
                >
                  {item.cta}
                </span>
                <div className="absolute right-[32px]" style={{ top: 185.8 }}>
                  <SettingsToggle defaultOn />
                </div>
              </>
            )}
          </div>
        );
      })}
    </SettingsCard>
  );
}
