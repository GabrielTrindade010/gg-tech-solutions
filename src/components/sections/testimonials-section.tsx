"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { testimonials } from "@/data/content";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(next, 7200);
    return () => window.clearInterval(id);
  }, [next, reduced]);

  const t = testimonials[index];

  return (
    <section
      id="depoimentos"
      className="relative z-[2] scroll-mt-28 py-24 sm:py-28 lg:py-32"
      aria-labelledby="depoimentos-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#48cae4]">
            Depoimentos
          </p>
          <h2
            id="depoimentos-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Times que confiam na GG Tech para lançar no ritmo certo.
          </h2>
        </div>

        <div className="relative mt-14">
          <div className="absolute -inset-px rounded-[1.75rem] bg-gradient-to-r from-[#0077b6]/40 via-[#48cae4]/25 to-[#003566]/50 opacity-80 blur-xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.1] bg-[#001233]/75 p-8 shadow-[0_40px_120px_rgba(0,20,40,0.55)] backdrop-blur-2xl sm:p-12">
            <Quote
              className="absolute right-8 top-8 h-10 w-10 text-[#48cae4]/25 sm:h-12 sm:w-12"
              aria-hidden
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={t.quote}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative text-center"
              >
                <blockquote className="mx-auto max-w-3xl text-pretty text-lg leading-relaxed text-slate-200 sm:text-xl">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-slate-400">{t.role}</p>
                </figcaption>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={prev}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition hover:border-[#48cae4]/40 hover:bg-white/[0.07]"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2" role="tablist" aria-label="Selecionar depoimento">
                {testimonials.map((_, i) => (
                  <button
                    key={String(i)}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? "w-8 bg-[#48cae4]" : "w-2 bg-white/20 hover:bg-white/35"
                    }`}
                    onClick={() => setIndex(i)}
                    aria-label={`Depoimento ${i + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={next}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition hover:border-[#48cae4]/40 hover:bg-white/[0.07]"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
