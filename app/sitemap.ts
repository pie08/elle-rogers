import type { MetadataRoute } from "next";
import { getSiteUrlString } from "@/app/_lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrlString();

  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
