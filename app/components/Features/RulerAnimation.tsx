"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

interface Point {
  x: number;
  y: number;
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function RulerAnimation() {
  const [phase, setPhase] = useState<
    "idle" | "ready" | "clicking" | "clickingEnd" | "measuring" | "measured"
  >("idle");
  const [cursorPos, setCursorPos] = useState<Point>({ x: 0, y: 0 });
  const [startPoint, setStartPoint] = useState<Point | null>(null);
  const [endPoint, setEndPoint] = useState<Point | null>(null);
  const [currentLength, setCurrentLength] = useState(0);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const runAnimation = useCallback(async () => {
    // Cancel previous animation
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
      setStartPoint(null);
      setEndPoint(null);
      setCurrentLength(0);

      await delay(800);
      checkAborted();

      const buttonEl = buttonRef.current;
      const containerEl = containerRef.current;
      if (!buttonEl || !containerEl) return;

      const buttonRect = buttonEl.getBoundingClientRect();
      const containerRect = containerEl.getBoundingClientRect();

      const startX = buttonRect.left - containerRect.left;
      const startY = buttonRect.top - containerRect.top + buttonRect.height / 2;
      const endX = buttonRect.right - containerRect.left;
      const buttonWidth = buttonRect.width;

      // Position cursor at start
      setCursorPos({ x: startX, y: startY });
      setStartPoint({ x: startX, y: startY });
      setPhase("ready");

      // Wait before clicking
      await delay(500);

      // Click animation
      setPhase("clicking");
      await delay(200);

      setPhase("clickingEnd");
      await delay(100);

      checkAborted();

      // Start measuring
      setPhase("measuring");
      await delay(100);
      checkAborted();

      // Animate measurement
      const measureDuration = 1500;
      const startTime = Date.now();

      await new Promise<void>((resolve) => {
        const animateMeasurement = () => {
          if (controller.signal.aborted) {
            resolve();
            return;
          }

          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / measureDuration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);

          const currentX = startX + (endX - startX) * eased;

          setCursorPos({ x: currentX, y: startY });
          setEndPoint({ x: currentX, y: startY });
          setCurrentLength(Math.round(buttonWidth * eased));

          if (progress < 1) {
            requestAnimationFrame(animateMeasurement);
          } else {
            resolve();
          }
        };

        requestAnimationFrame(animateMeasurement);
      });

      checkAborted();

      // Measurement complete
      setPhase("measured");

      // Wait before restart
      await delay(2000);
      checkAborted();

      // Restart animation
      runAnimation();
    } catch {
      // Animation was aborted, do nothing
    }
  }, []);

  useEffect(() => {
    runAnimation();
    return () => {
      abortControllerRef.current?.abort();
    };
  }, [runAnimation]);

  // Calculate label position (perpendicular to line, offset above)
  const labelPosition =
    startPoint && endPoint
      ? {
          x: (startPoint.x + endPoint.x) / 2,
          y: startPoint.y - 28,
        }
      : null;

  const isActive = phase === "measuring" || phase === "measured";
  const showCursor =
    phase === "ready" || phase === "clicking" || phase === "clickingEnd" || phase === "measuring";

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

      {/* Button to measure */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          ref={buttonRef}
          className="bg-product pointer-events-none rounded-lg px-6 py-2.5 text-sm font-medium text-white"
        >
          Download Now
        </button>
      </div>

      {/* Ruler line */}
      <AnimatePresence>
        {startPoint && endPoint && isActive && (
          <motion.svg
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* White outline for contrast */}
            <line
              x1={startPoint.x}
              y1={startPoint.y}
              x2={endPoint.x}
              y2={endPoint.y}
              className="stroke-background"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Foreground line (black in light mode, white in dark mode) */}
            <line
              x1={startPoint.x}
              y1={startPoint.y}
              x2={endPoint.x}
              y2={endPoint.y}
              className="stroke-foreground"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </motion.svg>
        )}
      </AnimatePresence>

      {/* Start point */}
      <AnimatePresence>
        {startPoint && isActive && (
          <motion.svg
            className="pointer-events-none absolute overflow-visible"
            style={{
              left: startPoint.x,
              top: startPoint.y,
              width: 1,
              height: 1,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <circle cx="0" cy="0" r="4" className="fill-background" />
            <circle cx="0" cy="0" r="2" className="fill-foreground" />
          </motion.svg>
        )}
      </AnimatePresence>

      {/* End point - only show when measured (cursor disappears) */}
      <AnimatePresence>
        {endPoint && phase === "measured" && (
          <motion.svg
            className="pointer-events-none absolute overflow-visible"
            style={{
              left: endPoint.x,
              top: endPoint.y,
              width: 1,
              height: 1,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <circle cx="0" cy="0" r="4" className="fill-background" />
            <circle cx="0" cy="0" r="2" className="fill-foreground" />
          </motion.svg>
        )}
      </AnimatePresence>

      {/* Measurement label */}
      <AnimatePresence>
        {labelPosition && currentLength > 0 && isActive && (
          <motion.div
            className="pointer-events-none absolute"
            style={{
              left: labelPosition.x,
              top: labelPosition.y,
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-card/90 border-border text-foreground -translate-x-1/2 -translate-y-1/2 rounded border px-2 py-1 text-xs font-medium whitespace-nowrap shadow">
              {currentLength} px
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Default cursor - show during ready, clicking, and measuring phases */}
      <AnimatePresence>
        {showCursor && (
          <motion.div
            className="pointer-events-none absolute z-20"
            style={{
              left: cursorPos.x,
              top: cursorPos.y,
            }}
            initial={{ opacity: 0 }}
            animate={{
              left: cursorPos.x,
              top: cursorPos.y,
              opacity: 1,
              scale: phase === "clicking" ? 0.85 : 1,
            }}
            exit={{ opacity: 0 }}
            transition={{
              left: { duration: 0.05 },
              top: { duration: 0.05 },
              scale: { duration: 0.1, ease: "easeInOut" },
            }}
          >
            <svg
              width="14"
              height="20"
              viewBox="0 0 14 20"
              fill="none"
              className="relative"
              style={{ transform: "translate(-1px, -1px)" }}
            >
              {/* Default arrow cursor */}
              <path
                d="M1 1L1 17L5 13L8 19L10 18L7 12L13 12L1 1Z"
                className="fill-foreground stroke-background"
                strokeWidth="1.5"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
