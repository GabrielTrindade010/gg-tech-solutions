"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
];

export function SiteHeader({ className }: { className?: string }) {
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#000814]/65 backdrop-blur-xl",
        className,
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Link
          href="#topo"
          className="flex items-center gap-3 rounded-lg outline-none ring-offset-2 ring-offset-[#000814] focus-visible:ring-2 focus-visible:ring-[#48cae4]"
          aria-label={`${SITE_NAME} — início`}
        >
          <span className="relative h-9 w-9 overflow-hidden rounded-xl border border-white/10 shadow-[0_0_30px_rgba(0,119,182,0.25)]">
            <Image src="/assets/images/logo.jpeg" alt="" fill className="object-cover" sizes="36px" />
          </span>
          <span className="hidden font-semibold tracking-tight text-white sm:inline">{SITE_NAME}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" className="hidden sm:inline-flex" asChild>
            <Link href="#contato">Falar com especialistas</Link>
          </Button>
          <Button size="sm" className="sm:hidden" asChild>
            <Link href="#contato">Contato</Link>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
