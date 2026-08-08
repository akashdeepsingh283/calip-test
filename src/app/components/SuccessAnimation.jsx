"use client";

import { useCallback } from "react";

function spawnConfetti(canvas) {
  const ctx = canvas.getContext("2d");
  const particles = [];
  const colors = ["#8B7CFF", "#A99BFF", "#D6CCFF", "#7C6FFF", "#C9BFFF", "#ffffff"];
  const total = 80;

  for (let i = 0; i < total; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.7) * 16 - 4,
      size: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      shape: Math.random() > 0.5 ? "rect" : "circle",
    });
  }

  let frame = 0;
  const maxFrames = 120;

  function animate() {
    if (frame >= maxFrames) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.25;
      p.vx *= 0.99;
      p.alpha = Math.max(0, 1 - frame / maxFrames);
      p.rotation += p.rotationSpeed;

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;

      if (p.shape === "rect") {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    });

    frame++;
    requestAnimationFrame(animate);
  }

  animate();
}

export default function SuccessAnimation({ visible, message, onClose }) {
  const canvasRef = useCallback(
    (node) => {
      if (node && visible) {
        const dpr = window.devicePixelRatio || 1;
        node.width = window.innerWidth * dpr;
        node.height = window.innerHeight * dpr;
        node.style.width = window.innerWidth + "px";
        node.style.height = window.innerHeight + "px";
        node.getContext("2d").scale(dpr, dpr);
        spawnConfetti(node);
      }
    },
    [visible]
  );

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center" role="dialog" aria-modal="true" aria-label="Success notification">
      <canvas
        id="confetti-canvas"
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ width: "100vw", height: "100vh" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="animate-toast-in relative z-10 mx-4 max-w-md w-full rounded-3xl p-8 text-center border"
        style={{
          background: "rgba(12, 12, 20, 0.95)",
          borderColor: "rgba(139, 124, 255, 0.3)",
          boxShadow:
            "0 0 60px rgba(139,124,255,0.2), 0 25px 50px rgba(0,0,0,0.5)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex justify-center mb-4" aria-hidden="true">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-full"
            style={{
              background:
                "linear-gradient(135deg, rgba(139,124,255,0.2), rgba(169,155,255,0.1))",
              boxShadow: "0 0 30px rgba(139,124,255,0.3)",
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#A99BFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
          </div>
        </div>

        <h2 className="font-display text-3xl font-semibold text-gradient">
          Cheers!
        </h2>

        <p className="mt-3 text-muted-foreground leading-relaxed">
          {message ||
            "Your request has been submitted successfully. We'll be in touch soon."}
        </p>

        <button
          onClick={onClose}
          className="mt-6 btn-primary-glow btn-press group inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
        >
          Got it
        </button>
      </div>
    </div>
  );
}