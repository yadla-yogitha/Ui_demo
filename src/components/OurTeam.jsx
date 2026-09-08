import React from 'react';
import { Users, Film } from 'lucide-react';
import { teamMembers } from '../data/studioData';

export default function OurTeam() {
  return (
    <section id="team" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase mb-4">
          <Users className="w-3.5 h-3.5 text-amber-400" />
          <span>Leadership & Artists</span>
        </div>
        <h2 className="font-cinzel font-black text-3xl sm:text-4xl md:text-5xl text-gold-gradient uppercase tracking-wider mb-4">
          Meet Our VFX Supervisors
        </h2>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Our global team brings together veterans from top Academy Award-winning visual effects facilities alongside pioneering AI neural researchers.
        </p>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-amber-500/50 transition-all duration-500 p-6 flex flex-col justify-between shadow-xl hover:shadow-[0_15px_40px_rgba(234,179,8,0.15)] hover:-translate-y-1"
          >
            <div>
              {/* Avatar & Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-amber-500/40 shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="font-cinzel font-bold text-lg text-white group-hover:text-gold-bright transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-amber-400 font-medium">{member.role}</p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                {member.bio}
              </p>
            </div>

            {/* Notable Credits */}
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-gray-400 mb-1">
                <Film className="w-3.5 h-3.5 text-amber-400/80" />
                <span className="uppercase tracking-wider">Notable Credits:</span>
              </div>
              <p className="text-xs text-amber-200/90 font-medium font-mono">
                {member.credits}
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
