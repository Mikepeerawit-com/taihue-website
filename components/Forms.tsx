import { formAction, siteUrl, type Dictionary, type Locale } from "@/lib/i18n";
import NextUrl from "./NextUrl";

const ACCEPT = ".xls,.xlsx,.pdf,.png,.jpg,.jpeg,.webp,image/*";

function Label({ text, optional }: { text: string; optional?: string }) {
  return (
    <span className="text-sm font-medium text-slate-800">
      {text}
      {optional ? <span className="ml-1 font-normal text-slate-500">({optional})</span> : <span className="ml-0.5 text-brand-600">*</span>}
    </span>
  );
}

function Shell({
  lang,
  t,
  subject,
  formType,
  submit,
  children,
}: {
  lang: Locale;
  t: Dictionary;
  subject: string;
  formType: string;
  submit: string;
  children: React.ReactNode;
}) {
  const f = t.form;
  return (
    <form action={formAction} method="POST" encType="multipart/form-data" className="grid gap-4 sm:grid-cols-2">
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="form" value={formType} />
      <input type="hidden" name="language" value={lang} />
      <NextUrl fallback={`${siteUrl}/${lang}/thanks`} path={`/${lang}/thanks`} />
      {/* Honeypot: hidden from people, bots that fill it are dropped by FormSubmit */}
      <div className="hidden" aria-hidden="true">
        <label>
          {f.honeypot}
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className="block">
        <Label text={f.company} />
        <input className="field" type="text" name="company" required autoComplete="organization" />
      </label>
      <label className="block">
        <Label text={f.contact} />
        <input className="field" type="text" name="contact_name" required autoComplete="name" />
      </label>
      <label className="block">
        <Label text={f.email} />
        <input className="field" type="email" name="email" required autoComplete="email" />
      </label>
      <label className="block">
        <Label text={f.phone} />
        <input className="field" type="tel" name="phone" required autoComplete="tel" />
      </label>
      {children}
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full rounded-xl bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:-translate-y-0.5 hover:bg-brand-700 focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:outline-none sm:w-auto"
        >
          {submit}
        </button>
      </div>
    </form>
  );
}

function FileField({ label, t }: { label: string; t: Dictionary }) {
  return (
    <label className="block sm:col-span-2">
      <Label text={label} optional={t.form.optional} />
      <input
        className="mt-1 block w-full rounded-lg border border-dashed border-slate-300 bg-white text-sm text-slate-600 file:mr-3 file:cursor-pointer file:border-0 file:bg-brand-50 file:px-4 file:py-2.5 file:font-medium file:text-brand-700"
        type="file"
        name="attachment"
        accept={ACCEPT}
      />
      <span className="mt-1 block text-xs text-slate-500">{t.form.fileHint}</span>
    </label>
  );
}

export function QuoteForm({ lang, t }: { lang: Locale; t: Dictionary }) {
  const q = t.quote;
  return (
    <Shell lang={lang} t={t} subject={q.subject} formType="Quote request" submit={q.submit}>
      <label className="block sm:col-span-2">
        <Label text={q.items} />
        <textarea className="field" name="items" rows={5} required placeholder={q.itemsPlaceholder} />
      </label>
      <FileField label={q.file} t={t} />
    </Shell>
  );
}

export function SupplierForm({ lang, t }: { lang: Locale; t: Dictionary }) {
  const s = t.supplier;
  return (
    <Shell lang={lang} t={t} subject={s.subject} formType="Supplier sign-up" submit={s.submit}>
      <label className="block sm:col-span-2">
        <Label text={s.categories} />
        <textarea className="field" name="product_categories" rows={3} required placeholder={s.categoriesPlaceholder} />
      </label>
      <label className="block sm:col-span-2">
        <Label text={s.location} />
        <input className="field" type="text" name="location" required />
      </label>
      <FileField label={s.file} t={t} />
    </Shell>
  );
}
