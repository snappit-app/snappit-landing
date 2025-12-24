"use client";

import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
}

function FeatureCard({ title, description, icon, iconAlt }: FeatureCardProps) {
  return (
    <div className="bg-card border-border flex flex-col overflow-hidden rounded-2xl border">
      {/* Header */}
      <div className="flex items-center gap-3 p-5">
        <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-lg">
          <Image src={icon} alt={iconAlt} width={24} height={24} className="dark:invert" />
        </div>
        <div>
          <h3 className="text-card-foreground font-semibold">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>

      {/* Demo Placeholder */}
      <div className="bg-muted/50 border-border flex aspect-video items-center justify-center border-t">
        <div className="text-muted-foreground flex flex-col items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
          <span className="text-sm">Demo GIF</span>
        </div>
      </div>
    </div>
  );
}

const features: FeatureCardProps[] = [
  {
    title: "OCR",
    description: "Extract text from any screen region",
    icon: "/copy.svg",
    iconAlt: "OCR icon",
  },
  {
    title: "Color Picker",
    description: "Pick colors in HEX, RGB, HSL, OKLCH",
    icon: "/color-dropper.svg",
    iconAlt: "Color picker icon",
  },
  {
    title: "Screen Ruler",
    description: "Measure pixels with precision",
    icon: "/ruler.svg",
    iconAlt: "Ruler icon",
  },
  {
    title: "QR Scanner",
    description: "Scan and decode QR codes instantly",
    icon: "/qr.svg",
    iconAlt: "QR code icon",
  },
];

export function FeaturesSection() {
  return (
    <section className="px-4 py-16 md:py-24" id="features">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">What&apos;s Inside</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Powerful tools for everyday screen tasks. Capture, extract, and measure with ease.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
