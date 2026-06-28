import { ArrowRight, Check, MessageCircle } from "lucide-react";
import type { Model } from "@/types";
import { projectIncludes, valueNotice } from "@/data/models";
import { modelWhatsappUrl } from "@/lib/whatsapp";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Button } from "@/components/ui/Button";
import { ModelCard } from "@/components/ui/ModelCard";
import { CarouselHint } from "@/components/ui/CarouselHint";
import { Reveal } from "@/components/ui/Reveal";

export function ModelDetail({
  model,
  related,
}: {
  model: Model;
  related: Model[];
}) {
  return (
    <>
      <section className="bg-ink pt-28 text-white md:pt-32">
        <div className="container-page grid gap-8 pb-14 md:gap-10 md:pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand">Modelo Casas BAE</p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-balance md:text-6xl">{model.name}</h1>
            {model.modelName ? <p className="mt-3 text-xl text-white/80">{model.modelName}</p> : null}
            <p className="mt-6 text-lg leading-8 text-white/[0.72]">{model.description}</p>
            <div className="mt-8 rounded-lg border border-white/[0.12] bg-white/[0.08] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-white/[0.65]">Valor referencial desde</p>
              <p className="mt-2 text-4xl font-black text-white">{model.price}</p>
              <p className="mt-3 text-sm leading-6 text-white/[0.65]">{valueNotice}</p>
            </div>
            <div className="mt-8">
              <Button href={modelWhatsappUrl(model.name)} variant="light" className="w-full px-7 sm:w-auto">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Cotizar este modelo
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br from-mist via-white to-[#dfe6d5] shadow-premium">
            <ImageWithFallback
              src={model.image}
              alt={`Imagen principal del modelo ${model.name}`}
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-warm py-14 md:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <article className="rounded-lg border border-ink/[0.08] bg-white p-6 shadow-soft md:p-7">
            <h2 className="text-2xl font-black text-ink">Características</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {model.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm font-semibold leading-6 text-ink">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </article>
          <article className="overflow-hidden rounded-lg border border-ink/[0.08] bg-white shadow-soft">
            <div className="relative aspect-[4/3] bg-gradient-to-br from-mist via-white to-[#dfe6d5]">
              <ImageWithFallback
                src={model.planImage}
                alt={`Plano referencial del modelo ${model.name}`}
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-black text-ink">Plano referencial</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                Espacio preparado para plano o imagen técnica del modelo. Puedes reemplazarlo en la carpeta pública de imágenes.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-forest">Ficha técnica</p>
            <h2 className="mt-3 text-3xl font-black text-ink md:text-4xl">Qué contempla</h2>
          </div>
          <div className="rounded-lg border border-ink/[0.08] bg-mist p-5 md:hidden">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-forest">Resumen técnico</p>
            <div className="mt-4 grid gap-3">
              {projectIncludes.slice(0, 4).map((item) => (
                <div key={item} className="flex gap-3 text-sm font-semibold leading-6 text-ink">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mobile-carousel mobile-carousel-white no-scrollbar mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-5 pr-8 md:hidden">
            {projectIncludes.map((item) => (
              <div key={item} className="min-w-[66%] snap-start rounded-lg border border-ink/[0.08] bg-mist p-4 text-sm font-semibold leading-6 text-ink sm:min-w-[38%]">
                <span className="mb-3 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white text-brand shadow-sm">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="block">{item}</span>
              </div>
            ))}
          </div>
          <CarouselHint label="Desliza para ver la ficha técnica" />

          <Reveal className="mt-8 hidden gap-3 md:grid md:grid-cols-2 lg:grid-cols-3">
            {projectIncludes.map((item) => (
              <div key={item} className="flex min-h-16 gap-3 rounded-lg border border-ink/[0.08] bg-mist p-4 text-sm font-semibold leading-6 text-ink">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white text-brand shadow-sm">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                {item}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-14 md:py-20">
        <div className="container-page">
          <div className="rounded-lg bg-deep p-8 text-white shadow-premium md:p-10">
            <h2 className="text-3xl font-black text-balance">¿Quieres adaptar este modelo?</h2>
            <p className="mt-3 max-w-2xl text-white/[0.72]">
              Cuéntanos qué cambios necesitas y revisamos contigo la factibilidad según terreno, distribución y terminaciones.
            </p>
            <div className="mt-7">
              <Button href={modelWhatsappUrl(model.name)} variant="light" className="w-full px-7 sm:w-auto">
                Cotizar {model.name} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-warm py-14 md:py-20">
        <div className="container-page">
          <h2 className="text-3xl font-black text-ink">Modelos relacionados</h2>
          <div className="mobile-carousel no-scrollbar mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-5 pr-8 md:hidden">
            {related.map((item) => (
              <div key={item.slug} className="min-w-[78%] snap-start sm:min-w-[44%]">
                <ModelCard model={item} />
              </div>
            ))}
          </div>
          <CarouselHint label="Desliza para ver relacionados" />
          <div className="mt-8 hidden gap-6 md:grid md:grid-cols-3">
            {related.map((item) => (
              <ModelCard key={item.slug} model={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
