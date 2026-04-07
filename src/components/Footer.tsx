import Link from "next/link";
import CrownIcon from "@/components/CrownIcon";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-cream mt-0">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <CrownIcon className="w-5 h-5 text-gold" />
              <span className="font-serif text-xl text-deep">Crown Years</span>
            </div>
            <p className="text-sm text-muted max-w-sm leading-relaxed">
              For women who are done waiting for permission. Your money, your
              health, your career, your style, your rules.
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
              Resources
            </p>
            <ul className="space-y-2.5 text-sm text-muted">
              <li>
                <Link href="/blog" className="hover:text-deep transition-colors duration-300">
                  The Journal
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-deep transition-colors duration-300">
                  All Resources
                </Link>
              </li>
              <li>
                <Link href="/divorce" className="hover:text-deep transition-colors duration-300">
                  Gray Divorce Guide
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
              Connect
            </p>
            <ul className="space-y-2.5 text-sm text-muted">
              <li>
                <Link href="/about" className="hover:text-deep transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <a href="#newsletter" className="hover:text-deep transition-colors duration-300">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-border text-center">
          <p className="text-[11px] text-muted tracking-wide">
            &copy; {new Date().getFullYear()} Crown Years. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
