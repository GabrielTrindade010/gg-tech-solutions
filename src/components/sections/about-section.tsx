"use client";

import { motion } from "framer-motion";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { values } from "@/data/content";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function AboutSection() {
  const reduced = useReducedMotion();

  return (
    <section
      id="sobre"
      className="relative z-[2] scroll-mt-28 py-24 sm:py-28 lg:py-32"
      aria-labelledby="sobre-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-20">
          <ScrollReveal className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#48cae4]">
              Sobre nós
            </p>
            <h2
              id="sobre-heading"
              className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Construímos o futuro digital com método, arte e obsessão por detalhe.
            </h2>
            <p className="text-pretty text-base leading-relaxed text-slate-400 sm:text-lg">
              Somos um estúdio compacto com ambição global: cada linha de código e cada frame de
              interface são pensados para performance real, não apenas para deck de investidor.
              Unimos branding minimalista com engenharia de plataforma — o mesmo DNA visual da sua
              logo: precisão, conexão e luz controlada.
            </p>
            <motion.ul
              className="grid gap-4 pt-4 sm:grid-cols-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10%" }}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: reduced ? 0 : 0.12 },
                },
              }}
            >
              {["Inovação contínua", "Stack moderno", "Parceria transparente", "Design ético"].map(
                (item) => (
                  <motion.li
                    key={item}
                    variants={{
                      hidden: { opacity: 0, x: -12 },
                      show: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                      },
                    }}
                    className="rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
                  >
                    {item}
                  </motion.li>
                ),
              )}
            </motion.ul>
          </ScrollReveal>

          <div className="relative">
            <motion.div
              aria-hidden
              className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(0,119,182,0.35),transparent_55%)] blur-2xl"
              animate={
                reduced
                  ? {}
                  : {
                      opacity: [0.45, 0.75, 0.45],
                    }
              }
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative space-y-5">
              {values.map((v, i) => (
                <motion.article
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#001233]/70 p-6 backdrop-blur-xl sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#48cae4]/30 bg-[#000814]/80 text-[#48cae4]">
                      <v.icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white">{v.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-400">{v.body}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
