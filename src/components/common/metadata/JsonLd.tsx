import type { QA } from "@/components/ui/Accordion";

export const SITE_URL = "https://www.webvium.com";

export const organization = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Webvium",
  url: SITE_URL,
  logo: `${SITE_URL}/images/webvium.png`,
  founder: { "@id": `${SITE_URL}/#founder` },
  foundingDate: "2018",
  sameAs: [
    "https://github.com/webvium",
    "https://youtube.com/@webvium",
    "https://facebook.com/the.webvium.project",
  ],
};

export const founder = {
  "@type": "Person",
  "@id": `${SITE_URL}/#founder`,
  name: "Melvin Jones Repol",
  url: "https://www.melvinjonesrepol.com",
};

export const browserApp = {
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/browser#app`,
  name: "Webvium Browser",
  url: `${SITE_URL}/browser`,
  applicationCategory: "BrowserApplication",
  operatingSystem: "Android 5.0 or later",
  softwareVersion: "4.0.0",
  inLanguage: "en",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  author: { "@id": `${SITE_URL}/#founder` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  downloadUrl: "https://webvium.en.uptodown.com/android",
  screenshot: `${SITE_URL}/images/webvium-1.jpg`,
};

export function faqPage(items: QA[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export default function JsonLd({ data }: { data: object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": data,
        }).replace(/</g, "\\u003c"),
      }}
    />
  );
}
