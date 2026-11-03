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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl glass-panel rounded-3xl overflow-hidden border border-amber-500/50 p-4 sm:p-7 shadow-[0_0_60px_rgba(234,179,8,0.25)] bg-[#08080f] max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between pb-3.5 border-b border-amber-500/20 mb-3 gap-2">
          <div className="flex items-center gap-3 min-w-0">
            <span className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 font-mono text-xs font-bold border border-amber-500/40 shrink-0 flex items-center gap-1.5 shadow-[0_0_15px_rgba(234,179,8,0.3)]">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{currentVideo.category || 'SHOWREEL'}</span>
            </span>
            <div className="min-w-0">
              <h3 className="font-cinzel text-base sm:text-xl font-bold text-white truncate text-gold-bright">
                {currentVideo.title || currentVideo.name}
              </h3>
              {currentVideo.subtitle && (
                <p className="text-[11px] font-mono text-amber-300/80 tracking-wider truncate">
                  {currentVideo.subtitle}
                </p>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-amber-500 hover:text-black text-gray-300 transition-all duration-200 shrink-0 border border-white/10 hover:border-amber-400 shadow-lg cursor-pointer"
            aria-label="Close Showreel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Reel Switcher Bar inside Modal */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-2 scrollbar-none">
          <span className="text-xs font-mono text-amber-400/80 font-bold shrink-0 flex items-center gap-1">
            <Film className="w-3.5 h-3.5 text-amber-400" />
            Switch Reel:
          </span>
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
                className={'px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 border cursor-pointer ' + (
                  isCurrent
                    ? 'bg-amber-500 text-black border-amber-400 font-extrabold shadow-[0_0_20px_rgba(234,179,8,0.5)] scale-105'
                    : 'bg-black/60 text-gray-300 border-white/10 hover:border-amber-400/50 hover:text-white hover:bg-amber-500/10'
                )}
              >
                {r.name}
              </button>
            );
          })}
        </div>

        {/* HTML5 Video Player */}
        <div className="relative rounded-2xl overflow-hidden bg-black border border-amber-500/30 aspect-video shadow-[0_15px_40px_rgba(0,0,0,0.9)] flex-1 flex items-center justify-center">
          {/* Loading Spinner */}
          {isLoading && !hasError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm z-10 pointer-events-none">
              <div className="w-10 h-10 border-2 border-amber-500/30 border-t-amber-400 rounded-full animate-spin mb-2" />
              <span className="text-xs font-mono text-amber-300/80">Loading Reel...</span>
            </div>
          )}

          {/* Error Message Fallback */}
          {hasError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 p-4 z-10 text-center">
              <AlertCircle className="w-10 h-10 text-red-400 mb-2" />
              <p className="text-sm text-gray-200 font-medium mb-3">Unable to play video on this browser.</p>
              <button
                onClick={() => {
                  setHasError(false);
                  setIsLoading(true);
                  if (videoRef.current) {
                    videoRef.current.load();
                    videoRef.current.play().catch(() => {});
                  }
                }}
                className="px-4 py-1.5 rounded-lg bg-amber-500 text-black font-bold text-xs hover:bg-amber-400 transition-colors"
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
        <div className="mt-3.5 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            {currentVideo.description || currentVideo.desc}
          </p>
          <div className="flex items-center gap-2 font-mono text-[11px] text-amber-400/90">
            <span className="px-2.5 py-1 rounded-lg bg-black/50 border border-amber-500/20">
              4K Resolution
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-black/50 border border-amber-500/20">
              ACEScg Color
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
