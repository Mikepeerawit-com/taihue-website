import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QuoteForm } from "@/components/Forms";
import Header, { Footer } from "@/components/Header";
import { CheckList, ContactSection, PageHero, Photo, SectionHead, Steps } from "@/components/ui";
import { getDictionary, isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/meta";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const p = getDictionary(lang).quotePage;
  return pageMetadata(lang, "/quote", p.metaTitle, p.metaDescription);
}

export default async function QuotePage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);
  const p = t.quotePage;

  return (
    <>
      <Header lang={lang} t={t} path="/quote" />
      <main>
        <PageHero eyebrow={p.eyebrow} title={p.title} lead={p.lead} cta={p.toForm} href="#form" src="/images/delivery-container.webp" alt={t.photos.delivery} />

        <Steps title={p.howTitle} steps={t.how.steps} />

        {/* Quote form */}
        <section id="form" className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:gap-14">
            <div className="reveal lg:col-span-2">
              <SectionHead title={t.quote.title} lead={t.quote.lead} center={false} />
              <CheckList items={t.quote.points} className="mt-8" />
              <Photo src="/images/racking-materials.webp" alt={t.photos.materials} className="mt-12 hidden lg:block" />
            </div>
            <div className="rounded-lg border border-t-4 border-slate-200 border-t-brand-600 bg-white p-6 sm:p-10 lg:col-span-3 lg:self-start">
              <QuoteForm lang={lang} t={t} />
            </div>
          </div>
        </section>

        <ContactSection t={t} />
      </main>
      <Footer lang={lang} t={t} path="/quote" />
    </>
  );
}
