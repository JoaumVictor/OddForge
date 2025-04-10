import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim();
  const realIp = ip && ip !== "::1" ? ip : "200.110.203.90";

  try {
    const response = await fetch(`https://ipapi.co/${realIp}/json/`);
    const data = await response.json();

    const country = data?.country_name || "Unknown";
    const isInBrazil = country.toLowerCase() === "brazil";

    return NextResponse.json({
      ip: realIp,
      country,
      isInBrazil,
      city: data.city,
      region: data.region,
      latitude: data.latitude,
      longitude: data.longitude,
      postal: data.postal,
      timezone: data.timezone,
      org: data.org,
    });
  } catch (error) {
    console.error("Erro ao buscar IP:", error);
    return NextResponse.json(
      { error: "Erro ao buscar localização do IP" },
      { status: 500 }
    );
  }
}
