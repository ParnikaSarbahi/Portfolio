import { skillGroups } from "@/constants/content";
import Chip from "@/components/ui/Chip";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-4 pt-16 sm:px-6">
      <Reveal>
        <SectionHeading>Skills.</SectionHeading>
        <div className="space-y-7">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="mb-3 font-mono text-xs tracking-wide text-[#3f8562]">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
