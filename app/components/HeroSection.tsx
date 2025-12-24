"use client";

import Image from "next/image";

export function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-4 py-16">
      <div className="flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/logo-128.png"
            alt="Snappit Logo"
            width={96}
            height={96}
            className="h-24 w-24"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          Snappit
        </h1>

        {/* Tagline */}
        <p className="text-muted-foreground mb-8 max-w-md text-lg md:text-xl">
          Simplify your screen workflow
        </p>

        {/* CTA Buttons */}
        <div className="mb-4 flex flex-col gap-3 sm:flex-row">
          <a
            href="#download"
            className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-medium transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download for macOS
          </a>
          <a
            href="#buy"
            className="bg-product text-product-foreground hover:bg-product/90 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-medium transition-colors"
          >
            Buy Full License — $7.99
          </a>
        </div>

        {/* Platform note */}
        <p className="text-muted-foreground mb-8 text-sm">
          Windows &amp; Linux coming soon
        </p>

        {/* Watch Demo Button */}
        <button className="text-muted-foreground hover:text-foreground hover:bg-muted inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
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
        </button>
      </div>
    </section>
  );
}
