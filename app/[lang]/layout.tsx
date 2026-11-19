import type { Metadata, Viewport } from "next";
import { Noto_Sans_SC, Noto_Sans_Thai } from "next/font/google";
import { notFound } from "next/navigation";
import { getDictionary, htmlLang, isLocale, locales, siteUrl } from "@/lib/i18n";
import { pageMetadata } from "@/lib/meta";
import "../globals.css";

const notoThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-thai",
  display: "swap",
});

const notoSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sc",
  display: "swap",
  preload: false,
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = { themeColor: "#c62b30" };

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return { metadataBase: new URL(siteUrl), ...pageMetadata(lang, "", t.meta.title, t.meta.description) };
}

export default async function LangLayout({ children, params }: Props & { children: React.ReactNode }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <html lang={htmlLang[lang]} className={`${notoThai.variable} ${notoSC.variable}`}>
      <body className="bg-white antialiased">{children}</body>
    </html>
  );
}
