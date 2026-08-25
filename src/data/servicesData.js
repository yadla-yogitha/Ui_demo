export const servicesData = [
  {
    id: "prep",
    number: "01",
    title: "Prep & Clean-Up",
    subtitle: "Digital Clean-Up, Rig Removal & Plate Reconstruction",
    color: "gold",
    accentColor: "#eab308",
    badge: "High Precision",
    description: "Flawless removal of wires, rigs, safety harnesses, markers, and unwanted artifacts. We generate pixel-accurate clean plates and reconstruct occluded background geometry with faithful camera grain and noise response.",
    highlights: [
      "Sub-pixel wire, harness & motion-rig paint out",
      "Marker tracking & complex occlusion restoration",
      "Dynamic background patch generation & camera projection",
      "Dust busting, scratch removal & anamorphic flare cleanup",
      "Beauty retouching, cosmetic cleanup & skin-tone de-aging",
      "Full 32-bit linear EXR color & matched grain pipeline"
    ],
    software: ["Foundry Nuke", "Silhouette FX", "Adobe Photoshop", "Mocha Pro", "Boris FX"],
    turnaround: "24 - 48 Hours",
    deliverables: "Layered OpenEXR (ACEScg / OCIO), Clean Plates, Mattes, Grain Passes",
    pipelineStep: "Stage 02 - Core Ingestion & Plate Stabilization",
    comparison: {
      title: "Action Sequence Wire & Rig Paint-Out",
      beforeTag: "RAW PRODUCTION PLATE",
      afterTag: "SUNRISE CLEAN MASTER",
      beforeInfo: "3-point stunt wire rig + tracking markers on wall",
      afterInfo: "Complete rig removal + photoreal background texture restoration",
      beforeImg: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      afterImg: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80"
    }
  },
  {
    id: "roto",
    number: "02",
    title: "Rotoscopy",
    subtitle: "Pixel-Perfect Mattes & Organic Silhouette Extraction",
    color: "cyan",
    accentColor: "#06b6d4",
    badge: "Sub-Pixel Accuracy",
    description: "Industry-standard rotoscopy with articulation for organic characters, intricate hair strands, rapid motion blur, hard-surface props, and stereoscopic 3D workflows with minimal spline count.",
    highlights: [
      "Organic character, garment & anatomical articulation",
      "Sub-pixel fine hair, fur & feather edge isolation",
      "High-velocity motion blur extraction & velocity mattes",
      "Hard-surface prop, vehicle & mechanical rotomation",
      "Stereoscopic 3D dual-eye matched convergence mattes",
      "Temporal spline coherence with flicker-free playback"
    ],
    software: ["Silhouette FX", "Mocha Pro", "Foundry Nuke", "Adobe After Effects"],
    turnaround: "12 - 24 Hours",
    deliverables: "Multi-channel Alpha Mattes, Spline XMLs, Nuke Roto Nodes, Silhouette Projects",
    pipelineStep: "Stage 02 - Matte Isolation & Edge Extraction",
    comparison: {
      title: "Complex Motion Actor Isolation with Motion Blur",
      beforeTag: "RAW CINEMA FOOTAGE",
      afterTag: "PIXEL-ACCURATE MATTE",
      beforeInfo: "High-speed fight choreography with heavy motion blur",
      afterInfo: "Isolated alpha matte with sub-pixel edge details & motion vectors",
      beforeImg: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
      afterImg: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80"
    }
  },
  {
    id: "comp",
    number: "03",
    title: "Compositing",
    subtitle: "Photorealistic 2D/3D Look Dev & Multi-Pass CG Integration",
    color: "amethyst",
    accentColor: "#8b5cf6",
    badge: "ACEScg Pipeline",
    description: "Seamless harmonization of live-action cinematography with multi-pass 3D CG renders, deep compositing, digital environment extensions, advanced chroma keying, and cinematic lighting integration.",
    highlights: [
      "Deep compositing (DeepEXR) with volumetric depth sorting",
      "Multi-Pass CG integration (Beauty, Diffuse, Specular, Cryptomatte)",
      "High-fidelity Blue/Green screen keying & despill suppression",
      "2.5D / 3D Digital Matte Painting & Set Extensions",
      "Atmospheric FX: volumetric smoke, embers, fire, rain & fog",
      "ACEScg / OCIO color fidelity with optical lens aberrations"
    ],
    software: ["Foundry NukeX", "Autodesk Flame", "Blackmagic Fusion", "Unreal Engine Compositor"],
    turnaround: "48 - 72 Hours",
    deliverables: "Final Composite Masters (ProRes 4444XQ / DPX / EXR), Pre-comps, QC Breakdown",
    pipelineStep: "Stage 04 - Final Look Development & Master Assembly",
    comparison: {
      title: "Sci-Fi Metropolis Environment & CG Ship Integration",
      beforeTag: "STUDIO GREEN SCREEN",
      afterTag: "FINAL COMPOSITED MASTER",
      beforeInfo: "Actor on green screen treadmill with studio lighting",
      afterInfo: "Photoreal cyberpunk cityscape, atmospheric haze & interactive lighting",
      beforeImg: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80",
      afterImg: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80"
    }
  },
  {
    id: "matchmove",
    number: "04",
    title: "Matchmove",
    subtitle: "High-Precision 3D Camera, Object & Body Tracking",
    color: "emerald",
    accentColor: "#10b981",
    badge: "< 0.3px Solve Error",
    description: "Reconstructing real-world camera trajectory, optical lens distortion profiles, rigid/deformable object tracking, and LiDAR set survey alignments to anchor CG assets with zero slippage.",
    highlights: [
      "3D Camera tracking for complex handheld, drone & crane shots",
      "Anamorphic lens calibration & dynamic distortion profiles",
      "Deformable character body matchmation & facial tracking",
      "LiDAR point cloud & survey data alignment",
      "Rigid object & moving vehicle trajectory solves",
      "Seamless 3D scene exports for Maya, Houdini, Unreal & Nuke"
    ],
    software: ["3DEqualizer", "SynthEyes", "PFTrack", "Autodesk Maya", "Blender 3D"],
    turnaround: "24 - 48 Hours",
    deliverables: "Maya / Houdini / FBX / Nuke 3D Cameras, Distortion St-maps, Tracked Geo Rigs",
    pipelineStep: "Stage 01 - Spatial Calibration & 3D Tracking",
    comparison: {
      title: "High-Speed Dynamic Drone Camera 3D Solve",
      beforeTag: "RAW CAMERA FOOTAGE",
      afterTag: "3D CAMERA & LOCATOR MESH",
      beforeInfo: "Fast sweeping handheld drone footage with motion blur",
      afterInfo: "Solved 3D camera path with ground plane and locator point cloud",
      beforeImg: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1200&q=80",
      afterImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
    }
  },
  {
    id: "ai-videos",
    number: "05",
    title: "AI Videos",
    subtitle: "Generative AI VFX, Neural Upscaling & Synthetic Media",
    color: "gradient",
    accentColor: "#a855f7",
    badge: "Next-Gen Neural VFX",
    description: "Pioneering the synthesis of traditional Hollywood VFX craftsmanship with cutting-edge generative video pipelines, neural frame interpolation, AI-assisted inpainting, and 8K super-resolution.",
    highlights: [
      "Generative video synthesis & rapid cinematic concept creation",
      "Neural 8K super-resolution, detail injection & denoise",
      "AI temporal frame interpolation (24fps to 120fps slow-motion)",
      "Diffusion-based digital matte painting & infinite texture synthesis",
      "Neural Radiance Fields (NeRF) & 3D Gaussian Splat scene capture",
      "Custom LoRA training & ComfyUI node integration into Nuke"
    ],
    software: ["ComfyUI", "Runway Gen-3", "Stable Diffusion XL", "Topaz Video AI", "PyTorch Neural Models", "Nuke AI CopyCat"],
    turnaround: "Same Day / 12 Hours",
    deliverables: "4K/8K ProRes 4444XQ Plates, Temporal Alpha Passes, NeRF 3D Models",
    pipelineStep: "Stage 03 - Neural Synthesis & Enhancement",
    comparison: {
      title: "Generative Environment Concept to 8K Master",
      beforeTag: "PROMPT / LOW-RES DRAFT",
      afterTag: "8K NEURAL ENHANCED SHOT",
      beforeInfo: "Basic prompt concept storyboard frame",
      afterInfo: "Hyper-realistic 8K cinematic render with photoreal atmospheric light",
      beforeImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      afterImg: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
    }
  }
];
