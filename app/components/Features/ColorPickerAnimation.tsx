"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const COLORS = [
  { hex: "#FF5D5F", name: "Indigo" }, // Indigo
  { hex: "#FBC802", name: "Amber" }, // Amber
  { hex: "#35C759", name: "Emerald" }, // Emerald
];

type Phase = "idle" | "clicking" | "colorCopied" | "moving";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function ColorPickerAnimation() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [copiedColor, setCopiedColor] = useState<string>(COLORS[0].hex);
  const [showPanel, setShowPanel] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const colorWheelRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Вычисляем позиции для каждого цвета на круге
  const getColorPosition = useCallback(
    (index: number, containerRect: DOMRect, wheelRect: DOMRect) => {
      const wheelCenterX = wheelRect.left - containerRect.left + wheelRect.width / 2;
      const wheelCenterY = wheelRect.top - containerRect.top + wheelRect.height / 2;
      const radius = wheelRect.width / 3; // Радиус для позиционирования курсора

      // Углы для трех секторов - центры секторов conic-gradient
      // conic-gradient начинается сверху (0deg = 12 часов) и идет по часовой стрелке
      // Сектор 0: 0-120deg, центр = 60deg
      // Сектор 1: 120-240deg, центр = 180deg
      // Сектор 2: 240-360deg, центр = 300deg
      // Переводим в стандартные углы (0 = вправо, против часовой): угол = 90 - cssУгол
      const cssAngles = [60, 180, 300]; // градусы в CSS (от верха по часовой)
      const angle = 90 - cssAngles[index]; // перевод в стандартную систему координат
      const angleRad = (angle * Math.PI) / 180;

      return {
        x: wheelCenterX + radius * Math.cos(angleRad),
        y: wheelCenterY - radius * Math.sin(angleRad), // минус потому что Y идет вниз
      };
    },
    [],
  );

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
      setShowPanel(false);
      setCopiedColor(COLORS[0].hex);

      await delay(500);
      checkAborted();

      const containerEl = containerRef.current;
      const wheelEl = colorWheelRef.current;
      if (!containerEl || !wheelEl) return;

      const containerRect = containerEl.getBoundingClientRect();
      const wheelRect = wheelEl.getBoundingClientRect();

      let colorIndex = 0;

      // Начальная позиция курсора
      const initialPos = getColorPosition(colorIndex, containerRect, wheelRect);
      setCursorPos(initialPos);

      await delay(300);
      checkAborted();

      // Бесконечный цикл по цветам
      while (true) {
        checkAborted();

        setPhase("idle");

        await delay(600);
        checkAborted();

        // Анимация клика
        setPhase("clicking");
        await delay(150);
        checkAborted();

        // Цвет скопирован - показываем/обновляем панель
        setPhase("colorCopied");
        setCopiedColor(COLORS[colorIndex].hex);
        setShowPanel(true);

        await delay(1500);
        checkAborted();

        // Переход к следующему цвету
        const nextColorIndex = (colorIndex + 1) % COLORS.length;
        const currentPos = getColorPosition(colorIndex, containerRect, wheelRect);
        const nextPos = getColorPosition(nextColorIndex, containerRect, wheelRect);

        setPhase("moving");

        // Анимируем перемещение курсора
        const moveDuration = 500;
        const startTime = Date.now();

        await new Promise<void>((resolve) => {
          const animateMove = () => {
            if (controller.signal.aborted) {
              resolve();
              return;
            }

            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / moveDuration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);

            setCursorPos({
              x: currentPos.x + (nextPos.x - currentPos.x) * eased,
              y: currentPos.y + (nextPos.y - currentPos.y) * eased,
            });

            if (progress < 1) {
              requestAnimationFrame(animateMove);
            } else {
              resolve();
            }
          };

          requestAnimationFrame(animateMove);
        });

        colorIndex = nextColorIndex;
      }
    } catch {
      // Animation was aborted
    }
  }, [getColorPosition]);

  useEffect(() => {
    runAnimation();
    return () => {
      abortControllerRef.current?.abort();
    };
  }, [runAnimation]);

  const showCursor = cursorPos.x !== 0 || cursorPos.y !== 0;

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

      {/* Цветовой круг, разделенный на 3 части */}
      <div className="absolute inset-0 flex items-start justify-center pt-8">
        <div
          ref={colorWheelRef}
          className="relative h-24 w-24 overflow-hidden rounded-full shadow-lg"
          style={{
            background: `conic-gradient(
              ${COLORS[0].hex} 0deg 120deg,
              ${COLORS[1].hex} 120deg 240deg,
              ${COLORS[2].hex} 240deg 360deg
            )`,
          }}
        />
      </div>

      {/* Панель с информацией о цвете - всегда висит, только меняет цвет */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            className="absolute bottom-6 left-1/2 z-30"
            initial={{ opacity: 0, y: 20, x: "-50%", scale: 0.85 }}
            animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
          >
            <motion.div
              className="border-border flex items-center gap-3 rounded-lg border px-3 py-2 shadow-lg"
              animate={{ backgroundColor: copiedColor }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="font-mono text-sm font-medium text-white"
                style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
                key={copiedColor}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {copiedColor}
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Курсор в виде пипетки */}
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
              scale: phase === "clicking" ? 0.9 : 1,
            }}
            exit={{ opacity: 0 }}
            transition={{
              left: { duration: 0.05 },
              top: { duration: 0.05 },
              scale: { duration: 0.1, ease: "easeInOut" },
            }}
          >
            {/* Иконка пипетки из color-dropper.svg */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="relative"
              style={{ transform: "translate(-3px, -21px)" }}
            >
              {/* Обводка для контраста */}
              <path
                d="m4 15.76-1 4A1 1 0 0 0 3.75 21a1 1 0 0 0 .49 0l4-1a1 1 0 0 0 .47-.26L17 11.41l1.29 1.3 1.42-1.42-1.3-1.29L21 7.41a2 2 0 0 0 0-2.82L19.41 3a2 2 0 0 0-2.82 0L14 5.59l-1.3-1.3-1.42 1.42L12.58 7l-8.29 8.29a1 1 0 0 0-.29.47zm1.87.75L14 8.42 15.58 10l-8.09 8.1-2.12.53z"
                className="stroke-background"
                strokeWidth="2"
                fill="none"
              />
              {/* Основная пипетка */}
              <path
                d="m4 15.76-1 4A1 1 0 0 0 3.75 21a1 1 0 0 0 .49 0l4-1a1 1 0 0 0 .47-.26L17 11.41l1.29 1.3 1.42-1.42-1.3-1.29L21 7.41a2 2 0 0 0 0-2.82L19.41 3a2 2 0 0 0-2.82 0L14 5.59l-1.3-1.3-1.42 1.42L12.58 7l-8.29 8.29a1 1 0 0 0-.29.47zm1.87.75L14 8.42 15.58 10l-8.09 8.1-2.12.53z"
                className="fill-foreground"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
