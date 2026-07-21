import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";
import type { Project } from "../../data/projects";
import { Section } from "../layout/Section";
import { Chip } from "../ui/Chip";
import { ProjectModal } from "../ui/ProjectModal";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <>
      <Section
        id="projects"
        eyebrow="Selected work"
        title="Projects that show how I think"
        description="Problem → action → result. Click a project for the full case snapshot."
        className="bg-ink-soft/30"
      >
        <ul className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.id}>
              <button
                type="button"
                onClick={() => setActive(project)}
                className="group flex h-full w-full flex-col rounded-2xl border border-border bg-surface p-5 text-left transition hover:-translate-y-0.5 hover:border-accent/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-accent">
                      {project.date}
                    </p>
                    <h3 className="font-display mt-1 text-xl font-semibold text-fg">
                      {project.title}
                    </h3>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-muted transition group-hover:text-accent"
                  />
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.result}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <Chip key={tag}>{tag}</Chip>
                  ))}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </Section>

      {active && (
        <ProjectModal project={active} onClose={() => setActive(null)} />
      )}
    </>
  );
}
