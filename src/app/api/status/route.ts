// Proxy de salud de la API de F1nalLap: evita CORS y mide la latencia desde el servidor.
const TARGET = "https://f1nallap-api.onrender.com/actuator/health";

export const dynamic = "force-dynamic";
// Render (plan gratuito) puede tardar ~70 s en despertar.
export const maxDuration = 90;

export async function GET() {
  const start = performance.now();
  let status: "UP" | "DOWN" = "DOWN";
  let httpStatus = 0;

  try {
    const res = await fetch(TARGET, {
      cache: "no-store",
      signal: AbortSignal.timeout(85_000),
      headers: { accept: "application/json" },
    });
    httpStatus = res.status;
    if (res.ok) {
      const body = (await res.json()) as { status?: unknown };
      status = body.status === "UP" ? "UP" : "DOWN";
    }
  } catch {
    status = "DOWN";
  }

  return Response.json(
    {
      status,
      httpStatus,
      latencyMs: Math.round(performance.now() - start),
      checkedAt: new Date().toISOString(),
    },
    { headers: { "Cache-Control": "public, s-maxage=15" } }
  );
}
