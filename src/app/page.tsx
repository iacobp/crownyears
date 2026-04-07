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

export default function Home() {
  return (
    <>
      {/* Hero — editorial, asymmetric text, not centered */}
      <section className="bg-cream border-b border-border overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Reveal>
                <p className="text-[11px] uppercase tracking-[0.35em] text-gold mb-6">
                  For Women Who Are Done Asking Permission
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-deep mb-8 leading-[1.05]">
                  This is
                  <br />
                  your era.
                  <br />
                  <span className="text-gold italic">Wear the crown.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-lg text-muted max-w-md mb-10 leading-relaxed font-light">
                  You spent decades building everyone else&apos;s life. Crown
                  Years is for the woman who&apos;s finally building her own.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4">
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
            <Reveal delay={0.2} direction="right">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/blog/hero-kitchen-morning.jpg"
                  alt="Woman in her crown years — confident, independent, sovereign"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Manifesto — full-bleed dark, quote mark accent */}
      <section className="bg-deep text-cream">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
          <Reveal>
            <p className="font-serif text-6xl text-gold-light/30 leading-none mb-4">
              &ldquo;
            </p>
            <p className="font-serif text-2xl sm:text-3xl lg:text-[2.5rem] leading-[1.45] font-light">
              Women over 50 control 78% of national wealth and appear in fewer
              than 10% of ads. We outspend millennials by 250%. We are the most
              powerful consumer force on Earth — and we are done being
              invisible.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pillars — asymmetric 2-col, NOT a 3-col grid */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.35em] text-gold mb-4">
                Six Pillars
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl text-deep mb-6 leading-[1.1]">
                Everything is connected.
              </h2>
              <p className="text-muted text-sm leading-relaxed">
                Other brands sell menopause trackers OR career advice OR fashion
                guides. We know you&apos;re living all of it at once.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
              {pillars.map((pillar, i) => (
                <Reveal key={pillar.title} delay={i * 0.06}>
                  <Link
                    href={pillar.href}
                    className="block bg-background p-8 hover:bg-cream transition-colors duration-300 group h-full"
                  >
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
                      {pillar.subtitle}
                    </p>
                    <h3 className="font-serif text-xl text-deep mb-2 group-hover:text-gold transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {pillar.description}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured tool — no "coming soon" clutter */}
      <section id="resources" className="bg-cream border-t border-b border-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.35em] text-gold mb-4">
              Free Resources
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-deep mb-16 leading-[1.1]">
              Tools that move you forward.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              href="/divorce"
              className="block bg-card border border-gold/30 rounded-2xl p-10 sm:p-12 hover:border-gold hover:shadow-[0_8px_30px_rgba(184,148,79,0.12)] transition-all duration-500 group"
            >
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-8 items-center">
                <div>
                  <span className="inline-block text-[10px] uppercase tracking-[0.3em] bg-gold text-white px-3 py-1 rounded-full mb-5">
                    Live Now
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-deep mb-3 group-hover:text-gold transition-colors duration-300">
                    Gray Divorce Financial Guide
                  </h3>
                  <p className="text-muted text-sm leading-relaxed max-w-lg">
                    Interactive asset checklist, settlement calculator, lawyer
                    question scripts, and post-divorce budget planner. Free,
                    private, no account needed.
                  </p>
                </div>
                <span className="text-gold text-3xl group-hover:translate-x-2 transition-transform duration-300 hidden sm:block">
                  &#8594;
                </span>
              </div>
            </Link>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-center text-xs text-muted mt-12">
              More tools launching soon — capsule wardrobe builder, reinvention
              planner, solo travel guide, and more.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Permission section — LEFT-ALIGNED heading, different rhythm */}
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
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.2}>
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

      {/* Stats — horizontal line layout, not boxed grid */}
      <section className="bg-deep text-cream overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
          <Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
              {[
                { num: "250%", label: "more spending power than millennials" },
                { num: "78%", label: "of national wealth controlled by women 50+" },
                { num: "2.8x", label: "more likely to succeed in business after 50" },
                { num: "70%", label: "of $124T wealth transfer going to women" },
              ].map((stat, i) => (
                <div
                  key={stat.num}
                  className={`${i > 0 ? "lg:border-l lg:border-cream/10 lg:pl-8" : ""}`}
                >
                  <p className="font-serif text-4xl sm:text-5xl text-gold-light mb-3">
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

      {/* Before / After — full-width, clean separation */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold mb-4">
            The Transformation
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-deep mb-16 leading-[1.1]">
            Before clarity.
            <br />
            <span className="italic text-gold">After sovereignty.</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
          <Reveal direction="none" delay={0.1}>
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
          <Reveal direction="none" delay={0.2}>
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

      {/* Newsletter — left-aligned for variety */}
      <section id="newsletter" className="bg-cream border-t border-border">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
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
                <p className="text-muted text-sm leading-relaxed max-w-md">
                  Tools, insights, and the occasional reminder that you are the
                  most powerful consumer force on the planet.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div>
                <NewsletterForm />
                <p className="text-xs text-muted mt-5">
                  No spam. Unsubscribe anytime. We respect your time.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trust strip — horizontal, minimal */}
      <section className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-12">
          <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 text-center text-xs text-muted">
            <span>100% Free &mdash; No paywalls</span>
            <span>Completely Private &mdash; Nothing stored</span>
            <span>No Account Needed &mdash; Just use it</span>
          </div>
        </div>
      </section>
    </>
  );
}
