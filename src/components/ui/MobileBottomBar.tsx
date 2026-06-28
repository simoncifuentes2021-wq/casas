import { Home, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { whatsappUrl } from "@/lib/whatsapp";

export function MobileBottomBar() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-ink/10 bg-white/96 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 text-xs font-bold text-ink shadow-premium backdrop-blur md:hidden">
      <Link className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-md px-3 py-2 transition hover:bg-mist" href="/modelos">
        <Home className="h-5 w-5" aria-hidden="true" />
        Modelos
      </Link>
      <a
        className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-md bg-brand px-3 py-2 text-white shadow-[0_12px_30px_rgba(107,142,50,0.26)] transition hover:bg-forest"
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        WhatsApp
      </a>
      <Link className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-md px-3 py-2 transition hover:bg-mist" href="/contacto">
        <Phone className="h-5 w-5" aria-hidden="true" />
        Contacto
      </Link>
    </nav>
  );
}
