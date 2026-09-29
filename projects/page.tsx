interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Web App",
    description: "Full-stack online store featuring real-time inventory management and dark UI.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: "https://uploads.onecompiler.io/43zvj4fst/1790515007204/c72306c0-d86b-4481-b064-bb465e059738.jpg", 
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Android Task Manager Concept",
    description: "Mobile daily task manager featuring custom filters and local storage.",
    tags: ["Java", "Android Studio", "Kotlin"],
    imageUrl: "https://uploads.onecompiler.io/43zvj4fst/1790514974165/5c96e894-f166-4042-8cad-daf9ae3536cc.jpg", 
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export default function ProjectsPage() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 py-16 overflow-hidden">
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

      <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400 border-b border-purple-500/30 pb-3 mb-10 inline-block relative z-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 relative z-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-slate-900/70 backdrop-blur-xl border border-slate-800/80 shadow-2xl shadow-black/40 rounded-2xl overflow-hidden flex flex-col hover:border-purple-500/50 hover:shadow-purple-950/30 transition-all duration-300 group"
          >
            <div className="h-52 w-full bg-slate-950 relative overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-60"></div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-purple-950/60 text-purple-300 border border-purple-800/40 text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-all duration-300 shadow-lg shadow-purple-600/25 hover:-translate-y-0.5"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-slate-800/60 hover:bg-slate-800 backdrop-blur-xl text-slate-200 text-sm font-medium px-4 py-2.5 rounded-xl transition-all duration-300 border border-slate-700/80 hover:border-slate-600 hover:-translate-y-0.5 shadow-lg shadow-black/20"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
