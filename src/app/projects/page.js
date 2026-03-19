"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { PROJECTS as MOCK_PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Featured Projects
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-10"
        ></motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl"
        >
          A selection of my recent work. Explore the case studies to learn more about my development process and the technologies I use.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {MOCK_PROJECTS.map((project) => (
            <motion.div
              layout
              key={project._id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  <span className="px-3 py-1 bg-background/80 backdrop-blur text-xs font-semibold rounded-full border border-border/50">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex gap-3">
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group/link px-3 py-1.5 bg-muted/50 rounded-full hover:bg-muted">
                      <Github size={16} className="group-hover/link:-rotate-12 transition-transform" />
                      <span>Code</span>
                    </a>
                    {project.liveDemo !== "#" && (
                      <a href={project.liveDemo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary transition-colors group/link px-3 py-1.5 bg-primary/10 rounded-full hover:bg-primary/20">
                        <ExternalLink size={16} className="group-hover/link:scale-110 transition-transform" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                  
                  <Link 
                    href={`/projects/${project._id}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-blue-500 transition-colors"
                  >
                    Details
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
