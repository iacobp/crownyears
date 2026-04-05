import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }) => (
      <h1
        className="font-serif text-4xl sm:text-5xl text-deep mb-8 leading-[1.1]"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        className="font-serif text-3xl text-deep mt-16 mb-6 leading-[1.15]"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        className="font-serif text-2xl text-deep mt-12 mb-4 leading-[1.2]"
        {...props}
      >
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p
        className="text-[17px] text-muted leading-[1.8] mb-6"
        {...props}
      >
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul className="space-y-3 mb-8 ml-1" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="space-y-3 mb-8 ml-1 list-decimal list-inside" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="flex items-start gap-3 text-[17px] text-muted leading-[1.8]" {...props}>
        <span className="text-gold mt-1 shrink-0 text-xs">&#9827;</span>
        <span>{children}</span>
      </li>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-2 border-gold bg-cream/50 rounded-r-xl px-8 py-6 my-10 font-serif text-xl text-deep italic leading-relaxed"
        {...props}
      >
        {children}
      </blockquote>
    ),
    a: ({ children, ...props }) => (
      <a
        className="text-gold underline underline-offset-2 decoration-gold/40 hover:decoration-gold transition-colors duration-300"
        {...props}
      >
        {children}
      </a>
    ),
    strong: ({ children, ...props }) => (
      <strong className="text-deep font-semibold" {...props}>
        {children}
      </strong>
    ),
    hr: () => (
      <hr className="my-16 border-none h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    ),
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto my-8">
        <table className="w-full text-sm border-collapse" {...props}>
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }) => (
      <th
        className="text-left text-[11px] uppercase tracking-[0.2em] text-gold py-3 px-4 border-b border-border font-medium"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td className="py-3 px-4 text-muted border-b border-border/50" {...props}>
        {children}
      </td>
    ),
    ...components,
  };
}
