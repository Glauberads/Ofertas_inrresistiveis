"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Categories } from "@/components/sections/Categories";
import { Benefits } from "@/components/sections/Benefits";
import { TrustTransparency } from "@/components/sections/TrustTransparency";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { CookieConsent } from "@/components/analytics/CookieConsent";
import { PrivacyModal } from "@/components/legal/PrivacyModal";
import { trackEvent } from "@/lib/analytics";

export default function HomePage() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  useEffect(() => {
    // Dispara ViewContent da proposta de valor
    trackEvent("ViewContent", {
      section: "landing_home",
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-emerald-200 selection:text-emerald-950">
      {/* Header Fixo */}
      <Header />

      {/* Conteúdo Principal */}
      <main id="main-content" className="flex-1">
        <Hero />
        <HowItWorks />
        <Categories />
        <Benefits />
        <TrustTransparency onOpenPrivacyModal={() => setPrivacyModalOpen(true)} />
        <Faq />
        <FinalCta />
      </main>

      {/* Rodapé com conformidade LGPD */}
      <Footer onOpenPrivacyModal={() => setPrivacyModalOpen(true)} />

      {/* Botão Flutuante de WhatsApp (Mobile-friendly) */}
      <FloatingWhatsApp />

      {/* Gerenciamento de Consentimento de Cookies (LGPD) */}
      <CookieConsent onOpenPrivacyModal={() => setPrivacyModalOpen(true)} />

      {/* Modal de Política de Privacidade e Termos */}
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}
