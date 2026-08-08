"use client";

import { useRef, useEffect, useCallback } from "react";

const LAYERS = [
  { stroke: "rgba(139, 124, 255, 0.025)", width: 12, filter: "bloom" },
  { stroke: "rgba(169, 155, 255, 0.06)", width: 8, filter: "bloom" },
  { stroke: "rgba(139, 124, 255, 0.15)", width: 5, filter: "glow" },
  { stroke: "rgba(139, 124, 255, 0.55)", width: 2.5, filter: null },
];

export default function EnergyCircuit({ borderRadius = "2rem", filterId = "ec", cornerRadius = 32 }) {
  const svgRef = useRef(null);
  const animRef = useRef(null);
  const startTimeRef = useRef(0);
  const hoveredRef = useRef(false);

  const animate = useCallback(() => {
    if (!hoveredRef.current) return;
    const svg = svgRef.current;
    if (!svg) return;

    const elapsed = performance.now() - startTimeRef.current;
    const t = Math.min(elapsed / 2500, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    const offset = 1 - eased;

    const trails = svg.querySelectorAll(".charge-trail");
    for (let i = 0; i < trails.length; i++) {
      trails[i].setAttribute("stroke-dashoffset", offset);
    }

    const particle = svg.querySelector(".charge-particle");
    if (particle) {
      particle.setAttribute("stroke-dashoffset", offset);
    }

    if (t < 1) {
      animRef.current = requestAnimationFrame(animate);
    }
  }, []);

  const startCharge = useCallback(() => {
    const svg = svgRef.current;
    if (!svg) return;
    hoveredRef.current = true;
    startTimeRef.current = performance.now();

    const trails = svg.querySelectorAll(".charge-trail, .charge-particle");
    for (let i = 0; i < trails.length; i++) {
      const el = trails[i];
      el.style.opacity = "1";
      el.style.transition = "opacity 0.6s ease";
    }

    if (animRef.current) cancelAnimationFrame(animRef.current);
    animRef.current = requestAnimationFrame(animate);
  }, [animate]);

  const stopCharge = useCallback(() => {
    const svg = svgRef.current;
    if (!svg) return;
    hoveredRef.current = false;
    if (animRef.current) {
      cancelAnimationFrame(animRef.current);
      animRef.current = null;
    }

    const els = svg.querySelectorAll(".charge-trail, .charge-particle");
    for (let i = 0; i < els.length; i++) {
      const el = els[i];
      el.style.opacity = "0";
      el.style.transition = "opacity 0.6s ease, stroke-dashoffset 0s 0.6s";
    }

    setTimeout(() => {
      if (!hoveredRef.current && svgRef.current) {
        const reset = svgRef.current.querySelectorAll(".charge-trail, .charge-particle");
        for (let i = 0; i < reset.length; i++) {
          reset[i].setAttribute("stroke-dashoffset", "1");
        }
      }
    }, 600);
  }, []);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const parent = svg.closest(".btn-energy");
    if (!parent) return;

    parent.addEventListener("mouseenter", startCharge);
    parent.addEventListener("mouseleave", stopCharge);

    return () => {
      parent.removeEventListener("mouseenter", startCharge);
      parent.removeEventListener("mouseleave", stopCharge);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [startCharge, stopCharge]);

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ borderRadius: "inherit" }}
      aria-hidden="true"
    >
      <defs>
        <filter id={`${filterId}-bloom`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id={`${filterId}-glow`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id={`${filterId}-intense`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {LAYERS.map((layer, i) => (
        <rect
          key={i}
          x="0" y="0" width="100%" height="100%"
          rx={cornerRadius} ry={cornerRadius}
          fill="none"
          stroke={layer.stroke}
          strokeWidth={layer.width}
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset="1"
          className="charge-trail"
          filter={layer.filter ? `url(#${filterId}-${layer.filter})` : undefined}
        />
      ))}
      <rect
        x="0" y="0" width="100%" height="100%"
        rx="32" ry="32"
        fill="none"
        stroke="rgba(255, 255, 255, 0.95)"
        strokeWidth="2.5"
        pathLength="1"
        strokeDasharray="0.003 1"
        strokeDashoffset="1"
        className="charge-particle"
        filter={`url(#${filterId}-intense)`}
      />
    </svg>
  );
}
