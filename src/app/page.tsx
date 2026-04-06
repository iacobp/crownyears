import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import NewsletterForm from "@/components/NewsletterForm";

const pillars = [
  {
    title: "Money & Independence",
    subtitle: "Take control of every dollar.",
    description:
      "Divorce finances, retirement clarity, investment confidence. Tools that turn confusion into power.",
    href: "/resources#money",
  },
  {
    title: "Health & Vitality",
    subtitle: "Optimizing, not declining.",
    description:
      "Hormones, longevity, fitness. Evidence-based, jargon-free, built for bodies that are evolving.",
    href: "/resources#health",
  },
  {
    title: "Career & Purpose",
    subtitle: "Your second act isn't a consolation prize.",
    description:
      "Reinvention frameworks, business blueprints, and the confidence to choose what comes next.",
    href: "/resources#career",
  },
  {
    title: "Style & Identity",
    subtitle: "Dress like you know exactly who you are.",
    description:
      "Capsule wardrobes, quiet luxury, your signature look. Because style after 45 is a declaration, not a compromise.",
    href: "/resources#style",
  },
  {
    title: "Travel & Adventure",
    subtitle: "The world gets better when you do.",
    description:
      "Solo trips, transformative retreats, and destinations designed for women who travel with intention.",
    href: "/resources#travel",
  },
  {
    title: "Connection & Community",
    subtitle: "Real women. Real conversations.",
    description:
      "Not networking. Not small talk. A circle of women who are living the same transformation you are.",
    href: "/resources#community",
  },
];

const liveTools = [
  {
    title: "Gray Divorce Financial Guide",
    description:
      "Interactive asset checklist, settlement calculator, lawyer question scripts, and post-divorce budget planner.",
    href: "/divorce",
    external: false,
  },
];

const comingSoon = [
  "Capsule Wardrobe Builder",
  "Reinvention Planner",
  "Solo Travel Starter Kit",
  "Perimenopause Advocacy Kit",
  "Money After Divorce Roadmap",
  "Midlife Fitness Blueprint",
];

export default function Home() {
  return (
    <>
      {/* Hero — editorial, generous, Vogue-level */}
      <section className="bg-cream border-b border-border">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-24 sm:py-36 text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.35em] text-gold mb-8">
              For Women Who Are Done Asking Permission
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-medium text-deep mb-8 leading-[1.05]">
              This is your era.
              <br />
              <span className="text-gold italic">Wear the crown.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              You spent decades building everyone else&apos;s life. Crown Years
              is for the woman who&apos;s finally building her own.
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#resources"
                className="inline-block bg-deep text-cream px-8 py-3.5 rounded-full text-sm tracking-wide hover:bg-gold transition-colors duration-300"
              >
                Explore Free Resources
              </a>
              <a
                href="#newsletter"
                className="inline-block border border-deep text-deep px-8 py-3.5 rounded-full text-sm tracking-wide hover:bg-deep hover:text-cream transition-colors duration-300"
              >
                Join the Letter
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hero image — editorial full-bleed */}
      <Reveal>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-8">
          <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden">
            <Image
              src="/blog/hero-kitchen-morning.jpg"
              alt="Woman in her crown years — confident, independent, sovereign"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Reveal>

      {/* Manifesto — dark strip, editorial typography */}
      <section className="bg-deep text-cream">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16 sm:py-24 text-center">
          <Reveal>
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-[1.4] font-light italic">
              &ldquo;Women over 50 control 78% of national wealth and appear in
              fewer than 10% of ads. We outspend millennials by 250%. We are the
              most powerful consumer force on Earth — and we are done being
              invisible.&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      {/* The Six Pillars — editorial grid */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold text-center mb-4">
            Six Pillars
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-center mb-4 text-deep">
            Everything is connected.
          </h2>
          <p className="text-muted text-center max-w-lg mx-auto mb-16 text-sm leading-relaxed">
            Other brands sell menopause trackers OR career advice OR fashion
            guides. We know you&apos;re living all of it at once.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <Link
                href={pillar.href}
                className="block bg-background p-8 sm:p-10 hover:bg-cream transition-colors duration-300 group h-full"
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
                  {pillar.subtitle}
                </p>
                <h3 className="font-serif text-2xl text-deep mb-3 group-hover:text-gold transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {pillar.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Live Resources — featured card */}
      <section id="resources" className="bg-cream border-t border-b border-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.35em] text-gold text-center mb-4">
              Free Resources
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-center mb-6 text-deep">
              Tools that move you forward.
            </h2>
            <p className="text-muted text-center max-w-md mx-auto mb-16 text-sm">
              Free. Private. No accounts. Your data stays in your browser.
            </p>
          </Reveal>

          {liveTools.map((tool) => (
            <Reveal key={tool.title}>
              <a
                href={tool.href}
                target={tool.external ? "_blank" : undefined}
                rel={tool.external ? "noopener noreferrer" : undefined}
                className="block bg-card border border-gold/30 rounded-2xl p-10 sm:p-12 hover:border-gold hover:shadow-[0_8px_30px_rgba(184,148,79,0.12)] transition-all duration-500 group"
              >
                <span className="inline-block text-[10px] uppercase tracking-[0.3em] bg-gold text-white px-3 py-1 rounded-full mb-5">
                  Live Now
                </span>
                <h3 className="font-serif text-3xl text-deep mb-3 group-hover:text-gold transition-colors duration-300">
                  {tool.title}
                </h3>
                <p className="text-muted max-w-lg">{tool.description}</p>
                <p className="text-gold mt-6 text-sm tracking-wide flex items-center gap-2">
                  Open the guide
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    &#8594;
                  </span>
                </p>
              </a>
            </Reveal>
          ))}

          {/* Coming soon — minimal list */}
          <Reveal>
            <div className="mt-16">
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted text-center mb-8">
                In Development
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                {comingSoon.map((name) => (
                  <div
                    key={name}
                    className="text-center py-4 px-3 border border-border rounded-xl bg-card/50"
                  >
                    <p className="text-xs text-muted">{name}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Permission Section — the emotional core */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Reveal direction="left">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-gold mb-4">
                The Truth
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl text-deep mb-8 leading-[1.1]">
                You don&apos;t need more advice.
                <br />
                <span className="italic text-gold">
                  You need permission.
                </span>
              </h2>
              <div className="space-y-5 text-muted leading-relaxed">
                <p>
                  You know you deserve better. You know this isn&apos;t what the
                  rest of your life looks like. You know you have the money, the
                  brains, and the drive.
                </p>
                <p>
                  The only thing missing is someone saying:{" "}
                  <strong className="text-deep font-serif text-lg italic">
                    go.
                  </strong>
                </p>
                <p>
                  Every tool here turns &ldquo;I should&rdquo; into
                  &ldquo;I did.&rdquo;
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.15}>
            <div className="bg-cream rounded-2xl p-10 border border-border">
              <p className="font-serif text-xl text-deep mb-6 italic">
                You&apos;re allowed to...
              </p>
              <ul className="space-y-4">
                {[
                  "Spend money on yourself without justifying it",
                  "Leave a marriage that stopped working years ago",
                  "Start a business at 55 and be extraordinary",
                  "Wear whatever you want",
                  "Travel alone and love every second",
                  "Put yourself first — finally",
                  "Be done with guilt about wanting more",
                  "Take up space. Be impossible to ignore.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="text-gold mt-0.5 shrink-0 text-xs">
                      &#9827;
                    </span>
                    <span className="text-deep leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats — dark, editorial, powerful */}
      <section className="bg-deep text-cream">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
          <Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 text-center">
              {[
                { num: "250%", label: "more spending power than millennials" },
                { num: "78%", label: "of national wealth controlled by women 50+" },
                { num: "2.8x", label: "more likely to succeed in business after 50" },
                { num: "70%", label: "of $124T wealth transfer going to women" },
              ].map((stat) => (
                <div key={stat.num}>
                  <p className="font-serif text-4xl sm:text-5xl text-gold-light mb-2">
                    {stat.num}
                  </p>
                  <p className="text-xs text-cream/50 leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Before / After — editorial comparison */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold text-center mb-4">
            The Transformation
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-center text-deep mb-16">
            Before clarity. After sovereignty.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
          <Reveal direction="left">
            <div className="bg-background p-10 sm:p-12">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted mb-6">
                Before
              </p>
              <ul className="space-y-4">
                {[
                  "Overwhelmed by paperwork you've never seen",
                  "Afraid of what you don't know",
                  "Dependent on someone else's decisions",
                  "Walking into meetings unprepared",
                  "Accepting what's offered because you don't know better",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted"
                  >
                    <span className="text-rose/60 mt-0.5 shrink-0">
                      &#8212;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <div className="bg-cream p-10 sm:p-12">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6">
                After
              </p>
              <ul className="space-y-4">
                {[
                  "Complete picture of every asset and debt",
                  "Confidence backed by numbers",
                  "Financial independence you designed",
                  "The most prepared person in every room",
                  "A budget built around the life you want",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-deep"
                  >
                    <span className="text-gold mt-0.5 shrink-0">&#9827;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Newsletter — refined, editorial */}
      <section id="newsletter" className="bg-cream border-t border-border">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 py-24 sm:py-32 text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.35em] text-gold mb-4">
              The Crown Years Letter
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-deep mb-6 leading-[1.1]">
              One email a week.
              <br />
              <span className="italic text-gold">
                Zero permission required.
              </span>
            </h2>
            <p className="text-muted mb-10 max-w-md mx-auto text-sm leading-relaxed">
              Tools, insights, and the occasional reminder that you are the most
              powerful consumer force on the planet.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <NewsletterForm />
            <p className="text-xs text-muted mt-5">
              No spam. Unsubscribe anytime. We respect your time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-16">
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
              {[
                {
                  title: "100% Free",
                  text: "No paywalls. No premium tiers. Every tool, fully accessible.",
                },
                {
                  title: "Completely Private",
                  text: "Nothing stored on servers. Your data stays in your browser.",
                },
                {
                  title: "No Account Needed",
                  text: "No sign-up, no email required. Open and use.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <p className="font-serif text-xl text-deep mb-2">
                    {item.title}
                  </p>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
