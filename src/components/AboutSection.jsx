import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Globe2, 
  Cpu, 
  Zap, 
  Server, 
  CheckCircle2 
} from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function AboutSection({ onOpenQuote }) {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'TPN & MPA Gold Security',
      desc: 'Air-gapped secure workstations, biometric access, zero-trust network, and end-to-end encrypted storage for unreleased blockbuster content.',
      color: 'text-amber-700 bg-amber-50 border-amber-200'
    },
    {
      icon: Globe2,
      title: 'Global 24/7 Production',
      desc: 'Seamless round-the-clock follow-the-sun pipeline across Los Angeles, London, Mumbai, and Vancouver studios to meet aggressive release schedules.',
      color: 'text-sky-700 bg-sky-50 border-sky-200'
    },
    {
      icon: Server,
      title: 'Hybrid AI & GPU Farm',
      desc: 'Over 5,000 RTX 4090 / H100 GPU compute cores enabling near-instant DeepEXR comp renders, optical flow solves, and neural video upscales.',
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200'
    },
    {
      icon: Zap,
      title: 'Precision Quality Assurance',
      desc: 'Every single frame undergoes 100% pixel zoom scrutiny by senior Hollywood supervisors before client delivery.',
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200'
    }
  ];

  return (
    <section id="about" className="py-12 lg:py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Floating Over Background Video */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-mono font-bold mb-3 backdrop-blur-md shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>STUDIO HERITAGE & INFRASTRUCTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white mb-3 drop-shadow-[0_2px_15px_rgba(0,0,0,0.95)]">
            About <span className="text-gradient-gold">Sunrise VFX Studio</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-100 font-medium drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
            Founded with a singular vision: to deliver world-class visual effects by combining seasoned artistic excellence with bleeding-edge technology.
          </p>
        </div>

        {/* Studio Story Main White Container */}
        <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 border-2 border-white/90 mb-12 relative overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.5)] text-slate-900">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-300">
                BRINGING IMAGINATION TO REALITY
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display leading-tight">
                Empowering Filmmakers, Directors & Studios with <span className="text-gradient-gold">Uncompromising Visual Precision</span>
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Sunrise VFX Studio is a premier visual effects powerhouse specializing in <strong className="text-amber-800">Prep, Roto, Comp, Matchmove, and Generative AI Video</strong> pipelines. Operating across international time zones, our elite team of compositors, tracking technical directors, and AI researchers tackle the industry’s most demanding sequences.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Whether executing intricate multi-layer hair rotoscopy, complex anamorphic drone camera solves, photorealistic set extensions in ACEScg, or training bespoke neural diffusion checkpoints, we deliver production-ready shots on time, every time.
              </p>

              {/* Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  <span>Trusted Partner Network (TPN) Certified</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>Full ACEScg & OCIO Color Management</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  <span>Next-Gen Neural & Generative AI Lab</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>100 Gbps Encrypted Aspera Transfer</span>
                </div>
              </div>
            </div>

            {/* Right Emblem Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-slate-50 border border-slate-200 p-6 flex flex-col items-center justify-center text-center shadow-lg">
                <img 
                  src={logoImg} 
                  alt="Sunrise VFX Logo" 
                  className="w-36 h-36 object-contain mb-3 drop-shadow-[0_8px_20px_rgba(217,119,6,0.25)] animate-vfx-float"
                />
                <div className="text-base font-bold text-gradient-gold">SUNRISE VFX STUDIO</div>
                <div className="text-[10px] font-mono text-slate-500 font-bold tracking-widest uppercase mt-1">
                  HOLLYWOOD • BOLLYWOOD • OTT
                </div>
                <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 text-[10px] font-mono font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>ACTIVE GLOBAL PIPELINE</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Studio Pillars Grid in White Containers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 border-2 border-white/90 hover:border-amber-400 transition-all duration-300 shadow-xl group text-slate-900">
                <div className={`w-12 h-12 rounded-2xl ${pillar.color} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2 font-display">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
