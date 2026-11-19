import type { Metadata } from "next";
import { siteUrl } from "@/lib/i18n";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Taihue",
  robots: { index: false, follow: true },
  alternates: { canonical: "/en" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content="0; url=/en" />
      </head>
      <body>{children}</body>
    </html>
  );
}
