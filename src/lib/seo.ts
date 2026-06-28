import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import type { FAQ, Model } from "@/types";

export function pageMetadata({
  title,
  description,
  path = "/",
  image = "/images/og-casas-bae.png",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "es_CL",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "HomeAndConstructionBusiness"],
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phoneE164,
    image: `${siteConfig.url}/images/og-casas-bae.png`,
    logo: `${siteConfig.url}/images/og-casas-bae.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Victoria",
      addressRegion: "Región de La Araucanía",
      addressCountry: "CL",
    },
    areaServed: "Región de La Araucanía, Chile",
    sameAs: Object.values(siteConfig.social).filter((url) => url.startsWith("https://")),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "es-CL",
  };
}

export function faqJsonLd(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function modelsItemListJsonLd(models: Model[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Modelos de casas Casas BAE",
    itemListElement: models.map((model, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteConfig.url}/modelos/${model.slug}`,
      name: model.name,
    })),
  };
}

export function modelServiceJsonLd(model: Model) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${model.name} Casas BAE`,
    description: model.description,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phoneE164,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Victoria",
        addressRegion: "Región de La Araucanía",
        addressCountry: "CL",
      },
    },
    areaServed: "Región de La Araucanía",
    offers: {
      "@type": "Offer",
      priceCurrency: "CLP",
      price: model.price.replace(/[$.]/g, ""),
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/modelos/${model.slug}`,
    },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
}
