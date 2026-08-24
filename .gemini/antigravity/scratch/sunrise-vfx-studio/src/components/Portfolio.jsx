import React, { useState } from 'react';
import { Play, Film, X, ArrowRight } from 'lucide-react';
import { portfolioProjects } from '../data/studioData';

const CATEGORIES = ['All', 'Prep', 'Roto', 'Comp', 'Matchmove', 'AI Videos'];

export default function Portfolio({ onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="portfolio" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase mb-4">
          <Film className="w-3.5 h-3.5 text-amber-400" />
          <span>Featured Work & Showreels</span>
        </div>
        <h2 className="font-cinzel font-black text-3xl sm:text-4xl md:text-5xl text-gold-gradient uppercase tracking-wider mb-4">
          Visual Effects Portfolio
        </h2>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Explore our award-winning visual effects work spanning Hollywood features, high-budget streaming series, and cinematic commercials.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={'px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 border ' + (
                isSelected
                  ? 'bg-amber-500 text-black font-bold border-amber-400 shadow-[0_0_20px_rgba(234,179,8,0.4)]'
                  : 'glass-panel text-gray-300 border-white/10 hover:border-amber-500/40 hover:text-white'
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveProjectModal(project)}
            className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-amber-500/50 transition-all duration-500 cursor-pointer flex flex-col shadow-xl hover:shadow-[0_15px_40px_rgba(234,179,8,0.2)] hover:-translate-y-1.5"
          >
            {/* Thumbnail Box */}
            <div className="relative h-60 w-full overflow-hidden bg-black">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-black/30 to-transparent" />

              {/* Category & Shots Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-amber-500/40 text-amber-300 font-mono text-[11px] font-bold">
                  {project.category}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-gray-300 font-mono text-[11px]">
                  {project.shotsCount}
                </span>
              </div>

              {/* Center Play Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.9)] transform group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-black ml-1" />
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                  <span>{project.client}</span>
                  <span className="font-mono text-amber-400/80">{project.year}</span>
                </div>
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white group-hover:text-gold-bright transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Tags & Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-gray-400 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Details →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal Preview */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl glass-panel rounded-3xl overflow-hidden border border-amber-500/40 p-6 sm:p-8 shadow-2xl bg-[#0a0a10]">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-black">
                <img
                  src={activeProjectModal.thumbnail}
                  alt={activeProjectModal.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 rounded-full bg-amber-400 text-black flex items-center justify-center mx-auto mb-3 shadow-[0_0_30px_rgba(234,179,8,0.8)]">
                      <Play className="w-7 h-7 fill-black ml-1" />
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest">
                      Simulated 4K VFX Breakdown Reel
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 font-mono text-xs font-bold border border-amber-500/30">
                    {activeProjectModal.category}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    Client: {activeProjectModal.client} • {activeProjectModal.shotsCount}
                  </span>
                </div>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white">
                  {activeProjectModal.title}
                </h3>
                <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                  {activeProjectModal.description}
                </p>
              </div>

              {/* Tags & CTA */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setActiveProjectModal(null);
                    onOpenQuote();
                  }}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl btn-gold-primary text-black font-bold text-xs uppercase tracking-wider"
                >
                  <span>Request Similar VFX Shot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
