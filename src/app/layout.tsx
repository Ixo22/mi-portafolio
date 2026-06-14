import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
