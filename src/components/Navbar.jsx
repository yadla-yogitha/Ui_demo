import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Calculator, 
  Layers, 
  Wand2, 
  Scissors, 
  Compass, 
  Cpu,
  ArrowUpRight
} from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Navbar({ 
  activeTab, 
  onSelectTab, 
  onOpenQuote, 
  onSelectService 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navTabs = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT US', id: 'about' },
    { 
      name: 'SERVICES', 
      id: 'services',
      hasDropdown: true,
      items: [
        { 
          id: 'prep', 
          title: '1. Prep & Clean-Up', 
          icon: Wand2, 
          desc: 'Wire removal & clean plates', 
          iconBg: 'bg-amber-100 border-amber-300 text-amber-700',
          textColor: 'group-hover/item:text-amber-600'
        },
        { 
          id: 'roto', 
          title: '2. Rotoscopy', 
          icon: Scissors, 
          desc: 'Character & hair edge mattes', 
          iconBg: 'bg-sky-100 border-sky-300 text-sky-700',
          textColor: 'group-hover/item:text-sky-600'
        },
        { 
          id: 'comp', 
          title: '3. Compositing', 
          icon: Layers, 
          desc: 'Multi-pass CG & DeepEXR comp', 
          iconBg: 'bg-indigo-100 border-indigo-300 text-indigo-700',
          textColor: 'group-hover/item:text-indigo-600'
        },
        { 
          id: 'matchmove', 
          title: '4. Matchmove', 
          icon: Compass, 
          desc: '3D camera tracking & LiDAR survey', 
          iconBg: 'bg-emerald-100 border-emerald-300 text-emerald-700',
          textColor: 'group-hover/item:text-emerald-600'
        },
        { 
          id: 'ai-videos', 
          title: '5. AI Videos', 
          icon: Cpu, 
          desc: 'Generative VFX & 8K neural upscaling', 
          iconBg: 'bg-purple-100 border-purple-300 text-purple-700',
          textColor: 'group-hover/item:text-purple-600'
        },
      ]
    },
    { name: 'PORTFOLIO', id: 'portfolio' },
    { name: 'OUR TEAM', id: 'team' },
    { name: 'CAREERS', id: 'careers' },
    { name: 'BLOG', id: 'blog' },
    { name: 'CONTACT US', id: 'contact' },
  ];

  const handleTabClick = (id) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceSelect = (serviceId) => {
    onSelectTab('services');
    onSelectService(serviceId);
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-950/85 backdrop-blur-xl py-3 border-b border-white/10 shadow-2xl' 
        : 'bg-slate-950/50 backdrop-blur-lg py-4 border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo on Left (Direct transparent image, NO container box) */}
          <button 
            onClick={() => handleTabClick('home')}
            className="flex items-center group text-left focus:outline-none transition-transform hover:opacity-90"
          >
            <img 
              src={logoImg} 
              alt="SUNRISE VFX STUDIO" 
              className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-md"
            />
          </button>

          {/* Center Tabs Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navTabs.map((tab) => {
              const isActive = activeTab === tab.id;

              if (tab.hasDropdown) {
                return (
                  <div 
                    key={tab.id}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleTabClick(tab.id)}
                      className={`flex items-center gap-1 px-3 py-2 text-xs font-bold tracking-wider transition-all rounded-xl ${
                        isActive 
                          ? 'text-amber-400 bg-amber-500/20 border-b-2 border-amber-400 font-extrabold shadow-sm' 
                          : 'text-slate-200 hover:text-amber-300 hover:bg-white/10'
                      }`}
                    >
                      <span>{tab.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-amber-400' : 'text-slate-400'}`} />
                    </button>

                    {/* Services Dropdown Menu: PURE CRISP WHITE CONTAINER */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="p-3 rounded-2xl border border-slate-200 shadow-2xl space-y-1 bg-white">
                          
                          <div className="px-3 py-1.5 text-[11px] font-mono text-slate-500 uppercase tracking-wider border-b border-slate-100 flex justify-between items-center">
                            <span className="font-bold">Core VFX Disciplines</span>
                            <span className="text-[10px] text-amber-600 font-extrabold">5 Tracks</span>
                          </div>

                          {tab.items.map((item) => {
                            const IconComponent = item.icon;
                            return (
                              <button
                                key={item.id}
                                onClick={() => handleServiceSelect(item.id)}
                                className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 transition-all flex items-start gap-3 group/item border border-transparent hover:border-slate-200"
                              >
                                <div className={`p-2 rounded-xl border flex items-center justify-center shrink-0 ${item.iconBg} group-hover/item:scale-110 transition-transform shadow-sm`}>
                                  <IconComponent className="w-4 h-4 stroke-[2.5]" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-xs font-bold text-slate-900 group-hover/item:text-amber-600 flex items-center justify-between transition-colors">
                                    <span>{item.title}</span>
                                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 transition-opacity text-amber-600" />
                                  </div>
                                  <div className="text-[11px] text-slate-500 font-medium line-clamp-1 mt-0.5">
                                    {item.desc}
                                  </div>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`px-3 py-2 text-xs font-bold tracking-wider transition-all rounded-xl ${
                    isActive 
                      ? 'text-amber-400 bg-amber-500/20 border-b-2 border-amber-400 font-extrabold shadow-sm' 
                      : 'text-slate-200 hover:text-amber-300 hover:bg-white/10'
                  }`}
                >
                  {tab.name}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Get A Quote button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-amber-300 hover:text-slate-950 bg-amber-500/10 hover:bg-amber-400 border border-amber-400/60 hover:border-amber-400 rounded-xl transition-all flex items-center gap-2 shadow-sm"
            >
              <span>GET A QUOTE</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-amber-400 bg-slate-900/80 border border-white/10 rounded-xl"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 max-h-[85vh] overflow-y-auto shadow-2xl">
          {navTabs.map((tab) => (
            <div key={tab.id}>
              <button
                onClick={() => handleTabClick(tab.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold tracking-wider flex items-center justify-between ${
                  activeTab === tab.id 
                    ? 'text-amber-600 bg-amber-50 border border-amber-200' 
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{tab.name}</span>
                {tab.hasDropdown && <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>

              {tab.hasDropdown && (
                <div className="pl-4 pr-2 py-1 space-y-1 mt-1 border-l border-amber-400/30 ml-4">
                  {tab.items.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleServiceSelect(item.id)}
                        className="w-full text-left p-2 rounded-lg text-xs text-slate-600 hover:text-amber-600 hover:bg-slate-50 flex items-center gap-2.5"
                      >
                        <div className={`p-1.5 rounded-lg border flex items-center justify-center ${item.iconBg}`}>
                          <IconComponent className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="font-bold">{item.title}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}

          <div className="pt-4 border-t border-slate-200">
            <button
              onClick={() => {
                onOpenQuote();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-xl flex items-center justify-center gap-2 shadow-md"
            >
              <Calculator className="w-4 h-4" />
              <span>GET A QUOTE</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
