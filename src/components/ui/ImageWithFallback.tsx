"use client";

import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ImageWithFallback({
  src,
  alt,
  className,
  fill = true,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex h-full min-h-64 w-full flex-col items-center justify-center bg-gradient-to-br from-mist via-white to-[#dfe6d5] p-8 text-center text-forest",
          className,
        )}
      >
        <ImageIcon className="mb-4 h-10 w-10" aria-hidden="true" />
        <p className="text-sm font-semibold">{alt}</p>
        <p className="mt-2 max-w-xs text-xs text-muted">
          Reemplaza esta imagen en <span className="font-mono">{src}</span>
        </p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      priority={priority}
      sizes={sizes}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
