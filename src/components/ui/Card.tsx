import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export function Card({
  className,
  hoverEffect = true,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-6 md:p-8 transition-all duration-300 shadow-card",
        hoverEffect && "hover:border-emerald-300 hover:shadow-cardHover hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
