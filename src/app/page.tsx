import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ModelsSection } from "@/components/sections/ModelsSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { IncludesSection } from "@/components/sections/IncludesSection";
import { PersonalizationSection } from "@/components/sections/PersonalizationSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/data/faqs";
import { models } from "@/data/models";
import { faqJsonLd, modelsItemListJsonLd } from "@/lib/seo";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Casas personalizadas en Victoria, La Araucanía",
  description:
    "Casas BAE diseña y construye casas personalizadas y prefabricadas en Victoria, Región de La Araucanía. Revisa modelos y cotiza por WhatsApp.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={modelsItemListJsonLd(models)} />
      <Hero />
      <ModelsSection limit={3} />
      <BenefitsSection />
      <IncludesSection />
      <PersonalizationSection />
      <AboutSection />
      <ProcessSection />
      <TrustSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
