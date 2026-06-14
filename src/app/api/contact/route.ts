import { Resend } from "resend";

const EMAIL = "aga.alberto.st@gmail.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  // honeypot — bots fill it, humans don't
  company?: unknown;
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const honeypot = typeof body.company === "string" ? body.company.trim() : "";

  // Silently accept bot submissions (honeypot filled) without sending.
  if (honeypot) {
    return Response.json({ ok: true });
  }

  if (
    name.length < 2 ||
    name.length > 100 ||
    !EMAIL_RE.test(email) ||
    message.length < 10 ||
    message.length > 5000
  ) {
    return Response.json({ error: "validation_failed" }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return Response.json({ error: "not_configured" }, { status: 500 });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      // Until you verify your own domain in Resend, keep this sender.
      from: "Portfolio <onboarding@resend.dev>",
      to: EMAIL,
      replyTo: email,
      subject: `Nuevo mensaje de ${name} — Portfolio`,
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "send_failed" }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Unexpected error sending email:", err);
    return Response.json({ error: "send_failed" }, { status: 502 });
  }
}
