"use client";

import React from "react";
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-100 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-[#14532D] via-[#166534] to-[#0F172A] rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-14 text-center text-white shadow-2xl relative overflow-hidden border border-emerald-500/30">
          {/* Fundo decorativo sutil */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-200 text-xs sm:text-sm font-semibold">
              <Sparkles className="w-4 h-4 text-[#FACC15]" />
              <span>Acesso Imediato e 100% Gratuito</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              <span className="text-amber-400 mr-2 inline-block">🔥</span>
              {siteConfig.finalCta.headline.replace("🔥 ", "")}
            </h2>

            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal">
              {siteConfig.finalCta.description}
            </p>

            {/* CTA Button */}
            <div className="pt-4 flex flex-col items-center gap-3">
              <Button
                href={siteConfig.whatsappGroupUrl}
                isWhatsAppCta
                ctaId="final_cta"
                ctaSection="final_cta"
                variant="accent"
                size="xl"
                className="w-full sm:w-auto px-10 shadow-2xl shadow-yellow-500/20 text-lg group flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6 fill-slate-900 group-hover:scale-110 transition-transform" />
                <span>{siteConfig.finalCta.ctaText}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="flex items-center gap-2 text-xs text-emerald-200/80 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                <span>Link oficial do WhatsApp • Entrada livre e sem cadastros complexos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
