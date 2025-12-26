"use client";

import { LayoutGroup } from "framer-motion";
import React, { useState } from "react";

import { ActiveFeatureCard } from "./ActiveFeatureCard";
import { FeatureCard, SelectedFeatureCard } from "./FeatureCard";
import { featureId, features } from "./models";

export function FeaturesSection() {
  const [selected, setSelected] = useState<featureId>("ocr");

  return (
    <section className="px-4 py-16 md:py-24" id="features">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">What&apos;s Inside</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Powerful tools for everyday screen tasks. Capture, extract, and measure with ease.
          </p>
        </div>

        <LayoutGroup>
          {/* Active card area */}
          <div className="mb-4">
            {features.map((feature) => (
              <React.Fragment key={feature.id}>
                {feature.id === selected && <ActiveFeatureCard feature={feature} />}
              </React.Fragment>
            ))}
          </div>

          {/* Small cards grid */}
          <div className="grid grid-cols-5 gap-4">
            {features.map((feature) => (
              <React.Fragment key={feature.id}>
                {feature.id === selected ? (
                  <SelectedFeatureCard feature={feature} />
                ) : (
                  <FeatureCard feature={feature} onClick={() => setSelected(feature.id)} />
                )}
              </React.Fragment>
            ))}
          </div>
        </LayoutGroup>

        <div className="space-y-6"></div>
      </div>
    </section>
  );
}
