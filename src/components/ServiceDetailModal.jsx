import React from 'react';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  Calculator, 
  Workflow, 
  ShieldCheck
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function ServiceDetailModal({
  serviceId,
  isOpen,
  onClose,
  onOpenQuoteWithService
}) {
  if (!isOpen || !serviceId) return null;

  const service = servicesData.find(s => s.id === serviceId) || servicesData[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto flex flex-col">
        
        {/* Glow Header Accent */}
        <div 
          className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl" 
          style={{ backgroundColor: service.accentColor }} 
        />

        {/* Modal Top Bar */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                Track #{service.number}
              </span>
              <span className="text-xs font-mono text-slate-500 font-medium">
                {service.pipelineStep}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              {service.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-semibold mt-0.5">
              {service.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="py-6 space-y-6 flex-1">
          
          {/* Overview & Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold">
                DISCIPLINE OVERVIEW
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {service.description}
              </p>

              <h4 className="text-xs font-mono uppercase tracking-wider text-azure-700 font-bold pt-2">
                CORE CAPABILITIES & SPECIALIZATIONS
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.highlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Specs Panel */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block mb-1">
                  ESTIMATED TURNAROUND
                </span>
                <div className="flex items-center gap-2 text-sm font-bold text-amber-700 font-mono">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span>{service.turnaround}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200">
                <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block mb-1">
                  DELIVERABLE FORMATS
                </span>
                <p className="text-xs text-slate-700 font-mono font-medium">
                  {service.deliverables}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200">
                <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block mb-2">
                  SOFTWARE SUITE
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {service.software.map((sw, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] font-mono text-slate-700 font-bold shadow-sm"
                    >
                      {sw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center gap-2 text-[11px] text-emerald-700 font-mono font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>TPN / MPA Security Ready</span>
              </div>
            </div>
          </div>

          {/* Workflow Pipeline Stepper */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <h4 className="text-xs font-mono uppercase tracking-wider text-indigoAcc-700 font-bold mb-3 flex items-center gap-2">
              <Workflow className="w-4 h-4 text-indigoAcc-600" />
              <span>PRODUCTION PIPELINE & QC INTEGRATION</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="text-[10px] font-mono text-slate-400 font-bold mb-1">STEP 01</div>
                <div className="text-xs font-bold text-slate-900">Plate Ingestion</div>
                <div className="text-[11px] text-slate-500 mt-1">ACEScg check & metadata verify</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="text-[10px] font-mono text-slate-400 font-bold mb-1">STEP 02</div>
                <div className="text-xs font-bold text-slate-900">Artist Execution</div>
                <div className="text-[11px] text-slate-500 mt-1">Multi-pass work & spline tracking</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="text-[10px] font-mono text-slate-400 font-bold mb-1">STEP 03</div>
                <div className="text-xs font-bold text-slate-900">Supervisor QC</div>
                <div className="text-[11px] text-slate-500 mt-1">100% zoom sub-pixel review</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="text-[10px] font-mono text-amber-700 font-bold mb-1">STEP 04</div>
                <div className="text-xs font-bold text-amber-700">Secure Delivery</div>
                <div className="text-[11px] text-slate-500 mt-1">Aspera / Signiant encrypted push</div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenQuoteWithService(service.id);
            }}
            className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-xl transition-all shadow-md flex items-center gap-2"
          >
            <Calculator className="w-4 h-4" />
            <span>Calculate Quote for {service.title}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
