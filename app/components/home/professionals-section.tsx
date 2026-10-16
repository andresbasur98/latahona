import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/app/components/icons";

const steps = [
  ["01", "Cuéntanos tu negocio", "Explícanos qué tipo de establecimiento tienes y cómo trabajas."],
  ["02", "Qué necesitas", "Indica el producto o formato que buscas y la cantidad orientativa."],
  ["03", "Consulta condiciones", "Revisamos contigo disponibilidad y condiciones de suministro."],
] as const;

export function ProfessionalsSection() {
  return (
    <section className="professionals-section" id="profesionales" aria-labelledby="professionals-title">
      <div className="shell professionals-lead section">
        <div className="pro-image"><Image src="/images/bollos-expuestos.jpg" alt="Mostrador de La Tahona con panes y bollería" fill sizes="(max-width: 800px) 92vw, 48vw" /></div>
        <div className="pro-copy">
          <p className="eyebrow">Restaurantes y comercios</p>
          <h2 id="professionals-title">Producto real para mesas y mostradores <em>reales.</em></h2>
          <p>La Tahona suministra producto a bares, restaurantes y otros comercios. La oferta se adapta a la disponibilidad y a las necesidades de cada establecimiento.</p>
          <p>No mostramos condiciones genéricas: preferimos conocer primero tu caso.</p>
          <Link className="button button-dark" href="/#contacto">Iniciar una consulta <ArrowRight /></Link>
        </div>
      </div>
      <div className="professional-process">
        <div className="shell process-grid">
          <div className="process-heading"><p className="eyebrow eyebrow-light">Cómo empezar</p><h3>Tres datos para comenzar.</h3></div>
          <ol className="process-list">{steps.map(([number, title, text]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
        </div>
      </div>
    </section>
  );
}
