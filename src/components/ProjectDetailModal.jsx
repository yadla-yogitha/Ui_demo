import React from 'react';
import { 
  X, 
  CheckCircle2 
} from 'lucide-react';

export default function ProjectDetailModal({ project, isOpen, onClose, onOpenQuote }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto flex flex-col">
        
        {/* Top Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-500 font-semibold">
                {project.year} • {project.client}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-6 flex-1">
          
          {/* Main Hero Visual */}
          <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden relative border border-slate-200 bg-slate-900">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-sm sm:text-base font-semibold text-white drop-shadow-md">
                {project.tagline}
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-lg font-bold text-amber-700 font-mono">{project.shotsDelivered}</div>
              <div className="text-[11px] text-slate-500 font-mono font-medium">Shots Delivered</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-lg font-bold text-azure-700 font-mono">{project.resolution}</div>
              <div className="text-[11px] text-slate-500 font-mono font-medium">Resolution Master</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-lg font-bold text-indigoAcc-700 font-mono">{project.aspectRatio}</div>
              <div className="text-[11px] text-slate-500 font-mono font-medium">Aspect Ratio</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-lg font-bold text-emerald-700 font-mono">{project.stats?.turnaroundWeeks} Wks</div>
              <div className="text-[11px] text-slate-500 font-mono font-medium">Total Turnaround</div>
            </div>
          </div>

          {/* Narrative Breakdown */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase text-amber-800 tracking-wider">
              PROJECT BREAKDOWN & SCOPE
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Disciplines Applied */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase text-azure-800 tracking-wider mb-2">
              DISCIPLINES & TECHNICAL HIGHLIGHTS
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.services.map((srv, idx) => (
                <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  <span>{srv}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-amber-600 rounded-xl transition-all shadow-md"
          >
            Inquire Similar Project
          </button>
        </div>

      </div>
    </div>
  );
}
