import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
    const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
    const testCode = process.env.META_CAPI_TEST_EVENT_CODE;

    // Se o token CAPI ou Pixel ID não estiverem configurados no ambiente, encerra com segurança
    if (!accessToken || !pixelId) {
      return NextResponse.json(
        { status: "skipped", message: "CAPI não configurada (variáveis ausentes)" },
        { status: 200 }
      );
    }

    const body = await req.json();
    const { eventName, eventId, eventPayload, url } = body;

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.ip || "";
    const userAgent = req.headers.get("user-agent") || "";

    // Monta o payload conforme a especificação da Meta Conversions API
    const metaEvent = {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventId,
      event_source_url: url,
      action_source: "website",
      user_data: {
        client_ip_address: ip || undefined,
        client_user_agent: userAgent || undefined,
      },
      custom_data: eventPayload || {},
    };

    const payload: {
      data: unknown[];
      test_event_code?: string;
    } = {
      data: [metaEvent],
    };

    if (testCode) {
      payload.test_event_code = testCode;
    }

    const response = await fetch(
      `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.warn("Meta CAPI erro retornado pela API da Meta:", result);
      return NextResponse.json({ status: "error", details: result }, { status: 400 });
    }

    return NextResponse.json({ status: "success", result });
  } catch (error) {
    console.error("Erro interno no handler CAPI:", error);
    return NextResponse.json({ status: "internal_error" }, { status: 500 });
  }
}
