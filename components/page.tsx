"use client";

import React, { useState } from "react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "Workspace Setup",
    category: "Life",
    imageUrl: "https://uploads.onecompiler.io/43zvj4fst/1790596778135/841bf4d4-f1bf-451c-8992-657732bf2873.jpg", 
  },
  {
    id: 2,
    title: "UI Design Concept",
    category: "Projects",
    imageUrl: "https://uploads.onecompiler.io/43zvj4fst/1790596770551/d12da043-c219-406a-9b3e-819d0b89ced0.jpg",
  },
  {
    id: 3,
    title: "Hangouts with friends",
    category: "With my guy",
    imageUrl: "https://uploads.onecompiler.io/43zvj4fst/1790597015932/9fca4210-9d1e-40c5-9dd9-7bccdfe12d24.jpg", 
  },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ["All",];

  const filteredImages =
    filter === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === filter);

  return (
    <section className="relative max-w-6xl mx-auto px-6 py-16 overflow-hidden">
      
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

      <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400 border-b border-purple-500/30 pb-3 mb-8 inline-block relative z-10">
        Photo Gallery
      </h2>

      <div className="flex space-x-3 mb-10 overflow-x-auto pb-2 relative z-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
              filter === cat
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/25 scale-[1.02]"
                : "bg-slate-900/70 backdrop-blur-xl text-slate-400 hover:text-white border border-slate-800/80 hover:border-slate-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {filteredImages.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="group relative h-64 cursor-pointer overflow-hidden rounded-2xl bg-slate-900/70 backdrop-blur-xl border border-slate-800/80 hover:border-purple-500/50 shadow-xl shadow-black/40 transition-all duration-300"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-purple-500/20 border border-purple-500/30 text-purple-300 text-[10px] font-semibold mb-1 uppercase tracking-wider">
                  {item.category}
                </span>
                <p className="text-white font-bold text-base">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[85vh] bg-slate-900/90 backdrop-blur-2xl border border-slate-800/90 shadow-2xl rounded-2xl overflow-hidden p-6 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700/50 rounded-full w-9 h-9 flex items-center justify-center font-bold transition shadow-lg"
            >
              ✕
            </button>
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              className="max-h-[70vh] w-auto object-contain rounded-xl shadow-lg"
            />
            <div className="mt-4 text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold mb-1">
                {selectedImage.category}
              </span>
              <h3 className="text-white font-bold text-xl">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
