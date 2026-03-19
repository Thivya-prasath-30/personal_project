"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Database, LayoutTemplate } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-30 dark:opacity-20 pointer-events-none blur-3xl">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <motion.div
          className="text-center z-10 max-w-4xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-block">
            <span className="px-4 py-2 rounded-full border border-border bg-background/50 backdrop-blur-sm text-sm font-medium">
              Hi, I'm Thivya Prasath.k 👋
            </span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
          >
            Aspiring Full-Stack <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Developer
            </span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            I'm a highly motivated enthusiastic fresher, dedicated to building and improving my skills. 
            I love learning modern web technologies and creating beautiful software solutions from scratch!
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/projects"
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:scale-105 transition-transform flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full border border-border bg-background hover:bg-muted font-medium transition-colors w-full sm:w-auto text-center"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Highlights Section */}
      <section className="py-24 bg-muted/50 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Core Competencies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Delivering end-to-end solutions from creative design to robust server architecture.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl bg-background border border-border/50 hover:border-border transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <LayoutTemplate className="text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
              <p className="text-muted-foreground">
                Building responsive, accessible, and performant user interfaces using React, Next.js, and Tailwind CSS.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-2xl bg-background border border-border/50 hover:border-border transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Backend Architecture</h3>
              <p className="text-muted-foreground">
                Designing scalable server-side systems and APIs using Node.js, Express, and Next.js Route Handlers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-8 rounded-2xl bg-background border border-border/50 hover:border-border transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Database className="text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Database Management</h3>
              <p className="text-muted-foreground">
                Modeling and managing data effectively with MongoDB, PostgreSQL, and modern ORMs/ODMs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
