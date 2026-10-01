import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Shield, User, Building2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

const WEBHOOK_URL = import.meta.env.VITE_EXCEL_WEBHOOK_URL || '';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.company.trim() || !formData.email.trim()) {
      setErrorMessage('Please fill in all 3 required fields: Name, Production / Company, and Business Email.');
      return;
    }

    if (!WEBHOOK_URL) {
      setErrorMessage('VITE_EXCEL_WEBHOOK_URL is not set in your .env file. Please add your SheetDB or Formspree endpoint.');
      return;
    }

    if (WEBHOOK_URL.includes('excel.cloud.microsoft') || WEBHOOK_URL.includes('onedrive.live.com')) {
      setErrorMessage(
        'The URL in .env is an interactive OneDrive viewer link, which browsers block with CORS. To save directly to your spreadsheet, please use your SheetDB endpoint (https://sheetdb.io/api/v1/...) or Formspree endpoint (https://formspree.io/f/...) in your .env file.'
      );
      return;
    }

    setIsSubmitting(true);

    const isSheetDB = WEBHOOK_URL.includes('sheetdb.io');
    const payload = isSheetDB
      ? {
          data: [
            {
              Name: formData.name.trim(),
              "Production or Company": formData.company.trim(),
              "Business Email": formData.email.trim(),
              Date: new Date().toLocaleString()
            }
          ]
        }
      : {
          name: formData.name.trim(),
          company: formData.company.trim(),
          email: formData.email.trim(),
          Name: formData.name.trim(),
          "Production or Company": formData.company.trim(),
          "Business Email": formData.email.trim(),
          submittedAt: new Date().toISOString()
        };

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorText = await response.text().catch(() => '');
        throw new Error(`Server returned HTTP ${response.status}: ${errorText || response.statusText || 'Submission failed'}`);
      }

      setIsSubmitted(true);
      confetti({
        particleCount: 90,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#eab308', '#facc15', '#fbbf24', '#ffffff']
      });
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMessage(
        err.message || 'Failed to send data to the webhook. Please check your VITE_EXCEL_WEBHOOK_URL.'
      );
    } finally {
      setIsSubmitting(false);
    }
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
          Ready to bring your cinematic vision to reality? Enter your details below to get connected with our studio team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form (7 cols) */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-10 border border-amber-500/30 shadow-2xl relative">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-400 text-amber-300 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 stroke-[3]" />
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-gold-bright">
                Inquiry Dispatched!
              </h3>
              
              <div className="max-w-md mx-auto p-4 rounded-2xl bg-black/60 border border-amber-500/30 text-left text-xs space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold mb-2">
                  Captured Details (3 Columns):
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-gray-400">1. Name:</span>
                  <span className="text-white font-medium">{formData.name}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-gray-400">2. Production / Company:</span>
                  <span className="text-white font-medium">{formData.company}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">3. Business Email:</span>
                  <span className="text-amber-300 font-mono">{formData.email}</span>
                </div>
              </div>

              <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                Your inquiry has been sent directly to the configured Excel endpoint.
              </p>

              <div className="pt-2 flex justify-center">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', company: '', email: '' });
                  }}
                  className="px-6 py-2.5 rounded-xl btn-gold-primary text-black text-xs uppercase tracking-wider font-bold shadow-md hover:scale-[1.02] transition-transform cursor-pointer"
                >
                  Submit Another
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-500/15 border border-red-500/40 text-red-200 text-xs flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <span className="font-bold">Error:</span> {errorMessage}
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-amber-400" />
                  <span>Name *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jane Doe / Christopher Nolan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3.5 rounded-xl bg-black/50 border border-white/10 text-sm text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Production or Company *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Pictures / Agency"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full p-3.5 rounded-xl bg-black/50 border border-white/10 text-sm text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>Business Email *</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="producer@studio.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3.5 rounded-xl bg-black/50 border border-white/10 text-sm text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-all"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl btn-gold-primary text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] transition-all cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending to Webhook...' : 'Submit Inquiry'}</span>
                </button>
              </div>
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
                <div className="font-bold text-white">General Inquiries:</div>
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
