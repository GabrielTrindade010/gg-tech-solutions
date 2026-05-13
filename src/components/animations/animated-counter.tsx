"use client";

import { animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
};

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  className = "",
}: AnimatedCounterProps) {
  const [n, setN] = useState(0);
  const reduced = useReducedMotion();
  const started = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (reduced) {
      setN(value);
    }
  }, [reduced, value]);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    let ctrl: ReturnType<typeof animate> | undefined;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e?.isIntersecting || started.current) return;
        started.current = true;
        ctrl = animate(0, value, {
          duration: 1.55,
          ease: [0.16, 1, 0.3, 1],
          onUpdate: (v) => setN(Math.round(v)),
        });
      },
      { threshold: 0.35 },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      ctrl?.stop();
    };
  }, [reduced, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {n}
      {suffix}
    </span>
  );
}
