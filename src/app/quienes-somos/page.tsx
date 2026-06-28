import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Quiénes somos",
  description:
    "Conoce Casas BAE, empresa ubicada en Victoria, Región de La Araucanía, dedicada al diseño y construcción de casas personalizadas.",
  path: "/quienes-somos",
});

export default function QuienesSomosPage() {
  const breadcrumbs = [
    { name: "Inicio", href: "/" },
    { name: "Quiénes somos", href: "/quienes-somos" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <section className="bg-ink pt-32 text-white">
        <div className="container-page pb-14">
          <Breadcrumbs tone="dark" items={[{ label: "Inicio", href: "/" }, { label: "Quiénes somos" }]} />
          <h1 className="mt-8 max-w-3xl text-4xl font-black md:text-6xl">Quiénes somos</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/[0.72]">
            Una empresa de Victoria enfocada en soluciones habitacionales personalizadas para familias de La Araucanía.
          </p>
        </div>
      </section>
      <AboutSection full />
      <ProcessSection />
      <CTASection />
    </>
  );
}
