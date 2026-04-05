"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-border bg-card/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="text-gold text-lg transition-transform duration-300 group-hover:scale-110">
              &#9827;
            </span>
            <span className="font-serif text-xl tracking-tight text-deep">
              Crown Years
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] text-muted hover:text-deep transition-colors duration-300 tracking-wide"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#newsletter"
              className="text-[13px] bg-deep text-cream px-6 py-2.5 rounded-full hover:bg-gold transition-colors duration-300 tracking-wide"
            >
              Join the Movement
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-muted"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden pb-6 space-y-3 border-t border-border pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-sm text-muted hover:text-deep tracking-wide"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
