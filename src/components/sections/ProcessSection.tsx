"use client";

import { ClipboardCheck, Hammer, Home, MessageCircle, Ruler, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  { title: "Nos contactas", icon: MessageCircle },
  { title: "Revisamos el modelo ideal", icon: Home },
  { title: "Adaptamos el proyecto a tu terreno", icon: Ruler },
  { title: "Definimos materiales y terminaciones", icon: Settings },
  { title: "Coordinamos la construcción", icon: ClipboardCheck },
  { title: "Avanzamos con tu proyecto", icon: Hammer },
];

export function ProcessSection() {
  return (
    <section className="overflow-hidden bg-warm py-16 md:py-20">
      <div className="container-page">
        <SectionHeader
          eyebrow="Proceso"
          title="Un camino simple, con decisiones bien ordenadas"
          description="Te guiamos paso a paso para que cada avance tenga sentido técnico, comercial y familiar."
        />
        <div className="mt-10 md:mt-12">
          <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-5 md:hidden">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="min-w-[72vw] snap-start rounded-lg bg-white p-6 shadow-soft sm:min-w-[42vw]"
                >
                  <span className="text-sm font-black text-brand">0{index + 1}</span>
                  <Icon className="mt-5 h-8 w-8 text-forest" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-bold text-ink">{step.title}</h3>
                </motion.article>
              );
            })}
          </div>
          <p className="mt-1 text-center text-xs font-semibold text-muted md:hidden">Desliza para ver el proceso</p>

          <div className="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="rounded-lg bg-white p-6 shadow-soft"
              >
                <span className="text-sm font-black text-brand">0{index + 1}</span>
                <Icon className="mt-5 h-8 w-8 text-forest" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-bold text-ink">{step.title}</h3>
              </motion.article>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
