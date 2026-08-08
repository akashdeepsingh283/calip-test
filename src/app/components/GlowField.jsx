export default function GlowField({
  position = "top-center",
  size = 420,
  intensity = "medium",
  className = "",
  style = {},
}) {
  const cssVars = {
    "--glow-size": `${size}px`,
    "--glow-intensity":
      intensity === "high" ? "1" : intensity === "low" ? "0.5" : "0.75",
    "--glow-position":
      position === "center"
        ? "50% 50%"
        : position === "bottom-center"
          ? "50% 100%"
          : "50% 0%",
    ...style,
  };

  return (
    <div
      className={`glow-field pointer-events-none ${className}`}
      style={cssVars}
      aria-hidden="true"
    >
      <div className="glow-field__rotor">
        <div className="glow-field__bloom" />
        <div className="glow-field__dots" />
      </div>
    </div>
  );
}
