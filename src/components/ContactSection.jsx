import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Building2 
} from 'lucide-react';

export default function ContactSection({ onOpenQuote }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'prep',
    budget: '$5k - $25k',
    message: '',
    hasNda: true,
  });

  const studioLocations = [
    {
      city: 'Los Angeles, USA',
      role: 'Client Relations & Creative Direction',
      address: '8400 Wilshire Blvd, Beverly Hills, CA 90211',
      phone: '+1 (310) 555-0199',
      tz: 'PST (UTC-8)'
    },
    {
      city: 'London, UK',
      role: 'European Production Hub',
      address: '42 Wardour St, Soho, London W1D 6PN',
      phone: '+44 20 7946 0912',
      tz: 'GMT (UTC+0)'
    },
    {
      city: 'Mumbai, India',
      role: '24/7 Core VFX & Roto/Prep Center',
      address: 'Film City Complex, Goregaon East, Mumbai 400065',
      phone: '+91 22 2840 5000',
      tz: 'IST (UTC+5:30)'
    },
    {
      city: 'Vancouver, Canada',
      role: 'Comp & AI Research Lab',
      address: '1055 W Georgia St, Vancouver, BC V6E 3P3',
      phone: '+1 (604) 555-0144',
      tz: 'PST (UTC-8)'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-12 lg:py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-mono font-bold mb-3 backdrop-blur-md">
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>START A PROJECT WITH US</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white mb-4 drop-shadow-[0_2px_15px_rgba(0,0,0,0.95)]">
            Contact <span className="text-amber-400">Sunrise VFX Studio</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-100 font-medium drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
            Have a feature film sequence, commercial spot, or high-volume episodic roto/prep pipeline requirement? Send us a project brief or schedule a review.
          </p>
        </div>

        {/* Main Grid: Form + Studio Offices */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 glass-panel-light rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-luxury relative">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Direct Project Inquiry
              </h3>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Bidding Team Active</span>
              </span>
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 font-display">
                  Project Brief Received!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. A dedicated VFX bidding producer from Sunrise will review your specifications and reply with a secure NDA and formal shot breakdown within 2 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase hover:bg-amber-600 transition-colors shadow-sm"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Christopher Nolan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-amber-500 shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="producer@studio.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-amber-500 shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1.5">
                      Production / Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Paramount / Agency"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-amber-500 shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1.5">
                      Primary Service Needed *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-amber-500 shadow-sm"
                    >
                      <option value="prep">1. Prep & Clean-Up (Rig/Wire Paint Out)</option>
                      <option value="roto">2. Rotoscopy (Organic & Hair Mattes)</option>
                      <option value="comp">3. Compositing (Multi-Pass CG / ACES)</option>
                      <option value="matchmove">4. Matchmove (3D Camera Solving)</option>
                      <option value="ai-videos">5. AI Videos (Neural VFX / NeRF)</option>
                      <option value="full">Full Turnkey VFX Package</option>
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-700 font-bold mb-1.5">
                    Project Scope / Shot Details / Aspera Link
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe frame count, shot complexity, delivery deadlines, and any specific resolution/color space requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-amber-500 shadow-sm resize-none"
                  />
                </div>

                {/* NDA Protection Checkbox */}
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="ndaCheck"
                    checked={formData.hasNda}
                    onChange={(e) => setFormData({ ...formData, hasNda: e.target.checked })}
                    className="w-4 h-4 rounded border-slate-300 bg-white text-amber-600 focus:ring-0 cursor-pointer"
                  />
                  <label htmlFor="ndaCheck" className="text-xs text-slate-700 font-medium flex items-center gap-1.5 cursor-pointer">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Please send countersigned mutual NDA prior to plate transfer</span>
                  </label>
                </div>

                {/* Submit Action */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-amber-600 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Dispatch Project Brief to VFX Producers</span>
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Right Global Studios (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel-light p-6 rounded-3xl border border-slate-200 shadow-luxury">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-700 font-bold mb-3">
                <Building2 className="w-4 h-4" />
                <span>GLOBAL VFX STUDIO NETWORK</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Round-the-clock production pipeline operating across 4 major production hubs with dedicated client supervisors in North America, Europe, and Asia.
              </p>

              <div className="space-y-3">
                {studioLocations.map((loc, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-600" />
                        <span>{loc.city}</span>
                      </span>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200 shadow-sm">
                        {loc.tz}
                      </span>
                    </div>
                    <div className="text-[11px] text-azure-700 font-bold">{loc.role}</div>
                    <div className="text-[11px] text-slate-500">{loc.address}</div>
                    <div className="text-[11px] font-mono text-slate-700 font-bold pt-0.5">{loc.phone}</div>
                  </div>
                ))}
              </div>

              {/* Direct Email Strip */}
              <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500 font-medium">General Inquiries:</span>
                <a href="mailto:contact@sunrisevfxstudio.com" className="text-amber-700 font-bold hover:underline">
                  contact@sunrisevfxstudio.com
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
