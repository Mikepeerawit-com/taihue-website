import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SupplierForm } from "@/components/Forms";
import Header, { Footer } from "@/components/Header";
import { ContactSection, PageHero, Photo, PlainList, SectionHead, TextList } from "@/components/ui";
import { getDictionary, isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/meta";

type Props = { params: Promise<{ lang: string }> };

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
              <SectionHead title={p.whyTitle} />
            </div>
            <div className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <Photo src="/images/racking-materials.webp" alt={t.photos.materials} className="reveal" />
              <TextList items={p.why} />
            </div>
          </div>
        </section>

        {/* What we need from suppliers */}
        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="reveal">
              <SectionHead title={p.needTitle} />
            </div>
            <PlainList items={p.needs} cols={3} />
          </div>
        </section>

        {/* Supplier sign-up form */}
        <section id="form" className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:gap-14">
            <div className="reveal lg:col-span-2">
              <SectionHead title={p.formTitle} lead={t.supplier.lead} center={false} />
            </div>
            <div className="rounded-lg border border-t-4 border-slate-200 border-t-slate-900 bg-white p-6 sm:p-10 lg:col-span-3">
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
