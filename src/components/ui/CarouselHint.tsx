import { cn } from "@/lib/utils";

export function CarouselHint({
  label,
  tone = "light",
}: {
  label: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="mt-2 flex items-center justify-center gap-3 md:hidden" aria-hidden="true">
      <span className={cn("text-xs font-semibold", tone === "dark" ? "text-white/70" : "text-muted")}>
        {label}
      </span>
      <span className="flex items-center gap-1.5">
        <span className="h-1.5 w-4 rounded-full bg-brand" />
        <span className={cn("h-1.5 w-1.5 rounded-full", tone === "dark" ? "bg-white/[0.28]" : "bg-ink/20")} />
        <span className={cn("h-1.5 w-1.5 rounded-full", tone === "dark" ? "bg-white/[0.28]" : "bg-ink/20")} />
      </span>
    </div>
  );
}
