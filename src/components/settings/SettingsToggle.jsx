"use client";

import { useState } from "react";

export default function SettingsToggle({ defaultOn = false }) {
  const [on, setOn] = useState(defaultOn);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label="Toggle setting"
      onClick={() => setOn((prev) => !prev)}
      className={`relative h-[24px] w-[47px] shrink-0 rounded-full transition-colors duration-200 ${
        on ? "bg-[#6B54F3]" : "bg-[#1C202E]"
      }`}
    >
      <span
        className={`absolute top-[2px] h-[20px] w-[20px] rounded-full bg-white transition-all duration-200 ${
          on ? "left-[25px]" : "left-[2px]"
        }`}
      />
    </button>
  );
}
