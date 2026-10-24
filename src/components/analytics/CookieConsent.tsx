"use client";

import React, { useState, useEffect } from "react";
import { Cookie, Shield, Check, Settings2 } from "lucide-react";
import { getStoredConsent, saveConsent } from "@/lib/analytics";
import { CookiePreferences } from "@/types";

interface CookieConsentProps {
  onOpenPrivacyModal: () => void;
}

export function CookieConsent({ onOpenPrivacyModal }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(true);
  const [marketingChecked, setMarketingChecked] = useState(true);

  useEffect(() => {
    const existing = getStoredConsent();
    if (!existing) {
      // Pequeno delay para não sobrecarregar a pintura inicial
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  // Permite que componentes externos (como o rodapé) reabram o banner de preferências
  useEffect(() => {
    const handleReopen = () => {
      const existing = getStoredConsent();
      if (existing) {
        setAnalyticsChecked(existing.analytics);
        setMarketingChecked(existing.marketing);
      }
      setShowPreferences(true);
      setIsVisible(true);
    };

    window.addEventListener("open_cookie_preferences", handleReopen);
    return () => {
      window.removeEventListener("open_cookie_preferences", handleReopen);
    };
  }, []);

  const handleAcceptAll = () => {
    const prefs: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      updatedAt: new Date().toISOString(),
    };
    saveConsent(prefs);
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleAcceptNecessaryOnly = () => {
    const prefs: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      updatedAt: new Date().toISOString(),
    };
    saveConsent(prefs);
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleSaveCustom = () => {
    const prefs: CookiePreferences = {
      necessary: true,
      analytics: analyticsChecked,
      marketing: marketingChecked,
      updatedAt: new Date().toISOString(),
    };
    saveConsent(prefs);
    setIsVisible(false);
    setShowPreferences(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Consentimento de Cookies e Privacidade"
      className="fixed bottom-0 inset-x-0 z-40 p-3 sm:p-5 pointer-events-none"
    >
      <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-2xl p-4 sm:p-6 pointer-events-auto transition-all animate-slide-up">
        {!showPreferences ? (
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                <Cookie className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p className="font-bold text-slate-900 text-sm sm:text-base mb-0.5">
                  Privacidade e Cookies (LGPD)
                </p>
                <p>
                  Utilizamos cookies e identificadores de campanhas para melhorar sua experiência e analisar nosso tráfego em conformidade com a LGPD. Você pode aceitar ou personalizar suas preferências.{" "}
                  <button
                    type="button"
                    onClick={onOpenPrivacyModal}
                    className="text-emerald-700 font-semibold underline underline-offset-2 hover:text-emerald-800"
                  >
                    Ler Política de Privacidade
                  </button>
                  .
                </p>
              </div>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 shrink-0 pt-2 md:pt-0">
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors border border-slate-200 cursor-pointer"
              >
                Opções
              </button>
              <button
                type="button"
                onClick={handleAcceptNecessaryOnly}
                className="px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors border border-slate-200 cursor-pointer"
              >
                Apenas Essenciais
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#16A34A] hover:bg-[#15803D] text-white shadow-md shadow-emerald-700/20 transition-all cursor-pointer"
              >
                Aceitar Todos
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Settings2 className="w-5 h-5 text-emerald-600" />
                <h3 className="font-bold text-slate-900 text-base">
                  Personalizar Preferências de Cookies
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="text-xs text-slate-500 hover:text-slate-800 underline"
              >
                Voltar
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-900 flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-emerald-600" />
                    Essenciais
                  </span>
                  <span className="text-[10px] bg-slate-200 text-slate-700 font-bold px-1.5 py-0.5 rounded">
                    Sempre Ativos
                  </span>
                </div>
                <p className="text-slate-500">
                  Necessários para o funcionamento técnico básico e segurança da página.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-900">Métricas & Analytics</span>
                  <input
                    type="checkbox"
                    checked={analyticsChecked}
                    onChange={(e) => setAnalyticsChecked(e.target.checked)}
                    className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                    id="chk-analytics"
                  />
                </div>
                <p className="text-slate-500">
                  Permite entender métricas de navegação e carregamento.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-900">Anúncios & Meta Ads</span>
                  <input
                    type="checkbox"
                    checked={marketingChecked}
                    onChange={(e) => setMarketingChecked(e.target.checked)}
                    className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                    id="chk-marketing"
                  />
                </div>
                <p className="text-slate-500">
                  Mede a eficácia dos anúncios e atribuição de campanhas sem armazenar dados sensíveis.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={handleAcceptNecessaryOnly}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 border border-slate-200"
              >
                Rejeitar Opcionais
              </button>
              <button
                type="button"
                onClick={handleSaveCustom}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors"
              >
                Salvar Minhas Escolhas
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
