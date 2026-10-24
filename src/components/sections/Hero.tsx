"use client";

import React from "react";
import { CheckCircle2, ShieldAlert, ArrowRight, MessageCircle, Sparkles, Tag, Flame, BellRing } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/60">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-100/40 via-emerald-50/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Coluna de Texto & Conversão (Desktop col 7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Badge Superior */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-bold tracking-wide mb-5 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse" />
              <span>{siteConfig.hero.badge}</span>
            </div>

            {/* Headline Principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold text-[#0F172A] tracking-tight leading-[1.15] mb-5">
              <span className="text-amber-500 mr-2 inline-block">🔥</span>
              As melhores oportunidades de economia podem estar a um clique de você!
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-6 font-normal">
              {siteConfig.hero.subheadline}
            </p>

            {/* Benefícios Rápidos */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 w-full mb-8" aria-label="Principais benefícios">
              {siteConfig.hero.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-slate-700 text-sm sm:text-base font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 fill-emerald-600 text-white" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA Principal */}
            <div className="w-full sm:w-auto flex flex-col items-start gap-3">
              <Button
                href={siteConfig.whatsappGroupUrl}
                isWhatsAppCta
                ctaId="hero_cta"
                ctaSection="hero"
                variant="primary"
                size="xl"
                className="w-full sm:w-auto px-8 shadow-premium group flex items-center justify-center gap-3 text-lg"
              >
                <MessageCircle className="w-6 h-6 fill-white shrink-0 group-hover:scale-110 transition-transform" />
                <span>{siteConfig.hero.ctaText}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Microcopy de Transparência e LGPD */}
              <div className="flex items-start gap-2 text-xs text-slate-500 max-w-lg pt-1">
                <ShieldAlert className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <p className="leading-tight">
                  <span className="font-semibold text-slate-700">Participação gratuita.</span> Ao entrar, você poderá visualizar mensagens e números de outros participantes do grupo.
                </p>
              </div>
            </div>
          </div>

          {/* Coluna Visual: Mockup de Oferta em Tempo Real (Desktop col 5) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-black px-3.5 py-1.5 rounded-full shadow-lg transform rotate-3 z-20 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 fill-slate-950" />
                Achadinho do Dia
              </div>

              {/* Mockup do Card de Oferta no WhatsApp */}
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl p-5 sm:p-6 relative z-10 space-y-4">
                {/* Header da Mensagem */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#16A34A] to-[#14532D] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                      <Sparkles className="w-5 h-5 text-amber-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm leading-tight flex items-center gap-1.5">
                        OFERTAS IRRESISTÍVEIS
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      </h4>
                      <p className="text-[11px] text-slate-400">Grupo Oficial • Notificação</p>
                    </div>
                  </div>
                  <BellRing className="w-4 h-4 text-emerald-600" />
                </div>

                {/* Exemplo Ilustrativo de Alerta de Desconto */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                      Desconto de 48% OFF
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Tag className="w-3 h-3 text-slate-400" /> Cupom Ativo
                    </span>
                  </div>

                  <div>
                    <p className="font-bold text-slate-900 text-sm leading-snug">
                      Fritadeira Sem Óleo Air Fryer Digital 4.5L
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Menor preço dos últimos 60 dias com frete promocional.
                    </p>
                  </div>

                  <div className="flex items-baseline gap-2 pt-1">
                    <span className="text-xs line-through text-slate-400">De R$ 389,90</span>
                    <span className="text-xl font-extrabold text-[#16A34A]">Por R$ 199,90</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium flex items-center gap-2">
                    <span className="font-mono font-bold bg-amber-200/80 px-2 py-0.5 rounded text-[11px]">
                      CUPOM: ECONOMIZE10
                    </span>
                    <span className="text-[11px] text-amber-800">Aplicado no checkout</span>
                  </div>
                </div>

                {/* Micro aviso de transparência dentro do mockup */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <span>✅ Link verificado e seguro</span>
                  <span>⚡ Oportunidade por tempo limitado</span>
                </div>
              </div>

              {/* Card Flutuante Secundário decorativo */}
              <div className="hidden sm:flex items-center gap-3 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-xl px-4 py-3 absolute -bottom-5 -left-5 z-20">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm">
                  🎟️
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Cupons testados</p>
                  <p className="text-[10px] text-slate-500">Sem pegadinhas ou links falsos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
