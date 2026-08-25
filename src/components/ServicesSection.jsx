import React from 'react';
import { 
  Sparkles, 
  ArrowUpRight, 
  Clock, 
  Layers, 
  Wand2, 
  Scissors, 
  Compass, 
  Cpu, 
  CheckCircle2, 
  FileCode2,
  Calculator
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

const iconMap = {
  prep: Wand2,
  roto: Scissors,
  comp: Layers,
  matchmove: Compass,
  'ai-videos': Cpu
};

const serviceTheme = {
  prep: {
    badge: 'bg-amber-50 text-amber-700 border-amber-200',
    border: 'hover:border-amber-400 hover:shadow-luxury-hover',
    iconBg: 'bg-amber-100 text-amber-600',
    checkColor: 'text-amber-600'
  },
  roto: {
    badge: 'bg-azure-50 text-azure-700 border-azure-200',
    border: 'hover:border-azure-400 hover:shadow-luxury-hover',
    iconBg: 'bg-azure-100 text-azure-600',
    checkColor: 'text-azure-600'
  },
  comp: {
    badge: 'bg-indigoAcc-50 text-indigoAcc-700 border-indigoAcc-200',
    border: 'hover:border-indigoAcc-400 hover:shadow-luxury-hover',
    iconBg: 'bg-indigoAcc-100 text-indigoAcc-600',
    checkColor: 'text-indigoAcc-600'
  },
  matchmove: {
    badge: 'bg-emeraldAcc-50 text-emeraldAcc-700 border-emeraldAcc-200',
    border: 'hover:border-emeraldAcc-400 hover:shadow-luxury-hover',
    iconBg: 'bg-emeraldAcc-100 text-emeraldAcc-600',
    checkColor: 'text-emeraldAcc-600'
  },
  'ai-videos': {
    badge: 'bg-amethystAcc-50 text-amethystAcc-700 border-amethystAcc-200',
    border: 'hover:border-amethystAcc-400 hover:shadow-luxury-hover',
    iconBg: 'bg-amethystAcc-100 text-amethystAcc-600',
    checkColor: 'text-amethystAcc-600'
  }
};

export default function ServicesSection({ onSelectService, onOpenQuoteWithService }) {
  return (
    <section id="services" className="py-12 lg:py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-mono font-bold mb-3 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>FULL-SPECTRUM VFX DISCIPLINES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white mb-4 drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
            Our 5 Specialized <span className="text-gradient-gold">VFX Services</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-200 drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
            Engineered for Hollywood feature films, high-concept streaming series, and commercial productions with round-the-clock delivery.
          </p>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.id] || Sparkles;
            const theme = serviceTheme[service.id] || serviceTheme.prep;
            const isWide = index === 4;

            return (
              <div
                key={service.id}
                className={`glass-panel-light rounded-3xl p-6 sm:p-8 border border-slate-200 ${theme.border} transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Card Top Meta */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl ${theme.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-black font-mono text-slate-300 group-hover:text-slate-500 transition-colors">
                        {service.number}
                      </span>
                    </div>

                    <span className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full border ${theme.badge}`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-1 font-display">
                    {service.title}
                  </h3>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                    {service.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    {service.highlights.slice(0, 4).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${theme.checkColor}`} />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tool Stack */}
                  <div className="mb-6 pt-4 border-t border-slate-100">
                    <div className="text-[10px] font-mono uppercase text-slate-400 mb-2 flex items-center gap-1.5 font-bold">
                      <FileCode2 className="w-3 h-3" />
                      <span>PRIMARY TOOLSET</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.software.map((sw, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700 font-medium"
                        >
                          {sw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 font-mono font-medium">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>{service.turnaround}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenQuoteWithService(service.id)}
                      className="p-2 rounded-xl bg-slate-100 hover:bg-amber-50 text-slate-600 hover:text-amber-700 border border-slate-200 text-xs transition-colors"
                      title="Quote This Service"
                    >
                      <Calculator className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onSelectService(service.id)}
                      className="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-amber-600 text-white flex items-center gap-1.5 transition-all shadow-sm group/btn"
                    >
                      <span>Explore Specs</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
