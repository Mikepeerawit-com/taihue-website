"use client";

import { useState } from "react";

/** Hamburger + dropdown panel for small screens. Closes when a link is tapped. */
export default function MobileMenu({ links, cta, ctaHref, label }: { links: string[][]; cta: string; ctaHref: string; label: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={label}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:outline-none"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-6 w-6" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      {open && (
        <div id="mobile-menu" className="fade-up absolute inset-x-0 top-full border-b border-slate-200 bg-white/95 shadow-lg backdrop-blur-md">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
            {links.map(([href, text]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-brand-700">
                {text}
              </a>
            ))}
            <a href={ctaHref} onClick={() => setOpen(false)} className="mt-2 rounded-lg bg-brand-600 px-4 py-3 text-center font-semibold text-white hover:bg-brand-700">
              {cta}
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
