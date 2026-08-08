import Link from "next/link";

export const metadata = {
  title: "404 — Page Not Found | Calip.io",
  description: "The page you are looking for does not exist. Return to Calip.io — the Web3 startup investment platform.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-background text-foreground">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(139,124,255,0.2), transparent 60%)",
          }}
        />
      </div>
      <div className="relative z-10 text-center">
        <h1 className="font-display text-8xl font-bold text-gradient">404</h1>
        <p className="mt-6 text-xl text-muted-foreground">
          This page doesn&apos;t exist.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          The link you followed may be broken, or the page has been removed.
        </p>
        <Link
          href="/"
          className="btn-primary-glow mt-10 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium text-white"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
