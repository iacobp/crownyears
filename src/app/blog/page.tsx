import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "The Journal — Crown Years",
  description:
    "Insights, guides, and tools for women 45+ navigating finances, career, health, style, and reinvention.",
};

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
      <Reveal>
        <div className="text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold mb-4">
            The Journal
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl text-deep mb-6">
            Insights for your era.
          </h1>
          <p className="text-muted max-w-md mx-auto text-sm leading-relaxed">
            Evidence, not opinions. Tools, not platitudes. Every article is built
            to move you forward.
          </p>
        </div>
      </Reveal>

      {posts.length === 0 ? (
        <p className="text-center text-muted">First articles launching soon.</p>
      ) : (
        <div className="space-y-12">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block border-b border-border pb-12 last:border-none"
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
                  {post.metadata.category}
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl text-deep mb-3 group-hover:text-gold transition-colors duration-300 leading-tight">
                  {post.metadata.title}
                </h2>
                <p className="text-muted text-sm leading-relaxed mb-4 max-w-2xl">
                  {post.metadata.description}
                </p>
                <p className="text-xs text-muted/70">
                  {formatDate(post.metadata.date)} &middot; {post.readingTime}{" "}
                  min read
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
