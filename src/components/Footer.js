import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/40 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-foreground/60 text-sm">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
        
        <div className="flex space-x-6">
          <Link href="https://github.com/Thivya-prasath-30" target="_blank" className="text-foreground/60 hover:text-foreground transition-colors">
            <span className="sr-only">GitHub</span>
            <Github size={20} />
          </Link>
          <Link href="https://www.linkedin.com/in/thivya-prasath-11a891320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-foreground/60 hover:text-foreground transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
