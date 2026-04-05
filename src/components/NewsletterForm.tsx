"use client";

export default function NewsletterForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="your@email.com"
        className="flex-1 border border-border rounded-full px-6 py-3.5 text-sm bg-card focus:outline-none focus:border-gold transition-colors duration-300"
      />
      <button
        type="submit"
        className="bg-deep text-cream px-7 py-3.5 rounded-full text-sm tracking-wide hover:bg-gold transition-colors duration-300 shrink-0"
      >
        Join Free
      </button>
    </form>
  );
}
