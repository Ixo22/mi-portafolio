"use client";

import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { getContent } from "@/lib/content";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function H({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-2xl md:text-3xl text-[#f3f0ea] tracking-[-0.01em] mb-5">
      {children}
    </h2>
  );
}

export default function F1nalLapCaseStudy() {
  const { lang } = useLanguage();
  const cs = getContent(lang).caseStudy;
  const s = cs.sections;
  const repo = "https://github.com/Ixo22/F1nalLap";
  const demo = "https://f1nallap.netlify.app/";

  return (
    <div className="relative z-10 font-sans">
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <Reveal>
          <a
            href="/#proyectos"
            className="inline-flex items-center gap-2 text-faint hover:text-[#e8e4dd] text-sm font-mono mb-12 transition-colors"
          >
            <ArrowLeft size={15} /> {cs.back}
          </a>
        </Reveal>

        {/* Header */}
        <Reveal delay={60}>
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">
            {cs.kicker}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-[#f3f0ea] tracking-[-0.02em] mb-4">
            {cs.title}
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-8">{cs.subtitle}</p>
        </Reveal>

        {/* Meta + links */}
        <Reveal delay={120}>
          <div className="grid sm:grid-cols-3 gap-px border-t border-line mb-6">
            {[cs.meta.role, cs.meta.year, cs.meta.stack].map((m) => (
              <div key={m.label} className="py-4">
                <p className="text-faint text-xs font-mono uppercase tracking-wider mb-1">
                  {m.label}
                </p>
                <p className="text-[#e8e4dd] text-sm">{m.value}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 border-b border-line pb-6 mb-14">
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#e8e4dd] link-underline inline-flex items-center gap-1.5"
            >
              {cs.demoLabel} <ArrowUpRight size={15} />
            </a>
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#e8e4dd] link-underline inline-flex items-center gap-1.5"
            >
              <GitHubIcon size={15} /> {cs.repoLabel}
            </a>
          </div>
        </Reveal>

        {/* Body */}
        <div className="space-y-16">
          <Reveal>
            <section>
              <H>{s.overview.heading}</H>
              <div className="space-y-4 text-[#cfc9bf] leading-[1.8]">
                {s.overview.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <H>{s.problem.heading}</H>
              <div className="space-y-4 text-[#cfc9bf] leading-[1.8]">
                {s.problem.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <H>{s.architecture.heading}</H>
              <p className="text-[#cfc9bf] leading-[1.8] mb-5">
                {s.architecture.intro}
              </p>
              <ul className="space-y-3">
                {s.architecture.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-muted leading-relaxed flex gap-3 text-[15px]"
                  >
                    <span className="text-accent mt-2 flex-shrink-0 w-3 h-px bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <H>{s.challenges.heading}</H>
              <p className="text-[#cfc9bf] leading-[1.8] mb-6">
                {s.challenges.intro}
              </p>
              <div className="space-y-px">
                {s.challenges.items.map((item, i) => (
                  <div key={i} className="border-t border-line py-5">
                    <h3 className="font-serif text-lg text-[#f3f0ea] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted leading-relaxed text-[15px]">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-faint text-sm italic mt-6">
                {s.challenges.note}
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <H>{s.outcome.heading}</H>
              <p className="text-[#cfc9bf] leading-[1.8]">{s.outcome.body}</p>
            </section>
          </Reveal>

          <Reveal>
            <div className="border-t border-line pt-10 flex flex-wrap items-center justify-between gap-4">
              <a
                href="/#proyectos"
                className="inline-flex items-center gap-2 text-faint hover:text-[#e8e4dd] text-sm font-mono transition-colors"
              >
                <ArrowLeft size={15} /> {cs.back}
              </a>
              <a
                href="/#contacto"
                className="group inline-flex items-center gap-2 bg-[#e8e4dd] text-[#0c0b0a] px-6 py-3 text-sm font-medium hover:bg-accent transition-colors"
              >
                {getContent(lang).hero.cta}
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </article>

      <footer className="border-t border-line">
        <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-faint text-xs font-mono">
          <span>© {new Date().getFullYear()} Alberto García Alcolado</span>
          <span>{getContent(lang).footer}</span>
        </div>
      </footer>
    </div>
  );
}
