import SettingsCard from "./SettingsCard";
import SettingsToggle from "./SettingsToggle";
import { notificationSettings } from "./settingsMockData";

export default function NotificationsSection() {
  return (
    <SettingsCard className="h-[264px]">
      <h2 className="absolute left-[35px] top-[15px] text-[20px] font-bold leading-none text-black">
        Notifications
      </h2>

      {notificationSettings.map((item, index) => (
        <div key={item.id}>
          <div
            className="absolute left-[35px] right-[35px] h-px bg-[#242730]"
            style={{ top: 64 + index * 50 }}
          />
          <p
            className="absolute left-[35px] text-[14px] leading-none text-[#8791a7]"
            style={{ top: 78 + index * 50 }}
          >
            {item.label}
          </p>
          <div
            className="absolute right-[32px]"
            style={{ top: 75.8 + index * 50 }}
          >
            <SettingsToggle defaultOn={item.defaultOn} />
          </div>
        </div>
      ))}
    </SettingsCard>
  );
}
