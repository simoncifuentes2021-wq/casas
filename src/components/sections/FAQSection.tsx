import { faqs } from "@/data/faqs";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FAQSection() {
  return (
    <section className="bg-white py-20">
      <div className="container-page">
        <SectionHeader
          eyebrow="Preguntas frecuentes"
          title="Dudas habituales antes de cotizar"
          description="Respuestas claras para entender valores, alcance y personalización de los proyectos."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-lg border border-ink/10 bg-warm p-5">
              <summary className="cursor-pointer list-none text-base font-bold text-ink">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-6 text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
