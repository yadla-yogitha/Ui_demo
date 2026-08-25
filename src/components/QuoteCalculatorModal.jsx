import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calculator, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Clock, 
  Layers, 
  Wand2, 
  Scissors, 
  Compass, 
  Cpu, 
  ShieldCheck 
} from 'lucide-react';

export default function QuoteCalculatorModal({ isOpen, onClose, initialServiceId = 'prep' }) {
  const [service, setService] = useState(initialServiceId || 'prep');
  const [complexity, setComplexity] = useState('medium');
  const [frameCount, setFrameCount] = useState(120);
  const [turnaround, setTurnaround] = useState('standard');
  const [resolution, setResolution] = useState('4k-exr');
  const [submitted, setSubmitted] = useState(false);

  // Form inputs
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [projectNotes, setProjectNotes] = useState('');

  useEffect(() => {
    if (initialServiceId) {
      setService(initialServiceId);
    }
  }, [initialServiceId]);

  if (!isOpen) return null;

  const baseRatePerFrame = {
    prep: 2.2,
    roto: 1.8,
    comp: 4.5,
    matchmove: 2.8,
    'ai-videos': 2.0,
    full: 8.5
  }[service] || 2.5;

  const complexityMultiplier = {
    simple: 0.8,
    medium: 1.0,
    complex: 1.4,
    hero: 1.9
  }[complexity] || 1.0;

  const turnaroundMultiplier = {
    standard: 1.0,
    express: 1.3,
    rush: 1.6,
    sameDay: 2.0
  }[turnaround] || 1.0;

  const resolutionMultiplier = {
    '2k-prores': 1.0,
    '4k-exr': 1.25,
    '8k-master': 1.55,
    stereo: 1.85
  }[resolution] || 1.0;

  const calculatedMin = Math.round(frameCount * baseRatePerFrame * complexityMultiplier * turnaroundMultiplier * resolutionMultiplier * 0.9);
  const calculatedMax = Math.round(calculatedMin * 1.25);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-4xl bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto flex flex-col">
        
        {/* Glow Header Accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl bg-gradient-to-r from-amber-500 via-azure-500 to-indigoAcc-500" />

        {/* Modal Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 shadow-sm">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                VFX Cost & Turnaround Estimator
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Interactive estimation calculator for Hollywood film & commercial visual effects
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

        {/* Modal Body */}
        <div className="py-6 space-y-6 flex-1">
          
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 font-display">
                Estimate Request Dispatched!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{clientName || 'Partner'}</strong>. Our VFX production bidding supervisor has received your shot breakdown and will email a formal quote within 2 business hours.
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-sm mx-auto text-xs font-mono font-bold text-amber-700">
                Estimated Scope: ${calculatedMin.toLocaleString()} - ${calculatedMax.toLocaleString()} USD ({frameCount} Frames)
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-amber-600 text-white font-bold text-xs uppercase transition-colors shadow-sm"
              >
                Done
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Configurator Columns */}
              <div className="lg:col-span-7 space-y-5">
                
                {/* 1. Select Discipline */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                    1. SELECT CORE DISCIPLINE
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'prep', label: '1. Prep & Clean', icon: Wand2 },
                      { id: 'roto', label: '2. Rotoscopy', icon: Scissors },
                      { id: 'comp', label: '3. Compositing', icon: Layers },
                      { id: 'matchmove', label: '4. Matchmove', icon: Compass },
                      { id: 'ai-videos', label: '5. AI Videos', icon: Cpu },
                      { id: 'full', label: 'Full Package', icon: Sparkles },
                    ].map((s) => {
                      const Icon = s.icon;
                      const isSel = service === s.id;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setService(s.id)}
                          className={`p-2.5 rounded-xl text-left border text-xs font-bold flex items-center gap-2 transition-all ${
                            isSel
                              ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          <span>{s.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Complexity */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                    2. SHOT COMPLEXITY LEVEL
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { id: 'simple', label: 'Low' },
                      { id: 'medium', label: 'Medium' },
                      { id: 'complex', label: 'High' },
                      { id: 'hero', label: 'Hero' },
                    ].map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setComplexity(c.id)}
                        className={`p-2 rounded-xl text-center border text-xs transition-all font-bold ${
                          complexity === c.id
                            ? 'bg-azure-600 text-white border-azure-600 shadow-sm'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <div>{c.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Frame Count Slider */}
                <div>
                  <div className="flex justify-between items-center text-xs font-mono mb-2">
                    <span className="text-slate-700 font-bold uppercase">3. TOTAL SHOT FRAMES (AT 24 FPS)</span>
                    <span className="text-amber-800 font-bold text-sm bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                      {frameCount} Frames (~{(frameCount / 24).toFixed(1)}s)
                    </span>
                  </div>
                  <input
                    type="range"
                    min="24"
                    max="1000"
                    step="12"
                    value={frameCount}
                    onChange={(e) => setFrameCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1 font-medium">
                    <span>1 sec (24f)</span>
                    <span>10 sec (240f)</span>
                    <span>20 sec (480f)</span>
                    <span>40+ sec (1000f)</span>
                  </div>
                </div>

                {/* 4. Turnaround Urgency & Format */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      4. TURNAROUND SPEED
                    </label>
                    <select
                      value={turnaround}
                      onChange={(e) => setTurnaround(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-amber-500 shadow-sm font-medium"
                    >
                      <option value="standard">Standard (3-5 Days)</option>
                      <option value="express">Express (48 Hours)</option>
                      <option value="rush">Rush (24 Hours)</option>
                      <option value="sameDay">Same-Day Rush (12h)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      5. RESOLUTION & FORMAT
                    </label>
                    <select
                      value={resolution}
                      onChange={(e) => setResolution(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-amber-500 shadow-sm font-medium"
                    >
                      <option value="2k-prores">2K ProRes 4444</option>
                      <option value="4k-exr">4K DCI OpenEXR (ACEScg)</option>
                      <option value="8k-master">8K Ultra Master</option>
                      <option value="stereo">Stereoscopic 3D Dual-Eye</option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Right Summary & Lead Submission Panel */}
              <div className="lg:col-span-5 flex flex-col justify-between bg-slate-50 p-5 rounded-2xl border border-slate-200">
                
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-bold mb-2">
                    ESTIMATED BUDGET RANGE
                  </div>
                  
                  <div className="p-4 rounded-2xl bg-white border border-amber-300 mb-4 shadow-sm">
                    <div className="text-2xl sm:text-3xl font-extrabold text-gradient-gold font-mono">
                      ${calculatedMin.toLocaleString()} - ${calculatedMax.toLocaleString()}
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono mt-1 flex items-center gap-1.5 font-bold">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      <span>Est. Delivery: {turnaround === 'sameDay' ? '12 Hours' : turnaround === 'rush' ? '24 Hours' : turnaround === 'express' ? '48 Hours' : '3-5 Days'}</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Name *"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-200 focus:border-amber-500 text-xs text-slate-800 focus:outline-none shadow-sm"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Work Email (Studio / Agency) *"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-200 focus:border-amber-500 text-xs text-slate-800 focus:outline-none shadow-sm"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Company / Production Name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-200 focus:border-amber-500 text-xs text-slate-800 focus:outline-none shadow-sm"
                      />
                    </div>

                    <div>
                      <textarea
                        rows={2}
                        placeholder="Specific shot notes / Aspera link..."
                        value={projectNotes}
                        onChange={(e) => setProjectNotes(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-200 focus:border-amber-500 text-xs text-slate-800 focus:outline-none resize-none shadow-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-amber-600 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Lock In Estimate & Send Inquiry</span>
                    </button>
                  </form>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] font-mono text-slate-500 font-bold mt-3">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>NDA Protected</span>
                  </span>
                  <span>TPN Certified</span>
                </div>

              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
