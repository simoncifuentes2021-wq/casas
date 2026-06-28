import { Check, FileCheck2, Hammer, Layers3 } from "lucide-react";
import { projectIncludes } from "@/data/models";
import { SectionHeader } from "@/components/ui/SectionHeader";

const highlights = [
  { title: "Base constructiva", description: "Radier, estabilizado y estructura base definida.", icon: Layers3 },
  { title: "Exterior protegido", description: "Paneles, techumbre y membrana hidrófuga.", icon: Hammer },
  { title: "Ficha clara", description: "Elementos indicados para conversar y cotizar mejor.", icon: FileCheck2 },
];

export function IncludesSection() {
  return (
    <section className="overflow-hidden bg-mist py-16 md:py-24">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Ficha técnica"
              title="Qué contempla el proyecto"
              description="Estas especificaciones generales sirven como base de conversación para evaluar el modelo y las personalizaciones que necesites."
            />
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
            <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-5">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="min-w-[76vw] snap-start rounded-lg border border-ink/[0.08] bg-white p-5 shadow-soft sm:min-w-[44vw]">
                    <Icon className="h-6 w-6 text-forest" aria-hidden="true" />
                    <h3 className="mt-3 font-black text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {projectIncludes.slice(0, 8).map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-ink/[0.08] bg-white p-3 shadow-[0_10px_28px_rgba(7,16,13,0.06)]"
                >
                  <Check className="h-4 w-4 text-brand" aria-hidden="true" />
                  <span className="mt-2 block text-xs font-bold leading-5 text-ink">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs font-semibold text-muted">
              La ficha completa se revisa al cotizar cada modelo.
            </p>
          </div>

          <div className="hidden gap-3 sm:grid-cols-2 md:grid">
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
          </div>
        </div>
      </div>
    </section>
  );
}
