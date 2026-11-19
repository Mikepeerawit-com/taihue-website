import type { MetadataRoute } from "next";
import { locales, siteUrl } from "@/lib/i18n";

export const dynamic = "force-static";

const pages = [
  { path: "", priority: 1 },
  { path: "/quote", priority: 0.8 },
  { path: "/suppliers", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ path, priority }) => {
    const languages = Object.fromEntries(locales.map((l) => [l === "zh" ? "zh-Hans" : l, `${siteUrl}/${l}${path}`]));
    return locales.map((l) => ({
      url: `${siteUrl}/${l}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: l === "en" ? priority : priority - 0.1,
      alternates: { languages },
    }));
  });
}
