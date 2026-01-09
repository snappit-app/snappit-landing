"use client";

import { ColorPickerAnimation } from "./ColorPickerAnimation";
import { RulerAnimation } from "./RulerAnimation";
import { TextSelectionAnimation } from "./TextSelectionAnimation";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  animation?: React.ReactNode;
}

function FeatureCard({ icon, title, description, animation }: FeatureCardProps) {
  return (
    <div className="bg-card border-border flex h-[370px] flex-col rounded-xl border">
      <div className="relative flex-[0_0_65%] overflow-hidden rounded-t-xl">
        {animation ? animation : <div className="bg-muted/30 h-full w-full" />}
      </div>

      <div className="flex flex-1 flex-col justify-center gap-2 p-5">
        <div className="flex items-center gap-3">
          <div className="text-product flex h-8 w-8 shrink-0 items-center justify-center">
            {icon}
          </div>
          <h3 className="text-card-foreground text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
}

const CopyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M14 8H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V10c0-1.103-.897-2-2-2z" />
    <path d="M20 2H10a2 2 0 0 0-2 2v2h8a2 2 0 0 1 2 2v8h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
  </svg>
);

const RulerIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M20.875 7H3.125C1.953 7 1 7.897 1 9v6c0 1.103.953 2 2.125 2h17.75C22.047 17 23 16.103 23 15V9c0-1.103-.953-2-2.125-2zM7 12H5V9h2v3zm4 1H9V9h2v4zm4-1h-2V9h2v3zm4 1h-2V9h2v4z" />
  </svg>
);

const ColorDropperIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="m4 15.76-1 4A1 1 0 0 0 3.75 21a1 1 0 0 0 .49 0l4-1a1 1 0 0 0 .47-.26L17 11.41l1.29 1.3 1.42-1.42-1.3-1.29L21 7.41a2 2 0 0 0 0-2.82L19.41 3a2 2 0 0 0-2.82 0L14 5.59l-1.3-1.3-1.42 1.42L12.58 7l-8.29 8.29a1 1 0 0 0-.29.47zm1.87.75L14 8.42 15.58 10l-8.09 8.1-2.12.53z" />
  </svg>
);

const QrIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M4 4h4.01V2H2v6h2V4zm0 12H2v6h6.01v-2H4v-4zm16 4h-4v2h6v-6h-2v4zM16 4h4v4h2V2h-6v2z" />
    <path d="M5 11h6V5H5zm2-4h2v2H7zM5 19h6v-6H5zm2-4h2v2H7zM19 5h-6v6h6zm-2 4h-2V7h2zm-3.99 4h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2z" />
  </svg>
);

const KeyboardIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M6 8h.01" />
    <path d="M10 8h.01" />
    <path d="M14 8h.01" />
    <path d="M18 8h.01" />
    <path d="M6 12h.01" />
    <path d="M18 12h.01" />
    <path d="M8 16h8" />
  </svg>
);

const features: FeatureCardProps[] = [
  {
    icon: <CopyIcon />,
    title: "Text Recognition (OCR)",
    description: "Extract text from your screen with macOS Vision or Tesseract for 100+ languages.",
    animation: <TextSelectionAnimation />,
  },
  {
    icon: <RulerIcon />,
    title: "Digital Ruler",
    description: "Measure anything on screen with pixel-perfect precision.",
    animation: <RulerAnimation />,
  },
  {
    icon: <ColorDropperIcon />,
    title: "Color Picker",
    description: "Pick colors and copy in HEX, RGB, HSL, and more formats.",
    animation: <ColorPickerAnimation />,
  },
  {
    icon: <QrIcon />,
    title: "QR Scanner",
    description: "Scan QR codes directly from your screen instantly.",
  },
  {
    icon: <KeyboardIcon />,
    title: "Keyboard Shortcuts",
    description: "Dedicated shortcuts for each tool. Access everything instantly.",
  },
];

export function FeaturesSection() {
  return (
    <section className="px-4 py-16 md:py-24" id="features">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Features</h2>
          <p className="text-muted-foreground mx-auto max-w-xl text-lg">
            Powerful tools to boost your productivity right from your screen.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="grid gap-6 md:grid-cols-2">
            {features.slice(0, 2).map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.slice(2).map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
