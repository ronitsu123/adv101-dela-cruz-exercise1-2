"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <header className="bg-[#0b0f19] border-b border-slate-800 text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-xl font-bold tracking-wider hover:text-purple-400 transition"
        >
          Welcome!<span className="text-purple-500"></span>
        </Link>
        <nav>
          <ul className="flex space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-all ${
                      isActive
                        ? "text-purple-400 border-b-2 border-purple-500 pb-1"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
