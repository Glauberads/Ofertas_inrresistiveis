"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Exibe apenas após rolagem de 400px para não sobrecarregar a primeira dobra
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    trackEvent("JoinGroupClick", {
      ctaId: "floating_whatsapp",
      section: "floating_button",
      ctaText: "Entrar no Grupo WhatsApp",
      destinationUrl: siteConfig.whatsappGroupUrl,
    });
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-5 z-30 sm:bottom-8 sm:right-8 animate-fade-in">
      <a
        href={siteConfig.whatsappGroupUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="group flex items-center gap-2.5 bg-[#16A34A] hover:bg-[#15803D] text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl shadow-emerald-900/30 border-2 border-white/60 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/50 transition-all hover:scale-105 active:scale-95"
        aria-label="Entrar no grupo oficial do WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FACC15]"></span>
        </span>
        <div className="w-6 h-6 flex items-center justify-center">
          <MessageCircle className="w-6 h-6 fill-white" />
        </div>
        <span className="font-bold text-sm tracking-tight hidden xs:inline-block">
          Entrar no Grupo
        </span>
      </a>
    </div>
  );
}
