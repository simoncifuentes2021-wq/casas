"use client";

import { ArrowRight, MessageCircle, Ruler } from "lucide-react";
import { motion } from "framer-motion";
import type { Model } from "@/types";
import { modelWhatsappUrl } from "@/lib/whatsapp";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Button } from "@/components/ui/Button";

export function ModelCard({ model }: { model: Model }) {
  return (
    <motion.article
      className="group overflow-hidden rounded-lg border border-ink/[0.08] bg-white shadow-[0_18px_60px_rgba(7,16,13,0.08)] transition-shadow duration-300 hover:shadow-[0_26px_80px_rgba(7,16,13,0.15)]"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-mist via-white to-[#dfe6d5]">
        <ImageWithFallback
          src={model.image}
          alt={`Modelo ${model.name} de Casas BAE`}
          className="object-cover transition duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/55 to-transparent" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-md bg-white/92 px-3 py-2 text-sm font-black text-forest shadow-soft backdrop-blur">
          <Ruler className="h-4 w-4" aria-hidden="true" />
          {model.area} m²
        </span>
      </div>
      <div className="p-5 md:p-6">
        <div className="min-h-[58px]">
          <h3 className="text-2xl font-black leading-tight text-ink">{model.name}</h3>
          {model.modelName ? (
            <p className="mt-1 text-sm font-bold text-forest">{model.modelName}</p>
          ) : null}
        </div>

        <div className="mt-5 rounded-lg bg-mist px-4 py-3">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">Valor referencial desde</p>
          <p className="mt-1 text-3xl font-black text-forest">{model.price}</p>
        </div>

        <ul className="mt-5 grid gap-2.5 text-sm text-ink">
          {model.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex gap-2.5 leading-6">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          <Button href={`/modelos/${model.slug}`} variant="secondary" className="px-4">
            Ver detalles <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button href={modelWhatsappUrl(model.name)} className="px-4">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Cotizar
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
