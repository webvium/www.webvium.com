import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faArrowRight,
  faBolt,
  faShieldHalved,
  faSliders,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Reveal from "@/components/common/Reveal";
import Accordion from "@/components/ui/Accordion";
import Marquee from "@/components/ui/Marquee";
import JsonLd, {
  SITE_URL,
  browserApp,
  faqPage,
  founder,
  organization,
} from "@/components/common/metadata/JsonLd";
import extensions from "@/lib/extensions";

const facts = [
  { label: "Download size", value: "Under 400 KB" },
  { label: "Works on", value: "Android 5.0 and later" },
  { label: "Account", value: "Not required" },
  { label: "In development since", value: "2018" },
];

const projects = [
  {
    name: "Webvium Browser",
    description:
      "The flagship Android web browser. Built-in ad and tracker blocking, tab management, data backup, and a Material Design interface in a download of under 400 KB.",
    status: "Active",
    href: "/browser",
  },
  {
    name: "Web App",
    description:
      "An open-source Android template, written in Kotlin with Jetpack Compose, that turns any website into an installable Android app with downloads, deep links, and fullscreen video support.",
    status: "Active",
    href: "/downloads",
  },
  {
    name: "Webvium Launcher",
    description:
      "A minimal Android home screen launcher that applies the same lightweight approach as the browser. Currently in development.",
    status: "In development",
    href: "/downloads",
  },
  {
    name: "Webvium VPN",
    description:
      "An experimental private networking service launched in 2023 and discontinued after about a year.",
    status: "Archived",
    href: "/about",
  },
  {
    name: "Webvium Search",
    description:
      "A search homepage that served as the browser's default start page from 2024 until it was replaced by a native homepage in 2026.",
    status: "Archived",
    href: "/about",
  },
];

const features = [
  {
    icon: faBolt,
    title: "Fast on any phone",
    description:
      "Webvium renders pages with the Android System WebView already on your device instead of shipping its own engine, so the app stays tiny and opens quickly, even on older or low-memory phones.",
  },
  {
    icon: faShieldHalved,
    title: "Private by default",
    description:
      "Ads and trackers are blocked with EasyList filters out of the box. Webvium sends Do Not Track and Global Privacy Control signals and does not collect your browsing history.",
  },
  {
    icon: faSliders,
    title: "Customizable",
    description:
      "Choose light or dark theme, add rounded screen curves, set your own photo as the background, and adjust web and privacy settings to match how you browse.",
  },
  {
    icon: faCubes,
    title: "Tools built in",
    description:
      "A tab manager, search across history, bookmarks, and downloads, a DevTools window for web developers, and one-tap backup and restore are part of the app, not add-ons.",
  },
];

const timeline = [
  {
    year: "2018",
    text: "The project begins as an open-source experiment to learn programming, understand how web browsers work, and explore how applications handle data.",
  },
  {
    year: "2019",
    text: "The original codebase had grown complex and relied heavily on AppCompat and other dependencies, so it was rewritten from scratch and the new browser was named Webvium.",
  },
  {
    year: "2020",
    text: "Development moves to Android Studio and Gradle after two years of building entirely on a phone with an APK builder. The source code is made private.",
  },
  {
    year: "2021",
    text: "Webvium is published on Google Play with help from a community member, then removed after the listed version fell out of date. It also appears on Uptodown, the Samsung Galaxy Store, and the Amazon Appstore.",
  },
  {
    year: "2022",
    text: "A major rewrite adds support for the latest Android SDK. Some features are removed, while others are improved or replaced.",
  },
  {
    year: "2023",
    text: "Webvium VPN launches as an experimental service and is discontinued after about a year. Web App is released for turning websites into Android apps.",
  },
  {
    year: "2024",
    text: "Webvium Search launches and becomes the browser's default homepage.",
  },
  {
    year: "2025",
    text: "Version 3 rebuilds the browser on a new foundation with rolling releases, EasyList ad blocking, and Do Not Track and Global Privacy Control support. The browser extension ecosystem is announced.",
  },
  {
    year: "2026",
    text: "Webvium Search is replaced by a native homepage, the webvium.com domain is acquired, and version 4.0.0 is submitted to Google Play under a new package name.",
  },
];

const principles = [
  {
    title: "No third-party dependencies",
    description:
      "Webvium is built without third-party libraries or heavy frameworks. Each component is written for a specific job, which keeps the app small, easier to audit, and quicker to update when Android changes.",
  },
  {
    title: "Privacy by default",
    description:
      "There is no account to create and no analytics inside the browser. Protection is switched on from the first launch rather than hidden in settings.",
  },
  {
    title: "Modern security",
    description:
      "Webvium targets current Android SDK requirements and relies on the system WebView, which receives security updates through Google Play independently of the app.",
  },
  {
    title: "Material Design",
    description:
      "The interface follows Material Design guidelines, so menus, settings, and gestures behave the way Android users already expect.",
  },
];

const faqs = [
  {
    question: "What is Webvium?",
    answer:
      "Webvium is an independent software project best known for Webvium Browser, a free, lightweight, privacy-focused web browser for Android. The project also includes Web App, an open-source template for turning websites into Android apps, and a set of open-source extensions for Chromium desktop browsers.",
  },
  {
    question: "Is Webvium free?",
    answer:
      "Yes. Webvium Browser, Web App, and the browser extensions are free to download and use. There is no paid tier and no core feature behind a paywall.",
  },
  {
    question: "How big is Webvium Browser?",
    answer:
      "Version 3.1.3 on Uptodown is about 375 KB. Webvium stays small because it uses the Android System WebView already installed on your phone instead of bundling a separate browser engine.",
  },
  {
    question: "What Android version do I need?",
    answer:
      "Webvium Browser runs on Android 5.0 (Lollipop) and later, which covers nearly every Android phone and tablet still in use.",
  },
  {
    question: "Does Webvium collect my data?",
    answer:
      "No. The browser does not track, collect, or share your browsing activity. It does not require an account, and there are no analytics built into the app.",
  },
  {
    question: "Is Webvium open source?",
    answer:
      "Web App and the browser extensions are open source on GitHub. Webvium Browser is developed independently with private source code and is distributed for free through Google Play and Uptodown.",
  },
  {
    question: "How often is Webvium updated?",
    answer:
      "Webvium uses a rolling-release model, so fixes and improvements ship continuously instead of waiting for large scheduled versions. The changelog lists every notable release.",
  },
  {
    question: "Where do I get support?",
    answer:
      "Use the in-app report screen to send bug reports and crash logs, open an issue on GitHub, or reach the project through the Webvium pages on Facebook and YouTube.",
  },
];

const community = [
  {
    label: "GitHub",
    description:
      "Source code for Web App and the extensions, issue tracking, and releases.",
    href: "https://github.com/webvium",
    icon: faGithub,
  },
  {
    label: "YouTube",
    description: "Feature walkthroughs, release overviews, and demos.",
    href: "https://youtube.com/@webvium",
    icon: faYoutube,
  },
  {
    label: "Facebook",
    description: "Announcements, community discussion, and project updates.",
    href: "https://facebook.com/the.webvium.project",
    icon: faFacebook,
  },
];

const section = "flex min-h-screen flex-col justify-center px-5 py-24";
const sectionAlt = `${section} bg-surface`;
const inner = "mx-auto w-full max-w-6xl";

export default function Home() {
  return (
    <div>
      <JsonLd
        data={[
          organization,
          founder,
          browserApp,
          {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            name: "Webvium",
            url: SITE_URL,
            publisher: { "@id": `${SITE_URL}/#organization` },
          },
          faqPage(faqs),
        ]}
      />

      <section className={`${section} relative overflow-hidden`}>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative mx-auto w-full max-w-3xl text-center">
          <Reveal
            as="h1"
            delay={80}
            className="text-4xl font-semibold leading-tight sm:text-6xl"
          >
            Webvium, a lightweight and private web browser for Android
          </Reveal>

          <Reveal
            as="p"
            delay={160}
            className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg"
          >
            Webvium Browser is a free Android browser that blocks ads and
            trackers by default, needs no account, and downloads in under 400
            KB. It is part of a small, independent set of tools that includes
            Web App and open-source extensions for desktop browsers.
          </Reveal>

          <Reveal
            delay={240}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href="/downloads"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-contrast transition-transform hover:scale-[1.03] active:scale-95 sm:w-auto"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download Webvium
            </Link>

            <Link
              href="/browser"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-3 font-medium transition-colors hover:bg-surface-2 sm:w-auto"
            >
              See browser features
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border text-left sm:grid-cols-4">
              {facts.map((fact) => (
                <div key={fact.label} className="bg-background px-4 py-3">
                  <dt className="text-xs text-muted">{fact.label}</dt>
                  <dd className="mt-1 text-sm font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section id="features" className={sectionAlt}>
        <div className={inner}>
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            What Webvium Browser does differently
          </Reveal>
          <Reveal as="p" delay={80} className="mt-3 max-w-2xl text-muted">
            Most Android browsers download tens of megabytes and rely on
            extensions or separate apps for privacy. Webvium puts ad blocking,
            privacy signals, and everyday tools inside one small app.
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 80} className="card p-6">
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

      <section id="ecosystem" className={section}>
        <div className={inner}>
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            Webvium projects for Android and the web
          </Reveal>
          <Reveal as="p" delay={80} className="mt-3 max-w-2xl text-muted">
            Webvium started as a single browser and grew into a handful of
            focused projects. Some are active, one is in development, and two
            have been retired after serving their purpose.
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.name} delay={i * 70}>
                <Link
                  href={project.href}
                  className="card group flex h-full flex-col p-6 transition-transform hover:-translate-y-1"
                >
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted">
                    {project.description}
                  </p>
                  <span className="mt-4 text-sm text-muted">
                    {project.status}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="extensions" className={sectionAlt}>
        <div className={inner}>
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            Open-source extensions for Chrome, Edge, and Brave
          </Reveal>
          <Reveal as="p" delay={80} className="mt-3 max-w-2xl text-muted">
            Small utilities for Chromium-based desktop browsers, covering ad
            blocking, in-page debugging, storage inspection, and a custom new
            tab page. The source for each one is on GitHub.
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-12">
          <Marquee
            items={extensions.map((extension) => (
              <Link
                key={extension.name}
                href={extension.github_url ?? "/"}
                className="card flex h-full w-72 flex-col p-6"
                style={{ boxShadow: "none" }}
              >
                <h3 className="text-lg font-semibold">{extension.name}</h3>
                <p className="mt-3 line-clamp-4 text-sm text-muted">
                  {extension.description}
                </p>
              </Link>
            ))}
          />
        </Reveal>
      </section>

      <section id="journey" className={section}>
        <div className="mx-auto w-full max-w-2xl">
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            Webvium history, from 2018 to today
          </Reveal>
          <Reveal as="p" delay={80} className="mt-3 text-muted">
            Webvium has been developed by one person for more than eight years,
            through several rewrites and app store moves.
          </Reveal>

          <ol className="mt-12 flex flex-col">
            {timeline.map((item, i) => (
              <Reveal
                as="li"
                key={item.text}
                delay={i * 80}
                className="flex gap-5 border-l border-border pb-8 pl-5 last:pb-0"
              >
                <span className="font-semibold text-primary">{item.year}</span>
                <span className="text-muted">{item.text}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="principles" className={sectionAlt}>
        <div className={inner}>
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            Why a lightweight browser matters
          </Reveal>
          <Reveal as="p" delay={80} className="mt-3 max-w-2xl text-muted">
            A smaller app takes less storage, starts faster, and uses less
            memory and battery. That matters most on budget and older phones,
            where a heavy browser can make the whole device feel slow.
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {principles.map((principle, i) => (
              <Reveal
                key={principle.title}
                delay={(i % 2) * 80}
                className="card p-6"
              >
                <h3 className="text-lg font-semibold">{principle.title}</h3>
                <p className="mt-2 text-sm text-muted">
                  {principle.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className={section}>
        <div className="mx-auto w-full max-w-2xl">
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            Frequently asked questions about Webvium
          </Reveal>
          <Reveal delay={120} className="mt-12">
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <section id="follow" className={sectionAlt}>
        <div className={inner}>
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            Follow Webvium development
          </Reveal>
          <Reveal as="p" delay={80} className="mt-3 max-w-2xl text-muted">
            Webvium is built in public. Release notes, previews, and
            announcements are posted on these channels first.
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {community.map((item, i) => (
              <Reveal key={item.label} delay={i * 80}>
                <Link
                  href={item.href}
                  className="card flex h-full flex-col p-6 transition-transform hover:-translate-y-1"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <FontAwesomeIcon icon={item.icon} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{item.label}</h3>
                  <p className="mt-2 text-sm text-muted">{item.description}</p>
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
            Download Webvium Browser for Android
          </Reveal>
          <Reveal
            as="p"
            delay={80}
            className="mx-auto mt-5 max-w-md text-muted"
          >
            Free, no account needed, and small enough to install in seconds on
            any phone running Android 5.0 or later.
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
