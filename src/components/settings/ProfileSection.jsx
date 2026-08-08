import { Camera, User } from "lucide-react";
import SettingsCard from "./SettingsCard";
import { profileUser, profileFields, profileFullWidthFields } from "./settingsMockData";

const inputClass =
  "h-[40px] w-full rounded-[10px] border border-[#242730] bg-[#f4f5f7] px-4 text-[14px] leading-none text-[#9ca3af] outline-none";

function ProfileField({ field }) {
  return (
    <div>
      <label className="block text-[14px] leading-none text-[#8791a7]">
        {field.label}
      </label>
      <input
        type="text"
        readOnly
        value={field.value}
        className={`${inputClass} mt-[16px]`}
      />
    </div>
  );
}

export default function ProfileSection() {
  const firstTwo = profileFields.filter((f) => f.id <= 2);
  const nextFour = profileFields.filter((f) => f.id > 2);

  return (
    <SettingsCard className="h-[623px] border-[#242730] bg-[rgba(255,255,255,0.3)]">
      <h2 className="absolute left-[35px] top-[15px] text-[20px] font-bold leading-none text-black">
        Profile
      </h2>

      <div className="absolute left-[42px] top-[51px] flex h-[81px] w-[81px] items-center justify-center rounded-full bg-white">
        <User className="h-[36px] w-[36px] text-black" strokeWidth={1.5} />
      </div>
      <div className="absolute left-[106.6px] top-[102.08px] flex h-[34.8px] w-[34.8px] items-center justify-center rounded-full bg-[#6551EE]">
        <Camera className="h-[16px] w-[16px] text-white" strokeWidth={2} />
      </div>

      <p className="absolute left-[176.6px] top-[74.5px] text-[16px] font-bold leading-none text-[#9ca3af]">
        {profileUser.name}
      </p>
      <p className="absolute left-[176.6px] top-[94.5px] text-[14px] leading-none text-[#8791a7]">
        {profileUser.handle}
      </p>

      <div className="absolute left-[35px] top-[163px] grid w-[1292px] grid-cols-2 gap-x-[35px] gap-y-[20px]">
        {firstTwo.map((f) => (
          <ProfileField key={f.id} field={f} />
        ))}
        {nextFour.map((f) => (
          <ProfileField key={f.id} field={f} />
        ))}
        {profileFullWidthFields.map((f) => (
          <div key={f.id} className="col-span-2">
            <ProfileField field={f} />
          </div>
        ))}
      </div>
    </SettingsCard>
  );
}
