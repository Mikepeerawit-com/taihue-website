# taihue.com

Landing site for Taihue International Medical Co., Ltd. Local Thai sourcing and procurement for Chinese factories in Thailand.

- Next.js (App Router) + TypeScript + Tailwind CSS v4, fully static (`output: "export"`).
- Languages: `/en` (default), `/th`, `/zh`. Each has a thank-you page at `/<lang>/thanks`.
- All copy lives in `lib/i18n.ts`.

## Local dev

```bash
npm install
npm run dev      # http://localhost:3000/en
npm run build    # static site in ./out
npm start        # serve ./out locally
```

## Deploy (Vercel)

1. Import the repo in Vercel. No settings needed (framework preset: Next.js).
2. Add the domain `taihue.com` in Project > Settings > Domains.
3. `vercel.json` redirects `/` to `/en`.

Canonical URLs, Open Graph and the sitemap use `https://taihue.com`. To use another domain, set the env var `NEXT_PUBLIC_SITE_URL`.

## Forms (FormSubmit)

Both forms (quote request, supplier sign-up) post as `multipart/form-data` to `https://formsubmit.co/contact@taihue.com`, so file uploads arrive as email attachments. No backend or API key.

- **One-time activation:** the first submission from the live site makes FormSubmit send an activation email to contact@taihue.com. Click the link in it once; submissions are delivered only after that. Do a test submission right after going live.
- Each form sets its own `_subject`, a `_honey` honeypot field, and `_next`, which returns the visitor to `/<lang>/thanks` on the same domain.
- FormSubmit shows its own captcha step before delivering. Attachments are limited to about 5 MB (FormSubmit's limit).

## Assets

`public/logo-red.png`, `public/logo-white.png`, `public/logo.svg`, `public/og.png` (Open Graph image), `app/icon.png` and `app/apple-icon.png` (favicons made from the logo).
