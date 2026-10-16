import { ArrowUpRight } from "@/app/components/icons";
import { business } from "@/app/config/site";

export function ContactSection() {
  const directionsHref = business.mapsUrl ?? "#contacto";
  const mapEmbedUrl = business.coordinates ? `https://www.google.com/maps?q=${business.coordinates.latitude},${business.coordinates.longitude}&z=16&output=embed` : null;
  const hasPendingDetails = !business.streetAddress || !business.phone || business.hours.length === 0;

  return (
    <section className="visit-section section" id="contacto" aria-labelledby="contact-title">
      <div className="shell">
        <div className="visit-grid">
          <div className="visit-title"><p className="eyebrow">Ven a conocernos</p><h2 id="contact-title">Tu próxima visita empieza en <em>El Escorial.</em></h2></div>
          <dl className="visit-facts">
            <div><dt>Localidad</dt><dd>{business.locality}, {business.region}</dd></div>
            {business.streetAddress && <div><dt>Dirección</dt><dd>{business.streetAddress}{business.postalCode ? `, ${business.postalCode}` : ""}</dd></div>}
            {business.hours.length > 0 && <div><dt>Horario</dt><dd>{business.hours.map((item) => <span key={item.days}>{item.days}: {item.hours}</span>)}</dd></div>}
            {business.phone && <div><dt>Teléfono</dt><dd><a href={`tel:${business.phone}`}>{business.phone}</a></dd></div>}
            {business.email && <div><dt>Correo</dt><dd><a href={`mailto:${business.email}`}>{business.email}</a></dd></div>}
          </dl>
          {business.mapsUrl && <a className="visit-arrow" href={directionsHref} target="_blank" rel="noreferrer" aria-label="Abrir la ubicación de La Tahona en Google Maps"><ArrowUpRight /></a>}
        </div>
        {hasPendingDetails && <p className="contact-note visit-note">La dirección completa, el horario y los datos de contacto se mostrarán cuando estén confirmados.</p>}
        {mapEmbedUrl && (
          <div className="visit-map">
            <iframe src={mapEmbedUrl} title="Mapa de la ubicación de La Tahona en El Escorial" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            <div className="visit-map-caption"><span>La Tahona · El Escorial</span><a href={directionsHref} target="_blank" rel="noreferrer">Abrir en Google Maps <ArrowUpRight /></a></div>
          </div>
        )}
      </div>
    </section>
  );
}
