"use client";

import Link from "next/link";
import { navigation } from "@/app/config/site";
import { ArrowUpRight, MenuMark } from "./icons";

export function SiteHeader() {
  function closeMobileMenu(event: React.MouseEvent<HTMLAnchorElement>) {
    event.currentTarget.closest("details")?.removeAttribute("open");
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label="La Tahona, inicio">
          <span>La Tahona</span><small>de El Escorial</small>
        </Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
        <Link className="header-cta" href="/#contacto">Cómo llegar <ArrowUpRight /></Link>
        <details className="mobile-menu">
          <summary aria-label="Abrir menú"><span>Menú</span><MenuMark /></summary>
          <nav aria-label="Navegación móvil">
            {navigation.map((item) => <Link href={item.href} key={item.href} onClick={closeMobileMenu}>{item.label}</Link>)}
            <Link className="mobile-directions" href="/#contacto" onClick={closeMobileMenu}>Cómo llegar <ArrowUpRight /></Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
