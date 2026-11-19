import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SupplierForm } from "@/components/Forms";
import Header, { Footer } from "@/components/Header";
import { CHECK, ContactSection, Icon, PageHero, Photo, SectionHead } from "@/components/ui";
import { getDictionary, isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/meta";

type Props = { params: Promise<{ lang: string }> };

// Same order as p.why: steady orders, one contact, languages
const WHY_ICONS = [
  "M12 3l8.5 4.5v9L12 21l-8.5-4.5v-9L12 3zM3.5 7.5L12 12l8.5-4.5M12 12v9M7.7 5.3l8.6 4.5",
  "M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20M10 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM20 20v-1.5a3.5 3.5 0 0 0-2.5-3.3M15 4.2a3.5 3.5 0 0 1 0 6.6",
  "M4 5h9a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 3v-3H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM15 10h4a2 2 0 0 1 2 2v4a1 1 0 0 1-1 1h-1v2.5L16 17h-3",
];
// Same order as p.needs: Thai company, tax invoice, stock / lead time
const NEED_ICONS = [
  "M4 20V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v15M15 9h4a1 1 0 0 1 1 1v10M2 20h20M8 8h3M8 12h3M8 16h3",
  "M7 3h7l4 4v14H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM14 3v4h4M9 12h6M9 16h6",
  "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3.5 2",
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const p = getDictionary(lang).supplierPage;
  return pageMetadata(lang, "/suppliers", p.metaTitle, p.metaDescription);
}

export default async function SuppliersPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);
  const p = t.supplierPage;

  return (
    <>
      <Header lang={lang} t={t} path="/suppliers" />
      <main>
        <PageHero eyebrow={p.eyebrow} title={p.title} lead={p.lead} cta={p.toForm} href="#form" src="/images/racking-installation.webp" alt={t.photos.install} />

        {/* Why sell through Taihue */}
        <section className="overflow-hidden py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="reveal">
              <SectionHead title={p.whyTitle} lead={p.whyLead} />
            </div>
            <div className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <Photo src="/images/racking-materials.webp" alt={t.photos.materials} className="reveal" />
              <ul className="space-y-8">
                {p.why.map((w, i) => (
                  <li key={w.title} className="reveal flex gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                      <Icon d={WHY_ICONS[i] ?? CHECK} />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">{w.title}</h3>
                      <p className="mt-2 text-slate-600">{w.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* What we need from suppliers */}
        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="reveal">
              <SectionHead title={p.needTitle} lead={p.needLead} />
            </div>
            <ul className="mt-14 grid gap-5 md:grid-cols-3">
              {p.needs.map((n, i) => (
                <li key={n.title} className="reveal group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-slate-900/10">
                  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-600 transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon d={NEED_ICONS[i] ?? CHECK} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">{n.title}</h3>
                  <p className="mt-2 text-slate-600">{n.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Supplier sign-up form */}
        <section id="form" className="bg-gradient-to-b from-white to-slate-50 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:gap-14">
            <div className="reveal lg:col-span-2">
              <SectionHead title={p.formTitle} lead={t.supplier.lead} center={false} />
            </div>
            <div className="reveal rounded-3xl border-t-4 border-slate-900 bg-white p-6 shadow-2xl ring-1 shadow-slate-900/10 ring-slate-900/5 sm:p-10 lg:col-span-3">
              <SupplierForm lang={lang} t={t} />
            </div>
          </div>
        </section>

        <ContactSection t={t} />
      </main>
      <Footer lang={lang} t={t} path="/suppliers" />
    </>
  );
}
