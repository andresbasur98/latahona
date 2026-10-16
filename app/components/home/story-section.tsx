import Image from "next/image";
import { ArrowUpRight } from "@/app/components/icons";
import { verifiedStory } from "@/app/config/site";

export function StorySection() {
  return (
    <section className="story-section section" id="la-tahona" aria-labelledby="story-title">
      <div className="shell story-grid">
        <div className="story-images">
          <div className="story-image-main"><Image src="/images/entrada-detalle.webp" alt="Mural cerámico y banco de madera en la entrada de La Tahona" fill sizes="(max-width: 800px) 92vw, 48vw" /></div>
          <div className="story-image-detail"><Image src="/images/bolliton.jpg" alt="Pieza de pan junto a una bolsa de papel de La Tahona de El Escorial" fill sizes="(max-width: 800px) 45vw, 18vw" /></div>
        </div>
        <div className="story-copy">
          <p className="eyebrow eyebrow-light">El establecimiento</p>
          <h2 id="story-title">Un oficio que llegó a El Escorial en <em>{verifiedStory.opened}.</em></h2>
          <p className="story-lead">{verifiedStory.description}</p>
          <p>El mural de la entrada cuenta esa misma historia con otra voz: campos, manos y memoria alrededor del pan. Un lugar que forma parte del paisaje cotidiano de El Escorial.</p>
          <a className="source-link" href={verifiedStory.source} target="_blank" rel="noreferrer">Conoce la historia publicada por el Ayuntamiento <ArrowUpRight /></a>
        </div>
      </div>
    </section>
  );
}
