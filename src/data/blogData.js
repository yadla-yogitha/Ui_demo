export const blogArticles = [
  {
    id: "aces-comp-workflow",
    title: "Deep Compositing in ACEScg: The Ultimate Modern Film Workflow",
    category: "Compositing",
    readTime: "6 min read",
    date: "Aug 2026",
    author: "Elena Vance",
    role: "Head of Compositing",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80",
    excerpt: "How ACEScg unified color management coupled with DeepEXR volumetric compositing revolutionizes photorealism and eliminates edge fringing in complex VFX shots.",
    content: [
      "In modern cinematic VFX pipelines, color consistency and depth sorting represent two of the most critical challenges. By adopting the Academy Color Encoding System (ACEScg), Sunrise VFX achieves a wide-gamut, scene-linear workflow that retains extraordinary highlight latitude and shadow fidelity.",
      "Coupled with DeepEXR data, our compositors no longer rely solely on 2D flat alpha channels. Deep compositing stores multiple color and depth samples per pixel, enabling true volumetric intersections of smoke, fire, and CG characters without messy edge artifacts or manual holdout mattes.",
      "Key takeaways include establishing accurate OCIO configurations from plate ingest, properly transforming CG diffuse and specular AOVs, and maintaining linear mathematical accuracy right up to final delivery to the colorist."
    ]
  },
  {
    id: "neural-vfx-pipeline",
    title: "How We Leverage Neural Diffusion to Accelerate Roto and Plate Clean-Up",
    category: "AI & Innovation",
    readTime: "8 min read",
    date: "July 2026",
    author: "Dr. Alex Richter",
    role: "AI Research Director",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Discover how custom-trained diffusion models and neural optical flow models assist our prep artists in executing complex occlusions and wire paint-outs in half the time.",
    content: [
      "Generative AI is not replacing visual effects artists; it is supercharging their capabilities. At Sunrise VFX, we built a proprietary neural inpainting and matte refinement pipeline built on top of ComfyUI and Foundry Nuke's CopyCat machine learning framework.",
      "By training custom LoRAs on clean background plates and using multi-directional optical flow vectors, our system can propose intelligent clean patches for moving cameras and dynamic lighting. The artist retains 100% creative control to tweak, blend, and grade the result.",
      "This hybrid approach reduces turnaround times for high-volume rig removals from days to hours, freeing our artists to focus on hero artistic execution."
    ]
  },
  {
    id: "precision-matchmove-drone",
    title: "Mastering 3D Camera Tracking for Anamorphic & High-Speed Drone Shots",
    category: "Matchmove",
    readTime: "5 min read",
    date: "June 2026",
    author: "Marcus Chen",
    role: "Lead Matchmove TD",
    image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Techniques for achieving sub-0.2px RMS solve error on challenging anamorphic lens distortion grids, rolling shutter artifacts, and dynamic drone trajectory solves.",
    content: [
      "Solving 3D camera tracks on modern anamorphic lenses requires understanding optical distortion characteristics such as breathing, non-uniform barrel distortion, and anamorphic bokeh stretch.",
      "In this breakdown, we explore our step-by-step workflow using 3DEqualizer: lens calibration grid shooting, ST-map generation, manual point curation on motion-blurred foreground elements, and survey point cloud registration.",
      "With these techniques, we achieve solve errors consistently below 0.3 pixels RMS, ensuring zero slip when 3D CG elements are placed onto the live-action plate."
    ]
  }
];
