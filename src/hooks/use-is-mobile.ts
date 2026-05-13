"use client";

import { useMediaQuery } from "@/hooks/use-media-query";

export function useIsMobile(breakpoint = "(max-width: 768px)") {
  return useMediaQuery(breakpoint);
}
