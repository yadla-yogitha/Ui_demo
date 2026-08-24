import React, { useState } from 'react';
import { Sparkles, CheckCircle, ArrowRight, Layers, Film, Scissors, Cpu, Camera, Wrench, Shield, Clock } from 'lucide-react';
import { servicesData } from '../data/studioData';
import BeforeAfterSlider from './BeforeAfterSlider';

const SERVICE_ICONS = {
  prep: Wrench,
  roto: Scissors,
  comp: Layers,
  matchmove: Camera,
  'ai-videos': Cpu,
};

export default function Services({ selectedServiceId, onSelectService, onOpenQuoteWithService }) {
  const [activeTab, setActiveTab] = useState(selectedServiceId || 'prep');

  const activeService = servicesData.find(s => s.id === activeTab) || servicesData[0];
  const IconComponent = SERVICE_ICONS[activeService.id] || Sparkles;

  const handleTabChange = (serviceId) => {
    setActiveTab(serviceId);
    if (onSelectService) onSelectService(serviceId);
  };

  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Core VFX Capabilities</span>
        </div>
        <h2 className="font-cinzel font-black text-3xl sm:text-4xl md:text-5xl text-gold-gradient uppercase tracking-wider mb-4">
          Our Specialized VFX Disciplines
        </h2>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          From surgical plate cleanups to complex deep compositing and futuristic generative AI pipelines, our dedicated departments deliver film-grade excellence at global scale.
        </p>
      </div>

      {/* 5 Service Tabs Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-12">
        {servicesData.map((service) => {
          const isSelected = service.id === activeTab;
          const ServiceIcon = SERVICE_ICONS[service.id] || Sparkles;
          return (
            <button
              key={service.id}
              onClick={() => handleTabChange(service.id)}
              className={'relative flex flex-col items-start p-4 rounded-2xl transition-all duration-300 border text-left ' + (
                isSelected
                  ? 'bg-gradient-to-b from-amber-500/25 to-yellow-500/10 border-amber-400 text-white shadow-[0_0_30px_rgba(234,179,8,0.25)] -translate-y-1'
                  : 'glass-panel text-gray-300 border-white/10 hover:border-amber-500/40 hover:bg-white/5'
              )}
            >
              {/* Active Indicator Top Pill */}
              <div className="flex items-center justify-between w-full mb-3">
                <span className="font-mono text-xs font-bold text-amber-400">
                  {service.number}
                </span>
                <div className={'p-2 rounded-xl ' + (isSelected ? 'bg-amber-400 text-black shadow-md' : 'bg-black/40 text-amber-400')}>
                  <ServiceIcon className="w-4 h-4" />
                </div>
              </div>

              <span className="font-cinzel font-bold text-base sm:text-lg text-white mb-1">
                {service.name}
              </span>
              <span className="text-[11px] text-gray-400 line-clamp-1">
                {service.badge}
              </span>

              {isSelected && (
                <div className="absolute -bottom-[2px] left-6 right-6 h-[3px] bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 rounded-full shadow-[0_0_10px_#facc15]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Service Detailed Showcase Panel */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-amber-500/30 mb-20 shadow-2xl relative overflow-hidden">
        
        {/* Background ambient corner glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          
          {/* Left Column: Description, Features & Capabilities (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-mono font-bold border border-amber-500/40">
                DISCIPLINE {activeService.number}
              </span>
              <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">
                {activeService.badge}
              </span>
            </div>

            <div>
              <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gold-bright mb-3">
                {activeService.title}
              </h3>
              <p className="text-amber-200/90 text-sm sm:text-base font-medium leading-relaxed mb-4">
                {activeService.shortDesc}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {activeService.fullDesc}
              </p>
            </div>

            {/* Checklist of Features */}
            <div>
              <h4 className="text-xs uppercase font-mono tracking-widest text-amber-400/90 font-bold mb-3">
                Key Technical Capabilities & Scope:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeService.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-200">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              <button
                onClick={() => onOpenQuoteWithService(activeService.id)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl btn-gold-primary text-black font-bold text-xs uppercase tracking-wider shadow-lg"
              >
                <span>Request {activeService.name} Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#breakdowns"
                className="flex items-center gap-2 px-5 py-3 rounded-xl glass-panel text-amber-300 hover:text-white border border-amber-500/40 hover:border-amber-400 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <Film className="w-4 h-4" />
                <span>View {activeService.name} Breakdown</span>
              </a>
            </div>

          </div>

          {/* Right Column: Pipeline Specs, Tools & Turnaround (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            
            {/* Tools & Software Card */}
            <div className="p-5 rounded-2xl bg-black/50 border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 mb-3 uppercase tracking-wider">
                <Wrench className="w-4 h-4" />
                <span>Industry Toolchain & Software</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeService.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Pipeline Specs Card */}
            <div className="p-5 rounded-2xl bg-black/50 border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 mb-2 uppercase tracking-wider">
                <Shield className="w-4 h-4" />
                <span>Color Science & Formats</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed font-mono">
                {activeService.specs}
              </p>
            </div>

            {/* Turnaround & SLA Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/15 to-transparent border border-amber-500/30">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 mb-1 uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>SLA & Delivery Speed</span>
              </div>
              <p className="text-sm font-bold text-white mb-2">
                {activeService.turnaround}
              </p>
              <p className="text-[11px] text-gray-400">
                24/7 round-the-clock shift handoffs between London, LA, and Mumbai studios.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Interactive VFX Before / After Breakdown Stage */}
      <div id="breakdowns" className="pt-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold tracking-wider uppercase mb-3">
            <Film className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Shot Breakdowns</span>
          </div>
          <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-gold-gradient uppercase tracking-wide">
            Before & After VFX Comparison
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            Drag the slider across raw production plates vs completed studio VFX comps for all 5 disciplines.
          </p>
        </div>

        <BeforeAfterSlider initialServiceId={activeTab} />
      </div>

    </section>
  );
}
