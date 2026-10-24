"use client";

import React, { useEffect } from "react";
import { X, ShieldCheck, AlertCircle, Info, Lock } from "lucide-react";
import { siteConfig } from "@/config/site";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-privacy-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 id="modal-privacy-title" className="text-lg font-bold text-slate-900 leading-tight">
                Privacidade, LGPD e Transparência
              </h2>
              <p className="text-xs text-slate-500">
                {siteConfig.name} — Atualizado para conformidade com a LGPD
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-slate-200/70 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label="Fechar política de privacidade"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-600 leading-relaxed">
          {/* Identificação do Controlador */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Info className="w-4 h-4 text-emerald-600" />
              1. Identificação do Controlador
            </h3>
            <p className="text-xs text-slate-600 space-y-1">
              <span><strong>Nome do Projeto:</strong> {siteConfig.company.name}</span><br />
              <span><strong>Razão Social:</strong> {siteConfig.company.legalName}</span><br />
              <span><strong>CNPJ:</strong> {siteConfig.company.cnpj}</span><br />
              <span><strong>Contato para Privacidade / DPO:</strong> {siteConfig.company.email}</span><br />
              <span><strong>Localidade:</strong> {siteConfig.company.location}</span>
            </p>
          </div>

          {/* Aviso Específico do WhatsApp */}
          <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-amber-900">
            <h3 className="font-bold mb-1.5 flex items-center gap-2 text-amber-950">
              <AlertCircle className="w-4 h-4 text-amber-700" />
              2. Aviso Importante sobre Grupos de WhatsApp
            </h3>
            <p className="text-xs leading-relaxed text-amber-900">
              A comunidade do {siteConfig.name} funciona através de um grupo no aplicativo WhatsApp (operado pela Meta Platforms Inc.). 
              Ao ingressar voluntariamente no grupo, você declara ciência de que <strong>seu número de telefone e foto de perfil do WhatsApp poderão ficar visíveis para outros membros participantes</strong>, conforme a arquitetura padrão e as políticas de privacidade da própria plataforma WhatsApp. Você pode sair do grupo a qualquer momento diretamente no app.
            </p>
          </div>

          {/* Coleta de Dados e Finalidade */}
          <div>
            <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-600" />
              3. Dados Coletados nesta Landing Page
            </h3>
            <p className="mb-2">
              Nesta página, <strong>não solicitamos nem armazenamos formulários de cadastro com dados pessoais diretos</strong> (como nome completo, CPF ou endereço residencial).
            </p>
            <p>
              Podemos processar dados técnicos de navegação de forma anonimizada ou agregada, incluindo:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-slate-600">
              <li>Endereço IP mascarado e informações de dispositivo/navegador.</li>
              <li>Parâmetros de origem de tráfego de campanhas publicitárias (UTMs e fbclid) para atribuição estatística.</li>
              <li>Eventos de interação com a página (ex.: visualização de seções e cliques no botão de redirecionamento para o WhatsApp).</li>
            </ul>
          </div>

          {/* Afiliados e Transparência Comercial */}
          <div>
            <h3 className="font-bold text-slate-900 mb-2">
              4. Transparência Comercial e Links de Afiliados
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              O projeto {siteConfig.name} é mantido por meio de programas de afiliados e eventuais ações patrocinadas identificadas. Ao clicar em ofertas divulgadas e realizar compras nos sites parceiros (Amazon, Mercado Livre, Shopee, Magalu e outras redes varejistas), nós poderemos receber uma pequena comissão sem qualquer acréscimo no valor final pago pelo consumidor. 
              Não nos responsabilizamos pela entrega, garantia, disponibilidade de estoque ou alteração de preços praticados pelas lojas terceiras.
            </p>
          </div>

          {/* Cookies e Consentimento */}
          <div>
            <h3 className="font-bold text-slate-900 mb-2">
              5. Gerenciamento de Cookies e Rastreamento
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Utilizamos cookies essenciais para o funcionamento básico e cookies analíticos/marketing para mensurar o desempenho de anúncios no Meta Ads. O rastreamento de marketing somente é executado mediante seu consentimento prévio, respeitando integralmente as diretrizes da LGPD (Lei nº 13.709/2018). Você pode gerenciar ou revogar suas preferências a qualquer momento no rodapé desta página.
            </p>
          </div>

          {/* Direitos do Titular */}
          <div>
            <h3 className="font-bold text-slate-900 mb-2">
              6. Seus Direitos (Art. 18 da LGPD)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Você tem o direito de solicitar a confirmação da existência de tratamento, acesso aos dados, correção de dados incompletos ou a revogação do consentimento concedido. Para exercer qualquer um desses direitos, entre em contato através do e-mail: <strong>{siteConfig.company.email}</strong>.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors cursor-pointer"
          >
            Entendi e concordo
          </button>
        </div>
      </div>
    </div>
  );
}
