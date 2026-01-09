"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const SAMPLE_TEXT = [
  "A little sunbeam tickles the sky",
  "Butterflies giggle as clouds drift by,",
  "The day smiles softly, and so do I.",
];

interface SelectionBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function TextSelectionAnimation() {
  const [phase, setPhase] = useState<"idle" | "selecting" | "selected" | "copied">("idle");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [selectionBox, setSelectionBox] = useState<SelectionBox | null>(null);

  const textContainerRef = useRef<HTMLDivElement>(null);
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
      setSelectionBox(null);

      checkAborted();

      const textEl = textContainerRef.current;
      const containerEl = containerRef.current;
      if (!textEl || !containerEl) return;

      const textRect = textEl.getBoundingClientRect();
      const containerRect = containerEl.getBoundingClientRect();

      // Padding around text for selection box
      const padding = 8;

      // Calculate relative positions with padding
      const startX = textRect.left - containerRect.left - padding;
      const startY = textRect.top - containerRect.top - padding;
      const endX = startX + textRect.width + padding * 2;
      const endY = startY + textRect.height + padding * 2;

      setCursorPos({ x: startX, y: startY });

      await delay(500);
      checkAborted();

      setPhase("selecting");

      // Animate selection
      const selectionDuration = 1200;
      const startTime = Date.now();

      await new Promise<void>((resolve) => {
        const animateSelection = () => {
          if (controller.signal.aborted) {
            resolve();
            return;
          }

          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / selectionDuration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);

          const currentX = startX + (endX - startX) * eased;
          const currentY = startY + (endY - startY) * eased;

          setCursorPos({ x: currentX, y: currentY });
          setSelectionBox({
            x: startX,
            y: startY,
            width: currentX - startX,
            height: currentY - startY,
          });

          if (progress < 1) {
            requestAnimationFrame(animateSelection);
          } else {
            resolve();
          }
        };

        requestAnimationFrame(animateSelection);
      });

      checkAborted();

      // Selection complete
      setPhase("selected");

      await delay(500);
      checkAborted();

      // Show copied notification
      setPhase("copied");

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

  const showCursor = phase === "idle" || phase === "selecting";

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

      {/* Simulated text content */}
      <div className="absolute inset-4 flex flex-col items-center justify-center">
        <div ref={textContainerRef} className="relative font-mono text-sm leading-relaxed">
          {SAMPLE_TEXT.map((line, index) => (
            <div key={index} className="relative flex h-[22px] items-center">
              <span className="text-muted-foreground relative z-10">{line}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Selection rectangle - simple white/black border */}
      <AnimatePresence>
        {selectionBox && phase === "selecting" && (
          <motion.div
            className="border-foreground pointer-events-none absolute border"
            style={{
              left: selectionBox.x,
              top: selectionBox.y,
              width: selectionBox.width,
              height: selectionBox.height,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* Native-style crosshair cursor - hide after selection */}
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
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.05 }}
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              className="relative -translate-x-1/2 -translate-y-1/2"
            >
              {/* Vertical line */}
              <line x1="9.5" y1="0" x2="9.5" y2="8" className="stroke-foreground" strokeWidth="1" />
              <line
                x1="9.5"
                y1="11"
                x2="9.5"
                y2="19"
                className="stroke-foreground"
                strokeWidth="1"
              />
              {/* Horizontal line */}
              <line x1="0" y1="9.5" x2="8" y2="9.5" className="stroke-foreground" strokeWidth="1" />
              <line
                x1="11"
                y1="9.5"
                x2="19"
                y2="9.5"
                className="stroke-foreground"
                strokeWidth="1"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Copied notification */}
      <AnimatePresence>
        {phase === "copied" && (
          <motion.div
            className="absolute bottom-4 left-1/2 z-30 -translate-x-1/2"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
          >
            <div className="bg-card border-border flex items-center gap-2 rounded-lg border px-3 py-2 shadow-lg">
              <span className="text-card-foreground text-sm font-medium">Text copied</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
