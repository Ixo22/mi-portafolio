import { ImageResponse } from "next/og";

export const alt = "Alberto García Alcolado — Backend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0c0b0a",
          padding: "72px",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(232,228,221,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(232,228,221,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "9999px",
              background: "#e0a458",
            }}
          />
          <div
            style={{
              color: "#e0a458",
              fontSize: "26px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            Backend Developer · Madrid
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div
            style={{
              color: "#f3f0ea",
              fontSize: "92px",
              lineHeight: 1.05,
              letterSpacing: "-2px",
            }}
          >
            Alberto García
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              columnGap: "14px",
              rowGap: "4px",
              color: "#cfc9bf",
              fontSize: "40px",
              maxWidth: "900px",
              lineHeight: 1.25,
            }}
          >
            <span>Construyo el backend que</span>
            <span style={{ color: "#e0a458", fontStyle: "italic" }}>
              no se puede permitir
            </span>
            <span>fallar.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#6b665e",
            fontSize: "26px",
            fontFamily: "monospace",
          }}
        >
          <span>Java · Microservicios · Sector Seguros</span>
          <span>aalbeerto</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
