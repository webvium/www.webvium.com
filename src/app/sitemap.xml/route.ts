import { buildSitemapXml, getLocalizedStaticUrls } from "@/lib/sitemap";

export const revalidate = 43200;

export async function GET() {
  return new Response(buildSitemapXml(getLocalizedStaticUrls()), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
