import { featuredProjects, projects } from "@/constants/content";
import { profile } from "@/constants/content";
import Card from "@/components/ui/Card";
import Chip from "@/components/ui/Chip";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-4 pt-16 sm:px-6">
      <Reveal>
        <SectionHeading>Projects.</SectionHeading>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {featuredProjects.map((p) => (
            <a
              key={p.key}
              href={p.githubUrl ?? profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card hover className="h-full p-6">
                <div className="mb-3 flex items-center justify-between">
                  <p className="font-mono text-xs tracking-wide text-[#6fbf94]">{p.category}</p>
                  {p.featured && (
                    <span className="rounded-full border border-[rgba(63,133,98,0.35)] bg-[rgba(63,133,98,0.12)] px-2 py-0.5 font-mono text-[10px] text-[#6fbf94]">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-[#eef1f5]">{p.title}</h3>
                <p className="mt-1 font-mono text-xs text-[#9aa4b2]">{p.status}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#9aa4b2]">{p.description}</p>
                {p.metrics.length > 0 && (
                  <p className="mt-3 font-mono text-xs text-[#6b7482]">{p.metrics.join(" · ")}</p>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </Card>
            </a>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.key}
              href={p.githubUrl ?? profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card hover className="h-full p-6">
                <p className="font-mono text-xs tracking-wide text-[#6fbf94]">{p.category}</p>
                <h3 className="mt-2 text-base font-semibold text-[#eef1f5]">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#9aa4b2]">{p.description}</p>
                {p.metrics.length > 0 && (
                  <p className="mt-2 font-mono text-xs text-[#6b7482]">{p.metrics.join(" · ")}</p>
                )}
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </Card>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
