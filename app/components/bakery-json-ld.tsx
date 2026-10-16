import { business } from "@/app/config/site";

export function BakeryJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: business.name,
    description: "Panadería de pan y bollería en El Escorial, Madrid.",
    address: {
      "@type": "PostalAddress",
      addressLocality: business.locality,
      addressRegion: business.region,
      addressCountry: business.countryCode,
      ...(business.streetAddress ? { streetAddress: business.streetAddress } : {}),
      ...(business.postalCode ? { postalCode: business.postalCode } : {}),
    },
    ...(business.domain ? { url: business.domain } : {}),
    ...(business.phone ? { telephone: business.phone } : {}),
    ...(business.email ? { email: business.email } : {}),
    ...(business.mapsUrl ? { hasMap: business.mapsUrl } : {}),
    ...(business.coordinates
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: business.coordinates.latitude,
            longitude: business.coordinates.longitude,
          },
        }
      : {}),
    ...(business.socials.length ? { sameAs: business.socials.map((social) => social.url) } : {}),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
