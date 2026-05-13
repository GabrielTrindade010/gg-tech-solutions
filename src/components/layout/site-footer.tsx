"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

import { SITE_NAME, SOCIAL } from "@/lib/constants";

const footerLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function SiteFooter() {
  return (
    <footer className="relative z-[2] border-t border-white/[0.06] bg-[#000814]/90 pb-12 pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <Link
              href="#topo"
              className="inline-flex items-center gap-3 rounded-lg outline-none ring-offset-2 ring-offset-[#000814] focus-visible:ring-2 focus-visible:ring-[#48cae4]"
            >
              <span className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/10 shadow-[0_0_28px_rgba(0,119,182,0.25)]">
                <Image
                  src="/assets/images/logo.jpeg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </span>
              <span className="font-semibold tracking-tight text-white">{SITE_NAME}</span>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              Estúdio de produto digital focado em sites, apps e plataformas SaaS com performance de
              nível enterprise e UX cinematográfica.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-[#48cae4]/35 hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-[#48cae4]/35 hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-[#48cae4]/35 hover:text-white"
                aria-label="Instagram"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Navegação
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                {footerLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="transition hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Contato
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                <li>
                  <a href={SOCIAL.email} className="transition hover:text-white">
                    contato@ggtechsolutions.com.br
                  </a>
                </li>
                <li>São Paulo · Atendimento global</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/[0.06] pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE_NAME}. Todos os direitos reservados.</p>
          <p className="text-slate-600">Construído com Next.js, motion e obsessão por detalhe.</p>
        </div>
      </div>
    </footer>
  );
}
