import fs from "fs";
import path from "path";

export interface PostMetadata {
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  image?: string;
  author: string;
}

export interface Post {
  slug: string;
  metadata: PostMetadata;
  readingTime: number;
}

const CONTENT_DIR = path.join(process.cwd(), "src/content/blog");

export function getReadingTime(content: string): number {
  const words = content.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 238));
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export async function getPost(slug: string): Promise<Post> {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const readingTime = getReadingTime(raw);

  const mod = await import(`@/content/blog/${slug}.mdx`);
  const metadata: PostMetadata = mod.metadata;

  return { slug, metadata, readingTime };
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getAllSlugs();
  const posts = await Promise.all(slugs.map(getPost));
  return posts.sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  );
}

export async function getRelatedPosts(
  currentSlug: string,
  category: string,
  tags: string[],
  limit = 3
): Promise<Post[]> {
  const all = await getAllPosts();
  return all
    .filter((p) => p.slug !== currentSlug)
    .map((p) => {
      let score = 0;
      if (p.metadata.category === category) score += 3;
      const overlap = p.metadata.tags.filter((t) => tags.includes(t)).length;
      score += overlap;
      return { ...p, _score: score };
    })
    .sort((a, b) => b._score - a._score)
    .slice(0, limit);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
