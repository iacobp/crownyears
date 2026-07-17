"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CrownIcon from "@/components/CrownIcon";

const navItems = [
  { href: "/blog", label: "Journal" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="border-b border-border bg-card/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-2.5 group">
            <CrownIcon className="w-5 h-5 text-gold transition-transform duration-300 ease-out group-hover:scale-110" />
            <span className="font-serif text-xl tracking-tight text-deep">
              Crown Years
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[13px] transition-colors duration-300 tracking-wide ${
                  isActive(item.href)
                    ? "text-deep font-medium"
                    : "text-muted hover:text-deep"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#letter"
              className="rounded-full bg-deep px-6 py-2.5 text-[13px] tracking-wide text-cream transition-[background-color,transform] duration-200 ease-out hover:bg-gold active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              Get the Letter
            </Link>
          </nav>

          <button
            className="md:hidden rounded-lg p-2 text-muted transition-colors hover:bg-cream hover:text-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
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
          <nav
            id="mobile-navigation"
            className="md:hidden pb-6 space-y-3 border-t border-border pt-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 text-sm tracking-wide ${
                  isActive(item.href) ? "text-deep font-medium" : "text-muted hover:text-deep"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#letter"
              className="mt-4 block rounded-full bg-deep px-5 py-3 text-center text-sm tracking-wide text-cream transition-colors hover:bg-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              onClick={() => setMenuOpen(false)}
            >
              Get the Letter
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
