import Image from "next/image";
import Link from "next/link";
import AudiencePathways from "@/components/AudiencePathways";
import NewsletterPanel from "@/components/NewsletterPanel";
import Reveal from "@/components/Reveal";

const toolSteps = [
  {
    number: "01",
    title: "Know what you own",
    description: "Build a complete inventory of assets, accounts, debts, and documents.",
    href: "/divorce/asset-checklist",
  },
  {
    number: "02",
    title: "Model the settlement",
    description: "See how different divisions affect the life you are planning next.",
    href: "/divorce/settlement-calculator",
  },
  {
    number: "03",
    title: "Prepare the questions",
    description: "Bring 48 organized prompts into the room with your lawyer.",
    href: "/divorce/lawyer-questions",
  },
  {
    number: "04",
    title: "Design the new budget",
    description: "Map the monthly reality before you agree to a financial future.",
    href: "/divorce/budget-planner",
  },
];

const editorial = [
  {
    label: "The Crown Edit",
    title: "The 30 pieces that make the rest of the wardrobe unnecessary",
    description:
      "A French-informed capsule system built around fit, material, and fewer decisions.",
    image: "/blog/capsule-wardrobe-flatlay.jpg",
    alt: "A considered capsule wardrobe arranged on a warm neutral background",
    href: "/blog/capsule-wardrobe-over-50",
    className: "lg:col-span-7",
  },
  {
    label: "The wider map",
    title: "Fifteen solo destinations, ordered by how ready you feel",
    description:
      "Start with the trip that is easy enough to book and meaningful enough to matter.",
    image: "/blog/solo-travel-amalfi.jpg",
    alt: "A woman looking across the Amalfi coast during a solo trip",
    href: "/blog/solo-travel-women-over-50",
    className: "lg:col-span-5 lg:mt-24",
  },
];

export default function Home() {
  return (
    <>
      <section className="overflow-hidden border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-7 lg:pr-12">
            <Reveal>
              <p className="mb-7 text-[10px] uppercase tracking-[0.34em] text-gold-dark">
                For women 45–65, on their own terms
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="max-w-3xl font-serif text-[3.25rem] leading-[0.98] tracking-[-0.045em] text-deep text-balance sm:text-6xl lg:text-7xl">
                What comes next belongs to you.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Crown Years turns consequential midlife decisions into clear
                next moves—in money, identity, travel, strength, and connection.
                Start with the choice asking for your attention now.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                <a
                  href="#start"
                  className="inline-flex items-center gap-3 bg-deep px-7 py-3.5 text-sm font-medium text-cream transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-gold-dark active:scale-[0.98]"
                >
                  Find your starting point
                  <span aria-hidden="true">&darr;</span>
                </a>
                <Link
                  href="/divorce"
                  className="text-sm font-medium text-deep underline decoration-gold/50 underline-offset-4 transition-colors duration-200 hover:text-gold-dark"
                >
                  Use the gray-divorce tools
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} direction="right" className="lg:col-span-5">
            <figure className="relative lg:ml-auto lg:max-w-md">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem_2.5rem_0.75rem_2.5rem]">
                <Image
                  src="/blog/hero-kitchen-morning.jpg"
                  alt="A woman beginning a quiet morning in a light-filled kitchen"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
              </div>
              <figcaption className="absolute -bottom-6 left-5 max-w-[16rem] border border-border bg-card px-5 py-4 text-xs leading-relaxed text-muted shadow-[0_16px_40px_-24px_rgba(80,61,45,0.35)] sm:left-8">
                Not a restart. A change in authorship.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section aria-label="Market context" className="border-b border-border bg-warm-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 px-6 py-7 sm:px-8 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8">
          <p className="font-mono text-2xl text-gold-dark tabular-nums">$12.5T</p>
          <p className="max-w-2xl text-sm leading-relaxed text-muted">
            Adults 50+ accounted for 43% of U.S. economic activity in 2024.
            The opportunity is not convincing this audience to spend. It is
            serving the decision in front of her better.
          </p>
          <a
            href="https://www.aarp.org/pri/topics/work-finances-retirement/economics-aging/longevity-economy-outlook/"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-muted underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-deep"
          >
            AARP, 2026
          </a>
        </div>
      </section>

      <section id="start" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-32">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-gold-dark">
                Start where you are
              </p>
              <h2 className="font-serif text-4xl leading-[1.08] text-deep text-balance sm:text-5xl">
                Midlife is not one problem. It is several doors opening at once.
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
              <p className="text-sm leading-relaxed text-muted">
                Choose the sentence closest to the decision in front of you.
                Every route below leads somewhere useful today.
              </p>
            </Reveal>
          </div>
          <AudiencePathways />
        </div>
      </section>

      <section className="bg-deep text-cream">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-24 sm:px-8 sm:py-32 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-gold-light">
              Live financial system
            </p>
            <h2 className="font-serif text-4xl leading-[1.08] text-cream text-balance sm:text-5xl">
              Walk into gray divorce knowing your numbers.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/65">
              Four private tools turn a complicated financial transition into a
              sequence you can work through. Nothing is stored. No account is
              required.
            </p>
            <Link
              href="/divorce"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-medium text-gold-light underline decoration-gold-light/40 underline-offset-4 transition-colors duration-200 hover:text-cream"
            >
              See the complete toolkit
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </Link>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            {toolSteps.map((step, index) => (
              <Reveal key={step.href} delay={index * 0.05}>
                <Link
                  href={step.href}
                  className="group grid grid-cols-[2.5rem_1fr_auto] gap-4 border-t border-cream/15 py-6 first:border-t-0 lg:first:border-t"
                >
                  <span className="font-mono text-xs text-gold-light/70 tabular-nums">
                    {step.number}
                  </span>
                  <span>
                    <span className="block font-serif text-xl text-cream transition-colors duration-200 group-hover:text-gold-light">
                      {step.title}
                    </span>
                    <span className="mt-2 block max-w-md text-xs leading-relaxed text-cream/50">
                      {step.description}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-gold-light transition-transform duration-200 group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-gold-dark">
              Read with a purpose
            </p>
            <h2 className="font-serif text-4xl leading-[1.08] text-deep text-balance sm:text-5xl">
              Editorial that leaves you with a decision made.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {editorial.map((item, index) => (
            <Reveal key={item.href} delay={index * 0.08} className={item.className}>
              <Link href={item.href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>
                <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-gold-dark">
                  {item.label}
                </p>
                <h3 className="mt-3 max-w-2xl font-serif text-2xl leading-tight text-deep text-balance transition-colors duration-200 group-hover:text-gold-dark sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-24 sm:px-8 sm:py-28 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.32em] text-gold-dark">
              The point of view
            </p>
          </Reveal>
          <Reveal delay={0.06} className="lg:col-span-7 lg:col-start-6">
            <p className="font-serif text-3xl leading-[1.35] text-deep text-balance sm:text-4xl">
              You do not need to be reduced to your age, your hormones, your
              marriage, or your hair. You need accurate information, considered
              options, and room to decide.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex text-sm font-medium text-deep underline decoration-gold/50 underline-offset-4 transition-colors duration-200 hover:text-gold-dark"
            >
              Read what Crown Years believes
            </Link>
          </Reveal>
        </div>
      </section>

      <NewsletterPanel />
    </>
  );
}
