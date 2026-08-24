import React, { useState, useMemo } from 'react';
import { Calculator, Check, ArrowRight, X } from 'lucide-react';
import confetti from 'canvas-confetti';

const SERVICE_RATES = {
  prep: { name: 'Prep & Clean-up', baseRate: 180, perFrame: 0.8 },
  roto: { name: 'Rotoscopy', baseRate: 150, perFrame: 0.65 },
  comp: { name: 'Compositing (Deep EXR)', baseRate: 450, perFrame: 2.2 },
  matchmove: { name: '3D Matchmove & Tracking', baseRate: 280, perFrame: 1.2 },
  'ai-videos': { name: 'AI Videos & Neural VFX', baseRate: 220, perFrame: 0.95 }
};

const COMPLEXITIES = [
  { id: 'simple', label: 'Simple (Grade A)', multiplier: 1.0, desc: 'Static camera, minimal blur, straightforward elements' },
  { id: 'medium', label: 'Medium (Grade B)', multiplier: 1.4, desc: 'Moderate motion, organic shapes, multicamera tracking' },
  { id: 'complex', label: 'Complex (Grade C)', multiplier: 1.9, desc: 'Heavy motion blur, fine hair/fur, multi-layer deep comp' },
  { id: 'hero', label: 'Hero Shot (Grade S)', multiplier: 2.6, desc: 'Close-up creature/face, extreme dynamics, photoreal centerpiece' }
];

const RESOLUTIONS = [
  { id: '2k', label: '2K / HD (1080p)', multiplier: 1.0 },
  { id: '4k', label: '4K UHD / DCI', multiplier: 1.25 },
  { id: '8k', label: '6K / 8K IMAX', multiplier: 1.6 }
];

const SPEEDS = [
  { id: 'standard', label: 'Standard (5-7 Days)', multiplier: 1.0, badge: 'Normal Pipeline' },
  { id: 'rush', label: 'Rush (48 Hours)', multiplier: 1.35, badge: '+35% Rush Fee' },
  { id: 'express', label: 'Express (24 Hours)', multiplier: 1.7, badge: '+70% Priority Crew' }
];

export default function QuoteCalculator({ isOpen, onClose, initialService = 'prep' }) {
  const [selectedService, setSelectedService] = useState(initialService);
  const [selectedComplexity, setSelectedComplexity] = useState('medium');
  const [selectedResolution, setSelectedResolution] = useState('4k');
  const [selectedSpeed, setSelectedSpeed] = useState('standard');
  const [shotCount, setShotCount] = useState(3);
  const [framesPerShot, setFramesPerShot] = useState(120);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [clientEmail, setClientEmail] = useState('');
  const [clientName, setClientName] = useState('');

  // Calculate pricing dynamically
  const calculation = useMemo(() => {
    const service = SERVICE_RATES[selectedService] || SERVICE_RATES.prep;
    const complexityObj = COMPLEXITIES.find(c => c.id === selectedComplexity) || COMPLEXITIES[1];
    const resolutionObj = RESOLUTIONS.find(r => r.id === selectedResolution) || RESOLUTIONS[1];
    const speedObj = SPEEDS.find(s => s.id === selectedSpeed) || SPEEDS[0];

    const costPerShot = (service.baseRate + (framesPerShot * service.perFrame)) 
      * complexityObj.multiplier 
      * resolutionObj.multiplier 
      * speedObj.multiplier;

    const totalEstimate = Math.round(costPerShot * shotCount);
    
    let days = Math.ceil((shotCount * (framesPerShot / 100)) * (complexityObj.multiplier * 0.8));
    if (selectedSpeed === 'rush') days = Math.max(2, Math.ceil(days * 0.4));
    if (selectedSpeed === 'express') days = 1;
    if (selectedSpeed === 'standard') days = Math.max(4, Math.min(14, days));

    return {
      totalEstimate,
      costPerShot: Math.round(costPerShot),
      turnaroundDays: days,
      serviceName: service.name,
      totalFrames: shotCount * framesPerShot
    };
  }, [selectedService, selectedComplexity, selectedResolution, selectedSpeed, shotCount, framesPerShot]);

  const handleSubmitQuote = (e) => {
    e.preventDefault();
    if (!clientEmail) {
      alert('Please enter your email address to receive your official formal quote.');
      return;
    }

    setIsSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#eab308', '#facc15', '#fbbf24', '#ffffff']
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-4xl glass-panel rounded-3xl border border-amber-500/40 p-6 sm:p-10 shadow-2xl bg-[#09090f] my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Confirmation Success Screen */
          <div className="py-12 text-center max-w-md mx-auto space-y-6">
            <div className="w-20 h-20 rounded-full bg-amber-500/20 border-2 border-amber-400 text-amber-300 flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(234,179,8,0.5)]">
              <Check className="w-10 h-10 stroke-[3]" />
            </div>
            <div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-gold-bright mb-2">
                Estimate Locked In!
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Thank you <span className="text-amber-300 font-semibold">{clientName || 'Partner'}</span>. We have dispatched this detailed proposal to <span className="text-amber-300 font-mono">{clientEmail}</span>. A senior VFX producer will reach out within 2 hours.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/60 border border-amber-500/30 text-left space-y-2 text-xs font-mono">
              <div className="flex justify-between text-gray-300">
                <span>Discipline:</span>
                <span className="text-amber-300 font-bold">{calculation.serviceName}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Shots & Frames:</span>
                <span className="text-white">{shotCount} Shots ({calculation.totalFrames} Total Frames)</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Estimated Budget:</span>
                <span className="text-amber-300 font-bold">${calculation.totalEstimate.toLocaleString()} USD</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Estimated Delivery:</span>
                <span className="text-emerald-400 font-bold">~{calculation.turnaroundDays} Business Days</span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="w-full py-3.5 rounded-xl btn-gold-primary text-black font-bold uppercase tracking-wider text-xs"
            >
              Return to Website
            </button>
          </div>
        ) : (
          /* Interactive Calculator Form */
          <div>
            {/* Header */}
            <div className="text-center max-w-xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold tracking-wider uppercase mb-2">
                <Calculator className="w-3.5 h-3.5 text-amber-400" />
                <span>Instant VFX Shot Estimator</span>
              </div>
              <h2 className="font-cinzel font-black text-2xl sm:text-3xl text-gold-gradient uppercase tracking-wide">
                Build & Estimate Your VFX Quote
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                Customize your shot parameters below to receive an instant real-time price & delivery estimate.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Configuration Controls (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* 1. Select Discipline */}
                <div>
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300 block mb-2">
                    1. Select VFX Discipline
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {Object.entries(SERVICE_RATES).map(([key, data]) => {
                      const isSelected = selectedService === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setSelectedService(key)}
                          className={'p-2.5 rounded-xl text-xs text-left transition-all border ' + (
                            isSelected
                              ? 'bg-amber-500/25 border-amber-400 text-white font-bold shadow-md'
                              : 'bg-black/40 border-white/10 text-gray-400 hover:border-amber-500/40'
                          )}
                        >
                          <div className="truncate">{data.name}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Select Shot Complexity */}
                <div>
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300 block mb-2">
                    2. Shot Complexity Level
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {COMPLEXITIES.map((c) => {
                      const isSelected = selectedComplexity === c.id;
                      return (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setSelectedComplexity(c.id)}
                          className={'p-3 rounded-xl text-xs text-left transition-all border ' + (
                            isSelected
                              ? 'bg-amber-500/25 border-amber-400 text-white font-bold shadow-md'
                              : 'bg-black/40 border-white/10 text-gray-400 hover:border-amber-500/40'
                          )}
                        >
                          <div className="font-semibold text-gray-200">{c.label}</div>
                          <div className="text-[10px] text-gray-400 mt-0.5 line-clamp-1">{c.desc}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Sliders: Number of Shots & Average Frames */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-black/40 border border-white/10">
                  <div>
                    <div className="flex justify-between text-xs text-gray-300 mb-1 font-mono">
                      <span>Total Shots:</span>
                      <span className="text-amber-300 font-bold">{shotCount} Shots</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="30"
                      value={shotCount}
                      onChange={(e) => setShotCount(Number(e.target.value))}
                      className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-gray-300 mb-1 font-mono">
                      <span>Frames / Shot:</span>
                      <span className="text-amber-300 font-bold">{framesPerShot} f (~{(framesPerShot/24).toFixed(1)}s)</span>
                    </div>
                    <input
                      type="range"
                      min="24"
                      max="600"
                      step="12"
                      value={framesPerShot}
                      onChange={(e) => setFramesPerShot(Number(e.target.value))}
                      className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                    />
                  </div>
                </div>

                {/* 4. Resolution & Speed Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300 block mb-2">
                      Resolution Deliverable
                    </label>
                    <select
                      value={selectedResolution}
                      onChange={(e) => setSelectedResolution(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-black/60 border border-white/10 text-xs text-gray-200 focus:border-amber-400 focus:outline-none"
                    >
                      {RESOLUTIONS.map(r => (
                        <option key={r.id} value={r.id} className="bg-[#121218]">{r.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300 block mb-2">
                      Delivery SLA Speed
                    </label>
                    <select
                      value={selectedSpeed}
                      onChange={(e) => setSelectedSpeed(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-black/60 border border-white/10 text-xs text-gray-200 focus:border-amber-400 focus:outline-none"
                    >
                      {SPEEDS.map(s => (
                        <option key={s.id} value={s.id} className="bg-[#121218]">{s.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

              </div>

              {/* Right Column: Live Estimate Card & Submission Form (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-b from-[#14141f] to-black/80 border border-amber-500/40 shadow-xl">
                
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                      Real-Time Estimate
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      Live Calculator
                    </span>
                  </div>

                  <div className="text-center py-4 bg-black/50 rounded-2xl border border-amber-500/20 mb-4">
                    <span className="text-[11px] text-gray-400 uppercase tracking-wider block mb-1">
                      Estimated Investment
                    </span>
                    <span className="font-cinzel text-3xl sm:text-4xl font-extrabold text-gold-bright block">
                      ${calculation.totalEstimate.toLocaleString()}
                    </span>
                    <span className="text-[11px] text-amber-300 font-mono mt-1 block">
                      ~${calculation.costPerShot.toLocaleString()} per completed shot
                    </span>
                  </div>

                  <div className="space-y-2 mb-6 text-xs font-mono">
                    <div className="flex justify-between text-gray-300">
                      <span>Total Frame Count:</span>
                      <span className="text-white font-bold">{calculation.totalFrames} frames</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Estimated Turnaround:</span>
                      <span className="text-amber-300 font-bold">~{calculation.turnaroundDays} Business Days</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Pipeline Quality:</span>
                      <span className="text-emerald-400 font-bold">100% Studio TPN Tier</span>
                    </div>
                  </div>
                </div>

                {/* Contact Lock-in Form */}
                <form onSubmit={handleSubmitQuote} className="space-y-3 pt-3 border-t border-white/10">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name / Studio Name"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-black/50 border border-white/10 text-xs text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Your Work Email (for PDF Quote) *"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-black/50 border border-white/10 text-xs text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl btn-gold-primary text-black font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Lock In Estimate & Send Brief</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-gray-500 text-center">
                    🔒 Protected under Sunrise VFX Strict Mutual NDA.
                  </p>
                </form>

              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
