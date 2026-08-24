import React, { useState } from 'react';
import { Briefcase, MapPin, ArrowRight, X, Check, Upload, Link as LinkIcon } from 'lucide-react';
import { openJobs } from '../data/studioData';
import confetti from 'canvas-confetti';

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [reelLink, setReelLink] = useState('');
  const [isApplied, setIsApplied] = useState(false);

  const handleApply = (e) => {
    e.preventDefault();
    if (!applicantEmail || !applicantName) {
      alert('Please fill in your name and email.');
      return;
    }
    setIsApplied(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#eab308', '#facc15', '#fbbf24', '#ffffff']
    });
  };

  return (
    <section id="careers" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase mb-4">
          <Briefcase className="w-3.5 h-3.5 text-amber-400" />
          <span>Join Our Global Team</span>
        </div>
        <h2 className="font-cinzel font-black text-3xl sm:text-4xl md:text-5xl text-gold-gradient uppercase tracking-wider mb-4">
          Careers at Sunrise VFX
        </h2>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Shape the future of cinema. We are always seeking passionate compositors, roto masters, tracking wizards, and AI researchers. Remote and studio-based options available worldwide.
        </p>
      </div>

      {/* Job Openings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {openJobs.map((job) => (
          <div
            key={job.id}
            className="p-6 rounded-3xl glass-panel border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 font-mono text-xs font-bold border border-amber-500/30">
                  {job.department}
                </span>
                <span className="text-xs text-gray-400 font-mono flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  {job.location}
                </span>
              </div>

              <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-gold-bright transition-colors mb-2">
                {job.title}
              </h3>

              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                {job.desc}
              </p>

              <div className="text-[11px] font-mono text-amber-200/80 bg-black/40 p-2.5 rounded-xl border border-white/5 mb-4">
                💼 Experience: {job.exp}
              </div>
            </div>

            <button
              onClick={() => {
                setSelectedJob(job);
                setIsApplied(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl glass-panel text-amber-300 hover:text-white border border-amber-500/30 hover:border-amber-400 hover:bg-amber-500/20 text-xs font-bold uppercase tracking-wider transition-all"
            >
              <span>Apply for Position</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* General Application Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-black/60 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-cinzel text-xl font-bold text-white mb-1">
            Don't see your specific role?
          </h3>
          <p className="text-xs text-gray-300">
            We are always scouting for top talent in Prep, Roto, Comp, Matchmove, and AI R&D. Send us your reel.
          </p>
        </div>
        <button
          onClick={() => {
            setSelectedJob({ title: 'General VFX Artist / TD Submission', department: 'Open Application', location: 'Global Remote' });
            setIsApplied(false);
          }}
          className="px-6 py-3 rounded-xl btn-gold-primary text-black font-bold text-xs uppercase tracking-wider shrink-0"
        >
          Submit General Reel
        </button>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg glass-panel rounded-3xl border border-amber-500/40 p-6 sm:p-8 bg-[#09090f] shadow-2xl">
            
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {isApplied ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400 text-amber-300 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="font-cinzel text-2xl font-bold text-gold-bright">
                  Application Received!
                </h3>
                <p className="text-xs text-gray-300">
                  Thank you, <span className="text-amber-300 font-semibold">{applicantName}</span>. Our VFX department supervisors will review your portfolio and reach out via <span className="text-amber-300 font-mono">{applicantEmail}</span>.
                </p>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="w-full py-2.5 rounded-xl btn-gold-primary text-black font-bold text-xs uppercase tracking-wider mt-4"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-bold">
                    Job Application
                  </span>
                  <h3 className="font-cinzel text-xl font-bold text-white mt-1">
                    {selectedJob.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-mono">
                    Department: {selectedJob.department} • {selectedJob.location}
                  </p>
                </div>

                <form onSubmit={handleApply} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-gray-300 font-medium mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@vfxstudio.com"
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-1">Showreel / Portfolio URL (Vimeo / Artstation / YouTube) *</label>
                    <div className="relative">
                      <input
                        type="url"
                        required
                        placeholder="https://vimeo.com/your-showreel"
                        value={reelLink}
                        onChange={(e) => setReelLink(e.target.value)}
                        className="w-full p-2.5 pl-8 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none font-mono"
                      />
                      <LinkIcon className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-3" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-1">Upload Resume / CV (PDF)</label>
                    <div className="p-3 border border-dashed border-amber-500/40 rounded-xl text-center text-gray-400 hover:text-amber-300 hover:border-amber-400 transition-colors cursor-pointer bg-black/30">
                      <Upload className="w-4 h-4 mx-auto mb-1 text-amber-400" />
                      <span>Drag & drop or browse PDF file</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl btn-gold-primary text-black font-bold uppercase tracking-wider text-xs shadow-lg mt-2"
                  >
                    Submit Application & Reel
                  </button>
                </form>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
