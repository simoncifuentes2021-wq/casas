"use client";

import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/config/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled ? "bg-ink/92 shadow-premium backdrop-blur" : "bg-ink/70 backdrop-blur-sm"
      }`}
    >
      <nav className="container-page flex min-h-[72px] items-center justify-between gap-3 py-3 text-white md:h-20 md:py-0">
        <Link href="/" className="flex items-center gap-3" aria-label="Casas BAE inicio">
          <Logo className="h-auto w-[106px] sm:w-[120px]" variant="light" />
          <span className="leading-tight hidden sm:block">
            <span className="block text-base font-bold">Casas BAE</span>
            <span className="text-xs text-white/[0.65]">Victoria, La Araucanía</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-white/80 hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 items-center gap-2 rounded-md bg-brand px-4 text-sm font-bold text-white transition hover:bg-[#789c3f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {siteConfig.phoneDisplay}
          </a>
          <button
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/[0.15] text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-ink lg:hidden"
          >
            <div className="container-page grid gap-2 py-5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-semibold text-white/[0.85] hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-brand px-4 py-3 text-sm font-bold text-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Cotizar por WhatsApp
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
