import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPost, formatDate } from "@/lib/blog";
import TableOfContents from "@/components/TableOfContents";
import RelatedPosts from "@/components/RelatedPosts";
import NewsletterForm from "@/components/NewsletterForm";
import Reveal from "@/components/Reveal";
import ShareButtons from "@/components/ShareButtons";
import CrownIcon from "@/components/CrownIcon";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPost(slug);
    const m = post.metadata;
    return {
      title: `${m.title} — Crown Years`,
      description: m.description,
      openGraph: {
        title: m.title,
        description: m.description,
        type: "article",
        publishedTime: m.date,
        authors: [m.author],
        images: m.image ? [{ url: m.image, width: 1200, height: 630 }] : [],
      },
      twitter: {
        card: "summary_large_image",
        title: m.title,
        description: m.description,
      },
    };
  } catch {
    return { title: "Post Not Found — Crown Years" };
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let Post, postMeta;
  try {
    const mod = await import(`@/content/blog/${slug}.mdx`);
    Post = mod.default;
    postMeta = mod.metadata;
  } catch {
    notFound();
  }

  const post = await getPost(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: postMeta.title,
    description: postMeta.description,
    image: postMeta.image,
    datePublished: postMeta.date,
    dateModified: postMeta.date,
    author: {
      "@type": "Organization",
      name: "Crown Years",
    },
    publisher: {
      "@type": "Organization",
      name: "Crown Years",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://crownyears.com/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <TableOfContents />

      {/* Article header — editorial, centered, generous */}
      <header className="max-w-3xl mx-auto px-6 sm:px-8 pt-16 sm:pt-24 pb-10 text-center">
        <Reveal>
          <Link
            href="/blog"
            className="text-[10px] uppercase tracking-[0.3em] text-gold hover:text-gold-dark transition-colors"
          >
            {postMeta.category}
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-deep mt-6 mb-8 leading-[1.08] max-w-2xl mx-auto">
            {postMeta.title}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-muted text-sm mb-6 max-w-lg mx-auto leading-relaxed">
            {postMeta.description}
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="flex items-center justify-center gap-3 text-xs text-muted/70">
            <span>By {postMeta.author}</span>
            <span className="text-border">|</span>
            <time dateTime={postMeta.date}>{formatDate(postMeta.date)}</time>
            <span className="text-border">|</span>
            <span>{post.readingTime} min read</span>
          </div>
        </Reveal>
      </header>

      {/* Featured image — full-bleed with contained max-width */}
      {postMeta.image && (
        <Reveal>
          <div className="max-w-5xl mx-auto px-6 sm:px-8 mb-16 featured-image">
            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden">
              <Image
                src={postMeta.image}
                alt={postMeta.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Reveal>
      )}

      {/* Article body */}
      <article className="max-w-[680px] mx-auto px-6 sm:px-8 pb-16">
        <Reveal delay={0.1}>
          <div className="article-body first-letter:font-serif first-letter:text-6xl first-letter:font-bold first-letter:text-gold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
            <Post />
          </div>
        </Reveal>

        {/* Tags */}
        {postMeta.tags && postMeta.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-2">
            {postMeta.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-[0.2em] text-muted bg-cream px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Share buttons */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted mb-4">
            Share This Article
          </p>
          <ShareButtons title={postMeta.title} slug={slug} />
        </div>

        {/* Author bio */}
        <div className="mt-12 pt-8 border-t border-border flex items-start gap-5">
          <div className="w-14 h-14 rounded-full bg-cream border border-border flex items-center justify-center shrink-0">
            <CrownIcon className="w-6 h-6 text-gold" />
          </div>
          <div>
            <p className="font-serif text-lg text-deep mb-1">Crown Years</p>
            <p className="text-sm text-muted leading-relaxed">
              Evidence-based tools, guides, and resources for women 45+ who are
              done being invisible. We sell permission, not products.
            </p>
          </div>
        </div>

        {/* Newsletter CTA */}
        <section className="mt-16 p-10 bg-cream rounded-2xl border border-border text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold mb-3">
            The Crown Years Letter
          </p>
          <h3 className="font-serif text-2xl text-deep mb-3">
            One email a week. Zero permission required.
          </h3>
          <p className="text-muted text-sm mb-6 max-w-sm mx-auto">
            Tools, insights, and the occasional reminder that you are the most
            powerful consumer force on the planet.
          </p>
          <NewsletterForm />
        </section>

        {/* Related posts */}
        <RelatedPosts
          currentSlug={slug}
          category={postMeta.category}
          tags={postMeta.tags}
        />
      </article>
    </>
  );
}
