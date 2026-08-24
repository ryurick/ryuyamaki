import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ryuyamaki.com",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://ryuyamaki.com/ai",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
