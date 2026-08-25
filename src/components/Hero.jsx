import React from 'react';
import { 
  ChevronRight, 
  Play, 
  Layers, 
  Cpu, 
  Compass, 
  Scissors, 
  Wand2 
} from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Hero({ 
  onExploreServices, 
  onSelectService, 
  onOpenShowreel 
}) {
  const coreDisciplines = [
    { id: 'prep', label: '1. Prep', icon: Wand2, dotColor: 'bg-amber-400', badgeClass: 'hover:border-amber-400 hover:bg-amber-500/20' },
    { id: 'roto', label: '2. Roto', icon: Scissors, dotColor: 'bg-sky-400', badgeClass: 'hover:border-sky-400 hover:bg-sky-500/20' },
    { id: 'comp', label: '3. Comp', icon: Layers, dotColor: 'bg-indigo-400', badgeClass: 'hover:border-indigo-400 hover:bg-indigo-500/20' },
    { id: 'matchmove', label: '4. Matchmove', icon: Compass, dotColor: 'bg-emerald-400', badgeClass: 'hover:border-emerald-400 hover:bg-emerald-500/20' },
    { id: 'ai-videos', label: '5. AI videos', icon: Cpu, dotColor: 'bg-purple-400', badgeClass: 'hover:border-purple-400 hover:bg-purple-500/20' },
  ];

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-start py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="max-w-2xl flex flex-col items-start text-left z-10">
          
          {/* 1. Transparent 3D Gold Logo (Sized to fit perfectly above fold) */}
          <div className="mb-2 sm:mb-3 group">
            <img 
              src={logoImg} 
              alt="SUNRISE VFX STUDIO" 
              className="w-44 sm:w-52 md:w-60 h-auto object-contain filter drop-shadow-[0_8px_25px_rgba(245,158,11,0.35)] transition-transform duration-300 group-hover:scale-102"
            />
          </div>

          {/* 2. Slogan Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white uppercase mb-2 font-display leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
            Bringing Imagination <span className="text-amber-400">To Reality</span>
          </h1>

          {/* 3. Subtitle Description */}
          <p className="max-w-lg text-xs sm:text-sm md:text-base text-slate-100 leading-relaxed font-normal mb-4 sm:mb-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            We are a creative VFX studio delivering exceptional visual effects for films, commercials and digital content with passion, precision and perfection.
          </p>

          {/* 4. Action Buttons: Prominently and Clearly Visible */}
          <div className="flex flex-wrap items-center gap-3 mb-4 sm:mb-5">
            <button
              onClick={onExploreServices}
              className="px-7 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 rounded-xl transition-all shadow-[0_4px_25px_rgba(245,158,11,0.55)] flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <span>GET STARTED</span>
              <ChevronRight className="w-4 h-4 text-slate-950 stroke-[3]" />
            </button>

            <button
              onClick={onOpenShowreel}
              className="px-5 py-3 text-xs sm:text-sm font-bold tracking-wider text-white bg-slate-950/70 hover:bg-slate-900 border border-white/30 hover:border-amber-400 rounded-xl backdrop-blur-xl transition-all flex items-center gap-2.5 shadow-lg transform hover:-translate-y-0.5"
            >
              <div className="w-5 h-5 rounded-full bg-amber-500/25 text-amber-300 flex items-center justify-center">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
              <span>WATCH 2026 REEL</span>
            </button>
          </div>

          {/* 5. 5 Core Disciplines Fast Nav Chips */}
          <div className="w-full max-w-xl">
            <div className="text-[10px] font-mono uppercase tracking-widest text-slate-300 mb-1.5 flex items-center gap-2 font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              <span className="w-3 h-[1px] bg-amber-400/80" />
              <span className="text-amber-300">5 CORE DISCIPLINES</span>
              <span className="w-6 h-[1px] bg-white/30" />
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {coreDisciplines.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => onSelectService(item.id)}
                    className={`px-3 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/20 text-xs font-bold text-slate-100 transition-all duration-200 flex items-center gap-1.5 shadow-md hover:scale-105 hover:text-white ${item.badgeClass}`}
                  >
                    <span className={`w-2 h-2 rounded-full ${item.dotColor}`} />
                    <Icon className="w-3 h-3 text-slate-300" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
