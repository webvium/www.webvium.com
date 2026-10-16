import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faSliders,
  faGaugeHigh,
  faPalette,
  faShieldHalved,
  faUserShield,
  faLayerGroup,
  faMagnifyingGlass,
  faCode,
  faBug,
  faCloudArrowDown,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/common/Reveal";
import Accordion from "@/components/ui/Accordion";
import JsonLd, {
  browserApp,
  faqPage,
  founder,
  organization,
} from "@/components/common/metadata/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browser - Webvium",
  description:
    "Webvium Browser is a free, lightweight Android web browser with built-in ad and tracker blocking, no account required, and a download under 400 KB. Runs on Android 5.0 and later.",
  alternates: {
    canonical: "https://www.webvium.com/browser",
  },
  openGraph: {
    title: "Browser - Webvium",
    description:
      "Webvium Browser is a free, lightweight Android web browser with built-in ad and tracker blocking, no account required, and a download under 400 KB. Runs on Android 5.0 and later.",
    url: "https://www.webvium.com/browser",
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
    title: "Browser - Webvium",
    description:
      "Webvium Browser is a free, lightweight Android web browser with built-in ad and tracker blocking, no account required, and a download under 400 KB. Runs on Android 5.0 and later.",
    images: ["https://www.webvium.com/images/webvium-banner.png"],
    creator: "@mrepol742",
  },
};

const features = [
  {
    icon: faShieldHalved,
    title: "Built-in ad and tracker blocking",
    description:
      "Webvium blocks ads and trackers using EasyList, the same filter list used by many popular ad blockers. It works from the first launch with no extension to install, and you can turn it off in settings for sites you want to support.",
  },
  {
    icon: faUserShield,
    title: "Privacy signals and no tracking",
    description:
      "Webvium sends Do Not Track and Global Privacy Control signals to every site you visit. The browser itself never tracks, collects, or shares your browsing activity, and there is no account to sign in to.",
  },
  {
    icon: faGaugeHigh,
    title: "Lightweight and fast",
    description:
      "Webvium uses the Android System WebView already on your phone to render pages, so the app itself stays under 400 KB. It installs in seconds, opens quickly, and stays responsive on older and low-memory devices.",
  },
  {
    icon: faLayerGroup,
    title: "Tab manager with saved sessions",
    description:
      "A dedicated tab manager keeps tabs and favicons in local storage, restores your session after the app closes, and makes switching between open pages quick. You can also run multiple Webvium instances side by side.",
  },
  {
    icon: faMagnifyingGlass,
    title: "Search history, bookmarks, and downloads",
    description:
      "One search box finds pages in your history, bookmarks, and downloaded files. The homepage shows recently visited sites, shortcuts, and an optional RSS news feed that is cached on your device.",
  },
  {
    icon: faSliders,
    title: "Deep customization",
    description:
      "Switch between light and dark themes, add soft rounded screen curves, or set your own photo as the background. Web preferences and privacy settings can be adjusted at any time.",
  },
  {
    icon: faPalette,
    title: "Material Design interface",
    description:
      "A clean interface based on Material Design, with carefully chosen colors and icons and the Maven Pro typeface, so menus and settings feel familiar on Android.",
  },
  {
    icon: faCode,
    title: "Developer tools",
    description:
      "A DevTools window lets web developers inspect pages and read console output directly on the phone, which is useful for testing mobile sites without a desktop connection.",
  },
  {
    icon: faCloudArrowDown,
    title: "Backup, restore, and export",
    description:
      "Back up your history, bookmarks, searches, and settings with a tap, then restore them on a new phone or after reinstalling. Bookmarks can be imported and exported.",
  },
  {
    icon: faBug,
    title: "In-app bug reports",
    description:
      "If something breaks, the report screen sends feedback and crash logs straight to the developer, without needing to write an email.",
  },
];

const steps = [
  {
    title: "Open the store listing",
    description:
      "Go to the Downloads page and choose Google Play or Uptodown. Google Play is the primary release channel, and Uptodown follows its releases.",
  },
  {
    title: "Install the app",
    description:
      "Tap Install. Because the download is under 400 KB, installation usually takes only a few seconds, even on a slow connection.",
  },
  {
    title: "Start browsing",
    description:
      "Open Webvium and start browsing right away. Ad blocking and privacy signals are already on, and there is no account or setup wizard.",
  },
  {
    title: "Make it your default browser (optional)",
    description:
      "In Android Settings, open Apps, then Default apps, then Browser app, and choose Webvium so links from other apps open in it.",
  },
];

const resources = [
  { label: "Introducing Webvium Browser for Android Devices", href: "#" },
  { label: "Webvium release changelog", href: "/changelog" },
  {
    label: "Download Webvium Browser on Uptodown",
    href: "https://webvium.en.uptodown.com/android",
  },
  { label: "Follow Webvium on GitHub", href: "https://github.com/webvium" },
  {
    label: "Follow Webvium on Facebook",
    href: "https://facebook.com/the.webvium.project",
  },
  {
    label: "Follow Webvium on YouTube",
    href: "https://youtube.com/@webvium",
  },
  {
    label: "Privacy Policy",
    href: "https://www.melvinjonesrepol.com/legal/privacy-policy",
  },
  {
    label: "Terms of Service",
    href: "https://www.melvinjonesrepol.com/legal/terms-of-service",
  },
];

const gallery = [
  "/images/webvium-1.jpg",
  "/images/webvium-2.jpg",
  "/images/webvium-3.jpg",
  "/images/webvium-4.jpg",
  "/images/webvium-5.jpg",
  "/images/webvium-6.jpg",
  "/images/webvium-7.jpg",
  "/images/webvium-8.jpg",
  "/images/webvium-9.jpg",
  "/images/webvium-10.jpg",
  "/images/webvium-11.jpg",
];

const requirements = [
  { label: "Operating system", value: "Android 5.0 (Lollipop) and later" },
  { label: "Download size", value: "About 375 KB (version 3.1.3)" },
  { label: "Rendering engine", value: "Android System WebView (Chromium)" },
  { label: "Price", value: "Free, no in-app purchases" },
  { label: "Account", value: "Not required" },
  { label: "Permissions", value: "Storage for downloads only" },
  { label: "Language", value: "English" },
  { label: "Developer", value: "Melvin Jones Repol" },
];

const faqs = [
  {
    question: "What is Webvium Browser?",
    answer:
      "Webvium Browser is a free, lightweight web browser for Android, developed independently since 2018. It blocks ads and trackers by default, sends Do Not Track and Global Privacy Control signals, does not require an account, and downloads in under 400 KB.",
  },
  {
    question: "Why is Webvium so small?",
    answer:
      "Webvium uses the Android System WebView, the Chromium-based engine that Android already provides, instead of bundling its own copy. It also avoids third-party libraries, so almost everything in the download is Webvium's own code.",
  },
  {
    question: "Where can I install Webvium Browser?",
    answer:
      "Install Webvium Browser from Google Play or Uptodown. Google Play is the primary release channel, and Uptodown follows the same releases. Version 4.0.0 is currently going through Google Play review.",
  },
  {
    question: "Can I use an older version?",
    answer:
      "Older Webvium versions are not compatible with newer Google Play releases. Version 4.0.0 uses a new package name, so older installs will not update to it automatically. Install the current version from Google Play or Uptodown instead.",
  },
  {
    question: "Does the ad blocker need setup?",
    answer:
      "No. Ad and tracker blocking uses EasyList filters and is on by default. You can adjust it in settings at any time.",
  },
  {
    question: "Is Webvium safe to use?",
    answer:
      "Webvium does not collect your browsing data and asks only for the storage permission needed for downloads. Pages are rendered by the Android System WebView, which Google updates with security fixes through Google Play.",
  },
  {
    question: "Can I move my data from another browser?",
    answer:
      "You can import and export bookmarks, and back up history, searches, and settings from within Webvium.",
  },
  {
    question: "Will it work on an old phone?",
    answer:
      "Yes. Webvium supports Android 5.0 and later and is built to stay responsive on older and lower-end devices with limited storage and memory.",
  },
  {
    question: "Is Webvium Browser open source?",
    answer:
      "No. The browser's source code has been private since 2020. Related projects such as Web App and the desktop browser extensions are open source on GitHub.",
  },
];

const section = "flex min-h-screen flex-col justify-center px-5 py-24";
const sectionAlt = `${section} bg-surface`;
const innerClass = "mx-auto w-full max-w-5xl";

export default function WebviumBrowser() {
  return (
    <div>
      <JsonLd
        data={[
          organization,
          founder,
          {
            ...browserApp,
            description:
              "A free, lightweight Android web browser with built-in ad and tracker blocking, Do Not Track and Global Privacy Control support, and no account required.",
            featureList: features.map((feature) => feature.title),
          },
          faqPage(faqs),
        ]}
      />

      <section className={`${section} relative overflow-hidden`}>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-70" />
        <div className={`relative ${innerClass}`}>
          <Reveal
            as="h1"
            delay={80}
            className="text-4xl font-semibold leading-tight sm:text-6xl"
          >
            Webvium Browser: a free, private Android browser under 400 KB
          </Reveal>
          <Reveal
            as="p"
            delay={160}
            className="mt-6 max-w-2xl text-base text-muted sm:text-lg"
          >
            Webvium Browser blocks ads and trackers out of the box, sends Do Not
            Track and Global Privacy Control signals, and needs no account. It
            runs on Android 5.0 and later and has been developed independently
            since 2018.
          </Reveal>
          <Reveal delay={240} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/downloads"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-contrast transition-transform hover:scale-[1.03] active:scale-95"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download for Android
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 font-medium transition-colors hover:bg-surface-2"
            >
              View all features
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface px-5 py-12">
        <div className={innerClass}>
          <Reveal>
            <aside
              className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8"
              aria-labelledby="release-status-title"
            >
              <h2
                id="release-status-title"
                className="text-2xl font-semibold sm:text-3xl"
              >
                Version 4.0.0 is in Google Play review
              </h2>
              <p className="mt-4 max-w-3xl text-muted">
                Webvium 4.0.0 brings bug fixes and a new package name, and it is
                rolling out through Google Play. Once it is live, Google Play
                will be the primary source for installs and updates, and
                Uptodown will follow Google Play releases.
              </p>
              <p className="mt-4 max-w-3xl text-sm text-muted">
                Because the package name changed, older versions will not update
                to the new release automatically. Please install the current
                version from Google Play or Uptodown.
              </p>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={innerClass}>
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            What is Webvium Browser?
          </Reveal>
          <div className="mt-6 max-w-2xl space-y-5 text-muted">
            <Reveal as="p" delay={80}>
              Webvium Browser is an Android web browser built from scratch by
              independent developer Melvin Jones Repol. Development started in
              2018 with a single goal: make the lightest, fastest, and most
              private full-featured browser for Android.
            </Reveal>
            <Reveal as="p" delay={140}>
              The name comes from WebView and Chromium. Instead of shipping its
              own browser engine, Webvium uses the Android System WebView that
              is already installed on your phone. That engine is based on
              Chromium and is kept up to date by Google, which lets Webvium stay
              under 400 KB while still loading modern websites correctly.
            </Reveal>
            <Reveal as="p" delay={200}>
              Most browsers grow heavier with every release. Webvium goes the
              other way. The core stays small, the interface stays out of your
              way, and the features that matter most, like ad blocking, tab
              management, and data backup, are built in rather than left to
              add-ons.
            </Reveal>
            <Reveal as="p" delay={260}>
              The result is a browser that installs in seconds, opens quickly,
              and keeps browsing, downloads, and sharing easy, even on older
              hardware with limited memory.
            </Reveal>
          </div>
        </div>
      </section>

      <section id="features" className={section}>
        <div className={innerClass}>
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            Webvium Browser features
          </Reveal>
          <Reveal as="p" delay={80} className="mt-3 max-w-2xl text-muted">
            Everything below is included in the app. There are no paid tiers, no
            required extensions, and no separate downloads.
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {features.map((feature, i) => (
              <Reveal
                key={feature.title}
                delay={(i % 2) * 80}
                className="card p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <FontAwesomeIcon icon={feature.icon} />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted">{feature.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={innerClass}>
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            Screenshots of Webvium on Android
          </Reveal>
          <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {gallery.map((src, i) => (
              <Reveal
                key={src}
                delay={i * 60}
                className="card relative flex h-80 w-44 shrink-0 snap-start flex-col justify-end overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Webvium Browser for Android, screenshot ${i + 1} of ${gallery.length}`}
                  fill
                  sizes="176px"
                  className="object-cover"
                />
                <span className="relative m-3 rounded-full bg-background/70 px-2 py-1 text-xs text-muted">
                  {String(i + 1).padStart(2, "0")} / {gallery.length}
                </span>
              </Reveal>
            ))}
          </div>
          <span className="mt-10 text-sm text-muted">
            Screenshots may not reflect the latest version.
          </span>
        </div>
      </section>

      <section className={section}>
        <div className={innerClass}>
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            System requirements and app details
          </Reveal>
          <Reveal as="p" delay={80} className="mt-3 max-w-2xl text-muted">
            No account, no sign-up, and nothing to configure before you start.
          </Reveal>
          <dl className="card mt-10 overflow-hidden">
            {requirements.map((req, i) => (
              <Reveal
                key={req.label}
                delay={i * 60}
                className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 last:border-b-0"
              >
                <dt className="text-sm text-muted">{req.label}</dt>
                <dd className="text-right text-sm font-medium">{req.value}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={innerClass}>
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            How to install Webvium Browser
          </Reveal>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2">
            {steps.map((step, i) => (
              <Reveal
                as="li"
                key={step.title}
                delay={(i % 2) * 80}
                className="card p-6"
              >
                <span className="text-sm font-semibold text-primary">
                  Step {i + 1}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="faq" className={section}>
        <div className="mx-auto w-full max-w-2xl">
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            Webvium Browser questions
          </Reveal>
          <Reveal delay={120} className="mt-12">
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={innerClass}>
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            Resources and links
          </Reveal>
          <div className="card mt-10 overflow-hidden">
            {resources.map((resource, i) => (
              <Reveal key={resource.label} delay={i * 50}>
                <Link
                  href={resource.href}
                  className="group flex items-center justify-between gap-4 border-b border-border px-5 py-4 last:border-b-0 transition-colors hover:bg-surface-2"
                >
                  <span className="text-sm">{resource.label}</span>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="shrink-0 text-muted transition-colors group-hover:text-primary"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`${section} relative overflow-hidden`}>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative mx-auto w-full max-w-2xl text-center">
          <Reveal as="h2" className="text-3xl font-semibold sm:text-5xl">
            Try Webvium Browser on your phone
          </Reveal>
          <Reveal
            as="p"
            delay={80}
            className="mx-auto mt-5 max-w-md text-muted"
          >
            Free on Google Play and Uptodown. Installs in seconds on Android 5.0
            and later.
          </Reveal>
          <Reveal delay={160} className="mt-10">
            <Link
              href="/downloads"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-primary-contrast transition-transform hover:scale-[1.03] active:scale-95"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download now
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
