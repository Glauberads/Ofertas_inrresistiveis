"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { trackEvent, getWhatsAppJoinUrl } from "@/lib/analytics";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  isWhatsAppCta?: boolean;
  ctaId?: string;
  ctaSection?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "lg",
      href,
      isWhatsAppCta = false,
      ctaId = "cta_button",
      ctaSection = "general",
      fullWidth = false,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-bold tracking-tight rounded-2xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30 active:scale-[0.98] select-none text-center cursor-pointer";

    const variants = {
      primary:
        "bg-[#16A34A] text-white hover:bg-[#15803D] shadow-lg shadow-emerald-700/20 hover:shadow-xl hover:shadow-emerald-700/30 border border-emerald-500/20",
      secondary:
        "bg-[#14532D] text-white hover:bg-[#0f3d21] shadow-md shadow-emerald-950/20 border border-emerald-800",
      accent:
        "bg-[#FACC15] text-[#0F172A] hover:bg-[#EAB308] shadow-lg shadow-yellow-500/25 border border-yellow-300 font-extrabold",
      outline:
        "bg-white/80 hover:bg-white text-slate-800 border-2 border-slate-200 hover:border-slate-300 shadow-sm",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-5 py-2.5 text-base",
      lg: "px-6 py-3.5 text-base md:text-lg min-h-[52px]",
      xl: "px-8 py-4 text-lg md:text-xl min-h-[60px] font-extrabold tracking-wide",
    };

    const combinedClasses = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      fullWidth && "w-full",
      className
    );

    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      if (isWhatsAppCta) {
        trackEvent("JoinGroupClick", {
          ctaId,
          section: ctaSection,
          ctaText: typeof children === "string" ? children : ctaId,
          destinationUrl: href || getWhatsAppJoinUrl(ctaId),
        });
      }

      if (onClick) {
        onClick(e as React.MouseEvent<HTMLButtonElement>);
      }
    };

    if (href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          onClick={handleClick}
          aria-label={typeof children === "string" ? children : undefined}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={combinedClasses}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
