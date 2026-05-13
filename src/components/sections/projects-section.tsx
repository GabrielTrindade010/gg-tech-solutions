"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children";
import { projects } from "@/data/content";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function ProjectsSection() {
  const reduced = useReducedMotion();

  return (
    <section
      id="projetos"
      className="relative z-[2] scroll-mt-28 py-24 sm:py-28 lg:py-32"
      aria-labelledby="projetos-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#48cae4]">
            Showcase
          </p>
          <h2
            id="projetos-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Produtos fictícios — realismo de bilionário.
          </h2>
          <p className="mt-4 text-pretty text-base text-slate-400 sm:text-lg">
            Uma prévia do tipo de fit & finish que entregamos: interfaces audaciosas, motion
            inteligente e narrativa de produto coesa.
          </p>
        </ScrollReveal>

        <StaggerChildren className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <StaggerItem key={p.title}>
              <motion.article
                whileHover={reduced ? {} : { y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#001233]/45 shadow-[0_40px_120px_rgba(0,0,0,0.35)]"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-35 blur-3xl transition-opacity duration-500 group-hover:opacity-55`}
                  aria-hidden
                />
                <div className="relative flex min-h-[240px] flex-col justify-between p-8 sm:min-h-[280px]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                        {p.category}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{p.title}</h3>
                    </div>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      <ArrowUpRight className="h-5 w-5" aria-hidden />
                    </span>
                  </div>

                  <p className="max-w-md text-sm leading-relaxed text-slate-300">{p.description}</p>

                  <div className="mt-8 h-px w-full origin-left scale-x-75 bg-gradient-to-r from-white/50 via-white/10 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="pointer-events-none absolute inset-0 opacity-0 mix-blend-screen transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -left-1/2 top-1/2 h-[220%] w-[220%] -translate-y-1/2 rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.07),transparent)]" />
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
