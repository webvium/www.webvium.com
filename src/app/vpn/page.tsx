import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faBell,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Metadata } from "next";
import Reveal from "@/components/common/Reveal";
import Accordion from "@/components/ui/Accordion";
import JsonLd, {
  SITE_URL,
  faqPage,
  founder,
  organization,
} from "@/components/common/metadata/JsonLd";

export const metadata: Metadata = {
  title: "VPN - Webvium",
  description:
    "Webvium VPN is under rework. This time it is being rebuilt as the lightest VPN for Android, with the same small-app approach as Webvium Browser.",
  alternates: {
    canonical: "https://www.webvium.com/vpn",
  },
  openGraph: {
    title: "VPN - Webvium",
    description:
      "Webvium VPN is under rework. This time it is being rebuilt as the lightest VPN for Android, with the same small-app approach as Webvium Browser.",
    url: "https://www.webvium.com/vpn",
    siteName: "Webvium",
    images: [
      {
        url: "https://www.webvium.com/images/webvium-banner.png",
        width: 1200,
        height: 630,
        alt: "Webvium Software Ecosystem",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VPN - Webvium",
    description:
      "Webvium VPN is under rework. This time it is being rebuilt as the lightest VPN for Android, with the same small-app approach as Webvium Browser.",
    images: ["https://www.webvium.com/images/webvium-banner.png"],
    creator: "@mrepol742",
  },
};

const status = [
  { label: "Status", value: "Under rework" },
  { label: "Platform", value: "Android" },
  { label: "Goal", value: "Lightest on Android" },
];

const timeline = [
  {
    year: "2023",
    text: "Webvium VPN launches as an experimental private networking service.",
  },
  {
    year: "2024",
    text: "The first version is discontinued after about a year.",
  },
  {
    year: "2026",
    text: "Webvium VPN goes back into development, rebuilt from scratch to be the lightest VPN for Android.",
  },
];

const principles = [
  {
    title: "Small by design",
    description:
      "Webvium Browser fits a full browser into about 300 KB. The new VPN is built with the same rule: every feature has to earn its place against app size, memory, and battery.",
  },
  {
    title: "Made for every phone",
    description:
      "A light VPN matters most on budget and older Android phones, where heavy apps slow the whole device down. Those phones are the target, not an afterthought.",
  },
  {
    title: "A fresh start",
    description:
      "This is not the 2023 experiment brought back. The rework starts from a clean codebase with the lessons learned from the first version.",
  },
];

const faqs = [
  {
    question: "Is Webvium VPN available now?",
    answer:
      "Not yet. Webvium VPN is under rework and is not available to download. The original experimental version was discontinued in 2024 and is no longer distributed or supported.",
  },
  {
    question: "What is different this time?",
    answer:
      "The new Webvium VPN is being rebuilt from scratch with one goal: to be the lightest VPN for Android, following the same small-app approach as Webvium Browser.",
  },
  {
    question: "When will Webvium VPN be released?",
    answer:
      "There is no release date yet. Join the mailing list at the bottom of this page, or follow Webvium on GitHub, YouTube, or Facebook, to hear when it is ready.",
  },
  {
    question: "Will Webvium VPN be free?",
    answer:
      "Pricing has not been announced. Webvium Browser, Web App, and the browser extensions remain free, and any VPN details will be shared here before release.",
  },
];

const section = "flex min-h-screen flex-col justify-center px-5 py-24";
const sectionAlt = `${section} bg-surface`;
const innerClass = "mx-auto w-full max-w-5xl";

function VpnGraphic() {
  return (
    <div
      role="img"
      aria-label="Webvium VPN, under rework, the lightest VPN for Android"
      className="relative mx-auto w-full max-w-xs overflow-hidden rounded-[1.75rem] border border-border bg-surface p-6 shadow-2xl"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-primary/15 blur-3xl" />
      <div className="relative flex flex-col items-center text-center">
        <span className="mt-4 flex size-28 items-center justify-center rounded-full bg-primary-soft ring-8 ring-primary/5">
          <span className="flex size-20 items-center justify-center rounded-full bg-primary text-4xl text-primary-contrast">
            <FontAwesomeIcon icon={faShieldHalved} />
          </span>
        </span>
        <p className="mt-6 text-xl font-semibold">Webvium VPN</p>
        <span className="mt-3 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
          Under rework
        </span>
        <dl className="mt-8 w-full divide-y divide-border overflow-hidden rounded-2xl border border-border bg-background text-left">
          {status.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between gap-4 px-4 py-3"
            >
              <dt className="text-xs text-muted">{item.label}</dt>
              <dd className="text-right text-sm font-medium">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default function Vpn() {
  return (
    <div>
      <JsonLd
        data={[
          organization,
          founder,
          {
            "@type": "WebPage",
            url: `${SITE_URL}/vpn`,
            name: "Webvium VPN",
            about: { "@id": `${SITE_URL}/#organization` },
          },
          faqPage(faqs),
        ]}
      />

      <section className={`${section} relative overflow-hidden`}>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-70" />
        <div
          className={`relative ${innerClass} grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_20rem]`}
        >
          <div>
            <Reveal
              as="h1"
              delay={80}
              className="text-4xl font-semibold leading-tight sm:text-6xl lg:text-5xl"
            >
              Webvium VPN is under rework
            </Reveal>
            <Reveal
              as="p"
              delay={160}
              className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg"
            >
              This time it is being built as the lightest VPN for Android. Same
              idea as Webvium Browser: a tiny app that installs in seconds and
              stays out of your way, even on older phones.
            </Reveal>
            <Reveal
              delay={240}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="#community"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-contrast transition-transform hover:scale-[1.03] active:scale-95 sm:w-auto"
              >
                <FontAwesomeIcon icon={faBell} />
                Get notified
              </Link>
              <Link
                href="/browser"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-3 font-medium transition-colors hover:bg-surface-2 sm:w-auto"
              >
                Try Webvium Browser
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <VpnGraphic />
          </Reveal>
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={innerClass}>
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            What the rework is about
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {principles.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="card p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={section}>
        <div className="mx-auto w-full max-w-2xl">
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            Webvium VPN timeline
          </Reveal>
          <ol className="mt-12 flex flex-col">
            {timeline.map((item, i) => (
              <Reveal
                as="li"
                key={item.text}
                delay={i * 70}
                className="flex gap-5 border-l border-border pb-8 pl-5 last:pb-0"
              >
                <span className="font-semibold text-primary">{item.year}</span>
                <span className="text-muted">{item.text}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className={sectionAlt}>
        <div className="mx-auto w-full max-w-2xl">
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            Webvium VPN questions
          </Reveal>
          <Reveal delay={120} className="mt-12">
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
