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
  title: "Donate - Webvium",
  description:
    "Support the independent development of Webvium Browser and help fund continued improvements, maintenance, and new projects.",
  alternates: {
    canonical: "https://www.webvium.com/donate",
  },
  openGraph: {
    title: "Donate - Webvium",
    description:
      "Support the independent development of Webvium Browser and help fund continued improvements, maintenance, and new projects.",
    url: "https://www.webvium.com/donate",
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
    title: "Donate - Webvium",
    description:
      "Support the independent development of Webvium Browser and help fund continued improvements, maintenance, and new projects.",
    images: ["https://www.webvium.com/images/webvium-banner.png"],
    creator: "@mrepol742",
  },
};

const section = "flex min-h-screen flex-col justify-center px-5 py-24";
const sectionAlt = `${section} bg-surface`;
const innerClass = "mx-auto w-full max-w-5xl";

const support = [
  {
    title: "Keep Webvium independent",
    description:
      "Donations help Webvium continue without investors, subscriptions, or pressure to monetize the browser in ways that compromise privacy or performance.",
  },
  {
    title: "Fund development time",
    description:
      "Webvium is built and maintained by one developer. Support pays for time spent on bug fixes, Android and WebView compatibility updates, security work, and new features.",
  },
  {
    title: "Cover running costs",
    description:
      "Contributions help pay for the webvium.com domain, website hosting, email delivery, app store accounts, and the test devices used to check Webvium on older phones.",
  },
  {
    title: "Support the wider ecosystem",
    description:
      "Donations also help maintain Web App, the open-source browser extensions, Webvium Launcher, and future projects.",
  },
];

const commitments = [
  {
    title: "No paywalled browser features",
    description:
      "Donations support development, but they do not create a separate premium version of Webvium or lock core browser features behind payment.",
  },
  {
    title: "No forced accounts",
    description:
      "Webvium is designed to work without requiring users to create an account just to browse the web.",
  },
  {
    title: "Performance stays a priority",
    description:
      "New features are evaluated against their impact on speed, application size, resource usage, and overall simplicity.",
  },
  {
    title: "Independent decisions",
    description:
      "The project remains free to make technical and product decisions based on what is best for Webvium instead of outside commercial pressure.",
  },
];

const otherWays = [
  {
    title: "Report bugs",
    description:
      "Good bug reports help identify problems faster and improve Webvium for everyone.",
  },
  {
    title: "Share feedback",
    description:
      "Suggestions and real-world feedback help shape future improvements and identify areas that need more attention.",
  },
  {
    title: "Recommend Webvium",
    description:
      "Sharing Webvium with someone who may find it useful is one of the simplest ways to help the project grow.",
  },
  {
    title: "Contribute on GitHub",
    description:
      "Developers can follow development, review public projects, report issues, and contribute where repositories are open.",
  },
];

const faqs = [
  {
    question: "Do I need to donate to use Webvium?",
    answer:
      "No. Webvium Browser, Web App, and the browser extensions are free to use with every feature included. Donations are optional.",
  },
  {
    question: "How can I donate to Webvium?",
    answer:
      "Donations are accepted through GitHub Sponsors at github.com/sponsors/mrepol742. You can make a one-time contribution or set up a recurring monthly sponsorship.",
  },
  {
    question: "Does donating unlock extra features?",
    answer:
      "No. There is no premium version of Webvium. Donors get the same browser as everyone else, and donations do not change how Webvium handles your data.",
  },
  {
    question: "Who receives the donations?",
    answer:
      "Donations go to Melvin Jones Repol, the independent developer who created and maintains Webvium. Webvium is not a company or a registered nonprofit.",
  },
  {
    question: "What are donations used for?",
    answer:
      "Development time, the webvium.com domain and hosting, email delivery, app store accounts, and test devices, along with maintenance of Web App, the extensions, and new projects.",
  },
  {
    question: "Can I help without donating money?",
    answer:
      "Yes. Reporting bugs, sharing feedback, recommending Webvium to others, and contributing to open repositories on GitHub all help the project.",
  },
];

export default function DonatePage() {
  return (
    <div>
      <JsonLd
        data={[
          organization,
          founder,
          {
            "@type": "DonateAction",
            name: "Sponsor Webvium on GitHub",
            recipient: { "@id": `${SITE_URL}/#founder` },
            target: "https://github.com/sponsors/mrepol742",
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
            Donate to support independent development of Webvium Browser
          </Reveal>

          <Reveal
            as="p"
            delay={160}
            className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg"
          >
            Webvium is a free, privacy-focused Android browser built by one
            independent developer since 2018, with no investors, subscriptions,
            or accounts. If you find it useful, you can support its continued
            development through GitHub Sponsors.
          </Reveal>

          <Reveal
            as="p"
            delay={200}
            className="mt-4 max-w-xl text-sm leading-6 text-muted"
          >
            Donations are never required to use Webvium. They simply provide
            another way for people who value the project to help sustain it over
            the long term.
          </Reveal>

          <Reveal delay={240} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#donate"
              className="flex items-center justify-center rounded-full bg-primary px-6 py-3 font-medium text-primary-contrast transition-transform hover:scale-[1.03] active:scale-95"
            >
              Donate
            </a>

            <a
              href="https://github.com/webvium"
              className="flex items-center justify-center rounded-full border border-border px-6 py-3 font-medium transition-colors hover:bg-surface"
            >
              View on GitHub
            </a>
          </Reveal>
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={innerClass}>
          <Reveal
            as="h2"
            delay={60}
            className="text-3xl font-semibold sm:text-4xl"
          >
            Where your support goes
          </Reveal>

          <Reveal as="p" delay={120} className="mt-5 max-w-2xl text-muted">
            Webvium is a long-term independent project. Contributions help keep
            development sustainable while allowing the project to stay focused
            on speed, simplicity, privacy, and user control.
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {support.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="card p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={section}>
        <div className={innerClass}>
          <Reveal
            as="h2"
            delay={80}
            className="text-3xl font-semibold sm:text-4xl"
          >
            Why donations matter for a one-person browser project
          </Reveal>

          <div className="mt-8 space-y-5 text-muted">
            <Reveal as="p" delay={120}>
              Webvium has been developed since 2018 as an independent project.
              It does not have a company, a development team, or external
              funding behind it. Design, coding, testing, releases, and support
              are all handled by one person.
            </Reveal>

            <Reveal as="p" delay={180}>
              Maintaining a browser still requires ongoing work. Android
              changes, WebView updates, security requirements, device
              compatibility, bug fixes, infrastructure, and new browser
              standards all require continued development.
            </Reveal>

            <Reveal as="p" delay={240}>
              Webvium does not collect or sell browsing data to fund itself, and
              core features are never put behind a paywall. Donations help make
              the work sustainable while keeping the project free to evolve at
              its own pace.
            </Reveal>
          </div>
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={innerClass}>
          <Reveal
            as="h2"
            delay={80}
            className="text-3xl font-semibold sm:text-4xl"
          >
            What support will not change
          </Reveal>

          <Reveal as="p" delay={140} className="mt-5 max-w-2xl text-muted">
            Supporting Webvium helps sustain development, but the philosophy
            behind the browser remains the same.
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {commitments.map((item, i) => (
              <Reveal key={item.title} delay={i * 70} className="card p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="donate" className={section}>
        <div className={innerClass}>
          <Reveal
            as="h2"
            delay={80}
            className="text-3xl font-semibold sm:text-4xl"
          >
            How to donate to Webvium
          </Reveal>

          <Reveal as="p" delay={160} className="mt-5 max-w-xl text-muted">
            Any amount helps. Donations are completely optional and do not
            unlock special features or change how Webvium works.
          </Reveal>

          <Reveal
            as="p"
            delay={200}
            className="mt-3 max-w-xl text-sm leading-6 text-muted"
          >
            Whether it is a one-time contribution or recurring sponsorship,
            every contribution helps cover the practical costs of maintaining
            and improving the project.
          </Reveal>

          <div className="mt-10">
            <Reveal delay={240} className="card flex flex-col p-6 sm:p-8">
              <h3 className="text-2xl font-semibold">GitHub Sponsors</h3>

              <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
                Support Webvium directly through GitHub Sponsors. Contributions
                help fund continued development, maintenance, infrastructure,
                testing, and future Webvium projects.
              </p>

              <div className="mt-8">
                <a
                  href="https://github.com/sponsors/mrepol742"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-contrast transition-transform hover:scale-[1.03] active:scale-95"
                >
                  Sponsor on GitHub
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={sectionAlt}>
        <div className={innerClass}>
          <Reveal
            as="h2"
            delay={80}
            className="text-3xl font-semibold sm:text-4xl"
          >
            Other ways to help Webvium
          </Reveal>

          <Reveal as="p" delay={140} className="mt-5 max-w-2xl text-muted">
            Financial support is only one form of contribution. Helping improve
            the software or simply helping more people discover it can be just
            as valuable.
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {otherWays.map((item, i) => (
              <Reveal key={item.title} delay={i * 70} className="card p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className={section}>
        <div className="mx-auto w-full max-w-2xl">
          <Reveal as="h2" className="text-3xl font-semibold sm:text-4xl">
            Donation questions
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
            Support is appreciated, never required
          </Reveal>

          <Reveal
            as="p"
            delay={80}
            className="mx-auto mt-5 max-w-lg leading-7 text-muted"
          >
            Webvium exists first and foremost to be useful. Using the browser,
            reporting problems, sharing ideas, contributing code, or simply
            recommending it to someone else already helps move the project
            forward.
          </Reveal>

          <Reveal
            delay={160}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="https://github.com/sponsors/mrepol742"
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 font-medium text-primary-contrast transition-transform hover:scale-[1.03] active:scale-95 sm:w-auto"
            >
              Support Webvium
            </a>

            <a
              href="https://github.com/webvium"
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center rounded-full border border-border px-6 py-3 font-medium transition-colors hover:bg-surface sm:w-auto"
            >
              Follow development
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
