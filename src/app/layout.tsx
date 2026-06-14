import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Alberto García Alcolado · Backend Developer Java & Microservicios",
  description:
    "Portfolio de Alberto García Alcolado — Backend Developer especializado en microservicios Java, APIs REST y arquitecturas de datos en el sector seguros. Madrid.",
  keywords: [
    "Backend Developer",
    "Java",
    "Microservicios",
    "APIs REST",
    "Sector Seguros",
    "Madrid",
    "TypeScript",
    "Azure DevOps",
  ],
  authors: [{ name: "Alberto García Alcolado" }],
  openGraph: {
    title: "Alberto García Alcolado · Backend Developer",
    description:
      "Backend Developer Java especializado en microservicios, arquitecturas distribuidas y compliance normativo. Sector seguros.",
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Alberto García Alcolado",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alberto García Alcolado · Backend Developer",
    description:
      "Backend Developer Java especializado en microservicios y arquitecturas de datos. Sector seguros.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0c0b0a] text-[#e8e4dd]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
