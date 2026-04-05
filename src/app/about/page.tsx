import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About — Crown Years",
  description: "Why Crown Years exists and who it's for.",
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
      <p className="text-[11px] uppercase tracking-[0.35em] text-gold mb-4">
        About Crown Years
      </p>
      <h1 className="font-serif text-4xl sm:text-5xl text-deep mb-10 leading-[1.1]">
        We exist because the most powerful women on the planet are treated like
        they don&apos;t.
      </h1>

      <div className="relative w-full aspect-[3/4] sm:aspect-[4/3] rounded-2xl overflow-hidden mb-12">
        <Image
          src="/blog/portrait-silver-blazer.jpg"
          alt="Confident woman in her crown years"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-6 text-muted leading-relaxed">
        <p>
          Women aged 45 to 65 control more wealth, make more spending decisions,
          and drive more economic activity than any other group on Earth.
        </p>
        <p>
          They outspend millennials by 250%. They make 95% of household purchase
          decisions. They control 78% of national wealth. If they were a
          country, they&apos;d be the world&apos;s second-largest economy.
        </p>
        <p>
          And yet: fewer than 3% feel represented by the brands selling to them.
          They appear in fewer than 10% of ads. The only products marketed to
          them are anti-wrinkle creams and incontinence pads.
        </p>
        <p className="text-deep font-medium text-lg">
          Crown Years is the brand that says: enough.
        </p>
        <p>
          We build free tools that give midlife women financial clarity, health
          autonomy, career confidence, and the practical resources to design the
          life they actually want — not the one society defaulted them into.
        </p>
        <p>
          We don&apos;t sell anti-aging. We don&apos;t condescend. We don&apos;t
          wrap everything in menopause language as if that&apos;s the only thing
          happening in your life.
        </p>
        <p>
          We treat you like the powerful, intelligent, well-funded woman you are
          — and we build the resources to match.
        </p>
      </div>

      <div className="mt-12 p-8 bg-cream rounded-2xl border border-border">
        <h2 className="text-xl font-bold text-deep mb-4">What we believe</h2>
        <ul className="space-y-3">
          {[
            "You don't need permission to spend money on yourself.",
            "45 is not the beginning of decline. It's the beginning of sovereignty.",
            "Your health, your finances, your career, and your identity are connected. We treat them that way.",
            "Free tools should be genuinely free — no paywalls, no data harvesting, no bait-and-switch.",
            "The best years of your life aren't behind you. They're the ones you finally get to design yourself.",
          ].map((belief) => (
            <li key={belief} className="flex items-start gap-3 text-sm">
              <span className="text-gold mt-0.5 shrink-0">&#9827;</span>
              <span className="text-deep">{belief}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
