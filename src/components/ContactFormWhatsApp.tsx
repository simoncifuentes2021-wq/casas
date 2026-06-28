"use client";

import { FormEvent, useState } from "react";
import { MessageCircle } from "lucide-react";
import { models } from "@/data/models";
import { contactWhatsappUrl } from "@/lib/whatsapp";

export function ContactFormWhatsApp() {
  const defaultModel = models[0]?.name ?? "Proyecto personalizado";
  const [values, setValues] = useState({
    name: "",
    phone: "",
    model: defaultModel,
    message: "",
  });

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(contactWhatsappUrl(values), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={submit} className="rounded-lg bg-white p-5 shadow-soft md:p-6">
      <div className="grid gap-4">
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Nombre
          <input
            id="contact-name"
            name="name"
            value={values.name}
            onChange={(event) => setValues({ ...values, name: event.target.value })}
            className="min-h-12 rounded-md border border-ink/[0.15] px-4 focus:border-brand focus:outline-none"
            placeholder="Tu nombre"
            autoComplete="name"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Teléfono
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={(event) => setValues({ ...values, phone: event.target.value })}
            className="min-h-12 rounded-md border border-ink/[0.15] px-4 focus:border-brand focus:outline-none"
            placeholder="+56 9..."
            autoComplete="tel"
            inputMode="tel"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Modelo de interés
          <select
            id="contact-model"
            name="model"
            value={values.model}
            onChange={(event) => setValues({ ...values, model: event.target.value })}
            className="min-h-12 rounded-md border border-ink/[0.15] bg-white px-4 focus:border-brand focus:outline-none"
          >
            {models.map((model) => (
              <option key={model.slug}>{model.name}</option>
            ))}
            <option>Proyecto personalizado</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Mensaje
          <textarea
            id="contact-message"
            name="message"
            value={values.message}
            onChange={(event) => setValues({ ...values, message: event.target.value })}
            className="min-h-32 rounded-md border border-ink/[0.15] px-4 py-3 focus:border-brand focus:outline-none"
            placeholder="Cuéntanos dónde está tu terreno y qué necesitas."
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-bold text-white shadow-[0_14px_34px_rgba(107,142,50,0.24)] transition hover:-translate-y-0.5 hover:bg-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        Enviar por WhatsApp
      </button>
    </form>
  );
}
