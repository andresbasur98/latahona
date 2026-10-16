import { verifiedStory } from "@/app/config/site";

export function IntroSection() {
  return (
    <section className="intro-section section" id="presentacion" aria-labelledby="intro-title">
      <div className="shell intro-grid">
        <p className="intro-kicker">Desde {verifiedStory.opened}<span>en La Villa</span></p>
        <div>
          <p className="eyebrow">La Tahona de El Escorial</p>
          <h2 id="intro-title">Pan y bollería en un lugar con <em>historia propia.</em></h2>
        </div>
        <p className="intro-copy">{verifiedStory.description} Hoy, panes y bollería comparten mostrador en un establecimiento reconocible por quienes pasan por La Villa.</p>
      </div>
    </section>
  );
}
