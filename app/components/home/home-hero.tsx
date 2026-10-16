import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/app/components/icons";
import { HeroVideo } from "./hero-video";

export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="hero-title">
      <HeroVideo />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="shell hero-content">
        <div className="hero-copy">
          <p className="eyebrow eyebrow-light">Panadería · El Escorial</p>
          <h1 id="hero-title">La Tahona,<span>tu panadería</span>en El Escorial</h1>
          <p className="hero-intro">Descubre una selección de panes y bollería en un rincón muy reconocible de La Villa.</p>
          <div className="hero-actions">
            <Link className="button button-caramel" href="/#productos">Descubre nuestros productos <ArrowRight /></Link>
            <Link className="button button-outline-light" href="/#contacto">Cómo llegar <ArrowUpRight /></Link>
          </div>
          <Link className="professional-link" href="/#profesionales">¿Tienes un restaurante o comercio? <ArrowRight /></Link>
        </div>
      </div>
      <Link className="scroll-cue" href="/#presentacion" aria-label="Bajar a la presentación de La Tahona"><span>Descubre</span><i /></Link>
    </section>
  );
}
