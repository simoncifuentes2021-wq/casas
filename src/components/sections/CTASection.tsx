"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { whatsappUrl } from "@/lib/whatsapp";

export function CTASection() {
  return (
    <section className="bg-deep py-20 text-white md:py-24">
      <motion.div
        className="container-page"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="rounded-lg border border-white/[0.12] bg-white/[0.08] p-7 text-center shadow-premium backdrop-blur md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-brand">Cotiza directo</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight md:text-5xl">
            Conversemos sobre la casa que quieres construir
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/[0.72]">
            Cuéntanos el modelo que te interesa, dónde está tu terreno y qué cambios necesitas. Te orientamos por WhatsApp.
          </p>
          <div className="mt-8">
            <Button href={whatsappUrl()} variant="light" className="px-7">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Cotizar por WhatsApp
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
