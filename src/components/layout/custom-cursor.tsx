"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

import { useIsMobile } from "@/hooks/use-is-mobile";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function CustomCursor() {
  const mobile = useIsMobile();
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 280, damping: 28, mass: 0.45 });
  const sy = useSpring(y, { stiffness: 280, damping: 28, mass: 0.45 });

  useEffect(() => {
    if (mobile || reduced) return;
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [mobile, reduced, x, y]);

  if (mobile || reduced) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] mix-blend-screen"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
    >
      <div className="h-8 w-8 rounded-full border border-[#48cae4]/50 bg-[#0077b6]/15 blur-[0.5px] shadow-[0_0_40px_rgba(72,202,228,0.35)]" />
    </motion.div>
  );
}
