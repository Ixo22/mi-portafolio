"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import type { Content } from "@/lib/content";

type Status = "idle" | "sending" | "success" | "error" | "invalid";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm({ t }: { t: Content["form"] }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");

  const inputClass =
    "w-full bg-transparent border border-line px-4 py-3 text-sm text-[#e8e4dd] placeholder:text-faint focus:border-accent focus:outline-none transition-colors";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (
      name.trim().length < 2 ||
      !EMAIL_RE.test(email.trim()) ||
      message.trim().length < 10
    ) {
      setStatus("invalid");
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
            onChange={(e) => setName(e.target.value)}
            placeholder={t.namePlaceholder}
            className={inputClass}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            {t.email}
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.emailPlaceholder}
            className={inputClass}
            autoComplete="email"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          {t.message}
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t.messagePlaceholder}
          rows={5}
          className={`${inputClass} resize-y`}
        />
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
        {status === "invalid" && (
          <p className="text-sm text-red-400/90">{t.invalid}</p>
        )}
      </div>
    </form>
  );
}
