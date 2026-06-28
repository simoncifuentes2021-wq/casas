import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";
import { ModelDetail } from "@/components/ModelDetail";
import { JsonLd } from "@/components/JsonLd";
import { getModelBySlug, getRelatedModels, models } from "@/data/models";
import { breadcrumbJsonLd, faqJsonLd, modelServiceJsonLd, pageMetadata } from "@/lib/seo";
import { faqs } from "@/data/faqs";

export function generateStaticParams() {
  return models.map((model) => ({ slug: model.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const model = getModelBySlug(params.slug);
  if (!model) return {};

  return pageMetadata({
    title: `${model.name} en Victoria, La Araucanía`,
    description: `Conoce la ${model.name} de Casas BAE, proyecto personalizable en Victoria, Región de La Araucanía. Cotiza tu casa con asesoría directa por WhatsApp.`,
    path: `/modelos/${model.slug}`,
  });
}

export default function ModelPage({ params }: { params: { slug: string } }) {
  const model = getModelBySlug(params.slug);
  if (!model) notFound();

  const breadcrumbs = [
    { name: "Inicio", href: "/" },
    { name: "Modelos", href: "/modelos" },
    { name: model.name, href: `/modelos/${model.slug}` },
  ];

  return (
    <>
      <JsonLd data={modelServiceJsonLd(model)} />
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <div className="bg-ink pt-24">
        <div className="container-page pb-3">
          <Breadcrumbs
            tone="dark"
            items={[
              { label: "Inicio", href: "/" },
              { label: "Modelos", href: "/modelos" },
              { label: model.name },
            ]}
          />
        </div>
      </div>
      <ModelDetail model={model} related={getRelatedModels(model.slug)} />
      <FAQSection />
    </>
  );
}
