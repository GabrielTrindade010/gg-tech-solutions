"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";

import { AnimatedCounter } from "@/components/animations/animated-counter";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { differentiators } from "@/data/content";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

function MetricDisplay({ metric, suffix }: { metric: string; suffix: string }) {
  const plus = /^(\d+)\+$/.exec(metric);
  if (plus) {
    return (
      <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        <AnimatedCounter value={Number(plus[1])} suffix={`+${suffix}`} />
      </p>
    );
  }

  const percent = /^(\d+)%$/.exec(metric);
  if (percent) {
    return (
      <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        <AnimatedCounter value={Number(percent[1])} suffix={`%${suffix}`} />
      </p>
    );
  }

  const digits = /^\d+$/.exec(metric);
  if (digits) {
    return (
      <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        <AnimatedCounter value={Number(digits[0])} suffix={suffix} />
      </p>
    );
  }

  return (
    <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
      <span className="text-gradient">{metric}</span>
      <span className="text-lg font-medium text-slate-400">{suffix}</span>
    </p>
  );
}

export function DifferentiatorsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    if (reduced) {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: 0, opacity: 0.85 });
      return;
    }

    const ctx = gsap.context(() => {
      const length = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 1,
      });
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: path,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="diferenciais"
      className="relative z-[2] scroll-mt-28 py-24 sm:py-28 lg:py-32"
      aria-labelledby="diferenciais-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#48cae4]">
            Por que GG Tech
          </p>
          <h2
            id="diferenciais-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Engenharia calibrada para produtos que não podem falhar.
          </h2>
          <p className="mt-4 text-pretty text-base text-slate-400 sm:text-lg">
            Métricas claras, segurança embutida e UX moderna — o pacote completo para empresas que
            jogam no alto nível.
          </p>
        </ScrollReveal>

        <div className="relative mt-16 lg:mt-20">
          <div className="pointer-events-none absolute left-[14px] top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-[#48cae4]/60 via-white/10 to-transparent lg:block" />

          <svg
            className="pointer-events-none absolute left-0 top-4 hidden h-[calc(100%-2rem)] w-[120px] lg:block"
            viewBox="0 0 120 800"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="line-grad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#48cae4" />
                <stop offset="55%" stopColor="#0077b6" />
                <stop offset="100%" stopColor="#001233" />
              </linearGradient>
            </defs>
            <path
              ref={pathRef}
              d="M 40 32 C 86 140 18 220 40 320 C 62 420 28 520 40 620 C 52 720 34 780 40 780"
              fill="none"
              stroke="url(#line-grad)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity={reduced ? 1 : 0}
            />
          </svg>

          <div className="grid gap-6 lg:gap-8 lg:pl-28">
            {differentiators.map((d, i) => (
              <motion.article
                key={d.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-12%" }}
                transition={{ duration: 0.55, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#001233]/55 p-6 backdrop-blur-xl sm:p-8",
                  "shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
                )}
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-2xl space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-xl font-semibold text-white sm:text-2xl">{d.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                      {d.description}
                    </p>
                  </div>
                  <div className="shrink-0 rounded-xl border border-[#48cae4]/25 bg-[#000814]/70 px-5 py-4 text-right shadow-[0_0_40px_rgba(0,119,182,0.15)]">
                    <MetricDisplay metric={d.metric} suffix={d.suffix} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
