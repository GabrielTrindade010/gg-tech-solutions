"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { LucideProps } from "lucide-react";
import { useRef, type ForwardRefExoticComponent, type RefAttributes } from "react";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/content";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type IconComponent = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

function ServiceCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: IconComponent;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const bg = useMotionTemplate`radial-gradient(420px circle at ${mx}% ${my}%, rgba(72,202,228,0.14), transparent 55%)`;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || reduced) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  };

  const onLeave = () => {
    mx.set(50);
    my.set(50);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={
        reduced
          ? {}
          : {
              rotateX: 4,
              rotateY: -4,
              translateZ: 12,
            }
      }
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      style={{ perspective: 900 }}
      className="h-full"
    >
      <Card className="group relative h-full overflow-hidden border-white/[0.08] bg-[#001233]/55 shadow-none transition-[box-shadow,transform] duration-500 hover:border-[#48cae4]/35 hover:shadow-[0_0_60px_rgba(0,119,182,0.18)]">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: bg }}
        />
        <CardContent className="relative space-y-4 p-6 sm:p-7">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[#48cae4] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="text-lg font-semibold tracking-tight text-white">{title}</h3>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">{description}</p>
          <div className="flex items-center gap-2 text-xs font-medium text-[#90e0ef]">
            <span className="h-px w-8 bg-gradient-to-r from-[#48cae4] to-transparent" />
            Stack sob medida
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="relative z-[2] scroll-mt-28 py-24 sm:py-28 lg:py-32"
      aria-labelledby="servicos-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#48cae4]">
            Serviços
          </p>
          <h2
            id="servicos-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Da ideação ao deploy — com excelência em cada camada.
          </h2>
          <p className="mt-4 text-pretty text-base text-slate-400 sm:text-lg">
            Unimos design de alto nível e engenharia sólida para lançar produtos digitais que se
            sentem premium em cada interação.
          </p>
        </ScrollReveal>

        <StaggerChildren className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <ServiceCard {...s} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
