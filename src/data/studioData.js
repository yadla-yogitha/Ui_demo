export const studioInfo = {
  name: 'SUNRISE VFX STUDIO',
  tagline: 'BRINGING IMAGINATION TO REALITY',
  description: 'We are a creative VFX studio delivering exceptional visual effects for films, commercials and digital content with passion, precision and perfection.',
  stats: [
    { label: 'Feature Films & Shows', value: '25+' },
    { label: 'Completed VFX Shots', value: '1500' },
    { label: 'Client Delivery Rate', value: '99.9%' },
    { label: 'Global Artists & TDs', value: '65+' },
  ],
  locations: [
    { city: 'Vijayawada', address: 'No. 2-6-32, A Block 104, SVB Square, Vijayawada, Krishna district, Andhra Pradesh, India, 521139', phone: '+1 (323) 555-0192', email: 'info@sunrisevfx.com' },
  ],
};

export const servicesData = [
  {
    id: 'prep',
    number: '01',
    name: 'Prep',
    title: 'Prep & Digital Plate Restoration',
    shortDesc: 'Pixel-perfect wire removal, rig extraction, tracking marker cleanup, and complex plate reconstruction.',
    fullDesc: 'Our Prep department operates with surgical precision. We remove stunt wires, hydraulic rigs, safety harnesses, boom mics, tracking markers, dust spots, and unwanted set elements while flawlessly reconstructing backgrounds, motion blur, and film grain.',
    features: [
      'Stunt Rig, Cable & Wire Removal',
      'Tracking Marker & Sensor Inpainting',
      'Clean Plate Background Recreation',
      'Beauty Retouching & Cosmetic Fixes',
      'Film Grain & Digital Noise Fidelity Restoration',
      'Scratch, Dust & Artifact Elimination'
    ],
    tools: ['Foundry Nuke', 'Silhouette FX', 'Mocha Pro', 'Adobe Photoshop', 'Substance 3D'],
    specs: 'ACEScg / Rec.709 / Linear EXR pipelines up to 8K resolution with floating-point precision.',
    turnaround: '24 - 48 Hours Standard Delivery',
    badge: 'Core VFX Discipline',
    glowColor: 'from-amber-500/20 to-yellow-500/10',
    reelVideo: '/reels/prep_reel.mp4',
  },
  {
    id: 'roto',
    number: '02',
    name: 'Roto',
    title: 'High-Precision Rotoscopy',
    shortDesc: 'Sub-pixel silhouette extraction, complex organic motion, fine hair/fur, and stereoscopic mattes.',
    fullDesc: 'Sunrise Roto delivers uncompromising alpha isolation. From fast-moving actors with intricate hair details to flying debris, transparent glass, and stereoscopic 3D depths, our rotoscope team ensures sharp, flicker-free edge isolation for seamless compositing.',
    features: [
      'Hard-Surface & Organic Silhouette Extraction',
      'Intricate Fine Hair & Fur Strands Isolation',
      'High-Speed Motion Blur Curve Matching',
      'Stereoscopic 3D & VR 360° Depth Rotoscopy',
      'Multi-Tier Organized Matte Deliverables (RGB + Alpha channels)',
      'Defocus & Optical Bokeh Edge Matching'
    ],
    tools: ['Silhouette FX', 'Foundry Nuke', 'Mocha Pro', 'After Effects'],
    specs: 'Sub-pixel accuracy, per-frame motion blur interpolation, Nuke script node trees.',
    turnaround: 'High-volume scalability (150+ shots/week)',
    badge: 'Industry Standard',
    glowColor: 'from-yellow-500/20 to-amber-600/10',
    reelVideo: '/reels/roto_reel.mp4',
  },
  {
    id: 'comp',
    number: '03',
    name: 'Comp',
    title: 'Deep Compositing & CGI Integration',
    shortDesc: 'Photorealistic multi-pass CG integration, digital matte painting, keying, and atmospheric FX.',
    fullDesc: 'The crown jewel of visual effects. Our Compositing supervisors assemble live-action plates, 3D CGI render passes (beauty, diffuse, specular, normals, cryptomattes, depth), digital matte paintings (DMP), green/blue screens, and dynamic FX into a unified, breathtaking shot.',
    features: [
      'Deep Compositing & Multi-Channel EXR Integration',
      'Photoreal CGI Creature & Vehicle Integration',
      'Green / Blue Screen Advanced Screen Keying & Spill Suppression',
      'Digital Matte Painting (DMP) & 2.5D/3D Set Extensions',
      'Pyrotechnics, Smoke, Rain, Sparks & Volumetric Atmospherics',
      'Anamorphic Lens Flares, Optical Distortion & Film Emulation'
    ],
    tools: ['Foundry NukeX / Nuke Studio', 'Houdini FX Engine', 'Autodesk Maya', 'Unreal Engine 5', 'DaVinci Resolve'],
    specs: '32-bit Linear color grading, Cryptomatte pass extraction, ACES 1.3 color managed pipeline.',
    turnaround: 'Episodic, Commercial & Feature Film Grade',
    badge: 'Hero VFX Discipline',
    glowColor: 'from-amber-400/20 to-yellow-600/10',
    reelVideo: '/reels/comp_reel.mp4',
  },
  {
    id: 'matchmove',
    number: '04',
    name: 'Matchmove',
    title: '3D Camera Tracking & Matchmove',
    shortDesc: 'Sub-millimeter 3D camera reconstruction, object tracking, actor rotomation, and lens solving.',
    fullDesc: 'Bridging the physical set and the digital realm. We calculate the exact trajectory, focal length, sensor dimension, and lens optical distortion of camera movements, enabling 3D artists to insert CG assets with mathematically perfect spatial alignment.',
    features: [
      '3D Camera Motion Solving (Handheld, Steadicam, Drone, Dolly)',
      'Rigid & Deformable Object Tracking',
      'Actor Body & Facial Rotomation (Match-anim)',
      'Lens Grid Calibration & ST-Map Distortion Extraction',
      'LiDAR Point Cloud & Photogrammetry Alignment',
      'Virtual Camera Layout & Set Geometry Surveying'
    ],
    tools: ['3DEqualizer 4', 'Syntheyes', 'PFTrack', 'Autodesk Maya', 'Nuke CameraTracker'],
    specs: 'Average solve residual < 0.4 pixels. Alembic / FBX camera exports with distortion metadata.',
    turnaround: 'Rapid camera solves within 12-24 hours',
    badge: 'Precision Engineering',
    glowColor: 'from-yellow-400/20 to-amber-500/10',
    reelVideo: '/reels/matchmove_reel.mp4',
  },
  {
    id: 'ai-videos',
    number: '05',
    name: 'AI Videos',
    title: 'AI Videos & Next-Gen Neural VFX',
    shortDesc: 'Cutting-edge generative AI, neural inpainting, AI pre-vis, and neural VFX enhancement.',
    fullDesc: 'Sunrise VFX blends traditional Hollywood craft with state-of-the-art Generative AI and Neural Rendering. We accelerate turnaround times and expand creative horizons with neural plate inpainting, deep generative pre-visualization, neural face cleanup, and 8K AI super-resolution.',
    features: [
      'Neural Video Inpainting & Automated Plate Prep',
      'AI Generative Pre-Visualization & Rapid Concept Reels',
      'Neural Face Retouching & Temporal De-Aging',
      'AI 4K / 8K Super-Resolution & Frame Rate Remastering',
      'Custom LoRA / Model Training for Studio Production IP',
      'Hybrid AI + Nuke Composite Integration Pipelines'
    ],
    tools: ['Stable Diffusion XL', 'ComfyUI VFX Pipeline', 'Runway Gen-3 Alpha', 'Topaz Video AI', 'Custom PyTorch Models'],
    specs: 'Custom trained neural checkpoints, temporal consistency filters, seamless EXR integration.',
    turnaround: 'Rapid AI Concepting & 4X Accelerated Delivery',
    badge: 'Future of Cinema',
    glowColor: 'from-amber-300/25 to-yellow-500/15',
    reelVideo: '/reels/comp_reel.mp4',
  }
];

export const breakdownsData = [
  {
    id: 'breakdown-comp',
    category: 'Comp',
    serviceId: 'comp',
    title: 'Sci-Fi Cruiser Orbital Strike',
    project: 'Nebula Protocol (Feature Film)',
    description: 'Green screen live-action plate combined with 48 multi-pass CGI render layers, Houdini atmospheric thruster fire, and deep compositing optical flares.',
    beforeLabel: 'Raw Green Screen Plate',
    afterLabel: 'Final Hollywood Composite',
    beforeImage: '/breakdowns/comp_plate.jpg',
    afterImage: '/breakdowns/comp_final.jpg',
    stats: { frames: '280 Frames', software: 'NukeX, Maya, Houdini', resolution: '4K DCI' }
  },
  {
    id: 'breakdown-prep',
    category: 'Prep',
    serviceId: 'prep',
    title: 'High-Altitude Stunt Wire & Rig Removal',
    project: 'Apex Velocity (Action Thriller)',
    description: 'Total digital removal of 6 safety cables, stunt crane harnesses, and camera tracking markers with dynamic mountain cliff texture reconstruction.',
    beforeLabel: 'Production Plate with Cables & Rig',
    afterLabel: 'Clean Restored Final Plate',
    beforeImage: '/breakdowns/prep_plate.jpg',
    afterImage: '/breakdowns/prep_final.jpg',
    stats: { frames: '420 Frames', software: 'Silhouette, Nuke, Mocha', resolution: '4K Open Gate' }
  },
  {
    id: 'breakdown-roto',
    category: 'Roto',
    serviceId: 'roto',
    title: 'Character Hair & Motion Blur Rotoscopy',
    project: 'Sunrise VFX Production Plate',
    description: 'Sub-pixel rotoscope extraction of high-velocity hair strands and motion blur curves during windy production footage for complete background replacement and seamless compositing.',
    beforeLabel: 'Live Production Plate',
    afterLabel: 'Alpha Matte & Roto Isolation',
    beforeImage: '/breakdowns/roto_live_plate.png',
    afterImage: '/breakdowns/roto_alpha_matte.png',
    stats: { frames: '190 Frames', software: 'Silhouette FX, Nuke', resolution: '4K ACEScg' }
  },
  {
    id: 'breakdown-matchmove',
    category: 'Matchmove',
    serviceId: 'matchmove',
    title: 'Drone 3D Camera Reconstruction & Lens Solve',
    project: 'Cyber Metropolis (Commercial)',
    description: 'Full 3D spatial solve of high-speed drone footage over urban architecture, extracting lens distortion grids for seamless CG skyscraper insertion.',
    beforeLabel: 'Raw Drone Footage Plate',
    afterLabel: '3D Point Cloud & Wireframe Solve',
    beforeImage: '/breakdowns/matchmove_plate.jpg',
    afterImage: '/breakdowns/matchmove_solve.jpg',
    stats: { frames: '350 Frames', software: '3DEqualizer 4, Maya', resolution: '6K RAW' }
  },
  {
    id: 'breakdown-ai',
    category: 'AI Videos',
    serviceId: 'ai-videos',
    title: 'Neural Pre-Vis & Generative World Synthesis',
    project: 'Aetheria 2099 (Sci-Fi Feature)',
    description: 'Combining live-action studio set footage with neural generative world extensions, real-time lighting relighting, and AI-accelerated particle flow.',
    beforeLabel: 'Studio Stage Shot',
    afterLabel: 'AI Neural World Extension',
    beforeImage: '/breakdowns/ai_plate.jpg',
    afterImage: '/breakdowns/ai_final.jpg',
    stats: { frames: '500 Frames', software: 'ComfyUI, Stable Diffusion, Nuke', resolution: '4K Neural Upscaled' }
  }
];

export const studioReels = [
  { id: 'comp', name: 'Compositing Reel', category: 'Comp', videoUrl: '/reels/comp_reel.mp4', desc: 'Deep compositing, photoreal CG integration, and multi-pass EXR' },
  { id: 'prep', name: 'Paint & Prep Reel', category: 'Prep', videoUrl: '/reels/prep_reel.mp4', desc: 'Wire/rig removal, plate clean-up, and marker restoration' },
  { id: 'roto', name: 'Rotoscopy Reel', category: 'Roto', videoUrl: '/reels/roto_reel.mp4', desc: 'Sub-pixel organic silhouettes, hair, fur, and motion blur isolation' },
  { id: 'matchmove', name: 'Matchmove Reel', category: 'Matchmove', videoUrl: '/reels/matchmove_reel.mp4', desc: '3D camera motion tracking, object solving, and lens calibration' },
];

export const portfolioProjects = [
  {
    id: 'p1',
    title: 'Starship Odyssey',
    category: 'Comp',
    client: 'Paramount / Streaming',
    year: '2025',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    videoUrl: '/reels/comp_reel.mp4',
    shotsCount: '140 Shots',
    tags: ['Comp', '3D CG Integration', 'Deep EXR'],
    description: 'Complex deep compositing, photoreal space battles, and planetary atmosphere renderings.'
  },
  {
    id: 'p2',
    title: 'Shadow Realm: Bloodlines',
    category: 'Roto',
    client: 'Warner Bros. Discovery',
    year: '2025',
    thumbnail: '/breakdowns/roto_live_plate.png',
    videoUrl: '/reels/roto_reel.mp4',
    shotsCount: '220 Shots',
    tags: ['Roto', 'Hair Detail', 'Motion Blur'],
    description: 'Intricate rotoscope isolation for high-speed martial arts combat with weapon trailing.'
  },
  {
    id: 'p3',
    title: 'Hyperdrive Tokyo',
    category: 'Prep',
    client: 'Global Automotive Brand',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    videoUrl: '/reels/prep_reel.mp4',
    shotsCount: '85 Shots',
    tags: ['Prep', 'Rig Removal', 'Plate Restoration'],
    description: 'High-speed camera crane removal and reflective vehicle body scratch elimination.'
  },
  {
    id: 'p4',
    title: 'Cyberpunk Metropolis',
    category: 'Matchmove',
    client: 'Netflix Originals',
    year: '2025',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    videoUrl: '/reels/matchmove_reel.mp4',
    shotsCount: '190 Shots',
    tags: ['Matchmove', '3D Camera Tracking', 'LiDAR'],
    description: 'Complex handheld and vehicle camera tracks with millimeter precision.'
  },
  {
    id: 'p5',
    title: 'Neon Genesis: AI Pre-Vis',
    category: 'AI Videos',
    client: 'Sony Pictures Imageworks',
    year: '2025',
    thumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    videoUrl: '/reels/comp_reel.mp4',
    shotsCount: '65 Shots',
    tags: ['AI Videos', 'Neural Inpainting', 'Gen-3'],
    description: 'Generative environment expansion and neural de-aging for flashback sequences.'
  },
  {
    id: 'p6',
    title: 'Apex Legends: Cinematic Trailer',
    category: 'Comp',
    client: 'EA / Respawn',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80',
    videoUrl: '/reels/comp_reel.mp4',
    shotsCount: '110 Shots',
    tags: ['Comp', 'Pyrotechnics', 'Volumetric Lighting'],
    description: 'Stylized cinematic lighting and explosive energy effects compositing.'
    
  }
];

export const teamMembers = [
  {
    name: 'Alexander Sterling',
    role: 'VFX Supervisor & Co-Founder',
    bio: '18+ years leading VFX on Oscar-nominated feature films and blockbuster franchises.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
    credits: 'Avengers: Endgame, Dune Part 2, Avatar'
  },
  {
    name: 'Elena Rostova',
    role: 'Head of Compositing (Nuke)',
    bio: 'Pioneering deep compositing workflows, photoreal integration, and optical pipeline design.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
    credits: 'The Batman, Blade Runner 2049, Stranger Things'
  },
  {
    name: 'Marcus Vance',
    role: 'Lead Matchmove & Tracking TD',
    bio: '3DEqualizer master and LiDAR survey specialist with over 2,500 solved production shots.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
    credits: 'Top Gun: Maverick, Fast X, Mission Impossible'
  },
  {
    name: 'Dr. Hiroshi Tanaka',
    role: 'Director of AI VFX R&D',
    bio: 'Ex-DeepMind neural rendering researcher bridging generative diffusion with Nuke node graphs.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
    credits: 'Neural VFX Patents, Siggraph 2024 Presenter'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Roto & Prep Department Lead',
    bio: 'Oversees 40+ senior roto/prep artists delivering clean plates and sub-pixel mattes worldwide.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80',
    credits: 'Marvel Studios, HBO Max, Disney+'
  }
];

export const openJobs = [
  {
    id: 'job-1',
    title: 'Senior Nuke Compositor',
    department: 'Compositing',
    location: 'Remote / Los Angeles',
    type: 'Full-time',
    exp: '5+ Years Feature Experience',
    desc: 'Lead hero shot composites, multi-pass CGI integration, and deep compositing workflows on major studio productions.'
  },
  {
    id: 'job-2',
    title: 'Senior Roto / Silhouette Artist',
    department: 'Roto & Prep',
    location: 'Remote / London / Mumbai',
    type: 'Full-time',
    exp: '3+ Years Industry Experience',
    desc: 'Deliver pristine sub-pixel organic mattes, complex hair roto, and stereoscopic depth isolation.'
  },
  {
    id: 'job-3',
    title: 'Lead 3D Matchmove TD',
    department: 'Tracking',
    location: 'Remote / Vancouver',
    type: 'Full-time',
    exp: '4+ Years in 3DEqualizer',
    desc: 'Solve complex drone, handheld, and moving object shots with precise lens distortion maps and LiDAR alignment.'
  },
  {
    id: 'job-4',
    title: 'AI VFX Pipeline Engineer',
    department: 'Research & AI',
    location: 'Remote / Global',
    type: 'Full-time',
    exp: 'Python, PyTorch, ComfyUI, Nuke API',
    desc: 'Develop proprietary neural inpainting, automated roto acceleration, and generative pre-vis plugins for studio pipeline.'
  }
];

export const blogPosts = [
  {
    id: 'b1',
    title: 'Bridging Nuke Deep Compositing with Neural Video Synthesis',
    category: 'AI & Comp',
    date: 'Aug 20, 2026',
    readTime: '6 min read',
    author: 'Elena Rostova & Dr. Hiroshi Tanaka',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    snippet: 'Explore how combining 32-bit floating point deep EXR data with temporal neural inpainting reduces prep turnaround by 70%.'
  },
  {
    id: 'b2',
    title: 'Mastering Hair & Motion Blur Roto in Silhouette FX',
    category: 'Roto Techniques',
    date: 'Aug 14, 2026',
    readTime: '5 min read',
    author: 'Sarah Jenkins',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    snippet: 'Practical tips for handling high-frequency hair detail, motion blur sub-sampling, and avoiding edge chatter in final comps.'
  },
  {
    id: 'b3',
    title: 'Solving Impossible Drone Shots in 3DEqualizer 4',
    category: 'Matchmove Guide',
    date: 'Jul 29, 2026',
    readTime: '8 min read',
    author: 'Marcus Vance',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    snippet: 'A deep dive into dynamic rolling shutter compensation, variable focal length solving, and survey point registration.'
  }
];
