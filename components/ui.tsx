import { contactEmail, type Dictionary } from "@/lib/i18n";

export function SectionHead({ title, lead, center = true, dark = false }: { title: string; lead?: string; center?: boolean; dark?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <span className={`block h-1 w-12 rounded-full bg-brand-600 ${center ? "mx-auto" : ""}`} aria-hidden="true" />
      <h2 className={`mt-5 text-3xl leading-snug font-bold tracking-tight sm:text-4xl sm:leading-snug ${dark ? "text-white" : "text-slate-900"}`}>{title}</h2>
      {lead && <p className={`mt-4 text-lg ${dark ? "text-slate-300" : "text-slate-600"}`}>{lead}</p>}
    </div>
  );
}

export function Icon({ d, className = "h-6 w-6" }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

export const CHECK = "M5 12.5l4.5 4.5L19 7";
export const ARROW = "M5 12h14M13 6l6 6-6 6";

export function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={className}>
      <div className="overflow-hidden rounded-lg ring-1 ring-slate-900/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} width={1200} height={900} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover" />
      </div>
    </div>
  );
}

/** Numbered RFQ -> quote -> PO -> delivery stepper on a dark band. */
export function Steps({ title, lead, steps }: { title: string; lead?: string; steps: { title: string; desc: string }[] }) {
  return (
    <section id="how" className="relative isolate overflow-hidden bg-slate-900 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal">
          <SectionHead title={title} lead={lead} dark />
        </div>
        <ol className="relative mt-14 grid gap-10 lg:grid-cols-4 lg:gap-6">
          <span className="absolute top-0 bottom-0 left-7 w-px bg-slate-700 lg:top-7 lg:right-[12.5%] lg:bottom-auto lg:left-[12.5%] lg:h-px lg:w-auto" aria-hidden="true" />
          {steps.map((s, i) => (
            <li key={s.title} className="reveal relative flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xl font-bold text-white ring-8 ring-slate-900">
                {i + 1}
              </span>
              <div className="lg:mt-6 lg:px-2">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-slate-300">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ContactSection({ t }: { t: Dictionary }) {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-brand-700 py-20 text-center text-white sm:py-28">
      <div className="reveal mx-auto max-w-2xl px-4 sm:px-6">
        <h2 className="text-3xl leading-snug font-bold tracking-tight sm:text-4xl">{t.contact.title}</h2>
        <p className="mt-4 text-lg text-white/90">{t.contact.lead}</p>
        <p className="mt-10 text-sm font-semibold tracking-widest text-white/75 uppercase">{t.contact.emailLabel}</p>
        <a
          href={`mailto:${contactEmail}`}
          className="mt-3 inline-block max-w-full rounded-lg bg-white px-6 py-4 text-xl font-semibold break-all text-brand-700 transition hover:bg-brand-50 sm:text-2xl"
        >
          {contactEmail}
        </a>
      </div>
    </section>
  );
}

/** Compact dark hero for the buyer and supplier pages. */
export function PageHero({ eyebrow, title, lead, cta, href, src, alt }: { eyebrow: string; title: string; lead: string; cta: string; href: string; src: string; alt: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} width={1200} height={900} fetchPriority="high" decoding="async" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-slate-950/75" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="fade-up text-sm font-semibold tracking-wider text-brand-200 uppercase">{eyebrow}</p>
        <h1 className="fade-up mt-6 max-w-3xl text-4xl leading-tight font-bold tracking-tight text-balance sm:text-5xl sm:leading-tight" style={{ "--d": "80ms" } as React.CSSProperties}>
          {title}
        </h1>
        <p className="fade-up mt-6 max-w-2xl text-lg text-slate-200 sm:text-xl" style={{ "--d": "160ms" } as React.CSSProperties}>
          {lead}
        </p>
        <a
          href={href}
          className="fade-up group mt-9 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-brand-500"
          style={{ "--d": "240ms" } as React.CSSProperties}
        >
          {cta}
          <Icon d={ARROW} className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}

/** Check-marked bullet list used on choice cards and next to forms. */
export function CheckList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((p) => (
        <li key={p} className="flex items-start gap-3 text-slate-700">
          <Icon d={CHECK} className="mt-1 h-5 w-5 shrink-0 text-brand-600" />
          {p}
        </li>
      ))}
    </ul>
  );
}

/** Plain two-column list of title + description rows, separated by rules. */
export function PlainList({ items, cols = 2 }: { items: { title: string; desc: string }[]; cols?: 2 | 3 }) {
  return (
    <dl className={`mt-12 grid gap-x-12 border-t border-slate-200 ${cols === 3 ? "md:grid-cols-3" : "sm:grid-cols-2"}`}>
      {items.map((s) => (
        <div key={s.title} className="border-b border-slate-200 py-5">
          <dt className="text-lg font-semibold text-slate-900">{s.title}</dt>
          <dd className="mt-1 text-slate-600">{s.desc}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Title + description rows without icons, used next to photos. */
export function TextList({ items }: { items: { title: string; desc: string }[] }) {
  return (
    <ul className="space-y-8">
      {items.map((w) => (
        <li key={w.title} className="reveal border-l-2 border-brand-600 pl-5">
          <h3 className="text-xl font-semibold text-slate-900">{w.title}</h3>
          <p className="mt-2 text-slate-600">{w.desc}</p>
        </li>
      ))}
    </ul>
  );
}
