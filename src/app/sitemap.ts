import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { models } from "@/data/models";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/modelos", "/quienes-somos", "/contacto"];
  const modelRoutes = models.map((model) => `/modelos/${model.slug}`);
  const now = new Date();

  return [...staticRoutes, ...modelRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/modelos") ? 0.85 : 0.7,
  }));
}
