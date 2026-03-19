"use client";

import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Users, Eye } from "lucide-react";

export default function AnalyticsDashboard() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-3xl font-bold mb-8">Analytics Dashboard</h1>

      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <div className="bg-card border border-border p-6 rounded-2xl flex items-center gap-4">
          <div className="p-4 bg-primary/10 text-primary rounded-xl">
             <Eye size={24} />
          </div>
          <div>
             <p className="text-muted-foreground text-sm font-medium">Total Page Views</p>
             <p className="text-2xl font-bold">12,543</p>
          </div>
        </div>

        <div className="bg-card border border-border p-6 rounded-2xl flex items-center gap-4">
          <div className="p-4 bg-pink-500/10 text-pink-500 rounded-xl">
             <Users size={24} />
          </div>
          <div>
             <p className="text-muted-foreground text-sm font-medium">Unique Visitors</p>
             <p className="text-2xl font-bold">4,192</p>
          </div>
        </div>

        <div className="bg-card border border-border p-6 rounded-2xl flex items-center gap-4">
          <div className="p-4 bg-blue-500/10 text-blue-500 rounded-xl">
             <TrendingUp size={24} />
          </div>
          <div>
             <p className="text-muted-foreground text-sm font-medium">Bounce Rate</p>
             <p className="text-2xl font-bold">34.2%</p>
          </div>
        </div>

        <div className="bg-card border border-border p-6 rounded-2xl flex items-center gap-4">
          <div className="p-4 bg-purple-500/10 text-purple-500 rounded-xl">
             <BarChart3 size={24} />
          </div>
          <div>
             <p className="text-muted-foreground text-sm font-medium">Avg Time</p>
             <p className="text-2xl font-bold">2m 45s</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
         <div className="bg-card border border-border p-6 rounded-2xl h-[400px] flex flex-col">
            <h2 className="text-xl font-bold mb-6">Traffic Sources</h2>
            <div className="flex-1 bg-muted/30 rounded-xl flex items-center justify-center border border-border border-dashed">
               <p className="text-muted-foreground">Chart Placeholder (Recharts / Chart.js)</p>
            </div>
         </div>
         <div className="bg-card border border-border p-6 rounded-2xl h-[400px] flex flex-col">
            <h2 className="text-xl font-bold mb-6">Top Pages</h2>
            <div className="flex-1 space-y-4">
               {["/projects", "/about", "/blog/building-scalable-nextjs", "/skills"].map((path, i) => (
                 <div key={path} className="flex justify-between items-center bg-background border border-border p-4 rounded-xl">
                    <span className="font-medium text-sm truncate pr-4">{path}</span>
                    <span className="font-bold">{1240 - i * 200} views</span>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </motion.div>
  );
}
