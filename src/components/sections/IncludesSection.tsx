import { Check, FileCheck2, Hammer, Layers3 } from "lucide-react";
import { projectIncludes } from "@/data/models";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CarouselHint } from "@/components/ui/CarouselHint";
import { Reveal } from "@/components/ui/Reveal";

const highlights = [
  { title: "Base constructiva", description: "Radier, estabilizado y estructura base definida.", icon: Layers3 },
  { title: "Exterior protegido", description: "Paneles, techumbre y membrana hidrófuga.", icon: Hammer },
  { title: "Ficha clara", description: "Elementos indicados para conversar y cotizar mejor.", icon: FileCheck2 },
];

export function IncludesSection() {
  return (
    <section className="overflow-hidden bg-mist py-12 md:py-24">
      <div className="container-page">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <Reveal>
              <SectionHeader
                align="left"
                eyebrow="Ficha técnica"
                title="Qué contempla el proyecto"
                description="Estas especificaciones generales sirven como base de conversación para evaluar el modelo y las personalizaciones que necesites."
              />
            </Reveal>
            <div className="mt-8 hidden gap-3 md:grid">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-lg border border-ink/[0.08] bg-white p-5 shadow-soft">
                    <Icon className="h-6 w-6 text-forest" aria-hidden="true" />
                    <h3 className="mt-3 font-black text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="md:hidden">
            <div className="rounded-lg border border-ink/[0.08] bg-white p-4 shadow-soft">
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

            <div className="no-scrollbar mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-5 pr-8">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="min-w-[72%] snap-start rounded-lg border border-ink/[0.08] bg-white p-4 shadow-soft sm:min-w-[40%]">
                    <Icon className="h-6 w-6 text-forest" aria-hidden="true" />
                    <h3 className="mt-3 font-black text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                  </div>
                );
              })}
            </div>
            <CarouselHint label="Desliza para ver más puntos técnicos" />

            <div className="mt-5 grid gap-3">
              {projectIncludes.slice(4, 12).map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-ink/[0.08] bg-white p-3 shadow-[0_10px_28px_rgba(7,16,13,0.06)]"
                >
                  <Check className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <span className="block text-xs font-bold leading-5 text-ink">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs font-semibold text-muted">
              La ficha completa se revisa al cotizar cada modelo.
            </p>
          </div>

          <Reveal className="hidden gap-3 sm:grid-cols-2 md:grid">
            {projectIncludes.map((item) => (
              <div
                key={item}
                className="flex min-h-16 gap-3 rounded-lg border border-ink/[0.08] bg-white p-4 shadow-[0_12px_36px_rgba(7,16,13,0.06)]"
              >
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand/[0.12] text-brand">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold leading-6 text-ink">{item}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
