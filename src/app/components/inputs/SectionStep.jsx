export default function SectionStep({ number, title }) {
  return (
    <div className="section-step flex items-center gap-4 mb-8">
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-[11px] font-semibold tracking-wide text-primary-glow ring-1 ring-primary/30"
        aria-hidden="true"
      >
        {String(number).padStart(2, "0")}
      </span>
      <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
        {title}
      </span>
      <div className="flex-1 h-px bg-gradient-to-r from-white/[0.08] to-transparent" aria-hidden="true" />
    </div>
  );
}
