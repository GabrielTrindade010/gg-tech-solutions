"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { AnimatedMesh } from "@/components/effects/animated-mesh";
import { ParticleField } from "@/components/effects/particle-field";
import { Spotlight } from "@/components/effects/spotlight";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { SITE_NAME } from "@/lib/constants";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section
      ref={ref}
      id="topo"
      className="relative isolate flex min-h-[100dvh] flex-col justify-center overflow-hidden pt-24"
      aria-labelledby="hero-heading"
    >
      <AnimatedMesh />
      <Spotlight />
      <ParticleField />

      <motion.div style={{ y, opacity }} className="relative z-[3] mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-slate-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#48cae4] shadow-[0_0_12px_#48cae4]" />
              Product Studio · Enterprise Ready
            </motion.p>

            <div className="space-y-5">
              <motion.h1
                id="hero-heading"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[3.75rem] xl:leading-[1.05]"
              >
                Software que parece{" "}
                <span className="text-gradient bg-[length:200%_auto]">simples</span> — e escala como
                uma big tech.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-xl text-pretty text-base leading-relaxed text-slate-400 sm:text-lg"
              >
                A {SITE_NAME} projeta e desenvolve sites, apps e plataformas SaaS com precisão
                cirúrgica: performance impecável, UX cinematográfica e arquitetura preparada para o
                próximo nível.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button variant="glow" size="lg" className="group" asChild>
                <Link href="#contato" aria-label="Agendar uma conversa estratégica">
                  Agendar conversa
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="#projetos" aria-label="Ver projetos em destaque">
                  <Play className="opacity-80" />
                  Ver showcase
                </Link>
              </Button>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="grid max-w-lg grid-cols-3 gap-4 border-t border-white/[0.06] pt-8 text-sm"
            >
              <div>
                <dt className="text-slate-500">Tempo médio</dt>
                <dd className="font-semibold text-white">90 dias</dd>
              </div>
              <div>
                <dt className="text-slate-500">Squads</dt>
                <dd className="font-semibold text-white">Produto + Eng</dd>
              </div>
              <div>
                <dt className="text-slate-500">Disponibilidade</dt>
                <dd className="font-semibold text-emerald-300">Novos projetos</dd>
              </div>
            </motion.dl>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[440px] lg:mx-0 lg:max-w-none"
          >
            <div className="relative aspect-square max-h-[420px] lg:max-h-[520px]">
              <motion.div
                aria-hidden
                className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#0077b6]/25 via-transparent to-[#48cae4]/15 blur-3xl"
                animate={
                  reduced
                    ? {}
                    : {
                        rotate: [0, 2, -1, 0],
                      }
                }
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative z-[2] flex h-full items-center justify-center">
                <motion.div
                  style={{ rotateX: reduced ? 0 : 8, rotateY: reduced ? 0 : -10 }}
                  className="relative h-[72%] w-[72%] rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_40px_120px_rgba(0,20,40,0.55)] backdrop-blur-2xl"
                  whileHover={reduced ? {} : { rotateX: 4, rotateY: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 120, damping: 18 }}
                >
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="rounded-full bg-white/5 px-2 py-1 text-[10px] uppercase tracking-widest">
                      Live preview
                    </span>
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-[#0077b6] to-[#48cae4]" />
                    <div className="space-y-2">
                      <div className="h-2 rounded-full bg-white/10" />
                      <div className="h-2 rounded-full bg-white/10" />
                      <div className="h-2 w-5/6 rounded-full bg-white/10" />
                    </div>
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                        <p className="text-[10px] text-slate-500">Receita</p>
                        <p className="text-lg font-semibold text-white">R$ 2.4M</p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                        <p className="text-[10px] text-slate-500">Conversão</p>
                        <p className="text-lg font-semibold text-emerald-300">+42%</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -right-4 top-10 z-[3] hidden w-[52%] rounded-2xl border border-white/10 bg-[#001233]/80 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:block"
                  animate={
                    reduced
                      ? {}
                      : {
                          y: [0, -10, 0],
                        }
                  }
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-3">
                    <span className="relative block h-11 w-11 overflow-hidden rounded-xl border border-white/10">
                      <Image
                        src="/assets/images/logo.jpeg"
                        alt=""
                        fill
                        className="object-cover"
                        sizes="44px"
                      />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-white">{SITE_NAME}</p>
                      <p className="text-xs text-slate-400">Ship faster. Smile often.</p>
                    </div>
                  </div>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <p className="mt-3 text-xs leading-relaxed text-slate-400">
                    Motion, métricas e microdetalhes pensados para converter visitantes em clientes.
                  </p>
                </motion.div>

                <motion.div
                  className="absolute -left-6 bottom-16 z-[3] hidden rounded-2xl border border-[#48cae4]/25 bg-[#001233]/85 px-4 py-3 shadow-[0_24px_70px_rgba(0,119,182,0.25)] backdrop-blur-xl md:block"
                  animate={
                    reduced
                      ? {}
                      : {
                          y: [0, 12, 0],
                        }
                  }
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Edge latency</p>
                  <p className="text-2xl font-semibold text-white">
                    42<span className="text-base text-[#48cae4]">ms</span>
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-40 bg-gradient-to-t from-[#000814] to-transparent"
        aria-hidden
      />
    </section>
  );
}
