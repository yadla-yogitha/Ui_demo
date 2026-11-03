import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Film, Sparkles, Volume2, Maximize2, AlertCircle } from 'lucide-react';
import { studioReels, mainShowreel } from '../data/studioData';

export default function VideoPlayerModal({ initialVideo = null, onClose }) {
  const [currentVideo, setCurrentVideo] = useState(initialVideo || mainShowreel);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Handle video source changes and safe autoplay on mobile/desktop
  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    if (videoRef.current) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Autoplay successfully started
          })
          .catch((err) => {
            // Autoplay policy prevented playback (common on mobile without direct tap)
            // Controls remain available for user interaction
            console.log('Autoplay deferred for user gesture:', err.message);
          });
      }
    }
  }, [currentVideo.videoUrl]);

  if (!currentVideo) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-5 md:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl lg:max-w-5xl min-w-0 max-h-[94vh] sm:max-h-[90vh] glass-panel rounded-2xl sm:rounded-3xl border border-amber-500/40 p-3 sm:p-5 md:p-6 shadow-[0_0_50px_rgba(234,179,8,0.25)] bg-[#08080f] flex flex-col overflow-y-auto overflow-x-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-amber-500/20 mb-2.5 sm:mb-3 gap-2 w-full min-w-0 shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg bg-amber-500/20 text-amber-300 font-mono text-[10px] sm:text-xs font-bold border border-amber-500/40 shrink-0 flex items-center gap-1 shadow-[0_0_12px_rgba(234,179,8,0.25)]">
              <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
              <span className="uppercase tracking-wider">{currentVideo.category || 'SHOWREEL'}</span>
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="font-cinzel text-xs sm:text-base md:text-lg font-bold text-white truncate text-gold-bright leading-tight">
                {currentVideo.title || currentVideo.name}
              </h3>
              {currentVideo.subtitle && (
                <p className="text-[10px] sm:text-[11px] font-mono text-amber-300/80 tracking-wider truncate">
                  {currentVideo.subtitle}
                </p>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-amber-500 hover:text-black text-gray-300 transition-all duration-200 shrink-0 border border-white/10 hover:border-amber-400 shadow-lg cursor-pointer ml-1"
            aria-label="Close Showreel"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Quick Reel Switcher Bar inside Modal */}
        <div className="w-full min-w-0 max-w-full overflow-x-auto pb-2.5 mb-2 sm:mb-3 scrollbar-none flex items-center gap-1.5 sm:gap-2 shrink-0">
          <div className="text-[10px] sm:text-xs font-mono text-amber-400/90 font-bold shrink-0 flex items-center gap-1 mr-0.5">
            <Film className="w-3 h-3 text-amber-400 shrink-0" />
            <span className="hidden sm:inline">Reels:</span>
          </div>
          {studioReels.map((r) => {
            const isCurrent = currentVideo.videoUrl === r.videoUrl;
            return (
              <button
                key={r.id}
                onClick={() => {
                  setCurrentVideo({
                    title: r.name,
                    subtitle: r.id === 'main-showreel' ? 'VFX_REEL_SR_sunrise.VFX' : undefined,
                    category: r.category,
                    videoUrl: r.videoUrl,
                    description: r.desc,
                    tags: [r.category, '4K DCI', 'Studio Reel'],
                    client: 'Sunrise VFX Studio',
                    year: '2025'
                  });
                }}
                className={'px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all duration-200 border cursor-pointer shrink-0 ' + (
                  isCurrent
                    ? 'bg-amber-500 text-black border-amber-400 font-extrabold shadow-[0_0_15px_rgba(234,179,8,0.45)]'
                    : 'bg-black/60 text-gray-300 border-white/10 hover:border-amber-400/50 hover:text-white hover:bg-amber-500/10'
                )}
              >
                {r.name}
              </button>
            );
          })}
        </div>

        {/* HTML5 Video Player */}
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-black border border-amber-500/30 aspect-video shadow-[0_15px_40px_rgba(0,0,0,0.9)] w-full min-w-0 max-w-full flex items-center justify-center shrink-0">
          {/* Loading Spinner */}
          {isLoading && !hasError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm z-10 pointer-events-none">
              <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-amber-500/30 border-t-amber-400 rounded-full animate-spin mb-2" />
              <span className="text-[11px] sm:text-xs font-mono text-amber-300/80">Loading Reel...</span>
            </div>
          )}

          {/* Error Message Fallback */}
          {hasError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/85 p-4 z-10 text-center">
              <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 text-red-400 mb-2" />
              <p className="text-xs sm:text-sm text-gray-200 font-medium mb-3">Unable to play video on this browser.</p>
              <button
                onClick={() => {
                  setHasError(false);
                  setIsLoading(true);
                  if (videoRef.current) {
                    videoRef.current.load();
                    videoRef.current.play().catch(() => {});
                  }
                }}
                className="px-3.5 py-1.5 rounded-lg bg-amber-500 text-black font-bold text-xs hover:bg-amber-400 transition-colors"
              >
                Retry
              </button>
            </div>
          )}

          <video
            ref={videoRef}
            key={currentVideo.videoUrl}
            controls
            playsInline
            preload="metadata"
            onCanPlay={() => setIsLoading(false)}
            onPlaying={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setHasError(true);
            }}
            className="w-full h-full object-contain bg-black"
          >
            <source src={currentVideo.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Footer Details */}
        <div className="mt-2.5 sm:mt-3.5 pt-2 sm:pt-3 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 text-xs w-full min-w-0 shrink-0">
          <p className="text-gray-300 leading-relaxed text-[11px] sm:text-xs max-w-2xl break-words">
            {currentVideo.description || currentVideo.desc}
          </p>
          <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[10px] sm:text-[11px] text-amber-400/90 shrink-0">
            <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg bg-black/60 border border-amber-500/20 whitespace-nowrap">
              4K Resolution
            </span>
            <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg bg-black/60 border border-amber-500/20 whitespace-nowrap">
              ACEScg Color
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
