import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Resources — Crown Years",
  description:
    "Free tools, guides, and resources for women 45+. Finances, wellness, career, style, travel, and community.",
};

interface Resource {
  title: string;
  description: string;
  href: string;
  category: string;
  status: "live" | "coming-soon";
  external?: boolean;
}

const resources: Resource[] = [
  {
    title: "Gray Divorce Financial Guide",
    description:
      "Asset checklist, settlement calculator, lawyer question scripts, and post-divorce budget planner. Interactive, private, free.",
    href: "https://graydivorceguide.vercel.app",
    category: "Money & Independence",
    status: "live",
    external: true,
  },
  {
    title: "The Money After Divorce Roadmap",
    description: "12-month financial rebuilding plan. Credit, budgeting, investing basics, and emergency fund targets.",
    href: "#",
    category: "Money & Independence",
    status: "coming-soon",
  },
  {
    title: "Perimenopause Advocacy Kit",
    description: "Evidence-based symptom documentation and talking points for your doctor. Stop being dismissed.",
    href: "#",
    category: "Health & Vitality",
    status: "coming-soon",
  },
  {
    title: "Midlife Fitness Blueprint",
    description: "Pilates, walking, strength training — a realistic plan for bodies that are changing, not declining.",
    href: "#",
    category: "Health & Vitality",
    status: "coming-soon",
  },
  {
    title: "Reinvention Planner",
    description: "Guided workbook for your second act. Skills audit, purpose mapping, business viability checker.",
    href: "#",
    category: "Career & Purpose",
    status: "coming-soon",
  },
  {
    title: "Capsule Wardrobe Builder",
    description: "30-piece wardrobe system. French style meets real life. Works for every body, every budget.",
    href: "#",
    category: "Style & Identity",
    status: "coming-soon",
  },
  {
    title: "Solo Travel Starter Kit",
    description: "Planning guide, packing lists, safety protocols, and 20 destinations ranked for solo women 45+.",
    href: "#",
    category: "Travel & Adventure",
    status: "coming-soon",
  },
  {
    title: "The Crown Circle — Local Meetup Guide",
    description: "How to start a real-life group of midlife women in your area. Templates, conversation starters, format ideas.",
    href: "#",
    category: "Connection & Community",
    status: "coming-soon",
  },
];

const categories = [
  "Money & Independence",
  "Health & Vitality",
  "Career & Purpose",
  "Style & Identity",
  "Travel & Adventure",
  "Connection & Community",
];

export default function Resources() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
          Free Resources
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-deep mb-4">
          Tools that move you forward
        </h1>
        <p className="text-muted max-w-lg mx-auto text-sm">
          Every resource is free, private, and designed for action. No sign-up
          required. Your data stays in your browser.
        </p>
      </div>

      {categories.map((category) => {
        const items = resources.filter((r) => r.category === category);
        return (
          <section key={category} id={category.split(" ")[0].toLowerCase()} className="mb-12">
            <h2 className="text-lg font-semibold text-deep mb-4 border-b border-border pb-2">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((resource) => {
                const inner = (
                  <div
                    className={`bg-card border rounded-xl p-6 ${
                      resource.status === "live"
                        ? "border-gold hover:shadow-md"
                        : "border-border opacity-70"
                    } transition-all`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-deep">{resource.title}</h3>
                      <span
                        className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 ml-2 ${
                          resource.status === "live"
                            ? "bg-gold text-white"
                            : "bg-border text-muted"
                        }`}
                      >
                        {resource.status === "live" ? "Live" : "Soon"}
                      </span>
                    </div>
                    <p className="text-sm text-muted">{resource.description}</p>
                  </div>
                );

                if (resource.status === "live") {
                  return resource.external ? (
                    <a
                      key={resource.title}
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {inner}
                    </a>
                  ) : (
                    <Link key={resource.title} href={resource.href}>
                      {inner}
                    </Link>
                  );
                }

                return <div key={resource.title}>{inner}</div>;
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
