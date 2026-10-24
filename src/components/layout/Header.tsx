"use client";

import React from "react";
import { Sparkles, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-30 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3">
        {/* Logo / Brand Name */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-xl p-1"
          aria-label={siteConfig.name}
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-br from-[#16A34A] to-[#14532D] text-white flex items-center justify-center shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-[#FACC15]" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight leading-none">
              OFERTAS <span className="text-[#16A34A]">IRRESISTÍVEIS</span>
            </span>
            <span className="text-[10px] sm:text-xs text-slate-500 font-medium tracking-wide">
              Comunidade Oficial de Achadinhos
            </span>
          </div>
        </a>

        {/* Status Pill & Header CTA */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Vagas Abertas Hoje
          </div>

          <Button
            href={siteConfig.whatsappGroupUrl}
            isWhatsAppCta
            ctaId="header_cta"
            ctaSection="header"
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex items-center gap-1.5 shadow-none"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Entrar no Grupo</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
