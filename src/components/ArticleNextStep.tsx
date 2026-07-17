import Link from "next/link";

const nextSteps: Record<
  string,
  { label: string; title: string; description: string; href: string; action: string }
> = {
  "gray-divorce-complete-financial-guide": {
    label: "Use the system",
    title: "Turn the guide into your working file.",
    description:
      "Inventory the assets, model a settlement, prepare your lawyer questions, and build the post-divorce budget in one private toolkit.",
    href: "/divorce",
    action: "Open the free financial tools",
  },
  "capsule-wardrobe-over-50": {
    label: "Continue with the Edit",
    title: "Good taste gets easier when the decisions are already made.",
    description:
      "The Crown Years Letter will carry the next edits, practical systems, and considered recommendations when it opens.",
    href: "/#letter",
    action: "Preview the Crown Years Letter",
  },
  "solo-travel-women-over-50": {
    label: "Keep the momentum",
    title: "Choose the trip. Then make the first decision small.",
    description:
      "The Crown Years Letter will continue with destination edits, partner recommendations, and practical first-trip guidance.",
    href: "/#letter",
    action: "Preview the Crown Years Letter",
  },
};

export default function ArticleNextStep({ slug }: { slug: string }) {
  const nextStep = nextSteps[slug] ?? {
    label: "Your next move",
    title: "Continue with something you can use.",
    description:
      "Browse the live Crown Years resources and choose the decision that needs your attention now.",
    href: "/resources",
    action: "Browse the resources",
  };

  return (
    <aside className="mt-16 border-y border-border py-10">
      <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-gold-dark">
        {nextStep.label}
      </p>
      <h2 className="max-w-lg font-serif text-2xl leading-tight text-deep text-balance">
        {nextStep.title}
      </h2>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        {nextStep.description}
      </p>
      <Link
        href={nextStep.href}
        className="group mt-6 inline-flex items-center gap-3 text-sm font-medium text-deep underline decoration-gold/50 underline-offset-4 transition-[color,transform] duration-200 hover:text-gold-dark active:scale-[0.98]"
      >
        {nextStep.action}
        <span
          aria-hidden="true"
          className="transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1"
        >
          &rarr;
        </span>
      </Link>
    </aside>
  );
}
