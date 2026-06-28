import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navItems, siteConfig } from "@/config/site";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { whatsappUrl } from "@/lib/whatsapp";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-ink pb-24 pt-16 text-white md:pb-10 md:pt-20">
      <div className="container-page">
        <div className="rounded-lg border border-white/10 bg-white/[0.06] p-6 shadow-premium md:p-8">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.8fr_1fr]">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <Logo className="h-auto w-[140px]" variant="light" />
                <div>
                  <p className="font-black">Casas BAE</p>
                  <p className="text-sm text-white/60">{siteConfig.tagline}</p>
                </div>
              </div>
              <p className="max-w-md text-sm leading-7 text-white/70">
                Diseñamos y construimos casas personalizadas en Victoria, acompañando a cada familia con comunicación directa, criterios claros y proyectos adaptables.
              </p>
              <div className="mt-6">
                <SocialLinks light />
              </div>
            </div>

            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.18em] text-brand">Navegación</h2>
              <ul className="mt-5 grid gap-3 text-sm">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-white/[0.72] transition hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.18em] text-brand">Contacto</h2>
              <ul className="mt-5 grid gap-4 text-sm text-white/75">
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  {siteConfig.location}
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  <a href={`mailto:${siteConfig.email}`} className="break-all transition hover:text-white">
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs leading-6 text-white/45">
            © {new Date().getFullYear()} Casas BAE. Valores referenciales sujetos a evaluación de proyecto.
          </div>
        </div>
      </div>
    </footer>
  );
}
