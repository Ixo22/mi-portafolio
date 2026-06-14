"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#sobre-mi", label: "Sobre mí", id: "sobre-mi" },
  { href: "#metodo", label: "Cómo trabajo", id: "metodo" },
  { href: "#experiencia", label: "Experiencia", id: "experiencia" },
  { href: "#proyectos", label: "Proyectos", id: "proyectos" },
  { href: "#contacto", label: "Contacto", id: "contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["inicio", ...NAV_LINKS.map((l) => l.id)];
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
          href="#inicio"
          className="font-serif text-lg text-[#e8e4dd] hover:text-accent transition-colors"
        >
          Alberto García
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
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
            CV
          </a>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-muted hover:text-[#e8e4dd] transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
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

      {menuOpen && (
        <div className="md:hidden border-t border-line px-6 py-5 flex flex-col gap-4 bg-[#0c0b0a]/95 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
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
            Descargar CV
          </a>
        </div>
      )}
    </nav>
  );
}
