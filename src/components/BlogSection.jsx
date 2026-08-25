import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  User, 
  ArrowRight, 
  Search 
} from 'lucide-react';
import { blogArticles } from '../data/blogData';

export default function BlogSection({ onSelectArticle }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = blogArticles.filter(art => 
    art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    art.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    art.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="blog" className="py-12 lg:py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-mono font-bold mb-3 backdrop-blur-md">
              <BookOpen className="w-3.5 h-3.5 text-sky-400" />
              <span>VFX INSIGHTS & R&D LAB</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white mb-2 drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
              Industry <span className="text-gradient-azure">Insights & Case Studies</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-200 max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
              Technical breakdowns, workflow innovations, and deep-dives into modern Nuke compositing, tracking, and generative AI research.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles or tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-azure-500 shadow-sm"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="glass-panel-light rounded-3xl overflow-hidden border border-slate-200 hover:border-azure-400 transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-luxury hover:-translate-y-1.5"
            >
              <div>
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden bg-slate-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-white/95 text-azure-700 shadow-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-mono font-semibold mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-600" />
                      <span>{article.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-azure-600" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-azure-600 transition-colors font-display mb-3 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Author Footer */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-azure-50 border border-azure-200 flex items-center justify-center text-azure-700 font-bold">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">{article.author}</div>
                    <div className="text-[10px] text-slate-500 font-mono">{article.role}</div>
                  </div>
                </div>

                <div className="text-xs font-bold text-azure-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
