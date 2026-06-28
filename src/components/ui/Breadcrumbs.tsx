import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Breadcrumbs({
  items,
  tone = "light",
}: {
  items: Array<{ label: string; href?: string }>;
  tone?: "light" | "dark";
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("text-sm", tone === "dark" ? "text-white/70" : "text-muted")}
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 ? <ChevronRight className="h-4 w-4" /> : null}
            {item.href ? (
              <Link
                className={cn(
                  "transition",
                  tone === "dark" ? "hover:text-white" : "hover:text-forest",
                )}
                href={item.href}
              >
                {item.label}
              </Link>
            ) : (
              <span
                aria-current="page"
                className={cn(
                  "font-medium",
                  tone === "dark" ? "text-white" : "text-ink",
                )}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
