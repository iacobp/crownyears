"use client";

import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const els = document.querySelectorAll("article h2[id]");
    const items: Heading[] = Array.from(els).map((el) => ({
      id: el.id,
      text: el.textContent || "",
    }));
    setHeadings(items);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (headings.length < 3) return null;

  return (
    <nav className="hidden xl:block fixed right-[max(1rem,calc((100vw-72rem)/2-14rem))] top-32 w-56">
      <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
        In This Article
      </p>
      <ul className="space-y-2.5 border-l border-border pl-4">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`block text-xs leading-relaxed transition-colors duration-200 ${
                activeId === h.id
                  ? "text-gold border-l-2 border-gold -ml-[17px] pl-[15px]"
                  : "text-muted hover:text-deep"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
