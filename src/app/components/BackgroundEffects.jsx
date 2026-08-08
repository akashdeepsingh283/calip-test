import GlowField from "./GlowField";

export default function BackgroundEffects() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden noise"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-background" />

      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(89,79,188,0.12), transparent)",
            "radial-gradient(ellipse 60% 40% at 80% 80%, rgba(99,80,220,0.08), transparent)",
            "radial-gradient(ellipse 50% 35% at 20% 60%, rgba(139,124,255,0.06), transparent)",
          ].join(","),
        }}
      />

      {/* <GlowField position="center" size={700} intensity="low" /> */}

      <div className="absolute inset-0 bg-grid opacity-40" />
    </div>
  );
}
