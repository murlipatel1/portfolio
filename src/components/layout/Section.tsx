import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { fadeUp, stagger } from "../../lib/motion";

type Props = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: Props) {
  const reduce = useReducedMotion();

  return (
    <section id={id} className={`scroll-mt-20 py-14 md:py-18 ${className}`}>
      <motion.div
        className="mx-auto w-full max-w-5xl px-5"
        initial={reduce ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={reduce ? undefined : stagger}
      >
        <motion.header variants={reduce ? undefined : fadeUp} className="mb-7 max-w-2xl">
          {eyebrow && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-3xl font-bold tracking-tight text-fg md:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-base leading-relaxed text-muted md:text-lg">
              {description}
            </p>
          )}
        </motion.header>
        <motion.div variants={reduce ? undefined : fadeUp}>{children}</motion.div>
      </motion.div>
    </section>
  );
}
