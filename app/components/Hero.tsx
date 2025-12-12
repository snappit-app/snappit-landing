import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16">
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface text-sm text-foreground-secondary mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for macOS
          <span className="text-foreground-secondary/50">·</span>
          <span className="text-foreground-secondary/70">Windows & Linux coming soon</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
          Your screen,
          <br />
          <span className="gradient-text pb-2">supercharged.</span>
        </h1>

        <p className="text-xl md:text-2xl text-foreground-secondary max-w-2xl mx-auto mb-6 leading-relaxed">
          A lightweight utility that helps you work smarter with your screen. Extract text, scan QR
          codes, and pick colors — all with a single shortcut.
        </p>

        <p className="text-sm text-foreground-secondary mb-8">
          Free trial with 30 captures. No account required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4" id="download">
          <Link
            href="#"
            className="group flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="group-hover:scale-110 transition-transform"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download for Mac
          </Link>

          <Link
            href="#preview"
            className="flex items-center gap-2 text-foreground-secondary hover:text-foreground px-6 py-4 transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
            </svg>
            Watch Demo
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-foreground-secondary"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
