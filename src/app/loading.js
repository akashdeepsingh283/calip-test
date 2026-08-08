export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 animate-pulse rounded-full bg-primary-glow" />
        <div className="h-2 w-2 animate-pulse rounded-full bg-primary-glow" style={{ animationDelay: "0.15s" }} />
        <div className="h-2 w-2 animate-pulse rounded-full bg-primary-glow" style={{ animationDelay: "0.3s" }} />
      </div>
    </div>
  );
}
