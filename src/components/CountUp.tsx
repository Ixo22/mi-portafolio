"use client";

import { useEffect, useRef } from "react";

// Renderiza el valor final (SSR / sin JS / movimiento reducido) y solo anima si el usuario lo permite.
export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1400,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const format = (n: number) => `${prefix}${n}${suffix}`;
    let raf = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
          el.textContent = format(Math.round(value * eased));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );

    el.textContent = format(0);
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      el.textContent = format(value);
    };
  }, [value, prefix, suffix, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {`${prefix}${value}${suffix}`}
    </span>
  );
}
