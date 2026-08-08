"use client";

import { X, CheckCircle, AlertCircle } from "lucide-react";

export default function Toast({ message, visible, onClose, type = "success", title }) {
  if (!visible) return null;

  const isError = type === "error";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none" role="alert" aria-live="assertive">
      <div
        className="pointer-events-auto rounded-2xl p-6 max-w-md w-full mx-4 animate-toast-in border"
        style={{
          background: isError
            ? "rgba(30, 10, 10, 0.92)"
            : "rgba(12, 12, 20, 0.92)",
          borderColor: isError
            ? "rgba(255, 80, 80, 0.3)"
            : "rgba(139, 124, 255, 0.3)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: isError
            ? "0 0 40px rgba(255,80,80,0.15), 0 8px 32px rgba(0,0,0,0.4)"
            : "0 0 40px rgba(139,124,255,0.15), 0 8px 32px rgba(0,0,0,0.4)",
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              {isError ? (
                <AlertCircle className="h-4 w-4 text-red-400 shrink-0" aria-hidden="true" />
              ) : (
                <CheckCircle className="h-4 w-4 text-primary-glow shrink-0" aria-hidden="true" />
              )}
              <h3 className="font-display text-base font-semibold text-foreground">
                {title || (isError ? "Error" : "Success")}
              </h3>
            </div>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
              {message}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors shrink-0 mt-0.5 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
            aria-label="Dismiss notification"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-4 h-1 rounded-full bg-white/10 overflow-hidden" role="progressbar">
          <div
            className={`h-full rounded-full animate-toast-progress ${
              isError ? "bg-red-500" : "bg-primary"
            }`}
          />
        </div>
      </div>
    </div>
  );
}