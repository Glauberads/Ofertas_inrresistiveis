import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #14532D 0%, #0F172A 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px 40px",
          textAlign: "center",
          color: "white",
        }}
      >
        <div
          style={{
            background: "rgba(22, 163, 74, 0.25)",
            border: "2px solid #16A34A",
            padding: "8px 24px",
            borderRadius: 50,
            fontSize: 22,
            fontWeight: 700,
            color: "#86EFAC",
            marginBottom: 28,
            display: "flex",
            alignItems: "center",
          }}
        >
          🟢 COMUNIDADE GRATUITA DE ACHADINHOS NO WHATSAPP
        </div>

        <div
          style={{
            fontSize: 54,
            fontWeight: 900,
            lineHeight: 1.2,
            maxWidth: 1000,
            marginBottom: 24,
            letterSpacing: "-0.02em",
          }}
        >
          {siteConfig.name}
        </div>

        <div
          style={{
            fontSize: 26,
            color: "#CBD5E1",
            maxWidth: 800,
            lineHeight: 1.4,
            marginBottom: 40,
          }}
        >
          Receba cupons de desconto, promoções relâmpago e achadinhos selecionados diretamente no seu celular.
        </div>

        <div
          style={{
            background: "#FACC15",
            color: "#0F172A",
            padding: "16px 36px",
            borderRadius: 16,
            fontSize: 24,
            fontWeight: 800,
            display: "flex",
            alignItems: "center",
          }}
        >
          PARTICIPAR GRATUITAMENTE NO WHATSAPP
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
