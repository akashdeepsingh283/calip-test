"use client";

import { useState, useId } from "react";

export default function PremiumInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  required = false,
  autoComplete,
  placeholder,
}) {
  const id = useId();
  const [focused, setFocused] = useState(false);

  const hasValue = typeof value === "string" && value.trim().length > 0;
  const float = focused || hasValue;

  return (
    <div className="relative">
      <div className="relative">
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          autoComplete={autoComplete}
          placeholder={float ? placeholder || "" : " "}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={[
            "input-premium peer w-full rounded-xl bg-white/[0.03] border text-sm text-foreground outline-none",
            "h-14 px-4 pt-5 pb-2",
            error
              ? "border-red-400/50 input-error"
              : "border-white/[0.08]",
            "transition-all duration-200",
          ].join(" ")}
        />
        <label
          htmlFor={id}
          className={[
            "absolute left-4 transition-all duration-200 pointer-events-none",
            "text-muted-foreground",
            float
              ? "top-2 text-[10px] uppercase tracking-wider"
              : "top-1/2 -translate-y-1/2 text-sm",
            error ? "text-red-400/70" : "",
          ].join(" ")}
        >
          {label}
          {required && <span className="text-primary-glow ml-0.5">*</span>}
        </label>
        <div
          className={[
            "absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300",
            focused && !error
              ? "opacity-100 ring-4 ring-primary/15"
              : "opacity-0",
          ].join(" ")}
          aria-hidden="true"
        />
      </div>
      {error && (
        <p
          id={`${id}-error`}
          className="error-message mt-1.5 text-xs text-red-400"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
