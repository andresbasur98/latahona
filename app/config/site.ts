export type BusinessHours = { days: string; hours: string };
export type SocialLink = { label: string; url: string };
export type Coordinates = { latitude: number; longitude: number };

export type BusinessConfig = {
  name: string;
  shortName: string;
  locality: string;
  region: string;
  countryCode: "ES";
  streetAddress: string | null;
  postalCode: string | null;
  phone: string | null;
  email: string | null;
  whatsapp: string | null;
  hours: BusinessHours[];
  mapsUrl: string | null;
  coordinates: Coordinates | null;
  googleBusinessUrl: string | null;
  domain: string | null;
  socials: SocialLink[];
  legalNoticeUrl: string | null;
  privacyUrl: string | null;
};

/**
 * Única fuente de verdad para los datos comerciales.
 * Los valores null se ocultan automáticamente en la interfaz y el SEO.
 */
export const business: BusinessConfig = {
  name: "La Tahona de El Escorial",
  shortName: "La Tahona",
  locality: "El Escorial",
  region: "Madrid",
  countryCode: "ES",
  streetAddress: null,
  postalCode: null,
  phone: null,
  email: null,
  whatsapp: null,
  hours: [],
  mapsUrl: "https://maps.app.goo.gl/onZLkjZQNgdSHnMH8",
  coordinates: { latitude: 40.5842122, longitude: -4.1289869 },
  googleBusinessUrl: null,
  domain: null,
  socials: [],
  legalNoticeUrl: null,
  privacyUrl: null,
};

export const verifiedStory = {
  opened: 1982,
  description:
    "Una historia familiar de panaderos que llegó a El Escorial en 1982 y continúa cada noche entre masas, hornos y oficio.",
  source: "https://elescorial.es/la-tahona/",
};

export const navigation = [
  { href: "/#productos", label: "Productos" },
  { href: "/#la-tahona", label: "La Tahona" },
  { href: "/#profesionales", label: "Para profesionales" },
  { href: "/#contacto", label: "Dónde estamos" },
] as const;
