import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light" | "ghost";
};

const variants = {
  primary:
    "bg-brand text-white shadow-[0_14px_34px_rgba(107,142,50,0.28)] hover:-translate-y-0.5 hover:bg-forest hover:shadow-[0_18px_42px_rgba(36,65,38,0.30)] focus-visible:outline-brand",
  secondary:
    "bg-ink text-white shadow-soft hover:-translate-y-0.5 hover:bg-deep hover:shadow-premium focus-visible:outline-brand",
  light:
    "bg-white text-ink shadow-[0_16px_44px_rgba(7,16,13,0.20)] hover:-translate-y-0.5 hover:bg-mist focus-visible:outline-brand",
  ghost:
    "border border-white/25 bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline-white",
};

export function Button({
  href,
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const shared = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
    variants[variant],
    className,
  );

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    const externalProps = href.startsWith("http")
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    return (
      <a href={href} className={shared} {...externalProps} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={shared} {...props}>
      {children}
    </Link>
  );
}
