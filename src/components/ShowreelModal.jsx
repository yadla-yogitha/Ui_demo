import React, { useState, useRef } from 'react';
import { 
  X, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Film, 
  Layers, 
  Wand2, 
  Scissors, 
  Compass, 
  Cpu 
} from 'lucide-react';

export default function ShowreelModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapter, setActiveChapter] = useState('all');
  const videoRef = useRef(null);

  if (!isOpen) return null;

  const reelChapters = [
    { id: 'all', title: 'Full 2026 Master Reel', icon: Film, time: '00:00' },
    { id: 'prep', title: '1. Prep & Rig Paint-Out', icon: Wand2, time: '00:30' },
    { id: 'roto', title: '2. Precision Rotoscopy', icon: Scissors, time: '01:00' },
    { id: 'comp', title: '3. Deep Compositing', icon: Layers, time: '01:30' },
    { id: 'matchmove', title: '4. 3D Matchmove', icon: Compass, time: '02:00' },
    { id: 'ai-videos', title: '5. Neural AI VFX', icon: Cpu, time: '02:30' },
  ];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-5xl bg-white rounded-3xl border border-slate-200 p-4 sm:p-6 shadow-2xl flex flex-col max-h-[95vh] overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                Sunrise VFX Studio • 2026 Official Showreel
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">
                4K DCI • ACEScg Cinema Workflow • All 5 Disciplines
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Video Player Box */}
        <div className="relative w-full h-[280px] sm:h-[420px] md:h-[480px] rounded-2xl overflow-hidden bg-black border border-slate-900 shrink-0 flex items-center justify-center group shadow-md">
          <video
            ref={videoRef}
            src="/showreel_video.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Center Play Overlay Trigger */}
          <div 
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20 group-hover:bg-black/40 transition-colors"
          >
            {!isPlaying && (
              <div className="w-16 h-16 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-lg">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
            )}
          </div>

          {/* Bottom Video Controls Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between pointer-events-auto">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="p-2 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              </button>

              <button
                onClick={toggleMute}
                className="p-2 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <span className="text-xs font-mono text-slate-300 font-medium">
                4K UHD Master • 60 FPS
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-amber-500 text-white shadow-sm">
                SUNRISE MASTER REEL
              </span>
            </div>
          </div>
        </div>

        {/* Chapter Markers Selector */}
        <div className="mt-4 pt-3 border-t border-slate-100 shrink-0">
          <div className="text-[10px] font-mono font-bold uppercase text-slate-500 mb-2">
            SELECT DISCIPLINE CHAPTER:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {reelChapters.map((ch) => {
              const Icon = ch.icon;
              const isActive = activeChapter === ch.id;
              return (
                <button
                  key={ch.id}
                  onClick={() => setActiveChapter(ch.id)}
                  className={`p-2 rounded-xl text-left border transition-all ${
                    isActive
                      ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono mb-0.5 font-bold">
                    <Icon className="w-3h-3 text-current" />
                    <span>{ch.time}</span>
                  </div>
                  <div className="text-[11px] font-bold truncate">
                    {ch.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
