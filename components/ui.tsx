import { contactEmail, type Dictionary } from "@/lib/i18n";

export function SectionHead({ title, lead, center = true, dark = false }: { title: string; lead: string; center?: boolean; dark?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <span className={`block h-1 w-12 rounded-full bg-brand-600 ${center ? "mx-auto" : ""}`} aria-hidden="true" />
      <h2 className={`mt-5 text-3xl leading-snug font-bold tracking-tight sm:text-4xl sm:leading-snug ${dark ? "text-white" : "text-slate-900"}`}>{title}</h2>
      <p className={`mt-4 text-lg ${dark ? "text-slate-300" : "text-slate-600"}`}>{lead}</p>
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
    <div className={`group relative ${className}`}>
      <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-100 to-slate-100" aria-hidden="true" />
      <div className="overflow-hidden rounded-3xl shadow-xl ring-1 shadow-slate-900/10 ring-slate-900/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} width={1200} height={900} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
      </div>
    </div>
  );
}

/** Numbered RFQ -> quote -> PO -> delivery stepper on a dark band. */
export function Steps({ title, lead, steps }: { title: string; lead: string; steps: { title: string; desc: string }[] }) {
  return (
    <section id="how" className="relative isolate overflow-hidden bg-slate-900 py-20 text-white sm:py-28">
      <div className="absolute -top-32 right-0 -z-10 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal">
          <SectionHead title={title} lead={lead} dark />
        </div>
        <ol className="relative mt-14 grid gap-10 lg:grid-cols-4 lg:gap-6">
          <span className="absolute top-0 bottom-0 left-7 w-px bg-gradient-to-b from-brand-500 via-brand-500/50 to-transparent lg:top-7 lg:right-[12.5%] lg:bottom-auto lg:left-[12.5%] lg:h-px lg:w-auto lg:bg-gradient-to-r lg:via-brand-500 lg:to-brand-500" aria-hidden="true" />
          {steps.map((s, i) => (
            <li key={s.title} className="reveal relative flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xl font-bold text-white shadow-lg ring-8 shadow-brand-900/50 ring-slate-900">
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
    <section id="contact" className="relative isolate overflow-hidden bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 py-20 text-center text-white sm:py-28">
      <div className="absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
      <div className="absolute -bottom-32 -left-24 -z-10 h-96 w-96 rounded-full bg-slate-950/25 blur-2xl" aria-hidden="true" />
      <div className="reveal mx-auto max-w-2xl px-4 sm:px-6">
        <h2 className="text-3xl leading-snug font-bold tracking-tight sm:text-4xl">{t.contact.title}</h2>
        <p className="mt-4 text-lg text-white/90">{t.contact.lead}</p>
        <p className="mt-10 text-sm font-semibold tracking-widest text-white/75 uppercase">{t.contact.emailLabel}</p>
        <a
          href={`mailto:${contactEmail}`}
          className="mt-3 inline-flex max-w-full items-center gap-3 rounded-2xl bg-white px-6 py-4 text-xl font-semibold break-all text-brand-700 shadow-xl transition hover:-translate-y-0.5 hover:bg-brand-50 sm:text-2xl"
        >
          <Icon d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM3.5 7l8.5 6 8.5-6" className="h-6 w-6 shrink-0" />
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
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-900/40" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-40 -z-10 h-[32rem] w-[32rem] rounded-full bg-brand-600/25 blur-3xl" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="fade-up inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase backdrop-blur sm:text-sm">
          <span className="h-2 w-2 rounded-full bg-brand-500" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="fade-up mt-6 max-w-3xl text-4xl leading-tight font-bold tracking-tight text-balance sm:text-5xl sm:leading-tight" style={{ "--d": "80ms" } as React.CSSProperties}>
          {title}
        </h1>
        <p className="fade-up mt-6 max-w-2xl text-lg text-slate-200 sm:text-xl" style={{ "--d": "160ms" } as React.CSSProperties}>
          {lead}
        </p>
        <a
          href={href}
          className="fade-up group mt-9 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-900/40 transition hover:-translate-y-0.5 hover:bg-brand-500"
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
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
            <Icon d={CHECK} className="h-3.5 w-3.5" />
          </span>
          {p}
        </li>
      ))}
    </ul>
  );
}
