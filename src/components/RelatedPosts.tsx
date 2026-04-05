import Link from "next/link";
import { getRelatedPosts, formatDate } from "@/lib/blog";
import type { Post } from "@/lib/blog";

interface Props {
  currentSlug: string;
  category: string;
  tags: string[];
}

export default async function RelatedPosts({
  currentSlug,
  category,
  tags,
}: Props) {
  const posts: Post[] = await getRelatedPosts(currentSlug, category, tags);

  if (posts.length === 0) return null;

  return (
    <section className="mt-20 pt-16 border-t border-border">
      <p className="text-[11px] uppercase tracking-[0.35em] text-gold mb-4">
        Continue Reading
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">
              {post.metadata.category}
            </p>
            <h3 className="font-serif text-lg text-deep mb-2 group-hover:text-gold transition-colors duration-300 leading-tight">
              {post.metadata.title}
            </h3>
            <p className="text-xs text-muted">
              {formatDate(post.metadata.date)} &middot; {post.readingTime} min
              read
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
