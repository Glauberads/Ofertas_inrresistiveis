"use client";

import React from "react";
import {
  Clock,
  Layers,
  Ticket,
  BadgePercent,
  LayoutGrid,
  Check,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export function Benefits() {
  const icons = [
    <Clock key="0" className="w-6 h-6 text-[#16A34A]" />,
    <Layers key="1" className="w-6 h-6 text-emerald-700" />,
    <Ticket key="2" className="w-6 h-6 text-amber-500" />,
    <BadgePercent key="3" className="w-6 h-6 text-[#16A34A]" />,
    <LayoutGrid key="4" className="w-6 h-6 text-emerald-600" />,
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Lado Esquerdo: Lista de Vantagens */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs sm:text-sm font-bold text-[#16A34A] tracking-wider uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
                Vantagens Exclusivas
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mt-3 mb-4">
                {siteConfig.benefits.title}
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                {siteConfig.benefits.subtitle}
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {siteConfig.benefits.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-emerald-50/40 hover:border-emerald-200 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-xs">
                    {icons[idx]}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Box de Conversão com 2º CTA */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full bg-gradient-to-br from-[#14532D] to-[#0F172A] text-white p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col justify-between">
              {/* Glow decorativo de fundo */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#FACC15]" />
                </div>

                <div>
                  <span className="text-xs font-bold text-emerald-300 tracking-wider uppercase">
                    Comunidade Ativa
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-1 mb-3 leading-tight">
                    Receba as promoções antes de esgotar
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Muitos cupons e estoques promocionais duram poucas horas. Participe e receba alertas imediatos.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2 text-xs text-emerald-200">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Nenhuma taxa cobrada</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-emerald-200">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Sem spam — apenas promoções relevantes</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-emerald-200">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Saia do grupo quando desejar</span>
                  </div>
                </div>

                {/* 2º CTA da Página */}
                <div className="pt-4">
                  <Button
                    href={siteConfig.whatsappGroupUrl}
                    isWhatsAppCta
                    ctaId="benefits_cta"
                    ctaSection="benefits"
                    variant="accent"
                    size="lg"
                    fullWidth
                    className="group flex items-center justify-center gap-2 text-base font-extrabold"
                  >
                    <span>🚀 {siteConfig.benefits.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
