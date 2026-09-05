import React from 'react';
import { Sparkles, Shield, Cpu, Award, Lock, Zap } from 'lucide-react';

export default function AboutUs({ onOpenQuote }) {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>About Sunrise VFX</span>
        </div>
        <h2 className="font-cinzel font-black text-3xl sm:text-4xl md:text-5xl text-gold-gradient uppercase tracking-wider mb-4">
          Architects of Visual Illusion
        </h2>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Founded by seasoned Hollywood visual effects supervisors and technical directors, Sunrise VFX delivers cutting-edge visual effects for feature films, episodic streaming, and global commercial campaigns.
        </p>
      </div>

      {/* Two Column Story & Pipeline Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
        
        {/* Left Visual Studio Showcase Card (5 cols) */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden glass-panel border border-amber-500/30 shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80"
              alt="Sunrise VFX Studio Environment"
              className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-[#07070a]/40 to-transparent" />
            
            {/* Overlay Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-amber-500/40 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-black flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cinzel font-bold text-white text-sm">TPN Gold Tier Certified</h4>
                  <p className="text-[11px] text-gray-300">Hollywood Security & MPAA Content Protection Compliant</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Story & Pillars (7 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <div className="space-y-4">
            <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-gold-bright">
              The Dual-Pipeline Advantage: Precision Craft Meets Neural Speed
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              We reject the false choice between classical VFX rigor and modern AI acceleration. At Sunrise VFX, we bridge the surgical precision of Foundry Nuke, 3DEqualizer, and Silhouette with custom-trained neural inpainting models and generative pre-vis engines.
            </p>
          </div>

          {/* 3 Core Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-amber-500/40 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center mb-3">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-white mb-1">24/7 Global Pipeline</h4>
              <p className="text-xs text-gray-400 leading-normal">
                Continuous 24/7 delivery pipeline serving studios and productions worldwide across all timezones.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-amber-500/40 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center mb-3">
                <Shield className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-white mb-1">Pixel Perfection</h4>
              <p className="text-xs text-gray-400 leading-normal">
                Sub-pixel roto isolation, ACES color fidelity, and 0.3px matchmove residuals.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-amber-500/40 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center mb-3">
                <Cpu className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-white mb-1">AI R&D Lab</h4>
              <p className="text-xs text-gray-400 leading-normal">
                In-house neural research driving proprietary inpainting & pre-vis nodes.
              </p>
            </div>

          </div>

          {/* Security & Infrastructure Banner */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent border border-amber-500/30 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-amber-400 shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white">Enterprise Security: </span>
                <span className="text-gray-300">Aspera 10Gbps High-Speed Encrypted Transfers & Air-Gapped Render Farm</span>
              </div>
            </div>
            <button
              onClick={onOpenQuote}
              className="text-xs font-bold text-amber-300 hover:text-white uppercase tracking-wider underline underline-offset-4"
            >
              Get Studio Consultation →
            </button>
        </div>

      </div>
      </div>
    </section>
  );
}
