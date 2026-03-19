"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Tag, ArrowRight } from "lucide-react";

const MOCK_BLOGS = [
  {
    slug: "building-scalable-nextjs",
    title: "Building Scalable Next.js Applications in 2026",
    excerpt: "Exploring the latest Turbopack features, edge runtimes, and caching strategies for Next.js 16.",
    date: "2026-03-15",
    tags: ["Next.js", "Performance", "React"],
    readTime: "5 min read"
  },
  {
    slug: "tailwind-v4-features",
    title: "What's new in Tailwind CSS v4?",
    excerpt: "A deep dive into Tailwind v4's new engine, PostCSS integration, and seamless inline variables.",
    date: "2026-02-28",
    tags: ["CSS", "Tailwind", "Design"],
    readTime: "4 min read"
  },
  {
    slug: "mastering-framer-motion",
    title: "Mastering Framer Motion for Modern UIs",
    excerpt: "Learn how to build stunning layouts and micro-interactions that captivate your users.",
    date: "2026-02-10",
    tags: ["Animations", "React", "UX"],
    readTime: "6 min read"
  }
];

export default function BlogList() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Insights</h1>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6"></div>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Thoughts, tutorials, and deep dives into modern web development.
        </p>
      </motion.div>

      <div className="space-y-10">
        {MOCK_BLOGS.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            className="group relative bg-card border border-border p-8 rounded-3xl hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1.5 bg-muted/50 px-3 py-1 rounded-full w-fit">
                <Calendar size={14} />
                <time>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
              </div>
              <span className="hidden md:block">•</span>
              <span>{post.readTime}</span>
            </div>

            <Link href={`/blog/${post.slug}`} className="block">
              <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
            </Link>
            
            <p className="text-muted-foreground mb-6 line-clamp-2">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border/50 text-sm font-medium border-dashed">
              <div className="flex gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="flex items-center gap-1 px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">
                     <Tag size={12} /> {tag}
                  </span>
                ))}
              </div>
              <Link 
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-primary hover:text-blue-500 transition-colors"
              >
                Read Article
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
