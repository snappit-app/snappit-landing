"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-xl">
          <Image
            src="/logo-128.png"
            alt="Snappit"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span>Snappit</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-sm text-foreground-secondary hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            href="#preview"
            className="text-sm text-foreground-secondary hover:text-foreground transition-colors"
          >
            Preview
          </Link>
          <Link
            href="#pricing"
            className="text-sm text-foreground-secondary hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
        </div>

        <Link
          href="#download"
          className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-full text-sm font-medium transition-colors"
        >
          Download
        </Link>
      </nav>
    </header>
  );
}
