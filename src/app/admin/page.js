"use client";

import { motion } from "framer-motion";

export default function AdminOverview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
       <h1 className="text-3xl font-bold mb-6">Welcome Back, Admin</h1>
       <div className="grid md:grid-cols-3 gap-6">
         {/* Quick Stats mock */}
         <div className="bg-muted/50 p-6 rounded-2xl border border-border">
           <h3 className="text-muted-foreground font-medium mb-2">Total Projects</h3>
           <p className="text-4xl font-bold text-blue-500">4</p>
         </div>
         <div className="bg-muted/50 p-6 rounded-2xl border border-border">
           <h3 className="text-muted-foreground font-medium mb-2">Unread Messages</h3>
           <p className="text-4xl font-bold text-purple-500">0</p>
         </div>
         <div className="bg-muted/50 p-6 rounded-2xl border border-border">
           <h3 className="text-muted-foreground font-medium mb-2">Total Views</h3>
           <p className="text-4xl font-bold text-pink-500">1.2k</p>
         </div>
       </div>
    </motion.div>
  );
}
