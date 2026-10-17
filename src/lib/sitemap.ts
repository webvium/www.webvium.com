import extensions from "@/lib/extensions";

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://www.webvium.com"
    : "http://localhost:3000";

export const STATIC_ROUTES = [
  "",
  "/about",
  "/browser",
  "/changelog",
  "/donate",
  "/downloads",
] as const;

function getExtensionIds(): string[] {
  return extensions.map(
    (ext) =>
      `/extensions/${ext.name.trim().toLowerCase().replace(/\s+/g, "-")}`,
  );
}

export function getLocalizedStaticUrls() {
  return [...STATIC_ROUTES, ...getExtensionIds()].map((route) => ({
    url: `${BASE_URL}${route}`,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}

export function buildSitemapXml(
  entries: Array<{
    url: string;
    lastModified?: Date;
    changeFrequency?: string;
    priority?: number;
  }>,
) {
  const body = entries
    .map((entry) => {
      const lastmod = entry.lastModified
        ? `<lastmod>${entry.lastModified.toISOString()}</lastmod>`
        : "";
      const changefreq = entry.changeFrequency
        ? `<changefreq>${entry.changeFrequency}</changefreq>`
        : "";
      const priority =
        entry.priority !== undefined
          ? `<priority>${entry.priority}</priority>`
          : "";

      return `<url><loc>${entry.url}</loc>${lastmod}${changefreq}${priority}</url>`;
    })
    .join("");

  return (
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`
  );
}

export function buildSitemapIndexXml(
  entries: Array<{
    url: string;
    lastModified?: Date;
  }>,
) {
  const body = entries
    .map((entry) => {
      const lastmod = entry.lastModified
        ? `<lastmod>${entry.lastModified.toISOString()}</lastmod>`
        : "";

      return `<sitemap><loc>${entry.url}</loc>${lastmod}</sitemap>`;
    })
    .join("");

  return (
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</sitemapindex>`
  );
}
