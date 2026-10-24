"use client";

import React from "react";
import { Sparkles, Shield, Info, Lock } from "lucide-react";
import { siteConfig } from "@/config/site";

interface FooterProps {
  onOpenPrivacyModal: () => void;
}

export function Footer({ onOpenPrivacyModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleOpenCookiePreferences = () => {
    window.dispatchEvent(new CustomEvent("open_cookie_preferences"));
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 md:pb-16 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#16A34A] to-[#14532D] text-white flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#FACC15]" />
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight">
                OFERTAS <span className="text-[#16A34A]">IRRESISTÍVEIS</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Sua curadoria diária de achadinhos, promoções, cupons e oportunidades reais de economia diretamente no WhatsApp.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Participação 100% gratuita na comunidade</span>
            </div>
          </div>

          {/* Quick Legal Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Conformidade & LGPD
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacyModal}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacyModal}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <Info className="w-3.5 h-3.5 text-emerald-400" />
                  Aviso Legal de Afiliados
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleOpenCookiePreferences}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  Gerenciar Cookies
                </button>
              </li>
            </ul>
          </div>

          {/* Contact / Controller */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Controlador & Contato
            </h4>
            <div className="text-xs text-slate-400 space-y-1.5 leading-relaxed bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60">
              <p>
                <strong className="text-slate-200">Projeto:</strong> {siteConfig.company.name}
              </p>
              <p>
                <strong className="text-slate-200">Razão Social:</strong> {siteConfig.company.legalName}
              </p>
              <p>
                <strong className="text-slate-200">CNPJ:</strong> {siteConfig.company.cnpj}
              </p>
              <p>
                <strong className="text-slate-200">Contato:</strong> {siteConfig.company.email}
              </p>
              <p>
                <strong className="text-slate-200">Localidade:</strong> {siteConfig.company.location}
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimers & Copyright */}
        <div className="pt-8 space-y-4 text-xs text-slate-500 leading-relaxed">
          <p>
            <strong>Aviso de Isenção de Responsabilidade e Afiliados:</strong> O {siteConfig.name} é um canal de curadoria e divulgação de ofertas, cupons e oportunidades de compras online. Não somos uma loja virtual e não realizamos venda direta nem intermediação de pagamentos. As transações são concluídas nos sites oficiais dos respectivos lojistas. Algumas ofertas podem conter links de afiliados pelos quais podemos receber uma comissão sem qualquer custo adicional para o comprador. Preços, prazos e estoques podem sofrer alterações a qualquer momento pelas lojas participantes.
          </p>
          <p>
            <strong>Aviso sobre o WhatsApp:</strong> O WhatsApp® é uma marca registrada da Meta Platforms, Inc. Este projeto não possui vínculo societário, endosso ou afiliação oficial com a Meta Platforms, Inc. A participação no grupo está sujeita aos Termos de Serviço do WhatsApp. Ao entrar, seu perfil e número estarão visíveis aos participantes do grupo.
          </p>
          <div className="pt-4 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-xs">
            <p>© {currentYear} {siteConfig.name}. Todos os direitos reservados.</p>
            <p className="text-[11px]">Desenvolvido com foco em performance, acessibilidade e CRO.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
