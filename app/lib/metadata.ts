import type { Metadata } from "next";
import { business } from "@/app/config/site";

type PageMetadata = { title: string; description: string; path: string };

export function createPageMetadata({ title, description, path }: PageMetadata): Metadata {
  const absoluteUrl = business.domain
    ? new URL(path, business.domain).toString()
    : undefined;

  return {
    title,
    description,
    ...(absoluteUrl ? { alternates: { canonical: absoluteUrl } } : {}),
    openGraph: {
      title,
      description,
      siteName: business.name,
      locale: "es_ES",
      type: "website",
      ...(absoluteUrl ? { url: absoluteUrl } : {}),
    },
  };
}
