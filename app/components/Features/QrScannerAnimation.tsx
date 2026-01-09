"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

type Phase = "idle" | "appear" | "scanning" | "read" | "browserOpen";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// QR Code SVG component (based on qr.svg without frame)
function QrCodeIcon() {
  return (
    <svg
      fill="currentColor"
      strokeWidth="0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={90}
      width={90}
    >
      <path d="M3 11h8V3H3zm2-6h4v4H5zM3 21h8v-8H3zm2-6h4v4H5zm8-12v8h8V3zm6 6h-4V5h4zm-5.99 4h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm4 0h2v2h-2zm2 2h2v2h-2zm-4 0h2v2h-2zm2-6h2v2h-2zm2 2h2v2h-2z"></path>
    </svg>
  );
}

// QR Scanner frame - similar to the app design
function QrScannerFrame({ size = 100 }: { size?: number }) {
  const borderWidth = Math.max(Math.round(size / 24), 3);
  const radius = size * 0.08;
  const inset = borderWidth / 4;
  const h = borderWidth / 2;
  const i = inset;

  const topLeft = `M ${i + radius} ${i - h} A ${radius} ${radius} 0 0 0 ${i - h} ${i + radius}`;
  const topRight = `M ${size - i - radius} ${i - h} A ${radius} ${radius} 0 0 1 ${size - i + h} ${i + radius}`;
  const bottomLeft = `M ${i - h} ${size - i - radius} A ${radius} ${radius} 0 0 0 ${i + radius} ${size - i + h}`;
  const bottomRight = `M ${size - i + h} ${size - i - radius} A ${radius} ${radius} 0 0 1 ${size - i - radius} ${size - i + h}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="overflow-visible"
      stroke="white"
      strokeWidth={borderWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      style={{ filter: "drop-shadow(0 0 2px rgba(0,0,0,0.6))" }}
    >
      <path d={topLeft} />
      <path d={topRight} />
      <path d={bottomLeft} />
      <path d={bottomRight} />
    </svg>
  );
}

// Browser window component
function BrowserWindow() {
  return (
    <div className="border-foreground/20 bg-background flex h-full w-full flex-col overflow-hidden rounded-lg border shadow-xl">
      {/* Title bar */}
      <div className="border-foreground/10 bg-muted flex h-7 items-center border-b px-3 py-1">
        <div className="flex gap-1.5">
          <div className="bg-foreground/20 h-2.5 w-2.5 rounded-full" />
          <div className="bg-foreground/20 h-2.5 w-2.5 rounded-full" />
          <div className="bg-foreground/20 h-2.5 w-2.5 rounded-full" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        {/* Header */}
        <div className="bg-foreground/10 h-5 w-3/4 rounded" />
        {/* Paragraph lines */}
        <div className="flex flex-col gap-1.5">
          <div className="bg-foreground/8 h-2.5 w-full rounded" />
          <div className="bg-foreground/8 h-2.5 w-full rounded" />
          <div className="bg-foreground/8 h-2.5 w-4/5 rounded" />
        </div>
        {/* Image placeholder */}
        <div className="bg-foreground/6 mt-1 h-16 w-full rounded" />
        {/* More text */}
        <div className="flex flex-col gap-1.5">
          <div className="bg-foreground/8 h-2.5 w-full rounded" />
          <div className="bg-foreground/8 h-2.5 w-3/5 rounded" />
        </div>
      </div>
    </div>
  );
}

export function QrScannerAnimation() {
  const [phase, setPhase] = useState<Phase>("idle");
  const containerRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const runAnimation = useCallback(async () => {
    abortControllerRef.current?.abort();
    const controller = new AbortController();
    abortControllerRef.current = controller;

    const checkAborted = () => {
      if (controller.signal.aborted) {
        throw new Error("Animation aborted");
      }
    };

    try {
      // Reset state
      setPhase("idle");

      await delay(600);
      checkAborted();

      // Scanner appears
      setPhase("appear");
      await delay(800);
      checkAborted();

      // Scanning animation
      setPhase("scanning");
      await delay(1200);
      checkAborted();

      // QR code read - scanner disappears
      setPhase("read");
      await delay(400);
      checkAborted();

      // Browser opens
      setPhase("browserOpen");
      await delay(2500);
      checkAborted();

      // Restart animation
      runAnimation();
    } catch {
      // Animation was aborted
    }
  }, []);

  useEffect(() => {
    runAnimation();
    return () => {
      abortControllerRef.current?.abort();
    };
  }, [runAnimation]);

  const showScanner = phase === "appear" || phase === "scanning";
  const showBrowser = phase === "browserOpen";

  return (
    <div ref={containerRef} className="bg-muted/30 relative h-full w-full overflow-hidden">
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />
      <div
        className="absolute inset-0 hidden opacity-[0.03] dark:block"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* QR Code in center */}
      <AnimatePresence>
        {!showBrowser && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <QrCodeIcon />
          </motion.div>
        )}
      </AnimatePresence>

      {/* QR Scanner frame overlay */}
      <AnimatePresence>
        {showScanner && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
          >
            <motion.div
              animate={
                phase === "scanning"
                  ? {
                      scale: [1, 1.02, 1],
                    }
                  : {}
              }
              transition={
                phase === "scanning"
                  ? {
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
                  : {}
              }
            >
              <QrScannerFrame size={100} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Browser window */}
      <AnimatePresence>
        {showBrowser && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center p-6"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 30,
            }}
          >
            <div className="h-full w-full max-w-[200px]">
              <BrowserWindow />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
