import React, { useState } from 'react';
import { Play, Film, Sparkles, Star } from 'lucide-react';
import { portfolioProjects, studioReels, mainShowreel } from '../data/studioData';
import VideoPlayerModal from './VideoPlayerModal';

const CATEGORIES = ['All', 'Master Reel', 'Prep', 'Roto', 'Comp', 'Matchmove', 'AI Videos'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(p => {
        if (selectedCategory === 'Master Reel') {
          return p.id === 'p0' || p.category === 'Master Reel' || p.tags.includes('Main Showreel');
        }
        return p.category.toLowerCase() === selectedCategory.toLowerCase();
      });

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
          Explore our visual effects work spanning feature films, streaming series, and cinematic commercials. Click the master showreel or any project to watch its full video breakdown.
        </p>
      </div>

      {/* Master Showreel Cinema Spotlight Banner */}
      <div 
        onClick={() => setActiveProjectModal(mainShowreel)}
        className="group relative rounded-3xl overflow-hidden glass-panel border border-amber-500/40 hover:border-amber-400 p-6 sm:p-8 mb-14 cursor-pointer transition-all duration-500 shadow-[0_20px_50px_rgba(234,179,8,0.15)] hover:shadow-[0_25px_60px_rgba(234,179,8,0.3)] bg-gradient-to-r from-[#0c0c16] via-[#121220] to-[#0c0c16]"
      >
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-left">
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="px-3 py-1 rounded-full bg-amber-500 text-black text-xs font-mono font-black tracking-wider uppercase flex items-center gap-1 shadow-[0_0_15px_rgba(234,179,8,0.6)]">
                <Star className="w-3.5 h-3.5 fill-black" />
                <span>OFFICIAL STUDIO SHOWREEL</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-black/60 border border-amber-500/30 text-amber-300 font-mono text-xs">
                VFX_REEL_SR_sunrise.VFX
              </span>
            </div>

            <h3 className="font-cinzel font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white group-hover:text-gold-bright transition-colors mb-3">
              Sunrise VFX Studio Master Showreel
            </h3>

            <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed mb-4">
              Watch our flagship reel showcasing high-end visual effects across Prep, Rotoscopy, Deep Compositing, Matchmove, and AI Video workflows delivered for world-class entertainment productions.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-400">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-amber-300">
                ⭐ 4K Ultra-HD DCI
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                🎞️ ACEScg Color Space
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                ⚡ 5 Core VFX Disciplines
              </span>
            </div>
          </div>

          {/* Action Button & Thumbnail Preview */}
          <div className="relative shrink-0 flex items-center justify-center">
            <div className="relative w-72 sm:w-80 h-44 sm:h-48 rounded-2xl overflow-hidden border border-amber-500/40 shadow-2xl group-hover:scale-105 transition-transform duration-500">
              <img
                src="/breakdowns/paint.png"
                alt="Sunrise VFX Main Showreel"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <div className="w-16 h-16 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-[0_0_35px_rgba(234,179,8,0.9)] transform group-hover:scale-115 transition-transform">
                  <Play className="w-7 h-7 fill-black ml-1" />
                </div>
                <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[11px] font-bold text-amber-300 border border-amber-500/40 uppercase tracking-widest font-mono">
                  PLAY MAIN SHOWREEL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={'px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 border cursor-pointer ' + (
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
        <VideoPlayerModal 
          initialVideo={activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
        />
      )}

    </section>
  );
}
