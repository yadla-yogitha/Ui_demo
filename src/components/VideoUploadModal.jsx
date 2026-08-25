import React, { useState, useRef } from 'react';
import { 
  X, 
  Upload, 
  Video, 
  Link2, 
  Sparkles, 
  Check, 
  Film, 
  Play, 
  AlertCircle,
  FileVideo
} from 'lucide-react';

export const videoPresets = [
  {
    id: 'preset-cyber',
    name: 'Cyberpunk Metropolis',
    tag: 'Sci-Fi / Neon',
    desc: 'High-tech neon cityscape with futuristic lighting',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-charts-and-data-31913-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'preset-nebula',
    name: 'Deep Cosmic Nebula',
    tag: 'Cosmic / Space',
    desc: 'Volumetric stellar clouds & deep galactic particle drift',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-flying-through-starfields-and-nebulae-41551-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'preset-gold',
    name: 'Sunrise Golden Particles',
    tag: 'Prestige / Gold',
    desc: 'Radiant golden embers & cinematic anamorphic flares',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-gold-particles-floating-in-the-air-42999-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'preset-ai',
    name: 'Neural AI Hologram Grid',
    tag: 'AI / Neural VFX',
    desc: 'Dynamic 3D point cloud & neural tensor flow',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-futuristic-technology-background-with-network-lines-41544-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80'
  }
];

export default function VideoUploadModal({
  isOpen,
  onClose,
  currentVideoSrc,
  onApplyVideo,
  activePresetId
}) {
  const [selectedVideo, setSelectedVideo] = useState(currentVideoSrc);
  const [selectedName, setSelectedName] = useState('Current Video');
  const [customUrl, setCustomUrl] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [uploadFileName, setUploadFileName] = useState('');
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleFile = (file) => {
    if (file && file.type.startsWith('video/')) {
      const objectUrl = URL.createObjectURL(file);
      setSelectedVideo(objectUrl);
      setSelectedName(`Uploaded: ${file.name}`);
      setUploadFileName(file.name);
    } else {
      alert('Please select a valid video file (.mp4, .webm, .mov, etc.)');
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleApplyCustomUrl = (e) => {
    e.preventDefault();
    if (customUrl.trim()) {
      setSelectedVideo(customUrl.trim());
      setSelectedName('Custom Video URL');
      setUploadFileName('');
    }
  };

  const handleSaveAndApply = () => {
    onApplyVideo(selectedVideo, selectedName);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-3xl glass-panel rounded-3xl border border-amber-500/30 p-6 sm:p-8 shadow-2xl shadow-black overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Glow accent header */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-amber-400 to-purple-500" />
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shadow-glow-gold">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <span>Background Video Manager</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  Live Canvas
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Upload your own video footage, choose cinematic studio presets, or input a custom stream
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto py-5 space-y-6 flex-1 pr-1">
          
          {/* Section 1: Upload Your Own Video (Primary Feature) */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-amber-300 mb-2 flex items-center gap-1.5">
              <Upload className="w-3.5 h-3.5" />
              <span>1. Upload Custom Video File (MP4, WEBM, MOV)</span>
            </label>

            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`relative border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 ${
                dragActive 
                  ? 'border-amber-400 bg-amber-500/15 shadow-glow-gold scale-[1.01]' 
                  : 'border-white/15 bg-obsidian-900/60 hover:border-amber-400/50 hover:bg-obsidian-850'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                onChange={(e) => e.target.files && handleFile(e.target.files[0])}
                className="hidden"
              />

              <div className="flex flex-col items-center justify-center gap-3">
                <div className="p-3.5 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  <FileVideo className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    {uploadFileName ? (
                      <span className="text-amber-300 font-mono">Selected: {uploadFileName}</span>
                    ) : (
                      <>Drag and drop your video here, or <span className="text-amber-400 underline">browse files</span></>
                    )}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Supports 1080p / 4K MP4, WEBM, QuickTime MOV (plays locally in real-time)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Studio Cinematic Presets */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-cyan-300 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>2. Or Select a Studio Cinematic VFX Loop</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {videoPresets.map((preset) => {
                const isSelected = selectedVideo === preset.url;
                return (
                  <button
                    key={preset.id}
                    onClick={() => {
                      setSelectedVideo(preset.url);
                      setSelectedName(preset.name);
                      setUploadFileName('');
                    }}
                    className={`text-left p-3 rounded-2xl border transition-all flex items-start gap-3 relative overflow-hidden group ${
                      isSelected
                        ? 'border-amber-400 bg-amber-500/15 shadow-glow-gold'
                        : 'border-white/10 bg-obsidian-900/80 hover:border-white/20 hover:bg-obsidian-850'
                    }`}
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-obsidian-950 shrink-0 relative border border-white/10">
                      <img 
                        src={preset.thumbnail} 
                        alt={preset.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Play className="w-4 h-4 text-white drop-shadow" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-100 truncate group-hover:text-amber-300">
                          {preset.name}
                        </span>
                        {isSelected && (
                          <span className="p-1 rounded-full bg-amber-400 text-obsidian-950">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                        )}
                      </div>
                      <span className="inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mt-0.5">
                        {preset.tag}
                      </span>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                        {preset.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 3: Direct Video URL */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-2 flex items-center gap-1.5">
              <Link2 className="w-3.5 h-3.5" />
              <span>3. Or Paste Direct Video URL</span>
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                placeholder="https://example.com/cinematic-reel.mp4"
                value={customUrl}
                onChange={(e) => setCustomUrl(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 focus:border-amber-400 focus:outline-none text-xs text-slate-200 placeholder:text-slate-500 font-mono"
              />
              <button
                type="button"
                onClick={handleApplyCustomUrl}
                className="px-4 py-2.5 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 border border-white/20 text-xs font-bold text-slate-200 transition-colors"
              >
                Set URL
              </button>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between shrink-0">
          <div className="text-xs text-slate-400">
            Selected: <strong className="text-amber-300">{selectedName}</strong>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-xl transition-colors"
            >
              Cancel
            </button>

            <button
              onClick={handleSaveAndApply}
              className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-obsidian-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 rounded-xl transition-all shadow-glow-gold flex items-center gap-2"
            >
              <Check className="w-4 h-4 text-obsidian-950" />
              <span>Apply Background Video</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
