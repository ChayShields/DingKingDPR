"use client";

import { type PointerEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

/**
 * Full 3D pointer-tracked tilt with a moving glare — the "reflection" motif
 * carried into the UI itself, not just a hover-scale like a flat card.
 */
export function TiltCard({
  children,
  className,
  glare = true,
  strength = 14,
}: {
  children: ReactNode;
  className?: string;
  glare?: boolean;
  strength?: number;
}) {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const springConfig = { stiffness: 200, damping: 20, mass: 0.4 };
  const sx = useSpring(px, springConfig);
  const sy = useSpring(py, springConfig);

  const rotateX = useTransform(sy, [0, 1], [strength, -strength]);
  const rotateY = useTransform(sx, [0, 1], [-strength, strength]);
  const glareX = useTransform(sx, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(sy, [0, 1], ["0%", "100%"]);

  function handleMove(e: PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <div className={`perspective-1200 ${className ?? ""}`}>
      <motion.div
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full w-full overflow-hidden rounded-2xl border border-border bg-surface-2"
      >
        {glare && (
          <motion.div
            aria-hidden
            style={{
              background: `radial-gradient(220px circle at ${glareX} ${glareY}, color-mix(in srgb, var(--accent) 25%, transparent), transparent 70%)`,
            }}
            className="pointer-events-none absolute inset-0 z-10"
          />
        )}
        <div style={{ transform: "translateZ(24px)" }} className="relative h-full w-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
