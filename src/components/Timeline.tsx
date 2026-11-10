"use client";

import { useEffect, useRef } from "react";

// Línea vertical que se rellena según el scroll a lo largo de la sección.
export default function Timeline({ children }: { children: React.ReactNode }) {
  const wrap = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrap.current;
    const bar = fill.current;
    if (!el || !bar) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      bar.style.transform = "scaleY(1)";
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const anchor = window.innerHeight * 0.6;
      const p = Math.min(1, Math.max(0, (anchor - rect.top) / rect.height));
      bar.style.transform = `scaleY(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={wrap} className="relative pl-8 md:pl-10">
      <div className="absolute left-[5px] md:left-[7px] top-0 bottom-0 w-px bg-line" aria-hidden="true" />
      <div
        ref={fill}
        className="absolute left-[5px] md:left-[7px] top-0 bottom-0 w-px bg-accent origin-top"
        style={{ transform: "scaleY(0)" }}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
