import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function GardenTeaser() {
  return (
    <Reveal delay={0.1} className="h-full">
      <Link
        href="/garden"
        className="group relative block h-full min-h-[220px] overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-[#132018] via-[#0d1512] to-[#0a0d12] transition-colors hover:border-[rgba(63,133,98,0.35)]"
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 mix-blend-screen [background:radial-gradient(circle_at_30%_40%,#2a563f,transparent_45%),radial-gradient(circle_at_70%_60%,#3f8562,transparent_40%)]"
        />
        <div className="relative flex h-full flex-col items-center justify-center gap-2 text-center">
          <p className="font-mono text-xl tracking-wide text-[#eef1f5] transition-transform duration-300 group-hover:scale-105">
            Visit the Garden
          </p>
          <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 font-mono text-[10px] text-[#9aa4b2]">
            coming soon
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
