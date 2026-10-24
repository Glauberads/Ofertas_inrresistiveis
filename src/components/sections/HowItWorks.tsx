"use client";

import React from "react";
import { UserPlus2, SearchCheck, ShoppingBag, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/Card";

export function HowItWorks() {
  const icons = [
    <UserPlus2 key="0" className="w-7 h-7 text-[#16A34A]" />,
    <SearchCheck key="1" className="w-7 h-7 text-amber-500" />,
    <ShoppingBag key="2" className="w-7 h-7 text-emerald-700" />,
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold text-[#16A34A] tracking-wider uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
            Passo a Passo
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mt-3 mb-4">
            {siteConfig.howItWorks.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {siteConfig.howItWorks.subtitle}
          </p>
        </div>

        {/* Grid dos 3 Passos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          {siteConfig.howItWorks.steps.map((step, idx) => (
            <Card
              key={idx}
              className="relative flex flex-col justify-between h-full bg-slate-50/60 hover:bg-white border-slate-200/80 hover:border-emerald-300 group transition-all"
            >
              <div>
                {/* Top Badge com Número e Ícone */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-emerald-50 border border-slate-200 group-hover:border-emerald-200 flex items-center justify-center shadow-sm transition-colors">
                    {icons[idx]}
                  </div>
                  <span className="text-3xl sm:text-4xl font-black text-slate-300 group-hover:text-emerald-600/30 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Indicador de fluxo no card */}
              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center text-xs font-semibold text-[#16A34A] gap-1.5">
                <span>Etapa {step.number} de 03</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
