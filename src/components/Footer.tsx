import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-cream mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-gold text-xl">&#9827;</span>
              <span className="font-semibold text-lg text-deep">Crown Years</span>
            </div>
            <p className="text-sm text-muted max-w-sm">
              For women who are done waiting for permission. Your money, your
              health, your career, your style, your rules.
            </p>
          </div>
          <div>
            <p className="font-semibold text-sm mb-3 text-deep">Resources</p>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/resources" className="hover:text-deep">
                  All Resources
                </Link>
              </li>
              <li>
                <a
                  href="https://graydivorceguide.vercel.app"
                  className="hover:text-deep"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gray Divorce Guide
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-sm mb-3 text-deep">Connect</p>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/about" className="hover:text-deep">
                  About
                </Link>
              </li>
              <li>
                <a href="#newsletter" className="hover:text-deep">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-border text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Crown Years. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
