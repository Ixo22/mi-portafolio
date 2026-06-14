"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import type { Content } from "@/lib/content";

type Status = "idle" | "sending" | "success" | "error";
type FieldErrors = { name?: string; email?: string; message?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm({ t }: { t: Content["form"] }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  function validate(): FieldErrors {
    const e: FieldErrors = {};
    if (name.trim().length < 2) e.name = t.errName;
    if (!EMAIL_RE.test(email.trim())) e.email = t.errEmail;
    if (message.trim().length < 10) e.message = t.errMessage;
    return e;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, company }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  // Clear a field's error as soon as the user edits it.
  const clear = (field: keyof FieldErrors) =>
    setErrors((e) => (e[field] ? { ...e, [field]: undefined } : e));

  const base =
    "w-full bg-transparent border px-4 py-3 text-sm text-[#e8e4dd] placeholder:text-faint focus:outline-none transition-colors";
  const fieldClass = (hasError: boolean) =>
    `${base} ${
      hasError
        ? "border-red-400/70 focus:border-red-400"
        : "border-line focus:border-accent"
    }`;

  const ErrorMsg = ({ id, msg }: { id: string; msg?: string }) =>
    msg ? (
      <p id={id} className="text-xs text-red-400/90 mt-1.5">
        {msg}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="sr-only">
            {t.name}
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              clear("name");
            }}
            placeholder={t.namePlaceholder}
            className={fieldClass(!!errors.name)}
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "err-name" : undefined}
          />
          <ErrorMsg id="err-name" msg={errors.name} />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            {t.email}
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              clear("email");
            }}
            placeholder={t.emailPlaceholder}
            className={fieldClass(!!errors.email)}
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "err-email" : undefined}
          />
          <ErrorMsg id="err-email" msg={errors.email} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          {t.message}
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            clear("message");
          }}
          placeholder={t.messagePlaceholder}
          rows={5}
          className={`${fieldClass(!!errors.message)} resize-y`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "err-message" : undefined}
        />
        <ErrorMsg id="err-message" msg={errors.message} />
      </div>

      {/* Honeypot — hidden from real users */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center gap-2 bg-[#e8e4dd] text-[#0c0b0a] px-7 py-3.5 text-sm font-medium hover:bg-accent transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <Send size={15} />
          {status === "sending" ? t.sending : t.submit}
        </button>

        {status === "success" && (
          <p className="text-sm text-accent">{t.success}</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-400/90">{t.error}</p>
        )}
      </div>
    </form>
  );
}
