import NewsletterForm from "@/components/NewsletterForm";

interface NewsletterPanelProps {
  compact?: boolean;
}

export default function NewsletterPanel({
  compact = false,
}: NewsletterPanelProps) {
  return (
    <section
      id={compact ? undefined : "letter"}
      className={`bg-cream ${compact ? "border border-border p-8 sm:p-10" : "border-y border-border"}`}
    >
      <div
        className={
          compact
            ? ""
            : "mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-24 sm:px-8 sm:py-28 lg:grid-cols-12 lg:items-end"
        }
      >
        <div className={compact ? "" : "lg:col-span-7"}>
          <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-gold-dark">
            The Crown Years Letter
          </p>
          <h2
            className={`font-serif leading-[1.08] text-deep text-balance ${
              compact ? "text-2xl" : "text-4xl sm:text-5xl"
            }`}
          >
            One decision. One useful tool. One thing worth considering.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted">
            A weekly note for women who prefer clear choices, useful detail,
            and recommendations that earn their place.
          </p>
        </div>
        <div className={compact ? "mt-7" : "lg:col-span-5"}>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
