import Link from "next/link";
import { business, navigation } from "@/app/config/site";

export function SiteFooter() {
  const hasContact = Boolean(business.phone || business.email || business.streetAddress);
  return (
    <footer className="site-footer">
      <div className="footer-top shell">
        <div><p className="eyebrow eyebrow-light">Panadería en El Escorial</p><p className="footer-intro">Pan, bollería y oficio de cada noche para la mañana de todo un pueblo.</p></div>
        <nav aria-label="Navegación del pie">{navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav>
        {hasContact && <address>
          {business.streetAddress && <span>{business.streetAddress}, {business.locality}</span>}
          {business.phone && <a href={`tel:${business.phone}`}>{business.phone}</a>}
          {business.email && <a href={`mailto:${business.email}`}>{business.email}</a>}
        </address>}
      </div>
      <div className="footer-legal shell">
        <span>© {business.name}</span>
        <div>{business.legalNoticeUrl && <Link href={business.legalNoticeUrl}>Aviso legal</Link>}{business.privacyUrl && <Link href={business.privacyUrl}>Privacidad</Link>}</div>
      </div>
      <p className="footer-display" aria-hidden="true">LA TAHONA</p>
    </footer>
  );
}
