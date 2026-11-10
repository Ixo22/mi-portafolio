import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SITE_URL } from "@/lib/site";
import { EMAIL, LINKEDIN_URL, GITHUB_URL } from "@/lib/content";
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
  metadataBase: new URL(SITE_URL),
  title: "Alberto García Alcolado · Backend Developer Java & Spring Boot",
  description:
    "Portfolio de Alberto García Alcolado — Backend Developer Java con experiencia en APIs REST, SQL y observabilidad en el sector seguros, y un backend propio en Spring Boot y PostgreSQL en producción. Madrid.",
  keywords: [
    "Backend Developer",
    "Java",
    "Spring Boot",
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
      "Backend Developer Java: APIs REST, SQL, Spring Boot y PostgreSQL. Sector seguros.",
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Alberto García Alcolado",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alberto García Alcolado · Backend Developer",
    description:
      "Backend Developer Java: APIs REST, SQL, Spring Boot y PostgreSQL. Sector seguros.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alberto García Alcolado",
  jobTitle: "Backend Developer",
  email: `mailto:${EMAIL}`,
  url: SITE_URL,
  image: `${SITE_URL}/profile.jpg`,
  sameAs: [LINKEDIN_URL, GITHUB_URL],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Madrid",
    addressCountry: "ES",
  },
  knowsAbout: [
    "Java",
    "Spring Boot",
    "REST APIs",
    "SQL Server",
    "PostgreSQL",
    "Azure DevOps",
  ],
  knowsLanguage: ["es", "en"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
