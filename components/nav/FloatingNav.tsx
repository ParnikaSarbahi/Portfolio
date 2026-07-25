"use client";

import { navItems } from "@/constants/nav";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FloatingNav() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2"
      aria-label="Primary"
    >
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-[#10151d]/80 px-3 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl">
        {navItems.map((item) => (
          <span key={item.id} className="relative flex items-center">
            <a
              href={item.href}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              aria-label={item.label}
              className="flex h-8 w-8 items-center justify-center rounded-full text-[#9aa4b2] transition-colors duration-200 hover:bg-white/8 hover:text-[#eef1f5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#3f8562]"
            >
              <item.icon size={16} strokeWidth={1.75} />
            </a>
            {hovered === item.id && (
              <motion.span
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-[#131a23] px-2 py-1 font-mono text-[10px] text-[#9aa4b2] shadow-lg"
              >
                {item.label}
              </motion.span>
            )}
            {item.dividerAfter && (
              <span className="mx-1.5 h-4 w-px bg-white/10" aria-hidden />
            )}
          </span>
        ))}
      </div>
    </motion.nav>
  );
}
