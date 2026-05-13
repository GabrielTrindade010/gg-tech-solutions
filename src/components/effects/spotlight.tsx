"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

import { useIsMobile } from "@/hooks/use-is-mobile";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function Spotlight() {
  const mobile = useIsMobile();
  const reduced = useReducedMotion();
  const x = useMotionValue(50);
  const y = useMotionValue(40);
  const sx = useSpring(x, { stiffness: 120, damping: 28, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 120, damping: 28, mass: 0.35 });

  const background = useMotionTemplate`radial-gradient(520px circle at ${sx}% ${sy}%, rgba(72,202,228,0.14), transparent 55%)`;

  useEffect(() => {
    if (mobile || reduced) return;
    const move = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth) * 100;
      const ny = (e.clientY / window.innerHeight) * 100;
      x.set(nx);
      y.set(ny);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [mobile, reduced, x, y]);

  if (mobile || reduced) {
    return (
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(72,202,228,0.12),transparent_55%)]"
        aria-hidden
      />
    );
  }

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-[2]"
      style={{ background }}
      aria-hidden
    />
  );
}
