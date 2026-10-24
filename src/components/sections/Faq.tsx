"use client";

import React from "react";
import { HelpCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Accordion } from "@/components/ui/Accordion";

export function Faq() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200/60" id="duvidas">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs sm:text-sm font-bold tracking-wide mb-3">
            <HelpCircle className="w-4 h-4 text-[#16A34A]" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Respostas diretas e transparentes sobre a participação na comunidade.
          </p>
        </div>

        {/* Accordion Component */}
        <Accordion items={siteConfig.faq} />
      </div>
    </section>
  );
}
