import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { bio } from "../../data/bio";
import { Button } from "../ui/Button";

const links = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors ${
        scrolled || open
          ? "border-b border-border/80 bg-ink/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <a
          href="#top"
          className="inline-flex items-center gap-2 font-display text-lg font-bold tracking-tight text-fg"
          onClick={() => setOpen(false)}
          aria-label="Home"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="text-accent"
          >
            <path
              d="M12 2L3 7v10l9 5 9-5V7l-9-5Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M12 12L3 7m9 5 9-5m-9 5v10"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>
            Stack<span className="text-accent">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href={bio.resume} target="_blank" rel="noreferrer" variant="secondary">
            Resume
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-fg md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-ink/95 px-5 py-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-lg text-fg"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            href={bio.resume}
            target="_blank"
            rel="noreferrer"
            className="mt-6 w-full"
            onClick={() => setOpen(false)}
          >
            Resume
          </Button>
        </div>
      )}
    </header>
  );
}
