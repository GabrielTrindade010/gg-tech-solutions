import type { Metadata, Viewport } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";

import { AppShell } from "@/components/providers/app-shell";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";

import "@/styles/globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000814",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} · Sites, Apps & SaaS de alto desempenho`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  keywords: [
    "GG Tech Solutions",
    "desenvolvimento web",
    "aplicativos mobile",
    "SaaS",
    "UI UX",
    "inteligência artificial",
    "cloud",
    "APIs",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} · Software premium`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/assets/images/logo.jpeg",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — identidade visual`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} · Software premium`,
    description: SITE_DESCRIPTION,
    images: ["/assets/images/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${jetbrains.variable}`}>
      <body className="min-h-[100dvh] overflow-x-hidden bg-[#000814] font-sans antialiased">
        <JsonLd />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
