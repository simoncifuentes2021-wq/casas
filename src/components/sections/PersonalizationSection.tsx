import { Palette, Ruler, Trees, Wrench } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { whatsappUrl } from "@/lib/whatsapp";

const options = [
  "Distribución de espacios",
  "Revestimientos exteriores",
  "Ventanas y puertas",
  "Terminaciones interiores",
  "Colores y materiales",
  "Diseño ajustado a tu terreno",
];

export function PersonalizationSection() {
  return (
    <section id="personalizacion" className="overflow-hidden bg-deep py-16 text-white md:py-20">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeader
            align="left"
            tone="dark"
            eyebrow="Personalización"
            title="Tú eliges los detalles, nosotros los hacemos realidad"
            description="Una casa funciona mejor cuando responde a la vida real de quienes la habitan. Por eso revisamos contigo distribución, materialidad y terminaciones."
          />
          <div className="mt-8">
            <Button href={whatsappUrl("Hola Casas BAE, quiero cotizar un proyecto personalizado. ¿Me pueden orientar?")} className="w-full sm:w-auto">
              Cotiza tu proyecto personalizado
            </Button>
          </div>
        </div>
        <div>
          <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-5 md:hidden">
            {options.map((option, index) => {
              const Icon = [Ruler, Wrench, Palette, Trees][index % 4];
              return (
                <div key={option} className="min-w-[68vw] snap-start rounded-lg border border-white/10 bg-white/[0.08] p-5 backdrop-blur sm:min-w-[42vw]">
                  <Icon className="h-7 w-7 text-brand" aria-hidden="true" />
                  <h3 className="mt-4 font-bold">{option}</h3>
                </div>
              );
            })}
          </div>
          <div className="hidden gap-4 md:grid md:grid-cols-2">
          {options.map((option, index) => {
            const Icon = [Ruler, Wrench, Palette, Trees][index % 4];
            return (
              <div key={option} className="rounded-lg border border-white/10 bg-white/[0.08] p-5 backdrop-blur">
                <Icon className="h-7 w-7 text-brand" aria-hidden="true" />
                <h3 className="mt-4 font-bold">{option}</h3>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
