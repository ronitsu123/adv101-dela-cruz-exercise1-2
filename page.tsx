import Link from "next/link";

export default function HomePage() {
  const profileImageUrl = "https://uploads.onecompiler.io/43zvj4fst/1790514936884/e18cc5ef-cdac-495f-bcbe-857f2032e67a.jpg"; 

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6 py-12 overflow-hidden">

      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
      
        <div>
         
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            Hello World!
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-400">Tyron Dela Cruz</span>
          </h1>

          <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
            I weave together fluid code and thoughtful design, building web and mobile spaces that breathe, adapt, and move seamlessly with the user.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-purple-600/30 hover:-translate-y-0.5"
            >
              View Projects
            </Link>
            <Link
              href="/gallery"
              className="bg-slate-900/70 hover:bg-slate-800/80 backdrop-blur-xl border border-slate-800/80 hover:border-slate-700 text-slate-200 font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-black/20"
            >
              See Gallery
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-72 h-80 p-[2px] rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-500 shadow-2xl shadow-purple-950/60 group hover:scale-[1.02] transition-transform duration-500">
            <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-900">
              <img
                src={profileImageUrl}
                alt="Profile Photo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
