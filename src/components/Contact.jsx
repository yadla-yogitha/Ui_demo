import React, { useState } from 'react';
import { Sparkles, Mail, Phone, MapPin, Send, CheckCircle2, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact({ defaultService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studio: '',
    service: defaultService || 'comp',
    projectType: 'Feature Film',
    shotCount: '1-5 Shots',
    deadline: '2-3 Weeks',
    message: '',
    ndaRequired: true
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.name) {
      alert('Please fill in required fields.');
      return;
    }
    setIsSubmitted(true);
    confetti({
      particleCount: 90,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#eab308', '#facc15', '#fbbf24', '#ffffff']
    });
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase mb-4">
          <Mail className="w-3.5 h-3.5 text-amber-400" />
          <span>Get in Touch</span>
        </div>
        <h2 className="font-cinzel font-black text-3xl sm:text-4xl md:text-5xl text-gold-gradient uppercase tracking-wider mb-4">
          Contact Sunrise VFX
        </h2>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Ready to bring your cinematic vision to reality? Contact our global production team for shot evaluations, bids, and secure plate submissions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Form (7 cols) */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-10 border border-amber-500/30 shadow-2xl relative">
          {isSubmitted ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-400 text-amber-300 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 stroke-[3]" />
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-gold-bright">
                Inquiry Dispatched!
              </h3>
              <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-amber-300 font-semibold">{formData.name}</span>. An assigned VFX Producer from our <span className="text-amber-300 font-medium">Global Production Hub</span> will evaluate your requirements and contact you at <span className="text-amber-300 font-mono">{formData.email}</span> within 2 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl btn-gold-outline text-xs uppercase tracking-wider font-bold"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 rounded-xl bg-black/50 border border-white/10 text-xs text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                    Studio / Production Company *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Pictures / Agency"
                    value={formData.studio}
                    onChange={(e) => setFormData({ ...formData, studio: e.target.value })}
                    className="w-full p-3 rounded-xl bg-black/50 border border-white/10 text-xs text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="producer@studio.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 rounded-xl bg-black/50 border border-white/10 text-xs text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                    Primary Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full p-3 rounded-xl bg-black/50 border border-white/10 text-xs text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="prep" className="bg-[#121218]">1. Prep & Clean-up (Rig/Wire Removal)</option>
                    <option value="roto" className="bg-[#121218]">2. Rotoscopy (Silhouette & Hair)</option>
                    <option value="comp" className="bg-[#121218]">3. Comp (Deep EXR & CG Integration)</option>
                    <option value="matchmove" className="bg-[#121218]">4. Matchmove (3D Tracking & Lens Solve)</option>
                    <option value="ai-videos" className="bg-[#121218]">5. AI Videos & Neural VFX</option>
                    <option value="full-package" className="bg-[#121218]">Full End-to-End VFX Package</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full p-3 rounded-xl bg-black/50 border border-white/10 text-xs text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="Feature Film" className="bg-[#121218]">Feature Film</option>
                    <option value="Episodic Series" className="bg-[#121218]">Episodic Series</option>
                    <option value="Commercial" className="bg-[#121218]">Commercial</option>
                    <option value="Music Video" className="bg-[#121218]">Music Video</option>
                    <option value="Game Cinematic" className="bg-[#121218]">Game Cinematic</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                    Estimated Shots
                  </label>
                  <select
                    value={formData.shotCount}
                    onChange={(e) => setFormData({ ...formData, shotCount: e.target.value })}
                    className="w-full p-3 rounded-xl bg-black/50 border border-white/10 text-xs text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="1-5 Shots" className="bg-[#121218]">1 - 5 Shots</option>
                    <option value="6-20 Shots" className="bg-[#121218]">6 - 20 Shots</option>
                    <option value="20-50 Shots" className="bg-[#121218]">20 - 50 Shots</option>
                    <option value="50+ Shots" className="bg-[#121218]">50+ Shots (Full Show)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                    Delivery Deadline
                  </label>
                  <select
                    value={formData.deadline}
                    onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                    className="w-full p-3 rounded-xl bg-black/50 border border-white/10 text-xs text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="Rush 48h" className="bg-[#121218]">Rush (48 Hours)</option>
                    <option value="1 Week" className="bg-[#121218]">1 Week</option>
                    <option value="2-3 Weeks" className="bg-[#121218]">2 - 3 Weeks</option>
                    <option value="1+ Months" className="bg-[#121218]">1+ Months</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                  Shot Breakdown & Brief / Plate Links
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your VFX requirements, plate formats (e.g. 4K ProRes 4444 / EXR), and any download links (Aspera, Frame.io, Dropbox)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 rounded-xl bg-black/50 border border-white/10 text-xs text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="ndaCheckbox"
                  checked={formData.ndaRequired}
                  onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                  className="w-4 h-4 rounded bg-black/50 border-white/20 text-amber-400 focus:ring-0 cursor-pointer"
                />
                <label htmlFor="ndaCheckbox" className="text-xs text-gray-300 cursor-pointer">
                  Request Mutual Non-Disclosure Agreement (NDA) before sharing raw assets.
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl btn-gold-primary text-black font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit VFX Shot Inquiry</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Info Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Fast Response Guarantee */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-500/20 via-yellow-500/10 to-black/60 border border-amber-500/40">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-black flex items-center justify-center font-bold">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-cinzel font-bold text-white text-base">TPN Tier 1 Security</h4>
                <p className="text-xs text-amber-300/90 font-mono">100% Confidential Plate Handling</p>
              </div>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              We operate encrypted, air-gapped workstations compliant with MPAA & Trusted Partner Network guidelines.
            </p>
          </div>

          {/* Direct Producer Hotline */}
          <div className="p-6 rounded-3xl glass-panel border border-white/10 space-y-3">
            <h4 className="font-cinzel font-bold text-white text-base">Direct Studio Contacts</h4>
            
            <div className="flex items-start gap-3 text-xs text-gray-300">
              <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-white">General Inquiries & Bidding:</div>
                <a href="mailto:info@sunrisevfx.com" className="font-mono text-amber-300 hover:underline">info@sunrisevfx.com</a>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs text-gray-300">
              <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-white">Studio Hotline:</div>
                <div className="font-mono text-gray-300">+1 (323) 555-0192</div>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs text-gray-300">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-white">Studio Address:</div>
                <div className="leading-relaxed">No. 2-6-32, A Block 104, SVB Square, Vijayawada, Krishna district, Andhra Pradesh, India, 521139</div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
