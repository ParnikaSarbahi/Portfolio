import Image from "next/image";
import { experience } from "@/constants/content";
import Chip from "@/components/ui/Chip";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-4 pt-16 sm:px-6">
      <Reveal>
        <SectionHeading
          action={
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Full resume →
            </a>
          }
        >
          Experience.
        </SectionHeading>
        <div className="space-y-8">
          {experience.map((job) => (
            <div key={job.role} className="border-t border-white/[0.07] pt-6 first:border-t-0 first:pt-0">
              <p className="font-mono text-xs text-[#6b7482]">
                {job.duration} · {job.type}
              </p>
              <div className="mt-3 flex items-start gap-3">
                <div className="relative mt-0.5 h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-[#131a23]">
                  <Image
                    src={job.logo}
                    alt=""
                    fill
                    sizes="36px"
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <p className="text-base font-semibold text-[#eef1f5]">{job.role}</p>
                  <p className="text-sm text-[#9aa4b2]">{job.company}</p>
                </div>
              </div>
              <ul className="mt-3 ml-12 list-disc space-y-1 text-sm text-[#9aa4b2] marker:text-[#3f8562]">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="mt-3 ml-12 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
