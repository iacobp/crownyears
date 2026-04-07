import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts, formatDate } from "@/lib/blog";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "The Journal — Crown Years",
  description:
    "Insights, guides, and tools for women 45+ navigating finances, career, health, style, and reinvention.",
};

export default async function BlogIndex() {
  const posts = await getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
      <Reveal>
        <div className="mb-16">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold mb-4">
            The Journal
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl text-deep mb-6 leading-[1.05]">
            Insights for your era.
          </h1>
          <p className="text-muted max-w-md text-sm leading-relaxed">
            Evidence, not opinions. Tools, not platitudes. Every article is built
            to move you forward.
          </p>
        </div>
      </Reveal>

      {posts.length === 0 ? (
        <p className="text-muted">First articles launching soon.</p>
      ) : (
        <>
          {/* Featured post — large, with image */}
          {featured && (
            <Reveal>
              <Link
                href={`/blog/${featured.slug}`}
                className="group block mb-16"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {featured.metadata.image && (
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                      <Image
                        src={featured.metadata.image}
                        alt={featured.metadata.title}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      />
                    </div>
                  )}
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
                      {featured.metadata.category}
                    </p>
                    <h2 className="font-serif text-3xl sm:text-4xl text-deep mb-4 group-hover:text-gold transition-colors duration-300 leading-tight">
                      {featured.metadata.title}
                    </h2>
                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {featured.metadata.description}
                    </p>
                    <p className="text-xs text-muted/70">
                      {formatDate(featured.metadata.date)} &middot;{" "}
                      {featured.readingTime} min read
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          )}

          {/* Remaining posts — compact with thumbnails */}
          {rest.length > 0 && (
            <div className="border-t border-border pt-12 space-y-0">
              {rest.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.06}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group grid grid-cols-1 sm:grid-cols-[1fr_200px] gap-6 items-center py-10 border-b border-border last:border-none"
                  >
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">
                        {post.metadata.category}
                      </p>
                      <h2 className="font-serif text-xl sm:text-2xl text-deep mb-2 group-hover:text-gold transition-colors duration-300 leading-tight">
                        {post.metadata.title}
                      </h2>
                      <p className="text-muted text-sm leading-relaxed mb-2 max-w-xl">
                        {post.metadata.description}
                      </p>
                      <p className="text-xs text-muted/70">
                        {formatDate(post.metadata.date)} &middot;{" "}
                        {post.readingTime} min read
                      </p>
                    </div>
                    {post.metadata.image && (
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden hidden sm:block">
                        <Image
                          src={post.metadata.image}
                          alt={post.metadata.title}
                          fill
                          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        />
                      </div>
                    )}
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
