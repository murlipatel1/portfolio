import { skillGroups } from "../../data/skills";
import { Section } from "../layout/Section";
import { Chip } from "../ui/Chip";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Capabilities"
      title="Stack I use day to day"
      description="Languages, frameworks, cloud, and tools aligned with how I ship at work."
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="font-display mb-3 text-lg font-semibold text-fg">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Chip
                  key={skill.name}
                  icon={skill.icon}
                  iconAlt={`${skill.name} logo`}
                  invertIcon={skill.invert}
                >
                  {skill.name}
                </Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
