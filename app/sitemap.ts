import type { MetadataRoute } from "next";
import { business } from "@/app/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!business.domain) return [];
  return [{
    url: new URL("/", business.domain).toString(),
    changeFrequency: "monthly" as const,
    priority: 1,
  }];
}
