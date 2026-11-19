import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header, { Footer } from "@/components/Header";
import { contactEmail, getDictionary, isLocale } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return {
    title: getDictionary(lang).thanks.title,
    robots: { index: false, follow: true },
    alternates: { canonical: `/${lang}/thanks` },
  };
}

export default async function Thanks({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);
  return (
    <div className="flex min-h-screen flex-col">
      <Header lang={lang} t={t} path="/thanks" minimal />
      <main className="flex flex-1 items-center">
        <div className="mx-auto max-w-xl px-4 py-20 text-center sm:px-6">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
              <path d="M4 10.5l4 4 8-9" />
            </svg>
          </span>
          <h1 className="mt-6 text-2xl leading-snug font-bold text-slate-900 sm:text-3xl">{t.thanks.title}</h1>
          <p className="mt-4 text-slate-600">
            {t.thanks.body}{" "}
            <a href={`mailto:${contactEmail}`} className="font-medium text-brand-700 hover:underline">
              {contactEmail}
            </a>
          </p>
          <a href={`/${lang}`} className="mt-8 inline-block rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700">
            {t.thanks.back}
          </a>
        </div>
      </main>
      <Footer lang={lang} t={t} path="/thanks" />
    </div>
  );
}
