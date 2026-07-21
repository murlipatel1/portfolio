import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { bio } from "../../data/bio";
import { Button } from "../ui/Button";
import { fadeUp, stagger } from "../../lib/motion";

const typedSkills = [
  "React.js",
  "Next.js",
  "Node.js",
  "TypeScript",
  "AWS",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "Azure",
  "Spring Boot",
];

function TypeSkill({ reduce }: { reduce: boolean | null }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(reduce ? typedSkills[0] : "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) {
      setText(typedSkills[index % typedSkills.length]);
      return;
    }

    const current = typedSkills[index % typedSkills.length];
    const doneTyping = !deleting && text === current;
    const doneDeleting = deleting && text === "";

    let delay = deleting ? 45 : 90;
    if (doneTyping) delay = 1400;
    if (doneDeleting) delay = 350;

    const timer = window.setTimeout(() => {
      if (doneTyping) {
        setDeleting(true);
        return;
      }
      if (doneDeleting) {
        setDeleting(false);
        setIndex((i) => (i + 1) % typedSkills.length);
        return;
      }
      const next = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);
      setText(next);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, index, reduce]);

  return (
    <span className="text-accent">
      {text}
      <span
        className={`ml-0.5 inline-block h-4 w-[2px] translate-y-[2px] bg-accent ${
          reduce ? "opacity-70" : "animate-pulse"
        }`}
      />
    </span>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[82svh] items-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-atmosphere" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />

      <motion.div
        className="relative mx-auto grid w-full max-w-5xl items-center gap-10 px-5 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:py-16"
        initial={reduce ? false : "hidden"}
        animate="visible"
        variants={reduce ? undefined : stagger}
      >
        <div>
          <motion.p
            variants={reduce ? undefined : fadeUp}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/8 px-3 py-1.5 text-sm font-medium text-accent"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            {bio.title}
          </motion.p>

          <motion.h1
            variants={reduce ? undefined : fadeUp}
            className="font-display max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-fg sm:text-6xl md:text-7xl"
          >
            {bio.name}
          </motion.h1>

          <motion.p
            variants={reduce ? undefined : fadeUp}
            className="mt-5 max-w-xl text-lg leading-relaxed text-muted"
          >
            {bio.tagline}
          </motion.p>

          <motion.div
            variants={reduce ? undefined : fadeUp}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <Button href={bio.resume} target="_blank" rel="noreferrer">
              View resume
            </Button>
            <Button href="#projects" variant="secondary">
              Explore work
              <ArrowDownRight size={16} />
            </Button>
            <a
              href={bio.github}
              target="_blank"
              rel="noreferrer"
              className="ml-1 rounded-lg p-2.5 text-muted hover:bg-surface-2 hover:text-fg"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={bio.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg p-2.5 text-muted hover:bg-surface-2 hover:text-fg"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
          </motion.div>
        </div>

        <motion.aside
          variants={reduce ? undefined : fadeUp}
          className="relative mx-auto w-full max-w-md lg:mx-0"
        >
          <div className="relative overflow-hidden rounded-2xl border border-border bg-[#0a101c] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <div className="flex items-center gap-2 border-b border-border/80 bg-[#101828] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-muted">
                murli@cloud:~
              </span>
            </div>

            <div className="space-y-3 px-5 py-5 font-mono text-[13px] leading-relaxed sm:text-sm">
              <p>
                <span className="text-accent">$</span>{" "}
                <span className="text-muted">whoami</span>
              </p>
              <p className="text-fg">full_stack_developer · cloud_curious</p>

              <p>
                <span className="text-accent">$</span>{" "}
                <span className="text-muted">skills --watch</span>
              </p>
              <p className="min-h-[1.5rem] text-fg">
              
                <TypeSkill reduce={reduce} />
              </p>

              <p>
                <span className="text-accent">$</span>{" "}
                <span className="text-muted">cat interests.json</span>
              </p>
              <pre className="overflow-x-auto text-muted">
                <code>
                  {`{
  "focus": [
    "cloud & infrastructure",
    "serverless systems",
    "full-stack products",
    "AI / RAG platforms"
  ],
  "status": "shipping"
}`}
                </code>
              </pre>

              <p>
                <span className="text-accent">$</span>{" "}
                <span className="text-muted">open project</span>
              </p>
              <a
                href="https://github.com/murlipatel1/llm-document-processing-ollama"
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-accent underline-offset-4 hover:underline"
              >
                → enterprise-knowledge-base
              </a>
            </div>
          </div>
        </motion.aside>
      </motion.div>
    </section>
  );
}
