"use client";

import { motion } from "framer-motion";
import { Download, GraduationCap, Briefcase, User } from "lucide-react";

export default function About() {


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-10"></div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a Full-Stack developer based in Tamil Nadu, India. I am an Information Technology undergraduate from KASC.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am very passionate about improving my coding skills & developing websites & poster making. I build WebApps and Websites, currently learning MERN Stack.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Working for myself to improve my skills. Love to build interesting websites and I'm also a video editor.
            </p>
            
            <div className="pt-6">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:scale-105 transition-transform"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Profile Card / Extra details */}
          <div className="bg-muted/30 rounded-3xl p-8 border border-border">
            <div className="w-full aspect-[3/4] rounded-2xl bg-muted overflow-hidden border border-border shadow-inner mb-8">
               <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-6">
               <div>
                 <h4 className="font-semibold text-muted-foreground mb-1">Name</h4>
                 <p className="font-medium text-lg">Thivya Prasath.k</p>
               </div>
               <div>
                 <h4 className="font-semibold text-muted-foreground mb-1">Email</h4>
                 <p className="font-medium text-lg truncate">kthivyaprasath@gmail.com</p>
               </div>
               <div>
                 <h4 className="font-semibold text-muted-foreground mb-1">Location</h4>
                 <p className="font-medium text-lg">Erode, TamilNadu, India</p>
               </div>
               <div>
                 <h4 className="font-semibold text-muted-foreground mb-1">Availability</h4>
                 <p className="font-medium text-lg text-emerald-500">Freelance / Full-time</p>
               </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-24"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">🎓 Education</h2>
        <p className="text-center text-muted-foreground italic mb-12 max-w-2xl mx-auto">
          "Education is Not Learning of Facts, But The Training of the Mind To Think"
        </p>
        
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl overflow-hidden shadow-sm flex flex-col md:flex-row group hover:shadow-xl transition-all">
           <div className="md:w-2/5 aspect-video md:aspect-auto overflow-hidden">
             <img 
               src="/school.jpg" 
               alt="Kongu kalvi nilayam matric Hr sec School" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
             />
           </div>
           <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
              <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mb-4">High School (HSL)</span>
              <h3 className="text-2xl font-bold mb-3 leading-tight">Kongu kalvi nilayam matric Hr sec School</h3>
              <p className="text-muted-foreground flex items-center gap-2 font-medium mb-1">
                 Rangampalayam, Erode
              </p>
              <p className="text-muted-foreground font-medium mb-1">Period: 2022 - 2023</p>
              <p className="text-muted-foreground font-medium">Percentage: 66%</p>
           </div>
        </div>

        {/* College Section */}
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl overflow-hidden shadow-sm flex flex-col md:flex-row group hover:shadow-xl transition-all mt-8">
           <div className="md:w-2/5 aspect-video md:aspect-auto overflow-hidden">
             <img 
               src="/college.jpg" 
               alt="Kongu Arts and Science College" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
             />
           </div>
           <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
              <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mb-4">Undergraduate</span>
              <h3 className="text-2xl font-bold mb-1 leading-tight">Bachelor of Science in Information Technology</h3>
              <p className="text-lg font-semibold text-foreground mb-3">Kongu Arts and Science College</p>
              <p className="text-muted-foreground flex items-center gap-2 font-medium mb-1">
                 Erode
              </p>
              <p className="text-muted-foreground font-medium mb-1">Period: 2023 - 2026</p>
              <p className="text-muted-foreground font-medium">Percentage: 70%</p>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
