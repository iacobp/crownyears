"use client";

interface Props {
  title: string;
  slug: string;
}

export default function ShareButtons({ title, slug }: Props) {
  const url =
    typeof window !== "undefined"
      ? window.location.href
      : `https://crownyears.com/blog/${slug}`;

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      label: "Pinterest",
      href: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`,
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
    },
    {
      label: "Email",
      href: `mailto:?subject=${encodedTitle}&body=I thought you might find this useful: ${encodedUrl}`,
    },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.label !== "Email" ? "_blank" : undefined}
          rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
          className="text-xs text-muted border border-border px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors duration-300"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
