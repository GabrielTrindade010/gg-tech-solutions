"use client";

import type { ReactNode } from "react";

import { GsapProvider } from "@/components/animations/gsap-provider";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { SiteHeader } from "@/components/layout/site-header";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <SmoothScrollProvider>
      <GsapProvider />
      <LoadingScreen />
      <CustomCursor />
      <SiteHeader />
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[110] -translate-y-24 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#000814] opacity-0 transition focus:z-[120] focus:translate-y-0 focus:opacity-100"
      >
        Pular para o conteúdo
      </a>
      {children}
    </SmoothScrollProvider>
  );
}
