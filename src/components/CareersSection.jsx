import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { careerOpenings } from '../data/careersData';

export default function CareersSection({ onApplyJob }) {
  const [selectedDept, setSelectedDept] = useState('All');

  const departments = ['All', 'Compositing', 'Roto & Prep', 'Tracking & 3D', 'AI & Research'];

  const filteredJobs = selectedDept === 'All'
    ? careerOpenings
    : careerOpenings.filter(j => j.department === selectedDept);

  return (
    <section id="careers" className="py-12 lg:py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 text-xs font-mono font-bold mb-3 backdrop-blur-md">
            <Briefcase className="w-3.5 h-3.5" />
            <span>JOIN SUNRISE VFX STUDIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white mb-4 drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
            Careers & <span className="text-gradient-indigo">Open Positions</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-200 drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
            Work on the world’s most exciting films, commercials, and neural AI visual effects. Remote-first flexibility, world-class compute rigs, and competitive compensation.
          </p>
        </div>

        {/* Department Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider transition-all border ${
                selectedDept === dept
                  ? 'bg-indigoAcc-600 text-white border-indigoAcc-600 shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="glass-panel-light rounded-3xl p-6 sm:p-8 border border-slate-200 hover:border-indigoAcc-400 transition-all duration-300 flex flex-col justify-between group shadow-luxury"
            >
              <div>
                {/* Meta Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-indigoAcc-50 text-indigoAcc-700 border border-indigoAcc-200">
                    {job.department}
                  </span>
                  <span className="text-xs font-mono text-amber-700 font-extrabold bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                    {job.salary}
                  </span>
                </div>

                {/* Job Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigoAcc-600 transition-colors font-display mb-2">
                  {job.title}
                </h3>

                {/* Location & Experience tags */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-mono font-semibold mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-azure-600" />
                    <span>{job.location}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>{job.type} ({job.experience})</span>
                  </span>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {job.summary}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-100">
                  <div className="text-[10px] font-mono uppercase text-slate-400 font-bold mb-2">
                    KEY FOCUS AREAS:
                  </div>
                  {job.responsibilities.slice(0, 2).map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigoAcc-600 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono font-medium">
                  Full Benefits + Rig Included
                </span>

                <button
                  onClick={() => onApplyJob(job)}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-indigoAcc-600 transition-all shadow-sm flex items-center gap-2"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
