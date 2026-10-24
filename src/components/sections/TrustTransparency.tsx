"use client";

import React from "react";
import { ShieldCheck, HelpCircle, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/Card";

interface TrustTransparencyProps {
  onOpenPrivacyModal: () => void;
}

export function TrustTransparency({ onOpenPrivacyModal }: TrustTransparencyProps) {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs sm:text-sm font-bold tracking-wide mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Ética e Responsabilidade</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            {siteConfig.transparency.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {siteConfig.transparency.subtitle}
          </p>
        </div>

        {/* Grid de Pontos de Transparência */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.transparency.points.map((point, idx) => (
            <Card
              key={idx}
              className="bg-white border-slate-200/80 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-sm mb-4 border border-emerald-100">
                  {idx + 1}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            </Card>
          ))}

          {/* Card adicional convidando a ler a política completa */}
          <div className="bg-gradient-to-br from-emerald-50 to-slate-50 rounded-2xl sm:rounded-3xl border border-emerald-200 p-6 flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm mb-4">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                Dúvidas sobre dados e privacidade?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Nossa atuação segue rigorosamente as diretrizes da LGPD (Lei nº 13.709/2018). Consulte nossos termos a qualquer momento.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-emerald-200/60">
              <button
                type="button"
                onClick={onOpenPrivacyModal}
                className="text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer"
              >
                <span>Ver Política de Privacidade & Termos</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
