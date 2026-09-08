import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ChevronRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT US', href: '#about' },
  { name: 'SERVICES', href: '#services' },
  { name: 'PORTFOLIO', href: '#portfolio' },
  { name: 'CAREERS', href: '#careers' },
  { name: 'BLOG', href: '#blog' },
  { name: 'CONTACT US', href: '#contact' },
];

export default function Navbar({ onOpenQuote }) {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.substring(1);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={'fixed top-0 left-0 right-0 z-40 transition-all duration-300 ' + (
        isScrolled 
          ? 'bg-[#07070a]/90 backdrop-blur-xl border-b border-amber-500/20 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.8)]' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name - Faithful to reference */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group select-none"
          >
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="Sunrise VFX Studio Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain drop-shadow-[0_0_15px_rgba(234,179,8,0.5)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-cinzel font-bold text-lg sm:text-xl tracking-[0.2em] text-gold-gradient leading-none">
                SUNRISE
              </span>
              <span className="text-[10px] tracking-[0.3em] text-amber-300/80 font-mono mt-0.5">
                — VFX STUDIO —
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={'relative px-3 py-1.5 text-xs xl:text-sm font-semibold tracking-wider transition-colors duration-200 uppercase ' + (
                    isActive 
                      ? 'text-amber-300' 
                      : 'text-gray-300 hover:text-white'
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_8px_#facc15]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-amber-300 border border-amber-500/60 bg-amber-500/10 hover:bg-amber-500/20 hover:border-amber-400 shadow-[0_0_15px_rgba(234,179,8,0.15)] hover:shadow-[0_0_25px_rgba(234,179,8,0.35)] transition-all duration-300"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>GET A QUOTE</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-amber-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#07070a]/95 backdrop-blur-2xl border-b border-amber-500/20 px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={'flex items-center justify-between py-2 text-sm font-semibold tracking-wider uppercase border-b border-white/5 ' + (
                    isActive ? 'text-amber-400 font-bold' : 'text-gray-300'
                  )}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-amber-500/50" />
                </a>
              );
            })}

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 rounded-xl btn-gold-primary text-center text-xs font-bold uppercase tracking-wider"
              >
                GET A QUOTE
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
