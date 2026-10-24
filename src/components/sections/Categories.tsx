"use client";

import React from "react";
import {
  Smartphone,
  Home,
  Sparkles,
  Gamepad2,
  ShoppingBag,
  TicketPercent,
  CheckCircle,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/Card";

export function Categories() {
  const iconMap: Record<string, React.ReactNode> = {
    Smartphone: <Smartphone className="w-6 h-6 text-blue-600" />,
    Home: <Home className="w-6 h-6 text-emerald-600" />,
    Sparkles: <Sparkles className="w-6 h-6 text-rose-500" />,
    Gamepad2: <Gamepad2 className="w-6 h-6 text-purple-600" />,
    ShoppingBag: <ShoppingBag className="w-6 h-6 text-amber-600" />,
    TicketPercent: <TicketPercent className="w-6 h-6 text-[#16A34A]" />,
  };

  const badgeBackgrounds: Record<string, string> = {
    Smartphone: "bg-blue-50 border-blue-100",
    Home: "bg-emerald-50 border-emerald-100",
    Sparkles: "bg-rose-50 border-rose-100",
    Gamepad2: "bg-purple-50 border-purple-100",
    ShoppingBag: "bg-amber-50 border-amber-100",
    TicketPercent: "bg-emerald-50 border-emerald-100",
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold text-[#16A34A] tracking-wider uppercase bg-emerald-100/60 px-3 py-1 rounded-full border border-emerald-200/60">
            Categorias de Ofertas
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mt-3 mb-4">
            {siteConfig.categories.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {siteConfig.categories.subtitle}
          </p>
        </div>

        {/* Grid de 6 Categorias */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.categories.items.map((cat) => (
            <Card
              key={cat.id}
              className="bg-white border-slate-200/90 hover:border-emerald-300 p-6 flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border ${
                    badgeBackgrounds[cat.icon] || "bg-emerald-50 border-emerald-100"
                  }`}
                >
                  {iconMap[cat.icon]}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {cat.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Disponível no grupo oficial</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Nota informativa de centralização no grupo único */}
        <div className="mt-10 p-4 rounded-2xl bg-white border border-slate-200 text-center max-w-xl mx-auto text-xs text-slate-500">
          💡 <strong>Praticidade máxima:</strong> Você não precisa entrar em dezenas de grupos diferentes. Toda a nossa seleção de produtos e cupons é concentrada no mesmo grupo oficial.
        </div>
      </div>
    </section>
  );
}
