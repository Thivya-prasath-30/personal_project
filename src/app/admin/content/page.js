"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Save, UploadCloud } from "lucide-react";

export default function ContentManagement() {
  const [bio, setBio] = useState("Hello! I'm a passionate Full-Stack Developer...");
  
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-3xl font-bold mb-8">Content Management</h1>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {/* About Section Update */}
        <div className="bg-card border border-border p-6 rounded-2xl">
          <h2 className="text-xl font-bold mb-6 text-primary">About Section</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Short Bio</label>
              <textarea 
                rows={5}
                value={bio}
                onChange={e => setBio(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            
            <div className="pt-4 border-t border-border">
              <label className="block text-sm font-medium mb-2">Resume Upload (PDF)</label>
              <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                 <UploadCloud size={32} className="mx-auto text-muted-foreground mb-3" />
                 <p className="font-medium">Click to upload or drag and drop</p>
                 <p className="text-sm text-muted-foreground mt-1">PDF file only (Max 5MB)</p>
              </div>
            </div>

            <button className="w-full py-3 mt-6 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition flex justify-center items-center gap-2">
               <Save size={18} /> Save About Changes
            </button>
          </div>
        </div>

        {/* Skills Update */}
        <div className="bg-card border border-border p-6 rounded-2xl">
          <h2 className="text-xl font-bold mb-6 text-primary">Skills Overview</h2>
          <p className="text-muted-foreground mb-6">Manage the technical skills displayed on your timeline and skills page.</p>
          
          <div className="space-y-3">
             {["React / Next.js", "Node.js", "MongoDB", "Tailwind CSS"].map(skill => (
                <div key={skill} className="flex items-center justify-between p-4 bg-background border border-border rounded-xl">
                   <span className="font-medium">{skill}</span>
                   <button className="text-blue-500 text-sm font-medium hover:underline">Edit</button>
                </div>
             ))}
             <button className="w-full p-4 border border-dashed border-border rounded-xl text-muted-foreground font-medium hover:bg-muted transition-colors">
                + Add New Skill
             </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
