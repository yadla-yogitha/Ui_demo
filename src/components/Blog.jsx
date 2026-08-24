import React, { useState } from 'react';
import { BookOpen, Clock, User, X } from 'lucide-react';
import { blogPosts } from '../data/studioData';

export default function Blog() {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <section id="blog" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase mb-4">
          <BookOpen className="w-3.5 h-3.5 text-amber-400" />
          <span>VFX Insights & Tech Articles</span>
        </div>
        <h2 className="font-cinzel font-black text-3xl sm:text-4xl md:text-5xl text-gold-gradient uppercase tracking-wider mb-4">
          The Sunrise VFX Journal
        </h2>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Deep dives into visual effects craft, Nuke compositing pipelines, sub-pixel rotoscope workflows, and generative AI research.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            onClick={() => setActiveArticle(post)}
            className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-xl hover:shadow-[0_15px_40px_rgba(234,179,8,0.2)] hover:-translate-y-1"
          >
            <div>
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-black">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-transparent to-transparent" />
                
                <span className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-amber-500/40 text-amber-300 text-[11px] font-mono font-bold">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-[11px] font-mono text-gray-400 mb-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-gold-bright transition-colors mb-2 leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
                  {post.snippet}
                </p>
              </div>
            </div>

            {/* Author Footer */}
            <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/5 text-xs text-gray-400">
              <div className="flex items-center gap-1.5 truncate">
                <User className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="truncate">{post.author}</span>
              </div>
              <span className="text-amber-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Read →
              </span>
            </div>

          </article>
        ))}
      </div>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl glass-panel rounded-3xl border border-amber-500/40 p-6 sm:p-8 bg-[#09090f] shadow-2xl max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                <span className="px-2.5 py-0.5 rounded bg-amber-500/20 border border-amber-500/30 font-bold">
                  {activeArticle.category}
                </span>
                <span>{activeArticle.date} • {activeArticle.readTime}</span>
              </div>

              <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white">
                {activeArticle.title}
              </h2>

              <p className="text-xs text-amber-300/80 font-mono">
                By {activeArticle.author}
              </p>

              <div className="relative h-60 rounded-2xl overflow-hidden my-4">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-xs sm:text-sm text-gray-300 leading-relaxed space-y-4 font-light">
                <p>
                  Visual effects post-production requires continuous technological innovation. In this technical breakdown, we examine how state-of-the-art multi-channel EXRs combined with proprietary neural inpainting transforms the classic 5-stage VFX pipeline (Prep, Roto, Comp, Matchmove, AI).
                </p>
                <p>
                  By treating machine learning inference not as a replacement for artists, but as an interactive node in the Foundry Nuke graph, artists can reduce tedious cleanup tasks by up to 70% while focusing maximum creative energy on cinematic lighting, deep compositing, and storytelling.
                </p>
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs">
                  💡 <strong>Key Takeaway:</strong> Sub-pixel rotoscope precision combined with 32-bit linear floating point color spaces remains the backbone of cinematic realism.
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-6 py-2.5 rounded-xl btn-gold-primary text-black font-bold text-xs uppercase tracking-wider"
                >
                  Close Article
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
