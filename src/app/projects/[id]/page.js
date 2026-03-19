import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS as MOCK_PROJECTS } from "@/lib/data";

export default async function ProjectDetail({ params }) {
  // In Next.js 14/15, params is usually a Promise, wait for it if necessary
  const resolvedParams = await params;
  const project = MOCK_PROJECTS.find(p => p._id === resolvedParams.id);

  if (!project) {
    return notFound();
  }

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10 font-medium"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
        
        <div className="flex flex-wrap gap-4 mb-10">
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold border border-primary/20">
            {project.category}
          </span>
          <div className="flex gap-3">
             {project.githubLink !== "#" && (
               <a 
                 href={project.githubLink} 
                 target="_blank" 
                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background hover:bg-muted transition-colors font-medium"
               >
                 <Github size={18} /> Code
               </a>
             )}
             {project.liveDemo !== "#" && (
               <a 
                 href={project.liveDemo} 
                 target="_blank" 
                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:scale-105 transition-transform font-medium"
               >
                 <ExternalLink size={18} /> Live Demo
               </a>
             )}
          </div>
        </div>

        <div className="relative aspect-video rounded-3xl overflow-hidden mb-16 shadow-2xl border border-border">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
             <section>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  {project.description}
                </p>
             </section>
             
             <section>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="list-disc pl-6 space-y-2 text-lg text-muted-foreground">
                  <li>Responsive and accessible UI</li>
                  <li>Secure authentication layer</li>
                  <li>Performant data fetching and caching</li>
                  <li>Optimized build size and delivery</li>
                </ul>
             </section>
          </div>

          <div className="bg-muted/30 p-8 rounded-3xl border border-border h-fit">
            <h3 className="text-xl font-bold mb-6">Tech Stack</h3>
            <div className="flex flex-col gap-3">
              {project.techStack.map(tech => (
                <div key={tech} className="flex items-center gap-3 bg-background border border-border px-4 py-3 rounded-xl">
                  {/* simple dot for aesthetics */}
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="font-medium text-foreground">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
