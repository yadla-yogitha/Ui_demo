import React, { useState } from 'react';
import { 
  Users, 
  Sparkles, 
  Film 
} from 'lucide-react';
import { teamMembers } from '../data/teamData';

export default function TeamSection() {
  const [selectedDept, setSelectedDept] = useState('All');

  const departments = [
    'All',
    'Executive & Supervision',
    'Compositing',
    'Tracking & 3D',
    'Roto & Prep',
    'AI & Research'
  ];

  const filteredTeam = selectedDept === 'All'
    ? teamMembers
    : teamMembers.filter(m => m.department === selectedDept);

  return (
    <section id="team" className="py-12 lg:py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-mono font-bold mb-3 backdrop-blur-md">
            <Users className="w-3.5 h-3.5" />
            <span>STUDIO LEADERSHIP & SUPERVISORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white mb-4 drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
            Meet the <span className="text-gradient-gold">Sunrise VFX Artists</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-200 drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
            A world-class collective of VFX supervisors, compositing leads, matchmove technical directors, and AI researchers with credits on global cinema landmarks.
          </p>
        </div>

        {/* Department Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider transition-all border ${
                selectedDept === dept
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {filteredTeam.map((member) => (
            <div
              key={member.id}
              className="glass-panel-light rounded-3xl p-5 border border-slate-200 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group shadow-luxury hover:-translate-y-1.5"
            >
              <div>
                {/* Photo */}
                <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-4 bg-slate-100 border border-slate-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute bottom-2.5 left-2.5">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white/95 text-slate-900 shadow-sm">
                      {member.badge}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors font-display">
                  {member.name}
                </h3>
                <div className="text-xs font-bold text-azure-700 mb-1">
                  {member.role}
                </div>
                <div className="text-[11px] font-mono text-slate-500 font-bold mb-3">
                  Experience: {member.experience}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {member.bio}
                </p>
              </div>

              {/* Notable Credits */}
              <div className="pt-3 border-t border-slate-100">
                <div className="text-[10px] font-mono uppercase text-slate-400 font-bold mb-1.5 flex items-center gap-1">
                  <Film className="w-3 h-3 text-amber-600" />
                  <span>NOTABLE CREDITS</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {member.credits.slice(0, 2).map((cr, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700 font-semibold"
                    >
                      {cr}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
