import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { BakeryJsonLd } from "@/app/components/bakery-json-ld";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { business } from "@/app/config/site";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: business.name, template: `%s | ${business.shortName}` },
  description: "Panadería de pan y bollería en El Escorial, Madrid.",
  applicationName: business.name,
  ...(business.domain ? { metadataBase: new URL(business.domain) } : {}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`} data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <BakeryJsonLd />
        <SiteHeader />
        <div id="contenido">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
