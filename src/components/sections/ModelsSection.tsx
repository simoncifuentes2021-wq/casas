import { models } from "@/data/models";
import { ModelCard } from "@/components/ui/ModelCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function ModelsSection({ limit }: { limit?: number }) {
  const visibleModels = typeof limit === "number" ? models.slice(0, limit) : models;

  return (
    <section className="overflow-hidden bg-warm py-16 md:py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="Modelos"
          title="Elige una base y personalízala para tu proyecto"
          description="Cada modelo puede adaptarse según distribución, terreno y terminaciones. Los valores son referenciales desde."
        />
        <div className="mt-10 md:mt-12">
          <div className="sm:hidden">
            <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-5">
              {visibleModels.map((model) => (
                <div key={model.slug} className="min-w-[84vw] snap-start">
                  <ModelCard model={model} />
                </div>
              ))}
            </div>
            <p className="mt-1 text-center text-xs font-semibold text-muted">Desliza para ver más modelos</p>
          </div>

          <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {visibleModels.map((model) => (
              <ModelCard key={model.slug} model={model} />
            ))}
          </div>
        </div>
        {limit ? (
          <div className="mt-9 text-center md:mt-12">
            <Button href="/modelos" variant="secondary" className="px-7">
              Ver todos los modelos
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
