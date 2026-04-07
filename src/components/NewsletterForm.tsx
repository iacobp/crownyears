"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@") || !email.includes(".")) {
      setStatus("error");
      return;
    }
    // TODO: Connect to Beehiiv API
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="text-center py-4">
        <p className="font-serif text-lg text-deep mb-1">Welcome to the movement.</p>
        <p className="text-sm text-muted">Check your inbox — your first letter is on its way.</p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="flex-1">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          className={`w-full border rounded-full px-6 py-3.5 text-sm bg-card focus:outline-none transition-colors duration-300 ${
            status === "error"
              ? "border-rose focus:border-rose"
              : "border-border focus:border-gold"
          }`}
        />
        {status === "error" && (
          <p className="text-xs text-rose mt-2 ml-4">Enter a valid email address.</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-deep text-cream px-7 py-3.5 rounded-full text-sm tracking-wide hover:bg-gold active:scale-[0.98] transition-all duration-300 shrink-0"
      >
        Join Free
      </button>
    </form>
  );
}
