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
        className="flex-1 border border-border rounded-full px-5 py-3 text-sm bg-card focus:outline-none focus:border-gold"
      />
      <button
        type="submit"
        className="bg-gold text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gold-dark transition-colors shrink-0"
      >
        Join Free
      </button>
    </form>
  );
}
