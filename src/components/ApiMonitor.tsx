"use client";

import { useEffect, useRef, useState } from "react";
import type { Content } from "@/lib/content";

type Check = {
  status: "UP" | "DOWN";
  latencyMs: number;
  checkedAt: string;
};

type Phase = "checking" | "waking" | "up" | "down";

const POLL_MS = 30_000;
const WAKING_AFTER_MS = 4_000;
const HISTORY = 16;

export default function ApiMonitor({ t }: { t: Content["monitor"] }) {
  const [phase, setPhase] = useState<Phase>("checking");
  const [history, setHistory] = useState<Check[]>([]);
  const inFlight = useRef(false);

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const controller = new AbortController();

    async function check() {
      if (inFlight.current || document.visibilityState !== "visible") return;
      inFlight.current = true;
      const waking = setTimeout(() => {
        if (!cancelled) setPhase((p) => (p === "checking" ? "waking" : p));
      }, WAKING_AFTER_MS);

      try {
        const res = await fetch("/api/status", {
          cache: "no-store",
          signal: controller.signal,
        });
        const data = (await res.json()) as Check;
        if (cancelled) return;
        setHistory((h) => [...h, data].slice(-HISTORY));
        setPhase(data.status === "UP" ? "up" : "down");
      } catch {
        if (cancelled) return;
        setPhase("down");
      } finally {
        clearTimeout(waking);
        inFlight.current = false;
      }
    }

    function loop() {
      check().finally(() => {
        if (!cancelled) timer = setTimeout(loop, POLL_MS);
      });
    }

    function onVisible() {
      if (document.visibilityState === "visible") check();
    }

    loop();
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      cancelled = true;
      controller.abort();
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  const last = history[history.length - 1];
  const upCount = history.filter((c) => c.status === "UP").length;
  const uptime = history.length ? Math.round((upCount / history.length) * 100) : null;
  const maxLatency = Math.max(400, ...history.map((c) => c.latencyMs));

  const dot =
    phase === "up"
      ? "bg-[#9bc58a]"
      : phase === "down"
        ? "bg-red-400"
        : "bg-accent monitor-pulse";

  const label =
    phase === "up"
      ? t.up
      : phase === "down"
        ? t.down
        : phase === "waking"
          ? t.waking
          : t.checking;

  const time = last
    ? new Date(last.checkedAt).toLocaleTimeString(t.locale, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    : "—";

  return (
    <div
      className="border border-line bg-paper/80 font-mono text-xs max-w-md w-full"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-line text-faint">
        <span className="truncate">{t.title}</span>
        <span className="flex items-center gap-1.5 shrink-0 uppercase tracking-wider">
          <span className="relative flex h-1.5 w-1.5">
            {phase === "up" && (
              <span className="absolute inset-0 rounded-full bg-[#9bc58a] monitor-ping" />
            )}
            <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${dot}`} />
          </span>
          live
        </span>
      </div>

      <div className="px-4 py-3.5 space-y-3">
        <p className="text-faint truncate">
          <span className="text-accent">GET</span> /actuator/health
        </p>

        <div className="grid grid-cols-3 gap-3">
          <div>
            <p className="text-faint uppercase tracking-wider text-[10px] mb-1">{t.statusLabel}</p>
            <p className="text-[#e8e4dd]">{label}</p>
          </div>
          <div>
            <p className="text-faint uppercase tracking-wider text-[10px] mb-1">{t.latencyLabel}</p>
            <p className="text-[#e8e4dd] tabular-nums">
              {last ? `${last.latencyMs} ms` : "—"}
            </p>
          </div>
          <div>
            <p className="text-faint uppercase tracking-wider text-[10px] mb-1">{t.uptimeLabel}</p>
            <p className="text-[#e8e4dd] tabular-nums">
              {uptime === null ? "—" : `${uptime}%`}
            </p>
          </div>
        </div>

        <div className="flex items-end gap-[3px] h-7" aria-hidden="true">
          {Array.from({ length: HISTORY }).map((_, i) => {
            const c = history[i - (HISTORY - history.length)];
            if (!c) return <span key={i} className="flex-1 h-px bg-line" />;
            const h = Math.max(12, Math.round((Math.log(c.latencyMs + 1) / Math.log(maxLatency + 1)) * 100));
            return (
              <span
                key={i}
                className={`flex-1 monitor-bar ${c.status === "UP" ? "bg-accent/70" : "bg-red-400/80"}`}
                style={{ height: `${h}%` }}
                title={`${c.latencyMs} ms`}
              />
            );
          })}
        </div>

        <p className="text-faint text-[11px] leading-relaxed">
          {phase === "waking" ? t.wakingHint : `${t.lastCheck} ${time} · ${t.every}`}
        </p>
      </div>
    </div>
  );
}
