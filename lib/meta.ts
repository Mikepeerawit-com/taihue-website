import type { Metadata } from "next";
import { locales, ogLocale, type Locale } from "@/lib/i18n";

/** Per-page title, description, canonical, hreflang and social tags. `path` is "", "/quote" or "/suppliers". */
export function pageMetadata(lang: Locale, path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}${path}`,
      languages: { en: `/en${path}`, th: `/th${path}`, "zh-Hans": `/zh${path}`, "x-default": `/en${path}` },
    },
    openGraph: {
      type: "website",
      url: `/${lang}${path}`,
      siteName: "Taihue",
      title,
      description,
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Taihue" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
}
