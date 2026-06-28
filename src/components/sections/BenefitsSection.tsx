import { BadgeCheck, Handshake, MapPinned, PencilRuler } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CarouselHint } from "@/components/ui/CarouselHint";
import { Reveal } from "@/components/ui/Reveal";

const benefits = [
  {
    title: "Proyectos a medida",
    description: "Partimos desde modelos definidos y los ajustamos a tu terreno, necesidades familiares y presupuesto.",
    icon: PencilRuler,
  },
  {
    title: "Comunicación directa",
    description: "Puedes resolver dudas, cotizar y avanzar por WhatsApp con una atención clara y cercana.",
    icon: Handshake,
  },
  {
    title: "Criterio local",
    description: "Estamos en Victoria y conocemos el contexto constructivo del sur de Chile.",
    icon: MapPinned,
  },
  {
    title: "Materialidad definida",
    description: "Trabajamos con especificaciones base claras para que sepas qué contempla cada proyecto.",
    icon: BadgeCheck,
  },
];

export function BenefitsSection() {
  return (
    <section className="overflow-hidden bg-white py-16 md:py-20">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            eyebrow="Beneficios"
            title="Una forma clara de avanzar hacia tu casa"
            description="Te acompañamos desde la elección del modelo hasta la personalización de los espacios, sin promesas infladas ni letra chica comercial."
          />
        </Reveal>
        <div className="mt-10 md:mt-12">
          <Reveal className="hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article key={benefit.title} className="rounded-lg border border-ink/[0.08] bg-warm p-6">
                  <Icon className="h-8 w-8 text-forest" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-bold text-ink">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{benefit.description}</p>
                </article>
              );
            })}
          </Reveal>

          <div className="mobile-carousel mobile-carousel-white no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto pb-5 pr-8 md:hidden">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article key={benefit.title} className="min-w-[74%] snap-start rounded-lg border border-ink/[0.08] bg-warm p-5 shadow-soft sm:min-w-[42%]">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-white text-forest shadow-sm">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{benefit.description}</p>
                </article>
              );
            })}
          </div>
          <CarouselHint label="Desliza para revisar beneficios" />
        </div>
      </div>
    </section>
  );
}
