import { useEffect } from "react";
import { ExternalLink, X } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import type { Project } from "../../data/projects";
import { Chip } from "./Chip";
import { Button } from "./Button";

type Props = {
  project: Project;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/80 p-4 backdrop-blur-sm sm:items-center"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border bg-surface p-6 shadow-glow"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-accent">
              {project.date}
            </p>
            <h3
              id="project-modal-title"
              className="font-display mt-1 text-2xl font-bold text-fg"
            >
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-muted hover:bg-surface-2 hover:text-fg"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <dl className="space-y-4 text-sm leading-relaxed">
          <div>
            <dt className="font-semibold text-fg">Problem</dt>
            <dd className="mt-1 text-muted">{project.problem}</dd>
          </div>
          <div>
            <dt className="font-semibold text-fg">Action</dt>
            <dd className="mt-1 text-muted">{project.action}</dd>
          </div>
          <div>
            <dt className="font-semibold text-fg">Result</dt>
            <dd className="mt-1 text-muted">{project.result}</dd>
          </div>
        </dl>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.github && (
            <Button href={project.github} target="_blank" rel="noreferrer" variant="secondary">
              <GithubIcon size={16} /> Code
            </Button>
          )}
          {project.live && (
            <Button href={project.live} target="_blank" rel="noreferrer">
              <ExternalLink size={16} /> View
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
