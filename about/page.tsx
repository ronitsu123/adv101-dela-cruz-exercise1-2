"use client";

import { useState } from "react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("main");

  const aboutImageUrl = "https://uploads.onecompiler.io/43zvj4fst/1790514946875/41a008ee-8274-423a-a549-a4cd50814f32.jpg"; 

  const skills = [
    "JavaScript",
    "TypeScript",
    "React / Next.js",
    "Tailwind CSS",
    "Java",
    "SQL",
  ];

  const educationList = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "Holy Cross of Davao College",
      period: "2025 – Present", 
      description: "Focusing on core software developing principles, data structures, algorithms, and modern web development.",
    },
  ];

  const skillCategories = [
    { 
      category: "Frontend Development", 
      items: ["JavaScript", "TypeScript", "React / Next.js", "Tailwind CSS", "HTML / CSS"] 
    },
    { 
      category: "Backend & Database", 
      items: ["Java", "SQL", "Node.js", "MySQL"] 
    },
    { 
      category: "Tools & Technologies", 
      items: ["Git / GitHub", "VS Code", "Postman", "Figma"] 
    },
  ];

  return (
    <section className="relative max-w-5xl mx-auto px-6 py-20 overflow-hidden">
    
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="text-center md:text-left mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold mb-3 tracking-wide uppercase">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
          Portfolio Overview
        </div>
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400">
          About Me
        </h2>
      </div>

      <div className="relative z-10 bg-slate-950/60 backdrop-blur-2xl border border-slate-800/80 rounded-3xl shadow-2xl shadow-purple-950/20 p-6 md:p-10">
        
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pb-8 mb-8 border-b border-slate-800/80">
          {[
            { id: "main", label: "Main Info", icon: "" },
            { id: "education", label: "Education", icon: "" },
            { id: "skills", label: "Technical Skills", icon: "" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-medium text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 scale-105 ring-1 ring-purple-400/50"
                  : "bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800/60 border border-slate-800/50"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="transition-all duration-500 ease-in-out">
          
          {activeTab === "main" && (
            <div className="grid md:grid-cols-12 gap-8 items-center animate-fadeIn">
           
              <div className="md:col-span-4 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
                  <div className="relative w-48 h-56 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl">
                    <img
                      src={aboutImageUrl}
                      alt="About Profile Photo"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              <div className="md:col-span-8 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold mb-3 w-fit">
                  Design Developer
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Junior Developer</h3>
                <p className="text-slate-300 text-base leading-relaxed mb-4">
                 An explorer of logic and design, shaping lines of code into effortless digital experiences.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  When I'm not coding, I do creating some animations, and exploring tech trends, and taking photos for my gallery.
                </p>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-purple-950/40 text-purple-300 border border-purple-800/30 text-xs font-medium px-3.5 py-1.5 rounded-xl shadow-sm hover:border-purple-500/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "education" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Educational Background</h3>
                  <p className="text-slate-400 text-sm">My academic journey and qualifications</p>
                </div>
              </div>

              <div className="space-y-6">
                {educationList.map((edu, index) => (
                  <div 
                    key={index} 
                    className="relative bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 transition-all hover:border-purple-500/40 shadow-lg"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/25">
                        {edu.period}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                    <p className="text-sm font-medium text-purple-300 mb-3">{edu.school}</p>
                    <p className="text-slate-300 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "skills" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
                  <p className="text-slate-400 text-sm">Technologies and tools I work with</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {skillCategories.map((group, index) => (
                  <div 
                    key={index} 
                    className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 flex flex-col justify-between hover:border-purple-500/40 transition-all shadow-lg"
                  >
                    <h4 className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-4 pb-2 border-b border-slate-800">
                      {group.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="bg-purple-950/50 text-purple-300 border border-purple-800/40 text-xs font-medium px-3 py-1.5 rounded-xl hover:bg-purple-900/50 hover:text-white transition-all shadow-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
