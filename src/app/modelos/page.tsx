import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ModelsSection } from "@/components/sections/ModelsSection";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { models } from "@/data/models";
import { breadcrumbJsonLd, modelsItemListJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Modelos de casas prefabricadas en Victoria",
  description:
    "Revisa modelos de casas personalizables de 36 a 110 m² en Victoria, Región de La Araucanía. Valores referenciales desde y cotización directa por WhatsApp.",
  path: "/modelos",
});

export default function ModelosPage() {
  const breadcrumbs = [
    { name: "Inicio", href: "/" },
    { name: "Modelos", href: "/modelos" },
  ];

  return (
    <>
      <JsonLd data={modelsItemListJsonLd(models)} />
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <section className="bg-ink pt-32 text-white">
        <div className="container-page pb-12">
          <Breadcrumbs tone="dark" items={[{ label: "Inicio", href: "/" }, { label: "Modelos" }]} />
          <h1 className="mt-8 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            Modelos de casas personalizables
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/[0.72]">
            Compara superficies, distribuciones y valores referenciales desde. Cada modelo puede ajustarse a tu terreno y necesidades.
          </p>
        </div>
      </section>
      <ModelsSection />
      <CTASection />
    </>
  );
}
