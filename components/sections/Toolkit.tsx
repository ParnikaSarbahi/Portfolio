import { toolkit } from "@/constants/content";
import Chip from "@/components/ui/Chip";
import Reveal from "@/components/ui/Reveal";

export default function Toolkit() {
  return (
    <section id="toolkit" className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
      <Reveal>
        <p className="mb-4 font-mono text-xs tracking-wide text-[#6b7482]">TOOLKIT</p>
        <div className="flex flex-wrap gap-2">
          {toolkit.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
