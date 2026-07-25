"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "@/constants/content";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

type Cert = (typeof certifications)[number];

export default function Certifications() {
  const [active, setActive] = useState<Cert | null>(null);

  return (
    <section id="certifications" className="mx-auto max-w-4xl px-4 pt-16 sm:px-6">
      <Reveal>
        <SectionHeading>Certifications.</SectionHeading>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <button
              key={cert.name}
              onClick={() => setActive(cert)}
              className="text-left"
            >
              <Card hover className="flex items-center gap-5 p-6">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-[#131a23]">
                  <Image
                    src={cert.badge}
                    alt={cert.name}
                    fill
                    sizes="64px"
                    className="object-contain p-1.5"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
                    }}
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-base font-semibold text-[#eef1f5]">{cert.name}</p>
                  <p className="mt-1 text-sm text-[#9aa4b2]">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </Card>
            </button>
          ))}
        </div>
      </Reveal>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-2xl border border-white/10 bg-[#10151d] p-6 shadow-2xl"
            >
              <div className="flex items-start justify-between">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-[#131a23]">
                  <Image
                    src={active.badge}
                    alt={active.name}
                    fill
                    sizes="80px"
                    className="object-contain p-2"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
                    }}
                  />
                </div>
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  className="text-[#6b7482] transition-colors hover:text-[#eef1f5]"
                >
                  <X size={18} />
                </button>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#eef1f5]">{active.name}</h3>
              <p className="mt-1 font-mono text-xs text-[#6fbf94]">
                {active.issuer} · {active.year}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#9aa4b2]">{active.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
