import { experiences } from "../../data/experience";
import { Section } from "../layout/Section";
import { Chip } from "../ui/Chip";

export function Experience() {
  return (
    <Section
      id="work"
      eyebrow="Experience"
      title="Where I've shipped"
      description="Full-stack delivery in production: performance, data pipelines, and product UI."
    >
      <ol className="relative space-y-10 border-l border-border pl-6 md:pl-8">
        {experiences.map((job) => (
          <li key={job.id} className="relative">
            <span className="absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-ink md:-left-[2.4rem]" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display text-xl font-semibold text-fg">
                {job.role}
              </h3>
              <time className="text-sm text-muted">{job.date}</time>
            </div>
            <p className="mt-1 text-sm font-medium text-accent">
              {job.company} · {job.location}
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.technologies.map((tech) => (
                <Chip key={tech}>{tech}</Chip>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
