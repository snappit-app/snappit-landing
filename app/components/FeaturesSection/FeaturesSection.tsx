"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Feature, features } from "./models";

interface MainCardProps extends Feature {
  isActive: boolean;
}

function MainCard({ title, description, icon, iconAlt, video, isActive }: MainCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, [isActive]);

  return (
    <div className="bg-card border-border flex flex-col overflow-hidden rounded-2xl border">
      <div className="flex items-center gap-3 p-5">
        <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-lg">
          <Image src={icon} alt={iconAlt} width={24} height={24} className="dark:invert" />
        </div>
        <div>
          <h3 className="text-card-foreground text-lg font-semibold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>

      <div className="bg-muted/50 border-border flex aspect-video items-center justify-center border-t p-4">
        <video ref={videoRef} className="h-full w-full rounded-lg object-cover" muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

interface ThumbnailCardProps extends Feature {
  onClick: () => void;
}

function ThumbnailCard({ title, icon, iconAlt, video, onClick }: ThumbnailCardProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-card border-border group flex flex-col overflow-hidden rounded-xl border transition-all duration-300 hover:scale-105`}
    >
      <div className="bg-muted/50 relative flex aspect-video items-center justify-center">
        <video className="h-full w-full object-cover" muted playsInline>
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
            <svg className="ml-0.5 h-4 w-4 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 p-3">
        <div className="bg-muted flex h-7 w-7 items-center justify-center rounded-md">
          <Image src={icon} alt={iconAlt} width={16} height={16} className="dark:invert" />
        </div>
        <span className="text-card-foreground text-sm font-medium">{title}</span>
      </div>
    </button>
  );
}

export function FeaturesSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedFeature = features[selectedIndex];

  return (
    <section className="px-4 py-16 md:py-24" id="features">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">What&apos;s Inside</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Powerful tools for everyday screen tasks. Capture, extract, and measure with ease.
          </p>
        </div>

        <div className="space-y-6">
          <MainCard {...selectedFeature} isActive={true} />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {features.map((feature, index) => (
              <ThumbnailCard
                key={feature.title}
                {...feature}
                onClick={() => setSelectedIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
