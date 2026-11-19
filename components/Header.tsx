import { localeLabel, locales, type Dictionary, type Locale } from "@/lib/i18n";

export function LangSwitcher({ lang, suffix = "" }: { lang: Locale; suffix?: string }) {
  return (
    <nav aria-label="Language" className="flex items-center rounded-full border border-neutral-200 bg-white p-0.5 text-sm">
      {locales.map((l) => (
        <a
          key={l}
          href={`/${l}${suffix}`}
          hrefLang={l === "zh" ? "zh-Hans" : l}
          lang={l === "zh" ? "zh-Hans" : l}
          aria-current={l === lang ? "page" : undefined}
          className={
            l === lang
              ? "rounded-full bg-brand-600 px-2.5 py-1 font-semibold text-white"
              : "rounded-full px-2.5 py-1 text-neutral-600 hover:text-brand-700"
          }
        >
          {localeLabel[l]}
        </a>
      ))}
    </nav>
  );
}

export default function Header({ lang, t, minimal = false }: { lang: Locale; t: Dictionary; minimal?: boolean }) {
  const links = [
    ["#services", t.nav.services],
    ["#why", t.nav.why],
    ["#how", t.nav.how],
    ["#suppliers", t.nav.suppliers],
    ["#contact", t.nav.contact],
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href={`/${lang}`} className="flex shrink-0 items-center gap-2.5" aria-label="Taihue">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-red.png" alt="" width={640} height={390} className="h-9 w-auto" />
          <span className="text-lg font-bold tracking-tight text-neutral-900">Taihue</span>
        </a>
        {!minimal && (
          <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-700 lg:flex">
            {links.map(([href, label]) => (
              <a key={href} href={href} className="hover:text-brand-700">
                {label}
              </a>
            ))}
          </nav>
        )}
        <div className="flex items-center gap-2 sm:gap-3">
          <LangSwitcher lang={lang} suffix={minimal ? "/thanks" : ""} />
          {!minimal && (
            <a
              href="#quote"
              className="hidden rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700 sm:inline-block"
            >
              {t.nav.cta}
            </a>
          )}
        </div>
      </div>
    </header>
  );
}

export function Footer({ lang, t }: { lang: Locale; t: Dictionary }) {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-white.png" alt="Taihue" width={640} height={386} className="h-12 w-auto" loading="lazy" />
          <div>
            <p className="font-semibold text-white">{t.companyName}</p>
            <p className="text-sm text-neutral-400">{t.footer.tagline}</p>
          </div>
        </div>
        <div className="text-sm">
          <a href="mailto:contact@taihue.com" className="font-medium text-white hover:underline">
            contact@taihue.com
          </a>
          <p className="mt-1 text-neutral-400">
            © {new Date().getFullYear()} {t.companyName} {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
