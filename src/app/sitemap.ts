import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://[yourdomain.co.uk]";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/",         priority: 1.0, changeFrequency: "weekly"  as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/pricing",  priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/bundles",  priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/contact",  priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about",    priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/hygiene",  priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/faq",      priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/areas",    priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/offers",   priority: 0.6, changeFrequency: "weekly"  as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
