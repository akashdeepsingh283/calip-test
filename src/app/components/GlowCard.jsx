"use client";

import { useId } from "react";
import EnergyCircuit from "./EnergyCircuit";

export default function GlowCard({ children, className = "" }) {
  const id = useId();
  const filterId = `gc-${id.replace(/[:.]/g, "-")}`;

  return (
    <article
      className={`group btn-energy relative overflow-hidden rounded-3xl glass depth-2 depth-hover hover:border-white/10 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-px rounded-[calc(1.5rem-1px)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(135deg, rgba(139, 124, 255, 0.15), transparent 30%, transparent 70%, rgba(139, 124, 255, 0.06))",
          maskImage:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      <EnergyCircuit filterId={filterId} cornerRadius={24} />
      <div className="relative z-10">{children}</div>
    </article>
  );
}
