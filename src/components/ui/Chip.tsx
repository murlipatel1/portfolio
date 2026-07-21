import type { ReactNode } from "react";

type ChipProps = {
  children: ReactNode;
  icon?: string;
  iconAlt?: string;
  invertIcon?: boolean;
};

export function Chip({
  children,
  icon,
  iconAlt = "",
  invertIcon = false,
}: ChipProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-2.5 py-1.5 text-xs font-medium text-muted">
      {icon && (
        <img
          src={icon}
          alt={iconAlt}
          width={16}
          height={16}
          className={`h-4 w-4 object-contain ${invertIcon ? "invert" : ""}`}
          loading="lazy"
        />
      )}
      {children}
    </span>
  );
}
