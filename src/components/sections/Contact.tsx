import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { bio } from "../../data/bio";
import { Section } from "../layout/Section";
import { Button } from "../ui/Button";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle",
  );

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const emailjsReady = Boolean(serviceId && templateId && publicKey);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!emailjsReady) {
      const data = new FormData(formRef.current);
      const subject = encodeURIComponent(String(data.get("subject") || "Portfolio inquiry"));
      const body = encodeURIComponent(
        `From: ${data.get("from_name")} <${data.get("from_email")}>\n\n${data.get("message")}`,
      );
      window.location.href = `mailto:${bio.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(serviceId!, templateId!, formRef.current, {
        publicKey: publicKey!,
      });
      setStatus("ok");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something"
      description="Reach out for roles, collaborations, or questions about my work."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          <a
            href={`mailto:${bio.email}`}
            className="flex items-center gap-3 text-sm text-muted transition hover:text-accent"
          >
            <Mail size={18} className="text-accent" />
            {bio.email}
          </a>
          <a
            href={`tel:${bio.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-3 text-sm text-muted transition hover:text-accent"
          >
            <Phone size={18} className="text-accent" />
            {bio.phone}
          </a>
          <a
            href={bio.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-sm text-muted transition hover:text-accent"
          >
            <Github size={18} className="text-accent" />
            GitHub
          </a>
          <a
            href={bio.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-sm text-muted transition hover:text-accent"
          >
            <Linkedin size={18} className="text-accent" />
            LinkedIn
          </a>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-5 sm:p-6"
        >
          <label className="sr-only" htmlFor="from_name">
            Name
          </label>
          <input
            id="from_name"
            name="from_name"
            required
            placeholder="Your name"
            className="rounded-lg border border-border bg-ink px-3 py-2.5 text-sm text-fg outline-none placeholder:text-muted focus:border-accent"
          />
          <label className="sr-only" htmlFor="from_email">
            Email
          </label>
          <input
            id="from_email"
            name="from_email"
            type="email"
            required
            placeholder="Your email"
            className="rounded-lg border border-border bg-ink px-3 py-2.5 text-sm text-fg outline-none placeholder:text-muted focus:border-accent"
          />
          <label className="sr-only" htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            required
            placeholder="Subject"
            className="rounded-lg border border-border bg-ink px-3 py-2.5 text-sm text-fg outline-none placeholder:text-muted focus:border-accent"
          />
          <label className="sr-only" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Message"
            className="resize-y rounded-lg border border-border bg-ink px-3 py-2.5 text-sm text-fg outline-none placeholder:text-muted focus:border-accent"
          />
          <Button
            type="submit"
            disabled={status === "sending"}
            className="mt-1"
          >
            <Send size={16} />
            {status === "sending" ? "Sending…" : emailjsReady ? "Send message" : "Open email"}
          </Button>
          {status === "ok" && (
            <p className="text-sm text-accent">Message sent — thanks!</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400">
              Something went wrong. Email me directly at {bio.email}.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
