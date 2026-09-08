import React, { useState } from 'react';
import { Play, Film, X, ArrowRight } from 'lucide-react';
import { portfolioProjects, studioReels } from '../data/studioData';

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
          Explore our visual effects work spanning feature films, streaming series, and cinematic commercials. Click any project to watch its video breakdown.
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
                  Watch Video →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Real Video Reel Modal Player */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl glass-panel rounded-3xl overflow-hidden border border-amber-500/50 p-4 sm:p-7 shadow-2xl bg-[#08080f] max-h-[92vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 gap-2">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 font-mono text-xs font-bold border border-amber-500/40">
                  {activeProjectModal.category} REEL
                </span>
                <h3 className="font-cinzel text-base sm:text-xl font-bold text-white truncate">
                  {activeProjectModal.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Reel Switcher Bar inside Modal */}
            <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-2 scrollbar-none">
              <span className="text-xs font-mono text-gray-400 shrink-0">Switch Reel:</span>
              {studioReels.map((r) => {
                const isCurrent = activeProjectModal.videoUrl === r.videoUrl;
                return (
                  <button
                    key={r.id}
                    onClick={() => {
                      setActiveProjectModal({
                        title: r.name,
                        category: r.category,
                        videoUrl: r.videoUrl,
                        description: r.desc,
                        tags: [r.category, 'Studio Reel', '4K'],
                        client: 'Sunrise VFX Studio',
                        year: '2025'
                      });
                    }}
                    className={'px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ' + (
                      isCurrent
                        ? 'bg-amber-500 text-black border-amber-400 font-bold'
                        : 'bg-black/50 text-gray-300 border-white/10 hover:border-amber-400/50'
                    )}
                  >
                    {r.name}
                  </button>
                );
              })}
            </div>

            {/* HTML5 Real Video Player */}
            <div className="relative rounded-2xl overflow-hidden bg-black border border-white/10 aspect-video shadow-2xl flex-1 flex items-center justify-center">
              <video
                key={activeProjectModal.videoUrl}
                src={activeProjectModal.videoUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain bg-black"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Footer Information & Quote CTA */}
            <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
              <p className="text-gray-300 max-w-lg leading-relaxed">
                {activeProjectModal.description}
              </p>

              <button
                onClick={() => {
                  setActiveProjectModal(null);
                  onOpenQuote();
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl btn-gold-primary text-black font-bold text-xs uppercase tracking-wider shrink-0"
              >
                <span>Request VFX Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
