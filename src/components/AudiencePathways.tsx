import Link from "next/link";
import Reveal from "@/components/Reveal";

const pathways = [
  {
    number: "01",
    mode: "Protect",
    title: "I want every number in front of me.",
    description:
      "Start with the numbers, documents, and questions that protect your options before a gray-divorce decision becomes irreversible.",
    href: "/divorce",
    action: "Open the financial tools",
    className: "md:col-span-7 bg-deep text-cream",
    inverted: true,
  },
  {
    number: "02",
    mode: "Define",
    title: "I want a wardrobe that feels like me now.",
    description:
      "Use a 30-piece system to make getting dressed simpler, sharper, and entirely your own.",
    href: "/blog/capsule-wardrobe-over-50",
    action: "Build the 30-piece system",
    className: "md:col-span-5 bg-cream text-deep",
    inverted: false,
  },
  {
    number: "03",
    mode: "Expand",
    title: "The trip is mine to choose.",
    description:
      "Choose a first solo destination, understand the tradeoffs, and make the trip small enough to book.",
    href: "/blog/solo-travel-women-over-50",
    action: "Choose the first destination",
    className: "md:col-span-5 bg-warm-white text-deep",
    inverted: false,
  },
  {
    number: "04",
    mode: "Connect",
    title: "I want a steadier signal for what comes next.",
    description:
      "The Crown Years Letter will bring one useful decision, one practical resource, and one considered recommendation each week.",
    href: "#letter",
    action: "See what the Letter will include",
    className: "md:col-span-7 bg-card text-deep",
    inverted: false,
  },
];

export default function AudiencePathways() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
      {pathways.map((pathway, index) => (
        <Reveal
          key={pathway.mode}
          delay={index * 0.05}
          className={pathway.className}
        >
          <Link
            href={pathway.href}
            className={`group flex min-h-72 h-full flex-col justify-between border p-7 sm:p-9 ${
              pathway.inverted
                ? "border-deep"
                : "border-border hover:border-gold/60"
            } transition-[border-color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.99]`}
          >
            <div>
              <div className="mb-12 flex items-center justify-between gap-4">
                <p
                  className={`text-[10px] uppercase tracking-[0.3em] ${
                    pathway.inverted ? "text-gold-light" : "text-gold-dark"
                  }`}
                >
                  {pathway.mode}
                </p>
                <p
                  className={`font-mono text-xs tabular-nums ${
                    pathway.inverted ? "text-cream/40" : "text-muted/60"
                  }`}
                >
                  {pathway.number}
                </p>
              </div>
              <h3 className="max-w-xl font-serif text-2xl leading-tight text-balance sm:text-3xl">
                {pathway.title}
              </h3>
              <p
                className={`mt-5 max-w-xl text-sm leading-relaxed ${
                  pathway.inverted ? "text-cream/65" : "text-muted"
                }`}
              >
                {pathway.description}
              </p>
            </div>
            <p
              className={`mt-10 inline-flex items-center gap-3 text-sm font-medium ${
                pathway.inverted ? "text-gold-light" : "text-deep"
              }`}
            >
              {pathway.action}
              <span
                aria-hidden="true"
                className="transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </p>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
