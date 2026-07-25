import Reveal from "@/components/ui/Reveal";

export default function AboutMarquee() {
  const text =
    "ABOUT ME · SECURITY ENGINEER · AI RESEARCHER · DEEP LEARNING · NETWORK SECURITY · EXPLAINABLE AI · PYTORCH · CYBERSECURITY · IEEE PUBLISHED · PROBLEM SOLVER · ";
  return (
    <section className="mx-auto max-w-4xl px-4 pt-6 sm:px-6">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d1512] py-6">
          <div className="flex w-max animate-[marquee_28s_linear_infinite] whitespace-nowrap">
            {Array.from({ length: 3 }).map((_, i) => (
              <span
                key={i}
                className="mx-4 font-mono text-2xl font-bold tracking-tight text-[#3f8562]/80 sm:text-3xl"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
