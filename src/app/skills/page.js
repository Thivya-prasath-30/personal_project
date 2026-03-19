"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React / Next.js", level: 90 },
        { name: "HTML5 / CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Framer Motion", level: 80 },
        { name: "TypeScript", level: 85 },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Next.js API Routes", level: 90 },
        { name: "Python", level: 70 },
        { name: "RESTful APIs", level: 90 },
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 75 },
        { name: "Git / GitHub", level: 90 },
        { name: "Docker", level: 65 },
        { name: "Vercel / AWS", level: 75 },
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Technical Skills</h1>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6"></div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise, categorized by domain and level of proficiency.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-12">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: catIndex * 0.1 + 0.2 }}
            className="bg-card border border-border rounded-3xl p-8 shadow-sm flex flex-col"
          >
            <h2 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 inline-block">
              {category.title}
            </h2>
            
            <div className="space-y-6 flex-1">
              {category.skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm font-semibold text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
