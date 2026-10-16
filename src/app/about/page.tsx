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
  title: "About - Webvium",
  description:
    "Learn about Webvium, an independent software ecosystem focused on performance, simplicity, and user control. Discover the story behind Webvium Browser and the philosophy that drives its development.",
  alternates: {
    canonical: "https://www.webvium.com/about",
  },
  openGraph: {
    title: "About - Webvium",
    description:
      "Learn about Webvium, an independent software ecosystem focused on performance, simplicity, and user control. Discover the story behind Webvium Browser and the philosophy that drives its development.",

    url: "https://www.webvium.com/about",
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
    title: "About - Webvium",
    description:
      "Learn about Webvium, an independent software ecosystem focused on performance, simplicity, and user control. Discover the story behind Webvium Browser and the philosophy that drives its development.",
    images: ["https://www.webvium.com/images/webvium-banner.png"],
    creator: "@mrepol742",
  },
};

const section = "flex min-h-screen flex-col justify-center px-5 py-24";
const sectionAlt = `${section} bg-surface`;
const innerClass = "mx-auto w-full max-w-5xl";

const facts = [
  { label: "Founded", value: "2018" },
  { label: "Created by", value: "Melvin Jones Repol" },
  { label: "Flagship", value: "Webvium Browser for Android" },
  { label: "Name", value: "WebView + Chromium" },
];

const differences = [
  {
    title: "Lightweight first",
    description:
      "Performance is treated as a feature, not an afterthought. Every addition is measured against its cost to app size, memory, and battery, which is why Webvium Browser still downloads in under 400 KB.",
  },
  {
    title: "Built-in functionality",
    description:
      "Ad and tracker blocking, privacy signals, tab management, and backup are part of the browser itself instead of relying on separate extensions or companion apps.",
  },
  {
    title: "Independent development",
    description:
      "Webvium has no investors and no company behind it. Decisions are made for long-term sustainability and the people using the software, not for growth targets.",
  },
];

const beyond = [
  {
    title: "Web App",
    description:
      "An open-source Android template, written in Kotlin with Jetpack Compose, for turning any website into an installable Android app.",
  },
  {
    title: "Webvium Launcher",
    description:
      "An upcoming Android home screen launcher designed around the same speed and simplicity as the browser.",
  },
  {
    title: "Browser extensions",
    description:
      "Open-source productivity and developer tools for Chromium-based desktop browsers such as Chrome, Edge, and Brave, including an ad blocker, a floating console, and a storage inspector.",
  },
];

const history = [
  {
    year: "2018",
    text: "The project starts as WebView, an open-source browser built on Android's WebView component to learn programming and understand how browsers handle data.",
  },
  {
    year: "2019",
    text: "WebView had grown heavy with AppCompat and other dependencies, so it is rewritten from scratch and renamed Webvium, with the goal of being as light and fast as possible.",
  },
  {
    year: "2020",
    text: "After two years of building on a phone with AIDE, development moves to Android Studio and Gradle, and the browser's source code is made private.",
  },
  {
    year: "2021",
    text: "Webvium is published on Google Play, Uptodown, the Samsung Galaxy Store, and the Amazon Appstore.",
  },
  {
    year: "2022",
    text: "A major rewrite adds support for the latest Android SDK.",
  },
  {
    year: "2023",
    text: "Web App launches, turning any site into an Android app. Webvium VPN launches as an experiment and is discontinued about a year later.",
  },
  {
    year: "2024",
    text: "Webvium Search launches and becomes the browser's default homepage.",
  },
  {
    year: "2025",
    text: "Webvium 3 introduces rolling releases and built-in EasyList ad blocking, and the browser extension ecosystem is announced.",
  },
  {
    year: "2026",
    text: "Webvium Launcher is announced and Webvium Search is replaced by a native homepage.",
  },
  {
    year: "2026",
    text: "Webvium acquires webvium.com after its previous owner failed to renew it, the site is rebuilt from scratch, and version 4.0.0 is submitted to Google Play.",
  },
];

const faqs = [
  {
    question: "Who makes Webvium?",
    answer:
      "Webvium is created and maintained by Melvin Jones Repol, an independent developer who started the project in 2018 while learning Java and Android development.",
  },
  {
    question: "What does the name Webvium mean?",
    answer:
      "Webvium is short for WebView and Chromium. The project was first called WebView, after the Android component it is built on, and was renamed Webvium during the 2019 rewrite.",
  },
  {
    question: "Is Webvium a company?",
    answer:
      "No. Webvium is an independent project run by one developer, without investors or outside funding. It is supported in part by voluntary donations through GitHub Sponsors.",
  },
  {
    question: "How can I contact Webvium?",
    answer:
      "Bug reports and feature requests can be sent from the report screen inside Webvium Browser or opened as issues on GitHub. The project also posts updates on YouTube and Facebook.",
  },
];

export default function About() {
  return (
    <div>
      <JsonLd
        data={[
          organization,
          founder,
          {
            "@type": "AboutPage",
            url: `${SITE_URL}/about`,
            name: "About Webvium",
            about: { "@id": `${SITE_URL}/#organization` },
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
            About Webvium, an independent Android browser project since 2018
          </Reveal>
          <Reveal
            as="p"
            delay={160}
            className="mt-6 max-w-2xl text-base text-muted sm:text-lg"
          >
            Webvium is a small software ecosystem created by developer Melvin
            Jones Repol. It is centered on Webvium Browser, a lightweight
            Android browser designed for speed, privacy, and user control, and
            includes Web App, Webvium Launcher, and open-source browser
            extensions.
          </Reveal>
          <Reveal delay={240}>
            <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
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

      <section className={sectionAlt}>
        <div className={innerClass}>
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            Why Webvium exists
          </Reveal>
          <div className="mt-8 max-w-3xl space-y-5 text-muted">
            <Reveal as="p" delay={60}>
              Webvium did not begin as a browser project. It began as a way to
              learn Android development. The first version was called WebView,
              named after the component it was built on, and it did little more
              than load a page and display it.
            </Reveal>
            <Reveal as="p" delay={120}>
              Features were then added one at a time. For a long stretch there
              was no real goal beyond making it work, whatever the cost to size,
              and the app kept growing heavier with each addition.
            </Reveal>
            <Reveal as="p" delay={180}>
              The rewrite that became Webvium, short for WebView and Chromium,
              is where the goal finally became clear: make it as light and as
              fast as possible, so it runs well even on low-end devices. Every
              change since has been measured against that.
            </Reveal>
            <Reveal as="p" delay={240}>
              That goal still matters. Many people use budget or older Android
              phones with limited storage and memory, where a heavy browser can
              make the whole phone feel slow. Webvium is built for those devices
              first.
            </Reveal>
          </div>
        </div>
      </section>

      <section className={section}>
        <div className="mx-auto w-full max-w-6xl">
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            What makes Webvium different
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {differences.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="card p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={innerClass}>
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            Webvium projects beyond the browser
          </Reveal>
          <Reveal as="p" delay={80} className="mt-6 max-w-2xl text-muted">
            Webvium Browser remains the flagship project, but the ecosystem has
            grown to include tools that share the same philosophy.
          </Reveal>
          <div className="mt-10 space-y-6">
            {beyond.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 max-w-2xl text-sm text-muted">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={section}>
        <div className={innerClass}>
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            A note from the developer
          </Reveal>
          <div className="mt-8 max-w-3xl space-y-5 text-muted">
            <Reveal as="p" delay={60}>
              I started this while teaching myself Java and Android, first on a
              phone with AIDE and later on my first laptop with Android Studio.
              WebView was the project I built to learn, and it slowly turned
              into something I actually wanted to use.
            </Reveal>
            <Reveal as="p" delay={120}>
              It has stayed a small, independent effort by choice. There is no
              team to feed and no roadmap dictated by anyone else, which means
              the only real pressure is to keep the software good.
            </Reveal>
            <Reveal as="p" delay={180}>
              If something feels slow, heavy, or confusing, that is a bug worth
              fixing. That standard has not changed since the rewrite.
            </Reveal>
            <Reveal as="p" delay={240}>
              <a
                href="https://www.melvinjonesrepol.com/blog/from-aide-to-android-studio-my-journey"
                className="text-primary transition-opacity hover:opacity-80"
              >
                Read the full story: From AIDE to Android Studio
              </a>
            </Reveal>
            <Reveal as="p" delay={300} className="text-sm text-foreground">
              Melvin Jones Repol, creator of Webvium
            </Reveal>
          </div>
        </div>
      </section>

      <section className={sectionAlt}>
        <div className="mx-auto w-full max-w-2xl">
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            Webvium timeline
          </Reveal>
          <ol className="mt-12 flex flex-col">
            {history.map((item, i) => (
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

      <section className={section}>
        <div className="mx-auto w-full max-w-2xl">
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            Questions about Webvium
          </Reveal>
          <Reveal delay={120} className="mt-12">
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <section className={`${sectionAlt} relative overflow-hidden`}>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative mx-auto w-full max-w-2xl text-center">
          <Reveal as="h2" className="text-3xl font-semibold sm:text-5xl">
            Get in touch with Webvium
          </Reveal>
          <Reveal
            as="p"
            delay={80}
            className="mx-auto mt-5 max-w-md text-muted"
          >
            Questions, bug reports, and ideas are welcome. The project is built
            in public on GitHub and YouTube.
          </Reveal>
          <Reveal
            delay={160}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="https://github.com/webvium"
              className="flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 font-medium text-primary-contrast transition-transform hover:scale-[1.03] active:scale-95 sm:w-auto"
            >
              GitHub
            </a>
            <a
              href="https://youtube.com/@webvium"
              className="flex w-full items-center justify-center rounded-full border border-border px-6 py-3 font-medium transition-colors hover:bg-surface sm:w-auto"
            >
              YouTube
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
