"use client";

import { motion } from "framer-motion";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function AnimatedMesh() {
  const reduced = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 z-[0] overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -left-1/4 top-[-20%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,119,182,0.45),transparent_65%)] blur-3xl"
        animate={
          reduced
            ? {}
            : {
                x: [0, 40, -20, 0],
                y: [0, 30, 10, 0],
                scale: [1, 1.08, 1.02, 1],
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-1/4 bottom-[-10%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle_at_center,rgba(72,202,228,0.25),transparent_70%)] blur-3xl"
        animate={
          reduced
            ? {}
            : {
                x: [0, -35, 18, 0],
                y: [0, -24, 12, 0],
                scale: [1, 1.06, 1, 1],
              }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 mesh-bg opacity-90" />
    </div>
  );
}
