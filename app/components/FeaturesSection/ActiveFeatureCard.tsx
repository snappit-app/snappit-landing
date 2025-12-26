"use client";

import { motion } from "framer-motion";

import { Feature } from "./models";

interface ActiveFeatureCardProps {
  feature: Feature;
}

export function ActiveFeatureCard({ feature }: ActiveFeatureCardProps) {
  return (
    <motion.div
      layoutId={`card-${feature.id}`}
      className="bg-card border-border overflow-hidden rounded-xl border"
      transition={{
        layout: {
          type: "spring",
          stiffness: 200,
          damping: 25,
        },
      }}
    >
      <div className="bg-muted/50 relative flex aspect-video items-center justify-center">
        <video
          src={feature.video}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      </div>
    </motion.div>
  );
}
