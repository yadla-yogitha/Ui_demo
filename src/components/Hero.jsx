import React from 'react';
import { ChevronRight, Play, Sparkles } from 'lucide-react';
import { servicesData, studioInfo } from '../data/studioData';

export default function Hero({ onSelectService, onOpenQuote }) {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Ambient background glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-yellow-400/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Exact 3D Gold Logo from User Reference */}
        <div className="relative mb-6 group cursor-pointer" onClick={scrollToServices}>
          <div className="absolute inset-0 bg-amber-400/30 rounded-full blur-2xl group-hover:bg-amber-400/50 transition-all duration-500" />
          <img
            src="/logo.png"
            alt="Sunrise VFX Studio"
            className="relative w-64 sm:w-80 md:w-96 lg:w-[420px] h-auto object-contain drop-shadow-[0_0_50px_rgba(234,179,8,0.5)] transform group-hover:scale-105 transition-all duration-500"
          />
        </div>

        {/* Slogan - Faithful to screenshot */}
        <h1 className="font-cinzel font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.25em] text-gold-bright uppercase mt-2 mb-4 leading-tight">
          BRINGING IMAGINATION TO REALITY
        </h1>

        {/* Subtitle - Exact copy from screenshot */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-gray-300 font-light leading-relaxed mb-8 px-4">
          We are a creative VFX studio delivering exceptional visual effects for films, commercials and digital content with passion, precision and perfection.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {/* Primary CTA - GET STARTED > */}
          <button
            onClick={scrollToServices}
            className="flex items-center gap-2 px-8 py-3.5 rounded-lg btn-gold-primary text-black font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-[0_0_30px_rgba(234,179,8,0.45)] hover:shadow-[0_0_45px_rgba(234,179,8,0.7)] transition-all transform hover:-translate-y-0.5"
          >
            <span>GET STARTED</span>
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Secondary Watch Showreel CTA */}
          <button
            onClick={scrollToPortfolio}
            className="flex items-center gap-2 px-7 py-3.5 rounded-lg glass-panel text-amber-300 hover:text-white border border-amber-500/40 hover:border-amber-400 font-bold text-sm sm:text-base tracking-wider uppercase transition-all duration-300 hover:bg-amber-500/15"
          >
            <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>WATCH SHOWREEL</span>
          </button>
        </div>

        {/* 5 Core VFX Disciplines Quick Navigator Pill Strip */}
        <div className="w-full max-w-4xl glass-panel rounded-2xl p-3 sm:p-4 border border-amber-500/25 mb-12 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
          <div className="flex items-center justify-center gap-2 mb-3 text-[11px] font-mono uppercase tracking-widest text-amber-400/90 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>5 Core Studio Disciplines</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {servicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => onSelectService(service.id)}
                className="group relative flex flex-col items-center justify-center p-3 rounded-xl bg-black/40 hover:bg-amber-500/20 border border-white/5 hover:border-amber-400/60 transition-all duration-200 text-left"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-[10px] font-mono font-bold text-amber-400/70 group-hover:text-amber-300">
                    {service.number}.
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-gray-200 group-hover:text-white group-hover:text-gold-bright">
                    {service.name}
                  </span>
                </div>
                <span className="text-[10px] text-gray-400 group-hover:text-gray-300 text-center line-clamp-1">
                  {service.title.split('&')[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Studio Stats Counter Ribbon */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-amber-500/15">
          {studioInfo.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center p-2">
              <span className="font-cinzel text-2xl sm:text-3xl font-extrabold text-gold-gradient mb-0.5">
                {stat.value}
              </span>
              <span className="text-xs text-gray-400 font-medium tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
