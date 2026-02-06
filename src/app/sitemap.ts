import { MetadataRoute } from "next";

// غيّر هذا الرابط إلى رابط الموقع الفعلي عند النشر، أو اضبط NEXT_PUBLIC_SITE_URL
const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ih-healthcenter.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
