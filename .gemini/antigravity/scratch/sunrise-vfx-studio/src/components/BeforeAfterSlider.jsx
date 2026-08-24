import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle2, Layers, Sliders } from 'lucide-react';
import { breakdownsData } from '../data/studioData';

export default function BeforeAfterSlider({ initialServiceId = 'comp' }) {
  const [activeBreakdownId, setActiveBreakdownId] = useState(
    breakdownsData.find(b => b.serviceId === initialServiceId)?.id || breakdownsData[0].id
  );
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const activeBreakdown = breakdownsData.find(b => b.id === activeBreakdownId) || breakdownsData[0];

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div className="w-full">
      {/* Category Filter Pills for Breakdowns */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        {breakdownsData.map((breakdown) => {
          const isSelected = breakdown.id === activeBreakdownId;
          return (
            <button
              key={breakdown.id}
              onClick={() => {
                setActiveBreakdownId(breakdown.id);
                setSliderPosition(50);
              }}
              className={'px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 flex items-center gap-2 border ' + (
                isSelected
                  ? 'bg-amber-500 text-black font-bold border-amber-400 shadow-[0_0_20px_rgba(234,179,8,0.4)]'
                  : 'glass-panel text-gray-300 border-white/10 hover:border-amber-500/40 hover:text-white'
              )}
            >
              <span className="font-mono text-[10px] opacity-75">{breakdown.category}</span>
              <span>{breakdown.title.split(' ')[0]} {breakdown.title.split(' ')[1]}</span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Split Comparison Stage */}
      <div className="relative rounded-3xl overflow-hidden glass-panel border border-amber-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 bg-black/40">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold">
                {activeBreakdown.category} BREAKDOWN
              </span>
              <h3 className="font-cinzel text-base sm:text-lg font-bold text-white">
                {activeBreakdown.title}
              </h3>
            </div>
            <p className="text-xs text-gray-400 mt-0.5">
              Project: <span className="text-amber-300/90 font-medium">{activeBreakdown.project}</span>
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
            <span className="hidden sm:inline bg-black/50 px-2.5 py-1 rounded-lg border border-white/5">
              🎞️ {activeBreakdown.stats.frames}
            </span>
            <span className="hidden md:inline bg-black/50 px-2.5 py-1 rounded-lg border border-white/5">
              🛠️ {activeBreakdown.stats.software}
            </span>
            <span className="bg-black/50 px-2.5 py-1 rounded-lg border border-amber-500/20 text-amber-300">
              📺 {activeBreakdown.stats.resolution}
            </span>
          </div>
        </div>

        {/* Drag Comparison Area */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative h-[340px] sm:h-[420px] md:h-[500px] w-full select-none cursor-ew-resize overflow-hidden bg-black"
        >
          {/* AFTER Image (Full background layer) */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={activeBreakdown.afterImage}
              alt="Final VFX Output"
              className="w-full h-full object-cover select-none pointer-events-none"
            />
            {/* After Label Badge */}
            <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-amber-500/50 text-amber-300 font-bold text-xs shadow-lg flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              <span>{activeBreakdown.afterLabel}</span>
            </div>
          </div>

          {/* BEFORE Image (Clipped overlay) */}
          <div
            className="absolute inset-0 h-full overflow-hidden select-none pointer-events-none"
            style={{ width: sliderPosition + '%' }}
          >
            <img
              src={activeBreakdown.beforeImage}
              alt="Raw Plate"
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{
                width: containerRef.current ? containerRef.current.clientWidth + 'px' : '100%',
                height: '100%',
              }}
            />
            {/* Before Label Badge */}
            <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-gray-200 font-bold text-xs shadow-lg flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-gray-400" />
              <span>{activeBreakdown.beforeLabel}</span>
            </div>
          </div>

          {/* Draggable Divider Line with Glowing Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 shadow-[0_0_15px_#facc15] cursor-ew-resize z-20"
            style={{ left: 'calc(' + sliderPosition + '% - 2px)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-[0_0_25px_rgba(234,179,8,0.8)] border-2 border-white transform hover:scale-110 active:scale-95 transition-transform">
              <MoveHorizontal className="w-5 h-5 stroke-[2.5]" />
            </div>
          </div>

          {/* Helper overlay instruction */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] text-gray-300 flex items-center gap-1.5 pointer-events-none">
            <Sliders className="w-3 h-3 text-amber-400" />
            <span>Drag slider horizontally to inspect VFX breakdown layers</span>
          </div>
        </div>

        {/* Detailed Breakdown Notes Footer */}
        <div className="p-6 bg-[#0c0c12] border-t border-white/10">
          <p className="text-sm text-gray-300 leading-relaxed">
            {activeBreakdown.description}
          </p>
        </div>

      </div>
    </div>
  );
}
