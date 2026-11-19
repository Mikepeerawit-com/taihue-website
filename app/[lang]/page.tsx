import { notFound } from "next/navigation";
import { QuoteForm, SupplierForm } from "@/components/Forms";
import Header, { Footer } from "@/components/Header";
import { contactEmail, getDictionary, isLocale, siteUrl } from "@/lib/i18n";

function SectionHead({ title, lead, center = true }: { title: string; lead: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <h2 className="text-2xl leading-snug font-bold tracking-tight text-neutral-900 sm:text-3xl">{title}</h2>
      <p className="mt-3 text-neutral-600">{lead}</p>
    </div>
  );
}

const Check = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 h-4 w-4 shrink-0" aria-hidden="true">
    <path d="M4 10.5l4 4 8-9" />
  </svg>
);

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
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 text-white">
          <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/10" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-black/10" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
            <p className="text-sm font-semibold tracking-wide text-white/85 uppercase">{t.hero.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-3xl leading-snug font-bold tracking-tight sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-tight">
              {t.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base text-white/90 sm:text-lg">{t.hero.lead}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#quote" className="rounded-lg bg-white px-6 py-3 text-center font-semibold text-brand-700 shadow-sm hover:bg-brand-50">
                {t.hero.primary}
              </a>
              <a href="#suppliers" className="rounded-lg border border-white/70 px-6 py-3 text-center font-semibold text-white hover:bg-white/10">
                {t.hero.secondary}
              </a>
            </div>
            <ul className="mt-10 flex flex-col gap-2 text-sm text-white/90 sm:flex-row sm:flex-wrap sm:gap-x-8">
              {t.hero.points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <Check />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead title={t.services.title} lead={t.services.lead} />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.services.items.map((s) => (
                <li key={s.title} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <span className="block h-1 w-10 rounded-full bg-brand-600" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold text-neutral-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center text-sm text-neutral-600">{t.services.note}</p>
          </div>
        </section>

        {/* Why */}
        <section id="why" className="bg-neutral-50 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead title={t.why.title} lead={t.why.lead} />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {t.why.items.map((w) => (
                <li key={w.title} className="flex gap-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-neutral-200">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                      <path d="M4 10.5l4 4 8-9" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900">{w.title}</h3>
                    <p className="mt-1.5 text-sm text-neutral-600">{w.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead title={t.how.title} lead={t.how.lead} />
            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.how.steps.map((s, i) => (
                <li key={s.title} className="relative rounded-xl border border-neutral-200 p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-base font-bold text-white">{i + 1}</span>
                  <h3 className="mt-4 text-lg font-semibold text-neutral-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Quote form */}
        <section id="quote" className="bg-brand-50 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-2">
              <SectionHead title={t.quote.title} lead={t.quote.lead} center={false} />
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-neutral-200 sm:p-8 lg:col-span-3">
              <QuoteForm lang={lang} t={t} />
            </div>
          </div>
        </section>

        {/* Supplier form */}
        <section id="suppliers" className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-2">
              <SectionHead title={t.supplier.title} lead={t.supplier.lead} center={false} />
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-neutral-200 sm:p-8 lg:col-span-3">
              <SupplierForm lang={lang} t={t} />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-brand-700 py-16 text-center text-white sm:py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6">
            <h2 className="text-2xl leading-snug font-bold tracking-tight sm:text-3xl">{t.contact.title}</h2>
            <p className="mt-3 text-white/90">{t.contact.lead}</p>
            <p className="mt-8 text-sm text-white/80">{t.contact.emailLabel}</p>
            <a href={`mailto:${contactEmail}`} className="mt-1 inline-block text-2xl font-semibold break-all underline-offset-4 hover:underline sm:text-3xl">
              {contactEmail}
            </a>
          </div>
        </section>
      </main>
      <Footer lang={lang} t={t} />
    </>
  );
}
