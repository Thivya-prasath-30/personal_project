import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { notFound } from "next/navigation";

// Mock data (matches page.js) + Markdown Content
const MOCK_BLOGS = [
  {
    slug: "building-scalable-nextjs",
    title: "Building Scalable Next.js Applications in 2026",
    date: "2026-03-15",
    tags: ["Next.js", "Performance", "React"],
    readTime: "5 min read",
    content: `
Next.js 16 represents a massive leap forward in React framework capabilities. With Turbopack completely stabilized, compile times are barely noticeable.

## The Power of the Edge

Deploying middleware and API routes to the edge reduces latency drastically.

\`\`\`javascript
export const config = {
  runtime: 'edge', // This is still relevant for some APIs
};
\`\`\`

## React Server Components

RSCs have fundamentally changed how we fetch data:
- No waterfall effect.
- Zero client-side JS for static chunks.
- Seamless hydration.

> "The future of web development is server-driven UI."

To conclude, if you aren't using Next.js App Router yet, 2026 is definitely the time to jump in!
    `
  },
];

export default async function BlogPost({ params }) {
  const resolvedParams = await params;
  const post = MOCK_BLOGS.find(p => p.slug === resolvedParams.slug) || MOCK_BLOGS[0];

  if (!post) {
    return notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link 
        href="/blog"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10 font-medium"
      >
        <ArrowLeft size={20} />
        Back to Blog
      </Link>

      <header className="mb-12">
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map(tag => (
             <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">
               {tag}
             </span>
          ))}
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground py-6 border-y border-border/50">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
             {new Date(post.date).toLocaleDateString()}
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
             {post.readTime}
          </div>
          <div className="flex-1"></div>
          <button className="flex items-center gap-2 hover:text-foreground transition-colors">
             <Share2 size={16} /> Share
          </button>
        </div>
      </header>

      {/* Markdown Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none 
          prose-headings:font-bold prose-headings:tracking-tight
          prose-a:text-blue-500 hover:prose-a:text-blue-600
          prose-img:rounded-3xl prose-img:border prose-img:border-border
          prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:bg-muted/50 prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-muted/30 prose-pre:border prose-pre:border-border">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
