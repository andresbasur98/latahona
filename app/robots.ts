import type { MetadataRoute } from "next";
import { business } from "@/app/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(business.domain ? { sitemap: new URL("/sitemap.xml", business.domain).toString() } : {}),
  };
}
