type PageHeroProps = { eyebrow: string; title: React.ReactNode; intro: string; aside?: string };

export function PageHero({ eyebrow, title, intro, aside }: PageHeroProps) {
  return <section className="page-hero"><div className="shell page-hero-grid">
    <div><p className="eyebrow eyebrow-light">{eyebrow}</p><h1>{title}</h1></div>
    <div className="page-hero-copy"><p>{intro}</p>{aside && <span>{aside}</span>}</div>
  </div></section>;
}
