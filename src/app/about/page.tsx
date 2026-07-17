import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About — Crown Years",
  description:
    "Why Crown Years exists: evidence-led tools and editorial for the consequential decisions of midlife.",
};

const principles = [
  {
    number: "01",
    title: "Competence is the default.",
    description:
      "We explain the tradeoffs without flattening them, and never mistake clarity for condescension.",
  },
  {
    number: "02",
    title: "Specificity earns trust.",
    description:
      "A useful checklist, calculator, or decision framework matters more than a page of generic encouragement.",
  },
  {
    number: "03",
    title: "Evidence and judgment stay distinct.",
    description:
      "Facts are sourced. Recommendations are explained. Commercial relationships never rewrite the underlying conclusion.",
  },
  {
    number: "04",
    title: "A life stage is not an identity.",
    description:
      "Age, hormones, appearance, marriage, and work may shape the decision. None of them gets to define the woman making it.",
  },
];

export default function About() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="mb-5 text-[10px] uppercase tracking-[0.34em] text-gold-dark">
              About Crown Years
            </p>
            <h1 className="font-serif text-5xl leading-[1.02] tracking-[-0.04em] text-deep text-balance sm:text-6xl">
              Midlife deserves better than one-dimensional advice.
            </h1>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
            <p className="text-base leading-relaxed text-muted">
              Crown Years is an independent editorial and practical-resource
              brand for women making consequential decisions in money,
              identity, work, health, travel, and connection.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal direction="right" className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem_0.75rem_2.5rem_2.5rem]">
              <Image
                src="/blog/portrait-silver-blazer.jpg"
                alt="A woman seated in a light-filled room"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority
              />
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-6 lg:col-start-7">
            <p className="text-[10px] uppercase tracking-[0.32em] text-gold-dark">
              Why this exists
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.1] text-deep text-balance sm:text-5xl">
              Several doors can open at once. The advice should acknowledge all
              of them.
            </h2>
            <div className="mt-7 space-y-5 text-sm leading-relaxed text-muted sm:text-base">
              <p>
                A financial transition can change where you live. A wardrobe
                question can really be an identity question. A first solo trip
                can be both logistical and deeply personal. Crown Years starts
                with the specific decision, then shows the next useful move.
              </p>
              <p>
                Adults 50+ accounted for $12.5 trillion—43% of U.S. economic
                activity—in 2024. The audience does not need to be convinced of
                its own value. It needs to be served with more accuracy and
                imagination.
              </p>
              <a
                href="https://www.aarp.org/pri/topics/work-finances-retirement/economics-aging/longevity-economy-outlook/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-xs text-muted underline decoration-border underline-offset-4 transition-colors hover:text-deep"
              >
                Source: AARP Longevity Economy Outlook, 2026
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
          <Reveal className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.32em] text-gold-dark">
              The editorial standard
            </p>
            <h2 className="mt-4 font-serif text-4xl text-deep sm:text-5xl">
              What you can expect here.
            </h2>
          </Reveal>

          <div className="mt-14 divide-y divide-border border-y border-border">
            {principles.map((principle, index) => (
              <Reveal key={principle.number} delay={index * 0.04}>
                <div className="grid grid-cols-[2.5rem_1fr] gap-5 py-7 sm:grid-cols-12 sm:gap-8 sm:py-9">
                  <p className="font-mono text-xs text-gold-dark tabular-nums sm:col-span-1">
                    {principle.number}
                  </p>
                  <h3 className="font-serif text-2xl text-deep sm:col-span-4">
                    {principle.title}
                  </h3>
                  <p className="col-start-2 text-sm leading-relaxed text-muted sm:col-span-6 sm:col-start-7">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-7">
          <h2 className="font-serif text-4xl leading-tight text-deep text-balance sm:text-5xl">
            The standard is easier to judge in something you can use.
          </h2>
        </Reveal>
        <Reveal delay={0.06} className="lg:col-span-4 lg:col-start-9">
          <Link
            href="/resources"
            className="inline-flex items-center gap-3 bg-deep px-7 py-3.5 text-sm font-medium text-cream transition-[background-color,transform] duration-200 hover:bg-gold-dark active:scale-[0.98]"
          >
            Start with a live resource
            <span aria-hidden="true">&rarr;</span>
          </Link>
          <p className="mt-5 text-xs leading-relaxed text-muted">
            Or <Link href="/#letter" className="underline decoration-border underline-offset-4 hover:text-deep">preview the Crown Years Letter</Link> before email capture opens.
          </p>
        </Reveal>
      </section>
    </>
  );
}
