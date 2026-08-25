import React from 'react';
import { 
  ChevronRight, 
  Play, 
  Layers, 
  Cpu, 
  Compass, 
  Scissors, 
  Wand2,
  ShieldCheck,
  Film
} from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Hero({ 
  onExploreServices, 
  onSelectService, 
  onOpenShowreel 
}) {
  const coreDisciplines = [
    { id: 'prep', label: '1. Prep', full: 'Rig & Wire Paint-Out', icon: Wand2, dotColor: 'bg-amber-400', badgeClass: 'hover:border-amber-400/80 hover:bg-amber-500/15' },
    { id: 'roto', label: '2. Roto', full: 'Precision Mattes', icon: Scissors, dotColor: 'bg-sky-400', badgeClass: 'hover:border-sky-400/80 hover:bg-sky-500/15' },
    { id: 'comp', label: '3. Comp', full: 'Deep Compositing', icon: Layers, dotColor: 'bg-indigo-400', badgeClass: 'hover:border-indigo-400/80 hover:bg-indigo-500/15' },
    { id: 'matchmove', label: '4. Matchmove', full: '3D Camera Tracking', icon: Compass, dotColor: 'bg-emerald-400', badgeClass: 'hover:border-emerald-400/80 hover:bg-emerald-500/15' },
    { id: 'ai-videos', label: '5. AI videos', full: 'Neural Generative VFX', icon: Cpu, dotColor: 'bg-purple-400', badgeClass: 'hover:border-purple-400/80 hover:bg-purple-500/15' },
  ];

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Direct, Clean, High-End Studio Layout (NO awkward box container) */}
          <div className="lg:col-span-8 xl:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* 1. Transparent 3D Gold Logo Emblem */}
            <div className="mb-4 sm:mb-6 group">
              <img 
                src={logoImg} 
                alt="SUNRISE VFX STUDIO" 
                className="w-56 sm:w-68 md:w-80 h-auto object-contain filter drop-shadow-[0_12px_30px_rgba(245,158,11,0.3)] transition-transform duration-500 group-hover:scale-102"
              />
            </div>

            {/* 2. Slogan Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight text-white uppercase mb-4 font-display leading-[1.08] drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
              Bringing Imagination <br className="hidden sm:block" />
              <span className="text-gradient-gold">To Reality</span>
            </h1>

            {/* 3. Subtitle Description */}
            <p className="max-w-xl text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] text-balance">
              We are a creative VFX studio delivering exceptional visual effects for films, commercials and digital content with passion, precision and perfection.
            </p>

            {/* 4. Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onExploreServices}
                className="px-8 py-3.5 text-sm font-extrabold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 rounded-xl transition-all shadow-[0_4px_30px_rgba(245,158,11,0.55)] flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>GET STARTED</span>
                <ChevronRight className="w-4 h-4 text-slate-950 stroke-[3]" />
              </button>

              <button
                onClick={onOpenShowreel}
                className="px-6 py-3.5 text-sm font-bold tracking-wider text-white bg-slate-950/60 hover:bg-slate-900/90 border border-white/25 hover:border-amber-400/80 rounded-xl backdrop-blur-xl transition-all flex items-center gap-2.5 shadow-lg transform hover:-translate-y-0.5"
              >
                <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                <span>WATCH 2026 REEL</span>
              </button>
            </div>

            {/* 5. 5 Core Disciplines Navigation Strip */}
            <div className="w-full max-w-2xl">
              <div className="text-[11px] font-mono uppercase tracking-widest text-slate-300 mb-3 flex items-center gap-2 font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                <span className="w-4 h-[1px] bg-amber-400/60" />
                <span className="text-amber-300">EXPLORE 5 CORE DISCIPLINES</span>
                <span className="w-12 h-[1px] bg-white/20" />
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {coreDisciplines.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => onSelectService(item.id)}
                      className={`px-3.5 py-2 rounded-xl bg-slate-950/60 backdrop-blur-xl border border-white/15 text-xs font-bold text-slate-200 transition-all duration-300 flex items-center gap-2 shadow-md hover:scale-105 hover:text-white ${item.badgeClass}`}
                    >
                      <span className={`w-2 h-2 rounded-full ${item.dotColor}`} />
                      <Icon className="w-3.5 h-3.5 text-slate-300" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Left Open for Full-Screen Video Background Action + Subtle Studio Badge */}
          <div className="lg:col-span-4 xl:col-span-5 pointer-events-none min-h-[150px] lg:min-h-[500px] flex flex-col justify-end items-end p-4 space-y-3">
            
            {/* Live Master Pipeline Pill */}
            <div className="px-4 py-2 rounded-2xl bg-slate-950/60 backdrop-blur-xl border border-white/20 text-xs font-mono text-slate-200 flex items-center gap-2.5 shadow-2xl">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold text-white tracking-wide">4K DCI • ACEScg Cinema Master</span>
            </div>

            {/* Security Badge */}
            <div className="px-3.5 py-1.5 rounded-xl bg-slate-950/40 backdrop-blur-md border border-white/10 text-[11px] font-mono text-slate-300 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>TPN & MPA Gold Certified Studio</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
