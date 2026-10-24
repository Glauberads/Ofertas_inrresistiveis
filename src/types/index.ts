export type ConsentStatus = "granted" | "denied" | "pending";

export interface CookiePreferences {
  necessary: boolean;
  marketing: boolean;
  analytics: boolean;
  updatedAt: string;
}

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  fbclid?: string;
  [key: string]: string | undefined;
}

export type TrackEventName =
  | "PageView"
  | "ViewContent"
  | "JoinGroupClick"
  | "CustomInteraction";

export interface EventPayload {
  ctaId?: string;
  ctaText?: string;
  section?: string;
  destinationUrl?: string;
  customData?: Record<string, unknown>;
}
