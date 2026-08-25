import React, { useState, useRef, useCallback, useEffect } from 'react';
import { 
  Sparkles, 
  MoveHorizontal, 
  Layers, 
  Wand2, 
  Scissors, 
  Compass, 
  Cpu, 
  ArrowRight
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function VfxComparisonSlider({ onSelectService }) {
  const [activeServiceId, setActiveServiceId] = useState('prep');
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const activeService = servicesData.find(s => s.id === activeServiceId) || servicesData[0];
  const { comparison } = activeService;

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleTouchStart = () => setIsDragging(true);
  const handleMouseUp = useCallback(() => setIsDragging(false), []);
  const handleTouchEnd = useCallback(() => setIsDragging(false), []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging || !e.touches[0]) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  const serviceButtons = [
    { id: 'prep', label: '1. Prep', icon: Wand2, activeClass: 'border-amber-500 text-amber-800 bg-amber-100 shadow-sm' },
    { id: 'roto', label: '2. Roto', icon: Scissors, activeClass: 'border-azure-500 text-azure-800 bg-azure-100 shadow-sm' },
    { id: 'comp', label: '3. Comp', icon: Layers, activeClass: 'border-indigoAcc-500 text-indigoAcc-800 bg-indigoAcc-100 shadow-sm' },
    { id: 'matchmove', label: '4. Matchmove', icon: Compass, activeClass: 'border-emeraldAcc-500 text-emeraldAcc-800 bg-emeraldAcc-100 shadow-sm' },
    { id: 'ai-videos', label: '5. AI Videos', icon: Cpu, activeClass: 'border-amethystAcc-500 text-amethystAcc-800 bg-amethystAcc-100 shadow-sm' },
  ];

  return (
    <section className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold mb-3 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>INTERACTIVE VFX COMPARISON</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white mb-4 drop-shadow-[0_2px_15px_rgba(0,0,0,0.95)]">
            Scrub Between <span className="text-amber-400">Raw Plate</span> & <span className="text-cyan-400">Final Master</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-100 font-medium drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
            Drag the slider horizontally to inspect raw production plates versus Sunrise VFX deliverables across all 5 disciplines.
          </p>
        </div>

        {/* 5 Service Tabs Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {serviceButtons.map((btn) => {
            const Icon = btn.icon;
            const isActive = activeServiceId === btn.id;
            return (
              <button
                key={btn.id}
                onClick={() => {
                  setActiveServiceId(btn.id);
                  setSliderPosition(50);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                  isActive
                    ? `${btn.activeClass} scale-105`
                    : 'glass-panel-light text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-4 h-4 text-current" />
                <span>{btn.label}</span>
              </button>
            );
          })}
        </div>

        {/* Comparison Box */}
        <div className="max-w-5xl mx-auto glass-panel-light rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-luxury relative">
          
          {/* Top Info Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 mb-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-azure-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold text-slate-800">{comparison.title}</span>
            </div>
            
            <div className="flex items-center gap-3 text-xs font-mono font-bold">
              <span className="text-amber-700">{comparison.beforeTag} (LEFT)</span>
              <span className="text-slate-300">|</span>
              <span className="text-azure-700">{comparison.afterTag} (RIGHT)</span>
            </div>
          </div>

          {/* Interactive Split Screen */}
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            className="relative w-full h-[320px] sm:h-[450px] md:h-[520px] rounded-2xl overflow-hidden cursor-ew-resize select-none bg-slate-900 border border-slate-200 shadow-inner"
          >
            {/* After Image */}
            <img
              src={comparison.afterImg}
              alt={comparison.afterTag}
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />

            <div className="absolute top-4 right-4 z-20 pointer-events-none">
              <div className="bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-azure-400 text-azure-300 text-xs font-bold font-mono tracking-wider shadow-md">
                {comparison.afterTag}
              </div>
            </div>

            {/* Before Image */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={comparison.beforeImg}
                alt={comparison.beforeTag}
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  height: '100%'
                }}
                draggable={false}
              />

              <div className="absolute top-4 left-4 z-20 pointer-events-none">
                <div className="bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-amber-400 text-amber-300 text-xs font-bold font-mono tracking-wider shadow-md">
                  {comparison.beforeTag}
                </div>
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 z-30 flex flex-col items-center pointer-events-none"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="w-1 h-full bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)]" />

              <div className="absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-amber-500 shadow-2xl flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing">
                <MoveHorizontal className="w-4 h-4 text-amber-600" />
              </div>
            </div>

          </div>

          {/* Breakdown Notes */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-[11px] font-mono text-amber-700 font-bold mb-1 uppercase">
                RAW INPUT CHARACTERISTICS:
              </div>
              <p className="text-xs text-slate-700 font-medium">{comparison.beforeInfo}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-mono text-azure-700 font-bold mb-1 uppercase">
                  SUNRISE DELIVERABLE SPEC:
                </div>
                <p className="text-xs text-slate-700 font-medium">{comparison.afterInfo}</p>
              </div>

              <button
                onClick={() => onSelectService(activeServiceId)}
                className="ml-3 shrink-0 px-3.5 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-amber-600 rounded-xl flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <span>Full Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
