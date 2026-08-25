import React, { useState } from 'react';
import { 
  Workflow, 
  CheckCircle2, 
  Layers, 
  Wand2, 
  Compass, 
  Cpu, 
  Send 
} from 'lucide-react';

export default function PipelineSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      stepNum: "01",
      title: "Ingest & Color Calibration",
      subtitle: "ACEScg / OCIO Linear Pipeline",
      icon: Layers,
      color: "text-amber-600",
      badge: "bg-amber-50 text-amber-800 border-amber-200",
      desc: "All raw plates (ARRI RAW, RED RAW, Sony Venice) are ingested into our air-gapped system, validated against sensor distortion metadata, and conformed to ACEScg scene-linear color space.",
      deliverables: ["Verified ShotGrid Database", "ACEScg Plate Conforms", "Lens Calibration Grids"],
      duration: "Hour 0 - 2"
    },
    {
      stepNum: "02",
      title: "Matchmove & Spatial Solving",
      subtitle: "3D Camera & Deformable Tracking",
      icon: Compass,
      color: "text-emerald-600",
      badge: "bg-emerald-50 text-emerald-800 border-emerald-200",
      desc: "Our tracking TDs solve 3D camera paths in 3DEqualizer and SynthEyes with sub-0.3px RMS precision, calculating anamorphic distortion ST-maps and aligning LiDAR survey geometry.",
      deliverables: ["Maya / Nuke 3D Cameras", "Lens Distortion ST-Maps", "Ground & Locator Meshes"],
      duration: "Hour 2 - 12"
    },
    {
      stepNum: "03",
      title: "Roto, Prep & Clean Plate Gen",
      subtitle: "Sub-Pixel Mattes & Rig Paint-Out",
      icon: Wand2,
      color: "text-sky-600",
      badge: "bg-sky-50 text-sky-800 border-sky-200",
      desc: "Simultaneous execution of wire removals, safety harness cleanups, marker patching, and intricate organic hair/motion blur rotoscopy in Silhouette FX and Mocha Pro.",
      deliverables: ["Clean Plates with Grain Profiles", "Multi-Pass Alpha Mattes", "Silhouette XML Splines"],
      duration: "Hour 8 - 24"
    },
    {
      stepNum: "04",
      title: "Look Dev, Comp & Neural AI",
      subtitle: "DeepEXR Multi-Pass Integration",
      icon: Cpu,
      color: "text-indigo-600",
      badge: "bg-indigo-50 text-indigo-800 border-indigo-200",
      desc: "Multi-pass 3D CG integration, digital matte painting, volumetric atmospheric FX, and proprietary neural AI detail enhancement assembled in Foundry NukeX.",
      deliverables: ["Deep Composite Masters", "Pre-Comps & Breakdowns", "Layered EXR Archives"],
      duration: "Hour 24 - 48"
    },
    {
      stepNum: "05",
      title: "Supervisor QC & Secure Push",
      subtitle: "100% Zoom Inspection & Aspera Transfer",
      icon: Send,
      color: "text-amber-600",
      badge: "bg-amber-50 text-amber-800 border-amber-200",
      desc: "Every shot undergoes rigorous 100% zoom inspection by senior VFX supervisors before delivery via encrypted 100 Gbps Aspera / Signiant channels to the client.",
      deliverables: ["ProRes 4444XQ / DPX Deliverables", "QC Sign-Off Certificates", "Archive Data Packs"],
      duration: "Final Release"
    }
  ];

  return (
    <section className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold mb-3 backdrop-blur-md">
            <Workflow className="w-3.5 h-3.5 text-cyan-400" />
            <span>STANDARDIZED STUDIO WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white mb-4 drop-shadow-[0_2px_15px_rgba(0,0,0,0.95)]">
            Our 5-Stage <span className="text-cyan-400">Production Pipeline</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-100 font-medium drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
            A battle-tested visual effects workflow engineered for high-volume delivery, sub-pixel accuracy, and absolute data security.
          </p>
        </div>

        {/* Step Selector Horizontal Strip in White Glass Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left transition-all border-2 ${
                  isActive 
                    ? 'bg-white border-amber-500 shadow-xl scale-[1.02]' 
                    : 'bg-white/90 backdrop-blur-md border-white/80 hover:bg-white text-slate-600 shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-extrabold ${isActive ? 'text-amber-700' : 'text-slate-400'}`}>
                    STAGE {s.stepNum}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? s.color : 'text-slate-400'}`} />
                </div>
                <div className="text-xs font-bold text-slate-900 line-clamp-1">
                  {s.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown Card in Pure White Container */}
        {(() => {
          const cur = steps[activeStep];
          const Icon = cur.icon;
          return (
            <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border-2 border-white/90 relative overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.5)] text-slate-900">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full font-mono text-xs font-bold border ${cur.badge}`}>
                      STAGE {cur.stepNum} OF 05
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-medium">
                      Timeline: {cur.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display flex items-center gap-3">
                    <Icon className={`w-7 h-7 ${cur.color}`} />
                    <span>{cur.title}</span>
                  </h3>

                  <div className="text-xs font-mono uppercase text-slate-500 font-bold">
                    {cur.subtitle}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed pt-1 font-normal">
                    {cur.desc}
                  </p>

                  <div className="pt-3">
                    <div className="text-xs font-mono uppercase text-amber-700 font-bold mb-2">
                      KEY STAGE DELIVERABLES:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {cur.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 shadow-sm">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stage Navigator Quick Switch */}
                <div className="lg:col-span-4 flex flex-col justify-center items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-inner">
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-gradient-gold font-mono mb-1">
                      {cur.stepNum}
                    </div>
                    <div className="text-xs text-slate-500 uppercase font-mono font-bold tracking-widest">
                      ACTIVE WORKFLOW NODE
                    </div>
                  </div>

                  <div className="w-full flex items-center justify-between pt-4 border-t border-slate-200">
                    <button
                      disabled={activeStep === 0}
                      onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                      className="px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 shadow-sm"
                    >
                      ← Previous
                    </button>

                    <button
                      disabled={activeStep === steps.length - 1}
                      onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                      className="px-3.5 py-2 rounded-lg bg-slate-900 text-white text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-amber-600 shadow-sm"
                    >
                      Next Step →
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
}
