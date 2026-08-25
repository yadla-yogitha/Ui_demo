import React from 'react';

export default function VideoBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none bg-slate-950">
      
      {/* Full-Screen High-Definition VFX Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-95 transition-opacity duration-700"
        src="/background_video.mp4"
      />

      {/* Cinematic Studio Gradient: Seamless Left Dark Contrast -> Crystal Clear Video on Right */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/65 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/50" />
      <div className="absolute inset-0 bg-radial-vignette opacity-40" />

      {/* Ambient Lighting Flares */}
      <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}
