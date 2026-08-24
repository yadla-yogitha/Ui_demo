import React, { useState } from 'react';
import { ArrowUp, ShieldCheck, Check } from 'lucide-react';
import { servicesData } from '../data/studioData';

export default function Footer({ onSelectService, onOpenQuote }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 5000);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="relative bg-[#050507] border-t border-amber-500/20 pt-16 pb-12 text-gray-400 text-xs overflow-hidden">
      
      {/* Golden ambient gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_12px_#facc15]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Col 1: Studio Branding & Slogan (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-3 group">
              <img 
                src="/logo.png" 
                alt="Sunrise VFX Studio Logo" 
                className="w-12 h-12 object-contain drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]"
              />
              <div className="flex flex-col text-left">
                <span className="font-cinzel font-bold text-xl tracking-[0.2em] text-gold-gradient leading-none">
                  SUNRISE
                </span>
                <span className="text-[10px] tracking-[0.3em] text-amber-300/80 font-mono mt-0.5">
                  — VFX STUDIO —
                </span>
              </div>
            </a>

            <p className="text-gray-300 text-xs leading-relaxed font-light">
              Bringing imagination to reality. Premium visual effects for feature films, episodic television, and international commercial productions.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-amber-400/90 pt-1">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>TPN Tier 1 Security & MPAA Content Certified</span>
            </div>
          </div>

          {/* Col 2: 5 Core VFX Disciplines (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel font-bold text-white text-sm tracking-wider uppercase">
              VFX Disciplines
            </h4>
            <ul className="space-y-2">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onSelectService(s.id)}
                    className="hover:text-amber-300 transition-colors text-left flex items-center gap-1.5"
                  >
                    <span className="font-mono text-[10px] text-amber-500">{s.number}.</span>
                    <span>{s.name} ({s.title.split('&')[0]})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-cinzel font-bold text-white text-sm tracking-wider uppercase">
              Explore
            </h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-amber-300 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">Services</a></li>
              <li><a href="#breakdowns" className="hover:text-amber-300 transition-colors">VFX Breakdowns</a></li>
              <li><a href="#portfolio" className="hover:text-amber-300 transition-colors">Showreel Portfolio</a></li>
              <li><a href="#team" className="hover:text-amber-300 transition-colors">Our Team</a></li>
              <li><a href="#careers" className="hover:text-amber-300 transition-colors">Careers</a></li>
              <li><a href="#blog" className="hover:text-amber-300 transition-colors">Tech Journal</a></li>
              <li><a href="#contact" className="hover:text-amber-300 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Quote (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel font-bold text-white text-sm tracking-wider uppercase">
              Studio Newsletter
            </h4>
            <p className="text-xs text-gray-400">
              Subscribe for exclusive VFX breakdowns, neural pipeline tutorials, and industry insights.
            </p>

            {isSubscribed ? (
              <div className="p-2.5 bg-amber-500/20 border border-amber-500/40 rounded-xl text-amber-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-black/60 border border-white/10 text-xs text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl btn-gold-primary text-black font-bold uppercase tracking-wider text-[11px]"
                >
                  Subscribe
                </button>
              </form>
            )}

            <button
              onClick={onOpenQuote}
              className="w-full py-2.5 rounded-xl glass-panel text-amber-300 hover:text-white border border-amber-500/40 hover:border-amber-400 font-bold uppercase tracking-wider text-[11px] transition-colors"
            >
              Launch Shot Cost Estimator
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} SUNRISE VFX STUDIO. All Rights Reserved. Bringing Imagination to Reality.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-gray-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-400 transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-gray-400 transition-colors cursor-pointer">Security & TPN</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-amber-500/20 hover:text-amber-300 text-gray-400 transition-colors flex items-center gap-1"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>TOP</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
