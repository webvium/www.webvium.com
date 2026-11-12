import extensions, { Extension } from "@/lib/extensions";
import { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/common/Reveal";
import HeroMedia from "@/components/common/HeroMedia";
import Accordion from "@/components/ui/Accordion";
import JsonLd, {
  faqPage,
  founder,
  organization,
} from "@/components/common/metadata/JsonLd";

export const metadata: Metadata = {
  title: "Downloads - Webvium",
  description:
    "Get Webvium Browser 4 on Google Play or Uptodown. Google Play is the primary release channel, and Uptodown follows its releases with a separately signed build.",
  alternates: {
    canonical: "https://www.webvium.com/downloads",
  },
  openGraph: {
    title: "Downloads - Webvium",
    description:
      "Get Webvium Browser 4 on Google Play or Uptodown. Google Play is the primary release channel, and Uptodown follows its releases with a separately signed build.",
    url: "https://www.webvium.com/downloads",
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
    title: "Downloads - Webvium",
    description:
      "Get Webvium Browser 4 on Google Play or Uptodown. Google Play is the primary release channel, and Uptodown follows its releases with a separately signed build.",
    images: ["https://www.webvium.com/images/webvium-banner.png"],
    creator: "@mrepol742",
  },
};

interface Download {
  name: string;
  status: "Active" | "Coming soon" | "Under rework" | "Deprecated";
  description: string;
  details: { label: string; value: string }[];
  actions: { label: string; href: string; primary?: boolean }[];
}

const downloads: Download[] = [
  {
    name: "Webvium Browser",
    status: "Active",
    description:
      "A free, lightweight Android web browser with a calm new interface, a built-in ad blocker with over 100,000 filter rules, smart search, and experimental extensions. Available on Google Play and Uptodown. The two builds are signed differently, so pick one store and keep updating from it.",
    details: [
      { label: "Platform", value: "Android 5.0+" },
      { label: "Version", value: "4.0.1" },
      { label: "Size", value: "About 300 KB" },
      { label: "Price", value: "Free" },
    ],
    actions: [
      {
        label: "Get it on Google Play",
        href: "https://play.google.com/store/apps/details?id=com.webvium.browser",
        primary: true,
      },
      {
        label: "Get it on Uptodown",
        href: "https://webvium.en.uptodown.com/android",
      },
      { label: "Learn more", href: "/browser" },
    ],
  },
  {
    name: "Web App",
    status: "Active",
    description:
      "An open-source Android project template that turns any website into an installable app. It includes fullscreen video, file downloads, deep links, custom error pages, and Chrome Custom Tabs for external links. Clone it, set your URL, and build the APK in Android Studio.",
    details: [
      { label: "Platform", value: "Android" },
      { label: "Built with", value: "Kotlin, Jetpack Compose" },
      { label: "License", value: "MIT" },
    ],
    actions: [
      {
        label: "Fork on GitHub",
        href: "https://github.com/webvium/web-appp",
        primary: true,
      },
    ],
  },
  {
    name: "Webvium Launcher",
    status: "Coming soon",
    description:
      "A minimal Android home screen launcher built with the same focus on speed and small size as the browser. It is under active development, and you can follow progress on GitHub.",
    details: [
      { label: "Platform", value: "Android" },
      { label: "Status", value: "In development" },
    ],
    actions: [
      {
        label: "View on GitHub",
        href: "https://github.com/webvium/webvium-launcher",
        primary: true,
      },
    ],
  },
  {
    name: "Webvium VPN",
    status: "Under rework",
    description:
      "First launched as an experiment in 2023 and discontinued about a year later. Webvium VPN is now under rework, and this time it is being built as the lightest VPN for Android.",
    details: [
      { label: "Platform", value: "Android" },
      { label: "Status", value: "Under rework" },
    ],
    actions: [{ label: "Learn more", href: "/vpn", primary: true }],
  },
  {
    name: "Webvium Search",
    status: "Deprecated",
    description:
      "The search homepage that served as Webvium Browser's default start page from 2024. It was replaced by a native homepage inside the browser in 2026. The source code remains available.",
    details: [{ label: "Active", value: "2024 to 2026" }],
    actions: [
      {
        label: "View on GitHub",
        href: "https://github.com/mrepol742/mrepol742.github.io/tree/master/search",
      },
    ],
  },
];

const extensionSteps = [
  "Open the extension's GitHub page and download the repository as a ZIP file, then extract it.",
  "In Chrome, Edge, or Brave, open the extensions page (chrome://extensions, edge://extensions, or brave://extensions).",
  "Turn on Developer mode, choose Load unpacked, and select the extracted folder.",
  "Check the repository README for any extra build or setup steps for that extension.",
];

const faqs = [
  {
    question: "Which store should I use to download Webvium Browser?",
    answer:
      "Google Play is the primary release channel and receives updates first. Uptodown is a supported third-party store that follows Google Play releases, which is useful on devices without Google Play.",
  },
  {
    question:
      "Is Webvium available on the Samsung Galaxy Store or Amazon Appstore?",
    answer:
      "Webvium was listed on the Samsung Galaxy Store and Amazon Appstore in the past, but those listings are no longer maintained. Use Google Play or Uptodown to get the current compatible version.",
  },
  {
    question:
      "Can the Uptodown version update the Google Play version, or the other way around?",
    answer:
      "No. The Google Play and Uptodown builds are signed with different keys, so they are not interchangeable. Installing the Uptodown APK over a Google Play install will fail, and Google Play will not update a copy installed from Uptodown. To switch stores, uninstall Webvium first, which removes its data, then install it from the store you want to keep using.",
  },
  {
    question: "Can I update an older Webvium install?",
    answer:
      "Older Webvium releases are not compatible with the 4.x releases because version 4 uses a new package name. Install the current version from Google Play or Uptodown instead of updating an old APK.",
  },
  {
    question: "Are the downloads free?",
    answer:
      "Yes. Every Webvium app and extension is free to download and use, with no paid version and no in-app purchases.",
  },
  {
    question: "Are the browser extensions on the Chrome Web Store?",
    answer:
      "Some are. Every extension is published as an open-source project on GitHub, and extensions that are also listed on the Chrome Web Store link to it from their own page. Anything not on the store can be installed in any Chromium-based browser by loading the unpacked extension folder in developer mode.",
  },
];

const section = "flex min-h-screen flex-col justify-center px-5 py-24";
const sectionAlt = `${section} bg-surface`;
const innerClass = "mx-auto w-full max-w-5xl";

export default function Downloads() {
  return (
    <div>
      <JsonLd
        data={[
          organization,
          founder,
          {
            "@type": "ItemList",
            name: "Webvium downloads",
            itemListElement: downloads
              .filter((item) => item.actions.length > 0)
              .map((item, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: item.name,
                url: item.actions[0].href,
              })),
          },
          faqPage(faqs),
        ]}
      />

      <section className={`${section} relative overflow-hidden`}>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-70" />

        <div
          className={`relative ${innerClass} grid items-center gap-14 lg:grid-cols-2`}
        >
          <div>
            <Reveal
              as="h1"
              delay={80}
              className="text-4xl font-semibold leading-tight sm:text-6xl lg:text-5xl"
            >
              Download Webvium Browser for Android
            </Reveal>
            <Reveal
              as="p"
              delay={160}
              className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg"
            >
              Webvium Browser 4 is free on Google Play and Uptodown for Android
              5.0 and later. This page also lists Web App, Webvium Launcher,
              Webvium VPN, and the open-source extensions for Chrome, Edge, and
              Brave.
            </Reveal>

            <Reveal
              delay={240}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="#apps"
                className="flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 font-medium text-primary-contrast transition-transform hover:scale-[1.03] active:scale-95 sm:w-auto"
              >
                Android apps
              </Link>
              <Link
                href="#extensions"
                className="flex w-full items-center justify-center rounded-full border border-border px-6 py-3 font-medium transition-colors hover:bg-surface-2 sm:w-auto"
              >
                Browser extensions
              </Link>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <HeroMedia
              type="wide"
              shot={{
                src: "/images/00-feature-graphic-1024x500.png",
                alt: "Webvium, a 300 KB web browser for Android with an ad blocker, extensions, and fast search",
              }}
              width={1024}
              height={500}
            />
          </Reveal>
        </div>
      </section>

      <section id="apps" className={sectionAlt}>
        <div className={innerClass}>
          <Reveal>
            <aside className="mb-22 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Where to get the current compatible release
              </h2>
              <p className="mt-4 max-w-3xl text-muted">
                Webvium 4 is live on Google Play, Webvium&apos;s primary
                distribution channel, and Uptodown, a supported third-party
                store that follows Google Play releases. The two builds are
                signed differently, so the Uptodown version cannot update the
                Google Play version (or the other way around). Pick one store
                and keep updating from it. Releases older than version 4 are not
                compatible with either.
              </p>
            </aside>
          </Reveal>
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            Webvium apps and projects
          </Reveal>
          <Reveal as="p" delay={80} className="mt-3 max-w-2xl text-muted">
            Current apps, projects in development, and retired projects, with
            where to get each one.
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {downloads.map((item, i) => (
              <Reveal
                key={item.name}
                delay={(i % 2) * 80}
                className="card flex flex-col p-6"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <span className="shrink-0 text-sm text-muted">
                    {item.status}
                  </span>
                </div>
                <p className="mt-2 flex-1 text-sm text-muted">
                  {item.description}
                </p>
                <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  {item.details.map((detail) => (
                    <div key={detail.label}>
                      <dt className="text-xs text-muted">{detail.label}</dt>
                      <dd className="font-medium">{detail.value}</dd>
                    </div>
                  ))}
                </dl>
                {item.actions.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {item.actions.map((action) => (
                      <Link
                        key={action.label}
                        href={action.href}
                        className={
                          action.primary
                            ? "rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-contrast transition-transform hover:scale-[1.03] active:scale-95"
                            : "rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-2"
                        }
                      >
                        {action.label}
                      </Link>
                    ))}
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="extensions" className={section}>
        <div className={innerClass}>
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            Browser extensions for Chrome, Edge, and Brave
          </Reveal>
          <Reveal as="p" delay={80} className="mt-3 max-w-2xl text-muted">
            Free, open-source extensions for Chromium-based desktop browsers.
            Each one does a single job, from blocking ads to inspecting cookies
            and local storage without opening DevTools.
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {extensions.map((extension: Extension, i: number) => (
              <Reveal
                key={extension.name}
                delay={i * 70}
                className="card flex flex-col p-6"
              >
                <h3 className="text-lg font-semibold">{extension.name}</h3>
                <p className="mt-3 flex-1 text-sm text-muted">
                  {extension.description}
                </p>
                {extension.github_url && (
                  <Link
                    href={extension.github_url}
                    className="mt-4 text-sm text-primary transition-opacity hover:opacity-80"
                  >
                    View {extension.name} on GitHub
                  </Link>
                )}
              </Reveal>
            ))}
          </div>

          <Reveal className="card mt-12 p-6 sm:p-8">
            <h3 className="text-xl font-semibold">
              How to install a Webvium extension from GitHub
            </h3>
            <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm text-muted">
              {extensionSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className={sectionAlt}>
        <div className="mx-auto w-full max-w-2xl">
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            Download questions
          </Reveal>
          <Reveal delay={120} className="mt-12">
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <section className={`${section} relative overflow-hidden`}>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative mx-auto w-full max-w-2xl text-center">
          <Reveal as="h2" className="text-3xl font-semibold sm:text-5xl">
            Small apps that respect your device
          </Reveal>
          <Reveal
            as="p"
            delay={80}
            className="mx-auto mt-5 max-w-md text-muted"
          >
            Every Webvium project shares the same focus on performance,
            simplicity, and user control. See what is new in each release.
          </Reveal>
          <Reveal delay={160} className="mt-10">
            <Link
              href="/changelog"
              className="inline-flex items-center rounded-full border border-border px-6 py-3 font-medium transition-colors hover:bg-surface-2"
            >
              Read the changelog
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
