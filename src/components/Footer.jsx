import React from 'react';
import { 
  ShieldCheck, 
  ArrowUp, 
  Layers, 
  Wand2, 
  Scissors, 
  Compass, 
  Cpu 
} from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Footer({ onNavigate, onSelectService, onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-slate-200 bg-slate-50 pt-16 pb-12 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Column 1: Brand & Logo (NO container box) */}
          <div className="lg:col-span-5 space-y-4">
            <button 
              onClick={() => onNavigate('home')}
              className="block text-left"
            >
              <img 
                src={logoImg} 
                alt="SUNRISE VFX STUDIO" 
                className="h-12 w-auto object-contain filter drop-shadow-sm"
              />
            </button>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              BRINGING IMAGINATION TO REALITY. World-class visual effects studio delivering high-end Prep, Roto, Comp, Matchmove, and Generative AI Video pipelines for global cinema.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>TPN & MPA Security Certified</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-azure-50 text-azure-800 border border-azure-200 text-xs font-mono font-bold">
                <span>ACEScg 2026 Pipeline</span>
              </div>
            </div>
          </div>

          {/* Column 2: 5 Core Disciplines */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-900 font-bold">
              5 CORE DISCIPLINES
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 font-semibold">
              <li>
                <button 
                  onClick={() => onSelectService('prep')}
                  className="hover:text-amber-600 transition-colors flex items-center gap-2"
                >
                  <Wand2 className="w-3.5 h-3.5 text-amber-600" />
                  <span>1. Prep & Clean-Up</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectService('roto')}
                  className="hover:text-azure-600 transition-colors flex items-center gap-2"
                >
                  <Scissors className="w-3.5 h-3.5 text-azure-600" />
                  <span>2. Rotoscopy & Mattes</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectService('comp')}
                  className="hover:text-indigoAcc-600 transition-colors flex items-center gap-2"
                >
                  <Layers className="w-3.5 h-3.5 text-indigoAcc-600" />
                  <span>3. Deep Compositing</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectService('matchmove')}
                  className="hover:text-emeraldAcc-600 transition-colors flex items-center gap-2"
                >
                  <Compass className="w-3.5 h-3.5 text-emeraldAcc-600" />
                  <span>4. 3D Matchmove & Track</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectService('ai-videos')}
                  className="hover:text-amethystAcc-600 transition-colors flex items-center gap-2"
                >
                  <Cpu className="w-3.5 h-3.5 text-amethystAcc-600" />
                  <span>5. Generative AI Videos</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-900 font-bold">
              STUDIO
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 font-semibold">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-amber-600 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-amber-600 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-amber-600 transition-colors">
                  Portfolio & Work
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('team')} className="hover:text-amber-600 transition-colors">
                  Our Team
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('careers')} className="hover:text-amber-600 transition-colors">
                  Careers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-amber-600 transition-colors">
                  Blog & Insights
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-amber-600 transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Quote Action */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold">
              ESTIMATE
            </h4>
            <button
              onClick={onOpenQuote}
              className="w-full py-2.5 px-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
            >
              Get A Quote
            </button>

            <div className="text-[11px] text-slate-500 pt-2 font-mono font-medium">
              24/7 Global Production
            </div>
            <div className="text-xs font-mono text-slate-800 font-bold">
              LA • LDN • BOM • YVR
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono font-medium">
          <div>
            © 2026 SUNRISE VFX STUDIO. All Rights Reserved. Bringing Imagination To Reality.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Production Pipeline Online</span>
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-700 hover:text-amber-600 transition-colors font-bold"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
