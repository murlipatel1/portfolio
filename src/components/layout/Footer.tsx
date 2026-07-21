import { Github, Linkedin, Mail } from "lucide-react";
import { bio } from "../../data/bio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        <p className="text-sm text-muted">
          © {year} {bio.name}. Built with React & Vite.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${bio.email}`}
            className="text-muted hover:text-accent"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href={bio.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-accent"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={bio.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-accent"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
