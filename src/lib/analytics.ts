import { CookiePreferences, TrackEventName, UTMParams } from "@/types";
import { siteConfig } from "@/config/site";

const CONSENT_STORAGE_KEY = "ofertas_consent_preferences_v1";
const UTMS_STORAGE_KEY = "ofertas_cached_utms_v1";

// Cache para evitar disparos duplicados em um curto intervalo
const dispatchedEvents = new Set<string>();

/**
 * Obtém as preferências de consentimento salvas
 */
export function getStoredConsent(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

/**
 * Salva as preferências de consentimento
 */
export function saveConsent(preferences: CookiePreferences): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(preferences));
    window.dispatchEvent(new CustomEvent("consent_updated", { detail: preferences }));

    // Atualiza estado do Meta Pixel se consentimento foi concedido ou revogado
    if (typeof (window as unknown as { fbq?: Function }).fbq === "function") {
      if (preferences.marketing) {
        (window as unknown as { fbq: Function }).fbq("consent", "grant");
      } else {
        (window as unknown as { fbq: Function }).fbq("consent", "revoke");
      }
    }
  } catch (err) {
    console.error("Falha ao salvar consentimento:", err);
  }
}

/**
 * Captura e persiste UTMs e fbclid da URL atual
 */
export function captureUTMs(): UTMParams {
  if (typeof window === "undefined") return {};

  try {
    const searchParams = new URLSearchParams(window.location.search);
    const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"];
    const foundParams: UTMParams = {};

    utmKeys.forEach((key) => {
      const val = searchParams.get(key);
      if (val) {
        foundParams[key] = val;
      }
    });

    if (Object.keys(foundParams).length > 0) {
      sessionStorage.setItem(UTMS_STORAGE_KEY, JSON.stringify(foundParams));
      return foundParams;
    }

    const cached = sessionStorage.getItem(UTMS_STORAGE_KEY);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch {
    // Silencia erros em ambientes restritos de armazenamento
  }

  return {};
}

/**
 * Gera um ID único de evento para desduplicação (Pixel e CAPI)
 */
export function generateEventId(): string {
  return `${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Disparo centralizado de eventos do Meta Ads / Analytics
 */
export async function trackEvent(
  eventName: TrackEventName,
  params: {
    ctaId?: string;
    ctaText?: string;
    section?: string;
    destinationUrl?: string;
    customData?: Record<string, unknown>;
  } = {}
) {
  if (typeof window === "undefined") return;

  const consent = getStoredConsent();
  const hasMarketingConsent = consent?.marketing ?? false;

  const utms = captureUTMs();
  const eventId = generateEventId();
  const deduplicationKey = `${eventName}_${params.ctaId || "main"}_${Math.floor(Date.now() / 2000)}`;

  if (dispatchedEvents.has(deduplicationKey)) {
    return;
  }
  dispatchedEvents.add(deduplicationKey);

  const eventPayload = {
    content_name: params.section || siteConfig.name,
    cta_id: params.ctaId,
    cta_text: params.ctaText,
    destination_url: params.destinationUrl,
    page_url: window.location.href,
    ...utms,
    ...params.customData,
  };

  // 1. Meta Pixel no Navegador (apenas com consentimento e se Pixel ID estiver configurado)
  const win = window as unknown as { fbq?: Function };
  if (hasMarketingConsent && typeof win.fbq === "function" && siteConfig.metaPixelId) {
    try {
      if (eventName === "PageView") {
        win.fbq("track", "PageView", {}, { eventID: eventId });
      } else if (eventName === "ViewContent") {
        win.fbq("track", "ViewContent", eventPayload, { eventID: eventId });
      } else if (eventName === "JoinGroupClick") {
        // Disparado como Custom Event "JoinGroupClick" (não falso Lead)
        win.fbq("trackCustom", "JoinGroupClick", eventPayload, { eventID: eventId });
      } else {
        win.fbq("trackCustom", eventName, eventPayload, { eventID: eventId });
      }
    } catch (e) {
      console.warn("Aviso ao disparar Meta Pixel:", e);
    }
  }

  // 2. Disparo Assíncrono para a Ponte Server-Side CAPI (se configurado no backend)
  // Somente dispara se houver consentimento
  if (hasMarketingConsent) {
    try {
      fetch("/api/meta-capi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventName,
          eventId,
          eventPayload,
          url: window.location.href,
        }),
      }).catch(() => {
        // Falhas na CAPI não devem interromper o fluxo do usuário
      });
    } catch {
      // Falha silenciosa
    }
  }
}

/**
 * Prepara o link seguro do WhatsApp com rastreio de origem em parâmetro
 */
export function getWhatsAppJoinUrl(sourceId: string): string {
  const baseUrl = siteConfig.whatsappGroupUrl;
  return baseUrl;
}
