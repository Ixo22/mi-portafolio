"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import LanguageToggle from "@/components/LanguageToggle";
import { getContent } from "@/lib/content";

export default function Navbar() {
  const { lang } = useLanguage();
  const c = getContent(lang);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  const links = [
    { href: "/#sobre-mi", label: c.nav.about, id: "sobre-mi" },
    { href: "/#metodo", label: c.nav.method, id: "metodo" },
    { href: "/#experiencia", label: c.nav.experience, id: "experiencia" },
    { href: "/#proyectos", label: c.nav.projects, id: "proyectos" },
    { href: "/#contacto", label: c.nav.contact, id: "contacto" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["inicio", "sobre-mi", "metodo", "experiencia", "proyectos", "contacto"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "bg-[#0c0b0a]/90 backdrop-blur-md border-b border-line"
          : "border-b border-transparent"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="/"
          className="font-serif text-lg text-[#e8e4dd] hover:text-accent transition-colors"
        >
          Alberto García
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                active === link.id
                  ? "text-accent"
                  : "text-muted hover:text-[#e8e4dd]"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#e8e4dd] border border-line px-3.5 py-1.5 hover:border-accent hover:text-accent transition-colors"
          >
            {c.nav.cv}
          </a>
          <LanguageToggle />
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageToggle />
          <button
            className="text-muted hover:text-[#e8e4dd] transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="9" x2="20" y2="9" />
                  <line x1="4" y1="15" x2="20" y2="15" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-line px-6 py-5 flex flex-col gap-4 bg-[#0c0b0a]/95 backdrop-blur-md">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm ${
                active === link.id ? "text-accent" : "text-muted"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#e8e4dd] border border-line px-3.5 py-2 text-center hover:border-accent transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {c.nav.cv}
          </a>
        </div>
      )}
    </nav>
  );
}
