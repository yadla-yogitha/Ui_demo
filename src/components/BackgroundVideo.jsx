import React from 'react';

export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute min-w-full min-h-full w-auto h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
        <source src="https://assets.mixkit.co/videos/preview/mixkit-gold-dust-particles-flowing-in-the-air-41484-large.mp4" type="video/mp4" />
      </video>

      {/* Dark Ambient Overlay for Perfect Typography Contrast */}
      <div className="absolute inset-0 bg-[#07070a]/65 transition-opacity duration-300" />

      {/* Golden Radial Ambient Light Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(234,179,8,0.16)_0%,rgba(180,83,9,0.06)_40%,transparent_75%)] pointer-events-none" />

      {/* Top and Bottom Gradient Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07070a]/90 via-transparent to-[#07070a] pointer-events-none" />
    </div>
  );
}
