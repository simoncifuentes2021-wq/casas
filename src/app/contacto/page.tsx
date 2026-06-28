import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactFormWhatsApp } from "@/components/ContactFormWhatsApp";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/config/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contacto",
  description:
    "Contacta a Casas BAE en Victoria, Región de La Araucanía. Cotiza casas personalizadas por WhatsApp, teléfono o correo.",
  path: "/contacto",
});

export default function ContactoPage() {
  const breadcrumbs = [
    { name: "Inicio", href: "/" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <section className="bg-ink pt-32 text-white">
        <div className="container-page pb-14">
          <Breadcrumbs tone="dark" items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} />
          <h1 className="mt-8 text-4xl font-black md:text-6xl">Contacto</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/[0.72]">
            Cuéntanos qué modelo te interesa o qué proyecto tienes en mente. Te respondemos por WhatsApp.
          </p>
        </div>
      </section>
      <section className="bg-warm py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-lg bg-deep p-7 text-white shadow-soft">
            <h2 className="text-2xl font-bold">Datos de contacto</h2>
            <ul className="mt-6 grid gap-5 text-sm text-white/[0.78]">
              <li className="flex gap-3">
                <MessageCircle className="h-5 w-5 text-brand" aria-hidden="true" />
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp {siteConfig.phoneDisplay}</a>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-brand" aria-hidden="true" />
                {siteConfig.phoneDisplay}
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-brand" aria-hidden="true" />
                <a className="break-all hover:text-white" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-brand" aria-hidden="true" />
                {siteConfig.location}
              </li>
            </ul>
            <div className="mt-8">
              <SocialLinks light />
            </div>
          </div>
          <ContactFormWhatsApp />
        </div>
      </section>
    </>
  );
}
