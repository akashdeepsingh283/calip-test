"use client";

import { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";

function renderAnswer(answer) {
  const blocks = answer.split("\n\n");
  return blocks.map((block, blockIdx) => {
    const lines = block.split("\n");
    const hasBullets = lines.some((l) => l.trim().startsWith("•"));
    if (hasBullets) {
      return (
        <div key={blockIdx} className={blockIdx > 0 ? "mt-4" : ""}>
          {lines.map((line, lineIdx) => {
            const trimmed = line.trim();
            if (trimmed.startsWith("•")) {
              return (
                <div key={lineIdx} className="flex gap-3 ml-1 mt-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-glow shadow-[0_0_10px_rgba(139,124,255,0.8)]" />
                  <span>{trimmed.slice(1).trim()}</span>
                </div>
              );
            }
            return trimmed ? (
              <p key={lineIdx} className={lineIdx > 0 ? "mt-2" : ""}>
                {trimmed}
              </p>
            ) : null;
          })}
        </div>
      );
    }
    return (
      <p key={blockIdx} className={blockIdx > 0 ? "mt-4" : ""}>
        {lines.join("\n")}
      </p>
    );
  });
}

export default function FAQAccordion({ items, defaultOpen = 0, className = "" }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`glass-strong motion-lift rounded-2xl overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isOpen ? "border-l-2 border-l-primary/40 border-white/15" : "border-white/10"
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="group flex w-full items-center justify-between gap-4 p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-inset rounded-2xl transition-colors duration-200 hover:bg-white/[0.02]"
              aria-expanded={isOpen}
            >
              <span className="font-display text-base md:text-lg font-semibold text-foreground transition-colors duration-200 group-hover:text-primary-glow">
                {item.question}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isOpen
                    ? "bg-primary/15 border-primary/40 text-primary-glow rotate-45"
                    : "border-white/10 text-muted-foreground group-hover:border-white/20 group-hover:text-foreground"
                }`}
                aria-hidden="true"
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <div
              className={`accordion-content ${isOpen ? "open" : ""}`}
              role="region"
            >
              <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">
                {renderAnswer(item.answer)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}