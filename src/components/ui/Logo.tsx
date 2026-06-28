"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "light", className = "" }: LogoProps) {
  const src = variant === "dark" ? siteConfig.logoDark : siteConfig.logoLight;

  return (
    <Image
      src={src}
      width={160}
      height={40}
      alt={siteConfig.logoAlt}
      className={className}
      priority
    />
  );
}
