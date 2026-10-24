import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "success" | "accent" | "neutral" | "outline";
  children: React.ReactNode;
}

export function Badge({
  variant = "success",
  className,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    success: "bg-emerald-50 text-emerald-800 border-emerald-200/80",
    accent: "bg-amber-50 text-amber-900 border-amber-200/80",
    neutral: "bg-slate-100 text-slate-800 border-slate-200",
    outline: "bg-transparent text-slate-700 border-slate-300",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold border tracking-wide select-none transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
