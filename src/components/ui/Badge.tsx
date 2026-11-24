import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "violet" | "cyan" | "emerald" | "outline" | "muted";
  size?: "sm" | "md";
  dot?: boolean;
}

export function Badge({
  children,
  className,
  variant = "default",
  size = "md",
  dot = false,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-white/[0.06] text-slate-200 border-white/[0.08]",
    violet: "bg-violet-500/10 text-violet-300 border-violet-500/25",
    cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/25",
    emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25",
    outline: "bg-transparent text-slate-300 border-white/[0.12]",
    muted: "bg-slate-900/60 text-slate-400 border-slate-800",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5",
    md: "text-xs md:text-sm px-3 py-1",
  };

  const dotColors = {
    default: "bg-slate-400",
    violet: "bg-violet-400",
    cyan: "bg-cyan-400",
    emerald: "bg-emerald-400 animate-pulse",
    outline: "bg-slate-300",
    muted: "bg-slate-500",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium rounded-full border transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full", dotColors[variant])}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
