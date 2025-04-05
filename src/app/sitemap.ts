import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // You can add the base URL of your website
  const baseUrl = process.env.SITE_URL || "https://yoursite.com";

  // Add all your static pages here
  const staticPages = [
    "",
    "/about",
    "/contact",
    "/faq",
    "/pricing",
    "/services",
    "/privacy-policy",
    "/terms-of-service",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
  return [...staticPages];
}
