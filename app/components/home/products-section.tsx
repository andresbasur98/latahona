import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/app/components/icons";
import { productCategories } from "@/app/data/products";

export function ProductsSection() {
  return (
    <section className="product-intro section" id="productos" aria-labelledby="products-title">
      <div className="shell">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">Una muestra del mostrador</p><h2 id="products-title">Una vitrina para mirar <em>sin prisa.</em></h2></div>
          <p>Esta es una muestra visual, no una carta cerrada. La variedad y la disponibilidad pueden cambiar.</p>
        </div>
        <div className="product-editorial-grid">
          {productCategories.map((category, index) => (
            <article className={`feature-product ${index === 0 ? "feature-product-large" : "feature-product-small"}`} key={category.title}>
              <div className={`image-crop ${category.crop}`}><Image src={category.image} alt={category.alt} fill sizes={index === 0 ? "(max-width: 760px) 100vw, 58vw" : "(max-width: 760px) 100vw, 32vw"} /></div>
              <div className="product-caption"><span>{category.number}</span><div><h3>{category.title}</h3><p>{category.text}</p></div></div>
            </article>
          ))}
        </div>
        <div className="availability-note">
          <div><p className="eyebrow">¿Buscas algo concreto?</p><p>Consulta la disponibilidad antes de venir.</p></div>
          <Link className="text-link" href="/#contacto">Ver formas de contacto <ArrowRight /></Link>
        </div>
      </div>
    </section>
  );
}
