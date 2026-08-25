import React from 'react';
import { 
  X, 
  User, 
  Sparkles, 
  ArrowLeft 
} from 'lucide-react';

export default function BlogDetailModal({ article, isOpen, onClose }) {
  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-3xl bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto flex flex-col">
        
        {/* Glow Header Accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl bg-azure-500" />

        {/* Modal Top */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-azure-50 text-azure-800 border border-azure-200">
              {article.category}
            </span>
            <span className="text-xs font-mono text-slate-500 font-medium">
              {article.readTime}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Article Body */}
        <div className="py-6 space-y-6 flex-1">
          
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display leading-tight">
            {article.title}
          </h1>

          {/* Author Meta */}
          <div className="flex items-center gap-3 py-3 border-y border-slate-100">
            <div className="w-10 h-10 rounded-full bg-azure-50 border border-azure-200 flex items-center justify-center text-azure-700 font-bold">
              <User className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">{article.author}</div>
              <div className="text-xs text-slate-500 font-mono font-medium">{article.role} • Published {article.date}</div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {article.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Key Takeaways Box */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-azure-200 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-azure-800 font-bold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-azure-600" />
              <span>SUNRISE VFX PIPELINE TAKEAWAY</span>
            </h4>
            <p className="text-xs text-slate-700 font-medium">
              Integrating automated color management, temporal AI consistency, and deep multi-pass rendering allows our artists to iterate faster and deliver hero quality with zero compromise.
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between shrink-0">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </button>
        </div>

      </div>
    </div>
  );
}
