"use client";

import { useEffect, useState } from "react";

import LightRays from "./LightRays";

export function LightRaysContainer() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 -z-1 h-full w-full"
      style={{
        transform: `translateY(-${scrollY}px)`,
      }}
    >
      <LightRays
        raysOrigin="top-center"
        raysColor="#fff"
        raysSpeed={1.5}
        lightSpread={9.8}
        rayLength={0.6}
        followMouse={false}
        noiseAmount={0.1}
        distortion={0.01}
        disableVisibilityOptimization
      />
    </div>
  );
}
