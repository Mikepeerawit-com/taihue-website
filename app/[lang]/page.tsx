import { notFound } from "next/navigation";
import Header, { Footer } from "@/components/Header";
import { ARROW, ContactSection, Icon, Photo, PlainList, SectionHead, Steps, TextList } from "@/components/ui";
import { contactEmail, getDictionary, isLocale, siteUrl } from "@/lib/i18n";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Taihue International Medical Co., Ltd.",
    alternateName: ["Taihue", "ไทหือ อินเตอร์เนชั่นแนล เมดิเคิล"],
    url: siteUrl,
    logo: `${siteUrl}/logo-red.png`,
    email: contactEmail,
    description: t.meta.description,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header lang={lang} t={t} />
      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-slate-950 text-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-warehouse.webp"
            alt={t.photos.hero}
            width={1707}
            height={960}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-[50%_65%]"
          />
          <div className="absolute inset-0 -z-10 bg-slate-950/65" aria-hidden="true" />

          <div className="mx-auto flex min-h-[min(calc(92svh-4rem),46rem)] max-w-6xl flex-col justify-center px-4 pt-20 pb-16 sm:px-6 sm:pt-28 sm:pb-20">
            <p className="fade-up text-sm font-semibold tracking-wider text-brand-200 uppercase">{t.hero.eyebrow}</p>
            <h1 className="fade-up mt-6 max-w-4xl text-4xl leading-tight font-bold tracking-tight text-balance sm:text-5xl sm:leading-tight" style={{ "--d": "80ms" } as React.CSSProperties}>
              {t.hero.title}
            </h1>
            <p className="fade-up mt-6 max-w-2xl text-lg text-slate-200 sm:text-xl" style={{ "--d": "160ms" } as React.CSSProperties}>
              {t.hero.lead}
            </p>
            <div className="fade-up mt-9 flex flex-col gap-3 sm:flex-row" style={{ "--d": "240ms" } as React.CSSProperties}>
              <a
                href={`/${lang}/quote`}
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-brand-500"
              >
                {t.hero.primary}
                <Icon d={ARROW} className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </section>

        {/* Services */}
        <section id="services" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="reveal">
              <SectionHead title={t.services.title} lead={t.services.lead} />
            </div>
            <PlainList items={t.services.items} />
            <p className="mt-8 text-slate-600">{t.services.note}</p>
          </div>
        </section>

        {/* Why: alternating photo + text */}
        <section id="why" className="overflow-hidden bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="reveal">
              <SectionHead title={t.why.title} />
            </div>
            {[
              { src: "/images/delivery-container.webp", alt: t.photos.delivery, from: 0 },
              { src: "/images/racking-installation.webp", alt: t.photos.install, from: 2 },
            ].map((row, r) => (
              <div key={row.src} className="mt-16 grid items-center gap-10 sm:mt-20 lg:grid-cols-2 lg:gap-16">
                <Photo src={row.src} alt={row.alt} className={`reveal ${r % 2 ? "lg:order-2" : ""}`} />
                <TextList items={t.why.items.slice(row.from, row.from + 2)} />
              </div>
            ))}
          </div>
        </section>

        <Steps title={t.how.title} steps={t.how.steps} />

        {/* Buyer-first call to action; suppliers get a small text link */}
        <section id="start" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead title={t.choose.title} lead={t.choose.desc} />
            <a
              href={`/${lang}/quote`}
              className="group mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-brand-700"
            >
              {t.choose.button}
              <Icon d={ARROW} className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="mt-6 text-sm text-slate-600">
              {t.choose.supplierPrompt}{" "}
              <a href={`/${lang}/suppliers`} className="font-medium text-slate-900 underline underline-offset-4 hover:text-brand-700">
                {t.choose.supplierLink}
              </a>
            </p>
          </div>
        </section>

        <ContactSection t={t} />
      </main>
      <Footer lang={lang} t={t} />
    </>
  );
}
