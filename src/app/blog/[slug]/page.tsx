import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getPost, formatDate } from "@/lib/blog";
import TableOfContents from "@/components/TableOfContents";
import RelatedPosts from "@/components/RelatedPosts";
import NewsletterForm from "@/components/NewsletterForm";
import Reveal from "@/components/Reveal";

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

      <article className="max-w-3xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
        {/* Article header */}
        <Reveal>
          <header className="mb-16 text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6">
              {postMeta.category}
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-deep mb-8 leading-[1.08]">
              {postMeta.title}
            </h1>
            <p className="text-muted text-sm">
              {postMeta.author} &middot; {formatDate(postMeta.date)} &middot;{" "}
              {post.readingTime} min read
            </p>
          </header>
        </Reveal>

        {/* Article body */}
        <Reveal delay={0.1}>
          <div className="article-body">
            <Post />
          </div>
        </Reveal>

        {/* Newsletter CTA */}
        <section className="mt-20 pt-16 border-t border-border text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold mb-4">
            The Crown Years Letter
          </p>
          <h3 className="font-serif text-2xl sm:text-3xl text-deep mb-4">
            One email a week. Zero permission required.
          </h3>
          <p className="text-muted text-sm mb-8 max-w-sm mx-auto">
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
