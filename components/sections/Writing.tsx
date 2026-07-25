import { writing } from "@/constants/content";
import Chip from "@/components/ui/Chip";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Writing() {
  return (
    <section id="writing" className="mx-auto max-w-4xl px-4 pt-16 sm:px-6">
      <Reveal>
        <SectionHeading>Writing.</SectionHeading>
        <div className="space-y-5">
          {writing.map((w) => (
            <div
              key={w.title}
              className="flex items-start justify-between gap-4 border-t border-white/[0.07] pt-5 first:border-t-0 first:pt-0"
            >
              <div>
                <p className="font-mono text-xs text-[#6b7482]">
                  {w.type} · {w.date}
                </p>
                <p className="mt-1 text-base font-semibold text-[#eef1f5]">{w.title}</p>
                <p className="text-sm text-[#9aa4b2]">{w.venue}</p>
              </div>
              <Chip variant={w.status === "accepted" ? "accent" : "default"}>
                {w.status === "accepted" ? "Accepted" : "Forthcoming"}
              </Chip>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
