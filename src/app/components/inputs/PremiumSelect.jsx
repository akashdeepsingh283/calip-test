"use client";

import { useState, useRef, useEffect, useId } from "react";
import { ChevronDown } from "lucide-react";

export default function PremiumSelect({
  label,
  name,
  value,
  onChange,
  options,
  error,
  required = false,
}) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);

  const selected = options.find((o) => o.value === value);
  const hasValue = !!value && !!selected;

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <div className="relative">
        <button
          type="button"
          id={id}
          name={name}
          onClick={() => setOpen((p) => !p)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-invalid={!!error}
          className={[
            "input-premium w-full rounded-xl bg-white/[0.03] border text-sm text-left outline-none",
            "h-14 px-4 pt-5 pb-2",
            error
              ? "border-red-400/50 input-error"
              : "border-white/[0.08]",
            "transition-all duration-200 cursor-pointer",
          ].join(" ")}
        >
          <span
            className={[
              "absolute left-4 transition-all duration-200 pointer-events-none",
              "text-muted-foreground",
              hasValue || focused
                ? "top-2 text-[10px] uppercase tracking-wider"
                : "top-1/2 -translate-y-1/2 text-sm",
              error ? "text-red-400/70" : "",
            ].join(" ")}
          >
            {label}
            {required && <span className="text-primary-glow ml-0.5">*</span>}
          </span>
          {hasValue && (
            <span className="text-foreground text-sm" aria-hidden={!hasValue}>
              {selected.label}
            </span>
          )}
          {!hasValue && focused && (
            <span className="text-muted-foreground/40 text-sm">
              Choose...
            </span>
          )}
          <ChevronDown
            className={[
              "absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground transition-transform duration-200",
              open ? "rotate-180" : "",
            ].join(" ")}
            aria-hidden="true"
          />
        </button>
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

      {open && (
        <div
          role="listbox"
          aria-label={label}
          className={[
            "select-dropdown absolute z-50 mt-2 w-full rounded-xl border border-white/[0.1]",
            "bg-[#0d0d14]/95 backdrop-blur-md",
            "shadow-[0_8px_40px_rgba(0,0,0,0.4)]",
            "overflow-hidden",
          ].join(" ")}
        >
          {options.map((opt, i) => {
            const isSelected = opt.value === value;
            return (
              <button
                key={opt.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange({ target: { name, value: opt.value } });
                  setOpen(false);
                }}
                className={[
                  "w-full text-left px-4 py-3 text-sm transition-colors duration-150",
                  isSelected
                    ? "text-foreground bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]",
                  i > 0 ? "border-t border-white/[0.04]" : "",
                ].join(" ")}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      )}

      {error && (
        <p
          className="error-message mt-1.5 text-xs text-red-400"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
