"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

type Phase =
  | "idle"
  | "cursorAppear"
  | "clicking"
  | "clickEnd"
  | "cursorDisappear"
  | "recording"
  | "inputStart"
  | "inputEnd";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Record icon (similar to BiRegularRadioCircleMarked)
function RecordIcon() {
  return (
    <svg
      fill="currentColor"
      strokeWidth="0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
    >
      <path d="M12 5c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
      <path d="M12 9c-1.627 0-3 1.373-3 3s1.373 3 3 3 3-1.373 3-3-1.373-3-3-3z"></path>
    </svg>
  );
}

// Command key icon (⌘) - SF Pro style
function CommandIcon() {
  return (
    <svg
      fill="currentColor"
      strokeWidth="0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="10px"
      width="10px"
    >
      <path d="M6 14c-2.206 0-4 1.794-4 4s1.794 4 4 4a4.003 4.003 0 0 0 3.998-3.98H10V16h4v2.039h.004A4.002 4.002 0 0 0 18 22c2.206 0 4-1.794 4-4s-1.794-4-4-4h-2v-4h2c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4v2h-4V5.98h-.002A4.003 4.003 0 0 0 6 2C3.794 2 2 3.794 2 6s1.794 4 4 4h2v4H6zm2 4c0 1.122-.879 2-2 2s-2-.878-2-2 .879-2 2-2h2v2zm10-2c1.121 0 2 .878 2 2s-.879 2-2 2-2-.878-2-2v-2h2zM16 6c0-1.122.879-2 2-2s2 .878 2 2-.879 2-2 2h-2V6zM6 8c-1.121 0-2-.878-2-2s.879-2 2-2 2 .878 2 2v2H6zm4 2h4v4h-4v-4z"></path>
    </svg>
  );
}

// Shift key icon (⇧) - SF Pro style
function ShiftIcon() {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="10px"
      height="10px"
    >
      <path d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816L7.27 2.047zM14.346 9.5 8 2.731 1.654 9.5H4.5a1 1 0 0 1 1 1v3h5v-3a1 1 0 0 1 1-1h2.846z" />
    </svg>
  );
}

// Keyboard button component (styled like KeyboardButton from snappit-app)
function KeyboardButton({ keyLabel }: { keyLabel: string }) {
  const renderContent = () => {
    switch (keyLabel) {
      case "⌘":
        return <CommandIcon />;
      case "⇧":
        return <ShiftIcon />;
      default:
        return (
          <kbd className="text-accent-foreground font-mono text-xs leading-[10px]">{keyLabel}</kbd>
        );
    }
  };

  return (
    <div className="bg-muted text-accent-foreground flex h-8 min-w-[30px] items-center justify-center rounded">
      {renderContent()}
    </div>
  );
}

// Record button component (styled like the one in shortcut-pref-item.tsx)
function RecordButton({ isPressed = false }: { isPressed?: boolean }) {
  return (
    <motion.button
      className="text-foreground hover:bg-accent flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium"
      animate={{
        scale: isPressed ? 0.9 : 1,
      }}
      transition={{
        duration: 0.1,
        ease: "easeInOut",
      }}
    >
      <RecordIcon />
      <span>Record</span>
    </motion.button>
  );
}

// Record tooltip component (styled like RecordTooltip from snappit-app)
function RecordTooltip({ keys }: { keys: string[] }) {
  return (
    <div className="bg-popover border-border w-[120px] rounded-lg border p-3 shadow-lg">
      <div className="mb-1 flex h-8 items-stretch gap-1">
        {keys.map((key, index) => (
          <motion.div
            key={`${key}-${index}`}
            initial={{ opacity: 0, scale: 0.8, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.15,
              ease: "easeOut",
            }}
          >
            <KeyboardButton keyLabel={key} />
          </motion.div>
        ))}
      </div>
      <div className="text-muted-foreground text-xs">Recording...</div>
    </div>
  );
}

export function KeyboardShortcutsAnimation() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [visibleKeys, setVisibleKeys] = useState<string[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const SHORTCUT_KEYS = ["⌘", "⇧", "2"]; // Command, Shift, 2

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
      setVisibleKeys([]);

      await delay(600);
      checkAborted();

      const containerEl = containerRef.current;
      const buttonEl = buttonRef.current;
      if (!containerEl || !buttonEl) return;

      const containerRect = containerEl.getBoundingClientRect();
      const buttonRect = buttonEl.getBoundingClientRect();

      // Position cursor above the button center
      const cursorX = buttonRect.left - containerRect.left + buttonRect.width / 2;
      const cursorY = buttonRect.top - containerRect.top + buttonRect.height / 2 - 10;

      setCursorPos({ x: cursorX, y: cursorY });

      // Cursor appears
      setPhase("cursorAppear");
      await delay(500);
      checkAborted();

      // Click animation
      setPhase("clicking");
      await delay(150);
      checkAborted();

      // Click end
      setPhase("clickEnd");
      await delay(100);
      checkAborted();

      // Cursor disappears
      setPhase("cursorDisappear");
      await delay(300);
      checkAborted();

      // Recording tooltip appears
      setPhase("recording");
      await delay(400);
      checkAborted();

      // Input keys one by one
      setPhase("inputStart");

      for (let i = 0; i < SHORTCUT_KEYS.length; i++) {
        checkAborted();
        setVisibleKeys((prev) => [...prev, SHORTCUT_KEYS[i]]);
        await delay(300);
      }

      checkAborted();

      // Small delay after last key
      setPhase("inputEnd");
      await delay(1200);
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

  const showCursor = phase === "cursorAppear" || phase === "clicking" || phase === "clickEnd";
  const isClicking = phase === "clicking";
  const showTooltip = phase === "recording" || phase === "inputStart" || phase === "inputEnd";

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

      {/* Record button in center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div ref={buttonRef}>
          <RecordButton isPressed={isClicking} />
        </div>
      </div>

      {/* Record tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            className="absolute top-1/2 left-1/2 z-30"
            initial={{ opacity: 0, y: 10, x: "-50%", scale: 0.9 }}
            animate={{ opacity: 1, y: -60, x: "-50%", scale: 1 }}
            exit={{ opacity: 0, y: -50, x: "-50%", scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
          >
            <RecordTooltip keys={visibleKeys} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cursor */}
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
              opacity: 1,
              scale: isClicking ? 0.85 : 1,
            }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.2 },
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
