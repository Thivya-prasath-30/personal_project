"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, Link as LinkIcon, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

// Mock data, in a complete app this is fetched via SWR/React Query from /api/projects
const INITIAL_PROJECTS = [
  {
    _id: "1",
    title: "E-Commerce Platform",
    category: "Full Stack",
    liveDemo: "https://example.com"
  },
  {
    _id: "2",
    title: "AI Writing Assistant",
    category: "AI/ML",
    liveDemo: "https://example.com"
  }
];

export default function AdminProjects() {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({ title: "", category: "", liveDemo: "" });

  const handleAddProject = (e) => {
    e.preventDefault();
    const newProject = {
      _id: Math.random().toString(36).substring(7),
      ...formData
    };
    setProjects([newProject, ...projects]);
    setIsAdding(false);
    setFormData({ title: "", category: "", liveDemo: "" });
  };

  const handleDelete = (id) => {
    setProjects(projects.filter(p => p._id !== id));
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Projects</h1>
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          <Plus size={18} /> Add Project
        </button>
      </div>

      {isAdding && (
        <motion.form 
          initial={{ opacity: 0, height: 0 }} 
          animate={{ opacity: 1, height: "auto" }}
          className="bg-muted/30 border border-border p-6 rounded-2xl mb-8 space-y-4"
          onSubmit={handleAddProject}
        >
          <h2 className="text-xl font-bold mb-4">New Project</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input 
                required
                type="text" 
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value})}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <input 
                required
                type="text" 
                value={formData.category}
                onChange={e => setFormData({...formData, category: e.target.value})}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background" 
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Live Demo URL</label>
              <input 
                required
                type="url" 
                value={formData.liveDemo}
                onChange={e => setFormData({...formData, liveDemo: e.target.value})}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background" 
              />
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-4">
            <button 
              type="button" 
              onClick={() => setIsAdding(false)}
              className="px-4 py-2 rounded-lg bg-muted text-muted-foreground font-medium"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700"
            >
              Save Project
            </button>
          </div>
        </motion.form>
      )}

      <div className="border border-border rounded-xl overflow-hidden bg-background">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-muted border-b border-border">
              <th className="p-4 font-semibold text-muted-foreground">Title</th>
              <th className="p-4 font-semibold text-muted-foreground">Category</th>
              <th className="p-4 font-semibold text-muted-foreground hidden md:table-cell">Link</th>
              <th className="p-4 font-semibold text-muted-foreground text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project._id} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                <td className="p-4 font-medium">{project.title}</td>
                <td className="p-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                    {project.category}
                  </span>
                </td>
                <td className="p-4 hidden md:table-cell">
                  <a href={project.liveDemo} target="_blank" className="text-blue-500 hover:underline flex items-center gap-1">
                    <ExternalLink size={14} /> View
                  </a>
                </td>
                <td className="p-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 text-muted-foreground hover:text-blue-500 hover:bg-blue-500/10 rounded-lg transition-colors">
                      <Edit2 size={18} />
                    </button>
                    <button 
                      onClick={() => handleDelete(project._id)}
                      className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {projects.length === 0 && (
              <tr>
                <td colSpan={4} className="p-8 text-center text-muted-foreground">
                  No projects found. Add one to get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
