"use client";

import { useEffect } from "react";
import Script from "next/script";
import { siteConfig } from "@/config/site";
import { getStoredConsent, trackEvent } from "@/lib/analytics";

declare global {
  interface Window {
    fbq?: any;
    _fbq?: any;
  }
}

export function MetaPixel() {
  const pixelId = siteConfig.metaPixelId;

  useEffect(() => {
    if (!pixelId) return;

    const checkAndTrack = () => {
      const consent = getStoredConsent();
      if (consent?.marketing) {
        // Dispara PageView com consentimento
        trackEvent("PageView");
      }
    };

    // Dispara no mount se já houver consentimento
    checkAndTrack();

    // Ouve atualizações de consentimento no navegador
    const handleConsentChange = () => {
      checkAndTrack();
    };

    window.addEventListener("consent_updated", handleConsentChange);
    return () => {
      window.removeEventListener("consent_updated", handleConsentChange);
    };
  }, [pixelId]);

  // Se não houver Pixel ID real configurado, não injeta nenhum script fictício
  if (!pixelId) {
    return null;
  }

  return (
    <Script
      id="meta-pixel-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${pixelId}');
        `,
      }}
    />
  );
}
