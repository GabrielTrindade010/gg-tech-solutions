"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function FinalCtaSection() {
  const reduced = useReducedMotion();

  return (
    <section
      id="contato"
      className="relative z-[2] scroll-mt-28 pb-28 pt-10 sm:pb-32 sm:pt-14"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-[2rem] border border-white/[0.1] bg-gradient-to-br from-[#001233] via-[#001d3d] to-[#000814] px-8 py-16 text-center shadow-[0_60px_140px_rgba(0,119,182,0.22)] sm:px-14 sm:py-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_22%,rgba(72,202,228,0.32),transparent_58%),radial-gradient(circle_at_82%_38%,rgba(0,119,182,0.28),transparent_55%),radial-gradient(circle_at_48%_78%,rgba(72,202,228,0.14),transparent_60%)]"
            animate={reduced ? {} : { opacity: [0.42, 0.72, 0.48, 0.68, 0.42] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative mx-auto max-w-3xl space-y-6">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.24em] text-slate-300">
              <Sparkles className="h-3.5 w-3.5 text-[#48cae4]" aria-hidden />
              Vagas limitadas
            </div>
            <h2
              id="cta-heading"
              className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Pronto para um produto que parece{" "}
              <span className="text-gradient">big tech</span> desde o dia zero?
            </h2>
            <p className="text-pretty text-base text-slate-300 sm:text-lg">
              Conte-nos sobre seu desafio — retornamos com um plano de arquitetura, squad e
              cronograma em até 48 horas úteis.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 pt-4 sm:flex-row">
              <Button variant="glow" size="lg" className="group min-w-[220px]" asChild>
                <Link href="mailto:contato@ggtechsolutions.com.br">
                  Começar projeto
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" className="min-w-[220px]" asChild>
                <Link href="#servicos">Explorar serviços</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
