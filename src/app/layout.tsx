import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FloatingWhatsAppButton } from "@/components/ui/FloatingWhatsAppButton";
import { MobileBottomBar } from "@/components/ui/MobileBottomBar";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-heading", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Casas BAE | Casas personalizadas en Victoria, La Araucanía",
    template: "%s | Casas BAE",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: "Casas BAE | Casas personalizadas en Victoria, La Araucanía",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "es_CL",
    type: "website",
    images: [{ url: "/images/og-casas-bae.png", width: 1200, height: 630, alt: "Casas BAE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casas BAE | Casas personalizadas en Victoria, La Araucanía",
    description: siteConfig.description,
    images: ["/images/og-casas-bae.png"],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07100D",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <Navbar />
        <main id="contenido">{children}</main>
        <Footer />
        <FloatingWhatsAppButton />
        <MobileBottomBar />
      </body>
    </html>
  );
}
