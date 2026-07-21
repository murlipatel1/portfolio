import { ExternalLink } from "lucide-react";
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
      eyebrow="Background"
      title="Education, research & wins"
      description="Strong fundamentals, published cloud research, and competition results."
      className="bg-ink-soft/30"
    >
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Education
          </h3>
          <ul className="space-y-6">
            {education.map((item) => (
              <li key={item.id} className="border-b border-border pb-5 last:border-0">
                <p className="font-display text-lg font-semibold text-fg">
                  {item.school}
                </p>
                <p className="mt-1 text-sm text-muted">{item.degree}</p>
                <p className="mt-2 text-sm text-muted">
                  {item.date} · <span className="text-fg">{item.grade}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Publications
            </h3>
            <ul className="space-y-4">
              {publications.map((pub) => (
                <li key={pub.id}>
                  <p className="text-sm font-medium leading-snug text-fg">
                    {pub.title}
                  </p>
                  <p className="mt-1 text-sm text-muted">{pub.venue}</p>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-sm text-accent hover:underline"
                    >
                      View <ExternalLink size={12} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Achievements
            </h3>
            <ul className="space-y-4">
              {achievements.map((item) => (
                <li key={item.id}>
                  <p className="text-sm font-semibold text-fg">
                    {item.title} · {item.org}
                  </p>
                  <p className="mt-1 text-xs text-muted">{item.date}</p>
                  <p className="mt-1 text-sm text-muted">{item.description}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-sm text-accent hover:underline"
                    >
                      Details <ExternalLink size={12} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
