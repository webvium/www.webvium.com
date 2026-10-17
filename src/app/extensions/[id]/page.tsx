import extensions from "@/lib/extensions";
import Reveal from "@/components/common/Reveal";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

function findExtension(id: string) {
  return extensions.find(
    (extension) =>
      extension.name.trim().toLowerCase().replace(/\s+/g, "-") === id,
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const extension = findExtension(id);

  if (!extension) notFound();

  return {
    title: extension.name + " - Webvium",
    description: extension.description,
    alternates: {
      canonical: `https://www.webvium.com/extensions/${extension.name.trim().toLowerCase().replace(/\s+/g, "-")}`,
    },
    openGraph: {
      title: extension.name + " - Webvium",
      description: extension.description,
      url: `https://www.webvium.com/extensions/${extension.name.trim().toLowerCase().replace(/\s+/g, "-")}`,
      siteName: "Webvium",
      images: [
        {
          url: extension.cover
            ? extension.cover
            : "https://www.webvium.com/images/webvium-banner.png",
          width: 1200,
          height: 630,
          alt: extension.cover ? extension.name : "Webvium Software Ecosystem",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: extension.name + " - Webvium",
      description: extension.description,
      images: [
        extension.cover
          ? extension.cover
          : "https://www.webvium.com/images/webvium-banner.png",
      ],
      creator: "@mrepol742",
    },
  };
}

const section = "flex min-h-screen flex-col justify-center px-5 py-24";
const sectionAlt = `${section} bg-surface`;
const innerClass = "mx-auto w-full max-w-5xl";

export default async function ExtensionPage({ params }: PageProps) {
  const { id } = await params;
  const extension = findExtension(id);

  if (!extension) {
    notFound();
  }

  return (
    <div>
      <section className={`${section} relative overflow-hidden`}>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-70" />

        <div className={`relative ${innerClass}`}>
          <Reveal
            as="h1"
            delay={80}
            className="text-4xl font-semibold leading-tight sm:text-6xl"
          >
            {extension.name}
          </Reveal>

          <Reveal
            as="p"
            delay={160}
            className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg"
          >
            {extension.description}
          </Reveal>

          <Reveal delay={240} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href={extension.chrome_webstore_url ?? "#"}
              aria-disabled={!extension.chrome_webstore_url}
              tabIndex={extension.chrome_webstore_url ? 0 : -1}
              className={`flex items-center justify-center rounded-full px-6 py-3 font-medium transition-transform ${
                extension.chrome_webstore_url
                  ? "bg-primary text-primary-contrast hover:scale-[1.03] active:scale-95"
                  : "pointer-events-none cursor-not-allowed bg-muted text-muted-foreground opacity-50"
              }`}
            >
              Chrome Web Store
            </Link>

            <Link
              href={extension.github_url}
              className="flex items-center justify-center rounded-full border border-border px-6 py-3 font-medium transition-colors hover:bg-surface"
            >
              View on GitHub
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
