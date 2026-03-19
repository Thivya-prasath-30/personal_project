"use client";

import { motion } from "framer-motion";
import { LogOut, LayoutDashboard, Briefcase, FileText, MessageSquare, Settings, BarChart3 } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function AdminDashboard({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch (error) {
      console.error("Logout failed");
    }
  };

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Projects", href: "/admin/projects", icon: Briefcase },
    { name: "Content", href: "/admin/content", icon: FileText },
    { name: "Messages", href: "/admin/messages", icon: MessageSquare },
    { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] flex mt-16 bg-muted/20">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border hidden md:flex flex-col">
        <div className="p-6">
          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Admin Panel
          </h2>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <item.icon size={20} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-destructive/10 transition-colors font-medium"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto border border-border bg-card p-8 rounded-3xl shadow-sm">
          {children || (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
               <h1 className="text-3xl font-bold mb-6">Welcome Back, Admin</h1>
               <div className="grid md:grid-cols-3 gap-6">
                 {/* Quick Stats mock */}
                 <div className="bg-muted/50 p-6 rounded-2xl border border-border">
                   <h3 className="text-muted-foreground font-medium mb-2">Total Projects</h3>
                   <p className="text-4xl font-bold text-blue-500">12</p>
                 </div>
                 <div className="bg-muted/50 p-6 rounded-2xl border border-border">
                   <h3 className="text-muted-foreground font-medium mb-2">Unread Messages</h3>
                   <p className="text-4xl font-bold text-purple-500">5</p>
                 </div>
                 <div className="bg-muted/50 p-6 rounded-2xl border border-border">
                   <h3 className="text-muted-foreground font-medium mb-2">Total Views</h3>
                   <p className="text-4xl font-bold text-pink-500">1.2k</p>
                 </div>
               </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
