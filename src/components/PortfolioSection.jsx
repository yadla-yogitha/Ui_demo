import React, { useState } from 'react';
import { 
  Sparkles, 
  Film, 
  Play, 
  ArrowUpRight, 
  Eye 
} from 'lucide-react';
import { portfolioCategories, portfolioProjects } from '../data/portfolioData';

export default function PortfolioSection({ onOpenShowreel, onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-12 lg:py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-mono font-bold mb-3 backdrop-blur-md">
              <Film className="w-3.5 h-3.5 text-amber-400" />
              <span>SHOWCASE & WORK REELS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white mb-2 drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
              Featured <span className="text-gradient-gold">VFX Productions</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-200 max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
              Explore our award-winning visual effects sequences for Hollywood blockbusters, global automotive commercials, and neural AI productions.
            </p>
          </div>

          {/* Watch Full Showreel Button */}
          <button
            onClick={onOpenShowreel}
            className="shrink-0 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-amber-600 transition-all shadow-md flex items-center gap-2.5"
          >
            <Play className="w-4 h-4 fill-current ml-0.5" />
            <span>Watch 2026 Showreel</span>
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider transition-all border ${
                activeCategory === cat
                  ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="glass-panel-light rounded-3xl overflow-hidden border border-slate-200 hover:border-amber-400 transition-all duration-300 flex flex-col group cursor-pointer shadow-luxury hover:-translate-y-1.5"
            >
              {/* Thumbnail Container */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Category & Resolution Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-white/90 text-slate-800 backdrop-blur-md shadow-sm">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-900/80 text-azure-300 backdrop-blur-md">
                    {project.resolution}
                  </span>
                </div>

                {/* Hover Play/View Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-lg scale-75 group-hover:scale-100 transition-transform">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 font-bold mb-1">
                    <span>{project.client}</span>
                    <span className="font-mono">{project.year}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors font-display mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {project.tagline}
                  </p>
                </div>

                <div>
                  {/* Service Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 mb-4">
                    {project.services.map((srv, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700 font-bold"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>

                  {/* Footer Meta */}
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-500">
                    <span>{project.shotsDelivered} Shots Delivered</span>
                    <span className="text-amber-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Breakdown</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
