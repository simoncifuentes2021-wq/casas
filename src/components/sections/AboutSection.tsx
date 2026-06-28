import { BadgeCheck, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const trustPoints = [
  { label: "Atención directa", icon: MessageCircle },
  { label: "Criterio local", icon: MapPin },
  { label: "Proyecto adaptable", icon: BadgeCheck },
];

export function AboutSection({ full = false }: { full?: boolean }) {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal className="rounded-lg bg-ink p-6 text-white shadow-premium md:p-8">
          <SectionHeader
            align="left"
            tone="dark"
            eyebrow="Quiénes somos"
            title="Casas BAE nace desde Victoria para acompañar proyectos de vida"
            description="En Casas BAE somos una empresa ubicada en Victoria, en el corazón de La Araucanía, dedicada al diseño y construcción de casas personalizadas."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {trustPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.label} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.08] px-4 py-3">
                  <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                  <span className="text-sm font-bold text-white/[0.88]">{point.label}</span>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal className="text-base leading-8 text-muted" delay={0.08}>
          <div className="rounded-lg border border-ink/[0.08] bg-warm p-6 shadow-soft md:p-8">
            <p>
              Nuestro objetivo es entregar soluciones habitacionales accesibles, funcionales y adaptadas a cada familia, combinando experiencia, materiales de calidad y atención directa durante todo el proceso.
            </p>
            <p className="mt-5">
              Sabemos que una casa no es solo una construcción: es el lugar donde comienzan nuevos proyectos de vida. Por eso acompañamos a cada cliente desde la elección del modelo hasta la personalización de los espacios.
            </p>
            {full ? (
              <div className="mt-8 grid gap-3 sm:grid-cols-5">
                {["Compromiso", "Transparencia", "Calidad", "Cercanía", "Personalización"].map((value) => (
                  <span key={value} className="rounded-md bg-white px-3 py-3 text-center text-sm font-black text-forest shadow-sm">
                    {value}
                  </span>
                ))}
              </div>
            ) : (
              <div className="mt-8">
                <Button href="/quienes-somos" variant="secondary" className="px-7">
                  Conoce nuestra historia
                </Button>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
