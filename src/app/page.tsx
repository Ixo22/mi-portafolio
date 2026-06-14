"use client";

import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/components/LanguageProvider";
import {
  getContent,
  EMAIL,
  LINKEDIN_URL,
  GITHUB_URL,
  PHONE,
} from "@/lib/content";
import { Mail, Phone, MapPin, ArrowUpRight, ArrowDown } from "lucide-react";

function GitHubIcon({ size = 18 }: { size?: number }) {
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

function LinkedInIcon({ size = 18 }: { size?: number }) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="text-accent font-mono text-xs tracking-[0.25em] uppercase">
        {children}
      </span>
      <span className="flex-1 rule" />
    </div>
  );
}

export default function Home() {
  const { lang } = useLanguage();
  const c = getContent(lang);

  return (
    <div className="relative z-10 font-sans">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6">
        {/* ─── HERO ─────────────────────────────────────────────── */}
        <header
          id="inicio"
          className="min-h-screen flex flex-col justify-center py-28"
        >
          <Reveal>
            <p className="font-mono text-sm text-accent mb-6 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-accent" />
              {c.hero.badge}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-serif text-[2.6rem] leading-[1.08] sm:text-6xl md:text-[4.2rem] text-[#f3f0ea] tracking-[-0.02em] mb-8">
              {c.hero.h1a}
              <span className="italic text-accent">{c.hero.h1accent}</span>
              {c.hero.h1b}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-10">
              {c.hero.intro}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#contacto"
                className="group inline-flex items-center gap-2 bg-[#e8e4dd] text-[#0c0b0a] px-6 py-3 text-sm font-medium hover:bg-accent transition-colors"
              >
                {c.hero.cta}
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
              <div className="flex items-center gap-5 text-muted">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:text-[#e8e4dd] transition-colors"
                >
                  <GitHubIcon size={20} />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-[#e8e4dd] transition-colors"
                >
                  <LinkedInIcon size={20} />
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  aria-label="Email"
                  className="hover:text-[#e8e4dd] transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <a
              href="#sobre-mi"
              className="mt-24 inline-flex items-center gap-2 text-faint hover:text-muted text-xs font-mono uppercase tracking-widest transition-colors"
            >
              <ArrowDown size={14} className="animate-bounce" />
              {c.hero.scroll}
            </a>
          </Reveal>
        </header>

        {/* ─── SOBRE MÍ ─────────────────────────────────────────── */}
        <section id="sobre-mi" className="py-24 scroll-mt-20">
          <Eyebrow>{c.about.eyebrow}</Eyebrow>

          <div className="grid md:grid-cols-3 gap-12">
            <Reveal className="md:col-span-2 space-y-5 text-[#cfc9bf] text-lg leading-[1.75]">
              <figure className="float-right ml-6 mb-3 w-40 sm:w-48">
                <div className="border border-line p-1.5">
                  <img
                    src="/profile.jpg"
                    alt="Alberto García Alcolado"
                    width={192}
                    height={240}
                    className="w-full aspect-[4/5] object-cover object-top"
                  />
                </div>
                <figcaption className="text-faint text-xs font-mono mt-2.5 text-center">
                  {c.about.caption}
                </figcaption>
              </figure>
              <p>
                {c.about.p1a}
                <em className="text-[#e8e4dd] not-italic font-medium">
                  {c.about.p1em}
                </em>
                {c.about.p1b}
              </p>
              <p>
                {c.about.p2a}
                <span className="text-accent">{c.about.p2accent}</span>
                {c.about.p2b}
              </p>
              <p>{c.about.p3}</p>
              <p className="font-serif text-xl text-[#e8e4dd] italic pt-2">
                {c.about.signature}
              </p>
            </Reveal>

            <Reveal delay={150} className="space-y-px text-sm font-mono">
              {c.about.facts.map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between gap-4 py-3 border-b border-line"
                >
                  <span className="text-faint">{k}</span>
                  <span className="text-[#e8e4dd] text-right">{v}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ─── CÓMO TRABAJO ─────────────────────────────────────── */}
        <section id="metodo" className="py-24 scroll-mt-20">
          <Eyebrow>{c.method.eyebrow}</Eyebrow>
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl text-[#f3f0ea] tracking-[-0.02em] mb-14 max-w-2xl">
              {c.method.heading}
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
            {c.method.principles.map((p, i) => (
              <Reveal key={p.n} delay={(i % 2) * 120}>
                <div className="group">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-mono text-sm text-accent">{p.n}</span>
                    <h3 className="font-serif text-xl text-[#f3f0ea]">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-muted leading-relaxed pl-9">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ─── EXPERIENCIA ──────────────────────────────────────── */}
        <section id="experiencia" className="py-24 scroll-mt-20">
          <Eyebrow>{c.experience.eyebrow}</Eyebrow>

          <div className="space-y-px">
            {c.experience.items.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 80}>
                <div className="grid md:grid-cols-12 gap-4 md:gap-8 py-10 border-t border-line">
                  <div className="md:col-span-4">
                    <div className="flex items-center gap-2.5">
                      <h3 className="font-serif text-2xl text-[#f3f0ea]">
                        {exp.company}
                      </h3>
                      {exp.current && (
                        <span className="text-[10px] font-mono uppercase tracking-wider text-accent border border-accent/40 px-1.5 py-0.5">
                          {c.experience.now}
                        </span>
                      )}
                    </div>
                    <p className="text-[#cfc9bf] text-sm mt-1.5">{exp.role}</p>
                    <p className="text-faint text-xs font-mono mt-2">
                      {exp.period}
                    </p>
                    <p className="text-faint text-xs font-mono flex items-center gap-1 mt-1">
                      <MapPin size={11} /> {exp.location}
                    </p>
                  </div>

                  <div className="md:col-span-8">
                    <p className="text-[#e8e4dd] mb-4 leading-relaxed">
                      {exp.lead}
                    </p>
                    <ul className="space-y-3 mb-5">
                      {exp.points.map((point, j) => (
                        <li
                          key={j}
                          className="text-muted text-[15px] leading-relaxed flex gap-3"
                        >
                          <span className="text-accent mt-2 flex-shrink-0 w-3 h-px bg-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    {exp.sub && (
                      <p className="text-faint text-sm italic mb-4">{exp.sub}</p>
                    )}
                    <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                      {exp.stack.map((tech) => (
                        <span key={tech} className="text-xs font-mono text-faint">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ─── PROYECTOS ────────────────────────────────────────── */}
        <section id="proyectos" className="py-24 scroll-mt-20">
          <Eyebrow>{c.projects.eyebrow}</Eyebrow>

          <div className="space-y-px">
            {c.projects.items.map((project, i) => (
              <Reveal key={project.name} delay={i * 80}>
                <div className="grid md:grid-cols-12 gap-4 md:gap-8 py-10 border-t border-line">
                  <div className="md:col-span-4">
                    <h3 className="font-serif text-2xl text-[#f3f0ea]">
                      {project.name}
                    </h3>
                    <p className="text-accent text-xs font-mono mt-2">
                      {project.tag}
                    </p>
                    <p className="text-faint text-xs font-mono mt-1">
                      {project.period}
                    </p>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-[#cfc9bf] leading-relaxed mb-5">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 justify-between">
                      <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="text-xs font-mono text-faint">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-5">
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[#e8e4dd] link-underline inline-flex items-center gap-1.5"
                          >
                            {c.projects.viewProject}
                            <ArrowUpRight size={15} />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[#e8e4dd] link-underline inline-flex items-center gap-1.5"
                          >
                            <GitHubIcon size={15} /> {c.projects.viewCode}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-8 border-t border-b border-line text-muted hover:text-[#e8e4dd] transition-colors"
              >
                <span className="flex items-center gap-3">
                  <GitHubIcon size={18} />
                  <span className="text-sm">{c.projects.more}</span>
                </span>
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </Reveal>
          </div>
        </section>

        {/* ─── STACK ────────────────────────────────────────────── */}
        <section className="py-24">
          <Eyebrow>{c.skills.eyebrow}</Eyebrow>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
            {c.skills.groups.map((s, i) => (
              <Reveal key={s.group} delay={(i % 3) * 80}>
                <h3 className="text-faint font-mono text-xs uppercase tracking-wider mb-3">
                  {s.group}
                </h3>
                <ul className="space-y-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="text-[#cfc9bf] text-[15px]">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ─── CONTACTO ─────────────────────────────────────────── */}
        <section id="contacto" className="py-28 scroll-mt-20">
          <Eyebrow>{c.contact.eyebrow}</Eyebrow>
          <Reveal>
            <h2 className="font-serif text-4xl md:text-6xl text-[#f3f0ea] tracking-[-0.02em] leading-[1.05] mb-8 max-w-3xl">
              {c.contact.heading}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mb-12">
              {c.contact.intro}
            </p>
          </Reveal>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <Reveal delay={150} className="md:col-span-3">
              <ContactForm t={c.form} />
            </Reveal>

            <Reveal delay={220} className="md:col-span-2 space-y-px">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-4 border-t border-line hover:border-accent text-[#e8e4dd] transition-colors"
              >
                <LinkedInIcon size={16} />
                <span className="text-sm">{c.contact.linkedinBtn}</span>
              </a>
              {[
                { icon: <Mail size={15} />, label: c.contact.labels.email, value: EMAIL, href: `mailto:${EMAIL}` },
                { icon: <Phone size={15} />, label: c.contact.labels.phone, value: PHONE, href: `tel:${PHONE}` },
                { icon: <MapPin size={15} />, label: c.contact.labels.location, value: c.contact.labels.locationValue, href: null },
              ].map((item) => {
                const inner = (
                  <>
                    <span className="flex items-center gap-2 text-faint text-xs font-mono uppercase tracking-wider mb-1">
                      {item.icon} {item.label}
                    </span>
                    <span className="text-[#e8e4dd] text-sm block truncate">
                      {item.value}
                    </span>
                  </>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block py-4 border-t border-line hover:border-accent transition-colors"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="py-4 border-t border-b border-line"
                  >
                    {inner}
                  </div>
                );
              })}
            </Reveal>
          </div>
        </section>
      </div>

      {/* ─── FOOTER ───────────────────────────────────────────── */}
      <footer className="border-t border-line">
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-faint text-xs font-mono">
          <span>© {new Date().getFullYear()} Alberto García Alcolado</span>
          <span>{c.footer}</span>
        </div>
      </footer>
    </div>
  );
}
