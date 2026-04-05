import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

const pillars = [
  {
    title: "Money & Independence",
    description:
      "Take control of your finances — whether you're navigating divorce, planning retirement, or building something new.",
    href: "/resources#money",
    color: "text-gold",
  },
  {
    title: "Health & Vitality",
    description:
      "Longevity, hormones, fitness, and wellness — on your terms, backed by evidence, not wrapped in anti-aging nonsense.",
    href: "/resources#health",
    color: "text-sage",
  },
  {
    title: "Career & Purpose",
    description:
      "Your second act isn't a consolation prize. It's the one you choose. Reinvention tools, business guides, and career pivots.",
    href: "/resources#career",
    color: "text-rose",
  },
  {
    title: "Style & Identity",
    description:
      "Capsule wardrobes, quiet luxury, silver hair — style that says 'I know exactly who I am.'",
    href: "/resources#style",
    color: "text-deep",
  },
  {
    title: "Travel & Adventure",
    description:
      "Solo trips, retreats, bucket-list experiences. The world doesn't get smaller after 45 — your reasons for seeing it get better.",
    href: "/resources#travel",
    color: "text-gold-dark",
  },
  {
    title: "Connection & Community",
    description:
      "Real friendships, not networking. A circle of women who get it, because they're living it too.",
    href: "/resources#community",
    color: "text-muted",
  },
];

const liveTools = [
  {
    title: "Gray Divorce Financial Guide",
    description:
      "Free interactive tools: asset checklist, settlement calculator, lawyer question scripts, and post-divorce budget planner.",
    href: "https://graydivorceguide.vercel.app",
    tag: "Live Now",
    external: true,
  },
];

const comingSoon = [
  {
    title: "Capsule Wardrobe Builder",
    description: "Build a 30-piece wardrobe that works for every occasion. French style meets real life.",
  },
  {
    title: "Reinvention Planner",
    description: "A guided workbook for your second act — career pivot, business launch, or purpose rediscovery.",
  },
  {
    title: "Solo Travel Starter Kit",
    description: "First-trip planning guide, packing lists, safety tips, and destinations ranked for solo women 45+.",
  },
  {
    title: "Perimenopause Advocacy Kit",
    description: "Evidence-based talking points to bring to your doctor. Stop being dismissed.",
  },
  {
    title: "The Money After Divorce Roadmap",
    description: "Step-by-step financial rebuilding plan for the first 12 months on your own.",
  },
  {
    title: "Midlife Fitness Blueprint",
    description: "Pilates, walking, strength — a realistic plan built for changing bodies, not punishing them.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 sm:py-32 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
            For Women Who Are Done Asking Permission
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold leading-[1.1] mb-6 text-deep">
            This is your era.
            <br />
            <span className="text-gold">Wear the crown.</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            You spent decades building everyone else&apos;s life. Crown Years is
            for the woman who&apos;s finally building her own — with the money,
            the wisdom, and zero interest in waiting for permission.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#resources"
              className="inline-block bg-gold text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gold-dark transition-colors"
            >
              Explore Free Resources
            </a>
            <a
              href="#newsletter"
              className="inline-block border border-gold text-gold px-8 py-3 rounded-full text-sm font-medium hover:bg-gold hover:text-white transition-colors"
            >
              Join the Newsletter
            </a>
          </div>
        </div>
      </section>

      {/* The Manifesto Strip */}
      <section className="bg-deep text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 text-center">
          <p className="text-lg sm:text-xl leading-relaxed font-light italic">
            &ldquo;Women over 50 control 78% of household wealth and appear in
            fewer than 10% of ads. We outspend millennials by 250%. We make 95%
            of purchase decisions. We are the most powerful consumer force on
            Earth — and we are done being invisible.&rdquo;
          </p>
        </div>
      </section>

      {/* The Six Pillars */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-gold text-center mb-3">
          Six Pillars of Your Crown Years
        </p>
        <h2 className="text-3xl font-bold text-center mb-4 text-deep">
          Everything is connected. We treat it that way.
        </h2>
        <p className="text-sm text-muted text-center max-w-xl mx-auto mb-12">
          Other brands sell you menopause trackers OR career advice OR fashion
          guides. We know you&apos;re living all of it at once.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <Link
              key={pillar.title}
              href={pillar.href}
              className="block bg-card border border-border rounded-2xl p-6 hover:border-gold transition-colors group"
            >
              <h3
                className={`font-semibold text-lg mb-2 ${pillar.color} group-hover:text-gold transition-colors`}
              >
                {pillar.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {pillar.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Live Resources */}
      <section id="resources" className="bg-cream border-t border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
          <p className="text-xs uppercase tracking-[0.3em] text-gold text-center mb-3">
            Free Resources
          </p>
          <h2 className="text-3xl font-bold text-center mb-4 text-deep">
            Tools that give you power, not just information
          </h2>
          <p className="text-sm text-muted text-center max-w-lg mx-auto mb-12">
            Every tool is free, private, and built for action. No accounts, no
            data collection, no upsell traps.
          </p>

          {/* Live tools */}
          {liveTools.map((tool) => (
            <a
              key={tool.title}
              href={tool.href}
              target={tool.external ? "_blank" : undefined}
              rel={tool.external ? "noopener noreferrer" : undefined}
              className="block bg-card border-2 border-gold rounded-2xl p-8 mb-6 hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-block text-xs uppercase tracking-wider bg-gold text-white px-3 py-1 rounded-full mb-3">
                    {tool.tag}
                  </span>
                  <h3 className="text-xl font-semibold mb-2 text-deep group-hover:text-gold transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-muted">{tool.description}</p>
                </div>
                <span className="text-gold text-2xl shrink-0 ml-4">&#8594;</span>
              </div>
            </a>
          ))}

          {/* Coming soon grid */}
          <h3 className="text-lg font-semibold text-center mt-12 mb-6 text-deep">
            Coming Soon
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {comingSoon.map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-xl p-5 opacity-80"
              >
                <h4 className="font-semibold text-sm mb-2 text-deep">
                  {item.title}
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Permission Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
              The Truth Nobody Tells You
            </p>
            <h2 className="text-3xl font-bold mb-6 text-deep leading-tight">
              You don&apos;t need more advice.
              <br />
              You need permission to act on what you already know.
            </h2>
            <div className="space-y-4 text-muted text-sm leading-relaxed">
              <p>
                You know you deserve better. You know this isn&apos;t what the
                rest of your life looks like. You know you have the money, the
                brains, and the drive.
              </p>
              <p>
                The only thing missing is someone saying: <strong className="text-deep">go.</strong>
              </p>
              <p>
                Crown Years is that signal. Every tool, every guide, every
                resource here is designed to turn &ldquo;I should&rdquo; into
                &ldquo;I did.&rdquo;
              </p>
            </div>
          </div>
          <div className="bg-cream rounded-2xl p-8 border border-border">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              You&apos;re Allowed To
            </p>
            <ul className="space-y-3">
              {[
                "Spend money on yourself without justifying it to anyone",
                "Leave a marriage that stopped working 10 years ago",
                "Start a business at 55 and be wildly successful",
                "Wear whatever you want without asking what's \"age-appropriate\"",
                "Travel alone and love every second of it",
                "Put your health, your body, and your future first",
                "Be done with guilt about wanting more from your life",
                "Take up space. Be seen. Be heard. Be impossible to ignore.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="text-gold mt-0.5 shrink-0">&#10003;</span>
                  <span className="text-deep">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Social Proof Numbers */}
      <section className="bg-deep text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-gold-light">250%</p>
              <p className="text-xs text-white/60 mt-1">more spending power than millennials</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-gold-light">78%</p>
              <p className="text-xs text-white/60 mt-1">of national wealth controlled by women 50+</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-gold-light">2.8x</p>
              <p className="text-xs text-white/60 mt-1">more likely to succeed in business after 50</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-gold-light">70%</p>
              <p className="text-xs text-white/60 mt-1">of $124T wealth transfer going to women</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="bg-cream border-t border-border">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
            The Crown Years Letter
          </p>
          <h2 className="text-3xl font-bold mb-4 text-deep">
            One email a week.
            <br />
            Zero permission needed to read it.
          </h2>
          <p className="text-sm text-muted mb-8 max-w-md mx-auto">
            Tools, insights, and the occasional reminder that you are the most
            powerful consumer force on the planet — and you should act like it.
          </p>
          <NewsletterForm />
          <p className="text-xs text-muted mt-4">
            No spam. Unsubscribe anytime. We respect your inbox like we respect
            your time.
          </p>
        </div>
      </section>
    </>
  );
}
