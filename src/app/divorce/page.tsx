import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Gray Divorce Financial Tools — Crown Years",
  description:
    "Free interactive tools for women navigating divorce after 50. Asset checklist, settlement calculator, lawyer question scripts, and post-divorce budget planner.",
};

const tools = [
  {
    href: "/divorce/asset-checklist",
    title: "Know What You Own",
    description:
      "Interactive checklist of every asset, account, and document you need to locate before settlement talks begin.",
  },
  {
    href: "/divorce/settlement-calculator",
    title: "See What You're Owed",
    description:
      "Model how assets and debts divide. Adjust the split and see what equitable distribution means for you.",
  },
  {
    href: "/divorce/lawyer-questions",
    title: "Ask the Right Questions",
    description:
      "48 questions organized by topic. Print this and bring it to every attorney meeting.",
  },
  {
    href: "/divorce/budget-planner",
    title: "Design Your New Budget",
    description:
      "Map your real monthly needs on a single income. If it shows a shortfall, that's leverage for negotiation.",
  },
];

export default function DivorceLanding() {
  return (
    <>
      <section className="bg-cream border-b border-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 py-20 sm:py-28 text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.35em] text-gold mb-6">
              Free Financial Tools
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-6xl text-deep mb-6 leading-[1.08]">
              Divorcing after 50?
              <br />
              <span className="text-gold italic">Know your numbers.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-muted max-w-xl mx-auto mb-10 leading-relaxed">
              91% of divorcing midlife women never seek financial advice.
              Women&apos;s standard of living drops 45% post-divorce. These tools
              exist to close that gap.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-8 justify-center text-center text-xs text-muted">
              <span>100% Free</span>
              <span>Nothing Stored</span>
              <span>No Account Needed</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 sm:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {tools.map((tool, i) => (
            <Reveal key={tool.href} delay={i * 0.08}>
              <Link
                href={tool.href}
                className="block bg-card border border-border rounded-2xl p-8 hover:border-gold transition-all duration-300 group h-full"
              >
                <h2 className="font-serif text-xl text-deep mb-3 group-hover:text-gold transition-colors duration-300">
                  {tool.title}
                </h2>
                <p className="text-sm text-muted leading-relaxed">
                  {tool.description}
                </p>
                <p className="text-gold mt-4 text-sm flex items-center gap-2">
                  Open tool
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    &#8594;
                  </span>
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 text-center">
            <p className="text-sm text-muted mb-3">
              Want the full picture?
            </p>
            <Link
              href="/blog/gray-divorce-complete-financial-guide"
              className="text-gold underline underline-offset-2 decoration-gold/40 hover:decoration-gold transition-colors text-sm"
            >
              Read the Complete Gray Divorce Financial Guide &#8594;
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
