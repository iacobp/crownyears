import Link from "next/link";
import type { Metadata } from "next";
import NewsletterPanel from "@/components/NewsletterPanel";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Resources | Crown Years",
  description:
    "Live financial tools and decision-led guides for gray divorce, personal style, and solo travel in midlife.",
};

const financialTools = [
  {
    number: "01",
    title: "Asset checklist",
    description: "Inventory accounts, property, debts, documents, and overlooked financial details.",
    href: "/divorce/asset-checklist",
  },
  {
    number: "02",
    title: "Settlement calculator",
    description: "Compare different asset divisions before they become a permanent agreement.",
    href: "/divorce/settlement-calculator",
  },
  {
    number: "03",
    title: "Lawyer questions",
    description: "Bring 48 organized prompts into the first legal conversations.",
    href: "/divorce/lawyer-questions",
  },
  {
    number: "04",
    title: "Post-divorce budget",
    description: "Model monthly life after the settlement, while there is still room to decide.",
    href: "/divorce/budget-planner",
  },
];

const editorialRoutes = [
  {
    mode: "Define",
    title: "Build a 30-piece wardrobe system",
    description:
      "A practical capsule method organized around fit, material, and the life you actually dress for.",
    href: "/blog/capsule-wardrobe-over-50",
    action: "Open the wardrobe guide",
  },
  {
    mode: "Expand",
    title: "Choose a first solo destination",
    description:
      "Fifteen destinations ordered by ease, energy, and the size of first step you want to take.",
    href: "/blog/solo-travel-women-over-50",
    action: "Open the travel guide",
  },
];

const validationQueue = [
  {
    title: "Before You File Money Dossier",
    description: "A paid working system moves forward when the free gray-divorce tools show real demand.",
  },
  {
    title: "The Crown Edit",
    description: "A shoppable editorial letter built around fewer, better partner recommendations.",
  },
  {
    title: "Strength After 50",
    description: "A focused challenge shaped with a credible expert partner and a clear audience signal.",
  },
];

export default function Resources() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="mb-5 text-[10px] uppercase tracking-[0.34em] text-gold-dark">
              Resources
            </p>
            <h1 className="font-serif text-5xl leading-[1.02] tracking-[-0.04em] text-deep text-balance sm:text-6xl">
              Start with the decision already asking for your attention.
            </h1>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
            <p className="text-sm leading-relaxed text-muted">
              Every link below opens something useful today. Future ideas sit
              in a clearly labeled validation queue while the audience shows us
              what deserves to come next.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-deep text-cream">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.32em] text-gold-light">
              Protect
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-cream text-balance sm:text-5xl">
              The gray-divorce financial toolkit
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/65">
              Four private tools turn a complicated transition into a workable
              sequence. They open instantly, and your entries stay in your browser.
            </p>
            <Link
              href="/divorce"
              className="mt-8 inline-flex text-sm font-medium text-gold-light underline decoration-gold-light/40 underline-offset-4 transition-colors hover:text-cream"
            >
              See the complete financial guide
            </Link>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            {financialTools.map((tool, index) => (
              <Reveal key={tool.href} delay={index * 0.04}>
                <Link
                  href={tool.href}
                  className="group grid grid-cols-[2.5rem_1fr_auto] gap-4 border-t border-cream/15 py-6 first:border-t-0 lg:first:border-t"
                >
                  <span className="font-mono text-xs text-gold-light/70 tabular-nums">
                    {tool.number}
                  </span>
                  <span>
                    <span className="block font-serif text-xl text-cream transition-colors group-hover:text-gold-light">
                      {tool.title}
                    </span>
                    <span className="mt-2 block text-xs leading-relaxed text-cream/50">
                      {tool.description}
                    </span>
                  </span>
                  <span aria-hidden="true" className="text-gold-light transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.32em] text-gold-dark">
            Define or expand
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-deep text-balance sm:text-5xl">
            Read until the decision feels clear.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-12">
          {editorialRoutes.map((route, index) => (
            <Reveal
              key={route.href}
              delay={index * 0.06}
              className={index === 0 ? "md:col-span-7" : "md:col-span-5 md:mt-14"}
            >
              <Link
                href={route.href}
                className="group flex h-full min-h-72 flex-col justify-between border border-border bg-card p-8 transition-[border-color,transform] duration-200 hover:border-gold/60 active:scale-[0.99]"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold-dark">
                    {route.mode}
                  </p>
                  <h3 className="mt-10 max-w-xl font-serif text-3xl leading-tight text-deep text-balance">
                    {route.title}
                  </h3>
                  <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted">
                    {route.description}
                  </p>
                </div>
                <p className="mt-10 inline-flex items-center gap-3 text-sm font-medium text-deep">
                  {route.action}
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-warm-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 sm:px-8 sm:py-24 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.32em] text-gold-dark">
              Validation queue
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-deep text-balance">
              What earns its place next.
            </h2>
          </Reveal>
          <div className="divide-y divide-border border-y border-border lg:col-span-7 lg:col-start-6">
            {validationQueue.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <div className="py-6">
                  <h3 className="font-serif text-xl text-deep">{item.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <NewsletterPanel />
    </>
  );
}
