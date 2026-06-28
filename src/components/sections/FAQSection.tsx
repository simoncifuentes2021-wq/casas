import { faqs } from "@/data/faqs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function FAQSection() {
  return (
    <section className="bg-white py-20">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            eyebrow="Preguntas frecuentes"
            title="Dudas habituales antes de cotizar"
            description="Respuestas claras para entender valores, alcance y personalización de los proyectos."
          />
        </Reveal>
        <Reveal className="mx-auto mt-12 grid max-w-4xl gap-4" delay={0.08}>
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-lg border border-ink/10 bg-warm p-5 transition open:bg-white open:shadow-soft">
              <summary className="cursor-pointer list-none text-base font-bold text-ink">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-6 text-muted">{faq.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
