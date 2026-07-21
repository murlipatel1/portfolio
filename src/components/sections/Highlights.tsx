import { highlights } from "../../data/highlights";
import { Section } from "../layout/Section";

export function Highlights() {
  return (
    <Section
      id="highlights"
      eyebrow="Proof"
      title="Impact at a glance"
      className="border-y border-border/60 bg-ink-soft/40"
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item) => (
          <li key={item.label} className="border-l-2 border-accent/60 pl-4">
            <p className="font-display text-3xl font-bold text-fg md:text-4xl">
              {item.value}
            </p>
            <p className="mt-2 text-sm leading-snug text-muted">{item.label}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
