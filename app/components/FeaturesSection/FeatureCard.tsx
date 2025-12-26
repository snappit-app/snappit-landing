"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Feature } from "./models";

interface FeatureCardProps {
  feature: Feature;
  onClick: () => void;
}

export function FeatureCard({ feature, onClick }: FeatureCardProps) {
  return (
    <motion.button
      layoutId={`card-${feature.id}`}
      onClick={onClick}
      className="bg-card border-border group flex cursor-pointer flex-col overflow-hidden rounded-xl border"
      transition={{
        layout: {
          type: "spring",
          stiffness: 200,
          damping: 25,
        },
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="bg-muted/50 relative flex aspect-video items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40"></div>
      </div>

      <div className="flex items-center gap-2 p-3">
        <div className="bg-muted flex h-7 w-7 items-center justify-center rounded-md">
          <Image
            src={feature.icon}
            alt={feature.iconAlt}
            width={16}
            height={16}
            className="dark:invert"
          />
        </div>
        <span className="text-card-foreground text-sm font-medium">{feature.title}</span>
      </div>
    </motion.button>
  );
}

interface SelectedFeatureCardProps {
  feature: Feature;
}

export function SelectedFeatureCard({ feature }: SelectedFeatureCardProps) {
  return (
    <div className="bg-primary/10 ш flex flex-col items-center justify-center gap-2 overflow-hidden rounded-xl">
      <div className="bg-primary/20 flex h-7 w-7 items-center justify-center rounded-md">
        <Image
          src={feature.icon}
          alt={feature.iconAlt}
          width={16}
          height={16}
          className="dark:invert"
        />
      </div>
      <span className="text-primary text-sm font-medium">{feature.title}</span>
    </div>
  );
}
