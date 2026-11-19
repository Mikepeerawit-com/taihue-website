import { notFound } from "next/navigation";
import Header, { Footer } from "@/components/Header";
import { ARROW, CHECK, CheckList, ContactSection, Icon, Photo, SectionHead, Steps } from "@/components/ui";
import { contactEmail, getDictionary, isLocale, siteUrl } from "@/lib/i18n";

// Same order as t.services.items: industrial, MRO, safety, office, canteen, general
const SERVICE_ICONS = [
  "M3 21V10l6 3.5V10l6 3.5V4h5v17H3zM7.5 17h2M12.5 17h2M17 8v0",
  "M14.5 6.5a4 4 0 0 0-5.4 5.1L3.5 17.2a1.6 1.6 0 0 0 0 2.3l1 1a1.6 1.6 0 0 0 2.3 0l5.6-5.6a4 4 0 0 0 5.1-5.4l-2.6 2.6-2.5-.6-.6-2.5 2.7-2.5z",
  "M12 3l8 3v6c0 4.6-3.2 7.9-8 9-4.8-1.1-8-4.4-8-9V6l8-3zM8.5 12l2.5 2.5 4.5-5",
  "M4 20V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v15M15 9h4a1 1 0 0 1 1 1v10M2 20h20M8 8h3M8 12h3M8 16h3",
  "M7 3v7a2 2 0 0 0 2 2v9M5 3v5M9 3v5M17 21v-8M17 13c-2 0-3-2.2-3-5s1.3-5 3-5v10z",
  "M12 3l8.5 4.5v9L12 21l-8.5-4.5v-9L12 3zM3.5 7.5L12 12l8.5-4.5M12 12v9M7.7 5.3l8.6 4.5",
];
// Same order as t.why.items: network, fast quotes, tax documents, languages
const WHY_ICONS = [
  "M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  "M13 3L4.5 13.5H11L10 21l8.5-10.5H12L13 3z",
  "M7 3h7l4 4v14H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM14 3v4h4M9 12h6M9 16h6",
  "M4 5h9a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 3v-3H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM15 10h4a2 2 0 0 1 2 2v4a1 1 0 0 1-1 1h-1v2.5L16 17h-3",
];
const POINT_ICONS = [
  "M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20M10 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM20 20v-1.5a3.5 3.5 0 0 0-2.5-3.3M15 4.2a3.5 3.5 0 0 1 0 6.6",
  WHY_ICONS[2],
  WHY_ICONS[3],
];

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
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-900/20" aria-hidden="true" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/30" aria-hidden="true" />
          <div className="absolute -bottom-40 -left-40 -z-10 h-[32rem] w-[32rem] rounded-full bg-brand-600/25 blur-3xl" aria-hidden="true" />

          <div className="mx-auto flex min-h-[min(calc(92svh-4rem),46rem)] max-w-6xl flex-col justify-center px-4 pt-20 pb-16 sm:px-6 sm:pt-28 sm:pb-20">
            <p className="fade-up inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase backdrop-blur sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-brand-500" aria-hidden="true" />
              {t.hero.eyebrow}
            </p>
            <h1 className="fade-up mt-6 max-w-4xl text-4xl leading-tight font-bold tracking-tight text-balance sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-[1.12]" style={{ "--d": "80ms" } as React.CSSProperties}>
              {t.hero.title}
            </h1>
            <p className="fade-up mt-6 max-w-2xl text-lg text-slate-200 sm:text-xl" style={{ "--d": "160ms" } as React.CSSProperties}>
              {t.hero.lead}
            </p>
            <div className="fade-up mt-9 flex flex-col gap-3 sm:flex-row" style={{ "--d": "240ms" } as React.CSSProperties}>
              <a
                href={`/${lang}/quote`}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-900/40 transition hover:-translate-y-0.5 hover:bg-brand-500"
              >
                {t.hero.primary}
                <Icon d={ARROW} className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={`/${lang}/suppliers`}
                className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                {t.hero.secondary}
              </a>
            </div>
          </div>

          {/* Trust strip */}
          <div className="border-t border-white/10 bg-slate-950/60 backdrop-blur-md">
            <ul className="fade-up mx-auto grid max-w-6xl gap-x-8 gap-y-4 px-4 py-6 sm:grid-cols-3 sm:px-6" style={{ "--d": "320ms" } as React.CSSProperties}>
              {t.hero.points.map((p, i) => (
                <li key={p} className="flex items-center gap-3 text-sm font-medium text-slate-100 sm:text-base">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600/20 text-brand-200 ring-1 ring-brand-500/40">
                    <Icon d={POINT_ICONS[i] ?? CHECK} className="h-5 w-5" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="reveal">
              <SectionHead title={t.services.title} lead={t.services.lead} />
            </div>
            <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {t.services.items.map((s, i) => (
                <li
                  key={s.title}
                  className="reveal group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-slate-900/10"
                >
                  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-600 transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon d={SERVICE_ICONS[i] ?? CHECK} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-slate-600">{s.desc}</p>
                </li>
              ))}
            </ul>
            <p className="reveal mx-auto mt-10 max-w-2xl rounded-xl bg-slate-50 px-6 py-4 text-center text-slate-600 ring-1 ring-slate-200">{t.services.note}</p>
          </div>
        </section>

        {/* Why: alternating photo + text */}
        <section id="why" className="overflow-hidden bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="reveal">
              <SectionHead title={t.why.title} lead={t.why.lead} />
            </div>
            {[
              { src: "/images/delivery-container.webp", alt: t.photos.delivery, from: 0 },
              { src: "/images/racking-installation.webp", alt: t.photos.install, from: 2 },
            ].map((row, r) => (
              <div key={row.src} className="mt-16 grid items-center gap-10 sm:mt-20 lg:grid-cols-2 lg:gap-16">
                <Photo src={row.src} alt={row.alt} className={`reveal ${r % 2 ? "lg:order-2" : ""}`} />
                <ul className="space-y-8">
                  {t.why.items.slice(row.from, row.from + 2).map((w, i) => (
                    <li key={w.title} className="reveal flex gap-5">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-sm ring-1 ring-slate-200">
                        <Icon d={WHY_ICONS[row.from + i] ?? CHECK} />
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">{w.title}</h3>
                        <p className="mt-2 text-slate-600">{w.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <Steps title={t.how.title} lead={t.how.lead} steps={t.how.steps} />

        {/* Choose your path: buyers or suppliers */}
        <section id="start" className="bg-gradient-to-b from-brand-50 to-white py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="reveal">
              <SectionHead title={t.choose.title} lead={t.choose.lead} />
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8">
              {[
                { c: t.choose.buyer, href: `/${lang}/quote`, icon: SERVICE_ICONS[0], primary: true },
                { c: t.choose.supplier, href: `/${lang}/suppliers`, icon: SERVICE_ICONS[5], primary: false },
              ].map(({ c, href, icon, primary }) => (
                <div
                  key={href}
                  className={`reveal flex flex-col rounded-3xl border-t-4 bg-white p-8 shadow-2xl ring-1 shadow-slate-900/10 ring-slate-900/5 transition duration-300 hover:-translate-y-1 sm:p-10 ${primary ? "border-brand-600" : "border-slate-900"}`}
                >
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${primary ? "bg-brand-50 text-brand-600" : "bg-slate-100 text-slate-900"}`}>
                    <Icon d={icon} className="h-7 w-7" />
                  </span>
                  <p className={`mt-6 text-sm font-semibold tracking-wider uppercase ${primary ? "text-brand-700" : "text-slate-600"}`}>{c.tag}</p>
                  <h3 className="mt-2 text-2xl leading-snug font-bold tracking-tight text-slate-900 sm:text-3xl sm:leading-snug">{c.title}</h3>
                  <CheckList items={c.points} className="mt-6 mb-9" />
                  <a
                    href={href}
                    className={`group mt-auto inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 ${primary ? "bg-brand-600 shadow-brand-600/25 hover:bg-brand-700" : "bg-slate-900 shadow-slate-900/20 hover:bg-slate-700"}`}
                  >
                    {c.button}
                    <Icon d={ARROW} className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection t={t} />
      </main>
      <Footer lang={lang} t={t} />
    </>
  );
}
