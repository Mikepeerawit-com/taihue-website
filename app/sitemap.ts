import type { MetadataRoute } from "next";
import { locales, siteUrl } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l === "zh" ? "zh-Hans" : l, `${siteUrl}/${l}`]));
  return locales.map((l) => ({
    url: `${siteUrl}/${l}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: l === "en" ? 1 : 0.9,
    alternates: { languages },
  }));
}
