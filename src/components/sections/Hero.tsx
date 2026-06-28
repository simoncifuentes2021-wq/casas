"use client";

import { ArrowRight, CheckCircle2, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { whatsappUrl } from "@/lib/whatsapp";

const indicators = [
  { label: "Proyectos personalizables", icon: CheckCircle2 },
  { label: "Ubicados en Victoria", icon: MapPin },
  { label: "Asesoría directa", icon: ShieldCheck },
];

const heroStats = [
  { value: "36 a 110 m²", label: "modelos base" },
  { value: "Victoria", label: "La Araucanía" },
  { value: "WhatsApp", label: "cotización directa" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink pt-28 text-white md:pt-32">
      <div className="absolute inset-0 -z-10">
        <ImageWithFallback
          src="/images/hero-casas-bae.png"
          alt="Casa personalizada de Casas BAE en La Araucanía"
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,16,13,0.86)_0%,rgba(7,16,13,0.62)_42%,rgba(10,42,29,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink/80 to-transparent" />
      </div>

      <div className="container-page grid min-h-[640px] items-center gap-10 pb-16 pt-10 md:min-h-[760px] lg:grid-cols-[1.08fr_0.92fr] lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-5 inline-flex rounded-md border border-white/[0.15] bg-white/10 px-4 py-2 text-sm font-bold text-white/[0.86] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur">
            Ubicadas en Victoria, el corazón de La Araucanía
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.04] text-balance md:text-6xl lg:text-7xl">
            Casas personalizadas en La Araucanía
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.78] md:text-xl">
            Diseñamos y construimos proyectos habitacionales adaptados a tu terreno, estilo de vida y presupuesto.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/modelos" variant="light" className="px-6">
              Conoce nuestros modelos <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href={whatsappUrl()} variant="ghost" className="px-6">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Cotiza por WhatsApp
            </Button>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {indicators.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.15 + index * 0.08 }}
                  className="flex min-h-16 items-center gap-3 rounded-lg border border-white/[0.12] bg-white/10 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur"
                >
                  <Icon className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  <span className="text-sm font-bold leading-5 text-white/[0.88]">{item.label}</span>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-5 grid grid-cols-3 overflow-hidden rounded-lg border border-white/[0.12] bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur lg:hidden">
            {heroStats.map((stat) => (
              <div key={stat.label} className="border-r border-white/10 p-3 last:border-r-0">
                <p className="text-sm font-black leading-5 text-white">{stat.value}</p>
                <p className="mt-1 text-[11px] font-medium leading-4 text-white/[0.58]">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block"
        >
          <div className="overflow-hidden rounded-lg border border-white/[0.14] bg-white/10 shadow-premium backdrop-blur-xl">
            <div className="border-b border-white/[0.12] p-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">Desde</p>
              <p className="mt-2 text-5xl font-black">$5.790.000</p>
              <p className="mt-4 text-sm leading-6 text-white/70">
                Valores referenciales para proyectos personalizables. Evaluamos terreno, distribución y terminaciones contigo.
              </p>
            </div>
            <div className="grid grid-cols-3 divide-x divide-white/10">
              {heroStats.map((stat) => (
                <div key={stat.label} className="p-5">
                  <p className="text-lg font-black">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium leading-5 text-white/[0.56]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
