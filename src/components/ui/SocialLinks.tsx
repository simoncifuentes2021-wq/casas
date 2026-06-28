import { Facebook, Instagram, Mail, Music2, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

const links = [
  { label: "Instagram", href: siteConfig.social.instagram, icon: Instagram },
  { label: "Facebook", href: siteConfig.social.facebook, icon: Facebook },
  { label: "TikTok", href: siteConfig.social.tiktok, icon: Music2 },
  { label: "WhatsApp", href: siteConfig.social.whatsapp, icon: Phone },
  { label: "Correo", href: siteConfig.social.email, icon: Mail },
];

export function SocialLinks({ light = false }: { light?: boolean }) {
  const visibleLinks = links.filter((link) => link.href);

  return (
    <div className="flex flex-wrap gap-2">
      {visibleLinks.map((link) => {
        const Icon = link.icon;
        const isExternal = link.href.startsWith("http");

        return (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-md border transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
              light
                ? "border-white/20 text-white hover:bg-white/10 focus-visible:outline-white"
                : "border-ink/10 text-forest hover:bg-mist focus-visible:outline-brand"
            }`}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
