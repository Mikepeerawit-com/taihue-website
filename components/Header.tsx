import { contactEmail, localeLabel, locales, type Dictionary, type Locale } from "@/lib/i18n";
import MobileMenu from "./MobileMenu";

export function LangSwitcher({ lang, suffix = "", dark = false }: { lang: Locale; suffix?: string; dark?: boolean }) {
  return (
    <nav
      aria-label="Language"
      className={`flex items-center rounded-full border p-0.5 text-sm ${dark ? "border-white/15 bg-white/5" : "border-slate-200 bg-white/80"}`}
    >
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
              : `rounded-full px-2.5 py-1 transition-colors ${dark ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-brand-700"}`
          }
        >
          {localeLabel[l]}
        </a>
      ))}
    </nav>
  );
}

/** `path` is the current page below /[lang]: "", "/quote", "/suppliers" or "/thanks". */
function navLinks(lang: Locale, t: Dictionary, path: string, suppliers = false) {
  const here = path === "/thanks" ? "" : path;
  return [
    [`/${lang}`, t.nav.home],
    [`/${lang}#services`, t.nav.services],
    [`/${lang}/quote`, t.nav.quote],
    ...(suppliers ? [[`/${lang}/suppliers`, t.nav.suppliers]] : []),
    [`/${lang}${here}#contact`, t.nav.contact],
  ];
}

export default function Header({ lang, t, path = "", minimal = false }: { lang: Locale; t: Dictionary; path?: string; minimal?: boolean }) {
  const links = navLinks(lang, t, path);
  const current = `/${lang}${path}`;
  const quoteHref = `/${lang}/quote`;
  const cta = "rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-brand-600/30 transition hover:-translate-y-0.5 hover:bg-brand-700";
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/70">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href={`/${lang}`} className="flex shrink-0 items-center gap-2.5" aria-label="Taihue">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-red.png" alt="" width={640} height={390} className="h-9 w-auto" />
          <span className="text-lg font-bold tracking-tight text-slate-900">Taihue</span>
        </a>
        {!minimal && (
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 lg:flex">
            {links.map(([href, label]) =>
              href === quoteHref ? (
                <a key={href} href={href} aria-current={href === current ? "page" : undefined} className={cta}>
                  {label}
                </a>
              ) : (
                <a
                  key={href}
                  href={href}
                  aria-current={href === current ? "page" : undefined}
                  className={`relative py-1 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-brand-600 after:transition-transform hover:text-brand-700 hover:after:scale-x-100 ${href === current ? "text-brand-700 after:scale-x-100" : "after:scale-x-0"}`}
                >
                  {label}
                </a>
              ),
            )}
          </nav>
        )}
        <div className="flex items-center gap-1.5 sm:gap-3">
          <LangSwitcher lang={lang} suffix={path} />
          {!minimal && (
            <a href={quoteHref} className={`hidden sm:inline-block lg:hidden ${cta}`}>
              {t.nav.quote}
            </a>
          )}
          {!minimal && <MobileMenu links={links.filter(([href]) => href !== quoteHref)} cta={t.nav.quote} ctaHref={quoteHref} label={t.ui.menu} />}
        </div>
      </div>
    </header>
  );
}

export function Footer({ lang, t, path = "" }: { lang: Locale; t: Dictionary; path?: string }) {
  const links = navLinks(lang, t, path, true);
  const head = "text-xs font-semibold tracking-widest text-slate-400 uppercase";
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-white.png" alt="Taihue" width={640} height={386} className="h-14 w-auto" loading="lazy" />
          <p className="mt-4 font-semibold text-white">{t.companyName}</p>
          <p className="mt-2 max-w-sm text-sm text-slate-400">{t.footer.tagline}</p>
        </div>
        <nav className="md:col-span-3" aria-label={t.ui.explore}>
          <p className={head}>{t.ui.explore}</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {links.map(([href, label]) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <p className={head}>{t.nav.contact}</p>
          <a href={`mailto:${contactEmail}`} className="mt-4 inline-block font-medium text-white underline-offset-4 hover:underline">
            {contactEmail}
          </a>
          <div className="mt-5 flex flex-col gap-2.5 sm:flex-row md:flex-col lg:flex-row">
            <a href={`/${lang}/quote`} className="rounded-lg bg-brand-600 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-brand-500">
              {t.hero.primary}
            </a>
            <a href={`/${lang}/suppliers`} className="rounded-lg border border-white/20 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-white/10">
              {t.hero.secondary}
            </a>
          </div>
          <p className={`mt-7 ${head}`}>{t.ui.language}</p>
          <div className="mt-3 flex">
            <LangSwitcher lang={lang} suffix={path} dark />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-slate-500 sm:px-6">
          © {new Date().getFullYear()} {t.companyName} {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
