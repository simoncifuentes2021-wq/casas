import { ShieldCheck, Star } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TrustSection() {
  return (
    <section className="bg-mist py-20">
      <div className="container-page">
        <SectionHeader
          eyebrow="Confianza"
          title="Atención cercana para decidir con información"
          description="Estos bloques quedan preparados para incorporar testimonios reales, fotos de obras y experiencias de clientes."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {["Comunicación clara durante la cotización", "Modelos comparables por superficie y programa", "Proyectos adaptables a distintas necesidades"].map((text) => (
            <article key={text} className="rounded-lg bg-white p-6 shadow-soft">
              <Star className="h-6 w-6 fill-brand text-brand" aria-hidden="true" />
              <p className="mt-5 text-sm leading-6 text-muted">{text}</p>
              <div className="mt-5 flex items-center gap-2 text-sm font-bold text-forest">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                Casas BAE
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
