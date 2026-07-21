import {
  Award,
  BookOpen,
  ExternalLink,
  GraduationCap,
  Trophy,
} from "lucide-react";
import {
  achievements,
  education,
  publications,
} from "../../data/education";
import { Section } from "../layout/Section";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Credentials"
      title="Education, research & achievements"
      description="Academic performance, published cloud research, and global competition results."
      className="bg-ink-soft/50"
    >
      <div className="space-y-8">
        {education.map((item) => (
          <article
            key={item.id}
            className="relative overflow-hidden rounded-2xl border border-accent/30 bg-surface p-6 md:p-7"
          >
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="rounded-xl border border-accent/25 bg-accent/10 p-3 text-accent">
                  <GraduationCap size={28} />
                </span>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    Education
                  </p>
                  <h3 className="font-display text-xl font-bold text-fg md:text-2xl">
                    {item.school}
                  </h3>
                  <p className="mt-1 text-base text-muted">{item.degree}</p>
                  <p className="mt-2 text-sm text-muted">{item.date}</p>
                </div>
              </div>
              <div className="shrink-0 border-t border-border pt-4 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Academic score
                </p>
                <p className="font-display mt-1 text-3xl font-extrabold text-accent">
                  {item.grade}
                </p>
              </div>
            </div>
          </article>
        ))}

        <div>
          <div className="mb-4 flex items-center gap-2">
            <Trophy size={20} className="text-accent" />
            <h3 className="font-display text-xl font-bold text-fg">
              Key achievements
            </h3>
          </div>
          <ul className="grid gap-4 md:grid-cols-2">
            {achievements.map((item, index) => (
              <li
                key={item.id}
                className={`rounded-xl border p-5 ${
                  index === 0
                    ? "border-accent/40 bg-accent/8"
                    : "border-border bg-surface"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-lg bg-accent/10 p-2 text-accent">
                    <Award size={20} />
                  </span>
                  <span className="text-xs font-medium text-muted">
                    {item.date}
                  </span>
                </div>
                <p className="font-display mt-4 text-xl font-bold text-fg">
                  {item.title}
                </p>
                <p className="mt-1 text-sm font-semibold text-accent">
                  {item.org}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                  >
                    View achievement <ExternalLink size={14} />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2">
            <BookOpen size={20} className="text-accent" />
            <h3 className="font-display text-xl font-bold text-fg">
              Published research
            </h3>
          </div>
          <ul className="grid gap-4 md:grid-cols-2">
            {publications.map((pub, index) => (
              <li
                key={pub.id}
                className="flex gap-4 rounded-xl border border-border bg-surface p-5"
              >
                <span className="font-display text-2xl font-bold text-accent/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-semibold leading-snug text-fg">
                    {pub.title}
                  </p>
                  <p className="mt-2 text-sm text-muted">{pub.venue}</p>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                    >
                      Read publication <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
