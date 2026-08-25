import React, { useState } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Upload 
} from 'lucide-react';

export default function CareerApplyModal({ job, isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [resumeFileName, setResumeFileName] = useState('');

  if (!isOpen || !job) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResumeSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto flex flex-col">
        
        {/* Glow Header */}
        <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl bg-indigoAcc-500" />

        {/* Modal Top */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 shrink-0">
          <div>
            <span className="text-xs font-mono font-bold text-indigoAcc-700 uppercase tracking-wider block mb-0.5">
              Job Application • {job.department}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              {job.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-6 flex-1">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 font-display">
                Application Received!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{name}</strong>! Our VFX talent recruitment team has received your application for <em>{job.title}</em>. We will review your showreel and get back to you within 3 business days.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-amber-600 text-white font-bold text-xs uppercase shadow-sm"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-indigoAcc-500 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@artist.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-indigoAcc-500 shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 019-2834"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-indigoAcc-500 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5">
                    Showreel / Portfolio URL *
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://vimeo.com/your-reel"
                    value={portfolioUrl}
                    onChange={(e) => setPortfolioUrl(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-indigoAcc-500 shadow-sm"
                  />
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5">
                  Resume / CV (PDF, DOCX)
                </label>
                <div className="relative border border-dashed border-slate-300 rounded-xl p-4 text-center bg-slate-50 hover:bg-slate-100 cursor-pointer">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleResumeSelect}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-700">
                    <Upload className="w-4 h-4 text-indigoAcc-600" />
                    <span>{resumeFileName ? `Selected: ${resumeFileName}` : 'Upload your resume or drag here'}</span>
                  </div>
                </div>
              </div>

              {/* Cover Note */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5">
                  Cover Note / Software Proficiency
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your favorite VFX shot, tools used (Nuke, 3DEqualizer, Silhouette, ComfyUI), and why you want to join Sunrise..."
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-indigoAcc-500 resize-none shadow-sm"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-indigoAcc-600 transition-all shadow-md flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Application</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
