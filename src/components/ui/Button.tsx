import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants = {
  primary:
    "bg-accent text-ink font-semibold hover:bg-accent-dim shadow-[0_0_0_1px_color-mix(in_srgb,#2dd4bf_40%,transparent)]",
  secondary:
    "bg-surface-2 text-fg border border-border hover:border-accent/50 hover:text-accent",
  ghost: "text-muted hover:text-fg bg-transparent",
};

export function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "", ...rest } = props;
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...linkRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    return (
      <a href={href} className={classes} {...linkRest}>
        {children}
      </a>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      {...buttonRest}
      type={buttonRest.type ?? "button"}
      className={classes}
    >
      {children}
    </button>
  );
}
