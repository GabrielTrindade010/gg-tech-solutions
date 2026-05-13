"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const reduced = useReducedMotion();

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(false), reduced ? 400 : 1400);
    return () => window.clearTimeout(t);
  }, [reduced]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#000814]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0.15 : 0.55, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden={!visible}
          role="presentation"
        >
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: reduced ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-20 w-20 overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_60px_rgba(0,119,182,0.35)]"
            >
              <Image
                src="/assets/images/logo.jpeg"
                alt=""
                fill
                className="object-cover"
                sizes="80px"
                priority
              />
            </motion.div>
            {!reduced && (
              <motion.div
                className="h-1 w-40 overflow-hidden rounded-full bg-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="h-full w-1/3 rounded-full bg-gradient-to-r from-[#0077b6] to-[#48cae4]"
                  animate={{ x: ["-100%", "280%"] }}
                  transition={{ repeat: Infinity, duration: 1.1, ease: "linear" }}
                />
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
